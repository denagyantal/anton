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

export async function performSync(database: Database): Promise<void> {
  await synchronize({
    database,
    sendCreatedAsUpdated: true,
    pullChanges: async ({ lastPulledAt, schemaVersion, migration }) => {
      return await apiClient.post<SyncPullResult>(
        '/api/v1/sync/pull',
        { lastPulledAt, schemaVersion, migration },
      );
    },
    pushChanges: async ({ changes, lastPulledAt }) => {
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
}

export async function performSyncWithRetry(database: Database): Promise<void> {
  let lastError: unknown;
  for (let attempt = 0; attempt < MAX_RETRIES; attempt++) {
    try {
      await performSync(database);
      return;
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
