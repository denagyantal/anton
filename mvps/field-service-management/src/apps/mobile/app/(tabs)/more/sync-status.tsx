import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Stack } from 'expo-router';
import { useSyncLog, SyncLogEntry } from '../../../src/hooks/use-sync-log';
import { useSync } from '../../../src/contexts/sync-context';

function formatTime(ms: number): string {
  return new Date(ms).toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  });
}

function SyncLogRow({ entry }: { entry: SyncLogEntry }) {
  const isError = entry.status === 'failed';
  return (
    <View style={[styles.row, isError && styles.rowError]}>
      <View style={styles.rowHeader}>
        <View style={[styles.statusDot, { backgroundColor: isError ? '#ef4444' : '#22c55e' }]} />
        <Text style={[styles.statusLabel, { color: isError ? '#dc2626' : '#16a34a' }]}>
          {isError ? 'Failed' : 'Synced'}
        </Text>
        <Text style={styles.timestamp}>{formatTime(entry.timestamp)}</Text>
      </View>
      {!isError && (
        <Text style={styles.detail}>
          {entry.recordsPushed} pushed · {entry.recordsPulled} pulled
          {entry.conflictsResolved > 0 ? ` · ${entry.conflictsResolved} conflicts resolved` : ''}
        </Text>
      )}
      {isError && entry.errorMessage && (
        <Text style={styles.errorMessage} numberOfLines={2}>
          {entry.errorMessage}
        </Text>
      )}
    </View>
  );
}

export default function SyncStatusScreen() {
  const { log, isLoading, refresh } = useSyncLog();
  const { isSyncing, triggerSync, lastSyncAt } = useSync();

  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <Stack.Screen options={{ title: 'Sync Status', headerShown: true }} />

      <View style={styles.header}>
        {lastSyncAt && (
          <Text style={styles.lastSync}>Last synced: {formatTime(lastSyncAt)}</Text>
        )}
        <TouchableOpacity
          style={[styles.syncButton, isSyncing && styles.syncButtonDisabled]}
          onPress={triggerSync}
          disabled={isSyncing}
        >
          {isSyncing ? (
            <ActivityIndicator size="small" color="#fff" />
          ) : (
            <Text style={styles.syncButtonText}>Sync Now</Text>
          )}
        </TouchableOpacity>
      </View>

      <Text style={styles.sectionTitle}>Recent Activity</Text>

      {isLoading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator color="#2563eb" />
        </View>
      ) : (
        <FlatList
          data={log}
          keyExtractor={(_, i) => String(i)}
          renderItem={({ item }) => <SyncLogRow entry={item} />}
          onRefresh={refresh}
          refreshing={false}
          ListEmptyComponent={
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyText}>No sync activity yet</Text>
              <Text style={styles.emptySubtext}>Sync activity will appear here after the first sync</Text>
            </View>
          }
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f9fafb' },
  header: {
    backgroundColor: '#fff',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
    gap: 12,
  },
  lastSync: { fontSize: 14, color: '#6b7280' },
  syncButton: {
    backgroundColor: '#2563eb',
    borderRadius: 8,
    paddingVertical: 10,
    alignItems: 'center',
  },
  syncButtonDisabled: { backgroundColor: '#93c5fd' },
  syncButtonText: { color: '#fff', fontWeight: '600', fontSize: 15 },
  sectionTitle: {
    fontSize: 13,
    fontWeight: '600',
    color: '#6b7280',
    paddingHorizontal: 16,
    paddingVertical: 10,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    backgroundColor: '#f9fafb',
  },
  row: {
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f3f4f6',
    gap: 4,
  },
  rowError: { backgroundColor: '#fff5f5' },
  rowHeader: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  statusDot: { width: 8, height: 8, borderRadius: 4 },
  statusLabel: { fontSize: 14, fontWeight: '600' },
  timestamp: { fontSize: 13, color: '#9ca3af', marginLeft: 'auto' },
  detail: { fontSize: 13, color: '#6b7280', paddingLeft: 16 },
  errorMessage: { fontSize: 13, color: '#dc2626', paddingLeft: 16 },
  loadingContainer: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  emptyContainer: { paddingTop: 60, alignItems: 'center', paddingHorizontal: 32 },
  emptyText: { fontSize: 16, fontWeight: '600', color: '#374151', marginBottom: 8 },
  emptySubtext: { fontSize: 14, color: '#9ca3af', textAlign: 'center' },
});
