# Story 4.3: On-Site Card Payment Processing

Status: ready-for-dev

## Story

As a tradesperson,
I want to accept card payments on-site through my phone after completing a job,
so that I can get paid immediately without relying on the customer to pay the SMS link later.

## Acceptance Criteria

1. **[Collect Payment button visible for unpaid invoices]** Given a job has status `COMPLETE` or `INVOICED` and an associated invoice exists with status `DRAFT`, `SENT`, `VIEWED`, `PARTIALLY_PAID`, or `OVERDUE`, when the user views the job detail screen, then a "Collect Payment" button is visible below the invoice badge. The button is NOT shown when `invoice.status === 'PAID'`. (FR23)

2. **[Tapping Collect Payment opens payment modal]** Given the "Collect Payment" button is visible and the device is online, when the user taps it, then the app navigates to `/(modals)/payment` passing `invoiceId` and formatted total as route params. The modal shows the invoice amount prominently and a "Charge Card" button. (FR23)

3. **[Collect Payment requires internet connection]** Given the device has no internet connectivity (as reported by `NetworkContext.isConnected`), when the user taps "Collect Payment", then `Alert.alert('Collect Payment', 'An internet connection is required to process card payments.')` is shown and no API call is made. This is an intentional exception to offline-first — card authorization requires network.

4. **[API creates Stripe PaymentIntent and returns clientSecret]** Given the payment modal opens and the user taps "Charge Card", when `POST /api/v1/invoices/:id/payment-intent` is called (authenticated), then the API calls `stripe.paymentIntents.create({ amount: invoice.total, currency: 'usd', ... })` and returns `{ clientSecret, paymentIntentId, amount, merchantDisplayName }`. No card data is involved at this point — the client secret is safe to send to the mobile app. (FR23, NFR8)

5. **[Stripe Payment Sheet handles card entry]** Given the client secret is received, when `stripe.initPaymentSheet({ paymentIntentClientSecret, merchantDisplayName })` and `stripe.presentPaymentSheet()` are called, then Stripe's native bottom sheet opens where the customer enters card details — Visa, Mastercard, American Express, and Discover accepted. Card data is handled entirely by Stripe; it never passes through our code or servers. (FR23, NFR8, NFR20)

6. **[User can cancel payment sheet]** Given the Stripe Payment Sheet is open, when the user dismisses it (taps outside or presses back), then the sheet closes, no payment is recorded, no error is shown, and the user returns to the payment modal in its initial state.

7. **[Successful payment recorded via API]** Given Stripe's Payment Sheet confirms the payment (`presentPaymentSheet()` returns no error), when the app calls `POST /api/v1/invoices/:id/record-onsite-payment` with `{ paymentIntentId }`, then the API: (a) retrieves the PaymentIntent from Stripe via `stripe.paymentIntents.retrieve(paymentIntentId)` and verifies `status === 'succeeded'`; (b) creates a `Payment` row with `paymentMethod = 'CARD_ON_SITE'`, `status = 'SUCCEEDED'`, `amount = invoice.total` (integer cents), `stripePaymentId = paymentIntentId`; (c) updates the invoice `amountPaid = invoice.total`, `status = 'PAID'`, `paidAt = now` — all in a single `$transaction`; (d) returns the created payment and updated invoice data. (FR23, NFR8)

8. **[Idempotency: duplicate record-onsite-payment call is safe]** Given a `Payment` row with `stripePaymentId = paymentIntentId` already exists, when `POST /api/v1/invoices/:id/record-onsite-payment` is called again (e.g., network retry), then the API returns HTTP 200 with `{ alreadyProcessed: true }` without creating a duplicate Payment row or modifying the invoice. (architecture rule)

9. **[WatermelonDB updated immediately after payment recorded]** Given the API returns successfully from `record-onsite-payment`, when the mobile writes to WatermelonDB, then the `invoices` record for this job is updated: `status = 'PAID'`, `amountPaid = invoice.total`, `paidAt = (ms timestamp)`; AND a new `payments` record is created using the server-returned `paymentId` as `_raw.id`. The job detail screen's invoice badge immediately reflects `· PAID`. (architecture rule)

10. **[Push notification sent on successful on-site payment]** Given a payment is recorded via `record-onsite-payment`, when the API processes the success, then a push notification "Payment Received — $X.XX" is sent to the account owner's registered push token (same pattern as story 4.2 webhook). Notification failure must NOT cause the API endpoint to fail — log error and continue. (FR26, FR47)

11. **[SMS payment confirmation sent to customer]** Given a payment is recorded and the invoice's linked customer has a phone number, when the API records the payment, then an SMS is sent via Twilio: `"{businessName} received your payment of $X.XX for {invoiceLabel}. Thank you!"`. SMS failure must NOT cause the endpoint to fail. (FR48)

12. **[Payment failure shows user-friendly message]** Given Stripe's `presentPaymentSheet()` returns an error with a code other than `'Canceled'`, when the error is received, then `Alert.alert('Payment Failed', error.message)` is shown (Stripe's error messages for failed cards are already user-friendly — use them directly). The user can tap "Charge Card" again to retry. Raw Stripe error codes are never shown. (FR23)

13. **[Payment modal shows success confirmation after payment]** Given the `record-onsite-payment` API call succeeds and WatermelonDB is updated, when the payment flow completes, then the modal transitions to a success state showing "Payment Received — $X.XX ✓" with a green background. The user can tap "Done" to dismiss the modal. No automatic dismissal — the tradesperson needs to see the confirmation.

14. **[Money stored as integer cents throughout]** All monetary values — `PaymentIntent.amount`, `Payment.amount`, `Invoice.amountPaid` — are integer cents in storage and API. The Stripe `amount` parameter is already integer cents. Display formatting (`$X.XX`) is applied only in the UI. (architecture rule, NFR8)

## Tasks / Subtasks

### Task 1: Install `@stripe/stripe-react-native` (AC: #4, #5)

- [ ] 1.1: In `apps/mobile/`, run `npx expo install @stripe/stripe-react-native`
- [ ] 1.2: Verify `@stripe/stripe-react-native` appears in `apps/mobile/package.json` dependencies
- [ ] 1.3: Add to `apps/mobile/.env.example`:
  ```
  EXPO_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
  ```

### Task 2: Add `StripeProvider` to Root Layout (AC: #5)

- [ ] 2.1: In `apps/mobile/app/_layout.tsx`, add import at the top:
  ```typescript
  import { StripeProvider } from '@stripe/stripe-react-native';
  ```
- [ ] 2.2: Wrap the existing `<AuthProvider>` tree with `<StripeProvider>`:
  ```typescript
  export default function RootLayout() {
    return (
      <StripeProvider publishableKey={process.env.EXPO_PUBLIC_STRIPE_PUBLISHABLE_KEY ?? ''}>
        <AuthProvider>
          <DatabaseProvider>
            <AuthGate />
          </DatabaseProvider>
        </AuthProvider>
      </StripeProvider>
    );
  }
  ```
  Note: `process.env.EXPO_PUBLIC_STRIPE_PUBLISHABLE_KEY` is available at runtime in Expo managed workflow — all `EXPO_PUBLIC_` prefixed env vars are bundled automatically.

### Task 3: Register `(modals)/payment` Route in `_layout.tsx` (AC: #2)

- [ ] 3.1: In `apps/mobile/app/_layout.tsx`, inside `AuthGate`'s authenticated `<Stack>`, add the payment modal Screen after the existing `create-quote` modal Screen:
  ```typescript
  <Stack.Screen
    name="(modals)/payment"
    options={{ presentation: 'modal', headerShown: false }}
  />
  ```
  The complete authenticated Stack should now show both modals:
  ```typescript
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" />
      <Stack.Screen
        name="(modals)/create-quote"
        options={{ presentation: 'modal', headerShown: false }}
      />
      <Stack.Screen
        name="(modals)/payment"
        options={{ presentation: 'modal', headerShown: false }}
      />
    </Stack>
  );
  ```

### Task 4: API — Add `createPaymentIntent` to `payment-service.ts` (AC: #4, #14)

- [ ] 4.1: In `apps/api/src/services/payment-service.ts`, add after `handleCheckoutCompleted`:
  ```typescript
  export async function createPaymentIntent(
    invoiceId: string,
    accountId: string,
  ): Promise<{
    clientSecret: string;
    paymentIntentId: string;
    amount: number;
    merchantDisplayName: string;
  }> {
    const invoice = await prisma.invoice.findFirst({
      where: { id: invoiceId, accountId },
      include: {
        account: { select: { businessName: true } },
      },
    });
    if (!invoice) throw new AppError('INVOICE_NOT_FOUND', 'Invoice not found', 404);
    if (invoice.status === 'PAID') {
      throw new AppError('INVOICE_ALREADY_PAID', 'Invoice has already been paid in full', 422);
    }
    if (invoice.total <= 0) {
      throw new AppError('INVOICE_ZERO_AMOUNT', 'Invoice total must be greater than zero', 422);
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount: invoice.total, // integer cents — Stripe uses smallest currency unit
      currency: 'usd',
      payment_method_types: ['card'],
      metadata: {
        invoiceId: invoice.id,
        accountId,
      },
    });

    if (!paymentIntent.client_secret) {
      throw new AppError('STRIPE_PI_ERROR', 'Failed to create payment intent', 502);
    }

    return {
      clientSecret: paymentIntent.client_secret,
      paymentIntentId: paymentIntent.id,
      amount: paymentIntent.amount,
      merchantDisplayName: invoice.account.businessName ?? 'Your service provider',
    };
  }
  ```

### Task 5: API — Add `recordOnsitePayment` to `payment-service.ts` (AC: #7, #8, #14)

- [ ] 5.1: In `apps/api/src/services/payment-service.ts`, add after `createPaymentIntent`:
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
    // Idempotency guard — prevent duplicate records
    const existing = await prisma.payment.findFirst({
      where: { stripePaymentId: paymentIntentId },
    });
    if (existing) return { alreadyProcessed: true };

    // Verify PaymentIntent succeeded with Stripe (server-side check — prevents fraud)
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

    const paidAt = new Date();
    const [payment] = await prisma.$transaction([
      prisma.payment.create({
        data: {
          accountId,
          invoiceId,
          amount: invoice.total,
          stripePaymentId: paymentIntentId,
          paymentMethod: 'CARD_ON_SITE',
          status: 'SUCCEEDED',
        },
      }),
      prisma.invoice.update({
        where: { id: invoiceId },
        data: {
          status: 'PAID',
          amountPaid: invoice.total,
          paidAt,
        },
      }),
    ]);

    return {
      alreadyProcessed: false,
      payment: { id: payment.id, amount: payment.amount },
      invoice: {
        status: 'PAID',
        amountPaid: invoice.total,
        paidAt,
        invoiceNumber: invoice.invoiceNumber,
        accountId,
      },
      customer: { phone: invoice.customer.phone, name: invoice.customer.name },
    };
  }
  ```

### Task 6: API — Add `payment-intent` Endpoint to `invoices.ts` (AC: #4)

- [ ] 6.1: In `apps/api/src/routes/invoices.ts`, add import at the top:
  ```typescript
  import { createPaymentIntent, recordOnsitePayment } from '../services/payment-service.js';
  ```
- [ ] 6.2: Add `POST /:id/payment-intent` on `invoicesRouter` (already uses `authMiddleware`):
  ```typescript
  invoicesRouter.post('/:id/payment-intent', async (req, res, next) => {
    try {
      const { id } = req.params;
      const accountId = req.user!.accountId;

      const result = await createPaymentIntent(id, accountId);
      res.status(200).json({ data: result });
    } catch (err) {
      next(err);
    }
  });
  ```

### Task 7: API — Add `record-onsite-payment` Endpoint to `invoices.ts` (AC: #7, #8, #10, #11)

- [ ] 7.1: In `apps/api/src/routes/invoices.ts`, add additional imports:
  ```typescript
  import { sendPushNotification } from '../services/notification-service.js';
  ```
  Note: `sendSms` and `prisma` are already imported from earlier tasks in this file.
- [ ] 7.2: Add `POST /:id/record-onsite-payment` on `invoicesRouter`:
  ```typescript
  invoicesRouter.post('/:id/record-onsite-payment', async (req, res, next) => {
    try {
      const { id } = req.params;
      const accountId = req.user!.accountId;
      const { paymentIntentId } = req.body as { paymentIntentId: string };

      if (!paymentIntentId) {
        res.status(422).json({
          error: { code: 'MISSING_PAYMENT_INTENT_ID', message: 'paymentIntentId is required', status: 422 },
        });
        return;
      }

      const result = await recordOnsitePayment(id, accountId, paymentIntentId);

      if (!result.alreadyProcessed && result.payment && result.invoice && result.customer) {
        const { payment, invoice, customer } = result;
        const formattedAmount = `$${(payment.amount / 100).toFixed(2)}`;
        const invoiceLabel = invoice.invoiceNumber ?? 'invoice';

        // Push notification to account owner (fire and forget)
        try {
          const owner = await prisma.teamMember.findFirst({
            where: { accountId: invoice.accountId, role: 'OWNER' },
            select: { pushToken: true },
          });
          await sendPushNotification(
            owner?.pushToken,
            'Payment Received',
            `${formattedAmount} received for ${invoiceLabel}`,
          );
        } catch (notifErr) {
          console.error('[record-onsite-payment] push notification error:', notifErr);
        }

        // SMS confirmation to customer (fire and forget)
        try {
          const account = await prisma.account.findUnique({
            where: { id: invoice.accountId },
            select: { businessName: true },
          });
          const businessName = account?.businessName ?? 'Your service provider';
          await sendSms(
            customer.phone,
            `${businessName} received your payment of ${formattedAmount} for ${invoiceLabel}. Thank you!`,
          );
        } catch (smsErr) {
          console.error('[record-onsite-payment] SMS error:', smsErr);
        }
      }

      res.status(200).json({
        data: {
          alreadyProcessed: result.alreadyProcessed,
          paymentId: result.payment?.id ?? null,
          amount: result.payment?.amount ?? null,
          invoiceStatus: result.invoice?.status ?? null,
          invoiceAmountPaid: result.invoice?.amountPaid ?? null,
          invoicePaidAt: result.invoice?.paidAt?.toISOString() ?? null,
        },
      });
    } catch (err) {
      next(err);
    }
  });
  ```

### Task 8: Mobile — Add `useCollectPayment` Hook to `use-invoices.ts` (AC: #3, #5, #6, #7, #9, #12)

- [ ] 8.1: In `apps/mobile/src/hooks/use-invoices.ts`, add imports at the top:
  ```typescript
  import { useStripe } from '@stripe/stripe-react-native';
  import Payment from '../db/models/payment';
  ```
- [ ] 8.2: Add the `CollectPaymentApiResult` interface and `useCollectPayment` export at the bottom of the file:
  ```typescript
  interface PaymentIntentResult {
    clientSecret: string;
    paymentIntentId: string;
    amount: number;
    merchantDisplayName: string;
  }

  interface RecordOnsiteResult {
    alreadyProcessed: boolean;
    paymentId: string | null;
    amount: number | null;
    invoiceStatus: string | null;
    invoiceAmountPaid: number | null;
    invoicePaidAt: string | null;
  }

  export function useCollectPayment() {
    const [isLoading, setIsLoading] = useState(false);
    const { isConnected } = useContext(NetworkContext);
    const { initPaymentSheet, presentPaymentSheet } = useStripe();

    const collectPayment = useCallback(
      async (invoiceId: string): Promise<{ success: boolean; amount: number }> => {
        if (!isConnected) {
          throw new Error('An internet connection is required to process card payments.');
        }

        setIsLoading(true);
        try {
          // Step 1: Create PaymentIntent on server
          const piResult = await apiClient.post<PaymentIntentResult>(
            `/api/v1/invoices/${invoiceId}/payment-intent`,
          );

          // Step 2: Initialize Stripe Payment Sheet
          const { error: initError } = await initPaymentSheet({
            paymentIntentClientSecret: piResult.clientSecret,
            merchantDisplayName: piResult.merchantDisplayName,
            style: 'automatic',
          });
          if (initError) {
            throw new Error(initError.message);
          }

          // Step 3: Present Payment Sheet (Stripe handles card entry — PCI compliant)
          const { error: presentError } = await presentPaymentSheet();
          if (presentError) {
            if (presentError.code === 'Canceled') {
              // User dismissed — not an error
              return { success: false, amount: 0 };
            }
            throw new Error(presentError.message);
          }

          // Step 4: Record payment on server (verifies with Stripe server-side)
          const recordResult = await apiClient.post<RecordOnsiteResult>(
            `/api/v1/invoices/${invoiceId}/record-onsite-payment`,
            { paymentIntentId: piResult.paymentIntentId },
          );

          // Step 5: Write to WatermelonDB
          if (!recordResult.alreadyProcessed && recordResult.paymentId && recordResult.invoiceStatus) {
            await database.write(async () => {
              // Update invoice record
              const invoices = await database
                .get<Invoice>('invoices')
                .query(Q.where('id', invoiceId))
                .fetch();
              if (invoices[0]) {
                await invoices[0].update((record) => {
                  record.status = recordResult.invoiceStatus!;
                  record.amountPaid = recordResult.invoiceAmountPaid ?? invoices[0].amountPaid;
                  if (recordResult.invoicePaidAt) {
                    record.paidAt = Date.parse(recordResult.invoicePaidAt);
                  }
                });
              }

              // Create payment record using server UUID
              const accountId = invoices[0]?.accountId ?? '';
              await database.get<Payment>('payments').create((record) => {
                record._raw.id = recordResult.paymentId!;
                record.accountId = accountId;
                record.invoiceId = invoiceId;
                record.amount = recordResult.amount ?? piResult.amount;
                record.paymentMethod = 'CARD_ON_SITE';
                record.status = 'SUCCEEDED';
              });
            });
          }

          return { success: true, amount: recordResult.amount ?? piResult.amount };
        } finally {
          setIsLoading(false);
        }
      },
      [isConnected, initPaymentSheet, presentPaymentSheet],
    );

    return { collectPayment, isLoading };
  }
  ```

### Task 9: Mobile — Create Payment Modal (`(modals)/payment.tsx`) (AC: #2, #3, #6, #12, #13)

- [ ] 9.1: Create `apps/mobile/app/(modals)/payment.tsx`:
  ```typescript
  import React, { useState, useCallback } from 'react';
  import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    ActivityIndicator,
    Alert,
  } from 'react-native';
  import { SafeAreaView } from 'react-native-safe-area-context';
  import { useLocalSearchParams, router } from 'expo-router';
  import { useContext } from 'react';
  import { NetworkContext } from '../../src/contexts/network-context';
  import { useCollectPayment } from '../../src/hooks/use-invoices';

  type PaymentState = 'idle' | 'processing' | 'success';

  export default function PaymentModal() {
    const { invoiceId, invoiceTotal } = useLocalSearchParams<{
      invoiceId: string;
      invoiceTotal: string;
    }>();
    const [state, setState] = useState<PaymentState>('idle');
    const [paidAmount, setPaidAmount] = useState<number>(0);
    const { isConnected } = useContext(NetworkContext);
    const { collectPayment } = useCollectPayment();

    const totalCents = parseInt(invoiceTotal ?? '0', 10);
    const formattedTotal = `$${(totalCents / 100).toFixed(2)}`;

    const handleChargeCard = useCallback(async () => {
      if (!invoiceId) return;

      if (!isConnected) {
        Alert.alert('Collect Payment', 'An internet connection is required to process card payments.');
        return;
      }

      setState('processing');
      try {
        const result = await collectPayment(invoiceId);
        if (result.success) {
          setPaidAmount(result.amount);
          setState('success');
        } else {
          // User cancelled — back to idle
          setState('idle');
        }
      } catch (err) {
        setState('idle');
        const message = err instanceof Error ? err.message : 'Payment failed. Please try again.';
        Alert.alert('Payment Failed', message);
      }
    }, [invoiceId, isConnected, collectPayment]);

    if (state === 'success') {
      const paidFormatted = `$${(paidAmount / 100).toFixed(2)}`;
      return (
        <SafeAreaView style={styles.container}>
          <View style={styles.successContainer}>
            <Text style={styles.successIcon}>✓</Text>
            <Text style={styles.successTitle}>Payment Received</Text>
            <Text style={styles.successAmount}>{paidFormatted}</Text>
            <Text style={styles.successSubtitle}>Payment processed successfully.</Text>
            <TouchableOpacity
              style={styles.doneButton}
              onPress={() => router.back()}
            >
              <Text style={styles.doneButtonText}>Done</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      );
    }

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Collect Payment</Text>
          <TouchableOpacity onPress={() => router.back()} disabled={state === 'processing'}>
            <Text style={styles.cancelText}>Cancel</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.amountSection}>
          <Text style={styles.amountLabel}>Amount Due</Text>
          <Text style={styles.amountValue}>{formattedTotal}</Text>
        </View>

        <View style={styles.infoSection}>
          <Text style={styles.infoText}>
            The customer will be prompted to enter their card details on the next screen.
          </Text>
          <Text style={styles.stripeNote}>Secured by Stripe — card details never stored.</Text>
        </View>

        <View style={styles.buttonSection}>
          <TouchableOpacity
            style={[styles.chargeButton, state === 'processing' && styles.chargeButtonDisabled]}
            onPress={handleChargeCard}
            disabled={state === 'processing'}
          >
            {state === 'processing' ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Text style={styles.chargeButtonText}>Charge Card</Text>
            )}
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 16,
      paddingVertical: 14,
      borderBottomWidth: 1,
      borderBottomColor: '#e5e7eb',
    },
    headerTitle: {
      fontSize: 18,
      fontWeight: '700',
      color: '#111',
    },
    cancelText: {
      fontSize: 16,
      color: '#6b7280',
    },
    amountSection: {
      alignItems: 'center',
      paddingVertical: 48,
    },
    amountLabel: {
      fontSize: 14,
      color: '#6b7280',
      fontWeight: '500',
      marginBottom: 8,
      textTransform: 'uppercase',
      letterSpacing: 0.5,
    },
    amountValue: {
      fontSize: 48,
      fontWeight: '700',
      color: '#111',
    },
    infoSection: {
      paddingHorizontal: 24,
      marginBottom: 24,
    },
    infoText: {
      fontSize: 15,
      color: '#374151',
      textAlign: 'center',
      marginBottom: 8,
    },
    stripeNote: {
      fontSize: 13,
      color: '#9ca3af',
      textAlign: 'center',
    },
    buttonSection: {
      paddingHorizontal: 16,
    },
    chargeButton: {
      backgroundColor: '#16A34A',
      paddingVertical: 16,
      borderRadius: 10,
      alignItems: 'center',
    },
    chargeButtonDisabled: {
      opacity: 0.6,
    },
    chargeButtonText: {
      color: '#fff',
      fontSize: 18,
      fontWeight: '700',
    },
    successContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 24,
    },
    successIcon: {
      fontSize: 72,
      color: '#16A34A',
      marginBottom: 16,
    },
    successTitle: {
      fontSize: 28,
      fontWeight: '700',
      color: '#111',
      marginBottom: 8,
    },
    successAmount: {
      fontSize: 40,
      fontWeight: '700',
      color: '#16A34A',
      marginBottom: 12,
    },
    successSubtitle: {
      fontSize: 15,
      color: '#6b7280',
      textAlign: 'center',
      marginBottom: 40,
    },
    doneButton: {
      backgroundColor: '#16A34A',
      paddingVertical: 14,
      paddingHorizontal: 48,
      borderRadius: 10,
    },
    doneButtonText: {
      color: '#fff',
      fontSize: 18,
      fontWeight: '700',
    },
  });
  ```

### Task 10: Mobile — Add "Collect Payment" Button to Job Detail Screen (AC: #1, #2, #3)

- [ ] 10.1: In `apps/mobile/app/(tabs)/jobs/[id].tsx`, update the import from `use-invoices`:
  ```typescript
  import { useJobInvoice, useGenerateInvoice, useSendInvoice, useCollectPayment } from '../../../src/hooks/use-invoices';
  ```
  Also add `router` to the expo-router import:
  ```typescript
  import { useLocalSearchParams, Stack, router } from 'expo-router';
  ```
- [ ] 10.2: Inside `JobDetailScreen`, add after the existing `useSendInvoice` hook:
  ```typescript
  const { isConnected } = useContext(NetworkContext);
  ```
  Add `NetworkContext` to the contexts import at the top:
  ```typescript
  import { NetworkContext } from '../../../src/contexts/network-context';
  ```
  And add the `useContext` import to the React import if not present.
- [ ] 10.3: Add a `handleCollectPayment` callback below `handleSendInvoice`:
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
      },
    });
  }, [invoice, isConnected]);
  ```
- [ ] 10.4: In `renderActionButton()`, update the invoice status block to add the "Collect Payment" button. The updated logic:
  ```typescript
  if (job.status === 'COMPLETE' || job.status === 'INVOICED') {
    if (invoice) {
      const isPaid = invoice.status === 'PAID';
      const statusLabel =
        invoice.status === 'PAID' ? ' · PAID' :
        invoice.status === 'SENT' ? ' · SENT' :
        invoice.status === 'VIEWED' ? ' · VIEWED' :
        invoice.status === 'PARTIALLY_PAID' ? ' · PARTIAL' :
        invoice.status === 'OVERDUE' ? ' · OVERDUE' : '';

      return (
        <View>
          {invoice.status === 'DRAFT' ? (
            <TouchableOpacity
              style={[styles.actionButton, styles.sendInvoiceButton]}
              onPress={handleSendInvoice}
              disabled={isSending}
            >
              {isSending
                ? <ActivityIndicator color="#fff" />
                : <Text style={styles.sendInvoiceButtonText}>Send Invoice</Text>}
            </TouchableOpacity>
          ) : null}
          <View style={[styles.invoicedBadge, isPaid && styles.invoicedBadgePaid]}>
            <Text style={[styles.invoicedText, isPaid && styles.invoicedTextPaid]}>
              {invoice.invoiceNumber ?? 'Invoice'} — ${(invoice.total / 100).toFixed(2)}{statusLabel}
            </Text>
          </View>
          {!isPaid ? (
            <TouchableOpacity
              style={[styles.actionButton, styles.collectPaymentButton]}
              onPress={handleCollectPayment}
            >
              <Text style={styles.collectPaymentButtonText}>Collect Payment</Text>
            </TouchableOpacity>
          ) : null}
        </View>
      );
    }
    // No invoice yet — show Generate Invoice button
    return (
      <TouchableOpacity
        style={[styles.actionButton, styles.invoiceButton]}
        onPress={handleGenerateInvoice}
        disabled={isGenerating}
      >
        {isGenerating
          ? <ActivityIndicator color="#fff" />
          : <Text style={styles.invoiceButtonText}>Generate Invoice</Text>}
      </TouchableOpacity>
    );
  }
  ```
- [ ] 10.5: Add styles to `StyleSheet.create`:
  ```typescript
  collectPaymentButton: {
    backgroundColor: '#16A34A',
    marginTop: 8,
  },
  collectPaymentButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  invoicedBadgePaid: {
    backgroundColor: '#DCFCE7',
  },
  invoicedTextPaid: {
    color: '#15803D',
  },
  ```

### Task 11: Tests — `payment-service.ts` Unit Tests for On-Site Functions (AC: #4, #7, #8, #14)

- [ ] 11.1: In `apps/api/src/services/payment-service.test.ts`, add the new test blocks at the end of the existing file
- [ ] 11.2: Extend the `stripe` mock to include `paymentIntents`:
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
      paymentIntents: {
        create: jest.fn().mockResolvedValue({
          id: 'pi_test_onsite_123',
          client_secret: 'pi_test_onsite_123_secret_abc',
          amount: 150000,
          status: 'requires_payment_method',
        }),
        retrieve: jest.fn().mockResolvedValue({
          id: 'pi_test_onsite_123',
          status: 'succeeded',
          amount: 150000,
        }),
      },
      webhooks: {
        constructEvent: jest.fn(),
      },
    },
  }));
  ```
- [ ] 11.3: Test `createPaymentIntent`: invoice found → `stripe.paymentIntents.create` called with `amount = invoice.total`, `currency: 'usd'`, `metadata.invoiceId`; returns `{ clientSecret, paymentIntentId, amount, merchantDisplayName }`
- [ ] 11.4: Test `createPaymentIntent`: invoice not found → throws `AppError` with code `INVOICE_NOT_FOUND`, status 404
- [ ] 11.5: Test `createPaymentIntent`: invoice status is `PAID` → throws `AppError` with code `INVOICE_ALREADY_PAID`, status 422
- [ ] 11.6: Test `createPaymentIntent`: invoice total is 0 → throws `AppError` with code `INVOICE_ZERO_AMOUNT`, status 422
- [ ] 11.7: Test `recordOnsitePayment`: no existing payment, PI status is `succeeded` → creates Payment with `CARD_ON_SITE`, updates invoice to `PAID`, returns `alreadyProcessed: false` with payment id and invoice data
- [ ] 11.8: Test `recordOnsitePayment`: payment with same `stripePaymentId` already exists → returns `{ alreadyProcessed: true }` immediately; `$transaction` NOT called
- [ ] 11.9: Test `recordOnsitePayment`: PI status is NOT `succeeded` (e.g., `requires_payment_method`) → throws `AppError` with code `PAYMENT_NOT_SUCCEEDED`, status 422

### Task 12: Tests — Integration Tests for New Invoice Routes (AC: #4, #7, #8)

- [ ] 12.1: Create `apps/api/tests/integration/invoice-payment.test.ts`
- [ ] 12.2: Mock `../../src/services/payment-service.js`, `../../src/services/notification-service.js`, `../../src/services/sms-service.js`, `../../src/config/prisma.js`, `../../src/config/stripe.js`
- [ ] 12.3: Test `POST /api/v1/invoices/:id/payment-intent`: success → 200 with `{ data: { clientSecret, paymentIntentId, amount, merchantDisplayName } }`
- [ ] 12.4: Test `POST /api/v1/invoices/:id/payment-intent`: no auth header → 401
- [ ] 12.5: Test `POST /api/v1/invoices/:id/payment-intent`: `createPaymentIntent` throws `INVOICE_NOT_FOUND` → 404
- [ ] 12.6: Test `POST /api/v1/invoices/:id/payment-intent`: `createPaymentIntent` throws `INVOICE_ALREADY_PAID` → 422
- [ ] 12.7: Test `POST /api/v1/invoices/:id/record-onsite-payment`: success (`alreadyProcessed: false`) → push notification called, SMS called, 200 with payment and invoice data
- [ ] 12.8: Test `POST /api/v1/invoices/:id/record-onsite-payment`: `alreadyProcessed: true` → push/SMS NOT called, 200 with `{ alreadyProcessed: true }`
- [ ] 12.9: Test `POST /api/v1/invoices/:id/record-onsite-payment`: missing `paymentIntentId` in body → 422 with code `MISSING_PAYMENT_INTENT_ID`
- [ ] 12.10: Test `POST /api/v1/invoices/:id/record-onsite-payment`: `recordOnsitePayment` throws `PAYMENT_NOT_SUCCEEDED` → 422
- [ ] 12.11: Test `POST /api/v1/invoices/:id/record-onsite-payment`: no auth → 401

## Dev Notes

### Stripe Payment Sheet vs Custom CardField

The architecture mentions "Stripe Terminal (tap-to-pay on phone) or manual card entry via Stripe SDK." This story implements **manual card entry via Stripe's native Payment Sheet** (`initPaymentSheet` + `presentPaymentSheet`), which is the simplest PCI-compliant approach for MVP:

- Stripe Terminal requires physical Stripe hardware readers or the separate "Tap to Pay on iPhone/Android" entitlement — substantial setup beyond MVP scope.
- The Payment Sheet is Stripe's hosted UI that renders in a native bottom sheet — card data never enters our JavaScript code.
- `NFR8` (no card data stored on-device or servers) is fully satisfied: Stripe's SDK handles tokenization entirely.

### `@stripe/stripe-react-native` Installation and Compatibility

The package requires Expo SDK 52+ and React Native 0.76+. Use `npx expo install @stripe/stripe-react-native` rather than `npm install` to get the Expo-compatible version and ensure peer dependency resolution. The package is in Expo's supported libraries list.

Key imports after install:
```typescript
import { StripeProvider, useStripe } from '@stripe/stripe-react-native';
```

`StripeProvider` must be a top-level wrapper (above all screens). `useStripe()` only works inside the `StripeProvider` tree.

### `EXPO_PUBLIC_STRIPE_PUBLISHABLE_KEY` — Mobile Environment Variable

Expo SDK 52 automatically inlines `EXPO_PUBLIC_*` environment variables at build time. No additional config in `app.json` is needed. The variable is available as `process.env.EXPO_PUBLIC_STRIPE_PUBLISHABLE_KEY` in any TypeScript/JavaScript file compiled by Metro.

Test key format: `pk_test_...`
Live key format: `pk_live_...`

### PaymentIntent vs Checkout Session — Different Stripe Products

Story 4.2 used `stripe.checkout.sessions.create` (Stripe Checkout — a hosted web page). Story 4.3 uses `stripe.paymentIntents.create` — a lower-level construct that the mobile SDK confirms directly via the `clientSecret`. Key differences:

- Checkout Session URL → redirect customer to browser page
- PaymentIntent `client_secret` → confirm in-app via `presentPaymentSheet()` using the secret

**Never send the `client_secret` to an untrusted client without authentication.** The `POST /api/v1/invoices/:id/payment-intent` endpoint is protected by `authMiddleware` — only authenticated tradesperson accounts can create PaymentIntents.

### Server-Side Verification in `recordOnsitePayment`

After `presentPaymentSheet()` succeeds on mobile, the app calls `POST /api/v1/invoices/:id/record-onsite-payment`. The API **must** verify the PaymentIntent status with Stripe (`stripe.paymentIntents.retrieve`) before recording the payment — this prevents a malicious actor from calling the endpoint with a random `paymentIntentId` to fraudulently mark an invoice as paid. Always verify `paymentIntent.status === 'succeeded'` server-side.

### `Canceled` Error Code in Payment Sheet

When the user dismisses Stripe's Payment Sheet without paying, `presentPaymentSheet()` returns `{ error: { code: 'Canceled', ... } }`. This is NOT a payment failure — it's a user-initiated cancellation. The hook returns `{ success: false, amount: 0 }` silently; no error is shown. The modal resets to `idle` state.

Other error codes (e.g., `Failed`, `Timeout`, `Unknown`) represent actual payment failures and should be shown to the user via `Alert.alert`.

### Idempotency Key for PaymentIntent

For production resilience, Stripe supports idempotency keys on `paymentIntents.create`. For MVP, this is not strictly required since the mobile always creates a new PI on each tap. If needed in the future, use the invoice ID + timestamp as the idempotency key.

### Push Notifications and SMS Are Fire-and-Forget

Same pattern as `payments/webhook` in story 4.2. Push and SMS dispatch is wrapped in individual `try/catch` blocks. Failures are logged but do NOT cause the `record-onsite-payment` endpoint to return a non-2xx response. The mobile must always receive a 200 confirming the payment was recorded.

### `_raw.id` for WatermelonDB Payment Record

When creating the payment record in WatermelonDB, use `record._raw.id = recordResult.paymentId` to preserve the server-assigned UUID. Same pattern used in `useGenerateInvoice` for invoices (story 4.1). Without this, WatermelonDB assigns a new UUID and sync creates a duplicate.

### No WatermelonDB Schema Bump Needed

The `payments` table (columns: `account_id`, `invoice_id`, `amount`, `stripe_payment_id`, `payment_method`, `status`) was added in story 4.2 at schema version 9. Story 4.3 adds no new tables or columns — do NOT bump the schema version or add a migration.

### `invoicesRouter` Already Has `authMiddleware`

`invoicesRouter.use(authMiddleware)` applies auth to all routes on the router. Both new endpoints (`/:id/payment-intent` and `/:id/record-onsite-payment`) are on `invoicesRouter`, so they are automatically protected. No per-route auth needed.

### Prisma `PaymentMethod.CARD_ON_SITE` Enum Value

The `PaymentMethod` Prisma enum was defined in story 4.2 as:
```prisma
enum PaymentMethod {
  CARD_ON_SITE
  CARD_VIA_LINK
}
```
Use the string value `'CARD_ON_SITE'` in `prisma.payment.create`. Prisma TypeScript types enforce this.

### `stripe.paymentIntents.create` `payment_method_types` Deprecation

In newer Stripe API versions (post-2023), `payment_method_types` should be replaced with `automatic_payment_methods`. However, since we're using Stripe API version `'2026-04-22.dahlia'` (set in `apps/api/src/config/stripe.ts`), check the actual Stripe Node SDK docs for the correct parameter. For MVP simplicity, `payment_method_types: ['card']` restricts to card-only which matches `NFR20`. If the SDK shows a deprecation warning, replace with:
```typescript
automatic_payment_methods: { enabled: true, allow_redirects: 'never' },
```

### Existing Test File for `payment-service.ts`

`apps/api/src/services/payment-service.test.ts` already exists from story 4.2. **Do not replace it** — append the new `describe` blocks for `createPaymentIntent` and `recordOnsitePayment` at the end of the existing file. The existing Stripe mock at the top of the file needs to be extended with `paymentIntents` (see Task 11.2).

### No `NetworkProvider` Import Needed in `[id].tsx`

`NetworkContext` is already available via its context import. The `NetworkProvider` was created in story 4.1 (noted in completion notes). `useContext(NetworkContext)` works directly. Just add the import: `import { NetworkContext } from '../../../src/contexts/network-context';`.

### Project Structure Notes

**Files to CREATE:**
```
apps/mobile/app/(modals)/payment.tsx
apps/api/tests/integration/invoice-payment.test.ts
```

**Files to MODIFY:**
```
apps/mobile/package.json                          (add @stripe/stripe-react-native)
apps/mobile/.env.example                          (add EXPO_PUBLIC_STRIPE_PUBLISHABLE_KEY)
apps/mobile/app/_layout.tsx                       (add StripeProvider, register payment modal route)
apps/mobile/src/hooks/use-invoices.ts             (add useCollectPayment export)
apps/mobile/app/(tabs)/jobs/[id].tsx              (add Collect Payment button, handleCollectPayment callback, styles)
apps/api/src/services/payment-service.ts          (add createPaymentIntent, recordOnsitePayment)
apps/api/src/services/payment-service.test.ts     (extend with new test blocks)
apps/api/src/routes/invoices.ts                   (add /:id/payment-intent and /:id/record-onsite-payment)
```

All paths relative to `mvps/field-service-management/src/` as the monorepo root.

### References

- [Source: planning/epics.md#Story 4.3] — All acceptance criteria, FR23, NFR8, NFR20
- [Source: planning/architecture.md#Infrastructure & Deployment] — "Stripe Terminal for on-site payments" and "manual card entry via Stripe SDK"; NFR8 card data never stored; NFR20 Visa/MC/Amex/Discover
- [Source: planning/architecture.md#API & Communication Patterns] — Architecture endpoint reference; `POST /api/v1/invoices` route ownership
- [Source: planning/architecture.md#Data Model] — `payments` table: id, accountId, invoiceId, amount, stripePaymentId, paymentMethod (CARD_ON_SITE|CARD_VIA_LINK), status
- [Source: planning/architecture.md#Enforcement Guidelines] — money as integer cents; UUIDs via `_raw.id`; offline-first exception noted for payment processing
- [Source: stories/4-2-invoice-sms-delivery-and-payment-links.md] — Payment model (Prisma + WatermelonDB v9 schema), `payment-service.ts` existing functions, `invoicesRouter` auth middleware, `paymentsRouter` webhook, push + SMS fire-and-forget pattern, Stripe API version `'2026-04-22.dahlia'`, `@unique stripePaymentId` constraint, idempotency guard pattern
- [Source: stories/4-1-invoice-generation-from-completed-jobs.md] — WatermelonDB `_raw.id` pattern for server UUIDs, `apiClient.post<T>(path, body?)` returns unwrapped `body.data`, `useContext(NetworkContext)` for connectivity, `$transaction` atomicity
- [Source: apps/api/src/config/stripe.ts] — Stripe instance with API version `'2026-04-22.dahlia'`
- [Source: apps/api/src/services/payment-service.ts] — existing `createCheckoutSession`, `handleCheckoutCompleted` patterns to replicate
- [Source: apps/api/src/routes/invoices.ts] — `invoicesRouter` with `authMiddleware`, existing route patterns, `req.user!.accountId` access
- [Source: apps/mobile/src/hooks/use-invoices.ts] — existing hook patterns: `apiClient.post<T>`, `database.write`, WatermelonDB query + update patterns
- [Source: apps/mobile/src/services/api-client.ts] — `apiClient.post<T>(path, body?)` — supports optional body, returns `body.data`, throws `ApiError` on non-2xx
- [Source: apps/mobile/app/_layout.tsx] — current layout structure showing where StripeProvider and Stack.Screen additions go
- [Source: apps/mobile/app/(tabs)/jobs/[id].tsx] — `renderActionButton()` structure, existing styles, `Alert` usage, `useContext`, `router.push` navigation pattern
- [Source: apps/mobile/package.json] — current dependencies (no Stripe SDK present); Expo SDK 52, RN 0.76

## Dev Agent Record

### Agent Model Used

{{agent_model_name_version}}

### Debug Log References

### Completion Notes List

### File List
