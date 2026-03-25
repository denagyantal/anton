---
stepsCompleted: [step-01-init, step-02-discovery, step-02b-vision, step-02c-executive-summary, step-03-success, step-04-journeys, step-05-domain, step-06-innovation, step-07-project-type, step-08-scoping, step-09-functional, step-10-nonfunctional, step-11-polish, step-12-complete]
inputDocuments: ["ideas/shortlisted/landscaping-lawn-care.md", "_bmad-output/planning-artifacts/research/market-landscaping-lawn-care-research-2026-03-24.md", "_bmad-output/planning-artifacts/product-brief-landscaping-lawn-care.md"]
workflowType: 'prd'
date: '2026-03-25'
author: Root
project_name: 'MowPro — Lawn Care Business OS'
classification:
  projectType: saas_b2b
  domain: general
  complexity: medium
  projectContext: greenfield
---

# Product Requirements Document — MowPro

**Author:** Root
**Date:** 2026-03-25

## Executive Summary

MowPro is a mobile-first, lawn-care-specific Business OS for solo operators and small crews (1–5 people). It combines CRM, scheduling, dispatching, invoicing, route optimization, satellite property measurement for instant quoting, and chemical application tracking into a single platform — priced at a $79–$99 one-time lifetime deal, less than a single month of Jobber Connect.

The US landscaping services market reached $184–$189B in 2025 with 726,000+ businesses. The average landscaping company has 2 employees, 70%+ have 1–4 workers, and 59% earn under $500K/year. These operators spend 10+ hours per week on admin, use 7–9 fragmented software tools, and cite cost (50%) and learning curve (43%) as top adoption barriers. The competitive landscape is consolidating under private equity — ServiceTitan IPO'd at $8.9B, LMN/SingleOps/Greenius merged into Granum, WorkWave acquired RealGreen — driving price increases, support quality decline, and feature stagnation.

No affordable platform combines satellite-based property measurement, route optimization, chemical tracking, and seasonal scheduling. Free tools (Yardbook) lack dispatching, 2FA, and iOS support. Professional tools (Jobber $39–$199/month, Service Autopilot $49–$199/month, LMN $297–$598/month) price out small operators. MowPro fills this gap.

Go-to-market launches via AppSumo at $79 (capped at 500 seats), targeting the lawn care community through LawnSite.com, r/lawncare (500K+ members), Facebook groups, and trade shows. Transition to $29–$39/month SaaS pricing at month 6.

### What Makes This Special

1. **Satellite property measurement for instant quoting** — Draw property boundaries on satellite imagery, calculate square footage, generate quotes in 30 seconds vs. 30 minutes for an on-site visit. No competitor at this price point offers integrated satellite measurement connected to CRM/invoicing.
2. **Route optimization included at base price** — AI-powered route planning reduces drive time by up to 35%, saving 2+ hours per crew per day. Most affordable tools either lack route optimization or charge extra. MowPro delivers the single highest-ROI feature at no additional cost.
3. **Lawn-care-specific, not generic field service** — Seasonal scheduling templates (spring cleanup → weekly mowing → fall aeration → winter snow removal), chemical application tracking, property measurement — features generic platforms don't understand. Built for lawn care, not adapted from plumbing/HVAC software.
4. **$79–$99 lifetime deal vs. $1,200–$7,200/year** — One-time cost less than a single month of LMN. No monthly subscription, no per-user fees, no mid-contract price increases. Directly targets the 50% who cite cost as their top adoption barrier.
5. **Chemical application compliance built in** — Log applications with EPA registration numbers, applicator certifications, active ingredients, dilution rates, and methods. State compliance report generation with 7-year record retention. Integrated into scheduling and invoicing — one system, not four.
6. **PE-proof simplicity** — While every major competitor is getting acquired, merged, and price-hiked under private equity, MowPro is bootstrapped with a lifetime deal model. No investors pushing for 25% annual price increases.

## Project Classification

- **Project Type:** SaaS B2B (multi-tenant web application with mobile-first PWA)
- **Domain:** Field Services / Landscaping & Lawn Care
- **Complexity:** Medium — handles financial transactions (Stripe Connect for payment processing), chemical compliance tracking (EPA/state regulations), GPS/routing (OSRM), and satellite imagery (Mapbox/Google Maps)
- **Project Context:** Greenfield — new product, no existing codebase

---

## Success Criteria

### User Success

| Metric | Target | How Measured |
|--------|--------|--------------|
| Time-to-first-route | Under 15 minutes | Signup to first optimized route generated |
| Admin time reduction | 60%+ self-reported reduction | Periodic in-app survey; proxy: planning time per week |
| Route efficiency gain | 25%+ shorter total drive distance | Before/after route distance comparison |
| Quoting speed | Under 2 minutes per satellite quote | Time from address entry to quote sent |
| Properties serviced/day increase | 15%+ more jobs per crew | Properties completed per day tracked in-app |
| Invoice collection rate | 90%+ within 7 days | Payment received within 7 days of invoice |
| Monthly active usage | 75%+ of registered users | Users who log in and complete at least one job per week |

### Business Success

| Metric | 3-Month Target | 12-Month Target |
|--------|---------------|-----------------|
| Total users | 800 | 5,000+ |
| Customer properties managed | 20,000 | 100,000+ |
| Monthly Active Users | 75% | 80% |
| Routes optimized/month | 5,000 | 50,000+ |
| Satellite quotes generated | 2,000 | 25,000+ |
| Cumulative revenue (all sources) | $50K | $300K+ |
| MRR (SaaS only) | $1K | $10K+ |
| AppSumo launch conversion | 2%+ of page views | — |
| NPS | 45+ within 90 days | 50+ |
| G2/Capterra rating | 4.5+ stars | 4.5+ stars |
| Monthly churn (SaaS) | — | <4% |
| CAC | — | <$25 |

### Technical Success

| Metric | Target |
|--------|--------|
| API response time (95th percentile) | <500ms under normal load |
| Application uptime | 99.9% during business hours |
| Route optimization response time | <5 seconds for routes with up to 30 stops |
| Satellite imagery load time | <3 seconds on 4G mobile connection |
| Mobile Lighthouse performance score | 90+ |
| Time to deploy new release | <30 minutes |
| Zero critical security vulnerabilities | Continuous |

### Measurable Outcomes

- **Route optimization ROI**: A crew running 20 stops/day saves 2+ hours of drive time daily. At $25/hour labor cost, that's $12,500+/year per crew in recovered productive time.
- **Quoting impact**: Satellite quoting eliminates 30-minute on-site visits per quote. An operator receiving 4 quote requests/week saves 8+ hours/month and can respond instantly — reducing lost deals from delayed quotes.
- **Chemical compliance**: Integrated tracking eliminates 6 hours per technician per week of manual paperwork. Audit-ready documentation reduces compliance risk from state inspections.
- **Consolidation savings**: Replacing 7–9 separate tools with one platform eliminates $50–$200/month in fragmented subscriptions.

## Product Scope

### MVP — Minimum Viable Product

Six core modules, all included at the base price:

1. **Customer CRM & Service History** — Customer profiles with property details, service preferences, notes, and service history log. Lead tracking from inquiry to quote to customer. Customer contact directory with search. Basic customer portal for invoice viewing and payment.
2. **Scheduling & Dispatching** — Drag-and-drop weekly/bi-weekly/monthly scheduling. Recurring service templates. Crew assignment and dispatching. Rain day bulk rescheduling. Seasonal service transitions. Calendar view with day/week/month toggles.
3. **Route Optimization** — Automatic daily route optimization using OSRM + OpenStreetMap. Drag-to-reorder with automatic recalculation. Visual route map with turn-by-turn overview. Dynamic rerouting for cancellations or additions. GPS crew tracking on active routes. Route efficiency metrics.
4. **Invoicing & Payments** — One-tap job completion to automatic invoice generation. Online payment portal for customers (credit card, ACH via Stripe Connect). Payment status tracking dashboard. Automatic payment reminders (email/SMS). Batch invoicing for recurring services. QuickBooks Online integration.
5. **Satellite Property Measurement** — Satellite imagery overlay (Google Maps/Mapbox). Polygon drawing tool to trace property boundaries and lawn areas. Automatic square footage calculation. Save measurements to customer profile. Generate quotes from measurements with configurable price-per-sqft rates.
6. **Mobile-First PWA** — Progressive web app optimized for iOS + Android browsers. Offline mode for areas with poor cell coverage. Push notifications for new quote requests, payments, and schedule changes. Core workflows in 3 taps or fewer. Photo capture for job completion documentation.

### Growth Features (Post-MVP)

**Phase 2 — Months 3–6:**
- Chemical application tracking with full EPA compliance reporting and state-specific report generation
- Snow removal module with seasonal scheduling templates
- Team management and time tracking (crew time clock, labor cost per job)
- Advanced reporting (job profitability, revenue forecasting, crew productivity)
- Automated marketing (email campaigns to past customers for seasonal upselling)

**Phase 3 — Months 6–12:**
- Native iOS and Android apps with full offline capability
- Equipment tracking (maintenance schedules, fuel costs, depreciation)
- Weather-aware scheduling that auto-adjusts for rain, heat, and frost
- Multi-branch support for operators with multiple locations
- Open API for custom integrations

### Vision (Future)

**Year 2–3:**
- AI-powered quoting (pricing suggestions based on property size, complexity, local market rates)
- Marketplace connecting operators with suppliers (chemicals, equipment, parts)
- Subcontractor network for overflow work and specialized services
- Pest control and irrigation service modules for adjacent market expansion
- Community features (operator forums, template sharing, best practice guides)
- Target: $3M+ ARR, 15,000+ active operators

**Long-term vision:** The default operating system for lawn care and landscaping businesses under 10 employees — the single tool that handles every aspect from the moment a lead calls to the moment the invoice is paid, with intelligent routing, satellite quoting, and compliance tracking that make a solo operator as efficient as a 5-crew company.

---

## User Journeys

### Journey 1: Jake the Solo Operator — From Sunday Planning Hell to 30-Second Quotes

**Who:** Jake, 34, runs a one-man mowing operation in suburban Nashville. 45 recurring weekly customers plus seasonal work. Revenue: $85K/year, takes home $52K. Uses Google Calendar, a spiral notebook, Square invoicing, and Google Maps.

**Opening Scene:** It's Sunday evening. Jake is spending 3 hours planning next week's schedule and route — flipping between Google Calendar, his notebook, and Google Maps. He got a quote request Friday from a homeowner who found him on Nextdoor. He hasn't responded because he'd need to drive 25 minutes to the property to measure it. He knows the lead is probably gone.

**Rising Action:** Jake sees a LawnSite.com thread comparing Jobber alternatives. Someone mentions MowPro — $79 one-time, includes route optimization and satellite quoting. He signs up. Within 12 minutes, he's imported his customer list from a CSV, set up recurring Tuesday/Thursday mowing schedules for his top 20 clients, and the system has generated an optimized route for Tuesday. His current route has 45 minutes of unnecessary driving. The optimized version eliminates it.

**Climax:** Monday morning. Jake opens the quote request. He pulls up the address on satellite view, draws the property boundary with his finger, draws the lawn area separately. The system calculates 4,200 sq ft of lawn. At his configured $0.012/sqft rate, MowPro generates a $50/cut bid. Jake taps "Send Quote" — the customer receives a professional PDF quote with property measurements by text. Total time: 90 seconds. The customer accepts by noon. Jake adds them to Thursday's route — the system recalculates and slots them between two nearby stops.

**Resolution:** Three weeks in. Jake's routes are 30% shorter — he's home by 4 PM instead of 5:30 PM. He's quoted 6 properties without driving to any of them and won 4. His Sunday planning takes 20 minutes instead of 3 hours. Invoices go out automatically when he taps "Job Complete." His first thought: "I can fit 3 more lawns into my week."

### Journey 2: Maria the Growing Crew Leader — Replacing Jobber + Spreadsheets

**Who:** Maria, 41, runs a 4-person lawn care and fertilization company in suburban Phoenix. 120 recurring accounts. Revenue: $340K/year. Pays $120/month for Jobber plus maintains a separate spreadsheet for chemical application records (required by Arizona Department of Agriculture).

**Opening Scene:** Maria's crew leader calls from the field: "Which houses get the pre-emergent today?" Maria pulls up the spreadsheet on her phone — it's barely readable. She dictates 6 addresses over the phone. Meanwhile, she's manually moving 18 stops in Jobber because yesterday's rain postponed half of Tuesday's mowing route. Each stop takes 4 clicks to move. Jobber's 1% uncapped ACH fee cost her $200 this month.

**Rising Action:** Maria discovers MowPro through a fellow operator in a Facebook landscaping group. $99 one-time vs. $1,440/year for Jobber. She signs up, imports her 120 accounts (CSV from Jobber export), and sets up recurring mowing schedules. The system generates routes that are 22% shorter than her hand-planned ones. For the rain day rescheduling problem, she selects Tuesday's stops, taps "Reschedule to Thursday," and the system bulk-moves all 18 stops and recalculates Thursday's route in 3 seconds.

**Climax:** When chemical tracking goes live (Phase 2), Maria logs a fertilizer application with two taps — the chemical, rate, and lot number auto-populate from the route's service plan. Her state compliance inspector visits. Maria pulls up 2 years of application records on her tablet — sorted by property, chemical, date, with EPA numbers and applicator certifications attached. The inspector has never seen records this clean from a company this size.

**Resolution:** Maria's crews service 15% more properties per day on the same hours. The Jobber subscription is cancelled. Chemical compliance went from 2 hours/week of spreadsheet maintenance to zero — it's built into the workflow. She's planning to add snow removal this winter and the system will handle the seasonal transition.

### Journey 3: Doug the Part-Timer — Simple Enough for a Non-Tech User

**Who:** Doug, 58, retired firefighter mowing lawns 3 days a week. 18 residential customers. Revenue: $28K/year supplementing his pension. Uses a laminated paper list, collects cash/checks. His daughter set up his smartphone.

**Opening Scene:** Doug's daughter keeps telling him to "get an app." He looked at Jobber — $39/month felt expensive for 18 lawns, and the interface overwhelmed him. He looked at Yardbook — couldn't figure it out on his iPhone, and it turns out there's no iOS app. He's still collecting checks and losing $200–$400/year from customers who forget their checkbook.

**Rising Action:** Doug's daughter sees the MowPro AppSumo deal and buys it for him as a birthday gift. She spends 10 minutes adding his 18 customers by name and address. The system generates his route for Monday — a map showing the order, total distance, and estimated time. Doug looks at it: "Wait, I should hit Elm Street before Oak? That saves me from backtracking."

**Climax:** A customer pays online for the first time after receiving a text invoice. Then another. By month two, 12 of 18 customers pay online. Doug stopped chasing checks. He opens the dashboard and sees: "$2,300 collected this month, $280 in expenses logged, $2,020 net." He's never known his actual profit before.

**Resolution:** Doug shows his daughter the app at Sunday dinner. She says, "Dad, this actually looks professional." He's considering adding fertilizer service for 5 customers who've asked — the chemical tracking module (Phase 2) would handle the paperwork he's been afraid of.

### Journey 4: Crew Member — Receiving and Completing Route Assignments

**Who:** Carlos, 24, crew member on Maria's team. English is his second language. Has a 3-year-old Android phone.

**Opening Scene:** Carlos currently receives printed route sheets each morning and marks jobs complete by checking them off on paper. If a customer cancels, Maria calls or texts — sometimes the message gets lost and Carlos shows up at an empty house.

**Rising Action:** Maria adds Carlos as a crew member. He opens MowPro on his phone — the interface shows today's route as a simple list: address, service type, and a map pin. Instructions are minimal, icon-heavy. When the homeowner at Stop 3 isn't home and the gate is locked, Carlos taps "Skip — Customer Not Available." Maria sees the update instantly and calls the customer.

**Climax:** Carlos completes a mowing job, taps "Done," snaps a photo of the finished lawn, and moves to the next stop. The route dynamically adjusts because Stop 7 was cancelled mid-day — the app rerouted him past it. At 4 PM, his route summary shows 14 of 15 stops completed, 47 miles driven, 6.5 hours active.

**Resolution:** No more paper route sheets lost to wind or rain. Real-time updates mean no wasted trips to cancelled stops. Carlos's simple view shows only what he needs — next stop, map, mark complete.

### Journey 5: Residential Customer — Receiving Quotes and Paying Invoices

**Who:** Rachel, 38, homeowner in Jake's service area. Found Jake on Nextdoor. Needs weekly mowing and quarterly aeration.

**Opening Scene:** Rachel requests a quote through Jake's contact info. She expects to wait days for someone to come measure her yard and get back to her.

**Rising Action:** Within 2 minutes, Rachel receives a text with a professional quote: "$52/week for mowing (4,800 sq ft lawn), $180 for fall aeration. View details." The quote includes a satellite image of her property with the measured area highlighted. She taps "Accept" on the mowing quote.

**Climax:** Rachel's first mow happens Tuesday. She receives a text notification: "Service completed — view details." She sees a photo of her freshly mowed lawn and an invoice for $52. She taps "Pay Now," enters her card, and receives a receipt. The next week, it's on autopay.

**Resolution:** Rachel tells her neighbor: "My lawn guy sent me a quote with a satellite photo of my yard in like 2 minutes. And I just pay through the app — no more leaving checks under the mat."

### Journey Requirements Summary

| Journey | Capabilities Revealed |
|---------|----------------------|
| Jake (Solo Operator) | Customer CSV import, recurring schedule setup, route optimization, satellite measurement, polygon drawing, quote generation, quote delivery via text, dynamic route adjustment, one-tap job completion, auto-invoicing |
| Maria (Crew Leader) | Bulk CSV import, multi-crew scheduling, rain day bulk rescheduling, route optimization per crew, chemical tracking (Phase 2), compliance reporting, payment processing |
| Doug (Part-Timer) | Simplified onboarding, guided route generation, online payment collection, profit dashboard, basic customer management |
| Carlos (Crew Member) | Crew mobile view, route assignment display, job completion with photo, skip/cancel handling, dynamic rerouting, daily summary |
| Rachel (Customer) | Customer-facing quote with satellite image, quote acceptance, online payment, autopay setup, service completion notifications |

---

## Domain-Specific Requirements

### Chemical Application Compliance (Phase 2)

- Chemical applications must log: EPA registration number, applicator name and certification number, chemical product name, active ingredients, dilution rate, quantity applied, application method, target pest/weed, and weather conditions at time of application
- Records retained for minimum 7 years (longest state requirement) or until operator requests deletion
- Per-state compliance report generation (California DPR, Arizona DOA, Texas SDHS, Florida DACS formats at minimum for initial states)
- Applicator certification expiration tracking with renewal reminders
- Restricted-use pesticide flagging requiring licensed applicator confirmation before logging

### Payment Processing Compliance

- All payment processing handled via Stripe Connect — MowPro never stores, processes, or transmits raw card numbers
- PCI DSS compliance achieved through delegated payment processing (SAQ-A level)
- ACH payments comply with NACHA operating rules
- Stripe fraud detection and dispute resolution mechanisms integrated

### Operator Data Privacy

- Customer PII (name, address, contact, payment methods) encrypted at rest (AES-256) and in transit (TLS 1.2+)
- GPS/location data from crew tracking stored with 90-day rolling retention for active routes; historical route summaries retained indefinitely
- No selling or sharing of operator or customer data with third parties
- Privacy policy clearly states data handling practices
- Satellite measurement data (property boundaries, areas) stored as part of customer profile

### Legal and Business Compliance

- Invoices include standard business information (operator name, address, service description, amount, tax if applicable)
- Quote documents include disclaimer that measurements are estimates based on satellite imagery
- Chemical tracking records include disclaimer that operators are responsible for verifying compliance with local regulations
- Late payment terms configurable per operator

### Risk Mitigations

| Risk | Mitigation |
|------|-----------|
| Payment processing failure | Stripe reliability + fallback notification to operator/customer; retry logic for failed charges |
| Satellite imagery accuracy | Disclaimers on all measurements; manual adjustment capability; operators can override calculated areas |
| Chemical tracking data loss | Encrypted backups; 7-year retention; export capability to CSV/PDF for operator records |
| GPS tracking privacy concerns | Crew tracking only active during work hours; transparent data retention policy; configurable by operator |
| Route optimization inaccuracy | OSRM backed by OpenStreetMap; operators can manually reorder; feedback mechanism for road data issues |

---

## Innovation & Novel Patterns

### Detected Innovation Areas

1. **Integrated Satellite Measurement for Instant Quoting** — Standalone satellite measurement tools (SatQuote, Deep Lawn) exist but are separate subscriptions disconnected from CRM and invoicing. MowPro integrates satellite measurement directly into the quoting workflow: draw → measure → quote → send — in under 2 minutes, from a truck. This collapses a 30-minute on-site visit into a 90-second mobile interaction. The competitive moat is integration: the measurement saves to the customer profile, auto-calculates pricing, and generates a professional quote that the customer can accept with one tap.

2. **Route Optimization at Zero Marginal Cost** — By using OSRM (open-source, self-hosted) instead of commercial routing APIs, MowPro delivers route optimization at zero per-query cost. This enables inclusion at the base LTD price while competitors either charge $50+/month extra (Service Autopilot Smart Maps add-on) or don't offer it at all (Yardbook, LawnPro). The ROI is concrete and measurable: 2+ hours saved per crew per day, 35% shorter routes, visible on the first day of use.

3. **Lifetime Deal as PE-Disruption Strategy** — The landscaping software market is consolidating under private equity, creating user resentment: Service Autopilot users describe it as "garbage after the buyout" with 25%+ price increases. MowPro's LTD pricing is both a market entry strategy (AppSumo distribution) and a competitive positioning statement: "We won't raise your price because you already own it." The 1,000+ member "SA Misfits" Facebook group is a ready-made acquisition channel.

### Validation Approach

- **Satellite measurement accuracy**: Validate against 50+ manually measured properties. Target: within 5% of professional survey measurements for standard residential lots. Edge cases (heavily wooded lots, irregular shapes) flagged for manual verification.
- **Route optimization effectiveness**: A/B test optimized vs. operator-planned routes for 100+ daily route plans. Measure actual drive time savings via GPS data. Target: 20%+ distance reduction on average.
- **LTD sustainability**: Cap LTD at 500 seats. Model infrastructure costs: OSRM self-hosted eliminates routing API costs; Mapbox free tier covers satellite imagery for MVP volume. Plan SaaS transition at month 6 with $29–$39/month pricing.

### Risk Mitigation

| Innovation | Risk | Fallback |
|-----------|------|----------|
| Satellite measurement | Imagery resolution insufficient for accurate lawn boundaries | Allow manual area entry; provide measurement confidence indicator; upgrade to higher-res imagery tier |
| OSRM self-hosted routing | Self-hosted infrastructure complexity or routing quality issues | Fall back to Mapbox Directions API (has free tier); OSRM is battle-tested at scale |
| LTD pricing model | Support costs exceed LTD revenue long-term | SaaS transition at month 6; premium add-ons (chemical tracking, snow module); infrastructure costs minimized by open-source stack |

---

## SaaS Platform Requirements

### Multi-Tenancy Architecture

- **Tenant isolation model**: Logical isolation with shared infrastructure. Each operator's data isolated via tenant ID at application and database level. No operator can access another's customers, routes, or financial data.
- **Data segregation**: All queries scoped to authenticated operator's tenant context. Database-level row security policies enforced.
- **Tenant provisioning**: Automated on signup — operator account, default service types, and initial configuration created within seconds.

### Permission Model

| Role | Scope | Capabilities |
|------|-------|-------------|
| Operator (Owner) | Full account | All features: customers, scheduling, routing, invoicing, reporting, settings, billing |
| Crew Member | Assigned routes | View assigned route, mark jobs complete, add notes/photos, skip/cancel stops |
| Customer | Own profile | View invoices, pay online, view service history, submit service requests |
| Subcontractor (Post-MVP) | Assigned jobs | View job details, mark completion, submit notes — no access to customer contact info or financials |

### Subscription Tiers

**Launch (AppSumo LTD):**

| Tier | Price | Limits |
|------|-------|--------|
| Tier 1 | $79 one-time | Up to 50 customers, 2 crew members |
| Tier 2 | $99 one-time | Up to 150 customers, 5 crew members |

All tiers include all features. No feature gating. LTD capped at 500 total buyers.

**SaaS (Month 6+ for new customers):**

| Plan | Price | Limits |
|------|-------|--------|
| Solo | $29/month | Up to 50 customers, solo operator |
| Crew | $39/month | Up to 200 customers, 5 crew members |
| Pro (Future) | $59/month | Unlimited customers + advanced reporting |

### Integration Requirements

**MVP Integrations:**

| System | Purpose | Priority |
|--------|---------|----------|
| Stripe Connect | Payment processing (credit card, ACH) | Critical — Day 1 |
| OSRM (self-hosted) | Route optimization engine | Critical — Day 1 |
| Mapbox or Google Maps Static API | Satellite imagery and map tiles | Critical — Day 1 |
| QuickBooks Online API | Accounting sync (invoices, payments) | Critical — Day 1 |
| Twilio / SMS provider | Quote delivery, payment reminders, service notifications | Critical — Day 1 |
| Email service (SendGrid/SES) | Transactional emails, reminders, reports | Critical — Day 1 |
| Cloud storage (S3/equivalent) | Job photos, measurement data, documents | Critical — Day 1 |

**Post-MVP Integrations:**

| System | Purpose | Timeline |
|--------|---------|----------|
| Weather API (OpenWeatherMap) | Weather-aware scheduling and rain day detection | Month 3–4 |
| State chemical compliance databases | Pre-populated chemical product lists, EPA numbers | Month 3–4 (with chemical module) |
| Google Business Profile API | Review solicitation workflow | Month 4–5 |
| Zapier / Make | Third-party integration ecosystem | Month 6+ |

### Implementation Considerations

- **Technology stack**: Full-stack web application. Backend API (REST), relational database (PostgreSQL with PostGIS for geospatial), responsive frontend framework, mobile-optimized PWA.
- **OSRM deployment**: Self-hosted OSRM instance with North America OpenStreetMap extract. Updated monthly. Eliminates per-query routing costs.
- **Satellite imagery**: Mapbox Static Images API (free tier: 50,000 requests/month) or Google Maps Static API (free tier: 25,000 loads/month). Polygon overlay and area calculation handled client-side.
- **Offline capability**: Service worker caches route data and customer list. Jobs can be marked complete offline and synced when connectivity returns.
- **Deployment**: Cloud-hosted (AWS/GCP). Containerized for scalability. OSRM runs as a separate container/service.
- **CI/CD**: Automated testing and deployment pipeline. Deploy new releases in <30 minutes.
- **Monitoring**: APM for performance tracking, error monitoring, uptime monitoring, route optimization latency dashboard.
- **Data backup**: Automated daily backups with point-in-time recovery. RPO < 1 hour, RTO < 4 hours.

---

## Project Scoping & Phased Development

### MVP Strategy & Philosophy

**Approach:** Problem-solving MVP. Deliver 6 core modules that address the most painful daily problems: inefficient routing, slow quoting, scattered scheduling, and manual invoicing. Every MVP feature must directly reduce an operator's weekly admin burden or increase their daily job capacity.

**Resource Requirements:** Small team (2–3 full-stack engineers, 1 designer). Leverage open-source (OSRM) and third-party services (Stripe, Mapbox, Twilio) to minimize custom infrastructure. Estimated 8–10 weeks to MVP.

### MVP Feature Set (Phase 1)

**Core User Journeys Supported:**
- Solo operator onboarding and first optimized route (Jake journey)
- Satellite property measurement and instant quoting (Jake, Rachel journeys)
- Multi-crew scheduling and bulk rescheduling (Maria journey)
- Simple setup for non-tech operators (Doug journey)
- Crew member route execution (Carlos journey)
- Customer quote acceptance and online payment (Rachel journey)

**Must-Have Capabilities:**
- Customer CRM with property details and service history
- Lead tracking (inquiry → quote → customer)
- Drag-and-drop scheduling with recurring service templates
- Crew assignment and dispatching
- Rain day bulk rescheduling
- Seasonal service type management
- Route optimization (OSRM-powered) with visual map
- Dynamic rerouting for cancellations
- GPS crew tracking on active routes
- Satellite property measurement with polygon drawing
- Quote generation from measurements
- Quote delivery via SMS/email
- One-tap job completion with auto-invoicing
- Online payment portal (credit card, ACH via Stripe)
- Automatic payment reminders
- QuickBooks Online integration
- Mobile-first PWA with offline mode
- Push notifications
- Customer-facing portal (view quotes, pay invoices, request service)

### Post-MVP Features

**Phase 2 (Months 3–6):**
- Chemical application tracking with EPA/state compliance
- Snow removal scheduling module
- Crew time tracking and labor cost per job
- Job profitability reporting
- Seasonal upsell email campaigns

**Phase 3 (Months 6–12):**
- Native iOS/Android apps
- Equipment tracking and maintenance schedules
- Weather-aware auto-scheduling
- Multi-branch support
- Open API / Zapier integration

### Risk Mitigation Strategy

**Technical Risks:**
- Route optimization is the riskiest infrastructure component (self-hosted OSRM). Mitigate by deploying OSRM in a containerized environment with Mapbox Directions API as fallback. OSRM is used by major mapping platforms and is well-documented.
- Satellite imagery polygon measurement accuracy on mobile. Mitigate with clear disclaimers, manual override, and desktop fallback for complex properties.

**Market Risks:**
- Yardbook's free tier creates adoption barrier. Mitigate by leading with features Yardbook completely lacks: route optimization, satellite quoting, dispatching, and iOS support. ROI messaging: "Save 2 hours/day."
- QuoteIQ or other satellite quoting tools could add routing. Mitigate with speed to market, LawnSite community presence, and LTD pricing lock-in.

**Resource Risks:**
- If resources are constrained, launch with 4 modules (route optimization, scheduling, invoicing, CRM) and add satellite measurement and the customer portal in a fast-follow. Route optimization is the highest-ROI module and the primary acquisition story.

---

## Functional Requirements

### Customer & Property Management

- FR1: Operators can add, edit, and archive customer profiles with name, address, contact information, property details, and service preferences
- FR2: Operators can store multiple properties per customer with individual service configurations
- FR3: Operators can view service history per customer and per property, including dates, services performed, and amounts charged
- FR4: Operators can import customer lists from CSV files
- FR5: Operators can track leads through a pipeline (inquiry → quote sent → quote accepted → active customer)
- FR6: Operators can search and filter their customer directory by name, address, service type, or status
- FR7: Operators can add notes and tags to customer profiles

### Scheduling & Dispatching

- FR8: Operators can create and manage recurring service schedules (weekly, bi-weekly, monthly, quarterly, seasonal)
- FR9: Operators can drag and drop jobs on a calendar with day, week, and month views
- FR10: Operators can assign jobs to specific crew members or crews
- FR11: Operators can bulk reschedule a day's jobs to another date (rain day rescheduling)
- FR12: Operators can define seasonal service types and transition customers between them (spring cleanup → weekly mowing → fall aeration → snow removal)
- FR13: Operators can view all crew assignments for a given day across all crews
- FR14: Operators can mark individual jobs as skipped, cancelled, or rescheduled with a reason

### Route Optimization

- FR15: The system can generate optimized route sequences for a day's scheduled jobs, minimizing total drive time and distance
- FR16: Operators can view optimized routes on an interactive map with stop sequence, estimated drive times, and total distance
- FR17: Operators can manually reorder stops within an optimized route with automatic recalculation of times and distances
- FR18: The system can dynamically reroute when jobs are cancelled, added, or skipped mid-day
- FR19: Operators can track crew GPS positions on active routes in real time
- FR20: Operators can view route efficiency metrics: total distance, total drive time, number of stops, average time between stops
- FR21: Crew members can view their assigned route as a sequential stop list with addresses and service details

### Satellite Property Measurement & Quoting

- FR22: Operators can search for a property address and view satellite imagery of the location
- FR23: Operators can draw polygon boundaries on satellite imagery to define property areas, lawn areas, and bed areas
- FR24: The system can calculate square footage of drawn polygon areas
- FR25: Operators can save property measurements to the associated customer profile
- FR26: Operators can configure price-per-square-foot rates for different service types
- FR27: Operators can generate quotes from saved measurements using configured rates
- FR28: Operators can send quotes to customers via SMS or email with a professional format including satellite image and measurements
- FR29: Customers can view, accept, or decline quotes from a web link
- FR30: Operators can create quotes manually without satellite measurement (flat-rate pricing)

### Invoicing & Payments

- FR31: The system can automatically generate an invoice when an operator marks a job as complete
- FR32: Operators can create and send invoices manually for custom services
- FR33: Customers can pay invoices online via credit card or ACH through a payment portal
- FR34: Operators can configure automatic payment reminders via SMS and email with customizable schedule
- FR35: Operators can view a payment dashboard showing real-time status of all invoices (pending, paid, overdue)
- FR36: Operators can view payment history per customer with date, amount, method, and status
- FR37: Operators can create batch invoices for all recurring service completions in a date range
- FR38: Operators can connect their QuickBooks Online account and sync invoices and payments
- FR39: Customers can set up recurring autopay for ongoing services
- FR40: The system can send payment confirmation notifications to both operator and customer

### Job Execution & Documentation

- FR41: Crew members can mark jobs as complete from their mobile device
- FR42: Crew members can attach photos to completed jobs as documentation
- FR43: Crew members can add notes to jobs (e.g., "gate locked," "dog in yard," "needs extra trim")
- FR44: Crew members can mark jobs as skipped with a reason selection
- FR45: Operators can view a daily summary of completed, skipped, and remaining jobs per crew

### Notifications & Communication

- FR46: The system can send push notifications, SMS, and email for configurable events: job completed, payment received, payment overdue, quote request received, schedule change
- FR47: Operators can configure which notification channels (push, SMS, email) are active for each event type
- FR48: Customers can receive service completion notifications with optional photo
- FR49: Customers can submit service requests through the customer portal

### Account & Billing

- FR50: Users can sign up with email and password
- FR51: Users can reset their password via email link
- FR52: Operators can view and manage their subscription or LTD status
- FR53: Operators can invite crew members by email or phone number
- FR54: Operators can remove crew member access

---

## Non-Functional Requirements

### Performance

- NFR1: Dashboard and list views load in under 2 seconds on 4G mobile connection, as measured by Lighthouse and real user monitoring
- NFR2: API response time under 500ms for 95th percentile requests under normal load (up to 1,000 concurrent users), as measured by APM
- NFR3: Route optimization completes within 5 seconds for routes with up to 30 stops
- NFR4: Satellite imagery loads within 3 seconds at zoom levels required for property measurement on 4G connection
- NFR5: Polygon area calculation completes within 500ms client-side after boundary is drawn
- NFR6: Quote generation and SMS/email delivery completes within 10 seconds of operator confirmation

### Security

- NFR7: All data encrypted in transit (TLS 1.2+) and at rest (AES-256)
- NFR8: Authentication via secure token-based system with session expiry and refresh token rotation
- NFR9: Payment processing delegated to PCI DSS Level 1 compliant processor (Stripe) — MowPro never handles raw payment credentials
- NFR10: Operator data isolated at application and database query level — no cross-tenant data access
- NFR11: All authentication events, payment transactions, and data modifications logged in immutable audit trail
- NFR12: Password requirements: minimum 8 characters, complexity enforcement, breach-check integration
- NFR13: Rate limiting on authentication endpoints (max 10 failed attempts per 15 minutes per IP)
- NFR14: Crew member GPS data accessible only to the operator who manages that crew

### Scalability

- NFR15: System supports 5,000 operator accounts managing 100,000+ customer properties with no degradation in response time targets
- NFR16: System supports 10x growth (50,000 operators, 1M properties) through horizontal scaling without architectural changes
- NFR17: OSRM instance handles 100+ concurrent route optimization requests without queuing delays
- NFR18: Satellite imagery requests stay within free-tier API limits through client-side caching and tile optimization

### Reliability

- NFR19: 99.9% uptime during business hours (6 AM–8 PM local time), as measured by cloud provider monitoring
- NFR20: Automated daily database backups with point-in-time recovery; RPO < 1 hour, RTO < 4 hours
- NFR21: Offline mode allows crew members to view route and mark jobs complete without connectivity; data syncs on reconnection within 30 seconds
- NFR22: Payment processing failures trigger automatic retry (up to 3 attempts) and operator notification

### Mobile Responsiveness

- NFR23: All core workflows (view route, mark job complete, send quote, check payments) fully functional on screens 375px wide and above
- NFR24: Touch targets minimum 44×44px for all interactive elements on mobile
- NFR25: Lighthouse mobile performance score of 90+ for primary user flows
- NFR26: Polygon drawing tool functional on both touch (mobile) and mouse (desktop) input

---

*This PRD serves as the capability contract for MowPro. UX design, technical architecture, epic breakdown, and development implementation should trace back to the requirements and vision documented here. Any capability not listed in the Functional Requirements will not exist in the final product unless explicitly added via PRD amendment.*
