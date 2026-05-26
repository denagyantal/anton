import React, { useEffect, useState, useCallback } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ActivityIndicator,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Stack } from 'expo-router';
import * as WebBrowser from 'expo-web-browser';
import {
  connectQuickBooks,
  getQuickBooksStatus,
  disconnectQuickBooks,
  retryQbSync,
} from '../../../src/services/api-client';
import type { QbSyncEntry } from '../../../src/services/api-client';

interface QBStatus {
  connected: boolean;
  companyName: string | null;
  realmId: string | null;
}

export default function QuickBooksScreen() {
  const [status, setStatus] = useState<QBStatus | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isConnecting, setIsConnecting] = useState(false);
  const [isDisconnecting, setIsDisconnecting] = useState(false);
  const [syncLog, setSyncLog] = useState<QbSyncEntry[]>([]);
  const [retryingId, setRetryingId] = useState<string | null>(null);

  const loadStatus = useCallback(async () => {
    try {
      const data = await getQuickBooksStatus();
      setStatus({ connected: data.connected, companyName: data.companyName, realmId: data.realmId });
      setSyncLog(data.syncLog ?? []);
    } catch {
      setStatus({ connected: false, companyName: null, realmId: null });
      setSyncLog([]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadStatus();
  }, [loadStatus]);

  const handleConnect = async () => {
    setIsConnecting(true);
    try {
      const { authorizationUrl } = await connectQuickBooks();

      // Open Intuit OAuth in in-app browser
      await WebBrowser.openAuthSessionAsync(authorizationUrl);

      // Regardless of result type, reload status — server-side callback handles the connection
      await loadStatus();
    } catch {
      Alert.alert(
        'Connection Failed',
        'Could not start QuickBooks connection. Please check your internet connection and try again.',
      );
    } finally {
      setIsConnecting(false);
    }
  };

  const handleDisconnect = () => {
    Alert.alert(
      'Disconnect QuickBooks',
      'This will stop syncing your data to QuickBooks. You can reconnect at any time.',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Disconnect',
          style: 'destructive',
          onPress: async () => {
            setIsDisconnecting(true);
            try {
              await disconnectQuickBooks();
              await loadStatus();
            } catch {
              Alert.alert('Error', 'Could not disconnect. Please try again.');
            } finally {
              setIsDisconnecting(false);
            }
          },
        },
      ],
    );
  };

  const handleRetry = async (entry: QbSyncEntry) => {
    setRetryingId(entry.id);
    try {
      await retryQbSync(entry.entityType, entry.entityId);
      await loadStatus();
    } catch {
      Alert.alert('Retry Failed', 'Could not retry sync. Please check your connection and try again.');
    } finally {
      setRetryingId(null);
    }
  };

  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <Stack.Screen options={{ title: 'QuickBooks', headerShown: true }} />

      {isLoading ? (
        <View style={styles.centered}>
          <ActivityIndicator size="large" color="#2563eb" />
        </View>
      ) : status?.connected ? (
        <View style={styles.content}>
          <View style={styles.connectedCard}>
            <View style={styles.statusRow}>
              <View style={styles.connectedDot} />
              <Text style={styles.connectedLabel}>Connected</Text>
            </View>
            {status.companyName && (
              <Text style={styles.companyName}>{status.companyName}</Text>
            )}
            <Text style={styles.connectedDescription}>
              Customers, invoices, and payments will sync to QuickBooks automatically.
            </Text>
          </View>

          <TouchableOpacity
            style={[styles.disconnectButton, isDisconnecting && styles.buttonDisabled]}
            onPress={handleDisconnect}
            disabled={isDisconnecting}
          >
            {isDisconnecting ? (
              <ActivityIndicator size="small" color="#dc2626" />
            ) : (
              <Text style={styles.disconnectText}>Disconnect QuickBooks</Text>
            )}
          </TouchableOpacity>

          {syncLog.length > 0 && (
            <View style={styles.syncSection}>
              <Text style={styles.syncSectionTitle}>Recent Sync Activity</Text>
              {syncLog.slice(0, 20).map((entry) => (
                <SyncEntryRow
                  key={entry.id}
                  entry={entry}
                  isRetrying={retryingId === entry.id}
                  onRetry={handleRetry}
                />
              ))}
            </View>
          )}
        </View>
      ) : (
        <View style={styles.content}>
          <View style={styles.disconnectedCard}>
            <Text style={styles.disconnectedTitle}>Connect QuickBooks Online</Text>
            <Text style={styles.disconnectedDescription}>
              Sync your customers, invoices, and payments to QuickBooks automatically when jobs are
              completed.
            </Text>
          </View>

          <TouchableOpacity
            style={[styles.connectButton, isConnecting && styles.buttonDisabled]}
            onPress={handleConnect}
            disabled={isConnecting}
          >
            {isConnecting ? (
              <ActivityIndicator size="small" color="#fff" />
            ) : (
              <Text style={styles.connectText}>Connect QuickBooks</Text>
            )}
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
}

function SyncEntryRow({
  entry,
  isRetrying,
  onRetry,
}: {
  entry: QbSyncEntry;
  isRetrying: boolean;
  onRetry: (entry: QbSyncEntry) => void;
}) {
  const statusColor =
    entry.status === 'SUCCESS' ? '#16a34a' : entry.status === 'FAILED' ? '#dc2626' : '#d97706';
  const statusLabel =
    entry.status === 'SUCCESS' ? 'Synced' : entry.status === 'FAILED' ? 'Failed' : 'Duplicate';
  const dateStr = new Date(entry.syncedAt).toLocaleDateString(undefined, {
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <View style={styles.syncEntry}>
      <View style={styles.syncEntryMain}>
        <View style={[styles.syncStatusDot, { backgroundColor: statusColor }]} />
        <View style={styles.syncEntryInfo}>
          <Text style={styles.syncEntityName} numberOfLines={1}>
            {entry.entityDisplayName}
          </Text>
          <Text style={styles.syncEntityType}>
            {entry.entityType} · {dateStr}
          </Text>
          {entry.status === 'FAILED' && entry.errorMessage && (
            <Text style={styles.syncErrorMsg} numberOfLines={2}>
              {entry.errorMessage}
            </Text>
          )}
        </View>
        <Text style={[styles.syncStatusLabel, { color: statusColor }]}>{statusLabel}</Text>
      </View>
      {entry.status === 'FAILED' && (
        <TouchableOpacity
          style={[styles.retryButton, isRetrying && styles.buttonDisabled]}
          onPress={() => onRetry(entry)}
          disabled={isRetrying}
        >
          {isRetrying ? (
            <ActivityIndicator size="small" color="#2563eb" />
          ) : (
            <Text style={styles.retryButtonText}>Retry Sync</Text>
          )}
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f9fafb' },
  centered: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  content: { padding: 16, gap: 16 },
  connectedCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    borderWidth: 1,
    borderColor: '#d1fae5',
    gap: 8,
  },
  statusRow: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  connectedDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#22c55e',
  },
  connectedLabel: { fontSize: 14, fontWeight: '600', color: '#16a34a' },
  companyName: { fontSize: 20, fontWeight: '700', color: '#111827' },
  connectedDescription: { fontSize: 14, color: '#6b7280', marginTop: 4 },
  disconnectedCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    borderWidth: 1,
    borderColor: '#e5e7eb',
    gap: 8,
  },
  disconnectedTitle: { fontSize: 18, fontWeight: '700', color: '#111827' },
  disconnectedDescription: { fontSize: 14, color: '#6b7280' },
  connectButton: {
    backgroundColor: '#2563eb',
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: 'center',
  },
  connectText: { color: '#fff', fontWeight: '700', fontSize: 16 },
  disconnectButton: {
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#fca5a5',
  },
  disconnectText: { color: '#dc2626', fontWeight: '600', fontSize: 16 },
  buttonDisabled: { opacity: 0.5 },
  syncSection: { marginTop: 8 },
  syncSectionTitle: { fontSize: 14, fontWeight: '600', color: '#374151', marginBottom: 8, paddingHorizontal: 4 },
  syncEntry: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 12,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#f3f4f6',
  },
  syncEntryMain: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  syncStatusDot: { width: 8, height: 8, borderRadius: 4, flexShrink: 0 },
  syncEntryInfo: { flex: 1 },
  syncEntityName: { fontSize: 14, fontWeight: '500', color: '#111827' },
  syncEntityType: { fontSize: 12, color: '#9ca3af', marginTop: 2 },
  syncErrorMsg: { fontSize: 12, color: '#dc2626', marginTop: 4 },
  syncStatusLabel: { fontSize: 12, fontWeight: '600', flexShrink: 0 },
  retryButton: {
    marginTop: 8,
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#2563eb',
    alignSelf: 'flex-start',
  },
  retryButtonText: { fontSize: 13, color: '#2563eb', fontWeight: '600' },
});
