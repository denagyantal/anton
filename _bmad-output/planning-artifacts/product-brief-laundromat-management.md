---
stepsCompleted: [1, 2, 3, 4, 5]
inputDocuments:
  - ideas/shortlisted/laundromat-multi-location-wdf-management.md
  - _bmad-output/planning-artifacts/market-research-laundromat-management.md
workflowType: 'product-brief'
date: '2026-07-03'
author: Root
---

# Product Brief: Laundromat Multi-Location & Wash-Dry-Fold Management

---

## Executive Summary

Independent laundromat operators with 1–8 locations are running one of America's most recession-proof businesses on sticky notes, paper intake slips, and daily phone calls to attendants. The wash-dry-fold (WDF) service — the industry's fastest-growing revenue stream — is managed entirely on paper, causing lost orders, missed customer pickups, and lost revenue at every location. Meanwhile, multi-location owners have zero unified visibility into their business performance without calling each location individually.

Existing software either targets enterprise operations (Cents: $149–599/mo per location + $2,000–$3,500 hardware bundles) or handles only a single function like payments (PayRange) or single-location WDF (WDF-POS). No affordable solution exists that combines WDF order management + multi-location revenue dashboard + attendant scheduling under $99/month for operators with 2–5 locations.

This product targets the 12,000–24,000 independently owned laundromats in the US, specifically the fastest-growing cohort: new laundromat investors (YouTube/Reddit-influenced, non-technical, price-sensitive) and established multi-location operators stuck on spreadsheets. The opportunity is a flat-priced, no-hardware-required, community-validated SaaS at $49/mo (single) / $79/mo (multi-location up to 5) with a lifetime deal option at $99/$149 — a pricing model no competitor offers.

The 12-month target is $10K MRR (127 operators), with a path to $120K+ ARR via community-first GTM through r/laundromat, r/sweatystartup, and YouTube partnership with Laundromat Resource (Jordan Berry).

---

## Core Vision

### Problem Statement

Independent laundromat operators with 1–8 locations are managing their businesses using a combination of paper intake slips, group texts to attendants, phone calls for daily revenue updates, and spreadsheets that no one updates consistently. The two most acute operational failures are:

1. **WDF order chaos**: Wash-dry-fold is the fastest-growing laundromat service (growing 15%+/year, $37B → $53B market by 2035), but operators track orders with paper slips. Orders get lost, mixed up across shift changes, and customers receive no automated notification when their laundry is ready. Each lost order costs $20–80 in direct revenue plus potential customer churn.

2. **Multi-location revenue blindness**: An owner with 3 locations spends 30–60 minutes per day calling attendants to collect revenue numbers, then manually aggregating them. There is no real-time dashboard. Machine downtime goes unreported. Scheduling part-time attendants across locations requires group texts and last-minute scrambling.

### Problem Impact

The practical impact of these failures compounds across the business:

- **Direct revenue loss**: 2–5 lost WDF orders per location per month × $20–80/order = $200–$2,000/month in avoidable losses for a 3-location operator
- **Owner time tax**: 30–60 minutes/day × 30 days = 15–30 hours/month spent on manual revenue collection alone
- **Machine downtime blindness**: Unreported broken machines running undetected for hours → $20–40/cycle × cycles lost = significant revenue gap per incident
- **Staff accountability gap**: No time-clock, no attendance record, no shift-change handoff for WDF orders → attendant errors are invisible until a customer complains
- **Growth ceiling**: Operators who could expand to a 4th or 5th location are deterred because managing 3 locations with current tools is already chaotic

### Why Existing Solutions Fall Short

| Solution | Why It Fails Independent Operators |
|----------|-------------------------------------|
| **Cents** ($89–599/mo + $2K–$3.5K hardware) | Per-location pricing stacks — 3 locations = $267–$447/mo minimum; mandatory hardware bundle eliminates affordability; enterprise onboarding too complex for non-technical owners |
| **CleanCloud** ($30–110/mo/location) | Per-store pricing stacks for multi-location; no attendant scheduling; multi-location dashboard is partial, not unified |
| **TURNS** ($150–250/mo/location + contract) | Best multi-location features but $450–750/mo for 3 locations with required contracts is prohibitive for 1–3 location operators |
| **WDF-POS** (~$40–80/mo, pricing opaque) | WDF order tracking only; no multi-location dashboard; no attendant scheduling; pricing requires qualification call |
| **PayRange** | Payment hardware only — not a management platform |

The gap is explicit: no single product combines WDF order management + multi-location dashboard + attendant scheduling at flat pricing under $99/mo for 2–5 locations without hardware requirements.

### Proposed Solution

A web-based laundromat operations platform built for the independent operator with 1–5 locations, delivering three core capabilities:

**1. WDF Order Management Board**
Digital intake replaces paper slips. Attendant enters customer name, phone number, items, weight (lbs), and price-per-lb → system auto-calculates total. Every order progresses through a visible status board: Intake → Washed → Folded → Ready → Picked Up. Auto-SMS fires when order reaches "Ready" status. All attendants see the same board regardless of shift changes.

**2. Multi-Location Revenue Dashboard**
Owner sees all locations in one view: today's revenue (manually entered or webhook-connected to payment system), active WDF orders by status, and machine downtime notes. Attendant logs a broken machine → owner receives SMS alert → maintenance ticket is created. Single dashboard eliminates the daily phone-call routine.

**3. Attendant Scheduling + Time Clock**
Basic scheduling across multiple locations — who's working where and when. Attendants clock in/out from a mobile-friendly interface. Owner sees who is on-site at each location in real time. Eliminates group-text scheduling chaos and provides accountability.

### Key Differentiators

1. **Flat multi-location pricing** — $79/mo for up to 5 locations. Every competitor prices per-location. This is the #1 differentiation for multi-location operators where competing solutions would cost $447–$750/mo for the same 3 locations.

2. **No hardware required** — Runs on any phone or tablet the attendant already has. Cents and TURNS require proprietary card readers, scales, or controllers. Eliminating the $2K–$3.5K hardware bundle removes the #1 adoption barrier for small operators.

3. **Lifetime deal option** — $99 (single) / $149 (multi, up to 5 locations). No competitor offers LTD pricing. Laundromat owners think in terms of buying equipment, not renting SaaS. A one-time payment matches their mental model and dramatically lowers purchase friction.

4. **Community-built, community-validated** — Designed with r/laundromat operators in beta, not by enterprise software vendors. Peer validation in Reddit/YouTube communities drives conversions in a way that cold vendor marketing cannot.

5. **WDF-first workflow** — Built with WDF as the core use case, not an add-on. The status board, shift-change handoff, auto-SMS, and weight-based pricing calculation are designed by people who understand the WDF workflow, not enterprise laundry chain operators.

---

## Target Users

### Primary Users

**Persona 1: Marcus, The New Laundromat Investor**
- Age 34, works full-time in project management; purchased his first laundromat 18 months ago after watching Jordan Berry's Laundromat Resource YouTube channel
- Owns 2 locations in suburban Atlanta; acquired a third location 3 months ago
- Managing 3 locations is overwhelming — he calls each location's part-time attendant every evening to get revenue numbers. WDF at location #2 is growing fast but he's already lost 3 orders this month because the paper slip system breaks down at shift changes
- Budget: $50–100/mo max for software; would strongly prefer one-time purchase
- Discovery channel: YouTube → Reddit (r/laundromat) → peer referrals in laundromat investor Facebook groups
- Win condition: Can check all 3 location revenues from his phone in under 60 seconds; WDF orders never get lost; new attendants can learn the system in 10 minutes

**Persona 2: Linda, The Established Multi-Location Operator**
- Age 52; has owned laundromats for 12 years; currently runs 5 locations in the Philadelphia metro area
- WDF represents 35% of gross revenue across her busiest locations; she's tried Cents but the hardware cost and enterprise onboarding were too much
- Currently uses Google Sheets for revenue tracking (badly), group texts for scheduling, and paper slips for WDF
- Losing approximately 4–6 WDF orders per month across all locations; losing 30–45 minutes per day on phone calls for revenue check-ins
- Budget: $150–250/mo if solution is comprehensive and genuinely saves time
- Discovery channel: Peer operator recommendations, trade publications, direct Google search
- Win condition: One dashboard showing all 5 locations; machine downtime alerts that don't require her to be on-site; WDF order history she can audit

**Persona 3: Devon, The WDF-First Operator**
- Age 41; runs 2 laundromats where WDF is 45% of revenue; processes 60+ orders per week per location
- Has a dedicated WDF drop-off counter; hired 3 part-time WDF attendants; paper slip system is failing badly
- Lost orders generate customer complaints 3–4 times/month; shift-change handoffs are the biggest failure point
- Researching WDF-POS and CleanCloud but frustrated by pricing opacity and per-location fees
- Budget: $79–149/mo; will pay for order integrity
- Win condition: Zero lost orders; customers receive auto-text when laundry is ready; attendants know exactly what each bag contains during shift changes

### Secondary Users

**Laundromat Attendants** — The daily front-line users. Non-technical; often part-time with high turnover. Must be able to learn the system in a single shift. Phone-friendly interface is essential because most attendants will be on a tablet or their own phone, not a full workstation. Their cooperation determines whether WDF tracking data is accurate and whether the system succeeds or fails at each location.

**Laundromat Investors (Prospective Buyers)** — A growing cohort of people considering their first laundromat purchase who research software as part of their due diligence. YouTube channels (Laundromat Resource, Laundromat Millionaire Show) regularly discuss software tools. This segment influences which tools become industry standard for new operators and drives word-of-mouth discovery.

### User Journey

**Discovery:**
Marcus discovers the product through a YouTube video on "best laundromat software 2026" or a Reddit thread in r/laundromat where an existing user posts their experience. He visits the website, sees the flat multi-location pricing immediately, and thinks "finally, something that doesn't cost $400/month." He signs up for a 14-day free trial without a credit card.

**Onboarding:**
Marcus sets up his first location in under 10 minutes — enters location name, address, and WDF pricing ($/lb). He adds his attendants' phone numbers for scheduling. He creates a test WDF order to see the status board and confirms the auto-SMS fires. The setup is complete before he needs to call the attendant to explain it. This is the critical "aha" moment — the product works before the first attendant shift.

**Core Usage:**
Morning routine: Marcus opens the dashboard from his phone; sees last night's revenue for all 3 locations and any open WDF orders. If a machine was reported down, he already has an SMS alert and sees the maintenance note in the dashboard. He reviews the attendant schedule for the day. This entire morning check-in takes 3 minutes instead of 30.

Linda's attendant at location #3 receives a WDF drop-off. She opens the tablet app, enters the customer's name, phone number, items (3 bags of clothes), weight (12 lbs), and price ($2.25/lb = $27 total). The order appears on the status board. When the laundry is washed and folded, she taps "Folded → Ready" — the customer immediately receives an auto-text: "Your laundry at Linda's Laundromat is ready for pickup!" The order is never lost. The customer arrives, the attendant taps "Picked Up," and the order closes.

**Success Moment:**
The first time Marcus gets through an entire week without calling a single attendant for revenue updates — and without a single WDF complaint. He posts in r/laundromat: "Been using [product] for 3 weeks — first week with zero lost WDF orders in 2 years." This post drives 20+ replies asking about it.

**Long-term:**
Once Linda's WDF order history is populated — customer names, order frequency, preferences — switching costs become prohibitive. The system becomes the institutional memory of her business. She expands to a 6th location and the upgrade from "up to 5 locations" to "up to 10 locations" is an easy $50/mo decision.

---

## Success Metrics

### User Success Metrics

**Primary User Success Indicators:**

| Metric | Target | Measurement Method |
|--------|--------|--------------------|
| Zero lost WDF orders per week | 100% of active users achieve by week 3 | WDF order completion rate in-app |
| Daily revenue check-in time | <5 minutes for multi-location operators | User self-report + in-app session data |
| Attendant onboarding time | New attendant productive within one shift (≤2 hours) | Support ticket volume + onboarding survey |
| WDF order cycle time | Order intake → auto-SMS ready notification <24 hours for 90% of orders | In-app timestamp tracking |
| Owner daily active usage | 80% of paying users check dashboard ≥5 days/week | Session data |

**Customer Value Validation (90-Day Check):**

- Users with 2+ locations should demonstrate measurable reduction in "phone call check-ins" — measured by user survey at Day 30 and Day 90
- WDF operators should report zero or near-zero lost orders per month by Day 60 — validated by support ticket patterns and NPS survey
- Net Promoter Score target: 50+ among multi-location operators at Day 90

### Business Objectives

**12-Month Milestones:**

| Milestone | Target | Timeline |
|-----------|--------|----------|
| First paying customer | 1 operator | Month 1 |
| Beta cohort | 10 operators providing active feedback | Month 2 |
| LTD launch | 200–500 LTD buyers; $20K–$60K upfront | Month 3–4 |
| Monthly recurring revenue | $5K MRR | Month 6 |
| Monthly recurring revenue | $10K MRR | Month 12 |
| Community footprint | 50+ r/laundromat mentions/referrals | Month 12 |
| YouTube partnership | ≥1 Laundromat Resource / Laundromat Millionaire sponsorship | Month 6 |

**Revenue Model Targets:**

| Tier | Price | Target Customers (Month 12) |
|------|-------|----------------------------|
| Solo ($49/mo or $99 LTD) | $49/mo | 60 operators |
| Multi ($79/mo or $149 LTD) | $79/mo | 67 operators |
| LTD buyers (SaaS upgrade at Month 12+) | $29/mo add-ons | 100 LTD buyers → add-on revenue |

**LTD Economics:**
- Target: 500 LTD buyers in first 3 months post-launch
- 300 × $99 (Solo) + 200 × $149 (Multi) = **$59,500 upfront**
- 20% LTD → SaaS upgrade (add-on features, additional locations) = 100 customers × $29/mo = **$2,900 MRR additional by Month 12**

### Key Performance Indicators

**Acquisition KPIs:**
- Website conversion rate from r/laundromat traffic: ≥8% trial signup (community-sourced traffic converts higher than cold)
- Free trial → paid conversion rate: ≥30% within 14 days
- LTD conversion rate on launch post: ≥2% of Reddit post views
- YouTube sponsorship CPM equivalent cost: ≤$50/acquired trial (Laundromat Resource niche audience)

**Engagement KPIs:**
- Day 7 retention: ≥70% of trial users still active
- Day 30 retention: ≥85% of paying users still active
- WDF feature adoption: ≥75% of paying users create ≥1 WDF order within first week
- Multi-location dashboard adoption: ≥90% of Multi-tier users add 2+ locations within first week

**Revenue KPIs:**
- Monthly Recurring Revenue: $5K (Month 6) → $10K (Month 12)
- Average Revenue Per User (ARPU): ≥$70/mo blended (Solo/Multi mix)
- Churn rate: ≤3%/month (targeting near-zero post WDF data accumulation; comparable to Cents' 99% retention)
- LTD-to-add-on upgrade rate: ≥20% at 12 months

**Community KPIs:**
- r/laundromat mentions/recommendations per month: 5+ organic by Month 6; 20+ by Month 12
- YouTube review/mention count: ≥3 independent creator mentions by Month 12
- Capterra/G2 reviews: ≥25 reviews at 4.5+ star average by Month 12

---

## MVP Scope

### Core Features

The MVP must deliver the three capabilities that directly address the two highest-priority pain points (WDF order chaos and multi-location revenue blindness). Everything else waits for post-MVP.

**P0 — WDF Order Management (Must ship at launch):**

1. **Customer intake form** — Attendant enters: customer name, phone number, drop-off date, items (free text or category), weight (lbs), price-per-lb → system calculates total price automatically. Generates an order ID and printable receipt label (optional).

2. **WDF status board** — Visual Kanban-style board showing all active orders by status: `Intake → Washed → Folded → Ready for Pickup → Picked Up`. Any attendant at any location can update status. Board is visible to all attendants logged into that location and to the owner.

3. **Auto-SMS customer notification** — When order status changes to "Ready for Pickup," system automatically sends SMS to customer's phone number: "Hi [Name], your laundry at [Location Name] is ready for pickup!" Powered by Twilio or equivalent. Owner sets sender name per location.

**P1 — Multi-Location Revenue Dashboard (Must ship at launch):**

4. **Multi-location owner dashboard** — Single view showing all locations: today's manually-entered revenue, count of active WDF orders by status, any open machine downtime reports. Mobile-optimized for owners checking from their phone.

5. **Machine downtime log** — Attendant taps "Report Issue" → selects machine number → writes brief note. Owner receives SMS alert immediately. Issue appears in dashboard as open/resolved. Simple maintenance ticket trail.

6. **Revenue entry (manual)** — Attendant or owner enters daily revenue per location. Payment system webhook integration is Post-MVP; manual entry is sufficient for MVP and matches how most small operators currently record revenue.

**P2 — Attendant Management (Must ship at launch, simplified):**

7. **Attendant accounts + location assignment** — Owner creates accounts for each attendant (name + phone). Each attendant is assigned to one or more locations. Attendants log in with a PIN or simple link — no complex password setup.

8. **Basic shift scheduling** — Owner creates shifts (date, time, location, attendant). Attendants receive SMS with schedule. No automated swap or approval flows in MVP — just visibility.

9. **Clock in / clock out** — Attendant taps clock-in from their phone when arriving at location. Owner sees who is currently on-site at each location in the dashboard.

### Out of Scope for MVP

The following features are explicitly deferred to prevent scope creep and ensure the MVP ships in 4–5 weeks:

- **Payment processing / POS integration** — No in-app payment collection in MVP. Operators use their existing POS (Square, Toast, etc.) or cash; they enter revenue manually into the dashboard. Payment webhook integration (Square, PayRange) is post-MVP Phase 2.

- **Hardware integrations** — No machine telemetry, no coin vault sensors, no proprietary card reader compatibility. This is a deliberate market differentiator (hardware-free) AND a scope constraint.

- **Pickup and delivery routing** — WDF pickup/delivery with route optimization (Curbside Laundries territory) is out of MVP. Focus is in-store WDF only.

- **Customer-facing portal** — Customers receive SMS notifications only. No customer login, order history portal, or online ordering in MVP.

- **Advanced reporting / analytics** — No trend charts, revenue forecasting, or export to accounting software in MVP. Basic revenue log is sufficient.

- **Branded mobile app** — Web app only (mobile-optimized). No iOS/Android native app in MVP.

- **Online WDF booking** — No pre-scheduling of drop-offs online. In-person intake only in MVP.

- **Expense tracker per location** — Deferred to post-MVP (coin vault collections, utility bills, maintenance costs P&L).

- **API access** — No developer API or third-party integrations in MVP except Twilio for SMS.

- **Membership / subscription pricing for laundromat customers** — Out of scope. This is a Cents growth-tier feature requiring significant complexity.

### MVP Success Criteria

The MVP is considered successful and ready for full launch when:

1. **Validation threshold**: 10 beta operators complete their first full week of active WDF order tracking with zero lost orders attributed to software failure
2. **Retention signal**: 8 of 10 beta operators are still actively using the system at Day 30
3. **Willingness to pay**: 7 of 10 beta operators confirm they would pay $49–79/month at current MVP feature level
4. **Community signal**: At least 2 organic r/laundromat posts or comments referencing the product positively (not solicited)
5. **Technical stability**: Dashboard uptime ≥99.5%; SMS delivery rate ≥98%; no data loss incidents in 30-day beta

**Go/no-go decision point**: After 30-day beta with 10 operators. If 4 of 5 criteria above are met, proceed to LTD launch. If fewer than 4 are met, run a 2-week iteration cycle before re-evaluating.

### Future Vision

**Phase 2 (Months 4–8, Post-LTD Launch):**
- Payment system webhooks (Square, Stripe, PayRange) → eliminate manual revenue entry; real-time revenue dashboard
- Customer SMS management — opt-in lists, order history, "your regular WDF pickup is ready" recurring customer recognition
- Expense tracker per location — coin vault collections, maintenance costs, utility bills → basic P&L per location
- Advanced shift scheduling — recurring schedules, swap requests, attendance tracking with accountability reports
- Scale tier (up to 10 locations) for operators expanding beyond 5 locations

**Phase 3 (Months 9–18, Growth):**
- Mobile app (iOS/Android) for attendants — barcode scanner for order labels, camera for intake photos
- Customer-facing portal — customer can check their own order status, opt into WDF reminders
- Online WDF booking — customers pre-book drop-off window online; reduces counter time and improves attendant scheduling
- Machine telemetry integration — optional hardware sensor integration (LaundryConnect, etc.) for machine uptime data
- Marketplace integrations — DoorDash, Uber pickup/delivery for WDF (tapping the growing on-demand laundry market)

**Long-Term Vision (18–36 Months):**
The platform becomes the "operating system for the independent laundromat investor" — managing 1–25 locations with full financial visibility, WDF operations, staff management, and customer relationships. At sufficient scale (1,000+ operators), the anonymized transaction data creates a laundromat industry benchmarking product ("Your location's WDF revenue is in the top 20% of comparable laundromats in your market") that provides competitive intelligence no existing product offers.

Exit scenarios: Acquisition by Cents (to fill the small-operator gap they're targeting), acquisition by laundromat equipment manufacturers (Speed Queen, Alliance Laundry) seeking software to bundle with machines, or standalone growth to $3–5M ARR as the dominant independent operator platform.

---

## Go-to-Market Strategy

### Phase 1: Community Validation (Months 1–2)

- Post in r/laundromat: "Building WDF software for small operators — what would make you switch from paper slips?" (authentic, not promotional)
- Offer 10 free beta spots to operators who respond; collect daily feedback for 30 days
- Build relationship with Jordan Berry (Laundromat Resource) — send early access, ask for honest feedback, plant seed for future YouTube partnership
- Goal: 10 active beta users; 2 community posts validating pain points

### Phase 2: LTD Launch (Months 3–4)

- Launch $99 (Solo) / $149 (Multi) LTD via:
  - r/laundromat AMA + product launch post (beta testimonials included)
  - Laundromat Resource sponsored YouTube video
  - Laundromat Millionaire Show outreach
  - AppSumo listing (secondary discovery vehicle)
  - Direct outreach to laundromat investing Facebook groups
- Goal: 200–500 LTD buyers; $20K–$60K upfront revenue funds Phase 2 development

### Phase 3: SaaS Growth (Months 5–12)

- LTD buyers upgrade to add-ons as features expand (additional locations, SMS bundles, advanced reporting)
- YouTube advertising on laundromat channels (Jordan Berry, Dave Menz) targeting new investor cohort
- Capterra/G2 review building campaign (LTD buyers are most likely to leave reviews)
- Goal: $10K MRR by Month 12; community footprint that defends against Cents downmarket push

### Competitive Moat Building

The community moat is the primary defense against Cents' $140M-funded downmarket expansion. When 200+ active laundromat operators in r/laundromat are recommending this product, Cents' superior resources cannot easily purchase that trust. Target: 50+ unprompted r/laundromat mentions by Month 12 — at that point, the product is the community-standard affordable alternative, and Cents' lower-cost tier will be seen as "the expensive option trying to copy the community product."

---

## Risk Assessment

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|-----------|
| Cents launches affordable downmarket tier | High (12–18 months) | High | Move fast; LTD buyers are sticky; community moat |
| CleanCloud adds flat multi-location pricing | Medium | Medium | LTD + attendant scheduling remain unmatched |
| Small operator TAM limits MRR ceiling | Medium | Medium | Single-location WDF is larger market; price accordingly |
| WDF-POS adds multi-location dashboard | Low | Low | Small team; significant dev investment; our LTD advantage stands |
| SMS delivery failures erode trust | Low | High | Twilio reliability + fallback SMS provider; 98%+ delivery SLA |

---

*Product Brief complete. Next recommended workflow: `create-prd` — the PRD will transform this vision and scope into detailed technical requirements, user stories, and acceptance criteria.*
