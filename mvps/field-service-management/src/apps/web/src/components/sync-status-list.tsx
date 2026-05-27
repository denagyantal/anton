'use client';

import { useState } from 'react';
import { apiPost, ApiError } from '../lib/api-client';

type SyncLogEntry = {
  id: string;
  entityType: string;
  entityId: string;
  direction: string;
  status: string;
  errorMessage: string | null;
  quickbooksId: string | null;
  syncedAt: string;
};

const STATUS_COLORS: Record<string, string> = {
  SUCCESS: 'bg-green-100 text-green-700',
  FAILED: 'bg-red-100 text-red-700',
  DUPLICATE_PREVENTED: 'bg-yellow-100 text-yellow-700',
};

function formatDateTime(iso: string): string {
  return new Date(iso).toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  });
}

interface SyncStatusListProps {
  syncLog: SyncLogEntry[];
  onRetryComplete?: () => void;
}

export default function SyncStatusList({ syncLog, onRetryComplete }: SyncStatusListProps) {
  const [retrying, setRetrying] = useState<Record<string, boolean>>({});
  const [retryErrors, setRetryErrors] = useState<Record<string, string>>({});

  async function handleRetry(entry: SyncLogEntry) {
    setRetrying((prev) => ({ ...prev, [entry.id]: true }));
    setRetryErrors((prev) => ({ ...prev, [entry.id]: '' }));
    try {
      await apiPost('/api/v1/quickbooks/sync', {
        entityType: entry.entityType,
        entityId: entry.entityId,
      });
      onRetryComplete?.();
    } catch (err) {
      const msg = err instanceof ApiError ? err.message : 'Retry failed';
      setRetryErrors((prev) => ({ ...prev, [entry.id]: msg }));
    } finally {
      setRetrying((prev) => ({ ...prev, [entry.id]: false }));
    }
  }

  if (syncLog.length === 0) {
    return (
      <div className="text-center py-12 text-gray-400">
        <p className="text-base font-medium">No sync activity yet</p>
        <p className="text-sm mt-1">Sync events will appear here after QuickBooks syncs run.</p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-gray-200">
            <th className="text-left py-3 px-4 font-medium text-gray-500">Entity Type</th>
            <th className="text-left py-3 px-4 font-medium text-gray-500">Entity ID</th>
            <th className="text-left py-3 px-4 font-medium text-gray-500">Status</th>
            <th className="text-left py-3 px-4 font-medium text-gray-500">Time</th>
            <th className="text-left py-3 px-4 font-medium text-gray-500">QB ID</th>
            <th className="py-3 px-4" />
          </tr>
        </thead>
        <tbody>
          {syncLog.map((entry) => (
            <tr key={entry.id} className="border-b border-gray-100 hover:bg-gray-50">
              <td className="py-3 px-4 font-medium text-gray-700">{entry.entityType}</td>
              <td className="py-3 px-4 font-mono text-gray-500 text-xs">
                {entry.entityId.slice(0, 8)}…
              </td>
              <td className="py-3 px-4">
                <div>
                  <span
                    className={`inline-flex px-2 py-0.5 rounded-full text-xs font-medium ${
                      STATUS_COLORS[entry.status] ?? 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    {entry.status.replace(/_/g, ' ')}
                  </span>
                  {entry.errorMessage && (
                    <p className="text-xs text-red-500 mt-1 max-w-xs truncate">
                      {entry.errorMessage}
                    </p>
                  )}
                  {retryErrors[entry.id] && (
                    <p className="text-xs text-red-500 mt-1">{retryErrors[entry.id]}</p>
                  )}
                </div>
              </td>
              <td className="py-3 px-4 text-gray-500">{formatDateTime(entry.syncedAt)}</td>
              <td className="py-3 px-4 font-mono text-gray-500 text-xs">
                {entry.quickbooksId ? entry.quickbooksId.slice(0, 10) + '…' : '—'}
              </td>
              <td className="py-3 px-4 text-right">
                {entry.status === 'FAILED' && (
                  <button
                    onClick={() => handleRetry(entry)}
                    disabled={retrying[entry.id]}
                    className="text-xs px-3 py-1 border border-blue-400 text-blue-600 rounded-lg hover:bg-blue-50 disabled:opacity-50"
                  >
                    {retrying[entry.id] ? 'Retrying…' : 'Retry'}
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
