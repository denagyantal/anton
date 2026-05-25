import { Model } from '@nozbe/watermelondb';

export type RecordSyncStatus = 'synced' | 'pending';

export function getSyncStatus(record: Model & { syncedAt: number | null }): RecordSyncStatus {
  if (record.syncedAt == null) return 'pending';
  return 'synced';
}
