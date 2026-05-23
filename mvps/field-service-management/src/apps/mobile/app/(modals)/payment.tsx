import React, { useState, useCallback, useContext } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  Alert,
  TextInput,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLocalSearchParams, router } from 'expo-router';
import { NetworkContext } from '../../src/contexts/network-context';
import { useCollectPayment } from '../../src/hooks/use-invoices';

type PaymentState = 'idle' | 'processing' | 'success';

export default function PaymentModal() {
  const { invoiceId, invoiceTotal, invoiceAmountPaid } = useLocalSearchParams<{
    invoiceId: string;
    invoiceTotal: string;
    invoiceAmountPaid: string;
  }>();
  const [state, setState] = useState<PaymentState>('idle');
  const [paidAmount, setPaidAmount] = useState<number>(0);
  const { isConnected } = useContext(NetworkContext);
  const { collectPayment } = useCollectPayment();

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

  const handleChargeCard = useCallback(async () => {
    if (!invoiceId) return;

    if (!isConnected) {
      Alert.alert('Collect Payment', 'An internet connection is required to process card payments.');
      return;
    }

    setState('processing');
    try {
      const result = await collectPayment(invoiceId, customAmountCents);
      if (result.success) {
        setPaidAmount(result.amount);
        setState('success');
      } else {
        setState('idle');
      }
    } catch (err) {
      setState('idle');
      const message = err instanceof Error ? err.message : 'Payment failed. Please try again.';
      Alert.alert('Payment Failed', message);
    }
  }, [invoiceId, isConnected, collectPayment, customAmountCents]);

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

      <View style={styles.infoSection}>
        <Text style={styles.infoText}>
          The customer will be prompted to enter their card details on the next screen.
        </Text>
        <Text style={styles.stripeNote}>Secured by Stripe — card details never stored.</Text>
      </View>

      <View style={styles.buttonSection}>
        <TouchableOpacity
          style={[
            styles.chargeButton,
            (state === 'processing' || !isAmountValid) && styles.chargeButtonDisabled,
          ]}
          onPress={handleChargeCard}
          disabled={state === 'processing' || !isAmountValid}
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
    paddingVertical: 32,
    paddingHorizontal: 24,
  },
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
