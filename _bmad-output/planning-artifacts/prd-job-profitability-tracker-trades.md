---
stepsCompleted: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
inputDocuments:
  - ideas/shortlisted/job-profitability-tracker-trades.md
  - _bmad-output/planning-artifacts/product-brief-job-profitability-tracker-trades.md
workflowType: prd
project_name: job-profitability-tracker-trades
product_name: JobLens
user_name: Root
date: 2026-10-11
author: Root
classification:
  projectType: saas_b2b
  domain: smb_field_service_finance
  complexity: medium
  projectContext: greenfield
---

# Product Requirements Document — JobLens

**Author:** Root
**Date:** 2026-10-11
**Product:** JobLens — Job Profitability Tracker for Trades

---

## Executive Summary

Small plumbing, HVAC, and electrical shops (1–8 employees) operate without per-job P&L visibility. They invoice in QuickBooks, schedule in Google Calendar or Jobber, buy materials at supply houses — and at week's end see only aggregate revenue and expenses. No per-job correlation. No margin by job type. No pricing intelligence.

**JobLens** is a standalone, focused web application (mobile-first PWA) that delivers per-job profitability to small trades businesses. The core loop: create job card → enter materials + tech time → import QBO invoice → see job margin. The primary output is a dashboard sorted by margin showing "which jobs made money this month" and a job-type breakdown revealing margin variance across work types (Service Calls, Installs, Maintenance, Emergency Calls). JobLens works **alongside** existing FSM and accounting tools — no migration, no platform switch, no workflow disruption.

**Target users:** Small trade shop owners and operators (plumbing, HVAC, electrical), 1–8 employees, $300K–$2M annual revenue, using QuickBooks Online for accounting.

**Market timing:** QuickBooks Online raised prices 41–70% in August 2026, triggering active software re-evaluation. ServiceTitan continues consolidating enterprise, leaving 240,000 small-trades shops without an affordable job costing solution. No standalone job P&L product exists under $100/month for this segment.

**Business model:** $29/month flat (unlimited jobs, unlimited techs) or $99/$149 LTD via AppSumo.

**Key numbers:**
- TAM: ~240,000 small trades shops (plumbing, HVAC, electrical, US)
- SOM Year 1: 360–720 shops → $125K–$250K ARR
- MVP build time: 3–4 weeks
- Idea score: 88/105 on the 10-step playbook framework

### What Makes This Special

**Single differentiator:** The only US-market standalone job P&L tracker for service trades under $100/month. Every existing solution requires either an enterprise commitment ($1,750+/month ServiceTitan), a platform migration (Jobber Grow $249/month), or is built for a different market (JobTread for $2M+ GCs, Tradify/Fergus concentrated in NZ/AU).

**Structural gap JobLens fills:**
1. **Standalone** — no FSM or accounting migration required; works alongside Jobber, HouseCallPro, QuickBooks
2. **Service-trades-specific UX** — designed for the service call cycle (schedule → dispatch → job → invoice), not construction project management
3. **"Find the money" framing** — owner language, not accounting jargon
4. **Job-type analytics** — not just "which jobs" but "which types of jobs" = pricing intelligence at the type level
5. **QBO-first integration** — invoice import auto-populates job revenue, eliminating double-entry

**Core insight:** Shop owners don't lack data — they lack correlation. Materials live in supplier invoices, labor lives in techs' heads, revenue lives in QBO. JobLens is the correlation layer that turns three disconnected data sources into one margin number per job.

## Project Classification

- **Project Type:** SaaS B2B (web application, mobile-first PWA)
- **Domain:** SMB Field Service / Small Business Finance Tools
- **Complexity:** Medium — QBO OAuth integration, financial data accuracy requirements, multi-user considerations, Stripe billing
- **Project Context:** Greenfield — no existing codebase

---

## Success Criteria

### User Success

**Primary activation event — "Found a losing job type":**
User views job-type breakdown with ≥2 job types each having ≥5 entries. This is the moment the product delivers its core value: not just "this job was profitable" but "this type of work is draining my margin." Tracking this funnel event is the primary product health signal.

- 40% of active users reach activation event within 30 days of first job entry
- 55% reach activation by 60 days
- Users completing activation report margin surprise (qualitative: "I didn't know emergency calls were only 18%") in ≥10 unprompted reviews/support messages within 60 days of AppSumo launch

**Onboarding success:**
- 70% of signups enter first job within 24 hours
- 60% of signups connect QBO within 7 days
- 50% of signups complete a "real data session" (QBO invoice imported + job margin calculated) within 3 days
- Onboarding target: time from signup to first margin number visible < 10 minutes

**Engagement:**
- 40% weekly active rate (paid users open app in any given week)
- 70% monthly active rate
- Average 12+ jobs entered per active user per month

### Business Success

| Milestone | Target | Timeframe |
|-----------|--------|-----------|
| AppSumo LTD revenue | $50K–$100K | Month 1–3 |
| MRR subscribers | 100 shops | Month 3 |
| MRR subscribers | 250 shops | Month 6 |
| MRR subscribers | 500 shops | Month 12 |
| ARR | $174K | Month 12 |
| Monthly churn | <5% | Month 3 |
| Monthly churn | <3% | Month 12 |
| 6-month retention | 65%+ | — |
| G2/Capterra reviews | 25 | Month 3 |
| G2/Capterra reviews | 150 | Month 12 |
| NPS | 40+ | Month 6 |

**Strategic milestones:**
- Default recommendation for "job costing" in r/Plumbing and r/hvacpeople within 6 months
- 5+ active bookkeeper referral partners by Month 6
- First Google result for "job costing for plumbers" and "HVAC profit tracker" by Month 9
- Average 6+ months job history per active user by end of Year 1 (switching cost / data moat)

### Technical Success

- QBO OAuth sync error rate: <10% of connected users report sync issues within first 30 days
- QBO invoice import accuracy: imported invoice amounts match QBO source within 0 discrepancy (no rounding or truncation errors)
- Zero write-backs to QBO — all data flows one direction (QBO → JobLens) to prevent risk of corrupting shop's books
- First job margin calculation visible on screen in <10 minutes from account creation (onboarding speed)
- Mobile materials entry completes in <90 seconds for a typical 3-line-item job

### Measurable Outcomes

**Go/No-Go Decision (Day 60 post-AppSumo launch):**
- Activation rate ≥50% (users who enter 3+ jobs reach job-type breakdown screen within 14 days) → proceed to Phase 2
- 30-day retention ≥60% (users who reach activation still active at 30 days) → proceed to Phase 2
- Revenue ≥100 paying subscribers or 200 LTD buyers → confirmed willingness to pay
- QBO integration error rate <10% → quality gate before scaling marketing
- ≥10 unprompted "changed my pricing" or "found a losing job type" qualitative mentions → core value confirmed

---

## Product Scope

### MVP — Minimum Viable Product

**MVP philosophy:** Problem-solving MVP. The minimum product that delivers the "found the losing job type" activation event for a shop owner using QuickBooks Online. Every MVP feature is load-bearing — removing any single one breaks the core value loop.

**Core user journeys supported by MVP:**
1. Owner onboards, connects QBO, enters first week of jobs, sees margin breakdown
2. Owner reviews dashboard Monday morning to identify underperforming job types
3. Field tech adds materials to a job via mobile at job close

**Must-Have Capabilities:**
1. Job card creation (customer, job type, date, optional address, notes)
2. Materials line-item entry with recents list (part name, unit cost, quantity, auto-totals)
3. Labor time entry with per-tech fully-loaded hourly rates (multiple techs per job)
4. Auto margin calculation (revenue − materials − labor = profit + margin %)
5. QuickBooks Online OAuth integration — import last 30 invoices, one-click match to jobs
6. Dashboard — last 30 jobs sorted by margin, color-coded, job-type breakdown, date filter
7. Technician management (name, hourly rate — no separate login required in MVP)
8. Target margin configuration (default 35%)
9. Stripe subscription billing ($29/month) and LTD code redemption ($99/$149)
10. Mobile-first PWA (installable on iOS/Android homescreen)

**Explicitly out of scope for MVP:**
- Overhead allocation (truck, insurance per hour) — Phase 2
- Jobber/HouseCallPro integration — Phase 2
- Per-tech mobile login / separate tech role — Phase 2
- Supplier invoice linking (auto-update material costs from QBO bills) — Phase 2
- PDF/CSV export — Phase 2
- Seasonal / year-over-year comparison — Phase 2 (requires job history)
- Recurring job templates — Phase 2
- Customer lifetime value view — Phase 2
- Team performance / margin by tech — Phase 2
- AI pricing suggestions — Phase 3

### Growth Features (Post-MVP, Phase 2)

- Overhead allocation per billable hour (truck lease, insurance, fuel)
- Mobile field entry with separate tech access (PIN or unique link — no full account access)
- Supplier invoice linking (link QBO bills to job material line items, auto-update costs)
- PDF/CSV monthly report export ("send to accountant" workflow)
- Jobber + HouseCallPro integration (pull scheduled jobs to pre-populate job cards)
- Recurring job templates (maintenance agreements)
- Seasonal profitability comparison (month vs. prior year)
- Bookkeeper partner dashboard (referral links, co-managed client view)

### Vision (Phase 3)

- AI pricing intelligence ("your coil replacements are running 8% below margin — raise rate by $180")
- Natural language job query ("show all jobs below 20% margin in last 90 days")
- Vertical expansion: roofing, landscaping, pest control, pool service
- Team analytics: margin by technician, callback rate per tech
- Multi-location / multi-company (single login, company switcher)
- Industry benchmark data ("HVAC residential changeout avg margin: 31%")

---

## User Journeys

### Journey 1: Marcus — Owner's First Week (Primary Success Path)

**Persona:** Marcus, 22-year plumber, 3-tech shop, $850K/year revenue, uses Jobber + QuickBooks Plus. QuickBooks raised his rate from $99 to $140 in August. He's in r/Plumbing, sees someone recommend JobLens for "finally knowing which emergency calls make money."

**Opening Scene:** Marcus signs up Sunday evening. He's skeptical ("another app that won't stick") but the $29/month is low enough to try without approval from anyone. He lands on the onboarding screen.

**Rising Action:**
1. Onboarding prompts: "Connect QuickBooks to pull in your invoices." Three-click OAuth flow: authorize → select company → done. JobLens imports his last 30 invoices.
2. "Create your first job." He selects last Thursday's emergency service call from a jobs list pre-populated with his QBO invoice data. Customer name and invoice amount ($485) are already there.
3. He adds materials: 3 parts from the recents list (it knew about Ferguson fittings from a past session — actually first session so it's blank, but entry is fast). Subtotal: $187.
4. He adds labor: himself (2.5 hours × $42/hour fully-loaded = $105) + drive time (0.5 hours). Total labor: $126.
5. JobLens shows: Revenue $485 − Materials $187 − Labor $126 = Profit $172 / Margin 35%.
6. He does this for 8 more jobs from last week. 20 minutes total.

**Climax — The Aha:** Monday morning, dashboard loads. His 9 jobs from last week are sorted by margin. Three emergency calls are at the bottom: 18%, 22%, 19% margin. Routine service calls are clustered at the top: 38–44%. The job-type breakdown says it clearly: Emergency Calls avg 20% | Routine Service avg 41%.

**Resolution:** Marcus screenshots the breakdown and shares it in his plumber Facebook group: "Found out emergency calls are half the margin of regular service. Raising my after-hours callout rate by $75 next week." He's used JobLens for 20 minutes and it's already changed a pricing decision. He renews at Month 3 without thinking about it.

**Journey Requirements Revealed:** Job card creation, materials entry with recents list, labor time entry, QBO invoice import and match, auto margin calculation, margin-sorted dashboard, job-type breakdown panel.

---

### Journey 2: Sandra — Power User Discovering Mix Shift (Optimization Path)

**Persona:** Sandra, took over her father's HVAC shop 6 years ago, $1.4M revenue, 5 techs, HouseCallPro + QuickBooks Advanced. Corporate ops background. End of Q3: net margin down from 28% to 22%. Suspects mix shift (more emergency calls, fewer maintenance plans) but can't prove it.

**Opening Scene:** Sandra finds JobLens through a Google search for "HVAC job profitability tracker." The landing page copy reads "Stop guessing which jobs are profitable." She's ready to pay immediately — she's already evaluated HouseCallPro's Profit Tracker and found it shallow.

**Rising Action:**
1. Signs up, connects QBO Advanced (handles 5 QBO company entities cleanly).
2. Enters 3 weeks of jobs — a mix of residential changeouts, commercial maintenance calls, and emergency service. Her office manager enters the office-side jobs; Sandra enters the Monday morning review sessions herself.
3. She sets her target margin at 32% (her corporate-brain knows this is the break-even on overhead).
4. Dashboard colors up: 4 red jobs (all emergency calls, 18–23% margin), 12 green jobs (maintenance agreements, 41–51% margin).

**Climax — The Aha:** Job-type breakdown: Maintenance Agreements avg 48% | Residential Changeouts avg 31% | Emergency Service avg 21%. She knew it, but now she has data. She emails her sales manager the screenshot: "Push maintenance plan upsells this quarter. This is why our margin is down."

**Resolution:** Sandra becomes a vocal advocate. She posts in the HVAC Business Owners Facebook group. She refers her bookkeeper to JobLens. By Month 4, she's tracking seasonal patterns. She stays subscribed for the data history alone.

**Journey Requirements Revealed:** Dashboard filter (date range), job-type breakdown with multiple job types, target margin configuration, multi-tech labor entry, ability to enter jobs for past dates.

---

### Journey 3: Kevin — QB Refugee, Simple Entry (Low-Friction Path)

**Persona:** Kevin, 2-person electrical shop (himself + 1 tech), $420K revenue. QuickBooks Desktop discontinued, forced to QBO migration, angry about price increase. Doesn't use a dispatch tool — Google Calendar + whiteboard. Heard about JobLens in r/Electrical thread: "job costing changed my panel replacement pricing."

**Opening Scene:** Kevin signs up expecting complexity. First screen: "Create your first job." No 20-step wizard. No permission request for QBO yet. He can just start.

**Rising Action:**
1. He creates a job manually: "Panel replacement — Residential" — Tuesday, 4/14. No QBO connection yet.
2. Materials: breaker box ($340), wire ($67), connectors ($28). Total: $435.
3. Labor: himself (6 hours × $55 fully-loaded) + his tech (4 hours × $38). Total: $608.
4. Invoice amount: $1,100 (he types it manually).
5. JobLens shows: Revenue $1,100 − Materials $435 − Labor $608 = Profit $57 / Margin 5.2%.

**Climax — The Aha:** Kevin stares at 5.2%. He thought he made $300+ on that job. He rechecks his math — it's right. He's been pricing panel swaps based on 2022 material costs. His gut said "I'm fine" but the number says otherwise. He connects QBO the next day to pull in historical invoices and validate the pattern.

**Resolution:** Kevin raises his panel replacement base rate by $220. He enters 6 more jobs that week to build the pattern. By Month 2, he has enough data to reprice his whole service menu. He's the user who writes a 5-star G2 review: "This showed me in 10 minutes that I was losing money on my biggest job type."

**Journey Requirements Revealed:** Manual invoice amount entry (no QBO required), single-tech labor entry, immediate margin calculation without any integration, no forced onboarding wizard, simple job creation flow.

---

### Journey 4: Field Tech Materials Entry (Mobile Use Case)

**Persona:** Darnell, lead tech at Sandra's HVAC shop. Sandra told the crew: "After every job, add the parts you used in JobLens. Takes 2 minutes." He's skeptical but tries it after a coil replacement job.

**Opening Scene:** Darnell is in his truck outside the customer's house. Job complete. He opens JobLens on his phone browser (saved to homescreen as PWA). The current job "Anderson — Coil Replacement" is at the top of his list.

**Rising Action:**
1. He taps the job. One button: "Add Materials."
2. Type: "Carrier EV..." — autocomplete from recents suggests "Carrier Evaporator Coil 3-ton." He selects it. Unit cost: $485. Quantity: 1. Tap: Add.
3. "R-410A refrigerant (lb)" — recents knows this one. Quantity: 3. Tap: Add.
4. Done. 45 seconds total. He submits.

**Resolution:** Sandra sees the materials on the job card when she reviews the dashboard Monday morning. The job margin auto-calculates with Darnell's time (entered at day-end by Sandra). The data is complete.

**Journey Requirements Revealed:** Mobile-first materials entry UI, recents list for fast re-entry, job list showing current/today's jobs at top, PWA installable on iOS homescreen, fast path: open → select job → add materials → submit in <90 seconds.

---

### Journey 5: QBO Sync Failure Recovery (Edge Case)

**Persona:** Marcus (from Journey 1), 3 months in. He creates a new job for a Friday install. Goes to match the QBO invoice — it's not showing up in the import list.

**Opening Scene:** Marcus clicks "Match QBO Invoice" on the new job card. The invoice he created Friday afternoon isn't in the list (QBO sync runs every 4 hours; the invoice was just created).

**Rising Action:**
1. He sees a "Refresh QBO invoices" button. He taps it. 8-second wait. Invoice appears.
2. Alternatively: he notices a "Can't find it? Enter amount manually" option below the list. He types in $2,150.

**Resolution:** Job margin calculates immediately from the manual entry. No broken state, no error spiral. He mental-notes that QBO sync can lag and he can always enter manually.

**Journey Requirements Revealed:** Manual QBO invoice amount override, explicit QBO refresh trigger, clear fallback path that doesn't block the primary workflow.

### Journey Requirements Summary

| Capability Revealed | Journeys |
|---------------------|----------|
| Job card CRUD | 1, 2, 3, 5 |
| Materials entry with recents | 1, 4 |
| Labor time + rate entry | 1, 2, 3 |
| Auto margin calculation | 1, 2, 3 |
| QBO OAuth + invoice import | 1, 2 |
| Manual invoice amount entry | 3, 5 |
| QBO refresh trigger | 5 |
| Dashboard — margin sorted | 1, 2 |
| Job-type breakdown | 1, 2 |
| Date range filter | 2 |
| Target margin config | 2 |
| Mobile PWA + fast materials entry | 4 |
| Multiple techs per job | 1, 2 |
| Tech hourly rate management | 1, 2, 3 |

---

## Domain-Specific Requirements

JobLens operates in the SMB finance-adjacent SaaS domain. Not a regulated fintech product — it does not process payments on behalf of users (Stripe handles that), does not touch payroll, and does not write back to QBO. Key domain constraints:

### Financial Data Integrity

- All margin calculations must be deterministic and reproducible: given the same inputs, the same margin number is always shown. No floating-point rounding errors in currency arithmetic — use integer arithmetic in cents throughout.
- Invoice amounts, material costs, and labor costs are user-entered or user-confirmed. The system displays the source of each data point (QBO-imported vs. manually entered) so users can validate. No silent data transformations.
- Historical job records are immutable once a user explicitly "closes" a job. Rate changes to technicians apply to future jobs only — prior jobs retain the rate at time of entry. This prevents retroactive P&L distortion.

### QuickBooks Online Integration Compliance

- JobLens must comply with Intuit Developer Program requirements: OAuth 2.0 only, valid SSL, no storage of QBO credentials (tokens only), visible disconnect option, privacy policy that discloses QBO data usage.
- Token storage: refresh tokens encrypted at rest, never logged.
- Scope: request minimum QBO scopes (invoices read-only). Request no write scopes in MVP.
- Rate limits: respect Intuit API rate limits (500 requests/minute/company per Intuit limits). Implement exponential backoff on 429 responses.

### Data Privacy

- Users' job P&L data is commercially sensitive. Access controls: each account's data is strictly isolated at the database row level. Multi-tenant architecture must prevent cross-account data leakage.
- No sharing, selling, or aggregating individual shop's job data with third parties.
- GDPR-compliant data deletion: upon account cancellation, users can request full data export and deletion.

### Payment Processing

- Stripe handles all payment card data. JobLens stores only Stripe customer ID and subscription status — no raw card data.
- LTD code redemption validated server-side; codes are single-use and invalidated on first redemption.

---

## SaaS B2B Specific Requirements

### Multi-Tenancy

- Each account (shop) is a fully isolated tenant. All database queries are scoped by `account_id`.
- No shared data between accounts. No admin view into individual account job data.
- Single-company per account in MVP (multi-company is Phase 3).

### Authentication & Authorization

- Email + password authentication with secure password hashing (bcrypt, cost factor 12).
- Session management via secure HTTP-only cookies with CSRF protection.
- Password reset via email token (single-use, 1-hour expiry).
- In MVP, all users within an account have full account access (no RBAC — single-owner model). RBAC (tech vs. admin roles) deferred to Phase 2.

### QBO OAuth Flow

- Standard OAuth 2.0 authorization code flow with PKCE.
- Redirect URI registered with Intuit Developer.
- Access token: 1-hour expiry; silent refresh via stored refresh token before each API call.
- Refresh token: 101-day expiry; prompt user to re-authorize if expired.
- QBO disconnect: revokes token at Intuit, deletes tokens from JobLens database, marks account as QBO-disconnected.

### Billing Integration (Stripe)

- Stripe Checkout for new subscriptions (PCI compliance delegated to Stripe).
- Stripe Customer Portal for subscription management (cancel, update payment method).
- Webhook processing: handle `customer.subscription.created`, `customer.subscription.deleted`, `invoice.payment_failed` events.
- LTD code redemption: server-side code validation, mark code as used, set subscription status to `lifetime`.
- Access gates: enforce subscription status on API routes; show graceful upgrade prompt when access is denied.

### Technical Architecture Considerations

**Recommended stack (3–4 week MVP):**
- Frontend: Next.js (App Router) — PWA via `next-pwa` or custom service worker
- Backend: Next.js API routes or separate Node.js/Express service
- Database: PostgreSQL with connection pooling (PgBouncer or Neon serverless)
- QBO Integration: Intuit OAuth 2.0 + QuickBooks Accounting API v3
- Payments: Stripe Billing
- Hosting: Railway, Render, or Vercel (fast iteration)
- Email: Resend or Postmark (transactional only in MVP)

**QBO integration build allocation:** 40% of total MVP build time. Highest-risk technical component. Edge cases requiring explicit handling: token refresh on every API call, multi-QBO-company accounts (rare but possible), invoice fuzzy matching by customer + date, empty invoice lists, QBO sandbox vs. production environment differences.

---

## Functional Requirements

### Job Management

- FR1: Users can create a job card with customer name, job type, date, and optional job address
- FR2: Users can select job type from preset options (Service Call, Install, Maintenance, Emergency Call) or enter a custom job type string
- FR3: Users can edit all fields on an existing job card at any time prior to closing the job
- FR4: Users can delete a job card; deletion removes all associated materials and labor entries
- FR5: Users can view a list of all jobs filtered by date range and sorted by created date (default) or margin percentage
- FR6: Users can search jobs by customer name or job type string

### Materials Entry

- FR7: Users can add material line items to a job with part name, unit cost (in dollars), and quantity
- FR8: The system calculates and displays each line item total (unit cost × quantity) automatically on entry
- FR9: The system displays a running total of all material costs on the job card
- FR10: Users can edit or remove individual material line items from a job
- FR11: The system surfaces a recents list of the 20 most recently used parts for fast re-entry (tap to populate part name and last-used unit cost)

### Labor Time Entry

- FR12: Users can log labor entries per technician per job with hours worked
- FR13: Each labor entry auto-calculates labor cost as hours × technician's configured fully-loaded hourly rate
- FR14: Users can override the fully-loaded rate on a per-entry basis without changing the technician's default rate
- FR15: A single job supports labor entries from multiple technicians
- FR16: The system displays total labor cost as the sum of all technician labor entries on the job

### Margin Calculation

- FR17: The system calculates job profit as invoice amount − total materials cost − total labor cost
- FR18: The system calculates and displays margin percentage as job profit / invoice amount × 100
- FR19: Margin and profit update in real time as materials, labor, and invoice amount are added or changed
- FR20: The system visually distinguishes jobs above target margin (green), within 5% below target margin (yellow), and more than 5% below target margin (red)

### QuickBooks Online Integration

- FR21: Users can connect their QuickBooks Online account via a 3-step OAuth 2.0 flow (authorize → select company → connected)
- FR22: The system imports the 30 most recently closed QBO invoices after OAuth connection
- FR23: Users can trigger a manual QBO invoice refresh to pull invoices created since last sync
- FR24: Users can match a QBO invoice to a job card with one click; the invoice amount auto-populates the job's revenue field
- FR25: The system suggests invoice matches by ranking QBO invoices by customer name similarity and proximity to job date
- FR26: Users can manually enter invoice amount on any job regardless of QBO connection status
- FR27: Users can disconnect QBO from their account; disconnection revokes tokens and removes QBO data association without deleting job records
- FR28: The system silently refreshes QBO OAuth tokens before API calls, prompting re-authorization only when the refresh token is expired

### Dashboard and Analytics

- FR29: Users can view a dashboard listing the 30 most recent jobs sorted by margin percentage, highest to lowest
- FR30: Each job row in the dashboard displays: customer name, job type, date, revenue, materials cost, labor cost, profit, and margin %
- FR31: Users can filter the dashboard to show jobs from the last 30 days, last 90 days, or a custom date range
- FR32: Users can view a job-type breakdown panel showing average margin % and total job count per job type for the selected time range
- FR33: Users can click any job row to open the full job detail view

### Technician Management

- FR34: Users can add technicians with a name and fully-loaded hourly rate
- FR35: Users can edit a technician's name or hourly rate; rate changes apply to future job labor entries only, preserving historical records
- FR36: Users can deactivate a technician; deactivated technicians are hidden from new job entry but historical labor entries are preserved
- FR37: Users can configure account-wide target margin percentage (default: 35%)

### Account and Access Management

- FR38: Users can create an account with email address and password
- FR39: Users can reset their password via a single-use email link (expires in 1 hour)
- FR40: Users can update their account email address and password
- FR41: Users can install JobLens as a PWA on iOS and Android home screens

### Subscription and Billing

- FR42: Users can subscribe to JobLens at $29/month via Stripe Checkout
- FR43: Users can redeem a lifetime deal code to receive permanent access without recurring billing
- FR44: Users can manage their subscription (view status, cancel, update payment method) via Stripe Customer Portal
- FR45: The system restricts full feature access to active subscribers and lifetime deal holders; free-trial users (if applicable) see a graceful upgrade prompt

---

## Non-Functional Requirements

### Performance

- Dashboard with 30 jobs renders in under 2 seconds on a 4G mobile connection (95th percentile)
- Job margin recalculation on materials/labor/invoice change completes in under 300ms (UI feedback)
- QBO invoice import (up to 30 invoices) completes in under 10 seconds from user-triggered refresh
- Mobile materials entry: the recents list and job selector load in under 1.5 seconds on a 4G connection
- API routes respond in under 500ms for 95th percentile under normal load (up to 100 concurrent users)

### Security

- All data in transit encrypted via TLS 1.2+ (HTTPS enforced, HSTS headers)
- Passwords hashed with bcrypt at cost factor 12+; plaintext passwords never stored or logged
- QBO OAuth refresh tokens encrypted at rest using AES-256; never exposed in client-side code or logs
- Session tokens stored in HTTP-only, Secure, SameSite=Strict cookies; CSRF token required for all state-changing API routes
- Database queries parameterized throughout; no string interpolation in SQL
- Multi-tenant row-level isolation enforced on all database queries via `account_id` scoping
- Stripe customer ID and subscription status only — no card data stored in JobLens database (PCI scope minimization via Stripe Checkout)
- Dependency scanning: npm audit run in CI; critical/high severity vulnerabilities block deployment

### Scalability

- Architecture supports 10× user growth (0 to 5,000 active accounts) without schema changes or re-architecture — achieved via horizontal scaling of stateless API layer and PostgreSQL connection pooling
- Database schema designed with indexes on `account_id`, `job_date`, and `job_type` for efficient dashboard queries at scale
- QBO token refresh is per-account and does not create shared locking; concurrent account operations are independent

### Reliability

- 99.5% uptime target (Railway/Render SLA-backed)
- Database backups: daily automated backups with 30-day retention
- QBO sync failures are non-blocking: if QBO import fails, the user can always enter invoice amounts manually; failure is surfaced as a dismissible warning, not a broken state
- Stripe webhook processing: idempotency keys prevent duplicate subscription state changes from webhook retries
- Error logging: all server errors logged with request context (excluding PII) to enable debugging without exposing user data

### Integration

- QuickBooks Online: API v3 (current stable); handle Intuit rate limits (500 req/min) with exponential backoff; handle QBO company with 0 invoices gracefully (empty state, not error)
- Stripe: Billing API + Webhooks; test mode in development, live mode in production; webhook signature verification on all incoming events
- Email (transactional): password reset and subscription confirmation only in MVP; delivery within 60 seconds of trigger event
- PWA: meets Google's Lighthouse PWA criteria (installable, works offline for cached views, responsive); service worker caches job list and dashboard for offline read access (write operations require connectivity)

---
