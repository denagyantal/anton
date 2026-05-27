---
stepsCompleted: [1, 2, 3, 4, 5, 6, 7, 8]
workflowType: 'architecture'
lastStep: 8
status: 'complete'
completedAt: '2026-05-27'
inputDocuments:
  - mvps/auto-repair-shop-management/planning/prd.md
  - mvps/auto-repair-shop-management/planning/product-brief.md
  - mvps/auto-repair-shop-management/planning/market-research.md
project_name: 'ShopFlow — Auto Repair Shop Management'
user_name: Root
date: '2026-05-27'
---

# Architecture Decision Document — ShopFlow

_Auto Repair Shop Management SaaS MVP_

---

## Project Context Analysis

### Requirements Overview

**Functional Requirements:**

The PRD defines 70 functional requirements across 9 categories:

| Category | FR Count | Architectural Scope |
|---|---|---|
| Work Orders / Repair Orders | FR1–FR11 | Core CRUD, PDF generation, status lifecycle |
| Digital Vehicle Inspection | FR12–FR22 | File upload, shareable public links, real-time approval, immutable audit log |
| Two-Way Customer Texting | FR23–FR30 | Twilio integration, webhook receiver, credit balance management |
| QuickBooks Online Sync | FR31–FR39 | OAuth 2.0, background sync queue, error surfacing |
| Parts Catalog Lookup | FR40–FR45 | Two external API integrations with fallback, markup rules |
| Customer & Vehicle Management | FR46–FR52 | CSV import pipeline, Shopmonkey migration tool |
| AP Reconciliation | FR53–FR57 | Discrepancy detection engine, alert generation |
| Reporting | FR58–FR62 | Aggregation queries, CSV export |
| User & Account Management | FR63–FR70 | Multi-role auth, data export, GDPR/CCPA deletion |

**Non-Functional Requirements — Architectural Impact:**

| NFR | Requirement | Architectural Implication |
|---|---|---|
| NFR1 | Core screens < 2s on 50 Mbps | Server-side rendering for initial load; optimistic UI updates |
| NFR2 | DVI photo upload < 5s on 4G | Direct-to-S3 presigned upload (bypass server) |
| NFR3 | Parts search < 3s | Parallel fan-out to NAPA + AutoZone with short circuit on first result |
| NFR4 | QB sync < 5 min | Background job queue (Inngest), not synchronous request |
| NFR6 | TLS 1.3 everywhere | Vercel/CDN handles; S3 presigned URLs use HTTPS |
| NFR7 | Customer PII encrypted at rest | Application-level encryption for sensitive fields OR Postgres column encryption |
| NFR11 | DVI audit log immutable | Append-only table, no UPDATE/DELETE routes |
| NFR14 | 99.9% uptime | Multi-region Vercel deployment; Supabase managed Postgres with failover |
| NFR15 | Zero data loss | Transactional writes; confirm persistence before UI success |
| NFR18 | 10,000 concurrent shops | Row-level multi-tenancy with shop_id indexing; connection pooling (PgBouncer via Supabase) |
| NFR19 | 500 QB sync ops/minute | Inngest fan-out with concurrency controls |
| NFR20 | 500 DVI photos/shop/month | S3 with lifecycle policies; presigned upload bypasses server |
| NFR31 | DVI audit log 7-year retention | S3 Glacier lifecycle for audit exports; Postgres append-only |
| NFR32 | Invoice 7-year retention | S3 storage for PDF invoices; soft-delete only on RO records |

**Scale & Complexity Assessment:**

- **Complexity level:** Medium — standard CRUD at core, but with 5 distinct external integrations (Twilio, QBO, NAPA, AutoZone, S3), background job processing, and real-time customer approval flows
- **Primary domain:** Full-stack web (Next.js), PWA for tablet/mobile access
- **Estimated architectural components:** 12 primary feature modules

### Technical Constraints & Dependencies

- **No native mobile app** — PWA approach required; camera access via browser `input[capture]` and MediaDevices API
- **QuickBooks Online API** — OAuth 2.0, token refresh lifecycle management required; must version-pin and test against QB API breaks
- **Twilio SMS** — Inbound webhook receiver needed; must be publicly accessible (Vercel edge function / webhook route)
- **NAPA / AutoZone APIs** — External catalog APIs that may have rate limits; fallback layer required (NFR22)
- **PCI-DSS** — No payment card data stored; future Stripe integration delegates entirely to Stripe (NFR8)
- **CCPA / Data deletion** — Customer delete must cascade with 30-day grace period (FR70, NFR30)
- **Shopmonkey CSV formats** — Must support both v1 and v2 export schemas (NFR24)

### Cross-Cutting Concerns Identified

1. **Multi-tenancy** — Every data access requires `shop_id` scoping; enforced at service layer, not just query layer
2. **Authentication & authorization** — Three roles (OWNER, TECHNICIAN, ACCOUNTANT) with different data access scopes; Technician cannot see financial data (NFR12)
3. **File storage** — DVI photos, CSV imports, invoice PDFs all flow through S3; presigned URL pattern for client-direct upload
4. **Background processing** — QB sync, SMS status polling, AP reconciliation detection are async; surfaced via dashboard
5. **Audit immutability** — DVI approval log must never be modified; implemented as append-only writes
6. **Data export** — All data exportable as CSV ZIP (FR69); customer deletion with 30-day grace (FR70)
7. **Public token-based access** — DVI links and invoice links are public (no auth) but token-secured with expiry (NFR10)
8. **Error surfacing** — QB sync errors, SMS failures must surface to shop owner within defined SLAs (NFR16, NFR17)

---

## Starter Template Evaluation

### Primary Technology Domain

Full-stack web application — Next.js (App Router) monorepo. Browser-first with PWA for tablet/mobile use in the shop bay. Small team (2–4 developers), 10–14 week MVP timeline.

### Starter Options Considered

| Option | Pros | Cons | Verdict |
|---|---|---|---|
| `create-next-app` (Next.js 15) | Official, App Router, API routes, SSR/SSG, Vercel-native | Minimal boilerplate — need to add auth, ORM, UI | **Selected** |
| T3 Stack (`create-t3-app`) | tRPC + Prisma + Tailwind included | tRPC adds learning curve; API format less interoperable for webhooks | Considered |
| RedwoodJS | Full-stack opinionated | Too opinionated; GraphQL-first adds complexity for simple REST needs | Rejected |
| Remix | Great data loading patterns | Less ecosystem around QB/Twilio integrations | Rejected |

### Selected Starter: `create-next-app` (Next.js 15)

**Rationale for Selection:**

Next.js 15 with the App Router is the optimal choice for ShopFlow's MVP:
- **Single deployment unit** — API routes co-located with frontend eliminates a separate backend service for the MVP timeline
- **Vercel-native** — Zero-config deployment on Vercel; handles TLS, CDN, edge functions automatically
- **SSR/SSG** — Server-side rendering for fast initial load of the RO list and customer-facing DVI pages (< 2s target)
- **PWA support** — `@ducanh2912/next-pwa` adds service worker; browser camera via `input[capture]` works on iOS/Android
- **Webhook-compatible** — Next.js Route Handlers work as serverless functions; Twilio and QBO callbacks work without a separate server
- **Familiar to the ecosystem** — Largest React full-stack ecosystem; easiest to hire and onboard

**Initialization Command:**

```bash
npx create-next-app@latest shopflow \
  --typescript \
  --tailwind \
  --eslint \
  --app \
  --src-dir \
  --import-alias "@/*"
```

**Architectural Decisions Provided by Starter:**

**Language & Runtime:** TypeScript 5.x throughout — frontend, API routes, and shared types in one codebase

**Styling Solution:** Tailwind CSS 3.x — utility-first; rapid development for admin-style UI; mobile-responsive with breakpoints

**Build Tooling:** Turbopack (dev), webpack (prod via Next.js); automatic code splitting per route

**Testing Framework:** Not included in starter — added separately: Vitest (unit/integration), Playwright (E2E)

**Code Organization:** Next.js App Router conventions — `src/app/` for pages and API routes; `src/components/` for UI; `src/lib/` for services

**Development Experience:** Fast Refresh, TypeScript strict mode, ESLint with Next.js rules, Prettier

---

## Core Architectural Decisions

### Decision Priority Analysis

**Critical Decisions (Block Implementation):**
- Database + ORM selection and multi-tenancy model
- Authentication method and role enforcement
- File upload strategy (DVI photos)
- Background job processing (QB sync, SMS)
- API response format standard

**Important Decisions (Shape Architecture):**
- State management approach
- SMS integration pattern
- Parts catalog fallback strategy
- PDF generation approach
- Customer-facing public link security

**Deferred Decisions (Post-MVP):**
- Redis caching layer (add when performance profiling identifies bottlenecks)
- Read replicas for reports (add at 10,000 shops scale)
- WebSocket for real-time DVI updates (polling acceptable for MVP)
- Multi-region database (Supabase handles this automatically)

---

### Data Architecture

**Database:** PostgreSQL 16 via **Supabase**

- Rationale: Managed Postgres with built-in connection pooling (PgBouncer), row-level security, storage (S3-compatible), auth primitives, and real-time subscriptions. Free tier sufficient for development; scales linearly.
- Alternative considered: Railway Postgres — simpler but no built-in RLS or connection pooling
- Supabase is used for **Postgres + Connection Pooling only** in MVP; we use NextAuth.js for auth (not Supabase Auth) to avoid vendor lock-in on auth

**ORM:** Prisma 6.x

- Type-safe queries generated from schema
- Migration management (`prisma migrate`)
- Prisma Client works with Supabase Postgres via `DATABASE_URL` (Supabase transaction mode pooler URL)
- Use `prisma.$transaction()` for multi-table writes (e.g., create RO + initial line items atomically)

**Multi-Tenancy Model:** Row-level multi-tenancy with `shop_id` foreign key

- Every tenant-scoped table has `shop_id: String` column with index
- `shop_id` is injected at the service layer from the authenticated session — never trusted from the client request body
- Pattern: `prisma.repairOrder.findMany({ where: { shop_id: session.shopId, ...filters } })`
- No schema-per-tenant in MVP (adds migration complexity); revisit at 5,000+ shops

**Caching Strategy:**

- **Vercel Data Cache** — Next.js `fetch()` with `revalidate` for rarely-changing data (shop settings, SMS templates)
- **No Redis in MVP** — Add Upstash Redis when profiling shows cache misses are a bottleneck
- **Parts catalog results** — Cache per part number for 24 hours (NAPA/AutoZone data changes slowly); store in Postgres `parts_cache` table to avoid Redis dependency

**Migration Approach:** `prisma migrate deploy` in CI/CD pipeline on every deployment; never run against production manually

---

### Authentication & Security

**Authentication Method:** **NextAuth.js v5 (Auth.js)**

- Email/password with bcrypt hashing (rounds: 12)
- Google OAuth provider for alternative login (FR64)
- TOTP-based 2FA via `otpauth` library; secret stored encrypted in `users.totp_secret`
- Session strategy: JWT (edge-compatible); 7-day expiry with activity refresh (NFR9)
- Custom session includes `{ userId, shopId, role }` — available in all API routes via `auth()` from `next-auth`

**Authorization Pattern:** Route-level middleware + service-layer guards

```typescript
// middleware.ts — protect all /dashboard/** routes
// Service layer — role checks before DB queries:
function requireRole(session: Session, ...roles: UserRole[]) {
  if (!roles.includes(session.user.role)) throw new ForbiddenError()
}
```

- **OWNER**: Full access to all shop data
- **TECHNICIAN**: Can read/update assigned ROs only; no invoice totals, no payment status (NFR12); no settings, no reports
- **ACCOUNTANT**: Read-only access to reports and QB sync dashboard (FR67); no RO editing

**API Security Strategy:**

- All API routes under `/api/` require valid NextAuth session by default (enforced in middleware)
- Public routes (`/api/public/dvi/[token]`, `/api/webhooks/twilio`, `/api/auth/[...nextauth]`) explicitly opt out
- Twilio webhook: validated via `twilio.validateExpressRequest()` using webhook signing secret
- QB OAuth callback: state parameter CSRF validation
- Rate limiting: Vercel Edge Middleware rate limiting on public endpoints (DVI approval: 10 req/min per IP)

**Data Encryption:**

- PII fields (`customer.email`, `customer.phone`, `customer.address`) encrypted at application level using AES-256-GCM before writing to Postgres
- QB OAuth tokens (`shop.qb_access_token`, `shop.qb_refresh_token`) encrypted with AES-256-GCM
- TOTP secrets encrypted with AES-256-GCM
- Encryption key from `ENCRYPTION_KEY` env var (32-byte hex); key rotation via re-encryption job (future)
- Encryption utility: `src/lib/crypto.ts` — `encrypt(plaintext): string`, `decrypt(ciphertext): string`

**Session & Token Security:**

- JWT signing key: `AUTH_SECRET` env var (minimum 32 characters)
- DVI share tokens: random CUID2, stored in `dvi_inspections.share_token`; expires 30 days from creation (NFR10)
- Invoice public tokens: same pattern, stored in `repair_orders.invoice_token`
- Tokens are opaque (not JWTs) — no information encoded in the token itself

**File Upload Security:**

- DVI photos and CSV imports: server generates presigned S3 URLs, client uploads directly to S3
- Server validates file type and size before generating presigned URL (images: max 10 MB; CSV: max 50 MB)
- S3 bucket has no public access; photos served via CloudFront with signed URLs or via API proxy for sensitive content
- Customer-facing DVI photos: served via public CloudFront URL (acceptable — DVI links are already token-protected)
- Malware scanning: ClamAV via AWS Lambda triggered on S3 upload (NFR13); soft-delete file if infected

---

### API & Communication Patterns

**API Design:** RESTful API using Next.js Route Handlers (App Router)

- Base path: `/api/` — all routes require authentication except explicitly public ones
- Resource naming: plural nouns, kebab-case (`/api/repair-orders`, `/api/dvi-inspections`)
- HTTP methods: standard REST (GET/POST/PUT/PATCH/DELETE)
- Route parameter format: `[id]` for single resource, `[token]` for public token-based access

**Standard API Response Format:**

All API responses use a consistent wrapper:

```typescript
// Success
{ "data": { ...resourceOrArray }, "meta": { "total"?: number, "page"?: number } }

// Error
{ "error": { "code": "VALIDATION_ERROR", "message": "Human readable", "details"?: [...] } }
```

HTTP status codes: 200 (success), 201 (created), 400 (validation), 401 (unauthenticated), 403 (forbidden), 404 (not found), 409 (conflict), 422 (unprocessable), 500 (server error)

**Error Handling Standards:**

```typescript
// Custom error classes — src/lib/errors.ts
class ValidationError extends Error { code = 'VALIDATION_ERROR'; status = 400 }
class NotFoundError extends Error { code = 'NOT_FOUND'; status = 404 }
class ForbiddenError extends Error { code = 'FORBIDDEN'; status = 403 }

// Route handler wrapper — handles errors uniformly
export function withErrorHandler(handler: RouteHandler): RouteHandler
```

**Request Validation:** Zod schemas for all request bodies and query parameters; validated before service layer

```typescript
// Every route has a corresponding Zod schema
const CreateRepairOrderSchema = z.object({ customerId: z.string().cuid(), ... })
```

**Background Jobs:** **Inngest** (serverless background jobs, works with Vercel)

- QB sync: `inngest/functions/qb-sync.ts` — triggered on invoice creation, retries on failure
- SMS delivery status polling: `inngest/functions/sms-status.ts` — polls Twilio for delivery confirmation
- AP reconciliation scan: `inngest/functions/ap-reconciliation.ts` — nightly, scans vendor invoices
- Invoice generation: `inngest/functions/invoice-pdf.ts` — async PDF generation, uploads to S3
- Inngest Dev Server for local development; Inngest Cloud for production

**Parts Catalog Fallback:**

```typescript
// src/lib/parts/catalog.ts
async function searchParts(query: string): Promise<PartsResult[]> {
  const [napaResult, autoZoneResult] = await Promise.allSettled([
    searchNapa(query),
    searchAutoZone(query)
  ])
  // Return combined results; label source; surface availability notice if one fails
}
```

**Rate Limiting:** Upstash Ratelimit (Vercel Edge Middleware) for public endpoints; Twilio and QB API calls wrapped in exponential backoff retry

**Webhook Handling:**

- `POST /api/webhooks/twilio` — Twilio inbound SMS; validated with Twilio signature; processed synchronously (fast: store message, trigger Inngest for notification)
- `GET /api/auth/quickbooks/callback` — QB OAuth callback; validates state; stores encrypted tokens

---

### Frontend Architecture

**State Management:** Hybrid approach

- **Server state:** TanStack Query (React Query v5) — all API data fetching, caching, optimistic updates
- **Client state:** Zustand — lightweight store for UI state only (active sidebar tab, notification count, modal open state)
- **Form state:** React Hook Form + Zod resolver — all forms; validation co-located with schema

**Component Architecture:** Feature-based, co-located

```
src/components/
  ui/          # shadcn/ui primitives (Button, Input, Dialog, etc.) — never modified directly
  forms/       # Reusable form components (CustomerSelect, VehicleSelect, etc.)
  features/    # Feature modules — one folder per domain
    repair-orders/
    dvi/
    customers/
    sms/
    quickbooks/
    reports/
    ap-reconciliation/
    settings/
```

**UI Component Library:** **shadcn/ui** (Radix UI primitives + Tailwind)

- Components are copied into `src/components/ui/` (not a dependency) — fully customizable
- Accessible by default (Radix primitives handle ARIA, keyboard nav)
- Satisfies WCAG 2.1 Level AA baseline (NFR28)
- DVI color status: Green/Yellow/Red with text label (NFR27) — never color-only

**Routing Strategy:** Next.js App Router with route groups

```
src/app/
  (auth)/              # Login, signup, forgot-password — no sidebar layout
  (dashboard)/         # Protected app — requires auth, shows sidebar
    repair-orders/
    customers/
    dvi/
    messages/
    reports/
    settings/
  public/              # No auth required
    dvi/[token]/       # Customer DVI approval page
    invoice/[token]/   # Customer invoice view page
  api/                 # API routes
  webhooks/            # Webhook routes (not under /api/ to avoid auth middleware)
```

**Performance Optimization:**

- React Server Components (RSC) for data-heavy read pages (RO list, customer list, reports)
- Client Components only for interactive elements (forms, DVI photo capture, real-time status)
- `next/image` for all images (DVI photos in customer view); automatic WebP conversion
- PDF viewer: iframe embed of S3 PDF URL (no client-side PDF rendering)
- Lazy loading for heavy components (DVI editor, CSV import wizard) via `next/dynamic`

**PWA Configuration:**

```javascript
// next.config.js — @ducanh2912/next-pwa
const withPWA = require('@ducanh2912/next-pwa').default({
  dest: 'public',
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
})
```

- Web App Manifest: `public/manifest.json` with shop name, icons, `display: standalone`
- iOS/Android "Add to Home Screen" supported
- Camera: `<input type="file" accept="image/*" capture="environment">` — works across iOS Safari and Android Chrome without native app

**DVI Photo Capture Flow:**

1. Technician taps "Add Photo" on DVI item
2. Client requests presigned S3 URL from `/api/dvi-inspections/[id]/items/[itemId]/photos/presign`
3. Browser file input opens camera (capture="environment")
4. Photo uploaded directly to S3 via presigned PUT
5. Client calls `/api/dvi-inspections/[id]/items/[itemId]/photos` with S3 key to create DB record
6. TanStack Query invalidates DVI item cache; photo appears immediately

**Bundle Optimization:**

- Separate entry points per route group (auth vs dashboard)
- Vendor chunk splitting: `react`, `@tanstack/react-query`, `zod` in separate chunks
- Target: First Contentful Paint < 1.5s on RO list page

---

### Infrastructure & Deployment

**Hosting:** Vercel (Frontend + API Routes + Edge Functions)

- Zero-config Next.js deployment
- Automatic HTTPS/TLS (satisfies NFR6)
- Edge Middleware for auth checks, rate limiting
- Serverless functions timeout: 60s (max for Vercel Pro); QB sync offloaded to Inngest
- Environment: `preview` branches for PRs; `production` for main branch

**Database Hosting:** Supabase (PostgreSQL 16)

- Managed Postgres with automatic backups (daily)
- PgBouncer connection pooling — use `?pgbouncer=true` connection string for API routes (transaction mode)
- Direct connection string for Prisma migrations (not pooled)
- Supabase free tier → Pro tier at ~500 shops (for compute and storage)

**File Storage:** AWS S3 + CloudFront

- Bucket: `shopflow-dvi-photos-{env}` — not public; all access via presigned URLs or CloudFront signed URLs
- CloudFront distribution for customer-facing DVI photos (performance)
- S3 Lifecycle rules: standard storage → S3 Glacier after 12 months for old photos (NFR20)
- Separate bucket: `shopflow-invoices-{env}` for invoice PDFs
- IAM policy: least-privilege — API only has `s3:PutObject`, `s3:GetObject`, `s3:DeleteObject`

**Background Jobs:** Inngest Cloud

- Ingest endpoint: `/api/inngest` (Next.js Route Handler)
- Functions: `qb-sync`, `sms-status-poll`, `ap-reconciliation-scan`, `invoice-pdf-generate`
- Cron triggers: nightly AP scan (2 AM UTC), daily QB sync sweep for failed items
- Concurrency: QB sync limited to 50 concurrent (avoid QB rate limits)
- Retry: 3 attempts with exponential backoff for external API calls

**SMS:** Twilio Messaging Service

- Messaging Service SID for automatic sender pool (satisfies NFR23 — auto-failover between numbers)
- Twilio webhook: `POST /webhooks/twilio/inbound` for inbound SMS
- Twilio status callbacks: `POST /webhooks/twilio/status` for delivery confirmation

**Monitoring & Logging:**

- **Vercel Analytics** — core web vitals, function invocation duration
- **Sentry** — error tracking for frontend and API routes; alert on new error types
- **Structured logging:** `pino` logger in API routes; logs shipped to Vercel log drains → Logtail
- QB sync dashboard (FR36): stored in `qb_sync_logs` table, queried by reports page
- Uptime monitoring: Better Uptime or Checkly with 1-minute checks on `/api/health`

**CI/CD Pipeline:**

```yaml
# .github/workflows/ci.yml
on: [push, pull_request]
jobs:
  test: vitest run + tsc --noEmit
  lint: eslint + prettier check
  e2e: playwright (on PR to main only)
  deploy: Vercel CLI deploy (automatic via Vercel GitHub integration)
  migrate: prisma migrate deploy (production, after deploy)
```

**Environment Configuration:**

| Env Var | Purpose |
|---|---|
| `DATABASE_URL` | Supabase pooled connection string (transaction mode) |
| `DIRECT_URL` | Supabase direct connection (migrations only) |
| `AUTH_SECRET` | NextAuth.js JWT signing key |
| `ENCRYPTION_KEY` | AES-256-GCM key for PII + QB tokens |
| `GOOGLE_CLIENT_ID/SECRET` | Google OAuth |
| `TWILIO_ACCOUNT_SID/AUTH_TOKEN` | Twilio API |
| `TWILIO_MESSAGING_SERVICE_SID` | Twilio Messaging Service |
| `TWILIO_WEBHOOK_SECRET` | Twilio signature validation |
| `QBO_CLIENT_ID/SECRET` | QuickBooks Online OAuth |
| `QBO_REDIRECT_URI` | QB OAuth callback URL |
| `AWS_ACCESS_KEY_ID/SECRET` | S3 access |
| `S3_BUCKET_DVI` / `S3_BUCKET_INVOICES` | S3 bucket names |
| `CLOUDFRONT_URL` | CDN base URL for DVI photos |
| `NAPA_API_KEY` | NAPA parts catalog |
| `AUTOZONE_API_KEY` | AutoZone parts catalog |
| `INNGEST_EVENT_KEY` / `INNGEST_SIGNING_KEY` | Inngest background jobs |
| `SENTRY_DSN` | Error tracking |

**Scaling Strategy:**

- Vercel serverless scales automatically to handle concurrent requests
- Supabase Pro tier: up to 100 concurrent connections (PgBouncer pools to thousands)
- Inngest handles QB sync bursts (500 ops/minute) via concurrency controls
- S3 + CloudFront: effectively unlimited scale for photo storage
- At 10,000 shops: add read replica on Supabase for reports queries

---

## Implementation Patterns & Consistency Rules

### Naming Patterns

**Database Naming Conventions:**

- Tables: `snake_case`, plural (`repair_orders`, `dvi_items`, `sms_messages`)
- Columns: `snake_case` (`shop_id`, `created_at`, `mileage_in`)
- Primary keys: `id` (CUID2 string), defined as `@id @default(cuid())`
- Foreign keys: `{related_table_singular}_id` (`shop_id`, `customer_id`, `ro_id`)
- Timestamps: `created_at` (immutable, `@default(now())`), `updated_at` (`@updatedAt`)
- Enum values: `SCREAMING_SNAKE_CASE` (`IN_PROGRESS`, `QB_SYNC_FAILED`)
- Indexes: auto-named by Prisma; manual `@@index([shop_id, status])` for multi-column

**API Naming Conventions:**

- Endpoints: plural kebab-case (`/api/repair-orders`, `/api/dvi-inspections`, `/api/ap-invoices`)
- Route parameters: `[id]` for resources, `[token]` for public token routes
- Query parameters: `camelCase` (`?startDate=...&technicianId=...`)
- HTTP methods: GET (list/read), POST (create), PUT (full replace), PATCH (partial update), DELETE

**Code Naming Conventions:**

- Files: `kebab-case.ts` for utilities/services, `PascalCase.tsx` for React components
- Directories: `kebab-case` everywhere
- Components: `PascalCase` (`RepairOrderCard`, `DviPhotoCapture`)
- Functions: `camelCase` verbs (`createRepairOrder`, `getCustomerById`, `syncToQuickBooks`)
- TypeScript types/interfaces: `PascalCase` (`RepairOrder`, `CreateRoInput`, `DviItemStatus`)
- Zod schemas: `PascalCase + Schema` (`CreateRepairOrderSchema`, `UpdateCustomerSchema`)
- Prisma model names in code: follow Prisma conventions (PascalCase singular: `prisma.repairOrder`)
- Constants: `SCREAMING_SNAKE_CASE` (`MAX_SMS_CREDITS`, `DVI_TOKEN_EXPIRY_DAYS`)

---

### Structure Patterns

**Project Organization:**

```
src/
  app/            # Next.js App Router — pages, layouts, API routes
  components/
    ui/           # shadcn/ui primitives — never modified
    forms/        # Shared form components (CustomerSelect, VehicleSelect)
    features/     # Domain-specific components, co-located with their feature
  lib/
    db/           # Prisma client singleton + query helpers
    auth/         # NextAuth.js config + session helpers
    crypto/       # Encryption/decryption utilities
    s3/           # S3 presigned URL generation, upload
    twilio/       # SMS send, template rendering, webhook validation
    quickbooks/   # QB OAuth, API client, sync logic
    parts/        # NAPA + AutoZone API clients, fallback wrapper
    pdf/          # Invoice PDF generation
    inngest/      # Inngest client + background function definitions
    errors/       # Custom error classes
    utils/        # Pure utility functions (formatting, math, dates)
    validators/   # Zod schemas for all domain entities
  hooks/          # Shared React hooks (useDebounce, useLocalStorage, etc.)
  types/          # Global TypeScript type definitions
  middleware.ts   # NextAuth + rate limiting edge middleware
inngest/
  functions/      # Inngest background function implementations
prisma/
  schema.prisma
  migrations/
  seed.ts         # Demo data for development
tests/
  unit/           # Vitest unit tests
  integration/    # Vitest integration tests (hit real DB via Supabase test project)
  e2e/            # Playwright end-to-end tests
  fixtures/       # Shared test data factories
public/
  manifest.json   # PWA manifest
  icons/          # App icons for PWA
```

**Test Organization:**

- Unit tests: `tests/unit/` — pure functions, utilities, Zod schemas
- Integration tests: `tests/integration/` — API routes tested with `supertest`; uses a separate test Supabase project
- E2E tests: `tests/e2e/` — Playwright; covers critical user flows (Marcus's journey, Derek's migration)
- Test factories: `tests/fixtures/factories.ts` — typed factory functions for creating test data
- Co-located component tests: `*.test.tsx` files next to component files for unit-level component tests

---

### Format Patterns

**API Response Format:**

All API routes return:

```typescript
// Success response
type SuccessResponse<T> = {
  data: T
  meta?: { total?: number; page?: number; pageSize?: number }
}

// Error response
type ErrorResponse = {
  error: {
    code: string           // e.g. "VALIDATION_ERROR", "NOT_FOUND"
    message: string        // human-readable
    details?: ZodIssue[]   // validation errors only
  }
}
```

**Date Format:**

- All dates in API responses: ISO 8601 string (`"2026-04-04T10:30:00.000Z"`)
- Never Unix timestamps in JSON
- Display formatting happens on the client using `Intl.DateTimeFormat` or `date-fns`
- Database: Prisma `DateTime` maps to Postgres `TIMESTAMP WITH TIME ZONE`

**Decimal Handling:**

- Money values in Prisma schema: `Decimal` type (`@db.Decimal(10, 2)`)
- Money values in API JSON: string representation (`"79.99"`) — never JavaScript `number` (float precision)
- Client display: format with `Intl.NumberFormat` for currency display
- Markup percentages stored as decimal fraction (`0.35` = 35%)

**Pagination:**

```
GET /api/repair-orders?page=1&pageSize=25&status=IN_PROGRESS
→ { data: [...], meta: { total: 143, page: 1, pageSize: 25 } }
```

Default `pageSize`: 25. Maximum: 100.

---

### Communication Patterns

**TanStack Query Keys:**

Consistent key factory pattern — prevents cache key collisions between features:

```typescript
// src/lib/query-keys.ts
export const queryKeys = {
  repairOrders: {
    all: ['repair-orders'] as const,
    list: (filters: RoFilters) => ['repair-orders', 'list', filters] as const,
    detail: (id: string) => ['repair-orders', id] as const,
  },
  customers: { ... },
  dvi: { ... },
  // etc.
}
```

**Optimistic Updates:**

Use TanStack Query `onMutate` / `onError` / `onSettled` pattern for:
- RO status transitions (user sees state change immediately)
- SMS send (message appears in thread immediately)
- DVI item condition toggle

**Real-Time DVI Approval:**

MVP: polling (30-second interval via TanStack Query `refetchInterval`) on the RO detail page when a DVI is in SENT status. No WebSocket in MVP.

```typescript
// On RO detail, when DVI is SENT:
useQuery({ queryKey: queryKeys.dvi.detail(dviId), refetchInterval: 30_000 })
```

**Inngest Event Naming:**

```
shopflow/{resource}.{action}
# Examples:
shopflow/invoice.created          → trigger QB sync
shopflow/sms.outbound.queued      → send via Twilio
shopflow/ap-invoice.created       → trigger reconciliation scan
shopflow/qb-sync.failed           → trigger owner email alert
```

---

### Process Patterns

**Error Handling:**

```typescript
// Route handler pattern — all routes wrapped:
export async function POST(req: Request) {
  return withErrorHandler(async () => {
    const session = await requireAuth()
    const body = await validateBody(req, CreateRepairOrderSchema)
    const ro = await repairOrderService.create(session.shopId, body)
    return NextResponse.json({ data: ro }, { status: 201 })
  })
}
```

Client-side: TanStack Query mutation `onError` → toast notification via `sonner`

**Loading State Pattern:**

- API data: TanStack Query `isPending` / `isLoading` / `isFetching`
- Skeleton loaders (not spinners) for list and detail pages
- Button loading: `isLoading` prop on Button component disables + shows spinner
- Full-page loading: Suspense boundaries with skeleton fallback

**Validation Pattern:**

- Backend: Zod schema validation on every POST/PUT/PATCH request body; return 400 with `details` array
- Frontend: React Hook Form + `@hookform/resolvers/zod`; same Zod schema reused from `src/lib/validators/`
- Client-side: validate on submit, not on every keystroke (better UX for shop staff)

**Service Layer Pattern:**

Every domain has a service file that encapsulates DB access:

```typescript
// src/lib/services/repair-order.service.ts
export const repairOrderService = {
  async create(shopId: string, data: CreateRoInput): Promise<RepairOrder> {
    // 1. Validate shopId scope
    // 2. Generate RO number (atomic increment)
    // 3. Create in transaction
    // 4. Trigger Inngest events
  },
  async list(shopId: string, filters: RoFilters): Promise<PaginatedResult<RepairOrder>> { ... },
  // ...
}
```

API routes call service functions — never call Prisma directly in route handlers.

**Multi-Tenancy Guard:**

Every service function that accepts `shopId` validates the authenticated user belongs to that shop:

```typescript
// src/lib/auth/guards.ts
export async function requireShopAccess(session: Session, shopId: string) {
  if (session.user.shopId !== shopId) throw new ForbiddenError()
}
```

---

### Enforcement Guidelines

**All AI Agents MUST:**

1. Use the service layer — never call `prisma.*` directly in Next.js route handlers
2. Inject `shop_id` from the session — never trust `shopId` from request body or query params
3. Use the standard API response format `{ data: ..., error: ... }` — no custom shapes
4. Validate all request inputs with Zod before processing
5. Use `queryKeys.*` factory for all TanStack Query cache keys
6. Use `created_at` / `updated_at` (snake_case) as Prisma model timestamp names
7. Wrap money arithmetic in `Decimal` (from `decimal.js`) — never JavaScript `number` for financial math
8. Never commit encrypted values to code — all secrets via environment variables
9. Use `withErrorHandler` wrapper in all API routes
10. Append-only for DVI audit logs — no UPDATE or DELETE queries on `dvi_audit_logs`

---

## Project Structure & Boundaries

### Complete Project Directory Structure

```
shopflow/
├── README.md
├── package.json
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
├── .env.local                          # local dev secrets (gitignored)
├── .env.example                        # template with all required vars
├── .eslintrc.json
├── .prettierrc
├── .gitignore
├── vitest.config.ts
├── playwright.config.ts
│
├── .github/
│   └── workflows/
│       ├── ci.yml                      # test + lint on push/PR
│       └── migrate.yml                 # prisma migrate deploy on main
│
├── prisma/
│   ├── schema.prisma                   # full data model
│   ├── seed.ts                         # demo shop with 5 customers, 3 ROs
│   └── migrations/                     # auto-generated migration files
│
├── public/
│   ├── manifest.json                   # PWA manifest
│   ├── favicon.ico
│   └── icons/
│       ├── icon-192x192.png
│       └── icon-512x512.png
│
├── inngest/
│   ├── client.ts                       # Inngest client singleton
│   └── functions/
│       ├── qb-sync.ts                  # QB sync on invoice.created
│       ├── sms-status.ts               # Twilio delivery status polling
│       ├── ap-reconciliation.ts        # Nightly AP discrepancy scan
│       └── invoice-pdf.ts              # Async PDF generation + S3 upload
│
├── src/
│   ├── middleware.ts                   # Auth check + rate limiting (Edge)
│   │
│   ├── app/
│   │   ├── layout.tsx                  # Root layout (fonts, providers)
│   │   ├── globals.css
│   │   │
│   │   ├── (auth)/                     # No sidebar; auth pages
│   │   │   ├── layout.tsx
│   │   │   ├── login/
│   │   │   │   └── page.tsx
│   │   │   ├── signup/
│   │   │   │   └── page.tsx
│   │   │   └── forgot-password/
│   │   │       └── page.tsx
│   │   │
│   │   ├── (dashboard)/                # Protected app shell
│   │   │   ├── layout.tsx              # Sidebar + header layout
│   │   │   ├── page.tsx                # Dashboard / home
│   │   │   │
│   │   │   ├── repair-orders/
│   │   │   │   ├── page.tsx            # RO list with filters
│   │   │   │   ├── new/
│   │   │   │   │   └── page.tsx        # Create RO wizard
│   │   │   │   └── [id]/
│   │   │   │       ├── page.tsx        # RO detail
│   │   │   │       ├── dvi/
│   │   │   │       │   └── page.tsx    # DVI editor
│   │   │   │       └── invoice/
│   │   │   │           └── page.tsx    # Invoice preview
│   │   │   │
│   │   │   ├── customers/
│   │   │   │   ├── page.tsx            # Customer list
│   │   │   │   ├── new/
│   │   │   │   │   └── page.tsx
│   │   │   │   ├── import/
│   │   │   │   │   └── page.tsx        # CSV import wizard
│   │   │   │   ├── migrate/
│   │   │   │   │   └── page.tsx        # Shopmonkey migration
│   │   │   │   └── [id]/
│   │   │   │       └── page.tsx        # Customer detail + history
│   │   │   │
│   │   │   ├── vehicles/
│   │   │   │   └── [id]/
│   │   │   │       └── page.tsx        # Vehicle detail + service history
│   │   │   │
│   │   │   ├── messages/
│   │   │   │   ├── page.tsx            # SMS inbox (all threads)
│   │   │   │   └── [customerId]/
│   │   │   │       └── page.tsx        # SMS thread with customer
│   │   │   │
│   │   │   ├── parts/
│   │   │   │   └── page.tsx            # Parts catalog search (standalone)
│   │   │   │
│   │   │   ├── ap-reconciliation/
│   │   │   │   ├── page.tsx            # AP alerts dashboard
│   │   │   │   └── invoices/
│   │   │   │       └── page.tsx        # Vendor invoice log
│   │   │   │
│   │   │   ├── reports/
│   │   │   │   ├── page.tsx            # Revenue dashboard
│   │   │   │   ├── open-ros/
│   │   │   │   │   └── page.tsx        # Open RO aging
│   │   │   │   ├── top-services/
│   │   │   │   │   └── page.tsx
│   │   │   │   └── invoices/
│   │   │   │       └── page.tsx        # Invoice history + export
│   │   │   │
│   │   │   └── settings/
│   │   │       ├── page.tsx            # Shop profile
│   │   │       ├── users/
│   │   │       │   └── page.tsx        # User management
│   │   │       ├── quickbooks/
│   │   │       │   └── page.tsx        # QB connect + sync dashboard
│   │   │       ├── sms-templates/
│   │   │       │   └── page.tsx
│   │   │       ├── markup-rules/
│   │   │       │   └── page.tsx
│   │   │       └── export/
│   │   │           └── page.tsx        # Data export
│   │   │
│   │   ├── public/                     # No auth required
│   │   │   ├── dvi/
│   │   │   │   └── [token]/
│   │   │   │       └── page.tsx        # Customer DVI approval page
│   │   │   └── invoice/
│   │   │       └── [token]/
│   │   │           └── page.tsx        # Customer invoice view
│   │   │
│   │   └── api/
│   │       ├── auth/
│   │       │   └── [...nextauth]/
│   │       │       └── route.ts        # NextAuth.js handler
│   │       │
│   │       ├── repair-orders/
│   │       │   ├── route.ts            # GET (list), POST (create)
│   │       │   └── [id]/
│   │       │       ├── route.ts        # GET, PUT, DELETE
│   │       │       ├── line-items/
│   │       │       │   ├── route.ts    # GET, POST
│   │       │       │   └── [itemId]/
│   │       │       │       └── route.ts
│   │       │       ├── invoice/
│   │       │       │   └── route.ts    # POST — generate/send invoice
│   │       │       ├── status/
│   │       │       │   └── route.ts    # PATCH — advance status
│   │       │       └── dvi/
│   │       │           └── route.ts    # POST — create DVI for RO
│   │       │
│   │       ├── dvi-inspections/
│   │       │   └── [id]/
│   │       │       ├── route.ts        # GET, PATCH
│   │       │       ├── send/
│   │       │       │   └── route.ts    # POST — send DVI link via SMS
│   │       │       └── items/
│   │       │           ├── route.ts    # GET, POST
│   │       │           └── [itemId]/
│   │       │               ├── route.ts
│   │       │               └── photos/
│   │       │                   ├── route.ts        # POST — create photo record
│   │       │                   └── presign/
│   │       │                       └── route.ts    # POST — get presigned S3 URL
│   │       │
│   │       ├── public/
│   │       │   └── dvi/
│   │       │       └── [token]/
│   │       │           ├── route.ts    # GET — fetch DVI for customer
│   │       │           └── approve/
│   │       │               └── route.ts # POST — customer approves/declines items
│   │       │
│   │       ├── customers/
│   │       │   ├── route.ts            # GET, POST
│   │       │   ├── import/
│   │       │   │   └── route.ts        # POST — CSV import
│   │       │   ├── migrate/
│   │       │   │   └── shopmonkey/
│   │       │   │       └── route.ts    # POST — Shopmonkey migration
│   │       │   └── [id]/
│   │       │       ├── route.ts        # GET, PUT, DELETE
│   │       │       └── vehicles/
│   │       │           ├── route.ts    # GET, POST
│   │       │           └── [vehicleId]/
│   │       │               └── route.ts
│   │       │
│   │       ├── sms/
│   │       │   ├── threads/
│   │       │   │   ├── route.ts        # GET — list threads
│   │       │   │   └── [customerId]/
│   │       │   │       ├── route.ts    # GET — thread messages
│   │       │   │       └── messages/
│   │       │   │           └── route.ts # POST — send SMS
│   │       │   └── credits/
│   │       │       └── route.ts        # GET balance, POST top-up
│   │       │
│   │       ├── quickbooks/
│   │       │   ├── connect/
│   │       │   │   └── route.ts        # GET — initiate OAuth
│   │       │   ├── callback/
│   │       │   │   └── route.ts        # GET — OAuth callback
│   │       │   ├── disconnect/
│   │       │   │   └── route.ts        # POST
│   │       │   ├── sync/
│   │       │   │   └── route.ts        # POST — manual sync trigger
│   │       │   └── sync-log/
│   │       │       └── route.ts        # GET — sync status dashboard
│   │       │
│   │       ├── parts/
│   │       │   └── search/
│   │       │       └── route.ts        # GET — catalog search
│   │       │
│   │       ├── ap-invoices/
│   │       │   ├── route.ts            # GET, POST
│   │       │   └── [id]/
│   │       │       └── route.ts
│   │       │
│   │       ├── ap-alerts/
│   │       │   └── route.ts            # GET, PATCH (resolve)
│   │       │
│   │       ├── reports/
│   │       │   ├── revenue/
│   │       │   │   └── route.ts
│   │       │   ├── open-ros/
│   │       │   │   └── route.ts
│   │       │   ├── top-services/
│   │       │   │   └── route.ts
│   │       │   └── invoices/
│   │       │       └── route.ts        # GET + CSV export
│   │       │
│   │       ├── settings/
│   │       │   ├── shop/
│   │       │   │   └── route.ts        # GET, PUT
│   │       │   └── users/
│   │       │       ├── route.ts        # GET, POST
│   │       │       └── [userId]/
│   │       │           └── route.ts    # PUT, DELETE
│   │       │
│   │       ├── export/
│   │       │   └── route.ts            # POST — trigger full data export ZIP
│   │       │
│   │       └── inngest/
│   │           └── route.ts            # Inngest webhook receiver
│   │
│   ├── webhooks/                       # Outside /api/ — no auth middleware
│   │   └── twilio/
│   │       ├── inbound/
│   │       │   └── route.ts            # POST — inbound SMS from Twilio
│   │       └── status/
│   │           └── route.ts            # POST — SMS delivery status callback
│   │
│   ├── components/
│   │   ├── ui/                         # shadcn/ui primitives
│   │   │   ├── button.tsx
│   │   │   ├── input.tsx
│   │   │   ├── dialog.tsx
│   │   │   ├── table.tsx
│   │   │   ├── badge.tsx
│   │   │   ├── toast.tsx
│   │   │   └── ...
│   │   │
│   │   ├── forms/
│   │   │   ├── CustomerSelect.tsx      # Searchable customer dropdown
│   │   │   ├── VehicleSelect.tsx       # Vehicle dropdown (filtered by customer)
│   │   │   ├── TechnicianSelect.tsx
│   │   │   └── PhoneInput.tsx
│   │   │
│   │   ├── layout/
│   │   │   ├── Sidebar.tsx
│   │   │   ├── Header.tsx
│   │   │   └── MobileNav.tsx
│   │   │
│   │   └── features/
│   │       ├── repair-orders/
│   │       │   ├── RepairOrderList.tsx
│   │       │   ├── RepairOrderCard.tsx
│   │       │   ├── RepairOrderForm.tsx
│   │       │   ├── LineItemEditor.tsx
│   │       │   ├── StatusBadge.tsx
│   │       │   └── RoStatusStepper.tsx
│   │       │
│   │       ├── dvi/
│   │       │   ├── DviEditor.tsx       # Tech-facing DVI creation
│   │       │   ├── DviItem.tsx
│   │       │   ├── DviPhotoCapture.tsx # Camera input + presign + upload
│   │       │   ├── DviConditionPicker.tsx # Green/Yellow/Red with text labels
│   │       │   ├── DviCustomerView.tsx # Customer-facing approval page
│   │       │   └── DviAuditLog.tsx
│   │       │
│   │       ├── customers/
│   │       │   ├── CustomerList.tsx
│   │       │   ├── CustomerForm.tsx
│   │       │   ├── CustomerHistory.tsx
│   │       │   ├── CsvImportWizard.tsx
│   │       │   └── ShopmonkeyMigration.tsx
│   │       │
│   │       ├── sms/
│   │       │   ├── SmsThread.tsx
│   │       │   ├── SmsComposer.tsx
│   │       │   ├── SmsTemplateSelector.tsx
│   │       │   └── SmsInbox.tsx
│   │       │
│   │       ├── quickbooks/
│   │       │   ├── QbConnectButton.tsx
│   │       │   └── QbSyncDashboard.tsx
│   │       │
│   │       ├── parts/
│   │       │   ├── PartsSearch.tsx
│   │       │   ├── PartsResultList.tsx
│   │       │   └── MarkupRulesForm.tsx
│   │       │
│   │       ├── reports/
│   │       │   ├── RevenueSummary.tsx
│   │       │   ├── OpenRoAging.tsx
│   │       │   └── TopServices.tsx
│   │       │
│   │       └── ap-reconciliation/
│   │           ├── ApAlertList.tsx
│   │           └── ApInvoiceForm.tsx
│   │
│   ├── lib/
│   │   ├── db/
│   │   │   ├── client.ts               # Prisma client singleton (global for dev HMR)
│   │   │   └── queries/                # Reusable query helpers
│   │   │       ├── repair-orders.ts
│   │   │       ├── customers.ts
│   │   │       └── reports.ts
│   │   │
│   │   ├── auth/
│   │   │   ├── config.ts               # NextAuth.js providers + callbacks
│   │   │   ├── guards.ts               # requireAuth(), requireRole(), requireShopAccess()
│   │   │   └── session.ts              # Session type augmentation
│   │   │
│   │   ├── crypto/
│   │   │   └── index.ts                # encrypt(), decrypt() using AES-256-GCM
│   │   │
│   │   ├── s3/
│   │   │   ├── client.ts               # AWS S3 client singleton
│   │   │   ├── presign.ts              # generatePresignedUploadUrl()
│   │   │   └── lifecycle.ts            # deleteFile(), moveToGlacier()
│   │   │
│   │   ├── twilio/
│   │   │   ├── client.ts               # Twilio client singleton
│   │   │   ├── sms.ts                  # sendSms(), renderTemplate()
│   │   │   └── webhook.ts              # validateTwilioSignature()
│   │   │
│   │   ├── quickbooks/
│   │   │   ├── oauth.ts                # generateAuthUrl(), handleCallback(), refreshToken()
│   │   │   ├── client.ts               # Authenticated QB API client factory
│   │   │   ├── sync.ts                 # syncInvoice(), syncCustomer(), syncPayment()
│   │   │   └── mapping.ts              # ShopFlow → QB entity mapping
│   │   │
│   │   ├── parts/
│   │   │   ├── napa.ts                 # NAPA catalog API client
│   │   │   ├── autozone.ts             # AutoZone catalog API client
│   │   │   └── catalog.ts              # searchParts() — parallel fan-out with fallback
│   │   │
│   │   ├── pdf/
│   │   │   └── invoice.ts              # generateInvoicePdf() → Buffer
│   │   │
│   │   ├── services/
│   │   │   ├── repair-order.service.ts
│   │   │   ├── dvi.service.ts
│   │   │   ├── customer.service.ts
│   │   │   ├── vehicle.service.ts
│   │   │   ├── sms.service.ts
│   │   │   ├── quickbooks.service.ts
│   │   │   ├── parts.service.ts
│   │   │   ├── ap-reconciliation.service.ts
│   │   │   ├── import.service.ts       # CSV import + Shopmonkey migration
│   │   │   └── export.service.ts       # Full data export ZIP
│   │   │
│   │   ├── errors/
│   │   │   └── index.ts                # ValidationError, NotFoundError, ForbiddenError, etc.
│   │   │
│   │   ├── validators/
│   │   │   ├── repair-order.ts         # CreateRepairOrderSchema, UpdateRoSchema, etc.
│   │   │   ├── customer.ts
│   │   │   ├── dvi.ts
│   │   │   ├── sms.ts
│   │   │   └── ...
│   │   │
│   │   └── utils/
│   │       ├── money.ts                # Decimal math helpers (formatCurrency, applyMarkup)
│   │       ├── ro-number.ts            # generateRoNumber() — atomic increment
│   │       ├── query-keys.ts           # TanStack Query key factory
│   │       ├── api.ts                  # withErrorHandler(), successResponse(), errorResponse()
│   │       └── date.ts                 # formatDate(), parseDate() wrappers
│   │
│   ├── hooks/
│   │   ├── useShop.ts                  # Current shop from session
│   │   ├── useDebounce.ts
│   │   └── useFileUpload.ts            # S3 presign + direct upload hook
│   │
│   └── types/
│       ├── next-auth.d.ts              # Session type augmentation
│       ├── api.d.ts                    # API response types
│       └── domain.d.ts                 # Shared domain types
│
└── tests/
    ├── unit/
    │   ├── utils/
    │   └── validators/
    ├── integration/
    │   ├── api/
    │   │   ├── repair-orders.test.ts
    │   │   ├── dvi.test.ts
    │   │   └── quickbooks.test.ts
    │   └── services/
    │       └── ap-reconciliation.test.ts
    ├── e2e/
    │   ├── marcus-journey.spec.ts      # Owner-mechanic first week
    │   ├── derek-migration.spec.ts     # Shopmonkey migration
    │   ├── dvi-workflow.spec.ts        # Tech captures DVI, customer approves
    │   └── qb-sync.spec.ts
    └── fixtures/
        └── factories.ts                # Test data factories
```

---

### Prisma Data Model

```prisma
// prisma/schema.prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider  = "postgresql"
  url       = env("DATABASE_URL")
  directUrl = env("DIRECT_URL")
}

model Shop {
  id                  String   @id @default(cuid())
  name                String
  address             String?
  phone               String?
  email               String?
  logo_url            String?
  license_number      String?
  tax_rate_labor      Decimal  @default(0) @db.Decimal(5, 4)
  tax_rate_parts      Decimal  @default(0) @db.Decimal(5, 4)
  shop_supply_pct     Decimal  @default(0.05) @db.Decimal(5, 4)
  shop_supply_max     Decimal  @default(40) @db.Decimal(10, 2)
  default_labor_rate  Decimal  @default(0) @db.Decimal(10, 2)
  sms_credits         Int      @default(250)
  qb_realm_id         String?
  qb_access_token     String?  // AES-256-GCM encrypted
  qb_refresh_token    String?  // AES-256-GCM encrypted
  qb_token_expires_at DateTime?
  created_at          DateTime @default(now())
  updated_at          DateTime @updatedAt

  users            User[]
  customers        Customer[]
  repair_orders    RepairOrder[]
  sms_threads      SmsThread[]
  sms_templates    SmsTemplate[]
  qb_sync_logs     QbSyncLog[]
  ap_invoices      ApInvoice[]
  ap_alerts        ApAlert[]
  estimate_templates EstimateTemplate[]
  markup_rules     PartsMarkupRule[]
}

model User {
  id            String   @id @default(cuid())
  shop_id       String
  shop          Shop     @relation(fields: [shop_id], references: [id], onDelete: Cascade)
  email         String   @unique
  name          String
  role          UserRole
  password_hash String?
  totp_secret   String?  // AES-256-GCM encrypted
  totp_enabled  Boolean  @default(false)
  created_at    DateTime @default(now())
  updated_at    DateTime @updatedAt

  assigned_ros RepairOrder[] @relation("TechnicianROs")

  @@index([shop_id])
}

enum UserRole {
  OWNER
  TECHNICIAN
  ACCOUNTANT
}

model Customer {
  id         String   @id @default(cuid())
  shop_id    String
  shop       Shop     @relation(fields: [shop_id], references: [id], onDelete: Cascade)
  first_name String
  last_name  String
  email      String?  // AES-256-GCM encrypted
  phone      String   // AES-256-GCM encrypted
  address    String?  // AES-256-GCM encrypted
  notes      String?
  deleted_at DateTime? // Soft delete; purge after 30 days
  created_at DateTime @default(now())
  updated_at DateTime @updatedAt

  vehicles      Vehicle[]
  repair_orders RepairOrder[]
  sms_threads   SmsThread[]

  @@index([shop_id])
}

model Vehicle {
  id            String   @id @default(cuid())
  shop_id       String
  customer_id   String
  customer      Customer @relation(fields: [customer_id], references: [id], onDelete: Cascade)
  year          Int
  make          String
  model         String
  trim          String?
  engine        String?
  transmission  String?
  vin           String?
  license_plate String?
  color         String?
  notes         String?
  created_at    DateTime @default(now())
  updated_at    DateTime @updatedAt

  mileage_records MileageRecord[]
  repair_orders   RepairOrder[]

  @@index([shop_id])
  @@index([customer_id])
}

model MileageRecord {
  id          String   @id @default(cuid())
  vehicle_id  String
  vehicle     Vehicle  @relation(fields: [vehicle_id], references: [id], onDelete: Cascade)
  mileage     Int
  ro_id       String?
  recorded_at DateTime @default(now())
}

model RepairOrder {
  id               String   @id @default(cuid())
  shop_id          String
  ro_number        String
  customer_id      String
  customer         Customer @relation(fields: [customer_id], references: [id])
  vehicle_id       String
  vehicle          Vehicle  @relation(fields: [vehicle_id], references: [id])
  technician_id    String?
  technician       User?    @relation("TechnicianROs", fields: [technician_id], references: [id])
  status           RoStatus @default(ESTIMATE)
  mileage_in       Int?
  mileage_out      Int?
  internal_notes   String?
  subtotal_labor   Decimal  @default(0) @db.Decimal(10, 2)
  subtotal_parts   Decimal  @default(0) @db.Decimal(10, 2)
  shop_supplies    Decimal  @default(0) @db.Decimal(10, 2)
  tax_amount       Decimal  @default(0) @db.Decimal(10, 2)
  total            Decimal  @default(0) @db.Decimal(10, 2)
  invoice_token    String?  @unique @default(cuid())
  invoice_pdf_url  String?
  invoice_sent_at  DateTime?
  paid_at          DateTime?
  created_at       DateTime @default(now())
  updated_at       DateTime @updatedAt

  line_items       RoLineItem[]
  dvi_inspections  DviInspection[]
  sms_messages     SmsMessage[]
  qb_sync_logs     QbSyncLog[]

  @@unique([shop_id, ro_number])
  @@index([shop_id, status])
  @@index([shop_id, customer_id])
  @@index([shop_id, created_at])
}

enum RoStatus {
  ESTIMATE
  APPROVED
  IN_PROGRESS
  COMPLETE
  INVOICED
}

model RoLineItem {
  id          String       @id @default(cuid())
  ro_id       String
  ro          RepairOrder  @relation(fields: [ro_id], references: [id], onDelete: Cascade)
  type        LineItemType
  description String
  part_number String?
  quantity    Decimal      @default(1) @db.Decimal(10, 3)
  unit_cost   Decimal      @default(0) @db.Decimal(10, 2)
  unit_price  Decimal      @default(0) @db.Decimal(10, 2)
  total_price Decimal      @default(0) @db.Decimal(10, 2)
  sort_order  Int          @default(0)
  created_at  DateTime     @default(now())

  @@index([ro_id])
}

enum LineItemType {
  LABOR
  PART
  FEE
}

model DviInspection {
  id               String    @id @default(cuid())
  ro_id            String
  ro               RepairOrder @relation(fields: [ro_id], references: [id], onDelete: Cascade)
  share_token      String    @unique @default(cuid())
  share_expires_at DateTime
  status           DviStatus @default(DRAFT)
  sent_at          DateTime?
  viewed_at        DateTime?
  created_at       DateTime  @default(now())
  updated_at       DateTime  @updatedAt

  items     DviItem[]
  audit_logs DviAuditLog[]

  @@index([ro_id])
}

enum DviStatus {
  DRAFT
  SENT
  VIEWED
  PARTIALLY_APPROVED
  FULLY_APPROVED
}

model DviItem {
  id              String        @id @default(cuid())
  dvi_id          String
  dvi             DviInspection @relation(fields: [dvi_id], references: [id], onDelete: Cascade)
  name            String
  category        String?
  condition       DviCondition
  tech_notes      String?
  price           Decimal?      @db.Decimal(10, 2)
  customer_action DviAction?
  actioned_at     DateTime?
  sort_order      Int           @default(0)

  photos DviPhoto[]

  @@index([dvi_id])
}

enum DviCondition {
  GREEN
  YELLOW
  RED
}

enum DviAction {
  APPROVED
  DECLINED
}

model DviPhoto {
  id          String   @id @default(cuid())
  dvi_item_id String
  dvi_item    DviItem  @relation(fields: [dvi_item_id], references: [id], onDelete: Cascade)
  s3_key      String
  s3_bucket   String
  created_at  DateTime @default(now())
}

model DviAuditLog {
  id          String        @id @default(cuid())
  dvi_id      String
  dvi         DviInspection @relation(fields: [dvi_id], references: [id])
  action      String        // LINK_VIEWED, ITEM_APPROVED, ITEM_DECLINED, DVI_COMPLETED
  dvi_item_id String?
  ip_address  String
  user_agent  String?
  created_at  DateTime      @default(now())
  // NO updated_at — append-only, immutable (NFR11)

  @@index([dvi_id])
}

model SmsThread {
  id          String   @id @default(cuid())
  shop_id     String
  shop        Shop     @relation(fields: [shop_id], references: [id], onDelete: Cascade)
  customer_id String
  customer    Customer @relation(fields: [customer_id], references: [id])
  created_at  DateTime @default(now())

  messages SmsMessage[]

  @@unique([shop_id, customer_id])
}

model SmsMessage {
  id          String       @id @default(cuid())
  thread_id   String
  thread      SmsThread    @relation(fields: [thread_id], references: [id])
  ro_id       String?
  ro          RepairOrder? @relation(fields: [ro_id], references: [id])
  direction   SmsDirection
  body        String
  twilio_sid  String?
  status      SmsStatus    @default(QUEUED)
  sent_at     DateTime?
  delivered_at DateTime?
  created_at  DateTime     @default(now())

  @@index([thread_id])
}

enum SmsDirection {
  OUTBOUND
  INBOUND
}

enum SmsStatus {
  QUEUED
  SENT
  DELIVERED
  UNDELIVERED
  FAILED
  RECEIVED
}

model SmsTemplate {
  id         String   @id @default(cuid())
  shop_id    String
  shop       Shop     @relation(fields: [shop_id], references: [id], onDelete: Cascade)
  name       String
  body       String   // Supports {{customerName}}, {{roNumber}}, {{shopName}}, {{dviLink}}
  created_at DateTime @default(now())
  updated_at DateTime @updatedAt

  @@index([shop_id])
}

model QbSyncLog {
  id          String      @id @default(cuid())
  shop_id     String
  shop        Shop        @relation(fields: [shop_id], references: [id], onDelete: Cascade)
  ro_id       String?
  ro          RepairOrder? @relation(fields: [ro_id], references: [id])
  event_type  String      // INVOICE_SYNC, PAYMENT_SYNC, CUSTOMER_SYNC
  status      SyncStatus
  qb_entity_id String?
  error_msg   String?
  created_at  DateTime    @default(now())

  @@index([shop_id, status])
  @@index([shop_id, created_at])
}

enum SyncStatus {
  PENDING
  SUCCESS
  FAILED
}

model ApInvoice {
  id             String   @id @default(cuid())
  shop_id        String
  shop           Shop     @relation(fields: [shop_id], references: [id], onDelete: Cascade)
  vendor_name    String
  invoice_number String
  invoice_date   DateTime
  total          Decimal  @db.Decimal(10, 2)
  notes          String?
  created_at     DateTime @default(now())

  line_items ApInvoiceItem[]
  alerts     ApAlert[]

  @@index([shop_id])
}

model ApInvoiceItem {
  id          String    @id @default(cuid())
  invoice_id  String
  invoice     ApInvoice @relation(fields: [invoice_id], references: [id], onDelete: Cascade)
  part_number String?
  description String
  quantity    Decimal   @db.Decimal(10, 3)
  unit_cost   Decimal   @db.Decimal(10, 2)
  is_core     Boolean   @default(false)
}

model ApAlert {
  id          String       @id @default(cuid())
  shop_id     String
  shop        Shop         @relation(fields: [shop_id], references: [id], onDelete: Cascade)
  invoice_id  String?
  invoice     ApInvoice?   @relation(fields: [invoice_id], references: [id])
  alert_type  ApAlertType
  description String
  amount      Decimal      @db.Decimal(10, 2)
  resolved    Boolean      @default(false)
  created_at  DateTime     @default(now())

  @@index([shop_id, resolved])
}

enum ApAlertType {
  MISSED_CREDIT
  DUPLICATE_CHARGE
  UNRETURNED_CORE
}

model EstimateTemplate {
  id         String   @id @default(cuid())
  shop_id    String
  shop       Shop     @relation(fields: [shop_id], references: [id], onDelete: Cascade)
  name       String
  items      Json     // Array of { type, description, partNumber?, quantity, unitPrice }
  created_at DateTime @default(now())
  updated_at DateTime @updatedAt

  @@index([shop_id])
}

model PartsMarkupRule {
  id          String   @id @default(cuid())
  shop_id     String
  shop        Shop     @relation(fields: [shop_id], references: [id], onDelete: Cascade)
  category    String?  // null = global rule; non-null = category-specific
  markup_pct  Decimal  @db.Decimal(5, 4) // e.g. 0.35 = 35%
  created_at  DateTime @default(now())
  updated_at  DateTime @updatedAt

  @@unique([shop_id, category])
}

model PartsCache {
  id          String   @id @default(cuid())
  part_number String
  source      String   // NAPA, AUTOZONE
  data        Json     // Full API response
  cached_at   DateTime @default(now())

  @@unique([part_number, source])
  @@index([cached_at])
}
```

---

### Architectural Boundaries

**API Boundaries:**

- All authenticated API routes: `/api/**` — protected by NextAuth session middleware
- Public customer-facing routes: `/api/public/**` — no session required; token-validated
- Webhook routes: `/webhooks/**` — outside middleware; validated by provider-specific signature
- Background job receiver: `/api/inngest` — validated by Inngest signing key

**Component Boundaries:**

- `src/components/ui/` — Pure presentational, no business logic, no data fetching
- `src/components/features/` — Business logic allowed, TanStack Query hooks, no direct DB access
- `src/lib/services/` — All database access; no HTTP request/response handling
- `src/app/api/` — HTTP layer only: parse request, validate, call service, return response

**Service Boundaries:**

- `repair-order.service.ts` → owns RO CRUD, status transitions, RO number generation
- `dvi.service.ts` → owns DVI creation, photo management, customer approval, audit logging
- `customer.service.ts` → owns customer CRUD, CSV import, PII encryption/decryption
- `import.service.ts` → owns Shopmonkey migration parsing and bulk customer import
- `quickbooks.service.ts` → owns QB token management, sync orchestration (delegates to `lib/quickbooks/`)
- `ap-reconciliation.service.ts` → owns discrepancy detection algorithm

**Data Flow — RO Creation:**

```
Browser → POST /api/repair-orders
         → validateBody (Zod)
         → requireAuth + requireRole(OWNER)
         → repairOrderService.create()
            → prisma.$transaction([createRo, createLineItems])
            → inngest.send('shopflow/repair-order.created')
         → return { data: ro }
```

**Data Flow — DVI Customer Approval:**

```
Customer Browser → POST /api/public/dvi/[token]/approve
                 → validate token (not expired, exists)
                 → dviService.recordApproval(token, itemIds, ipAddress)
                    → prisma.dviItem.update({ customer_action: APPROVED })
                    → prisma.dviAuditLog.create({ ... }) // append-only
                    → update DviInspection status
                 → return { data: { approvedItems, dviStatus } }
                 → (RO page polls every 30s and shows updated status)
```

**Data Flow — QB Sync:**

```
Invoice Created → inngest.send('shopflow/invoice.created', { roId, shopId })
                → Inngest Function: qb-sync
                   → qbSyncLog.create({ status: PENDING })
                   → quickbooksService.syncInvoice(roId, shopId)
                      → get shop QB tokens (decrypt)
                      → refresh token if expired
                      → call QBO API
                      → update qbSyncLog { status: SUCCESS, qb_entity_id }
                   → on failure: retry 3x with backoff
                   → on final failure: inngest.send('shopflow/qb-sync.failed')
                      → send email alert to shop owner
```

**External Integration Points:**

| Integration | Direction | Pattern | Failure Handling |
|---|---|---|---|
| QuickBooks Online | Outbound | OAuth 2.0 + REST | Retry queue via Inngest; error surfaced in sync dashboard |
| Twilio (SMS out) | Outbound | REST API | Retry once; failed status in thread |
| Twilio (SMS in) | Inbound webhook | POST from Twilio | Validate signature; idempotent processing |
| NAPA Parts | Outbound | REST API | Parallel with AutoZone; show partial results if one fails |
| AutoZone Parts | Outbound | REST API | Parallel with NAPA; show partial results if one fails |
| AWS S3 | Outbound | Presigned URL (client-direct) | Server-side: generate new presigned URL on retry |
| Inngest | Outbound events | HTTP | Fire-and-forget from API; Inngest handles reliability |

---

## Architecture Validation Results

### Coherence Validation

**Decision Compatibility:**

All selected technologies are compatible and actively maintained as of 2026:
- Next.js 15 + React 19 + TypeScript 5.x — official stack, zero conflicts
- Prisma 6.x works with Supabase Postgres 16 via standard Postgres driver
- NextAuth.js v5 (Auth.js) integrates natively with Next.js App Router
- TanStack Query v5 + Zustand + React Hook Form — all client-compatible, no conflicts
- Inngest works as a Next.js Route Handler receiver — no server process required
- shadcn/ui + Tailwind CSS — co-designed for compatibility
- `@ducanh2912/next-pwa` — maintained Next.js 14/15 compatible PWA wrapper

**Pattern Consistency:**

- Service layer pattern consistently applied: all DB access goes through `src/lib/services/`
- Multi-tenancy guard applied at service layer: `shop_id` always from session
- API response format `{ data, error }` applied uniformly via `withErrorHandler`
- Decimal handling with `Prisma.Decimal` applied to all money fields
- Encryption applied consistently to all PII and OAuth token fields

**Structure Alignment:**

- Route groups `(auth)` / `(dashboard)` / `public` map cleanly to the three access patterns
- Feature folder structure in `components/features/` maps 1:1 to PRD capability categories
- Service files in `lib/services/` map 1:1 to domain entities

---

### Requirements Coverage Validation

**Functional Requirements Coverage:**

All 70 functional requirements are addressed:

| Category | FRs | Coverage |
|---|---|---|
| Work Orders (FR1–FR11) | 11 | RepairOrder service + RoLineItem model + PDF generation via `lib/pdf/` |
| DVI (FR12–FR22) | 11 | DviInspection/DviItem/DviPhoto models; presigned S3 upload; public token route; DviAuditLog append-only |
| SMS (FR23–FR30) | 8 | SmsThread/SmsMessage models; Twilio integration; SmsTemplate model; credits on Shop model |
| QB Sync (FR31–FR39) | 9 | QbSyncLog model; `lib/quickbooks/` OAuth + sync; Inngest background job; sync dashboard route |
| Parts (FR40–FR45) | 6 | `lib/parts/catalog.ts` with NAPA + AutoZone clients; PartsMarkupRule model; PartsCache table |
| Customer/Vehicle (FR46–FR52) | 7 | Customer/Vehicle/MileageRecord models; `import.service.ts` for CSV + Shopmonkey; encrypted PII |
| AP Reconciliation (FR53–FR57) | 5 | ApInvoice/ApInvoiceItem/ApAlert models; `ap-reconciliation.service.ts` |
| Reports (FR58–FR62) | 5 | Report API routes with aggregation queries; CSV export via stream |
| Users/Accounts (FR63–FR70) | 8 | NextAuth.js; UserRole enum; `export.service.ts`; soft-delete with `deleted_at` |

**Non-Functional Requirements Coverage:**

| NFR | How Addressed |
|---|---|
| NFR1 (< 2s page load) | RSC for data-heavy pages; TanStack Query cache; Vercel CDN |
| NFR2 (< 5s photo upload) | Direct-to-S3 presigned upload bypasses server; no server bottleneck |
| NFR3 (< 3s parts search) | `Promise.allSettled` parallel fan-out; PartsCache table for recent queries |
| NFR4 (< 5min QB sync) | Inngest processes within seconds of invoice creation; not batch |
| NFR6 (TLS 1.3) | Vercel enforces TLS; S3 presigned URLs are HTTPS |
| NFR7 (PII encrypted) | AES-256-GCM on email, phone, address fields via `lib/crypto/` |
| NFR8 (PCI-DSS) | No card data stored; Stripe delegated entirely (v1.1) |
| NFR11 (immutable audit log) | `DviAuditLog` has no `updated_at`; no UPDATE route exists |
| NFR12 (tech can't see financials) | `requireRole(OWNER, ACCOUNTANT)` guards on invoice/payment routes |
| NFR14 (99.9% uptime) | Vercel SLA 99.99%; Supabase Pro SLA 99.9% |
| NFR15 (zero data loss) | Prisma transactions; S3 PUT confirmation before DB record |
| NFR18 (10K shops) | Row-level tenancy + indexes; Supabase PgBouncer pools |
| NFR25 (tablet-friendly) | Tailwind responsive; Radix UI large touch targets |
| NFR26 (glove-friendly DVI) | `min-h-[44px] min-w-[44px]` enforced on DVI condition picker buttons |
| NFR27 (colorblind accessible) | DviConditionPicker shows text label AND color dot |
| NFR28 (WCAG 2.1 AA) | shadcn/ui Radix primitives; customer-facing DVI/invoice pages audited |
| NFR29–30 (CCPA) | Customer delete endpoint; `deleted_at` soft delete; 30-day purge job |
| NFR31 (7-year DVI audit) | DviAuditLog retained in Postgres; S3 exports to Glacier |
| NFR32 (7-year invoices) | Invoice PDFs in S3 with Glacier lifecycle after 12 months |

---

### Architecture Completeness Checklist

**Requirements Analysis**
- [x] Project context thoroughly analyzed — 70 FRs + 32 NFRs mapped
- [x] Scale and complexity assessed — Medium; 10K shop target sized
- [x] Technical constraints identified — QB API versioning, Twilio webhooks, PWA camera
- [x] Cross-cutting concerns mapped — multi-tenancy, encryption, immutable audit, background jobs

**Architectural Decisions**
- [x] Critical decisions documented — Next.js 15, Postgres/Prisma, NextAuth.js, Inngest, S3
- [x] Technology stack fully specified — all dependencies and versions identified
- [x] Integration patterns defined — QB OAuth, Twilio webhooks, S3 presign, Inngest events
- [x] Performance considerations addressed — RSC, presigned upload, parallel parts fan-out, polling

**Implementation Patterns**
- [x] Naming conventions established — DB, API, code all specified
- [x] Structure patterns defined — feature-based component organization
- [x] Communication patterns specified — TanStack Query key factory, optimistic updates
- [x] Process patterns documented — error handling, loading states, service layer

**Project Structure**
- [x] Complete directory structure defined — full tree with all files
- [x] Component boundaries established — ui / forms / features / services separation
- [x] Integration points mapped — external API data flows documented
- [x] Prisma schema defined — all models, relations, indexes, enums

---

### Architecture Readiness Assessment

**Overall Status:** READY FOR IMPLEMENTATION

**Confidence Level:** High — all 70 FRs and 32 NFRs are architecturally addressed with concrete implementation decisions

**Key Strengths:**

1. **Single deployment unit** — Next.js monorepo eliminates infra complexity for a 2–4 person team
2. **Serverless background jobs** — Inngest handles QB sync reliability without a dedicated worker server
3. **Presigned S3 upload** — DVI photo upload bypasses API server; meets 5s/4G NFR without infra scaling
4. **Row-level multi-tenancy** — Simple, proven pattern; `shop_id` indexed on all tenant tables
5. **Service layer isolation** — DB access centralized; easy to test, easy to audit for security
6. **Append-only audit log** — DviAuditLog immutability enforced by absence of UPDATE routes

**Areas for Future Enhancement:**

1. Redis/Upstash caching layer — add when parts search latency becomes an issue at scale
2. Read replica for reports — add at 5,000+ shops when report queries impact write performance
3. WebSocket for DVI real-time — replace 30s polling with Supabase Realtime when polling creates load
4. Multi-region Postgres — Supabase supports this; defer until geographic expansion
5. QB API version monitoring — set up automated alert when QB announces API deprecation

---

### Implementation Handoff

**AI Agent Guidelines:**

1. Follow the service layer pattern: all DB access through `src/lib/services/*.service.ts`
2. Inject `shop_id` from session only — reject any `shopId` from client request body
3. Use `withErrorHandler` wrapper on every API route
4. Use `Prisma.Decimal` for all money values — never JavaScript `number`
5. Use the `queryKeys` factory for all TanStack Query cache keys
6. Encrypt PII fields via `lib/crypto/` before writing to DB — decrypt on read
7. DVI audit log is append-only — no UPDATE or DELETE on `dvi_audit_logs`
8. Use Inngest for any operation that calls an external API (QB, Twilio status, AP scan)
9. All public token routes validate token expiry and existence before processing
10. Zod validation on every POST/PUT/PATCH before calling service layer

**First Implementation Story:**

```bash
# Story 1: Project initialization
npx create-next-app@latest shopflow --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
cd shopflow

# Add core dependencies
npm install prisma @prisma/client @auth/prisma-adapter next-auth@beta
npm install @tanstack/react-query zustand react-hook-form @hookform/resolvers zod
npm install @aws-sdk/client-s3 @aws-sdk/s3-request-presigner
npm install twilio inngest decimal.js bcryptjs otpauth
npm install sonner date-fns pino

# UI
npx shadcn@latest init

# Dev dependencies
npm install -D vitest @vitejs/plugin-react playwright @playwright/test
npm install -D @ducanh2912/next-pwa

# Initialize Prisma
npx prisma init
```

**Epic Sequence Recommendation:**

1. **Foundation** — Auth, shop setup, user roles, onboarding wizard
2. **Work Orders** — RO CRUD, line items, status lifecycle, PDF invoice
3. **Customer & Vehicle Management** — Records, history, CSV import
4. **DVI** — Photo capture, condition flags, share token, customer approval, audit log
5. **Two-Way SMS** — Twilio integration, thread view, templates, credits
6. **QuickBooks Sync** — OAuth connect, sync queue, error dashboard
7. **Parts Catalog** — NAPA + AutoZone search, markup rules, add-to-RO
8. **AP Reconciliation** — Vendor invoice entry, alert detection
9. **Reports** — Revenue dashboard, open RO aging, invoice history
10. **Shopmonkey Migration** — CSV parser, bulk import wizard, demo mode
