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
