---
stepsCompleted: [step-01-init, step-02-discovery, step-02b-vision, step-02c-executive-summary, step-03-success, step-04-journeys, step-05-domain, step-06-innovation, step-07-project-type, step-08-scoping, step-09-functional, step-10-nonfunctional, step-11-polish, step-12-complete]
inputDocuments:
  - ideas/shortlisted/small-fleet-trucking-tms.md
  - _bmad-output/planning-artifacts/market-research-small-fleet-trucking-tms.md
  - _bmad-output/planning-artifacts/brief-small-fleet-trucking-tms.md
workflowType: 'prd'
lastStep: step-12-complete
project_name: small-fleet-trucking-tms
user_name: Root
date: '2026-04-19'
classification:
  projectType: saas_b2b
  domain: logistics_transportation
  complexity: high
  projectContext: greenfield
---

# Product Requirements Document — FleetPilot (Small Fleet Trucking TMS)

**Author:** Root
**Date:** 2026-04-19
**Status:** Complete — Ready for Architecture

---

## Executive Summary

FleetPilot is a web-and-mobile Transportation Management System (TMS) built exclusively for US small fleet trucking operators — the 500,000+ carriers with fewer than 6 trucks and 350,000+ owner-operators who form the backbone of American freight but are entirely abandoned by today's software market. These operators are trapped between enterprise TMS platforms ($2,000–$5,000+/month) designed for large carriers and budget tools ($20–$50/month) so limited they still require hours of manual spreadsheet work each week.

The regulatory landscape has just created an immediate forcing function: a February 2026 FMCSA ruling now mandates digital Driver Vehicle Inspection Reports (DVIRs). Paper-based compliance workflows are non-compliant. This, combined with IFTA's persistent quarterly burden (4–8 hours of manual calculation per operator, with government penalty risk for errors), creates an undeniable purchase trigger with no adequate affordable solution in the market.

FleetPilot delivers one app, one bill, no per-truck chaos — at $49/month for up to 5 trucks and $99/month for up to 20. It automates IFTA fuel tax calculation, provides FMCSA-compliant digital DVIR management, tracks all DOT compliance deadlines, manages loads from dispatch to invoice, and syncs with QuickBooks. A $149 Lifetime Deal on AppSumo (first-mover — no competing trucking TMS has run an AppSumo deal) funds the initial user base and community presence.

**Market Validation:** 6+ weeks of continuous community signal data (r/trucking 300K+, TruckersReport 400K+). Score: 90/105 across 21 evaluation cycles.

### What Makes This Special

**The core insight:** IFTA quarterly compliance is simultaneously the highest-urgency pain point, the clearest ROI calculation, and the most technically defensible moat in small fleet trucking software. An operator who uploads one CSV export from their ELD and downloads a ready-to-file IFTA report has experienced something no $49/month tool has ever given them. That moment of delight — saving 4–8 hours of Sunday-afternoon spreadsheet work and eliminating penalty risk — creates permanent retention.

**Primary differentiators:**

1. **IFTA Autopilot with GPS/ELD-based mileage** — Eliminates the only high-urgency, high-frequency calculation that currently requires manual work at every price tier. TruckingOffice creates state-flagged errors; Motive can't separate toll miles; nothing at this price does it correctly and automatically.
2. **February 2026 FMCSA digital DVIR compliance built-in** — The regulatory forcing function is active now. FleetPilot makes operators immediately compliant at a price they can afford. This is a legally mandatory, time-sensitive purchase driver.
3. **Flat pricing, no long-term contracts** — The trucking software market's defining customer trauma is Samsara's 3-year contracts. FleetPilot competes on trust: month-to-month, flat rate, cancel anytime. $49/month for 5 trucks, period.
4. **Mobile-first, built for life on the road** — Every critical workflow optimized for a phone screen. Owner-operators don't work from a desktop. Most competitors are desktop-first or Windows-only.
5. **Community-native distribution** — Priced for the community's budget, built for the community's pain, distributed through the community's channels. AppSumo first-mover advantage confirmed.

## Project Classification

- **Project Type:** SaaS B2B (web + mobile, multi-tenant)
- **Domain:** Logistics / Transportation (high compliance complexity)
- **Complexity:** High — federally regulated domain (FMCSA, IFTA, DOT), multi-state tax jurisdiction rules, ELD API integration, QuickBooks OAuth sync
- **Project Context:** Greenfield — no existing codebase
- **Target Deployment:** Railway or Render (cost-effective, auto-scaling); iOS-first mobile, Android post-launch

---

## Success Criteria

### User Success

**IFTA Compliance**
- Users reduce IFTA quarterly prep time by ≥80% — from 4–8 hours to under 1 hour
- Zero state penalty notices for FleetPilot users who use the IFTA Autopilot feature
- IFTA dashboard activation rate ≥70% within 14 days of trial start (leading indicator)

**DOT Compliance**
- 100% of active fleets have zero expired driver qualification documents within 90 days of onboarding
- Digital DVIR submission covers ≥90% of inspection events (replacing paper) within 60 days of fleet onboarding
- Failed roadside inspection rate (user-reported) decreases to near zero within 90 days of compliance dashboard adoption

**Load & Invoice Workflow**
- Load-to-invoice cycle completed in <5 minutes for standard loads (vs. 30+ minutes with current fragmented tools)
- ≥80% of completed loads have digital BOL attached within 60 days of fleet sign-up
- 70%+ of invoices generated via FleetPilot are auto-generated from completed loads (not manually created)

**Driver Adoption**
- Mobile app daily active usage ≥40% of registered drivers within 60 days of fleet sign-up
- DVIR submission via mobile app covers ≥90% of required inspections within 60 days

### Business Success

**6-Month Targets (by October 2026)**
- 500+ paying subscribers (MRR or LTD activated)
- $25,000+ MRR or $75,000+ in LTD launch revenue (AppSumo)
- AppSumo deal launched and closed with 500+ LTD sales within the 14-day promotional window
- Organic product mentions in r/trucking or TruckersReport: ≥20/month (unpaid)

**12-Month Targets (by April 2027)**
- $25,000+ MRR from subscription revenue (post-LTD conversion)
- Net Revenue Retention >100% (fleet expansion upsells driving account growth)
- Monthly churn rate <5% (sticky due to IFTA/compliance data and switching costs)
- 50+ G2/Capterra reviews averaging ≥4.5 stars

**Key Business KPIs**

| KPI | 6-Month Target | 12-Month Target |
|-----|---------------|----------------|
| Monthly Recurring Revenue | $10,000 | $25,000+ |
| Total Active Fleets | 200+ | 500+ |
| AppSumo LTD Sales | 500+ | N/A (closed) |
| Monthly Churn Rate | <8% | <5% |
| IFTA Reports Generated | 1,000+ | 5,000+ |
| Mobile App DAU/MAU | >40% | >50% |
| Net Promoter Score | 50+ | 60+ |
| Trial-to-Paid Conversion | 30%+ | 35%+ |
| Avg Revenue Per Fleet | $65/mo | $75/mo |

**Leading Indicators (weekly):**
- Free trial sign-up rate from community posts
- Trial-to-paid conversion rate
- IFTA dashboard activation rate (% of trials who connect a data source)
- Mobile app download rate per web sign-up

### Technical Success

- System uptime ≥99.5% (downtime during trucking business hours is a compliance liability)
- IFTA calculation accuracy: zero known errors that produce state-flagged results (validated by trucking CPA)
- Mobile app load time <3 seconds on LTE
- API response time <500ms for all standard CRUD operations
- QuickBooks OAuth sync success rate ≥98%
- Zero data loss events for compliance records (CDLs, DVIRs, medical certs)

### Measurable Outcomes

**Go/No-Go Decision Point:** If at 90 days post-launch fewer than 50 paying subscribers (MRR + LTD) have adopted the IFTA or compliance module as primary workflow, pause and diagnose before expanding scope.

**MVP Validation Criteria:**
1. 30+ paying users (non-LTD) using IFTA and compliance features monthly for 60+ days with <5% churn
2. 3+ organic mentions per week in r/trucking or TruckersReport recommending FleetPilot (unpaid)
3. AppSumo deal: 300+ LTD sales within 14-day promotional window
4. 70%+ of free trial users who complete IFTA setup convert to paid within 30 days
5. Support tickets: <2 per 10 active users per month

### Product Scope

**MVP (Phase 1) — "IFTA Autopilot + Compliance Essentials"**

The minimum that creates immediate, measurable value and justifies purchase before a single load is managed:
- IFTA fuel tax calculation and quarterly report generation
- DOT compliance dashboard with driver qualification file tracking and digital DVIR
- Load management (dispatch to delivery)
- Invoicing and driver settlement
- QuickBooks Online sync

**Growth Features (Phase 2 — Months 7–12)**

- ELD API integration (Motive, Samsara) for automatic GPS-based IFTA mileage
- HOS (Hours of Service) compliance visualization
- DAT/Truckstop load board integration
- AI rate negotiation assistant
- Android mobile app
- Multi-user accounts (dispatcher + owner + driver roles)

**Vision (Phase 3 — Year 2+)**

- Per-truck profitability dashboard
- Predictive maintenance alerts
- Factoring company integrations (OTR Capital, Triumph)
- Driver recruitment and onboarding module
- Canadian IFTA province support
- Load board aggregation (DAT, Truckstop, direct shipper)
- White-label for freight brokers
- Hotshot trucking vertical expansion

---

## User Journeys

### Journey 1 — Mike, the Owner-Operator (Primary User — Success Path)

**Profile:** Mike, 44, independent refrigerated freight hauler, 1 truck, operating across 6 states. Runs his business from his iPhone and a cab laptop. His wife helps with books on weekends. Every quarter they spend a Sunday calculating IFTA from trip logs and fuel receipts. Last quarter: a penalty notice from a state mileage calculation error.

**Opening Scene:** It's a Sunday afternoon in March. Mike is at his kitchen table with a stack of fuel receipts, two spreadsheets open, and a knot in his stomach. He's done IFTA this way for 8 years. His buddy mentioned something called FleetPilot in r/trucking — "finally does IFTA right, no more state penalties." He searches it up.

**Discovery and Sign-Up:** Mike lands on FleetPilot. The headline: "IFTA done in 5 minutes, not 5 hours." He signs up for a free trial (no credit card). He uploads a CSV export from his ELD. The IFTA dashboard populates with state miles — automatically. He checks it against his paper log. It's correct. He closes the spreadsheet.

**Daily Use:** Mike enters each load on his phone after a broker call — takes 90 seconds. When he picks up a load, he photos the signed BOL; it attaches to the load automatically. When the load delivers, an invoice drafts automatically. He emails it to the broker in two taps.

**Quarter-End Moment:** It's June 30. Instead of a Sunday marathon, Mike opens FleetPilot on his phone, reviews the IFTA summary (2 minutes), and downloads the state-by-state report. No calculation. No penalty anxiety. He files it himself for the first time in years.

**Long-Term:** FleetPilot becomes Mike's single source of truth. He starts tracking his medical certificate and annual inspection dates. He tells his dispatcher buddy about it at a truck stop. Word-of-mouth referral created.

**Capabilities Revealed:** ELD/CSV IFTA import, fuel purchase logging, state mileage calculation, quarterly report generation, mobile load entry, BOL photo capture, auto-invoice from completed load, invoice email delivery.

---

### Journey 2 — Sarah, the Small Fleet Manager (Primary User — Multi-Driver Compliance)

**Profile:** Sarah, 38, manages 8-truck fleet (3 employed drivers + 5 owner-operators leased to her). Former dispatcher. Panics when a driver calls from a weigh station unable to find his medical certificate. Currently using Google Sheets for dispatch, Google Drive for DQF, and her accountant for IFTA.

**Opening Scene:** Sarah gets a call at 6 AM on a Tuesday. One of her drivers failed a roadside inspection — he couldn't produce a current medical certificate. The inspector issued an out-of-service order. The load is late. The broker is calling. Sarah doesn't even know when the certificate expired.

**Discovery:** Her accountant mentions that trucking clients using FleetPilot are showing up with cleaner IFTA prep. Sarah searches "TMS small fleet compliance dashboard." The $99/month flat price for up to 20 trucks is immediately appealing.

**Onboarding:** Sarah sets up 8 driver profiles, enters CDL and medical cert expiration dates. The compliance dashboard immediately shows 2 drivers with certs expiring in 45 days — she didn't know. She sets alerts. This is her first "aha!" moment.

**Daily Use:** Drivers submit digital DVIRs from the mobile app each morning before their first trip. Sarah monitors the compliance dashboard at 8 AM: green for all trucks today. She dispatches loads from the web app; drivers accept assignments on their phones. Driver settlements calculate automatically from completed loads — Monday morning used to take 3 hours; now it takes 20 minutes.

**Success Moment:** First roadside inspection after FleetPilot adoption. The driver pulls up his digital DVIR history on the FleetPilot app. The inspector checks the logs on a tablet. Approved. Sarah gets a text: "Clean inspection." She hasn't stopped talking about it.

**Capabilities Revealed:** Driver profile management, multi-driver DQF expiry tracking, 30/60/90-day alert system, digital DVIR submission, compliance dashboard fleet-wide view, load dispatch with driver assignment, driver settlement automation, fleet-wide IFTA multi-truck reporting.

---

### Journey 3 — Carlos, the Growing Fleet Operator (Scale User — Compliance Crisis)

**Profile:** Carlos, 51, dry-van carrier with 14 trucks, full-time dispatcher, part-time bookkeeper. Outgrew TruckingOffice, tried Alvys, canceled after 6 months. Now using McLeod for dispatch (inherited) and Google Sheets for compliance. The February 2026 FMCSA digital DVIR mandate is creating real urgency — he has a BIT inspection scheduled for May.

**Opening Scene:** Carlos gets the notice that a BIT inspection is in 6 weeks. His compliance "system" is a shared Google Drive folder. He doesn't know how many of his 14 trucks have current paper DVIRs. He starts making calls. Two trucks are running expired DVIR log books. He can't pull records for the other 12.

**Discovery:** He searches "digital DVIR FMCSA compliant software" and finds FleetPilot. He calls the number listed. He has three specific questions: Does it do digital DVIRs the way FMCSA wants? Can I set it up before my BIT inspection? Is there a price that doesn't change when I add a truck?

**Onboarding:** Carlos sets up all 14 trucks and drivers over a weekend. His dispatcher takes over load management in FleetPilot on Monday. His bookkeeper connects QuickBooks. By day 5, all active trucks are submitting digital DVIRs. The compliance dashboard shows him, for the first time ever, that 2 drivers have CDLs expiring in the next 90 days.

**BIT Inspection:** The inspector arrives. Carlos runs the compliance dashboard on his laptop next to the inspector — all driver records, DVIR histories, and vehicle inspection logs in one place. The inspection takes 45 minutes instead of 3 hours. Zero violations.

**Capabilities Revealed:** Bulk fleet setup, multi-truck DVIR management, comprehensive DOT compliance dashboard, BIT/audit-ready record export, dispatcher load management, bookkeeper QuickBooks sync, flat-price model that doesn't change with fleet size.

---

### Journey 4 — Luis, the Driver (Secondary User — Mobile-First Compliance)

**Profile:** Luis, 29, company driver for Sarah's fleet. Not tech-averse but not eager to learn new apps. His old DVIR logbook is a spiral notebook in the cab door. He's gotten used to Sarah texting him assignments.

**Opening Scene:** Sarah tells Luis that starting Monday, he needs to do DVIRs on the FleetPilot app instead of the paper logbook. He's skeptical: "Is this gonna take longer?"

**First Day:** Luis opens the FleetPilot driver app. The DVIR walkthrough takes 3 minutes — same questions as the paper form, just tappable. He checks "No defects." He takes a photo of the front of the truck. He submits. Done. It's faster than the paper logbook.

**Load Assignment:** He gets a push notification at 7 AM: "New load assigned — Chicago → Louisville, depart 8:30 AM." He taps Accept. The load details, BOL, and broker contact are all visible. He doesn't have to call Sarah.

**Delivery:** Arrives in Louisville. Signs the BOL with the receiver. Photos the signed BOL with the app. Marks load delivered. He's done. Sarah sees it immediately in the web app.

**Capabilities Revealed:** Mobile DVIR submission with photo capture, push notification for dispatch assignment, load acceptance workflow, BOL photo capture and attachment, load status updates from driver.

---

### Journey Requirements Summary

| Journey | Key Capabilities Needed |
|---------|------------------------|
| Mike (owner-operator) | ELD/CSV import, IFTA autopilot, mobile load entry, BOL capture, auto-invoice |
| Sarah (fleet manager) | Multi-driver DQF tracking, expiry alerts, digital DVIR, fleet compliance dashboard, driver settlement |
| Carlos (growing fleet) | Bulk setup, audit-ready exports, multi-truck DVIR, QuickBooks sync, flat pricing |
| Luis (driver) | Mobile DVIR, push notifications, load accept/status, BOL photo |
| Bookkeeper (implicit) | QuickBooks sync, invoice exports, settlement reports |
| Broker (implicit) | Invoice receipt via email, POD/BOL document delivery |

---

## Domain-Specific Requirements

### Compliance & Regulatory

**IFTA (International Fuel Tax Agreement)**
- FleetPilot must calculate fuel tax liability per state/jurisdiction using: total miles driven in each jurisdiction, total gallons purchased per jurisdiction, and the current tax rate for each jurisdiction
- Quarterly reports must be generated in the format accepted by the operator's base state
- The state mileage tracking system must support toll-mile separation (non-taxable miles) — a documented failure mode in TruckingOffice and Motive
- IFTA calculations must be validated by a trucking-specialized CPA before public launch
- FleetPilot must display clear accuracy disclaimers and state-specific edge case warnings
- IFTA state rate tables must be updateable without code deployment (rule engine architecture)

**FMCSA Digital DVIR (February 2026 Mandate)**
- Digital DVIRs must be FMCSA-compliant per the February 2026 ruling (49 CFR Part 396)
- Required DVIR fields: date/time, vehicle ID, odometer reading, pre/post-trip designation, defect list (per FMCSA categories), driver signature/confirmation, mechanic certification (if defects found)
- DVIRs must be retained for a minimum of 3 months and accessible during roadside inspections
- Mobile DVIR must work offline with sync on reconnect (drivers operate in low-coverage areas)

**Driver Qualification File (DQF) — 49 CFR Part 391**
- Required tracking: CDL expiration, medical certificate expiration, annual review date, drug/alcohol test clearance, training certificate expirations
- Proactive alert system: 90-day, 60-day, 30-day warnings before any document expires
- DQF records must be exportable in a format suitable for BIT/DOT inspection presentation

**DOT Vehicle Compliance**
- Vehicle records must include: VIN, license plate, registration expiration, annual DOT inspection date, IFTA decal number
- Maintenance reminder system for oil changes, tire rotations, and annual inspections (configurable intervals)

### Technical Constraints

**Data Integrity**
- Compliance records (DVIRs, DQF documents, IFTA reports) must never be deleted by users — only archived
- All compliance records must have tamper-evident timestamps and audit logs
- Data must be retained for minimum regulatory retention periods (DVIRs: 3 months; DQF: duration of employment + 3 years)

**Offline Operation**
- Mobile DVIR submission must work without internet connectivity; queue and sync when reconnected
- Load status updates must work offline (drivers in remote areas, low-signal zones)
- Fuel purchase logging must work offline

**Multi-State Tax Jurisdiction**
- IFTA state rate tables must be current and updated each quarter before filing deadlines
- The system must handle states with varying fuel types (diesel, gasoline, alternative fuel) at different tax rates

### Integration Requirements

**ELD/CSV Import (MVP)**
- Support CSV export formats from: Motive (KeepTruckin), Samsara, BigRoad, Omnitracs
- Standardized import mapping that converts ELD mileage data to state-mile format for IFTA
- Error handling: flag unrecognized state codes, alert on mileage gaps, reject invalid date ranges

**QuickBooks Online (OAuth)**
- OAuth 2.0 connection to QuickBooks Online accounts
- Sync income entries: completed loads → QuickBooks income transaction
- Sync expense entries: fuel purchases → QuickBooks expense transaction
- Sync status dashboard showing last sync time, pending items, and error count

**Email/SMS Notifications**
- Transactional email (via SendGrid or equivalent): invoice delivery, DVIR confirmation, alert notifications
- SMS alerts (via Twilio or equivalent): critical compliance expiration warnings, dispatch assignments

### Risk Mitigations

**IFTA Calculation Accuracy**
- Risk: Incorrect calculations cause state penalties and loss of user trust
- Mitigation: CPA validation of calculation engine pre-launch; state-specific test suite; accuracy disclaimer in UI; support contact for state audit assistance

**Regulatory Rule Changes**
- Risk: FMCSA or IFTA rules change, breaking compliance
- Mitigation: IFTA rule engine updateable without code deploy; FMCSA advisory subscription; quarterly compliance review checklist

**Offline Sync Conflicts**
- Risk: Driver submits DVIR offline; dispatcher modifies the same record; conflict on sync
- Mitigation: Server-authoritative conflict resolution; offline changes flagged as pending; driver gets confirmation when sync completes

**ELD Format Changes**
- Risk: Motive or Samsara changes their CSV export format
- Mitigation: Column mapping config per ELD provider stored in database; format validation with human-readable error messages; manual entry fallback always available

---

## Innovation & Novel Patterns

### Detected Innovation Areas

**IFTA Autopilot at sub-$100/month price point**
No current tool at this price tier correctly automates IFTA mileage tracking with toll-mile separation. TruckingOffice ($20–$110/month) produces state-flagged errors. Motive (enterprise) can't separate toll miles. Manual calculation is the default for 350,000+ owner-operators. FleetPilot's ELD CSV import → state mileage calculation → quarterly report generation pipeline creates a functional moat at a price point the market has never seen.

**Regulatory Compliance as a Forcing Function**
The February 2026 FMCSA digital DVIR mandate converts a "nice to have" into a legally required purchase. FleetPilot is positioned to be the affordable compliance solution for the 91.5% of carriers (≤10 trucks) who cannot afford enterprise tools. This is the right product at the right regulatory moment.

**Community-Native Distribution**
The product is being built from community signal data (r/trucking, TruckersReport), priced for the community's budget, and will be distributed through the community's trust networks. This is not a traditional SaaS go-to-market; it is an owner-operator product built with owner-operator validation.

### Market Context

- AscendTMS free tier exists but is insufficient (no mobile app, dated UX, limited IFTA automation)
- Toro TMS ($19–$49/mo) is early-stage with limited integrations
- FleetFix (Show HN, free) validates direction but unsustainable
- No trucking TMS has run an AppSumo LTD deal — first-mover category creation
- Numeo AI, TruckSmarter Dispatch = AI layer emerging above TMS; FleetPilot occupies the operational OS below

### Validation Approach

- IFTA calculation accuracy validated by trucking CPA before launch
- Beta cohort of 20–30 operators from r/trucking community (free 90-day access for feedback)
- AppSumo deal validates price sensitivity and addressable LTD market in 14-day window
- 90-day go/no-go: 50+ paying subscribers actively using IFTA or compliance module

### Risk Mitigation

- IFTA accuracy disclaimer in UI; clear communication that users should verify against state notices
- Regulatory monitoring subscription (IFTA Inc. bulletins, FMCSA advisories)
- ELD CSV import as Phase 1 (lower complexity) vs. real-time ELD API as Phase 2 (higher complexity)

---

## SaaS B2B Specific Requirements

### Project-Type Overview

FleetPilot is a SaaS B2B product serving small fleet operators as primary accounts. The account structure is:
- **Account** = a trucking company (owner-operator or fleet)
- **Fleet** = the set of trucks and drivers belonging to an account
- **Users** = owner (admin), dispatcher, driver (mobile-only)
- **MVP:** Single-user accounts (owner = admin = dispatcher); driver mobile access
- **Phase 2:** Multi-user accounts with role-based access

### Technical Architecture Considerations

**Multi-tenancy**
- Strict tenant isolation at the database level — no cross-account data access under any circumstances
- All compliance records, IFTA data, load history, and driver records scoped to account ID
- Row-level security enforced at database layer (PostgreSQL RLS)

**Authentication & Authorization**
- MVP: Clerk or Auth0 for web authentication; JWT tokens for mobile API calls
- Driver mobile access: invite link + phone number verification (no password friction)
- Phase 2: Role-based access control — owner (full), dispatcher (loads + compliance view), driver (mobile app only)

**Subscription & Billing**
- Stripe for subscription management (monthly and annual)
- Plans: Solo ($29/mo, 1 truck), Fleet ($49/mo, up to 5 trucks), Pro ($99/mo, up to 20 trucks)
- LTD processing via Stripe one-time payments; AppSumo redemption code activation flow
- Plan enforcement: truck count limits enforced at truck creation; upgrade prompt when limit reached

**Mobile Architecture**
- React Native (iOS first, Android Phase 2)
- Offline-first for DVIR and load status updates: local SQLite queue, sync on connectivity
- Push notifications via Expo Push or Firebase Cloud Messaging

**API Design**
- RESTful API (Node.js/Express) consumed by both web and mobile clients
- All endpoints authenticated; no public endpoints except health check
- Webhook support for QuickBooks sync status and Stripe billing events

### Tenant Model

- Single-tenant account isolation
- Account created at sign-up; owner is the initial admin
- Truck and driver records are children of the account
- All IFTA, DVIR, and compliance records are scoped to the account

### Permission Matrix (MVP)

| Action | Owner/Admin | Dispatcher (Phase 2) | Driver |
|--------|-------------|---------------------|--------|
| Manage trucks/drivers | ✓ | — | — |
| Enter/view loads | ✓ | ✓ | View assigned |
| Submit DVIR | ✓ | — | ✓ |
| View compliance dashboard | ✓ | ✓ | — |
| Generate IFTA reports | ✓ | — | — |
| Create/send invoices | ✓ | — | — |
| Connect QuickBooks | ✓ | — | — |
| View settlement summary | ✓ | — | ✓ (own) |

### Implementation Considerations

**Tech Stack**
- Frontend: React + Tailwind (web dashboard)
- Mobile: React Native (iOS first)
- Backend: Node.js + Express + PostgreSQL
- Hosting: Railway or Render (auto-scaling, managed infra)
- Auth: Clerk (recommended) or Auth0
- Payments: Stripe
- Email: SendGrid or Postmark
- SMS: Twilio
- Maps/Mileage: Google Maps Distance Matrix API (state boundary calculation where ELD not connected)
- Storage: AWS S3 or Cloudflare R2 (BOL photos, DVIR attachments, document storage)

**Database Design Priorities**
- Row-level security for tenant isolation
- Immutable audit log for all compliance record changes
- State-indexed IFTA calculation cache (pre-computed per quarter, invalidated on new fuel/mileage entry)

---

## Project Scoping & Phased Development

### MVP Strategy & Philosophy

**MVP Approach:** Problem-Solving MVP — the minimum set of capabilities that solve the highest-urgency, highest-frequency pain points and justify a $49/month subscription or $149 LTD purchase without any other feature.

**Core MVP Hypothesis:** An owner-operator who can (1) stop manually calculating IFTA and (2) submit FMCSA-compliant digital DVIRs from their phone will pay $49/month without needing load management or invoicing.

**Resource Requirements:** Solo dev (or 2-person team) + trucking CPA for IFTA validation. Target build time: 5–6 weeks for MVP.

### MVP Feature Set (Phase 1 — Weeks 1–6)

**Core User Journeys Supported:**
- Owner-operator IFTA Autopilot (discover → trial → IFTA setup → quarterly report → convert)
- Fleet manager DOT compliance dashboard (onboard drivers → track expiry → receive alerts → digital DVIR)
- Basic load management (enter load → assign driver → track status → mark delivered → generate invoice)

**Must-Have Capabilities:**

| Module | Capabilities | Week Target |
|--------|-------------|-------------|
| IFTA Autopilot | Manual state mileage entry, fuel purchase logging, quarterly report PDF/CSV, ELD CSV import | 1–3 |
| DOT Compliance | Driver profile + DQF expiry tracking, 30/60/90-day alerts, digital DVIR mobile submission | 2–4 |
| Load Management | Load entry (origin/dest/rate/broker), driver assignment, status tracking (dispatched → in transit → delivered), BOL photo capture | 3–5 |
| Invoicing & Settlement | Auto-invoice from completed load, invoice PDF email, invoice aging, driver settlement calc (% or flat), settlement CSV export | 4–6 |
| QuickBooks Sync | OAuth connection, income sync (loads), expense sync (fuel), sync status dashboard | 5–6 |
| Auth & Billing | Sign-up, free trial, Stripe subscription + LTD, AppSumo redemption code | 1–2 |

### Post-MVP Features

**Phase 2 (Months 7–12):**
- ELD API integration (Motive, Samsara) — real-time GPS-based IFTA mileage (replaces CSV import)
- HOS compliance visualization
- DAT/Truckstop load board integration (browse + book loads)
- Android mobile app
- Multi-user accounts with role-based access (dispatcher + driver roles)
- AI rate negotiation assistant ("what should I charge for this lane?")
- Per-truck profitability dashboard

**Phase 3 (Year 2+):**
- Factoring company integrations (OTR Capital, Triumph Business Capital)
- Predictive maintenance alerts from vehicle data
- Driver recruitment and onboarding module
- Canadian IFTA province support
- Load board aggregation (DAT, Truckstop, direct shipper)
- White-label for freight brokers managing carrier networks
- Hotshot trucking vertical (flatbed/gooseneck) expansion

### Risk Mitigation Strategy

**Technical Risks**
- IFTA accuracy: Mitigated by CPA validation pre-launch + state-specific test suite. ELD CSV import (not real-time API) reduces Phase 1 complexity significantly.
- Offline DVIR: SQLite local queue with sync — proven React Native pattern. Conflict resolution: server-authoritative.
- QuickBooks OAuth: Intuit has mature OAuth 2.0 SDK; follow their developer docs exactly.

**Market Risks**
- AscendTMS improves free tier: Build IFTA + compliance depth that takes 12+ months to match; community lock-in via trust and data
- Toro TMS captures positioning: Move faster; AppSumo first-mover is decisive if executed Q3 2026
- AppSumo deal underperforms: Fallback is direct community sales (r/trucking + TruckersReport); LTD goal is 300+ (not 2,000)

**Resource Risks**
- Solo dev scope creep: Strict MVP boundary enforcement. If week 4 is behind, cut QuickBooks sync to Phase 2, not IFTA or DVIR.
- Absolute minimum launch: IFTA Autopilot + DVIR alone are sufficient for AppSumo pitch.

---

## Functional Requirements

### Account & Authentication Management

- FR1: Operators can create an account with email and password and start a free 14-day trial without a credit card
- FR2: Operators can connect their account to a Stripe subscription plan (Solo, Fleet, Pro) or activate a Lifetime Deal via redemption code
- FR3: Operators can invite drivers to the mobile app via invite link or phone number
- FR4: Operators can manage truck records (add, edit, deactivate) up to their plan's truck limit
- FR5: Operators can manage driver profiles including CDL number, contact information, and assigned trucks
- FR6: The system enforces truck count limits per subscription plan and prompts upgrade when limits are reached

### IFTA Autopilot

- FR7: Operators can log fuel purchases with date, state, gallons purchased, and total cost
- FR8: Operators can manually enter state mileage for each trip (origin state, destination state, miles in each state)
- FR9: Operators can import state mileage data from ELD CSV exports (Motive, Samsara, BigRoad, Omnitracs formats)
- FR10: The system automatically calculates IFTA fuel tax liability per jurisdiction per quarter using logged mileage and fuel data
- FR11: The system correctly separates toll miles from taxable miles in IFTA calculations
- FR12: Operators can generate a quarterly IFTA report for their base state in PDF and CSV formats
- FR13: Operators with multiple trucks can generate consolidated multi-truck IFTA reports per quarter
- FR14: The system displays the current quarter's IFTA summary (miles per state, gallons per state, estimated tax/credit) in the dashboard at all times
- FR15: Operators are notified when IFTA quarterly filing deadlines approach (30 days, 7 days before)

### DOT Compliance Dashboard

- FR16: Operators can record driver qualification file documents for each driver: CDL number + expiration, medical certificate expiration, annual review date, drug test clearance date, training certificate expirations
- FR17: Operators receive email and SMS alerts at 90 days, 60 days, and 30 days before any driver document expires
- FR18: Operators can record vehicle compliance records: registration expiration, annual DOT inspection date, IFTA decal, license plate
- FR19: Operators receive alerts for upcoming vehicle registration and inspection expirations
- FR20: Operators can view a fleet-wide compliance dashboard showing all drivers and trucks with color-coded status (green = current, yellow = expiring soon, red = expired or missing)
- FR21: Drivers can submit digital Driver Vehicle Inspection Reports (DVIRs) from the mobile app for pre-trip and post-trip inspections
- FR22: DVIRs capture all FMCSA-required fields: date/time, vehicle ID, odometer, pre/post-trip designation, defect category selection, driver confirmation, and photo evidence
- FR23: Drivers can submit DVIRs without internet connectivity; submissions queue locally and sync when connectivity is restored
- FR24: Operators can view the complete DVIR history for any driver or truck with filtering by date range
- FR25: Operators can export DVIR records and DQF records in a format suitable for DOT/BIT inspection presentation
- FR26: Operators can set maintenance reminders for each vehicle (oil change interval, tire rotation, annual inspection)

### Load Management

- FR27: Operators can create load records with: origin, destination, commodity type, load rate, broker name and contact, reference number
- FR28: Operators can assign a driver to a load and send a dispatch notification to the driver's mobile app
- FR29: Drivers can accept or acknowledge a load assignment from their mobile app
- FR30: Drivers can update load status from their mobile app: dispatched, in transit, arrived at pickup, loaded, in transit to delivery, delivered
- FR31: Drivers can capture BOL photos from their mobile app and attach them to the load record
- FR32: Operators can store rate confirmation PDFs against each load record (upload from web or mobile)
- FR33: Operators can view all active and historical loads in a sortable, filterable load board with status, driver, rate, and age

### Invoicing & Driver Settlements

- FR34: Operators can generate an invoice from a completed load in one click, pre-populated with load data (origin, destination, commodity, rate, load date)
- FR35: Operators can download invoice PDFs and email them directly to brokers from within the application
- FR36: Operators can track invoice payment status: draft, sent, paid, overdue
- FR37: Operators can view an accounts receivable aging report showing outstanding invoices by age bucket (0–30, 31–60, 61–90, 90+ days)
- FR38: Operators can calculate driver settlements for completed loads using either percentage of load rate or flat per-load amount
- FR39: Operators can export driver settlement summaries as CSV for QuickBooks manual import or accountant review

### QuickBooks Integration

- FR40: Operators can connect their QuickBooks Online account to FleetPilot via OAuth
- FR41: Completed and paid loads automatically sync to QuickBooks as income transactions
- FR42: Fuel purchases logged in FleetPilot automatically sync to QuickBooks as expense transactions
- FR43: Operators can view a QuickBooks sync status dashboard showing last sync time, pending items, and error details
- FR44: Operators can manually trigger a QuickBooks sync for any load or fuel record

### Notifications & Alerts

- FR45: Operators receive email and push notifications for: compliance document expiration warnings, invoice payment overdue alerts, IFTA filing deadline reminders
- FR46: Drivers receive push notifications for: new load assignments, DVIR submission reminders, personal document expiration warnings (CDL, medical cert)
- FR47: Operators can configure notification preferences (email, SMS, in-app, push) per alert type

---

## Non-Functional Requirements

### Performance

- Web dashboard loads (time to interactive) <3 seconds on a standard broadband connection
- Mobile app DVIR submission workflow completes within 60 seconds end-to-end (including photo capture and submission)
- IFTA quarterly report generation completes within 10 seconds for fleets of up to 20 trucks
- API response time (95th percentile) <500ms for all standard CRUD operations
- BOL photo upload completes within 5 seconds for images up to 10MB on LTE

### Security

- All data transmitted over TLS 1.2+ (HTTPS enforced, no HTTP fallback)
- All data at rest encrypted at the database layer (AES-256)
- Compliance records (DVIRs, DQF documents) have immutable audit logs with timestamps — no record deletion, only archiving
- Driver invite links expire after 72 hours and are single-use
- Stripe handles all payment card data — no PAN data stored in FleetPilot systems
- QuickBooks OAuth tokens stored encrypted; refresh token rotation enforced
- BOL photos and document attachments stored in private object storage (no public URLs)
- Session tokens expire after 30 days of inactivity; mobile JWT tokens expire after 90 days

### Reliability

- System uptime ≥99.5% measured monthly (downtime during trucking business hours is a compliance liability)
- Zero data loss tolerance for compliance records (DVIRs, DQF, IFTA reports)
- Database backups: daily full, hourly incremental; 30-day retention
- Offline DVIR and load status updates: local queue persists until sync completes; user receives confirmation
- IFTA calculation results are cached and versioned — any recalculation preserves prior results with audit trail

### Scalability

- System must support 1,000 concurrent active users without performance degradation (target year 1)
- Storage architecture must handle 10,000+ BOL photo attachments per month at average 5MB each
- IFTA calculation engine must process multi-truck fleet reports (up to 20 trucks, 12 months of data) within the 10-second performance target
- Database schema and query patterns designed for horizontal scaling without breaking tenant isolation

### Integration

- ELD CSV import must support Motive, Samsara, BigRoad, and Omnitracs export formats with documented column mapping per provider
- QuickBooks OAuth integration uses Intuit's production OAuth 2.0 flow with proper token refresh and error handling
- Stripe webhooks handle subscription lifecycle events (created, updated, canceled, payment failed) with idempotent processing
- Email delivery via transactional email provider with bounce handling and delivery tracking
- SMS delivery via Twilio with fallback to email if SMS fails

### Accessibility

- Web dashboard meets WCAG 2.1 AA standards for color contrast and keyboard navigation
- Mobile app supports iOS VoiceOver for core workflows (DVIR submission, load status update)
- All form labels and error messages are descriptive and accessible to screen readers
- Critical compliance alerts are communicated in text (not color-only indicators)

---

*PRD generated autonomously: 2026-04-19 | Based on 6+ weeks of community signal data + comprehensive market research + product brief | Ready for Architecture phase*
