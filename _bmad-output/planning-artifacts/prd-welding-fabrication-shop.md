---
stepsCompleted: [step-01-init, step-02-discovery, step-02b-vision, step-02c-executive-summary, step-03-success, step-04-journeys, step-05-domain, step-06-innovation, step-07-project-type, step-08-scoping, step-09-functional, step-10-nonfunctional, step-11-polish, step-12-complete]
inputDocuments:
  - ideas/shortlisted/welding-fabrication-shop-job-tracking.md
  - _bmad-output/planning-artifacts/market-research-welding-fabrication-shop.md
  - _bmad-output/planning-artifacts/brief-welding-fabrication-shop.md
workflowType: 'prd'
classification:
  projectType: saas_web_app
  domain: vertical_software_trades
  complexity: medium
  projectContext: greenfield
date: '2026-07-02'
author: Root
project_name: 'FabFlow — Welding & Fabrication Shop Job Tracker'
---

# Product Requirements Document - FabFlow: Welding & Fabrication Shop Job Tracker

**Author:** Root
**Date:** 2026-07-02

## Executive Summary

33,000+ US fabricated metals companies — the vast majority operating as 1–8 person custom job shops — have exactly two software options: enterprise job shop ERPs (E2 Shop, JobBOSS²) at $150+/user/month with 6-month implementations designed for 20+ person machine shops, or generic field service tools (Jobber, Tradify) built for route-based service businesses that don't know what 3/16" flat bar weighs. The result: small fab shops quote on yellow legal pads, track jobs on whiteboards, and lose money on every estimate that miscalculates material weight. The low-price, high-fabrication-specificity quadrant — purpose-built for 1–8 person custom welding and metal fabrication — is unoccupied.

**FabFlow** is a cloud-native job tracking, material estimating, and invoicing platform built exclusively for 1–8 person custom welding and metal fabrication shops. It replaces the broken three-stack (QuickBooks + spreadsheet + whiteboard) with a purpose-built tool designed around the actual workflow of the metal fabrication trade. The wedge feature is a material cost estimator that eliminates 20–30 minutes of manual calculation per quote by selecting material type → profile → dimensions → auto-calculating weight × price per pound → producing a professional quote PDF. Immediate, measurable ROI that a cost-sensitive shop owner can feel on day one.

**Go-to-market:** Community-first launch in r/Welding (750K+ members) and r/fabrication with authentic posts documenting real shop owner research — not product announcements. $99 lifetime deal targets the welder's cost-consciousness psychology and seeds advocates. Monthly subscriptions at $49 (Solo) and $79 (Team) replace LTD after initial cohort. 204 paying subscribers at $49/month = $10K MRR, requiring less than 0.5% penetration of the addressable market.

**Target users:** Owners and office managers at 1–8 person custom welding and metal fabrication shops doing custom gates, trailers, equipment guards, railings, and structural components — generating $200K–$2M/year revenue, priced out of enterprise ERPs, running manual three-stack workflows, and losing margin on miscalculated material estimates.

**Pricing:** $49/month (Solo, 1–2 users), $79/month (Team, up to 8 users). LTD launch at $99 (up to 5 users). **12-month target: $10,000 MRR** (204+ paying monthly subscribers).

### What Makes This Special

**Material cost estimator built for fabricators at the right price.** SecturaFAB and Paperless Parts offer sophisticated quoting tools — at $500–1,000+/month requiring CAD workflow integration. FabFlow delivers the 80% of estimating value that matters: select material type (mild steel, stainless 304, aluminum 6061) → select profile (plate, flat bar, round bar, square tube, pipe, angle iron) → input dimensions → auto-calculate weight using material density constants → multiply by price per pound → add labor → generate PDF quote. Under 5 minutes vs. 20–30 minutes manually. No alternative under $150/month does this.

**Fabrication workflow specificity.** Generic field service tools (Jobber, Tradify) are built for route-based dispatch. FabFlow's six-stage Kanban (Quote → Approved → Material Ordered → In Production → Finishing → Ready for Pickup/Invoiced) maps exactly to the custom fabrication workflow. The deposit-first invoice model (approve quote → auto-generate deposit invoice → mark paid → final invoice with deposit credited) mirrors industry-standard payment terms natively, not as a workaround.

**Flat-rate pricing that shop owners can stomach.** $49/month flat for a solo or 2-person shop — not per-user. Hiring a second welder doesn't trigger a software bill increase. This directly addresses the per-user pricing sensitivity that makes Tradify ($61/user/month) prohibitive for growing shops.

**Community-first brand built on credibility, not marketing.** FabFlow enters r/Welding as the product built after asking 50 welders how they quote — not as a vendor announcement. Organic trust in a tight-knit trade community is worth more than any paid acquisition channel.

**Sticky by design.** Once a shop has material pricing templates, customer records, and 50+ jobs in FabFlow, switching cost becomes substantial. Monthly churn at <3% is achievable because the data itself locks users in — unlike generic tools where switching is trivially easy.

## Project Classification

- **Project Type:** SaaS web app (browser-first, mobile-responsive for shop floor use; no native app in MVP)
- **Domain:** Vertical software — custom welding and metal fabrication shop management
- **Complexity:** Medium — standard CRUD for jobs/quotes/invoices/customers, material density weight calculations, multi-user real-time Kanban board, deposit/invoice workflow, material inventory tracker. No regulated data; customer PII and financial records require standard security practices.
- **Project Context:** Greenfield — new product targeting a confirmed unserved market segment at a price point currently occupied by no competitor

## Success Criteria

### User Success

- **Estimating time reduction:** 80%+ of active users complete material estimates in under 5 minutes (vs. 20–30 minute baseline) by end of Week 2, as measured by in-app quote creation timer
- **Time to first quote:** 90%+ of new users generate their first complete quote within 1 hour of signup — estimator must be discoverable and functional without onboarding support
- **Weekly estimate volume:** Active users create 5+ quotes per week by Month 2 (mirrors real shop volume; indicates estimator integrated into core workflow, not just trialed)
- **Job history depth:** 50+ historical jobs per account by Month 3 — once reached, switching cost becomes substantial and churn drops below 3%
- **Deposit capture rate:** 80%+ of approved quotes generate a deposit invoice within 24 hours — indicates users trust FabFlow for financial workflow, not just tracking
- **Estimator accuracy signal:** <15% of users report needing manual overrides >25% of calculated material cost — if exceeded, indicates material library gaps or calculation errors breaking the core value promise
- **Replacement validation:** At least 5 users per 100 active explicitly state they replaced their spreadsheet with FabFlow's estimator — qualitative validation of core use case

### Business Success

| Milestone | Target | Timing |
|---|---|---|
| Beta accounts (free, from r/Welding) | 20 | Month 2 |
| LTD sales at $99 | 50 | Month 2 |
| LTD sales at $99 | 100 | Month 4 |
| Paying monthly subscribers | 30 | Month 3 |
| Paying monthly subscribers | 100 | Month 6 |
| Paying monthly subscribers | 204+ | Month 12 |
| MRR | $1,470 | Month 3 |
| MRR | $4,900 | Month 6 |
| MRR | $10,000+ | Month 12 |
| Monthly churn | <15% | Month 3 (beta/early cohort) |
| Monthly churn | <5% | Month 6 |
| Monthly churn | <3% | Month 12 |
| Verified testimonials with ROI claims | 10 | Month 3 |
| G2/Capterra reviews | 5 | Month 3 |
| G2/Capterra reviews | 30+ | Month 12 |
| Community mentions in r/Welding | 5 | Month 3 |
| Community mentions in r/Welding | 50+ | Month 12 |
| NPS | >35 | Month 3 |
| NPS | >50 | Month 12 |

**Strategic objectives:**
- Become the default recommendation in r/Welding software threads within 12 months
- Own "fab shop quoting software," "welding shop job tracking," and "welding material cost estimator" Google search intent before any funded competitor captures the category
- Close LTD program at Month 4; transition to subscription-only with QuickBooks sync on the roadmap as the upgrade prompt

### Technical Success

- **Material estimator accuracy:** Weight calculations within 3% of actual measured weight for all supported material types and profiles (validated against manufacturer weight tables during QA)
- **Quote generation latency:** Quote PDF generated and available for download within 5 seconds of user submitting estimate inputs
- **Kanban real-time sync:** Job stage changes visible to all workspace users within 2 seconds of update without manual page refresh
- **Page load performance:** Core screens (job Kanban, quote list, customer list) load in under 2 seconds on standard broadband for accounts with up to 500 active jobs
- **Uptime:** 99.5% monthly uptime — a fab shop cannot afford to open the app in the morning and find it down before quoting a customer

### Measurable Outcomes

**Go/No-go signals at Month 3:**
- **Go:** 50+ active accounts, <5% monthly churn, 5+ testimonials with specific ROI claims (time saved, money not lost on estimates) → proceed to MRR model and v1.1 feature set (Stripe payments, QuickBooks sync)
- **Investigate:** <20 active accounts OR >15% churn → investigate onboarding friction, estimator accuracy, or community channel effectiveness before scaling spend
- **Stop:** Zero repeat usage among any beta cohort member after Week 2 → fundamental product-market fit issue; return to discovery

## Product Scope

### MVP — Minimum Viable Product

**MVP philosophy:** Problem-solving MVP. The single question is: can FabFlow eliminate the manual estimation pain that costs shop owners money and time every day? Every MVP feature must answer "yes" to: "Does a 1–3 person fab shop need this to replace their spreadsheet + whiteboard?"

**Core user journeys supported:**
- Shop owner creates a material estimate and generates a quote PDF in under 5 minutes
- Shop owner and floor workers track active jobs through production stages on a shared Kanban board
- Office manager converts an approved quote to a deposit invoice, marks it paid, and generates the final invoice when the job ships

**Must-have capabilities:**

1. **Material Cost Estimator** (the entire wedge — non-negotiable)
   - Material type library: Mild steel (A36/1018), Stainless 304, Aluminum 6061
   - Profile types: Plate/sheet, flat bar, round bar, square/rectangular tube, round pipe, angle iron
   - Auto-calculate weight from dimensions × material density constants
   - User-configurable price per pound per material type
   - Multiple material line items + free-form labor line items with hourly rate
   - Configurable markup percentage
   - Optional waste factor per line item
   - Manual override on any calculated value
   - Professional PDF quote output with shop branding

2. **Job Kanban Board**
   - Six stages: Quote → Approved → Material Ordered → In Production → Finishing → Ready for Pickup/Delivery → Invoiced
   - Multi-user real-time sync (all workspace members see the same board)
   - Mobile-responsive (floor workers can update stage from phone browser)
   - Job card: customer name, description, estimated value, due date, assigned worker, stage
   - Per-job notes field
   - Completed jobs archive (searchable)

3. **Deposit + Final Invoice Workflow**
   - One-click: approved quote → deposit invoice (configurable 30/40/50% default)
   - Mark deposit as paid (manual confirmation in MVP)
   - Final invoice auto-populated with total, deposit credited, balance due
   - PDF output for both deposit and final invoice
   - Send quote/invoice link via email from FabFlow

4. **Customer Records**
   - Name, company, phone, email, billing address
   - Job history per customer

5. **Material Inventory Tracker (simplified)**
   - Log lbs on hand by material type and profile
   - Manual deduction when material pulled for a job
   - User-configurable low-stock alert threshold

### Growth Features (Post-MVP)

**v1.1 — Month 4–6 (triggered by Go signal at Month 3):**
- Stripe integration for online deposit payment (customer pays directly from quote link; eliminates deposit chase phone call)
- Customer quote approval portal (client reviews quote online, approves, pays deposit — no phone call)
- QuickBooks sync (export invoices to QB; reduces dual-entry friction for QB-heavy shops)
- Expanded material library (stainless 316, aluminum 3003/5052, galvanized steel, DOM tubing)

**v2 — Month 6–12:**
- Native mobile app (iOS/Android) for shop floor workers
- Automatic material inventory deduction from jobs when moved to "In Production"
- Job profitability reporting: estimated vs. actual material cost per job; identify which job types make money
- Subcontractor tracking: powder coat, laser cutting, galvanizing tied to job status
- Canada launch (same market profile, same workflow, CAD pricing support)

**v3 — Year 2+:**
- Real-time steel price feeds via service center API partnerships
- AI-assisted quoting: describe the job in plain language → FabFlow suggests material list and labor estimate
- Supplier directory: find local steel service centers, compare pricing, place material orders from estimator
- CAD file import for automated BOM (Paperless Parts territory — for shops that have grown into that workflow)
- Multi-shop support for operations with multiple locations

### Vision (Future)

FabFlow becomes the operating system for the small metal trades — not just welding and fabrication, but the broader ecosystem of metal-working businesses that fall between "field service" and "full manufacturing ERP." The product that started by replacing a yellow legal pad and a whiteboard becomes the platform connecting small metal shops to their suppliers, customers, and each other. At $3–5M ARR with strong customer satisfaction, FabFlow is an acquisition target for ECI Manufacturing (E2 Shop/JobBOSS parent), Jobber, or ServiceTitan at a 5–8x revenue multiple.

## User Journeys

### Journey 1: Mike the Shop Owner-Operator — Quoting a Custom Gate

**Opening scene:** Mike, 44, owns a 3-person fab shop outside Columbus. He just got a call from a contractor asking for a quote on a custom ornamental driveway gate — 12 feet wide, 5 feet tall, 1.5" square tube frame with 1/2" round bar pickets. On a normal day, Mike would grab his legal pad, look up the current steel price on his supplier's website, do rough weight math in his head, estimate welding time from gut feel, and transfer the total to a QuickBooks estimate. 45 minutes minimum. He's made errors before — last quarter he lost $400 on a similar job by forgetting waste steel.

**Using FabFlow:** Mike opens FabFlow, creates a new estimate. He selects "Mild Steel A36" → "Square/Rectangular Tube" → inputs 1.5" × 1.5" × 0.120" wall, 144 inches length for the horizontal rails. FabFlow shows: 6.2 lbs × $0.85/lb = $5.27. He adds the pickets: "Round Bar" → 1/2" OD, 60" length × 24 pickets → 118 lbs → $100.30. He adds a labor line: "Welding — 8 hours" × $65/hr = $520. Applies 20% markup. Total quote: $750 with detailed line items. Generates PDF with his shop logo, emails it to the contractor in under 4 minutes.

**Climax:** The contractor approves by end of day. Mike clicks "Convert to Deposit Invoice" — FabFlow generates a 40% deposit invoice for $300 with one click. He emails it. The contractor pays. Mike changes the job status to "Material Ordered." His floor worker sees it on the shared Kanban board without Mike saying anything.

**Resolution:** Mike's estimate was accurate. He didn't lose money on material. He didn't spend 45 minutes on math. He's had zero estimate-related losses in 10 weeks since adopting FabFlow. When the contractor texts asking for a status update, Mike checks his phone and responds in 30 seconds: "In finishing, should be ready Friday."

**Journey requirements revealed:** Material estimator with density calculations, PDF quote generation with shop branding, email send, quote-to-deposit invoice conversion, multi-user Kanban with mobile access, job stage tracking.

---

### Journey 2: Sarah the Office Manager — Managing 18 Active Jobs

**Opening scene:** Sarah, 38, manages the office side of a 6-person fab shop in Texas. It's Monday morning. She has 18 active jobs across various stages — some waiting on materials, some in production, two ready for final invoice. Her current system: a shared Google Sheet that nobody updates, three separate QuickBooks spreadsheet templates for different job types, and a phone call to the floor supervisor every time a customer asks for a status update.

**The failure scenario (before FabFlow):** A commercial property manager calls about a custom handrail job. Sarah checks the Google Sheet — it shows "In Production" with a timestamp from three days ago. She calls the floor: the job is actually done and sitting in the staging area waiting for pickup. The customer has been waiting for the pickup call that never came. Sarah apologizes. This happens 2–3 times per week.

**Using FabFlow:** The floor lead updates job stages directly from the shop floor on his phone as work is completed. Sarah checks FabFlow at 8 AM: 3 jobs are "Ready for Pickup." She calls each customer. No missed pickups. When a quote comes in, she uses the material estimator — enters dimensions from the customer's sketch, gets weight and cost in 3 minutes, sends the quote. When approved, she generates the deposit invoice from FabFlow. When the job ships, she generates the final invoice from FabFlow. She runs QuickBooks separately for accounting (v1.1 sync brings these together), but her FabFlow workflow is coherent where her old three-stack was not.

**Resolution:** Sarah handles 40% fewer status-update phone calls. Zero missed pickups in 6 weeks. Her quoting time dropped from 35 minutes to under 6 minutes per estimate. She's the one who recommended FabFlow to her husband's shop network — three other shops signed up on her referral.

**Journey requirements revealed:** Multi-user Kanban with real-time sync, floor worker mobile update, customer communication logging, material estimator for office managers, deposit and final invoice workflow, job archive and search.

---

### Journey 3: A Floor Worker — Updating Job Status from the Shop Floor

**Opening scene:** Carlos, 26, is a production welder at a 4-person fab shop. He's just finished the welding phase on a trailer hitch assembly. Normally, he would walk to the office, write the job number on the whiteboard under "Finishing," and hope the shop owner sees it. If the shop owner is at the steel yard, the whiteboard update sits unread.

**Using FabFlow:** Carlos opens FabFlow on his phone (mobile browser, no app install needed). He finds the trailer hitch job by scrolling the Kanban — it's in "In Production." He taps "Move to Finishing." The card moves. Mike, at the steel yard with his phone, sees the notification. He texts the customer: "Your trailer hitch is in finishing, ready Thursday."

**Resolution:** Carlos doesn't interrupt the office flow. Mike doesn't miss the status change. The customer gets a proactive update instead of having to call. Carlos uses FabFlow for exactly one interaction per job — moving it to the next stage. The interaction takes 20 seconds. He doesn't need a user manual.

**Journey requirements revealed:** Mobile-responsive Kanban with tap-to-advance, floor worker-appropriate minimal UI, no complex features required for this user type, multi-user access without per-user pricing concern.

---

### Journey 4: A New Customer — Receiving and Approving a Quote

**Opening scene:** A homeowner, Dana, has requested a quote for custom steel floating shelves. She's never worked with a fabrication shop before. She expects the process to be complicated and slow.

**Using FabFlow:** Mike sends Dana a professional PDF quote from FabFlow with itemized line items (1/4" mild steel plate, 8 hours fabrication labor, powder coat surcharge), his shop logo, and his contact info. Dana reviews it via email. The quote looks professional — not a handwritten scrawl or a generic QuickBooks template with a fabrication markup line. She approves by replying "looks good." Mike updates the job to "Approved" in FabFlow, generates the deposit invoice, emails it.

**(v1.1 enhancement):** Dana receives a quote approval link and can review, approve online, and pay the deposit by credit card without a phone call. Mike sees the deposit paid in FabFlow and moves the job to "Material Ordered" automatically.

**Resolution (MVP):** Dana's experience is professional and responsive. She leaves a Google review. She refers her neighbor who's looking for a custom railing.

**Journey requirements revealed:** PDF quote with professional shop branding, email delivery, clear line-item breakdown customers can read, (v1.1) online approval portal and payment link.

---

### Journey 5: Edge Case — Material Price Change Mid-Quote

**Opening scene:** Mike is in the middle of quoting a large structural steel job — 800 lbs of 3/16" plate and 200 lbs of angle iron. Halfway through the estimate, his steel supplier just updated pricing: hot-rolled steel went up $0.08/lb. His FabFlow material price is stale.

**Using FabFlow:** Mike navigates to Material Settings, updates the price per pound for "Mild Steel A36" to the new rate. He returns to his in-progress estimate — all previously entered line items automatically recalculate with the new price. No re-entry. No manual math. The quote total updates immediately.

**Resolution:** Mike's quote reflects accurate current pricing. He submits the quote with confidence. The manual override feature means he can also lock a specific line item at a fixed price if he's already committed a verbal price to a customer on one component.

**Journey requirements revealed:** User-editable material prices, real-time recalculation when prices change, manual override per line item, price change does not require re-entering quote from scratch.

### Journey Requirements Summary

Capabilities revealed across all journeys:
- Material density weight calculation engine with density constants per material type and profile
- User-configurable price-per-pound per material type with global recalculation
- Multi-line estimate with material and labor line items, markup, waste factor
- PDF quote generation with shop branding (logo, name, contact)
- Email send of quotes and invoices from within FabFlow
- Six-stage job Kanban with real-time multi-user sync
- Mobile-responsive Kanban for floor workers (tap-to-advance)
- Quote-to-deposit invoice conversion (configurable % default)
- Deposit payment status tracking
- Final invoice generation with deposit credit
- Customer records with job history
- Material inventory tracker with low-stock alerts
- Job archive and search
- Workspace user management (invite users, role assignment)

## SaaS Web App Specific Requirements

### Multi-Tenancy Model

- **Workspace-per-shop:** Each fabrication shop is an isolated workspace with its own jobs, customers, material pricing, and users. No cross-workspace data visibility.
- **Row-level security:** All workspace data queries enforced at the database level via workspace_id — no application-level filtering that could be bypassed.
- **Workspace owner:** Shop owner is the workspace admin with billing control, user management, and workspace settings access.

### Authentication and Authorization

- **Auth provider:** Email/password + magic link (no OAuth complexity in MVP; Supabase Auth)
- **User roles in MVP:**
  - **Owner/Admin:** Full access — billing, user management, all modules
  - **Team Member:** Access to Kanban, job notes, material estimator; cannot manage billing or workspace settings
- **Invitation flow:** Owner invites team members by email; invite link expires in 7 days
- **Session management:** Persistent sessions on trusted devices; 30-day session timeout

### Data Model Key Entities

- **Workspace:** id, name, logo_url, billing_plan, owner_user_id
- **User:** id, workspace_id, email, role, display_name
- **Customer:** id, workspace_id, name, company, phone, email, billing_address
- **Quote:** id, workspace_id, customer_id, line_items (JSONB), subtotal, markup_pct, total, status (draft/sent/approved/rejected), pdf_url, created_at
- **LineItem:** type (material|labor), material_type, profile_type, dimensions (JSONB), weight_lbs, unit_price, quantity, waste_factor, subtotal, manual_override (bool)
- **Job:** id, workspace_id, quote_id, customer_id, title, stage, due_date, assigned_user_id, notes
- **Invoice:** id, workspace_id, job_id, type (deposit|final), amount, paid (bool), paid_at, pdf_url
- **MaterialPrice:** id, workspace_id, material_type, price_per_lb, updated_at
- **InventoryItem:** id, workspace_id, material_type, profile_type, dimensions_label, quantity_lbs, alert_threshold_lbs

### Technical Architecture Considerations

- **Frontend:** Next.js (App Router) with Tailwind CSS — server-side rendering for SEO; real-time Kanban via Supabase Realtime subscriptions
- **Backend/DB:** Supabase (Postgres with RLS) — row-level security enforces workspace isolation; real-time subscriptions for Kanban sync
- **Auth:** Supabase Auth (email/password + magic link)
- **PDF generation:** React-PDF or Puppeteer — quote and invoice PDFs rendered server-side with shop branding
- **Payments:** Stripe (subscription billing; Stripe Payment Links for LTD one-time purchase)
- **Hosting:** Vercel (frontend) + Supabase cloud (backend)
- **Material density constants (hardcoded in MVP):**
  - Mild steel (A36/1018): 0.284 lb/in³
  - Stainless 304: 0.289 lb/in³
  - Aluminum 6061: 0.098 lb/in³

### Billing and Subscription

- **Plans:** Solo ($49/month, up to 2 users), Team ($79/month, up to 8 users)
- **LTD:** $99 one-time, up to 5 users, lifetime access to MVP feature set
- **Trial:** 14-day free trial, no credit card required
- **Billing provider:** Stripe (subscriptions + payment links for LTD)
- **Plan enforcement:** User invite blocked if workspace user count exceeds plan limit

## Project Scoping & Phased Development

### MVP Strategy & Philosophy

**MVP Approach:** Problem-solving MVP — prove that the material cost estimator eliminates the estimation pain that costs shop owners real money on real jobs. Everything else (Kanban, invoicing, inventory) is table-stakes to make the product sticky enough to retain.

**Resource requirements:** 1–2 full-stack developers, 4–5 weeks to MVP. Next.js + Supabase stack keeps ops overhead near zero.

### MVP Feature Set (Phase 1)

**Core user journeys supported:**
- Shop owner creates accurate material estimate and PDF quote in under 5 minutes (eliminates the spreadsheet)
- Entire shop tracks active job stages on shared mobile-ready Kanban board (eliminates the whiteboard)
- Office generates deposit invoice on approval, final invoice on completion (replaces the QuickBooks workaround)

**Must-Have Capabilities:**
- Material estimator with density calculation for 3 material types × 6 profiles = 18 standard configurations
- Quote PDF generation with shop branding and line-item breakdown
- Email delivery of quotes and invoices from within FabFlow
- Six-stage job Kanban with real-time multi-user sync (Supabase Realtime)
- Mobile-responsive Kanban (floor worker tap-to-advance)
- Deposit + final invoice workflow with configurable deposit percentage
- Customer records with job history
- Material price per pound configuration per material type
- Simplified material inventory tracker with low-stock alerts
- Workspace user management and roles (Owner, Team Member)
- 14-day free trial → Stripe subscription billing

### Post-MVP Features

**Phase 2 (v1.1 — Month 4–6):**
- Stripe-powered online deposit payment via quote approval link (eliminates deposit chase)
- Customer quote approval portal (online review, approve, pay — no phone call)
- QuickBooks export/sync for invoices
- Expanded material library (stainless 316, aluminum alloys, galvanized, DOM tubing)

**Phase 3 (v2 — Month 6–12):**
- Native iOS/Android app for floor workers
- Automatic inventory deduction when job moves to In Production
- Job profitability reporting (estimated vs. actual material cost)
- Subcontractor tracking (powder coat, laser cut, galvanizing)
- Canada launch with CAD pricing support

**Phase 4 (Year 2+):**
- Real-time steel price feeds via service center API partnerships
- AI-assisted quoting from plain-language job description
- Supplier directory integration
- CAD file import for BOM generation

### Risk Mitigation Strategy

**Technical risks:** Material density calculation accuracy is the core trust mechanism — if calculations are wrong, users lose money on quotes and immediately stop trusting FabFlow. Mitigation: Validate all 18 material type × profile combinations against published manufacturer weight tables before launch; include prominent "verify before committing" guidance in UI; provide manual override on any calculated value.

**Market risks:** E2 Shop or JobBOSS launches an affordable lite tier. Mitigation: Community brand loyalty established in r/Welding before any enterprise player notices the small shop segment; pricing anchored below any viable enterprise lite offering; LTD cohort locked in.

**Resource risks:** 4–5 week build timeline requires scoping discipline. Mitigation: Mobile-responsive web (no native app), manual deposit tracking (no Stripe in MVP), no QuickBooks sync until v1.1. Each deferred feature is a natural upgrade prompt.

## Functional Requirements

### Estimation & Quoting

- FR1: Shop owners can select a material type (mild steel A36/1018, stainless 304, aluminum 6061) for each line item in an estimate
- FR2: Shop owners can select a profile type (plate/sheet, flat bar, round bar, square/rectangular tube, round pipe, angle iron) and input dimensions (length, width, thickness, OD, wall thickness as applicable to profile)
- FR3: FabFlow auto-calculates weight in lbs for each material line item using published density constants for the selected material type and profile geometry
- FR4: Shop owners can configure price per pound for each material type; all estimates using that material recalculate when price is updated
- FR5: Shop owners can add free-form labor line items with a description, hourly rate, and hours; labor subtotal calculates automatically
- FR6: Shop owners can apply a configurable markup percentage to the estimate total; markup amount displays as a separate line
- FR7: Shop owners can set an optional waste factor percentage per material line item; waste cost adds to that line's subtotal
- FR8: Shop owners can manually override the calculated value for any material line item without losing the underlying formula (override is flagged visually)
- FR9: Shop owners can add multiple material and labor line items to a single estimate, with running subtotal visible
- FR10: Shop owners can generate a professional PDF quote containing: shop logo, shop name and contact info, customer name, line-item breakdown with quantities/weights/prices, subtotal, markup, and total
- FR11: Shop owners can send a quote PDF to a customer via email directly from FabFlow without switching to a separate email client
- FR12: Shop owners can duplicate an existing quote as the starting point for a similar new estimate, preserving all line items

### Job Kanban & Tracking

- FR13: All workspace users can view the shared job Kanban board showing all active and recently completed jobs organized by stage (Quote, Approved, Material Ordered, In Production, Finishing, Ready for Pickup/Delivery, Invoiced)
- FR14: Any workspace user can move a job from one stage to the next via drag-and-drop on desktop or tap-to-advance on mobile
- FR15: Stage changes made by any workspace user appear on all other users' Kanban boards within 2 seconds without requiring a page refresh
- FR16: Workspace users can view and add notes to a job's notes field for production instructions or customer communication context
- FR17: Jobs display on the Kanban card: customer name, job title, estimated value, due date, and assigned workspace user
- FR18: Shop owners can assign a job to a specific workspace user and filter the Kanban board by assigned user
- FR19: Invoiced and archived jobs are removed from the active Kanban board and accessible in a searchable job archive
- FR20: Shop owners can search archived jobs by customer name, job title, or date range

### Invoicing & Deposits

- FR21: Shop owners can convert an approved quote to a deposit invoice with one action; deposit percentage (default: 40%) is configurable at the workspace level
- FR22: Deposit invoices display: shop name/contact, customer name/address, job reference, deposit amount, total job value, and balance due after deposit
- FR23: Shop owners can mark a deposit invoice as paid (manual confirmation in MVP), triggering the job to automatically advance to Approved stage on the Kanban
- FR24: Shop owners can generate a final invoice for a completed job; final invoice auto-populates with the total job value, credits the deposit amount paid, and shows the balance due
- FR25: Shop owners can send deposit and final invoice PDFs to customers via email directly from FabFlow
- FR26: Shop owners can view a list of all invoices with paid/unpaid status and filter by date range, customer, or status

### Customer Management

- FR27: Shop owners can create and edit customer records with: name, company name, phone, email, billing address
- FR28: Shop owners can view a customer's complete history of quotes, jobs, and invoices from the customer record
- FR29: Shop owners can search customers by name, company, or email

### Material Inventory

- FR30: Shop owners can log current stock levels for any material type and profile combination (e.g., "1/4" A36 plate: 340 lbs on hand")
- FR31: Shop owners can manually deduct a quantity from an inventory item when material is pulled for a job, with an optional job reference note
- FR32: Shop owners can set a low-stock alert threshold per inventory item; FabFlow displays an alert when stock falls below the threshold
- FR33: Shop owners can view a summary of all inventory items, current quantities, and which items are below their alert thresholds

### Workspace & User Management

- FR34: Workspace owners can invite team members by email address; invitees receive an email with a signup link valid for 7 days
- FR35: Workspace owners can assign roles to team members (Owner/Admin or Team Member) and revoke access for any user
- FR36: Workspace owners can upload a shop logo, set the shop name, and configure contact information used on PDF quotes and invoices
- FR37: Workspace owners can manage their subscription plan and billing details through Stripe-powered billing portal
- FR38: All workspace users can access the job Kanban, estimates, and customer list; only Owners/Admins can access billing, workspace settings, and user management

### Onboarding

- FR39: New users complete a guided setup that captures: shop name, logo, primary material types they work with, current price per pound for each selected material, and default markup percentage — before reaching any core feature
- FR40: FabFlow provides a "sample job" pre-populated in the Kanban on first login so new users can explore the product without creating data from scratch

## Non-Functional Requirements

### Performance

- Material weight calculation and estimate total update occurs within 300ms of the user entering or changing any dimension input — calculation must feel instantaneous, not delayed
- Quote and invoice PDF generation completes within 5 seconds of submission for standard estimates (up to 20 line items)
- Kanban board job stage changes are reflected across all workspace users within 2 seconds via Supabase Realtime (no manual refresh)
- Core application screens (Kanban board, quote list, customer list) achieve Time to Interactive under 2 seconds on standard broadband for workspaces with up to 500 active or archived jobs

### Security

- All data transmitted between browser and server via HTTPS/TLS 1.2+
- All workspace data queries enforce row-level security (RLS) at the Supabase/Postgres level using workspace_id — application-level filtering is secondary
- Customer PII (name, phone, email, address) and financial data (invoice amounts) stored only within the user's own workspace; no cross-workspace data access possible
- Session tokens stored in httpOnly cookies; not accessible via JavaScript
- PDF quote and invoice files stored in Supabase Storage with signed URLs valid for 24 hours — not publicly listable

### Reliability

- 99.5% monthly uptime for all core features (job Kanban, estimator, invoice generation) — fabrication shops open early and need the tool operational at the start of the workday
- Database backups retained for 30 days (Supabase managed backup)
- Graceful degradation: if Supabase Realtime connection drops (e.g., poor shop WiFi), Kanban falls back to manual refresh with a visible "live updates paused" indicator — users can still use all features

### Scalability

- Architecture supports 10,000 workspace accounts without architectural changes (Supabase Postgres + Vercel edge functions scale horizontally)
- Single workspace performance (job Kanban, estimate list) does not degrade with up to 5,000 archived jobs
- PDF generation handled via serverless function with auto-scaling — no queue required at MVP volume (< 1,000 concurrent active users)

### Accessibility

- Core application meets WCAG 2.1 Level AA for color contrast and keyboard navigation — shop offices often have older computers with basic monitors; high contrast is a practical requirement
- Kanban board tap targets on mobile are minimum 44×44 CSS pixels per WCAG touch target guidelines — floor workers use the mobile UI with work gloves
