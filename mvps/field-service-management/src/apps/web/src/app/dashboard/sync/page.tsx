'use client';

import { useState, useEffect, useCallback } from 'react';
import { apiGet, ApiError } from '../../../lib/api-client';
import { clearToken } from '../../../lib/auth';
import { useRouter } from 'next/navigation';
import SyncStatusList from '../../../components/sync-status-list';

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

type SyncStatusResponse = {
  data: {
    connected: boolean;
    companyName: string | null;
    syncLog: SyncLogEntry[];
  };
};

export default function SyncStatusPage() {
  const router = useRouter();
  const [data, setData] = useState<SyncStatusResponse['data'] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const loadSyncStatus = useCallback(async () => {
    setLoading(true);
    setError('');
    try {
      const result = await apiGet<SyncStatusResponse>('/api/v1/dashboard/sync-status');
      setData(result.data);
    } catch (err) {
      if (err instanceof ApiError && err.status === 401) {
        clearToken();
        router.replace('/');
      } else {
        setError('Failed to load sync status.');
      }
    } finally {
      setLoading(false);
    }
  }, [router]);

  useEffect(() => {
    loadSyncStatus();
  }, [loadSyncStatus]);

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">QuickBooks Sync Status</h1>
      </div>

      {loading && (
        <div className="space-y-3">
          <div className="h-20 bg-gray-100 rounded-xl animate-pulse" />
          <div className="h-64 bg-gray-100 rounded-xl animate-pulse" />
        </div>
      )}

      {!loading && error && (
        <p className="text-red-600 bg-red-50 rounded-lg px-4 py-3 text-sm">{error}</p>
      )}

      {!loading && !error && data && (
        <>
          {/* Connection status header */}
          <div
            className={`rounded-xl border p-4 mb-6 flex items-center gap-3 ${
              data.connected
                ? 'bg-green-50 border-green-200'
                : 'bg-gray-50 border-gray-200'
            }`}
          >
            <span className={`text-lg ${data.connected ? 'text-green-500' : 'text-gray-400'}`}>
              {data.connected ? '✓' : '○'}
            </span>
            <div>
              <p className={`font-medium text-sm ${data.connected ? 'text-green-800' : 'text-gray-600'}`}>
                {data.connected ? 'Connected to QuickBooks' : 'QuickBooks Not Connected'}
              </p>
              {data.companyName && (
                <p className="text-xs text-green-600 mt-0.5">{data.companyName}</p>
              )}
            </div>
            {data.connected && (
              <button
                onClick={loadSyncStatus}
                className="ml-auto text-xs px-3 py-1 border border-green-400 text-green-700 rounded-lg hover:bg-green-100"
              >
                Refresh
              </button>
            )}
          </div>

          {data.connected ? (
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <div className="px-4 py-3 border-b border-gray-100">
                <h2 className="text-sm font-semibold text-gray-700">
                  Recent Sync Activity
                  <span className="ml-2 font-normal text-gray-400">
                    ({data.syncLog.length} entries)
                  </span>
                </h2>
              </div>
              <SyncStatusList
                syncLog={data.syncLog}
                onRetryComplete={loadSyncStatus}
              />
            </div>
          ) : (
            <p className="text-sm text-gray-500 bg-gray-50 rounded-lg px-4 py-3">
              Connect QuickBooks from the mobile app under Settings › QuickBooks to see sync activity here.
            </p>
          )}
        </>
      )}
    </div>
  );
}
