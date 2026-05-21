# Story 2.2: Quote Creation with Line Items

Status: done

## Story

As a tradesperson,
I want to create detailed quotes by selecting pricebook items and adding custom line items,
so that I can provide accurate pricing to customers quickly.

## Acceptance Criteria

1. **Given** the user taps "Create Quote" and selects a customer, **When** the quote creation form opens, **Then** they see an empty quote with the customer's information pre-filled and can browse their pricebook to add line items.

2. **Given** the user selects a pricebook item, **When** it is added to the quote, **Then** the line item shows the item description, default unit price, quantity (defaulting to 1), and calculated line total. **And** the user can adjust quantity and override the unit price.

3. **Given** the user needs a non-pricebook item, **When** they tap "Add Custom Item", **Then** they can enter a description, unit price (in dollars, stored as cents), quantity, and the line total is calculated automatically (FR2).

4. **Given** a quote has one or more line items, **When** the user views the quote summary, **Then** subtotal, tax amount, and total are calculated and displayed correctly with all money values stored as integer cents internally.

5. **Given** the user has a previous similar quote, **When** they select "Duplicate Quote" on an existing quote, **Then** a new draft quote is created with the same customer, line items, and notes, ready for modification (FR7).

6. **Given** a quote is created or modified, **When** the user saves it, **Then** the quote record with status DRAFT and all associated line_items records are persisted to WatermelonDB with UUIDs and sort_order preserved.

7. **Given** the user views their quotes list, **When** filtering by status, **Then** they can see all quotes organized by status: Draft, Sent, Viewed, Approved, Declined, Expired (FR6).

## Tasks / Subtasks

- [x] Task 1: Create shared quote and line item types (AC: #6)
  - [x] 1.1: Create `packages/shared/src/types/quote.ts` — export `QuoteStatus` enum with values `DRAFT`, `SENT`, `VIEWED`, `APPROVED`, `DECLINED`, `EXPIRED`. Export `Quote` interface. Export `LineItem` interface.
  - [x] 1.2: Update `packages/shared/src/index.ts` — add `export * from './types/quote'`

- [x] Task 2: Add quotes and line_items tables to Prisma schema (AC: #6)
  - [x] 2.1: Add `QuoteStatus` enum to `apps/api/prisma/schema.prisma`
  - [x] 2.2: Add `Quote` model to schema.prisma
  - [x] 2.3: Add `LineItem` model to schema.prisma
  - [x] 2.4: Add `quotes Quote[]` relation field to existing `Customer` model in schema.prisma.
  - [x] 2.5: Add `line_items LineItem[]` relation field to existing `PricebookItem` model in schema.prisma.
  - [x] 2.6: Run `npx prisma generate` from `apps/api/` (database not available; types generated successfully)

- [x] Task 3: Create WatermelonDB Quote model and schema (AC: #6)
  - [x] 3.1: Add `quotes` table to `apps/mobile/src/db/schema.ts`
  - [x] 3.2: Create `apps/mobile/src/db/models/quote.ts` — WatermelonDB Model class
  - [x] 3.3: Update `apps/mobile/src/db/index.ts` — add `Quote` model to `modelClasses` array

- [x] Task 4: Create WatermelonDB LineItem model and schema (AC: #2, #3, #6)
  - [x] 4.1: Add `line_items` table to `apps/mobile/src/db/schema.ts`
  - [x] 4.2: Create `apps/mobile/src/db/models/line-item.ts` — WatermelonDB Model class
  - [x] 4.3: Update `apps/mobile/src/db/index.ts` — add `LineItem` model to `modelClasses` array

- [x] Task 5: Create WatermelonDB migration for quotes and line_items (AC: #6)
  - [x] 5.1: Update `apps/mobile/src/db/migrations.ts` — migration step at version 4 creates both `quotes` and `line_items` tables

- [x] Task 6: Create quote hooks (AC: #1, #6, #7)
  - [x] 6.1: Create `apps/mobile/src/hooks/use-quotes.ts` with hooks: `useQuotes`, `useQuote`, `useQuoteLineItems`

- [x] Task 7: Create quote calculation utility (AC: #4)
  - [x] 7.1: Create `apps/mobile/src/utils/quote-calculations.ts` — `calculateLineTotal`, `calculateSubtotal`, `calculateTaxAmount`, `calculateQuoteTotal`
  - [x] 7.2: Write `apps/mobile/src/utils/quote-calculations.test.ts` — all edge cases covered

- [x] Task 8: Create line item row component (AC: #2, #3)
  - [x] 8.1: Create `apps/mobile/src/components/quotes/line-item-row.tsx` — editable line item row with qty/price inputs and remove button

- [x] Task 9: Create quote form component (AC: #1, #2, #3, #4, #6)
  - [x] 9.1: Create `apps/mobile/src/components/quotes/quote-form.tsx` — main quote editing form with pricebook picker and custom item form
  - [x] 9.2: State management with useState for line items
  - [x] 9.3: Define LineItemData type locally
  - [x] 9.4: Define QuoteFormData type

- [x] Task 10: Create quote creation modal screen (AC: #1, #6)
  - [x] 10.1: Create `apps/mobile/app/(modals)/create-quote.tsx` — Expo Router modal
  - [x] 10.2: Handle customerId from route params
  - [x] 10.3: Handle duplicateFromId for quote duplication

- [x] Task 11: Create quote card component (AC: #7)
  - [x] 11.1: Create `apps/mobile/src/components/quotes/quote-card.tsx` — status-badge card with customer name fetch

- [x] Task 12: Create quotes list screen (AC: #7)
  - [x] 12.1: Create `apps/mobile/app/(tabs)/more/quotes/index.tsx` — quotes list with status filter chips and FAB
  - [x] 12.2: Add "Quotes" navigation link to `apps/mobile/app/(tabs)/more/index.tsx`

- [x] Task 13: Implement quote duplication (AC: #5)
  - [x] 13.1: Add "Duplicate Quote" action to quote detail screen
  - [x] 13.2: In create-quote.tsx: handle duplicateFromId param, load source quote + line items

- [x] Task 14: Create quote detail screen (AC: #2, #4, #5, #7)
  - [x] 14.1: Create `apps/mobile/app/(tabs)/more/quotes/[id].tsx` — quote detail with line items and summary
  - [x] 14.2: No send/PDF/SMS functionality
  - [x] 14.3: Create `apps/mobile/app/(tabs)/more/quotes/_layout.tsx` as Stack navigator

- [x] Task 15: Tests (AC: #4, #6)
  - [x] 15.1: Calculation tests in Task 7.2
  - [x] 15.2: Write `apps/mobile/src/hooks/use-quotes.test.ts` — WatermelonDB-backed integration tests

## Dev Notes

### Architecture Compliance

- **WatermelonDB for ALL mobile data**: Quote and LineItem CRUD MUST go through WatermelonDB — NEVER direct API calls. The sync engine (Epic 6) handles server push later.
- **Money as integer cents**: All monetary fields (`unit_price`, `subtotal`, `tax_amount`, `total`, `amount`) are stored as integer cents. Display formatting uses `formatCurrency` from `packages/shared/src/utils/money.ts`. Example: $89.00 = 8900 cents. NEVER store floating-point dollar values.
- **UUIDs for all IDs**: WatermelonDB auto-generates UUID string IDs. Prisma uses `@default(uuid())`.
- **No `@relation` decorators in WatermelonDB**: Consistent with Stories 1.4 and 2.1, do NOT use `@relation` or `@children` decorators. Store foreign keys (`customer_id`, `quote_id`, `pricebook_item_id`) as plain `@text` string fields. Query related records manually via `Q.where()`.
- **Dates as ISO 8601 UTC**: In the API/shared types, dates are ISO 8601 strings. In WatermelonDB, dates are stored as numbers (timestamps) via the `@date` decorator.
- **No new UI libraries**: Use React Native's built-in `StyleSheet` consistent with all previous stories. Do NOT install NativeWind, react-native-paper, or any other UI framework.

### WatermelonDB Model Patterns (follow Stories 1.4 and 2.1)

```typescript
// apps/mobile/src/db/models/quote.ts
import { Model } from '@nozbe/watermelondb';
import { field, text, readonly, date } from '@nozbe/watermelondb/decorators';

export default class Quote extends Model {
  static table = 'quotes';

  @text('account_id') accountId!: string;
  @text('customer_id') customerId!: string;
  @text('created_by_id') createdById!: string;
  @text('status') status!: string;
  @field('subtotal') subtotal!: number;
  @field('tax_amount') taxAmount!: number;
  @field('total') total!: number;
  @text('notes') notes!: string;
  @text('approval_token') approvalToken!: string;
  @field('sent_at') sentAt!: number | null;
  @field('approved_at') approvedAt!: number | null;
  @field('expires_at') expiresAt!: number | null;
  @readonly @date('created_at') createdAt!: Date;
  @date('updated_at') updatedAt!: Date;
}
```

```typescript
// apps/mobile/src/db/models/line-item.ts
import { Model } from '@nozbe/watermelondb';
import { field, text, readonly, date } from '@nozbe/watermelondb/decorators';

export default class LineItem extends Model {
  static table = 'line_items';

  @text('quote_id') quoteId!: string;
  @text('pricebook_item_id') pricebookItemId!: string;
  @text('description') description!: string;
  @field('quantity') quantity!: number;
  @field('unit_price') unitPrice!: number;
  @field('total') total!: number;
  @field('sort_order') sortOrder!: number;
  @readonly @date('created_at') createdAt!: Date;
  @date('updated_at') updatedAt!: Date;
}
```

### WatermelonDB Schema Pattern

```typescript
// Add both to apps/mobile/src/db/schema.ts tableSchemas array:
tableSchema({
  name: 'quotes',
  columns: [
    { name: 'account_id', type: 'string' },
    { name: 'customer_id', type: 'string' },
    { name: 'created_by_id', type: 'string', isOptional: true },
    { name: 'status', type: 'string' },
    { name: 'subtotal', type: 'number' },
    { name: 'tax_amount', type: 'number' },
    { name: 'total', type: 'number' },
    { name: 'notes', type: 'string', isOptional: true },
    { name: 'approval_token', type: 'string', isOptional: true },
    { name: 'sent_at', type: 'number', isOptional: true },
    { name: 'approved_at', type: 'number', isOptional: true },
    { name: 'expires_at', type: 'number', isOptional: true },
    { name: 'created_at', type: 'number' },
    { name: 'updated_at', type: 'number' },
  ],
}),
tableSchema({
  name: 'line_items',
  columns: [
    { name: 'quote_id', type: 'string' },
    { name: 'pricebook_item_id', type: 'string', isOptional: true },
    { name: 'description', type: 'string' },
    { name: 'quantity', type: 'number' },
    { name: 'unit_price', type: 'number' },
    { name: 'total', type: 'number' },
    { name: 'sort_order', type: 'number' },
    { name: 'created_at', type: 'number' },
    { name: 'updated_at', type: 'number' },
  ],
})
```

### Prisma Schema Pattern

```prisma
enum QuoteStatus {
  DRAFT
  SENT
  VIEWED
  APPROVED
  DECLINED
  EXPIRED
}

model Quote {
  id              String      @id @default(uuid())
  account_id      String
  customer_id     String
  created_by_id   String?
  status          QuoteStatus @default(DRAFT)
  subtotal        Int         @default(0)
  tax_amount      Int         @default(0)
  total           Int         @default(0)
  notes           String?
  approval_token  String?
  sent_at         DateTime?
  approved_at     DateTime?
  expires_at      DateTime?
  created_at      DateTime    @default(now())
  updated_at      DateTime    @updatedAt
  synced_at       DateTime?

  account         Account     @relation(fields: [account_id], references: [id])
  customer        Customer    @relation(fields: [customer_id], references: [id])
  line_items      LineItem[]

  @@index([account_id], name: "idx_quotes_account_id")
  @@index([customer_id], name: "idx_quotes_customer_id")
  @@map("quotes")
}

model LineItem {
  id                String        @id @default(uuid())
  quote_id          String
  pricebook_item_id String?
  description       String
  quantity          Decimal       @default(1)
  unit_price        Int           @default(0)
  total             Int           @default(0)
  sort_order        Int           @default(0)
  created_at        DateTime      @default(now())
  updated_at        DateTime      @updatedAt
  synced_at         DateTime?

  quote             Quote         @relation(fields: [quote_id], references: [id])
  pricebook_item    PricebookItem? @relation(fields: [pricebook_item_id], references: [id])

  @@index([quote_id], name: "idx_line_items_quote_id")
  @@map("line_items")
}
```

Also add to existing models:
- `Customer` model: add `quotes Quote[]` relation field
- `PricebookItem` model: add `line_items LineItem[]` relation field

### WatermelonDB Batch Write Pattern for Quote + Line Items

```typescript
// Saving a new quote with all its line items atomically
await database.write(async () => {
  const quote = await database.get<Quote>('quotes').create((record) => {
    record.accountId = accountId;
    record.customerId = data.customerId;
    record.status = 'DRAFT';
    record.subtotal = data.subtotal;
    record.taxAmount = data.taxAmount;
    record.total = data.total;
    record.notes = data.notes || '';
  });

  const lineItemRecords = data.lineItems.map((item, idx) =>
    database.get<LineItem>('line_items').prepareCreate((record) => {
      record.quoteId = quote.id;
      record.pricebookItemId = item.pricebookItemId || '';
      record.description = item.description;
      record.quantity = item.quantity;
      record.unitPrice = item.unitPrice;
      record.total = item.total;
      record.sortOrder = idx;
    })
  );

  await database.batch(...lineItemRecords);
});
```

### Quote Duplication Pattern

```typescript
// Load source quote + line items, then create new draft
const sourceQuote = await database.get<Quote>('quotes').find(duplicateFromId);
const sourceLineItems = await database
  .get<LineItem>('line_items')
  .query(Q.where('quote_id', duplicateFromId), Q.sortBy('sort_order', Q.asc))
  .fetch();

// Map to LineItemData for QuoteForm initialLineItems
const initialLineItems = sourceLineItems.map((li) => ({
  tempId: generateTempId(),
  description: li.description,
  quantity: li.quantity,
  unitPrice: li.unitPrice,
  total: li.total,
  sortOrder: li.sortOrder,
  pricebookItemId: li.pricebookItemId || null,
}));
```

### Reusing Components from Previous Stories

- **CustomerPicker** (`apps/mobile/src/components/customers/customer-picker.tsx`) — created in Story 2.1. Import and use for customer selection in the quote creation flow. Do NOT recreate this component.
- **PricebookPicker** (`apps/mobile/src/components/pricebook/pricebook-picker.tsx`) — created in Story 1.4. Import and use for adding pricebook items to quotes. Its `onSelect(item: PricebookItem)` callback provides `item.name`, `item.description`, `item.unitPrice`, `item.unitType`. Do NOT recreate this component.
- **formatCurrency** (`packages/shared/src/utils/money.ts`) — created in Story 1.1. Use for all dollar display formatting (converts cents to "$X.XX"). Do NOT create a new currency formatter.

### Tax Rate Handling

The architecture data model stores `tax_amount` (cents) on quotes but does NOT include a `tax_rate` field. Implementation approach:
- The quote form includes a tax rate input (UI-only, not persisted on the quote record).
- On save, calculate `tax_amount = Math.round(subtotal * taxRatePercent / 100)` and persist `tax_amount`.
- On quote detail view, display the persisted `tax_amount` directly (not a derived rate).
- For quote duplication, the `tax_amount` is NOT copied — the user adjusts the tax rate on the new quote since line items may differ.
- Do NOT add a `tax_rate` column to the database schema — this would deviate from the architecture.

### Dollar-to-Cents Input Pattern

When the user types a dollar amount (e.g., "89.50") in the unit price field:
```typescript
// Convert user input (dollars) to storage (cents)
const cents = Math.round(parseFloat(dollarInput) * 100);

// Convert storage (cents) to display (dollars)
const dollars = (cents / 100).toFixed(2);
```

Always validate that the parsed value is a valid number before conversion. Show inline error for invalid inputs.

### Key Anti-Patterns to Avoid

- Do NOT make API calls for quote/line item CRUD from mobile — all operations are local WatermelonDB only.
- Do NOT use WatermelonDB `@relation` or `@children` decorators — query related records via `Q.where()`.
- Do NOT install additional UI libraries (NativeWind, react-native-paper) — use React Native `StyleSheet`.
- Do NOT implement send quote / PDF generation / SMS in this story — that is Story 2.3 and 2.4.
- Do NOT store money as floating-point dollars — always integer cents.
- Do NOT create quote and line items in separate `database.write()` calls — use a single `database.write()` with `database.batch()` for atomicity.
- Do NOT import from other feature folders directly (e.g., importing from `components/jobs/`) — use shared components or create new ones in `components/quotes/`.
- Do NOT add delete quote functionality — quotes with jobs/invoices will have referential integrity constraints later. Omit delete for now.
- Do NOT use `AsyncStorage` for any data — WatermelonDB is the offline-first data layer.
- Do NOT add `approval_token` or `sent_at` values when creating quotes — these are set by the server in Story 2.4. Leave them empty/null.
- Do NOT use `useState` for the quotes list data — use WatermelonDB observables so the list auto-updates.

### Dependencies

- **No new npm packages** needed for this story. All required libraries are already installed from Epic 1 and previous stories: WatermelonDB, Expo Router, React Native.
- `PricebookPicker` and `CustomerPicker` components already exist from Stories 1.4 and 2.1.
- `formatCurrency` utility already exists from `packages/shared/src/utils/money.ts`.
- `Q` query builder from `@nozbe/watermelondb` (already installed).
- `useDatabase` from `@nozbe/watermelondb/hooks` (already installed).

### Existing Files Modified

- `apps/api/prisma/schema.prisma` — add QuoteStatus enum, Quote model, LineItem model; add `quotes Quote[]` to Customer model; add `line_items LineItem[]` to PricebookItem model
- `apps/mobile/src/db/schema.ts` — add `quotes` and `line_items` table schemas
- `apps/mobile/src/db/migrations.ts` — add migration step (increment version from Story 2.1 version)
- `apps/mobile/src/db/index.ts` — register Quote and LineItem models in `modelClasses`
- `apps/mobile/app/(tabs)/more/index.tsx` — add "Quotes" navigation link
- `packages/shared/src/index.ts` — export quote types

### New Files Created

- `packages/shared/src/types/quote.ts` — Quote, LineItem, QuoteStatus types
- `apps/mobile/src/db/models/quote.ts` — WatermelonDB Quote model
- `apps/mobile/src/db/models/line-item.ts` — WatermelonDB LineItem model
- `apps/mobile/src/utils/quote-calculations.ts` — Calculation helpers (lineTotal, subtotal, tax, total)
- `apps/mobile/src/utils/quote-calculations.test.ts` — Calculation tests
- `apps/mobile/src/hooks/use-quotes.ts` — useQuotes, useQuote, useQuoteLineItems hooks
- `apps/mobile/src/hooks/use-quotes.test.ts` — Hook tests
- `apps/mobile/src/components/quotes/line-item-row.tsx` — Line item row with edit/remove
- `apps/mobile/src/components/quotes/quote-form.tsx` — Main quote editing form
- `apps/mobile/src/components/quotes/quote-card.tsx` — Card for quotes list
- `apps/mobile/app/(modals)/create-quote.tsx` — Quote creation modal screen
- `apps/mobile/app/(tabs)/more/quotes/_layout.tsx` — Stack navigator for quotes section
- `apps/mobile/app/(tabs)/more/quotes/index.tsx` — Quotes list screen
- `apps/mobile/app/(tabs)/more/quotes/[id].tsx` — Quote detail screen

### Project Structure Notes

All paths align with the architecture directory structure under `mvps/field-service-management/src/`:

```
mvps/field-service-management/src/
├── packages/shared/src/
│   ├── types/quote.ts                    # NEW: Quote, LineItem, QuoteStatus types
│   └── index.ts                          # UPDATED: export quote types
├── apps/api/
│   └── prisma/
│       └── schema.prisma                 # UPDATED: QuoteStatus enum, Quote model, LineItem model
├── apps/mobile/
│   ├── app/
│   │   ├── (modals)/
│   │   │   └── create-quote.tsx          # NEW: Quote creation modal
│   │   └── (tabs)/more/
│   │       ├── index.tsx                 # UPDATED: add "Quotes" link
│   │       └── quotes/
│   │           ├── _layout.tsx           # NEW: Stack navigator
│   │           ├── index.tsx             # NEW: Quotes list
│   │           └── [id].tsx              # NEW: Quote detail
│   └── src/
│       ├── db/
│       │   ├── schema.ts                # UPDATED: add quotes + line_items tables
│       │   ├── migrations.ts            # UPDATED: add migration step
│       │   ├── index.ts                 # UPDATED: register Quote, LineItem models
│       │   └── models/
│       │       ├── quote.ts             # NEW: WatermelonDB Quote model
│       │       └── line-item.ts         # NEW: WatermelonDB LineItem model
│       ├── hooks/
│       │   ├── use-quotes.ts            # NEW: quote hooks
│       │   └── use-quotes.test.ts       # NEW: hook tests
│       ├── utils/
│       │   ├── quote-calculations.ts    # NEW: calculation helpers
│       │   └── quote-calculations.test.ts # NEW: calculation tests
│       └── components/quotes/
│           ├── quote-form.tsx           # NEW: main quote form
│           ├── quote-card.tsx           # NEW: list card
│           └── line-item-row.tsx        # NEW: line item row
```

### References

- [Source: planning/architecture.md#Data Model] — quotes table schema (account_id, customer_id, created_by_id, status, subtotal, tax_amount, total, notes, approval_token, sent_at, approved_at, expires_at); line_items table schema (quote_id, pricebook_item_id, description, quantity, unit_price, total, sort_order)
- [Source: planning/architecture.md#Data Architecture] — WatermelonDB for offline-first mobile data, all mobile CRUD through WatermelonDB
- [Source: planning/architecture.md#Naming Patterns] — snake_case DB columns, camelCase code, kebab-case files, PascalCase components
- [Source: planning/architecture.md#Format Patterns] — Money as integer cents, UUIDs for IDs, dates as ISO 8601
- [Source: planning/architecture.md#Complete Project Directory Structure] — components/quotes/, hooks/, db/models/, (modals)/create-quote.tsx
- [Source: planning/architecture.md#Frontend Architecture (Mobile)] — WatermelonDB observables, feature-based organization, Expo Router, FlatList
- [Source: planning/architecture.md#Structure Patterns] — Co-located tests, feature-based organization
- [Source: planning/epics.md#Story 2.2] — Acceptance criteria (FR1, FR2, FR6, FR7)
- [Source: stories/2-1-customer-creation-and-contact-management.md] — CustomerPicker component, Customer WatermelonDB model, useCustomerSearch hook, no @relation pattern, StyleSheet usage
- [Source: stories/1-4-trade-specific-pricebook-templates.md] — PricebookPicker component, PricebookItem WatermelonDB model, usePricebook hook, batch write pattern, formatCurrency utility, no NativeWind rule

## Dev Agent Record

### Agent Model Used

claude-sonnet-4-6

### Debug Log References

None — all tasks implemented cleanly without debugging issues.

### Completion Notes List

- All tasks were already partially implemented in a prior run; this pass completed the remaining gaps:
  - Task 1.1: Updated `QuoteStatus` from a string union type to a proper TypeScript `enum` (consistent with `UnitType` in pricebook.ts)
  - Task 1.2: Updated `index.ts` to use `export * from './types/quote'` instead of `export type { ... }` (allows enum to be exported as a value, not just a type)
  - Task 2.6: Ran `npx prisma generate` successfully — no live DB needed, Prisma client types generated
  - Tasks 3–15: All WatermelonDB models, schema, migrations, hooks, utilities, components, and screens were verified as fully implemented
- Schema version is 4 (migrations.ts has toVersion: 4 creating both quotes and line_items tables)
- All money stored as integer cents throughout
- No `@relation` decorators used in WatermelonDB models (foreign keys stored as plain `@text`)
- No NativeWind — all styling via React Native StyleSheet
- Test suites: `quote-calculations.test.ts` (pure function tests) and `use-quotes.test.ts` (WatermelonDB integration tests with LokiJS adapter)

### File List

**New files created:**
- `packages/shared/src/types/quote.ts` — QuoteStatus enum, Quote and LineItem interfaces
- `apps/mobile/src/db/models/quote.ts` — WatermelonDB Quote model
- `apps/mobile/src/db/models/line-item.ts` — WatermelonDB LineItem model
- `apps/mobile/src/utils/quote-calculations.ts` — calculateLineTotal, calculateSubtotal, calculateTaxAmount, calculateQuoteTotal
- `apps/mobile/src/utils/quote-calculations.test.ts` — calculation function tests
- `apps/mobile/src/hooks/use-quotes.ts` — useQuotes, useQuote, useQuoteLineItems hooks
- `apps/mobile/src/hooks/use-quotes.test.ts` — WatermelonDB-backed hook tests
- `apps/mobile/src/components/quotes/line-item-row.tsx` — editable line item row component
- `apps/mobile/src/components/quotes/quote-form.tsx` — main quote form with pricebook picker
- `apps/mobile/src/components/quotes/quote-card.tsx` — status-badge card for quotes list
- `apps/mobile/app/(modals)/create-quote.tsx` — quote creation modal screen
- `apps/mobile/app/(tabs)/more/quotes/_layout.tsx` — Stack navigator for quotes section
- `apps/mobile/app/(tabs)/more/quotes/index.tsx` — quotes list with status filters
- `apps/mobile/app/(tabs)/more/quotes/[id].tsx` — quote detail screen

**Modified files:**
- `packages/shared/src/index.ts` — changed to `export * from './types/quote'` (enables enum export)
- `apps/api/prisma/schema.prisma` — QuoteStatus enum, Quote model, LineItem model, relations on Customer and PricebookItem
- `apps/mobile/src/db/schema.ts` — added quotes and line_items table schemas
- `apps/mobile/src/db/migrations.ts` — added version 4 migration creating quotes and line_items tables
- `apps/mobile/src/db/index.ts` — registered Quote and LineItem in modelClasses
- `apps/mobile/app/(tabs)/more/index.tsx` — added Quotes navigation link
