---
stepsCompleted: [step-01-validate-prerequisites, step-02-design-epics, step-03-create-stories, step-04-final-validation]
inputDocuments:
  - mvps/auto-repair-shop-management/planning/prd.md
  - mvps/auto-repair-shop-management/planning/architecture.md
workflowType: 'epics-and-stories'
completedAt: '2026-05-27'
project_name: 'ShopFlow — Auto Repair Shop Management'
author: Root
---

# ShopFlow — Auto Repair Shop Management - Epic Breakdown

## Overview

This document provides the complete epic and story breakdown for ShopFlow, decomposing the requirements from the PRD and Architecture into implementable stories organized by user value. Each epic delivers a complete, standalone slice of user-facing functionality. Stories are sized for a single dev agent session and ordered so each builds only on previously completed stories.

---

## Requirements Inventory

### Functional Requirements

**Work Orders / Repair Orders**
- FR1: Users can create a repair order (RO) linked to a customer and vehicle record
- FR2: Users can add labor line items to an RO with description, estimated hours, and labor rate
- FR3: Users can add parts line items to an RO with part number, description, quantity, cost, and retail price
- FR4: Users can apply shop supplies and hazmat/disposal fees as configurable automatic line items
- FR5: Users can advance an RO through the status lifecycle: Estimate → Approved → In Progress → Complete → Invoiced
- FR6: Users can generate a professional PDF invoice from a completed RO, including shop logo, license number, tax breakdown, and line-item detail
- FR7: Users can email or SMS the PDF invoice directly from the RO
- FR8: Users can add internal shop notes to an RO (not visible to the customer)
- FR9: Users can record mileage in and mileage out on each RO
- FR10: Users can create estimate templates from existing ROs for common repeat services
- FR11: Users can search and filter all ROs by status, customer, vehicle, date range, and assigned technician

**Digital Vehicle Inspection (DVI)**
- FR12: Users can create a DVI linked to any RO
- FR13: Technicians can capture photos directly from a device camera within the DVI interface
- FR14: Users can flag each DVI inspection item as Green (OK), Yellow (Monitor), or Red (Urgent)
- FR15: Users can add typed notes to any DVI inspection item
- FR16: The system generates a shareable DVI link that opens in a browser with no app install required
- FR17: Customers can view all DVI photos, status flags, and tech notes via the shareable link
- FR18: Customers can approve or decline individual recommended repair items via the DVI link
- FR19: The RO reflects customer approval status in real-time when items are approved/declined via the link
- FR20: Users receive a notification when a customer interacts with a DVI link (views it, approves items)
- FR21: The system records a timestamped, IP-addressed audit log of customer approvals for warranty and compliance purposes
- FR22: Users can add pricing to DVI-recommended items before sending the link

**Two-Way Customer Texting**
- FR23: Users can send SMS messages to any customer directly from an RO
- FR24: Users can receive customer SMS replies tied to the originating RO and customer record
- FR25: Users can view a conversation thread per customer showing all sent and received messages
- FR26: Users can use pre-configured SMS templates with one-tap insertion
- FR27: Users can customize up to 10 SMS templates with placeholders for customer name, RO number, and shop name
- FR28: Users can view their monthly SMS usage and remaining credit balance
- FR29: Users can purchase additional SMS credits from within the app when balance runs low
- FR30: The system includes the DVI link automatically when the "DVI complete" template is used

**QuickBooks Online Sync**
- FR31: Users can connect their QuickBooks Online account via OAuth 2.0 without leaving ShopFlow
- FR32: The system automatically syncs each invoiced RO to QuickBooks Online as a sales transaction within 5 minutes of invoice creation
- FR33: The system maps ShopFlow customers to matching QuickBooks customers (by name/email match) or creates new QB customers automatically
- FR34: Users can configure income account mapping (labor charges → QB income account, parts → separate QB income account)
- FR35: The system syncs payment records to QuickBooks when a payment is marked received in ShopFlow
- FR36: Users can view a sync status dashboard showing the last 30 days of sync events, success/failure counts, and per-transaction status
- FR37: Users can manually trigger a re-sync for any failed transaction from the sync dashboard
- FR38: The system sends an email alert to the shop owner when QB sync fails for more than 3 consecutive invoices
- FR39: Users can disconnect QuickBooks and re-authenticate without losing sync history or configuration

**Parts Catalog Lookup**
- FR40: Users can search for parts by name or part number from within any RO
- FR41: The system returns results from NAPA and AutoZone catalog APIs with part number, description, and list price
- FR42: Users can add a part directly from search results to the RO line items with quantity 1 and markup-adjusted price pre-populated
- FR43: Users can configure global or per-category parts markup percentages
- FR44: Users can override the auto-calculated retail price on any parts line item
- FR45: The system displays NAPA and AutoZone results in parallel with source labeling

**Customer & Vehicle Management**
- FR46: Users can create and edit customer records with name, phone, email, address, and notes
- FR47: Users can create and edit vehicle records linked to a customer with year, make, model, trim, engine, VIN (manual), mileage history, and license plate
- FR48: Users can view a customer's complete RO and service history across all visits
- FR49: Users can view a vehicle's complete service history regardless of current owner
- FR50: Users can search customers by name, phone, email, and vehicle license plate
- FR51: Users can import customers from a CSV file in generic format, ARI export format, or Shopmonkey export format
- FR52: Users can run the Shopmonkey migration tool, which imports customers, vehicles, and open ROs from a Shopmonkey data export in a single workflow

**AP Reconciliation**
- FR53: Users can log parts vendor invoices (vendor name, invoice number, invoice total, line items) in ShopFlow
- FR54: The system cross-references received parts invoices against RO parts line items to detect potential discrepancies
- FR55: The system surfaces AP reconciliation alerts for: vendor credits not yet applied, potential duplicate charges, and unreturned cores
- FR56: Each AP alert displays the estimated dollar amount at risk and a recommended action
- FR57: Users can export a reconciliation report (PDF or CSV) for accountant review

**Reporting**
- FR58: Users can view a revenue summary dashboard with daily, weekly, and monthly totals for parts revenue, labor revenue, and total invoiced
- FR59: Users can view an open RO aging report showing all in-progress and estimate-status ROs with days since creation
- FR60: Users can view a top services report showing the 10 highest-revenue service types by labor description
- FR61: Users can search invoice history by date range, customer, vehicle, and RO number with export to CSV
- FR62: Users can view a technician summary report showing ROs assigned and completed per technician per time period

**User & Account Management**
- FR63: Users can sign up with email and password
- FR64: Users can log in via Google OAuth as an alternative to email/password
- FR65: Users can configure their business profile (name, logo, address, phone, license number, tax rates, shop supplies percentage)
- FR66: Shop owners can create Technician accounts for bay staff with scoped access
- FR67: Shop owners can create Accountant accounts with read-only access to reports and QB sync dashboard
- FR68: Technicians can log in on any shop device (shared tablet) and view only their assigned ROs
- FR69: Users can export all shop data (customers, vehicles, ROs, invoices) as a ZIP archive of CSV files at any time
- FR70: Users can close their account and immediately receive a full data export link (data retained for 90 days before deletion)

---

### Non-Functional Requirements

**Performance**
- NFR1: Core app screens load in under 2 seconds on standard broadband (50 Mbps)
- NFR2: DVI photo upload (single photo, average 3 MB JPEG) must complete in under 5 seconds on 4G
- NFR3: Parts catalog search must return results within 3 seconds including live API calls
- NFR4: QB sync for a single invoice must complete within 5 minutes of invoice creation
- NFR5: PDF invoice generation must complete in under 3 seconds for ROs with up to 50 line items

**Security**
- NFR6: All data transmitted between client and server must use TLS 1.3
- NFR7: Customer PII (name, phone, email, address) must be encrypted at rest in the database
- NFR8: Payment-related data is never stored on ShopFlow servers — any payment card processing must be delegated entirely to Stripe
- NFR9: Session tokens expire after 7 days of inactivity
- NFR10: Customer-facing DVI approval and invoice links expire after 30 days
- NFR11: The DVI audit log (timestamp + IP of customer approval) must be immutable
- NFR12: Technician accounts cannot access customer financial data (invoice totals, payment status)
- NFR13: All file uploads (DVI photos, CSV imports) are scanned for malware before storage

**Reliability & Availability**
- NFR14: Core services must maintain 99.9% uptime (< 8.76 hours downtime/year)
- NFR15: Zero data loss guarantee — all user-submitted data must be durably persisted before the UI confirms success
- NFR16: QB sync must achieve 99%+ success rate over any rolling 30-day period
- NFR17: SMS delivery must achieve 98%+ success rate using a Tier-1 provider (Twilio)

**Scalability**
- NFR18: The platform must support 10,000 concurrent active shops without performance degradation
- NFR19: The QB sync queue must process up to 500 sync operations per minute at peak
- NFR20: DVI photo storage must support 500 photos per shop per month without additional configuration

**Integration**
- NFR21: QuickBooks Online integration must support the current QB API version and must be updated within 30 days of any breaking API change
- NFR22: NAPA and AutoZone parts catalog APIs must be wrapped in a fallback layer — if one API is unavailable, results from the other are still displayed with a notice
- NFR23: SMS delivery (Twilio) must have automatic failover to a secondary number pool if primary pool is rate-limited
- NFR24: Shopmonkey CSV import must support export files from Shopmonkey v1 and v2 formats

**Accessibility & Usability**
- NFR25: All primary workflows must be fully functional on tablet screen sizes (768px width minimum) without horizontal scrolling
- NFR26: DVI photo capture interface must function with large tap targets (minimum 44×44 px) to accommodate use with gloves
- NFR27: Color-coded DVI status (Green/Yellow/Red) must include a text label in addition to color for colorblind accessibility
- NFR28: The application must meet WCAG 2.1 Level AA for all customer-facing screens

**Compliance**
- NFR29: Users must be able to export all personal data for any customer on request (CCPA compliance)
- NFR30: Users must be able to delete a customer record and all associated data on request, with 30-day grace period
- NFR31: DVI approval records with timestamp and IP must be retained for a minimum of 7 years
- NFR32: Invoices must be retained for a minimum of 7 years

---

### Additional Requirements

**From Architecture — Implementation-Critical:**

- **Starter Template:** Initialize with `npx create-next-app@latest shopflow --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"` then add all specified dependencies
- **Tech Stack:** Next.js 15 + React 19 + TypeScript 5.x + Tailwind CSS 3.x (frontend), Prisma 6.x + Supabase PostgreSQL 16 (database), NextAuth.js v5/Auth.js (authentication)
- **Background Jobs:** Inngest (serverless) for QB sync, SMS status polling, AP reconciliation scan, PDF generation
- **File Storage:** AWS S3 + CloudFront with presigned upload URLs (client-direct upload bypasses server)
- **SMS:** Twilio Messaging Service with Twilio webhook receiver for inbound SMS
- **UI Library:** shadcn/ui (Radix UI + Tailwind) — copied into `src/components/ui/`
- **State:** TanStack Query v5 for server state, Zustand for client UI state, React Hook Form + Zod for forms
- **PWA:** `@ducanh2912/next-pwa` for tablet/mobile "Add to Home Screen" support; camera via `<input capture="environment">`
- **Multi-tenancy:** Row-level `shop_id` on every tenant table; injected from session — never from request body
- **Service Layer:** All DB access via `src/lib/services/*.service.ts`; API routes call services, never Prisma directly
- **PII Encryption:** AES-256-GCM for `customer.email`, `customer.phone`, `customer.address`, QB tokens, TOTP secrets via `src/lib/crypto/`
- **Audit Immutability:** `dvi_audit_logs` is append-only — no UPDATE or DELETE routes exist for this table
- **Money Handling:** `Prisma.Decimal` for all financial fields; never JavaScript `number`; money in API JSON as string
- **Error Handling:** `withErrorHandler` wrapper on all API routes; standard `{ data, error }` response format
- **Validation:** Zod schemas on every POST/PUT/PATCH; same schema reused for frontend React Hook Form
- **Public Token Routes:** DVI links and invoice links are opaque CUID2 tokens with 30-day expiry; validated server-side
- **DVI Real-time:** 30-second polling via TanStack Query `refetchInterval` on RO detail page when DVI is SENT (no WebSocket in MVP)
- **Parts Caching:** `parts_cache` table in Postgres for 24-hour caching of NAPA/AutoZone results (no Redis in MVP)
- **Deployment:** Vercel (auto-deploy from main branch); `prisma migrate deploy` in CI after each deploy
- **Monitoring:** Sentry for error tracking; pino for structured logging; Vercel Analytics for core web vitals
- **Testing:** Vitest (unit + integration), Playwright (E2E); integration tests use separate Supabase test project

---

### FR Coverage Map

```
FR1:  Epic 2 — RO creation with customer and vehicle link
FR2:  Epic 2 — Labor line items on RO
FR3:  Epic 2 — Parts line items on RO
FR4:  Epic 2 — Shop supplies and hazmat auto line items
FR5:  Epic 2 — RO status lifecycle (Estimate → Invoiced)
FR6:  Epic 2 — PDF invoice generation
FR7:  Epic 2 — Email/SMS invoice delivery
FR8:  Epic 2 — Internal notes on RO
FR9:  Epic 2 — Mileage in/out on RO
FR10: Epic 2 — Estimate templates from existing ROs
FR11: Epic 2 — RO search and filter
FR12: Epic 4 — Create DVI linked to RO
FR13: Epic 4 — Camera photo capture in DVI
FR14: Epic 4 — Green/Yellow/Red condition flags
FR15: Epic 4 — Typed notes on DVI items
FR16: Epic 4 — Shareable DVI link (browser, no app)
FR17: Epic 4 — Customer views DVI via link
FR18: Epic 4 — Customer approves/declines DVI items
FR19: Epic 4 — RO reflects customer approval in real-time
FR20: Epic 4 — Notification when customer interacts with DVI
FR21: Epic 4 — Immutable timestamped/IP audit log
FR22: Epic 4 — Pricing on DVI items before sending
FR23: Epic 5 — Send SMS from RO
FR24: Epic 5 — Receive customer SMS replies
FR25: Epic 5 — Conversation thread view per customer
FR26: Epic 5 — Pre-configured SMS templates
FR27: Epic 5 — Customizable SMS templates (up to 10)
FR28: Epic 5 — Monthly SMS usage and credit balance
FR29: Epic 5 — In-app SMS credit purchase
FR30: Epic 5 — Auto-include DVI link in DVI template
FR31: Epic 6 — QuickBooks Online OAuth 2.0 connection
FR32: Epic 6 — Auto-sync invoiced RO to QuickBooks
FR33: Epic 6 — Customer mapping (QB match or create)
FR34: Epic 6 — Income account mapping configuration
FR35: Epic 6 — Payment record sync to QuickBooks
FR36: Epic 6 — Sync status dashboard (30 days)
FR37: Epic 6 — Manual re-sync for failed transactions
FR38: Epic 6 — Email alert on 3+ consecutive QB sync failures
FR39: Epic 6 — Disconnect and re-authenticate QB without losing history
FR40: Epic 7 — Parts search by name/number from RO
FR41: Epic 7 — Results from NAPA and AutoZone APIs
FR42: Epic 7 — Add part to RO with markup applied
FR43: Epic 7 — Configure global and category markup percentages
FR44: Epic 7 — Override retail price on parts line item
FR45: Epic 7 — Parallel NAPA + AutoZone results with source label
FR46: Epic 3 — Create/edit customer records
FR47: Epic 3 — Create/edit vehicle records with full spec
FR48: Epic 3 — Customer service history view
FR49: Epic 3 — Vehicle service history view
FR50: Epic 3 — Customer search by name/phone/email/plate
FR51: Epic 3 — CSV customer import (generic + ARI format)
FR52: Epic 10 — Shopmonkey migration (customers, vehicles, open ROs)
FR53: Epic 8 — Log parts vendor invoices
FR54: Epic 8 — Cross-reference vendor invoices vs RO parts
FR55: Epic 8 — AP reconciliation alerts (missed credits, duplicates, cores)
FR56: Epic 8 — Alert shows dollar amount and recommended action
FR57: Epic 8 — Export reconciliation report (PDF or CSV)
FR58: Epic 9 — Revenue summary dashboard
FR59: Epic 9 — Open RO aging report
FR60: Epic 9 — Top services report
FR61: Epic 9 — Invoice history search and CSV export
FR62: Epic 9 — Technician summary report
FR63: Epic 1 — Email/password signup
FR64: Epic 1 — Google OAuth login
FR65: Epic 1 — Business profile configuration
FR66: Epic 1 — Create Technician accounts
FR67: Epic 1 — Create Accountant accounts
FR68: Epic 1 — Technician scoped login on shared device
FR69: Epic 1 — Full data export as ZIP
FR70: Epic 1 — Account closure with data export link
```

---

## Epic List

### Epic 1: Foundation — Auth, Shop Setup & User Roles
Users can register a shop, configure their business profile, manage their team, and have role-appropriate access enforced from day one.
**FRs covered:** FR63, FR64, FR65, FR66, FR67, FR68, FR69, FR70
**NFRs covered:** NFR6, NFR7, NFR9, NFR29, NFR30

### Epic 2: Work Orders — The Core Shop Workflow
Users can create repair orders, add labor and parts, move ROs through the full status lifecycle, and generate professional invoices.
**FRs covered:** FR1, FR2, FR3, FR4, FR5, FR6, FR7, FR8, FR9, FR10, FR11
**NFRs covered:** NFR1, NFR5, NFR12, NFR15, NFR32

### Epic 3: Customer & Vehicle Management
Users can maintain customer and vehicle records, view full service histories, and import existing customer data from CSV.
**FRs covered:** FR46, FR47, FR48, FR49, FR50, FR51
**NFRs covered:** NFR7, NFR25, NFR29

### Epic 4: Digital Vehicle Inspection (DVI)
Technicians capture photo-based inspections on mobile, and customers approve or decline repair recommendations via a browser link — no app required.
**FRs covered:** FR12, FR13, FR14, FR15, FR16, FR17, FR18, FR19, FR20, FR21, FR22
**NFRs covered:** NFR2, NFR10, NFR11, NFR15, NFR26, NFR27, NFR28, NFR31

### Epic 5: Two-Way Customer Texting
Users send and receive SMS with customers directly from repair orders using customizable templates and a shared thread view.
**FRs covered:** FR23, FR24, FR25, FR26, FR27, FR28, FR29, FR30
**NFRs covered:** NFR17, NFR23

### Epic 6: QuickBooks Online Sync
Completed invoices automatically sync to QuickBooks Online via native OAuth; the shop owner sees sync status and can resolve failures without leaving ShopFlow.
**FRs covered:** FR31, FR32, FR33, FR34, FR35, FR36, FR37, FR38, FR39
**NFRs covered:** NFR4, NFR16, NFR19, NFR21

### Epic 7: Parts Catalog Lookup
Users search NAPA and AutoZone catalogs from within any RO and add parts with pre-applied shop markup rules.
**FRs covered:** FR40, FR41, FR42, FR43, FR44, FR45
**NFRs covered:** NFR3, NFR22

### Epic 8: AP Reconciliation Alerts
Users log vendor invoices and the system automatically surfaces discrepancies — missed credits, duplicate charges, unreturned cores — with dollar amounts.
**FRs covered:** FR53, FR54, FR55, FR56, FR57
**NFRs covered:** NFR15

### Epic 9: Reports & Analytics
Shop owners and accountants view revenue summaries, open RO aging, top services, technician productivity, and export invoice history.
**FRs covered:** FR58, FR59, FR60, FR61, FR62
**NFRs covered:** NFR1, NFR18

### Epic 10: Shopmonkey Migration & Onboarding
New users complete a guided onboarding wizard; Shopmonkey refugees import all their data in a single workflow with full history preserved.
**FRs covered:** FR52
**NFRs covered:** NFR24

---

## Epic 1: Foundation — Auth, Shop Setup & User Roles

Users can register a shop, configure their business profile, manage their team with appropriate role-based access, and export or delete their data at any time. This epic establishes the auth foundation and account structures that every other epic builds on.

### Story 1.1: Project Initialization & Infrastructure Setup

As a developer,
I want the ShopFlow project initialized with the full technology stack and CI/CD pipeline,
So that the team has a working foundation to build features on from day one.

**Acceptance Criteria:**

**Given** a fresh development environment
**When** the initialization script runs
**Then** the project is created via `npx create-next-app@latest shopflow --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"`
**And** all required dependencies are installed: `prisma @prisma/client @auth/prisma-adapter next-auth@beta @tanstack/react-query zustand react-hook-form @hookform/resolvers zod @aws-sdk/client-s3 @aws-sdk/s3-request-presigner twilio inngest decimal.js bcryptjs sonner date-fns pino`
**And** UI dependencies are added: `npx shadcn@latest init` with neutral base color and CSS variables enabled
**And** dev dependencies are installed: `vitest @vitejs/plugin-react playwright @playwright/test @ducanh2912/next-pwa`
**And** `.env.example` contains all required environment variables documented in the architecture (DATABASE_URL, DIRECT_URL, AUTH_SECRET, ENCRYPTION_KEY, GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, TWILIO_MESSAGING_SERVICE_SID, TWILIO_WEBHOOK_SECRET, QBO_CLIENT_ID, QBO_CLIENT_SECRET, QBO_REDIRECT_URI, AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, S3_BUCKET_DVI, S3_BUCKET_INVOICES, CLOUDFRONT_URL, NAPA_API_KEY, AUTOZONE_API_KEY, INNGEST_EVENT_KEY, INNGEST_SIGNING_KEY, SENTRY_DSN)

**Given** the Prisma schema is created
**When** `prisma migrate dev` runs
**Then** the Shop, User, and all core tables from the architecture Prisma schema are created in the database
**And** `prisma generate` produces a typed Prisma client

**Given** the project structure is in place
**When** CI runs on any push
**Then** `tsc --noEmit`, `eslint`, and `vitest run` all pass
**And** Vercel deployment on `main` branch succeeds with a live preview URL

**Given** the PWA configuration is applied
**When** the app is served over HTTPS
**Then** a Web App Manifest is served at `/manifest.json`
**And** the app is installable via "Add to Home Screen" on iOS Safari and Android Chrome

---

### Story 1.2: Shop Owner Registration & Authentication

As a shop owner,
I want to create an account with my email and password (or via Google),
So that I can access ShopFlow and my data is securely tied to my shop.

**Acceptance Criteria:**

**Given** a prospective user visits `/signup`
**When** they enter a valid email, password (≥ 8 characters), and shop name
**Then** a new Shop record and Owner User record are created in the database
**And** the user is signed in and redirected to the onboarding wizard
**And** the password is stored as a bcrypt hash (rounds: 12) — never plaintext

**Given** a user visits `/login`
**When** they enter valid email and password credentials
**Then** a NextAuth.js JWT session is created with `{ userId, shopId, role: 'OWNER' }` embedded
**And** the session cookie is HTTP-only with a 7-day expiry (NFR9)
**And** the user is redirected to the dashboard

**Given** a user visits `/login`
**When** they click "Continue with Google" and complete Google OAuth
**Then** a new User account is created (or matched to existing email) via the Google OAuth provider
**And** the session is established with the same JWT structure

**Given** an authenticated user is inactive for 7 days
**When** they attempt any authenticated action
**Then** the session is expired and they are redirected to `/login`

**Given** a route under `/(dashboard)/` is accessed
**When** no valid session exists
**Then** the middleware redirects to `/login` with a return URL

**Given** all API routes under `/api/`
**When** any request arrives without a valid session
**Then** the route returns `{ error: { code: 'UNAUTHORIZED', message: '...' } }` with HTTP 401

---

### Story 1.3: Business Profile & Shop Settings Configuration

As a shop owner,
I want to configure my shop's business profile, tax rates, and default fees,
So that invoices and ROs automatically reflect my shop's identity and pricing rules.

**Acceptance Criteria:**

**Given** a shop owner is on the Settings → Shop Profile page
**When** they enter shop name, address, phone, email, logo (uploaded to S3), and license number
**Then** the Shop record is updated
**And** the logo appears on subsequently generated invoices and the app header

**Given** a shop owner configures tax rates on the Settings page
**When** they set `tax_rate_labor` and `tax_rate_parts` as percentages
**Then** new ROs use these rates when calculating invoice totals
**And** the tax is displayed as a separate line item on PDF invoices

**Given** a shop owner configures shop supplies on the Settings page
**When** they set a shop supplies percentage (e.g., 5%) and a maximum cap (e.g., $40)
**Then** new ROs automatically calculate a shop supplies fee as `min(labor_total × pct, cap)` and add it as a FEE line item

**Given** a shop owner sets a default labor rate (e.g., $120/hr)
**When** a new labor line item is added to any RO
**Then** the labor rate field is pre-populated with the shop default but remains editable

**Given** any shop setting is saved
**When** the save operation completes
**Then** the UI confirms success and the updated settings are reflected immediately without page reload

---

### Story 1.4: User Roles & Team Management

As a shop owner,
I want to create Technician and Accountant accounts for my team,
So that each person has access to exactly the data and actions their role requires — nothing more.

**Acceptance Criteria:**

**Given** a shop owner is on the Settings → Users page
**When** they enter a name, email, and select role "Technician" and click Invite
**Then** a new User record is created with `role: TECHNICIAN` and `shop_id` matching the owner's shop
**And** an invitation email is sent to the technician's address with a secure setup link

**Given** a Technician account exists and the tech logs in
**When** they access the dashboard
**Then** they can only see ROs where `technician_id` matches their own `userId`
**And** navigation items for Reports, QuickBooks, AP Reconciliation, Settings, and SMS are not visible
**And** invoice totals and payment status fields are hidden from RO line item views (NFR12)

**Given** a shop owner creates an Accountant account
**When** the accountant logs in
**Then** they can access the Reports section and QB Sync Dashboard in read-only mode
**And** they cannot create, edit, or delete any RO, customer, or vehicle records

**Given** a shop owner is on the Settings → Users page
**When** they delete a Technician account
**Then** the user record is removed
**And** existing ROs previously assigned to that technician retain the technician reference but display "Former Tech"

**Given** a Technician logs in on a shared shop tablet
**When** a different Technician logs in on the same device
**Then** the previous session is terminated for that device
**And** only the newly logged-in technician's assigned ROs are visible

---

### Story 1.5: Data Export & Account Management (CCPA)

As a shop owner,
I want to export all my shop data at any time and delete my account when needed,
So that I am never locked in and can comply with customer data deletion requests.

**Acceptance Criteria:**

**Given** a shop owner visits Settings → Export Data
**When** they click "Export All Data"
**Then** an Inngest job is triggered to generate a ZIP archive of CSV files (customers, vehicles, ROs, line items, invoices, DVI data)
**And** a download link is emailed to the owner within 10 minutes
**And** the export contains all data in clear, readable CSV format (not encrypted internal values)

**Given** a shop owner initiates account closure via Settings → Close Account
**When** they confirm the closure
**Then** they immediately receive a full data export download link
**And** the shop data is flagged for deletion after 90 days
**And** login is disabled immediately but data is accessible via the export link for 90 days

**Given** a shop owner receives a CCPA customer data deletion request
**When** they navigate to the customer record and click "Delete Customer"
**Then** a confirmation dialog explains that the customer's PII will be soft-deleted and purged after 30 days (NFR30)
**And** the customer record's `deleted_at` is set to now()
**And** the customer's encrypted PII fields are zeroed out after 30 days via a scheduled Inngest job
**And** RO records associated with the customer are retained (invoices must be kept 7 years per NFR32) but de-identified

**Given** a customer's CCPA export is requested
**When** the owner triggers a data export for a specific customer
**Then** a CSV of all that customer's records, vehicles, and RO history is generated and downloadable (NFR29)

---

## Epic 2: Work Orders — The Core Shop Workflow

Users can create repair orders, add labor and parts line items, move orders through the full status lifecycle, generate professional PDF invoices, and deliver them to customers. This is the primary daily workflow for every shop.

### Story 2.1: Create Repair Order with Line Items

As a shop owner or technician,
I want to create a new repair order linked to a customer and vehicle with labor and parts,
So that all work performed is documented and priced correctly from the start.

**Acceptance Criteria:**

**Given** a shop owner or technician is on the New RO page
**When** they select a customer (via searchable dropdown), select or create a vehicle, enter mileage in, and click "Create RO"
**Then** a new RepairOrder record is created with `status: ESTIMATE`, a unique `ro_number` (atomically incremented per shop), and linked `customer_id` and `vehicle_id`
**And** a MileageRecord is created for the vehicle with the entered mileage

**Given** an RO is created and open in the detail view
**When** a labor line item is added with description, hours, and labor rate
**Then** the line item is saved as `type: LABOR` with `unit_price = hours × rate` and `total_price` calculated
**And** the RO subtotals (labor, parts, shop supplies, tax, total) are recalculated and displayed immediately

**Given** an RO detail view is open
**When** a parts line item is added with part number, description, quantity, unit cost, and retail price
**Then** the line item is saved as `type: PART`
**And** the parts subtotal and RO total are updated

**Given** the shop has a shop supplies percentage configured (e.g., 5%, cap $40)
**When** labor line items are added to an RO
**Then** a FEE line item for shop supplies is automatically calculated and displayed as `min(labor_subtotal × 0.05, 40.00)`
**And** the shop supplies amount updates live as labor is added or removed

**Given** an RO detail view is open
**When** an internal note is added
**Then** the note is saved and displayed in the RO detail view
**And** the note does not appear in any customer-facing PDF or DVI link

**Given** all required fields are filled
**When** the RO is saved
**Then** the database write completes before the UI shows a success state (NFR15)
**And** the RO appears in the RO list view immediately

---

### Story 2.2: Repair Order Status Lifecycle & Filtering

As a shop owner,
I want to advance a repair order through each status stage and filter my RO list by status,
So that I always know what work is in what stage of completion.

**Acceptance Criteria:**

**Given** an RO is in `ESTIMATE` status
**When** the owner clicks "Mark Approved"
**Then** the RO status transitions to `APPROVED`
**And** the status change is visible in both the RO detail and the RO list

**Given** an RO is in `APPROVED` status
**When** the owner or technician clicks "Start Work"
**Then** the status transitions to `IN_PROGRESS`

**Given** an RO is in `IN_PROGRESS` status
**When** the owner clicks "Mark Complete"
**Then** the status transitions to `COMPLETE`
**And** the mileage-out field becomes required before the status is accepted

**Given** an RO is in `COMPLETE` status
**When** the owner generates the invoice (Story 2.3)
**Then** the status transitions to `INVOICED` automatically

**Given** a shop owner is on the RO list page
**When** they filter by status (e.g., IN_PROGRESS), customer name, date range, or assigned technician
**Then** the list updates to show only matching ROs
**And** the filter state persists in the URL query string so it can be shared or bookmarked

**Given** an RO is assigned to a technician
**When** the technician logs in on a shared tablet
**Then** only ROs assigned to them appear in their RO list
**And** they can update the status from IN_PROGRESS to COMPLETE

---

### Story 2.3: PDF Invoice Generation & Delivery

As a shop owner,
I want to generate a professional PDF invoice and send it to the customer by email or SMS,
So that payment can be collected and records are audit-ready.

**Acceptance Criteria:**

**Given** an RO is in `COMPLETE` status
**When** the owner clicks "Generate Invoice"
**Then** an Inngest job generates a PDF containing: shop name/logo/address/license number, RO number, customer name/vehicle info, all line items with quantities and prices, subtotals (labor, parts, shop supplies), tax breakdown, and total due
**And** the PDF is uploaded to S3 (`shopflow-invoices` bucket)
**And** the RO status transitions to `INVOICED`
**And** a unique `invoice_token` is set on the RO for public access

**Given** a PDF invoice has been generated
**When** the owner clicks "Email Invoice"
**Then** an email is sent to the customer's email address with the PDF attached and a "View Invoice" link pointing to `/public/invoice/[token]`

**Given** a PDF invoice has been generated
**When** the owner clicks "Send Invoice via SMS"
**Then** an SMS is sent to the customer's phone number with a link to the public invoice page

**Given** a customer visits `/public/invoice/[token]`
**When** the token is valid and not expired (30 days)
**Then** they see the invoice details in a clean, mobile-optimized browser view
**And** they can download the PDF

**Given** an invoice token has expired (> 30 days)
**When** a customer tries to access the link
**Then** they see a clear message explaining the link has expired and how to request a new one

**Given** an invoice PDF already exists for an RO
**When** the owner re-generates the invoice (e.g., after a correction)
**Then** a new PDF is generated, the old S3 object is overwritten, and the `invoice_token` remains the same (link stays valid)

---

### Story 2.4: Estimate Templates

As a shop owner,
I want to save common repairs as estimate templates and apply them when creating new ROs,
So that I can start a standard oil change or brake job in seconds instead of minutes.

**Acceptance Criteria:**

**Given** a shop owner has an existing RO with line items
**When** they click "Save as Template" and enter a template name (e.g., "Full Synthetic Oil Change")
**Then** an EstimateTemplate record is saved containing all the current RO's labor and parts line items as a JSON snapshot

**Given** a shop owner creates or edits an RO
**When** they click "Apply Template" and select a saved template
**Then** all line items from the template are added to the current RO
**And** each added line item is editable (the template is a starting point, not locked)

**Given** templates exist for the shop
**When** the owner visits Settings → Estimate Templates
**Then** they see all templates listed with name, item count, and date created
**And** they can rename or delete any template

**Given** a template is deleted
**When** the deletion is confirmed
**Then** the template record is removed
**And** existing ROs that previously used the template are unaffected (line items were copied, not referenced)

---

## Epic 3: Customer & Vehicle Management

Users can maintain a complete database of customers and vehicles, view full service histories, search across all records, and import existing customer data from CSV files.

### Story 3.1: Customer Records & Service History

As a shop owner,
I want to create and manage customer records and see each customer's full repair history,
So that I can greet returning customers by name and quickly pull up their past work.

**Acceptance Criteria:**

**Given** a shop owner is on the New Customer page
**When** they enter first name, last name, phone (required), email, address, and notes
**Then** a Customer record is created with `shop_id` set from session
**And** PII fields (email, phone, address) are encrypted with AES-256-GCM before storage (NFR7)

**Given** a customer record exists
**When** the owner visits the Customer detail page
**Then** they see the customer's contact info, all linked vehicles, and all ROs sorted by date descending
**And** each RO in the history shows: date, RO number, vehicle, services performed (labor descriptions), and invoice total

**Given** a customer's contact details have changed
**When** the owner edits the customer record and saves
**Then** the updated fields are re-encrypted and stored
**And** all linked ROs continue to reference the correct customer

**Given** a customer record exists with a `deleted_at` set
**When** any user attempts to view or link that customer to a new RO
**Then** the customer does not appear in search results or dropdowns
**And** the customer record is still visible to the owner via a "Deleted Customers" filter for 90 days

---

### Story 3.2: Vehicle Records & Mileage Tracking

As a shop owner,
I want to create vehicle records with full specs and track mileage across visits,
So that I have an accurate maintenance history for every car in my shop.

**Acceptance Criteria:**

**Given** a customer record exists
**When** a shop owner creates a new vehicle and enters year, make, model, trim, engine, VIN (manual), license plate, and color
**Then** a Vehicle record is created linked to the customer and with `shop_id` set from session

**Given** a vehicle is linked to an RO
**When** the RO's mileage-in or mileage-out is recorded
**Then** a MileageRecord is created for the vehicle with the mileage value, date, and `ro_id`

**Given** a vehicle detail page is viewed
**When** the mileage history section is displayed
**Then** all mileage readings are shown chronologically with the date and associated RO number
**And** the most recent mileage reading is shown prominently as "Current Mileage"

**Given** a vehicle detail page is viewed
**When** the service history section is displayed
**Then** all ROs for this vehicle are shown regardless of which customer currently "owns" it
**And** each history entry shows date, services, mileage, and technician

**Given** a customer search is performed
**When** the user searches by license plate
**Then** the customer linked to the vehicle with that plate is returned in results

---

### Story 3.3: Customer Search

As a shop owner or service advisor,
I want to quickly find any customer by name, phone, email, or their vehicle's license plate,
So that I can pull up a returning customer's record in seconds when they call or walk in.

**Acceptance Criteria:**

**Given** a user is on the Customers list page
**When** they type in the search box
**Then** results are filtered in real-time (with 300ms debounce) matching customer first name, last name, email (decrypted for search), phone, or any linked vehicle's license plate
**And** search runs against the shop's customers only (enforced by `shop_id` in all queries)

**Given** a search returns results
**When** the user clicks a customer in the results
**Then** they are taken to the Customer detail page

**Given** no results match the search query
**When** the search is performed
**Then** the empty state shows "No customers found" with a "Create new customer" button

---

### Story 3.4: CSV Customer Import

As a shop owner switching from another system,
I want to import my customer list from a CSV file,
So that I don't have to re-enter hundreds of customers manually.

**Acceptance Criteria:**

**Given** a shop owner is on the Customers → Import page
**When** they upload a CSV file in generic format (columns: first_name, last_name, phone, email, address)
**Then** the system parses the CSV, displays a preview of the first 10 rows, and shows a count of records to be imported

**Given** a CSV is uploaded in ARI export format
**When** the system detects the ARI column headers
**Then** it automatically maps ARI columns to ShopFlow fields and shows the same preview

**Given** the import preview is confirmed
**When** the user clicks "Import"
**Then** all valid customer records are created with `shop_id` from session and PII encrypted
**And** a progress indicator shows import progress for large files (> 100 records)
**And** rows with missing required fields (name or phone) are skipped and listed in an error summary

**Given** an import includes a customer whose email already exists in the shop's records
**When** the import processes that row
**Then** it is skipped (no duplicate created) and listed in the "skipped duplicates" summary

**Given** an import completes
**When** the result screen is shown
**Then** the owner sees: total records imported, records skipped (duplicates), records failed (validation errors)

---

## Epic 4: Digital Vehicle Inspection (DVI)

Technicians capture photo-based multi-point inspections on a mobile device or tablet, owners add pricing and send a browser link to the customer, and customers approve or decline recommended repairs — all without installing any app.

### Story 4.1: DVI Creation & Photo Capture on Mobile

As a technician,
I want to create a DVI on my phone or tablet, photograph inspection findings, and mark each item's condition,
So that I can document what I find without leaving the vehicle or losing information.

**Acceptance Criteria:**

**Given** a technician has an assigned RO open
**When** they tap "Create Inspection"
**Then** a new DviInspection record is created in `DRAFT` status linked to the RO
**And** a default set of 20 inspection items is pre-populated (e.g., Brakes - Front, Tires - LF, Air Filter, Battery, etc.)

**Given** the DVI editor is open on a mobile device
**When** the technician taps "Add Photo" on any inspection item
**Then** the device camera opens (using `<input type="file" accept="image/*" capture="environment">`)
**And** after photo capture, the client requests a presigned S3 URL from `/api/dvi-inspections/[id]/items/[itemId]/photos/presign`
**And** the photo is uploaded directly to S3 via the presigned PUT URL (bypassing the server for performance — NFR2)
**And** after upload, a DviPhoto record is created in the database with the S3 key
**And** the photo thumbnail appears on the DVI item within 5 seconds on 4G (NFR2)

**Given** the DVI editor is open
**When** the technician taps the condition picker for an item
**Then** they see three large tap targets (min 44×44 px — NFR26): Green (OK), Yellow (Monitor), Red (Urgent)
**And** each option shows both the color indicator AND a text label (NFR27)

**Given** a condition is set for a DVI item
**When** the technician adds a typed note (e.g., "2mm remaining, replace soon")
**Then** the note is saved with the item
**And** the save completes before the UI confirms (NFR15)

**Given** all photos have been uploaded via direct S3 presigned URLs
**When** the file upload (S3 upload event) is complete
**Then** a malware scan is triggered via Lambda ClamAV (NFR13)
**And** if a scan fails, the photo is soft-deleted and the technician is shown an error

---

### Story 4.2: DVI Pricing & Share Link

As a shop owner,
I want to add prices to flagged DVI items and send the customer a browser link to review them,
So that the customer can see exactly what I found and approve repairs without a phone call.

**Acceptance Criteria:**

**Given** a DVI is in DRAFT status with items populated by the technician
**When** the owner opens the DVI from the RO detail view
**Then** they see all items with photos, condition flags, and tech notes
**And** they can add a dollar price to any RED or YELLOW item (optional for GREEN items)

**Given** the owner has reviewed the DVI and optionally added pricing
**When** they click "Send to Customer"
**Then** the DVI status changes to `SENT`
**And** the `share_token` (CUID2) is set with `share_expires_at` = now + 30 days (NFR10)
**And** an SMS is automatically sent to the customer with the DVI link (using the DVI Complete template with DVI link auto-included — FR30)

**Given** the share link is generated
**When** it is accessed via the URL `/public/dvi/[token]`
**Then** the page renders with no authentication required
**And** the customer sees the shop name, vehicle info, and all inspection items with photos, condition labels (text + color — NFR27), tech notes, and prices

**Given** a DVI link has expired (> 30 days from `share_expires_at`)
**When** a customer tries to access it
**Then** they see a friendly "This link has expired" message with the shop's phone number

---

### Story 4.3: Customer DVI Approval

As a customer,
I want to review my car's inspection results in my browser and approve or decline repairs,
So that I can authorize work without playing phone tag with the shop.

**Acceptance Criteria:**

**Given** a customer opens the DVI link on any browser (mobile or desktop)
**When** the page loads
**Then** DVI status changes to `VIEWED` and `viewed_at` is recorded
**And** a DviAuditLog entry is created with action `LINK_VIEWED`, the customer's IP address, and user agent (NFR21 — append-only)
**And** the shop owner receives a real-time notification (or at next 30-second poll) that the customer has viewed the DVI

**Given** the customer is on the DVI approval page and sees RED items with prices
**When** they tap "Approve" on a specific item
**Then** the DviItem record is updated with `customer_action: APPROVED` and `actioned_at` timestamp
**And** a DviAuditLog append-only entry records: action `ITEM_APPROVED`, dvi_item_id, IP address (NFR21)
**And** no existing audit log entry can be modified or deleted (enforced by absence of UPDATE/DELETE routes on audit_logs — NFR11)

**Given** the customer declines a repair item
**When** they tap "Decline"
**Then** `customer_action: DECLINED` is recorded with the same audit log entry pattern

**Given** all items have been actioned by the customer
**When** the last item is approved or declined
**Then** the DVI status updates to `FULLY_APPROVED` or `PARTIALLY_APPROVED` accordingly

**Given** the RO detail page is open at the shop
**When** the technician or owner is viewing the page while the customer is approving items
**Then** TanStack Query polls the DVI status every 30 seconds
**And** approved items appear with a green "Approved" badge without a manual refresh (FR19)

---

### Story 4.4: DVI Owner Notifications & Audit Access

As a shop owner,
I want to be notified when a customer interacts with a DVI and have access to a complete immutable audit trail,
So that I can act immediately on approvals and have proof of customer authorization for warranty purposes.

**Acceptance Criteria:**

**Given** a customer views or approves a DVI
**When** the event is recorded in the database
**Then** the shop owner sees a notification badge in the app header (populated on next page load / TanStack Query refresh)
**And** the RO detail page shows a "Customer viewed DVI" or "Customer approved items" status update with timestamp

**Given** a DVI has received customer approvals
**When** the owner opens the DVI audit log view
**Then** they see a chronological list of all audit events: LINK_VIEWED, ITEM_APPROVED, ITEM_DECLINED, with timestamp, IP address, and user agent
**And** there is no "Delete" or "Edit" option on any audit entry (immutable — NFR11)
**And** audit records are retained indefinitely (7-year minimum — NFR31)

**Given** a DVI has customer approvals
**When** the owner generates the invoice for the RO
**Then** the invoice notes which services were DVI-approved vs. verbally authorized

---

## Epic 5: Two-Way Customer Texting

Users send and receive SMS with customers directly from repair orders using Twilio, with a thread view per customer, customizable templates, and credit balance management — enabling the shop to reduce phone calls and keep all communication tied to the RO.

### Story 5.1: SMS Sending & Receiving from RO

As a shop owner or service advisor,
I want to text customers directly from their repair order and receive their replies in the same thread,
So that all communication about a job is in one place and I never lose track of a conversation.

**Acceptance Criteria:**

**Given** a shop owner is on an RO detail page
**When** they click "Send Text" and type a message
**Then** the SMS is sent via Twilio Messaging Service (using the shop's Twilio number pool — NFR23)
**And** an SmsMessage record is created with `direction: OUTBOUND`, the Twilio SID, and `status: QUEUED`
**And** the message appears in the conversation thread on the RO immediately (optimistic update)

**Given** Twilio delivers the SMS
**When** Twilio sends a status callback to `POST /webhooks/twilio/status`
**Then** the SmsMessage `status` is updated to `DELIVERED` or `UNDELIVERED`
**And** undelivered messages are flagged visually in the thread

**Given** a customer replies to a shop SMS
**When** Twilio sends the inbound message to `POST /webhooks/twilio/inbound`
**Then** the webhook validates the Twilio request signature before processing (NFR — security)
**And** an SmsMessage record is created with `direction: INBOUND` and linked to the correct SmsThread (matched by customer phone number)
**And** the reply appears in the thread on the RO detail page at next 30-second poll

**Given** a shop owner opens the Messages section
**When** the inbox loads
**Then** all SmsThreads for the shop are listed, sorted by most recent message, with the customer name and last message preview

**Given** a shop owner views a specific thread (`/messages/[customerId]`)
**When** the thread loads
**Then** all messages (inbound and outbound) are shown chronologically with timestamps and direction indicators

---

### Story 5.2: SMS Templates & DVI Link Integration

As a shop owner,
I want pre-built SMS templates for common messages and the ability to customize them,
So that I can send professional, consistent messages in one tap instead of typing each time.

**Acceptance Criteria:**

**Given** a new shop is created
**When** the shop's default templates are initialized
**Then** 5 default SmsTemplate records are created: "Estimate Ready", "DVI Complete — here's what we found", "Car is Ready for Pickup", "Appointment Reminder", and "Invoice Sent"

**Given** a shop owner is composing an SMS on the RO detail page
**When** they click "Templates"
**Then** a popover shows all shop templates
**And** clicking a template inserts its body text into the composer with placeholders resolved: `{{customerName}}` → customer first name, `{{roNumber}}` → RO number, `{{shopName}}` → shop name

**Given** the "DVI Complete" template is applied and a DVI share link exists for the RO
**When** the template is inserted
**Then** the `{{dviLink}}` placeholder is replaced with the full shareable DVI URL (FR30)

**Given** a shop owner visits Settings → SMS Templates
**When** they edit or create a template
**Then** they can use any combination of placeholders: `{{customerName}}`, `{{roNumber}}`, `{{shopName}}`, `{{dviLink}}`
**And** the shop can have a maximum of 10 templates

**Given** a template is saved
**When** a user next opens the template picker on any RO
**Then** the updated template content is reflected immediately

---

### Story 5.3: SMS Credit Management

As a shop owner,
I want to see my SMS credit balance and purchase more credits when running low,
So that customer communication never stops unexpectedly mid-month.

**Acceptance Criteria:**

**Given** a new shop is created
**When** the account is initialized
**Then** the shop's `sms_credits` field is set to 250 (included at base tier)

**Given** a shop owner views Settings → SMS or the SMS composer
**When** they check their credit balance
**Then** they see their current balance (e.g., "182 of 250 credits remaining this month")
**And** a warning indicator appears when credits drop below 50

**Given** an SMS is sent successfully
**When** the Twilio delivery confirmation arrives
**Then** `shop.sms_credits` is decremented by 1

**Given** a shop owner clicks "Buy More Credits" in the app
**When** they select a credit bundle and complete the purchase
**Then** the `sms_credits` balance increases by the purchased amount
**And** a receipt email is sent to the owner

**Given** a shop's SMS credit balance is 0
**When** a user attempts to send an SMS
**Then** the send is blocked with a clear message: "You've used all your SMS credits. Purchase more to continue texting."
**And** the message is NOT sent to Twilio

---

## Epic 6: QuickBooks Online Sync

Completed invoices automatically sync to QuickBooks Online through a native OAuth 2.0 connection; the shop owner monitors sync health and resolves failures from within ShopFlow — no third-party connector required.

### Story 6.1: QuickBooks OAuth Connection

As a shop owner,
I want to connect my QuickBooks Online account to ShopFlow by authorizing it with my QB credentials,
So that my invoice data flows directly into QuickBooks without manual entry or a third-party connector.

**Acceptance Criteria:**

**Given** a shop owner visits Settings → QuickBooks
**When** they click "Connect QuickBooks"
**Then** they are redirected to the QuickBooks Online authorization page with a CSRF state parameter
**And** the redirect includes the configured `QBO_REDIRECT_URI` pointing back to ShopFlow

**Given** the owner approves the connection in QuickBooks
**When** the QB callback hits `GET /api/quickbooks/callback`
**Then** the state parameter is validated against the session to prevent CSRF
**And** the returned access token and refresh token are encrypted with AES-256-GCM and stored on the Shop record
**And** the `qb_realm_id` and `qb_token_expires_at` are saved

**Given** the QuickBooks connection is active
**When** 24+ hours have passed and the access token has expired
**Then** the token is automatically refreshed using the stored refresh token before the next sync operation

**Given** a shop owner visits Settings → QuickBooks after connecting
**When** they click "Disconnect QuickBooks"
**Then** the QB tokens are cleared from the Shop record
**And** existing `qb_sync_logs` are retained (history preserved — FR39)
**And** no future automatic syncs are attempted

---

### Story 6.2: Automated Invoice & Customer Sync

As a shop owner,
I want invoices to automatically appear in my QuickBooks account when I mark an RO as invoiced,
So that my books are always up to date without the Sunday reconciliation grind.

**Acceptance Criteria:**

**Given** an RO transitions to `INVOICED` status
**When** the status change is persisted
**Then** an Inngest event `shopflow/invoice.created` is fired with `{ roId, shopId }`
**And** the Inngest function `qb-sync` is triggered asynchronously

**Given** the `qb-sync` Inngest function runs
**When** it processes a new invoice
**Then** a QbSyncLog record is created with `status: PENDING`
**And** the function looks up the shop's QB tokens, refreshes if expired, and calls the QuickBooks Online API
**And** it first attempts to find a matching QB customer by name/email; if not found, creates a new QB customer
**And** the invoice is created in QB as a SalesReceipt with labor charges mapped to the configured labor income account and parts charges to the parts income account
**And** the QbSyncLog is updated to `status: SUCCESS` with `qb_entity_id`

**Given** a shop owner configures income account mapping in Settings → QuickBooks
**When** they select a QB income account for "Labor Revenue" and one for "Parts Revenue"
**Then** these mappings are stored on the Shop record
**And** all future QB invoice syncs use these account assignments

**Given** the Inngest sync function fails due to an API error
**When** it retries (up to 3 times with exponential backoff)
**Then** each attempt is logged
**And** on final failure the QbSyncLog is updated to `status: FAILED` with the error message

---

### Story 6.3: Sync Dashboard, Payment Sync & Failure Alerts

As a shop owner,
I want to see a clear dashboard of all sync activity and fix any failures myself without calling support,
So that my accountant always has accurate data and I know immediately if something breaks.

**Acceptance Criteria:**

**Given** a shop owner visits Settings → QuickBooks
**When** the sync dashboard loads
**Then** they see a summary: total syncs in last 30 days, success count, failure count
**And** a table of individual sync events with: RO number, date, status (Success/Failed), and QB entity ID if successful

**Given** a QbSyncLog entry has `status: FAILED`
**When** the owner clicks "Re-sync" on that row
**Then** a `POST /api/quickbooks/sync` request is sent with the failed RO's ID
**And** a new Inngest event is triggered for that RO
**And** the sync log entry status updates to PENDING → SUCCESS or FAILED based on the retry result

**Given** a payment is marked as received on an invoiced RO
**When** the payment record is saved
**Then** an Inngest event triggers a QB payment sync
**And** the payment is recorded in QuickBooks against the correct invoice

**Given** 3 or more consecutive QB sync operations for a shop have `status: FAILED`
**When** the Inngest failure handler detects this pattern
**Then** an email alert is sent to the shop owner's email address with details of the failures and a link to the sync dashboard (FR38)

**Given** an accountant account exists for the shop
**When** the accountant logs in and visits Settings → QuickBooks
**Then** they see the sync dashboard in read-only mode (no re-sync button)
**And** they cannot modify any QB connection settings

---

## Epic 7: Parts Catalog Lookup

Users search NAPA and AutoZone catalogs from within any RO line item editor and add parts with shop markup rules pre-applied — eliminating manual price lookup and margin miscalculation.

### Story 7.1: Parts Catalog Search with Dual-Source Results

As a shop owner or service advisor,
I want to search NAPA and AutoZone catalogs simultaneously from inside an RO and see results side by side,
So that I can find the right part and its price without leaving ShopFlow or visiting a parts website.

**Acceptance Criteria:**

**Given** a shop owner is on an RO detail page and opens the parts search
**When** they type a part name or number (minimum 3 characters)
**Then** a debounced (300ms) search is triggered against both NAPA and AutoZone APIs in parallel using `Promise.allSettled`
**And** results from both sources are displayed in a unified list, each labeled with its source (NAPA or AutoZone)

**Given** both APIs respond
**When** results are shown
**Then** each result displays: part number, description, and list price
**And** results are sorted with an exact part number match at the top

**Given** one API is unavailable or times out
**When** the search is performed
**Then** results from the available API are shown with a notice: "NAPA results unavailable — showing AutoZone only" (or vice versa — NFR22)
**And** the other source's results are still fully functional

**Given** a part has been searched recently (within 24 hours)
**When** the same part number is searched again
**Then** results are served from the `parts_cache` table instead of calling the external APIs
**And** the cache hit is transparent to the user (same result format)

**Given** no parts match the search query in either catalog
**When** the search completes
**Then** the empty state reads "No parts found in NAPA or AutoZone — you can still add a manual line item"

---

### Story 7.2: Parts Markup Rules & Add to RO

As a shop owner,
I want my shop's markup rules applied automatically when I add a part from the catalog,
So that I never accidentally sell a part at cost and my margin is consistent.

**Acceptance Criteria:**

**Given** a shop owner visits Settings → Markup Rules
**When** they configure a global markup rule of 35%
**Then** a PartsMarkupRule record is created with `category: null` and `markup_pct: 0.35`

**Given** the owner also configures a category-specific rule (e.g., "Tires: 20%")
**When** a part categorized as "Tires" is added to an RO
**Then** the category rule (20%) takes precedence over the global rule (35%)

**Given** a parts catalog search result is selected
**When** the user clicks "Add to RO"
**Then** a PART line item is added to the RO with:
  - `part_number`, `description` from the catalog result
  - `unit_cost` = catalog list price
  - `unit_price` = `unit_cost × (1 + markup_pct)` calculated using Decimal arithmetic (never JavaScript float)
  - `quantity` = 1

**Given** a part has been added to an RO from the catalog
**When** the user edits the `unit_price` field directly
**Then** the override price is saved and the markup-calculated price is not re-applied on subsequent saves (FR44)

**Given** a shop has no markup rules configured
**When** a part is added from the catalog
**Then** the `unit_price` defaults to the catalog list price with a visual hint: "No markup rule set — price shown at list"

---

## Epic 8: AP Reconciliation Alerts

Users log vendor invoices and ShopFlow automatically detects and surfaces financial discrepancies — missed vendor credits, duplicate charges, and unreturned core charges — with dollar amounts and recommended actions.

### Story 8.1: Vendor Invoice Entry

As a shop owner,
I want to log the parts invoices I receive from my vendors,
So that ShopFlow has the data it needs to catch billing errors on my behalf.

**Acceptance Criteria:**

**Given** a shop owner visits AP Reconciliation → Vendor Invoices
**When** they click "Log Invoice" and fill in: vendor name, invoice number, invoice date, total, and individual line items (part number, description, quantity, unit cost)
**Then** an ApInvoice record is created with all ApInvoiceItem records

**Given** a vendor invoice has a core charge line item
**When** the owner checks "Core Charge" on that line item
**Then** the ApInvoiceItem is saved with `is_core: true`
**And** this flags it for the unreturned core detection algorithm

**Given** a vendor invoice is saved
**When** the Inngest `ap-reconciliation` function runs (nightly or on-demand)
**Then** the reconciliation engine is triggered for the new invoice

**Given** an invoice is submitted
**When** it is saved
**Then** the save is confirmed before the UI shows success (NFR15)

---

### Story 8.2: Discrepancy Detection & Alert Surfacing

As a shop owner,
I want ShopFlow to automatically flag when I'm owed money by a vendor,
So that I recover the $5,000–$20,000 per year that would otherwise silently disappear.

**Acceptance Criteria:**

**Given** a vendor invoice is logged with line items
**When** the AP reconciliation service runs
**Then** it cross-references each ApInvoiceItem against RO parts line items for the same shop, comparing part numbers, quantities, and costs

**Given** the reconciliation engine finds a vendor credit memo in a prior invoice that has not been matched to a corresponding debit
**When** the discrepancy is detected
**Then** an ApAlert is created with `alert_type: MISSED_CREDIT`, a description (e.g., "NAPA credit memo INV-8821 for $87.00 — no matching RO debit found"), and the estimated `amount`

**Given** the engine finds two invoices within 30 days for the same part number with similar amounts (within 5%)
**When** no duplicate purchase is found in the RO history for that period
**Then** an ApAlert is created with `alert_type: DUPLICATE_CHARGE` and the estimated `amount`

**Given** a core charge was logged on a vendor invoice more than 30 days ago
**When** no corresponding core return credit exists in the invoice history
**Then** an ApAlert is created with `alert_type: UNRETURNED_CORE`, a description identifying the part, and the core charge `amount`

**Given** one or more ApAlerts exist for a shop
**When** the owner visits the AP Reconciliation dashboard
**Then** each alert is displayed with: alert type, description, estimated dollar amount at risk, and a recommended action (e.g., "Call NAPA to apply credit INV-8821")

**Given** an owner has resolved an AP alert (e.g., called the vendor and applied the credit)
**When** they click "Mark Resolved" on the alert
**Then** `resolved: true` is set on the ApAlert
**And** the alert is moved to a "Resolved" tab (not deleted)

---

### Story 8.3: Reconciliation Report Export

As a shop owner or accountant,
I want to export an AP reconciliation report showing all open discrepancies with dollar amounts,
So that I can share it with my accountant and use it when calling vendors.

**Acceptance Criteria:**

**Given** one or more unresolved AP alerts exist
**When** a shop owner or accountant clicks "Export Report"
**Then** they can choose between PDF and CSV format

**Given** CSV is selected
**When** the export runs
**Then** a CSV is downloaded with columns: alert type, vendor, invoice number, part description, amount at risk, date detected, status (open/resolved)

**Given** PDF is selected
**When** the export runs
**Then** a PDF is generated with the shop logo, date, a summary total of at-risk dollars, and a table of all alerts (both open and resolved in the reporting period)
**And** the PDF is available for download within 10 seconds

---

## Epic 9: Reports & Analytics

Shop owners and accountants can view revenue summaries, operational health reports, and detailed invoice history — with CSV export for accountant handoff.

### Story 9.1: Revenue Summary Dashboard

As a shop owner,
I want to see my shop's revenue broken down by day, week, and month,
So that I can track whether the business is growing and quickly spot slow periods.

**Acceptance Criteria:**

**Given** a shop owner visits the Reports → Revenue page
**When** the dashboard loads
**Then** they see three tabs: Daily, Weekly, Monthly
**And** each tab shows: Total Invoiced, Labor Revenue, Parts Revenue, and number of ROs invoiced for the selected period

**Given** the Monthly tab is active
**When** the owner views the report
**Then** they see data for the last 12 months as a bar chart with month labels
**And** clicking any month bar filters the report to show that month's detail

**Given** a report is viewed
**When** the data is loaded
**Then** it loads in under 2 seconds (NFR1)
**And** all totals use server-side aggregation (not client-side calculation)

**Given** an accountant accesses the reports
**When** they view the revenue dashboard
**Then** they see the same view as the owner (read-only — no edits possible from this role)

---

### Story 9.2: Operational Reports (Aging, Top Services, Technician Summary)

As a shop owner,
I want operational reports showing work in progress, my most profitable services, and technician productivity,
So that I can manage my shop efficiently and reward high-performing techs.

**Acceptance Criteria:**

**Given** a shop owner visits Reports → Open ROs
**When** the aging report loads
**Then** all ROs with status ESTIMATE or IN_PROGRESS are listed with: RO number, customer, vehicle, status, date created, and days open
**And** ROs open more than 7 days are highlighted in yellow; more than 14 days in red

**Given** a shop owner visits Reports → Top Services
**When** the report loads with a date range selector (default: last 30 days)
**Then** the top 10 labor descriptions are shown, ranked by total revenue generated
**And** each row shows: service name, number of times performed, and total revenue

**Given** a shop owner visits Reports → Technicians
**When** the report loads with a date range selector
**Then** each technician (TECHNICIAN role) is listed with: name, number of ROs assigned, number completed, and total labor revenue on their completed ROs
**And** technicians who have been deleted display as "Former Tech" with their historical data intact

---

### Story 9.3: Invoice History Search & CSV Export

As a shop owner or accountant,
I want to search the full invoice history and export it to CSV,
So that I can answer customer questions, support tax preparation, and provide clean data to my accountant.

**Acceptance Criteria:**

**Given** a user visits Reports → Invoice History
**When** the page loads
**Then** all `INVOICED` status ROs are listed with: date, RO number, customer name, vehicle, labor total, parts total, and invoice total

**Given** the user applies filters
**When** they filter by date range, customer name, vehicle, or RO number
**Then** the list updates to show only matching invoices
**And** the filter state persists in the URL query parameters

**Given** filtered or full results are shown
**When** the user clicks "Export to CSV"
**Then** a CSV file is downloaded containing all matching invoices with all visible columns
**And** the export runs in under 5 seconds for up to 10,000 rows

**Given** invoice data is 7 years old or less (NFR32)
**When** a search is performed
**Then** all records within the retention window are returned (records are never hard-deleted)

---

## Epic 10: Shopmonkey Migration & Onboarding Wizard

New users complete a guided onboarding wizard to set up their shop quickly; Shopmonkey refugees import all their existing data — customers, vehicles, and open repair orders — in a single workflow.

### Story 10.1: Guided Onboarding Wizard

As a new shop owner,
I want a step-by-step setup wizard that walks me through configuring my shop,
So that I can be ready to create my first repair order within an hour of signing up.

**Acceptance Criteria:**

**Given** a shop owner has just registered
**When** they complete signup
**Then** they are redirected to an onboarding wizard at `/onboarding`

**Given** the owner is in the onboarding wizard
**When** Step 1 (Business Profile) is completed
**Then** they are prompted to enter: shop name, address, phone, and default labor rate
**And** the wizard advances to Step 2 automatically on "Next"

**Given** Step 2 (Service Rates) is active
**When** the owner configures their labor rate and optionally sets tax rates and shop supplies percentage
**Then** these settings are saved to the Shop record
**And** the wizard advances to Step 3

**Given** Step 3 (Customer Import) is active
**When** the owner uploads a CSV file
**Then** the CSV import from Story 3.4 is triggered
**And** on import completion the wizard advances to Step 4

**Given** the owner is on Step 3 with no CSV file to upload
**When** they click "Skip for now"
**Then** the wizard advances to Step 4 without importing any data

**Given** Step 4 (Connect QuickBooks) is active
**When** the owner clicks "Connect QuickBooks"
**Then** the OAuth flow from Story 6.1 is triggered
**And** on successful connection the wizard advances to Step 5 (or they can skip)

**Given** Step 5 (Create First RO) is active
**When** the owner creates a repair order (using a demo customer if no customers were imported)
**Then** the wizard marks onboarding complete
**And** the owner is redirected to the main dashboard
**And** the onboarding wizard is no longer shown on subsequent logins

**Given** a trial user has not imported any data
**When** they first access the dashboard after skipping onboarding
**Then** 5 demo customers, 5 demo vehicles, and 3 demo ROs are visible as sample data
**And** a banner indicates "These are sample records — create your first real RO to get started"

---

### Story 10.2: Shopmonkey One-Click Data Migration

As a shop owner switching from Shopmonkey,
I want to import all my Shopmonkey data — customers, vehicles, and open repair orders — in a single workflow,
So that I can switch to ShopFlow without losing years of repair history or re-entering hundreds of records.

**Acceptance Criteria:**

**Given** a shop owner visits Customers → Migrate from Shopmonkey
**When** they upload their Shopmonkey data export file (CSV)
**Then** the system detects whether the file is Shopmonkey v1 or v2 format (NFR24) by inspecting the column headers
**And** displays a preview: total customers found, total vehicles found, total open ROs found

**Given** the preview is confirmed
**When** the owner clicks "Start Migration"
**Then** the `import.service.ts` Shopmonkey parser runs:
  - Customers are created with encrypted PII (AES-256-GCM — NFR7)
  - Vehicles are linked to their customers with year/make/model/VIN/plate from the export
  - Open ROs are created in `ESTIMATE` or `IN_PROGRESS` status preserving the original services and line items
**And** the migration runs as a background Inngest job (to handle large data sets without timeout)
**And** a progress indicator shows migration status (not just a spinner)

**Given** the migration encounters an existing customer record matching by email
**When** the duplicate is detected
**Then** the existing record is preserved and not overwritten
**And** the duplicate is noted in the migration summary as "skipped — already exists"

**Given** the migration completes
**When** the result screen is shown
**Then** the owner sees: customers imported, vehicles imported, open ROs imported, records skipped (duplicates), records failed (validation errors)
**And** a "Download Migration Report" link provides a CSV of all skipped/failed records with reasons

**Given** a shop owner was previously on Shopmonkey v2.0 with specific data structures
**When** the v2 format is detected
**Then** the parser correctly remaps v2 column names to ShopFlow fields (handling the format change between v1 and v2 exports)
**And** the migration result is equivalent to the v1 migration

---

## Epic List Summary

| Epic | Title | Stories | FRs Covered |
|---|---|---|---|
| 1 | Foundation — Auth, Shop Setup & User Roles | 1.1–1.5 | FR63–FR70 |
| 2 | Work Orders — The Core Shop Workflow | 2.1–2.4 | FR1–FR11 |
| 3 | Customer & Vehicle Management | 3.1–3.4 | FR46–FR51 |
| 4 | Digital Vehicle Inspection (DVI) | 4.1–4.4 | FR12–FR22 |
| 5 | Two-Way Customer Texting | 5.1–5.3 | FR23–FR30 |
| 6 | QuickBooks Online Sync | 6.1–6.3 | FR31–FR39 |
| 7 | Parts Catalog Lookup | 7.1–7.2 | FR40–FR45 |
| 8 | AP Reconciliation Alerts | 8.1–8.3 | FR53–FR57 |
| 9 | Reports & Analytics | 9.1–9.3 | FR58–FR62 |
| 10 | Shopmonkey Migration & Onboarding Wizard | 10.1–10.2 | FR52 + onboarding |

**Total: 10 epics, 29 stories, all 70 FRs and all 32 NFRs covered.**
