---
stepsCompleted: [step-01-init.md, step-02-discovery.md, step-02b-vision.md, step-02c-executive-summary.md, step-03-success.md, step-04-journeys.md, step-05-domain.md, step-06-innovation.md, step-07-project-type.md, step-08-scoping.md, step-09-functional.md, step-10-nonfunctional.md, step-11-polish.md, step-12-complete.md]
inputDocuments:
  - ideas/shortlisted/commercial-janitorial-operations-platform.md
  - _bmad-output/planning-artifacts/market-research-commercial-janitorial-operations.md
  - _bmad-output/planning-artifacts/brief-commercial-janitorial-operations.md
workflowType: prd
project_name: commercial-janitorial-operations
user_name: Root
date: 2026-10-02
classification:
  projectType: saas_b2b
  domain: field_service_management
  complexity: medium
  projectContext: greenfield
---

# Product Requirements Document — JanOps

**Author:** Root
**Date:** 2026-10-02
**Project:** Commercial Janitorial Operations Platform (JanOps)
**Status:** Complete

---

## Executive Summary

Commercial janitorial companies doing $100K–$5M in annual B2B contract revenue operate sophisticated multi-site service businesses — recurring contracts, night-shift crews, documented compliance requirements — on spreadsheets and disconnected apps. Enterprise platforms (Aspire, ServiceTitan) start at $15K/year and require $5M+ revenue to justify. The category leader (Swept) has no invoicing. Lightweight tools cover only one workflow slice each. No platform at SMB pricing addresses the complete operational cycle.

**JanOps** is the first full-workflow operations platform built exclusively for B2B commercial janitorial companies in the $100K–$5M segment. It covers bid estimation → contract CRM → crew scheduling → GPS-verified QC inspection → invoicing in a single platform at $99–149/mo or $149–199 LTD.

**The core differentiating insight:** Commercial cleaning contracts are renewed or lost based on documented compliance. GPS-tagged proof-of-service — timestamped check-ins, photo documentation, client-shareable inspection reports — is migrating from competitive differentiator to contract requirement. No affordable platform makes this the centerpiece of its value proposition. JanOps owns that position.

**Target users:** Commercial cleaning operators with 2–50 employees, 3–30 client accounts, serving office parks, industrial facilities, healthcare buildings, schools, and post-construction sites.

**Market opportunity:** $2.4B janitorial software market at 13.3% CAGR; ~50,000 US target customers; no dominant mid-market platform. Path to $50K MRR within 12 months.

### What Makes This Special

JanOps is differentiated from all current solutions on three compounding dimensions:

1. **Commercial-only positioning** — Every UI label, every onboarding flow, every marketing message speaks exclusively to B2B janitorial operators. Competitors blur the residential/commercial line; JanOps never crosses it.

2. **GPS proof-of-service as primary value proposition** — Not a checkbox feature. The QC Inspection module is architected around making compliance documentation automatic and client-shareable. This is the contract retention lever no affordable competitor has made central. The phrase "protects your contracts" is the market position JanOps will own.

3. **Swept's structural gap captured** — Swept, the dominant commercial scheduling tool, has no invoicing — a persistent gap unresolved for years. JanOps is the first platform to offer Swept-quality scheduling + integrated invoicing + bid calculator in one tool at SMB pricing.

## Project Classification

- **Project Type:** SaaS B2B with mobile app component (iOS + Android crew app)
- **Domain:** Field service management — B2B commercial janitorial
- **Complexity:** Medium — multi-tenant, GPS/location data, offline-capable mobile, B2B billing workflows
- **Project Context:** Greenfield — no existing codebase

---

## Success Criteria

### User Success

Operators succeed with JanOps when:

- A bid for a 40,000+ sq ft commercial facility is produced in under 1 hour (vs. 4–6 hours currently with Excel)
- All crew check-ins and inspection records for a client site are available in one place, enabling the operator to respond to a contract dispute with documented evidence within 5 minutes
- A multi-site invoice for a 10-building office park account is generated from completed work records in under 10 minutes
- Night-shift crew members use the mobile app from their first shift with zero in-person training required

Crew members succeed when:
- Schedule, check-in, and inspection tasks are completable with a smartphone in poor-signal environments without data loss

Facility managers succeed when:
- A cleaning compliance report for an ISO or internal audit is downloadable from the client portal without requiring the operator's involvement

### Business Success

| Metric | Month 3 | Month 12 | Month 36 |
|--------|---------|---------|---------|
| LTD customers (AppSumo) | 250 | 500 | — |
| MRR subscribers | 50 | 500 | 3,000 |
| Monthly Recurring Revenue | $5K | $50K | $300K |
| Monthly churn rate | <5% | <3% | <2% |
| Capterra/G2 reviews | 25 | 100 | 300+ |
| LTD → MRR conversion rate | — | 15% | 30% |

**North Star Metric:** Crew mobile app daily active users (DAU) — the proxy for operational embeddedness.

| Crew DAU Target | Month 3 | Month 12 | Month 36 |
|----------------|---------|---------|---------|
| Crew app DAU | 200 | 2,000 | 12,000 |

**Leading indicators of product-market fit:**
- Bid calculator → PDF export rate: >70% of accounts that open the calculator export at least one proposal within 14 days
- Client portal activation by facility managers: >30% of active accounts have at least one facility manager accessing the portal within 60 days
- Proof-of-service module activation: >50% of accounts have at least one completed QC inspection within 60 days

### Technical Success

- Crew mobile app offline mode functions for a full 8-hour shift in zero-connectivity environments
- GPS check-in accuracy within 50 meters of client site address (sufficient for per-site verification)
- No data loss during offline → online sync transitions
- Web application achieves 99.5% uptime during business hours (6 AM–midnight local time)

### Measurable Outcomes

- Month 6 MRR retention >85% of Month 1 subscribers confirms operational stickiness (operators don't leave once client data, inspection history, and bid templates are in the system)
- 250 AppSumo LTD sales within 60 days of launch validates demand at target price point
- 1+ unprompted organic mention per week in r/sweatystartup, Facebook "Janitorial Business Owners" (15K+ members), or BSCAI forums by Month 4

## Product Scope

### MVP — Minimum Viable Product

Four sprints, 16 weeks:

**Sprint 1 (Weeks 1–4): Bid & Contract**
- Smart Bid Calculator (sq footage × building type × soil level × frequency → labor + supply + overhead + margin)
- PDF proposal export with company branding
- Contract CRM with multi-site support (one client → multiple sites → one contract)
- Renewal date tracking with 90/60/30-day alerts

**Sprint 2 (Weeks 5–8): Crew Scheduling**
- Job calendar with crew assignment by site and shift
- Night-shift aware scheduling (PM→AM shifts without date confusion)
- Automated no-show alerting (configurable delay after scheduled start)
- Mobile crew app: GPS check-in/out, schedule view, offline mode, SMS fallback

**Sprint 3 (Weeks 9–12): Proof-of-Service**
- Per-site inspection checklist templates
- GPS-tagged timestamped photo capture per checklist item
- Auto-generated client-facing PDF inspection report on checklist completion
- Auto-email of inspection report to facility manager contact
- Client portal: read-only 90-day inspection history and report download

**Sprint 4 (Weeks 13–16): Revenue**
- Invoice generation from contract and completed inspections
- Net-30 support with PO number field
- Invoice PDF export and email delivery
- Basic payment status tracking (sent/paid/overdue)
- QuickBooks Online export
- Per-client supply usage logging and cost allocation

### Growth Features (Post-MVP)

- Healthcare compliance inspection templates (Joint Commission / HIPAA-adjacent documentation)
- AI-assisted bid generation (floor plan or address → auto-populated bid parameters)
- Per-cleaner quality scoring from inspection results; crew certification tracking
- Advanced analytics: per-client margin dashboard, labor efficiency benchmarks by building type
- Zapier integration and open API for ecosystem connectivity
- Predictive no-show alerting (ML-based, per crew/site combination)
- Robotic cleaning equipment scheduling and maintenance tracking

### Vision (Future)

- Franchise network multi-company view: franchisee operations + franchisor compliance dashboard
- Client self-service portal: additional service requests, one-time job scheduling, service ratings
- Vertical expansion into adjacent commercial services (security, pest control, facility maintenance)
- Canadian and UK market localization
- Acquisition-ready or $5M ARR independent path

---

## User Journeys

### Journey 1: Marcus (The Grinder) — Bid Won, Contract Retained

**Opening Scene.** Marcus, 43, built his commercial cleaning company from scratch over 12 years. He runs 12 night-shift cleaners across 8 commercial accounts — office parks, industrial facilities, post-construction recurring work. Revenue: ~$680K. He dispatches crews by text at 5 PM. He lost a $4,200/mo contract three months ago after a client dispute he couldn't document — and he's still angry about it. At midnight, after finishing the books, he Googles "commercial cleaning software." He finds a comparison article. JanOps is listed. He clicks through. He reads: "the only software with GPS proof-of-service built for commercial janitorial." He stops scrolling. He signs up for the free trial.

**Rising Action.** Marcus enters his 8 client accounts. He opens the bid calculator for a prospect — a 35,000 sq ft suburban office park. He enters sq footage, building type (Class A office), soil level (medium), cleaning frequency (5 nights/week). The calculator populates production rates, labor cost at his burdened rate, supply estimate, and overhead. It shows his margin at the bottom. He adjusts two inputs, exports the PDF proposal. It looks more professional than anything he's sent in 10 years. He emails it to the prospect that afternoon. He wins the contract the following Tuesday. That's his first "aha" moment — not the scheduling, not the QC module, but the bid that took 40 minutes instead of half a day.

**Climax.** In month 3, a medical office client calls claiming their restrooms weren't cleaned on a Wednesday night. Marcus opens JanOps on his phone. He pulls up that site's inspection log. He sees: GPS check-in at the building at 10:14 PM, inspection checklist completed at 11:47 PM, photo of each restroom with GPS stamp. He calls the client back and shares the inspection report link. The client apologizes. No contract dispute. No lost account. Marcus renews at the next billing cycle without negotiation. This is the moment the product's promise becomes real.

**Resolution.** Marcus's switching cost after 3 months is his entire client database, 90 days of inspection records, his crew scheduling history, and his calibrated bid templates. He's not leaving. At the next BSCAI local chapter meeting, he's the one recommending JanOps to two other operators. He becomes the software ambassador in his regional cleaning association.

**Capabilities Revealed:** bid calculator, PDF proposal export, contract CRM, inspection checklist with GPS photo, auto-email inspection report, inspection history log, crew GPS check-in

---

### Journey 2: Diana (The Scaler) — Multi-Site Contract Onboarded

**Opening Scene.** Diana, 37, just closed her biggest contract: a 10-building office park managed by a single corporate facilities department. Her company hit $1.1M last year; this deal pushes her toward $1.5M. But she realizes within days that her current tools — Swept for scheduling, QuickBooks for billing, paper inspection forms — can't handle one client across 10 buildings without creating 10 separate jobs. She's been in Facebook groups asking "what software do you use?" for three weeks, getting 40 different answers. She's evaluated Swept, Clean Smarts, and QuoteIQ. None of them solve the multi-site contract problem.

**Rising Action.** Diana finds JanOps through a Facebook group thread. She signs up and, during onboarding, creates her new 10-building client as a single contract record. She adds all 10 site locations under it — each with its own address, scope of work, and assigned crew team. Monthly billing pulls all 10 sites into a single invoice. She sets up the inspection checklist templates for each building type (lobby, restrooms, conference rooms, loading dock).

**Climax.** Six weeks in, the corporate facilities director emails Diana: they need a cleaning compliance report for their ISO 9001 internal audit. The director needs 90 days of service records across all 10 buildings by Friday. Diana logs into the client portal link she previously shared. She downloads the aggregate 90-day inspection report. It took 4 minutes. The facilities director's response: "This is exactly what we needed — can we set this up on auto-send monthly?" Diana configures the monthly auto-email in JanOps that afternoon. The contract is renewed early, extended to 3 years.

**Resolution.** Diana becomes a high-volume referrer. She posts in three Facebook groups unprompted. She refers four operators in her first 90 days. Her account is the reference case JanOps uses for AppSumo launch copy: "One 10-building corporate client. One contract. One invoice. 90-day compliance report in 4 minutes."

**Capabilities Revealed:** multi-site contract (one client / multiple sites), invoice aggregation across sites, client portal, 90-day inspection history, compliance report download, auto-email scheduling

---

### Journey 3: Night-Shift Crew Member (Carlos) — First Shift App Adoption

**Opening Scene.** Carlos, 29, is a lead cleaner on Marcus's industrial facility team. He speaks English and Spanish. He's worked for Marcus for two years. He's used three different apps that Marcus tried and abandoned — all too complicated. When Marcus introduces JanOps, Carlos opens the app with skepticism.

**Rising Action.** The schedule for tonight is already there when he opens the app — site address, start time, checklist items. He drives to the facility. Inside the parking garage, he has zero cell signal. He opens JanOps. The schedule loads — it downloaded earlier. He taps "Check In." The app confirms: "Check-in queued — will sync when you're online." He starts his route. Each area has a checklist. He photographs each completed area with the in-app camera. Photos queue for upload. At 3 AM, walking to the parking lot, signal returns. He watches the status bar: "Syncing 12 items." Done. He taps "Check Out."

**Climax.** The next morning, Marcus sees Carlos's full inspection record in JanOps — check-in time, check-out time, all 14 checklist items with GPS-stamped photos. The client auto-received their inspection report at 4 AM. Carlos asks Marcus: "That app — is it going to be permanent? The old ones never worked underground." Marcus says yes.

**Resolution.** Carlos becomes Marcus's crew adoption champion. He shows the other 11 cleaners how to use it before their next shift. "It saves your work even when there's no signal." Within 10 days, all 12 cleaners are using it consistently.

**Capabilities Revealed:** offline mode (schedule download, check-in queue, photo queue), GPS check-in/out, inspection checklist with photo, background sync, SMS fallback

---

### Journey 4: Facility Manager (Jenna) — Audit-Ready Without the Phone Call

**Opening Scene.** Jenna manages the facilities portfolio for a regional healthcare company — 3 medical office buildings cleaned by a contracted janitorial company using JanOps. She doesn't pay for JanOps and doesn't need to. She has a read-only client portal link that was emailed to her when the operator set up her account.

**Rising Action.** Her VP of Operations asks for documentation that cleaning protocols were followed at all three sites during the past 60 days, ahead of a Joint Commission review. The old process: call the cleaning company, wait 48 hours, receive a PDF of manually compiled notes.

**Climax.** Jenna opens the client portal on her laptop. She sees the past 60 days of inspection reports for all three sites — date, time, checklist completion percentage, photos for each area. She filters by site, downloads the full 60-day report as PDF, and emails it to her VP. Total time: 7 minutes.

**Resolution.** At the contract renewal meeting, Jenna tells the cleaning operator: "The portal is the reason I recommended renewing. My VP asked for documentation last month and I had it in 7 minutes. The previous company couldn't get me that in 3 days." The contract renews at a 12% price increase.

**Capabilities Revealed:** read-only client portal, filterable inspection history, compliance report download, no operator action required for client access

---

### Journey 5: Bookkeeper (Sandra) — Invoice Workflow Without Admin Access

**Opening Scene.** Sandra handles billing for Diana's commercial cleaning company — 3 hours per week, part-time. Diana doesn't want Sandra to see crew schedules, client contracts, or inspection details. She just needs Sandra to review and send invoices.

**Rising Action.** Diana creates a bookkeeper account for Sandra with restricted access — billing data only. Sandra logs in on the 1st of each month. She sees pending invoices generated from completed work. She reviews line items, adds any manual adjustments, and clicks "Send to Client." She exports the month's invoices to QuickBooks with one button.

**Resolution.** Sandra processes 12 invoices for 6 clients in 45 minutes. She flags one invoice where a supply surcharge looks wrong. Diana reviews and corrects before sending. No invoices are sent without review.

**Capabilities Revealed:** role-based access (bookkeeper role), invoice review workflow, QuickBooks export, invoice approval before send

---

### Journey Requirements Summary

| Journey | Core Capabilities Required |
|---------|--------------------------|
| Marcus — Bid & Retention | Bid calculator, PDF proposal, inspection GPS photos, auto-email report, inspection history |
| Diana — Multi-Site Contract | Multi-site contract model, aggregated invoice, client portal, 90-day report download |
| Carlos — Crew Adoption | Offline mode, one-tap GPS check-in, inspection checklist, background sync, SMS fallback |
| Jenna — Facility Manager | Read-only portal, downloadable compliance reports, filterable history |
| Sandra — Bookkeeper | Role-based access, invoice review, QuickBooks export |

---

## Domain-Specific Requirements

**Domain:** B2B Field Service Management — Commercial Janitorial

This domain presents medium complexity driven by four domain-specific constraints:

### GPS and Location Data

- GPS check-in coordinates are operational data (verifying crew presence at client sites), not PII in the traditional sense — however, they may be linkable to individuals
- Location data must be retained only for the duration associated inspection records are retained (default: 5 years for B2B contract documentation purposes)
- GPS accuracy required: within 50 meters of registered client site address (sufficient for geofence verification; GPS, not cellular tower approximation)
- Geofence radius must be configurable per site to accommodate large industrial facilities where parking and building entry may be 100+ meters apart

### B2B Billing and Contract Compliance

- Net-30 payment terms are standard in commercial cleaning contracts; invoices must support terms field with due date calculation
- PO numbers are required on invoices for many commercial clients (facilities departments process invoices through procurement systems)
- Multi-site billing aggregation: one invoice per client period covering all sites is the standard commercial contract billing model
- Supply cost pass-throughs must be documented per-site for client billing disputes

### Night-Shift Workforce Operational Reality

- A meaningful portion of the crew workforce has limited English proficiency (Spanish is the dominant second language in US commercial cleaning)
- Crew members work in buildings without internet connectivity — basements, industrial facilities, underground parking, server rooms — for full shifts
- Crew members do not have time or supervision for in-app onboarding; zero-training-required UX is a hard requirement for the crew app
- Shift start times range from 5 PM to 11 PM; most work ends between 1 AM and 4 AM — scheduling and reporting must handle overnight shifts without date ambiguity

### Commercial Contract Documentation

- Commercial cleaning contracts increasingly require documented proof of service as a contract compliance requirement (not just an optional add-on)
- Inspection reports used in contract disputes require: GPS coordinates, timestamps, photo documentation, and worker identification
- Some clients (healthcare, pharmaceutical, food processing) require inspection records retained for audit periods of 5+ years
- Client portal access is a common contract deliverable — operators promise clients access to their service records as part of the contract terms

---

## Innovation & Novel Patterns

### Detected Innovation Areas

**1. Proof-of-Service as Primary Value Proposition (not a feature)**

The central innovation in JanOps is architectural: proof-of-service documentation is not a module — it is the organizing principle of the entire platform. Every other capability (bid calculator, scheduling, invoicing) flows into or is justified by the inspection compliance layer. This is novel in the sub-$500/mo field service management market. Current tools treat GPS check-in as a payroll or scheduling verification feature. JanOps repositions it as the asset that protects multi-year commercial contracts from documentation disputes.

The commercial cleaning industry is mid-transition: 5 years ago, documented QC was a competitive differentiator for premium operators. Today, healthcare, pharmaceutical, and food manufacturing clients are beginning to write proof-of-service requirements into RFPs and contract renewals. JanOps positions for this transition by making proof-of-service automatic and client-shareable, rather than manual and operator-retained.

**2. Offline-First as Non-Negotiable Architecture (not a nice-to-have)**

The crew mobile app must function for a complete 8-hour shift in a zero-connectivity environment. This is not a performance optimization — it is a hard domain constraint driven by night-shift operations in basements, industrial buildings, and facilities with no public WiFi. Most FSM mobile apps are built as online-first with optional "offline mode" bolted on. JanOps must invert this: offline is the default, online sync is the recovery mechanism. This architectural decision affects how local storage, sync conflict resolution, GPS queuing, and photo queuing are implemented.

**3. Multi-Site Contract Model at SMB Pricing (industry-unique)**

No affordable FSM platform (sub-$500/mo) currently supports the commercial cleaning contract model: one client, multiple site locations, one aggregated contract and invoice. Every current SMB tool treats each job/site as a separate record. This forces operators to manually aggregate billing, prevents contract-level reporting, and makes multi-site compliance documentation impossible. JanOps' data model centers the Contract as the primary object, with Sites as children of Contract (not as independent jobs).

### Market Context

Three converging forces make this the right time:

1. Swept's dominance in commercial cleaning scheduling with a persistent invoicing gap creates a "ready to switch" segment
2. Facility managers at commercial clients increasingly request compliance documentation — creating demand from the clients of JanOps' customers
3. AppSumo's growing commercial services vertical creates an accessible early-distribution channel for a B2B niche tool

### Validation Approach

- **Bid calculator validation:** 70%+ of free trial accounts export at least one PDF proposal within 14 days
- **Offline mode validation:** Track sync success rate for check-ins initiated offline; target >99% successful sync within 30 seconds of connectivity restoration
- **Multi-site contract validation:** Track whether accounts with 3+ sites use multi-site contract model or manually create separate jobs; target >80% adoption of contract model

---

## SaaS B2B Specific Requirements

### Multi-Tenancy

- Every JanOps account (one company) is a separate tenant with complete data isolation
- One tenant cannot access any data (clients, crews, sites, inspection records) of another tenant
- Account-level data deletion must cascade across all associated records (GDPR-compliant)

### Role-Based Access Control

| Role | Capabilities |
|------|-------------|
| Owner/Admin | Full access to all modules |
| Manager | Scheduling, crew management, inspections — no billing or account settings |
| Crew Member | Mobile app only: schedule view, GPS check-in, inspection checklist |
| Bookkeeper | Billing and invoicing only — no scheduling, crew, or client detail |
| Client (Facility Manager) | Read-only client portal scoped to their contract only |

### Subscription and Billing Tiers

- **SaaS Tier 1:** $99/mo, up to 15 crew members, unlimited clients and sites
- **SaaS Tier 2:** $149/mo, up to 50 crew members, unlimited clients and sites
- **LTD Tier 1:** $149 one-time, up to 15 crew members
- **LTD Tier 2:** $199 one-time, up to 50 crew members
- Subscription managed via Stripe; LTD managed via AppSumo then migrated

### Integration Requirements

- **QuickBooks Online:** OAuth2 integration for invoice export and payment import
- **Stripe:** Payment processing for subscription billing (not used for operator's own client invoicing — JanOps tracks invoice status only, does not process payments between operators and their clients)
- **SendGrid (or equivalent):** Transactional email for inspection reports, renewal reminders, invoice delivery, no-show alerts
- **Google Maps / Mapbox:** Geocoding for site address verification and geofence calculation

### Mobile App Technical Requirements

- iOS 15+ and Android 10+ support
- Offline SQLite or equivalent local storage for schedule, checklist, and photo queue
- Background sync that triggers within 30 seconds of connectivity restoration
- Photo compression to max 2MB per image before upload (preserves GPS EXIF metadata)
- SMS delivery via Twilio (or equivalent) as fallback for schedule notifications when app push notifications fail

---

## Project Scoping & Phased Development

### MVP Strategy

**MVP Approach:** Experience MVP — deliver the complete workflow loop (bid → contract → schedule → inspect → invoice) for the primary persona (The Grinder, Marcus) within 16 weeks. The MVP is not a single-feature wedge; commercial cleaning operators need the full cycle to replace their current multi-tool setup. A bid calculator alone does not create switching cost. The proof-of-service module alone does not create retention. The combination does.

**Critical Constraint:** The crew mobile app with offline mode is the highest-risk MVP element. It must be ready by the end of Sprint 2 (Week 8) to allow 4–6 weeks of real-world crew adoption testing before launch.

**MVP Team:** 2–3 engineers (1 backend/API, 1 frontend web, 1 mobile), 1 product/design

### MVP Feature Set (Phase 1)

**Sprint 1 (Weeks 1–4): Bid & Contract Foundation**
- Smart Bid Calculator (sq ft, building type, soil level, frequency → cost + margin)
- PDF proposal export with company logo
- Contract CRM with multi-site model
- Renewal date alerts (90/60/30 days)

**Sprint 2 (Weeks 5–8): Crew Scheduling + Mobile App**
- Job scheduling calendar
- Crew assignment by skill/certification
- No-show alerting (configurable window)
- iOS + Android crew app: GPS check-in/out, schedule, offline mode, SMS fallback

**Sprint 3 (Weeks 9–12): Proof-of-Service**
- Per-site inspection checklist templates
- GPS-tagged photo capture per checklist item
- Auto-generated PDF inspection report on completion
- Auto-email to facility manager contact
- Client read-only portal with 90-day history and report download

**Sprint 4 (Weeks 13–16): Revenue Cycle**
- Invoice generation from contract/completed work
- Net-30 terms with PO number field
- Invoice PDF export and email delivery
- Invoice status tracking
- QuickBooks Online export
- Per-client supply usage log and cost allocation

### Post-MVP Features (Phase 2)

- Healthcare compliance inspection templates
- AI bid assistant (floor plan → parameters)
- Crew performance scoring from inspection results
- Advanced analytics and margin dashboards
- Zapier integration and open API
- Predictive no-show alerting

### Expansion Features (Phase 3)

- Franchise network multi-company view
- Client self-service portal
- Adjacent vertical expansion (security, pest control)
- International market localization

### Risk Mitigation

**Technical Risks:**
- *Offline sync conflicts* (crew checks in offline, same record modified online): Implement last-write-wins with timestamp; crew app is the source of truth for check-ins and inspection photos
- *GPS accuracy in dense urban buildings*: Use IP geolocation as fallback when GPS signal is unavailable; flag check-ins as "geolocation-assisted" vs "GPS-verified" in inspection reports

**Market Risks:**
- *Crew app adoption failure* (the primary churn driver): Validate crew UX with 3 operators and 10+ crew members before App Store submission; target zero-support first-shift experience
- *Swept defending their turf*: Swept has had the invoicing gap for years and hasn't closed it; competitive risk is low short-term

**Resource Risks:**
- If mobile development capacity is constrained, delay Sprint 3 by 2 weeks rather than cutting offline mode — offline is non-negotiable for crew adoption

---

## Functional Requirements

### Bid Estimation & Proposal Management

- **FR1:** Owner can calculate a commercial bid by entering site sq footage, building type (office/industrial/healthcare/post-construction), soil level (light/medium/heavy), cleaning frequency, and specialty areas (restrooms, loading docks, kitchens)
- **FR2:** Owner can input their market's burdened labor rate and supply cost estimate, which are stored per account for reuse across bids
- **FR3:** Owner can view a line-item bid breakdown showing labor cost, supply cost, overhead, and margin with calculated total price
- **FR4:** Owner can adjust any line item and see the total and margin update in real time
- **FR5:** Owner can export the bid as a branded PDF proposal including company logo, scope of work, pricing, and terms
- **FR6:** Owner can save and reuse bid configurations as named templates (e.g., "Medical Office Standard", "Industrial Heavy Soil")

### Contract & Client Management

- **FR7:** Owner can create a client record with primary contact, billing address, PO number field, contract start/end dates, and payment terms
- **FR8:** Owner can add multiple site locations to a single client contract, each with its own address and scope of work
- **FR9:** Owner can define the scope of work per site (services included, cleaning frequency, specialty areas, supply requirements)
- **FR10:** Owner can view total contract value aggregated across all sites under one client
- **FR11:** System notifies the owner at 90, 60, and 30 days before a contract expiration date
- **FR12:** Owner can log activity notes, calls, and site visits against a client record with timestamps
- **FR13:** Owner can track each contract's status (draft, active, pending renewal, expired)

### Crew Scheduling & Dispatch

- **FR14:** Owner can create recurring and one-time job assignments for specific client sites and shifts
- **FR15:** Owner can view a calendar displaying all scheduled jobs by date, crew member, and client site
- **FR16:** Owner can assign cleaners to jobs by matching required certifications (healthcare-trained, biohazard-certified, post-construction)
- **FR17:** System triggers a configurable no-show alert (operator sets delay window) when a scheduled crew member has not GPS-checked-in at the expected site after the window expires
- **FR18:** Owner can broadcast a message or schedule update to all crew members assigned to a specific shift or site
- **FR19:** Scheduling interface displays overnight shifts (PM-to-AM) without date ambiguity (shift start date is the reference date regardless of end time)

### Mobile Crew Operations

- **FR20:** Crew member can GPS-check-in at a client site with a single tap on the mobile app
- **FR21:** Crew member can GPS-check-out at the conclusion of a job with a single tap
- **FR22:** Crew member can view their current-day schedule including site addresses and shift times in the mobile app
- **FR23:** Crew member can receive schedule notifications via push notification, with automatic SMS fallback if push notifications fail
- **FR24:** All crew app functions (schedule view, check-in/out, inspection checklist, photo capture) operate in offline mode with all data queued for automatic sync upon connectivity restoration
- **FR25:** Queued offline data syncs within 30 seconds of internet connectivity restoration without manual action from the crew member
- **FR26:** Mobile app is available for iOS (15+) and Android (10+)

### QC Inspection & Proof-of-Service

- **FR27:** Owner can create and assign per-site inspection checklist templates with named checklist items grouped by area (lobby, restrooms, conference rooms, etc.)
- **FR28:** Crew member can capture a photo for each checklist item during inspection; photo is automatically GPS-tagged with coordinates and timestamp
- **FR29:** System generates a client-facing PDF inspection report automatically when an inspection checklist is marked complete
- **FR30:** System automatically emails the inspection report to the designated facility manager contact for the site after each completed inspection
- **FR31:** Owner can view an inspection history dashboard showing all completed inspections across all sites and dates
- **FR32:** Facility manager can access a read-only client portal scoped to their contract showing 90 days of inspection history
- **FR33:** Facility manager can download individual inspection reports or a date-range aggregate compliance report from the client portal

### Invoicing & Revenue Cycle

- **FR34:** Owner can generate an invoice from a client contract pre-populated with site scope and billing period
- **FR35:** Owner can set payment terms (net-30 standard) and add a PO number field to an invoice
- **FR36:** Invoice aggregates all sites under a client contract into a single billing document
- **FR37:** Owner can add manual line items to an invoice (supply surcharges, one-time add-ons)
- **FR38:** Owner can export an invoice as a PDF and email it directly to the client billing contact from within JanOps
- **FR39:** Owner can track invoice status (draft, sent, paid, overdue) with overdue invoices visually flagged on the dashboard
- **FR40:** Owner can export invoice records to QuickBooks Online via OAuth integration

### Supply & Consumable Tracking

- **FR41:** Owner can log supply usage by type (chemicals, trash bags, paper products, specialty supplies) and quantity against a specific client site visit
- **FR42:** System allocates logged supply costs to the associated client contract record for per-contract margin tracking
- **FR43:** Owner can set a low-stock alert threshold per supply type and receive an in-app notification when the threshold is reached

### Account, User & Access Management

- **FR44:** Owner can create user accounts for crew members, managers, and bookkeepers with role-appropriate permissions
- **FR45:** Owner can deactivate a user account without deleting their associated historical records (check-ins, inspection photos)
- **FR46:** Owner can configure company branding (logo, company name) used on client-facing PDFs and the client portal
- **FR47:** Bookkeeper account type has access to billing and invoicing data only, with no access to crew scheduling, client contracts, or inspection details
- **FR48:** Owner can generate and share a unique read-only client portal link per client contract for the facility manager

---

## Non-Functional Requirements

### Performance

- Web dashboard pages load within 3 seconds for the 95th percentile of page load requests under normal operating load (up to 500 concurrent sessions)
- Bid calculator produces a complete cost breakdown within 1 second of final input entry
- Inspection report PDF is generated and email-queued within 60 seconds of checklist completion
- Offline check-in and photo capture operations complete within 2 seconds on the device, independent of connectivity

### Reliability & Availability

- Web application maintains 99.5% uptime during business hours (6 AM to midnight local operator time), as measured by uptime monitoring
- Crew mobile app offline mode maintains full functionality (schedule, check-in, inspection, photo capture) for a minimum of 8 consecutive hours without network connectivity
- Queued offline sync operations (check-ins, photos, checklist completions) complete successfully at a rate of 99.9% within 60 seconds of connectivity restoration

### Security

- All data encrypted at rest (AES-256) and in transit (TLS 1.2+)
- Role-based access control enforced at the API level — no client-side enforcement only
- Each tenant's data is isolated at the data model level; cross-tenant data access is not possible through any API endpoint
- GPS location data retained only for the duration that the associated inspection or check-in record is retained; location data is not used for any purpose beyond site-visit verification
- Client portal links include non-guessable token-based authentication; no password required for facility manager access

### Scalability

- Platform architecture supports horizontal scaling to accommodate up to 10,000 concurrent crew mobile app users in year 2 without application-layer refactoring
- Photo storage is served via CDN with per-tenant access controls; local server storage is not used for user-generated content
- Database schema supports up to 500 client sites per account and 10 years of inspection history per site without performance degradation

### Accessibility

- Web application meets WCAG 2.1 Level AA for owner/admin and bookkeeper interfaces
- Crew mobile app: key actions (check-in, checklist complete, photo capture) are reachable within 2 taps from the app home screen
- Mobile app supports device font scaling without layout breakage
- All form elements have accessible labels for screen reader compatibility

### Integration

- QuickBooks Online OAuth2 integration maintains token refresh without requiring owner re-authentication more than once per 6 months
- Outbound emails (inspection reports, invoices, renewal alerts, no-show alerts) deliver within 5 minutes of trigger event via transactional email provider
- Client portal is accessible on modern mobile browsers (Safari iOS 15+, Chrome Android 10+) without requiring app installation
- SMS fallback for crew schedule notifications delivers within 60 seconds of failed push notification attempt

---

*Product Requirements Document: JanOps — Commercial Janitorial Operations Platform*
*Completed: 2026-10-02*
*Author: Root (automated BMAD workflow)*
*Based on: Product Brief (93/105 score) + Market Research + Shortlisted Idea*
*Next Step: create-architecture*
