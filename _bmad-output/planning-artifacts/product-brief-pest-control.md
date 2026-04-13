---
stepsCompleted: [1, 2, 3, 4, 5, 6]
inputDocuments:
  - ideas/shortlisted/pest-control-route-compliance-tracker.md
  - _bmad-output/planning-artifacts/research/market-pest-control-route-compliance-tracker-research-2026-04-12.md
workflowType: product-brief
lastStep: 6
date: '2026-04-13'
author: Root
project_name: PestLog
---

# Product Brief: PestLog — Pest Control Route & Compliance Platform

<!-- Completed through automated BMAD product brief workflow -->

## Executive Summary

PestLog is a compliance-first, mobile-first pest control business management platform built for independent operators with 1–10 technicians. It fills a clear, legally mandated gap in the $26.1B US pest control industry: no affordable tool ($49–79/month range) cleanly delivers route optimization + EPA-compliant chemical application logging + automated customer reminders + QuickBooks sync for small pest control operators.

The core differentiator is regulatory in nature. Chemical application logging is required under FIFRA (Federal Insecticide, Fungicide, and Rodenticide Act) and amplified by state-level pesticide regulations in all 50 states — this is not an optional feature. The dominant SMB player, GorillaDesk ($4M ARR, 3,000+ companies), handles scheduling and invoicing but explicitly lacks the chemical compliance layer. FieldRoutes (acquired by ServiceTitan) has drifted enterprise at $199+/month. PestPac was built in the 1990s and uses 15-month lock-in contracts and data-hostage practices. No affordable tool addresses this mandatory compliance need.

PestLog launches at a $99 LTD targeted at the "GorillaDesk user who needs compliance" — converting the compliance fear (paper binders getting lost = legal liability) into action. The post-LTD subscription tiers are $49/month (Solo: 1 technician), $79/month flat (Team: up to 10 technicians, no per-tech fees), and $149/month (Commercial: FDA/USDA-overlay compliance for restaurant/food service accounts). The north star metric is compliance reports generated per month — measuring both depth of adoption and delivery of the core legal value.

---

## Core Vision

### Problem Statement

Independent pest control operators (PCOs) — the 32,720+ US companies that make up the backbone of the $26.1B pest control industry — face a critical compliance liability that no affordable software solves. Under FIFRA and state pesticide regulations, every pesticide application must be documented: product name, EPA registration number, application rate, applicator license number, GPS location, date and time of application. This documentation must be retained for 2–7 years (depending on state) and made available on demand to regulatory inspectors.

Today, most small PCOs maintain these records in physical binders stored in their trucks or offices. These binders get lost, damaged, or are inaccessible when a state agriculture department inspector shows up. The software tools that exist either don't address compliance at all (GorillaDesk, QuoteIQ, Jobber) or are priced out of reach for 1–10 tech shops (FieldRoutes at $199+/month, PestPac at $300+/month with 15-month contracts).

Meanwhile, the scheduling side of the business — recurring service routes, automated reminders, invoicing — also lacks an affordable, purpose-built solution. Generic field service tools (Jobber, Housecall Pro) aren't pest-specific. GorillaDesk is the best SMB option for scheduling but charges $549/month to unlock route optimization (the Pro plan) and offers no compliance depth. The result: a 32,720+ company industry with two critical unmet needs and no single affordable tool addressing both.

### Problem Impact

**Compliance Liability:**
- Operators maintaining paper chemical logs face regulatory audit risk. A lost binder or missing records can result in fines, license suspension, or civil liability in case of pesticide misapplication incidents.
- EPA's 2024 tightened AEZ (Application Exclusion Zone) rules require documented in-field compliance. Digital records are increasingly the only practical way to demonstrate compliance during post-application inspections.
- State-specific requirements (7-year retention in California, detailed DEC reporting in New York, annual renewal tracking in Louisiana) are impossible to manage consistently on paper across a growing technician fleet.

**Operational Inefficiency:**
- Operators with 2–5 technicians manage routes via phone calls, text messages, and spreadsheets. Adding a second technician creates scheduling chaos that consumes owner-operator time disproportionately.
- Route inefficiency is a direct cost: a technician driving 30 extra minutes per day = $2,000–4,000/year in wasted labor and fuel for a typical route.
- Manual invoicing and payment tracking for recurring monthly/quarterly customers adds 4–6 hours/week of administrative overhead for a typical small operator.

**Software Market Frustration:**
- FieldRoutes billing surprises ($1,300 unexpected charges confirmed in community) and data-hostage practices ($500 to export 6 fields of customer data) have created a large, highly motivated cohort of migration-ready operators.
- PestPac's 1990s-era interface combined with 15-month lock-in contracts and per-module add-on pricing makes switching conversations easy.
- GorillaDesk's Pro plan ($549/month for 10 routes) represents a 10x pricing jump from their entry tier ($49/month) with no compliance included at any tier.

### Why Existing Solutions Fall Short

| Competitor | Target Segment | Price | Chemical Compliance | Route Optimization | Critical Weakness |
|-----------|---------------|-------|--------------------|--------------------|-------------------|
| **GorillaDesk** | SMB (1–10 techs) | $49–$549/mo | Basic tracking only — no EPA reports | Pro plan only ($549+/mo) | Compliance gap is publicly known and unaddressed; route optimization is 10x the entry price |
| **FieldRoutes** (ServiceTitan) | Mid to Enterprise | $199+/mo | Pesticide tracking available | Yes (advanced) | $199+ is too expensive for sub-10-tech shops; post-acquisition drift toward enterprise; billing/data practices burn customers |
| **PestPac** (WorkWave) | Enterprise | $300+/mo | Yes (comprehensive) | Yes (RouteOp) | Built in the 1990s; archaic UI; 15-month contracts; data hostage ($500 export fee); 50%+ unused features |
| **QuoteIQ** | SMB (GorillaDesk defectors) | $29.99+/mo | None | Yes (AI-powered) | Not pest-specific; zero compliance features; general FSM DNA |
| **Briostack** | Mid-market | Custom | Moderate | Yes | Custom pricing excludes SMBs; not transparent |
| **Jobber / HCP** | Multi-industry SMB | $39–$250/mo | None | Limited | Not pest-specific; no chemical logging; no compliance features |
| **PestBoss** | SMB (monitoring) | $59–$190/mo | Partial | No | Limited route features; not EPA-standard compliant |

**The unoccupied position:** Low price ($49–79/month flat, no per-tech fees) + Deep chemical compliance + Route optimization = not owned by any competitor.

### Proposed Solution

**PestLog** is a compliance-first pest control business management platform built from the ground up for independent PCOs with 1–10 technicians. The core design principle: chemical compliance logging is the *primary* workflow, not an afterthought buried in settings.

1. **Chemical Application Log (EPA-Standard)** — One-tap field entry capturing product name, EPA registration number, application rate/concentration, applicator license number, GPS coordinates, and timestamp. Generates EPA-compliant PDF reports on demand. The fastest path from application to compliant record in the industry.

2. **Recurring Service Route Engine** — Purpose-built for pest control's recurring service model (monthly, quarterly, bi-monthly treatments). Visual schedule builder, automated re-treatment reminders, skip-week rules for holidays, and customer treatment history cards.

3. **Route Optimization (Included at Flat Price)** — Daily route builder with map view, drive-time estimates between accounts, and geographic clustering. Not locked behind a premium tier — included in the Team plan at $79/month flat.

4. **State-Specific Compliance Templates** — NPMA-33 form builder, Florida WDO inspection reports, California fumigation logs, state-specific applicator license renewal reminders. A compliance library that takes 12–18 months to replicate and creates defensible category ownership.

5. **Mobile-First Technician UX** — Offline-capable iOS and Android apps designed for use while in the field (not at a desk). Chemical log entry takes under 30 seconds. GPS-tagged, timestamped, and synced when connectivity returns.

6. **Customer Communication Automation** — Automated SMS and email appointment reminders, treatment completion notifications, and re-treatment scheduling prompts. Replaces manual text messages to customers.

7. **QuickBooks Online Sync + Stripe Payment Processing** — Invoicing auto-generated on job completion; QuickBooks sync eliminates double-entry; online payment via Stripe.

8. **Treatment Site Maps** — GPS-tagged bait station placement diagrams on property maps. Visual compliance documentation that paper binders cannot replicate.

### Key Differentiators

| Differentiator | Why It Matters | Competitive Advantage |
|---------------|---------------|----------------------|
| **Chemical compliance as primary UX** | Legal requirement under FIFRA and state regs — this is the #1 liability for PCOs who skip it | No competitor at SMB pricing makes compliance the lead feature; GorillaDesk explicitly lacks it |
| **State-specific compliance templates** | FL WDO, CA fumigation, NPMA-33, NY DEC reporting — these are legally distinct requirements by state | Compliance library is a 12–18 month moat; no competitor has this at SMB pricing |
| **Route optimization at flat price** | GorillaDesk charges $549/mo for route optimization; QuoteIQ includes it at $29.99 but with zero compliance | Compliance + route optimization in one tool at $79/mo flat is genuinely new |
| **No per-tech fees** | GorillaDesk and FieldRoutes scale pricing per technician — punishes growth | "One flat price as your team grows" is a direct anti-GorillaDesk/FieldRoutes positioning |
| **Pesticide license renewal reminders** | State licenses must be renewed (CA: every 2 years; IL: every 3 years) — missing from all tools | Simple but high-value: "We remind you before your license expires" — no competitor does this |
| **Treatment site maps** | Bait station placement documentation is a best practice and increasingly a compliance expectation | Visual property diagrams with GPS-tagged bait points — unique at this price point |
| **Offline-first mobile app** | Field service areas often have spotty connectivity | Chemical entries auto-sync when back in range — no compliance gap from connectivity issues |
| **Regulatory forcing function positioning** | Fear-based selling that's genuinely justified: paper binders = real legal risk | "The pest control software that keeps you compliant" resonates with risk-aware operators |

---

## Target Users

### Primary Users

#### Persona 1: Marcus — The Growing Owner-Operator

**Profile:**
- Age 43, owns "Safeguard Pest Solutions" in suburban Atlanta, GA
- Started solo 6 years ago, now has 3 technicians (2 full-time, 1 part-time)
- Services 85 recurring residential accounts (mostly monthly and quarterly treatments)
- Revenue: ~$28K/month | Gross margin: ~42%
- Still runs routes 2–3 days/week while managing the business
- Currently uses GorillaDesk for scheduling/invoicing, paper binders for chemical logs

**Current Pain:**
- Maintains chemical application binders in a filing cabinet — two were damaged in a truck flood last spring. He's aware this is a liability but hasn't found a tool that fixes it.
- GorillaDesk is good for scheduling, but the $549/month Pro plan for route optimization feels steep. He plans routes manually each morning using Google Maps.
- Spends 45 minutes every Sunday reviewing next week's routes and texting technicians.
- Has had two state agriculture department inspections in 5 years — both required him to produce paper records under stress.
- Not on any list for GorillaDesk's compliance features because "they don't have it."

**Success Vision:**
- Technicians log each chemical application on their phone at the moment of application — GPS, EPA reg number, product, amount — in under 30 seconds.
- An inspector calls; Marcus pulls up the compliance report for any date range, any technician, any property — and emails it as a PDF in 60 seconds.
- Route optimization runs automatically each morning based on the day's scheduled accounts.
- His GA applicator license renewal reminder fires 90 days before expiration.

**Decision Trigger:** Gets a spot inspection notice from the Georgia Department of Agriculture and spends a stressful afternoon pulling together paper records. That afternoon he searches for "pest control compliance software."

#### Persona 2: Diana — The Solo Operator Ready to Scale

**Profile:**
- Age 36, runs a one-person residential/commercial pest control business in Phoenix, AZ
- 32 recurring accounts; manages everything via spreadsheet + phone + a paper notebook
- Revenue: ~$8K/month | Wants to hire her first technician within 6 months
- Found pest control through a career change; takes compliance seriously (completed all CE credits)
- Price-conscious: has looked at GorillaDesk but hesitant because she knows she'll hit the scheduling wall when she adds a tech

**Current Pain:**
- Tracks chemical applications in a spiral notebook. She's diligent about it, but it's not searchable or reportable.
- Manually texts 30+ customers every month to confirm their upcoming treatment.
- Knows her AZ applicator license expires in 8 months and has it written on a sticky note on her monitor.
- Scared to hire because adding a technician will mean coordinating routes she currently manages from memory.

**Success Vision:**
- A $99 lifetime deal means she pays once, complies forever, and scales without worrying about per-tech pricing.
- Her first technician can log their own chemical applications — she gets a consolidated compliance dashboard.
- Customer appointment reminders go out automatically — she reclaims 3 hours/week of manual texting.
- AZ license renewal reminder fires in her app 90 days before expiration.

**Decision Trigger:** Sees a ProductHunt post for PestLog with the headline "The pest control software that keeps you compliant." Recognizes her notebook as the liability it is. Buys the LTD same day.

#### Persona 3: Carlos — The Technician (End User, Not Buyer)

**Profile:**
- Age 28, works as a licensed technician for Marcus at Safeguard Pest Solutions
- Has been doing pest control for 4 years; holds a GA Applicator license (Category 7A)
- Comfortable with smartphones but frustrated with apps that require too many taps
- Currently texts Marcus each morning to confirm route; logs chemicals on Marcus's paper form at end of day (sometimes forgets)

**Current Pain:**
- Logging chemicals at end of day from memory is stressful — he sometimes can't remember exact quantities applied at 3pm when he's writing up at 5pm.
- Doesn't know his own daily schedule until Marcus texts him in the morning.
- Navigates between accounts using Apple Maps manually — no integrated routing in the current system.

**Success Vision:**
- Opens PestLog at 7:30am and sees his optimized route for the day: 6 accounts, sequenced for minimum drive time, with navigation built in.
- After each treatment, taps to open the chemical log pre-filled with the service address, selects the product from a dropdown (populated with his license's approved chemicals), enters the amount, and submits — 25 seconds total.
- Never worries about end-of-day memory recall for compliance entries.

### Secondary Users

#### Commercial Account Manager (for Commercial Compliance Tier)

- Manages pest control contracts for restaurants, food processing facilities, or healthcare buildings
- Needs audit-ready compliance reports on demand for FDA/USDA inspections
- Interacts with PestLog via a client portal to pull treatment history reports
- Will pay a premium ($149/month tier) for FDA/USDA-overlay compliance documentation

#### State Agricultural Inspector

- Not a buyer, but the audience for compliance reports
- Needs: date-range chemical application report, product/EPA reg number, applicator license verification, GPS-tagged property location
- PestLog's one-click PDF export is designed to satisfy an inspector's request in under 60 seconds

#### Accountant / Bookkeeper

- Receives QuickBooks sync or exported invoicing data
- Does not interact with PestLog's compliance layer
- Values: clean recurring invoice records, payment status, route-based job history

### User Journey

**Discovery (Week 0):**
Marcus gets a Georgia Department of Agriculture inspection notice and spends a panicked afternoon pulling together paper chemical records. That night he searches "pest control compliance software" and finds PestLog through a ProductHunt post shared in the "Pest Control Business Owners" Facebook group. He reads the headline: "The pest control software that keeps you compliant — EPA chemical logs, route optimization, $79/month flat." He clicks through.

**Evaluation (Day 1–3):**
Marcus compares PestLog against GorillaDesk (already using; lacks compliance) and FieldRoutes (tried once; $200+/month with billing horror stories). He reads the compliance features page, sees the NPMA-33 form builder and GA-specific compliance templates. He starts a 14-day trial.

**Onboarding (Day 3–5):**
Marcus imports his 85 recurring accounts from a GorillaDesk CSV. PestLog's migration tool maps customer addresses, service frequencies, and route assignments. He creates technician accounts for his 3 techs and sends them the app download link via text. Each tech installs PestLog in under 3 minutes; the chemical product library is pre-seeded with the most common GA-approved pest control products.

**First Field Use (Day 5–7):**
Carlos opens the app Monday morning and sees his 6 accounts for the day, optimized for drive time, with navigation integrated. After treating the first account for German cockroaches, he taps "Log Treatment," selects "Advion Cockroach Gel Bait" from the dropdown (pre-populated with EPA registration number 100-1484), enters 4 grams applied, the app GPS-stamps the location and timestamps the entry. Done in 22 seconds. No paper form to fill out at the end of the day.

**Aha Moment (Week 2):**
Marcus receives a follow-up call from the state inspector requesting records for 3 specific properties over the past 6 months. He opens PestLog's compliance report generator, filters by property address and date range, and emails a PDF in 40 seconds. He calls the inspector back within 5 minutes. Inspector is satisfied. Marcus texts his wife: "We need this forever."

**Long-Term Value (Month 2+):**
Route optimization is saving each technician an average of 22 minutes/day (confirmed in the dashboard). Customer reminder automation has reduced inbound "when are you coming?" calls by 60%. Marcus adds a 4th technician — no pricing change (flat $79/month). His GA applicator license renewal reminder fired 90 days before expiration; he renewed without any scramble. He refers PestLog to two operators in his NPMA regional chapter.

---

## Success Metrics

### User Success Metrics

| Metric | Target | Measurement |
|--------|--------|-------------|
| Chemical log adoption rate | 80%+ of completed jobs have a compliant chemical log entry | Jobs with log / total completed jobs |
| Log entry time | <30 seconds per chemical application entry | In-app timing from open to submit |
| Compliance report generation | 90%+ of operators generate at least 1 compliance report/month | Report generation events per active account |
| Route optimization time savings | 15+ minutes/day per technician (reported) | In-app drive-time comparison (before/after route optimization) |
| Customer reminder adoption | 70%+ of accounts have automated reminders enabled | Accounts with reminders configured / total accounts |
| Admin time reduction | 40%+ reduction reported by owner-operators | Before/after survey at 30-day check-in |
| Tech onboarding time | <5 minutes from invite to first chemical log entry | Time from invite sent to first completed log |

### Business Objectives

**Phase 1 — LTD Validation (Months 1–3):**
- Validate product-market fit with real pest control operators
- Confirm that mobile chemical logging UX is faster than paper for field technicians
- Seed G2/Capterra reviews from LTD cohort
- Revenue target: $29,700–$49,500 from 300–500 LTD sales ($99/unit)
- Primary goal: get operators to generate their first EPA compliance report and say "this replaces the binder"

**Phase 2 — Subscription Growth (Months 4–12):**
- Transition from LTD acquisition to recurring subscription
- Build compliance template library (state-specific: FL, CA, IL, NY, TX, WA)
- Establish organic community presence in "Pest Control Business Owners" Facebook group and r/pestcontrol
- Target: $10,000 MRR by Month 12 (125+ subscribers at $79/month average)
- Achieve 4.5+/5 average rating on G2/Capterra with compliance-focused reviews

**Phase 3 — Commercial Compliance Expansion (Year 2):**
- Launch $149/month Commercial tier with FDA/USDA-overlay compliance for restaurant/food service accounts
- Target: $30,000 MRR by end of Year 2
- Expand compliance library to 15+ states
- Introduce AI upsell coach at point-of-service (while-I'm-here technician prompts)

### Key Performance Indicators

| KPI | Month 3 Target | Month 12 Target | Year 2 Target | Measurement |
|-----|---------------|----------------|--------------|-------------|
| LTD Sales | 300 units | 500 units (close LTD) | N/A | Sales tracking |
| Monthly Subscribers | 30 | 125 | 400 | Billing system |
| Monthly Recurring Revenue | $2,000 | $10,000 | $30,000 | Stripe dashboard |
| Compliance Reports Generated | 500/month | 5,000/month | 15,000/month | App analytics (**north star**) |
| Monthly Churn Rate | <5% | <3% | <2% | (Cancelled / Total) per month |
| G2/Capterra Reviews | 20+ | 100+ | 300+ | Review platform |
| Average Review Rating | 4.0+ | 4.5+ | 4.5+ | Review averages |
| Trial-to-Paid Conversion | 15%+ | 20%+ | 25%+ | Funnel analytics |
| Customer Acquisition Cost | <$75 | <$50 | <$40 | Marketing spend / new customers |
| Net Promoter Score | 30+ | 40+ | 50+ | In-app NPS at 30/90 days |

**North Star Metric: Compliance reports generated per month** — this is the irreplaceable core value of PestLog. High report volume means operators are using the chemical logging feature at depth and converting paper compliance to digital. It is also the primary stickiness driver: once 2+ years of chemical records live in PestLog, migrating away is painful.

---

## MVP Scope

### Core Features

**1. Chemical Application Log (Must Have — Core Differentiator)**
- Field entry form: product name (searchable from EPA product database), EPA registration number (auto-populated), application rate/amount, concentration/dilution, applicator license number (saved per technician), GPS stamp (auto), timestamp (auto), property address (linked to customer record), technician signature
- Entry completes in under 30 seconds for experienced users
- Offline entry with automatic sync when connectivity returns
- One-click EPA-standard compliance report PDF export (filterable by date range, technician, property, chemical)
- 2-year record retention baseline; configurable up to 7 years for CA compliance
- Chemical product library pre-seeded with 500+ most common US pest control products with EPA reg numbers

**2. Recurring Service Route Engine (Must Have)**
- Customer profiles with service frequency (weekly, bi-weekly, monthly, quarterly, custom)
- Visual calendar showing recurring service schedule across all accounts
- One-click route view: today's/week's schedule per technician
- Re-treatment scheduling: auto-schedule next visit based on treatment frequency after each completed service
- Treatment history card per customer: date, chemical applied, technician, results
- Skip/reschedule individual occurrences without affecting recurring pattern
- Service type tracking: general pest, termite, rodent, mosquito, bed bug, fumigation (treatment-type-specific log fields)

**3. Route Optimization (Must Have)**
- Daily route builder: sequenced job order for minimum drive time per technician
- Map view of daily route with job markers and drive-time estimates between accounts
- Geographic clustering suggestions when adding new accounts
- Included at base Team plan price ($79/month) — not a premium add-on

**4. Automated Customer Communication (Must Have)**
- SMS and email appointment reminders (configurable: 24 hours before, 48 hours before)
- Treatment completion notification to customer (with link to digital treatment summary)
- Re-treatment due reminder (e.g., "Your quarterly treatment is due in 2 weeks — we'll see you on March 15")
- No-show follow-up automation

**5. Mobile-First Technician App (Must Have)**
- iOS and Android native apps with offline capability
- Today's route view: sorted accounts with navigation integration (Apple Maps / Google Maps)
- Chemical log entry (see feature 1) accessible from job screen in 2 taps
- Clock-in / clock-out with GPS verification
- Job completion flow: chemical log → customer signature → invoice trigger
- Service notes field (text and photo)
- Service site photos (before/after treatment photos linked to job record)

**6. Invoicing + Payment Processing (Must Have)**
- Auto-generated invoice on job completion
- Recurring billing for contract accounts (monthly, quarterly auto-charge)
- Stripe payment processing (online payment link in invoice email)
- QuickBooks Online sync for accounting integration
- Payment status tracking (sent, viewed, paid, overdue)
- Invoice history per customer

**7. Pesticide License Renewal Reminders (Must Have — Unique Differentiator)**
- Per-technician applicator license tracking: license number, state, expiration date, category
- Configurable renewal reminders: 90 days, 60 days, 30 days before expiration
- Owner-operator dashboard shows all technician license statuses and upcoming renewals
- Email and in-app notification

**8. Owner/Manager Dashboard (Must Have)**
- Jobs completed today / this week / this month per technician
- Compliance health: % of completed jobs with chemical log entries
- Revenue summary: invoiced, collected, outstanding
- Customer list with treatment history and next service date
- Technician schedule view (who is where, what's been completed)

### Out of Scope for MVP

| Feature | Reason for Deferral | Target Phase |
|---------|---------------------|-------------|
| State-specific compliance templates (FL WDO, CA fumigation, NPMA-33) | Requires regulatory research per state; core compliance log covers MVP | Phase 2 (Month 4–6) |
| Treatment site maps / bait station placement diagrams | Technically complex (property diagram editor); valuable but not blocking compliance | Phase 2 (Month 4–6) |
| Chemical inventory tracking + restock alerts | Nice-to-have; not a compliance requirement; adds supplier integration complexity | Phase 2 (Month 6–9) |
| Commercial compliance tier (FDA/USDA-overlay) | Distinct buyer segment with different sales motion; builds on Phase 1 base | Phase 3 (Year 2) |
| AI upsell coach at point-of-service | Premium differentiator; valuable but not core compliance | Phase 3 (Year 2) |
| Voice-first chemical entry | Advanced UX; requires speech recognition infrastructure | Phase 3 (Year 2) |
| Chemical supplier integration (restock automation) | B2B2B complexity; requires supplier partnerships | Phase 3 (Year 2) |
| Pool chemical compliance module | Adjacent vertical; same engine but different templates | Phase 3 (Year 2) |
| Lawn care chemical compliance module | Adjacent vertical | Phase 3 (Year 2) |
| Multi-location / franchise management | Enterprise play; outside primary persona | Phase 3 (Year 2+) |
| White-label | Enterprise play | Phase 3 (Year 2+) |
| Marketing automation (email campaigns, review requests) | Not core to compliance/operations | Phase 2 (Month 9–12) |

### MVP Success Criteria

| Criteria | Target | Validation Method |
|---------|--------|-------------------|
| Product-Market Fit | 40%+ of active users say they'd be "very disappointed" if PestLog went away (Sean Ellis test) | In-app survey at 30 days |
| Chemical Log Completion Rate | 75%+ of completed jobs have a chemical log entry by Month 2 | App analytics |
| Compliance Report Generation | 80%+ of accounts generate at least 1 EPA compliance report in first 30 days | Report generation events |
| Mobile Log Speed | 90%+ of chemical log entries completed in under 45 seconds | In-app timing data |
| LTD Revenue Validation | 300+ LTD sales within 60 days of launch | Sales tracking |
| Review Quality | 4.0+ average across first 30 reviews (G2/Capterra/ProductHunt) | Review platforms |
| Retention Signal | 60%+ of trial users convert or maintain active usage after 14-day trial | Trial analytics |
| NPS Baseline | NPS 30+ at 30-day check-in | In-app NPS survey |

**Go/No-Go Decision Point (Month 3):**
If MVP achieves 300+ LTD sales, 75%+ chemical log completion rate, and 40%+ PMF score, proceed to Phase 2 (state-specific compliance templates, subscription growth). If log completion rate is below 50%, iterate on mobile UX before scaling.

### Future Vision

**Year 1 — Own the Compliance Category:**
PestLog establishes itself as "the pest control software that keeps you compliant" among 1–10 tech operators. Community presence in "Pest Control Business Owners" Facebook group, r/pestcontrol, and NPMA regional events drives organic word-of-mouth. State compliance template library covers the top 10 pest control states by operator density (FL, TX, CA, GA, NC, IL, NY, OH, PA, WA). 125+ monthly subscribers at $79/month. G2/Capterra reviews dominated by compliance-focused testimonials that make GorillaDesk's absence of compliance a known liability.

**Year 2 — Commercial Compliance Expansion:**
The $149/month Commercial tier launches for operators servicing restaurants, food processing facilities, and healthcare buildings that require FDA/USDA-overlay audit documentation. This tier includes client portals where commercial account managers can pull their own compliance reports on demand. Commercial pest control = higher contract values, lower churn, and higher willingness to pay for compliance certainty. AI upsell coach at point-of-service launches: when a technician logs an ant treatment, the app prompts "You noted moisture damage near the foundation — tap to send a quote for moisture barrier treatment." No competitor has this.

**Year 3 — Platform and Adjacent Verticals:**
- Pool chemical compliance module: identical regulatory structure (chemical, concentration, date, GPS, operator license) with different compliance templates. Addresses the $4.3B pool service industry using the same mobile app and compliance engine.
- Lawn care chemical compliance module: herbicide/fertilizer application records for lawn care operators.
- Chemical supplier integration: automatic restock triggers when inventory hits threshold; product catalog with EPA registration numbers pre-populated.
- Compliance-as-a-Service premium add-on: quarterly human compliance audit review with regulatory certification for operators who need belt-and-suspenders assurance.
- Integration marketplace: Zapier, QuickBooks Desktop, accounting platforms, GPS fleet tracking.

**Long-Term Moat:**
PestLog's defensibility comes from three sources: (1) the compliance data library — once 2+ years of chemical application records live in PestLog, migrating is painful and potentially legally risky during the gap; (2) state-specific template library — building and maintaining accurate compliance templates for 50 states takes years and regulatory expertise; (3) community trust — once PestLog becomes the default recommendation in "Pest Control Business Owners" Facebook group and NPMA chapter meetings, word-of-mouth acquisition becomes self-sustaining.

---

## Risks and Mitigations

| Risk | Severity | Likelihood | Mitigation |
|------|----------|-----------|-----------|
| GorillaDesk adds EPA compliance reports | High | Medium | Build state-specific template library faster than a bootstrapped 11–50 person team can prioritize; community relationships and category ownership matter before they respond |
| QuoteIQ pivots to pest-specific compliance | Medium | Low | General FSM DNA makes deep vertical compliance culturally difficult; they compete on price, not regulatory depth |
| EPA/state regulations change significantly | Medium | Low-Medium | Build modular compliance template system; compliance updates as a reason to prefer subscription over LTD; regulatory tightening actually benefits the product |
| Mobile UX isn't faster than paper in the field | High | Medium | Alpha test with 5–10 real technicians before launch; measure entry time against 30-second target; iterate aggressively on the chemical log entry flow |
| LTD cohort doesn't generate recurring revenue | Medium | Medium | Tier LTD carefully (Team plan features but cap at 3 technicians for $99 tier; upgrade needed for more); build subscription conversion path at 12-month anniversary |
| Data migration friction from GorillaDesk/FieldRoutes | High | Medium | Build one-click migration from GorillaDesk CSV; offer free migration assistance during onboarding; white-glove setup for first 30 days |
| Addressable market smaller than expected | Low | Low | Even 500 operators at $79/month = $474K ARR; target is 125 customers at Month 12 — <0.5% of the 32,720+ available market |
| Offline sync conflicts in chemical log data | Medium | Medium | Implement last-write-wins with conflict flagging for owner review; chemical log entries are append-only (not editable) to maintain compliance integrity |

---

## Go-to-Market Strategy Summary

| Phase | Timeline | Key Activities | Success Metric |
|-------|----------|---------------|---------------|
| **Build MVP** | Weeks 1–8 | Chemical log, recurring scheduling, route optimization, mobile apps, customer reminders, QuickBooks sync, license renewal reminders | Feature-complete MVP |
| **Alpha Test** | Weeks 6–9 | Test with 5–10 real pest control operators; measure chemical log entry time; iterate on mobile UX | 90%+ entries under 45 seconds; 80%+ log completion rate |
| **LTD Launch** | Weeks 9–12 | $99 LTD via ProductHunt + direct (pest control Facebook groups, r/pestcontrol); "pest control compliance" lead magnet | 300–500 LTD sales |
| **Community Seeding** | Weeks 9–20 | Organic participation in Facebook "Pest Control Business Owners" group; NPMA regional chapter outreach; G2/Capterra review seeding | 50+ reviews at 4.5+ |
| **Compliance Template Expansion** | Month 4–6 | FL, CA, IL, NY state-specific templates; NPMA-33 form builder; bait station site maps | 5 state templates shipped |
| **Subscription Launch** | Month 4 | $49/$79/$149 tier pricing; referral program ($50/referral or 1 month free); SEO content on EPA compliance requirements | 50+ monthly subscribers |
| **Commercial Tier** | Year 2 Q1 | $149/month FDA/USDA-overlay compliance; client portals for commercial accounts | $5,000 MRR from commercial tier |

**Primary Channels:**
1. **Facebook Groups** — "Pest Control Business Owners" is the highest-trust peer community for software recommendations; organic content + compliance guides
2. **ProductHunt** — LTD launch vehicle; compliance-first positioning stands out among general FSM tools
3. **r/pestcontrol** — 75K+ operators; authentic peer recommendations drive discovery
4. **NPMA Events** — National Pest Management Association annual conference + state PCAs; direct access to operators in compliance-conscious mindset
5. **SEO** — "pest control compliance software," "EPA chemical log pest control," "GorillaDesk alternative compliance" — high-intent, low-competition keywords
6. **G2/Capterra** — Review volume in "Pest Control Software" category creates organic discovery

**Core Messaging:**
- "The pest control software that keeps you compliant."
- "EPA chemical logs in 30 seconds. Paper binders in the trash."
- "GorillaDesk for scheduling. PestLog for compliance. Or just PestLog for both."
- "No 15-month contracts. No hidden modules. No $500 data export fees."
- "Flat $79/month — whether you have 1 technician or 10."

---

*Product Brief completed: 2026-04-13*
*Source: Shortlisted idea (Score: 95/105, 2026-04-09) + Comprehensive market research (2026-04-12)*
*Next recommended step: Create PRD (Product Requirements Document)*
