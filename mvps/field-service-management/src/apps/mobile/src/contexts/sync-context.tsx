import React, { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react';
import { AppState, AppStateStatus } from 'react-native';
import { Q } from '@nozbe/watermelondb';
import { useDatabase } from './database-context';
import { useNetwork } from '../hooks/use-network';
import { performSyncWithRetry, SYNCED_TABLES, SyncStats } from '../services/sync-service';
import { appendSyncLog, SyncLogEntry } from '../hooks/use-sync-log';
import { scheduleSyncErrorNotification } from '../services/notification-service';

interface SyncContextValue {
  pendingCount: number;
  isSyncing: boolean;
  lastSyncAt: number | null;
  syncError: string | null;
  triggerSync: () => void;
}

export const SyncContext = createContext<SyncContextValue>({
  pendingCount: 0,
  isSyncing: false,
  lastSyncAt: null,
  syncError: null,
  triggerSync: () => {},
});

const SYNCED_AT_NULL = Q.eq(null);

const PENDING_TABLES = SYNCED_TABLES;

export function SyncProvider({ children }: { children: React.ReactNode }) {
  const database = useDatabase();
  const { isConnected } = useNetwork();
  const [pendingCount, setPendingCount] = useState(0);
  const [isSyncing, setIsSyncing] = useState(false);
  const [lastSyncAt, setLastSyncAt] = useState<number | null>(null);
  const [syncError, setSyncError] = useState<string | null>(null);
  const isSyncingRef = useRef(false);

  useEffect(() => {
    let cancelled = false;

    async function recalculate() {
      try {
        let total = 0;
        for (const table of PENDING_TABLES) {
          const count = await database
            .get(table)
            .query(Q.where('synced_at', SYNCED_AT_NULL))
            .fetchCount();
          total += count;
        }
        if (!cancelled) setPendingCount(total);
      } catch {
        // database not ready yet — ignore
      }
    }

    const subscription = database
      .withChangesForTables(PENDING_TABLES as unknown as string[])
      .subscribe(() => recalculate());

    recalculate();

    return () => {
      cancelled = true;
      subscription.unsubscribe();
    };
  }, [database]);

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

      const entry: SyncLogEntry = {
        timestamp: Date.now(),
        status: 'failed',
        recordsPushed: 0,
        recordsPulled: 0,
        conflictsResolved: 0,
        errorMessage: message,
      };
      appendSyncLog(entry).catch(() => {});

      scheduleSyncErrorNotification(message).catch(() => {});
    } finally {
      setIsSyncing(false);
      isSyncingRef.current = false;
    }

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

  const prevConnectedRef = useRef<boolean | null>(null);
  useEffect(() => {
    if (prevConnectedRef.current === false && isConnected === true) {
      triggerSync();
    }
    prevConnectedRef.current = isConnected;
  }, [isConnected, triggerSync]);

  useEffect(() => {
    const subscription = AppState.addEventListener('change', (state: AppStateStatus) => {
      if (state === 'active') {
        triggerSync();
      }
    });
    return () => subscription.remove();
  }, [triggerSync]);

  return (
    <SyncContext.Provider
      value={{ pendingCount, isSyncing, lastSyncAt, syncError, triggerSync }}
    >
      {children}
    </SyncContext.Provider>
  );
}

export function useSync() {
  return useContext(SyncContext);
}
