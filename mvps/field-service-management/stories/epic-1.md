# Epic 1: Project Foundation & User Onboarding

Status: ready-for-dev

## Story

As a solo tradesperson (HVAC, plumbing, or electrical),
I want to download the app, sign up, configure my business, and have a customized pricebook ready,
So that I can go from install to work-ready in under an hour and begin creating quotes immediately.

**FRs covered:** FR40 (signup), FR41 (business profile), FR8 (pricebook customization)

This epic establishes the monorepo, mobile app scaffold, API server, authentication, offline-first data layer, and onboarding flow that ALL subsequent epics build upon. It contains 4 stories that must be implemented in order.

---

## Story 1.1: Initialize Monorepo and Project Scaffolding

### Acceptance Criteria

1. **Given** a fresh project checkout, **When** `npm install` is run at the monorepo root, **Then** all four packages (`apps/mobile`, `apps/api`, `apps/web`, `packages/shared`) install dependencies successfully.

2. **Given** the monorepo is initialized, **When** TypeScript compilation runs across all packages, **Then** all compile without errors using strict mode and shared `tsconfig.base.json`.

3. **Given** the mobile app package exists, **When** the Expo dev server starts, **Then** the app launches in Expo Go on iOS and Android simulators.

4. **Given** the API server package exists, **When** Express server starts, **Then** `GET /api/v1/health` responds with `200 OK`.

5. **Given** the shared package exists, **When** types are imported from `@field-service/shared` in any other package, **Then** TypeScript resolves imports with full type checking.

6. **Given** the project scaffolding is complete, **When** Prisma is initialized in the API package, **Then** `schema.prisma` exists with PostgreSQL provider and Supabase connection string from env var.

7. **Given** the mobile app is scaffolded, **When** WatermelonDB is configured, **Then** the database initializes on app launch with an empty schema ready for model definitions.

### Tasks

- [ ] **Task 1.1.1: Create monorepo root** (AC: #1, #2)
  - [ ] Initialize `package.json` with npm workspaces: `["packages/*", "apps/*"]`
  - [ ] Create `tsconfig.base.json` with strict mode, path aliases
  - [ ] Add root `.gitignore` (node_modules, .env, build artifacts, ios/android)
  - [ ] Add root `.env.example` with all required env vars documented
  - [ ] Add root ESLint + Prettier config

- [ ] **Task 1.1.2: Create shared types package** (AC: #5)
  - [ ] Init `packages/shared/package.json` with name `@field-service/shared`
  - [ ] Create `packages/shared/tsconfig.json` extending base
  - [ ] Create type files: `src/types/quote.ts`, `job.ts`, `invoice.ts`, `customer.ts`, `schedule.ts`, `account.ts`, `sync.ts`, `quickbooks.ts`, `api.ts`
  - [ ] Create constants: `src/constants/job-statuses.ts`, `trade-types.ts`, `error-codes.ts`
  - [ ] Create utils: `src/utils/money.ts` (cents ↔ dollars), `dates.ts` (ISO helpers), `validation.ts` (zod schemas)
  - [ ] Create `src/index.ts` barrel export

- [ ] **Task 1.1.3: Scaffold Expo mobile app** (AC: #3, #7)
  - [ ] Run `npx create-expo-app@latest` in `apps/mobile` with tabs template
  - [ ] Configure `tsconfig.json` extending base with path alias to `@field-service/shared`
  - [ ] Install and configure WatermelonDB (`@nozbe/watermelondb`, `@nozbe/with-observables`)
  - [ ] Create empty `src/db/schema.ts` and `src/db/index.ts` with database initialization
  - [ ] Create `src/db/migrations.ts` with initial empty migration
  - [ ] Install NativeWind and configure Tailwind for React Native
  - [ ] Verify app launches in Expo Go

- [ ] **Task 1.1.4: Scaffold Express API server** (AC: #4, #6)
  - [ ] Init `apps/api/package.json`, install Express, Prisma, `@prisma/client`, TypeScript, zod
  - [ ] Create `tsconfig.json` extending base
  - [ ] Run `npx prisma init` — configure for PostgreSQL with `DATABASE_URL` env var
  - [ ] Create `src/index.ts` entry point with Express app, CORS, JSON body parser
  - [ ] Create `GET /api/v1/health` endpoint returning `{ "data": { "status": "ok" } }`
  - [ ] Create `src/middleware/error-handler.ts` with global error handler
  - [ ] Create `src/middleware/request-logger.ts` with structured JSON logging
  - [ ] Create `src/utils/error.ts` with `AppError` class
  - [ ] Create `.env.example` with `DATABASE_URL`, `PORT`, `SUPABASE_URL`, `SUPABASE_SERVICE_KEY`
  - [ ] Create `Dockerfile` for Railway deployment

- [ ] **Task 1.1.5: Scaffold Next.js web dashboard** (AC: #2)
  - [ ] Run `npx create-next-app@latest` in `apps/web` with TypeScript, Tailwind, App Router, src-dir
  - [ ] Configure `tsconfig.json` extending base with path alias to `@field-service/shared`
  - [ ] Create placeholder `src/app/page.tsx` with login redirect
  - [ ] Create `.env.example` with `NEXT_PUBLIC_API_URL`

- [ ] **Task 1.1.6: Verify monorepo integration** (AC: #1, #2)
  - [ ] Run `npm install` from root — all workspaces resolve
  - [ ] Run `npx tsc --build` across all packages — zero errors
  - [ ] Verify `@field-service/shared` imports work from mobile, api, and web
  - [ ] Add npm scripts at root: `dev:mobile`, `dev:api`, `dev:web`, `build`, `lint`, `test`

---

## Story 1.2: User Registration and Authentication

### Acceptance Criteria

1. **Given** the app is launched for the first time, **When** a user enters email, phone, password and taps "Sign Up", **Then** account created via Supabase Auth and user logged in with JWT stored in device keychain.

2. **Given** a registered user opens the app, **When** they enter email/password and tap "Log In", **Then** authenticated and directed to main app with account data loaded.

3. **Given** a user is logged in, **When** 30 days pass without activity, **Then** refresh token expires and re-login required (NFR9).

4. **Given** a user is logged in, **When** auth token transmitted to API, **Then** all communication uses TLS 1.3 (NFR7) and JWT validated via Supabase Auth middleware.

5. **Given** invalid email or weak password entered, **When** user taps "Sign Up", **Then** specific inline validation errors displayed and signup prevented.

6. **Given** API receives unauthenticated request, **When** no valid JWT in Authorization header, **Then** server returns `401` with code `UNAUTHORIZED` in standard error format.

### Tasks

- [ ] **Task 1.2.1: Configure Supabase Auth** (AC: #1, #3)
  - [ ] Set up Supabase project (or document manual setup steps)
  - [ ] Configure email/password auth provider in Supabase dashboard
  - [ ] Set JWT access token expiry to 1 hour, refresh token to 30 days
  - [ ] Add `SUPABASE_URL` and `SUPABASE_ANON_KEY` to mobile `.env.example`

- [ ] **Task 1.2.2: Create auth service on mobile** (AC: #1, #2)
  - [ ] Create `src/services/auth-service.ts` wrapping Supabase Auth SDK
  - [ ] Implement `signUp(email, phone, password)` — creates user, stores JWT in secure storage (Expo SecureStore → iOS Keychain / Android Keystore)
  - [ ] Implement `signIn(email, password)` — authenticates, stores tokens
  - [ ] Implement `signOut()` — clears tokens
  - [ ] Implement `getSession()` — returns current session or null
  - [ ] Implement `refreshSession()` — auto-refresh with stored refresh token
  - [ ] Write tests for auth-service

- [ ] **Task 1.2.3: Create AuthContext provider** (AC: #2)
  - [ ] Create `src/contexts/auth-context.tsx` with `AuthProvider` and `useAuth` hook
  - [ ] Track state: `user`, `session`, `isLoading`, `isAuthenticated`
  - [ ] Auto-check session on app launch
  - [ ] Auto-refresh token on app foreground

- [ ] **Task 1.2.4: Create auth screens** (AC: #1, #2, #5)
  - [ ] Create `app/(auth)/login.tsx` — email + password form with validation
  - [ ] Create `app/(auth)/signup.tsx` — email + phone + password form with validation
  - [ ] Inline validation: email format, phone format, password strength (8+ chars, 1 upper, 1 number)
  - [ ] Show specific error messages (not raw Supabase errors)
  - [ ] On success: navigate to onboarding (new user) or tabs (existing user)

- [ ] **Task 1.2.5: Create auth gate in root layout** (AC: #2)
  - [ ] Update `app/_layout.tsx` to wrap app in `AuthProvider`
  - [ ] Redirect unauthenticated users to `(auth)/login`
  - [ ] Redirect authenticated users to `(tabs)/`
  - [ ] Show splash/loading screen during auth check

- [ ] **Task 1.2.6: API auth middleware** (AC: #4, #6)
  - [ ] Install `@supabase/supabase-js` in API package
  - [ ] Create `src/config/supabase.ts` — init Supabase admin client with service key
  - [ ] Create `src/middleware/auth.ts` — extract JWT from `Authorization: Bearer <token>`, verify via Supabase, attach `user` and `accountId` to request
  - [ ] Return `{ "error": { "code": "UNAUTHORIZED", "message": "...", "status": 401 } }` on failure
  - [ ] Apply middleware to all routes except health check and public customer-facing endpoints
  - [ ] Write integration test for auth middleware

- [ ] **Task 1.2.7: Prisma schema — accounts and team_members** (AC: #1)
  - [ ] Define `accounts` table in `schema.prisma` with all fields from data model
  - [ ] Define `team_members` table with FK to accounts and `auth_user_id` for Supabase
  - [ ] Define enums: `TradeType` (HVAC, PLUMBING, ELECTRICAL), `TeamRole` (OWNER, MEMBER)
  - [ ] Add RLS policies in Supabase dashboard for account isolation
  - [ ] Run `npx prisma migrate dev` to create initial migration
  - [ ] Create seed script placeholder at `prisma/seed.ts`

---

## Story 1.3: Business Profile Setup and Onboarding

### Acceptance Criteria

1. **Given** a user has just completed registration, **When** directed to onboarding, **Then** they see trade selection screen with three options: HVAC, Plumbing, Electrical.

2. **Given** user selects a trade type, **When** they proceed to next step, **Then** they can enter business name, upload logo (camera or gallery), enter license number, and set contact info.

3. **Given** user completes business profile form, **When** they save, **Then** account record created in WatermelonDB with `business_name`, `business_logo_url`, `license_number`, `contact_email`, `contact_phone`, `trade_type` persisted. Logo uploaded to Supabase Storage.

4. **Given** a user has completed onboarding, **When** they access settings later, **Then** they can view and edit all business profile fields.

5. **Given** the onboarding flow, **When** measuring total time from registration to profile completion, **Then** typical user completes in under 15 minutes.

### Tasks

- [ ] **Task 1.3.1: WatermelonDB models — account and team_member** (AC: #3)
  - [ ] Create `src/db/models/account.ts` — WatermelonDB Model with fields matching Prisma schema
  - [ ] Create `src/db/models/team-member.ts` — WatermelonDB Model
  - [ ] Update `src/db/schema.ts` — add `accounts` and `team_members` table schemas
  - [ ] Update `src/db/migrations.ts` — add migration step for these tables
  - [ ] Update `src/db/index.ts` — register models with database
  - [ ] Create `src/contexts/database-context.tsx` — `DatabaseProvider` wrapping WatermelonDB `DatabaseProvider`

- [ ] **Task 1.3.2: Create onboarding screens** (AC: #1, #2, #5)
  - [ ] Create `app/(auth)/onboarding.tsx` — multi-step onboarding flow
  - [ ] Step 1: Trade selection — 3 large cards (HVAC, Plumbing, Electrical) with icons
  - [ ] Step 2: Business profile form — business name (required), license number, contact email, contact phone
  - [ ] Step 3: Logo upload — camera capture or gallery pick with image preview
  - [ ] Progress indicator showing current step (1/3, 2/3, 3/3)
  - [ ] "Skip for now" option on logo upload step
  - [ ] Final "Get Started" button → navigate to `(tabs)/`

- [ ] **Task 1.3.3: Photo/logo service** (AC: #3)
  - [ ] Create `src/services/photo-service.ts`
  - [ ] Implement `capturePhoto()` — use Expo Camera/ImagePicker to capture from camera
  - [ ] Implement `pickFromGallery()` — use Expo ImagePicker to pick from gallery
  - [ ] Implement `compressImage(uri)` — resize to max 1200px width, 80% JPEG quality
  - [ ] Implement `uploadToStorage(uri, path)` — upload to Supabase Storage, return public URL
  - [ ] Handle offline case: store locally, queue upload for sync

- [ ] **Task 1.3.4: Supabase Storage setup** (AC: #3)
  - [ ] Create `logos` bucket in Supabase Storage (or document manual setup)
  - [ ] Configure public read access for logo bucket
  - [ ] Create `src/services/storage-service.ts` in API — Supabase Storage wrapper
  - [ ] API endpoint: `POST /api/v1/storage/upload` for file uploads (authenticated)

- [ ] **Task 1.3.5: Settings — business profile edit** (AC: #4)
  - [ ] Create `app/(tabs)/more/index.tsx` — settings menu
  - [ ] Create `app/(tabs)/more/business-profile.tsx` — edit form reusing onboarding components
  - [ ] Pre-fill with current account data from WatermelonDB
  - [ ] Save updates to WatermelonDB (sync handles server push)

---

## Story 1.4: Trade-Specific Pricebook Templates

### Acceptance Criteria

1. **Given** a user selects "HVAC" during onboarding, **When** pricebook template loads, **Then** local DB populated with HVAC items organized by categories (Diagnostics, Refrigerant, Motors, Capacitors, Installation) with default unit prices in cents.

2. **Given** a user selects "Plumbing", **When** pricebook template loads, **Then** plumbing items loaded (Drain Clearing, Pipe Repair, Fixture Installation, Water Heater) with pricing.

3. **Given** a user selects "Electrical", **When** pricebook template loads, **Then** electrical items loaded (Panel Upgrade, Outlet Installation, Wiring, Lighting, Breakers) with pricing.

4. **Given** a user has a loaded pricebook, **When** they navigate to pricebook settings, **Then** they can add new items, edit names/descriptions/prices, remove items, add or rename categories (FR8).

5. **Given** pricebook items exist in WatermelonDB, **When** user creates a quote, **Then** they can browse and select items by category.

### Tasks

- [ ] **Task 1.4.1: WatermelonDB pricebook model** (AC: #1, #2, #3)
  - [ ] Create `src/db/models/pricebook-item.ts` — fields: `account_id`, `category`, `name`, `description`, `unit_price` (cents), `unit_type` (EACH | HOUR | FLAT), `is_template`, `sort_order`
  - [ ] Update `src/db/schema.ts` — add `pricebook_items` table
  - [ ] Update `src/db/migrations.ts`
  - [ ] Register model in `src/db/index.ts`

- [ ] **Task 1.4.2: Prisma schema — pricebook_items** (AC: #1)
  - [ ] Add `pricebook_items` table to `schema.prisma` with all fields from data model
  - [ ] Add enum `UnitType` (EACH, HOUR, FLAT)
  - [ ] Run migration: `npx prisma migrate dev`

- [ ] **Task 1.4.3: Create trade pricebook JSON data** (AC: #1, #2, #3)
  - [ ] Create `src/data/pricebooks/hvac.json` — 15-25 items across 5+ categories, prices in cents
  - [ ] Create `src/data/pricebooks/plumbing.json` — 15-25 items across 5+ categories
  - [ ] Create `src/data/pricebooks/electrical.json` — 15-25 items across 5+ categories
  - [ ] Each item: `{ "category": "...", "name": "...", "description": "...", "unit_price": 9500, "unit_type": "EACH" }`
  - [ ] Prices should be realistic for US market (research common service prices)

- [ ] **Task 1.4.4: Pricebook loading during onboarding** (AC: #1, #2, #3)
  - [ ] After trade selection in onboarding, load corresponding JSON file
  - [ ] Batch-create `pricebook_item` records in WatermelonDB with `is_template: true`
  - [ ] Show loading state during import ("Setting up your pricebook...")
  - [ ] Log success count

- [ ] **Task 1.4.5: Pricebook management screen** (AC: #4)
  - [ ] Create `app/(tabs)/more/pricebook.tsx` — pricebook management screen
  - [ ] Display items grouped by category in expandable sections
  - [ ] "Add Item" button — form: name, description, unit price (dollars input → stored as cents), unit type, category (existing or new)
  - [ ] Swipe-to-edit or tap on item to edit
  - [ ] Swipe-to-delete or delete button with confirmation
  - [ ] "Add Category" option

- [ ] **Task 1.4.6: Create pricebook hooks** (AC: #5)
  - [ ] Create `src/hooks/use-pricebook.ts` — WatermelonDB observable query for pricebook items
  - [ ] `usePricebookByCategory()` — returns items grouped by category
  - [ ] `usePricebookSearch(query)` — filtered results for quote creation picker

- [ ] **Task 1.4.7: Prisma seed data** (AC: #1, #2, #3)
  - [ ] Update `prisma/seed.ts` — seed pricebook templates for all 3 trades
  - [ ] Templates should match the JSON files used on mobile
  - [ ] Mark seeded items as `is_template: true`

---

## Dev Notes

### Architecture Compliance — MUST FOLLOW

**Monorepo Structure:**
```
field-service-management/
├── package.json              # npm workspaces: ["packages/*", "apps/*"]
├── tsconfig.base.json        # shared strict TS config
├── packages/shared/          # @field-service/shared — types, constants, utils
├── apps/mobile/              # Expo (React Native) with Expo Router
├── apps/api/                 # Node.js + Express + Prisma
└── apps/web/                 # Next.js (App Router) + Tailwind
```

**Tech Stack (exact versions):**
- TypeScript 5.x strict mode — NO `any`, NO `@ts-ignore`
- Expo SDK 52+ with Expo Router (file-based routing)
- React Native 0.76+ / React 19
- WatermelonDB 0.27+ (SQLite-backed offline-first DB)
- NativeWind (Tailwind CSS for React Native)
- Node.js 20 LTS, Express, Prisma 6, PostgreSQL 16 via Supabase
- Next.js (App Router) + Tailwind CSS 4
- Supabase Auth (email/password, phone/OTP)
- Jest for all tests, co-located with source files (`*.test.ts`)

### Naming Conventions — MANDATORY

| Context | Convention | Example |
|---------|-----------|---------|
| DB tables | `snake_case`, plural | `pricebook_items`, `team_members` |
| DB columns | `snake_case` | `business_name`, `unit_price` |
| Foreign keys | `<table_singular>_id` | `account_id`, `customer_id` |
| API endpoints | `/api/v1/<plural-noun>` | `/api/v1/quotes` |
| API response fields | `camelCase` | `businessName`, `unitPrice` |
| Files | `kebab-case.ts` | `auth-service.ts`, `pricebook-item.ts` |
| React components | `PascalCase.tsx` | `QuoteCard.tsx` |
| Functions/vars | `camelCase` | `createQuote`, `accountId` |
| Constants | `UPPER_SNAKE_CASE` | `MAX_RETRY_ATTEMPTS` |
| Types/interfaces | `PascalCase` | `Quote`, `PricebookItem` |
| Enums | `PascalCase` name, `UPPER_SNAKE_CASE` values | `JobStatus.IN_PROGRESS` |
| Hooks | `use` + `camelCase` | `useAuth`, `usePricebook` |

### Data Rules — CRITICAL

- **Money:** Always stored as integer cents. Display formatting in UI only. `unit_price: 9500` = $95.00
- **Dates:** ISO 8601 UTC strings everywhere (`"2026-03-23T14:30:00Z"`). Never `Date` objects in API payloads.
- **IDs:** UUIDs (v4) for all entities. Never auto-increment integers.
- **API responses:** Always wrapped in `{ "data": ... }` or `{ "error": { "code": "...", "message": "...", "status": N } }`

### Offline-First Rules — CRITICAL

- ALL mobile data operations go through WatermelonDB — NEVER direct API calls for CRUD
- WatermelonDB IS the cache — all data available locally
- WatermelonDB observables for all data state — components re-render automatically on local data changes
- React Context ONLY for: `AuthContext`, `SyncContext`, `NetworkContext`, `DatabaseContext`
- No Redux/Zustand/MobX — WatermelonDB handles all data state

### Authentication Pattern

- Supabase Auth with email/password signup
- JWT: 1 hour access token, 30-day refresh token
- Tokens stored in Expo SecureStore (→ iOS Keychain / Android Keystore)
- API middleware: extract from `Authorization: Bearer <token>`, verify via Supabase
- Account-level access control (all team members see all data)
- Row Level Security (RLS) in PostgreSQL for account isolation

### API Error Handling Pattern

```typescript
class AppError extends Error {
  constructor(public code: string, message: string, public status: number) {
    super(message);
  }
}
// Usage: throw new AppError('QUOTE_NOT_FOUND', 'Quote not found', 404);
```

Never show raw errors to users. Mobile errors: save data locally + show friendly toast.

### File Organization Rules

- Feature-based organization with co-located tests
- One component per file
- `index.ts` only for re-exports from feature directories
- Config files at package root, not nested in `src/`
- Never import between feature folders — shared logic goes in `packages/shared/` or `services/`

### WatermelonDB Model Pattern

```typescript
import { Model } from '@nozbe/watermelondb';
import { field, text, date, readonly, relation } from '@nozbe/watermelondb/decorators';

export default class PricebookItem extends Model {
  static table = 'pricebook_items';
  static associations = {
    accounts: { type: 'belongs_to', key: 'account_id' },
  };

  @text('account_id') accountId!: string;
  @text('category') category!: string;
  @text('name') name!: string;
  @text('description') description!: string;
  @field('unit_price') unitPrice!: number; // cents
  @text('unit_type') unitType!: string;
  @field('is_template') isTemplate!: boolean;
  @field('sort_order') sortOrder!: number;
  @readonly @date('created_at') createdAt!: Date;
  @readonly @date('updated_at') updatedAt!: Date;
}
```

### Shared Types Pattern (packages/shared)

```typescript
// types/account.ts
export interface Account {
  id: string;
  businessName: string;
  businessLogoUrl: string | null;
  licenseNumber: string | null;
  contactEmail: string;
  contactPhone: string;
  tradeType: TradeType;
  quickbooksConnected: boolean;
  quickbooksRealmId: string | null;
  stripeAccountId: string | null;
  createdAt: string; // ISO 8601
  updatedAt: string;
}

export enum TradeType {
  HVAC = 'HVAC',
  PLUMBING = 'PLUMBING',
  ELECTRICAL = 'ELECTRICAL',
}

export enum TeamRole {
  OWNER = 'OWNER',
  MEMBER = 'MEMBER',
}
```

### Prisma Schema Pattern

```prisma
model Account {
  id               String   @id @default(uuid())
  business_name    String
  business_logo_url String?
  license_number   String?
  contact_email    String
  contact_phone    String
  trade_type       TradeType
  quickbooks_connected Boolean @default(false)
  quickbooks_realm_id  String?
  stripe_account_id    String?
  created_at       DateTime @default(now())
  updated_at       DateTime @updatedAt
  synced_at        DateTime?

  team_members     TeamMember[]
  customers        Customer[]
  pricebook_items  PricebookItem[]

  @@map("accounts")
}
```

### Project Structure Notes

All paths in this epic align with the architecture directory structure:
- `apps/mobile/app/(auth)/` — auth and onboarding screens
- `apps/mobile/src/db/models/` — WatermelonDB models
- `apps/mobile/src/services/` — auth, photo, API client services
- `apps/mobile/src/contexts/` — AuthContext, DatabaseContext
- `apps/mobile/src/hooks/` — data hooks
- `apps/mobile/src/data/pricebooks/` — JSON template files
- `apps/api/src/middleware/` — auth, error handler, request logger
- `apps/api/src/routes/auth.ts` — auth endpoints
- `apps/api/src/config/supabase.ts` — Supabase admin client
- `apps/api/prisma/schema.prisma` — database schema
- `packages/shared/src/types/` — shared type definitions
- `packages/shared/src/constants/` — enums and constants
- `packages/shared/src/utils/` — money, dates, validation utilities

### Testing Standards

- Jest for all tests
- Co-located: `auth-service.test.ts` next to `auth-service.ts`
- React Native Testing Library for mobile component tests
- Supertest for API endpoint tests
- Minimum: test auth service, auth middleware, health endpoint, pricebook loading
- No mocking of WatermelonDB in model tests — use WatermelonDB's test adapter

### Key Dependencies to Install

**Mobile (`apps/mobile`):**
- `@nozbe/watermelondb`, `@nozbe/with-observables`
- `@supabase/supabase-js`
- `expo-secure-store`
- `expo-image-picker`, `expo-camera`
- `nativewind`, `tailwindcss`
- `react-native-reanimated` (required by many RN libs)
- `zod` (validation)

**API (`apps/api`):**
- `express`, `@types/express`
- `prisma`, `@prisma/client`
- `@supabase/supabase-js`
- `zod` (request validation)
- `cors`, `helmet`
- `jest`, `supertest`, `ts-jest`

**Shared (`packages/shared`):**
- `zod`
- `typescript`

### Implementation Order

1. Story 1.1 first — monorepo, scaffolding, WatermelonDB, Prisma init
2. Story 1.2 second — auth (Supabase Auth, middleware, screens)
3. Story 1.3 third — onboarding flow, business profile, photo upload
4. Story 1.4 fourth — pricebook models, JSON data, management UI

Each story builds on the previous. Do NOT skip ahead.

### References

- [Source: mvps/field-service-management/planning/architecture.md#Starter Template Evaluation]
- [Source: mvps/field-service-management/planning/architecture.md#Data Architecture]
- [Source: mvps/field-service-management/planning/architecture.md#Authentication & Security]
- [Source: mvps/field-service-management/planning/architecture.md#Implementation Patterns & Consistency Rules]
- [Source: mvps/field-service-management/planning/architecture.md#Project Structure & Boundaries]
- [Source: mvps/field-service-management/planning/architecture.md#Data Model]
- [Source: mvps/field-service-management/planning/epics.md#Epic 1: Project Foundation & User Onboarding]
- [Source: mvps/field-service-management/planning/prd.md#FR40, FR41, FR8]

## Dev Agent Record

### Agent Model Used

### Debug Log References

### Completion Notes List

### File List
