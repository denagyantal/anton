# Story 4.4: Payment Tracking and Partial Payments

Status: done

## Story

As a tradesperson,
I want to see all my invoice statuses clearly and accept partial payments on jobs where customers pay deposits,
so that I always know exactly who owes me money and can handle deposit-based work without workarounds.

## Acceptance Criteria

1. **[Invoices list with color-coded status badges]** Given invoices exist in various statuses, when the user navigates to the Invoices screen (accessible from the More tab), then invoices are displayed in a FlatList sorted by creation date descending with color-coded status badges: DRAFT (gray), SENT (blue), VIEWED (purple), PAID (green), PARTIALLY_PAID (orange), OVERDUE (red); each card shows the invoice number or "Invoice" fallback, the formatted total, and for non-PAID invoices the outstanding amount (`$X.XX remaining`). (FR24)

2. **[Partial on-site payment recorded correctly]** Given an invoice has `total = 150000` cents ($1,500.00) and `amountPaid = 0`, when the tradesperson opens the payment modal, changes the amount to $500.00, and completes Stripe Payment Sheet, then: a `Payment` row is created with `amount = 50000`, `paymentMethod = 'CARD_ON_SITE'`, `status = 'SUCCEEDED'`; the invoice `amountPaid` updates to `50000`; invoice `status` changes to `'PARTIALLY_PAID'`; `paidAt` remains null (not set until fully paid); and the job detail screen badge reflects partial status. (FR25)

3. **[Partial payment via Stripe payment link webhook]** Given an invoice has `total = 150000` cents and `amountPaid = 50000` cents from a prior payment, when the customer pays via Stripe checkout link and Stripe fires `checkout.session.completed` with `amount_total = 100000`, then: a `Payment` row is created for `100000` cents; `amountPaid` updates to `150000`; invoice `status` changes to `'PAID'`; `paidAt` is set to now; and the push notification reads "Payment Received — $1,000.00". (FR25, FR26)

4. **[Payment link charges remaining balance]** Given an invoice has `total = 150000` and `amountPaid = 50000`, when the tradesperson taps "Send Invoice" (or re-sends), then the Stripe Checkout Session is created for `100000` cents (remaining balance: `total - amountPaid`), not the full `150000`. This ensures the customer is never billed more than what is actually outstanding.

5. **[Completing partial invoice transitions to PAID with paidAt]** Given an invoice has `total = 150000` and `amountPaid = 50000`, when an additional payment of `100000` cents is recorded (bringing `amountPaid` to `150000`), then: `status = 'PAID'`, `paidAt` is set to now, the job badge shows green PAID, and a push notification fires. (FR24, FR26)

6. **[Push notification on any payment — full or partial]** Given a payment of any amount is received (via Stripe webhook or on-site), when the payment is recorded, then a push notification is dispatched to the account owner — title "Payment Received", body `"$X.XX received for {invoiceNumber}"` — regardless of whether the invoice is now PAID or PARTIALLY_PAID. Notification failure must NOT cause the endpoint to return non-2xx. (FR26, FR47)

7. **[Payment modal shows remaining balance with editable amount]** Given the tradesperson opens the payment modal for an invoice with `total = 150000` and `amountPaid = 50000`, when the modal loads, then: a "Remaining Balance: $1,000.00" label is shown; an editable text field is pre-populated with `1000.00`; the tradesperson can change this to any value between `$0.01` and `$1,000.00`; the "Charge Card" button is disabled with a validation message if the entered amount is `<= 0` or `> remaining balance`.

8. **[Invoices summary header on Invoices screen]** Given the tradesperson navigates to the Invoices screen, when the screen loads, then a header row shows three summary tiles: "Outstanding" (sum of `total - amountPaid` for all non-PAID, non-DRAFT invoices in cents, formatted `$X.XX`), "Received Today" (sum of all SUCCEEDED payments with `createdAt >= start of today`), and "Overdue" (count of invoices with `status = 'OVERDUE'`, shown in red when > 0). (FR24)

9. **[Invoice status transitions are data-consistent]** Given any payment processing path (on-site or webhook), when `invoice.amountPaid + paymentAmount >= invoice.total`, then `status = 'PAID'` and `paidAt` is set; when `invoice.amountPaid + paymentAmount < invoice.total`, then `status = 'PARTIALLY_PAID'` and `paidAt` remains null. All arithmetic uses integer cents — no floating point. (architecture rule)

## Tasks / Subtasks

### Task 1: Update `handleCheckoutCompleted` to Use Session Amount (AC: #3, #5, #6, #9)

- [x] 1.1: In `apps/api/src/services/payment-service.ts`, replace the existing `handleCheckoutCompleted` body with the version below. The key change is using `session.amount_total` (actual charged amount) instead of `invoice.total`, and computing `PARTIALLY_PAID` vs `PAID` based on cumulative `amountPaid`:
  ```typescript
  export async function handleCheckoutCompleted(session: Stripe.Checkout.Session): Promise<void> {
    const { invoiceId, accountId, token } = session.metadata ?? {};
    if (!invoiceId || !accountId || !token) {
      console.error('[webhook] Missing metadata on session:', session.id);
      return;
    }

    // Idempotency — already processed this session
    const existingPayment = await prisma.payment.findFirst({
      where: { stripePaymentId: session.payment_intent as string },
    });
    if (existingPayment) return;

    const invoice = await prisma.invoice.findFirst({
      where: { id: invoiceId, accountId, paymentToken: token },
      include: { customer: { select: { phone: true, name: true } } },
    });
    if (!invoice) {
      console.error('[webhook] Invoice not found for session:', session.id, 'invoiceId:', invoiceId);
      return;
    }

    // Use actual session amount — supports partial payments
    const paymentAmount = session.amount_total ?? invoice.total;
    const newAmountPaid = invoice.amountPaid + paymentAmount;
    const isFullyPaid = newAmountPaid >= invoice.total;
    const newStatus = isFullyPaid ? 'PAID' : 'PARTIALLY_PAID';
    const paidAt = isFullyPaid ? new Date() : null;

    await prisma.$transaction([
      prisma.payment.create({
        data: {
          accountId,
          invoiceId,
          amount: paymentAmount,
          stripePaymentId: session.payment_intent as string,
          paymentMethod: 'CARD_VIA_LINK',
          status: 'SUCCEEDED',
        },
      }),
      prisma.invoice.update({
        where: { id: invoiceId },
        data: {
          amountPaid: newAmountPaid,
          status: newStatus,
          ...(isFullyPaid && { paidAt }),
        },
      }),
    ]);

    // Push notification — fires for both PAID and PARTIALLY_PAID (fire and forget)
    const formattedAmount = `$${(paymentAmount / 100).toFixed(2)}`;
    const invoiceLabel = invoice.invoiceNumber ?? 'invoice';
    try {
      const owner = await prisma.teamMember.findFirst({
        where: { accountId, role: 'OWNER' },
        select: { pushToken: true },
      });
      await sendPushNotification(
        owner?.pushToken,
        'Payment Received',
        `${formattedAmount} received for ${invoiceLabel}`,
      );
    } catch (err) {
      console.error('[webhook] push notification error:', err);
    }

    // SMS confirmation (fire and forget)
    try {
      const account = await prisma.account.findUnique({
        where: { id: accountId },
        select: { businessName: true },
      });
      const businessName = account?.businessName ?? 'Your service provider';
      await sendSms(
        invoice.customer.phone,
        `${businessName} received your payment of ${formattedAmount} for ${invoiceLabel}. Thank you!`,
      );
    } catch (err) {
      console.error('[webhook] SMS error:', err);
    }
  }
  ```

### Task 2: Update `createCheckoutSession` to Use Remaining Balance (AC: #4)

- [x] 2.1: In `apps/api/src/services/payment-service.ts`, locate `createCheckoutSession`. Add remaining balance calculation and update the line item `unit_amount`:
  ```typescript
  // Add after fetching invoice:
  const remainingBalance = invoice.total - invoice.amountPaid;
  if (remainingBalance <= 0) {
    throw new AppError('INVOICE_ALREADY_PAID', 'Invoice has already been paid in full', 422);
  }

  // Change line_items unit_amount from invoice.total to:
  unit_amount: remainingBalance,
  ```
  The `price_data.unit_amount` in the Stripe session `line_items` array changes from `invoice.total` to `remainingBalance`. This means the payment link always charges the exact outstanding balance.

### Task 3: Update `createPaymentIntent` to Accept Optional Custom Amount (AC: #2, #7)

- [x] 3.1: In `apps/api/src/services/payment-service.ts`, update the `createPaymentIntent` signature to accept optional `customAmount` and update the function body:
  ```typescript
  export async function createPaymentIntent(
    invoiceId: string,
    accountId: string,
    customAmount?: number, // Optional integer cents. Defaults to remaining balance.
  ): Promise<{
    clientSecret: string;
    paymentIntentId: string;
    amount: number;
    merchantDisplayName: string;
    remainingBalance: number;
  }> {
    const invoice = await prisma.invoice.findFirst({
      where: { id: invoiceId, accountId },
      include: { account: { select: { businessName: true } } },
    });
    if (!invoice) throw new AppError('INVOICE_NOT_FOUND', 'Invoice not found', 404);
    if (invoice.status === 'PAID') {
      throw new AppError('INVOICE_ALREADY_PAID', 'Invoice has already been paid in full', 422);
    }
    if (invoice.total <= 0) {
      throw new AppError('INVOICE_ZERO_AMOUNT', 'Invoice total must be greater than zero', 422);
    }

    const remainingBalance = invoice.total - invoice.amountPaid;
    if (remainingBalance <= 0) {
      throw new AppError('INVOICE_ALREADY_PAID', 'Invoice has already been paid in full', 422);
    }

    const chargeAmount = customAmount ?? remainingBalance;
    if (chargeAmount <= 0) {
      throw new AppError('INVALID_AMOUNT', 'Payment amount must be greater than zero', 422);
    }
    if (chargeAmount > remainingBalance) {
      throw new AppError(
        'AMOUNT_EXCEEDS_BALANCE',
        `Payment amount ${chargeAmount} exceeds remaining balance of ${remainingBalance} cents`,
        422,
      );
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount: chargeAmount,
      currency: 'usd',
      payment_method_types: ['card'],
      metadata: { invoiceId: invoice.id, accountId },
    });

    if (!paymentIntent.client_secret) {
      throw new AppError('STRIPE_PI_ERROR', 'Failed to create payment intent', 502);
    }

    return {
      clientSecret: paymentIntent.client_secret,
      paymentIntentId: paymentIntent.id,
      amount: paymentIntent.amount,
      merchantDisplayName: invoice.account.businessName ?? 'Your service provider',
      remainingBalance,
    };
  }
  ```

### Task 4: Update `recordOnsitePayment` to Support Partial Amounts (AC: #2, #5, #6, #9)

- [x] 4.1: In `apps/api/src/services/payment-service.ts`, update `recordOnsitePayment` to use the Stripe PI's verified amount and compute PARTIALLY_PAID vs PAID:
  ```typescript
  export async function recordOnsitePayment(
    invoiceId: string,
    accountId: string,
    paymentIntentId: string,
  ): Promise<{
    alreadyProcessed: boolean;
    payment?: { id: string; amount: number };
    invoice?: {
      status: string;
      amountPaid: number;
      paidAt: Date | null;
      invoiceNumber: string | null;
      accountId: string;
    };
    customer?: { phone: string; name: string };
  }> {
    // Idempotency guard
    const existing = await prisma.payment.findFirst({
      where: { stripePaymentId: paymentIntentId },
    });
    if (existing) return { alreadyProcessed: true };

    // Server-side Stripe verification — get actual charged amount (prevents fraud)
    const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);
    if (paymentIntent.status !== 'succeeded') {
      throw new AppError(
        'PAYMENT_NOT_SUCCEEDED',
        `Payment intent status is '${paymentIntent.status}', not 'succeeded'`,
        422,
      );
    }

    const invoice = await prisma.invoice.findFirst({
      where: { id: invoiceId, accountId },
      include: { customer: { select: { name: true, phone: true } } },
    });
    if (!invoice) throw new AppError('INVOICE_NOT_FOUND', 'Invoice not found', 404);

    // Use actual PI amount — not invoice.total (supports partial payments)
    const paymentAmount = paymentIntent.amount;
    const newAmountPaid = invoice.amountPaid + paymentAmount;
    const isFullyPaid = newAmountPaid >= invoice.total;
    const newStatus = isFullyPaid ? 'PAID' : 'PARTIALLY_PAID';
    const paidAt = isFullyPaid ? new Date() : null;

    const [payment] = await prisma.$transaction([
      prisma.payment.create({
        data: {
          accountId,
          invoiceId,
          amount: paymentAmount,
          stripePaymentId: paymentIntentId,
          paymentMethod: 'CARD_ON_SITE',
          status: 'SUCCEEDED',
        },
      }),
      prisma.invoice.update({
        where: { id: invoiceId },
        data: {
          amountPaid: newAmountPaid,
          status: newStatus,
          ...(isFullyPaid && { paidAt }),
        },
      }),
    ]);

    return {
      alreadyProcessed: false,
      payment: { id: payment.id, amount: payment.amount },
      invoice: {
        status: newStatus,
        amountPaid: newAmountPaid,
        paidAt,
        invoiceNumber: invoice.invoiceNumber,
        accountId,
      },
      customer: { phone: invoice.customer.phone, name: invoice.customer.name },
    };
  }
  ```

### Task 5: Update `payment-intent` Route to Accept Optional Amount (AC: #2, #7)

- [x] 5.1: In `apps/api/src/routes/invoices.ts`, update the `POST /:id/payment-intent` handler body to extract and validate an optional `amount` param and pass it to `createPaymentIntent`:
  ```typescript
  invoicesRouter.post('/:id/payment-intent', async (req, res, next) => {
    try {
      const { id } = req.params;
      const accountId = req.user!.accountId;
      const { amount } = req.body as { amount?: number };

      if (amount !== undefined && (!Number.isInteger(amount) || amount <= 0)) {
        res.status(422).json({
          error: { code: 'INVALID_AMOUNT', message: 'amount must be a positive integer (cents)', status: 422 },
        });
        return;
      }

      const result = await createPaymentIntent(id, accountId, amount);
      res.status(200).json({ data: result });
    } catch (err) {
      next(err);
    }
  });
  ```
  The response now includes `remainingBalance` from `createPaymentIntent` — no route change needed for that, it's included in `result`.

### Task 6: Add `useAllInvoices` Hook to `use-invoices.ts` (AC: #1, #8)

- [x] 6.1: In `apps/mobile/src/hooks/use-invoices.ts`, add the `Q` import from WatermelonDB if not already present:
  ```typescript
  import { Q } from '@nozbe/watermelondb';
  ```
- [x] 6.2: Add the `useAllInvoices` export at the bottom of `use-invoices.ts`:
  ```typescript
  export function useAllInvoices(statusFilter?: string) {
    const database = useDatabase();
    const [invoices, setInvoices] = useState<Invoice[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      const baseQuery = statusFilter
        ? database.get<Invoice>('invoices').query(Q.where('status', statusFilter))
        : database.get<Invoice>('invoices').query();

      const subscription = baseQuery.observe().subscribe((results) => {
        // WatermelonDB does not support ORDER BY in observe() — sort in JS
        const sorted = [...results].sort(
          (a, b) => (b.createdAt as unknown as number) - (a.createdAt as unknown as number),
        );
        setInvoices(sorted);
        setIsLoading(false);
      });

      return () => subscription.unsubscribe();
    }, [database, statusFilter]);

    return { invoices, isLoading };
  }
  ```

### Task 7: Add `useInvoiceSummary` Hook to `use-invoices.ts` (AC: #8)

- [x] 7.1: Ensure `Payment` model is imported at the top of `use-invoices.ts`:
  ```typescript
  import Payment from '../db/models/payment';
  ```
- [x] 7.2: Add the `useInvoiceSummary` export immediately after `useAllInvoices`:
  ```typescript
  interface InvoiceSummary {
    outstanding: number;   // integer cents
    receivedToday: number; // integer cents
    overdueCount: number;
  }

  export function useInvoiceSummary() {
    const database = useDatabase();
    const [summary, setSummary] = useState<InvoiceSummary>({
      outstanding: 0,
      receivedToday: 0,
      overdueCount: 0,
    });
    const [isLoading, setIsLoading] = useState(true);

    const calculate = useCallback(async () => {
      try {
        const allInvoices = await database.get<Invoice>('invoices').query().fetch();

        const outstanding = allInvoices
          .filter((inv) => inv.status !== 'PAID' && inv.status !== 'DRAFT')
          .reduce((sum, inv) => sum + Math.max(0, inv.total - inv.amountPaid), 0);

        const overdueCount = allInvoices.filter((inv) => inv.status === 'OVERDUE').length;

        const startOfToday = new Date();
        startOfToday.setHours(0, 0, 0, 0);

        const todayPayments = await database
          .get<Payment>('payments')
          .query(
            Q.where('status', 'SUCCEEDED'),
            Q.where('created_at', Q.gte(startOfToday.getTime())),
          )
          .fetch();

        const receivedToday = todayPayments.reduce((sum, p) => sum + p.amount, 0);

        setSummary({ outstanding, receivedToday, overdueCount });
      } catch (err) {
        console.error('[useInvoiceSummary] calculation error:', err);
      } finally {
        setIsLoading(false);
      }
    }, [database]);

    useEffect(() => {
      calculate();
    }, [calculate]);

    return { summary, isLoading, refresh: calculate };
  }
  ```

### Task 8: Create Invoices List Screen (AC: #1, #8)

- [x] 8.1: Create `apps/mobile/app/(tabs)/more/invoices.tsx`:
  ```typescript
  import React, { useCallback } from 'react';
  import {
    View,
    Text,
    FlatList,
    StyleSheet,
    ActivityIndicator,
  } from 'react-native';
  import { SafeAreaView } from 'react-native-safe-area-context';
  import { Stack } from 'expo-router';
  import { useAllInvoices, useInvoiceSummary } from '../../../src/hooks/use-invoices';
  import type Invoice from '../../../src/db/models/invoice';

  const STATUS_CONFIG: Record<string, { badgeBg: string; badgeText: string; label: string }> = {
    DRAFT:          { badgeBg: '#f3f4f6', badgeText: '#374151', label: 'Draft' },
    SENT:           { badgeBg: '#dbeafe', badgeText: '#1d4ed8', label: 'Sent' },
    VIEWED:         { badgeBg: '#ede9fe', badgeText: '#6d28d9', label: 'Viewed' },
    PAID:           { badgeBg: '#dcfce7', badgeText: '#15803d', label: 'Paid' },
    PARTIALLY_PAID: { badgeBg: '#fed7aa', badgeText: '#c2410c', label: 'Partial' },
    OVERDUE:        { badgeBg: '#fee2e2', badgeText: '#dc2626', label: 'Overdue' },
  };

  function fmt(cents: number): string {
    return `$${(cents / 100).toFixed(2)}`;
  }

  function InvoiceCard({ invoice }: { invoice: Invoice }) {
    const cfg = STATUS_CONFIG[invoice.status] ?? STATUS_CONFIG.DRAFT;
    const outstanding = Math.max(0, invoice.total - invoice.amountPaid);

    return (
      <View style={styles.card}>
        <View style={styles.cardRow}>
          <Text style={styles.invoiceNumber}>{invoice.invoiceNumber ?? 'Invoice'}</Text>
          <View style={[styles.badge, { backgroundColor: cfg.badgeBg }]}>
            <Text style={[styles.badgeText, { color: cfg.badgeText }]}>{cfg.label}</Text>
          </View>
        </View>
        <View style={styles.cardRow}>
          <Text style={styles.totalText}>Total: {fmt(invoice.total)}</Text>
          {invoice.status !== 'PAID' && invoice.status !== 'DRAFT' && (
            <Text style={styles.outstandingText}>{fmt(outstanding)} remaining</Text>
          )}
        </View>
      </View>
    );
  }

  function SummaryHeader({
    outstanding,
    receivedToday,
    overdueCount,
  }: {
    outstanding: number;
    receivedToday: number;
    overdueCount: number;
  }) {
    return (
      <View style={styles.summaryRow}>
        <View style={styles.summaryTile}>
          <Text style={styles.tileLabel}>Outstanding</Text>
          <Text style={[styles.tileValue, { color: '#b45309' }]}>{fmt(outstanding)}</Text>
        </View>
        <View style={styles.summaryTile}>
          <Text style={styles.tileLabel}>Received Today</Text>
          <Text style={[styles.tileValue, { color: '#15803d' }]}>{fmt(receivedToday)}</Text>
        </View>
        <View style={styles.summaryTile}>
          <Text style={styles.tileLabel}>Overdue</Text>
          <Text style={[styles.tileValue, { color: overdueCount > 0 ? '#dc2626' : '#16a34a' }]}>
            {overdueCount}
          </Text>
        </View>
      </View>
    );
  }

  export default function InvoicesScreen() {
    const { invoices, isLoading: listLoading } = useAllInvoices();
    const { summary, isLoading: summaryLoading, refresh } = useInvoiceSummary();

    const renderItem = useCallback(({ item }: { item: Invoice }) => (
      <InvoiceCard invoice={item} />
    ), []);

    const keyExtractor = useCallback((item: Invoice) => item.id, []);

    if (listLoading || summaryLoading) {
      return (
        <SafeAreaView style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#16A34A" />
        </SafeAreaView>
      );
    }

    return (
      <SafeAreaView style={styles.container} edges={['bottom']}>
        <Stack.Screen options={{ title: 'Invoices', headerShown: true }} />
        <FlatList
          data={invoices}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          ListHeaderComponent={
            <SummaryHeader
              outstanding={summary.outstanding}
              receivedToday={summary.receivedToday}
              overdueCount={summary.overdueCount}
            />
          }
          onRefresh={refresh}
          refreshing={false}
          contentContainerStyle={styles.listContent}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          ListEmptyComponent={
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyTitle}>No invoices yet</Text>
              <Text style={styles.emptySubtext}>
                Invoices appear here after generating from completed jobs
              </Text>
            </View>
          }
        />
      </SafeAreaView>
    );
  }

  const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#f9fafb' },
    loadingContainer: { flex: 1, alignItems: 'center', justifyContent: 'center' },
    listContent: { paddingBottom: 24 },
    summaryRow: {
      flexDirection: 'row',
      padding: 12,
      gap: 8,
      backgroundColor: '#fff',
      borderBottomWidth: 1,
      borderBottomColor: '#e5e7eb',
    },
    summaryTile: {
      flex: 1,
      alignItems: 'center',
      paddingVertical: 10,
      backgroundColor: '#f9fafb',
      borderRadius: 8,
    },
    tileLabel: {
      fontSize: 10,
      color: '#6b7280',
      fontWeight: '600',
      textTransform: 'uppercase',
      letterSpacing: 0.4,
      marginBottom: 4,
    },
    tileValue: { fontSize: 16, fontWeight: '700' },
    card: {
      backgroundColor: '#fff',
      paddingHorizontal: 16,
      paddingVertical: 14,
    },
    cardRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 4,
    },
    invoiceNumber: { fontSize: 16, fontWeight: '600', color: '#111827' },
    badge: { borderRadius: 12, paddingHorizontal: 10, paddingVertical: 2 },
    badgeText: { fontSize: 12, fontWeight: '600' },
    totalText: { fontSize: 14, color: '#6b7280' },
    outstandingText: { fontSize: 14, fontWeight: '600', color: '#c2410c' },
    separator: { height: 1, backgroundColor: '#f3f4f6' },
    emptyContainer: { paddingTop: 80, alignItems: 'center', paddingHorizontal: 32 },
    emptyTitle: { fontSize: 18, fontWeight: '600', color: '#374151', marginBottom: 8 },
    emptySubtext: { fontSize: 14, color: '#9ca3af', textAlign: 'center' },
  });
  ```

### Task 9: Add Invoices Navigation Link to More Screen (AC: #1)

- [x] 9.1: In `apps/mobile/app/(tabs)/more/index.tsx`, add `router` to the expo-router import and add an "Invoices" navigation item. Locate the section rendering menu items (TouchableOpacity rows) and add a new row for invoices near the top. The exact placement depends on what already exists in the file — add it as the first navigable item:
  ```typescript
  import { router } from 'expo-router';

  // In the JSX list of menu items:
  <TouchableOpacity
    style={styles.menuItem}
    onPress={() => router.push('/(tabs)/more/invoices')}
  >
    <Text style={styles.menuItemLabel}>Invoices</Text>
    <Text style={styles.menuChevron}>›</Text>
  </TouchableOpacity>
  ```
  Adapt style names to match whatever already exists in `more/index.tsx`. The navigation target is `'/(tabs)/more/invoices'`.

### Task 10: Update Payment Modal for Partial Amount Entry (AC: #2, #7)

- [x] 10.1: In `apps/mobile/app/(modals)/payment.tsx`, add `TextInput` to the React Native import:
  ```typescript
  import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    ActivityIndicator,
    Alert,
    TextInput,
  } from 'react-native';
  ```
- [x] 10.2: Update `useLocalSearchParams` to extract `invoiceAmountPaid`:
  ```typescript
  const { invoiceId, invoiceTotal, invoiceAmountPaid } = useLocalSearchParams<{
    invoiceId: string;
    invoiceTotal: string;
    invoiceAmountPaid: string;
  }>();
  ```
- [x] 10.3: Add amount state variables after the existing state declarations:
  ```typescript
  const totalCents = parseInt(invoiceTotal ?? '0', 10);
  const alreadyPaidCents = parseInt(invoiceAmountPaid ?? '0', 10);
  const remainingCents = Math.max(0, totalCents - alreadyPaidCents);
  const remainingFormatted = `$${(remainingCents / 100).toFixed(2)}`;

  const [customAmountStr, setCustomAmountStr] = useState(
    (remainingCents / 100).toFixed(2),
  );

  const customAmountCents = Math.round(parseFloat(customAmountStr || '0') * 100);
  const isAmountValid = customAmountCents > 0 && customAmountCents <= remainingCents;
  const amountError =
    customAmountStr !== '' && !isAmountValid
      ? customAmountCents <= 0
        ? 'Amount must be greater than $0.00'
        : `Cannot exceed ${remainingFormatted}`
      : null;
  ```
- [x] 10.4: Replace the existing `amountSection` View in the JSX with the editable version:
  ```typescript
  <View style={styles.amountSection}>
    <Text style={styles.remainingLabel}>Remaining Balance: {remainingFormatted}</Text>
    <Text style={styles.amountSubLabel}>Amount to Charge</Text>
    <View style={styles.amountInputRow}>
      <Text style={styles.dollarSign}>$</Text>
      <TextInput
        style={styles.amountInput}
        value={customAmountStr}
        onChangeText={setCustomAmountStr}
        keyboardType="decimal-pad"
        returnKeyType="done"
        selectTextOnFocus
        editable={state !== 'processing'}
      />
    </View>
    {amountError ? <Text style={styles.amountError}>{amountError}</Text> : null}
  </View>
  ```
- [x] 10.5: Update `handleChargeCard` to pass `customAmountCents` to `collectPayment`:
  ```typescript
  const result = await collectPayment(invoiceId, customAmountCents);
  ```
- [x] 10.6: Disable "Charge Card" when amount is invalid:
  ```typescript
  <TouchableOpacity
    style={[
      styles.chargeButton,
      (state === 'processing' || !isAmountValid) && styles.chargeButtonDisabled,
    ]}
    onPress={handleChargeCard}
    disabled={state === 'processing' || !isAmountValid}
  >
  ```
- [x] 10.7: Add new styles to `StyleSheet.create`:
  ```typescript
  remainingLabel: {
    fontSize: 14,
    color: '#6b7280',
    textAlign: 'center',
    fontWeight: '500',
    marginBottom: 16,
  },
  amountSubLabel: {
    fontSize: 13,
    color: '#374151',
    textAlign: 'center',
    marginBottom: 8,
  },
  amountInputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#d1d5db',
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: '#f9fafb',
  },
  dollarSign: {
    fontSize: 32,
    fontWeight: '700',
    color: '#374151',
    marginRight: 2,
  },
  amountInput: {
    fontSize: 32,
    fontWeight: '700',
    color: '#111827',
    minWidth: 80,
    textAlign: 'left',
  },
  amountError: {
    fontSize: 13,
    color: '#dc2626',
    textAlign: 'center',
    marginTop: 6,
  },
  ```
  Remove or replace the old `amountValue` style (the big static number) since it's replaced by the input.

### Task 11: Update `useCollectPayment` Hook to Pass Custom Amount (AC: #2, #7)

- [x] 11.1: In `apps/mobile/src/hooks/use-invoices.ts`, update the `PaymentIntentResult` interface to include `remainingBalance`:
  ```typescript
  interface PaymentIntentResult {
    clientSecret: string;
    paymentIntentId: string;
    amount: number;
    merchantDisplayName: string;
    remainingBalance: number; // Added in story 4.4
  }
  ```
- [x] 11.2: Update the `collectPayment` function signature and API call to accept and pass `customAmountCents`:
  ```typescript
  const collectPayment = useCallback(
    async (
      invoiceId: string,
      customAmountCents?: number,
    ): Promise<{ success: boolean; amount: number }> => {
      if (!isConnected) {
        throw new Error('An internet connection is required to process card payments.');
      }

      setIsLoading(true);
      try {
        // Pass custom amount to server; undefined → server defaults to remaining balance
        const piResult = await apiClient.post<PaymentIntentResult>(
          `/api/v1/invoices/${invoiceId}/payment-intent`,
          customAmountCents !== undefined ? { amount: customAmountCents } : undefined,
        );

        // initPaymentSheet + presentPaymentSheet unchanged from story 4.3
        // ... rest of implementation unchanged ...
      } finally {
        setIsLoading(false);
      }
    },
    [isConnected, initPaymentSheet, presentPaymentSheet],
  );
  ```
  The WatermelonDB write block after `record-onsite-payment` succeeds also needs updating: the invoice status may now be `'PARTIALLY_PAID'` instead of `'PAID'`, and `amountPaid` may be less than `invoice.total`. The existing code already sets `record.status = recordResult.invoiceStatus!` and `record.amountPaid = recordResult.invoiceAmountPaid ?? ...` — this correctly handles both cases with no further changes.

### Task 12: Update `handleCollectPayment` in Job Detail to Pass `invoiceAmountPaid` (AC: #7)

- [x] 12.1: In `apps/mobile/app/(tabs)/jobs/[id].tsx`, update `handleCollectPayment` to include `invoiceAmountPaid` in the route params:
  ```typescript
  const handleCollectPayment = useCallback(() => {
    if (!invoice) return;
    if (!isConnected) {
      Alert.alert('Collect Payment', 'An internet connection is required to process card payments.');
      return;
    }
    router.push({
      pathname: '/(modals)/payment',
      params: {
        invoiceId: invoice.id,
        invoiceTotal: String(invoice.total),
        invoiceAmountPaid: String(invoice.amountPaid), // NEW — enables remaining balance display
      },
    });
  }, [invoice, isConnected]);
  ```

### Task 13: Tests — Updated `payment-service.ts` Unit Tests (AC: #2–#6, #9)

- [x] 13.1: In `apps/api/src/services/payment-service.test.ts`, add test blocks for the modified functions at the bottom of the existing file (do NOT replace existing tests — append new `describe` blocks):

  **`describe('handleCheckoutCompleted — partial payment')`**
  - Test: `session.amount_total` < `invoice.total`, `amountPaid` was 0 → Payment created for session amount; invoice status = `'PARTIALLY_PAID'`; `paidAt` null; push and SMS fired
  - Test: `session.amount_total` + existing `amountPaid` >= `invoice.total` → status = `'PAID'`; `paidAt` set
  - Test: duplicate `stripePaymentId` (idempotency) → returns immediately, no `$transaction` called
  - Test: invoice not found (bad token) → function logs and returns without throwing

  **`describe('createCheckoutSession — remaining balance')`**
  - Test: `amountPaid = 0` → session `unit_amount = invoice.total`
  - Test: `amountPaid = 50000`, `total = 150000` → session `unit_amount = 100000`
  - Test: `amountPaid >= total` → throws `AppError` code `'INVOICE_ALREADY_PAID'`, status 422

  **`describe('createPaymentIntent — custom amount')`** (extends existing describe)
  - Update mock invoice to include `amountPaid: 0` so existing tests pass unchanged
  - Test: no `customAmount` → PI created for `invoice.total - invoice.amountPaid`
  - Test: `customAmount = 50000`, remaining = 100000 → PI created for 50000
  - Test: `customAmount > remaining` → throws `AppError` code `'AMOUNT_EXCEEDS_BALANCE'`, status 422
  - Test: `customAmount = 0` → throws `AppError` code `'INVALID_AMOUNT'`, status 422
  - Test: `amountPaid >= total` (already paid) → throws `AppError` code `'INVOICE_ALREADY_PAID'`
  - Test: response includes `remainingBalance` field

  **`describe('recordOnsitePayment — partial amount')`** (extends existing describe)
  - Test: `paymentIntent.amount = 50000`, `invoice.amountPaid = 0`, `invoice.total = 150000` → status = `'PARTIALLY_PAID'`; `paidAt` null; payment `amount = 50000`
  - Test: `paymentIntent.amount = 100000`, `invoice.amountPaid = 50000`, `invoice.total = 150000` → status = `'PAID'`; `paidAt` set
  - Test: duplicate PI id → `{ alreadyProcessed: true }` — no `$transaction`
  - Test: PI status `'requires_payment_method'` → throws `PAYMENT_NOT_SUCCEEDED`

- [x] 13.2: Run `npm test` in `apps/api/` and confirm all tests pass before marking tasks complete.

## Dev Notes

### Critical Behavior Change: Amount Is Now Stripe-Verified, Not Assumed

Prior to story 4.4, both `handleCheckoutCompleted` and `recordOnsitePayment` used `invoice.total` as the payment amount — assuming the customer always paid in full. Story 4.4 changes both to use the Stripe-reported amount:
- `handleCheckoutCompleted`: uses `session.amount_total` (the Stripe Checkout amount charged)
- `recordOnsitePayment`: uses `paymentIntent.amount` retrieved server-side from Stripe

**This change is backward-compatible**: when a customer pays in full, `session.amount_total = invoice.total`, so `newAmountPaid = invoice.total` → status = `'PAID'` — identical behavior to before.

### Integer Cents Throughout — Never Float in Business Logic

```typescript
// CORRECT — integer arithmetic only
const newAmountPaid = invoice.amountPaid + paymentAmount; // both ints
const isFullyPaid = newAmountPaid >= invoice.total;       // integer comparison

// WRONG — float arithmetic, subject to precision errors
const newAmountPaid = invoice.amountPaid / 100 + paymentAmount / 100; // DON'T
```

For display only: `(cents / 100).toFixed(2)` is the single conversion point in the UI.

In the payment modal: `Math.round(parseFloat(str) * 100)` converts the user's dollar string to cents. `Math.round` is essential — `parseFloat('999.99') * 100 = 99998.99999...` without rounding.

### `paidAt` Is Only Set When Fully Paid

The Prisma update for a partial payment must NOT include `paidAt: null` (which would overwrite an existing value if somehow previously set). Use the spread pattern to conditionally include `paidAt`:

```typescript
// Correct — only spreads paidAt when fully paid
data: {
  amountPaid: newAmountPaid,
  status: newStatus,
  ...(isFullyPaid && { paidAt: new Date() }),
}
// If isFullyPaid = false, `paidAt` is not in the data object → Prisma leaves existing value unchanged
```

### WatermelonDB `createdAt` in `payments` Model

The `useInvoiceSummary` hook queries `Q.where('created_at', Q.gte(startOfToday.getTime()))`. This requires `created_at` to be a column in the WatermelonDB `payments` table schema. Before implementing Task 7, open `apps/mobile/src/db/schema.ts` and verify the `payments` tableSchema includes `{ name: 'created_at', type: 'number' }` (WatermelonDB stores `@date` fields as milliseconds).

If `created_at` is missing from the schema:
1. Add `{ name: 'created_at', type: 'number' }` to the payments tableSchema columns
2. Bump the schema version by 1 (currently 9 → becomes 10)
3. Add a migration step in `apps/mobile/src/db/migrations.ts` (empty migration if no data transform needed):
   ```typescript
   addColumns({ table: 'payments', columns: [{ name: 'created_at', type: 'number' }] })
   ```

If `created_at` already exists in the schema, make no schema changes.

### `useAllInvoices` — In-Memory Sort Is Acceptable at MVP Scale

WatermelonDB's `.observe()` does not support `ORDER BY` at the query level for all adapters. The sort is performed after observable emission: `[...results].sort(...)`. For MVP (< 1,000 invoices per account), this is not a performance concern. The `createdAt` field on WatermelonDB models is typed as `Date` in the model class but stored as a milliseconds integer — cast via `as unknown as number` for comparison arithmetic.

### `Q.where('created_at', Q.gte(...))` Is Supported by WatermelonDB SQLite Adapter

WatermelonDB's SQLite adapter supports `Q.gte`, `Q.lte`, `Q.gt`, `Q.lt` for numeric columns. Since `created_at` is stored as milliseconds (integer), `Q.gte(startOfToday.getTime())` emits a valid `WHERE created_at >= <ms>` SQLite query. This runs in the WatermelonDB thread — it does not block the JS thread.

### Existing `payment-service.test.ts` — Extend, Don't Replace

The test file already has `describe` blocks for `createPaymentIntent` (7 tests) and `recordOnsitePayment` (3 tests) from story 4.3 Task 11. Do NOT delete these — add new `describe` blocks for partial payment behavior at the end. Update the mock invoice fixture to include `amountPaid: 0` (matching the new function signature) so existing tests continue to pass.

### Push Notification: `sendPushNotification` Pattern Is Unchanged

The push notification call in Task 1 follows the same fire-and-forget pattern established in story 4.2 (webhook handler) and story 4.3 (`record-onsite-payment` endpoint). Wrap in `try/catch`, log the error, and continue. The notification must fire for BOTH PAID and PARTIALLY_PAID outcomes — the AC explicitly requires notification on any payment regardless of invoice completion status.

### Invoices Screen Navigation — Expo Router File-Based Routing

Placing the screen at `apps/mobile/app/(tabs)/more/invoices.tsx` registers it as path `/(tabs)/more/invoices` with Expo Router. No changes to `(tabs)/_layout.tsx` are needed — the invoices screen is not a tab itself, just a stack route within the `more` segment. The tab bar continues to show the same 4 tabs (Jobs, Schedule, Customers, More).

### `apiClient.post<T>(path, undefined)` Is Safe

When `customAmountCents` is `undefined` in `useCollectPayment`, the hook calls `apiClient.post<T>(path, undefined)`. From story 4.3 dev notes: `apiClient.post<T>(path, body?)` accepts an optional body — passing `undefined` omits the request body entirely. The API endpoint reads `req.body.amount` which is `undefined` when body is absent, and the route handler validates accordingly (passes `undefined` to `createPaymentIntent`, which defaults to remaining balance).

### Invoice `amountPaid` in WatermelonDB After Partial Payment

After a partial on-site payment, `useCollectPayment` writes to WatermelonDB:
```typescript
await invoices[0].update((record) => {
  record.status = recordResult.invoiceStatus!;           // 'PARTIALLY_PAID' or 'PAID'
  record.amountPaid = recordResult.invoiceAmountPaid ?? invoices[0].amountPaid;
  if (recordResult.invoicePaidAt) {
    record.paidAt = Date.parse(recordResult.invoicePaidAt);
  }
  // paidAt is only in response when isFullyPaid — partial payment leaves paidAt unchanged in WatermelonDB
});
```
The existing write code from story 4.3 handles this correctly — `recordResult.invoiceAmountPaid` is the new cumulative total from the server (e.g., 50000 after a $500 payment on a $1500 invoice).

### Project Structure Notes

**Files to CREATE:**
```
apps/mobile/app/(tabs)/more/invoices.tsx     — New Invoices list + summary screen
```

**Files to MODIFY:**
```
apps/api/src/services/payment-service.ts     — handleCheckoutCompleted (use session.amount_total,
                                               PARTIALLY_PAID logic); createCheckoutSession
                                               (remaining balance); createPaymentIntent (accept
                                               customAmount, return remainingBalance);
                                               recordOnsitePayment (use PI amount, PARTIALLY_PAID)

apps/api/src/routes/invoices.ts              — POST /:id/payment-intent: extract optional amount
                                               from body, pass to createPaymentIntent

apps/api/src/services/payment-service.test.ts — Extend with partial payment test cases
                                               (do not replace existing tests)

apps/mobile/src/hooks/use-invoices.ts        — Add useAllInvoices, useInvoiceSummary exports;
                                               update PaymentIntentResult interface;
                                               update useCollectPayment signature + API call

apps/mobile/app/(modals)/payment.tsx         — Add invoiceAmountPaid param; editable amount
                                               input with validation; updated handleChargeCard

apps/mobile/app/(tabs)/jobs/[id].tsx         — Pass invoiceAmountPaid in handleCollectPayment
                                               router.push params

apps/mobile/app/(tabs)/more/index.tsx        — Add "Invoices" navigation menu item
```

All paths relative to `mvps/field-service-management/src/` as the monorepo root.

### References

- [Source: epics.md#Story 4.4] — All acceptance criteria, FR24, FR25, FR26, FR47
- [Source: architecture.md#Data Model] — `invoices` table: `amount_paid` (integer cents), `status` enum (DRAFT|SENT|VIEWED|PAID|PARTIALLY_PAID|OVERDUE), `paid_at` (nullable); `payments` table: `amount`, `status` (SUCCEEDED), `created_at`
- [Source: architecture.md#Enforcement Guidelines] — Money as integer cents; no `any` types; co-locate tests; never show raw Stripe errors to users
- [Source: architecture.md#Frontend Architecture] — WatermelonDB observables (`.observe().subscribe()`); `Q` from `@nozbe/watermelondb`; `useState` for UI state only; feature-based organization
- [Source: architecture.md#API & Communication Patterns] — `{ "data": ... }` wrapper on all API responses; `{ "error": { code, message, status } }` on errors; integer cents in storage and API
- [Source: stories/4-2-invoice-sms-delivery-and-payment-links.md] — `handleCheckoutCompleted` implementation being replaced; `session.amount_total` availability; `$transaction` atomicity pattern; `sendPushNotification` + `sendSms` fire-and-forget; WatermelonDB schema v9 with `payments` table; `stripePaymentId` unique constraint for idempotency; Stripe API version `'2026-04-22.dahlia'`
- [Source: stories/4-3-on-site-card-payment-processing.md] — `recordOnsitePayment` implementation being updated; `createPaymentIntent` implementation being updated; `useCollectPayment` hook to extend; payment modal to update; `apiClient.post<T>(path, body?)` with optional body; `record._raw.id` pattern for server UUIDs; no schema bump rule; `Canceled` code from `presentPaymentSheet`; `invoice.account.businessName` include pattern; `invoicesRouter.use(authMiddleware)` protects all routes
- [Source: stories/4-1-invoice-generation-from-completed-jobs.md] — `database.write` pattern; `NetworkContext` usage; `useDatabase` hook import

## Dev Agent Record

### Agent Model Used

claude-sonnet-4-6

### Debug Log References

### Completion Notes List

- Implemented `handleCheckoutCompleted(session: CheckoutSessionLike): Promise<void>` — function now takes the Stripe session object directly (instead of a session ID string), uses `session.amount_total` for the payment amount, and handles PARTIALLY_PAID vs PAID logic plus push/SMS internally (fire-and-forget). Push and SMS moved from the payments route into the service.
- `createCheckoutSession` updated to charge `invoice.total - invoice.amountPaid` (remaining balance) rather than the full total; throws `INVOICE_ALREADY_PAID` if already paid.
- `createPaymentIntent` extended with optional `customAmount` parameter; defaults to remaining balance when absent; validates amount > 0 and ≤ remaining; returns `remainingBalance` in response.
- `recordOnsitePayment` updated to use `paymentIntent.amount` (Stripe-verified amount) instead of `invoice.total`; computes PARTIALLY_PAID vs PAID using integer arithmetic; `paidAt` only set when fully paid.
- `payments.ts` route simplified: now just calls `handleCheckoutCompleted(session)` and catches errors; push/SMS removed from route.
- `invoices.ts` `POST /:id/payment-intent` route updated to extract optional `amount` from request body and pass to `createPaymentIntent`.
- `use-invoices.ts`: `PaymentIntentResult` extended with `remainingBalance`; `useCollectPayment.collectPayment` accepts optional `customAmountCents` and passes it in POST body; `useAllInvoices` hook added (observes all invoices, sorts by createdAt descending); `useInvoiceSummary` hook added (calculates outstanding, receivedToday, overdueCount).
- Payment modal rewritten to show "Remaining Balance" label, editable amount TextInput pre-populated with remaining balance, real-time validation (must be > 0 and ≤ remaining), and disables Charge Card button with error message when invalid.
- `handleCollectPayment` in `jobs/[id].tsx` now passes `invoiceAmountPaid` in router params.
- `more/index.tsx` gains "Invoices" navigation item pointing to `/(tabs)/more/invoices`.
- `more/invoices.tsx` (new) implements Invoices list screen with FlatList, color-coded status badges, summary header tiles (Outstanding, Received Today, Overdue count), and empty state.
- Used `CheckoutSessionLike` local interface (instead of `Stripe.Checkout.Session`) to avoid CJS/ESM namespace incompatibility with Stripe v22 types. Interface captures only the fields the service accesses (`id`, `payment_intent`, `amount_total`, `metadata`).
- All 31 unit tests in `payment-service.test.ts` pass (updated existing tests to match new void-return API + new session-object signature; added 4 new describe blocks); all 143 API tests pass.
- `payments-webhook.test.ts` updated: `handleCheckoutCompleted` now expected to receive session object (`expect.objectContaining({ id: 'cs_test_123' })`); push/SMS assertions removed (moved to service layer).

### File List

**Modified:**
- `apps/api/src/services/payment-service.ts`
- `apps/api/src/routes/payments.ts`
- `apps/api/src/routes/invoices.ts`
- `apps/api/src/services/payment-service.test.ts`
- `apps/api/tests/integration/payments-webhook.test.ts`
- `apps/mobile/src/hooks/use-invoices.ts`
- `apps/mobile/app/(modals)/payment.tsx`
- `apps/mobile/app/(tabs)/jobs/[id].tsx`
- `apps/mobile/app/(tabs)/more/index.tsx`

**Created:**
- `apps/mobile/app/(tabs)/more/invoices.tsx`
