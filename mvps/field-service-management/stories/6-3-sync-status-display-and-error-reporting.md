# Story 6.3: Sync Status Display and Error Reporting

Status: ready-for-dev

## Story

As a tradesperson,
I want to see which records have synced and be alerted to any sync problems,
so that I have confidence my data is safe and backed up.

## Acceptance Criteria

1. **[Per-record sync status indicator on all list screens]** Given records exist in various sync states, when the user views any list screen (quotes, jobs, invoices, customers), then each record displays a sync status indicator: synced (green check), pending (yellow spinner), or error (red warning). (FR39)

2. **[Header green dot — all synced]** Given the app header area, when the user is online with all records synced (pendingCount === 0, no syncError), then a subtle green dot indicator shows "all synced" status.

3. **[Header yellow dot — pending items]** Given the app header area, when the user is online with pending sync items, then a yellow dot with the count of pending items is displayed.

4. **[Push notification + retry on sync error]** Given a sync error occurs, when the error is detected, then a local push notification alerts the user, and the affected records (those with syncedAt === null while syncError is set) show a red error badge with a "Retry Sync" option that triggers a new sync attempt. (FR47)

5. **[Sync Status screen in Settings]** Given the user navigates to Settings > Sync Status, when the sync log screen loads, then they see recent sync activity including timestamps, records pushed/pulled, and any errors — up to the last 10 sync attempts.

## Tasks / Subtasks

### Task 1: Enhance `use-sync-status.ts` and `SyncIndicator` (AC: #1, #4)

- [ ] 1.1: Update `apps/mobile/src/hooks/use-sync-status.ts`. Add 'error' to the type, and update `getSyncStatus` to accept an optional `syncHasError` flag:

  ```typescript
  import { Model } from '@nozbe/watermelondb';

  export type RecordSyncStatus = 'synced' | 'pending' | 'error';

  export function getSyncStatus(
    record: Model & { syncedAt: number | null },
    syncHasError?: boolean,
  ): RecordSyncStatus {
    if (record.syncedAt == null) {
      return syncHasError ? 'error' : 'pending';
    }
    return 'synced';
  }
  ```

  This is backward-compatible: existing callers that omit `syncHasError` continue to return 'synced' | 'pending'. The `syncHasError` flag comes from `useSync().syncError !== null`, meaning: when the last sync attempt failed, all pending records (syncedAt === null) are shown in error state.

- [ ] 1.2: Update `apps/mobile/src/components/ui/sync-indicator.tsx` to render three distinct states:

  ```typescript
  import React from 'react';
  import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
  import { RecordSyncStatus } from '../../hooks/use-sync-status';

  interface Props {
    status: RecordSyncStatus;
    onPress?: () => void;
  }

  export function SyncIndicator({ status, onPress }: Props) {
    if (status === 'synced') {
      return (
        <View style={[styles.badge, styles.synced]}>
          <Text style={styles.text}>✓</Text>
        </View>
      );
    }

    if (status === 'error') {
      const inner = (
        <View style={[styles.badge, styles.error]}>
          <Text style={styles.text}>!</Text>
        </View>
      );
      return onPress ? (
        <TouchableOpacity onPress={onPress} hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}>
          {inner}
        </TouchableOpacity>
      ) : inner;
    }

    // pending
    return (
      <View style={[styles.badge, styles.pending]}>
        <Text style={styles.text}>↻</Text>
      </View>
    );
  }

  const styles = StyleSheet.create({
    badge: {
      width: 18,
      height: 18,
      borderRadius: 9,
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: 4,
    },
    synced: { backgroundColor: '#22c55e' },
    pending: { backgroundColor: '#fbbf24' },
    error: { backgroundColor: '#ef4444' },
    text: {
      fontSize: 10,
      color: '#fff',
      fontWeight: 'bold',
    },
  });
  ```

  **Design notes:**
  - Green (`#22c55e`) for synced — visible confidence signal
  - Yellow (`#fbbf24`) for pending — same as before
  - Red (`#ef4444`) for error — clearly distinguishable
  - Error badge is tappable (if `onPress` is provided) with extra hit area via `hitSlop`

- [ ] 1.3: Create `apps/mobile/src/components/ui/sync-badge.tsx`. This component wraps `SyncIndicator` and pulls sync state from context, eliminating prop-drilling across all card components:

  ```typescript
  import React from 'react';
  import { Model } from '@nozbe/watermelondb';
  import { useSync } from '../../contexts/sync-context';
  import { getSyncStatus } from '../../hooks/use-sync-status';
  import { SyncIndicator } from './sync-indicator';

  interface Props {
    record: Model & { syncedAt: number | null };
  }

  export function SyncBadge({ record }: Props) {
    const { syncError, triggerSync } = useSync();
    const status = getSyncStatus(record, syncError !== null);
    return (
      <SyncIndicator
        status={status}
        onPress={status === 'error' ? triggerSync : undefined}
      />
    );
  }
  ```

  `SyncBadge` is the public API that card components use. `SyncIndicator` remains a pure presentational component (testable without context).

### Task 2: Update card components to use `SyncBadge` (AC: #1)

- [ ] 2.1: Update `apps/mobile/src/components/jobs/job-card.tsx`. Replace:
  ```tsx
  import { getSyncStatus } from '../../hooks/use-sync-status';
  import { SyncIndicator } from '../ui/sync-indicator';
  // ...
  <SyncIndicator status={getSyncStatus(job)} />
  ```
  With:
  ```tsx
  import { SyncBadge } from '../ui/sync-badge';
  // ...
  <SyncBadge record={job} />
  ```
  Remove the unused `getSyncStatus` and `SyncIndicator` imports.

- [ ] 2.2: Update `apps/mobile/src/components/customers/customer-card.tsx`. Same replacement pattern as 2.1 — swap `getSyncStatus` + `SyncIndicator` for `SyncBadge`.

- [ ] 2.3: Update `apps/mobile/src/components/quotes/quote-card.tsx`. Same replacement pattern as 2.1.

- [ ] 2.4: Update `apps/mobile/app/(tabs)/more/invoices.tsx`. The inline `InvoiceCard` component does not currently show a sync status indicator. Add it:

  ```tsx
  import { SyncBadge } from '../../../src/components/ui/sync-badge';
  // ...
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
  ```

  Add `invoiceNumberRow` to styles:
  ```typescript
  invoiceNumberRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ```

  **Note**: `Invoice` WatermelonDB model must have `syncedAt: number | null` (it was added to all models in story 6.1). Verify that `apps/mobile/src/db/models/invoice.ts` has `@field('synced_at') syncedAt!: number | null`.

### Task 3: Update `NetworkStatusBar` for green "all synced" state (AC: #2, #3)

- [ ] 3.1: Update `apps/mobile/src/components/ui/network-status-bar.tsx`. Currently returns `null` when `isConnected && pendingCount === 0`. Change to show a green dot:

  ```typescript
  import React from 'react';
  import { View, Text, StyleSheet } from 'react-native';
  import { useNetwork } from '../../hooks/use-network';
  import { useSync } from '../../contexts/sync-context';

  export function NetworkStatusBar() {
    const { isConnected } = useNetwork();
    const { pendingCount, syncError } = useSync();

    // AC #2: online, nothing pending, no error → green "all synced"
    if (isConnected && pendingCount === 0 && !syncError) {
      return (
        <View style={[styles.bar, { backgroundColor: '#22c55e22' }]}>
          <View style={[styles.dot, { backgroundColor: '#22c55e' }]} />
          <Text style={[styles.text, { color: '#16a34a' }]}>All synced</Text>
        </View>
      );
    }

    // AC #4: sync error state
    if (syncError) {
      return (
        <View style={[styles.bar, { backgroundColor: '#ef444422' }]}>
          <View style={[styles.dot, { backgroundColor: '#ef4444' }]} />
          <Text style={[styles.text, { color: '#dc2626' }]}>Sync error — tap a record to retry</Text>
        </View>
      );
    }

    // AC #3: online with pending, or offline
    const label = pendingCount > 0 ? `${pendingCount} pending` : 'offline';
    const color = isConnected ? '#fbbf24' : '#f59e0b';

    return (
      <View style={[styles.bar, { backgroundColor: color + '22' }]}>
        <View style={[styles.dot, { backgroundColor: color }]} />
        <Text style={[styles.text, { color }]}>{label}</Text>
      </View>
    );
  }

  const styles = StyleSheet.create({
    bar: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 12,
      paddingVertical: 4,
    },
    dot: {
      width: 8,
      height: 8,
      borderRadius: 4,
      marginRight: 6,
    },
    text: {
      fontSize: 12,
      fontWeight: '500',
    },
  });
  ```

  **Note**: The green "all synced" bar is intentionally visible (not hidden). Per the AC, the green dot gives the tradesperson positive confirmation that their data is safe — this is psychologically important for an offline-first app.

### Task 4: Add sync log to `sync-service.ts` and `SyncContext` (AC: #5)

- [ ] 4.1: Update `apps/mobile/src/services/sync-service.ts` to return sync stats from `performSync`. Add a `SyncStats` interface and update the return type:

  ```typescript
  export interface SyncStats {
    recordsPushed: number;
    recordsPulled: number;
    conflictsResolved: number; // MVP: always 0 — conflict count not tracked at this layer
  }

  function countChanges(changes: Record<string, { created?: unknown[]; updated?: unknown[]; deleted?: string[] }>): number {
    return Object.values(changes).reduce((acc, tableChanges) => {
      return acc
        + (tableChanges.created?.length ?? 0)
        + (tableChanges.updated?.length ?? 0)
        + (tableChanges.deleted?.length ?? 0);
    }, 0);
  }

  export async function performSync(database: Database): Promise<SyncStats> {
    let recordsPushed = 0;
    let recordsPulled = 0;

    await synchronize({
      database,
      sendCreatedAsUpdated: true,
      pullChanges: async ({ lastPulledAt, schemaVersion, migration }) => {
        const result = await apiClient.post<{ changes: object; timestamp: number }>(
          '/api/v1/sync/pull',
          { lastPulledAt, schemaVersion, migration },
        );
        recordsPulled = countChanges(result.changes as Record<string, { created?: unknown[]; updated?: unknown[]; deleted?: string[] }>);
        return result;
      },
      pushChanges: async ({ changes, lastPulledAt }) => {
        recordsPushed = countChanges(changes as Record<string, { created?: unknown[]; updated?: unknown[]; deleted?: string[] }>);
        await apiClient.post('/api/v1/sync/push', { changes, lastPulledAt });
      },
    });

    const now = Date.now();
    await database.write(async () => {
      const preparedUpdates = [];
      for (const table of SYNCED_TABLES) {
        const pending = await database
          .get(table)
          .query(Q.where('synced_at', Q.eq(null)))
          .fetch();
        for (const record of pending) {
          preparedUpdates.push(
            record.prepareUpdate((r: any) => {
              r.syncedAt = now;
            }),
          );
        }
      }
      if (preparedUpdates.length > 0) {
        await database.batch(...preparedUpdates);
      }
    });

    return { recordsPushed, recordsPulled, conflictsResolved: 0 };
  }

  export async function performSyncWithRetry(database: Database): Promise<SyncStats> {
    let lastError: unknown;
    for (let attempt = 0; attempt < MAX_RETRIES; attempt++) {
      try {
        return await performSync(database);
      } catch (err) {
        lastError = err;
        if (attempt < MAX_RETRIES - 1) {
          const delay = Math.min(
            BACKOFF_BASE_MS * Math.pow(2, attempt),
            BACKOFF_MAX_MS,
          );
          await sleep(delay);
        }
      }
    }
    throw lastError;
  }
  ```

  **Critical**: The `performSync` function signature changes from `Promise<void>` to `Promise<SyncStats>`. `performSyncWithRetry` also changes. Update `sync-context.tsx` to consume the returned stats.

- [ ] 4.2: Create `apps/mobile/src/hooks/use-sync-log.ts`. This hook manages the sync log in AsyncStorage (a ring buffer of the last 10 entries):

  ```typescript
  import { useState, useEffect, useCallback } from 'react';
  import AsyncStorage from '@react-native-async-storage/async-storage';

  const SYNC_LOG_KEY = '@field_service/sync_log';
  const MAX_LOG_ENTRIES = 10;

  export interface SyncLogEntry {
    timestamp: number;
    status: 'success' | 'failed';
    recordsPushed: number;
    recordsPulled: number;
    conflictsResolved: number;
    errorMessage?: string;
  }

  export async function appendSyncLog(entry: SyncLogEntry): Promise<void> {
    const raw = await AsyncStorage.getItem(SYNC_LOG_KEY);
    const existing: SyncLogEntry[] = raw ? JSON.parse(raw) : [];
    const updated = [entry, ...existing].slice(0, MAX_LOG_ENTRIES);
    await AsyncStorage.setItem(SYNC_LOG_KEY, JSON.stringify(updated));
  }

  export function useSyncLog() {
    const [log, setLog] = useState<SyncLogEntry[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const load = useCallback(async () => {
      try {
        const raw = await AsyncStorage.getItem(SYNC_LOG_KEY);
        setLog(raw ? JSON.parse(raw) : []);
      } catch {
        setLog([]);
      } finally {
        setIsLoading(false);
      }
    }, []);

    useEffect(() => {
      load();
    }, [load]);

    return { log, isLoading, refresh: load };
  }
  ```

  `appendSyncLog` is a standalone async function (not a hook) that `SyncContext` calls after each sync attempt. `useSyncLog` is used by the Sync Status screen.

  **Why AsyncStorage?** The sync log is display-only ephemeral data. It doesn't need to sync to the server or be persisted in WatermelonDB. AsyncStorage is appropriate for lightweight app-level configuration and history data.

- [ ] 4.3: Update `apps/mobile/src/contexts/sync-context.tsx`. Add sync log recording after each sync attempt, and expose `lastSyncStats`:

  In `triggerSync`, after the try/catch, record the result:
  ```typescript
  import { appendSyncLog, SyncLogEntry } from '../hooks/use-sync-log';
  import { SyncStats } from '../services/sync-service';
  // ...

  const triggerSync = useCallback(async () => {
    if (isSyncingRef.current || !isConnected) return;
    isSyncingRef.current = true;
    setIsSyncing(true);
    setSyncError(null);

    let stats: SyncStats | null = null;
    try {
      stats = await performSyncWithRetry(database);
      setLastSyncAt(Date.now());
      setSyncError(null);
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Sync failed';
      setSyncError(message);

      // Record failure to log
      const entry: SyncLogEntry = {
        timestamp: Date.now(),
        status: 'failed',
        recordsPushed: 0,
        recordsPulled: 0,
        conflictsResolved: 0,
        errorMessage: message,
      };
      appendSyncLog(entry).catch(() => {}); // fire-and-forget, non-critical

      // Push local notification for sync error (see Task 5)
      scheduleSyncErrorNotification(message).catch(() => {});
    } finally {
      setIsSyncing(false);
      isSyncingRef.current = false;
    }

    // Record success to log (outside try so it doesn't suppress real errors)
    if (stats) {
      const entry: SyncLogEntry = {
        timestamp: Date.now(),
        status: 'success',
        recordsPushed: stats.recordsPushed,
        recordsPulled: stats.recordsPulled,
        conflictsResolved: stats.conflictsResolved,
      };
      appendSyncLog(entry).catch(() => {});
    }
  }, [database, isConnected]);
  ```

  The `appendSyncLog` calls are fire-and-forget (`.catch(() => {})`) because failure to log must never affect the sync operation itself.

### Task 5: Push notification on sync error (AC: #4)

- [ ] 5.1: Create a helper `scheduleSyncErrorNotification` in `apps/mobile/src/services/notification-service.ts`. If the file already exists from earlier stories, add the function to it. If not, create it:

  ```typescript
  import * as Notifications from 'expo-notifications';

  export async function scheduleSyncErrorNotification(errorMessage: string): Promise<void> {
    // Check permission — only notify if already granted. Don't request here
    // (permission was requested during onboarding / push notification setup).
    const { status } = await Notifications.getPermissionsAsync();
    if (status !== 'granted') return;

    await Notifications.scheduleNotificationAsync({
      content: {
        title: 'Sync Error',
        body: 'Some records failed to sync. Open the app and tap a record to retry.',
        data: { type: 'sync_error', message: errorMessage },
      },
      trigger: null, // fire immediately
    });
  }
  ```

  **Why not request permissions here?** Permission requests should happen at a contextually appropriate moment (the user is performing an action that requires it), not in response to a background failure. The app should have already requested notification permissions during onboarding or push notification setup (story 1.3 / Epic 1). If permissions haven't been granted, the notification is silently skipped — sync still works.

  **`trigger: null`**: Fires the notification immediately when called. This is a local notification (no server needed) — the mobile OS displays it even if the app is in the background.

- [ ] 5.2: Import and call `scheduleSyncErrorNotification` in `sync-context.tsx` as shown in Task 4.3. Ensure the import path is correct: `'../services/notification-service'`.

  Verify `expo-notifications` is installed: check `apps/mobile/package.json` for `"expo-notifications"`. It should be present (used in earlier stories for push notifications). If missing, run `npx expo install expo-notifications` from `mvps/field-service-management/src/apps/mobile/`.

### Task 6: Create Sync Status screen (AC: #5)

- [ ] 6.1: Create `apps/mobile/app/(tabs)/more/sync-status.tsx`:

  ```typescript
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
  ```

- [ ] 6.2: Add navigation row to `apps/mobile/app/(tabs)/more/index.tsx`. Add after the "Business Profile" row and before "Pricebook":

  ```tsx
  <TouchableOpacity
    style={styles.row}
    onPress={() => router.push('/(tabs)/more/sync-status')}
    testID="sync-status-row"
  >
    <Text style={styles.rowText}>Sync Status</Text>
    <Text style={styles.rowArrow}>›</Text>
  </TouchableOpacity>
  ```

### Task 7: Write tests (AC: #1, #2, #3, #4, #5)

- [ ] 7.1: Update `apps/mobile/src/hooks/use-sync-status.test.ts` to cover the new 'error' state:

  ```typescript
  import { getSyncStatus } from './use-sync-status';

  describe('getSyncStatus', () => {
    it('returns synced when syncedAt is a timestamp', () => {
      const record = { syncedAt: 1700000000000 } as any;
      expect(getSyncStatus(record)).toBe('synced');
    });

    it('returns synced when syncedAt is 0 (epoch)', () => {
      const record = { syncedAt: 0 } as any;
      expect(getSyncStatus(record)).toBe('synced');
    });

    it('returns pending when syncedAt is null and no error', () => {
      const record = { syncedAt: null } as any;
      expect(getSyncStatus(record)).toBe('pending');
    });

    it('returns pending when syncedAt is null and syncHasError is false', () => {
      const record = { syncedAt: null } as any;
      expect(getSyncStatus(record, false)).toBe('pending');
    });

    it('returns error when syncedAt is null and syncHasError is true', () => {
      const record = { syncedAt: null } as any;
      expect(getSyncStatus(record, true)).toBe('error');
    });

    it('returns synced (not error) when syncedAt is set even if syncHasError is true', () => {
      const record = { syncedAt: 1700000000000 } as any;
      expect(getSyncStatus(record, true)).toBe('synced');
    });

    it('returns pending when syncedAt is undefined (legacy compat)', () => {
      const record = { syncedAt: undefined } as any;
      expect(getSyncStatus(record)).toBe('pending');
    });
  });
  ```

- [ ] 7.2: Create `apps/mobile/src/hooks/use-sync-log.test.ts`. Test `appendSyncLog` and `useSyncLog` with mocked AsyncStorage:

  ```typescript
  import AsyncStorage from '@react-native-async-storage/async-storage';
  import { appendSyncLog, SyncLogEntry } from './use-sync-log';

  jest.mock('@react-native-async-storage/async-storage', () => ({
    getItem: jest.fn(),
    setItem: jest.fn(),
  }));

  const mockGetItem = AsyncStorage.getItem as jest.Mock;
  const mockSetItem = AsyncStorage.setItem as jest.Mock;

  const makeEntry = (overrides: Partial<SyncLogEntry> = {}): SyncLogEntry => ({
    timestamp: Date.now(),
    status: 'success',
    recordsPushed: 3,
    recordsPulled: 2,
    conflictsResolved: 0,
    ...overrides,
  });

  describe('appendSyncLog', () => {
    beforeEach(() => {
      jest.clearAllMocks();
      mockSetItem.mockResolvedValue(undefined);
    });

    it('creates new log when none exists', async () => {
      mockGetItem.mockResolvedValue(null);
      const entry = makeEntry();
      await appendSyncLog(entry);
      const written = JSON.parse(mockSetItem.mock.calls[0][1]);
      expect(written).toHaveLength(1);
      expect(written[0]).toEqual(entry);
    });

    it('prepends to existing log', async () => {
      const old = makeEntry({ timestamp: 1000 });
      mockGetItem.mockResolvedValue(JSON.stringify([old]));
      const fresh = makeEntry({ timestamp: 2000 });
      await appendSyncLog(fresh);
      const written = JSON.parse(mockSetItem.mock.calls[0][1]);
      expect(written[0].timestamp).toBe(2000); // newest first
      expect(written[1].timestamp).toBe(1000);
    });

    it('caps log at 10 entries', async () => {
      const entries = Array.from({ length: 10 }, (_, i) => makeEntry({ timestamp: i }));
      mockGetItem.mockResolvedValue(JSON.stringify(entries));
      await appendSyncLog(makeEntry({ timestamp: 999 }));
      const written = JSON.parse(mockSetItem.mock.calls[0][1]);
      expect(written).toHaveLength(10);
      expect(written[0].timestamp).toBe(999); // newest first
    });

    it('stores failed entry with errorMessage', async () => {
      mockGetItem.mockResolvedValue(null);
      const entry = makeEntry({ status: 'failed', errorMessage: 'Network timeout' });
      await appendSyncLog(entry);
      const written = JSON.parse(mockSetItem.mock.calls[0][1]);
      expect(written[0].status).toBe('failed');
      expect(written[0].errorMessage).toBe('Network timeout');
    });
  });
  ```

  Note: `useSyncLog` hook testing requires `renderHook` from `@testing-library/react-native` — skip if not already set up in this project. The standalone `appendSyncLog` function tests are sufficient for verifying the core logic.

- [ ] 7.3: Create `apps/mobile/src/components/ui/sync-badge.test.tsx` (optional, if component testing infrastructure is in place — follow the pattern from `apps/mobile/src/components/customers/service-history.test.tsx`). Test that `SyncBadge` renders `SyncIndicator` with the correct status based on mocked `useSync()` context:

  ```typescript
  // Test: renders with 'synced' status when record.syncedAt is set
  // Test: renders with 'pending' status when record.syncedAt is null and no syncError
  // Test: renders with 'error' status when record.syncedAt is null and syncError is set
  // Test: calls triggerSync when error badge is pressed
  ```

  Mock `useSync` from sync-context to control `syncError` and `triggerSync` in tests.

## Dev Notes

### What Stories 6.1 and 6.2 Built (Do Not Regress)

**Story 6.1 established:**
- `synced_at` column on all 10 WatermelonDB tables (schema v10, null = pending)
- `SyncContext` with `pendingCount`, `isSyncing`, `lastSyncAt`, `syncError`, `triggerSync`
- `SyncProvider` wrapping the app inside `DatabaseProvider` in `_layout.tsx`
- `NetworkStatusBar` (reads pendingCount from SyncContext — hides when online+synced)
- `SyncIndicator` (hides when synced, yellow spinner when pending)
- `getSyncStatus` utility function (returns 'synced' | 'pending')

**Story 6.2 established:**
- `sync-service.ts` (mobile) — `performSync` and `performSyncWithRetry` using WatermelonDB `synchronize()`
- `sync-service.ts` (API) — `pullChanges` and `pushChanges` with last-write-wins conflict resolution
- `sync.ts` route registered at `/api/v1/sync` in `index.ts`
- `SyncContext` updated to call `performSyncWithRetry` on connectivity restore and foreground
- `triggerSync` callable from any component via `useSync()`

**Current state of SyncIndicator** (pre-6.3): returns `null` when synced, yellow badge when pending. No error state. No green check.

**Current state of card components** (pre-6.3): `job-card.tsx`, `customer-card.tsx`, `quote-card.tsx` all import `SyncIndicator` and `getSyncStatus` directly. Invoice screen has no sync indicator.

**Do not change**: Provider tree order in `_layout.tsx`, `SYNCED_TABLES` in sync-service, the WatermelonDB batch update pattern (prepareUpdate + batch, not record.update inside database.write).

### Architecture Compliance

**FR39 requirement**: Per the architecture, all records must have a visible sync status indicator. This story implements the visual layer — the data layer (synced_at column) was built in 6.1, and the sync engine in 6.2.

**SyncBadge vs direct getSyncStatus**: Creating `SyncBadge` as a context-aware wrapper eliminates prop drilling and keeps card components clean. The existing cards pass the record down; `SyncBadge` handles the context lookup internally. This is the correct pattern — card components shouldn't need to import `useSync()` themselves.

**Error state logic**: The error state is global-to-pending, not per-record. When `syncError !== null`, ALL records with `syncedAt === null` show red. This is accurate: a sync failure means all pending records failed to reach the server. There's no way to know which specific records failed without per-record error tracking (out of scope for MVP).

**Push notification pattern**: Use local notifications (scheduled immediately, `trigger: null`) for sync errors. The app already uses Expo Push Notifications for server-initiated events (quote approval, payment). Local notifications don't require the Expo push server — they fire directly from the device OS. Check `apps/mobile/src/services/notification-service.ts` for existing notification setup — the `scheduleSyncErrorNotification` function should be added there if the file exists.

**AsyncStorage for sync log**: Sync log entries are ephemeral display data, not business data. AsyncStorage is appropriate (same pattern as `reminderMinutes` and `calendarSyncEnabled` in `more/index.tsx`). No WatermelonDB model needed.

### File Locations and Naming

All paths relative to `mvps/field-service-management/src/` (monorepo root):

| Action | File |
|--------|------|
| Modify | `apps/mobile/src/hooks/use-sync-status.ts` |
| Modify | `apps/mobile/src/components/ui/sync-indicator.tsx` |
| **Create** | `apps/mobile/src/components/ui/sync-badge.tsx` |
| Modify | `apps/mobile/src/components/ui/network-status-bar.tsx` |
| Modify | `apps/mobile/src/components/jobs/job-card.tsx` |
| Modify | `apps/mobile/src/components/customers/customer-card.tsx` |
| Modify | `apps/mobile/src/components/quotes/quote-card.tsx` |
| Modify | `apps/mobile/app/(tabs)/more/invoices.tsx` |
| Modify | `apps/mobile/src/services/sync-service.ts` |
| Modify | `apps/mobile/src/contexts/sync-context.tsx` |
| Modify or create | `apps/mobile/src/services/notification-service.ts` |
| **Create** | `apps/mobile/src/hooks/use-sync-log.ts` |
| **Create** | `apps/mobile/app/(tabs)/more/sync-status.tsx` |
| Modify | `apps/mobile/app/(tabs)/more/index.tsx` |
| Modify | `apps/mobile/src/hooks/use-sync-status.test.ts` |
| **Create** | `apps/mobile/src/hooks/use-sync-log.test.ts` |
| Create (optional) | `apps/mobile/src/components/ui/sync-badge.test.tsx` |

Naming conventions followed:
- `kebab-case.ts` for service files ✓
- `kebab-case.tsx` for components ✓
- `PascalCase` for exported React components (`SyncBadge`, `SyncIndicator`) ✓
- `camelCase` for hooks and functions (`useSyncLog`, `appendSyncLog`) ✓
- Tests co-located with source files with `.test.ts` / `.test.tsx` suffix ✓

### `performSync` Return Type Change — Breaking Change

`performSync` changes from `Promise<void>` to `Promise<SyncStats>`. `performSyncWithRetry` also changes. The only caller is `sync-context.tsx` — update it to handle the returned `SyncStats`. If any tests mock `performSync` as void-returning, update those mocks too.

The `countChanges` helper counts entries across all tables in a WatermelonDB changes object. The same shape is used for both push (outgoing `changes` arg) and pull (response `changes`). The count is approximate — it includes created, updated, and deleted entries — which is sufficient for the display log.

### `SyncBadge` Import in `invoices.tsx`

The `invoices.tsx` file is in `apps/mobile/app/(tabs)/more/` (three levels deep). The import path to `sync-badge.tsx` from there is:
```typescript
import { SyncBadge } from '../../../src/components/ui/sync-badge';
```
This matches the pattern used in `invoices.tsx` for other imports like `useAllInvoices` from `'../../../src/hooks/use-invoices'`.

### `Invoice` Model — Verify `syncedAt` Field

Task 2.4 requires `Invoice` to have `syncedAt: number | null` for `SyncBadge` to work. This was added in story 6.1 (all 10 tables got `synced_at`). Verify in `apps/mobile/src/db/models/invoice.ts`:
```typescript
@field('synced_at') syncedAt!: number | null;
```
And in `apps/mobile/src/db/schema.ts`, the `invoices` table should have `{ name: 'synced_at', type: 'number', isOptional: true }`.

### `expo-notifications` — Check Package Availability

Before importing `expo-notifications`, verify it's in `apps/mobile/package.json`. The package was introduced for push notifications in epics 2-4 (quote approval, payment notification stories). If absent, install via `npx expo install expo-notifications` from the `apps/mobile/` directory. Do NOT use `npm install` for Expo packages — always use `npx expo install` to get the compatible version for the installed Expo SDK.

### Provider Tree — Unchanged

The provider tree from `_layout.tsx` must remain unchanged:
```
StripeProvider
  AuthProvider
    NetworkProvider
      DatabaseProvider
        SyncProvider        ← SyncContext available here
          AuthGate
```

`SyncBadge` uses `useSync()` which requires `SyncProvider` to be in the tree — this is already guaranteed since all screens render inside `SyncProvider`.

### `NetworkStatusBar` — Now Shows Green When Synced

Previously `NetworkStatusBar` returned `null` when online+synced. After this story it shows a subtle green bar. This is an intentional UX change per AC #2 — the tradesperson gets a positive confirmation that data is safe. The bar is subtle (green with 13% opacity background) to avoid being distracting during normal operation.

### Sync Log Screen — Read-Only

The sync status screen is read-only display with a "Sync Now" button that calls `triggerSync()` from context. It does not interact with the API or WatermelonDB directly. It reads from AsyncStorage via `useSyncLog`.

The "Sync Now" button provides a manual trigger path (useful when the tradesperson wants to force sync before going to an area with no coverage). It's the same `triggerSync` used by the rest of the app — no special logic needed.

### Testing Approach

**`use-sync-status.test.ts`**: Pure unit tests on a utility function — no mocking needed, fast.

**`use-sync-log.test.ts`**: Mock `@react-native-async-storage/async-storage` with Jest mock — standard pattern in React Native testing. `AsyncStorage` is already used in `more/index.tsx` so the mock setup is established in this codebase.

**`sync-badge.test.tsx`**: Requires React context wrapping. Follow the pattern from `service-history.test.tsx` for component testing with `@testing-library/react-native`. If that infrastructure isn't set up, skip and rely on integration testing.

**`sync-service.ts` changes**: Existing tests in `sync-service.test.ts` mock `synchronize` — they'll need to handle that `performSync` now returns `SyncStats`. Update mock to return stats: `synchronize.mockResolvedValue(undefined)` (synchronize itself has no return value) — the stats are built from `recordsPushed`/`recordsPulled` counters, which won't be incremented with the current mocks (they'll be 0). Update tests accordingly.

### Project Structure Notes

- Alignment with architecture's feature-based organization: sync UI components in `components/ui/`, sync logic in `services/`, sync state in `contexts/`, sync log hook in `hooks/`. ✓
- The `sync-badge.tsx` component sits in `components/ui/` alongside `sync-indicator.tsx` and `network-status-bar.tsx` — the entire sync status UI family is co-located. ✓
- The `sync-status.tsx` screen in `app/(tabs)/more/` follows Expo Router file-based routing convention. Navigation to it from `more/index.tsx` uses `router.push('/(tabs)/more/sync-status')`. ✓

### References

- [Source: epics.md#Story 6.3] — All acceptance criteria, FR39, FR47
- [Source: architecture.md#Offline UX Patterns] — "Network status indicator in header (subtle — green dot online, yellow dot syncing, red dot offline with pending count). Sync status badge on individual records (synced ✓, pending ↻, error ⚠)."
- [Source: architecture.md#Push Notifications] — "Expo Push Notifications. Triggers: Quote approved, payment received, schedule change, sync error."
- [Source: apps/mobile/src/components/ui/sync-indicator.tsx] — Current implementation (pre-6.3): only pending/null states
- [Source: apps/mobile/src/components/ui/network-status-bar.tsx] — Current implementation: hides when online+synced
- [Source: apps/mobile/src/hooks/use-sync-status.ts] — Current `getSyncStatus`: returns 'synced' | 'pending' only
- [Source: apps/mobile/src/contexts/sync-context.tsx] — `SyncContext` with `syncError`, `triggerSync`, `pendingCount`
- [Source: apps/mobile/src/services/sync-service.ts] — `performSync` / `performSyncWithRetry` (return type changes in this story)
- [Source: apps/mobile/app/(tabs)/more/index.tsx] — Settings screen structure; navigation target for "Sync Status" row
- [Source: apps/mobile/app/(tabs)/more/invoices.tsx] — `InvoiceCard` inline component without sync indicator (to fix in this story)
- [Source: apps/mobile/src/components/jobs/job-card.tsx] — Uses `getSyncStatus` + `SyncIndicator` directly (to replace with `SyncBadge`)
- [Source: stories/6-2-automatic-background-sync-with-conflict-resolution.md#Completion Notes] — `SyncStats` return type note; LokiJS adapter for tests; `prepareUpdate`/`batch` pattern

## Dev Agent Record

### Agent Model Used

claude-sonnet-4-6

### Debug Log References

### Completion Notes List

### File List
