export interface SyncPayload {
  lastSyncedAt: string;
  changes: Record<string, {
    created: Record<string, unknown>[];
    updated: Record<string, unknown>[];
    deleted: string[];
  }>;
}

export interface SyncResponse {
  lastSyncedAt: string;
  changes: Record<string, {
    created: Record<string, unknown>[];
    updated: Record<string, unknown>[];
    deleted: string[];
  }>;
}

export type SyncDirection = 'PUSH' | 'PULL';
export type SyncStatus = 'SUCCESS' | 'PARTIAL' | 'FAILED';

export interface SyncLogEntry {
  id: string;
  accountId: string;
  deviceId: string;
  direction: SyncDirection;
  recordsPushed: number;
  recordsPulled: number;
  conflictsResolved: number;
  status: SyncStatus;
  errorMessage: string | null;
  completedAt: string;
}
