---
stepsCompleted: [step-01-init, step-02-discovery, step-02b-vision, step-02c-executive-summary, step-03-success, step-04-journeys, step-05-domain, step-06-innovation, step-07-project-type, step-08-scoping, step-09-functional, step-10-nonfunctional, step-11-polish, step-12-complete]
inputDocuments:
  - ideas/shortlisted/sign-shop-management-shopvox-price-squeeze.md
  - _bmad-output/planning-artifacts/market-research-sign-shop-management.md
  - _bmad-output/planning-artifacts/brief-sign-shop-management.md
workflowType: prd
classification:
  projectType: saas_web_app
  domain: vertical_software
  complexity: medium
  projectContext: greenfield
date: '2026-06-23'
author: Root
project_name: 'SignFlow — Sign Shop Management'
---

# Product Requirements Document - SignFlow: Sign Shop Management

**Author:** Root
**Date:** 2026-06-23

## Executive Summary

The US sign industry has 41,000+ shops — the vast majority independently owned, 2–20 employees, $300K–$2M annual revenue. ShopVOX, the category-dominant software, was acquired by PE firm Fullsteam in August 2025 and immediately raised prices 70%+, from ~$215/month to $366+/month for a typical 5-user shop. Signs101.com, the industry's primary forum, has active migration threads with hundreds of participants actively seeking alternatives. The switch window is open now and closes in 12–18 months as shops either resign themselves to paying or find a workable substitute.

**SignFlow** is a sign-shop-specific job management platform priced at $79–$129/month that delivers the exact capabilities ShopVOX users need — a substrate pricing calculator, sign-stage production board, customer proof portal, and ShopVOX migration tool — at half the incumbent's post-hike price, owned by an independent team with no PE ambitions.

The wedge feature is the substrate pricing calculator: select material type (vinyl, ACM, coroplast, polycarbonate, foam board, banner, aluminum, vehicle wrap film), input job dimensions, and get a costed material estimate with configurable bleed factor, waste factor, and minimum yield rules. No competitor under $200/month has this at genuine depth. This single feature wins the demo with every estimator-owner who has ever lost money to a miscalculated ACM job.

**Go-to-market:** Signs101.com-first beta launch — 15 free accounts for active forum members who have posted about switching — followed by public trial and an AppSumo LTD at $99–$149 at Month 6. The ShopVOX price hike is the pitch. The substrate calculator is what keeps them.

**Target users:** Owner-estimators, production managers, and field installers at small sign shops (2–20 employees) who are currently on ShopVOX, operating off spreadsheets, or priced out of existing software.

**Revenue target:** $10K MRR at Month 12 via 100–130 paying customers. Achievable at under 1% penetration of the 8,000–12,000 shop software-buying segment.

### What Makes This Special

**The only substrate pricing calculator under $200/month with real depth.** Material type library (vinyl cast/calendared, ACM, coroplast, polycarbonate, foam board, banner, aluminum sheet, vehicle wrap film) with per-material bleed %, waste factor %, and minimum quantity rules. Not a field that accepts a price — a full pricing engine. This is the wedge feature that wins the demo and differentiates SignFlow from every other tool in the sub-$200/month market.

**Sign-specific job stages.** Quote → Design → Proof Sent → Proof Approved → In Production → Cut/Fabrication → Installer Scheduled → Installed → Invoiced. Not "To Do / In Progress / Done." Production managers at sign shops recognize this vocabulary immediately; it matches how they actually talk about work.

**ShopVOX migration tool.** Free self-serve CSV import of ShopVOX customer exports and job history. Removes the single biggest switching barrier. Every ShopVOX refugee is a potential customer; removing migration friction converts them.

**Independent ownership as trust signal.** ShopVOX was acquired by PE; Inktavo (SignTracker's parent) is the same roll-up vector. SignFlow's pricing is locked upfront. The community has been burned; independent ownership is a genuine differentiator in this market.

## Project Classification

- **Project Type:** SaaS Web App (browser-first, mobile-responsive for field installer use)
- **Domain:** Vertical software (sign shop job management)
- **Complexity:** Medium — standard CRUD for jobs/quoting/invoicing, substrate pricing engine with configurable material rules, customer-facing proof portal, CSV migration tooling, QuickBooks one-way export. No regulated data; customer PII and financial data require standard security attention.
- **Project Context:** Greenfield — new product built from scratch

## Success Criteria

### User Success

- **Quote creation time:** Active users build a complex multi-material quote (ACM + vinyl + banner) in under 15 minutes, measured via in-app event timing. Baseline for ShopVOX users is 30–60 minutes of manual math.
- **Proof approval cycle:** Average time from proof sent to client approval under 24 hours across all active accounts, measured from in-app events. Forum-reported baseline is 2–5 days via email chains.
- **Daily active use:** 80%+ of paying accounts log in 4+ days/week within 60 days of activation, measured via session logs.
- **Substrate calculator adoption:** 70%+ of accounts create at least one substrate-calculated quote within their first 7 days.
- **Migration success:** 85%+ of ShopVOX migrators report full customer list import in under 10 minutes.
- **Zero permit misses:** Production managers with permit-flagged jobs report 0 exterior jobs installed without confirmed permit status.
- **Installation documentation:** 80%+ of installed jobs have at least one photo attached via mobile upload.

### Business Success

| Milestone | Target | Timing |
|---|---|---|
| Beta customers (Signs101) | 15 free accounts active | Pre-launch |
| Paying customers | 30 | Month 3 |
| MRR | $2,500–$3,000 | Month 3 |
| Paying customers | 60 | Month 6 |
| MRR | $5,500–$6,500 | Month 6 |
| AppSumo LTD launch | 200+ LTD purchases | Month 6 |
| Paying customers | 100–130 | Month 12 |
| MRR | $10,000–$13,000 | Month 12 |
| Monthly churn | < 3% | Month 6 |
| Monthly churn | < 2% | Month 12 |
| NPS | ≥ 35 from first 20 paying customers | Month 3 |
| NPS | ≥ 50 | Month 12 |

**Strategic objectives:**
- Own "ShopVOX alternative" Google search intent by Month 6 (Page 1 ranking)
- Establish authentic Signs101.com presence as the community-recommended alternative
- Complete 20+ documented ShopVOX migrations in the first 3 months

### Technical Success

- **Quote calculation speed:** Substrate price calculation completes in < 500ms after dimension input
- **Page load:** Core app screens (production board, quote builder, job detail) load in < 2 seconds on standard broadband
- **Proof portal load:** Customer-facing proof portal loads in < 3 seconds with design file attached
- **Migration import:** ShopVOX CSV import of 1,000 customers completes in < 120 seconds
- **Uptime:** 99.9% availability for all core services
- **Mobile performance:** Photo upload from mobile browser completes in < 10 seconds on 4G for images up to 5MB
- **Data integrity:** Zero data loss on any user-facing operation; job history persists through any account modification

### Measurable Outcomes

| Metric | Month 3 | Month 6 | Month 12 |
|---|---|---|---|
| Paying customers | 30 | 60 | 100–130 |
| MRR | $2,500–$3,000 | $5,500–$6,500 | $10,000–$13,000 |
| ShopVOX migrations completed | 15+ | 30+ | 60+ |
| Signs101 organic mentions | 3+ | 10+/month | — |
| Trial-to-paid conversion | ≥ 20% | ≥ 25% | ≥ 30% |
| Monthly churn | — | < 3% | < 2% |
| NPS | ≥ 35 | ≥ 45 | ≥ 50 |
| Avg proof approval cycle | — | < 24 hrs | < 20 hrs |

## Product Scope

### MVP — Minimum Viable Product

The MVP delivers the sign shop estimating and production workflow: **Quote with substrate pricing → Job tracking → Proof approval → Install documentation → Invoice.** Every feature maps to a confirmed pain point in ShopVOX complaints or the substrate-pricing problem. Nothing is included that doesn't directly serve a paying customer's daily workflow.

**Core capabilities:**

1. **Substrate Pricing Calculator** — Material library with configurable types: vinyl (cast, calendared), ACM, coroplast, polycarbonate, foam board, aluminum sheet, banner material, vehicle wrap film. Per-material inputs: unit cost ($/sq ft or $/sheet), bleed %, waste factor %, minimum quantity rules. Quote builder: input job dimensions → auto-calculate material cost → add labor time estimates → produce line-item quote total. Save quotes as templates for repeat job types. PDF quote export with full line-item detail.

2. **Sign-Specific Production Board** — Kanban board with configurable lanes: Quote → Design → Proof Sent → Proof Approved → In Production → Cut/Fabrication → Installer Scheduled → Installed → Invoiced. Job cards show: customer name, job type, due date, assigned staff, permit flag (if exterior). Drag-and-drop stage progression. Filter/sort by due date, stage, assigned staff, permit status.

3. **Customer Proof Portal** — Shareable link per job (no client account or password required). Client views design file, approves or requests changes with a comment. Approval triggers automatic job stage advancement. Shop receives real-time notification on approval or change request. Branded with shop name and logo.

4. **ShopVOX CSV Migration Tool** — Upload ShopVOX customer export CSV, map fields, import customer list and contact details. Upload ShopVOX job export, import open and historical jobs into production board. Import preview with error handling before commit. Free access during free trial (migration is risk-free before purchase).

5. **Permit Flag for Exterior Sign Jobs** — Checkbox on job creation: "Exterior sign — permit required." Permit status tracking: Not Started / Applied / Issued / Final Inspection. Permit number field. Flagged jobs show distinct icon on production board. Permit status included in job detail view.

6. **Basic Invoicing with QuickBooks Export** — Generate invoice from completed job (pulls line items from quote). Send invoice by email with PDF attachment. Mark invoice as paid manually. QuickBooks Online one-way export (push invoice to QBO as draft). Full bidirectional sync is Phase 2; one-way export eliminates manual re-entry for MVP.

7. **Mobile-Responsive Job View** — Mobile-responsive web view of assigned jobs (no native app for MVP). Field installers view job details, notes, site address, and special instructions. Photo upload from phone attached to job record via mobile browser. Status update (mark as Installed) from mobile.

8. **Multi-User Access and Roles** — Owner/Admin: full access including billing and settings. Staff: production board, job creation, quoting, no billing. Installer: view assigned jobs, upload photos, mark installed. Up to 5 users on Small Shop plan; unlimited on Large Shop plan.

### Growth Features (Months 6–12)

- Native iOS/Android installer app with GPS check-in, offline mode, push notifications
- Full QuickBooks/Xero bidirectional sync
- Supplier price list import (auto-update material costs when supplier invoices arrive)
- Vehicle wrap yield calculator (roll width, vehicle template, minimize material waste)
- Advanced reporting: job profitability per type, material cost trends, quote-to-close rate
- Multi-location support with consolidated reporting dashboard
- Automated client SMS/email updates at configurable production milestones
- Estimate follow-up automation (reminder to client if quote pending > N days)

### Future Vision (Year 2+)

- AI-assisted quoting: upload a photo or architect drawing → auto-detect sign dimensions → pre-populate material quantities
- Permit database integration: input install address → surface city permit requirements, fee schedule, typical turnaround
- Franchisor channel: white-label or franchise-specific pricing module for Fastsigns/Signarama franchisees
- Subcontractor scheduling: managing third-party install crews with external logins and mobile app access
- B2B repeat order portal: large clients (real estate companies, retail chains) submit repeat orders directly into the production board
- ISA Sign Expo partnership and ISA member discount program
- Open API for third-party integrations (accounting, CRM, supplier catalogs)

## User Journeys

### Journey 1: Marcus — Estimator-Owner, ShopVOX Refugee, First Quote

**Opening Scene:** Marcus owns a 6-person sign shop in suburban Atlanta. Revenue ~$650K/year. He's been on ShopVOX 4 years. He got his renewal notice last week: $379/month, up from $219. He opened Signs101.com and found a 200-reply thread: "ShopVOX alternatives after the price hike." A member with 800+ posts wrote: "Been testing SignFlow beta for 3 weeks. Substrate calculator actually works the way I think about ACM jobs." Marcus clicks the link in the reply.

**Rising Action:** Marcus visits SignFlow's homepage. Headline: "Sign shop management at half the ShopVOX price. Import your ShopVOX data in 2 minutes." He sees $99/month for 5 users. He starts a free trial. The setup asks for shop name, his most common labor rate, and if he wants to import from ShopVOX. He uploads his ShopVOX customer CSV. 312 customers appear in 45 seconds.

Day 2. A new inquiry comes in: a local restaurant wants a storefront package — one 4×8 ACM cabinet sign, window vinyl across 3 panels (each 36×48"), and a 3×8 banner. Marcus opens SignFlow's quote builder. He selects ACM from the material library — his unit cost is already entered from setup: $28/sheet. He inputs 4×8, sets his bleed at 10% and waste at 15%. The material cost appears: $34.20 for the sheet plus waste. He adds his markup (42%) and gets a line-item cost in 90 seconds. He does the same for the vinyl and the banner. The three-line quote is costed in under 10 minutes. His previous workflow: 45 minutes of spreadsheet math.

**Climax:** Marcus sends the PDF quote to the restaurant owner. The owner replies same day — he wants to see a proof before committing. Marcus uploads the design file to the job's proof portal, copies the link, and pastes it in his email reply. The restaurant owner opens a clean, branded page showing the design. He types one comment ("can we add the website URL to the banner?"), and clicks "Request Changes." Marcus gets a Slack-style notification in SignFlow. He sends the revised file, the owner clicks "Approve." The job automatically moves from "Proof Sent" to "Proof Approved" on the production board. Marcus never checked email.

**Resolution:** Marcus subscribes at $99/month before his trial ends. He cancels ShopVOX that afternoon. He posts on Signs101: "Moved off ShopVOX last week. ACM substrate calculator is actually better than ShopVOX's, and it's $99 vs $379. Happy to answer questions." The thread gets 28 replies in 4 hours.

**Capabilities revealed:** ShopVOX CSV customer import, substrate material library, configurable bleed/waste/markup, multi-material quote builder, PDF quote export, proof portal link sharing, client approve/request-changes flow, production board automatic stage advancement, in-app notifications

---

### Journey 2: Janelle — Production Manager, Eliminating the Whiteboard

**Opening Scene:** Janelle manages production at a 12-person sign shop in Phoenix. She processes 30–50 job status updates daily. Her shop has been on ShopVOX, but Marcus (the owner) switched to SignFlow two weeks ago. Janelle is adapting. Her biggest daily problems: (1) proof approvals — clients email back instead of using the ShopVOX portal, so she manually updates job status; (2) permit tracking — she has a sticky note on her monitor for every exterior job waiting on a permit; (3) the install crew texts her photos that she re-uploads to job records manually.

**Rising Action:** Janelle logs into SignFlow's production board for the first time on her own. She customizes the stages to match how the shop actually works — moving "Cut/Fabrication" before "Installer Scheduled" since that's how their floor actually flows. She creates a filter view: "Exterior jobs with permit status = Applied." Five jobs appear, all with permit numbers she enters. The sticky note comes off her monitor.

A job comes in for a large exterior monument sign — a real estate company, HOA approval required on top of city permit. Janelle creates the job, checks "Exterior — permit required," sets status to "Applied," enters the permit number, and adds a note: "HOA approval also needed — contact is Sarah Chen, 480-555-0192." Any team member who opens this job sees all of it without calling Janelle.

**Climax:** Two days later, Janelle is in a production meeting. Her installer Tyler texts: "Monument sign is in. Photos sent." But Janelle is not at her desk. She opens SignFlow on her phone. The job shows Tyler has uploaded 4 photos and moved the status to "Installed." She doesn't need to do anything — she approves with a tap and the job moves to "Invoiced" queue. Marcus sees it too without anyone telling him.

That afternoon, a client emails about a proof. Janelle checks SignFlow — the client already approved via the portal 40 minutes ago. She didn't see the email. The job is already in production. She replies to the email: "Great news — your approval already came through. Job is in production now."

**Resolution:** Month 2. Janelle's morning routine is: open SignFlow production board, filter by "due this week," check permit-flagged jobs. No sticky notes. No missed permits. No email hunting for approvals. She tells Marcus: "I spend maybe 20% of the time I used to on job tracking."

**Capabilities revealed:** Configurable production board stages, permit flag with status tracking and permit number, permit notes, mobile job view, installer photo upload with status update, production board filter by permit/stage/due date, proof portal with client email-bypass approval, real-time status visibility to all roles

---

### Journey 3: Tyler — Field Installer, From Paper to Phone

**Opening Scene:** Tyler does installations for the same Phoenix shop. He's on the road 8 hours a day. Every morning his boss texts him a photo of a printed job list — shop name, address, what's being installed. When he finishes, he photographs the job with his personal phone and texts the photos to Janelle, who re-uploads them to the job record. He frequently doesn't have the client's contact name when he shows up. He once installed at the wrong address because the text cut off mid-message.

**Rising Action:** Janelle sets Tyler up with an Installer account. He downloads nothing — she texts him the SignFlow URL and he bookmarks it on his phone. When he opens it, he sees his install queue: three jobs for today, sorted by time. He taps the monument sign job. He sees: installation address (with a Maps tap-to-navigate link), client contact (Sarah Chen, with phone number), job notes ("HOA requires photo with address number visible"), dimensions of the sign, and the permit number.

**Climax:** Tyler arrives at the site. The sign goes up. He opens SignFlow on his phone, taps "Add Photos," and takes 6 photos without leaving the app. He taps "Mark as Installed." The job status flips in real time. Janelle sees it. Marcus sees it. Sarah Chen gets an automated email: "Your monument sign installation is complete. Photos attached." Tyler drives to his next job.

Two weeks later, Tyler is installing a set of window decals when the client comes out and says the address on the decal is wrong — "It should be Suite 200, not 201." Tyler opens the job in SignFlow and sees the approved proof — the client approved Suite 201. He shows her the portal approval confirmation on his phone. She pulls up her email and confirms she approved it. "My mistake. Can you still fix it?" Tyler calls Janelle. She knows the full context before he finishes his first sentence.

**Resolution:** Tyler no longer gets paper job lists. He hasn't texted a photo to Janelle in three weeks. He shows up to every site knowing the client's name and what's expected. He has had zero wrong-address installs since switching.

**Capabilities revealed:** Installer role with limited view (own assigned jobs only), mobile-responsive job detail (address, client contact, notes, permit info, dimensions), tap-to-navigate integration, in-app photo upload, mobile status update, proof portal approval history as accountability record, real-time status visibility across all roles

---

### Journey 4: The Client — Proof Approval Without the Portal Friction

**Opening Scene:** Danielle is a marketing manager at a regional restaurant chain. She hired a sign shop for a full rebrand — exterior signage, window graphics, and a menu board. She is managing 8 vendors simultaneously. She received a "proof approval" email from her sign shop before with a link to a portal that required her to create an account. She ignored it for 3 days. The shop called to follow up. She felt bad but didn't have time to figure out the portal.

**Rising Action:** The sign shop is now on SignFlow. Danielle gets an email: "Your proof is ready for review. Click to view and approve — no account needed." She taps the link on her phone while waiting for a meeting to start. The page loads in under 3 seconds. She sees the exterior sign design, clearly labeled, with the shop's logo in the header so she knows it's legitimate. Below the design: two buttons — "Approve" and "Request Changes."

**Climax:** She spots that the restaurant logo on the sign uses the old tagline — the brand refresh removed it. She taps "Request Changes," types: "Please remove the tagline — we launched the new brand last month. No tagline on any new materials." She taps Submit. She closes the browser. One minute total.

At the shop, the production manager sees the change request immediately. The job stage stays at "Proof Sent" (it won't advance until approval). The designer makes the change, re-uploads, sends a new proof link. Danielle gets another email with no account required. She opens it, sees the updated design with no tagline, taps "Approve." The job advances to "Proof Approved" automatically.

**Resolution:** Two weeks later, Danielle gets an email from the installer app: "Your exterior sign installation is complete." She clicks through and sees 4 photos of the installed sign. She forwards it to her CEO. The sign shop gets a Google review: "Super professional. They actually made it easy to approve designs."

**Capabilities revealed:** Password-free proof portal (link-only access), mobile-responsive proof display, approve/request-changes with comment, automatic job stage advancement on approval, new proof link delivery on revision, re-approval flow, installation completion notification with photo attachments

---

### Journey 5: Admin — ShopVOX Migration, Day One Onboarding

**Opening Scene:** Chris owns a 4-person sign shop in Denver and has been on ShopVOX for 6 years. He has 490 customers, years of job history, and a substrate pricing library he's built up over time. He's seen the price hike. He's been hesitating to switch because "my whole business is in there." His fear: migrating 490 customers and losing historical job context.

**Rising Action:** Chris signs up for a SignFlow free trial. The onboarding flow offers: "Already on ShopVOX? Import your data now — it's free even during your trial." He clicks. A guided upload page explains what to export from ShopVOX and how. He downloads his ShopVOX customer CSV export (3 columns: name, email, phone). He uploads it to SignFlow. A preview shows 490 rows. Three have missing email fields — flagged in yellow with "optional field." He clicks "Import All." 490 customers appear in SignFlow in 68 seconds.

He uploads his ShopVOX job history export. 84 historical jobs and 12 open jobs appear in the production board. The 12 open jobs have their most recent status imported. He updates two of them to current stage manually.

**Climax:** Chris opens his substrate pricing setup. He enters his 6 most common materials — vinyl cast, ACM 3mm, coroplast 4mm, banner, aluminum composite, and foam board — with the costs and waste factors from his old spreadsheet. It takes 22 minutes. His next quote uses the calculator: a 4×4 ACM sign with 10% bleed and 12% waste comes out to $29.40 in material cost. He double-checks against his spreadsheet: $29.18. Close enough to retire the spreadsheet.

**Resolution:** Chris subscribes before his trial ends. He never logs into ShopVOX again. He exports his ShopVOX data one final time as an archive. He posts on Signs101: "Migration was 90 minutes total. Job history is there. Would not go back."

**Capabilities revealed:** ShopVOX CSV customer import with field mapping and error preview, historical job import with production board placement, substrate material library setup, manual material cost entry (bleed %, waste %, markup %), quote calculation validation

### Journey Requirements Summary

| Journey | Key Capabilities Revealed |
|---|---|
| Marcus (estimator-owner) | Substrate calculator, PDF quote, proof portal, CSV import, production board |
| Janelle (production manager) | Board customization, permit tracking, filter/sort, mobile status visibility |
| Tyler (field installer) | Installer mobile view, photo upload, status update, proof accountability |
| Danielle (client) | Password-free portal, mobile proof review, change request, revision flow |
| Chris (admin/migrator) | ShopVOX migration, substrate library setup, historical job import |

## SaaS Web Application Requirements

### Architecture Considerations

SignFlow is a multi-tenant SaaS web application with a browser-first design and mobile-responsive layout for field installer access. No native mobile app in MVP — mobile browser covers the installer use case.

**Multi-tenancy:** Each shop is an isolated tenant. Job data, substrate pricing libraries, customer records, and proof portal links are tenant-scoped. One tenant cannot access another's data.

**Role-based access:** Three roles (Owner/Admin, Staff, Installer) with distinct permission scopes. Role enforcement at API level — not just UI.

**External integrations:** QuickBooks Online (OAuth, one-way invoice push), email delivery (transactional email for proof links and invoice PDFs), file storage (design file attachments on proof portal), mobile camera access via browser (MediaDevices API for photo upload).

**Customer-facing proof portal:** Public-facing URLs with no authentication. URLs must be unguessable (UUID-based tokens). Rate-limited to prevent enumeration. Branded per-tenant (shop logo and name).

### Technical Architecture Considerations

- **File storage:** Design files and installation photos stored in object storage (S3-compatible). Files associated with job records. Proof portal serves design files from CDN for < 3-second load.
- **PDF generation:** Quote and invoice PDFs generated server-side on demand. Substrate line items, labor, and totals clearly formatted.
- **CSV parsing:** ShopVOX customer and job exports parsed with configurable field mapping. Validation before commit; preview with error highlighting.
- **Substrate pricing engine:** Server-side calculation with configurable per-material rules (bleed %, waste %, minimum yield, unit cost). Calculation is deterministic and testable.
- **Notification delivery:** In-app notifications for proof approvals and change requests. Email notifications for proof portal events and invoice delivery.

### Tenant Model

- Each shop account is a tenant with isolated data
- Owner/Admin user is created at signup; additional users invited by email
- Plans determine user seat count: Solo (1 user), Small Shop (5 users), Large Shop (unlimited)
- Proof portal URLs are public but token-protected; tokens are per-job and revocable

### Permission Matrix

| Capability | Owner/Admin | Staff | Installer |
|---|---|---|---|
| View all jobs | ✅ | ✅ | ❌ |
| View assigned jobs | ✅ | ✅ | ✅ |
| Create/edit jobs | ✅ | ✅ | ❌ |
| Create quotes | ✅ | ✅ | ❌ |
| Manage substrate library | ✅ | ❌ | ❌ |
| Upload proof files | ✅ | ✅ | ❌ |
| Upload install photos | ✅ | ✅ | ✅ |
| Update job status | ✅ | ✅ | Installed only |
| Manage users | ✅ | ❌ | ❌ |
| Billing access | ✅ | ❌ | ❌ |
| Run CSV migration | ✅ | ❌ | ❌ |

## Project Scoping & Phased Development

### MVP Strategy & Philosophy

**MVP Approach:** Problem-solving MVP — deliver the minimum set of features that replace the sign shop's core daily workflow and make a paying customer say "I could run my business on this." The substrate calculator + production board + proof portal is the core loop. Everything else (invoicing, migration tool, permit flag) removes specific switching barriers or adds stickiness.

**Resource Requirements:** 1 full-stack developer, 1 product/design lead, 8–12 week build. Signs101 community engagement begins in parallel during build.

### MVP Feature Set (Phase 1)

**Core User Journeys Supported:**
- Estimator-Owner: Build substrate-calculated quote, send to client, track through production
- Production Manager: Monitor job status, track permit requirements, see proof approval status
- Field Installer: View job details on mobile, upload photos, mark installed
- Client: Review and approve proof via link (no account required)
- Admin: Migrate from ShopVOX, set up substrate pricing library

**Must-Have Capabilities:**
1. Substrate pricing calculator with configurable material library
2. Sign-specific production board (kanban with 9 configurable stages)
3. Customer proof portal (link-only, no client login)
4. ShopVOX CSV migration tool (customers and jobs)
5. Permit flag with status tracking
6. Quote builder with PDF export
7. Basic invoicing with QuickBooks one-way export
8. Mobile-responsive job view with photo upload
9. Multi-user access with Owner/Admin/Staff/Installer roles

### Post-MVP Features

**Phase 2 (Months 6–12):**
- Native iOS/Android installer app (offline mode, GPS check-in, push notifications)
- Full QuickBooks/Xero bidirectional sync
- Supplier price list import (auto-update material costs from supplier invoices)
- Vehicle wrap yield calculator
- Multi-location consolidated reporting
- Automated client milestone notifications (SMS/email at configurable stages)
- Estimate follow-up automation

**Phase 3 (Year 2+):**
- AI-assisted quoting from photos/drawings
- Permit database integration (city requirements lookup by address)
- Franchisor/white-label channel
- Subcontractor external portal
- B2B repeat order portal
- Open API

### Risk Mitigation Strategy

**Technical Risks:** Substrate pricing engine must handle edge cases (minimum yield rules, partial sheet usage) correctly — miscalculated quotes directly cost shops money. Mitigation: extensive unit testing with real-world material specs validated by beta users before public launch.

**Market Risks:** ShopVOX could reverse its price hike under PE pressure (unlikely) or accelerate product improvement. Mitigation: the substrate calculator's depth creates standalone value independent of price comparison; moving fast to capture migration window while it's open.

**Resource Risks:** 8–12 week build timeline with one developer is aggressive. Mitigation: prioritize substrate calculator + production board as the first 4 weeks; proof portal and migration tool in weeks 5–8; invoicing and QuickBooks export in weeks 9–12. Partial product can launch with beta customers after week 6.

## Functional Requirements

### Substrate Pricing & Quoting

- FR1: Estimators can define material types in a substrate library with name, unit (sq ft or sheet), unit cost, standard bleed %, waste factor %, and minimum quantity rules
- FR2: Estimators can update material costs in the substrate library without affecting historical quotes
- FR3: Estimators can create a quote by selecting one or more materials from the library, inputting job dimensions, and receiving auto-calculated material cost including bleed and waste
- FR4: Estimators can add labor line items (hours × hourly rate) to a quote
- FR5: Estimators can apply a configurable markup percentage per material or per job
- FR6: Estimators can save a quote as a template for reuse on repeat job types
- FR7: Estimators can generate a PDF from a completed quote containing all line items, totals, shop name, and client contact
- FR8: Estimators can send a PDF quote to a client via email directly from the platform
- FR9: Estimators can duplicate an existing quote as a starting point for a new job

### Job & Production Board Management

- FR10: Users can create a job record with customer, job type, due date, assigned staff, materials summary, and notes
- FR11: Production managers can view all active jobs on a kanban board with stages: Quote / Design / Proof Sent / Proof Approved / In Production / Cut-Fabrication / Installer Scheduled / Installed / Invoiced
- FR12: Production managers can configure which stages appear on the production board and rename stages to match shop terminology
- FR13: Users can drag and drop job cards between production stages to update status
- FR14: Users can filter the production board by stage, due date, assigned staff, and permit status
- FR15: Users can attach files (design files, reference images) to any job record
- FR16: Users can add time-stamped notes to a job record visible to all authorized team members
- FR17: Owners/admins can assign jobs to specific staff members or installers

### Permit Tracking

- FR18: Users can flag a job as "exterior sign — permit required" at creation or any time before installation
- FR19: Users can set permit status on flagged jobs: Not Started / Applied / Issued / Final Inspection
- FR20: Users can record a permit number and permit-related notes on flagged jobs
- FR21: Production managers can view all permit-flagged jobs filtered by permit status from the production board

### Customer Proof Portal

- FR22: Staff can upload a design file (image or PDF) to a job and generate a shareable proof portal link
- FR23: Clients can open the proof portal link in a browser without creating an account or logging in
- FR24: Clients can view the uploaded design file on the proof portal and submit a response: Approve or Request Changes (with required comment on changes)
- FR25: Client approval on the proof portal automatically advances the job stage from "Proof Sent" to "Proof Approved"
- FR26: Staff receive an in-app notification and email when a client approves or requests changes via the proof portal
- FR27: Staff can upload a revised design file to the same job and send a new proof link after a change request
- FR28: The proof portal displays the shop's name and logo (not SignFlow branding)
- FR29: The proof portal link is unique per-job and can be revoked by staff

### ShopVOX Migration

- FR30: Admins can upload a ShopVOX customer export CSV and preview mapped fields before committing the import
- FR31: The CSV import flags rows with missing required fields (name) and allows import of rows with missing optional fields (email, phone)
- FR32: Admins can upload a ShopVOX job export CSV and import open and historical jobs into the production board with their last known status
- FR33: Admins can run the CSV migration during the free trial period without a paid subscription

### Invoicing & QuickBooks Export

- FR34: Users can generate an invoice from a completed job, pre-populated with line items from the associated quote
- FR35: Users can add or remove line items on an invoice before sending
- FR36: Users can send an invoice to the client via email with a PDF attachment
- FR37: Users can manually mark an invoice as paid with a payment date
- FR38: Admins can connect a QuickBooks Online account via OAuth authorization flow
- FR39: Users can push a completed invoice to QuickBooks Online as a draft invoice for review and posting
- FR40: Admins can view a log of QuickBooks export attempts with success/failure status per invoice

### Field Installer Mobile View

- FR41: Installers can view their assigned jobs on a mobile-responsive web interface showing job address, client contact, notes, permit info, and dimensions
- FR42: Installers can upload photos to a job record from a mobile device's camera or photo library via the mobile browser
- FR43: Installers can update a job's status to "Installed" from their mobile device
- FR44: Installed photos and status updates made by installers are immediately visible to all authorized users in the production board

### User & Account Management

- FR45: Owners can invite team members by email and assign them a role: Staff or Installer
- FR46: Owners can remove team members from the account
- FR47: Owners can view and update the account's subscription plan and billing details
- FR48: All users can reset their password via email link
- FR49: Owners can upload the shop logo, which appears on the proof portal and invoice PDFs
- FR50: Owners can set the shop's default hourly labor rate, used as a starting value in new quotes

## Non-Functional Requirements

### Performance

- The substrate pricing calculation (material cost + bleed + waste) completes in < 500ms after the user inputs final dimension, as measured by server-side API response time
- Core app screens (production board, quote builder, job detail) load in < 2 seconds on a 20 Mbps connection as measured by Lighthouse performance audit
- The customer proof portal loads with design file preview in < 3 seconds on a 10 Mbps connection as measured by synthetic monitoring
- ShopVOX CSV import of up to 1,000 customer rows completes in < 120 seconds as measured by end-to-end import timing
- Photo uploads from mobile (up to 5MB) complete in < 10 seconds on a 4G connection (10 Mbps mobile) as measured by upload event timing

### Security

- All data transmitted between client and server is encrypted via TLS 1.2 or higher
- Passwords are stored as salted hashes (bcrypt or Argon2); plaintext passwords never persisted or logged
- Proof portal URLs use UUID v4 tokens (122 bits of entropy); URLs are not guessable or enumerable
- Proof portal endpoints are rate-limited to 60 requests/minute per IP to prevent enumeration
- QuickBooks OAuth tokens stored encrypted at rest; never exposed in API responses or logs
- Customer PII (names, emails, phone numbers) and financial data (invoice amounts) are logically isolated per tenant; no cross-tenant data access possible through any API endpoint
- Role-based access enforced at the API layer; UI role restrictions are supplementary, not primary

### Scalability

- Application architecture supports horizontal scaling of web and API layers to handle 10x current load without architecture changes
- Database schema and indexing support production boards with up to 5,000 active jobs per tenant without query degradation
- File storage is cloud-object-based (S3-compatible) with no per-tenant storage limit in architecture; storage costs passed through at billing if needed

### Integration

- QuickBooks Online integration uses the official QuickBooks OAuth 2.0 API; no third-party middleware
- Transactional email (proof portal notifications, invoice delivery) delivered via a reputable ESP (SendGrid or equivalent) with delivery tracking
- PDF generation is server-side and deterministic; same quote inputs always produce identical PDF output
- CSV import accepts standard UTF-8 encoded CSV files with or without BOM; handles Windows line endings
- Mobile photo upload uses the browser's native `<input type="file" accept="image/*" capture>` — no camera SDK required; compatible with iOS Safari 15+ and Android Chrome 90+
