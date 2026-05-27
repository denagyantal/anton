# Story 8.3: Web Dashboard for Office Partners

Status: ready-for-dev

## Story

As an office partner or spouse managing the business from home,
I want to view the team's schedule, invoice statuses, and QuickBooks sync from my computer,
so that I can manage the office side without needing the mobile app.

## Acceptance Criteria

1. **[Login grants dashboard access]** Given an authorized team member navigates to the web dashboard URL, when they log in with their account credentials (email + password), then they are authenticated, a JWT access token is stored in localStorage as `fsm_token`, and they are redirected to `/dashboard/schedule`. (FR44, FR45, FR46)

2. **[Schedule view shows today's jobs for all team members]** Given the Schedule view is selected, when the dashboard loads, then the office partner sees today's schedule for all team members with job details, customer names, and times — grouped by assigned technician with an "Unassigned" section for unassigned events. (FR44)

3. **[Schedule view supports date navigation]** Given the Schedule view is active, when the office partner uses Previous Day / Next Day navigation buttons, then the schedule updates to show events for the selected date. (FR44)

4. **[Invoices view shows all invoices with status]** Given the Invoices view is selected, when the dashboard loads, then the office partner sees all invoices ordered by creation date (newest first) with: invoice number, customer name, total (formatted as dollars), amount paid, status badge, sent date, paid date, and due date. (FR45)

5. **[Invoice status filter works]** Given the Invoices view is active, when the office partner clicks a status filter tab (All / Draft / Sent / Viewed / Paid / Partially Paid / Overdue), then only invoices with that status are displayed. (FR45)

6. **[Sync Status view shows QuickBooks activity]** Given the Sync Status view is selected and QuickBooks is connected, when the dashboard loads, then the office partner sees: connection status header (connected company name), and a log of recent sync events with entity type, entity name/ID, status (Success / Failed / Duplicate Prevented), and timestamp. (FR46)

7. **[Retry sync works from dashboard]** Given a sync log entry has status "Failed", when the office partner clicks the "Retry" button on that row, then a `POST /api/v1/quickbooks/sync` request is sent with the entity details and the row updates to show "Retrying…" then the new status on completion. (FR46)

8. **[Dashboard is read-only]** Given any dashboard view, when the office partner views data, then there are no create, edit, or delete controls — the interface is purely read-only. (FR44, FR45, FR46)

9. **[Auth guard redirects unauthenticated users]** Given an unauthenticated user navigates directly to any `/dashboard/*` route, when the page loads, then they are redirected to the root login page (`/`).

10. **[Three API dashboard endpoints exist]** Given the API is running, when authenticated requests are made to `GET /api/v1/dashboard/schedule`, `GET /api/v1/dashboard/invoices`, and `GET /api/v1/dashboard/sync-status`, then each returns properly shaped JSON wrapped in `{ "data": ... }` with account-scoped data (RLS enforced via JWT-derived `accountId`). (FR44, FR45, FR46)

## Tasks / Subtasks

### Task 1: Create API dashboard route (AC: #2, #3, #4, #5, #6, #10)

- [ ] 1.1: Create `apps/api/src/routes/dashboard.ts`:

```typescript
import { Router, Request, Response, NextFunction } from 'express';
import { authMiddleware } from '../middleware/auth.js';
import { prisma } from '../config/prisma.js';
import { getConnectionStatus, getQbSyncLog } from '../services/quickbooks-service.js';
import { InvoiceStatus } from '@prisma/client';

const router = Router();
router.use(authMiddleware);

// GET /api/v1/dashboard/schedule?date=YYYY-MM-DD
router.get('/schedule', async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const accountId = req.user!.accountId;
    const dateStr = req.query['date'] as string | undefined;
    const targetDate = dateStr ? new Date(dateStr + 'T00:00:00Z') : new Date();
    const startOfDay = new Date(targetDate);
    startOfDay.setUTCHours(0, 0, 0, 0);
    const endOfDay = new Date(targetDate);
    endOfDay.setUTCHours(23, 59, 59, 999);

    const events = await prisma.scheduleEvent.findMany({
      where: {
        accountId,
        startTime: { gte: startOfDay, lte: endOfDay },
      },
      include: {
        job: {
          select: {
            status: true,
            customer: { select: { name: true } },
          },
        },
        assignedTo: { select: { name: true } },
      },
      orderBy: { startTime: 'asc' },
    });

    res.json({
      data: {
        date: startOfDay.toISOString().slice(0, 10),
        events: events.map((e) => ({
          id: e.id,
          title: e.title,
          startTime: e.startTime.toISOString(),
          endTime: e.endTime.toISOString(),
          allDay: e.allDay,
          jobStatus: e.job?.status ?? null,
          customerName: e.job?.customer?.name ?? null,
          assignedToName: e.assignedTo?.name ?? null,
        })),
      },
    });
  } catch (err) {
    next(err);
  }
});

// GET /api/v1/dashboard/invoices?status=PAID
router.get('/invoices', async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const accountId = req.user!.accountId;
    const statusParam = req.query['status'] as string | undefined;
    const validStatuses = Object.values(InvoiceStatus);
    const statusFilter =
      statusParam && validStatuses.includes(statusParam as InvoiceStatus)
        ? (statusParam as InvoiceStatus)
        : undefined;

    const invoices = await prisma.invoice.findMany({
      where: {
        accountId,
        ...(statusFilter ? { status: statusFilter } : {}),
      },
      include: {
        customer: { select: { name: true } },
      },
      orderBy: { createdAt: 'desc' },
      take: 200,
    });

    res.json({
      data: {
        invoices: invoices.map((inv) => ({
          id: inv.id,
          invoiceNumber: inv.invoiceNumber,
          customerName: inv.customer.name,
          status: inv.status,
          total: inv.total,
          amountPaid: inv.amountPaid,
          sentAt: inv.sentAt?.toISOString() ?? null,
          paidAt: inv.paidAt?.toISOString() ?? null,
          dueAt: inv.dueAt?.toISOString() ?? null,
          createdAt: inv.createdAt.toISOString(),
        })),
      },
    });
  } catch (err) {
    next(err);
  }
});

// GET /api/v1/dashboard/sync-status
router.get('/sync-status', async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const accountId = req.user!.accountId;
    const [connectionStatus, syncLog] = await Promise.all([
      getConnectionStatus(accountId),
      getQbSyncLog(accountId, 50),
    ]);
    res.json({ data: { ...connectionStatus, syncLog } });
  } catch (err) {
    next(err);
  }
});

export { router as dashboardRouter };
```

- [ ] 1.2: In `apps/api/src/index.ts`, add the dashboard router. Import it after the existing imports:

```typescript
import { dashboardRouter } from './routes/dashboard.js';
```

Register it after the quickbooks router (before the `/api/v1/me` route):

```typescript
// Dashboard routes (protected)
app.use('/api/v1/dashboard', dashboardRouter);
```

### Task 2: Create API dashboard tests (AC: #10)

- [ ] 2.1: Create `apps/api/src/routes/dashboard.test.ts`:

```typescript
import request from 'supertest';
import { app } from '../index.js';
import { prisma } from '../config/prisma.js';
import { vi } from 'vitest';

// Mock auth middleware — inject test user
vi.mock('../middleware/auth.js', () => ({
  authMiddleware: (req: any, _res: any, next: any) => {
    req.user = { id: 'user-1', email: 'test@example.com', accountId: 'account-1' };
    next();
  },
}));

// Mock quickbooks-service
vi.mock('../services/quickbooks-service.js', () => ({
  getConnectionStatus: vi.fn().mockResolvedValue({ connected: false, companyName: null }),
  getQbSyncLog: vi.fn().mockResolvedValue([]),
  generateAuthorizationUrl: vi.fn(),
  consumeOAuthState: vi.fn(),
  exchangeCodeForTokens: vi.fn(),
  disconnectQuickBooks: vi.fn(),
  retryEntitySync: vi.fn(),
}));

describe('GET /api/v1/dashboard/schedule', () => {
  beforeEach(async () => {
    await prisma.scheduleEvent.deleteMany({ where: { accountId: 'account-1' } });
  });

  it('returns 200 with events array for today', async () => {
    const res = await request(app).get('/api/v1/dashboard/schedule');
    expect(res.status).toBe(200);
    expect(res.body.data).toHaveProperty('events');
    expect(Array.isArray(res.body.data.events)).toBe(true);
    expect(res.body.data).toHaveProperty('date');
  });

  it('accepts a date query parameter', async () => {
    const res = await request(app).get('/api/v1/dashboard/schedule?date=2026-03-23');
    expect(res.status).toBe(200);
    expect(res.body.data.date).toBe('2026-03-23');
  });
});

describe('GET /api/v1/dashboard/invoices', () => {
  it('returns 200 with invoices array', async () => {
    const res = await request(app).get('/api/v1/dashboard/invoices');
    expect(res.status).toBe(200);
    expect(res.body.data).toHaveProperty('invoices');
    expect(Array.isArray(res.body.data.invoices)).toBe(true);
  });

  it('accepts a status query parameter', async () => {
    const res = await request(app).get('/api/v1/dashboard/invoices?status=PAID');
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body.data.invoices)).toBe(true);
  });

  it('ignores invalid status values', async () => {
    const res = await request(app).get('/api/v1/dashboard/invoices?status=INVALID');
    expect(res.status).toBe(200); // returns all invoices unfiltered
  });
});

describe('GET /api/v1/dashboard/sync-status', () => {
  it('returns 200 with connection status and syncLog', async () => {
    const res = await request(app).get('/api/v1/dashboard/sync-status');
    expect(res.status).toBe(200);
    expect(res.body.data).toHaveProperty('connected');
    expect(res.body.data).toHaveProperty('syncLog');
  });
});
```

### Task 3: Create web auth utilities (AC: #1, #9)

- [ ] 3.1: Create `apps/web/src/lib/auth.ts`:

```typescript
const TOKEN_KEY = 'fsm_token';

export function getToken(): string | null {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem(TOKEN_KEY);
}

export function setToken(token: string): void {
  localStorage.setItem(TOKEN_KEY, token);
}

export function clearToken(): void {
  localStorage.removeItem(TOKEN_KEY);
}

export function isLoggedIn(): boolean {
  return getToken() !== null;
}
```

- [ ] 3.2: Create `apps/web/src/lib/api-client.ts`:

```typescript
import { getToken } from './auth';

const API_BASE = process.env['NEXT_PUBLIC_API_URL'] ?? 'http://localhost:3001';

export class ApiError extends Error {
  constructor(public status: number, message: string) {
    super(message);
  }
}

export async function apiFetch<T>(
  endpoint: string,
  options: RequestInit = {},
): Promise<T> {
  const token = getToken();
  const res = await fetch(`${API_BASE}${endpoint}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...options.headers,
    },
  });

  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    throw new ApiError(
      res.status,
      (body as any)?.error?.message ?? `Request failed with status ${res.status}`,
    );
  }

  return res.json() as Promise<T>;
}

export async function apiGet<T>(endpoint: string): Promise<T> {
  return apiFetch<T>(endpoint);
}

export async function apiPost<T>(endpoint: string, body: unknown): Promise<T> {
  return apiFetch<T>(endpoint, {
    method: 'POST',
    body: JSON.stringify(body),
  });
}
```

### Task 4: Replace login page (AC: #1)

- [ ] 4.1: Replace `apps/web/src/app/page.tsx` with a login form. Read the file first (currently a placeholder), then replace it entirely:

```typescript
'use client';

import { useState, useEffect, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { setToken, isLoggedIn } from '../lib/auth';
import { apiPost, ApiError } from '../lib/api-client';

type LoginResponse = {
  data: {
    session: {
      accessToken: string;
      refreshToken: string;
      expiresAt: number;
    };
  };
};

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isLoggedIn()) {
      router.replace('/dashboard/schedule');
    }
  }, [router]);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const result = await apiPost<LoginResponse>('/api/v1/auth/login', { email, password });
      setToken(result.data.session.accessToken);
      router.replace('/dashboard/schedule');
    } catch (err) {
      setError(err instanceof ApiError ? err.message : 'Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="w-full max-w-sm bg-white rounded-xl shadow-md p-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Dashboard Login</h1>
        <p className="text-sm text-gray-500 mb-6">Field Service Management</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="you@example.com"
              autoComplete="email"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="••••••••"
              autoComplete="current-password"
            />
          </div>

          {error && (
            <p className="text-sm text-red-600 bg-red-50 rounded-lg px-3 py-2">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium text-sm hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {loading ? 'Signing in…' : 'Sign In'}
          </button>
        </form>
      </div>
    </main>
  );
}
```

### Task 5: Create nav sidebar component (AC: #8, #9)

- [ ] 5.1: Create `apps/web/src/components/nav-sidebar.tsx`:

```typescript
'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { clearToken } from '../lib/auth';

const navItems = [
  { href: '/dashboard/schedule', label: 'Schedule', icon: '📅' },
  { href: '/dashboard/invoices', label: 'Invoices', icon: '💳' },
  { href: '/dashboard/sync', label: 'QB Sync', icon: '🔄' },
];

export default function NavSidebar() {
  const pathname = usePathname();
  const router = useRouter();

  function handleLogout() {
    clearToken();
    router.replace('/');
  }

  return (
    <aside className="w-56 min-h-screen bg-gray-900 text-white flex flex-col">
      <div className="px-4 py-6 border-b border-gray-700">
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Field Service</p>
        <h2 className="text-base font-bold text-white mt-1">Office Dashboard</h2>
      </div>

      <nav className="flex-1 px-3 py-4 space-y-1">
        {navItems.map((item) => {
          const isActive = pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                isActive
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-300 hover:bg-gray-800 hover:text-white'
              }`}
            >
              <span>{item.icon}</span>
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="px-3 py-4 border-t border-gray-700">
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-gray-300 hover:bg-gray-800 hover:text-white transition-colors"
        >
          <span>🚪</span>
          Sign Out
        </button>
      </div>
    </aside>
  );
}
```

### Task 6: Create dashboard layout with auth guard (AC: #9)

- [ ] 6.1: Create `apps/web/src/app/dashboard/layout.tsx`:

```typescript
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { isLoggedIn } from '../../lib/auth';
import NavSidebar from '../../components/nav-sidebar';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  useEffect(() => {
    if (!isLoggedIn()) {
      router.replace('/');
    }
  }, [router]);

  return (
    <div className="flex min-h-screen bg-gray-50">
      <NavSidebar />
      <main className="flex-1 overflow-auto">{children}</main>
    </div>
  );
}
```

### Task 7: Create schedule display component and page (AC: #2, #3)

- [ ] 7.1: Create `apps/web/src/components/schedule-calendar.tsx`:

```typescript
'use client';

type ScheduleEvent = {
  id: string;
  title: string;
  startTime: string;
  endTime: string;
  allDay: boolean;
  jobStatus: string | null;
  customerName: string | null;
  assignedToName: string | null;
};

const STATUS_COLORS: Record<string, string> = {
  SCHEDULED: 'bg-blue-100 text-blue-800',
  IN_PROGRESS: 'bg-yellow-100 text-yellow-800',
  COMPLETE: 'bg-green-100 text-green-800',
  INVOICED: 'bg-gray-100 text-gray-700',
  QUOTED: 'bg-purple-100 text-purple-800',
};

function formatTime(iso: string): string {
  return new Date(iso).toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  });
}

interface ScheduleCalendarProps {
  events: ScheduleEvent[];
  date: string;
}

export default function ScheduleCalendar({ events, date }: ScheduleCalendarProps) {
  const grouped = events.reduce<Record<string, ScheduleEvent[]>>((acc, event) => {
    const key = event.assignedToName ?? 'Unassigned';
    if (!acc[key]) acc[key] = [];
    acc[key]!.push(event);
    return acc;
  }, {});

  const sortedGroups = Object.entries(grouped).sort(([a], [b]) => {
    if (a === 'Unassigned') return 1;
    if (b === 'Unassigned') return -1;
    return a.localeCompare(b);
  });

  if (events.length === 0) {
    return (
      <div className="text-center py-16 text-gray-400">
        <p className="text-lg font-medium">No events scheduled</p>
        <p className="text-sm mt-1">
          {new Date(date + 'T12:00:00').toLocaleDateString('en-US', {
            weekday: 'long',
            month: 'long',
            day: 'numeric',
          })}
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {sortedGroups.map(([techName, techEvents]) => (
        <div key={techName}>
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
            {techName}
            <span className="ml-2 font-normal normal-case">
              — {techEvents.length} job{techEvents.length !== 1 ? 's' : ''}
            </span>
          </h3>
          <div className="space-y-2">
            {techEvents.map((event) => (
              <div
                key={event.id}
                className="bg-white border border-gray-200 rounded-lg px-4 py-3 flex items-start gap-4"
              >
                <div className="min-w-[80px] text-sm text-gray-500">
                  {event.allDay ? (
                    <span>All day</span>
                  ) : (
                    <>
                      <p>{formatTime(event.startTime)}</p>
                      <p className="text-xs">{formatTime(event.endTime)}</p>
                    </>
                  )}
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-900 text-sm">{event.title}</p>
                  {event.customerName && (
                    <p className="text-xs text-gray-500 mt-0.5">{event.customerName}</p>
                  )}
                </div>
                {event.jobStatus && (
                  <span
                    className={`text-xs font-medium px-2 py-1 rounded-full ${
                      STATUS_COLORS[event.jobStatus] ?? 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    {event.jobStatus.replace('_', ' ')}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
```

- [ ] 7.2: Create `apps/web/src/app/dashboard/schedule/page.tsx`:

```typescript
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
```

### Task 8: Create invoice table component and page (AC: #4, #5)

- [ ] 8.1: Create `apps/web/src/components/invoice-table.tsx`:

```typescript
'use client';

type Invoice = {
  id: string;
  invoiceNumber: string;
  customerName: string;
  status: string;
  total: number;
  amountPaid: number;
  sentAt: string | null;
  paidAt: string | null;
  dueAt: string | null;
};

const STATUS_COLORS: Record<string, string> = {
  DRAFT: 'bg-gray-100 text-gray-600',
  SENT: 'bg-blue-100 text-blue-700',
  VIEWED: 'bg-purple-100 text-purple-700',
  PAID: 'bg-green-100 text-green-700',
  PARTIALLY_PAID: 'bg-yellow-100 text-yellow-700',
  OVERDUE: 'bg-red-100 text-red-700',
};

function formatMoney(cents: number): string {
  return `$${(cents / 100).toFixed(2)}`;
}

function formatDate(iso: string | null): string {
  if (!iso) return '—';
  return new Date(iso).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

function formatStatus(status: string): string {
  return status.replace(/_/g, ' ');
}

interface InvoiceTableProps {
  invoices: Invoice[];
}

export default function InvoiceTable({ invoices }: InvoiceTableProps) {
  if (invoices.length === 0) {
    return (
      <div className="text-center py-16 text-gray-400">
        <p className="text-lg font-medium">No invoices found</p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-gray-200">
            <th className="text-left py-3 px-4 font-medium text-gray-500">Invoice #</th>
            <th className="text-left py-3 px-4 font-medium text-gray-500">Customer</th>
            <th className="text-right py-3 px-4 font-medium text-gray-500">Total</th>
            <th className="text-right py-3 px-4 font-medium text-gray-500">Paid</th>
            <th className="text-left py-3 px-4 font-medium text-gray-500">Status</th>
            <th className="text-left py-3 px-4 font-medium text-gray-500">Sent</th>
            <th className="text-left py-3 px-4 font-medium text-gray-500">Paid On</th>
            <th className="text-left py-3 px-4 font-medium text-gray-500">Due</th>
          </tr>
        </thead>
        <tbody>
          {invoices.map((inv) => (
            <tr key={inv.id} className="border-b border-gray-100 hover:bg-gray-50">
              <td className="py-3 px-4 font-mono text-gray-700">{inv.invoiceNumber}</td>
              <td className="py-3 px-4 text-gray-900">{inv.customerName}</td>
              <td className="py-3 px-4 text-right font-medium text-gray-900">
                {formatMoney(inv.total)}
              </td>
              <td className="py-3 px-4 text-right text-gray-600">
                {formatMoney(inv.amountPaid)}
              </td>
              <td className="py-3 px-4">
                <span
                  className={`inline-flex px-2 py-0.5 rounded-full text-xs font-medium ${
                    STATUS_COLORS[inv.status] ?? 'bg-gray-100 text-gray-600'
                  }`}
                >
                  {formatStatus(inv.status)}
                </span>
              </td>
              <td className="py-3 px-4 text-gray-500">{formatDate(inv.sentAt)}</td>
              <td className="py-3 px-4 text-gray-500">{formatDate(inv.paidAt)}</td>
              <td className="py-3 px-4 text-gray-500">{formatDate(inv.dueAt)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
```

- [ ] 8.2: Create `apps/web/src/app/dashboard/invoices/page.tsx`:

```typescript
'use client';

import { useState, useEffect, useCallback } from 'react';
import { apiGet, ApiError } from '../../../lib/api-client';
import { clearToken } from '../../../lib/auth';
import { useRouter } from 'next/navigation';
import InvoiceTable from '../../../components/invoice-table';

type Invoice = {
  id: string;
  invoiceNumber: string;
  customerName: string;
  status: string;
  total: number;
  amountPaid: number;
  sentAt: string | null;
  paidAt: string | null;
  dueAt: string | null;
};

type InvoicesResponse = {
  data: { invoices: Invoice[] };
};

const STATUS_FILTERS = ['All', 'DRAFT', 'SENT', 'VIEWED', 'PAID', 'PARTIALLY_PAID', 'OVERDUE'];

export default function InvoicesPage() {
  const router = useRouter();
  const [activeFilter, setActiveFilter] = useState('All');
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const loadInvoices = useCallback(
    async (status: string) => {
      setLoading(true);
      setError('');
      try {
        const qs = status === 'All' ? '' : `?status=${status}`;
        const result = await apiGet<InvoicesResponse>(`/api/v1/dashboard/invoices${qs}`);
        setInvoices(result.data.invoices);
      } catch (err) {
        if (err instanceof ApiError && err.status === 401) {
          clearToken();
          router.replace('/');
        } else {
          setError('Failed to load invoices.');
        }
      } finally {
        setLoading(false);
      }
    },
    [router],
  );

  useEffect(() => {
    loadInvoices(activeFilter);
  }, [activeFilter, loadInvoices]);

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Invoices</h1>
        <p className="text-sm text-gray-500 mt-1">
          {loading ? 'Loading…' : `${invoices.length} invoice${invoices.length !== 1 ? 's' : ''}`}
        </p>
      </div>

      {/* Status filter tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        {STATUS_FILTERS.map((status) => (
          <button
            key={status}
            onClick={() => setActiveFilter(status)}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
              activeFilter === status
                ? 'bg-blue-600 text-white'
                : 'bg-white border border-gray-300 text-gray-600 hover:bg-gray-50'
            }`}
          >
            {status === 'All' ? 'All' : status.replace(/_/g, ' ')}
          </button>
        ))}
      </div>

      {loading && (
        <div className="space-y-2">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="h-12 bg-gray-100 rounded animate-pulse" />
          ))}
        </div>
      )}

      {!loading && error && (
        <p className="text-red-600 bg-red-50 rounded-lg px-4 py-3 text-sm">{error}</p>
      )}

      {!loading && !error && (
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <InvoiceTable invoices={invoices} />
        </div>
      )}
    </div>
  );
}
```

### Task 9: Create sync status component and page (AC: #6, #7)

- [ ] 9.1: Create `apps/web/src/components/sync-status-list.tsx`:

```typescript
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
```

- [ ] 9.2: Create `apps/web/src/app/dashboard/sync/page.tsx`:

```typescript
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
```

## Dev Notes

### Foundation from Previous Stories

**Story 8.1 and 8.2 established:**
- `team_members` table in PostgreSQL with `assigned_to_id` on `jobs`
- Team member auth flow: all team members (OWNER and MEMBER) have valid Supabase JWTs
- `POST /api/v1/auth/login` returns `{ data: { session: { accessToken, refreshToken, expiresAt } } }`
- Auth middleware reads `Authorization: Bearer <token>` and populates `req.user.accountId`
- Existing web pages (`(public)/quote/[token]`, `(public)/pay/[token]`) demonstrate the web app patterns

### Web App Is Next.js 15 + React 19 (App Router)

The web app at `apps/web/` uses:
- Next.js 15.1 (`"next": "^15.1.0"`)
- React 19 (`"react": "^19.0.0"`)
- Tailwind CSS 3.4 (`"tailwindcss": "^3.4.0"`)
- TypeScript 5.6
- `@field-service/shared` already in dependencies

The App Router uses `async` server components by default. All dashboard pages that access localStorage **must** start with `'use client'` — localStorage is not available in server components. This is why the dashboard pages and layout use `'use client'`.

The login page must also be `'use client'` because it uses `useState`, `useEffect`, and `useRouter`.

**There is NO test framework configured for the web package** (`"test": "echo \"No tests yet\""`). Do not create web component tests — focus only on the API route tests in `dashboard.test.ts`.

### Auth Pattern: localStorage Token

The web dashboard uses localStorage for token storage:
- Token key: `fsm_token`
- Set on successful login: `setToken(result.data.session.accessToken)`
- Read on API calls: `getToken()` in `api-client.ts`
- Cleared on logout or 401: `clearToken()` then `router.replace('/')`

Dashboard layout checks on mount — if no token, redirects to `/`. This is a client-side guard (not middleware-based), which is acceptable for a MVP read-only dashboard.

**Avoid `useSearchParams` in layout:** Next.js 15 requires `useSearchParams` to be wrapped in `Suspense`. The auth guard in `dashboard/layout.tsx` only uses `useRouter`, so this is fine.

### API Dashboard Route Prisma Patterns

The dashboard route imports match existing patterns in the API:

```typescript
import { prisma } from '../config/prisma.js';      // from other routes
import { InvoiceStatus } from '@prisma/client';     // for enum validation
import { getConnectionStatus, getQbSyncLog } from '../services/quickbooks-service.js'; // re-use QB service
```

The `getConnectionStatus` and `getQbSyncLog` functions are already exported from `quickbooks-service.ts` — no new service code needed. The dashboard sync-status endpoint is a thin wrapper over the existing QB status endpoint.

### Prisma Query: Schedule Events with Relations

The schedule query uses `include` to join related data:
```typescript
include: {
  job: { select: { status: true, customer: { select: { name: true } } } },
  assignedTo: { select: { name: true } },
}
```

`assignedTo` maps to the `TeamMember` relation on `ScheduleEvent` via the `assigned_to_id` FK. The Prisma model relation is named `assignedTo` (with capital T) in `ScheduleEvent`:
```
assignedTo TeamMember? @relation("AssignedEvents", fields: [assignedToId], references: [id])
```

The `job` relation is nullable (`job Job?`), so `e.job?.status` and `e.job?.customer?.name` handle null safely.

### Prisma Query: Invoices with Customer Name

```typescript
include: {
  customer: { select: { name: true } },
}
```

All invoices have a non-nullable `customerId`, so `inv.customer.name` is always available. The `statusFilter` guards against invalid enum values by checking against `Object.values(InvoiceStatus)` before passing to Prisma — prevents a Prisma validation error on invalid status strings.

### `NEXT_PUBLIC_API_URL` env var

The web app's `.env.example` already defines `NEXT_PUBLIC_API_URL=http://localhost:3001`. The `api-client.ts` reads this:
```typescript
const API_BASE = process.env['NEXT_PUBLIC_API_URL'] ?? 'http://localhost:3001';
```

`NEXT_PUBLIC_` prefix makes it available to client-side code in Next.js. Without this prefix, the variable would only be available server-side (not in `'use client'` components).

### `apps/api/src/index.ts` Modification — Exact Location

Add the import after the `teamMembersRouter` import:
```typescript
import { teamMembersRouter } from './routes/team-members.js';
// ADD HERE:
import { dashboardRouter } from './routes/dashboard.js';
```

Add the route registration after the QuickBooks router line (`app.use('/api/v1/quickbooks', quickbooksRouter);`) and before the `/api/v1/me` route:
```typescript
app.use('/api/v1/quickbooks', quickbooksRouter);
// ADD HERE:
app.use('/api/v1/dashboard', dashboardRouter);
```

### Component File Placement

Per architecture, web components live at `apps/web/src/components/`:
- `nav-sidebar.tsx` ✓ (architecture reference)
- `schedule-calendar.tsx` ✓ (architecture reference)
- `invoice-table.tsx` ✓ (architecture reference)
- `sync-status-list.tsx` ✓ (architecture reference)

Note: `SyncStatusList` imports from `../lib/api-client` (relative to `src/components/`) because it handles the retry POST call internally. This is acceptable since it's not pure presentational — it has an action (retry). If strict separation is desired, the retry callback could be passed in from the page. The implementation above passes `onRetryComplete` callback and does the API call inside the component for simplicity.

### ESM `.js` Extension in API Imports

The API server uses ESM modules. All imports in `dashboard.ts` must use `.js` extensions:
```typescript
import { authMiddleware } from '../middleware/auth.js';
import { prisma } from '../config/prisma.js';
import { getConnectionStatus, getQbSyncLog } from '../services/quickbooks-service.js';
```

Mobile app imports do NOT use `.js` extensions. This distinction is consistent with all other API route files.

### Tailwind CSS Already Configured

The web app has `postcss.config.js` and `tailwind.config.js` — Tailwind is already working. The existing quote page (`apps/web/src/app/(public)/quote/[token]/page.tsx`) uses Tailwind classes throughout, confirming it works. Do not modify the Tailwind config.

### Read-Only Dashboard — No Forms on Dashboard Pages

Per AC #8, dashboard views are read-only. The only form on the web is the login page. The only action on dashboard views is the QuickBooks retry button (which triggers a re-sync, not a data mutation visible to the office partner). There are no invoice edits, no job creation, no schedule modifications from the web.

### Do NOT Modify

- `apps/mobile/**` — this story is web + API only
- `apps/web/src/app/(public)/**` — public customer-facing pages stay unchanged
- `apps/api/prisma/schema.prisma` — no schema changes needed
- `apps/api/src/services/quickbooks-service.ts` — re-use existing functions, no modifications
- `apps/web/tailwind.config.js`, `postcss.config.js` — already configured
- `apps/web/next.config.js` — no changes needed
- `apps/web/package.json` — no new dependencies needed (no supabase-js, no auth library)

### Project Structure Notes

| Action | File |
|--------|------|
| Create | `apps/api/src/routes/dashboard.ts` — new dashboard API routes |
| Create | `apps/api/src/routes/dashboard.test.ts` — API route tests |
| Modify | `apps/api/src/index.ts` — register dashboardRouter |
| Modify | `apps/web/src/app/page.tsx` — replace placeholder with login form |
| Create | `apps/web/src/app/dashboard/layout.tsx` — dashboard layout with auth guard + nav |
| Create | `apps/web/src/app/dashboard/schedule/page.tsx` — schedule view |
| Create | `apps/web/src/app/dashboard/invoices/page.tsx` — invoice list with filter |
| Create | `apps/web/src/app/dashboard/sync/page.tsx` — QB sync status |
| Create | `apps/web/src/lib/auth.ts` — token helpers |
| Create | `apps/web/src/lib/api-client.ts` — fetch wrapper with auth |
| Create | `apps/web/src/components/nav-sidebar.tsx` — sidebar navigation |
| Create | `apps/web/src/components/schedule-calendar.tsx` — schedule display |
| Create | `apps/web/src/components/invoice-table.tsx` — invoice table |
| Create | `apps/web/src/components/sync-status-list.tsx` — sync log table with retry |

### References

- [Source: epics.md#Story 8.3] — User story statement, ACs: FR44, FR45, FR46; read-only constraint
- [Source: architecture.md#API & Communication Patterns] — Dashboard endpoints: `GET /api/v1/dashboard/schedule`, `GET /api/v1/dashboard/invoices`, `GET /api/v1/dashboard/sync-status`
- [Source: architecture.md#Project Structure] — Web files: `apps/web/src/app/dashboard/`, `apps/web/src/components/schedule-calendar.tsx`, `invoice-table.tsx`, `sync-status-list.tsx`, `nav-sidebar.tsx`, `lib/api-client.ts`, `lib/auth.ts`
- [Source: architecture.md#Authentication & Security] — JWT-based auth, same tokens as mobile; web uses standard REST with Bearer token
- [Source: architecture.md#Enforcement Guidelines] — "All API responses wrapped in `{ data: ... }`"; money stored as integer cents
- [Source: apps/api/src/routes/quickbooks.ts] — `getConnectionStatus` and `getQbSyncLog` already exported from quickbooks-service; sync-status dashboard wraps this
- [Source: apps/api/src/routes/auth.ts] — `POST /api/v1/auth/login` response shape: `{ data: { session: { accessToken, refreshToken, expiresAt } } }`
- [Source: apps/api/src/middleware/auth.ts] — Bearer token auth pattern: `Authorization: Bearer <token>`
- [Source: apps/api/prisma/schema.prisma] — `ScheduleEvent` (with `assignedTo` and `job` relations), `Invoice` (with `customer` relation), `InvoiceStatus` enum
- [Source: apps/web/.env.example] — `NEXT_PUBLIC_API_URL` is the client-side env var
- [Source: apps/web/src/app/(public)/quote/[token]/page.tsx] — existing Next.js 15 App Router pattern; App Router `params` is `Promise<{token: string}>`
- [Source: stories/8-2-dispatch-board-and-job-assignment.md] — confirmed team_members and assigned_to_id are in place; no new schema needed

## Dev Agent Record

### Agent Model Used

claude-sonnet-4-6

### Debug Log References

### Completion Notes List

### File List
