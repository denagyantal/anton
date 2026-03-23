---
stepsCompleted: [1, 2, 3, 4, 5, 6, 7, 8]
inputDocuments: ["mvps/field-service-management/planning/prd.md", "mvps/field-service-management/planning/product-brief.md", "mvps/field-service-management/planning/market-research.md"]
workflowType: 'architecture'
project_name: 'Field Service Management for Solo/Micro Trades'
user_name: 'Root'
date: '2026-03-23'
lastStep: 8
status: 'complete'
completedAt: '2026-03-23'
---

# Architecture Decision Document

## Project Context Analysis

### Requirements Overview

**Functional Requirements:**

The PRD defines 49 functional requirements across 9 categories:

1. **Quoting & Estimates (FR1-FR8):** Quote creation from trade pricebooks, custom line items, photo attachments, branded PDF generation, SMS delivery, customer approval via link, quote duplication, pricebook customization.
2. **Scheduling & Dispatch (FR9-FR14):** Calendar CRUD with drag-and-drop, automated SMS reminders, dispatch board for multi-tech shops, job assignment, Google/Apple Calendar sync.
3. **Job Management (FR15-FR19):** Job lifecycle tracking (quoted → scheduled → in-progress → complete → invoiced), photo capture, digital signature, job notes, auto-invoice generation from quotes.
4. **Invoicing & Payments (FR20-FR26):** Branded invoices, SMS delivery with payment link, card payments on-site and remote, payment status tracking, partial payments, push notifications on payment.
5. **QuickBooks Integration (FR27-FR31):** OAuth connection, automatic sync of customers/invoices/payments, sync status dashboard, manual re-sync, duplicate prevention.
6. **Customer Management (FR32-FR35):** Contact CRUD, job history per customer, search/filter, CSV import.
7. **Offline Capabilities (FR36-FR39):** Full offline workflow, automatic sync on reconnection, conflict resolution, sync status display.
8. **User & Account Management (FR40-FR43):** Email/phone signup, business profile configuration, team member invites (unlimited, no extra cost), multi-device shared access.
9. **Web Dashboard (FR44-FR46):** Read-only schedule view, invoice/payment status, QuickBooks sync status for office partners.
10. **Notifications & Communication (FR47-FR49):** Push notifications for key events, SMS to customers for quotes/reminders/invoices/payments, configurable reminder timing.

**Non-Functional Requirements:**

- **Performance (NFR1-5):** Core actions < 2s on mid-range devices, cold start < 3s, offline ops < 500ms, sync within 30s of reconnection, SMS delivery < 60s.
- **Security (NFR6-10):** Encrypted local storage (platform-native), TLS 1.3, PCI-DSS via Stripe (no card data stored), 30-day token expiry, 30-day link expiry.
- **Scalability (NFR11-13):** 50K concurrent users, 1K sync ops/sec, 15K+ active accounts.
- **Reliability (NFR14-17):** 99.9% uptime, zero data loss on sync, 99.9%+ QuickBooks sync accuracy, automated alerting on sync failures.
- **Integration (NFR18-21):** QuickBooks API remediation < 48h, 98%+ SMS delivery via Twilio, Stripe for card payments, Google Calendar API v3 and Apple EventKit.

**Scale & Complexity:**

- Primary domain: Mobile-first field service management (iOS + Android + web dashboard)
- Complexity level: Low — standard CRUD, scheduling, payments, and accounting sync
- Estimated architectural components: ~12 major components
- Classification: Greenfield mobile app

### Technical Constraints & Dependencies

1. **Offline-first is non-negotiable.** The entire core workflow must function without connectivity. This is the single most impactful architectural constraint — it mandates local-first data storage with event-based sync.
2. **Cross-platform mobile required.** iOS 15+ and Android 12+ with feature parity from a shared codebase.
3. **Payment processing via Stripe.** PCI-DSS compliance delegated — no card data touches our servers or local storage.
4. **QuickBooks Online API integration.** OAuth 2.0, automatic sync, duplicate prevention. This is the #1 integration and #1 competitor complaint area.
5. **SMS as primary customer communication channel.** Twilio for quote delivery, appointment reminders, invoice/payment links.
6. **App size < 50MB.** Must be lightweight for mid-range Android devices.
7. **No tablet-specific layouts in MVP.** Smartphone-only, optimized for one-handed use.

### Cross-Cutting Concerns Identified

1. **Offline/sync architecture** — Touches every feature: quotes, jobs, invoices, payments, customers, scheduling.
2. **Authentication & multi-device access** — Shared account access for team members across devices.
3. **Push notifications** — Quote approvals, payment receipts, schedule changes, sync errors.
4. **SMS delivery** — Quotes, reminders, invoices, payment links to customers.
5. **PDF generation** — Branded quotes and invoices.
6. **Error handling & retry** — Sync failures, payment failures, SMS delivery failures.
7. **Data encryption** — At rest on device and in transit.

---

## Starter Template Evaluation

### Primary Technology Domain

**Mobile App (cross-platform)** with a backend API and companion web dashboard, based on PRD requirements analysis.

### Starter Options Considered

| Option | Pros | Cons |
|--------|------|------|
| **Expo (React Native)** | Mature ecosystem, OTA updates, large community, excellent offline libraries (WatermelonDB), shared JS/TS codebase with web dashboard | Native module bridging sometimes needed |
| **Flutter** | Single codebase for mobile+web, good performance, strong offline support | Dart ecosystem smaller, fewer accounting/payment integrations |
| **React Native CLI** | Full native control, no Expo limitations | More setup complexity, slower iteration |

### Selected Starter: Expo (React Native) with Expo Router

**Rationale for Selection:**

1. **React Native + Expo** provides the fastest path to iOS + Android with feature parity from a single TypeScript codebase.
2. **Expo SDK 52+** includes robust native module support (camera, location, notifications, calendar), OTA updates for rapid iteration, and EAS Build for app store submissions.
3. **TypeScript throughout** enables shared types between mobile app, backend API, and web dashboard.
4. **React ecosystem** for web dashboard means shared business logic and API clients.
5. **WatermelonDB** (built for React Native) provides high-performance offline-first local database with sync primitives.
6. The team likely has React/TypeScript experience (most common full-stack skillset), reducing ramp-up.

**Backend: Node.js + Express + Prisma + PostgreSQL**

The backend is a REST API server handling sync, payments, QuickBooks integration, SMS, and PDF generation. Node.js + TypeScript for full-stack language consistency. Prisma as the ORM for type-safe database access with migration support. PostgreSQL for relational data integrity.

**Web Dashboard: Next.js (App Router)**

A lightweight read-only dashboard for office partners. Next.js shares the TypeScript ecosystem and can reuse API client code from the mobile app.

**Initialization Commands:**

```bash
# Mobile App
npx create-expo-app@latest field-service-app --template tabs

# Backend API
mkdir field-service-api && cd field-service-api
npm init -y && npx tsc --init
npm install express prisma @prisma/client
npx prisma init

# Web Dashboard
npx create-next-app@latest field-service-dashboard --typescript --tailwind --app --src-dir
```

**Architectural Decisions Provided by Starter:**

**Language & Runtime:**
- TypeScript 5.x across all three packages (mobile, API, web)
- Node.js 20 LTS for backend runtime
- React Native 0.76+ via Expo SDK 52+
- React 19 for web dashboard

**Styling Solution:**
- NativeWind (Tailwind CSS for React Native) on mobile
- Tailwind CSS 4 on web dashboard
- Shared design tokens between mobile and web

**Build Tooling:**
- Metro bundler for React Native (via Expo)
- EAS Build for iOS/Android binary builds
- Next.js built-in bundler for web
- `tsc` for backend API

**Testing Framework:**
- Jest for unit tests (shared across all packages)
- React Native Testing Library for mobile component tests
- Supertest for API endpoint tests

**Code Organization:**
- Monorepo with three packages: `app/` (mobile), `api/` (backend), `web/` (dashboard)
- Shared `packages/shared/` for types, constants, and utilities

**Development Experience:**
- Expo Go for rapid mobile development iteration
- Hot reloading on mobile and web
- Prisma Studio for database inspection
- ESLint + Prettier for consistent formatting

**Note:** Project initialization using these commands should be the first implementation story.

---

## Core Architectural Decisions

### Decision Priority Analysis

**Critical Decisions (Block Implementation):**
- Offline-first data architecture and sync strategy
- Database choices (local + cloud)
- Authentication approach
- Payment processing integration
- API design pattern

**Important Decisions (Shape Architecture):**
- QuickBooks integration approach
- SMS/notification infrastructure
- PDF generation strategy
- File/photo storage
- Deployment platform

**Deferred Decisions (Post-MVP):**
- Route optimization algorithm
- AI/ML features
- Multi-language support
- IoT integrations
- Platform API design

### Data Architecture

**Local Database: WatermelonDB (SQLite-backed)**
- Version: Latest stable (0.27+)
- Rationale: Purpose-built for React Native offline-first apps. Lazy-loading, observable queries, and built-in sync primitives. SQLite-backed for reliability and performance on mobile. Handles 10K+ records without performance degradation.
- Affects: All mobile features — quotes, jobs, invoices, customers, schedule

**Cloud Database: PostgreSQL 16 via Supabase**
- Version: PostgreSQL 16
- Rationale: Relational integrity for financial data (invoices, payments). Supabase provides managed PostgreSQL with built-in auth, real-time subscriptions, and Row Level Security (RLS). Reduces backend infrastructure complexity significantly.
- Affects: API server, sync engine, web dashboard

**ORM: Prisma 6**
- Version: Latest stable
- Rationale: Type-safe database access with auto-generated TypeScript types. Schema-as-code with migration support. Excellent developer experience.
- Affects: API server, database migrations

**Data Modeling Approach:**
- Event-sourced sync model: Local changes are recorded as sync events with timestamps and pushed to server on reconnection.
- Server is the source of truth for resolved state.
- WatermelonDB's built-in sync protocol handles push/pull with conflict detection.

**Conflict Resolution Strategy:**
- Last-write-wins for scalar fields (phone number, status, name).
- Merge for collection fields (job notes, photos — append, never overwrite).
- Server-side timestamp comparison for conflict detection.
- Sync metadata tracks `updated_at`, `created_at`, `synced_at` per record.

**Caching Strategy:**
- Mobile: WatermelonDB IS the cache — all data available locally.
- API: Redis for session tokens and rate limiting only. No application-level caching needed for MVP — database queries are simple CRUD.
- Web Dashboard: SWR (stale-while-revalidate) for API data fetching.

**Migration Approach:**
- Prisma Migrate for cloud database schema changes.
- WatermelonDB schema versioning with migration steps for local database.
- Both managed through version-controlled migration files.

### Authentication & Security

**Authentication: Supabase Auth**
- Rationale: Integrated with Supabase PostgreSQL. Supports email/password and phone/OTP signup (matching PRD FR40). JWT-based tokens work well with offline scenarios — token stored locally, validated on sync.
- Token expiry: 1 hour access tokens, 30-day refresh tokens (matching NFR9).
- Multi-device: Same account credentials, JWT per device, shared data via sync.

**Authorization Pattern:**
- Account-level access control. All team members on an account see all data.
- Row Level Security (RLS) in PostgreSQL ensures account isolation.
- No role-based permissions in MVP — all team members are equal.

**Security Implementation:**
- On-device: iOS Keychain / Android Keystore for auth tokens (NFR6).
- In transit: TLS 1.3 for all API communication (NFR7).
- Payment data: Never stored — Stripe handles all card data (NFR8).
- Customer-facing links: Signed URLs with 30-day expiry (NFR10).
- API: Rate limiting via Redis (100 requests/minute per account).

### API & Communication Patterns

**API Design: REST with JSON**
- Rationale: Simple, well-understood, matches CRUD-heavy operations. No need for GraphQL complexity — the data model is straightforward and queries are predictable.
- Versioning: URL-based (`/api/v1/`) for future compatibility.

**Sync API:**
- `POST /api/v1/sync/push` — Client pushes local changes (created/updated/deleted records with timestamps).
- `POST /api/v1/sync/pull` — Client pulls server changes since last sync timestamp.
- WatermelonDB sync protocol dictates the request/response format.
- Batched operations — single request pushes all pending changes.

**Core REST Endpoints:**
```
POST   /api/v1/auth/signup
POST   /api/v1/auth/login
POST   /api/v1/auth/refresh

POST   /api/v1/sync/push
POST   /api/v1/sync/pull

POST   /api/v1/quotes/:id/send          (triggers SMS)
POST   /api/v1/quotes/:id/approve        (customer-facing, signed URL)

POST   /api/v1/invoices/:id/send         (triggers SMS)
POST   /api/v1/invoices/:id/pay          (customer-facing, Stripe checkout)

POST   /api/v1/payments/webhook          (Stripe webhook)

POST   /api/v1/quickbooks/connect        (OAuth initiation)
GET    /api/v1/quickbooks/callback        (OAuth callback)
POST   /api/v1/quickbooks/sync           (manual re-sync trigger)
GET    /api/v1/quickbooks/status          (sync status dashboard data)

POST   /api/v1/notifications/sms         (internal — triggered by events)

GET    /api/v1/dashboard/schedule         (web dashboard)
GET    /api/v1/dashboard/invoices         (web dashboard)
GET    /api/v1/dashboard/sync-status      (web dashboard)
```

**Error Handling Standard:**
```json
{
  "error": {
    "code": "QUOTE_NOT_FOUND",
    "message": "Quote with ID abc123 not found",
    "status": 404
  }
}
```
- Application-specific error codes (UPPER_SNAKE_CASE).
- Human-readable message.
- HTTP status code mirrored in body for client convenience.

**Rate Limiting:**
- 100 requests/minute per authenticated account.
- 10 requests/minute for unauthenticated endpoints (signup, customer approval/payment links).
- Implemented via Redis sliding window.

### Frontend Architecture (Mobile)

**State Management: WatermelonDB Observables + React Context**
- WatermelonDB provides observable queries — components re-render automatically when local data changes.
- React Context for app-level state: auth status, sync status, network connectivity, push notification state.
- No Redux/Zustand needed — WatermelonDB handles all data state.

**Navigation: Expo Router (file-based routing)**
- Tab-based primary navigation: Jobs, Schedule, Customers, More.
- Stack navigation within each tab for detail screens.
- Modal presentation for quote/invoice creation flows.

**Component Architecture:**
- Feature-based organization: each feature folder contains screens, components, hooks, and models.
- Shared UI components library for buttons, inputs, cards, modals.
- NativeWind for styling — Tailwind utility classes in React Native.

**Performance Optimization:**
- WatermelonDB lazy loading — only load records visible on screen.
- FlatList with virtualization for all list views.
- Image compression before upload (max 1200px width, 80% quality JPEG).
- Memoization for expensive computations (quote totals, calendar views).

**Offline UX Patterns:**
- Network status indicator in header (subtle — green dot online, yellow dot syncing, red dot offline with pending count).
- All create/edit operations work identically online and offline.
- Sync status badge on individual records (synced ✓, pending ↻, error ⚠).
- Background sync on app foreground + connectivity change events.

### Infrastructure & Deployment

**Backend Hosting: Railway**
- Rationale: Simple deployment from Git, auto-scaling, managed PostgreSQL available, reasonable pricing for MVP scale. Avoids AWS complexity.
- Alternative considered: Render, Fly.io. Railway chosen for simplicity and integrated database.

**Database Hosting: Supabase (managed PostgreSQL)**
- Includes auth, real-time, storage, and edge functions.
- Free tier sufficient for development, Pro tier ($25/month) for production.

**File Storage: Supabase Storage (S3-compatible)**
- Job site photos, business logos, generated PDFs.
- Signed URLs for secure access with expiration.
- Image optimization via Supabase Image Transformations.

**SMS: Twilio**
- Rationale: Industry standard, 98%+ delivery rate (NFR19), excellent Node.js SDK.
- Used for: Quote delivery, appointment reminders, invoice delivery, payment confirmations.

**Payments: Stripe**
- Rationale: PCI-DSS Level 1 compliant (NFR8), React Native SDK available, Payment Links for customer-facing payments, Connect for marketplace features later.
- On-site payments: Stripe Terminal (tap-to-pay on phone) or manual card entry via Stripe SDK.
- Remote payments: Stripe Payment Links sent via SMS.

**QuickBooks Integration: Direct Intuit API**
- Rationale: QuickBooks Online API is well-documented. Direct integration gives full control over sync accuracy (99.9%+ target). Unified API layers (Apideck/Merge) add abstraction overhead and potential failure points for the #1 integration.
- OAuth 2.0 for connection. Webhook-based + polling for bi-directional awareness.
- Sync entities: Customers, Invoices, Payments.

**PDF Generation: @react-pdf/renderer (server-side)**
- Generate branded quote and invoice PDFs on the API server.
- Store in Supabase Storage with signed URLs for SMS delivery.
- Template-based with business branding (logo, name, license number).

**Push Notifications: Expo Push Notifications**
- Rationale: Built into Expo, handles both APNs (iOS) and FCM (Android) with a single API.
- Triggers: Quote approved, payment received, schedule change, sync error.

**CI/CD: GitHub Actions**
- API: Auto-deploy to Railway on merge to `main`.
- Mobile: EAS Build triggered on release tags. EAS Submit for App Store/Play Store.
- Web: Auto-deploy to Vercel on merge to `main`.

**Monitoring:**
- Sentry for error tracking (mobile + API + web).
- Supabase dashboard for database monitoring.
- Custom sync health dashboard (sync success rate, failure counts, latency).

### Decision Impact Analysis

**Implementation Sequence:**
1. Monorepo setup + shared types package
2. Supabase project creation (database, auth, storage)
3. Prisma schema + initial migration
4. API server scaffold with auth endpoints
5. Mobile app scaffold with WatermelonDB schema
6. Sync engine (push/pull API + WatermelonDB sync adapter)
7. Core features: Quotes → Schedule → Jobs → Invoices → Payments
8. QuickBooks integration
9. SMS/notification infrastructure
10. Web dashboard
11. App Store submission

**Cross-Component Dependencies:**
- Sync engine depends on both WatermelonDB schema (mobile) and Prisma schema (API) being aligned.
- Payment flow depends on Stripe integration (API) + payment UI (mobile) + sync (to update invoice status).
- QuickBooks sync depends on core entities (customers, invoices, payments) being stable.
- SMS delivery depends on Twilio setup + customer-facing signed URLs.
- Web dashboard depends on API endpoints being complete.

---

## Implementation Patterns & Consistency Rules

### Pattern Categories Defined

**15 critical conflict points identified** where AI agents could make different implementation choices.

### Naming Patterns

**Database Naming Conventions:**
- Tables: `snake_case`, plural (e.g., `quotes`, `line_items`, `job_photos`)
- Columns: `snake_case` (e.g., `customer_id`, `created_at`, `quote_total`)
- Foreign keys: `<referenced_table_singular>_id` (e.g., `customer_id`, `quote_id`)
- Indexes: `idx_<table>_<column>` (e.g., `idx_quotes_customer_id`)
- Enums: `PascalCase` type name, `UPPER_SNAKE_CASE` values (e.g., `JobStatus.IN_PROGRESS`)

```sql
-- CORRECT
CREATE TABLE quotes (
  id UUID PRIMARY KEY,
  customer_id UUID REFERENCES customers(id),
  quote_total DECIMAL(10,2),
  status VARCHAR(20),
  created_at TIMESTAMP
);

-- WRONG: camelCase, singular table name
CREATE TABLE Quote (
  customerId UUID,
  quoteTotal DECIMAL
);
```

**API Naming Conventions:**
- Endpoints: `/api/v1/<resource>` with plural nouns (e.g., `/api/v1/quotes`, `/api/v1/customers`)
- URL parameters: `kebab-case` for multi-word resources (e.g., `/api/v1/line-items`)
- Query parameters: `snake_case` (e.g., `?customer_id=abc&sort_by=created_at`)
- HTTP methods: GET (read), POST (create), PUT (full update), PATCH (partial update), DELETE

```
CORRECT: GET /api/v1/quotes?customer_id=abc123&status=approved
WRONG:   GET /api/v1/getQuotes?customerId=abc123
```

**Code Naming Conventions:**
- Files: `kebab-case.ts` (e.g., `quote-service.ts`, `sync-engine.ts`)
- React components: `PascalCase.tsx` (e.g., `QuoteCard.tsx`, `JobList.tsx`)
- Functions/methods: `camelCase` (e.g., `createQuote`, `syncPendingChanges`)
- Variables/constants: `camelCase` for variables, `UPPER_SNAKE_CASE` for true constants
- Types/interfaces: `PascalCase` (e.g., `Quote`, `Customer`, `SyncPayload`)
- Enums: `PascalCase` name, `PascalCase` members (e.g., `JobStatus.InProgress`)
- Hooks: `use` prefix + `camelCase` (e.g., `useQuotes`, `useSyncStatus`)

```typescript
// CORRECT
const quoteTotal = calculateTotal(lineItems);
const MAX_RETRY_ATTEMPTS = 3;
interface QuoteCreatePayload { ... }
function useCustomerJobs(customerId: string) { ... }

// WRONG
const QuoteTotal = calculate_total(line_items);
const maxRetryAttempts = 3; // should be UPPER_SNAKE for true constant
```

### Structure Patterns

**Project Organization: Feature-based**
- Mobile app organized by feature (quotes, jobs, schedule, customers, invoicing, payments).
- Each feature folder is self-contained: screens, components, hooks, models, utils.
- Shared UI components in a separate `components/ui/` directory.
- Services (API calls, sync, notifications) in `services/` directory.

**Test Location: Co-located**
- Test files live next to source files with `.test.ts` / `.test.tsx` suffix.
- Example: `quote-service.ts` → `quote-service.test.ts`
- Exception: E2E tests in a top-level `e2e/` directory.

**File Structure Rules:**
- One component per file (no barrel exports with multiple components).
- Index files (`index.ts`) only for re-exporting from feature directories.
- Config files at package root (not nested in `src/`).
- Environment files: `.env`, `.env.example` (never `.env.local` or `.env.development`).

### Format Patterns

**API Response Formats:**

Success response:
```json
{
  "data": {
    "id": "abc123",
    "customerName": "John Smith",
    "total": 1500.00,
    "createdAt": "2026-03-23T14:30:00Z"
  }
}
```

List response:
```json
{
  "data": [{ ... }, { ... }],
  "meta": {
    "total": 42,
    "page": 1,
    "pageSize": 20
  }
}
```

Error response:
```json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Quote total must be greater than zero",
    "status": 422
  }
}
```

- All responses wrapped in `{ "data": ... }` or `{ "error": ... }`.
- Never return raw arrays or unwrapped objects.
- JSON field names: `camelCase` (API layer) — Prisma automatically converts from `snake_case` DB columns.
- Dates: ISO 8601 strings in UTC (`"2026-03-23T14:30:00Z"`).
- Money: Integer cents in storage/API (e.g., `150000` for $1,500.00), formatted for display only in UI.
- IDs: UUIDs (v4) for all entities.

**Sync Payload Format:**
```json
{
  "lastSyncedAt": "2026-03-23T14:00:00Z",
  "changes": {
    "quotes": {
      "created": [{ ... }],
      "updated": [{ ... }],
      "deleted": ["id1", "id2"]
    },
    "customers": { ... },
    "jobs": { ... }
  }
}
```

### Communication Patterns

**Event Naming:**
- Events use `entity.action` format in `snake_case`: `quote.created`, `payment.received`, `job.status_changed`.
- Event payloads always include: `{ eventType, entityId, accountId, timestamp, data }`.

**State Management Patterns:**
- WatermelonDB observables for all data state — no manual state management for entities.
- React Context only for: `AuthContext`, `SyncContext`, `NetworkContext`.
- No global state libraries (Redux, Zustand, MobX).
- Component-local state via `useState` for UI-only state (form inputs, modals, loading spinners).

**Logging:**
- Structured JSON logs in API: `{ level, message, timestamp, requestId, accountId, ...context }`.
- Log levels: `error`, `warn`, `info`, `debug`.
- Mobile: Sentry for error reporting. Console logs in development only (stripped in production).

### Process Patterns

**Error Handling Patterns:**

API errors:
```typescript
// Custom error classes
class AppError extends Error {
  constructor(public code: string, message: string, public status: number) {
    super(message);
  }
}

// Usage
throw new AppError('QUOTE_NOT_FOUND', 'Quote not found', 404);
throw new AppError('SYNC_CONFLICT', 'Conflict detected during sync', 409);
```

Mobile error handling:
```typescript
// Service layer catches and wraps errors
try {
  await syncService.push(changes);
} catch (error) {
  if (error instanceof NetworkError) {
    // Queue for retry — user sees "pending sync" indicator
    await syncQueue.enqueue(changes);
  } else {
    // Log to Sentry, show user-friendly message
    Sentry.captureException(error);
    showToast('Something went wrong. Your data is saved locally.');
  }
}
```

- Never show raw error messages to users.
- All errors on mobile result in: data saved locally + user-friendly toast.
- API validation errors return 422 with specific field-level error messages.
- Network errors are always retriable — queue and retry on next sync.

**Loading State Patterns:**
- Skeleton screens for initial data load (not spinners).
- Inline loading indicators for actions (button becomes disabled with spinner).
- Pull-to-refresh on all list screens.
- No global loading overlay — each component manages its own loading state.

**Retry Patterns:**
- Sync: Exponential backoff (1s, 2s, 4s, 8s, max 30s). Max 5 retries per sync attempt.
- SMS: 3 retries with 5s delay. Log failure after exhaustion.
- Payment webhooks: Stripe handles retry logic. Our webhook handler is idempotent.
- QuickBooks sync: Retry on transient errors (429, 503). Alert on persistent failures.

### Enforcement Guidelines

**All AI Agents MUST:**
- Follow the naming conventions exactly — database columns in `snake_case`, API responses in `camelCase`, files in `kebab-case`.
- Wrap all API responses in `{ "data": ... }` or `{ "error": ... }` — never return raw objects.
- Store money as integer cents — never floating point dollars.
- Use UUIDs for all entity IDs — never auto-increment integers.
- Make every write operation work offline first via WatermelonDB — never call the API directly for creates/updates from the mobile app.
- Co-locate test files next to source files with `.test.ts` suffix.
- Use TypeScript strict mode — no `any` types, no `@ts-ignore`.

**Anti-Patterns to Avoid:**
- Direct API calls from mobile components — always go through WatermelonDB.
- Storing payment card data anywhere in our system.
- Using `Date` objects in API payloads — always ISO 8601 strings.
- Nested REST endpoints deeper than 2 levels (e.g., `/quotes/:id/line-items` is fine, `/customers/:id/quotes/:id/line-items/:id` is not).
- Importing from other feature folders — use shared packages instead.

---

## Project Structure & Boundaries

### Complete Project Directory Structure

```
field-service-management/
├── README.md
├── package.json                          # Monorepo root (npm workspaces)
├── tsconfig.base.json                    # Shared TypeScript config
├── .github/
│   └── workflows/
│       ├── ci.yml                        # Lint, type-check, test on PR
│       ├── deploy-api.yml                # Deploy API to Railway on merge
│       └── deploy-web.yml                # Deploy web to Vercel on merge
│
├── packages/
│   └── shared/
│       ├── package.json
│       ├── tsconfig.json
│       ├── src/
│       │   ├── types/
│       │   │   ├── quote.ts              # Quote, LineItem, QuoteStatus
│       │   │   ├── job.ts                # Job, JobStatus, JobPhoto
│       │   │   ├── invoice.ts            # Invoice, InvoiceStatus, Payment
│       │   │   ├── customer.ts           # Customer, CustomerAddress
│       │   │   ├── schedule.ts           # ScheduleEvent, Reminder
│       │   │   ├── account.ts            # Account, TeamMember, BusinessProfile
│       │   │   ├── sync.ts               # SyncPayload, SyncResponse, ConflictResolution
│       │   │   ├── quickbooks.ts         # QBSyncStatus, QBEntity
│       │   │   └── api.ts                # ApiResponse, ApiError, PaginationMeta
│       │   ├── constants/
│       │   │   ├── job-statuses.ts       # JobStatus enum and transitions
│       │   │   ├── trade-types.ts        # HVAC, Plumbing, Electrical
│       │   │   └── error-codes.ts        # Application error code constants
│       │   └── utils/
│       │       ├── money.ts              # Cents ↔ dollars formatting
│       │       ├── dates.ts              # ISO date helpers
│       │       └── validation.ts         # Shared validation schemas (zod)
│       └── index.ts
│
├── apps/
│   ├── mobile/
│   │   ├── package.json
│   │   ├── app.json                      # Expo config
│   │   ├── tsconfig.json
│   │   ├── eas.json                      # EAS Build config
│   │   ├── .env.example
│   │   ├── app/                          # Expo Router (file-based routing)
│   │   │   ├── _layout.tsx               # Root layout (providers, auth gate)
│   │   │   ├── (auth)/
│   │   │   │   ├── login.tsx
│   │   │   │   ├── signup.tsx
│   │   │   │   └── onboarding.tsx        # Trade selection, pricebook setup
│   │   │   ├── (tabs)/
│   │   │   │   ├── _layout.tsx           # Tab navigator
│   │   │   │   ├── jobs/
│   │   │   │   │   ├── index.tsx         # Job list
│   │   │   │   │   └── [id].tsx          # Job detail
│   │   │   │   ├── schedule/
│   │   │   │   │   └── index.tsx         # Calendar view
│   │   │   │   ├── customers/
│   │   │   │   │   ├── index.tsx         # Customer list
│   │   │   │   │   └── [id].tsx          # Customer detail + history
│   │   │   │   └── more/
│   │   │   │       └── index.tsx         # Settings, sync status, account
│   │   │   └── (modals)/
│   │   │       ├── create-quote.tsx
│   │   │       ├── create-job.tsx
│   │   │       ├── create-invoice.tsx
│   │   │       ├── capture-signature.tsx
│   │   │       ├── capture-photo.tsx
│   │   │       └── payment.tsx
│   │   ├── src/
│   │   │   ├── components/
│   │   │   │   ├── ui/                   # Shared UI primitives
│   │   │   │   │   ├── button.tsx
│   │   │   │   │   ├── input.tsx
│   │   │   │   │   ├── card.tsx
│   │   │   │   │   ├── modal.tsx
│   │   │   │   │   ├── toast.tsx
│   │   │   │   │   ├── skeleton.tsx
│   │   │   │   │   ├── badge.tsx
│   │   │   │   │   └── sync-indicator.tsx
│   │   │   │   ├── quotes/
│   │   │   │   │   ├── quote-form.tsx
│   │   │   │   │   ├── quote-card.tsx
│   │   │   │   │   ├── line-item-row.tsx
│   │   │   │   │   └── pricebook-picker.tsx
│   │   │   │   ├── jobs/
│   │   │   │   │   ├── job-card.tsx
│   │   │   │   │   ├── job-status-badge.tsx
│   │   │   │   │   ├── job-photo-gallery.tsx
│   │   │   │   │   └── dispatch-board.tsx
│   │   │   │   ├── schedule/
│   │   │   │   │   ├── calendar-view.tsx
│   │   │   │   │   ├── day-view.tsx
│   │   │   │   │   └── event-card.tsx
│   │   │   │   ├── invoicing/
│   │   │   │   │   ├── invoice-card.tsx
│   │   │   │   │   ├── payment-status.tsx
│   │   │   │   │   └── payment-form.tsx
│   │   │   │   └── customers/
│   │   │   │       ├── customer-card.tsx
│   │   │   │       ├── customer-form.tsx
│   │   │   │       └── service-history.tsx
│   │   │   ├── db/
│   │   │   │   ├── schema.ts             # WatermelonDB schema definition
│   │   │   │   ├── models/
│   │   │   │   │   ├── quote.ts
│   │   │   │   │   ├── line-item.ts
│   │   │   │   │   ├── job.ts
│   │   │   │   │   ├── job-photo.ts
│   │   │   │   │   ├── invoice.ts
│   │   │   │   │   ├── payment.ts
│   │   │   │   │   ├── customer.ts
│   │   │   │   │   ├── schedule-event.ts
│   │   │   │   │   ├── pricebook-item.ts
│   │   │   │   │   └── team-member.ts
│   │   │   │   ├── migrations.ts         # WatermelonDB schema migrations
│   │   │   │   └── index.ts              # Database initialization
│   │   │   ├── services/
│   │   │   │   ├── sync-service.ts       # WatermelonDB sync adapter
│   │   │   │   ├── auth-service.ts       # Supabase auth wrapper
│   │   │   │   ├── api-client.ts         # HTTP client for API calls
│   │   │   │   ├── notification-service.ts
│   │   │   │   ├── photo-service.ts      # Camera + image compression
│   │   │   │   └── calendar-service.ts   # Google/Apple Calendar sync
│   │   │   ├── hooks/
│   │   │   │   ├── use-quotes.ts
│   │   │   │   ├── use-jobs.ts
│   │   │   │   ├── use-customers.ts
│   │   │   │   ├── use-schedule.ts
│   │   │   │   ├── use-invoices.ts
│   │   │   │   ├── use-sync-status.ts
│   │   │   │   ├── use-network.ts
│   │   │   │   └── use-auth.ts
│   │   │   ├── contexts/
│   │   │   │   ├── auth-context.tsx
│   │   │   │   ├── sync-context.tsx
│   │   │   │   ├── network-context.tsx
│   │   │   │   └── database-context.tsx
│   │   │   ├── data/
│   │   │   │   ├── pricebooks/
│   │   │   │   │   ├── hvac.json         # Pre-built HVAC pricebook
│   │   │   │   │   ├── plumbing.json     # Pre-built plumbing pricebook
│   │   │   │   │   └── electrical.json   # Pre-built electrical pricebook
│   │   │   │   └── onboarding/
│   │   │   │       └── trade-config.ts   # Trade selection metadata
│   │   │   └── utils/
│   │   │       ├── format-currency.ts
│   │   │       ├── format-date.ts
│   │   │       └── format-phone.ts
│   │   └── e2e/
│   │       ├── onboarding.test.ts
│   │       ├── quote-flow.test.ts
│   │       ├── job-lifecycle.test.ts
│   │       └── payment-flow.test.ts
│   │
│   ├── api/
│   │   ├── package.json
│   │   ├── tsconfig.json
│   │   ├── .env.example
│   │   ├── Dockerfile
│   │   ├── prisma/
│   │   │   ├── schema.prisma             # Database schema
│   │   │   ├── migrations/               # Prisma migration files
│   │   │   └── seed.ts                   # Seed data (pricebook templates)
│   │   ├── src/
│   │   │   ├── index.ts                  # Express app entry point
│   │   │   ├── config/
│   │   │   │   ├── env.ts                # Environment variable validation
│   │   │   │   ├── stripe.ts             # Stripe client initialization
│   │   │   │   ├── twilio.ts             # Twilio client initialization
│   │   │   │   ├── supabase.ts           # Supabase admin client
│   │   │   │   └── quickbooks.ts         # Intuit API client config
│   │   │   ├── middleware/
│   │   │   │   ├── auth.ts               # JWT verification middleware
│   │   │   │   ├── rate-limit.ts         # Redis-based rate limiting
│   │   │   │   ├── error-handler.ts      # Global error handler
│   │   │   │   ├── request-logger.ts     # Structured request logging
│   │   │   │   └── validate.ts           # Zod request validation middleware
│   │   │   ├── routes/
│   │   │   │   ├── auth.ts               # /api/v1/auth/*
│   │   │   │   ├── sync.ts              # /api/v1/sync/*
│   │   │   │   ├── quotes.ts            # /api/v1/quotes/*
│   │   │   │   ├── invoices.ts          # /api/v1/invoices/*
│   │   │   │   ├── payments.ts          # /api/v1/payments/*
│   │   │   │   ├── quickbooks.ts        # /api/v1/quickbooks/*
│   │   │   │   ├── customers.ts         # /api/v1/customers/*
│   │   │   │   └── dashboard.ts         # /api/v1/dashboard/*
│   │   │   ├── services/
│   │   │   │   ├── sync-service.ts       # Sync push/pull logic
│   │   │   │   ├── quote-service.ts      # Quote business logic
│   │   │   │   ├── invoice-service.ts    # Invoice generation
│   │   │   │   ├── payment-service.ts    # Stripe payment processing
│   │   │   │   ├── sms-service.ts        # Twilio SMS sending
│   │   │   │   ├── pdf-service.ts        # Quote/invoice PDF generation
│   │   │   │   ├── quickbooks-service.ts # QuickBooks sync logic
│   │   │   │   ├── notification-service.ts # Push notification dispatch
│   │   │   │   └── storage-service.ts    # Supabase Storage file ops
│   │   │   ├── jobs/
│   │   │   │   ├── quickbooks-sync.ts    # Background QB sync job
│   │   │   │   └── reminder-sender.ts    # Scheduled SMS reminders
│   │   │   └── utils/
│   │   │       ├── signed-url.ts         # Customer-facing link generation
│   │   │       └── error.ts              # AppError class
│   │   └── tests/
│   │       ├── integration/
│   │       │   ├── sync.test.ts
│   │       │   ├── payments.test.ts
│   │       │   └── quickbooks.test.ts
│   │       └── fixtures/
│   │           ├── quotes.ts
│   │           ├── customers.ts
│   │           └── invoices.ts
│   │
│   └── web/
│       ├── package.json
│       ├── tsconfig.json
│       ├── next.config.js
│       ├── tailwind.config.js
│       ├── .env.example
│       ├── src/
│       │   ├── app/
│       │   │   ├── layout.tsx            # Root layout
│       │   │   ├── page.tsx              # Login/landing
│       │   │   ├── globals.css
│       │   │   ├── dashboard/
│       │   │   │   ├── layout.tsx        # Dashboard layout with nav
│       │   │   │   ├── schedule/
│       │   │   │   │   └── page.tsx      # Schedule view
│       │   │   │   ├── invoices/
│       │   │   │   │   └── page.tsx      # Invoice status list
│       │   │   │   └── sync/
│       │   │   │       └── page.tsx      # QuickBooks sync status
│       │   │   └── (public)/
│       │   │       ├── quote/[token]/
│       │   │       │   └── page.tsx      # Customer quote approval page
│       │   │       └── pay/[token]/
│       │   │           └── page.tsx      # Customer payment page
│       │   ├── components/
│       │   │   ├── schedule-calendar.tsx
│       │   │   ├── invoice-table.tsx
│       │   │   ├── sync-status-list.tsx
│       │   │   └── nav-sidebar.tsx
│       │   └── lib/
│       │       ├── api-client.ts         # API client for dashboard
│       │       └── auth.ts               # Auth helpers
│       └── public/
│           └── logo.svg
│
└── .gitignore
```

### Architectural Boundaries

**API Boundaries:**
- Mobile app NEVER makes direct database queries — all server interaction goes through the sync API or specific action endpoints (send quote, process payment).
- Customer-facing pages (quote approval, payment) are on the web app, accessed via signed URLs — no auth required.
- Web dashboard uses the same REST API as the mobile app, authenticated with the same JWT tokens.
- QuickBooks sync is server-side only — mobile app displays status but never interacts with Intuit API.

**Component Boundaries:**
- Mobile features are isolated: the `quotes/` feature folder should not import from `invoicing/` — shared logic lives in `packages/shared/` or `services/`.
- WatermelonDB models are the single source of truth for mobile data state.
- Contexts (Auth, Sync, Network) are the only global state providers.
- UI components in `components/ui/` are pure/presentational — no business logic, no data fetching.

**Service Boundaries:**
- `sync-service` owns all data synchronization — no other service writes to the sync API.
- `payment-service` owns all Stripe interaction — no direct Stripe calls elsewhere.
- `sms-service` owns all Twilio interaction — other services call `sms-service`, never Twilio directly.
- `quickbooks-service` owns all Intuit API interaction.
- `pdf-service` owns all document generation.

**Data Boundaries:**
- WatermelonDB (mobile) holds the working dataset — all active quotes, jobs, customers, invoices.
- PostgreSQL (server) holds the complete dataset and is the ultimate source of truth.
- Supabase Storage holds binary assets (photos, PDFs, logos).
- Redis holds ephemeral data only (rate limits, session metadata).

### Requirements to Structure Mapping

**Feature Mapping:**

| PRD Feature | Mobile | API | Web | Shared |
|-------------|--------|-----|-----|--------|
| Quoting (FR1-8) | `components/quotes/`, `db/models/quote.ts`, `hooks/use-quotes.ts` | `routes/quotes.ts`, `services/quote-service.ts`, `services/pdf-service.ts` | — | `types/quote.ts` |
| Scheduling (FR9-14) | `components/schedule/`, `db/models/schedule-event.ts`, `services/calendar-service.ts` | `routes/sync.ts` (schedule syncs via main sync) | `dashboard/schedule/` | `types/schedule.ts` |
| Job Mgmt (FR15-19) | `components/jobs/`, `db/models/job.ts`, `hooks/use-jobs.ts` | `routes/sync.ts` | — | `types/job.ts` |
| Invoicing (FR20-26) | `components/invoicing/`, `db/models/invoice.ts` | `routes/invoices.ts`, `services/invoice-service.ts`, `services/pdf-service.ts` | `dashboard/invoices/` | `types/invoice.ts` |
| Payments (FR20-26) | `(modals)/payment.tsx` | `routes/payments.ts`, `services/payment-service.ts` | `(public)/pay/` | `types/invoice.ts` |
| QuickBooks (FR27-31) | `hooks/use-sync-status.ts` (read-only) | `routes/quickbooks.ts`, `services/quickbooks-service.ts`, `jobs/quickbooks-sync.ts` | `dashboard/sync/` | `types/quickbooks.ts` |
| Customers (FR32-35) | `components/customers/`, `db/models/customer.ts` | `routes/customers.ts` (CSV import) | — | `types/customer.ts` |
| Offline (FR36-39) | `db/`, `services/sync-service.ts`, `contexts/sync-context.tsx`, `contexts/network-context.tsx` | `routes/sync.ts`, `services/sync-service.ts` | — | `types/sync.ts` |
| Auth (FR40-43) | `(auth)/`, `services/auth-service.ts`, `contexts/auth-context.tsx` | `routes/auth.ts`, `middleware/auth.ts` | `lib/auth.ts` | `types/account.ts` |
| Web Dashboard (FR44-46) | — | `routes/dashboard.ts` | `dashboard/` | — |
| Notifications (FR47-49) | `services/notification-service.ts` | `services/notification-service.ts`, `services/sms-service.ts`, `jobs/reminder-sender.ts` | — | — |

**Cross-Cutting Concerns Mapping:**

| Concern | Location |
|---------|----------|
| Authentication | `apps/mobile/src/contexts/auth-context.tsx`, `apps/api/src/middleware/auth.ts`, `apps/web/src/lib/auth.ts` |
| Error handling | `apps/api/src/middleware/error-handler.ts`, `apps/api/src/utils/error.ts` |
| Validation | `apps/api/src/middleware/validate.ts`, `packages/shared/src/utils/validation.ts` |
| Logging | `apps/api/src/middleware/request-logger.ts`, Sentry SDK in all packages |
| Rate limiting | `apps/api/src/middleware/rate-limit.ts` |

### Integration Points

**Internal Communication:**
- Mobile ↔ API: REST over HTTPS. Primary flow via sync push/pull. Secondary flows for actions (send quote, process payment).
- Web ↔ API: REST over HTTPS. Standard request/response for dashboard data.
- API ↔ Database: Prisma client with connection pooling.

**External Integrations:**
- **Stripe:** Payment processing. API server ↔ Stripe API (create payment intents, payment links). Stripe ↔ API server (webhooks for payment status updates).
- **Twilio:** SMS delivery. API server → Twilio API (send SMS). Status callbacks optional for delivery tracking.
- **QuickBooks Online:** Accounting sync. API server ↔ Intuit API (OAuth, create/update customers/invoices/payments).
- **Supabase:** Auth (JWT issuance/verification), Storage (file upload/download), Database (PostgreSQL).
- **Expo Push:** API server → Expo Push API → APNs/FCM → User devices.
- **Google Calendar / Apple EventKit:** Mobile app ↔ device calendar APIs (read/write).

**Data Flow:**

```
[Mobile App] ←→ [WatermelonDB (local)]
     ↕ (sync push/pull)
[API Server] ←→ [PostgreSQL (Supabase)]
     ↕                ↕
[Stripe]        [Supabase Storage]
[Twilio]        [Redis]
[QuickBooks]    [Expo Push]

[Web Dashboard] → [API Server] → [PostgreSQL]
[Customer Pages] → [API Server] → [Stripe] (payment)
```

---

## Architecture Validation Results

### Coherence Validation

**Decision Compatibility:**
All technology choices are compatible and well-tested together:
- Expo + React Native + WatermelonDB is a proven offline-first mobile stack.
- Node.js + Express + Prisma + PostgreSQL is a standard, reliable API stack.
- Next.js + Tailwind for web dashboard shares the TypeScript ecosystem.
- Supabase provides auth, storage, and database as a unified platform, reducing integration complexity.
- All packages share TypeScript types via `packages/shared/`.

**Pattern Consistency:**
- Naming conventions are consistent: `snake_case` in database, `camelCase` in TypeScript/API, `kebab-case` for files.
- Prisma automatically handles the `snake_case` (DB) → `camelCase` (code) mapping.
- API response format is standardized across all endpoints.
- Error handling follows the same pattern in all services.

**Structure Alignment:**
- Monorepo structure supports shared types and independent deployment.
- Feature-based mobile organization maps cleanly to PRD feature categories.
- Service boundaries prevent coupling between integrations.

### Requirements Coverage Validation

**Functional Requirements Coverage:**
- FR1-FR8 (Quoting): Covered by mobile quote components, WatermelonDB quote/line-item models, API PDF generation, SMS delivery via Twilio.
- FR9-FR14 (Scheduling): Covered by mobile schedule components, calendar-service for Google/Apple sync, SMS reminders via API background job.
- FR15-FR19 (Job Management): Covered by mobile job components, WatermelonDB job model with status lifecycle, photo/signature capture.
- FR20-FR26 (Invoicing & Payments): Covered by mobile invoice components, Stripe integration for card payments and payment links, push notifications.
- FR27-FR31 (QuickBooks): Covered by API quickbooks-service with OAuth, automatic sync on job completion/payment, sync status dashboard.
- FR32-FR35 (Customers): Covered by mobile customer components, API CSV import endpoint.
- FR36-FR39 (Offline): Covered by WatermelonDB offline-first architecture, sync-service with conflict resolution, sync status UI.
- FR40-FR43 (Auth): Covered by Supabase Auth, account-level access, unlimited team members.
- FR44-FR46 (Web Dashboard): Covered by Next.js web app with schedule, invoice, and sync status views.
- FR47-FR49 (Notifications): Covered by Expo Push for app notifications, Twilio for customer SMS, configurable reminder timing.

**Non-Functional Requirements Coverage:**
- NFR1-5 (Performance): WatermelonDB provides < 500ms local operations. Lazy loading and virtualization for list performance. Sync within 30s target via batched push/pull.
- NFR6-10 (Security): Platform-native encryption via iOS Keychain/Android Keystore. TLS 1.3 for all API traffic. Stripe handles PCI compliance. JWT expiry and signed URL expiry configured.
- NFR11-13 (Scalability): PostgreSQL + Railway auto-scaling supports 50K concurrent users. Sync API batching handles 1K ops/sec. Supabase connection pooling for database load.
- NFR14-17 (Reliability): Railway provides 99.9% uptime. WatermelonDB sync protocol ensures zero data loss. QuickBooks duplicate prevention via unique ID matching. Sentry monitoring for failure alerting.
- NFR18-21 (Integration): Direct Intuit API integration for maximum control. Twilio for SMS. Stripe for payments. Google Calendar API v3 and Apple EventKit via mobile calendar-service.

### Implementation Readiness Validation

**Decision Completeness:**
All critical decisions documented with specific technologies, versions, and rationale. Every integration has a designated service owner. Sync strategy is fully specified with conflict resolution rules.

**Structure Completeness:**
Complete directory tree with every file and directory specified. Feature-to-directory mapping documented for all PRD categories. Clear boundaries between mobile, API, and web packages.

**Pattern Completeness:**
Naming conventions cover database, API, code, and files. API response format standardized. Error handling patterns defined for all layers. Sync payload format specified. Money handling (integer cents) and date format (ISO 8601) standardized.

### Gap Analysis Results

**No Critical Gaps.** All PRD functional and non-functional requirements are architecturally supported.

**Minor Gaps (acceptable for MVP):**
- Calendar drag-and-drop (FR10): Requires a React Native calendar library selection — recommend `react-native-calendars` with custom drag handler. Decision deferred to implementation.
- Digital signature capture (FR17): Requires a signature pad library — recommend `react-native-signature-canvas`. Decision deferred to implementation.
- CSV import (FR35): One-time bulk operation, implementation details deferred to the relevant story.

### Architecture Completeness Checklist

**Requirements Analysis**
- [x] Project context thoroughly analyzed
- [x] Scale and complexity assessed
- [x] Technical constraints identified
- [x] Cross-cutting concerns mapped

**Architectural Decisions**
- [x] Critical decisions documented with versions
- [x] Technology stack fully specified
- [x] Integration patterns defined
- [x] Performance considerations addressed

**Implementation Patterns**
- [x] Naming conventions established
- [x] Structure patterns defined
- [x] Communication patterns specified
- [x] Process patterns documented

**Project Structure**
- [x] Complete directory structure defined
- [x] Component boundaries established
- [x] Integration points mapped
- [x] Requirements to structure mapping complete

### Architecture Readiness Assessment

**Overall Status:** READY FOR IMPLEMENTATION

**Confidence Level:** High

**Key Strengths:**
- Offline-first architecture is deeply integrated — not bolted on. WatermelonDB provides battle-tested sync primitives.
- Monorepo with shared types eliminates type drift between mobile, API, and web.
- Service boundary isolation means QuickBooks, Stripe, and Twilio integrations can be developed and tested independently.
- Supabase reduces infrastructure complexity by combining auth, database, and storage.
- Pattern consistency rules are specific enough to prevent AI agent conflicts.

**Areas for Future Enhancement:**
- WebSocket/real-time updates for dispatch board (when team grows beyond 5).
- Redis caching layer for API responses (not needed at MVP scale).
- Database read replicas for analytics queries (post-MVP).
- CDN for PDF/photo delivery (Supabase Storage handles this adequately for MVP).

### Implementation Handoff

**AI Agent Guidelines:**
- Follow all architectural decisions exactly as documented.
- Use implementation patterns consistently across all components.
- Respect project structure and boundaries — no cross-feature imports.
- All mobile data operations go through WatermelonDB — never direct API calls for CRUD.
- Money is always integer cents. Dates are always ISO 8601 UTC strings. IDs are always UUIDs.
- Refer to this document for all architectural questions.

**First Implementation Priority:**
1. Initialize monorepo with `npm workspaces` and shared types package.
2. Set up Supabase project (database + auth + storage).
3. Define Prisma schema and run initial migration.
4. Scaffold Expo mobile app with WatermelonDB.
5. Scaffold Express API server with auth middleware.
6. Implement sync engine (the foundation for everything else).

### Data Model

The following entities form the core data model. All tables include `id` (UUID), `created_at`, `updated_at`, and `synced_at` columns.

```
accounts
  ├── id (UUID, PK)
  ├── business_name
  ├── business_logo_url
  ├── license_number
  ├── contact_email
  ├── contact_phone
  ├── trade_type (HVAC | PLUMBING | ELECTRICAL)
  ├── quickbooks_connected (boolean)
  ├── quickbooks_realm_id
  └── stripe_account_id

team_members
  ├── id (UUID, PK)
  ├── account_id (FK → accounts)
  ├── email
  ├── phone
  ├── name
  ├── role (OWNER | MEMBER)
  └── auth_user_id (FK → Supabase auth.users)

customers
  ├── id (UUID, PK)
  ├── account_id (FK → accounts)
  ├── name
  ├── email
  ├── phone
  ├── address_line1
  ├── address_line2
  ├── city
  ├── state
  ├── zip
  ├── notes
  └── quickbooks_customer_id

pricebook_items
  ├── id (UUID, PK)
  ├── account_id (FK → accounts)
  ├── category
  ├── name
  ├── description
  ├── unit_price (integer, cents)
  ├── unit_type (EACH | HOUR | FLAT)
  └── is_template (boolean)

quotes
  ├── id (UUID, PK)
  ├── account_id (FK → accounts)
  ├── customer_id (FK → customers)
  ├── created_by_id (FK → team_members)
  ├── status (DRAFT | SENT | VIEWED | APPROVED | DECLINED | EXPIRED)
  ├── subtotal (integer, cents)
  ├── tax_amount (integer, cents)
  ├── total (integer, cents)
  ├── notes
  ├── approval_token
  ├── sent_at
  ├── approved_at
  └── expires_at

line_items
  ├── id (UUID, PK)
  ├── quote_id (FK → quotes)
  ├── pricebook_item_id (FK → pricebook_items, nullable)
  ├── description
  ├── quantity (decimal)
  ├── unit_price (integer, cents)
  ├── total (integer, cents)
  └── sort_order

jobs
  ├── id (UUID, PK)
  ├── account_id (FK → accounts)
  ├── customer_id (FK → customers)
  ├── quote_id (FK → quotes, nullable)
  ├── assigned_to_id (FK → team_members, nullable)
  ├── status (QUOTED | SCHEDULED | IN_PROGRESS | COMPLETE | INVOICED)
  ├── title
  ├── description
  ├── scheduled_start
  ├── scheduled_end
  ├── completed_at
  ├── signature_url
  └── notes

job_photos
  ├── id (UUID, PK)
  ├── job_id (FK → jobs)
  ├── photo_url
  ├── caption
  └── taken_at

invoices
  ├── id (UUID, PK)
  ├── account_id (FK → accounts)
  ├── customer_id (FK → customers)
  ├── job_id (FK → jobs, nullable)
  ├── quote_id (FK → quotes, nullable)
  ├── status (DRAFT | SENT | VIEWED | PAID | PARTIALLY_PAID | OVERDUE)
  ├── subtotal (integer, cents)
  ├── tax_amount (integer, cents)
  ├── total (integer, cents)
  ├── amount_paid (integer, cents)
  ├── pdf_url
  ├── payment_token
  ├── sent_at
  ├── paid_at
  ├── due_at
  └── quickbooks_invoice_id

payments
  ├── id (UUID, PK)
  ├── account_id (FK → accounts)
  ├── invoice_id (FK → invoices)
  ├── amount (integer, cents)
  ├── stripe_payment_id
  ├── payment_method (CARD_ON_SITE | CARD_VIA_LINK)
  ├── status (PENDING | SUCCEEDED | FAILED | REFUNDED)
  └── quickbooks_payment_id

schedule_events
  ├── id (UUID, PK)
  ├── account_id (FK → accounts)
  ├── job_id (FK → jobs, nullable)
  ├── assigned_to_id (FK → team_members, nullable)
  ├── title
  ├── start_time
  ├── end_time
  ├── all_day (boolean)
  ├── reminder_minutes (integer)
  ├── reminder_sent (boolean)
  └── external_calendar_id

sync_log
  ├── id (UUID, PK)
  ├── account_id (FK → accounts)
  ├── device_id
  ├── direction (PUSH | PULL)
  ├── records_pushed (integer)
  ├── records_pulled (integer)
  ├── conflicts_resolved (integer)
  ├── status (SUCCESS | PARTIAL | FAILED)
  ├── error_message
  └── completed_at

quickbooks_sync_log
  ├── id (UUID, PK)
  ├── account_id (FK → accounts)
  ├── entity_type (CUSTOMER | INVOICE | PAYMENT)
  ├── entity_id (UUID)
  ├── direction (PUSH)
  ├── status (SUCCESS | FAILED | DUPLICATE_PREVENTED)
  ├── error_message
  ├── quickbooks_id
  └── synced_at
```

**Key Relationships:**
- Account → Team Members (1:many)
- Account → Customers (1:many)
- Customer → Quotes (1:many)
- Quote → Line Items (1:many)
- Customer → Jobs (1:many)
- Job → Quote (optional 1:1)
- Job → Job Photos (1:many)
- Job → Invoice (1:1)
- Invoice → Payments (1:many)
- Job → Schedule Event (1:1)
- Team Member → Assigned Jobs (1:many)
