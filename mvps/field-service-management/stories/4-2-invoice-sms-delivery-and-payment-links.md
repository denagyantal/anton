# Story 4.2: Invoice SMS Delivery and Payment Links

Status: done

## Story

As a tradesperson,
I want to text my invoice to the customer with a payment link and get notified when they pay,
so that I can collect payment instantly from their phone without writing a check or calling with card info.

## Acceptance Criteria

1. **[Invoice sent via SMS with payment link]** Given an invoice has status `DRAFT` or `SENT` and `pdfUrl` is non-empty, when the user taps "Send Invoice" on the job detail screen (job status `INVOICED`) and the device is online, then `POST /api/v1/invoices/:id/send` is called; the invoice's `paymentToken` is set to a new 64-char hex token, `status` transitions to `SENT`, `sentAt` is set to now; an SMS is dispatched to the customer via Twilio containing the business name, formatted total, and URL `{WEB_APP_URL}/pay/{paymentToken}`; the WatermelonDB invoice record is immediately updated with `status='SENT'`, `sentAt` (as ms timestamp), and `paymentToken`; and the user sees an `Alert` with "Invoice Sent" confirmation. (FR21, FR48)

2. **[Send Invoice is online-only]** Given the device has no internet connectivity (as reported by `NetworkContext.isConnected`), when the user taps "Send Invoice", then `Alert.alert('Send Invoice', 'Send requires an internet connection')` is shown and no API call or WatermelonDB write is made. SMS delivery requires connectivity — this is an intentional exception to offline-first.

3. **[Customer views payment page]** Given a customer taps the SMS link, when the web page at `/pay/[token]` loads and calls `GET /api/v1/invoices/view/:token` (public, no auth), then the page renders the invoice number, business name, customer name, all line items with descriptions and prices, subtotal, tax, grand total, and due date — no app install or login required. (FR22)

4. **[Stripe Checkout Session created for payment]** Given the customer is on the payment page and taps "Pay Now", when `POST /api/v1/invoices/pay/:token` is called (public, no auth), then the API creates a Stripe Checkout Session for the invoice total in cents, returning a Stripe-hosted `checkoutUrl`; the customer is redirected to Stripe's checkout accepting Visa, Mastercard, American Express, and Discover; card data never touches our servers. (FR22, NFR20, NFR8)

5. **[Payment link expires after 30 days]** Given an invoice's `sentAt` was more than 30 days ago, when the public `GET /api/v1/invoices/view/:token` or `POST /api/v1/invoices/pay/:token` is called, then the API returns HTTP 410 Gone with error code `PAYMENT_LINK_EXPIRED`; the payment page renders "This invoice payment link has expired" and hides the Pay Now button. (NFR10)

6. **[Stripe webhook processes successful payment]** Given a customer completes payment on Stripe's checkout, when Stripe fires `checkout.session.completed` to `POST /api/v1/payments/webhook`, then: a `Payment` row is created in PostgreSQL with `status='SUCCEEDED'`, `paymentMethod='CARD_VIA_LINK'`, `amount` equal to the invoice `total` (integer cents), and `stripePaymentId` set to `session.payment_intent`; the invoice is updated with `amountPaid = invoice.total`, `status = 'PAID'`, `paidAt = now`; a push notification is sent to the account owner "Payment Received — $X.XX"; and an SMS confirmation is sent to the customer via Twilio. (FR22, FR26, FR47, FR48)

7. **[Webhook idempotency — no duplicate payments]** Given the Stripe webhook fires `checkout.session.completed` for the same session twice (Stripe's retry behaviour), when the handler processes the second event, then it finds an existing `Payment` row with the same `stripePaymentId` and returns HTTP 200 immediately without creating a duplicate record. (NFR16)

8. **[Invoice status visible on mobile after payment via sync]** Given a payment has been processed by the webhook and invoice `status` is `PAID` in PostgreSQL, when the WatermelonDB sync pulls changes on the mobile device (background sync or app foreground), then the invoice record in WatermelonDB is updated to `status='PAID'`, `amountPaid`, and `paidAt`, and the job detail screen invoice badge reflects the new status.

9. **[Money stored as integer cents throughout]** All monetary values — `Payment.amount`, `Invoice.amountPaid`, Stripe `unit_amount` — are integer cents in storage and API. Stripe natively uses cents for USD, so no conversion is needed at the Stripe boundary. Display formatting (`$X.XX`) is applied only in the UI. (architecture rule)

## Tasks / Subtasks

### Task 1: Install Stripe SDK (AC: #4, #6)

- [x] 1.1: In `apps/api/`, run `npm install stripe` — Stripe v17+ ships its own TypeScript types; no `@types/stripe` needed
- [x] 1.2: Add to `apps/api/.env.example`:
  ```
  STRIPE_SECRET_KEY=sk_test_...
  STRIPE_WEBHOOK_SECRET=whsec_...
  ```

### Task 2: Prisma — Add Payment Model (AC: #6, #7, #9)

- [x] 2.1: In `apps/api/prisma/schema.prisma`, add two enums after the existing `InvoiceStatus` enum:
  ```prisma
  enum PaymentMethod {
    CARD_ON_SITE
    CARD_VIA_LINK
  }

  enum PaymentStatus {
    PENDING
    SUCCEEDED
    FAILED
    REFUNDED
  }
  ```
- [x] 2.2: Add the `Payment` model after the `Invoice` model:
  ```prisma
  model Payment {
    id                  String        @id @default(uuid())
    accountId           String        @map("account_id")
    invoiceId           String        @map("invoice_id")
    amount              Int
    stripePaymentId     String?       @unique @map("stripe_payment_id")
    paymentMethod       PaymentMethod @map("payment_method")
    status              PaymentStatus @default(PENDING)
    quickbooksPaymentId String?       @map("quickbooks_payment_id")
    createdAt           DateTime      @default(now()) @map("created_at")
    updatedAt           DateTime      @updatedAt @map("updated_at")
    syncedAt            DateTime?     @map("synced_at")

    account Account @relation(fields: [accountId], references: [id])
    invoice Invoice @relation(fields: [invoiceId], references: [id])

    @@index([accountId], name: "idx_payments_account_id")
    @@index([invoiceId], name: "idx_payments_invoice_id")
    @@map("payments")
  }
  ```
- [x] 2.3: In the `Account` model's relation block, add after `invoices Invoice[]`:
  ```prisma
  payments Payment[]
  ```
- [x] 2.4: In the `Invoice` model's relation block, add after the existing closing brace (before `@@index`):
  ```prisma
  payments Payment[]
  ```
- [x] 2.5: Run migration: `cd apps/api && npx prisma migrate dev --name add-payments`
- [x] 2.6: Run `npx prisma generate` to update the Prisma client types

### Task 3: Stripe Config (AC: #4, #6)

- [x] 3.1: Create `apps/api/src/config/stripe.ts`:
  ```typescript
  import Stripe from 'stripe';

  export const stripe = new Stripe(process.env['STRIPE_SECRET_KEY']!, {
    apiVersion: '2025-04-30.basil',
  });
  ```
  Note: Use whatever the current stable `apiVersion` string is for Stripe v17 — check `node_modules/stripe/types/lib.d.ts` for the correct literal. The `basil` suffix is the most recent API version (Stripe uses date-based versioning with a name suffix).

### Task 4: WatermelonDB Schema — Add `payments` Table (AC: #8, #9)

- [x] 4.1: In `apps/mobile/src/db/schema.ts`, bump `version: 8` to `version: 9`
- [x] 4.2: Add the `payments` tableSchema at the end of the `tables` array (after `invoices`):
  ```typescript
  tableSchema({
    name: 'payments',
    columns: [
      { name: 'account_id', type: 'string' },
      { name: 'invoice_id', type: 'string' },
      { name: 'amount', type: 'number' },
      { name: 'stripe_payment_id', type: 'string', isOptional: true },
      { name: 'payment_method', type: 'string' },
      { name: 'status', type: 'string' },
      { name: 'created_at', type: 'number' },
      { name: 'updated_at', type: 'number' },
    ],
  }),
  ```

### Task 5: WatermelonDB Migration — v9 (AC: #8)

- [x] 5.1: In `apps/mobile/src/db/migrations.ts`, add the v9 migration at the **TOP** of the `migrations` array (before the existing `toVersion: 8` entry — WatermelonDB requires descending order):
  ```typescript
  {
    toVersion: 9,
    steps: [
      createTable({
        name: 'payments',
        columns: [
          { name: 'account_id', type: 'string' },
          { name: 'invoice_id', type: 'string' },
          { name: 'amount', type: 'number' },
          { name: 'stripe_payment_id', type: 'string', isOptional: true },
          { name: 'payment_method', type: 'string' },
          { name: 'status', type: 'string' },
          { name: 'created_at', type: 'number' },
          { name: 'updated_at', type: 'number' },
        ],
      }),
    ],
  },
  ```

### Task 6: WatermelonDB Payment Model (AC: #8)

- [x] 6.1: Create `apps/mobile/src/db/models/payment.ts`:
  ```typescript
  import { Model } from '@nozbe/watermelondb';
  import { field, text, readonly, date } from '@nozbe/watermelondb/decorators';

  export default class Payment extends Model {
    static table = 'payments';

    @text('account_id') accountId!: string;
    @text('invoice_id') invoiceId!: string;
    @field('amount') amount!: number;
    @text('stripe_payment_id') stripePaymentId!: string | null;
    @text('payment_method') paymentMethod!: string;
    @text('status') status!: string;
    @readonly @date('created_at') createdAt!: Date;
    @date('updated_at') updatedAt!: Date;
  }
  ```

### Task 7: Register Payment Model in db/index.ts (AC: #8)

- [x] 7.1: In `apps/mobile/src/db/index.ts`, add import: `import Payment from './models/payment';`
- [x] 7.2: Add `Payment` to the `modelClasses` array:
  ```typescript
  modelClasses: [PricebookItem, Customer, Quote, LineItem, QuotePhoto, Job, JobPhoto, ScheduleEvent, Invoice, Payment],
  ```

### Task 8: API — Create `payment-service.ts` (AC: #4, #6, #7)

- [x] 8.1: Create `apps/api/src/services/payment-service.ts`:
  ```typescript
  import { stripe } from '../config/stripe.js';
  import { prisma } from '../config/prisma.js';
  import { AppError } from '../utils/error.js';

  export async function createCheckoutSession(
    invoiceId: string,
    token: string,
    webAppUrl: string,
  ): Promise<string> {
    const invoice = await prisma.invoice.findFirst({
      where: { id: invoiceId },
      include: {
        account: { select: { businessName: true } },
      },
    });
    if (!invoice) throw new AppError('INVOICE_NOT_FOUND', 'Invoice not found', 404);

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: `Invoice ${invoice.invoiceNumber ?? invoice.id}`,
              description: `From ${invoice.account.businessName ?? 'Your service provider'}`,
            },
            unit_amount: invoice.total, // already integer cents
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${webAppUrl}/pay/${token}?success=true`,
      cancel_url: `${webAppUrl}/pay/${token}`,
      metadata: {
        invoiceId: invoice.id,
        accountId: invoice.accountId,
        token,
      },
    });

    if (!session.url) {
      throw new AppError('STRIPE_SESSION_ERROR', 'Failed to create checkout session', 502);
    }
    return session.url;
  }

  export async function handleCheckoutCompleted(sessionId: string): Promise<void> {
    const session = await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ['payment_intent'],
    });

    const stripePaymentId = typeof session.payment_intent === 'string'
      ? session.payment_intent
      : session.payment_intent?.id ?? session.id;

    const { invoiceId, accountId, token } = session.metadata ?? {};
    if (!invoiceId || !accountId) return; // not our invoice session

    // Idempotency guard
    const existing = await prisma.payment.findFirst({
      where: { stripePaymentId },
    });
    if (existing) return;

    const invoice = await prisma.invoice.findFirst({
      where: { id: invoiceId, accountId },
      include: {
        customer: { select: { name: true, phone: true } },
        account: { select: { businessName: true } },
      },
    });
    if (!invoice) return;

    await prisma.$transaction([
      prisma.payment.create({
        data: {
          accountId,
          invoiceId,
          amount: invoice.total,
          stripePaymentId,
          paymentMethod: 'CARD_VIA_LINK',
          status: 'SUCCEEDED',
        },
      }),
      prisma.invoice.update({
        where: { id: invoiceId },
        data: {
          status: 'PAID',
          amountPaid: invoice.total,
          paidAt: new Date(),
        },
      }),
    ]);

    return;
  }
  ```
  Note: `handleCheckoutCompleted` returns data needed by the route handler for push/SMS dispatch (push token lookup and customer phone). The route handler fetches those separately after calling this service method. Keep the service thin and the route handler responsible for notification dispatch.

  Actually, rewrite `handleCheckoutCompleted` to return the invoice/customer data the route needs:
  ```typescript
  export async function handleCheckoutCompleted(sessionId: string): Promise<{
    alreadyProcessed: boolean;
    invoice?: { total: number; invoiceNumber: string | null; accountId: string };
    customer?: { phone: string; name: string };
  }> {
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    const stripePaymentId = typeof session.payment_intent === 'string'
      ? session.payment_intent
      : session.id;

    const { invoiceId, accountId } = session.metadata ?? {};
    if (!invoiceId || !accountId) return { alreadyProcessed: true };

    const existing = await prisma.payment.findFirst({ where: { stripePaymentId } });
    if (existing) return { alreadyProcessed: true };

    const invoice = await prisma.invoice.findFirst({
      where: { id: invoiceId, accountId },
      include: { customer: { select: { name: true, phone: true } } },
    });
    if (!invoice) return { alreadyProcessed: true };

    await prisma.$transaction([
      prisma.payment.create({
        data: {
          accountId,
          invoiceId,
          amount: invoice.total,
          stripePaymentId,
          paymentMethod: 'CARD_VIA_LINK',
          status: 'SUCCEEDED',
        },
      }),
      prisma.invoice.update({
        where: { id: invoiceId },
        data: { status: 'PAID', amountPaid: invoice.total, paidAt: new Date() },
      }),
    ]);

    return {
      alreadyProcessed: false,
      invoice: { total: invoice.total, invoiceNumber: invoice.invoiceNumber, accountId },
      customer: { phone: invoice.customer.phone, name: invoice.customer.name },
    };
  }
  ```

### Task 9: API — Add `send` and `view` Endpoints to `invoices.ts` (AC: #1, #3, #5)

- [x] 9.1: In `apps/api/src/routes/invoices.ts`, add the missing imports at the top (if not already present):
  ```typescript
  import { sendSms } from '../services/sms-service.js';
  import { generateToken } from '../utils/signed-url.js';
  ```
- [x] 9.2: Add `POST /:id/send` (protected by `authMiddleware` which is applied via `invoicesRouter.use(authMiddleware)` from story 4.1):
  ```typescript
  invoicesRouter.post('/:id/send', async (req, res, next) => {
    try {
      const { id } = req.params;
      const accountId = req.user!.accountId;

      const invoice = await prisma.invoice.findFirst({
        where: { id, accountId },
        include: {
          customer: { select: { name: true, phone: true } },
          account: { select: { businessName: true } },
        },
      });
      if (!invoice) {
        res.status(404).json({ error: { code: 'INVOICE_NOT_FOUND', message: 'Invoice not found', status: 404 } });
        return;
      }
      if (!invoice.pdfUrl) {
        res.status(422).json({ error: { code: 'PDF_NOT_GENERATED', message: 'PDF must be generated before sending', status: 422 } });
        return;
      }
      if (invoice.status === 'PAID' || invoice.status === 'PARTIALLY_PAID') {
        res.status(422).json({ error: { code: 'INVOICE_ALREADY_PAID', message: 'Invoice has already been paid', status: 422 } });
        return;
      }

      const paymentToken = generateToken();
      const sentAt = new Date();
      const webAppUrl = process.env['WEB_APP_URL'] ?? 'http://localhost:3000';
      const formattedTotal = `$${(invoice.total / 100).toFixed(2)}`;
      const businessName = invoice.account.businessName ?? 'Your service provider';

      await prisma.invoice.update({
        where: { id },
        data: { status: 'SENT', paymentToken, sentAt },
      });

      const smsBody = `${businessName} sent you an invoice for ${formattedTotal}. Pay here: ${webAppUrl}/pay/${paymentToken}`;
      await sendSms(invoice.customer.phone, smsBody);

      res.status(200).json({
        data: {
          status: 'SENT',
          sentAt: sentAt.toISOString(),
          paymentToken,
        },
      });
    } catch (err) {
      next(err);
    }
  });
  ```

- [x] 9.3: Add `GET /view/:token` (NO `authMiddleware` — placed BEFORE `invoicesRouter.use(authMiddleware)` by using the Express app directly, or add it as a separate unauthenticated router):

  **IMPORTANT:** Because `invoicesRouter.use(authMiddleware)` applies auth to all routes on that router, public routes must be added to a SEPARATE router. Create a `publicInvoicesRouter` in the same file:
  ```typescript
  export const publicInvoicesRouter = express.Router();

  publicInvoicesRouter.get('/view/:token', async (req, res, next) => {
    try {
      const { token } = req.params;

      const invoice = await prisma.invoice.findFirst({
        where: { paymentToken: token },
        include: {
          customer: { select: { name: true } },
          account: { select: { businessName: true, businessLogoUrl: true, licenseNumber: true } },
          job: {
            include: {
              quote: {
                include: { line_items: { orderBy: { sort_order: 'asc' } } },
              },
            },
          },
        },
      });

      if (!invoice) {
        res.status(404).json({ error: { code: 'INVOICE_NOT_FOUND', message: 'Invoice not found', status: 404 } });
        return;
      }

      // 30-day expiry check
      if (invoice.sentAt) {
        const expiresAt = new Date(invoice.sentAt.getTime() + 30 * 24 * 60 * 60 * 1000);
        if (new Date() > expiresAt) {
          res.status(410).json({ error: { code: 'PAYMENT_LINK_EXPIRED', message: 'This invoice payment link has expired', status: 410 } });
          return;
        }
      }

      const lineItems = invoice.job?.quote?.line_items ?? [];

      res.status(200).json({
        data: {
          invoiceId: invoice.id,
          invoiceNumber: invoice.invoiceNumber,
          status: invoice.status,
          businessName: invoice.account.businessName ?? '',
          businessLogoUrl: invoice.account.businessLogoUrl ?? null,
          customerName: invoice.customer.name,
          lineItems: lineItems.map((li) => ({
            description: li.description,
            quantity: Number(li.quantity),
            unitPrice: li.unit_price,
            total: li.total,
          })),
          subtotal: invoice.subtotal,
          taxAmount: invoice.taxAmount,
          total: invoice.total,
          amountPaid: invoice.amountPaid,
          pdfUrl: invoice.pdfUrl ?? null,
          dueAt: invoice.dueAt?.toISOString() ?? null,
        },
      });
    } catch (err) {
      next(err);
    }
  });
  ```

### Task 10: API — Add Public `pay` Endpoint to `publicInvoicesRouter` (AC: #4, #5)

- [x] 10.1: In the same `publicInvoicesRouter` block in `invoices.ts`, add `POST /pay/:token`:
  ```typescript
  publicInvoicesRouter.post('/pay/:token', async (req, res, next) => {
    try {
      const { token } = req.params;

      const invoice = await prisma.invoice.findFirst({
        where: { paymentToken: token },
      });

      if (!invoice) {
        res.status(404).json({ error: { code: 'INVOICE_NOT_FOUND', message: 'Invoice not found', status: 404 } });
        return;
      }

      // 30-day expiry check
      if (invoice.sentAt) {
        const expiresAt = new Date(invoice.sentAt.getTime() + 30 * 24 * 60 * 60 * 1000);
        if (new Date() > expiresAt) {
          res.status(410).json({ error: { code: 'PAYMENT_LINK_EXPIRED', message: 'Payment link has expired', status: 410 } });
          return;
        }
      }

      if (invoice.status === 'PAID') {
        res.status(422).json({ error: { code: 'INVOICE_ALREADY_PAID', message: 'Invoice has already been paid', status: 422 } });
        return;
      }

      const webAppUrl = process.env['WEB_APP_URL'] ?? 'http://localhost:3000';
      const { createCheckoutSession } = await import('../services/payment-service.js');
      const checkoutUrl = await createCheckoutSession(invoice.id, token, webAppUrl);

      res.status(200).json({ data: { checkoutUrl } });
    } catch (err) {
      next(err);
    }
  });
  ```

### Task 11: API — Create `routes/payments.ts` with Stripe Webhook (AC: #6, #7)

- [x] 11.1: Create `apps/api/src/routes/payments.ts`:
  ```typescript
  import express from 'express';
  import { stripe } from '../config/stripe.js';
  import { handleCheckoutCompleted } from '../services/payment-service.js';
  import { sendPushNotification } from '../services/notification-service.js';
  import { sendSms } from '../services/sms-service.js';
  import { prisma } from '../config/prisma.js';

  export const paymentsRouter = express.Router();

  // NOTE: This route receives raw body (Buffer), NOT parsed JSON.
  // The express.raw() middleware is applied in index.ts BEFORE express.json().
  paymentsRouter.post('/webhook', async (req, res) => {
    const sig = req.headers['stripe-signature'] as string;
    const webhookSecret = process.env['STRIPE_WEBHOOK_SECRET'] ?? '';

    let event;
    try {
      event = stripe.webhooks.constructEvent(req.body as Buffer, sig, webhookSecret);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Webhook signature verification failed';
      res.status(400).json({ error: { code: 'WEBHOOK_INVALID', message, status: 400 } });
      return;
    }

    if (event.type === 'checkout.session.completed') {
      const session = event.data.object;

      try {
        const result = await handleCheckoutCompleted(session.id);

        if (!result.alreadyProcessed && result.invoice && result.customer) {
          const { invoice, customer } = result;
          const formattedAmount = `$${(invoice.total / 100).toFixed(2)}`;
          const invoiceLabel = invoice.invoiceNumber ?? 'invoice';

          // Push notification to account owner
          const owner = await prisma.teamMember.findFirst({
            where: { accountId: invoice.accountId, role: 'OWNER' },
            select: { pushToken: true },
          });
          await sendPushNotification(
            owner?.pushToken,
            'Payment Received',
            `${formattedAmount} received for ${invoiceLabel}`,
          );

          // SMS confirmation to customer
          const account = await prisma.account.findUnique({
            where: { id: invoice.accountId },
            select: { businessName: true },
          });
          const businessName = account?.businessName ?? 'Your service provider';
          await sendSms(
            customer.phone,
            `Payment confirmed! ${businessName} received your payment of ${formattedAmount} for ${invoiceLabel}. Thank you!`,
          );
        }
      } catch (err) {
        console.error('[payments/webhook] processing error:', err);
        // Return 200 to prevent Stripe from retrying — log the error for investigation
      }
    }

    res.status(200).json({ received: true });
  });
  ```

### Task 12: Register Routes in `index.ts` (AC: #1, #4, #6)

- [x] 12.1: In `apps/api/src/index.ts`, add imports at the top of the route imports section:
  ```typescript
  import { paymentsRouter } from './routes/payments.js';
  import { publicInvoicesRouter } from './routes/invoices.js';
  ```
- [x] 12.2: Register the webhook route with `express.raw()` **BEFORE** `app.use(express.json())`. Find the line where `express.json()` is applied globally and add before it:
  ```typescript
  // Stripe webhook must receive raw body — register BEFORE express.json()
  app.use('/api/v1/payments', express.raw({ type: 'application/json' }), paymentsRouter);
  app.use('/api/v1/invoices', publicInvoicesRouter); // public (no auth) invoice routes
  ```
- [x] 12.3: Verify the existing `app.use('/api/v1/invoices', invoicesRouter)` line remains in place (registered after `express.json()`) — the authenticated routes stay on the existing `invoicesRouter`. The `publicInvoicesRouter` handles only the `/view/:token` and `/pay/:token` paths, so there is no conflict.

### Task 13: Web App — Customer Payment Page (AC: #3, #4, #5)

- [x] 13.1: Create directory `apps/web/src/app/(public)/pay/[token]/`
- [x] 13.2: Create `apps/web/src/app/(public)/pay/[token]/page.tsx` (Next.js 15 server component):
  ```typescript
  const API_URL = process.env['API_URL'] ?? 'http://localhost:3001';

  type InvoiceData = {
    invoiceId: string;
    invoiceNumber: string | null;
    status: string;
    businessName: string;
    businessLogoUrl: string | null;
    customerName: string;
    lineItems: Array<{
      description: string;
      quantity: number;
      unitPrice: number;
      total: number;
    }>;
    subtotal: number;
    taxAmount: number;
    total: number;
    amountPaid: number;
    pdfUrl: string | null;
    dueAt: string | null;
  };

  export default async function PayPage({
    params,
    searchParams,
  }: {
    params: Promise<{ token: string }>;
    searchParams: Promise<{ success?: string }>;
  }) {
    const { token } = await params;
    const { success } = await searchParams;

    const res = await fetch(`${API_URL}/api/v1/invoices/view/${token}`, {
      cache: 'no-store',
    });

    if (!res.ok) {
      const isExpired = res.status === 410;
      return (
        <div className="min-h-screen flex items-center justify-center p-6">
          <div className="text-center max-w-sm">
            <h1 className="text-2xl font-bold text-gray-800 mb-2">
              {isExpired ? 'Payment Link Expired' : 'Invoice Not Found'}
            </h1>
            <p className="text-gray-500">
              {isExpired
                ? 'This payment link has expired. Please contact your service provider.'
                : 'This invoice is no longer available.'}
            </p>
          </div>
        </div>
      );
    }

    const { data: invoice } = (await res.json()) as { data: InvoiceData };
    const formatMoney = (cents: number) => `$${(cents / 100).toFixed(2)}`;

    const isPaid = invoice.status === 'PAID';

    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-2xl mx-auto p-6">
          {/* Header */}
          <div className="bg-white rounded-lg shadow p-6 mb-4">
            {invoice.businessLogoUrl && (
              <img
                src={invoice.businessLogoUrl}
                alt="Business logo"
                className="h-12 mb-3 object-contain"
              />
            )}
            <h1 className="text-xl font-bold text-gray-900">{invoice.businessName}</h1>
            <p className="text-gray-600 mt-1">
              Invoice {invoice.invoiceNumber ? `#${invoice.invoiceNumber}` : ''} for {invoice.customerName}
            </p>
            {invoice.dueAt && (
              <p className="text-sm text-gray-400 mt-1">
                Due {new Date(invoice.dueAt).toLocaleDateString()}
              </p>
            )}
          </div>

          {/* Line Items */}
          <div className="bg-white rounded-lg shadow p-6 mb-4">
            <h2 className="font-semibold text-gray-700 mb-3">Invoice Details</h2>
            {invoice.lineItems.map((item, i) => (
              <div
                key={i}
                className="flex justify-between py-2 border-b border-gray-100 last:border-0"
              >
                <div>
                  <p className="text-sm font-medium text-gray-800">{item.description}</p>
                  <p className="text-xs text-gray-500">
                    {item.quantity} × {formatMoney(item.unitPrice)}
                  </p>
                </div>
                <p className="text-sm font-semibold text-gray-800">{formatMoney(item.total)}</p>
              </div>
            ))}
            <div className="mt-3 pt-3 border-t border-gray-200">
              <div className="flex justify-between text-sm text-gray-600 mb-1">
                <span>Subtotal</span>
                <span>{formatMoney(invoice.subtotal)}</span>
              </div>
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span>Tax</span>
                <span>{formatMoney(invoice.taxAmount)}</span>
              </div>
              <div className="flex justify-between text-lg font-bold text-gray-900">
                <span>Total</span>
                <span>{formatMoney(invoice.total)}</span>
              </div>
            </div>
          </div>

          {/* PDF Link */}
          {invoice.pdfUrl && (
            <div className="mb-4">
              <a
                href={invoice.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-gray-100 text-blue-600 font-medium py-3 rounded-lg"
              >
                View PDF Invoice
              </a>
            </div>
          )}

          {/* Payment Status / Pay Button */}
          {success === 'true' || isPaid ? (
            <div className="text-center bg-green-50 rounded-lg p-6">
              <p className="text-green-700 font-semibold text-lg">Payment Received</p>
              <p className="text-green-600 text-sm mt-1">
                Thank you! Your payment of {formatMoney(invoice.total)} has been processed.
              </p>
            </div>
          ) : (
            <PayButton token={token} apiUrl={process.env['NEXT_PUBLIC_API_URL'] ?? API_URL} />
          )}
        </div>
      </div>
    );
  }
  ```
  Note: Import `PayButton` from `'./pay-button'` at the top of the file.

- [x] 13.3: Create `apps/web/src/app/(public)/pay/[token]/pay-button.tsx` (`'use client'` component):
  ```typescript
  'use client';

  import { useState } from 'react';

  export default function PayButton({
    token,
    apiUrl,
  }: {
    token: string;
    apiUrl: string;
  }) {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handlePay = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const res = await fetch(`${apiUrl}/api/v1/invoices/pay/${token}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
        });
        if (!res.ok) {
          const body = await res.json().catch(() => ({}));
          throw new Error(body?.error?.message ?? 'Payment initiation failed');
        }
        const { data } = await res.json();
        window.location.href = data.checkoutUrl;
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
        setIsLoading(false);
      }
    };

    return (
      <div>
        {error && <p className="text-red-600 text-sm text-center mb-3">{error}</p>}
        <button
          onClick={handlePay}
          disabled={isLoading}
          className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-semibold py-4 rounded-lg text-lg"
        >
          {isLoading ? 'Redirecting to payment...' : 'Pay Now'}
        </button>
        <p className="text-xs text-gray-400 text-center mt-3">
          Secured by Stripe. We never store your card details.
        </p>
      </div>
    );
  }
  ```

### Task 14: Mobile — Add `useSendInvoice` Hook to `use-invoices.ts` (AC: #1, #2)

- [x] 14.1: In `apps/mobile/src/hooks/use-invoices.ts`, add `useSendInvoice` export at the bottom of the file:
  ```typescript
  import type { Invoice as InvoiceType } from '@field-service/shared';

  interface SendInvoiceResult {
    status: string;
    sentAt: string;
    paymentToken: string;
  }

  export function useSendInvoice() {
    const [isSending, setIsSending] = useState(false);
    const { isConnected } = useContext(NetworkContext);

    const sendInvoice = useCallback(async (invoiceId: string): Promise<void> => {
      if (!isConnected) {
        throw new Error('Send requires an internet connection');
      }

      setIsSending(true);
      try {
        const result = await apiClient.post<SendInvoiceResult>(
          `/api/v1/invoices/${invoiceId}/send`,
        );

        await database.write(async () => {
          const invoices = await database
            .get<Invoice>('invoices')
            .query(Q.where('id', invoiceId))
            .fetch();

          if (invoices[0]) {
            await invoices[0].update((record) => {
              record.status = result.status;
              record.sentAt = Date.parse(result.sentAt);
              record.paymentToken = result.paymentToken;
            });
          }
        });
      } finally {
        setIsSending(false);
      }
    }, [isConnected]);

    return { sendInvoice, isSending };
  }
  ```
  Note: Add `import { useState, useCallback, useContext } from 'react'` if not already imported. Add `import { apiClient } from '../services/api-client'` and `import { NetworkContext } from '../contexts/network-context'` if not already present. The `Invoice` WatermelonDB model is already imported at the top of the file from story 4.1.

### Task 15: Mobile — Add "Send Invoice" Button to Job Detail Screen (AC: #1, #2)

- [x] 15.1: In `apps/mobile/app/(tabs)/jobs/[id].tsx`, update the existing `useInvoices` import:
  ```typescript
  import { useJobInvoice, useGenerateInvoice, useSendInvoice } from '../../../src/hooks/use-invoices';
  ```
- [x] 15.2: Inside `JobDetailScreen`, add after the existing invoice hooks:
  ```typescript
  const { sendInvoice, isSending } = useSendInvoice();
  ```
- [x] 15.3: Add a `handleSendInvoice` callback:
  ```typescript
  const handleSendInvoice = useCallback(async () => {
    if (!invoice) return;
    try {
      await sendInvoice(invoice.id);
      Alert.alert('Invoice Sent', 'Payment link sent to customer via SMS.');
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to send invoice';
      Alert.alert('Send Error', message);
    }
  }, [invoice, sendInvoice]);
  ```
- [x] 15.4: In the `renderActionButton()` function, update the `INVOICED` job block (currently showing the invoice badge). Extend it to show a "Send Invoice" button when the invoice status is `DRAFT`:
  ```typescript
  if (job.status === 'COMPLETE' || job.status === 'INVOICED') {
    if (invoice) {
      if (invoice.status === 'DRAFT') {
        return (
          <View>
            <View style={styles.invoicedBadge}>
              <Text style={styles.invoicedText}>
                {invoice.invoiceNumber ?? 'Invoice'} — ${(invoice.total / 100).toFixed(2)}
              </Text>
            </View>
            <TouchableOpacity
              style={[styles.actionButton, styles.sendInvoiceButton]}
              onPress={handleSendInvoice}
              disabled={isSending}
            >
              {isSending
                ? <ActivityIndicator color="#fff" />
                : <Text style={styles.sendInvoiceButtonText}>Send Invoice</Text>}
            </TouchableOpacity>
          </View>
        );
      }
      return (
        <View style={styles.invoicedBadge}>
          <Text style={styles.invoicedText}>
            {invoice.invoiceNumber ?? 'Invoice'} — ${(invoice.total / 100).toFixed(2)}
            {invoice.status === 'PAID' ? ' · PAID' : invoice.status === 'SENT' ? ' · SENT' : ''}
          </Text>
        </View>
      );
    }
    // ... existing Generate Invoice button code (unchanged)
  }
  ```
- [x] 15.5: Add styles to `StyleSheet.create`:
  ```typescript
  sendInvoiceButton: {
    backgroundColor: '#2563EB',
    marginTop: 8,
  },
  sendInvoiceButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  ```

### Task 16: Tests — `payment-service.ts` Unit Tests (AC: #6, #7, #9)

- [x] 16.1: Create `apps/api/src/services/payment-service.test.ts`
- [x] 16.2: Mock `'../config/stripe.js'` and `'../config/prisma.js'`
- [x] 16.3: Test `createCheckoutSession`: invoice found → `stripe.checkout.sessions.create` called with correct `unit_amount` (invoice.total in cents), `mode: 'payment'`, metadata includes `invoiceId` and `token`; returns `session.url`
- [x] 16.4: Test `createCheckoutSession`: invoice not found → throws `AppError` with code `INVOICE_NOT_FOUND`, status 404
- [x] 16.5: Test `handleCheckoutCompleted`: no existing payment → creates payment with `CARD_VIA_LINK`, updates invoice to `PAID`, returns `alreadyProcessed: false` with invoice and customer data
- [x] 16.6: Test `handleCheckoutCompleted`: payment with same `stripePaymentId` already exists → returns `{ alreadyProcessed: true }` immediately; `prisma.$transaction` NOT called
- [x] 16.7: Test `handleCheckoutCompleted`: missing metadata (`invoiceId` or `accountId` null) → returns `{ alreadyProcessed: true }`

### Task 17: Tests — Invoice Routes Integration Tests (AC: #1, #3, #4, #5)

- [x] 17.1: Create `apps/api/tests/integration/invoice-send.test.ts`
- [x] 17.2: Mock `../../src/services/sms-service.js`, `../../src/services/payment-service.js`, `../../src/config/prisma.js`, `../../src/utils/signed-url.js` (returns fixed `'test-token-hex'`)
- [x] 17.3: Test `POST /api/v1/invoices/:id/send`: success → SMS sent with formatted amount and URL containing the token, invoice updated with `status='SENT'` and `paymentToken`, response 200 with `{ status, sentAt, paymentToken }`
- [x] 17.4: Test `POST /api/v1/invoices/:id/send`: no `pdfUrl` → 422 with code `PDF_NOT_GENERATED`
- [x] 17.5: Test `POST /api/v1/invoices/:id/send`: invoice not found → 404
- [x] 17.6: Test `POST /api/v1/invoices/:id/send`: unauthorized → 401
- [x] 17.7: Test `GET /api/v1/invoices/view/:token`: success → 200 with full invoice data including `lineItems`, `total`, `dueAt`
- [x] 17.8: Test `GET /api/v1/invoices/view/:token`: `sentAt` > 30 days ago → 410 with code `PAYMENT_LINK_EXPIRED`
- [x] 17.9: Test `GET /api/v1/invoices/view/:token`: token not found → 404
- [x] 17.10: Test `POST /api/v1/invoices/pay/:token`: success → `createCheckoutSession` called, returns `{ checkoutUrl }`
- [x] 17.11: Test `POST /api/v1/invoices/pay/:token`: expired link → 410

### Task 18: Tests — Webhook Route Tests (AC: #6, #7)

- [x] 18.1: Create `apps/api/tests/integration/payments-webhook.test.ts`
- [x] 18.2: Mock `../../src/config/stripe.js`, `../../src/services/payment-service.js`, `../../src/services/notification-service.js`, `../../src/services/sms-service.js`, `../../src/config/prisma.js`
- [x] 18.3: Test `POST /api/v1/payments/webhook`: invalid Stripe signature → 400 with code `WEBHOOK_INVALID`
- [x] 18.4: Test `POST /api/v1/payments/webhook`: `checkout.session.completed` with `alreadyProcessed: false` → `handleCheckoutCompleted` called, push notification sent, SMS sent, response 200 `{ received: true }`
- [x] 18.5: Test `POST /api/v1/payments/webhook`: `alreadyProcessed: true` → push/SMS NOT called, response 200 `{ received: true }`
- [x] 18.6: Test `POST /api/v1/payments/webhook`: unhandled event type (e.g., `payment_intent.created`) → `handleCheckoutCompleted` NOT called, response 200 `{ received: true }`

## Dev Notes

### Critical: Webhook Route Must Receive Raw Body

Stripe signature verification (`stripe.webhooks.constructEvent`) requires the **raw** request body as a `Buffer`. Express's `express.json()` middleware parses the body and loses the raw bytes, breaking signature verification.

**The webhook route MUST be registered BEFORE `app.use(express.json())`** in `apps/api/src/index.ts`:

```typescript
// CORRECT order in index.ts:
app.use('/api/v1/payments', express.raw({ type: 'application/json' }), paymentsRouter);
app.use(express.json()); // applied to all other routes
app.use('/api/v1/invoices', publicInvoicesRouter);
// ... other routers
```

When using `express.raw()`, `req.body` is a `Buffer`. Cast it: `req.body as Buffer` when passing to `stripe.webhooks.constructEvent`.

### Public Routes vs Authenticated Routes — Two Routers for invoices.ts

`invoicesRouter` already uses `invoicesRouter.use(authMiddleware)` globally (from story 4.1), which applies to ALL routes on that router. Public routes (`/view/:token`, `/pay/:token`) must NOT have auth middleware.

Solution: export TWO routers from `invoices.ts`:
- `invoicesRouter` — all existing authenticated routes (generate-from-job, future CRUD)
- `publicInvoicesRouter` — public customer-facing routes (/view/:token, /pay/:token)

In `index.ts`, register both separately:
```typescript
app.use('/api/v1/invoices', invoicesRouter);     // authenticated routes (existing)
app.use('/api/v1/invoices', publicInvoicesRouter); // public routes (new this story)
```

Express handles both routers for the same path prefix correctly — it tries each in registration order.

### Stripe API Version String

Stripe v17 uses a date-based API version with a suffix (e.g., `'2025-04-30.basil'`). The correct string is bundled in the Stripe npm package types. Check:
```bash
grep -r "ApiVersion" node_modules/stripe/types/lib.d.ts | head -5
```
Use whatever literal is defined there. Mismatching the API version causes a TypeScript error, not a runtime error, so type-check after adding the config.

### Stripe `payment_intent` vs Session ID for Deduplication

`session.payment_intent` is the PaymentIntent ID (`pi_...`). It is the best deduplication key because it persists across webhook retries. However, for edge cases (e.g., `payment_intent` is null for certain payment methods in test mode), fall back to `session.id` (`cs_...`). Both are globally unique:

```typescript
const stripePaymentId = (typeof session.payment_intent === 'string'
  ? session.payment_intent
  : (session.payment_intent as any)?.id) ?? session.id;
```

The `stripePaymentId` column has `@unique` in Prisma, so attempting to insert a duplicate throws a Prisma error — handle this in addition to the explicit guard in `handleCheckoutCompleted`.

### 30-Day Expiry — Computed from `sentAt`, No Extra Column

The `Invoice` model has no `expiresAt` column. Expiry is computed: `sentAt + 30 days`. This avoids a schema migration for a derived value. Both the `view` and `pay` public endpoints perform this check identically:

```typescript
if (invoice.sentAt) {
  const expiresAt = new Date(invoice.sentAt.getTime() + 30 * 24 * 60 * 60 * 1000);
  if (new Date() > expiresAt) {
    res.status(410).json({ error: { code: 'PAYMENT_LINK_EXPIRED', ... } });
    return;
  }
}
```

Invoices without `sentAt` (status DRAFT) cannot be accessed via the public token endpoint anyway, since the token is set at send time.

### Invoice `status` Update in WatermelonDB After Send

Follow the pattern established in story 2.4 (`handleSendQuote`): after the API call succeeds, update the WatermelonDB record immediately without waiting for sync. The `paymentToken` field already exists in the WatermelonDB `invoices` schema (added in story 4.1).

```typescript
// In use-invoices.ts useSendInvoice hook:
await database.write(async () => {
  const invoices = await database.get<Invoice>('invoices')
    .query(Q.where('id', invoiceId)).fetch();
  if (invoices[0]) {
    await invoices[0].update((record) => {
      record.status = result.status;         // 'SENT'
      record.sentAt = Date.parse(result.sentAt); // ms timestamp
      record.paymentToken = result.paymentToken;
    });
  }
});
```

### PAID Status Update — Via Sync, Not Direct Write

When the Stripe webhook fires and the invoice becomes PAID in PostgreSQL, the mobile app learns about this through the **sync engine** (pull from server), NOT through a direct write in the mobile hook. The `paymentToken` → `PAID` transition happens server-side and gets pulled on next sync. This is correct architecture: webhooks update the server; clients learn via sync.

### Webhook Push Notification Failures Are Silent

Same pattern as story 2.4's `sendPushNotification`: notification failures must NOT cause the webhook to return a non-200 response. If push or SMS fail inside the webhook handler, log the error and continue. Return 200 to Stripe regardless:

```typescript
try {
  const result = await handleCheckoutCompleted(session.id);
  // ... send push + SMS
} catch (err) {
  console.error('[payments/webhook] processing error:', err);
  // Fall through to return 200
}
res.status(200).json({ received: true });
```

### `generateToken()` Is Already Available

Story 2.4 created `apps/api/src/utils/signed-url.ts` with `generateToken()` returning a 64-char hex string. Import and reuse — do NOT create a new token utility.

### Stripe `unit_amount` — No Currency Conversion Needed

Stripe accepts `unit_amount` in the smallest currency unit (cents for USD). Our invoice `total` is already stored as integer cents. Pass it directly: `unit_amount: invoice.total`. There is no `/100` division needed at the Stripe boundary — only in the display layer.

### `PaymentToken` Field on WatermelonDB Invoice

The WatermelonDB `invoices` schema already includes `{ name: 'payment_token', type: 'string', isOptional: true }` (added in story 4.1). The Invoice WatermelonDB model has `@text('payment_token') paymentToken!: string | null`. This field is ready to receive the token on the `useSendInvoice` write.

### Prisma `paymentToken` Field Mapping

In Prisma, the field is `paymentToken String? @map("payment_token")`. Prisma camelCase in TypeScript → `invoice.paymentToken`. In the `prisma.invoice.findFirst({ where: { paymentToken: token } })` query, use the camelCase field name (Prisma handles the DB column mapping).

### Mocking Stripe in Tests

```typescript
jest.mock('../config/stripe.js', () => ({
  stripe: {
    checkout: {
      sessions: {
        create: jest.fn().mockResolvedValue({ url: 'https://checkout.stripe.com/test', id: 'cs_test_123' }),
        retrieve: jest.fn().mockResolvedValue({
          id: 'cs_test_123',
          payment_intent: 'pi_test_456',
          metadata: { invoiceId: 'inv-uuid', accountId: 'acc-uuid', token: 'test-token' },
        }),
      },
    },
    webhooks: {
      constructEvent: jest.fn(),
    },
  },
}));
```

For webhook route tests, `stripe.webhooks.constructEvent` is the gatekeeper — mock it to return a test event or throw for invalid signature tests.

### Twilio `customer.phone` Format

The customer's phone field is stored as a free-form string. Twilio requires E.164 format (e.g., `+15551234567`). In the MVP, we trust the phone number stored in the database is valid. Do NOT add phone number reformatting logic — it's out of scope and would break existing tests.

### WatermelonDB Schema Version Bump — Descending Migration Order

The `migrations` array in `migrations.ts` must be in **descending** `toVersion` order (highest first). The new v9 migration goes at the **TOP** of the array, before the existing `toVersion: 8` entry. Same pattern established in story 4.1.

### `apiClient.post<T>()` Returns `body.data` Unwrapped

The mobile `apiClient` automatically unwraps `{ data: ... }` envelopes. When calling `apiClient.post<SendInvoiceResult>('/api/v1/invoices/${id}/send')`, the return value is the inner `data` object (not the full `{ data: {...} }` wrapper). No manual `.data` access needed.

### No NativeWind — Use `StyleSheet.create`

All mobile styling uses `StyleSheet.create`. Do NOT install or use NativeWind/Tailwind in mobile components. This was established in story 2.4 and all subsequent mobile stories.

### Project Structure Notes

**Files to CREATE:**
```
apps/api/src/config/stripe.ts
apps/api/src/services/payment-service.ts
apps/api/src/services/payment-service.test.ts
apps/api/src/routes/payments.ts
apps/api/tests/integration/invoice-send.test.ts
apps/api/tests/integration/payments-webhook.test.ts
apps/mobile/src/db/models/payment.ts
apps/web/src/app/(public)/pay/[token]/page.tsx
apps/web/src/app/(public)/pay/[token]/pay-button.tsx
apps/api/prisma/migrations/YYYYMMDDHHMMSS_add_payments/migration.sql  (auto-generated)
```

**Files to MODIFY:**
```
apps/api/prisma/schema.prisma              (add PaymentMethod/PaymentStatus enums, Payment model, relations)
apps/api/src/routes/invoices.ts            (add publicInvoicesRouter with /view/:token and /pay/:token)
apps/api/src/index.ts                      (register paymentsRouter with express.raw(), publicInvoicesRouter)
apps/mobile/src/db/schema.ts              (bump to v9, add payments table)
apps/mobile/src/db/migrations.ts          (add toVersion: 9 migration at TOP of array)
apps/mobile/src/db/index.ts               (import Payment, add to modelClasses)
apps/mobile/src/hooks/use-invoices.ts     (add useSendInvoice export)
apps/mobile/app/(tabs)/jobs/[id].tsx      (add Send Invoice button and extended invoice badge)
apps/api/package.json                      (add stripe dependency)
apps/api/.env.example                      (add STRIPE_SECRET_KEY, STRIPE_WEBHOOK_SECRET)
```

All paths relative to `mvps/field-service-management/src/` as the monorepo root.

### References

- [Source: planning/epics.md#Story 4.2] — All acceptance criteria, FR21, FR22, FR26, FR47, FR48, NFR8, NFR10, NFR20
- [Source: planning/architecture.md#Infrastructure & Deployment] — "Stripe Payment Links for remote payments"; Twilio for SMS; Expo Push for notifications; NFR8 card data never stored
- [Source: planning/architecture.md#API & Communication Patterns] — `POST /api/v1/invoices/:id/send`, `POST /api/v1/invoices/:id/pay`, `POST /api/v1/payments/webhook`
- [Source: planning/architecture.md#Data Model] — `payments` table: id, accountId, invoiceId, amount, stripePaymentId, paymentMethod, status, quickbooksPaymentId
- [Source: planning/architecture.md#Enforcement Guidelines] — money as integer cents; UUIDs for IDs; WatermelonDB never direct API calls; TLS 1.3
- [Source: planning/architecture.md#Security Requirements] — NFR8 no card data stored; NFR10 30-day link expiry; signed URLs via token (not entity ID)
- [Source: stories/4-1-invoice-generation-from-completed-jobs.md] — Invoice model (Prisma + WatermelonDB), invoice.ts route, invoicesRouter setup, `use-invoices.ts` hook pattern, WatermelonDB v8 schema, `paymentToken` field exists, `_raw.id` server UUID pattern, `$transaction` atomicity, NetworkContext pattern
- [Source: stories/2-4-quote-sms-delivery-and-customer-approval.md] — `sms-service.ts`, `notification-service.ts`, `signed-url.ts`, Twilio v5 mock pattern, Expo push token pattern, public route pattern (no auth middleware), 30-day expiry check, web public page structure, `apiClient.post<T>()` unwrapping, `express.raw()` for webhook body
- [Source: apps/api/src/services/sms-service.ts] — `sendSms(to, body)` function signature and AppError wrapping
- [Source: apps/api/src/services/notification-service.ts] — `sendPushNotification(token, title, body)` — falsy token → no-op, errors swallowed
- [Source: apps/api/src/utils/signed-url.ts] — `generateToken()` → 64-char hex string
- [Source: apps/mobile/src/db/models/invoice.ts] — WatermelonDB Invoice model fields: `paymentToken`, `sentAt`, `status` (all writable)
- [Source: apps/mobile/src/contexts/network-context.tsx] — `NetworkContext` provides `{ isConnected: boolean }`
- [Source: apps/mobile/src/services/api-client.ts] — `apiClient.post<T>(path)` returns unwrapped `body.data`, throws `ApiError` on non-2xx
- [Source: apps/mobile/app/(tabs)/jobs/[id].tsx] — Existing `renderActionButton()` pattern; `invoicedBadge` and `invoiceButton` styles; `ActivityIndicator` already imported; `Alert` import

## Dev Agent Record

### Agent Model Used

claude-sonnet-4-6

### Debug Log References

None — all tasks completed without blockers.

### Completion Notes List

- Installed Stripe v22 (latest available); API version string is `'2026-04-22.dahlia'` (not `basil` as in the story example — checked from `node_modules/stripe/cjs/apiVersion.d.ts`).
- No live database available, so migration was created manually as a SQL file instead of running `prisma migrate dev`. `prisma generate` succeeded using the schema file only.
- `publicInvoicesRouter` registered before `invoicesRouter` in `index.ts`; both share the `/api/v1/invoices` prefix and Express resolves them in registration order.
- Stripe webhook route registered with `express.raw()` before `express.json()` to preserve raw body for signature verification.
- Added stripe mock to three existing test files (`quotes.test.ts`, `index.test.ts`, `tests/integration/invoices.test.ts`) that now transitively import stripe via `index.ts → payments.ts → stripe.ts`.
- All 110 tests pass across 14 test suites (37 new tests added this story).
- Mobile PAID status update flows via sync, not direct write — consistent with architecture.

### File List

**Created:**
- `apps/api/src/config/stripe.ts`
- `apps/api/src/services/payment-service.ts`
- `apps/api/src/services/payment-service.test.ts`
- `apps/api/src/routes/payments.ts`
- `apps/api/tests/integration/invoice-send.test.ts`
- `apps/api/tests/integration/payments-webhook.test.ts`
- `apps/api/prisma/migrations/20260523100000_add_payments/migration.sql`
- `apps/mobile/src/db/models/payment.ts`
- `apps/web/src/app/(public)/pay/[token]/page.tsx`
- `apps/web/src/app/(public)/pay/[token]/pay-button.tsx`

**Modified:**
- `apps/api/prisma/schema.prisma` — added PaymentMethod/PaymentStatus enums, Payment model, relations on Account and Invoice
- `apps/api/src/routes/invoices.ts` — added `POST /:id/send`, exported `publicInvoicesRouter` with `/view/:token` and `/pay/:token`
- `apps/api/src/index.ts` — registered paymentsRouter with express.raw(), publicInvoicesRouter; moved raw middleware before express.json()
- `apps/api/.env.example` — added STRIPE_WEBHOOK_SECRET
- `apps/api/package.json` — added stripe dependency
- `apps/api/src/index.test.ts` — added stripe mock
- `apps/api/src/routes/quotes.test.ts` — added stripe mock
- `apps/api/tests/integration/invoices.test.ts` — added stripe and payment-service mocks
- `apps/mobile/src/db/schema.ts` — bumped to v9, added payments tableSchema
- `apps/mobile/src/db/migrations.ts` — added toVersion: 9 migration at top
- `apps/mobile/src/db/index.ts` — imported Payment, added to modelClasses
- `apps/mobile/src/hooks/use-invoices.ts` — added useSendInvoice export
- `apps/mobile/app/(tabs)/jobs/[id].tsx` — added Send Invoice button, extended invoice badge with PAID/SENT indicators, added handleSendInvoice callback and styles
