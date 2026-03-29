# Story 1.4: Trade-Specific Pricebook Templates

Status: done

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

- [x] Task 1: Create pricebook JSON template data files (AC: #1, #2, #3)
  - [x] 1.1: Create `apps/mobile/src/data/pricebooks/hvac.json` — 36 HVAC items across 6 categories with market-accurate pricing in cents.
  - [x] 1.2: Create `apps/mobile/src/data/pricebooks/plumbing.json` — 34 plumbing items across 6 categories with realistic pricing.
  - [x] 1.3: Create `apps/mobile/src/data/pricebooks/electrical.json` — 37 electrical items across 6 categories with realistic pricing.

- [x] Task 2: Create WatermelonDB pricebook_items model and schema (AC: #1, #2, #3, #4, #5)
  - [x] 2.1: Add `pricebook_items` table to schema.ts with all required columns. Schema version bumped to 2.
  - [x] 2.2: Create PricebookItem WatermelonDB model with @text, @field, @readonly @date decorators.
  - [x] 2.3: Register PricebookItem model in db/index.ts modelClasses array.
  - [x] 2.4: Add migration step (toVersion: 2) with createTable for pricebook_items.

- [x] Task 3: Create pricebook seeding service (AC: #1, #2, #3)
  - [x] 3.1: Create seedPricebook() function with idempotency check, batch write, and JSON template loading via require().
  - [x] 3.2: Write 7 tests: seeds each trade type (30-40 items), correct fields (integer cents, valid unit types), idempotency, account_id assignment.

- [x] Task 4: Integrate pricebook loading into onboarding flow (AC: #1, #2, #3)
  - [x] 4.1: Updated onboarding.tsx to call seedPricebook() after profile save. Shows "Setting up your pricebook..." loading indicator. Seeding failure is non-blocking (logs error, proceeds).
  - [x] 4.2: Access database via useDatabase() hook from DatabaseContext.

- [x] Task 5: Create pricebook management screen (AC: #4)
  - [x] 5.1: Created pricebook.tsx screen with SectionList grouped by category, showing name, description, formatted price, unit type.
  - [x] 5.2: Created pricebook-item-form.tsx with category autocomplete, name/description/price/unitType fields, dollar-to-cents conversion, validation.
  - [x] 5.3: Added FAB (+) button on pricebook screen that opens add form modal.
  - [x] 5.4: Tap on item opens edit form pre-populated with existing values.
  - [x] 5.5: Long-press triggers soft delete (is_active = false) with confirmation alert.
  - [x] 5.6: Added "Pricebook" navigation link below "Business Profile" in more/index.tsx. Added pricebook route to more/_layout.tsx.

- [x] Task 6: Create pricebook picker component for quote creation (AC: #5)
  - [x] 6.1: Created pricebook-picker.tsx modal with SectionList grouped by category, search bar filtering by name, onSelect callback. Only shows is_active=true items.
  - [x] 6.2: Created use-pricebook.ts hook using WatermelonDB Q.where('is_active', true) and Q.sortBy() with observable subscription.

- [x] Task 7: Create API endpoint for pricebook sync (AC: #1, #2, #3)
  - [x] 7.1: Added PricebookItem model and UnitType enum to Prisma schema with FK to accounts, index on account_id.
  - [x] 7.2: Migration not run (no database available) — schema is ready for `npx prisma migrate dev --name add-pricebook-items`.
  - [x] 7.3: Created prisma/seed.ts with HVAC, plumbing, electrical template data marked with is_template=true. Added prisma seed config to package.json.

- [x] Task 8: Update shared types (AC: all)
  - [x] 8.1: Created packages/shared/src/types/pricebook.ts with PricebookItem interface, UnitType enum (EACH, HOUR, FLAT), PricebookCategory type.
  - [x] 8.2: Updated packages/shared/src/index.ts to export PricebookItem, PricebookCategory types and UnitType enum.
  - [x] 8.3: Added UnitType enum to Prisma schema matching shared TypeScript enum values.

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
Claude Opus 4.6

### Debug Log References
- All 7 pricebook-service tests pass (seedPricebook for HVAC/Plumbing/Electrical, field validation, idempotency, account_id, unit types)
- All 39 API tests pass (no regressions)
- Prisma migration not run (no database available) — schema ready for migration

### Completion Notes List
- Implemented all 8 tasks covering shared types, JSON templates, WatermelonDB model/schema/migration, seeding service with tests, onboarding integration, pricebook management screen with CRUD, pricebook picker for quotes, Prisma schema, and seed data.
- Trade-specific pricebooks: HVAC (36 items), Plumbing (34 items), Electrical (37 items) — all with realistic market pricing in integer cents.
- All money stored as integer cents per architecture. Display uses centsToDollars() from shared utils.
- Soft delete pattern (is_active=false) used for item removal to preserve quote references.
- Pricebook seeding is idempotent — checks existingCount > 0 before seeding.
- Onboarding pricebook seeding failure is non-blocking — logs error and proceeds.
- Jest test framework set up for mobile app (ts-jest with decorator support).
- usePricebook hook uses WatermelonDB observable queries for reactive UI updates.

### File List

**New Files:**
- `apps/mobile/src/data/pricebooks/hvac.json`
- `apps/mobile/src/data/pricebooks/plumbing.json`
- `apps/mobile/src/data/pricebooks/electrical.json`
- `apps/mobile/src/db/models/pricebook-item.ts`
- `apps/mobile/src/services/pricebook-service.ts`
- `apps/mobile/src/services/pricebook-service.test.ts`
- `apps/mobile/src/hooks/use-pricebook.ts`
- `apps/mobile/src/components/pricebook/pricebook-item-form.tsx`
- `apps/mobile/src/components/pricebook/pricebook-picker.tsx`
- `apps/mobile/app/(tabs)/more/pricebook.tsx`
- `apps/api/prisma/seed.ts`
- `apps/mobile/jest.config.js`
- `packages/shared/src/types/pricebook.ts`

**Modified Files:**
- `apps/mobile/src/db/schema.ts` — added pricebook_items table, version 1 -> 2
- `apps/mobile/src/db/migrations.ts` — added migration to version 2
- `apps/mobile/src/db/index.ts` — registered PricebookItem model
- `apps/mobile/app/(auth)/onboarding.tsx` — added seedPricebook call after profile save
- `apps/mobile/app/(tabs)/more/index.tsx` — added Pricebook navigation link
- `apps/mobile/app/(tabs)/more/_layout.tsx` — added pricebook route
- `apps/mobile/package.json` — added jest/ts-jest devDeps, updated test script
- `apps/api/prisma/schema.prisma` — added UnitType enum, PricebookItem model
- `apps/api/package.json` — added db:migrate, db:seed scripts, prisma seed config
- `packages/shared/src/index.ts` — export pricebook types

