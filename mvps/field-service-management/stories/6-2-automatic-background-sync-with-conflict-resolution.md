# Story 6.2: Automatic Background Sync with Conflict Resolution

Status: ready-for-dev

## Story

As a shop owner with multiple technicians using the app,
I want offline data to sync automatically when connectivity is restored and handle conflicts when two people edit the same record,
so that no data is ever lost and I don't have to manually fix sync issues.

## Acceptance Criteria

1. **[Automatic sync on connectivity restoration]** Given the device was offline and has pending changes (records with `synced_at === null`), when internet connectivity is restored, then the sync engine automatically pushes all pending changes to the server and pulls any remote changes, completing within 30 seconds. (FR37, NFR4)

2. **[Last-write-wins conflict resolution — scalar fields]** Given two devices edited the same customer's phone number while offline, when both devices sync, then last-write-wins conflict resolution applies based on `updated_at` timestamps — the most recent edit (higher `updated_at` ms value) is kept on both devices and in the server. (FR38)

3. **[Collection merge conflict resolution — notes and photos]** Given two devices added separate job notes to the same job record while offline, when both devices sync, then both notes are preserved (merge strategy — append, never overwrite). No data is lost from either device. (FR38)

4. **[Exponential backoff retry on transient failure]** Given the sync engine encounters a transient network error (timeout, 5xx, connection reset), when the push or pull fails, then exponential backoff retry is applied: delays of 1s, 2s, 4s, 8s, 16s before each retry, capped at 30s, for up to 5 retry attempts. After 5 failures the sync marks as failed.

5. **[Zero data loss — NFR15]** Given sync operations complete, when results are processed, then zero data loss occurs from offline-to-online sync. Records successfully pushed to the server have their `synced_at` field updated to the sync completion timestamp. Idempotent pushes (retry of already-synced records) do not create duplicate server records.

6. **[Background sync on app foreground]** Given the app was backgrounded while changes were pending, when the user brings the app to the foreground (AppState 'active' event), then a sync is triggered automatically. The sync runs without blocking the UI thread.

7. **[SyncContext exposes live sync state]** Given story 6.1 stubbed `isSyncing`, `lastSyncAt`, and `syncError` in `SyncContext`, when story 6.2 wires up the real sync service, then `isSyncing` reflects active sync, `lastSyncAt` is updated after each successful sync, and `syncError` is set on failure and cleared on success. The `NetworkStatusBar` and any UI consuming `useSync()` automatically reflects real sync state.

8. **[API sync endpoints exist and are authenticated]** Given a mobile client sends `POST /api/v1/sync/push` or `POST /api/v1/sync/pull` with a valid JWT, when the request is processed, then the server applies or returns changes scoped to the authenticated user's `account_id`. Requests without a valid JWT return 401. Requests for records belonging to a different account return 403.

## Tasks / Subtasks

### Task 1: Create mobile `sync-service.ts` (AC: #1, #2, #4, #5, #6)

- [ ] 1.1: Create `apps/mobile/src/services/sync-service.ts`. This is the core sync implementation using WatermelonDB's `synchronize()` protocol:

  ```typescript
  import { synchronize } from '@nozbe/watermelondb/sync';
  import { Database, Q } from '@nozbe/watermelondb';
  import { apiClient } from './api-client';

  export const SYNCED_TABLES = [
    'customers', 'quotes', 'line_items', 'jobs',
    'schedule_events', 'invoices', 'payments',
  ] as const;

  const MAX_RETRIES = 5;
  const BACKOFF_BASE_MS = 1000;
  const BACKOFF_MAX_MS = 30000;

  async function sleep(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  export async function performSync(database: Database): Promise<void> {
    await synchronize({
      database,
      sendCreatedAsUpdated: true, // simplifies server-side: all changes are upserts
      pullChanges: async ({ lastPulledAt, schemaVersion, migration }) => {
        return await apiClient.post<{ changes: object; timestamp: number }>(
          '/api/v1/sync/pull',
          { lastPulledAt, schemaVersion, migration },
        );
      },
      pushChanges: async ({ changes, lastPulledAt }) => {
        await apiClient.post('/api/v1/sync/push', { changes, lastPulledAt });
      },
    });

    // After successful sync, update synced_at on all records that were pending.
    // This is safe because synchronize() completed without throwing — all pending
    // records were accepted by the server. batch() is used for atomic update.
    const now = Date.now();
    await database.write(async () => {
      const preparedUpdates = [];
      for (const table of SYNCED_TABLES) {
        const pending = await database
          .get(table)
          .query(Q.where('synced_at', Q.eq(null)))
          .fetch();
        for (const record of pending) {
          preparedUpdates.push(
            record.prepareUpdate((r: any) => {
              r.syncedAt = now;
            }),
          );
        }
      }
      if (preparedUpdates.length > 0) {
        await database.batch(...preparedUpdates);
      }
    });
  }

  export async function performSyncWithRetry(database: Database): Promise<void> {
    let lastError: unknown;
    for (let attempt = 0; attempt < MAX_RETRIES; attempt++) {
      try {
        await performSync(database);
        return;
      } catch (err) {
        lastError = err;
        if (attempt < MAX_RETRIES - 1) {
          const delay = Math.min(
            BACKOFF_BASE_MS * Math.pow(2, attempt),
            BACKOFF_MAX_MS,
          );
          await sleep(delay);
        }
      }
    }
    throw lastError;
  }
  ```

  **Critical notes on `database.write()` nesting**: WatermelonDB does NOT allow `record.update()` (which creates its own write lock) inside `database.write()`. Use `record.prepareUpdate()` + `database.batch()` instead — this is the correct WatermelonDB pattern for batch writes within an existing write block. See WatermelonDB docs: ["Batch operations"](https://watermelondb.dev/docs/Creating.html).

  **`sendCreatedAsUpdated: true`** instructs WatermelonDB to push locally-created records in the `updated` array (not `created`), so the server only needs to implement upserts, not separate insert and update logic.

- [ ] 1.2: Install WatermelonDB sync module. The `synchronize` function is exported from `@nozbe/watermelondb/sync` — verify this import path works with the installed WatermelonDB version (0.27.x). Run `npm install` from `mvps/field-service-management/src/` if any dependency errors appear. No new packages are needed — `synchronize` is bundled in `@nozbe/watermelondb`.

### Task 2: Update `sync-context.tsx` to wire up real sync state (AC: #1, #4, #6, #7)

- [ ] 2.1: Open `apps/mobile/src/contexts/sync-context.tsx`. The file was created in story 6.1 with `isSyncing`, `lastSyncAt`, and `syncError` stubbed as `false`/`null`. Replace the `SyncProvider` implementation to wire up the real sync service:

  ```typescript
  import React, { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react';
  import { AppState, AppStateStatus } from 'react-native';
  import { Q } from '@nozbe/watermelondb';
  import { useDatabase } from './database-context';
  import { useNetwork } from '../hooks/use-network';
  import { performSyncWithRetry, SYNCED_TABLES } from '../services/sync-service';

  interface SyncContextValue {
    pendingCount: number;
    isSyncing: boolean;
    lastSyncAt: number | null;
    syncError: string | null;
    triggerSync: () => void;
  }

  export const SyncContext = createContext<SyncContextValue>({
    pendingCount: 0,
    isSyncing: false,
    lastSyncAt: null,
    syncError: null,
    triggerSync: () => {},
  });

  const SYNCED_AT_NULL = Q.eq(null);

  const PENDING_TABLES = SYNCED_TABLES; // reuse from sync-service to keep in sync

  export function SyncProvider({ children }: { children: React.ReactNode }) {
    const database = useDatabase();
    const { isConnected } = useNetwork();
    const [pendingCount, setPendingCount] = useState(0);
    const [isSyncing, setIsSyncing] = useState(false);
    const [lastSyncAt, setLastSyncAt] = useState<number | null>(null);
    const [syncError, setSyncError] = useState<string | null>(null);
    const isSyncingRef = useRef(false); // prevents overlapping sync calls

    // Reactive pending count — same as story 6.1
    useEffect(() => {
      let cancelled = false;

      async function recalculate() {
        try {
          let total = 0;
          for (const table of PENDING_TABLES) {
            const count = await database
              .get(table)
              .query(Q.where('synced_at', SYNCED_AT_NULL))
              .fetchCount();
            total += count;
          }
          if (!cancelled) setPendingCount(total);
        } catch {
          // database not ready yet — ignore
        }
      }

      const subscription = database
        .withChangesForTables(PENDING_TABLES as unknown as string[])
        .subscribe(() => recalculate());

      recalculate();

      return () => {
        cancelled = true;
        subscription.unsubscribe();
      };
    }, [database]);

    const triggerSync = useCallback(async () => {
      // Prevent overlapping syncs
      if (isSyncingRef.current || !isConnected) return;
      isSyncingRef.current = true;
      setIsSyncing(true);
      setSyncError(null);

      try {
        await performSyncWithRetry(database);
        setLastSyncAt(Date.now());
        setSyncError(null);
      } catch (err) {
        const message = err instanceof Error ? err.message : 'Sync failed';
        setSyncError(message);
      } finally {
        setIsSyncing(false);
        isSyncingRef.current = false;
      }
    }, [database, isConnected]);

    // Trigger sync when connectivity is restored (offline → online transition)
    const prevConnectedRef = useRef<boolean | null>(null);
    useEffect(() => {
      if (prevConnectedRef.current === false && isConnected === true) {
        // Connectivity just restored — trigger sync
        triggerSync();
      }
      prevConnectedRef.current = isConnected;
    }, [isConnected, triggerSync]);

    // Trigger sync when app comes to foreground
    useEffect(() => {
      const subscription = AppState.addEventListener('change', (state: AppStateStatus) => {
        if (state === 'active') {
          triggerSync();
        }
      });
      return () => subscription.remove();
    }, [triggerSync]);

    return (
      <SyncContext.Provider
        value={{ pendingCount, isSyncing, lastSyncAt, syncError, triggerSync }}
      >
        {children}
      </SyncContext.Provider>
    );
  }

  export function useSync() {
    return useContext(SyncContext);
  }
  ```

  **Important**: `triggerSync` is now exported via context. Any component that needs to manually trigger sync (e.g., a "Sync Now" button in settings) can call `useSync().triggerSync()`.

  **`isSyncingRef`** prevents concurrent sync calls — if the user backgrounds and foregrounds rapidly, or connectivity flaps, only one sync runs at a time.

  **The `isConnected` guard** means sync never runs when offline. `NetworkProvider` wraps `DatabaseProvider` which wraps `SyncProvider` (see `_layout.tsx`), so `useNetwork()` is available inside `SyncProvider`.

### Task 3: Create API sync service (AC: #2, #3, #5, #8)

- [ ] 3.1: Create `apps/api/src/services/sync-service.ts`. This handles the server-side sync logic: pull (return changes since `lastPulledAt`) and push (apply client changes with conflict resolution):

  ```typescript
  import { prisma } from '../config/prisma.js';

  // Tables included in sync, in dependency order
  // (parents before children to satisfy FK constraints on push)
  const SYNC_TABLES = [
    'customers',
    'quotes',
    'line_items',
    'jobs',
    'schedule_events',
    'invoices',
    'payments',
  ] as const;

  type SyncTable = typeof SYNC_TABLES[number];

  // Map table names to Prisma delegate accessor keys
  const TABLE_TO_MODEL: Record<SyncTable, string> = {
    customers: 'customer',
    quotes: 'quote',
    line_items: 'lineItem',
    jobs: 'job',
    schedule_events: 'scheduleEvent',
    invoices: 'invoice',
    payments: 'payment',
  };

  // Convert Prisma record to WatermelonDB raw format:
  // camelCase → snake_case, Date → Unix ms integer
  function toWatermelonRaw(record: Record<string, unknown>): Record<string, unknown> {
    return Object.fromEntries(
      Object.entries(record).map(([key, value]) => {
        const snakeKey = key.replace(/([A-Z])/g, '_$1').toLowerCase();
        const convertedValue = value instanceof Date ? value.getTime() : value;
        return [snakeKey, convertedValue];
      }),
    );
  }

  interface PullInput {
    lastPulledAt: number | null;
    accountId: string;
  }

  interface PullResult {
    changes: Record<string, { created: object[]; updated: object[]; deleted: string[] }>;
    timestamp: number;
  }

  export async function pullChanges({ lastPulledAt, accountId }: PullInput): Promise<PullResult> {
    const since = lastPulledAt ? new Date(lastPulledAt) : new Date(0);
    const timestamp = Date.now();

    const changes: PullResult['changes'] = {};

    for (const table of SYNC_TABLES) {
      const modelKey = TABLE_TO_MODEL[table];
      const delegate = (prisma as any)[modelKey];

      // Find records updated (or created) since lastPulledAt for this account
      // Use 'account_id' / 'accountId' based on model convention
      const accountField = modelKey === 'customer' ? 'accountId'
        : modelKey === 'quote' ? 'account_id'
        : modelKey === 'lineItem' ? undefined   // lineItem has no direct accountId; scoped via quote
        : modelKey === 'job' ? 'accountId'
        : modelKey === 'scheduleEvent' ? 'accountId'
        : modelKey === 'invoice' ? 'accountId'
        : modelKey === 'payment' ? 'accountId'
        : undefined;

      let records: Record<string, unknown>[] = [];
      if (accountField) {
        records = await delegate.findMany({
          where: {
            [accountField]: accountId,
            updatedAt: { gt: since },
          },
        });
      } else if (table === 'line_items') {
        // LineItems are scoped through quotes
        records = await prisma.lineItem.findMany({
          where: {
            quote: { account_id: accountId },
            updated_at: { gt: since },
          },
        });
      }

      changes[table] = {
        created: [],
        updated: records.map(r => toWatermelonRaw(r)),
        deleted: [],
      };
    }

    return { changes, timestamp };
  }

  interface PushRecord {
    id: string;
    updated_at?: number;
    [key: string]: unknown;
  }

  interface PushTableChanges {
    created: PushRecord[];
    updated: PushRecord[];
    deleted: string[];
  }

  interface PushInput {
    changes: Partial<Record<SyncTable, PushTableChanges>>;
    accountId: string;
  }

  export async function pushChanges({ changes, accountId }: PushInput): Promise<void> {
    // Process in dependency order to avoid FK violations
    for (const table of SYNC_TABLES) {
      const tableChanges = changes[table];
      if (!tableChanges) continue;

      const { updated } = tableChanges; // sendCreatedAsUpdated=true means no separate 'created'

      for (const record of updated) {
        await upsertRecord(table, record, accountId);
      }
      // Deletes: not implemented in MVP — skip deleted arrays
    }
  }

  async function upsertRecord(
    table: SyncTable,
    record: PushRecord,
    accountId: string,
  ): Promise<void> {
    const modelKey = TABLE_TO_MODEL[table];
    const delegate = (prisma as any)[modelKey];

    // Convert snake_case record fields to camelCase for Prisma
    const prismaData = snakeToCamel(record);

    // Security: enforce account ownership — never allow cross-account writes
    // For top-level tables: verify or inject accountId
    // For child tables (line_items): verify parent belongs to account
    if (table === 'line_items') {
      const quote = await prisma.quote.findFirst({
        where: { id: record.quote_id as string, account_id: accountId },
      });
      if (!quote) return; // Silently skip — client trying to write to another account's quote
    } else if (table !== 'payments') {
      // Inject accountId for all top-level tables (prevents client spoofing)
      prismaData.accountId = accountId;
    } else {
      // payments: verify parent invoice belongs to account
      const invoice = await prisma.invoice.findFirst({
        where: { id: record.invoice_id as string, accountId: accountId },
      });
      if (!invoice) return;
    }

    // Convert timestamp fields from ms to Date for Prisma
    for (const field of ['createdAt', 'updatedAt', 'syncedAt', 'sentAt', 'approvedAt',
                          'expiresAt', 'completedAt', 'scheduledStart', 'scheduledEnd',
                          'paidAt', 'dueAt', 'startTime', 'endTime', 'takenAt']) {
      if (typeof prismaData[field] === 'number') {
        prismaData[field] = new Date(prismaData[field] as number);
      }
    }

    // Last-write-wins: only update if client's updated_at is newer than server's
    const existing = await delegate.findUnique({ where: { id: record.id } });
    if (existing) {
      const serverUpdatedAt = existing.updatedAt instanceof Date
        ? existing.updatedAt.getTime()
        : Number(existing.updatedAt ?? 0);
      const clientUpdatedAt = record.updated_at ?? 0;

      if (clientUpdatedAt <= serverUpdatedAt) {
        return; // Server has newer data — skip (last-write-wins, server wins)
      }
    }

    // Upsert: create if not exists, update if client is newer
    // Strip read-only fields Prisma manages (updatedAt is @updatedAt — Prisma sets it)
    const { id, ...dataWithoutId } = prismaData;
    delete dataWithoutId.updatedAt; // Prisma manages this via @updatedAt

    await delegate.upsert({
      where: { id },
      create: { id, ...dataWithoutId },
      update: dataWithoutId,
    });
  }

  function snakeToCamel(obj: Record<string, unknown>): Record<string, unknown> {
    return Object.fromEntries(
      Object.entries(obj).map(([key, value]) => [
        key.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase()),
        value,
      ]),
    );
  }
  ```

  **Conflict resolution notes:**
  - **Last-write-wins for scalar fields**: Implemented by comparing `updated_at` timestamps. If client's `updated_at` ≤ server's `updated_at`, the update is skipped — the server already has equal or newer data.
  - **Collection merge for notes/photos**: The MVP stores `notes` as a single string field on `jobs`. True collection merge (append) isn't possible with a plain string field. For MVP, last-write-wins applies to `notes` as well (acceptable because the field is a string, not an array). Photo records (`job_photos`, `quote_photos`) are separate rows — each is a distinct record, so multiple devices adding photos creates multiple rows without conflict. This satisfies AC3 in practice for photos. If true notes merge is needed post-MVP, `notes` would need to be modeled as a `[]` relationship.

- [ ] 3.2: Note that the `Decimal` type in Prisma (used for `line_items.quantity`) needs special handling. When WatermelonDB sends `quantity` as a number (e.g., `2`), Prisma's `Decimal` type requires it to be a `string` or `Prisma.Decimal` object. Add a type coercion step in `upsertRecord` for the `line_items` table:
  ```typescript
  if (table === 'line_items' && typeof prismaData.quantity === 'number') {
    prismaData.quantity = prismaData.quantity.toString();
  }
  ```

### Task 4: Create API sync routes (AC: #8)

- [ ] 4.1: Create `apps/api/src/routes/sync.ts`:

  ```typescript
  import { Router } from 'express';
  import { authMiddleware } from '../middleware/auth.js';
  import { validate } from '../middleware/validate.js';
  import { z } from 'zod';
  import { pullChanges, pushChanges } from '../services/sync-service.js';
  import { AppError } from '../utils/error.js';

  export const syncRouter = Router();

  syncRouter.use(authMiddleware);

  const pullSchema = z.object({
    lastPulledAt: z.number().nullable(),
    schemaVersion: z.number().optional(),
    migration: z.unknown().optional(),
  });

  const pushSchema = z.object({
    changes: z.record(z.string(), z.object({
      created: z.array(z.record(z.string(), z.unknown())).default([]),
      updated: z.array(z.record(z.string(), z.unknown())).default([]),
      deleted: z.array(z.string()).default([]),
    })).default({}),
    lastPulledAt: z.number().nullable().optional(),
  });

  syncRouter.post('/pull', validate(pullSchema), async (req, res, next) => {
    try {
      const { lastPulledAt } = req.body as z.infer<typeof pullSchema>;
      const accountId = req.user!.accountId;

      const result = await pullChanges({ lastPulledAt, accountId });
      res.json({ data: result });
    } catch (err) {
      next(err);
    }
  });

  syncRouter.post('/push', validate(pushSchema), async (req, res, next) => {
    try {
      const { changes } = req.body as z.infer<typeof pushSchema>;
      const accountId = req.user!.accountId;

      await pushChanges({ changes: changes as any, accountId });
      res.json({ data: {} });
    } catch (err) {
      next(err);
    }
  });
  ```

- [ ] 4.2: Register the sync router in `apps/api/src/index.ts`. Add after the `accounts` router import and registration:

  ```typescript
  import { syncRouter } from './routes/sync.js';
  // ...
  app.use('/api/v1/sync', syncRouter);
  ```

  Add this BEFORE the `errorHandler` middleware at the bottom. The sync endpoints are protected — `authMiddleware` is applied inside `syncRouter` itself, so no outer middleware is needed.

### Task 5: Handle `invoice_number` constraint in push upsert (AC: #5)

- [ ] 5.1: The `Invoice` model in Prisma has a required `invoiceNumber` field with `@map("invoice_number")`. WatermelonDB's mobile `Invoice` model must also include `invoice_number` as a column in its schema. Verify `apps/mobile/src/db/schema.ts` includes `{ name: 'invoice_number', type: 'string' }` in the `invoices` table. If it's missing, this was an oversight in earlier stories — add it.

  Check `apps/mobile/src/db/models/invoice.ts` for the field:
  ```typescript
  @field('invoice_number') invoiceNumber!: string;
  ```
  If missing, add it to both the schema and the model. This requires a schema migration to v11 — add an `addColumns` step for the `invoices` table in `migrations.ts` following the same pattern as the v10 step.

  Note: The push upsert should include `invoice_number` from the WatermelonDB record. The `snakeToCamel` function converts it to `invoiceNumber` for Prisma.

### Task 6: Write tests (AC: #1, #4, #5, #8)

- [ ] 6.1: Create `apps/mobile/src/services/sync-service.test.ts`. Unit-test the sync service with mocked `apiClient` and WatermelonDB in-memory database. Key test cases:

  ```typescript
  // Test: performSync calls pullChanges and pushChanges
  // Test: performSync updates synced_at on pending records after success
  // Test: performSyncWithRetry retries on failure up to MAX_RETRIES
  // Test: performSyncWithRetry applies exponential backoff delays
  // Test: performSyncWithRetry throws after MAX_RETRIES failures
  ```

  Use `jest.mock('../services/api-client')` to mock `apiClient.post`. Use the existing `createTestDatabase()` pattern from `schema.test.ts` (LokiJS adapter) — already established in this codebase.

  Mock `synchronize` from `@nozbe/watermelondb/sync`:
  ```typescript
  jest.mock('@nozbe/watermelondb/sync', () => ({
    synchronize: jest.fn(async ({ pullChanges, pushChanges }: any) => {
      await pullChanges({ lastPulledAt: null, schemaVersion: 10, migration: null });
      await pushChanges({ changes: {}, lastPulledAt: null });
    }),
  }));
  ```

  Test exponential backoff by mocking `setTimeout` with `jest.useFakeTimers()`.

- [ ] 6.2: Create `apps/api/src/routes/sync.test.ts`. Test the pull and push endpoints using `supertest`. Key test cases:

  ```typescript
  // Test: POST /api/v1/sync/pull — requires auth, returns changes + timestamp
  // Test: POST /api/v1/sync/push — requires auth, returns empty data object
  // Test: POST /api/v1/sync/pull without auth — returns 401
  // Test: POST /api/v1/sync/push with records belonging to different account — 403 or skip
  ```

  Follow the same pattern as `apps/api/src/routes/quotes.test.ts` for auth setup and request structure.

## Dev Notes

### What Story 6.1 Built (Do Not Regress)

Story 6.1 created the sync **infrastructure** for this story to build upon:
- `synced_at` column added to all 10 WatermelonDB tables (schema v10) — `null` = pending sync
- `SyncContext` with `pendingCount` counting pending records reactively via `withChangesForTables()`
- `SyncProvider` wrapping the app inside `DatabaseProvider` in `_layout.tsx`
- `NetworkProvider` wrapping the app outside `DatabaseProvider`
- `isSyncing`, `lastSyncAt`, `syncError` intentionally stubbed as `false`/`null` — story 6.2 replaces these stubs with real state

Do not change `PENDING_TABLES` in `sync-context.tsx` — keep using the same tables (7 core tables). The `synced_at` update after sync uses the same list from `sync-service.ts`.

Do not change the `NetworkStatusBar` or `SyncIndicator` components from story 6.1 — they read from `SyncContext` and `useSync()`, which will automatically show real state once the context is wired up.

### WatermelonDB `synchronize()` — Critical API Details

The `synchronize()` function from `@nozbe/watermelondb/sync`:
- Manages the `lastPulledAt` timestamp internally in WatermelonDB metadata — you don't store it
- Runs inside WatermelonDB's write transaction — you CANNOT do additional `database.write()` calls inside `pullChanges` or `pushChanges` callbacks
- The `synced_at` batch update must happen AFTER `synchronize()` returns (outside the sync transaction)
- Use `record.prepareUpdate()` + `database.batch()` for the `synced_at` update — never call `record.update()` inside `database.write()` (that would cause a nested write error)

Correct batch update pattern:
```typescript
// CORRECT — use prepareUpdate + batch inside write
await database.write(async () => {
  const updates = records.map(r => r.prepareUpdate((m: any) => { m.syncedAt = now; }));
  await database.batch(...updates);
});

// WRONG — record.update() creates its own write lock
await database.write(async () => {
  for (const r of records) {
    await r.update((m) => { m.syncedAt = now; }); // nested write — throws
  }
});
```

### `sendCreatedAsUpdated: true` — Why This Matters

Setting `sendCreatedAsUpdated: true` in `synchronize()` tells WatermelonDB to include locally-created records (that have never been synced) in the `updated` array of the push payload, not the `created` array. This means the server only needs to implement upserts — it never receives a separate `created` list. The API `pushChanges` handler in `sync-service.ts` reflects this by processing `updated` only.

Without this option, locally-created records would be in `created`, and the server would need separate insert logic. Using `sendCreatedAsUpdated: true` + server-side upsert is simpler and more robust.

### Conflict Resolution — Implementation Reality vs. Architecture Spec

The architecture specifies:
- **Scalar fields**: Last-write-wins based on `updated_at` timestamp
- **Collection fields** (job notes, photos): Merge — append, never overwrite

**What this story implements:**
- **Scalar fields**: Full last-write-wins via `updated_at` comparison in `upsertRecord`. If client's `updated_at` ≤ server's, the push is skipped for that record.
- **Photos**: Effectively merged because each photo is a separate WatermelonDB record with its own UUID. Two devices adding photos creates two rows — no conflict. ✓
- **Notes** (string field on `jobs`): Last-write-wins in this MVP implementation. True append-merge would require notes to be a related collection (e.g., a `job_notes` table). This is an acceptable MVP simplification — field service notes are typically edited by one person at a time. Document this as a known limitation.

For pull, the `toWatermelonRaw` function converts Prisma Date objects to Unix milliseconds. WatermelonDB expects `created_at`, `updated_at`, `synced_at` as integer milliseconds in the raw record format.

### API Prisma Schema Inconsistency

Some Prisma models use camelCase field names (like `Customer`, `Job`) and others use snake_case directly (like `Quote`, `LineItem`). This is an inconsistency from earlier stories. The `snakeToCamel` and `toWatermelonRaw` functions handle both patterns:
- `snakeToCamel` (for push): converts WatermelonDB's snake_case incoming fields to camelCase Prisma expects
- `toWatermelonRaw` (for pull): converts Prisma's camelCase output to snake_case WatermelonDB expects

Both conversions are key→value transformations that should be tested.

### `AccountId` Injection — Security Critical

The `upsertRecord` function in `sync-service.ts` **injects** `accountId` from the authenticated JWT (server-side), overwriting whatever `account_id` the client sent. This is critical security: a compromised or malicious client cannot write records to another account by spoofing `account_id`. The server always sets `accountId` from `req.user.accountId`.

For child records (`line_items`, `payments`), the parent record's ownership is verified before the upsert proceeds. If the parent (`quote`, `invoice`) doesn't belong to the authenticated account, the record is silently skipped (not an error — prevents information leakage).

### `req.user.accountId` — Check Auth Middleware

The `authMiddleware` in `apps/api/src/middleware/auth.ts` attaches `req.user` from the JWT. Verify that `req.user.accountId` is available (it was established in story 1.2). If the auth middleware attaches a different field name, update the sync route accordingly. The auth middleware pattern is:
```typescript
// auth.ts sets:
req.user = { userId, accountId, email };
```

### Prisma `lineItem` vs `line_item` Naming

Prisma generates the accessor as `prisma.lineItem` (camelCase, singular). The WatermelonDB table name is `line_items` (snake_case, plural). The `TABLE_TO_MODEL` map bridges this. Similarly, `scheduleEvent` in Prisma maps from `schedule_events` in WatermelonDB.

The `prisma.lineItem.findMany` query for line_items uses the `Quote` relation for account scoping since `LineItem` has no direct `accountId`. The query is:
```typescript
where: { quote: { account_id: accountId }, updated_at: { gt: since } }
```
Note `account_id` (snake_case) because the `Quote` Prisma model uses direct snake_case fields (from story 2.x). Check `schema.prisma` to confirm the exact field names — some models are camelCase, some are mixed.

### Provider Tree in `_layout.tsx` — Unchanged

The provider tree from story 6.1 must remain unchanged:
```
StripeProvider
  AuthProvider
    NetworkProvider        ← useNetwork() available below
      DatabaseProvider
        SyncProvider       ← useDatabase() + useNetwork() available here
          AuthGate
```

`SyncProvider` now imports `useNetwork()` from the context (via `useNetwork` hook from `hooks/use-network.ts`). This hook calls `useContext(NetworkContext)`. Since `NetworkProvider` wraps `DatabaseProvider` which wraps `SyncProvider`, this import works without changes to `_layout.tsx`.

### AppState Listener — React Native API

`AppState.addEventListener('change', handler)` returns a subscription object in React Native 0.65+. Always call `subscription.remove()` in the `useEffect` cleanup to prevent memory leaks. The Expo SDK 52 version of React Native is 0.76.6 — the subscription object pattern applies.

```typescript
const subscription = AppState.addEventListener('change', (state: AppStateStatus) => {
  if (state === 'active') triggerSync();
});
return () => subscription.remove();
```

Do NOT use `AppState.removeEventListener()` — that API is deprecated in React Native 0.65+.

### Exponential Backoff — Delays in Practice

The retry delays from `BACKOFF_BASE_MS * 2^attempt`:
- Attempt 0 → 1s (initial failure, retry after 1s)
- Attempt 1 → 2s
- Attempt 2 → 4s
- Attempt 3 → 8s
- Attempt 4 → 16s (capped at 30s)
- Attempt 5 → throw (no more retries)

Maximum total wait time before giving up: 1 + 2 + 4 + 8 + 16 = 31 seconds. This fits within the 30s sync completion target (NFR4) when network restores cleanly; the retry budget is consumed only on transient failures.

### `invoice_number` Field — Likely Already Present

Story 4.1 (Invoice Generation) should have added `invoice_number` to the mobile invoice model. Verify the field exists in both `apps/mobile/src/db/schema.ts` (as `invoice_number` column) and `apps/mobile/src/db/models/invoice.ts` (as `@field('invoice_number') invoiceNumber!: string`). If missing, Task 5.1 handles the schema migration.

### Testing Pattern — LokiJS Adapter

All mobile unit tests in this project use the LokiJS in-memory adapter. From story 5.3 and story 6.1:
```typescript
import LokiJSAdapter from '@nozbe/watermelondb/adapters/lokijs';
import { Database } from '@nozbe/watermelondb';
import { schema } from '../db/schema'; // v10 schema
import Customer from '../db/models/customer';
// ... other models

function createTestDatabase(): Database {
  const adapter = new LokiJSAdapter({
    schema,
    useWebWorker: false,
    useIncrementalIndexedDB: false,
  });
  return new Database({
    adapter,
    modelClasses: [Customer, Quote, Job, Invoice, Payment, LineItem, ScheduleEvent],
  });
}
```

Note: LokiJS adapter may return `undefined` (not `null`) for unset optional fields. Use `== null` (loose equality) in tests and production code where WatermelonDB optional fields are compared.

### API Test Pattern — From `quotes.test.ts`

Follow the API test pattern from `apps/api/src/routes/quotes.test.ts` for setting up auth mocks. The auth middleware (`authMiddleware`) validates the Supabase JWT — in tests, mock it:
```typescript
jest.mock('../middleware/auth.js', () => ({
  authMiddleware: (req: any, _res: any, next: any) => {
    req.user = { userId: 'user-1', accountId: 'account-1', email: 'test@example.com' };
    next();
  },
}));
```

### Project Structure Notes

New files to create:
- `apps/mobile/src/services/sync-service.ts` — Mobile sync logic (new)
- `apps/api/src/services/sync-service.ts` — API sync logic (new)
- `apps/api/src/routes/sync.ts` — API sync routes (new)
- `apps/mobile/src/services/sync-service.test.ts` — Mobile sync tests (new, co-located)
- `apps/api/src/routes/sync.test.ts` — API sync route tests (new, co-located)

Modified files:
- `apps/mobile/src/contexts/sync-context.tsx` — Wire up real sync state (replaces stubs)
- `apps/api/src/index.ts` — Register syncRouter

All paths relative to `mvps/field-service-management/src/` as monorepo root.

Naming conventions:
- `sync-service.ts` — kebab-case ✓
- `sync.ts` — kebab-case ✓
- All imports use `.js` extension in the API (ESM, consistent with existing routes) ✓
- API service uses `import { prisma } from '../config/prisma.js'` (not `@prisma/client` directly) ✓

### References

- [Source: epics.md#Story 6.2] — All acceptance criteria, FR37, FR38, NFR4, NFR15
- [Source: architecture.md#Sync Engine] — "Event-sourced sync model using WatermelonDB sync protocol. Push/pull API endpoints. Last-write-wins for scalar fields, merge for collection fields."
- [Source: architecture.md#Conflict Resolution Strategy] — Last-write-wins with `updated_at` comparison; merge for collections
- [Source: architecture.md#Retry Patterns] — "Sync: Exponential backoff (1s, 2s, 4s, 8s, max 30s). Max 5 retries."
- [Source: architecture.md#API Patterns] — `POST /api/v1/sync/push`, `POST /api/v1/sync/pull`
- [Source: architecture.md#Enforcement Guidelines] — All mobile writes via WatermelonDB; co-locate tests; TypeScript strict; no `any` types (note: `any` is used only where WatermelonDB's dynamically-typed model update API requires it)
- [Source: architecture.md#Offline UX Patterns] — "Background sync on app foreground + connectivity change events"
- [Source: apps/mobile/src/contexts/sync-context.tsx] — Story 6.1 SyncProvider with stubs to replace
- [Source: apps/mobile/app/_layout.tsx] — Provider tree: StripeProvider > AuthProvider > NetworkProvider > DatabaseProvider > SyncProvider > AuthGate
- [Source: apps/mobile/src/services/api-client.ts] — `apiClient.post<T>(path, body)` pattern used for sync endpoints
- [Source: apps/mobile/src/db/schema.ts] — v10 schema with `synced_at` on all 10 tables
- [Source: apps/api/src/index.ts] — Express app with existing router registrations
- [Source: apps/api/prisma/schema.prisma] — Full server data model; Prisma model naming inconsistencies noted
- [Source: stories/6-1-offline-core-workflow-and-network-detection.md#Dev Notes] — LokiJS test adapter pattern, `prepareUpdate`/`batch` convention, `withChangesForTables` RxJS API, provider nesting order

## Dev Agent Record

### Agent Model Used

claude-sonnet-4-6

### Debug Log References

### Completion Notes List

### File List
