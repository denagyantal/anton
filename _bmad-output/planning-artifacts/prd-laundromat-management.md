---
stepsCompleted: [1, 2, "2b", "2c", 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
inputDocuments:
  - ideas/shortlisted/laundromat-multi-location-wdf-management.md
  - _bmad-output/planning-artifacts/research/market-laundromat-management-research-2026-07-03.md
  - _bmad-output/planning-artifacts/product-brief-laundromat-management.md
workflowType: prd
date: 2026-07-03
author: Root
project: laundromat-management
---

# Product Requirements Document — Laundromat Multi-Location & WDF Management

**Author:** Root
**Date:** 2026-07-03
**Project:** laundromat-management
**Status:** Complete

---

## Executive Summary

### Vision

Independent laundromat operators with 1–8 locations are running one of America's most recession-proof businesses on sticky notes, paper intake slips, and daily phone calls to attendants. The wash-dry-fold (WDF) service — the industry's fastest-growing revenue stream — is managed entirely on paper, causing lost orders, missed customer pickups, and compounding revenue loss at every location. Multi-location owners have zero unified visibility into business performance without calling each location individually.

This product is a flat-priced, hardware-free, web-based operations platform that combines WDF order management, multi-location revenue dashboard, and attendant scheduling into a single tool priced at $49/mo (1 location) or $79/mo (up to 5 locations). Every competitor either targets enterprise operations (Cents: $149–599/mo per location + $2,000–$3,500 hardware bundles) or handles only a single function. No product on the market combines all three capabilities at flat pricing below $99/month for multi-location operators.

Target customers: the 12,000–24,000 independently owned US laundromats in the 1–8 location range, with highest concentration among new laundromat investors (YouTube/Reddit-influenced, non-technical, price-sensitive) and established multi-location operators currently running on spreadsheets and group texts. 12-month business target: $10K MRR from 127 operators, funded via a $99/$149 lifetime deal launch to the r/laundromat and laundromat YouTube communities.

### What Makes This Special

Three structural differentiators that no competitor currently matches as a combined offering:

1. **Flat multi-location pricing** — $79/mo covers up to 5 locations. Every competitor charges per-location: Cents ($89–599/mo per store), CleanCloud ($30–110/mo per store), TURNS ($150–250/mo per store). A 3-location operator pays $267–$447/mo on Cents; they pay $79/mo here. This is the primary switching catalyst.

2. **No hardware required** — Runs on any phone or tablet the attendant already owns. Cents and TURNS require proprietary card readers and hardware bundles costing $2,000–$3,500 upfront. Eliminating the hardware barrier removes the #1 adoption blocker for small operators.

3. **Lifetime deal availability** — $99 (solo) / $149 (multi, up to 5 locations). No competitor offers one-time purchase pricing. Laundromat owners mentally model software the way they model equipment — a capital purchase, not a subscription. LTD pricing matches their mental model and eliminates the recurring-payment objection entirely.

4. **WDF-first workflow** — WDF order tracking is the core product, not an add-on bolted onto a POS system. The status board, shift-change handoff, auto-SMS notification, and weight-based price calculation are designed around how WDF actually works at independent laundromats.

### Project Classification

- **Type:** SaaS B2B — web app, mobile-optimized, multi-tenant
- **Domain:** Small business operations management (laundromat/laundry services)
- **Complexity:** Low-medium — no regulated data (no healthcare/financial PII beyond basic business records), no proprietary hardware, established third-party SMS (Twilio)
- **Project Context:** Greenfield — no existing codebase
- **Distribution:** Community-first (r/laundromat, r/sweatystartup, YouTube) → LTD launch → recurring SaaS

---

## Success Criteria

### User Success

| Metric | Definition | Target |
|--------|-----------|--------|
| WDF order loss rate | Lost or misplaced WDF orders per location per month after adoption | 0 by week 3 of active use |
| Owner daily check-in time | Time for multi-location owner to check all revenue and active WDF orders | Under 5 minutes by day 14 |
| Attendant onboarding time | New attendant reaches first completed WDF order | Under 2 hours from first login |
| Auto-SMS delivery | % of "Ready for Pickup" WDF orders that trigger customer SMS successfully | ≥ 98% |
| Owner daily active use | % of paying owners who open dashboard ≥ 5 days/week | ≥ 80% |
| Multi-location setup time | Owner adds all locations and attendants | Under 30 minutes from signup |
| WDF feature adoption | % of paying users who create ≥ 1 WDF order within first 7 days | ≥ 75% |

### Business Success

| Phase | Milestone | Target | Timeline |
|-------|-----------|--------|----------|
| Phase 1 | First paying customer | 1 operator | Month 1 |
| Phase 1 | Beta cohort | 10 active operators providing daily feedback | Month 2 |
| Phase 2 | LTD launch revenue | $20K–$60K upfront (200–500 LTD buyers) | Month 3–4 |
| Phase 2 | Monthly recurring revenue | $5K MRR (64 subscribers) | Month 6 |
| Phase 3 | Monthly recurring revenue | $10K MRR (127 subscribers) | Month 12 |
| Phase 3 | Community footprint | 50+ unprompted r/laundromat product mentions | Month 12 |
| Phase 3 | Review platform presence | ≥ 25 Capterra/G2 reviews at 4.5+ stars | Month 12 |
| Phase 3 | YouTube presence | ≥ 1 Laundromat Resource sponsorship or organic review | Month 6 |

**Revenue model targets (Month 12):**
- 60 Solo subscribers × $49/mo = $2,940 MRR
- 67 Multi subscribers × $79/mo = $5,293 MRR
- 100 LTD add-on upgrades × $29/mo = $2,900 MRR
- **Total: ~$11,133 MRR**

### Technical Success

- Dashboard uptime ≥ 99.5% measured monthly
- SMS delivery rate ≥ 98% via Twilio; fallback provider available
- Zero data loss incidents: WDF order records are never deleted or corrupted
- Page load time ≤ 2 seconds for owner dashboard on mobile (3G equivalent)
- API response time ≤ 500ms for all WDF status update operations
- System supports 1,000 concurrent users without degradation

### Measurable Outcomes

**Beta validation (30-day gate before LTD launch):**
- 10 beta operators complete ≥ 1 full week of active WDF order tracking
- 8 of 10 beta operators still actively using at Day 30
- 7 of 10 beta operators confirm willingness to pay $49–79/mo at current MVP feature level
- ≥ 2 organic r/laundromat posts or comments referencing the product (unsolicited)
- Dashboard uptime ≥ 99.5%; SMS delivery ≥ 98%; no data loss incidents in 30-day beta

**Go/no-go decision:** 4 of 5 criteria met → proceed to LTD launch. Fewer than 4 → 2-week iteration cycle before re-evaluation.

---

## Product Scope

### MVP — Minimum Viable Product

**Philosophy:** Problem-solving MVP. Must prove zero lost WDF orders and multi-location revenue visibility in one dashboard — these are the two outcomes that drive payment decisions. Everything else waits.

**P0 — WDF Order Management (Must ship at launch):**
- Customer intake form: name, phone, drop-off date, items (free text), weight (lbs), price-per-lb → auto-calculates total, assigns order ID
- WDF status board: Kanban-style, orders move through Intake → Washed → Folded → Ready for Pickup → Picked Up; all attendants at a location share the same live board
- Auto-SMS to customer when status changes to "Ready for Pickup"; sender name set per location by owner

**P1 — Multi-Location Revenue Dashboard (Must ship at launch):**
- Owner dashboard: single view across all locations — today's manually entered revenue, active WDF order counts by status, open machine downtime reports
- Machine downtime log: attendant reports issue (machine number + note) → owner receives SMS alert → issue appears in dashboard as open/resolved
- Manual revenue entry: attendant or owner enters daily revenue per location; payment webhook integration is post-MVP

**P2 — Attendant Management (Must ship at launch, simplified):**
- Attendant accounts: owner creates accounts (name + phone), assigns to one or more locations, attendants log in via PIN or magic link
- Basic shift scheduling: owner creates shifts (date, time, location, attendant); attendants receive SMS with schedule
- Clock in/clock out: attendant taps from mobile when arriving; owner sees who is currently on-site per location in real time

### Growth Features (Post-MVP Phase 2, Months 4–8)

- Payment system webhooks (Square, Stripe, PayRange) — eliminates manual revenue entry; real-time revenue dashboard
- Customer SMS opt-in list management — order history, recurring customer recognition ("your regular WDF is ready")
- Expense tracker per location — coin vault collections, maintenance costs, utility bills → basic P&L per location
- Advanced shift scheduling — recurring schedules, swap requests, attendance accountability reports
- Scale tier — up to 10 locations for operators expanding beyond 5

### Vision (Phase 3, Months 9–18)

- Mobile app (iOS/Android) for attendants — barcode scanner for order labels, camera for intake photos
- Customer-facing portal — customers check own order status, opt into WDF reminders
- Online WDF booking — customers pre-book drop-off windows; reduces counter time, improves scheduling
- Machine telemetry integration — optional hardware sensor (LaundryConnect) for real-time machine uptime data
- Marketplace integrations — DoorDash, Uber pickup/delivery for WDF
- Industry benchmarking — anonymized WDF revenue vs. comparable laundromats in operator's market ("top 20% of your market")

---

## User Journeys

### Journey 1: Marcus — The Multi-Location New Investor (Primary Success Path)

Marcus is 34, works full-time in project management, and bought his first laundromat 18 months ago after watching Jordan Berry's Laundromat Resource YouTube channel. He now owns 3 locations in suburban Atlanta. Managing them is overwhelming: he calls each location's attendant every evening to collect revenue numbers. WDF at location #2 is his fastest-growing service, but he's lost 3 orders this month because paper slips break down at shift changes.

**Discovery:** Marcus finds a Reddit thread in r/laundromat where another operator posts "finally, a WDF app that doesn't cost $400/month." He clicks the link, sees the flat pricing ($79/mo for all 3 locations), and signs up for a 14-day free trial — no credit card required.

**Onboarding:** Marcus sets up location #1 in 8 minutes — enters location name, address, WDF pricing ($2.25/lb). He adds his three attendants' phone numbers. He creates a test WDF order to see the status board and triggers a test SMS to his own number. It works. He sets up locations #2 and #3 in the same session. Total setup: 22 minutes. He does not call a single attendant to explain the system — he texts them the login link.

**Daily use:** Next morning, Marcus opens the dashboard from his phone before his first coffee. He sees last night's revenue for all 3 locations and 7 open WDF orders at location #2 (4 in "Washed," 3 in "Folded"). No phone calls required. He notices a machine downtime alert from location #1 — the attendant reported washer #3 offline at 9pm. He calls his repair contact and logs a note. Three minutes from unlock to done.

**WDF shift change:** The attendant at location #2 who started WDF orders in the morning finishes her shift. The afternoon attendant opens the tablet — the status board shows exactly which orders are in progress, their contents, and current status. No paper slip to decipher or re-enter. The customer whose laundry just finished folding gets an auto-text: "Your laundry at Marcus's Laundromat #2 is ready for pickup!" She arrives 45 minutes later.

**Success moment:** Marcus gets through a full week without a single attendant phone call and without a single WDF complaint. He posts in r/laundromat: "Week 3 with [product] — first week in 2 years with zero lost WDF orders. And I checked revenue from my phone during lunch. $79/month for 3 locations is insane value." The post gets 47 upvotes and 23 comments asking for the link.

### Journey 2: Devon — The WDF-First Operator (High-Volume Edge Case)

Devon is 41 and runs 2 laundromats where WDF is 45% of revenue. She processes 60+ orders per week per location. She hired 3 part-time WDF attendants; her paper slip system is failing badly at scale. Lost orders generate customer complaints 3–4 times per month. Shift-change handoffs — when one attendant leaves and another arrives mid-order — are her biggest failure point.

**The problem moment:** On a Tuesday afternoon, Devon receives a call from an angry customer: "I came to pick up my laundry and no one knows where it is." Her morning attendant went home. The afternoon attendant can't find the order slip. Devon drives 20 minutes to the location to resolve it personally. She refunds the customer $42 and loses 45 minutes.

**First use — high volume stress test:** Devon signs up and enters 8 open WDF orders from her current paper slips during the first shift. Her attendants start using the tablet the next morning. Within 3 days, all 3 attendants have created and updated orders without training. When an attendant clocks out at 2pm, the next attendant walks in and immediately sees 11 open orders with their exact status and contents. No handoff phone call required.

**Order integrity under volume:** In Devon's first full week with 60+ orders processed digitally, she receives zero "lost order" complaints. For the first time in 8 months, she does not drive to either location to resolve a customer complaint. She spends 12 minutes reviewing the dashboard on Sunday to see weekly WDF revenue by location.

**Failure scenario — attendant doesn't update status:** Devon notices an order has been in "Washed" status for 26 hours — longer than typical. She calls the location. The attendant forgot to update. Devon sees this as a workflow gap and creates a house rule: "Update status before leaving the counter." The system made the gap visible; it couldn't prevent the human error, but it gave Devon the data to catch it.

### Journey 3: Linda — The Established Operator Graduating From Spreadsheets (Secondary Success Path)

Linda is 52 and has owned laundromats for 12 years; she runs 5 locations in Philadelphia. WDF represents 35% of gross revenue across her busiest stores. She tried Cents 18 months ago but the onboarding required a 2-hour Zoom with a sales rep, hardware installation at each location, and a contract. She dropped out after location #2.

**Current state:** Linda uses Google Sheets for revenue tracking (badly — she updates it when she remembers), group texts for scheduling, and paper slips for WDF. She's losing approximately 5 WDF orders per month across all locations and 30–45 minutes per day on revenue phone calls.

**Discovery:** Linda's peer operator in her industry association mentions the product at a regional meeting. Linda visits the website, sees flat pricing for 5 locations at $79/mo, and signs up without calling a sales rep.

**Onboarding — multi-location configuration:** Linda spends 45 minutes setting up all 5 locations, configuring per-location WDF pricing (each location has slightly different pricing), and adding 8 attendants with their location assignments. She does not need hardware. Her attendants each receive a link to their attendant portal.

**Machine alert — business value moment:** On day 9, Linda is at her daughter's school play when her phone buzzes: "Machine alert at Location #4 — Dryer #2 reported down by attendant Maria." Linda texts her repair contact from her seat. The machine is fixed by morning. Two weeks prior, that same dryer would have sat broken all weekend because no attendant thought to call.

**Revenue dashboard — the daily routine change:** Linda's previous routine: call all 5 locations by 6pm, spend 25 minutes, enter totals into Google Sheets. New routine: check dashboard at 5:45pm from her phone. 3 minutes. She closes the Google Sheets tab permanently.

### Journey 4: Attendant Carlos — The Daily Front-Line User

Carlos is 23, works part-time at Marcus's location #2, and is the primary WDF attendant on weekday mornings. He's not technical — he uses Instagram and TikTok but has never used business software. His entire interaction with the product is on a $150 Android tablet mounted at the WDF counter.

**First shift:** Marcus texts Carlos a link and a PIN. Carlos taps the link, enters his PIN, and sees the status board with today's open orders. He takes his first drop-off: customer name "Sarah C.", phone "404-555-1234", "2 bags of clothes and bedsheets", 14 lbs, $2.25/lb = $31.50. He enters it in under 90 seconds. The customer gets a text confirmation. Carlos pins the order bag tag with the order ID and goes back to managing the floor.

**Status updates:** Three hours later, Sarah's laundry is done. Carlos taps "Folded → Ready for Pickup." Sarah gets an auto-text. Carlos moves on. No paper slip, no written note for the next shift.

**Shift change handoff:** Carlos's shift ends at 2pm. The afternoon attendant Destiny arrives. She opens the tablet, sees 5 open orders on the board with their contents and status. No phone call with Carlos needed. She handles one pickup and moves the order to "Picked Up" in one tap.

**Error recovery:** Carlos accidentally enters the wrong phone number for a customer. The customer doesn't receive the "Ready" text. The customer comes in the next day frustrated. Carlos finds the order on the board by customer name, shows the customer the status ("Picked Up" from yesterday), and the confusion is resolved. The board is the ground truth.

### Journey Requirements Summary

From these journeys, the product must deliver:

| Capability Revealed | Journey Source |
|--------------------|---------------|
| WDF order intake form with weight-based price calculation | Journey 1, 2, 4 |
| Shared live status board visible to all location attendants | Journey 1, 2, 3, 4 |
| Auto-SMS to customer on status change to "Ready" | Journey 1, 2, 3, 4 |
| Multi-location owner dashboard (revenue + WDF counts) | Journey 1, 3 |
| Machine downtime log with owner SMS alert | Journey 1, 3 |
| Manual revenue entry per location | Journey 1, 3 |
| Attendant PIN/link login (no password complexity) | Journey 4 |
| Attendant clock in/clock out with real-time owner view | Journey 1, 3 |
| Shift scheduling with SMS notification to attendants | Journey 1, 3 |
| Order search by customer name | Journey 4 |
| Order audit trail (timestamp per status change) | Journey 2, 4 |
| Per-location WDF pricing configuration | Journey 3 |
| Mobile-optimized interface for attendant tablet use | Journey 4 |
| Per-location SMS sender name configuration | Journey 1, 4 |

---

## Domain-Specific Requirements

This product operates in the small business / laundry services domain. No regulated data (healthcare, financial instruments, consumer credit) is handled. Domain-specific requirements are limited to:

### Data Handling

- Customer phone numbers are stored to enable SMS delivery; operators must be capable of honoring TCPA opt-out requests. When a customer texts "STOP" to the sender number, the system must suppress future SMS to that number for that location.
- Business revenue figures are private; multi-tenant isolation must ensure Location A's data is never accessible to Location B's attendants or to operators on different accounts.
- No payment card data is processed or stored; the product is explicitly payment-agnostic in MVP (manual revenue entry only).

### SMS Regulatory Compliance

- SMS sent via Twilio must originate from a registered 10DLC number or toll-free number per CTIA/carrier requirements for A2P messaging.
- SMS content must include business name and location for identification; must not contain spam language.
- Opt-out handling ("STOP" keyword) must be managed at the platform level, not left to operators.

### No Hardware Dependencies

By design, the product has no certified hardware integrations. This eliminates hardware certification requirements (no FCC device approvals, no PCI-certified reader integration, no UL-listed hardware requirements) that would apply to competitors bundling payment terminals or proprietary scales.

---

## SaaS B2B Specific Requirements

### Multi-Tenant Architecture

- Each operator account is a fully isolated tenant: locations, attendants, orders, revenue records, and settings are segregated
- An attendant account at Tenant A cannot access any data from Tenant B
- An owner account at Tenant A sees only their own locations and cannot browse other operators' data
- Cross-tenant data is used only in anonymized, aggregated form for future benchmarking features (Phase 3)

### Role-Based Access Control (RBAC)

**Owner role:**
- Full access to all locations under their account
- Can create/edit/delete attendant accounts
- Can configure locations, WDF pricing, SMS sender names
- Sees all dashboard data (revenue, WDF orders, machine alerts, attendance)
- Can export data (CSV of revenue records, WDF order history)

**Attendant role:**
- Access limited to assigned location(s)
- Can create/update WDF orders
- Can log machine downtime
- Can clock in/clock out
- Cannot see revenue figures from other locations or account billing settings
- Cannot delete orders or export data

**Single-location vs. multi-location access:** Attendants assigned to multiple locations switch between them via a location selector; they see only their assigned locations.

### Onboarding Flow

- Owner signup: email + password → account created → first location setup wizard (name, address, WDF pricing) → add first attendant (name + phone) → complete
- No credit card required during 14-day trial
- Trial-to-paid conversion: owner receives in-app prompt at Day 7 and Day 12; upgrade via Stripe Checkout
- LTD redemption: owner enters LTD code at billing screen; code unlocks appropriate tier permanently with a $0/mo subscription record

### Subscription & Billing

- Solo tier: 1 location, up to 3 attendant accounts — $49/mo or $99 LTD
- Multi tier: up to 5 locations, up to 15 attendant accounts — $79/mo or $149 LTD
- Scale tier (post-MVP): up to 10 locations, up to 30 attendants — $129/mo (add-on for LTD holders at $29/mo)
- Billing handled via Stripe; no payment logic lives in application code
- LTD holders can purchase Scale tier as a monthly add-on only (no LTD for Scale tier)

### Integration Points (MVP)

- **Twilio** (SMS delivery): WDF "Ready" notifications, machine downtime owner alerts, shift schedule SMS, attendant magic links; all outbound; no inbound processing beyond STOP opt-out
- **Stripe** (billing only): subscription management, LTD code redemption, trial-to-paid checkout; no payment processing for laundromat transactions

---

## Project Scoping & Phased Development

### MVP Strategy & Philosophy

**MVP Approach:** Problem-solving MVP. Prove two outcomes before adding features: (1) zero lost WDF orders, (2) multi-location owner checks all revenue in under 5 minutes. These two outcomes drive payment decisions. Everything else — delivery routing, customer portal, machine telemetry, payment webhooks — follows after revenue validation.

**Resource Requirements:** 1 full-stack developer + 1 designer (part-time); 4–5 week build; mobile-first web app (React/Next.js or equivalent); Twilio + Stripe integrations; no proprietary hardware procurement.

### MVP Feature Set (Phase 1)

**Core User Journeys Supported:**
- Owner with 1–5 locations setting up and checking dashboard daily (Journey 1, 3)
- Attendant creating and updating WDF orders throughout a shift (Journey 2, 4)
- WDF customer receiving SMS when laundry is ready (Journey 1, 2)
- Owner receiving SMS machine alert and logging resolution (Journey 1, 3)

**Must-Have Capabilities:**
1. WDF order intake (customer name, phone, items, weight, price/lb → auto-total → order ID)
2. WDF status board — shared, live Kanban: Intake → Washed → Folded → Ready → Picked Up
3. Auto-SMS customer on "Ready" status transition (Twilio)
4. Multi-location owner dashboard (all locations: today's revenue, WDF order counts, open alerts)
5. Machine downtime log with owner SMS alert
6. Manual daily revenue entry per location
7. Attendant accounts with PIN/magic-link login, location assignment, RBAC
8. Basic shift scheduling with attendant SMS notification
9. Attendant clock in/clock out with real-time owner visibility
10. Per-location WDF pricing configuration
11. Order search by customer name
12. Timestamp audit trail per status change
13. Stripe billing integration (trial, Solo, Multi plans + LTD code redemption)
14. TCPA/CTIA SMS opt-out handling ("STOP" suppression)

### Post-MVP Features (Phase 2, Months 4–8)

- Payment system webhooks: Square, Stripe, PayRange → real-time revenue dashboard eliminates manual entry
- Customer SMS opt-in management: repeat customer recognition, WDF reminders
- Expense tracker per location: coin vault collections, maintenance costs, utility bills → basic P&L
- Advanced shift scheduling: recurring schedules, shift swap requests, attendance reports
- Scale tier activation (up to 10 locations)
- CSV export for revenue records and WDF order history
- Bulk attendant SMS (e.g., "Location #2 closing early today — all staff")

### Phase 3 (Months 9–18)

- Native mobile app (iOS/Android) for attendants with barcode scanner
- Customer self-service portal (order status check, preferences)
- Online WDF booking with pre-scheduled drop-off windows
- Optional machine telemetry integration (LaundryConnect)
- Anonymous industry benchmarking (WDF revenue vs. market peers)
- Marketplace integrations (DoorDash, Uber for WDF delivery)

### Risk Mitigation Strategy

**Technical Risks:**
- SMS delivery failure (Twilio outage): mitigate with secondary SMS provider (e.g., Vonage) as hot standby; owner SMS alerts for delivery failures; 98% SLA target
- Multi-tenant data leakage: mitigate with row-level security in database (e.g., PostgreSQL RLS), automated integration tests verifying cross-tenant isolation, and security review before beta launch
- Mobile performance on low-end Android tablets: mitigate with server-side rendering, minimal JavaScript bundle, performance testing on $150 Android device as minimum supported hardware

**Market Risks:**
- Cents launches affordable downmarket tier (high probability, 12–18 month horizon): mitigate by acquiring LTD customers first (sticky due to sunk cost + data accumulation) and building community moat; at 200+ r/laundromat advocates, Cents' resources cannot easily purchase trust
- Small operator TAM limits MRR ceiling: mitigate by pricing Solo tier at $49/mo to expand addressable market to single-location WDF operators; Scale tier for 6–10 location operators provides upside

**Resource Risks:**
- Scope creep delays launch: defer all post-MVP features firmly; no payment integration, no delivery routing, no customer portal in MVP; launch with 9 core capabilities only
- SMS cost overrun at scale: Twilio A2P SMS ~$0.0079/message; at 10,000 orders/month → ~$79/month in SMS costs; included in pricing model with headroom

---

## Functional Requirements

### WDF Order Management

- FR1: Attendants can create a new WDF order by entering customer name, phone number, items description, weight in lbs, and price-per-lb; system auto-calculates total price and assigns a unique order ID
- FR2: Attendants can view all active WDF orders for their assigned location on a shared status board organized by status column
- FR3: Attendants can advance a WDF order through status stages: Intake → Washed → Folded → Ready for Pickup → Picked Up
- FR4: System sends an automatic SMS to the customer's phone number when an order status changes to "Ready for Pickup"
- FR5: Attendants can view order details (customer name, phone, items, weight, price, creation time, status history) for any order on the board
- FR6: Attendants can search for WDF orders by customer name
- FR7: System records a timestamp and the logged-in attendant's identity for each status change on every WDF order
- FR8: Owners can configure per-location WDF pricing (default price-per-lb) that pre-fills the attendant intake form
- FR9: Owners can configure the SMS sender display name per location (e.g., "Marcus's Laundromat #2")
- FR10: When a customer sends "STOP" to the SMS sender number, the system suppresses all future SMS to that phone number for that location

### Multi-Location Dashboard

- FR11: Owners can view a consolidated dashboard showing all their locations in a single screen
- FR12: Owners can see today's revenue for each location on the dashboard (sourced from manual entry)
- FR13: Owners can see the count of active WDF orders by status for each location on the dashboard
- FR14: Owners can see all open machine downtime reports across locations on the dashboard
- FR15: Owners can see which attendants are currently clocked in at each location on the dashboard

### Revenue Tracking

- FR16: Attendants and owners can enter daily revenue for a specific location (manual entry; not tied to a POS)
- FR17: Owners can view a 30-day revenue history per location showing daily totals
- FR18: Owners can view aggregate revenue across all locations for any given date range

### Machine Downtime Management

- FR19: Attendants can report a machine issue by selecting the machine number/name and entering a brief description of the problem
- FR20: When an attendant logs a machine issue, the system sends an SMS alert to the owner immediately
- FR21: Owners can mark a machine issue as resolved and add a resolution note
- FR22: Owners can view the full history of machine issues for each location (open and resolved)

### Attendant Account Management

- FR23: Owners can create attendant accounts by entering name and phone number
- FR24: Owners can assign each attendant to one or more locations within their account
- FR25: Attendants can log in via a PIN code or a magic link sent to their phone number
- FR26: Owners can deactivate an attendant account; deactivated attendants cannot log in
- FR27: System enforces role-based access so attendants only see data for their assigned location(s)

### Shift Scheduling

- FR28: Owners can create a shift by specifying date, time range, location, and assigned attendant
- FR29: When a shift is created, the system sends an SMS to the scheduled attendant with the shift details
- FR30: Owners can view the full shift schedule for each location by week
- FR31: Owners can edit or delete an upcoming shift; attendant receives SMS notification of the change

### Attendant Time Clock

- FR32: Attendants can clock in for their shift from their mobile device at their assigned location
- FR33: Attendants can clock out from their mobile device at the end of their shift
- FR34: Owners can see real-time clock-in status (who is currently on-site) for each location
- FR35: Owners can view clock-in/clock-out history per attendant and per location for the past 30 days

### Account & Billing Management

- FR36: Owners can sign up for a 14-day free trial without a credit card
- FR37: Owners can upgrade from trial to a paid plan (Solo or Multi) via Stripe Checkout
- FR38: Owners can redeem a lifetime deal code to unlock their tier permanently
- FR39: Owners can view their current plan, billing history, and update payment method
- FR40: Owners can add locations up to their tier's location limit; system prevents adding beyond the limit with an upgrade prompt
- FR41: Owners can add attendant accounts up to their tier's attendant limit; system prevents adding beyond the limit with an upgrade prompt

### Owner Notifications

- FR42: Owners can configure their SMS phone number for receiving machine downtime alerts
- FR43: Owners can configure which alert types trigger SMS (machine downtime on/off; new attendant clock-in on/off)

---

## Non-Functional Requirements

### Performance

- NFR1: WDF status board loads in under 2 seconds for locations with up to 200 active orders, measured on a mid-range Android device on a 4G connection
- NFR2: WDF order status updates (e.g., moving order to "Ready") reflect on all connected attendant devices within 3 seconds of submission
- NFR3: Owner dashboard (all locations combined) loads in under 3 seconds for accounts with up to 5 locations and 100 total active WDF orders
- NFR4: System delivers outbound SMS within 60 seconds of the triggering event (status change, machine alert, shift creation) under normal Twilio operating conditions

### Reliability

- NFR5: Dashboard and WDF board achieve ≥ 99.5% monthly uptime, measured by external uptime monitoring
- NFR6: WDF order data is durably persisted; no order is silently lost or corrupted on server error; failed writes return an error to the attendant for retry
- NFR7: If Twilio returns a delivery failure, the system logs the failure and exposes it to the owner in a notification log within the dashboard; a retry is attempted after 5 minutes

### Security

- NFR8: All data in transit is encrypted via TLS 1.2+; all data at rest is encrypted using AES-256 or equivalent
- NFR9: Attendant PIN authentication requires a minimum 4-digit PIN; magic links expire after 24 hours and are single-use
- NFR10: Row-level security in the database ensures no query can return data belonging to a different tenant; verified by automated cross-tenant isolation tests in CI
- NFR11: Customer phone numbers stored in the database are not exposed in client-side API responses beyond the minimum needed to display truncated identifiers (last 4 digits) for UI confirmation

### Scalability

- NFR12: System supports 1,000 concurrent active sessions (mix of owner dashboards and attendant status boards) without response time degradation beyond NFR1–3 baselines
- NFR13: Database and application layer are deployed in a configuration that supports horizontal scaling (containerized, stateless application servers) to accommodate 10x current load without architectural changes

### Integration Reliability

- NFR14: Twilio SMS integration must have a failover configuration (secondary provider or Twilio subaccount) activated within 5 minutes of primary provider failure detection
- NFR15: Stripe billing integration must handle webhook delivery failures with automatic retry for up to 72 hours; failed webhooks are logged and alerted to the engineering team

### Accessibility

- NFR16: Attendant interface meets WCAG 2.1 Level A on all primary task flows (create order, update status, clock in/out) to accommodate attendants using device accessibility features (large text, screen zoom)
- NFR17: All interactive elements in the owner dashboard meet minimum 44×44px touch target size for mobile usability

---

*PRD complete. Next steps: architecture design → epics & stories → sprint planning.*
