---
stepsCompleted: [step-01-init, step-02-discovery, step-02b-vision, step-02c-executive-summary, step-03-success, step-04-journeys, step-05-domain, step-06-innovation, step-07-project-type, step-08-scoping, step-09-functional, step-10-nonfunctional, step-11-polish, step-12-complete]
inputDocuments:
  - ideas/shortlisted/vendor-compliance-document-tracker.md
  - _bmad-output/planning-artifacts/product-brief-vendor-compliance-tracker.md
workflowType: prd
project_name: vendor-compliance-tracker
product_name: VendorVault
user_name: Root
date: 2026-10-13
classification:
  projectType: saas_b2b
  domain: legal-compliance-smb
  complexity: medium
  projectContext: greenfield
---

# Product Requirements Document — VendorVault

**Author:** Root
**Date:** 2026-10-13
**Product:** VendorVault — Vendor Compliance Document Tracker
**Status:** Complete

---

## Executive Summary

Small businesses in construction, property management, food service, and healthcare manage 5–25 vendor relationships each requiring current compliance documents — certificates of insurance (COIs), contractor licenses, food handler certifications, OSHA cards, and business permits — with different expiry dates from different issuing bodies. When a vendor's COI lapses and an incident occurs, the hiring business absorbs the legal liability. Average COI mistake cost for contractors exceeds $25,000; one property management company paid a six-figure settlement after a vendor's COI had expired eight months prior.

**VendorVault** solves three problems simultaneously: (1) multi-document tracking across all compliance document types, not just COIs; (2) automated 60/30/7-day cascading email reminders before expiry; and (3) a vendor self-upload portal that inverts the collection burden — owners send a unique link, vendors upload their own current documents, and the dashboard updates automatically without back-and-forth email.

Target pricing: $19–49/month — below TrackMyVendor's $39–149/month — as the only sub-$50/month solution covering all document types with a genuine vendor self-upload portal. With ~770,750 target businesses across four verticals, a 1% capture rate at $29/month average yields $2.68M ARR.

**One-line pitch:** Never get caught with an expired vendor certificate of insurance — upload vendor docs, set expiry dates, get automatic reminders at 60/30/7 days, and let vendors self-upload through a frictionless portal.

### What Makes This Special

**Vendor self-upload portal** is the breakthrough: no competitor under $50/month offers a genuine vendor self-upload portal. Enterprise tools (ISNetworld, Avetta, myCOI) cost $6,000–$18,000/year and are priced out of reach for SMBs. Affordable SMB alternatives (TrackMyVendor, SubDoc, ExpiryEdge) track COIs only, lack vendor self-upload, and charge 51–200% more than VendorVault's target pricing.

Three structural advantages compound the differentiation:
1. **Multi-document scope** — COI, contractor license, food handler certification, OSHA card, business permit, W-9, and custom types; no other sub-$50/month tool covers all types
2. **Vendor self-upload portal** — eliminates the #1 operational friction (chasing vendors for documents); owners send a 30-day link, vendors upload, dashboard updates
3. **Multi-vertical design** — construction, property management, food service, and healthcare in one product, not construction-only like most COI tools

## Project Classification

- **Project Type:** SaaS B2B web application (responsive web, no mobile app at MVP)
- **Domain:** Legal compliance and small business vendor operations
- **Domain Complexity:** Medium — legal liability documentation, vendor PII in uploaded files (W-9 EIN numbers), email deliverability as a trust-critical function, no HIPAA or PCI-DSS exposure beyond Stripe integration
- **Project Context:** Greenfield
- **Architecture Pattern:** Multi-tenant SaaS with per-account data isolation, vendor-facing unauthenticated portal endpoints

---

## Success Criteria

### User Success

**Primary: Vendor Self-Upload Portal Activation**
- 60%+ of new accounts send at least one vendor self-upload link within 7 days of signup (measured at 90 days post-launch)
- Portal activation is the "aha!" moment — it eliminates the core operational pain of chasing vendors for documents

**Secondary: Tracked Expiration Coverage**
- 75%+ of active accounts have at least one vendor document with a future expiry date tracked within 14 days of signup (measured at 60 days post-launch)
- Validates real data loading, not just exploratory signups

**Tertiary: Automated Reminder Delivery**
- 80%+ open rate on expiration reminder emails (high-urgency subject lines)
- 90%+ of active accounts receive and open at least one automated reminder within first 90 days
- Reminder receipt is the product's primary value delivery moment: users experience why the subscription is worth paying for

**User Satisfaction:**
- NPS 30+ at 3 months post-launch; 40+ at 12 months
- Survey trigger: 14 days after account creates first vendor record

### Business Success

**Objective 1 — PMF Validation:** 50 paying customers ($19+/month) within 90 days without direct sales calls
- Gate: if <20 paying customers at 60 days, audit onboarding funnel and messaging before AppSumo launch

**Objective 2 — AppSumo LTD Campaign:** $20,000–$50,000 in launch revenue within 6 months (200–500 LTD sales at $99)
- Provides capital for content and growth; generates social proof for MRR conversion

**Objective 3 — $10,000–$15,000 MRR within 12 months:** 300–500 active monthly subscribers at $19–49/month average

**Objective 4 — Retention:** <5% monthly churn at 3 months; <4% at 12 months
- Validates "set and forget" retention hypothesis: users who configure the product stay without high active engagement

### Technical Success

- Scheduled reminder emails fire within 60 minutes of scheduled time with <1% delivery failure rate
- Document upload success rate ≥99.5% (no silent data loss on upload)
- Vendor self-upload portal link generation and document submission complete without errors for all modern browsers
- Zero PII exposure events: vendor-uploaded W-9s and license scans stored and transmitted with encryption at rest and in transit

### Measurable Outcomes

| KPI | Month 1 | Month 3 | Month 6 | Month 12 |
|-----|---------|---------|---------|----------|
| Total sign-ups | 50 | 200 | 500 | 2,000 |
| Paying customers | 10 | 40 | 150 | 400 |
| MRR | $200 | $1,000 | $3,500 | $12,000 |
| LTD sales (AppSumo) | — | — | 200–500 | — |
| Monthly churn | — | <5% | <5% | <4% |
| Portal activation rate | — | 60%+ | 65%+ | 70%+ |
| NPS | — | — | 30+ | 40+ |
| Free trial → paid conversion | — | 20%+ | 22%+ | 25%+ |

**Leading indicators (weekly tracking):**
- Vendor portal links sent per new account (target: 3+ in first week)
- Reminder email open rate (target: 35%+)
- Free trial → paid conversion within 14 days (target: 20%+)

---

## Product Scope

### MVP — Minimum Viable Product

The MVP delivers the complete core value loop: a business can track all vendor compliance documents, receive automatic warnings before anything expires, and let vendors upload their own documents without the owner chasing them.

**Core user journeys supported by MVP:**
1. Business owner tracks vendor documents and receives expiration reminders before liability exposure
2. Vendor receives self-upload portal link and submits current documents without creating an account
3. Business owner shares compliance audit report with property owner, insurer, or inspector

**Must-Have Capabilities:**
- Vendor profile creation and management (name, type, contact, relationship start date)
- Multi-document upload per vendor (PDF, JPG, PNG) with document type classification
- Manual expiry date entry per document with optional OCR-assist (user always confirms)
- Automated 60/30/7-day email reminders per expiring document
- Vendor self-upload portal (unique 30-day link, no vendor account required)
- Green/yellow/red compliance status dashboard with action-required filtered view
- Append-only audit trail with one-click PDF export
- Email/password + magic link auth via Supabase
- Stripe billing: Free (3 vendors), Starter ($19/month, 10 vendors), Pro ($49/month, unlimited)
- LTD code redemption at checkout (Starter LTD: $59, Pro LTD: $99)

**MVP Success Criteria (AppSumo launch gate):**
1. 10 paying customers ($19+/month) within 60 days without direct sales calls
2. 3 of 10 customers activate the vendor self-upload portal
3. At least 1 customer reports receiving an automated reminder for an expiring document
4. No critical bugs in reminder delivery or portal upload flow
5. NPS 30+ from first 10 customers

### Growth Features (Post-MVP, Months 3–6)

- OCR-powered expiry date extraction with configurable confidence thresholds (auto-accept high-confidence, manual review low-confidence)
- CSV bulk vendor import for migrating from Google Sheets
- Compliance report customization (business logo, property/project grouping)
- Role-based team access: view-only, upload-only, admin roles (Pro tier expansion)
- QuickBooks vendor name sync (one-way import)
- Zapier integration: trigger workflows on expiration events or vendor uploads
- Annual billing option (2 months free)
- SMS reminder opt-in per document (Pro tier — Twilio integration)

### Vision (Future, Months 6–24)

- Property management vertical: AppFolio and Buildium vendor import
- Construction vertical: Procore subcontractor document sync
- Food service templates: HACCP certification tracking, county-specific food handler renewal workflows
- Healthcare: HIPAA-aware document storage certification, credentialing cycle reminders, payer compliance tracking
- Vendor document portfolio portability: vendors maintain a verified certificate portfolio reusable across multiple VendorVault customer accounts (network effect)
- AI-powered COI validation: verify coverage amounts, policy types, and endorsements against owner-defined requirements
- API access for enterprise integrations (post-AppSumo power users)

---

## User Journeys

### Journey 1: Marcus — Small General Contractor (Primary — Happy Path)

**Opening Scene:** Marcus owns a 6-person general contracting firm. He's about to start a $180K residential renovation. It's Monday morning. He needs to verify his 14 active subcontractors are all compliant before the site inspector's Wednesday visit. He opens his MacBook, navigates to VendorVault. Dashboard shows 2 red badges and 3 yellow badges immediately.

**Rising Action:** Marcus clicks into the action-required view. Red: "Ajax Electrical — COI expired 3 days ago." He clicks the vendor record and hits "Send Portal Link." Ajax Electrical's project manager gets an email within seconds with a link to upload their renewed certificate. Marcus moves to the second red badge: "PeakRoof Subcontractors — Contractor License expired." Same flow. He sends them a portal link. The 3 yellow items show expirations at 28, 22, and 15 days out. He sends portal links to those subs too, notes it's handled.

**Climax:** Wednesday morning — site inspector arrives. Marcus opens VendorVault on his phone. Ajax Electrical uploaded their COI yesterday; dashboard shows green. PeakRoof uploaded their renewed license that morning at 7am. Three of the yellow items have cleared. Inspection proceeds without issue.

**Resolution:** Marcus no longer carries the anxiety of not knowing. Two compliance near-misses were caught before the inspector arrived — zero project delay, zero liability exposure. The product proved its value: he would have been on the phone with Ajax at 6am the morning of inspection without it.

**Journey Requirements Revealed:** Vendor self-upload portal, status dashboard with red/yellow/green, action-required filtered view, portal link email delivery, mobile-responsive dashboard, real-time status update after vendor submission.

---

### Journey 2: Diana — Property Manager (Primary — Reporting Edge Case)

**Opening Scene:** Diana manages 8 residential properties (120 units) for a private landlord. The property owner calls — he wants a full vendor compliance report before renewing Diana's management contract in two weeks. Diana manages 22 vendors (HVAC, plumbing, electrical, landscaping, pest control, cleaning crews). "How quickly can you get that to me?"

**Rising Action:** Diana logs into VendorVault. She navigates to the audit trail export view. Her worry: three vendors whose docs she uploaded manually last spring — did she get the expiry dates right? She spot-checks the document detail view — sees original upload dates, the files themselves (PDF preview inline), and who uploaded them (her or the vendor via portal). Everything looks accurate.

**Climax:** She clicks "Export Compliance Report (PDF)." The download completes in under 10 seconds. The report shows all 22 vendors with document types, expiry dates, upload timestamps, and actor identity. Two vendors show yellow status (expiring within 45 days). She screenshots those two and sends portal links to the vendors with a note.

**Resolution:** Diana emails the PDF to the property owner within 15 minutes of the request. He calls back: "This is exactly what I needed." Management contract renewed. Diana realizes she now has a competitive differentiator — she can provide compliance documentation that owner-managed properties can't produce.

**Journey Requirements Revealed:** Audit trail PDF export, document preview inline, upload actor identity (owner vs. vendor), per-vendor document detail view, compliance report covering all vendors, export speed.

---

### Journey 3: New Vendor — Self-Upload Portal (Vendor Journey)

**Opening Scene:** Carlos runs a one-man electrical subcontracting company. He gets a text from Marcus (GC) with a link: "Hey Carlos, need your updated COI and license in the system before Wednesday. Use this link." Carlos clicks the link on his phone during lunch.

**Rising Action:** The VendorVault portal page loads immediately. It says "Upload documents for Martinez Construction Group" (Marcus's business name). Carlos sees a simple form: Document Type (dropdown), Upload File (button), Expiry Date (date picker), Submit. He selects "Certificate of Insurance," uploads a PDF from his phone's files, enters the expiry date (he knows it by heart — January 15, 2027), hits Submit.

**Climax:** A confirmation message appears: "Your document has been received by Martinez Construction Group." Carlos closes his phone. On Marcus's dashboard, the red badge for Carlos's vendor record changes to green.

**Resolution:** No email back-and-forth. No phone call. No PDF attached to an email that gets lost in Marcus's inbox. Total time: 90 seconds. Carlos gets back to his lunch.

**Journey Requirements Revealed:** Unauthenticated portal (no account required), mobile-responsive upload form, business name branding on portal, immediate dashboard update after submission, document type selector, expiry date field, confirmation message, file upload from mobile.

---

### Journey 4: Account Owner — Reminder-Driven Renewal (Retention Path)

**Opening Scene:** It's a Tuesday morning. Sandra, who runs a regional catering company, hasn't logged into VendorVault in 3 weeks. She gets an email: "Action Required — Coastal Catering Supply's Food Handler Certification expires in 30 days."

**Rising Action:** Sandra clicks the link in the email, which takes her directly to the vendor record in VendorVault (deep link). She sees the document, confirms the expiry. She clicks "Send Portal Link" — Coastal Catering Supply gets an email automatically. Sandra doesn't need to log into anything else. She closes VendorVault. Total time: 2 minutes.

**Climax:** 8 days later, Sandra gets an automated notification: "Coastal Catering Supply uploaded a new Food Handler Certification (expires 2027-11-30) via portal." Dashboard is green. She never had to manually chase the vendor.

**Resolution:** Sandra's VendorVault subscription renews next month without her thinking about it. The product delivered value while she was doing something else. The reminder email → portal flow is the retention loop: the product works even when the user doesn't.

**Journey Requirements Revealed:** Deep-link from reminder email to vendor record, reminder email with direct portal link, automated vendor upload notification email to owner, subscription renewal as a background event.

---

### Journey Requirements Summary

| Capability Revealed | Primary Journey | Priority |
|--------------------|----------------|---------|
| Red/yellow/green status dashboard | Marcus (J1) | MVP |
| Action-required filtered view | Marcus (J1) | MVP |
| Vendor self-upload portal (link generation) | Marcus (J1), Sandra (J4) | MVP |
| Portal email delivery to vendor | Marcus (J1) | MVP |
| Real-time dashboard update after vendor upload | Marcus (J1), Sandra (J4) | MVP |
| Mobile-responsive dashboard | Marcus (J1) | MVP |
| Audit trail PDF export | Diana (J2) | MVP |
| Document preview inline | Diana (J2) | MVP |
| Upload actor identity tracking | Diana (J2) | MVP |
| Unauthenticated vendor portal | Carlos (J3) | MVP |
| Business name branding on portal | Carlos (J3) | MVP |
| Deep-link from reminder email | Sandra (J4) | MVP |
| Owner notification on vendor upload | Sandra (J4) | MVP |
| Automated 30-day reminder email | Sandra (J4) | MVP |

---

## Domain-Specific Requirements

### Compliance & Regulatory

**Document Retention:**
Compliance documents (COIs, licenses, certifications) typically require 3–7 year retention for liability defense. VendorVault must:
- Retain all document versions (never physically delete; flag as superseded)
- Maintain audit trail records indefinitely for active accounts
- On account cancellation, provide a data export window (30 days) before purge

**Privacy & PII Handling:**
Vendor-uploaded documents may contain PII: W-9s include EIN or SSN, contractor licenses include personal identifiers.
- All document files stored encrypted at rest (AES-256)
- Document storage URLs use time-limited signed access (no permanent public URLs)
- Vendor portal submissions are not accessible to other businesses on the platform
- Privacy policy must explicitly cover uploaded document types and retention period

**Legal Liability Audit Trail:**
The audit trail serves as a legal defense document in incident investigations.
- Every upload event must record: timestamp (UTC), actor identity (owner email or "vendor via portal [link_id]"), file hash for integrity verification, document type, and declared expiry date
- Audit records are append-only — deletions or overwrites create a new audit entry flagging the prior record as superseded, preserving the full chain

**Email Deliverability as Compliance-Critical:**
Reminder emails are the product's core value delivery mechanism. Missed reminders create legal liability for the customer.
- Use dedicated sending domain with SPF, DKIM, DMARC configured
- Monitor bounce and complaint rates; auto-pause sending for hard bounces
- Reminder logs stored per document showing: scheduled fire time, actual delivery time, delivery status (delivered/bounced/opened)

### Technical Constraints

**Multi-Tenant Data Isolation:**
Vendor records, documents, and portal links must be strictly scoped to the owning account. Cross-account data access is a critical security failure.
- All database queries scoped by account_id (Row Level Security in Supabase Postgres)
- Vendor portal link tokens cryptographically bound to specific vendor + account (not guessable)

**File Storage:**
- Maximum file size: 25MB per document (accommodates high-resolution COI scans)
- Accepted formats: PDF, JPG, JPEG, PNG
- Files stored in private Cloudflare R2 buckets; access via time-limited signed URLs (15-minute expiry)

**Billing Integrity:**
- Vendor count enforcement at the application layer (not just UI); API must reject vendor creation above tier limit
- LTD code validation must prevent double-redemption (unique code + account_id constraint)

### Risk Mitigations

**Risk: Email reminder not delivered (ISP filtering)**
Mitigation: Use dedicated sending domain via Resend with reputation monitoring; maintain delivery logs viewable by account owner; show "reminder delivery status" per document in dashboard.

**Risk: Vendor portal link shared unintentionally**
Mitigation: 30-day link expiry; link tokens are UUID v4 (not guessable); owners can regenerate link to invalidate prior tokens; portal shows owning business name to confirm context for vendor.

**Risk: OCR extracts wrong expiry date**
Mitigation: OCR suggestions are never auto-accepted; user always confirms or corrects extracted date before save; UI clearly labels the date as "suggested — please confirm."

**Risk: Account owner loses access (password reset)**
Mitigation: Magic link auth as fallback; Supabase auth with standard password reset flow.

---

## Innovation & Novel Patterns

### Detected Innovation Areas

**Primary Innovation: Inverted Document Collection Model**
All existing tools place the collection burden on the business owner — they must chase vendors for updated documents. VendorVault inverts this: the owner generates a portal link and sends it once; the vendor self-uploads on their own timeline. This changes vendor compliance from a recurring manual task into a one-time link setup.

No sub-$50/month competitor offers this pattern. Enterprise tools that do offer it (ISNetworld, Avetta) require vendor account creation, platform enrollment, and onboarding fees — creating friction that defeats adoption at the SMB level. VendorVault's implementation requires no vendor account: a single link, a single upload form, done.

**Secondary Innovation: Multi-Vertical Document Scope**
All affordable SMB COI trackers are construction-only with COI as the only document type. VendorVault's multi-type, multi-vertical design (food handler certs, OSHA cards, medical licenses, custom types) means it serves four adjacent verticals with one product — expanding the addressable market fourfold and reducing competitive displacement risk if a construction-only competitor improves.

### Market Context & Competitive Landscape

The vendor self-upload inversion pattern exists only in enterprise tools (ISNetworld's vendor enrollment, Avetta's network) priced at $6,000–$18,000/year. SMB tools have not implemented this because it requires stateless portal sessions, file storage, and per-link authentication — a non-trivial but not complex engineering problem.

This gap is structural and durable: enterprise vendors have no incentive to build a sub-$50 tier; COI-only SMB tools like SubDoc have no mandate to expand to multi-document scope.

### Validation Approach

**Portal Activation as Primary PMF Signal:**
The vendor self-upload portal is the differentiating innovation. Its adoption rate (60%+ target in 90 days) directly validates whether the inversion model resonates with SMB owners. Low portal activation = inversion model is not compelling at this price point.

**Failure Mode & Fallback:**
If portal adoption is <30% at 60 days, the fallback is pivoting to "direct upload with auto-reminder only" (simplified product removing portal complexity). The core value (expiry tracking + automated reminders) remains valid even if the inversion model underperforms.

---

## SaaS B2B Specific Requirements

### Project-Type Overview

VendorVault is a multi-tenant B2B SaaS web application. Each account represents a single business. Vendors are not platform users — they interact only via unauthenticated portal endpoints. The product is self-service with transparent pricing, no sales calls, and frictionless onboarding (first value delivered within 10 minutes of signup).

### Technical Architecture Considerations

**Multi-Tenancy Model:** Shared database with Row Level Security (RLS). All tables include `account_id` as a foreign key. Supabase Postgres RLS policies enforce `account_id = auth.uid()` for all data access. Vendor portal endpoints use a separate auth mechanism (portal_token) that resolves to an account_id + vendor_id without requiring a user session.

**Authentication Model:**
- Account owners: Supabase Auth (email/password + magic link)
- Team members (Pro tier): Supabase Auth with role assignment per account
- Vendors: No authentication — stateless portal token access only
- Session duration: 30-day rolling JWT; inactivity timeout configurable in Pro

**Tenant Model:**
- One account = one business entity
- Account has: owner (1), team members (up to 3, Pro tier), vendors (unlimited in Pro, 10 in Starter, 3 in Free)
- Data isolation: strict — no cross-account data access at any layer

**Permission Matrix (RBAC):**

| Role | Create Vendor | Upload Document | Send Portal Link | Export Audit | Manage Billing | Invite Team |
|------|-------------|-----------------|-----------------|--------------|---------------|-------------|
| Owner | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ |
| Team Member (Pro) | ✓ | ✓ | ✓ | ✓ | ✗ | ✗ |
| Vendor (portal) | ✗ | ✓ (own docs) | ✗ | ✗ | ✗ | ✗ |

**Integration Points (MVP):**
- **Supabase:** Auth, Postgres (RLS), file metadata storage
- **Cloudflare R2:** Document file storage (private buckets, signed URL access)
- **Resend:** Transactional email (reminders, portal notifications, auth emails)
- **Stripe:** Subscription billing, LTD code redemption, plan enforcement
- **Twilio (Pro, Phase 2):** SMS reminders

**Vendor Tier Limits Enforcement:**
- Enforced at API layer (not just UI) — vendor creation endpoint checks account tier against vendor count
- Stripe webhooks update tier on subscription change; account enforced within 60 seconds of webhook receipt

### Implementation Considerations

**Onboarding Goal:** First vendor + first document tracked within 10 minutes of account creation.
- Guided empty state on first login (not blank dashboard)
- Pre-populated vendor type list (no empty dropdowns)
- One-click "send portal link" from vendor card (not buried in settings)

**Email Reminder Scheduler:**
- Cron job runs daily at 8:00 AM UTC
- Queries all documents where `expiry_date IN (today + 60 days, today + 30 days, today + 7 days)`
- Generates per-document reminder emails with direct deep-links
- Logs delivery status per reminder event in `reminder_events` table

**Vendor Portal Token Design:**
- `portal_tokens` table: `id (UUID)`, `account_id`, `vendor_id`, `created_at`, `expires_at (30 days)`, `invalidated_at (nullable)`
- Portal page resolves token → account + vendor without session; shows only upload form
- On document submission: creates `documents` record scoped to `account_id + vendor_id`, fires webhook to notify owner

---

## Project Scoping & Phased Development

### MVP Strategy & Philosophy

**MVP Approach:** Revenue MVP — product must be good enough to charge $19/month from day one and convert without a sales call. No "beta" pricing strategy; full pricing from first paid user.

**Rationale:** The target buyer (small GC, property manager) buys like a consumer. They will not sign up for a "beta" or pay later after a free period. AppSumo LTD is the growth lever — not a freemium funnel.

**Resource Requirements:** Single full-stack developer, 2–3 weeks build time.

### MVP Feature Set (Phase 1)

**Core User Journeys Supported:**
1. Business owner onboards, adds vendors, uploads existing documents, sets expiry dates → receives first automated reminder
2. Business owner sends vendor portal link → vendor self-uploads → dashboard updates
3. Business owner exports audit trail PDF for insurance or compliance review

**Must-Have Capabilities (all described in Product Scope MVP section above).**

### Post-MVP Features

**Phase 2 (Months 3–6 post-AppSumo):**
- OCR expiry date extraction with confidence thresholds (Google Cloud Document AI or AWS Textract)
- CSV bulk vendor import
- Compliance report customization (logo, property/project grouping)
- Role-based team access expansion (view-only, upload-only roles)
- QuickBooks vendor sync
- Zapier integration (expiration/upload triggers)
- Annual billing (2 months free)

**Phase 3 (Months 6–18):**
- Property management integrations: AppFolio, Buildium
- Construction: Procore subcontractor sync
- Food service: HACCP templates, county-specific food handler renewal workflows
- Healthcare: Credentialing cycle reminders, payer compliance tracking
- Vendor portable certificate portfolio (two-sided network effect)
- AI COI validation (coverage amounts, policy types vs. requirements)
- Native mobile app (iOS/Android)

### Risk Mitigation Strategy

**Technical Risks:**
- *Reminder delivery at scale:* Resend provides 99.9% delivery SLA for transactional email; risk low for <10,000 accounts. Mitigation: log every reminder event; expose delivery status in owner dashboard.
- *OCR accuracy (Phase 2):* Deferred to post-MVP specifically to avoid this risk; Phase 1 is manual entry only with optional OCR-assist.

**Market Risks:**
- *"Good enough" Google Sheets adoption:* Primary mitigation is AppSumo LTD pricing — at $99 one-time vs. a potential $25,000+ incident, the risk/reward calculation is unambiguous once framed correctly.
- *TrackMyVendor responds with price cut:* VendorVault's vendor self-upload portal is a 2–4 week feature for an existing SMB COI tool; viable response. Mitigated by AppSumo LTD lock-in and multi-vertical scope.

**Resource Risks:**
- *Single developer:* Scope is deliberately narrow (7 feature areas, 2–3 weeks). If timeline slips, deprioritize OCR-assist (Phase 2) and SMS reminders (already Phase 2) from MVP.
- *Absolute minimum launch feature set:* Vendor profiles + document upload + expiry tracking + email reminders + auth + billing. Portal can ship as MVP+1 if needed, though it is the primary differentiator.

---

## Functional Requirements

### Vendor Management

- **FR1:** Business owners can create a vendor profile with name, vendor type, primary contact name, primary contact email, and relationship start date.
- **FR2:** Business owners can edit any vendor profile field at any time.
- **FR3:** Business owners can archive a vendor profile to hide it from active views without deleting compliance document history.
- **FR4:** Business owners can view a paginated vendor list sortable by name, vendor type, or overall compliance status.
- **FR5:** Business owners can filter the vendor list by compliance status (all / expiring within 60 days / expired).
- **FR6:** Business owners can select vendor types from a pre-defined list: General Contractor, Subcontractor, HVAC, Electrical, Plumbing, Cleaning, Landscaping, Pest Control, Food Supplier, Medical Services, Other.
- **FR7:** Each vendor record displays a real-time compliance status badge: green (all documents current), yellow (at least one document expiring within 60 days), red (at least one document expired or expiring within 7 days).

### Document Upload & Tracking

- **FR8:** Business owners can upload a compliance document file (PDF, JPG, PNG, max 25MB) per vendor per document type.
- **FR9:** Business owners can assign document types to uploads from: Certificate of Insurance, Contractor License, Food Handler Certification, OSHA Certification, Business Permit, W-9, Custom.
- **FR10:** Business owners can define a free-text custom document type name when selecting the Custom type.
- **FR11:** Business owners can manually enter an expiry date for each uploaded document (required field; no document can be saved without an expiry date).
- **FR12:** When a PDF is uploaded, the system attempts OCR-based expiry date extraction and presents a suggested date for review.
- **FR13:** Business owners can confirm, correct, or ignore the OCR-suggested expiry date; the suggested date is never saved without explicit user confirmation.
- **FR14:** Business owners can upload multiple documents of the same type per vendor (e.g., multiple policy years of COI for audit trail continuity).
- **FR15:** Business owners can view the full document version history per document type per vendor, including prior uploads retained as archive records.
- **FR16:** Business owners can preview uploaded documents inline (PDF rendered in browser, image displayed) without downloading.

### Expiration Alerts & Notifications

- **FR17:** The system sends email reminder notifications to the account owner at exactly 60, 30, and 7 days before each tracked document's expiry date.
- **FR18:** Each reminder email includes: vendor name, document type, expiry date, days remaining, a direct deep-link to the vendor record in the dashboard, and a direct link to generate a vendor self-upload portal link.
- **FR19:** Business owners can add up to 3 additional team email addresses to receive expiration reminders (Pro tier).
- **FR20:** Business owners can opt into SMS reminders per account; SMS fires at the same 30-day and 7-day intervals as email (Pro tier; Twilio integration).
- **FR21:** Business owners receive an email notification within 5 minutes when a vendor submits a document via their self-upload portal.
- **FR22:** The dashboard provides an "Action Required" filtered view listing all expiring (≤60 days) and expired documents, sorted by urgency (days remaining ascending).
- **FR23:** On the calendar day a document's expiry date passes, the system automatically marks the document as expired, updates the vendor's status badge to red, and triggers an overdue notification email.

### Vendor Self-Upload Portal

- **FR24:** Business owners can generate a unique, cryptographically random upload link per vendor with a configurable validity window (default: 30 days).
- **FR25:** Vendor upload links are accessible without a VendorVault account — vendors interact only through the stateless portal URL.
- **FR26:** Vendors can upload a compliance document, select document type, enter expiry date, and submit via the portal form on both desktop and mobile browsers.
- **FR27:** The owner's dashboard updates the vendor's document list and compliance status within 60 seconds of a vendor portal submission.
- **FR28:** Business owners can regenerate a vendor upload link at any time, which invalidates all previously generated links for that vendor.
- **FR29:** The vendor self-upload portal page displays the owning business name (as configured in account settings) to provide context for the vendor submitting documents.
- **FR30:** Business owners can copy the vendor portal link to clipboard or trigger a pre-formatted email to the vendor's primary contact email directly from the vendor record.

### Compliance Dashboard & Reporting

- **FR31:** The dashboard overview displays: total vendor count, count by compliance status (green/yellow/red), and percentage of vendors fully compliant.
- **FR32:** Business owners can expand any vendor card inline to view the list of tracked documents with document type, expiry date, days remaining, and upload actor.
- **FR33:** Business owners can view document upload provenance: each document record shows whether it was uploaded by the account owner or submitted by the vendor via portal (with portal submission timestamp).
- **FR34:** Business owners can generate and download a PDF audit report for a single vendor or all vendors, including full document history, upload timestamps, actor identity, and current compliance status.
- **FR35:** Business owners can sort the vendor list by name, vendor type, or compliance urgency (vendors with most urgent expiration first).

### Audit Trail & Compliance Records

- **FR36:** Every document upload, edit, or status change is recorded with: UTC timestamp, actor identity (owner email or "vendor via portal"), document type, declared expiry date, and file hash.
- **FR37:** Audit trail records are append-only; no record can be deleted. Documents marked as superseded retain their original audit entry alongside the superseding upload.
- **FR38:** Business owners can export the complete audit trail for their account as a structured PDF or CSV, including all document versions for all vendors.
- **FR39:** On account cancellation, business owners have a 30-day window to export all document files and audit trail data before purge.

### Authentication, Billing & Account Management

- **FR40:** Users can register using email/password or passwordless magic link (email) via Supabase Auth.
- **FR41:** Free tier accounts can manage up to 3 vendor profiles with access to all core features (upload, portal, reminders, dashboard).
- **FR42:** Starter tier accounts ($19/month) support up to 10 vendor profiles with all core features and audit trail export.
- **FR43:** Pro tier accounts ($49/month) support unlimited vendor profiles, team member access (up to 3 additional users), SMS reminders, and advanced audit export (CSV format).
- **FR44:** Business owners can redeem one-time LTD codes at checkout (Starter LTD: $59 one-time = 10-vendor Starter features; Pro LTD: $99 one-time = unlimited Pro features).
- **FR45:** Business owners can upgrade, downgrade, or cancel their subscription through self-service account settings without contacting support.
- **FR46:** Business owners can invite up to 3 team members to access the account dashboard (Pro tier); team members inherit the same permissions as owners except billing and team management.
- **FR47:** The system enforces vendor count limits at the API layer; attempts to create vendors beyond tier limits return a clear upgrade prompt.

---

## Non-Functional Requirements

### Performance

- Dashboard initial page load (authenticated, with vendor list): under 2 seconds at 95th percentile under normal load (up to 500 concurrent users)
- Document upload completes (upload API acknowledges file received): under 5 seconds for files up to 25MB on a standard broadband connection
- Vendor self-upload portal page load (unauthenticated): under 3 seconds on a 4G mobile connection
- Audit trail PDF export generation: under 10 seconds for accounts with up to 100 vendors and 500 documents
- API responses for dashboard data queries: under 500ms at 95th percentile

### Security

- All documents stored encrypted at rest (AES-256) in Cloudflare R2 private buckets
- All data in transit via HTTPS/TLS 1.2+ enforced; HTTP redirects to HTTPS
- Document access URLs are time-limited signed URLs (15-minute expiry); no permanent public document URLs
- Vendor portal link tokens are cryptographically random (UUID v4 minimum entropy); not enumerable or guessable
- Auth sessions expire after 30 days of inactivity; JWT tokens signed with RS256
- All payment data handled exclusively via Stripe; VendorVault stores no raw card data (PCI-DSS scope limited to SAQ-A)
- Row Level Security (RLS) enforced at database layer for all account-scoped data; no application-layer-only auth guards
- Password reset via Supabase Auth standard flow; magic link tokens expire after 1 hour

### Reliability

- System achieves 99.5% uptime for production environment (measured monthly, excluding scheduled maintenance)
- Scheduled email reminders fire within 60 minutes of scheduled fire time with ≤1% delivery failure rate
- Document uploads are durable on receipt: files written to R2 before upload API returns success response; no silent data loss on network timeout
- Vendor portal submission is idempotent: duplicate submissions within 5 minutes of the same token are deduplicated (no duplicate document records)
- Stripe webhook processing retries on failure with exponential backoff; account tier updates reflect within 60 seconds of successful webhook receipt

### Scalability

- System supports up to 10,000 active accounts at MVP launch scale without architectural changes
- Database schema and query patterns support horizontal scaling to 100,000+ accounts via Supabase connection pooling and R2 object storage (no per-account storage caps at MVP)
- Reminder cron job designed for batch processing: scales to 50,000+ document expiry checks per daily run without timeout

### Accessibility

- Dashboard meets WCAG 2.1 AA compliance for color contrast; green/yellow/red status indicators include text labels ("Compliant" / "Expiring" / "Expired") not color alone
- Vendor self-upload portal meets WCAG 2.1 AA; fully operable via keyboard navigation for vendors using accessibility tools
- All form inputs include accessible labels and error messages (not placeholder-only labels)
- Dashboard is fully responsive on viewport widths from 375px (iPhone SE) to 2560px (wide desktop)

### Integration

- Resend email delivery: SPF, DKIM, DMARC configured on dedicated sending domain; bounce/complaint rates monitored; delivery status logged per reminder event
- Stripe billing: subscription lifecycle events (created, updated, canceled, payment_failed) processed via webhooks with idempotency keys; all billing UI links to Stripe-hosted customer portal
- Cloudflare R2: all file operations use official R2 S3-compatible SDK; object naming convention includes `account_id/vendor_id/document_id` prefix for isolation guarantees
- Supabase Postgres: all queries use parameterized statements; no raw SQL string interpolation; all tables have `account_id` RLS policy

---

*PRD generated autonomously by BMAD pipeline — 2026-10-13*
*Based on: VendorVault Product Brief (2026-10-12) + Vendor Compliance Document Tracker shortlisted idea (88/105 score)*
*Next steps: Architecture → Epics & Stories → Sprint Planning → Story Creation → Dev Implementation*
