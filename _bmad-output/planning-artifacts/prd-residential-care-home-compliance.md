---
stepsCompleted: [step-01-init, step-02-discovery, step-02b-vision, step-02c-executive-summary, step-03-success, step-04-journeys, step-05-domain, step-06-innovation, step-07-project-type, step-08-scoping, step-09-functional, step-10-nonfunctional, step-11-polish, step-12-complete]
inputDocuments:
  - ideas/shortlisted/residential-care-home-compliance-tracker.md
  - _bmad-output/planning-artifacts/market-research-residential-care-home-compliance.md
  - _bmad-output/planning-artifacts/brief-residential-care-home-compliance.md
workflowType: prd
research_type: prd
research_topic: residential-care-home-compliance
user_name: Root
date: 2026-04-24
classification:
  projectType: saas_b2b
  domain: healthcare_compliance
  complexity: high
  projectContext: greenfield
documentCounts:
  briefCount: 1
  researchCount: 1
  brainstormingCount: 0
  projectDocsCount: 0
---

# Product Requirements Document — Residential Care Home Compliance Tracker

**Author:** Root
**Date:** 2026-04-24
**Version:** 1.0
**Status:** Complete

---

## Executive Summary

Small residential care homes (5–30 beds) in the UK face a compliance crisis with no affordable digital solution. The Care Quality Commission's 2024–2025 digital mandate outlaws paper-based records for most evidence categories — yet the only purpose-built affordable tools cover only a fraction of what an inspection demands, and enterprise platforms (Nourish, Person Centred Software) start at £195–500+/month, pricing out the ~10,000–12,000 small independent homes that represent the majority of the UK market.

The **Residential Care Home Compliance Tracker** is a five-module, all-in-one digital compliance platform purpose-built for small UK care homes. It delivers: medication administration records (MAR charts), incident logging with CQC Regulation 16/17 fields, staff training expiry tracking, CQC Single Assessment Framework inspection checklists, and one-click PDF inspection report generation — at £79–149/month with fully transparent pricing and zero implementation complexity.

The product's core promise is **"CQC-ready in a day"**: a registered manager with moderate digital literacy goes from sign-up to a fully operational compliance system by end of day one, with no consultants, no onboarding calls, and no surprise fees. This is not a general-purpose care management platform. It is the compliance infrastructure that small homes need to survive inspection and eliminate documentation-driven enforcement risk.

**Market timing is critical.** InspectReady — the most directly comparable competitor — is not yet live (expected mid-2026). Launching before or alongside them, with a broader feature set (MAR + training + incident + checklist + PDF vs. their inspection-checklist focus), creates a first-mover advantage in a market where compliance tools become deeply sticky once adopted. 12 months of MAR and incident records cannot be migrated away lightly.

### What Makes This Special

**The only affordable all-in-one.** No other product under £150/month combines all five compliance modules — MAR charts, incident logs, staff training records, inspection checklists, and auto-generated PDF reports — with transparent public pricing. Bettal Cared4 (£75/month) covers policies only. Log My Care Pro (£100/month) has no MAR charts; the Outstanding tier (£1,060/month) has them but at 10x the price. Every enterprise tool hides pricing behind a sales process.

**Purpose-built for the 5–30 bed home.** No rostering, no billing, no family portals, no features that large homes need but small homes pay for and don't use. The complexity reduction is itself a differentiator: non-technical registered managers don't need training; they need a system that works on day one.

**Regulatory stickiness creates a moat.** CQC updates requirements annually. Every update is a retention touchpoint, not a maintenance burden. 12 months of compliance history embedded in the platform makes switching cost prohibitive. Annual "CQC Update Subscriptions" (£49/year) convert regulatory change from an expense into a recurring revenue mechanism.

**Speed-to-market is the primary competitive lever.** Every week of delay is a week InspectReady can close the feature gap and establish brand recognition in Facebook groups and care associations. The product must launch by Q3 2026.

---

## Project Classification

- **Project Type:** SaaS B2B (web application, mobile-first PWA)
- **Domain:** Healthcare Compliance / RegTech for Care Sector
- **Complexity:** High — regulated domain (CQC, GDPR/ICO, DSPT), sensitive resident data, digital mandate compliance, WCAG accessibility requirements
- **Project Context:** Greenfield — no existing codebase
- **Primary Market:** UK (10,000–12,000 small independent care homes)
- **Follow-On Market:** US assisted living facilities (18,400+ small facilities)

---

## Success Criteria

### User Success

**Primary measure:** Users achieve measurably better CQC inspection outcomes and eliminate documentation-driven enforcement risk.

Specific user success markers:
- **CQC inspection outcome improvement:** >60% of users who have been inspected within 6 months of adoption report no compliance-related findings related to record-keeping
- **"CQC-ready in a day" validated:** >80% of new sign-ups complete their first MAR chart within 24 hours of account creation
- **Training gap elimination:** >80% of users catch at least one staff training expiry via automated alert within their first 30 days
- **Time savings:** Users report pre-inspection evidence preparation reduced from ~10 hours to <2 hours
- **Daily operational adoption:** >70% of registered homes log at least one record per day within 30 days of onboarding
- **Support burden minimal:** <0.1 support tickets per active home per month (validates non-technical usability)

**User aha! moments (design targets, not metrics):**
- Day 1: "I just set up MAR charts for all my residents. It took 20 minutes."
- Day 3: Automated alert fires — staff DBS expiry in 30 days. Manager realises this will never fall through the cracks again.
- Day 7: First monthly compliance PDF generated and shown to the home owner.
- Month 3: CQC inspection passes with no record-keeping findings. Manager posts recommendation in Facebook group.

### Business Success

| Milestone | Target | Timeline |
|-----------|--------|---------|
| First paying customer | 1 home | Month 1 |
| Community validation | 50 paying homes | Month 3 |
| AppSumo LTD launch | 500 LTD units sold | Month 4–5 |
| MRR target | £14,850 (150 homes × £99 avg) | Month 9 |
| Year 1 MRR | £29,700 (300 homes × £99 avg) | Month 12 |
| UK homes on platform | 600 | Month 18 |
| US beta users | 100 (California pilot) | Month 18 |
| Combined MRR | £59,400 | Month 24 |

**Revenue model:**
- £79/month (up to 10 beds) | £99/month (11–20 beds) | £149/month (21–30 beds)
- 20% annual discount available
- LTD: $199 (Starter, up to 10 beds) / $299 (Professional, up to 30 beds)
- Annual "CQC Update Subscription": £49/year for LTD holders

**Path to £10K MRR:** 102 paying homes at £99 average — from a pool of ~10,000 ICP homes, this is 1.02% conversion. Achievable within 3 months of launch with focused community outreach.

### Technical Success

- **Data integrity:** Zero data loss events; all records immutable after submission (audit trail requirement)
- **UK data hosting:** 100% of resident and care data hosted on UK-based infrastructure from day one (DSPT/Assured Solutions prerequisite)
- **Uptime:** 99.5% monthly uptime for all record-entry workflows (care homes operate 24/7; MAR charts must be completable at 3am)
- **Mobile performance:** All critical record-entry workflows complete within 3 seconds on a 4G mobile connection
- **Security:** Zero data breach incidents; full GDPR/ICO compliance; ICO registration completed pre-launch
- **DSPT compliance:** Data Security and Protection Toolkit assessment completed and published within 12 months of launch

### Measurable Outcomes

**MVP validated when:**
1. 50 paying customers within 90 days of public launch
2. >80% MAR chart day-1 completion rate
3. At least 3 customer stories of improved CQC inspection outcomes
4. <2% monthly churn after 90 days
5. AppSumo LTD launch: >500 units sold within 30 days

**Year 1 strategic goals:**
- Digitising Social Care Assured Solutions listing achieved (unlocks ICS/ICB funding eligibility for customers)
- At least one formal endorsement from Care England, RNHA, or Digital Care Hub
- 5+ published customer inspection outcome case studies
- NPS >50

---

## Product Scope

### MVP — All Five Modules at Launch

The MVP must deliver all five compliance modules at launch. This is non-negotiable: the product's entire value proposition rests on being the only affordable all-in-one solution. Launching with three modules and adding the rest later cedes ground to InspectReady and eliminates the primary differentiator.

**Module 1: Medication Administration Records (MAR Charts)**
Daily medication logging per resident per medication, configurable schedules, missed dose alerts, auditable history.

**Module 2: Incident Report Logger**
Structured incident recording with CQC Regulation 16/17 required fields, status tracking, CQC notification log.

**Module 3: Staff Training Records**
DBS and mandatory training tracking with automated 90/60/30-day expiry alerts, bulk CSV import, compliance dashboard.

**Module 4: Inspection Checklist Generator**
CQC Single Assessment Framework aligned checklist across all five key questions (Safe, Effective, Caring, Responsive, Well-led), evidence linking, self-audit mode.

**Module 5: Monthly Compliance PDF Report**
Auto-generated monthly summary formatted for CQC inspection presentation, one-click generation, historical archive.

**Platform foundations:** Multi-user RBAC, mobile-first PWA, UK data hosting, HTTPS/encrypted storage, 14-day free trial (no card required), transparent public pricing.

### Growth Features (Post-MVP)

Planned for Version 2.0 (6–18 months post-launch):
- Multi-site dashboard for operators with 2–5 homes
- Group staff training management across all homes in a group
- Benchmarking: compare compliance performance across sites
- API for integration with Log My Care, PCS, and other care platforms
- US compliance module (California ARF, Florida ALF, Texas Type A/B)
- Annual "CQC Update Subscription" upsell for LTD holders
- Family/resident portal (post-PMF only)

### Vision (Future)

Version 3.0+ (12–36 months):
- AI-powered inspection readiness score with gap analysis
- Predictive alerts based on incident pattern recognition
- Automated regulatory change monitoring and checklist updates
- Peer benchmarking against similar homes
- Partnership with CQC-endorsed training providers for certificate verification
- Full eMAR suite with pharmacy integration (V3+)

### Explicitly Out of Scope for MVP

| Feature | Rationale |
|---------|-----------|
| Electronic prescribing / GP Connect | NHS Digital FHIR integration — significant overhead; not needed to pass inspection |
| Rostering / shift management | Different problem; existing solutions exist |
| Family/resident portal | Not a CQC compliance requirement for MVP |
| Billing and invoicing | Dilutes compliance positioning |
| US compliance module | Follow-on market; launch UK first |
| Native iOS/Android app | PWA provides mobile-first experience without app store overhead |
| AI-powered suggestions | Compelling future feature; not MVP |
| Multi-site group dashboard | Requires additional data modelling; defer to V2 |
| Full eMAR pharmacy integration | MAR chart logging is MVP; pharmacy integration is V3 |
| Domiciliary care features | Different regulatory context; different buyer persona |

---

## User Journeys

### Journey 1: Margaret — The Independent Manager's First Week (Primary, Happy Path)

Margaret is 52, a registered manager and part-owner of a 12-bed home in the East Midlands. Non-technical. WhatsApp and Facebook on her phone. MAR charts are handwritten and filed in physical folders. A staff member's training certificate expired last month — she found out during a manual check, not via alert. Her last CQC inspection preparation took three days. She's been quoted £350/month by an enterprise platform and said no immediately.

**Scene 1 — Discovery (Facebook group, Tuesday evening)**
Margaret posts in The Care Home Managers Support Network: "What are people using for digital MAR charts? CQC are saying paper isn't good enough anymore." Within an hour, three peer managers have replied. One says: "I've been on [product] for three months — passed my last inspection with no concerns about records. £99/month, no contract." Margaret Googles the name on her phone.

**Scene 2 — Consideration (Homepage, same evening)**
She lands on the homepage. Hero: "CQC-Ready in a Day." She reads the pricing page immediately — £79/month for up to 10 beds, transparent. She downloads the free CQC inspection readiness checklist without signing up. She scores herself — 14 of 28 items not addressed. She feels a familiar anxiety. She clicks "Start Free Trial."

**Scene 3 — Onboarding (Day 1, 9am–12pm)**
No sales call. Guided setup wizard: home name and bed count, add residents one by one (12 residents, 18 minutes). Add staff — imports from spreadsheet CSV (9 staff, 4 minutes). Set up MAR charts for first resident: medication name, dose, schedule, prescriber. Five minutes. She does all 12. By 11:30am, all residents have digital MAR charts active.

**Scene 4 — First Alert (Day 3, 7am)**
Email notification: "Anne Clarke's DBS check expires in 28 days." Margaret opens the app. Clear alert dashboard. She forwards the email to Anne with a note: "Please book your renewal." She marks the item as "action taken." First time this has been automated. She feels relief.

**Scene 5 — First PDF (Day 7, end of day)**
Margaret generates her first Monthly Compliance PDF. It shows: MAR completion rate 97% (two missed entries flagged), 0 open incidents, 8/9 staff training current (1 expiring in 28 days). She shows it to the home owner, who says: "This is exactly what I've been asking for." Margaret converts to paid plan that evening.

**Scene 6 — CQC Inspection (Month 4)**
CQC inspector arrives unannounced. Margaret opens the platform on the office laptop. Generates the inspection evidence pack in one click. Inspector reviews four months of MAR chart history, incident logs (2 incidents, both fully documented with notification records), staff training compliance at 100%. Report outcome: "Good — Records." Margaret sends a message to the Facebook group.

**Capabilities revealed:** Free lead magnet (checklist), frictionless sign-up, guided onboarding wizard, resident and staff management, MAR chart setup and daily entry, CSV import for staff records, automated expiry alerts (email + dashboard), monthly PDF generation, one-click evidence pack export.

---

### Journey 2: David — The Multi-Site Operator's Unified View (Primary, Power User)

David is 45, owner-operator of two homes (18-bed and 24-bed) in Yorkshire. On Log My Care Pro for care notes but MAR charts are still paper. He can't get a unified compliance view without physically visiting both sites. His deputy managers have inconsistent approaches to incident logging.

**Scene 1 — Discovery (CQC newsletter, then Google)**
A CQC digital readiness newsletter mentions a category of purpose-built small-home compliance tools. David searches "CQC compliance software small care home" and finds a blog post. He reads the pricing page: £99/month for 11–20 beds, £149/month for 21–30 beds. He calculates: £248/month for both homes — vs. £1,060/month for Log My Care Outstanding. He signs up for trial.

**Scene 2 — Multi-Home Setup**
David sets up both homes in the same account. Different staff rosters, different residents, but a shared login. He assigns his deputy managers as Senior Carer roles — they can enter records but can't access billing or see cross-site data. He sets himself as Owner (read-only dashboard access across both homes).

**Scene 3 — Deputy Manager Handoff**
David sends login links to both deputies with a 2-minute video guide he made on his phone. By Thursday, both deputies are logging MAR chart entries daily. David reviews from his phone Friday morning — both sites green on the dashboard.

**Scene 4 — Monthly Review (Day 30)**
David generates compliance PDFs for both homes. Reviews them side by side on his laptop. Site 1: 98% MAR completion, 1 incident logged and closed, 100% staff training current. Site 2: 94% MAR completion (missed entries flagged — one carer who needs a reminder), 0 incidents, 2 staff with training expiring in 45 days. Monthly compliance review down from 4 hours to 22 minutes.

**Capabilities revealed:** Multi-home account structure, role-based access (Owner / Manager / Senior Carer), cross-site dashboard (even simple), deputy manager delegation, mobile-first entry for non-managers, per-site and aggregate compliance reports.

---

### Journey 3: Priya — The First-Time Digital Adopter's Activation (Primary, Edge Case)

Priya is 38, a registered nurse who opened a 6-bed specialist care home 18 months ago. Tech-comfortable, no budget for enterprise software. Uses Google Sheets for training records and paper for everything else. Her CQC registration contact flagged her paper-based systems as likely inspection risk.

**Scene 1 — Activation via Lead Magnet**
Priya downloads the free CQC Inspection Readiness Checklist (no sign-up). She works through it carefully — she scores 9/28. She finds three compliance gaps she didn't know existed: no structured incident notification log, MAR charts not auditable, staff training has no expiry alerting. She signs up for a trial that afternoon.

**Scene 2 — Fast Onboarding (6-bed home)**
6 residents, 4 staff — setup complete in 35 minutes. She uploads her Google Sheets staff training data as CSV — all training records imported. Sets up MAR charts for all 6 residents. Completes the inspection checklist self-audit and sees her score: 19/28 with gaps highlighted in red.

**Scene 3 — Gap Remediation**
The checklist gap report shows 9 outstanding items. She works through them over 3 days, uploading policy documents and marking items complete. Score reaches 26/28. The 2 remaining items require actions (one policy she needs to draft). She creates a reminder in the app.

**Capabilities revealed:** Lead magnet → free checklist (unauthenticated), inspection checklist self-audit mode with gap report, CSV import, fast onboarding for small homes, document attachment to checklist items, completion tracking with progress indicator.

---

### Journey 4: Senior Carer — The Daily Record Entry Operator (Secondary User)

Sarah is 34, a senior carer at a 20-bed home in Somerset. The registered manager (Margaret) has set her up with a Senior Carer role. Sarah is comfortable with Facebook and WhatsApp but has never used care software. She works 6am–2pm shifts.

**Scene 1 — First Day on the System (6:15am)**
Manager has left a note: "Please do MAR chart sign-off by 7am for night shift handover." Sarah opens the app on her personal iPhone. Login remembered. She sees the MAR dashboard — each resident's morning medications listed. She taps each one, confirms administration, adds a note on Mrs. Thompson ("refused morning dose, offered again 6:45am, taken"). Icons, not text boxes. Confirmation prompt before save.

**Scene 2 — Incident Logging (10:30am)**
A resident has a minor fall. Sarah opens Incident Logger. Structured form: type (fall), date/time (pre-filled), residents involved, witnesses, immediate actions taken, was GP notified (yes/no). Three-minute form. She submits. System automatically flags for manager review. Manager sees it on her dashboard within 2 minutes.

**Scene 3 — Forgetting to Log (11pm)**
Sarah is at home. The system sends a push notification: "3 evening MAR chart entries overdue for residents X, Y, Z." She opens the app on her phone. Logs the missed entries with a reason note. Audit trail records the late entry with timestamp — inspector-admissible because the system timestamps when entry was made, not when care was given.

**Capabilities revealed:** Mobile-first daily MAR entry (icon-driven, minimal text input), incident logging with structured fields, push notifications for overdue entries, late entry with reason notation, audit trail preserving original timestamps.

---

### Journey 5: Home Owner — The Passive Oversight Reviewer (Secondary User)

Geoff is 62, owner of two care homes, delegate-managed. He checks in weekly. Not a software user; just wants to know he's compliant.

**Scene 1 — Monthly Email**
Geoff receives an auto-emailed monthly compliance summary: two numbers — overall compliance score (94%) and any red flags (1 — staff training expiry approaching in 7 days). He clicks one link in the email. Opens the PDF. Two pages. He's satisfied.

**Scene 2 — CQC Notification**
CQC announces an unannounced inspection visit. Geoff opens the app for the first time (Owner read-only login). Dashboard shows both homes' compliance status in green/amber/red. He sends a message to his managers: "Are we ready?" They reply with the inspection evidence pack link.

**Capabilities revealed:** Automated monthly compliance summary email, Owner read-only dashboard, traffic-light compliance status, one-click PDF evidence pack, simple manager-to-owner communication touchpoint.

---

### Journey Requirements Summary

Capabilities revealed across all journeys:

| Journey | Capabilities Required |
|---------|----------------------|
| Margaret (happy path) | Lead magnet, frictionless trial, guided onboarding, MAR chart management, CSV import, automated alerts, PDF generation, evidence pack export |
| David (multi-site) | Multi-home accounts, RBAC (Owner/Manager/Senior Carer), cross-site dashboard, per-site PDF reports |
| Priya (lead magnet → trial) | Unauthenticated inspection checklist, self-audit gap report, document attachment, checklist progress tracking |
| Sarah (daily entry) | Mobile-first MAR entry (icon-driven), incident logger with structured fields, push notifications for overdue entries, late entry with audit trail |
| Geoff (passive oversight) | Automated compliance summary email, Owner read-only dashboard, traffic-light status, one-click PDF |

---

## Domain-Specific Requirements

This product operates in a high-complexity regulated domain. The following requirements are non-negotiable — they determine whether the product is legally usable and commercially viable in the UK care sector.

### Compliance & Regulatory

**CQC Regulatory Framework**
- All data structures, form fields, and report outputs must align with CQC Single Assessment Framework (2024 revision) evidence categories
- MAR chart format must meet NHS/CQC digital medication record requirements: timestamped entries, named administrator, dose given (or reason for non-administration), no deletion of records (amendment with reason only)
- Incident report fields must capture all required fields under Regulation 16 (Receiving and acting on complaints) and Regulation 17 (Good governance): incident type, date/time, persons involved, immediate actions, outcomes, CQC notification status
- Staff training records must cover CQC-mandated mandatory training categories: safeguarding (adults and children), moving and handling, fire safety, food hygiene, infection control, first aid, mental capacity, medicines management
- Inspection checklist must map to all five CQC Key Questions: Safe, Effective, Caring, Responsive, Well-led — and evidence categories within each

**Digitising Social Care (DiSC) Alignment**
- Product must meet Data Security and Protection Toolkit (DSPT) standards to be eligible for the Assured Solutions list
- UK data hosting required from day one — no data may reside on non-UK servers
- ICO registration must be completed before public launch
- Privacy notice and data processing agreements must be in place before any personal data is collected
- Data retention policy must comply with UK GDPR: care records typically retained 8 years (adult), or until age 25 for records created during minority

**Annual Update Requirement**
- CQC updates framework guidance and evidence categories annually (typically Q1)
- Product must have a documented annual update process — inspection checklists, MAR chart requirements, and mandatory training categories must be reviewed and updated each year
- Update release must reach all active accounts within 30 days of CQC guidance publication
- LTD holders are offered the annual CQC Update Subscription (£49/year) to receive these updates

### Technical Constraints

**Data Security**
- All resident and staff personal data encrypted at rest (AES-256 minimum) and in transit (TLS 1.2+)
- Role-based access control enforced at API level — not just UI level
- No data export accessible without Manager or Owner role
- Audit log of all data access events retained for minimum 3 years
- No third-party analytics or tracking tools that transmit personal data outside UK (applies to any telemetry using resident or staff identifiers)

**Audit Trail Requirements**
- Every MAR chart entry must be immutable after submission — amendments require reason note and create a new record, not overwrite the original
- Incident records immutable after submission with audit trail of status changes
- All records timestamped server-side at point of submission — client-provided timestamps used for display only (prevents backdating)
- Audit trail must be exportable as part of the inspection evidence pack

**GDPR/ICO Requirements**
- Consent management for resident data processing — lawful basis is "vital interests" and "legal obligation" (care provision); document in privacy notice
- Right to erasure requests must be handled: protocol for anonymising data while preserving audit trail integrity
- Data breach notification protocol must be documented and testable: 72-hour ICO notification window
- Data processing agreements required for any sub-processors (hosting provider, email service, etc.)

**Accessibility**
- WCAG 2.1 AA compliance for all user-facing interfaces
- Critical rationale: many registered managers and senior carers have varying levels of digital literacy; accessibility features (larger touch targets, high contrast mode, screen reader compatibility) directly improve usability for the primary target audience
- Mobile accessibility: all touch targets minimum 44×44px; no gesture-only interactions

### Integration Requirements (MVP)

- **CSV import:** Staff training records import must support common spreadsheet export formats (Excel/CSV) — this is the primary onboarding path for existing data
- **PDF generation:** Monthly compliance report and evidence pack must produce inspector-ready PDF outputs with consistent professional formatting; no additional software required to view
- **Email notifications:** System must send email alerts for training expiry, overdue MAR entries, and monthly reports — no dependency on users checking the app daily
- **Push notifications:** Web push notifications for overdue entries for users on mobile browsers (PWA capability)

### Risk Mitigations

| Risk | Mitigation |
|------|-----------|
| CQC changes requirements mid-year | Build checklist and training categories as configurable data, not hardcoded UI — annual update is a content operation, not a code release |
| GDPR breach causing ICO fine | UK hosting + encryption + audit logs + documented breach protocol from day one — do not defer data governance |
| InspectReady launches before us | Speed to market is primary priority; launch with all 5 modules; build brand in Facebook groups NOW |
| Non-technical users can't onboard | Usability testing with non-technical managers during beta is mandatory before public launch |
| Resident data loss event | Daily automated backups, point-in-time recovery, no data deletion ever (soft delete only) |

---

## SaaS B2B Specific Requirements

### Multi-Tenancy Model

- **Account = Care Home:** Each account is a single care home with its own isolated data namespace
- **Multi-home accounts:** Operators with multiple homes (like David) can link homes under one account login with per-home data isolation and an Owner role with cross-home visibility
- **Data isolation:** Absolute — no data from Home A is visible to Home B, even within the same operator account
- **Subscription per home:** Billing is per care home, not per user — aligns with how operators think about software costs

### Role-Based Access Control (RBAC)

| Role | Permissions |
|------|-------------|
| Owner | Read-only dashboard and PDF reports across all linked homes; no data entry; billing management |
| Manager (Registered Manager) | Full access — all modules, all records, user management, settings, PDF generation, account management |
| Senior Carer | MAR chart entry, incident logging, view own staff training record — no access to other staff data, no settings, no billing |
| Read-Only / Auditor | View all records, generate reports — no data entry (reserved for future CQC inspector or compliance auditor use case) |

### Subscription & Billing

- Stripe for payment processing — no card stored on our servers
- Pricing tiers enforced by bed count (entered at account setup and verified against submitted data)
- 14-day free trial, no card required — Stripe trial handling
- LTD entitlements tracked separately from subscription accounts
- Annual CQC Update Subscription (£49/year) available to LTD holders via Stripe subscription
- Automated dunning for failed payments with 3-attempt sequence before access restriction

### Onboarding Design Requirements

- Onboarding must be completable without human support intervention in >90% of cases
- Progress indicator throughout setup ("Step 3 of 5 — Add Your Staff")
- Default medication schedule templates for common care home regimens (reduces first-MAR-chart time)
- Sample data mode: managers can see what a completed compliance dashboard looks like before entering real data
- CSV import for staff training records with column mapping wizard (handles Excel and CSV from common care software)
- Video walkthrough (3 minutes max) embedded in onboarding — shows MAR chart entry and PDF generation

### Customer Support Model

- Self-serve knowledge base as primary support channel (non-technical managers need written guides with screenshots, not text-only FAQs)
- In-app chat support during UK business hours (9am–5pm Mon–Fri) for paid accounts
- Email support 48-hour response SLA for paid accounts
- No phone support at launch — adds significant staffing overhead; revisit at 300+ customers

---

## Project Scoping & Phased Development

### MVP Strategy & Philosophy

**MVP Approach:** Problem-solving MVP — deliver measurable compliance risk reduction on day one.

The MVP is not a stripped-down prototype. It is a complete solution to the specific problem (CQC compliance documentation) that registered managers face today. The five modules are not "nice to have" — they are the entire value proposition. Launching with fewer modules creates a worse product than competitors (Bettal covers policies only; Log My Care Pro has no MAR). The minimum is the full five-module suite.

**Resource Requirements:** 1 full-stack developer (3–4 months), 1 designer (mobile-first, accessible UX), 1 domain expert for CQC alignment validation (can be a consultant or beta home manager). Total: lean 3-person team or equivalent.

**Launch readiness definition:** "CQC-ready in a day" is demonstrable — a non-technical person can go from sign-up to active MAR charts and training records within one working day without external help.

### MVP Feature Set (Phase 1)

**Core User Journeys Supported:**
- Margaret (independent manager) — full onboarding and daily operation
- Sarah (senior carer) — daily MAR chart entry and incident logging
- Priya (first-time adopter) — lead magnet → trial → activation

**Must-Have Capabilities:**
1. Account setup and guided onboarding wizard
2. Resident management (add, edit, mark inactive)
3. Staff management with role assignment
4. MAR chart setup per resident per medication
5. Daily MAR chart entry with mobile-first UI
6. Missed dose alert system (dashboard + email)
7. Incident report logger with CQC Reg 16/17 fields
8. Incident status tracking (Open → Under Investigation → Closed)
9. Staff training record management with certificate tracking
10. Automated training expiry alerts (90/60/30-day email notifications)
11. CSV import for staff training records
12. CQC inspection checklist (SAF-aligned, all 5 key questions)
13. Checklist self-audit mode with gap report
14. Document attachment to checklist items
15. Monthly compliance PDF report (auto-generated, one-click)
16. Inspection evidence pack export (MAR history + incidents + training + checklist)
17. Multi-user RBAC (Owner / Manager / Senior Carer)
18. 14-day free trial (no card required)
19. Stripe subscription billing
20. UK data hosting, ICO registration, GDPR compliance
21. Free unauthenticated CQC checklist (lead magnet)
22. Transparent public pricing page

**Explicitly NOT in Phase 1:** Multi-site dashboard, US compliance, native apps, AI features, API, family portal, rostering, billing/invoicing for residents.

### Post-MVP Features

**Phase 2 (Post-MVP, 6–12 months):**
- Multi-site group dashboard for operators with 2–5 homes
- Annual CQC Update Subscription for LTD holders
- US compliance module (California ARF as first state)
- API for data export and third-party integration
- In-app messaging between Manager and Owner
- Enhanced reporting: trend analysis, year-on-year comparison

**Phase 3 (Expansion, 12–24 months):**
- AI inspection readiness score with gap analysis
- Predictive alert patterns from incident data
- Peer benchmarking (anonymised aggregate compliance data)
- Native iOS/Android apps (if PWA limitations become a retention issue)
- Full eMAR with pharmacy integration (V3+)
- Domiciliary care compliance module (separate ICP, separate product positioning)

### Risk Mitigation Strategy

**Technical Risks:** PDF generation complexity (handling edge cases in report formatting). Mitigation: use a proven PDF library (Puppeteer/WeasyPrint) with a fixed template; invest time in template testing early in development.

**Market Risks:** InspectReady launches with equivalent features before we do. Mitigation: launch date Q3 2026 is non-negotiable; prioritise Facebook group presence and early beta community from Month 1; build brand loyalty before InspectReady has customers to poach.

**Resource Risks:** Single developer becomes a bottleneck. Mitigation: define clear API contracts between frontend and backend so a second developer can join without rework; use managed cloud services for hosting, email, and auth rather than self-hosting anything.

---

## Functional Requirements

### User & Account Management

- **FR1:** Visitors can access and complete a CQC Inspection Readiness Checklist without creating an account
- **FR2:** Users can create a new care home account with a 14-day free trial (no payment details required)
- **FR3:** Account owners can configure their home profile (name, bed count, address, CQC registration number)
- **FR4:** Managers can invite users by email and assign them roles (Owner / Manager / Senior Carer)
- **FR5:** Users can log in with email and password with secure session management
- **FR6:** Managers can deactivate users without deleting their historical records
- **FR7:** Account owners can manage their Stripe subscription, upgrade/downgrade tier, and access billing history
- **FR8:** Operators can link multiple care home accounts under a single login with an Owner role for cross-home visibility

### Resident Management

- **FR9:** Managers can add, edit, and mark residents as inactive (with all historical records preserved)
- **FR10:** Each resident profile stores basic information (name, date of birth, room number, admission date)
- **FR11:** Managers can view a resident's complete MAR chart history and incident history from their profile

### Medication Administration Records (MAR Charts)

- **FR12:** Managers can configure medication schedules for each resident (medication name, dose, frequency, route, prescriber, start/end dates)
- **FR13:** Managers can configure PRN (as-required) medications separately from regular schedules
- **FR14:** Senior Carers and Managers can record daily medication administration against each resident's schedule
- **FR15:** Users can record non-administration events with a coded reason (refused, not available, asleep, etc.) and free-text note
- **FR16:** The system alerts Managers via dashboard and email when a scheduled medication entry is overdue by more than 1 hour
- **FR17:** All MAR records are immutable after submission; amendments require a reason note and create a new audit record
- **FR18:** Managers can view the complete MAR history for any resident across any date range
- **FR19:** The system displays daily MAR completion rates per resident and per home on the compliance dashboard

### Incident Report Logging

- **FR20:** Senior Carers and Managers can create incident reports using a structured form with CQC Regulation 16/17 required fields
- **FR21:** Incident forms capture: incident type (from CQC taxonomy), date and time, residents involved, staff involved, witnesses, location, description, immediate actions taken, GP notification status, and CQC notification status
- **FR22:** Managers can update incident status (Open → Under Investigation → Closed) with timestamped notes at each transition
- **FR23:** Managers can view and filter the incident log by date range, type, status, and resident
- **FR24:** The system flags incidents that may require CQC notification under Regulation 18 (Duty of Candour) based on incident type selection

### Staff Training Records

- **FR25:** Managers can create staff profiles capturing: name, role, start date, DBS certificate number, DBS expiry date, and employment status
- **FR26:** Managers can add training records for each staff member: training type, completion date, certificate expiry date, and document attachment (optional)
- **FR27:** Managers can import existing staff and training records from a CSV file with a column-mapping wizard
- **FR28:** The system sends automated email alerts to Managers at 90, 60, and 30 days before any certificate or DBS check expires
- **FR29:** Managers can view a training compliance dashboard showing percentage of staff current on all mandatory training categories
- **FR30:** The system displays a staff training compliance summary on the home compliance dashboard

### Inspection Checklist

- **FR31:** Managers can access a CQC Single Assessment Framework inspection checklist covering all five Key Questions (Safe, Effective, Caring, Responsive, Well-led)
- **FR32:** Managers can mark each checklist item as Complete / In Progress / Not Started / Not Applicable with a free-text evidence note
- **FR33:** Managers can attach documents (PDF, image) to individual checklist items as evidence
- **FR34:** The system provides a self-audit gap report showing all items not marked Complete, prioritised by CQC inspection risk
- **FR35:** Managers can view overall checklist completion percentage on the compliance dashboard
- **FR36:** The checklist is updated annually by the product team to reflect current CQC SAF guidance, with all accounts notified of changes

### Compliance Reporting & PDF Generation

- **FR37:** Managers can generate a Monthly Compliance PDF Report with one click, covering: MAR completion rate, incident summary, staff training compliance percentage, and checklist completion percentage
- **FR38:** Managers can generate an Inspection Evidence Pack PDF combining: full MAR history for a selected date range, all incidents with their status logs, staff training records, and checklist completion status
- **FR39:** All generated reports are stored in an archive accessible to Managers and Owners
- **FR40:** Account owners receive an automated monthly compliance summary email with headline metrics and a link to the full PDF

### Dashboard & Compliance Visibility

- **FR41:** Managers see a compliance dashboard on login showing: daily MAR completion status, open incidents, training expirations in next 30 days, and checklist completion percentage
- **FR42:** Owners with multi-home access see a cross-home compliance dashboard with traffic-light status for each linked home
- **FR43:** The dashboard highlights any items requiring immediate action (overdue MAR entries, certificates expired, open incidents > 7 days)

### Platform / Onboarding

- **FR44:** New users are guided through a step-by-step onboarding wizard: home setup → resident setup → staff setup → first MAR chart
- **FR45:** The onboarding wizard provides estimated completion time and progress indicators throughout
- **FR46:** Managers can access an embedded video walkthrough (≤3 minutes) covering MAR chart entry and PDF report generation

---

## Non-Functional Requirements

### Performance

- All critical record-entry pages (MAR chart daily entry, incident logger) must load and be interactive within 3 seconds on a standard 4G mobile connection (simulated at 10 Mbps downlink)
- MAR chart entry submission must complete (server confirmation) within 2 seconds under normal load
- PDF report generation must complete within 30 seconds for any report covering up to 12 months of data
- Dashboard page must load within 4 seconds for homes with up to 30 residents and 12 months of records
- Uptime: 99.5% monthly availability for all record-entry workflows; planned maintenance communicated 48 hours in advance and scheduled between 2am–5am UK time

### Security

- All personal data (resident, staff) encrypted at rest (AES-256) and in transit (TLS 1.2 minimum; TLS 1.3 preferred)
- Role-based access control enforced at API level — all endpoints validate role before returning data
- No resident or staff personal data transmitted to non-UK third-party services; analytics/telemetry must use anonymised identifiers only
- Audit log of all data access events (read and write) retained for minimum 3 years and exportable
- Session tokens expire after 8 hours of inactivity; forced re-authentication required for sensitive operations (data export, user management)
- Penetration test completed before public launch and annually thereafter
- OWASP Top 10 vulnerabilities addressed in development process; dependency scanning in CI/CD pipeline
- ICO registration completed before any personal data is collected; ICO registration number published on website

### Data Integrity & Compliance

- All records immutable after submission; amendment history fully auditable with reason codes required
- All records timestamped server-side at point of submission — client clock cannot influence audit record timestamps
- Automated daily backups with minimum 30-day retention; point-in-time recovery capability
- No physical deletion of any care or compliance record ever — soft delete only; anonymisation process available for GDPR erasure requests that preserves audit trail integrity
- UK data hosting from day one — all production databases and backups must reside in UK AWS or equivalent UK data centre
- DSPT (Data Security and Protection Toolkit) assessment completed and published within 12 months of launch

### Scalability

- Architecture must support scaling from 10 to 10,000 active care homes without re-architecture
- Database schema and query patterns must perform within performance requirements (above) up to 10,000 residents and 100,000 MAR entries per home
- PDF generation must be offloaded to an asynchronous worker queue to prevent blocking the application under load — user receives notification when ready
- Email notification system must support sending up to 50,000 emails per day without manual intervention (day-30 AppSumo LTD launch scenario)

### Accessibility

- WCAG 2.1 AA compliance for all user-facing interfaces (required for DSPT Assured Solutions eligibility and to serve non-technical primary users)
- All touch targets minimum 44×44px on mobile interfaces
- No interactions that rely on gesture-only input (swipe, pinch) without an alternative tap-based path
- Colour is never the sole means of conveying information (traffic-light status indicators must include text/icon)
- Screen reader compatible: all form fields have associated labels; all status indicators have text alternatives
- Minimum 4.5:1 contrast ratio for all body text; 3:1 for large text

### Integration & Compatibility

- Progressive Web App (PWA) with offline capability for MAR chart entry: entries queued locally when offline and synced when connectivity is restored; user notified of sync status
- Browser support: Chrome 90+, Firefox 88+, Safari 14+ (iOS), Samsung Internet 12+; Internet Explorer explicitly excluded
- CSV import supports Excel (.xlsx) and standard comma-separated (.csv) files with UTF-8 encoding
- Email notifications delivered via a UK-based SMTP service or transactional email provider with GDPR-compliant data handling (Postmark or equivalent)
- PDF generation produces files compatible with Adobe Acrobat Reader and all standard PDF viewers with no additional software required

---

*PRD complete. All five compliance modules fully specified. Functional requirements provide the capability contract for architecture, UX design, and epic breakdown. Non-functional requirements address the critical regulated-domain constraints (security, data integrity, accessibility, UK hosting) that determine commercial viability in the UK care sector.*

*Next recommended steps: `/bmad-bmm-create-architecture` to define tech stack, data model, and PDF generation approach; then `/bmad-bmm-create-epics-and-stories` to break this PRD into implementable epics.*
