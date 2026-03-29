import React, { useState, useEffect, useCallback } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { centsToDollars } from '@field-service/shared';
import { useQuote, useQuoteLineItems } from '../../../../src/hooks/use-quotes';
import { useDatabase } from '../../../../src/contexts/database-context';
import Customer from '../../../../src/db/models/customer';

const STATUS_COLORS: Record<string, { bg: string; text: string }> = {
  DRAFT: { bg: '#f3f4f6', text: '#6b7280' },
  SENT: { bg: '#dbeafe', text: '#2563eb' },
  VIEWED: { bg: '#fef9c3', text: '#ca8a04' },
  APPROVED: { bg: '#dcfce7', text: '#16a34a' },
  DECLINED: { bg: '#fee2e2', text: '#dc2626' },
  EXPIRED: { bg: '#f3f4f6', text: '#9ca3af' },
};

export default function QuoteDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const database = useDatabase();
  const { quote, isLoading: quoteLoading } = useQuote(id ?? '');
  const { lineItems, isLoading: itemsLoading } = useQuoteLineItems(id ?? '');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');

  useEffect(() => {
    if (!quote?.customerId) return;

    const subscription = database
      .get<Customer>('customers')
      .findAndObserve(quote.customerId)
      .subscribe({
        next: (customer) => {
          setCustomerName(customer.name);
          setCustomerPhone(customer.phone);
        },
        error: () => {
          setCustomerName('Unknown Customer');
          setCustomerPhone('');
        },
      });

    return () => subscription.unsubscribe();
  }, [database, quote?.customerId]);

  const handleDuplicate = useCallback(() => {
    if (!quote) return;
    router.push({
      pathname: '/(modals)/create-quote',
      params: { duplicateFromId: quote.id },
    });
  }, [router, quote]);

  if (quoteLoading || itemsLoading || !quote) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#2563eb" />
      </View>
    );
  }

  const statusStyle = STATUS_COLORS[quote.status] ?? STATUS_COLORS.DRAFT;
  const createdDate = quote.createdAt
    ? new Date(quote.createdAt).toLocaleDateString()
    : '';

  return (
    <ScrollView style={styles.container}>
      {/* Customer Info */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Customer</Text>
        <Text style={styles.customerName}>{customerName}</Text>
        {customerPhone ? (
          <Text style={styles.customerPhone}>{customerPhone}</Text>
        ) : null}
      </View>

      {/* Status & Date */}
      <View style={styles.section}>
        <View style={styles.statusRow}>
          <View style={[styles.badge, { backgroundColor: statusStyle.bg }]}>
            <Text
              style={[
                styles.badgeText,
                { color: statusStyle.text },
                quote.status === 'EXPIRED' && styles.expired,
              ]}
            >
              {quote.status}
            </Text>
          </View>
          <Text style={styles.dateText}>Created {createdDate}</Text>
        </View>
      </View>

      {/* Line Items */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Line Items</Text>
        {lineItems.map((item) => (
          <View key={item.id} style={styles.lineItem}>
            <View style={styles.lineItemTop}>
              <Text style={styles.lineItemDescription} numberOfLines={2}>
                {item.description}
              </Text>
              <Text style={styles.lineItemTotal}>${centsToDollars(item.total)}</Text>
            </View>
            <Text style={styles.lineItemDetail}>
              {item.quantity} × ${centsToDollars(item.unitPrice)}
            </Text>
          </View>
        ))}
      </View>

      {/* Summary */}
      <View style={styles.section}>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>Subtotal</Text>
          <Text style={styles.summaryValue}>${centsToDollars(quote.subtotal)}</Text>
        </View>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>Tax</Text>
          <Text style={styles.summaryValue}>${centsToDollars(quote.taxAmount)}</Text>
        </View>
        <View style={[styles.summaryRow, styles.totalRow]}>
          <Text style={styles.totalLabel}>Total</Text>
          <Text style={styles.totalValue}>${centsToDollars(quote.total)}</Text>
        </View>
      </View>

      {/* Notes */}
      {quote.notes ? (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Notes</Text>
          <Text style={styles.notesText}>{quote.notes}</Text>
        </View>
      ) : null}

      {/* Actions */}
      <View style={styles.actions}>
        <TouchableOpacity style={styles.actionButton} onPress={handleDuplicate}>
          <Text style={styles.actionButtonText}>Duplicate Quote</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bottomPadding} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  section: {
    backgroundColor: '#fff',
    marginTop: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  sectionTitle: {
    fontSize: 13,
    fontWeight: '700',
    color: '#666',
    textTransform: 'uppercase',
    marginBottom: 8,
  },
  customerName: {
    fontSize: 17,
    fontWeight: '600',
    color: '#333',
  },
  customerPhone: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
  statusRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  badge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 4,
  },
  badgeText: {
    fontSize: 12,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  expired: {
    textDecorationLine: 'line-through',
  },
  dateText: {
    fontSize: 13,
    color: '#999',
  },
  lineItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  lineItemTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  lineItemDescription: {
    fontSize: 15,
    fontWeight: '500',
    color: '#333',
    flex: 1,
    marginRight: 12,
  },
  lineItemTotal: {
    fontSize: 15,
    fontWeight: '600',
    color: '#333',
  },
  lineItemDetail: {
    fontSize: 13,
    color: '#999',
    marginTop: 2,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 6,
  },
  summaryLabel: {
    fontSize: 15,
    color: '#666',
  },
  summaryValue: {
    fontSize: 15,
    color: '#333',
  },
  totalRow: {
    borderTopWidth: 1,
    borderTopColor: '#e5e7eb',
    marginTop: 4,
    paddingTop: 10,
  },
  totalLabel: {
    fontSize: 17,
    fontWeight: '700',
    color: '#333',
  },
  totalValue: {
    fontSize: 17,
    fontWeight: '700',
    color: '#333',
  },
  notesText: {
    fontSize: 15,
    color: '#555',
    lineHeight: 22,
  },
  actions: {
    padding: 16,
    gap: 8,
  },
  actionButton: {
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: '#2563eb',
    borderRadius: 8,
    alignItems: 'center',
  },
  actionButtonText: {
    color: '#2563eb',
    fontSize: 15,
    fontWeight: '600',
  },
  bottomPadding: {
    height: 32,
  },
});
