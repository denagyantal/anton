---
stepsCompleted: [1, 2, 3, 4, 5, 6]
inputDocuments:
  - ideas/shortlisted/machine-shop-job-tracking.md
  - _bmad-output/planning-artifacts/research/market-research-machine-shop-job-tracking.md
workflowType: 'product-brief'
lastStep: 6
date: '2026-05-07'
author: Root
---

# Product Brief: ShopFlow — Machine Shop Job Tracking & AI Quoting

---

## Executive Summary

Small CNC machining and fabrication shops (5–20 employees) are stranded in a software no-man's-land. Google Sheets and Trello lack multi-user real-time tracking. Enterprise ERPs like ProShop ($500+/month) and JobBOSS² ($200/user/month with $5K+ implementations) are built for operations that require dedicated IT staff. The $149–299/month cloud-native tier — purpose-built for job shops, self-serve to deploy, and AI-powered for quoting — is completely unoccupied.

**ShopFlow** is the cloud-native job shop management platform purpose-built for 5–20 person CNC machining, metal fabrication, and custom manufacturing shops. The product leads with AI-powered instant quoting: shop owners upload a DXF, STEP, or DWG file and receive a professional material + machine time estimate and a PDF quote in under 60 seconds — cutting quote turnaround from hours to under a minute. Job tracking, work orders, inventory, invoicing, and QuickBooks sync build out the full platform.

The market opportunity is a $1.2–1.9B and growing sector, with 50,000–100,000 addressable shops in the US and zero credible cloud-native competitors at this price point. The product is bootstrappable to $1M+ ARR, LTD-viable, and supported by a strong community distribution channel (PracticalMachinist.com, r/MachineShop, r/CNC) of buyers who already know they have a problem and are actively searching for the solution.

**Product Name:** ShopFlow  
**Market:** 5–20 person custom job shops (CNC machining, metal fabrication, welding, sheet metal)  
**Pricing:** $149/month (5 users), $249/month (15 users), $299/month (unlimited)  
**LTD:** $199 (5-user), $349 (15-user)  
**Timeline:** 6-week quoting MVP → 12-week full job-tracking platform → 20-week AppSumo LTD launch  
**Target ARR at 12 months:** $1.2M (500 shops × $199/month average)

---

## Core Vision

### Problem Statement

Small machine shops and fabrication shops are perpetually stuck between two inadequate extremes:

**Too simple (free):** Google Sheets, Excel, Trello, and whiteboards. These work for a single user but collapse under multi-user load. When multiple machinists and a shop manager need to update the same job status board, conflicts emerge, data gets lost, and billing disputes follow. Forum users report: *"Mistakes are common, and there's wasted time waiting for someone to close files so others can open them."*

**Too expensive and complex ($500–1,500+/month):** Enterprise ERPs — JobBOSS², ProShop, Global Shop Solutions — are powerful but require dedicated implementation consultants, 6-month rollouts, and IT staff to maintain. One forum user described abandoning a $10,000+ ERP implementation mid-project. Another noted that JobBOSS²'s price had tripled since 2012 with no meaningful UX improvements.

The result: tens of thousands of shops running their entire operation — quoting, job tracking, work orders, inventory, invoicing — on disconnected tools that weren't designed for manufacturing. Every missed quote, every billing dispute, and every scheduling conflict is a direct consequence of this infrastructure gap.

**The highest-urgency pain point is quoting.** Manual quoting takes 2–24 hours per job. When a shop is at capacity, quoting backlog means lost revenue — bids go out too late, customers go elsewhere. One missed $20,000 job per month at a 5-person shop represents 10% of annual revenue.

### Problem Impact

- **Revenue leakage from slow quoting:** Shops lose 1–5% of potential revenue annually from quotes that take too long or contain manual calculation errors
- **Operational chaos from disconnected tools:** Job status lives in 3–5 different places (whiteboard, email, QuickBooks, spreadsheet), creating friction every time a manager needs a job update
- **Multi-user coordination failure:** Shops with 5+ employees cannot share a live view of job status; floor operators have no digital way to update job progress
- **Hidden billing errors:** Without job cost tracking, shops routinely discover they invoiced less than actual material and labor cost; margin erosion is invisible until end of month
- **No mobile access for floor workers:** Desktop-only software fails for shop environments where operators work at machines, not computers

The problem compounds as shops grow: a 3-person shop tolerates spreadsheets; a 12-person shop with 4 machines running simultaneously has no choice but to adopt some form of job management software — but finds nothing in their price range.

### Why Existing Solutions Fall Short

| Solution | Price | Core Failure |
|----------|-------|-------------|
| Google Sheets / Excel | Free | No real-time multi-user sync; no job-shop structure; breaks at 5+ users |
| Trello / Smartsheet | $10–25/user/mo | Not purpose-built for manufacturing; no BOM, work orders, or quoting |
| JobBOSS² | ~$200/user/mo | Per-user pricing is unaffordable; $5K+ implementation; legacy UI |
| ProShop | $500+/mo | Enterprise-only; requires consultant; too complex for 5–20p shops |
| Realtrac | Undisclosed | Desktop-era architecture; not cloud-native; clunky UX |
| Cetec ERP | $250/mo (5u) | Built for electronics/PCBA manufacturing, not metal job shops; no AI quoting |
| MRPeasy | $245/mo (5u) | Designed for repeat production, not custom make-to-order job shops; no AI quoting |
| Paperless Parts | $500–1,000+/mo | Gold-standard AI quoting, but enterprise-only; no job tracking for small shops |

The pattern across all incumbents: they either lack cloud-native job-shop specificity (Cetec, MRPeasy), are enterprise-priced (ProShop, JobBOSS², Paperless Parts), or are legacy desktop systems (Realtrac, AllOrders). The $149–299/month cloud-native job-shop tier with AI quoting is genuinely unoccupied.

### Proposed Solution

**ShopFlow** is a cloud-native, AI-first job shop management platform built specifically for 5–20 person make-to-order manufacturing shops.

The product leads with a single breakthrough capability: **AI-powered instant quoting from CAD files**. A shop owner or estimator uploads a DXF, STEP, or DWG file. ShopFlow parses the geometry, classifies operations (turning, milling, drilling, sheet metal bends, weld joints), applies the shop's configured material rates, machine hourly rates, and markup percentages, and outputs a professional PDF quote with line-item breakdown — in under 60 seconds.

This single feature solves the highest-urgency, highest-revenue-impact pain point and creates an immediate "wow moment" for any shop manager who currently spends 2–24 hours manually quoting the same jobs.

From quoting, the product expands naturally:
- Accepted quotes convert to **jobs** on a multi-user Kanban-style tracking board (New → Quoting → Approved → In Progress → QC → Shipping → Invoiced)
- Jobs spawn **work orders** — step-by-step operation sequences assigned to specific machines and operators
- Raw material consumption is tracked against **inventory** — basic raw material stock + tool crib
- Completed jobs auto-generate **invoices** with actual vs. estimate cost comparison
- All financial data syncs to **QuickBooks** — ShopFlow is the operations layer, not an accounting replacement

Self-serve setup. Same-day deployment. No implementation consultants. Flat-rate pricing — no per-user tax that penalizes shops for giving every operator a login.

### Key Differentiators

1. **AI quoting from CAD files** — the only tool at this price point that accepts DXF/STEP/DWG and produces a professional quote in 60 seconds
2. **Flat-rate pricing** — $149/month for up to 5 users; no per-user billing that makes shops hesitate to add floor workers
3. **Same-day self-serve setup** — no consultant, no 6-month implementation, no IT department required
4. **Cloud-native and mobile-ready** — floor workers update job status from tablets; managers see live status from anywhere
5. **QuickBooks integration, not replacement** — small shops already use QuickBooks for accounting; ShopFlow handles operations and syncs, not competes
6. **Purpose-built for custom job shops** — make-to-order workflows (not repeat production), job routing, operator notes, material BOM per job, not generic project management
7. **Community-first GTM** — genuine participation in PracticalMachinist and r/MachineShop communities, where the target buyers already congregate and ask for exactly this product

---

## Target Users

### Primary Users

#### Persona 1: Mike — The Shop Owner/Manager (Primary Decision Maker + Primary User)

**Background:**  
Mike is 38, owns or manages a CNC machining shop with 8 employees. The shop does custom make-to-order work — aerospace brackets, medical device housings, automotive components — with 4 CNC mills and 2 lathes running simultaneously. He started as a machinist and worked his way up; he's not an IT person and doesn't want to be.

**Current Setup:**  
- Quoting: Excel templates that he updates manually, 3–6 hours per complex quote
- Job tracking: Physical job folders + whiteboard + a shared Google Sheet that breaks when two people edit it simultaneously
- Invoicing: QuickBooks, manually entered — no link to the job's actual material/labor cost
- Scheduling: Mental model + a hand-drawn Gantt chart on the whiteboard

**Pain Points:**  
- Loses 2–3 bids per month because he can't quote fast enough when the shop is at capacity
- Billing disputes every 2–3 months because invoiced amounts don't match actual costs
- Spends 2 hours every Monday morning reconstructing job status because the whiteboard and spreadsheet don't match
- Can't give floor workers access to the job tracking system (they'd need their own spreadsheet logins, which break the shared model)

**What Success Looks Like:**  
- Upload a DXF file on his phone while the customer is still on the phone → quote PDF sent before hanging up
- Every job has a live digital status visible to everyone in the shop
- End-of-month invoicing takes 20 minutes instead of a half-day
- QuickBooks stays as his accounting system; ShopFlow handles the shop floor

**Trigger Event:**  
Lost a $25,000 aerospace job to a competitor because his quote took 3 days; the competitor used Paperless Parts and quoted in hours. He searches "machine shop quoting software" and finds ShopFlow.

**Decision Criteria:**
- Can I set it up today without calling a consultant?
- Does it actually save me time on quoting?
- Is the price reasonable vs. what I lose in lost bids?
- Will my machinists actually use it on the floor?

---

#### Persona 2: Dave — The Shop Foreman (Power User + Floor Adoption Key)

**Background:**  
Dave is 45, been a machinist for 20 years, now foreman at a 15-person fabrication shop. He sets up jobs, assigns them to operators, tracks machine time, and escalates issues to the shop owner. He's technically capable but has zero patience for software that slows him down.

**Current Setup:**  
- Manages job assignments via whiteboard + verbal handoffs
- Updates job status by texting the owner when jobs are done
- No way to record operator notes, machine issues, or material substitutions in a structured way

**Pain Points:**  
- Has to interrupt the owner 8–10 times per day with status updates he could communicate asynchronously
- Material substitutions and last-minute changes aren't documented — billing disputes follow
- No way to see which machine/operator is available without walking the floor

**What Success Looks Like:**  
- Open ShopFlow on a tablet mounted at his workstation; see all active jobs and their current machine assignments
- Update job status with one tap when a job moves to the next operation
- Record operator notes and material substitutions directly in the job record

**Adoption Blocker:**  
If the app is slow, requires too many taps to update status, or doesn't work well on an Android tablet in a loud shop environment, Dave will ignore it and the owner loses value.

---

#### Persona 3: Karen — The Office Manager/Estimator (Secondary Decision Influencer)

**Background:**  
Karen is 42, handles quoting, invoicing, customer communication, and scheduling at a 10-person sheet metal shop. She's not technical but is meticulous and organized. She learned the current ERP (AllOrders) over 3 years but is frustrated that it costs $1,800+/year and still requires manual QuickBooks reconciliation.

**Current Setup:**  
- Quoting: AllOrders for job costing but still exports to Excel to format the final PDF
- Invoicing: Dual-entry between AllOrders and QuickBooks — error-prone
- Customer communication: Email with job status manually typed

**Pain Points:**  
- Dual data entry between AllOrders and QuickBooks wastes 2–3 hours per week
- AllOrders quote PDFs look unprofessional compared to what competitors send
- Cannot access AllOrders remotely — no cloud version; stuck at the office PC

**What Success Looks Like:**  
- One system where quotes, jobs, and invoices live in the same database as QuickBooks
- Professional, branded quote PDFs she can send directly from the app
- Cloud access so she can respond to customer status requests from her phone

---

### Secondary Users

**Floor Operators (View + Update Only):**  
The 3–15 machinists and welders on the floor who need to update job status, log hours, and record material usage. They are the key to data quality. They need a dead-simple mobile/tablet interface: tap job → tap status → done. They will not fill out forms. They are not the buyer, but their adoption determines whether the shop owner gets value.

**Shop Owners (Oversight + Reporting):**  
In shops where a separate manager runs day-to-day operations, the owner needs a read-only dashboard: job backlog value, shop utilization by machine, monthly revenue vs. estimate. Occasional user, but high-value for renewals — if the owner can see ROI in the dashboard, churn goes to near zero.

**Accountants / QuickBooks ProAdvisors (Integration Beneficiaries):**  
These are not active ShopFlow users, but they influence buying decisions. Manufacturing-focused accountants recommend operations software that plays well with QuickBooks. A QuickBooks ProAdvisor who discovers ShopFlow and finds the sync clean becomes a recurring referral source.

---

### User Journey

**Discovery:**
Mike Googles "machine shop quoting software" or "job shop ERP affordable" after losing a bid or having a billing dispute. He lands on:
- ShopFlow's SEO content ("QuickBooks for the shop floor")
- A PracticalMachinist forum thread where ShopFlow is mentioned as the solution people have been asking about for years
- A Show HN or r/MachineShop demo post showing a DXF → PDF quote in 60 seconds

**Evaluation:**
Mike visits the landing page. He sees a demo video of the AI quoting flow — upload DXF, get professional PDF in 60 seconds — and immediately understands the value. Free trial (14 days, no credit card). He signs up, uploads a real DXF from his last job, and sees a quote that's within 15% of his manual estimate. He adjusts the rates to match his shop's actuals. He's sold.

**Onboarding (Day 1):**
Mike invites Karen (estimator) and Dave (foreman). Configure: material rates, machine hourly rates, markup %. Import 3 current jobs manually. Dave updates one job status from his phone. Karen sends a quote to a customer directly from ShopFlow — first professional PDF she's sent.

**Core Usage (Weeks 2–8):**
- Every new job starts with a ShopFlow quote (Mike stops opening Excel entirely)
- Dave updates job status 5–10× per day from a tablet in the shop
- Karen generates invoices from completed jobs — QuickBooks sync handles the rest
- End-of-week: Mike checks the job board to see what's behind schedule

**Success Moment (Day 30):**
Mike invoices a job and notices the estimate vs. actual comparison: he was 8% under on material cost due to a mid-job substitution that Dave recorded in the work order. Without ShopFlow, that $900 would have been absorbed silently. He renews immediately.

**Long-term (3–6 months):**
ShopFlow becomes the single source of truth for the shop. Paper job folders are eliminated. The whiteboard only shows the weekly schedule. Monthly close takes 45 minutes instead of half a day. Mike refers ShopFlow to two other shop owners he knows through NTMA.

---

## Success Metrics

### User Success Metrics

**Quoting Efficiency (Primary Value Signal):**
- Time from job inquiry to quote sent: target < 15 minutes (vs. 2–24 hours baseline)
- Percentage of quotes generated using AI quoting (not manual): target > 80% by week 4
- Quote acceptance rate: track changes vs. pre-ShopFlow baseline (should improve as response time drops)

**Job Tracking Adoption:**
- Daily active usage by floor operators: target > 70% of invited operators logging at least 1 status update per day
- Job status accuracy: < 5% of jobs have status discrepancies between ShopFlow and reality (measured via owner self-report at onboarding reviews)

**Invoicing and Billing:**
- Estimate vs. actual cost variance tracked per job: shops should see < 3% material cost overruns once full cost tracking is in place
- Time to generate invoice from completed job: target < 5 minutes (vs. 30+ minutes baseline)

**Overall Engagement:**
- Shops should reach "full flow" (AI quoting + job tracking + invoicing) within 14 days of signup
- Weekly active sessions per shop: target ≥ 15 (indicates multi-user adoption, not just owner)

---

### Business Objectives

**12-Month Revenue Target: $1.2M ARR**
- 500 paying shops at $199/month average
- Monthly growth rate: ~30–40 new shops per month by month 6+

**LTD Campaign Goal (Month 4–5):**
- 300–500 LTD customers (revenue: $80,000–140,000 one-time)
- LTD customers generate 50+ Capterra/G2 reviews → organic top-of-funnel

**Community Authority:**
- Become the #1 recommended software in PracticalMachinist forum software threads within 12 months
- Achieve Capterra "Job Shop Software" category top rating (≥ 4.5 stars, 50+ reviews) within 12 months

**Churn and Retention:**
- Monthly churn < 3% (manufacturing SaaS churns 3.6× slower than typical SaaS; target far below industry average)
- Net Revenue Retention > 105% (upsell from 5-user to 15-user tier drives NRR above 100%)

---

### Key Performance Indicators

| KPI | 30 Days | 90 Days | 6 Months | 12 Months |
|-----|---------|---------|----------|-----------|
| Waitlist signups | 200 | — | — | — |
| Beta customers (active) | 15 | — | — | — |
| Paying customers | — | 50 | 200 | 500 |
| MRR | — | $7,500 | $35,000 | $100,000 |
| Monthly churn | — | < 5% | < 3% | < 2% |
| AI quotes generated | — | 500 | 5,000 | 25,000 |
| NPS score | — | > 40 | > 50 | > 60 |
| G2/Capterra reviews | — | 10 | 30 | 75 |
| Forum mentions (organic) | — | 5 | 25 | 75 |

**Leading Indicators (weekly tracking):**
- New trial signups per week
- Trial → paid conversion rate (target: > 25%)
- AI quotes generated per active shop per week (target: ≥ 5 by week 4)
- Floor operator daily active rate per shop

---

## MVP Scope

### Core Features (Phase 1 — Weeks 1–6: Quoting MVP)

**Feature 1: AI Quoting Engine**
- File upload: DXF, STEP, DWG (PDF as fallback with manual measurement entry)
- Geometry parsing: classify features — turning, milling, drilling, sheet metal operations, weld joints
- Rate configuration: material types with cost-per-unit, machine hourly rates, setup time defaults, labor markup %
- Instant estimate: material cost + machine time + labor = total cost + configurable profit margin
- Professional PDF quote output: company branding (logo, address), line-item breakdown, terms, expiry date
- Quote history: searchable archive of all quotes with status (draft/sent/accepted/declined)
- One-click convert accepted quote to job

**Feature 2: Multi-User Job Tracking Board**
- Kanban-style board: New → Quoting → Approved → In Progress → QC → Shipping → Invoiced
- Job card: customer name, job number, due date, assigned operator, current machine
- Real-time updates: all users see status changes instantly (no refresh required)
- Mobile-optimized: touch-friendly tap-to-update for floor workers on tablets/phones
- Job comments: operators leave notes directly on the job card
- Search and filter: by status, customer, due date, assigned operator

**Feature 3: Work Orders**
- Step-by-step operation sequence per job (e.g., Setup → Rough Mill → Finish Mill → Drill → Deburr → QC → Ship)
- Machine assignment per step
- Operator assignment per step
- Estimated vs. actual time tracking per step
- Material consumption recording per step (actual material used vs. quoted)
- Completion sign-off per step (operator taps "done" on mobile)

**Feature 4: Basic Invoicing**
- Auto-generate invoice from completed job
- Actual vs. estimate cost comparison visible on invoice (internal view)
- Invoice PDF output: professional format, line items, totals, payment terms
- Invoice status tracking: draft, sent, paid, overdue
- Manual payment recording

**Feature 5: QuickBooks Sync**
- OAuth connection to QuickBooks Online
- Sync invoices from ShopFlow to QuickBooks (one-way, ShopFlow → QBO)
- Sync customers from QuickBooks to ShopFlow contact list
- Configurable chart of accounts mapping

**Feature 6: User Management**
- Invite users by email
- Role-based access: Owner (full access), Manager (full except billing), Operator (job status updates only), Estimator (quotes + jobs, no billing)
- Unlimited users on all plans (flat-rate billing)

---

### Out of Scope for MVP

The following are explicitly deferred to prevent scope creep and maintain a 6-week initial launch timeline:

**Deferred to Phase 2 (Weeks 7–12):**
- Raw material inventory tracking (stock levels, reorder alerts, material crib)
- Supplier management and purchase orders
- Machine utilization and scheduling Gantt chart
- Customer portal (customer-facing job status view)

**Deferred to Phase 3 (Weeks 13–20):**
- Tool crib tracking (tooling inventory, crib check-in/check-out)
- Multi-location / multi-shop support
- Shopify integration for online custom part orders
- Advanced reporting and analytics (revenue by customer, job profitability analysis)

**Permanently Out of Scope (by design):**
- Full accounting / bookkeeping — ShopFlow is not QuickBooks; it integrates with it
- Payroll — out of scope; refer to QuickBooks or Gusto
- HR / employee management — use dedicated HR tools
- AS9100 / ISO quality management modules — Phase 4+ for aerospace shops
- ITAR compliance features — Phase 4+ for defense work
- CAM software (G-code generation) — this is a different category

**Why these are out of scope:**  
Small shops already use QuickBooks for accounting and don't want duplicate entry or feature confusion. Keeping ShopFlow focused on operations (quoting → jobs → invoicing → sync) maintains the "same-day setup" promise. Adding accounting, HR, or compliance modules would require 6-month implementations and price increases — exactly what the target customer is running away from.

---

### MVP Success Criteria

The MVP is validated and ready for full buildout when the following are true:

1. **Quoting validation:** 15+ beta shops generate ≥ 3 AI quotes each within 30 days of onboarding
2. **Time savings confirmed:** Average quote creation time (measured in app) < 15 minutes vs. 2+ hour baseline reported by users
3. **Multi-user adoption:** In shops with ≥ 3 invited users, ≥ 2 users are active weekly within 14 days
4. **Retention signal:** > 70% of trial users convert to paid (indicating strong problem-solution fit)
5. **Quoting accuracy:** < 30% of quotes require material override adjustments > 25% (indicates AI geometry parsing is within acceptable range for real shop work)
6. **NPS ≥ 40** from beta users after 30 days

**Pivot triggers (if MVP fails):**
- < 5 beta customers after 60 days of genuine forum + community outreach
- > 50% of shops reject AI quoting accuracy without manual override (indicates CAD file parsing is inadequate and needs more investment before launch)
- Shops consistently request full accounting instead of QuickBooks sync (different customer segment; adjust positioning)

---

### Future Vision

**Phase 2 — Full Platform (Months 3–5):**
- Raw material and tool crib inventory with reorder alerts
- Gantt-style scheduling view (machine utilization by day/week)
- Customer portal (customers log in to see job status and download invoices)
- Xero integration (alternative to QuickBooks for international shops)
- Mobile app (iOS + Android native, beyond responsive web)

**Phase 3 — Intelligence Layer (Months 6–12):**
- Shop-specific AI model fine-tuning: after 10,000+ quotes, the AI learns this specific shop's pricing patterns and becomes more accurate over time
- Benchmark pricing (anonymized): see how your quote compares to similar jobs at other shops in the network
- Predictive scheduling: "You have 3 jobs due Friday; Machine 2 is overloaded; recommend rescheduling Job #447 to Wednesday"
- Material price feeds: live aluminum, steel, and stainless prices integrated into quoting rates

**Phase 4 — Platform Expansion (Year 2):**
- ISO 9001 / AS9100 documentation module (inspection records, material certifications, NCRs) — dramatically increases stickiness for aerospace/defense shops
- ITAR compliance features (controlled data handling, export license tracking)
- CAM integration API (Fusion 360, Mastercam) — pass geometry directly from CAM to ShopFlow quoting, eliminating file upload step
- Capacity marketplace: post available machine time; customers find and book capacity (Xometry/Fictiv for small shops)

**Long-Term Vision (Year 3+):**
ShopFlow becomes the operating system for the American small job shop — from the moment a customer inquiry arrives (AI quoting), through job execution (tracking, work orders), to cash collection (invoicing, sync). The network of 10,000+ shops creates data moats (pricing benchmarks, material cost trends, supplier network) that no new entrant can replicate from zero.

The reshoring tailwind (244,000 manufacturing jobs announced in 2024, +53% YoY) creates a decade-long wave of new shop formation. ShopFlow, with strong community brand and top Capterra/G2 ratings, is the default choice for any new shop that Googles "machine shop software" after buying their first CNC machine.

---

## Competitive Positioning Summary

**Positioning Statement:**  
ShopFlow is the only cloud-native job shop management platform built specifically for 5–20 person CNC and fabrication shops — combining AI-powered instant quoting with multi-user job tracking at a flat $149–299/month, with same-day self-serve setup and zero implementation cost.

**Brand Personality:**  
Practical. Shop-floor-first. Built by people who understand what a 10-person machine shop actually looks like. Not a "digital transformation platform" — a tool that saves a shop manager 3 hours a week, starting today.

**Tagline:**  
*"Quote in 60 seconds. Track every job. Ship on time."*

---

## Go-to-Market Summary

**Phase 1 Launch Channels (Months 1–3):**
1. PracticalMachinist.com — community participation, beta offer in software recommendation threads
2. r/MachineShop + r/CNC — Show HN-style demo post ("I built AI quoting for small shops — DXF → PDF in 60 seconds")
3. LinkedIn — shop owners and foremen; content marketing around quoting efficiency
4. Google SEO — target "machine shop software", "job shop ERP", "CNC quoting software"

**LTD Campaign (Month 4–5):**
- AppSumo + direct promotion to PracticalMachinist and r/MachineShop communities
- Goal: 300–500 LTD customers; generate 50+ Capterra/G2 reviews
- LTD pricing: $199 (5-user), $349 (15-user)

**Pricing:**
- $149/month — up to 5 users, unlimited jobs, AI quoting, job tracking, invoicing, QuickBooks sync
- $249/month — up to 15 users, all features + advanced reporting
- $299/month — unlimited users, all features + priority support
- LTD: $199 (5-user), $349 (15-user) — campaign pricing, limited time

---

## Risk Summary

| Risk | Probability | Mitigation |
|------|------------|------------|
| YC-backed startup enters $149–299/month tier | Medium | Launch fast; build community brand before VC money arrives |
| AI quoting accuracy rejected by shops | Medium | Manual override on every estimate; position as "starting point not final answer" |
| Sales cycles too long | Low | Free trial + self-serve removes sales cycle; same-day setup is the pitch |
| Market too niche for scale | Low | 500 shops × $249/month = $1.5M ARR; fully bootstrappable without VC |
| ProShop / JobBOSS² launches lite tier | Low | Incumbents historically take 18–24 months to respond; 12-month window is open |

---

**Product Brief Completion Date:** 2026-05-07  
**Status:** Complete — ready for PRD creation  
**Next Step:** Run `bmad-bmm-create-prd` to create the full Product Requirements Document
