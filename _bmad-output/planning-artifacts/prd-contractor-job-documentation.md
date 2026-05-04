---
stepsCompleted: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
inputDocuments:
  - ideas/shortlisted/contractor-job-documentation.md
  - _bmad-output/planning-artifacts/market-research-contractor-job-documentation.md
  - _bmad-output/planning-artifacts/brief-contractor-job-documentation.md
workflowType: prd
project_name: contractor-job-documentation
product_name: FieldDoc
lastStep: 12
date: 2026-05-04
author: Root
---

# Product Requirements Document — FieldDoc

**Author:** Root
**Date:** 2026-05-04
**Project:** contractor-job-documentation
**Product:** FieldDoc — Niche Contractor Job Documentation & AI Report Platform

---

## Executive Summary

FieldDoc is a mobile-first, AI-powered job photo documentation and report generation platform for niche contractor inspection verticals that generic tools ignore. The MVP targets pool inspectors exclusively; subsequent releases expand to pest control, HVAC compliance, and fire safety inspection.

**Core value proposition:** AI-assisted report generation reduces post-inspection report writing from 45–120 minutes to under 15 minutes. Combined with a $49–$79/month solo-operator price point (versus CompanyCam's $237/month 3-user minimum floor), FieldDoc directly serves a documented, concrete segment that the category leader has structurally abandoned.

**Market validation:** CompanyCam ($68M ARR, $1.99B valuation) proves the job documentation category at macro scale. Spectora ($27–30M ARR bootstrapped, $90M majority sale) proves the identical niche-down playbook applied to a single inspection vertical. FieldDoc applies the Spectora formula to pool inspection first, with a clear vertical expansion roadmap.

**Product differentiator:** A pre-built, vertical-specific comment library (200+ pool defects, equipment items, safety findings) combined with GPT-4o narrative generation produces a professional branded PDF inspection report from field photos in one tap — a capability no direct competitor offers in the pool, pest, HVAC, or fire safety verticals.

**Revenue target:** $10K MRR by month 9; $130K MRR ($1.5M ARR) by month 18 across 4 verticals.

**Build target:** 4-week MVP, pool inspection vertical only.

---

## Project Classification

- **Type:** Greenfield mobile-first SaaS product
- **Domain:** Field service software / inspection technology / contractor tooling
- **Complexity:** Medium — offline-first mobile architecture, AI integration, PDF generation, multi-tenant SaaS
- **Context:** Solo and small-team (2–5 person) contractor professionals in niche inspection verticals
- **Primary platform:** iOS and Android mobile app (React Native or Flutter); web app deferred to Phase 2
- **GTM model:** PLG (free trial) + AppSumo LTD launch + Facebook Group community seeding

---

## Success Criteria

### User Success

| Metric | Target | Measurement Method |
|--------|--------|--------------------|
| Time to first report (onboarding) | < 15 minutes from account creation | In-app event: account_created → report_sent |
| Report generation time per job | < 15 minutes (vs. 60–90 min baseline) | Job timer: checklist_complete → report_sent |
| Same-day report delivery rate | > 85% of completed jobs | Job completion timestamp vs. report delivery timestamp |
| AI narrative acceptance rate (no edit) | > 60% within 90 days of launch | Track: AI generate → publish without edit events |
| Offline photo capture usage | > 40% of photo captures occur offline | Sync queue events: offline_capture logged |
| Comment library customization | > 60% of users add ≥1 custom comment within 30 days | Feature adoption event: custom_comment_added |
| Net Promoter Score | > 55 (industry avg ~35) | Monthly in-app NPS survey |
| Crash-free sessions | > 99.5% | Crash reporting (Sentry or equivalent) |

### Business Success

**3-Month targets:**
- AppSumo LTD launch: 300–500 lifetime deal purchases (pool vertical)
- 50+ active paying monthly subscribers
- MRR: $2,500–$5,000
- PMF signal: > 70% of trial users complete ≥ 3 jobs

**6-Month targets:**
- 200+ active paying subscribers
- MRR: $12,000–$15,000
- Pest control vertical launched (EPA mandate urgency)
- Trial-to-paid conversion: > 25%
- Monthly churn: < 3%

**12-Month targets:**
- 1,000+ active paying subscribers across 2–3 verticals
- MRR: $65,000
- HVAC compliance vertical launched
- Annual plan take rate: > 30% of subscribers

**18-Month targets:**
- 2,000+ active paying subscribers
- MRR: $130,000 ($1.5M ARR)
- 4 verticals fully operational (pool, pest, HVAC, fire safety)

### Technical Success

- Zero data loss from offline sync failures in first 30 days post-launch
- PDF generation < 10 seconds per report (p95)
- AI narrative generation < 8 seconds per item (p95)
- App cold start time < 2 seconds on 3-year-old mid-range Android
- Photo sync completion within 60 seconds of connectivity restoration
- Support tickets per 100 active users: < 5/month

---

## Product Scope

### MVP (4 Weeks) — Pool Inspection Only

**In scope:**
- Mobile job management (create, list, search jobs with offline-first storage)
- In-app photo capture with direct-to-job organization
- Pool-specific checklist library (200+ items across 7 pool areas)
- AI-generated report narrative (GPT-4o, one tap per job)
- Professional branded PDF export with cover page, findings, photos, signature field
- Company branding setup (logo, name, license, color theme)
- Basic job history with searchable archive
- Free trial (14 days, no credit card required) + paid subscription billing

**Out of scope for MVP:**
- Pest control, HVAC, fire safety verticals
- Multi-technician team accounts and oversight dashboard
- Client-facing portal (client login to view historical reports)
- Scheduling, calendar, or CRM integrations
- Payment/invoice generation
- OCR equipment nameplate capture
- Web app (desktop)
- AI photo defect detection (computer vision)
- Zapier/API integrations
- White-label/reseller mode

### Growth Phase (Months 4–8)

- Pest control vertical (checklist + EPA mandate compliance export)
- Team plan (2–10 technicians, shared job library, consolidated reporting)
- Enhanced AI: per-item regeneration, severity-aware narrative tuning
- Client-facing report delivery portal (view-only link, 30-day expiry)
- Trade association partnership integrations (PHTA, NPMA)

### Expansion Phase (Months 9–18)

- HVAC compliance vertical (ENERGY STAR geotagged documentation, OCR nameplate)
- Fire safety vertical (NFPA 25/72 export formats)
- Web app (desktop report review and editing)
- API for FSM integration (PestPac, GorillaDesk, ServiceTitan)
- White-label mode for trade association resellers
- AI photo defect detection (computer vision, no checklist required)

---

## User Journeys

### Journey 1: Marcus — Solo Pool Inspector (Primary)

**Background:** Marcus is 38, self-employed, certified pool inspector in Arizona running 4–6 pool inspections daily ($150–$250 each). He currently photographs on iPhone, organizes albums by address, and writes reports at home from a Google Doc template — 60–90 minutes per report, every evening. He abandoned CompanyCam due to the $237/month 3-user minimum.

**Discovery → Trial:**
Marcus sees a post in a Facebook Group for Arizona pool inspectors: "I've been using FieldDoc — cut my report time from 90 minutes to 10. Worth trying." He follows the link to a 14-day free trial. No credit card required. He selects "Pool Inspection" during onboarding, and the app immediately shows him a pre-built checklist library with 200+ pool-specific items. The onboarding demo creates a sample job with stock photos and shows him the finished branded PDF before he's done any real work. He is surprised: the output looks more professional than his Google Doc.

**First real job:**
Marcus creates a new job en route to a property — address, client name, and date auto-fill from his calendar event. On-site, he opens FieldDoc and captures photos directly in the app, each one immediately tagged to the job. In the equipment room (no cell signal), the app works identically — photos queue locally. He works through the pool checklist, marking items as acceptable or deficient, tapping to add the relevant finding from the library. For one deficient item he adds a custom note. He taps "Generate Report." In 8 seconds, every deficient item has a 2-sentence professional narrative.

**Aha! moment:**
Still in the parking lot, Marcus reviews the AI narratives — 4 of 5 require no edits. He taps "Export PDF" and sends the report link to the client. The client replies within 10 minutes: "This is the most professional pool inspection report I've ever received. Can I have your card?"

**Ongoing use / switching cost:**
Over 30 days, Marcus adds 15 custom comments from his personal phrasing preferences. These custom comments are now a personal asset that doesn't exist anywhere else. He renews annually. When a competitor launches a similar tool, he estimates the cost to recreate his custom library at 4–6 hours — he stays.

---

### Journey 2: Diana — Pest Control Owner-Operator (Phase 2 Persona)

**Background:** Diana is 45, runs a 3-person pest control company in Florida. The EPA's April 2025 electronic pesticide record mandate has her on paper and exposed. She evaluates PestPac (enterprise pricing), GorillaDesk (not documentation-focused), and paper scanning (no audit trail). She needs EPA-compliant records and consistent technician documentation.

**Discovery:**
Diana finds FieldDoc via an NPMA newsletter partnership feature: "Tools pest control operators use to stay EPA-compliant." She creates a trial account, selects "Pest Control," and sees the EPA-compliant treatment record template alongside evidence documentation checklists.

**Team setup:**
Diana invites her two technicians. Each gets the app on their field phones. Diana configures the shared checklist library with her standard pest evidence categories and treatment protocols.

**Field to compliance:**
A technician documents a rat evidence job — captures photos of droppings, burrows, entry points, and treatment application locations. The checklist auto-populates the EPA treatment record fields (pesticide applied, EPA registration number, application method, concentration, target pest, application date/time). The record is geotagged and timestamped. Diana reviews from her phone in real time. No paper, no scanning, no chasing technicians.

**Aha! moment:**
A state EPA inspector requests pesticide application records for the past 6 months. Diana exports a structured PDF archive from FieldDoc in under 5 minutes. The inspector completes his review on-site and leaves. Diana's previous version of this scenario: 3 hours of archive digging through paper folders.

---

### Journey 3: James — HVAC Install Crew Lead (Phase 3 Persona)

**Background:** James is 34, leads a 4-person HVAC installation crew. Incomplete ENERGY STAR documentation delays utility rebate applications ($500–$2,000 per install). His current workflow: personal phone photos in labeled folders, end-of-week Excel compliance sheets filled from memory. Mismatch between photos and records is constant.

**Core workflow with FieldDoc:**
James opens a new HVAC install job on-site. He photographs equipment nameplates — FieldDoc's OCR extracts model number, serial number, and ENERGY STAR certification status automatically. He completes the HVAC installation checklist (insulation, refrigerant charge, duct leakage, commissioning). Photos are geotagged. The job record is ENERGY STAR format-compliant on completion.

**Outcome:**
Rebate applications go out the same week as install. Zero documentation follow-up requests from the utility. James's company qualifies for a contractor loyalty rebate tier based on documentation consistency.

---

### Journey 4: Report Recipient — Building Owner / Property Manager (Secondary)

**Background:** Sarah receives a FieldDoc-generated pool inspection PDF as the property owner commissioning the inspection.

**Experience:**
Sarah receives an email link from Marcus: "Your inspection report is ready." She clicks the link, which opens a clean, mobile-friendly PDF viewer — no login required, 7-day expiry. The report has Marcus's company logo, a cover page with her property address, an executive summary, and organized findings with photos and narrative explanations.

**Viral acquisition moment:**
Sarah forwards the report to her property management company's group chat: "Got this from my pool inspector. This is the most professional report I've seen." Her colleague asks who the inspector is. The "Report powered by FieldDoc" footer generates 2 inbound inquiries to Marcus about his services. Marcus mentions FieldDoc in response — one of Sarah's colleagues signs up for a trial.

---

### Journey 5: Compliance Auditor (Secondary Validation)

**Background:** An EPA auditor reviews pesticide application records for a pest control operator using FieldDoc.

**Experience:**
The operator exports a date-range filtered compliance archive from FieldDoc. The PDF package includes: cover page with operator license, each treatment record with EPA registration number, application date/time, geotag, pesticide concentration, target pest, and technician signature. The auditor completes review without requesting any supplementary documentation. This outcome validates FieldDoc's compliance output format as genuinely accepted — not just generated.

---

## Domain-Specific Requirements

### Regulatory Compliance

**Pest control (Phase 2 priority):**
- EPA pesticide application records must include: pesticide trade name, EPA registration number, active ingredient, formulation, application site (address + GPS coordinates), application date and time, pest target, application method, application rate and quantity, applicator name and license number, business license number
- Electronic records must be retrievable by state or federal inspector on demand (export within 5 minutes)
- Records must be stored for a minimum of 2 years (US federal requirement; some states require 3 years)
- Digital signature must meet EPA electronic recordkeeping standards (21 CFR Part 11 equivalent intent)

**HVAC compliance (Phase 3):**
- ENERGY STAR documentation: geotagged photos of equipment nameplates, model number, serial number, ENERGY STAR certification label
- Photos must be timestamped and GPS-tagged to be accepted for utility rebate applications
- Equipment data must be exportable in formats accepted by major US utility programs

**Fire safety (Phase 3):**
- NFPA 25 (sprinkler) and NFPA 72 (fire alarm) inspection formats required
- Deficiency tracking with re-inspection status and date resolved
- Inspection records must support litigation-grade timestamp and auditor chain-of-custody documentation

**Pool inspection (MVP):**
- No federal mandate, but state pool safety codes (e.g., Virginia Graeme Baker Pool and Spa Safety Act compliance documentation) are relevant for safety findings
- Inspector license number must appear on all reports (most states require this)

### Data Retention and Privacy

- Job records retained for minimum 3 years (aligns with most stringent US state requirement for pest control)
- Photos stored in cloud with local backup; user can request full data export or deletion (GDPR/CCPA compliance)
- Client personal data (name, property address) must not be shared with third parties without consent
- Reports delivered via expiring links (7-day default) rather than persistent public URLs

### Offline Reliability

- 100% of core workflow (photo capture, checklist completion, job creation) must function without network connectivity
- No data loss permitted under any offline duration (1 hour to 7 days)
- Conflict resolution: if same job is edited on two devices simultaneously, the most recent edit wins with a conflict notification

---

## Innovation & Novel Patterns

### AI Narrative Generation from Structured Field Data

FieldDoc's primary innovation is the combination of:
1. Vertical-specific checklist library (domain ontology)
2. Field photo context (visual input)
3. GPT-4o narrative generation (language output)

No competitor in pool inspection, pest control, HVAC compliance, or fire safety offers this capability. The output — a professional 2–3 sentence finding narrative generated from a photo + checkbox selection — compresses 60–90 minutes of post-inspection writing into a 10-minute on-site review step.

**Validation approach:** Measure AI narrative acceptance rate (user publishes without edit) as primary quality signal. Target: > 60% acceptance by day 90 post-launch. Iterate on prompt library and comment taxonomy weekly based on rejection patterns.

**Prompt architecture:**
- System prompt includes: vertical context (pool inspection), inspector role, professional tone guidelines, defect severity ladder, regional regulatory context
- Per-item prompt includes: checklist item name, severity selection, inspector free-text note (if any), photo description (auto-generated from image via GPT-4o Vision)
- Output: 2–3 sentence professional finding in active voice, severity-appropriate language, specific observation without overstating certainty

### Vertical-Specific Comment Library as Defensible Moat

The pool defect taxonomy (200+ items, organized by area and severity) is the exact moat Spectora used in home inspection — a structured knowledge base of standard findings that takes real domain expertise to build and creates switching costs once customized. Building this library requires collaboration with 5–10 working pool inspectors before launch. This is the single highest-leverage pre-launch investment.

### Branded PDF as Viral Distribution Channel

Every FieldDoc report delivered to a client is a free marketing impression. The "Report powered by FieldDoc" footer turns professional documentation into a referral engine — the same dynamic that drove Spectora's early word-of-mouth growth in home inspection communities. This is not a paid acquisition channel; it is a product design decision that generates compounding organic acquisition.

---

## Mobile SaaS Specific Requirements

### Mobile Platform

- iOS (minimum: iOS 16) and Android (minimum: Android 11) native-quality experience via cross-platform framework (React Native or Flutter)
- All core workflows must be fully functional on a 5-year-old mid-range device (4GB RAM, 64GB storage)
- Photo capture uses native camera API for maximum reliability; no in-app camera re-implementation
- App binary size: < 50MB initial download

### Offline-First Architecture

- Local-first data storage: all job data, checklist selections, and photos stored on device before sync
- Sync engine: bidirectional sync on connectivity restoration using conflict-free replicated data structure (CRDT) or last-write-wins with conflict notification
- Photo sync queue: photos compressed to 2–4MB each before upload (original preserved locally if storage available)
- Sync status visible at all times: "Synced," "Syncing," "X items pending sync" with item count

### Performance

- Job list load time: < 500ms for up to 1,000 jobs (local query)
- Photo capture to in-job display: < 300ms (local write, no network dependency)
- AI narrative generation: < 8 seconds per item (p95, requires connectivity)
- PDF generation: < 10 seconds per report (p95, requires connectivity)
- App cold start: < 2 seconds (p95, mid-range Android)

### Push Notifications

- Report delivery confirmation: "Your report has been sent to [client name]"
- Sync completion notification: "X photos synced from your last inspection"
- Subscription renewal reminder (7 days before charge)
- No notification spam: maximum 3 push notifications per day from FieldDoc

---

## Project Scoping & Phased Development

### Phase 1: MVP (Weeks 1–4) — Pool Inspection Solo

**Goal:** Prove the core loop (photo capture → checklist → AI narrative → branded PDF) with real pool inspectors and validate the $49/month price point.

**Scope:**
- Mobile job management (create, list, search, archive)
- In-app camera with direct-to-job photo tagging
- Pool checklist library (200+ items, 7 areas)
- AI narrative generation (GPT-4o, full job batch)
- Branded PDF export (cover page, executive summary, findings with photos, signature field)
- Company branding (logo, name, license number, color)
- Offline-first sync (Firebase Firestore + local SQLite/MMKV)
- Free 14-day trial + Stripe subscription billing ($49/month individual)
- AppSumo LTD package ($79 one-time, 1 user, lifetime)

**Go/No-Go at Day 60:**
- ≥ 50 inspectors complete ≥ 3 jobs → report generation time < 20 minutes: ✅/❌
- AI narrative acceptance rate > 60%: ✅/❌
- Trial-to-paid conversion > 25%: ✅/❌
- Zero offline data loss incidents: ✅/❌

### Phase 2: Growth (Months 4–8) — Pest Control + Teams

**Goal:** Capture EPA mandate urgency in pest control; prove team plan as a revenue tier above solo.

**Scope additions:**
- Pest control vertical (evidence checklist + EPA treatment record auto-generation)
- Team plan ($149/month, up to 5 technicians)
- Team oversight dashboard (real-time job status per technician)
- Compliance archive export (pest control: date-range filtered PDF package)
- Client report delivery portal (view-only link, 30-day expiry)

### Phase 3: Expansion (Months 9–18) — HVAC + Fire Safety + Platform

**Goal:** Complete 4-vertical coverage; introduce platform-level integrations enabling enterprise team deals.

**Scope additions:**
- HVAC compliance vertical (ENERGY STAR format, OCR nameplate capture)
- Fire safety vertical (NFPA 25/72 export)
- Web app (report review, editing, client management — desktop)
- API for FSM integration (read: sync completed jobs; write: create jobs from scheduled appointments)
- White-label mode for trade association partners

### Scope Risk Register

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| AI narrative quality insufficient for pool inspection on launch | Medium | High | Pre-launch: 10 inspectors test 50+ AI-generated reports; iterate prompt library before release |
| Offline sync edge cases cause data loss | Low | Critical | Pre-launch testing on airplane mode, mid-sync device kill, duplicate sync scenarios |
| Pool inspection market too small for $10K MRR without team plans | Medium | Medium | Include team plan in month 4 plan; monitor solo ARPU; pivot to team-first if solo conversion < 20% |
| CompanyCam adds niche vertical templates | Low | Medium | Moat is the AI narrative + solo pricing + offline reliability — not just templates |
| AppSumo LTD cannibalizes subscription revenue | Low | Low | Cap LTD at 500 sales; price LTD at 2x annual plan equivalent; add-ons (extra storage, team seats) drive post-LTD revenue |

---

## Functional Requirements

### FR-01: Job Management

| ID | Requirement |
|----|-------------|
| FR-01.1 | User can create a new job with: property address (Google Places autocomplete), client name, inspection date, and job type (pool inspection for MVP) |
| FR-01.2 | System populates job creation date/time automatically; user can override inspection date |
| FR-01.3 | Jobs are listed in reverse chronological order by default; user can sort by client name or status |
| FR-01.4 | User can filter job list by status (In Progress, Draft, Report Sent) and by date range |
| FR-01.5 | User can search jobs by address, client name, or partial match |
| FR-01.6 | User can reopen any past job to re-deliver the report link |
| FR-01.7 | Job data (including all photos and checklist selections) is available offline immediately after creation |
| FR-01.8 | User can duplicate a job (for recurring clients / annual inspections) |
| FR-01.9 | User can archive or delete a job; deleted jobs require confirmation and are soft-deleted for 30 days |

### FR-02: Photo Capture & Organization

| ID | Requirement |
|----|-------------|
| FR-02.1 | User can capture photos directly in the app; photos are immediately attached to the active job (never to camera roll by default) |
| FR-02.2 | User can optionally save a copy to camera roll (toggle in settings) |
| FR-02.3 | User can import existing photos from camera roll into a job |
| FR-02.4 | User can capture photos in batch mode (rapid successive captures with single-tap confirmation) |
| FR-02.5 | Each photo can be tagged with a checklist area (e.g., "Pump / Motor", "Pool Surface", "Electrical") for organization |
| FR-02.6 | Each photo can have a free-text caption added by the user |
| FR-02.7 | User can reorder photos within a job via drag-and-drop |
| FR-02.8 | User can delete photos (with confirmation) |
| FR-02.9 | Photos captured offline are queued locally and sync automatically when connectivity returns |
| FR-02.10 | Sync status is displayed per job: number of photos pending upload |
| FR-02.11 | Photos are compressed to < 4MB for upload while preserving original locally (if storage permits) |
| FR-02.12 | Metadata (GPS coordinates, timestamp) is preserved from the original photo capture |

### FR-03: Vertical-Specific Checklist Library

| ID | Requirement |
|----|-------------|
| FR-03.1 | Pool inspection checklist contains ≥ 200 standard items organized by area: Deck & Coping, Pool Surface, Equipment (Pump / Motor / Filter / Heater), Plumbing, Electrical, Water Chemistry, Safety Features |
| FR-03.2 | Each checklist item has: name, area category, default severity (Minor / Major / Safety Hazard / Informational), and a standard narrative template |
| FR-03.3 | Inspector can mark any item as: Acceptable, Deficient, N/A, or Informational |
| FR-03.4 | Inspector can attach one or more photos to any checklist item |
| FR-03.5 | Inspector can add a free-text note to any checklist item (in addition to the standard narrative) |
| FR-03.6 | Inspector can add a custom checklist item not in the library (free-text name, severity, note) |
| FR-03.7 | Inspector can save a custom item to their personal library for future reuse |
| FR-03.8 | Personal library items persist across jobs and accounts; they are the inspector's asset, not shared |
| FR-03.9 | Inspector can edit the severity of any pre-built item on a per-job basis |
| FR-03.10 | Checklist progress is shown as a completion indicator (e.g., "47 of 200 items reviewed") |
| FR-03.11 | Inspector can filter checklist view to show only Deficient items after initial walk-through |

### FR-04: AI Report Narrative Generation

| ID | Requirement |
|----|-------------|
| FR-04.1 | User can generate AI narratives for all deficient items in one tap after checklist completion |
| FR-04.2 | AI generates a 2–3 sentence professional narrative per deficient item using: item name, severity, inspector notes, and photo visual context (GPT-4o Vision) |
| FR-04.3 | Narratives use active voice, specific observations, and severity-appropriate language |
| FR-04.4 | User can edit any AI-generated narrative inline before publishing |
| FR-04.5 | User can regenerate the narrative for any individual item (without regenerating others) |
| FR-04.6 | User can discard AI narrative and write a manual narrative for any item |
| FR-04.7 | Narrative generation requires network connectivity; user is notified if offline |
| FR-04.8 | Generation progress is shown (per-item status: generating / complete / error) |
| FR-04.9 | System retries failed narrative generation automatically up to 3 times before surfacing error |
| FR-04.10 | User can publish a report without AI narratives (checklist + photos only) if they prefer |

### FR-05: PDF Report Export

| ID | Requirement |
|----|-------------|
| FR-05.1 | Report PDF includes a cover page with: company logo, inspector name, license number, company contact information, client name, property address, inspection date, and report generation date |
| FR-05.2 | Report PDF includes an executive summary with: overall condition assessment (inspector-selectable: Pass / Advisory / Fail / Reinspection Required), total count of findings by severity |
| FR-05.3 | Report PDF includes a findings section: each deficient item listed with area header, item name, severity badge, attached photos (up to 3 per item, inline), and narrative text |
| FR-05.4 | Report PDF includes an appendix with: all acceptable items listed by area, any informational observations, and all photos not directly tied to findings |
| FR-05.5 | Report PDF includes a digital signature field for inspector signature capture on device |
| FR-05.6 | PDF is generated server-side; generation time < 10 seconds (p95) |
| FR-05.7 | User can preview the PDF in-app before export |
| FR-05.8 | User can export the PDF via: shareable link (7-day expiry), direct email send (with default message template), or save to device Files |
| FR-05.9 | Shareable links are accessible without login on any browser (mobile-optimized PDF viewer) |
| FR-05.10 | Report footer includes "Report powered by FieldDoc" with a link to the FieldDoc landing page (viral acquisition) |
| FR-05.11 | Inspector can disable the FieldDoc footer branding on paid plans (toggle in settings) |

### FR-06: Company Branding

| ID | Requirement |
|----|-------------|
| FR-06.1 | User can upload a company logo (PNG/JPG, min 200x200px); logo appears on all report covers |
| FR-06.2 | User configures: company name, phone number, email address, website URL, inspector license number |
| FR-06.3 | User selects a report header color from a preset palette (6–8 options) or enters a hex code |
| FR-06.4 | Branding settings are applied globally to all reports; user can override per-report |
| FR-06.5 | Branding setup is completed during onboarding (step 2 of the initial flow) |
| FR-06.6 | User can preview the report cover page with their branding before saving |

### FR-07: Job History & Archive

| ID | Requirement |
|----|-------------|
| FR-07.1 | All completed jobs are searchable by address, client name, and date range |
| FR-07.2 | User can view the full job details and photos for any historical job |
| FR-07.3 | User can re-send the report link for any past job (link is regenerated with a new 7-day expiry) |
| FR-07.4 | User can generate an updated PDF for a past job if edits were made |
| FR-07.5 | Job history is backed up to cloud; accessible on a new device after login |
| FR-07.6 | User can export their complete job history as a data archive (CSV + photos ZIP) for data portability |

### FR-08: Account & Subscription Management

| ID | Requirement |
|----|-------------|
| FR-08.1 | User can create an account with email + password or Google/Apple SSO |
| FR-08.2 | 14-day free trial starts on account creation; no credit card required |
| FR-08.3 | Trial includes full feature access with a 3-job limit to create urgency for conversion |
| FR-08.4 | User is notified at 7 days and 2 days before trial expiration |
| FR-08.5 | Subscription plans available: Individual ($49/month or $39/month billed annually); Team ($149/month, up to 5 users — Phase 2) |
| FR-08.6 | Payment via Stripe; user can update payment method from account settings |
| FR-08.7 | User can cancel subscription from account settings; access continues through the paid period |
| FR-08.8 | AppSumo LTD code redemption available on the signup screen and account settings |
| FR-08.9 | User receives email receipt for all charges |
| FR-08.10 | User can download invoice history from account settings |

### FR-09: Onboarding Flow

| ID | Requirement |
|----|-------------|
| FR-09.1 | Onboarding is completed in < 5 steps: (1) account creation, (2) vertical selection, (3) branding setup, (4) demo job walkthrough, (5) trial confirmation |
| FR-09.2 | Step 2 presents vertical options: Pool Inspection (available), Pest Control / HVAC / Fire Safety (coming soon) |
| FR-09.3 | Step 4 is a guided demo: creates a sample job with stock photos, runs through checklist, generates AI report, shows the finished PDF — all pre-populated, no user input required |
| FR-09.4 | User sees a real finished PDF output before completing onboarding |
| FR-09.5 | Onboarding can be skipped but is strongly prompted on first session if skipped |
| FR-09.6 | In-app coach marks appear for first real job (camera, checklist, generate button) |

---

## Non-Functional Requirements

### Performance

| Requirement | Target |
|-------------|--------|
| App cold start (mid-range Android, 3yo) | < 2 seconds (p95) |
| Job list load (up to 1,000 jobs, local) | < 500ms (p95) |
| Photo capture to in-job display | < 300ms (local write, no network) |
| AI narrative generation (per item) | < 8 seconds (p95, requires network) |
| PDF generation (full report) | < 10 seconds (p95, requires network) |
| Photo sync after connectivity restore | < 60 seconds for up to 50 queued photos |
| Report link delivery (email) | < 30 seconds from user tap |

### Reliability & Offline

| Requirement | Target |
|-------------|--------|
| Crash-free sessions | > 99.5% |
| Data loss from offline sync failure | Zero tolerance — must be zero |
| Offline duration supported | Minimum 7 days without connectivity loss |
| Sync conflict handling | Last-write-wins with user notification of conflict |
| Uptime (server-side services: AI, PDF, sync) | > 99.5% monthly |

### Security

| Requirement | Approach |
|-------------|----------|
| Authentication | Email/password (bcrypt hashing, min 8 char) + Google/Apple SSO |
| Session management | JWT with 30-day refresh token; revocable from account settings |
| Data in transit | TLS 1.3 minimum for all API calls and photo uploads |
| Data at rest | AES-256 encryption for cloud storage (Firebase / S3) |
| Report link access | Expiring tokens (7-day default); no persistent public URLs |
| PII handling | Client names and addresses stored only in user's account; not shared or used for training |
| API keys | All AI provider keys server-side only; never exposed to client |

### Scalability

| Requirement | Target |
|-------------|--------|
| Concurrent users | Support 10,000 concurrent active users without degradation |
| Storage per user | No hard limit; soft alert at 10GB; archiving tools provided |
| Photo storage | CDN-backed; global edge delivery for report viewing |
| AI cost management | Batch narrative generation during off-peak hours if queue > 100 items; per-item generation for interactive use |

### Accessibility

| Requirement | Target |
|-------------|--------|
| Text size | Respects system font size settings (iOS Dynamic Type, Android text scaling) |
| Color contrast | WCAG AA minimum for all text elements |
| Screen reader | Critical paths (job creation, checklist, report send) navigable with VoiceOver / TalkBack |
| Touch targets | Minimum 44x44pt per Apple HIG and Android guidelines |

### Localization

- MVP: English only
- Phase 2: Spanish (large Hispanic-owned pest control and HVAC contractor segment in US)
- Date and address formatting adapts to device locale settings

### Data Portability

- User can export full data archive (all jobs, photos, and reports as ZIP + CSV) from account settings
- Export available within 24 hours of request
- Data deletion request processed within 30 days (CCPA / GDPR compliant)

---

## Appendix: Pricing Summary

| Plan | Price | Limits | Notes |
|------|-------|--------|-------|
| Free Trial | $0 | 14 days, 3 jobs | No credit card; full features |
| Individual (Monthly) | $49/month | 1 user, unlimited jobs | Core audience |
| Individual (Annual) | $39/month ($468/yr) | 1 user, unlimited jobs | 20% discount |
| AppSumo LTD | $79 one-time | 1 user, lifetime, unlimited jobs | Capped at 500 sales |
| Team (Phase 2) | $149/month | Up to 5 users, unlimited jobs | Shared library, oversight dashboard |

---

*PRD complete. Next step: Architecture design → Epics & Stories → Sprint Planning → AutoMVP implementation.*
