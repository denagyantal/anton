---
stepsCompleted: [1, 2, 3, 4, 5]
inputDocuments: ["ideas/shortlisted/small-engine-repair-shop-management.md", "_bmad-output/planning-artifacts/market-research-small-engine-repair-shop.md"]
workflowType: 'product-brief'
lastStep: 5
date: '2026-06-20'
author: 'Root'
---

# Product Brief: Small Engine Repair Shop Management

---

## Executive Summary

Small engine repair shops — businesses that service lawn mowers, chainsaws, generators, snowblowers, and outdoor power equipment — operate almost entirely on paper work orders, sticky notes, and phone calls. No purpose-built management information system (MIS) exists for this niche. Every April, when 50+ mowers arrive in the same week, shop owners field 20+ "is my mower ready?" calls every morning, mix up whose equipment is in which bay, and lose track of which parts were ordered for which job.

**ShopWrench** (working title) is a purpose-built work-order management system for small engine repair shops, designed with OPE-native workflows: digital intake with photos, parts logs tied to each specific job, a seasonal backlog board with promised-date tracking, and automatic SMS when equipment is ready for pickup. Priced at a one-time $79 lifetime deal — the only such option in the market — it removes the single biggest adoption barrier: monthly subscription bills during a 4-month slow season.

The competitive landscape confirms the opportunity. Bench (toolbench.shop), the only OPE-specific competitor, has captured just 120+ shops at $79–$199/month with no LTD option and no warranty claim workflow. An estimated 85–90% of the addressable 20,000+ shops remain on paper. The market is early, the pain is acute, and the pricing wedge is clear.

**Target launch revenue:** $79 LTD to 500 founding-member shops = $39,500. Post-LTD MRR target: $39–59/mo subscription → $10K+ MRR within 12 months.

---

## Core Vision

### Problem Statement

Small engine repair shops have no purpose-built management software. They run on paper work orders, whiteboards, sticky notes on parts, and phone calls. The pain is most acute in spring (April–May) when 50+ mowers arrive in the same week, and again in fall for generator and snowblower season.

The problem has three interlocking components:

1. **Queue chaos during peak season** — no system to track who owns which machine, what was promised, and when. Owners can't see their own backlog.
2. **Parts-to-job confusion** — when a Briggs & Stratton carburetor arrives, there's no reliable link between the part and the specific customer's specific machine in the specific bay. Parts end up on the wrong job.
3. **Customer communication volume** — without automatic status notifications, customers call repeatedly. One owner described fielding 20+ "is my mower ready?" calls every spring morning.

Secondary pain points include intake photo disputes (no record of pre-existing damage at drop-off), warranty claim documentation complexity for authorized Briggs & Stratton and Husqvarna dealers, and abandoned equipment with no tracking or storage fee enforcement.

### Problem Impact

**On the shop owner:**
- Spring and fall represent the majority of annual revenue. Chaos during peak season means missed promised dates, mix-ups, and customer disputes — damaging reputation and repeat business.
- Each phone interruption breaks workflow; 20+ calls/morning equals hours of lost repair time during the most valuable period of the year.
- Mis-allocated parts cause rework, delay, and material waste.

**On customers:**
- Customers with equipment in the shop have no visibility into status. Anxiety drives repeat calls.
- Disputed pre-existing damage creates conflict with no documentation to resolve it.

**On the business:**
- Abandoned equipment accumulates in bays with no enforcement mechanism.
- Warranty claims require serial numbers, failure descriptions, and tech signatures — tracked manually in paper folders. Errors lead to claim rejections.

**Financial impact scale:**
- A shop handling 400 jobs/year at $75 average labor = $30K annual revenue. Even a 10% efficiency improvement from software = $3K/year in recaptured time — making a $79 LTD an immediate payback in the first few days of use.

### Why Existing Solutions Fall Short

| Tool | Monthly Price | OPE-Specific | LTD Option | Warranty Claims | Seasonal Board |
|------|--------------|--------------|------------|-----------------|----------------|
| Bench | $79–$199/mo | Yes | No | No | No |
| Orderry | $39–$199/mo | Partial | No | No | No |
| RepairShopr | $70–$140/mo | No | No | No | No |
| RepairDesk | ~$50–80/mo | Partial | No | No | No |
| Workiz | $225+/mo | No | No | No | No |
| Paper/Excel | $0 | N/A | N/A | N/A | N/A |

**Bench** is the most direct threat — it is OPE-specific and has SMS pickup notifications. However, its weaknesses are significant:
- $79/mo minimum with no lifetime deal option. Off-season (November–March) the shop is slow and the monthly charge feels punishing. This is the #1 adoption barrier.
- No warranty claim documentation workflow — a gap that matters to any Briggs, Honda, or Husqvarna authorized dealer.
- No seasonal backlog board (calendar view of promised completion dates).
- No parts-to-specific-work-order linking (has generic inventory, not per-job part tracking).
- Only 120+ shops = <1% market penetration after presumably multiple years in market.

**Generic tools (Orderry, RepairShopr, RepairDesk):** Entry plans cap work orders at 75–100/month — a limit that breaks during a single spring peak week. Generic terminology ("tickets" not "work orders," no equipment-type workflows) creates friction and early abandonment.

**Root cause of failure:** No tool is priced for seasonal cash flow, no tool has warranty claim documentation, and no tool has a seasonal backlog board designed for the April–May crisis.

### Proposed Solution

ShopWrench is a lightweight, mobile-first work-order management system built exclusively for small engine repair shops. It speaks OPE fluently — mowers, chainsaws, generators, not "devices" or "assets."

**Core experience:**
- Equipment drops off → owner creates a digital work order on a tablet at the front counter: customer name, phone, equipment make/model/serial, symptom description, and intake photos (customer signs off digitally)
- Work order appears on the **Seasonal Backlog Board** — a Kanban-style view with promised date, bay assignment, and status lane
- Technician orders a part → it's linked directly to this specific work order with supplier, part number, and status (ordered → received → installed)
- When part arrives, the work order automatically advances and optionally alerts the tech
- When status moves to "Ready for Pickup," the customer receives an automatic SMS: "Your Toro lawn mower is ready at Johnson's Small Engine Repair. Please pick up by [date] to avoid storage fees."
- For warranty jobs, a flagged workflow collects required manufacturer fields (serial, failure code, parts used, tech signature) and tracks claim submission status

**Value proposition in one sentence:** The only small engine repair software you buy once — no monthly bills, no per-ticket limits, and the only one that handles warranty claims and seasonal backlog in the same tool.

### Key Differentiators

1. **Lifetime deal pricing ($79 one-time)** — The only tool in the market without a monthly subscription. Removes the off-season billing objection entirely. Positioned as "buy it like a tool, not rent it like a service."

2. **Seasonal backlog board** — Calendar/Kanban view of all active jobs with promised dates, overdue alerts (red), and bay assignments. Directly solves the spring chaos problem that no competitor addresses explicitly.

3. **Auto-SMS when ready** — Customer gets a text the moment status changes to "Ready for Pickup." Eliminates the "is my mower ready?" call flood. Bench has this, but at $79+/mo. We have it at $79 lifetime.

4. **Parts tied to work order (not inventory pool)** — Ordered a Briggs 593260 carb? It's linked to Mrs. Johnson's Toro in bay 3, not floating in generic inventory. When it arrives, the work order auto-advances.

5. **Warranty claim documentation** — Flag any job as a warranty claim. Required fields (serial number, date of service, failure description, parts used with part numbers, tech signature) are enforced. Claim submission status tracked. No competitor has this at any price.

6. **Intake photo with digital sign-off** — Customer signs (finger on tablet) acknowledging pre-existing damage at drop-off. No more disputes at pickup.

---

## Target Users

### Primary Users

#### Persona 1: Dave — Solo Owner-Operator (60% of market)

**Background:** Dave is 54, runs a one-person shop in suburban Ohio. He's been a small engine mechanic for 30 years. He does everything — fixes mowers, answers the phone, orders parts, invoices customers, and sweeps the floor. His wife helps on the phone two days a week during spring rush.

**Current workflow:** Dave writes work orders on pre-printed paper forms. He pins them to the mower handlebars with a zip tie. Parts he orders go on a sticky note on his bench. He keeps track of which customers are "getting antsy" in his head.

**Spring crisis:** April and May are controlled chaos. He takes in 50–70 mowers. By mid-April he has forgotten which customers he promised Tuesday and which he promised "sometime next week." Calls start at 8am and continue until he stops answering.

**Tech comfort:** Medium-low. Uses a smartphone but isn't interested in complicated software. Would use a tablet if it was as simple as filling in a form.

**Budget:** Strongly prefers paying once. "$39/month feels fine in May, but I'm not paying it in January when nothing's here." A $79 lifetime deal is an easy yes.

**Pain trigger:** Lost a work order last spring and gave the wrong mower to the wrong customer. Thirty minutes of confusion, one very unhappy customer.

**Success looks like:** Dave can glance at his phone and see exactly which jobs are waiting for parts, which are ready, and which are overdue. His wife texts customers automatically. Dave fields 3 calls on a spring morning instead of 25.

---

#### Persona 2: Maria — Family Shop Co-Owner with 3 Techs (35% of market)

**Background:** Maria, 42, co-owns a shop with her husband in rural Minnesota. They have 3 technicians plus themselves. They service mowers, snowblowers, and small tractors. They're an authorized Briggs & Stratton service center.

**Current workflow:** Work orders are on paper. The whiteboard tracks which tech has which machine. Parts are in a separate notebook. Warranty claims go into a manila folder per manufacturer. Filing B&S claims takes 20–30 minutes per job because they have to pull out paper records and cross-reference the original work order.

**Tech comfort:** Medium. Uses QuickBooks for accounting. Would consider software if it integrates with QuickBooks or at least exports invoices cleanly.

**Budget:** $59/month is acceptable if it saves the warranty claim hassle alone. Would still prefer a lifetime deal.

**Pain trigger:** A warranty claim for a defective B&S engine was rejected because they couldn't find the serial number in their records. $340 loss.

**Success looks like:** Every warranty job has a complete digital trail from intake to claim submission. Spring coordination between 3 techs happens on a shared screen, not a whiteboard. Customers get a text, not a call.

---

#### Persona 3: Tom — OPE Dealer Service Department Head (5% of market)

**Background:** Tom, 38, manages the service department at a full-line OPE dealer (sells new Husqvarna and Honda equipment, plus runs a service bay). He handles 150+ units per week at peak and is an authorized dealer for three manufacturers.

**Current workflow:** The dealer uses a basic point-of-sale system for equipment sales. Service jobs are tracked separately in a mix of spreadsheets and a 10-year-old legacy DOS-based dealer management system. Manufacturer warranty claims require logging into separate portals for each brand.

**Tech comfort:** High. Wants integrations, reporting, and multi-user access with role permissions.

**Budget:** $59–99/month or a significant LTD if it replaces the legacy DMS for the service side.

**Pain trigger:** Warranty claim audit by Husqvarna revealed inconsistent documentation across 30 claims. They had to reconstruct records manually.

**Success looks like:** Warranty claims are documented at the point of service, not reconstructed afterward. The seasonal board coordinates his 5 techs without a status meeting every morning.

---

### Secondary Users

**Technicians (non-owner):** Use the system to update job status, log completed work, and note parts needed. They need mobile-friendly job views and simple status updates — not admin access. Typically managed by the shop owner's account.

**Spouses / Front Desk (solo shops):** Often handle customer calls and communication. They benefit most from the auto-SMS feature (fewer inbound calls) and the backlog board (can answer "is it ready?" without interrupting the mechanic).

**Parts Suppliers (indirect):** Not direct users, but the parts-to-work-order linking creates a natural integration point. Future: direct supplier ordering from within the work order.

---

### User Journey

#### Discovery

Dave sees a post in r/smallengines: *"What do you use to track work orders during spring rush? My paper system is failing me."* Several replies mention struggling with the same thing. Someone mentions a new tool built specifically for small engine shops with a one-time price. Dave clicks the link, sees "No monthly fees. Built for mower shops." He signs up for the free 14-day trial — no credit card required.

#### Onboarding

Dave gets a tablet setup guide (5 steps). He enters his shop name and creates his first work order for a mower already on his bench — takes 4 minutes. He adds a photo, sets a promised date, and hits save. The work order appears on his backlog board. He texts his wife: "I just did the first one, took less time than the paper form."

#### Core Usage — Spring Rush

April 15th: Dave has 38 active work orders on the board. He can see at a glance:
- 12 waiting for parts (amber)
- 8 in repair (green)
- 6 ready for pickup (blue — texts already sent)
- 4 overdue past promised date (red)

When a carb arrives from his supplier, he opens the work order it was linked to, marks the part received, and the job moves from "Parts Ordered" to "Ready to Repair." He marks it complete at end of day — customer gets an automatic text at 5:03 PM.

#### Success Moment ("Aha!")

The first morning of spring rush where Dave doesn't receive a single "is my mower ready?" call before noon. His wife mentions she only had 2 calls all morning. Dave realizes he should have done this years ago.

#### Long-term Retention

By fall, Dave's customer history is in the system. He can look up Mrs. Johnson's mower serial number, find the parts he used last year, and quote the snowblower pre-season service accurately. Switching out would mean losing all that history. He renews (for LTD holders, he becomes an advocate — recommends to the guy two towns over).

---

## Success Metrics

### User Success Metrics

The core user value proposition translates into three measurable outcomes:

**1. Spring Call Reduction**
- Target: Shops report 50%+ reduction in inbound "is my mower ready?" calls within first spring season of use
- Measurement: User survey at end of spring season (May/June)
- Proxy metric: Auto-SMS sent per shop per week during April–May peak

**2. Time to First Work Order (Onboarding Speed)**
- Target: 80% of new users create their first complete work order within 30 minutes of signup
- Measurement: In-app event tracking (signup → first WO complete timestamp)
- Rationale: If it takes longer than a paper form, shops will abandon

**3. Active Usage Retention During Peak Season**
- Target: 70% of shops that activated in the prior 90 days have at least 5 active work orders open during April–May
- Measurement: In-app active work order count per shop
- Rationale: Seasonal tools must prove value during the season that motivated purchase

**4. Parts-to-Job Accuracy**
- Target: 85% of parts entered in the system are linked to a specific work order (not "unlinked")
- Measurement: In-app ratio of linked vs. unlinked parts entries
- Rationale: Core differentiator; if shops are using generic inventory mode, the key value prop isn't landing

### Business Objectives

**3-Month Goals (Launch → September 2026):**
- 500 founding-member LTD purchases at $79 = $39,500 launch revenue
- 100 active shops running at least 50 work orders/month (proves core retention)
- 3 YouTube channel sponsorships activated (proof of distribution channel)
- Net Promoter Score ≥ 50 from LTD cohort (measured via post-season survey)

**12-Month Goals (by June 2027):**
- $10K+ MRR from subscription tier (post-LTD shops, add-on features)
- 1,500 total shops on platform (LTD + subscription)
- 5 documented warranty claim workflow success stories from authorized dealers
- Churn rate <5%/month on subscription tier (history and parts data create switching cost)

**24-Month Strategic Goals:**
- Break-even or profitability on subscription revenue alone
- AppSumo or ProductHunt launch to expand awareness beyond community-direct channels
- Supplier integration (direct part ordering from within work order) as premium add-on
- Explore B&S / Husqvarna dealer network distribution partnership

### Key Performance Indicators

| KPI | Target | Timeframe | Measurement |
|-----|--------|-----------|-------------|
| LTD Sales | 500 units | Launch month | Payment processor |
| Activation Rate | 70% of purchasers create ≥1 WO in 30 days | 30 days post-purchase | In-app event |
| Auto-SMS per active shop | ≥10/week during peak season | April–May | In-app event |
| Spring Retention | 70% of shops active April–May | Annual | In-app active WO |
| Warranty Jobs Created | 500+ cumulative by month 6 | 6 months | In-app event |
| MRR | $10K | Month 12 | Stripe |
| NPS | ≥50 | Post-spring survey | Survey tool |
| Subscription Churn | <5%/month | Month 6+ | Stripe |

**Leading Indicators (predict 12-month success):**
- Month 1: 200+ LTD sales in first 30 days (validates community channel)
- Month 2: 60%+ of purchasers have entered ≥10 work orders (validates stickiness)
- Month 3: First 5 warranty claim workflows completed by authorized dealers (validates moat feature)

---

## MVP Scope

### Core Features

The MVP is the minimum product that solves the spring backlog crisis — the #1 pain point — while establishing the foundation for the warranty claim moat. Estimated build: 3–4 weeks with one full-stack developer and one designer.

**Feature 1: Digital Work Order**
- Equipment intake form: customer name, phone, equipment make/model/serial number, symptom description
- Promised completion date field
- Equipment bay/location assignment
- Status field: Waiting → Diagnosed → Parts Ordered → In Repair → Complete → Ready for Pickup
- Intake photos (up to 5 photos per work order, taken from device camera or uploaded)
- Customer digital sign-off on intake condition (finger signature or checkbox acknowledgment)

**Feature 2: Seasonal Backlog Board**
- Kanban/list view of all active work orders, sorted by status
- Color coding: overdue promised dates = red, due today = amber, on track = green, ready = blue
- Filter by: status, technician, bay, overdue
- Search by customer name or equipment model
- Mobile-responsive for tablet use at the front counter

**Feature 3: Parts Log (Per Work Order)**
- Add parts to a specific work order: part name, part number, supplier, date ordered, status (Ordered → Received → Installed)
- Visual indicator on work order card: "Parts Pending"
- When all parts marked Received, work order suggests advancing to "In Repair"
- No general inventory management in MVP — this is strictly per-job parts tracking

**Feature 4: Auto-SMS When Ready**
- When work order status moves to "Ready for Pickup," trigger automatic SMS to customer phone number from work order
- Default message template: customizable per shop (shop name, equipment description, pickup deadline)
- Optional: follow-up SMS if not picked up within X days (configurable)
- SMS provider: Twilio (included in subscription/LTD; initial plan includes 500 SMS/month)

**Feature 5: Basic Invoice on Completion**
- When status moves to "Complete," prompt to generate invoice
- Line items: labor (hours × rate), parts used from parts log (auto-populated), tax
- PDF export or text/email to customer
- No payment processing in MVP — invoice is informational only

**Feature 6: Multi-User Access (for Team tier)**
- Owner account with full admin access
- Technician accounts: can update work order status and parts log, cannot edit customer info or pricing
- Up to 5 technician seats on Team LTD tier

**Feature 7: Warranty Claim Workflow (for dealer segment)**
- Checkbox on work order: "This is a warranty job"
- When checked, surfaces required fields: engine serial number, date of purchase, failure description (structured), parts used with OEM part numbers, technician name and certification number
- Claim status field: Not Submitted → Submitted → Approved → Rejected
- PDF export of warranty documentation in standardized format

---

### Out of Scope for MVP

These features are explicitly deferred to post-MVP:

- **General inventory management** — Bench and Orderry have this. We focus on per-job parts tracking only. Adding inventory management would double build time and dilute focus.
- **Payment processing** — Stripe/Square integration deferred. MVP generates invoices but doesn't process payments. Shops can use their existing cash/check/Square terminal.
- **QuickBooks / accounting integrations** — Important for Maria persona, but not launch-blocking. Post-MVP v1.1.
- **Supplier integrations (direct part ordering)** — High value, but requires supplier API partnerships. Target for month 6–12 after validating core retention.
- **Customer-facing status portal** — Bench has this. Deferred post-MVP. Auto-SMS handles the use case in MVP.
- **Barcode scanning for parts and equipment** — Useful for larger shops, not required for solo/small shop MVP.
- **Reporting and analytics dashboard** — Revenue reports, seasonal trends, technician productivity. Target for month 3 subscription add-on.
- **Abandoned equipment tracking with automated storage fees** — Valuable (Bench has this), but not the core pain point. Post-MVP.
- **Mobile apps (iOS/Android native)** — Mobile-responsive web app ships in MVP. Native apps deferred.

---

### MVP Success Criteria

The MVP is validated when any three of these four conditions are met:

1. **500 LTD purchases** within 90 days of launch (validates price point and demand)
2. **70% of purchasers** create ≥10 work orders within 30 days (validates adoption)
3. **50+ shops active** during spring peak (April–May) with ≥20 work orders open simultaneously (validates core use case)
4. **NPS ≥ 50** in post-spring survey (validates user satisfaction and word-of-mouth potential)

**Go/no-go decision for subscription tier:** If 3 of 4 criteria are met, proceed to subscription product development, QuickBooks integration, and AppSumo launch. If fewer than 2 are met, interview churned users and pivot before investing further.

---

### Future Vision

**Phase 2 (Months 3–6): Stickiness Features**
- QuickBooks Online sync (invoices and payments)
- Abandoned equipment tracking with automated storage fee escalation
- Customer-facing status portal (view their own job status without calling)
- Reporting dashboard: revenue by month/season, average repair time, parts spend per job
- Barcode scanning for quick work order lookup at front counter

**Phase 3 (Months 6–12): Moat Deepeners**
- Direct parts ordering from within work order (supplier API integrations: Briggs parts lookup, Rotary, STENS)
- Warranty claim portal for authorized dealers — pre-fill B&S and Husqvarna claim forms, track claim status in app
- Technician productivity reports (jobs per day, average time per job type)
- Native iOS/Android app for field use

**Phase 4 (Year 2): Platform Expansion**
- OPE dealer DMS module (sales + service in one tool) — targets the 5% dealer segment that needs full dealer management
- Fleet service accounts (landscaping companies with 20+ mowers serviced annually)
- Manufacturer co-marketing partnerships (Briggs & Stratton authorized dealer directory integration)
- International expansion: Canada, UK, Australia (same English-speaking market, similar shop profile)

**Long-term vision (3 years):** ShopWrench becomes the default operating system for the independent OPE service industry — the way ServiceTitan is for HVAC and Jobber is for landscaping. With ~20,000 shops as the addressable market, 10% penetration at $59/mo = $7M ARR. The warranty claim moat and parts-supplier integrations make ShopWrench impossible to dislodge once a shop's equipment history, customer records, and warranty claims live in the system.

---

## Go-to-Market Strategy

### Launch Sequence

**Pre-Launch (6–8 weeks before):**
- Post in r/smallengines: "What do you use to track work orders during spring rush?" — validate pain, build waitlist organically
- Recruit 10 beta shops from r/smallengines and My Tractor Forum thread (existing thread about shop software = high-intent audience)
- Offer free beta access in exchange for 30-minute feedback calls
- Set up simple landing page: "Built for small engine shops. One-time price. No monthly fees." with email capture

**Launch (Target: February–March 2026 for pre-spring capture):**
- Founding Member LTD at $79 (first 500 shops) → then moves to $39/mo subscription
- Community-first: announce in r/smallengines, My Tractor Forum, Facebook groups ("Small Engine Repair Professionals")
- YouTube outreach: 3–5 sponsorships with mid-tier channels (50K–500K subs, $500–$2,000/video)
  - Steve's Small Engine Saloon (~350K subs) as stretch goal
- Outreach to 20 OPE dealers via Facebook/LinkedIn for beta access

**Post-Launch (Month 2–3):**
- Collect testimonials from beta shops. Target: "70% fewer calls during spring rush" style proof points (mirror Bench's language since their claims are validated)
- AppSumo as secondary channel once 50+ testimonials exist — use for credibility/spike, not primary acquisition

### Pricing

| Tier | Price | Users | SMS | Key Features |
|------|-------|-------|-----|--------------|
| Solo LTD | $79 one-time | 1 user | 500/mo | All core features |
| Team LTD | $149 one-time | 5 users | 2,000/mo | All core + warranty claims |
| Solo Monthly | $39/month | 1 user | 500/mo | All core features |
| Team Monthly | $59/month | 5 users | 2,000/mo | All core + warranty claims |

**Pricing rationale:** $79 is the same entry price as Bench's monthly minimum — positioned as "one month of Bench, forever." LTD framing speaks directly to seasonal subscription reluctance. Monthly tier exists for shops that find us post-LTD campaign or prefer the lower entry point.

---

## Risk Register

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|------------|
| Bench closes LTD and warranty gaps in next 6 months | Medium | High | Move fast on community distribution before Bench builds brand recognition; lock in warranty workflow as moat |
| Tech aversion too deep — shops won't adopt even simple software | Medium | High | Bench's 120 shops proves adoption is possible; 14-day free trial with no credit card removes barrier; onboarding in <30 mins is non-negotiable |
| SMS costs erode LTD economics | Low | Medium | Twilio rates at scale are ~$0.007/SMS; 500 SMS/month/shop = $3.50 cost vs $79 LTD amortized over years |
| AppSumo audience mismatch (digital marketers, not tradespeople) | High | Low | Community-direct (Reddit, YouTube, Facebook) is primary channel; AppSumo is secondary/credibility |
| Orderry or RepairShopr launches LTD campaign | Low | Medium | OPE-specific language, workflow, and warranty features create switching cost even if price matches |
| Off-season churn on monthly subscribers | High | Medium | LTD eliminates this for founding cohort; history/parts data stickiness grows over time; consider "annual plan" option at $299/year |

---

*Product Brief complete. Ready for PRD creation.*
