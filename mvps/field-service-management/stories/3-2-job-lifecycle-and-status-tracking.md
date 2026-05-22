# Story 3.2: Job Lifecycle and Status Tracking

Status: ready-for-dev

## Story

As a tradesperson,
I want to track each job through its lifecycle from quoted to complete,
so that I always know the status of every job and nothing falls through the cracks.

## Acceptance Criteria

1. **[QUOTED job creation]** Given an approved quote exists, when the user creates a job linked to that quote (quoteId provided), then a new job record is created in WatermelonDB with status `QUOTED`, linked to the quote and customer. (FR15)

2. **[Start Job — QUOTED/SCHEDULED → IN_PROGRESS]** Given a job with status `QUOTED` or `SCHEDULED`, when the user taps "Start Job", then the job status transitions to `IN_PROGRESS` in WatermelonDB. (FR15)

3. **[Complete Job — IN_PROGRESS → COMPLETE]** Given a job with status `IN_PROGRESS`, when the user taps "Complete Job", then the job status transitions to `COMPLETE` and `completed_at` is recorded as the current timestamp. (FR15)

4. **[Jobs list with color-coded status badges and status filter]** Given the user navigates to the Jobs tab, when the jobs list loads, then all jobs are displayed as cards with a color-coded status badge (color per status as defined in Dev Notes), and a horizontal status filter at the top lets the user show all jobs or filter by a single status: All / Quoted / Scheduled / In Progress / Complete / Invoiced; filtering operates against WatermelonDB local data within 500ms. (FR15, NFR3)

5. **[Notes editing]** Given a job record, when the user views the job detail screen and edits the notes field, then the notes are saved to WatermelonDB on blur (not on every keystroke); the saved value is re-fetched and displayed correctly after save. (FR18)

6. **[Valid transitions only]** Given any job in a given status, when the status transition logic runs, then only valid forward transitions are permitted: `QUOTED → SCHEDULED`, `QUOTED → IN_PROGRESS`, `SCHEDULED → IN_PROGRESS`, `IN_PROGRESS → COMPLETE`, `COMPLETE → INVOICED`; any other transition is rejected and does not modify the record. (FR15)

## Tasks / Subtasks

- [ ] Task 1: Update `useCreateJob` in `use-schedule.ts` to accept optional `initialStatus` (AC: #1)
  - [ ] 1.1: In `apps/mobile/src/hooks/use-schedule.ts`, add optional field `initialStatus?: string` to the `CreateJobParams` interface (default to `'SCHEDULED'`)
  - [ ] 1.2: In the `createJob` function body, replace the hardcoded `record.status = 'SCHEDULED'` with `record.status = params.initialStatus ?? 'SCHEDULED'`
  - [ ] 1.3: **No other changes** to use-schedule.ts — all other hook logic remains identical

- [ ] Task 2: Create `use-jobs.ts` hook (AC: #1, #2, #3, #4, #5, #6)
  - [ ] 2.1: Create `apps/mobile/src/hooks/use-jobs.ts`
  - [ ] 2.2: Export `useJobs(statusFilter?: string)` — observable query returning `{ jobs: Job[], isLoading: boolean }` filtered by `user.accountId`; when `statusFilter` is provided, add a `Q.where('status', statusFilter)` clause; sort by `created_at` descending (`Q.sortBy('created_at', Q.desc)`)
  - [ ] 2.3: Export `useJob(id: string)` — observable single job returning `{ job: Job | null, isLoading: boolean }`; subscribe to `.observe()` on the single record; set `isLoading: false` with `job: null` if not found
  - [ ] 2.4: Export `useTransitionJobStatus()` returning `{ transitionStatus: (jobId: string, newStatus: string) => Promise<void> }` — validates transition using the `VALID_TRANSITIONS` map (see Dev Notes); throws `Error('Invalid status transition: <from> → <to>')` for invalid transitions; when transitioning to `COMPLETE`, also sets `completed_at` to `Date.now()`; all writes inside `database.write()`
  - [ ] 2.5: Export `useUpdateJobNotes()` returning `{ updateNotes: (jobId: string, notes: string) => Promise<void> }` — wraps `database.write()` to update the `notes` field on the job record

- [ ] Task 3: Create `use-jobs.test.ts` (AC: #2, #3, #6)
  - [ ] 3.1: Create `apps/mobile/src/hooks/use-jobs.test.ts`
  - [ ] 3.2: Use the same LokiJSAdapter in-memory test database pattern from `use-schedule.test.ts` — create a `createTestDatabase()` helper that includes `Job` in `modelClasses`
  - [ ] 3.3: Test: transitioning `QUOTED → IN_PROGRESS` updates the job's `status` to `IN_PROGRESS`
  - [ ] 3.4: Test: transitioning `IN_PROGRESS → COMPLETE` sets both `status` to `COMPLETE` and `completed_at` to a non-null timestamp
  - [ ] 3.5: Test: attempting `COMPLETE → QUOTED` throws an error and does not modify the record
  - [ ] 3.6: Test: updating notes updates the `notes` field and does not change any other field
  - [ ] 3.7: Test: `useJobs` query with a status filter only returns jobs matching that status

- [ ] Task 4: Create `job-status-badge.tsx` component (AC: #4)
  - [ ] 4.1: Create `apps/mobile/src/components/jobs/job-status-badge.tsx`
  - [ ] 4.2: Accepts props `{ status: string; size?: 'sm' | 'md' }` (default `'md'`)
  - [ ] 4.3: Renders a `<View>` with a colored background + `<Text>` label; color and label per status (see Dev Notes for exact mapping); uses `StyleSheet.create` — no NativeWind
  - [ ] 4.4: For unknown status values, render a gray badge with the raw status string

- [ ] Task 5: Create `job-card.tsx` component (AC: #2, #3, #4)
  - [ ] 5.1: Create `apps/mobile/src/components/jobs/job-card.tsx`
  - [ ] 5.2: Accepts props: `{ job: Job; customerName: string; onPress: () => void; onTransition: (newStatus: string) => void }`
  - [ ] 5.3: Renders: job title, `<JobStatusBadge>`, customer name, optional scheduled time range (formatted as "May 22, 9:00 AM – 10:30 AM" when `scheduledStart` is non-null), and — conditional on job status — an action button:
    - `QUOTED` or `SCHEDULED`: renders "Start Job" button → calls `onTransition('IN_PROGRESS')`
    - `IN_PROGRESS`: renders "Complete Job" button → calls `onTransition('COMPLETE')`
    - `COMPLETE`, `INVOICED`: renders no action button
  - [ ] 5.4: The entire card is `TouchableOpacity` — tapping anywhere (not the action button) calls `onPress()`
  - [ ] 5.5: Uses `StyleSheet.create` for all styling

- [ ] Task 6: Replace `app/(tabs)/index.tsx` with the real jobs list screen (AC: #2, #3, #4)
  - [ ] 6.1: Overwrite `apps/mobile/app/(tabs)/index.tsx` with the jobs list implementation (see Dev Notes for outline)
  - [ ] 6.2: Status filter bar: a horizontal `ScrollView` at the top with filter chip buttons: "All", "Quoted", "Scheduled", "In Progress", "Complete", "Invoiced" — active chip highlighted; selecting a chip updates `statusFilter` state
  - [ ] 6.3: Use `useJobs(statusFilter || undefined)` to get the observable jobs list; pass `undefined` when "All" is selected
  - [ ] 6.4: For each job, look up the customer name from a `useCustomers()` call (all customers are already in WatermelonDB from prior stories); build a `Map<string, string>` of `customerId → name` for O(1) lookup
  - [ ] 6.5: Render jobs in `FlatList` using `<JobCard>`; `onPress` navigates to `router.push('/jobs/' + job.id)`; `onTransition` calls `transitionStatus(job.id, newStatus)` from `useTransitionJobStatus()`
  - [ ] 6.6: Show an empty-state `<Text>` ("No jobs yet" or "No jobs with this status") when jobs array is empty and `isLoading` is false
  - [ ] 6.7: Show skeleton placeholders while `isLoading` is true (consistent with prior screens)

- [ ] Task 7: Create the job detail screen (AC: #2, #3, #5)
  - [ ] 7.1: Create directory `apps/mobile/app/(tabs)/jobs/`
  - [ ] 7.2: Create `apps/mobile/app/(tabs)/jobs/[id].tsx` — the job detail screen (see Dev Notes for outline)
  - [ ] 7.3: Read `id` from `useLocalSearchParams<{ id: string }>()`
  - [ ] 7.4: Use `useJob(id)` for observable job data and `useCustomers()` for customer lookup
  - [ ] 7.5: Display: job title (large header), `<JobStatusBadge>`, customer name, scheduled time range (if set), `completed_at` formatted date (if set and status is COMPLETE or INVOICED)
  - [ ] 7.6: Notes section: `<TextInput multiline>` pre-filled with `job.notes`; on `onBlur`, call `updateNotes(job.id, localNotes)` from `useUpdateJobNotes()`; show a brief "Saved" indicator (opacity animation fading out over 1.5s) after successful save
  - [ ] 7.7: Status action button (same logic as job-card.tsx): "Start Job" for QUOTED/SCHEDULED; "Complete Job" for IN_PROGRESS; none for COMPLETE/INVOICED; calls `transitionStatus()` on tap
  - [ ] 7.8: Back navigation: use `<Stack.Screen options={{ title: job?.title ?? 'Job Detail' }} />` inside the component to set the header title dynamically

- [ ] Task 8: Register the hidden job detail screen in the tabs layout (AC: #4)
  - [ ] 8.1: In `apps/mobile/app/(tabs)/_layout.tsx`, add a new `<Tabs.Screen name="jobs/[id]" options={{ href: null, title: 'Job Details' }} />` entry after the `more` screen entry — `href: null` hides it from the tab bar while keeping it accessible via `router.push`

## Dev Notes

### What's Already Done — No Schema Changes Needed

The `jobs` table was fully created in Story 3.1. WatermelonDB schema is already at v6 with all required columns. The Prisma `Job` model and `JobStatus` enum already exist in `schema.prisma`. The `Job` WatermelonDB model class already exists at `apps/mobile/src/db/models/job.ts`.

**Do NOT create any new database migrations, schema changes, or Prisma migrations for this story.**

### Valid Status Transitions Map

```typescript
// In use-jobs.ts
const VALID_TRANSITIONS: Record<string, string[]> = {
  QUOTED: ['SCHEDULED', 'IN_PROGRESS'],
  SCHEDULED: ['IN_PROGRESS'],
  IN_PROGRESS: ['COMPLETE'],
  COMPLETE: ['INVOICED'],   // INVOICED set programmatically in Epic 4, not by user action
  INVOICED: [],
};

// In transitionStatus():
export function useTransitionJobStatus() {
  const database = useDatabase();

  const transitionStatus = useCallback(async (jobId: string, newStatus: string): Promise<void> => {
    await database.write(async () => {
      const job = await database.get<Job>('jobs').find(jobId);
      const validNext = VALID_TRANSITIONS[job.status] ?? [];
      if (!validNext.includes(newStatus)) {
        throw new Error(`Invalid status transition: ${job.status} → ${newStatus}`);
      }
      await job.update((record) => {
        record.status = newStatus;
        if (newStatus === 'COMPLETE') {
          record.completedAt = Date.now();
        }
      });
    });
  }, [database]);

  return { transitionStatus };
}
```

### Status Colors and Labels

```typescript
// job-status-badge.tsx — use these exact colors
const STATUS_CONFIG: Record<string, { label: string; bg: string; text: string }> = {
  QUOTED:      { label: 'Quoted',      bg: '#E2E8F0', text: '#475569' },
  SCHEDULED:   { label: 'Scheduled',   bg: '#DBEAFE', text: '#1D4ED8' },
  IN_PROGRESS: { label: 'In Progress', bg: '#FEF3C7', text: '#92400E' },
  COMPLETE:    { label: 'Complete',    bg: '#DCFCE7', text: '#166534' },
  INVOICED:    { label: 'Invoiced',    bg: '#EDE9FE', text: '#5B21B6' },
};
```

### `use-jobs.ts` — Key Patterns

```typescript
// apps/mobile/src/hooks/use-jobs.ts
import { useState, useEffect, useCallback } from 'react';
import { Q } from '@nozbe/watermelondb';
import { useDatabase } from '../contexts/database-context';
import { useAuth } from '../contexts/auth-context';
import Job from '../db/models/job';

export function useJobs(statusFilter?: string): { jobs: Job[]; isLoading: boolean } {
  const database = useDatabase();
  const { user } = useAuth();
  const [jobs, setJobs] = useState<Job[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!user?.accountId) { setJobs([]); setIsLoading(false); return; }

    const clauses = [
      Q.where('account_id', user.accountId),
      ...(statusFilter ? [Q.where('status', statusFilter)] : []),
      Q.sortBy('created_at', Q.desc),
    ];

    const subscription = database
      .get<Job>('jobs')
      .query(...clauses)
      .observe()
      .subscribe((records) => { setJobs(records); setIsLoading(false); });

    return () => subscription.unsubscribe();
  }, [database, user?.accountId, statusFilter]);

  return { jobs, isLoading };
}

export function useJob(id: string): { job: Job | null; isLoading: boolean } {
  const database = useDatabase();
  const [job, setJob] = useState<Job | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!id) { setJob(null); setIsLoading(false); return; }

    const subscription = database
      .get<Job>('jobs')
      .findAndObserve(id)
      .subscribe({ 
        next: (record) => { setJob(record); setIsLoading(false); },
        error: () => { setJob(null); setIsLoading(false); },
      });

    return () => subscription.unsubscribe();
  }, [database, id]);

  return { job, isLoading };
}
```

### Customer Name Lookup Pattern (jobs list)

Same approach established in Story 3.1: call `useCustomers()` (from `apps/mobile/src/hooks/use-customers.ts` — already exists from Epic 2) to get all customers, then build a map:

```typescript
// In apps/mobile/app/(tabs)/index.tsx
const { customers } = useCustomers();
const customerMap = useMemo(
  () => new Map(customers.map((c) => [c.id, c.name])),
  [customers],
);
// Usage: customerMap.get(job.customerId) ?? 'Unknown Customer'
```

### Status Filter Mapping

The display labels differ from the stored enum values. Use this map for the filter chips:

```typescript
const STATUS_FILTERS = [
  { label: 'All', value: undefined },
  { label: 'Quoted', value: 'QUOTED' },
  { label: 'Scheduled', value: 'SCHEDULED' },
  { label: 'In Progress', value: 'IN_PROGRESS' },
  { label: 'Complete', value: 'COMPLETE' },
  { label: 'Invoiced', value: 'INVOICED' },
] as const;
```

### Job Detail Screen — Navigation and Header

```typescript
// apps/mobile/app/(tabs)/jobs/[id].tsx
import { useLocalSearchParams, Stack } from 'expo-router';

export default function JobDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { job, isLoading } = useJob(id);
  // ...

  return (
    <>
      <Stack.Screen options={{ title: job?.title ?? 'Job Detail' }} />
      {/* rest of screen */}
    </>
  );
}
```

Navigate to the detail screen from the jobs list:
```typescript
import { router } from 'expo-router';
// In onPress handler:
router.push(`/jobs/${job.id}`);
```

### Tabs Layout — Hidden Screen Registration

In `apps/mobile/app/(tabs)/_layout.tsx`, add after the existing `more` entry:

```tsx
<Tabs.Screen
  name="jobs/[id]"
  options={{ href: null, title: 'Job Details' }}
/>
```

`href: null` is supported in Expo Router 4 (bundled with Expo SDK 52) and prevents the screen from appearing in the tab bar while still making it navigable. **Do not add a header for this screen in the Tabs layout — the `<Stack.Screen>` within the component itself controls the header title.**

### Test Pattern — Direct DB (no React hooks mocking)

Follow the exact same pattern as `use-schedule.test.ts`:
- `createTestDatabase()` using `LokiJSAdapter` with `useWebWorker: false, useIncrementalIndexedDB: false`
- All model classes must be listed in `modelClasses` (include `Job` at minimum)
- Test business logic directly against `database.write()` — do NOT try to render hooks with `renderHook`
- The `VALID_TRANSITIONS` map should be exported from `use-jobs.ts` so tests can import and verify it directly

```typescript
// Minimal test structure
import { Database } from '@nozbe/watermelondb';
import LokiJSAdapter from '@nozbe/watermelondb/adapters/lokijs';
import { schema } from '../db/schema';
import Job from '../db/models/job';
import { VALID_TRANSITIONS } from './use-jobs';

function createTestDatabase(): Database {
  const adapter = new LokiJSAdapter({ schema, useWebWorker: false, useIncrementalIndexedDB: false });
  return new Database({ adapter, modelClasses: [Job] });
}
```

### `completed_at` Field Note

The `Job` model's `completedAt` field is declared as `@field('completed_at') completedAt!: number | null` — it stores a Unix timestamp in **milliseconds** (not a Date object). When transitioning to COMPLETE, set `record.completedAt = Date.now()`. When displaying on the UI, wrap in `new Date(job.completedAt)` for formatting.

### Timestamp Display Helper

For displaying scheduled times on cards:
```typescript
function formatTimeRange(start: number | null, end: number | null): string {
  if (!start) return '';
  const s = new Date(start);
  const e = end ? new Date(end) : null;
  const fmt = (d: Date) =>
    d.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });
  return e ? `${fmt(s)} – ${fmt(e)}` : fmt(s);
}
```

### Architecture Compliance Notes

- **All writes go through WatermelonDB.** Never call the API directly for job status transitions — the sync engine (Epic 6) will propagate changes to the server automatically.
- **No NativeWind.** Use `StyleSheet.create` for all styling — same as every prior story.
- **Auth context access.** `const { user } = useAuth()` → `user.accountId` (not nested under `.user_metadata`). This pattern is established in `use-schedule.ts`.
- **Observable pattern.** Follow the `useEffect` + `.observe().subscribe()` + `return () => subscription.unsubscribe()` teardown pattern exactly as in `use-schedule.ts`.
- **`database.write()` wraps all mutations.** Single `database.write()` call per operation — never multiple nested writes.
- **TypeScript strict mode.** No `any` types. Export the `VALID_TRANSITIONS` const with explicit typing.

### Project Structure Notes

Files to **CREATE**:
```
apps/mobile/src/hooks/use-jobs.ts                      NEW
apps/mobile/src/hooks/use-jobs.test.ts                 NEW
apps/mobile/src/components/jobs/job-status-badge.tsx   NEW
apps/mobile/src/components/jobs/job-card.tsx           NEW
apps/mobile/app/(tabs)/jobs/[id].tsx                   NEW  (directory must also be created)
```

Files to **MODIFY**:
```
apps/mobile/src/hooks/use-schedule.ts                  MODIFY  (add initialStatus to CreateJobParams)
apps/mobile/app/(tabs)/index.tsx                       MODIFY  (replace placeholder with real screen)
apps/mobile/app/(tabs)/_layout.tsx                     MODIFY  (register hidden jobs/[id] screen)
```

All paths are relative to `mvps/field-service-management/src/` as the monorepo root.

### References

- [Source: planning/epics.md#Story 3.2] — All acceptance criteria, FR15, FR18, NFR3
- [Source: planning/architecture.md#Data Architecture] — WatermelonDB schema v6; `jobs` table column definitions; observable query pattern; `database.write()` for all mobile writes
- [Source: planning/architecture.md#Frontend Architecture (Mobile)] — WatermelonDB observables + React Context state pattern; no Redux/Zustand; feature-based folder structure; FlatList with virtualization
- [Source: planning/architecture.md#Naming Patterns] — snake_case DB columns, camelCase TypeScript, kebab-case files, PascalCase components
- [Source: planning/architecture.md#Project Structure] — `app/(tabs)/jobs/index.tsx` + `[id].tsx`; `src/components/jobs/`; `src/hooks/use-jobs.ts`
- [Source: stories/3-1-calendar-view-and-job-scheduling.md] — Job model created; schema v6; `jobs` + `schedule_events` tables; `useCreateJob` in use-schedule.ts; `record.completedAt` is numeric ms; atomic write pattern; auth context `.accountId` field
- [Source: apps/mobile/src/hooks/use-schedule.ts] — Observable hook pattern to replicate; `useDatabase()` + `useAuth()` usage; `Q.where/Q.sortBy/Q.gte/Q.lte` query building; subscription teardown
- [Source: apps/mobile/src/hooks/use-schedule.test.ts] — LokiJSAdapter test database pattern; direct DB assertions (no hook rendering); model class registration
- [Source: apps/mobile/src/db/models/job.ts] — Job model fields; `completedAt` is `@field` (number | null) not `@date`; `status` is `@text`
- [Source: apps/mobile/src/db/schema.ts] — Current schema v6; `jobs` table exact column definitions; column types (number for timestamps, string for status/text, isOptional flags)
- [Source: apps/mobile/app/(tabs)/_layout.tsx] — Current tabs layout; `href: null` pattern for hidden screens in Expo Router 4

## Dev Agent Record

### Agent Model Used

claude-sonnet-4-6

### Debug Log References

### Completion Notes List

### File List
