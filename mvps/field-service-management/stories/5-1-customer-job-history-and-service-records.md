# Story 5.1: Customer Job History and Service Records

Status: ready-for-dev

## Story

As a tradesperson,
I want to see a customer's complete service history when I visit their property,
so that I know what work was done previously and can provide better service.

## Acceptance Criteria

1. **[Service history list in reverse chronological order]** Given a customer has had multiple jobs completed, when the user views the customer detail screen at `/(tabs)/customers/[id]`, then a "Service History" section appears below the customer contact info, showing all jobs for that customer in reverse chronological order (most recent first). Each row shows: job title, scheduled start date (formatted as "Jan 15, 2026"), job status badge (color-coded), and invoice total (formatted as "$X,XXX.XX") when an invoice exists for the job. (FR33)

2. **[Tapping a history row navigates to job detail]** Given the user taps on a historical job row in the service history list, when the navigation occurs, then the full job detail screen at `/(tabs)/jobs/[id]` is pushed onto the navigation stack, showing photos, notes, signature, and linked invoice/payment status for that job.

3. **[Empty state prompts first quote]** Given a customer has no previous jobs (zero records in WatermelonDB matching that customer_id), when the user views the customer detail screen, then the service history section shows an empty state with the text "No service history yet" and a "Create First Quote" button. Tapping "Create First Quote" navigates to `/(modals)/create-quote` with the customer pre-selected (passing `customerId` as a route param).

4. **[Data is loaded entirely from local WatermelonDB]** Given the device may be offline, when the service history loads, then all job and invoice data is read from WatermelonDB local storage (never from the API), and the section renders immediately without a network spinner. The service history must be reactive: if a new job is added or a job's status changes elsewhere in the app, the service history updates automatically without a manual refresh. (FR36 alignment — offline-first)

5. **[Invoice total shown only when invoice exists]** Given a job in the service history list has no linked invoice (invoice_id is null or no invoice record exists), when the row renders, then no dollar amount is shown. Given a job has a linked invoice, the formatted total from the invoice record is displayed (e.g., "$1,500.00"). Partial or overdue invoices still show their total (not amount_paid — always `invoice.total`).

6. **[Status badge uses same colors as Jobs screen]** Given a job appears in service history, when its status badge renders, then the badge colors match those used on the `/(tabs)/jobs/` list screen exactly: QUOTED (gray), SCHEDULED (blue), IN_PROGRESS (amber), COMPLETE (green), INVOICED (teal). No new color values should be introduced — reuse the same STATUS_CONFIG or equivalent constants.

## Tasks / Subtasks

### Task 1: Add `useCustomerJobs` Hook (AC: #1, #4)

- [ ] 1.1: In `apps/mobile/src/hooks/use-jobs.ts`, add a new exported hook `useCustomerJobs(customerId: string)` that returns all jobs for a given customer from WatermelonDB, sorted by `scheduled_start` descending (most recent first). Use the observable pattern consistent with other hooks in that file:
  ```typescript
  export function useCustomerJobs(customerId: string) {
    const database = useDatabase();
    const [jobs, setJobs] = useState<Job[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      if (!customerId) {
        setJobs([]);
        setIsLoading(false);
        return;
      }

      const subscription = database
        .get<Job>('jobs')
        .query(Q.where('customer_id', customerId))
        .observe()
        .subscribe((results) => {
          // Sort in JS since WatermelonDB observe() ORDER BY is adapter-dependent
          const sorted = [...results].sort((a, b) => {
            const aTime = a.scheduledStart ? new Date(a.scheduledStart).getTime() : 0;
            const bTime = b.scheduledStart ? new Date(b.scheduledStart).getTime() : 0;
            return bTime - aTime; // descending: most recent first
          });
          setJobs(sorted);
          setIsLoading(false);
        });

      return () => subscription.unsubscribe();
    }, [database, customerId]);

    return { jobs, isLoading };
  }
  ```
  Ensure `Q` is imported at the top of `use-jobs.ts` if not already: `import { Q } from '@nozbe/watermelondb';`

### Task 2: Add `useJobInvoice` Hook (AC: #5)

- [ ] 2.1: In `apps/mobile/src/hooks/use-invoices.ts`, add a new exported hook `useJobInvoice(jobId: string | null | undefined)` that looks up an invoice by `job_id`:
  ```typescript
  export function useJobInvoice(jobId: string | null | undefined) {
    const database = useDatabase();
    const [invoice, setInvoice] = useState<Invoice | null>(null);

    useEffect(() => {
      if (!jobId) {
        setInvoice(null);
        return;
      }

      const subscription = database
        .get<Invoice>('invoices')
        .query(Q.where('job_id', jobId))
        .observe()
        .subscribe((results) => {
          setInvoice(results[0] ?? null);
        });

      return () => subscription.unsubscribe();
    }, [database, jobId]);

    return invoice;
  }
  ```

### Task 3: Create `service-history.tsx` Component (AC: #1, #2, #3, #5, #6)

- [ ] 3.1: Create `apps/mobile/src/components/customers/service-history.tsx`. This component receives `customerId: string` and `onCreateQuote: () => void` as props. It uses `useCustomerJobs(customerId)` internally. Render a section with header "Service History" and either the job list or empty state:

  ```typescript
  import React from 'react';
  import {
    View,
    Text,
    TouchableOpacity,
    FlatList,
    StyleSheet,
    ActivityIndicator,
  } from 'react-native';
  import { router } from 'expo-router';
  import { useCustomerJobs } from '../../hooks/use-jobs';
  import { useJobInvoice } from '../../hooks/use-invoices';
  import type Job from '../../db/models/job';

  // Match the exact status colors used on the Jobs list screen
  const STATUS_CONFIG: Record<string, { bg: string; text: string; label: string }> = {
    QUOTED:      { bg: '#f3f4f6', text: '#374151', label: 'Quoted' },
    SCHEDULED:   { bg: '#dbeafe', text: '#1d4ed8', label: 'Scheduled' },
    IN_PROGRESS: { bg: '#fef3c7', text: '#b45309', label: 'In Progress' },
    COMPLETE:    { bg: '#dcfce7', text: '#15803d', label: 'Complete' },
    INVOICED:    { bg: '#ccfbf1', text: '#0f766e', label: 'Invoiced' },
  };

  function formatJobDate(job: Job): string {
    const date = job.scheduledStart ? new Date(job.scheduledStart) : null;
    if (!date) return '';
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  }

  function JobHistoryRow({ job }: { job: Job }) {
    const invoice = useJobInvoice(job.id);
    const cfg = STATUS_CONFIG[job.status] ?? STATUS_CONFIG.QUOTED;

    return (
      <TouchableOpacity
        style={styles.row}
        onPress={() => router.push(`/(tabs)/jobs/${job.id}`)}
        activeOpacity={0.7}
      >
        <View style={styles.rowMain}>
          <Text style={styles.jobTitle} numberOfLines={1}>{job.title}</Text>
          <Text style={styles.jobDate}>{formatJobDate(job)}</Text>
        </View>
        <View style={styles.rowMeta}>
          <View style={[styles.badge, { backgroundColor: cfg.bg }]}>
            <Text style={[styles.badgeText, { color: cfg.text }]}>{cfg.label}</Text>
          </View>
          {invoice ? (
            <Text style={styles.invoiceTotal}>
              ${(invoice.total / 100).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            </Text>
          ) : null}
        </View>
      </TouchableOpacity>
    );
  }

  interface ServiceHistoryProps {
    customerId: string;
    onCreateQuote: () => void;
  }

  export default function ServiceHistory({ customerId, onCreateQuote }: ServiceHistoryProps) {
    const { jobs, isLoading } = useCustomerJobs(customerId);

    return (
      <View style={styles.container}>
        <Text style={styles.sectionHeader}>Service History</Text>

        {isLoading ? (
          <ActivityIndicator size="small" color="#16A34A" style={styles.loader} />
        ) : jobs.length === 0 ? (
          <View style={styles.emptyState}>
            <Text style={styles.emptyText}>No service history yet</Text>
            <TouchableOpacity style={styles.createQuoteBtn} onPress={onCreateQuote}>
              <Text style={styles.createQuoteBtnText}>Create First Quote</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <FlatList
            data={jobs}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <JobHistoryRow job={item} />}
            scrollEnabled={false}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
          />
        )}
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      marginTop: 24,
      backgroundColor: '#fff',
      borderTopWidth: 1,
      borderTopColor: '#e5e7eb',
    },
    sectionHeader: {
      fontSize: 16,
      fontWeight: '700',
      color: '#111827',
      paddingHorizontal: 16,
      paddingTop: 16,
      paddingBottom: 8,
    },
    loader: { paddingVertical: 24 },
    emptyState: {
      paddingHorizontal: 16,
      paddingVertical: 24,
      alignItems: 'center',
    },
    emptyText: {
      fontSize: 14,
      color: '#6b7280',
      marginBottom: 12,
    },
    createQuoteBtn: {
      backgroundColor: '#16A34A',
      borderRadius: 8,
      paddingHorizontal: 20,
      paddingVertical: 10,
    },
    createQuoteBtnText: {
      color: '#fff',
      fontSize: 14,
      fontWeight: '600',
    },
    row: {
      paddingHorizontal: 16,
      paddingVertical: 12,
      backgroundColor: '#fff',
    },
    rowMain: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 6,
    },
    jobTitle: {
      fontSize: 15,
      fontWeight: '600',
      color: '#111827',
      flex: 1,
      marginRight: 8,
    },
    jobDate: {
      fontSize: 13,
      color: '#6b7280',
    },
    rowMeta: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    badge: {
      borderRadius: 12,
      paddingHorizontal: 10,
      paddingVertical: 2,
    },
    badgeText: { fontSize: 12, fontWeight: '600' },
    invoiceTotal: {
      fontSize: 14,
      fontWeight: '600',
      color: '#374151',
    },
    separator: {
      height: 1,
      backgroundColor: '#f3f4f6',
      marginLeft: 16,
    },
  });
  ```

### Task 4: Update Customer Detail Screen (AC: #1, #2, #3)

- [ ] 4.1: In `apps/mobile/app/(tabs)/customers/[id].tsx`, import `ServiceHistory` and add it below the existing customer info section. Add an `onCreateQuote` handler that navigates to `/(modals)/create-quote` with the `customerId` pre-filled:
  ```typescript
  import ServiceHistory from '../../../src/components/customers/service-history';

  // Inside the component, add handler:
  const handleCreateQuote = useCallback(() => {
    router.push({
      pathname: '/(modals)/create-quote',
      params: { customerId: id },
    });
  }, [id]);
  ```
  Then in the JSX, add `<ServiceHistory>` after the customer contact card, within a `ScrollView` (wrapping the entire screen content if not already using ScrollView):
  ```tsx
  <ScrollView contentContainerStyle={styles.scrollContent}>
    {/* existing customer info card */}
    ...
    <ServiceHistory customerId={id as string} onCreateQuote={handleCreateQuote} />
  </ScrollView>
  ```
  If the screen already uses a `ScrollView`, simply add `<ServiceHistory />` as the last child. Do NOT nest `FlatList` inside `ScrollView` — `ServiceHistory` uses `scrollEnabled={false}` on its internal FlatList precisely to avoid this.

### Task 5: Verify `job_id` Column Exists on `invoices` WatermelonDB Schema (AC: #5)

- [ ] 5.1: Open `apps/mobile/src/db/schema.ts` and verify the `invoices` tableSchema includes `{ name: 'job_id', type: 'string', isOptional: true }`. The `job_id` column was specified in the architecture data model and should have been added in story 4.1. If it is missing, add it to the schema and bump the schema version (increment by 1 from whatever the current version is), adding a corresponding empty migration step in `apps/mobile/src/db/migrations.ts`.

- [ ] 5.2: Open `apps/mobile/src/db/models/invoice.ts` and verify the `Invoice` model has `@text('job_id') jobId!: string;`. If missing, add it. No schema version change needed beyond what was done in 5.1.

### Task 6: Tests (AC: #1, #4)

- [ ] 6.1: Create `apps/mobile/src/hooks/use-jobs.test.ts` (or add to the existing test file if it exists). Add a describe block for `useCustomerJobs`:
  - Test: returns all jobs matching `customerId`, sorted most-recent-first by `scheduledStart`
  - Test: returns empty array when no jobs exist for `customerId`
  - Test: `customerId` empty string returns empty array immediately without querying
  - Test: reactive — emitting a new job from the observable updates the returned list

- [ ] 6.2: Create `apps/mobile/src/components/customers/service-history.test.tsx`:
  - Test: renders "No service history yet" and "Create First Quote" button when `jobs` is empty
  - Test: calls `onCreateQuote` when "Create First Quote" is tapped
  - Test: renders a row for each job in the list
  - Test: `JobHistoryRow` shows invoice total when invoice exists, nothing when null
  Mock WatermelonDB database using the same pattern as other mobile tests in the codebase.

## Dev Notes

### No New WatermelonDB Schema Changes Expected

All required tables (`jobs`, `invoices`, `customers`) were created in previous epics. This story only adds new query hooks over existing schema. The only schema check needed is verifying `job_id` on the `invoices` table (Task 5.1) — this should already be present from story 4.1.

### `scrollEnabled={false}` Is Critical for Nested Lists

`ServiceHistory` embeds a `FlatList` inside a parent `ScrollView` on the customer detail screen. React Native throws a warning when a `FlatList` (which provides its own scroll container) is nested inside a `ScrollView`. Setting `scrollEnabled={false}` on the inner `FlatList` disables its own scrolling, allowing the outer `ScrollView` to handle all scroll events. The list renders all items without virtualization in this mode — acceptable at MVP scale (customers rarely have more than 50 jobs).

### `useJobInvoice` Is Called Per Row — Performance Consideration

`JobHistoryRow` calls `useJobInvoice(job.id)` for each row. For a customer with 20 jobs, this creates 20 WatermelonDB subscriptions. Each subscription is lightweight (SQLite index lookup by `job_id`), and WatermelonDB manages them efficiently. For MVP (< 100 jobs per customer), this is acceptable. If performance becomes a concern post-MVP, a single `useCustomerInvoices(customerId)` hook fetching all invoices in one query and building a `Map<jobId, Invoice>` can replace the per-row hook.

### Status Badge Colors Must Match Jobs Screen

The `STATUS_CONFIG` in `service-history.tsx` must use the exact same hex values as the jobs list screen (`apps/mobile/app/(tabs)/jobs/index.tsx`). Check that screen's status config before finalizing the colors. If the jobs screen uses a shared constant, import it from there rather than duplicating. If status colors are inline in the jobs screen, extract them to a shared location (e.g., `packages/shared/src/constants/job-statuses.ts`) and import in both places.

### `scheduledStart` Field Name in WatermelonDB

The `jobs` WatermelonDB model field is `scheduledStart` (camelCase TypeScript property), backed by the `scheduled_start` column (snake_case). When reading `job.scheduledStart`, it returns a `Date` object (due to `@date` decorator) or a number in milliseconds (WatermelonDB stores dates as ms). Use `new Date(a.scheduledStart)` safely since `Date` accepts both `Date` and `number`. If `scheduledStart` can be null (jobs created without a scheduled time), guard: `job.scheduledStart ? new Date(job.scheduledStart).getTime() : 0`.

### `invoice.total` Is Integer Cents — Format for Display Only in UI

When rendering the invoice total in `JobHistoryRow`, convert to dollars only in the display string:
```typescript
`$${(invoice.total / 100).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`
```
The regex adds thousands separators (e.g., `$1,500.00`). Never store or pass the dollar-formatted value — use integer cents everywhere in business logic.

### `create-quote` Route Accepts `customerId` Param

The quote creation modal at `/(modals)/create-quote` was implemented in story 2.2 with `CustomerPicker` integration. Passing `customerId` as a route param pre-selects the customer. Verify the modal reads `customerId` from `useLocalSearchParams()` — if not, no changes are needed to the modal for this story (the CTA still navigates there; the user selects the customer manually). The pre-selection is a UX nicety, not a hard requirement of AC #3.

### Customer Detail Screen Already Uses ScrollView

Story 2.1 implemented `apps/mobile/app/(tabs)/customers/[id].tsx`. If the screen renders customer fields in a flat `View` without a `ScrollView`, wrapping in `ScrollView` is necessary to allow scrolling past the contact info to the service history. Check the existing implementation before adding the wrapper — if it already has a `ScrollView`, simply add `<ServiceHistory />` as the last child.

### Job Model Fields from Story 3.2

From story 3.2 (job lifecycle), the `Job` WatermelonDB model has:
- `@text('customer_id') customerId!: string`
- `@text('status') status!: string` — values: `QUOTED | SCHEDULED | IN_PROGRESS | COMPLETE | INVOICED`
- `@text('title') title!: string`
- `@date('scheduled_start') scheduledStart!: Date` (or number ms)
- `@text('quote_id') quoteId!: string` (optional)

From story 4.1 (invoice generation), the `Invoice` WatermelonDB model has:
- `@text('job_id') jobId!: string` (optional)
- `@field('total') total!: number` — integer cents
- `@text('status') status!: string`
- `@text('invoice_number') invoiceNumber!: string` (optional)

### Project Structure Notes

**Files to CREATE:**
```
apps/mobile/src/components/customers/service-history.tsx  — Service history section component
apps/mobile/src/components/customers/service-history.test.tsx — Component tests
```

**Files to MODIFY:**
```
apps/mobile/src/hooks/use-jobs.ts         — Add useCustomerJobs hook
apps/mobile/src/hooks/use-invoices.ts     — Add useJobInvoice hook
apps/mobile/app/(tabs)/customers/[id].tsx — Add ServiceHistory component, onCreateQuote handler, ScrollView wrap if needed
```

**Files to VERIFY (no changes expected):**
```
apps/mobile/src/db/schema.ts       — Confirm job_id column on invoices table
apps/mobile/src/db/models/invoice.ts — Confirm jobId field on Invoice model
```

All paths relative to `mvps/field-service-management/src/` as the monorepo root.

### References

- [Source: epics.md#Story 5.1] — All acceptance criteria, FR33
- [Source: architecture.md#Data Model] — `jobs` table: `customer_id`, `status`, `title`, `scheduled_start`; `invoices` table: `job_id`, `total`, `status`; `customers` table: primary key `id`
- [Source: architecture.md#Frontend Architecture (Mobile)] — WatermelonDB observables with `.observe().subscribe()`; `scrollEnabled={false}` pattern for nested lists; `useDatabase` hook; feature-based component organization
- [Source: architecture.md#Naming Patterns] — `snake_case` DB columns, `camelCase` TypeScript fields, `kebab-case` file names, `PascalCase` components
- [Source: architecture.md#Enforcement Guidelines] — Money as integer cents; no `any` types; co-locate tests; WatermelonDB for all mobile data (never direct API)
- [Source: architecture.md#Complete Project Directory Structure] — `components/customers/service-history.tsx`; `hooks/use-jobs.ts`; `hooks/use-invoices.ts`
- [Source: stories/2-1-customer-creation-and-contact-management.md] — Customer model fields; `useCustomer(id)` hook; `[id].tsx` screen structure; WatermelonDB query and observable patterns; no `@relation` to accounts; no new npm packages rule
- [Source: stories/3-2-job-lifecycle-and-status-tracking.md] — Job model fields; `jobs` WatermelonDB schema; job status enum values and transitions
- [Source: stories/4-1-invoice-generation-from-completed-jobs.md] — Invoice model fields; `invoice.total` as integer cents; `job_id` on invoices
- [Source: stories/4-4-payment-tracking-and-partial-payments.md] — WatermelonDB `observe().subscribe()` hook pattern; in-memory sort after observe; status badge color-coded pattern

## Dev Agent Record

### Agent Model Used

claude-sonnet-4-6

### Debug Log References

### Completion Notes List

### File List
