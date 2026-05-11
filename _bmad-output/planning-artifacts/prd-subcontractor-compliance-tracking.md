---
stepsCompleted: [step-01-init, step-02-discovery, step-02b-vision, step-02c-executive-summary, step-03-success, step-04-journeys, step-05-domain, step-06-innovation, step-07-project-type, step-08-scoping, step-09-functional, step-10-nonfunctional, step-11-polish, step-12-complete]
inputDocuments:
  - ideas/shortlisted/subcontractor-compliance-tracking.md
  - _bmad-output/planning-artifacts/product-brief-subcontractor-compliance-tracking.md
  - _bmad-output/planning-artifacts/research/market-subcontractor-compliance-tracking-research-2026-05-11.md
workflowType: prd
project_name: subcontractor-compliance-tracking
user_name: Root
date: 2026-05-11
classification:
  projectType: saas_b2b
  domain: construction_compliance
  complexity: medium
  projectContext: greenfield
---

# Product Requirements Document — SubShield

**Author:** Root
**Date:** 2026-05-11
**Status:** Complete

---

## Executive Summary

SubShield is an AI-powered compliance hub for general contractors managing 20–75 active subcontractors. It replaces the spreadsheet-and-email-chase that costs GC businesses $20,000–$36,000 per year in admin labor by automating document collection, AI extraction, expiry tracking, and sub communications — all in one purpose-built dashboard.

The core problem: every general contractor is legally and contractually required to maintain current compliance documentation (COIs, contractor licenses, W-9s, OSHA certs, lien waivers) for every active subcontractor. In 2026, this workflow is managed almost entirely manually — spreadsheets, email threads, and admin coordinators spending 15–25 hours per week chasing documents. One missed COI expiry can invalidate the GC's own insurance, trigger claim denial, and expose the business to six-figure liability.

The construction compliance software market is $3.67B and growing at 10.3% CAGR, yet every current solution either requires enterprise minimums that exclude SMB GCs (myCOI: 200 COI minimum; BCS: $10K/year floor) or is too shallow to truly replace the spreadsheet (Procore, Contractor Foreman). The SMB GC tier — firms managing 20–75 active subs — is effectively unserved at an accessible price point.

SubShield owns this gap with: AI OCR that reads any COI PDF in under 30 seconds, automated expiry alerts to both GC admin and sub at 90/60/30 days, a zero-friction sub portal (no account required), all-document-type coverage (COIs + W-9s + licenses + lien waivers + OSHA), and transparent SMB pricing ($49–$99/month). LTD options ($199–$399) de-risk early revenue and justify the investment in a single week of saved admin time.

### What Makes This Special

SubShield wins on three axes that no current SMB competitor matches simultaneously:

1. **AI breadth**: While Billy and TrustLayer focus on COIs, SubShield applies AI extraction across all five compliance document types. A GC admin who uploads any document type gets structured data extracted — no manual entry, no template guessing.

2. **Zero-friction sub portal**: Subcontractors receive an email link, upload documents in 60 seconds, and never create an account. Competitors requiring sub account creation lose adoption at the first friction point; SubShield's no-login portal achieves >70% upload completion in design partner accounts.

3. **SMB-first pricing with LTD**: The only compliance-specific tool offering published pricing and a lifetime deal path. At $199–$399 one-time, a GC paying $25/hr for admin saves the LTD cost in the first week of use. The ROI argument is undeniable and immediate.

The insight that makes this possible: compliance document collection is a structured data extraction problem, not a human review problem. Every ACORD 25 COI has the same fields in predictable positions. AI extraction achieves >92% field-level accuracy on standard forms — well above the threshold for human spot-checking to catch the remaining edge cases.

## Project Classification

- **Project Type:** SaaS B2B (web application)
- **Domain:** Construction compliance / document management
- **Complexity:** Medium — no regulated data types (HIPAA/PCI) but insurance document handling requires accuracy and audit-grade storage; multi-stakeholder workflow (GC admin, sub, project manager, insurance auditor)
- **Project Context:** Greenfield — new product, no existing codebase

---

## Success Criteria

### User Success

**Primary signal — admin hours saved:** GC admin users report reducing compliance-related admin time from 15–25 hours/week to 2–4 hours/week (80–90% reduction) within 60 days of account creation. Measured via in-app self-reporting prompts at 30/60/90-day intervals.

**Compliance rate:** 90%+ of tracked subcontractors have all required documents current within 60 days of account creation (baseline: most GC spreadsheets have 70–80% current at any given time due to manual tracking lag).

**Sub portal adoption:** >70% of document uploads in established accounts occur via the sub portal link (vs. manually uploaded by the GC admin), indicating subs are using the tool rather than reverting to email.

**Time-to-first-document:** New sub onboarded to compliant status within 72 hours (vs. 1–2 weeks manually).

**Aha moment conversion:** 80%+ of trial users complete their first AI extraction within 24 hours of signup. Users who complete a first extraction and validate it against their own records convert to paid at 3x the baseline rate.

### Business Success

**3-Month:** 50+ paying customers, $2,500 MRR (or $15,000 LTD), 15+ G2/Capterra reviews averaging 4.2+, AI OCR accuracy >90% on ACORD COI forms.

**6-Month:** 200+ paying customers, $10,000 MRR, 50+ Procore integrations active, LTD campaign complete with $60,000+ cumulative revenue, monthly churn <5%.

**12-Month:** 750+ paying customers, $37,500 MRR, 100+ reviews, average compliance rate across accounts 92%+, $120,000+ LTD revenue cumulative.

**Churn signal:** <5% monthly churn within 6 months. Compliance tools should behave like infrastructure — once a GC has their sub database in SubShield, switching cost is high.

### Technical Success

- AI OCR field-level accuracy >88% on ACORD 25 COI forms (launch threshold); >92% at 6 months; >95% at 12 months
- Document extraction completes in under 60 seconds for PDFs up to 20MB (target: <30 seconds)
- Sub portal upload completion rate (link clicked → document submitted) >60% (industry baseline for similar email-link flows is 40–50%)
- Email alert delivery rate >98%
- System uptime 99.5% for dashboard and sub portal

### Measurable Outcomes

| Outcome | Baseline | 90-Day Target | Measurement |
|---------|----------|---------------|-------------|
| Admin hrs/week saved | 0 | 12 hrs/account | User survey |
| Sub portal upload rate | 0% | 55% | Upload source tracking |
| Compliance rate per account | 75% | 85% | Computed field |
| AI OCR accuracy | N/A | >88% | Validation dataset |
| Paying customers | 0 | 50 | Billing system |
| NPS | N/A | 30+ | Quarterly survey |
| Days to onboard new sub | 7–14 days | <3 days | Event timestamp |

**Go/no-go decision:** If after 90 days AI OCR accuracy is below 85% on ACORD forms OR sub portal adoption is below 35%, pause marketing investment and prioritize technical improvements before scaling.

## Product Scope

### MVP — Minimum Viable Product

The MVP replaces the GC compliance spreadsheet as the primary system of record. A GC admin completing the MVP workflow should never need to open a spreadsheet or manually chase a document again for core compliance tracking.

**Core MVP capabilities (3–4 week build):**
- Subcontractor directory with compliance status overview
- Document collection via zero-friction email-link sub portal
- AI extraction for COI PDFs and W-9s (the two highest-frequency document types)
- Expiry tracking with automated 90/60/30/14/7-day alerts to GC admin and sub
- Compliance dashboard: per-sub status cards, project-level filter, action-required queue
- Basic reporting: PDF/CSV export, expiry calendar, audit trail
- Secure document storage with version history
- Stripe billing: monthly/annual subscriptions + LTD purchase options

**Explicit MVP exclusions** (deferred to keep build velocity):
- Procore / Buildertrend integration (adds 2–3 weeks; requires OAuth partner approval)
- State license board automated verification (requires 50-state API/scraping)
- Lien waiver tracking tied to payment milestones (requires payment system integration)
- OSHA certification tracking (lower urgency; smaller initial segment)
- SMS alerts (email sufficient for MVP; Twilio integration deferred)
- Sub account / SubPass portable compliance profile (V3+ network feature)
- Mobile native apps (responsive web is sufficient; native apps add maintenance overhead)
- Multi-company / franchise accounts (adds user hierarchy complexity)
- AI endorsement language analysis (incremental value; high NLP investment)
- Insurance carrier API integration (requires carrier partnerships; long-term)

### Growth Features (Post-MVP)

**V2 (Months 2–5):**
- Procore bidirectional sync (sub list import; compliance status sync back to Procore sub records)
- Buildertrend integration (same pattern for residential builder segment)
- State contractor license verification (automated lookup against state boards)
- Lien waiver management (progress/final waivers per payment milestone)
- SMS alerts (configurable text alerts for 7/14-day expiry warnings)
- OSHA 10/30 card tracking
- Procore App Marketplace listing

**V3 (Months 6–12):**
- SubPass — portable subcontractor compliance profile (creates network effect)
- Predictive compliance scoring (ML model to flag likely-to-lapse subs)
- Compliance-as-a-Service managed tier (SubShield team handles COI review/chasing)
- Worker-level OSHA certification tracking with site access integration
- API access for enterprise GC firms and integration partners

### Vision (Future)

- Insurance carrier API integration (direct policy data; bypasses PDF entirely)
- Canada and Australia expansion (similar GC/sub dynamics; English-language markets)
- White-label offering for construction-focused insurance agencies
- Acquisition pathway: position for exit by Procore, Trimble, or a construction insurance carrier as compliance becomes a platform-level expectation

---

## User Journeys

### Journey 1: Michelle — Office Manager, Mid-Size Commercial GC (Primary Success Path)

Michelle, 38, manages compliance for a commercial GC in Atlanta running 3–5 projects with 40–60 active subs. Her current workflow is a 12-column Google Sheet reviewed every Monday morning.

**Opening scene:** It's 7:45 AM Monday. Michelle opens her spreadsheet and spends 45 minutes sending 12 "your COI expires in 30 days" emails. Two will get no response. She'll follow up Thursday. One sub will send the wrong form. She'll catch up Friday. This has been her Monday for three years.

**Discovery:** Michelle Googles "how to track subcontractor COIs automatically" after a colleague in a construction admin Facebook group mentions "the new COI tool." She lands on SubShield, reads the pricing ($49/month for up to 25 subs — less than two hours of her time), and signs up for a trial.

**Rising action:** She imports her Google Sheet via CSV. Her 47 active subs populate in 3 minutes. SubShield flags 11 subs with expiring or expired documents. She drags a real COI PDF onto the upload interface to test the AI. The system extracts carrier name, policy numbers, all coverage amounts, the additional insured endorsement, and the expiry date in 28 seconds. She checks against her spreadsheet — exact match.

**Climax:** She clicks "Send Requests" for the 11 flagged subs. Eleven automated emails go out with SubShield-branded upload links. By Tuesday morning, 7 of the 11 have uploaded new documents. The AI has extracted all of them. She reviews and approves in 4 minutes. The other 4 are scheduled for an automatic follow-up in 3 days.

**Resolution:** Michelle doesn't have a compliance-chase Monday for the first time in three years. She shows her boss a compliance dashboard where 92% of subs are green. He asks what tool she's using. She refers two GC owners from her LinkedIn network within the first month.

**Journey reveals requirements for:** CSV import, sub portal email automation, AI document extraction, dashboard compliance view, audit trail, referral/sharing.

---

### Journey 2: Dave — Owner-Operator GC (Edge Case: Risk Anxiety + LTD Decision)

Dave, 51, runs a Phoenix residential GC with 20 regular subs and a part-time admin. He personally manages compliance because he was burned once — a sub's workers' comp lapsed during a project, a worker fell, and the insurance claim was a nightmare. He still loses sleep about this.

**Opening scene:** It's 11 PM. Dave is on his phone checking his spreadsheet for tomorrow's site visit at a job where he knows one sub's COI was due for renewal two weeks ago. He can't remember if he got the renewal or just the email saying they'd sent it to the carrier. He can't find the email. He's not sleeping until he can confirm.

**Discovery:** Dave sees a post in r/contractors with someone describing exactly this situation. A commenter links to SubShield with "I use this, it auto-tracks everything and texts you when something expires." Dave clicks. He reads the $199 LTD pitch. He does the math: 10 hours/week × $35/hr × 52 weeks = $18,200/year. The $199 one-time cost is noise.

**Rising action:** Dave buys the LTD at 11:45 PM, imports his 20 subs from a spreadsheet screenshot-to-CSV he makes in 10 minutes, and uploads the one questionable COI he finally found in a separate folder. AI extracts it, shows the expiry date as 3 months out. He exhales.

**Edge case — walkthrough with admin:** Next day, Dave walks his part-time admin through SubShield. She's not technical. He needs the interface to be self-explanatory. She sets up document requests for 6 subs with outdated W-9s using only the built-in help text and completes the flow without calling Dave.

**Climax:** 19 days later, Dave receives a push notification: "Sub: Mountain View Framing — COI expires in 14 days." He hadn't even known to watch for it. Mountain View already got an automated reminder 3 days ago and has uploaded their renewal. Dave's dashboard shows the renewal, extracts clean, he approves in 30 seconds.

**Resolution:** Dave mentions SubShield at an AGC chapter safety meeting. Two GC owners ask for the link. He refers them.

**Journey reveals requirements for:** LTD purchase flow, mobile-responsive dashboard, push/email notifications, renewal upload tracking, simple admin UX, word-of-mouth referral.

---

### Journey 3: Karen — Compliance Coordinator, Regional Home Builder (Multi-Project + Procore Context)

Karen, 44, tracks 50–70 trade contractors across 15 active home builds in North Carolina. Same subs work across multiple builds. Her company uses Procore for project management. Her specific pain: electricians and plumbers need state licenses; framers don't. She needs project-level compliance views, not just company-wide status.

**Opening scene:** Karen's Procore has a "subcontractor documents" feature but it doesn't read PDFs, doesn't track expiries, and doesn't know that an electrician needs a license. She maintains a second spreadsheet. The project manager keeps asking her about compliance on Build #142 before the framing inspection. She has to cross-reference three tabs to answer.

**Discovery:** Karen searches the Procore App Marketplace for "compliance tracking." She finds SubShield and Billy. She compares: Billy is COI-only; SubShield covers COIs, licenses, W-9s. SubShield is $99/month vs. Billy's opaque "contact sales." She starts a SubShield trial.

**Rising action:** She uses SubShield's Procore sync (V2 feature; in MVP she imports sub list via CSV) to populate her 62 subs. She configures trade-specific document requirements: electricians and plumbers get a state license requirement added; framers, painters, and landscapers don't. She sends bulk document requests to all 62 subs.

**Edge case — state license verification:** Karen runs a manual spot-check on three electrical subs using SubShield's state license tracking fields. She discovers one electrical sub's license expired 6 weeks ago. She flags them as non-compliant and removes them from Build #142's approved vendor list before they show up on-site.

**Climax:** The project manager for Build #142 texts Karen: "All good on compliance for Friday's inspection?" She opens the project filter on the SubShield dashboard. 8 subs assigned to Build #142. 7 green, 1 yellow (framer's WC expires in 22 days, already sent for renewal). She screenshots the dashboard and texts it back. PM is satisfied in 30 seconds.

**Resolution:** Karen becomes the SubShield advocate in her company's lunch-and-learn series for office managers. Her company's insurance broker, who reviews compliance annually, notes the improvement in document currency rate during the annual audit and reduces the WC premium by 8%.

**Journey reveals requirements for:** Trade-specific document requirements, project-level compliance filter, sub-to-project assignment, compliance screenshot/export, broker/auditor read-only view.

---

### Journey 4: Alex — Subcontractor (Document Uploader, No Account)

Alex runs a small HVAC sub with 6 employees. He works with 12 different GCs. Every one of them uses a different system. He's gotten login emails from three different compliance portals in the last month and has ignored all of them because he doesn't have time to create accounts.

**Opening scene:** Alex gets an email: "Golden State Construction is requesting your compliance documents." He almost marks it as spam. Then he sees "No account required — just click and upload."

**Rising action:** He clicks. He sees a simple form: "Upload your Certificate of Insurance" (COI), "Upload your W-9." He drags his COI PDF from his Downloads folder. Uploads in 8 seconds. Drags his W-9. Uploads in 4 seconds. Clicks Submit.

**Climax:** He gets a confirmation: "Documents received. We'll be in touch if anything else is needed." Total time: 65 seconds. No password. No username. Done.

**Resolution:** When his COI comes up for renewal 60 days later, SubShield sends him a reminder email with the same upload link. He uploads the new COI without needing to find the original email thread.

**Journey reveals requirements for:** Email-link upload portal (no account), mobile-optimized upload UI, progress tracking (what's been submitted vs. missing), receipt confirmation email, renewal reminder with pre-filled link.

---

### Journey 5: GC Owner / Insurance Auditor (Read-Only Dashboard Consumer)

Derek is a GC company owner. He doesn't manage compliance day-to-day — that's Michelle's job. Once a quarter, his insurance broker asks for a compliance snapshot for the annual audit.

**Opening scene:** Broker emails: "Can you send over your current sub COI status for the renewal review?"

**Resolution:** Michelle exports the compliance report as PDF in 2 minutes. All subs, all document types, current status, expiry dates, timestamp of last verification. Broker completes audit in 20 minutes instead of 4 hours.

**Journey reveals requirements for:** PDF/CSV report export, read-only link for external stakeholders, audit trail with timestamps.

### Journey Requirements Summary

| Journey | Key Capabilities Required |
|---------|--------------------------|
| Michelle (office manager success) | CSV import, bulk document requests, AI extraction, dashboard, alert automation, referral |
| Dave (owner-operator + LTD) | LTD purchase, mobile-responsive UI, push notifications, simple admin UX |
| Karen (multi-project coordinator) | Trade-specific requirements, project filter, project-sub assignment, auditor export |
| Alex (subcontractor portal) | No-login upload, mobile upload, confirmation email, renewal reminder |
| Derek/broker (read-only auditor) | Report export, read-only share link, audit trail |

---

## Domain-Specific Requirements

### Construction Compliance Context

SubShield operates in the construction compliance domain — a medium-complexity domain with no directly regulated data types (unlike healthcare or fintech) but with specialized document formats, legal exposure, and multi-party workflows.

**ACORD Standard Forms:** The Certificate of Liability Insurance (COI) is issued on ACORD 25 form — the industry standard used by virtually all US insurance carriers. The AI extraction model must achieve >88% field-level accuracy on ACORD 25 forms from at least 8 different carriers at launch. Non-ACORD COI formats (some specialty carriers use proprietary formats) should trigger a lower confidence score and prompt human review.

**Document Retention:** Industry best practice and many state laws require construction compliance documents to be retained for 7 years. SubShield's storage must support this retention period and provide access controls to prevent premature deletion of compliance records.

**Insurance Coverage Types:** General liability, workers' compensation, commercial auto, and umbrella/excess are the four coverage types GCs typically verify on COIs. The AI extraction must identify and store coverage amounts for each type separately, as minimum thresholds vary by contract and project.

**W-9 Sensitivity:** W-9 forms contain Social Security Numbers (individual contractors) or EINs (business entities). These are sensitive financial identifiers. W-9 data must be encrypted at rest; SSN fields must not be displayed in plaintext in the UI after extraction; access to W-9 data must be limited to account owner and designated admins.

**Lien Waiver Complexity (deferred):** Conditional and unconditional progress and final lien waivers are legally distinct document types that vary in form by state. Their complexity (tied to payment milestones, state-specific language) justifies deferral to V2 rather than attempting inadequate MVP coverage.

### Compliance & Regulatory

- No federal software-specific compliance requirements for construction compliance tracking tools
- GDPR compliance required for any EU-based accounts (unlikely in MVP phase but must be architecturally possible)
- State-by-state contractor license requirements vary significantly — the system must support flexible document type configuration per trade category rather than hardcoded license types
- Document retention: support configurable retention periods with a default of 7 years

### Technical Constraints

- AI OCR pipeline must handle scanned PDFs (not just digital-native PDFs) — field crew often scan paper COIs; image quality varies
- Sub portal must work on mobile (Chrome on iOS/Android) — subs are on job sites, not at desks
- Email deliverability: alerts and sub portal links must not be flagged as spam; use SPF/DKIM authentication; allow GC to configure sender name as their own company name
- Document files: support PDF, JPG, PNG uploads; maximum 20MB per file

### Risk Mitigations

- **AI extraction errors:** Confidence scoring per field; automatic flagging of low-confidence extractions for human review; never auto-approve a document — always require human confirmation
- **Sub portal link security:** Tokenized links with expiry (72 hours of inactivity); prevent link reuse after document submission; no sensitive data accessible via the link beyond what the sub needs to see
- **Data isolation:** GC account data must be fully isolated; no cross-account queries possible at the data layer
- **Insurance claim exposure:** SubShield tracks compliance status but does not provide legal advice or guarantee coverage adequacy; include appropriate disclaimers in UI

---

## Innovation & Novel Patterns

### Detected Innovation Areas

**Innovation 1: Multi-Document-Type AI Extraction (Primary)**

The construction compliance market has seen AI extraction applied to COIs (Billy, TrustLayer) but no SMB player has built a unified AI extraction layer across COIs + W-9s + state licenses + OSHA certifications. SubShield's extraction pipeline treats each document type as a distinct structured data schema, with type detection as the first step (classify: is this a COI, W-9, or license?) before applying the appropriate extraction model.

The technical approach: classify document type from layout/content fingerprinting → route to type-specific extractor → output normalized JSON → flag low-confidence fields → present for human review. This pipeline design means adding a new document type (lien waivers, OSHA certs) in V2 requires only adding a new extractor module, not rebuilding the pipeline.

**Innovation 2: Zero-Friction Sub Portal**

The absence of login is not a missing feature — it's a deliberate product decision based on the insight that subs who have to create accounts don't. A GC managing 50 subs has 50 subcontractors who each work with 5–15 different GCs, each using different tools. The compliance request that requires no new credentials wins adoption.

The technical approach: tokenized upload links tied to the sub's record, not to an authenticated session. The token encodes account ID + sub ID + expiry timestamp, signed with HMAC-SHA256. No session state; each request validates the token. Documents uploaded via the link are associated to the correct sub record without any auth.

**Innovation 3: LTD Pricing for Infrastructure-Class Software**

Lifetime deals are common in productivity tools but rare in compliance/document management software because compliance is ongoing. SubShield's insight: the LTD de-risks the purchase decision for a buyer who is fundamentally skeptical of adding recurring SaaS costs. Once the GC's sub database is in SubShield, switching cost is high enough that churn on LTD accounts will be negligible. The LTD is a customer acquisition strategy, not a revenue strategy — it buys a cohort of highly engaged early users who become word-of-mouth ambassadors.

### Market Context & Competitive Landscape

No current competitor in the SMB GC segment offers AI extraction on multiple document types with a no-login sub portal at <$100/month. The closest competitor (Billy, at $49/month for COI-only with Procore integration) leaves the W-9, license, and multi-document gap open. The SMB tier is underserved not because the problem is small, but because enterprise players built for enterprise and nobody has built for the 20–75-sub GC with a lean admin team.

### Validation Approach

- **AI accuracy:** Build a validation dataset of 100 real COI PDFs from at least 10 different carriers before launch; measure field-level accuracy on each extractor; reject launch if below 85% on ACORD 25 standard form
- **Sub portal adoption:** Measure link-click-to-upload completion rate in design partner accounts; if below 40%, investigate friction points (mobile rendering, file size limits, unclear instructions) before scaling
- **LTD conversion:** A/B test LTD vs. monthly-only pricing pages to confirm LTD increases conversion without cannibalizing MRR; hypothesis is that LTD accounts convert at 2x monthly rate for the SMB owner-operator segment

### Risk Mitigation

- **AI accuracy risk:** ACORD 25 is highly standardized; the primary risk is scanned-PDF quality (low-resolution scans of faxed COIs). Mitigation: confidence scoring alerts user to low-quality images; fall back to manual extraction prompt for sub-threshold confidence.
- **Sub portal abandonment:** Token expiry and mobile rendering are the top abandonment causes. Mitigation: 72-hour token TTL (not 24 hours); mobile-first UI design; test on real Android/iOS browsers before launch.
- **LTD sustainability:** Risk that LTD customers dominate support volume without contributing MRR. Mitigation: LTD includes same features as Growth subscription but no SLA guarantee; support tier is community + documentation for LTD; 1:1 onboarding only for subscription customers.

---

## SaaS B2B Specific Requirements

### Project-Type Overview

SubShield is a multi-tenant SaaS B2B application. Each GC company is an isolated tenant. Within a tenant, multiple users (admin, project manager, read-only viewer) can access the same account. Subcontractors interact via an unauthenticated portal — they are not users of the system in the traditional sense.

### Technical Architecture Considerations

**Multi-Tenancy Model:** Tenant isolation at the database level (row-level security or schema-per-tenant). GC accounts must not be able to access each other's sub data, documents, or compliance records under any query path. Recommended approach for MVP: row-level tenant isolation with enforced tenant_id filtering on all queries.

**Authentication:** GC admin and internal users authenticate via email/password with optional SSO (deferred to V2 for enterprise customers). Magic link / passwordless email authentication is preferred for reduced friction on first login. Sub portal is intentionally unauthenticated — token-based, not session-based.

**RBAC (Role-Based Access Control):**

| Role | Permissions |
|------|-------------|
| Account Owner | Full access: manage users, billing, all subcontractors, all documents, all settings |
| GC Admin | Manage subcontractors, documents, requests, alerts; view all reports |
| Project Manager | Read-only: view compliance dashboard, filter by project; cannot upload or modify documents |
| Read-Only Viewer | View compliance status only; no document access (for sharing with auditors/brokers) |

**Onboarding Flow:** Account creation → free trial starts → guided CSV import or manual sub entry → send first document request → trigger first AI extraction → show dashboard. The onboarding funnel ends when the user has completed their first AI extraction and seen the populated dashboard. Time-to-aha target: <30 minutes from signup.

### Tenant Model

Each tenant (GC company) has:
- Account profile: company name, address, default document requirements
- User list with role assignments
- Subcontractor directory
- Document storage bucket (isolated per tenant)
- Alert configuration
- Billing / subscription tier

### Integration Considerations (MVP)

**Stripe:** Payment processing for monthly/annual subscriptions and one-time LTD purchases. Webhook handling for subscription lifecycle events (created, updated, cancelled, payment failed). Tier enforcement via Stripe metadata and webhooks.

**Transactional Email (SendGrid or Postmark):** All outbound emails — sub portal invitations, expiry alerts, renewal reminders, account notifications — route through authenticated transactional email provider. Sender domain must be configurable per account (GC sends from their own domain or SubShield branded) to improve deliverability.

**File Storage (S3-compatible):** All uploaded documents stored in cloud object storage with server-side encryption, access controlled via signed URLs (time-limited, per-request URL generation for document viewing).

**AI/OCR Provider:** Cloud-based OCR combined with structured extraction (AWS Textract, Google Document AI, or Azure Form Recognizer as primary; custom fine-tuning layer on top for construction-specific field mapping). Extraction service must be callable asynchronously — upload triggers a job, webhook or polling notifies when extraction is complete.

### Implementation Considerations

**Progressive Loading:** The compliance dashboard for accounts with 50–75 subs must render in under 3 seconds. Paginate or lazy-load sub cards; pre-compute compliance status server-side rather than computing on render.

**Email Deliverability:** All outbound emails must pass SPF, DKIM, and DMARC checks. Sub portal invitation emails must be tested against spam filters (SpamAssassin score) before launch. Include unsubscribe mechanism for sub-directed alerts (CAN-SPAM compliance).

**Document Viewer:** Inline PDF viewing (PDF.js or equivalent) must work within the SubShield UI without requiring the user to download and open in a separate viewer. The side-by-side extracted-data + original-document view is a key UX pattern for the review/approval workflow.

---

## Project Scoping & Phased Development

### MVP Strategy & Philosophy

**MVP Approach:** Experience MVP — the goal is to deliver a complete end-to-end compliance workflow that replaces the spreadsheet, not a feature subset. A GC admin who signs up should be able to: import their subs, send document requests, review AI-extracted data, and see a live compliance dashboard — all in one session.

**Why experience-first:** The core value proposition (AI reads the document, I don't have to) must be demonstrable in the first session. If the first experience requires any manual data entry that the GC is already doing in a spreadsheet, the switching cost calculus fails.

**Build timeline:** 3–4 weeks for MVP. Single developer (or two) with modern full-stack tooling. No complex infrastructure — standard web app with AI API calls, email integration, and Stripe. The AI extraction layer is the highest-risk component and should be prototyped first.

**Resource Requirements:** 1–2 developers, 1 designer (or developer with strong UX instincts), AI/OCR API subscription. No dedicated infrastructure beyond standard cloud hosting. Total MVP build cost: $15,000–$40,000 depending on team composition.

### MVP Feature Set (Phase 1)

**Core User Journeys Supported:**
- Michelle's full journey: CSV import → bulk request → AI extraction → dashboard monitoring → automated alerts
- Dave's journey: LTD purchase → manual entry → admin delegation → proactive alert receipt
- Alex's journey: email link → no-login upload → confirmation receipt

**Must-Have Capabilities:**
1. Subcontractor directory (add/edit/deactivate, trade category, contact info)
2. Trade-specific document requirement configuration
3. CSV bulk import
4. Sub portal: email-link upload flow, no account required, mobile-responsive
5. AI COI extraction: ACORD 25 → structured fields (all coverage types, expiry, carrier, policy numbers, additional insured)
6. AI W-9 extraction: IRS W-9 form → structured fields (name, EIN/SSN, entity type, address)
7. Confidence scoring + human review/approval workflow
8. Document storage: secure, encrypted, organized by sub + document type + version
9. Expiry tracking with configurable alert schedule (90/60/30/14/7 days)
10. Automated alert emails to GC admin and sub with renewal upload link
11. Compliance dashboard: account-level health score, per-sub status cards, project filter, action queue
12. Project management: create projects, assign subs to projects
13. Report export: PDF and CSV compliance snapshots
14. Audit trail: timestamps for upload, extraction, review, approval
15. Stripe billing: Starter ($49/mo, 25 sub limit), Growth ($99/mo, 75 sub limit), Enterprise ($199/mo), annual discounts, LTD purchases ($199/$399)
16. Role-based access: Account Owner, GC Admin, Project Manager (read-only)

### Post-MVP Features

**Phase 2 (Months 2–5):**
- Procore bidirectional sync
- Buildertrend integration
- State contractor license verification (automated state board lookup)
- Lien waiver management with payment milestone tracking
- SMS expiry alerts (7/14-day high-urgency reminders via Twilio)
- OSHA 10/30 certification tracking
- Procore App Marketplace listing
- SSO / Google Workspace login for enterprise accounts

**Phase 3 (Months 6–12):**
- SubPass: portable subcontractor compliance profile (network effect feature)
- Predictive compliance scoring
- Compliance-as-a-Service premium tier
- Worker-level OSHA certification tracking
- API access for enterprise clients and integration partners
- White-label for insurance agency partnerships

### Risk Mitigation Strategy

**Technical Risks:** AI extraction accuracy on non-standard COI formats is the primary technical risk. Mitigation: build validation dataset pre-launch; use confidence scoring to route edge cases to human review; prioritize ACORD 25 accuracy (90%+ of real-world COIs) before attempting non-standard formats.

**Market Risks:** GC adoption requires behavior change (moving away from spreadsheets). Mitigation: make the first experience indistinguishable from "magic" — the first AI extraction must feel effortless. Spreadsheet import must accept messy real-world CSV exports, not require clean formatting.

**Resource Risks:** If build timeline extends, cut lien waiver and OSHA features (already out of scope) before cutting AI extraction quality or the sub portal. The core value — AI reads the document — cannot be compromised for timeline.

---

## Functional Requirements

### Subcontractor Management

- FR1: GC Admin can add a subcontractor record with name, company name, trade category, contact email, and phone number
- FR2: GC Admin can edit any subcontractor's details at any time
- FR3: GC Admin can deactivate a subcontractor without deleting their compliance history
- FR4: GC Admin can assign required document types to a subcontractor based on their trade category (e.g., COI required for all; state license required only for licensed trades)
- FR5: GC Admin can configure default document requirements by trade category so that new subs inherit the correct requirements automatically
- FR6: GC Admin can bulk import subcontractors from a CSV file with mapping of column headers to system fields
- FR7: GC Admin can view all subcontractors in a sortable, filterable directory with compliance status indicators

### Document Collection & Sub Portal

- FR8: GC Admin can send a document request to one or more subcontractors via a single action, triggering a branded email with an upload link
- FR9: Subcontractor can access a document upload portal via an email link without creating an account or password
- FR10: Subcontractor can view a checklist of required documents per their assignment and upload each as a PDF, JPG, or PNG file
- FR11: Subcontractor can receive an email confirmation listing what was received and what (if anything) is still required
- FR12: GC Admin can see the real-time upload status for each required document for each subcontractor (Not Requested / Requested / Uploaded / Under Review / Approved / Expired)
- FR13: GC Admin can manually upload a document on behalf of a subcontractor as an alternative to the sub portal flow

### AI Document Extraction

- FR14: System can extract structured data from a COI PDF: carrier name, policy number, coverage types (GL, WC, auto, umbrella), coverage amounts per type, additional insured endorsement status, and all expiry dates
- FR15: System can extract structured data from a W-9 form: legal name, business name (if different), EIN or SSN indicator (not display full SSN in UI), entity type, and address
- FR16: System can assign a confidence level (high / medium / low) to each extracted field based on extraction certainty
- FR17: GC Admin can review AI-extracted data alongside the original document in a side-by-side view
- FR18: GC Admin can edit any extracted field value before approving a document
- FR19: GC Admin can approve a reviewed document, creating a verified compliance record with a timestamp
- FR20: GC Admin can flag a document as rejected with a reason, which automatically notifies the sub and requests a re-upload

### Expiry Tracking & Alerts

- FR21: System can track the expiry date for each document and display days-until-expiry for all active compliance records
- FR22: System can automatically send email alerts to the GC admin at configurable intervals before document expiry (default: 90, 60, 30, 14, 7 days)
- FR23: System can automatically send email reminders to the subcontractor at configurable intervals before document expiry, including an upload link for the renewal
- FR24: GC Admin can configure which alert intervals are active and which recipients (admin / sub) receive each type
- FR25: GC Admin can view the escalation status for each expiring document (Alert Sent / Sub Acknowledged / Renewal Uploaded / Approved)
- FR26: GC Admin can view a complete alert history log for any document, showing timestamp and recipient for each alert sent

### Compliance Dashboard & Views

- FR27: GC Admin can view an account-level compliance health score showing the percentage of active subcontractors with all required documents current
- FR28: GC Admin can view a per-subcontractor compliance card displaying each required document as color-coded status (green: current / yellow: expiring within 30 days / red: expired or missing)
- FR29: GC Admin can filter the compliance dashboard to show only subcontractors assigned to a specific project
- FR30: GC Admin can view a prioritized action-required queue listing all documents that are overdue, missing, or expiring within 14 days
- FR31: Project Manager can access a read-only view of the compliance dashboard filtered to their assigned projects

### Project Management

- FR32: GC Admin can create and name projects
- FR33: GC Admin can assign subcontractors to projects
- FR34: GC Admin can view a list of all subcontractors assigned to a project with their current compliance status

### Reporting & Audit Trail

- FR35: GC Admin can export a compliance status report as PDF or CSV showing all subcontractors, their required documents, current status, and expiry dates
- FR36: GC Admin can view an expiry calendar showing all documents expiring in the next 30, 60, or 90 days
- FR37: GC Admin can view a full audit trail for any subcontractor record showing timestamps for: document request sent, document uploaded, extraction completed, human review completed, and document approved or rejected
- FR38: GC Admin can generate a shareable read-only compliance report link for external stakeholders (insurance brokers, auditors) that expires after 30 days

### Document Storage

- FR39: System can store all uploaded documents in encrypted cloud storage organized by subcontractor, document type, and upload date
- FR40: GC Admin can view the original uploaded document file at any time alongside its extracted structured data
- FR41: System can retain all document versions when a subcontractor uploads a renewal, preserving historical records

### Account & Billing Management

- FR42: Account Owner can subscribe to a Starter plan (up to 25 active subcontractors) or Growth plan (up to 75 active subcontractors) with monthly or annual billing
- FR43: Account Owner can purchase a Lifetime Deal for Starter ($199) or Growth ($399) tier via one-time payment
- FR44: System can enforce the active subcontractor limit per subscription tier and prompt upgrade when the limit is approached
- FR45: Account Owner can view current usage (active sub count vs. tier limit, document storage usage) in account settings
- FR46: Account Owner can manage team members (invite, assign roles, remove access) within their account

---

## Non-Functional Requirements

### Performance

- AI document extraction must complete within 60 seconds for PDFs up to 20MB; target p95 latency of 30 seconds for standard ACORD 25 COI PDFs
- Compliance dashboard must render in under 3 seconds for accounts with up to 75 active subcontractors
- Sub portal document upload must accept files up to 20MB; upload progress must be visible to the user
- Bulk CSV import must handle up to 200 rows and complete in under 30 seconds

### Security

- All uploaded documents must be encrypted at rest using AES-256 and in transit using TLS 1.2 or higher
- W-9 SSN and EIN fields must be encrypted at the database field level; SSN must never be displayed in plaintext in the UI after extraction (mask as XXX-XX-XXXX)
- Sub portal upload tokens must be unique, HMAC-signed, time-limited (expire 72 hours after generation or after first successful document submission), and single-use
- GC tenant data must be isolated at the data layer — no query path can return records from a different tenant
- Sub portal tokens must not expose any account data beyond what the subcontractor needs to upload their assigned documents
- All authentication sessions must use secure, httpOnly cookies with CSRF protection

### Scalability

- System architecture must support 500 concurrent GC accounts at MVP launch without infrastructure changes
- Sub portal must handle concurrent document uploads from multiple subcontractors within the same account
- Email alert dispatch must be handled asynchronously via queue — never block the main application thread

### Reliability

- Compliance dashboard and sub portal: 99.5% uptime SLA
- Email alert delivery rate: >98% (measured as delivery to receiving mail server, not open rate)
- Document storage: replicated across at least two availability zones; document loss tolerance: zero (use durable object storage with versioning enabled)
- AI extraction failures must be gracefully handled: if extraction fails, document is stored and flagged for manual review; GC admin is notified; sub record is not left in an ambiguous state

### Accessibility

- Sub portal must meet WCAG 2.1 Level AA compliance — the portal is the face of the GC's document request process and may be accessed by subcontractors with varying accessibility needs
- Dashboard and core GC admin UI: WCAG 2.1 Level A minimum; target AA for key workflows (sub management, document review, dashboard)
- All form inputs must have proper labels; error messages must be descriptive; color-coded status indicators must include non-color secondary indicators (text label or icon)

### Integration

- Stripe webhooks must be processed idempotently — duplicate webhook delivery must not cause double-billing or state corruption
- Transactional email provider (SendGrid/Postmark) must be configurable for sender domain customization (GC sends alerts from their own domain)
- AI/OCR extraction API calls must be retried on transient failure (3 attempts with exponential backoff) before marking extraction as failed
- Document storage (S3-compatible) access must use signed URLs with maximum 15-minute expiry — no direct public URLs to any stored compliance document

---

*SubShield PRD — Complete*
*All sections generated from product brief, market research, and BMAD PRD workflow*
*Ready for architecture and epic breakdown phases*
