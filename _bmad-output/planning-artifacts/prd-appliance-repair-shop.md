---
stepsCompleted: [step-01-init, step-02-discovery, step-02b-vision, step-02c-executive-summary, step-03-success, step-04-journeys, step-05-domain, step-06-innovation, step-07-project-type, step-08-scoping, step-09-functional, step-10-nonfunctional, step-11-polish, step-12-complete]
inputDocuments:
  - ideas/shortlisted/appliance-repair-shop-fsm.md
  - _bmad-output/planning-artifacts/market-research-appliance-repair-shop.md
  - _bmad-output/planning-artifacts/brief-appliance-repair-shop.md
workflowType: prd
product_name: appliance-repair-shop
research_topic: appliance-repair-shop-fsm
user_name: Root
date: 2026-06-19
classification:
  projectType: saas_b2b
  domain: field_service_management
  complexity: medium
  projectContext: greenfield
---

# Product Requirements Document — Appliance Repair Shop FSM

**Author:** Root
**Date:** 2026-06-19
**Product:** RepairDesk (working title) — Purpose-built FSM for independent appliance repair shops

---

## Executive Summary

Independent appliance repair shops are operationally underserved. The 37,000+ US businesses that fix refrigerators, washers, and dishwashers for a living manage workflows that no affordable software adequately handles. The root problem is structural: appliance repair jobs routinely pause for 3–14 days while parts ship, and every existing FSM tool ($49–$329/month) was designed for trades where jobs run start-to-finish in one visit. The result is that shops track parts orders in notebooks, log OEM warranty claims in spreadsheets, and lose thousands of dollars annually in missed reimbursements and repeat-customer goodwill.

This product is a purpose-built field service management tool for independent appliance repair shops with 1–10 technicians. It solves the three workflow gaps generic tools cannot: (1) a first-class "Waiting for Part" job status with distributor, part number, ETA, and automatic customer SMS on part arrival; (2) an OEM warranty claim log with claim number, submission date, expected reimbursement, and follow-up reminders; (3) per-appliance service history keyed to model number, serial number, and purchase date. It sells at $49/month flat for the entire shop — no per-technician pricing — which removes the primary adoption barrier for solo and micro shops.

The target market is ~26,000 shops likely to use software. Rossware ($150/month) proves they pay for appliance-specific tooling; the gap is an affordable modern tool with the parts and warranty workflows they actually need. Revenue model: $49/month subscription (primary), $470/year, and $79 LTD via AppSumo for initial acquisition. Path to $25K MRR within 12 months via community channels (Reddit, Facebook groups, ASTI) and AppSumo launch.

### What Makes This Special

The single differentiation: **the only FSM tool under $100/month that understands appliance repair jobs don't end until the part shows up.** No competitor at any price point offers inline parts lookup (searching RepairClinic/PartSelect by model number from within the job ticket), a workflow-aware "Waiting for Part" status with customer notification triggers, or a structured OEM warranty claim tracker. Generic tools have text fields where shops have workflows; this product has the workflows.

Flat-rate pricing is the second unlock. Workiz charges $187–$325/month for 3 users; this product charges $49 for the entire shop regardless of technician count. This removes the objection that kills adoption in small shops and makes the per-tech pricing model of competitors feel punitive by comparison.

## Project Classification

- **Project Type:** SaaS B2B — multi-user web/mobile application with flat-rate subscription pricing
- **Domain:** Field Service Management (Trades Software) — no regulatory compliance requirements, medium operational domain complexity driven by trade-specific workflows
- **Complexity:** Medium — not a regulated domain, but requires appliance-trade domain expertise embedded in the data model (model numbers, distributor networks, OEM warranty portals) and offline-tolerant mobile execution
- **Project Context:** Greenfield — no existing codebase or user base; building from scratch targeting a new segment

---

## Success Criteria

### User Success

Users succeed when the three core workflow gaps are solved without requiring a parallel spreadsheet:

- **Parts workflow**: A shop owner or technician can set a job to "Waiting for Part" with distributor, part number, and ETA in under 60 seconds, see all parts-blocked jobs in a dedicated queue view, and trigger a customer SMS automatically when the part arrives — with no manual follow-up required.
- **Warranty claim coverage**: An authorized service center logs every warranty claim within the job ticket, receives a reminder before the follow-up date, and can see all open claims and their status across the entire shop in one view. Zero warranty reimbursements are lost due to missed follow-up.
- **Appliance identity**: When a repeat customer calls, the technician can retrieve the complete service history of the specific appliance (model, serial, all prior jobs) within 10 seconds of opening the customer record.
- **Activation moment**: A shop is activated when they have created their first "Waiting for Part" job with at least distributor name and part number filled in. Target: ≥50% of trial shops reach this moment within 7 days of signup.

### Business Success

| Metric | 3-Month Target | 12-Month Target |
|--------|---------------|----------------|
| Monthly Recurring Revenue | $3,000–$7,000 | $10,000–$25,000 |
| Active paying shops | 60–150 | 300–600 |
| AppSumo LTD sales | 150–400 (launch window) | — |
| Trial-to-paid conversion | >12% | >15% |
| Monthly churn rate | <15% (early cohort) | <5% |
| NPS from paying cohort | ≥25 | ≥35 |
| G2/Capterra reviews | 10+ | 20+ (avg ≥4.0) |
| Community-sourced signups | >40% of new signups | >50% |

AppSumo launch at $79 LTD is both a revenue event and a validation instrument — 200+ LTD sales within the launch window confirms product-market fit and funds community investment.

### Technical Success

- **Mobile reliability**: Core job workflows (create job, update status to "Waiting for Part," log part details, change status to active) function correctly on iOS and Android in environments with poor or no connectivity. Status updates queue locally and sync on reconnect.
- **SMS delivery**: Customer notifications triggered by status changes deliver successfully ≥95% of the time. Delivery failures are logged and surfaced to the dispatcher.
- **Data integrity**: No job records, appliance histories, or warranty claims are lost or corrupted during status transitions or offline sync events.
- **Performance**: Job list loads within 2 seconds for shops with up to 500 active jobs. Parts lookup search results render within 3 seconds of model number submission.
- **Uptime**: ≥99.5% monthly uptime for all authenticated user-facing operations.

### Measurable Outcomes

- **Parts workflow adoption**: ≥60% of eligible jobs (those where a part is ordered) use "Waiting for Part" status with at least distributor and part number filled in, within 30 days of onboarding
- **Parts lookup usage**: ≥3 in-app parts searches per active shop per week (for shops with parts-heavy work)
- **Warranty claim logging**: ≥5 claims logged per authorized service center per month
- **Customer SMS delivery**: >95% delivery rate on "part arrived" status transitions
- **Appliance history depth**: Average ≥2 appliances tracked per customer per active shop within 60 days
- **MVP validation gate**: $5,000 MRR OR 150+ AppSumo LTD sales within 60 days of launch, plus <15% monthly churn at Month 2

---

## Product Scope

### MVP — Minimum Viable Product

The MVP must solve the three core workflow gaps end-to-end for a solo or small-team shop. Every MVP feature directly addresses parts chaos, warranty reimbursement leakage, or appliance identity loss.

**Core MVP capabilities:**

1. **Job tickets with appliance identity** — model number, serial number, purchase date fields; appliance profile persisting across jobs; full repair history per appliance visible when creating a new job
2. **Parts-on-order job status** — discrete "Waiting for Part" status with required fields (distributor, part number, order date, ETA); dispatcher queue filterable by status; ETA overdue flagging
3. **Customer SMS on part arrival** — automatic SMS triggered when job transitions out of "Waiting for Part"; customizable message template per shop; delivery confirmation in job timeline
4. **OEM warranty claim log** — per-job warranty section with claim number, OEM brand, submission date, expected reimbursement, claim status, follow-up reminder date; warranty claim summary view across all jobs
5. **Parts lookup via embedded web view** — model number on job ticket → "Search Parts" button → opens RepairClinic/PartSelect pre-filled with model number; one-tap copy of part number back to job ticket
6. **Flat-rate invoicing** — invoice from job ticket; labor and parts line items; parts markup calculation; PDF export; paid/unpaid/partial tracking
7. **Multi-tech flat-rate access** — $49/month for entire shop; owner + unlimited technicians on same plan; tech mobile access for assigned jobs, status updates, appliance history, parts lookup; owner full access to all jobs, invoices, warranty summary, settings
8. **Mobile-first PWA** — all core features accessible from iOS/Android browser; offline queue for status updates; no connectivity required for viewing cached job details

### Growth Features (Post-MVP)

- **QuickBooks sync** — auto-send paid invoices to QuickBooks; import customer list. Target: Month 4–8, reduces admin burden for ~65% of small shops using QuickBooks
- **Parts referral/affiliate revenue** — negotiate affiliate relationships with RepairClinic, PartSelect, Parts Town; one-click ordering from within job ticket with referral tracking. Target: Month 6+
- **OEM warranty claim submission helpers** — step-by-step in-app guides for Samsung, LG, Whirlpool, GE warranty portal submission. Reduces filing time from 15 minutes to ~3 minutes without full API integration. Target: Month 6–10
- **Parts inventory tracking** — log parts kept in stock (motors, belts, switches); reduce order-first friction for shops with small inventory. Target: Month 8–12
- **Calendar and scheduling** — job scheduling calendar view; rescheduling flow triggered when part arrives. Target: Month 4–6

### Vision (Future)

- **OEM warranty claim auto-submission** — authenticated integrations with Samsung SmartCare, LG ServiceNet, Whirlpool warranty portal; auto-submit claims, pull payment status. Premium tier at $99/month targeting authorized service centers
- **Parts ordering API** — formal partnership/API with RepairClinic and PartSelect; enable order placement from within job ticket; wholesale pricing leverage if volume warrants
- **Technician performance reporting** — jobs completed per tech, average job value, parts margin per tech
- **Predictive parts stocking** — aggregated failure-rate data across the customer base informs model-specific parts stocking recommendations
- **Right-to-repair expansion** — electronics and small appliance repair shops; Canada and UK market entry

---

## User Journeys

### Journey 1: Marcus — Solo Owner-Operator (Primary Success Path)

Marcus is a 47-year-old solo operator who fixes appliances in a mid-sized city. He's been in the trade 20 years. His business card says "Marcus's Appliance Repair." His wife handles invoicing two nights a week. He currently tracks jobs on a legal pad and parts orders in a spiral notebook on his van seat.

**Opening Scene:** It's 7:15 AM. Marcus is in his kitchen with coffee before the first job. He opens the app and sees his queue: 12 jobs, 4 of them in "Waiting for Part" status. The parts queue shows him immediately: one part is overdue (ETA was yesterday), two arrive today, one arrives Thursday. He taps the overdue job and sees it's a LG refrigerator control board from RepairClinic, ordered 9 days ago. He calls the customer to give an update before the customer calls him — a first in his career.

**Rising Action:** At the first job of the day (a Samsung dishwasher), Marcus diagnoses a failed door latch assembly. He opens the job ticket, sees that this customer had the same dishwasher's spray arm replaced 14 months ago. He types the model number, taps "Search Parts," and RepairClinic opens pre-filled with the model. He finds the correct part in 90 seconds. He adds it to the job ticket, sets status to "Waiting for Part," enters the distributor (RepairClinic), part number, order date (today), and ETA (3 business days). He's done before he leaves the customer's driveway.

**Climax:** Four days later, the part arrives at Marcus's house. He opens the app, finds the Samsung job in the parts queue, changes status to "Part Arrived." The app immediately sends the customer an SMS: "Good news — your part has arrived at Marcus's Appliance Repair. We'll call soon to schedule your repair." Marcus's phone rings 20 minutes later — the customer saw the text and is calling to schedule. Zero manual effort.

**Resolution:** At month's end, Marcus has had zero customer complaints about "I didn't know the status of my repair." He found 3 warranty jobs in the list of open claims and followed up on a $340 Samsung claim he'd forgotten. He's running the entire shop from his phone and a legal pad sits unused on the passenger seat.

---

### Journey 2: Rita — Growing Shop Manager (Authorized Service Center)

Rita is 39, owns a 5-technician shop authorized by Samsung and LG. She has an admin assistant (Dana) who dispatches and handles customer calls. They use Workiz, but Dana maintains a separate parts spreadsheet and a Google Sheet for warranty claims. Rita estimates she's losing $1,500–$2,500/month in uncollected warranty reimbursements.

**Opening Scene:** Monday, 8:30 AM. Dana starts the dispatch queue for the week. In Workiz, every job looks the same — "in progress" — whether a tech is actively working it or it's been sitting for 10 days waiting for a Whirlpool motor. Dana spends 20–25 minutes cross-referencing the Google Sheet to figure out which jobs are actually schedulable vs. parts-blocked.

**Rising Action:** Rita migrates to the new tool. Week one: she imports her customer list (CSV), sets up tech accounts for all 5 technicians, and moves her open warranty claims into the warranty claim log. She opens each claim, enters the claim number from Samsung SmartCare and LG ServiceNet, and sets follow-up reminders. Two claims had overdue follow-up dates she hadn't noticed — one for $280 (Samsung), one for $195 (LG).

**Climax:** Tuesday of week 2, Dana opens the dispatcher queue at 8:30 AM. The "Waiting for Part" view shows 7 jobs, each with distributor, part number, and ETA visible. The schedulable jobs list is clean — 23 active jobs with no parts blocking. Dana builds the week's schedule in 8 minutes instead of 25. At 9:15 AM, the app sends Rita a notification: "Warranty claim follow-up due: Samsung claim #WC-8843391, $340 expected, submitted 12 days ago." Rita emails Samsung service center — they process it within 3 days.

**Resolution:** By month 3, Rita has recovered $2,100 in warranty reimbursements that her previous workflow would have missed. Dana no longer maintains the parts spreadsheet. The technicians use the parts lookup feature on their phones — two of them report they found the right part number faster in the field than they used to when calling the office to look it up.

---

### Journey 3: Field Technician (Damian) — Parts Lookup on Site

Damian is one of Rita's technicians, 32 years old, been in the trade 8 years. He's comfortable with his phone but doesn't want complexity. His job is to show up, diagnose, fix, and move to the next job.

**Opening Scene:** Damian is at a residential call for a GE dishwasher that won't drain. The model number is on the inside of the door. He opens the job ticket on his phone — the customer's address, the appointment notes, and a note that this dishwasher had a pump replaced 2 years ago (service history).

**Rising Action:** He diagnoses a failed drain pump motor. He knows the model but doesn't know the exact part number off the top of his head. He types the model number into the job ticket, taps "Search Parts." RepairClinic opens, pre-filled, and he finds the correct WD26X10013 motor within 2 minutes. He copies the part number back into the job ticket.

**Climax:** He sets the job to "Waiting for Part" — distributor: RepairClinic, part number: WD26X10013, order date: today, ETA: 2 business days. He saves and moves to his next job. The office (Dana) sees the job appear in the parts queue immediately. The customer gets an automated SMS when the part arrives.

**Resolution:** Damian doesn't call the office to look up part numbers. He doesn't forget to log the parts status. The office doesn't call him to find out what's happening with that GE dishwasher. Everyone has the same information.

---

### Journey 4: Marcus — Warranty Claim Failure Scenario (Edge Case)

Marcus takes a call for an in-warranty LG refrigerator. He's LG-authorized, so the OEM pays him for labor. He does the repair, submits the claim to LG Service Net, and logs the claim in the app: claim number LG-2026-44891, expected reimbursement $185, follow-up date 21 days out.

Twenty-three days later, the app sends a notification: "Follow-up overdue: LG claim #LG-2026-44891, $185 expected." Marcus checks LG Service Net — the claim was rejected for a missing part code on the original submission. He corrects and resubmits. Two days later, payment is approved. He marks the claim as "Paid" in the app.

Without the reminder, this $185 would have been written off. Marcus had previously lost $1,200 in warranty reimbursements over 18 months because he didn't have a system to follow up. The warranty claim log pays for the software in the first month he catches one missed claim.

---

### Journey Requirements Summary

| Journey | Capabilities Revealed |
|---------|----------------------|
| Marcus - success path | Parts queue view, "Waiting for Part" status with fields, automated SMS trigger, parts lookup web view, appliance history, ETA overdue flagging |
| Rita - authorized center | Multi-tech access, dispatch queue filtering by status, warranty claim log, follow-up reminder notifications, warranty summary view, customer CSV import |
| Damian - field tech | Mobile-first parts search, copy part number to job ticket, status update from field, job history before arrival |
| Marcus - warranty edge case | Claim status tracking (submitted/pending/paid/disputed), overdue follow-up notification, claim resubmission logging |

---

## Domain-Specific Requirements

### Trade Workflow Patterns

The appliance repair trade has two structural differences from other field service trades (HVAC, plumbing, electrical) that drive domain-specific data model requirements:

1. **The parts-blocked state is not an exception — it is the norm.** Approximately 40–60% of appliance repair jobs require a part to be ordered. The "waiting for part" state must be a first-class status in the data model, not a custom label on "In Progress." This affects queue views, scheduling logic, customer communication, and reporting.

2. **Appliances, not properties, are the unit of service.** HVAC services a building's HVAC system (one system per property). Appliance repair services individual appliances — a single customer may have 3–5 appliances, each with its own model number, serial number, purchase date, and repair history. The data model must represent appliances as distinct entities, not just job notes.

### Parts Distributor Ecosystem

Shops order from multiple distributors (RepairClinic, PartSelect, Parts Town, local supply houses). The MVP does not require API integration with these distributors — the embedded web view approach for parts lookup achieves 80% of the value with zero partnership dependency. Post-MVP, affiliate/API partnerships with RepairClinic and PartSelect are the primary revenue diversification path.

Part numbers should be stored as free-text strings on job tickets. No validation against distributor catalogs in MVP — that adds complexity without proportionate value at this stage.

### OEM Warranty Portal Landscape

Authorized service centers interact with OEM-specific warranty portals (Samsung SmartCare, LG ServiceNet, Whirlpool's dealer portal, GE Appliances service). These portals are not API-accessible in the MVP. The warranty claim section is a structured logging tool, not a portal integration. The fields are:

- OEM brand (Samsung, LG, Whirlpool, GE, Bosch, Electrolux, Miele, other)
- Claim number (free-text, as assigned by the OEM portal)
- Submission date
- Expected reimbursement amount
- Claim status (submitted / pending / paid / disputed / withdrawn)
- Follow-up reminder date
- Reimbursement received date (to close the claim)
- Notes (for rejection reasons, resubmission notes)

The follow-up reminder fires as an in-app notification and optionally as an email to the shop owner. No OEM portal authentication is required in MVP.

### Customer Communication Context

SMS notifications to customers about part arrival are the primary outbound communication in MVP. This is a transactional message (the customer asked for service; the SMS is a status update they expect). Compliance requirements: TCPA consent. MVP approach: shops confirm at signup that their customers have consented to service-related SMS (standard practice for repair shops). Full consent management infrastructure is post-MVP.

SMS provider: Twilio (or equivalent). Shop phone number is displayed as sender where possible (Twilio toll-free or local number registration). Unsubscribe handling required by TCPA: "Reply STOP to opt out" appended to all SMS.

---

## Innovation & Novel Patterns

### Detected Innovation Areas

**Workflow-first parts status**: No FSM tool at any price point below $250/month has a data model that treats "waiting for part" as a first-class status with structured fields (distributor, part number, ETA) and a workflow trigger (customer SMS on status change). The innovation is not the concept — repair shops have always waited for parts — but the embedding of this waiting state into the job management data model as a first-class entity rather than a workaround.

**Inline parts lookup from job context**: The embedded web view approach — launching RepairClinic/PartSelect pre-filled with the model number from the active job ticket — is novel in that it uses context already in the system (the model number logged on the appliance) to reduce the friction of leaving the app. No competitor does this. The Phase 2 vision (one-click ordering with affiliate tracking) creates a network effect and economic moat if volume justifies it.

### Market Context

The "workflow-aware trade software" pattern exists in adjacent categories: HVAC software with equipment lifecycle tracking (ServiceTitan), pest control with recurring treatment scheduling (ServicePro), pool service with chemical dosing logs. What doesn't exist is the appliance repair equivalent with parts-on-order workflow awareness. The absence is explained by market size: appliance repair is ~26K software-addressable shops vs. HVAC's ~100K+ — too small for VC-backed entrants, large enough for a profitable niche SaaS.

### Validation Approach

- **Parts lookup**: Track "Search Parts" button tap rate per shop per week. If ≥3 searches/week per active shop within 30 days, the feature is being used as a primary workflow (not just explored). Below 1 search/week suggests discovery friction — investigate whether model number field is being filled consistently.
- **"Waiting for Part" adoption**: Measure % of closed jobs that passed through this status vs. jobs closed directly from "In Progress." If shops don't adopt the status, the workflow isn't integrated. Root cause: either the status change flow is too many taps, or the ETA field feels like extra work with no payoff.
- **Warranty claim logging**: Measure claims logged per authorized service center per month. If authorized centers don't log claims, investigate whether the claim log section is discoverable in the job ticket UI.

### Risk Mitigation

| Risk | Mitigation |
|------|-----------|
| RepairClinic/PartSelect block embedded web views | Test embedded views in-app before launch; if blocked, open in device browser with model number in URL — still saves the model lookup step |
| OEM portals add direct API competitors (ServiceTitan SMB tier) | Speed of execution; community presence and LTD holders create switching cost before large competitors can respond |
| Parts lookup adoption plateau | Add model number auto-fill from appliance profile; one-tap to copy results back; reduce friction at each step |

---

## SaaS B2B Specific Requirements

### Multi-Tenancy Model

Each shop is a tenant. Complete data isolation between tenants. All job records, customer records, appliance records, warranty claims, and invoices are scoped to the shop. No cross-tenant data sharing.

### Permission Model

| Role | Access |
|------|--------|
| Owner / Admin | Full access: all jobs, customers, appliances, invoices, warranty claims, settings, billing, tech management |
| Technician | Own assigned jobs (view + update status + parts lookup); all customer appliance history (read); no billing or warranty summary |

Two roles sufficient for MVP. Role assignment managed by the owner. Technicians cannot see or modify other technicians' jobs unless explicitly assigned.

### Onboarding Requirements

- Self-serve signup: email + password, no credit card required for 14-day trial
- First job creation guided: inline prompts to add model number, serial number, and appliance type on first job ticket
- Customer CSV import: accept standard field mapping (name, email, phone, address)
- SMS configuration: Twilio number provisioning on signup (or toll-free shared number at launch for simplicity)
- Default message template pre-populated; owner can customize before first SMS send

### Billing and Subscription

- Stripe-based billing
- Plans: Monthly ($49), Annual ($470/year), LTD ($79 one-time — redeemed via AppSumo code)
- LTD code redemption flow: enter code at signup → account activated as lifetime plan
- Overage model: none (flat-rate, unlimited technicians, unlimited jobs)
- Trial to paid: 14-day trial → prompt to add card → charge on day 15

### Integration Requirements (MVP)

- **SMS (Twilio)**: Required for customer notifications. Twilio API integration for SMS send and delivery status webhook.
- **PDF generation**: Invoice PDF export using server-side rendering (no client-side dependency).
- **Email (transactional)**: Account creation, password reset, warranty follow-up reminders. SendGrid or equivalent.
- **Parts lookup (web view)**: RepairClinic and PartSelect URLs with model number as query parameter. No API key required.

### Integration Requirements (Post-MVP)

- QuickBooks Online (OAuth, invoice sync)
- RepairClinic / PartSelect affiliate API (order tracking, referral revenue)

### Technical Architecture Considerations

- **Backend**: REST API (Node.js/Express or equivalent); PostgreSQL for structured data; multi-tenant row-level security via shop_id scoping on all tables
- **Frontend**: React SPA + mobile-first PWA; service worker for offline caching of job details and queued status updates
- **Mobile**: PWA targets iOS Safari and Android Chrome; native app wrapper (Capacitor) considered for Phase 2 if PWA limitations are hit
- **SMS**: Twilio Programmable SMS; delivery webhooks stored in job timeline
- **Hosting**: Railway, Render, or equivalent PaaS; no Kubernetes required at MVP scale (300–800 shops = low concurrency)
- **Offline sync**: IndexedDB for local job cache; status update queue that flushes on reconnect; conflict resolution: last-write-wins for status fields, append-only for timeline events

---

## Project Scoping & Phased Development

### MVP Strategy & Philosophy

**MVP Approach:** Problem-solving MVP. The product must solve all three core workflow gaps (parts status, warranty claims, appliance history) to be useful. A partial MVP (e.g., just parts status without warranty claims) would attract only shops with the most acute parts chaos — too narrow to validate product-market fit. The MVP is the minimum set of features that makes a shop say "I can cancel my spreadsheet."

**MVP Resource Requirements:** 1–2 engineers (full-stack), 1 part-time designer for mobile UI, 1 PM (founder). Target build time: 8–12 weeks from kickoff to beta.

### MVP Feature Set (Phase 1)

**Core User Journeys Supported:**
- Solo owner creates and manages jobs with parts-on-order status and customer SMS notification
- Authorized service center logs warranty claims and receives follow-up reminders
- Field technician uses parts lookup on mobile while on-site
- Shop dispatcher views filtered queue by status (blocked on parts vs. schedulable)

**Must-Have Capabilities:**
- Job tickets with appliance identity (model, serial, purchase date, history)
- "Waiting for Part" job status with distributor, part number, order date, ETA fields
- ETA overdue flag on parts-blocked jobs
- Dispatcher queue view filterable by job status
- Automatic customer SMS on status transition from "Waiting for Part" to active
- Customizable SMS message template per shop
- OEM warranty claim section per job (fields: OEM brand, claim number, submission date, expected reimbursement, status, follow-up date, notes)
- In-app follow-up reminder notification (warranty claims)
- Warranty claim summary view (all open claims, sortable by status and follow-up date)
- Parts lookup embedded web view (model number → RepairClinic/PartSelect)
- One-tap copy of part number from web view to job ticket
- Flat-rate invoicing (labor + parts line items, parts markup, PDF, payment status)
- Multi-tech access (owner + unlimited techs, role-based permissions)
- Customer CSV import
- Mobile-first PWA with offline status update queue
- Twilio SMS integration with delivery confirmation in job timeline
- 14-day free trial, Stripe billing, LTD code redemption

### Post-MVP Features

**Phase 2 (Months 4–12):**
- Calendar/scheduling view with rescheduling trigger on part arrival
- QuickBooks Online sync (invoice export)
- Email follow-up for warranty claims (in addition to in-app notification)
- Parts inventory tracking (stock-on-hand for common parts)
- OEM warranty claim submission helpers (step-by-step guides per OEM)
- Parts affiliate integration (RepairClinic, PartSelect referral tracking)
- Technician mobile app (native wrapper if PWA limitations encountered)
- Review generation prompts after job completion

**Phase 3 (Year 2):**
- OEM warranty auto-submission integrations (Samsung, LG, Whirlpool)
- Parts ordering API with wholesale pricing leverage
- Technician performance reporting
- Predictive parts stocking recommendations
- Canada/UK market expansion

### Risk Mitigation Strategy

**Technical Risks:**
- *Embedded web view blocked by RepairClinic/PartSelect*: Fallback is device browser with model number pre-filled in URL. Implement and test web view first; have fallback ready at launch.
- *Offline sync conflicts*: Keep offline scope narrow at MVP — only job status updates and basic job data cache. Full offline editing is Phase 2.
- *SMS delivery in rural areas*: Twilio toll-free numbers have higher deliverability than local numbers for new senders. Start with toll-free; add local number registration in Phase 2.

**Market Risks:**
- *AppSumo LTD buyers don't convert to power users*: Set expectations in listing (LTD is for real shops, not deal collectors). Use onboarding survey to identify authorized service centers and solo operators — highest-value cohorts.
- *Community channels produce slow growth*: Target a single community (Facebook "Appliance Repair Business Owners" group) before diversifying. One authentic post from a power user is worth 10 paid ads in this segment.

**Resource Risks:**
- *Build takes longer than 12 weeks*: Ship a functional but narrower MVP — job tickets + parts status + SMS only. Add warranty claims in Week 2 post-launch based on beta feedback. The parts-blocked workflow is the strongest hook; it can stand alone.

---

## Functional Requirements

### Job Management

- FR1: Owner can create a new job ticket with customer name, contact, appliance type, model number, serial number, purchase date, and problem description
- FR2: Technician can view all jobs assigned to them, including appliance details and full repair history for the appliance
- FR3: Owner or technician can update job status to any defined status: Scheduled, In Progress, Waiting for Part, Part Arrived, Completed, Cancelled
- FR4: Owner or dispatcher can view all jobs in the shop, filterable by status (with "Waiting for Part" and "Part Arrived" as distinct filter options)
- FR5: System flags any job in "Waiting for Part" status where the ETA date has passed without a status change
- FR6: Owner can add internal notes to any job; technician can add field notes from mobile
- FR7: Owner can view complete audit trail of status changes and notes for any job
- FR8: System automatically archives completed and cancelled jobs while keeping them searchable

### Parts Workflow

- FR9: Owner or technician can set a job to "Waiting for Part" status by entering distributor name, part number, order date, and ETA (all required fields at status change)
- FR10: Owner or technician can add optional fields to a "Waiting for Part" job: tracking number, notes
- FR11: System automatically sends a customer SMS notification when job status changes from "Waiting for Part" (or "Part Arrived") to any schedulable status
- FR12: Owner can configure the SMS message template used for part-arrival notifications, with placeholders for shop name
- FR13: System logs SMS delivery status (sent, delivered, failed) in the job timeline
- FR14: Owner or technician can search for parts by typing a model number into the job ticket and launching an embedded parts search (RepairClinic/PartSelect) pre-filled with that model number
- FR15: Technician can copy a part number from the parts search result back into the job ticket's part number field with a single tap

### Appliance & Customer History

- FR16: System maintains a per-appliance record linked to customer, containing model number, serial number, purchase date, and full repair history across all jobs
- FR17: When creating a new job for an existing customer and appliance, the system displays the complete repair history for that appliance before the job is saved
- FR18: Owner or technician can view all appliances on record for a customer, with summary of last service date and job count
- FR19: Owner can import customer records from a CSV file with field mapping for name, email, phone, and address
- FR20: Owner can search customers by name, phone number, or email address

### OEM Warranty Claims

- FR21: Owner can add a warranty claim section to any job ticket, recording: OEM brand, claim number, submission date, expected reimbursement amount, claim status, follow-up reminder date, and notes
- FR22: System sends an in-app notification to the owner when a warranty claim's follow-up reminder date is reached or passed without the claim being marked as paid
- FR23: Owner can update warranty claim status at any time (submitted / pending / paid / disputed / withdrawn) and log the reimbursement received date when closing a claim
- FR24: Owner can view a warranty claim summary across all jobs, sorted by status and follow-up date, showing overdue claims first
- FR25: Owner can filter the warranty claim summary by OEM brand, claim status, or date range

### Invoicing & Payments

- FR26: Owner can create an invoice from any job ticket, with labor line items (description, hours, rate) and parts line items (description, cost, markup percentage, retail price)
- FR27: System calculates retail price for parts based on wholesale cost and shop's configured default markup percentage
- FR28: Owner can configure a default parts markup percentage per shop, with per-invoice override
- FR29: Owner can generate and download a PDF version of any invoice
- FR30: Owner can mark an invoice as paid, unpaid, or partially paid, with optional payment date
- FR31: Owner can view a list of all invoices with balance status (paid, unpaid, overdue)

### User & Shop Management

- FR32: Owner can create technician accounts, assign them a name and email, and grant mobile access to assigned jobs
- FR33: Technician can log in on a mobile device and access only jobs assigned to them, plus customer appliance history (read-only)
- FR34: Owner can configure shop name, phone number, address, and SMS sender name
- FR35: Owner can configure the Twilio SMS number or use a provisioned default number
- FR36: Owner can view and manage current plan, billing history, and cancel or upgrade subscription
- FR37: Owner can redeem a Lifetime Deal code to activate a lifetime plan at signup

### Mobile & Offline

- FR38: Technician can perform all field-critical actions (view job, update status, add parts details, search parts, add notes) from an iOS or Android mobile browser without installing a native app
- FR39: System queues job status updates made while offline and syncs them when connectivity is restored, with a visible sync indicator
- FR40: System caches the technician's assigned job list and job details locally so they are viewable without connectivity (read-only cache)

---

## Non-Functional Requirements

### Performance

- Job list (up to 500 active jobs) loads and renders within 2 seconds on a 4G mobile connection
- Parts search (embedded web view launch with model number pre-filled) completes the URL navigation within 1 second of button tap
- Invoice PDF generation completes within 5 seconds for invoices with up to 20 line items
- Status updates sync from offline queue within 10 seconds of connectivity restoration
- Job status change (including SMS trigger) completes within 3 seconds from button tap to confirmation

### Security

- All data transmitted over HTTPS/TLS 1.2+; no unencrypted endpoints
- Customer PII (name, phone, email, address) encrypted at rest in the database
- Authentication via JWT with 24-hour expiration; refresh token rotation
- Technician accounts can only access their own assigned jobs — enforced server-side via shop_id + assigned_tech_id scoping; frontend restrictions are not the security boundary
- SMS numbers are masked in non-owner views to prevent data scraping
- Stripe handles all payment card data; no PCI scope for the application itself
- Password requirements: minimum 10 characters; bcrypt hashing
- TCPA compliance: all customer SMS include "Reply STOP to opt out"; unsubscribe handling via Twilio webhook updates customer record to suppress future SMS

### Reliability

- ≥99.5% monthly uptime for all authenticated API endpoints (excluding planned maintenance windows)
- SMS delivery failures are logged, surfaced to shop owner in job timeline, and do not cause job status update failures — status updates and SMS sends are decoupled
- Offline sync conflicts resolved as last-write-wins for job status fields; timeline events are append-only (no data loss on conflict)
- Database backups: daily full backup, 30-day retention

### Scalability

- Data model and API designed to support 5,000 active shops without schema changes
- Per-shop query isolation (shop_id index on all user-facing tables) ensures one shop's query load does not degrade another's response time
- SMS volume: Twilio rate limits accommodate up to 100 concurrent shops sending SMS simultaneously at peak (part arrival batches); no architectural changes needed until 2,000+ active shops

### Accessibility

- Mobile UI meets WCAG 2.1 AA for color contrast and tap target size (minimum 44×44px)
- All core actions (create job, update status, view queue) accessible via keyboard navigation on desktop
- Form fields have visible labels (not placeholder-only labels)
- Status change confirmations use both color and text (not color alone) to indicate success/error

### Integration

- Twilio SMS: delivery status webhooks must be processed within 60 seconds of delivery event; webhook endpoint must return 2xx within 5 seconds or Twilio will retry
- Stripe: webhook signature verification required on all Stripe events (subscription created, payment succeeded, payment failed)
- PDF generation: server-side, no third-party document services required; generated PDFs must render correctly in iOS Safari, Android Chrome, and desktop browsers without plugins

---

## Appendix: Competitive Positioning

```
                    APPLIANCE-SPECIFIC
                           |
           Rossware ($150) |
                           |
EXPENSIVE ─────────────────┼───────────────── AFFORDABLE
    Workiz ($187+)         |  ★ THIS PRODUCT ★
    HCP ($79–$329)         |   $49/mo flat-rate
    ServiceTitan ($250+)   |   Parts + Warranty
                           |
                       GENERIC
```

**The gap**: No product under $100/month is purpose-built for appliance repair AND handles parts-blocked job status + OEM warranty claim tracking + per-appliance history.

## Appendix: Go-to-Market Summary

| Phase | Timeline | Action |
|-------|---------|--------|
| Beta | Month 1–2 | 20–50 shops from Facebook group + Reddit; validate core workflow |
| AppSumo Launch | Month 3–4 | $79 LTD; target community for reviews and Q&A |
| MRR Growth | Month 4–12 | Community flywheel + content SEO |
| Parts Partnerships | Month 6+ | Negotiate affiliate agreements with RepairClinic, PartSelect, Parts Town |

**Primary acquisition channels**: r/appliancerepair, "Appliance Repair Business Owners" Facebook group, ApplianceRepairBusiness.com forum, ASTI network, AppSumo

**Pricing summary**:

| Plan | Price | Notes |
|------|-------|-------|
| Monthly (whole shop) | $49/month | Primary MRR |
| Annual (whole shop) | $470/year (~$39/month) | ~20% discount, reduces churn |
| LTD — AppSumo | $79 one-time | Acquisition + validation launch |
| LTD Tier 2 — authorized service centers | $149 one-time | OEM warranty power users |
