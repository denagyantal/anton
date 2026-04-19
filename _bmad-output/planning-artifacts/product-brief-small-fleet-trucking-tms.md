---
stepsCompleted: [1, 2, 3, 4, 5]
inputDocuments:
  - ideas/shortlisted/small-fleet-trucking-tms.md
  - _bmad-output/planning-artifacts/market-research-small-fleet-trucking-tms.md
workflowType: 'product-brief'
lastStep: 5
project_name: small-fleet-trucking-tms
user_name: Root
date: '2026-04-19'
---

# Product Brief: Small Fleet Trucking TMS

<!-- Generated autonomously via BMAD product brief workflow using shortlisted idea + market research context -->

---

## Executive Summary

Small fleet trucking operators — the 500,000+ US carriers with fewer than 6 trucks and 350,000+ owner-operators who form the backbone of American freight — are running their businesses on a combination of Google Sheets, paper logs, and software that looks like it was designed in 2008. When it comes to managing loads, calculating IFTA fuel taxes, tracking DOT compliance documents, and settling driver pay, they are caught in a pricing trap: enterprise TMS tools cost $2,000+/month and require 3-year contracts, while budget tools at $20–$50/month are so limited they still require hours of manual work each quarter.

A February 2026 FMCSA ruling mandating digital Driver Vehicle Inspection Reports (DVIRs) has created an immediate regulatory forcing function — paper DVIRs are no longer compliant. Combined with IFTA's persistent quarterly compliance burden and the complete absence of a modern, affordable all-in-one TMS in the $49–$99/month range, this is the right moment to build the product the small fleet market has been waiting for.

**FleetPilot** (working name) is a web-and-mobile TMS built for 1–20 truck fleets: one app, one bill, no per-truck chaos. It automates IFTA fuel tax calculations, tracks DOT compliance deadlines, manages loads from dispatch to invoice, and replaces the spreadsheet stack that owner-operators currently maintain. Priced at $49/month for up to 5 trucks and $99/month for up to 20, with a $149 Lifetime Deal for AppSumo launch, it sits squarely in the validated white space where no modern competitor currently operates.

The market is validated (6+ weeks of continuous signal data), the distribution channel is free and active (r/trucking 300K+, TruckersReport 400K+), and the first-mover AppSumo LTD advantage is confirmed — no competing trucking TMS has run an AppSumo deal.

---

## Core Vision

### Problem Statement

Small fleet trucking operators (1–20 trucks) are forced to choose between two bad options: enterprise TMS platforms that cost $2,000–$5,000+/month and were built for large carriers, or budget tools that are so limited they require hours of manual spreadsheet work every week. In the gap between these extremes, 91.5% of US carriers — the owner-operators and small fleet managers who run the actual freight economy — are navigating load management, IFTA compliance, DOT documentation, and driver settlements with no tool built specifically for them at a price they can afford.

IFTA quarterly filings alone take 4–8 hours per operator per quarter, with government penalties for calculation errors. A February 2026 FMCSA ruling now mandates digital DVIRs, removing the paper-based fallback these operators have relied on. Failed BIT inspections from lost compliance documents are a documented, high-urgency pain point in the community. And the pricing options have only gotten worse: Samsara requires 3-year contracts and hardware costs on top of $27–33/vehicle/month; McLeod charges $2,000+/month; Truckbase starts at $290/month. The "affordable" options — TruckingOffice at $20–$110/month, AscendTMS with its free tier — are aging tools with no mobile apps, no QuickBooks sync, and IFTA automation that creates state-flagged errors.

### Problem Impact

**Financial impact**: IFTA calculation errors result in government penalties and audit costs. A single error can cost more than 12 months of a TMS subscription. At $700 startup + $585/month for enterprise tools, many owner-operators spend more on TMS than on insurance.

**Time impact**: 4–8 hours per quarter on IFTA alone. 30+ minutes per load for rate confirmation PDFs and invoice creation. Hours per week manually reconciling driver pay from spreadsheets.

**Compliance risk**: Failed DOT inspections from lost paper records. Expired CDLs, medical certificates, and training certs that no system is tracking. Now mandatory digital DVIRs that paper-only operations cannot comply with.

**Operational friction**: No single tool connects dispatch → load tracking → document management → IFTA calculation → invoicing → QuickBooks sync. Everything requires manual data re-entry between disconnected systems.

**Emotional impact**: Compliance anxiety is the dominant emotional state for owner-operators. DOT audit fear drives reactive software purchases but the current market offers no good answer in the $49–$99/month range.

### Why Existing Solutions Fall Short

| Solution | Price | Core Problem |
|----------|-------|-------------|
| McLeod / TMW | $2,000–$5,000+/mo | Built for large carriers; completely unviable for 1-truck operations |
| Samsara | $27–33/vehicle/mo + 3-yr contract | Hardware costs, rigid contracts, overkill for 5-truck outfits |
| Rose Rocket | $233+/mo + $5K implementation | Mid-market pricing, out of reach for micro-fleets |
| Truckbase | $290+/mo | Targets 10–100 trucks, not owner-operators |
| Alvys | $183+/mo | Volume-based, unpredictable pricing; poor support |
| TruckingOffice | $20–$110/mo | No QuickBooks integration, no load board connectivity, aging UI |
| AscendTMS | Free – $149/mo | Free tier insufficient; "interfaces feel like 2008"; limited IFTA automation |
| Toro TMS | $19–$49/mo | Early-stage, limited integrations, small user base |

**The critical gap**: No tool at the $49–$99/month price point offers all of the following simultaneously: modern web + mobile UI, IFTA auto-calculation with GPS-based state mileage, DOT compliance tracking (DQF expiry, DVIR, maintenance reminders), load management from dispatch to invoice, and QuickBooks sync. This combination does not exist in a modern, web-native package.

### Proposed Solution

FleetPilot is a web-and-mobile TMS built exclusively for 1–20 truck fleets. It is the "Owner-Operator OS" — a single tool that replaces the spreadsheet stack with an affordable, mobile-first platform that handles everything from dispatch to compliance to quarterly IFTA filing.

**Core capabilities:**
- **IFTA Autopilot**: GPS-based automatic mileage tracking by state, toll-mile separation, quarterly report generation — eliminating 4–8 hours of manual work and the risk of government penalties
- **DOT Compliance Dashboard**: Driver Qualification File (DQF) expiry tracking (CDLs, medical certs, training records), digital DVIR logs (FMCSA-compliant per February 2026 mandate), vehicle maintenance reminders
- **Load Management**: Load entry, dispatch, BOL/document capture (mobile photo → digitized), rate confirmation workflow, driver assignment
- **Invoicing & Settlement**: Automated invoice generation from completed loads, driver settlement calculation, accounts receivable tracking
- **QuickBooks Sync**: Automated sync of income and expense data — the #1 missing feature in budget TMS tools today

**Pricing**: $49/month for up to 5 trucks | $99/month for up to 20 trucks | No per-truck anxiety | No long-term contracts | Cancel anytime

**Launch strategy**: $149 Lifetime Deal on AppSumo as the IFTA Autopilot — the trucking category's first AppSumo deal, with distribution via r/trucking and TruckersReport communities.

### Key Differentiators

1. **IFTA Autopilot with GPS mileage**: Eliminates quarterly manual calculation entirely. Current tools either don't do it or do it wrong (TruckingOffice creates state-flagged errors; Motive can't separate toll miles). FleetPilot's GPS-based automatic state mileage tracking with toll-mile separation is a functional moat.

2. **February 2026 FMCSA digital DVIR compliance**: FleetPilot is built for the new regulatory reality. Paper DVIR workflows are now non-compliant. We are the affordable tool that makes operators compliant from day one — a legally mandatory, time-sensitive purchase driver.

3. **Flat pricing, no contracts**: The trucking software market's defining customer trauma is Samsara's 3-year contracts. FleetPilot competes on trust: month-to-month, flat rate, cancel anytime. $49/month covers 5 trucks. Period.

4. **Mobile-first, built for life on the road**: Owner-operators don't work from a desktop. Every critical workflow — load entry, DVIR, BOL capture, driver settlement approval — is optimized for a phone screen. Most competitors are desktop-first or Windows-only.

5. **Community-native distribution**: Priced for the community's budget, built for the community's pain, distributed through the community's channels (r/trucking, TruckersReport). The product roadmap is driven by community signal data (6+ weeks of continuous validation).

6. **AppSumo first-mover advantage**: No competing trucking TMS has run an AppSumo LTD deal. The trucking operator community is underserved on deal sites. Estimated 500–2,000 LTD sales at $149 = $74,500–$298,000 in launch revenue before a single MRR subscriber.

---

## Target Users

### Primary Users

#### Persona 1 — Mike, the Owner-Operator (1 truck)

**Background**: Mike is 44, has been driving for 20 years, bought his first truck 8 years ago. He's an independent owner-operator hauling refrigerated freight across 6 states. He runs his entire business from his phone and a laptop he keeps in the cab. His wife helps with the books on weekends. Every quarter, they spend a Sunday afternoon manually calculating IFTA from trip logs and fuel receipts — last quarter they got a penalty notice from one state for a mileage calculation error.

**Environment**: On the road 250+ days/year. Uses his iPhone for everything. Skeptical of expensive software ("I can do this on a spreadsheet"). Trusts recommendations from r/trucking and TruckersReport peers above all other sources.

**Current workflow**: Google Sheets for load tracking, a manila folder for paper DVIRs, TruckingOffice for IFTA (which he's frustrated with), separate invoices in Google Docs, QuickBooks manually updated monthly.

**Primary pains**:
- IFTA quarterly filing = "a manual nightmare" with real penalty risk
- Paper DVIR records scattered and hard to find during roadside inspections
- No single place to see all open invoices and outstanding broker payments
- Invoicing takes 30+ minutes per load

**What success looks like**: IFTA just works. He takes a photo of his DVIR on his phone and it's logged. Invoices generate automatically when a load is marked delivered. He never has to re-enter data between tools.

**Willingness to pay**: $19–$49/month or $99–$249 LTD. IFTA alone saves him $200+ in accountant time quarterly — ROI is immediate.

---

#### Persona 2 — Sarah, the Small Fleet Manager (5–10 trucks)

**Background**: Sarah is 38, started as a dispatcher at a mid-size carrier, then helped her uncle grow his 3-truck operation to 8 trucks over 5 years. She now manages day-to-day operations: dispatch, compliance, driver pay, and bookkeeping. She's the one who panics when a driver calls saying he can't find his medical certificate for a weigh station inspection.

**Environment**: Works from a home office and her phone. Has 3 drivers (the others are owner-operators leased to her). Tried AscendTMS but it "doesn't meet expectations." Currently using a combination of Google Sheets (dispatch), a compliance folder in Google Drive (DQF), and her accountant for IFTA.

**Primary pains**:
- Tracking expiration dates for CDLs, medical certs, and training records for 8 drivers manually
- Driver settlement calculations take hours every week (manually pulling from trip logs)
- IFTA for a multi-truck fleet with different ELD providers is a monthly headache
- No single view of fleet profitability (revenue per truck, fuel costs, deadhead miles)

**What success looks like**: A compliance dashboard that automatically alerts her 30/60/90 days before any driver document expires. Driver settlements calculated automatically from completed loads. IFTA filed with two clicks. Per-truck P&L visible at a glance.

**Willingness to pay**: $49–$149/month flat. She's currently paying $50/month for TruckingOffice and an accountant $200/quarter for IFTA — FleetPilot at $99/month replaces both.

---

#### Persona 3 — Carlos, the Growing Fleet Operator (10–20 trucks)

**Background**: Carlos is 51, runs a dry-van carrier with 14 trucks. He has a full-time dispatcher and a part-time bookkeeper. He outgrew TruckingOffice two years ago and tried Alvys but canceled after 6 months ("sales team made promises the product couldn't keep"). He's now using a combination of McLeod for dispatch (inherited from a driver who set it up) and Google Sheets for compliance tracking.

**Primary pains**:
- Scaling systems that worked at 5 trucks don't work at 14 — no single source of truth
- Compliance documentation is a patchwork of Google Drive folders and Post-it notes
- Digital DVIR mandate is creating real urgency — needs to replace paper DVIRs now
- Per-truck pricing at enterprise tools means his bill changes every time a truck is added or removed

**What success looks like**: One system his dispatcher can use for load management and his bookkeeper can use for settlements and invoicing. Compliance dashboard that shows all 14 trucks' document status in a single view. Flat monthly price that doesn't change when he adds a truck.

**Willingness to pay**: $99–$199/month. Currently spending more than this across disconnected tools.

---

### Secondary Users

**Drivers**: Interact with FleetPilot primarily through the mobile driver app — submitting digital DVIRs, accepting dispatch assignments, logging fuel purchases for IFTA, and capturing BOL photos. The driver experience needs to be frictionless; any tool drivers hate will get abandoned.

**Freight Brokers**: Receive dispatch notifications and load documentation from FleetPilot operators. Not direct users, but their workflow is impacted — rate confirmation PDFs, POD submissions, and invoice delivery all interface with broker operations.

**Bookkeepers/Accountants**: Secondary users who receive QuickBooks-synced data or exported reports. A cleaner QuickBooks sync means less manual reconciliation and fewer client support calls for accountants who work with trucking operators.

---

### User Journey

#### Owner-Operator (Mike) — Discovery to Value

**Discovery**: Mike sees a post in r/trucking from someone asking "what TMS do you use for IFTA?" — a peer recommends FleetPilot ("finally does IFTA right, no more state penalties"). He checks the replies, sees multiple positive comments, clicks the link.

**Onboarding**: Signs up for free trial (no credit card). Connects his ELD via API or uploads a CSV export. Enters his 3 most recent loads. IFTA dashboard auto-populates with state miles. He realizes it's correct without manual entry. This is his "aha!" moment.

**Core Usage**: Enters loads on his phone after each broker call. At the end of each run, he photos the signed BOL — it attaches to the load record automatically. When the load delivers, an invoice drafts automatically. Monthly IFTA summary is always current.

**Success Moment**: Quarter-end. Instead of a Sunday afternoon spreadsheet marathon, he opens FleetPilot, reviews the IFTA summary (2 minutes), and downloads the quarterly report. No penalty notice.

**Long-term Adoption**: FleetPilot becomes the single source of truth. He starts using the compliance dashboard to track his medical certificate and annual vehicle inspection. He tells his dispatcher buddy about it at a truck stop — new word-of-mouth referral.

#### Small Fleet Manager (Sarah) — Discovery to Value

**Discovery**: Her accountant mentions that a few trucking clients are using FleetPilot and it significantly reduced their IFTA prep time. She searches "TMS for small fleet with IFTA" and finds FleetPilot. The $99/month flat price is immediately appealing vs. the per-driver pricing she's been quoted elsewhere.

**Onboarding**: Sets up 8 driver profiles, enters CDL and medical cert expiration dates. Compliance dashboard immediately shows 2 drivers with certs expiring in 45 days — she didn't know. This is her first "aha!" moment.

**Core Usage**: Drivers submit digital DVIRs from the mobile app each morning. She monitors the compliance dashboard daily. Load management and driver settlement workflows replace the Monday morning spreadsheet process.

**Success Moment**: First roadside inspection where a driver pulls up their digital DVIR history on the FleetPilot app and the inspector approves it on the spot. She calls it "the easiest inspection we've ever had."

---

## Success Metrics

### User Success Metrics

**IFTA Compliance**
- **Target**: Users reduce IFTA quarterly prep time by 80%+ (from 4–8 hours to under 1 hour)
- **Measure**: In-app time tracking on IFTA workflow; user survey at quarter-end
- **Signal**: Zero state penalty notices for FleetPilot users vs. baseline rate in community

**DOT Compliance**
- **Target**: 100% of users have zero expired driver qualification documents within 90 days of onboarding
- **Measure**: Compliance dashboard coverage — % of DQF fields populated per fleet
- **Signal**: Reduced roadside inspection failures (user-reported)

**Time Savings**
- **Target**: Users save 5+ hours per week on load management, invoicing, and settlement workflows
- **Measure**: Self-reported in onboarding survey and 30-day check-in; activity metrics (loads created, invoices generated)

**Driver Adoption**
- **Target**: 80%+ of loads have digital BOL captured via mobile app within 60 days of fleet sign-up
- **Measure**: Mobile app engagement rate; % of loads with attached documents

---

### Business Objectives

**6-Month Targets (by October 2026)**
- 500+ paying subscribers (MRR or LTD activated)
- $25,000+ MRR or $75,000+ in LTD launch revenue (AppSumo)
- AppSumo deal launched and closed with 500+ LTD sales
- Community presence established in r/trucking and TruckersReport with organic product mentions

**12-Month Targets (by April 2027)**
- $10,000+ MRR from subscription revenue (post-LTD conversion)
- Net Revenue Retention > 100% (fleet expansion upsells)
- <5% monthly churn (sticky due to IFTA/compliance data lock-in)
- 50+ G2/Capterra reviews averaging 4.5+

**Strategic Objectives**
- Establish FleetPilot as the default recommendation in r/trucking and TruckersReport for small fleet TMS
- Build QuickBooks + ELD integrations (Motive, KeepTruckin) as retention moats
- Become the first and dominant trucking TMS with AppSumo category presence before any competitor reacts

---

### Key Performance Indicators

| KPI | Target (6mo) | Target (12mo) | Measurement Method |
|-----|-------------|--------------|-------------------|
| Monthly Recurring Revenue | $10K | $25K+ | Stripe |
| Total Active Fleets | 200+ | 500+ | Product database |
| AppSumo LTD Sales | 500+ | N/A (closed) | AppSumo dashboard |
| Monthly Churn Rate | <8% | <5% | Stripe + cohort analysis |
| IFTA Reports Generated | 1,000+ | 5,000+ | Product analytics |
| Mobile App DAU/MAU | >40% | >50% | App analytics |
| Net Promoter Score | 50+ | 60+ | In-app survey |
| Organic Community Mentions | 20+/mo | 50+/mo | Reddit/forum monitoring |
| G2/Capterra Reviews | 25+ | 75+ | Review platforms |
| Avg Revenue Per Fleet | $65/mo | $75/mo | Stripe |

**Leading Indicators** (weekly tracking):
- Free trial sign-up rate from community posts
- Trial-to-paid conversion rate (target: 30%+)
- IFTA dashboard activation rate (% of trials who connect data source)
- Mobile app download rate per web sign-up

---

## MVP Scope

### Core Features

The MVP is the "IFTA Autopilot + Compliance Essentials" bundle — the minimum that creates immediate, measurable value and justifies purchase before a single load is managed.

#### Module 1: IFTA Autopilot (Weeks 1–3)
- Manual state mileage entry with auto-calculation of fuel tax by state
- Fuel purchase logging (gallons, state, date, cost)
- Quarterly IFTA report generation (download PDF + CSV)
- Multi-truck support with consolidated reporting
- *Week 3+: ELD CSV import (Motive, KeepTruckin) for automatic mileage data*

#### Module 2: DOT Compliance Dashboard (Weeks 2–4)
- Driver profile management (name, CDL number, expiration date)
- Medical certificate expiration tracking with 30/60/90-day alerts
- Vehicle registration and annual inspection expiration tracking
- Digital DVIR submission via mobile app (FMCSA-compliant per February 2026 mandate)
- Email/SMS alerts for upcoming expirations

#### Module 3: Load Management (Weeks 3–5)
- Load entry (origin, destination, commodity, rate, broker contact)
- Driver assignment and dispatch notification
- Load status tracking (dispatched → in transit → delivered)
- Mobile BOL photo capture (attaches to load record)
- Rate confirmation PDF storage per load

#### Module 4: Invoicing & Settlements (Weeks 4–6)
- Auto-invoice generation from completed loads (load data → invoice in 1 click)
- Invoice PDF download and email to broker
- Invoice aging and outstanding payment tracking
- Basic driver settlement calculation (% of load rate or flat per-load)
- Settlement summary export (CSV) for QuickBooks manual import

#### Module 5: QuickBooks Integration (Weeks 5–6)
- OAuth connection to QuickBooks Online
- Auto-sync completed loads as income entries
- Auto-sync fuel purchases as expense entries
- Reconciliation dashboard showing sync status

**MVP Tech Stack** (chosen for speed and solo-dev feasibility):
- Frontend: React + Tailwind (web), React Native (mobile — iOS first, Android post-launch)
- Backend: Node.js / Express + PostgreSQL
- Hosting: Railway or Render (cost-effective, auto-scaling)
- Auth: Clerk or Auth0
- Payments: Stripe (subscriptions + LTD one-time)
- QuickBooks: Intuit OAuth API
- Maps/Mileage: Google Maps Distance Matrix API (for state mileage calculation where ELD not connected)

---

### Out of Scope for MVP

The following are validated future needs but explicitly excluded from MVP to maintain a buildable 5–6 week scope:

| Feature | Rationale for Deferral |
|---------|----------------------|
| ELD hardware integration (real-time GPS) | API complexity; start with CSV import instead |
| Load board integration (DAT/Truckstop) | High development cost; target post-launch as paid add-on |
| AI load-board matching / rate negotiation | Future competitive moat; not needed for initial IFTA/compliance use case |
| Android mobile app | Ship iOS first; Android in second sprint |
| Fleet GPS/tracking (live map) | ELD providers do this; don't compete with Samsara on hardware |
| IFTA GPS-based automatic mileage (real-time) | Phase 2 after ELD integration is built |
| Driver messaging / in-app chat | Nice-to-have; drivers can use text/phone for MVP |
| Multi-user / dispatcher roles | Single-user accounts sufficient for MVP; add team features in v2 |
| EDI/API integrations with brokers | Enterprise feature; not relevant for small fleet MVP |
| Factoring company integrations | Phase 2; add after core invoicing is proven |
| IFTA international (Canada IFTA) | US-only for MVP; Canada expansion post-traction |

---

### MVP Success Criteria

FleetPilot MVP is validated and ready for full investment when:

1. **Problem-Solution Fit**: 30+ paying users (not LTD) consistently using IFTA and compliance features monthly for 60+ days with <5% churn
2. **Community Validation**: 3+ organic mentions per week in r/trucking or TruckersReport recommending FleetPilot (unpaid, not solicited)
3. **LTD Success**: AppSumo deal generates 300+ LTD sales at $149 within the 14-day promotional window
4. **Retention Signal**: 70%+ of free trial users who complete IFTA setup convert to paid within 30 days
5. **Support Volume**: Support tickets under 2 per 10 users per month (indicator of onboarding quality and UX clarity)

**Go/No-Go Decision Point**: If at 90 days post-launch fewer than 50 paying subscribers (MRR + LTD) have adopted the IFTA or compliance module as primary workflow, pause and diagnose before expanding scope.

---

### Future Vision

FleetPilot's 2–3 year vision: the **back-office OS for every small carrier in America**.

**Phase 2 (Months 7–12)**: ELD Integration & AI Dispatch
- Motive (KeepTruckin) and Samsara API integration for automatic GPS-based IFTA mileage
- HOS (Hours of Service) compliance visualization
- DAT load board integration (search + post)
- AI rate negotiation assistant ("what should I charge for this lane?")
- Android mobile app
- Multi-user accounts (dispatcher + owner + driver roles)

**Phase 3 (Year 2)**: Fleet Intelligence
- Per-truck profitability dashboard (revenue, fuel, maintenance cost, driver pay per mile)
- Predictive maintenance alerts from vehicle data
- Factoring company integrations (direct invoice submission to OTR Capital, Triumph, etc.)
- Driver recruitment and onboarding module
- IFTA automation across Canada provinces

**Phase 4 (Year 3)**: Platform & Ecosystem
- Marketplace for freight insurance (embedded)
- Fuel card integration (fleet fuel discount programs)
- Load board aggregation across DAT, Truckstop, and direct shipper connections
- White-label for freight brokers managing carrier networks
- Potential expansion into hotshot trucking (flatbed/gooseneck — explicitly underserved per signal data)

**Long-Term Market Position**: The AscendTMS of the 2020s — but built for the mobile-first, compliance-burdened, regulation-disrupted small fleet reality of 2026 and beyond. 50,000+ active fleets within 5 years is achievable given 500,000+ potential customers and zero dominant modern competitor in the segment.

---

## Go-To-Market Strategy

### Launch Sequence

1. **Pre-launch (Weeks 1–4)**: Build in public. Post progress in r/trucking with genuine problems being solved. "Building a TMS that actually does IFTA right — here's what I've learned from your posts." Grow waitlist organically.

2. **Beta launch (Weeks 5–6)**: Invite 20–30 beta users from waitlist. Free 90-day access in exchange for feedback and reviews. Target active r/trucking contributors who've mentioned IFTA or compliance pain.

3. **AppSumo LTD (Month 3–4)**: Submit to AppSumo with "IFTA Autopilot for Small Fleets" as the hook. $149 LTD for 1–3 trucks, unlimited IFTA reports, full compliance dashboard. No competing trucking TMS on AppSumo — first-mover category creation.

4. **Community expansion (Month 4+)**: TruckersReport thread ("We built the TMS you've been asking for"), Facebook trucking groups, YouTube tutorial content ("How to file IFTA in 5 minutes with FleetPilot").

5. **Content marketing (Ongoing)**: Target "best TMS for small fleet," "IFTA software owner-operator," "how to track IFTA miles" — high intent, low competition keywords.

### Pricing Architecture

| Plan | Price | Trucks | Target User |
|------|-------|--------|------------|
| Solo | $29/mo | 1 truck | Owner-operator |
| Fleet | $49/mo | Up to 5 trucks | Small fleet |
| Pro | $99/mo | Up to 20 trucks | Growing fleet |
| LTD (AppSumo) | $149 one-time | 1–3 trucks | LTD buyers |
| LTD Pro (AppSumo) | $299 one-time | Up to 10 trucks | Larger LTD buyers |

All plans: No per-truck fees. No long-term contracts. Cancel anytime.

### Risk Mitigation

| Risk | Severity | Mitigation |
|------|----------|-----------|
| IFTA calculation accuracy (state penalties) | Critical | Partner with trucking CPA to validate calculations; clear accuracy disclaimer; support for state-specific rules |
| AscendTMS redesign / free tier improvement | Medium | Build IFTA + compliance depth that takes 12+ months to match; community lock-in |
| Toro TMS captures positioning | Medium | Move faster; AppSumo first-mover is decisive advantage if executed in Q3 2026 |
| ELD API complexity blocks IFTA automation | High | Launch with CSV import + manual entry; ELD API is Phase 2, not MVP |
| Tech adoption gap (older operators) | Medium | Mobile-first UX; YouTube walkthroughs; responsive community support in r/trucking |
| Regulatory changes (IFTA rules update) | Low | Monitor IFTA Inc. bulletins; build state rule engine that can be updated without code changes |

---

*Product Brief generated: 2026-04-19 | Based on 6+ weeks of signal data (2026-03-04 through 2026-04-19) + comprehensive market research | Ready for PRD phase*
