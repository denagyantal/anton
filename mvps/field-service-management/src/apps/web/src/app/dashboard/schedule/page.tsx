'use client';

import { useState, useEffect, useCallback } from 'react';
import { apiGet, ApiError } from '../../../lib/api-client';
import { clearToken } from '../../../lib/auth';
import { useRouter } from 'next/navigation';
import ScheduleCalendar from '../../../components/schedule-calendar';

type ScheduleResponse = {
  data: {
    date: string;
    events: Array<{
      id: string;
      title: string;
      startTime: string;
      endTime: string;
      allDay: boolean;
      jobStatus: string | null;
      customerName: string | null;
      assignedToName: string | null;
    }>;
  };
};

function todayStr(): string {
  return new Date().toISOString().slice(0, 10);
}

function offsetDate(dateStr: string, days: number): string {
  const d = new Date(dateStr + 'T12:00:00');
  d.setDate(d.getDate() + days);
  return d.toISOString().slice(0, 10);
}

function formatDisplayDate(dateStr: string): string {
  return new Date(dateStr + 'T12:00:00').toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}

export default function SchedulePage() {
  const router = useRouter();
  const [date, setDate] = useState(todayStr);
  const [data, setData] = useState<ScheduleResponse['data'] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const loadSchedule = useCallback(
    async (d: string) => {
      setLoading(true);
      setError('');
      try {
        const result = await apiGet<ScheduleResponse>(`/api/v1/dashboard/schedule?date=${d}`);
        setData(result.data);
      } catch (err) {
        if (err instanceof ApiError && err.status === 401) {
          clearToken();
          router.replace('/');
        } else {
          setError('Failed to load schedule.');
        }
      } finally {
        setLoading(false);
      }
    },
    [router],
  );

  useEffect(() => {
    loadSchedule(date);
  }, [date, loadSchedule]);

  return (
    <div className="p-6 max-w-4xl">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Schedule</h1>
          <p className="text-sm text-gray-500 mt-1">{formatDisplayDate(date)}</p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setDate((d) => offsetDate(d, -1))}
            className="px-3 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50"
          >
            ← Prev
          </button>
          <button
            onClick={() => setDate(todayStr())}
            className="px-3 py-2 border border-blue-500 text-blue-600 rounded-lg text-sm font-medium hover:bg-blue-50"
          >
            Today
          </button>
          <button
            onClick={() => setDate((d) => offsetDate(d, 1))}
            className="px-3 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50"
          >
            Next →
          </button>
        </div>
      </div>

      {loading && (
        <div className="space-y-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-16 bg-gray-100 rounded-lg animate-pulse" />
          ))}
        </div>
      )}

      {!loading && error && (
        <p className="text-red-600 bg-red-50 rounded-lg px-4 py-3 text-sm">{error}</p>
      )}

      {!loading && !error && data && (
        <ScheduleCalendar events={data.events} date={data.date} />
      )}
    </div>
  );
}
