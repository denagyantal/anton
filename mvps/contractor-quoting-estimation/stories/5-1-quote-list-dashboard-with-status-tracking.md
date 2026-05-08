# Story 5.1: Quote List Dashboard with Status Tracking

Status: ready-for-dev

## Story

As a contractor,
I want to see all my quotes in one place with their current status,
so that I know which quotes need follow-up and where my pipeline stands.

## Acceptance Criteria

1. **Given** I am logged in and navigate to `/dashboard`
   **When** the page loads
   **Then** I see a list of all my quotes showing: quote number, customer name, trade, total amount, color-coded status badge (draft/sent/viewed/signed/paid/expired), and date
   **And** quotes are sorted by most recently updated first

2. **Given** I have more than 100 quotes
   **When** I scroll the quote list
   **Then** the list uses virtual scrolling (via `@tanstack/react-virtual`) to maintain smooth 60fps performance for up to 500 quotes
   **And** only visible rows are rendered in the DOM

3. **Given** I have quotes in various statuses
   **When** I view the dashboard
   **Then** each quote displays a color-coded status badge:
   - `DRAFT` = gray background
   - `SENT` = blue background
   - `VIEWED` = amber/yellow background
   - `SIGNED` = green background
   - `PAID` = dark green background (bold)
   - `EXPIRED` = red background

4. **Given** I see a quote in the list
   **When** I tap on it
   **Then** I navigate to the quote detail page at `/quotes/[id]`
   **And** at the top of the page I see a status history timeline showing timestamps for each completed step:
   - Created (always shown — from `createdAt`)
   - Sent (shown if `sentAt` is set)
   - Viewed by customer (shown if `viewedAt` is set)
   - Signed (shown if `signedAt` is set)
   - Deposit Paid (shown if `paidAt` is set)

5. **Given** the quote detail page loads
   **When** the status history timeline renders
   **Then** I also see the full quote details including: all line items with quantities and prices, any attached jobsite photos (thumbnails), customer info, job notes, and deposit configuration

6. **Given** the dashboard is loading quotes
   **When** the data is being fetched
   **Then** skeleton loaders are shown in place of quote rows (already implemented — do NOT regress)

7. **Given** I have zero quotes
   **When** the dashboard loads
   **Then** I see an empty state with "Create your first quote!" and a link to `/quotes/new` (already implemented — do NOT regress)

## Tasks / Subtasks

- [ ] Task 1: Install `@tanstack/react-virtual` for virtual scrolling (AC: #2)
  - [ ] 1.1 `cd mvps/contractor-quoting-estimation/src && npm install @tanstack/react-virtual`
  - [ ] 1.2 Verify it appears in `package.json` under `"dependencies"`

- [ ] Task 2: Update `GET /api/quotes` to include total amount per quote (AC: #1)
  - [ ] 2.1 Open `src/src/app/api/quotes/route.ts` (MODIFY — do NOT recreate)
  - [ ] 2.2 In the `findMany` call, add `include` to fetch line items for total calculation:
    ```typescript
    const quotes = await prisma.quote.findMany({
      where: {
        userId: session.user.id,
        ...(search
          ? { customerName: { contains: search, mode: "insensitive" } }
          : {}),
      },
      orderBy: { updatedAt: "desc" },
      include: {
        lineItems: { select: { quantity: true, unitPrice: true } },
      },
    });
    ```
  - [ ] 2.3 Map over results to compute `total` server-side using the existing `calculateTotal` util, then strip `lineItems` from the response:
    ```typescript
    import { calculateTotal, generateQuoteNumber } from "@/lib/utils";
    // ... (top of file)

    const quotesWithTotals = quotes.map(({ lineItems, ...quote }) => {
      const { total } = calculateTotal(lineItems, quote.taxRate);
      return { ...quote, total };
    });

    return NextResponse.json({ data: quotesWithTotals });
    ```
  - [ ] 2.4 The `calculateTotal` function is already exported from `@/lib/utils` — do NOT reimplement it
  - [ ] 2.5 Verify the response shape does NOT include the raw `lineItems` array — only `total: number`

- [ ] Task 3: Update `GET /api/quotes` tests to cover total amount (AC: #1)
  - [ ] 3.1 Open `src/src/app/api/quotes/route.test.ts` (MODIFY — do NOT recreate)
  - [ ] 3.2 Update the `prisma.quote.findMany` mock to return `lineItems`:
    ```typescript
    vi.mocked(prisma.quote.findMany).mockResolvedValue([
      {
        id: "q-1",
        quoteNumber: "QT-2605-0001",
        taxRate: 10,
        lineItems: [
          { quantity: 2, unitPrice: 100 },
          { quantity: 1, unitPrice: 50 },
        ],
      },
    ] as never);
    ```
  - [ ] 3.3 Add test: `GET /api/quotes` returns `total` field (not `lineItems`) in each quote:
    ```typescript
    it("returns quotes with computed total (not raw lineItems)", async () => {
      vi.mocked(auth).mockResolvedValue({ user: { id: "user-1" } } as never);
      vi.mocked(prisma.quote.findMany).mockResolvedValue([
        {
          id: "q-1",
          taxRate: 10,
          lineItems: [{ quantity: 2, unitPrice: 100 }],
        },
      ] as never);

      const res = await GET(makeRequest("GET") as never);
      const body = await res.json();
      // subtotal = 200, tax = 20 (10%), total = 220
      expect(body.data[0].total).toBe(220);
      expect(body.data[0].lineItems).toBeUndefined();
    });
    ```
  - [ ] 3.4 Update the mock in the existing "returns list of quotes" test to include `lineItems: []` and `taxRate: 0` so it doesn't break
  - [ ] 3.5 Update ALL existing `GET /api/quotes` mock return values to include `lineItems` and `taxRate` fields (or the map will fail)

- [ ] Task 4: Create `StatusBadge` component (AC: #3)
  - [ ] 4.1 Create `src/src/components/dashboard/status-badge.tsx` (NEW file)
  - [ ] 4.2 Define the color map and component:
    ```typescript
    import type { QuoteStatus } from "@/types";

    const STATUS_CONFIG: Record<
      QuoteStatus,
      { label: string; className: string }
    > = {
      DRAFT: {
        label: "Draft",
        className: "bg-gray-100 text-gray-700",
      },
      SENT: {
        label: "Sent",
        className: "bg-blue-100 text-blue-700",
      },
      VIEWED: {
        label: "Viewed",
        className: "bg-amber-100 text-amber-700",
      },
      SIGNED: {
        label: "Signed",
        className: "bg-green-100 text-green-700",
      },
      PAID: {
        label: "Paid",
        className: "bg-green-700 text-white font-semibold",
      },
      EXPIRED: {
        label: "Expired",
        className: "bg-red-100 text-red-700",
      },
    };

    interface StatusBadgeProps {
      status: QuoteStatus;
    }

    export function StatusBadge({ status }: StatusBadgeProps) {
      const config = STATUS_CONFIG[status] ?? STATUS_CONFIG.DRAFT;
      return (
        <span
          className={`inline-flex items-center rounded px-2 py-0.5 text-xs ${config.className}`}
        >
          {config.label}
        </span>
      );
    }
    ```

- [ ] Task 5: Update `QuoteDashboard` component (AC: #1, #2, #3, #6, #7)
  - [ ] 5.1 Open `src/src/components/dashboard/quote-dashboard.tsx` (MODIFY — do NOT recreate)
  - [ ] 5.2 Add imports:
    ```typescript
    import { useRef } from "react";
    import { useVirtualizer } from "@tanstack/react-virtual";
    import { StatusBadge } from "@/components/dashboard/status-badge";
    import { formatCurrency, formatDate } from "@/lib/utils";
    ```
  - [ ] 5.3 Update the `QuoteRow` interface to add `total` field:
    ```typescript
    interface QuoteRow {
      id: string;
      quoteNumber: string;
      customerName: string;
      trade: Trade;
      status: QuoteStatus;
      updatedAt: string;
      total: number;   // ← add this
    }
    ```
  - [ ] 5.4 Add `listContainerRef` ref for the virtual scroll container (used only when quotes.length > 100):
    ```typescript
    const listContainerRef = useRef<HTMLDivElement>(null);
    ```
  - [ ] 5.5 Define the virtualizer (always constructed, but only used conditionally):
    ```typescript
    const shouldVirtualize = quotes.length > 100;
    const rowVirtualizer = useVirtualizer({
      count: quotes.length,
      getScrollElement: () => (shouldVirtualize ? listContainerRef.current : null),
      estimateSize: () => 76, // estimated row height in px (border + padding + 2-line content)
      overscan: 8,
    });
    ```
  - [ ] 5.6 Replace the existing quote list rendering section (the `<div className="flex flex-col gap-2">` block) with the virtual-scrolling-aware version:
    ```tsx
    {shouldVirtualize ? (
      /* Virtual scroll container — fixed height, internal scroll */
      <div
        ref={listContainerRef}
        className="overflow-y-auto rounded-lg border border-gray-200"
        style={{ height: "calc(100vh - 280px)", minHeight: "300px" }}
      >
        <div
          style={{ height: `${rowVirtualizer.getTotalSize()}px`, position: "relative" }}
        >
          {rowVirtualizer.getVirtualItems().map((virtualRow) => {
            const quote = quotes[virtualRow.index];
            return (
              <div
                key={virtualRow.key}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  transform: `translateY(${virtualRow.start}px)`,
                }}
              >
                <QuoteCard quote={quote} />
              </div>
            );
          })}
        </div>
      </div>
    ) : (
      <div className="flex flex-col gap-2">
        {quotes.map((quote) => (
          <QuoteCard key={quote.id} quote={quote} />
        ))}
      </div>
    )}
    ```
  - [ ] 5.7 Extract the existing `<Link>` card into a `QuoteCard` sub-component inside the same file (keeps the component co-located and avoids prop-drilling to a separate file):
    ```tsx
    function QuoteCard({ quote }: { quote: QuoteRow }) {
      return (
        <Link
          href={`/quotes/${quote.id}`}
          className="flex items-center gap-4 rounded-lg border border-gray-200 bg-white px-4 py-3 min-h-[44px] hover:bg-gray-50 transition-colors"
        >
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-sm font-medium text-gray-900 truncate">
                {quote.quoteNumber}
              </span>
              <span className="shrink-0 text-xs bg-gray-100 text-gray-600 rounded px-1.5 py-0.5">
                {TRADE_LABELS[quote.trade] ?? quote.trade}
              </span>
              <StatusBadge status={quote.status} />
            </div>
            <p className="text-sm text-gray-600 truncate mt-0.5">
              {quote.customerName || "—"}
            </p>
          </div>
          <div className="text-right shrink-0">
            <p className="text-sm font-semibold text-gray-900">
              {formatCurrency(quote.total)}
            </p>
            <p className="text-xs text-gray-400">
              {formatDate(quote.updatedAt)}
            </p>
          </div>
        </Link>
      );
    }
    ```
  - [ ] 5.8 Remove the old `{quote.status}` plain text rendering — it is replaced by `<StatusBadge status={quote.status} />`
  - [ ] 5.9 Verify the skeleton loader section (5 `<Skeleton>` rows) and empty state section remain unchanged

- [ ] Task 6: Update `GET /api/quotes/[id]` to include photos in the response (AC: #5)
  - [ ] 6.1 Open `src/src/app/api/quotes/[id]/route.ts` (MODIFY — do NOT recreate)
  - [ ] 6.2 In the `GET` handler's `findFirst` call, add `photos` to the include (lineItems is already there):
    ```typescript
    const quote = await prisma.quote.findFirst({
      where: { id, userId: session.user.id },
      include: {
        lineItems: { orderBy: { sortOrder: "asc" } },
        photos: { orderBy: { sortOrder: "asc" } },  // ← add this
      },
    });
    ```
  - [ ] 6.3 No changes needed to the `PUT` or `DELETE` handlers — only the `GET` response is affected
  - [ ] 6.4 All status timestamps (`sentAt`, `viewedAt`, `signedAt`, `paidAt`, `expiresAt`, `createdAt`) are already part of the quote record and will be returned automatically — no additional select needed

- [ ] Task 7: Create `QuoteStatusHistory` component (AC: #4)
  - [ ] 7.1 Create `src/src/components/dashboard/quote-status-history.tsx` (NEW file)
  - [ ] 7.2 Define the component:
    ```typescript
    import { formatDate } from "@/lib/utils";

    interface StatusStep {
      label: string;
      timestamp: Date | string | null | undefined;
      always?: boolean; // true for "Created" (always shown)
    }

    interface QuoteStatusHistoryProps {
      createdAt: Date | string;
      sentAt?: Date | string | null;
      viewedAt?: Date | string | null;
      signedAt?: Date | string | null;
      paidAt?: Date | string | null;
    }

    export function QuoteStatusHistory({
      createdAt,
      sentAt,
      viewedAt,
      signedAt,
      paidAt,
    }: QuoteStatusHistoryProps) {
      const steps: StatusStep[] = [
        { label: "Created", timestamp: createdAt, always: true },
        { label: "Sent to customer", timestamp: sentAt },
        { label: "Viewed by customer", timestamp: viewedAt },
        { label: "Signed", timestamp: signedAt },
        { label: "Deposit paid", timestamp: paidAt },
      ];

      const visibleSteps = steps.filter((s) => s.always || s.timestamp);

      if (visibleSteps.length === 0) return null;

      return (
        <div className="bg-white rounded-lg border border-gray-200 p-4 mb-4">
          <h2 className="text-sm font-semibold text-gray-700 mb-3">Status History</h2>
          <ol className="relative border-l border-gray-200 ml-2 space-y-3">
            {visibleSteps.map((step) => (
              <li key={step.label} className="pl-4">
                <div className="absolute w-2 h-2 bg-blue-500 rounded-full -left-1 mt-1.5" />
                <p className="text-sm font-medium text-gray-900">{step.label}</p>
                {step.timestamp && (
                  <p className="text-xs text-gray-500">
                    {formatDate(step.timestamp)}
                  </p>
                )}
              </li>
            ))}
          </ol>
        </div>
      );
    }
    ```

- [ ] Task 8: Update quote detail page to show status history (AC: #4, #5)
  - [ ] 8.1 Open `src/src/app/quotes/[id]/page.tsx` (MODIFY — do NOT recreate)
  - [ ] 8.2 Add import for `QuoteStatusHistory`:
    ```typescript
    import { QuoteStatusHistory } from "@/components/dashboard/quote-status-history";
    ```
  - [ ] 8.3 The `findFirst` query already includes `lineItems` and `photos` in this page (loaded from DB directly, not via API). The `photos` include was already there from Story 3.1. Verify it's present — do NOT duplicate.
  - [ ] 8.4 Add the `QuoteStatusHistory` section above the `QuoteBuilder` in the JSX:
    ```tsx
    return (
      <main className="min-h-screen p-4 max-w-lg mx-auto">
        <QuoteStatusHistory
          createdAt={quote.createdAt}
          sentAt={quote.sentAt}
          viewedAt={quote.viewedAt}
          signedAt={quote.signedAt}
          paidAt={quote.paidAt}
        />
        <QuoteBuilder quoteId={id} initialQuote={quote} quoteStatus={quote.status as QuoteStatus} />
      </main>
    );
    ```
  - [ ] 8.5 The `QuoteBuilder` component must NOT be modified — only the page wrapper changes

- [ ] Task 9: Write tests for updated `GET /api/quotes/[id]` (AC: #5)
  - [ ] 9.1 Open `src/src/app/api/quotes/[id]/route.test.ts` (MODIFY — do NOT recreate)
  - [ ] 9.2 Update `prisma.quote.findFirst` mock in existing GET tests to include both `lineItems` and `photos` in the mock return value (to reflect the updated query):
    ```typescript
    vi.mocked(prisma.quote.findFirst).mockResolvedValue({
      id: "q-1",
      userId: "user-1",
      status: "DRAFT",
      quoteNumber: "QT-2605-0001",
      lineItems: [],
      photos: [],       // ← add this
      createdAt: new Date(),
      updatedAt: new Date(),
    } as never);
    ```
  - [ ] 9.3 Add a new test: `GET /api/quotes/[id]` includes photos in response:
    ```typescript
    it("includes photos in the GET response", async () => {
      vi.mocked(auth).mockResolvedValue({ user: { id: "user-1" } } as never);
      vi.mocked(prisma.quote.findFirst).mockResolvedValue({
        id: "q-1",
        userId: "user-1",
        status: "SIGNED",
        quoteNumber: "QT-2605-0001",
        lineItems: [],
        photos: [
          { id: "photo-1", url: "https://r2.example.com/photo1.jpg", sortOrder: 0, thumbnail: null, caption: null },
        ],
        createdAt: new Date(),
        updatedAt: new Date(),
      } as never);

      const res = await GET(
        new Request("http://localhost/api/quotes/q-1") as never,
        { params: Promise.resolve({ id: "q-1" }) }
      );
      expect(res.status).toBe(200);
      const body = await res.json();
      expect(body.data.photos).toHaveLength(1);
      expect(body.data.photos[0].url).toBe("https://r2.example.com/photo1.jpg");
    });
    ```
  - [ ] 9.4 Add a test: `GET /api/quotes/[id]` includes status timestamps:
    ```typescript
    it("returns quote with all status timestamps", async () => {
      vi.mocked(auth).mockResolvedValue({ user: { id: "user-1" } } as never);
      const now = new Date();
      vi.mocked(prisma.quote.findFirst).mockResolvedValue({
        id: "q-1",
        userId: "user-1",
        status: "PAID",
        quoteNumber: "QT-2605-0001",
        lineItems: [],
        photos: [],
        createdAt: now,
        updatedAt: now,
        sentAt: now,
        viewedAt: now,
        signedAt: now,
        paidAt: now,
      } as never);

      const res = await GET(
        new Request("http://localhost/api/quotes/q-1") as never,
        { params: Promise.resolve({ id: "q-1" }) }
      );
      const body = await res.json();
      expect(body.data.sentAt).toBeDefined();
      expect(body.data.viewedAt).toBeDefined();
      expect(body.data.signedAt).toBeDefined();
      expect(body.data.paidAt).toBeDefined();
    });
    ```

- [ ] Task 10: Final verification (AC: all)
  - [ ] 10.1 `cd mvps/contractor-quoting-estimation/src && npm run build` — zero TypeScript errors
  - [ ] 10.2 `npm test` — all tests pass (117 existing + new tests from this story)
  - [ ] 10.3 Confirm `@tanstack/react-virtual` is listed in `package.json` dependencies
  - [ ] 10.4 Confirm `src/src/components/dashboard/status-badge.tsx` exists and exports `StatusBadge`
  - [ ] 10.5 Confirm `src/src/components/dashboard/quote-status-history.tsx` exists and exports `QuoteStatusHistory`
  - [ ] 10.6 Confirm the dashboard quote list shows `<StatusBadge>` (not plain text status string)
  - [ ] 10.7 Confirm the dashboard quote list shows `formatCurrency(quote.total)` for each quote
  - [ ] 10.8 Confirm `GET /api/quotes` response includes `total: number` and does NOT include `lineItems` array
  - [ ] 10.9 Confirm `GET /api/quotes/[id]` response includes both `lineItems` and `photos`
  - [ ] 10.10 Confirm `/quotes/[id]` page shows `<QuoteStatusHistory>` above `<QuoteBuilder>` without breaking the existing builder
  - [ ] 10.11 Confirm virtual scrolling is ONLY applied when `quotes.length > 100` (no regression for small lists)
  - [ ] 10.12 Confirm skeleton loaders and empty state in `QuoteDashboard` are NOT broken
  - [ ] 10.13 Confirm the `QuoteCard` sub-component has `min-h-[44px]` touch target (NFR20 compliance)
  - [ ] 10.14 Confirm `useQuotes` hook in `src/src/hooks/use-quotes.ts` still passes `search` param correctly — Story 5.2 adds `trade` and `date` filters, so leave extension points but do NOT add them yet

## Dev Notes

### Critical: Project Root and Directory Layout

The working directory for all `npm`, `npx prisma`, etc. commands is:
```
mvps/contractor-quoting-estimation/src/    ← package.json lives here
```

The Next.js source lives at the **nested** path:
```
mvps/contractor-quoting-estimation/src/src/
  app/
    api/
      quotes/
        route.ts                           ← MODIFY: add lineItems include + total calculation
        route.test.ts                      ← MODIFY: update mocks + add total test
      quotes/[id]/
        route.ts                           ← MODIFY: add photos to GET include
        route.test.ts                      ← MODIFY: add photos test + timestamps test
    dashboard/
      page.tsx                             ← no change needed (renders QuoteDashboard)
    quotes/[id]/
      page.tsx                             ← MODIFY: add QuoteStatusHistory above QuoteBuilder
  components/
    dashboard/
      quote-dashboard.tsx                  ← MODIFY: StatusBadge, total, virtual scrolling
      status-badge.tsx                     ← NEW: color-coded status badge
      quote-status-history.tsx             ← NEW: status timeline for quote detail
```

### What Already Exists — Do NOT Regress

The `QuoteDashboard` component at `src/src/components/dashboard/quote-dashboard.tsx` already has:
- Search input with debounce (via `useDebounce`) — preserve entirely
- Skeleton loaders during data fetch — preserve entirely
- Empty state with "Create your first quote!" — preserve entirely
- Link to `/quotes/${quote.id}` on each row — preserve (only change the row content)
- `useQuotes({ search: debouncedSearch })` hook call — preserve exactly

The `useQuotes` hook at `src/src/hooks/use-quotes.ts` already supports `{ search?: string }`. Story 5.2 will extend it with `{ trade?: Trade; dateRange?: ... }` — do NOT add those in this story.

### `calculateTotal` Utility — Already Exists

`src/src/lib/utils.ts` exports `calculateTotal`:
```typescript
export function calculateTotal(
  lineItems: Array<{ quantity: number; unitPrice: number }>,
  taxRate = 0
): { subtotal: number; tax: number; total: number }
```

Use this in `GET /api/quotes` route. Do NOT reimplement the calculation inline.

### `formatDate` Utility — Already Exists

`src/src/lib/utils.ts` also exports `formatDate(date: Date | string): string`. Use this in `QuoteStatusHistory` and `QuoteCard` instead of inline `Intl.DateTimeFormat` calls. The existing `QuoteDashboard` uses `new Intl.DateTimeFormat(...)` inline — replace it with `formatDate(quote.updatedAt)` in the `QuoteCard` sub-component.

### Stack Versions (from Stories 4.2 and 4.3)

- **Next.js 16.2.2** — `params` in page/route components is `Promise<{...}>`. Always `await` before use.
- **React 19.2.4** — standard hooks patterns apply; `useRef`, `useState`, `useVirtualizer` all work normally
- **Zod v4** — use `err.issues[0]?.message` (NOT `err.errors` — doesn't exist in Zod v4)
- **Vitest** — test runner (not Jest). Import from `"vitest"` not `"@jest/globals"`.
- **TypeScript strict mode** — all new code must pass `tsc --noEmit`
- **Prisma 7.6** — use `prisma.quote.findMany` with `include` for related records

### `@tanstack/react-virtual` — Virtual Scrolling Implementation

The package `@tanstack/react-virtual` is NOT in `package.json` — install it first (`npm install @tanstack/react-virtual`).

The virtualizer needs a scrollable container element. For the dashboard, since < 100 quotes renders normally (no fixed container height) and > 100 quotes needs a scrollable viewport:

```typescript
const shouldVirtualize = quotes.length > 100;
const rowVirtualizer = useVirtualizer({
  count: quotes.length,
  getScrollElement: () => (shouldVirtualize ? listContainerRef.current : null),
  estimateSize: () => 76,  // border (1px) + padding (24px top+bottom) + 2 lines of text (~51px) ≈ 76px
  overscan: 8,             // render 8 extra rows above/below viewport for smooth scrolling
});
```

The virtual container must have an explicit `height` for the browser to know the scroll region. Use `calc(100vh - 280px)` to fill most of the viewport below the header and search box. Set a `minHeight: "300px"` floor for small quote counts.

**Key virtual scroll DOM pattern:**
```tsx
<div ref={listContainerRef} className="overflow-y-auto rounded-lg border border-gray-200"
     style={{ height: "calc(100vh - 280px)", minHeight: "300px" }}>
  {/* Inner div must be exactly the total virtual height */}
  <div style={{ height: `${rowVirtualizer.getTotalSize()}px`, position: "relative" }}>
    {rowVirtualizer.getVirtualItems().map((virtualRow) => (
      <div key={virtualRow.key}
           style={{ position: "absolute", top: 0, left: 0, width: "100%",
                    transform: `translateY(${virtualRow.start}px)` }}>
        <QuoteCard quote={quotes[virtualRow.index]} />
      </div>
    ))}
  </div>
</div>
```

This is the standard `@tanstack/react-virtual` pattern for windowed lists with a scroll container.

### `GET /api/quotes` — Total Calculation Detail

The `findMany` adds line item quantities and prices:
```typescript
include: {
  lineItems: { select: { quantity: true, unitPrice: true } },
}
```

Then maps to strip lineItems and add total:
```typescript
const quotesWithTotals = quotes.map(({ lineItems, ...quote }) => {
  const { total } = calculateTotal(lineItems, quote.taxRate);
  return { ...quote, total };
});
```

The `taxRate` field is already on the Quote record, so no additional join is needed.

The response shape for each quote in the list becomes:
```json
{
  "id": "...",
  "quoteNumber": "QT-2605-XXXX",
  "customerName": "John Smith",
  "trade": "PLUMBING",
  "status": "SENT",
  "taxRate": 8.5,
  "total": 1250.00,
  "updatedAt": "2026-03-23T...",
  // ... other quote fields (createdAt, sentAt, etc.)
  // lineItems: NOT INCLUDED — stripped before return
}
```

### `GET /api/quotes/[id]` — Already Has Photos in Page but Not in API

Important distinction:
- `src/src/app/quotes/[id]/page.tsx` directly queries Prisma with `include: { lineItems: ..., photos: ... }` — **already includes photos** ✓
- `src/src/app/api/quotes/[id]/route.ts` GET handler only includes `lineItems: { orderBy: { sortOrder: "asc" } }` — **photos missing** ✗

Add `photos: { orderBy: { sortOrder: "asc" } }` to the API route's `include` so that API consumers (like the `useQuote` SWR hook) also get photos. This ensures the `/quotes/[id]` page's SWR data (if used) also includes photos.

### `QuoteStatusHistory` — Timeline Layout

The status history component uses a simple CSS border-left vertical line with absolutely-positioned dots — no external icon library needed. Keep it minimal:

```
│ Created             Mar 23, 2026
│ Sent to customer    Mar 23, 2026
│ Viewed by customer  Mar 24, 2026
│ Signed              Mar 24, 2026
│ Deposit paid        Mar 24, 2026
```

For the dot positioning, use `absolute -left-1 mt-1.5` on the `<div>` inside the `<ol>` with `relative border-l`. The `ml-2` on the `<ol>` leaves space for the dots to the left of the border.

### `StatusBadge` — Color Coding Per Spec

From the acceptance criteria and architecture:
| Status | Background | Text | Notes |
|--------|-----------|------|-------|
| DRAFT | `bg-gray-100` | `text-gray-700` | Default / not started |
| SENT | `bg-blue-100` | `text-blue-700` | Awaiting customer action |
| VIEWED | `bg-amber-100` | `text-amber-700` | Customer opened it |
| SIGNED | `bg-green-100` | `text-green-700` | Accepted |
| PAID | `bg-green-700` | `text-white font-semibold` | Completed — full green fill |
| EXPIRED | `bg-red-100` | `text-red-700` | Lapsed |

PAID is intentionally bolder/different from SIGNED to draw attention to completed deposits.

### `QuoteCard` Sub-Component — Keep It Internal

Extract `QuoteCard` as a **file-private function component** inside `quote-dashboard.tsx` rather than exporting it to a separate file. This follows the existing pattern of keeping related code co-located. The component is:
- Only used by `QuoteDashboard` in this file
- Not referenced by any other component
- Small enough to keep co-located

### Virtual Scrolling — Row Height Estimation

The `estimateSize: () => 76` assumes:
- 1px border top/bottom (rendered by the `<Link>` border class)
- `py-3` padding = 12px top + 12px bottom = 24px
- Line 1 (quoteNumber + trade badge + status badge): ~20px
- Margin between lines: ~4px
- Line 2 (customerName): ~16px
- Total: ≈ 76px

If rows render taller/shorter, the virtualizer adjusts dynamically via `measureElement`. The `estimateSize` is just the initial estimate — accuracy improves during scrolling.

### Existing Test Pattern (from Stories 4.1–4.3)

All tests use Vitest with the pattern:
```typescript
import { describe, it, expect, vi, beforeEach } from "vitest";
vi.mock("@/lib/db", () => ({ prisma: { ... } }));
vi.mock("@/lib/auth", () => ({ auth: vi.fn() }));
```

Mock return values must include ALL fields the route handler accesses after the mock call, otherwise TypeScript (strict) or runtime will error on undefined. When adding `photos: []` to quote mocks, ensure this is consistent across ALL tests in the file.

### Anti-Patterns to Avoid

- **Never** reimplement `calculateTotal` inline — use the existing `@/lib/utils` export
- **Never** include `lineItems` in the `GET /api/quotes` list response — only the computed `total`
- **Never** add `trade` or `dateRange` filters to `useQuotes` in this story — that's Story 5.2
- **Never** modify `QuoteBuilder` component — Story 5.1 only adds `QuoteStatusHistory` above it
- **Never** render virtual scroll container (fixed height div) when `quotes.length <= 100` — only use for 100+ to avoid an awkward fixed-height container for small lists
- **Never** use `@jest/globals` — this project uses Vitest, import from `"vitest"`
- **Never** use `err.errors` for Zod — use `err.issues[0]?.message` (Zod v4 API)
- **Never** forget to update ALL test mocks when the Prisma query includes new fields — stale mocks cause TypeScript errors or unexpected `undefined` in the handler

### Current Test Baseline

Story 4.3 ended with **117 tests** across **15 test files**. This story adds:
- Updated tests in `route.test.ts` (quotes list) — net +2 new tests (total calculation, lineItems stripped)
- Updated tests in `[id]/route.test.ts` (quote detail) — net +2 new tests (photos, timestamps)
- Expected post-story test count: **121+ tests**

### Files to Create (NEW)

| File | Purpose |
|------|---------|
| `src/src/components/dashboard/status-badge.tsx` | Color-coded status badge component |
| `src/src/components/dashboard/quote-status-history.tsx` | Status timeline for quote detail page |

### Files to Modify (MODIFY — do NOT recreate)

| File | Change |
|------|--------|
| `src/src/app/api/quotes/route.ts` | Add `include: { lineItems: { select: ... } }` + total calculation + strip lineItems from response |
| `src/src/app/api/quotes/route.test.ts` | Update mocks to include `lineItems` + add total calculation test |
| `src/src/app/api/quotes/[id]/route.ts` | Add `photos: { orderBy: { sortOrder: "asc" } }` to GET handler include |
| `src/src/app/api/quotes/[id]/route.test.ts` | Update mock + add photos test + add timestamps test |
| `src/src/components/dashboard/quote-dashboard.tsx` | Add StatusBadge, formatCurrency(total), useVirtualizer, QuoteCard sub-component |
| `src/src/app/quotes/[id]/page.tsx` | Import + render QuoteStatusHistory above QuoteBuilder |

### Project Structure Notes

- `src/src/components/dashboard/` directory exists with `quote-dashboard.tsx` — add the two new files there
- No new API routes — only modifying existing ones
- No Prisma migration needed — no schema changes; `photos` relation and all timestamps already exist
- No new environment variables needed

### References

- [Source: planning/epics.md#Epic 5 — Story 5.1: Quote List Dashboard with Status Tracking — FR41, FR44]
- [Source: planning/architecture.md#Frontend Architecture — Virtual scrolling via `@tanstack/react-virtual` for >100 items]
- [Source: planning/architecture.md#Data Architecture — Quote model fields: sentAt, viewedAt, signedAt, paidAt, createdAt]
- [Source: planning/architecture.md#Naming Patterns — feature-based components, kebab-case files]
- [Source: planning/architecture.md#NFR5 — Quote list dashboard renders up to 500 quotes with smooth scrolling (60fps)]
- [Source: planning/architecture.md#NFR20 — Minimum 44x44px touch targets on mobile]
- [Source: planning/architecture.md#API Patterns — GET /api/quotes (list), GET /api/quotes/[id] (detail)]
- [Source: stories/4-3-stripe-deposit-collection.md — Stack versions (Next.js 16.2.2, React 19.2.4, Zod v4), Vitest patterns]
- [Source: src/src/lib/utils.ts — `calculateTotal`, `formatCurrency`, `formatDate` already exported]
- [Source: src/src/components/dashboard/quote-dashboard.tsx — existing QuoteDashboard structure to preserve]
- [Source: src/src/app/api/quotes/route.ts — existing GET /api/quotes route to modify]
- [Source: src/src/app/api/quotes/[id]/route.ts — existing GET /api/quotes/[id] route to modify]

## Dev Agent Record

### Agent Model Used

claude-sonnet-4-6

### Debug Log References

### Completion Notes List

### File List
