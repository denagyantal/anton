---
stepsCompleted: ["step-01-init.md", "step-02-discovery.md", "step-02b-vision.md", "step-02c-executive-summary.md", "step-03-success.md", "step-04-journeys.md", "step-05-domain.md", "step-06-innovation.md", "step-07-project-type.md", "step-08-scoping.md", "step-09-functional.md", "step-10-nonfunctional.md", "step-11-polish.md", "step-12-complete.md"]
inputDocuments:
  - ideas/shortlisted/pool-service-management.md
  - _bmad-output/planning-artifacts/brief-pool-service-management.md
workflowType: 'prd'
date: '2026-04-08'
author: Root
project: pool-service-management
classification:
  projectType: saas_b2b_mobile_hybrid
  domain: field_service_management_vertical
  complexity: medium
  projectContext: greenfield
---

# Product Requirements Document — PoolPulse

**Author:** Root
**Date:** 2026-04-08
**Project:** Pool Service Management (PoolPulse)

---

## Executive Summary

PoolPulse is a mobile-first, offline-capable pool service management platform built for small pool service operators (1–5 trucks, 50–300 residential pools) who are being priced out by Skimmer's per-pool pricing model. Skimmer doubled its per-pool price in 2024 ($1→$2/pool/month), triggering a documented community revolt and an active exodus of operators. PoolPulse captures this opening with a single flat-rate plan: $49/month, all features, unlimited pools and technicians.

The product replaces both the pricing trap (Skimmer's growth penalty) and the workflow gap (generic FSM tools with zero water chemistry tracking). PoolPulse is the only affordable, full-featured, offline-first pool service management platform: route optimization, integrated water chemistry logging with LSI calculation, automated customer chemistry reports, recurring billing, and compliance-grade chemical log exports — all at a price that stays flat as operators grow.

**Target market:** 40,000–78,800 US pool cleaning businesses; 64% already use pool-specific software, validating a "better software at a better price" pitch over a "you need software" pitch.

**Revenue target:** $29,400 MRR (500 customers × $49) by Month 6; $73,500 MRR (1,500 customers) by Month 12.

### What Makes This Special

**Differentiation:** Pool Brain has the right features but costs 3–7x more ($175–$480/month for a 2-tech shop). Skimmer has the right price tier (Getting Started) but strips core features and still charges per-pool. No competitor offers full-features + offline + flat-rate at $49/month. PoolPulse fills exactly this gap.

**Core insight:** Pricing that scales with pool count creates a perverse growth disincentive — operators pay more every time they win a customer. PoolPulse's flat-rate model turns software cost from a growth penalty into a growth accelerator.

**The switching moment:** Skimmer's 2024 price doubling without grandfathering created an active, time-limited migration event. The 1,000-member "Pool Service Misfits" Facebook group (formed by operators blocked from Skimmer's official community for complaining) is a pre-organized acquisition channel.

## Project Classification

- **Project Type:** SaaS B2B + Mobile App (hybrid — mobile-first field app with web owner dashboard)
- **Domain:** Vertical Field Service Management (pool industry)
- **Complexity:** Medium — payment processing, offline-first architecture, multi-tech coordination, compliance-grade logging, QuickBooks 2-way sync
- **Project Context:** Greenfield — new product targeting established market with documented switching demand

---

## Success Criteria

### User Success

**Primary metric — admin time reduction:**
Operators who complete the onboarding and use chemistry logging report ≥50% reduction in weekly administrative time (from documented ~7.5 hours/week to <4 hours/week).

**Chemistry workflow adoption:**
- Chemistry log completion rate ≥90% of route stops within 60 days of signup
- Chemistry log entry time ≤60 seconds per pool stop (measured from stop arrival to completion tap)

**Route efficiency:**
- Operators using GPS route optimization report ≥20% reduction in daily drive time vs. their prior process
- Time from signup to first completed route ≤2 hours (including customer import)

**Customer experience:**
- Customer chemistry report delivery rate ≥95% of completed visits that have SMS/email configured
- Operators who enable automated reports retain customers at materially higher rates (hypothesis: 15%+ retention improvement — track cohort data)

**Compliance readiness:**
- 100% of operators using chemistry logging can produce a county-compliant chemical log export on demand, without additional data entry
- No operator using PoolPulse has a compliance failure attributable to missing chemical records

### Business Success

**Month 3 (post-AppSumo launch):**
- 200 paying customers (combined AppSumo LTD + monthly subscribers)
- ≥30 published Capterra reviews at 4.5+ average
- Monthly churn <6%
- NPS ≥45

**Month 6:**
- 500 paying customers
- $24,500 MRR (500 × $49 blended)
- Monthly churn <4%
- NPS ≥55
- ≥75 Capterra reviews at 4.6+ average

**Month 12:**
- 1,500 paying customers
- $73,500 MRR
- Monthly churn <3%
- NPS ≥65
- ≥150 Capterra reviews
- AppSumo LTD buyers offered paid upgrade path; ≥25% conversion to monthly subscription

**Strategic threshold:** $50K MRR = bootstrap sustainability for 2-person founding team.

### Technical Success

- App stability: zero crashes during route execution (the documented failure mode of Pool Brain and Skimmer Android)
- Offline reliability: 100% of chemistry logs, route completions, and photos captured offline are successfully synced within 5 minutes of connectivity restoration
- Data migration: 95% of Skimmer CSV imports succeed without manual correction
- Payment success rate: ≥99% of Stripe transactions complete without error
- QuickBooks 2-way sync: <1% reconciliation discrepancy rate at month-end

### Measurable Outcomes

| Outcome | Measurement | Target | Measurement Method |
|---|---|---|---|
| Admin time saved | Hours/week before vs. after | 50% reduction | Onboarding survey + 60-day follow-up |
| Chemistry log rate | % stops with chemistry logged | ≥90% | In-app analytics |
| Route time reduction | Drive minutes per route | ≥20% reduction | GPS tracking delta |
| Trial conversion | Trial → paid % | ≥35% | Stripe vs. trial signups |
| Monthly churn | Churned MRR / beginning MRR | <4% at Month 6 | Stripe MRR analytics |
| NPS | In-app survey at Day 30 | ≥55 at Month 6 | In-app NPS prompt |
| AppSumo review velocity | Reviews/month post-launch | ≥10/month for first 3 months | AppSumo dashboard |

---

## Product Scope

### MVP — Minimum Viable Product (8–12 Week Build)

The MVP must allow an operator to run their entire business from PoolPulse on day one, covering the three core switching triggers: flat-rate pricing, offline-first mobile, and water chemistry.

**Core capabilities:**
1. Daily route management with GPS ordering and drag-and-drop resequencing
2. Water chemistry logging (offline-first) with LSI calculation and compliance export
3. Automated customer chemistry reports via SMS/email after each visit
4. Equipment tracking per pool with maintenance alerts
5. Recurring billing and Stripe-powered payment processing
6. Seasonal billing freeze/hold without cancellation
7. Customer and pool record management
8. Basic owner dashboard (route status, revenue, chemical alerts, overdue invoices)
9. QuickBooks Online 2-way sync
10. Skimmer CSV data import

### Growth Features (Post-MVP, Months 4–12)

- Customer self-service portal (pool owners log in to view service history, chemistry trends, invoices)
- LaMotte/Taylor Bluetooth test device integration (eliminate manual entry for electronic testers)
- Technician performance analytics (chemistry completion rates, on-time arrival)
- Seasonal route management (winter storage checklists, spring reopening workflows)
- Automated equipment service reminders (age/date triggered)
- In-app messaging between owner and field techs

### Vision (Year 2–3)

- Chemical supply ordering integration (operators order through PoolPulse; distributor partnership revenue)
- Insurance certification integration (compliance records reduce operator liability premiums)
- Pool owner consumer app (live chemical readings, service alerts, equipment health)
- Adjacent market expansion: irrigation service management
- Equipment marketplace (certified replacement parts, manufacturer warranties)
- Multi-location / franchise management tier

---

## User Journeys

### Journey 1 — Marcus, The Solo Operator (Primary Success Path)

**Background:** Marcus, 115 pools, Central Florida, 6 years solo. Currently on Skimmer Getting Started at $115/month — just received notice it's going to $230/month. Furious. No offline mode. Logs chemistry on paper clipboard, transfers to spreadsheet Friday nights (3 hours/week). Invoice manually each month.

**Trigger:** Sees post in Pool & Spa Forum: "Anyone else get Skimmer's price increase notice?" — 47 replies, multiple people mention PoolPulse.

**Discovery → Trial (Day 0–1):**
- Googles "Skimmer alternative flat rate" → PoolPulse landing page
- Signs up for 14-day free trial, no credit card required
- Imports customer CSV from Skimmer in 10 minutes (guided import wizard)
- Sets up his 115 pools with volume and chemical targets (bulk import)

**First Route Day (Day 1–2):**
- Opens PoolPulse mobile app at 6:00 AM
- Route auto-sorted by GPS proximity from his starting location
- Arrives at Pool #1: logs pH 7.4, Chlorine 3.2, Alkalinity 90, CYA 45
- App calculates LSI, shows green (in range), suggests chlorine dose for 15,000-gallon pool
- Taps "Complete" — works offline, queues locally
- Once phone catches signal: customer gets auto-text "Marcus completed your pool service today. pH: 7.4 ✓ Chlorine: 3.2 ✓ [Photo] Full report: [link]"
- Marcus did nothing extra for this

**Aha! Moment (Day 3):**
- After second day of routes, opens dashboard
- Sees compliance log auto-generated for all visits
- Realizes he never has to do Friday-night spreadsheet entry again
- Downloads the PDF compliance export — it's exactly what county requires

**Convert (Day 14):**
- Receives trial-end prompt
- Subscribes at $49/month ($166/month savings vs. upcoming Skimmer price)
- No contract, no upsell walls

**Advocate (Month 2):**
- Posts in Pool & Spa Forum: "Switched from Skimmer 3 weeks ago. PoolPulse is $49 flat, works offline, auto-texts customers after every visit. No per-pool nonsense."

**Journey reveals:** Route optimization (GPS order), offline chemistry logging, automated customer reports, compliance export, Skimmer CSV import, simple pricing display, forum-friendly messaging.

---

### Journey 2 — Diana, The Growing Operator (Multi-Tech Coordination)

**Background:** Diana, 240 pools, Dallas suburbs, 2-truck operation. On Skimmer Scaling Up paying $480/month. Tech uses Android — app crashes mid-route. Diana manages office. No drag-and-drop to reassign stops when tech calls in sick. QuickBooks sync only goes one way; Friday night reconciliation takes 2 hours. 40 seasonal customers want billing paused November–March; manual cancel/reactivate nightmare.

**Trigger:** Tech calls in sick on Monday with 140 stops scheduled. Diana opens Skimmer on her phone to reassign — there's no drag-and-drop. She manually rebuilds both route lists. Loses 45 minutes. Finds PoolPulse in a Facebook group comment that same afternoon.

**Onboarding (Day 0–3):**
- Signs up, imports 240 customers and 2 tech profiles
- Assigns pools to Tech Route A and Tech Route B
- Connects QuickBooks Online in settings (2-way sync)

**First Crisis Handled (Day 4 — tech out sick):**
- Opens PoolPulse dashboard
- Drag-and-drop: moves 35 highest-priority stops from Tech A's route to her own
- Remaining Tech A stops flagged as "not serviced today" with one tap
- Affected customers get automated delay notification
- No frantic calls, no manual list rebuilding

**End of Month (Day 30):**
- Billing runs automatically for all 240 customers
- 40 seasonal customers' billing is frozen via one-tap hold (not cancelled — will resume in March)
- QuickBooks shows all invoices already synced — Friday reconciliation takes 10 minutes instead of 2 hours

**Advocate (Month 2):**
- Posts in a Dallas pool pros Facebook group: "Switched from Skimmer. $79/month for 2 techs vs. $480/month — and it has drag-and-drop scheduling and 2-way QuickBooks."

**Journey reveals:** Multi-tech route assignment, drag-and-drop resequencing, seasonal billing freeze, 2-way QuickBooks sync, owner dashboard for multi-route visibility, automated customer delay notifications.

---

### Journey 3 — Field Technician (Secondary User — Mobile App Experience)

**Background:** Jesse, Diana's technician. Android user. Has used Pool Brain (crashed every 30 seconds per his report), Skimmer (crashes on his Galaxy S22), and PoolOfficeManager (also crashes). Deeply skeptical of pool service apps.

**First Day on PoolPulse:**
- Receives app download link from Diana
- Opens route at 6:30 AM: 140 stops, GPS-ordered
- Pool #1: chemistry form loads instantly — no spinner, no loading screen
- Logs readings in 45 seconds using the pre-filled pool volume and last-visit values as reference
- Takes before/after photo with one tap (camera opens directly from job screen)
- Marks complete — offline
- After 20 pools: signal returns — all 20 logs sync silently in background, no interruption

**What Jesse notices:**
- App hasn't crashed once by end of day
- Chemistry log takes 45 seconds vs. 3 minutes on paper + transfer
- Customer gets auto-report — Diana stops asking him to remember to text people

**Two weeks in:**
- Jesse mentions PoolPulse unprompted to a tech he knows at another company

**Journey reveals:** Fast load times, offline-first stability, one-tap photo capture, minimal data entry friction, background sync without interruption, never crashing.

---

### Journey 4 — Carlos, The Scaling Operator (Compliance-Focused)

**Background:** Carlos, 380 pools, Phoenix metro, 4 trucks, 3 full-time techs, office coordinator. Revenue $550K/year. Maricopa County requires licensed pool operators to maintain chemical records per visit. Carlos currently uses Skimmer for routing but keeps chemical records in a Google Sheet. A county inspector asked about his records last month — it took him 2 hours to compile the printout from the Sheet.

**Trigger:** Reads that Skimmer is moving all operators to per-pool pricing. His bill would go from $380/month to $760/month. Simultaneously, county notifies operators that 2027 will require digitally-stored chemical records. Carlos needs one platform that handles both.

**Evaluation (Week 1):**
- Signs up for PoolPulse trial
- Creates pool records for all 380 pools including pool volumes (required for dosage calculation)
- Runs first day of routes with all 4 techs

**Compliance Feature Discovery (Week 1):**
- After day 1: generates a compliance log export for all 380 pools, date-filtered
- PDF is clean, per-pool, timestamped, with technician ID — exactly what county requires
- Sends it to county inspector proactively — inspector confirms it meets the 2027 digital record requirement

**Month 2:**
- Equipment tracking: creates equipment records for all 400+ pieces across 380 pools
- Sets maintenance alerts for 12 pumps approaching service windows
- First equipment alert fires — tech proactively services pump instead of waiting for failure
- Upsells pump repair to customer: $185 service call vs. $850 emergency replacement

**Journey reveals:** Compliance-grade PDF export with filtering, per-pool equipment records, maintenance date alerts, multi-tech assignment with individual tech IDs on logs, proactive upsell workflow triggered by equipment data.

---

### Journey 5 — Pool Owner (Automated Report Recipient)

**Background:** Sarah, residential pool owner, Houston. Her pool service company switched to PoolPulse. She had no visibility into what happened at her pool each week — just hoped chemicals were right.

**First PoolPulse-Powered Service Visit:**
- Pool tech completes service, marks route stop complete
- Sarah receives SMS 3 minutes later: "Hi Sarah, Alex completed your pool service today. pH: 7.4 ✓ Free Chlorine: 3.1 ✓ Alkalinity: 100 ✓ [Photo]. Full report: [link]"
- She taps the link — sees before/after photos, all readings with green/yellow/red indicators, tech's service notes ("added 2 lbs of shock, cleaned filter basket")
- No login required

**Month 3:**
- Pool turns green after an unusual heavy rain
- Sarah refers to last 3 service reports to check trending — alkalinity was already dropping
- Calls her service company with data: "My last three reports show alkalinity trending down. Can we check it this week?"
- Her service company (PoolPulse operator) can see the same trend — schedules a mid-week check

**Journey reveals:** SMS/email delivery of branded reports, non-authenticated report link (no login), photo attachment, before/after chemistry readings with visual status indicators, service notes, historical access to previous reports.

---

### Journey Requirements Summary

| Journey | Capabilities Revealed |
|---|---|
| Marcus (Solo) | GPS route order, offline chemistry log, auto customer report, compliance export, Skimmer import, flat-rate pricing display |
| Diana (Multi-Tech) | Multi-tech route assignment, drag-and-drop resequence, seasonal billing freeze, 2-way QuickBooks, delay notifications, owner dashboard |
| Jesse (Technician) | App stability/offline-first, fast chemistry log UI, one-tap photo, background sync, minimal friction |
| Carlos (Compliance) | County-compliant PDF export, equipment records + alerts, multi-tech with individual IDs, upsell trigger from equipment data |
| Sarah (Pool Owner) | SMS/email automated report, non-authenticated link, visual chemistry status, photo attachment, historical report access |

---

## Domain-Specific Requirements

### Compliance & Regulatory

**Water chemistry record-keeping:**
- Many US counties (documented: Maricopa AZ, Palm Beach FL, Harris TX) require licensed pool operators to maintain per-visit chemical records including date, technician, pool ID, and chemical readings
- Records must be producible on demand for county inspection
- PoolPulse chemistry logs must be structured as compliance-grade records: timestamped, tech-attributed, non-editable after 48 hours, exportable as PDF
- Chemical log PDF export must include: operator business name, technician name, pool address, visit date/time, all chemical readings, dosage applied, and tech signature (typed name sufficient for compliance)

**Payment processing compliance:**
- Stripe integration must comply with PCI-DSS SAQ-A (Stripe handles card data; PoolPulse never stores raw card numbers)
- ACH payment authorization must follow NACHA guidelines
- Invoice data must be retained for 7 years per standard accounting requirements

**Data retention:**
- Chemical logs: retained indefinitely (operators need multi-year records for compliance history)
- Customer PII: retained per operator subscription; full deletion within 30 days of subscription cancellation on operator request
- Payment records: 7-year retention per IRS requirements

### Technical Constraints

**Offline-first architecture:**
- The app must function fully without network connectivity for all field operations: viewing route, logging chemistry, completing stops, capturing photos, editing equipment notes
- Local storage must handle a full day's route (up to 150 stops, 150 chemistry logs, 150+ photos) without performance degradation
- Sync must be conflict-aware: if owner edits a customer record while tech is on a route stop for that customer, the most recent edit wins with no silent data loss
- Sync must complete within 5 minutes of connectivity restoration for all queued records

**Mobile platform requirements:**
- iOS 16+ (primary field platform)
- Android 12+ (must match iOS feature parity — documented failure mode of competitors)
- React Native shared codebase (single team, two platforms)
- App size must not exceed 50MB (field devices often have limited storage)
- No background location tracking without explicit user permission

**QuickBooks integration:**
- QuickBooks Online API (not Desktop)
- 2-way sync: customers, invoices, and payments
- Sync must be idempotent (running sync twice produces no duplicate records)
- Sync errors must surface as actionable notifications (not silent failures)

### Integration Requirements

| Integration | Purpose | Direction | Priority |
|---|---|---|---|
| Stripe | Payment processing, subscription billing | API call from PoolPulse | MVP |
| QuickBooks Online | Accounting sync | 2-way | MVP |
| Twilio (or equivalent) | SMS delivery for customer reports | Outbound | MVP |
| SendGrid (or equivalent) | Email delivery for customer reports | Outbound | MVP |
| Google Maps / Mapbox | GPS route optimization, turn-by-turn | API call | MVP |
| Apple MapKit | iOS navigation handoff | Native | MVP |
| LaMotte/Taylor BLE | Electronic tester integration | BLE from mobile | Phase 2 |
| AppSumo | LTD billing and redemption | Webhook inbound | Pre-launch |

### Risk Mitigations

**Data portability (avoiding Skimmer's "data hostage" pattern):**
- Operators must be able to export all their data (customers, pools, chemical logs, equipment records, invoices) as CSV/PDF at any time without contacting support
- Export must work even on the free trial and after cancellation for 30 days

**Seasonal business continuity:**
- Billing freeze must not interrupt active data — operators in freeze period can still log routes and chemistry (for winter maintenance calls) without being charged for active use

**App stability (competitive failure mode):**
- Zero-crash standard for route execution flow: route view → stop detail → chemistry log → photo capture → complete. This is the critical path.
- Automated crash reporting (Sentry or equivalent) with P0 SLA for any crash in the route execution critical path

---

## Innovation & Novel Patterns

### Detected Innovation Areas

**1. Flat-rate pricing as a moat:**
The standard SaaS model for field service management is per-user or per-unit (per-pool, per-tech) pricing. PoolPulse inverts this: unlimited pools, unlimited techs, flat rate. This is not just a marketing decision — it's a structural differentiator that competitors cannot easily copy without rebuilding their revenue model. Operators who have 100 pools today and want to grow to 300 pools are actively choosing PoolPulse over alternatives because the software bill doesn't grow with them.

**2. Offline-first as a technical requirement (not a premium add-on):**
Every competitor either lacks offline mode (Skimmer Getting Started, all generic FSM tools) or charges a premium for it (Pool Brain). Building offline-first as a baseline architecture — not a feature toggle — means the app works the same way in a rural dead zone or a high-signal suburb. This is technically harder but competitively impossible to retrofit.

**3. Automated customer chemistry reports as an operator upsell tool:**
No competitor (Skimmer, Pool Brain, Pool Office Manager) auto-sends a branded chemistry report to the end customer after each visit. PoolPulse makes this a default behavior. For the operator, it transforms a compliance task (logging chemistry) into a professional differentiator (customers see real-time service data). This drives operator retention because their customers become accustomed to receiving the reports.

### Market Context & Competitive Landscape

- Skimmer ($74M Series C, October 2024) is moving upmarket — this creates the structural gap PoolPulse fills
- Pool Brain (full features, offline, 2-way sync) occupies the premium tier but at 3–7x the price ($175–$480/month for 2-tech operations)
- PoolDial launched March 28, 2026 with AI answering at $2/pool/month — validates per-pool pricing model innovation but at same price tier as Skimmer
- AppSumo has never had a pool service software launch — PoolPulse has first-mover advantage in this channel

### Validation Approach

- **Pricing model validation:** AppSumo LTD launch provides a fast read on willingness-to-pay and switching intent. $89 LTD = implied $1,068 annual value. If 200 operators buy, demand is validated.
- **Chemistry report validation:** Track delivery rate and whether operators mention it as a reason for signing up / recommending PoolPulse.
- **Offline reliability validation:** Track sync success rate in production. If >1% of sessions fail to sync, investigate and fix before scaling acquisition.

### Risk Mitigation

- If flat-rate model creates unsustainable unit economics at scale: introduce a team plan ($79/month for unlimited techs) that captures incremental value from larger operators while keeping the solo/small-team plan at $49
- If offline-first architecture creates unreasonable complexity: use a proven offline-first framework (WatermelonDB + React Native, or PouchDB) rather than building from scratch

---

## SaaS B2B + Mobile Specific Requirements

### Project-Type Overview

PoolPulse is a vertical SaaS product with two primary interfaces:
1. **Mobile app** (React Native, iOS + Android) — the primary field interface for techs and solo operators
2. **Web dashboard** (browser-based) — the owner/admin interface for routing, billing, reporting, and account management

Multi-tenancy is implicit: each operator account is fully isolated. No cross-tenant data sharing. All data — customers, pools, chemical logs, equipment, invoices — is scoped to the operator account.

### Technical Architecture Considerations

**Authentication:**
- Email + password with magic link option (for field techs who forget passwords mid-route)
- Two roles: Owner (full access) and Technician (route + chemistry only, no billing/customer edit)
- No SSO required for MVP (target market is small businesses)

**Multi-tenancy:**
- Row-level tenant isolation (operator_id on all tables)
- No shared schemas — each operator's data is logically isolated
- Stripe customer ID mapped 1:1 to operator account

**Mobile architecture:**
- React Native with offline-first local database (WatermelonDB recommended — built for React Native offline-first)
- Local → remote sync on connectivity using queue-based architecture
- Optimistic UI: all local writes immediately reflected in UI; sync failure surfaces as background alert
- Photos stored locally then synced to cloud storage (S3/Cloudflare R2)

**Tenant roles and permissions:**

| Capability | Owner | Technician |
|---|---|---|
| View assigned route | ✅ | ✅ |
| Log chemistry | ✅ | ✅ |
| Complete route stops | ✅ | ✅ |
| Capture photos | ✅ | ✅ |
| View all routes (dashboard) | ✅ | ❌ |
| Edit customer records | ✅ | ❌ |
| Manage billing | ✅ | ❌ |
| Export compliance logs | ✅ | ❌ |
| View invoices | ✅ | ❌ |
| Manage tech accounts | ✅ | ❌ |

**Implementation Considerations:**

- Target 8–12 week MVP timeline with a 2-person founding team (1 full-stack, 1 mobile/React Native)
- React Native bridges mobile and web requirements with shared business logic
- Stripe Billing handles subscription management, recurring invoices, and payment capture — do not build a custom billing engine
- Use a managed database (Supabase or PlanetScale) to reduce ops overhead
- SMS via Twilio, email via SendGrid — standard integrations with predictable cost ($0.0075/SMS at 100K SMS/month = $750/month at scale)

---

## Project Scoping & Phased Development

### MVP Strategy & Philosophy

**MVP Approach:** Revenue MVP — the product must generate real revenue from real customers before Month 3. The AppSumo LTD launch is the MVP validation event. If 200 operators buy a lifetime deal, the MVP is validated. If fewer than 100 buy, investigate the gap between brief and reality before scaling.

**MVP Resource Requirements:** 2-person founding team (or 1 founder + 1 contractor). 8–12 weeks build time. $15,000–$25,000 in development costs if contracting React Native.

### MVP Feature Set (Phase 1)

**Core User Journeys Supported:**
- Marcus (Solo Operator): complete day-of-route, chemistry logging, customer report, compliance export
- Diana (Multi-Tech): multi-tech assignment, drag-and-drop resequencing, seasonal billing freeze
- Jesse (Technician): offline app, fast chemistry log, photo capture, background sync

**Must-Have Capabilities:**

| # | Capability | Switching Trigger |
|---|---|---|
| 1 | GPS-ordered route optimization | Replaces manual daily routing |
| 2 | Drag-and-drop stop resequencing | Replaces Skimmer's lack of reordering |
| 3 | Multi-tech route assignment | Supports 2+ truck operations |
| 4 | Offline chemistry logging (pH, Cl, Alk, CYA, Ca, TDS) | Replaces paper clipboard + spreadsheet |
| 5 | LSI calculation + dosage recommendation | Adds value beyond paper |
| 6 | Compliance-grade PDF export | Regulatory compliance trigger |
| 7 | Automated customer SMS/email chemistry report | Professional differentiator |
| 8 | Equipment records + maintenance alerts | Upsell trigger |
| 9 | Recurring billing + Stripe payment processing | Replaces manual invoicing |
| 10 | Seasonal billing freeze/hold | Northern market trigger |
| 11 | Customer + pool record management | Core CRM |
| 12 | Owner dashboard (route, revenue, alerts, invoices) | Owner visibility |
| 13 | QuickBooks Online 2-way sync | Replaces Skimmer 1-way sync |
| 14 | Skimmer CSV data import | Zero-friction switching |

### Post-MVP Features

**Phase 2 (Months 4–12):**
- Customer self-service portal (pool owner login)
- LaMotte/Taylor Bluetooth tester integration
- Technician performance analytics
- Seasonal route workflows (winter storage, spring reopening checklists)
- Automated equipment service reminders
- In-app owner-to-tech messaging

**Phase 3 (Year 2+):**
- Chemical supply ordering (Poolcorp/SCP integration)
- Insurance certification integration
- Pool owner consumer app
- Irrigation service management expansion
- Multi-location/franchise management
- Equipment marketplace

### Risk Mitigation Strategy

**Technical Risks:**
- Offline-first sync complexity → Use WatermelonDB (production-proven in React Native offline apps); don't build custom sync
- QuickBooks 2-way sync edge cases → Scope to customers + invoices + payments only; defer items/products sync to Phase 2
- Android parity → Use a single React Native codebase; dedicate 20% of QA time to Android-specific testing

**Market Risks:**
- Skimmer reverses price increase → Unlikely given $74M Series C and upmarket signal; but monitor. PoolPulse's offline + chemistry differentiation remains even at same price.
- AppSumo launch underperforms → Cap downside by launching with a small LTD batch (200 codes). Don't oversell lifetime deals before validating product-market fit.

**Resource Risks:**
- If 1-person build: defer QuickBooks sync to Phase 2 (reduces scope without eliminating core switching trigger)
- If timeline slips: launch without equipment tracking (still viable for solo operators); add in Month 2 post-launch

---

## Functional Requirements

### Route Management

- FR1: Operators can create and manage a daily route list containing ordered pool stops for each technician
- FR2: Operators can assign route stops to specific technicians
- FR3: Operators can reorder route stops via drag-and-drop within a day's route
- FR4: The system can automatically order route stops by GPS proximity from the technician's starting location
- FR5: Technicians can view their assigned route stops for the day on their mobile device
- FR6: Operators can monitor real-time route completion progress across all technicians from the owner dashboard
- FR7: Operators can send automated delay notifications to affected customers when route stops are skipped or rescheduled

### Water Chemistry Logging

- FR8: Technicians can log per-stop water chemistry readings (pH, Free Chlorine, Combined Chlorine, Total Alkalinity, CYA, Calcium Hardness, TDS, Salt) for each pool visit
- FR9: The system calculates the Langelier Saturation Index (LSI) from logged readings and displays a status indicator (in-range, borderline, out-of-range)
- FR10: The system provides a chemical dosage recommendation based on pool volume, current readings, and target levels
- FR11: Technicians can log chemistry readings offline with automatic sync when connectivity is restored
- FR12: Operators can view a chemistry trend chart showing the last 12 readings per pool
- FR13: Operators can export a compliance-grade chemical log PDF, filterable by date range and technician, suitable for county inspection
- FR14: The system flags pools with out-of-range chemistry readings in the operator dashboard and alerts for follow-up

### Customer Management

- FR15: Operators can create and edit customer records (name, address, contact, access notes, gate codes)
- FR16: Operators can create one or more pool records per customer (volume, type, surface, dimensions)
- FR17: Operators can view the complete service history for each customer and pool
- FR18: Operators can attach before/after photos to individual route stop records

### Automated Customer Communication

- FR19: The system automatically generates a branded chemistry report after each completed route stop and delivers it via SMS or email to the customer
- FR20: The customer chemistry report includes all chemical readings, visual status indicators, before/after photos, service notes, and operator branding
- FR21: Customers can access their service report history via a non-authenticated link (no login required)
- FR22: Operators can configure the report delivery preference (SMS, email, both, or off) per customer

### Equipment Tracking

- FR23: Operators can create equipment records per pool (type, make, model, serial number, install date, warranty expiration)
- FR24: Operators can add service notes to equipment records
- FR25: Operators can set maintenance alert dates for equipment and receive in-app notifications when alerts are due
- FR26: Technicians can view the equipment list and notes for each pool stop during route execution

### Billing & Invoicing

- FR27: Operators can configure recurring billing schedules per customer (weekly, bi-weekly, monthly)
- FR28: The system automatically generates invoices according to each customer's billing schedule
- FR29: Operators can process customer payments via Stripe (credit card and ACH)
- FR30: Operators can put a customer's billing on a seasonal freeze/hold that suspends billing without cancelling the service relationship
- FR31: Operators can resume a frozen customer's billing with a single action
- FR32: Operators can view invoice status (draft, sent, viewed, paid, overdue) per customer
- FR33: Operators can send invoice reminders to customers with outstanding balances

### Integrations

- FR34: Operators can connect their QuickBooks Online account and sync customers bidirectionally
- FR35: The system syncs invoices from PoolPulse to QuickBooks Online and reflects payment status from QuickBooks back in PoolPulse
- FR36: Operators can import customer and pool data from a Skimmer-format CSV file
- FR37: The system processes Stripe subscription events (created, cancelled, payment failed) and updates account status accordingly

### Owner Dashboard & Reporting

- FR38: Operators can view today's route completion status across all technicians from the owner dashboard
- FR39: Operators can view a weekly revenue summary and outstanding invoice total
- FR40: Operators can view a chemical alert list showing pools with out-of-range readings in the past 7 days
- FR41: Operators can view all overdue invoices and customer contact information for follow-up

### Account & User Management

- FR42: Operators can create technician accounts with mobile-only access limited to route, chemistry, and equipment views
- FR43: Operators can deactivate technician accounts without deleting their historical records
- FR44: Operators can manage their subscription, billing, and plan from the account settings
- FR45: Operators and technicians can update their passwords and account details

### Data Portability

- FR46: Operators can export all their data (customers, pools, chemical logs, equipment records, invoices) as CSV at any time
- FR47: Operators can export compliance-ready PDF reports at any time, including during and after subscription cancellation (30-day post-cancellation window)

---

## Non-Functional Requirements

### Performance

**Mobile app (critical path — route execution):**
- Route list load time: <3 seconds from app open to route display with up to 150 stops
- Chemistry log form open: <1 second from stop tap to form ready
- Chemistry log submit: <500ms local write confirmation (offline or online)
- Photo capture and attach: <2 seconds from tap to photo confirmed attached
- Background sync: all queued records sync within 5 minutes of connectivity restoration

**Web dashboard:**
- Dashboard load time: <4 seconds on standard broadband (1,500 customers, 3 techs)
- Invoice generation: <5 seconds for up to 500 invoices in a billing cycle
- Compliance PDF export: <30 seconds for a date-filtered export of up to 2,000 stops

**Rationale:** Chemistry logging under 60 seconds per stop is a core user success metric. The form open and submit times directly control whether this target is achievable.

### Security

- All data encrypted at rest (AES-256) and in transit (TLS 1.2+)
- PoolPulse never stores raw payment card data — Stripe handles PCI compliance via tokenization (SAQ-A)
- ACH authorization via Stripe with explicit customer consent flow
- Technician accounts cannot access billing, customer PII beyond route-required fields (address, gate code), or other technicians' data
- Authentication tokens expire after 30 days of inactivity; refresh token rotation on every use
- Password reset via time-limited email link (60-minute expiry)
- All API endpoints require authenticated session; no unauthenticated access to operator data except non-authenticated customer report links (scoped to single visit)
- Customer report links use signed, non-guessable URLs with no expiry (operators may share links with customers indefinitely)

### Reliability & Offline

- Uptime target: 99.5% monthly for web dashboard and API (allows ~3.6 hours downtime/month)
- Offline-first guarantee: 100% of route execution critical path (view route, log chemistry, complete stop, capture photo) must function with zero network connectivity
- Sync success rate: ≥99.5% of offline-queued records successfully sync within 5 minutes of connectivity restoration
- Sync conflict resolution: last-write-wins with conflict log visible to owner (no silent data loss)
- Photo upload retry: failed photo uploads retry automatically for up to 24 hours before alerting operator

**Rationale:** App instability is the documented failure mode of all competitors (Pool Brain "crashes every 30 seconds," Skimmer Android "buggy," Pool Office Manager crashes). Reliability is a core competitive requirement, not an aspirational goal.

### Scalability

- Initial target: 500 concurrent active users (Month 6); system must support 5,000 concurrent users (Month 18) without architectural changes
- Database: must handle 10M+ chemistry log records within 24 months (1,500 customers × 200 pools/customer × 52 visits/year × 2 years = 31M records; model for this)
- Storage: photo storage at ~500KB/photo average; 1,500 customers × 200 pools × 52 visits × 2 photos = 156M photos annually at full scale — use S3/Cloudflare R2 with lifecycle policies
- Stripe webhook handling: idempotent processing to handle webhook replays without duplicate billing

### Integration Reliability

- QuickBooks sync: failed sync attempts must surface as actionable notifications (not silent failures) with human-readable error messages ("Customer 'Smith Pool' not found in QuickBooks — please re-link")
- SMS delivery: Twilio delivery failures must be logged and retried up to 3 times; undeliverable SMS after 3 attempts surfaces as an in-app alert to the operator
- Stripe payment failures: automated retry following Stripe's smart retry logic; operator notified after 3 failed attempts with one-tap "contact customer" link

---

## Appendix: Key Constraints & Decisions

**Technology choices (derived from requirements):**
- React Native: mandatory for offline-first iOS + Android parity at MVP budget
- WatermelonDB: recommended offline-first database for React Native (production-proven)
- Stripe Billing: handles subscription, recurring invoices, payment capture — no custom billing engine
- Supabase or PlanetScale: managed database reduces ops burden for 2-person team
- Twilio + SendGrid: standard SMS/email delivery with usage-based pricing

**Explicit out-of-scope for MVP** (documented to prevent scope creep):
- Bluetooth test device integration (hardware dependency)
- Customer self-service portal login (non-authenticated report links satisfy MVP)
- Chemical supply ordering
- Technician commission tracking
- Open API / webhooks
- AI-powered scheduling
- Multi-location / franchise management
- Equipment marketplace
- Native iPad / tablet-optimized UI

**Pricing tiers (non-negotiable for brand positioning):**
- No free tier. 14-day free trial, no credit card required.
- Monthly Solo: $49/month (unlimited pools, up to 3 techs)
- Monthly Team: $79/month (unlimited pools, unlimited techs)
- AppSumo LTD Tier 1: $89 one-time (up to 150 pools, 2 techs)
- AppSumo LTD Tier 2: $149 one-time (up to 400 pools, 5 techs)
- No annual discount (month-to-month strengthens the anti-Skimmer narrative)
- No feature gates within a plan tier (every feature at every paid tier)

---

*PRD completed: 2026-04-08 | Project: PoolPulse (Pool Service Management) | Workflow: BMAD PRD (automated)*
