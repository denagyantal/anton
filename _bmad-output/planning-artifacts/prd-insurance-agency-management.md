---
stepsCompleted: ['step-01-init', 'step-02-discovery', 'step-02b-vision', 'step-02c-executive-summary', 'step-03-success', 'step-04-journeys', 'step-05-domain', 'step-07-project-type', 'step-08-scoping', 'step-09-functional', 'step-10-nonfunctional', 'step-11-polish', 'step-12-complete']
inputDocuments:
  - ideas/shortlisted/insurance-agency-management-system.md
  - _bmad-output/planning-artifacts/product-brief-insurance-agency-management.md
  - _bmad-output/planning-artifacts/market-research-insurance-agency-management.md
workflowType: prd
classification:
  projectType: saas_b2b
  domain: insurance
  complexity: medium
  projectContext: greenfield
documentCounts:
  briefCount: 1
  researchCount: 1
  brainstormingCount: 0
  projectDocsCount: 0
research_type: prd
research_topic: insurance-agency-management
user_name: Root
date: 2026-05-15
---

# Product Requirements Document — AgencyCore (Insurance Agency Management System)

**Author:** Root (Automated Pipeline)
**Date:** 2026-05-15
**Version:** 1.0

---

## Executive Summary

Independent P&C insurance agencies with 1–5 agents write over half of all US personal lines premium, yet every credible Agency Management System (AMS) charges $350–$600/month in per-user fees — pricing that assumes a 20-person brokerage. The result: 25%+ of small agencies run on Excel, accepting missed renewals and unreconciled commissions as unavoidable operational costs.

**AgencyCore** is a cloud-based AMS for 1–5 agent independent P&C agencies, delivering the five workflows that consume most of a small agency's operational week — client and policy tracking, automated renewal reminders, commission split calculation, carrier document vault, and book-of-business reporting — at a flat $89/month for the entire team, with no per-user fees, no contract, and free data export on cancellation.

The target users are independent P&C agents: solo operators managing 200–500 personal lines policies on spreadsheets, small agency principals frustrated by per-user billing that penalizes growth, and new agency owners who have never had a proper AMS. The primary ICP is the newly formed or recently independent agent with no legacy AMS baggage and high urgency to get organized.

### What Makes This Special

AgencyCore's pricing model is the primary differentiator. A 3-person agency pays $89/month on AgencyCore versus $532/month on HawkSoft or $550–600/month on EZLynx. This is not an incremental price reduction — it is structural. All established AMS vendors generate revenue on per-user pricing; offering flat-rate $89/month would cannibalize their existing customer base. They cannot match this without destroying their business model.

Secondary differentiators compound the pricing advantage:
- **Zero implementation cost** — operational in under 2 hours, no consultant required
- **Modern responsive UI** — all incumbent AMS interfaces look and feel like Windows 2008; this is a buying signal for the growing cohort of new owners in their 30s–40s
- **Month-to-month with free data export** — removes the fear-of-commitment objection that keeps agents on bad systems
- **AppSumo LTD first-mover** — zero insurance AMS currently listed on AppSumo; LTD removes the monthly cost objection for price-sensitive solo agents and seeds the review moat needed for organic growth

The core insight: the AMS pricing dead zone ($50–$99/month flat for a small team, cloud-based, modern UI) is structurally unoccupied. This gap exists not because incumbents haven't seen it, but because they cannot fill it.

## Project Classification

- **Project Type:** SaaS B2B (multi-user cloud web application)
- **Domain:** Insurance / Insurtech
- **Complexity:** Medium — insurance-native data models (clients → policies → carriers → commissions), financial reconciliation workflows, email automation, document storage, and multi-user RBAC; no heavy regulatory compliance at MVP (E&O audit trail is defensive documentation, not regulatory mandate)
- **Project Context:** Greenfield — no existing codebase or legacy system

---

## Success Criteria

### User Success

Agents succeed when AgencyCore eliminates the three manual rituals that currently consume their week:

1. **Renewal ritual eliminated:** ≥80% of expiring policies within 60 days of signup receive automated outreach without agent intervention. The "aha!" moment is the first Monday morning an agent opens their dashboard and sees renewal emails already sent — they just handle exceptions.

2. **Commission reconciliation time reduced:** Agencies with ≤8 carrier relationships complete monthly commission reconciliation in under 2 hours, down from 4–6 hours of manual spreadsheet work.

3. **Client record access instant:** Any policy document, coverage detail, or commission record retrievable in under 5 seconds during a live client call, eliminating carrier portal tab-switching.

**User-facing "worth it" threshold:** Within 14 days of signup, the agent has configured renewal automation, uploaded at least one carrier commission statement, and retrieved a document during a client call. If all three happen, churn probability drops to near zero.

### Business Success

| Milestone | Target | Timeline |
|-----------|--------|----------|
| LTD customers (AppSumo launch) | 200–350 purchases | 60 days post-launch |
| AppSumo refund rate | ≤12% | 60-day refund window |
| Capterra / G2 reviews, avg ≥4.0 | ≥30 reviews | 90 days post-launch |
| NPS (LTD cohort) | ≥40 | 45 days post-purchase |
| Monthly churn (MRR subscribers) | ≤5% | First 3 MRR months |
| Active paying customers | 500 | 12 months post-launch |
| ARR | $350K–$450K | 12 months post-launch |
| Active paying customers | 2,000 | 24 months post-launch |
| ARR | $2.1M | 24 months post-launch |

**Leading indicators (weekly, first 90 days):**
- Renewal automation activation rate within 14 days of signup (target ≥60%)
- Commission statement upload rate (stickiness proxy)
- AppSumo refund rate (target ≤12% vs. AppSumo average ~15%)
- Insurance-Forums.com and r/InsuranceAgent sentiment

### Technical Success

- **Onboarding:** New user completes CSV import and configures first renewal sequence in under 2 hours (measured by funnel analytics)
- **Import reliability:** ≥95% of policy rows imported without data loss from properly formatted CSV
- **Automated email delivery:** ≥98% of scheduled renewal emails delivered within 5 minutes of trigger time
- **Commission matching:** ≥90% of carrier statement line items auto-matched to policies for standard carrier formats
- **Document retrieval:** Any stored document returned in under 3 seconds (95th percentile)

### Measurable Outcomes

- Renewal automation adoption: ≥60% of signups activate within 14 days; ≥80% by 12 months
- Commission reconciliation adoption: ≥45% by 90 days; ≥65% by 12 months
- Weekly active usage: ≥65% of subscribers log in ≥3x/week
- NPS: ≥50 at 12 months (vs. HawkSoft/EZLynx estimated NPS of 15–20)
- LTV (at $89/month): $3,200 average (36-month retention) → $4,000+ at 24 months

---

## Product Scope

### MVP — Minimum Viable Product

**Goal:** Prove that flat-rate pricing plus the five core workflows converts spreadsheet-dependent small agencies to paying subscribers. Target: operational in one afternoon, automated renewal email sent within first session.

**Core User Journeys Supported (MVP):**
- Solo agent imports policy book and configures renewal automation (primary value loop)
- Agency CSR uploads carrier commission statements and reconciles monthly ledger
- Agent or CSR retrieves client policy documents during a live call
- Agency principal reviews book-of-business expiring policy report

**Must-Have Capabilities:**
1. Client and policy database with insurance-native data model (client → policies → carrier/type/dates/premium)
2. CSV import from HawkSoft, EZLynx, AMS360 exports and provided spreadsheet template
3. Renewal pipeline view (90/60/30/14-day expiration dashboard)
4. Automated email outreach sequences at configurable pre-expiration intervals
5. Pre-built renewal email templates with client/policy variable substitution
6. Commission statement upload (CSV, Excel, text-extractable PDF)
7. Automated policy-number matching with discrepancy flagging
8. Agent split configuration and monthly commission ledger (exportable PDF/CSV)
9. Carrier document vault with per-client and per-policy organization
10. Document search and retrieval with E&O-defensible activity log
11. Book-of-business reports: expiring policies, revenue forecast, commission summary
12. Multi-user support (up to 5 users at $89/month flat) with Principal/Producer/CSR roles
13. Stripe billing with monthly/annual options and AppSumo LTD code redemption
14. Full data export on cancellation (no lock-in)

### Growth Features (Post-MVP)

**Phase 2 (Months 6–18):**
- Native SMS renewal outreach via Twilio
- ACORD form auto-fill from policy records (top 20 personal and commercial lines forms)
- E-signature workflow (DocuSign/HelloSign integration)
- AI-assisted commission statement parsing (OCR + extraction for any carrier format)
- Chrome extension for carrier portal auto-fill from AgencyCore data
- Client-facing policy summary portal
- Native mobile app (iOS and Android)
- Commercial lines ACORD library

### Vision (Future)

**Phase 3 (Months 18–36+):**
- IVANS carrier download integration for real-time policy sync
- Automated commission feeds from IVANS-connected carriers
- Predictive renewal risk scoring (which clients are most likely to shop at renewal)
- Cross-agency benchmarking
- MGA/wholesale white-label offering
- Carrier-sponsored access program
- Embedded insurtech integrations (comparative raters, client portals, e-delivery platforms)

---

## User Journeys

### Journey 1: Linda — The Monday Morning That Changed Everything

Linda, 42, has been managing her 340-policy solo P&C agency on Google Sheets for 4 years. Every Monday she spends 90 minutes reviewing her expiration spreadsheet, manually pulling together renewal outreach emails one by one. On a Tuesday in February, she finds AgencyCore on a forum thread titled "HawkSoft alternative under $100" and signs up for the AppSumo LTD.

**Discovery:** Linda arrives at AgencyCore after clicking a forum link. She sees "$89/month for your whole team" on the pricing page and does the math: she's been on the fence about EZLynx at $350/month. She clicks "Start Free Trial."

**Onboarding:** The welcome screen presents a 4-step checklist: (1) Import your policies, (2) Configure renewal automation, (3) Upload a carrier statement, (4) Invite your team. Linda downloads the CSV import template, populates it from her master spreadsheet, and uploads 340 rows. The import completes in 4 minutes with 338 matched and 2 rows flagged for review. She resolves the two issues in the column-mapping UI.

**First Value Moment (Day 1):** Linda opens the renewal pipeline view. 18 policies expire in the next 60 days. She selects the personal-lines renewal email template, customizes the subject line, and configures 60/30/14-day triggers. She hits "Activate." Total time: 2 hours 10 minutes from signup.

**The Aha Moment (Day 8):** The following Monday, Linda opens her laptop and sees 6 renewal outreach emails in the activity log — sent automatically overnight to clients with policies expiring in 60 days. She reviews the log, confirms they went out correctly, and closes the laptop. Monday morning ritual: 4 minutes instead of 90.

**Sustained Value:** At month end, Linda uploads her 9 carrier commission PDFs. The system matches 94% of line items automatically. It flags a $340 discrepancy against Travelers — a rate she's been receiving for 8 months. She recovers $2,720 in back-payments. Linda posts in the Insurance-Forums.com thread: "Switched from HawkSoft, paying $89/month now. Commission reconciliation alone paid for 3 years of the subscription."

**Journey Requirements Revealed:**
- CSV import with visual column mapping and row-level error flagging
- Renewal pipeline view with bulk sequence activation
- Pre-built email templates with merge variables
- Activity log showing sent/delivered status per policy
- Commission statement upload with auto-matching and discrepancy flagging

---

### Journey 2: Kevin — The Day Diane Took Sick Leave

Kevin, 55, runs a 4-person P&C agency in Atlanta. He's been on HawkSoft for 6 years at $532/month. His CSR Diane handles everything — client records, renewal reminders, and the monthly commission reconciliation she runs from a personal Excel spreadsheet. On a Thursday in March, Diane calls in sick. A carrier statement arrived that morning. Kevin has no idea how to run the reconciliation.

**Discovery:** Kevin searches "HawkSoft alternative flat rate" after his third billing cycle where adding a new producer cost him another $94/month. He finds AgencyCore. He schedules a 30-minute onboarding call with the founder (offered in the first 100 signups).

**Migration Decision:** Kevin exports his agency's 680 policies from HawkSoft as CSV. He uploads to AgencyCore. The HawkSoft column mapping is pre-configured — zero manual mapping needed. Import completes in 7 minutes. Kevin invites his two producers and Diane as team members (CSR role). Each gets an email with a self-service setup link.

**The Diane Problem Solved:** Three weeks after going live, Diane is out sick on commission statement day. Kevin opens AgencyCore, navigates to Commission Reconciliation, uploads the Nationwide CSV that arrived that morning. The system matches 98% of line items, produces the reconciliation report, and calculates producer splits automatically. Kevin emails it to his bookkeeper. The process takes 40 minutes instead of Diane's usual 4 hours.

**Long-Term Adoption:** Six months in, Kevin's agency is fully transitioned. The $532 HawkSoft bill is gone. He's added a new producer without worrying about software costs. During a Big "I" chapter meeting, Kevin tells two other agency principals: "The math sells itself. Three people, $89/month."

**Journey Requirements Revealed:**
- Pre-configured column mapping for HawkSoft, EZLynx, AMS360 export formats
- Multi-user invitation flow with role-based access (Principal, Producer, CSR)
- Commission reconciliation accessible to any authorized user (not CSR-gated)
- Carrier statement auto-matching with split calculation
- Exportable commission report suitable for bookkeeper sharing

---

### Journey 3: Jenna — Setting Up the Right Foundation

Jenna, 34, launched her independent P&C agency 8 months ago. She has 85 policies and is growing fast. She's been evaluating NowCerts and Jenesis for 3 weeks. Jenesis is Windows-only (dealbreaker). NowCerts pricing is confusing post-rebrand. A peer in an independent agents Facebook group tags her in a post: "Just set up AgencyCore in 2 hours. First automated renewal email went out tonight without me touching it."

**Discovery:** Jenna clicks the link, reads the pricing page, and signs up immediately. No demo required — transparent pricing, self-serve signup.

**Onboarding (No Legacy System):** Jenna has no AMS to export from — her policies live in a Google Sheet. AgencyCore's import template has a "Google Sheets compatible" download option. She formats her 85 policies in 30 minutes using the template, uploads the file, and all 85 import cleanly.

**Configuration:** Jenna configures her agency profile, uploads her logo for renewal emails, and sets 90/60/30-day renewal triggers. She enables the "New client welcome" sequence — something she's been meaning to set up manually but never did. For the first time, her agency has systematic client communication.

**First Commission Upload:** At month end, Jenna uploads her first carrier commission statements (3 carriers). The system matches 100% automatically. She sees, for the first time, exactly what she earned last month: $4,240 across 3 carriers, broken down by policy. She had been estimating by memory.

**Growth Foundation:** At 200 policies 6 months later, the system scales without any additional work. The spreadsheet that was straining at 85 policies is gone. When a client calls, Jenna pulls their full policy history in under 5 seconds instead of hopping between carrier portals. Her renewal retention rate is up — clients are hearing from her systematically for the first time.

**Journey Requirements Revealed:**
- Google Sheets compatible import template
- Agency branding configuration (logo, name on outreach emails)
- Welcome sequence automation (not just renewal sequences)
- Commission breakdown by carrier and policy type
- Client record with full policy history for same-session retrieval

---

### Journey 4: Diane — The CSR Who Stopped Maintaining the Backup Spreadsheet

Diane, 48, is Kevin's CSR. She's been maintaining the agency's commission reconciliation in a personal Excel spreadsheet for 6 years because HawkSoft's commission module "never quite worked right." She's skeptical of AgencyCore — she's seen software migrations fail before, and she's the one who gets the phone calls when something breaks.

**Initial Skepticism:** Diane agrees to a 1-week parallel run: she'll maintain her Excel ledger alongside AgencyCore's commission module, and compare the results at month end.

**The Parallel Run:** At the end of week 1, Diane uploads 4 carrier statements to AgencyCore. The system's reconciliation matches her Excel ledger within $12 (a data entry error on her end, not a system error). She finds the discrepancy in 8 minutes.

**The First Month Without the Spreadsheet:** In month 2, Diane runs commission reconciliation in AgencyCore only. She completes the full reconciliation — 8 carriers — in 90 minutes. Her prior record was 4 hours. She exports the PDF summary and emails it to Kevin. He replies: "This is the first time commission reconciliation didn't take you all day. Can we add the rest of the carriers next month?"

**Full Adoption:** By month 3, Diane has archived her Excel spreadsheet. When a new producer joins the team, Diane doesn't need to train them on a separate commission system — the split percentages are configured in AgencyCore and applied automatically. Diane's Tuesday is now her favorite day of the month. Commission reconciliation is a 90-minute task, not an all-day ordeal.

**Journey Requirements Revealed:**
- Commission reconciliation auditable enough for a skeptical power user to trust (line-item detail, exportable)
- Carrier statement upload for multiple carriers in a single session
- Historical reconciliation record (monthly ledger with searchable history)
- Producer split configuration per agent and carrier
- PDF export formatted for sharing with agency principals and bookkeepers

---

### Journey Requirements Summary

| Capability Revealed | Journey Source |
|---------------------|----------------|
| CSV import with visual column mapping and row-level error handling | Linda, Kevin |
| Pre-configured import templates for major AMS exports (HawkSoft, EZLynx, AMS360) | Kevin |
| Google Sheets compatible import template | Jenna |
| Renewal pipeline view with bulk sequence activation | Linda |
| Pre-built email templates with merge variables and customization | Linda, Jenna |
| Email delivery activity log per policy | Linda |
| Agency branding on outreach emails | Jenna |
| Welcome and lifecycle sequence automation (beyond renewal) | Jenna |
| Multi-user invitation with role-based access | Kevin |
| Commission statement upload (CSV, Excel, PDF) with auto-matching | Linda, Kevin, Diane |
| Discrepancy flagging with policy-level detail | Linda, Diane |
| Agent split configuration and automated calculation | Kevin, Diane |
| Exportable commission report (PDF + CSV) | Kevin, Diane |
| Historical commission ledger with search | Diane |
| Client record with full policy history, accessible in under 5 seconds | Linda, Jenna |
| Carrier document vault with per-client and per-policy organization | Linda |
| E&O-defensible activity log | Linda |
| Book-of-business reporting | Kevin |

---

## Domain-Specific Requirements

### Insurance Industry Context

AgencyCore operates in the independent P&C insurance agency domain. This domain has medium complexity: no HIPAA-equivalent mandate at the agency level, but specific operational and legal requirements apply.

### E&O Compliance Documentation

Independent agents face Errors & Omissions exposure when disputes arise about advice given, coverage recommended, or communication timing. The key E&O defense tool is an audit trail:
- Every client note, policy change, document upload, and renewal outreach action must be timestamped and attributed to a specific user
- Activity log must be immutable (append-only, not editable after creation)
- Document access events (viewed, downloaded) must be logged with user and timestamp
- These logs must be exportable for E&O claim defense

**Implementation requirement:** All client-affecting actions write to an immutable audit log with `user_id`, `action_type`, `entity_type`, `entity_id`, `timestamp`, and `metadata` fields. Log is exportable as CSV or PDF per client.

### Data Security for Sensitive Client Information

Insurance clients share PII (name, address, DOB, SSN for some applications), policy details, and sometimes financial information. While P&C personal lines agencies are not HIPAA-covered entities, they are subject to state insurance privacy regulations and the Gramm-Leach-Bliley Act (GLBA):
- Client PII must be encrypted at rest and in transit
- Data access must be role-restricted (Producers see only assigned clients unless Principal grants full access)
- No client data shared across agency boundaries (tenant isolation required)
- Data deletion on account cancellation must cover all PII per GLBA requirements

### Carrier Commission Statement Formats

Carrier statements arrive in non-standardized formats (CSV, Excel, PDF). No carrier API exists for small agencies at MVP stage. The system must:
- Accept the three most common formats (CSV, .xlsx, text-extractable PDF)
- Allow manual carrier statement template configuration (column mapping saved per carrier)
- Provide clear error messages for unrecognized formats without data loss

### Renewal Timing Conventions

Insurance renewals follow industry-standard outreach windows:
- 90 days before expiration: initial renewal outreach
- 60 days: follow-up if no response
- 30 days: urgency follow-up
- 14 days: final outreach / lapse warning
- These windows are the configurable defaults; agents must be able to adjust per policy type

### Compliance & Regulatory Summary

| Requirement | Basis | MVP Scope |
|-------------|-------|-----------|
| Immutable audit log for all client-affecting actions | E&O defense | Required at launch |
| Client PII encrypted at rest and in transit | GLBA / state insurance privacy regulations | Required at launch |
| Tenant isolation (no cross-agency data access) | Baseline data security | Required at launch |
| Role-based data access (Producer sees assigned clients only) | Operational and GLBA | Required at launch |
| Data deletion on cancellation (30-day retention, then purge) | GLBA / data minimization | Required at launch |
| IVANS carrier data feeds | Industry standard for large agencies | Deferred to Phase 3 |
| State-specific E&O requirements | Varies by state | Legal disclaimer on activity log features; no state-specific implementation at MVP |

---

## SaaS B2B Specific Requirements

### Multi-Tenancy

Each insurance agency is a fully isolated tenant. No data sharing across tenants under any circumstance. Tenant isolation enforced at the data layer (not just at the application layer).

**Tenant model:** Single-tenant data model with shared infrastructure. Each agency has an `agency_id` namespace applied to all data objects. Row-level security enforced in all database queries.

### Role-Based Access Control (RBAC)

Three roles at MVP:

| Role | Access Level |
|------|-------------|
| **Principal** | Full access: all clients, policies, documents, commission data, billing, user management, agency settings |
| **Producer** | Own assigned clients and policies; view (not edit) other producers' clients; no billing access; no user management |
| **CSR** | All client and policy records (read + write); document vault (read + write); commission reconciliation (read + write); no billing access; no user management |

Principals can override Producer access restrictions to grant full-book visibility.

### Subscription & Billing

- Stripe as payment processor
- Plans: Solo ($49/month, 1 user), Agency ($89/month, up to 5 users), Annual Agency ($890/year)
- LTD code redemption via AppSumo integration (Tier 1: $59/1 user, Tier 2: $99/3 users, Tier 3: $149/5 users + priority support)
- Self-serve plan management (upgrade, downgrade, cancel) without contacting support
- Billing portal accessible to Principal role only

### Onboarding

- Self-serve signup: email, agency name, password — no credit card at trial
- 14-day free trial for MRR plans; LTD purchasers get immediate access
- In-app onboarding checklist (4 steps: import policies, configure renewal automation, upload carrier statement, invite team)
- CSV import guide (video + written) for top 3 source systems (HawkSoft, EZLynx, Excel/Google Sheets)
- Optional 30-minute onboarding call for first 100 signups (founder-led)

### Data Portability

- Full data export (policies, clients, documents, commission ledger, activity log) as CSV at any time, including 30 days post-cancellation
- No lock-in: export must be usable to migrate to any other system
- Document vault contents exportable as ZIP archive

### Technical Architecture Considerations

- Web-first, responsive design (no native mobile at MVP — mobile use covered via browser)
- Cloud-hosted (AWS or equivalent), US-only data residency at launch
- Email delivery via transactional email provider (Postmark or SendGrid) for reliability and deliverability tracking
- Document storage via S3-compatible object storage; 5GB included per subscription
- Commission statement PDF parsing: text extraction for text-based PDFs; image-based PDFs require manual entry fallback with clear error message at MVP

---

## Project Scoping & Phased Development

### MVP Strategy & Philosophy

**MVP Approach:** Experience MVP — the minimum that makes users say "this is exactly what I needed" within the first session. The critical experience is the first automated renewal email firing without the agent touching it. Everything in MVP is in service of getting the agent to that moment.

**Resource Requirements:** Full-stack web developer (1 senior, 1 mid-level), designer (part-time or contract), 4–6 weeks build timeline, founder involvement in first 100 user onboarding.

### MVP Feature Set (Phase 1)

**Core User Journeys Supported:**
1. Solo agent: import policy book → configure renewal sequences → see automated emails fire
2. Agency CSR: upload carrier commission statement → reconcile ledger → export report
3. Any user: retrieve client policy document during live call in under 30 seconds
4. Agency principal: run book-of-business expiring policy report

**Must-Have Capabilities (aligned with core features defined in Product Scope):**
- Client & policy database with CSV import and column mapping
- Renewal pipeline view and automated email sequence engine
- Commission statement upload, auto-matching, and ledger
- Carrier document vault with activity log
- Book-of-business reports (expiring policies, commission summary, revenue forecast)
- Multi-user RBAC (Principal/Producer/CSR)
- Stripe billing + AppSumo LTD redemption
- Full data export

### Post-MVP Features

**Phase 2 (Months 6–18):**
- SMS renewal outreach (Twilio)
- ACORD form auto-fill
- E-signature workflow
- AI commission statement parsing (OCR for image-based PDFs)
- Chrome extension for carrier portal auto-fill
- Client-facing portal
- Native mobile app

**Phase 3 (Expansion):**
- IVANS carrier download
- Predictive renewal risk scoring
- Cross-agency benchmarking
- MGA white-label
- Carrier-sponsored access

### Risk Mitigation Strategy

**Technical Risks:**
- *Commission PDF parsing* — text-based PDFs covered at MVP; image-based PDFs require manual upload fallback. Risk: agencies with image-only carrier statements have degraded experience. Mitigation: document fallback clearly in onboarding; build OCR in Phase 2.
- *Email deliverability* — renewal emails going to spam destroys the core value prop. Mitigation: use dedicated transactional email provider (Postmark) with domain authentication setup guide in onboarding; monitor bounce/spam rates weekly.

**Market Risks:**
- *NowCerts/Momentum AMP drops to flat-rate pricing* — speed to AppSumo first and building review moat before competitor pricing resets is the primary mitigation. Flat-rate is a structural model they can't easily adopt without cannibalization.
- *Trust objection ("will you exist in 3 years?")* — transparent public roadmap, founder name attached, AppSumo refund policy as safety net, rapid review accumulation.

**Resource Risks:**
- *4–6 week timeline slips* — if timeline extends, prioritize: (1) import + policy DB, (2) renewal automation, (3) commission reconciliation, (4) document vault. Reports are last. A working renewal automation demo at 4 weeks is better than a 50%-complete system at 6 weeks.

---

## Functional Requirements

### Client & Policy Management

- **FR1:** Agents can create client profiles with contact details, agency assignment, and communication preferences
- **FR2:** Agents can create and edit policy records linked to a client, capturing carrier, policy number, policy type, effective date, expiration date, premium, and coverage summary notes
- **FR3:** Agents can view all policies associated with a client in a unified profile view
- **FR4:** Agents can search and filter the policy book by client name, carrier, policy type, expiration date range, and assigned agent
- **FR5:** Agents can update policy status (Active, Expired, Cancelled, Non-Renewed, Pending)
- **FR6:** Agents can add timestamped notes to a client or policy record (client communication log)
- **FR7:** Agents can import policies from CSV using a column-mapping interface that supports HawkSoft, EZLynx, AMS360, and custom spreadsheet formats
- **FR8:** The system displays import results with row-level success/error detail; agents can resolve mapping errors before confirming import
- **FR9:** Agents can export the full policy book as CSV at any time

### Renewal Reminder Automation

- **FR10:** Agents can view all policies expiring within a configurable time window (up to 180 days) on a renewal pipeline dashboard, sortable by carrier, expiration date, and assigned agent
- **FR11:** Agents can configure automated email outreach sequences with triggers at any combination of 90/60/30/14 days pre-expiration
- **FR12:** Agents can create, edit, and preview email templates with client and policy variable substitution (client name, policy type, expiration date, carrier, agent contact details)
- **FR13:** The system provides a library of at least 5 pre-built insurance-appropriate renewal outreach templates (personal lines, commercial BOP, lapse warning) that agents can use as-is or customize
- **FR14:** Agents can suppress renewal automation for specific policies or entire clients (e.g., non-renewing accounts)
- **FR15:** Agents can update renewal status per policy (Renewed, Not Renewing, In Progress, Awaiting Client Response, Sent to Carrier)
- **FR16:** Agents can view a delivery log of all automated emails sent, with timestamp, recipient, template used, and delivery status per policy

### Commission Reconciliation

- **FR17:** Agents can upload carrier commission statements in CSV, Excel (.xlsx), and text-extractable PDF formats
- **FR18:** The system automatically matches uploaded statement line items to policies by policy number and flags unmatched items for manual review
- **FR19:** Agents can configure expected commission rates per carrier and policy type; the system flags received amounts that deviate beyond a configurable threshold
- **FR20:** Agents can configure producer split percentages per agent and carrier for automated split calculation
- **FR21:** Agents can view and export a monthly commission ledger showing carrier, policy, expected amount, received amount, delta, and agent allocation
- **FR22:** Agents can view historical commission reconciliation records by month and carrier

### Carrier Document Vault

- **FR23:** Agents can upload files of any type (PDF, Word, Excel, images) to a client or policy record, with document category (policy document, certificate of insurance, quote comparison, binder, correspondence, claim document, other)
- **FR24:** Agents can search documents by client, policy, document category, and upload date, with retrieval in under 5 seconds
- **FR25:** The system records an immutable activity log entry for every document action (uploaded, viewed, downloaded) with user, timestamp, and document identity
- **FR26:** Agents can export the complete activity log for a client as CSV or PDF for E&O defense purposes

### Book-of-Business Reporting

- **FR27:** Principals and CSRs can generate an expiring policies report for a configurable time window (30/60/90/180 days), filterable by carrier, policy type, and assigned agent, with renewal status column
- **FR28:** Principals can generate a revenue forecast report showing estimated commission income from upcoming renewals based on carrier commission rate profiles
- **FR29:** Principals and CSRs can generate a commission summary report showing earned vs. received commissions by carrier for a given month, with total discrepancy amount
- **FR30:** Principals can view a policy count snapshot showing active/expired/cancelled counts by policy type and carrier
- **FR31:** All reports are exportable as CSV

### Agency & User Management

- **FR32:** Principals can invite team members via email and assign roles (Principal, Producer, CSR)
- **FR33:** Principals can configure agency branding (agency name and logo) that appears on renewal email outreach and exported documents
- **FR34:** Principals can manage subscription (view plan, upgrade, downgrade, cancel) and access billing history
- **FR35:** The system supports LTD code redemption at signup for AppSumo purchasers, applying the appropriate user and policy limits for the purchased tier
- **FR36:** Agents can export all agency data (client records, policy records, documents, commission ledger, activity log) as CSV/ZIP at any time, including 30 days post-cancellation
- **FR37:** The system enforces role-based data access: Producers access only assigned clients and policies by default; Principals access all records; CSRs access all client and policy records but not billing

---

## Non-Functional Requirements

### Performance

- **NFR1:** Policy search results return within 2 seconds for agencies with up to 2,000 policies under standard load
- **NFR2:** Document retrieval (file download initiation) completes within 3 seconds for files up to 25MB under standard load
- **NFR3:** CSV imports of up to 1,000 rows complete within 60 seconds; imports of 1,000–5,000 rows may run as background jobs with progress notification
- **NFR4:** Renewal dashboard load (pipeline view) completes within 3 seconds for agencies with up to 2,000 active policies
- **NFR5:** Automated renewal emails fire within 5 minutes of scheduled trigger time for ≥98% of scheduled sends

### Security

- **NFR6:** All data is encrypted at rest using AES-256; all data in transit uses TLS 1.2 or higher
- **NFR7:** Multi-factor authentication is available as an opt-in for all users; required for Principal role on accounts with 3+ team members
- **NFR8:** All API endpoints require authentication; unauthenticated requests return 401 with no data exposure
- **NFR9:** Tenant isolation enforced at the database query level; no API endpoint returns data from a different agency under any condition
- **NFR10:** Activity log entries are append-only and not modifiable or deletable by any user role, including Principals
- **NFR11:** PII fields (client name, address, DOB, SSN if stored) are encrypted at the field level in addition to full-database encryption
- **NFR12:** All client data is permanently deleted within 30 days of account cancellation upon user request, in compliance with GLBA data minimization requirements

### Scalability

- **NFR13:** System architecture supports horizontal scaling to handle 10x growth (from 500 to 5,000 active agency tenants) with no architectural rework
- **NFR14:** Document storage scales independently of application tier; 5GB included per tenant at launch, additional storage purchasable without service interruption
- **NFR15:** Email sending infrastructure supports burst capacity of 10,000 emails/hour to handle peak renewal season volume across the customer base

### Reliability

- **NFR16:** System achieves ≥99.5% uptime during business hours (Monday–Saturday, 7am–9pm local time for US customers), as measured by third-party uptime monitoring
- **NFR17:** Automated renewal email jobs are idempotent; a system restart or failure does not result in duplicate emails being sent to clients
- **NFR18:** Commission statement upload failures (malformed file, unrecognized format) surface a clear error message within 30 seconds with no partial data written to the ledger

### Data Integrity

- **NFR19:** CSV import validates data types and required fields before committing any rows; all-or-nothing commit per import batch (no partial imports without explicit user confirmation of partial success)
- **NFR20:** Commission reconciliation results are immutable once published; corrections require a new reconciliation run that supersedes the prior record, with both records retained in history

---

## Appendix: Out-of-Scope Features (MVP)

The following capabilities are explicitly deferred. Any request to add them during MVP development should be escalated with reference to this list:

| Feature | Reason Deferred |
|---------|----------------|
| IVANS carrier download / real-time carrier sync | Requires carrier partnership agreements; Phase 3 moat-builder |
| Direct carrier API integrations | Partnership-gated; not needed for V1 value |
| Comparative rater | Full separate product category |
| ACORD form auto-fill | High-value but complex; Phase 2 |
| E-signature workflow | Adds scope; PDF download covers MVP use case |
| Native SMS renewal reminders | Email-only at launch; Twilio in Phase 2 |
| Client-facing portal | Post-MVP after core agent workflow stable |
| Native mobile app (iOS/Android) | Web-first with responsive design covers mobile use; native app Phase 2 |
| AI-powered commission statement parsing (OCR) | Feature layer on top of core product; Phase 2 |
| Claims tracking workflow | Not top pain point at this agency size; Phase 2 |
| Commercial lines ACORD library | Phase 2; MVP focuses on personal lines P&C |
| Image-based PDF commission parsing | Text-based PDF + CSV/Excel covers MVP; OCR Phase 2 |
| Two-way carrier portal sync | Enterprise-tier; not viable for MVP |
