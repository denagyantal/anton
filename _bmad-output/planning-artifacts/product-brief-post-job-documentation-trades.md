---
stepsCompleted: [1, 2, 3, 4, 5]
inputDocuments:
  - ideas/shortlisted/post-job-documentation-trades.md
  - _bmad-output/planning-artifacts/market-research-post-job-documentation-trades.md
workflowType: product-brief
lastStep: 5
project_name: post-job-documentation-trades
product_name: JobDoc
research_type: product-brief
date: 2026-10-31
author: Root
---

# Product Brief: JobDoc — Post-Job Documentation Tool for Trades

---

## Executive Summary

JobDoc is a mobile-first, voice-and-photo-driven job completion report tool for trade contractors — starting with HVAC technicians. Field techs speak what they did, snap before/after photos, and receive a professional warranty-ready PDF before they leave the customer's driveway. The report includes parts installed with part numbers, work performed, warranty statement, and next service recommendation — sent to the customer in under 3 minutes.

The competitive white space is validated and explicit: Feldy (YC W26, 200+ paying customers) and SMASH Voice to Invoice address pre-job estimation — "describe the job, get a quote." CompanyCam (25,000+ contractor users, $79–299/month) handles photo documentation but generates no report. No affordable product converts on-site voice and photo capture into a post-job completion report. JobDoc owns that gap.

The market is large and underserved: 505,000+ US trade contractors (HVAC, plumbing, roofing) complete millions of service calls per year. The solo-tech segment ($19–29/month price point) is occupied by no direct competitor in post-job documentation. CompanyCam has moved upmarket ($79+ minimum) and Jobber/Housecall Pro start at $69–349/month, leaving a clear pricing gap. The $59–99 AppSumo LTD tier ("warranty-ready job report from your phone") is demonstrable in 60 seconds and matches the audience's price sensitivity precisely.

**Target market entry:** HVAC vertical (125,652 US establishments)
**Revenue target:** 50 paying customers at Month 1; $19K MRR at Month 12
**GTM strategy:** r/HVAC and HVAC Business Owners FB group → AppSumo LTD → CompanyCam frustration channels → SEO
**Build timeline:** 3–5 week MVP

---

## Core Vision

### Problem Statement

Field technicians — HVAC techs, roofers, plumbers, electricians — generate enormous amounts of information on every job (equipment state, scope of work, parts installed, photos, warranty data) but capture it inefficiently: handwritten notes, phone texts to the office, or memory. The post-job documentation workflow is broken at every point:

1. Tech finishes the job, takes a few phone photos
2. Office admin calls to ask what happened
3. Handwritten invoice gets typed up (maybe the next day)
4. Customer gets a paper receipt with no documentation of what was done
5. Three months later: customer dispute about what was covered; photos are scattered across 3 devices

The core gap: no affordable tool generates a **professional, warranty-ready completion report** from field voice and photo capture. Tools like Feldy and SMASH target **pre-job estimating** — "tell me what you need done, I'll generate a quote." Nobody has built the **post-job** version: "here's what we did, here's what we installed, here's your warranty, here's when your next service is due."

### Problem Impact

- **Time drain:** The average field technician spends 22 minutes per job on documentation — 275 hours per year, the equivalent of 7 full work weeks. At a $65/hour billable equivalent, that's $17,875 in lost productive time per tech per year.
- **Warranty disputes:** Approximately 15–25% of denied HVAC warranty claims trace to inadequate documentation — missing part numbers, installation dates, or proof of scope. Each denied claim costs the contractor $400–$1,200 in re-work, parts replacement, or lost customer trust.
- **"Repair amnesia":** Technicians and customers regularly cannot answer "what did you do here 2 years ago?" Phone photos are scattered, handwritten notes are gone, and even digital invoices lack the detail needed to answer warranty questions. This is a documented recurring pain across r/HVAC, r/Roofing, and r/Plumbing.
- **Professional image gap:** When a customer receives a professional branded PDF from a competitor's tech and a paper receipt from the solo operator, the perception gap is immediate and lasting — it directly affects repeat bookings, referrals, and service agreement renewals.
- **Missed upsell trigger:** Every job completion is an upsell moment. "Your next annual HVAC tune-up is due before winter" embedded in a report the customer receives from the driveway converts to service agreements. Currently this is a missed revenue opportunity on every job.

### Why Existing Solutions Fall Short

| Solution | Core Gap |
|----------|----------|
| **ServiceTitan** | $400–900+/tech/month; enterprise-grade FSM; overbuilt and overpriced for solo techs and small shops |
| **Housecall Pro / Jobber** | $69–349/month; full FSM suites; documentation is embedded, not focused; still requires FSM adoption overhead |
| **CompanyCam** | $79–299/month (moved upmarket in 2026); photos only — no voice capture, no structured report, no parts log, no warranty statement, no next-service recommendation |
| **Manifold** | $16/user/month; photo checklists and PDF exports; no voice capture, no trade-specific knowledge, no warranty language |
| **SMASH Voice to Invoice** | $0–25/month; speak job description → invoice in 60 seconds; pre-job estimation focus — no post-job completion report, no photos, no parts log |
| **Feldy (YC W26)** | 200+ paying customers; field capture → AI estimate; pre-job estimation, not post-job documentation; will likely expand but is focused on estimates today |
| **Static warranty templates** | Free PDF templates from Housecall Pro etc.; no voice capture, no photo integration, no auto-generation |

The market white space is explicit: no product occupies "post-job documentation + voice capture + photo capture + PDF report generation + affordable solo-tech pricing." Each competitor does one or two of these; none does all of them in a post-job context.

### Proposed Solution

JobDoc is a mobile-first app that turns a field technician's voice description and job photos into a professional, warranty-ready PDF completion report — delivered to the customer before the tech leaves the driveway.

**The core loop (HVAC MVP):**
1. **Job creation on the way to the call** — Customer name, site address, job type (service call / repair / installation). Links to existing service agreement if applicable.
2. **Voice capture on-site** — "Describe what you found and what you did" → Whisper API transcribes → AI structures into Problem Found / Work Performed / Parts Installed. Takes 90 seconds.
3. **Photo capture** — Before/after photos per job, each optionally captioned by voice. Organized automatically into the job record. Works offline.
4. **Parts log** — Speak part numbers or select from the HVAC-specific component library (capacitors, motors, filter models, refrigerant types, contactors) → auto-populates "Parts Installed" section of the report.
5. **Report generation** — One tap generates a branded PDF: job summary, parts installed with part numbers, technician notes, before/after photos, next service recommendation with suggested date, warranty statement, company branding.
6. **Send from the driveway** — One tap emails or texts the PDF to the customer while the tech is still on-site. Customer receives professional documentation before the truck leaves.
7. **Job history** — Searchable by customer name, address, equipment type, and date. "What did we do at 123 Main Street 2 years ago?" answered in 10 seconds.

**What changes for the technician:** A scattered post-job routine of texting photos to the office and hoping the admin fills in the invoice correctly becomes a 3-minute on-site documentation step that produces a report the customer can keep for warranty purposes — and that the tech can retrieve forever.

### Key Differentiators

1. **Post-job, not pre-job** — Feldy and SMASH capture job scope before the estimate; JobDoc captures what was actually done after the job. Different use case, different buyer decision moment, different product entirely. This is not a refinement of existing tools — it's a missing category.

2. **Warranty-ready formatting** — Parts installed with part numbers, warranty statement language, next service recommendation with specific date, and technician signature. This is the specific professional output that trade businesses need for liability defense, warranty registration, and upsell — not just a notes-to-invoice conversion.

3. **Driveway-fast delivery** — Done in 3 minutes while still in the customer's driveway. The customer gets documentation while the job is fresh, while trust is highest, and before any potential dispute can form. The 60-second demo video is: speak → photos → PDF → send → customer reply.

4. **"Repair amnesia" elimination** — Searchable job history per address means the tech (or anyone on the team) can look up what was done 3 years ago in 10 seconds. This creates deep switching costs: once job history is in JobDoc, switching to any other tool means losing the warranty record archive.

5. **HVAC-specific parts library** — Trade-specific knowledge (capacitor ratings, motor types, refrigerant codes, common filter models) pre-loaded into the parts log eliminates the frustration of generic text fields. This is the moat: building the HVAC parts taxonomy requires domain expertise that a horizontal FSM will not invest in for a solo-tech sub-segment.

6. **Priced for the solo tech** — $19/month is under the perceptual resistance threshold for a solo HVAC tech. CompanyCam moved to $79+ minimum; Jobber starts at $69/month. The $19/month slot for focused, mobile-first post-job documentation is unoccupied. The $59 LTD eliminates the recurring-payment friction entirely for the most price-sensitive segment.

---

## Target Users

### Primary Users

**Persona 1: "Mike" — Solo HVAC Technician**

*Background:* Mike is 41, self-employed HVAC tech in suburban Texas. He left a large HVAC company 5 years ago to go independent. He runs 4–7 service calls per day during summer cooling season and 2–4 during winter. He charges $89–$150 for service calls and $300–$1,500 for repairs depending on the part. His total revenue is $180K–$220K per year.

*Current workflow:* Takes a few phone photos on jobs that feel "important," texts them to his wife (who does the books) along with a voice note explaining what happened. She writes up the invoice in QuickBooks the next morning. Mike has a folder of phone photos by month but can't reliably find photos for a specific address without scrolling for 10 minutes. He's had 2 warranty disputes in the last year where the customer claimed the wrong part was installed; he couldn't prove what he did.

*Pain points:* Two hours per evening either describing jobs to his wife or typing his own notes into QuickBooks. No professional documentation to send customers. Lost warranty disputes for lack of proof. Embarrassment when a customer asks "do you have a record of what you did here last time?" and the answer is a screenshot of a text message.

*What success looks like:* Mike finishes his last call at 5pm and every customer has already received a branded PDF with exactly what was done, what parts were installed, and when their next tune-up is due. His wife gets the job summary auto-populated into QuickBooks without a phone call. He can pull up the full history for any address in 10 seconds. He has zero warranty disputes he can't defend.

*Aha! moment:* First time a customer replies "Wow, this is really professional, I've never gotten anything like this from an HVAC company before" within 10 minutes of receiving the JobDoc report — while Mike is still in the driveway.

---

**Persona 2: "Sandra" — Small HVAC Shop Owner-Operator (2–5 techs)**

*Background:* Sandra is 48, runs a 4-person HVAC company in the Carolinas. She does the scheduling and admin; her three techs handle the field work. Her problem isn't that she doesn't document — it's that each tech documents differently, inconsistently, or not at all. When a warranty dispute comes in, she has to call the tech from 6 months ago and hope he remembers.

*Current workflow:* Uses Jobber Connect ($149/month) for scheduling and invoicing. Photos go into a shared Google Drive folder — organized by job number if techs remember, by date if they don't. Warranty documentation is a photocopied parts box, sometimes attached to the invoice. She's been asked by a manufacturer twice for "proof of installation" and had to scramble both times.

*Pain points:* Inconsistent documentation across her team. No searchable job history that includes photos. Manufacturer warranty registration often incomplete because part numbers aren't recorded at time of install. Admin overhead of chasing techs for job details after the fact.

*What success looks like:* Every tech's job produces a consistent, branded JobDoc report that Sandra can access from her phone in real time. She can search "Bradford White water heater" and see every unit her team installed, with serial numbers, installation photos, and warranty registration dates. Warranty claims take 5 minutes to document, not 5 phone calls.

*Aha! moment:* First time Sandra pulls up a job record for a warranty claim and finds everything — part number, installation photo, tech signature — already in the system, and closes the claim in under 10 minutes without calling anyone.

---

**Persona 3: "Carlos" — Roofing Contractor (CompanyCam Migrator)**

*Background:* Carlos is 36, runs a 3-person roofing crew in Florida. He currently uses CompanyCam at $149/month for photo documentation on insurance claim jobs. His core pain: CompanyCam stores his storm damage photos but doesn't generate any report — he still has to write up the scope manually for insurance adjusters. After CompanyCam's 2026 price increase he's actively looking for an alternative that does more.

*Current workflow:* Photos into CompanyCam during and after each job. Manual PDF writeup in Google Docs with photos pasted in for insurance adjuster submissions. Each insurance report takes 45–60 minutes. He has 4–8 insurance jobs per week in storm season.

*Pain points:* CompanyCam price increase to $149/month with no added capability. Manual report writing is the bottleneck. Insurance adjusters ask for "better documentation" but his current workflow can't improve without a tool.

*What success looks like:* Carlos captures storm damage and repair documentation with JobDoc, which auto-generates an adjuster-ready PDF with photos tagged by damage type, materials installed, and warranty information. Insurance reports that took 45 minutes now take 5. He switches from CompanyCam and pays $19/month less for better output.

---

### Secondary Users

**Customers / Homeowners (Report Recipients):** Receive the branded PDF report from the technician. Their experience is the primary referral lever — "I got the most professional service report from this guy, let me send you his number." Not paying users, but their satisfaction drives viral word-of-mouth and review conversion.

**Office Admins / Spouses Managing Books:** In the solo-tech and small-shop model, the office-side person is often a spouse or part-time admin who reconciles job records with invoices. JobDoc's structured job summary (parts installed, work performed) reduces the admin call from "what did you do at the Johnson house?" to a structured record that can feed directly into QuickBooks or an existing invoicing tool.

**HVAC Manufacturers' Warranty Teams:** Receive warranty registration requests and documentation for claims. If JobDoc generates warranty-registration-ready outputs (serial number, installation date, tech license number), this segment validates that JobDoc's output format meets real-world warranty claim standards — a quality bar that drives referrals from the contractor community when claims are accepted without friction.

### User Journey

**Discovery:**
HVAC technicians and small shop owners discover new tools almost exclusively through peer recommendation in trade communities: r/HVAC, r/ProHVACR, r/Plumbing, Facebook Group "HVAC Business Owners," and "Roofing Contractors" groups. The entry point is a thread: "what are you using for job documentation?" or "anyone have a good app for sending customers a report after the job?" Secondary: Google search for "HVAC job documentation app" or "how to send job report to customer." AppSumo serves solo techs actively looking for affordable tools at LTD pricing.

CompanyCam frustration threads ("CC just raised prices again — any alternatives?") are a direct acquisition channel for roofing users.

**Onboarding:**
First experience must be under 5 minutes to first report. User creates account, selects their trade (HVAC for MVP), takes a sample job through the core loop: speaks a 30-second job description → adds 2 sample photos → selects 3 parts from the HVAC library → taps Generate Report → sees the branded PDF. The finished PDF — not the feature list — is the conversion moment. Seeing the output before doing any real work is the hook.

**Core Usage:**
Tech creates a new job on the way to the call. On-site: voice capture of findings, photo capture before/after, parts library selection. In the truck: tap Generate → review report → tap Send. Customer receives PDF. This becomes a 3-minute habit on every job within the first week.

**Success Moment:**
The primary aha! moment is the first customer reply to a JobDoc report — "this is the most professional documentation I've ever received from a contractor." The secondary aha! moment is the first warranty dispute the tech can close in 2 minutes by sending a PDF with the exact part installed, the date, and a photo.

**Long-term Retention:**
Once a tech has 30+ jobs documented in JobDoc, the job history becomes a proprietary asset — searchable equipment records per address, warranty documentation archive, service history. Switching to any other tool means losing this. The equipment history + warranty archive is the retention moat, not features or pricing.

---

## Success Metrics

### User Success Metrics

| Metric | Target | Measurement |
|--------|--------|-------------|
| Time-to-first-report (onboarding) | < 5 minutes from account creation | In-app event: account created → first PDF generated |
| Report generation time per job | < 3 minutes (voice + photos → PDF) | Job timer: voice capture start → report sent |
| Customer report delivery same-day rate | > 90% of jobs deliver report same day | Job completion timestamp vs. report sent timestamp |
| AI-structured summary acceptance rate | > 65% published without manual edit | Track: generate → publish with no text edit |
| Job history search utilization | > 40% of users perform a history search within 30 days | Feature event tracking |
| Net Promoter Score | > 55 (FSM software average: ~35) | Monthly in-app NPS survey |

**Primary user success indicator:** Report delivery velocity — are techs sending reports to customers the same day, from the field? If yes, the core value proposition is working. If no, voice capture friction or PDF quality is the failure mode to diagnose.

### Business Objectives

**Month 1 Objectives:**
- 50 paying customers (solo plan primarily)
- MRR: ~$950
- 10 documented "first report sent from driveway" stories
- Identify 3 techs willing to provide testimonials for AppSumo launch

**Month 3 Objectives (AppSumo Launch):**
- AppSumo LTD launch: 300–500 LTD purchases at $59 solo / $99 up-to-3-techs
- 150+ active MRR subscribers
- MRR: ~$2,850 (excluding LTD revenue)
- One documented "avoided a warranty dispute" case study
- Product-market fit signal: >70% of trial users send at least 3 reports in first 14 days

**Month 6 Objectives:**
- 500+ active paying subscribers
- MRR: ~$9,500
- Roofing vertical launched (insurance documentation variant)
- G2/Capterra minimum 25 reviews, 4.5+ average rating
- CompanyCam migration case studies: 5+ documented

**Month 12 Objectives:**
- 1,000+ active paying subscribers
- MRR: ~$19,000
- Plumbing vertical launched
- Company plan (up-to-5-techs) represents > 30% of MRR
- AppSumo featured deal (second campaign) or equivalent distribution event

### Key Performance Indicators

**Acquisition KPIs:**
- Reddit community referral rate: target 40% of new signups with measurable source from r/HVAC, r/ProHVACR, r/Roofing, or r/Plumbing communities
- CompanyCam migration rate: track conversion from users who identify CompanyCam as their "current tool" — target 10% of monthly new signups in Month 3+
- AppSumo conversion rate: target 2–3% of page views → LTD purchase during launch campaign
- Free-to-paid conversion: target >25% of free trial completers convert within 14 days

**Retention KPIs:**
- Monthly churn rate: <4% (FSM software benchmark ~5%)
- DAU/MAU ratio: >40% (techs use it on every job day, which is every work day)
- Streak metric: % of paying users who document at least 1 job per week — target >70% at 60 days
- Annual plan conversion: target >25% of monthly subscribers on annual plan by Month 6

**Revenue KPIs:**
- MRR growth rate: >20% month-over-month for first 6 months
- ARPU: target $22/month blended (solo at $19/mo + company plan pull-up to $39/mo)
- LTD revenue as % of total: <50% by Month 6 (LTD is acquisition tool, not revenue engine)
- Warranty dispute prevention metric: document case studies of avoided disputes — 25+ by Month 6 as marketing asset

**Product Quality KPIs:**
- Voice transcription accuracy: >95% of voice captures produce usable structured summaries (no manual correction of structure, minor phrasing edits acceptable)
- PDF generation success rate: >99.5% (no failed PDF generation events in field)
- Offline reliability: zero reports of job data loss in first 60 days
- Support tickets per 100 active users: <5/month (voice-first simplicity is the product)

---

## MVP Scope

### Core Features

The 3–5 week MVP delivers the full core loop for the HVAC vertical only. All subsequent verticals share the same architecture; the primary additions per vertical are the parts library and report template customization.

**Feature 1: Job Management**
- Create new job: customer name, site address (Google Places autocomplete), job type (service call / repair / installation), equipment identifier (optional: unit make/model)
- Job list with status: In Progress / Report Sent / Draft
- Job search by customer name, address, date
- Offline-first: all job data stored locally; full functionality with zero cell signal; auto-sync when connectivity returns

**Feature 2: Voice Capture**
- One-tap "Start Voice Capture" → Whisper API transcription in real time (or batch on upload when offline)
- AI structures transcript into three sections: Problem Found, Work Performed, Parts Installed
- Tech reviews structured summary; can edit individual sections inline
- Each section can be re-dictated independently if the AI summary missed intent
- Fallback: typed entry if voice capture is not preferred

**Feature 3: Photo Capture and Organization**
- In-app camera with direct-to-job capture; photos never go to camera roll unless opted in
- Before/After category tagging per photo (one tap)
- Optional voice caption per photo (auto-transcribed as photo description in report)
- Import from camera roll (for techs who forgot to open the app before taking photos)
- Offline-first: photos stored locally and synced on reconnect; no lost captures

**Feature 4: HVAC Parts Library**
- 150+ common HVAC components pre-loaded: capacitors (by MFD and voltage), contactors, motors (condenser fan, blower), filters (by size), refrigerant types (R-410A, R-22, R-32), thermostats, drain pans, compressors, ignitors, flame sensors
- Search by component name or part number
- Select from library → auto-populates "Parts Installed" section with name, model number, quantity
- Manual entry field for parts not in the library
- Tech can save frequently used parts to a personal quick-access list

**Feature 5: Report Generation**
- One-tap "Generate Report" after voice capture and photo capture are complete
- PDF report structure:
  - Cover page: company logo, technician name, customer name, property address, date, job reference number
  - Job Summary: Problem Found, Work Performed (from voice capture AI summary)
  - Parts Installed: table with component name, part number, quantity
  - Before/After Photos: organized in grid with captions
  - Warranty Statement: auto-generated language covering parts and labor per configurable warranty period (default: 90 days parts and labor)
  - Next Service Recommendation: "Recommend scheduling annual HVAC maintenance tune-up by [date 12 months from today]" — customizable
  - Technician signature field: digital acknowledgment
- Report preview before sending
- Edit any section inline before sending

**Feature 6: Send from the Driveway**
- One-tap share options: Email (to customer address saved in job), SMS (to customer phone), shareable PDF link (7-day expiry)
- Confirmation: "Report sent to [customer name]" with timestamp
- Customer receives PDF as attachment or viewable link — no app required on customer's end

**Feature 7: Company Branding**
- Logo upload (appears on report cover page and header)
- Company name, phone, email, license number (auto-populates all reports)
- Color theme for report header (single accent color selection)
- Configurable warranty language (default provided; tech can edit once and save)

**Feature 8: Job History**
- All completed jobs searchable by customer name, address, date, equipment type (from parts log)
- View any past report — re-send to customer at any time
- Job history stored in cloud (with local cache for offline access)
- Export job history for a specific address as a single PDF (service history report)

### Out of Scope for MVP

| Deferred Feature | Rationale |
|-----------------|-----------|
| Roofing / plumbing / electrical verticals | Start HVAC only; validate PMF before adding vertical complexity |
| Multi-technician team accounts and admin dashboard | Solo-first; team plan is Month 4+ after proving solo value |
| Service agreement tracking and upsell automation | Phase 2 feature; the "next service recommendation" in the PDF is the precursor |
| Integration with QuickBooks / Stripe for invoicing | JobDoc is documentation-focused; techs use existing invoicing tools |
| Integration with Jobber / Housecall Pro / ServiceTitan | Post-MVP partnership / API play |
| Client-facing portal (customer login to view history) | Nice-to-have; customers need reports, not a portal, at MVP |
| Google review request automation | Post-MVP; add to Phase 2 after core adoption is validated |
| Scheduling / dispatch / calendar | Out of product scope; JobDoc is documentation, not FSM |
| Offline AI processing (on-device Whisper) | Phase 2 if connectivity issues emerge as blocking pain |
| Computer vision parts ID (photograph a part → auto-identify) | Phase 3 roadmap; current parts library approach is sufficient for MVP |
| Web app (desktop) | Mobile-first; all field work is mobile; web dashboard is Phase 2 |
| White-label / reseller mode | Post-revenue feature for distribution partnerships |
| Zapier / API integrations | Post-MVP; not needed at early adopter scale |
| Refrigerant log compliance (EPA 608 tracking) | Adjacent HVAC compliance use case; separate product feature in Phase 2 |

### MVP Success Criteria

JobDoc's MVP is validated when ALL of the following are true:

1. **Core value delivery:** At least 50 paying users document ≥5 jobs with JobDoc, and the average time from job completion to customer report delivery is < 5 minutes
2. **Voice quality:** ≥65% of voice captures produce a usable AI-structured summary published to report without manual correction of the structure (phrasing edits are acceptable)
3. **Field reliability:** Zero reports of job data loss due to offline sync failure in the first 60 days
4. **Conversion:** ≥25% of free trial users convert to a paid plan or purchase LTD within 14 days of completing their first report
5. **Retention signal:** ≥70% of paying users document at least one job per week in their first 60 days
6. **Warranty validation:** ≥3 documented cases where a customer used a JobDoc report for a warranty claim or dispute resolution, successfully

**Go/No-Go decision at Day 45:**
- If criteria 1, 2, and 4 are met → proceed to roofing vertical expansion and company plan development
- If criterion 2 is not met → voice capture quality is the blocker; iterate on Whisper prompting and AI structuring before expanding
- If criterion 4 is not met → pricing or frictionless onboarding is the issue; run user interviews before expanding

**AppSumo launch gate:**
- Minimum 50 paying MRR customers with at least 3 testimonials ("this is the most professional documentation I've sent a customer") before committing to AppSumo campaign launch

### Future Vision

**Phase 2 (Months 4–8): Roofing Vertical + Company Plan + Service Agreements**

Roofing is the highest-priority expansion because: (1) CompanyCam's price increase has created active frustration and migration intent among roofers; (2) insurance documentation (storm damage photos + scope report for adjuster) is a distinct high-value use case that JobDoc's architecture handles naturally; (3) the "before/after photo + report" loop is identical to HVAC, so the core product extends without architectural changes.

Roofing-specific additions: storm damage documentation mode (damage type taxonomy, adjuster-facing language), insurance claim report template, material spec library (shingle brand/type, underlayment, flashing type). Insurance claim PDF format that adjusters accept without requesting re-documentation.

Company plan ($39/month, up to 5 techs): shared job library, team lead oversight (see all techs' jobs and reports in real time), documentation consistency enforcement, consolidated reporting per week or month.

Service agreement upsell: "Next service recommendation" in every report is tracked in JobDoc. Phase 2 adds: reminder automation ("schedule your annual tune-up before winter" email to customer 2 weeks before due date), service agreement tracking per customer (which customers have active agreements), and simple service agreement creation and renewal from within JobDoc.

**Phase 3 (Months 9–12): Plumbing + QuickBooks Integration + Review Automation**

Plumbing additions: fixture type and pipe material library, backflow test documentation (certification-ready outputs), recurring maintenance documentation (water heater flush, pressure test).

QuickBooks/Stripe integration: JobDoc job record → auto-draft invoice with parts installed pre-populated → tech approves and sends from the truck. Eliminates the after-hours admin call entirely.

Google review automation: 24 hours after report delivery, auto-send review request to customer. "You gave [Company Name] 5 stars on Google — thank you!" testimonial capture if they do; no-reply branch otherwise. This becomes the primary review velocity driver for contractors.

**Phase 4 (Months 12–18): Platform Expansion + API Partnerships**

HVAC refrigerant compliance (EPA 608): structured refrigerant log per unit, tech certification verification, disposal documentation — turns JobDoc into a compliance-capable HVAC documentation platform.

API integrations: Jobber and Housecall Pro app marketplaces — position JobDoc as a premium "documentation layer" add-on for FSM users who want better completion reports than their FSM generates. Captures mid-market techs already on FSMs who want standalone documentation quality.

Electrical vertical: electrical panel documentation, permit-required work photo log, NEC compliance notes — opens the electrician segment.

White-label for supply houses: Ferguson, Watsco, and regional HVAC distributors sell to tens of thousands of contractor customers. A white-labeled "FieldDocs by [Distributor]" becomes a distribution channel with built-in trust.

**Long-term Vision (3 Years):**

JobDoc becomes the standard post-job documentation platform for the residential trades — the tool that every HVAC, roofing, plumbing, and electrical technician uses to prove what they did and protect what they built. The HVAC parts library, warranty language templates, and compliance documentation modules become proprietary trade knowledge assets that generic FSMs cannot replicate without dedicated vertical investment.

Strategic exit parallels the Spectora playbook ($90M majority stake on $27–30M ARR): achieve $15–25M ARR across 3–4 trade verticals, then pursue acquisition by a mid-market FSM platform (Jobber, Housecall Pro, ServiceTitan) looking to add documentation depth, or by private equity consolidating field service software. The acquisition case is strong: JobDoc's retention moat (job history archive + warranty records) creates durably low churn that acquirers value at premium multiples.

The total addressable market at full vertical coverage (HVAC + roofing + plumbing + electrical) in the US approaches $60M SAM at $19/month average pricing on the serviceable contractor population. International expansion (UK, AU, NZ — markets where SMASH and ServiceM8 have already validated field service SaaS appetite) is a natural Phase 4 to Phase 5 lever.

---

*Product Brief complete. Next steps: create PRD → architecture → epics & stories → AutoMVP implementation.*
