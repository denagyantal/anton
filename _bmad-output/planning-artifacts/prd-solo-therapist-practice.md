---
stepsCompleted: [step-01-init.md, step-02-discovery.md, step-02b-vision.md, step-02c-executive-summary.md, step-03-success.md, step-04-journeys.md, step-05-domain.md, step-06-innovation.md, step-07-project-type.md, step-08-scoping.md, step-09-functional.md, step-10-nonfunctional.md, step-11-polish.md, step-12-complete.md]
inputDocuments:
  - ideas/shortlisted/solo-therapist-practice-management.md
  - _bmad-output/planning-artifacts/market-research-solo-therapist-practice.md
  - _bmad-output/planning-artifacts/product-brief-solo-therapist-practice.md
workflowType: prd
lastStep: step-12-complete.md
research_type: prd
research_topic: solo-therapist-practice
classification:
  projectType: saas_b2b
  domain: healthcare
  complexity: high
  projectContext: greenfield
user_name: Root
date: 2026-05-01
author: Root
---

# Product Requirements Document — Solo Therapist Practice Management

**Author:** Root
**Date:** 2026-05-01
**Product Working Name:** SoloPractice (alt: CalmChart / TherapyDesk)
**Version:** 1.0

---

## Executive Summary

Solo therapists in private practice are paying $49–$99/month for SimplePractice — an EHR built for 40-clinician group practices — after a 69% base price increase in March 2025 (PE-driven). They use ~40% of its features, spend 3–4 hours/week on manual clinical documentation, and have no purpose-built private-pay alternative at the right price point.

**SoloPractice** is a HIPAA-compliant practice management platform built from first principles for the private-pay solo therapist. It delivers AI-native SOAP/DAP/BIRP note generation (session audio → structured draft in <60 seconds), client self-booking, Stripe billing with transparent pass-through rates, and a secure client portal — nothing else. Flat $39/month, no insurance billing complexity, no hidden fees.

Target market: 30,000–75,000 private-pay solo therapists in the US (1/3 of ~200,000 licensed private practice therapists). Revenue target: $93,600 MRR at 2,400 subscribers (2% ICP penetration) within 18 months.

Go-to-market mirrors Youform's proven playbook against Typeform's price hike: build a focused, cheaper, better alternative for disgruntled users of an expensive incumbent, then distribute through the communities those users already inhabit (r/therapists, 500K+ members; private practice Facebook groups, 150K+ members).

### What Makes This Special

**AI documentation as the product, not a feature.** Every incumbent bolted AI transcription onto existing infrastructure. SoloPractice designs the therapy session workflow around note generation from day one — session-type-aware (CBT, DBT, EMDR), DSM-aligned terminology, modality-specific templates, therapist-review-and-approve in under 5 minutes instead of 20.

**Private-pay-first architecture.** Zero insurance billing in V1 — not hidden, not toggled off, simply absent. Onboarding takes 15 minutes instead of 90. The daily UI answers one question: "What do I need to do today?" Pending SOAP drafts, today's schedule, outstanding payments.

**Transparent flat pricing.** $39/month all-in, Stripe pass-through at cost (~2.9% + $0.30, no markup). First EHR that does not profit from payment processing.

**Independent, therapist-aligned ownership.** PE-backed incumbents optimize for investor returns. SoloPractice optimizes for therapist value. No data licensing. No Luminello-style acquisition shutdowns. No terms-of-service surprises. Trust as a product feature.

## Project Classification

- **Project Type:** SaaS B2B (professional services — solo healthcare practitioners)
- **Domain:** Healthcare (mental health EHR, regulated)
- **Complexity:** High (HIPAA, PHI, multi-vendor BAA requirements, AI-on-PHI)
- **Project Context:** Greenfield
- **Build Strategy:** Two-phase — Phase 1 standalone AI SOAP note tool (Weeks 1–4), Phase 2 full platform (Weeks 5–10)

---

## Success Criteria

### User Success

Users succeed when administrative overhead drops below 15 minutes per day for a 20-client/week caseload. Specific outcomes:

- Time from session end to signed note: under 5 minutes (vs. 20–45 min baseline)
- Client onboarding (booking link → intake form → payment method captured): under 10 minutes therapist effort per new client
- End-of-day admin complete (notes signed, payments collected, next day confirmed): under 20 minutes total
- Therapist can send a client self-booking link from within the product within 15 minutes of signup

**Aha moment:** First approved AI SOAP note draft — therapist edits 2 sentences, clicks Approve, and realizes it took 4 minutes instead of 20.

**Emotional success state:** "I finished admin by 1pm instead of 6pm. I have my afternoon back."

### Business Success

| Metric | Month 3 | Month 12 | Month 18 |
|--------|---------|---------|---------|
| Paying subscribers | 200 | 2,000 | 2,400+ |
| MRR | $7,800 | $78,000 | $93,600+ |
| Monthly churn | <5% | <3% | <2.5% |
| Trial-to-paid conversion | >30% | >40% | >45% |
| NPS | >50 | >65 | >70 |
| CAC payback period | — | <4 months | <3 months |

**Category ownership signal:** Organic top-3 mention in r/therapists "SimplePractice alternative" threads without paid promotion, within 6 months of launch.

### Technical Success

- Zero HIPAA security incidents or PHI exposure events (non-negotiable, perpetual)
- Zero compliance violations; all BAAs executed before processing first PHI
- AI SOAP note generation: 80%+ of active users use weekly; average approval rate (minimal edits) >70%
- Platform availability: 99.9% uptime during US business hours (8am–8pm ET/PT)
- Page load time: dashboard loads under 2 seconds for 95th percentile

### Measurable Outcomes

- **Sean Ellis PMF signal:** 40%+ of surveyed users would be "very disappointed" if product disappeared
- **AI adoption:** 70%+ of active users generate at least one AI note per week
- **Admin time reduction:** 50%+ reduction in self-reported weekly admin hours vs. baseline (validated via 90-day user survey)
- **Referral rate:** 25%+ of new trials sourced from referrals by Month 12

---

## Product Scope

### MVP — Minimum Viable Product (Phase 1 + Phase 2)

**Phase 1 (Weeks 1–4): Standalone AI SOAP Note Tool**
AI-only MVP: session audio/upload → SOAP/DAP/BIRP draft → therapist review + approve → HIPAA-compliant encrypted storage. Revenue-generating standalone; $29/month or $79–$149 LTD. Validates AI quality, builds email list, de-risks full platform build.

**Phase 2 (Weeks 5–10): Full Practice Management Platform**
Complete solo therapist workflow: scheduling + AI notes + client portal + Stripe billing + superbill generation. Flat $39/month. Phase 1 users convert naturally.

**MVP Core Capabilities (P0 — must work at launch):**

1. HIPAA-compliant infrastructure (AWS HIPAA-eligible, AES-256 at rest, TLS 1.3 in transit, MFA, audit logs, BAAs with all vendors)
2. AI SOAP/DAP/BIRP note generation from session audio recording or file upload (<60 seconds to draft; CBT/DBT/EMDR modality support)
3. Therapist note review, edit, approve, and digital sign workflow
4. Encrypted clinical note storage with version history and sign/lock
5. Client self-booking portal with public booking link and availability configuration
6. Google, Outlook, and Apple Calendar sync (bi-directional)
7. Automated appointment reminders (SMS + email)
8. Secure client intake form builder with digital submission and storage
9. Stripe payment integration: card collection, one-click charge, HSA/FSA support, transparent pass-through rates (no markup)
10. Superbill PDF generation (CPT codes, NPI, diagnosis codes) for client self-submission
11. Secure encrypted client-therapist messaging (HIPAA-compliant)
12. Solo dashboard: today's schedule + pending AI note approvals + outstanding payments

**P1 — Launch + 60 Days:**

13. Mobile-responsive design (all core flows work on iOS/Android browser)
14. Client session count and simple progress tracking per client
15. Monthly revenue and session reporting (solo-focused, not multi-clinician)
16. Built-in referral program (referral link + 1-month-free incentive)
17. Client data export (CSV/PDF) for migration or record-keeping

### Growth Features (Post-MVP, V2)

- Built-in HIPAA-compliant telehealth (Daily.co or Whereby integration with BAA)
- Native iOS + Android client app for scheduling and portal access
- Outcome measurement instruments: PHQ-9, GAD-7, PCL-5
- Advanced AI: treatment plan generation from session history; progress notes that adapt based on prior sessions
- Couples and family session scheduling
- Therapist-to-therapist referral directory

### Vision (V3+, Year 2)

- Optional insurance billing add-on ($20–$30/month): ERA/EDI for therapists who accept some insurance — positioned as opt-in, not default
- Group practice support (2–5 clinicians): shared calendar, per-clinician reporting, permissions model
- Supervisor portal: co-signature workflows for supervisee notes
- Student/intern pricing ($15/month during supervised hours)
- Canada market: Jane App alternative with PIPEDA/PHIPA compliance

### Explicitly Out of Scope for V1

| Deferred Capability | Rationale |
|---|---|
| Insurance billing (ERA/EDI, clearinghouse) | 8–12 weeks extra build; not needed by private-pay ICP |
| Group practice / multi-clinician | Solo-only by design; adds scheduling/permissions complexity |
| Built-in telehealth video | Recommend external tools (Doxy.me, Whereby); V2 integration |
| Medication management | Therapists do not prescribe |
| Full outcomes measurement (PHQ-9, GAD-7) | Nice-to-have; not table-stakes for MVP |
| Native mobile app (iOS/Android) | Mobile-responsive web covers MVP; native app is V2 |
| Credentialing support | Insurance workflow; irrelevant to private-pay ICP |
| Billing service / biller access | Solo therapist is their own biller |

---

## User Journeys

### Journey 1: Sarah, LCSW — The SimplePractice Refugee (Core ICP, Happy Path)

Sarah is a 40-year-old LCSW in private practice with 22 clients per week, all private-pay at $150/session. She has been using SimplePractice for 3 years. In March 2025 she received an email: her monthly rate was increasing to $79/month. She goes to r/therapists and posts "just got hit with the SP price hike — what are people switching to?" Within 2 hours, multiple replies mention SoloPractice.

**Discovery:** Sarah clicks a link in the thread. She lands on the homepage. Above the fold: "Everything you need. Nothing you don't. $39/month flat." She sees the feature list — scheduling, AI SOAP notes, Stripe billing, client portal. No insurance billing (good — she's never needed it). She watches a 90-second video of the AI note generation. She signs up for the 30-day free trial. No credit card required.

**Onboarding (Day 1):** The onboarding flow has 5 guided steps: (1) set weekly availability, (2) connect Google Calendar, (3) create service type and pricing, (4) connect Stripe account, (5) generate client booking link. Total time: 14 minutes. She sends the link to one existing client with a "I'm testing a new system" note.

**First Value Moment (Day 5):** Sarah uses the session recording feature during a CBT session. After the 50-minute session, she opens the Notes tab. A SOAP note draft is waiting — CBT-framework, DSM-consistent language, structured with Subjective/Objective/Assessment/Plan sections. She reads it: 85% accurate. She edits the Assessment section (adds a specific clinical observation), approves, and digitally signs. Total time: 4 minutes. She texts a colleague immediately: "This thing just saved me 20 minutes."

**Migration (Week 2):** Sarah imports her existing client list, sets up intake forms for new clients, and migrates 3 clients to the new booking link. She runs SimplePractice in parallel for existing notes but all new sessions go through SoloPractice.

**Full Switch (Day 28):** Sarah calculates she saved ~15 hours of admin during the trial — recovered time worth $1,200+ at her effective rate. She enters her credit card, cancels SimplePractice. She posts in r/therapists: "Been using SoloPractice for a month — it's exactly what I needed, nothing I didn't. AI notes are actually clinical-grade, not just transcription."

*Capabilities revealed: Discovery/homepage conversion, trial onboarding flow, Google Calendar sync, AI note generation (CBT modality), note review/edit/approve workflow, client booking link, Stripe setup, client import/management.*

---

### Journey 2: Marcus, LPC — The New Practitioner (Compliance Urgency, Building from Scratch)

Marcus is 29, one year post-licensure, 8 clients and growing. He left a community mental health agency 4 months ago to start his own practice. He is currently using Calendly ($15/month) for scheduling, Google Docs for notes, and Venmo for payment. A supervisor review flagged that his setup is not HIPAA-compliant. He has two weeks to get compliant before his next supervision session.

**Discovery:** Marcus searches "HIPAA compliant EHR solo therapist affordable." He finds SoloPractice in the top results alongside SimplePractice and TherapyNotes. He notes SimplePractice's price ($49–$79/month) and TherapyNotes ($69/month solo). SoloPractice at $39/month with a free trial immediately stands out.

**Evaluation (Day 0–1):** Marcus reads the pricing page carefully. He checks: is it actually HIPAA-compliant? He finds the BAA section, the infrastructure details (AWS, AES-256, TLS), and a link to the Business Associate Agreement template. He signs up for the trial.

**Onboarding (Day 1, 12 minutes):** Five-step setup. He adds his first 8 clients, sends each a booking link and intake form, and connects his bank account to Stripe. He generates a HIPAA BAA from the dashboard and downloads it for his records.

**First Client Experience (Day 2):** An existing client uses the self-booking link to reschedule an appointment. Marcus sees the confirmation appear in his calendar sync. The intake form he built is pre-filled with existing client data he imported. He texts his supervisor: "I'm compliant now. Took me 12 minutes."

**Professional Legitimacy (Week 2):** Marcus adds his booking link to his Psychology Today profile. New intake inquiries book directly into his calendar. He collects a credit card at intake. His first session with a new client generates an AI SOAP note draft — he approves it with minor edits. His practice now looks like he's been running it professionally for years.

*Capabilities revealed: HIPAA compliance documentation/BAA access, client import, client self-booking link as external-embeddable asset, intake form builder, Stripe payment at intake, AI note generation (new client, initial session type), mobile-responsive access for on-the-go schedule checking.*

---

### Journey 3: Sarah (Edge Case) — Session Recording Failure and Recovery

Sarah is conducting her 10th session using SoloPractice. Her recording fails mid-session — she discovers it when she opens the Notes tab post-session and sees "Recording unavailable — upload audio file or compose manually." She has 4 minutes before her next client.

**Recovery Path (4 minutes):** She switches to manual note mode. The manual SOAP template is pre-populated with the client name, session date, session type (CBT — from prior note context), and a blank structured template. She types 3–4 key bullet points in each section (shorthand). She saves as draft. She returns after her next session and expands the shorthand into a full note using the AI "Expand Draft" feature (free-text → structured SOAP). Total additional time: 8 minutes spread across two post-session gaps.

**Trust Signal:** The system emailed her a failure notification immediately after the recording failed, with clear recovery instructions. She did not discover the failure herself. She notes this in her NPS survey: "It told me before I had to panic about it."

*Capabilities revealed: Recording failure detection and notification, manual note compose mode with structured templates, AI "expand draft" from shorthand/bullets, graceful error handling without data loss.*

---

### Journey 4: Admin User (Therapist as Own Admin) — Month-End Billing Review

It is the last business day of the month. Sarah opens the Billing section of the dashboard. She sees: total sessions this month (88), total collected ($13,200), outstanding unpaid sessions (3 clients, $450), Stripe processing fees ($395). She clicks "Send Payment Reminder" on the 3 outstanding clients — each gets an automated email with a secure payment link. One pays within 10 minutes. She downloads the monthly revenue report as a PDF for her accountant. Total time: 6 minutes.

She also generates two superbills for clients who want to submit to their insurance for out-of-network reimbursement. The superbills auto-populate CPT codes, NPI number, diagnosis codes (from session notes), dates of service, and session rates. She sends them via secure message within the client portal.

*Capabilities revealed: Monthly revenue dashboard, outstanding payment tracking and automated reminders, secure payment link generation, revenue report PDF export, superbill generation with CPT/NPI/diagnosis auto-population, superbill delivery via secure client portal messaging.*

---

### Journey Requirements Summary

| Capability Area | Journeys That Reveal It |
|---|---|
| Client self-booking and scheduling | J1, J2 |
| Calendar sync (Google/Outlook/Apple) | J1, J2 |
| AI SOAP note generation (CBT/DBT/EMDR) | J1, J2, J3 |
| Note review, edit, approve, sign | J1, J2, J3 |
| Manual note compose + AI expand | J3 |
| Recording failure detection + notification | J3 |
| HIPAA BAA documentation access | J2 |
| Client import and management | J1, J2 |
| Intake form builder and digital submission | J2 |
| Stripe payment integration | J1, J2 |
| Superbill PDF generation and delivery | J4 |
| Monthly billing dashboard + outstanding tracking | J4 |
| Revenue report export (PDF) | J4 |
| Automated payment reminders | J4 |
| Secure client-therapist messaging (portal) | J4 |

---

## Domain-Specific Requirements

This product operates in a high-complexity, federally regulated healthcare domain. All requirements below are non-negotiable for launch.

### Compliance & Regulatory

**HIPAA Privacy Rule (45 CFR Part 164, Subpart E):**
- All Protected Health Information (PHI) — session notes, intake forms, scheduling data, recordings, messages, superbills, payment records — must be handled under HIPAA Privacy Rule requirements
- A signed Business Associate Agreement (BAA) must be executed with every vendor that processes or stores PHI: cloud host (AWS), AI transcription/generation vendor, Stripe (Stripe signs BAA for healthcare), email/SMS provider, cloud storage
- Platform must provide a BAA to all subscribers before any PHI is stored
- Minimum necessary standard: the platform never shares PHI beyond what the subscribing therapist authorizes

**HIPAA Security Rule (45 CFR Part 164, Subpart C):**
- Encryption at rest: AES-256 for all PHI at rest
- Encryption in transit: TLS 1.3 for all PHI in transit
- Multi-Factor Authentication (MFA): required for all therapist accounts (not optional)
- Audit logging: all PHI access, creation, modification, deletion events must be logged with timestamp, user ID, and action type; logs retained minimum 6 years
- Role-based access: in V1, single-user solo architecture; no PHI accessible without authenticated session
- Session timeout: automatic logout after 30 minutes of inactivity
- Breach notification procedures: documented incident response plan; notification within 60 days of breach discovery (HIPAA requirement)

**Professional Licensing and Scope:**
- All clinical note templates (SOAP, DAP, BIRP) must align with standard mental health documentation practice
- Superbill fields must meet standard US insurance reimbursement requirements (CPT codes, NPI numbers, ICD-10 diagnosis codes, place of service codes)
- The platform does not provide clinical decision support or diagnostic recommendations — AI generates documentation drafts only; all clinical determinations belong to the licensed therapist

### Technical Constraints

- All PHI must reside in US-based data centers (AWS us-east-1 or us-west-2)
- Audit logs must be immutable and separately stored from primary application data
- Database backup: daily automated backups with 30-day retention; therapists can export full data at any time
- AI vendor must process audio and generate notes entirely within HIPAA-eligible infrastructure; no PHI may be used to train AI models without explicit per-therapist consent (default: off)
- Payment card data: never stored in SoloPractice systems; Stripe tokenizes all card data before any storage

### Integration Requirements

- **Stripe:** BAA-signed Stripe Connect integration for marketplace payment collection; pass-through pricing at Stripe standard rates (currently ~2.9% + $0.30 domestic)
- **Google Calendar API:** OAuth 2.0 bi-directional sync; event data contains minimal PHI (client name + appointment time are acceptable scheduling data)
- **Microsoft Graph API (Outlook):** OAuth 2.0 bi-directional sync
- **Apple CalDAV:** CalDAV protocol sync
- **SMS gateway (Twilio or equivalent):** BAA-signed; reminder messages contain appointment time only — no clinical content, no PHI beyond therapist-controlled client name/appointment data
- **AI transcription/note generation:** BAA-signed vendor (options: AWS Transcribe Medical + proprietary generation, or specialized HIPAA-eligible AI vendor); latency target <60 seconds for 50-minute session audio

### Risk Mitigations

| Risk | Impact | Mitigation |
|---|---|---|
| PHI breach via AI vendor | Critical | BAA + AWS HIPAA-eligible infra only; audio deleted from AI pipeline within 24 hours of note generation |
| HIPAA enforcement action | Critical | Legal counsel day 1; annual third-party risk assessments; documented policies |
| PHI in support tickets | High | Support tooling must be HIPAA-eligible (or PII-scrubbed screenshots only); support team signed confidentiality agreements |
| Client data loss | High | Daily backups; geographically redundant storage; always-available export |
| Session recording device compromise | Medium | Recordings encrypted immediately on upload; not stored on device |

---

## Innovation & Novel Patterns

### Detected Innovation Areas

**1. AI Documentation as Primary Product Experience**
The dominant framing in every existing EHR treats documentation as administrative overhead to minimize. SoloPractice inverts this: the therapy session workflow is designed *around* the note generation experience. The recording interface is primary, not buried. The note draft is the default post-session state, not a feature to opt into. This is not transcription — it is a clinical documentation *co-author* that understands therapy modalities, DSM terminology, and SOAP/DAP/BIRP structure.

Validation approach: Phase 1 standalone AI tool provides real clinical data before full platform build. Target: 70% of users approve note with <3 edits; average approval time <5 minutes.

**2. Playbook-Proven Distribution via Price Hike Arbitrage**
The Youform/Typeform playbook is directly applicable: SimplePractice's 69% price hike created a predictable, time-bounded window of maximum user frustration. r/therapists (500K+ members) is the primary distribution channel — a highly engaged, word-of-mouth-driven community where "what are you switching to?" threads generate significant organic discovery. The innovation is treating community signal listening as a distribution engine, not just a marketing tactic.

**3. Private-Pay-First Architecture as Competitive Moat**
No EHR has shipped V1 without insurance billing capability. The architectural commitment to private-pay-only in V1 is genuinely novel in this market. It enables 60% simpler onboarding, 40% simpler ongoing UI, and a clear "this was built for me" positioning signal to the ICP. Insurance billing is not a feature to add later — it is a feature explicitly not built for V1, and this choice is a differentiator.

### Market Context & Competitive Landscape

- CoralEHR is the closest positional competitor ("EHR for private-pay therapists") but is pilot-only, no established user base, and priced at $79/month — 2x SoloPractice's target price. First-mover advantage window: 6–12 months.
- SimplePractice (200,000+ users) is accelerating price increases post-PE acquisition; trust damage from 2023 ToS controversy and Luminello shutdown is permanent in the community
- No competitor has achieved: private-pay-first architecture + AI-native documentation + transparent flat pricing + independent ownership simultaneously

### Validation Approach

Phase 1 standalone AI SOAP note tool serves as the innovation validator:
- 30-day free trial → conversion rate validates willingness to pay for AI documentation specifically
- Note quality metrics (edit count, approval time) validate that "clinical-grade" claim is real
- Phase 2 builds only after Phase 1 validates AI quality with real clinical data

### Risk Mitigation

| Innovation Risk | Fallback |
|---|---|
| AI note quality insufficient for clinical use | Manual compose + AI-expand feature (Journey 3); therapist always has full control |
| Private-pay-only positioning limits TAM | Superbill PDF covers the most common insurance-adjacent need; insurance add-on planned V3 |
| Youform playbook window closes before launch | Community relationships + SEO established during Phase 1; not solely dependent on price-hike urgency |

---

## SaaS (Healthcare) Specific Requirements

### Project-Type Overview

SoloPractice is a vertical SaaS product for a single, well-defined professional segment (solo licensed mental health practitioners). It is a B2B2C product: the therapist (B) is the customer, client patients (C) interact with the portal. Revenue model: flat monthly SaaS subscription. The critical SaaS-specific requirements for this product center on multi-tenancy isolation, data portability, and zero-downtime operations given the PHI-handling context.

### Technical Architecture Considerations

**Multi-Tenancy:**
- Single-tenant isolation model per therapist account: each therapist's data (clients, notes, recordings, payments) is logically isolated from all other therapist accounts at the database level
- Row-level security or schema-per-tenant approach (schema-per-tenant preferred for PHI isolation)
- No cross-tenant data queries possible in application layer

**Authentication and Authorization:**
- Email/password + TOTP-based MFA (mandatory, not optional)
- OAuth 2.0 for calendar integrations (Google, Microsoft)
- Stripe Connect OAuth for payment account linking
- Session management: JWT with 30-minute inactivity timeout; refresh token rotation
- Account recovery: email-based MFA reset with identity verification step

**Subscription Management:**
- Stripe Subscriptions for recurring billing ($39/month)
- 30-day free trial with no credit card required at signup
- Graceful access degradation on subscription lapse: read-only access to existing notes for 30 days before data export is offered
- Annual billing option ($390/year, ~17% discount) planned for V1.1

**Client Portal Architecture:**
- Client-facing portal served on a therapist-customized subdomain or booking page
- No client account required for booking (anonymous booking link); HIPAA-compliant intake form submission does create an encrypted client record
- Optional client account creation (email + password) for returning portal access (messages, documents)
- Client portal authentication isolated from therapist authentication layer

### Implementation Considerations

**Recording and Audio Pipeline:**
- Session audio: browser-based MediaRecorder API (no native app required)
- Audio files: encrypted immediately on upload; transmitted to AI pipeline via HIPAA-eligible presigned S3 URLs
- Audio retention policy: raw audio deleted 24 hours after note generation (configurable by therapist to retain longer for supervision/audit purposes)
- Fallback: file upload (MP3, M4A, WAV, MP4 audio) for therapists who use external recording devices

**AI Note Generation Pipeline:**
- Input: audio file or transcript
- Output: structured SOAP/DAP/BIRP note with modality-aware sections
- Latency target: note draft available within 60 seconds of audio upload completion
- Modality support at launch: CBT, DBT, EMDR, general psychotherapy
- Note format options: SOAP (Subjective/Objective/Assessment/Plan), DAP (Data/Assessment/Plan), BIRP (Behavior/Intervention/Response/Plan)
- Customization: therapists can define note templates per session type or client

**Onboarding Critical Path (15-minute target):**
1. Email verification + MFA setup
2. Set weekly availability blocks
3. Connect calendar (optional but recommended)
4. Add first service type (name, duration, price)
5. Connect Stripe (Stripe Connect Express onboarding)
6. Copy booking link to share with first client

**Data Portability (HIPAA-required):**
- Full data export at any time: client records (CSV), session notes (PDF with digital signature metadata), payment history (CSV)
- Export available in account settings; no support ticket required
- Export must complete within 24 hours for any account size

---

## Project Scoping & Phased Development

### MVP Strategy & Philosophy

**MVP Approach:** Experience MVP — the product must deliver a complete, high-quality solo therapist daily workflow from day one. This is not a feature-incomplete early access; it must be good enough that a therapist can fully replace SimplePractice on day one of paid use.

**Resource Requirements:** 2 full-stack engineers + 1 designer + 1 HIPAA/legal consultant (contract). Phase 1 (AI tool only): 1 engineer + 1 designer. Phase 2 (full platform): full team.

### MVP Feature Set (Phase 1 — AI SOAP Note Tool)

**Core User Journeys Supported:** Journey 1 (note generation and approval), Journey 3 (recording failure recovery)

**Must-Have Capabilities:**
- HIPAA-compliant infrastructure with BAAs executed before first PHI
- Browser-based session audio recording
- Audio file upload (MP3, M4A, WAV, MP4)
- AI SOAP/DAP/BIRP note generation (<60 seconds)
- Note review, edit, approve, and digital sign
- Manual note compose with structured templates
- AI "expand from shorthand" feature
- Encrypted note storage with audit log
- Therapist account with MFA

**Revenue Model:** $29/month standalone or $79–$149 LTD (one-time). Converts to $39/month full platform when Phase 2 ships.

### MVP Feature Set (Phase 2 — Full Platform)

**Core User Journeys Supported:** All four journeys fully supported

**Must-Have Capabilities (additions to Phase 1):**
- Client self-booking with public booking link
- Availability configuration and calendar sync (Google/Outlook/Apple)
- SMS + email appointment reminders
- Client intake form builder with secure submission
- Stripe payment integration (pass-through rates)
- Superbill PDF generation with CPT/NPI/ICD-10
- Secure client-therapist messaging (portal)
- Solo dashboard (schedule + pending notes + outstanding payments)
- BAA template accessible from dashboard
- Mobile-responsive design

### Post-MVP Features (Phase 3 — Growth)

- Telehealth integration (Daily.co, BAA-signed)
- iOS + Android native client app
- PHQ-9, GAD-7, PCL-5 outcome measurement instruments
- Advanced AI: treatment plan generation, progress note adaptation from history
- Couples/family session scheduling
- In-platform referral network
- Annual billing option

### Risk Mitigation Strategy

**Technical Risks:** HIPAA compliance complexity is the primary technical risk. Mitigation: legal counsel from day 1, all BAAs executed before any PHI flows, HIPAA-eligible infrastructure (AWS) as non-negotiable baseline, third-party security review before public launch.

**Market Risks:** CoralEHR competing for same positioning. Mitigation: Phase 1 AI tool ships within 4 weeks to establish presence and email list before full platform competitors respond; price advantage ($39 vs. $79); community distribution moat via r/therapists organic presence.

**Resource Risks:** If team cannot ship full Phase 2 in Weeks 5–10. Mitigation: Phase 1 AI tool is independently revenue-generating; Phase 2 can ship features iteratively (scheduling first, billing second, portal third) — as long as the AI notes core works, value is delivered.

---

## Functional Requirements

### Client & Schedule Management

- FR1: Therapist can set weekly availability blocks (recurring) and one-off unavailability periods
- FR2: Therapist can create service types with name, duration, and price
- FR3: Clients can self-book appointments via a public booking link without creating an account
- FR4: Therapist can view a day-view and week-view of upcoming appointments
- FR5: Therapist's calendar syncs bi-directionally with Google Calendar, Outlook Calendar, and Apple Calendar
- FR6: Clients receive automated appointment reminders via SMS and email (timing configurable by therapist)
- FR7: Therapist can cancel or reschedule appointments; client receives automated notification
- FR8: Therapist can configure cancellation policy text displayed on booking page

### Client Portal & Intake

- FR9: Therapist can build custom intake forms with text, checkbox, dropdown, signature, and file upload field types
- FR10: Clients can complete and digitally sign intake forms via secure portal link before their first appointment
- FR11: Completed intake forms are stored encrypted and accessible only to the therapist
- FR12: Therapist can send documents to clients and receive completed documents via the secure portal
- FR13: Therapist and client can exchange encrypted messages via the secure portal
- FR14: Therapist can view a client profile showing appointment history, intake form submissions, notes, and payment history

### Clinical Documentation (AI-Assisted)

- FR15: Therapist can record session audio directly in the browser during or after a session
- FR16: Therapist can upload an audio file (MP3, M4A, WAV, MP4) for note generation
- FR17: The system generates a structured SOAP, DAP, or BIRP note draft from session audio within 60 seconds of upload completion
- FR18: AI note generation is session-type-aware: therapist can tag a session with a modality (CBT, DBT, EMDR, General) and the generated note uses modality-appropriate terminology and structure
- FR19: Therapist can review, edit, and modify any section of a generated note draft before approving
- FR20: Therapist can expand shorthand or bullet-point notes into a full structured SOAP/DAP/BIRP note via AI
- FR21: Therapist can manually compose a session note using structured templates without AI assistance
- FR22: Therapist can approve, digitally sign, and lock a completed note; locked notes are read-only
- FR23: Therapist can create and save custom note templates per session type or per client
- FR24: All session notes are stored encrypted with full version history and an immutable audit log of access events

### Billing & Payments

- FR25: Therapist can connect a Stripe account and collect credit card, debit card, and HSA/FSA payments from clients
- FR26: Therapist can collect client payment method at intake and charge it automatically after sessions
- FR27: Therapist can manually trigger a payment charge for any session amount
- FR28: Clients receive automated payment receipts via email after successful charges
- FR29: Therapist can view outstanding (unpaid) sessions and send automated payment reminder emails with a secure pay link
- FR30: The platform passes Stripe processing fees through at cost with no markup; therapist sees fee breakdown per transaction
- FR31: Therapist can generate a superbill PDF for any client including CPT codes, NPI number, ICD-10 diagnosis codes, dates of service, session rates, and provider credentials
- FR32: Therapist can send generated superbills to clients via secure portal message

### Dashboard & Reporting

- FR33: Therapist dashboard displays today's appointment schedule, pending AI note drafts awaiting approval, and outstanding unpaid sessions on a single screen
- FR34: Therapist can view monthly revenue totals, session counts by type, and Stripe processing fees in a summary report
- FR35: Therapist can export monthly revenue report as a PDF
- FR36: Therapist can export all client data and session notes as CSV/PDF files at any time

### HIPAA Compliance & Account Management

- FR37: Therapist must complete MFA setup before accessing any PHI within the platform
- FR38: Therapist can download and countersign the platform's Business Associate Agreement directly from the dashboard
- FR39: The platform generates a complete HIPAA audit log of all PHI access and modification events, accessible by the therapist for their own records
- FR40: Therapist can configure session inactivity timeout (default: 30 minutes)
- FR41: Audio recordings are deleted from the AI processing pipeline within 24 hours of note generation (therapist can opt into longer retention for supervision purposes)
- FR42: Therapist can configure automatic audio deletion policy (24 hours default; 7, 30, or 90 days optional)

### Onboarding & Growth

- FR43: New therapist can complete the full onboarding sequence (availability, calendar, service type, Stripe, booking link) in under 15 minutes via guided setup flow
- FR44: Therapist can invite colleagues via a referral link and track referred signups; both referrer and referee receive 1 month free upon conversion
- FR45: Therapist can configure their booking page with practice name, photo, bio, and specialties

---

## Non-Functional Requirements

### Performance

- NFR1: Dashboard loads within 2 seconds for 95th percentile of authenticated therapist sessions under normal load (up to 500 concurrent users)
- NFR2: AI SOAP note draft is available within 60 seconds of audio upload completion for sessions up to 90 minutes in length, measured from upload complete to draft available
- NFR3: Client booking page loads within 2 seconds for 95th percentile of unauthenticated visitors
- NFR4: API response time for scheduling, notes read/write, and payment operations: under 500ms for 95th percentile under normal load
- NFR5: Audio upload for a 60-minute session (approx. 50MB at standard quality) completes within 30 seconds on a standard broadband connection (10 Mbps upload)

### Security

- NFR6: All PHI stored at rest encrypted with AES-256; key management via AWS KMS
- NFR7: All PHI in transit encrypted with TLS 1.3 minimum; HTTP connections redirect to HTTPS
- NFR8: MFA (TOTP-based) required for all therapist account logins; no option to disable
- NFR9: Authenticated sessions expire after 30 minutes of inactivity; therapist is prompted to re-authenticate
- NFR10: All PHI access, creation, modification, and deletion events logged in an immutable audit trail with timestamp, user ID, action type, and resource identifier; audit logs retained for minimum 6 years per HIPAA requirements
- NFR11: Audio files in the AI processing pipeline deleted within 24 hours of note generation (configurable to longer retention by therapist)
- NFR12: Client portal sessions expire after 60 minutes of inactivity
- NFR13: Payment card data never stored in SoloPractice systems; all card data tokenized by Stripe before any storage
- NFR14: All data stored in US-based AWS regions (us-east-1 or us-west-2)
- NFR15: Business Associate Agreements signed with all vendors processing PHI before any PHI flows through those vendors

### Reliability

- NFR16: Platform availability of 99.9% during US business hours (8am–8pm ET and PT, Monday–Friday); measured monthly by uptime monitoring service
- NFR17: Database backups executed daily with 30-day retention; recovery point objective (RPO) ≤ 24 hours; recovery time objective (RTO) ≤ 4 hours
- NFR18: Recording failure (browser or upload) detected within 5 seconds and surfaced to therapist with explicit failure notification and recovery instructions (FR — recorded note unavailable, recovery path available)
- NFR19: All client data remains accessible for 30 days after subscription lapse in read-only mode; export available throughout

### Scalability

- NFR20: Architecture supports horizontal scaling to 10,000 concurrent users without architectural changes; initial deployment targets 500 concurrent
- NFR21: AI note generation pipeline scales to process 100 concurrent session audio uploads without degrading to over 90 seconds per job

### Accessibility

- NFR22: All therapist-facing screens meet WCAG 2.1 Level AA compliance for color contrast, keyboard navigation, and screen reader compatibility
- NFR23: Client booking portal meets WCAG 2.1 Level AA compliance (clients may have varying accessibility needs)
- NFR24: Intake forms support keyboard-only completion and are compatible with screen readers

### Integration

- NFR25: Calendar sync (Google, Outlook, Apple) must reflect booking changes within 60 seconds of the change being made in SoloPractice
- NFR26: Stripe payment operations must complete (charge confirmed or failed) within 10 seconds of therapist-initiated charge action
- NFR27: SMS appointment reminders must be delivered within 5 minutes of the scheduled send time (configurable: 24h before, 1h before, or both)
- NFR28: AI note generation must not require therapist or client to install any software beyond a modern web browser (Chrome 110+, Firefox 110+, Safari 16+, Edge 110+)
