---
stepsCompleted: ["step-01-init.md", "step-02-discovery.md", "step-02b-vision.md", "step-02c-executive-summary.md", "step-03-success.md", "step-04-journeys.md", "step-05-domain.md", "step-06-innovation.md", "step-07-project-type.md", "step-08-scoping.md", "step-09-functional.md", "step-10-nonfunctional.md", "step-11-polish.md", "step-12-complete.md"]
inputDocuments:
  - ideas/shortlisted/pest-control-route-compliance-tracker.md
  - _bmad-output/planning-artifacts/research/market-pest-control-route-compliance-tracker-research-2026-04-12.md
workflowType: prd
classification:
  projectType: saas_b2b
  domain: field_service_management_regulated
  complexity: high
  projectContext: greenfield
date: '2026-04-13'
author: Root
project_name: PestLog
---

# Product Requirements Document — PestLog

**Author:** Root
**Date:** 2026-04-13
**Project:** PestLog — Pest Control Route & Compliance Platform

---

## Executive Summary

PestLog is a compliance-first, mobile-first SaaS platform for independent pest control operators (PCOs) with 1–10 technicians. It occupies the uncontested market position of combining EPA-standard chemical application logging, route optimization, and recurring service management at a flat $49–79/month price — a position no competitor holds.

The pest control industry ($26.1B US, 32,720+ companies) operates under FIFRA (Federal Insecticide, Fungicide, and Rodenticide Act) and state-level pesticide regulations requiring that every pesticide application be documented: product name, EPA registration number, application rate, applicator license number, GPS location, date/time. These records must be retained 2–7 years and produced on demand for state agricultural inspectors. Today's dominant SMB tool, GorillaDesk ($4M ARR, 3,000+ companies), explicitly lacks this compliance layer. FieldRoutes (ServiceTitan) starts at $199+/month with data-hostage practices. PestPac (WorkWave) is 1990s-era at $300+/month with 15-month lock-in. No affordable tool ($49–79/month) delivers compliance + routing + scheduling in one product.

PestLog's core insight: chemical compliance logging is a legal mandate, not a feature request. Fear of a state agriculture department inspection with a missing paper binder is the conversion trigger. The compliance data library (state-specific templates, EPA product database) creates a 12–18 month defensible moat. Once 2+ years of chemical application records live in PestLog, migration away is legally risky during any records gap.

**Primary Users:** Independent PCO owner-operators (1–10 technicians) migrating from paper binders + GorillaDesk/FieldRoutes.
**Launch Vehicle:** $99 Lifetime Deal (ProductHunt + pest control Facebook groups + r/pestcontrol) to seed compliance-focused G2/Capterra reviews.
**North Star Metric:** Compliance reports generated per month (measures depth of adoption and delivery of legal value).

### What Makes This Special

1. **Compliance is the primary workflow, not a settings screen.** Chemical log entry is the first action after every job completion — it takes under 30 seconds and generates an EPA-compliant PDF report on demand.
2. **No per-tech fees.** GorillaDesk and FieldRoutes scale pricing per technician. PestLog's $79/month Team plan covers up to 10 technicians — "no pricing change as your team grows" is a direct anti-GorillaDesk positioning.
3. **Route optimization included at base price.** GorillaDesk requires the $549/month Pro plan for route optimization. PestLog includes it in the $79 Team plan.
4. **Regulatory forcing function positioning.** "The pest control software that keeps you compliant" is not a soft value prop — it is a legally grounded, fear-converting message. Paper binders getting damaged or lost is a real compliance liability.
5. **State-specific compliance template library.** Florida WDO inspection reports, California fumigation logs, NPMA-33 form builder — this library takes 12–18 months to build and creates defensible category ownership.

## Project Classification

- **Project Type:** SaaS B2B — vertical field service management
- **Domain:** Regulated field service (pesticide application, FIFRA-governed)
- **Complexity:** High — regulatory compliance layer with state-specific variation, offline-capable mobile app, multi-tenant architecture, third-party integrations (QuickBooks Online, Stripe, GPS)
- **Project Context:** Greenfield — no existing codebase

---

## Success Criteria

### User Success

**Chemical Compliance Adoption (Primary):**
- 80%+ of completed jobs have a compliant chemical log entry by Month 2 of deployment
- Chemical log entry completes in under 30 seconds for experienced users (measured in-app from screen open to submit)
- 90%+ of active accounts generate at least one EPA compliance report per month

**Operational Efficiency:**
- Route optimization saves each technician ≥15 minutes/day in drive time (measured via in-app drive-time comparison before/after optimization)
- 70%+ of accounts have automated SMS/email reminders enabled
- Tech onboarding completes in under 5 minutes (from invite sent to first completed chemical log entry)
- Owner-operators report ≥40% reduction in administrative time (before/after survey at 30-day check-in)

**Retention Signal (Aha Moment):**
- Users who generate their first EPA compliance report within 7 days of signup have 3x 90-day retention vs. users who do not — chemical report generation is the activation metric

### Business Success

**Phase 1 — LTD Validation (Months 1–3):**
- 300 LTD units sold within 60 days of launch ($29,700 gross revenue minimum)
- 500 LTD units total before LTD close (Month 3)
- 4.0+ average rating on G2/Capterra/ProductHunt from first 30 reviews
- 40%+ Sean Ellis "very disappointed" test score at 30-day in-app survey

**Phase 2 — Subscription Growth (Months 4–12):**
- $10,000 MRR by Month 12 (≈125 subscribers at $79/month average)
- Monthly churn ≤3% by Month 6
- Trial-to-paid conversion ≥20% by Month 6
- Customer acquisition cost ≤$50 by Month 6
- 100+ reviews at 4.5+ average across G2 and Capterra

**Phase 3 — Commercial Expansion (Year 2):**
- $30,000 MRR by end of Year 2
- Commercial tier ($149/month) contributing ≥20% of MRR
- Monthly churn ≤2%
- NPS ≥50 at 90-day check-in

### Technical Success

- Mobile chemical log entry achieves sub-30-second completion for 90%+ of entries in field conditions
- Offline chemical log entries sync without data loss when connectivity returns (zero compliance gap from connectivity issues)
- EPA compliance report PDF generates within 10 seconds for any date range up to 12 months
- System uptime 99.5%+ (measured monthly via cloud provider SLA)
- API response times ≤500ms for 95th percentile under typical load (100 concurrent users)

### Measurable Outcomes

| Metric | Month 3 | Month 12 | Year 2 |
|--------|---------|----------|--------|
| LTD Sales | 500 units | — | — |
| Monthly Subscribers | 30 | 125 | 400 |
| MRR | $2,000 | $10,000 | $30,000 |
| Compliance Reports/Month | 500 | 5,000 | 15,000 |
| Monthly Churn | <5% | <3% | <2% |
| Trial-to-Paid | 15%+ | 20%+ | 25%+ |
| G2/Capterra Reviews | 20+ @ 4.0 | 100+ @ 4.5 | 300+ @ 4.5 |
| NPS | 30+ | 40+ | 50+ |

---

## Product Scope

### MVP — Minimum Viable Product

The MVP proves the compliance-first thesis: a PCO can log every chemical application in the field in under 30 seconds, generate an EPA compliance report in under 60 seconds, and manage their recurring service schedule — all from a single mobile app.

**Core Journeys Supported by MVP:**
- Owner-operator: chemical log entry → compliance report generation → state inspection response
- Technician: daily route view → job execution → chemical log entry → job completion
- Owner-operator: recurring account management → service scheduling → customer reminders
- Owner-operator: invoice generation → Stripe payment collection → QuickBooks sync

**Must-Have Capabilities (MVP):**

| Capability | Rationale |
|-----------|-----------|
| Chemical application log (EPA-standard fields) | Core legal requirement and primary differentiator |
| EPA compliance PDF report (filterable by date, tech, property, chemical) | The product's job-to-be-done during an inspector visit |
| Chemical product library (500+ pre-seeded products with EPA reg numbers) | Removes data entry friction from log entry |
| Pesticide applicator license tracking + renewal reminders | Unique differentiator; no competitor has this |
| Recurring service scheduling (weekly/bi-weekly/monthly/quarterly/custom) | Core operational workflow |
| Route optimization (daily route sequencing by drive time) | Included at base price — GorillaDesk charges 10x for this |
| Mobile-first iOS + Android apps with offline capability | Field use requirement; spotty connectivity is real |
| Automated SMS + email appointment reminders | Saves 3–6 hours/week of manual texting |
| Auto-generated invoicing on job completion | Closes the billing loop |
| Stripe payment processing | Online payment capture |
| QuickBooks Online sync | Eliminates double-entry accounting |
| Owner/manager dashboard (compliance health, revenue, schedule) | Business visibility |
| Technician mobile app (route view, job completion, chemical log) | End-user daily driver |

### Growth Features (Post-MVP, Phase 2 — Months 4–9)

- State-specific compliance templates: Florida WDO inspection reports, California fumigation logs, NPMA-33 form builder, New York DEC reporting, Texas TPWD forms
- Treatment site maps with GPS-tagged bait station placement on property diagrams
- Chemical inventory tracking and restock alerts
- Referral program ($50/referral or 1 month free)
- Review request automation (G2/Capterra seeding)
- GorillaDesk CSV migration tool (one-click import)

### Vision (Future — Year 2+)

- Commercial compliance tier ($149/month): FDA/USDA-overlay compliance for restaurant/food processing/healthcare facility accounts; client portal for commercial account managers to pull treatment history reports on demand
- AI upsell coach at point-of-service: while technician logs an ant treatment, app suggests a moisture barrier quote with pre-written customer pitch and one-tap quote generation
- Voice-first chemical log entry (30-second → 10-second target)
- Pool chemical compliance module (identical regulatory engine, different templates)
- Lawn care chemical compliance module
- Multi-location / franchise management
- Chemical supplier integration (automatic restock triggers)
- Compliance-as-a-Service: quarterly human compliance audit review with regulatory certification

---

## User Journeys

### Journey 1: Marcus — The State Inspection Trigger (Primary Owner-Operator — Success Path)

**Opening Scene:** Marcus owns Safeguard Pest Solutions in suburban Atlanta. He has 3 technicians, 85 recurring accounts, and GorillaDesk for scheduling. His chemical application records live in two filing cabinet binders. On a Tuesday morning, he receives a notice from the Georgia Department of Agriculture requesting documentation of all pesticide applications at three specific properties over the past 6 months. He spends a stressful afternoon pulling together handwritten records. He's aware one binder was water-damaged last spring and the records for April–May may be incomplete.

**Rising Action:** That evening Marcus searches "pest control compliance software Georgia." He finds PestLog through a ProductHunt post shared in the "Pest Control Business Owners" Facebook group. He reads: "The pest control software that keeps you compliant. EPA chemical logs in 30 seconds. Paper binders in the trash." He compares against GorillaDesk (already using, but it lacks compliance) and FieldRoutes (tried once; $199+/month with billing horror stories). He starts a 14-day free trial.

**Week 1 — Onboarding:** Marcus imports his 85 accounts from a GorillaDesk CSV. PestLog maps customer addresses, service frequencies, and route assignments. He creates technician accounts for his 3 techs, who each install PestLog in under 3 minutes. The chemical product library comes pre-seeded with 500+ GA-common products and their EPA registration numbers.

**Week 1 — First Field Use:** Carlos (his technician) opens PestLog Monday morning: 6 accounts, sequenced for minimum drive time, with navigation integrated. After treating Account 2 for German cockroaches, Carlos taps "Log Treatment," selects "Advion Cockroach Gel Bait" from the dropdown (EPA reg 100-1484 auto-populated), enters 4g applied, submits. GPS stamp and timestamp are automatic. Total time: 22 seconds.

**Climax — Aha Moment (Week 2):** The state inspector calls requesting records for the 3 properties. Marcus opens PestLog's compliance report generator, filters by address and date range, and emails a PDF in 40 seconds. Inspector is satisfied. Marcus texts his wife: "We need this forever."

**Resolution:** Route optimization saves each technician 22 minutes/day. Customer reminders reduce inbound "when are you coming?" calls by 60%. When Marcus adds a 4th technician 3 months later, his bill doesn't change (flat $79/month). His GA applicator license renewal reminder fires 90 days before expiration — he renews without any scramble.

**Journey Requirements Revealed:** Chemical log entry (GPS, timestamp, EPA reg, product, amount, applicator), compliance PDF report generator, GorillaDesk CSV import, route optimization, technician onboarding, applicator license renewal reminders, flat pricing model.

---

### Journey 2: Diana — The Solo Operator Ready to Scale (Primary User — Solo Plan)

**Opening Scene:** Diana runs a one-person pest control business in Phoenix, AZ, with 32 recurring accounts. She tracks chemical applications in a spiral notebook, manually texts 30+ customers every month to confirm treatments, and manages routes from memory. She wants to hire her first technician in 6 months but is scared: adding a second person means coordinating routes she currently runs from her head.

**Rising Action:** Diana sees a ProductHunt post for PestLog and reads the $99 LTD offer. Her AZ applicator license expires in 8 months — she has a sticky note on her monitor. She recognizes her notebook as the liability it is and sees PestLog's "pesticide license renewal reminders" feature listed on the features page. She buys the LTD the same day.

**Onboarding:** Diana adds her 32 accounts, sets service frequencies, and enables automated SMS reminders. Customer reminder automation sends within 20 minutes of her completing setup. She logs her first chemical application that afternoon and realizes the dropdown pre-populates her most-used AZ products.

**Aha Moment:** Three weeks in, an AZ Department of Agriculture compliance check happens at a customer's property. The inspector asks Diana for her application records for that address. Diana pulls out her phone, runs a report, and emails the PDF to the inspector in under 60 seconds. The inspector compliments her record-keeping. Diana posts in r/pestcontrol: "If you're still using a paper notebook for chemical logs, PestLog changed my life."

**Scaling Moment:** When Diana hires her first technician, she creates a technician account, sends an invite, and the tech is logging chemical applications within 5 minutes. Diana gets a consolidated compliance dashboard showing both her entries and her tech's entries. No change in price.

**Journey Requirements Revealed:** Solo plan ($49/month, 1 technician), LTD purchase flow, applicator license expiration tracking with configurable reminder windows, consolidated multi-technician compliance dashboard, rapid technician onboarding.

---

### Journey 3: Carlos — The Field Technician (End User, Not Buyer)

**Opening Scene:** Carlos is a licensed GA applicator (Category 7A) working for Marcus at Safeguard. He's been doing pest control for 4 years, comfortable with smartphones, but frustrated with apps that require too many taps. His current workflow: text Marcus each morning for his route, log chemicals on Marcus's paper form at end of day (sometimes forgetting exact quantities), navigate between accounts using Apple Maps manually.

**Rising Action:** Marcus tells Carlos to download PestLog and demo it for a week. Carlos opens it Monday at 7:30am and sees his 6 accounts, sequenced by drive time, with integrated navigation.

**Climax:** After treating Account 3 for bed bugs, Carlos taps "Log Treatment" in 2 taps from the job screen. The form pre-fills with the service address. He selects "Crossfire Bed Bug Concentrate" from the dropdown (his GA license's approved chemicals pre-filtered), enters 4 oz applied to perimeter and harborage areas, and submits. Twenty-five seconds. He doesn't worry about remembering quantities at 5pm.

**Resolution:** End of week, Carlos's 6 accounts show 6 completed chemical logs. He never had to fill out a paper form. Marcus's compliance dashboard shows 100% log completion for the week.

**Journey Requirements Revealed:** Technician-specific mobile app view (route list, job screen, 2-tap log access), product dropdown pre-filtered by applicator license category, offline capability (field connectivity is spotty), pre-filled address from job record, job completion flow (log → signature → invoice trigger).

---

### Journey 4: Commercial Account Inspection (Future — Commercial Tier)

**Opening Scene:** A pest control company services 12 restaurant accounts. One restaurant's FDA food safety audit requires documentation of all pest control treatments in the past 12 months.

**Rising Action:** The restaurant manager logs into their PestLog client portal, selects the property, and downloads a treatment history PDF showing every application: date, chemical, EPA reg number, technician license, GPS location. The PDF is formatted to FDA food facility inspection standards.

**Resolution:** The restaurant passes the FDA audit. The PCO uses this as a case study to pitch 3 other restaurant chains. The commercial tier ($149/month) justifies itself in one audit-passing.

**Journey Requirements Revealed:** Client portal for commercial account managers, FDA/USDA-overlay compliance report format, property-specific treatment history export, commercial account manager user type.

---

### Journey Requirements Summary

| Journey | Core Capabilities Required |
|---------|---------------------------|
| Marcus (State Inspection) | Chemical log entry, compliance PDF, GorillaDesk import, route optimization, license reminders |
| Diana (Solo → Scale) | Solo plan, LTD flow, license tracking, multi-tech dashboard, tech onboarding |
| Carlos (Technician) | Mobile route view, 2-tap log, product dropdown, offline sync, job completion flow |
| Commercial Audit (Future) | Client portal, FDA-format report, property treatment history export |

---

## Domain-Specific Requirements

### Regulatory & Compliance Framework

**FIFRA (Federal Insecticide, Fungicide, and Rodenticide Act):**
- Every pesticide application record must include: product name, EPA registration number, application site (address + GPS), application rate, total amount applied, applicator name and license number, date and time of application.
- Records must be available for inspection upon request by state or federal agricultural agencies.
- Records retained minimum 2 years; up to 7 years for California, 5 years for Florida, varying by state.

**State-Level Amplification:**
- California (CDPR): Mandatory Pesticide Use Reporting (PUR) — monthly reporting of all commercial pesticide applications. Fumigation records require additional documentation.
- Florida (FDACS): Wood-destroying organism (WDO) inspection reports (NPMA-33 form) required for real estate transactions. Separate from general pesticide logs.
- New York (NYSDEC): Commercial pesticide application records must include additional DEC fields not required by FIFRA baseline.
- Texas (TPWD): Category-specific requirements for termite control operators.
- Louisiana: Annual license renewal tracking requirement specific to PCOs.

**FIFRA Section 8(b) — Applicator License Compliance:**
- Each technician performing pesticide applications must hold a current state applicator license in the relevant pesticide category.
- License expiration creates immediate compliance risk — unlicensed application is a FIFRA violation.
- PestLog must track per-technician license numbers, categories, expiration dates, and issue configurable renewal reminders.

**Compliance Data Integrity Requirements:**
- Chemical log entries must be immutable after submission (append-only). Corrections require supervisor-level override with audit trail.
- Offline entries must sync without data loss. Sync conflicts are flagged for owner review (last-write-wins is insufficient for compliance records).
- Record retention: PestLog must retain chemical application records for minimum 7 years (California-compliant baseline).
- All timestamps must be stored in UTC with display conversion to user's timezone.

### Technical Constraints

**Security & Data Privacy:**
- All pesticide application records are business-sensitive and potentially subject to regulatory disclosure. At-rest encryption required for all compliance data.
- Applicator license numbers are personally identifiable information (PII) — encrypted storage, no public exposure.
- Payment data handled exclusively by Stripe (PCI-DSS Level 1 via Stripe); PestLog stores no raw card data.
- Multi-tenant data isolation: One PCO company must never access another company's data.

**Mobile Connectivity Constraints:**
- Field service areas (suburban residential, commercial districts) experience intermittent 3G/LTE connectivity.
- Chemical log entry must be fully functional offline — entries queue locally and sync when connectivity returns.
- Offline-first architecture for the technician mobile app is mandatory, not optional.

**GPS & Location Requirements:**
- Chemical log GPS stamps must capture the actual application location (not the customer's billing address).
- GPS coordinates must be stored with accuracy within 10 meters (mobile GPS standard).
- GPS capture must not require manual confirmation — automatic capture on log entry submit.

### Integration Requirements

**QuickBooks Online (Mandatory for MVP):**
- Bidirectional sync: jobs created in PestLog → invoices in QBO; payment status from Stripe → payment records in QBO.
- OAuth 2.0 authentication via QuickBooks API.
- Sync failure must be visible to owner and retried automatically.

**Stripe Payment Processing (Mandatory for MVP):**
- Stripe Connect for SaaS billing model (PestLog charges operators; operators charge customers).
- Support for one-time and recurring payment links.
- Webhook handling for payment confirmation → invoice status update.

**GPS/Navigation (Mandatory for MVP):**
- Deep-link to Apple Maps (iOS) and Google Maps (Android) from route stop.
- Route optimization via open-source TSP (Traveling Salesman Problem) solver or Google Maps Distance Matrix API.

**Twilio (Mandatory for MVP):**
- SMS appointment reminders and treatment completion notifications.
- Configurable sender number per PCO company.

### Risk Mitigations

**Data Loss Risk (Compliance Records):** Offline-first mobile app with local SQLite storage; background sync with conflict detection; server-side write-ahead logging; daily backup with point-in-time recovery.

**Regulatory Update Risk:** Modular compliance template system — state-specific fields defined in configuration, not hardcoded. Regulatory updates do not require app releases; new templates deploy server-side.

**Applicator License Expiration Risk:** 90/60/30-day reminder emails + in-app banners; owner dashboard shows all technician license statuses with color-coded expiration risk (green/yellow/red); expired license blocks new chemical log entries for that technician until renewed.

---

## Innovation & Novel Patterns

### Detected Innovation Areas

**1. Compliance as Primary Conversion Driver (Regulatory Forcing Function Model)**
PestLog's GTM innovation is using legal mandate as the conversion trigger. Unlike most SaaS tools that sell productivity or efficiency, PestLog converts on compliance fear — a real, legally grounded concern. The messaging "paper binders = legal liability" is not manufactured urgency; it reflects genuine FIFRA enforcement risk. This creates a unique cold outreach and community seeding strategy: compliance horror stories in r/pestcontrol drive organic awareness.

**2. State-Specific Compliance Template Library as Moat**
No competitor at SMB pricing ($49–79/month) has built state-specific pesticide compliance templates (FL WDO, CA fumigation, NPMA-33, NY DEC). Building this library for 50 states takes 12–18 months and requires ongoing regulatory monitoring. The library is a structural barrier to entry that increases in value as more states are added — competitors cannot buy this capability; they must build it.

**3. Compliance Data Lock-In (Ethical Stickiness)**
Unlike most SaaS lock-in (contract terms, data hostage fees), PestLog's stickiness comes from genuine regulatory need: once 2–5 years of chemical application records exist in PestLog, migrating away creates a records gap that is itself a compliance risk. This is ethical lock-in — users stay because the data is genuinely valuable and legally necessary, not because export is blocked.

### Market Context

GorillaDesk (the primary incumbent) grew to $4M ARR and 3,000+ companies bootstrapped without compliance features. Their growth validates the vertical; their compliance gap is the wedge. QuoteIQ has introduced AI-powered route optimization targeting GorillaDesk defectors, but explicitly has no compliance features (general FSM DNA makes deep vertical compliance culturally difficult). The HN front-page story (April 2026, 448 points) about a founder who took a technician job to research pest control vertical SaaS confirms the market opportunity and the absence of a dominant compliance-first player.

### Validation Approach

**Pre-launch validation (alpha test, Weeks 6–9):**
- 5–10 real PCOs use PestLog for 2 weeks in the field
- Primary metric: chemical log entry time (target: 90%+ of entries under 45 seconds)
- Secondary metric: inspector-ready compliance report generated by 100% of testers within 7 days

**LTD launch validation (Weeks 9–12):**
- 300 LTD sales within 60 days = confirmed product-market fit signal
- Chemical log completion rate ≥75% by Month 2 = core feature adoption confirmed

**Go/No-Go Decision (Month 3):** If log completion rate < 50%, iterate on mobile UX before scaling subscription growth.

---

## SaaS B2B Specific Requirements

### Project-Type Overview

PestLog is a vertical SaaS B2B platform with these architectural characteristics:
- **Multi-tenant:** Each PCO company is a separate tenant with full data isolation
- **Role-based access:** Owner-operator (admin), technician (field user), commercial account manager (future read-only portal)
- **Mobile-first with web companion:** Technician primary interaction is iOS/Android; owner-operator uses both mobile and web dashboard
- **Offline-capable mobile:** Chemical log entry and route view must work without connectivity

### Technical Architecture Considerations

**Multi-Tenancy Model:**
- Database-per-tenant is preferred for compliance data isolation and audit requirements; schema-per-tenant acceptable if database-per-tenant is cost-prohibitive at early stage.
- Tenant identification via subdomain or JWT-embedded tenant ID.
- Row-level security on all compliance-related tables (chemical logs, invoices, customer records).

**Role-Based Access Control (RBAC):**

| Role | Permissions |
|------|-------------|
| Owner | Full access: all technicians' data, compliance reports, invoicing, QBO sync, account settings |
| Manager | Same as Owner except billing/subscription management |
| Technician | Own route view, own job completion, own chemical log entry; read-only access to assigned customers |
| Commercial Account Manager (future) | Read-only portal: treatment history reports for their assigned properties only |

**Mobile App Architecture:**
- React Native (iOS + Android) or Flutter with offline-first local state management.
- Local SQLite database for offline queue (chemical log entries, job status updates).
- Background sync with exponential backoff when connectivity returns.
- Biometric authentication (Face ID / fingerprint) for field app security.

**Compliance Report Generation:**
- PDF generation server-side (not client-side) to ensure consistent formatting and to prevent tampering claims.
- Reports are cryptographically timestamped at generation time (hash of report content + generation timestamp stored server-side).
- Reports link back to the individual chemical log entries they're based on (audit trail).

### Tenant Model

- Subscription level stored at tenant level (Solo: 1 tech, Team: ≤10 techs, Commercial: ≤10 techs + FDA-overlay features).
- Technician seat count enforced at tenant level; adding a technician beyond plan limit prompts upgrade (not hard block).
- LTD cohort managed as a special subscription type with feature flags matching Team plan; upgrade path to Commercial tier after LTD.

### Implementation Considerations

**Chemical Product Library:**
- Pre-seed with 500+ most common US pest control products from EPA's National Pesticide Product Database (public dataset).
- Products indexed by: EPA registration number, product name, active ingredients, common pest targets.
- Custom product add by owner (for state-registered products not in national database).
- Product search by name or EPA reg number.

**Subscription Billing:**
- Stripe Billing for subscription management (monthly and annual billing).
- LTD managed as one-time Stripe payment + lifetime subscription record.
- Trial period: 14 days, no credit card required for trial start.

---

## Project Scoping & Phased Development

### MVP Strategy & Philosophy

**MVP Approach:** Problem-solving MVP — minimum functionality to legally replace paper chemical logs while adding route optimization and automated reminders. A PCO who switches to PestLog must never need to maintain a paper chemical log again from Day 1.

**Resource Requirements:** 2–3 engineers (1 full-stack/backend, 1 mobile, 1 full-stack/frontend), 1 product/PM (founder), 1 designer (contract).

**Build Timeline:** 8 weeks to feature-complete MVP; Weeks 6–9 alpha test with real PCOs; Weeks 9–12 LTD launch.

### MVP Feature Set (Phase 1)

**Core User Journeys Supported:**
1. Technician daily workflow: route view → navigate to account → log chemical application → job completion
2. Owner compliance workflow: filter chemical logs → generate EPA compliance report → export PDF
3. Owner operations: add/edit recurring accounts → configure service frequencies → view schedule
4. Owner communication: configure automated reminders → send treatment completion notifications
5. Owner billing: review auto-generated invoice → send payment link → track payment status
6. Owner QuickBooks: connect QBO account → enable auto-sync → reconcile transactions

**Must-Have Capabilities:**
- Chemical log entry form (EPA-standard fields, product dropdown, GPS auto-capture, offline support)
- Chemical product library (500+ products pre-seeded, EPA reg numbers, custom product add)
- EPA compliance report PDF generator (filterable: date range, technician, property, chemical)
- Applicator license tracking per technician (license number, state, category, expiration, renewal reminders at 90/60/30 days)
- Customer/account management (address, service frequency, contact info, treatment history)
- Recurring schedule engine (weekly/bi-weekly/monthly/quarterly/custom intervals)
- Route optimization (daily route builder, drive-time sequencing, map view)
- Automated SMS + email reminders (configurable windows: 48hr, 24hr before appointment)
- Treatment completion notifications (post-job summary to customer)
- Job completion flow (log → customer signature → invoice trigger)
- Auto-generated invoices on job completion
- Stripe payment processing (one-time and recurring payment links)
- QuickBooks Online sync (invoice push, payment status pull)
- Owner/manager dashboard (compliance health %, revenue summary, schedule overview, technician license statuses)
- Technician mobile app (route list, navigation deep-link, job screen, 2-tap log entry)
- iOS + Android native apps with offline capability
- Multi-tenant account management (owner creates company, invites technicians)
- Role-based access: Owner, Technician

### Post-MVP Features (Phase 2 — Months 4–9)

- GorillaDesk CSV import migration tool
- State-specific compliance templates: FL WDO, CA fumigation, NPMA-33, NY DEC, TX TPWD
- Treatment site maps (GPS-tagged bait station placement diagrams)
- Chemical inventory tracking + restock alerts
- Customer review request automation (post-treatment email with G2/Capterra link)
- Referral program ($50/referral credit or 1 month free)
- Service type-specific log fields (termite vs. general pest vs. rodent vs. mosquito)

### Post-MVP Features (Phase 3 — Year 2)

- Commercial compliance tier ($149/month): FDA/USDA-overlay report format, client portal for commercial account managers
- AI upsell coach at point-of-service (observation → quote suggestion)
- Voice-first chemical log entry
- Pool chemical compliance module
- Lawn care chemical compliance module
- Multi-location management

### Risk Mitigation Strategy

**Technical Risks:**
- *Offline sync conflicts in compliance data:* Append-only chemical log entries (no edits); conflicts flagged for owner review; supervisor override with audit trail. Mitigated by design constraint: entries are never edited, only appended.
- *Mobile UX not faster than paper:* Alpha test with 5–10 real technicians before launch; 30-second entry time measured in-app; iterate aggressively on log entry flow before launch.
- *Route optimization performance:* Use Google Maps Distance Matrix API for MVP (proven, scalable); evaluate open-source TSP if API costs become prohibitive at scale.

**Market Risks:**
- *GorillaDesk adds EPA compliance reports:* Build state-specific template library and community trust before they can respond (bootstrapped 11–50 person team cannot prioritize this in < 6 months).
- *LTD cohort doesn't convert to MRR:* LTD capped at Team plan features with 3-tech limit; upgrade to Commercial or to remove tech cap required. Subscription conversion email sequence at 6-month and 12-month LTD anniversaries.

**Resource Risks:**
- *If team is smaller than planned:* Defer treatment site maps, chemical inventory tracking, and state-specific templates to Phase 2. Core compliance log + scheduling + reminders + invoicing must be MVP-complete.

---

## Functional Requirements

### Chemical Compliance Management

- FR1: Technicians can create a chemical application log entry for any completed job, capturing product name, application amount/rate, and service notes.
- FR2: The system auto-populates EPA registration number, active ingredients, and signal word when a technician selects a product from the chemical library.
- FR3: The system auto-captures GPS coordinates and timestamp at the moment of chemical log submission (no manual entry required).
- FR4: Chemical log entries are stored as append-only records — existing entries cannot be modified; corrections require a supervisor-level addendum with audit trail.
- FR5: Technicians can create chemical log entries while offline; entries queue locally and sync automatically when connectivity returns.
- FR6: Owners can generate an EPA-compliant chemical application report as a PDF, filterable by date range (up to 7 years), technician, customer/property, and chemical product.
- FR7: Owners can email generated compliance reports directly from within the app to any email address (e.g., state inspector).
- FR8: The system retains chemical application records for a minimum of 7 years (California-compliant retention period).

### Chemical Product Library

- FR9: Technicians can search the chemical product library by product name or EPA registration number.
- FR10: The product library comes pre-seeded with 500+ common US pest control products including EPA registration numbers and active ingredients.
- FR11: Owners can add custom chemical products not in the pre-seeded library.
- FR12: The system displays the products approved for the technician's applicator license category in the log entry dropdown.

### Applicator License Management

- FR13: Owners can add applicator license records per technician: state, license number, category/subcategory, expiration date.
- FR14: The system sends automated renewal reminders to the owner and technician at 90, 60, and 30 days before each license expiration date (configurable).
- FR15: The owner dashboard displays all technician license statuses with color-coded expiration risk (green: >90 days, yellow: 30–90 days, red: <30 days or expired).
- FR16: The system blocks new chemical log entries for a technician whose applicator license has expired, displaying the expiration reason; supervisor override is available with audit trail entry.

### Account & Service Management

- FR17: Owners can create and manage customer accounts with: name, service address, billing address, contact info, service frequency, service type, and assigned technician(s).
- FR18: The system generates a recurring service schedule for each account based on configured service frequency (weekly, bi-weekly, monthly, quarterly, custom interval).
- FR19: Owners and managers can view the complete service schedule across all accounts and technicians in a calendar view and a list view.
- FR20: Owners can skip or reschedule individual service occurrences without affecting the underlying recurring pattern.
- FR21: Each customer account displays a complete treatment history: date, service type, chemical(s) applied, technician, and service notes.
- FR22: Owners can add and manage service types (general pest, termite, rodent, mosquito, bed bug, fumigation) with service-type-specific log fields.

### Route Optimization

- FR23: Owners can generate an optimized daily route for each technician, sequenced to minimize total drive time between scheduled accounts.
- FR24: Technicians can view their optimized daily route as an ordered list and as a map view with account markers and estimated drive times between stops.
- FR25: Technicians can launch turn-by-turn navigation to any route stop via deep-link to the device's native maps application (Apple Maps on iOS, Google Maps on Android).
- FR26: Owners can manually reorder route stops after optimization to accommodate customer requests or field conditions.

### Automated Customer Communication

- FR27: Owners can configure automated SMS and email appointment reminders for each account, with configurable lead times (48-hour and 24-hour pre-appointment windows available).
- FR28: The system sends an automated treatment completion notification to the customer upon job completion, including a link to their digital treatment summary.
- FR29: The system sends an automated re-treatment due reminder to the customer a configurable number of days before their next scheduled service.
- FR30: Owners can view the communication log for each customer showing all automated messages sent, delivery status, and timestamps.

### Job Completion & Invoicing

- FR31: Technicians can complete a job via the mobile app by: submitting the chemical log, capturing a customer signature, and triggering invoice generation.
- FR32: The system auto-generates a job invoice on completion, pre-populated with the customer's billing info, service description, and configured pricing.
- FR33: Owners can send invoice payment links to customers via email and SMS.
- FR34: The system tracks invoice status per job: draft, sent, viewed, paid, overdue.
- FR35: Owners can configure recurring automatic billing for contract accounts (monthly/quarterly auto-charge via saved Stripe payment method).

### QuickBooks Integration

- FR36: Owners can connect PestLog to their QuickBooks Online account via OAuth 2.0.
- FR37: The system automatically syncs completed invoices from PestLog to QuickBooks Online as new invoice records.
- FR38: The system automatically updates invoice payment status in QuickBooks Online when payments are received via Stripe.
- FR39: Owners can view sync status (last sync timestamp, sync errors) and manually trigger a re-sync.

### Owner/Manager Dashboard

- FR40: The owner dashboard displays a compliance health metric: percentage of completed jobs with a chemical log entry for the current week, month, and rolling 30 days.
- FR41: The owner dashboard displays revenue metrics: total invoiced, total collected, and total outstanding for the current month and month-to-date.
- FR42: The owner dashboard displays a technician overview: jobs completed today, current route status, and compliance health per technician.
- FR43: Owners can view all upcoming scheduled services across all technicians in a 7-day lookahead view.

### User & Team Management

- FR44: Owners can invite technicians to join their PestLog account via email; technicians receive an app download link and account setup instructions.
- FR45: Owners can assign technicians to specific customer accounts (preferred technician) or leave accounts unassigned for flexible dispatch.
- FR46: Owners can deactivate a technician account (preserving all historical compliance records) when a technician leaves the company.
- FR47: The system enforces role-based access: technicians can view and act on only their own assigned jobs and chemical logs; owners see all.

### Subscription & Account Management

- FR48: New users can start a 14-day free trial without providing a credit card.
- FR49: Owners can upgrade, downgrade, or cancel their subscription from within the account settings.
- FR50: The system enforces plan-based limits: Solo plan allows 1 technician; Team plan allows up to 10 technicians; exceeding plan limits prompts upgrade (non-blocking prompt, not hard cutoff).

---

## Non-Functional Requirements

### Performance

- NFR1: Chemical log entry screen loads within 2 seconds on mobile devices on 3G connectivity.
- NFR2: Route optimization for a daily schedule of up to 20 stops completes within 5 seconds.
- NFR3: EPA compliance PDF report for a 12-month date range generates within 10 seconds.
- NFR4: The mobile app continues to function for chemical log entry and route viewing during complete loss of connectivity (offline mode).
- NFR5: Offline chemical log entries sync to the server within 60 seconds of connectivity restoration.
- NFR6: API response times for all server-side requests are ≤500ms for the 95th percentile under a load of 100 concurrent users.

### Security

- NFR7: All chemical application records are encrypted at rest using AES-256.
- NFR8: All data in transit is encrypted using TLS 1.2 or higher.
- NFR9: Applicator license numbers and other PII are stored with field-level encryption.
- NFR10: Multi-tenant data isolation is enforced at the database layer — a tenant can never query or access another tenant's records under any circumstances.
- NFR11: All user authentication tokens expire after 30 days of inactivity; mobile biometric authentication re-validates token on each app open.
- NFR12: The system maintains a complete audit log of all owner-level overrides to chemical log records, including user ID, timestamp, and reason.
- NFR13: Payment data is handled exclusively through Stripe's PCI-DSS Level 1 compliant infrastructure; PestLog stores no raw card numbers.

### Reliability

- NFR14: System uptime is ≥99.5% measured monthly, excluding scheduled maintenance windows (communicated ≥24 hours in advance).
- NFR15: Chemical log offline queue persists through app crashes and device restarts; entries are never lost due to app lifecycle events.
- NFR16: Chemical application records are backed up with point-in-time recovery capability to within 1 hour of any failure event.
- NFR17: QuickBooks and Stripe sync failures are surfaced to the owner within the app and retried automatically with exponential backoff (up to 3 retries over 1 hour before alerting owner).

### Scalability

- NFR18: The system supports up to 10,000 active technician accounts without architectural changes.
- NFR19: Chemical application record storage scales to 10 years of retention for up to 50,000 customers without query performance degradation.
- NFR20: The system handles usage spikes of 3x normal load (e.g., spring pest season surge) without degradation in response time.

### Accessibility

- NFR21: The mobile app meets WCAG 2.1 AA contrast ratio requirements for text displayed on the job screen and chemical log entry form (field technicians using apps in bright outdoor sunlight).
- NFR22: Chemical log entry form fields support autofill and screen reader navigation for accessibility compliance.

### Integration

- NFR23: QuickBooks Online sync completes invoice push within 60 seconds of invoice generation in PestLog.
- NFR24: Twilio SMS delivery achieves ≥97% delivery rate for appointment reminders (as reported by Twilio delivery receipts).
- NFR25: Stripe payment webhook processing completes invoice status updates within 30 seconds of payment event.

---

*PRD completed: 2026-04-13*
*Source documents: Product brief (2026-04-13), Market research (2026-04-12), Shortlisted idea (Score: 95/105, 2026-04-09)*
*North Star Metric: Compliance reports generated per month*
*Next recommended step: Create Technical Architecture*
