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
