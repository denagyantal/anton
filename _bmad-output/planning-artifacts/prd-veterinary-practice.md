---
stepsCompleted: [step-01-init, step-02-discovery, step-02b-vision, step-02c-executive-summary, step-03-success, step-04-journeys, step-05-domain, step-06-innovation, step-07-project-type, step-08-scoping, step-09-functional, step-10-nonfunctional, step-11-polish, step-12-complete]
inputDocuments:
  - ideas/shortlisted/veterinary-practice-communication.md
  - _bmad-output/planning-artifacts/market-research-veterinary-practice.md
  - _bmad-output/planning-artifacts/brief-veterinary-practice.md
workflowType: prd
classification:
  projectType: saas_b2b
  domain: veterinary_practice_management
  complexity: medium
  projectContext: greenfield
lastStep: step-12-complete
project_name: veterinary-practice
user_name: Root
date: 2026-04-10
---

# Product Requirements Document — VetSimple

**Author:** Root
**Date:** 2026-04-10
**Version:** 1.0
**Status:** Ready for Architecture

---

## Executive Summary

Independent veterinary clinics — 30,000+ in the US, 60–70% independently owned — are trapped between legacy software that crashes and modern cloud tools priced for corporate groups. The market gap is precise: nothing credible exists at $149–249/month flat covering PIMS + communication + AI SOAP notes + unlimited SMS for 1–3 DVM clinics.

**VetSimple** is a cloud-native practice platform for independent 1–3 doctor veterinary clinics. At $149–199/month flat (unlimited staff users, no per-text fees, free white-glove migration), it delivers cloud PIMS, AI SOAP note generation, two-way SMS, automated appointment reminders, and online booking in one interface. No four-app fragmentation. No surprise invoices. No server room.

The go-to-market wedge is a standalone AI SOAP note tool ("VetScribe") at $149 LTD — shippable in 4–6 weeks — which generates immediate DVM ROI (60 min/day savings) and creates a Trojan horse into full platform adoption. The core communication stack (two-way SMS, reminders, online booking) is built as a shared platform with a future dental vertical, reducing development cost by 60–70%.

Market validation is strong: Weave reached ~$245M ARR applying the identical "communication layer on top of legacy software" thesis to dental. Shepherd's 6 outages in February 2026 alone left mid-market vet practices actively seeking alternatives. The 10-Step Playbook score is 90/105 (Tier 1 BUILD) across 13 separate evaluation data points spanning January–April 2026.

### What Makes This Special

**Flat all-in pricing as a strategic weapon.** Every competitor — ezyVet, Shepherd, IDEXX Neo — prices per-user, per-text, or per-module. VetSimple's flat rate is not a pricing tactic; it's a structural promise that eliminates bill shock for growing independent practices. Competitors cannot quickly replicate this without repricing their entire business model.

**AI SOAP built-in, not a $99/DVM add-on.** VetRec, ScribeAI, and DAX charge $49–297/DVM/month as a separate subscription. VetSimple includes voice-to-structured-note in the base price. This is the feature that creates the 3-minute aha moment after which a DVM will not use another system.

**Free white-glove migration eliminates the #1 switching barrier.** Cornerstone and AVImark are "sticky" not because they're good, but because migration costs $3,000–$10,000 and 4–12 weeks of disruption. "We handle your entire Cornerstone migration in 3 weeks, guaranteed, free" is a category-defining offer no competitor makes at this price point.

**Reliability SLA with real consequences.** Shepherd's 2026 outage crisis is an open wound. A 99.9% uptime SLA with downtime credits resonates immediately with practices burned by or researching Shepherd.

## Project Classification

- **Project Type:** SaaS B2B (cloud web application, multi-tenant)
- **Domain:** Veterinary practice management (healthcare-adjacent; medical record handling requires data security but not HIPAA for veterinary)
- **Complexity:** Medium — standard SaaS patterns plus voice AI transcription, two-way SMS, calendar scheduling, and data migration tooling
- **Project Context:** Greenfield — no existing codebase; shared platform architecture planned with dental vertical

---

## Success Criteria

### User Success

A VetSimple user (DVM or practice manager) has succeeded when:

- **SOAP note time**: DVM generates a structured SOAP note from voice in ≤3 minutes vs. 15–20 minutes manual charting — measurable 40–60 min/day savings per DVM
- **No-show reduction**: Practice sees ≥15% reduction in no-shows within 60 days of activating automated reminders (baseline: 15–20% no-show rate industry average)
- **Online booking adoption**: ≥30% of new appointments booked via the online widget within 90 days of go-live (baseline: 0% for most independent clinics)
- **Front desk call volume**: 40–50% reduction in inbound scheduling calls after online booking + automated reminders activate
- **Onboarding speed**: Any staff member reaches daily competency within ≤2 hours of first login
- **Migration relief**: ≥90% of migrated practices rate their migration "easier than expected" in the day-30 survey
- **Staff adoption breadth**: ≥70% of practices use 3+ core modules within 60 days of activation

**The 30-day activation threshold:** A practice that completes migration, has DVMs charting via voice, and has reminders running automatically within 30 days has near-zero churn probability. This is the critical success gate.

### Business Success

**6-Month Targets (Launch → Initial Traction)**
- 50 paying practices at $149–199/month = $89K–$119K MRR
- 200+ LTD purchasers of standalone VetScribe AI SOAP tool
- 4.7+ star average on G2 and Capterra (minimum 20 reviews)
- Zero data migration failures (reputation-critical)

**12-Month Targets (Product-Market Fit)**
- 250 paying practices = $450K–$600K MRR (~$5.4–7.2M ARR)
- Net Revenue Retention ≥105% (tier upgrades offset churn)
- Monthly churn ≤1.5% (implies median lifetime >66 months)
- ≥40% of new customers from peer referrals
- NAVC VMX presence (January 2027)

**24-Month Targets (Path to Scale)**
- 1,000+ paying practices = $2.0–2.5M MRR (~$24–30M ARR)
- Dental vertical live on shared platform: 500+ dental practices
- Team of 15–20

### Technical Success

- **Uptime**: 99.9% monthly uptime (≤43 min downtime/month) with automated alerting within 5 minutes of incident
- **Zero data loss**: No patient records lost during migration or in production — zero tolerance
- **SOAP note accuracy**: Structured note sections (S/O/A/P) correctly populated ≥92% of the time (validated by DVM review in beta)
- **SMS delivery**: ≥97% appointment reminder delivery rate (Twilio delivery confirmation)
- **Page load performance**: Core scheduling and records pages load in ≤1.5 seconds on standard broadband
- **Migration completeness**: 100% of committed patient record fields imported with data integrity validation pre-go-live

### Measurable Outcomes

| Metric | Target | Measurement |
|--------|--------|-------------|
| SOAP time saved | ≥40 min/DVM/day | Session duration in AI module |
| No-show rate delta | ≥15% improvement | Appointment completion rate per clinic |
| Online booking rate | ≥30% within 90 days | Booking channel attribution |
| Trial-to-paid conversion | ≥25% | Cohort analysis by signup month |
| Monthly churn | ≤1.5% | Revenue churn by cohort |
| NPS at month 3 | ≥50 | In-app post-month-1 survey |
| Referral rate | ≥25% of new signups | Attribution at signup |
| Migration satisfaction | ≥90% "easier than expected" | Day-30 post-migration survey |

---

## Product Scope

### MVP — Minimum Viable Product

Target: First paying customer within 12–16 weeks of build start. MVP validates the core value proposition with the primary ICP (solo/2-DVM independent clinic leaving Cornerstone or AVImark).

**MVP Core Modules:**

1. **AI SOAP Note Generator (VetScribe)** — Voice-to-structured-note via browser/mobile; species-specific templates (dogs, cats, common exotics); save to VetSimple record or clipboard export to any external PIMS; powered by Whisper/Deepgram transcription + Claude API for structure extraction

2. **Cloud Appointment Scheduling** — Calendar view with multi-DVM/exam room columns; client + patient database; appointment types, durations, buffer time; front desk search and quick-add; Cornerstone and AVImark data importers

3. **Automated Reminders & Two-Way SMS** — Appointment confirmation SMS (24h + 2h before); vaccine/wellness recall campaigns; two-way SMS inbox with threaded conversation history; 2,500 messages/month included on Starter; Twilio-powered

4. **Online Booking Widget** — Embeddable single script tag for practice website; client-facing booking flow (species → reason → DVM → time); real-time sync with scheduling calendar; configurable deposit requirement and appointment type restrictions

5. **Basic Invoicing & Payments** — Line-item invoice creation; email delivery with Stripe payment link; 2.9% + $0.30 per transaction; payment status tracking. Does NOT include insurance claims, inventory management, or accounting integration

6. **Client & Patient Records** — Client profile (contact info, communication preferences, pets); patient profile (species, breed, DOB, weight history, vaccination records, SOAP history); document upload; IDEXX lab result read-only import

7. **White-Glove Migration Service** — Cornerstone and AVImark data importers (patient records, appointment history, vaccination records); manual migration path (VetSimple team handles in 3 weeks); free for all paid plans

### Growth Features (Post-MVP)

Months 3–9 post-launch:
- Native iOS + Android app (offline SOAP capture, sync when connected)
- Advanced reporting dashboard (practice performance, revenue, appointment trends)
- Pet parent portal (appointment history, vaccination records, invoice view, messaging)
- Automated review generation (post-appointment request to Google/Yelp)
- Dental vertical launch (same platform, dental templates, Dentrix/Eaglesoft/Open Dental integrations)
- Additional PIMS importers (ezyVet, NaVetor, DaySmart Vet)
- Wellness plan billing (automated recurring charge, compliance tracking, renewal campaigns)

### Vision (Future)

Year 2+ platform expansion:
- Telemedicine (video consults with direct SOAP note generation from video audio)
- IDEXX/Zoetis lab bidirectional integration (order labs from VetSimple, results auto-populate SOAP)
- Multi-location support (shared client database, centralized billing, per-location reporting)
- Mobile vet module (route optimization, remote scheduling, mobile invoicing + payment)
- Marketplace of approved integrations (imaging, insurance, pharmacy, specialty lab)
- Data network effects (practice benchmarking, clinical decision support)

---

## User Journeys

### Journey 1: Dr. Sarah Chen — Solo Vet Escaping Cornerstone (Primary ICP, Happy Path)

**Opening Scene:** Dr. Sarah owns a 2-exam-room small animal clinic. She's been on Cornerstone since she bought the practice in 2022. On a busy Saturday morning, Cornerstone freezes mid-consultation for the third time this month. She's 30 minutes behind, two clients in the waiting room, and her front desk is manually calling patients to confirm Monday's schedule. That evening, she posts to r/veterinary: "We're finally leaving Cornerstone — what did you switch to and how bad was the migration?"

**Discovery:** 15 replies arrive in 2 hours. VetSimple is mentioned by 3 separate users. She clicks through to G2 — 4.8 stars, 40 reviews, multiple mentions of free migration. She watches a 6-minute YouTube demo. She notes the price: "$179/month, unlimited users." She pays $400/month for Cornerstone alone, plus $89/month for a texting platform, plus manual reminder calls from her front desk.

**Trial Initiation:** She signs up for a 30-day free trial, no credit card required. Within 4 hours, a VetSimple migration specialist calls to schedule a Cornerstone data assessment. The specialist confirms her full patient database (8 years of records) can be imported in 2–3 weeks.

**Aha Moment (Day 3):** She records her first SOAP note on her phone while washing her hands after a canine vaccination exam. The structured note — Subjective, Objective, Assessment, Plan, all correctly populated with the patient's signalment and visit details — appears in the patient record in 47 seconds. She texts her practice manager: "I've been wanting this for 3 years."

**Conversion (Day 14):** Her practice manager runs a weekend test of the reminder system — 15 vaccine recall SMS campaigns go out automatically with zero manual intervention. She converts to the Growth plan at $199/month and submits the migration request.

**Full Activation (Day 45):** Migration complete. All 8 years of patient history imported. Front desk inbound call volume down 35%. Dr. Sarah left the clinic before 6 PM every day last week for the first time in 18 months.

**Advocacy (Month 3):** She posts a 5-star G2 review and replies to the original r/veterinary thread with a detailed write-up of the migration experience. Three practices DM her within a week. Two become VetSimple trials.

**Requirements Revealed:** Voice AI transcription, mobile-first SOAP interface, Cornerstone data importer, automated SMS reminders with zero-configuration setup, front desk dashboard showing reminder status, referral tracking.

---

### Journey 2: Maya Patel — Practice Manager Evaluating Systems (Key Influencer, Research Path)

**Opening Scene:** Maya manages a 2-DVM small animal clinic. She was hired 18 months ago to "modernize operations." She currently juggles three systems: DaySmart Vet for scheduling, a separate $89/month texting platform, and Google Calendar for overflow. Her DVMs don't know what a SMS confirmation costs — they just want it to work. Her job every Monday morning is reconciling what happened across three disconnected systems over the weekend.

**Research Phase:** She finds VetSimple on G2 while searching "vet practice communication platform." She reads all 40 reviews, noting the recurring mentions of single-bill simplicity and the migration service. She downloads the pricing page: one tier, one price, no per-text fees. She schedules a demo call.

**Demo (Day 1):** During the demo, she sees that the scheduling calendar, SMS inbox, and reminder dashboard all live in one interface. She asks about the SMS cost model — the rep confirms 2,500 messages/month included, additional at $0.01/message. She spends her current platform 30–40% over the 1,000-message limit every month.

**Internal Evaluation (Week 1–2):** She runs a side-by-side cost analysis: current stack ($89 + $116 DaySmart + $0 Google + $30–50/month SMS overages = $235–255/month) vs. VetSimple Growth ($199/month all-in). She presents the analysis to the DVMs. They approve a trial.

**Activation (Week 3–6):** She configures all reminder templates in 45 minutes. The online booking widget is live on the practice website by end of day 1. At day 30, she pulls a one-click ops report showing appointment volume, reminder delivery rate, and no-show delta. She presents it to the DVMs. No-show rate down 18%.

**Champion Status (Month 2+):** She becomes the de facto VetSimple expert for the practice. She onboards new front desk hires herself. She leaves a verified G2 review and joins the VetSimple customer reference program.

**Requirements Revealed:** Single unified billing interface, SMS usage dashboard, cost comparison tooling, one-click ops reporting, non-DVM onboarding experience, multi-staff permission model, reminder template configuration.

---

### Journey 3: Dr. Marcus Webb — New Practice Founder (Zero Migration, Greenfield)

**Opening Scene:** Marcus just signed a lease for his first clinic. He's 5 years out of vet school. His previous practice used ezyVet — he found it functional but overkill and expensive for a corporate group context. He's now staring at a $2,500 setup fee + $245/month minimum from ezyVet for a practice that will see 10 patients on opening day.

**Discovery:** He's in the NAVC New Practice Track when VetSimple's founder presents a case study. The pricing — $149/month, no setup fee, no per-user fees — registers immediately as the right fit for his solo launch. He signs up on his phone during the break.

**Onboarding (Day 1–3):** No migration needed. He configures his species list, appointment types, and exam rooms. The online booking widget is live before his sign even goes up. His first 5 clients book online.

**Growth Activation (Month 2–6):** As his caseload grows from 10 to 30 patients/day, he adds a second DVM. No per-user fee appears on his bill. He activates the vaccine recall system; by month 3, recall revenue exceeds his monthly software cost by 15x.

**Requirements Revealed:** Zero-migration self-serve onboarding, same-day go-live capability, per-user pricing immunity (flat rate must hold as team grows), online booking as day-1 feature.

---

### Journey 4: Front Desk Staff — Daily Operations User (End User Adoption)

**Opening Scene:** Jess is a receptionist at a 2-DVM clinic that just migrated to VetSimple from AVImark. She's 22 years old, comfortable with technology, but wary after the AVImark experience — "the old system was designed to frustrate you."

**First Week:** She's trained by the practice manager in 90 minutes. The scheduling calendar view is intuitive — she's booking appointments by hour 2. The SMS inbox shows client replies as threaded conversations, not raw texts.

**Daily Rhythm:** She checks the reminder dashboard each morning — the system automatically flagged three clients who didn't confirm their afternoon appointments. She sends a one-click re-confirmation SMS from the dashboard. No manual calling.

**Friction Point (Week 2):** A client books online for a species (rabbit) that the practice doesn't see. She flags this to the practice manager, who adds a species restriction to the booking widget in 30 seconds.

**Staff Champion (Month 2):** Jess trains the new part-time receptionist herself. She prefers VetSimple's multi-column calendar view to the single-column view she worked with in AVImark.

**Requirements Revealed:** Fast appointment search (name, species, date), one-click SMS re-confirmation, reminder delivery status dashboard, online booking species/appointment type restrictions, multi-staff concurrent access without data conflicts.

---

### Journey 5: Migration Specialist — Internal Ops (VetSimple Team)

**Opening Scene:** Alex is VetSimple's first migration specialist. A practice just submitted a migration request — 12 years of Cornerstone records, approximately 6,800 patient files. This is the largest migration attempted to date.

**Assessment:** Alex runs the Cornerstone data export tool, validates field mapping (patient ID, species, breed, owner contact, vaccination history, appointment history, SOAP notes), and identifies 43 records with malformed DOB fields.

**Data Cleaning:** Alex manually corrects the malformed records and re-validates. Full import passes the integrity check — all 6,800 patients, 47,000 appointments, 23,000 vaccination records imported with zero data loss confirmed by automated diff report.

**Go-Live:** Dr. Chen's practice is notified by email and in-app message. She schedules a 30-minute go-live orientation call. Alex walks through the migrated records live, confirms all is correct, and hands off to the support team.

**Requirements Revealed:** Internal migration dashboard (import queue, status, diff report), data validation tooling (field mapping, integrity check), malformed-record correction workflow, automated go-live notification to client, handoff protocol to support.

---

### Journey Requirements Summary

Capabilities revealed across all journeys:
- Voice-to-SOAP transcription (mobile + browser, works during handwashing)
- Structured clinical note templates by species
- Cornerstone and AVImark data importers with integrity validation
- Automated appointment reminder SMS (24h + 2h triggers, configurable)
- Vaccine/wellness recall campaign SMS
- Two-way SMS inbox with threaded conversation history
- Online booking widget (embeddable, species/type restrictions, configurable)
- Multi-DVM/exam-room scheduling calendar
- Client and patient record management
- Stripe-integrated invoicing and payment collection
- Reminder delivery status dashboard
- Usage reporting (no-shows, booking channel attribution)
- Staff permission tiers (DVM, front desk, manager, admin)
- Internal migration management tooling
- Self-serve onboarding (no migration path)
- Mobile-first SOAP capture interface

---

## Domain-Specific Requirements

### Regulatory & Compliance Context

Veterinary practice management software in the US occupies a healthcare-adjacent but distinctly less-regulated space than human medicine:

- **Not HIPAA-regulated**: Veterinary patient records (animal records) are not covered by HIPAA. However, *client* (human) data (name, address, phone, credit card) must be handled with standard data security practices.
- **State veterinary board records requirements**: Most states require veterinary records be retained 3–5 years. VetSimple must support records export (PDF/CSV) to facilitate practice transitions or record requests.
- **Prescription drug records**: Controlled substance prescriptions require specific record-keeping per DEA regulations (21 CFR Part 1304). VetSimple's prescription logging must support DEA-compliant record format (drug name, quantity, prescribing DVM, date) but does not need to integrate with DEA systems in MVP.
- **Payment processing**: PCI-DSS compliance is handled by Stripe (Level 1 PCI Service Provider); VetSimple must not store raw card data.
- **SMS compliance**: TCPA compliance for text messaging (explicit opt-in required from pet owners before reminder SMS). Opt-in must be captured at client registration and logged.

### Data Security Requirements

- All client and patient data encrypted at rest (AES-256) and in transit (TLS 1.3)
- Role-based access control: DVMs see all records; front desk sees scheduling and communication; practice managers see billing; VetSimple admins cannot access production patient data without explicit practice authorization (break-glass logging)
- Data residency: All data stored in US regions (AWS us-east-1 / us-west-2)
- Backup: Daily automated backups with 30-day retention; point-in-time recovery within 7 days
- Data portability: Any practice can export their complete data (patient records, SOAP notes, invoices) in CSV/PDF format within 48 hours of request. No data hostage situations.
- Account deletion: Full data deletion within 30 days of account termination request (excepting legally required retention periods)

### Integration Constraints

- **IDEXX lab results**: Read-only import via IDEXX HL7 feed (if IDEXX API agreement obtained) or CSV import from IDEXX portal (MVP fallback). No write-back in MVP.
- **Twilio SMS**: Primary SMS provider. Failover to Bandwidth or Vonage if Twilio degraded.
- **Stripe payments**: Sole payment processor for MVP. PCI-DSS handled by Stripe Elements (no card data touches VetSimple servers).
- **Whisper/Deepgram transcription**: Audio processed via API; no audio stored after transcription complete (privacy-by-design).
- **PIMS migration**: Cornerstone exports via proprietary `.mdb` (Access database) files; AVImark exports via XML; importers must handle common data quality issues (missing DOBs, duplicate client records, malformed phone numbers).

### Risk Mitigations

- **Migration failure risk** (High): Pre-launch, run 5 complete beta migrations with detailed diff validation before opening to public. Hire dedicated migration specialist as first non-engineering hire. No migration goes live without automated integrity check passing.
- **SMS cost blowout**: 2,500 messages/month hard cap on Starter tier (≈$17.50 variable cost at $0.007/message vs. $149 revenue). Automated alert at 80% usage. Grace overage allowance of 10% before charge.
- **Uptime SLA**: Deploy on AWS with multi-AZ redundancy. Use managed RDS (Postgres) with automated failover. Target <5 minute RTO. Automated on-call alerting via PagerDuty.
- **Vendor lock-in protection**: Avoid proprietary data formats. All data exportable in open standards. SMS provider abstracted via adapter layer for quick failover.

---

## Innovation & Novel Patterns

### Detected Innovation Areas

**1. Shared Vertical Platform Architecture (Primary Innovation)**

The core architectural insight is that the communication layer (two-way SMS, appointment reminders, recall campaigns, online booking, review generation) is identical across independent professional practices — dental, veterinary, optometry, chiropractic — with only templates, terminology, and PIMS integrations differing.

Building VetSimple as a vertical skin on a shared multi-practice communication platform (with dental as the co-primary vertical) reduces development cost by 60–70% while addressing a combined TAM of 168,000+ US practices. This is not a common approach at this price point — competitors build single-vertical platforms and bear full development costs per vertical.

**2. AI SOAP Notes as Category-Defining Feature (Wedge Innovation)**

AI scribing in human medicine (Abridge, Nuance DAX) is a $100M+ ARR category. Veterinary AI scribing is 12–18 months behind. VetRec and Shepherd AI are building toward it but haven't cracked reliable structured output for the S/O/A/P format across species.

The innovation is not the voice transcription (Whisper is commodity) — it's the species-aware SOAP structuring layer that correctly routes clinical information to the right section (e.g., "patient presented with vomiting for 3 days" → Subjective; "BCS 4/9, mild abdominal tenderness on palpation" → Objective; "Suspected GI foreign body" → Assessment; "Abdominal radiograph, supportive care, recheck in 48h" → Plan).

**3. Free White-Glove Migration as Product Feature (Positioning Innovation)**

Treating migration not as a professional services cost center but as a core product feature changes the switching economics of the entire market segment. At $149–199/month, the practice breaks even on migration cost vs. Cornerstone in under 2 months (vs. $3,000–10,000 migration cost elsewhere). This makes the ROI conversation trivial and removes the #1 objection in the sales cycle.

### Validation Approach

- **Shared platform**: Build with clear vertical abstraction layer (tenant configuration: vertical = "veterinary" or "dental"). Validate that adding a dental tenant requires zero new core platform code — only configuration and templates.
- **AI SOAP accuracy**: Beta test with 5–10 DVM users. Define accuracy as: structured sections correctly populated ≥92% of time (DVM confirms or edits; edits tracked). If below threshold, add a human-in-the-loop review step before committing to record.
- **Migration as product feature**: Track migration completion time and satisfaction NPS. Target: ≤3 weeks elapsed, ≥90% satisfaction. If migration takes longer than 3 weeks on average, hire more migration specialists rather than charging for the overrun.

### Risk Mitigation

- **AI SOAP accuracy risk**: If Whisper/Claude SOAP structured output is unreliable, fallback is full transcript displayed for DVM editing (still saves 30–40% of charting time vs. full manual). Never block the DVM from saving a record.
- **Shared platform complexity risk**: If dental vertical requirements diverge too much from vet (e.g., dental imaging integration requires platform changes), isolate dental in a separate configuration namespace and add features as needed rather than forcing shared architecture.

---

## SaaS B2B Specific Requirements

### Project-Type Overview

VetSimple is a multi-tenant SaaS B2B application targeting small independent businesses (1–3 DVM veterinary clinics). Key SaaS B2B characteristics:

- **Multi-tenancy**: Each veterinary practice is an isolated tenant with its own data, users, and configuration. No cross-tenant data access.
- **Practice-level subscription**: Billing is per-practice, not per-user. All staff within a practice share one subscription.
- **Trial-to-paid conversion**: 30-day free trial (no credit card) → paid subscription via Stripe.
- **Low-touch acquisition**: Community-led marketing (Reddit, VMA events, peer referrals) → self-serve signup → async onboarding support. High-touch only for migration.

### Multi-Tenancy & Data Isolation

- Each practice = isolated tenant (separate data partition; no shared tables for patient/client data)
- Tenant configuration: practice name, logo, appointment types, SMS templates, species list, booking widget settings, staff users
- Tenant admin (practice owner/manager) manages all tenant-level settings and users
- VetSimple platform admin: separate access plane with break-glass logging; cannot view patient data without explicit tenant authorization

### Role-Based Access Control (RBAC)

| Role | Scheduling | Patient Records | SOAP Notes | Invoicing | Settings | Staff Mgmt | Reports |
|------|-----------|-----------------|------------|-----------|---------|------------|---------|
| DVM | Full | Full | Own + read others | View | Read-only | No | Own stats |
| Vet Tech | Full | Full | Read-only | View | No | No | No |
| Front Desk | Full | Contact only | No | Create/view | No | No | No |
| Practice Manager | Full | Full | Read-only | Full | Full | Full | Full |
| Practice Admin (Owner) | Full | Full | Full | Full | Full | Full | Full |

### Subscription & Billing Model

- **Starter ($149/month)**: Cloud PIMS + scheduling + reminders + 2-way SMS (2,500 msg/month) + AI SOAP (unlimited) + white-glove migration + ≤5 staff users
- **Growth ($199/month)**: All Starter + online booking + email campaigns + invoicing + Stripe payments + unlimited staff users
- **Practice ($249/month)**: All Growth + unlimited SMS + wellness plan module + priority support SLA
- **Founding Member ($99/month, capped at 200 clinics)**: Locked-for-life pricing; full Growth feature set
- **VetScribe LTD ($149 one-time)**: Standalone AI SOAP note tool only; sunset after 200 sales; no PIMS, no comms

Billing via Stripe Subscriptions. Proration on mid-cycle upgrades. No refunds on downgrade (downgrade takes effect at next billing cycle).

### Technical Architecture Considerations

- **Frontend**: React + TypeScript SPA. Mobile-responsive (PWA for MVP; native apps Phase 2). Optimized for Chrome/Safari on both desktop and mobile.
- **Backend**: Node.js + TypeScript (or Python FastAPI) REST API. Separate background job queue (BullMQ/Redis) for reminder scheduling, SMS dispatch, and async AI transcription.
- **Database**: PostgreSQL (multi-tenant with row-level security). Separate S3 bucket per tenant for document uploads.
- **AI transcription**: Whisper API (OpenAI) or Deepgram Nova for voice-to-text; Claude API (claude-sonnet-4-6 or claude-haiku-4-5) for SOAP structure extraction. Audio deleted after transcription.
- **SMS**: Twilio Messaging API with delivery webhooks. Twilio Conversations for two-way SMS inbox.
- **Payments**: Stripe Billing (subscriptions) + Stripe Elements (client invoice payments).
- **Hosting**: AWS — ECS Fargate (API), CloudFront + S3 (frontend), RDS PostgreSQL Multi-AZ, ElastiCache Redis.
- **CI/CD**: GitHub Actions → staging → production with automated DB migration checks.
- **Monitoring**: Datadog APM + uptime monitoring. PagerDuty on-call rotation.

### Implementation Considerations

- **Data migration tooling**: Internal CLI tool for migration specialists (not exposed to practices directly in MVP). Supports Cornerstone `.mdb` → VetSimple import, AVImark XML → VetSimple import, and generic CSV import with field mapping UI.
- **Reminder scheduling**: Background job scheduler (cron-based) checks appointment calendar 24h and 2h in advance; dispatches SMS via Twilio. Must handle timezone correctly per practice (practice-level timezone setting).
- **Online booking widget**: Embeddable `<script>` tag that renders a React iframe component. No dependency on practice website stack. Must work on Wix, Squarespace, and custom HTML sites.
- **SOAP transcription flow**: Browser-based audio recording (MediaRecorder API) → chunked upload to S3 → Whisper transcription job → Claude SOAP structuring → populated note returned to DVM for review/edit → DVM confirms → record saved. No audio stored post-transcription.

---

## Project Scoping & Phased Development

### MVP Strategy & Philosophy

**MVP Approach:** Experience MVP — the product must deliver a complete, polished experience for the #1 use case (DVM saves 40+ min/day on SOAP notes; practice eliminates manual reminder calls) from day 1. A half-baked experience in a profession with high skepticism of new software will generate bad reviews that persist on G2/Capterra for years.

**Resource Requirements:** 2 engineers (full-stack) + 1 designer + 1 migration specialist. Founder handles sales and support in months 1–3. Total burn: ~$30–40K/month. 200 LTD sales ($149 each = $29,800) + 10 founding member practices ($99/month × 12 = ~$12K ARR) covers founder costs through month 6.

**Build Order (Critical Path):**
1. AI SOAP note tool (standalone VetScribe) — weeks 1–4, ships as LTD product
2. Patient/client records database + scheduling calendar — weeks 3–8
3. Automated SMS reminders + two-way inbox — weeks 5–10
4. Online booking widget — weeks 8–12
5. Invoicing + Stripe payments — weeks 10–14
6. Cornerstone/AVImark data importers — weeks 6–14 (parallel, required before public launch)
7. Beta + migration testing — weeks 12–16
8. Public launch + founding member cohort — week 16

### MVP Feature Set (Phase 1)

**Core User Journeys Supported:**
- Solo/2-DVM clinic migrating from Cornerstone or AVImark (Dr. Sarah journey)
- New practice starting fresh with no migration (Dr. Marcus journey)
- Practice manager consolidating multi-system fragmentation (Maya journey)

**Must-Have Capabilities:**
- Voice-to-SOAP transcription (mobile + desktop)
- Species-specific SOAP templates (dogs, cats, rabbits, birds — MVP species set)
- Appointment scheduling (calendar view, multi-DVM, appointment types)
- Client + patient record database (full profile, history, documents)
- Automated appointment reminders (SMS, 24h + 2h triggers)
- Two-way SMS inbox
- Vaccine/wellness recall campaigns (configurable intervals)
- Online booking widget (embeddable)
- Basic invoicing + Stripe payment links
- Cornerstone and AVImark data importers
- Multi-staff RBAC (5 roles)
- 30-day free trial (no credit card)
- Stripe subscription billing (Starter + Growth tiers)

### Post-MVP Features

**Phase 2 (Months 4–9 post-launch):**
- Native iOS + Android mobile apps
- Advanced practice performance reporting dashboard
- Pet parent portal (appointment history, vaccine records, invoice view)
- Automated Google/Yelp review request (post-appointment)
- Dental vertical launch on shared platform
- Additional PIMS importers (ezyVet, NaVetor, DaySmart)
- Wellness plan subscription billing
- IDEXX read-only lab import (if API agreement secured)

**Phase 3 (Year 2+):**
- Telemedicine (video consult + SOAP from video)
- IDEXX/Zoetis lab bidirectional integration
- Multi-location support
- Mobile vet module (route optimization, remote invoicing)
- Integration marketplace (imaging, insurance, pharmacy)
- Clinical benchmarking + decision support (data network effect)

### Risk Mitigation Strategy

**Technical Risks:**
- *AI SOAP accuracy below threshold*: Fallback to full transcript display for DVM editing; never block record creation. Investment: 2-week beta with 5 DVMs before launch.
- *Cornerstone .mdb importer failures*: Cornerstone uses a complex legacy Access database schema. Risk mitigation: start importer development in week 6 (parallel to core features); test against 5 real Cornerstone exports before launch.
- *Twilio SMS delivery issues*: Configure delivery receipt webhooks; implement automatic retry for failed messages; monitor delivery rate in real-time dashboard.

**Market Risks:**
- *Shepherd stabilizes and recaptures mid-market*: VetSimple's flat pricing and free migration remain structurally differentiated regardless of Shepherd's reliability. Price and migration barriers are not solvable by Shepherd without a full repricing of their business model.
- *IDEXX cuts ezyVet pricing*: Target anti-IDEXX practices (30–40% of independent market). Independent ownership positioning is a moat IDEXX cannot replicate.

**Resource Risks:**
- *Migration specialist unavailable*: Build internal migration tooling robust enough that a non-specialist can run imports with 4 hours of training. Documentation-first approach.
- *2-engineer team is single-threaded*: AI SOAP note tool ships first as standalone product (VetScribe LTD), generating revenue and reviews before the full platform is complete.

---

## Functional Requirements

### Practice & User Management

- FR1: Practice administrators can create and manage a practice account with name, logo, address, timezone, and contact information
- FR2: Practice administrators can invite staff members by email and assign them one of five roles (DVM, Vet Tech, Front Desk, Practice Manager, Practice Admin)
- FR3: Staff members can accept invitations, set their password, and access the system within their role permissions
- FR4: Practice administrators can deactivate staff accounts without deleting their associated records
- FR5: Practice administrators can configure appointment types, durations, and exam room/DVM columns for the scheduling calendar
- FR6: Practice administrators can set species lists and appointment type restrictions for the online booking widget
- FR7: Practice administrators can view and manage the current subscription tier, billing history, and payment method

### Scheduling & Calendar

- FR8: Any staff member (with scheduling permission) can create, edit, reschedule, and cancel appointments for any DVM or exam room
- FR9: Any staff member can view the scheduling calendar in day, week, or multi-DVM column view
- FR10: Any staff member can search for clients and patients by name, phone, species, or breed
- FR11: Any staff member can create new client and patient profiles at the time of scheduling
- FR12: Pet owners can book appointments online via the embeddable widget, selecting species, reason, DVM preference, and available time slot
- FR13: The online booking widget syncs in real-time with the internal scheduling calendar (no double-booking)
- FR14: Practice administrators can configure the online booking widget to require a deposit, restrict appointment types, or limit species

### Client & Patient Records

- FR15: DVMs and Vet Techs can create and edit full patient profiles (species, breed, sex, DOB, color/markings, microchip, insurance, owner notes)
- FR16: DVMs and Vet Techs can view complete patient history (appointments, SOAP notes, vaccination records, weight history, invoices, documents)
- FR17: Front Desk staff can view client contact information and update communication preferences (SMS opt-in/out)
- FR18: Any authorized staff can upload and attach documents (lab results, referral letters, imaging reports) to patient records
- FR19: DVMs can record vaccination events (vaccine name, lot number, expiry, next due date) against a patient record
- FR20: Practice administrators can bulk-export all patient records in PDF or CSV format

### AI SOAP Note Generation

- FR21: DVMs can initiate an audio recording from any browser or mobile device during or after a patient consultation
- FR22: The system transcribes the audio recording and generates a structured SOAP note (Subjective, Objective, Assessment, Plan sections) using species-appropriate clinical language
- FR23: DVMs can review, edit any section of, and confirm the generated SOAP note before it is saved to the patient record
- FR24: DVMs can select a species-specific SOAP template before recording (pre-populates common examination structure for dogs, cats, rabbits, birds)
- FR25: DVMs can copy a generated SOAP note to clipboard for use in any external PIMS
- FR26: SOAP notes saved to VetSimple are permanently associated with the patient record, timestamped, and attributed to the recording DVM
- FR27: Audio recordings are deleted from all VetSimple systems immediately after transcription is complete and the SOAP note is confirmed

### Communication & Reminders

- FR28: The system automatically sends appointment confirmation SMS to the client 24 hours and 2 hours before each scheduled appointment
- FR29: Practice managers can create and schedule vaccine/wellness recall SMS campaigns targeting clients whose pets have due dates within a configurable window
- FR30: Staff can view all inbound and outbound SMS messages in a two-way inbox organized by client conversation thread
- FR31: Staff can send ad-hoc SMS messages to any client with SMS opt-in consent from within the two-way inbox
- FR32: Clients can reply to any VetSimple SMS and their reply appears in the staff inbox as a threaded conversation
- FR33: Practice managers can configure reminder message templates (text, timing, appointment type filters)
- FR34: Practice managers can view a reminder delivery dashboard showing sent, delivered, failed, and confirmed status for all reminders
- FR35: The system captures and logs SMS opt-in consent at client registration (explicit checkbox with timestamp and IP logged)

### Invoicing & Payments

- FR36: Staff with invoicing permission can create line-item invoices (services, medications, products) for a patient visit
- FR37: Staff can send invoices to clients via email with a Stripe-hosted payment link
- FR38: Clients can pay outstanding invoices online via credit/debit card through the Stripe payment link
- FR39: Staff can view payment status (outstanding, partial, paid) for all invoices per client and per practice
- FR40: Practice managers can view a monthly revenue summary (total billed, total collected, outstanding)

### Data Migration

- FR41: VetSimple migration specialists can upload a Cornerstone database export and run an automated import that maps patient records, client contacts, appointment history, and vaccination records to VetSimple entities
- FR42: VetSimple migration specialists can upload an AVImark XML export and run an automated import with the same field mapping
- FR43: The import process generates a diff report showing total records imported, records skipped (with reason), and data quality warnings
- FR44: Migration specialists can manually correct flagged data quality issues (malformed dates, duplicate clients, missing required fields) before committing the import
- FR45: Practice administrators are notified in-app and via email when their migration is complete and ready for review
- FR46: Any practice can run a generic CSV import (for PIMS not covered by automated importers) via a field-mapping UI

### Reporting & Insights

- FR47: Practice managers can view an appointments report for any date range showing total appointments, no-show rate, cancellation rate, and booking channel (online vs. front desk)
- FR48: Practice managers can view a communication report showing reminder delivery rate, SMS usage (messages sent vs. included monthly limit), and campaign performance
- FR49: DVMs can view their own SOAP note activity (notes created per day/week, average creation time)

---

## Non-Functional Requirements

### Performance

- Core scheduling and records pages must load in ≤1.5 seconds on 25 Mbps broadband (95th percentile)
- SOAP note transcription must return a structured draft note within 45 seconds of audio submission for recordings up to 10 minutes
- SMS delivery from reminder trigger to Twilio submission must complete within 30 seconds; end-to-end delivery within 2 minutes (per Twilio SLA)
- The scheduling calendar must support up to 100 simultaneous appointments on a single day without UI degradation
- System must support up to 50 concurrent active staff sessions per practice without performance degradation

### Reliability

- 99.9% monthly uptime SLA (≤43 minutes downtime/month), excluding scheduled maintenance windows announced 48h in advance
- Automated incident detection and on-call alerting within 5 minutes of platform degradation
- RTO (Recovery Time Objective): ≤15 minutes for full platform recovery from infrastructure failure
- RPO (Recovery Point Objective): ≤1 hour — no more than 1 hour of committed data can be lost in a catastrophic failure
- Zero tolerance for patient record data loss — all writes are confirmed via database transaction before returning success to the user

### Security

- All data encrypted at rest (AES-256) and in transit (TLS 1.3 minimum)
- Role-based access control enforced at the API layer — no client-side permission enforcement only
- VetSimple platform admins cannot access tenant patient data without explicit practice authorization; all break-glass access logged and auditable
- No raw payment card data stored on VetSimple servers — all card data handled exclusively by Stripe Elements
- Audio files deleted from all VetSimple storage within 60 seconds of SOAP note confirmation
- TCPA-compliant SMS opt-in: explicit consent captured at client registration, logged with timestamp and IP, honored on all future communications
- Automated security dependency scanning (Dependabot or Snyk) in CI/CD pipeline

### Scalability

- Architecture must support growth from 50 to 5,000 active practices without architectural re-design (horizontal scaling on ECS, read replicas on RDS)
- Multi-tenant data isolation via PostgreSQL row-level security — adding a new tenant has zero impact on existing tenant performance
- SMS infrastructure must scale to 500,000 messages/month without manual intervention (Twilio account limits monitored and auto-upgraded)
- Background job queue must handle 10,000 scheduled reminder jobs per hour at peak (Monday morning appointment confirmations)

### Integration

- Twilio Messaging API: primary SMS; adapter layer enables failover to Bandwidth within 30 minutes of Twilio degradation
- Stripe Billing API: subscription management, proration, invoice generation — all handled by Stripe; no local billing logic
- Stripe Elements: client payment; PCI-DSS compliance entirely Stripe's responsibility
- Whisper API / Deepgram Nova: audio transcription; adapter layer supports switching providers without core feature change
- Claude API: SOAP structure extraction; prompt must handle veterinary clinical terminology across dog, cat, rabbit, bird species at minimum
- IDEXX lab result import: CSV-based in MVP (no API agreement required); HL7 feed if API agreement secured post-launch
- Online booking widget: cross-origin embeddable; must function inside Wix, Squarespace, WordPress, and raw HTML pages

### Accessibility

- Core staff-facing interfaces (scheduling calendar, SOAP note editor, SMS inbox) must meet WCAG 2.1 AA standards
- Online booking widget (client-facing) must meet WCAG 2.1 AA — pet owners may include users with disabilities
- Keyboard navigability for all core workflows (appointment creation, SOAP note confirmation, invoice creation)
- Color contrast ratios ≥4.5:1 for all text on UI backgrounds
- Screen reader compatibility for primary DVM workflows (SOAP note review and confirmation)

---

*PRD generated autonomously 2026-04-10 | VetSimple — cloud practice platform for independent veterinary clinics | Source: product brief (score 90/105 Tier 1 BUILD) + market research | Next step: create-architecture*
