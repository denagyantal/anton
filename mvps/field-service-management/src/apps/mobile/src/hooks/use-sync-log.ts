import { useState, useEffect, useCallback } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SYNC_LOG_KEY = '@field_service/sync_log';
const MAX_LOG_ENTRIES = 10;

export interface SyncLogEntry {
  timestamp: number;
  status: 'success' | 'failed';
  recordsPushed: number;
  recordsPulled: number;
  conflictsResolved: number;
  errorMessage?: string;
}

export async function appendSyncLog(entry: SyncLogEntry): Promise<void> {
  const raw = await AsyncStorage.getItem(SYNC_LOG_KEY);
  const existing: SyncLogEntry[] = raw ? JSON.parse(raw) : [];
  const updated = [entry, ...existing].slice(0, MAX_LOG_ENTRIES);
  await AsyncStorage.setItem(SYNC_LOG_KEY, JSON.stringify(updated));
}

export function useSyncLog() {
  const [log, setLog] = useState<SyncLogEntry[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const load = useCallback(async () => {
    try {
      const raw = await AsyncStorage.getItem(SYNC_LOG_KEY);
      setLog(raw ? JSON.parse(raw) : []);
    } catch {
      setLog([]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  return { log, isLoading, refresh: load };
}
