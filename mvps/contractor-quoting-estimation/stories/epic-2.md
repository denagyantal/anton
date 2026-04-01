# Epic 2: Quote Creation with Trade Templates

Status: ready-for-dev

## Story

As a contractor,
I want to create professional trade-specific quotes using pre-built line item libraries, add custom items, enter customer details, and manage my quotes,
so that I can build a complete, accurate quote in under 60 seconds without typing everything from scratch.

## Scope

This epic covers 3 stories that must be implemented in order:
- **2.1** Trade Template & Line Item Library
- **2.2** Quote Builder — Create & Edit Quotes
- **2.3** Quote Management — Duplicate, Delete & Search

**FRs covered:** FR1, FR2, FR3, FR4, FR5, FR6, FR7, FR8, FR9, FR10, FR11, FR12, FR13, FR14, FR15, FR16

---

## Story 2.1: Trade Template & Line Item Library

### Acceptance Criteria

1. **Given** the system database is seeded
   **When** `prisma db seed` is run
   **Then** trade-specific template libraries exist for PLUMBING, ELECTRICAL, HVAC, and PAINTING
   **And** each trade has at least 15 categorized line items with descriptions, suggested prices, and appropriate units

2. **Given** I am creating a new quote and have selected a trade
   **When** I open the line item picker
   **Then** I see the line item library for that trade organized by category
   **And** each item shows its description, suggested price, and unit of measurement

3. **Given** I am browsing the line item library
   **When** I type a search term (e.g., "water heater")
   **Then** the library filters in real-time to show only matching items

4. **Given** I see a line item in the library
   **When** I tap it
   **Then** it is added to my quote with the suggested price pre-filled
   **And** I can immediately override the price, quantity, or unit

5. **Given** I call `GET /api/templates?trade=PLUMBING`
   **When** the request is authenticated
   **Then** the response includes Template records for that trade with their TemplateItem arrays

6. **Given** I call `GET /api/templates/[id]/items`
   **When** the request is authenticated
   **Then** the response includes all TemplateItems for that template sorted by `sortOrder`

### Tasks

- [ ] 2.1.1 Create Prisma seed file with trade templates (AC: #1)
  - [ ] Create `prisma/seed.ts` with seed function
  - [ ] Add seed script to `package.json`: `"seed": "npx ts-node prisma/seed.ts"` (or `prisma db seed`)
  - [ ] Configure `prisma/schema.prisma` seed: `{ "prisma": { "seed": "ts-node prisma/seed.ts" } }` in package.json
  - [ ] Seed PLUMBING template with 15+ items across categories: Diagnostics, Water Heaters, Fixtures, Drain/Sewer, Pipes & Fittings
  - [ ] Seed ELECTRICAL template with 15+ items across categories: Diagnostics, Outlets & Switches, Lighting, Panels & Circuits, Specialty
  - [ ] Seed HVAC template with 15+ items across categories: Diagnostics, Maintenance, Equipment, Ductwork, Repairs
  - [ ] Seed PAINTING template with 15+ items across categories: Interior, Exterior, Prep Work, Specialty, Materials
  - [ ] Use `upsert` (not `create`) to make seed idempotent

- [ ] 2.1.2 Create templates API routes (AC: #5, #6)
  - [ ] `src/app/api/templates/route.ts` — GET: requires auth, accepts `?trade=TRADE_ENUM`, returns templates with items
  - [ ] `src/app/api/templates/[id]/items/route.ts` — GET: requires auth, returns TemplateItems sorted by sortOrder

- [ ] 2.1.3 Create Zod schema for templates (AC: #5, #6)
  - [ ] `src/lib/validations/quote.ts` — add `templateQuerySchema` with trade enum validation

- [ ] 2.1.4 Create `use-templates` SWR hook (AC: #2)
  - [ ] `src/hooks/use-templates.ts` — `useTemplates(trade: Trade)` calls `/api/templates?trade=TRADE`
  - [ ] Returns `{ templates, items, isLoading, error }`

- [ ] 2.1.5 Create `LineItemPicker` component (AC: #2, #3, #4)
  - [ ] `src/components/quotes/line-item-picker.tsx` — modal/bottom sheet listing items by category
  - [ ] Real-time search filtering by description/category
  - [ ] Tap item → calls `onAdd(item)` callback with description, suggestedPrice, unit
  - [ ] Mobile-friendly: bottom sheet on mobile, modal on desktop

---

## Story 2.2: Quote Builder — Create & Edit Quotes

### Acceptance Criteria

1. **Given** I am on `/quotes/new`
   **When** I select a trade template
   **Then** a new quote is initialized in the database (DRAFT status) with that trade and a unique quote number generated
   **And** the quote number follows the `QT-YYMM-XXXX` format from `generateQuoteNumber()`

2. **Given** I am building a quote
   **When** I add line items from the library or create custom line items with description, quantity, unit, and unit price
   **Then** each line item appears in the quote with its details editable inline
   **And** I can reorder, edit, or remove any line item

3. **Given** I have line items in my quote
   **When** I change any quantity or unit price
   **Then** the subtotal, tax, and total recalculate automatically in real-time using `calculateTotal()`

4. **Given** I am building a quote
   **When** I enter customer information (name, address, phone, email)
   **Then** the customer details are saved with the quote

5. **Given** I am building a quote
   **When** I add a free-text job notes/scope description
   **Then** the notes are saved and will appear in the generated PDF

6. **Given** I am building a quote
   **When** I set the tax rate (defaulting to my profile's `defaultTaxRate`)
   **Then** the tax calculation updates immediately

7. **Given** I am building a quote
   **When** I configure a deposit amount as either a fixed dollar value or a percentage of the total
   **Then** the `depositType` (FIXED or PERCENTAGE) and `depositValue` are saved with the quote
   **And** the calculated deposit amount is displayed

8. **Given** I have made changes to a quote
   **When** I navigate away or tap "Save"
   **Then** the quote is saved as DRAFT and I can return to edit it later

9. **Given** I call `POST /api/quotes` with valid data
   **When** the request is authenticated
   **Then** a Quote record is created with the session user's `userId`, status DRAFT, and all provided fields
   **And** LineItem records are created for each item in the request body

10. **Given** I call `PUT /api/quotes/[id]`
    **When** the request is authenticated and the quote belongs to the session user
    **Then** the quote and its line items are updated atomically
    **And** if the quote does not belong to the user, a 403 response is returned

11. **Given** I call `GET /api/quotes/[id]`
    **When** the request is authenticated
    **Then** the response includes the quote with nested `lineItems` array

### Tasks

- [ ] 2.2.1 Create Zod validation schemas for quotes (AC: #1, #9, #10)
  - [ ] `src/lib/validations/quote.ts`:
    - `createQuoteSchema` — trade (Trade enum), customerName (required), optional customer fields, taxRate, notes, depositType, depositValue, termsText
    - `updateQuoteSchema` — same fields all optional (partial)
    - `lineItemSchema` — description, quantity (positive), unit, unitPrice (non-negative), sortOrder, isCustom
    - `createQuoteWithItemsSchema` — quote + lineItems array

- [ ] 2.2.2 Create quotes API routes (AC: #9, #10, #11)
  - [ ] `src/app/api/quotes/route.ts` — GET (list, with search/filter params), POST (create with line items in transaction)
  - [ ] `src/app/api/quotes/[id]/route.ts` — GET (single with lineItems), PUT (update, verify ownership), DELETE (draft only, verify ownership)
  - [ ] All routes: validate session via `auth()`, scope queries to `session.user.id`
  - [ ] PUT: use Prisma transaction to delete+recreate line items atomically
  - [ ] DELETE: check `status === 'DRAFT'` before allowing deletion

- [ ] 2.2.3 Create `use-quotes` SWR hook (AC: #11)
  - [ ] `src/hooks/use-quotes.ts`:
    - `useQuotes(filters?)` — GET list with optional search/trade/dateRange params
    - `useQuote(id)` — GET single quote with line items
    - Exports mutation helpers: `createQuote`, `updateQuote`, `deleteQuote`

- [ ] 2.2.4 Create `TradeSelector` component (AC: #1)
  - [ ] `src/components/quotes/trade-selector.tsx` — grid of 4 trade cards with icons
  - [ ] Shows trade name, icon (can use SVG or emoji), highlights selected
  - [ ] 44x44px minimum touch targets (NFR20)

- [ ] 2.2.5 Create `LineItemRow` component (AC: #2, #3)
  - [ ] `src/components/quotes/line-item-row.tsx` — single editable row
  - [ ] Fields: description (text), quantity (number), unit (select), unitPrice (number)
  - [ ] Shows line total = quantity × unitPrice (formatted with `formatCurrency`)
  - [ ] Remove button with confirmation
  - [ ] Calls `onChange(updatedItem)` and `onRemove()` callbacks
  - [ ] Accessible: all inputs have labels; 44x44px touch targets

- [ ] 2.2.6 Create `QuoteSummary` component (AC: #3, #7)
  - [ ] `src/components/quotes/quote-summary.tsx` — displays subtotal, tax, total, and deposit
  - [ ] Uses `calculateTotal()` from `src/lib/utils.ts` — do NOT re-implement
  - [ ] Shows deposit as "Deposit: $X.XX" or "Deposit: X% ($Y.YY)" based on depositType

- [ ] 2.2.7 Create `DepositConfig` component (AC: #7)
  - [ ] `src/components/quotes/deposit-config.tsx` — toggle between FIXED / PERCENTAGE
  - [ ] Input for deposit value, live calculation of deposit amount

- [ ] 2.2.8 Create `CustomerInfo` component (AC: #4, #5)
  - [ ] `src/components/quotes/customer-info.tsx` — form section for customer fields
  - [ ] Fields: customerName (required), customerAddress, customerPhone, customerEmail
  - [ ] Notes textarea for job scope description

- [ ] 2.2.9 Create `QuoteBuilder` main component (AC: #1-#8)
  - [ ] `src/components/quotes/quote-builder.tsx` — orchestrates all sub-components
  - [ ] React Hook Form with `createQuoteWithItemsSchema` Zod resolver
  - [ ] Auto-populates taxRate from profile `defaultTaxRate` on mount
  - [ ] "Add from Library" button → opens LineItemPicker
  - [ ] "Add Custom Item" button → adds empty LineItemRow
  - [ ] Line items managed as array field in React Hook Form (useFieldArray)
  - [ ] Debounced auto-save every 10 seconds for DRAFT quotes
  - [ ] "Save Draft" button and "Save & Continue" button

- [ ] 2.2.10 Create quote pages (AC: #1, #8)
  - [ ] `src/app/quotes/new/page.tsx` — auth-protected, renders QuoteBuilder in create mode
  - [ ] `src/app/quotes/[id]/page.tsx` — auth-protected, loads quote via `useQuote(id)`, renders QuoteBuilder in edit mode
  - [ ] Dashboard placeholder (`src/app/dashboard/page.tsx`) — upgrade to show "Create New Quote" CTA + link to new quote

---

## Story 2.3: Quote Management — Duplicate, Delete & Search

### Acceptance Criteria

1. **Given** I have an existing quote (any status)
   **When** I tap "Duplicate"
   **Then** a new DRAFT quote is created with the same trade, line items (with quantities and prices), taxRate, depositType, depositValue, and notes
   **And** customerName, customerAddress, customerPhone, customerEmail, and photos are NOT copied
   **And** a new unique quote number is generated

2. **Given** I have a DRAFT quote
   **When** I tap "Delete" and confirm
   **Then** the draft quote and all its line items are permanently removed from my account

3. **Given** I have a quote that is NOT in DRAFT status (SENT, VIEWED, SIGNED, PAID, EXPIRED)
   **When** I view the quote detail
   **Then** there is no delete option visible

4. **Given** I am on the quote dashboard
   **When** I type a customer name in the search field
   **Then** quotes filter to show only those matching the customer name (case-insensitive)

5. **Given** I am on the dashboard
   **When** I select a trade filter
   **Then** only quotes for that trade are shown

6. **Given** I am on the dashboard
   **When** I select a date range filter
   **Then** only quotes created within that range are shown

7. **Given** I am on the dashboard
   **When** I view the quote list
   **Then** all my quotes are shown with: quote number, customer name, trade, total amount, status badge, and date
   **And** quotes are sorted by most recently updated first
   **And** the list handles up to 500 quotes (virtual scrolling via `@tanstack/react-virtual` for 100+ items)

8. **Given** I call `POST /api/quotes/[id]/duplicate`
   **When** the request is authenticated and the quote belongs to the session user
   **Then** a new DRAFT quote is created with line items copied but customer fields cleared

9. **Given** I call `DELETE /api/quotes/[id]`
   **When** the quote is DRAFT and belongs to the session user
   **Then** the quote and line items are permanently deleted (cascade)

10. **Given** I call `DELETE /api/quotes/[id]`
    **When** the quote is NOT in DRAFT status
    **Then** a 409 response is returned with code "QUOTE_NOT_DELETABLE"

### Tasks

- [ ] 2.3.1 Create duplicate API route (AC: #1, #8)
  - [ ] `src/app/api/quotes/[id]/duplicate/route.ts` — POST
  - [ ] Verify quote ownership, copy trade/lineItems/taxRate/depositType/depositValue/notes/termsText
  - [ ] Do NOT copy: customerName, customerPhone, customerEmail, customerAddress, pdfUrl, viewToken (auto-generated)
  - [ ] Generate new quoteNumber via `generateQuoteNumber()`
  - [ ] Return 201 with new quote

- [ ] 2.3.2 Enhance DELETE on quotes API to validate status (AC: #9, #10)
  - [ ] In `src/app/api/quotes/[id]/route.ts` DELETE handler: check `quote.status === 'DRAFT'`
  - [ ] If not DRAFT: return 409 `{ error: { code: "QUOTE_NOT_DELETABLE", message: "Only draft quotes can be deleted" } }`
  - [ ] If DRAFT: delete (cascade handled by Prisma schema `onDelete: Cascade`)

- [ ] 2.3.3 Add filter/search support to quotes GET API (AC: #4, #5, #6)
  - [ ] `GET /api/quotes` accepts query params: `search` (customer name), `trade` (Trade enum), `from` (ISO date), `to` (ISO date)
  - [ ] Use Prisma `where` with `contains` + `mode: 'insensitive'` for search
  - [ ] Return quotes sorted by `updatedAt DESC`

- [ ] 2.3.4 Create dashboard page with quote list (AC: #4, #5, #6, #7)
  - [ ] `src/app/dashboard/page.tsx` — full implementation (replace placeholder)
  - [ ] "Create New Quote" button → `/quotes/new`
  - [ ] Renders `QuoteList`, `QuoteFilters` components

- [ ] 2.3.5 Create `StatusBadge` component (AC: #7)
  - [ ] `src/components/dashboard/status-badge.tsx` — colored pill badge
  - [ ] Colors: DRAFT=gray, SENT=blue, VIEWED=yellow, SIGNED=green, PAID=bold green, EXPIRED=red
  - [ ] Accessible: meaningful text, not just color

- [ ] 2.3.6 Create `QuoteCard` component (AC: #7)
  - [ ] `src/components/dashboard/quote-card.tsx`
  - [ ] Shows: quote number, customer name, trade, total (via `formatCurrency`), StatusBadge, date
  - [ ] Tap → navigates to `/quotes/[id]`
  - [ ] Shows "Duplicate" action; shows "Delete" action only for DRAFT status
  - [ ] 44x44px minimum touch targets

- [ ] 2.3.7 Create `QuoteFilters` component (AC: #4, #5, #6)
  - [ ] `src/components/dashboard/quote-filters.tsx`
  - [ ] Search input (debounced 300ms)
  - [ ] Trade filter dropdown (All, Plumbing, Electrical, HVAC, Painting)
  - [ ] Date range picker (from/to date inputs)
  - [ ] Calls `onFilterChange(filters)` callback

- [ ] 2.3.8 Create `QuoteList` component with virtual scrolling (AC: #7)
  - [ ] `src/components/dashboard/quote-list.tsx`
  - [ ] Install `@tanstack/react-virtual` if not already in package.json
  - [ ] Use `useVirtualizer` for lists > 100 items; plain list for ≤ 100 items
  - [ ] Uses `useQuotes(filters)` hook with SWR
  - [ ] Shows skeleton loader while loading

- [ ] 2.3.9 Write unit tests for core logic (all ACs)
  - [ ] `src/app/api/quotes/route.test.ts` — test create, list, search/filter
  - [ ] `src/app/api/quotes/[id]/route.test.ts` — test get, update, delete (draft vs non-draft)
  - [ ] `src/app/api/quotes/[id]/duplicate/route.test.ts` — test duplication logic
  - [ ] `src/lib/validations/quote.test.ts` — test Zod schema validation

---

## Dev Notes

### CRITICAL: Breaking Changes from Epic 1

These are confirmed breaking changes discovered during Epic 1 implementation. Do NOT ignore:

1. **Next.js 16**: `middleware.ts` is renamed to `proxy.ts`, export is `proxy` not `middleware`. Route protection already configured at `src/proxy.ts`.

2. **Prisma 7**: Database URL is NOT in `schema.prisma`. It uses `prisma.config.ts` at the project root with the `PrismaPg` adapter. The db.ts pattern is already established — never change it.

3. **Zod v4**: `ZodError.errors` is renamed to `ZodError.issues`. Always use `.issues` not `.errors`.

4. **Zod v4**: `.pick()` cannot be used on schemas with `.refine()`. Create standalone schemas for different API inputs rather than deriving them.

5. **Resend**: Client throws at instantiation if no API key. Use the lazy initialization pattern from `src/lib/resend.ts`.

6. **Read `node_modules/next/dist/docs/` before writing any Next.js code** (per AGENTS.md in src/).

### Architecture Compliance

- **Framework:** Next.js App Router with TypeScript, Tailwind CSS, `@/*` import alias
- **Database:** All models already exist in `prisma/schema.prisma` — NO schema changes needed for Epic 2
- **Auth:** Use `auth()` from `@/lib/auth` in server components/API routes to get session
- **API pattern:** All handlers must validate session via `auth()`, scope all DB queries to `session.user.id`
- **Data fetching:** SWR hooks for all GET requests; raw `fetch` only for mutations
- **Forms:** React Hook Form + Zod resolvers (same pattern as login-form, register-form, profile-form)
- **File storage:** R2 client already in `src/lib/r2.ts` — use for any future uploads
- **Utilities:** `calculateTotal()` and `generateQuoteNumber()` already exist in `src/lib/utils.ts` — use them, do NOT reimplement

### File Path Convention

The Next.js app lives at `mvps/contractor-quoting-estimation/src/`. Source files are at `src/src/` from the repo root. When specifying file paths in this document, use the path relative to the Next.js project root (i.e., `src/app/api/...` means the file on disk is at `mvps/contractor-quoting-estimation/src/src/app/api/...`).

### Prisma Schema (All Models Already Exist — No Migration Needed)

```prisma
model Quote {
  id              String      @id @default(cuid())
  userId          String
  user            User        @relation(fields: [userId], references: [id], onDelete: Cascade)
  status          QuoteStatus @default(DRAFT)
  quoteNumber     String      @unique
  trade           Trade
  customerName    String
  customerAddress String?
  customerPhone   String?
  customerEmail   String?
  notes           String?
  taxRate         Float       @default(0)
  depositType     DepositType?
  depositValue    Float?
  termsText       String?
  viewToken       String      @unique @default(cuid())
  viewedAt        DateTime?
  signedAt        DateTime?
  signatureData   String?
  signerIp        String?
  paidAt          DateTime?
  expiresAt       DateTime?
  stripePaymentIntentId String?
  depositAmountPaid     Float?
  pdfUrl          String?
  createdAt       DateTime    @default(now())
  updatedAt       DateTime    @updatedAt
  sentAt          DateTime?
  lineItems       LineItem[]
  photos          QuotePhoto[]
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

model Template {
  id          String         @id @default(cuid())
  trade       Trade
  name        String
  description String?
  isSystem    Boolean        @default(true)
  userId      String?
  user        User?          @relation(fields: [userId], references: [id], onDelete: Cascade)
  items       TemplateItem[]
}

model TemplateItem {
  id              String   @id @default(cuid())
  templateId      String
  template        Template @relation(fields: [templateId], references: [id], onDelete: Cascade)
  description     String
  suggestedPrice  Float?
  unit            String   @default("each")
  category        String?
  sortOrder       Int      @default(0)
}

enum Trade { PLUMBING | ELECTRICAL | HVAC | PAINTING }
enum QuoteStatus { DRAFT | SENT | VIEWED | SIGNED | PAID | EXPIRED }
enum DepositType { FIXED | PERCENTAGE }
```

### Seed Data Structure

The seed must produce templates usable by the line item picker. Use `upsert` on `name+trade` composite to be idempotent.

**Example seed structure (TypeScript):**
```typescript
// prisma/seed.ts
import { PrismaClient, Trade } from '@prisma/client'

const prisma = new PrismaClient()

const templates = [
  {
    trade: Trade.PLUMBING,
    name: 'Plumbing Services',
    items: [
      { description: 'Service Call / Diagnostic', suggestedPrice: 150, unit: 'flat rate', category: 'Diagnostics', sortOrder: 0 },
      { description: 'Water Heater Installation', suggestedPrice: 450, unit: 'per unit', category: 'Water Heaters', sortOrder: 10 },
      { description: 'Water Heater Replacement', suggestedPrice: 550, unit: 'per unit', category: 'Water Heaters', sortOrder: 11 },
      { description: 'Faucet Installation', suggestedPrice: 175, unit: 'per unit', category: 'Fixtures', sortOrder: 20 },
      { description: 'Toilet Installation', suggestedPrice: 250, unit: 'per unit', category: 'Fixtures', sortOrder: 21 },
      { description: 'Garbage Disposal Installation', suggestedPrice: 225, unit: 'per unit', category: 'Fixtures', sortOrder: 22 },
      { description: 'Drain Cleaning', suggestedPrice: 125, unit: 'per unit', category: 'Drain & Sewer', sortOrder: 30 },
      { description: 'Camera Inspection', suggestedPrice: 275, unit: 'per unit', category: 'Drain & Sewer', sortOrder: 31 },
      { description: 'Sump Pump Installation', suggestedPrice: 550, unit: 'per unit', category: 'Drain & Sewer', sortOrder: 32 },
      { description: 'Pipe Repair', suggestedPrice: 95, unit: 'per unit', category: 'Pipes & Fittings', sortOrder: 40 },
      { description: 'Pipe Installation', suggestedPrice: 12, unit: 'per linear foot', category: 'Pipes & Fittings', sortOrder: 41 },
      { description: 'Water Line Installation', suggestedPrice: 15, unit: 'per linear foot', category: 'Pipes & Fittings', sortOrder: 42 },
      { description: 'Shut-Off Valve Replacement', suggestedPrice: 85, unit: 'per unit', category: 'Pipes & Fittings', sortOrder: 43 },
      { description: 'Water Softener Installation', suggestedPrice: 650, unit: 'per unit', category: 'Water Treatment', sortOrder: 50 },
      { description: 'Backflow Preventer Installation', suggestedPrice: 350, unit: 'per unit', category: 'Water Treatment', sortOrder: 51 },
    ]
  },
  // Similar structure for ELECTRICAL, HVAC, PAINTING...
]

async function main() {
  for (const t of templates) {
    const template = await prisma.template.upsert({
      where: { id: `system-${t.trade.toLowerCase()}` },
      update: { name: t.name },
      create: { id: `system-${t.trade.toLowerCase()}`, trade: t.trade, name: t.name, isSystem: true },
    })
    for (const item of t.items) {
      await prisma.templateItem.upsert({
        where: { id: `system-${t.trade.toLowerCase()}-${item.sortOrder}` },
        update: item,
        create: { id: `system-${t.trade.toLowerCase()}-${item.sortOrder}`, templateId: template.id, ...item },
      })
    }
  }
}

main().then(() => prisma.$disconnect()).catch(e => { console.error(e); prisma.$disconnect(); process.exit(1) })
```

> **Note:** The `upsert` with deterministic IDs makes seed idempotent. Always seed all 4 trades (PLUMBING, ELECTRICAL, HVAC, PAINTING) with 15+ items each. At minimum 4 categories per trade.

### API Route Pattern (Mandatory — Same as Epic 1)

```typescript
// src/app/api/quotes/route.ts
import { NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/db'
import { createQuoteWithItemsSchema } from '@/lib/validations/quote'
import { z } from 'zod'

export async function POST(request: Request) {
  try {
    const session = await auth()
    if (!session?.user?.id) {
      return NextResponse.json(
        { error: { code: 'UNAUTHORIZED', message: 'Authentication required' } },
        { status: 401 }
      )
    }

    const body = await request.json()
    const validated = createQuoteWithItemsSchema.parse(body)

    const quote = await prisma.quote.create({
      data: {
        ...validated.quote,
        userId: session.user.id,
        quoteNumber: generateQuoteNumber(),
        lineItems: { create: validated.lineItems }
      },
      include: { lineItems: true }
    })

    return NextResponse.json({ data: quote }, { status: 201 })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: { code: 'VALIDATION_ERROR', message: 'Invalid input', details: error.issues } },
        { status: 400 }
      )
    }
    console.error('Failed to create quote:', error)
    return NextResponse.json(
      { error: { code: 'INTERNAL_ERROR', message: 'Failed to create quote' } },
      { status: 500 }
    )
  }
}
```

**Key points:**
- Use `error.issues` not `error.errors` (Zod v4)
- Always call `auth()` not `getServerSession()` (NextAuth v5)
- Always scope DB queries to `session.user.id`

### SWR Hook Pattern (Mandatory)

```typescript
// src/hooks/use-quotes.ts
import useSWR from 'swr'
import { fetcher } from '@/lib/fetcher'

export function useQuotes(filters?: { search?: string; trade?: string }) {
  const params = new URLSearchParams()
  if (filters?.search) params.set('search', filters.search)
  if (filters?.trade) params.set('trade', filters.trade)
  const query = params.toString() ? `?${params}` : ''
  return useSWR(`/api/quotes${query}`, fetcher)
}

export function useQuote(id: string | null) {
  return useSWR(id ? `/api/quotes/${id}` : null, fetcher)
}
```

### React Hook Form + useFieldArray for Line Items

```typescript
// In QuoteBuilder component
import { useForm, useFieldArray } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const { control, register, watch, setValue, handleSubmit } = useForm({
  resolver: zodResolver(createQuoteWithItemsSchema),
  defaultValues: { quote: { taxRate: profile?.defaultTaxRate ?? 0 }, lineItems: [] }
})

const { fields, append, remove, update } = useFieldArray({
  control,
  name: 'lineItems'
})

// Adding from library picker:
const handleAddFromLibrary = (templateItem: TemplateItem) => {
  append({
    description: templateItem.description,
    unitPrice: templateItem.suggestedPrice ?? 0,
    unit: templateItem.unit,
    quantity: 1,
    sortOrder: fields.length,
    isCustom: false
  })
}

// Adding custom item:
const handleAddCustom = () => {
  append({ description: '', unitPrice: 0, unit: 'per unit', quantity: 1, sortOrder: fields.length, isCustom: true })
}
```

### Auto-Save Pattern

```typescript
// Debounced auto-save in QuoteBuilder (for edit mode only)
import { useEffect, useRef } from 'react'

const autoSaveTimer = useRef<NodeJS.Timeout>()
const formValues = watch()

useEffect(() => {
  if (!quoteId) return // Only auto-save in edit mode
  clearTimeout(autoSaveTimer.current)
  autoSaveTimer.current = setTimeout(async () => {
    await fetch(`/api/quotes/${quoteId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formValues)
    })
  }, 10000) // 10 second debounce
  return () => clearTimeout(autoSaveTimer.current)
}, [formValues, quoteId])
```

### Virtual Scrolling for Quote List

```typescript
// src/components/dashboard/quote-list.tsx
import { useVirtualizer } from '@tanstack/react-virtual'

// Install if not present: npm install @tanstack/react-virtual
// Only use virtualizer when quotes.length > 100
const parentRef = useRef<HTMLDivElement>(null)
const rowVirtualizer = useVirtualizer({
  count: quotes.length,
  getScrollElement: () => parentRef.current,
  estimateSize: () => 80, // Estimated row height in px
})
```

### Units of Measurement

Trade-specific units to use as options in the unit select dropdown:
- `per unit` — Universal default
- `per hour` — Labor
- `flat rate` — Fixed-price services
- `per linear foot` — Pipe, wire, duct, trim
- `per square foot` — Paint, flooring, roofing

### File Structure After Epic 2

```
src/ (Next.js project root at mvps/contractor-quoting-estimation/src/)
├── prisma/
│   ├── schema.prisma          # UNCHANGED — all models already exist
│   └── seed.ts                # NEW — trade template seed data
├── src/
│   ├── app/
│   │   ├── dashboard/
│   │   │   └── page.tsx       # UPGRADED — full quote list dashboard
│   │   ├── quotes/
│   │   │   ├── new/
│   │   │   │   └── page.tsx   # NEW — quote builder (create mode)
│   │   │   └── [id]/
│   │   │       └── page.tsx   # NEW — quote builder (edit mode)
│   │   └── api/
│   │       ├── quotes/
│   │       │   ├── route.ts                # NEW — GET list, POST create
│   │       │   └── [id]/
│   │       │       ├── route.ts            # NEW — GET, PUT, DELETE
│   │       │       └── duplicate/
│   │       │           └── route.ts        # NEW — POST duplicate
│   │       └── templates/
│   │           ├── route.ts               # NEW — GET by trade
│   │           └── [id]/
│   │               └── items/
│   │                   └── route.ts       # NEW — GET items
│   ├── components/
│   │   ├── quotes/            # NEW directory
│   │   │   ├── quote-builder.tsx
│   │   │   ├── line-item-row.tsx
│   │   │   ├── line-item-picker.tsx
│   │   │   ├── customer-info.tsx
│   │   │   ├── deposit-config.tsx
│   │   │   ├── quote-summary.tsx
│   │   │   └── trade-selector.tsx
│   │   └── dashboard/         # NEW directory
│   │       ├── quote-list.tsx
│   │       ├── quote-card.tsx
│   │       ├── quote-filters.tsx
│   │       └── status-badge.tsx
│   ├── hooks/
│   │   ├── use-quotes.ts      # NEW
│   │   └── use-templates.ts   # NEW
│   └── lib/
│       └── validations/
│           └── quote.ts       # NEW — quote + line item Zod schemas
```

### Testing Notes

- Unit tests co-located: `*.test.ts` next to source files
- Test API routes: create quote (valid/invalid data), update (ownership check), delete (draft vs non-draft), duplicate
- Test Zod schemas: required fields, enum validation, numeric constraints
- Test `calculateTotal()` in utils — it already exists but verify it handles edge cases (0 items, 0 tax rate)
- Use `vitest` (already configured with `vitest.config.ts`)
- Do NOT mock Prisma in tests — use test database or mock at the module level if DB unavailable

### Anti-Patterns (Do NOT Do These)

- **Never** re-implement `calculateTotal()` — use the one from `src/lib/utils.ts`
- **Never** re-implement `generateQuoteNumber()` — use the one from `src/lib/utils.ts`
- **Never** use raw SQL — always Prisma
- **Never** create line items with raw `create` inside a PUT handler — use a Prisma transaction that deletes and recreates
- **Never** allow deletion of non-DRAFT quotes — check status before proceeding
- **Never** copy `viewToken` when duplicating a quote — let Prisma generate a new one with `@default(cuid())`
- **Never** expose other users' quotes — always filter by `userId: session.user.id`
- **Never** skip Zod validation on API routes
- **Never** use `fetch` for GET requests in components — always SWR hooks
- **Never** create top-level component files — use feature directories (`src/components/quotes/`, `src/components/dashboard/`)

### References

- [Source: planning/architecture.md#Data Architecture — Data Model]
- [Source: planning/architecture.md#API & Communication Patterns — Core API Endpoints]
- [Source: planning/architecture.md#Frontend Architecture — State Management]
- [Source: planning/architecture.md#Frontend Architecture — Performance Optimization]
- [Source: planning/architecture.md#Implementation Patterns & Consistency Rules]
- [Source: planning/architecture.md#Project Structure & Boundaries]
- [Source: planning/epics.md#Epic 2: Quote Creation with Trade Templates]
- [Source: stories/epic-1.md#Dev Agent Record — Debug Log References]

## Dev Agent Record

### Agent Model Used

claude-sonnet-4-6

### Debug Log References

### Completion Notes List

### File List
