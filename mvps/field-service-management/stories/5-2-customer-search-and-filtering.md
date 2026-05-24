# Story 5.2: Customer Search and Filtering

Status: ready-for-dev

## Story

As a tradesperson,
I want to quickly find customers by name, address, or phone number,
so that I can pull up their info instantly when they call or when I'm on-site.

## Acceptance Criteria

1. **[Real-time filtering on name, phone, and address]** Given the user is on the customer list screen at `/(tabs)/customers/`, when they type in the search bar, then results filter in real-time matching against customer `name`, `phone`, `address_line1`, `address_line2`, `city`, `state`, and `zip` fields. (FR34) The filtering must use WatermelonDB local data — no API call — and results must appear within 500ms of the last keystroke (NFR3). The search bar uses 300ms debouncing so the hook is called with a stable query string, not on every keypress.

2. **[Partial phone number search]** Given the user types a partial phone number like `"555"` in the search bar, when results render, then all customers whose `phone` field contains `"555"` anywhere in the string are shown. No other customers appear.

3. **[Address fragment search]** Given the user types an address fragment like `"Oak St"` in the search bar, when results render, then all customers who have `"Oak St"` in any of their address fields (`address_line1`, `address_line2`, `city`, `state`, or `zip`) are shown. Customers matching on name or phone with the same query are also shown.

4. **[Empty search shows all customers]** Given the search bar is empty (zero characters typed), when the list renders, then all customers for the account are shown sorted by name ascending — identical to the pre-search default view. No filtering is applied.

5. **[No-match state displays helpful empty message]** Given the user has typed a search query that matches zero customers, when results render, then the list shows an empty state with text "No customers found" (not the generic "No customers yet" message used when there are zero customers in the account).

6. **[Search placeholder communicates all searchable fields]** Given the user has not yet typed in the search bar, when the customer list screen is visible, then the `TextInput` placeholder reads `"Search by name, phone, or address..."` so users know address search is supported.

## Tasks / Subtasks

### Task 1: Extend `useCustomerSearch` to Include Address Fields (AC: #1, #2, #3)

- [ ] 1.1: Open `apps/mobile/src/hooks/use-customers.ts`. In the `useCustomerSearch` function, locate the `Q.or(...)` clause inside the `conditions` array. It currently searches only `name` and `phone`. Extend it to also search `address_line1`, `address_line2`, `city`, `state`, and `zip`:

  ```typescript
  conditions.push(
    Q.or(
      Q.where('name', Q.like(`%${sanitized}%`)),
      Q.where('phone', Q.like(`%${sanitized}%`)),
      Q.where('address_line1', Q.like(`%${sanitized}%`)),
      Q.where('address_line2', Q.like(`%${sanitized}%`)),
      Q.where('city', Q.like(`%${sanitized}%`)),
      Q.where('state', Q.like(`%${sanitized}%`)),
      Q.where('zip', Q.like(`%${sanitized}%`)),
    ),
  );
  ```

  The `Q.sanitizeLikeString(query)` call that already precedes this block handles escaping — no additional sanitization is needed for the new fields.

- [ ] 1.2: Verify that when `sanitized.length === 0` (empty query), the `conditions` array contains only the `account_id` condition and no `Q.or(...)` clause — the hook already has this guard, confirm it is still in place and unchanged.

### Task 2: Update Search Placeholder Text (AC: #6)

- [ ] 2.1: Open `apps/mobile/app/(tabs)/customers/index.tsx`. Find the `TextInput` with `testID="customer-search-input"` and change the `placeholder` prop from `"Search by name or phone..."` to `"Search by name, phone, or address..."`.

  No other changes to `index.tsx` are needed — the debounce logic, `useCustomerSearch` hook integration, and the `isSearching` toggle between all-customers and search-results are already correct.

### Task 3: Distinguish Empty-Search vs. No-Match Empty States (AC: #4, #5)

- [ ] 3.1: In `apps/mobile/app/(tabs)/customers/index.tsx`, update the `renderEmpty` function to distinguish between two cases:

  - When `!isSearching` (no query): show the existing "No customers yet" / "Tap 'Add Customer'" message (unchanged behavior).
  - When `isSearching && customers.length === 0` (query returned nothing): show `"No customers found"`.

  ```typescript
  function renderEmpty() {
    if (isLoading) return null;
    if (isSearching) {
      return (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyTitle}>No customers found</Text>
          <Text style={styles.emptySubtitle}>Try a different name, phone, or address</Text>
        </View>
      );
    }
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyTitle}>No customers yet</Text>
        <Text style={styles.emptySubtitle}>Tap "Add Customer" to create your first customer</Text>
      </View>
    );
  }
  ```

  The `isSearching` variable is already computed in the component as `const isSearching = debouncedSearch.length > 0;` — use it directly.

### Task 4: Tests for `useCustomerSearch` Address Searching (AC: #1, #2, #3, #4)

- [ ] 4.1: Locate the existing test file for customer hooks. Check for a file matching `apps/mobile/src/hooks/use-customers.test.ts`. If it exists, add a new `describe` block. If it does not exist, create it using the same pattern as `use-jobs.test.ts` — LokiJS in-memory database, `jest.mock` for auth/database contexts, `createTestDatabase()` helper.

- [ ] 4.2: Add a `describe('useCustomerSearch — WatermelonDB query logic')` block with the following test cases (test query logic directly against WatermelonDB, not via the React hook):

  **Test: matches on customer name**
  ```typescript
  it('returns customer matching name substring', async () => {
    const db = createTestDatabase();
    await createCustomer(db, { name: 'Alice Johnson', phone: '555-0001', city: 'Denver' });
    await createCustomer(db, { name: 'Bob Smith', phone: '555-0002', city: 'Reno' });

    const sanitized = Q.sanitizeLikeString('alice');
    const results = await db.get<Customer>('customers').query(
      Q.or(
        Q.where('name', Q.like(`%${sanitized}%`)),
        Q.where('phone', Q.like(`%${sanitized}%`)),
        Q.where('address_line1', Q.like(`%${sanitized}%`)),
        Q.where('city', Q.like(`%${sanitized}%`)),
      ),
    ).fetch();

    expect(results).toHaveLength(1);
    expect(results[0]!.name).toBe('Alice Johnson');
  });
  ```

  **Test: matches partial phone number**
  ```typescript
  it('returns all customers with partial phone match', async () => {
    const db = createTestDatabase();
    await createCustomer(db, { name: 'Alice', phone: '555-1234' });
    await createCustomer(db, { name: 'Bob', phone: '555-5678' });
    await createCustomer(db, { name: 'Carol', phone: '444-9999' });

    const sanitized = Q.sanitizeLikeString('555');
    const results = await db.get<Customer>('customers').query(
      Q.or(
        Q.where('name', Q.like(`%${sanitized}%`)),
        Q.where('phone', Q.like(`%${sanitized}%`)),
        Q.where('address_line1', Q.like(`%${sanitized}%`)),
        Q.where('city', Q.like(`%${sanitized}%`)),
      ),
    ).fetch();

    expect(results).toHaveLength(2);
    expect(results.every((c) => c.phone.includes('555'))).toBe(true);
  });
  ```

  **Test: matches address_line1 fragment**
  ```typescript
  it('returns customer matching address_line1 fragment', async () => {
    const db = createTestDatabase();
    await createCustomer(db, { name: 'Alice', phone: '555-0001', addressLine1: '123 Oak St' });
    await createCustomer(db, { name: 'Bob', phone: '555-0002', addressLine1: '456 Elm Ave' });

    const sanitized = Q.sanitizeLikeString('Oak St');
    const results = await db.get<Customer>('customers').query(
      Q.or(
        Q.where('name', Q.like(`%${sanitized}%`)),
        Q.where('phone', Q.like(`%${sanitized}%`)),
        Q.where('address_line1', Q.like(`%${sanitized}%`)),
        Q.where('city', Q.like(`%${sanitized}%`)),
      ),
    ).fetch();

    expect(results).toHaveLength(1);
    expect(results[0]!.addressLine1).toBe('123 Oak St');
  });
  ```

  **Test: matches city fragment**
  ```typescript
  it('returns customer matching city fragment', async () => {
    const db = createTestDatabase();
    await createCustomer(db, { name: 'Alice', phone: '555-0001', city: 'Denver' });
    await createCustomer(db, { name: 'Bob', phone: '555-0002', city: 'Reno' });

    const sanitized = Q.sanitizeLikeString('Den');
    const results = await db.get<Customer>('customers').query(
      Q.or(
        Q.where('name', Q.like(`%${sanitized}%`)),
        Q.where('phone', Q.like(`%${sanitized}%`)),
        Q.where('city', Q.like(`%${sanitized}%`)),
      ),
    ).fetch();

    expect(results).toHaveLength(1);
    expect(results[0]!.city).toBe('Denver');
  });
  ```

  **Test: empty query returns all customers (no filtering)**
  ```typescript
  it('returns all customers when query is empty string', async () => {
    const db = createTestDatabase();
    await createCustomer(db, { name: 'Alice', phone: '555-0001' });
    await createCustomer(db, { name: 'Bob', phone: '555-0002' });

    // Empty sanitized string → no Q.or() applied
    const sanitized = Q.sanitizeLikeString('');
    const conditions = [];
    if (sanitized.length > 0) {
      conditions.push(Q.or(Q.where('name', Q.like(`%${sanitized}%`))));
    }

    const results = await db.get<Customer>('customers').query(...conditions).fetch();
    expect(results).toHaveLength(2);
  });
  ```

  **Test: no match returns empty array**
  ```typescript
  it('returns empty array when no customer matches query', async () => {
    const db = createTestDatabase();
    await createCustomer(db, { name: 'Alice', phone: '555-0001', city: 'Denver' });

    const sanitized = Q.sanitizeLikeString('zzznomatch');
    const results = await db.get<Customer>('customers').query(
      Q.or(
        Q.where('name', Q.like(`%${sanitized}%`)),
        Q.where('phone', Q.like(`%${sanitized}%`)),
        Q.where('address_line1', Q.like(`%${sanitized}%`)),
        Q.where('city', Q.like(`%${sanitized}%`)),
      ),
    ).fetch();

    expect(results).toHaveLength(0);
  });
  ```

  The `createCustomer` helper function:
  ```typescript
  async function createCustomer(
    db: Database,
    overrides: Partial<{
      accountId: string;
      name: string;
      phone: string;
      email: string;
      addressLine1: string;
      addressLine2: string;
      city: string;
      state: string;
      zip: string;
    }> = {},
  ): Promise<Customer> {
    let created!: Customer;
    await db.write(async () => {
      created = await db.get<Customer>('customers').create((record) => {
        record.accountId = overrides.accountId ?? 'test-account';
        record.name = overrides.name ?? 'Test Customer';
        record.phone = overrides.phone ?? '555-0000';
        record.email = overrides.email ?? '';
        record.addressLine1 = overrides.addressLine1 ?? '';
        record.addressLine2 = overrides.addressLine2 ?? '';
        record.city = overrides.city ?? '';
        record.state = overrides.state ?? '';
        record.zip = overrides.zip ?? '';
        record.notes = '';
        record.quickbooksCustomerId = '';
      });
    });
    return created;
  }
  ```

## Dev Notes

### What's Already Implemented — Do Not Re-Implement

The customer search infrastructure was partially built during earlier stories. The following are **already in place**:

- **Search UI** (`apps/mobile/app/(tabs)/customers/index.tsx`): A `TextInput` with `testID="customer-search-input"`, 300ms debouncing via `useRef<ReturnType<typeof setTimeout>>`, and the `isSearching` toggle that switches between `useCustomers()` and `useCustomerSearch(debouncedSearch)`.
- **`useCustomerSearch` hook** (`apps/mobile/src/hooks/use-customers.ts`): Already has `Q.sanitizeLikeString(query)`, the `account_id` filter, and `Q.or()` on `name` and `phone`. The hook uses `.observe().subscribe()` for reactivity.
- **`useCustomers` hook**: Fetches all customers sorted by name ascending, used when search is empty.
- **`CustomerCard` component**: Renders name, phone, and city/state — no changes needed.
- **`useCustomer(id)` hook**: Single customer lookup for the detail screen — untouched by this story.

**The only gaps from FR34 are:**
1. Address fields not included in `useCustomerSearch`'s `Q.or()` clause (Task 1)
2. Placeholder text doesn't mention "address" (Task 2)
3. No-match empty state message is missing (Task 3)
4. No tests for address search paths (Task 4)

### `Q.sanitizeLikeString` Already Called — Do Not Duplicate

`use-customers.ts` already calls `const sanitized = Q.sanitizeLikeString(query);` before the `Q.or()` block. The sanitized value escapes special LIKE characters (`%`, `_`, `\`). Use `sanitized` — not the raw `query` string — in all `Q.like()` expressions.

### WatermelonDB `Q.like` Is Case-Insensitive on SQLite

SQLite's `LIKE` operator is case-insensitive for ASCII characters. `Q.like('%oak st%')` will match "Oak St", "OAK ST", and "oak st". No additional case normalization is needed before passing to `Q.like()`.

### Address Fields on the Customer Model

From `apps/mobile/src/db/models/customer.ts`:
- `@text('address_line1') addressLine1!: string`
- `@text('address_line2') addressLine2!: string`
- `@text('city') city!: string`
- `@text('state') state!: string`
- `@text('zip') zip!: string`

All five address fields are `@text` (never null — WatermelonDB coerces null to empty string for text columns). Searching all five with `Q.like` is safe even when the field is empty because `Q.like('%query%')` on an empty string `''` returns false.

### 300ms Debounce Already in Place — NFR3 Is Satisfied

The customer list screen debounces search input with a 300ms `setTimeout` before passing `debouncedSearch` to `useCustomerSearch`. WatermelonDB local SQLite queries complete in < 10ms for typical dataset sizes, well within NFR3's 500ms target. The debounce is already correct and must not be changed.

### Test Database Setup — Follow `use-jobs.test.ts` Pattern Exactly

`apps/mobile/src/hooks/use-jobs.test.ts` shows the exact setup to replicate for `use-customers.test.ts`:
- `jest.mock` for `auth-context` and `database-context` at the top
- `LokiJSAdapter` (in-memory, `useWebWorker: false`, `useIncrementalIndexedDB: false`)
- `new Database({ adapter, modelClasses: [...] })` — include all model classes in the `modelClasses` array that the test database schema defines
- Test the query logic directly (create records → run WatermelonDB query → assert results) rather than rendering the hook via `renderHook`

Import `Q` from `@nozbe/watermelondb` for `Q.sanitizeLikeString`, `Q.like`, `Q.where`, and `Q.or`.

### No New npm Packages Required

This story uses only existing WatermelonDB `Q` operators already imported in `use-customers.ts`. No new dependencies are needed.

### Files to Modify

```
apps/mobile/src/hooks/use-customers.ts           — Add address fields to Q.or() in useCustomerSearch
apps/mobile/app/(tabs)/customers/index.tsx       — Update placeholder text, update renderEmpty
```

### Files to Create

```
apps/mobile/src/hooks/use-customers.test.ts     — New test file (or add to existing if present)
```

All paths are relative to `mvps/field-service-management/src/` as the monorepo root.

### Project Structure Notes

- Feature-based organization: customer hooks live in `src/hooks/`, customer screens in `app/(tabs)/customers/`, customer components in `src/components/customers/`. No cross-feature imports.
- Test files co-located next to source files with `.test.ts` suffix (architecture requirement).
- `Q` is already imported at the top of `use-customers.ts` — no import change needed.

### References

- [Source: epics.md#Story 5.2] — All acceptance criteria, FR34, NFR3
- [Source: architecture.md#Data Model] — `customers` table: `address_line1`, `address_line2`, `city`, `state`, `zip` columns (all snake_case DB, camelCase TS model)
- [Source: architecture.md#Enforcement Guidelines] — WatermelonDB for all mobile data reads; co-locate tests; no `any` types; TypeScript strict mode
- [Source: architecture.md#Naming Patterns] — `snake_case` DB columns, `camelCase` TS fields, `kebab-case` file names
- [Source: apps/mobile/src/hooks/use-customers.ts] — Existing `useCustomerSearch` implementation: `Q.sanitizeLikeString`, `Q.or`, `Q.like`, account_id guard, observe/subscribe pattern
- [Source: apps/mobile/app/(tabs)/customers/index.tsx] — Existing UI: debounce logic, `isSearching` toggle, `renderEmpty`, `TextInput` placeholder, `useCustomerSearch` integration
- [Source: apps/mobile/src/db/models/customer.ts] — Customer model: `@text` decorators for all address fields
- [Source: apps/mobile/src/hooks/use-jobs.test.ts] — LokiJS test database setup pattern to replicate for customer search tests
- [Source: stories/5-1-customer-job-history-and-service-records.md#Dev Agent Record] — No new npm packages; WatermelonDB observable patterns; test mock setup for auth/database contexts

## Dev Agent Record

### Agent Model Used

claude-sonnet-4-6

### Debug Log References

### Completion Notes List

### File List
