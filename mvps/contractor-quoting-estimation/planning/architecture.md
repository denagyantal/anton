---
stepsCompleted: [1, 2, 3, 4, 5, 6, 7, 8]
inputDocuments: ['mvps/contractor-quoting-estimation/planning/prd.md', 'mvps/contractor-quoting-estimation/planning/product-brief.md', 'mvps/contractor-quoting-estimation/planning/market-research.md']
workflowType: 'architecture'
project_name: 'QuoteCraft'
user_name: 'Root'
date: '2026-03-23'
lastStep: 8
status: 'complete'
completedAt: '2026-03-23'
---

# Architecture Decision Document — QuoteCraft

## Project Context Analysis

### Requirements Overview

**Functional Requirements:**
QuoteCraft has 58 functional requirements (FR1–FR58) organized into 8 categories:
- **Quote Creation & Management** (FR1–FR11): Core CRUD for quotes with line items, tax calculation, deposits, drafts, duplication
- **Trade-Specific Templates & Line Items** (FR12–FR16): Pre-built libraries for 4 trades with searchable, one-tap-add line items and trade-specific units
- **Photo Attachment** (FR17–FR21): Camera capture, gallery selection, up to 10 photos per quote, embedded in PDF
- **PDF Generation & Delivery** (FR22–FR30): Branded professional PDFs with full quote details, delivered via SMS or email
- **E-Signature** (FR31–FR35): No-account customer signing with legal compliance, notification on signature
- **Payment & Deposits** (FR36–FR40): Stripe-powered deposit collection with automatic status updates
- **Quote Dashboard & Tracking** (FR41–FR45): Status tracking (draft/sent/viewed/signed/paid/expired), search, filter, view tracking
- **Contractor Profile** (FR46–FR50): Business profile setup, trade selection, tax defaults, brand customization
- **Offline & Sync** (FR51–FR55): Offline-first quote creation and access, auto-sync, sync indicator
- **Authentication & Account** (FR56–FR58): Email/password auth, multi-device access, password reset

**Non-Functional Requirements:**
- **Performance** (NFR1–NFR6): Sub-second quote screen loads, 3s PDF generation, 2s FCP on 4G, 60fps scrolling for 500 quotes
- **Security** (NFR7–NFR12): HTTPS/TLS 1.2+, bcrypt password hashing, Stripe-hosted checkout (no card data stored), unguessable quote tokens, session expiry, data isolation
- **Scalability** (NFR13–NFR15): 10K concurrent users, 50 photos/user average, 1M quotes with <200ms dashboard queries
- **Reliability** (NFR16–NFR18): 99.5% uptime during business hours, 99.9%+ offline sync success, Stripe webhook retries
- **Accessibility** (NFR19–NFR21): WCAG 2.1 AA for customer-facing pages, 44x44px touch targets, proper color contrast

**Scale & Complexity:**
- Primary domain: Full-stack web application (PWA)
- Complexity level: Low — standard web patterns, no regulatory compliance, single-tenant per contractor
- Estimated architectural components: ~15 (auth, quotes, templates, photos, PDF, e-sign, payments, dashboard, profile, offline/sync, notifications, landing pages, API layer, database, storage)

### Technical Constraints & Dependencies

- **PWA requirement**: Must be installable as home screen app, work offline-first with service workers
- **Mobile-first**: Primary use is one-handed phone operation on jobsites; 375–428px primary breakpoint
- **Stripe dependency**: All payment processing via Stripe Connect with Stripe-hosted checkout for PCI compliance
- **Offline-first**: Core quote creation must work without connectivity; IndexedDB for local storage; conflict resolution needed
- **SMS delivery**: Requires SMS gateway integration (Twilio or similar) for quote delivery
- **Photo handling**: Client-side compression to <500KB, camera API access, photo embedding in PDFs
- **PDF generation**: Server-side for consistency across devices and email clients

### Cross-Cutting Concerns Identified

1. **Offline/Online sync**: Affects quotes, templates, photos, and profile data. Requires conflict resolution strategy.
2. **Authentication & authorization**: Every API endpoint and data access requires contractor isolation.
3. **Photo management**: Flows through capture → compression → local storage → sync → cloud storage → PDF embedding.
4. **Error handling**: Must gracefully handle offline states, sync failures, payment failures, and PDF generation errors.
5. **Notification system**: SMS/email delivery for quotes, push notifications for signatures and payments.
6. **Multi-tenancy**: Data isolation between contractors at the database query level.

---

## Starter Template Evaluation

### Primary Technology Domain

Full-stack web application (PWA) — requires server-side rendering for landing pages, SPA for authenticated app, API routes for backend, and service worker support for offline capabilities.

### Starter Options Considered

| Option | Pros | Cons |
|--------|------|------|
| **Next.js (App Router)** | SSR for landing pages, API routes built-in, excellent PWA support via `next-pwa`, massive ecosystem, Vercel deployment | Slightly heavier than pure SPA for mobile |
| **Vite + React + Express** | Faster dev server, lighter bundle, full control | Two separate servers, no built-in SSR, more wiring needed |
| **Remix** | Excellent form handling, nested routes, progressive enhancement | Smaller ecosystem, less PWA tooling, less community support |
| **SvelteKit** | Excellent performance, smaller bundles | Smaller ecosystem, fewer developers, less library availability |

### Selected Starter: Next.js (App Router)

**Rationale for Selection:**
- Built-in API routes eliminate the need for a separate backend server — single deployment unit
- Server-side rendering for SEO-critical landing pages (contractor estimate app keywords)
- App Router with React Server Components for optimal performance
- `next-pwa` package provides production-ready service worker and offline support
- Vercel deployment with zero-config gives instant CI/CD
- Largest ecosystem for React components, Stripe integration libraries, and PDF generation
- TypeScript-first with excellent DX

**Initialization Command:**

```bash
npx create-next-app@latest quotecraft --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
```

**Architectural Decisions Provided by Starter:**

- **Language & Runtime:** TypeScript 5.x on Node.js 20 LTS
- **Styling Solution:** Tailwind CSS 3.x with PostCSS
- **Build Tooling:** Next.js built-in (Turbopack for dev, Webpack for prod)
- **Code Organization:** App Router with `src/` directory, `@/*` import aliases
- **Development Experience:** Fast Refresh, TypeScript checking, ESLint

---

## Core Architectural Decisions

### Decision Priority Analysis

**Critical Decisions (Block Implementation):**
1. Database: PostgreSQL with Prisma ORM
2. Authentication: NextAuth.js with email/password credentials
3. Payment processing: Stripe Connect with Checkout Sessions
4. PDF generation: Server-side with `@react-pdf/renderer`
5. Offline storage: IndexedDB via Dexie.js with service worker caching
6. File storage: AWS S3 (or S3-compatible like Cloudflare R2) for photos

**Important Decisions (Shape Architecture):**
1. State management: React Context + `useSWR` for server state
2. SMS delivery: Twilio API
3. Email delivery: Resend (or SendGrid)
4. E-signature: Custom implementation with canvas signature capture
5. Image compression: Browser-native Canvas API

**Deferred Decisions (Post-MVP):**
1. AI pricing engine technology
2. Native app framework (React Native vs Flutter)
3. Search infrastructure (if needed beyond database queries)
4. Analytics platform selection
5. CDN strategy for static assets

### Data Architecture

**Database: PostgreSQL 16**
- Rationale: Robust relational database ideal for structured quote/line-item data, excellent JSON support for flexible fields, free tier available on Railway/Supabase/Neon, Prisma has first-class PostgreSQL support
- Hosting: Neon (serverless PostgreSQL) for MVP — generous free tier, auto-scaling, branching for development

**ORM: Prisma 6.x**
- Rationale: Type-safe database access that generates TypeScript types from schema, excellent migration system, intuitive query API, widely adopted in Next.js ecosystem
- Schema-first approach with `prisma/schema.prisma` as single source of truth

**Data Model:**

```prisma
model User {
  id            String    @id @default(cuid())
  email         String    @unique
  passwordHash  String
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt
  profile       Profile?
  quotes        Quote[]
  templates     Template[]
}

model Profile {
  id              String  @id @default(cuid())
  userId          String  @unique
  user            User    @relation(fields: [userId], references: [id], onDelete: Cascade)
  businessName    String
  contactName     String?
  phone           String?
  email           String?
  licenseNumber   String?
  logoUrl         String?
  defaultTaxRate  Float   @default(0)
  paymentTerms    String?
  brandColor      String  @default("#2563EB")
  trade           Trade   @default(PLUMBING)
}

model Quote {
  id              String      @id @default(cuid())
  userId          String
  user            User        @relation(fields: [userId], references: [id], onDelete: Cascade)
  status          QuoteStatus @default(DRAFT)
  quoteNumber     String      @unique
  trade           Trade

  // Customer info
  customerName    String
  customerAddress String?
  customerPhone   String?
  customerEmail   String?

  // Quote details
  notes           String?
  taxRate         Float       @default(0)
  depositType     DepositType?
  depositValue    Float?
  termsText       String?

  // Tracking
  viewToken       String      @unique @default(cuid())
  viewedAt        DateTime?
  signedAt        DateTime?
  signatureData   String?     // Base64 signature image
  signerIp        String?
  paidAt          DateTime?
  expiresAt       DateTime?

  // Stripe
  stripePaymentIntentId String?
  depositAmountPaid     Float?

  // PDF
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

model QuotePhoto {
  id        String @id @default(cuid())
  quoteId   String
  quote     Quote  @relation(fields: [quoteId], references: [id], onDelete: Cascade)
  url       String
  thumbnail String?
  sortOrder Int    @default(0)
  caption   String?
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

enum Trade {
  PLUMBING
  ELECTRICAL
  HVAC
  PAINTING
}

enum QuoteStatus {
  DRAFT
  SENT
  VIEWED
  SIGNED
  PAID
  EXPIRED
}

enum DepositType {
  FIXED
  PERCENTAGE
}
```

**Caching Strategy:**
- SWR (stale-while-revalidate) for client-side data fetching with automatic revalidation
- No server-side caching layer for MVP — PostgreSQL query performance is sufficient for <10K users
- Service worker caches trade templates and line item libraries for offline access

**Migration Approach:**
- Prisma Migrate for schema migrations
- Seed scripts for trade-specific template data (plumbing, electrical, HVAC, painting line item libraries)

### Authentication & Security

**Authentication: NextAuth.js v5 (Auth.js)**
- Credentials provider with email/password
- JWT-based sessions (works well with PWA/offline)
- Session token stored in HttpOnly cookie
- 30-day session expiry with sliding window

**Password Security:**
- bcrypt with 12 salt rounds (exceeds NFR8 minimum of 10)
- Minimum 8-character password requirement

**Authorization:**
- Middleware-based route protection via Next.js `middleware.ts`
- All API routes validate `session.user.id` and scope queries to that user
- Customer quote view uses unguessable `viewToken` (cuid2 = 128+ bit entropy, satisfies NFR10)

**API Security:**
- All routes over HTTPS (enforced by hosting platform)
- CSRF protection via NextAuth.js built-in
- Rate limiting via `next-rate-limit` middleware (100 req/min per IP for API routes)
- Input validation with Zod on all API endpoints

### API & Communication Patterns

**API Design: REST via Next.js Route Handlers**
- Next.js App Router route handlers (`app/api/...`) for all backend endpoints
- RESTful resource-based URLs
- JSON request/response bodies

**Core API Endpoints:**

| Method | Endpoint | Purpose |
|--------|----------|---------|
| POST | `/api/auth/register` | Create account |
| POST | `/api/auth/[...nextauth]` | NextAuth.js auth routes |
| GET | `/api/quotes` | List quotes (with pagination, search, filters) |
| POST | `/api/quotes` | Create quote |
| GET | `/api/quotes/[id]` | Get quote details |
| PUT | `/api/quotes/[id]` | Update quote |
| DELETE | `/api/quotes/[id]` | Delete draft quote |
| POST | `/api/quotes/[id]/duplicate` | Duplicate a quote |
| POST | `/api/quotes/[id]/send` | Send quote via SMS/email |
| POST | `/api/quotes/[id]/pdf` | Generate PDF |
| GET | `/api/quotes/view/[token]` | Customer quote view (public) |
| POST | `/api/quotes/view/[token]/sign` | Customer e-sign (public) |
| POST | `/api/quotes/view/[token]/pay` | Create Stripe checkout (public) |
| GET | `/api/templates` | List templates for a trade |
| GET | `/api/templates/[id]/items` | List template line items |
| GET/PUT | `/api/profile` | Get/update contractor profile |
| POST | `/api/photos/upload` | Upload photo (returns URL) |
| POST | `/api/sync` | Sync offline quotes |
| POST | `/api/webhooks/stripe` | Stripe webhook handler |

**Error Handling Standard:**
```json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Human-readable error message",
    "details": [
      { "field": "customerEmail", "message": "Invalid email format" }
    ]
  }
}
```

HTTP status codes: 200 (success), 201 (created), 400 (validation), 401 (unauthorized), 403 (forbidden), 404 (not found), 429 (rate limited), 500 (server error).

**Input Validation:**
- Zod schemas for all request bodies and query parameters
- Validation runs server-side in route handlers; client-side for UX feedback
- Shared Zod schemas between client and server via `src/lib/validations/`

### Frontend Architecture

**State Management:**
- **Server state**: SWR (`useSWR`) for data fetching with automatic caching, revalidation, and optimistic updates
- **Local state**: React `useState`/`useReducer` for component-level state (form inputs, UI toggles)
- **Global state**: React Context for auth state and offline status indicator
- **Offline state**: Dexie.js (IndexedDB wrapper) for offline quote storage and sync queue

**Component Architecture:**
- Feature-based organization under `src/components/`
- Shared UI primitives in `src/components/ui/` (Button, Input, Select, Modal, etc.)
- Feature components in `src/components/quotes/`, `src/components/dashboard/`, etc.
- Page-level components in `src/app/` routes

**Routing Strategy:**
- Next.js App Router file-based routing
- Protected routes via middleware redirect to `/login`
- Public routes: `/`, `/login`, `/register`, `/quote/[token]` (customer view)
- Authenticated routes: `/dashboard`, `/quotes/new`, `/quotes/[id]`, `/profile`

**Performance Optimization:**
- Dynamic imports for heavy components (PDF preview, signature pad, photo editor)
- Image optimization via Next.js `<Image>` component
- Route prefetching for common navigation paths
- Virtual scrolling for quote list when >100 items (via `@tanstack/react-virtual`)

**Offline Architecture:**
- Service worker (via `next-pwa`) caches app shell, static assets, and template data
- Dexie.js IndexedDB database stores: draft quotes, line items, photos (as blobs), sync queue
- `OfflineProvider` context wraps the app, exposes `isOnline` and `pendingSyncCount`
- When offline: quotes save to IndexedDB; when online: background sync pushes to server
- Conflict resolution: last-write-wins for drafts; server-authoritative for sent/signed/paid quotes
- Photos stored as compressed blobs in IndexedDB, uploaded to S3 during sync

### Infrastructure & Deployment

**Hosting: Vercel**
- Zero-config deployment for Next.js
- Edge functions for middleware (auth, rate limiting)
- Serverless functions for API routes
- Automatic HTTPS, CDN, and preview deployments
- Free tier sufficient for MVP launch

**Database: Neon (Serverless PostgreSQL)**
- Connection pooling built-in (handles serverless cold starts)
- Generous free tier (500MB storage, unlimited compute hours for one project)
- Database branching for staging/development
- Auto-suspend for cost efficiency

**File Storage: Cloudflare R2**
- S3-compatible API, no egress fees (critical for serving photos in PDFs and customer views)
- Free tier: 10GB storage, 10M reads/month
- Accessed via AWS S3 SDK with custom endpoint

**SMS: Twilio**
- Programmable SMS for quote delivery
- Cost: ~$0.0079/SMS in US

**Email: Resend**
- Modern email API with React email templates
- Free tier: 3,000 emails/month (sufficient for MVP)
- Used for: quote delivery, password reset, signature/payment notifications

**PDF Generation: `@react-pdf/renderer`**
- Server-side React-to-PDF rendering in API routes
- Same React component model as the rest of the app
- Supports images, styled text, tables, branding
- Generated PDFs stored in R2 for re-download

**CI/CD:**
- Vercel Git integration: push to `main` → automatic deployment
- Preview deployments on pull requests
- Environment variables managed in Vercel dashboard

**Monitoring:**
- Vercel Analytics for performance monitoring (Core Web Vitals)
- Vercel Logs for serverless function monitoring
- Sentry (free tier) for error tracking in production
- Stripe Dashboard for payment monitoring

**Environment Configuration:**
```
DATABASE_URL=             # Neon PostgreSQL connection string
NEXTAUTH_SECRET=          # Random 32+ char secret for JWT signing
NEXTAUTH_URL=             # Production URL
STRIPE_SECRET_KEY=        # Stripe API secret key
STRIPE_WEBHOOK_SECRET=    # Stripe webhook signing secret
STRIPE_PUBLISHABLE_KEY=   # Stripe client-side key
R2_ACCOUNT_ID=            # Cloudflare account ID
R2_ACCESS_KEY_ID=         # R2 access key
R2_SECRET_ACCESS_KEY=     # R2 secret key
R2_BUCKET_NAME=           # R2 bucket name
R2_PUBLIC_URL=            # R2 public bucket URL
TWILIO_ACCOUNT_SID=       # Twilio account SID
TWILIO_AUTH_TOKEN=        # Twilio auth token
TWILIO_PHONE_NUMBER=      # Twilio sending phone number
RESEND_API_KEY=           # Resend API key
NEXT_PUBLIC_APP_URL=      # Public app URL for quote links
```

### Decision Impact Analysis

**Implementation Sequence:**
1. Project initialization (Next.js + Tailwind + TypeScript)
2. Database schema and Prisma setup (Neon)
3. Authentication (NextAuth.js)
4. Contractor profile CRUD
5. Trade template seeding
6. Quote builder (create, edit, line items)
7. Photo capture and upload (R2)
8. PDF generation
9. Quote delivery (SMS/email)
10. Customer quote view (public page)
11. E-signature capture
12. Stripe deposit collection
13. Quote dashboard and status tracking
14. Offline/PWA capabilities
15. Sync engine

**Cross-Component Dependencies:**
- PDF generation depends on: quotes, line items, photos, profile (logo/branding)
- E-signature depends on: customer quote view, quote status management
- Payment depends on: e-signature (pay after sign), Stripe webhook handler, quote status
- Offline sync depends on: all CRUD operations being designed for offline-first from day 1
- SMS/email delivery depends on: PDF generation (attaches PDF link)

---

## Implementation Patterns & Consistency Rules

### Naming Patterns

**Database Naming Conventions:**
- Tables: PascalCase singular (`User`, `Quote`, `LineItem`) — Prisma convention
- Columns: camelCase (`customerName`, `unitPrice`, `createdAt`)
- Foreign keys: `<related>Id` pattern (`userId`, `quoteId`, `templateId`)
- Indexes: auto-generated by Prisma; custom ones use `@@index([field1, field2])`
- Enums: UPPER_SNAKE_CASE values (`DRAFT`, `SENT`, `PLUMBING`)

**API Naming Conventions:**
- Endpoints: lowercase plural nouns (`/api/quotes`, `/api/templates`)
- Route parameters: `[id]`, `[token]` — Next.js bracket notation
- Query parameters: camelCase (`?trade=PLUMBING&search=johnson&page=1`)
- JSON response fields: camelCase (matches Prisma output directly)

**Code Naming Conventions:**
- Files: kebab-case (`quote-builder.tsx`, `use-offline-sync.ts`, `stripe-webhook.ts`)
- React components: PascalCase (`QuoteBuilder`, `LineItemRow`, `SignaturePad`)
- Functions/hooks: camelCase (`createQuote`, `useQuotes`, `generatePdf`)
- Constants: UPPER_SNAKE_CASE (`MAX_PHOTOS_PER_QUOTE`, `DEFAULT_TAX_RATE`)
- Types/interfaces: PascalCase (`Quote`, `CreateQuoteInput`, `QuoteWithLineItems`)
- Directories: kebab-case (`quote-builder/`, `ui/`, `line-items/`)

### Structure Patterns

**Project Organization: Feature-based**
- Group related components, hooks, and utilities by feature domain
- Shared UI primitives in `src/components/ui/`
- Feature components in `src/components/<feature>/`
- API route handlers organized by resource in `src/app/api/<resource>/`
- Shared logic in `src/lib/` (database, auth, validations, utils)

**Test Organization: Co-located unit tests, separate e2e**
- Unit tests: `*.test.ts` or `*.test.tsx` next to source file
- API integration tests: `__tests__/api/` directory
- E2E tests: `e2e/` directory at project root
- Test utilities: `src/test/` directory

### Format Patterns

**API Response Formats:**

Success (single resource):
```json
{ "data": { "id": "abc123", "customerName": "Lisa Johnson", ... } }
```

Success (list):
```json
{
  "data": [{ ... }, { ... }],
  "pagination": { "page": 1, "pageSize": 20, "total": 47 }
}
```

Error:
```json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Customer name is required",
    "details": [{ "field": "customerName", "message": "Required" }]
  }
}
```

**Date Formats:**
- All dates stored as ISO 8601 in UTC in the database
- All dates transmitted as ISO 8601 strings in API responses
- Client formats dates for display using `Intl.DateTimeFormat` (respects user locale)

**ID Format:**
- All entity IDs are cuid2 strings (URL-safe, collision-resistant, sortable)

### Communication Patterns

**Client-Server Communication:**
- SWR for all GET requests with automatic caching and revalidation
- `fetch` calls for mutations (POST/PUT/DELETE) with SWR cache mutation on success
- Optimistic updates for quote editing (update UI immediately, revert on error)

**Offline Sync Protocol:**
1. All write operations save to IndexedDB first (always)
2. If online: also send to server API immediately
3. If offline: queue in `syncQueue` table in IndexedDB
4. On reconnect: process sync queue in order (FIFO)
5. Server returns canonical state; client updates IndexedDB
6. Conflicts: server wins for sent/signed/paid quotes; client wins for drafts

**Notification Flow:**
- Stripe webhooks → API route → update quote status in DB
- Quote sent → Twilio SMS + Resend email (fire-and-forget, log failures)
- Quote signed/paid → server-sent events or polling (MVP: polling every 30s on dashboard)

### Process Patterns

**Error Handling:**
- API routes: try/catch wrapper, return structured error JSON, log to console (Vercel captures)
- Client: SWR error state + toast notifications for user-facing errors
- Offline errors: queue for retry, show sync failure indicator
- Payment errors: display Stripe's error messages directly (they're user-friendly)
- Never expose stack traces or internal details in API error responses

**Loading States:**
- SWR `isLoading` / `isValidating` for data fetching states
- Skeleton loaders for initial page loads (dashboard, quote list)
- Inline spinners for mutations (save, send, generate PDF)
- Full-page loading only on initial app load and auth redirect

**Form Handling:**
- React Hook Form for all forms (quote builder, profile, registration)
- Zod resolvers for form validation (same schemas as API validation)
- Auto-save drafts every 10 seconds to IndexedDB
- Debounced field validation for real-time feedback

### Enforcement Guidelines

**All AI Agents MUST:**
1. Use the exact naming conventions defined above — no exceptions for "consistency later"
2. Wrap all API route handlers in the standard error handling wrapper
3. Use Zod schemas for ALL data entering or leaving the system
4. Save to IndexedDB first, then sync to server — never skip the offline layer
5. Use SWR for all data fetching — never raw `fetch` for GET requests
6. Follow the feature-based directory organization — never create top-level component files

### Pattern Examples

**Good — API Route Handler:**
```typescript
// src/app/api/quotes/route.ts
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { prisma } from "@/lib/db";
import { createQuoteSchema } from "@/lib/validations/quote";

export async function POST(request: Request) {
  try {
    const session = await getServerSession();
    if (!session?.user?.id) {
      return NextResponse.json(
        { error: { code: "UNAUTHORIZED", message: "Authentication required" } },
        { status: 401 }
      );
    }

    const body = await request.json();
    const validated = createQuoteSchema.parse(body);

    const quote = await prisma.quote.create({
      data: { ...validated, userId: session.user.id },
    });

    return NextResponse.json({ data: quote }, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: { code: "VALIDATION_ERROR", message: "Invalid input", details: error.errors } },
        { status: 400 }
      );
    }
    console.error("Failed to create quote:", error);
    return NextResponse.json(
      { error: { code: "INTERNAL_ERROR", message: "Failed to create quote" } },
      { status: 500 }
    );
  }
}
```

**Good — SWR Data Fetching:**
```typescript
// src/hooks/use-quotes.ts
import useSWR from "swr";
import { fetcher } from "@/lib/fetcher";

export function useQuotes(filters?: QuoteFilters) {
  const params = new URLSearchParams(filters as Record<string, string>);
  return useSWR(`/api/quotes?${params}`, fetcher);
}
```

**Anti-Patterns:**
- Never use raw SQL queries — always use Prisma
- Never store photos in the database — always use R2/S3
- Never render PDFs client-side — always use server-side generation
- Never handle card data directly — always use Stripe Checkout
- Never skip the offline layer for writes — always save to IndexedDB first

---

## Project Structure & Boundaries

### Complete Project Directory Structure

```
quotecraft/
├── .env.example
├── .env.local                          # Local environment variables (gitignored)
├── .eslintrc.json
├── .gitignore
├── next.config.js                      # Next.js configuration + PWA plugin
├── package.json
├── postcss.config.js
├── tailwind.config.ts
├── tsconfig.json
├── prisma/
│   ├── schema.prisma                   # Database schema (source of truth)
│   ├── migrations/                     # Prisma migration files
│   └── seed.ts                         # Trade template seed data
├── public/
│   ├── manifest.json                   # PWA manifest
│   ├── sw.js                           # Generated service worker (by next-pwa)
│   ├── icons/                          # PWA icons (192x192, 512x512)
│   └── images/                         # Static marketing images
├── e2e/                                # Playwright E2E tests
│   ├── playwright.config.ts
│   ├── quote-creation.spec.ts
│   ├── customer-view.spec.ts
│   └── fixtures/
├── src/
│   ├── app/
│   │   ├── globals.css                 # Tailwind base styles
│   │   ├── layout.tsx                  # Root layout (providers, offline indicator)
│   │   ├── page.tsx                    # Landing page (SSR, public)
│   │   ├── login/
│   │   │   └── page.tsx                # Login page
│   │   ├── register/
│   │   │   └── page.tsx                # Registration page
│   │   ├── dashboard/
│   │   │   └── page.tsx                # Quote dashboard (protected)
│   │   ├── quotes/
│   │   │   ├── new/
│   │   │   │   └── page.tsx            # New quote builder
│   │   │   └── [id]/
│   │   │       ├── page.tsx            # Edit quote
│   │   │       └── preview/
│   │   │           └── page.tsx        # PDF preview
│   │   ├── profile/
│   │   │   └── page.tsx                # Contractor profile setup
│   │   ├── quote/
│   │   │   └── [token]/
│   │   │       └── page.tsx            # Customer quote view (public, SSR)
│   │   └── api/
│   │       ├── auth/
│   │       │   ├── register/
│   │       │   │   └── route.ts        # User registration
│   │       │   └── [...nextauth]/
│   │       │       └── route.ts        # NextAuth.js handler
│   │       ├── profile/
│   │       │   └── route.ts            # GET/PUT contractor profile
│   │       ├── quotes/
│   │       │   ├── route.ts            # GET (list) / POST (create)
│   │       │   └── [id]/
│   │       │       ├── route.ts        # GET / PUT / DELETE single quote
│   │       │       ├── duplicate/
│   │       │       │   └── route.ts    # POST duplicate quote
│   │       │       ├── send/
│   │       │       │   └── route.ts    # POST send via SMS/email
│   │       │       └── pdf/
│   │       │           └── route.ts    # POST generate PDF
│   │       ├── quotes/
│   │       │   └── view/
│   │       │       └── [token]/
│   │       │           ├── route.ts    # GET public quote data
│   │       │           ├── sign/
│   │       │           │   └── route.ts # POST e-signature
│   │       │           └── pay/
│   │       │               └── route.ts # POST create checkout session
│   │       ├── templates/
│   │       │   ├── route.ts            # GET templates by trade
│   │       │   └── [id]/
│   │       │       └── items/
│   │       │           └── route.ts    # GET template line items
│   │       ├── photos/
│   │       │   └── upload/
│   │       │       └── route.ts        # POST upload photo to R2
│   │       ├── sync/
│   │       │   └── route.ts            # POST sync offline data
│   │       └── webhooks/
│   │           └── stripe/
│   │               └── route.ts        # POST Stripe webhook handler
│   ├── components/
│   │   ├── ui/                         # Shared UI primitives
│   │   │   ├── button.tsx
│   │   │   ├── input.tsx
│   │   │   ├── select.tsx
│   │   │   ├── textarea.tsx
│   │   │   ├── modal.tsx
│   │   │   ├── toast.tsx
│   │   │   ├── skeleton.tsx
│   │   │   ├── badge.tsx
│   │   │   └── spinner.tsx
│   │   ├── layout/                     # Layout components
│   │   │   ├── header.tsx
│   │   │   ├── nav.tsx
│   │   │   ├── offline-indicator.tsx
│   │   │   └── mobile-nav.tsx
│   │   ├── auth/                       # Auth components
│   │   │   ├── login-form.tsx
│   │   │   ├── register-form.tsx
│   │   │   └── auth-provider.tsx
│   │   ├── profile/                    # Profile components
│   │   │   ├── profile-form.tsx
│   │   │   └── logo-upload.tsx
│   │   ├── quotes/                     # Quote builder components
│   │   │   ├── quote-builder.tsx       # Main quote creation form
│   │   │   ├── line-item-row.tsx       # Single line item editor
│   │   │   ├── line-item-picker.tsx    # Template line item selector
│   │   │   ├── customer-info.tsx       # Customer details section
│   │   │   ├── photo-capture.tsx       # Camera/gallery photo component
│   │   │   ├── photo-grid.tsx          # Photo thumbnails display
│   │   │   ├── deposit-config.tsx      # Deposit amount settings
│   │   │   ├── quote-summary.tsx       # Subtotal/tax/total display
│   │   │   └── trade-selector.tsx      # Trade template selector
│   │   ├── dashboard/                  # Dashboard components
│   │   │   ├── quote-list.tsx          # Quote list with virtual scrolling
│   │   │   ├── quote-card.tsx          # Individual quote card
│   │   │   ├── quote-filters.tsx       # Search and filter controls
│   │   │   └── status-badge.tsx        # Quote status indicator
│   │   ├── customer-view/              # Customer-facing components
│   │   │   ├── quote-display.tsx       # Read-only quote view
│   │   │   ├── signature-pad.tsx       # Canvas signature capture
│   │   │   └── deposit-payment.tsx     # Stripe checkout button
│   │   └── pdf/                        # PDF template components
│   │       ├── quote-pdf.tsx           # React-PDF quote template
│   │       └── pdf-preview.tsx         # In-app PDF preview
│   ├── hooks/                          # Custom React hooks
│   │   ├── use-quotes.ts              # SWR hook for quotes CRUD
│   │   ├── use-templates.ts           # SWR hook for templates
│   │   ├── use-profile.ts             # SWR hook for profile
│   │   ├── use-offline.ts             # Offline status hook
│   │   ├── use-offline-sync.ts        # Sync queue management hook
│   │   ├── use-camera.ts             # Camera API hook
│   │   └── use-debounce.ts           # Debounce utility hook
│   ├── lib/                           # Shared libraries & utilities
│   │   ├── db.ts                      # Prisma client singleton
│   │   ├── auth.ts                    # NextAuth.js configuration
│   │   ├── stripe.ts                  # Stripe client initialization
│   │   ├── r2.ts                      # Cloudflare R2 client (S3 SDK)
│   │   ├── twilio.ts                  # Twilio SMS client
│   │   ├── resend.ts                  # Resend email client
│   │   ├── fetcher.ts                 # SWR fetcher function
│   │   ├── offline-db.ts             # Dexie.js IndexedDB setup
│   │   ├── pdf-generator.ts          # PDF generation utility
│   │   ├── image-compress.ts         # Client-side image compression
│   │   ├── quote-number.ts           # Quote number generation
│   │   └── utils.ts                   # General utilities (formatCurrency, etc.)
│   ├── lib/validations/               # Zod validation schemas
│   │   ├── quote.ts                   # Quote create/update schemas
│   │   ├── line-item.ts              # Line item schemas
│   │   ├── profile.ts                # Profile schemas
│   │   ├── auth.ts                   # Registration/login schemas
│   │   └── common.ts                 # Shared validation patterns
│   ├── types/                         # TypeScript type definitions
│   │   ├── index.ts                   # Re-exports and custom types
│   │   └── next-auth.d.ts           # NextAuth.js type extensions
│   └── middleware.ts                  # Auth middleware for route protection
```

### Architectural Boundaries

**API Boundaries:**
- All authenticated API routes require valid session via `getServerSession()`
- All authenticated routes scope database queries to `session.user.id`
- Public routes: `/api/quotes/view/[token]/*` — validated by unguessable token only
- Webhook routes: `/api/webhooks/stripe` — validated by Stripe signature verification
- No API route directly accesses another API route — shared logic lives in `src/lib/`

**Component Boundaries:**
- UI primitives (`src/components/ui/`) have zero business logic — pure presentation
- Feature components (`src/components/quotes/`, etc.) own their business logic and call hooks
- Page components (`src/app/**/page.tsx`) compose feature components and handle routing concerns
- No component directly calls `fetch` or Prisma — all data access through hooks or server components

**Service Boundaries:**
- `src/lib/db.ts` — sole entry point for database access (Prisma singleton)
- `src/lib/stripe.ts` — sole entry point for Stripe API calls
- `src/lib/r2.ts` — sole entry point for file storage operations
- `src/lib/twilio.ts` — sole entry point for SMS sending
- `src/lib/resend.ts` — sole entry point for email sending
- `src/lib/offline-db.ts` — sole entry point for IndexedDB operations

**Data Boundaries:**
- Prisma schema is the single source of truth for data structure
- Zod schemas validate data at API boundaries (input and output)
- IndexedDB mirrors server schema for offline quotes but is not authoritative for sent/signed/paid quotes
- Photos stored in R2; only URLs stored in database

### Requirements to Structure Mapping

| FR Category | Primary Location |
|---|---|
| Quote Creation (FR1–FR11) | `src/components/quotes/`, `src/app/api/quotes/`, `src/hooks/use-quotes.ts` |
| Templates (FR12–FR16) | `src/app/api/templates/`, `src/components/quotes/line-item-picker.tsx`, `prisma/seed.ts` |
| Photos (FR17–FR21) | `src/components/quotes/photo-capture.tsx`, `src/app/api/photos/`, `src/lib/r2.ts` |
| PDF (FR22–FR30) | `src/components/pdf/`, `src/app/api/quotes/[id]/pdf/`, `src/lib/pdf-generator.ts` |
| E-Signature (FR31–FR35) | `src/components/customer-view/signature-pad.tsx`, `src/app/api/quotes/view/[token]/sign/` |
| Payments (FR36–FR40) | `src/components/customer-view/deposit-payment.tsx`, `src/app/api/webhooks/stripe/`, `src/lib/stripe.ts` |
| Dashboard (FR41–FR45) | `src/components/dashboard/`, `src/app/dashboard/`, `src/hooks/use-quotes.ts` |
| Profile (FR46–FR50) | `src/components/profile/`, `src/app/api/profile/`, `src/hooks/use-profile.ts` |
| Offline/Sync (FR51–FR55) | `src/lib/offline-db.ts`, `src/hooks/use-offline-sync.ts`, `src/app/api/sync/`, `next.config.js` (PWA) |
| Auth (FR56–FR58) | `src/components/auth/`, `src/lib/auth.ts`, `src/middleware.ts` |

### Integration Points

**Internal Communication:**
- React components → Custom hooks (SWR) → API routes → Prisma → PostgreSQL
- Offline: React components → Custom hooks → Dexie.js (IndexedDB) → Sync hook → API routes
- PDF generation: API route → loads quote + photos from DB/R2 → `@react-pdf/renderer` → stores PDF in R2

**External Integrations:**
- **Stripe**: Checkout Sessions for deposits, webhooks for payment confirmation, Connect for contractor payouts
- **Twilio**: Programmable SMS API for quote delivery
- **Resend**: Email API for quote delivery, password reset, notifications
- **Cloudflare R2**: S3-compatible API for photo and PDF storage

**Data Flow — Quote Creation to Deposit:**
```
1. Contractor creates quote → saves to IndexedDB + API → PostgreSQL
2. Contractor adds photos → compress client-side → upload to R2 → save URL in DB
3. Contractor taps "Send" → API generates PDF (stored in R2) → sends SMS/email with quote link
4. Customer opens link → SSR page loads quote data → displays formatted quote with photos
5. Customer signs → canvas signature → POST to API → stores signature data + timestamp/IP
6. Customer pays deposit → Stripe Checkout → webhook → updates quote status to PAID
7. Contractor gets notification → dashboard shows updated status
```

---

## Architecture Validation Results

### Coherence Validation

**Decision Compatibility:**
All technology choices are fully compatible:
- Next.js 14 + TypeScript + Tailwind CSS — standard, well-tested combination
- Prisma + Neon PostgreSQL — Prisma has first-class support for Neon's serverless driver
- NextAuth.js v5 — designed for Next.js App Router
- SWR — built by Vercel, optimized for Next.js
- `next-pwa` — purpose-built for Next.js service worker integration
- `@react-pdf/renderer` — runs in Node.js (serverless functions), uses React components
- Stripe + Vercel serverless — Stripe webhooks work with serverless functions

**Pattern Consistency:**
- Naming conventions are internally consistent (camelCase JS/TS, PascalCase components, kebab-case files)
- API patterns follow REST conventions uniformly
- Error handling pattern is consistent across all API routes
- Data flow patterns (SWR for reads, fetch for writes, IndexedDB for offline) are coherent

**Structure Alignment:**
- Directory structure directly supports the feature-based organization pattern
- Each FR category maps to specific directories without overlap
- Test organization (co-located units, separate e2e) aligns with the Next.js ecosystem conventions

### Requirements Coverage Validation

**Functional Requirements Coverage:**
- FR1–FR11 (Quote CRUD): Fully covered by quote builder components, API routes, and Prisma schema
- FR12–FR16 (Templates): Covered by template API routes and seed data
- FR17–FR21 (Photos): Covered by camera hook, photo components, R2 storage
- FR22–FR30 (PDF/Delivery): Covered by react-pdf, Twilio SMS, Resend email
- FR31–FR35 (E-Signature): Covered by signature pad component and public API routes
- FR36–FR40 (Payments): Covered by Stripe Checkout integration and webhook handler
- FR41–FR45 (Dashboard): Covered by dashboard components with SWR data fetching
- FR46–FR50 (Profile): Covered by profile form, API route, and Prisma model
- FR51–FR55 (Offline): Covered by Dexie.js, service worker, sync queue, offline indicator
- FR56–FR58 (Auth): Covered by NextAuth.js with credentials provider

**Non-Functional Requirements Coverage:**
- NFR1–NFR6 (Performance): Next.js SSR + SWR caching + service worker + dynamic imports + virtual scrolling
- NFR7–NFR12 (Security): HTTPS via Vercel, bcrypt, Stripe-hosted checkout, cuid2 tokens, session expiry, Prisma query scoping
- NFR13–NFR15 (Scalability): Serverless auto-scaling (Vercel), Neon auto-scaling, R2 for photo storage
- NFR16–NFR18 (Reliability): Vercel 99.99% uptime SLA, IndexedDB sync with retry, Stripe webhook retries
- NFR19–NFR21 (Accessibility): Tailwind + semantic HTML + 44px touch targets + WCAG contrast ratios

### Implementation Readiness Validation

**Decision Completeness:** All critical technology choices are documented with specific versions and rationale. No ambiguous decisions remain for MVP scope.

**Structure Completeness:** Every file and directory is defined with its purpose. AI agents can create the exact directory structure and know where every piece of code belongs.

**Pattern Completeness:** Naming conventions, API formats, error handling, state management, and offline patterns are all specified with concrete examples. Anti-patterns are documented to prevent common mistakes.

### Gap Analysis Results

**No Critical Gaps.** All MVP requirements have full architectural support.

**Minor Gaps (acceptable for MVP):**
- Monitoring/alerting specifics can be refined post-launch (Vercel Analytics + Sentry covers MVP needs)
- Rate limiting configuration (exact thresholds) can be tuned based on real traffic patterns
- Photo storage cleanup (orphaned photos from deleted drafts) can be handled by a scheduled job post-MVP

### Architecture Completeness Checklist

**Requirements Analysis**
- [x] Project context thoroughly analyzed (58 FRs, 21 NFRs)
- [x] Scale and complexity assessed (Low complexity, 10K concurrent users target)
- [x] Technical constraints identified (PWA, offline-first, Stripe, mobile-first)
- [x] Cross-cutting concerns mapped (offline sync, auth, photos, notifications)

**Architectural Decisions**
- [x] Critical decisions documented with versions (Next.js, PostgreSQL, Prisma, Stripe, etc.)
- [x] Technology stack fully specified
- [x] Integration patterns defined (REST API, SWR, webhooks, SMS/email)
- [x] Performance considerations addressed (SSR, caching, service worker, virtual scrolling)

**Implementation Patterns**
- [x] Naming conventions established (database, API, code)
- [x] Structure patterns defined (feature-based, co-located tests)
- [x] Communication patterns specified (SWR, offline sync, webhooks)
- [x] Process patterns documented (error handling, loading states, form handling)

**Project Structure**
- [x] Complete directory structure defined
- [x] Component boundaries established
- [x] Integration points mapped
- [x] Requirements to structure mapping complete

### Architecture Readiness Assessment

**Overall Status:** READY FOR IMPLEMENTATION

**Confidence Level:** High — all decisions use proven, widely-adopted technologies with strong community support and extensive documentation.

**Key Strengths:**
1. Single deployment unit (Next.js full-stack) minimizes operational complexity
2. Offline-first architecture designed from day 1 (not bolted on later)
3. Stripe-hosted checkout eliminates PCI compliance burden
4. Serverless infrastructure (Vercel + Neon) scales automatically with zero DevOps
5. Feature-based code organization enables parallel development across stories
6. Every FR maps to a specific directory — no ambiguity for implementing agents

**Areas for Future Enhancement:**
- Real-time quote status updates (WebSocket/SSE) instead of polling
- CDN optimization for photo delivery
- Database read replicas if query load exceeds single instance
- Native mobile apps for enhanced camera and push notification capabilities

### Implementation Handoff

**AI Agent Guidelines:**
- Follow all architectural decisions exactly as documented
- Use implementation patterns consistently across all components
- Respect project structure and boundaries
- Refer to this document for all architectural questions
- Use the exact Prisma schema as defined — extend only as needed for new fields
- Always validate with Zod schemas at API boundaries

**First Implementation Priority:**
```bash
npx create-next-app@latest quotecraft --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
cd quotecraft
npm install prisma @prisma/client next-auth @auth/prisma-adapter
npm install swr dexie react-hook-form @hookform/resolvers zod
npm install @react-pdf/renderer stripe @stripe/stripe-js
npm install next-pwa @aws-sdk/client-s3
npm install twilio resend
npm install -D @types/bcrypt playwright
npx prisma init
```

Then: copy `schema.prisma`, run `prisma migrate dev`, seed trade templates, and begin implementing stories in the order defined in the Decision Impact Analysis section.
