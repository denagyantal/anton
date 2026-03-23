# Story 1.1: Initialize Monorepo and Project Scaffolding

Status: ready-for-dev

## Story

As a developer,
I want the project initialized as a monorepo with mobile app, API server, web dashboard, and shared types package,
so that all subsequent development has a consistent, working foundation.

## Acceptance Criteria

1. **Given** a fresh project checkout, **When** `npm install` is run at the monorepo root, **Then** all four packages (`apps/mobile`, `apps/api`, `apps/web`, `packages/shared`) install their dependencies successfully.

2. **Given** the monorepo is initialized, **When** TypeScript compilation is run across all packages, **Then** all packages compile without errors using strict mode and shared `tsconfig.base.json`.

3. **Given** the mobile app package exists, **When** the Expo development server is started, **Then** the app launches successfully in Expo Go on iOS and Android simulators.

4. **Given** the API server package exists, **When** the Express server is started, **Then** it responds to a health check endpoint at `GET /api/v1/health` with `200 OK`.

5. **Given** the shared package exists, **When** types are imported from `@field-service/shared` in any other package, **Then** TypeScript resolves the imports correctly with full type checking.

6. **Given** the project scaffolding is complete, **When** Prisma is initialized in the API package, **Then** a `schema.prisma` file exists with PostgreSQL provider configuration and the Supabase connection string references an environment variable (`DATABASE_URL`).

7. **Given** the mobile app is scaffolded, **When** WatermelonDB is configured, **Then** the database initializes on app launch with an empty schema ready for model definitions.

## Tasks / Subtasks

- [ ] Task 1: Initialize monorepo root with npm workspaces (AC: #1, #2)
  - [ ] 1.1: Create root `package.json` with npm workspaces config pointing to `apps/*` and `packages/*`
  - [ ] 1.2: Create root `tsconfig.base.json` with strict mode, target ES2022, module NodeNext, path aliases
  - [ ] 1.3: Create root `.gitignore` (node_modules, dist, .env, .expo, android/, ios/, .next/, prisma/*.db)
  - [ ] 1.4: Create root `.nvmrc` with Node 20 LTS version
  - [ ] 1.5: Add root ESLint config (flat config format) + Prettier config
  - [ ] 1.6: Add root scripts: `build`, `lint`, `type-check`, `test` across all workspaces

- [ ] Task 2: Create shared types package `packages/shared` (AC: #2, #5)
  - [ ] 2.1: Create `packages/shared/package.json` with name `@field-service/shared`, main/types entry points
  - [ ] 2.2: Create `packages/shared/tsconfig.json` extending `../../tsconfig.base.json`
  - [ ] 2.3: Create `packages/shared/src/index.ts` barrel export
  - [ ] 2.4: Create placeholder type files: `src/types/api.ts` (ApiResponse, ApiError, PaginationMeta), `src/types/account.ts`, `src/types/customer.ts`, `src/types/quote.ts`, `src/types/job.ts`, `src/types/invoice.ts`, `src/types/schedule.ts`, `src/types/sync.ts`, `src/types/quickbooks.ts`
  - [ ] 2.5: Create `src/constants/error-codes.ts`, `src/constants/job-statuses.ts`, `src/constants/trade-types.ts` with enum stubs
  - [ ] 2.6: Create `src/utils/money.ts` (cents-to-dollars and dollars-to-cents), `src/utils/dates.ts` (ISO helpers)
  - [ ] 2.7: Verify package compiles with `tsc --noEmit` and exports resolve from other workspaces

- [ ] Task 3: Scaffold API server `apps/api` (AC: #4, #6)
  - [ ] 3.1: Create `apps/api/package.json` with Express, Prisma, TypeScript, ts-node, dotenv deps
  - [ ] 3.2: Create `apps/api/tsconfig.json` extending `../../tsconfig.base.json` with outDir `./dist`
  - [ ] 3.3: Create `apps/api/.env.example` with `DATABASE_URL`, `PORT`, `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`, `STRIPE_SECRET_KEY`, `TWILIO_ACCOUNT_SID`, `TWILIO_AUTH_TOKEN`, `JWT_SECRET`
  - [ ] 3.4: Create `apps/api/src/index.ts` — Express app with JSON body parser, CORS, and health route
  - [ ] 3.5: Create `apps/api/src/config/env.ts` — validate required env vars at startup
  - [ ] 3.6: Create `apps/api/src/middleware/error-handler.ts` — global error handler returning `{ error: { code, message, status } }` format
  - [ ] 3.7: Create `apps/api/src/middleware/request-logger.ts` — structured JSON request logging
  - [ ] 3.8: Create `apps/api/src/utils/error.ts` — AppError class (`code`, `message`, `status`)
  - [ ] 3.9: Create health route at `GET /api/v1/health` returning `{ data: { status: "ok", timestamp: <ISO> } }`
  - [ ] 3.10: Init Prisma: `npx prisma init` → `prisma/schema.prisma` with PostgreSQL provider, `env("DATABASE_URL")`
  - [ ] 3.11: Add dev/build/start scripts to `apps/api/package.json`
  - [ ] 3.12: Write health endpoint test (`apps/api/src/index.test.ts`) using Jest + Supertest

- [ ] Task 4: Scaffold mobile app `apps/mobile` (AC: #3, #7)
  - [ ] 4.1: Run `npx create-expo-app@latest apps/mobile --template tabs` (Expo Router tabs template)
  - [ ] 4.2: Update `apps/mobile/package.json` name to `@field-service/mobile`, add workspace dep on `@field-service/shared`
  - [ ] 4.3: Create/update `apps/mobile/tsconfig.json` extending `../../tsconfig.base.json` with Expo-specific JSX settings
  - [ ] 4.4: Install WatermelonDB: `@nozbe/watermelondb` and `@nozbe/with-observables`, configure Babel plugin
  - [ ] 4.5: Create `apps/mobile/src/db/schema.ts` — empty WatermelonDB schema (version 1, no tables yet)
  - [ ] 4.6: Create `apps/mobile/src/db/index.ts` — database initialization with `Database` from WatermelonDB using LokiJSAdapter (for dev) / SQLiteAdapter (for native)
  - [ ] 4.7: Create `apps/mobile/src/db/migrations.ts` — empty migrations array
  - [ ] 4.8: Wire database init into app root layout (`app/_layout.tsx`) via DatabaseContext provider
  - [ ] 4.9: Create `apps/mobile/src/contexts/database-context.tsx` — React context providing WatermelonDB database instance
  - [ ] 4.10: Create `apps/mobile/.env.example` with `EXPO_PUBLIC_API_URL`, `EXPO_PUBLIC_SUPABASE_URL`, `EXPO_PUBLIC_SUPABASE_ANON_KEY`
  - [ ] 4.11: Verify Expo dev server starts and renders the default tab screen

- [ ] Task 5: Scaffold web dashboard `apps/web` (AC: #2)
  - [ ] 5.1: Run `npx create-next-app@latest apps/web --typescript --tailwind --app --src-dir`
  - [ ] 5.2: Update `apps/web/package.json` name to `@field-service/web`, add workspace dep on `@field-service/shared`
  - [ ] 5.3: Update `apps/web/tsconfig.json` to extend `../../tsconfig.base.json` (merge with Next.js required settings)
  - [ ] 5.4: Create `apps/web/.env.example` with `NEXT_PUBLIC_API_URL`, `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`
  - [ ] 5.5: Clean default Next.js boilerplate — minimal `src/app/page.tsx` with "Field Service Management Dashboard" heading
  - [ ] 5.6: Verify `next dev` runs and page renders

- [ ] Task 6: Verify full monorepo integration (AC: #1, #2, #5)
  - [ ] 6.1: Run `npm install` from root — all workspaces resolve without errors
  - [ ] 6.2: Run `npm run type-check` from root — all packages pass TypeScript strict compilation
  - [ ] 6.3: Verify `@field-service/shared` types import correctly in `apps/api`, `apps/mobile`, and `apps/web`
  - [ ] 6.4: Run `npm test` from root — health endpoint test passes
  - [ ] 6.5: Verify no circular dependencies between packages

## Dev Notes

### Architecture Compliance

- **Monorepo tool**: npm workspaces (NOT yarn, pnpm, Nx, or Turborepo). Root `package.json` with `"workspaces": ["apps/*", "packages/*"]`.
- **TypeScript**: Strict mode required in `tsconfig.base.json`. Set `"strict": true`, `"noUncheckedIndexedAccess": true`. No `any` types, no `@ts-ignore`.
- **Node version**: 20 LTS.
- **Package naming**: `@field-service/shared`, `@field-service/mobile`, `@field-service/api`, `@field-service/web`.

### File Naming Conventions

- Source files: `kebab-case.ts` (e.g., `error-handler.ts`, `sync-service.ts`)
- React components: `PascalCase.tsx` (only when the file exports a React component as primary export)
- Test files: co-located with source, suffix `.test.ts` / `.test.tsx`
- Config files at package root, not nested in `src/`

### API Server Specifics

- Express with JSON body parser and CORS enabled.
- All routes under `/api/v1/` prefix.
- Health endpoint: `GET /api/v1/health` returns `{ "data": { "status": "ok", "timestamp": "2026-03-23T14:30:00Z" } }`.
- Error responses: `{ "error": { "code": "UPPER_SNAKE_CASE", "message": "Human-readable", "status": 404 } }`.
- Use `AppError` class in `src/utils/error.ts` for custom errors.
- Prisma schema: `provider = "postgresql"`, `url = env("DATABASE_URL")`. Do NOT define any models yet — just the provider config.

### Mobile App Specifics

- Use Expo SDK 52+ with Expo Router (file-based routing).
- WatermelonDB with LokiJSAdapter for development/Expo Go, SQLiteAdapter for native builds.
- Empty schema (version 1) with no tables — models will be added in later stories.
- Database initialization happens in `_layout.tsx` via `DatabaseContext`.
- Do NOT install NativeWind yet — that comes with UI component stories.

### Web Dashboard Specifics

- Next.js with App Router, TypeScript, Tailwind CSS, `src/` directory structure.
- Minimal scaffold — just a landing page. Full dashboard pages come in Epic 8.

### Shared Package Specifics

- All type files should export TypeScript interfaces/types only — no runtime code in type files.
- `src/utils/money.ts`: implement `centsTodollars(cents: number): string` and `dollarsToCents(dollars: number): number`. Money is ALWAYS stored as integer cents.
- `src/utils/dates.ts`: implement `toISOString(date: Date): string` and `parseISO(iso: string): Date`. Dates are ALWAYS ISO 8601 UTC strings.
- `src/constants/trade-types.ts`: `enum TradeType { HVAC = 'HVAC', PLUMBING = 'PLUMBING', ELECTRICAL = 'ELECTRICAL' }`.
- `src/constants/job-statuses.ts`: `enum JobStatus { Quoted = 'QUOTED', Scheduled = 'SCHEDULED', InProgress = 'IN_PROGRESS', Complete = 'COMPLETE', Invoiced = 'INVOICED' }`.
- `src/constants/error-codes.ts`: Define common codes like `UNAUTHORIZED`, `NOT_FOUND`, `VALIDATION_ERROR`, `SYNC_CONFLICT`.

### Key Anti-Patterns to Avoid

- Do NOT use `create-react-app` — mobile is Expo, web is Next.js.
- Do NOT add Redux, Zustand, or any global state library.
- Do NOT set up Supabase client connections yet — that's Story 1.2 (auth).
- Do NOT install Stripe, Twilio, or QuickBooks SDKs yet — those are later epics.
- Do NOT create database models/tables in Prisma or WatermelonDB — only provider config and empty schema.
- Do NOT create CI/CD workflows yet — focus on local dev experience.
- Do NOT create a Dockerfile for the API yet — local development only.

### Testing Setup

- Jest as test runner for all packages.
- Supertest for API endpoint tests.
- Co-locate tests next to source files with `.test.ts` suffix.
- For this story: one test file for the health endpoint is sufficient to verify the test setup works.

### Project Structure Notes

The output directory for all code is `mvps/field-service-management/src/`. The full monorepo lives under this path:

```
mvps/field-service-management/src/
├── package.json                    # Monorepo root
├── tsconfig.base.json
├── .gitignore
├── .nvmrc
├── packages/
│   └── shared/
│       ├── package.json
│       ├── tsconfig.json
│       └── src/
│           ├── index.ts
│           ├── types/              # Type-only files
│           ├── constants/          # Enums and constants
│           └── utils/              # money.ts, dates.ts
├── apps/
│   ├── mobile/
│   │   ├── package.json
│   │   ├── app.json
│   │   ├── tsconfig.json
│   │   ├── app/                    # Expo Router
│   │   │   └── _layout.tsx
│   │   └── src/
│   │       ├── db/
│   │       │   ├── schema.ts
│   │       │   ├── index.ts
│   │       │   └── migrations.ts
│   │       └── contexts/
│   │           └── database-context.tsx
│   ├── api/
│   │   ├── package.json
│   │   ├── tsconfig.json
│   │   ├── .env.example
│   │   ├── prisma/
│   │   │   └── schema.prisma
│   │   └── src/
│   │       ├── index.ts
│   │       ├── index.test.ts
│   │       ├── config/
│   │       │   └── env.ts
│   │       ├── middleware/
│   │       │   ├── error-handler.ts
│   │       │   └── request-logger.ts
│   │       └── utils/
│   │           └── error.ts
│   └── web/
│       ├── package.json
│       ├── tsconfig.json
│       ├── next.config.js
│       ├── tailwind.config.js
│       ├── .env.example
│       └── src/
│           └── app/
│               ├── layout.tsx
│               ├── page.tsx
│               └── globals.css
└── .gitignore
```

### References

- [Source: planning/architecture.md#Starter Template Evaluation] — Expo + Express + Next.js + npm workspaces
- [Source: planning/architecture.md#Data Architecture] — WatermelonDB + PostgreSQL via Supabase + Prisma 6
- [Source: planning/architecture.md#Complete Project Directory Structure] — Full file tree reference
- [Source: planning/architecture.md#Naming Patterns] — File, code, and database naming conventions
- [Source: planning/architecture.md#Implementation Patterns & Consistency Rules] — Enforcement guidelines
- [Source: planning/architecture.md#API & Communication Patterns] — REST response format, error format
- [Source: planning/epics.md#Story 1.1] — Acceptance criteria and story definition

## Dev Agent Record

### Agent Model Used

### Debug Log References

### Completion Notes List

### File List
