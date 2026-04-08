---
stepsCompleted: [1, 2, 3, 4, 5, 6]
inputDocuments:
  - ideas/shortlisted/pool-service-management.md
  - _bmad-output/planning-artifacts/market-research-pool-service-management.md
workflowType: 'product-brief'
lastStep: 6
date: '2026-04-08'
author: Root
project: pool-service-management
---

# Product Brief: PoolPulse — Pool Service Management

<!-- Generated autonomously from shortlisted idea + market research context -->

---

## Executive Summary

**PoolPulse** is a flat-rate pool service management platform built for small operators who are being priced out of their current software. Skimmer — the dominant player with 35,000+ users — doubled its per-pool pricing in 2024 ($1→$2/pool/month), triggering a documented community revolt and creating a rare, time-limited market opening.

The opportunity is not hypothetical: tens of thousands of operators are actively searching for alternatives, a 1,000-member "Misfits" Facebook group formed specifically around fleeing per-pool pricing software, and no flat-rate competitor has yet established trust or scale in this segment.

PoolPulse solves two intertwined problems: **pricing that punishes growth** (operators pay more simply for succeeding) and **software that wasn't built for pool companies** (generic FSM tools lack water chemistry tracking, route optimization built for pool routes, and compliance-grade logs that many counties require by law). The product replaces Skimmer's $200–$400/month Scaling Up tier with a single $49/month flat-rate plan that includes every feature — no upsell walls, no per-pool penalty, no contracts.

The MVP is definable and buildable in 8–12 weeks: offline-first mobile, drag-and-drop route optimization, integrated water chemistry logging with LSI calculation, one-tap invoicing, and automated customer chemistry reports. The AppSumo LTD channel (no pool service software has ever launched there) provides a first-mover acquisition path that seeds reviews, community trust, and a recurring subscription pipeline.

**Target outcome:** 500 customers at $49/month = $29,400 MRR by Month 6; 1,500 customers = $73,500 MRR by Month 12.

---

## Core Vision

### Problem Statement

Small pool service operators — the 1-to-5-truck companies serving 50–300 residential pools on recurring weekly routes — are caught in a software pricing trap. Skimmer, the category leader, charges $2/pool/month on its full-featured "Scaling Up" tier. A company with 200 pools pays $400/month. A company with 300 pools pays $600/month. Every new customer they win makes their software more expensive. This is not a marginal annoyance: for businesses with $100K–$300K annual revenue, software that scales in lockstep with their customer growth directly attacks their operating margins and creates a perverse disincentive to grow.

Simultaneously, every generic field service management platform (Jobber, Housecall Pro, ServiceTitan) lacks the pool-specific features operators depend on daily: water chemistry test logs (pH, chlorine, alkalinity, CYA, calcium, TDS), LSI calculations, auto-dosing by pool volume, equipment lifecycle records, and compliance-ready chemical logs. These are not nice-to-haves — in many counties, licensed pool operators are legally required to maintain chemical records per pool visit. Without them, operators piece together multiple apps, paper clipboards, and separate spreadsheets, burning an estimated 7.5 hours/week per technician on administrative work.

The status quo is: pay too much for Skimmer, or pay even more for Pool Brain ($55+/tech/month), or cobble together inadequate generic tools. No affordable, full-featured, offline-capable, flat-rate alternative exists at scale.

### Problem Impact

**For operators:**
- A 200-pool operator on Skimmer Scaling Up pays $4,800/year for software that lacks offline mode, drag-and-drop routing, and 2-way QuickBooks sync
- The same operator adding 50 new customers sees their software bill increase by $1,200/year — a disincentive baked into the product's pricing architecture
- Techs spend 7.5 hours/week on paperwork (390 hours/year × $35/hour = $13,650/year in administrative cost)
- 94% of pool businesses miss at least one appointment per month; each callback costs ~$85 in unbilled time and fuel
- Android app instability (documented across Skimmer and Pool Brain) causes field failures mid-route
- Missing offline mode means service logs can't be completed in dead zones — a daily reality in rural and suburban areas

**For the market:**
- Skimmer's $74M Series C (October 2024) signals an intentional upmarket move, creating a structural gap below
- 40,000–78,800 pool cleaning businesses exist in the US; 64% already use pool-specific software, meaning the pitch is "better software at a better price" not "you need software"
- The "Misfits" Facebook group (1,000+ operators who left Service Autopilot/Skimmer) is an active, self-organized switching community — rare social proof of a market ready to move

### Why Existing Solutions Fall Short

| Solution | Core Failure |
|---|---|
| **Skimmer Getting Started** | Strips route optimization, quotes, and phone support; still charges per-pool |
| **Skimmer Scaling Up** | Full features but $2/pool/month — punishes growth; Android bugs; 1-way QuickBooks only; no drag-and-drop routing; no offline on base tier |
| **Pool Brain** | Full features, offline, 2-way sync — but $55+/tech/month ($175–$480/month for a 2-tech shop). 3–4x the price for marginal improvements |
| **Pool Founder / PoolNest** | Flat-rate pricing exists, but newer products without proven track record, reviews, or community trust |
| **Jobber / Housecall Pro** | Strong platforms for multi-trade businesses; zero water chemistry tracking; per-user pricing; calendar-based not route-based |
| **ServiceTitan** | Enterprise product at $470–$800/tech/month with a "confusing, buggy nightmare" reputation specifically among pool companies |
| **Paper / Spreadsheets** | Still used by 20–30% of operators; creates compliance liability, zero route optimization, no customer communication |

The structural gap: **Pool Brain's features + Skimmer's pricing simplicity** does not exist. PoolPulse fills exactly this space.

### Proposed Solution

PoolPulse is a **mobile-first, offline-capable pool service management platform** with a single flat-rate plan ($49/month, all features, unlimited pools and technicians) purpose-built for small operators running 50–300 residential pools.

Core product pillars:

1. **Offline-first mobile app** — Routes, chemistry logs, job completion, and invoicing all work without cell signal. Data syncs when connectivity returns. This is a hard architectural constraint, not a future feature.

2. **Integrated water chemistry tracking** — Per-pool logs for pH, chlorine, alkalinity, CYA, calcium, TDS with LSI (Langelier Saturation Index) calculation, auto-dosing by pool volume, and trend analysis. Compliance-grade export for county inspections.

3. **Drag-and-drop route optimization** — Daily route building, GPS-ordered stop sequencing, and real-time editing. Techs see the day's route on their phone; the owner adjusts the schedule on the dashboard.

4. **Automated customer chemistry reports** — After each visit, the customer automatically receives a branded report with chemical readings, before/after photos, and service notes via text/email. This is a professional differentiator that operators currently create manually (or not at all).

5. **One-tap invoicing with payment processing** — Recurring billing, on-site payment capture, and Stripe-powered processing. Average payment wait drops from 32 days to same-day.

6. **Equipment lifecycle tracking** — Per-pool equipment records (make, model, serial, install date, warranty status, maintenance notes) with alerts for overdue service. Drives upsell conversations naturally.

### Key Differentiators

1. **Flat-rate, all-features pricing** — $49/month regardless of pool count. Growing from 100 to 200 pools increases revenue by $10,000/year; PoolPulse bill stays $49. Competitors cannot match this without a fundamental business model change.

2. **Offline-first architecture** — The only full-featured platform affordable for small operators that works in rural areas, dead zones, and low-signal environments. Pool Brain does this but costs 3–7x more.

3. **Chemical compliance as a feature, not an afterthought** — County-mandated chemical logs positioned as liability protection and compliance certification. No competitor has led with this angle.

4. **Seasonal billing management** — Freeze/hold/resume billing for northern markets (October–March). Neither Skimmer nor Pool Brain handles this well; it's a switching trigger for Midwest/Northeast operators.

5. **Switching from Skimmer actively supported** — CSV import from Skimmer, offered free as a migration service for early customers. Data hostage situations (Skimmer export "nearly impossible") are turned into a competitive advantage.

6. **No contracts, no feature gates** — Every feature included in every plan. No "Getting Started" tier that creates a wedge between paying customers and full functionality.

---

## Target Users

### Primary Users

#### Persona 1 — Marcus, The Solo Operator (Lone Ranger)

**Background:** Marcus has been running his own pool service company for 6 years in Central Florida. He manages 115 residential pools himself, driving a single white truck starting at 6am. His annual revenue is around $165,000. He does everything: routes, chemistry, invoicing, customer texts, supply ordering.

**Current software:** Skimmer Getting Started, which he pays $115/month for. He recently got the bill notice that it was going up to $230/month (Skimmer's $2/pool transition). He's furious — the Getting Started tier doesn't even include route optimization or phone support.

**Pain in his words:**
> "I'm doing 115 pools a week. I write the chemistry on a clipboard, take a picture of it at the end of the day, and manually enter it into a spreadsheet every Friday night. That's my compliance record. It takes 3 hours. And now Skimmer wants $230 a month? For what?"

**What success looks like for Marcus:**
- Routes automatically ordered by GPS each morning
- Chemistry logged on his phone at each pool, no clipboard
- Customers get an auto-text with readings after each visit (makes him look professional)
- Invoices go out automatically on the 1st
- Bill stays flat as he grows to 150 pools

**PoolPulse fit:** Direct replacement at $49/month ($166/month savings vs. new Skimmer pricing). Offline mode solves the dead-zone problem in his suburban routes. Customer chemistry reports let him compete with larger companies on professionalism.

---

#### Persona 2 — Diana, The Growing Operator (The Grower)

**Background:** Diana runs a 2-truck operation in the Dallas suburbs with 240 pools and one part-time technician. She handles the office; her tech handles 140 routes. Annual revenue is approximately $340,000. She's currently on Skimmer Scaling Up paying $480/month.

**Pain points:**
- $480/month for software that her tech hates because the Android app keeps crashing mid-route
- No drag-and-drop to reassign stops when a tech calls in sick
- QuickBooks sync only goes one way; she manually reconciles at month-end
- Seasonal customers in north Dallas suburbs want billing paused November–March; Skimmer has no freeze feature

**What success looks like for Diana:**
- One dashboard to see both routes in real-time
- Drag-and-drop to reassign stops when plans change
- QuickBooks auto-reconciled with 2-way sync
- Seasonal billing freeze without manual cancellation/reactivation
- Total software spend under $100/month

**PoolPulse fit:** Replaces $480/month with $79/month (team plan) — saving $4,812/year. Drag-and-drop routing solves her daily friction. Seasonal billing freeze eliminates a monthly manual process. 2-way QuickBooks sync eliminates Friday night reconciliation.

---

#### Persona 3 — Carlos, The Scaling Operator (The Manager)

**Background:** Carlos operates 4 trucks in the Phoenix metro area, managing 380 pools with 3 full-time technicians and a part-time office coordinator. Revenue is $550,000/year. He's currently evaluating Pool Brain ($220/month for his setup) because Skimmer can't handle his scale, but Pool Brain's pricing and onboarding complexity are giving him pause.

**Pain points:**
- Pool Brain's 2-week onboarding process is too disruptive mid-season
- Chemical compliance logs required by Maricopa County; no tool gives him compliance-grade exports
- Equipment tracking is done in a separate spreadsheet; he has 400+ pieces of equipment across 380 pools
- Needs technician performance tracking (who's logging chemistry, who's skipping steps)

**What success looks like for Carlos:**
- All 4 routes visible on a single management dashboard
- County-compliant chemical log export ready for inspection
- Equipment alerts before failures happen
- Technician accountability metrics
- Onboarding that doesn't disrupt a mid-season workflow

**PoolPulse fit:** Targets Carlos as a Year 1 stretch customer and a Year 2 focus segment. The compliance-grade chemistry export and equipment tracking differentiate vs. cheaper alternatives. Onboarding simplicity (1–2 hours vs. days) removes his primary objection to switching.

### Secondary Users

**Pool Technicians (Employees):** The field users of the mobile app. Their adoption makes or breaks the platform — if the app is slow, crashes, or requires connectivity they don't have, operators churn. Design priority: app must feel faster and more reliable than paper. Technicians need to log a chemistry reading in under 60 seconds per pool.

**Pool Owners (Customers of the Operator):** Recipients of automated chemistry reports and customer portal access. Not paying users of PoolPulse, but a critical success factor — operators who send professional, branded reports retain customers longer and justify premium pricing. The customer portal (Phase 2) allows pool owners to view service history and chemistry trends from their phone.

**Equipment Suppliers / Distributors:** Indirect stakeholders. Chemical supply integration (Phase 2) creates a purchasing workflow that routes supply orders through PoolPulse, creating a B2B revenue opportunity via supplier partnerships (SCP Pool / Poolcorp ecosystem).

### User Journey

#### Marcus's Day with PoolPulse

**6:00 AM — Route Start**
Marcus opens PoolPulse on his phone. His 115 stops are auto-ordered by GPS proximity for today's starting point. He taps "Start Route."

**6:15 AM — First Pool**
Arrives at Pool #1. Fills in pH (7.4), Free Chlorine (3.2), Alkalinity (90), CYA (45). The app calculates LSI, flags nothing out of range, and suggests chlorine dosage for the 15,000-gallon pool. He logs one equipment note ("pump making noise, check next visit"). Taps "Complete" — the app is offline but queues everything locally.

**6:18 AM — Automated Customer Report**
Once Marcus's phone catches signal again, the customer gets an auto-text: "Marcus completed your pool service. pH: 7.4 ✓ Chlorine: 3.2 ✓ [Photo] Full report: [link]" — Marcus didn't do anything extra for this.

**2:00 PM — Route Complete**
All 115 pools logged. PoolPulse auto-generates today's compliance log. Invoices for this month's recurring customers are queued for the 1st.

**Evening — Zero Admin**
No spreadsheet. No clipboard photos. No manual invoice creation. His compliance record is already saved and exportable. Revenue hits his Stripe account.

**Discovery → Onboarding Journey:**
1. **Trigger:** Marcus sees a post in Pool & Spa Forum: "Anyone else get Skimmer's price increase notice?"
2. **Research:** Googles "Skimmer alternative flat rate" → finds PoolPulse landing page
3. **Trial:** Signs up for free trial; imports his customer CSV from Skimmer in 10 minutes
4. **Aha! Moment:** First day using PoolPulse, chemistry log auto-generates the compliance export he used to build manually on Friday nights
5. **Convert:** Subscribes at $49/month at end of 14-day trial
6. **Advocate:** Posts in Pool & Spa Forum: "Switched from Skimmer. PoolPulse is $49 flat. No per-pool nonsense."

---

## Success Metrics

### User Success Metrics

| Metric | Definition | Target |
|---|---|---|
| **Time to first route completed** | Minutes from signup to first route logged in app | < 2 hours |
| **Chemistry log completion rate** | % of route stops with chemistry logged (vs. skipped) | > 90% |
| **Admin time reduction** | Self-reported weekly admin hours before/after switch | 50% reduction (7.5h → <4h) |
| **Customer report delivery rate** | % of completed visits that trigger auto customer report | > 95% |
| **Compliance log readiness** | % of operators who could produce a county inspection log on demand | 100% (if used correctly) |
| **Route efficiency** | Average drive time reduction after GPS ordering | >20% reduction |

**Leading engagement indicators:**
- Operators who log chemistry on >80% of stops in Week 1 retain at Month 6 at >90% rate (hypothesis to validate)
- Operators who connect QuickBooks in first 7 days have 2x lower churn than those who don't

### Business Objectives

**Month 3:**
- 200 paying customers (AppSumo LTD buyers + early monthly subscribers)
- Minimum 30 published Capterra reviews with 4.5+ average rating
- Churn < 6% monthly

**Month 6:**
- 500 paying customers
- $24,500 MRR (500 × $49 blended)
- NPS > 55
- 75+ Capterra reviews

**Month 12:**
- 1,500 paying customers
- $73,500 MRR
- AppSumo LTD converted to MRR pipeline: 500 LTD buyers offered upgrade path
- 150+ Capterra reviews, 4.7+ average
- Featured in PoolDial and PoolFounder comparison guides as a top alternative

**Strategic milestone:** $50K MRR = bootstrap sustainability for 2-person team. $100K MRR = Series A fundable or strategic acquisition interest.

### Key Performance Indicators

| KPI | Month 3 | Month 6 | Month 12 | Measurement Method |
|---|---|---|---|---|
| Paying customers | 200 | 500 | 1,500 | Stripe active subscriptions |
| MRR | $9,800 | $24,500 | $73,500 | Stripe MRR |
| Monthly churn rate | <6% | <4% | <3% | Churned MRR / beginning MRR |
| NPS | >45 | >55 | >65 | In-app survey at Day 30 |
| Capterra reviews | 30 | 75 | 150 | Capterra review count |
| AppSumo LTD sales | 200 | — | — | AppSumo dashboard |
| Avg pools/customer | 80 | 95 | 115 | In-app pool count |
| Chemistry log rate | — | >85% | >90% | % stops with chemistry logged |
| Trial→paid conversion | — | >35% | >40% | Trial signups vs. conversions |
| Payback period | — | <3 months | <2 months | CAC / avg MRR per customer |

**Churn is the primary health metric.** A flat-rate product's economics depend entirely on retention; churn under 3% monthly (36% annual) is the difference between a growing SaaS and a leaky bucket.

---

## MVP Scope

### Core Features

The MVP must solve the 3 core switching triggers — flat-rate pricing, offline mobile, and water chemistry — with enough surrounding functionality that operators can run their entire business from PoolPulse on day one.

**1. Daily Route Management**
- GPS-ordered route optimization (auto-sort stops by proximity from current location)
- Drag-and-drop stop reordering within a day's route
- Multi-tech route assignment (owner assigns stops to technicians)
- Route progress visibility in real-time dashboard

**2. Water Chemistry Logging (Offline-First)**
- Per-stop chemistry log: pH, Free Chlorine, Combined Chlorine, Total Alkalinity, CYA, Calcium Hardness, TDS, Salt (optional)
- LSI (Langelier Saturation Index) calculation with auto-flag for out-of-range readings
- Chemical dosage recommendation based on pool volume (gallons) entered at pool setup
- Historical chemistry trend chart per pool (last 12 readings)
- Compliance log export (PDF, date-filtered) for county inspection

**3. Offline-First Mobile App**
- Full route and chemistry functionality without cell signal
- Local data storage with background sync when connectivity returns
- Conflict resolution for multi-tech environments
- iOS primary release; Android simultaneously (same codebase via React Native)

**4. Automated Customer Chemistry Reports**
- After visit completion, auto-generate branded report with chemistry readings, photo(s), and service notes
- Delivery via SMS text and/or email (operator sets preference per customer)
- Operator-branded with company name and logo
- Customer can view history via non-authenticated link (no portal login required for MVP)

**5. Equipment Tracking Per Pool**
- Equipment record per pool: type (pump, filter, heater, cleaner, salt system), make, model, serial number, install date, warranty expiration
- Service notes per equipment piece
- Maintenance alert (operator-set) for upcoming service due dates
- Equipment list visible to technician on route stop screen

**6. Recurring Billing + Invoicing**
- Per-customer recurring billing setup (weekly, bi-weekly, monthly)
- Auto-invoice generation on billing cycle
- Stripe-powered payment processing (credit card, ACH)
- Invoice status tracking (sent, viewed, paid, overdue)
- Seasonal billing freeze/hold: pause billing for a customer without cancellation; resume with one tap

**7. Customer Management**
- Customer record: name, address, phone, email, pool address (if different), gate code, dogs/access notes
- Pool record per customer: volume, type (chlorine/saltwater/mineral), surface material, dimensions
- Attachment of before/after photos to each visit
- Service history log per customer/pool

**8. Basic Reporting Dashboard**
- Today's route completion status
- Weekly revenue summary
- Chemical alerts (pools with out-of-range readings in last 7 days)
- Overdue invoices

**9. QuickBooks Online Integration (2-way)**
- Sync customers and invoices bidirectionally
- Payment status synced back to PoolPulse when marked paid in QuickBooks
- This is MVP-critical based on research showing 1-way sync (Skimmer's limitation) as a top pain point

**10. Data Migration Support**
- CSV import for customer and pool data
- Skimmer export format handled specifically (documented import guide)
- Free assisted migration for first 100 customers (founder-led white-glove service)

### Out of Scope for MVP

The following features are explicitly deferred to avoid scope creep and ensure an 8–12 week build timeline:

| Feature | Rationale for Deferral |
|---|---|
| LaMotte/Taylor/Lovibond test device Bluetooth integration | Hardware dependency; adds months; manual entry achieves same compliance outcome |
| Customer self-service portal (login) | Unauthenticated report links satisfy the MVP need; full portal is Phase 2 |
| Chemical supply ordering integration (Poolcorp/SCP) | Revenue multiplier but not a switching trigger; Phase 2 revenue stream |
| Technician commission tracking | Pool Brain differentiator for larger operators; not needed for <5-tech shops |
| Open API / webhooks | Enterprise feature; defer until customer count justifies integration support cost |
| AI-powered scheduling suggestions | AI is table stakes in 12–24 months, not today; route optimization without AI is sufficient for MVP |
| Multi-location / franchise management | Carlos-tier feature (300+ pools, multiple locations); Phase 2 segment |
| Equipment marketplace / parts ordering | Phase 3 revenue stream; not a switching trigger |
| Native iPad / tablet-optimized UI | iPhone-first covers the field use case; tablet is office-optional |
| Native Apple Watch / wearable support | Future delight feature; no evidence this is requested |

### MVP Success Criteria

The MVP is validated and ready to scale if, at the end of Month 3 (post-AppSumo launch):

1. **200+ paying customers** — validates demand at scale, not just early adopters
2. **<6% monthly churn** — validates that the product delivers enough value to retain customers after the novelty wears off
3. **Chemistry log rate >80%** — validates that the core product workflow is actually being used (not just onboarded and forgotten)
4. **NPS >45** — validates sufficient satisfaction to generate organic referrals
5. **At least 30 published Capterra reviews at 4.5+** — validates that operators trust the platform enough to publicly recommend it

If Month 3 hits all 5 criteria: scale acquisition (Facebook ads, PHTA sponsorship, Capterra advertising). If 2–3 criteria missed: diagnose and fix before spending on acquisition.

### Future Vision

**Phase 2 — Operator Stickiness (Months 6–18):**
- Customer portal (pool owners log in to see their service history, chemistry trends, upcoming appointments, and outstanding invoices)
- LaMotte/Taylor Bluetooth test device integration (eliminates manual data entry for operators who invest in electronic testers)
- Seasonal route management (winter storage workflows for northern markets; spring reopening checklists)
- Technician performance analytics (chemistry completion rates, on-time arrival, customer satisfaction by tech)
- Automated equipment service reminders triggered by age/date thresholds

**Phase 3 — Platform Expansion (Months 12–36):**
- Chemical supply integration (operators order chemicals directly through PoolPulse; supplier partnership revenue)
- Insurance certification integration (documented compliance records reduce operator liability insurance rates — active opportunity with specialty insurers)
- Pool owner consumer app (pool owners pay a premium tier to see live chemical readings, service alerts, and equipment health)
- Adjacent market: irrigation service management (same route + chemical workflow; 40,000+ irrigation service companies)
- Equipment marketplace (connect operators with certified replacement parts and manufacturer warranties)

**Long-term strategic vision (Year 3–5):**
- PoolPulse becomes the operating system for small pool service businesses — the layer through which operators manage customers, chemicals, equipment, billing, and compliance
- Chemical and equipment data aggregated across 10,000+ pools creates industry benchmarking data (anonymized) valuable to chemical manufacturers and equipment OEMs
- Certification moat: counties that mandate software-based chemical logs may eventually require certified platforms — first-mover compliance advantage becomes a regulatory moat
- Acquisition target: Poolcorp (the $5B chemical distributor), ServiceTitan (consolidating FSM verticals), or private equity roll-up of pool service software properties

---

## Competitive Positioning Summary

**The positioning statement:**

> PoolPulse is the only pool service management platform that gives operators every feature they need — route optimization, offline-first mobile, water chemistry tracking, invoicing, and equipment records — for a single flat rate of $49/month, regardless of how many pools they serve. Skimmer charges you more every time you succeed. We don't.

**Go-to-Market Priority Order:**
1. **Pool Service Misfits Facebook group** (1,000+ active Skimmer/SA refugees) — direct, zero-cost
2. **Pool & Spa Forum** (47K+ members) — organic community seeding before product reveal
3. **AppSumo LTD launch** (first pool service software on AppSumo) — $89 Tier 1 (up to 150 pools), $149 Tier 2 (up to 400 pools)
4. **Capterra listing** — review campaign with AppSumo buyers immediately post-launch
5. **SEO content** — "Skimmer alternative," "flat-rate pool service software," "pool service route optimization"
6. **PHTA regional events** — FL, TX, CA chapter events starting Month 6

**Pricing:**
- AppSumo LTD: $89 one-time (up to 150 pools, 2 techs) / $149 one-time (up to 400 pools, 5 techs)
- Monthly subscription: $49/month (unlimited pools, up to 3 techs) / $79/month (unlimited pools, unlimited techs)
- No free tier. 14-day free trial, no credit card required.
- No annual pricing required (month-to-month strengthens the anti-Skimmer narrative)

---

**Product Brief Complete**
**Date:** 2026-04-08
**Project:** Pool Service Management (PoolPulse)
**Workflow:** BMAD Product Brief (automated)
**Next Step:** Create PRD → `run-bmad-pipeline.sh` (PRD step)
