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
import { SyncBadge } from '../../../src/components/ui/sync-badge';

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
        <View style={styles.invoiceNumberRow}>
          <Text style={styles.invoiceNumber}>{invoice.invoiceNumber ?? 'Invoice'}</Text>
          <SyncBadge record={invoice} />
        </View>
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
  invoiceNumberRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  badge: { borderRadius: 12, paddingHorizontal: 10, paddingVertical: 2 },
  badgeText: { fontSize: 12, fontWeight: '600' },
  totalText: { fontSize: 14, color: '#6b7280' },
  outstandingText: { fontSize: 14, fontWeight: '600', color: '#c2410c' },
  separator: { height: 1, backgroundColor: '#f3f4f6' },
  emptyContainer: { paddingTop: 80, alignItems: 'center', paddingHorizontal: 32 },
  emptyTitle: { fontSize: 18, fontWeight: '600', color: '#374151', marginBottom: 8 },
  emptySubtext: { fontSize: 14, color: '#9ca3af', textAlign: 'center' },
});
