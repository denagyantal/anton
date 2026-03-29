import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { centsToDollars } from '@field-service/shared';
import { useDatabase } from '../../contexts/database-context';
import Quote from '../../db/models/quote';
import Customer from '../../db/models/customer';

const STATUS_COLORS: Record<string, { bg: string; text: string }> = {
  DRAFT: { bg: '#f3f4f6', text: '#6b7280' },
  SENT: { bg: '#dbeafe', text: '#2563eb' },
  VIEWED: { bg: '#fef9c3', text: '#ca8a04' },
  APPROVED: { bg: '#dcfce7', text: '#16a34a' },
  DECLINED: { bg: '#fee2e2', text: '#dc2626' },
  EXPIRED: { bg: '#f3f4f6', text: '#9ca3af' },
};

interface QuoteCardProps {
  quote: Quote;
  onPress: (quote: Quote) => void;
}

export default function QuoteCard({ quote, onPress }: QuoteCardProps) {
  const database = useDatabase();
  const [customerName, setCustomerName] = useState('');

  useEffect(() => {
    if (!quote.customerId) return;

    const subscription = database
      .get<Customer>('customers')
      .findAndObserve(quote.customerId)
      .subscribe({
        next: (customer) => setCustomerName(customer.name),
        error: () => setCustomerName('Unknown Customer'),
      });

    return () => subscription.unsubscribe();
  }, [database, quote.customerId]);

  const statusStyle = STATUS_COLORS[quote.status] ?? STATUS_COLORS.DRAFT;
  const createdDate = quote.createdAt
    ? new Date(quote.createdAt).toLocaleDateString()
    : '';

  return (
    <TouchableOpacity style={styles.card} onPress={() => onPress(quote)}>
      <View style={styles.topRow}>
        <Text style={styles.customerName} numberOfLines={1}>{customerName}</Text>
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
      </View>
      <View style={styles.bottomRow}>
        <Text style={styles.total}>${centsToDollars(quote.total)}</Text>
        <Text style={styles.date}>{createdDate}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    marginHorizontal: 16,
    marginVertical: 4,
    padding: 16,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#f0f0f0',
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  customerName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    flex: 1,
    marginRight: 8,
  },
  badge: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 4,
  },
  badgeText: {
    fontSize: 11,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  expired: {
    textDecorationLine: 'line-through',
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  total: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111',
  },
  date: {
    fontSize: 13,
    color: '#999',
  },
});
