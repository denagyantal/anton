# Story 1.4: Trade-Specific Pricebook Templates

Status: ready-for-dev

## Story

As a tradesperson,
I want a pre-built pricebook for my trade loaded automatically during onboarding,
so that I can start creating quotes immediately without manual data entry.

## Acceptance Criteria

1. **Given** a user selects "HVAC" as their trade during onboarding, **When** the pricebook template is loaded, **Then** the local database is populated with HVAC-specific pricebook items organized by categories (e.g., Diagnostics, Refrigerant, Motors, Capacitors, Installation) with default unit prices in cents.

2. **Given** a user selects "Plumbing" as their trade during onboarding, **When** the pricebook template is loaded, **Then** plumbing-specific items are loaded (e.g., Drain Clearing, Pipe Repair, Fixture Installation, Water Heater) with appropriate default pricing.

3. **Given** a user selects "Electrical" as their trade during onboarding, **When** the pricebook template is loaded, **Then** electrical-specific items are loaded (e.g., Panel Upgrade, Outlet Installation, Wiring, Lighting, Breakers) with appropriate default pricing.

4. **Given** a user has a loaded pricebook, **When** they navigate to pricebook settings, **Then** they can add new items, edit existing item names/descriptions/prices, remove items, and add or rename categories (FR8).

5. **Given** pricebook items exist in WatermelonDB, **When** the user creates a quote, **Then** they can browse and select items from their pricebook organized by category.

## Tasks / Subtasks

- [ ] Task 1: Create pricebook JSON template data files (AC: #1, #2, #3)
  - [ ] 1.1: Create `apps/mobile/src/data/pricebooks/hvac.json` — JSON array of pricebook items organized by category. Categories: "Diagnostics & Service Calls", "Refrigerant & Charging", "Motors & Fans", "Capacitors & Electrical", "Installation", "Maintenance". Each item: `{ "category": string, "name": string, "description": string, "unitPrice": number (in cents), "unitType": "EACH" | "HOUR" | "FLAT" }`. Include 30-40 realistic items with market-accurate pricing (e.g., "AC Diagnostic" = 8900 cents, "Capacitor Replacement" = 17500 cents, "Compressor Replacement" = 250000 cents).
  - [ ] 1.2: Create `apps/mobile/src/data/pricebooks/plumbing.json` — Categories: "Drain Clearing", "Pipe Repair", "Fixture Installation", "Water Heater", "Emergency Services", "Maintenance". 30-40 items with realistic pricing (e.g., "Drain Snake" = 15000 cents, "Faucet Install" = 22500 cents, "Water Heater Replacement" = 150000 cents).
  - [ ] 1.3: Create `apps/mobile/src/data/pricebooks/electrical.json` — Categories: "Panel Upgrades", "Outlet & Switch", "Wiring", "Lighting", "Breakers & Safety", "Inspections". 30-40 items with realistic pricing (e.g., "200A Panel Upgrade" = 350000 cents, "Outlet Installation" = 17500 cents, "Ceiling Fan Install" = 22500 cents).

- [ ] Task 2: Create WatermelonDB pricebook_items model and schema (AC: #1, #2, #3, #4, #5)
  - [ ] 2.1: Add `pricebook_items` table to `apps/mobile/src/db/schema.ts` — columns: `account_id` (string), `category` (string), `name` (string), `description` (string, optional), `unit_price` (number, integer cents), `unit_type` (string: EACH/HOUR/FLAT), `is_active` (boolean, default true), `sort_order` (number), `created_at` (number), `updated_at` (number). Add table to the schema's `tableSchemas` array.
  - [ ] 2.2: Create `apps/mobile/src/db/models/pricebook-item.ts` — WatermelonDB Model class extending `Model` with `static table = 'pricebook_items'`. Define `@field` decorators for all columns. Add `@readonly @date('created_at') createdAt` and `@date('updated_at') updatedAt`. Export the model class.
  - [ ] 2.3: Update `apps/mobile/src/db/index.ts` — add `PricebookItem` model to the `modelClasses` array in the Database initialization.
  - [ ] 2.4: Update `apps/mobile/src/db/migrations.ts` — add a migration step to create the `pricebook_items` table (increment schema version).

- [ ] Task 3: Create pricebook seeding service (AC: #1, #2, #3)
  - [ ] 3.1: Create `apps/mobile/src/services/pricebook-service.ts` — service with a `seedPricebook(database: Database, tradeType: TradeType, accountId: string): Promise<void>` function. Import the JSON files based on `tradeType` (use `require()` for JSON imports in React Native). Batch-write all items to WatermelonDB using `database.write()` with `database.batch()`. Each item becomes a `pricebook_items` record with `account_id` set, `is_active = true`, `sort_order` set based on array index within category. Use `database.get<PricebookItem>('pricebook_items').query().fetchCount()` to check if items already exist — skip seeding if count > 0 (idempotent).
  - [ ] 3.2: Write test `apps/mobile/src/services/pricebook-service.test.ts` — test that `seedPricebook` with HVAC trade creates expected number of records, items have correct fields (unit_price as integer cents, valid unit_type enum value, non-empty name and category), and calling it twice does not create duplicates.

- [ ] Task 4: Integrate pricebook loading into onboarding flow (AC: #1, #2, #3)
  - [ ] 4.1: Update `apps/mobile/app/(auth)/onboarding.tsx` — after the user taps "Complete Setup" and the API call succeeds (profile saved), call `seedPricebook(database, selectedTradeType, accountId)`. Show a brief loading indicator ("Setting up your pricebook...") during seeding. Only navigate to `(tabs)` after both API save AND pricebook seeding complete. If seeding fails, log error to console but still proceed (pricebook can be loaded later from settings).
  - [ ] 4.2: Access the WatermelonDB `database` instance from `DatabaseContext` (created in Story 1.1) inside the onboarding screen. Import `useDatabase` hook or access via context.

- [ ] Task 5: Create pricebook management screen (AC: #4)
  - [ ] 5.1: Create `apps/mobile/app/(tabs)/more/pricebook.tsx` — screen showing all pricebook items grouped by category in collapsible sections (SectionList). Each item row shows: name, description (truncated), formatted unit price (e.g., "$89.00"), unit type. Long-press or swipe to reveal delete action.
  - [ ] 5.2: Create `apps/mobile/src/components/pricebook/pricebook-item-form.tsx` — reusable form component (used for add/edit) with fields: category (text input with autocomplete from existing categories), name (required), description (optional), unit price (numeric input — user enters dollars, stored as cents), unit type (picker: Each, Hourly, Flat Rate). Validate: name is required, unit price > 0.
  - [ ] 5.3: Add "Add Item" FAB or button on the pricebook screen — opens the form in a modal or pushes to a new screen. On save: `database.write()` to create a new `pricebook_items` record.
  - [ ] 5.4: Tap on an existing item opens the form pre-populated for editing. On save: `database.write()` to update the record via `item.update()`.
  - [ ] 5.5: Delete action sets `is_active = false` (soft delete) rather than destroying the record — completed quotes may reference these items. Show confirmation alert before deleting.
  - [ ] 5.6: Add navigation link "Pricebook" to `apps/mobile/app/(tabs)/more/index.tsx` — placed below "Business Profile" link.

- [ ] Task 6: Create pricebook picker component for quote creation (AC: #5)
  - [ ] 6.1: Create `apps/mobile/src/components/pricebook/pricebook-picker.tsx` — a modal or bottom sheet that displays pricebook items grouped by category. Each category is a collapsible section. Tapping an item calls an `onSelect(item: PricebookItem)` callback prop. Include a search bar at the top that filters items by name across all categories. Only show items where `is_active = true`.
  - [ ] 6.2: Create `apps/mobile/src/hooks/use-pricebook.ts` — custom hook that returns `{ items, categories, isLoading }` by observing `pricebook_items` from WatermelonDB where `is_active = true`, sorted by `category` then `sort_order`. Use WatermelonDB's `Q.where()` and `Q.sortBy()`. Group items by category for section list display.

- [ ] Task 7: Create API endpoint for pricebook sync (AC: #1, #2, #3)
  - [ ] 7.1: Add `pricebook_items` table to `prisma/schema.prisma` — fields: `id` (UUID, default uuid()), `account_id` (UUID, FK to accounts), `category` (String), `name` (String), `description` (String, nullable), `unit_price` (Int — cents), `unit_type` (enum UnitType: EACH, HOUR, FLAT), `is_active` (Boolean, default true), `is_template` (Boolean, default false), `sort_order` (Int, default 0), `created_at` (DateTime, default now()), `updated_at` (DateTime, @updatedAt), `synced_at` (DateTime, nullable). Add relation to `accounts`. Add index `idx_pricebook_items_account_id` on `account_id`.
  - [ ] 7.2: Run `npx prisma migrate dev --name add-pricebook-items` to create the migration.
  - [ ] 7.3: Add `pricebook_items` seed data to `apps/api/prisma/seed.ts` — store the same template data server-side for future sync scenarios. Mark template items with `is_template = true`.

- [ ] Task 8: Update shared types (AC: all)
  - [ ] 8.1: Create `packages/shared/src/types/pricebook.ts` — export `PricebookItem` interface: `{ id: string, accountId: string, category: string, name: string, description?: string, unitPrice: number, unitType: UnitType, isActive: boolean, sortOrder: number, createdAt: string, updatedAt: string }`. Export `UnitType` enum: `EACH`, `HOUR`, `FLAT`. Export `PricebookCategory` type (string alias for now).
  - [ ] 8.2: Update `packages/shared/src/index.ts` to export pricebook types.
  - [ ] 8.3: Add `UnitType` enum to Prisma schema if not using shared enum — the Prisma enum must match the shared TypeScript enum values (`EACH`, `HOUR`, `FLAT`).

## Dev Notes

### Architecture Compliance

- **Pricebook data location**: JSON template files go in `apps/mobile/src/data/pricebooks/` per the architecture's directory structure.
- **WatermelonDB for all mobile data**: Pricebook items MUST be stored in WatermelonDB (not in-memory, not AsyncStorage). This is the offline-first data layer — all mobile data operations go through WatermelonDB. Pricebook items must be available offline for quote creation.
- **Money as integer cents**: All `unit_price` values are stored as integer cents (e.g., $89.00 = 8900). Display formatting (cents to dollars) uses `formatCurrency()` from `packages/shared/src/utils/money.ts` (created in Story 1.1). Never store floating-point dollar values.
- **Soft delete pattern**: Use `is_active = false` for deletion rather than destroying records. Quotes reference pricebook items by ID — hard deletes would break referential integrity.
- **UUIDs for all IDs**: WatermelonDB auto-generates string IDs. Ensure they are UUIDs (WatermelonDB uses UUID by default).
- **No direct API calls for CRUD**: The pricebook data is seeded locally from JSON during onboarding. Future sync (Epic 6) will handle server synchronization. For now, all pricebook CRUD is local WatermelonDB only.

### WatermelonDB Patterns

WatermelonDB was initialized in Story 1.1 with an empty schema. This story adds the first real model.

```typescript
// Model definition pattern (apps/mobile/src/db/models/pricebook-item.ts)
import { Model } from '@nozbe/watermelondb';
import { field, text, readonly, date, writer } from '@nozbe/watermelondb/decorators';

export default class PricebookItem extends Model {
  static table = 'pricebook_items';

  @text('account_id') accountId!: string;
  @text('category') category!: string;
  @text('name') name!: string;
  @text('description') description!: string;
  @field('unit_price') unitPrice!: number;
  @text('unit_type') unitType!: string;
  @field('is_active') isActive!: boolean;
  @field('sort_order') sortOrder!: number;
  @readonly @date('created_at') createdAt!: Date;
  @date('updated_at') updatedAt!: Date;
}
```

```typescript
// Schema addition pattern (apps/mobile/src/db/schema.ts)
import { appSchema, tableSchema } from '@nozbe/watermelondb';

// Add to existing schema's tables array:
tableSchema({
  name: 'pricebook_items',
  columns: [
    { name: 'account_id', type: 'string' },
    { name: 'category', type: 'string' },
    { name: 'name', type: 'string' },
    { name: 'description', type: 'string', isOptional: true },
    { name: 'unit_price', type: 'number' },
    { name: 'unit_type', type: 'string' },
    { name: 'is_active', type: 'boolean' },
    { name: 'sort_order', type: 'number' },
    { name: 'created_at', type: 'number' },
    { name: 'updated_at', type: 'number' },
  ],
})
```

```typescript
// Batch write pattern for seeding (apps/mobile/src/services/pricebook-service.ts)
import { Database } from '@nozbe/watermelondb';

async function seedPricebook(database: Database, tradeType: TradeType, accountId: string) {
  const collection = database.get<PricebookItem>('pricebook_items');
  const existingCount = await collection.query().fetchCount();
  if (existingCount > 0) return; // Already seeded

  const templateData = getTemplateForTrade(tradeType); // Loads JSON
  await database.write(async () => {
    const records = templateData.map((item, index) =>
      collection.prepareCreate((record) => {
        record.accountId = accountId;
        record.category = item.category;
        record.name = item.name;
        record.description = item.description || '';
        record.unitPrice = item.unitPrice;
        record.unitType = item.unitType;
        record.isActive = true;
        record.sortOrder = index;
      })
    );
    await database.batch(...records);
  });
}
```

### Onboarding Integration

Story 1.3 created the onboarding screen at `apps/mobile/app/(auth)/onboarding.tsx`. This story modifies that screen to add pricebook seeding after profile save. The flow becomes:

```
User taps "Complete Setup"
  → Upload logo (if selected) via POST /api/v1/accounts/me/logo
  → Save profile via PATCH /api/v1/accounts/me
  → Seed pricebook via seedPricebook(database, tradeType, accountId)  ← NEW
  → refreshAccount() → navigate to (tabs)
```

To get the `database` instance inside onboarding, use the `useDatabase()` hook from `@nozbe/watermelondb/hooks` (requires `DatabaseProvider` wrapping the app — set up in Story 1.1).

To get the `accountId`, retrieve it from the AuthContext (Story 1.2 stores user/account info after signup/login). If `accountId` is not directly available in AuthContext, use the account data fetched in Story 1.3's `GET /api/v1/accounts/me` response.

### File Naming Conventions

- Source files: `kebab-case.ts` (e.g., `pricebook-service.ts`, `pricebook-item.ts`)
- React components: `PascalCase.tsx` for component files referenced in imports, but `kebab-case.tsx` for files (e.g., `pricebook-picker.tsx` containing `PricebookPicker` component)
- Expo Router screens: lowercase for route files (`pricebook.tsx`)
- Test files: co-located with `.test.ts` suffix (e.g., `pricebook-service.test.ts`)
- JSON data files: lowercase (`hvac.json`, `plumbing.json`, `electrical.json`)

### Key Anti-Patterns to Avoid

- Do NOT store pricebook data in AsyncStorage or plain React state — it MUST go through WatermelonDB for offline-first consistency.
- Do NOT hard-delete pricebook items — use soft delete (`is_active = false`). Quotes created later (Epic 2) will reference pricebook item IDs.
- Do NOT use floating-point dollars for prices — all money is integer cents.
- Do NOT make API calls for pricebook CRUD from the mobile app in this story — all operations are local WatermelonDB only. Server sync comes in Epic 6.
- Do NOT create the pricebook picker as a standalone screen/route — it should be a reusable modal component that can be embedded in the quote creation flow (Epic 2).
- Do NOT skip the idempotency check in `seedPricebook` — if a user force-closes during onboarding and re-opens, seeding should not create duplicates.
- Do NOT install additional UI libraries (NativeWind, etc.) — use React Native's built-in `StyleSheet` consistent with Stories 1.2 and 1.3.
- Do NOT create WatermelonDB `@relation` decorators pointing to accounts — the account model is not in WatermelonDB yet. Store `account_id` as a plain string field.

### Dependencies

- No new npm packages needed for this story. WatermelonDB is already installed (Story 1.1). JSON imports work natively in React Native/Metro.

### Existing Files Modified

- `apps/mobile/src/db/schema.ts` — add `pricebook_items` table schema
- `apps/mobile/src/db/migrations.ts` — add migration for pricebook_items table
- `apps/mobile/src/db/index.ts` — register PricebookItem model
- `apps/mobile/app/(auth)/onboarding.tsx` — add pricebook seeding after profile save
- `apps/mobile/app/(tabs)/more/index.tsx` — add "Pricebook" navigation link
- `apps/api/prisma/schema.prisma` — add pricebook_items table and UnitType enum
- `packages/shared/src/index.ts` — export pricebook types

### New Files Created

- `apps/mobile/src/data/pricebooks/hvac.json` — HVAC pricebook template (30-40 items)
- `apps/mobile/src/data/pricebooks/plumbing.json` — Plumbing pricebook template (30-40 items)
- `apps/mobile/src/data/pricebooks/electrical.json` — Electrical pricebook template (30-40 items)
- `apps/mobile/src/db/models/pricebook-item.ts` — WatermelonDB model
- `apps/mobile/src/services/pricebook-service.ts` — Pricebook seeding logic
- `apps/mobile/src/services/pricebook-service.test.ts` — Seeding tests
- `apps/mobile/app/(tabs)/more/pricebook.tsx` — Pricebook management screen
- `apps/mobile/src/components/pricebook/pricebook-item-form.tsx` — Add/edit form component
- `apps/mobile/src/components/pricebook/pricebook-picker.tsx` — Category-grouped item picker for quotes
- `apps/mobile/src/hooks/use-pricebook.ts` — WatermelonDB observable hook
- `packages/shared/src/types/pricebook.ts` — PricebookItem, UnitType types

### Project Structure Notes

All code lives under `mvps/field-service-management/src/`. File layout:

```
mvps/field-service-management/src/
├── packages/shared/src/
│   ├── types/pricebook.ts               # NEW: PricebookItem, UnitType
│   └── index.ts                         # Updated: export pricebook types
├── apps/api/
│   └── prisma/
│       └── schema.prisma                # Updated: pricebook_items table, UnitType enum
├── apps/mobile/
│   ├── app/
│   │   ├── (auth)/
│   │   │   └── onboarding.tsx           # Updated: add seedPricebook() call
│   │   └── (tabs)/more/
│   │       ├── index.tsx                # Updated: add "Pricebook" link
│   │       └── pricebook.tsx            # NEW: Pricebook management screen
│   └── src/
│       ├── data/pricebooks/
│       │   ├── hvac.json                # NEW: HVAC template data
│       │   ├── plumbing.json            # NEW: Plumbing template data
│       │   └── electrical.json          # NEW: Electrical template data
│       ├── db/
│       │   ├── schema.ts               # Updated: add pricebook_items table
│       │   ├── migrations.ts           # Updated: add migration step
│       │   ├── index.ts                # Updated: register PricebookItem model
│       │   └── models/
│       │       └── pricebook-item.ts   # NEW: WatermelonDB model
│       ├── services/
│       │   ├── pricebook-service.ts    # NEW: seeding logic
│       │   └── pricebook-service.test.ts # NEW: tests
│       ├── hooks/
│       │   └── use-pricebook.ts        # NEW: observable hook
│       └── components/pricebook/
│           ├── pricebook-item-form.tsx  # NEW: add/edit form
│           └── pricebook-picker.tsx     # NEW: category picker for quotes
```

### References

- [Source: planning/architecture.md#Data Model] — pricebook_items table schema (account_id, category, name, description, unit_price, unit_type, is_template)
- [Source: planning/architecture.md#Data Architecture] — WatermelonDB for offline-first mobile data, all mobile CRUD through WatermelonDB
- [Source: planning/architecture.md#Naming Patterns] — snake_case DB, camelCase code, kebab-case files
- [Source: planning/architecture.md#Format Patterns] — Money as integer cents, UUIDs for IDs
- [Source: planning/architecture.md#Complete Project Directory Structure] — pricebook data in src/data/pricebooks/, models in src/db/models/
- [Source: planning/architecture.md#Frontend Architecture (Mobile)] — WatermelonDB observables, feature-based organization
- [Source: planning/epics.md#Story 1.4] — Acceptance criteria and FR coverage (FR1, FR8)
- [Source: stories/1-1-initialize-monorepo-and-project-scaffolding.md] — WatermelonDB setup, shared types package, trade-types.ts constants
- [Source: stories/1-2-user-registration-and-authentication.md] — AuthContext with user/account data, API client setup
- [Source: stories/1-3-business-profile-setup-and-onboarding.md] — Onboarding screen, trade selection, no WatermelonDB for accounts, StyleSheet usage

## Dev Agent Record

### Agent Model Used

### Debug Log References

### Completion Notes List

### File List
