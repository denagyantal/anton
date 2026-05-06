# Story 2.3: Quote Management — Duplicate, Delete & Search

Status: done

## Story

As a contractor,
I want to duplicate quotes for recurring job types, delete drafts I no longer need, and find past quotes quickly,
so that I can work efficiently without recreating quotes from scratch.

## Acceptance Criteria

1. **Given** I have an existing quote (any status — DRAFT, SENT, VIEWED, SIGNED, or PAID)
   **When** I tap "Duplicate"
   **Then** `POST /api/quotes/[id]/duplicate` creates a new DRAFT quote
   **And** the new quote copies: `trade`, all `lineItems` (description, quantity, unit, unitPrice, isCustom, sortOrder), `taxRate`, `depositType`, `depositValue`, `notes`, and `termsText`
   **And** the new quote does NOT copy: `customerName`, `customerAddress`, `customerPhone`, `customerEmail`, or any photo records (Epic 3 scope)
   **And** a new unique `quoteNumber` is generated for the duplicate
   **And** the new quote's `status` is `DRAFT` and all tracking fields (`sentAt`, `viewedAt`, `signedAt`, `paidAt`) are null
   **And** I am redirected to `/quotes/[newId]` to edit the new quote

2. **Given** I have a DRAFT quote on its detail page `/quotes/[id]`
   **When** I tap "Delete Draft" and then confirm the action
   **Then** `DELETE /api/quotes/[id]` permanently removes the quote and its line items from the database
   **And** I am redirected to `/dashboard`

3. **Given** I have a quote with status SENT, VIEWED, SIGNED, or PAID
   **When** I view the quote detail page `/quotes/[id]`
   **Then** there is no "Delete Draft" button rendered
   **And** `DELETE /api/quotes/[id]` returns 403 if called directly on a non-draft quote

4. **Given** I am on the `/dashboard` page
   **When** I type a customer name (or partial name) in the search field
   **Then** the quote list filters in real-time (debounced 300ms) to show only quotes where `customerName` contains the search term (case-insensitive)
   **And** when the search field is cleared, all quotes are shown again

5. **Given** `DELETE /api/quotes/[id]` is called without authentication
   **When** the request is processed
   **Then** the response is 401

6. **Given** `DELETE /api/quotes/[id]` is called for a quote belonging to a different user
   **When** the request is processed
   **Then** the response is 404 (not revealing another user's quote exists)

7. **Given** `POST /api/quotes/[id]/duplicate` is called without authentication
   **When** the request is processed
   **Then** the response is 401

8. **Given** `POST /api/quotes/[id]/duplicate` is called for a quote belonging to a different user
   **When** the request is processed
   **Then** the response is 404

## Tasks / Subtasks

- [x] Task 1: Add DELETE handler to existing quotes [id] route (AC: #2, #3, #5, #6)
  - [ ] 1.1 Open `src/app/api/quotes/[id]/route.ts` (already has GET and PUT) and add `export async function DELETE`
  - [ ] 1.2 Call `auth()`, return 401 if no session
  - [ ] 1.3 `await params` to get `{ id }` (Next.js 16 — params is a Promise)
  - [ ] 1.4 Query `prisma.quote.findFirst({ where: { id, userId: session.user.id } })` — return 404 if not found
  - [ ] 1.5 If `quote.status !== 'DRAFT'`, return 403 with `{ error: "Only draft quotes can be deleted" }`
  - [ ] 1.6 Run `prisma.quote.delete({ where: { id } })` — Prisma cascade handles line item deletion via schema `onDelete: Cascade`
  - [ ] 1.7 Return `NextResponse.json({}, { status: 204 })` on success
  - [ ] 1.8 Wrap in try/catch; return 500 on unexpected error

- [x] Task 2: Create duplicate API route (AC: #1, #7, #8)
  - [ ] 2.1 Create directory `src/app/api/quotes/[id]/duplicate/` and file `route.ts`
  - [ ] 2.2 Export `async function POST` — call `auth()`, return 401 if no session
  - [ ] 2.3 `await params` to get `{ id }`
  - [ ] 2.4 Fetch source quote: `prisma.quote.findFirst({ where: { id, userId: session.user.id }, include: { lineItems: { orderBy: { sortOrder: 'asc' } } } })` — return 404 if not found
  - [ ] 2.5 Generate new quote number: `generateQuoteNumber()` from `@/lib/utils`
  - [ ] 2.6 Create the new quote via `prisma.quote.create`:
    - Copy fields: `trade`, `taxRate`, `depositType`, `depositValue`, `notes`, `termsText`
    - Set: `userId: session.user.id`, `quoteNumber: newQuoteNumber`, `status: 'DRAFT'`, `customerName: ''`
    - Omit/default: `customerAddress`, `customerPhone`, `customerEmail`, `sentAt`, `viewedAt`, `signedAt`, `paidAt`, `pdfUrl`, `stripePaymentIntentId`, `depositAmountPaid`, `signatureData`, `signerIp`
    - Note: `viewToken` auto-generates via Prisma `@default(cuid())`
  - [ ] 2.7 Create line items for the new quote: use `prisma.lineItem.createMany({ data: sourceQuote.lineItems.map((item, i) => ({ quoteId: newQuote.id, description: item.description, quantity: item.quantity, unit: item.unit, unitPrice: item.unitPrice, isCustom: item.isCustom, sortOrder: i })) })`
  - [ ] 2.8 Re-fetch the new quote with line items: `prisma.quote.findFirst({ where: { id: newQuote.id }, include: { lineItems: { orderBy: { sortOrder: 'asc' } } } })`
  - [ ] 2.9 Return `NextResponse.json({ data: newQuote }, { status: 201 })`
  - [ ] 2.10 Wrap in try/catch; return 500 on unexpected error

- [x] Task 3: Enhance GET /api/quotes with search support (AC: #4)
  - [ ] 3.1 Open `src/app/api/quotes/route.ts` — update the `GET` handler
  - [ ] 3.2 Read `search` from query params: `const search = request.nextUrl.searchParams.get('search') ?? ''`
  - [ ] 3.3 Build Prisma where clause: `where: { userId: session.user.id, ...(search ? { customerName: { contains: search, mode: 'insensitive' } } : {}) }`
  - [ ] 3.4 Order results by `updatedAt: 'desc'`
  - [ ] 3.5 Return `{ data: quotes }` — keep `include: { lineItems: false }` for the list (no need for line items on list view)

- [x] Task 4: Update useQuotes hook to support search (AC: #4)
  - [ ] 4.1 Open `src/hooks/use-quotes.ts`
  - [ ] 4.2 Update `useQuotes` signature to accept optional filters: `useQuotes(filters?: { search?: string })`
  - [ ] 4.3 Build the SWR key: `const params = new URLSearchParams(); if (filters?.search) params.set('search', filters.search); return useSWR(\`/api/quotes?\${params}\`, fetcher)`
  - [ ] 4.4 Keep `useQuote(id)` unchanged

- [x] Task 5: Update QuoteBuilder to add Duplicate and Delete actions (AC: #1, #2, #3)
  - [ ] 5.1 Open `src/components/quotes/quote-builder.tsx`
  - [ ] 5.2 Add props: `quoteStatus: QuoteStatus` (pass from the page's `initialQuote.status`)
  - [ ] 5.3 Add state: `isDuplicating: boolean`, `isDeleting: boolean`, `showDeleteConfirm: boolean`
  - [ ] 5.4 Implement `handleDuplicate()`:
    - Set `isDuplicating = true`
    - Call `fetch('/api/quotes/' + quoteId + '/duplicate', { method: 'POST' })`
    - On success: `router.push('/quotes/' + newQuote.id)` using `useRouter` from `next/navigation`
    - On error: show error message
    - Finally: `isDuplicating = false`
  - [ ] 5.5 Implement `handleDeleteConfirm()`:
    - Set `isDeleting = true`
    - Call `fetch('/api/quotes/' + quoteId, { method: 'DELETE' })`
    - On success: `router.push('/dashboard')`
    - On error: show error message; `isDeleting = false`
  - [ ] 5.6 Render "Duplicate" button always visible:
    - Label: "Duplicate Quote", `isLoading={isDuplicating}`, min 44px touch target
  - [ ] 5.7 Render "Delete Draft" button only when `quoteStatus === 'DRAFT'`:
    - If `!showDeleteConfirm`: show "Delete Draft" button (destructive variant, red/danger style)
    - If `showDeleteConfirm`: show inline confirmation — "Delete this draft?" with a "Yes, Delete" button (`isLoading={isDeleting}`) and "Cancel" button that sets `showDeleteConfirm = false`
    - On "Delete Draft" click: set `showDeleteConfirm = true`
  - [ ] 5.8 Update `src/app/quotes/[id]/page.tsx` to pass `quoteStatus={quote.status}` prop to `QuoteBuilder`

- [x] Task 6: Create minimal dashboard page with search (AC: #4)
  - [ ] 6.1 Create `src/app/dashboard/page.tsx` as a server component
  - [ ] 6.2 Call `auth()` at top — if no session, `redirect('/login')`
  - [ ] 6.3 Render a client component `<QuoteDashboard />` for the interactive list + search
  - [ ] 6.4 Create `src/components/dashboard/quote-dashboard.tsx` as `"use client"`
  - [ ] 6.5 State: `search: string` initialized to `''`; debounce with `useDebounce(search, 300)` from `@/hooks/use-debounce`
  - [ ] 6.6 Call `const { data, isLoading } = useQuotes({ search: debouncedSearch })`
  - [ ] 6.7 Render search input field (from `@/components/ui/input`) with `placeholder="Search by customer name..."`, `value={search}`, `onChange={e => setSearch(e.target.value)}`, and a clear button when search is non-empty
  - [ ] 6.8 Render "New Quote" button linking to `/quotes/new` (use Next.js `Link` component)
  - [ ] 6.9 While `isLoading`, show `<Skeleton />` rows (3–5 rows)
  - [ ] 6.10 When no quotes and no search: render empty state — "No quotes yet. Create your first quote!" with a link to `/quotes/new`
  - [ ] 6.11 When no quotes and search is active: render "No quotes matching '{search}'"
  - [ ] 6.12 For each quote in `data.data`, render a row/card showing:
    - Quote number (e.g., `QT-2605-4821`)
    - Customer name (or "—" if empty string)
    - Trade badge (PLUMBING / ELECTRICAL / HVAC / PAINTING)
    - Total amount (use `formatCurrency()` — but note: quote list does NOT include line items, so show `—` for total unless we add it; see Dev Notes)
    - Status (plain text for now — Story 5 adds color-coded badges)
    - `updatedAt` formatted as locale date
    - Entire row is a Next.js `Link` to `/quotes/[id]`
    - 44px minimum touch target for each row
  - [ ] 6.13 Check if `src/hooks/use-debounce.ts` exists (created in Story 1.x?). If not, create it: `export function useDebounce<T>(value: T, delay: number): T { const [debouncedValue, setDebouncedValue] = useState(value); useEffect(() => { const timer = setTimeout(() => setDebouncedValue(value), delay); return () => clearTimeout(timer); }, [value, delay]); return debouncedValue; }`

- [x] Task 7: Write tests (AC: #2, #3, #5, #6, #7, #8)
  - [ ] 7.1 Create `src/app/api/quotes/[id]/route.test.ts` — ADD DELETE tests to the existing test file:
    - DELETE 401 when unauthenticated
    - DELETE 404 when quote belongs to another user
    - DELETE 403 when quote status is not DRAFT (e.g., SENT)
    - DELETE 204 successfully deletes DRAFT quote
  - [ ] 7.2 Create `src/app/api/quotes/[id]/duplicate/route.test.ts`:
    - POST 401 when unauthenticated
    - POST 404 when quote belongs to another user
    - POST 201 creates new quote with copied fields and new quote number
    - POST 201 new quote has empty customerName and no customer contact fields
    - POST 201 line items are duplicated with same fields
  - [ ] 7.3 Create or update `src/app/api/quotes/route.test.ts` — ADD GET search tests:
    - GET 401 when unauthenticated
    - GET returns all quotes when no search param
    - GET filters by customerName when search param provided

- [x] Task 8: Final verification (AC: all)
  - [ ] 8.1 Run `npm run build` from `mvps/contractor-quoting-estimation/src/` — must succeed with zero TypeScript errors
  - [ ] 8.2 Run `npm test` — all tests must pass (including existing Story 2.2 tests)
  - [ ] 8.3 Verify duplicate: creates new DRAFT with line items, no customer info, new quote number
  - [ ] 8.4 Verify delete: DRAFT quote disappears, non-draft has no delete button
  - [ ] 8.5 Verify search: typing partial customer name filters the list, clearing shows all

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
    api/quotes/[id]/              ← add DELETE handler here + create duplicate/ subdir
    api/quotes/route.ts           ← update GET to support ?search=
    dashboard/                    ← NEW page goes here
    quotes/[id]/page.tsx          ← update to pass quoteStatus prop
  components/
    quotes/quote-builder.tsx      ← update to add duplicate/delete buttons
    dashboard/                    ← NEW directory for dashboard components
  hooks/
    use-quotes.ts                 ← update useQuotes to accept filters
    use-debounce.ts               ← check existence; create if missing
```

### Existing Files to Modify (Do NOT recreate)

| File | What to change |
|---|---|
| `src/app/api/quotes/[id]/route.ts` | Add `export async function DELETE` handler |
| `src/app/api/quotes/route.ts` | Update GET to accept and apply `?search=` query param |
| `src/hooks/use-quotes.ts` | Update `useQuotes` signature to accept `filters?: { search?: string }` |
| `src/components/quotes/quote-builder.tsx` | Add `quoteStatus` prop; add Duplicate and Delete buttons |
| `src/app/quotes/[id]/page.tsx` | Pass `quoteStatus={quote.status}` to QuoteBuilder |

### Existing Utilities — Do NOT Recreate

| Utility | Import | Description |
|---|---|---|
| `generateQuoteNumber()` | `@/lib/utils` | Generates `QT-XXXX-XXXX` format quote numbers |
| `formatCurrency(amount)` | `@/lib/utils` | Formats number as USD |
| `cn(...)` | `@/lib/utils` | Tailwind class merging |
| `fetcher` | `@/lib/fetcher` | SWR data fetcher |
| `prisma` | `@/lib/db` | Prisma singleton |
| `auth()` | `@/lib/auth` | NextAuth session |
| `Button` | `@/components/ui/button` | Has `variant`, `size`, `isLoading` props |
| `Input` | `@/components/ui/input` | Standard text input |
| `Skeleton` | `@/components/ui/skeleton` | Loading skeleton |
| `useQuote`, `useQuotes` | `@/hooks/use-quotes` | Already created in Story 2.2 |
| `useDebounce` | `@/hooks/use-debounce` | Check if exists; create if not |

### Prisma Schema — No Migrations Needed

The schema already has everything needed. `LineItem` cascade-deletes when `Quote` is deleted:
```prisma
model Quote {
  ...
  lineItems   LineItem[]
  photos      QuotePhoto[]   // Epic 3 — not yet seeded, skip in duplicate
}

model LineItem {
  id          String  @id @default(cuid())
  quoteId     String
  quote       Quote   @relation(fields: [quoteId], references: [id], onDelete: Cascade)
  description String
  quantity    Float   @default(1)
  unit        String  @default("each")
  unitPrice   Float
  sortOrder   Int     @default(0)
  isCustom    Boolean @default(false)
}
```

Cascade delete: `prisma.quote.delete({ where: { id } })` will automatically delete all associated `LineItem` records. No manual line item deletion needed.

### Next.js 16 Breaking Change — params is a Promise

Always await `params` before destructuring:
```typescript
export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  // ...
}
```

### Zod v4 Error Handling

This project uses Zod **v4** — use `err.issues[0]?.message` not `err.errors`:
```typescript
import { ZodError } from "zod";

} catch (err) {
  if (err instanceof ZodError) {
    return NextResponse.json(
      { error: err.issues[0]?.message ?? "Validation failed" },
      { status: 400 }
    );
  }
  // ...
}
```

### DELETE Route Implementation Pattern

```typescript
// src/app/api/quotes/[id]/route.ts — add this after existing GET and PUT

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  try {
    const { id } = await params;
    const quote = await prisma.quote.findFirst({
      where: { id, userId: session.user.id },
    });
    if (!quote) {
      return NextResponse.json({ error: "Quote not found" }, { status: 404 });
    }
    if (quote.status !== "DRAFT") {
      return NextResponse.json(
        { error: "Only draft quotes can be deleted" },
        { status: 403 }
      );
    }
    await prisma.quote.delete({ where: { id } });
    return new NextResponse(null, { status: 204 });
  } catch (err) {
    console.error("Delete quote error:", err);
    return NextResponse.json({ error: "Failed to delete quote." }, { status: 500 });
  }
}
```

Note: Return `new NextResponse(null, { status: 204 })` for 204 No Content — do NOT use `NextResponse.json({}, { status: 204 })` as that sends a body which is invalid per HTTP spec.

### Duplicate Route Implementation Pattern

```typescript
// src/app/api/quotes/[id]/duplicate/route.ts
import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { generateQuoteNumber } from "@/lib/utils";

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  try {
    const { id } = await params;
    const source = await prisma.quote.findFirst({
      where: { id, userId: session.user.id },
      include: { lineItems: { orderBy: { sortOrder: "asc" } } },
    });
    if (!source) {
      return NextResponse.json({ error: "Quote not found" }, { status: 404 });
    }

    const quoteNumber = generateQuoteNumber();
    const newQuote = await prisma.quote.create({
      data: {
        userId: session.user.id,
        quoteNumber,
        trade: source.trade,
        customerName: "",           // intentionally blank — different job
        taxRate: source.taxRate,
        depositType: source.depositType,
        depositValue: source.depositValue,
        notes: source.notes,
        termsText: source.termsText,
        // status defaults to DRAFT; viewToken auto-generated
      },
    });

    if (source.lineItems.length > 0) {
      await prisma.lineItem.createMany({
        data: source.lineItems.map((item, i) => ({
          quoteId: newQuote.id,
          description: item.description,
          quantity: item.quantity,
          unit: item.unit,
          unitPrice: item.unitPrice,
          isCustom: item.isCustom,
          sortOrder: i,
        })),
      });
    }

    const fullQuote = await prisma.quote.findFirst({
      where: { id: newQuote.id },
      include: { lineItems: { orderBy: { sortOrder: "asc" } } },
    });

    return NextResponse.json({ data: fullQuote }, { status: 201 });
  } catch (err) {
    console.error("Duplicate quote error:", err);
    return NextResponse.json({ error: "Failed to duplicate quote." }, { status: 500 });
  }
}
```

### GET /api/quotes Search Enhancement

```typescript
// Update the GET handler in src/app/api/quotes/route.ts
export async function GET(request: NextRequest) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  try {
    const search = request.nextUrl.searchParams.get("search") ?? "";
    const quotes = await prisma.quote.findMany({
      where: {
        userId: session.user.id,
        ...(search
          ? { customerName: { contains: search, mode: "insensitive" } }
          : {}),
      },
      orderBy: { updatedAt: "desc" },
    });
    return NextResponse.json({ data: quotes });
  } catch (err) {
    console.error("List quotes error:", err);
    return NextResponse.json({ error: "Failed to fetch quotes." }, { status: 500 });
  }
}
```

### useQuotes Hook Update

```typescript
// src/hooks/use-quotes.ts — update useQuotes function
import useSWR from "swr";
import { fetcher } from "@/lib/fetcher";

export function useQuote(id: string | null | undefined) {
  return useSWR(id ? `/api/quotes/${id}` : null, fetcher);
}

export function useQuotes(filters?: { search?: string }) {
  const params = new URLSearchParams();
  if (filters?.search) params.set("search", filters.search);
  const query = params.toString();
  return useSWR(`/api/quotes${query ? `?${query}` : ""}`, fetcher);
}
```

### QuoteBuilder Duplicate/Delete Integration

Add to `src/components/quotes/quote-builder.tsx`:

```typescript
// Add to props interface
interface QuoteBuilderProps {
  quoteId: string;
  initialQuote: QuoteWithLineItems;
  quoteStatus: QuoteStatus;  // add this
}

// Add inside component
const router = useRouter();  // from next/navigation
const [isDuplicating, setIsDuplicating] = useState(false);
const [isDeleting, setIsDeleting] = useState(false);
const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

async function handleDuplicate() {
  setIsDuplicating(true);
  try {
    const res = await fetch(`/api/quotes/${quoteId}/duplicate`, { method: "POST" });
    if (!res.ok) throw new Error("Failed to duplicate");
    const body = await res.json();
    router.push(`/quotes/${body.data.id}`);
  } catch {
    // show error toast or inline message
  } finally {
    setIsDuplicating(false);
  }
}

async function handleDeleteConfirm() {
  setIsDeleting(true);
  try {
    const res = await fetch(`/api/quotes/${quoteId}`, { method: "DELETE" });
    if (!res.ok) throw new Error("Failed to delete");
    router.push("/dashboard");
  } catch {
    // show error toast or inline message
    setIsDeleting(false);
  }
}
```

Render actions below the Save button:
```tsx
{/* Duplicate button — always shown */}
<Button variant="outline" onClick={handleDuplicate} isLoading={isDuplicating}>
  Duplicate Quote
</Button>

{/* Delete — only for DRAFT */}
{quoteStatus === "DRAFT" && (
  !showDeleteConfirm ? (
    <Button variant="destructive" onClick={() => setShowDeleteConfirm(true)}>
      Delete Draft
    </Button>
  ) : (
    <div className="flex gap-2 items-center">
      <span className="text-sm text-gray-700">Delete this draft?</span>
      <Button variant="destructive" isLoading={isDeleting} onClick={handleDeleteConfirm}>
        Yes, Delete
      </Button>
      <Button variant="outline" onClick={() => setShowDeleteConfirm(false)}>
        Cancel
      </Button>
    </div>
  )
)}
```

### Dashboard Total Amount — Important Note

The `GET /api/quotes` response does NOT include `lineItems` (for performance). Therefore, the dashboard list cannot display the total amount per quote without either:
1. Including line items in the list response (expensive for 500+ quotes), or
2. Storing a `totalAmount` denormalized field on the Quote model (not in current schema), or
3. Not showing the total on the list (simplest — show `—`)

**For this story: show `—` for the total column on the dashboard.** Story 5.1 may revisit this decision. Do not add line items to the list query.

### Dashboard Page Structure

```
/dashboard/page.tsx (server component — auth guard)
  └── <QuoteDashboard /> (client component)
      ├── Header: "My Quotes" + "New Quote" link button
      ├── Search input with clear button
      └── Quote list
          ├── Loading: 5x Skeleton rows
          ├── Empty (no search): "No quotes yet..." CTA
          ├── Empty (with search): "No quotes matching..."
          └── Quote rows: Link to /quotes/[id]
              ├── Quote number
              ├── Customer name (or "—")
              ├── Trade
              ├── Status text
              └── Date (updatedAt)
```

### Vitest Testing Pattern (Matches Existing Stories)

```typescript
// src/app/api/quotes/[id]/route.test.ts — ADD these to existing DELETE section
import { describe, it, expect, vi, beforeEach } from "vitest";

vi.mock("@/lib/auth", () => ({ auth: vi.fn() }));
vi.mock("@/lib/db", () => ({
  prisma: {
    quote: {
      findFirst: vi.fn(),
      create: vi.fn(),
      update: vi.fn(),
      delete: vi.fn(),  // add this
    },
    lineItem: { deleteMany: vi.fn(), createMany: vi.fn() },
    $transaction: vi.fn(),
  },
}));

// For DELETE tests — import the named export
import { DELETE } from "./route";
```

Note: The existing test file already mocks `auth` and `prisma`. Add DELETE tests to the same `describe` block or a new one in the same file. Import `DELETE` from `"./route"` alongside the existing `GET` and `PUT` imports.

### Anti-Patterns to Avoid

- **Never** use `prisma.quote.findUnique` for user-scoped queries — use `findFirst({ where: { id, userId } })` to prevent information disclosure (returns null instead of throwing)
- **Never** copy `customerName`, `customerAddress`, `customerPhone`, `customerEmail` in the duplicate — it's a different job for a different customer
- **Never** copy photo records in the duplicate — photos are scoped to Epic 3 and tied to specific jobsite visits
- **Never** allow deleting non-DRAFT quotes — the 403 guard is essential for data integrity
- **Never** use `window.confirm()` for the delete confirmation — use the inline state-based confirmation pattern documented above
- **Never** forget to return `new NextResponse(null, { status: 204 })` for DELETE success — a 204 must have no body
- **Never** add line items to the `GET /api/quotes` list query — it would break performance for users with 500+ quotes
- **Never** skip the `useDebounce` wrapper on the search field — without it, each keystroke fires an API request

### Files to Create in This Story

**New files:**
- `src/app/api/quotes/[id]/duplicate/route.ts` — POST duplicate quote
- `src/app/api/quotes/[id]/duplicate/route.test.ts` — Tests for duplicate
- `src/app/dashboard/page.tsx` — Dashboard page (server auth guard + client component)
- `src/components/dashboard/quote-dashboard.tsx` — Client component with search + list
- (If missing) `src/hooks/use-debounce.ts` — Debounce utility hook

**Modified files:**
- `src/app/api/quotes/[id]/route.ts` — Add DELETE handler
- `src/app/api/quotes/[id]/route.test.ts` — Add DELETE test cases
- `src/app/api/quotes/route.ts` — Update GET to support `?search=` param
- `src/app/api/quotes/route.test.ts` — Add GET search test cases
- `src/hooks/use-quotes.ts` — Update `useQuotes` to accept filters
- `src/components/quotes/quote-builder.tsx` — Add quoteStatus prop + Duplicate/Delete buttons
- `src/app/quotes/[id]/page.tsx` — Pass `quoteStatus={quote.status}` to QuoteBuilder

### Project Structure Notes

- `src/components/dashboard/` directory does NOT yet exist — create it
- `src/app/dashboard/` directory does NOT yet exist — create it
- `src/app/api/quotes/[id]/duplicate/` directory does NOT yet exist — create it
- `src/hooks/use-debounce.ts` — check if it exists before creating (grep for `useDebounce` in the hooks directory)
- The `src/components/dashboard/` directory is defined in the architecture for future dashboard components; Story 5.1 will add `quote-list.tsx`, `quote-card.tsx`, `quote-filters.tsx`, `status-badge.tsx` — do NOT implement those here

### References

- [Source: planning/epics.md#Epic 2 — Story 2.3: Quote Management — Duplicate, Delete & Search]
- [Source: planning/architecture.md#API & Communication Patterns — Core API Endpoints (DELETE /api/quotes/[id], POST /api/quotes/[id]/duplicate)]
- [Source: planning/architecture.md#Data Architecture — Data Model (Quote, LineItem with onDelete: Cascade)]
- [Source: planning/architecture.md#Frontend Architecture — Routing Strategy (/dashboard)]
- [Source: planning/architecture.md#Implementation Patterns — Anti-Patterns (never findUnique for user-scoped)]
- [Source: stories/2-2-quote-builder-create-and-edit-quotes.md — Existing API patterns, Zod v4 notes, Next.js 16 params Promise, Vitest mock patterns, QuoteBuilder architecture]
- [Source: stories/2-2-quote-builder-create-and-edit-quotes.md — GET /api/quotes stub implementation note (minimal, no search yet)]

## Dev Agent Record

### Agent Model Used

claude-sonnet-4-6

### Debug Log References

None.

### Completion Notes List

- Implemented DELETE handler with 401/404/403/204 status codes and Prisma cascade delete for line items.
- Created POST /api/quotes/[id]/duplicate: copies trade, taxRate, depositType, depositValue, notes, termsText and all lineItems; sets customerName="", generates new quoteNumber; does not copy customer contact fields.
- Updated GET /api/quotes to accept `?search=` param with case-insensitive Prisma `contains` filter; used `new URL(request.url).searchParams` instead of `request.nextUrl` for compatibility with test Request objects.
- Updated `useQuotes` hook to accept optional `filters.search` and build the SWR key with URLSearchParams.
- Updated QuoteBuilder to accept `quoteStatus: QuoteStatus` prop; added Duplicate and Delete Draft buttons with inline confirmation pattern (no `window.confirm`); uses `useRouter` from `next/navigation` for redirects.
- Created Skeleton UI component, `useDebounce` hook, `QuoteDashboard` client component, and replaced the stub dashboard page with a live search + quote list implementation.
- All 57 tests pass; `npm run build` succeeds with zero TypeScript errors.
- Note: Button component does not support `asChild` (no Radix UI dependency), so dashboard "New Quote" links use plain `<Link>` with Tailwind button classes.

### File List

**New files:**
- `src/src/app/api/quotes/[id]/duplicate/route.ts`
- `src/src/app/api/quotes/[id]/duplicate/route.test.ts`
- `src/src/components/dashboard/quote-dashboard.tsx`
- `src/src/components/ui/skeleton.tsx`
- `src/src/hooks/use-debounce.ts`

**Modified files:**
- `src/src/app/api/quotes/[id]/route.ts` — added DELETE handler
- `src/src/app/api/quotes/[id]/route.test.ts` — added DELETE test cases; added `quote.delete` to mock
- `src/src/app/api/quotes/route.ts` — updated GET to accept and apply `?search=` param
- `src/src/app/api/quotes/route.test.ts` — updated GET tests to pass request arg; added search filter tests
- `src/src/hooks/use-quotes.ts` — updated `useQuotes` to accept `filters?: { search?: string }`
- `src/src/components/quotes/quote-builder.tsx` — added `quoteStatus` prop, Duplicate and Delete Draft buttons
- `src/src/app/quotes/[id]/page.tsx` — passes `quoteStatus={quote.status as QuoteStatus}` to QuoteBuilder
- `src/src/app/dashboard/page.tsx` — replaced stub with server-side auth guard + QuoteDashboard
