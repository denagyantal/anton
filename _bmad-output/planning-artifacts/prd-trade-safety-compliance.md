---
stepsCompleted: [step-01-init.md, step-02-discovery.md, step-02b-vision.md, step-02c-executive-summary.md, step-03-success.md, step-04-journeys.md, step-05-domain.md, step-06-innovation.md, step-07-project-type.md, step-08-scoping.md, step-09-functional.md, step-10-nonfunctional.md, step-11-polish.md, step-12-complete.md]
inputDocuments:
  - ideas/shortlisted/trade-safety-compliance-logging.md
  - _bmad-output/planning-artifacts/market-research-trade-safety-compliance.md
  - _bmad-output/planning-artifacts/brief-trade-safety-compliance.md
workflowType: prd
project_name: trade-safety-compliance
user_name: Root
date: 2026-06-11
classification:
  projectType: saas_b2b
  domain: safety_compliance_regtech
  complexity: medium
  projectContext: greenfield
---

# Product Requirements Document — Trade Safety Compliance

**Author:** Root
**Date:** 2026-06-11
**Project:** Trade Safety Compliance — Digital Safety Log for Small Landscaping & Construction Crews

---

## Executive Summary

Trade Safety Compliance is a mobile-first SaaS tool enabling small landscaping, lawn care, and construction crews (1–30 employees) to capture, store, and export OSHA-compliant safety records. Owners and foremen log training sessions with e-signatures, track certificate expiry dates, collect daily crew safety attestations via phone link, document incidents, and export a one-click PDF for workers' comp auditors or OSHA inspectors.

The product addresses a structural compliance gap: ~700,000 US landscaping businesses and 200,000+ construction subcontractors are legally required to maintain safety training records but manage them with paper binders and scattered PDFs. Workers' compensation insurers are actively tightening documentation requirements — sending written audit requests and surcharging premiums for poor safety records — creating a commercial forcing function independent of any regulatory change.

No purpose-built, affordable tool exists for this audience. SafetyCulture charges $24/user/month ($240–$360/month for a 10-person crew); Safesite charges $16–$20/user/month. Trade Safety Compliance charges $29/month flat for up to 20 crew members — a 10× cost advantage at crew scale.

**Positioning:** _"Pass your workers' comp audit in 10 minutes — safety logs, certifications, and daily sign-offs for your whole crew, at one flat price."_

### What Makes This Special

**Flat-rate pricing at crew scale:** $29/month for the whole crew, vs. $240–$360/month for per-seat competitors at 10–15 crew members. This is the headline that wins the sale in a Facebook group post.

**Trade-specific content:** Pre-built toolbox talk templates for heat illness, pesticide/chemical handling, rotating blade equipment, roadside traffic safety, fall protection, and PPE sign-off. Generic competitors offer blank templates. No configuration required for the primary use case.

**Bilingual Spanish/English:** All crew-facing screens — briefings, attestation sign-off, and training records — available in both languages. OSHA HazCom requires training in the worker's understood language; 40–60% of landscaping crews are native Spanish speakers. No competitor owns this positioning.

**Workers' comp framing:** Primary messaging is "pass your workers' comp audit" rather than "OSHA compliance." Workers' comp insurer audit letters are the dominant near-term trigger — they do not require any regulatory change to generate urgency.

**AppSumo LTD timing:** Zero competitors occupy the "safety compliance LTD" search result on AppSumo. A $149 LTD is uncontested in this niche today.

## Project Classification

- **Project Type:** SaaS B2B — mobile-first responsive web app with Progressive Web App (PWA) for crew sign-offs
- **Domain:** Safety compliance / regulatory technology for skilled trades
- **Complexity:** Medium — OSHA recordkeeping regulations apply (29 CFR 1904); workers' comp insurer audit requirements; no PHI or payment card data; no real-time data requirements
- **Project Context:** Greenfield — no existing codebase; standalone product

---

## Success Criteria

### User Success

**Primary indicator:** Owner completes first crew safety attestation session within 24 hours of account creation.

| User Outcome | Target | Measurement |
|---|---|---|
| Time to first crew attestation from signup | < 10 minutes | In-app event: first_attestation_completed |
| Daily attestation completion rate for active accounts | > 80% of weekdays | Sessions per account per week (active = used in last 14 days) |
| Certificate expiry alerts actioned (cert uploaded within 30 days of alert) | > 70% of alerts | Alert-to-upload funnel event |
| OSHA PDF export generated within 90 days of signup | > 40% of active accounts | Export event count |
| "Used in real audit" reports via support or NPS follow-up | > 10 qualitative reports by Month 3 | NPS open-text + support tagging |
| User NPS at 90 days | ≥ 50 | In-app NPS survey at Day 90 |

**User success is achieved when:** An owner can go from signup to a signed crew attestation record in under 10 minutes, and can produce a compliant PDF for an auditor in under 2 minutes without assistance.

### Business Success

| Milestone | Target | Timeline |
|---|---|---|
| Organic paying customers (non-LTD) | 50 accounts | Month 2 |
| MRR | $1,450 (50 × $29) | Month 2 |
| AppSumo LTD sales | 500–1,000 | Month 3 |
| LTD revenue | $75,000–$150,000 | Month 3 |
| MRR | $5,000 | Month 5 |
| Monthly churn | < 6% at accounts 60+ days old | Month 3 |
| Monthly churn | < 4% at accounts 90+ days old | Month 6 |
| CAC (blended) | < $50 | Month 3 |
| Workers' comp insurer partnership conversation initiated | 1 insurer engaged | Month 6 |
| AppSumo acceptance (product quality bar met) | Listed on AppSumo | Month 3 |

### Technical Success

- Onboarding flow requires zero support tickets for first-time completion by a non-technical user
- SMS delivery for attestation links confirmed in < 5 minutes of trigger for 99% of sends
- PDF export generation completes in < 30 seconds for date ranges up to 12 months
- Zero data loss incidents for uploaded certificates or signed attestation records
- Spanish language coverage: 100% of crew-facing screens translated before public launch

### Measurable Outcomes

**MVP is validated when all four conditions are met:**
1. 50 organic paying accounts active (not LTD trial users)
2. 10+ qualitative "this saved me in an audit" reports collected
3. Monthly churn < 6% for accounts 60+ days old
4. Spanish language workflow used by ≥ 20 distinct crew members on attestation sign-offs

---

## Product Scope

### MVP — Minimum Viable Product (Phase 1)

**Core user journeys supported:**
- Owner onboards crew and captures first signed safety attestation in < 10 minutes
- Foreman runs daily safety briefing with bilingual crew in < 5 minutes
- Owner uploads certificates and receives automated expiry alerts
- Owner exports OSHA-ready PDF for workers' comp auditor in < 2 minutes

**Must-have capabilities:**
1. Crew roster management (add/remove/view crew with compliance status)
2. Safety training log (create session, collect e-signatures, view per-member history)
3. Certificate tracker (upload, set expiry, automated 30/60/90-day alerts, status indicators)
4. Daily safety attestation (pre-built trade-specific topics, SMS crew link, bilingual English/Spanish, timestamped sign-off)
5. Incident report (structured form, photo attachment, corrective actions)
6. OSHA-ready PDF export (one-click, date-range selectable, company-branded)
7. Company account setup with trade type selection (landscaping / construction) and logo upload

**Infrastructure requirements for MVP:**
- Mobile-first responsive web app (works on any smartphone browser without app install)
- PWA install prompt for crew sign-off workflow
- Email + SMS notification delivery for expiry alerts and attestation links
- Secure file storage for certificate uploads and signed records
- PDF generation engine

### Growth Features (Phase 2 — Months 4–9)

- **Multi-role access:** Owner, foreman, and crew member roles with distinct permissions; foreman can run attestations without owner access
- **QR code crew sign-in:** Laminated QR code at job site or truck; crew scans → signs attestation without SMS link
- **Workers' comp compliance pack:** One-click generation of written safety program template pre-populated with company data and training history; "send to insurer" workflow
- **Jobber integration:** Safety compliance status visible in Jobber job dashboard; auto-prompt for safety briefing when job is scheduled
- **Advanced reporting:** Safety performance scorecard, streak tracking, compliance gap analysis

### Vision (Phase 3 — Months 10–18+)

- AI toolbox talk generator: describe job conditions → AI generates custom safety briefing
- Native iOS and Android apps (PWA covers MVP; native unlocks push notifications and offline mode)
- HVAC, pressure washing, and janitorial vertical expansion (adjacent trade-specific templates)
- White-label for workers' comp insurers: insurer-branded product recommended to policyholders as policy condition
- ISNetworld / PEC / BROWZ construction safety compliance documentation
- OSHA 300 log automation for construction subcontractors

**Explicit out-of-scope for MVP:**
- Job scheduling, crew dispatching, or route management (Jobber's domain)
- Payroll, HR, or benefits features
- GPS tracking or geofencing
- Equipment inventory or maintenance logs
- Native mobile app (iOS/Android)
- Canada / Australia / UK regulatory variants
- API or webhook access
- Multi-admin team permissions (single-owner account in MVP)

---

## User Journeys

### Journey 1: Marcus — Workers' Comp Audit Forces Action (Primary Success Path)

Marcus owns an 8-person landscaping company in suburban Atlanta. Revenue ~$650K/year. He uses Jobber for scheduling and QuickBooks for invoicing. Six months ago his workers' comp insurer sent a letter asking for training records and a written safety program.

**Opening scene:** Marcus gets a follow-up audit letter. He spent last weekend scanning PDFs and emailing them; the insurer wants his records in a consistent format within 30 days.

**Rising action:** Marcus searches "OSHA safety training log app landscaping." He finds Trade Safety Compliance via a Facebook group post from a peer: "I use this for crew safety logs — $29/month, covers everyone." He watches the 90-second demo video. The $29/month flat price vs. $240/month for SafetyCulture makes the decision trivial.

**Signup and first value:**
1. Marcus creates account, enters company name and trade (landscaping)
2. Adds 8 crew members (name + phone number per member) — takes 4 minutes
3. Pre-built landscaping templates appear automatically (heat illness, equipment, PPE)
4. Taps "Run first safety briefing" → crew receives SMS links → all 8 sign on their phones → 6 minutes total
5. **First value moment:** Marcus sees 8 signed attestation records with timestamps. He has never had this before.

**Climax:** Workers' comp auditor requests 24-month training records and a written safety program. Marcus opens the app, selects the full date range (past 6 months of active records), clicks "Export PDF." He emails a professional PDF to the auditor in 90 seconds.

**Resolution:** Auditor accepts the records. No fine. Marcus posts in the "Lawn Care Business Owners" Facebook group: "This saved me $5K in an audit. $29/month and worth every penny." Three group members sign up from the post.

**Journey requirements revealed:** Account setup < 5 minutes, bulk crew import or fast individual add, SMS attestation link delivery, bilingual sign-off, one-click date-range PDF export, company logo on export.

---

### Journey 2: Rosa — Daily Attestation with a Bilingual Crew (Primary Usage Pattern)

Rosa is the lead foreman for a 12-person lawn care crew. Her employer gave her the company phone running Jobber. Half her crew communicates primarily in Spanish.

**Opening scene:** 6:45 AM at the staging yard. Rosa has 12 crew members loading equipment for the day. She has 5 minutes before trucks leave. Safety briefing has always been verbal — no record, no Spanish materials.

**Rising action:** Owner enrolled crew in Trade Safety Compliance last week. Rosa opens the app on the company phone. She selects today's topic: "Heat Illness Prevention" (it's June, heat index forecast is 102°F).

**Flow:**
1. Rosa selects "Heat Illness Prevention" briefing → bilingual content displays on her phone
2. She reads the Spanish version aloud for the Spanish-speaking crew members
3. Each crew member receives an SMS on their personal phone: "Rosa has started today's safety briefing. Tap to sign."
4. Crew members tap the link → single screen in their language → tap "I attended and understand" → done
5. Crew signs off in 3 minutes. Records are stored with timestamps and language preference.

**Edge case — crew member without a phone:**
Carlos left his phone at home. Rosa taps "Sign on this device" for Carlos — he taps the sign-off directly on Rosa's company phone. Record is saved with Rosa noted as the witness.

**Resolution:** By 7:00 AM all 12 crew members have a signed heat illness briefing record. Owner sees compliance dashboard: "12/12 signed today." Insurance auditor — if they arrived today — would have complete records.

**Journey requirements revealed:** Foreman-initiated session from owner's crew list, SMS link delivery to individual crew phones, Spanish-language sign-off, proxy sign-off on foreman device with witness notation, daily compliance dashboard for owner.

---

### Journey 3: David — GC Pre-Qualification Packet (Commercial Contract Path)

David runs a 15-person concrete subcontracting company with ~$2M annual revenue. He bids on commercial and institutional projects. A large GC requires a "safety compliance packet" as part of the pre-qualification process — due in 48 hours.

**Opening scene:** David receives the pre-qual requirements document. He needs: written safety program, documented training records for the past 12 months, certificate status for all workers (OSHA 10 cards, First Aid), and at least one incident log.

**Rising action:** David has the records — somewhere. He spent last quarter implementing Trade Safety Compliance after losing a bid. He logs in.

**Flow:**
1. Opens Certificate Tracker → all 15 workers' OSHA 10 cards uploaded with expiry dates → status shows 13 current, 2 expiring next month (not expired — no issue)
2. Opens Training Log → 12 months of training sessions with signatures → heat illness × 4, equipment safety × 3, fall protection × 2
3. Opens Export → selects "Full Compliance Pack" → 12-month date range → PDF generated in 18 seconds
4. PDF includes: company header/logo, crew roster with cert status, training history with signatures, incident log (one near-miss documented in March)
5. David attaches PDF to the pre-qual form and submits

**Resolution:** GC's safety coordinator reviews and approves. David wins the contract. The export that took 18 seconds would have taken a half-day of manual document gathering.

**Journey requirements revealed:** Certificate status summary with expiry visibility across entire crew, multi-session training history spanning 12+ months, one-click "full compliance pack" export option, incident log included in export, company branding on output.

---

### Journey 4: New Hire Onboarding (High-Frequency Edge Case)

Marcus (from Journey 1) hires a new crew member, Tomás, on a Tuesday morning. Landscaping has extreme turnover; Marcus hires 4–6 new workers per season. Each new hire requires documented safety orientation and PPE acknowledgment before they can go on a job site.

**Flow:**
1. Marcus adds Tomás to crew roster (name, phone, language: Spanish) — 90 seconds
2. Selects "New Hire Safety Orientation" session from training log → adds Tomás as attendee
3. Sends orientation via SMS → Tomás signs safety orientation acknowledgment on his phone → record created
4. Marcus uploads Tomás's OSHA 10 card photo → sets expiry date (3 years from issue)
5. Marcus taps "PPE Acknowledgment" template → Tomás signs that he received and understands PPE requirements
6. Done in 8 minutes. Tomás is compliant on day one.

**Resolution:** If the workers' comp insurer audits new-hire onboarding records, Marcus can show a timestamped safety orientation, PPE acknowledgment, and OSHA 10 card upload for every worker — including Tomás hired last Tuesday.

**Journey requirements revealed:** Individual crew member quick-add, pre-built "New Hire Safety Orientation" and "PPE Acknowledgment" training templates, single-crew-member session creation, certificate upload directly from crew member profile, Spanish sign-off for new hire.

---

### Journey 5: Certificate Expiry Alert (Retention and Operational Value)

Three months after Marcus signed up, the app sends an alert: "Miguel's First Aid/CPR certificate expires in 30 days."

**Flow:**
1. Marcus receives email (and SMS): "Miguel Rodriguez — First Aid/CPR — expires July 15, 2026 — 30 days remaining"
2. Marcus texts Miguel: "Your First Aid card expires soon, need you to get recertified"
3. Miguel gets recertified, gives Marcus his new card
4. Marcus opens app → Miguel's profile → certificate section → uploads new card photo → updates expiry date → alert clears
5. Certificate tracker shows Miguel: First Aid — "Expires July 14, 2027" — green status

**Without the app:** Miguel's First Aid card would have expired unnoticed. A commercial property job would have required proof of First Aid certification on site — crew would have been turned away at the gate, costing a half-day of revenue and a client relationship.

**Resolution:** Marcus tells a peer in the Facebook group: "The cert expiry alerts alone are worth $29/month — I've never had someone show up without a current cert since I started using it."

**Journey requirements revealed:** Automated 30/60/90-day email + SMS expiry alerts, alert content includes crew member name and certificate type, one-tap link from alert directly to upload screen, immediate cert status update after upload.

---

### Journey Requirements Summary

| Capability Revealed | Journeys |
|---|---|
| Fast crew roster setup (< 5 min for 8–15 people) | 1, 3 |
| SMS attestation link to individual crew phones | 1, 2, 4 |
| Bilingual English/Spanish sign-off | 2, 4 |
| Proxy sign-off on foreman device with witness notation | 2 |
| Pre-built landscaping/construction safety briefing topics | 1, 2 |
| New Hire Safety Orientation and PPE Acknowledgment templates | 4 |
| Per-crew-member training history spanning 12+ months | 3 |
| Certificate upload with expiry date per crew member | 3, 4 |
| Automated 30/60/90-day expiry email + SMS alerts | 5 |
| Crew-level cert status dashboard (green/yellow/red) | 3, 5 |
| Incident report with photo and corrective actions | 3 |
| One-click OSHA-ready PDF export with date range | 1, 3 |
| Company logo and branding on PDF | 1, 3 |
| Daily compliance dashboard (who signed today) | 2 |

---

## Domain-Specific Requirements

### Compliance & Regulatory

**OSHA Recordkeeping (29 CFR 1904):**
- OSHA requires employers to maintain records of work-related injuries and illnesses (OSHA 300 log) and make them available to employees and inspectors on request
- Training records must be retained for the duration of employment plus 3 years for some hazardous materials training
- PDF export must present data in a format suitable for OSHA inspection presentation
- Incident reports must capture date/time, nature of injury or illness, crew member identity, and corrective actions

**HazCom / GHS Training (29 CFR 1910.1200):**
- OSHA requires chemical hazard training be conducted in a language and vocabulary workers understand
- Landscaping crews handling pesticides, herbicides, and fertilizers are covered
- The Spanish-language attestation workflow directly satisfies this requirement
- Training records must show topic (chemical safety), date, and trainee signature

**Workers' Compensation Insurer Requirements:**
- No federal standard — requirements vary by insurer and state
- Common audit requests: written safety program documentation, training logs for the past 12–24 months, certificate currency (OSHA 10, First Aid), incident reports with corrective action evidence
- The OSHA-ready PDF export and Certificate Tracker satisfy the most common insurer audit documents
- Product must not represent itself as providing legal compliance advice — it provides recordkeeping tools

**Pesticide Applicator License Tracking:**
- 46 states require a pesticide applicator license for commercial lawn care
- License expiry must be tracked per crew member
- Certificate Tracker must support "pesticide applicator license" as a certificate type

**CDL Medical Certificate (FMCSA 49 CFR 391):**
- Crew members who operate commercial vehicles (e.g., trucks with trailers over 10,001 lbs GVWR) require a valid DOT medical certificate
- Certificate Tracker must support "CDL Medical Certificate" as a certificate type with expiry tracking

### Technical Constraints

- All uploaded documents (certificates, incident photos) must be stored with access restricted to the account owner and (in Phase 2) designated foremen
- Signed attestation records must be immutable after creation — edits or deletions are not permitted to preserve audit integrity
- PDF exports must include a generation timestamp to demonstrate when the export was produced
- Audit trail: system must log who created, modified, or deleted crew member records (owner-level audit log)

### Risk Mitigations

| Risk | Mitigation |
|---|---|
| Product misrepresented as legal compliance | Consistent "recordkeeping tool" framing; disclaimer on exports: "This document is a safety recordkeeping export and does not constitute legal compliance advice" |
| Records subpoenaed in litigation | Records are factual (what was signed, by whom, when) — no legal exposure beyond accurate recordkeeping |
| OSHA mandate changes scope of required records | Product captures more than currently required minimum — already compliant with any likely near-term changes |
| Bilingual translation accuracy | Native Spanish speaker review of all translated content before launch; community feedback mechanism |

---

## SaaS B2B — Project-Type Requirements

### Multi-Tenancy Model

- Each company account is a fully isolated tenant: crew data, records, certificates, and exports are not visible across accounts
- Single owner per account in MVP; no sub-account or multi-location structure in MVP
- Account identified by email address and company name; no SSO in MVP

### Authentication & Access

- Email + password authentication with email verification on signup
- Password reset via email link
- Crew members do not have accounts — they access attestation sign-off via unique time-limited SMS links
- Proxy sign-off (Journey 2 edge case) requires owner to be authenticated on the device used
- In MVP: single owner role; no foreman or crew member login accounts

### Subscription & Billing

- Stripe integration for $29/month subscription
- 14-day free trial on signup (no credit card required)
- LTD (Lifetime Deal) redemption flow for AppSumo codes — code entered at signup converts to lifetime account with up to 20 crew members
- Account limits enforced: MVP cap at 20 crew members per account; Growth tier cap at 50
- Owner receives email notification 7 days before trial expiration

### Notification Infrastructure

- SMS delivery via Twilio (or equivalent) for attestation links and expiry alerts
- Email delivery via Sendgrid (or equivalent) for expiry alerts, trial reminders, and export notifications
- SMS links must be unique per crew member per session and expire after 48 hours
- Crew members who have not signed within 2 hours of session start receive one automated SMS reminder

### Data Retention

- Signed attestation records retained for 3 years from creation date
- Deleted crew member records flagged as inactive but not purged (legal hold consideration)
- Certificate images retained for 3 years from upload or until owner explicitly deletes
- Upon account cancellation: owner receives 30-day export window before data deletion

### Integration Points (MVP)

- No third-party integrations in MVP
- Phase 2: Jobber webhook integration for job-triggered safety briefing prompts

---

## Functional Requirements

### Crew Management

- FR1: Owner can add a crew member with name, role, phone number, and language preference (English or Spanish)
- FR2: Owner can deactivate a crew member, preserving all historical records while removing them from active crew lists
- FR3: Owner can view the complete crew roster with a compliance status indicator per member (training current / cert expiring / cert expired / attestation not completed today)
- FR4: Owner can edit crew member profile details (name, role, phone, language)
- FR5: Owner can view a per-crew-member compliance summary showing training history, certificate status, and attestation frequency

### Safety Training Log

- FR6: Owner or foreman can create a training session with topic, date, trainer name, and a list of attending crew members
- FR7: Each crew member on a training session receives an SMS link to provide a digital e-signature attesting to attendance
- FR8: Crew members can sign training attendance directly on the owner's or foreman's device when SMS is impractical
- FR9: System generates an immutable timestamped training record per attendee, including session metadata and signee identity
- FR10: Owner can view a crew member's complete training history, sorted by date, showing topic and attendance per session
- FR11: Owner can view a training topic summary showing which crew members have and have not attended a given training
- FR12: System includes pre-built training topic templates for: Heat Illness Prevention, Rotating Blade Equipment Safety, Pesticide/Chemical Handling (HazCom), Roadside Traffic Safety, Fall Protection, PPE Acknowledgment, New Hire Safety Orientation

### Certificate Tracker

- FR13: Owner can upload a certificate image or PDF per crew member with certificate type, issue date, and expiry date
- FR14: Supported certificate types include: OSHA 10-Hour Card, OSHA 30-Hour Card, First Aid/CPR, Pesticide Applicator License, CDL Medical Certificate, and a custom/other field
- FR15: System sends automated email and SMS alerts to the account owner at 90, 60, and 30 days before a certificate expiry date
- FR16: Crew roster displays a per-member certificate status using color-coded indicators: current (green), expiring within 60 days (yellow), expired (red)
- FR17: Owner can update a certificate record by uploading a renewed certificate and updating the expiry date, which clears the active alert for that certificate

### Daily Safety Attestation

- FR18: Owner or foreman can initiate a daily safety briefing session by selecting a pre-built topic or entering a custom topic and briefing text
- FR19: Pre-built briefing topics include landscaping-specific hazards: Heat Illness Prevention, Equipment Safety (rotating blades, power tools), Chemical Handling (pesticides, herbicides), Roadside / Traffic Safety, Fall Protection, PPE Use and Inspection
- FR20: Owner or foreman can select individual crew members or all active crew members as recipients for a briefing session
- FR21: Selected crew members receive an SMS with a unique time-limited link (expires 48 hours) to view the briefing and complete sign-off
- FR22: Crew members who have not signed within 2 hours of session initiation receive one automated SMS reminder
- FR23: Crew member sign-off screen displays the briefing content in English or Spanish based on the crew member's language preference
- FR24: Crew member completes sign-off with a single tap confirming attendance and comprehension; no account creation required
- FR25: Owner or foreman can complete a proxy sign-off for a crew member on the owner/foreman's authenticated device, with the foreman's identity recorded as witness
- FR26: System stores an immutable timestamped attestation record per crew member per session, including crew member identity, language displayed, session topic, sign-off timestamp, and sign-off method (SMS link or proxy)
- FR27: Owner can view a daily compliance dashboard showing which crew members have and have not signed today's briefing

### Incident Reporting

- FR28: Owner or foreman can create an incident report with: date/time, job site location, crew member(s) involved, incident type (injury, near-miss, property damage, environmental), description, and corrective actions taken
- FR29: Owner or foreman can attach 1 to 5 photos to an incident report
- FR30: Owner can view a chronological incident log showing all submitted reports
- FR31: Owner can export a single incident report as a PDF

### Compliance Export

- FR32: Owner can generate an OSHA-ready PDF export for a selectable date range (up to 36 months)
- FR33: The compliance export PDF includes: company name and logo, crew roster with compliance status summary, complete training session log with signee signatures, certificate status with expiry dates for all crew members, and chronological incident report archive
- FR34: The compliance export PDF includes a generation timestamp and a disclaimer identifying it as a safety recordkeeping export
- FR35: Owner can download the compliance export PDF or receive it via email

### Account & Company Setup

- FR36: Owner can create a company account with company name, trade type (landscaping / lawn care / construction / other), and optional logo upload
- FR37: Trade type selection pre-populates the applicable safety briefing template library and certificate type suggestions
- FR38: Owner can manage subscription status, view billing history, and cancel subscription from within the account settings
- FR39: Owner can redeem an AppSumo LTD code at signup or within account settings to convert to a lifetime account

### Notifications & Alerts

- FR40: Owner receives an in-app and email daily summary when fewer than 80% of active crew members have completed the day's safety briefing by 3:00 PM local time (configurable threshold)
- FR41: Owner receives email and SMS alerts for certificate expiries at 90, 60, and 30 days before the expiry date, specifying crew member name and certificate type
- FR42: Owner receives an email 7 days before free trial expiration with a link to subscribe

---

## Non-Functional Requirements

### Performance

- Web app (dashboard and management screens) loads in under 3 seconds on a 4G mobile connection for the 95th percentile of page loads
- Crew member attestation sign-off flow (SMS link → briefing display → sign-off confirmation) completes in under 10 seconds on a 4G connection on Android 8+ devices
- OSHA-ready PDF export generates and is available for download in under 30 seconds for date ranges up to 36 months
- SMS attestation links are delivered within 5 minutes of session initiation for 99% of sends

### Security

- All uploaded files (certificates, incident photos) and database records are encrypted at rest using AES-256
- All data in transit is encrypted using TLS 1.2 or higher
- Attestation SMS links are unique per crew member per session, time-limited (expires 48 hours), and single-use (invalidated after sign-off)
- Signed attestation records are immutable: no edit or delete capability exists after a sign-off is recorded
- Access to all account data is isolated by company account with no cross-tenant data visibility
- Owner-level audit log records all creates, updates, and deactivations of crew member profiles

### Reliability

- Attestation delivery service and certificate expiry notification service maintain 99.5% uptime, measured monthly
- Zero data loss tolerance for uploaded certificates and signed attestation records: daily backups with point-in-time recovery capability for the prior 30 days
- PDF export service degradation (unavailability > 10 minutes) triggers automated owner notification

### Accessibility & Language

- All crew-facing screens (attestation sign-off, training e-signature) display correctly on Android 8+ and iOS 14+ mobile browsers without app installation
- Spanish translation covers 100% of crew-facing UI surfaces (briefing content, sign-off screen, confirmation messages, SMS content) before public launch
- Spanish briefing templates are reviewed by a native Spanish speaker for accuracy and appropriate register for trade workers
- Owner-facing web app meets WCAG 2.1 AA for color contrast and keyboard navigation on primary flows

### Scalability

- System architecture supports 500 concurrent active company accounts in MVP without performance degradation
- Database and file storage design supports linear horizontal scaling to 5,000+ accounts within 12 months without schema changes
- SMS and email delivery infrastructure can scale to 10,000 sends per day without throttling (Twilio enterprise tier ready)

### Data Retention & Compliance

- Signed attestation records are retained for a minimum of 3 years from creation date
- Deleted or deactivated crew member records are flagged inactive but not purged, preserving audit trail integrity
- Upon account cancellation, owner has 30 days to export all records before data deletion; owner is notified by email at cancellation and at 7 days remaining
- Compliance export PDF includes a generation timestamp to establish the date the report was produced

---

## Appendix: Key Decisions & Rationale

| Decision | Rationale |
|---|---|
| PWA over native app for MVP | Crew sign-off via SMS link requires no app install, reducing friction for low-tech crew members; saves 6–8 weeks of native development |
| Flat rate $29/month (not per-seat) | Per-seat pricing is the primary objection to SafetyCulture/Safesite; flat rate is the headline differentiator; cap at 20 crew enforces tier limits |
| Workers' comp framing over OSHA framing | Insurer audit letters are the active near-term trigger; OSHA inspections are rare for small contractors; insurer framing requires no regulatory change |
| SMS link for crew sign-off (not email) | Landscaping crews have near-100% smartphone penetration for SMS; email open rates for low-tech workers are unreliable; SMS requires no account |
| Spanish first (not "coming soon") | 40–60% of landscaping crews are native Spanish speakers; half-translated product fails OSHA HazCom requirement and signals inauthenticity |
| Immutable attestation records | Prevents self-serving record modification under audit pressure; ensures records are legally credible; mirrors paper signature integrity |
| Jobber integration deferred to Phase 2 | Requires API partnership negotiation and Jobber app store approval; MVP validates demand independently first |
