# Story 5.2: Quote Search, Filter & View Tracking

Status: ready-for-dev

## Story

As a contractor,
I want to search my quotes by customer name and filter by trade or date,
so that I can quickly find specific quotes and track which customers have viewed my proposals.

## Acceptance Criteria

1. **Given** I am on the dashboard
   **When** I type a customer name in the search field
   **Then** the quote list filters in real-time to show only quotes matching that customer name
   *(Search input already exists from Story 5.1 — do NOT regress it)*

2. **Given** I am on the dashboard
   **When** I select a trade filter (plumbing, electrical, HVAC, painting, or all)
   **Then** the list shows only quotes for the selected trade
   **And** "All trades" is the default selected option

3. **Given** I am on the dashboard
   **When** I enter a "from" date, a "to" date, or both
   **Then** the list shows only quotes whose `createdAt` falls within that date range
   **And** when only "from" is set, all quotes created on or after that date are shown
   **And** when only "to" is set, all quotes created on or before the end of that day are shown

4. **Given** I combine search and filters (e.g., customer "Johnson" + trade "Plumbing" + date range)
   **When** the filters are applied
   **Then** results match ALL criteria (AND logic — all active filters must be satisfied)

5. **Given** a customer opens their quote link
   **When** the quote view page loads
   **Then** the system records the view and updates the quote status to VIEWED (if currently SENT)
   **And** the `viewedAt` timestamp is recorded on first view only
   **And** the contractor can see on the dashboard that the quote now shows a VIEWED status badge (amber)
   *(View tracking itself was implemented in Story 4.1 — this AC requires only verification/integration confirmation, not reimplementation)*

## Tasks / Subtasks

- [ ] Task 1: Update `GET /api/quotes` to support `trade` and date range query params (AC: #2, #3, #4)
  - [ ] 1.1 Open `src/src/app/api/quotes/route.ts` (MODIFY — do NOT recreate)
  - [ ] 1.2 Parse new query params from the URL after the existing `search` param:
    ```typescript
    const searchParams = new URL(request.url).searchParams;
    const search = searchParams.get("search") ?? "";
    const tradeParam = searchParams.get("trade") ?? "";
    const dateFrom = searchParams.get("dateFrom") ?? "";
    const dateTo = searchParams.get("dateTo") ?? "";
    ```
  - [ ] 1.3 Validate `tradeParam` against the allowed enum values before using it in a Prisma query (prevents injection of invalid enum values):
    ```typescript
    const VALID_TRADES = ["PLUMBING", "ELECTRICAL", "HVAC", "PAINTING"] as const;
    type ValidTrade = (typeof VALID_TRADES)[number];
    const trade: ValidTrade | "" = VALID_TRADES.includes(tradeParam as ValidTrade)
      ? (tradeParam as ValidTrade)
      : "";
    ```
  - [ ] 1.4 Build the `where` clause with AND logic for all active filters:
    ```typescript
    const where = {
      userId: session.user.id,
      ...(search
        ? { customerName: { contains: search, mode: "insensitive" as const } }
        : {}),
      ...(trade ? { trade } : {}),
      ...(dateFrom || dateTo
        ? {
            createdAt: {
              ...(dateFrom ? { gte: new Date(`${dateFrom}T00:00:00.000Z`) } : {}),
              ...(dateTo ? { lte: new Date(`${dateTo}T23:59:59.999Z`) } : {}),
            },
          }
        : {}),
    };
    ```
  - [ ] 1.5 Replace the existing `where` object in `prisma.quote.findMany` with the new combined `where` variable:
    ```typescript
    const quotes = await prisma.quote.findMany({
      where,
      orderBy: { updatedAt: "desc" },
      include: {
        lineItems: { select: { quantity: true, unitPrice: true } },
      },
    });
    ```
  - [ ] 1.6 The `quotesWithTotals` mapping and response remain unchanged — no modifications needed there

- [ ] Task 2: Update `useQuotes` hook to pass trade and date filter params (AC: #2, #3, #4)
  - [ ] 2.1 Open `src/src/hooks/use-quotes.ts` (MODIFY — do NOT recreate)
  - [ ] 2.2 Extend the filters type to include `trade`, `dateFrom`, and `dateTo`:
    ```typescript
    export function useQuotes(filters?: {
      search?: string;
      trade?: string;
      dateFrom?: string;
      dateTo?: string;
    }) {
      const params = new URLSearchParams();
      if (filters?.search) params.set("search", filters.search);
      if (filters?.trade) params.set("trade", filters.trade);
      if (filters?.dateFrom) params.set("dateFrom", filters.dateFrom);
      if (filters?.dateTo) params.set("dateTo", filters.dateTo);
      const query = params.toString();
      return useSWR(`/api/quotes${query ? `?${query}` : ""}`, fetcher);
    }
    ```
  - [ ] 2.3 The `useQuote(id)` export is unchanged — do NOT touch it

- [ ] Task 3: Add trade and date range filter controls to `QuoteDashboard` (AC: #2, #3, #4)
  - [ ] 3.1 Open `src/src/components/dashboard/quote-dashboard.tsx` (MODIFY — do NOT recreate)
  - [ ] 3.2 Add `trade` and date state variables below the existing `search`/`debouncedSearch` state:
    ```typescript
    const [trade, setTrade] = useState<string>("");
    const [dateFrom, setDateFrom] = useState<string>("");
    const [dateTo, setDateTo] = useState<string>("");
    ```
  - [ ] 3.3 Update the `useQuotes` call to pass all four filter values (search is debounced; trade/date are not):
    ```typescript
    const { data, isLoading } = useQuotes({
      search: debouncedSearch,
      trade,
      dateFrom,
      dateTo,
    });
    ```
  - [ ] 3.4 Add the filter row below the existing search `<div>` and above the quote list:
    ```tsx
    {/* Filters */}
    <div className="flex flex-wrap gap-3">
      {/* Trade filter */}
      <select
        aria-label="Filter by trade"
        value={trade}
        onChange={(e) => setTrade(e.target.value)}
        className="h-10 min-h-[44px] rounded-md border border-gray-300 bg-white px-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">All trades</option>
        <option value="PLUMBING">Plumbing</option>
        <option value="ELECTRICAL">Electrical</option>
        <option value="HVAC">HVAC</option>
        <option value="PAINTING">Painting</option>
      </select>

      {/* Date from */}
      <input
        type="date"
        aria-label="From date"
        value={dateFrom}
        onChange={(e) => setDateFrom(e.target.value)}
        className="h-10 min-h-[44px] rounded-md border border-gray-300 bg-white px-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* Date to */}
      <input
        type="date"
        aria-label="To date"
        value={dateTo}
        onChange={(e) => setDateTo(e.target.value)}
        className="h-10 min-h-[44px] rounded-md border border-gray-300 bg-white px-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* Clear filters — only shown when any filter is active */}
      {(trade || dateFrom || dateTo) && (
        <button
          type="button"
          onClick={() => { setTrade(""); setDateFrom(""); setDateTo(""); }}
          className="h-10 min-h-[44px] rounded-md border border-gray-300 bg-white px-3 text-sm text-gray-500 hover:text-gray-700 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Clear filters
        </button>
      )}
    </div>
    ```
  - [ ] 3.5 Update the empty state message to account for active filters (trade/date as well as search):
    ```tsx
    ) : quotes.length === 0 ? (
      debouncedSearch || trade || dateFrom || dateTo ? (
        <p className="text-center text-sm text-gray-500 py-8">
          No quotes match the selected filters.
        </p>
      ) : (
        // existing "No quotes yet" empty state — unchanged
      )
    ```
  - [ ] 3.6 Preserve ALL existing code: `useVirtualizer`, `listContainerRef`, skeleton loaders, `QuoteCard`, `StatusBadge`, `TRADE_LABELS`, `useDebounce`. Do NOT remove or alter anything from Story 5.1.

- [ ] Task 4: Update `GET /api/quotes` tests to cover trade and date range filters (AC: #2, #3, #4)
  - [ ] 4.1 Open `src/src/app/api/quotes/route.test.ts` (MODIFY — do NOT recreate)
  - [ ] 4.2 Add a helper for building filter query strings (add near `makeRequest`):
    ```typescript
    function makeFilterRequest(filters: {
      search?: string;
      trade?: string;
      dateFrom?: string;
      dateTo?: string;
    }) {
      const params = new URLSearchParams();
      if (filters.search) params.set("search", filters.search);
      if (filters.trade) params.set("trade", filters.trade);
      if (filters.dateFrom) params.set("dateFrom", filters.dateFrom);
      if (filters.dateTo) params.set("dateTo", filters.dateTo);
      return new Request(
        `http://localhost/api/quotes?${params.toString()}`,
        { method: "GET", headers: { "Content-Type": "application/json" } }
      );
    }
    ```
  - [ ] 4.3 Add test: filters by trade when `trade` param is provided:
    ```typescript
    it("filters by trade when trade param is provided", async () => {
      vi.mocked(auth).mockResolvedValue({ user: { id: "user-1" } } as never);
      vi.mocked(prisma.quote.findMany).mockResolvedValue([
        { id: "q-1", customerName: "Alice", taxRate: 0, lineItems: [], trade: "PLUMBING" },
      ] as never);

      const res = await GET(makeFilterRequest({ trade: "PLUMBING" }) as never);
      expect(res.status).toBe(200);

      expect(vi.mocked(prisma.quote.findMany)).toHaveBeenCalledWith(
        expect.objectContaining({
          where: expect.objectContaining({ trade: "PLUMBING" }),
        })
      );
    });
    ```
  - [ ] 4.4 Add test: ignores invalid trade values (does not include trade in where clause):
    ```typescript
    it("ignores unknown trade values", async () => {
      vi.mocked(auth).mockResolvedValue({ user: { id: "user-1" } } as never);
      vi.mocked(prisma.quote.findMany).mockResolvedValue([] as never);

      await GET(makeFilterRequest({ trade: "CARPENTRY" }) as never);

      // where clause must NOT contain a trade key for invalid enum values
      const call = vi.mocked(prisma.quote.findMany).mock.calls[0][0];
      expect((call as { where: Record<string, unknown> }).where).not.toHaveProperty("trade");
    });
    ```
  - [ ] 4.5 Add test: filters by `dateFrom` — includes `createdAt.gte`:
    ```typescript
    it("filters by dateFrom when provided", async () => {
      vi.mocked(auth).mockResolvedValue({ user: { id: "user-1" } } as never);
      vi.mocked(prisma.quote.findMany).mockResolvedValue([] as never);

      await GET(makeFilterRequest({ dateFrom: "2026-03-01" }) as never);

      const call = vi.mocked(prisma.quote.findMany).mock.calls[0][0];
      const where = (call as { where: Record<string, unknown> }).where as {
        createdAt?: { gte?: Date; lte?: Date };
      };
      expect(where.createdAt?.gte).toEqual(new Date("2026-03-01T00:00:00.000Z"));
      expect(where.createdAt?.lte).toBeUndefined();
    });
    ```
  - [ ] 4.6 Add test: filters by `dateTo` — includes `createdAt.lte` (end of day):
    ```typescript
    it("filters by dateTo when provided", async () => {
      vi.mocked(auth).mockResolvedValue({ user: { id: "user-1" } } as never);
      vi.mocked(prisma.quote.findMany).mockResolvedValue([] as never);

      await GET(makeFilterRequest({ dateTo: "2026-03-31" }) as never);

      const call = vi.mocked(prisma.quote.findMany).mock.calls[0][0];
      const where = (call as { where: Record<string, unknown> }).where as {
        createdAt?: { gte?: Date; lte?: Date };
      };
      expect(where.createdAt?.lte).toEqual(new Date("2026-03-31T23:59:59.999Z"));
      expect(where.createdAt?.gte).toBeUndefined();
    });
    ```
  - [ ] 4.7 Add test: AND logic — search + trade + date range all active simultaneously:
    ```typescript
    it("applies all filters together with AND logic", async () => {
      vi.mocked(auth).mockResolvedValue({ user: { id: "user-1" } } as never);
      vi.mocked(prisma.quote.findMany).mockResolvedValue([] as never);

      await GET(
        makeFilterRequest({
          search: "johnson",
          trade: "ELECTRICAL",
          dateFrom: "2026-03-01",
          dateTo: "2026-03-31",
        }) as never
      );

      const call = vi.mocked(prisma.quote.findMany).mock.calls[0][0];
      const where = (call as { where: Record<string, unknown> }).where as {
        customerName?: unknown;
        trade?: unknown;
        createdAt?: unknown;
      };
      expect(where.customerName).toEqual({ contains: "johnson", mode: "insensitive" });
      expect(where.trade).toBe("ELECTRICAL");
      expect(where.createdAt).toBeDefined();
    });
    ```
  - [ ] 4.8 Confirm all existing tests still pass — the `makeRequest` helper and existing test cases are unchanged

- [ ] Task 5: Final verification (AC: all)
  - [ ] 5.1 `cd mvps/contractor-quoting-estimation/src && npm run build` — zero TypeScript errors
  - [ ] 5.2 `npm test` — all tests pass (expected: 125+ tests across 15 test files)
  - [ ] 5.3 Confirm `GET /api/quotes?trade=PLUMBING` returns only PLUMBING quotes (Prisma where includes `trade: "PLUMBING"`)
  - [ ] 5.4 Confirm `GET /api/quotes?trade=CARPENTRY` does NOT include a `trade` key in the Prisma where clause (invalid enum value silently ignored)
  - [ ] 5.5 Confirm `GET /api/quotes?dateFrom=2026-03-01&dateTo=2026-03-31` produces `createdAt: { gte: ..., lte: ... }` in the Prisma where clause
  - [ ] 5.6 Confirm `GET /api/quotes?search=alice&trade=PLUMBING` applies both filters simultaneously (AND)
  - [ ] 5.7 Confirm `useQuotes({ trade: "PLUMBING" })` constructs `/api/quotes?trade=PLUMBING`
  - [ ] 5.8 Confirm `useQuotes({ dateFrom: "2026-03-01", dateTo: "2026-03-31" })` constructs `/api/quotes?dateFrom=2026-03-01&dateTo=2026-03-31`
  - [ ] 5.9 Confirm the trade `<select>` on the dashboard has `min-h-[44px]` (NFR20 touch target compliance)
  - [ ] 5.10 Confirm the date inputs on the dashboard have `min-h-[44px]`
  - [ ] 5.11 Confirm "Clear filters" button only appears when at least one of trade/dateFrom/dateTo is set (not for search alone)
  - [ ] 5.12 Confirm the empty state shows "No quotes match the selected filters." when any filter is active AND result is empty
  - [ ] 5.13 Confirm the existing "No quotes yet. Create your first quote!" empty state still shows when NO filters are active
  - [ ] 5.14 Confirm view tracking: visit `/quote/[token]` for a SENT quote → status on dashboard changes to VIEWED (amber badge) — view tracking is already implemented in Story 4.1, this is a smoke test only
  - [ ] 5.15 Confirm skeleton loaders, virtual scrolling (>100 quotes), `StatusBadge`, and customer name search from Story 5.1 are NOT regressed

## Dev Notes

### Critical: Project Root and Directory Layout

The working directory for all `npm`, `npx prisma`, etc. commands is:
```
mvps/contractor-quoting-estimation/src/    ← package.json lives here
```

The Next.js source lives at the nested path:
```
mvps/contractor-quoting-estimation/src/src/
  app/
    api/
      quotes/
        route.ts          ← MODIFY: add trade + date filtering to GET handler
        route.test.ts     ← MODIFY: add makeFilterRequest helper + 5 new filter tests
  components/
    dashboard/
      quote-dashboard.tsx ← MODIFY: add trade select + date inputs + clear button
  hooks/
    use-quotes.ts         ← MODIFY: extend filters type with trade/dateFrom/dateTo
```

### What Already Exists — Do NOT Regress

**From Story 5.1 (fully implemented, all tests passing):**
- `QuoteDashboard` at `src/src/components/dashboard/quote-dashboard.tsx` has:
  - Search `<Input>` with `useDebounce(search, 300)` and clear (`×`) button
  - `useQuotes({ search: debouncedSearch })` call
  - `StatusBadge` component import + usage (color-coded status per quote)
  - `formatCurrency(quote.total)` per row
  - `@tanstack/react-virtual` — virtual scrolling active when `quotes.length > 100`
  - Skeleton loaders during `isLoading`
  - Empty state: "No quotes yet. Create your first quote!" → link to `/quotes/new`
- `GET /api/quotes` already supports `?search=` filtering with case-insensitive contains on `customerName`
- `GET /api/quotes` already returns `total: number` (computed from line items, lineItems stripped from response)
- `useQuotes({ search?: string })` hook already builds the SWR cache key

**From Story 4.1 (view tracking — fully implemented):**
- `GET /api/quotes/view/[token]` at `src/src/app/api/quotes/view/[token]/route.ts` already:
  - Updates `quote.status` from `SENT` → `VIEWED`
  - Records `viewedAt: new Date()` on first view (only when status is currently `SENT`)
- The VIEWED status shows as an amber badge on the dashboard via `StatusBadge` from Story 5.1
- No new code is needed for view tracking — Story 5.2 only needs to smoke-test the end-to-end behavior

### `GET /api/quotes` — Complete Filter Logic

The updated route reads four query params and builds the Prisma `where` object:

```typescript
const searchParams = new URL(request.url).searchParams;
const search = searchParams.get("search") ?? "";
const tradeParam = searchParams.get("trade") ?? "";
const dateFrom = searchParams.get("dateFrom") ?? "";
const dateTo = searchParams.get("dateTo") ?? "";

const VALID_TRADES = ["PLUMBING", "ELECTRICAL", "HVAC", "PAINTING"] as const;
type ValidTrade = (typeof VALID_TRADES)[number];
const trade: ValidTrade | "" = VALID_TRADES.includes(tradeParam as ValidTrade)
  ? (tradeParam as ValidTrade)
  : "";

const where = {
  userId: session.user.id,
  ...(search
    ? { customerName: { contains: search, mode: "insensitive" as const } }
    : {}),
  ...(trade ? { trade } : {}),
  ...(dateFrom || dateTo
    ? {
        createdAt: {
          ...(dateFrom ? { gte: new Date(`${dateFrom}T00:00:00.000Z`) } : {}),
          ...(dateTo ? { lte: new Date(`${dateTo}T23:59:59.999Z`) } : {}),
        },
      }
    : {}),
};
```

Key implementation details:
- All four filters are independently optional — any combination is valid
- AND logic is automatic: Prisma `where` object applies all conditions simultaneously
- Invalid trade values are silently ignored (no HTTP error) — the select UI only sends valid values, but guard against URL tampering
- Date params are `YYYY-MM-DD` strings (from `<input type="date">`) converted to UTC midnight/end-of-day
- The `mode: "insensitive" as const` cast is required for TypeScript to accept the Prisma `StringFilter` type

### `useQuotes` Hook — Updated Signature

```typescript
export function useQuotes(filters?: {
  search?: string;
  trade?: string;
  dateFrom?: string;
  dateTo?: string;
}) {
  const params = new URLSearchParams();
  if (filters?.search) params.set("search", filters.search);
  if (filters?.trade) params.set("trade", filters.trade);
  if (filters?.dateFrom) params.set("dateFrom", filters.dateFrom);
  if (filters?.dateTo) params.set("dateTo", filters.dateTo);
  const query = params.toString();
  return useSWR(`/api/quotes${query ? `?${query}` : ""}`, fetcher);
}
```

SWR key changes automatically when any filter value changes, triggering a new API fetch. No manual cache invalidation needed.

### `QuoteDashboard` — Filter Controls Placement

Add filters in this order in the JSX (preserving existing structure):
1. Header row (existing — New Quote button)
2. Search input (existing from Story 5.1)
3. **NEW** — Filters row (trade select + date from + date to + optional clear button)
4. Quote list (existing — skeleton / empty state / virtual scroll)

The filters row uses `flex flex-wrap gap-3` to stack gracefully on small screens. Each control must have `min-h-[44px]` for mobile touch targets (NFR20). The clear button only renders when at least one of `trade`, `dateFrom`, or `dateTo` is non-empty — the search field has its own clear (`×`) already.

**Empty state update** — the current empty state check is:
```tsx
debouncedSearch ? (
  <p>No quotes matching "{debouncedSearch}"</p>
) : (
  <div>No quotes yet...</div>
)
```

Update it to:
```tsx
debouncedSearch || trade || dateFrom || dateTo ? (
  <p className="text-center text-sm text-gray-500 py-8">
    No quotes match the selected filters.
  </p>
) : (
  <div className="text-center py-12 flex flex-col items-center gap-4">
    {/* existing "No quotes yet" content — unchanged */}
  </div>
)
```

### Stack Versions (unchanged from Story 5.1)

- **Next.js 16.2.2** — `params` in page/route components is `Promise<{...}>`. Always `await` before use.
- **React 19.2.4** — standard hooks; `useState` for filter state
- **Zod v4** — `err.issues[0]?.message` (NOT `err.errors`)
- **Vitest** — test runner. Import from `"vitest"`, not `"@jest/globals"`
- **TypeScript strict mode** — all new code must pass `tsc --noEmit`
- **Prisma 7.6** — use object spread for dynamic `where` clauses; avoid `Prisma.QuoteWhereInput` import if it causes version conflicts

### Test Strategy

The `makeRequest` helper in `route.test.ts` only handles `?search=` URLs. Add a **separate** `makeFilterRequest` helper that builds arbitrary query strings — this avoids changing the existing helper signature and breaking the 4 existing `makeRequest`-based tests.

Test count baseline: Story 5.1 ended at **120 tests** across **15 test files**. This story adds:
- 5 new tests in `route.test.ts` (trade filter, invalid trade ignored, dateFrom, dateTo, AND logic)
- Expected post-story count: **125 tests**

### View Tracking — No New Code Required

The full view tracking pipeline is already complete:
1. Customer opens `/quote/[token]`
2. `GET /api/quotes/view/[token]/route.ts` runs → if `status === "SENT"` → updates DB to `VIEWED` + sets `viewedAt`
3. Contractor's dashboard fetches quotes via `GET /api/quotes` (SWR) → returns updated status
4. `StatusBadge` renders VIEWED in amber (`bg-amber-100 text-amber-700`)

Story 5.2 only needs to confirm this chain works end-to-end (Task 5.14) — no code changes for view tracking.

### Anti-Patterns to Avoid

- **Never** pass unvalidated trade enum strings directly to Prisma — always validate against the `VALID_TRADES` constant first
- **Never** skip the date range end-of-day adjustment — `dateTo` must be `T23:59:59.999Z` to include quotes created at any point during that day
- **Never** debounce the trade or date filters — they are `<select>` and `<input type="date">` controls that only change on explicit user action (unlike free-text search)
- **Never** reimport `Trade` from `"@prisma/client"` directly in the route — use the `VALID_TRADES` constant instead (avoids Prisma client type import issues in Next.js serverless routes)
- **Never** add the clear button to the search input area — it already has its own `×` clear button from Story 5.1; the new "Clear filters" button only clears trade/date
- **Never** break `useQuote(id)` (singular) — it is a separate export in `use-quotes.ts` and must not be modified
- **Never** use `@jest/globals` — this project uses Vitest, import from `"vitest"`
- **Never** use `err.errors` for Zod — use `err.issues[0]?.message` (Zod v4 API)

### Files to Modify (MODIFY — do NOT recreate)

| File | Change |
|------|--------|
| `src/src/app/api/quotes/route.ts` | Add `trade` + `dateFrom`/`dateTo` query param parsing; build combined `where` clause with AND logic |
| `src/src/app/api/quotes/route.test.ts` | Add `makeFilterRequest` helper + 5 new filter tests |
| `src/src/hooks/use-quotes.ts` | Extend filters type with `trade`/`dateFrom`/`dateTo`; append to URLSearchParams |
| `src/src/components/dashboard/quote-dashboard.tsx` | Add trade/date state; pass all 4 filters to `useQuotes`; add filter row JSX; update empty state condition |

### No New Files Required

This story only modifies existing files — no new components, routes, or hooks needed.

### No Prisma Migration Needed

All required fields (`trade`, `createdAt`) already exist on the `Quote` model from Story 1.1. No schema changes.

### Project Structure Notes

- All filter controls live inline in `quote-dashboard.tsx` — no separate `quote-filters.tsx` component (the architecture file lists it as a future component but the story is simple enough to keep it inline for MVP)
- Feature-based component organization is preserved — dashboard filters stay in `src/src/components/dashboard/`
- No new directories needed

### References

- [Source: planning/epics.md#Epic 5 — Story 5.2: Quote Search, Filter & View Tracking — FR42, FR43, FR45]
- [Source: planning/architecture.md#API Patterns — GET /api/quotes with pagination, search, filters]
- [Source: planning/architecture.md#Frontend Architecture — React Context + SWR for server state; React useState for component-level state]
- [Source: planning/architecture.md#NFR20 — Minimum 44x44px touch targets on mobile]
- [Source: planning/architecture.md#Data Architecture — Trade enum: PLUMBING, ELECTRICAL, HVAC, PAINTING; createdAt stored in UTC]
- [Source: stories/5-1-quote-list-dashboard-with-status-tracking.md — what was built in 5.1; hook signature; empty state patterns]
- [Source: src/src/app/api/quotes/route.ts — existing GET handler to extend with trade/date filters]
- [Source: src/src/app/api/quotes/route.test.ts — existing test structure and makeRequest helper]
- [Source: src/src/hooks/use-quotes.ts — current hook with `{ search?: string }` to extend]
- [Source: src/src/components/dashboard/quote-dashboard.tsx — existing QuoteDashboard component to extend]
- [Source: src/src/app/api/quotes/view/[token]/route.ts — view tracking already implemented; VIEWED status set when status is SENT]

## Dev Agent Record

### Agent Model Used

claude-sonnet-4-6

### Debug Log References

### Completion Notes List

### File List
