---
stepsCompleted: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
inputDocuments:
  - ideas/shortlisted/allied-health-ai-scribe.md
  - _bmad-output/planning-artifacts/market-research-chiropractic-practice.md
  - _bmad-output/planning-artifacts/brief-chiropractic-practice.md
workflowType: prd
lastStep: 12
user_name: Root
date: 2026-04-21
---

# Product Requirements Document - ChiroScribe: Allied Health AI Scribe

**Author:** Root
**Date:** 2026-04-21

---

## Executive Summary

ChiroScribe is a compliance-first AI SOAP note scribe purpose-built for chiropractic practitioners, with Phase 2 expansion to physiotherapy and massage therapy. The product addresses a documented and validated market failure: 65,000 US chiropractors and 600,000+ allied health practitioners spend 30–40% of their working day on clinical documentation, yet every available AI scribe tool was built for general practitioners, producing clinically incorrect, compliance-violating notes that practitioners must fully rewrite.

**Core Differentiator:** Chiropractic Medicare compliance embedded at the generation layer — AT modifier language, subluxation ICD-10 M99.x code mapping, CPT region logic (98940/98941/98942), and functional necessity statements generated automatically per note. No competing AI scribe delivers this. Twofold Health, the nearest competitor, explicitly describes its output as "a starting point for chiropractors."

**Target Users:** Solo chiropractors spending 2–3 hours/evening on documentation (primary), multi-provider chiropractic clinic owners managing associate note quality (secondary). Allied health practitioners (physiotherapy, massage therapy) are Phase 2.

**Business Model:** $49/month subscription (200 notes/month), $39/month annual ($468/year). Free trial: 50 notes, no credit card. AppSumo LTD launch ($99, 1,000 note cap) post-validation in month 3–4.

**12-Month Target:** 200+ paying practitioners, $10K+ MRR, $100K+ cumulative LTD revenue, <5% monthly churn.

**Project Classification:** B2B SaaS web application, healthcare domain, high compliance complexity (HIPAA + Medicare Part B AT modifier requirements), greenfield MVP, 3–4 week build.

---

## Project Classification

- **Type:** B2B SaaS Web Application (browser-first, no native app for MVP)
- **Domain:** Healthcare — Allied Health (chiropractic)
- **Compliance Level:** High — HIPAA Privacy Rule, HIPAA Security Rule, Medicare Part B documentation requirements
- **Phase:** Greenfield MVP → Growth → Platform
- **Deployment Target:** Cloud-hosted, US-only PHI data residency
- **Build Complexity:** Medium — AI pipeline (transcription + generation) + compliance layer + HIPAA infrastructure

---

## Success Criteria

### User Success Metrics

**Primary success indicator:** Active ChiroScribe users complete SOAP notes in under 2 minutes from session end (baseline: 10 minutes manual).

**Engagement thresholds (leading indicators):**
- Users completing 10+ notes in first 14 days predict 30-day retention
- Users generating notes on 20+ days per calendar month are fully integrated into daily workflow
- Notes exported to PDF without revision to any compliance section indicate trust in output quality
- Average note review time after first 20 notes: <90 seconds

**Satisfaction targets:**
- NPS >50 at 60-day cohort mark
- G2/Capterra average ≥4.5 stars within 90 days of public launch
- Support tickets related to note quality: <2% of total note volume

### Business Success Metrics

| Metric | 30-Day | 90-Day | 12-Month |
|--------|--------|--------|---------|
| Trial signups | 150 | 500 | 5,000 |
| Trial-to-paid conversion rate | 20% | 25% | 30% |
| Paying subscribers (MRR) | 30 | 125 | 200+ |
| MRR (subscription only) | $1,500 | $6,125 | $10,000+ |
| AppSumo LTD buyers | — | 500–2,000 | — |
| Monthly churn rate | <10% | <7% | <5% |
| Avg notes per active user/month | 100+ | 150+ | 200+ |
| NPS | >30 | >45 | >55 |
| Claim denial rate attributable to note quality | Baseline | -40% | -70% |
| Support ticket rate | <5% | <3% | <2% |

**Leading indicators (predict 90-day success):**
- Day 1 → Day 7 note completion rate (users generating notes in first week)
- Free trial notes that reach the "review & approve" step without abandonment
- Reddit/Facebook organic mentions per week

### MVP Validation Gate (Go/No-Go for AppSumo Launch)

AppSumo application proceeds only when all criteria are met:
1. 80% of beta users (n=20–30 chiropractors) rate output as requiring less editing than current method
2. 3+ chiropractors with Medicare billing experience confirm AT modifier output is audit-defensible
3. Average time from recording start to approved note: <3 minutes for experienced users
4. 60%+ of trial users who complete 10+ notes convert to paid within 30 days
5. 50+ paying subscribers with NPS >40 and note quality rating >4/5 across cohort

---

## Product Scope

### Phase 1: MVP (Weeks 1–4)

**In Scope:**
- Browser-based voice recording (up to 5-minute dictation per session)
- Whisper API transcription
- GPT-4o SOAP generation with chiropractic-specific prompt engineering
- Medicare compliance layer: AT modifier language, M99.x ICD-10 mapping, CPT 98940/98941/98942 region suggestion, functional necessity statement
- Note review and inline editing interface (section-by-section)
- PDF export (practice name, practitioner name, note date, patient reference ID, four SOAP sections)
- HIPAA infrastructure: BAA auto-sign at signup, audio purge post-transcription, AES-256 encryption at rest, TLS 1.3 in transit, audit log
- Account management: email/password signup + Google SSO, email verification
- Stripe billing: $49/month, $39/month annual, 50-note free trial (no credit card)
- Note counter visible in dashboard

**Explicitly Out of Scope (MVP):**
- EHR/PMS integrations (Jane App, SimplePractice, ChiroTouch, WebPT)
- Physiotherapy and massage therapy SOAP templates
- Native iOS/Android apps
- Multi-seat team account management
- Scheduling or billing modules
- AppSumo LTD pricing tier (launches post-validation)
- Real-time ambient in-session capture
- Outcome measure tracking (Oswestry, DASH, NPRS, PSFS)
- Prior authorization documentation generation

### Phase 2: Growth (Months 3–6)

- Physiotherapy SOAP templates (ROM tables with degree values, MMT grade scales, outcome measures: Oswestry, DASH, LEFS, PSFS, NPRS, special tests: Slump, McMurray, Spurling, SLR)
- Massage therapy insurance-billing SOAP templates
- Jane App integration (direct note push to patient record)
- SimplePractice integration
- Multi-seat team accounts (3+ providers, admin dashboard, per-provider usage tracking)
- AppSumo LTD launch ($99, 1,000 note lifetime cap) — gated on MVP validation criteria
- WebPT integration

### Phase 3: Vision (Months 6–18)

- Scheduling integration with pre-visit intake pre-populating Subjective section
- CMS-1500 auto-population from SOAP note data
- ERA/EOB auto-posting and claim denial rate tracking correlated with note quality
- Practice-level compliance audit risk dashboard (documentation completeness scores across all providers)
- Prior authorization AI — auto-generate prior auth requests from SOAP data using payer-specific templates
- ChiroTouch integration
- International expansion (Australia, UK, Canada — each $50M+ TAM in allied health software)

---

## User Journeys

### Journey 1: Solo Chiropractor — Converting from Manual Documentation

**Persona:** Dr. Marcus Chen, 41, solo chiropractor, suburban Chicago. 22–28 patients/day, 6 days/week. ~35% Medicare patients. Spends 2–3 hours/evening on SOAP notes. Primary fear: Medicare AT modifier audit after two colleagues received demand letters.

**Discovery → Activation:**
1. Peer posts in a 100K-member chiropractic Facebook group: "This actually generates correct AT modifier language — completely different from anything I've tried"
2. Marcus searches "AI SOAP notes chiropractor Medicare compliant" — ChiroScribe appears
3. Signs up for free trial — no credit card; HIPAA BAA auto-presented and signed in one click
4. Selects "Chiropractic" discipline and "Medicare provider" billing status
5. Records 60-second dictation of first patient session using his natural clinical language on his phone browser
6. Receives complete SOAP note in under 20 seconds: subluxation listing, M99.01 code, AT modifier language, 3 spinal regions mapped to CPT 98941 — exactly what he would have written

**Aha Moment:** Note that would have taken 8 minutes to write is complete and correct in 90 seconds. No rewriting required.

**Daily Workflow:**
1. Finishes patient session → opens ChiroScribe on phone browser
2. Dictates 60–90-second session summary in clinical shorthand
3. Reviews generated note for 30–60 seconds; makes minor edits if needed
4. Approves → exports PDF → copies into ChiroTouch

**Trust Milestone:** First Medicare claim submitted using ChiroScribe output with zero rework. Marcus posts review in Facebook group: "Finally something that knows what subluxation documentation actually means."

**Revealed Requirements:** FR01, FR02, FR03, FR04, FR05, FR06, FR07, FR08, FR09, FR10, FR14, FR17, FR18, FR23

---

### Journey 2: Multi-Provider Clinic Owner — Reducing Associate Compliance Review Burden

**Persona:** Dr. Sarah Okonkwo, 36, owner of 3-provider chiropractic clinic, Atlanta. Employs two new-graduate associate chiropractors. Spends 1+ hour/week reviewing and correcting associates' Medicare documentation before submission. Claim denial rate from documentation errors: ~8%.

**Discovery → Evaluation:**
1. Searches "AI SOAP notes chiropractor Medicare compliant" → ChiroScribe
2. Signs up for team trial; assigns associates to complete notes for 5 patients each
3. Compares ChiroScribe output to her compliance standards: AT modifier language, subluxation listing, CPT suggestions — all present and correct

**Aha Moment:** Associate notes from ChiroScribe require 80% fewer corrections than manually written notes. Her weekly review burden drops from 60 minutes to under 10 minutes.

**Conversion:** Team plan — $49/provider/month × 3 seats = $147/month.

**Ongoing Usage:**
- Clinic admin dashboard (Phase 2) shows per-provider note volume and usage
- Claim denial rate from documentation errors drops from ~8% to <2% within 90 days

**Revealed Requirements:** FR25 (team/multi-seat — Phase 2), FR10, FR11, FR03, FR04, FR05

---

### Journey 3: New Graduate Chiropractor — Building Compliant Documentation Habits

**Persona:** Jake Morales, 27, new DC graduate starting first associate position. Has learned SOAP structure in school but makes frequent Medicare compliance errors under clinic time pressure. Does not know AT modifier requirements.

**Discovery:** Supervising chiropractor recommends ChiroScribe. Gets free trial access.

**Core Workflow:**
1. Uses ChiroScribe for every note from first week of practice
2. AT modifier language and CPT suggestions appear automatically — learns compliance requirements through output
3. Never develops bad documentation habits that must be corrected later

**Retention Pattern:** ChiroScribe is the first tool opened after every session within 3 days. Churn probability approaches zero for daily-habit users.

**Revealed Requirements:** FR11 (first note in <5 minutes), FR01, FR02, FR18, FR23

---

### Journey 4: Practice Manager — Insurance Billing Workflow Integration

**Persona:** Maria Santos, practice manager for 2-provider chiropractic clinic. Prepares and submits all insurance claims. Current pain: inconsistent note quality causes 6–10% claim denial rate requiring manual rework.

**Interaction with ChiroScribe Output:**
1. Receives ChiroScribe-generated PDFs from chiropractors
2. ICD-10 M99.x codes and CPT suggestions embedded in note reduce time to populate CMS-1500
3. Consistent AT modifier language across all notes reduces compliance review time

**Phase 2:** CMS-1500 auto-population from SOAP data eliminates manual data entry from billing workflow.

**Revealed Requirements:** FR08, FR12, FR04, FR05

---

### Journey 5: Compliance Auditor — HIPAA Infrastructure Verification

**Persona:** Healthcare compliance officer conducting routine HIPAA audit of ChiroScribe's data handling practices.

**Audit Interactions:**
1. Requests BAA documentation — auto-signed at signup, stored immutably and retrievable by user and compliance team
2. Reviews audit log of note creation and export events — timestamped, user-attributed, append-only
3. Confirms audio files are purged within 60 seconds of transcription completion — automated deletion verification hourly
4. Verifies PHI encryption at rest (AES-256) and in transit (TLS 1.3)
5. Reviews incident response documentation for HIPAA breach notification procedures

**Revealed Requirements:** FR09, FR13, FR07, FR16, NFR05, NFR06, NFR15, NFR16

---

## Domain-Specific Requirements

### HIPAA Compliance — Mandatory (Healthcare Domain)

ChiroScribe processes PHI: patient clinical session data including diagnoses, subluxation findings, treatment records, and audio recordings containing patient voice. HIPAA Privacy Rule and Security Rule compliance is mandatory from day one.

**Required Controls:**
- BAA executed with each user at account creation before any PHI access — stored immutably and linked to user account
- Audio files purged within 60 seconds of transcription completion — no audio retained at rest under any condition
- PHI encrypted at rest using AES-256; encrypted in transit using TLS 1.3 minimum
- Audit log maintained for all PHI access events: note creation, note viewing, note export, account data access — retained minimum 6 years (HIPAA minimum)
- Minimum Necessary standard: system accesses only PHI required for note generation; no PHI used for model training without explicit opt-in and BAA amendment
- Authenticated sessions expire after 30 minutes of inactivity
- Documented incident response procedure for HIPAA breach notification (60-day requirement)
- Account deletion: complete PHI deletion within 30 days of verified deletion request

### Medicare Part B — AT Modifier Documentation Requirements

Chiropractic Medicare billing requires specific documentation. Automated payer audit algorithms in 2026 scan for subluxation documentation specificity. Non-compliant notes trigger claim denials and may initiate demand letters.

**Required Elements in Every Medicare-Eligible Note:**
1. **AT modifier language:** Documents that service addresses an active subluxation complex and explicitly excludes maintenance therapy characterization
2. **Subluxation specificity:** Vertebral levels identified to segmental level (e.g., "C5, L4-L5" — not "cervical and lumbar spine")
3. **ICD-10 M99.x mapping:** Each documented subluxation region mapped to the specific M99.x code at 4th-character laterality level
4. **Functional necessity statement:** Documents how the subluxation complex causes functional limitation affecting at least one specific activity of daily living
5. **CPT region consistency:** CPT code suggestion mathematically consistent with spinal regions documented in Objective section — 98940 (1 region), 98941 (2–3 regions), 98942 (4+ regions)

### Chiropractic Terminology Requirements

AI generation must use chiropractic-standard clinical terminology, not general medical or GP terminology. Required vocabulary domains:

**Subluxation documentation:** Vertebral level, listing component notation (flexion, extension, lateral flexion, rotation), segmental contact points, PSIS-referenced pelvic findings

**Adjusting techniques:** Diversified High-Velocity Low-Amplitude (HVLA), Activator instrument-assisted, Toggle Recoil, SOT blocking, Cox flexion-distraction, Thompson Terminal Point Drop, Gonstead, Pierce-Stillwagon, manual traction, soft-tissue therapy

**Orthopedic and neurological tests:** Kemp's Test, Soto-Hall, Valsalva Maneuver, Straight Leg Raise (Lasegue's), Brachial Plexus Tension Test, Foraminal Compression/Distraction, Spurling's, Cervical Distraction, Hibb's Test, FABER, Yeoman's, DeJerine's Triad — each documented with positive/negative result and laterality

**Motion palpation findings:** Fixation, restricted range, end-feel quality (hard, soft, springy)

**Postural findings:** Antalgic lean with direction, lateral spinal deviation, head tilt, shoulder/pelvis height discrepancy (documented in millimeters when measured)

**Outcome measures:** NPRS (Numerical Pain Rating Scale 0–10), Oswestry Disability Index (scored as percentage), Neck Disability Index (NDI)

---

## Innovation Analysis

### Market Gap: No Chiropractic Compliance AI Scribe Exists

The 2026 AI scribe market is validated (Nabla at $30M+ funding, Heidi Health globally distributed, HappyDoc saving veterinary clinics 70+ min/DVM/day) but built exclusively for general practitioners. Every tool uses GP billing logic. Chiropractic is categorically different:

- AT modifier requirements have no GP billing equivalent — GP tools generate notes without AT modifier language by design
- ICD-10 M99.x subluxation codes are unique to chiropractic — GP tools default to musculoskeletal ICD-10 codes that do not trigger chiropractic Medicare reimbursement
- CPT 98940/98941/98942 region logic requires counting spinal regions from the Objective section — GP tools have no such mapping

**Competitor gap confirmation:** Twofold Health (nearest competitor) explicitly describes output as "a starting point for chiropractors." OneChart and ScribePT are physiotherapy-centric. Heidi Health built for GPs; allied health is an acknowledged blind spot. No tool in the market addresses the compliance gap ChiroScribe solves.

### Compliance as First-Mover Moat

Building the chiropractic compliance layer requires: expertise in Medicare Part B chiropractic billing rules, access to AT modifier documentation standards, and chiropractic physician review of generated output. A competitor adding "chiropractic support" to a GP-first tool cannot replicate this in under 3–6 months of specialist involvement. ChiroScribe's advantage window is highest in the first 6 months of market presence.

**Timing signal:** 2026 payer deployment of automated audit algorithms scanning subluxation documentation specificity creates peak practitioner fear now. Compliance-first positioning ("The AI scribe that protects your Medicare claims") addresses the sharpest current purchase driver.

### AppSumo Channel — Unoccupied by Any Allied Health AI Scribe

No allied health AI scribe has launched on AppSumo as of 2026. Solo chiropractic practitioners are the quintessential AppSumo buyer: self-employed, cost-conscious, independent purchasing authority, no IT procurement cycle. A $99 LTD vs. $49/month subscription = 7-week payback for a daily-use tool with 2+ hours/day of recovered time — trivially justifiable ROI.

**LTD architecture:** 1,000-note cap prevents margin erosion. At average 25 patients/day × 6 days × 4 weeks = ~600 notes/month, a 1,000-note LTD is consumed in under 2 months at full clinical volume — converting LTD buyers to subscription before the cap is a designed conversion path.

---

## Project-Type Requirements (SaaS Web Application)

### Application Architecture

- Browser-first web application — no native app download required for MVP (responsive design for desktop, tablet, and mobile browsers)
- Mobile browser optimization is critical: primary use case is recording on phone browser immediately after session while patient is still in room
- Single-page application (SPA) architecture: state preserved during multi-step note creation flow without full page reloads
- Session persistence: in-progress note draft survives browser refresh (stored in browser local storage until explicitly approved or discarded, maximum 24-hour local retention)
- CDN delivery for static assets to minimize load latency globally

### Multi-Tenancy and Data Isolation

- Complete tenant isolation: each practitioner's notes, audio processing records, and account data inaccessible to other users at the application and database layer
- Team account support (Phase 2): multi-seat accounts share billing but maintain per-provider note isolation
- Data residency: PHI stored exclusively in US-based cloud infrastructure for HIPAA compliance
- Account deletion: all PHI and associated metadata deleted within 30 days of verified deletion request; deletion event logged in audit trail

### Subscription and Billing (Stripe)

- Billing tiers: monthly ($49/month, 200 notes), annual ($39/month billed $468/year, 200 notes/month), free trial (50 notes lifetime, no credit card)
- Note counter displayed in dashboard and surfaced in note generation flow at 80% and 95% of monthly limit
- Upgrade flow: in-app upgrade from trial to paid without data or note history loss
- Failed payment: 7-day grace period with in-app notification and email before access restriction to new note generation
- Cancellation: immediate downgrade to read-only mode (no new note generation); approved notes remain accessible and exportable for 30 days post-cancellation
- Stripe webhooks handle subscription status changes in real time

### AI Pipeline

- Voice transcription: Whisper API (OpenAI) for audio-to-text conversion
- SOAP generation: GPT-4o with chiropractic-optimized system prompt and few-shot examples per discipline
- Prompt engineering: discipline-specific templates with compliance rules embedded; Medicare billing status (from user profile) controls inclusion of AT modifier logic
- Processing pipeline: audio upload → transcription → structured SOAP generation → compliance layer application → note delivery
- Target P95 latency: <30 seconds end-to-end for dictations up to 3 minutes

### Monitoring and Analytics

- Usage telemetry: note generation count, completion rate (recording started → note approved), time-to-approval per user, export rate
- Error tracking: failed transcription (API timeout, audio quality), generation timeout, PDF generation failure — each categorized and alerted at >1% failure rate
- Performance monitoring: P50/P95/P99 processing latency per pipeline stage
- Business metrics dashboard: MRR, trial conversion rate, churn rate, notes per user per month — accessible to internal team

---

## Functional Requirements

### Audio Recording and Processing

**FR01:** Practitioners can record session dictations of up to 5 minutes duration directly in a browser tab on desktop or mobile without installing any application or browser plugin, with a real-time elapsed-time indicator and recording quality indicator visible during capture.

**FR02:** Practitioners can re-record a dictation before submitting it for processing, with the previous recording discarded; once submitted, recording cannot be retrieved or replayed.

### SOAP Note Generation

**FR03:** The system generates a complete, structured four-section SOAP note (Subjective, Objective, Assessment, Plan) from a submitted chiropractic dictation within 30 seconds, using chiropractic-standard terminology and clinical notation throughout.

**FR04:** The Subjective section captures and formats: chief complaint, onset and duration, mechanism of injury or onset, pain character (PQRST: provocation, quality, radiation, severity 0–10 NPRS, timing), activities of daily living affected, and prior treatment history when mentioned in dictation.

**FR05:** The Objective section captures and formats: postural analysis findings, range of motion in degrees for spinal regions mentioned, orthopedic and neurological test results with positive/negative findings and laterality, motion palpation findings by spinal region, neurological screen results (sensation, reflexes, muscle strength) when mentioned.

**FR06:** The Objective section correctly recognizes and formats results for at least 15 standard chiropractic orthopedic and neurological tests (Kemp's, Soto-Hall, Valsalva, Straight Leg Raise, Brachial Plexus Tension, Foraminal Compression, Foraminal Distraction, Spurling's, Cervical Distraction, Hibb's, FABER, Yeoman's, DeJerine's Triad, O'Donoghue, Patrick's FABER) using positive/negative notation with laterality.

**FR07:** The Objective section documents ROM findings in degrees using standard directional notation (flexion/extension/lateral flexion/rotation) for cervical, thoracic, and lumbar spine when degree values are stated in dictation.

### Medicare Compliance Layer

**FR08:** When the user's profile is set to "Medicare provider," the Assessment section includes AT modifier compliance language documenting: (a) the service addresses an active subluxation complex, (b) maintenance therapy is explicitly not the purpose of care, and (c) the patient's condition is responsive to skilled chiropractic treatment.

**FR09:** The Assessment section maps each documented subluxation region to the specific M99.x ICD-10 code at the 4th-character level: M99.00 (head), M99.01 (cervical), M99.02 (thoracic), M99.03 (lumbar), M99.04 (sacral), M99.05 (pelvic), M99.06 (lower extremity), M99.07 (upper extremity), M99.08 (rib cage), M99.09 (abdomen/other).

**FR10:** The Assessment section includes a functional necessity statement documenting how the subluxation complex causes functional limitation affecting at least one specific activity of daily living named in the Subjective section (e.g., "patient reports difficulty performing [stated ADL] due to [documented subluxation-related symptom]").

**FR11:** The Plan section suggests the CPT code that is mathematically consistent with the number of spinal regions documented in the Objective section: 98940 when exactly 1 region is documented, 98941 for 2–3 regions, 98942 for 4+ regions; the region count used for CPT suggestion is displayed alongside the suggestion for practitioner verification.

**FR12:** The Plan section documents the adjusting technique(s) used in standard chiropractic notation for at least 10 common techniques stated in dictation: Diversified HVLA, Activator instrument-assisted, Toggle Recoil, SOT blocking, Cox flexion-distraction, Thompson Terminal Point Drop, Gonstead, manual traction, and soft-tissue therapy.

### Note Review and Management

**FR13:** Practitioners can review the generated SOAP note organized into four labeled sections and edit any section inline before approving; the note is marked as "AI-drafted; reviewed and approved by [practitioner name] on [date]" upon approval.

**FR14:** In-progress note drafts are preserved in browser local storage for up to 24 hours, surviving browser refresh and accidental tab closure; users see a recovery prompt on next login within the 24-hour window if an unsaved draft exists.

**FR15:** Practitioners can access all previously approved notes for their account, filterable by date range, with full SOAP content viewable and re-exportable to PDF without time limit.

**FR16:** When note generation fails (API error, transcription failure, timeout), users receive an error message identifying the specific failure stage and can retry processing using the same audio submission without re-recording.

### PDF Export

**FR17:** Practitioners can export any approved note as a PDF containing: practice name, practitioner name, note date, patient reference ID (not patient name — privacy by default), all four SOAP sections with compliance language, ICD-10 codes, and CPT code suggestion; PDF format is suitable for insurance submission and medical records filing.

**FR18:** ICD-10 M99.x codes and CPT code suggestion are formatted as a clearly labeled billing reference block in the exported PDF for use by practice managers in CMS-1500 preparation.

### HIPAA Compliance

**FR19:** Users complete email-verified account creation and review and accept the Business Associate Agreement before accessing any note generation or PHI-related features; the signed BAA is stored immutably, timestamped, and retrievable by the user and ChiroScribe compliance team.

**FR20:** Audio recording files are purged from all system storage within 60 seconds of transcription completion; no mechanism exists to retrieve or replay audio after transcription; automated deletion verification runs hourly and alerts on any audio file exceeding 90 minutes of age.

**FR21:** The system maintains an immutable, tamper-evident audit log of all PHI access events — note creation, note viewing, note export, account data access — each record timestamped and attributed to the authenticated user, retained for minimum 6 years.

**FR22:** All PHI stored in the system (note content, patient reference IDs, audit logs) is encrypted at rest using AES-256; all data transmitted between client and server is encrypted using TLS 1.3; encryption keys are rotated on a schedule compliant with HIPAA Security Rule requirements.

### Authentication and Account Management

**FR23:** Users create accounts via email/password or Google SSO; email verification is required before accessing any feature; sessions expire and are invalidated after 30 minutes of inactivity; concurrent active sessions are limited to 3 per account.

**FR24:** Failed login attempts are rate-limited to 5 per 5-minute window per IP address; after 10 consecutive failed attempts the account is locked for 15 minutes with email notification to the account holder.

**FR25:** Practitioners configure their profile with practice name, practitioner name, and Medicare billing status (Medicare provider or non-Medicare provider) during onboarding; Medicare billing status controls whether AT modifier compliance language and functional necessity statements are included by default in generated notes.

**FR26:** Practitioners select their primary discipline (Chiropractic in Phase 1) during onboarding, which determines which SOAP prompt template and compliance rules are applied to note generation.

### Subscription and Billing

**FR27:** New users access 50 note generations without providing payment information; a note counter displays remaining free notes on the dashboard and in the note generation flow; notes consumed during trial count toward the lifetime trial limit.

**FR28:** Users who have consumed 80% and 95% of their monthly note allowance receive in-app notification; users who reach 100% of their monthly allowance cannot generate additional notes until the next billing period or until they upgrade their plan; existing approved notes remain accessible.

**FR29:** Users can subscribe to monthly ($49) or annual ($39/month) plans via Stripe, view their current billing period and next charge date, update payment methods, and cancel their subscription entirely within the app without contacting support.

**FR30:** Failed subscription payment triggers a 7-day grace period during which note generation continues; at the end of the grace period without payment resolution, note generation is suspended and the user is notified by in-app alert and email; subscription reactivation restores full access immediately.

### User Interface and Feedback

**FR31:** During note generation, users see a progress indicator identifying the current processing stage: "Transcribing audio → Analyzing clinical content → Generating SOAP sections → Applying compliance layer → Ready for review."

**FR32:** The note dashboard displays: total notes generated (lifetime and current month), notes remaining in current period, account plan type, and date of next billing.

---

## Non-Functional Requirements

### Performance

**NFR01:** The full note generation pipeline (audio upload → transcription → SOAP generation → compliance layer → delivery) completes in under 30 seconds for dictations up to 3 minutes duration at the 95th percentile under normal load (up to 100 concurrent generation requests), as measured by APM monitoring.

**NFR02:** The browser-based audio recording interface loads and becomes interactive within 3 seconds on a mobile browser on a 4G connection (iOS Safari, Android Chrome), as measured by Time to Interactive via synthetic monitoring.

**NFR03:** PDF export generates and initiates browser download within 5 seconds of user action at the 95th percentile, as measured by end-to-end synthetic test.

**NFR04:** Dashboard and note history pages achieve First Contentful Paint under 2 seconds on desktop browsers (95th percentile, standard broadband connection), as measured by Lighthouse in CI.

### Security

**NFR05:** PHI is encrypted at rest using AES-256 and in transit using TLS 1.3; any storage or transmission of PHI using weaker encryption is a P0 security defect requiring immediate remediation and user notification.

**NFR06:** Audio files containing patient voice data are purged within 60 seconds of transcription completion; automated deletion verification executes hourly and alerts on-call within 5 minutes if any audio file is detected with age exceeding 90 minutes.

**NFR07:** Authenticated sessions are invalidated server-side after 30 minutes of inactivity; session tokens are cryptographically signed and validated server-side on each request; concurrent sessions per account are limited to 3.

**NFR08:** The application achieves zero critical or high findings on OWASP Top 10 vulnerability scan before public launch, as verified by automated SAST scanning in CI/CD pipeline on every merge to main.

**NFR09:** Failed login attempts are rate-limited to 5 per 5-minute window per IP; account lockout activates after 10 consecutive failures with 15-minute lockout and email notification to account holder.

### Reliability and Availability

**NFR10:** The application maintains 99.5% uptime during US business hours (6 AM–10 PM across US time zones) as measured monthly by uptime monitoring with 1-minute check intervals.

**NFR11:** Note generation failures (API errors, timeouts) are monitored in real time; an alert fires within 5 minutes when the failure rate exceeds 1% of generation requests in any 5-minute rolling window.

**NFR12:** Approved note data is backed up with point-in-time recovery; Recovery Point Objective (RPO): 1 hour; Recovery Time Objective (RTO): 4 hours following a declared outage, as validated by quarterly recovery drills.

### Scalability

**NFR13:** The system handles up to 500 concurrent users and 100 concurrent note generation requests without degradation in NFR01 latency thresholds, as validated by load testing before public launch.

**NFR14:** Application infrastructure scales horizontally to handle 10x baseline concurrent load within 5 minutes of sustained load increase using cloud auto-scaling; maximum scale is validated by load test before AppSumo launch.

### HIPAA Compliance

**NFR15:** 100% of user accounts complete BAA acceptance before accessing any PHI-related feature; BAA acceptance is enforced at the application layer with no bypass path; this constraint is verified by automated integration test in CI.

**NFR16:** Audit logs are stored in an append-only, tamper-evident log store retained for a minimum of 6 years in compliance with HIPAA minimum retention requirements; log integrity is verified monthly by automated checksumming.

**NFR17:** Account data deletion requests are completed within 30 days; deletion scope includes all PHI, note content, audio processing records, and associated metadata; each deletion is logged in the audit trail with timestamp and scope confirmation.

### Accessibility

**NFR18:** Core user workflows — initiating recording, reviewing note sections, editing inline, approving, and exporting PDF — are fully operable via keyboard navigation without requiring mouse input.

**NFR19:** Application UI meets WCAG 2.1 Level AA standards for color contrast ratios (minimum 4.5:1 for normal text, 3:1 for large text) and minimum touch target sizes (44×44px on mobile), as verified by automated accessibility scanning in CI.

---

*PRD created via automated BMAD create-prd workflow*
*Date: 2026-04-21*
*Next recommended step: `/bmad-bmm-create-architecture` — create technical architecture using this PRD as foundation*
