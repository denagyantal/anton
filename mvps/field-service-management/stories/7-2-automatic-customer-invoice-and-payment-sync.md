# Story 7.2: Automatic Customer, Invoice, and Payment Sync

Status: ready-for-dev

## Story

As a tradesperson,
I want my customers, invoices, and payments to sync to QuickBooks automatically when work is completed,
so that my bookkeeper sees accurate financials without me doing anything extra.

## Acceptance Criteria

1. **[Customer auto-created in QB on sync]** Given QuickBooks is connected and a new customer record is pushed to the server via the sync endpoint, when the upsert completes, then the customer is automatically created in QuickBooks with `DisplayName`, `PrimaryEmailAddr`, `PrimaryPhone`, and `BillAddr`, and the returned QuickBooks customer ID is stored in `Customer.quickbooksCustomerId`. (FR28)

2. **[Invoice auto-created in QB on generation]** Given a job is completed and `generateInvoiceFromJob` creates an invoice, when the invoice is persisted, then the invoice is automatically created in QuickBooks referencing the correct QB customer, with line items from the linked quote mapped to QB `SalesItemLineDetail` lines, the correct `DueDate`, and amounts converted from cents to dollars — and the returned QB invoice ID is stored in `Invoice.quickbooksInvoiceId`. (FR28)

3. **[Payment auto-recorded in QB on receipt]** Given a payment is received (either via Stripe webhook / `handleCheckoutCompleted` or on-site via `recordOnsitePayment`), when the payment record is created in our database, then the payment is automatically recorded in QuickBooks against the correct invoice, and the returned QB payment ID is stored in `Payment.quickbooksPaymentId`. (FR28)

4. **[Duplicate prevention via stored QB IDs]** Given the system attempts to sync a customer, invoice, or payment that already has a `quickbooksCustomerId` / `quickbooksInvoiceId` / `quickbooksPaymentId` stored, when the sync function runs, then the duplicate creation is skipped (status `DUPLICATE_PREVENTED` logged) and no duplicate entry is created in QuickBooks. (FR31, NFR16)

5. **[QB sync failures are non-fatal and logged]** Given a QuickBooks sync call fails (network error, QB API error, QB not connected, or missing QB customer ID on invoice sync), when the error is caught, then the failure is logged to `quickbooks_sync_log` with `status: FAILED` and `errorMessage`, the primary operation (customer save, invoice creation, payment recording) is NOT rolled back, and no exception is propagated to the caller. (NFR16, NFR17)

6. **[All QB sync calls are fire-and-forget]** Given any QB sync is triggered from a primary operation (sync push, invoice generation, payment recording), when the QB call is made, then it executes asynchronously and does not block or add latency to the primary operation's response. (NFR1)

## Tasks / Subtasks

### Task 1: Add QB sync helper methods to quickbooks-service.ts (AC: #1, #2, #3, #4, #5)

- [ ] 1.1: Add a `logQbSync` helper to `apps/api/src/services/quickbooks-service.ts` for writing to the `quickbooks_sync_log` table. Place it near the top of the sync functions section (after the OAuth functions):

  ```typescript
  async function logQbSync(data: {
    accountId: string;
    entityType: 'CUSTOMER' | 'INVOICE' | 'PAYMENT';
    entityId: string;
    status: 'SUCCESS' | 'FAILED' | 'DUPLICATE_PREVENTED';
    quickbooksId?: string;
    errorMessage?: string;
  }): Promise<void> {
    await prisma.quickbooksSyncLog.create({
      data: {
        accountId: data.accountId,
        entityType: data.entityType,
        entityId: data.entityId,
        direction: 'PUSH',
        status: data.status,
        quickbooksId: data.quickbooksId ?? null,
        errorMessage: data.errorMessage ?? null,
      },
    });
  }
  ```

- [ ] 1.2: Add `syncCustomerToQuickBooks(accountId: string, customerId: string): Promise<void>` to `quickbooks-service.ts`. This function:
  - Fetches the account to get `quickbooksConnected` and `quickbooksRealmId`
  - If not connected, returns silently (no log needed — QB isn't set up)
  - Fetches the customer by `customerId`
  - Checks `quickbooksCustomerId`: if already set, logs `DUPLICATE_PREVENTED` and returns
  - Calls `getValidAccessToken(accountId)` (handles auto-refresh)
  - POSTs to `${quickbooksConfig.apiBaseUrl}/v3/company/${realmId}/customer?minorversion=65`
  - On success: updates `Customer.quickbooksCustomerId` and logs `SUCCESS`
  - On failure: logs `FAILED` with error message, does NOT throw

  ```typescript
  export async function syncCustomerToQuickBooks(
    accountId: string,
    customerId: string,
  ): Promise<void> {
    const account = await prisma.account.findUnique({
      where: { id: accountId },
      select: { quickbooksConnected: true, quickbooksRealmId: true },
    });

    if (!account?.quickbooksConnected || !account.quickbooksRealmId) return;
    const realmId = account.quickbooksRealmId;

    const customer = await prisma.customer.findUnique({
      where: { id: customerId },
    });
    if (!customer) return;

    // Duplicate prevention
    if (customer.quickbooksCustomerId) {
      await logQbSync({
        accountId,
        entityType: 'CUSTOMER',
        entityId: customerId,
        status: 'DUPLICATE_PREVENTED',
        quickbooksId: customer.quickbooksCustomerId,
      });
      return;
    }

    try {
      const token = await getValidAccessToken(accountId);

      const body: Record<string, unknown> = {
        DisplayName: customer.name,
      };
      if (customer.email) {
        body.PrimaryEmailAddr = { Address: customer.email };
      }
      if (customer.phone) {
        body.PrimaryPhone = { FreeFormNumber: customer.phone };
      }
      if (customer.addressLine1) {
        body.BillAddr = {
          Line1: customer.addressLine1,
          ...(customer.addressLine2 ? { Line2: customer.addressLine2 } : {}),
          ...(customer.city ? { City: customer.city } : {}),
          ...(customer.state ? { CountrySubDivisionCode: customer.state } : {}),
          ...(customer.zip ? { PostalCode: customer.zip } : {}),
        };
      }

      const response = await fetch(
        `${quickbooksConfig.apiBaseUrl}/v3/company/${realmId}/customer?minorversion=65`,
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify(body),
        },
      );

      if (!response.ok) {
        const text = await response.text();
        throw new Error(`QB customer create failed: ${response.status} ${text}`);
      }

      const data = (await response.json()) as { Customer: { Id: string } };
      const qbCustomerId = data.Customer.Id;

      await prisma.customer.update({
        where: { id: customerId },
        data: { quickbooksCustomerId: qbCustomerId },
      });

      await logQbSync({
        accountId,
        entityType: 'CUSTOMER',
        entityId: customerId,
        status: 'SUCCESS',
        quickbooksId: qbCustomerId,
      });
    } catch (err) {
      const message = err instanceof Error ? err.message : String(err);
      console.error('[QB] Customer sync failed:', message);
      await logQbSync({
        accountId,
        entityType: 'CUSTOMER',
        entityId: customerId,
        status: 'FAILED',
        errorMessage: message,
      }).catch(() => {}); // Never let log failure propagate
    }
  }
  ```

- [ ] 1.3: Add `syncInvoiceToQuickBooks(accountId: string, invoiceId: string): Promise<void>` to `quickbooks-service.ts`:
  - Checks QB connected
  - Fetches the invoice with `customer` and (if `quoteId` is set) `prisma.lineItem.findMany({ where: { quote_id: invoice.quoteId } })`
  - Checks `quickbooksInvoiceId` for duplicate prevention
  - Checks `customer.quickbooksCustomerId` — if missing, attempts a synchronous `syncCustomerToQuickBooks` first (so the invoice can link to the QB customer), then re-fetches
  - Maps line items to QB `SalesItemLineDetail` lines (use `ItemRef: { value: '1', name: 'Services' }` as the default service item — QB creates this item by default in every new company)
  - Converts all amounts from integer cents to dollars: `amount / 100`
  - POSTs to QB invoices endpoint
  - On success: updates `Invoice.quickbooksInvoiceId` and logs `SUCCESS`
  - On failure: logs `FAILED`, does NOT throw

  ```typescript
  export async function syncInvoiceToQuickBooks(
    accountId: string,
    invoiceId: string,
  ): Promise<void> {
    const account = await prisma.account.findUnique({
      where: { id: accountId },
      select: { quickbooksConnected: true, quickbooksRealmId: true },
    });

    if (!account?.quickbooksConnected || !account.quickbooksRealmId) return;
    const realmId = account.quickbooksRealmId;

    const invoice = await prisma.invoice.findUnique({
      where: { id: invoiceId },
      include: { customer: true },
    });
    if (!invoice) return;

    // Duplicate prevention
    if (invoice.quickbooksInvoiceId) {
      await logQbSync({
        accountId,
        entityType: 'INVOICE',
        entityId: invoiceId,
        status: 'DUPLICATE_PREVENTED',
        quickbooksId: invoice.quickbooksInvoiceId,
      });
      return;
    }

    try {
      // Ensure QB customer exists — create if missing
      if (!invoice.customer.quickbooksCustomerId) {
        await syncCustomerToQuickBooks(accountId, invoice.customerId);
        // Re-fetch customer to get the new QB ID
        const updatedCustomer = await prisma.customer.findUnique({
          where: { id: invoice.customerId },
          select: { quickbooksCustomerId: true },
        });
        if (!updatedCustomer?.quickbooksCustomerId) {
          throw new Error('Failed to sync customer to QB before invoice');
        }
        invoice.customer.quickbooksCustomerId = updatedCustomer.quickbooksCustomerId;
      }

      const token = await getValidAccessToken(accountId);

      // Build line items from the linked quote's line items, or fall back to a single total line
      let lines: object[];
      if (invoice.quoteId) {
        const lineItems = await prisma.lineItem.findMany({
          where: { quote_id: invoice.quoteId },
          orderBy: { sort_order: 'asc' },
        });

        if (lineItems.length > 0) {
          lines = lineItems.map(li => ({
            DetailType: 'SalesItemLineDetail',
            Amount: li.total / 100,
            Description: li.description,
            SalesItemLineDetail: {
              ItemRef: { value: '1', name: 'Services' },
              Qty: parseFloat(li.quantity.toString()),
              UnitPrice: li.unit_price / 100,
            },
          }));
        } else {
          lines = buildFallbackLine(invoice.total);
        }
      } else {
        lines = buildFallbackLine(invoice.total);
      }

      const qbInvoiceBody: Record<string, unknown> = {
        CustomerRef: { value: invoice.customer.quickbooksCustomerId },
        Line: lines,
      };

      if (invoice.dueAt) {
        qbInvoiceBody.DueDate = invoice.dueAt.toISOString().split('T')[0]; // YYYY-MM-DD
      }

      const response = await fetch(
        `${quickbooksConfig.apiBaseUrl}/v3/company/${realmId}/invoice?minorversion=65`,
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify(qbInvoiceBody),
        },
      );

      if (!response.ok) {
        const text = await response.text();
        throw new Error(`QB invoice create failed: ${response.status} ${text}`);
      }

      const data = (await response.json()) as { Invoice: { Id: string } };
      const qbInvoiceId = data.Invoice.Id;

      await prisma.invoice.update({
        where: { id: invoiceId },
        data: { quickbooksInvoiceId: qbInvoiceId },
      });

      await logQbSync({
        accountId,
        entityType: 'INVOICE',
        entityId: invoiceId,
        status: 'SUCCESS',
        quickbooksId: qbInvoiceId,
      });
    } catch (err) {
      const message = err instanceof Error ? err.message : String(err);
      console.error('[QB] Invoice sync failed:', message);
      await logQbSync({
        accountId,
        entityType: 'INVOICE',
        entityId: invoiceId,
        status: 'FAILED',
        errorMessage: message,
      }).catch(() => {});
    }
  }

  function buildFallbackLine(totalCents: number): object[] {
    return [
      {
        DetailType: 'SalesItemLineDetail',
        Amount: totalCents / 100,
        Description: 'Field service work',
        SalesItemLineDetail: {
          ItemRef: { value: '1', name: 'Services' },
          Qty: 1,
          UnitPrice: totalCents / 100,
        },
      },
    ];
  }
  ```

- [ ] 1.4: Add `syncPaymentToQuickBooks(accountId: string, paymentId: string): Promise<void>` to `quickbooks-service.ts`:
  - Checks QB connected
  - Fetches the payment with its `invoice` (which includes `quickbooksInvoiceId`) and `invoice.customer` (which includes `quickbooksCustomerId`)
  - Checks `quickbooksPaymentId` for duplicate prevention
  - Requires both `invoice.quickbooksInvoiceId` and `invoice.customer.quickbooksCustomerId` — if either is missing, logs `FAILED` with a descriptive message (do not silently skip — the invoice sync should have run first)
  - Converts `payment.amount` (cents) to dollars for QB
  - POSTs a QB Payment linked to the invoice via `LinkedTxn`
  - On success: updates `Payment.quickbooksPaymentId` and logs `SUCCESS`
  - On failure: logs `FAILED`, does NOT throw

  ```typescript
  export async function syncPaymentToQuickBooks(
    accountId: string,
    paymentId: string,
  ): Promise<void> {
    const account = await prisma.account.findUnique({
      where: { id: accountId },
      select: { quickbooksConnected: true, quickbooksRealmId: true },
    });

    if (!account?.quickbooksConnected || !account.quickbooksRealmId) return;
    const realmId = account.quickbooksRealmId;

    const payment = await prisma.payment.findUnique({
      where: { id: paymentId },
      include: {
        invoice: {
          include: { customer: { select: { quickbooksCustomerId: true } } },
        },
      },
    });
    if (!payment) return;

    // Duplicate prevention
    if (payment.quickbooksPaymentId) {
      await logQbSync({
        accountId,
        entityType: 'PAYMENT',
        entityId: paymentId,
        status: 'DUPLICATE_PREVENTED',
        quickbooksId: payment.quickbooksPaymentId,
      });
      return;
    }

    try {
      const { invoice } = payment;
      if (!invoice.quickbooksInvoiceId) {
        throw new Error(
          `Invoice ${invoice.id} has no quickbooksInvoiceId — invoice must sync before payment`,
        );
      }
      if (!invoice.customer.quickbooksCustomerId) {
        throw new Error(
          `Customer ${invoice.customerId} has no quickbooksCustomerId`,
        );
      }

      const token = await getValidAccessToken(accountId);
      const amountInDollars = payment.amount / 100;

      const response = await fetch(
        `${quickbooksConfig.apiBaseUrl}/v3/company/${realmId}/payment?minorversion=65`,
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            CustomerRef: { value: invoice.customer.quickbooksCustomerId },
            TotalAmt: amountInDollars,
            Line: [
              {
                Amount: amountInDollars,
                LinkedTxn: [
                  { TxnId: invoice.quickbooksInvoiceId, TxnType: 'Invoice' },
                ],
              },
            ],
          }),
        },
      );

      if (!response.ok) {
        const text = await response.text();
        throw new Error(`QB payment create failed: ${response.status} ${text}`);
      }

      const data = (await response.json()) as { Payment: { Id: string } };
      const qbPaymentId = data.Payment.Id;

      await prisma.payment.update({
        where: { id: paymentId },
        data: { quickbooksPaymentId: qbPaymentId },
      });

      await logQbSync({
        accountId,
        entityType: 'PAYMENT',
        entityId: paymentId,
        status: 'SUCCESS',
        quickbooksId: qbPaymentId,
      });
    } catch (err) {
      const message = err instanceof Error ? err.message : String(err);
      console.error('[QB] Payment sync failed:', message);
      await logQbSync({
        accountId,
        entityType: 'PAYMENT',
        entityId: paymentId,
        status: 'FAILED',
        errorMessage: message,
      }).catch(() => {});
    }
  }
  ```

### Task 2: Hook customer sync into the sync push handler (AC: #1, #5, #6)

- [ ] 2.1: Modify `apps/api/src/services/sync-service.ts` — import the QB sync function at the top:

  ```typescript
  import { syncCustomerToQuickBooks } from './quickbooks-service.js';
  ```

- [ ] 2.2: In the `upsertRecord` function, after the `await delegate.upsert(...)` call for the `customers` table (after the final upsert at the bottom), add a fire-and-forget QB sync trigger. The safest place is after the `upsert` succeeds:

  Find the bottom of `upsertRecord` where the final `delegate.upsert` runs, and add after it:

  ```typescript
  // After the final await delegate.upsert(...) at the end of upsertRecord:
  if (table === 'customers') {
    // Fire-and-forget — never block sync response for QB
    syncCustomerToQuickBooks(accountId, record.id).catch(err => {
      console.error('[QB] fire-and-forget customer sync error:', err);
    });
  }
  ```

  Be careful: this code must run AFTER the `upsert` and only for the `customers` table. It must not be placed inside any `if (table === 'quotes')` or `if (table === 'line_items')` guard. Place it just before the closing brace of `upsertRecord`.

### Task 3: Hook invoice sync into the invoice service (AC: #2, #5, #6)

- [ ] 3.1: Modify `apps/api/src/services/invoice-service.ts` — import QB sync:

  ```typescript
  import { syncInvoiceToQuickBooks } from './quickbooks-service.js';
  ```

- [ ] 3.2: At the end of `generateInvoiceFromJob`, after `return invoice;` — but actually BEFORE returning, add the fire-and-forget call. Modify the return to:

  ```typescript
  // Fire-and-forget QB sync — do not await (non-blocking)
  syncInvoiceToQuickBooks(accountId, invoice.id).catch(err => {
    console.error('[QB] fire-and-forget invoice sync error:', err);
  });

  return invoice;
  ```

  The QB sync fires after the Prisma transaction commits but before returning to the route handler. Since it's not awaited, it does not add latency to the HTTP response.

### Task 4: Hook payment sync into the payment service (AC: #3, #5, #6)

- [ ] 4.1: Modify `apps/api/src/services/payment-service.ts` — import QB sync:

  ```typescript
  import { syncPaymentToQuickBooks } from './quickbooks-service.js';
  ```

- [ ] 4.2: In `recordOnsitePayment`, after the `prisma.$transaction([...])` completes and `payment` is available, add before `return`:

  ```typescript
  // Fire-and-forget QB payment sync
  syncPaymentToQuickBooks(accountId, payment.id).catch(err => {
    console.error('[QB] fire-and-forget on-site payment sync error:', err);
  });
  ```

- [ ] 4.3: In `handleCheckoutCompleted`, after the `prisma.$transaction([...])` completes (the one creating the payment record), retrieve the new payment ID and add a fire-and-forget sync. The `$transaction` result is not currently captured — you need to capture the payment creation result:

  Modify the transaction to capture results:
  ```typescript
  const [newPayment] = await prisma.$transaction([
    prisma.payment.create({ data: { ... } }),
    prisma.invoice.update({ ... }),
  ]);

  // Fire-and-forget QB payment sync
  syncPaymentToQuickBooks(accountId, newPayment.id).catch(err => {
    console.error('[QB] fire-and-forget webhook payment sync error:', err);
  });
  ```

  Note: `handleCheckoutCompleted` already uses `await prisma.$transaction([...])` without capturing the result — change it to `const [newPayment] = await prisma.$transaction([...])` and add the fire-and-forget call immediately after.

### Task 5: Tests (AC: #1, #2, #3, #4, #5)

- [ ] 5.1: Add unit tests for the new QB sync functions in `apps/api/src/services/quickbooks-service.test.ts`. Use `jest.mock('../config/prisma.js', ...)` and `jest.mock('../config/quickbooks.js', ...)` patterns already established in that file:

  ```typescript
  // Test syncCustomerToQuickBooks
  describe('syncCustomerToQuickBooks', () => {
    it('skips sync when QB not connected', async () => {
      mockPrisma.account.findUnique.mockResolvedValue({ quickbooksConnected: false, quickbooksRealmId: null });
      await syncCustomerToQuickBooks('acct-1', 'cust-1');
      // No fetch should be called
      expect(global.fetch).not.toHaveBeenCalled();
    });

    it('logs DUPLICATE_PREVENTED when quickbooksCustomerId already set', async () => {
      mockPrisma.account.findUnique.mockResolvedValue({ quickbooksConnected: true, quickbooksRealmId: 'realm-1' });
      mockPrisma.customer.findUnique.mockResolvedValue({ id: 'cust-1', quickbooksCustomerId: 'QB-CUST-123', name: 'John' });
      mockPrisma.quickbooksSyncLog.create.mockResolvedValue({});

      await syncCustomerToQuickBooks('acct-1', 'cust-1');

      expect(mockPrisma.quickbooksSyncLog.create).toHaveBeenCalledWith(
        expect.objectContaining({ data: expect.objectContaining({ status: 'DUPLICATE_PREVENTED' }) })
      );
    });

    it('creates QB customer and stores ID on success', async () => {
      mockPrisma.account.findUnique.mockResolvedValue({ quickbooksConnected: true, quickbooksRealmId: 'realm-1' });
      mockPrisma.customer.findUnique.mockResolvedValue({ id: 'cust-1', quickbooksCustomerId: null, name: 'Jane Doe', email: 'jane@example.com', phone: '555-1234', addressLine1: null });
      global.fetch = jest.fn().mockResolvedValueOnce({ ok: true, json: async () => ({ Customer: { Id: 'QB-999' } }) });
      mockPrisma.customer.update.mockResolvedValue({});
      mockPrisma.quickbooksSyncLog.create.mockResolvedValue({});

      await syncCustomerToQuickBooks('acct-1', 'cust-1');

      expect(mockPrisma.customer.update).toHaveBeenCalledWith(
        expect.objectContaining({ data: { quickbooksCustomerId: 'QB-999' } })
      );
      expect(mockPrisma.quickbooksSyncLog.create).toHaveBeenCalledWith(
        expect.objectContaining({ data: expect.objectContaining({ status: 'SUCCESS', quickbooksId: 'QB-999' }) })
      );
    });

    it('logs FAILED and does not throw on QB API error', async () => {
      mockPrisma.account.findUnique.mockResolvedValue({ quickbooksConnected: true, quickbooksRealmId: 'realm-1' });
      mockPrisma.customer.findUnique.mockResolvedValue({ id: 'cust-1', quickbooksCustomerId: null, name: 'Jane' });
      global.fetch = jest.fn().mockResolvedValueOnce({ ok: false, status: 400, text: async () => 'Bad Request' });
      mockPrisma.quickbooksSyncLog.create.mockResolvedValue({});

      await expect(syncCustomerToQuickBooks('acct-1', 'cust-1')).resolves.toBeUndefined();

      expect(mockPrisma.quickbooksSyncLog.create).toHaveBeenCalledWith(
        expect.objectContaining({ data: expect.objectContaining({ status: 'FAILED' }) })
      );
    });
  });

  // Test syncPaymentToQuickBooks duplicate prevention
  describe('syncPaymentToQuickBooks', () => {
    it('logs DUPLICATE_PREVENTED when quickbooksPaymentId already set', async () => {
      mockPrisma.account.findUnique.mockResolvedValue({ quickbooksConnected: true, quickbooksRealmId: 'realm-1' });
      mockPrisma.payment.findUnique.mockResolvedValue({
        id: 'pay-1', quickbooksPaymentId: 'QB-PAY-456', amount: 15000,
        invoice: { id: 'inv-1', quickbooksInvoiceId: 'QB-INV-789', customer: { quickbooksCustomerId: 'QB-CUST-123' } }
      });
      mockPrisma.quickbooksSyncLog.create.mockResolvedValue({});

      await syncPaymentToQuickBooks('acct-1', 'pay-1');

      expect(mockPrisma.quickbooksSyncLog.create).toHaveBeenCalledWith(
        expect.objectContaining({ data: expect.objectContaining({ status: 'DUPLICATE_PREVENTED' }) })
      );
    });

    it('logs FAILED when invoice lacks quickbooksInvoiceId', async () => {
      mockPrisma.account.findUnique.mockResolvedValue({ quickbooksConnected: true, quickbooksRealmId: 'realm-1' });
      mockPrisma.payment.findUnique.mockResolvedValue({
        id: 'pay-2', quickbooksPaymentId: null, amount: 10000,
        invoice: { id: 'inv-2', quickbooksInvoiceId: null, customerId: 'cust-1', customer: { quickbooksCustomerId: 'QB-CUST-1' } }
      });
      mockPrisma.quickbooksSyncLog.create.mockResolvedValue({});

      await expect(syncPaymentToQuickBooks('acct-1', 'pay-2')).resolves.toBeUndefined();

      expect(mockPrisma.quickbooksSyncLog.create).toHaveBeenCalledWith(
        expect.objectContaining({ data: expect.objectContaining({ status: 'FAILED' }) })
      );
    });
  });
  ```

  Adapt mock patterns to match what is already established in `quickbooks-service.test.ts` from story 7.1.

- [ ] 5.2: Add an integration test for the end-to-end flow in `apps/api/tests/integration/quickbooks.test.ts`. Test that the sync push route triggers QB customer sync (mock `syncCustomerToQuickBooks`):

  ```typescript
  describe('QB sync triggered on sync push', () => {
    it('fires syncCustomerToQuickBooks after customer upsert', async () => {
      const mockSync = jest.spyOn(quickbooksService, 'syncCustomerToQuickBooks')
        .mockResolvedValue(undefined);

      await request(app)
        .post('/api/v1/sync/push')
        .set('Authorization', 'Bearer test-token')
        .send({
          changes: {
            customers: {
              created: [{ id: 'cust-abc', name: 'Alice', phone: '555-0001', updated_at: Date.now() }],
              updated: [],
              deleted: [],
            }
          }
        });

      // Fire-and-forget: give the microtask queue a tick
      await new Promise(resolve => setImmediate(resolve));
      expect(mockSync).toHaveBeenCalledWith(expect.any(String), 'cust-abc');
    });
  });
  ```

## Dev Notes

### What Story 7.1 Built (Required Foundation)

This story builds directly on top of Story 7.1. Everything in `quickbooks-service.ts` is already present:
- `getValidAccessToken(accountId)` — the single entry point for all QB API calls; handles auto-refresh
- `oauthStateStore`, `generateAuthorizationUrl`, `consumeOAuthState`, `exchangeCodeForTokens`, `refreshAccessToken`, `disconnectQuickBooks`, `getConnectionStatus`
- `quickbooksConfig.apiBaseUrl` — resolves to `https://sandbox-quickbooks.api.intuit.com` (sandbox) or `https://quickbooks.api.intuit.com` (production) depending on `QUICKBOOKS_ENVIRONMENT` env var
- `QuickbooksSyncLog` Prisma model created and accessible as `prisma.quickbooksSyncLog`

Story 7.1 completion notes flagged: the config uses lazy getters (not module-level `z.parse`), and the Prisma accessor is `prisma.account` (not `prisma.accounts`) due to Prisma singular naming convention.

### Prisma Model Naming — Critical

The Prisma schema uses `@map` decorators so DB columns are `snake_case` but TypeScript fields are `camelCase`. Prisma accessor names are **camelCase singular**:

| Prisma model name | DB table | Prisma accessor | QB ID field |
|-------------------|----------|-----------------|-------------|
| `Account` | `accounts` | `prisma.account` | `quickbooksConnected`, `quickbooksRealmId` |
| `Customer` | `customers` | `prisma.customer` | `quickbooksCustomerId` |
| `Invoice` | `invoices` | `prisma.invoice` | `quickbooksInvoiceId` |
| `Payment` | `payments` | `prisma.payment` | `quickbooksPaymentId` |
| `QuickbooksSyncLog` | `quickbooks_sync_log` | `prisma.quickbooksSyncLog` | |

**CRITICAL**: `Quote` and `LineItem` models use snake_case fields directly in Prisma (no `@map` decorators). When fetching line items, use `quote_id`, `unit_price`, `sort_order` — not camelCase. See the sync-service for the exact pattern.

### QB API Fields — No Schema Migration Required

All required QB ID fields are already in the Prisma schema (added as part of the original architecture):
- `Customer.quickbooksCustomerId` (`@map("quickbooks_customer_id")`) — verified in schema.prisma line 151
- `Invoice.quickbooksInvoiceId` (`@map("quickbooks_invoice_id")`) — verified in schema.prisma line 303
- `Payment.quickbooksPaymentId` (`@map("quickbooks_payment_id")`) — verified in schema.prisma line 326

**No Prisma migration is needed for this story.**

### QuickBooks Online API Details

**Base URLs (already in `quickbooksConfig`):**
- Sandbox: `https://sandbox-quickbooks.api.intuit.com`
- Production: `https://quickbooks.api.intuit.com`

**Always append `?minorversion=65`** to all API calls (per NFR18 — explicit version pinning for < 48h remediation).

**Customer endpoint:**
```
POST /v3/company/{realmId}/customer?minorversion=65
Content-Type: application/json
Authorization: Bearer {token}

{ "DisplayName": "John Smith", ... }
Response: { "Customer": { "Id": "123", "SyncToken": "0", ... } }
```
- `DisplayName` is required and must be unique within the QB company. Our `customer.name` is used directly. If there's a uniqueness conflict (HTTP 400 with Fault code `6240`), catch it and log FAILED — do not retry automatically in this story (that's story 7.3).

**Invoice endpoint:**
```
POST /v3/company/{realmId}/invoice?minorversion=65

{
  "CustomerRef": { "value": "123" },
  "DueDate": "2026-04-22",
  "Line": [
    {
      "DetailType": "SalesItemLineDetail",
      "Amount": 150.00,
      "Description": "AC Unit Repair",
      "SalesItemLineDetail": {
        "ItemRef": { "value": "1", "name": "Services" },
        "Qty": 1,
        "UnitPrice": 150.00
      }
    }
  ]
}
Response: { "Invoice": { "Id": "456", ... } }
```
- `ItemRef: { value: "1" }` is the default "Services" item QB creates automatically in every new company. This is the safe default for MVP line items.
- `Amount`, `UnitPrice` must be **dollar values (floats)**, not cents. Always divide by 100.
- `DueDate` must be in `YYYY-MM-DD` format: `invoice.dueAt.toISOString().split('T')[0]`.

**Payment endpoint:**
```
POST /v3/company/{realmId}/payment?minorversion=65

{
  "CustomerRef": { "value": "123" },
  "TotalAmt": 150.00,
  "Line": [
    {
      "Amount": 150.00,
      "LinkedTxn": [{ "TxnId": "456", "TxnType": "Invoice" }]
    }
  ]
}
Response: { "Payment": { "Id": "789", ... } }
```
- `TotalAmt` and `Line[].Amount` are dollars, not cents.
- `LinkedTxn.TxnType` must be exactly `"Invoice"` (case-sensitive).

### Import Paths — Use `.js` Extensions

All imports in the API server use `.js` extensions even for TypeScript source files (required for Node ESM compatibility). Follow the pattern from existing services:

```typescript
import { prisma } from '../config/prisma.js';
import { quickbooksConfig } from '../config/quickbooks.js';
// New imports in other files:
import { syncCustomerToQuickBooks } from './quickbooks-service.js';
import { syncInvoiceToQuickBooks } from './quickbooks-service.js';
import { syncPaymentToQuickBooks } from './quickbooks-service.js';
```

### Fire-and-Forget Pattern — Critical for NFR1

QB sync must never add latency to primary operations. Use this pattern consistently:

```typescript
// CORRECT — fire and forget
syncCustomerToQuickBooks(accountId, customerId).catch(err => {
  console.error('[QB] fire-and-forget error:', err);
});
// Next line executes immediately without waiting for QB

// WRONG — blocks the primary operation
await syncCustomerToQuickBooks(accountId, customerId);
```

The QB functions themselves use `try/catch` internally and never throw, so the `.catch()` on the fire-and-forget call is just an extra safety net.

### Sync Trigger Points Summary

| Entity | Trigger | Location | Fire-and-forget |
|--------|---------|----------|-----------------|
| Customer | After `upsertRecord` for `customers` table | `sync-service.ts` `upsertRecord()` | ✅ |
| Invoice | After `generateInvoiceFromJob` prisma transaction | `invoice-service.ts` | ✅ |
| Payment (webhook) | After `handleCheckoutCompleted` prisma transaction | `payment-service.ts` | ✅ |
| Payment (on-site) | After `recordOnsitePayment` prisma transaction | `payment-service.ts` | ✅ |

### Sync Order Dependency

QB sync operations have a dependency order: **Customer must exist in QB before Invoice can be created; Invoice must exist in QB before Payment can be linked.**

The `syncInvoiceToQuickBooks` function handles the customer dependency by calling `syncCustomerToQuickBooks` synchronously (with `await`) if the customer doesn't have a QB ID yet. This is the one exception to the fire-and-forget rule — it's an internal synchronous call within the invoice sync itself (not blocking the HTTP response).

`syncPaymentToQuickBooks` does NOT automatically create the invoice — it throws if `quickbooksInvoiceId` is missing and logs FAILED. This avoids recursive sync chains. The dependency violation is visible in the sync log for debugging (story 7.3 handles manual re-sync).

### Do NOT Modify

- WatermelonDB schema or mobile app — QB sync is server-side only per architecture boundary
- The `quickbooks_sync_log` table structure — already correct from story 7.1
- The sync push/pull API response format — these changes are transparent to the mobile app
- `apps/api/prisma/schema.prisma` — no migration needed

### Project Structure Notes

All modified/created files are in the API package:

| Action | File |
|--------|------|
| Modify | `apps/api/src/services/quickbooks-service.ts` (add sync functions) |
| Modify | `apps/api/src/services/sync-service.ts` (hook customer sync) |
| Modify | `apps/api/src/services/invoice-service.ts` (hook invoice sync) |
| Modify | `apps/api/src/services/payment-service.ts` (hook payment sync) |
| Modify | `apps/api/src/services/quickbooks-service.test.ts` (add tests) |
| Modify | `apps/api/tests/integration/quickbooks.test.ts` (add integration test) |

No new files, no mobile changes, no web changes, no migrations.

### References

- [Source: epics.md#Story 7.2] — Full acceptance criteria, FR28, FR31
- [Source: architecture.md#QuickBooks Integration] — "Direct Intuit API. Automatic sync. Sync entities: Customers, Invoices, Payments. Duplicate prevention via unique ID matching."
- [Source: architecture.md#Service Boundaries] — "quickbooks-service owns all Intuit API interaction"
- [Source: architecture.md#Architectural Boundaries] — "QuickBooks sync is server-side only — mobile app displays status but never interacts with Intuit API"
- [Source: architecture.md#NFR16] — "QuickBooks sync accuracy of 99.9%+ (zero duplicate transactions under normal operation)"
- [Source: architecture.md#NFR17] — "Automated monitoring alerts for sync failure rates exceeding 0.1%"
- [Source: architecture.md#NFR18] — "QuickBooks Online API supports API version changes with < 48h remediation" — use `?minorversion=65`
- [Source: architecture.md#Data Architecture] — `quickbooks_sync_log` table schema
- [Source: stories/7-1-quickbooks-oauth-connection.md#Completion Notes] — `prisma.account` accessor, lazy getter config, `getValidAccessToken` pattern
- [Source: stories/7-1-quickbooks-oauth-connection.md#Tasks 3.1, 3.2] — `getValidAccessToken` is the token entry point; token auto-refresh logic already implemented
- [Source: schema.prisma] — Verified QB ID fields exist: `Customer.quickbooksCustomerId` (L151), `Invoice.quickbooksInvoiceId` (L303), `Payment.quickbooksPaymentId` (L326)
- [Source: schema.prisma#LineItem] — Uses snake_case fields (`quote_id`, `unit_price`, `sort_order`, `quantity` as Decimal)

## Dev Agent Record

### Agent Model Used

claude-sonnet-4-6

### Debug Log References

### Completion Notes List

### File List
