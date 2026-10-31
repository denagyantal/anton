---
stepsCompleted: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
inputDocuments:
  - ideas/shortlisted/post-job-documentation-trades.md
  - _bmad-output/planning-artifacts/product-brief-post-job-documentation-trades.md
workflowType: prd
project_name: post-job-documentation-trades
product_name: JobDoc
lastStep: 12
date: 2026-10-31
author: Root
---

# Product Requirements Document — JobDoc

**Author:** Root
**Date:** 2026-10-31
**Project:** post-job-documentation-trades
**Product:** JobDoc — Post-Job Documentation Tool for Trade Contractors

---

## Executive Summary

JobDoc is a mobile-first, voice-and-photo-driven post-job completion report tool for trade contractors, starting with HVAC technicians. Field techs speak what they did, snap before/after photos, and receive a professional, warranty-ready PDF before they leave the customer's driveway — in under 3 minutes.

**Core value proposition:** The average HVAC technician spends 22 minutes per job on post-job documentation — 275 hours per year, the equivalent of 7 full work weeks. JobDoc collapses this to a 3-minute on-site workflow that produces a branded PDF: parts installed with part numbers, work performed, warranty statement, before/after photos, and next service recommendation. The customer receives it before the truck leaves.

**Market validation:** CompanyCam (25,000+ contractor users, $79–$299/month) proves photo documentation willingness to pay. Feldy (YC W26, 200+ paying customers) and SMASH Voice to Invoice prove voice capture willingness to pay for field-first tools. Neither addresses post-job documentation: Feldy and SMASH focus on pre-job estimating ("describe the job, get a quote"); CompanyCam captures photos but generates no structured report. The post-job documentation category — voice + photos → warranty-ready PDF report — is unoccupied.

**Product differentiator:** Post-job, not pre-job. Feldy and SMASH own the "field capture → estimate" workflow. JobDoc owns the "field capture → completion proof" workflow. Different use case, different buyer decision moment, different product. The HVAC-specific parts library (150+ components: capacitors, motors, refrigerant types, contactors) creates a moat that horizontal FSMs will not invest in building for the solo-tech sub-segment.

**Revenue target:** 50 paying customers at Month 1; $19K MRR at Month 12.
**Build target:** 3–5 week MVP, HVAC vertical only.

---

## Project Classification

- **Type:** Greenfield mobile-first SaaS, B2SMB (solo operator and small shop)
- **Domain:** Field service software / trade contractor tooling / documentation automation
- **Complexity:** Medium — offline-first mobile architecture, AI voice transcription, PDF generation, multi-tenant SaaS
- **Context:** Solo HVAC technicians and small shops (2–5 techs) in the residential trades; secondary expansion to roofing, plumbing
- **Primary platform:** iOS and Android mobile app; web dashboard deferred to Phase 2
- **GTM model:** Community seeding (r/HVAC, r/ProHVACR, Facebook HVAC Business Owners) → AppSumo LTD launch ($59 solo / $99 up to 3 techs) → CompanyCam frustration channel → SEO

---

## Success Criteria

### User Success

| Metric | Target | Measurement Method |
|--------|--------|--------------------|
| Time to first report (onboarding) | < 5 minutes from account creation | In-app event: account_created → first_pdf_generated |
| Report generation time per job | < 3 minutes (voice + photos → PDF) | Job timer: voice_capture_start → report_sent |
| Same-day report delivery rate | > 90% of jobs | Job completion timestamp vs. report sent timestamp |
| AI-structured summary acceptance rate | > 65% published without manual edit | Track: generate → publish with no text edit |
| Job history search utilization | > 40% of users perform a history search within 30 days | Feature event: job_search_executed |
| Net Promoter Score | > 55 (FSM software avg ~35) | Monthly in-app NPS survey |
| Crash-free sessions | > 99.5% | Crash reporting (Sentry or equivalent) |
| Offline reliability | Zero reports of job data loss due to sync failure in first 60 days | Support ticket monitoring + sync error event tracking |

**Primary user success indicator:** Report delivery velocity — are techs sending reports to customers the same day, from the field? If yes, the core value proposition is working. If no, voice capture friction or PDF quality is the failure mode to diagnose.

**Aha! moment:** First time a customer replies "Wow, this is really professional, I've never gotten anything like this from an HVAC company before" — while the tech is still in the driveway. Secondary aha!: first warranty dispute the tech closes in 2 minutes by sending a JobDoc report with the exact part installed, the date, and a photo.

### Business Success

**Month 1 targets:**
- 50 paying customers (solo plan primarily)
- MRR: ~$950
- 10 documented "first report sent from driveway" stories
- 3 techs willing to provide testimonials for AppSumo launch

**Month 3 targets (AppSumo Launch):**
- AppSumo LTD launch: 300–500 LTD purchases ($59 solo / $99 up-to-3-techs)
- 150+ active MRR subscribers
- MRR: ~$2,850 (excluding LTD revenue)
- 1 documented "avoided a warranty dispute" case study
- PMF signal: > 70% of trial users send at least 3 reports in first 14 days

**Month 6 targets:**
- 500+ active paying subscribers
- MRR: ~$9,500
- Roofing vertical launched (insurance documentation variant)
- G2/Capterra: 25+ reviews, 4.5+ average
- 5+ documented CompanyCam migration case studies

**Month 12 targets:**
- 1,000+ active paying subscribers
- MRR: ~$19,000
- Plumbing vertical launched
- Company plan (up-to-5-techs) represents > 30% of MRR
- AppSumo featured deal (second campaign) or equivalent distribution event

### Technical Success

- Voice transcription accuracy: > 95% of voice captures produce a usable structured summary (no manual correction of AI structure; phrasing edits acceptable)
- PDF generation success rate: > 99.5% (no failed PDF generation events in the field)
- Offline reliability: zero job data loss from sync failure events in the first 60 days
- App store rating: > 4.5 stars on both iOS and Android within 90 days of launch
- Support tickets per 100 active users: < 5/month

### Measurable Outcomes

- **Free-to-paid conversion:** > 25% of free trial completers convert within 14 days of completing their first report
- **Monthly churn rate:** < 4% (FSM software benchmark ~5%)
- **DAU/MAU ratio:** > 40% (techs use it on every job day)
- **Streak metric:** > 70% of paying users document at least 1 job per week at 60 days
- **Annual plan conversion:** > 25% of monthly subscribers on annual plan by Month 6
- **ARPU:** ~$22/month blended (solo $19/mo + company plan pull-up to $39/mo)

---

## Product Scope

### MVP — Minimum Viable Product (3–5 week build, HVAC vertical only)

The MVP delivers the full core loop for HVAC technicians. One trade, one report type, complete end-to-end workflow.

**Must-have capabilities:**
- Job creation with customer name, site address, job type, equipment identifier
- One-tap voice capture → Whisper API transcription → AI-structured summary (Problem Found / Work Performed / Parts Installed)
- In-app camera capture for before/after photos per job
- HVAC-specific parts library: 150+ components (capacitors, motors, refrigerant types, contactors, filters, thermostats)
- One-tap PDF report generation: job summary, parts installed, photos, warranty statement, next service recommendation, company branding
- Send from the driveway: email, SMS, or shareable link
- Job history: searchable by customer name, address, date, equipment
- Company branding: logo, name, license number, accent color, configurable warranty language
- Offline-first architecture: full functionality with zero cell signal; auto-sync on reconnect

**MVP success gate (Day 45 go/no-go):**
1. ≥ 50 paying users documenting ≥ 5 jobs; average time job completion → customer delivery < 5 minutes
2. ≥ 65% of voice captures produce usable AI-structured summary without structural correction
3. Zero job data loss from offline sync failure in first 60 days
4. ≥ 25% of free trial completers convert to paid within 14 days of first report
5. ≥ 70% of paying users document at least one job per week in first 60 days
6. ≥ 3 documented cases of a customer using a JobDoc report for warranty claim / dispute resolution

**AppSumo launch gate (before committing to campaign):**
- Minimum 50 paying MRR customers with at least 3 testimonials ("most professional documentation I've sent a customer") before committing to AppSumo campaign launch

### Growth Features (Phase 2, Months 4–8)

- **Roofing vertical:** Storm damage documentation mode, insurance adjuster–ready report template, roofing materials library (shingle brand/type, underlayment, flashing), damage taxonomy per photo
- **Company plan ($39/month, up to 5 techs):** Shared job library, team lead oversight dashboard, documentation consistency enforcement, consolidated weekly/monthly reporting
- **Service agreement tracking:** "Next service recommendation" in every report tracked in JobDoc; reminder automation to customer 2 weeks before due date; service agreement creation and renewal from within the app
- **CompanyCam migration flow:** Import CompanyCam photos via share sheet; structured migration guide targeting users frustrated by price increase

### Vision (Phase 3–4, Months 9–18+)

- Plumbing vertical: fixture/pipe material library, backflow test documentation, maintenance documentation
- QuickBooks/Stripe integration: JobDoc job record → auto-draft invoice with parts pre-populated
- Google review automation: 24-hour post-delivery review request with outcome branching
- EPA refrigerant compliance log (EPA 608): structured refrigerant log per unit, tech certification verification, disposal documentation
- Jobber / Housecall Pro marketplace integration: JobDoc as premium "documentation layer" add-on
- Electrical vertical: panel documentation, permit photo log, NEC compliance notes
- White-label for HVAC distributors (Ferguson, Watsco, regional distributors)
- International expansion: UK, AU, NZ (markets where ServiceM8 has validated field service SaaS appetite)

---

## User Journeys

### Journey 1: Mike — Solo HVAC Tech, First Report (Primary User, Happy Path)

Mike is 41, self-employed HVAC tech in suburban Texas. He runs 4–7 service calls per day in summer, 2–4 in winter. He charges $89–$150 for service calls. Today he downloaded JobDoc after seeing a thread on r/HVAC — "what are you guys using to send professional documentation to customers?"

**Opening scene:** Mike pulls up to a home with a failed capacitor on the outdoor unit. It's July, 96°F. The homeowner is waiting inside. Mike opens JobDoc on his iPhone, taps "New Job," speaks the customer's name and address, selects "Service Call" from a dropdown, and drives in. 45 seconds, one hand.

**On-site capture:** After replacing the capacitor, Mike taps "Voice Capture." He speaks for 90 seconds: "Found a failed 35/5 MFD dual-run capacitor on the Carrier condenser, part number CAP-35/5-440-ROUND. Replaced with new OEM-equivalent. Tested startup — amp draw normal, pressures good. Unit cooling within specs." He takes 2 before photos and 2 after photos in the app. He selects the capacitor from the HVAC parts library, confirms the part number, sets quantity to 1. Total time on-site documentation: 3 minutes.

**Climax:** Back in the truck. Mike taps "Generate Report." He sees the AI summary: Problem Found — failed dual-run capacitor; Work Performed — replaced with OEM-equivalent, tested startup; Parts Installed — 35/5 MFD dual-run capacitor (×1). His before/after photos appear in a grid. The warranty statement reads: "All parts and labor covered for 90 days from date of service." Next service recommendation: "Schedule HVAC annual maintenance tune-up by July 2027." His company name and license number appear in the header. He taps "Send to Customer" → email.

**Resolution:** The homeowner receives a branded PDF 4 minutes after Mike finished the job. She texts back: "Wow, this is the most professional thing any HVAC company has ever sent me. I'm definitely booking the annual tune-up." Mike drives away knowing he has a permanent record of the job. If she calls in 2 years saying "the wrong part was installed," he can produce the PDF with the part number, date, and photo in 10 seconds.

**Journey requirements revealed:** Job creation, voice capture with AI structuring, parts library selection, photo before/after, one-tap PDF generation, email delivery, branded report format, job storage.

---

### Journey 2: Mike — Offline Job, Cell Dead Zone (Primary User, Edge Case)

Two weeks later, Mike is servicing a rural property with zero cell signal. He opens JobDoc and gets a "No connection" indicator — but the app functions normally. He creates the job, captures voice, takes photos, selects parts from the local cache of the HVAC library. He taps "Generate Report" — the app generates the PDF from the local record and stores it. The "Send" button shows "Will send when connected."

Twenty minutes later, pulling onto the highway, he sees the job sync indicator turn green. The report sends automatically. The customer receives it before Mike gets home.

**What could go wrong:** If the app lost his 3-minute voice capture due to a sync error, Mike would never use it again. The offline-first architecture is a hard reliability requirement, not a nice-to-have.

**Journey requirements revealed:** Full offline job creation, voice capture local storage, offline PDF generation, background sync queue, zero-loss guarantee.

---

### Journey 3: Sandra — Small Shop Owner, Consistency Control (Secondary User, Manager)

Sandra is 48, runs a 4-person HVAC company in the Carolinas. She uses Jobber for scheduling. Her problem is that each tech documents differently — or not at all. She signs up for the Company plan at $39/month after seeing one of her techs use the solo plan.

She adds her three techs to the company account. She uploads the company logo and sets the warranty language to match their service agreement terms. She sets a required-fields policy: every job must have at least 2 photos and a voice capture before a report can be generated. She runs a manufacturer warranty claim the following week by pulling up the job record, finding the Bradford White water heater serial number her tech logged, and attaching the PDF to the claim. The manufacturer accepts it on first submission.

**Journey requirements revealed:** Multi-user company account, admin configuration of branding and required fields, team job visibility, job search by equipment type/serial number, role-based access (tech vs. admin).

*Note: Multi-user company account is Phase 2. Solo plan is MVP.*

---

### Journey 4: Carlos — Roofing Contractor, CompanyCam Migrator (Secondary User, Phase 2)

Carlos is 36, runs a 3-person roofing crew in Florida. He currently uses CompanyCam at $149/month. In October 2026, CompanyCam raises prices again. He searches "CompanyCam alternative" and finds a JobDoc blog post titled "Why 300 roofers left CompanyCam for JobDoc."

He signs up for a free trial, creates a job, captures storm damage photos with damage-type tags, speaks a voice description of the scope, and generates an insurance adjuster–ready PDF with material spec, damage narrative, and repair scope in 8 minutes. His previous workflow (CompanyCam photos + manual Google Docs writeup) took 45–60 minutes per claim. He converts to the solo plan and cancels CompanyCam.

**Journey requirements revealed:** Roofing vertical (Phase 2), damage-type photo tagging, insurance adjuster PDF format, CompanyCam comparison SEO/content, migration flow.

---

### Journey 5: Homeowner — Report Recipient (Non-User, Trust Builder)

Janet is 55, owns a home in Phoenix. She's had 3 different HVAC companies service her unit in 4 years. She's never received documentation beyond a handwritten receipt.

Mike's JobDoc report arrives on her phone 5 minutes after he leaves. She opens the PDF: company logo, his license number, before/after photos of the corroded capacitor and new replacement, the part number, 90-day warranty language, and a recommendation to schedule an annual tune-up before next summer. She saves the PDF to her Google Drive folder called "Home Records." Six months later her neighbor asks for an HVAC recommendation and she texts them Mike's company card from the report footer.

**Journey requirements revealed:** Clean mobile-readable PDF, no app required for customer, re-shareable link, branded footer with contact info, professional formatting that builds trust and drives referrals.

### Journey Requirements Summary

| Journey | Key Capabilities Required |
|---------|--------------------------|
| Mike – happy path | Job creation, voice capture + AI structure, HVAC parts library, before/after photos, one-tap PDF, email delivery, company branding |
| Mike – offline | Offline-first storage, local PDF generation, background sync queue, zero-loss guarantee |
| Sandra – team admin | Multi-user account, admin branding config, required-fields policy, cross-tech job search (Phase 2) |
| Carlos – migrator | Roofing vertical, damage-type tagging, insurance PDF format (Phase 2) |
| Janet – recipient | Mobile-readable PDF, no customer app required, branded footer, re-shareable link |

---

## Innovation & Novel Patterns

### Detected Innovation Areas

**Category creation, not category entry:** JobDoc does not compete with Feldy, SMASH Voice to Invoice, or CompanyCam — it creates a category those products structurally cannot occupy. Feldy/SMASH own "voice capture → estimate (before the job)." CompanyCam owns "photo storage (during the job)." JobDoc owns "voice + photo → completion proof (after the job)." This is a three-way category gap, not a feature gap.

**Trade-specific AI structuring over generic transcription:** Generic voice-to-text (Whisper raw transcript) is a commodity. JobDoc's differentiation is the AI prompt layer that structures HVAC domain transcripts into three specific fields — Problem Found, Work Performed, Parts Installed — with 95%+ accuracy on trade-specific language ("found a failed 35/5 MFD dual-run cap on the Carrier condenser"). No competitor has built this prompt layer for the HVAC domain.

**Parts library as moat:** The 150+ HVAC component taxonomy (capacitors by MFD/voltage, motors by type, refrigerant codes, filter models) is a knowledge asset that takes domain expertise to build and maintain. Generic FSMs (Jobber, Housecall Pro) will not invest this specificity for a solo-tech sub-segment. This library creates the "this understands my trade" reaction that drives word-of-mouth in tight trade communities.

### Market Context

The validation chain is tight: CompanyCam proves photo documentation willingness-to-pay at $79–$299/month. Feldy proves voice capture willingness-to-pay at field-first tools. The solo-tech documentation market at $19/month is unoccupied. The "warranty-ready job report from your phone" is demonstrable in 60 seconds — the AppSumo audience can see the output before they buy.

The Spectora parallel is directly applicable: Spectora applied niche-down to home inspection software ($90M majority stake at $27–30M ARR). JobDoc applies the same formula to trade documentation — start HVAC, expand to roofing, plumbing, electrical.

### Validation Approach

- **Week 1–2:** Post in r/HVAC and r/ProHVACR: "I built a tool that sends a warranty-ready PDF to your customer in 3 minutes — who wants early access?" Target 20 beta users.
- **Week 3–4:** 10 recorded demo calls with HVAC techs — watch them use the voice capture on a real job.
- **Month 1 signal:** ≥ 50 paying customers who sent ≥ 3 reports is the PMF signal gate.
- **Conversion signal:** ≥ 25% free-trial-to-paid within 14 days of first report.

### Risk Mitigation

**Risk 1: Feldy/SMASH expand to post-job documentation** — 6–12 month window before either reaches post-job as a product priority. JobDoc needs 200+ paying customers and community presence before they get there.

**Risk 2: Voice transcription quality below threshold** — If AI-structured summary acceptance rate falls below 65%, iterate on Whisper prompting and AI structuring before expanding verticals. Fallback: typed entry ensures zero blocking failures.

**Risk 3: Offline sync failure leads to data loss** — Hard requirement: test under real zero-connectivity conditions (rural service areas, concrete-wall basements) before launch. No data loss event is acceptable in month 1.

---

## Mobile App Specific Requirements

### Platform Requirements

- **iOS:** Minimum iOS 16.0 (covers 97%+ of active iPhone fleet in 2026)
- **Android:** Minimum Android 11 (covers 85%+ of active Android fleet in 2026)
- **Primary device:** iPhone 12 and newer (primary HVAC tech device based on demographic research); Android secondary
- **Screen sizes:** Optimized for 6.1"–6.7" standard sizes; tablet not required for MVP

### Offline Architecture

JobDoc must function as a fully offline-first application. All core user-facing actions must work with zero network connectivity:
- Job creation and editing
- Voice capture (local recording; transcription queued for sync)
- Photo capture (stored locally; synced on reconnect)
- Parts library selection (full library cached on device)
- PDF report generation (generated locally from cached data)
- Report delivery queued and auto-sent on reconnect

Network is required only for: initial account setup, company logo upload, PDF delivery to customer (auto-queued), job record cloud sync.

### Device Permissions Required

- **Microphone:** Voice capture (required — prompt on first use with explanation)
- **Camera:** Photo capture (required)
- **Photo Library:** Import from camera roll (optional, user-initiated)
- **Location:** Site address autofill via GPS (optional, graceful fallback to manual entry)
- **Notifications:** Background sync completion, report delivery confirmation (optional)

### App Architecture Considerations

- **Local-first data model:** All job data created and stored locally first; cloud is a secondary sync target
- **Voice pipeline:** Record locally → queue transcription → Whisper API call on connectivity → AI structuring prompt → structured fields returned and stored
- **PDF generation:** Template-based, generated on-device using local job record; no server-side rendering required for core PDF
- **Photo handling:** Compressed locally (max 2MB per photo for PDF embedding); originals retained in full resolution
- **Background sync:** Job records, photos, and generated PDFs sync in background after connectivity restored

### Implementation Considerations

- **React Native** (recommended): Single codebase for iOS and Android; strong ecosystem for offline-first data (WatermelonDB or similar); Expo for development speed
- **PDF generation:** React Native PDF or similar on-device library; template-based approach
- **Voice transcription:** On-device recording → Whisper API (cloud); fallback to text entry if API unavailable
- **AI structuring:** GPT-4o prompt with HVAC-domain-specific system prompt for Problem Found / Work Performed / Parts Installed structure
- **State management:** Local-first with optimistic updates; no server round-trips for job creation

---

## Project Scoping & Phased Development

### MVP Strategy & Philosophy

**MVP Approach:** Problem-solving MVP — the minimum product that solves the core problem end-to-end for one user in one trade in one scenario. The measure of MVP success is not feature count but job completion rate: do 50 paying users complete a job record and send a report to a customer the same day?

**MVP scope discipline:** HVAC only. Solo tech only (no multi-user). No integrations. No web app. No compliance logging. The architecture supports all of these; they are not built in MVP. Every deferred feature is explicitly listed below.

**Resource requirements:** 1–2 developers (mobile + backend), 3–5 weeks, Whisper API + GPT-4o for AI components.

### MVP Feature Set (Phase 1)

**Core User Journeys Supported:**
- Mike (solo HVAC tech) — happy path
- Mike (solo HVAC tech) — offline job in dead zone

**Must-Have Capabilities:**
- Job creation (customer name, site address via Google Places, job type, optional equipment ID)
- Voice capture → Whisper transcription → GPT-4o structuring → editable Problem Found / Work Performed / Parts Installed fields
- In-app camera with before/after category tagging; optional voice captions
- Camera roll import (for techs who took photos before opening the app)
- HVAC parts library: 150+ components with name, part number, category
- Parts search + select; manual entry for unlisted parts; personal quick-access list
- One-tap PDF report generation with full report structure
- Report preview and inline section editing before send
- Email, SMS, and shareable link delivery from the field
- Company branding setup: logo, name, phone, email, license number, accent color, warranty language
- Configurable next service recommendation with suggested date
- Searchable job history (customer name, address, date)
- Full offline-first operation with background sync

**Explicitly deferred from MVP:**
- Roofing, plumbing, electrical verticals
- Multi-user company accounts and admin dashboard
- Service agreement tracking and upsell automation
- QuickBooks / invoicing integration
- Jobber / Housecall Pro / ServiceTitan integration
- Client-facing customer portal
- Google review request automation
- Scheduling / dispatch / calendar
- Web dashboard (desktop)
- EPA 608 refrigerant compliance logging
- Computer vision parts identification
- White-label / reseller mode
- Zapier / API integrations
- Batch export of job history to third-party systems

### Post-MVP Features

**Phase 2 (Months 4–8):**
- Roofing vertical (storm damage documentation, insurance adjuster PDF format)
- Company plan ($39/month, up to 5 techs, shared job library, admin oversight)
- Service agreement upsell tracking and reminder automation
- CompanyCam migration flow and content

**Phase 3 (Months 9–12):**
- Plumbing vertical (fixture library, backflow test documentation)
- QuickBooks/Stripe integration (job record → draft invoice)
- Google review automation post-report delivery
- Web dashboard (admin and reporting)

**Phase 4 (Months 12–18+):**
- EPA 608 refrigerant compliance log
- Electrical vertical
- Jobber / Housecall Pro marketplace integration
- White-label for HVAC distributors
- International expansion (UK, AU, NZ)

### Risk Mitigation Strategy

**Technical Risks:**
- Offline-first architecture: mitigated by using proven local-first libraries (WatermelonDB) and testing in zero-connectivity environments before launch
- Voice transcription quality: mitigated by HVAC-domain-specific Whisper prompting and AI structuring; typed-entry fallback ensures no blocking failure mode
- PDF generation on-device: mitigated by template approach with known field set; test on minimum-spec Android devices

**Market Risks:**
- Feldy/SMASH expand to post-job: mitigated by moving fast to 200+ paying customers and building community presence before they get there; parts library moat deepens over time
- "HVAC techs won't change their workflow": mitigated by sub-5-minute onboarding with sample report generation before any real commitment; the output sells itself

**Resource Risks:**
- 1-developer team: offline-first architecture is achievable with React Native + WatermelonDB; PDF generation on-device removes server dependency
- API cost scaling: Whisper + GPT-4o costs estimated at < $0.05 per job; at $19/month revenue per user, economics are strongly positive from day 1

---

## Functional Requirements

### Job Management

- FR1: A technician can create a new job record with customer name, site address, job type (service call / repair / installation), and optional equipment identifier
- FR2: A technician can view a list of all their jobs with status (In Progress / Report Sent / Draft) and sorted by most recent
- FR3: A technician can search job history by customer name, site address, date range, and equipment type
- FR4: A technician can access any past job record and re-send the report to the customer
- FR5: A technician can create and complete job records with no network connectivity (offline-first)
- FR6: Job records created offline automatically sync to cloud storage when connectivity is restored
- FR7: A technician can export a service history report for a specific address as a consolidated PDF

### Voice Capture & AI Structuring

- FR8: A technician can initiate a voice capture session for a job with a single tap
- FR9: The system transcribes voice recordings using a speech-to-text service
- FR10: The system structures voice transcripts into three named fields: Problem Found, Work Performed, and Parts Installed
- FR11: A technician can review and edit each AI-structured field independently before finalizing
- FR12: A technician can re-dictate any individual field without redoing the entire voice capture
- FR13: A technician can use typed text entry as a fallback if voice capture is not preferred
- FR14: Voice recordings are stored locally and transcription is queued for processing when connectivity is unavailable

### Photo Documentation

- FR15: A technician can capture photos directly within the app using the device camera
- FR16: A technician can tag each photo as "Before" or "After" with a single tap
- FR17: A technician can add a voice caption to any photo, which is auto-transcribed as the photo description in the report
- FR18: A technician can import photos from the device camera roll into a job record
- FR19: Photos are stored locally on the device and synced to cloud storage on reconnect
- FR20: Photos are automatically organized and associated with the job record, not the device camera roll

### HVAC Parts Library

- FR21: A technician can search and select parts from a pre-loaded HVAC component library (minimum 150 components)
- FR22: Parts selected from the library auto-populate the Parts Installed section with component name, part number, and quantity
- FR23: A technician can add parts not in the library via manual entry (component name, part number, quantity)
- FR24: A technician can save frequently used parts to a personal quick-access list for one-tap selection
- FR25: The parts library is fully available offline (cached on device)
- FR26: Parts categories include at minimum: capacitors (by MFD and voltage), contactors, motors (condenser fan, blower), filters (by size), refrigerant types, thermostats, drain pans, compressors, ignitors, and flame sensors

### Report Generation

- FR27: A technician can generate a complete PDF report from a job record with a single tap
- FR28: The generated PDF report includes: cover page with company branding, job summary (Problem Found, Work Performed from AI structuring), Parts Installed table (name, part number, quantity), before/after photo grid with captions, warranty statement, next service recommendation with suggested date, and technician name
- FR29: A technician can preview the generated report before sending
- FR30: A technician can edit any section of the report inline before sending without regenerating the full report
- FR31: The PDF report is generated on-device and does not require network connectivity
- FR32: The system generates a PDF successfully for at least 99.5% of job records

### Report Delivery

- FR33: A technician can send a completed report to the customer via email from the field
- FR34: A technician can send a completed report to the customer via SMS from the field
- FR35: A technician can generate a shareable link to the report PDF with a configurable expiry (default: 7 days)
- FR36: The customer can view and download the report PDF without installing any application
- FR37: Report delivery is queued when offline and auto-sent when connectivity is restored
- FR38: A technician receives a confirmation notification when a report has been successfully delivered to the customer

### Company Branding & Configuration

- FR39: A technician (account owner) can upload a company logo that appears on all generated reports
- FR40: An account owner can configure company name, phone number, email address, and license number that auto-populate all report headers
- FR41: An account owner can select a single accent color for report header styling
- FR42: An account owner can customize the default warranty language that appears in all reports (default provided; editable once and saved)
- FR43: An account owner can configure the default next service recommendation text and offset period (default: 12 months from job date)

### Account & Subscription Management

- FR44: A user can create an account and access a free trial that includes at least one complete job record and report generation
- FR45: A user can subscribe to the Solo plan ($19/month) or purchase the Solo LTD ($59 one-time)
- FR46: A user can view their current subscription status and manage billing from within the app or a linked web page
- FR47: A user can invite additional technicians to a Company plan (Phase 2)

---

## Non-Functional Requirements

### Performance

- Voice transcription response time: < 10 seconds for a 2-minute voice recording on standard connectivity (LTE or Wi-Fi)
- PDF generation time: < 30 seconds on device (iPhone 12 or equivalent Android)
- Job list load time: < 1 second for up to 500 stored jobs
- App launch time: < 2 seconds to interactive state (cold start)
- Photo sync: all photos from a completed job sync within 60 seconds of connectivity restoration

**Rationale:** The "driveway-fast" promise requires that voice transcription and PDF generation complete before the tech leaves the property. 3-minute total job documentation time is the stated product goal; transcription and generation must not be the bottleneck.

### Reliability

- Offline data integrity: zero tolerance for job record loss due to sync failure; all writes are local-first with conflict resolution on sync
- PDF generation success rate: > 99.5% of generation attempts succeed (no silent failures)
- App crash rate: < 0.5% of sessions (< 1 crash per 200 sessions)
- Cloud sync success rate: > 99.9% of completed job records sync within 5 minutes of connectivity restoration
- Report delivery success rate: > 99% of queued reports delivered within 5 minutes of connectivity restoration

**Rationale:** A field tech whose voice capture or photo is lost on a real job will never use the product again. Reliability is the hard floor, not a quality-of-life concern.

### Security

- All data at rest encrypted on device (iOS Secure Enclave / Android Keystore standard)
- All API traffic encrypted in transit (TLS 1.3 minimum)
- Job records and photos stored in tenant-isolated cloud storage (no cross-customer data access)
- Customer contact information (name, address, email, phone) not shared or resold
- Shareable report links expire after configurable period (default 7 days); no persistent public URLs for customer reports
- Account authentication: email + password minimum; OAuth (Sign in with Apple / Google) recommended for MVP

### Scalability

- Architecture supports 10,000+ concurrent active users without re-architecture
- Cloud storage designed for 1M+ photos with < 50ms retrieval at P95
- PDF generation throughput: handle 10,000+ report generations per day without performance degradation
- Horizontal scaling of transcription and AI structuring services: auto-scale on job submission volume

**Rationale:** The AppSumo launch model can generate 300–500 customers in 48 hours. The infrastructure must handle a 10× daily usage spike without preparation.

### Integration

- **Whisper API (OpenAI):** Voice transcription; API key management with rate limiting and retry logic; fallback to on-device silence detection and typed-entry prompt if API unavailable
- **GPT-4o (OpenAI):** AI structuring of HVAC transcripts; system prompt pinned to HVAC domain; fallback to raw transcript display if AI structuring fails
- **Google Places API:** Address autocomplete for job site entry; graceful degradation to manual entry if API unavailable
- **Email delivery:** Transactional email service (SendGrid, Postmark, or equivalent); PDF as attachment or link
- **SMS delivery:** Twilio or equivalent; PDF as shareable link (not attachment)
- **Push notifications:** iOS APNs and Android FCM for sync confirmation and report delivery confirmation
- **Payment processing:** Stripe for subscription management and LTD one-time purchase

---

*PRD complete. Next steps: architecture → epics & stories → AutoMVP implementation.*
