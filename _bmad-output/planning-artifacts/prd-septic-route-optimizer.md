---
stepsCompleted: [step-01-init, step-02-discovery, step-02b-vision, step-02c-executive-summary, step-03-success, step-04-journeys, step-05-domain, step-06-innovation, step-07-project-type, step-08-scoping, step-09-functional, step-10-nonfunctional, step-11-polish, step-12-complete]
inputDocuments:
  - ideas/shortlisted/septic-route-optimizer.md
  - _bmad-output/planning-artifacts/product-brief-septic-route-optimizer.md
  - _bmad-output/planning-artifacts/research/market-septic-route-optimizer-research-2026-04-16.md
workflowType: prd
date: 2026-04-17
author: Root
idea: septic-route-optimizer
classification:
  projectType: saas_b2b
  domain: field_service_management
  complexity: medium
  projectContext: greenfield
---

# Product Requirements Document — Septic Route Optimizer

**Author:** Root
**Date:** 2026-04-17
**Status:** Ready for Architecture

---

## Executive Summary

Septic pumping companies — 7,000–10,000 US operators, 90%+ running 1–10 trucks — manage scheduling, routing, and compliance using spreadsheets, Google Maps, paper manifests, and phone calls. No purpose-built software accounts for the defining constraints of their work: tank size variability (250–5,000 gallons) driving pump-time variance of 200%+, fixed truck capacity requiring dump station diversions mid-route, and state/county regulations mandating a compliance manifest for every pumped tank.

**Septic Route Optimizer** is a mobile-first, offline-capable SaaS platform built exclusively for septic pumping operators. It solves the routing problem correctly: sequencing jobs around tank size (and thus pump time), truck capacity limits, and dump station locations; generating county-compliant service manifests from one driver tap; and fitting within a 1–5 truck operator's budget at $129/month with no customer caps and no annual contracts.

Market validation is established: a comparable solo-built tool reached $51K/month MRR with 340 customers at $150/month with zero marketing spend. Competitors (Tank Track, PumpDocket, ServiceCore) all leave the dump-station-aware routing gap open and price out small operators with caps or annual contracts.

**Target outcome:** $15K MRR (115 customers) within 12 months. Path: community-led growth in "Septic Tank Service Business Owners" Facebook group (8,000 members) and NAWT member forums, followed by a capped $299 Founder LTD at month 6, expanding to portable toilet rental and grease trap cleaning verticals by month 18.

### What Makes This Special

The core differentiator is **dump-station-aware route sequencing**: the only platform that calculates expected gallons collected per stop, models running truck fill level across the day's route, and inserts dump station visits before the driver encounters a full-truck emergency. All competitors display disposal sites on a map; none plan around them. This directly eliminates the #1 operational disruption (unplanned diversions that blow the afternoon schedule) and delivers measurable ROI on day one.

Secondary differentiators: tank-size-to-job-duration modeling making ETAs accurate instead of aspirational; one-tap compliance manifest generation matching the operator's county format; offline-first native mobile essential for rural routes; and transparent pricing with no customer caps.

## Project Classification

- **Project Type:** SaaS B2B — mobile + web, field service management vertical
- **Domain:** Field service management / liquid waste industry
- **Complexity:** Medium — compliance record formats vary by state/county; offline sync adds mobile complexity; route optimization requires constraint-aware algorithm, not generic TSP
- **Project Context:** Greenfield — no existing codebase

---

## Success Criteria

### User Success

- **Onboarding completion:** >80% of trial signups complete customer CSV import and generate their first optimized route within 45 minutes of signup
- **Driver adoption:** >90% of drivers open the mobile app on scheduled workdays within 60 days of operator signup
- **Compliance generation rate:** >95% of completed jobs produce a manifest automatically (driver taps "Complete Job"; manifest generated without additional steps)
- **Diversion reduction:** Operators self-report 50%+ reduction in unplanned mid-route truck-full diversions at 3-month check-in survey
- **Paperwork time reduction:** Operators self-report 75%+ reduction in manual compliance documentation time at 30-day check-in vs. onboarding baseline

**Activation signal:** An operator who has used the dump-station-aware route optimization feature AND compliance manifest generation for 30 consecutive working days is "activated." Activation is the primary predictor of 6-month retention.

### Business Success

| Period | MRR Target | Customers | Key Milestone |
|--------|-----------|-----------|---------------|
| Month 3 | $5,000 | 38 | 30+ post-trial conversions; NPS >40 |
| Month 6 | $10,000 | 77 | LTD launch ($299 × 200 units = $59,800 gross) |
| Month 12 | $15,000 | 115 | <5% monthly gross churn; 10+ Capterra reviews |
| Month 24 | $35,000 | 270 | Portable toilet module launched |

- **Monthly gross churn:** <5% sustained from month 3 onward
- **Net Revenue Retention:** >105% (fleet upgrades drive expansion)
- **Trial-to-paid conversion:** >35%
- **CAC via community channels:** <$200

### Technical Success

- Route optimization response time: optimized route returned in <3 seconds for a 20-job day (measured server-side)
- Offline sync reliability: zero data loss for job completions captured offline, confirmed on reconnect
- Mobile app crash rate: <0.1% of sessions (measured via crash reporting)
- Manifest PDF generation: <2 seconds per manifest (measured server-side)
- API uptime: 99.5% monthly (excludes planned maintenance windows)

### Measurable Outcomes (North Star)

**"Routes run through the optimizer per week"** — tracks whether operators use the core differentiating feature and is the strongest predictor of retention. Secondary: "Manifests generated per week per operator" (compliance lock-in signal).

---

## Product Scope

### MVP — Minimum Viable Product (Phase 1, Months 1–3)

**Goal:** Prove the dump-station routing + compliance manifest combination delivers day-one ROI for 1–5 truck operators.

| Feature | Why Essential |
|---------|--------------|
| Customer database (CSV import, search, tank size, GPS, service history) | Foundation for all other features |
| Dump-station-aware route optimizer | Primary differentiator; reason to choose over Tank Track/PumpDocket |
| One-tap compliance manifest generation (PDF, state-specific templates for top 15 states) | #2 pain point; compliance-driven adoption trigger |
| Native iOS + Android driver app, offline-first | Driver adoption is critical path; browser-only fails in rural |
| SMS customer notifications (appointment confirmed, truck en route) | Reduces no-shows; low build cost, high operator satisfaction |
| Basic web dashboard (schedule jobs, view routes, view manifests) | Owner/dispatcher needs visibility |

### Growth Features — Post-MVP (Phase 2, Months 4–9)

| Feature | Why Phase 2 |
|---------|-------------|
| Multi-truck dispatch board (real-time truck status, fill %, job progress) | Critical for Sandra persona (5-truck fleets); less critical for single-operator Mike |
| QuickBooks one-way sync (export completed jobs as invoices) | Required for fleet segment; owner-operators tolerate manual entry short-term |
| Recurring schedule & auto-reminders (per-customer interval, automated SMS/email) | Strong retention driver; generates inbound bookings operators would otherwise miss |
| County permit zone library (pre-built for top 20 states by permit zone complexity) | Differentiated from SepticMind positioning; Phase 2 after core routing proven |

### Vision — Future (Phase 3, Months 10–24+)

- Portable toilet rental module (unit inventory, delivery/pickup routing, event scheduling)
- Grease trap cleaning module (grease volume tracking, health department record formats)
- Automated compliance e-filing (where state APIs permit)
- Predictive service interval recommendations (ML on tank condition + pump history)
- Two-way QuickBooks sync
- Customer self-service scheduling portal
- Industry benchmarking: anonymized route efficiency across operator network

### Explicitly Out of Scope for MVP

| Feature | Reason Deferred |
|---------|----------------|
| County permit zone database (all 50 states) | Scope control; routing depth first |
| AI service interval prediction | Needs data; good default interval + manual override is MVP-sufficient |
| Multi-vertical support (portable toilets, grease traps) | Post-PMF expansion |
| Two-way QuickBooks sync | One-way export satisfies 80% of need at launch |
| Customer self-service scheduling | Operator-driven scheduling sufficient for MVP |
| Automated e-filing with county systems | Regulatory complexity; manual export + submit is MVP-appropriate |
| Real-time GPS hardware fleet tracking | Driver app location sharing provides sufficient visibility |
| AppSumo launch | Channel mismatch; NAWT forum LTD is stronger |

---

## User Journeys

### Journey 1: Mike — The Owner-Operator (1–2 Trucks), Core Success Path

Mike, 44, runs a 2-truck operation. He drives truck #1 and has one employee on truck #2. His current system: a Google Sheet, a laminated county permit zone map on his dash, and paper manifests he transcribes into QuickBooks on Sunday evenings.

**Discovery:** Mike sees a post in the "Septic Tank Service Business Owners" Facebook group — another owner writes "Cut my Sunday paperwork from 3 hours to 20 minutes." He clicks through, sees $129/month with no contracts and a 30-day free trial, and signs up without calling anyone.

**Onboarding (Day 1):** Mike uploads his customer list CSV. The app maps his 180 customers' addresses. He adds his 2 trucks and their gallon capacities. He enters his 3 local dump station locations. He sets his county permit zone from the pre-built state library. In 40 minutes, he has a working system.

**First Route (Day 2):** Mike enters tomorrow's 14 jobs. The optimizer sequences them in an order he hasn't tried before — routing him past a dump station mid-morning, because the two commercial properties he'd normally batch would fill the truck before he could reach his usual afternoon dump. He follows the route. No diversions. Finishes 45 minutes early.

**Aha Moment (Week 2):** At the end of Friday, Mike taps "Generate Weekly Report." 90 seconds later he has a ZIP of 28 manifests, pre-formatted for his county. He realizes he'd spent 12 hours a month on what just took 90 seconds.

**Month 3 Outcome:** Mike has enabled recurring intervals. The app sends customers SMS reminders 6 weeks before their 3-year mark. He captured 12 inbound bookings he'd have missed. He's told 4 people in the Facebook group about the product.

*Journey reveals requirements for:* customer database, CSV import, route optimizer with dump station awareness, compliance manifest generation, SMS notifications, recurring interval scheduling.

---

### Journey 2: Mike — Edge Case (Full Truck Mid-Route)

Mid-morning, Mike's second commercial job of the day takes 20% more gallons than estimated (the customer hadn't disclosed an expanded tank). The app's running fill indicator turns amber at 85% as Mike completes the job. The app pushes a notification: "Truck #1 approaching capacity — insert dump station before next job?" Mike taps "Yes." The app re-routes him to the nearest dump station and updates his afternoon ETA accordingly. His office (his wife) receives an auto-updated schedule in the dashboard. No frantic phone call. No mid-day crisis.

*Journey reveals requirements for:* real-time fill tracking, in-app capacity alerts, dynamic route re-sequencing, push notifications to driver, office dashboard auto-update.

---

### Journey 3: Sandra — Office Manager for 5-Truck Fleet

Sandra, 38, manages dispatch and invoicing for a family-owned operation with 5 trucks and ~400 customers. She uses WhatsApp for driver coordination, Google Calendar for scheduling, and a pile of paper manifests.

**Monday morning:** Sandra opens the dispatch board. She sees all 5 trucks on a map with their first job marked, current schedule, estimated fill level, and jobs remaining. Driver #3 marked a job complete at 9:15 AM; the manifest auto-generated. She exports the week's manifests to submit to the county on Friday.

**Key friction eliminated:** Drivers no longer call her to ask "am I on track?" — they see their own schedule. Sandra no longer re-enters job data into QuickBooks — the export happens with one click. County audit last month: she generated 6 months of manifests in under 3 minutes.

**Adoption trigger:** Owner attended NAWT conference; demo by another operator convinced him. Sandra evaluated the product in a 2-week trial; drove the purchase decision herself.

*Journey reveals requirements for:* multi-truck dispatch board, real-time job completion updates from drivers, manifest export/archive, QuickBooks sync, multi-user roles (owner vs. office manager vs. driver).

---

### Journey 4: Driver — Field Technician (Mobile-Only User)

Carlos, 29, drives truck #2. He's not technical. He needs the app to work simply.

**Morning:** Carlos opens the app. He sees 11 jobs listed in order with navigation addresses. He taps job #1, which opens turn-by-turn directions. At the customer's address, he records the tank condition ("normal, slight odor, roots at access panel"), notes the gallons pumped (estimated from tank size), and taps "Complete." The manifest is generated in the background. He moves to job #2.

**No cell service (rural route, jobs 7–9):** The app shows all 3 jobs queued offline. Carlos completes jobs 7, 8, and 9 with one-tap confirmations and photo captures. When he drives back into coverage at job 10, the app syncs all 3 completions and manifests in 8 seconds. No data lost.

**End of day:** Carlos has tapped "Complete" 11 times. Zero paperwork. Sandra has all 11 manifests.

*Journey reveals requirements for:* simplified driver mobile UI (3-tap max job completion), offline-first local job queue, photo capture, automatic sync on reconnect, GPS turn-by-turn navigation handoff.

---

### Journey Requirements Summary

| Journey | Primary Capabilities Required |
|---------|------------------------------|
| Mike — Success Path | Customer DB, CSV import, route optimizer, manifest generation, SMS, recurring intervals |
| Mike — Edge Case | Real-time fill tracking, capacity alerts, dynamic re-routing, push notifications |
| Sandra — Fleet Manager | Dispatch board, multi-truck visibility, QuickBooks sync, manifest archive/export, multi-user roles |
| Carlos — Driver | Offline-first mobile app, simplified job completion, photo capture, auto-sync |

---

## Domain-Specific Requirements

### Compliance & Regulatory

- **State manifest formats:** Service records for septic pumping are regulated at the state and often county level. The platform must support pre-built manifest templates for the top 15 US states by septic system density (Florida, Texas, North Carolina, Ohio, Pennsylvania, Michigan, New York, Virginia, Georgia, Indiana, Tennessee, Missouri, Wisconsin, Minnesota, Kentucky) with fields for: operator license number, truck ID, customer address, tank size, gallons removed, date/time of service, driver signature, disposal facility, and condition notes.
- **Manifest retention:** Manifests must be retained and retrievable for a minimum of 5 years (most states require 3 years; 5 years provides safe margin). Export must be possible for county audits.
- **License number storage:** Operator business license number and state certification number must be stored and auto-populated on every manifest.
- **Disposal facility logging:** Licensed disposal (dump) station name and address must be recorded for every dump event, not just job completions.

### Technical Constraints

- **Offline-first architecture:** Driver mobile app must function without network connectivity. Job list, customer data, dump station locations, and manifest templates must sync to device on login. Completed jobs and manifests must queue locally and sync atomically on reconnect.
- **Data residency:** All customer and compliance data stored in US-based cloud infrastructure only.
- **PDF generation:** Manifests must be generated as PDF documents (printable, signable, county-submittable without additional software).

### Integration Requirements

- **QuickBooks Online:** One-way export of completed job data (customer, service date, line items, amount) as QuickBooks invoices. Phase 2 feature; MVP exports CSV.
- **Google Maps / Apple Maps:** Turn-by-turn navigation handed off to native map app from driver mobile. Route optimization uses Google Maps Distance Matrix API for travel time estimation.
- **SMS gateway (Twilio or equivalent):** Automated SMS for appointment confirmation and truck en-route notifications.

### Risk Mitigations

- **State-specific manifest gaps:** Launch with top 15 states. Provide a configurable "custom template" mode for unsupported states at launch. Track requests for new states; add monthly.
- **Compliance record accuracy:** Manifests are legal documents. Require driver confirmation (tap "I confirm the above is accurate") before manifest is finalized. Store raw input data alongside generated PDF for audit purposes.
- **Dump station data accuracy:** Operators must manually enter/verify dump station locations. Do not rely on third-party databases (outdated and incomplete). Provide easy in-app dump station management.

---

## Innovation & Novel Patterns

### Detected Innovation Areas

**Capacity-Constrained Route Optimization** — Generic route optimizers (Google Maps, even most FSM tools) solve the Travelling Salesman Problem. Septic routing is a variant of the Vehicle Routing Problem with Capacity Constraints (CVRP): each stop consumes capacity from a finite tank, and the truck must visit a disposal facility when full. No competitor in the septic vertical has implemented true CVRP; they display disposal sites on a map and let drivers figure out when to divert.

**Domain-Specific Constraint Modeling** — Tank size directly determines pump time (approximately 1 gallon/minute for typical residential tanks). Route optimizers that treat all jobs as equal duration produce wildly inaccurate ETAs. Septic Route Optimizer models job duration from tank size, producing ETA accuracy that general FSM tools cannot match without operator-configured job durations.

### Market Context

A solo developer built a comparable tool to $51K/month MRR with zero marketing, validating that septic operators will pay for purpose-built software. All five existing competitors leave the dump-station-aware routing gap open. GetSkimmer (pool service) raised $84M proving that niche FSM verticals with routing + compliance needs are defensible and scalable businesses.

### Validation Approach

- **Week 1–2:** 5 operator interviews confirming dump-station diversions are a weekly disruption costing 30–60 minutes per occurrence
- **Month 1:** 10 beta operators using the route optimizer; track whether optimizer-generated routes differ materially from their manual sequencing
- **Month 2:** Survey: "Has the optimizer prevented a truck-full emergency mid-route?" — target >70% yes

### Risk Mitigation

- **CVRP implementation complexity:** Use a greedy nearest-neighbor heuristic with capacity constraint enforcement as v1; it outperforms manual scheduling significantly. Google OR-Tools or open-source CVRP libraries for v2 if needed.
- **Inaccurate tank size data:** Default job duration models are derived from estimated tank size. Allow operator to override per-job and per-customer. Accuracy improves as operators correct estimates over time.

---

## SaaS B2B Specific Requirements

### Multi-Tenancy Model

- Each septic company is an isolated tenant. No data is shared across tenant boundaries.
- Tenant identifier: company account. Subdomain routing (e.g., `mikesspeptic.septicoptimizer.com`) is not required for MVP; all tenants share a single web app domain with account-level data isolation.

### User Roles & Permissions

| Role | Capabilities |
|------|-------------|
| Owner/Admin | Full access: account settings, billing, user management, all trucks, all manifests, all customers |
| Office Manager | Schedule jobs, view all trucks, generate reports, manage customers; cannot manage billing or user accounts |
| Driver | Mobile app only: view assigned jobs, complete jobs, capture notes/photos; cannot access other drivers' routes or customer database |

- Multi-user support: up to 10 users per account at MVP (1 owner + multiple office managers + drivers)
- Driver accounts tied to a truck assignment; changing truck assignment updates the driver's visible job list

### Subscription & Billing

- $129/month, unlimited customers, unlimited jobs, unlimited manifests
- Month-to-month; no annual contract required
- 30-day free trial, no credit card required
- Payment processing via Stripe
- Seat-based pricing NOT used; flat rate per company simplifies the value proposition for <5 truck operators

### Onboarding Flow

- Self-serve signup: email + password → company name + state → trial starts immediately
- Guided setup wizard: (1) import customers from CSV, (2) add trucks + capacities, (3) add dump stations, (4) set county/state compliance template
- Target: operator generates first optimized route within 45 minutes of signup without contacting support

### Implementation Considerations

- **Tech stack guidance for architect:** React web + React Native mobile (shared component logic); Node.js or Python backend; PostgreSQL with row-level security for multi-tenancy; Redis for job queue; S3/equivalent for manifest PDF storage; Twilio for SMS
- **Mobile-first:** iOS and Android native apps required at launch; web app for office/dispatch use
- **Offline sync:** WatermelonDB or similar local-first database for React Native offline support

---

## Project Scoping & Phased Development

### MVP Strategy & Philosophy

**MVP Approach:** Problem-solving MVP — the minimum that eliminates the two most painful daily problems (unplanned full-truck diversions + manual compliance paperwork) for a 1–5 truck operator. Users don't need a dispatch board if they can see their own route and confirm jobs from their phone.

**Resource Requirements:** 2 engineers (1 full-stack, 1 mobile-focused) + 1 PM/founder for 8–10 weeks to launch MVP.

### MVP Feature Set (Phase 1)

**Core User Journeys Supported:**
- Mike (owner-operator) planning and running a daily route
- Carlos (driver) executing a route offline with job completions
- Basic manifest generation and export

**Must-Have Capabilities:**
- Customer database with CSV import
- Truck + dump station configuration
- Dump-station-aware route optimizer (CVRP-based sequencing)
- Native iOS + Android driver app with offline-first sync
- One-tap job completion + manifest generation
- Pre-built manifest templates (top 15 states)
- SMS notifications (appointment confirmed, truck en route)
- Basic web dashboard for job scheduling and manifest history

### Post-MVP Features

**Phase 2 (Months 4–9):**
- Multi-truck real-time dispatch board with fill-level indicators
- QuickBooks integration (one-way export)
- Recurring service intervals + automated customer reminder SMS
- County permit zone library (top 20 states)
- Dynamic mid-route re-sequencing on capacity events

**Phase 3 (Months 10–24+):**
- Portable toilet rental module
- Grease trap cleaning module
- Automated compliance e-filing (state APIs where available)
- Predictive service interval ML
- Two-way QuickBooks sync
- Customer self-service portal

### Risk Mitigation Strategy

**Technical Risks:** CVRP optimization complexity — mitigated by starting with greedy heuristic (provably better than manual scheduling; good enough for MVP). Offline sync correctness — mitigated by using proven local-first libraries (WatermelonDB) and atomic sync with conflict resolution based on timestamps.

**Market Risks:** Existing $51K/month tool may close the gap — mitigated by competing on price ($129 vs. $150) + no customer caps + no contracts, and by targeting the < 5 truck operator explicitly underserved by ServiceCore.

**Resource Risks:** 2-engineer team — mitigated by explicit scope boundaries (no permit zone database at MVP, no AI features, no second vertical). Ship lean; expand on revenue.

---

## Functional Requirements

### Customer & Tank Management

- FR1: Operators can import customers from a CSV file with automatic mapping of name, address, tank size, and last service date fields
- FR2: Operators can add, edit, and delete individual customer records including: name, address, GPS coordinates, tank size (gallons), access notes, last pump date, and service condition notes
- FR3: Operators can search and filter the customer list by name, address, last service date, and service zone
- FR4: Operators can view a customer's full service history (all past job dates, gallons, driver, condition notes, and manifest links)
- FR5: Operators can set a per-customer recurring service interval (1–5 years) that triggers automated reminders

### Truck & Dump Station Configuration

- FR6: Operators can add and configure trucks with name, license plate, tank capacity (gallons), and assigned driver
- FR7: Operators can add dump station locations with name, address, GPS coordinates, and operating hours notes
- FR8: Operators can assign a driver (user account) to a truck for a given workday
- FR9: Operators can update truck tank capacity; the route optimizer uses the updated value immediately

### Route Optimization

- FR10: Operators can create a daily job list by selecting customers from the database and assigning them to a truck
- FR11: Operators can run the dump-station-aware route optimizer on a truck's daily job list, receiving a sequenced route that inserts dump station visits before the truck's cumulative gallons would exceed capacity
- FR12: The route optimizer displays estimated gallons collected per stop, running fill level after each stop, and travel time between stops
- FR13: Operators can manually reorder jobs within an optimized route before dispatching to the driver
- FR14: Operators can add or remove jobs from an in-progress route; the optimizer re-sequences remaining jobs on demand
- FR15: The system calculates estimated job duration per stop based on tank size at the default rate of 1 gallon/minute, with operator-level override for residential vs. commercial default rates

### Compliance & Manifest Management

- FR16: Drivers can mark a job complete in one tap, triggering automatic generation of a PDF service manifest pre-populated with: operator name, license number, truck ID, customer name, address, tank size, gallons removed, service date/time, driver name, disposal facility (most recent dump station visited), and condition notes
- FR17: Drivers can add free-text condition notes and up to 5 photos per job before marking complete
- FR18: Operators can view, download, and share individual manifests as PDF files
- FR19: Operators can generate a bulk manifest export (ZIP of PDFs) filtered by date range and truck, for county submission
- FR20: Operators can select their state compliance template from a pre-built library (top 15 states at launch) that formats manifest fields to match county requirements
- FR21: Operators can configure a custom manifest template (field labels and order) for states not in the pre-built library
- FR22: Manifests are stored indefinitely and searchable by customer, date, driver, and truck

### Driver Mobile Experience

- FR23: Drivers can view their daily job list in optimized order on the mobile app with customer name, address, tank size, and estimated arrival time for each stop
- FR24: Drivers can tap any job to open turn-by-turn navigation via the device's native map app
- FR25: Drivers can complete a job (record gallons, add notes, capture photos, mark complete) in 3 taps or fewer when no complications exist
- FR26: The driver app functions fully offline: job list, customer details, manifest templates, and dump station locations are cached locally; completed jobs and generated manifests queue for sync
- FR27: The driver app syncs all queued completions and manifests automatically when network connectivity is restored, with no driver action required
- FR28: Drivers receive a push notification when the running truck fill level exceeds 80% of capacity, with a prompt to navigate to the nearest dump station
- FR29: Drivers can log a dump station visit (selecting from saved dump stations) to reset the running fill level tracker

### Customer SMS Notifications

- FR30: Operators can configure automated appointment confirmation SMS sent to customers when a job is scheduled (template configurable with operator name and scheduled date/window)
- FR31: Operators can trigger an "en route" SMS to a customer when the driver departs for their stop (manually triggered or auto-triggered when driver navigates to the job)
- FR32: Customers who have a recurring interval set receive an automated reminder SMS X weeks before their next service is due (X is configurable per operator, default 6 weeks)

### Fleet Monitoring (Phase 2)

- FR33: Office managers can view a real-time dispatch board showing all trucks with: current GPS location, current job, jobs completed vs. remaining today, and estimated truck fill percentage
- FR34: Office managers can view job completion events in real time as drivers tap "Complete" in the field
- FR35: Office managers can reassign a job from one truck/driver to another without disrupting the rest of the route

### Billing & Accounting Integration (Phase 2)

- FR36: Operators can export completed job records as a CSV containing customer name, service date, tank size, gallons, and a configurable service fee for import into QuickBooks or other accounting software
- FR37: Operators can connect a QuickBooks Online account and push completed job records as draft invoices (one-way sync)

### Account & Subscription Management

- FR38: Operators can invite team members (office managers, drivers) by email and assign them a role (office manager or driver)
- FR39: Operators can manage active subscriptions, update payment method, and view billing history via the account settings page
- FR40: Operators can activate or cancel a 30-day free trial and convert to paid subscription without contacting support
- FR41: Operators can configure company-level settings: business name, license number, state, default service rate, SMS sender name, and manifest header logo

---

## Non-Functional Requirements

### Performance

- Route optimization for a 20-job single-truck day returns a sequenced route in <3 seconds as measured by server-side timing at p95
- Mobile app job list loads (from local cache) in <1 second when offline
- Manifest PDF generation completes in <2 seconds per manifest as measured server-side
- Web dashboard initial load (logged-in state) completes in <3 seconds on a 10 Mbps connection as measured by Lighthouse

### Reliability

- API availability: 99.5% monthly uptime (excludes planned maintenance, which must be scheduled outside 6AM–8PM local operator time)
- Offline sync must be loss-free: zero job completions or manifests lost due to connectivity interruption, as validated by reconciliation on sync
- Manifest PDFs stored with 99.999% durability (cloud object storage with redundancy)

### Security

- All data encrypted in transit (TLS 1.2+) and at rest (AES-256 or cloud-equivalent)
- Passwords stored as bcrypt hashes (cost factor ≥12)
- Multi-tenant data isolation enforced at the database level via row-level security; no cross-tenant data access possible
- Driver accounts can only access their own assigned jobs and their own company's data
- Stripe handles all payment card data; no card numbers stored in application database (PCI scope minimized to SAQ A)
- Compliance manifests (legal documents) are immutable after driver confirmation; stored with audit trail (created timestamp, driver ID, confirmation timestamp)

### Scalability

- System supports 500 concurrent active users (operators + drivers) with <10% degradation in route optimization response time as measured by load testing before launch
- Database schema and tenant isolation approach supports 10,000 total tenant accounts without architectural changes
- Offline sync architecture handles fleets up to 50 trucks per account without requiring architectural revision

### Integration

- SMS delivery success rate >98% (Twilio SLA; retries on failure)
- Google Maps Distance Matrix API used for travel time estimation; graceful fallback to straight-line distance estimation if API is unavailable
- QuickBooks integration uses OAuth 2.0; access tokens stored encrypted; no QuickBooks credentials stored in application
- CSV import supports files up to 10,000 rows; import completes in <30 seconds

### Accessibility

- Web dashboard meets WCAG 2.1 Level AA for color contrast and keyboard navigation (operators include 40+ year olds who may have vision or motor accessibility needs)
- Mobile app supports iOS Dynamic Type (user-controlled font sizing) and Android font scale settings for drivers who use accessibility features

---

## Appendix: Competitive Positioning Summary

| Competitor | Price | Key Gap This Product Closes |
|-----------|-------|---------------------------|
| Tank Track | $149/mo first truck + $125/mo each additional | Browser-only (no native mobile); dump stations shown on map but not used in routing |
| PumpDocket | $99/mo (75-customer cap on Starter) | Customer cap pushes operators to $230/mo; no dump-station-aware routing |
| ServiceCore | $200+/mo, annual contract | Annual contract lock-in; enterprise complexity; multi-week onboarding |
| SepticMind | $149+/mo | Inspection-oriented; routing optimization depth unclear |
| Jobber / Housecall Pro | $49–$249/mo | Generic FSM; no tank-size estimation, no permit zones, no septic compliance templates |
| **Septic Route Optimizer** | **$129/mo, unlimited, month-to-month** | **Only platform with true CVRP dump-station-aware sequencing; offline-first native mobile; no caps** |

---

*PRD generated: 2026-04-17 | Idea Score: 97/105 | Product Brief: Complete | Status: Ready for Architecture*
