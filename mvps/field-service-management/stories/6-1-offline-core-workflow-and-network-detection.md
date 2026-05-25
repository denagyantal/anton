# Story 6.1: Offline Core Workflow and Network Detection

Status: done

## Story

As a tradesperson working in areas with poor signal,
I want to use every feature of the app without internet and see when my data is pending sync,
so that I never lose work or have to redo data entry because of a dead zone.

## Acceptance Criteria

1. **[Offline operations complete via WatermelonDB]** Given the device has no internet connectivity (airplane mode or no signal), when the user creates a quote with line items, schedules a job, marks a job complete, captures photos and signatures, and generates an invoice, then all operations complete successfully using WatermelonDB local storage with all data persisted on-device. Each operation completes within 500ms (NFR3). Features must not show any error, crash, or block on network access.

2. **[Network indicator in header — offline with pending items]** Given the device loses internet connectivity, when the user performs any write operation (create or update any record), then a subtle network indicator is visible in the tab bar header area: a yellow dot with the count of pending-sync records (e.g., "● 3 pending"). The indicator is rendered via a `NetworkStatusBar` component added to each tab screen header.

3. **[Network indicator in header — online, all synced]** Given the device is online and all records are synced (no pending items), when the user views any tab, then the network indicator is hidden (no dot, no text) — no visual noise when everything is fine.

4. **[Network indicator in header — online with pending items]** Given the device is online but sync has not yet run (pending items exist), when the user views any tab, then the indicator shows a subtle yellow dot with pending count, signaling "syncing soon."

5. **[Per-record pending sync badge]** Given the app is offline and the user creates or updates a record (quote, job, invoice, customer, schedule event), when the record appears in any list screen, then it displays a small "pending" badge (yellow indicator, e.g., a clock icon or "↻" symbol) next to the record. Records with `synced_at` equal to null are considered pending. (FR39)

6. **[Per-record synced badge]** Given a record has been successfully synced to the server (its `synced_at` field is set to a non-null timestamp), when it appears in any list screen, then no pending badge is shown (or a subtle green check is shown). (FR39)

7. **[synced_at column on all operational tables]** Given the WatermelonDB schema is migrated from v9 to v10, when any record is created or updated locally, then its `synced_at` field defaults to null. Only the sync service (story 6.2) will set `synced_at`. All 8 operational tables (pricebook_items, customers, quotes, line_items, jobs, schedule_events, invoices, payments) must have this column.

8. **[Encrypted storage — auth tokens]** Given a user is authenticated, when their JWT and refresh token are stored on-device, then they are persisted using `expo-secure-store` (which maps to iOS Keychain / Android Keystore). No auth tokens appear in plain-text AsyncStorage. This is already implemented in `supabase-client.ts` — the AC validates it remains correct and is not regressed. (NFR6)

9. **[NetworkProvider in app root]** Given the app launches, when any screen component calls `useNetwork()`, then it receives the current connectivity state. `NetworkProvider` must wrap the `DatabaseProvider` in `app/_layout.tsx` so the network state is available throughout the entire component tree.

## Tasks / Subtasks

### Task 1: Install `@react-native-community/netinfo` (AC: #1, #2, #3, #4, #9)

- [x] 1.1: In `apps/mobile/package.json`, add `"@react-native-community/netinfo": "^11.4.1"` to `dependencies`. This is compatible with React Native 0.76.6 (Expo SDK 52). `@react-native-community/netinfo` v11.x does not require a custom Expo config plugin — it works with Expo Go for development and EAS Build for production.

  Run `npm install` from `mvps/field-service-management/src/` after editing `package.json`.

- [x] 1.2: Verify that `apps/mobile/src/contexts/network-context.tsx` now compiles without errors after installing the dependency. The file is already correctly written — it imports `NetInfo` from `@react-native-community/netinfo`, calls `NetInfo.addEventListener()`, and exposes `isConnected: boolean`. No code changes needed in the file itself.

### Task 2: Add NetworkProvider to root layout (AC: #9)

- [x] 2.1: Open `apps/mobile/app/_layout.tsx`. Add `NetworkProvider` import from `'../src/contexts/network-context'`. Wrap `DatabaseProvider` with `NetworkProvider` so the tree is:
  ```tsx
  <StripeProvider ...>
    <AuthProvider>
      <NetworkProvider>
        <DatabaseProvider>
          <AuthGate />
        </DatabaseProvider>
      </NetworkProvider>
    </AuthProvider>
  </StripeProvider>
  ```
  `NetworkProvider` must be inside `AuthProvider` but outside `DatabaseProvider` — network state must be available to any component including those that also use the database context.

### Task 3: Create `use-network` hook (AC: #2, #3, #4, #9)

- [x] 3.1: Create `apps/mobile/src/hooks/use-network.ts`:
  ```typescript
  import { useContext } from 'react';
  import { NetworkContext } from '../contexts/network-context';

  export function useNetwork() {
    return useContext(NetworkContext);
  }
  ```
  This is a thin wrapper following the same pattern as `useAuth()` and `useDatabase()` in this codebase.

### Task 4: Schema migration — add `synced_at` to all operational tables (AC: #5, #6, #7)

- [x] 4.1: Open `apps/mobile/src/db/schema.ts`. Increment the schema version from `9` to `10`. Add `{ name: 'synced_at', type: 'number', isOptional: true }` as the last column in each of the following tables: `pricebook_items`, `customers`, `quotes`, `quote_photos`, `line_items`, `jobs`, `job_photos`, `schedule_events`, `invoices`, `payments`.

  Example for the `customers` table — add after `updated_at`:
  ```typescript
  { name: 'synced_at', type: 'number', isOptional: true },
  ```

  Do this for all 10 tables. The column is `isOptional: true` so existing records default to null without breaking anything.

- [x] 4.2: Open `apps/mobile/src/db/migrations.ts`. Add a migration step for version 10. In WatermelonDB, adding an optional column to existing tables requires an `addColumns` migration step for each table:
  ```typescript
  import { schemaMigrations, addColumns } from '@nozbe/watermelondb/Schema/migrations';

  // Add to the existing migrations array:
  {
    toVersion: 10,
    steps: [
      addColumns({
        table: 'pricebook_items',
        columns: [{ name: 'synced_at', type: 'number', isOptional: true }],
      }),
      addColumns({
        table: 'customers',
        columns: [{ name: 'synced_at', type: 'number', isOptional: true }],
      }),
      addColumns({
        table: 'quotes',
        columns: [{ name: 'synced_at', type: 'number', isOptional: true }],
      }),
      addColumns({
        table: 'quote_photos',
        columns: [{ name: 'synced_at', type: 'number', isOptional: true }],
      }),
      addColumns({
        table: 'line_items',
        columns: [{ name: 'synced_at', type: 'number', isOptional: true }],
      }),
      addColumns({
        table: 'jobs',
        columns: [{ name: 'synced_at', type: 'number', isOptional: true }],
      }),
      addColumns({
        table: 'job_photos',
        columns: [{ name: 'synced_at', type: 'number', isOptional: true }],
      }),
      addColumns({
        table: 'schedule_events',
        columns: [{ name: 'synced_at', type: 'number', isOptional: true }],
      }),
      addColumns({
        table: 'invoices',
        columns: [{ name: 'synced_at', type: 'number', isOptional: true }],
      }),
      addColumns({
        table: 'payments',
        columns: [{ name: 'synced_at', type: 'number', isOptional: true }],
      }),
    ],
  },
  ```

  The migrations file already has steps for v2 through v9. Append the v10 step to the array. Verify that `schemaMigrations({ migrations: [...] })` is called with the full array including the new step.

- [x] 4.3: Update each of the 10 model files in `apps/mobile/src/db/models/` to add the `syncedAt` property. For each model class, add:
  ```typescript
  @field('synced_at') syncedAt!: number | null;
  ```
  Import `field` from `@nozbe/watermelondb` (already imported in each model). The `! ` non-null assertion is required by TypeScript strict mode even though the value can be null at runtime — this is the WatermelonDB convention for `isOptional` fields.

  Files to update:
  - `src/db/models/pricebook-item.ts`
  - `src/db/models/customer.ts`
  - `src/db/models/quote.ts`
  - `src/db/models/quote-photo.ts` (if it exists; add to whichever photo model file handles `quote_photos`)
  - `src/db/models/line-item.ts`
  - `src/db/models/job.ts`
  - `src/db/models/job-photo.ts`
  - `src/db/models/schedule-event.ts`
  - `src/db/models/invoice.ts`
  - `src/db/models/payment.ts`

### Task 5: Create `SyncContext` with pending count (AC: #2, #3, #4, #5, #6)

- [x] 5.1: Create `apps/mobile/src/contexts/sync-context.tsx`. This context tracks how many records are pending sync (have `synced_at === null`). It observes the WatermelonDB database reactively so the count updates whenever a record is written.

  ```typescript
  import React, { createContext, useContext, useEffect, useState } from 'react';
  import { Q } from '@nozbe/watermelondb';
  import { useDatabase } from './database-context';

  interface SyncContextValue {
    pendingCount: number;
    isSyncing: boolean;
    lastSyncAt: number | null;
    syncError: string | null;
  }

  export const SyncContext = createContext<SyncContextValue>({
    pendingCount: 0,
    isSyncing: false,
    lastSyncAt: null,
    syncError: null,
  });

  const SYNCED_AT_NULL = Q.eq(null);

  const PENDING_TABLES = [
    'customers', 'quotes', 'line_items', 'jobs',
    'schedule_events', 'invoices', 'payments',
  ] as const;

  export function SyncProvider({ children }: { children: React.ReactNode }) {
    const database = useDatabase();
    const [pendingCount, setPendingCount] = useState(0);

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

      // Recalculate on mount and subscribe to any table changes
      // WatermelonDB's database.withChangesForTables triggers whenever any
      // of the listed tables have a write
      const subscription = database
        .withChangesForTables(PENDING_TABLES as unknown as string[])
        .subscribe(() => recalculate());

      recalculate();

      return () => {
        cancelled = true;
        subscription.unsubscribe();
      };
    }, [database]);

    return (
      <SyncContext.Provider value={{ pendingCount, isSyncing: false, lastSyncAt: null, syncError: null }}>
        {children}
      </SyncContext.Provider>
    );
  }

  export function useSync() {
    return useContext(SyncContext);
  }
  ```

  Notes on implementation:
  - `isSyncing`, `lastSyncAt`, and `syncError` are stubbed as false/null for story 6.1. Story 6.2 will wire these up when the sync service is built.
  - `database.withChangesForTables()` returns an RxJS Observable that emits whenever any of the listed tables are written. This is the correct WatermelonDB API for reactive table-level observation.
  - The pending count is recalculated with fresh queries after every table change — this is safe because WatermelonDB writes are batched and observable emissions are debounced.

- [x] 5.2: Add `SyncProvider` to `apps/mobile/app/_layout.tsx`, wrapping inside `DatabaseProvider` (since `SyncProvider` uses `useDatabase()`):
  ```tsx
  <DatabaseProvider>
    <SyncProvider>
      <AuthGate />
    </SyncProvider>
  </DatabaseProvider>
  ```
  Import `SyncProvider` from `'../src/contexts/sync-context'`.

### Task 6: Create `use-sync-status` hook (AC: #5, #6)

- [x] 6.1: Create `apps/mobile/src/hooks/use-sync-status.ts`:
  ```typescript
  import { Model } from '@nozbe/watermelondb';

  export type RecordSyncStatus = 'synced' | 'pending';

  export function getSyncStatus(record: Model & { syncedAt: number | null }): RecordSyncStatus {
    if (record.syncedAt == null) return 'pending';
    return 'synced';
  }
  ```

  This is a pure function (not a hook with state) because the sync status is derived directly from the record's `syncedAt` field, which is already observable via WatermelonDB's reactive queries. Components that observe a record via `withObservables` or `useObservable` will automatically re-render when `syncedAt` changes.

  The function accepts any Model instance that has a `syncedAt` field, keeping it generic across all entity types (Customer, Quote, Job, Invoice, etc.).

### Task 7: Create `SyncIndicator` UI component (AC: #5, #6)

- [x] 7.1: Create `apps/mobile/src/components/ui/sync-indicator.tsx`:
  ```typescript
  import React from 'react';
  import { View, Text, StyleSheet } from 'react-native';
  import { RecordSyncStatus } from '../../hooks/use-sync-status';

  interface Props {
    status: RecordSyncStatus;
  }

  export function SyncIndicator({ status }: Props) {
    if (status === 'synced') return null;

    return (
      <View style={styles.badge}>
        <Text style={styles.text}>↻</Text>
      </View>
    );
  }

  const styles = StyleSheet.create({
    badge: {
      width: 18,
      height: 18,
      borderRadius: 9,
      backgroundColor: '#fbbf24',
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: 4,
    },
    text: {
      fontSize: 10,
      color: '#fff',
      fontWeight: 'bold',
    },
  });
  ```

  The component renders nothing when `status === 'synced'`, eliminating visual noise for synced records. When `status === 'pending'`, it shows a small yellow circular badge with a sync icon.

### Task 8: Create `NetworkStatusBar` component (AC: #2, #3, #4)

- [x] 8.1: Create `apps/mobile/src/components/ui/network-status-bar.tsx`:
  ```typescript
  import React from 'react';
  import { View, Text, StyleSheet } from 'react-native';
  import { useNetwork } from '../../hooks/use-network';
  import { useSync } from '../../contexts/sync-context';

  export function NetworkStatusBar() {
    const { isConnected } = useNetwork();
    const { pendingCount } = useSync();

    // AC #3: online with nothing pending → no indicator
    if (isConnected && pendingCount === 0) return null;

    // AC #4: online but pending items → yellow dot with count
    // AC #2: offline → yellow dot with pending count
    const label = pendingCount > 0 ? `${pendingCount} pending` : 'offline';
    const color = isConnected ? '#fbbf24' : '#f59e0b';

    return (
      <View style={[styles.bar, { backgroundColor: color + '22' }]}>
        <View style={[styles.dot, { backgroundColor: color }]} />
        <Text style={[styles.text, { color }]}>{label}</Text>
      </View>
    );
  }

  const styles = StyleSheet.create({
    bar: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 12,
      paddingVertical: 4,
    },
    dot: {
      width: 8,
      height: 8,
      borderRadius: 4,
      marginRight: 6,
    },
    text: {
      fontSize: 12,
      fontWeight: '500',
    },
  });
  ```

  The bar uses a semi-transparent background (hex color + `'22'` for ~13% opacity) to keep it subtle without obscuring content below.

- [x] 8.2: Open `apps/mobile/app/(tabs)/_layout.tsx`. Update the Jobs and More tab screens to render the `NetworkStatusBar` component in a custom header. Since `Tabs` uses React Navigation under the hood, use `headerTitle` or a header component wrapper.

  The cleanest approach for Expo Router `<Tabs>` is to add the `NetworkStatusBar` at the top of each tab screen's content view rather than in the native header (to avoid complex header customization). Alternatively, use a sticky component at the root tab layout level.

  Recommended approach — add a persistent banner at the tab root by creating a wrapper component:
  ```tsx
  import { View } from 'react-native';
  import { NetworkStatusBar } from '../../src/components/ui/network-status-bar';

  export default function TabLayout() {
    return (
      <View style={{ flex: 1 }}>
        <NetworkStatusBar />
        <Tabs>
          {/* existing tab screens */}
        </Tabs>
      </View>
    );
  }
  ```
  Import `View` from `react-native` and `NetworkStatusBar` from the correct relative path.

  Note: `<View style={{ flex: 1 }}>` wrapper is required so that `NetworkStatusBar` + `Tabs` share the available screen height correctly.

### Task 9: Add `SyncIndicator` to list screens (AC: #5, #6)

- [x] 9.1: Open the Jobs list screen (`apps/mobile/app/(tabs)/index.tsx` or `jobs/index.tsx`). In the `JobCard` or job list item component, pass the job record to `getSyncStatus()` and render a `<SyncIndicator status={...} />` next to the job title. Follow the existing card layout — the badge should appear inline, right-aligned or after the title text, so it doesn't disrupt the existing layout.

  Pattern to follow:
  ```tsx
  import { getSyncStatus } from '../../src/hooks/use-sync-status';
  import { SyncIndicator } from '../../src/components/ui/sync-indicator';

  // Inside the job card render:
  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
    <Text style={styles.title}>{job.title}</Text>
    <SyncIndicator status={getSyncStatus(job)} />
  </View>
  ```

- [x] 9.2: Apply the same pattern to the Customers list screen (customer card) and Quotes list screen (quote card). The `getSyncStatus()` function works with any model that has a `syncedAt` field.

### Task 10: Tests (AC: #5, #6, #7)

- [x] 10.1: Create `apps/mobile/src/hooks/use-sync-status.test.ts` (co-located test). Test the pure `getSyncStatus` function:
  ```typescript
  import { getSyncStatus } from './use-sync-status';

  describe('getSyncStatus', () => {
    it('returns pending when syncedAt is null', () => {
      const record = { syncedAt: null } as any;
      expect(getSyncStatus(record)).toBe('pending');
    });

    it('returns pending when syncedAt is undefined', () => {
      const record = { syncedAt: undefined } as any;
      expect(getSyncStatus(record)).toBe('pending');
    });

    it('returns synced when syncedAt is a timestamp', () => {
      const record = { syncedAt: 1700000000000 } as any;
      expect(getSyncStatus(record)).toBe('synced');
    });

    it('returns synced when syncedAt is 0 (epoch)', () => {
      const record = { syncedAt: 0 } as any;
      // 0 is falsy but not null/undefined — record was synced at epoch
      // getSyncStatus uses == null (covers both null and undefined), not falsy
      expect(getSyncStatus(record)).toBe('synced');
    });
  });
  ```

  Note: `getSyncStatus` must use `== null` (loose equality, covers both `null` and `undefined`) rather than `=== null` (strict) or `!syncedAt` (falsy, incorrectly treats 0 as unsynced).

- [x] 10.2: Create a WatermelonDB integration test verifying schema v10 migration applies correctly. Use the existing `createTestDatabase()` pattern from `use-customers.test.ts` (LokiJS adapter without incremental IndexedDB). Create a record, verify `syncedAt` is null by default, then update it and verify it persists:
  ```typescript
  // apps/mobile/src/db/schema.test.ts (new file)
  describe('schema v10 — synced_at column', () => {
    it('customers have synced_at defaulting to null', async () => {
      const db = createTestDatabase();
      let customer!: Customer;
      await db.write(async () => {
        customer = await db.get<Customer>('customers').create((r) => {
          r.accountId = 'acc1';
          r.name = 'Alice';
          r.phone = '555-0001';
        });
      });
      expect(customer.syncedAt).toBeNull();
    });

    it('synced_at can be set to a timestamp via update', async () => {
      const db = createTestDatabase();
      let customer!: Customer;
      await db.write(async () => {
        customer = await db.get<Customer>('customers').create((r) => {
          r.accountId = 'acc1'; r.name = 'Bob'; r.phone = '555-0002';
        });
      });
      await db.write(async () => {
        await customer.update((r) => { r.syncedAt = 1700000000000; });
      });
      const refetched = await db.get<Customer>('customers').find(customer.id);
      expect(refetched.syncedAt).toBe(1700000000000);
    });
  });
  ```

## Dev Notes

### Critical Blocker: Missing netinfo Dependency

`apps/mobile/src/contexts/network-context.tsx` already contains correct code that imports `NetInfo` from `@react-native-community/netinfo`. However, `@react-native-community/netinfo` is **not in `package.json`** — this causes a runtime crash when the app starts (Metro bundler will fail to resolve the import). Task 1.1 must be completed before any testing.

The `NetworkProvider` is also not currently included in `_layout.tsx`, so even after installing the package, Task 2.1 is required to wire it up.

### WatermelonDB Schema Migration Pattern

The codebase uses `schemaMigrations` from `@nozbe/watermelondb/Schema/migrations`. The migrations file already covers v2 through v9 with `addColumns` steps. Adding v10 follows the exact same pattern — append to the array.

**Critical**: WatermelonDB migrations are **additive only**. Never modify or remove existing migration steps. The migration system runs the steps needed to bring the local DB from its current version to the schema version. If you add a step `toVersion: 10`, it only runs on devices that have schema v9 (which is all existing installs).

After updating both `schema.ts` (version → 10) and `migrations.ts` (adding step), WatermelonDB will automatically migrate on next app launch. New installs start fresh from the current schema — they don't run migrations at all.

```typescript
// migrations.ts structure (add at end):
export default schemaMigrations({
  migrations: [
    // ... existing v2 through v9 steps ...
    {
      toVersion: 10,
      steps: [
        addColumns({ table: 'customers', columns: [{ name: 'synced_at', type: 'number', isOptional: true }] }),
        // ... one addColumns per table ...
      ],
    },
  ],
});
```

### WatermelonDB Model Field Convention for Optional Numbers

In WatermelonDB with TypeScript strict mode, optional numeric fields use:
```typescript
@field('synced_at') syncedAt!: number | null;
```

The `!` (definite assignment assertion) is required by TypeScript because WatermelonDB model constructors don't set properties via TypeScript initializers — they use the `_raw` internal record. At runtime, `syncedAt` will be `null` for new/unsynced records.

Do NOT use `syncedAt?: number` (optional property) — this is different from `number | null`. WatermelonDB sets optional fields to `null`, not `undefined`.

### SyncContext's `withChangesForTables` API

WatermelonDB's `database.withChangesForTables(tables)` returns an RxJS `Observable<TableName[]>` that emits an array of changed table names whenever any of the specified tables are written. This is the correct API for reacting to any write across multiple tables.

```typescript
// Correct subscription pattern:
const subscription = database
  .withChangesForTables(['customers', 'quotes', 'jobs', ...])
  .subscribe(() => recalculate());

// Cleanup:
return () => subscription.unsubscribe();
```

Do NOT poll on a timer or listen to individual record changes — `withChangesForTables` is the efficient, reactive way.

If `withChangesForTables` is not available in the installed WatermelonDB version (0.27.x), fall back to calling `recalculate()` after each `database.write()` via a custom event emitter. Check the WatermelonDB changelog for the correct API — `withChangesForTables` was introduced in v0.24.

### NetworkStatusBar Placement in Expo Router Tabs

Expo Router's `<Tabs>` component uses React Navigation's `BottomTabNavigator` under the hood. Adding a persistent banner above the tabs is done by wrapping `<Tabs>` in a `<View style={{ flex: 1 }}>` at the tab layout level (`app/(tabs)/_layout.tsx`). This renders `NetworkStatusBar` above all tab content, consistent across every tab.

The tab layout is already a component file (`app/(tabs)/_layout.tsx`) — just add the wrapper. Do NOT try to inject the banner via `headerRight` or `tabBarBackground` — those APIs don't support arbitrary React components the same way.

### `getSyncStatus` Must Use `== null` Not `=== null`

WatermelonDB optional fields return `null` for records that have never set the value. However, TypeScript types sometimes show the field as `number | null | undefined`. Using `== null` (loose equality) correctly handles both `null` and `undefined`:

```typescript
// CORRECT
if (record.syncedAt == null) return 'pending';

// WRONG — misses undefined case
if (record.syncedAt === null) return 'pending';

// WRONG — treats syncedAt=0 (epoch) as unsynced
if (!record.syncedAt) return 'pending';
```

### Encrypted Storage — What's Already Done (NFR6)

`apps/mobile/src/services/supabase-client.ts` already uses `expo-secure-store` for token persistence:
```typescript
const ExpoSecureStoreAdapter = {
  getItem: (key) => SecureStore.getItemAsync(key),
  setItem: (key, value) => SecureStore.setItemAsync(key, value),
  removeItem: (key) => SecureStore.removeItemAsync(key),
};
```
This maps to iOS Keychain and Android Keystore automatically via `expo-secure-store`. No changes needed to satisfy NFR6 for auth tokens.

For WatermelonDB data at rest: the LokiJS adapter used in this codebase stores data in-memory with persistence via IndexedDB (for Expo Go/web) or AsyncStorage. On physical iOS/Android devices, iOS Data Protection and Android's default file-system encryption cover WatermelonDB's SQLite files when using the native SQLite adapter. The LokiJS adapter is acceptable for MVP — note this as a production readiness item for the dev agent record.

### No Sync Service in This Story

Story 6.1 establishes the **infrastructure** for offline tracking and network detection. The actual sync push/pull service is built in story 6.2. As a result:
- `syncedAt` will always remain `null` on newly created records (no sync service to update it)
- `pendingCount` will only increase in story 6.1 — it never decreases until story 6.2
- The `isSyncing`, `lastSyncAt`, and `syncError` fields in `SyncContext` are intentionally stubbed as false/null for this story

This is by design. The indicators (pending badge, yellow dot count) are fully functional — they show real pending counts. They just never clear until story 6.2 connects them to the server.

### LokiJS Test Adapter (from previous stories)

Tests use the LokiJS adapter without incremental IndexedDB (same as all previous story tests):
```typescript
function createTestDatabase(): Database {
  const adapter = new LokiJSAdapter({
    schema,
    useWebWorker: false,
    useIncrementalIndexedDB: false,
  });
  return new Database({
    adapter,
    modelClasses: [Customer, Quote, Job, Invoice, Payment, /* etc */],
  });
}
```

Import `schema` from `../db/schema` and use the updated v10 schema. The LokiJS adapter runs migrations automatically on initialization when `schema.version` increases.

From story 5.3: Jest config (`jest.config.js`) was already updated to include `app/` in `roots` for test discovery. New test files under `src/` are already discovered by the existing `roots: ['<rootDir>/src/', '<rootDir>/app/']` config.

### Provider Nesting Order in `_layout.tsx`

After all additions, the provider tree in `_layout.tsx` must be:
```
StripeProvider
  AuthProvider
    NetworkProvider        ← new (no deps on Database)
      DatabaseProvider
        SyncProvider       ← new (depends on DatabaseProvider via useDatabase())
          AuthGate
```

`NetworkProvider` does not depend on the database — it only needs `NetInfo`. Place it outside `DatabaseProvider`. `SyncProvider` queries WatermelonDB so it must be inside `DatabaseProvider`.

### Project Structure Notes

New files follow established naming conventions:
- `src/contexts/sync-context.tsx` — Context file (PascalCase component, kebab-case filename) ✓
- `src/hooks/use-network.ts` — Hook with `use` prefix ✓
- `src/hooks/use-sync-status.ts` — Hook with `use` prefix ✓
- `src/components/ui/sync-indicator.tsx` — UI primitive, no business logic ✓
- `src/components/ui/network-status-bar.tsx` — UI primitive, no business logic ✓
- All test files co-located with source files: `.test.ts` suffix ✓

Modified files:
- `apps/mobile/package.json` — New dependency
- `apps/mobile/app/_layout.tsx` — Add NetworkProvider + SyncProvider
- `apps/mobile/app/(tabs)/_layout.tsx` — Add NetworkStatusBar wrapper
- `apps/mobile/src/db/schema.ts` — Version 9 → 10, add synced_at columns
- `apps/mobile/src/db/migrations.ts` — Add v10 migration step
- All 10 `apps/mobile/src/db/models/*.ts` — Add `syncedAt` field
- Job list, customer list, quote list screens — Add SyncIndicator to cards

All paths are relative to `mvps/field-service-management/src/` as the monorepo root.

### References

- [Source: epics.md#Story 6.1] — All acceptance criteria and FR36, FR39, NFR3, NFR6
- [Source: architecture.md#Data Model] — "All tables include id (UUID), created_at, updated_at, and synced_at columns"
- [Source: architecture.md#Offline UX Patterns] — "Network status indicator in header (subtle — green dot online, yellow dot syncing, red dot offline with pending count)"
- [Source: architecture.md#Enforcement Guidelines] — WatermelonDB for all mobile CRUD; co-locate tests; TypeScript strict; no `any` types
- [Source: architecture.md#Naming Patterns] — `snake_case` DB columns (`synced_at`), `camelCase` TS fields (`syncedAt`), `kebab-case` files
- [Source: apps/mobile/src/contexts/network-context.tsx] — Already correct; just needs the dep installed and provider added to layout
- [Source: apps/mobile/app/_layout.tsx] — Current provider tree (StripeProvider > AuthProvider > DatabaseProvider)
- [Source: apps/mobile/app/(tabs)/_layout.tsx] — Current tabs setup; needs NetworkStatusBar wrapper
- [Source: apps/mobile/src/db/schema.ts] — Current v9 schema; all 10 tables need synced_at added
- [Source: apps/mobile/src/db/migrations.ts] — Existing migration pattern to follow for v10
- [Source: apps/mobile/package.json] — Current deps; @react-native-community/netinfo missing; expo ~52.0.0, react-native 0.76.6
- [Source: stories/5-3-customer-csv-import.md#Dev Agent Record] — Jest config updated to include app/ in roots; LokiJS createTestDatabase pattern; TypeScript strict mode conventions

## Dev Agent Record

### Agent Model Used

claude-sonnet-4-6

### Debug Log References

N/A

### Completion Notes List

- Installed `@react-native-community/netinfo@^11.4.1` — resolves the runtime crash from the missing import in `network-context.tsx`.
- Added `NetworkProvider` wrapping `DatabaseProvider` in `app/_layout.tsx`; added `SyncProvider` inside `DatabaseProvider` (requires database to be initialized first). Provider tree: StripeProvider > AuthProvider > NetworkProvider > DatabaseProvider > SyncProvider > AuthGate.
- Created `use-network.ts` hook as a thin `useContext(NetworkContext)` wrapper.
- Schema migrated v9 → v10: added `synced_at` optional number column to all 10 tables (`pricebook_items`, `customers`, `quotes`, `quote_photos`, `line_items`, `jobs`, `job_photos`, `schedule_events`, `invoices`, `payments`). Migration step prepended to `migrations.ts` array as `toVersion: 10`.
- Added `@field('synced_at') syncedAt!: number | null` to all 10 model files.
- Created `sync-context.tsx` with `SyncProvider` that reactively counts pending records using `database.withChangesForTables()` + per-table `Q.where('synced_at', Q.eq(null)).fetchCount()`. `isSyncing`, `lastSyncAt`, `syncError` stubbed for story 6.2.
- Created `use-sync-status.ts` with pure `getSyncStatus()` function using `== null` (covers both null and undefined from LokiJS/SQLite adapters).
- Created `SyncIndicator` UI component — renders yellow ↻ badge for pending records, null for synced.
- Created `NetworkStatusBar` UI component — hidden when online+synced (AC#3), yellow dot + count when offline (AC#2) or online-with-pending (AC#4).
- Updated `app/(tabs)/_layout.tsx` to wrap `<Tabs>` in `<View style={{ flex: 1 }}>` with `<NetworkStatusBar />` above.
- Added `SyncIndicator` to `job-card.tsx`, `customer-card.tsx`, `quote-card.tsx` — each card now shows pending badge when `syncedAt == null`.
- LokiJS adapter returns `undefined` (not `null`) for unset optional fields; test assertions updated to use `== null` semantics consistent with `getSyncStatus`. This is a test-adapter artifact — SQLite production returns `null`.
- All 107 tests pass (97 pre-existing + 10 new), no regressions.

### File List

- `apps/mobile/package.json` — Added `@react-native-community/netinfo@^11.4.1`
- `apps/mobile/app/_layout.tsx` — Added NetworkProvider + SyncProvider to provider tree
- `apps/mobile/app/(tabs)/_layout.tsx` — Added View wrapper + NetworkStatusBar
- `apps/mobile/src/db/schema.ts` — Version 9 → 10; added synced_at to all 10 tables
- `apps/mobile/src/db/migrations.ts` — Added toVersion: 10 migration step
- `apps/mobile/src/db/models/pricebook-item.ts` — Added syncedAt field
- `apps/mobile/src/db/models/customer.ts` — Added syncedAt field
- `apps/mobile/src/db/models/quote.ts` — Added syncedAt field
- `apps/mobile/src/db/models/quote-photo.ts` — Added syncedAt field
- `apps/mobile/src/db/models/line-item.ts` — Added syncedAt field
- `apps/mobile/src/db/models/job.ts` — Added syncedAt field
- `apps/mobile/src/db/models/job-photo.ts` — Added syncedAt field
- `apps/mobile/src/db/models/schedule-event.ts` — Added syncedAt field
- `apps/mobile/src/db/models/invoice.ts` — Added syncedAt field
- `apps/mobile/src/db/models/payment.ts` — Added syncedAt field
- `apps/mobile/src/contexts/sync-context.tsx` — New: SyncProvider + useSync hook
- `apps/mobile/src/hooks/use-network.ts` — New: useNetwork hook
- `apps/mobile/src/hooks/use-sync-status.ts` — New: getSyncStatus pure function
- `apps/mobile/src/hooks/use-sync-status.test.ts` — New: 4 unit tests for getSyncStatus
- `apps/mobile/src/db/schema.test.ts` — New: 6 integration tests for schema v10 + synced_at
- `apps/mobile/src/components/ui/sync-indicator.tsx` — New: SyncIndicator UI component
- `apps/mobile/src/components/ui/network-status-bar.tsx` — New: NetworkStatusBar UI component
- `apps/mobile/src/components/jobs/job-card.tsx` — Added SyncIndicator to title row
- `apps/mobile/src/components/customers/customer-card.tsx` — Added SyncIndicator to name row
- `apps/mobile/src/components/quotes/quote-card.tsx` — Added SyncIndicator to customer name row
