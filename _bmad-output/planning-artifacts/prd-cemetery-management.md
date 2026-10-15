---
stepsCompleted: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
inputDocuments:
  - ideas/shortlisted/cemetery-management-gravekeeper.md
  - _bmad-output/planning-artifacts/market-research-cemetery-management.md
  - _bmad-output/planning-artifacts/brief-cemetery-management.md
workflowType: 'prd'
classification:
  projectType: saas_b2b
  domain: vertical-saas-records-management
  complexity: medium
  projectContext: greenfield
date: '2026-10-14'
author: Root
---

# Product Requirements Document — GraveKeeper

**Author:** Root
**Date:** 2026-10-14
**Product:** GraveKeeper — Cemetery Management SaaS
**Version:** 1.0

---

## Executive Summary

GraveKeeper is a cloud-native cemetery management SaaS platform targeting the 80,000+ small municipal, church-run, and privately-owned US cemeteries operating on 1990s desktop software (Cemetery Workstation, Sacred Grounds) or spreadsheets. Legacy desktop licenses command $2,000–$10,000/year, validating willingness to pay; no affordable cloud alternative exists with managed data migration.

**Core value proposition:** GraveKeeper eliminates the #1 adoption barrier — migration fear — by doing the digitization work for the cemetery. For a one-time fee, GraveKeeper's team imports paper records, builds the plot map, and migrates legacy software data. The cemetery goes live in weeks, not months, then pays $99–$149/month for cloud-hosted operations, digital family search, and interment scheduling.

**Primary target users:**
- Municipal Parks & Recreation administrators managing city cemeteries on Excel/paper
- Church and parish secretaries responsible for 100–200-year-old burial ledgers with no IT support
- Private cemetery owner-operators currently paying $2,400+/year for legacy desktop licenses

**Market position:** Compete above the free tier (Everspot, Chronicle Basic) and below the enterprise tier (PlotBox) with white-glove service as the key differentiator over same-price competitors (CemeteryBase, Cemify). Church/faith-based vertical features distinguish GraveKeeper from all current affordable-tier players.

### What Makes This Special

The differentiation is not primarily features — it is the **service model**. GraveKeeper leads with managed onboarding as a monetized service, not a free trial perk. This creates a fundamentally different sales motion: instead of selling software and hoping the customer does the data work, GraveKeeper sells "we'll do the hard part for you" and converts that into recurring subscription revenue.

No affordable cemetery software competitor offers managed migration. The institutional buyers (municipal government, church councils) who most need this product are also the least capable of self-serving a migration — they will pay a premium for the service layer. Once records are migrated and operational workflows are embedded, churn approaches zero: the data is institutionally irreplaceable.

**Secondary differentiator:** Church/faith-based vertical features (diocesan reporting templates, sacramental record fields, parish association channel access) for the 30,000–50,000 parish cemeteries that no current platform targets specifically.

## Project Classification

- **Project Type:** B2B SaaS — cloud-hosted multi-tenant web application, single-cemetery per tenant
- **Domain:** Vertical SaaS — cemetery operations, records management, institutional data
- **Complexity:** Medium — sensitive PII (deceased and family data), state-specific record retention compliance, multi-decade historical data, institutional buyers with formal procurement processes
- **Project Context:** Greenfield — no existing codebase; net-new product

---

## Success Criteria

### User Success

Cemetery administrators succeed when they stop answering phone calls from families asking "Where is [name] buried?" and instead direct families to the public portal. The core user success signal is operational time savings.

**Primary success moments:**
- Admin sends a family a portal link instead of doing a manual lookup — first time this happens is the "aha" moment
- An interment is scheduled and confirmed without a single phone call to the funeral home
- A city council member asks about record backup; admin answers "yes, it's in the cloud" without stress

**Measurable user outcomes:**
- Cemetery administrators reduce "grave location lookup" phone calls by ≥60% within 90 days of portal launch
- Time to answer a family burial inquiry: from 10–15 minutes (manual lookup) to 0 minutes (portal self-service)
- Admins complete a new burial record entry in under 5 minutes
- Managed migration customers have 100% of their known records importable and searchable within 2 weeks of onboarding
- Family public portal receives ≥50 searches/month per active cemetery by month 3

### Business Success

**12-month targets:**
- 75 paying customers at $99–149/month = $7,425+ MRR
- 20 managed migration engagements completed at $500–$2,000 each = $15,000–$40,000 one-time revenue
- 150+ AppSumo or direct LTD buyers at $299–$599 = $45,000–$90,000 LTD revenue
- 5+ referral leads/month from ICCFA/state association channel by month 9
- 10+ verifiable customer case studies published

**18-month targets:**
- $15,000/month MRR (150 paying customers)
- Top-3 Capterra ranking for "cemetery management software"
- 3+ diocesan or denominational endorsements for church vertical launch

**Key indicators:**
- Demo-to-trial conversion: ≥40%
- Trial-to-paid conversion: ≥30%
- Monthly churn: ≤2% by month 6
- CAC via association channel: ≤$500; via SEO/content: ≤$200
- Net Revenue Retention: ≥105% (tier upgrades as cemetery grows)

### Technical Success

- System maintains 99.9% uptime during business hours (Mon–Fri 7AM–7PM local time) — cemetery administrators are not technical; downtime creates support burden disproportionate to scale
- All burial records and plot data backed up with ≤24-hour RPO and ≤4-hour RTO
- Plot map renders and is interactive for up to 25,000 plots without browser performance degradation
- Data export available in open formats (CSV, PDF) at any time — "data portability guarantee" is a sales requirement for institutional buyers
- Public family portal search returns results in ≤2 seconds for any query against up to 100,000 records

---

## Product Scope

### MVP — Minimum Viable Product

**Timeline:** 4–6 weeks build, 8–12 weeks to first 10 paying customers

**Core user journeys supported:**
1. Administrator imports/enters burial records → records are searchable
2. Family member finds a grave location via the public portal without calling
3. Administrator schedules an interment and notifies the funeral home
4. Administrator records a plot sale and generates a deed PDF
5. New customer books a managed migration call and gets onboarded

**Must-have capabilities (MVP):**
1. Interactive SVG/Canvas plot map with section/row/lot structure, status visualization, and click-to-view record linking
2. Searchable burial records database with CSV/Excel import, full-text search, and PDF/CSV export
3. Interment scheduling module with status workflow and email notification to funeral home
4. Plot sales recording with PDF deed generation from customizable template
5. Family search portal as embeddable iframe with no login required
6. Admin dashboard with summary metrics, activity feed, and quick search
7. User management with admin and staff roles
8. Guided onboarding wizard + managed migration service booking flow
9. Sample data sandbox for pre-import testing

**MVP success gate:** 10 paying customers at $99+/month within 90 days of launch, with 0 cancellations and NPS > 50.

### Growth Features (Post-MVP)

**Phase 2 (Months 4–9):**
- Perpetual care fee billing automation with ACH collection
- Church/faith-based feature tier: diocesan reporting templates, sacramental record fields, multi-language interface (Spanish, Polish priority)
- QuickBooks/accounting integration for revenue sync
- Enhanced analytics dashboard: revenue trends, plot inventory aging, portal usage
- Mobile-responsive enhancement for groundskeeping crew plot verification

### Vision (Future)

**Phase 3 (Months 9–18):**
- GPS grave navigation via smartphone (walk-to-grave)
- Historical record AI digitization: OCR of scanned paper ledgers with AI-assisted field extraction
- FamilySearch/FindAGrave API integration for public record indexing
- Multi-site management for cemetery groups and dioceses managing multiple cemeteries
- Monument permit workflow and inspection scheduling
- Catholic Cemetery Association and state denominational association formal partnerships

**Phase 4 (18+ months):**
- Open API for funeral home software integrations (FuneralTech, Passare)
- White-label option for state cemetery associations
- AI-powered genealogy research assistant ("Who else in this family is buried here?")
- Pre-need trust management module

---

## User Journeys

### Journey 1: Margaret — Municipal Administrator, First Value Delivery

**Opening scene:** Margaret, 58, is the Parks & Recreation coordinator for a mid-sized Midwestern city. The cemetery is one of dozens of responsibilities she juggles. Last week, the city manager forwarded her a council memo: "We need all records in the cloud by Q3." She has no idea where to start.

**Rising action:** Margaret Googles "cemetery management software cloud." She finds a Capterra comparison showing CemeteryBase, Chronicle, and GraveKeeper. She emails all three asking the same question: "We have 40 years of records in Excel and paper. Can you help us import them?"

CemeteryBase auto-replies with a link to their documentation. Chronicle sends a feature sheet. GraveKeeper responds within 4 hours: "Yes — we can do the migration for you. Can we schedule a 30-minute call to review your files and give you a quote?"

**Climax:** On the call, GraveKeeper reviews Margaret's Excel file. Her 2,300 burial records need cleanup (inconsistent date formats, missing plot numbers for 200 entries). GraveKeeper quotes $750 for managed migration, waives the first month of software. Margaret gets city manager approval in two days — under the $5,000 threshold requiring council vote.

Three weeks later, migration is complete. Margaret's first test: a family called asking for her grandmother's grave. For the first time in 15 years, Margaret says: "Actually, you can find her yourself at [portal link]. Just search her name." The call ends in 90 seconds instead of 10 minutes.

**Resolution:** Margaret sends the portal link to her city manager and city council. At the next Parks & Recreation quarterly review, she reports a 70% reduction in cemetery phone call volume. She mentions GraveKeeper at the state municipal administrators conference. Three colleagues ask for her contact.

**Capabilities revealed:** CSV import, managed migration booking, public family search portal, admin dashboard, interment scheduling (next interment after go-live).

---

### Journey 2: Linda — Parish Secretary, Diocesan Pressure Scenario

**Opening scene:** Linda, 64, retired schoolteacher and volunteer administrative assistant at St. Agnes Catholic Parish. The parish cemetery is 150 years old with 2,800 plots. The records exist in a handwritten ledger and a half-finished Excel file started 12 years ago that nobody has touched since.

Father Kevin hands her a diocesan circular: "All parishes are required to have digital backup of cemetery records by December 31." Linda doesn't know what software to use and has no IT support. She asks at the diocesan administrative meeting.

**Rising action:** Another parish secretary mentions GraveKeeper: "They were in the Catholic Cemetery Association newsletter. They migrate old records for you." Linda visits the website, watches the 3-minute demo video, and fills out the contact form. She specifically asks: "We have a 150-year handwritten ledger. Can you handle that?"

GraveKeeper responds: yes, they handle handwritten ledger digitization as part of the managed migration service. Quote: $1,800 for scanning + manual data entry for the 2,800 records. Linda presents it to Father Kevin and the finance committee as a $1,800 one-time + $99/month expense. Approved in one meeting.

**Climax:** The GraveKeeper team spends 8 days processing the scanned ledger. Linda provides a hand-drawn plot map; the team builds the digital version from it. At go-live, Linda opens the portal on her laptop and searches for the name of a parishioner buried in 1931. The record appears: Section C, Row 7, Lot 12.

She calls the family — a genealogy researcher who had been asking for months — and gives them the portal link. Twenty minutes later they email back: "We found four generations of our family. Thank you so much."

**Resolution:** Linda generates the annual diocesan cemetery statistics report with three clicks. Father Kevin mentions GraveKeeper to the diocesan pastoral administrator. Within a month, 4 other parishes reach out.

**Capabilities revealed:** Managed migration for handwritten records, embeddable portal, family search, diocesan reporting (Phase 2 signal — initial report is a manual export for MVP).

---

### Journey 3: Dave — Private Owner-Operator, ROI Migration

**Opening scene:** Dave, 47, inherited the family cemetery from his father. It has ~1,200 plots. He runs Cemetery Workstation on an aging Dell desktop. Last year the hard drive died — the IT shop recovered most of the data, but Dave still has nightmares about it. He's been paying $2,400/year for the Cemetery Workstation support contract and has started looking for alternatives.

**Rising action:** Dave compares CemeteryBase ($99/mo), Cemify ($799/yr), and GraveKeeper ($99/mo). All three look similar in features. He almost goes with CemeteryBase when he reads GraveKeeper's migration page: "We'll migrate your Cemetery Workstation data for you." He's been dreading doing that himself.

He signs up for a demo. His two main questions: "Can you get my data out of Cemetery Workstation?" and "What happens if I want to leave — can I take my data?"

GraveKeeper answers both directly: yes to Cemetery Workstation migration (they've done it for 12 other customers), and yes to data portability — full CSV and PDF export available at any time. Price: $500 migration fee (under 1,000 records) + $99/mo.

**Climax:** Dave compares: currently $2,400/year for desktop software that nearly cost him all his records. GraveKeeper: $500 one-time + $1,188/year = $1,688 year-one, $1,188/year ongoing. He saves $1,200/year while gaining cloud backup and a public family portal.

He signs up. Migration completes in 5 days. His plot map is live. His first family portal search — by his own late father's name — returns the result instantly.

**Resolution:** Dave cancels the Cemetery Workstation support contract. He mentions GraveKeeper to two other private cemetery owners he knows through the county funeral directors association. Both sign up within 60 days.

**Capabilities revealed:** Cemetery Workstation data migration, data export guarantee, plot map, cloud backup, family search portal, ROI pricing model.

---

### Journey 4: Family Member — Genealogy Self-Service

**Opening scene:** Sarah, 34, is building her family's genealogy tree. She's trying to find the grave of her great-great-grandmother, who she believes is buried at St. Agnes Cemetery in a small town in Ohio. It's Tuesday afternoon. The cemetery office has no website, just a phone number. She calls — no answer. The voicemail says to call back during business hours (Monday and Wednesday, 10AM–2PM only).

**Rising action:** Two weeks later, Sarah calls during business hours. A volunteer answers, puts her on hold for 8 minutes, and comes back to report: "I found an entry — it looks like Mary Kowalski, buried 1942, but I can't read the section clearly in the ledger."

Sarah googles the cemetery name one more time and finds a new website with a "Search Burial Records" widget embedded in the footer.

**Climax:** Sarah searches "Mary Kowalski" — three results appear. One matches: Mary Kowalski, born 1868, died 1942, buried Section D, Row 4, Lot 19. There's even a note field the volunteer added: "Marble headstone, legible."

Sarah screenshots the record. No phone call needed.

**Resolution:** Sarah emails her relatives the portal link. Her uncle visits the physical cemetery with his smartphone, uses the section/row/lot reference from the portal to locate the grave, and takes photos. He leaves a Google review for the cemetery: "Incredible — you can search for your ancestors online. This is how a cemetery should work in 2026."

**Capabilities revealed:** Public family portal (no login), search by name, view burial details, embeddable on cemetery website. The portal is a passive word-of-mouth engine for the cemetery and a passive sales channel for GraveKeeper.

---

### Journey 5: Cemetery Admin — Interment Scheduling (Coordination Use Case)

**Opening scene:** Robert, 52, is the administrator of a mid-sized municipal cemetery. A funeral home director named Carlos calls at 9 AM Tuesday: "We have a graveside service Friday at 2 PM, can you confirm plot availability and have the grave prepared?" Robert opens a spiral notebook to log the request. He then calls the groundskeeping crew foreman, who says he needs 24 hours notice minimum. Robert calls Carlos back to confirm. Then Carlos calls again Thursday to change the time to 3 PM. Robert updates his notebook, calls the crew again.

**Rising action:** Robert starts using GraveKeeper's interment scheduling module. When Carlos calls, Robert opens a new interment record: deceased name, date/time, funeral home contact (Carlos's email is already saved from a previous interment), family contact, plot assignment, and crew notes.

Robert clicks "Confirm" — Carlos receives an automatic email confirmation with the service details. Robert adds a note: "Crew needs east service road access — gate code is 2847."

**Climax:** Thursday, Carlos emails to change the time to 3 PM. Robert updates the interment record in 30 seconds, resends the confirmation. No phone tag. The crew foreman checks the interment calendar on GraveKeeper's mobile-responsive interface from the field.

Friday's service proceeds without a hitch. Robert marks the interment as Completed, updates the burial record with the grave depth and officiating minister details.

**Resolution:** Over 6 months, Robert's interment-related phone tag drops from 12–15 calls per interment to 3–4. He starts requiring funeral homes to submit interment requests through a structured form (Phase 2 feature signal). His crew stops missing service time notifications.

**Capabilities revealed:** Interment record creation, status workflow, email notification to funeral home, calendar view, notes field, record completion and linking to burial records.

---

### Journey Requirements Summary

| Journey | Core Capabilities Needed |
|---------|--------------------------|
| Margaret (Municipal) | CSV import, managed migration CTA, public portal, admin dashboard |
| Linda (Parish) | Handwritten ledger migration, embeddable portal, basic export report |
| Dave (Private owner) | Legacy software migration, data portability export, plot map, ROI pricing |
| Sarah (Family member) | Public portal search, name/date lookup, plot location display |
| Robert (Interment scheduling) | Interment record, status workflow, email notification, calendar, crew notes |

All journeys share: reliable cloud availability, simple admin interface, and data that cannot be lost.

---

## Domain-Specific Requirements

Cemetery management operates in a medium-complexity domain. No single federal framework governs burial records in the US, but several compliance considerations shape the product:

### Record Retention and Data Durability

Most US states require cemeteries to maintain burial records permanently. Specific requirements vary by state (e.g., California Health & Safety Code §8250 requires perpetual record-keeping). GraveKeeper must:
- Maintain all burial records indefinitely — no automatic deletion or expiration
- Provide data export to open formats (CSV, PDF) at any time, enabling customers to maintain independent backup
- Clearly communicate backup frequency and disaster recovery posture in marketing and onboarding materials (institutional buyers require this assurance)
- Prohibit record deletion without explicit admin confirmation and provide a 30-day recovery window

### Personal Identifiable Information (PII) Handling

Burial records contain PII for deceased individuals and their family contacts. Cemetery administrators are custodians of sensitive family data spanning generations:
- Deceased records: name, dates, place of birth/death — not typically regulated as sensitive PII for deceased individuals in the US, but treated with institutional care
- Family contact records: names, addresses, phone numbers, email addresses of living individuals — subject to standard PII handling obligations
- No payment card data processed by the core platform (deed payments may be recorded as amounts only, without card data)

### State Cemetery Regulatory Awareness

Approximately 12 states have specific cemetery authority boards (e.g., Illinois Cemetery Oversight Commission, Florida Department of Financial Services — Division of Funeral, Cemetery and Consumer Services). GraveKeeper does not provide legal compliance advice, but must:
- Support export of state-required record formats where applicable
- Design deed templates to be customizable per state legal requirements
- Clearly position as a records management tool, not a regulatory compliance system

### Data Portability as a Trust Requirement

Institutional buyers (municipal government, church councils, dioceses) will not adopt GraveKeeper without verified data portability. Burial records belong to the institution, not the software vendor:
- Full CSV export of all records must be available at any time without support intervention
- Account cancellation must include a 90-day data retention window post-cancellation with export access
- No vendor lock-in via proprietary formats

---

## Innovation & Novel Patterns

### Detected Innovation Areas

**Managed Migration as a Revenue-Generating Differentiator**

The central innovation in GraveKeeper is not a technology feature — it is a **business model innovation**: converting the #1 barrier to adoption (migration fear) into a monetized service. No affordable cemetery software competitor offers managed migration. Legacy enterprise software (PlotBox) provides professional services but only at enterprise price points.

This creates a unique sales motion: GraveKeeper's initial transaction is a professional service engagement ($500–$2,000), not a SaaS trial. The service builds deep customer relationship and data lock-in before the subscription begins. Post-migration churn is structurally near zero because the data migration effort is not repeatable.

**Church/Faith-Based Vertical Focus**

30,000–50,000 US cemeteries are operated by religious organizations. None of the current affordable SaaS players specifically target this segment. GraveKeeper's Phase 2 church vertical includes:
- Diocesan reporting templates (structured annual reporting to denominational authorities)
- Sacramental record field support (linking burial to baptism/confirmation records in parish systems)
- Multi-language interface for immigrant parish communities (Spanish, Polish, Vietnamese priority)

This creates a distinct, defensible niche within the already niche cemetery management space.

### Market Context

The managed migration model addresses a documented pattern in vertical SaaS: "Shopify did this for POS, Mindbody did this for fitness studios — the service layer is the adoption moat." At the $99/month price point, no competitor has chosen to invest in human-assisted onboarding. This creates a durable competitive advantage that cannot be replicated through feature parity alone.

### Validation Approach

**Migration model validation:** 5 paid managed migration engagements with written testimonials within 90 days of launch. If customers are unwilling to pay $500–$2,000 for migration, the model is invalidated — fall back to self-serve import tool only.

**Church vertical signal:** 3 diocesan administrative meetings or Catholic Cemetery Association presentations within 6 months to validate channel access before building Phase 2 church features.

### Risk Mitigation

- **Migration labor economics:** If migration takes more than 20 hours per engagement at current rates, the $500–$2,000 fee is not economically sustainable. Track actual hours per engagement and adjust pricing formula by month 3.
- **Feature copy risk:** CemeteryBase or Cemify could add managed migration as a feature. Mitigation: build the channel relationship (ICCFA, associations) as the true moat — the service is defensible only through customer trust and institutional endorsements.

---

## SaaS B2B Specific Requirements

### Tenant Model

GraveKeeper uses **single-cemetery tenancy**: each paying account represents a single cemetery. Data is isolated per account. Multi-site management (a diocese managing multiple cemeteries under one account) is a Phase 3 capability. For MVP:
- Each account maps to one cemetery with one set of plot maps, burial records, and interment schedules
- No cross-account data sharing or visibility
- Tenant data stored with logical separation; each cemetery's data is not accessible to other cemetery accounts

### Role-Based Access Control (RBAC)

**MVP Roles:**

| Role | Permissions |
|------|-------------|
| Admin | Full read/write access to all records, plots, interments, sales, user management, account settings |
| Staff | Read access to all records and plot map; create/edit interment records and burial records; cannot delete records, cannot access billing or user management |

Phase 2 will add: Read-only viewer role (for council members or diocesan oversight), Funeral Home Coordinator role (limited interment scheduling only).

### Subscription Tiers

| Tier | Price | Plot Limit | Notes |
|------|-------|------------|-------|
| Standard | $99/month | Up to 5,000 plots | Municipal and small church cemeteries |
| Professional | $149/month | 5,001–25,000 plots | Larger municipal and private cemeteries |
| Managed Migration Add-on | $500–$2,000 one-time | — | Priced by record volume (see migration tiers below) |

**Migration pricing tiers:**
- Under 1,000 records: $500
- 1,000–5,000 records: $1,000
- 5,000+ records or handwritten/complex: $2,000

**Lifetime Deal (LTD) track** (sold direct and via AppSumo):
- LTD Standard: $299 (up to 5,000 plots, perpetual license, includes 1 year of updates)
- LTD Professional: $599 (unlimited plots)

### Integration List (MVP and Phase 2)

**MVP integrations:**
- Email delivery (transactional email for interment notifications and account alerts) — SMTP via SendGrid or equivalent
- PDF generation (deed templates, record exports) — server-side generation
- Embeddable family portal (iframe/JavaScript widget for customer websites)

**Phase 2 integrations:**
- ACH payment processing for perpetual care fee billing — Stripe ACH
- QuickBooks Online — revenue sync for plot sales and perpetual care fees
- Planning Center Online / Church360 — parish management system data linkage for church vertical

**Phase 3 integrations:**
- FuneralTech / Passare — funeral home software API integration for structured interment requests
- FamilySearch / FindAGrave — public record indexing

### Compliance Requirements

- Burial records must never be automatically deleted; admin deletion requires explicit confirmation and 30-day recovery window
- Full data export (CSV + PDF) available to account admin at any time from account settings — no support ticket required
- Account cancellation triggers 90-day data retention window with continued export access
- All customer data encrypted at rest and in transit (TLS 1.2+, AES-256 at rest)
- Password policy: minimum 8 characters, breach detection via HaveIBeenPwned API check on registration
- No credit card data stored on GraveKeeper servers (payment processing delegated entirely to Stripe)

---

## Project Scoping & Phased Development

### MVP Strategy & Philosophy

**MVP Approach:** Problem-solving MVP — the minimum feature set that delivers the core value exchange: administrators stop answering phone calls from families asking for grave locations, and families can find that information themselves online.

**MVP philosophy:** Every MVP feature must either (a) directly reduce phone call volume for the admin or (b) enable the managed migration sale that converts customers from legacy systems. Features that don't trace to these two outcomes are Phase 2.

**Resource Requirements:** 1 full-stack developer (4–6 weeks) or 2 developers (2–3 weeks). The SVG plot map is the only technically complex component — everything else is standard CRUD + email notifications.

### MVP Feature Set (Phase 1)

**Core user journeys supported:**
- Administrator migration: CSV import / managed migration booking → records in system → searchable
- Family self-service: public portal → search by name → find grave location
- Interment workflow: create → confirm → email funeral home → complete
- Plot sale: record sale → generate deed PDF

**Must-Have Capabilities:**
1. Interactive plot map (SVG/Canvas) — status visualization, click-to-view/edit, CSV import
2. Burial records database — CRUD, full-text search, CSV/Excel import, CSV/PDF export
3. Interment scheduling — status workflow, email notification to funeral home, calendar view
4. Plot sales and deed generation — record sale, generate PDF deed from template
5. Family search portal — embeddable iframe, no-login search, read-only display
6. Admin dashboard — summary metrics, activity feed, quick search
7. User management — admin and staff roles
8. Onboarding wizard — guided setup, sandbox, managed migration CTA
9. Data export — full CSV export from account settings

### Post-MVP Features

**Phase 2 (Months 4–9):**
- Perpetual care fee billing and ACH collection
- Church/faith-based tier: diocesan reporting, sacramental fields, multi-language
- QuickBooks integration
- Mobile-responsive groundskeeping interface
- Funeral home coordinator role and structured request intake

**Phase 3 (Months 9–18):**
- GPS grave navigation
- AI-assisted historical record digitization (OCR)
- Multi-site cemetery group management
- FamilySearch/FindAGrave integration
- Monument permit workflow

### Risk Mitigation Strategy

**Technical Risks:**
- Plot map rendering performance at 25,000+ plots — mitigation: use canvas-based rendering with viewport culling; test with synthetic large dataset in week 2
- CSV import format variability — mitigation: build permissive importer with column-mapping UI; do not require specific column names
- Email deliverability for interment notifications — mitigation: use dedicated transactional email provider (SendGrid/Postmark) from day one; do not use shared SMTP

**Market Risks:**
- CemeteryBase adds managed migration before GraveKeeper launches — mitigation: GraveKeeper's association channel (ICCFA, Catholic Cemetery Association) is the moat, not the migration feature alone
- Slow institutional sales cycles stall early growth — mitigation: target private cemetery owner-operators first (week-scale decisions, not month-scale); use institutional wins as case studies for later channel sales

**Resource Risks:**
- If migration labor exceeds margin — mitigation: cap managed migrations at 5/month in first 6 months while refining pricing and staffing model; raise migration price before taking losses
- If build takes longer than 6 weeks — mitigation: cut deed PDF template customization to static template for MVP; defer multi-user staff management to post-launch

---

## Functional Requirements

### Plot Map Management

- **FR1:** Cemetery admin can create a plot map with named sections, each containing rows and individually numbered plots
- **FR2:** Cemetery admin can set the status of any plot to: Available, Reserved, Sold/Not Yet Buried, Buried, or Unavailable
- **FR3:** Cemetery admin can click any plot to view associated burial record details including owner name, burial date, and plot identifier
- **FR4:** Cemetery admin can update a plot's status and linked record from the map view without navigating away
- **FR5:** Cemetery admin can import plot inventory (section, row, lot, status, owner name, dates) from a CSV or Excel file with column-mapping UI
- **FR6:** Any authenticated user can pan and zoom the plot map to navigate sections and locate specific plots
- **FR7:** Cemetery admin can add descriptive labels to sections (e.g., "Veterans Section," "Garden of Angels")

### Burial Records Management

- **FR8:** Cemetery admin can create a burial record with fields: deceased name, birth date, death date, burial date, plot reference, officiating minister, funeral home, family contact name/email/phone, and notes
- **FR9:** Any authenticated user can search all burial records by deceased name (partial match), date range, section name, row, or plot number
- **FR10:** Cemetery admin can import burial records from CSV or Excel files with column-mapping UI supporting flexible source formats
- **FR11:** Cemetery admin can export all burial records as a CSV file or as individual/batch PDF records
- **FR12:** Cemetery admin can link a burial record to a specific plot on the map, with the link reflected in both views
- **FR13:** Cemetery admin can edit any burial record field and the edit is logged with timestamp and user
- **FR14:** Cemetery admin can mark a burial record as archived (not deleted); archived records remain searchable but do not appear in default views

### Interment Scheduling

- **FR15:** Cemetery admin can create an upcoming interment record with fields: deceased name, scheduled date and time, assigned plot, funeral home name and contact email, family contact, service type, and crew notes
- **FR16:** Cemetery admin can advance an interment through status stages: Requested → Confirmed → Completed
- **FR17:** System sends an email notification to the funeral home contact email when an interment status changes to Confirmed, including all interment details
- **FR18:** Any authenticated user can view a calendar of upcoming interments in monthly and weekly views
- **FR19:** Cemetery admin can add and edit free-text coordination notes on any interment record
- **FR20:** Cemetery admin can convert a completed interment record into a burial record with one action, pre-populating shared fields

### Plot Sales & Revenue Tracking

- **FR21:** Cemetery admin can record a plot sale with fields: buyer name, sale date, amount paid, payment method (cash/check/card/other), and optional notes
- **FR22:** Cemetery admin can generate a PDF deed from a customizable template for any recorded plot sale, populated with buyer and plot details
- **FR23:** Cemetery admin can view a paginated revenue log of all plot sales with date, buyer, plot, and amount, filterable by date range
- **FR24:** Cemetery admin can mark a plot as Sold or Reserved directly from a sales record, updating the map status automatically

### Family Search Portal

- **FR25:** Any unauthenticated visitor can search burial records by deceased name, date range, and section/plot number through the public family portal
- **FR26:** Family portal search results display: deceased name, birth date, death date, burial date, and plot location (section/row/lot) — no family contact information visible to the public
- **FR27:** Cemetery admin can generate an embeddable iframe or JavaScript snippet for the family portal that can be placed on any external website
- **FR28:** Cemetery admin can configure which record fields are visible in the public portal and can disable the portal entirely if needed
- **FR29:** Family portal displays a "Contact this cemetery" link with admin-configurable contact information (phone, email, website URL)

### Admin Dashboard & Reporting

- **FR30:** Authenticated users see a dashboard summary showing: total plots, plots sold, plots available, interments this month, and most recent record update
- **FR31:** Authenticated users can perform a global quick search from the dashboard that returns matching results across burial records, interment records, and plots
- **FR32:** Dashboard displays a recent activity feed showing the last 20 actions (record edits, new interments, plot sales) with user attribution
- **FR33:** Cemetery admin can generate a summary report (CSV or PDF) showing plot inventory by section and status

### User & Account Management

- **FR34:** Cemetery admin can invite additional users by email, assigning them an Admin or Staff role
- **FR35:** Cemetery admin can deactivate a staff user account, immediately revoking access
- **FR36:** Cemetery admin can configure cemetery profile: name, physical address, contact phone/email, website URL, and logo
- **FR37:** Cemetery admin can access full data export (all burial records, plot inventory, interment history) as a ZIP file containing CSVs from account settings
- **FR38:** Cemetery admin can configure the deed PDF template by uploading a logo and editing template text fields

### Onboarding & Migration

- **FR39:** New users complete a guided setup wizard covering: cemetery name/address, plot numbering scheme selection, initial admin user, and optional CSV import or managed migration booking
- **FR40:** New users can activate a sample data sandbox to explore all product features with pre-populated fictitious records before importing live data
- **FR41:** Cemetery admin can submit a managed migration inquiry form specifying approximate record count, current software/format, and preferred contact time — this triggers a GraveKeeper team notification
- **FR42:** Cemetery admin can upload data files (CSV, Excel, PDF scans) through a secure upload interface for the migration team to process
- **FR43:** New users can choose to launch with self-serve import or with the managed migration service; both paths are supported from the wizard

---

## Non-Functional Requirements

### Performance

- **NFR1:** Plot map renders fully interactive with up to 10,000 plots within 3 seconds on a standard broadband connection (≥10 Mbps); for 10,001–25,000 plots, initial render completes within 6 seconds
- **NFR2:** Burial record search returns results within 2 seconds for any query against a database of up to 100,000 records
- **NFR3:** Family portal search returns results within 2 seconds for any query as measured from request submission to result display
- **NFR4:** Page load time for the admin dashboard (initial load, authenticated) is under 3 seconds for 95th percentile of users as measured by Lighthouse or equivalent APM
- **NFR5:** CSV import of up to 5,000 records completes processing within 60 seconds; files exceeding 5,000 records are processed asynchronously with email notification on completion

### Security

- **NFR6:** All data transmitted between client and server uses TLS 1.2 or higher; HTTP requests redirect to HTTPS
- **NFR7:** All customer data (burial records, plot data, user data) is encrypted at rest using AES-256 or equivalent
- **NFR8:** User passwords are stored as salted hashes using bcrypt with cost factor ≥12; plaintext passwords are never logged or stored
- **NFR9:** New user registration checks the provided email/password combination against the HaveIBeenPwned API and warns if the password appears in a known breach
- **NFR10:** Session tokens expire after 8 hours of inactivity; users must re-authenticate to access account settings changes (billing, user management)
- **NFR11:** All admin actions affecting records (edits, deletions, exports) are written to an immutable audit log accessible to the cemetery admin; log entries include timestamp, user, action, and affected record ID

### Reliability & Data Durability

- **NFR12:** The platform maintains 99.9% uptime during business hours (Monday–Friday, 7AM–7PM local customer time) as measured monthly by the cloud provider's SLA and uptime monitoring
- **NFR13:** Customer data is backed up with a Recovery Point Objective (RPO) of ≤24 hours and a Recovery Time Objective (RTO) of ≤4 hours in the event of a primary infrastructure failure
- **NFR14:** Burial records cannot be permanently deleted within 30 days of any delete action; a recovery window allows restoration
- **NFR15:** Customer data export (FR37) completes successfully for accounts with up to 100,000 records within 10 minutes

### Accessibility

- **NFR16:** The admin web interface meets WCAG 2.1 Level AA standards for keyboard navigation, color contrast (≥4.5:1 for normal text), and screen reader compatibility — cemetery administrators include users over 60 and those with low vision
- **NFR17:** The public family portal meets WCAG 2.1 Level AA standards; family members accessing burial records include elderly users and users with disabilities
- **NFR18:** The family portal and admin interface function correctly in the current version of Chrome, Firefox, Safari, and Edge on both desktop and mobile viewports (320px minimum width)

### Scalability

- **NFR19:** The platform supports up to 1,000 concurrent authenticated users without degradation below NFR2/NFR4 response time targets — this headroom is sufficient through 18-month projections (150 customers × ~7 concurrent users maximum)
- **NFR20:** Database schema and infrastructure support horizontal scaling to accommodate 10x current customer count without architectural rework

---

*GraveKeeper PRD — Version 1.0 — 2026-10-14*
*All design, architecture, and development work should trace back to the requirements and vision documented in this PRD. Update as needed as planning progresses.*
