---
stepsCompleted: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
inputDocuments:
  - ideas/shortlisted/trucking-owner-operator-tms.md
  - _bmad-output/planning-artifacts/research/market-trucking-owner-operator-tms-research-2026-10-25.md
  - _bmad-output/planning-artifacts/brief-trucking-owner-operator-tms.md
workflowType: prd
date: 2026-10-26
author: Root
classification:
  projectType: saas_b2b
  domain: transportation_logistics
  complexity: high
  projectContext: greenfield
---

# Product Requirements Document — LoadTrack

**Author:** Root
**Date:** 2026-10-26
**Product:** LoadTrack — Owner-Operator Transport Management System

---

## Executive Summary

LoadTrack is a mobile-first, full-stack Transport Management System (TMS) priced at $49/month flat for 1–5 truck owner-operators — the 922,854-carrier segment every enterprise TMS vendor ignores and every budget tool has failed. The pricing gap it occupies ($49–$183/month for modern UX + IFTA auto-calculation + dispatch + invoicing + driver settlements) is currently unoccupied: no product in 2026 combines these capabilities at this price point.

**Primary acquisition hook:** IFTA quarterly fuel tax filing is a non-discretionary compliance requirement (penalties up to $16,864 per violation) that currently takes owner-operators 6+ hours per quarter manually. LoadTrack auto-calculates state-by-state miles from load data and generates a submission-ready IFTA PDF in minutes. Operators buy for IFTA, stay because the full workflow connects.

**Immediate competitive context:** All budget-tier TMS tools (TruckingOffice, ITS Dispatch, TruckLogics) were built 2008–2015, are documented as broken in 100+ Capterra reviews each, and have received no meaningful UX updates since. The next pricing tier ($183–$290/month) is designed for 10–100 truck fleets. Three 2025–2026 entrants (DispatchMVP, Spotter.ai, EnvioHQ) validate the market without yet capturing leadership. TruckSmarter's $16M a16z/Sequoia raise for an adjacent owner-operator product confirms top-tier institutional validation of the same demographic.

**Build target:** 4–6 weeks to MVP. **Revenue target:** 300 paying customers at $49/month = $14,700 MRR within 6 months.

### What Makes This Special

The core insight: owner-operators don't have a "dispatch software problem" — they have a quarterly IFTA compliance crisis that happens to be solvable with the same data they already log for dispatch. By unifying load logging, state mileage tracking, and quarterly tax calculation into a single entry flow, LoadTrack turns a 6-hour manual process into a 3-minute tap. Every load entered builds the IFTA report automatically.

Three compounding differentiators no competitor at this price offers simultaneously:
1. **IFTA auto-calculation from load data** — primary acquisition hook; non-discretionary compliance creates genuine urgency at each quarterly deadline (January, April, July, October)
2. **Flat $49/month for 1–5 trucks** — eliminates per-truck pricing anxiety; one predictable bill vs. $229/month fragmented stack
3. **Data lock-in via compliance history** — 3+ years of quarterly IFTA records and load history are essentially impossible to migrate; creates natural retention moat without feature lock-in

## Project Classification

- **Project Type:** SaaS B2B (B2SMB — small/micro-business)
- **Domain:** Transportation & Logistics (FMCSA-regulated, IFTA-governed)
- **Complexity:** High — IFTA tax calculation accuracy is legally consequential; payment processing required; financial data for operational businesses
- **Project Context:** Greenfield — no existing codebase

---

## Success Criteria

### User Success

**Primary success signal — IFTA time savings (the "aha!" moment):**
- Owner-operators complete quarterly IFTA report preparation in under 15 minutes, down from 6+ hours manually
- Users who achieve this become advocates and post in community forums; users who don't churn within the first quarter

**First-week activation milestones (leading indicators of retention):**
- User enters ≥3 loads within first 7 days (active onboarding)
- User logs ≥1 fuel purchase within first 7 days (IFTA pipeline connected)
- User generates ≥1 invoice from a load entry within first 7 days (invoicing adoption)
- User views IFTA summary screen at least once in trial period (core feature discovered)

**Ongoing user success metrics:**
- Load entry completes in under 3 minutes on mobile — if longer, adoption drops
- Invoice payment cycle under 14 days from load completion to payment received
- Zero disputed driver settlements per month per user (settlement accuracy is the primary trust signal for multi-truck operators)
- IFTA calculation errors: 0 reported in production (accuracy is non-negotiable for compliance software)

### Business Success

**90-Day Milestones:**
- 100 paying customers (MRR: $4,900)
- Free trial-to-paid conversion ≥ 20%
- IFTA feature adoption ≥ 70% of active users (confirms primary value proposition resonating)
- Net Promoter Score ≥ 50 (community-driven product requires strong advocacy)

**6-Month Milestones:**
- 300 paying customers (MRR: $14,700)
- Monthly churn rate ≤ 3%
- LTD direct launch completed: ≥200 LTD sales at $149 via community channels ($29,800+ one-time revenue)
- First 25 verified Capterra/G2 reviews published

**12-Month Milestones:**
- 600 paying customers (MRR: $29,400; ARR: $352,800)
- AppSumo launch completed after community LTD validation
- ≥50 organic community mentions per month across TruckersReport, Reddit, Facebook groups
- Top 3 Google ranking for "IFTA software owner operator"

### Technical Success

- IFTA calculation accuracy: zero production errors in quarterly tax totals (validated by trucking CPA pre-launch)
- System availability: 99.5% uptime — downtime during IFTA quarterly deadline weeks (January, April, July, October) is critical failure
- IFTA rate table currency: updated within 30 days of each quarterly rate change
- Mobile load entry: full load creation workflow completable on a smartphone in under 3 minutes

### Measurable Outcomes

| Outcome | Metric | Target | Timeframe |
|---------|--------|--------|-----------|
| IFTA time savings | Minutes to complete quarterly report | < 15 min | Per quarter |
| Revenue | MRR | $14,700 | 6 months |
| Retention | Monthly churn | ≤ 3% | Ongoing |
| Acquisition | Trial-to-paid conversion | ≥ 20% | Ongoing |
| Feature adoption | % users generating IFTA reports | ≥ 70% | Per quarter |
| Advocacy | NPS | ≥ 50 | Post-quarter survey |
| Community | Organic mentions per month | ≥ 25 | 6+ months |

---

## Product Scope

### MVP — Minimum Viable Product (Phase 1, Weeks 1–6)

**MVP Philosophy:** Problem-solving MVP. The product must demonstrably replace the IFTA spreadsheet before it earns the right to ask for $49/month. Every other feature is supporting cast.

**Essential user journeys supported by MVP:**
1. Solo owner-operator logs a load → fuel purchases → generates IFTA quarterly PDF
2. Owner-operator creates and sends an invoice with Stripe payment link
3. Micro-fleet owner (2–5 trucks) runs driver settlement from completed loads

**MVP must-have capabilities:**
- Load log with mobile entry (pickup, delivery, rate, miles, status)
- State mileage auto-estimation from routing API with manual override
- Fuel purchase logging by state
- IFTA quarterly summary and PDF report generation
- Carrier invoice auto-generation from load data with Stripe payment link
- Invoice status tracking and automatic payment reminders
- Driver settlement calculation and statement generation
- Dispatch board calendar view with load status
- PWA — mobile-first, works on any device without app store installation
- Standard auth: email/password + Google OAuth
- Subscription billing: $29/month (1 truck), $49/month (1–5 trucks)
- Lifetime deal purchase option: $149 (1–2 trucks), $199 (3–5 trucks)
- 30-day free trial, no credit card required

### Growth Features — Phase 2 (Months 2–4)

- **ELD integration** (Motive, Samsara, KeepTruckin APIs) — automatic mileage-by-state import; eliminates manual state entry; high-value but adds API partnership complexity
- **FMCSA 2026 compliance dashboard** — DQF expiry tracking, medical certificate alerts, drug/alcohol clearinghouse reminders, DVIR logs, maintenance schedule tracking; first-mover window for 11 rules effective February 2026
- **QuickBooks/Xero sync** — load revenue and driver settlement data export to accounting; CSV covers MVP needs

### Vision — Phase 3 (Months 4–8)

- **Load board integration** (DAT, Truckstop.com API) — book loads directly; requires partner API negotiation
- **Factoring integration** — automated AR factoring for operators who factor receivables
- **AI dispatch suggestions** — route optimization, load matching, rate benchmarks
- **Direct IFTA e-filing** — electronic state submission via EDI; requires state-by-state relationships

---

## User Journeys

### Journey 1: Marcus — Solo Owner-Operator, Quarterly IFTA Crisis

Marcus is 41, runs one truck on the I-40 corridor out of Tennessee. He's been using TruckingOffice for two years because it's $20/month and he doesn't know what else to do. Every January, April, July, and October, he spends most of a Saturday manually pulling fuel receipts from his glove box and cross-referencing them with his load log in a spreadsheet to calculate what he owes each state for IFTA.

It's now October 14. Q3 IFTA is due October 31. Marcus posts in r/trucking: "Anyone use something that doesn't make IFTA a whole day off the road?" He gets 8 replies. Three mention LoadTrack. He clicks the link.

**Discovery → trial:** Marcus signs up for the free trial during a rest stop. No credit card asked. He enters 5 loads from his phone — pickup, delivery, rate, miles. Each takes about 2 minutes. He notices the "State Miles" section auto-populated from a map estimate. He corrects two states manually — took 30 seconds. He logs his last 6 fuel receipts by state.

**The aha moment:** Day 3 of his trial, Marcus taps "Q3 IFTA Summary." A table appears: miles by state, fuel by state, net tax owed per jurisdiction. He downloads the PDF. He looks at it for 10 seconds, then posts in r/trucking: "I just did my IFTA in 8 minutes. I want my Saturdays back."

**Purchase:** He converts to the $149 LTD before his trial ends. The price is approximately what he'd spend on TruckingOffice for 7 months. He's never doing IFTA manually again.

**Long-term:** Marcus's Q3 2026 IFTA is in LoadTrack. So is Q4 2026. By Q2 2027, he has 9 months of fuel records and load history in the system. Migrating is not a casual decision.

*Journey reveals requirements for:* Load entry, state mileage auto-calc + manual override, fuel purchase logging, IFTA quarterly PDF, mobile-first UX, trial → LTD conversion flow.

---

### Journey 2: Diane — Micro-Fleet Owner, ITS Dispatch Replacement

Diane runs 3 trucks and 2 drivers in Texas. She uses ITS Dispatch ($65/month), separate IFTA software ($29/month), Motive ELDs (3 × $35/month = $105/month), and QuickBooks ($30/month). Total: $229/month.

Last month, ITS Dispatch lagged for 4 hours during a busy freight week. She missed two load confirmations. Conservative estimate: $2,400 in lost business.

Her husband (her part-time dispatcher) spends 3–4 hours every quarter manually re-entering load mileage from ITS Dispatch into the IFTA software because the tools don't connect. Driver settlements are calculated in Excel, emailed as PDFs, and re-disputed monthly because the calculations are sometimes wrong.

**Discovery:** Diane's in Facebook "Owner-Operators United" when she sees a post — "Finally switched from ITS Dispatch. LoadTrack does dispatch + IFTA + settlements for $49 flat. My husband doesn't do IFTA weekends anymore." She checks LoadTrack. Sees $49/month flat for up to 5 trucks. That's $180/month less than her current stack, before accounting for ITS Dispatch's $2,400 incident cost.

**Trial:** Diane sets up 3 trucks and 2 driver profiles. She enters a week's worth of loads — 14 loads across 3 trucks. She runs a driver settlement. The statement generates in under a minute — flat rate per load, automatically calculated from the loads assigned to each driver. She exports to PDF, compares against her last Excel settlement. No errors.

**The operational switch:** By day 5, her husband has stopped using the IFTA software. Load mileage is entering LoadTrack's state calculator from every dispatch. At the end of Q4, they'll tap "Generate IFTA Report" and it will just work.

**Purchase:** Diane subscribes to the $49/month plan. She's saving $180/month on tools she no longer needs. The ROI conversation takes 30 seconds.

*Journey reveals requirements for:* Multi-truck management, driver profiles, multi-load dispatch board, driver settlement calculation from load assignments, settlement PDF generation, IFTA auto-calc from multi-truck dispatch data.

---

### Journey 3: Dispatcher Edge Case — Independent Dispatcher Sub-Niche

Ray is an independent dispatcher who manages loads for 4 owner-operator clients. He doesn't drive — he books loads for clients through DAT and tracks their status. His current tool is a shared Google Sheet with each client's loads, broker contacts, and invoice status. It works until it doesn't — one client has 80 loads in Q3 and the sheet is a mess.

A thread in r/TruckDispatchers: "I want something fast: loads, rates, status, and simple invoicing per carrier. I don't need 20 reports I never use." That's Ray's exact pain.

**LoadTrack trial:** Ray creates one account per client (each has their own DOT/MC number and pays their own subscription). Under his dispatcher access, he can view load status across the 4 carriers he manages from a single dashboard. Invoice status per carrier. Outstanding payments per broker. He books loads into each carrier's dispatch board — the carriers confirm from their phones.

**Value:** Ray's clients see their invoices go out automatically when loads are delivered. Ray's Saturday morning "invoice chase" goes away. One client gets a Stripe payment 6 days faster than usual.

*Journey reveals requirements for:* Multi-carrier dispatcher view, per-carrier invoice status tracking, dispatcher access mode.

---

### Journey 4: New User Onboarding Failure (Edge Case)

Sandra just bought her first truck. She has no dispatch software, no IFTA software, nothing. She signs up for LoadTrack, enters her truck, and tries to add a load. She gets confused by the state mileage section — she doesn't know she's supposed to let it auto-estimate first, then correct.

She abandons the load entry form after 3 minutes. She doesn't come back.

**What this reveals:** Onboarding must guide first-time load entry explicitly. State mileage auto-estimation must be the default with a visible "Looks right? You can adjust" prompt. First load should be completable in under 2 minutes without reading any documentation.

*Journey reveals requirements for:* Guided onboarding flow, auto-estimate-first UX for state mileage, progressive disclosure (don't show all fields at once), empty-state guidance in dispatch board.

---

### Journey Requirements Summary

| Capability | Source Journey |
|------------|---------------|
| Load entry with mobile-first UX | Marcus, Sandra |
| State mileage auto-estimate + manual override | Marcus, Sandra |
| Fuel purchase logging by state | Marcus |
| IFTA quarterly summary + PDF | Marcus, Diane |
| Carrier invoice auto-generation + Stripe link | Marcus, Ray |
| Invoice status tracking + payment reminders | Ray, Marcus |
| Multi-truck + driver profile management | Diane |
| Driver settlement calculation from loads | Diane |
| Dispatch board calendar view | Diane, Ray |
| Multi-carrier dispatcher view | Ray |
| Guided first-load onboarding | Sandra |
| Trial → LTD conversion flow | Marcus |

---

## Domain-Specific Requirements

### IFTA (International Fuel Tax Agreement) Compliance

IFTA is administered jointly by 48 US states and 10 Canadian provinces. Every commercial motor vehicle operating in 2+ jurisdictions must file quarterly. Non-compliance penalties: up to $16,864 per violation; repeat violations result in license suspension.

**Calculation accuracy requirements:**
- IFTA tax rate tables must be sourced from IFTA Inc. or an equivalent licensed data provider; manual maintenance is not acceptable
- Rate tables must be updated within 30 days of each quarterly effective date (January 1, April 1, July 1, October 1)
- State mileage auto-estimation (from routing API) is an approximation aid; the product must display a visible disclaimer that operators are responsible for verifying state miles before filing
- IFTA calculations must be validated by a licensed trucking CPA before production launch
- IFTA report PDF must include all required fields per IFTA Procedures Manual (jurisdictions, miles, gallons, taxable gallons, tax rate, net tax owed/refund)

**Audit trail requirements:**
- All fuel purchase entries (date, gallons, state, price) must be retained for 4 years per IFTA audit requirements
- All load mileage entries and IFTA quarterly submissions must be timestamped and user-attributed
- Quarterly IFTA reports must be downloadable at any time after generation (immutable record)

### FMCSA Regulatory Context

The February 2026 FMCSA rule wave (11 new rules) creates urgent compliance need. MVP explicitly defers the compliance dashboard to Phase 2 but the data architecture must not block it:
- Driver qualification file (DQF) fields (CDL number, medical certificate expiry) must be capturable in driver profiles from MVP launch
- Vehicle records must support maintenance date fields for Phase 2 DVIR/maintenance dashboard

### Financial Data Handling

Owner-operators use LoadTrack records for tax preparation (Schedule C, quarterly estimated taxes, state commercial vehicle taxes beyond IFTA). This creates implicit trust requirements:
- Load revenue and settlement data must be exportable to CSV in a format compatible with QuickBooks import (Phase 1) and direct QuickBooks sync (Phase 2)
- Invoice records must retain full history including payment dates, amounts, and broker/shipper contact info for 7 years (IRS standard business record retention)

### Payment Processing

Invoice payment links via Stripe create PCI-DSS scope implications:
- LoadTrack does not store, process, or transmit raw card data — Stripe Checkout handles this
- Stripe integration must use Stripe.js / hosted payment pages; no card data touches LoadTrack servers
- ACH transfers via Stripe require customer bank account authorization; this is handled by Stripe's Plaid integration

---

## Innovation & Novel Patterns

### Detected Innovation Areas

**Pattern 1 — Unified load→IFTA data pipeline (primary innovation)**
Every TMS tool requires separate IFTA software because dispatch tools have never treated state mileage as a first-class data field. LoadTrack treats every load entry as an IFTA data collection event. The routing API call that estimates state miles happens at load creation time, not at IFTA filing time. This inverts the workflow: IFTA prep becomes passive accumulation, not quarterly panic.

No tool at any price tier in the owner-operator segment has made IFTA calculation passive in this way. Legacy tools use manual state mile entry. New entrants (DispatchMVP, Spotter.ai) focus on AI dispatch without touching IFTA.

**Pattern 2 — Compliance data as retention moat**
Unlike feature-based retention (users stay because they like the UI), LoadTrack's retention mechanism is compliance data accumulation. Historical IFTA records — the exact miles each truck ran in each state in each quarter — are legally required to be retained for 4 years. Once 3+ years of records exist in LoadTrack, migration is a legal and operational risk, not just a workflow inconvenience.

This is a validated SaaS moat pattern (QuickBooks applies it for accounting data; Mindbody applies it for fitness studio records) applied to a segment where no one has thought to implement it.

### Validation Approach

- Pre-launch: CPA validation of IFTA calculation engine against 3 known-correct quarterly filings from test operators
- Beta launch: Recruit 20 operators from r/trucking and TruckersReport who are willing to run one IFTA quarter in LoadTrack alongside their existing tool, then compare outputs before switching
- Production: Zero-error IFTA calculation is the hard success criterion; any reported calculation error is a P0 incident

### Risk Mitigation

- **IFTA rate table staleness:** License rate data from IFTA Inc. ($200–$500/year); automated quarterly update workflow; rate table version displayed on IFTA summary screen so users can verify currency
- **Routing API mileage estimation inaccuracy:** The routing API provides an approximation for state mile split based on the load route; the manual override is the primary accuracy mechanism; disclaimer language on IFTA summary screen ("Verify state miles before filing")
- **Competing on accuracy vs. legacy tools:** Legacy tools require fully manual state mile entry — their "accuracy" is user-accuracy; LoadTrack's auto-estimate + override is more accurate for most loads, less accurate only for users who deliberately take non-standard routes

---

## SaaS Platform Requirements

### Multi-Tenancy Model

- Account isolation: each owner-operator or fleet owner is a separate tenant with no data visibility across tenant boundaries
- Dispatcher access model: independent dispatchers can be granted access to one or more carrier accounts; access is revocable by the carrier account owner
- Tenant data: all load, IFTA, invoice, and settlement data is tenant-scoped; no cross-tenant queries except for dispatcher aggregation view (dispatcher's own clients only)

### Subscription & Licensing Model

- **Starter tier:** $29/month — 1 truck, unlimited loads, all features
- **Pro tier:** $49/month — 1–5 trucks, unlimited loads, dispatcher access, all features
- **LTD Starter:** $149 one-time — 1–2 trucks, lifetime access, quarterly IFTA rate table updates included
- **LTD Pro:** $199 one-time — 3–5 trucks, lifetime access, quarterly IFTA rate table updates included
- **Free trial:** 30 days, no credit card, full Pro-tier access; converts to Starter by default at trial end
- Billing via Stripe Subscriptions (monthly) and Stripe Payment Links (LTD one-time)
- LTD holders receive annual IFTA rate table updates indefinitely (funded by MRR base)

### Permission Model

| Role | Load Entry | Invoice Actions | IFTA Reports | Driver Settlements | Account Settings |
|------|-----------|-----------------|--------------|-------------------|-----------------|
| Account Owner | Full | Full | Full | Full | Full |
| Dispatcher | Full | View + Send | View | View | Read-only |
| Driver (future Phase 2) | View assigned loads | None | None | View own | None |

### Platform Architecture Considerations

- **Progressive Web App (PWA)** — no native app required for MVP; installable on iOS and Android from browser; offline-capable for load entry during poor connectivity (sync when reconnected)
- **Web app:** React/Next.js frontend; mobile-responsive breakpoints optimized for 375px+ screens
- **State management:** Load entry form must work offline and sync when connectivity restored; IFTA calculation happens server-side (source of truth)
- **Routing API:** Google Maps Routes API or equivalent for state mileage estimation; API call triggered at load save, not at form entry
- **PDF generation:** Server-side PDF generation for IFTA reports and invoices; files stored in object storage (S3/R2); downloadable for 4+ years
- **Email:** Transactional email (invoice delivery, payment reminders, settlement statements) via SendGrid or Postmark

---

## Project Scoping & Phased Development

### MVP Strategy & Philosophy

**MVP Approach:** Problem-solving MVP — the product must demonstrably solve the IFTA quarterly compliance pain before any other feature matters. An owner-operator who completes their first IFTA quarterly report in LoadTrack is retained. An owner-operator who never uses the IFTA feature churns.

**Resource requirements:** 1 full-stack developer (React/Next.js + Node.js/PostgreSQL) + 1 part-time designer for mobile UX. 4–6 weeks to MVP. External: trucking CPA for IFTA validation ($500–$1,500 one-time).

### MVP Feature Set (Phase 1)

**Core user journeys supported:**
1. Solo operator: log load → log fuel → generate IFTA quarterly report
2. Solo/micro-fleet: generate invoice from load → send with Stripe payment link
3. Micro-fleet: run driver settlement from completed loads

**Must-have capabilities:**
- Load entry: pickup, delivery, rate, broker, miles, status, POD photo
- State mileage: routing API auto-estimate + manual override per state
- Fuel log: date, gallons, price per gallon, state purchased
- IFTA quarterly summary: miles/state, fuel/state, net tax owed/refund
- IFTA report PDF download (standard format)
- Invoice auto-generation from load data
- Invoice send via email with Stripe payment link
- Invoice status tracking (Sent / Viewed / Paid)
- Payment reminder emails (14 days, 21 days past due)
- Driver settlement: flat rate, % of gross, or per-mile; weekly statement PDF
- Dispatch board: calendar view, load status, truck/driver assignment
- PWA: mobile-first, installable, offline load entry with sync
- Auth: email/password + Google OAuth
- Subscription billing: Starter ($29/mo), Pro ($49/mo), LTD ($149/$199)
- 30-day free trial, no credit card

### Post-MVP Features

**Phase 2 (Months 2–4):**
- ELD integration (Motive, Samsara APIs) — automatic mileage-by-state import
- FMCSA 2026 compliance dashboard (DQF, medical card, drug clearinghouse, DVIR)
- QuickBooks/Xero direct sync (CSV export bridges MVP gap)

**Phase 3 (Months 4–8):**
- Load board integration (DAT, Truckstop.com)
- Factoring integration
- AI dispatch suggestions (route + rate optimization)
- Direct IFTA e-filing via state EDI

### Risk Mitigation Strategy

**Technical risks:**
- *IFTA calculation accuracy* — CPA validation pre-launch + beta testing with 20 operators; hardest risk to recover from if wrong at launch
- *Routing API mileage estimation accuracy* — routing API gives approximate state miles; manual override is the accuracy escape valve; estimation is for convenience, filing accuracy is user's responsibility (disclosed)
- *PWA offline sync* — implement optimistic UI with conflict resolution for load entries created offline; test on throttled 3G before launch

**Market risks:**
- *DispatchMVP/Spotter.ai captures SEO before launch* — launch fast; IFTA is the differentiator neither focuses on; community distribution (Reddit, TruckersReport) establishes brand before paid SEO competes
- *TruckSmarter $16M raise enters this price segment* — TruckSmarter is AI-focused and app-store native; LoadTrack's web-first + LTD appeal + IFTA depth is differentiated even if they enter the segment

**Resource risks:**
- *Routing API cost at scale* — Google Maps Routes API costs $5–10 per 1,000 requests; at 300 users × 30 loads/month = 9,000 requests/month = $45–90/month; acceptable; cache routes for same origin-destination pairs
- *IFTA rate table update operations* — quarterly update workflow must be automated or semi-automated; manual update is acceptable at launch, automation required before 500+ users

---

## Functional Requirements

### Load & Dispatch Management

- FR1: Owner-operators can create a load entry with pickup location, delivery location, load rate, broker/shipper name, estimated miles, and initial status
- FR2: Owner-operators can assign a load to a specific truck and driver from their account
- FR3: Owner-operators can update load status through the lifecycle: Pending → Dispatched → In Transit → Delivered → Invoiced → Paid
- FR4: Owner-operators can attach up to 5 photos per load from mobile camera or file upload (for POD capture)
- FR5: Owner-operators can generate a rate confirmation PDF from a load entry
- FR6: Owner-operators can view all active and scheduled loads on a dispatch board calendar view filtered by truck and date range
- FR7: Owner-operators can create a new load from the dispatch board with minimal required fields (full details optional at creation)

### IFTA Compliance & Fuel Tax

- FR8: The system auto-estimates state-by-state mile split for a load based on pickup and delivery locations using a routing API
- FR9: Owner-operators can manually override the per-state mile values for any load after auto-estimation
- FR10: Owner-operators can log fuel purchases with date, gallons, price per gallon, and state of purchase
- FR11: The system calculates a quarterly IFTA summary showing total miles per jurisdiction, total gallons purchased per jurisdiction, taxable gallons, current IFTA tax rate per jurisdiction, and net tax owed or refund
- FR12: Owner-operators can download a quarterly IFTA report as a PDF in standard submission format
- FR13: Owner-operators can view historical IFTA quarterly reports for all previous quarters in their account
- FR14: The system maintains and applies current quarterly IFTA fuel tax rates for all 48 IFTA member jurisdictions (48 US states + 10 Canadian provinces)
- FR15: The system displays the IFTA rate table effective date on the quarterly summary so operators can verify currency before filing

### Invoicing & Payment

- FR16: Owner-operators can auto-generate a carrier invoice from a completed load entry (broker name, load details, rate, payment terms pre-populated)
- FR17: Owner-operators can send an invoice via email with an embedded Stripe payment link for ACH or card payment
- FR18: Owner-operators can track invoice status: Draft → Sent → Viewed → Paid → Overdue
- FR19: The system sends automated payment reminder emails at 14 days and 21 days past invoice due date
- FR20: Owner-operators can view an invoice aging dashboard showing all outstanding invoices, sorted by days outstanding
- FR21: Owner-operators can mark an invoice as paid manually (for checks or wire transfers outside Stripe)

### Driver Settlements

- FR22: Owner-operators can configure a driver pay rate: flat amount per load, percentage of gross load rate, or rate per mile
- FR23: The system calculates a driver settlement from all loads completed by that driver in a specified date range
- FR24: Owner-operators can generate a driver settlement statement PDF showing all loads, miles, and calculated pay for the period
- FR25: Owner-operators can email a settlement statement to a driver
- FR26: Owner-operators can export settlement data to CSV for payroll processing

### Fleet & Account Management

- FR27: Owner-operators can register with email/password or Google OAuth
- FR28: Account owners can add up to 5 trucks to their account with truck details (make, model, year, VIN, license plate, state)
- FR29: Account owners can add driver profiles with name, contact information, CDL number, and medical certificate expiry date
- FR30: Account owners can grant dispatcher access to their account for a named external dispatcher
- FR31: Independent dispatchers can access all carrier accounts they have been granted access to from a single login

### Reporting & Export

- FR32: Owner-operators can export load history to CSV with all load fields for a selected date range
- FR33: Owner-operators can export IFTA fuel purchase log and state mileage data to CSV for accounting use
- FR34: Owner-operators can view a financial summary showing gross revenue, paid invoices, outstanding invoices, and overdue invoices for a selected period

### Subscription & Onboarding

- FR35: New users can start a 30-day free trial with full Pro-tier access and no credit card required
- FR36: Users can subscribe to Starter ($29/month, 1 truck) or Pro ($49/month, 1–5 trucks) monthly plans via Stripe
- FR37: Users can purchase a Lifetime Deal (Starter LTD $149, Pro LTD $199) with one-time Stripe payment
- FR38: Subscribed users can cancel at any time; access continues through the end of the paid period
- FR39: First-time users are guided through a first-load creation flow with contextual prompts at each field
- FR40: The system displays progressive guidance in empty states (empty dispatch board, empty fuel log, empty IFTA summary) with clear next-action prompts

---

## Non-Functional Requirements

### Performance

- FR-N1: Load entry form saves and returns to dispatch board within 2 seconds on a 4G mobile connection
- FR-N2: IFTA quarterly summary generates and displays within 10 seconds for accounts with up to 500 loads per quarter
- FR-N3: IFTA report PDF downloads within 15 seconds of request
- FR-N4: PWA initial load completes within 3 seconds on 4G for returning users (cached assets)
- FR-N5: Dispatch board calendar renders all loads for the current month within 2 seconds

### Security

- FR-N6: All data encrypted in transit via TLS 1.3 minimum
- FR-N7: All database data encrypted at rest (AES-256 or provider-managed equivalent)
- FR-N8: Stripe Checkout and Stripe.js handle all payment card data; LoadTrack servers never receive or store raw card data (PCI-DSS scope minimized)
- FR-N9: Tenant data isolation enforced at the database query layer; no cross-tenant data access outside dispatcher's granted carrier list
- FR-N10: All authenticated API endpoints require valid session token; session tokens expire after 30 days of inactivity
- FR-N11: Google OAuth implementation uses PKCE flow; no client secrets exposed to browser

### Reliability

- FR-N12: System maintains 99.5% uptime monthly, with planned maintenance windows scheduled outside IFTA quarterly deadline weeks (first two weeks of January, April, July, October)
- FR-N13: IFTA calculation results are deterministic — the same input data always produces the same output; no floating-point rounding errors in tax totals (use decimal arithmetic for all currency and tax calculations)
- FR-N14: Load entries created while offline (PWA) are stored locally and synced within 60 seconds of connectivity restoration; no data loss on connectivity interruption
- FR-N15: Invoice and IFTA PDF files are stored in object storage with versioning; files remain accessible for a minimum of 7 years post-account creation

### Scalability

- FR-N16: System handles 1,000 concurrent active users during IFTA quarterly deadline weeks without performance degradation beyond stated targets
- FR-N17: Routing API calls for state mileage estimation are cached by origin-destination pair for 30 days; duplicate routes do not trigger additional API calls
- FR-N18: Database schema and query patterns support horizontal read scaling via read replicas when active user count exceeds 2,000

### Compliance & Data Retention

- FR-N19: All load entries, fuel purchases, IFTA filings, invoices, and driver settlements are retained for a minimum of 7 years from creation, regardless of subscription status (account data retained for 2 years after cancellation, then deleted on user request)
- FR-N20: Fuel purchase and IFTA data meets IFTA audit retention requirements (4 years minimum per IFTA Procedures Manual)
- FR-N21: The application is usable at WCAG 2.1 AA compliance level for primary flows (load entry, IFTA summary, invoice send) — owner-operators work in physical environments with variable lighting and gloved hands; contrast and tap target size matter

---

*PRD completed: 2026-10-26*
*Based on: Product Brief (2026-10-26), Market Research (2026-10-25), Signal History 87→93/105 over 4 evaluations (2026-10-06 to 2026-10-26)*
*Next workflow: Architecture → Epics & Stories → Sprint Planning → Implementation*
