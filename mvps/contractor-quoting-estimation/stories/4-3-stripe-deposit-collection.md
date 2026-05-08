# Story 4.3: Stripe Deposit Collection

Status: done

## Story

As a customer,
I want to pay the required deposit directly from the quote page after signing,
so that the contractor can schedule my job and I've secured my spot.

## Acceptance Criteria

1. **Given** I have just signed a quote that has a deposit amount configured
   **When** the signature is confirmed
   **Then** I see a "Pay Deposit" button showing the deposit amount (e.g., `$500.00` or `25% — $625.00`)

2. **Given** I tap "Pay Deposit"
   **When** the payment flow starts
   **Then** I am redirected to a Stripe-hosted checkout page (PCI compliant — no card data touches QuoteCraft servers)
   **And** the checkout shows the deposit amount and contractor's business name

3. **Given** I complete payment on the Stripe checkout
   **When** Stripe processes the payment successfully
   **Then** a Stripe webhook fires `checkout.session.completed` to `POST /api/webhooks/stripe`
   **And** the webhook updates the quote `status` to `PAID`
   **And** the `paidAt` timestamp and `depositAmountPaid` are recorded on the quote
   **And** the `stripePaymentIntentId` is stored for the contractor's records

4. **Given** the contractor views a paid quote
   **When** they open the quote detail
   **Then** they see the deposit payment details: amount, date, and Stripe payment intent ID

5. **Given** the contractor's profile has an email configured
   **When** the deposit is paid (webhook processed)
   **Then** the contractor receives an email notification via Resend (fire-and-forget — email failure must NOT cause the webhook to fail)

6. **Given** a Stripe webhook fails to deliver on first attempt
   **When** the system retries (Stripe's built-in retry mechanism)
   **Then** re-processing the same `checkout.session.completed` event is idempotent — the quote status remains `PAID` with no duplicate updates

7. **Given** the customer is redirected back to the quote after payment
   **When** the page loads with `?payment=success` in the URL
   **Then** if the webhook has already fired, the page shows a "Signed & Deposit Paid" confirmation
   **And** if the webhook has not yet fired (race condition), the page shows a "Payment submitted, awaiting confirmation" banner

8. **Given** a customer attempts to pay a deposit on a quote that is NOT in `SIGNED` status
   **When** `POST /api/quotes/view/[token]/pay` is called
   **Then** a `400` response is returned with a human-readable error

9. **Given** a quote has no deposit configured
   **When** `POST /api/quotes/view/[token]/pay` is called
   **Then** a `400` response is returned with an appropriate error message

## Tasks / Subtasks

- [x] Task 1: Install `stripe` npm package (AC: #2, #3)
  - [x] 1.1 `cd mvps/contractor-quoting-estimation/src && npm install stripe`
  - [x] 1.2 Verify `stripe` appears in `package.json` under `"dependencies"`

- [x] Task 2: Create Stripe client singleton at `src/src/lib/stripe.ts` (AC: #2, #3)
  - [x] 2.1 Create the file using lazy-initialization pattern (same as `resend.ts`):
    ```typescript
    import Stripe from "stripe";

    function getStripeClient(): Stripe {
      const apiKey = process.env.STRIPE_SECRET_KEY;
      if (!apiKey) {
        throw new Error("STRIPE_SECRET_KEY environment variable is not set");
      }
      return new Stripe(apiKey);
    }

    export const stripe = {
      checkout: {
        sessions: {
          create: (params: Stripe.Checkout.SessionCreateParams) =>
            getStripeClient().checkout.sessions.create(params),
        },
      },
      webhooks: {
        constructEvent: (
          payload: string | Buffer,
          sig: string,
          secret: string
        ) => getStripeClient().webhooks.constructEvent(payload, sig, secret),
      },
    };
    ```
  - [x] 2.2 This is the **sole entry point** for Stripe API calls per architecture boundaries — never import `stripe` directly in routes; always import from `@/lib/stripe`

- [x] Task 3: Create `POST /api/quotes/view/[token]/pay` API route (public endpoint) (AC: #2, #8, #9)
  - [x] 3.1 Create directory `src/src/app/api/quotes/view/[token]/pay/` and file `route.ts`
  - [x] 3.2 Export `async function POST` — **NO auth check** (public endpoint, same pattern as the sign route):
    ```typescript
    export async function POST(
      request: NextRequest,
      { params }: { params: Promise<{ token: string }> }
    ) {
      const { token } = await params;
    ```
  - [x] 3.3 Find the quote with line items and contractor profile:
    ```typescript
    const quote = await prisma.quote.findUnique({
      where: { viewToken: token },
      include: {
        lineItems: true,
        user: { include: { profile: true } },
      },
    });
    if (!quote) {
      return NextResponse.json(
        { error: { code: "NOT_FOUND", message: "Quote not found" } },
        { status: 404 }
      );
    }
    ```
  - [x] 3.4 Verify quote is in SIGNED status (must sign before paying):
    ```typescript
    if (quote.status !== "SIGNED") {
      return NextResponse.json(
        { error: { code: "INVALID_STATUS", message: "Quote must be signed before collecting a deposit" } },
        { status: 400 }
      );
    }
    ```
  - [x] 3.5 Verify deposit is configured:
    ```typescript
    if (!quote.depositType || quote.depositValue == null) {
      return NextResponse.json(
        { error: { code: "NO_DEPOSIT", message: "No deposit is configured for this quote" } },
        { status: 400 }
      );
    }
    ```
  - [x] 3.6 Calculate deposit amount server-side (recalculates from line items — never trust client-side amounts):
    ```typescript
    const subtotal = quote.lineItems.reduce(
      (sum, li) => sum + li.quantity * li.unitPrice,
      0
    );
    const taxAmount = subtotal * (quote.taxRate / 100);
    const total = subtotal + taxAmount;

    const depositAmount =
      quote.depositType === "FIXED"
        ? quote.depositValue
        : total * (quote.depositValue / 100);

    const depositAmountCents = Math.round(depositAmount * 100);

    if (depositAmountCents <= 0) {
      return NextResponse.json(
        { error: { code: "INVALID_AMOUNT", message: "Deposit amount must be greater than zero" } },
        { status: 400 }
      );
    }
    ```
  - [x] 3.7 Create Stripe Checkout Session:
    ```typescript
    const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: `Deposit for Quote ${quote.quoteNumber}`,
              description: quote.user.profile?.businessName ?? undefined,
            },
            unit_amount: depositAmountCents,
          },
          quantity: 1,
        },
      ],
      success_url: `${appUrl}/quote/${token}?payment=success`,
      cancel_url: `${appUrl}/quote/${token}`,
      metadata: {
        viewToken: token,
        quoteId: quote.id,
        depositAmount: String(depositAmount),
      },
    });
    ```
  - [x] 3.8 Return the checkout URL:
    ```typescript
    return NextResponse.json(
      { data: { checkoutUrl: session.url } },
      { status: 200 }
    );
    ```
  - [x] 3.9 Wrap entire handler in try/catch — catch ZodError if needed (400), unknown errors (500):
    ```typescript
    } catch (error) {
      console.error("Failed to create Stripe checkout session:", error);
      return NextResponse.json(
        { error: { code: "INTERNAL_ERROR", message: "Failed to initiate payment" } },
        { status: 500 }
      );
    }
    ```

- [x] Task 4: Create `DepositPayment` client component (AC: #1, #2)
  - [x] 4.1 Create `src/src/components/customer-view/deposit-payment.tsx` (NEW file in existing directory)
  - [x] 4.2 Add `"use client"` directive at top
  - [x] 4.3 Define props interface:
    ```typescript
    interface DepositPaymentProps {
      token: string;
      depositDisplay: string; // e.g., "$500.00" or "25% — $625.00"
    }
    ```
  - [x] 4.4 Set up state:
    ```typescript
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    ```
  - [x] 4.5 Implement `handlePayDeposit` — calls the pay API and redirects to Stripe:
    ```typescript
    const handlePayDeposit = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const res = await fetch(`/api/quotes/view/${token}/pay`, {
          method: "POST",
        });
        if (!res.ok) {
          const body = await res.json();
          setError(body.error?.message ?? "Failed to start payment. Please try again.");
          return;
        }
        const body = await res.json();
        if (body.data?.checkoutUrl) {
          window.location.href = body.data.checkoutUrl;
        } else {
          setError("Payment URL not received. Please try again.");
        }
      } catch {
        setError("Network error. Please check your connection and try again.");
      } finally {
        setIsLoading(false);
      }
    };
    ```
  - [x] 4.6 Render the payment button:
    ```tsx
    return (
      <div className="space-y-2">
        <button
          type="button"
          onClick={handlePayDeposit}
          disabled={isLoading}
          className="w-full min-h-[44px] bg-blue-600 text-white rounded-lg px-6 py-3 font-semibold text-base hover:bg-blue-700 active:bg-blue-800 disabled:opacity-50"
        >
          {isLoading ? "Starting payment..." : `Pay Deposit — ${depositDisplay}`}
        </button>
        {error && (
          <p className="text-red-600 text-sm text-center" role="alert">
            {error}
          </p>
        )}
      </div>
    );
    ```

- [x] Task 5: Create `POST /api/webhooks/stripe` route (AC: #3, #5, #6)
  - [x] 5.1 Create directory `src/src/app/api/webhooks/stripe/` and file `route.ts`
  - [x] 5.2 This route has NO auth check — it is authenticated by Stripe signature verification only
  - [x] 5.3 Read the raw body as text (required for Stripe signature verification — MUST use `request.text()` not `request.json()`):
    ```typescript
    export async function POST(request: NextRequest) {
      const rawBody = await request.text();
      const sig = request.headers.get("stripe-signature");

      if (!sig) {
        return NextResponse.json(
          { error: { code: "MISSING_SIGNATURE", message: "Missing stripe-signature header" } },
          { status: 400 }
        );
      }

      const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
      if (!webhookSecret) {
        console.error("STRIPE_WEBHOOK_SECRET is not configured");
        return NextResponse.json(
          { error: { code: "CONFIG_ERROR", message: "Webhook not configured" } },
          { status: 500 }
        );
      }
    ```
  - [x] 5.4 Verify the Stripe signature:
    ```typescript
      let event: Stripe.Event;
      try {
        event = stripe.webhooks.constructEvent(rawBody, sig, webhookSecret);
      } catch (err) {
        console.error("Stripe webhook signature verification failed:", err);
        return NextResponse.json(
          { error: { code: "INVALID_SIGNATURE", message: "Invalid webhook signature" } },
          { status: 400 }
        );
      }
    ```
  - [x] 5.5 Handle only `checkout.session.completed` — ignore all other event types:
    ```typescript
      if (event.type !== "checkout.session.completed") {
        return NextResponse.json({ received: true }, { status: 200 });
      }

      const session = event.data.object as Stripe.Checkout.Session;
      const viewToken = session.metadata?.viewToken;

      if (!viewToken) {
        console.error("Stripe webhook: missing viewToken in session metadata", session.id);
        return NextResponse.json({ received: true }, { status: 200 });
      }
    ```
  - [x] 5.6 Look up the quote and update it — wrap DB operations in try/catch and return 500 on failure (so Stripe retries):
    ```typescript
      try {
        const quote = await prisma.quote.findUnique({
          where: { viewToken },
          include: { user: { include: { profile: true } } },
        });

        if (!quote) {
          console.error("Stripe webhook: quote not found for viewToken", viewToken);
          return NextResponse.json({ received: true }, { status: 200 });
        }

        // Idempotency guard: skip if already PAID (duplicate webhook delivery)
        if (quote.status === "PAID") {
          return NextResponse.json({ received: true }, { status: 200 });
        }

        const paymentIntentId =
          typeof session.payment_intent === "string"
            ? session.payment_intent
            : session.payment_intent?.id ?? null;

        // Use Stripe's amount_total (in cents) as the source of truth for amount paid
        const depositAmountPaid =
          session.amount_total != null
            ? session.amount_total / 100
            : parseFloat(session.metadata?.depositAmount ?? "0");

        await prisma.quote.update({
          where: { id: quote.id },
          data: {
            status: "PAID",
            paidAt: new Date(),
            depositAmountPaid,
            stripePaymentIntentId: paymentIntentId,
          },
        });

        // Send notification email (fire-and-forget — email failure must NOT return 500)
        const contractorEmail = quote.user.profile?.email;
        if (contractorEmail) {
          try {
            await resend.emails.send({
              from: "QuoteCraft <noreply@quotecraft.app>",
              to: contractorEmail,
              subject: `Deposit received for Quote ${quote.quoteNumber}`,
              html: `
                <p>Hi ${quote.user.profile?.contactName ?? quote.user.profile?.businessName ?? "there"},</p>
                <p>Great news! The deposit for quote <strong>${quote.quoteNumber}</strong> has been paid by <strong>${quote.customerName}</strong>.</p>
                <p>Amount paid: $${depositAmountPaid.toFixed(2)}</p>
                <p>Log in to QuoteCraft to view the payment details.</p>
              `,
            });
          } catch (emailError) {
            console.error("Failed to send payment notification email:", emailError);
            // Do NOT rethrow — email failure must not cause Stripe to retry the webhook
          }
        }
      } catch (dbError) {
        console.error("Stripe webhook: database update failed:", dbError);
        // Return 500 so Stripe retries the webhook (DB failures are transient)
        return NextResponse.json(
          { error: { code: "INTERNAL_ERROR", message: "Failed to process payment" } },
          { status: 500 }
        );
      }

      return NextResponse.json({ received: true }, { status: 200 });
    }
    ```
  - [x] 5.7 Import `Stripe` type at top: `import type Stripe from "stripe";`
  - [x] 5.8 Import `stripe` from `@/lib/stripe`, `prisma` from `@/lib/db`, `resend` from `@/lib/resend`

- [x] Task 6: Update `CustomerQuoteViewData` type to expose payment fields (AC: #4, #7)
  - [x] 6.1 Open `src/src/types/index.ts` (MODIFY — do NOT recreate)
  - [x] 6.2 Add `paidAt` and `depositAmountPaid` to the `CustomerQuoteViewData` interface's `quote` sub-object:
    ```typescript
    export interface CustomerQuoteViewData {
      quote: {
        // ... existing fields ...
        signedAt?: Date | string | null;   // already added in Story 4.2
        paidAt?: Date | string | null;     // Add this
        depositAmountPaid?: number | null; // Add this
        // ...
      };
      contractor: ContractorPublicInfo;
    }
    ```
  - [x] 6.3 These fields are safe to expose on the public customer view — they are confirmation data, not sensitive

- [x] Task 7: Update `GET /api/quotes/view/[token]/route.ts` to expose payment fields (AC: #4, #7)
  - [x] 7.1 Open `src/src/app/api/quotes/view/[token]/route.ts` (MODIFY — do NOT recreate)
  - [x] 7.2 In the `responseData.quote` object, add the new fields alongside `signedAt`:
    ```typescript
    quote: {
      // ... existing fields ...
      signedAt: quote.signedAt,           // already present
      paidAt: quote.paidAt,               // Add this
      depositAmountPaid: quote.depositAmountPaid, // Add this
      // ...
    }
    ```
  - [x] 7.3 Do NOT expose `stripePaymentIntentId` in the public response — it is for contractor use only

- [x] Task 8: Update `CustomerQuotePage` to handle `?payment=success` query param (AC: #7)
  - [x] 8.1 Open `src/src/app/quote/[token]/page.tsx` (MODIFY — do NOT recreate)
  - [x] 8.2 Add `searchParams` to the function signature — Next.js 16 requires `await searchParams`:
    ```typescript
    export default async function CustomerQuotePage({
      params,
      searchParams,
    }: {
      params: Promise<{ token: string }>;
      searchParams: Promise<{ payment?: string }>;
    }) {
      const { token } = await params;
      const { payment } = await searchParams;
      const paymentSuccess = payment === "success";
    ```
  - [x] 8.3 Pass `paymentSuccess` to `QuoteDisplay`:
    ```tsx
    return (
      <main className="min-h-screen bg-gray-50">
        <QuoteDisplay data={data} token={token} paymentSuccess={paymentSuccess} />
      </main>
    );
    ```

- [x] Task 9: Update `QuoteDisplay` component to wire up the deposit payment flow (AC: #1, #2, #4, #7)
  - [x] 9.1 Open `src/src/components/customer-view/quote-display.tsx` (MODIFY — do NOT recreate)
  - [x] 9.2 Add `paymentSuccess?: boolean` to the props interface:
    ```typescript
    interface Props {
      data: CustomerQuoteViewData;
      token: string;
      paymentSuccess?: boolean;
    }
    ```
  - [x] 9.3 Add `localPaidAt` state alongside existing state vars:
    ```typescript
    const [localPaidAt, setLocalPaidAt] = useState<string | null>(null);
    // note: setLocalPaidAt is not needed yet — the page SSR-loads with updated status after Stripe redirect
    // but keep it for completeness in case of future optimistic updates
    ```
  - [x] 9.4 Compute `depositAmountDisplay` for the pay button label (separate from the existing `depositDisplay` used in the totals section):
    ```typescript
    const depositAmountDisplay = (() => {
      if (!quote.depositType || quote.depositValue == null) return null;
      if (quote.depositType === "FIXED") {
        return formatCurrency(quote.depositValue);
      }
      const depositAmount = total * (quote.depositValue / 100);
      return `${quote.depositValue}% — ${formatCurrency(depositAmount)}`;
    })();
    ```
  - [x] 9.5 Import `DepositPayment` at the top:
    ```typescript
    import { DepositPayment } from "@/components/customer-view/deposit-payment";
    ```
  - [x] 9.6 Replace the existing bottom CTA section with the new multi-state version:
    ```tsx
    {/* Bottom CTA — conditional on status */}
    <div className="p-4 space-y-3">
      {/* Payment-success banner (shown when Stripe redirect lands but webhook hasn't fired yet) */}
      {paymentSuccess && localStatus !== "PAID" && (
        <div className="p-4 bg-blue-50 rounded-xl border border-blue-200 text-center">
          <p className="text-blue-700 font-semibold">Payment submitted!</p>
          <p className="text-blue-600 text-sm mt-1">
            Your deposit is being processed. This page will show confirmation shortly.
          </p>
        </div>
      )}

      {localStatus === "PAID" ? (
        <div className="text-center p-6 bg-green-50 rounded-xl border border-green-200">
          <p className="text-green-700 font-semibold text-lg">Quote Signed &amp; Deposit Paid</p>
          {data.quote.depositAmountPaid != null && (
            <p className="text-green-600 text-sm mt-1">
              Deposit paid: {formatCurrency(data.quote.depositAmountPaid)}
            </p>
          )}
          {data.quote.paidAt && (
            <p className="text-green-600 text-sm mt-1">
              Paid on{" "}
              {new Intl.DateTimeFormat(undefined, { dateStyle: "long" }).format(
                new Date(data.quote.paidAt)
              )}
            </p>
          )}
        </div>
      ) : localStatus === "SIGNED" ? (
        <div className="space-y-3">
          <div className="text-center p-6 bg-green-50 rounded-xl border border-green-200">
            <p className="text-green-700 font-semibold text-lg">Quote Signed</p>
            {localSignedAt && (
              <p className="text-green-600 text-sm mt-1">
                Signed on{" "}
                {new Intl.DateTimeFormat(undefined, {
                  dateStyle: "long",
                  timeStyle: "short",
                }).format(new Date(localSignedAt))}
              </p>
            )}
            {!localSignedAt && data.quote.signedAt && (
              <p className="text-green-600 text-sm mt-1">
                Signed on{" "}
                {new Intl.DateTimeFormat(undefined, {
                  dateStyle: "long",
                  timeStyle: "short",
                }).format(new Date(data.quote.signedAt))}
              </p>
            )}
          </div>
          {depositAmountDisplay && !paymentSuccess && (
            <DepositPayment token={token} depositDisplay={depositAmountDisplay} />
          )}
        </div>
      ) : showSignPad ? (
        <div>
          {submitError && (
            <p className="text-red-600 text-sm mb-3" role="alert">
              {submitError}
            </p>
          )}
          <SignaturePad
            signerName={data.quote.customerName}
            onSubmit={handleSignatureSubmit}
            onCancel={() => {
              setShowSignPad(false);
              setSubmitError(null);
            }}
            isSubmitting={isSubmitting}
          />
        </div>
      ) : (
        <button
          type="button"
          data-testid="accept-sign-btn"
          onClick={() => setShowSignPad(true)}
          className="w-full min-h-[44px] bg-blue-600 text-white rounded-lg px-6 py-3 font-semibold text-base hover:bg-blue-700 active:bg-blue-800"
        >
          Accept &amp; Sign
        </button>
      )}
    </div>
    ```
  - [x] 9.7 Remove the old CTA section that conditionally renders for `SIGNED || PAID` together — it is fully replaced by the new block above

- [x] Task 10: Write tests for `POST /api/quotes/view/[token]/pay` (AC: #2, #8, #9)
  - [x] 10.1 Create `src/src/app/api/quotes/view/[token]/pay/route.test.ts`
  - [x] 10.2 Mock dependencies at the top:
    ```typescript
    vi.mock("@/lib/db", () => ({
      prisma: {
        quote: {
          findUnique: vi.fn(),
        },
      },
    }));

    vi.mock("@/lib/stripe", () => ({
      stripe: {
        checkout: {
          sessions: {
            create: vi.fn(),
          },
        },
      },
    }));
    ```
  - [x] 10.3 Define a `mockQuote` fixture with status `SIGNED`, depositType `FIXED`, depositValue `500`, and 2 line items:
    ```typescript
    const mockLineItems = [
      { id: "li-1", quantity: 2, unitPrice: 150, unit: "each", description: "Service A" },
      { id: "li-2", quantity: 1, unitPrice: 200, unit: "each", description: "Service B" },
    ];
    const mockQuote = {
      id: "q1",
      status: "SIGNED",
      quoteNumber: "QT-2601-0001",
      viewToken: "tok_abc123",
      customerName: "John Smith",
      depositType: "FIXED",
      depositValue: 500,
      taxRate: 10,
      lineItems: mockLineItems,
      user: {
        id: "user-1",
        profile: {
          businessName: "Bob's Plumbing",
          email: "bob@plumbing.com",
        },
      },
    };
    ```
  - [x] 10.4 Define `makePostRequest` helper:
    ```typescript
    const makePostRequest = (token: string) =>
      POST(
        new Request(`http://localhost/api/quotes/view/${token}/pay`, {
          method: "POST",
        }) as NextRequest,
        { params: Promise.resolve({ token }) }
      );
    ```
  - [x] 10.5 Write these tests (at least 8 total):
    - Test 1: Returns `404` when token does not match any quote
    - Test 2: Returns `400` when quote status is `DRAFT` (not SIGNED)
    - Test 3: Returns `400` when quote status is `PAID` (already paid)
    - Test 4: Returns `400` when quote has no deposit configured (`depositType: null`)
    - Test 5: Returns `200` with `checkoutUrl` when quote is SIGNED with FIXED deposit
    - Test 6: Calls `stripe.checkout.sessions.create` with correct `unit_amount` in cents (500 * 100 = 50000)
    - Test 7: Calls `stripe.checkout.sessions.create` with correct `metadata` (includes `viewToken` and `quoteId`)
    - Test 8: Returns `200` and calculates PERCENTAGE deposit correctly (e.g., 25% of total)

- [x] Task 11: Write tests for `POST /api/webhooks/stripe` (AC: #3, #5, #6)
  - [x] 11.1 Create `src/src/app/api/webhooks/stripe/route.test.ts`
  - [x] 11.2 Mock dependencies:
    ```typescript
    vi.mock("@/lib/db", () => ({
      prisma: {
        quote: {
          findUnique: vi.fn(),
          update: vi.fn(),
        },
      },
    }));

    vi.mock("@/lib/stripe", () => ({
      stripe: {
        webhooks: {
          constructEvent: vi.fn(),
        },
      },
    }));

    vi.mock("@/lib/resend", () => ({
      resend: {
        emails: {
          send: vi.fn().mockResolvedValue({ id: "email-456" }),
        },
      },
    }));
    ```
  - [x] 11.3 Define mock fixtures:
    ```typescript
    const mockCheckoutSession = {
      id: "cs_test_123",
      object: "checkout.session",
      payment_intent: "pi_test_abc",
      amount_total: 50000,  // $500.00 in cents
      metadata: {
        viewToken: "tok_abc123",
        quoteId: "q1",
        depositAmount: "500",
      },
    };

    const mockCompletedEvent = {
      type: "checkout.session.completed",
      data: { object: mockCheckoutSession },
    };

    const mockQuote = {
      id: "q1",
      status: "SIGNED",
      quoteNumber: "QT-2601-0001",
      viewToken: "tok_abc123",
      customerName: "John Smith",
      user: {
        id: "user-1",
        profile: {
          contactName: "Bob",
          businessName: "Bob's Plumbing",
          email: "bob@plumbing.com",
        },
      },
    };
    ```
  - [x] 11.4 Define `makeWebhookRequest` helper:
    ```typescript
    const makeWebhookRequest = (body: string, sig: string) =>
      new Request("http://localhost/api/webhooks/stripe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "stripe-signature": sig,
        },
        body,
      }) as NextRequest;
    ```
  - [x] 11.5 Write these tests (at least 10 total):
    - Test 1: Returns `400` when `stripe-signature` header is missing
    - Test 2: Returns `400` when `stripe.webhooks.constructEvent` throws (invalid signature)
    - Test 3: Returns `200` with `{ received: true }` for non-checkout events (e.g., `payment_intent.created`) without touching DB
    - Test 4: Returns `200` and updates quote status to `PAID` when `checkout.session.completed` is valid
    - Test 5: Sets `paidAt`, `depositAmountPaid` (500.00 = 50000 cents / 100), `stripePaymentIntentId` correctly
    - Test 6: Sends notification email to contractor on successful payment
    - Test 7: Returns `200` even when `resend.emails.send` throws (fire-and-forget)
    - Test 8: Returns `200` with idempotent behavior when quote status is already `PAID` (no DB update)
    - Test 9: Returns `200` (logs but does NOT fail) when quote not found for viewToken
    - Test 10: Returns `200` (logs but does NOT fail) when `viewToken` is missing from session metadata
    - Test 11: Returns `500` when `prisma.quote.update` throws (so Stripe retries the webhook)

- [x] Task 12: Final verification (AC: all)
  - [x] 12.1 `cd mvps/contractor-quoting-estimation/src && npm run build` — zero TypeScript errors
  - [x] 12.2 `npm test` — all tests pass (97 existing + at least 19 new = 116+ tests)
  - [x] 12.3 Confirm `stripe` is listed in `package.json` dependencies
  - [x] 12.4 Confirm `src/src/lib/stripe.ts` exists and exports `stripe` object (NOT a raw `Stripe` instance)
  - [x] 12.5 Confirm `POST /api/quotes/view/[token]/pay` has NO `import { auth }` (public endpoint)
  - [x] 12.6 Confirm `POST /api/webhooks/stripe` uses `request.text()` (NOT `request.json()`) for raw body
  - [x] 12.7 Confirm webhook returns `500` on DB errors (so Stripe retries) but `200` when email fails (email is fire-and-forget)
  - [x] 12.8 Confirm webhook is idempotent — if quote is already `PAID`, it returns `200` without re-updating
  - [x] 12.9 Confirm `QuoteDisplay` shows "Pay Deposit" button only when `localStatus === "SIGNED"` AND `depositAmountDisplay` is not null AND `!paymentSuccess`
  - [x] 12.10 Confirm `QuoteDisplay` shows separate PAID confirmation state (distinct from SIGNED state)
  - [x] 12.11 Confirm `DepositPayment` component has `"use client"` directive
  - [x] 12.12 Confirm payment success banner appears only when `paymentSuccess && localStatus !== "PAID"`
  - [x] 12.13 Confirm `paidAt` and `depositAmountPaid` are exposed in `GET /api/quotes/view/[token]` response
  - [x] 12.14 Confirm no card data is stored — only `stripePaymentIntentId`, `depositAmountPaid`, `paidAt`
  - [x] 12.15 Confirm deposit amount is always calculated server-side from DB line items — never trusted from client

## Dev Notes

### Critical: Project Root and Directory Layout

The working directory for all `npm`, `npx prisma`, etc. commands is:
```
mvps/contractor-quoting-estimation/src/    ← package.json lives here
```

The Next.js source lives at the **nested** path:
```
mvps/contractor-quoting-estimation/src/src/
  app/
    api/
      quotes/view/[token]/
        route.ts                         ← MODIFY: add paidAt, depositAmountPaid to GET response
        route.test.ts                    ← MODIFY: add tests for new fields
        pay/                             ← NEW directory
          route.ts                       ← NEW: POST create Stripe checkout session
          route.test.ts                  ← NEW: 8+ Vitest tests
      webhooks/
        stripe/                          ← NEW directory
          route.ts                       ← NEW: POST Stripe webhook handler
          route.test.ts                  ← NEW: 11+ Vitest tests
    quote/[token]/
      page.tsx                           ← MODIFY: add searchParams, pass paymentSuccess prop
  components/
    customer-view/
      deposit-payment.tsx                ← NEW: "Pay Deposit" button component
      quote-display.tsx                  ← MODIFY: restructure CTA for PAID/SIGNED states
  lib/
    stripe.ts                            ← NEW: Stripe client singleton
  types/
    index.ts                             ← MODIFY: add paidAt, depositAmountPaid to CustomerQuoteViewData.quote
```

### No Prisma Migration Needed

All Stripe-related fields already exist in the schema from the initial Story 1.1 migration:

```prisma
model Quote {
  status                QuoteStatus      // ← PAID enum value already exists
  paidAt                DateTime?        // ← already exists
  stripePaymentIntentId String?          // ← already exists
  depositAmountPaid     Float?           // ← already exists
}
```

Verify with: `npx prisma db pull` or inspect `prisma/migrations/` directory.

### Stack Versions (from Stories 4.1 and 4.2 completion notes)

- **Next.js 16.2.2** — both `params` AND `searchParams` in page/route components are `Promise<{...}>`. Always `await` them before use.
- **React 19.2.4** — standard hooks patterns apply
- **Zod v4** — use `err.issues[0]?.message` (NOT `err.errors` which does not exist in Zod v4)
- **Vitest** — test runner (not Jest). Import from `"vitest"` not `"@jest/globals"`.
- **TypeScript strict mode** — all new code must pass `tsc --noEmit`

### Next.js 16 Breaking Change — `searchParams` is a Promise

In the page component, `searchParams` is a Promise just like `params`:

```typescript
export default async function CustomerQuotePage({
  params,
  searchParams,
}: {
  params: Promise<{ token: string }>;
  searchParams: Promise<{ payment?: string }>;
}) {
  const { token } = await params;
  const { payment } = await searchParams;
```

**Do NOT** destructure without awaiting — TypeScript will likely error, and it will silently break.

### Stripe Raw Body Requirement for Webhooks

Stripe signature verification requires the **raw, unmodified request body** as bytes. In Next.js App Router route handlers, calling `request.json()` parses the body — this corrupts the raw bytes needed for signature verification.

**Always use `request.text()` in the webhook route:**
```typescript
const rawBody = await request.text();
// then pass rawBody (string) to stripe.webhooks.constructEvent
```

This is NOT an issue in other API routes where `request.json()` is fine.

### Stripe Checkout Session Configuration

The `mode: "payment"` creates a one-time payment checkout (as opposed to `"subscription"`). The customer never stores card details with QuoteCraft — Stripe hosts the entire payment UI.

Key metadata fields stored in session (used by webhook to look up the quote):
- `viewToken` — the public quote token (used to look up the quote without knowing the ID)
- `quoteId` — the database ID (belt-and-suspenders fallback)
- `depositAmount` — the calculated deposit amount as a string (used if `amount_total` is unavailable)

The `success_url` and `cancel_url` must be absolute URLs. Use `NEXT_PUBLIC_APP_URL` (already in `.env.example`):
```
success_url: `${appUrl}/quote/${token}?payment=success`
cancel_url:  `${appUrl}/quote/${token}`
```

### Stripe Deposit Amount Calculation

The deposit amount is **always calculated server-side** from the database line items. Never trust client-submitted amounts. The calculation mirrors the client-side `QuoteDisplay` logic:

```typescript
const subtotal = lineItems.reduce((sum, li) => sum + li.quantity * li.unitPrice, 0);
const taxAmount = subtotal * (quote.taxRate / 100);
const total = subtotal + taxAmount;

const depositAmount =
  quote.depositType === "FIXED"
    ? quote.depositValue
    : total * (quote.depositValue / 100);

const depositAmountCents = Math.round(depositAmount * 100); // Stripe requires integer cents
```

### Webhook Idempotency — Critical for NFR18

Stripe's retry mechanism (NFR18: up to 3 attempts over 24 hours) means the same `checkout.session.completed` event can be delivered multiple times. The webhook MUST be idempotent:

```typescript
// Idempotency guard — return 200 immediately if already processed
if (quote.status === "PAID") {
  return NextResponse.json({ received: true }, { status: 200 });
}
```

Without this guard, duplicate webhook delivery would cause repeated DB writes and repeated notification emails.

### Webhook Error Return Codes — Critical Distinction

| Scenario | Return code | Why |
|---|---|---|
| Invalid Stripe signature | `400` | Reject bad requests |
| Missing configuration | `500` | Infrastructure issue |
| Quote not found in DB | `200` | Don't retry — quote won't appear |
| Already PAID (idempotent) | `200` | Don't retry — already processed |
| **DB update fails** | **`500`** | **Stripe will retry** — transient failure |
| Email send fails | `200` | Don't retry — email is fire-and-forget |

The rule: return `500` only when the primary business operation (DB update) fails. Return `200` for all "soft" failures.

### `DepositPayment` Component — Flow

After the customer taps "Pay Deposit":
1. Component calls `POST /api/quotes/view/[token]/pay`
2. Server creates a Stripe Checkout Session and returns `checkoutUrl`
3. Component sets `window.location.href = checkoutUrl` → browser navigates to Stripe
4. Customer completes payment on Stripe-hosted page
5. Stripe redirects customer to `success_url` → `/quote/${token}?payment=success`
6. Page SSR-loads with fresh DB state (webhook likely already fired → status: PAID)
7. `QuoteDisplay` receives `paymentSuccess={true}` and `localStatus = "PAID"` from SSR data

If the webhook hasn't fired by the time the success redirect lands (edge case), `localStatus` will be "SIGNED". The `paymentSuccess` banner handles this gracefully without confusing the customer.

### `QuoteDisplay` CTA Logic Summary

The bottom CTA section has four distinct states (in evaluation order):

| Condition | UI shown |
|---|---|
| `localStatus === "PAID"` | "Signed & Deposit Paid" confirmation with amount + date |
| `localStatus === "SIGNED"` | "Quote Signed" confirmation + "Pay Deposit" button (if deposit configured) |
| `showSignPad === true` | `<SignaturePad>` component |
| default | "Accept & Sign" button |

Additionally, when `paymentSuccess && localStatus !== "PAID"`, show a "Payment submitted" banner above the CTA (handles the race condition where SSR still shows SIGNED status).

### Public Routes — No Auth Required

Both new routes are **public endpoints** (no `auth()` call):
- `POST /api/quotes/view/[token]/pay` — authenticated only by the unguessable `viewToken`
- `POST /api/webhooks/stripe` — authenticated only by the Stripe webhook signature

**Do NOT** import or call `auth()` in these routes.

### Stripe `lib/stripe.ts` Pattern — Consistent with `resend.ts`

Use the same lazy-initialization wrapper pattern established in `resend.ts`:
- `getStripeClient()` reads `process.env.STRIPE_SECRET_KEY` at call time (not module load time)
- This prevents build-time errors when env vars aren't set
- The `stripe` export wraps the client methods — tests can mock `@/lib/stripe` wholesale

### Test Pattern for Stripe Checkout (Vitest)

The `stripe.checkout.sessions.create` mock should return an object with `url`:
```typescript
vi.mocked(stripe.checkout.sessions.create).mockResolvedValue({
  url: "https://checkout.stripe.com/pay/cs_test_123",
} as any);
```

The `stripe.webhooks.constructEvent` mock for success:
```typescript
vi.mocked(stripe.webhooks.constructEvent).mockReturnValue(mockCompletedEvent as any);
```

For signature failure test:
```typescript
vi.mocked(stripe.webhooks.constructEvent).mockImplementation(() => {
  throw new Error("No signatures found matching the expected signature for payload");
});
```

### `DepositPayment` Pay Button — Hide After `paymentSuccess`

When `paymentSuccess` is true (Stripe redirect with `?payment=success`), the "Pay Deposit" button is hidden even if status is still SIGNED (race condition):

```tsx
{depositAmountDisplay && !paymentSuccess && (
  <DepositPayment token={token} depositDisplay={depositAmountDisplay} />
)}
```

This prevents a confusing state where the customer just paid but the button still shows.

### Existing Files — Do NOT Recreate

| File | What it provides |
|---|---|
| `src/src/lib/db.ts` | `prisma` — Prisma singleton |
| `src/src/lib/resend.ts` | `resend` — Resend client (lazy init pattern to follow) |
| `src/src/lib/utils.ts` | `formatCurrency(amount: number): string` |
| `src/src/types/index.ts` | `QuoteStatus`, `CustomerQuoteViewData` — EXTEND with `paidAt`, `depositAmountPaid` |
| `src/src/app/api/quotes/view/[token]/route.ts` | Existing GET handler — MODIFY to expose `paidAt`, `depositAmountPaid` |
| `src/src/app/quote/[token]/page.tsx` | Existing SSR page — MODIFY to add `searchParams`, pass `paymentSuccess` |
| `src/src/components/customer-view/quote-display.tsx` | Existing QuoteDisplay — MODIFY CTA section |

### New Files to Create

| File | Type | Purpose |
|---|---|---|
| `src/src/lib/stripe.ts` | Lib singleton | Lazy-init Stripe client for checkout sessions + webhooks |
| `src/src/app/api/quotes/view/[token]/pay/route.ts` | API Route Handler | POST — creates Stripe Checkout Session, returns `checkoutUrl` |
| `src/src/app/api/quotes/view/[token]/pay/route.test.ts` | Test | 8+ Vitest tests for the pay API route |
| `src/src/app/api/webhooks/stripe/route.ts` | API Route Handler | POST — verifies Stripe signature, updates quote to PAID |
| `src/src/app/api/webhooks/stripe/route.test.ts` | Test | 11+ Vitest tests for the webhook route |
| `src/src/components/customer-view/deposit-payment.tsx` | Client Component | "Pay Deposit" button that redirects to Stripe Checkout |

### Modified Files

| File | Change |
|---|---|
| `src/src/lib/stripe.ts` | NEW |
| `src/src/app/api/quotes/view/[token]/route.ts` | Add `paidAt` and `depositAmountPaid` to GET response |
| `src/src/app/quote/[token]/page.tsx` | Add `searchParams`, pass `paymentSuccess` to `QuoteDisplay` |
| `src/src/components/customer-view/quote-display.tsx` | Restructure CTA: separate PAID/SIGNED states, add `DepositPayment`, add payment success banner |
| `src/src/types/index.ts` | Add `paidAt?: Date \| string \| null` and `depositAmountPaid?: number \| null` to `CustomerQuoteViewData.quote` |

### Anti-Patterns to Avoid

- **Never** call `request.json()` in the Stripe webhook route — raw body is required for signature verification
- **Never** put `auth()` in the pay or webhook routes — both are intentionally public/Stripe-authenticated endpoints
- **Never** calculate deposit amount from client-provided data — always recalculate from DB line items
- **Never** store card numbers, CVVs, or full PANs — Stripe Checkout handles all card data
- **Never** return `500` from the webhook for email failures — Stripe will retry endlessly; only return `500` for DB failures
- **Never** skip the idempotency guard in the webhook — Stripe delivers webhooks multiple times
- **Never** use `err.errors` for Zod error messages — use `err.issues[0]?.message` (Zod v4 API)
- **Never** create a `Stripe` instance at module level — use the lazy `getStripeClient()` pattern (prevents build-time errors when env vars aren't set)
- **Never** expose `stripePaymentIntentId` or `signatureData` in the public customer view API response — these are for contractor use only

### Current Test Count

Story 4.2 ended with **97 tests passing** across 13+ test files. This story adds at least 8 (pay route) + 11 (webhook route) = 19 new tests. Expected post-story test count: **116+ tests**.

### Project Structure Notes

- `src/src/app/api/quotes/view/[token]/pay/` directory does NOT yet exist — create it
- `src/src/app/api/webhooks/stripe/` directory does NOT yet exist — create it
- `src/src/components/customer-view/` directory already exists — add `deposit-payment.tsx` there
- `stripe` npm package is NOT yet installed — run `npm install stripe` first
- No Prisma migration needed — all required fields (`paidAt`, `stripePaymentIntentId`, `depositAmountPaid`, `status: PAID`) are in the existing schema

### References

- [Source: planning/epics.md#Epic 4 — Story 4.3: Stripe Deposit Collection]
- [Source: planning/architecture.md#Core Architectural Decisions — Stripe Connect with Checkout Sessions for PCI-compliant payment processing]
- [Source: planning/architecture.md#API & Communication Patterns — POST /api/quotes/view/[token]/pay, POST /api/webhooks/stripe]
- [Source: planning/architecture.md#Data Architecture — Quote.stripePaymentIntentId, Quote.depositAmountPaid, Quote.paidAt, QuoteStatus.PAID]
- [Source: planning/architecture.md#Infrastructure — Stripe Connect with Checkout Sessions]
- [Source: planning/architecture.md#Service Boundaries — src/lib/stripe.ts sole entry point for Stripe API calls]
- [Source: planning/architecture.md#Notification Flow — Quote signed/paid → server-sent events or polling; NFR18 Stripe webhook retries]
- [Source: planning/architecture.md#Security — NFR9 no credit card data stored, Stripe-hosted checkout, NFR10 unguessable tokens]
- [Source: planning/architecture.md#Naming Patterns — kebab-case files, no auth() on public routes]
- [Source: stories/4-2-electronic-signature-capture.md — Stack versions (Next.js 16.2.2, React 19.2.4, Zod v4), params Promise pattern, public route pattern, Vitest test patterns, fire-and-forget email pattern, resend.ts lazy-init pattern]
- [Source: stories/4-2-electronic-signature-capture.md#Completion Notes — resend named export pattern, 97 test baseline]
- [Source: stories/4-1-customer-quote-view-page.md — CustomerQuoteViewData shape, QuoteDisplay component structure, customer-view/ directory pattern]
- [Source: planning/architecture.md#Implementation Patterns — error handling wrapper, Zod validation at boundaries]

## Dev Agent Record

### Agent Model Used

claude-sonnet-4-6

### Debug Log References

None — implementation proceeded without blockers.

### Completion Notes List

- Installed `stripe@^22.1.1` npm package.
- Created `src/lib/stripe.ts` using same lazy-initialization pattern as `resend.ts` to prevent build-time errors when env vars are not set.
- Created public `POST /api/quotes/view/[token]/pay` route (no auth) that validates SIGNED status, calculates deposit amount server-side from DB line items, and creates a Stripe Checkout Session returning `checkoutUrl`.
- Created `DepositPayment` client component with loading/error state that redirects to Stripe Checkout via `window.location.href`.
- Created `POST /api/webhooks/stripe` route using `request.text()` (not `request.json()`) for raw body required by Stripe signature verification. Implements full idempotency guard (skips if already PAID), fire-and-forget email notification, and returns 500 only on DB failures so Stripe retries.
- Updated `CustomerQuoteViewData` type with `paidAt` and `depositAmountPaid` fields.
- Updated `GET /api/quotes/view/[token]` to expose `paidAt` and `depositAmountPaid` in response (excludes `stripePaymentIntentId`).
- Updated `CustomerQuotePage` to await `searchParams` (Next.js 16 Promise requirement) and pass `paymentSuccess` prop.
- Restructured `QuoteDisplay` CTA section into 4 distinct states: PAID confirmation, SIGNED confirmation + deposit button, signature pad, accept & sign button. Added payment success banner for race condition when webhook hasn't fired yet.
- Final test count: **117 tests** across **15 test files** (up from 97 baseline). Build passes with zero TypeScript errors.

### File List

- `mvps/contractor-quoting-estimation/src/src/lib/stripe.ts` — NEW: Stripe client singleton
- `mvps/contractor-quoting-estimation/src/src/app/api/quotes/view/[token]/pay/route.ts` — NEW: POST create Stripe checkout session
- `mvps/contractor-quoting-estimation/src/src/app/api/quotes/view/[token]/pay/route.test.ts` — NEW: 8 Vitest tests
- `mvps/contractor-quoting-estimation/src/src/app/api/webhooks/stripe/route.ts` — NEW: POST Stripe webhook handler
- `mvps/contractor-quoting-estimation/src/src/app/api/webhooks/stripe/route.test.ts` — NEW: 11 Vitest tests
- `mvps/contractor-quoting-estimation/src/src/components/customer-view/deposit-payment.tsx` — NEW: Pay Deposit button component
- `mvps/contractor-quoting-estimation/src/src/types/index.ts` — MODIFIED: Added paidAt and depositAmountPaid to CustomerQuoteViewData
- `mvps/contractor-quoting-estimation/src/src/app/api/quotes/view/[token]/route.ts` — MODIFIED: Expose paidAt and depositAmountPaid in GET response
- `mvps/contractor-quoting-estimation/src/src/app/quote/[token]/page.tsx` — MODIFIED: Added searchParams, paymentSuccess prop
- `mvps/contractor-quoting-estimation/src/src/components/customer-view/quote-display.tsx` — MODIFIED: Restructured CTA with PAID/SIGNED/payment-success states
- `mvps/contractor-quoting-estimation/src/package.json` — MODIFIED: Added stripe dependency
