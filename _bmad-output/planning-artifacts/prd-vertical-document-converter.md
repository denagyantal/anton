---
stepsCompleted:
  - step-01-init.md
  - step-02-discovery.md
  - step-02b-vision.md
  - step-02c-executive-summary.md
  - step-03-success.md
  - step-04-journeys.md
  - step-05-domain.md
  - step-06-innovation.md
  - step-07-project-type.md
  - step-08-scoping.md
  - step-09-functional.md
  - step-10-nonfunctional.md
  - step-11-polish.md
  - step-11-complete.md
inputDocuments:
  - ideas/shortlisted/vertical-document-eob-converter.md
  - _bmad-output/planning-artifacts/market-research-vertical-document-converter.md
  - _bmad-output/planning-artifacts/brief-vertical-document-converter.md
workflowType: 'prd'
classification:
  projectType: saas_b2b
  domain: healthcare_dental_billing
  complexity: medium
  projectContext: greenfield
date: '2026-06-06'
author: Root
---

# Product Requirements Document — Vertical Document / EOB Converter

**Author:** Root
**Date:** 2026-06-06
**Status:** Complete

---

## Executive Summary

Dental billing staff at 130,000+ US insurance-accepting dental practices manually re-enter Explanation of Benefits (EOB) PDF data into practice management software (PMS) every day. For a practice processing 50 EOBs/day, this consumes 3–4 hours of a billing coordinator's time — labor that costs $40–120/day and generates data-entry errors that result in unchallenged underpayments and patient billing disputes.

The enterprise tools that automate this (Zentist, DentalRobot) cost $150–500+/month and require IT-assisted onboarding, placing them out of reach for the 80%+ of US dental practices that are solo or small-group operations with no IT staff. Generic OCR (AWS Textract, Nanonets, Adobe) cannot close this gap — dental EOBs require domain-specific field extraction mapped to PMS-specific import schemas, and generic tools produce 5–15% error rates that are disqualifying for billing accuracy.

**Vertical Document Converter** delivers dental-billing-specific EOB extraction that outputs the exact import format required by the user's practice management software — starting with OpenDental — with ≥95% field-level accuracy, drag-and-drop UX that requires no configuration, and $149 LTD pricing that fits a solo practice budget. It is the first dental billing automation product to offer a self-serve, one-time-purchase option.

The market is validated: an IH case study shows $9,747 MRR achieved in document-conversion SaaS; DentalRobot's $150/month Lite plan proves dental billing pricing tolerance; bank statement and invoice converters (DocuClipper, CapyParse) prove the per-vertical-document-type SaaS model scales. AppSumo LTD lane is open — no dental billing automation product has ever launched there.

### What Makes This Special

Three structural differentiators separate this product from every existing option:

1. **Vertical-specific extraction accuracy**: Models trained on actual dental EOB layouts from the top 20 payers — not adapted from general-purpose OCR. Target ≥95% field-level accuracy vs. 85–90% achievable with generic tools on dental documents. At billing accuracy levels, 5% error is not an inconvenience — it is a liability.

2. **PMS-native output format**: The export is not a CSV that requires further mapping — it is the exact import schema each practice management system expects. OpenDental first (40,000+ offices, publicly documented schema), then Dentrix and Eaglesoft. This eliminates all post-export manipulation and is a capability no competitor at this price point offers.

3. **LTD pricing model**: $149 one-time purchase removes the psychological friction of recurring billing for cost-sensitive solo practices. No dental billing automation tool has offered this. The LTD also creates a loyal, vocal buyer base before any subscription revenue exists.

## Project Classification

- **Project Type:** SaaS B2B web application
- **Domain:** Healthcare — dental billing (medium complexity: HIPAA scope, PHI handling, domain-specific ML model, payer layout maintenance)
- **Project Context:** Greenfield
- **Launch Strategy:** AppSumo LTD → subscription expansion

---

## Success Criteria

### User Success

Billing coordinators and billing company staff succeed when they can replace their manual EOB posting workflow with a daily batch upload routine that takes less than 20 minutes and produces zero silent errors.

| User Success Metric | Target | How Measured |
|---------------------|--------|-------------|
| Field-level extraction accuracy | ≥95% across top 20 payer layouts | Beta audit of 1,000 EOBs vs. ground-truth |
| Time-to-first-value | Successful first export within 2 minutes of account creation | Funnel analytics: signup → first export event |
| EOB processing time | <30 seconds per document | Server-side processing time logs |
| Human review flag rate | <10% of fields flagged as low-confidence | System flag rate tracking |
| Time savings (50+ EOB practices) | ≥2 hours/day saved vs. manual workflow | Onboarding survey + 30-day NPS follow-up |
| Error detection value | Tool flags ≥1 insurer underpayment per 200 EOBs that manual entry would miss | Support ticket and review mining |

The aha moment for primary users occurs when the tool catches a discrepancy between billed and allowed amounts that manual review under time pressure would have missed — a moment that typically recovers $200–500 in revenue for the practice. This drives word-of-mouth within dental billing communities.

### Business Success

| Business Metric | 90-Day Target | 6-Month Target | 12-Month Target |
|-----------------|--------------|----------------|-----------------|
| AppSumo LTD sales | 500–1,000 units ($52K–$104K net) | — | — |
| AppSumo / G2 reviews | 50+ | 100+ | 200+ |
| MRR (subscription tier) | — | $5,000+ | $10,000–$15,000 |
| Supported payer layouts | 20 | 50+ | 100+ |
| PMS formats supported | 1 (OpenDental) | 2 (+ Dentrix or Eaglesoft) | 3 |
| Monthly subscription churn | — | <5% | <5% |
| Trial-to-paid conversion (post-AppSumo) | — | ≥3% | ≥5% |
| NPS score | — | ≥50 | ≥60 |

### Technical Success

- Extraction pipeline achieves ≥95% field-level accuracy on the ground-truth EOB test dataset before AppSumo launch approval
- System processes a 50-document batch in under 15 minutes end-to-end
- PHI is never persisted beyond the configurable processing window (immediate or 24-hour); verified by automated retention policy checks
- BAA acceptance is recorded for every account before any EOB processing occurs
- HIPAA-compliant architecture is in place before any beta user uploads a real EOB

### Measurable Outcomes

**Pre-launch gate (before AppSumo submission):**
1. Accuracy gate: ≥95% field-level accuracy on 1,000 EOBs from top 20 payers
2. Beta volume gate: 5+ practices using the tool in production for ≥2 weeks with positive feedback
3. No silent errors: zero instances where an extracted value is wrong AND not flagged by the confidence system

**Launch gate (AppSumo):**
4. AppSumo submission approved and launch date scheduled
5. First 100 LTD sales within 30 days of AppSumo launch

If the accuracy gate fails, AppSumo submission is halted regardless of other readiness — one viral negative review about billing errors in this niche will cause irreversible reputational damage.

---

## Product Scope

### MVP — Minimum Viable Product

Single vertical (dental EOB), single PMS output (OpenDental). Every MVP feature is load-bearing for the core value proposition.

**MVP Capabilities:**
- PDF EOB upload: drag-and-drop, single and batch (up to 50 files), native and scanned PDFs, 50MB/file limit
- EOB data extraction: 8 core fields — patient name, date of service, procedure code (ADA CDT), billed amount, allowed amount, paid amount, patient responsibility, adjustment reason code (ARC)
- Payer-specific templates: extraction models for top 20 dental insurance carriers (Delta Dental, Cigna, Aetna, United Concordia, MetLife, Guardian, Humana, BCBS, Ameritas, Principal, + 10 regional)
- Confidence scoring: per-field, with automatic low-confidence flagging
- Human review interface: summary view, inline editing, per-document accept/reject, batch approve
- OpenDental export: payment posting import file in exact OpenDental schema
- Export log: timestamp, document count, flagged field count
- Account management: email/password signup, 90-day upload history
- BAA acceptance on signup with record stored per account
- Process-and-delete: EOB files deleted after configurable window (immediate or 24-hour)
- Public payer template library: listing of supported payer layouts + community submission form

**MVP Pricing:**
- $149 LTD: Unlimited EOBs, OpenDental output format
- $249 LTD: Two PMS formats (OpenDental + Dentrix — launches post-beta)
- $49/month: Unlimited volume, all supported formats, API access (billing companies — post-AppSumo launch)

### Growth Features (Phase 2, Months 4–6)

- Dentrix and Eaglesoft export formats (upsell to $249 LTD existing customers)
- API access for billing company volume tier ($49/month): batch upload endpoints, webhook callbacks, bulk status API
- Payer template library expanded to 50+ layouts via community crowdsourcing
- Multi-user / team accounts for billing companies
- PDF annotation view showing extraction highlights before review

### Vision (Phase 3+, Months 6–18)

- Contractor invoice → QuickBooks/Xero conversion (second vertical: HVAC, plumbing, electrical)
- Direct PMS push integration (no import file download required) — requires PMS vendor relationship
- Custom payer template creation (self-serve template builder)
- DSO multi-location dashboard (enterprise tier)
- White-label offering for dental billing companies
- Expansion to medical office EOBs, workers' comp
- ERA/EDI 835 processing for clearinghouse integration

---

## User Journeys

### Journey 1: Sarah — Daily EOB Posting (Primary Success Path)

Sarah is a billing coordinator at a 2-dentist suburban practice. She processes 40–60 insurance EOBs every afternoon. Before this tool, she spent 3–4 hours re-keying data from PDFs into OpenDental, making occasional errors she only discovered when patients called about incorrect balances.

**Opening scene:** It is 2:30 PM. Sarah has just downloaded 47 EOB PDFs from three insurance portals. She opens the Vertical Document Converter in her browser — she's been using it for three weeks.

**Rising action:** She drags and drops all 47 files into the upload area. The interface shows a progress bar — "Processing 47 documents..." — and completes in 11 minutes. She switches to the review summary. The list shows 47 rows: 44 with green confidence indicators, 3 with yellow flags.

**Climax:** She clicks into the first flagged document — a United Concordia EOB where the allowed amount field registered 78% confidence. She sees the extracted value ($84.50) next to the original PDF panel and notices the PDF uses an unusual column layout for this payer. She edits the field to $94.50, which matches the PDF. She makes two more corrections on the other flagged documents in under 2 minutes.

**Resolution:** She clicks Export → OpenDental Payment Posting File. The file downloads. She imports it into OpenDental in 90 seconds. The entire process took 14 minutes. She spends the next 2.5 hours doing AR follow-up — work that directly recovers money for the practice. She messages a colleague in the Dental Office Managers Facebook group: "Seriously, just try it."

**Requirements revealed:** Drag-and-drop batch upload; real-time progress feedback; per-field confidence indicators; inline editing before export; side-by-side PDF and extracted value display for flagged fields; one-click OpenDental export; fast batch processing.

---

### Journey 2: Sarah — First-Time Trust Test (Evaluation Path)

Sarah has heard about the tool from a Facebook group post. She is skeptical — she has been burned by "automation" tools before that produced errors she had to spend hours fixing.

**Opening scene:** She creates an account, reads the BAA, signs. She does NOT upload real patient data yet. She uses 10 EOBs from last week — ones she already posted manually, whose correct values she knows cold.

**Rising action:** She uploads the 10 test EOBs. Processing takes 3 minutes. She reviews each extraction against her hand-keyed values from last week.

**Climax:** 9 of 10 are perfect. One Cigna EOB has the date of service off by one day — she can see the PDF font is small and blurry on that line. She notes the tool flagged it as 71% confidence. It did not silently error — it asked for her attention.

**Resolution:** She trusts the tool. She buys the $149 LTD. She leaves a note in her onboarding survey: "The flagging system is the reason I bought. I need to know when to double-check."

**Requirements revealed:** Free trial or trial period before purchase commitment; confidence flagging visible to first-time users; clear UI for comparing extracted value vs. original document; accuracy on common payers must be very high to pass initial scrutiny.

---

### Journey 3: Marcus — Billing Company Batch Evaluation (Secondary User)

Marcus owns a dental billing company serving 35 practices across three states. He processes 800–1,200 EOBs per day across his 6-person team. Each staff member spends 40–60% of their time on manual EOB posting.

**Opening scene:** Marcus finds the tool in a dental billing industry newsletter. He reads that it has an API tier ($49/month) — priced per document type, not per location. This is the first time he's seen pricing designed for a billing company rather than a practice.

**Rising action:** He starts a 14-day trial. He runs a 500-EOB batch test via the web interface (API tier not yet active for trials — he tests volume via UI). The error rate is 3.2% — he reviews each flagged item with one staff member. Net throughput for the test batch: 65% less manual time vs. their current process.

**Climax:** He calculates: if he rolls this out to all 35 clients, his team can handle 25% more clients without adding headcount. The math works at $49/month — less than the cost of 30 minutes of one staff member's time.

**Resolution:** He subscribes to the $49/month volume tier. He rolls it out to 3 pilot clients, then full portfolio over 60 days. He becomes a reference customer — quoted in product case studies, requests webhook callback and bulk status endpoints that get prioritized.

**Requirements revealed:** High-volume batch processing; API tier for automation; usage analytics; multi-practice context in account (ability to tag uploads by client); error rate visibility; webhook/callback for batch completion (post-MVP).

---

### Journey 4: New User — Failed Payer Layout (Edge Case / Recovery Path)

A new user uploads 12 EOBs from a regional Medicaid carrier not yet in the supported payer library.

**Opening scene:** She drags the 12 EOBs in. Processing completes. The review screen shows all 12 documents flagged with low confidence across multiple fields — confidence scores averaging 52%.

**Rising action:** The UI displays a banner: "These documents may be from an unsupported payer. Field accuracy may be lower. Please review all fields carefully before exporting." She checks the Supported Payers page — her Medicaid carrier is not listed.

**Climax:** She clicks "Submit this payer layout for support." She uploads one sample EOB (de-identified) and adds the carrier name and state. She receives an email: "Your payer submission has been received — we'll notify you when it's added to the template library."

**Resolution:** She still exports what she can — 7 of 12 documents have enough correct fields to be usable with manual corrections. The other 5 she posts manually. This is worse than the happy path, but better than being silently wrong. She waits for the payer to be added.

**Requirements revealed:** Graceful handling of unsupported payers; clear messaging when confidence is low across an entire batch; payer template submission flow; notification when new payer is added; no silent errors on unsupported layouts.

---

### Journey 5: Account Admin — Compliance Audit (Internal/Operational)

A dental group owner wants to verify that the tool they subscribed to is HIPAA-compliant before allowing their billing coordinator to upload real patient data.

**Opening scene:** He logs into the account, goes to Settings → Compliance. He sees the BAA his coordinator signed, timestamped. He sees the data retention setting: "Files deleted 24 hours after export." He sees an option to change to "Immediate deletion."

**Resolution:** He changes the setting to immediate deletion, screenshots the BAA timestamp and retention policy for his records, and gives the green light to the billing coordinator. He forwards the BAA to their HIPAA officer.

**Requirements revealed:** BAA record accessible from account settings; configurable data retention policy (immediate vs. 24-hour); settings accessible to account owner; audit-friendly presentation of compliance documentation.

### Journey Requirements Summary

| Capability Revealed | Journey Source |
|---------------------|---------------|
| Drag-and-drop batch upload (up to 50 files) | Journey 1, 3 |
| Real-time batch progress feedback | Journey 1 |
| Per-field confidence scoring + automatic flagging | Journey 1, 2 |
| Inline field editing before export | Journey 1 |
| Side-by-side PDF/extracted value display | Journey 1, 2 |
| One-click OpenDental export | Journey 1 |
| <30 second processing per EOB | Journey 1, 2 |
| Free trial period or sample-file testing | Journey 2 |
| Unsupported payer detection + messaging | Journey 4 |
| Payer template submission form | Journey 4 |
| API tier for volume/batch (post-MVP) | Journey 3 |
| BAA record in account settings | Journey 5 |
| Configurable data retention policy | Journey 5 |
| Compliance documentation UI | Journey 5 |

---

## Domain-Specific Requirements

### Compliance & Regulatory

This product handles Protected Health Information (PHI) as defined by HIPAA. Compliance is non-negotiable before any beta user uploads a real EOB.

**HIPAA Requirements:**
- Business Associate Agreement (BAA) must be accepted by every user before any PHI is processed; acceptance timestamp must be stored per account
- EOB files are PHI — they contain patient names, dates of service, and procedure codes. All PHI must be encrypted in transit (TLS 1.2+) and at rest (AES-256 or equivalent)
- Process-and-delete architecture: no PHI persists beyond the user-configured retention window (immediate or 24-hour maximum). Deletion must be verifiable and logged
- No PHI may be used for model training without explicit written consent and a separate data processing agreement; beta EOB samples must be de-identified or consented before use in training
- Upload/export activity logs must be retained for HIPAA audit readiness (minimum 6 years), but logs must not contain PHI beyond identifiers necessary for audit (user ID, timestamp, document count)
- Workforce training: if any team member can access user data for debugging, a HIPAA workforce training record must exist

**Dental Billing Domain Standards:**
- Extracted procedure codes must conform to ADA CDT code format (D0000–D9999)
- Adjustment reason codes (ARCs) must map to CARC/RARC code sets (CO, PR, OA, PI prefixes)
- EOB field definitions must match the source payer's stated payment explanation; extracted "paid amount" is the insurer's reimbursement, not the check amount (for practices receiving a single check covering multiple EOBs)
- Billed vs. allowed amount delta must be surfaced to the user — this is the underpayment detection signal

### Technical Constraints

- All EOB processing must occur server-side; no PHI may be sent to third-party APIs (e.g., OpenAI, Google Vision) without a signed BAA and explicit user consent
- If third-party OCR services are used in the pipeline (AWS Textract, Google Document AI), they must operate under a HIPAA BAA; alternatively, processing must be self-hosted
- The web application must not cache PHI in browser storage (localStorage, sessionStorage, IndexedDB) beyond the active session
- File upload must enforce file type validation server-side (not client-side only); only PDF MIME types accepted

### Integration Requirements

- **OpenDental import schema**: The payment posting import format must exactly match OpenDental's documented schema for batch payment posting. Any schema version changes by OpenDental must trigger a template update
- **Payer layout templates**: Each supported payer requires a verified extraction template mapping the payer's PDF layout to the 8 required extraction fields. Templates are internal configuration, not user-configurable

### Risk Mitigations

| Domain Risk | Mitigation |
|-------------|-----------|
| Extraction error causes billing underpayment | Confidence scoring + flagging ensures no silent errors; human review required before export |
| PHI breach via unauthorized access | BAA gating, encryption at rest/transit, process-and-delete, no third-party PHI transmission without BAA |
| Payer PDF layout changes (insurer redesign) | Community template submission + proactive monitoring of major payer layouts; confidence drop triggers template review |
| BAA not enforced before processing | Backend check: no processing job accepted unless account has BAA timestamp on record |

---

## Innovation & Novel Patterns

### Detected Innovation Areas

**1. Vertical-Specific OCR + Schema Mapping (Primary Innovation)**

The product does not use general-purpose OCR with post-processing. It applies extraction models tuned to dental EOB document structures — payer-specific page layouts, field positions, label conventions, and multi-line claim formats. This produces a 5–10 percentage point accuracy improvement over generic OCR on dental documents. The innovation is not the underlying OCR technology but the vertical-specific training data, template architecture, and confidence scoring calibrated to dental field values.

**2. PMS-Native Output (Distribution Innovation)**

The output is not a generic data format (CSV, JSON) that requires a second mapping step — it is the exact binary or structured format each PMS ingestion system expects. For OpenDental, this means matching column order, field type conventions, and encoding that OpenDental's importer accepts without modification. No competitor at solo-practice pricing delivers this — generic tools output CSV, billing companies do the final mapping manually. Eliminating this mapping step is what makes zero-config UX achievable.

**3. LTD Pricing for a HIPAA-Scope Healthcare SaaS (Market Innovation)**

Dental billing automation has never offered a lifetime deal. The category is occupied by enterprise subscription software ($150–500+/month). Introducing a $149 LTD tier breaks the pattern buyers expect, lowers decision friction dramatically, and seeds an AppSumo community of early adopters who become the loudest advocates. The innovation is not technical but structural — it reframes a compliance-adjacent B2B product as a no-risk, one-time purchase.

### Validation Approach

- Pre-launch: Beta with 5–10 OpenDental practices. Each practice runs a 100-EOB accuracy audit comparing extracted values to manually-verified ground truth. Accuracy gate: ≥95% field-level before any public launch
- Post-launch: Automated accuracy tracking on every exported document (user-reported corrections feed a correction log); monthly accuracy report generated from flag rate and correction rate
- Payer template quality: Each new payer template is validated against 50+ real EOBs from that payer before being added to the supported list

### Risk Mitigation

| Innovation Risk | Mitigation |
|-----------------|-----------|
| Accuracy insufficient at launch (≥95% not met) | Halt AppSumo submission; invest in training data augmentation; do not launch below threshold |
| Generic OCR platforms add dental vertical modes | First-mover LTD creates locked-in buyer base; PMS-native output remains a structural moat generic tools won't replicate at this price |
| Payer PDF layout changes post-launch | Template maintenance as ongoing product operation; community submission form + confidence drop alerts for early detection |
| PHI training data sourcing blocked | Use de-identified or consented EOB samples only; synthetic data generation for rare payer layouts |

---

## SaaS B2B Specific Requirements

### Product Overview

A web-based SaaS tool with a self-serve, drag-and-drop interface targeting dental billing staff. No desktop app, no mobile app, no browser extension — billing staff work at desktops with access to insurance portals and PMS software. The web interface must function in Chrome and Edge (the two dominant browsers in dental office environments).

### Authentication & Account Model

- Email/password authentication (no SSO required for MVP — billing staff in solo practices don't have corporate SSO)
- Password reset via email
- Single-user account per signup (multi-user/team accounts deferred to Phase 2 for billing company tier)
- Account deletion must trigger immediate deletion of all associated uploaded files and export logs
- BAA acceptance timestamp stored per account; must be re-accepted if BAA version updates

### Multi-Tier Pricing & Licensing

| Tier | Price | Limits | Features |
|------|-------|--------|---------|
| LTD Solo | $149 one-time | Unlimited EOBs, 1 PMS format | OpenDental export, web interface, 90-day history |
| LTD Duo | $249 one-time | Unlimited EOBs, 2 PMS formats | OpenDental + Dentrix, web interface |
| Volume ($49/month) | $49/month | Unlimited EOBs, all formats | All formats, API access, webhooks (post-MVP) |

LTD purchases are per-account (not per-device). Subscription tier is month-to-month, no contract.

### Integrations & Data Flow

- **Input**: PDF files uploaded via web interface (drag-and-drop or file picker)
- **Processing**: Server-side extraction pipeline (not client-side)
- **Output**: Downloadable import file for OpenDental (payment posting format)
- **Storage**: Uploaded files stored temporarily during processing window only; export logs stored for 90-day history display; no long-term document storage
- No inbound integrations required for MVP (no direct connection to insurance portals, PMS systems, or clearinghouses)

### Implementation Considerations

- Server-side rendering or SPA with minimal client-side footprint (PHI must not persist in browser)
- File upload endpoint must validate PDF MIME type, reject files >50MB, enforce batch size limit (50 files)
- Processing jobs must be queued and tracked — user can leave and return to see results
- Export file download must be served directly from the server, not a third-party CDN, for PHI compliance
- Payer template updates deploy as configuration changes, not code releases — template store must be decoupled from application code

---

## Project Scoping & Phased Development

### MVP Strategy & Philosophy

**MVP Approach:** Problem-solving MVP. The product is useful from day one only if it solves the core pain (manual EOB re-entry) with sufficient accuracy. The MVP does not need beautiful onboarding, multi-user support, or API access — it needs to accurately extract the 8 fields from the top 20 payers and produce an OpenDental import file. Anything that doesn't directly serve that capability is Phase 2.

**Critical MVP constraint:** The accuracy gate is a hard stop. An MVP that ships with <95% accuracy and causes billing errors will generate irreversible reputational damage in a niche word-of-mouth market. This is not a typical SaaS product where "ship fast and iterate" applies — billing accuracy is a correctness guarantee.

**Build timeline estimate:** 3–4 weeks for extraction pipeline + review UI + OpenDental export + auth + BAA; 4–6 weeks additional for beta testing and accuracy validation. Total: 8–10 weeks to AppSumo-ready.

**MVP Team:** Solo or 2-person team. One engineer (full-stack + ML/OCR capability) plus optional designer for review UI. No DevOps specialist required if hosted on managed infrastructure (Railway, Render, or AWS Fargate).

### MVP Feature Set (Phase 1)

**Core User Journeys Supported:**
- Sarah's daily EOB posting workflow (Journey 1)
- First-time trust test / evaluation workflow (Journey 2)
- Basic compliance verification workflow (Journey 5)

**Must-Have Capabilities:**
1. Drag-and-drop batch PDF upload (up to 50 files, 50MB/file)
2. Server-side EOB extraction (8 fields, payer-specific templates, top 20 payers)
3. Confidence scoring and automatic low-confidence flagging
4. Human review interface (summary list, inline edit, accept/reject, batch approve)
5. OpenDental payment posting export
6. Export log (timestamp, count, flag count)
7. Email/password authentication
8. BAA acceptance and record storage
9. 90-day upload history
10. Process-and-delete file retention (immediate or 24-hour configurable)
11. Public payer template library page
12. Unsupported payer detection with graceful messaging and submission form

### Post-MVP Features

**Phase 2 (Months 4–6):**
- Dentrix and Eaglesoft export formats ($249 LTD upsell)
- Volume API tier with batch endpoints and webhook callbacks ($49/month)
- Multi-user accounts for billing companies
- Payer template expansion to 50+ layouts
- PDF annotation view for flagged field review

**Phase 3 (Months 6–18):**
- Contractor invoice → QuickBooks/Xero conversion (second vertical)
- Direct PMS push integration (no file download required)
- Custom payer template builder (self-serve)
- DSO multi-location dashboard
- White-label offering
- Medical EOBs, workers' comp, ERA/EDI 835

### Risk Mitigation Strategy

**Technical Risks:**
- Accuracy insufficient (<95%): Halt launch; invest in additional training data and template refinement; consider human-in-the-loop correction pipeline for hard cases
- Scanned PDF extraction quality: Implement pre-processing pipeline (deskew, contrast normalization, resolution upscaling) before OCR; scanned EOBs are more common from smaller payers
- OpenDental schema changes: Monitor OpenDental GitHub and changelog; decouple schema mapping from core extraction logic for fast updates

**Market Risks:**
- AppSumo rejection: Ensure product demo video shows clear before/after workflow time savings; accuracy data from beta prominently featured; HIPAA BAA compliance visible in product
- DentalRobot launches self-serve tier: First-mover LTD is already sold and stickier than subscription switching; focus on payer template coverage breadth as secondary moat
- Narrow TAM per vertical: Multi-vertical roadmap mitigates; contractor invoice vertical is distinct go-to-market with overlapping infrastructure

**Resource Risks:**
- Solo founder scenario: Prioritize extraction accuracy and export over UI polish; launch with minimal UI that works, not beautiful UI that might not; hire or contract UX help for Phase 2 only after LTD revenue validates demand

---

## Functional Requirements

### Document Upload & Processing

- **FR1:** Users can upload one or more PDF files simultaneously via drag-and-drop onto the upload area
- **FR2:** Users can upload PDF files via a file picker dialog as an alternative to drag-and-drop
- **FR3:** System accepts both native-digital PDFs and image-based scanned PDFs
- **FR4:** System enforces an upload limit of 50 files per batch and 50MB per file, with clear error messaging when limits are exceeded
- **FR5:** System provides real-time progress feedback during batch processing (per-document status and overall batch completion)
- **FR6:** Users can navigate away from the upload page and return to find their batch results ready when processing completes
- **FR7:** System rejects files that are not PDF format, with clear error messaging

### EOB Data Extraction

- **FR8:** System extracts patient name from each uploaded EOB
- **FR9:** System extracts date of service from each uploaded EOB
- **FR10:** System extracts procedure code (ADA CDT code) from each uploaded EOB
- **FR11:** System extracts billed amount from each uploaded EOB
- **FR12:** System extracts allowed amount from each uploaded EOB
- **FR13:** System extracts paid amount (insurer reimbursement) from each uploaded EOB
- **FR14:** System extracts patient responsibility (copay and/or deductible) from each uploaded EOB
- **FR15:** System extracts adjustment reason code (ARC / CO / CARC code) from each uploaded EOB
- **FR16:** System applies payer-specific extraction templates to documents from supported insurance carriers
- **FR17:** System assigns a confidence score to each extracted field, indicating extraction certainty
- **FR18:** System detects when an uploaded EOB is from an unsupported payer and notifies the user

### Human Review & Verification

- **FR19:** Users can view a review summary listing all processed EOBs with per-document confidence indicators
- **FR20:** System automatically flags individual fields with confidence scores below the low-confidence threshold for user review
- **FR21:** Users can view the original PDF page alongside the extracted field values for any flagged document
- **FR22:** Users can edit any extracted field value inline before exporting
- **FR23:** Users can accept an individual EOB (marking it ready for export) or reject it (excluding it from export)
- **FR24:** Users can batch-approve all EOBs in a session when all confidence indicators are above the flagging threshold
- **FR25:** Users can view a count of flagged fields per document before approving

### Export & Output

- **FR26:** Users can export approved EOB extractions as an OpenDental payment posting import file
- **FR27:** The exported file matches the exact schema and format expected by OpenDental's payment posting importer without additional transformation
- **FR28:** System generates an export log entry recording the timestamp, number of documents exported, and number of fields that were flagged and/or edited
- **FR29:** Users can download the export file directly from the browser upon export completion

### Account & Compliance Management

- **FR30:** Users can create an account with email and password
- **FR31:** Users must review and accept the Business Associate Agreement before any EOB file upload is permitted
- **FR32:** The account's BAA acceptance timestamp is stored and viewable in account settings
- **FR33:** Users can configure the data retention policy for uploaded files: immediate deletion after export, or deletion after a 24-hour window
- **FR34:** Users can view their upload and export history for the past 90 days
- **FR35:** Users can delete their account, which triggers immediate deletion of all associated uploaded files and processing records

### Payer Template Library

- **FR36:** Anyone (authenticated or not) can view the public-facing list of all supported payer EOB layouts
- **FR37:** Users can submit a new payer layout for consideration by uploading a sample EOB (de-identified) and providing the carrier name and state
- **FR38:** System notifies users who submitted a payer request when that payer's template is added to the supported list

### Licensing & Subscription

- **FR39:** Users can purchase a Lifetime Deal license for access to one PMS export format
- **FR40:** Users' LTD license tier determines which export formats are available to them
- **FR41:** Users can view their current license tier and the PMS formats included in their plan

---

## Non-Functional Requirements

### Performance

- Each EOB document is processed (extraction complete, confidence scores assigned) within 30 seconds of upload
- A batch of 50 EOBs completes processing end-to-end within 15 minutes
- The review summary page loads within 3 seconds for batches of up to 50 documents
- Export file download initiates within 5 seconds of the user clicking Export

### Security & Privacy

- All data in transit between client and server is encrypted using TLS 1.2 or higher
- All PHI stored on server infrastructure is encrypted at rest using AES-256 or equivalent
- No PHI is transmitted to third-party services without a HIPAA-compliant BAA in place with that service
- Uploaded EOB files are deleted within the user-configured retention window (immediate or 24 hours); deletion is logged for audit readiness
- BAA acceptance is enforced server-side before any processing job is accepted — client-side enforcement alone is insufficient
- Export file downloads are served directly from the application server, not via third-party CDN, to prevent PHI exposure
- Password storage uses bcrypt or Argon2 with appropriate work factor; plaintext passwords are never stored or logged
- Audit logs retain activity records (user ID, timestamp, action type, document count) for a minimum of 6 years per HIPAA requirements; logs do not contain PHI field values

### Accuracy

- Field-level extraction accuracy ≥95% on the validated set of top 20 dental insurance payer EOB layouts
- Confidence scoring is calibrated such that fields flagged as low-confidence have a ≥20% measured error rate on the ground-truth test set (flagging is meaningful, not noise)
- No field value is output as high-confidence and incorrect more than 5% of the time across the validated test set

### Reliability

- Service availability target: 99.5% monthly uptime (billing staff rely on the tool as part of their daily production workflow)
- Processing job state is persisted — if the server restarts during processing, in-flight jobs are recoverable or users are notified rather than silently lost
- Failed export downloads are retryable from the export history without re-uploading and re-processing

### Scalability

- System must support concurrent processing for at least 100 simultaneous users without performance degradation beyond the stated processing time targets
- Architecture must support 10x user growth (from 1,000 to 10,000 active users) through horizontal scaling without architectural changes
- Payer template updates are deployable as configuration changes without application downtime

### Accessibility

- Web interface meets WCAG 2.1 Level AA for core workflows (upload, review, export) — dental billing staff may include users with visual impairments
- Interface is fully keyboard-navigable (billing coordinators often use keyboard shortcuts as part of their workflow)

---

*This PRD is the capability contract for all downstream design, architecture, and development work. Any capability not listed in the Functional Requirements section does not exist in the product unless this document is explicitly updated. All design and architecture decisions should trace back to requirements documented here.*
