---
stepsCompleted: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
inputDocuments:
  - ideas/shortlisted/funeral-home-management.md
  - _bmad-output/planning-artifacts/market-research-funeral-home-management.md
  - _bmad-output/planning-artifacts/product-brief-funeral-home-management.md
workflowType: prd
lastStep: 12
project_name: funeral-home-management
product_name: FinalCare
user_name: Root
date: 2026-04-15
---

# Product Requirements Document — FinalCare

**Author:** Root
**Date:** 2026-04-15
**Version:** 1.0
**Status:** Ready for Architecture

---

## Executive Summary

FinalCare is a cloud-native funeral home management platform targeting independent and family-owned funeral homes in the US (~11,500–13,700 businesses). The core problem: 40–55% of this segment operates on paper case files, Word templates, and wall calendars; those who adopt software face opaque pricing, broken QuickBooks integration, and complex onboarding that fails during emotionally critical family moments.

**Product differentiator:** FinalCare is the only full-featured funeral home platform with published $59/mo pricing, native QuickBooks Online 2-way sync, a no-login family portal (magic link/QR), and a 30-minute setup guarantee — simultaneously eliminating the three documented failure modes across every major incumbent.

**Target users:** Independent funeral directors (2–15 staff, 90–300 cases/year), new funeral home owners (acquired businesses needing modern systems), and cremation-only operators.

**Business objective:** 300 paying customers ($17,700 MRR) by Month 12 with monthly churn below 1.5%. Path to $47,200 MRR (800 customers) by Month 24.

**MVP scope:** Case management, digital arrangement conference with FTC-compliant pricing, document generation, native QuickBooks Online sync, no-login family portal with e-signature and payment, QR cremation chain-of-custody tracking, and staff calendar with Google Calendar sync.

---

## Success Criteria

### Business Outcomes

- **MRR:** $2,950 (Month 3) → $8,850 (Month 6) → $17,700 (Month 12)
- **Paying customers:** 50 (Month 3) → 150 (Month 6) → 300 (Month 12)
- **Monthly churn:** <3% (Month 3) → <2% (Month 6) → <1.5% (Month 12)
- **Trial-to-paid conversion:** 30%+ (Month 3) → 40%+ (Month 12)
- **CAC:** <$200 (Month 3) → <$150 (Month 12)
- **NPS:** 40+ (Month 3) → 60+ (Month 12)
- **G2/Capterra reviews:** 10+ (Month 3) → 75+ (Month 12)

### User Success Criteria

**Activation (primary gate):** Director completes first case (first call → invoice generated) within 30 minutes of account creation.
- Target: 70%+ of trial accounts activate within Day 1
- Measurement: Product event "first_case_invoice_generated" with timestamp delta from account_created

**QuickBooks sync reliability:** <0.5% of cases require manual QB correction after sync by Month 12.
- Measurement: Support ticket category "QB sync error" as percentage of active cases

**Family portal completion:** 80%+ of family portal sessions result in completed document review without a support contact.
- Measurement: Session completion event + support ticket source tag "family portal help"

**Document prep time reduction:** 75%+ of users report cutting document prep time by half or more in 90-day survey.
- Measurement: NPS survey embedded time-savings question at 90 days

**Mobile access:** 40%+ of active users access FinalCare from a mobile device at least once per week.
- Measurement: Device type analytics on session events

**Zero-downtime reliability:** Zero P0 incidents (data loss, document generation failure, complete QB sync failure) during live family arrangement sessions in Months 1–3.
- Measurement: Incident log with severity classification

### MVP Validation Gates

The MVP is validated when all five gates pass:
1. 50 paying customers at $59/mo by Month 3 with churn <3%
2. QB sync correct for 98%+ of cases (support ticket measurement)
3. 30-minute setup achieved by 60%+ of new trial accounts
4. 50%+ of active customers send at least one family portal link per month
5. Zero P0 incidents in production during Months 1–3

---

## Product Scope

### MVP (v1.0 — Months 1–4)

**In scope:**
- Case management dashboard (active cases, search/filter, status tracking, notes)
- First call intake form (structured, auto-generates canonical case number)
- Digital arrangement conference with FTC-compliant itemized price list
- Arrangement contract and invoice PDF generation
- State death certificate pre-fill (PDF-based; director submits via existing state portal)
- Native QuickBooks Online 2-way sync (OAuth, real-time, field-mapped)
- No-login family portal (magic link/QR, document review, e-signature, Stripe payment)
- QR cremation chain-of-custody tracking (scan log at each transfer point)
- Staff calendar with Google Calendar 2-way sync
- Self-serve signup at $59/mo (Stripe billing, no credit card for 30-day trial)
- Mobile-responsive web (PWA — no native app)

**Explicitly out of scope for v1.0:**
- Electronic Death Registration (EDR) direct submission to state systems
- Pre-need contract management
- Native iOS/Android apps
- QuickBooks Desktop connector
- Xero integration
- Multi-location consolidated reporting
- Cemetery plot management
- AI obituary generation
- Inventory management (caskets, urns, merchandise)

### Growth (v2.0 — Months 5–10)

- EDR direct submission for top 5 states (CA, TX, FL, NY, PA)
- Native iOS and Android apps with offline mode
- Xero integration (UK/Canada prerequisite)
- QuickBooks Desktop connector
- AI obituary generator (tone-matched to family input)
- Grief aftercare CRM (automated 30/60/90-day family follow-up)
- Per-state AI compliance documentation assistant

### Vision (v3.0 — Months 10–18)

- Multi-location dashboard and consolidated reporting
- International launch: UK (4,000+ homes), Canada (3,500+), Australia (3,000+)
- Proprietary payment processing (funeral-specific rates, 1.5–2.5% vs Stripe standard)
- Pre-need contract management and reporting
- Cemetery plot inventory module
- NFDA preferred vendor status

---

## User Journeys

### Journey 1: Margaret — Independent Director, Paper-to-Digital Migration

**Trigger:** Month-end accounting reconciliation requires 6–8 hours because bookkeeper must manually key paper case invoices into QuickBooks. State death certificate rejection (transcription error) causes family complaint. Margaret vents at state association meeting; a peer mentions FinalCare and its published $59/mo price.

**Discovery → Decision (1–2 days):**
1. Margaret visits FinalCare.com — $59/mo is front and center, no "contact us."
2. Reads: "Native QuickBooks sync — real-time, not a CSV export."
3. Reviews 3 G2 reviews from verified peers with similar case volume.
4. Signs up for 30-day free trial without speaking to a salesperson.

**Onboarding — "aha!" moment (Day 1, ~25 minutes):**
1. Uploads existing Word price list; FinalCare auto-maps to itemized pricing template.
2. Creates first digital case: first call form → selects arrangement items → invoice generated.
3. Connects QuickBooks Online via 3-click OAuth.
4. Case invoice appears in QB automatically — calls husband over to show him.

**Core usage (Weeks 1–4):**
- Active cases migrate; staff learn document generation workflow.
- Family portal link shared; out-of-state family member signs remotely, eliminating a paper mail coordination task.
- Death certificate pre-fill reduces transcription errors.

**Conversion (Day 28):** Margaret enters credit card — no salesperson involved.

**Referral:** Posts in state association Facebook group; 4 directors DM her within 48 hours.

**Critical path capabilities revealed:**
- Price transparency on website (no gating)
- QuickBooks OAuth connection with real-time case sync
- Itemized price list upload/import
- Case creation and invoice generation
- Document generation (death certificate pre-fill)
- Family portal with remote e-signature

---

### Journey 2: Derek — New Owner, Migrating from Legacy Osiris

**Trigger:** Derek's accountant files a tax extension because Osiris-to-QuickBooks mapping errors are too messy to reconcile. He posts in a funeral director Facebook group asking for alternatives.

**Discovery → Decision (3–5 days):**
1. Sees FinalCare mentioned in Facebook group thread.
2. Visits website — clean dashboard screenshot, QuickBooks sync prominently featured, $59/mo visible.
3. Compares: Osiris requires a quote call; FinalCare has self-serve trial.
4. Signs up, imports his existing price list and active case list.

**Onboarding:**
- Dashboard loads — shows all active cases with status indicators.
- Connects QB Online; existing open invoices visible in reconciliation view.
- Mobile responsive — he accesses case details from his phone at a removal scene within first week.

**Core usage:**
- Generates gross margin report by service type for the first time — previously impossible in Osiris.
- Mobile access eliminates "call the office" during removals.
- Accountant stops flagging QB mapping errors.

**Critical path capabilities revealed:**
- Case import / bulk case migration
- Revenue reporting by service type (QB sync category mapping)
- Mobile PWA case detail access
- Financial reporting dashboard

---

### Journey 3: Alicia — Cremation-Only Operator, Scaling Past Spreadsheet

**Trigger:** Near-miss with mixed-up cremated remains (caught in time, but frightening) makes chain-of-custody tracking non-negotiable. At 300 cases/year, the intake Google Form feeding a spreadsheet is becoming unmanageable.

**Discovery:** Searches "cremation tracking software"; finds FinalCare via Google. Reads about QR cremation chain-of-custody — this is the hook.

**Onboarding:**
- Creates first cremation case with QR code assigned at intake.
- Prints QR label; scans at each transfer point on mobile browser.
- Generates chain-of-custody PDF report for first case.
- Connects Stripe for online family payments (families pay before cremation).

**Core usage:**
- All 300 annual cases have QR tracking; notebook retired.
- Family portal magic link sent at intake; families review authorization, e-sign, and pay remotely.
- QB sync handles weekly reconciliation automatically.

**Critical path capabilities revealed:**
- QR code generation and label printing
- Mobile QR scan at transfer points
- Chain-of-custody PDF report export
- Online payment via Stripe in family portal
- Cremation authorization e-signature workflow

---

### Journey 4: Family Member — Arrangement Review and Signature

**Trigger:** Director sends magic link via text message after arrangement conference.

**Experience:**
1. Family member opens link on iPhone — no app download, no account creation.
2. Reviews arrangement summary: itemized services, total cost, service date.
3. Views and e-signs the arrangement contract.
4. Pays deposit via credit card (or ACH).
5. Receives email confirmation with signed document attached.

**Critical path capabilities revealed:**
- Token-based access (no account required)
- Mobile-responsive arrangement summary view
- E-signature on documents
- Stripe payment (credit card + ACH)
- Automated email confirmation with document attachment

---

### Journey 5: Bookkeeper — Monthly Reconciliation

**Trigger:** Monthly bookkeeping session.

**Experience:**
1. Opens QuickBooks Online (never logs into FinalCare directly).
2. All case invoices already present with correct income categories.
3. All payments recorded against invoices.
4. Service type breakdown matches FinalCare case report.
5. No manual correction needed.

**Critical path capabilities revealed:**
- Automatic QB invoice creation on arrangement finalization
- Payment sync back to QB when processed in FinalCare
- Revenue category mapping (configurable service type → QB income account)
- Error logging dashboard for any sync failures (director-facing)

---

## Domain Requirements

### FTC Funeral Rule Compliance (Mandatory)

The FTC Funeral Rule (16 CFR Part 453) requires funeral providers to:
- Provide itemized price lists (GPL — General Price List) upon inquiry
- Present all goods and services as individual line items; not package-only pricing
- Allow consumers to select only the items they want
- Provide itemized statement of goods/services selected before final purchase

**DR1:** Arrangement conference pricing must display each service and merchandise item as an individually selectable line item with unit price — package bundling that obscures per-item pricing is prohibited in the UI.

**DR2:** System must generate an itemized statement of goods and services selected (the "Statement of Funeral Goods and Services Selected") that meets FTC Funeral Rule format requirements.

**DR3:** Price list must be printable on demand for walk-in inquiries, formatted as the FTC-required General Price List (GPL).

**DR4:** No minimum purchase requirement may be enforced by the system — users must be able to deselect any non-required item.

*Non-compliance risk: $50,120 per violation.*

### State Death Certificate Requirements

Death certificates are state-regulated documents with field requirements that vary across all 50 US states.

**DR5:** Death certificate pre-fill must populate from case data only the fields common across state formats; director must complete state-specific fields before submission.

**DR6:** System must not generate or submit death certificates to any state Electronic Death Registration System (EDRS) without explicit state-specific integration (deferred to v2.0); MVP generates pre-filled PDF only.

**DR7:** All case data fields mapped to death certificate pre-fill must match state-standard field names to prevent transcription-error rejections.

### Cremation Chain-of-Custody Requirements

State regulations and funeral industry best practices require documented chain-of-custody for cremated remains.

**DR8:** Each cremation case must have a unique identifier (QR code) assigned at intake that remains associated with the case for its full lifecycle.

**DR9:** Chain-of-custody log must record: timestamp, actor (staff member), location/transfer point, and scan event type (intake, cremation authorization, pre-cremation ID check, post-cremation, release) for each scan.

**DR10:** Chain-of-custody report must be exportable as PDF for compliance records and family documentation.

### Payment Processing (PCI-DSS)

**DR11:** Payment card data (credit card numbers, CVV) must never be stored or transmitted through FinalCare servers — all card processing must use Stripe's certified tokenization (PCI-DSS SAQ A compliance via Stripe).

**DR12:** ACH payment authorization must collect bank account information via Stripe's ACH flow; routing/account numbers must not be stored in FinalCare's database.

### Data Retention

**DR13:** Case records (case files, signed documents, invoice history, chain-of-custody logs) must be retained for a minimum of 7 years to support legal discovery and state licensing audit requirements. Deletion must require explicit director action with confirmation prompt.

### E-Signature Validity

**DR14:** Electronic signatures collected via the family portal must comply with the ESIGN Act and UETA: each signature must capture signer's full name, email or phone number, IP address, timestamp, and consent acknowledgment text displayed at time of signing.

---

## Innovation Analysis

### Competitive Gaps Exploited by FinalCare

**Gap 1 — Pricing transparency:** Every major incumbent (Gather, Passare, Halcyon, Tribute/FrontRunner, Osiris) gates pricing behind a sales call. FinalCare publishes $59/mo on the homepage. This eliminates the discovery-to-trial friction that is the single largest adoption barrier for time-constrained independent directors.

**Gap 2 — QuickBooks integration quality:** The #1 documented complaint across all funeral home software review platforms is broken or inadequate QuickBooks integration. FinalCare's QB sync is architected as a core data layer feature (not a bolt-on integration): case invoices are created in QB when arrangements are finalized, payments sync bidirectionally, and service types map to QB income categories with zero manual intervention.

**Gap 3 — Family portal friction:** Passare's family collaboration portal requires families to create accounts — "not received well" and "clients resist" per reviews. FinalCare's no-login magic link/QR approach removes account creation entirely, meeting grieving families at consumer-grade UX expectations (text message link → mobile-first review → one-tap signature).

**Gap 4 — Cremation-native design:** US cremation rate is 63.4% (rising to 82% by 2045 per NFDA). Most funeral home software is burial-centric. FinalCare treats cremation workflows (QR tracking, authorization forms, release documentation) as first-class features rather than add-ons.

**Gap 5 — Onboarding complexity:** Halcyon reviews cite "overwhelming onboarding"; Passare has page load lag "extra seconds" during sensitive family meetings. FinalCare's 30-minute setup guarantee and pre-loaded funeral-home-specific templates remove the week-long implementation project that causes independent directors to delay purchasing decisions indefinitely.

### Moat Mechanisms

- **Template lock-in:** Once a funeral home's price list, document templates, and QB category mapping are configured in FinalCare, switching cost is high — equivalent to rebuilding their document system.
- **Case history retention:** Legally required multi-year case history creates deep switching costs.
- **Word-of-mouth in tight-knit community:** Funeral directors congregate in state associations, NFDA, and Facebook groups (53K+ combined followers across major groups). Peer referral is the primary discovery channel — early community ownership is a durable first-mover advantage.
- **LTD community seeding:** AppSumo LTD campaign (Month 3–6) creates a cohort of 300–500 vocal early adopters at zero ongoing CAC, generating G2/Capterra reviews that dominate organic search results.

---

## Project-Type Requirements

**Project type:** Greenfield SaaS, B2B vertical software, single-tenant cloud-hosted.

**Platform:** Web application (cloud-hosted, mobile-responsive PWA). No native mobile app for MVP.

### Multi-Tenancy

**PTR1:** Each funeral home account is a fully isolated tenant — case data, documents, price lists, and QB connection are never shared or visible across tenant boundaries.

**PTR2:** Staff members belong to a single funeral home tenant; multi-location access (one director across multiple locations) is not supported in MVP.

### Authentication and Access Control

**PTR3:** Director/staff users authenticate via email + password with email verification. Password reset via email link.

**PTR4:** Family portal access uses token-based authentication (magic link with expiry) — no account creation required.

**PTR5:** Staff roles: Director (full access including billing and user management) and Staff (case access; no billing, no user management). Role assignment is director-managed.

### Billing and Subscription

**PTR6:** Self-serve subscription billing via Stripe: 30-day free trial (no credit card required), then $59/mo. Month-to-month, cancel anytime with no penalty.

**PTR7:** Trial-to-paid conversion: at Day 25 of trial, system sends email reminder; at Day 30, access is restricted to view-only until payment method added.

### Integrations

**PTR8:** QuickBooks Online integration uses OAuth 2.0 (Intuit developer platform). FinalCare requests minimum required scopes: accounting read/write for invoices, payments, customers, and income accounts.

**PTR9:** Google Calendar integration uses OAuth 2.0 (Google API). Sync is bidirectional: service/arrangement events created in FinalCare appear in Google Calendar; calendar blocks are read-only in FinalCare.

**PTR10:** Stripe integration handles all payment processing: family portal payments (credit card + ACH via Stripe), subscription billing, and payout to funeral home's connected Stripe account.

### Infrastructure

**PTR11:** System is hosted on a cloud provider (AWS or GCP) with automated backups daily, point-in-time recovery to 24 hours, and data stored in US regions only.

**PTR12:** Documents (PDFs) and QR code assets are stored in cloud object storage (S3 or GCS) with access controlled per tenant.

---

## Functional Requirements

### Case Management

- **FR1:** Director/staff can create a new case from a structured first call intake form capturing decedent information, primary family contact, removal location, and assigned staff member.
- **FR2:** Director/staff can view a dashboard of all active cases with current status, assigned staff, family name, and days since first call.
- **FR3:** Director/staff can search cases by family name, decedent name, case number, and date range.
- **FR4:** Director/staff can filter the case list by status (first call, arrangement scheduled, arrangements complete, documentation pending, final disposition, closed).
- **FR5:** Director/staff can add timestamped notes to any case, attributed to the staff member who added them.
- **FR6:** System auto-generates a unique canonical case number upon case creation (format configurable by funeral home).
- **FR7:** Director/staff can assign or reassign a case to a specific staff member.
- **FR8:** Director/staff can view the complete case history — all status changes, notes, documents generated, and family portal activity — in chronological order.
- **FR9:** Director can close a case and move it to archived status; archived cases remain searchable and readable but are excluded from the active dashboard.

### Arrangement Conference and Pricing

- **FR10:** Director can build and maintain a funeral home price list with individually priced line items organized by category (professional services, transfer, embalming, facilities, merchandise, cash advances, etc.).
- **FR11:** Director can import an existing price list from a structured template (CSV or Word-compatible format) to populate the item catalog without manual re-entry.
- **FR12:** Director/staff can conduct a digital arrangement conference by selecting items from the price list for a specific case, with real-time total calculation.
- **FR13:** System displays each selected item as an individual line item with unit price; no UI mechanism allows bundling that obscures per-item pricing (FTC Funeral Rule compliance).
- **FR14:** Director/staff can generate a printable General Price List (GPL) from the funeral home's price list on demand.
- **FR15:** System generates an itemized Statement of Funeral Goods and Services Selected from the finalized arrangement, meeting FTC Funeral Rule format.
- **FR16:** Director can update individual price list item prices; price changes apply to new cases only and do not retroactively modify finalized arrangements.

### Document Generation

- **FR17:** Director/staff can generate an arrangement contract PDF from a finalized arrangement with one action.
- **FR18:** Director/staff can generate a pre-filled death certificate PDF from case data (decedent information, date, location); fields common to all US states are pre-filled; state-specific fields are left blank for director completion.
- **FR19:** Director/staff can generate an invoice PDF from a finalized arrangement.
- **FR20:** Director/staff can generate an obituary draft from structured case data (decedent name, dates, surviving family, service details) using a configurable template.
- **FR21:** All generated PDF documents are stored in the case file and accessible to authorized staff with the original generation timestamp.
- **FR22:** Director/staff can download or print any document associated with a case.

### QuickBooks Online Sync

- **FR23:** Director can connect the funeral home's QuickBooks Online account via OAuth in 3 or fewer steps.
- **FR24:** System automatically creates a QB invoice when an arrangement is finalized in FinalCare; the invoice includes all line items with amounts mapped to the director-configured QB income account by service category.
- **FR25:** System automatically records a payment in QB when a payment is processed in FinalCare (family portal payment or director-entered payment).
- **FR26:** Director can configure the mapping between FinalCare service categories and QB income accounts.
- **FR27:** Director can view a sync status dashboard showing the last sync timestamp, number of cases synced, and any sync errors with error detail.
- **FR28:** System retries failed QB sync operations automatically (up to 3 times with exponential backoff); failed operations that cannot be resolved are flagged in the sync error dashboard.
- **FR29:** Director can disconnect and reconnect the QB integration without losing existing case data.

### Family Portal

- **FR30:** Director/staff can generate a magic link (URL with expiry token) and/or printable QR code for a specific case's family portal at any point after arrangement finalization.
- **FR31:** Director can set the expiry period for a family portal link (default: 14 days; max: 90 days).
- **FR32:** Director can revoke a family portal link and generate a new one at any time.
- **FR33:** Family member can access the family portal via magic link or QR code on any device without creating an account.
- **FR34:** Family member can view the arrangement summary (selected items, itemized pricing, total, service date and location) in the family portal.
- **FR35:** Family member can review and e-sign the arrangement contract in the family portal; signature captures full name, timestamp, IP address, and consent acknowledgment.
- **FR36:** Family member can pay a deposit or balance via credit card or ACH in the family portal (processed via Stripe).
- **FR37:** Family member receives an automated email confirmation with the signed document attached after completing e-signature.
- **FR38:** Director/staff can see the real-time status of each family portal (viewed, signed, paid, not yet opened) from the case file.
- **FR39:** System sends director email notification when a family member signs or pays via the family portal.

### QR Cremation Chain-of-Custody

- **FR40:** Director/staff can assign a QR code to a cremation case at intake; the QR code is printable as a label from any standard printer.
- **FR41:** Director/staff can scan a case's QR code using a mobile device browser to log a chain-of-custody event.
- **FR42:** Each QR scan records: event type (intake, cremation authorization, pre-cremation ID check, post-cremation, release to family), scanning staff member, timestamp, and optional notes.
- **FR43:** Director/staff can view the complete chain-of-custody log for any cremation case in chronological order.
- **FR44:** Director/staff can export the chain-of-custody log as a PDF report for compliance records.
- **FR45:** System alerts director when a cremation case has a chain-of-custody scan sequence gap (e.g., release scan attempted without prior post-cremation scan).

### Staff Calendar and Scheduling

- **FR46:** Director can create calendar events for service scheduling (funeral services, graveside committal, arrangement conferences, removal appointments).
- **FR47:** Director can assign staff members to calendar events; assigned staff receive email notifications.
- **FR48:** Director/staff can view the funeral home's calendar in day, week, and month views.
- **FR49:** Director can connect the funeral home's Google Calendar account via OAuth; events created in FinalCare sync to Google Calendar.
- **FR50:** Director/staff can link a calendar event to a specific case.

### User and Account Management

- **FR51:** Director can invite staff members to the funeral home account via email; invited staff receive an activation link.
- **FR52:** Director can assign staff roles (Director or Staff) and change roles at any time.
- **FR53:** Director can deactivate a staff member's access; deactivated accounts cannot log in but their case notes and history are preserved.
- **FR54:** Director can update funeral home profile information (name, address, phone, license number, logo for document headers).
- **FR55:** Director can manage billing: view current plan, update payment method, view invoice history, and cancel subscription.
- **FR56:** Staff member can update their own name, email, and password.

### Reporting

- **FR57:** Director can view a revenue report showing total revenue by time period (month, quarter, year) broken down by service category — sourced from finalized arrangement data.
- **FR58:** Director can view a case volume report showing number of cases by status, type (burial vs. cremation), and time period.
- **FR59:** Director can export any report as a CSV file.

---

## Non-Functional Requirements

### Performance

- **NFR1:** Case management dashboard (active case list) loads within 2 seconds for 95th percentile of requests under normal load (up to 100 concurrent users per tenant), as measured by server-side response time monitoring.
- **NFR2:** Document PDF generation completes within 10 seconds for 95th percentile of requests, as measured by job completion time tracking.
- **NFR3:** QuickBooks sync for a single case (invoice creation) completes within 30 seconds of arrangement finalization, as measured by sync event timestamps.
- **NFR4:** Family portal magic link page loads within 3 seconds on a mobile device over a 4G connection (simulated in load testing), ensuring no lag during emotionally sensitive family interactions.
- **NFR5:** QR scan to chain-of-custody event recording completes within 2 seconds of scan, as measured by API response time.

### Security

- **NFR6:** All data transmitted between client and server uses TLS 1.2 or higher; HTTP connections redirect to HTTPS.
- **NFR7:** All data at rest (database, object storage) is encrypted using AES-256 or equivalent.
- **NFR8:** Staff passwords are hashed using bcrypt with a minimum cost factor of 12; plaintext passwords are never stored or logged.
- **NFR9:** Family portal magic links use cryptographically random tokens (minimum 128 bits of entropy); tokens expire per director-configured TTL (default 14 days, max 90 days); expired or revoked tokens return 404.
- **NFR10:** Payment card data (card numbers, CVV) never passes through FinalCare application servers; all card tokenization uses Stripe.js client-side processing (PCI-DSS SAQ A compliance).
- **NFR11:** All authentication failures are rate-limited: maximum 10 failed login attempts per account per 15-minute window triggers temporary lockout.
- **NFR12:** Tenant data is isolated at the database query level; all queries include a tenant_id filter enforced at the ORM/data access layer — cross-tenant data access is prevented by design.
- **NFR13:** E-signature capture records signer IP address, user agent, timestamp, and consent acknowledgment text at time of signing; this data is immutable post-signature.
- **NFR14:** All API endpoints require authentication; no data is accessible without a valid session token or magic link token.

### Reliability

- **NFR15:** System maintains 99.5% monthly uptime during business hours (8 AM – 8 PM local time for user's timezone), as measured by cloud provider health check monitoring. Planned maintenance windows are scheduled outside these hours with 48-hour advance notice.
- **NFR16:** Database point-in-time recovery (PITR) is available for a minimum rolling window of 24 hours; daily backups are retained for 30 days; annual backups are retained for 7 years (per DR13 case data retention requirement).
- **NFR17:** PDF document storage is durable with 99.999999999% (11 nines) durability, as guaranteed by cloud object storage (AWS S3 or GCS class).

### Scalability

- **NFR18:** System architecture supports horizontal scaling of web application nodes without code changes to handle 10x growth (300 to 3,000 tenants) with less than 10% performance degradation.
- **NFR19:** QuickBooks sync is processed asynchronously via a job queue; sync failures do not block user-facing case management operations.

### Integration Reliability

- **NFR20:** QuickBooks Online integration handles QB API rate limits (500 req/min/company) gracefully via exponential backoff retry; sync failures are surfaced in the director's sync error dashboard within 5 minutes of failure.
- **NFR21:** Google Calendar sync failures do not block FinalCare calendar operations; FinalCare calendar is the system of record; Google Calendar is a convenience sync.
- **NFR22:** Stripe webhook events (payment.succeeded, payment.failed) are processed idempotently; duplicate webhook deliveries do not create duplicate payment records.

### Accessibility

- **NFR23:** Family portal (public-facing) meets WCAG 2.1 Level AA for color contrast, keyboard navigation, and screen reader compatibility — families include elderly users and those with disabilities.
- **NFR24:** Staff-facing application meets WCAG 2.1 Level A as a baseline; WCAG AA compliance is a v2.0 target.

### Data Portability

- **NFR25:** Director can export all case data for their funeral home as a structured JSON or CSV file at any time, including after cancellation (data available for 90 days post-cancellation).
- **NFR26:** All generated PDFs produced during active subscription remain downloadable for 90 days after subscription cancellation.

---

## Appendix: Key Domain Vocabulary

| Term | Definition |
|------|-----------|
| Case | A single decedent service engagement from first call to final disposition |
| First call | The initial contact when a death is reported; triggers case creation |
| Arrangement conference | Meeting with family to select and price funeral services |
| GPL | General Price List — FTC-required itemized price list for all offered services |
| Statement of FGSS | Statement of Funeral Goods and Services Selected — FTC-required itemized summary of what family chose |
| Final disposition | Burial, cremation, entombment, or other lawful means of disposing of remains |
| Chain of custody | Documented transfer log for cremated remains from intake to release |
| Director | Licensed funeral director; primary FinalCare account holder |
| EDR/EDRS | Electronic Death Registration System — state-run online death certificate filing system (v2.0 target) |
| QB | QuickBooks (specifically QuickBooks Online in MVP scope) |
| Magic link | Time-limited, tokenized URL granting family portal access without account creation |
| LTD | Lifetime Deal — one-time payment for perpetual access; planned AppSumo campaign (Month 3–6) |
| Pre-need | Prearranged and prepaid funeral services purchased in advance of death |

---

*PRD completed: 2026-04-15*
*Source documents: Shortlisted idea (score 88/105, Tier 1) + Market research report (2026-04-14) + Product Brief (2026-04-15)*
*Next step: Architecture (`bmad-bmm-create-architecture`)*
