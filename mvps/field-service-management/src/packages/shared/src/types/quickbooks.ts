export type QBEntityType = 'CUSTOMER' | 'INVOICE' | 'PAYMENT';
export type QBSyncStatus = 'SUCCESS' | 'FAILED' | 'DUPLICATE_PREVENTED';

export interface QBSyncLogEntry {
  id: string;
  accountId: string;
  entityType: QBEntityType;
  entityId: string;
  direction: 'PUSH';
  status: QBSyncStatus;
  errorMessage: string | null;
  quickbooksId: string | null;
  syncedAt: string;
}
