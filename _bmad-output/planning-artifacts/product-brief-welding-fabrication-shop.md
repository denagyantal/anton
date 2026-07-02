---
stepsCompleted: [1, 2, 3, 4, 5, 6]
inputDocuments:
  - ideas/shortlisted/welding-fabrication-shop-job-tracking.md
  - _bmad-output/planning-artifacts/market-research-welding-fabrication-shop.md
workflowType: 'product-brief'
lastStep: 6
date: '2026-07-02'
author: 'Root'
---

# Product Brief: FabFlow — Welding & Fabrication Shop Job Tracker

---

## Executive Summary

**FabFlow** is a cloud-native job tracking, material estimating, and invoicing platform built exclusively for 1–8 person custom welding and metal fabrication shops. It replaces the broken three-stack (QuickBooks + spreadsheet + whiteboard) that every small fab shop currently runs on with a purpose-built tool designed around the specific workflow of the metal fabrication trade.

The core opportunity is a textbook market gap: over 33,000 US fabricated metals companies — the vast majority of them small private operations — have exactly two options today. Enterprise job shop ERP (E2 Shop, JobBOSS) at $150+/user/month with 6-month implementations designed for 20+ person machine shops, or generic field service tools (Jobber, Tradify) that don't understand what a 3/16" flat bar weighs or how to handle a deposit-first invoice workflow. The result: small fab shops quote on spreadsheets, track jobs on whiteboards, and lose money on every estimate that miscalculates material weight.

FabFlow enters at the bottom-right quadrant of the competitive map — **low price, high fabrication-specificity** — a position currently occupied by no product. The wedge feature is a material cost estimator that eliminates 20–30 minutes of manual calculation per quote, delivering immediate, measurable ROI that a cost-sensitive shop owner can feel on day one.

The target price point is $49/month (Solo) and $79/month (Team), with a $99 lifetime deal for the launch campaign. At 204 paying subscribers at $49/month, the product crosses $10K MRR — requiring less than 0.5% penetration of the addressable market. The community distribution channel (r/Welding, 750K+ members) is accessible, low-cost, and perfectly aligned with the target customer.

**The verdict: build now.** The gap is real, the market is validated, and the window to establish community brand loyalty before a well-funded competitor enters is open today.

---

## Core Vision

### Problem Statement

Custom metal fabrication and welding shops (1–8 employees) run every project — custom gates, trailers, equipment guards, railings, structural components — through a fully manual workflow that has four distinct, painful failure points:

1. **Material cost estimating is manual and error-prone.** Every quote requires calculating weight (steel is priced by the pound), cutting time, and welding labor. A shop doing 5 quotes per day spends 20–30 minutes on manual math per quote. One bad estimate means the shop absorbs the loss. There is no tool under $150/month that does this math for a fabricator.

2. **Job tracking lives on a whiteboard or paper pile.** Which jobs are in queue, in production, awaiting materials, or ready for pickup? Currently: walk to the whiteboard and look, or interrupt a floor worker. No real-time visibility. No remote access. Jobs fall through the cracks.

3. **The three-stack is fragile and incoherent.** QuickBooks handles invoicing. A spreadsheet handles quoting. A whiteboard handles job status. Nothing is connected. Every handoff between tools is a manual transcription that can fail.

4. **Existing enterprise software is inaccessible.** E2 Shop and JobBOSS² confirm that larger shops have paid for dedicated job shop software for decades — the problem is solved at scale. But the solution at $150+/user/month with 6-month implementations is categorically inaccessible to a 3-person shop generating $350K/year.

### Problem Impact

- **Financial:** A single miscalculated material estimate on a $2,000 gate job can eliminate the shop's entire margin on that job. At 5 quotes/day, 5 days/week, the cumulative risk from manual estimation is material.
- **Time:** 20–30 minutes per quote × 5 quotes/day = 100–150 minutes/day of estimating time, much of which is pure arithmetic that software should handle.
- **Operational:** Lost or forgotten jobs, missed delivery windows, and surprised customers are direct consequences of whiteboard-and-paper job tracking.
- **Growth ceiling:** A shop that can't track jobs efficiently can't grow beyond the number of jobs the owner can hold in their head. The whiteboard system creates a hard ceiling on scale.

### Why Existing Solutions Fall Short

**Enterprise ERP (E2 Shop, JobBOSS²):**
- $150/user/month minimum; a 3-person shop pays $450/month = $5,400/year
- At 8.7% EBITDA margin, a $350K/year shop earns ~$30K operating profit. $5,400/year in software cost is 18% of operating profit — prohibitive.
- 6-month implementations designed for 15–100 person machine shops with CNC equipment, BOM structures, and dedicated IT staff
- Feature set massively exceeds what a custom job shop needs

**Generic Field Service Tools (Jobber, Tradify):**
- Built for route-based service businesses (plumbers, HVAC, electricians)
- No material weight/cost estimator — they don't know the density of 1018 mild steel
- No in-shop production Kanban — designed for job dispatch, not shop floor production
- Per-user pricing adds up: Tradify at $61/user/month for a 4-person team = $244/month
- No deposit-first invoice workflow standard in fabrication

**Generic MRP (MRPeasy):**
- $49/user/month = $147–$245/month for a 3–5 person team
- Not fabrication-specific; complex UI not designed for non-technical shop owners
- Overkill for the core workflow of quote → track → deposit → invoice

**The gap:** There is no purpose-built, cloud-native tool for the custom fabrication job shop workflow at $49–$79/month flat. This is the white space FabFlow occupies.

### Proposed Solution

FabFlow is a focused three-module platform built around the actual workflow of a 1–8 person custom fabrication shop:

**Module 1: Material Cost Estimator**
Select material type (mild steel, stainless 304/316, aluminum 6061) → select profile (plate, sheet, flat bar, round bar, square tube, pipe, angle iron) → input dimensions → auto-calculate weight using material density → multiply by current price per pound → add welding and cutting labor estimates → total quote with configurable markup. This replaces 20–30 minutes of manual math with a 2-minute workflow.

**Module 2: Job Kanban Board**
Six-stage pipeline: Quote → Approved (deposit received) → Material Ordered → In Production → Finishing → Ready for Delivery/Pickup → Invoiced. Multi-user so the shop owner, floor workers, and office admin all see the same status. Mobile-ready so a floor worker can update from their phone without walking to the office. Stages map to the actual fabrication workflow, not a generic project board.

**Module 3: Deposit + Invoice Workflow**
Quote approved → auto-generate deposit invoice (configurable 30–50%) → mark deposit as paid → production begins → job complete → final invoice auto-generates with deposit credited. This is the standard fabrication payment model, handled natively rather than as a workaround in QuickBooks.

**Supporting feature: Material Inventory Tracker**
Log lbs on hand by material type and profile. Alert when running low. Update inventory when material is pulled for a job. Eliminates the "walk to the rack and look" workflow for common stock checks.

### Key Differentiators

1. **Built for fabrication, not adapted for it.** FabFlow knows what mild steel weighs per cubic inch, how to calculate weight for tube vs. plate vs. round bar, and how to structure a deposit invoice. It is not a field service app with a different label.

2. **Material cost estimator at the right price.** SecturaFAB and Paperless Parts offer sophisticated quoting tools — at enterprise pricing and requiring CAD workflow integration. FabFlow delivers the 80% of the estimating value (material type + dimensions → cost) at 20% of the price, designed for a shop owner who doesn't have a CAD setup.

3. **Flat pricing that shop owners can stomach.** $49/month for a solo or 2-person shop, $79/month for teams up to 8. Not per-user pricing that scales with the team size. A shop owner hiring a second floor worker doesn't want to see their software bill jump.

4. **Community-first brand.** FabFlow earns trust in the r/Welding and r/fabrication communities before it markets. The opening move is asking shop owners to describe their quoting process, not announcing a product. This builds credibility that generic SaaS marketing can't replicate.

5. **Lifetime deal entry point.** A $99 lifetime deal maps perfectly to the welder's psychology around recurring costs. It seeds the user base with advocates who will share the tool with other shop owners in their network.

---

## Target Users

### Primary Users

**Persona 1: Mike the Shop Owner-Operator**

*Background:* Mike, 44, owns a 3-person fabrication shop outside Columbus, Ohio. He started as a welder at 19, bought the shop at 32, and now manages everything from quoting to delivery while still doing the majority of the welding himself. Annual revenue: $380K. Net income after materials, payroll, and overhead: ~$45K. His shop does custom gates, equipment guards, trailer parts, and structural brackets for local contractors.

*Current workflow:* Mike quotes on a yellow legal pad — dimensions, rough weight estimate, price per pound from memory, labor hours from gut feel. He transfers the total to a QuickBooks invoice template. His job board is a 4×6 whiteboard with magnets for job numbers. He knows which jobs are in progress because he's the one welding them. His material inventory is in his head ("I know I have about 200 lbs of 1/4" plate left").

*Pain:* Last quarter, Mike lost $400 on a custom trailer hitch assembly because he forgot to account for the waste steel from cutting the receiver tube to length. He's had two jobs "fall through the cracks" in the past year — jobs that were approved but never started because they got buried under new paperwork. He spends 45 minutes every morning reviewing his paper pile to figure out what's in queue.

*Success vision:* Mike enters job details into FabFlow, gets an accurate material cost in under 2 minutes, and can see the status of every active job from his phone while he's at the steel yard. He stops losing money on estimates and stops manually tracking deposits.

*Adoption trigger:* "I miscalculated the steel cost on that fence job and ate a $600 loss. I need to fix this."

**Persona 2: Sarah the Shop Office Manager**

*Background:* Sarah, 38, runs the office side of a 6-person fabrication shop in Texas owned by her husband. She handles all customer communication, quoting, invoicing, and bookkeeping. She has a QuickBooks account, three separate spreadsheets for different job types, and a shared Google Sheet where she and the floor supervisor track job status — which is perpetually out of date because the welders don't update it.

*Current workflow:* When a quote request comes in, Sarah pulls up the appropriate spreadsheet, manually calculates material quantities based on the customer's drawing or description, looks up the current steel price (calls the supplier or checks a bookmark), adds labor at a fixed hourly rate, and generates a QuickBooks estimate. The whole process takes 30–45 minutes. When the customer approves, she creates a deposit invoice in QuickBooks, manually, as a separate document.

*Pain:* Sarah manages 15–25 active jobs simultaneously. Tracking which jobs have received deposits, which are waiting on materials, and which are ready for delivery is a full-time job on top of her actual job. She frequently calls the floor supervisor for status updates on jobs she should be able to check herself.

*Success vision:* Sarah completes a material estimate in 5 minutes using FabFlow's estimator, approves the quote, and sees the deposit invoice auto-generated. She can check the status of every active job on the Kanban board without calling anyone. Her QuickBooks workload drops by 40%.

*Adoption trigger:* "I need a tool that connects my quoting to my job tracking to my invoicing. I can't keep three separate systems in sync."

### Secondary Users

**Floor Worker / Production Lead:** The person who updates job status as work progresses. Needs the mobile Kanban update experience — scan or tap to move a job from "In Production" to "Finishing" without going to the office. Tech literacy: basic smartphone user. Key interaction: updating job stage from the shop floor, checking what jobs are in queue for their workstation.

**Customer (Quote Approval Portal):** Receives a quote link via email, reviews line items, approves online, and pays the deposit without a phone call. Key interaction: one-time per job, low friction, no account creation required.

**Steel Supplier (Future/Indirect):** Not a direct user in MVP, but a potential integration point in Year 2 — real-time material pricing feed and order placement from the estimator.

### User Journey

**Mike's First Week with FabFlow:**

*Discovery:* Finds FabFlow via a r/Welding post — "I built this after asking 50 welders how they quote. Here's what we made." The authenticity of the post (not a product announcement, an explanation of the research process) generates trust. Mike signs up for the $99 LTD.

*Onboarding (Day 1):* FabFlow asks: "What materials do you work with most?" Mike selects mild steel, adds current price per pound from his last supplier invoice. He creates his first estimate using the plate estimator — inputs dimensions for a gate he's currently quoting. The weight calculates instantly. He adjusts the price, adds labor hours, and generates a PDF quote. Time: 8 minutes for first quote. Previous time: 30 minutes.

*Core Usage (Week 1):* Mike enters all 12 active jobs from his whiteboard into FabFlow. He assigns each a status. His floor worker downloads the mobile app and moves a job to "Finishing" from the shop floor. Mike sees the update on his phone while at the steel supplier.

*Aha Moment (Day 4):* A customer texts asking about their job. Mike opens FabFlow, sees it's in "Finishing," and responds in 30 seconds without calling the shop. He says to himself: "I've been waiting for this."

*Long-term (Month 3):* FabFlow is the first thing Mike opens every morning. His estimate accuracy has improved — he's tracking material waste in the notes field and adjusting his templates. He's referred FabFlow to two other shop owners in his fabrication network. He hasn't miscalculated a material cost in 10 weeks.

---

## Success Metrics

### User Success Metrics

**Primary Metric — Estimating Time Reduction:**
- Baseline: 20–30 minutes per quote using manual spreadsheet method
- Target: Under 5 minutes per quote using FabFlow's material estimator
- Measurement: Average time from quote creation start to quote PDF generation (in-app timer)
- Signal: If users are completing quotes in under 5 minutes, the estimator is working

**Engagement Metric — Weekly Active Estimation:**
- Target: 5+ quotes created per active user per week (mirrors real shop volume)
- Leading indicator: If users are creating quotes weekly, they've integrated FabFlow into the core workflow (not just onboarded and stalled)

**Retention Metric — Job History Depth:**
- Target: 50+ historical jobs in the system per account by Month 3
- Rationale: Once a shop has 50 jobs in FabFlow, the switching cost becomes substantial — their material pricing templates, customer records, and job history are embedded

**Outcome Metric — Deposit Capture Rate:**
- Target: 80%+ of approved quotes generate a deposit invoice within 24 hours
- Signal: Users are trusting FabFlow for the actual financial workflow, not just tracking

### Business Objectives

**Month 3:**
- 20 active beta accounts (recruited from r/Welding community during pre-launch phase)
- 50 LTD sales at $99 = $4,950 in revenue (seed user base for testimonials)
- 10 verified testimonials with specific ROI claims (e.g., "I save 2 hours a day on estimates")
- First 5 G2/Capterra reviews published

**Month 6:**
- 100 paying subscribers (mix of LTD holdovers and MRR accounts)
- $4,000+ MRR from monthly subscribers
- Churn rate below 5% monthly (sticky once job history is in)
- 3+ YouTube channel sponsorships completed (50–200K subscriber channels)

**Month 12:**
- 204+ paying monthly subscribers
- $10,000+ MRR
- Churn rate below 3% monthly
- 30+ reviews on G2 and Capterra
- Community reputation established in r/Welding (recognized as the go-to small shop solution)
- LTD campaign closed; transition fully to $49/$79/month subscription model

**Year 2:**
- $25K+ MRR
- 500+ active accounts
- QuickBooks sync available (reduces adoption friction for QB-heavy shops)
- Stainless and aluminum pricing models fully built out
- Acquisition interest from strategic buyers (ECI Manufacturing, Jobber, ServiceTitan) possible

### Key Performance Indicators

| KPI | Target (M3) | Target (M6) | Target (M12) | Measurement Method |
|-----|------------|------------|-------------|-------------------|
| Active paying accounts | 20 (beta) | 100 | 204+ | CRM / Stripe |
| MRR | $0 (LTD phase) | $4,000 | $10,000+ | Stripe MRR |
| LTD sales | 50 | 100 | 150+ | Stripe one-time |
| Monthly churn rate | <10% | <5% | <3% | Accounts lost / total |
| Avg. quotes per user/week | 3+ | 5+ | 8+ | In-app event tracking |
| Avg. time to first quote | <15 min | <10 min | <8 min | Onboarding funnel |
| Estimator usage rate | 70%+ of users | 80%+ | 85%+ | Feature usage events |
| NPS score | 35+ | 45+ | 50+ | In-app quarterly survey |
| G2/Capterra reviews | 5 | 15 | 30+ | Manual review count |
| Community mentions (r/Welding) | 5 | 20 | 50+ | Reddit keyword monitoring |

**Leading Indicators (Early Warning System):**
- If weekly active estimation rate drops below 3 quotes/user, investigate onboarding friction or material library gaps
- If first-week churn exceeds 20%, investigate estimator accuracy (wrong material weights = wrong quotes = trust broken)
- If deposit capture rate stays below 50%, investigate invoicing UX friction

---

## MVP Scope

### Core Features

The MVP covers the three-module core that eliminates the most acute pain for the most users. Every feature must pass: "Does a 1–3 person fab shop need this to replace their spreadsheet + whiteboard?" If no, it waits for v2.

**Feature 1: Material Cost Estimator (MUST SHIP — the entire wedge)**

- Material type library: Mild steel (A36/1018), Stainless 304, Aluminum 6061
- Profile types: Plate/Sheet (L×W×thickness), Flat bar (L×W×thickness), Round bar (L×OD), Square/Rectangular tube (L×OD×wall), Round pipe (L×OD×wall), Angle iron (L×leg×thickness)
- Density calculation: Auto-calculate weight in lbs from dimensions + material density constant
- Price per pound: User-configurable per material type (set from last supplier invoice; manually updated)
- Line items: Multiple material items per quote + free-form labor line items with hourly rate
- Markup: Configurable markup percentage applied to material + labor subtotal
- Waste factor: Optional configurable waste % per material line item
- Output: Formatted quote total with line-item breakdown
- Manual override: Any calculated value can be manually overridden without losing the underlying formula

**Feature 2: Job Kanban Board**

- Pipeline stages: Quote → Approved → Material Ordered → In Production → Finishing → Ready for Pickup/Delivery → Invoiced
- Job card: Customer name, job description, estimated value, due date, assigned worker, current stage
- Multi-user: All accounts on the workspace see the same board in real-time
- Mobile-responsive: Works on phone browser without a native app (MVP)
- Stage movement: Drag-and-drop on desktop, tap-to-advance on mobile
- Job history: Completed/invoiced jobs move to archive but remain searchable
- Notes: Per-job notes field for production instructions or customer communication

**Feature 3: Deposit + Final Invoice**

- Quote to deposit invoice: One-click convert approved quote → 30/40/50% deposit invoice (configurable default per workspace)
- Deposit tracking: Mark deposit as paid (manual confirmation in MVP; Stripe integration in v1.1)
- Final invoice generation: Auto-populate final invoice with total, credit deposited amount, show balance due
- PDF output: Professional PDF quotes and invoices with shop name, logo, contact info
- Customer email: Send quote/invoice link via email directly from FabFlow

**Feature 4: Customer Record**

- Basic customer profile: Name, company, phone, email, billing address
- Job history per customer: All quotes and jobs linked to customer record
- No CRM complexity — just enough to look up "who is John Smith and what have I built for him"

**Feature 5: Material Inventory Tracker (Simplified)**

- Inventory log: Track lbs on hand by material type + profile (e.g., "1/4" A36 plate: 340 lbs")
- Manual deduction: When a job uses material, manually log the deduction
- Low-stock alert: User-configurable alert threshold per material type
- No automatic job-to-inventory deduction in MVP (too complex for the initial build; defer to v2)

### Out of Scope for MVP

These features are explicitly deferred. Any request to include them in the MVP should be challenged with "what's the cost of not shipping the core 3 modules?"

- **Stripe payment processing / online deposit payment:** v1.1 — requires PCI compliance setup; MVP uses "mark as paid" manual confirmation
- **QuickBooks sync:** v1.1 — shops will use FabFlow alongside QuickBooks initially; sync reduces friction but isn't required to prove value
- **Native mobile app (iOS/Android):** v2 — mobile-responsive web is sufficient for floor worker job status updates
- **Automatic material inventory deduction from jobs:** v2 — too complex to implement accurately at MVP without extensive shop-specific configuration
- **Real-time steel price feeds:** v2 — manual price updates per material type are sufficient; live feeds require supplier API relationships
- **Customer quote approval portal (online approve + deposit payment):** v1.1 — email-based quote PDF is MVP; online portal is high-value but adds auth complexity
- **CAD file import / automated BOM from drawings:** v3 — Paperless Parts / SecturaFAB territory; requires sophisticated engineering workflow
- **Subcontractor management (powder coat, laser cut, galvanizing):** v2 — important for many shops but not in the core job tracking flow
- **Multi-shop / franchise support:** v3 — well beyond the 1–8 person target
- **Financial reporting / P&L by job:** v2 — valuable but QuickBooks handles this for MVP users

### MVP Success Criteria

FabFlow MVP succeeds when:

1. **50 LTD sales** within 60 days of launch community post in r/Welding (validates market demand at the pricing point)
2. **20 beta users are actively creating quotes weekly** by Month 2 (validates that the estimator solves the core pain)
3. **Churn in first 90 days stays below 15%** (validates that onboarding is working and the product delivers the promised ROI)
4. **At least 5 users explicitly say they replaced their spreadsheet** with FabFlow (qualitative validation of the core use case)
5. **No major accuracy complaints about the material estimator** — if users are getting weight calculations wrong and losing money on quotes, the product has failed its core promise

**Go/No-go signals at Month 3:**
- Go: 50+ active accounts, <5% monthly churn, 5+ testimonials with ROI claims → proceed to MRR model and v1.1 feature set
- Investigate: <20 active accounts or >15% churn → investigate onboarding friction, estimator accuracy, or community channel effectiveness before scaling
- Stop: Zero repeat usage among beta cohort after week 2 → fundamental product-market fit issue; return to discovery

### Future Vision

**Year 1 — Prove the wedge, establish community:**
FabFlow is known in r/Welding as "the affordable fab shop software" — the thing shop owners recommend when someone asks how to manage their jobs. The material estimator is deeply accurate with community-contributed pricing benchmarks. QuickBooks sync launches in Month 6, cutting onboarding time for shops already on QB.

**Year 2 — Deepen the platform:**
- Stripe-powered online quote approval + deposit payment (eliminates the deposit chase phone call)
- Real-time steel price updates via service center API partnerships
- Job profitability reporting: compare estimated vs. actual material cost, identify which job types the shop makes money on
- Subcontractor tracking: outsourced powder coat, laser cutting, galvanizing tied to job status
- Expand to adjacent materials: stainless pricing refinement, aluminum alloy library, copper/brass for specialty shops
- Canada launch (same market profile, same workflow)

**Year 3 — Become the industry default for small fab shops:**
- AI-assisted quoting: describe the job in plain language → FabFlow suggests material list and labor estimate
- Customer portal: clients log in to see status of their job, approve change orders, and pay invoices online
- Supplier directory: find local steel service centers, compare material pricing, place orders from the estimator
- Network effects: shops with overlapping customer bases share quote templates; community-driven material pricing library
- Adjacent verticals: aluminum boat builders, custom truck body fabricators, ironwork/blacksmithing shops
- Acquisition positioning: at $3–5M ARR with strong customer satisfaction, FabFlow becomes an attractive acquisition target for ECI Manufacturing (E2 Shop/JobBOSS parent), Jobber, or ServiceTitan at a 5–8x revenue multiple

**The 10-Year Vision:**
FabFlow becomes the operating system for the small metal trades — not just welding and fabrication, but the broader ecosystem of metal-working businesses that fall between "field service" and "full manufacturing ERP." The product that started by replacing a yellow legal pad and a whiteboard becomes the platform that connects small metal shops to their suppliers, their customers, and each other.

---

## Technical Assumptions (for PRD Handoff)

*These are directional, not final — the architecture step will validate and refine.*

- **Frontend:** Next.js (React) or SvelteKit — server-side rendering for SEO; real-time Kanban updates via WebSockets or SSE
- **Backend:** Supabase (Postgres) — row-level security for multi-user workspaces; real-time subscriptions for Kanban board sync
- **Auth:** Supabase Auth (email/password + magic link) — no OAuth complexity in MVP
- **PDF generation:** Puppeteer or React-PDF for quote/invoice PDFs
- **Payments:** Stripe (payment links for LTD; subscription billing for MRR model)
- **Mobile:** Mobile-responsive web (CSS/Tailwind) in MVP; no native app
- **Hosting:** Vercel (frontend) + Supabase (backend/DB) — fast deployment, low ops overhead
- **Material density library:** Hardcoded constants for MVP material types (mild steel: 0.284 lb/in³, stainless 304: 0.289 lb/in³, aluminum 6061: 0.098 lb/in³) — expandable to database in v2

---

## Go-to-Market Summary

*Extracted from market research for PRD context.*

**Launch Sequence:**
1. Pre-launch: Post in r/Welding — "Walk me through how you quote a custom gate" — collect 30+ responses documenting manual estimation pain. Recruit 10 beta users.
2. Beta (Month 1): 10 beta users using FabFlow for free in exchange for detailed weekly feedback. Iterate on material estimator accuracy and onboarding.
3. LTD Launch (Month 2): Community post in r/Welding — "$99 lifetime deal for the first 100 shops. Built after talking to 50 welders about their quoting process." Target: 50 LTD sales.
4. MRR Transition (Month 4): Close LTD. Launch $49/$79/month plans. Announce QuickBooks sync on the roadmap.
5. Distribution Scale (Month 4–12): YouTube channel sponsorships (3–5 channels, 50–200K subscribers), SEO content ("fab shop estimating software", "welding quote calculator"), AWS forum presence.

**Pricing:**
- Solo plan: $49/month — 1–2 users, unlimited jobs and quotes
- Team plan: $79/month — up to 8 users, material inventory tracker included
- LTD (launch only): $99 — up to 5 users, lifetime access to core features

---

*Product Brief for FabFlow — Welding & Fabrication Shop Job Tracker*
*Created: 2026-07-02 | Research basis: market-research-welding-fabrication-shop.md + ideas/shortlisted/welding-fabrication-shop-job-tracking.md*
*Next step: Create PRD using this brief as foundation*
