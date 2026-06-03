---
stepsCompleted: [step-01-init, step-02-discovery, step-02b-vision, step-02c-executive-summary, step-03-success, step-04-journeys, step-05-domain, step-06-innovation, step-07-project-type, step-08-scoping, step-09-functional, step-10-nonfunctional, step-11-polish, step-12-complete]
inputDocuments:
  - ideas/shortlisted/owner-operator-trucking-tms.md
  - _bmad-output/planning-artifacts/brief-small-fleet-tms.md
workflowType: prd
project_name: small-fleet-tms
user_name: Root
date: 2026-06-03
classification:
  projectType: saas_b2b_mobile
  domain: logistics_compliance
  complexity: high
  projectContext: greenfield
---

# Product Requirements Document — Small Fleet TMS

**Author:** Root
**Date:** 2026-06-03
**Project:** small-fleet-tms
**Status:** Complete

---

## Executive Summary

Small Fleet TMS is a flat-rate, mobile-first Transportation Management System targeting owner-operators and micro-fleets (1–10 trucks). The product replaces a fragmented $112–$365/month stack — ELD, IFTA filing, dispatch, and load tracking across 3–5 tools — with a single $59/month subscription requiring no long-term contracts and no proprietary hardware.

The target segment is 922,854 independent owner-operators and micro-fleet managers who are federally mandated to maintain ELD compliance and file IFTA quarterly, yet are systematically priced out of the enterprise platforms (Motive, Samsara) that address those mandates. No current product below $100/month combines automated IFTA filing, load dispatch, driver settlements, and ELD API integration for this fleet size.

The core value delivery mechanism is IFTA automation: replacing 6+ hours of quarterly manual spreadsheet work with a one-click quarterly report generated from GPS-synced mileage data. This is the primary "aha!" moment that drives conversion from free tier and generates word-of-mouth in high-trust communities (TruckersReport, r/Truckers).

Year 1 target: 500 paying customers at $59/month average = $354K ARR. The compliance-driven use case (non-discretionary filing deadlines) produces churn below typical SaaS and makes the product inherently sticky.

### What Makes This Special

**Flat fleet pricing eliminates the penalty of growth.** Every competitor in the sub-$100 segment charges per vehicle. At $59/month for 1–10 trucks, a 3-truck operator pays the same as a solo operator. This is structurally different from the market and removes the primary reason micro-fleets stay on manual systems.

**ELD-agnostic by design.** Operators keep their existing Motive or Samsara hardware. No $150–$650 hardware upgrade. No certification overhead for us. The product integrates with the device already in the cab, via OAuth API connection, in under 15 minutes.

**Compliance as the wedge, not an add-on.** IFTA filing is mandatory, quarterly, and universally hated. By making this the core value prop rather than a premium add-on, the product has a built-in forcing function that drives trial and conversion every quarter.

**Month-to-month only.** In a market where the dominant players require 12–36 month contracts, month-to-month pricing is a genuine differentiator. In the 2024 freight recession with 10,000+ carrier exits, operators will not sign annual contracts for software they haven't validated.

**Community-native GTM.** TruckersReport (largest independent trucker forum), r/Truckers, and OOIDA are high-trust, organically active communities where a single authentic thread drives hundreds of signups. The product is built to be shared in these communities, not sold past them.

## Project Classification

- **Project Type:** Mobile-first SaaS B2B (iOS + Android primary, web dashboard secondary)
- **Domain:** Logistics / Trucking Compliance (high complexity — regulated industry)
- **Complexity:** High (federal ELD mandate, multi-jurisdiction IFTA filing, third-party API integrations)
- **Project Context:** Greenfield
- **Target Segment:** SMB / owner-operator (1–10 trucks); not enterprise

---

## Success Criteria

### User Success

**Primary success state — Marcus (solo owner-operator):**
Marcus generates his quarterly IFTA report with one click. He does not spend a Sunday manually transcribing fuel receipts and Motive logs into a spreadsheet. The report is correct enough to file as-is or with trivial corrections. He cancels TruckingOffice or stops using his spreadsheet within 30 days of signup. He posts about the product on TruckersReport unprompted.

**Primary success state — Diana (3-truck micro-fleet):**
Diana runs her bi-weekly driver settlement in under 30 minutes instead of 4–5 hours. She closes the quarter and generates IFTA reports for all 3 trucks from a single dashboard. She cancels her accountant's $35/quarter IFTA filing service. She recommends the product to other owners at her truck stop.

**Measurable user success signals:**
- User connects ELD (Motive or Samsara) and sees auto-populated IFTA mileage within 15 minutes of signup
- User generates first IFTA quarterly report within the app (not via export to spreadsheet)
- Multi-truck user runs first driver settlement through the app within first billing cycle
- User creates at least 4 loads in the dispatch module within 60 days of signup

### Business Success

**Year 1 (Month 12) targets:**
- 500 paying customers
- $29,500 MRR ($354K ARR)
- 33% free-to-paid conversion rate
- Monthly churn <4%
- CAC <$50 blended (community-led GTM)
- LTV >$1,500 (implied by <4% monthly churn at $59/month = ~25 months)
- LTV:CAC >30:1

**MVP launch gates (Month 3 — Go/No-Go):**
- 50 paying customers within 90 days of public launch
- ≥10 users successfully file IFTA reports generated by the app
- 30-day retention ≥70% for paying customers
- Organic TruckersReport or r/Truckers thread with 20+ positive replies
- Motive and Samsara ELD integrations ≥98% sync success rate
- Support contact rate <10% of MAU/month

**Year 2–3 targets:**
- $1.5M–$3M ARR (2,000–4,000 customers)
- OOIDA endorsement or partnership active
- DAT load board integration live
- Automated IFTA e-filing (direct state submissions) differentiating from TruckingOffice

### Technical Success

- ELD API sync reliability ≥98% (Motive + Samsara combined)
- Mileage jurisdiction calculation accuracy within 2% of manual verification
- IFTA report generation completes in <30 seconds for up to 10 trucks/quarter
- Mobile app functions offline for load status updates and mileage entry in dead zones
- Zero data loss on ELD sync failure (retry with backoff, user notification)
- All fleet + driver + load data encrypted at rest and in transit

### Measurable Outcomes

| KPI | Target | Timeframe | Measurement |
|-----|--------|-----------|-------------|
| MRR | $29,500 | Month 12 | Stripe |
| Paying customers | 500 | Month 12 | Billing |
| Free→Paid conversion | ≥33% | Ongoing | Cohort |
| Monthly churn | <4% | Month 6+ | Billing |
| IFTA reports generated | ≥80% of active users/quarter | Each quarter | App analytics |
| Time to first ELD connect | <15 min median | From signup | Onboarding funnel |
| Mobile sessions / total | >70% | Ongoing | Analytics |
| TruckersReport mentions | 50+ organic | Month 12 | Manual monitoring |
| NPS | ≥50 | Month 6 | In-app survey |
| Support ticket rate | <5% MAU/month | Month 3+ | Helpdesk |

---

## Product Scope

### MVP — Minimum Viable Product (Phase 1)

**MVP philosophy:** Problem-solving MVP. Deliver enough to replace the IFTA + dispatch stack for a solo owner-operator. The core loop: connect ELD → mileage tracked automatically → IFTA report generated at quarter-end. Everything else supports this loop.

**Core user journeys supported:**
- Solo owner-operator IFTA compliance (end-to-end: ELD connect → mileage sync → quarterly report)
- Multi-truck fleet dispatch (load creation → driver assignment → status tracking → settlement)
- Basic fleet management (truck roster, driver profiles, document expiry alerts)

**Must-have capabilities:**
- IFTA mileage tracking by jurisdiction (GPS or ELD API sync)
- Manual fuel purchase logging (receipt photo)
- Quarterly IFTA report generation (PDF + Excel export)
- Multi-truck IFTA aggregation (up to 10 trucks)
- Load creation, assignment, and status tracking
- Driver settlement calculations and PDF reports
- Motive ELD API integration (OAuth, trip/mileage sync)
- Samsara ELD API integration (OAuth, trip/mileage sync)
- Manual odometer entry fallback (for ELD-exempt day-cab operators)
- iOS + Android mobile app (driver view + owner/dispatcher view)
- Offline capability for in-cab use
- Freemium pricing tiers (Free / Starter $29 / Pro $59)
- Month-to-month billing, no contract lock-in

**Explicitly out of scope for MVP:**
- Proprietary ELD hardware
- DAT or Truckstop load board integration
- Automated IFTA e-filing (direct state submission)
- Fuel card integration (EFS, Comdata)
- Freight broker features
- Full accounting module / invoicing
- Geotab and Garmin ELD integrations
- DVIR (pre/post-trip inspection)

### Growth Features (Phase 2 — Months 3–6)

- Truckstop.com load board integration (view and claim loads in-app)
- DAT load board integration
- Geotab and Garmin ELD API integrations
- Fuel card sync (EFS, Comdata) for automatic fuel purchase logging
- QuickBooks Direct Connect (automated settlement + expense sync)
- Referral program (free month per referral)
- HOS summary view (read-only, pulled from ELD API)

### Vision (Phase 3 — Months 6–12+)

- Automated IFTA e-filing (direct state submission, all 48 IFTA jurisdictions)
- Driver app with HOS compliance dashboard
- Fleet maintenance tracking (PM schedules, inspection records)
- Document management (insurance certs, CDL expiry, IFTA licenses, DVIR)
- DAT load posting (for owner-ops who broker occasional loads)
- Embedded financial services: fuel advances, factoring integration
- Insurance marketplace integration
- Canada expansion (IFTA applies in Canadian provinces)

---

## User Journeys

### Journey 1: Marcus — The Solo Owner-Operator (IFTA Compliance, Happy Path)

Marcus is 44, CDL driver, one semi-truck, I-80 corridor. He's been paying $42/month for Motive ELD and $99/month for DAT load board. Every quarter, he spends a Sunday at the kitchen table manually pulling mileage state-by-state from the Motive app and entering it into a spreadsheet alongside fuel receipts. It takes 6+ hours. He missed a filing once and paid penalties. He's been burning this Sunday for four years.

**Opening scene:** Marcus sees a TruckersReport post asking "best IFTA tool for owner-ops?" Three people in the thread mention Small Fleet TMS: "replaced Motive + my spreadsheet for less than I was paying for ELD alone."

**Rising action:** Marcus visits the website. The headline says "One-click IFTA. Flat $59/month for 1–10 trucks." He signs up for the free tier (no credit card). The onboarding screen says: "Connect your ELD and we'll track your mileage by state automatically."

He taps "Connect Motive." An OAuth screen opens. He enters his Motive credentials. Three minutes later, he sees his dashboard: 47 trips this month, mileage broken down by 9 states, 4 fuel stops logged. His existing trip history imported.

**Climax:** End of September. The app sends a push notification: "Q3 IFTA report ready — 3 trucks, 9 states, $1,847 net due. Tap to review and download." Marcus opens the app, reviews the mileage breakdown, verifies two fuel stops he added manually, and taps "Download Report." He gets a PDF formatted for IFTA submission. 4 minutes. Done.

**Resolution:** Marcus's Sunday is free. He upgrades to Pro ($59/month) because he wants the dispatch module to stop juggling the DAT app and his text messages. His old stack was $141/month. His new stack is $59/month. He saves $82/month and 6 hours per quarter. He posts about it on TruckersReport. Three trucking buddies sign up within the week.

**Journey requirements revealed:** ELD OAuth connect flow, automatic mileage-by-jurisdiction calculation, fuel purchase logging, push notification at quarter-end, IFTA report PDF generation, freemium upsell flow.

---

### Journey 2: Diana — The 3-Truck Micro-Fleet (Settlement Automation + Multi-Truck IFTA)

Diana is 51, owns 3 trucks and 2 drivers, runs dedicated lanes for a regional grocery distributor. She's paying $120/month for 3 Motive subscriptions, $79/month for TruckLogics, and $35/quarter to her accountant for IFTA. Every other Saturday she reconciles Motive logs against TruckLogics loads manually. It takes 4–5 hours. Driver disputes about settlement amounts are a monthly friction point.

**Opening scene:** Diana gets an email from OOIDA ("Endorsed affordable fleet tools for small carriers"). She watches the 3-minute YouTube demo. She sees a multi-truck dashboard and automated driver settlement.

**Rising action:** Diana signs up for a Pro trial. She adds all 3 trucks and connects each Motive account via OAuth (one per truck, ~5 minutes each). She creates driver profiles for both employees. She creates her first load dispatch: Chicago to Columbus, Truck #2, Driver Mike, rate $1,450.

**Climax — Settlement:** Two weeks later, Diana runs payroll. She opens the Settlements screen: all three trucks, all loads completed in the pay period, Miles driven, gross pay, deductions. She verifies the calculation against one paper log. It matches. She taps "Approve" and the PDF settlement reports generate for both drivers. Time elapsed: 18 minutes.

**Climax — IFTA:** End of Q3. Dashboard shows: "IFTA report ready — 3 trucks, 14 states, Q3 2026." Diana downloads the consolidated report. She cancels the $35 accountant charge for the quarter.

**Resolution:** Diana's Saturday afternoon paperwork sessions shrink from 4–5 hours to under 30 minutes. She cancels TruckLogics and the accountant's IFTA service. Her monthly SaaS spend drops from $234+ to $59. She becomes a vocal advocate at her local trucking association.

**Journey requirements revealed:** Multi-truck fleet dashboard, driver profiles with load history, driver settlement calculations with pay period management, multi-truck IFTA consolidation, dispatcher view, document (settlement PDF) generation.

---

### Journey 3: Jerome — The Day-Cab Non-ELD Fleet (Clean-Slate TMS Buyer)

Jerome is 38, owns 4 box trucks, operates regionally within one state. Under ELD short-haul exemption — never needed compliance software. No TMS at all. Uses Google Sheets for dispatch and Wave for invoicing. Pain: dispatch chaos, invoice delays, no real-time load status.

**Opening scene:** Jerome googles "dispatch software for small trucking company." Finds a YouTube video comparing 5 options. Small Fleet TMS is the only one under $100/month that has a mobile app.

**Rising action:** Jerome signs up for Starter ($29/month). He creates his 4 truck profiles and adds 2 driver phone numbers. No ELD connection needed — he uses manual odometer entry for each trip. He creates 8 loads for the upcoming week in under 15 minutes using the dispatch board.

**Climax:** A driver calls Jerome at 2 PM saying "where's the next pickup?" Jerome opens the app, sees the driver has completed the morning delivery, and assigns the next load with one tap. The driver receives a push notification on his phone with the pickup address and load details. Jerome's Google Sheets dispatcher board is retired.

**Resolution:** Jerome has a real dispatch board. His drivers get their assignments on their phones. He can see all 4 trucks on one screen. He starts using load tracking to invoice clients faster on delivery confirmation.

**Journey requirements revealed:** Truck and driver roster (no ELD required), manual load creation with origin/destination/rate, driver mobile load assignment and notification, real-time load status tracking, dispatcher dashboard view, no-ELD onboarding path.

---

### Journey 4: Admin/Ops — Fleet Owner Managing Compliance Documents

Diana (3-truck fleet) needs to track CDL expiry dates for her two drivers and keep insurance certificates current for her DOT audit.

**Scene:** Diana's fleet dashboard shows a yellow alert: "Driver Mike's CDL expires in 45 days." She clicks and sees the full document panel: CDL copy, expiry date, medical certificate. She uploads a renewal scan, updates the expiry date, and the alert clears. At audit time, she pulls all three trucks' documents from one screen.

**Journey requirements revealed:** Driver document upload and storage, CDL/medical certificate expiry tracking with alerts, company DOT/MC number storage, basic compliance document management.

---

### Journey 5: Driver Mobile Experience (Secondary User)

Alex is Diana's driver on Truck #2. He doesn't own the account — he just needs to see his loads and confirm deliveries.

**Scene:** Alex gets a push notification at 6 AM: "New load assigned: Columbus, OH → Detroit, MI. Pickup 9 AM. $1,150." He opens the app, sees load details, BOL number, and customer contact. At delivery, he taps "Delivered" and uploads a photo of the signed BOL. Diana's dashboard updates automatically.

**Journey requirements revealed:** Driver-specific mobile view (loads only, no financial data), push notification for load assignment, delivery confirmation with photo upload, limited role-based access (driver vs. owner).

---

### Journey Requirements Summary

| Capability Area | Revealed By |
|---|---|
| ELD OAuth connect (Motive, Samsara) | Journey 1 |
| GPS/ELD mileage-by-jurisdiction tracking | Journey 1 |
| Fuel purchase logging (manual + photo) | Journey 1 |
| Quarterly IFTA report generation (PDF/Excel) | Journeys 1, 2 |
| Multi-truck IFTA consolidation | Journey 2 |
| Load creation, assignment, status tracking | Journeys 2, 3 |
| Driver settlement calculations + PDF | Journey 2 |
| Multi-truck fleet dashboard | Journeys 2, 3 |
| Manual odometer entry (no-ELD path) | Journey 3 |
| Dispatcher dashboard view | Journeys 2, 3 |
| Driver document upload + expiry alerts | Journey 4 |
| Company DOT/MC number storage | Journey 4 |
| Driver mobile view (restricted access) | Journey 5 |
| Push notifications (load assignment, IFTA ready) | Journeys 1, 5 |
| BOL photo upload + delivery confirmation | Journey 5 |
| Role-based access (owner vs. driver) | Journey 5 |
| Freemium tier gating + upgrade prompts | Journey 1 |

---

## Domain-Specific Requirements

### Compliance & Regulatory

**ELD (Electronic Logging Device) Mandate — FMCSA 49 CFR Part 395:**
- All interstate CDL commercial motor vehicles (>10,001 lbs GVWR or 8+ passengers) must use an FMCSA-registered ELD device
- The product does NOT require FMCSA hardware certification — it integrates with certified devices via API and does not itself log HOS
- HOS data is read-only (pulled from ELD API); the product makes no changes to HOS records
- ELD short-haul exemption (day-cab, ≤100 air-miles, return to work location): these operators are excluded from ELD mandate; manual odometer entry path must be available

**IFTA (International Fuel Tax Agreement):**
- All 48 contiguous US states + 10 Canadian provinces are IFTA members (DC is not a member)
- Quarterly filing deadlines: January 31, April 30, July 31, October 31
- Reporting basis: miles driven per jurisdiction / fuel purchased per jurisdiction → net fuel tax owed/refunded per state
- Mileage must be tracked by jurisdiction boundary crossing (state line), not estimated
- Fuel purchase records must include: date, jurisdiction, gallons, price per gallon, odometer reading
- Each qualified vehicle (over 26,000 lbs GVWR or 3+ axles) on IFTA accounts requires separate per-truck IFTA calculation
- The product generates IFTA quarterly reports; it does not file them directly (automated e-filing is Phase 3)
- Accuracy requirement: IFTA mileage calculations must be within 2% of actual mileage per jurisdiction (per product brief); audits compare GPS data against submitted reports

**DOT/FMCSA Registration:**
- Motor carriers must display USDOT number on vehicles
- The product stores DOT and MC numbers as required compliance fields, not for any real-time lookup
- No requirement to integrate with FMCSA SAFER system for MVP

**Driver Qualification Files (DQ Files):**
- Carriers must maintain CDL, medical certificate, and driver history records for each employed driver
- The product provides document storage and expiry alerts for CDL and medical certificates as a convenience feature
- The product is not a full DQ file management system; this is a lightweight compliance aid, not an audit-ready DQ module

### Technical Constraints

**ELD API integration constraints:**
- Motive API: OAuth 2.0 authorization; rate limits apply (check Motive developer docs for per-account limits); returns trip data including odometer readings and GPS coordinates; state/jurisdiction boundaries must be calculated client-side from GPS data
- Samsara API: OAuth 2.0 authorization; similar trip/GPS data structure; separate API key per fleet account
- ELD data is owned by the carrier; the product must not share individual operator GPS data with third parties without explicit consent
- API sync failure must not result in data loss; all raw trip data must be buffered locally before processing

**Geographic jurisdiction boundary calculation:**
- Mileage-by-state calculation requires matching GPS coordinates against US state boundary polygons
- Precision requirement: ≥98% boundary crossing accuracy (a truck crossing from OH to PA must be attributed correctly within the IFTA reporting period)
- GPS gap tolerance: brief GPS outages (tunnels, dead zones) must be interpolated using last-known heading and speed; gaps >30 minutes require manual reconciliation flag

**Mobile-first constraints:**
- Primary users access the product from iOS and Android phones in-cab or at truck stops
- Network connectivity is unreliable; app must function offline for: viewing active loads, entering fuel stops, entering manual odometer readings, viewing driver settlement data
- Offline data must sync automatically when connectivity resumes
- App size must be reasonable for users on limited data plans (<50MB install)

**Data retention:**
- IFTA regulations require carriers to retain fuel records and trip logs for 4 years after the filing date
- The product must retain IFTA-relevant data (mileage, fuel purchases) for a minimum of 4 years per account
- Account deletion must provide a full data export before deletion completes

### Integration Requirements

**ELD Integrations (MVP):**
- Motive (KeepTruckin) API — trip history, GPS coordinates, odometer readings
- Samsara API — trip history, GPS coordinates, odometer readings

**QuickBooks (MVP Pro tier):**
- QuickBooks Online API — sync driver settlement records as expenses; sync revenue from loads as income
- OAuth 2.0 authorization; data flow is one-way export from Small Fleet TMS to QuickBooks

**Stripe (billing):**
- Subscription billing via Stripe; supports free tier, Starter ($29), Pro ($59)
- No payment card data stored in Small Fleet TMS (Stripe tokenization)

**Phase 2 integrations (not MVP):**
- Truckstop.com load board API
- DAT load board API
- EFS / Comdata fuel card API
- Geotab API
- Garmin ELD API

### Risk Mitigations

| Risk | Mitigation |
|---|---|
| Motive/Samsara API changes | Pin to stable API versions; monitor changelog; maintain fallback manual odometer entry |
| IFTA jurisdiction boundary accuracy | Use authoritative state boundary GeoJSON (US Census TIGER data); version boundary data separately from app; audit against known test routes |
| IFTA filing errors causing operator penalties | Clearly label generated reports as "for review before filing"; include disclaimer; surface reconciliation flags for GPS gaps |
| ELD sync failure losing mileage data | Buffer raw API responses before processing; retry with exponential backoff; user notification on sync failure |
| FMCSA regulatory changes to ELD spec | Product does not store HOS records; changes to ELD hardware certification do not affect the product |
| Load board API costs at scale (DAT) | Defer DAT to Phase 2; evaluate revenue feasibility before committing to API cost |

---

## Innovation & Novel Patterns

### Detected Innovation Areas

**Flat fleet pricing in a per-vehicle market.** Every competitor in the sub-$100 TMS segment charges per truck per month. The fixed-fleet pricing model ($59 for 1–10 trucks) is a structural innovation in how this category is monetized, not a UI feature. It requires different revenue modeling (average fleet size matters), but eliminates the most common objection ("I'll sign up when I can justify the per-truck cost") and removes the growth penalty that keeps micro-fleets on manual systems.

**ELD-agnostic compliance integration.** The compliance TMS market has been structured around hardware lock-in (buy our ELD, get our software). Small Fleet TMS inverts this: bring your existing hardware, connect via API, get compliance software that works with the device you already trust. This is novel in the sub-$100 segment; no current competitor offers API-only ELD integration without a hardware purchase or proprietary device requirement.

**IFTA as the core value wedge, not a compliance checkbox.** Most TMS products treat IFTA as a feature. Small Fleet TMS treats it as the primary reason to exist. This positions the product around a federally mandated pain point (not a nice-to-have), creating an organic forcing function for quarterly re-engagement regardless of dispatch activity.

### Validation Approach

- **Flat pricing validation:** Monitor fleet size distribution at signup; if median fleet size is <3 trucks at scale, flat pricing is margin-accretive. If clusters at 9–10 trucks, may need to reconsider pricing ceiling.
- **ELD integration adoption:** Track % of signups who complete ELD OAuth connection. If <50% connect within 30 days, investigate friction (OAuth UX, device compatibility, instructions). Manual odometer path must remain viable.
- **IFTA report quality:** Post-quarter survey: "Did you use this report to file IFTA, or did you need to make significant manual corrections?" Target ≥80% file as-is or with minor corrections.

### Risk Mitigation

| Innovation Risk | Mitigation |
|---|---|
| Flat pricing unsustainable at large fleet sizes | Cap at 10 trucks for MVP; analyze fleet size distribution before expanding |
| ELD API access restrictions (vendors close APIs) | Build manual odometer path as primary fallback; advocate with Motive/Samsara as a distribution partner rather than just an integrant |
| Jurisdiction accuracy disputes from operators | Operator-visible reconciliation layer; allow manual correction of any state mileage entry before report export |

---

## SaaS B2B + Mobile-First Specific Requirements

### Project-Type Overview

Small Fleet TMS is a mobile-first SaaS product with the following delivery architecture:
- **iOS and Android native apps** — primary interface for owner-operators and drivers; all core features must be available on mobile
- **Web dashboard** — secondary interface for fleet owners doing admin tasks (report download, QuickBooks sync, fleet roster management)
- **Backend API** — handles ELD sync jobs, IFTA calculations, billing, and data storage
- **Third-party integrations** — Motive API, Samsara API, Stripe, QuickBooks

The product is B2B SMB: a single account owner pays and controls the account; drivers and dispatchers are secondary users with restricted access. Multi-tenancy is strict (no data leakage between fleet accounts).

### Multi-Tenancy & Access Control

**Account structure:**
- One account = one fleet (one billing entity)
- Account owner: full access to all data, billing, and settings
- Driver role: access to own load assignments, own mileage entries, delivery confirmation only
- Dispatcher role (Phase 2): access to dispatch board and load assignment; no financial data
- Bookkeeper role (Phase 2): read-only access to IFTA reports and settlement data; no operational data

**Data isolation:**
- All fleet data (trucks, drivers, loads, mileage, IFTA) is scoped to a single account
- No cross-account data access
- ELD API credentials (OAuth tokens) are stored per-account and never shared

### Tenant Model (MVP)

- Free tier: 1 truck, 5 loads/month, IFTA mileage tracking (no report export), no ELD API integration
- Starter ($29/month): 1 truck, unlimited loads, IFTA quarterly report export, driver settlement
- Pro ($59/month): 2–10 trucks, ELD API integration (Motive + Samsara), QuickBooks sync, driver app access, priority support
- All tiers: month-to-month; annual option available as upsell (10% discount)

**Feature gating must be enforced server-side.** Client-side gating is a UX aid only; tier enforcement happens at the API layer.

### Mobile UX Principles

- **Driver view is thumb-friendly:** all primary actions (view load, confirm delivery, log fuel stop) must be reachable with one hand on a 6" phone screen
- **Owner view is data-dense:** fleet owners want to see all trucks, all load statuses, and IFTA progress on one screen
- **Offline-first for in-cab features:** load view, fuel stop entry, odometer entry, delivery confirmation must work offline and sync on reconnect
- **Push notifications are critical:** load assignment (for drivers), IFTA report ready (for owners), CDL/document expiry alerts (for fleet owners)
- **No complex onboarding:** target time from signup to first value (ELD connected, mileage visible) ≤15 minutes

### Technical Architecture Considerations

- **Backend:** Node.js or Python (FastAPI) REST API; PostgreSQL for transactional data; Redis for async ELD sync queue
- **Mobile:** React Native (single codebase for iOS + Android) or Flutter; offline storage via SQLite/Realm
- **ELD sync jobs:** Background workers (queue-based) for pulling ELD API data; not real-time (15-minute polling interval sufficient for IFTA purposes)
- **IFTA calculation engine:** Stateless service; takes GPS coordinates array + state boundary polygons → returns mileage-by-state breakdown; must be independently testable
- **State boundary data:** TIGER/Line Shapefiles from US Census Bureau; licensed freely; updated annually
- **Hosting:** AWS or GCP; start single-region (us-east-1); multi-region unnecessary for MVP
- **Auth:** JWT with refresh tokens; OAuth 2.0 for ELD integrations; no SSO required for MVP

### Implementation Considerations

- ELD OAuth flows must be tested against Motive and Samsara sandbox environments before launch
- IFTA calculation accuracy must be validated against known routes before GA (test suite with documented interstate routes)
- Stripe webhook handling must be idempotent (retries should not double-charge or double-provision)
- Mobile app must pass App Store and Google Play review (no HOS logging features that trigger FMCSA app certification requirements)

---

## Project Scoping & Phased Development

### MVP Strategy & Philosophy

**MVP Approach:** Problem-solving MVP — deliver the minimum to replace IFTA filing + basic dispatch for a solo owner-operator. The test: does Marcus stop using his spreadsheet and recommend the product to his buddies?

**Resource Requirements:** 2–3 engineers (1 backend, 1 mobile/full-stack, optionally 1 frontend/infra), 1 PM/founder. 6–8 week build. No dedicated QA; founders do manual testing.

**Revenue gate before Phase 2 investment:** 50 paying customers within 90 days of launch (validates willingness to pay and distribution channel viability).

### MVP Feature Set (Phase 1)

**Core User Journeys Supported:**
1. Marcus's IFTA quarterly compliance journey (solo owner-op)
2. Diana's multi-truck fleet dispatch + settlement journey
3. Jerome's clean-slate dispatch journey (no ELD)

**Must-Have Capabilities:**
- ELD OAuth connect (Motive + Samsara); manual odometer fallback
- Mileage-by-jurisdiction tracking (GPS or ELD sync)
- Fuel purchase logging (manual entry + photo)
- IFTA quarterly report generation (PDF + Excel)
- Multi-truck IFTA consolidation (up to 10 trucks)
- Load creation, assignment, status tracking (6 statuses)
- Driver settlement calculation + PDF report
- Fleet roster (trucks + drivers; up to 10 trucks on Pro)
- Driver document upload + CDL/medical expiry alerts
- iOS + Android mobile app (driver view + owner/dispatcher view)
- Offline capability for load view, fuel entry, delivery confirmation
- Push notifications (load assignment, IFTA ready, document expiry)
- Free / Starter / Pro tier pricing via Stripe
- Month-to-month billing; no contract lock-in

### Post-MVP Features

**Phase 2 (Months 3–6) — Growth:**
- Truckstop.com load board integration
- DAT load board integration (pending revenue validation of API cost)
- Geotab + Garmin ELD integrations
- Fuel card sync (EFS, Comdata)
- QuickBooks Direct Connect (automated sync)
- HOS summary view (read-only from ELD)
- Dispatcher role (separate from owner)
- Bookkeeper read-only access tier
- Referral program

**Phase 3 (Months 6–12) — Vision:**
- Automated IFTA e-filing (direct state submission, all 48 jurisdictions)
- Driver app with HOS compliance dashboard
- Fleet maintenance tracking (PM schedules, DVIR)
- Full document management (insurance certs, IFTA license, CDL, full DQ file)
- DAT load posting
- Embedded financial services (fuel advances, factoring)
- Insurance marketplace
- Canada (IFTA provinces)

### Risk Mitigation Strategy

**Technical Risks:**
- ELD API reliability and rate limits → Build manual odometer path as always-available fallback; implement queue-based sync with retry; monitor API health per integration
- IFTA boundary accuracy → Validate calculation engine against 20+ documented test routes before launch; expose reconciliation flags to operators
- Mobile app store approval → Avoid any HOS logging features; position clearly as "fleet management" not "ELD solution"

**Market Risks:**
- Motive or Samsara entering the sub-$100 segment → Differentiate on flat pricing and community trust; accelerate OOIDA partnership conversations
- DAT/Truckstop API costs eroding margin → Defer load board integration until revenue supports it; community GTM does not depend on load board
- Freight recession reducing trucker population → Target the highest-surviving segment (owner-ops on dedicated lanes, not spot-only); IFTA compliance need persists regardless of freight market

**Resource Risks:**
- Slim team hitting ELD API complexity → Scope MVP to Motive + Samsara only; manual entry covers everyone else
- Underestimated mobile offline complexity → React Native + AsyncStorage for offline queue; offline-first architecture decision made at project start, not retrofitted
- Support volume overwhelming small team → Invest in onboarding UX; target <5% MAU/month support rate; community (TruckersReport) becomes first-line support

---

## Functional Requirements

### Account & Fleet Management

- FR1: Fleet owners can create an account with email/password and company name
- FR2: Fleet owners can add, edit, and deactivate truck profiles (year, make, VIN, license plate, DOT unit number, IFTA license plate state)
- FR3: Fleet owners can add, edit, and deactivate driver profiles (name, CDL number, CDL expiry, medical certificate expiry, phone number)
- FR4: Fleet owners can upload and store compliance documents per driver (CDL scan, medical certificate) and per truck
- FR5: Fleet owners receive in-app and push notifications when CDL or medical certificate expiry is within 60 days
- FR6: Fleet owners can store and view their USDOT number, MC number, and home base jurisdiction
- FR7: Fleet owners can invite drivers to access their assigned loads via the driver mobile view
- FR8: Drivers can access their own load assignments and delivery workflow without accessing financial or fleet data
- FR9: Fleet owners can manage subscription tier and billing via Stripe-hosted billing portal

### IFTA Compliance & Reporting

- FR10: The system tracks vehicle miles traveled by IFTA jurisdiction for each connected truck, using GPS data from integrated ELDs
- FR11: Fleet owners can log fuel purchases manually (date, jurisdiction, gallons, price per gallon, odometer) with optional receipt photo
- FR12: The system calculates net IFTA fuel tax owed or refunded per jurisdiction for a given quarter, using tracked mileage and logged fuel purchases
- FR13: Fleet owners can generate a quarterly IFTA report as a downloadable PDF and Excel file
- FR14: Fleet owners can generate a consolidated IFTA report covering all trucks on their account
- FR15: Fleet owners can view IFTA mileage-by-state data in real time, not just at quarter-end
- FR16: The system flags any jurisdiction records with GPS gaps exceeding 30 minutes that may require manual review before filing
- FR17: Fleet owners can manually correct any jurisdiction mileage entry before generating the final IFTA report
- FR18: Operators without ELD integration (short-haul exemption) can enter mileage manually per trip and per state

### Load Dispatch & Management

- FR19: Fleet owners and dispatchers can create loads with: origin address, destination address, pickup date/time, delivery date/time, commodity, rate, BOL number, and load notes
- FR20: Fleet owners can assign a load to a driver and a truck from the fleet roster
- FR21: Loads progress through six statuses: Draft, Assigned, Picked Up, In Transit, Delivered, Invoiced
- FR22: Fleet owners and dispatchers can view all loads across all trucks in a single dispatch board view, filterable by status, driver, and truck
- FR23: Fleet owners can generate a rate confirmation document (PDF) for each load
- FR24: Drivers can view their assigned loads and update load status (Picked Up, Delivered) from the mobile app
- FR25: Drivers can upload a photo of the signed BOL as proof of delivery
- FR26: Fleet owners can search and filter load history by date range, driver, truck, status, and origin/destination

### ELD Integration

- FR27: Fleet owners can connect their Motive (KeepTruckin) account via OAuth 2.0; the system pulls trip history and GPS mileage data
- FR28: Fleet owners can connect their Samsara account via OAuth 2.0; the system pulls trip history and GPS mileage data
- FR29: ELD trip data syncs automatically on a polling interval (≤15 minutes); fleet owners can trigger a manual sync at any time
- FR30: Fleet owners can view ELD sync status per truck (last sync time, sync success/failure)
- FR31: Fleet owners receive a notification if ELD sync fails for more than 2 consecutive polling intervals
- FR32: Fleet owners can disconnect an ELD integration and the system retains all previously synced mileage data

### Driver Settlements

- FR33: Fleet owners can configure pay period type per driver (weekly or bi-weekly) and pay calculation method (per-mile rate, percentage of load rate, or flat per-load)
- FR34: The system calculates earnings per driver for a given pay period based on completed loads and configured pay method
- FR35: Fleet owners can review, adjust, and approve a driver settlement before generating the report
- FR36: Fleet owners can generate a driver settlement PDF report per driver per pay period
- FR37: Fleet owners can view settlement history per driver

### Mobile App

- FR38: The mobile app provides a driver-specific view showing only: active loads, load details, delivery confirmation, and fuel stop entry
- FR39: The mobile app provides an owner/dispatcher view showing: fleet dashboard, dispatch board, IFTA summary, and settlement access
- FR40: Core features (load view, fuel entry, odometer entry, delivery confirmation) are available offline and sync when connectivity resumes
- FR41: Drivers receive push notifications for new load assignments
- FR42: Fleet owners receive push notifications for IFTA quarterly report readiness and document expiry alerts
- FR43: The mobile app supports iOS 15+ and Android 10+ (covers ≥90% of trucking smartphone market)

### Billing & Subscriptions

- FR44: Free tier: 1 truck, 5 loads/month, IFTA mileage tracking without report export, no ELD integration
- FR45: Starter tier ($29/month): 1 truck, unlimited loads, IFTA quarterly report export, driver settlement
- FR46: Pro tier ($59/month): up to 10 trucks, ELD integration, QuickBooks sync, driver app access, priority support
- FR47: All tiers are month-to-month; annual billing available at 10% discount
- FR48: Fleet owners can upgrade or downgrade their tier at any time; changes take effect at the next billing cycle
- FR49: When a Free tier user attempts an action restricted to paid tiers, the system presents an upgrade prompt with tier comparison

---

## Non-Functional Requirements

### Performance

- IFTA report generation completes in <30 seconds for a 10-truck account covering a full quarter
- Load dispatch board loads within 3 seconds on a 4G LTE connection
- ELD mileage sync processes and updates jurisdiction totals within 5 minutes of sync completion
- Mobile app initial load (after login) completes within 4 seconds on a 4G connection

### Security

- All data encrypted at rest (AES-256) and in transit (TLS 1.3+)
- ELD OAuth tokens stored encrypted; never exposed in API responses or logs
- Fleet accounts are strictly isolated; no cross-account data access at any API layer
- Compliance documents (CDL scans, medical certificates) stored in encrypted object storage with signed URL access (not public URLs)
- Stripe handles all payment card data; no card data stored in Small Fleet TMS
- Account authentication via JWT (15-minute access token, 30-day refresh token); refresh tokens are rotated on use
- Rate limiting on auth endpoints to prevent credential stuffing

### Reliability

- ELD sync infrastructure targets ≥99% uptime (downtime during off-hours sync windows is acceptable)
- IFTA calculation engine is stateless and independently deployable; a calculation failure does not affect dispatch or settlement functionality
- Offline-first mobile architecture ensures no data loss during connectivity outages; sync queue persists across app restarts
- ELD sync failures do not corrupt previously synced mileage data; all raw ELD API responses buffered before processing
- IFTA and settlement data retained for minimum 4 years per account (IFTA audit retention requirement)

### Scalability

- System designed for 0–2,000 active fleet accounts in Year 1 (no horizontal scaling required at MVP stage)
- ELD sync queue must handle burst processing at quarter-end (all accounts generating IFTA reports simultaneously) without degradation
- Database schema supports multi-truck accounts without per-truck table partitioning at MVP scale
- Queue-based architecture for ELD sync jobs enables horizontal worker scaling when needed in Phase 2

### Integration Reliability

- Motive and Samsara ELD integrations must maintain ≥98% sync success rate over any 30-day period
- ELD sync retries with exponential backoff on API errors (max 3 retries per sync cycle)
- QuickBooks OAuth integration handles token expiry gracefully (automatic re-auth prompt to user)
- Stripe webhook processing is idempotent (duplicate webhooks do not cause double provisioning or double billing)

### Accessibility

- Mobile app meets WCAG 2.1 Level AA for text contrast and tap target sizes (minimum 44×44pt)
- All primary actions are reachable with one hand on a standard 6" phone screen
- Push notifications must have sufficient text description for users with screen readers (no icon-only notifications)

---

_PRD generated: 2026-06-03_
_Workflow: create-prd (automated, non-interactive)_
_Input: brief-small-fleet-tms.md + owner-operator-trucking-tms.md (Score: 94/105)_
_Next recommended workflow: `create-architecture` — Technical Architecture Design_
