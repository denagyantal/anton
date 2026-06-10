---
stepsCompleted: [step-01-init, step-02-discovery, step-02b-vision, step-02c-executive-summary, step-03-success, step-04-journeys, step-05-domain, step-06-innovation, step-07-project-type, step-08-scoping, step-09-functional, step-10-nonfunctional, step-11-polish, step-12-complete]
inputDocuments:
  - _bmad-output/planning-artifacts/brief-chiropractic-ehr-billing.md
  - ideas/shortlisted/chiropractic-ehr-billing.md
  - _bmad-output/planning-artifacts/market-chiropractic-ehr-billing.md
workflowType: 'prd'
lastStep: step-12-complete
date: '2026-06-10'
author: 'Root'
project: 'chiropractic-ehr-billing'
classification:
  projectType: saas_b2b
  domain: healthcare
  complexity: high
  projectContext: greenfield
---

# Product Requirements Document — Chiropractic EHR + Billing (Flat-Rate, All-Inclusive)

**Author:** Root
**Date:** 2026-06-10
**Project:** chiropractic-ehr-billing

---

## Executive Summary

Solo and small-group chiropractors in the United States are systematically overcharged for practice management software. Advertised prices of $119–$299/month hide clearinghouse fees ($60–$89/month), annual maintenance charges, denial-handling fees, and OA45 add-ons that push true monthly costs to $159–$650+. No competitor in the $39–$79/month tier delivers full EHR + integrated clearinghouse + insurance billing — the gap is structurally unoccupied.

This product eliminates that deception by design: one flat price ($79/month) covers scheduling, chiropractic-specific SOAP notes, integrated clearinghouse, ANSI 837P claim submission, ERA auto-posting, Medicare AT modifier compliance automation, and hybrid cash + insurance workflow. No per-claim fees. No add-ons. No surprise invoices. No auto-logout mid-patient.

The addressable market is 28,000–35,000 solo insurance-billing DCs. Even 1.5% penetration (450 customers) generates $35,000+ MRR. The entry wedge is mathematical: a solo DC switching from ChiroFusion saves $80–$110/month. The brand position — radical pricing transparency in a market known for deception — is durable and defensible in a way that features alone are not.

### What Makes This Special

**Pricing transparency as competitive moat.** Competitors cannot respond by bundling all fees into $79/month without destroying their own revenue. The first mover who earns the "honest vendor" brand in healthcare software earns long-term switching resistance. This product's pricing page shows competitors' true costs; ours has no fine print.

**Medicare compliance built into clinical workflow.** The CMS CERT Program found 33.6% of chiropractic Medicare claims had documentation errors in 2024. AT modifier prompts, P.A.R.T. documentation fields, active treatment justification, and 30-day re-evaluation alerts are native to every SOAP note — not a compliance module, not a bolt-on. This converts a market-wide liability into a subscription differentiator.

**Session-persistent UX designed for clinical reality.** ChiroSpring — the highest-rated competitor at 4.92/5 — is documented by users as constantly auto-logging out mid-patient session. This product defaults to 8-hour session timeouts with HIPAA-compliant screen lock (not full logout). This is a table-stakes clinical workflow requirement no incumbent adequately solves.

**First integrated clearinghouse at $79/month.** Jane App, ChiroFusion, and every other sub-$150 competitor charges clearinghouse as an add-on ($60–$89/month) or excludes insurance billing entirely (ClinicSense). This product's clearinghouse is included — not bolted on, not separately invoiced.

## Project Classification

- **Project Type:** SaaS B2B (healthcare vertical)
- **Domain:** Healthcare — chiropractic practice management
- **Complexity:** High (HIPAA regulated, clearinghouse API integration, Medicare compliance rules, claims processing)
- **Project Context:** Greenfield — new product, no existing codebase or legacy data
- **Primary Market:** United States solo and small-group chiropractic practices

---

## Success Criteria

### User Success

A chiropractor using this platform is successful when:

1. **Billing confidence:** Insurance claims submitted Monday receive ERA confirmations by Wednesday with no unexplained denials. First-pass claim acceptance rate exceeds 96% (vs. 94% industry average).
2. **Medicare compliance:** AT modifier appears automatically on every Medicare spinal manipulation SOAP note. The DC never receives an AT modifier denial due to missing documentation.
3. **Pricing trust:** Monthly invoice matches exactly what they agreed to pay on signup. Zero unexplained line items. Zero invoice variance for the lifetime of the subscription.
4. **Clinical continuity:** The system never forces a full re-login during a patient encounter. If a re-authentication is required after idle time, a PIN unlock suffices without losing the open note.
5. **Onboarding speed:** A DC can submit their first real insurance claim within 14 days of trial start without needing to call support.

**User success signal:** A DC who achieves all five outcomes above becomes an active referral source within 90 days — the flywheel that makes the CAC model work.

### Business Success

| Milestone | Target | Timeframe |
|-----------|--------|-----------|
| Trial-to-paid conversion | 25%+ | Ongoing |
| Paying customers | 100 ($7,900 MRR) | Month 6 |
| Paying customers | 500 ($39,500 MRR) | Month 12 |
| Paying customers | 1,500+ ($130,000+ MRR) | Month 36 |
| AppSumo LTD buyers | 300–500 at $399 | Launch month |
| Monthly churn | <3% (months 1–6), <1.5% (month 12+) | Ongoing |
| Capterra/G2 rating | 4.7+ with 20+ reviews | Month 6 |
| Customer Acquisition Cost | <$200 blended | Ongoing |
| LTV:CAC ratio | >10:1 | Quarterly |

**Go/no-go decision point (Month 6):** MRR below $5,000 and churn above 5% → reassess pricing model and channels before Phase 2. MRR above $7,900 and churn below 3% → accelerate Phase 2 development.

### Technical Success

1. **Clearinghouse reliability:** Claim transmission success rate ≥99.5% (measured at EDI submission, not acceptance). Clearinghouse integration never the cause of billing delays.
2. **HIPAA compliance:** Zero PHI breach incidents. BAA executed at account creation. All PHI encrypted at rest (AES-256) and in transit (TLS 1.3+). Audit logs maintained for 6 years per HIPAA retention rules.
3. **Session stability:** Zero documented mid-session auto-logout incidents. Session timeout enforced via screen lock (PIN re-auth), not full application logout.
4. **Invoice accuracy:** Zero billing events where a customer's invoice exceeds their plan price. Automated reconciliation between Stripe charges and plan pricing runs nightly.
5. **System availability:** 99.9% uptime measured monthly (≤43.8 minutes/month downtime). Planned maintenance windows communicated 7 days in advance. Zero unplanned downtime events lasting more than 60 minutes.

### Measurable Outcomes

| KPI | Target | Measurement Method |
|-----|--------|--------------------|
| First-pass claim acceptance rate | >96% | Clearinghouse acceptance data |
| Medicare claim error rate | <5% | Medicare-specific denial reports |
| Net Promoter Score | >50 (M6), >65 (M12) | In-app NPS survey |
| Trial claim submission (within 7 days) | >60% of trials | Product analytics |
| Session timeout incidents | 0 | Application error logs |
| Invoice variance incidents | 0 | Stripe vs. plan price reconciliation |
| Monthly claims per customer | 100–150 (solo DC benchmark) | Clearinghouse transaction logs |
| r/Chiropractic unprompted mentions | Positive sentiment | Manual monitoring |

---

## Product Scope

### MVP — Minimum Viable Product (Weeks 1–14)

The MVP is a **revenue MVP**: it must support a solo DC running a full insurance + cash practice from day one. No workflow requiring the DC to leave the platform or use a separate tool.

**Core capabilities for MVP:**
- Chiropractic-specific SOAP notes with Medicare compliance automation
- Appointment scheduling (day/week/month views, online booking widget, SMS/email reminders)
- Integrated insurance billing with clearinghouse (ANSI 837P, 270/271 eligibility, 835 ERA auto-posting)
- Cash + membership billing (prepaid packages, wellness plans, copay collection)
- Session persistence (8-hour default timeout, PIN re-auth screen lock)
- HIPAA compliance infrastructure (BAA, AES-256 encryption, audit logs, RBAC)
- Patient management (demographics, intake forms, insurance cards, patient portal)
- Financial reporting (collections, AR aging, claim status, daily summary)
- Data migration tooling (CSV import for patient demographics)

**MVP is validated when:**
- 50+ customers have submitted insurance claims with first-pass acceptance ≥96%
- Medicare-patient cohort shows <5% AT modifier denial rate
- Zero customers have received a monthly invoice differing from $79
- Zero mid-session auto-logout incidents documented
- Monthly churn below 3% for three consecutive months
- 300+ AppSumo LTD customers onboarded without clearinghouse cost overrun

### Growth Features (Phase 2, Months 7–18)

- AI SOAP note dictation (voice-to-text with chiropractic-specific vocabulary)
- OA45 denial automated response workflow
- Multi-provider pricing tier ($149/month, up to 3 providers)
- Patient recall automation (triggered by appointment gaps vs. documented care plan)
- Outcomes tracking module (VAS scores, functional improvement graphing, re-evaluation reports)
- Referral program (1 month free per referred customer who activates billing)
- Chiropractic Economics advertising and CE conference presence
- Enhanced practice analytics dashboard

### Vision — Future Expansion (Phase 3, Months 19–36+)

- Physical therapy module (PT-specific CPT codes, functional movement documentation)
- Acupuncture module (billing complexity, natural adjacency)
- Multi-location practice management
- Third-party billing service portal (manage multiple client practices from one dashboard)
- Patient outcomes analytics exported to payer portals for value-based care programs
- Direct payer API integrations (bypassing clearinghouse for major payers)
- Employer wellness program billing
- Predictive denial scoring (claim acceptance probability before submission)

---

## User Journeys

### Journey 1: Marcus — The Burdened Practitioner (Primary User, Success Path)

**Persona:** Marcus, 41, solo chiropractor, suburban practice, 10 years in. Currently on ChiroFusion, paying $189/month (advertised as $129). He's been on ChiroFusion three years and still can't figure out why his invoice is always $40–$60 more than what he signed up for.

**Opening Scene:** Marcus receives his ChiroFusion invoice on a Tuesday. The OA45 denial handling fee is back — $22 this month. He opens a browser tab and types "ChiroFusion alternative no hidden fees." A comparison article from SpryPT.com loads. He sees a table: ChiroFusion at $159–$189/month true cost. Ours at $79/month, clearinghouse included, zero add-ons. He clicks through.

**Rising Action:** On our landing page, he sees the "True Cost Comparison" above the fold. He spends 4 minutes reading reviews on Capterra. He signs up for the 60-day trial — no credit card required. He imports his patient demographics via CSV (28 minutes). He explores the scheduling view; it looks familiar. He opens a SOAP note for a Medicare patient and notices the AT modifier prompt appear automatically before he even touches the CPT field. He runs an eligibility verification on a patient — 90 seconds, result appears in the patient chart.

**Climax:** Day 14 of the trial, Marcus submits his first real insurance claim batch — 22 claims including 4 Medicare. He gets EDI submission confirmations within 4 minutes. Three days later, ERAs auto-post to patient accounts. Zero denials. He calls his office manager over. "Look — they already posted. And there's no separate clearinghouse invoice."

**Resolution:** Marcus converts to paid after 21 days. His first monthly invoice: $79.00. His second: $79.00. After 90 days he mentions the platform at an ACA chapter meeting. Two DCs ask for the URL.

**Capabilities revealed:** SOAP note workflow with Medicare prompts, eligibility verification, claim batch submission, ERA auto-posting, patient CSV import, invoice transparency.

---

### Journey 2: Marcus — Edge Case (Medicare Denial Recovery)

**Opening Scene:** Three weeks into using the platform, Marcus submits 15 Medicare claims. Two come back denied with reason code CO-4 (AT modifier missing on re-evaluation CPT 98943).

**Rising Action:** The denial queue displays both denials with reason codes. Marcus clicks into the first denied claim. The system shows the specific documentation gap: the claim was submitted with 98943 but the SOAP note lacked the re-evaluation justification field. He realizes he submitted from a template he imported from ChiroFusion that didn't trigger the AT modifier prompt.

**Climax:** He opens the denial, clicks "Correct and Resubmit." The system re-opens the associated SOAP note with the missing fields highlighted. He completes the P.A.R.T. findings and active treatment justification. The corrected claim is resubmitted. He also audits his custom template and updates it to match the compliant template.

**Resolution:** The corrected claims are accepted. Marcus marks his custom templates for review and spends 20 minutes aligning them with the compliant template structure. No further AT modifier denials in the next 60 days.

**Capabilities revealed:** Denial queue with reason code display, claim correction workflow, SOAP note template management, AT modifier validation on submission.

---

### Journey 3: Priya — The Clean Slate (New Graduate)

**Persona:** Priya, 28, opening her first practice 6 months after graduation. She'll accept insurance from day one. She has no legacy data and no established workflow — the ideal early adopter.

**Opening Scene:** Priya is in month 2 of setting up her practice. She's comparing ChiroFusion ($129/month + clearinghouse), ChiroSpring ($149/month), and our platform ($79/month, all-in). Her cohort group chat is split. She schedules a 30-minute onboarding call.

**Rising Action:** During onboarding, she sets up her payer list, uploads her NPI and taxonomy codes, and creates her first SOAP note template. A setup wizard walks her through AT modifier requirements for Medicare. She creates a test Medicare patient, runs an eligibility check, and walks through a sample SOAP note. The P.A.R.T. fields appear. The 30-day re-eval flag shows her when a patient will need re-evaluation documentation.

**Climax:** Her first real Medicare patient arrives in week 3 of practice. Priya completes the SOAP note — the AT modifier prompt triggers, the P.A.R.T. fields are filled, the active treatment justification is documented. She submits the claim the same day. It's accepted first-pass.

**Resolution:** Priya refers two classmates in her first month. She posts in her DC cohort group: "I haven't had a Medicare denial yet. The software basically tells you exactly what to document before you submit."

**Capabilities revealed:** Onboarding wizard, NPI/taxonomy setup, payer list management, Medicare compliance walkthrough, patient portal, first-claim submission flow.

---

### Journey 4: Front Desk Staff — Daily Operations (Secondary User)

**Persona:** Sandra, 38, front desk coordinator for a solo DC practice. She manages the schedule, patient check-in, copay collection, and end-of-day claim batching. She's logged into the system from 8 AM to 6 PM. She tried ChiroSpring at her last practice and stopped using it because it would log her out every time she stepped away from the desk.

**Opening Scene:** Sandra arrives at 8:00 AM and logs in. She switches to a 6-hour session timeout (her preference) via her user settings. She opens the day's schedule — 38 patients. Color coding shows insurance patients in blue, cash/wellness in green, new patients in orange.

**Rising Action:** Throughout the day, Sandra checks in 38 patients, collects copays via the integrated Stripe terminal for 12 insurance patients, applies prepaid package visits for 6 wellness members. At 5:30 PM, she runs the end-of-day claim batch — 26 insurance claims auto-populate from the day's completed SOAP notes. She reviews, confirms, and submits. At 6:00 PM she locks the screen before leaving. The system goes to PIN-lock mode — not full logout.

**Resolution:** The next morning Sandra unlocks with her PIN. Her session from yesterday is intact. No re-login required. The claim confirmations from yesterday's batch are already visible in the claim status feed.

**Capabilities revealed:** Role-based session configuration, appointment scheduling, patient check-in flow, copay collection via Stripe, prepaid visit package application, end-of-day claim batching, screen lock (not logout) on idle.

---

### Journey 5: Account Owner — Billing Audit (Admin/Business User)

**Persona:** Marcus (same DC from Journey 1), reviewing his business finances on the last Friday of the month.

**Opening Scene:** Marcus opens the Financial Reporting tab. He runs the monthly collections report for the current month. He sees total billed ($18,400), total collected ($14,200), outstanding AR by aging bucket (30/60/90/120+), and a breakdown by payer.

**Rising Action:** He notices a Blue Cross claim from 6 weeks ago sitting in the 60+ day bucket. He clicks into the AR aging detail. The claim status shows it was accepted by the clearinghouse but no ERA has been received. He checks the claim status and sees a pending notation. He calls the payer using the phone number stored in the payer profile.

**Climax:** He opens the monthly invoice tab. His Stripe invoice for the current month: $79.00. No line items other than the base subscription.

**Resolution:** Marcus downloads the collections report as a PDF for his accountant. He flags the pending Blue Cross claim for follow-up next week. His total time on billing admin this month: 35 minutes.

**Capabilities revealed:** Collections report by date/provider/payer, AR aging (30/60/90/120+ buckets), claim status detail, payer profile with contact info, Stripe billing integration, invoice download.

---

### Journey Requirements Summary

| Journey | Capability Areas Revealed |
|---------|--------------------------|
| Marcus — Success Path | SOAP notes + Medicare compliance, eligibility, claim batch, ERA posting, CSV import, invoice |
| Marcus — Denial Recovery | Denial queue, claim correction, SOAP note re-edit, resubmission, template audit |
| Priya — New Graduate | Onboarding wizard, payer setup, NPI/taxonomy, Medicare walkthrough, patient portal, first claim |
| Sandra — Front Desk | RBAC session config, scheduling, check-in, copay, prepaid packages, batch claims, screen lock |
| Marcus — Billing Audit | Collections reports, AR aging, claim status, payer profiles, Stripe billing, invoice download |

---

## Domain-Specific Requirements

### Compliance & Regulatory

**HIPAA Technical Safeguards (45 CFR §164.312):**
- All PHI encrypted at rest (AES-256) and in transit (TLS 1.3+)
- Automatic session timeout after configurable idle period; re-authentication via PIN (screen lock, not logout)
- Audit controls: all PHI access, modification, and transmission events logged with user ID, timestamp, and action type
- Audit logs retained for minimum 6 years
- Emergency access procedure: break-glass access for account owner if provider is incapacitated
- Automatic logoff implemented as screen lock with PIN, not full application logout

**HIPAA Administrative Safeguards:**
- Business Associate Agreement (BAA) executed automatically at account creation (click-through, not manual)
- Role-based access control: DC, Chiropractic Assistant, Front Desk, Billing roles with documented permission sets
- User access review: account owner can audit all active users and permissions at any time
- Sanction policy: account owner can suspend or terminate staff user access immediately

**HIPAA Physical Safeguards:**
- Hosting on AWS HIPAA-eligible services (covered by AWS BAA)
- No PHI stored in browser local storage or client-side caches
- Patient data isolation between practices (no data bleeding between tenant accounts)

**Medicare Chiropractic Documentation Requirements (2025):**
- AT modifier required on every spinal manipulation CPT code (98940, 98941, 98942) for Medicare patients; system auto-prompts before claim submission
- P.A.R.T. (Pain, Asymmetry, Range of motion, Tissue changes) documentation fields required in Medicare SOAP notes; presented as required fields, not optional
- Active treatment justification: must document that patient is progressing toward a defined functional goal; free-text field with character minimum (50 characters)
- Re-evaluation documentation: system flags Medicare patients who have not had a documented re-evaluation within 30 visits or as specified in care plan
- Acute vs. maintenance care distinction: SOAP note requires DC to classify treatment as acute/subacute (AT modifier eligible) vs. maintenance (AT modifier not applicable)

**Medicare Secondary Payer (MSP) Compliance:**
- System prompts MSP questionnaire for Medicare patients during intake and annually
- MSP responses stored in patient record
- Claims submitted with correct MSP coordination of benefits information

**Clearinghouse Regulatory Compliance:**
- ANSI X12 837P format for claim submission (v5010)
- ANSI X12 270/271 for eligibility verification
- ANSI X12 835 for ERA receipt and posting
- NPI (Type 1 and Type 2) required on all claims
- Taxonomy codes validated against NUCC taxonomy table

### Technical Constraints

**Data Residency:** All PHI stored in US-East or US-West AWS regions. No PHI transmitted outside US without explicit HIPAA authorization framework.

**Encryption Standards:** AES-256 at rest (AWS KMS managed keys), TLS 1.3+ in transit. Key rotation annually. No PHI in application logs.

**Audit Log Integrity:** Audit logs append-only (no deletion, no modification). Stored in a separate data store from application data. Log integrity verified via hash chain.

**Availability Requirements:** 99.9% monthly uptime. Maintenance windows only during off-peak hours (1–5 AM local practice time). Clearinghouse integration monitored with automated failover between primary (Availity) and backup (Office Ally) clearinghouses.

### Integration Requirements

**Primary Clearinghouse (Availity):**
- ANSI 837P claim submission with acknowledgment tracking
- 270/271 real-time eligibility verification (target response <5 seconds)
- 835 ERA receipt and automatic posting
- Claim status inquiry (276/277) for outstanding claims
- BAA with Availity required before going live with any PHI

**Backup Clearinghouse (Office Ally):**
- Identical integration for failover
- Automatic failover if Availity API returns errors for >5 consecutive minutes

**Payment Processing (Stripe):**
- Stripe as payment processor for cash, copay, and membership billing
- Stripe Connect for multi-provider practices (Phase 2)
- PCI DSS compliance handled by Stripe; application never stores raw card data
- Stripe customer and subscription objects linked to patient records

**Patient Portal:**
- HTTPS web portal (no native app for MVP) for patient-facing features
- Appointment booking, intake form completion, billing statement view

### Risk Mitigations

| Risk | Mitigation |
|------|-----------|
| Availity API access delayed | Begin developer account setup 90 days pre-launch; Office Ally as backup; staggered beta if needed |
| HIPAA breach | AWS HIPAA-eligible infrastructure; HIPAA consultant pre-launch; cyber liability insurance; BAA automation |
| Medicare rule changes (annual) | CMS MLN Matters subscription; 2 weeks/year allocated for fee schedule updates; compliance-first architecture makes updates modular |
| Clearinghouse cost model exceeds projections | Per-customer claim volume dashboard; volume rate negotiation at 500+ customers; >300 claims/month triggers conversation about high-volume plan |

---

## SaaS B2B Specific Requirements

### Project-Type Overview

This is a B2B SaaS platform targeting healthcare professionals (chiropractors) as primary buyers and users. Key characteristics:
- **Buyer = Primary User:** The DC who pays the subscription is also the primary software user; no enterprise procurement layer
- **Team Usage:** Secondary users (front desk, CAs) operate within the DC's account; RBAC defines their permissions
- **High Switching Cost:** HIPAA-compliant data migration, workflow retraining, and clearinghouse re-credentialing create high retention but also high acquisition friction
- **Compliance-Bound:** HIPAA and Medicare compliance are non-negotiable; they are not differentiators but baseline requirements

### Technical Architecture Considerations

**Multi-Tenancy Model:**
- Single-tenant data isolation per practice (each practice has isolated database schema or separate schema namespace)
- No data sharing between practice tenants
- Cross-tenant access prohibited at application and database layers
- MVP: one practice per account; Phase 2 adds multi-location support

**Authentication & Session Management:**
- Email + password authentication for initial login
- Session tokens with configurable expiry (default 8 hours of inactivity)
- Screen lock (PIN re-auth) triggered after configurable idle period within active session
- Full logout clears session token from server; screen lock does not
- Multi-factor authentication (MFA) offered but not required for MVP

**Role-Based Access Control (RBAC):**

| Role | Scheduling | SOAP Notes | Claims | Financial Reports | User Management |
|------|-----------|-----------|--------|------------------|----------------|
| DC (Owner) | Full | Full | Full | Full | Full |
| Billing Staff | Read-only | No access | Full | Full | No access |
| Front Desk | Full | No access | Submit only | No access | No access |
| Chiropractic Assistant | Read-only | Create/Edit (own only) | No access | No access | No access |

**Subscription & Billing:**
- Stripe for subscription management ($79/month, billed monthly)
- LTD (AppSumo) customers tracked with claim-volume cap enforcement in application layer
- Automated nightly reconciliation: Stripe charges vs. plan price (alerts on variance)
- Account deactivation workflow on failed payment (grace period: 7 days with email warnings)

### Implementation Considerations

**Clearinghouse Integration Architecture:**
- Clearinghouse API calls made server-side only (never from browser)
- Claim submission queued and processed asynchronously; UI shows submission status
- ERA auto-posting runs as a scheduled job (every 4 hours during business hours)
- Claim status polling runs daily for claims older than 3 days with no ERA

**Template Management:**
- Chiropractic-specific SOAP note templates shipped with the application
- DCs can customize templates (add fields, adjust defaults)
- Templates versioned; changes to templates do not retroactively alter historical notes
- AT modifier prompt logic tied to CPT code selection, not template; cannot be disabled for Medicare patients

**Data Migration:**
- CSV import for patient demographics (name, DOB, address, insurance info) at account creation
- Import validation with error reporting (duplicate patients, missing required fields)
- Historical billing data import documented as a spec for white-glove paid service; not automated in MVP

---

## Project Scoping & Phased Development

### MVP Strategy & Philosophy

**MVP Approach:** Revenue MVP — the product must support a real insurance-billing practice from day one. A solo DC can use this platform as their only practice management software, submit real claims to real payers, and receive real ERAs. No supplemental tool required.

**MVP Philosophy:** Ship the smallest set of capabilities that makes the "true flat-rate" promise real for a solo insurance DC. Every feature that isn't required for that promise is deferred.

**Resource Requirements:** 2–3 full-stack engineers, 1 PM/designer, HIPAA consultant (contract), clearinghouse integration support (Availity developer program). 10–14 week build timeline.

### MVP Feature Set (Phase 1)

**Core User Journeys Supported:**
- Solo insurance DC: full claim-to-payment workflow without leaving the platform
- New graduate DC: guided setup and first Medicare claim submission
- Front desk staff: scheduling, check-in, copay collection, claim batching

**Must-Have Capabilities:**

| Capability | MVP Requirement |
|-----------|----------------|
| SOAP Notes | Chiropractic-specific templates; AT modifier auto-prompt for Medicare; P.A.R.T. fields; autosave every 60 seconds |
| Scheduling | Day/week/month views; SMS/email reminders; online booking widget; family scheduling |
| Clearinghouse | ANSI 837P submission; 270/271 eligibility; 835 ERA auto-posting; denial queue |
| Cash & Membership | Copay collection; prepaid packages; wellness membership recurring billing |
| Session Management | 8-hour default timeout; PIN screen lock (not full logout); per-user timeout config |
| HIPAA Infrastructure | BAA at account creation; AES-256 encryption; audit logs; RBAC |
| Patient Management | Demographics; insurance cards; intake forms; patient portal |
| Financial Reporting | Collections; AR aging; claim status; daily summary |
| Data Migration | CSV import for patient demographics |

### Post-MVP Features

**Phase 2 (Months 7–18) — Growth:**
- AI SOAP note dictation (voice-to-text, chiropractic vocabulary)
- OA45 denial automated response workflow
- Multi-provider pricing tier ($149/month, up to 3 providers)
- Patient recall automation (appointment gap triggers)
- Outcomes tracking (VAS, functional improvement graphing)
- Referral program (1 month free per referred paying customer)
- Enhanced analytics dashboard (revenue trends, payer mix analysis)

**Phase 3 (Months 19–36) — Expansion:**
- Physical therapy and acupuncture modules
- Multi-location practice management
- Third-party billing service portal
- Direct payer API integrations
- Value-based care reporting exports
- Predictive denial scoring

### Risk Mitigation Strategy

**Technical Risks:** Clearinghouse API access timeline (Availity credentialing can take 60–90 days). Mitigation: begin developer account setup 12 weeks pre-launch; maintain Office Ally as parallel integration; scope MVP to not require specific clearinghouse — either works.

**Market Risks:** Competitor price response (ChiroFusion drops to $79/month). Mitigation: first-mover brand advantage takes 2+ years to replicate; G2/Capterra review moat requires consistent performance, not just price; compliance automation depth is harder to copy than price.

**Resource Risks:** HIPAA compliance and clearinghouse integration scope underestimated. Mitigation: engage HIPAA consultant in month 1; allocate 20% of build timeline as buffer; identify hard blockers (BAA execution) in week 1.

---

## Functional Requirements

### Patient Management

- FR1: The DC can create patient records including demographics, date of birth, address, contact information, and emergency contact
- FR2: Front desk staff can capture and store insurance card photos attached to patient records
- FR3: Patients can complete intake forms online via the patient portal before their first appointment
- FR4: The DC can link family members in the same household to a shared contact and appointment reminder system
- FR5: The system can import patient demographics from a CSV file during account setup
- FR6: The DC can view a unified patient chart showing appointment history, SOAP notes, claims, and payments on a single screen
- FR7: The DC can search for patients by name, date of birth, or chart number

### Appointment Scheduling

- FR8: Front desk staff can schedule, reschedule, and cancel appointments in day, week, and month calendar views
- FR9: The system sends automated appointment reminders to patients via SMS and email at configurable intervals
- FR10: Patients can book appointments online via an embeddable booking widget without creating an account
- FR11: Front desk staff can schedule multiple patients in the same time slot (family scheduling)
- FR12: The scheduling view displays color-coded appointment types (new patient, adjustment, re-exam, cash, insurance)
- FR13: The DC can configure appointment types, durations, and availability rules

### Clinical Documentation

- FR14: The DC can create SOAP notes using chiropractic-specific templates including subluxation listings and adjustment notes
- FR15: The system displays AT modifier documentation prompts automatically when the DC selects a spinal manipulation CPT code (98940–98942) for a Medicare patient
- FR16: Medicare SOAP notes include required P.A.R.T. (Pain, Asymmetry, Range of motion, Tissue changes) fields presented as required documentation
- FR17: The DC can document active treatment justification with functional improvement tracking for Medicare patients
- FR18: The system flags Medicare patients whose 30-day re-evaluation is overdue, before the next SOAP note is opened
- FR19: SOAP notes autosave every 60 seconds; no data loss from browser crashes or accidental navigation
- FR20: The DC can customize SOAP note templates (add fields, adjust defaults) without altering historical notes
- FR21: The DC can sign SOAP notes electronically; signed notes are locked from further editing

### Insurance Billing & Clearinghouse

- FR22: The system generates ANSI 837P claims from completed SOAP notes with chiropractic-specific CPT and ICD-10 codes
- FR23: The DC can verify patient insurance eligibility (270/271) in real-time before an appointment
- FR24: Eligibility verification results are stored in the patient record with timestamp and payer response
- FR25: Front desk staff can submit claim batches to the clearinghouse at end of day from completed SOAP notes
- FR26: The system receives and auto-posts 835 ERA payments to patient account balances without manual reconciliation
- FR27: Denied claims appear in a denial queue with reason code, denial explanation, and resubmission workflow
- FR28: The DC can correct a denied claim (including re-opening the associated SOAP note) and resubmit within the same workflow
- FR29: The system tracks claim status for all outstanding claims and displays current status in the patient chart
- FR30: The system displays Medicare Secondary Payer coordination flags when MSP questionnaire responses indicate another payer
- FR31: The DC can manage their payer list including payer IDs, contact information, and authorization requirements

### Cash & Membership Billing

- FR32: Front desk staff can collect copays, deductibles, and cash payments at check-in via integrated Stripe payment processing
- FR33: The DC can create prepaid visit packages (e.g., 12 adjustments for $X) and track remaining visits per patient
- FR34: The DC can create wellness membership plans with recurring monthly billing managed via Stripe subscriptions
- FR35: A patient's account shows a unified balance view across insurance payments, cash payments, and package balances
- FR36: The DC can apply partial payments or payment plans to outstanding patient balances

### Financial Reporting

- FR37: The DC can run a collections report by date range, provider, and payer showing billed, collected, and outstanding amounts
- FR38: The DC can view accounts receivable aging by 30/60/90/120+ day buckets at the practice and patient levels
- FR39: The DC can view a daily visit and payment summary for any date
- FR40: The system provides a claim status report showing all claims by status (pending, accepted, denied, paid) for any date range
- FR41: Financial reports can be exported as PDF or CSV for accounting purposes

### Account & User Management

- FR42: The account owner (DC) can create staff user accounts with role-based permissions (DC, Billing, Front Desk, CA)
- FR43: The account owner can suspend or terminate staff access immediately
- FR44: Each user can configure their own session timeout duration within the range allowed by the account owner
- FR45: The system displays a screen lock (PIN re-auth) after configured idle period without terminating the active session
- FR46: The account owner can view an audit log of all PHI access events by user and timestamp
- FR47: The system executes a BAA with the practice owner at account creation before any PHI is stored

### Compliance & Onboarding

- FR48: New accounts are walked through a setup wizard covering NPI, taxonomy codes, payer list, and provider credentials
- FR49: The system validates AT modifier presence on Medicare claims before clearinghouse submission and blocks submission if missing
- FR50: The DC receives in-application alerts about changes to Medicare documentation requirements when CMS updates are detected
- FR51: The system maintains a complete audit trail of all claim submissions, ERA postings, and billing changes

---

## Non-Functional Requirements

### Performance

- Page load time for core clinical screens (SOAP note, scheduling, patient chart) ≤2 seconds on a standard broadband connection
- Eligibility verification (270/271) response displayed to user within 10 seconds of request submission
- Claim batch submission confirmation (EDI acknowledgment) displayed within 60 seconds of initiating submission
- ERA auto-posting job processes all pending ERAs within 30 minutes of receipt from clearinghouse
- Autosave operations complete in background without blocking the UI; no perceptible lag during typing

**Rationale:** Clinical workflow performance directly impacts DC productivity. A practice seeing 30–50 patients/day cannot tolerate perceptible delays between patients.

### Security

- All PHI encrypted at rest using AES-256 with AWS KMS managed keys; key rotation annually
- All data in transit encrypted using TLS 1.3+; no PHI transmitted over unencrypted connections
- HIPAA Security Rule compliance (45 CFR §164.312): access controls, audit controls, integrity controls, transmission security
- BAA executed at account creation; no PHI stored before BAA execution
- Role-based access control enforced at application layer; no privilege escalation possible
- Session tokens invalidated immediately on logout; screen lock does not invalidate session token but requires PIN re-auth
- Audit logs append-only, stored separately from application data, retained 6 years
- Penetration test by qualified third party before launch; annual thereafter
- Cyber liability insurance in force before first paying customer

### Scalability

- System architecture supports 2,000+ concurrent practice accounts without performance degradation
- Clearinghouse integration designed to handle 300,000+ claims/month at 2,000-customer scale
- Database designed for horizontal scaling; no schema changes required to onboard new customers
- Per-customer claim volume monitoring dashboard available internally; volume alerts at 300+ claims/month per customer

**Rationale:** The 36-month target of 1,500 customers generating ~225,000 claims/month (150/customer average) requires architecture that scales horizontally without re-engineering.

### Reliability

- 99.9% monthly uptime (≤43.8 minutes unplanned downtime/month)
- Planned maintenance windows communicated 7 days in advance; scheduled 1–5 AM local time
- Clearinghouse integration: automatic failover to Office Ally if Availity returns errors for >5 consecutive minutes
- SOAP note autosave (every 60 seconds) ensures maximum 60 seconds of data loss on crash
- Database backups: continuous WAL archiving to S3; point-in-time recovery to any 5-minute window within 30 days
- Zero-downtime deployments: blue-green deployment strategy for all production releases

### Integration

- Clearinghouse (Availity primary, Office Ally failover): ANSI X12 v5010 compliant; formal connection testing required before each payer is enabled
- Stripe: PCI DSS compliance managed by Stripe; application-layer integration handles subscription lifecycle and payment intent only
- Patient portal: HTTPS web application; no native app in MVP; WCAG 2.1 AA compliance for patient-facing screens
- SMS reminders: Twilio or equivalent SMS gateway; opt-out compliance (TCPA) managed at platform level
- Email reminders: Sendgrid or equivalent; unsubscribe compliance managed at platform level
- Data export: all patient data exportable in standard formats (CSV, PDF) on request; no data lock-in

### Accessibility

- Patient portal screens meet WCAG 2.1 AA standards (patients may have accessibility needs)
- Clinical application screens (DC/staff facing): keyboard navigation supported for scheduling and SOAP note workflows; DCs and staff frequently use keyboard shortcuts in busy clinical environments
- Color-coded appointment types must include non-color visual differentiators (icons, patterns) for color-blind users

---

## Appendix: Key Decisions Log

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Clearinghouse partner | Availity primary, Office Ally backup | Availity has broadest payer network in US chiropractic; Office Ally is widely used fallback with faster BAA process |
| Session management | Screen lock (PIN), not logout | Logout on idle destroys clinical workflow; screen lock preserves session while satisfying HIPAA idle session requirement |
| MVP pricing | $79/month flat, all features | Price point chosen to undercut all competitors with full EHR + clearinghouse; below this, clearinghouse unit economics are challenging |
| AppSumo LTD cap | 1,200 claims/year | Protects against high-volume LTD customers destroying clearinghouse unit economics; ~100 claims/month is median solo DC |
| Multi-tenancy model | Isolated schemas per practice | HIPAA isolation requirement; simpler audit trail; easier to demonstrate PHI isolation to enterprise customers |
| SOAP note autosave | 60-second interval | ChiroSpring's lack of autosave is a documented user complaint; 60 seconds balances performance and data safety |
| AT modifier enforcement | Block submission if missing for Medicare | Cannot ship a Medicare billing tool that allows non-compliant claims; hard block is necessary, not optional prompt |

---

*PRD completed: 2026-06-10*
*Based on: Product Brief (2026-06-10) + Market Research (2026-06-10) + Shortlisted Idea (Score: 83/105)*
*Next workflow: `create-architecture` → `create-epics-and-stories`*
