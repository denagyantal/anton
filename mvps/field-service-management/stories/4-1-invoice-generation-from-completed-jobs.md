# Story 4.1: Invoice Generation from Completed Jobs

Status: ready-for-dev

## Story

As a tradesperson,
I want to automatically generate a professional invoice from a completed job,
so that I can bill customers immediately without re-entering any information.

## Acceptance Criteria

1. **[Invoice record created in WatermelonDB on Generate tap]** Given a job has status `COMPLETE` with a linked approved quote, when the user taps "Generate Invoice" on the job detail screen and the API call succeeds, then an invoice record is created in WatermelonDB using the server-returned UUID, with `status = 'DRAFT'`, `subtotal`/`taxAmount`/`total` matching the quote's values, `amountPaid = 0`, `dueAt = 30 days from now`, and the job's WatermelonDB status is updated to `INVOICED`. (FR19)

2. **[Invoice generation requires internet connection]** Given the device has no internet connectivity (as reported by `useNetwork()`), when the user taps "Generate Invoice", then a toast "Invoice generation requires internet connection" is shown and no WatermelonDB writes or API calls are made.

3. **[API creates invoice in PostgreSQL with invoice number]** Given `POST /api/v1/invoices/generate-from-job/:jobId` is called by an authenticated user, then the API creates an `Invoice` row in PostgreSQL with a unique `invoiceNumber` formatted `INV-{YYYY}-{NNNN}` (e.g., `INV-2026-0001`), copies `subtotal`/`taxAmount`/`total` from the linked quote (defaulting to 0 if no quote), sets `status = 'DRAFT'`, `amountPaid = 0`, `dueAt = now + 30 days`, and transitions the `Job` row to `status = 'INVOICED'` — both writes in a single Prisma `$transaction`. (FR19)

4. **[PDF generated and stored in Supabase Storage]** Given an invoice row is created in PostgreSQL, then the API generates a branded invoice PDF (via `@react-pdf/renderer`), uploads it to Supabase Storage at `invoices/{accountId}/{invoiceId}.pdf`, and updates `invoice.pdfUrl` with the public URL before returning the response. The PDF must include: business logo (if set), business name, license number, invoice number, invoice date, due date, customer name and address, all line items from the linked quote (description, qty, unit price, line total), subtotal, tax amount, grand total. (FR20)

5. **[Idempotent: returns existing invoice if already generated]** Given a job already has a linked invoice in PostgreSQL, when `POST /api/v1/invoices/generate-from-job/:jobId` is called again, then the API returns HTTP 200 with the existing invoice data (no duplicate created). The mobile hook writes the existing invoice to WatermelonDB if not already present. (FR19)

6. **[Job detail screen shows invoice after generation]** Given an invoice has been generated for a job and the WatermelonDB invoice record exists, when the user views the job detail screen, then the "Generate Invoice" button is replaced by a read-only badge showing the invoice number and formatted total (e.g., "INV-2026-0001 — $350.00").

7. **[Loading state during generation]** Given the user taps "Generate Invoice" while online, when the API call is in flight, then the button shows an `ActivityIndicator` and is disabled to prevent double-taps.

8. **[Money values stored as integer cents]** Given invoice amounts are persisted, all monetary values (`subtotal`, `taxAmount`, `total`, `amountPaid`) are stored as integer cents in both WatermelonDB (number type) and PostgreSQL (Int) — never as floats. Display formatting (`$350.00`) is applied only in the UI. (NFR8, architecture rule)

## Tasks / Subtasks

### Task 1: Prisma Schema — Add Invoice Model and Enums (AC: #3, #5, #8)

- [ ] 1.1: In `apps/api/prisma/schema.prisma`, add the `InvoiceStatus` enum after `JobStatus`:
  ```prisma
  enum InvoiceStatus {
    DRAFT
    SENT
    VIEWED
    PAID
    PARTIALLY_PAID
    OVERDUE
  }
  ```
- [ ] 1.2: Add the `Invoice` model after the `Job` model:
  ```prisma
  model Invoice {
    id                  String        @id @default(uuid())
    accountId           String        @map("account_id")
    customerId          String        @map("customer_id")
    jobId               String?       @unique @map("job_id")
    quoteId             String?       @map("quote_id")
    invoiceNumber       String        @map("invoice_number")
    status              InvoiceStatus @default(DRAFT)
    subtotal            Int           @default(0)
    taxAmount           Int           @default(0) @map("tax_amount")
    total               Int           @default(0)
    amountPaid          Int           @default(0) @map("amount_paid")
    pdfUrl              String?       @map("pdf_url")
    paymentToken        String?       @map("payment_token")
    sentAt              DateTime?     @map("sent_at")
    paidAt              DateTime?     @map("paid_at")
    dueAt               DateTime?     @map("due_at")
    quickbooksInvoiceId String?       @map("quickbooks_invoice_id")
    createdAt           DateTime      @default(now()) @map("created_at")
    updatedAt           DateTime      @updatedAt @map("updated_at")
    syncedAt            DateTime?     @map("synced_at")

    account  Account  @relation(fields: [accountId], references: [id])
    customer Customer @relation(fields: [customerId], references: [id])
    job      Job?     @relation(fields: [jobId], references: [id])

    @@index([accountId], name: "idx_invoices_account_id")
    @@index([customerId], name: "idx_invoices_customer_id")
    @@map("invoices")
  }
  ```
- [ ] 1.3: In the `Account` model's relation block, add after `jobs Job[]`:
  ```prisma
  invoices Invoice[]
  ```
- [ ] 1.4: In the `Customer` model's relation block, add after `jobs Job[]`:
  ```prisma
  invoices Invoice[]
  ```
- [ ] 1.5: In the `Job` model's relation block, add after `schedule_events ScheduleEvent[]`:
  ```prisma
  invoice Invoice?
  ```
- [ ] 1.6: Run migration: `cd apps/api && npx prisma migrate dev --name add-invoices`
- [ ] 1.7: Run `npx prisma generate` to update the Prisma client types

### Task 2: WatermelonDB Schema — Add `invoices` Table (AC: #1, #8)

- [ ] 2.1: In `apps/mobile/src/db/schema.ts`, bump `version: 7` to `version: 8`
- [ ] 2.2: Add the `invoices` tableSchema at the end of the `tables` array (after `schedule_events`):
  ```typescript
  tableSchema({
    name: 'invoices',
    columns: [
      { name: 'account_id', type: 'string' },
      { name: 'customer_id', type: 'string' },
      { name: 'job_id', type: 'string', isOptional: true },
      { name: 'quote_id', type: 'string', isOptional: true },
      { name: 'invoice_number', type: 'string', isOptional: true },
      { name: 'status', type: 'string' },
      { name: 'subtotal', type: 'number' },
      { name: 'tax_amount', type: 'number' },
      { name: 'total', type: 'number' },
      { name: 'amount_paid', type: 'number' },
      { name: 'pdf_url', type: 'string', isOptional: true },
      { name: 'payment_token', type: 'string', isOptional: true },
      { name: 'sent_at', type: 'number', isOptional: true },
      { name: 'paid_at', type: 'number', isOptional: true },
      { name: 'due_at', type: 'number', isOptional: true },
      { name: 'created_at', type: 'number' },
      { name: 'updated_at', type: 'number' },
    ],
  }),
  ```

### Task 3: WatermelonDB Migration — v8 (AC: #1)

- [ ] 3.1: In `apps/mobile/src/db/migrations.ts`, add the v8 migration at the **TOP** of the `migrations` array (before the existing `toVersion: 7` entry — WatermelonDB requires descending order):
  ```typescript
  {
    toVersion: 8,
    steps: [
      createTable({
        name: 'invoices',
        columns: [
          { name: 'account_id', type: 'string' },
          { name: 'customer_id', type: 'string' },
          { name: 'job_id', type: 'string', isOptional: true },
          { name: 'quote_id', type: 'string', isOptional: true },
          { name: 'invoice_number', type: 'string', isOptional: true },
          { name: 'status', type: 'string' },
          { name: 'subtotal', type: 'number' },
          { name: 'tax_amount', type: 'number' },
          { name: 'total', type: 'number' },
          { name: 'amount_paid', type: 'number' },
          { name: 'pdf_url', type: 'string', isOptional: true },
          { name: 'payment_token', type: 'string', isOptional: true },
          { name: 'sent_at', type: 'number', isOptional: true },
          { name: 'paid_at', type: 'number', isOptional: true },
          { name: 'due_at', type: 'number', isOptional: true },
          { name: 'created_at', type: 'number' },
          { name: 'updated_at', type: 'number' },
        ],
      }),
    ],
  },
  ```

### Task 4: WatermelonDB Invoice Model (AC: #1)

- [ ] 4.1: Create `apps/mobile/src/db/models/invoice.ts`:
  ```typescript
  import { Model } from '@nozbe/watermelondb';
  import { field, text, readonly, date } from '@nozbe/watermelondb/decorators';

  export default class Invoice extends Model {
    static table = 'invoices';

    @text('account_id') accountId!: string;
    @text('customer_id') customerId!: string;
    @text('job_id') jobId!: string | null;
    @text('quote_id') quoteId!: string | null;
    @text('invoice_number') invoiceNumber!: string | null;
    @text('status') status!: string;
    @field('subtotal') subtotal!: number;
    @field('tax_amount') taxAmount!: number;
    @field('total') total!: number;
    @field('amount_paid') amountPaid!: number;
    @text('pdf_url') pdfUrl!: string | null;
    @text('payment_token') paymentToken!: string | null;
    @field('sent_at') sentAt!: number | null;
    @field('paid_at') paidAt!: number | null;
    @field('due_at') dueAt!: number | null;
    @readonly @date('created_at') createdAt!: Date;
    @date('updated_at') updatedAt!: Date;
  }
  ```

### Task 5: Register Invoice Model in db/index.ts (AC: #1)

- [ ] 5.1: In `apps/mobile/src/db/index.ts`, add import: `import Invoice from './models/invoice';`
- [ ] 5.2: Add `Invoice` to the `modelClasses` array in `new Database({ ... })`:
  ```typescript
  modelClasses: [PricebookItem, Customer, Quote, LineItem, QuotePhoto, Job, JobPhoto, ScheduleEvent, Invoice],
  ```

### Task 6: Shared Types — Add `invoiceNumber` (AC: #3, #6)

- [ ] 6.1: In `packages/shared/src/types/invoice.ts`, add `invoiceNumber?: string;` to the `Invoice` interface, after `quoteId`:
  ```typescript
  export interface Invoice {
    id: string;
    accountId: string;
    customerId: string;
    jobId: string | null;
    quoteId: string | null;
    invoiceNumber?: string;   // ← ADD THIS
    status: InvoiceStatus;
    // ... rest unchanged
  }
  ```

### Task 7: API — Create `invoice-service.ts` (AC: #3, #5, #8)

- [ ] 7.1: Create `apps/api/src/services/invoice-service.ts`:
  ```typescript
  import { prisma } from '../config/prisma.js';
  import { AppError } from '../utils/error.js';

  export async function generateInvoiceFromJob(jobId: string, accountId: string) {
    const job = await prisma.job.findFirst({
      where: { id: jobId, accountId },
      include: {
        quote: true,
        invoice: true,
      },
    });

    if (!job) {
      throw new AppError('JOB_NOT_FOUND', 'Job not found', 404);
    }
    if (job.status !== 'COMPLETE') {
      throw new AppError('JOB_NOT_COMPLETE', 'Job must be COMPLETE to generate invoice', 422);
    }
    if (job.invoice) {
      throw new AppError('INVOICE_ALREADY_EXISTS', 'Invoice already exists for this job', 409);
    }

    const count = await prisma.invoice.count({ where: { accountId } });
    const year = new Date().getFullYear();
    const invoiceNumber = `INV-${year}-${String(count + 1).padStart(4, '0')}`;

    const subtotal = job.quote?.subtotal ?? 0;
    const taxAmount = job.quote?.tax_amount ?? 0;
    const total = job.quote?.total ?? 0;
    const dueAt = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);

    const [invoice] = await prisma.$transaction([
      prisma.invoice.create({
        data: {
          accountId,
          customerId: job.customerId,
          jobId: job.id,
          quoteId: job.quoteId ?? undefined,
          invoiceNumber,
          status: 'DRAFT',
          subtotal,
          taxAmount,
          total,
          amountPaid: 0,
          dueAt,
        },
      }),
      prisma.job.update({
        where: { id: jobId },
        data: { status: 'INVOICED' },
      }),
    ]);

    return invoice;
  }
  ```

### Task 8: API — Add Invoice PDF to `pdf-service.ts` (AC: #4)

- [ ] 8.1: In `apps/api/src/services/pdf-service.ts`, add the `InvoicePdfData` interface after the existing `QuotePdfData` interface:
  ```typescript
  export interface InvoicePdfData {
    invoiceNumber: string;
    invoiceDate: string;
    dueDate: string;
    businessName: string;
    businessLogoUrl: string | null;
    licenseNumber: string | null;
    customerName: string;
    customerAddress: string;
    lineItems: Array<{
      description: string;
      quantity: number;
      unitPrice: number;
      total: number;
    }>;
    subtotal: number;
    taxAmount: number;
    grandTotal: number;
  }
  ```
- [ ] 8.2: Add `buildInvoicePdf(data: InvoicePdfData)` after `buildQuotePdf`. It reuses the same `styles` object — copy the structure of `buildQuotePdf` with these differences:
  - Replace the quote date section with: "Invoice #: {invoiceNumber}", "Invoice Date: {invoiceDate}", "Due Date: {dueDate}" lines
  - Remove the photos section (invoices don't include photos)
  - Section title reads "INVOICE" (add as a bold header in the page, styled like `styles.businessName` with slightly larger font)
- [ ] 8.3: Add `generateInvoicePdf(invoiceId: string, accountId: string): Promise<Buffer>`:
  ```typescript
  export async function generateInvoicePdf(invoiceId: string, accountId: string): Promise<Buffer> {
    const invoice = await prisma.invoice.findFirst({
      where: { id: invoiceId, accountId },
      include: {
        customer: true,
        job: {
          include: {
            quote: {
              include: {
                line_items: { orderBy: { sort_order: 'asc' } },
              },
            },
          },
        },
      },
    });

    if (!invoice) throw new AppError('INVOICE_NOT_FOUND', 'Invoice not found', 404);

    const account = await prisma.account.findUnique({ where: { id: accountId } });
    if (!account) throw new AppError('ACCOUNT_NOT_FOUND', 'Account not found', 404);

    const lineItems = invoice.job?.quote?.line_items ?? [];
    const customerAddress = [
      invoice.customer.addressLine1,
      invoice.customer.city,
      invoice.customer.state,
      invoice.customer.zip,
    ].filter(Boolean).join(', ');

    const data: InvoicePdfData = {
      invoiceNumber: invoice.invoiceNumber,
      invoiceDate: invoice.createdAt.toISOString().split('T')[0] ?? '',
      dueDate: invoice.dueAt ? invoice.dueAt.toISOString().split('T')[0] : '',
      businessName: account.businessName ?? '',
      businessLogoUrl: account.businessLogoUrl ?? null,
      licenseNumber: account.licenseNumber ?? null,
      customerName: invoice.customer.name,
      customerAddress,
      lineItems: lineItems.map((item) => ({
        description: item.description,
        quantity: Number(item.quantity),
        unitPrice: item.unit_price,
        total: item.total,
      })),
      subtotal: invoice.subtotal,
      taxAmount: invoice.taxAmount,
      grandTotal: invoice.total,
    };

    const element = buildInvoicePdf(data);
    const buffer = await renderToBuffer(element);
    return buffer as Buffer;
  }
  ```

### Task 9: API — Create `routes/invoices.ts` (AC: #3, #5)

- [ ] 9.1: Create `apps/api/src/routes/invoices.ts`:
  ```typescript
  import express from 'express';
  import { authMiddleware } from '../middleware/auth.js';
  import { generateInvoiceFromJob } from '../services/invoice-service.js';
  import { generateInvoicePdf } from '../services/pdf-service.js';
  import { uploadFile } from '../services/storage-service.js';
  import { prisma } from '../config/prisma.js';
  import { AppError } from '../utils/error.js';

  export const invoicesRouter = express.Router();
  invoicesRouter.use(authMiddleware);

  invoicesRouter.post('/generate-from-job/:jobId', async (req, res, next) => {
    try {
      const { jobId } = req.params;
      const accountId = req.user!.accountId;

      // Idempotent: return existing invoice if already generated
      const existing = await prisma.invoice.findFirst({ where: { jobId, accountId } });
      if (existing) {
        res.status(200).json({ data: existing });
        return;
      }

      const invoice = await generateInvoiceFromJob(jobId, accountId);

      const pdfBuffer = await generateInvoicePdf(invoice.id, accountId);
      const pdfPath = `${accountId}/${invoice.id}.pdf`;
      const pdfUrl = await uploadFile('invoices', pdfPath, pdfBuffer, 'application/pdf');

      const updatedInvoice = await prisma.invoice.update({
        where: { id: invoice.id },
        data: { pdfUrl },
      });

      res.status(201).json({ data: updatedInvoice });
    } catch (err) {
      next(err);
    }
  });
  ```

### Task 10: Register Invoices Route in `index.ts` (AC: #3)

- [ ] 10.1: In `apps/api/src/index.ts`, add import after quotes import:
  ```typescript
  import { invoicesRouter } from './routes/invoices.js';
  ```
- [ ] 10.2: Add route registration after the quotes route line:
  ```typescript
  app.use('/api/v1/invoices', invoicesRouter);
  ```

### Task 11: Mobile — Create `use-invoices.ts` Hook (AC: #1, #5, #6, #7)

- [ ] 11.1: Create `apps/mobile/src/hooks/use-invoices.ts` with two exports:

  **`useJobInvoice(jobId: string)`** — observes the invoice for a specific job:
  ```typescript
  import { useState, useEffect } from 'react';
  import { Q } from '@nozbe/watermelondb';
  import { database } from '../db';
  import Invoice from '../db/models/invoice';

  export function useJobInvoice(jobId: string) {
    const [invoice, setInvoice] = useState<Invoice | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      if (!jobId) { setIsLoading(false); return; }
      const subscription = database
        .get<Invoice>('invoices')
        .query(Q.where('job_id', jobId))
        .observe()
        .subscribe((results) => {
          setInvoice(results[0] ?? null);
          setIsLoading(false);
        });
      return () => subscription.unsubscribe();
    }, [jobId]);

    return { invoice, isLoading };
  }
  ```

  **`useGenerateInvoice()`** — calls API and writes result to WatermelonDB:
  ```typescript
  import { useState, useCallback, useContext } from 'react';
  import { apiClient, ApiError } from '../services/api-client';
  import { NetworkContext } from '../contexts/network-context';
  import { Invoice as InvoiceType } from '@field-service/shared';
  import Job from '../db/models/job';

  export function useGenerateInvoice() {
    const [isLoading, setIsLoading] = useState(false);
    const { isConnected } = useContext(NetworkContext);

    const generateInvoice = useCallback(async (jobId: string): Promise<void> => {
      if (!isConnected) {
        // Show toast — caller handles display or use a toast utility
        throw new Error('Invoice generation requires internet connection');
      }

      setIsLoading(true);
      try {
        const invoiceData = await apiClient.post<InvoiceType>(
          `/api/v1/invoices/generate-from-job/${jobId}`
        );

        await database.write(async () => {
          // Create invoice record in WatermelonDB using server UUID
          const existingInvoices = await database
            .get<Invoice>('invoices')
            .query(Q.where('job_id', jobId))
            .fetch();

          if (existingInvoices.length === 0) {
            await database.get<Invoice>('invoices').create((record) => {
              record._raw.id = invoiceData.id;
              record.accountId = invoiceData.accountId;
              record.customerId = invoiceData.customerId;
              record.jobId = invoiceData.jobId;
              record.quoteId = invoiceData.quoteId;
              record.invoiceNumber = invoiceData.invoiceNumber ?? null;
              record.status = invoiceData.status;
              record.subtotal = invoiceData.subtotal;
              record.taxAmount = invoiceData.taxAmount;
              record.total = invoiceData.total;
              record.amountPaid = invoiceData.amountPaid;
              record.pdfUrl = invoiceData.pdfUrl;
              record.dueAt = invoiceData.dueAt
                ? new Date(invoiceData.dueAt).getTime()
                : null;
            });
          }

          // Transition job status to INVOICED in WatermelonDB
          const jobs = await database
            .get<Job>('jobs')
            .query(Q.where('id', jobId))
            .fetch();
          if (jobs[0]) {
            await jobs[0].update((record) => {
              record.status = 'INVOICED';
            });
          }
        });
      } finally {
        setIsLoading(false);
      }
    }, [isConnected]);

    return { generateInvoice, isLoading };
  }
  ```
  
  Note: Both exports use `Invoice` (the WatermelonDB model class). Alias if needed: `import Invoice from '../db/models/invoice'; import type { Invoice as InvoiceType } from '@field-service/shared';`

### Task 12: Mobile — Update Job Detail Screen (AC: #1, #2, #6, #7)

- [ ] 12.1: In `apps/mobile/app/(tabs)/jobs/[id].tsx`, add imports at the top:
  ```typescript
  import { useJobInvoice, useGenerateInvoice } from '../../../src/hooks/use-invoices';
  ```
- [ ] 12.2: Inside `JobDetailScreen`, after the existing hooks, add:
  ```typescript
  const { invoice } = useJobInvoice(id ?? '');
  const { generateInvoice, isLoading: isGenerating } = useGenerateInvoice();
  ```
- [ ] 12.3: Add a `handleGenerateInvoice` callback:
  ```typescript
  const handleGenerateInvoice = useCallback(async () => {
    if (!job) return;
    try {
      await generateInvoice(job.id);
    } catch (err) {
      // Show a simple Alert for errors (consistent with mobile error pattern)
      const message = err instanceof Error ? err.message : 'Failed to generate invoice';
      Alert.alert('Invoice Error', message);
    }
  }, [job, generateInvoice]);
  ```
  Add `Alert` to the React Native import block at the top of the file.
- [ ] 12.4: In `renderActionButton()`, add a new case **before** the final `return null` at the bottom of the function:
  ```typescript
  if (job.status === 'COMPLETE') {
    if (invoice) {
      return (
        <View style={styles.invoicedBadge}>
          <Text style={styles.invoicedText}>
            {invoice.invoiceNumber ?? 'Invoice'} — ${(invoice.total / 100).toFixed(2)}
          </Text>
        </View>
      );
    }
    return (
      <TouchableOpacity
        style={[styles.actionButton, styles.invoiceButton]}
        onPress={handleGenerateInvoice}
        disabled={isGenerating}
      >
        {isGenerating
          ? <ActivityIndicator color="#fff" />
          : <Text style={styles.invoiceButtonText}>Generate Invoice</Text>
        }
      </TouchableOpacity>
    );
  }
  ```
- [ ] 12.5: Add the new styles to `StyleSheet.create` at the bottom of the file:
  ```typescript
  invoiceButton: {
    backgroundColor: '#7C3AED',
  },
  invoiceButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  invoicedBadge: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: '#F3F4F6',
    borderRadius: 8,
    alignItems: 'center',
  },
  invoicedText: {
    fontSize: 15,
    color: '#374151',
    fontWeight: '600',
  },
  ```

### Task 13: Tests — invoice-service.ts (AC: #3, #5, #8)

- [ ] 13.1: Create `apps/api/src/services/invoice-service.test.ts`
- [ ] 13.2: Mock `'../config/prisma.js'` via `jest.mock()`
- [ ] 13.3: Test: job COMPLETE with quote → invoice created with correct `subtotal`/`taxAmount`/`total` from quote, `invoiceNumber` matches `INV-{YYYY}-NNNN`, job status updated to `INVOICED`, all inside `$transaction`
- [ ] 13.4: Test: job status is `IN_PROGRESS` → throws `AppError` with code `JOB_NOT_COMPLETE`, HTTP 422
- [ ] 13.5: Test: `prisma.job.findFirst` returns null → throws `AppError` with code `JOB_NOT_FOUND`, HTTP 404
- [ ] 13.6: Test: job already has `invoice` property → throws `AppError` with code `INVOICE_ALREADY_EXISTS`, HTTP 409
- [ ] 13.7: Test: invoice number at count=0 → `INV-{year}-0001`; at count=9 → `INV-{year}-0010`
- [ ] 13.8: Test: job without linked quote → totals default to 0, invoice still created

### Task 14: Tests — invoices route integration (AC: #3, #5)

- [ ] 14.1: Create `apps/api/tests/integration/invoices.test.ts`
- [ ] 14.2: Mock `../../src/services/invoice-service.js`, `../../src/services/pdf-service.js`, `../../src/services/storage-service.js`, and `../../src/config/prisma.js`
- [ ] 14.3: Test: `POST /api/v1/invoices/generate-from-job/:jobId` without auth header → 401
- [ ] 14.4: Test: success path (no existing invoice) → `generateInvoiceFromJob` called once, `generateInvoicePdf` called once, `uploadFile` called with `'invoices'` bucket, `prisma.invoice.update` called with `{ pdfUrl }`, response 201 with invoice data including `pdfUrl`
- [ ] 14.5: Test: `prisma.invoice.findFirst` returns existing invoice → `generateInvoiceFromJob` NOT called, response 200 with existing invoice

## Dev Notes

### No Separate Invoice Line Items Table

The invoice does **not** have its own line items table. The Invoice record stores the aggregated `subtotal`/`taxAmount`/`total` copied from the quote at generation time. The PDF is generated by traversing: `invoice → job → quote → line_items`. This is by design — line items belong to the quote; the invoice is a financial instrument derived from it.

If a job has no linked quote, all totals default to 0. The PDF will show an empty line items table in this case (acceptable for MVP).

### WatermelonDB Migration Order is Descending

The `migrations` array in `migrations.ts` **must** be in descending `toVersion` order (highest first). The new v8 migration goes at the **top** of the array before the existing `toVersion: 7` entry. WatermelonDB applies migrations sequentially from the current version up to the schema version, so the order matters.

### Writing API Response Data to WatermelonDB

When writing an API-created record to WatermelonDB, use `record._raw.id = apiId` inside the `.create()` callback to preserve the server-assigned UUID. This is the standard WatermelonDB approach for records whose IDs originate server-side. Without this, WatermelonDB assigns a new UUID and the sync engine creates a duplicate.

```typescript
await database.get<Invoice>('invoices').create((record) => {
  record._raw.id = invoiceData.id;  // preserve server UUID
  // ...
});
```

### Prisma `$transaction` for Atomicity

The invoice creation and job status transition must happen atomically. If either fails, neither should commit. Use `prisma.$transaction([...])` with an array of operations (not the interactive callback form). The array form is simpler and sufficient here since there's no data dependency between the two writes.

```typescript
const [invoice] = await prisma.$transaction([
  prisma.invoice.create({ data: { ... } }),
  prisma.job.update({ where: { id: jobId }, data: { status: 'INVOICED' } }),
]);
```

Note: `$transaction` returns an array; destructure to get `invoice`.

### Invoice Number Generation

Invoice numbers use `COUNT(*) WHERE account_id = ?` to determine the sequence. Under concurrent writes this could produce duplicates, but for MVP scale (single-user account) this is acceptable. A `@unique` constraint on `invoiceNumber` is not added to avoid migration complexity; uniqueness is best-effort for MVP.

### Route is Idempotent (returns 200 if already exists)

The route checks for an existing invoice in PostgreSQL **before** calling the service. If found, it returns 200 immediately. This means the mobile `apiClient.post()` never receives a 409 error — it always gets a valid invoice back (201 for new, 200 for existing). The WatermelonDB write is then guarded by querying for an existing record by `job_id` before creating.

### Prisma Query for PDF Generation

`generateInvoicePdf` needs to traverse `invoice → job → quote → line_items`. The Prisma query:
```typescript
prisma.invoice.findFirst({
  where: { id: invoiceId, accountId },
  include: {
    customer: true,
    job: {
      include: {
        quote: {
          include: {
            line_items: { orderBy: { sort_order: 'asc' } },
          },
        },
      },
    },
  },
})
```
Note: `job` may be null (if invoice was created without a job). `job.quote` may be null (if job had no linked quote). Both cases result in empty line items — the PDF renders gracefully with a $0 total.

### API Client Pattern (Mobile)

Use `apiClient.post<InvoiceType>(path)` from `apps/mobile/src/services/api-client.ts`. This:
- Automatically attaches the Supabase JWT from `supabase.auth.getSession()`
- Throws `ApiError` (with `.code` and `.status`) for non-2xx responses
- Returns `body.data` (the `{ data: ... }` envelope is unwrapped automatically)

Connectivity check: use `useContext(NetworkContext)` which provides `{ isConnected: boolean }`. The `NetworkContext` is defined in `apps/mobile/src/contexts/network-context.tsx`.

### `req.user` Structure (API)

All protected routes have `req.user` set by `authMiddleware`. It includes at least `{ accountId: string, id: string, email: string }`. Always access `req.user!.accountId` for the account-level scope. The `!` non-null assertion is safe here because `authMiddleware` returns 401 if not authenticated.

### PDF Service Reuse Pattern

`buildInvoicePdf` reuses the same `styles` object defined at the top of `pdf-service.ts` (shared between quote and invoice PDFs). There is no need to duplicate the style object. The invoice PDF structure mirrors the quote PDF but:
- Adds invoice number, invoice date, due date in place of "Quote Date"
- Adds "INVOICE" document type header
- Removes photo gallery section
- Same line items table structure, same totals layout

### Payment Model Deferred

The `Payment` model in Prisma and the `payments` WatermelonDB table are **not** added in this story. Payment infrastructure is implemented in stories 4.2 and 4.3. The `Invoice` model in Prisma has no `payments` relation yet — it will be added in story 4.3 when the Payment model is introduced.

### Money Formatting in "Invoiced" Badge

The invoiced badge displays the total as a dollar string: `(invoice.total / 100).toFixed(2)`. This is UI-only formatting — the stored value remains integer cents. Do NOT use `centsToDollars` from `@field-service/shared` here unless that utility is already imported in the screen component; the inline expression is simpler.

### Project Structure Notes

**Files to CREATE:**
```
apps/api/src/services/invoice-service.ts
apps/api/src/services/invoice-service.test.ts
apps/api/src/routes/invoices.ts
apps/api/tests/integration/invoices.test.ts
apps/mobile/src/db/models/invoice.ts
apps/mobile/src/hooks/use-invoices.ts
```

**Files to MODIFY:**
```
apps/api/prisma/schema.prisma          (add InvoiceStatus enum, Invoice model, relations)
apps/api/src/services/pdf-service.ts   (add InvoicePdfData, buildInvoicePdf, generateInvoicePdf)
apps/api/src/index.ts                  (register /api/v1/invoices route)
apps/mobile/src/db/schema.ts           (bump to v8, add invoices table)
apps/mobile/src/db/migrations.ts       (add toVersion: 8 migration at TOP of array)
apps/mobile/src/db/index.ts            (import Invoice, add to modelClasses)
apps/mobile/app/(tabs)/jobs/[id].tsx   (Generate Invoice button, invoice badge)
packages/shared/src/types/invoice.ts   (add invoiceNumber field)
```

All paths relative to `mvps/field-service-management/src/` as the monorepo root.

### References

- [Source: planning/epics.md#Story 4.1] — All acceptance criteria, FR19, FR20
- [Source: planning/architecture.md#Data Model] — `invoices` table schema with all fields
- [Source: planning/architecture.md#Enforcement Guidelines] — "Money stored as integer cents", "WatermelonDB never direct API calls"
- [Source: planning/architecture.md#API Patterns] — REST endpoints `POST /api/v1/invoices/:id/send` (future story)
- [Source: apps/api/prisma/schema.prisma] — Current schema; Job model has `quoteId @unique`, Quote has `line_items`, `job Job?` relation
- [Source: apps/mobile/src/db/schema.ts] — Currently version 7; new invoices table goes to version 8
- [Source: apps/mobile/src/db/migrations.ts] — Migration toVersion 7 at top; new v8 goes above it
- [Source: apps/mobile/src/db/index.ts] — LokiJS adapter; modelClasses pattern for registration
- [Source: apps/mobile/src/db/models/job.ts] — Decorator pattern; `@text`, `@field`, `@readonly @date`
- [Source: apps/api/src/services/pdf-service.ts] — `buildQuotePdf`/`generateQuotePdf` pattern to replicate for invoices; `renderToBuffer`, shared `styles` object, `React.createElement` imperative API
- [Source: apps/api/src/services/storage-service.ts] — `uploadFile(bucket, path, buffer, contentType)` returns public URL
- [Source: apps/api/src/routes/quotes.ts] — Route auth pattern, `req.user!.accountId` usage
- [Source: apps/api/src/index.ts] — Route registration pattern; `app.use('/api/v1/invoices', invoicesRouter)` goes after quotes
- [Source: apps/mobile/src/services/api-client.ts] — `apiClient.post<T>(path)` returns unwrapped `body.data`, throws `ApiError` on non-2xx
- [Source: apps/mobile/src/contexts/network-context.tsx] — `NetworkContext` provides `{ isConnected: boolean }`
- [Source: apps/mobile/app/(tabs)/jobs/[id].tsx] — Existing `renderActionButton()`, `StyleSheet.create` pattern, `ActivityIndicator` already imported
- [Source: stories/3-4-automated-sms-appointment-reminders.md] — Prisma `$transaction` usage, `as unknown as PrismaMock` Jest pattern, `.js` extension on imports required for Node.js ESM

## Dev Agent Record

### Agent Model Used

claude-sonnet-4-6

### Debug Log References

### Completion Notes List

### File List
