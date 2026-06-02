---
stepsCompleted: [step-01-init.md, step-02-discovery.md, step-02b-vision.md, step-02c-executive-summary.md, step-03-success.md, step-04-journeys.md, step-05-domain.md, step-06-innovation.md, step-07-project-type.md, step-08-scoping.md, step-09-functional.md, step-10-nonfunctional.md, step-11-polish.md, step-12-complete.md]
inputDocuments:
  - ideas/shortlisted/tree-service-arborist-software.md
  - _bmad-output/planning-artifacts/market-research-tree-service-arborist.md
  - _bmad-output/planning-artifacts/brief-tree-service-arborist.md
workflowType: prd
research_type: prd
research_topic: tree-service-arborist
user_name: Root
date: 2026-06-02
classification:
  projectType: saas_b2b
  domain: field_service_management
  complexity: medium
  projectContext: greenfield
---

# Product Requirements Document — ArborDesk

**Author:** Root
**Date:** 2026-06-02

---

## Executive Summary

ArborDesk is a tree-native field service management SaaS platform targeting solo operators and small tree care crews (1–5 trucks) in the US, Canada, and Australia. It occupies the unoccupied quadrant in the tree care software market — **tree-specific features at an affordable flat rate** — positioning directly against Jobber (affordable but generic) and ArboStar/SingleOps (tree-specific but overpriced and unreliable).

The $39.5 billion US tree care industry comprises approximately 175,000 businesses, the overwhelming majority of which run 1–5 trucks and are currently duct-taping together Jobber (or spreadsheets) for scheduling, paper for tree records, separate forms for ISA compliance, and manual QuickBooks entry because their FSM sync breaks repeatedly. ArborDesk replaces this patchwork with a single tool that sets up in under 30 minutes, syncs reliably with QuickBooks Online, and ships arborist-native workflows — per-tree history cards, ISA A300 compliance checklists, and offline-capable mobile — on day one.

**Pricing:** $79/month flat (up to 5 users), month-to-month, no annual contract. $199 Lifetime Deal at launch — the first LTD in this vertical.

**12-month business target:** 200 paying MRR customers ($15,800 MRR) plus 300–700 LTD units ($60K–$140K upfront validation revenue).

### What Makes This Special

Three clear differentiators:

1. **The 30-minute setup promise.** Every competing tree-specific tool requires days to weeks of configuration before a crew can dispatch their first job. ArborDesk ships with pre-built job templates for pruning, removal, stump grinding, cabling, and plant health care — ready out of the box. First job dispatched in under 30 minutes is a measurable, quotable, verifiable benchmark that directly counter-positions against every incumbent.

2. **QBO sync that actually works.** SingleOps, the category's market leader among mid-market operators, has documented QuickBooks sync failures with direct Capterra quotes. ArborDesk builds QBO sync as a core investment — not a third-party integration — with a real-time sync status dashboard (green/yellow/red) visible at all times. Operators moving from SingleOps will immediately trust the product because it treats the thing that broke last time as the thing to get right first.

3. **Offline-first mobile built for arborists.** SingleOps has documented field data loss when the phone screen goes black. ArborDesk uses a local-first mobile architecture where all job data is stored on-device first and synced to the server when connectivity returns. Arborists working under dense canopy or on rural properties never lose a day's work.

## Project Classification

- **Project Type:** B2B SaaS — vertical field service management
- **Domain:** Field service management / tree care industry
- **Complexity:** Medium (QuickBooks API integration, offline-first mobile, multi-user with roles, ISA compliance templates — no heavy regulated data but real technical complexity in sync reliability and offline architecture)
- **Project Context:** Greenfield — no existing codebase

---

## Success Criteria

### User Success

Users are successful when ArborDesk removes the friction of the current paper-and-spreadsheet patchwork and replaces it with a single, trusted system. The primary user success moments are:

- **The 30-minute moment:** A new user dispatches their first job to the mobile app in under 30 minutes from signup — without watching a training video or calling support.
- **The Sunday night moment:** An operator realizes they haven't done manual QuickBooks entry all week because ArborDesk synced automatically every time they closed a job.
- **The repeat customer moment:** A customer asks "what did you do on my oak last spring?" and the operator pulls up the per-tree card in front of them, reads the treatment notes, and receives the response "wow, you're so organized." This triggers the referral.
- **The field data moment:** Crew finishes a job in a rural area with no cell signal, drives back to town, and watches job notes and photos automatically sync when the phone connects. Nothing was lost.

| Metric | Month 3 Target | Month 12 Target |
|--------|---------------|----------------|
| Median time-to-first-job | < 45 minutes | < 30 minutes |
| QBO sync error rate | < 0.5% | < 0.05% |
| Mobile offline data sync success | > 99% | > 99.9% |
| Per-tree cards: % of accounts with ≥10 trees created | 40% | 70% |
| ISA checklist completion rate (qualifying jobs) | 30% | 60% |
| 30-day active operator rate | 75% | 85% |

### Business Success

| Metric | Month 3 | Month 6 | Month 12 |
|--------|---------|---------|----------|
| Paying MRR customers | 25 | 75 | 200 |
| MRR | $2,000 | $6,000 | $16,000 |
| LTD units sold | 300 | 500 | — |
| Monthly churn rate | < 5% | < 4% | < 3% |
| NPS | > 40 | — | > 60 |
| CAC (blended) | — | < $300 | < $200 |
| LTV:CAC ratio | — | > 5:1 | > 10:1 |

**Business success gates:**
- Gate 1 (Month 2): 10 paying beta users, QBO error rate < 1%, zero critical mobile data loss incidents
- Gate 2 (Month 4): 300 LTD units sold, 3+ testimonials citing "QuickBooks sync" or "30 minutes", NPS > 35
- Gate 3 (Month 6): 75 paying MRR customers, monthly churn < 5%, CAC < $300

### Technical Success

- QBO sync error rate below 0.5% for the first 90 days post-launch — measured via automated error logging against every invoice sync event.
- Zero field data loss events attributable to offline architecture. A "data loss event" is defined as a job status update or ISA checklist submission that a crew member confirmed completing on mobile but that did not appear in the server-side record within 24 hours.
- Mobile app loads job list in under 2 seconds on a 2-year-old Android device with cached data, regardless of network state.
- 99.5% application uptime (excluding planned maintenance windows), measured monthly.

### Measurable North Star

**Number of companies that dispatched at least one job in the past 30 days.** Active operators are the only metric that predicts retention, QBO value delivery, and word-of-mouth. A company that signed up but never dispatched a job is not a retained customer.

---

## Product Scope

### MVP — Minimum Viable Product

The MVP delivers the "30 minutes to first job dispatched, QuickBooks synced, tree card created" promise. Eight capability areas constitute the MVP:

1. **Pre-built arborist job templates** — Pruning, removal, stump grinding, cabling, deep root fertilization, PHC inspection. Ready out-of-the-box, no configuration required. Each template includes default line items, duration estimates, and materials checklist.

2. **QuickBooks Online two-way sync** — OAuth-based connection (no credential storage). Customer sync on setup. Invoice auto-push on job completion. Payment sync back from QBO. Real-time sync status dashboard (green/yellow/red) with error log and one-click retry.

3. **Offline-capable mobile app (iOS + Android)** — Local-first architecture: all job data stored on device. Works without any cell signal. Background sync when connectivity returns. UI sync state indicator (synced / pending / offline).

4. **Per-tree history cards** — Species (with common name dropdown), DBH, height, condition rating, hazard rating (ISA 1–4), location linked to property, work history log (auto-populated on job completion), manual notes, treatment log, photo gallery.

5. **ISA / ANSI A300 inspection checklists on mobile** — Pre-built checklist templates: general tree assessment, hazard evaluation, pre-work safety inspection, post-storm assessment. Completable offline. Attached to specific tree card and job. PDF export for customer or insurer.

6. **Customer CRM** — Customer record with contact info and billing address. Multiple properties per customer. Tree records linked to properties. Job history per customer. QBO import on setup. CSV import.

7. **Job scheduling and crew dispatch** — Create job (customer, property, template, date/time, crew). Calendar view (week for owner, day for crew). Job status flow (Scheduled → Dispatched → In Progress → Completed → Invoiced). Push notification to crew on dispatch.

8. **Invoice generation and payment collection** — Auto-generate invoice on job completion from template line items. Editable before sending. Email delivery with professional template. Stripe payment link (credit card / ACH). Invoice status tracking (Draft, Sent, Viewed, Paid, Overdue).

### Growth Features (Post-MVP)

- **Route optimization** — Multi-stop day planning with Google Maps integration for morning dispatch efficiency
- **PHC recurring service automation** — Schedule and track recurring plant health care visits with automated treatment reminders and customer notifications
- **Review automation** — Post-job SMS/email prompt for Google/Capterra review generation
- **Customer portal (read-only)** — Customers log in to view their tree records, past work history, and upcoming jobs
- **ISA credential badge on proposals** — Auto-populated ISA certification badge on sent proposals using stored arborist credential data
- **Team plan** — $149/month tier for 5–15 users with all Phase 2 features

### Vision (Future)

- **GIS tree mapping lite** — Geo-referenced tree map overlay for commercial properties with 20+ trees (not TreePlotter-level GIS, but useful visual spatial context)
- **AI photo health assessment** — Upload tree photo, receive preliminary health assessment and treatment suggestions (Claude API or specialized tree health model)
- **Insurance/hazard report generation** — Professional PDF hazard assessment report for insurance carriers, leveraging ISA checklist data and hazard ratings
- **Pesticide/chemical application log** — Track chemical applications with product name, concentration, method, target pest/disease — for ISA PHC specialists and compliance
- **TCIA white-label partnership** — "Tree Care Business Software" endorsed tier, distributed to 1,400+ TCIA members

---

## User Journeys

### Journey 1: Marcus — The Solo Owner-Operator Switching from Jobber

Marcus runs a solo tree care business in a mid-size metro area. ISA-certified, $200K/year, handles everything himself. He's on Jobber ($69/month) for scheduling and invoicing but keeps a spiral notebook for tree records and does two hours of manual QuickBooks entry every Sunday night.

**Opening scene:** It's Sunday, 8 PM. Marcus is doing his weekly QuickBooks catch-up. He manually enters the 14 invoices from the week because Jobber's export doesn't match QBO's format. He mutters about it, not for the first time. His wife asks why he doesn't "just fix the software thing" and he says he looked at ArboStar but it costs $150 per user and takes weeks to set up.

**Discovery:** Monday morning, Marcus posts a frustration comment on ArboristSite.com about Jobber not having tree-specific features. Three people reply recommending ArborDesk. He clicks through, reads "sets up in 30 minutes, syncs with QuickBooks, built for arborists."

**First contact:** He signs up for the 14-day trial. No credit card required. He lands on a setup wizard that asks him to connect QuickBooks Online. He clicks Connect, goes through OAuth, and his 200 customers are imported. It takes 4 minutes.

**Rising action:** The setup wizard shows him 6 job templates. He selects Pruning and Stump Grinding as his most common jobs. Both have line items pre-populated — Pruning: Labor (per hour), Disposal fee, Fuel surcharge. He edits the hourly rate to his rate and saves. He adds his first customer by searching his imported QBO list, links the property address, and creates a job for Wednesday's oak pruning.

**Climax:** Wednesday, he's in the field. He opens the mobile app, marks the job In Progress. After the work, he opens the per-tree card for the customer's white oak — the species dropdown has "White Oak (Quercus alba)" already listed. He adds DBH: 24", hazard rating: 1, condition: Good, and takes a before/after photo. He marks the job Complete. A notification tells him the invoice has been created and pushed to QuickBooks. He can see the green sync indicator.

**Resolution:** Sunday evening arrives. Marcus opens his laptop to do QuickBooks. There's nothing to do. All 11 jobs from the week are already in QBO, invoices sent, two payments already received. He didn't enter a single thing manually. He texts his wife: "Fixed it."

**Journey Requirements Surface:** OAuth QBO setup, customer import, job template editing, mobile per-tree card creation, offline-safe photo upload, auto-invoice generation, QBO push-on-completion, sync status visibility.

---

### Journey 2: Sarah — Small Crew Owner Escaping Arborgold

Sarah runs a 3-truck company ($750K ARR, 6 crew members) on Arborgold ($399/month). Her primary pain: proposal emails going undelivered (~50% receipt rate per a verified review), Android crew app that loses data offline, and annual contract locking her in until December.

**Opening scene:** One of Sarah's crews spent a full day on a large commercial property with spotty rural cell coverage. At end of day, they report they completed 4 jobs. The Arborgold mobile app shows 1. Three jobs' worth of photos, ISA checklists, and completion notes are gone. This has happened before.

**Discovery:** Sarah posts in Facebook group "Tree Care Business Owners" (15K members): "Has anyone dealt with Arborgold losing field data? Looking for alternatives." Seven comments. Two mention ArborDesk: "their offline sync actually works" and "set up my 3 trucks in a day."

**Trial and onboarding:** Sarah starts a trial, imports from QBO (her full customer/property list), invites two crew accounts. She assigns each crew member to their primary truck route. The mobile app is tested on both Galaxy S-series devices her crews carry — it loads clean.

**Rising action:** Sarah dispatches the week's job load on Sunday evening. Each crew sees their day's jobs in order on the mobile app. One crew spends Tuesday in a rural area — no cell signal for 5 hours. They complete 3 jobs, fill out ISA checklists, take 12 photos. When they drive back to town at 4 PM and hit coverage, all 3 jobs sync within 2 minutes.

**Climax:** Sarah sends 8 proposals via ArborDesk on Wednesday. She can see invoice status: 6 opened within 24 hours. One customer replies "just got your proposal, looks great." No bounced emails. For comparison, she sent 9 Arborgold proposals last week and got 3 responses.

**Resolution:** Sarah cancels Arborgold when the annual contract expires in December. By then she's been on ArborDesk for 2 months at $79/month — saving $320/month with better mobile reliability and email deliverability. She leaves a Capterra review: "Finally an app that doesn't lose field data and actually sends proposals."

**Journey Requirements Surface:** Multi-user crew access, Android compatibility, offline-first architecture with visible sync state, per-crew job calendar view, push notifications on dispatch, invoice email delivery, invoice-opened tracking, crew photo upload in the field.

---

### Journey 3: Derek — First-Time Software User Graduating from Spreadsheets

Derek has been independent for 8 months after leaving a large tree company. He quotes by text message, invoices via PDF email, and tracks 40 customers in Google Sheets. $150K ARR, one truck.

**Opening scene:** Derek loses a $3,500 removal job because the customer called him back and he didn't have her in his phone — he'd been texting on a jobsite and missed the callback. He finds her in his spreadsheet two days later. She's already hired someone else.

**Discovery:** Derek's on r/arboriculture asking "how do you guys handle scheduling?" — sees ArborDesk mentioned in a thread about AppSumo deals. He finds the $199 LTD offer during the launch window. At $199 lifetime, he figures he has nothing to lose.

**Onboarding:** The setup wizard is designed for someone who's never used software. Step 1: connect QuickBooks (Derek doesn't have QBO yet — the wizard offers a 2-week QBO trial link). Step 2: import customers from CSV. Derek exports his Google Sheet and uploads it. 40 customers imported in 2 minutes. Step 3: create first job.

**First job:** Derek creates a Stump Grinding job for Mrs. Johnson — next Tuesday, 8 AM. His phone buzzes with a reminder Monday night. Tuesday, he completes the job, marks it done on mobile, approves the auto-generated invoice ($350), and sends it in the app. Mrs. Johnson receives a professional invoice with a Stripe payment link within 30 seconds.

**Aha moment:** Mrs. Johnson pays online 20 minutes later — Derek is still driving to his next job. He gets a notification. He pulls over, stares at his phone, and says "I've been waiting 8 months to have software that does this."

**Journey Requirements Surface:** Non-technical onboarding wizard, CSV customer import, job reminder notifications, auto-invoice generation, Stripe payment link in invoice, payment received notification.

---

### Journey 4: Crew Member Tony — Field Tech on the Mobile App

Tony is a ground crew member on Sarah's 3-truck company. He's 26, uses his Galaxy S23 for everything, but has been skeptical of the field apps his bosses make him use because "they always break when I need them."

**Morning routine:** Tony opens ArborDesk at 7:45 AM, sees 4 jobs on his day list with addresses, job types, and notes from the office. He taps the first job and sees the customer name, tree work requested, and a note: "Be careful of the stone wall on the east side — don't back the truck near it." This level of job context wasn't in the old system.

**Field interaction:** At the second job (partial removal), Tony marks the job In Progress. He uses the ISA pre-work safety inspection checklist — 8 items, all completable with taps. He photographs the tree before work begins. After completion, he marks it complete, adds an after photo, and writes "removed upper crown per spec, left lower crown intact per customer request."

**Offline scenario:** At the 4th job (rural residential), his phone has no signal. He opens ArborDesk — everything loads. The customer info, job notes, and ISA checklists are all there. He completes the job and photos in the app. When he drives to the highway 40 minutes later, the sync indicator shows a spinning icon briefly, then turns green. All data is in.

**Journey Requirements Surface:** Crew-facing day view, job context notes, tap-based ISA checklist, photo capture on mobile, offline job access and completion, visual sync state indicator, auto-sync on connectivity restoration.

---

### Journey Requirements Summary

Capabilities required across all journeys:

- **Onboarding:** QBO OAuth import, CSV customer import, job template configuration wizard
- **Customer & Property Management:** Customer search, property linking, multiple properties per customer
- **Job Management:** Template-based job creation, scheduling, crew assignment, push dispatch notifications
- **Mobile App (iOS + Android):** Day/week job list, job context display, status updates, offline access
- **Per-Tree Records:** Species lookup, DBH/height/condition/hazard fields, work history auto-logging, photo gallery
- **ISA Checklists:** Pre-built templates, tap-based mobile completion, offline-capable, PDF export
- **Invoicing:** Auto-generation from template, editable before send, email delivery, Stripe payment link
- **QBO Sync:** Push-on-completion, real-time status indicator, error log, payment sync back
- **Crew Management:** Multi-user accounts, role-based access (owner vs. crew), job assignment tracking

---

## Domain-Specific Requirements

### Industry Standards & Compliance

**ISA (International Society of Arboriculture) Standards:**
ArborDesk must faithfully represent ISA-standardized assessment frameworks — specifically:
- ANSI A300 Standards for Tree Care Operations (inspection checklists must align with A300 Part 9: Tree Risk Assessment)
- ISA hazard rating scale (1–4) must be accurately implemented with supporting definitions
- Inspection forms must be defensible if used as part of an insurance or liability claim — fields, language, and structure must match industry standard terminology

**Species Data:**
The species dropdown for tree records must include a curated database of the 150–200 most common North American tree species with both common and scientific names. This is a trust signal for ISA-certified arborists — if the species database is thin or inaccurate, credibility with professional arborists is immediately damaged.

### Technical Constraints

**QuickBooks Integration Reliability:**
The QBO integration is a primary trust anchor and competitive differentiator. Requirements:
- Use QuickBooks Online Accounting API v3 (REST), not legacy desktop APIs
- Handle API rate limiting and token refresh without user-visible failures
- Queue failed sync operations for automatic retry (up to 3 attempts with exponential backoff)
- Persist sync error state and surface plain-language descriptions (not API error codes) to the user
- Log all sync operations (success and failure) to an audit trail viewable by the user

**Offline Mobile Architecture:**
- Use SQLite or equivalent embedded database on-device for all job, customer, property, and tree data
- Conflict resolution policy: device-last-write wins for job status updates; server-wins for any data modified simultaneously by owner and crew on the same record
- Sync queue must survive app restarts and phone reboots (persisted to disk, not in-memory)
- Maximum acceptable data staleness for background sync: 15 minutes when connected, no limit when offline

**Data Residency & Privacy:**
- Store all customer data in US-region cloud infrastructure
- Business customer data (tree records, invoices, customer PII) must not be used for any ML training or cross-tenant analytics
- Invoice data flows through QuickBooks' own infrastructure — no long-term storage of QBO tokens beyond OAuth standard practices

### Integration Requirements

| Integration | Purpose | Phase |
|-------------|---------|-------|
| QuickBooks Online API v3 | Customer sync, invoice push, payment sync | MVP |
| Stripe | Credit card and ACH payment processing via invoice link | MVP |
| Apple Push Notification Service / Firebase Cloud Messaging | Crew dispatch and job notifications | MVP |
| SendGrid or equivalent | Invoice email delivery with open tracking | MVP |
| Google Maps SDK | Address autocomplete, property map thumbnail | MVP |
| Apple App Store / Google Play Store | Mobile app distribution | MVP |
| AppSumo | LTD payment and user provisioning | Launch |

---

## Innovation & Novel Patterns

### Detected Innovation Areas

**1. First LTD in the Arborist Software Vertical**
No incumbent (ArboStar, SingleOps, Arborgold, ArborNote) has ever launched a Lifetime Deal. The $199 LTD is cheaper than one month of SingleOps and targets the AppSumo community, which overlaps significantly with the budget-conscious, tech-curious solo operator segment. This is not a technical innovation but a go-to-market innovation with real switching cost implications — once an operator has invested in building their tree inventory in a lifetime-owned tool, they have zero incentive to pay $300+/month for a competitor.

**2. Sync Status as a Product Feature**
Rather than hiding QuickBooks integration complexity behind a "syncing..." spinner, ArborDesk surfaces sync status as a first-class UI element — always-visible green/yellow/red indicator with a one-click drill-down to the audit log. This is an innovation in *trust design*: operators who have been burned by failed syncs are hyper-sensitized to integration reliability. Making reliability visible (rather than just implementing it) is the product's primary trust-building mechanism.

**3. Offline-First as a Arborist-Native Design Decision**
Most FSM tools (Jobber, SingleOps) are cloud-first with "partial offline" fallbacks that fail unpredictably. ArborDesk's local-first mobile architecture — where the device is the authoritative data source and the cloud is a sync target — is a deliberate inversion of the typical SaaS architecture. For arborists working under dense canopy, the offline-first design is not a feature; it's the product working as intended.

### Validation Approach

- **LTD launch validation**: 300 units sold within 60 days of AppSumo launch confirms price-point and community channel hypothesis
- **QBO sync trust validation**: QBO error rate < 0.5% in first 90 days, plus at least 3 testimonials citing "QuickBooks finally works" — confirms reliability differentiation
- **Offline validation**: Zero critical mobile data loss incidents in first 6 months — confirms architecture decision

### Risk Mitigation

- **LTD churn risk**: LTD users who hit the 3-user limit should convert to the $149/month team plan — tracked as an upgrade funnel metric. If LTD users never hit limits, upsell revenue is zero.
- **QBO API deprecation risk**: Intuit has historically given 12–18 months notice for API version deprecations. Monitor Intuit developer blog and version deprecation notices quarterly.
- **Offline conflict risk**: Multi-crew accounts where the owner edits a job on desktop while a crew member edits the same job offline creates a conflict. Device-last-write policy with a conflict alert to the owner mitigates this.

---

## SaaS B2B Specific Requirements

### Multi-User Architecture

- **Account model**: A single ArborDesk account represents one tree care business. Within the account, there are roles: Owner (1), Manager (up to 2, Phase 2), Crew Member (up to 4 in MVP plan).
- **Owner capabilities**: Full access to all data, settings, billing, and QBO integration. Can invite/remove crew members. Can view all jobs, all customers, all financials.
- **Crew member capabilities**: Access only to assigned jobs, the properties/customers those jobs are linked to, and the mobile field app. Cannot access invoices, billing, or QBO settings.
- **Plan limits**: MVP plan supports up to 5 total users (Owner + 4 crew). Team plan (Phase 2, $149/month) supports up to 15 users.

### Subscription & Billing

- **Stripe Billing** for recurring subscription management
- **Month-to-month by default** — no annual commitment required. Annual option (10% discount) available at user request.
- **LTD provisioning**: AppSumo LTD users get a permanent "LTD plan" account capped at 3 users. Upgrade to Team plan available at a discounted rate for LTD holders.
- **Trial**: 14-day free trial, no credit card required. At trial expiration, account is read-only until subscription activated or trial extended by support.
- **Failed payment handling**: Dunning sequence (3 attempts over 7 days) before account suspension. Account data retained for 90 days post-suspension before deletion.

### Tenant Isolation

- All customer data is isolated per account — no cross-tenant data access or analytics
- API requests validated against account ownership for every resource access
- QBO OAuth tokens stored per account, encrypted at rest

### Onboarding Flow

The setup wizard is the first critical path and must be designed for non-technical users:
1. **Connect QuickBooks** (or skip to add customers manually)
2. **Select your most common job types** from template library
3. **Invite crew members** (optional, can skip)
4. **Create your first job** — guided step-by-step

Target: Wizard completion (reaching "first job dispatched") in under 30 minutes with zero support contact. Wizard abandonment rate < 20%.

### Customer Communication

- Invoice emails must be sent from a branded domain (e.g., `invoices@arbordesk.com` or custom domain in Phase 2) — not from a generic `noreply@` address
- Email delivery tracking (opened/not opened) surfaced per invoice — this directly addresses Arborgold's documented email deliverability problem
- Unsubscribe compliance (CAN-SPAM) required for all transactional email flows

---

## Project Scoping & Phased Development

### MVP Strategy & Philosophy

**MVP Approach:** Revenue MVP — the MVP must be capable of replacing the current patchwork (Jobber + paper + manual QBO entry) so completely that the operator has a concrete business reason to pay $79/month or $199 LTD. An MVP that requires them to keep their spreadsheet for tree records or their paper ISA forms is not a viable MVP.

**Resource Requirements:** 1 full-stack developer (or 2-person small team), 5–6 weeks to functional MVP, plus 2–4 weeks for mobile app store submission review and QBO app certification.

### MVP Feature Set (Phase 1)

**Core User Journeys Supported:**
- Solo operator onboarding, job creation, mobile dispatch, field completion, QBO sync
- Multi-crew dispatch, offline field operation, invoice delivery

**Must-Have Capabilities:**
- Pre-built job templates (6 types) ready out of the box
- QuickBooks Online two-way sync with visible status dashboard
- Offline-first iOS and Android mobile app
- Per-tree history cards (species, DBH, condition, hazard, work history, photos)
- ISA/ANSI A300 inspection checklists (4 templates) on mobile
- Customer CRM with QBO import and CSV import
- Job scheduling, crew dispatch, push notifications
- Invoice generation, email delivery (with open tracking), Stripe payment

**Explicitly excluded from MVP:**
Route optimization, GIS tree mapping, AI health assessment, customer portal, review automation, recurring PHC scheduling, multi-company management, pesticide/chemical tracking, AI estimating, equipment maintenance.

### Phase 2 — Growth (Months 6–12)

- Route optimization (Google Maps multi-stop)
- PHC recurring service automation
- Post-job review automation (SMS/email prompt)
- ISA credential badge on proposals
- Customer read-only portal
- Manager role (account access without full owner permissions)
- Team plan ($149/month, 15 users)
- Reporting dashboard (revenue by job type, active trees per customer, crew productivity)

### Phase 3 — Expansion (Months 12–24)

- GIS tree mapping lite (geo-referenced tree overlay for commercial properties)
- AI photo health assessment (powered by vision model API)
- Insurance/hazard PDF report generator (defensible format for carriers)
- Pesticide/chemical application log (ISA PHC compliance module)
- White-label TCIA partnership tier
- Canada/Australia market localization (QBO regional APIs, metric units toggle)

### Risk Mitigation Strategy

**Technical Risks:**
- *QBO API complexity*: Mitigate by scoping QBO integration to the 4 specific operations (customer import, invoice push, payment pull, OAuth token management) and investing engineering time here first.
- *Mobile app store delays*: Submit early in development cycle. Plan 4-week buffer for App Store/Play Store review and QBO app certification (Intuit requires security review for OAuth apps).
- *Offline conflict resolution*: Implement device-last-write as a simple, predictable policy. Surface conflicts with an alert to the owner rather than silent merging.

**Market Risks:**
- *Adoption inertia*: The ArboristSite.com community thread recommendation is the highest-trust acquisition channel. Seed with authentic participation, not paid placement.
- *ArboStar or Jobber reacting*: Risk window is 6–12 months. Use the LTD launch to build community density (300+ users) before incumbents can respond.

**Resource Risks:**
- *Single-developer risk*: Document the QBO integration spec and offline sync architecture in sufficient detail that a second developer can be onboarded in < 1 week if needed.
- *AppSumo launch surge*: Provision infrastructure to handle 500 simultaneous signups. Use serverless/auto-scaling where possible for launch week capacity.

---

## Functional Requirements

### Tree & Property Management

- **FR1:** Owner can create a tree record linked to a specific customer property, with fields for species (searchable dropdown of 150+ common species), DBH, height, condition rating (1–5), and hazard rating (ISA 1–4 scale)
- **FR2:** Owner can view a tree record's complete work history, including all past jobs linked to that tree, treatment notes, chemical applications, and attached photos
- **FR3:** Owner and crew can add photos to a tree record from the mobile app, with photos tagged by date and associated job
- **FR4:** Owner can search tree records across their account by species, condition rating, hazard rating, or customer/property
- **FR5:** Owner can add manual notes and treatment observations to individual tree records at any time
- **FR6:** Crew members can update tree condition notes and hazard rating in the field via the mobile app
- **FR7:** Owner can view all tree records associated with a single property on one consolidated property page
- **FR8:** System automatically logs a work history entry on a tree record when a job linked to that tree is marked Completed

### Job Management & Dispatch

- **FR9:** Owner can create a job using a pre-built template (pruning, removal, stump grinding, cabling, deep root fertilization, PHC inspection), with template line items pre-populated
- **FR10:** Owner can customize default line items, rates, and materials on any job template
- **FR11:** Owner can schedule a job by selecting customer, property, job template, date/time, and one or more crew members
- **FR12:** Owner can view all scheduled jobs in a calendar view, with week view for scheduling and day view for crew dispatch
- **FR13:** Owner can dispatch a job to assigned crew members, triggering a push notification on their mobile device
- **FR14:** Owner can update a job's status manually (Scheduled → Dispatched → In Progress → Completed → Invoiced) from the web app
- **FR15:** Owner can link specific tree records to a job to enable per-tree work tracking
- **FR16:** Owner can add internal notes to a job visible to crew members before and during the job

### Mobile Field Operations

- **FR17:** Crew members can view their assigned jobs for the current day and upcoming week on the mobile app
- **FR18:** Crew members can update job status (Dispatched → In Progress → Completed) from the mobile app
- **FR19:** Crew members can access all assigned job details — customer name, property address, job type, notes — without any cellular connectivity
- **FR20:** Crew members can complete ISA inspection checklists, add tree record notes, and submit status updates while offline; all data is persisted on-device and synced automatically when connectivity resumes
- **FR21:** Crew members can capture and upload before/after photos for any job or tree record from the mobile app
- **FR22:** Mobile app displays a persistent sync status indicator (synced / pending sync / offline) visible at all times
- **FR23:** Crew members can clock in and clock out for time tracking against a specific job from the mobile app

### ISA Compliance & Inspection

- **FR24:** Arborist can select from pre-built ISA/ANSI A300-aligned inspection checklist templates: general tree assessment, hazard evaluation, pre-work safety inspection, post-storm assessment
- **FR25:** Arborist can complete an inspection checklist on the mobile app and attach it to a specific tree record and job
- **FR26:** Arborist can complete inspection checklists without cellular connectivity, with data syncing when connection is restored
- **FR27:** Owner can generate a PDF inspection/assessment report from a completed checklist, formatted for delivery to a customer or insurance carrier
- **FR28:** Owner can view and filter all inspection records for a property or customer sorted by date

### Customer & CRM

- **FR29:** Owner can create customer records with name, service address(es), billing address, phone, email, and internal notes
- **FR30:** Owner can associate multiple service properties with a single customer record
- **FR31:** Owner can view a full activity history for any customer — all past jobs, invoices, tree records, and inspection reports — on a single customer page
- **FR32:** Owner can import existing customers from QuickBooks Online via OAuth connection during setup
- **FR33:** Owner can import customers via CSV upload with field mapping support

### QuickBooks & Financial Integration

- **FR34:** Owner can connect ArborDesk to QuickBooks Online via OAuth 2.0 (no QBO credentials stored in ArborDesk)
- **FR35:** Owner can import the full QBO customer list into ArborDesk at setup, with duplicate detection
- **FR36:** System automatically generates a draft invoice when a job is marked Completed, pre-populated with job template line items and rates
- **FR37:** Owner can edit a draft invoice — add/remove/modify line items, adjust rates, apply a discount — before sending
- **FR38:** Owner can send a finalized invoice to the customer by email with a professional branded template
- **FR39:** System automatically pushes finalized invoices to QuickBooks Online, creating or updating the corresponding QBO invoice
- **FR40:** When a payment is recorded in QuickBooks Online, the corresponding ArborDesk invoice status is updated to Paid within 15 minutes
- **FR41:** Owner can view a real-time QBO sync status dashboard (green = all synced, yellow = pending, red = errors) with a plain-language error log and one-click retry for failed operations

### Payment Collection

- **FR42:** Owner can accept credit card and ACH payments via a Stripe-powered payment link embedded in the invoice email
- **FR43:** Owner can view invoice status (Draft, Sent, Viewed, Paid, Overdue) and when the invoice was opened by the recipient
- **FR44:** System automatically transitions invoice status to Overdue based on configurable payment terms (default: Net 30)

### User & Account Management

- **FR45:** Owner can invite crew members by email, assigning them a Crew role with access limited to assigned jobs and mobile app
- **FR46:** Owner can remove a crew member's access without deleting their historical job records
- **FR47:** Owner can manage subscription plan, billing information, and account settings from the web app
- **FR48:** Owner can view account-level usage metrics: total active customers, jobs dispatched (current month), invoices sent, invoices paid, and total trees in inventory

---

## Non-Functional Requirements

### Performance

- Job list and calendar views load within 2 seconds on a standard broadband connection (10+ Mbps)
- Mobile app loads the crew's day job list within 2 seconds on a 2-year-old Android device using cached local data, independent of network state
- Invoice generation (draft creation) completes within 3 seconds of job marked Completed
- QBO sync push completes within 30 seconds of invoice finalization for non-error conditions
- Application supports at least 50 simultaneous active users per account (relevant for future enterprise; MVP target accounts are 1–5 users)

### Security

- All data encrypted in transit (TLS 1.2+) and at rest (AES-256)
- QBO OAuth tokens stored encrypted; never logged in plaintext
- Stripe integration uses Stripe Elements / Payment Intents — no raw card data touches ArborDesk servers (PCI DSS compliance delegated to Stripe)
- Role-based access enforced at the API layer — crew members cannot access owner-only endpoints regardless of client-side state
- Session tokens expire after 30 days of inactivity; mobile app refresh tokens expire after 90 days
- Password requirements: minimum 8 characters; bcrypt hashing
- API rate limiting on authentication endpoints to prevent brute force

### Reliability & Availability

- 99.5% application uptime target (< 3.6 hours downtime per month), excluding planned maintenance windows communicated 24 hours in advance
- Offline mobile architecture: no data loss for any job action, photo upload, or checklist completion taken while offline — these must be recoverable regardless of app crash, phone reboot, or extended offline period
- QBO sync failures must not result in silent data divergence — every failure must be surfaced to the user within the next login session
- Database backups: daily automated snapshots retained for 30 days; point-in-time recovery to within 1 hour for critical data loss incidents

### Scalability

- Application architecture must support horizontal scaling of the web/API tier without rearchitecting for 10x user growth (from 200 to 2,000 MRR customers)
- Mobile sync queue must handle batch sync of up to 200 pending operations (typical worst case for a crew working all day offline on a large commercial property)
- AppSumo launch week must be planned for: infrastructure should handle 500 concurrent new signups and 500 simultaneous QBO OAuth flows within a 48-hour window

### Integration Reliability

- QBO sync: automatic retry with exponential backoff (3 retries over 30 minutes) for transient failures; persistent failures surfaced in sync error log with plain-language descriptions
- Push notifications (FCM/APNS): delivery not guaranteed (inherent in push notification architecture); critical dispatches displayed in app on next open even without push receipt
- Stripe payment links: use Stripe-hosted payment pages to maintain Stripe's PCI compliance scope
- Email delivery: use a transactional email provider with DKIM/SPF authentication; target delivery rate > 98% (validated by provider SLA); track bounces and surface them in the invoice status view

### Accessibility

- Web application meets WCAG 2.1 Level AA for all primary owner workflows (scheduling, invoicing, reporting)
- Mobile app is compatible with iOS VoiceOver and Android TalkBack for basic navigation (crew job list, status updates, photo capture)
- Minimum contrast ratio of 4.5:1 for all body text in web and mobile interfaces

---

*Document Status: Complete*
*Next Steps: Architecture design, Epics & Stories breakdown*
