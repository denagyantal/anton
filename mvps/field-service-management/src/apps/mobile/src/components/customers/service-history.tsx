import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import { router } from 'expo-router';
import { useCustomerJobs } from '../../hooks/use-jobs';
import { useJobInvoice } from '../../hooks/use-invoices';
import type Job from '../../db/models/job';
import { STATUS_CONFIG, formatJobDate, formatInvoiceTotal } from './service-history-utils';

export { STATUS_CONFIG, formatJobDate, formatInvoiceTotal };

function JobHistoryRow({ job }: { job: Job }) {
  const { invoice } = useJobInvoice(job.id);
  const cfg = STATUS_CONFIG[job.status] ?? STATUS_CONFIG['QUOTED']!;

  return (
    <TouchableOpacity
      style={styles.row}
      onPress={() => router.push(`/(tabs)/jobs/${job.id}` as never)}
      activeOpacity={0.7}
      testID={`job-history-row-${job.id}`}
    >
      <View style={styles.rowMain}>
        <Text style={styles.jobTitle} numberOfLines={1}>{job.title}</Text>
        <Text style={styles.jobDate}>{formatJobDate(job.scheduledStart)}</Text>
      </View>
      <View style={styles.rowMeta}>
        <View style={[styles.badge, { backgroundColor: cfg.bg }]}>
          <Text style={[styles.badgeText, { color: cfg.text }]}>{cfg.label}</Text>
        </View>
        {invoice ? (
          <Text style={styles.invoiceTotal} testID={`invoice-total-${job.id}`}>
            {formatInvoiceTotal(invoice.total)}
          </Text>
        ) : null}
      </View>
    </TouchableOpacity>
  );
}

interface ServiceHistoryProps {
  customerId: string;
  onCreateQuote: () => void;
}

export default function ServiceHistory({ customerId, onCreateQuote }: ServiceHistoryProps) {
  const { jobs, isLoading } = useCustomerJobs(customerId);

  return (
    <View style={styles.container}>
      <Text style={styles.sectionHeader}>Service History</Text>

      {isLoading ? (
        <ActivityIndicator size="small" color="#16A34A" style={styles.loader} />
      ) : jobs.length === 0 ? (
        <View style={styles.emptyState} testID="service-history-empty">
          <Text style={styles.emptyText}>No service history yet</Text>
          <TouchableOpacity
            style={styles.createQuoteBtn}
            onPress={onCreateQuote}
            testID="create-first-quote-btn"
          >
            <Text style={styles.createQuoteBtnText}>Create First Quote</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <FlatList
          data={jobs}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <JobHistoryRow job={item} />}
          scrollEnabled={false}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          testID="service-history-list"
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#e5e7eb',
  },
  sectionHeader: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111827',
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
  },
  loader: { paddingVertical: 24 },
  emptyState: {
    paddingHorizontal: 16,
    paddingVertical: 24,
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 12,
  },
  createQuoteBtn: {
    backgroundColor: '#16A34A',
    borderRadius: 8,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  createQuoteBtnText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  row: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#fff',
  },
  rowMain: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  jobTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: '#111827',
    flex: 1,
    marginRight: 8,
  },
  jobDate: {
    fontSize: 13,
    color: '#6b7280',
  },
  rowMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  badge: {
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 2,
  },
  badgeText: { fontSize: 12, fontWeight: '600' },
  invoiceTotal: {
    fontSize: 14,
    fontWeight: '600',
    color: '#374151',
  },
  separator: {
    height: 1,
    backgroundColor: '#f3f4f6',
    marginLeft: 16,
  },
});
