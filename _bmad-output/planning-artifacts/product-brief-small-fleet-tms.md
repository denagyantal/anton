---
stepsCompleted: [1, 2, 3, 4, 5]
inputDocuments:
  - ideas/shortlisted/owner-operator-trucking-tms.md
workflowType: product-brief
lastStep: 5
project_name: small-fleet-tms
user_name: Root
date: 2026-06-03
---

# Product Brief: Owner-Operator Trucking TMS

---

## Executive Summary

Owner-operators and micro-fleets (1–10 trucks) are the backbone of US freight — 922,854 independent operators and 95.5% of all motor carriers fall in this segment — yet they are systematically priced out of modern trucking software. Compliance (ELD + IFTA) is federally mandated, dispatch and load management are operationally essential, but no tool under $100/month combines all four.

**The product is a flat-rate, mobile-first TMS for 1–10 truck owner-operators at $59/month** — combining automated IFTA filing, load dispatch, driver settlements, and ELD integration (bring-your-own hardware) in a single tool. It replaces a fragmented $112–$365/month stack with one app, positions as the anti-Motive for the cost-conscious independent operator, and captures a non-discretionary compliance spend that makes it intrinsically sticky.

The opportunity: 500 customers at $59/month = $354K ARR (Year 1 target). At 2% market penetration of micro-fleets: $6.4M ARR.

---

## Core Vision

### Problem Statement

Owner-operators and micro-fleet managers are running three to five separate, overlapping subscriptions to stay legally compliant and operationally functional:

- **ELD compliance** (federally mandated for all interstate CDL operators): $15–$42/month
- **IFTA quarterly filing** (mandatory for multi-state operators): $9–$35/month
- **Dispatch / TMS**: $20–$99/month
- **Load board access** (DAT or Truckstop): $49–$149/month
- **Total fragmented stack**: $112–$365/month, with manual re-entry between tools

Affordable bundles do not exist. Motive and Samsara charge $35–$70/vehicle/month for ELD alone, require 12–36 month contracts, and were built for 20–500 truck fleets. The cheapest true TMS+IFTA combo (TruckingOffice at $20–30/month) has a dated UI, no load board integration, and a poor mobile experience. A 2-truck owner-operator using enterprise TMS software is like using SAP for a food truck.

**The result:** Google Sheets and paper logs remain common. Non-compliance risks fines up to $16,864 per HOS violation. IFTA manual prep takes 6+ hours per quarter per truck. This is a compliance and productivity crisis in plain sight.

### Problem Impact

- **Financial**: Operators pay $112–$365/month for tools that partially overlap and require manual data bridging. Record 2024 operating costs ($2.26/mile) make every SaaS dollar scrutinized. Marginal operators are exiting the market (~10,000 carrier exits in H1 2024 alone) — those remaining are maximally cost-conscious.
- **Time**: IFTA prep alone takes 6+ hours/quarter per truck. Managing 3–5 apps with no integration creates daily administrative overhead for people already running 60–80 hour weeks as driver + dispatcher + accountant + compliance officer.
- **Risk**: Non-compliance penalties are severe. ELD compliance is non-discretionary — even a 1-truck owner-operator faces federal enforcement. Incorrect IFTA filings trigger audits.
- **Emotional**: Independent truckers chose owner-operator status to escape corporate employment. Being locked into $35–$70/vehicle/month contracts with enterprise vendors — who treat them as small accounts — creates active resentment and distrust of the software category.

### Why Existing Solutions Fall Short

| Solution | Why It Fails Owner-Operators |
|---|---|
| Motive / Samsara | $35–$70/vehicle/month; 12–36 month contracts; enterprise-scale complexity; hardware required |
| Truckbase ($290+/mo) | Priced for 5–50 truck fleets; overwhelming for 1–2 trucks |
| TruckingOffice ($20–30/mo) | Closest competitor but dated UI, no load board, poor mobile UX |
| AscendTMS (free tier) | Broker-centric; limited IFTA automation; not trucking-native for compliance |
| FleetRabbit ($3–5/vehicle) | Maintenance only; no dispatch, no IFTA filing, no load board |
| FleetCollect ($9–19/mo) | IFTA only; not a TMS; no dispatch or load management |

The Tier 3 market is fragmented with no clear winner. No current vendor occupies the position of a modern, mobile-first, all-in-one compliance + dispatch tool at flat pricing under $100/month.

### Proposed Solution

A **flat-rate, mobile-first TMS for owner-operators and micro-fleets** that bundles:

1. **Automated IFTA tracking and quarterly report generation** — GPS-driven mileage tracking by jurisdiction; one-click quarterly report; eliminates 6+ hours/quarter of manual work
2. **Load dispatch and tracking** — Create loads, assign drivers, track status in real time, manage driver settlements
3. **ELD integration (bring-your-own)** — Connect existing FMCSA-registered ELD hardware via Motive API, Samsara API, Geotab, or Garmin; no proprietary hardware required
4. **Load board integration** — View and claim loads from Truckstop (Phase 2: DAT) without leaving the app
5. **Mobile-first in-cab UX** — Designed for a driver's phone, not an office desktop

Pricing: **Free (1 truck, 5 loads/month, IFTA tracking)** → **$29/month Starter (1 truck, unlimited, automated IFTA report)** → **$59/month Pro (up to 10 trucks, ELD integration, load board, driver settlements, QuickBooks sync)**. No per-vehicle overages. No long-term contracts.

The core value proposition: **replace 4 tools with 1 for less than the cost of a single ELD subscription.**

### Key Differentiators

1. **Flat fleet pricing** — $59/month for 1–10 trucks. No per-vehicle penalties. The only competitor doing this in the sub-$100 segment.
2. **ELD-agnostic integration** — Operators keep their existing hardware. No $150–$650 hardware upgrade required to switch. Dramatically lowers adoption friction.
3. **IFTA automation as the core wedge** — The most universally hated compliance task. Six-plus hours of quarterly work becomes a one-click report. This is the "aha!" moment.
4. **Month-to-month only** — No contracts. In a freight recession where operators exit at 10K+/year, month-to-month is a genuine differentiator vs. Motive's 12-month and Samsara's 36-month standard terms.
5. **Community-native GTM** — Built with TruckersReport and r/Truckers, not sold to them. High-trust communities where one genuine thread drives hundreds of signups.
6. **Mobile-first, in-cab design** — Desktop-first competitors that shrank their UI for mobile. This product is designed for a phone screen, a moving truck, and a driver who checks it at every stop.

---

## Target Users

### Primary Users

**Persona 1: Marcus — The Solo Owner-Operator**

- **Profile**: 44-year-old CDL driver, runs a single semi-truck (dry van), hauls spot freight on I-80 corridor. Earns $95K gross, nets $45K after truck payment, fuel, insurance, and tolls. Has been driving for 18 years; went owner-operator 4 years ago.
- **Current stack**: Motive ELD ($42/month), DAT load board ($99/month), spreadsheet for IFTA, paper BOL. Hates his current setup. Doesn't use a TMS.
- **Primary pain**: IFTA quarterly filing takes him a Sunday every quarter. He manually transcribes fuel receipts and mileage logs from his Motive app into a spreadsheet. He missed a filing once and paid penalties.
- **Secondary pain**: He can't afford to add Motive's Pro plan ($65/month) just to get IFTA automation. He's looking at $150+/month total just to be compliant.
- **Tech comfort**: Uses iPhone, Facebook, YouTube. Not afraid of apps. Rejected TruckLogics ("too complicated") and TruckingOffice ("looks like it's from 2009").
- **Success vision**: One app that shows his loads, files his IFTA automatically, lets him see his settlement, and costs less than he's paying now. "I want to drive, not do paperwork."
- **Discovery channel**: TruckersReport forum, r/Truckers, YouTube trucking channels (trucker vlogs with 100K+ subscribers).

---

**Persona 2: Diana — The 3-Truck Micro-Fleet Owner**

- **Profile**: 51-year-old, owns 3 trucks, employs 2 drivers plus drives herself part-time. Hauls dedicated lanes for a regional grocery distributor. Gross revenue $420K; net margins thin after driver payroll, truck payments, and insurance. Runs out of a home office.
- **Current stack**: Motive ELD ($40/month × 3 = $120/month), TruckLogics TMS ($79/month), spreadsheet + her accountant for IFTA ($35/month quarterly service). Total: $234+/month.
- **Primary pain**: Driver settlement calculations — she manually reconciles Motive logs with TruckLogics load records every two weeks. Takes 4–5 hours. Errors cause driver disputes.
- **Secondary pain**: IFTA across 3 trucks and multiple states is a quarterly nightmare. Her accountant charges $35 to file it and she still has to gather all the fuel receipts.
- **Business goal**: Get all three trucks on one dashboard, stop double-entering data, and reduce her Saturday afternoon paperwork sessions.
- **Success vision**: "I open one app, I see all three trucks, I generate payroll, and the IFTA report is already done. That's it."
- **Discovery channel**: OOIDA forums, local trucking association emails, word-of-mouth from other micro-fleet owners at a truck stop she frequents.

---

**Persona 3: Jerome — The Day-Cab / Non-ELD Small Fleet**

- **Profile**: 38-year-old, owns 4 box trucks (day cabs, under 10,001 lbs), operates regionally within one state, hauls construction materials. Not subject to ELD mandate (short-haul exemption). Has never needed ELD compliance software.
- **Current pain**: No TMS at all. Uses a Google Sheets dispatch board, invoices with Wave, tracks fuel manually. IFTA is not relevant (intrastate only). Pain is dispatch chaos and invoice delays.
- **Opportunity**: Represents a clean-slate TMS buyer. Needs dispatch + load tracking + invoicing. No ELD or IFTA complexity. A simpler onboarding path.
- **Value prop**: "Start with dispatch, add features as you grow."

### Secondary Users

**Drivers (not fleet owners)** — receive load assignments via mobile app, confirm delivery, log mileage. They interact with the driver-facing mobile view only. Their experience matters because fleet owners choose tools that drivers will actually use without complaining.

**Bookkeepers / Accountants** — access to IFTA reports and settlement data for quarterly filings and driver W-2/1099 reconciliation. A read-only access tier or clean CSV/PDF export matters to this segment.

**Dispatchers** (for 5–10 truck fleets) — some micro-fleets hire a part-time dispatcher. They need a dispatcher view: all trucks on one screen, load assignment queue, driver status.

### User Journey

**Marcus (Solo Owner-Operator):**

1. **Discovery**: Finds a thread on TruckersReport where someone asks "what do you use for IFTA?" — a community response mentions the app. Or sees a short YouTube sponsorship by a trucker YouTuber he follows.
2. **Evaluation**: Visits the website, sees "replace your ELD subscription + IFTA + dispatch for $59/month." Compares to his current $42 (Motive) + $99 (DAT) + 6 hours/quarter = sold on the math.
3. **Trial start**: Signs up for free tier. Connects his Motive ELD via API (OAuth flow, ~3 minutes). His existing trip history imports automatically. He sees his IFTA mileage by state auto-populated.
4. **Aha! moment**: At the end of the quarter, he generates his IFTA report with one click. It's correct. He exports it and files. That Sunday is free for the first time in 4 years.
5. **Upgrade trigger**: He upgrades to Pro ($59/month) when he realizes the load dispatch feature means he can stop using DAT's app separately. Net savings: $82/month vs. his old stack.
6. **Loyalty**: He posts about it on TruckersReport. Refers two buddies from his terminal.

**Diana (3-Truck Micro-Fleet):**

1. **Discovery**: OOIDA email newsletter features the product as an "endorsed affordable tool for small fleets." Also heard about it from a driver at her truck stop.
2. **Evaluation**: Schedules a 15-minute demo call (or watches the YouTube walkthrough). Sees the multi-truck dashboard and automated driver settlement feature.
3. **Onboarding**: Adds all 3 trucks, connects Motive for each via API. Imports driver profiles. Creates first load dispatch in under 10 minutes.
4. **Aha! moment**: First driver settlement run at payroll time. The system auto-calculates each driver's miles, loads, and pay. She verifies and approves in 20 minutes instead of 4 hours.
5. **Value realization**: IFTA report at quarter-end. Three trucks, multi-state, one report, one click. She cancels her accountant's $35/quarter IFTA service.
6. **Expansion**: Upgrades to add QuickBooks sync. Becomes a vocal advocate in her local trucking association.

---

## Success Metrics

### User Success Metrics

**Core Value Delivery:**
- **IFTA automation adoption**: ≥80% of Pro users generate their IFTA report via the app (vs. exporting raw data for manual filing)
- **Time to first value**: New users connect their ELD and see auto-populated IFTA data within 15 minutes of signup
- **Settlement automation**: ≥70% of multi-truck users run driver settlements through the app within first billing cycle
- **Load dispatch engagement**: ≥60% of Starter/Pro users create at least 4 loads/month within 60 days of signup

**Retention Signals:**
- **Monthly active usage**: ≥85% of paying customers log in at least twice/month (compliance = recurring behavior)
- **Quarterly IFTA report generation**: ≥90% of active users generate IFTA report in the product (vs. canceling before quarter-end)
- **Net Promoter Score**: Target ≥50 (truckers are skeptical; 50+ indicates genuine community advocacy)
- **Churn rate**: <4% monthly (compliance stickiness should produce lower churn than typical SaaS)

### Business Objectives

**Year 1 Targets:**
- **Revenue**: $354K ARR (500 paying customers avg. $59/month)
- **User acquisition**: 1,500 free tier signups → 500 paid conversions (33% freemium-to-paid rate)
- **CAC target**: <$50 blended (community-led GTM should keep CAC very low)
- **LTV target**: >$1,500 (implied by <4% churn and $59/month avg. = ~25 month LTV)
- **LTV:CAC ratio**: >30:1 at target CAC

**Year 2–3 Targets:**
- $1.5M–$3M ARR (2,000–4,000 customers)
- OOIDA endorsement or partnership active
- DAT integration live (adds load board stickiness)
- Automated IFTA e-filing (direct state submissions) differentiating from TruckingOffice

**Strategic Objectives:**
- Become the top-recommended affordable TMS in TruckersReport and r/Truckers within 12 months
- Maintain <$100/month all-in positioning as competitors attempt to respond
- Build data moat: load history, IFTA history, and settlement records create switching costs

### Key Performance Indicators

| KPI | Target | Timeframe | Measurement |
|---|---|---|---|
| MRR | $29,500 | Month 12 | Stripe/billing system |
| Paying customers | 500 | Month 12 | Billing records |
| Free → Paid conversion | 33% | Ongoing | Cohort analysis |
| Monthly churn | <4% | Month 6+ | Churn tracking |
| IFTA reports generated | ≥80% of active users/quarter | Each quarter | App analytics |
| Time to first ELD connect | <15 min (median) | From signup | Onboarding funnel |
| Mobile sessions / total | >70% | Ongoing | Analytics |
| TruckersReport mentions | 50+ organic threads | Month 12 | Manual monitoring |
| NPS | ≥50 | Month 6 | In-app survey |
| Support ticket rate | <5% of MAU/month | Month 3+ | Helpdesk |

---

## MVP Scope

### Core Features

The MVP delivers on the core promise — replace the IFTA + dispatch stack at flat pricing — without ELD hardware complexity or load board API dependency.

**1. IFTA Tracking (automated, GPS-based)**
- GPS mileage tracking by state/jurisdiction via mobile app or ELD API sync
- Fuel purchase logging (manual entry + receipt photo for MVP; card integration Phase 2)
- Quarterly IFTA report generation as downloadable PDF and Excel
- Multi-truck IFTA aggregation (1–10 trucks on one account)
- Support all 48 IFTA member jurisdictions

**2. Load Dispatch and Management**
- Load creation: origin, destination, commodity, rate, BOL number
- Driver assignment (from fleet roster)
- Load status tracking: assigned → picked up → in-transit → delivered → invoiced
- Load history and search
- Basic rate confirmation document (PDF) for each load

**3. Driver Settlements**
- Per-driver earnings calculation based on loads completed
- Settlement report generation (PDF)
- Pay period management (weekly/bi-weekly)
- Settlement history

**4. ELD Integration (bring-your-own)**
- Motive (KeepTruckin) API integration — automatic trip/mileage sync
- Samsara API integration
- Manual odometer entry fallback (for day-cab operators exempt from ELD)
- HOS summary view (read-only, pulled from ELD API)

**5. Mobile App (iOS + Android)**
- Driver view: active loads, proof of delivery, mileage entry
- Owner/dispatcher view: fleet dashboard, load board, IFTA status
- Offline-capable for in-cab use in dead zones

**6. Accounts and Fleet Management**
- Multi-truck roster (up to 10 trucks on Pro)
- Driver profiles with CDL and document tracking (expiry alerts)
- Basic company profile and DOT/MC number storage

**7. Pricing and Billing**
- Free tier: 1 truck, 5 loads/month, IFTA tracking (no report export)
- Starter ($29/month): 1 truck, unlimited loads, IFTA quarterly report, driver settlement
- Pro ($59/month): up to 10 trucks, ELD integration, QuickBooks sync, driver app, priority support
- Month-to-month only; no annual lock-in required (annual discount available as upsell)

### Out of Scope for MVP

The following are explicitly deferred to Phase 2 or later to keep MVP achievable in 6–8 weeks:

- **Proprietary ELD hardware** — integration-only; no FMCSA hardware certification overhead
- **DAT load board integration** — API costs ($100+/month) unsustainable at early revenue levels; start with Truckstop integration (Phase 2)
- **Automated IFTA e-filing** (direct state submission) — requires per-state integration; deferred to Phase 3
- **Fuel card integration** (EFS, Comdata) — high-value but not essential for MVP; Phase 2
- **Freight broker features** — not the target customer; out of scope entirely
- **Accounting module** (invoicing, P&L) — QuickBooks/Xero sync covers this; no need to build full accounting
- **Geotab and Garmin ELD integrations** — Motive + Samsara cover ~60% of the market; add others in Phase 2
- **DVIR (pre/post-trip inspection)** — valuable but not compliance-critical for MVP; Phase 2

### MVP Success Criteria

The MVP is considered successful and ready for Phase 2 investment when:

1. **Revenue gate**: 50 paying customers within 90 days of public launch
2. **IFTA validation**: ≥10 users successfully generate and use IFTA quarterly reports from the app (confirms core value delivery)
3. **Retention signal**: 30-day retention ≥70% for paying customers (compliance stickiness confirmed)
4. **Community traction**: Organic TruckersReport or r/Truckers thread with 20+ replies praising the product
5. **ELD integration stability**: Motive and Samsara integrations maintain ≥98% sync success rate
6. **Support volume**: <10% of active users contact support per month (indicating sufficient self-service UX)

**Go/No-Go Decision at Month 3:**
- Hit all 6 criteria → proceed with Phase 2 (load board, fuel card, additional ELD integrations)
- Hit 4/6 criteria → iterate on failing criteria; extend runway by 60 days before re-evaluating
- Hit <4/6 → reassess positioning and target segment; consider IFTA-only pivot

### Future Vision

**Phase 2 (Months 3–6): Connectivity and Growth**
- Truckstop.com load board integration (view and claim loads in-app)
- DAT load board integration (once revenue supports API costs)
- Geotab and Garmin ELD API integrations
- Fuel card sync (EFS, Comdata) for automatic fuel purchase logging
- QuickBooks Direct Connect (automated settlement and expense sync)
- Referral program (operators refer peers; standard community flywheel)

**Phase 3 (Months 6–12): Moat Features**
- Automated IFTA e-filing (direct state submission in all 48 IFTA jurisdictions)
- Driver app with HOS log summary (compliance dashboard for driver)
- Fleet maintenance tracking (PM schedules, inspection records, DVIR)
- Document management (insurance certs, CDL expiry, IFTA licenses)
- DAT load posting (for owner-ops who broker occasional loads)

**2–3 Year Vision**
- The operating system for the independent trucking business — from finding loads to filing taxes
- Embedded financial services: fuel advances, factoring integration (OTR Capital, Triumph Business Capital)
- Insurance marketplace integration (occupational accident, physical damage)
- Potential acquisition target for a load board (DAT, Truckstop) or major ELD vendor seeking the owner-operator segment
- Expansion into Canada (IFTA applies in Canadian provinces; large owner-operator market)

**Longer-term positioning**: Not merely a TMS but the platform that independent truckers trust to run their business. The financial data moat (load history, revenue, IFTA records, settlement history) creates a strong basis for embedded financial products — the highest-margin opportunity in the SMB software stack.

---

## Competitive Positioning Summary

| Dimension | Our Position | Nearest Competitor |
|---|---|---|
| Price (1–10 trucks) | $59/month flat | Motive $35–$70/vehicle/month |
| Contract | Month-to-month | Motive 12-mo; Samsara 36-mo |
| ELD hardware | Bring-your-own (API) | Hardware purchase required |
| IFTA | Automated, included | Add-on or separate tool |
| Dispatch | Included | Separate subscription |
| Mobile UX | Driver-first design | Desktop-first with mobile app |
| Target segment | 1–10 trucks | 5–500 trucks (enterprise bias) |

**The single line pitch:** *Motive for $59/month, no contract, no hardware.*

---

_Product Brief generated: 2026-06-03_
_Input: Owner-Operator Trucking TMS shortlisted idea (Score: 94/105) + Market Research Report_
_Next recommended workflow: `create-prd` — Product Requirements Document_
