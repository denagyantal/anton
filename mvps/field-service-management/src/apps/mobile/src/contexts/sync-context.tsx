import React, { createContext, useContext, useEffect, useState } from 'react';
import { Q } from '@nozbe/watermelondb';
import { useDatabase } from './database-context';

interface SyncContextValue {
  pendingCount: number;
  isSyncing: boolean;
  lastSyncAt: number | null;
  syncError: string | null;
}

export const SyncContext = createContext<SyncContextValue>({
  pendingCount: 0,
  isSyncing: false,
  lastSyncAt: null,
  syncError: null,
});

const SYNCED_AT_NULL = Q.eq(null);

const PENDING_TABLES = [
  'customers', 'quotes', 'line_items', 'jobs',
  'schedule_events', 'invoices', 'payments',
] as const;

export function SyncProvider({ children }: { children: React.ReactNode }) {
  const database = useDatabase();
  const [pendingCount, setPendingCount] = useState(0);

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

  return (
    <SyncContext.Provider value={{ pendingCount, isSyncing: false, lastSyncAt: null, syncError: null }}>
      {children}
    </SyncContext.Provider>
  );
}

export function useSync() {
  return useContext(SyncContext);
}
