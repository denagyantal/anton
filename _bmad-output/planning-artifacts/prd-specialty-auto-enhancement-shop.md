---
stepsCompleted: [step-01-init, step-02-discovery, step-02b-vision, step-02c-executive-summary, step-03-success, step-04-journeys, step-05-domain, step-06-innovation, step-07-project-type, step-08-scoping, step-09-functional, step-10-nonfunctional, step-11-polish, step-12-complete]
inputDocuments:
  - ideas/shortlisted/specialty-auto-enhancement-shop-software.md
  - _bmad-output/planning-artifacts/research/market-specialty-auto-enhancement-shop-research-2026-11-10.md
  - _bmad-output/planning-artifacts/product-brief-specialty-auto-enhancement-shop.md
workflowType: 'prd'
classification:
  projectType: saas_web_app
  domain: vertical_software
  complexity: medium
  projectContext: greenfield
date: '2026-11-11'
author: Root
project_name: 'ShopShield — Specialty Auto Enhancement Shop Software'
---

# Product Requirements Document - ShopShield: Specialty Auto Enhancement Shop Software

**Author:** Root
**Date:** 2026-11-11

## Executive Summary

The specialty auto enhancement market — PPF (paint protection film), window tint, ceramic coating, vinyl wrap — has approximately 20,000–30,000 US shops with no affordable, purpose-built management platform. Urable, the dominant CRM for this segment, was acquired by PE-backed Fullsteam in May 2025, triggering price increases to $70–$183/month and triggering a community-wide churn wave that is active right now. The 8–10 competitors that emerged post-acquisition all charge $99–$299/month. No full-stack solution exists under $70/month.

**ShopShield** is a flat-rate shop management platform for PPF, tint, ceramic, and wrap shops at $49/month — entering this exact price vacuum with a one-time $249 LTD (Lifetime Deal) on AppSumo as the primary acquisition lever. No auto enhancement shop management tool exists on AppSumo. The LTD channel for this vertical is completely uncrowded.

**Core differentiators:** (1) price leadership at $49/month vs. $99–$299/month for every full-stack alternative, (2) first-mover AppSumo LTD positioning in an uncrowded channel, (3) warranty certificate auto-generation critical for PPF/ceramic manufacturer compliance — table-stakes for shops offering STEK/Xpel/3M/Gyeon coverage, missing from lower-tier tools, (4) 3D PPF vehicle template library in Phase 2 — the single most-cited unmet need in the market, unbuilt by any competitor.

**Go-to-market:** Organic presence in organized PPF Facebook communities (10,000+ members) and YouTube creator channels, exploiting community distrust of PE-backed Urable. AppSumo LTD launch at Month 3 targeting 300+ buyers and $60K upfront capital. Launch window is Q4 2026–Q1 2027 — the peak of the Urable churn window.

**Revenue trajectory:** 500 subscribers at Month 12 = $24,500 MRR ($294K ARR). Path to $1.4M+ ARR at Month 24 with multi-bay tier upgrades and international expansion (UK/AU/CA).

### What Makes This Special

**Price leadership is structural, not temporary.** At $49/month flat, ShopShield is 50%+ cheaper than every purpose-built full-stack competitor. SalesThumb ($99–$599/month), Wraptor ($99–$199/month), Wrapstart ($199–$299/month) — none can match this price point without destroying their revenue models. ShopShield enters at the market's exact pain point: shops that know they need purpose-built software but cannot justify $100–$200/month for a 1–3 bay operation.

**Warranty certificate generation is the category-defining MVP feature.** PPF and ceramic coating shops that honor manufacturer warranties (STEK, Xpel, 3M, Gyeon) are legally obligated to issue warranty documentation at job delivery. Currently done in Word templates or not at all — a liability in every dispute. ShopShield auto-generates a branded PDF cert at job completion (VIN, service, install date, warranty terms, shop logo) and emails it to the customer. No lower-tier competitor (RINZ at $9.99/month, TintWiz, DetailPilot) ships this. It is the product's immediate proof-of-ROI in the trial period.

**The 3D PPF vehicle template library is the Phase 2 defensible moat.** PPF quoting currently takes 30+ minutes per job in Excel and Word — selecting zones (front end, full hood, full car), calculating film consumption, pricing by grade. No competitor has shipped a visual vehicle template library. ShopShield's Phase 2 roadmap delivers this in partnership with existing template providers (DAP Templates, STEK Pattern Portal), cutting quote time to under 5 minutes. This becomes the reason a satisfied SalesThumb user switches, and the reason a prospect chooses ShopShield over every incumbent.

**Community positioning as the independent alternative.** The specialty shop community actively discusses Urable's PE acquisition in Facebook groups. The phrase "Urable sold out" appears in every Urable-related thread. ShopShield enters as installer-first, independent software — a positioning Fullsteam cannot reclaim. This is not an advertising claim; it is an authentic founding story that the community will amplify.

## Project Classification

- **Project Type:** SaaS Web App (browser-first, mobile-responsive for on-floor technician use)
- **Domain:** Vertical software (specialty auto enhancement shop management — PPF, tint, ceramic, wrap)
- **Complexity:** Medium — standard CRUD for job cards/invoicing, photo storage, PDF cert generation, Stripe for bookings/subscriptions, embeddable booking widget. Customer PII, VINs, and payment data require security attention. No regulated compliance requirements beyond PCI-DSS for payment processing.
- **Project Context:** Greenfield — new product built from scratch

## Success Criteria

### User Success

- **Warranty Certificate Adoption:** 70%+ of active paying shops generate at least one warranty cert within their first 14 days. Measured by: cert PDFs generated ÷ active shops. If shops are not using the core differentiator, the value proposition is not landing.
- **Online Booking Deposit Capture:** 50%+ of active shops collect at least one deposit via the online booking widget within 30 days. Measured by: shops with ≥1 Stripe deposit ÷ active shops. First deposit = proof-of-ROI moment that drives trial-to-paid conversion.
- **Job Photo Compliance:** 90%+ of delivered jobs (status = "Delivered") have at least one before photo and one after photo attached. Measured by: jobs with photos ÷ total delivered jobs per shop. Protects shops in warranty disputes; feeds social media.
- **Daily Workflow Integration:** 80%+ of active shops log in at least 5 days per week at Month 3. Measured by: active session days ÷ 5. Indicates daily operational dependency, not just billing-forced retention.
- **Multi-Stage Job Tracking Adoption:** 100% of active shops have at least one job progressing through the stage pipeline in any given week. If shops are creating jobs but not updating stages, they are not replacing their Urable workflow.
- **Inventory Waste Reduction:** Shops using inventory tracking report ≤20% variance between ordered PPF footage and consumed footage within 90 days. Measured via inventory usage logs.

### Business Success

| Milestone | Target | Timing |
|-----------|--------|--------|
| Beta launch (paying shops) | 30 active paying shops | Month 1–2 |
| NPS from beta users | > 50 | Month 2 |
| AppSumo LTD launch | 300+ LTD purchases at ~$200 avg | Month 3 |
| LTD capital raised | $60K+ | Month 3 |
| Monthly subscribers | 100 paying | Month 6 |
| MRR | $4,900/month | Month 6 |
| AppSumo star rating | ≥ 4.5 stars | Month 6 |
| Warranty certs generated | 2,000+ | Month 6 |
| Monthly subscribers | 500 paying | Month 12 |
| MRR | $24,500/month | Month 12 |
| Monthly churn | < 3% | Month 12 |
| International revenue share | 10%+ of MRR | Month 18 |
| Monthly subscribers | 2,000+ | Month 24 |
| MRR | $120,000+ | Month 24 |

**Strategic objectives:**
- Own "Urable alternative" Google search intent before the churn window closes (Q4 2026–Q1 2027)
- Establish ShopShield as the default recommendation in PPF Facebook groups (PPF Installers Network, Window Film Professionals, Ceramic Coating Business)
- Achieve AppSumo Featured Deal or Editor's Choice for maximum organic reach
- Accumulate 10,000+ warranty certs generated as social proof metric for Year 2 marketing

**Leading indicators to track monthly:**
- Organic mentions in PPF Facebook groups (community trust signal — cannot be bought)
- Trial-to-paid conversion rate (target: 25%+)
- Trial signup source distribution (Facebook group vs. YouTube vs. organic SEO)

### Technical Success

- **Data durability:** Zero job record, photo, or warranty cert loss incidents in production. Any data loss destroys community reputation in a word-of-mouth-driven GTM.
- **Uptime:** 99.5%+ monthly uptime. Shop owners check the job board at shop open and close — downtime during business hours is a support crisis.
- **Photo storage:** 10GB per shop base plan, enforced with usage warnings at 8GB. S3-compatible storage must be cost-effective at scale ($0.023/GB on AWS S3 Standard — 10GB per shop = $0.23/shop/month at base).
- **Stripe reliability:** 100% of deposit transactions must either complete or fail atomically — no partial charges. Booking deposit collection is the single highest-stakes user interaction.
- **PDF cert generation:** Warranty cert PDF generated and emailed within 60 seconds of job status change to "Delivered." Any longer and the shop owner must manually trigger — friction destroys adoption.

### Measurable Outcomes

The MVP is validated and ready to scale past the LTD launch when all five criteria are met simultaneously, with ≥30 active paying shops:

1. Trial conversion ≥ 25% — 1 in 4 trial shops converts to paid within 14 days
2. Warranty cert adoption ≥ 70% among active shops
3. Online booking deposit capture at ≥50% of active shops
4. NPS ≥ 50 from first 50 customers
5. Zero critical data loss incidents

**Go/no-go for AppSumo launch:** All 5 criteria met before submitting AppSumo application. AppSumo requires demonstrated product-market fit — submitting without it risks a poor launch and wasted community capital.

## Product Scope

### MVP — Minimum Viable Product (Phase 1, Weeks 1–6)

The MVP is the minimum needed to replace Urable's core workflow for a 1–5 bay specialty shop. Each feature directly replaces a workflow that currently requires Urable, Word, Google Sheets, or Square.

**Core Capabilities:**

1. **Multi-stage job card** — Each job flows through defined stages: Deposit Collected → Materials Ordered → Installation Scheduled → Installation In Progress → Quality Check → Ready for Delivery → Delivered. Timestamped transitions. Kanban-style board view by stage. Mobile-accessible for technician stage updates.

2. **Before/after photo documentation** — Photo gallery per job. Upload from mobile (on the shop floor) or desktop. Before photos at intake; after photos at QC or delivery. Associated with vehicle VIN. 10GB storage limit per shop.

3. **Warranty certificate auto-generation** — One-click PDF at job completion. Certificate includes: shop logo, customer name, vehicle (year/make/model/VIN), service type (PPF brand/grade or ceramic brand/tier or tint brand/shade), installation date, warranty period, and installer certification number. Auto-emailed to customer. Stored on job record. Shop configures warranty language per service type.

4. **Customer vehicle history** — Customer profiles linked to vehicle records (VIN-based). Each vehicle shows all historical jobs, warranty status, and photo gallery. Searchable by customer name, VIN, or license plate. Becomes switching cost moat — 90 days of history = retention.

5. **Basic inventory tracking** — PPF rolls tracked by brand, type (TPU/PVC), width, and remaining footage. Tint film tracked by brand, shade %, and roll quantity. Low-stock alerts below configurable threshold. Usage logged per job. No purchase order generation in MVP.

6. **Online booking + deposit collection** — Embeddable widget (iframe) for shop website, or standalone ShopShield-hosted booking page. Customer selects service type, preferred dates, provides vehicle info, pays deposit (configurable: flat $X or % of estimated job value) via Stripe. Job auto-created from booking. Confirmation email to customer; notification to shop owner.

### Growth Features (Post-MVP, Phase 2, Months 3–6)

- **3D PPF vehicle template library** — Visual vehicle selector (make/model/year → coverage zones → film grade → instant price quote). Partnerships with DAP Templates and STEK Pattern Portal. Cuts PPF quote time from 30+ minutes to under 5 minutes. Highest-priority Phase 2 feature; becomes headline feature at SEMA 2027.
- **Multi-day bay/technician scheduling view** — Weekly calendar showing vehicles across bays by installation phase. Resource conflict detection. Required for Dana (4-bay) persona growth.
- **Automated maintenance reminder sequences** — Triggered by install date + warranty period. 12-month PPF check-in, 2-year ceramic maintenance. Drives rebooking revenue.
- **Urable data migration tool** — One-click import of jobs, customers, vehicle records, and warranty history from Urable CSV export. Reduces switching friction for shops in the active churn window.

### Vision (Future, Phase 3–4, Months 6–24)

- Multi-location support (franchise and chain shops, higher ARPU)
- Commission tracking for installers (makes ShopShield the HR system for multi-tech shops)
- Advanced analytics (margin by service type, installer efficiency, revenue trends)
- Supplier integration (Xpel, STEK, 3M distributor order connections)
- International expansion: UK, AU, CA (VAT/GST tax support, local Stripe integration)
- Payment processing markup / revenue share layer (requires payment facilitator licensing)
- Manufacturer warranty registry (STEK/Xpel/Gyeon warranty claims managed through ShopShield as authorized installer portal)

**Explicit MVP exclusions (deferred to protect Q4 2026 launch timing):**

| Feature | Rationale |
|---------|-----------|
| 3D PPF vehicle templates | Requires vehicle data partnerships; flat-package pricing covers 80% of the need |
| Multi-day bay scheduling | Job card stage view handles 80% of this need |
| Automated maintenance reminders | Manual trigger acceptable in MVP |
| Supplier order management | Inventory visibility is the core need |
| Multi-location support | Significant data model complexity |
| Advanced reporting | Not blocking adoption |
| International tax support | UK/AU/CA is Month 9–18 priority |
| AI photo-to-estimate | Phase 4 |

## User Journeys

### Journey 1: Marcus — Solo PPF Installer, First Week on ShopShield

**Opening Scene:** Marcus runs a 1-bay PPF and ceramic shop out of a leased bay. He earns $800–$2,500 per install, 2–3 jobs per week. He uses Google Sheets for scheduling, Square for payments, and Word for warranty certificates — his "three-app nightmare." He asks in the PPF Installers Network Facebook group: "What is everyone using now that Urable went PE?" He gets 47 replies. One reply links to ShopShield: "$49/month, warranty certs included, 14-day free trial." He clicks.

**Rising Action:** Marcus signs up, skips the marketing site entirely, and lands in onboarding. In 20 minutes he: (1) adds his services and pricing (Full PPF, Ceramic Pro Level, Window Tint), (2) sets his booking page with a $500 deposit requirement for PPF jobs, (3) creates a sample job manually to see the stage flow, (4) generates a sample warranty cert with his shop logo uploaded. The cert PDF looks more professional than the Word template he's been sending for three years.

He shares his booking page link in an Instagram bio update. That afternoon, a customer books a full PPF install on a BMW M3 and pays the $500 deposit. Marcus gets a push notification. He opens ShopShield on his phone, sees the booking, and moves the job to "Materials Ordered" after calling his Xpel distributor.

**Climax:** Four days later, the job is complete. Marcus updates the stage to "Delivered" on his phone. ShopShield immediately generates the STEK warranty cert PDF and emails it to the customer. The customer replies: "This is way more professional than I expected." Two weeks later, the customer disputes minor yellowing near a mirror edge. Marcus opens ShopShield, pulls up the job, shares the timestamped before/after photos and the warranty cert. The dispute is resolved in 10 minutes. No argument. No liability.

**Resolution:** Marcus converts to paid after his trial. He cancels Google Sheets, Square (keeping it only for walk-in payments), and Word warranty templates. His three-app nightmare becomes one app. He posts in the Facebook group: "ShopShield replaced everything I was using for $49/month. Warranty certs are automatic. Book your demo."

**Journey reveals requirements for:** Online booking with Stripe deposit, multi-stage job card with mobile updates, before/after photo storage, warranty cert PDF auto-generation with shop logo, push/email notifications, customer vehicle history.

---

### Journey 2: Dana — 4-Bay Shop Owner, Switching from Urable

**Opening Scene:** Dana runs a 4-bay shop with 2 full-time installers and an office manager. Annual revenue: ~$1.1M. She manages job scheduling on a whiteboard and spends 30–40 minutes daily on administrative tasks. She's been on Urable for two years. After the Fullsteam acquisition, her bill jumped to $183/month and a support ticket went unanswered for 11 days. She starts evaluating alternatives.

**Rising Action:** Dana finds ShopShield through a YouTube comparison video. The $49 vs. $99–$183 price differential is the entry point, but she is not going to switch without a full evaluation. She signs up for the trial with skepticism — she has 847 jobs, 400+ customer records, and 2 years of warranty certs in Urable. The thought of migrating that data manually stops most switches.

She tests inventory tracking first because it is her biggest pain point: she has had two PPF installs delayed by stockouts because she could not see her roll consumption pattern. She adds her current PPF inventory (8 rolls across 3 brands and 3 widths), sets low-stock alerts, and enters usage for three completed jobs. The dashboard shows her 36" TPU roll is below threshold. She checks her Xpel order history — she was right to worry, she's been over-ordering that roll for six months.

**Climax:** Dana assigns both installers to jobs in ShopShield. For the first time, her installers can see their queue and update job stages without calling the front desk. Her office manager tracks all jobs on the board view — no more whiteboard. Dana checks her phone after a client dinner and sees both afternoon jobs have moved to "QC" without her doing anything.

**Resolution:** Dana commits to the annual plan ($89/month for her 4-bay tier). She refers two shop owners from her installer network that week. She tells them: "I lost $7,000 last year in PPF roll waste I couldn't see. That alone pays for ShopShield for 7 years." ShopShield acquires 2 referral customers from one committed user.

**Journey reveals requirements for:** Multi-tier pricing (bay-based), inventory usage logging per job, low-stock alerts, team role permissions (installer vs. owner), multi-job board view, referral tracking, annual subscription option.

---

### Journey 3: Tyler — Tint + PPF Expansion Shop, Escaping Two-System Chaos

**Opening Scene:** Tyler runs a 2-bay window tint shop that added PPF two years ago. TintWiz ($150/month) handles tint; Excel handles PPF. The two-system workflow "works until it doesn't" — he missed a PPF warranty cert deadline last month because Excel doesn't send reminders. He searches "TintWiz alternative PPF" and finds a ShopShield comparison page.

**Rising Action:** Tyler signs up during his lunch break. He creates his service menu: window tint (by vehicle type and shade %), PPF (front end, full hood, full car), ceramic (Pro, Silver). He uploads his shop logo, sets warranty language for each service, and customizes his booking page with his standard deposit requirements. Everything is in one system.

**Climax:** His first PPF job booked through ShopShield. Customer books, pays $300 deposit, job flows into the stage board. At delivery, Tyler updates to "Delivered" and the warranty cert is auto-generated and emailed. It is the first time he has sent a professional-looking PPF warranty cert without manually editing a Word file.

**Resolution:** Tyler cancels TintWiz at his next billing date. He saves $101/month immediately. He posts a TikTok showing his booking page and warranty cert flow. 3 shops in his area DM him asking what software it is.

**Journey reveals requirements for:** Service menu with per-service warranty language, custom warranty templates, branded booking page, mobile-responsive warranty cert, one-platform handling of mixed service types.

---

### Journey 4: Installer Technician (Secondary User) — On-Floor Job Updates

**Opening Scene:** Carlos is a full-time installer at Dana's 4-bay shop. He works from 8am to 6pm, has no access to Dana's desktop computer, and updates job status by texting Dana. Dana loses 15 minutes per day to these texts.

**Rising Action:** Dana adds Carlos to ShopShield with installer-level access. He gets a mobile-optimized job view showing only the jobs assigned to him. He can see: vehicle, service type, current stage, and next required action. He cannot see pricing, revenue, or customer contact details.

**Climax:** Carlos completes the installation on a Range Rover hood PPF at 2:30pm. He taps the job on his phone, moves it to "QC Ready," and attaches two after-installation photos directly from his camera roll. Dana sees the stage update on her phone via notification. The front desk calls the customer automatically via the stage-trigger SMS: "Your Range Rover is in QC — almost ready!"

**Resolution:** Dana's daily admin interruptions from technicians drop by 80%. Carlos updates job stages 3–5 times per day without leaving the shop floor.

**Journey reveals requirements for:** Role-based access control (installer vs. owner/admin), mobile-first job view filtered by assignee, stage updates from mobile, photo upload from mobile, automated stage-trigger SMS to customers, installer-restricted view (no pricing/revenue).

---

### Journey 5: Customer Self-Serve (Tertiary User) — Booking and Warranty Portal

**Opening Scene:** A customer's Tesla Model 3 is due for a 2-year ceramic coating maintenance visit. He booked the original install through ShopShield's booking page. He receives an automated reminder email 30 days before the 2-year anniversary of his install date.

**Rising Action:** The customer clicks the link in the email, lands on the shop's ShopShield booking page, and books the maintenance service with a $150 deposit.

**Climax:** After the maintenance service, he receives a new warranty cert PDF via email. He now has two warranty certs for his Tesla in his inbox — the original ceramic install and the maintenance update. If he sells the car, he has documented proof of service history.

**Resolution:** The customer refers two coworkers who both own luxury vehicles. The shop owner attributes the referrals to the professional warranty documentation — something no Urable migration notice warned him he would miss.

**Journey reveals requirements for:** Automated maintenance reminder emails (triggered by install date + warranty period), customer-facing booking portal, customer warranty cert email at job delivery, warranty cert with VIN-linked service history.

### Journey Requirements Summary

| Capability | Journeys | Priority |
|-----------|---------|---------|
| Multi-stage job card with mobile updates | 1, 2, 4 | MVP Critical |
| Before/after photo storage per job | 1, 4 | MVP Critical |
| Warranty cert PDF auto-generation | 1, 3, 5 | MVP Critical |
| Online booking + Stripe deposit | 1, 3 | MVP Critical |
| Customer vehicle history (VIN-based) | 1, 2 | MVP Critical |
| Basic inventory tracking | 2 | MVP Critical |
| Role-based access (installer vs. owner) | 4 | MVP Critical |
| Stage-trigger automated SMS/email | 4, 5 | MVP Phase 1b |
| Automated maintenance reminders | 5 | Phase 2 |
| Multi-bay scheduling view | 2 | Phase 2 |

## SaaS B2B Specific Requirements

### Multi-Tenancy Model

Each shop is an isolated tenant. Data isolation is strict: job records, customer records, photos, inventory, and warranty certs are tenant-scoped and never visible across shops. Shared infrastructure; isolated data.

**Tenant data model:**
- Shop (tenant root): name, address, logo, subscription tier, Stripe customer ID
- Users: 1 owner per shop at base tier; additional users (installers, office managers) at all tiers
- VINs, job records, inventory, certs: all shop-scoped with foreign key to shop ID

### Role-Based Access Control (RBAC)

Three roles in MVP:

| Role | Access |
|------|--------|
| **Owner** | Full access — all jobs, pricing, revenue, settings, inventory, billing |
| **Manager** | Jobs + customer records + inventory; no billing, no pricing changes |
| **Installer** | Assigned jobs only — view, stage updates, photo upload; no pricing, no customer contacts |

Phase 2 adds custom roles.

### Subscription Tiers

| Tier | Price | Bays | Users |
|------|-------|------|-------|
| Solo | $49/month | 1–3 | 2 (owner + 1) |
| Multi-Bay | $89/month | 4–10 | 5 (owner + 4) |
| LTD AppSumo | $249 one-time | 1–3 bays | 2 | Lifetime updates |

Annual billing option: 20% discount (Solo = $39.20/month billed annually; Multi-Bay = $71.20/month billed annually).

### Key Integrations (MVP)

| Integration | Purpose | Priority |
|-------------|---------|---------|
| **Stripe** | Booking deposits (Stripe Checkout) + subscription billing (Stripe Billing) | MVP Critical |
| **Resend or Postmark** | Transactional email (warranty certs, booking confirmations, stage notifications) | MVP Critical |
| **AWS S3** (or compatible) | Photo storage, warranty cert PDF storage | MVP Critical |
| **pdf-lib or Puppeteer** | Warranty cert PDF generation | MVP Critical |

### Embeddable Booking Widget

The booking widget must be embeddable via a single `<script>` tag or `<iframe>` on any shop website (Squarespace, Wix, WordPress, bare HTML). The widget renders the shop's service menu, available booking slots (manual slot management in MVP), and deposit collection via Stripe Checkout. No redirect to a ShopShield-branded page — the widget loads in the shop's existing site.

### Data Portability (Anti-Lock-In Trust Signal)

Shop owners must be able to export all their data at any time in standard formats:
- Jobs: CSV export (all fields including stage history)
- Customers + vehicles: CSV export
- Warranty certs: ZIP archive of all cert PDFs
- Photos: ZIP archive by job

This is an explicit anti-Fullsteam trust signal. It must be surfaced in the product, not buried in settings.

### Onboarding Flow

Target: First "aha!" moment in under 20 minutes.

1. Add services and pricing (3 minutes)
2. Upload shop logo, set warranty language per service (5 minutes)
3. Set up booking page with deposit amount (5 minutes)
4. Create first sample job, walk through stage flow (5 minutes)
5. Generate sample warranty cert — first visible deliverable

No credit card required for 14-day trial. Card required at conversion.

## Innovation & Novel Patterns

### Detected Innovation Areas

**Warranty Certificate Auto-Generation as a Compliance Tool (Immediate MVP Innovation)**

The auto-generated warranty cert is not a minor feature — it is ShopShield's category-defining proof-of-value. No sub-$70/month tool ships this. It converts a legally significant manual process (10–15 minutes in Word per job) into a 60-second automated output. For shops offering manufacturer-backed warranties (STEK, Xpel, 3M, Gyeon), the cert is evidence in every warranty claim. Getting this right — professional format, VIN-linked, stored + searchable — creates an immediate and defensible moat against lower-tier competitors.

**3D PPF Vehicle Template Library (Phase 2 Defensible Innovation)**

The most-cited unmet need in the entire market is a visual vehicle template for PPF quoting. No competitor has shipped it. The innovation: rather than building a vehicle template database from scratch, ShopShield partners with existing template providers (DAP Templates, STEK Pattern Portal) to surface a visual zone-selection interface. Shop owner selects vehicle → coverage zones → film grade → price generated from shop's rate card. This is a workflow revolution for PPF — 30-minute manual Excel jobs become 5-minute quoted jobs. The defensibility: competitor codebases are not architected for visual template selection; ShopShield designs the data model for this from day one.

### Market Context & Competitive Landscape

No auto enhancement shop management tool exists on AppSumo. The closest category on AppSumo is general field service management, which does not address warranty cert generation, PPF inventory, or multi-stage install workflows. First-mover LTD positioning in this channel is a durable advantage as long as the LTD is launched before any competitor discovers the channel (target: Month 3).

The 3D template gap: queried across STEK community forums, Xpel distributor pages, and PPF Installers Network — zero instances of any competitor announcing a 3D vehicle template feature. SalesThumb ($99–$599/month) is the closest full-stack competitor; their quoting workflow is manual flat-entry. Wraptor focuses on wrap shops specifically. The gap is real and current as of November 2026.

### Validation Approach

**Warranty cert:** Validate in beta that shops generate certs for 70%+ of delivered jobs without prompting. Zero-prompt adoption of the feature means it is genuinely useful and not just present.

**3D PPF templates (Phase 2):** Pre-validate before building. After 300 LTD customers onboard, survey: "How long does a PPF quote take you today?" + "Would a visual vehicle template cut that time?" If 60%+ answer "yes" and quote time ≥20 minutes, build. Avoid building based on assumption.

### Risk Mitigation

**Vehicle template data partnerships:** If DAP/STEK Pattern Portal partnerships are unavailable or expensive, Phase 2 fallback is community-contributed templates (shops upload their own cut files, shared with the ShopShield library). Slower to scale but zero partnership dependency.

**LTD sustainability:** AppSumo LTD success creates obligation — lifetime customers must receive ongoing value. Mitigation: LTD is capped at 1–3 bays/2 users. Shops that grow to 4+ bays must upgrade to Multi-Bay tier ($89/month). LTD is an acquisition lever, not a cap on revenue from growing customers.

## Project Scoping & Phased Development

### MVP Strategy & Philosophy

**MVP Approach:** Revenue-first MVP. The MVP is not about validating that shop owners need software — Urable's paying customer base validated that years ago. The MVP must generate enough revenue signal (trial-to-paid conversion + LTD purchases) within 90 days to justify continued development investment and time the AppSumo launch correctly.

The boundary rule for MVP scope: If a feature doesn't directly (1) replace a workflow Marcus or Dana currently does in Urable, or (2) provide something Urable explicitly failed to deliver (warranty certs, affordable pricing), it waits.

**Resource Requirements:** 1 full-stack developer (React/Node/PostgreSQL) + 1 designer (part-time) + 1 founder/PM. No dedicated QA in MVP — developer testing + 5 beta shop owners as QA partners. 4–6 weeks build time for MVP core.

### MVP Feature Set (Phase 1)

**Core User Journeys Supported:**
- Marcus (solo installer): Full booking → install → warranty cert delivery workflow
- Dana (multi-bay): Job board view, inventory tracking, team role assignment
- Tyler (mixed services): Unified workflow for tint + PPF + ceramic in one platform

**Must-Have Capabilities:**
1. Multi-stage job card (6 stages, Kanban board, mobile-accessible)
2. Before/after photo documentation per job (mobile upload, 10GB storage)
3. Warranty cert auto-generation (PDF, auto-emailed, logo + VIN + service data)
4. Customer vehicle history (VIN-based, all jobs + warranty status)
5. Basic inventory tracking (PPF rolls + tint film, low-stock alerts)
6. Online booking + deposit collection (embeddable widget, Stripe)
7. RBAC (owner/manager/installer roles)
8. Data export (CSV + PDF/ZIP for all shop data)
9. 14-day free trial, Stripe-based subscription billing

### Post-MVP Features

**Phase 2 (Months 3–6):**
- 3D PPF vehicle template library (highest value; requires DAP/STEK partnership)
- Multi-day bay scheduling view (weekly calendar across bays)
- Automated maintenance reminder email sequences
- Urable data migration tool (CSV import for jobs/customers/vehicles/warranties)
- Stage-trigger automated SMS notifications to customers

**Phase 3 (Months 6–12):**
- Multi-location support
- Commission tracking for installers
- Advanced analytics (margin by service, installer efficiency, revenue trends)
- Supplier integration (Xpel, STEK distributor order connections)
- API access for shops wanting to build custom integrations

**Phase 4 (Months 9–18):**
- International expansion (UK/AU/CA) — VAT/GST/HST support, local Stripe integration, STEK UK/Xpel AU distributor partnerships
- Payment processing markup / revenue share layer
- Manufacturer warranty registry (STEK/Xpel/Gyeon authorized installer portal)

### Risk Mitigation Strategy

**Technical Risks:**
- **PDF cert generation at scale:** Use pdf-lib (pure JS, no headless browser dependency) for cert generation. If layout complexity increases for Phase 2, upgrade to Puppeteer with pre-rendered HTML templates. Keep cert generation synchronous for MVP (60-second SLA).
- **Photo storage costs:** Enforce 10GB per shop hard limit with pre-upload size warnings. Compress images to ≤2MB on upload (quality preserved for warranty evidence). Revisit storage pricing at 500 shops.

**Market Risks:**
- **Urable churn window closes:** 12–24 months of maximum churn post-acquisition is the window. If ShopShield launches Q4 2026, the peak window (Months 6–18 post-acquisition = November 2025–May 2026) has partially passed. The window is still active but narrowing. Mitigation: launch with no delay; prioritize speed over perfection.
- **SalesThumb price reduction:** If SalesThumb cuts to $49/month, ShopShield's price moat is gone. Mitigation: price moat alone is never the strategy — warranty certs + 3D templates + community positioning are the durable differentiators.

**Resource Risks:**
- **Single developer:** MVP with one developer requires strict scope discipline. The boundary rule (replace Urable workflows only) is the safeguard. If scope creeps, delay increases and the churn window narrows.
- **LTD over-success:** If the AppSumo LTD sells 1,000+ copies, server + storage costs scale before MRR does. Mitigation: LTD cap at 1–3 bays / 2 users. If LTD launch goes viral, pause after 500 and evaluate.

## Functional Requirements

### Job Management

- FR1: Shop owners can create a job with customer name, vehicle (year/make/model/VIN), service type, estimated price, and assigned installer
- FR2: Shop owners and installers can move a job through predefined stages (Deposit Collected, Materials Ordered, Installation Scheduled, Installation In Progress, Quality Check, Ready for Delivery, Delivered)
- FR3: Shop owners can view all active jobs on a Kanban board grouped by stage
- FR4: Installers can view only their assigned jobs in a mobile-optimized list view
- FR5: Shop owners can view the full stage history (timestamps + actor) for any job
- FR6: Shop owners can add notes to any job at any stage
- FR7: Shop owners can search jobs by customer name, vehicle VIN, or license plate
- FR8: Shop owners can filter the job board by service type, installer, or date range

### Photo Documentation

- FR9: Shop owners and installers can upload photos to any job from a mobile device or desktop
- FR10: Photos can be tagged as "before" or "after" with the tagging defaulting to "before" before the Installation In Progress stage and "after" thereafter
- FR11: Shop owners can view all photos for a job in a gallery view with timestamps
- FR12: Shop owners can download all photos for a job as a ZIP archive
- FR13: The system enforces a 10GB storage limit per shop with visible usage indicators and warnings at 80% and 95% capacity

### Warranty Certificate Management

- FR14: Shop owners can configure warranty certificate templates per service type (PPF, ceramic, tint, wrap) including warranty period, terms language, and applicable manufacturer certifications
- FR15: The system auto-generates a branded warranty cert PDF when a job status changes to "Delivered"
- FR16: Generated warranty cert PDFs include: shop logo, shop name/address, customer name, vehicle (year/make/model/VIN), service type and product details (brand/grade/shade), installation date, warranty expiration date, and installer name
- FR17: The system auto-emails the warranty cert PDF to the customer's email address at job delivery
- FR18: Shop owners can manually trigger warranty cert regeneration and re-send for any delivered job
- FR19: Shop owners can view and download all warranty certs generated by their shop, searchable by VIN or customer name

### Customer & Vehicle History

- FR20: Shop owners can create and manage customer profiles with name, email, phone, and linked vehicles
- FR21: Shop owners can link multiple vehicles to a single customer and multiple jobs to each vehicle
- FR22: Vehicle records include year/make/model/VIN and display all associated jobs, warranty status, and photos
- FR23: Shop owners can search customers by name, email, phone, or VIN
- FR24: Customers receive an email link to view their vehicle's service history and warranty certs (read-only customer portal)

### Online Booking & Deposits

- FR25: Shop owners can configure their service menu (service name, description, base price, deposit amount, estimated duration) for use in the booking widget
- FR26: The booking widget is embeddable on any website via `<iframe>` or script tag and loads within the shop's existing page without redirect
- FR27: Customers can book appointments by selecting service, preferred date/time slot, and providing vehicle info (year/make/model) and contact details
- FR28: Customers pay a deposit via Stripe Checkout at time of booking; booking is confirmed only after successful payment
- FR29: Shop owners receive an email and in-app notification for each new booking
- FR30: A job is automatically created in the shop's ShopShield account for each completed booking, pre-populated with customer info and service details
- FR31: Shop owners can configure available booking time slots manually (calendar-based availability in MVP)

### Inventory Management

- FR32: Shop owners can add PPF roll inventory records with brand, type (TPU/PVC), width (in inches), total footage at purchase, and remaining footage
- FR33: Shop owners can add tint film inventory records with brand, shade %, and roll quantity
- FR34: Shop owners can log material usage per job (PPF footage consumed, tint rolls used)
- FR35: Shop owners can configure low-stock alert thresholds per inventory item
- FR36: The system surfaces low-stock alerts on the shop dashboard when any item falls below its threshold
- FR37: Shop owners can view inventory usage history to identify consumption patterns

### Team & Access Management

- FR38: Shop owners can invite additional users (managers, installers) to their shop account via email
- FR39: Shop owners can assign roles to users: Owner, Manager, or Installer
- FR40: Access is scoped by role: Owners have full access; Managers can access jobs, customers, and inventory but not billing or shop settings; Installers can only view and update assigned jobs and upload photos
- FR41: Shop owners can deactivate or remove users from their shop account

### Subscription & Billing

- FR42: Shop owners can sign up for a 14-day free trial without providing a credit card
- FR43: Shop owners can subscribe to Solo ($49/month, 1–3 bays) or Multi-Bay ($89/month, 4–10 bays) plans via Stripe Billing
- FR44: Shop owners can upgrade from Solo to Multi-Bay tier at any time with prorated billing
- FR45: Shop owners can view their billing history and download invoices from their account settings

### Data Portability

- FR46: Shop owners can export all jobs (all fields + stage history) as a CSV file at any time
- FR47: Shop owners can export all customer and vehicle records as a CSV file at any time
- FR48: Shop owners can download all warranty cert PDFs as a ZIP archive at any time
- FR49: Shop owners can download all job photos as a ZIP archive organized by job at any time

## Non-Functional Requirements

### Performance

- **Page load:** Initial page load ≤ 3 seconds on a mobile device on 4G. Shop owners check the job board from their phone between installs — slow load = not checking.
- **Stage update latency:** Job stage changes reflect in the shop owner's view within 1 second of an installer updating on mobile. Real-time is not required; near-real-time is.
- **Warranty cert generation:** PDF generated and emailed within 60 seconds of job status change to "Delivered." Measured as a service-level metric; alert if P95 exceeds 90 seconds.
- **Booking widget load:** The embeddable booking widget renders within 2 seconds on a standard broadband connection. Slow widget = customer abandonment.
- **Photo upload:** A 2MB photo (post-compression) uploads and attaches to a job within 5 seconds on 4G.

### Security

- **Data encryption:** All data encrypted at rest (AES-256 or equivalent at the storage layer) and in transit (TLS 1.2+). VINs, customer PII (name, email, phone), and payment-related records are sensitive.
- **Payment handling:** ShopShield never stores raw card data. All payment flows use Stripe-hosted elements (Checkout, Payment Element). PCI-DSS SAQ A compliance is the target — lowest-burden tier for SaaS using Stripe-hosted payment pages.
- **Authentication:** Email + password login with bcrypt-hashed passwords. Magic link (passwordless email) as an alternative at launch. MFA optional at launch; required for Multi-Bay tier shops at Phase 2.
- **Session security:** JWT-based session tokens with 24-hour expiry and refresh token rotation. Sessions invalidated on logout and password change.
- **Tenant isolation:** All database queries must include shop_id filtering enforced at the ORM/query-builder layer, not the application layer. Cross-tenant data access is a critical security failure.
- **Photo access:** Job photos served via pre-signed S3 URLs with short expiry (15 minutes). No public-readable photo buckets.

### Scalability

- **Initial target:** Support 2,000 shops with 50 concurrent active users each (100,000 concurrent sessions) with no performance degradation by Month 24.
- **Stateless API:** API servers are stateless (no session state server-side) to enable horizontal scaling behind a load balancer.
- **Database:** PostgreSQL with read replicas as needed. Connection pooling via PgBouncer. Partition job/photo tables by shop_id at scale.
- **Photo storage:** AWS S3 or equivalent object storage. No file system storage. Bucket lifecycle policies to move photos older than 2 years to infrequent-access storage tier (cost containment).
- **Cron/async jobs:** Warranty cert generation, reminder emails, and low-stock alerts run via a job queue (BullMQ or similar). Never blocking the web request lifecycle.

### Reliability

- **Uptime:** 99.5%+ monthly uptime. Shop owners check the job board at shop open (7–8am) and shop close (5–7pm). Scheduled maintenance outside these windows.
- **Backup:** Daily automated database backups retained for 30 days. Point-in-time recovery to within 1 hour.
- **Data loss:** Zero tolerance for job record, photo, or warranty cert data loss. These are legally significant records for shops that honor manufacturer warranties.

### Integration

- **Stripe:** Stripe Checkout for one-time deposits; Stripe Billing for recurring subscriptions. Webhook handling for payment events (booking confirmed, subscription renewed, payment failed). Idempotency keys on all Stripe API calls.
- **Email delivery:** Transactional email via Resend or Postmark (not Sendgrid — better developer experience, simpler API for small-scale transactional). Delivery confirmation tracked; retry on failure. All emails from shop's configured "from" domain if custom domain is configured.
- **S3-compatible storage:** AWS S3 in production; S3-compatible API (MinIO) for local development. No vendor lock-in on storage at the application level.

### Accessibility

ShopShield's primary users are non-technical shop owners accessing the platform on desktop and mobile. WCAG 2.1 AA compliance is not a hard requirement for MVP (community of tradespeople; no accessibility procurement pressure), but:
- All form elements must have labels
- Color contrast must meet WCAG 2.1 AA minimums (4.5:1 for normal text)
- The booking widget (customer-facing) must be keyboard-navigable, as customers include vehicle owners of all ages and abilities

---

*Product Requirements Document for ShopShield / Specialty Auto Enhancement Shop Software*
*Created: 2026-11-11 | Author: Root | Workflow: create-prd*
*Based on: product-brief-specialty-auto-enhancement-shop.md + market-specialty-auto-enhancement-shop-research-2026-11-10.md*
