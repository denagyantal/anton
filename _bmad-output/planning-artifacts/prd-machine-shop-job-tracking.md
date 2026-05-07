---
stepsCompleted: [step-01-init, step-02-discovery, step-02b-vision, step-02c-executive-summary, step-03-success, step-04-journeys, step-05-domain, step-06-innovation, step-07-project-type, step-08-scoping, step-09-functional, step-10-nonfunctional, step-11-polish, step-12-complete]
inputDocuments:
  - ideas/shortlisted/machine-shop-job-tracking.md
  - _bmad-output/planning-artifacts/research/market-research-machine-shop-job-tracking.md
  - _bmad-output/planning-artifacts/product-brief-machine-shop-job-tracking.md
workflowType: 'prd'
classification:
  projectType: saas_web_app
  domain: vertical_software_manufacturing
  complexity: medium
  projectContext: greenfield
date: '2026-05-07'
author: Root
project_name: 'ShopFlow — Machine Shop Job Tracking & AI Quoting'
---

# Product Requirements Document - ShopFlow: Machine Shop Job Tracking & AI Quoting

**Author:** Root
**Date:** 2026-05-07

## Executive Summary

50,000–100,000 small CNC machining and fabrication shops in the US operate in a software dead zone. Enterprise ERPs (ProShop, JobBOSS²) start at $200–500+/user/month with 6-month implementation requirements and IT staff dependencies. Free alternatives (Google Sheets, Trello) collapse under multi-user load. The $149–299/month cloud-native tier — purpose-built for 5–20 person make-to-order job shops, self-serve to deploy in a day, AI-powered for quoting — is genuinely unoccupied by any credible competitor.

**ShopFlow** is the cloud-native job shop management platform built specifically for 5–20 person CNC machining, metal fabrication, and custom manufacturing shops. The product leads with a single breakthrough capability: **AI-powered instant quoting from CAD files**. A shop owner uploads a DXF, STEP, or DWG file and receives a professional material + machine time estimate and a branded PDF quote in under 60 seconds — cutting turnaround from 2–24 hours to under a minute. Job tracking, work orders, invoicing, and QuickBooks sync build out the complete operations platform.

**Go-to-market:** Community-first launch in PracticalMachinist.com and r/MachineShop (confirmed active audiences searching for exactly this product), followed by an AppSumo LTD campaign at Month 4–5 targeting 300–500 LTD buyers and 50+ Capterra/G2 reviews. YC Spring 2026 explicitly listed "Modernizing American Metal Mills / AI quoting for small shops" as a request for startups — validating both the problem and the timing.

**Target users:** Shop owners and estimators at 5–20 person make-to-order CNC and fabrication shops earning $500K–$5M/year who are losing bids to slow quoting, running their operations on whiteboards and disconnected spreadsheets, and are priced out of enterprise ERPs.

**Pricing:** $149/month (5 users), $249/month (15 users), $299/month (unlimited). LTD: $199 (5-user), $349 (15-user). **12-month ARR target: $1.2M** (500 shops × $199/month average).

### What Makes This Special

**AI quoting from CAD files at this price point.** Paperless Parts offers AI quoting but costs $500–1,000+/month and targets enterprise shops. No tool at $149–299/month accepts DXF/STEP/DWG files and produces a professional quote PDF in under 60 seconds. This is the product's "wow moment" — experienced in the first 10 minutes of trial.

**Flat-rate pricing with unlimited users.** Enterprise ERPs charge per user, making shops hesitate to give floor operators logins. ShopFlow's flat rate means every machinist gets access without penalty, which is what drives floor adoption and data quality.

**Same-day self-serve deployment.** No consultant, no 6-month implementation, no IT department. The shop owner configures material rates, machine hourly rates, and markup in 20 minutes. Their first AI quote is generated that day.

**Make-to-order workflow specificity.** Unlike generic project management tools (Trello, Smartsheet) or repeat-production ERPs (MRPeasy), ShopFlow is built for custom job shop workflows: quote → job → work order → operation routing → machine assignment → material BOM → invoicing, reflecting how job shops actually operate.

**QuickBooks integration, not replacement.** Small shops already use QuickBooks for accounting. ShopFlow handles operations and syncs invoices — it doesn't try to be a second accounting system, eliminating the dual-entry pain that plagues AllOrders and similar hybrid tools.

## Project Classification

- **Project Type:** SaaS Web App (browser-first, responsive for tablet use on the shop floor)
- **Domain:** Vertical software — custom job shop / make-to-order manufacturing management
- **Complexity:** Medium — standard CRUD for jobs/work orders/invoicing, CAD file parsing (DXF/STEP/DWG geometry classification), QuickBooks OAuth sync, real-time multi-user job board, mobile-optimized tablet UI. No regulated data, but customer PII and financial records require standard security practices.
- **Project Context:** Greenfield — new product built from scratch targeting a confirmed unserved market segment

## Success Criteria

### User Success

- **Time to First AI Quote:** 80%+ of new users generate their first AI quote within 2 hours of signup
- **AI Quoting Accuracy:** < 30% of AI-generated quotes require material override adjustments > 25% of the estimate (indicates geometry parsing is within acceptable working range)
- **Quote Turnaround Reduction:** Users self-report average quote creation time < 15 minutes (vs. 2–24 hour baseline) within 30 days of onboarding
- **Floor Operator Adoption:** In shops with ≥ 3 invited users, ≥ 2 are active weekly within 14 days of joining
- **Job Status Currency:** < 5% of jobs have status discrepancies between ShopFlow and shop reality at any given time (measured via onboarding review self-report)
- **Time to Invoice:** Generating an invoice from a completed job takes < 5 minutes (vs. 30+ minutes baseline from manual job cost reconciliation)
- **Full-Flow Activation:** Shops reach "full flow" (AI quoting + job tracking + invoicing) within 14 days of signup
- **Weekly Engagement:** ≥ 15 active sessions per shop per week by Week 4 (indicates multi-user adoption beyond owner)

### Business Success

| Milestone | Target | Timing |
|---|---|---|
| Waitlist signups | 200 | Month 1 |
| Beta customers (active) | 15 | Month 1 |
| Paying customers | 50 | Month 3 |
| Paying customers | 200 | Month 6 |
| Paying customers | 500 | Month 12 |
| MRR | $7,500 | Month 3 |
| MRR | $35,000 | Month 6 |
| MRR | $100,000 | Month 12 |
| LTD campaign revenue | $60,000–$175,000 | Month 4–5 |
| Monthly churn | < 5% | Month 3 |
| Monthly churn | < 3% | Month 6 |
| Monthly churn | < 2% | Month 12 |
| G2/Capterra reviews | 10 | Month 3 |
| G2/Capterra reviews | 30 | Month 6 |
| G2/Capterra reviews | 75 | Month 12 |
| NPS | > 40 | Month 3 |
| NPS | > 50 | Month 6 |
| NPS | > 60 | Month 12 |

**Strategic objectives:**
- Become the #1 recommended software in PracticalMachinist forum software recommendation threads within 12 months
- Achieve Capterra "Job Shop Software" category top rating (≥ 4.5 stars, 50+ reviews) by Month 12
- Establish Net Revenue Retention > 105% by Month 12 through tier upgrades (5-user → 15-user → unlimited)
- Own "machine shop quoting software" and "job shop ERP" Google search intent before any VC-backed entrant captures the category

### Technical Success

- **AI quote generation latency:** DXF/STEP/DWG upload to PDF quote delivered in < 60 seconds on files up to 50MB
- **Job board real-time updates:** Status changes visible to all users within 2 seconds of update (no manual refresh)
- **Page load performance:** Core app screens (job board, quote list, work order) load in < 2 seconds on standard broadband
- **Mobile performance:** Job status tap-to-update completes in < 1 second on 4G on Android tablet
- **QuickBooks sync latency:** Invoices appear in QuickBooks within 5 minutes of completion
- **Uptime:** 99.9% availability for all core services
- **File parsing reliability:** ≥ 95% of valid DXF/STEP/DWG files successfully parsed without manual fallback
- **Data integrity:** Zero data loss on any user-facing operation; all job records persistent

### Measurable Outcomes

| Metric | Month 3 | Month 6 | Month 12 |
|---|---|---|---|
| Paying shops | 50 | 200 | 500 |
| AI quotes generated total | 500 | 5,000 | 25,000 |
| Active daily floor operators per shop | 1.5 avg | 2.5 avg | 3.5 avg |
| MRR | $7,500 | $35,000 | $100,000 |
| Monthly churn | < 5% | < 3% | < 2% |
| NPS | > 40 | > 50 | > 60 |
| Trial → paid conversion | > 20% | > 25% | > 30% |
| QuickBooks-connected shops syncing cleanly | 85% | 95% | 99% |

## Product Scope

### MVP — Minimum Viable Product (Weeks 1–12)

The MVP delivers the complete job shop revenue cycle: **Upload CAD → AI Quote → Accept → Job Created → Work Orders → Invoice → QuickBooks Sync**. Every feature must serve at least one step of this cycle or directly enable multi-user floor adoption. Nothing is included that doesn't map to a confirmed pain point from validated community research.

**Core capabilities:**

1. **AI Quoting Engine** — Accept DXF, STEP, and DWG file uploads (PDF with manual measurement entry as fallback). Parse geometry to classify operations (turning, milling, drilling, sheet metal bends, weld joints). Apply shop-configured material rates, machine hourly rates, setup times, and markup percentages to produce cost estimate. Generate branded PDF quote with line-item breakdown, company logo, payment terms, and expiry date. One-click conversion of accepted quotes to jobs.

2. **Multi-User Job Tracking Board** — Kanban-style board with configurable status columns: New → Quoting → Approved → In Progress → QC → Shipping → Invoiced. Job cards display customer name, job number, due date, assigned operator, and current machine. Real-time status updates visible to all users without page refresh. Mobile-optimized touch interface for floor workers on tablets and phones.

3. **Work Orders** — Step-by-step operation sequences per job (e.g., Setup → Rough Mill → Finish Mill → Drill → Deburr → QC → Ship). Machine and operator assignment per step. Estimated vs. actual time tracking per step. Material consumption recording per step (actual material used vs. quoted). One-tap completion sign-off per step from mobile.

4. **Job Comments & Operator Notes** — Free-text notes attached to jobs and individual work order steps. Photo attachment to job records (material substitutions, quality issues, shipping documentation). Comment thread visible to all users on the job card.

5. **Basic Invoicing** — Auto-generate invoice from completed job using actual recorded labor and material costs. Actual vs. estimated cost comparison on invoice (internal view — reveals margin). Invoice PDF output with line items, totals, and payment terms. Invoice status tracking: draft, sent, paid, overdue. Manual payment recording.

6. **QuickBooks Online Sync** — OAuth connection to QuickBooks Online. One-way sync: completed invoices from ShopFlow to QBO. Customer sync from QBO to ShopFlow contact list. Configurable chart of accounts mapping. Sync status dashboard with error log.

7. **User Management & Roles** — Email-based user invitations. Role-based access: Owner (full access), Manager (full except billing), Estimator (quotes + jobs, no billing), Operator (job status updates and work order completion only). Unlimited users on all plans.

8. **Shop Configuration** — Material type library with cost-per-unit and machine assignments. Machine library with hourly rate, setup time defaults, and capacity. Labor markup percentage. Company branding (logo, address, payment terms) for PDF outputs. Quote expiry default.

9. **Quote Management** — Searchable quote archive with status tracking (draft, sent, accepted, declined). Quote revision history. Customer contact records linked to quotes and jobs.

### Growth Features (Phase 2, Months 3–8)

- Raw material inventory tracking (stock levels, reorder alerts, material reservations per job)
- Supplier management and basic purchase orders for raw material restocking
- Machine utilization Gantt chart (schedule view by machine and operator across active jobs)
- Customer portal: customer-facing job status view and invoice download without ShopFlow login
- Xero integration (alternative to QuickBooks for international shops)
- iOS/Android native mobile app (beyond responsive web for improved shop floor UX)
- Bulk job import from CSV (for shops transitioning from spreadsheets with historical jobs)

### Future Vision (Phase 3, Months 9–20+)

- Shop-specific AI model fine-tuning: after 10,000+ quotes, the AI learns each shop's pricing patterns and improves accuracy over time
- Benchmark pricing (anonymized): compare a quote against similar jobs across the ShopFlow shop network
- Predictive scheduling: "Machine 2 is overloaded; recommend rescheduling Job #447 to Wednesday"
- Live material price feeds: aluminum, steel, stainless steel spot prices integrated into quoting rates
- AS9100 / ISO 9001 documentation module: inspection records, material certifications, NCRs — dramatically increases stickiness for aerospace/defense shops
- CAM integration API (Fusion 360, Mastercam): pass geometry directly from CAM to ShopFlow, eliminating file upload step
- ITAR compliance features: controlled data handling and access logging for defense contractors
- Capacity marketplace: post available machine time; customers find and book capacity (Xometry/Fictiv model for small shops)

### Explicitly Out of Scope (by design)

- Full accounting / bookkeeping — ShopFlow integrates with QuickBooks, not competes with it
- Payroll — refer to QuickBooks Payroll or Gusto
- HR / employee management — dedicated HR tools handle this
- G-code generation / CAM — different software category entirely
- Repeat production / MRP planning — ShopFlow is for make-to-order job shops, not production runs

## User Journeys

### Journey 1: Mike — The Shop Owner, Lost a $25K Bid, Finds ShopFlow

**Opening Scene:** Mike is 38, owns a CNC machining shop with 8 employees. The shop does custom aerospace brackets, medical device housings, and automotive components. Last Tuesday, he lost a $25,000 aerospace bracket job to a competitor. He quoted in 3 days; the competitor quoted in hours. A machinist friend tells him the competitor uses AI quoting software. Mike Googles "machine shop quoting software" at 10 PM, finds ShopFlow, watches a 90-second demo video showing a DXF file becoming a professional PDF quote in 47 seconds.

**Rising Action:** Mike signs up for the free trial. He's immediately prompted to configure his shop: material rates (6061 aluminum: $4.20/lb; 304 stainless: $3.80/lb), machine hourly rates (Mill 1: $95/hr, Lathe 1: $85/hr), standard markup (35%), and labor overhead (20%). He uploads his company logo. This takes 18 minutes. Then he opens a DXF file from his last quoted job — the $25K aerospace bracket — drops it into ShopFlow's upload zone. In 51 seconds, a quote PDF is on his screen: material cost, machine time, setup time, margin, total. He compares it to his manual quote from 3 days ago. The numbers are within 8%. The AI found the same operations he found manually — in 51 seconds instead of 3 hours.

**Climax:** Next morning, a customer calls with a rush quote request. Mike says "I'll have it to you in 10 minutes." He uploads the DXF while the customer is still on the phone. In 55 seconds, a branded PDF quote is in the customer's inbox. The customer calls back: "Got it. Can you start Monday?" Mike converts the quote to a job with one click. The job appears on the tracking board. He assigns it to Dave (foreman) and sets a due date.

**Resolution:** Month 2. Mike hasn't opened Excel for quoting in 6 weeks. He's submitted 3 bids this month that he would have missed before due to quoting backlog. He wins one ($18,000 hydraulic manifold job). Net of the $249 ShopFlow bill, his first month return on software spend is 7,200%. He posts in the PracticalMachinist forum when someone asks about quoting tools: "ShopFlow. I quoted a job while the customer was on the phone. Nothing else even close at this price."

**Capabilities revealed:** Shop configuration wizard (materials, machines, markup), DXF/STEP/DWG file upload, AI geometry parsing and classification, cost estimate with material + machine time + markup, PDF quote generation, quote archive, quote-to-job conversion, job assignment and due date, real-time job board

---

### Journey 2: Dave — The Foreman, Owns the Shop Floor, Skeptical of Software

**Opening Scene:** Dave is 45, been a machinist for 20 years, now foreman at a 15-person fabrication shop. He manages job assignments and escalations. He communicates via whiteboard and text. The last time the shop tried new software, it required a half-day training and was abandoned in 3 weeks. When Mike tells Dave they're switching to ShopFlow, Dave's reaction: "How many clicks to update a job status?"

**Rising Action:** Mike sets Dave up as a Manager on ShopFlow. Dave opens the job board on the shop's floor tablet — an Android tablet mounted at the foreman's station. The board shows all 12 active jobs, their status, and their assigned operators. Dave taps Job #2847 (the hydraulic manifold). He taps "In Progress." One tap, done. He adds a note: "Ran 316L stainless instead of 304 — same price, customer approved by phone." He attaches a photo of the material cert.

**Climax:** Week 3. A floor operator radios Dave: "That bracket job — the customer changed the tolerance spec. We need to redo Op 3." Dave finds the job on the board, taps the Op 3 work order step, changes status to "Needs Rework," adds a note: "Tolerance spec changed by customer — approved verbally. Rerunning Op 3." He does this in 45 seconds from a tablet while standing at the mill. Mike sees the update from his phone on the other side of the shop. No interruption. No text exchange. No whiteboard erasure.

**Resolution:** Month 2. Dave has updated job status an average of 14 times per day. The shop whiteboard is now only used for weekly machine scheduling. Dave's summary to Mike: "It doesn't slow me down. That's the only thing I cared about." He shows the new apprentice how to update job status. Training time: 4 minutes.

**Capabilities revealed:** Mobile-optimized job board, one-tap job status updates, operator notes on jobs, photo attachment to job records, work order step status updates, real-time updates visible to all users without refresh, Operator role with scoped access

---

### Journey 3: Karen — The Estimator/Office Manager, Ending Dual Data Entry

**Opening Scene:** Karen is 42, handles quoting, invoicing, customer communication, and scheduling at a 10-person sheet metal shop. She's been using AllOrders for 3 years at $1,800+/year. She still exports invoices from AllOrders to Excel, reformats them, and manually enters totals into QuickBooks. Every month, she spends 2–3 hours reconciling because the sync isn't reliable. She found out about ShopFlow from a LinkedIn post about AI quoting.

**Rising Action:** Karen's trial begins. She imports her QuickBooks customer list via OAuth — 287 customers synced in 3 minutes. She configures her sheet metal material rates and press brake hourly cost. She uploads a DXF for a recent laser-cut enclosure job. The AI quote comes back with material cost, laser time, and bend operations estimated. She adjusts the bend count (the AI got 6 bends; the actual part has 8). She fixes the count. The quote recalculates instantly. She sends the PDF to the customer from within ShopFlow. It looks more professional than anything AllOrders ever produced.

**Climax:** Month 1, end of month. Karen marks 23 jobs as invoiced. She clicks "Sync to QuickBooks." 23 invoices appear in QuickBooks in 4 minutes. Zero duplicates. Zero errors. She cross-references 5 invoices — perfect match. Month-end close takes 35 minutes. She calls her accountant: "I think I'm done with AllOrders."

**Resolution:** Karen cancels AllOrders. She saves $1,800/year in software and roughly 6 hours/month in manual reconciliation. She sends her accountant a read-only link to ShopFlow's sync status dashboard. The accountant replies: "This is the cleanest data I've seen from a fabrication shop. Tell me the name so I can recommend it to my other shop clients."

**Capabilities revealed:** QuickBooks customer import via OAuth, AI quoting with manual override on operation count, branded quote PDF, QuickBooks invoice sync (one-way, reliable, with error log), sync status dashboard, invoice generation from completed jobs

---

### Journey 4: Tyler — The New Operator, Status Updates Without Training

**Opening Scene:** Tyler is 24, a CNC operator at the machining shop. He's been there 8 months. He uses his phone constantly but has never used any shop management software. When Mike says "we're using ShopFlow now, you'll update job status from the floor tablet," Tyler's only concern is whether it works on Android and whether it's slower than texting Dave.

**Rising Action:** Mike creates Tyler an Operator account. Tyler's login on the tablet shows only the active jobs currently assigned to his machine (Mill 2). There are 3 jobs. He taps the first one. He sees the work order operations listed: Setup, Rough Mill, Finish Mill, Drill, Deburr, QC. The current step is "Rough Mill." He taps it. He taps "Mark Complete." The status changes. A notification pops on Dave's screen across the shop. Tyler moves to Finish Mill.

**Climax:** Day 5. Tyler is mid-job when he notices a problem: the raw stock is undersized by 0.015". He can't fix it. He opens the job in ShopFlow, adds a note: "Stock undersized — 0.015" short on Z-axis. Waiting for direction." He taps Dave's name from the job record and a notification goes to Dave. Dave walks over in 3 minutes with a decision. The whole communication loop took 4 minutes instead of the usual 15-minute search for Dave across a 12,000 sq ft facility.

**Resolution:** Month 1. Tyler has updated job status 240 times without a single training session after the first 4-minute walkthrough Mike gave him. Errors in job status on the board: near zero. Dave reports that floor-to-manager communication interruptions have dropped by roughly 60% — operators notify via ShopFlow instead of shouting across the floor.

**Capabilities revealed:** Operator role with machine-scoped job view, work order step completion with one tap, operator notes with notification trigger, mobile-optimized status UI operable on standard Android tablet, user-to-user notification on critical job events

---

### Journey 5: Patricia — The Accountant, Third-Party Validation

**Opening Scene:** Patricia is a bookkeeper managing 6 small manufacturing clients. Two of them are on ShopFlow. Before ShopFlow, she spent 2–3 hours per shop per month reconciling because QuickBooks entries from manual CSV import didn't match invoice totals, or payments were double-entered. One client still emails her PDF invoices for manual entry every Friday.

**Rising Action:** After her two ShopFlow clients go live, February rolls around. No reconciliation calls. She checks the QBO data — customers map correctly, invoices are clean, payments match. She opens the ShopFlow sync status dashboard (via read-only link the shop owner shared) and sees: 312 syncs in the last 30 days, 0 errors.

**Climax:** Month-end close for Mike's shop. Patricia opens QuickBooks: all 89 repair job invoices are present, correctly categorized. She cross-references 5 random invoices to ShopFlow — exact match on line items, tax, and total. Month-end close takes 25 minutes instead of 2.5 hours. She notes something else: the actual vs. estimated cost comparison on each ShopFlow invoice shows Mike consistently coming in 4% over on material. She emails Mike with the observation; he adjusts his material markup by 2% in ShopFlow configuration. This is a business intelligence insight no other tool at this price point surfaces.

**Resolution:** Patricia recommends ShopFlow to two other shop clients. She becomes a recurring referral source — an accountant who actively sends new shops to ShopFlow because it makes her job easier. She's not a buyer and she's not on any affiliate program; she refers because the sync quality is genuinely differentiated.

**Capabilities revealed:** QuickBooks sync reliability (zero duplicates, correct categorization), read-only accountant access via sync status dashboard, actual vs. estimated cost comparison per invoice, invoice cross-reference visibility, configuration of markup rates

### Journey Requirements Summary

| Journey | User Type | Capabilities Revealed |
|---|---|---|
| Mike (shop owner) | Primary decision maker | Shop config wizard, DXF/STEP upload, AI quote, PDF generation, quote archive, job board, job assignment |
| Dave (foreman) | Power user / floor lead | Mobile job board, one-tap status update, operator notes, photo attachment, work order step completion |
| Karen (estimator) | Office manager / secondary buyer | QB customer import, AI quote with manual override, branded PDF, QB sync, invoice generation |
| Tyler (operator) | Floor adoption key | Operator role with machine-scoped view, step completion, note + notification, Android tablet UI |
| Patricia (accountant) | Third-party influencer | Sync reliability dashboard, actual vs. estimate comparison, referral behavior from data quality |

## Domain-Specific Requirements

### Manufacturing Job Shop Context

Custom job shop management sits at the intersection of custom manufacturing workflows (make-to-order, not repeat production), CAD geometry, manufacturing cost estimating, shop floor operations, and financial accounting. Several domain-specific requirements shape the product that general SaaS tools and even generic manufacturing ERPs don't address.

### Job and Work Order Structure

- Jobs must be linked to a single customer and quote (or created manually if quote was external)
- Each job must carry: job number (auto-generated, configurable format), customer name, part name/description, quantity, material spec, due date, priority, assigned operator(s), and current status
- Work orders are operation sequences attached to a job — each step has: operation name, machine assignment, operator assignment, estimated time, actual time, material consumed, and completion status
- Work order steps must support partial completion (e.g., 3 of 10 parts through Operation 2) for batch jobs
- Jobs must support revision tracking: if a customer changes specs mid-job, the revision is logged with timestamp and attributed to user

### CAD File and Quoting Requirements

- Accepted file formats: DXF (2D), STEP (3D), DWG (AutoCAD 2D). PDF upload accepted as fallback with manual measurement entry.
- Geometry parsing must identify: turning operations (cylindrical features), milling operations (flat surfaces, pockets, contours), drilling operations (hole count, diameter, depth), sheet metal bends (bend count, bend radius, material thickness), weld joints (linear length by joint type)
- Parsed features map to shop's configured machine types and rates — the mapping is configurable per shop (some shops have only mills; others have mills + lathes + press brakes)
- All AI-generated estimates must be fully editable before quote is sent: shop owner can adjust quantities, times, material costs, and markup on any line item
- Quote PDF must display: company branding (logo, name, address, phone), quote number, quote date, expiry date, line-item breakdown (material, operations, setup, markup), total cost, and configurable payment terms
- Quote history must preserve the original file, the parsed geometry results, and all manual adjustments — for future reference and accuracy improvement

### Material and Machine Configuration

- Material library: each entry has type name (e.g., "6061 Aluminum"), cost per unit (lb, kg, or sheet), default density for weight estimation, and associated machining difficulty multiplier
- Machine library: each entry has machine name, type (mill, lathe, drill press, press brake, welding station, etc.), hourly rate, standard setup time (configurable default), and maximum workpiece dimensions
- Shops configure their own libraries — they are not shared or global
- Material and machine rates must be versionable: rate changes should not retroactively alter historical quotes or invoices

### Shop Floor Usability Constraints

- Floor tablets operate in high-noise, high-activity environments: UI must support large touch targets (minimum 48px), high contrast, and one-handed operation
- Floor operators must be able to complete a status update in ≤ 3 taps from the job board
- The application must function on Android tablets (Android 10+) running Chrome, as these are the dominant shop floor device
- No proprietary hardware dependency — ShopFlow must work on any Android or iOS tablet, not require a dedicated device

### Financial and Integration Requirements

- Invoices must display both the quoted cost and the actual recorded cost per job — this is the core ROI metric for shop owners and must be prominently surfaced
- QuickBooks Online integration is via direct OAuth (no third-party connector) — sync must be reliable enough that a bookkeeper never needs to manually reconcile
- Tax handling: configurable per shop — some states tax manufacturing labor, some only tax parts; ShopFlow must support both configurations
- Shop owner's business name, address, and configurable tax ID must appear on all external PDFs (quotes and invoices)

## Innovation Discovery

### Confirmed Innovative Aspects

**1. AI Quoting from CAD Files at the $149–299/Month Price Point**

Paperless Parts ($500–1,000+/month) is the industry benchmark for AI quoting from DXF/STEP files, but it targets enterprise shops (50+ employees) and requires a sales conversation. No tool at $149–299/month accepts CAD files and produces a cost estimate in under 60 seconds. This is a genuine price-point gap — confirmed by YC Spring 2026 RFS explicitly calling out "AI quoting for small metal shops: upload customer spec files (DXF, DWG, PDF) → AI estimates material cost, machine time, labor → professional quote in minutes vs. hours of manual calculation" as an underserved problem.

The innovation is not in the AI quoting technology itself (Paperless Parts has proven it works), but in the **price-point and self-serve deployment model**: making this capability accessible to 5-person shops without a sales team, implementation consultant, or 6-month rollout. The validation approach: 15 beta shops each generate ≥ 3 AI quotes within 30 days. If ≥ 70% report the quote is within 25% of their manual estimate without major overrides, the core value proposition is proven.

**Fallback:** If geometry parsing fails on complex 3D STEP files, the system falls back to a measurement-entry form where the shop owner enters key dimensions manually and the AI estimates based on operation type selection. This preserves value even when automated parsing is imperfect.

**2. Flat-Rate Pricing as a Floor Adoption Mechanism**

Per-user pricing (the standard ERP model) creates a perverse incentive: shops hesitate to give floor operators access because every login adds cost. This directly undermines the data quality that makes job tracking valuable. ShopFlow's flat-rate model removes this friction entirely — the shop owner can invite all 15 machinists without any price impact. This is not a technology innovation but a **business model innovation** that unlocks a capability (real-time floor data) that per-user competitors systematically cannot match at comparable margins.

### Market Context

The reshoring wave is a structural tailwind. 244,000 manufacturing jobs were announced in 2024 (+53% YoY), driven by CHIPS Act, IRA, and defense spending. Each new manufacturing facility creates demand for shop management software. ShopFlow, with established community brand and Capterra/G2 reviews, is positioned to be the default recommendation for any new 5–20 person shop that Googles "machine shop software" during this expansion decade.

The YC-backed entrant risk is real but bounded: YC-funded startups in vertical SaaS typically take 18–24 months to reach meaningful market penetration. ShopFlow's 6-week quoting MVP target and community-first GTM creates an 18-month head start window if launched immediately.

## SaaS B2B Specific Requirements

### Multi-Tenancy and Data Isolation

- Each shop is a separate tenant with complete data isolation — no cross-tenant data visibility
- All shop data (jobs, quotes, customers, invoices, configurations) is scoped to the shop tenant
- User accounts are scoped to a single shop in MVP (multi-shop/franchise support is Phase 3)
- Shop subdomain or shop-specific URL for bookmark-friendly access

### Permission Matrix

| Capability | Owner | Manager | Estimator | Operator |
|---|---|---|---|---|
| Configure shop rates and machines | ✅ | ❌ | ❌ | ❌ |
| Invite and manage users | ✅ | ❌ | ❌ | ❌ |
| View billing and subscription | ✅ | ❌ | ❌ | ❌ |
| Create and send quotes | ✅ | ✅ | ✅ | ❌ |
| Create and edit jobs | ✅ | ✅ | ✅ | ❌ |
| Update job status and work order steps | ✅ | ✅ | ✅ | ✅ |
| Add notes and photos to jobs | ✅ | ✅ | ✅ | ✅ |
| Generate and send invoices | ✅ | ✅ | ❌ | ❌ |
| View QuickBooks sync status | ✅ | ✅ | ❌ | ❌ |
| View all jobs on the board | ✅ | ✅ | ✅ | Own machine only |
| Export data | ✅ | ❌ | ❌ | ❌ |

### Subscription and Billing

- Stripe-powered subscription billing: monthly and annual options
- Plan limits enforced at login: 5-user plan triggers upgrade prompt when 6th user is invited (not a hard block — upgrade flow presented)
- LTD (Lifetime Deal) accounts handled as a special plan type with permanent access at the purchased tier
- Free trial: 14 days, no credit card required, full feature access, up to 3 users

### Key Integrations (MVP)

- **QuickBooks Online** — OAuth 2.0, direct API sync (invoices out, customers in), configurable account mapping, sync status dashboard
- **File Handling** — DXF, STEP, DWG, PDF upload; parsed server-side; stored per quote record
- **Email** — Quote PDF and invoice PDF delivery via transactional email (SendGrid or equivalent)
- **PDF Generation** — Branded PDF rendering server-side (not client-side); consistent across browsers

## Project Scoping & Phased Development

### MVP Strategy & Philosophy

**MVP Approach:** Revenue MVP — prove willingness to pay for AI quoting specifically. The MVP is complete when 15 shops pay for AI quoting (even before full job tracking), and at least 10 report it has measurably reduced their quoting time.

The quoting engine is the lead feature and the wedge. Job tracking, work orders, and QuickBooks sync are the retention features. In the MVP, if forced to choose between a polished quoting experience and a polished job tracking experience, prioritize quoting — it's the "wow moment" that drives trial conversion and community word-of-mouth.

**Resource Requirements:** 1–2 full-stack developers with cloud infrastructure experience + 1 part-time UI/UX; ability to bring in a CAD parsing library (Open Cascade Technology for STEP, dxfgrabber/ezdxf for DXF) rather than building geometry parsing from scratch.

### MVP Feature Set (Phase 1) — Weeks 1–12

**Core User Journeys Supported:**
- Mike's journey: Quote in 60 seconds → convert to job → track on board → invoice → sync to QB
- Dave's journey: View job board → update status → add notes → complete work order steps
- Karen's journey: Generate quote with override → import QB customers → send invoice → verify sync

**Must-Have Capabilities (cannot launch without):**

1. DXF file upload and geometry feature classification
2. AI cost estimate from parsed geometry (material + machine time + setup + markup)
3. Manual estimate override on any line item
4. Branded PDF quote generation and email delivery
5. Quote archive with status (draft / sent / accepted / declined)
6. One-click quote-to-job conversion
7. Real-time multi-user Kanban job board with 7 status columns
8. Work order operation sequence per job
9. One-tap status update on mobile (Android tablet)
10. Operator role with machine-scoped job view
11. Invoice generation from completed job (actual vs. estimated cost comparison)
12. QuickBooks Online OAuth sync (invoices out, customers in)
13. Flat-rate user management (Owner, Manager, Estimator, Operator roles)
14. Shop configuration (materials, machines, markup, branding)

**Can defer to Phase 2 without blocking launch:**

- STEP and DWG file parsing (DXF only for MVP is viable — DXF is the most common format from 2D CAD)
- Raw material inventory tracking
- Gantt chart scheduling view
- Customer portal
- Native mobile apps (responsive web on tablet covers launch)

### Phase 2 (Post-MVP, Months 3–8)

- STEP and DWG file parsing added to quoting engine
- Raw material inventory with stock tracking and reorder alerts
- Supplier and purchase order management
- Machine utilization scheduling board (Gantt view)
- Customer portal for job status and invoice download
- Xero integration
- Improved mobile app (PWA with offline capability)
- Bulk job import from CSV

### Phase 3 (Expansion, Months 9–20+)

- AI model improvement loop using shop-specific historical quote accuracy data
- Benchmark pricing across the ShopFlow shop network (anonymized)
- Predictive scheduling recommendations
- AS9100 / ISO 9001 documentation module
- ITAR compliance features
- CAM software integration API

### Risk Mitigation Strategy

**Technical Risks:**
- *CAD geometry parsing accuracy is inadequate at launch* → Mitigation: Build manual override as a first-class feature (not an afterthought). The fallback manual estimation form preserves value even when AI parsing fails. Target 95% file parse success rate as a technical KPI.
- *Real-time job board WebSocket complexity* → Mitigation: Use proven real-time infrastructure (e.g., Supabase Realtime, Pusher, or Ably) rather than building custom WebSocket server.

**Market Risks:**
- *YC-backed entrant captures the category first* → Mitigation: Launch quoting MVP within 6 weeks. Community presence in PracticalMachinist and r/MachineShop before a well-funded competitor can establish authority.
- *AI quoting accuracy insufficient for shop trust* → Mitigation: Manual override on every line item. Position as "starting point, not final answer" in all marketing copy. Track accuracy improvement as shops provide feedback.

**Resource Risks:**
- *CAD parsing library licensing or complexity delays launch* → Mitigation: DXF-only launch is viable (DXF is the dominant format for 2D CNC part drawings). STEP adds 3D capability but is not required for Day 1 value.

## Functional Requirements

### Quoting

- FR1: Estimators can upload DXF files and receive a parsed operation classification and cost estimate within 60 seconds
- FR2: Estimators can upload STEP files and receive a 3D geometry operation classification and cost estimate
- FR3: Estimators can upload DWG files and receive a parsed operation classification and cost estimate
- FR4: Estimators can upload PDF files and enter measurements manually to generate a quote using the cost model
- FR5: Estimators can view the AI-parsed operation list and adjust any line item (quantity, time, material, rate) before finalizing a quote
- FR6: Estimators can generate a branded PDF quote with line-item breakdown, expiry date, and company branding
- FR7: Estimators can send a quote PDF to a customer via email from within ShopFlow
- FR8: Estimators can view all quotes in a searchable archive with status (draft, sent, accepted, declined)
- FR9: Estimators can convert an accepted quote to a job with one action, pre-populating job details from the quote
- FR10: Owners can configure the shop's material library (type, cost per unit, density)
- FR11: Owners can configure the shop's machine library (name, type, hourly rate, setup time defaults)
- FR12: Owners can configure the shop's default markup percentage and labor overhead rate

### Job Tracking

- FR13: All users can view all active jobs on a Kanban-style board with real-time status
- FR14: Managers and Estimators can create jobs manually without a quote (for walk-in or phone orders)
- FR15: Managers can assign jobs to operators and machines
- FR16: Operators can update job status with a single tap from a mobile device
- FR17: All users can view job history, notes, and photo attachments on any job record
- FR18: All users can add free-text notes to any job record
- FR19: All users can attach photos to job records (material certificates, quality issues, shipping documentation)
- FR20: Operators can filter the job board to show only jobs assigned to their machine
- FR21: Managers can set and update job due dates and priorities
- FR22: All users receive in-app notifications for job status changes they are associated with

### Work Orders

- FR23: Managers can create a work order operation sequence for any job (ordered list of operation steps)
- FR24: Managers can assign a machine and operator to each work order step
- FR25: Managers can set estimated time per work order step
- FR26: Operators can mark individual work order steps as complete from a mobile device
- FR27: Operators can record actual time spent and materials consumed per work order step
- FR28: Operators can record material substitutions on a work order step with a note
- FR29: All users can view the operation sequence and current completion status for any job

### Invoicing

- FR30: Managers can generate an invoice from a completed job, pre-populated with actual recorded labor and material costs
- FR31: Managers can view the estimated vs. actual cost comparison on any invoice before sending
- FR32: Managers can generate a branded PDF invoice and deliver it to the customer via email
- FR33: Managers can record invoice status changes (draft → sent → paid → overdue)
- FR34: Managers can record a manual payment against an invoice
- FR35: Owners can view all invoices in a searchable archive with status and amount

### QuickBooks Integration

- FR36: Owners can connect ShopFlow to a QuickBooks Online account via OAuth
- FR37: ShopFlow automatically syncs completed invoices to the connected QuickBooks account
- FR38: ShopFlow imports customer records from the connected QuickBooks account into ShopFlow contacts
- FR39: Owners can configure the QuickBooks chart of accounts mapping (income account, accounts receivable)
- FR40: Owners can view a sync status dashboard showing sync history, success count, and error log
- FR41: Owners can manually trigger a QuickBooks sync on demand

### User Management

- FR42: Owners can invite users to the shop by email address
- FR43: Owners can assign roles to users (Owner, Manager, Estimator, Operator)
- FR44: Owners can revoke access for any user
- FR45: Each user can update their own profile (name, password, notification preferences)
- FR46: Operators see only jobs assigned to their machine on the job board (role-scoped view)

### Shop Configuration

- FR47: Owners can upload a company logo for use in quote and invoice PDFs
- FR48: Owners can configure company address, phone, and payment terms for PDF output
- FR49: Owners can configure a default quote expiry period (days)
- FR50: Owners can configure tax settings (taxable on labor, on parts, or both)

### Customer Management

- FR51: Estimators can create and edit customer records (company name, contact name, email, phone)
- FR52: Estimators can view all quotes and jobs associated with a customer from the customer record
- FR53: ShopFlow imports customer records from QuickBooks Online on initial OAuth connection and on-demand sync

## Non-Functional Requirements

### Performance

- AI quote generation (file upload → PDF available): < 60 seconds for files up to 50MB on 95th percentile
- Job board initial load: < 2 seconds on standard broadband (50 Mbps+)
- Job status update (tap to confirmed status change visible on board): < 2 seconds end-to-end including real-time broadcast to other users
- Invoice generation from completed job: < 5 seconds
- QuickBooks sync (invoice appears in QBO): < 5 minutes from sync trigger
- PDF generation (quote or invoice): < 10 seconds

### Security

- All data encrypted in transit (TLS 1.2+) and at rest (AES-256)
- QuickBooks OAuth tokens stored encrypted; never logged or exposed to client
- Uploaded CAD files stored in private cloud storage (not publicly accessible URLs)
- Role-based access enforced server-side — Operator role cannot access billing, invoicing, or configuration endpoints via API manipulation
- Tenant isolation enforced at the database query layer — no cross-tenant data exposure possible
- CCPA-compliant data deletion: shop owner can request full data export and account deletion
- Passwords hashed with bcrypt (minimum cost factor 12); no plaintext storage at any layer
- Session tokens expire after 30 days of inactivity; immediate invalidation on logout

### Scalability

- System must support 10x current user load with < 10% performance degradation (infrastructure must scale horizontally)
- Real-time job board must support up to 50 concurrent users per shop without degradation
- File processing (CAD parsing) must be queued and processed asynchronously — never blocking web request threads
- Database schema and query patterns must support 100,000+ jobs per shop without full-table scans

### Reliability

- 99.9% monthly uptime SLA for all core services (job board, quoting, invoicing)
- Automated daily database backups with 30-day retention
- CAD file parsing failures must not result in data loss — failed parse returns user to manual entry fallback with no silent failure
- QuickBooks sync failures must be surfaced in the sync error log within 5 minutes of failure, not silently dropped

### Integration

- QuickBooks Online API must use OAuth 2.0 (not OAuth 1.0 or API keys) — OAuth 1.0 will be deprecated by Intuit
- CAD file parsing must not depend on a single vendor — DXF parsing should use open-source libraries (ezdxf) to avoid licensing risk; STEP parsing via Open Cascade Technology (LGPL license)
- Email delivery must use a transactional email provider (SendGrid, Postmark, or equivalent) with delivery tracking — not SMTP relay that lacks bounce handling
- PDF generation must produce byte-for-byte identical output server-side regardless of browser or client OS

### Accessibility

- All interactive elements on the mobile/tablet job board must have touch targets ≥ 48x48px
- Color is never the sole indicator of status (job status columns use both color and text labels)
- The shop floor UI must be operable with gloves-off in well-lit and poorly-lit environments — high contrast mode available
- WCAG 2.1 Level AA compliance for the web-facing interfaces (quote email links, customer-facing PDFs)
