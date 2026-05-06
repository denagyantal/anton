# Story 2.2: Quote Builder — Create & Edit Quotes

Status: ready-for-dev

## Story

As a contractor,
I want to create a quote by selecting line items, entering customer info, and configuring pricing details,
so that I can build a complete, accurate quote for my customer.

## Acceptance Criteria

1. **Given** I am on the `/quotes/new` page
   **When** I select a trade template (PLUMBING, ELECTRICAL, HVAC, or PAINTING)
   **Then** a new quote is created via `POST /api/quotes` with that trade and a server-generated unique quote number
   **And** I am redirected to `/quotes/[id]` to continue editing

2. **Given** I am building a quote
   **When** I add line items from the library (via `LineItemPicker`) or create custom line items with description, quantity, unit, and unit price
   **Then** each line item appears in the quote with its details editable inline
   **And** I can edit description, quantity, unit, and unit price for any line item
   **And** I can remove any line item with a delete button

3. **Given** I have line items in my quote
   **When** I change any quantity or unit price
   **Then** the subtotal, tax (based on the quote's tax rate), and total recalculate automatically in real-time
   **And** the calculation uses `calculateTotal(lineItems, taxRate)` from `@/lib/utils`

4. **Given** I am building a quote
   **When** I enter customer information (name, address, phone, email)
   **Then** the customer details are saved with the quote on save

5. **Given** I am building a quote
   **When** I add a free-text job notes/scope description
   **Then** the notes are saved and will appear in the generated PDF (Epic 3)

6. **Given** I am building a quote
   **When** I set the tax rate field (defaulting to my profile's `defaultTaxRate`)
   **Then** the tax calculation in the summary updates immediately

7. **Given** I am building a quote
   **When** I configure a deposit as either FIXED dollar value or PERCENTAGE of total
   **Then** the deposit amount is calculated and displayed
   **And** both `depositType` and `depositValue` are saved with the quote

8. **Given** I have made changes to a quote on `/quotes/[id]`
   **When** I tap the "Save" button
   **Then** the quote is saved via `PUT /api/quotes/[id]` with all current field values and line items
   **And** I see a confirmation that the quote was saved

9. **Given** I navigate to `/quotes/[id]` for an existing draft quote
   **When** the page loads
   **Then** the form is pre-populated with all saved quote data including line items

10. **Given** `POST /api/quotes` is called without authentication
    **When** the request is processed
    **Then** the response is 401

11. **Given** `PUT /api/quotes/[id]` is called for a quote belonging to a different user
    **When** the request is processed
    **Then** the response is 404 (not revealing another user's quote exists)

## Tasks / Subtasks

- [ ] Task 1: Create Zod validation schemas (AC: #1, #2, #8)
  - [ ] 1.1 Create `src/lib/validations/quote.ts`
  - [ ] 1.2 Export `lineItemSchema` — validates a single line item: `description` (min 1), `quantity` (positive number), `unit` (min 1, default "each"), `unitPrice` (min 0), `isCustom` (boolean, default false)
  - [ ] 1.3 Export `createQuoteSchema` — validates `{ trade: z.enum(["PLUMBING","ELECTRICAL","HVAC","PAINTING"]) }`
  - [ ] 1.4 Export `updateQuoteSchema` — validates: `customerName` (string, min 1), `customerAddress` (optional string), `customerPhone` (optional string), `customerEmail` (optional string, allow empty), `notes` (optional string), `taxRate` (number, min 0, max 100), `depositType` (optional nullable enum FIXED|PERCENTAGE), `depositValue` (optional nullable number min 0), `termsText` (optional string), `lineItems` (array of `lineItemSchema`)

- [ ] Task 2: Create API routes (AC: #1, #8, #9, #10, #11)
  - [ ] 2.1 Create `src/app/api/quotes/route.ts` with POST handler
  - [ ] 2.2 In POST: call `auth()`, return 401 if no session
  - [ ] 2.3 Parse body with `createQuoteSchema.parse(body)` — return 400 on ZodError with `err.issues[0]?.message`
  - [ ] 2.4 Generate quote number using `generateQuoteNumber()` from `@/lib/utils`
  - [ ] 2.5 Create quote via `prisma.quote.create({ data: { trade, quoteNumber, userId: session.user.id, customerName: "" } })` — `customerName` is required by Prisma schema, default to `""`
  - [ ] 2.6 Return `{ data: quote }` with status 201
  - [ ] 2.7 Wrap in try/catch — return 500 on unexpected error
  - [ ] 2.8 Create `src/app/api/quotes/[id]/route.ts` with GET and PUT handlers
  - [ ] 2.9 In GET: call `auth()`, return 401 if no session. Query `prisma.quote.findFirst({ where: { id, userId: session.user.id }, include: { lineItems: { orderBy: { sortOrder: 'asc' } } } })`. Return 404 if not found. Return `{ data: quote }`.
  - [ ] 2.10 In PUT: call `auth()`, return 401 if no session. Parse body with `updateQuoteSchema`. Find quote for this user (404 if not found or belongs to another user). Run a Prisma transaction: delete all existing line items for the quote, then `quote.update` with the new field values, then create each new line item with `sortOrder` as its array index. Return `{ data: updatedQuote }` including line items.
  - [ ] 2.11 Wrap all handlers in try/catch with appropriate error responses

- [ ] Task 3: Create SWR hook (AC: #9)
  - [ ] 3.1 Create `src/hooks/use-quotes.ts`
  - [ ] 3.2 Export `useQuote(id: string | null | undefined)` — `useSWR(id ? /api/quotes/${id} : null, fetcher)` returning `{ data, error, isLoading, mutate }`
  - [ ] 3.3 Export `useQuotes()` — `useSWR('/api/quotes', fetcher)` (full list, used by dashboard in Story 5)

- [ ] Task 4: Create TradeSelector component (AC: #1)
  - [ ] 4.1 Create `src/components/quotes/trade-selector.tsx` as `"use client"`
  - [ ] 4.2 Props: `onSelect: (trade: string) => void`, `isLoading?: boolean`
  - [ ] 4.3 Render four large tappable cards (one per trade) with trade name and an icon or emoji label
  - [ ] 4.4 On click, call `onSelect(trade)` — the parent handles the API call and redirect
  - [ ] 4.5 While `isLoading`, show a spinner and disable all cards
  - [ ] 4.6 Cards must have minimum 44px touch targets (use `min-h-[44px]` or a tall card design)

- [ ] Task 5: Create CustomerInfo component (AC: #4)
  - [ ] 5.1 Create `src/components/quotes/customer-info.tsx` as `"use client"`
  - [ ] 5.2 Props: `value: { customerName: string; customerAddress?: string; customerPhone?: string; customerEmail?: string }`, `onChange: (value: ...) => void`
  - [ ] 5.3 Render four `Input` fields (from `@/components/ui/input`): name (required), address, phone, email
  - [ ] 5.4 Each field calls `onChange({ ...value, [field]: newValue })` on change

- [ ] Task 6: Create LineItemRow component (AC: #2, #3)
  - [ ] 6.1 Create `src/components/quotes/line-item-row.tsx` as `"use client"`
  - [ ] 6.2 Props: `item: { id?: string; description: string; quantity: number; unit: string; unitPrice: number; isCustom: boolean }`, `onChange: (item: ...) => void`, `onRemove: () => void`
  - [ ] 6.3 Render inline-editable fields: description (text input), quantity (number input, min 0.01, step 0.01), unit (text input or select with common units: each, per linear foot, per square foot, per hour, flat rate), unitPrice (number input, min 0)
  - [ ] 6.4 Show line total (`formatCurrency(quantity * unitPrice)`) as read-only at the end of the row
  - [ ] 6.5 Remove button calls `onRemove()` — use a trash/× icon with `aria-label="Remove line item"`, minimum 44px touch target
  - [ ] 6.6 All inputs call `onChange(updatedItem)` on change

- [ ] Task 7: Create DepositConfig component (AC: #7)
  - [ ] 7.1 Create `src/components/quotes/deposit-config.tsx` as `"use client"`
  - [ ] 7.2 Props: `depositType: "FIXED" | "PERCENTAGE" | null`, `depositValue: number | null`, `total: number`, `onChange: (depositType, depositValue) => void`
  - [ ] 7.3 Render a toggle/radio for "None", "Fixed Amount ($)", "Percentage (%)"
  - [ ] 7.4 When Fixed: show dollar input for deposit amount
  - [ ] 7.5 When Percentage: show percentage input (0–100) + computed dollar amount display (`formatCurrency(total * depositValue / 100)`)
  - [ ] 7.6 When None: `depositType = null`, `depositValue = null`

- [ ] Task 8: Create QuoteSummary component (AC: #3, #6)
  - [ ] 8.1 Create `src/components/quotes/quote-summary.tsx` as `"use client"`
  - [ ] 8.2 Props: `lineItems: Array<{ quantity: number; unitPrice: number }>`, `taxRate: number`, `depositType: "FIXED" | "PERCENTAGE" | null`, `depositValue: number | null`
  - [ ] 8.3 Use `calculateTotal(lineItems, taxRate)` from `@/lib/utils` to compute `{ subtotal, tax, total }`
  - [ ] 8.4 Display subtotal, tax (with tax rate %), total — all formatted with `formatCurrency()`
  - [ ] 8.5 If deposit is configured, display deposit amount below total
  - [ ] 8.6 Component is purely presentational — all values derived from props

- [ ] Task 9: Create QuoteBuilder component (AC: #1–#9)
  - [ ] 9.1 Create `src/components/quotes/quote-builder.tsx` as `"use client"`
  - [ ] 9.2 Props: `quoteId: string`, `initialQuote: QuoteWithLineItems` (type: `Quote & { lineItems: LineItem[] }` from `@prisma/client`)
  - [ ] 9.3 Local state: mirror `initialQuote` into React state for all editable fields: `customerName`, `customerAddress`, `customerPhone`, `customerEmail`, `notes`, `taxRate`, `depositType`, `depositValue`, `lineItems`
  - [ ] 9.4 Render `CustomerInfo`, list of `LineItemRow` components, `QuoteSummary`, `DepositConfig`, notes textarea, tax rate input
  - [ ] 9.5 Render `LineItemPicker` (from Story 2.1, `@/components/quotes/line-item-picker`) for the quote's trade. When `onAddItem` fires, append to `lineItems` state with `isCustom: false`
  - [ ] 9.6 Add a "+ Custom Item" button that appends a blank `LineItemRow` with `isCustom: true`, description `""`, quantity `1`, unit `"each"`, unitPrice `0`
  - [ ] 9.7 Implement `handleSave()` — calls `PUT /api/quotes/[quoteId]` via `fetch` with all current state. On success, call `mutate()` from `useQuote(quoteId)` to update SWR cache. Show success toast or inline message. On error, show error message.
  - [ ] 9.8 Show a "Save" `Button` (with `isLoading` state while saving) that calls `handleSave()`
  - [ ] 9.9 Display quote number and trade (read-only header info)
  - [ ] 9.10 Tax rate: render a number input (min 0, max 100, step 0.01) labeled "Tax Rate (%)". Default to `initialQuote.taxRate`. On change, update local `taxRate` state and the `QuoteSummary` recalculates immediately.

- [ ] Task 10: Create page routes (AC: #1, #9)
  - [ ] 10.1 Create `src/app/quotes/new/page.tsx`
  - [ ] 10.2 This is a client component (`"use client"`) — it renders `TradeSelector`
  - [ ] 10.3 When trade is selected: call `fetch("POST /api/quotes", { body: { trade } })`. On success, use `router.push('/quotes/' + quote.id)` from `next/navigation`
  - [ ] 10.4 Handle loading state (isLoading) while API call is in flight
  - [ ] 10.5 Wrap in auth guard (middleware already handles this — page can assume authenticated)
  - [ ] 10.6 Create `src/app/quotes/[id]/page.tsx` as a server component
  - [ ] 10.7 In the server component, call `auth()` to get session. If no session, `redirect('/login')`. Await `params` (it's a Promise in Next.js 16): `const { id } = await params`
  - [ ] 10.8 Fetch quote from Prisma: `prisma.quote.findFirst({ where: { id, userId: session.user.id }, include: { lineItems: { orderBy: { sortOrder: 'asc' } } } })`. If not found, `notFound()` from `next/navigation`.
  - [ ] 10.9 Render `<QuoteBuilder quoteId={id} initialQuote={quote} />`

- [ ] Task 11: Write tests (AC: #1, #8, #10, #11)
  - [ ] 11.1 Create `src/app/api/quotes/route.test.ts` — tests: 401 when unauthenticated, 400 for invalid trade, 201 creates quote with generated quote number, quote is scoped to authenticated user
  - [ ] 11.2 Create `src/app/api/quotes/[id]/route.test.ts` — tests: GET 401 unauthenticated, GET 404 for other user's quote, GET 200 returns quote with line items, PUT 401 unauthenticated, PUT 404 for other user's quote, PUT 200 updates quote and replaces line items

- [ ] Task 12: Final verification (AC: all)
  - [ ] 12.1 Run `npm run build` from `mvps/contractor-quoting-estimation/src/` — must succeed with zero TypeScript errors
  - [ ] 12.2 Run `npm test` — all tests must pass
  - [ ] 12.3 Verify QuoteSummary recalculates in real-time when quantity/price changes
  - [ ] 12.4 Verify LineItemPicker integration: adding item from library appends it to the quote

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
    api/quotes/           ← new API routes go here
    quotes/new/           ← new page goes here
    quotes/[id]/          ← new page goes here
  components/quotes/      ← new components go here (directory already exists from Story 2.1)
  hooks/                  ← new hooks go here
  lib/validations/        ← new validation schemas go here
```

### Existing Utilities — Do NOT Recreate

These are already implemented and tested — import them:

| Utility | Import | Description |
|---|---|---|
| `formatCurrency(amount)` | `@/lib/utils` | Formats number as USD currency string |
| `calculateTotal(lineItems, taxRate)` | `@/lib/utils` | Returns `{ subtotal, tax, total }` |
| `generateQuoteNumber(prefix?)` | `@/lib/utils` | Generates unique quote number like `QT-2605-4821` |
| `cn(...inputs)` | `@/lib/utils` | Tailwind class merging |
| `fetcher` | `@/lib/fetcher` | SWR data fetcher |
| `prisma` | `@/lib/db` | Prisma singleton |
| `auth()` | `@/lib/auth` | NextAuth session |
| `Button` | `@/components/ui/button` | Has `variant`, `size`, `isLoading` props |
| `Input` | `@/components/ui/input` | Standard text input |
| `LineItemPicker` | `@/components/quotes/line-item-picker` | Already built in Story 2.1 |
| `TemplateItemData` | `@/components/quotes/line-item-picker` | Type for template items |

### Prisma Schema — Relevant Models

The schema is already migrated. Use these models as-is:

```prisma
model Quote {
  id              String       @id @default(cuid())
  userId          String
  status          QuoteStatus  @default(DRAFT)
  quoteNumber     String       @unique
  trade           Trade
  customerName    String       // required, default "" for new quotes
  customerAddress String?
  customerPhone   String?
  customerEmail   String?
  notes           String?
  taxRate         Float        @default(0)
  depositType     DepositType?
  depositValue    Float?
  termsText       String?
  ...
  lineItems       LineItem[]
}

model LineItem {
  id          String  @id @default(cuid())
  quoteId     String
  description String
  quantity    Float   @default(1)
  unit        String  @default("each")
  unitPrice   Float
  sortOrder   Int     @default(0)
  isCustom    Boolean @default(false)
}

enum Trade { PLUMBING ELECTRICAL HVAC PAINTING }
enum QuoteStatus { DRAFT SENT VIEWED SIGNED PAID EXPIRED }
enum DepositType { FIXED PERCENTAGE }
```

### Zod v4 Notes

This project uses Zod **v4** (`^4.3.6`). Key differences from v3:
- Error access: `err.issues[0]?.message` (NOT `err.errors`)
- `ZodError` import: `import { ZodError } from "zod"`
- Optional nullable: `z.string().optional().nullable()` or `z.string().nullish()`
- `z.enum(["A","B"])` syntax unchanged

### Next.js 16 Breaking Changes

**Route `params` is a Promise** — always await before destructuring:
```typescript
// CORRECT:
export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  ...
}

// WRONG — TypeScript error in Next.js 16:
export async function GET(req, { params }: { params: { id: string } }) {
  const { id } = params; // BAD
}
```

### API Route Pattern (Match Existing Code Style)

Follow the pattern from `src/app/api/profile/route.ts` and `src/app/api/templates/route.ts`:

```typescript
// src/app/api/quotes/route.ts
import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { createQuoteSchema } from "@/lib/validations/quote";
import { generateQuoteNumber } from "@/lib/utils";
import { ZodError } from "zod";

export async function POST(request: NextRequest) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const data = createQuoteSchema.parse(body);
    const quoteNumber = generateQuoteNumber();

    const quote = await prisma.quote.create({
      data: {
        trade: data.trade,
        quoteNumber,
        userId: session.user.id,
        customerName: "",
      },
    });

    return NextResponse.json({ data: quote }, { status: 201 });
  } catch (err) {
    if (err instanceof ZodError) {
      return NextResponse.json(
        { error: err.issues[0]?.message ?? "Validation failed" },
        { status: 400 }
      );
    }
    console.error("Create quote error:", err);
    return NextResponse.json(
      { error: "Failed to create quote." },
      { status: 500 }
    );
  }
}
```

### PUT /api/quotes/[id] — Line Item Replacement Strategy

Use a Prisma transaction to atomically replace all line items:

```typescript
// src/app/api/quotes/[id]/route.ts (PUT handler)
const quote = await prisma.quote.findFirst({
  where: { id, userId: session.user.id },
});
if (!quote) {
  return NextResponse.json({ error: "Quote not found" }, { status: 404 });
}

const [updatedQuote] = await prisma.$transaction([
  prisma.lineItem.deleteMany({ where: { quoteId: id } }),
  prisma.quote.update({
    where: { id },
    data: {
      customerName: data.customerName,
      customerAddress: data.customerAddress ?? null,
      customerPhone: data.customerPhone ?? null,
      customerEmail: data.customerEmail ?? null,
      notes: data.notes ?? null,
      taxRate: data.taxRate,
      depositType: data.depositType ?? null,
      depositValue: data.depositValue ?? null,
      termsText: data.termsText ?? null,
    },
    include: { lineItems: { orderBy: { sortOrder: "asc" } } },
  }),
  ...data.lineItems.map((item, i) =>
    prisma.lineItem.create({
      data: {
        quoteId: id,
        description: item.description,
        quantity: item.quantity,
        unit: item.unit,
        unitPrice: item.unitPrice,
        isCustom: item.isCustom,
        sortOrder: i,
      },
    })
  ),
]);

return NextResponse.json({ data: updatedQuote });
```

**Note:** `prisma.$transaction` returns an array matching the order of operations. The `quote.update` is at index 1 (after `lineItem.deleteMany`). The `include` on `quote.update` will not include the newly created line items because they are created in the same transaction after the update. Re-fetch if needed, or return the quote then fetch line items separately. Simpler: after the transaction, do a separate `findFirst` with `include` to return the complete quote.

Actually, the simplest approach: run the transaction without include, then re-fetch:

```typescript
await prisma.$transaction([
  prisma.lineItem.deleteMany({ where: { quoteId: id } }),
  prisma.quote.update({ where: { id }, data: { ...fields } }),
  ...lineItemCreates,
]);

const fullQuote = await prisma.quote.findFirst({
  where: { id, userId: session.user.id },
  include: { lineItems: { orderBy: { sortOrder: "asc" } } },
});
return NextResponse.json({ data: fullQuote });
```

### QuoteBuilder Component Architecture

```
/quotes/new/page.tsx (client)
  └── <TradeSelector onSelect={handleTradeSelect} />
      └── on select: POST /api/quotes → router.push('/quotes/' + id)

/quotes/[id]/page.tsx (server component)
  └── await auth(), await params, prisma.quote.findFirst(...)
  └── <QuoteBuilder quoteId={id} initialQuote={quote} />
      ├── Quote header (quote number, trade) — read-only
      ├── <CustomerInfo value={...} onChange={...} />
      ├── Line items list
      │   ├── {lineItems.map(item => <LineItemRow key={...} />)}
      │   ├── "+ Custom Item" button
      │   └── <LineItemPicker trade={trade} onAddItem={handleAddFromLibrary} />
      ├── Job notes textarea
      ├── Tax rate input
      ├── <DepositConfig depositType={...} depositValue={...} total={...} onChange={...} />
      ├── <QuoteSummary lineItems={...} taxRate={...} depositType={...} depositValue={...} />
      └── <Button isLoading={isSaving} onClick={handleSave}>Save Quote</Button>
```

### LineItemPicker Integration

`LineItemPicker` is already in `src/components/quotes/line-item-picker.tsx`. The `onAddItem` callback receives a `TemplateItemData` object. Convert it to a line item:

```typescript
function handleAddFromLibrary(templateItem: TemplateItemData) {
  setLineItems(prev => [
    ...prev,
    {
      description: templateItem.description,
      quantity: 1,
      unit: templateItem.unit,
      unitPrice: templateItem.suggestedPrice ?? 0,
      isCustom: false,
    },
  ]);
}
```

### SWR Hook for Quotes

```typescript
// src/hooks/use-quotes.ts
import useSWR from "swr";
import { fetcher } from "@/lib/fetcher";

export function useQuote(id: string | null | undefined) {
  return useSWR(id ? `/api/quotes/${id}` : null, fetcher);
}

export function useQuotes() {
  return useSWR("/api/quotes", fetcher);
}
```

### Vitest Testing Pattern

Tests use **Vitest** with `"node"` environment. Mock `auth` and `prisma`:

```typescript
// src/app/api/quotes/route.test.ts
import { describe, it, expect, vi, beforeEach } from "vitest";

vi.mock("@/lib/auth", () => ({ auth: vi.fn() }));
vi.mock("@/lib/db", () => ({
  prisma: {
    quote: {
      create: vi.fn(),
      findFirst: vi.fn(),
      update: vi.fn(),
    },
    lineItem: { deleteMany: vi.fn() },
    $transaction: vi.fn(),
  },
}));
vi.mock("@/lib/utils", async (importOriginal) => {
  const actual = await importOriginal<typeof import("@/lib/utils")>();
  return {
    ...actual,
    generateQuoteNumber: vi.fn(() => "QT-2605-0001"),
  };
});

import { POST } from "./route";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";

describe("POST /api/quotes", () => {
  beforeEach(() => vi.clearAllMocks());

  it("returns 401 when unauthenticated", async () => {
    vi.mocked(auth).mockResolvedValue(null);
    const req = new Request("http://localhost/api/quotes", {
      method: "POST",
      body: JSON.stringify({ trade: "PLUMBING" }),
    });
    const res = await POST(req as any);
    expect(res.status).toBe(401);
  });

  it("returns 400 for invalid trade", async () => {
    vi.mocked(auth).mockResolvedValue({ user: { id: "user-1" } } as any);
    const req = new Request("http://localhost/api/quotes", {
      method: "POST",
      body: JSON.stringify({ trade: "CARPENTRY" }),
    });
    const res = await POST(req as any);
    expect(res.status).toBe(400);
  });

  it("creates quote and returns 201", async () => {
    vi.mocked(auth).mockResolvedValue({ user: { id: "user-1" } } as any);
    vi.mocked(prisma.quote.create).mockResolvedValue({
      id: "q-1",
      quoteNumber: "QT-2605-0001",
      trade: "PLUMBING",
      status: "DRAFT",
    } as any);
    const req = new Request("http://localhost/api/quotes", {
      method: "POST",
      body: JSON.stringify({ trade: "PLUMBING" }),
    });
    const res = await POST(req as any);
    expect(res.status).toBe(201);
    const body = await res.json();
    expect(body.data.quoteNumber).toBe("QT-2605-0001");
  });
});
```

### Anti-Patterns to Avoid

- **Never** use `params` without `await` in Next.js 16 route handlers
- **Never** call `calculateTotal` from within `QuoteSummary` by passing it the wrong type — it needs `Array<{ quantity: number; unitPrice: number }>`
- **Never** skip the `userId` scope on any Prisma query that touches user data
- **Never** expose another user's quote — always use `findFirst({ where: { id, userId } })` (returns null instead of throwing)
- **Never** use `prisma.quote.findUnique` for user-scoped queries — use `findFirst` with `userId` to prevent information disclosure
- **Never** use raw `fetch` for GET requests in client components — use SWR hooks
- **Never** store photos in the database (photos are Epic 3 scope — do not add photo logic here)
- **Never** allow editing of `quoteNumber`, `trade`, `status`, `viewToken`, or `userId` via the PUT route
- **Never** forget to handle the case where `initialQuote.lineItems` might be empty (render empty state with "+ Custom Item" prompt)

### Files to Create in This Story

**New files:**
- `src/lib/validations/quote.ts` — Zod schemas for quote create/update
- `src/app/api/quotes/route.ts` — POST (create quote)
- `src/app/api/quotes/[id]/route.ts` — GET (fetch quote) + PUT (update quote)
- `src/hooks/use-quotes.ts` — SWR hooks for quote data
- `src/components/quotes/trade-selector.tsx` — Trade selection UI for new quotes
- `src/components/quotes/customer-info.tsx` — Customer details form section
- `src/components/quotes/line-item-row.tsx` — Single editable line item row
- `src/components/quotes/deposit-config.tsx` — Deposit type and amount configuration
- `src/components/quotes/quote-summary.tsx` — Real-time subtotal/tax/total display
- `src/components/quotes/quote-builder.tsx` — Main quote editing orchestrator
- `src/app/quotes/new/page.tsx` — New quote page (trade selector)
- `src/app/quotes/[id]/page.tsx` — Edit quote page (server component shell)
- `src/app/api/quotes/route.test.ts` — Tests for POST /api/quotes
- `src/app/api/quotes/[id]/route.test.ts` — Tests for GET and PUT /api/quotes/[id]

**No files modified** (no changes to existing files should be needed, but verify `src/app/quotes/` directory exists — create it if not)

### Project Structure Notes

- `src/components/quotes/` directory already exists from Story 2.1 (contains `line-item-picker.tsx`)
- `src/hooks/` directory already exists (contains `use-templates.ts`)
- `src/lib/validations/` already exists (contains `auth.ts`, `profile.ts`, `common.ts`)
- `src/app/api/quotes/` directory does NOT yet exist — create it
- `src/app/quotes/` directory does NOT yet exist — create it
- The `GET /api/quotes` (list) endpoint is referenced in `useQuotes()` but implementation of the full dashboard list is Story 5. For this story, a minimal stub returning `{ data: [] }` is fine for `useQuotes()`, or skip implementing `GET /api/quotes` route entirely until Story 5.

### References

- [Source: planning/epics.md#Epic 2 — Story 2.2: Quote Builder — Create & Edit Quotes]
- [Source: planning/architecture.md#Data Architecture — Data Model (Quote, LineItem models)]
- [Source: planning/architecture.md#API & Communication Patterns — Core API Endpoints (/api/quotes)]
- [Source: planning/architecture.md#Frontend Architecture — Component Architecture (quotes/)]
- [Source: planning/architecture.md#Implementation Patterns — Form Handling (auto-save, React Hook Form, Zod)]
- [Source: planning/architecture.md#Implementation Patterns — Anti-Patterns (no raw SQL, no raw fetch for GET)]
- [Source: stories/2-1-trade-template-and-line-item-library.md — LineItemPicker component, TemplateItemData type, Vitest pattern, Zod v4 notes, Next.js 16 params Promise]

## Dev Agent Record

### Agent Model Used

{{agent_model_name_version}}

### Debug Log References

### Completion Notes List

### File List
