---
stepsCompleted: [step-01-init, step-02-discovery, step-02b-vision, step-02c-executive-summary, step-03-success, step-04-journeys, step-05-domain, step-06-innovation, step-07-project-type, step-08-scoping, step-09-functional, step-10-nonfunctional, step-11-polish, step-12-complete]
inputDocuments:
  - ideas/shortlisted/small-gc-project-management.md
  - _bmad-output/planning-artifacts/product-brief-small-gc-project-management.md
workflowType: 'prd'
classification:
  projectType: saas_b2b
  domain: construction
  complexity: medium
  projectContext: greenfield
date: '2026-10-07'
author: Root
project_name: 'SiteLedger - Job Costing & Project Management for Small GCs'
---

# Product Requirements Document - SiteLedger: Job Costing & Project Management for Small GCs

**Author:** Root
**Date:** 2026-10-07

## Executive Summary

400,000–600,000 small general contractors (GCs) and specialty subcontractors in the US are running $500K–$10M construction businesses on a "Frankenstack" of QuickBooks + Excel + Google Drive. They cannot answer the most fundamental question in their business in real time: **is this job making money?** The enterprise tools that solve this problem (Procore at $500–$800+/month, Buildertrend at $339–$829/month) price out the entire small GC segment. The current SMB market leader, JobTread, starts at $159/month per team but charges per user, has no QuickBooks Desktop support, and delivers a materially weaker mobile experience. No high-quality tool occupies the flat-rate $99–$149/month zone.

**SiteLedger** is the per-job financial dashboard that small GCs have needed since Procore priced them out. It delivers full job costing, subcontractor payment tracking, document management, and QuickBooks bidirectional sync at $79–$129/month flat-rate — 40–45% cheaper than JobTread for a 5-person team, with feature parity or better. The product is built around one non-negotiable core: every user can answer "is this job making money?" within 30 seconds, from any device, in their first 30 minutes of use.

**Target users:** Small GCs and specialty subcontractors (2–15 employees, $500K–$10M annual revenue) who currently run on Excel + QuickBooks + Google Drive and have looked at Procore or Buildertrend and retreated on price.

**Go-to-market:** $79/month (Starter) and $129/month (Growth) flat-rate SaaS, with a $299 AppSumo LTD as the uncontested first mover in a vacant AppSumo category. Zero construction PM tools exist on AppSumo as of October 2026.

### What Makes This Special

**The pricing gap occupant.** The $99–$149/month flat-rate zone for a full-featured construction job costing tool is genuinely unoccupied by a high-quality product. Contractor Foreman at ~$166/month is the nearest budget option, but its UI is widely documented as cluttered and overwhelming. A well-designed tool at SiteLedger's price wins on value against JobTread and on usability against every budget alternative.

**QuickBooks Desktop support from day one.** JobTread supports QuickBooks Online only — a hard filter that eliminates it for the 30–40% of small GC offices still running QB Desktop. SiteLedger's QB Desktop bidirectional sync is not a V2 feature; it is a day-one capability targeting the exact segment JobTread cannot serve.

**Mobile-first architecture.** Every incumbent in this category is desktop-first with a mobile app grafted on as an afterthought. SiteLedger treats field crew as primary mobile users and designs every core interaction for thumb navigation on a 5-inch screen in work gloves. A genuinely excellent mobile experience is a structural competitive advantage incumbents cannot quickly replicate.

**AppSumo first-mover in a vacant category.** "Procore for small GCs, for life" is an exceptionally compelling LTD pitch. No competitor exists on AppSumo to absorb the launch traffic. The first credible tool in the category captures organic community attention that cannot be purchased later.

**Community-built trust moat.** r/Construction (350,000+ members) produces 5+ annual high-engagement threads asking "what Procore alternative do you use?" Authentic founder presence and a product that genuinely solves the pain creates word-of-mouth that VC-funded competitors cannot easily replicate.

## Project Classification

- **Project Type:** SaaS B2B — multi-tenant web application with PWA companion for mobile field use
- **Domain:** Construction (job costing, subcontractor payment management, document control, accounting integration)
- **Complexity:** Medium — involves bidirectional QuickBooks (Online and Desktop) sync, financial data across multiple simultaneous jobs, document storage, role-based permissions, and mobile-first offline-capable field workflows
- **Project Context:** Greenfield — new product built from scratch, no existing codebase

## Success Criteria

### User Success

- **Time to first job dashboard:** 80%+ of trial users see a populated job costing dashboard (real contract amount + at least one cost line item) within 30 minutes of account creation
- **"First real job" activation rate:** ≥55% of trial users create a job using real data (real contract amount, real budget, real sub invoice) within 7 days of signup
- **QuickBooks connection rate:** ≥40% of paying subscribers have a live QuickBooks connection actively syncing within 14 days of subscription start
- **Weekly active usage:** ≥70% of paying accounts have at least 1 session per week after month 1 — indicating the tool is in the owner's workflow, not a shelf product
- **NPS:** ≥50 at 90 days post-activation
- **Job data accumulation:** Active accounts have ≥15 jobs created at the 12-month mark, indicating genuine operational adoption and high switching cost

### Business Success

- **AppSumo LTD launch (Month 1–2):** 500 codes × $299 = $149,500 gross revenue; 4.5+ star rating with 50+ reviews
- **Month 3:** 100+ active paying MRR subscribers; MRR ≥$10,000
- **Month 6:** 300 paying MRR subscribers; MRR ~$38,700; NPS ≥40; Day-30 retention ≥75%
- **Month 12:** 500 MRR subscribers; MRR ~$64,500 (~$774K ARR); G2 profile with 100+ verified reviews; break-even achieved (~200 customers)
- **Month 18:** Xero integration shipped; second LTD platform launch (Dealify or PrimeClub); channel expansion into trade association partnerships
- **LTD → MRR conversion:** 15–25% of AppSumo LTD customers upgrade to paid subscription within 12 months

### Technical Success

- **QuickBooks sync reliability:** >99% of QuickBooks Online sync operations complete without error; >98% for QB Desktop within 90 days of launch
- **Dashboard load time:** Multi-job financial dashboard renders in <2 seconds for accounts with up to 50 active jobs on mid-range mobile hardware
- **Mobile performance:** Core field crew actions (photo upload, document access, milestone check-in) complete in <3 seconds on a 4G connection
- **Offline reliability:** 99.9%+ of offline-created records sync successfully with zero data loss on reconnection
- **Uptime:** 99.9% availability for all cloud services
- **QB Desktop sync latency:** QB Desktop sync completes within 5 minutes of a new transaction on either side

### Measurable Outcomes

| Metric | Month 3 | Month 6 | Month 12 |
|--------|---------|---------|---------|
| MRR | $10,000 | $38,700 | $64,500 |
| Paying subscribers | 100 | 300 | 500 |
| AppSumo codes sold | 500 | — | — |
| Trial-to-paid conversion | ≥15% | ≥15% | ≥18% |
| Day-30 retention | ≥75% | ≥80% | ≥85% |
| NPS | ≥40 | ≥50 | ≥55 |
| G2 reviews | 15+ | 50+ | 100+ |
| Activated trial users (first real job) | ≥55% | ≥55% | ≥60% |

## Product Scope

### MVP — Minimum Viable Product

The MVP is gated by one constraint: the user must be able to answer "is this job making money?" for every active job, from a mobile device, within their first 30 minutes of use. Every MVP feature directly enables this or is strictly necessary for the product to function as a professional tool.

**Core MVP Capabilities (P0):**
- Multi-job financial dashboard with per-job status cards (contract, billed, collected, budget remaining, % complete, health indicator)
- Per-job cost drill-down: budget vs. actual by line item, variance flags, color-coded health indicators
- Subcontractor payment ledger per job (invoice in, payment out, balance owed, lien waiver status)
- QuickBooks Online bidirectional sync (invoices, payments, vendor bills — both directions)
- QuickBooks Desktop bidirectional sync via QB Web Connector
- Role-based permissions: Owner/Admin, Office Manager, Field Crew, Sub Portal
- Guided onboarding wizard: 5 steps, <15 minutes, results in populated job dashboard
- Document manager per job (contracts, drawings, change orders, photos, permits) with per-category organization
- Simple milestone timeline per job (minimum 3 milestones: start, critical milestone, completion) with invoice-prompt notifications

**Included in MVP (P1):**
- Document sharing with subs via link (no sub account required)
- Version control for drawings (mark superseded versions as archived)
- Sub portal: view outstanding invoices, submit new invoices, download lien waiver
- Aggregate sub payable view across all active jobs
- CSV import for bulk job setup and sub invoice entry
- Mobile-responsive web app (PWA) — all core features usable on phone with one-handed scrolling
- Offline capability for field crew document access and photo upload

### Growth Features (Post-MVP, Months 6–12)

- Xero integration (OAuth flow + field mapping — unlocks 20–25% additional addressable market currently excluded by QB-only tools)
- Native iOS and Android apps (structural mobile advantage once PMF confirmed)
- AIA G702/G703 billing generation (opens commercial small GC segment)
- Basic lien waiver automation (conditional and unconditional, state-appropriate templates)
- AI-powered budget variance explanations ("Job #4 is 14% over labor budget — primary driver is overtime on framing phase")
- Simple line-item estimate builder that auto-populates job budget when estimate is won
- Improved estimating: template-based estimates from historical job data

### Vision — Future (Year 2+)

- Subcontractor compliance tracking (COI tracking, license verification, expiration alerts)
- Certified payroll / Davis-Bacon reporting (public project compliance)
- Multi-company support (owner runs 2+ LLCs under one account)
- CRM layer: customer history, project leads pipeline, follow-up reminders
- Sage integration (smaller addressable market, follows Xero)
- Marketplace integrations: CompanyCam, Procore (for GCs who sub for larger contractors), trade suppliers
- AI-powered job profitability forecasting based on historical job patterns

## User Journeys

### Journey 1: Mike — The 8-Person Small GC Owner (Primary — Onboarding & Activation)

We meet Mike on a Thursday evening in his home office in suburban Texas. He manages 7 employees and 12–20 active subcontractors for a $2.8M residential and light commercial GC business. He's been on Excel + QuickBooks for 9 years. His wife built the job costing spreadsheet; it works, but updating it takes 4 hours on Friday evenings and he still feels a persistent anxiety about whether Job #4 — the large commercial TI — is running over on labor.

**Discovery:** Mike types "Procore alternative for small contractors" into Google. He lands in a Reddit thread in r/Construction. A comment mentions SiteLedger. He reads 8 G2 reviews. All describe his exact situation. He watches a 7-minute YouTube demo showing a real job being set up from scratch in under 10 minutes. He checks the pricing page: $129/month flat for his 5-person office team. He compares to JobTread ($231/month). He signs up for the free trial.

**Onboarding (the make-or-break 30 minutes):** Mike opens the onboarding wizard. Step 1: create a job. He enters "TI Project - Building 4 Suite 200." Step 2: enter contract amount ($287,000). Step 3: enter budget line items. Mike copies 6 line items from memory — framing, electrical, HVAC, plumbing, drywall, finishes. Step 4: enter sub invoices. He adds two invoices from the framing sub ($18,400 and $22,750) and marks one as paid. Step 5: connect QuickBooks. He authorizes QB Online in 2 clicks. The sync runs. The dashboard populates.

**The "aha" moment:** For the first time, Mike sees that Job #4 is 11% over labor budget on framing — a $4,200 variance he wasn't tracking. He also sees that $22,750 is owed to the framing sub and hasn't been approved for payment. This took 22 minutes. He feels a specific, named relief.

**Activation and conversion:** Mike adds 5 more jobs over the next 3 days. He invites his office manager. At day 14 (trial end), he subscribes to Growth ($129/month). "This pays for itself if I catch one job going sideways early." By 90 days, he has 22 jobs in the system, 3 years of sub contact history, and every document from every job organized by category.

**Advocacy:** Three months later, Mike responds to the next Reddit thread asking "what construction PM software do you use?" with a specific, 4-paragraph answer about catching a labor overrun early and recovering the margin. The post drives 60 trial signups over the following 2 weeks.

---

### Journey 2: Sarah — The Office Manager at a 12-Person Remodeling Company (Primary — QB Desktop Sync)

Sarah is the administrative nerve center for a Boston-area remodeling company. The owner, Dave, is never in the office. She handles AP/AR, QuickBooks Desktop (Dave has been on QB Desktop for 9 years and won't move to QBO), Excel job tracking, and a shared Dropbox that nobody maintains.

**The problem:** Every Friday is a reconciliation nightmare. Sarah manually re-enters data between Excel and QuickBooks Desktop. She maintains a separate spreadsheet to track what's owed to subs per job because QB doesn't give her a per-job AP view. Dave has asked her to find software twice; her answer both times has been "nothing good works with QB Desktop under $500/month."

**Discovery and evaluation:** Sarah finds SiteLedger through a G2 search for "QuickBooks Desktop construction software." She reads the QB Desktop sync documentation carefully before starting a trial. She verifies Desktop is supported. She starts the trial.

**Key moment — QB Desktop sync setup:** Sarah installs the QuickBooks Web Connector on the office PC, pastes the SiteLedger QWC file, and runs the first sync. 47 existing vendor bills flow into SiteLedger and are automatically matched to jobs she's already created. The per-job AP ledger she has maintained manually in Excel for 3 years now exists live in SiteLedger, populated from QB Desktop. She spends 40 minutes organizing the job associations. She sends Dave a screenshot of the "Job #14 — what's owed" screen.

**Decision:** Dave approves the subscription in 4 minutes. Sarah upgrades to the Growth plan. Dave never looks at the product himself; Sarah is the power user and the decision-maker for practical purposes.

**Impact:** The Friday reconciliation drops from 4 hours to under 30 minutes. Sarah updates sub invoices in SiteLedger; they sync to QB Desktop automatically. She no longer maintains the parallel AP Excel file.

---

### Journey 3: Carlos — The Specialty Electrical Sub (Alternative Primary User)

Carlos runs a 14-person electrical subcontracting company in Phoenix doing commercial TI and multifamily work. He invoices 40+ jobs per year and consistently invoices late — 2–3 weeks after milestone completion — because tracking isn't automatic. He estimates he leaves $15,000–$25,000 per year on the table from late invoicing.

**Discovery:** Carlos finds SiteLedger through a Facebook Group post in "Electrical Contractors Network." Someone describes using it to track contract amounts, invoiced-to-date, and what's still billable across all active jobs simultaneously.

**Activation:** Carlos creates his 8 active jobs. He enters contract amounts and milestone structures for each. He connects QB Online. When the next milestone hits on Job #3 (rough-in inspection completed), SiteLedger sends him a notification: "Job #3 hit rough-in milestone — ready to invoice?" He generates the invoice directly from the milestone dashboard and sends it to the GC within 15 minutes of the inspection. Historically this would have waited 2 weeks.

**Result:** In his first month, Carlos invoices 4 jobs within 48 hours of milestone completion. His average invoice-to-collection cycle drops by 11 days.

---

### Journey 4: Field Crew Lead — Daily Operations (Secondary Mobile User)

Marcus is a site supervisor for Mike's company. He manages a 4-person framing crew across 3 simultaneous jobs. Before SiteLedger, he drove to the office twice a week to pick up updated drawings; he photographed change conditions with his phone and texted them to Mike; he had no visibility into which version of the drawings was current.

**Field adoption journey:** Mike invites Marcus with the "Field Crew" role. Marcus opens SiteLedger on his phone. He can see: current drawings for each job (with superseded versions archived), his assigned jobs' document folders, and a photo upload button. He cannot see any financial data.

**Daily use:** Marcus uploads 3 site photos from his phone at the end of each day. He accesses the current architectural drawings without driving to the office. When a sub asks for the lien waiver form for the last payment, Marcus taps the sub portal link and the sub submits the waiver directly. Mike's "I drove to the office to get drawings" problem disappears within a week.

**Adoption success condition:** Marcus checks SiteLedger at least once per workday. The mobile experience is fast enough that it replaces his texting-Mike workflow, not a new overhead.

---

### Journey 5: Subcontractor — Invoice Submission and Payment Visibility (Secondary Portal User)

An electrical subcontractor named Tony works for 3 different GCs simultaneously. When one GC uses SiteLedger, Tony receives an invitation to the sub portal for that GC's projects.

**Portal experience:** Tony sees his outstanding invoices, their approval status, and their payment date. He submits a new invoice by uploading a PDF and entering the amount. He downloads the conditional lien waiver SiteLedger generated from his invoice data. He did not need to create a SiteLedger account — the portal works via email-authenticated link.

**Impact on GC:** Tony's invoice arrives in SiteLedger's sub payment ledger automatically, reduces the manual AP entry burden on Sarah, and appears on Mike's financial dashboard as "pending approval."

---

### Journey Requirements Summary

| Journey | Capabilities Revealed |
|---------|----------------------|
| Mike — Onboarding | Multi-job dashboard, budget entry, sub invoice ledger, QB Online sync, onboarding wizard |
| Sarah — QB Desktop | QB Desktop sync, per-job AP view, Office Manager role, sub invoice tracking |
| Carlos — Specialty Sub | Milestone tracking, invoice-prompt notifications, job-level billing status, QB Online sync |
| Marcus — Field Crew | Mobile document access, photo upload, role-based permissions, offline capability, PWA |
| Tony — Sub Portal | Invoice submission, payment status visibility, lien waiver download, no-account access |

## Domain-Specific Requirements

### Compliance & Regulatory

- **Lien rights:** SiteLedger does not provide legal advice and must not represent the lien waiver templates as legally reviewed. All lien waiver templates must include a disclaimer directing users to verify state-specific requirements with counsel. The lien waiver generation feature (V2) is explicitly out of scope for MVP.
- **Contract document storage:** SiteLedger stores construction contracts and pay applications. Documents stored must be retrievable in the event of a legal dispute. Minimum document retention: 7 years for active accounts; 2 years post-cancellation with export-before-deletion notice.
- **Financial data accuracy:** SiteLedger is not a financial system of record; QuickBooks is. SiteLedger's job costing figures must never be represented as accounting-grade data. UI must clearly indicate "last synced" timestamps and surface sync errors prominently so users don't mistake stale data for current data.

### Technical Constraints

- **QuickBooks Web Connector (QB Desktop):** QB Web Connector is a Windows-only local application. SiteLedger's Desktop sync relies on a Windows PC in the contractor's office running QB Desktop. This is a structural constraint: mobile-only users cannot sync QB Desktop. The onboarding flow must clearly communicate this requirement and offer a fallback (manual CSV import) for firms that don't have a persistent Windows office machine.
- **QuickBooks API rate limits:** QB Online API has rate limits (500 requests/minute per realm). Multi-job accounts with frequent activity must implement request queuing to avoid rate limit errors. Sync errors must surface to users with clear remediation instructions.
- **Document storage costs:** Storage provisioning must be tracked per account. Starter (10 GB), Growth (50 GB), Scale (200 GB). Alerts at 80% capacity; hard limit enforcement at 100% with pre-warning notifications.
- **Offline PWA:** Field crew use often occurs in areas with poor or no cell service. The PWA must cache current job documents, drawings, and photo upload queue for offline use. Photo uploads queue locally and sync when connectivity is restored.

### Integration Requirements

- **QuickBooks Online:** OAuth 2.0 connection; bidirectional sync for invoices, payments, vendor bills, and customers/vendors; field mapping UI for QB classes/accounts; sync status dashboard showing last sync timestamp and any errors
- **QuickBooks Desktop:** Web Connector XML-based integration; read/write for vendor bills and payments; setup wizard with downloadable QWC file; polling interval configurable (default: 15 minutes)
- **Google Drive / Dropbox:** Import documents from connected cloud storage into job document folders (OAuth 2.0 for both); one-way import (not sync)
- **Email integration:** Sub portal invitation and payment notification emails; milestone invoice-prompt notifications; sync error alerts

### Risk Mitigations

- **QB Desktop complexity:** Allocate 2x estimated development time for QB Desktop sync. Build against a staging QB Desktop instance before production testing. Maintain a "QB Desktop known issues" public changelog.
- **Sync data integrity:** Implement idempotent sync operations — re-running a sync must not create duplicate records. All sync events are logged with before/after state for debugging.
- **Document durability:** Documents stored in SiteLedger back up to a separate cloud region daily. Zero-data-loss guarantee for paid accounts.

## SaaS B2B Specific Requirements

### Project-Type Overview

SiteLedger is a multi-tenant SaaS B2B application targeting small construction businesses. Each account (tenant) represents a GC or specialty sub firm. Multiple users within the account have differentiated permissions. Subcontractors interact via a limited portal that does not require a full account.

### Multi-Tenancy Model

- **Tenant isolation:** All job data, financial data, and documents are strictly isolated per tenant. Cross-tenant data access is architecturally impossible at the data layer.
- **User types per tenant:** Owner/Admin, Office Manager, Field Crew (unlimited), Sub Portal (external, per-job access only)
- **Billing per tenant:** Single subscription per tenant, regardless of field crew count. Internal user limits per plan (Starter: 3 internal, Growth: 10 internal, Scale: 25 internal). Field crew users are explicitly unlimited on all plans.
- **Data export:** All tenant data is exportable as CSV + document ZIP at any time, no support required

### Role-Based Access Control (RBAC)

| Permission | Owner/Admin | Office Manager | Field Crew | Sub Portal |
|-----------|-------------|----------------|-----------|------------|
| View all jobs | ✓ | ✓ | Assigned jobs only | Linked jobs only |
| View financial data | ✓ | ✓ | ✗ | Invoice status only |
| Create/edit jobs | ✓ | ✓ | ✗ | ✗ |
| Enter sub invoices | ✓ | ✓ | ✗ | Self only |
| Approve sub invoices | ✓ | ✓ | ✗ | ✗ |
| Upload documents | ✓ | ✓ | ✓ | ✓ |
| Access documents | ✓ | ✓ | ✓ | Linked job only |
| Manage QB sync | ✓ | ✓ | ✗ | ✗ |
| Manage account/billing | ✓ | ✗ | ✗ | ✗ |
| Invite users | ✓ | ✓ | ✗ | ✗ |

### Technical Architecture Considerations

- **Front-end:** React SPA with PWA manifest and service worker for offline capability. Mobile-first responsive design — all views designed for 375px viewport first, then scaled to desktop.
- **Back-end:** REST API + event-driven sync queue. QuickBooks sync operations run asynchronously via job queue (not inline with user actions).
- **Database:** Multi-tenant PostgreSQL with row-level security (RLS) enforcing tenant isolation. Separate schema per tenant is not required; RLS is sufficient given scale targets.
- **File storage:** S3-compatible object storage with per-tenant path namespacing. Pre-signed URLs for direct upload/download. Virus scanning on all uploaded files.
- **Authentication:** Email/password + magic link. Google SSO as optional addition (Month 3+). MFA available for Owner/Admin roles.
- **Deployment:** Containerized (Docker), deployed to cloud-managed Kubernetes. Staging environment mirrors production for QB Desktop testing.

### Implementation Considerations

- **QuickBooks OAuth token refresh:** QB Online tokens expire every 180 days. Silent background refresh must be implemented. Token expiration must surface to users as a notification before sync fails, not after.
- **Free trial design:** 14-day free trial with full feature access, no credit card required. Trial accounts limited to 3 jobs. At trial end, account is downgraded to read-only until a plan is selected.
- **AppSumo LTD provisioning:** LTD buyers receive Growth tier features for life. LTD accounts are flagged in the billing system; they never receive renewal emails. LTD accounts are capped at 500 total.

## Project Scoping & Phased Development

### MVP Strategy & Philosophy

**MVP Approach:** Problem-solving MVP. The product is validated when a user creates a real job with real financial data and the dashboard accurately reflects their job's financial health. Everything that doesn't enable this "first real job" activation event is a V2 or V3 feature.

**Resource Requirements:** 2–3 full-stack engineers (1 lead + 1–2 supporting), 1 part-time designer, 1 founder/PM, part-time QB integration specialist for Desktop sync. Estimated build time: 10–14 weeks for MVP launch-ready state.

### MVP Feature Set (Phase 1)

**Core User Journeys Supported:**
- Mike's onboarding journey (primary — activation)
- Sarah's QB Desktop sync journey (primary — QB Desktop differentiation)
- Marcus's field crew mobile journey (secondary — retention and referral)
- Sub portal invoice submission (secondary — GC admin reduction)

**Must-Have Capabilities:**
- Multi-job financial dashboard with real-time health indicators
- Per-job budget vs. actual cost tracking with variance flags
- Subcontractor payment ledger (invoiced in, paid out, balance owed)
- QuickBooks Online bidirectional sync
- QuickBooks Desktop sync via Web Connector
- Role-based permissions (4 roles as specified in RBAC matrix)
- Document manager per job (5 categories, version control for drawings)
- Simple milestone timeline with invoice-prompt notifications
- Sub portal (invoice submission, payment status, document access)
- Guided onboarding wizard (5-step, <15 min, results in populated dashboard)
- Mobile-responsive PWA with offline document access for field crew
- Google Drive and Dropbox import (one-way)
- CSV import for bulk job and sub invoice setup
- 14-day free trial with 3-job limit

### Post-MVP Features

**Phase 2 (Months 6–12):**
- Xero integration (unlocks 20–25% of market JobTread cannot serve)
- Native iOS and Android apps (structural mobile advantage)
- AIA G702/G703 progress billing generation
- Basic lien waiver automation (all 4 standard types, state-appropriate templates)
- AI budget variance explanations
- Simple estimate builder with auto-population of job budget

**Phase 3 (Year 2+):**
- Subcontractor compliance tracking (COI, license verification, expiration alerts)
- Certified payroll / Davis-Bacon reporting
- Multi-company support
- CRM layer (customer history, leads pipeline)
- Sage integration
- Third-party marketplace integrations (CompanyCam, etc.)
- AI-powered job profitability forecasting

### Risk Mitigation Strategy

**Technical Risks:**
- QB Desktop sync complexity — mitigated by 2x time allocation, staging QB Desktop environment, and explicit "QB Desktop beta" messaging during first 60 days post-launch
- QB Online rate limits — mitigated by async sync queue with exponential backoff and user-visible sync status dashboard
- PWA offline reliability — mitigated by conservative offline-first architecture (cache aggressively, sync on reconnect)

**Market Risks:**
- JobTread adds flat-rate pricing — mitigated by AppSumo LTD launch before JobTread notices, community moat through authentic Reddit presence, and QB Desktop differentiation that JobTread cannot quickly add
- YC-funded competitors (Vobi, Constructable) move downmarket — mitigated by serving $500K–$5M segment they're explicitly ignoring; community trust cannot be purchased with VC money

**Resource Risks:**
- QB Desktop sync delays the launch — plan: decouple QB Desktop launch from MVP launch; launch with QB Online sync only and add QB Desktop 4–6 weeks post-MVP if necessary, with clear communication to Sarah-persona users about the timeline

## Innovation & Novel Patterns

### Detected Innovation Areas

SiteLedger's innovation is in **market positioning and experience design** rather than novel technology. The genuine innovations:

1. **Flat-rate pricing as a structural differentiator:** No construction PM tool at $99–$149/month offers QB Desktop sync, mobile-first design, and full job costing simultaneously. The innovation is not the technology — it's the deliberate choice to occupy a pricing tier that incumbents have abandoned or never entered.

2. **QB Desktop sync for SMB construction:** QB Desktop continues to hold 30–40% of small GC offices; no SMB-tier tool has made it a first-class, day-one feature. The technical challenge is non-trivial (Windows-only Web Connector, polling architecture, complex field mapping), which creates a durable moat once built.

3. **"Quick win" onboarding architecture:** The 5-step, 15-minute onboarding that ends with a populated financial dashboard is a deliberate product decision — not a wizard that asks onboarding questions and dumps the user on an empty screen. Every step produces a visible output. This "activation moment by design" approach is specifically differentiated from every competitor in the category.

### Validation Approach

- **AppSumo LTD launch:** 500 paying buyers at $299 is the validation event. If LTD sells out in <72 hours, PMF is confirmed.
- **"First real job" rate:** ≥55% of trial users creating real-data jobs within 7 days is the MVP activation signal.
- **QB Desktop adoption rate:** If >20% of paying subscribers connect QB Desktop, the differentiation is validated and worth continued investment.

### Risk Mitigation

- QB Desktop sync technical risk: If Web Connector integration proves too complex for MVP timeline, launch with QB Online only and add Desktop as a "Phase 1.5" feature within 60 days. This preserves the launch timeline without permanently abandoning the Sarah persona.
- Flat-rate pricing sustainability: Monitor average users per account at 60 days. If Growth plan averages >8 internal users, revisit pricing. The financial model is sound at 5 users/account.

## Functional Requirements

### Job Management

- FR1: Owners and Office Managers can create a new job with a name, contract amount, start date, and client name
- FR2: Owners and Office Managers can create and edit budget line items per job (labor, materials, subcontractors, other — custom categories allowed)
- FR3: Owners and Office Managers can view all active, completed, and archived jobs in a filterable list
- FR4: Owners and Office Managers can duplicate an existing job as a template for a new job
- FR5: Owners and Office Managers can archive and restore jobs
- FR6: Owners and Office Managers can import job data from CSV (bulk job creation)
- FR7: Owners and Office Managers can assign Field Crew users to specific jobs (controlling their access scope)

### Financial Dashboard

- FR8: All internal users with financial access can view a multi-job dashboard showing all active jobs with status cards (contract amount, billed to date, collected, budget remaining, % complete, health indicator)
- FR9: All internal users with financial access can drill into any job to see budget vs. actual by line item with variance amounts and percentages
- FR10: Dashboard health indicators update automatically when new transactions are entered or synced from QuickBooks
- FR11: Owners and Office Managers can filter and sort the multi-job dashboard by health status, % complete, amount billed, or amount owed
- FR12: Owners and Office Managers can view a job-level summary of total receivables outstanding across all active jobs

### Subcontractor Payment Tracking

- FR13: Owners and Office Managers can create and edit subcontractor records (name, contact, trade, default payment terms)
- FR14: Owners and Office Managers can enter sub invoices per job (sub name, invoice date, invoice number, amount, due date, category, lien waiver required flag)
- FR15: Owners and Office Managers can mark sub invoices as approved and record payment (payment date, payment method, check number)
- FR16: Owners and Office Managers can view all outstanding amounts owed to each subcontractor across all active jobs in a single aggregate view
- FR17: Subcontractors can submit new invoices via the sub portal (upload PDF, enter amount, select job and milestone)
- FR18: Subcontractors can view the status of their submitted invoices (pending approval, approved, paid, with payment date)
- FR19: Owners and Office Managers can import sub invoice data from CSV
- FR20: Owners and Office Managers can flag a sub invoice as requiring a lien waiver and track whether the waiver has been received

### QuickBooks Integration

- FR21: Owners and Office Managers can connect a QuickBooks Online account via OAuth and authorize bidirectional sync
- FR22: Owners and Office Managers can set up QuickBooks Desktop sync by downloading a QWC configuration file and installing it in QB Web Connector
- FR23: Owners and Office Managers can configure field mapping between SiteLedger job line items and QuickBooks classes, accounts, and customer records
- FR24: The system syncs QB Online invoices, payments, and vendor bills bidirectionally within 5 minutes of a new transaction on either side
- FR25: The system syncs QB Desktop vendor bills and payments bidirectionally on a user-configurable polling interval (default: 15 minutes)
- FR26: Owners and Office Managers can view the sync status dashboard showing last sync timestamp, sync health, and any pending errors
- FR27: Owners and Office Managers can manually trigger an immediate sync from the sync status dashboard
- FR28: The system notifies Owners and Office Managers when a sync error occurs that requires user intervention, with clear remediation instructions
- FR29: Owners and Office Managers can disconnect and reconnect QuickBooks at any time without data loss

### Document Management

- FR30: All internal users can upload documents to a job's document manager (photos, PDFs, images) via web browser and mobile camera
- FR31: Documents are automatically categorized into job-level folders (contracts, drawings, change orders, photos, permits, other)
- FR32: Owners and Office Managers can rename, move, and delete documents
- FR33: Owners and Office Managers can mark a drawing as superseded by a newer version (archived version remains accessible but visually de-emphasized)
- FR34: All internal users can share a document with an external party (subcontractor, client) via a time-limited, view-only link (no account required)
- FR35: Owners and Office Managers can import documents from connected Google Drive or Dropbox accounts
- FR36: Field Crew users can access all documents in their assigned jobs, including offline (documents are cached for offline access)
- FR37: Owners and Office Managers can view storage usage per account and receive alerts at 80% capacity

### Milestone Tracking

- FR38: Owners and Office Managers can create milestones per job (name, date, description, linked billing event flag)
- FR39: Owners and Office Managers can mark milestones as complete
- FR40: When a billing-linked milestone is marked complete, the system sends a notification to the Owner/Admin prompting invoice generation
- FR41: Owners and Office Managers can view all upcoming milestones across all active jobs in a calendar view

### User & Account Management

- FR42: Account Owners can invite internal users by email and assign them one of the defined roles (Owner/Admin, Office Manager, Field Crew)
- FR43: Account Owners can modify user roles and revoke access for internal users at any time
- FR44: Owners and Office Managers can invite subcontractors to the sub portal by job (email invitation with job-scoped access link)
- FR45: Account Owners can manage subscription billing and plan upgrades/downgrades
- FR46: Account Owners can export all account data (jobs, financials, documents) as a ZIP archive at any time
- FR47: All users can update their own profile (name, email, notification preferences, password)

### Onboarding

- FR48: New users are guided through a 5-step onboarding wizard: (1) create first job, (2) enter contract amount, (3) add budget line items, (4) connect QuickBooks, (5) invite one team member
- FR49: Users can skip any onboarding wizard step and return to complete it later
- FR50: The system tracks onboarding completion state and resurfaces incomplete steps via in-app nudges during the trial period

## Non-Functional Requirements

### Performance

- Multi-job financial dashboard renders in <2 seconds for accounts with up to 50 active jobs on a 4G mobile connection
- Per-job cost drill-down renders in <1 second after dashboard is loaded
- Document upload progress is visible in real time; uploads up to 25 MB complete in <10 seconds on a standard broadband connection
- QuickBooks Online sync triggers complete within 5 minutes of a triggering transaction; QB Desktop polling completes within the configured interval (default 15 minutes)
- Search across job names and document names returns results in <500ms

### Security

- All data is encrypted in transit (TLS 1.3 minimum) and at rest (AES-256)
- QuickBooks OAuth tokens are stored encrypted and never exposed to front-end code
- Sub portal access links are time-limited (72-hour expiration by default, configurable by Owner) and single-use per session
- All document pre-signed URLs expire after 1 hour
- Multi-factor authentication is available and recommended for Owner/Admin users
- All financial data access is logged with user ID, timestamp, and action type (audit log accessible to account Owner)
- Password requirements: minimum 10 characters, bcrypt hashing, breach-detection check against HaveIBeenPwned on account creation
- SOC 2 Type II compliance is a 12-month goal (not MVP requirement); GDPR-compliant data handling from day one

### Scalability

- Architecture supports 10,000 concurrent active accounts without architectural changes
- Document storage backend scales horizontally without capacity planning intervention
- QuickBooks sync queue handles spikes (e.g., AppSumo launch day new signups) via auto-scaling workers
- Database query patterns are optimized for per-tenant data isolation; tenant data is never co-mingled in query results

### Reliability

- 99.9% uptime SLA for all user-facing services
- QuickBooks sync queue is durable: a sync job that fails retries up to 5 times with exponential backoff before surfacing an error to the user
- Zero-data-loss guarantee for all paid account data; daily backups to a geographically separate region
- Document uploads are idempotent: re-uploading the same file does not create duplicate records

### Accessibility

- All core user flows meet WCAG 2.1 AA standards
- Dashboard financial data is accessible via keyboard navigation and is screen-reader compatible
- Document upload and photo capture flows work with iOS VoiceOver and Android TalkBack
- Color-coded health indicators (green/yellow/red) include non-color visual differentiation (icon + label) to support color-blind users

### Integration

- QuickBooks Online integration uses Intuit's official OAuth 2.0 flow and REST API (v3); no screen scraping
- QuickBooks Desktop integration uses the official Intuit Web Connector (QBWC) XML protocol
- Google Drive and Dropbox imports use each platform's official OAuth 2.0 SDK
- All external API credentials are stored in a secrets manager (not in environment variables or source code)
- Integration health is monitored with automated alerts if any external API call failure rate exceeds 1% in a 15-minute window
