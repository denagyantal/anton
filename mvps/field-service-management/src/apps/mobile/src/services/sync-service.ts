import { synchronize, SyncPullResult } from '@nozbe/watermelondb/sync';
import { Database, Q } from '@nozbe/watermelondb';
import { apiClient } from './api-client';

export const SYNCED_TABLES = [
  'customers', 'quotes', 'line_items', 'jobs',
  'schedule_events', 'invoices', 'payments',
] as const;

const MAX_RETRIES = 5;
const BACKOFF_BASE_MS = 1000;
const BACKOFF_MAX_MS = 30000;

async function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export interface SyncStats {
  recordsPushed: number;
  recordsPulled: number;
  conflictsResolved: number;
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
      const result = await apiClient.post<SyncPullResult>(
        '/api/v1/sync/pull',
        { lastPulledAt, schemaVersion, migration },
      );
      recordsPulled = countChanges((result as any).changes ?? {});
      return result;
    },
    pushChanges: async ({ changes, lastPulledAt }) => {
      recordsPushed = countChanges(changes as Record<string, { created?: unknown[]; updated?: unknown[]; deleted?: string[] }>);
      await apiClient.post('/api/v1/sync/push', { changes, lastPulledAt });
    },
  });

  const now = Date.now();
  await database.write(async () => {
    const preparedUpdates: any[] = [];
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
