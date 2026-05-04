---
stepsCompleted: [1, 2, 3, 4, 5]
inputDocuments:
  - ideas/shortlisted/contractor-job-documentation.md
  - _bmad-output/planning-artifacts/market-research-contractor-job-documentation.md
workflowType: product-brief
lastStep: 5
project_name: contractor-job-documentation
product_name: FieldDoc
research_type: product-brief
date: 2026-05-04
author: Root
---

# Product Brief: FieldDoc — Niche Contractor Job Documentation & AI Report Platform

---

## Executive Summary

FieldDoc is a mobile-first, AI-powered job photo documentation and report generation platform built for niche contractor verticals that generic tools ignore. Starting with pool inspectors and expanding to pest control operators, HVAC compliance crews, and fire safety inspectors, FieldDoc delivers what CompanyCam ($2B valuation) cannot: vertical-specific checklists, AI-generated professional report narratives, solo-operator pricing, and offline-first field reliability.

The opportunity is proven at two scales: CompanyCam at $68M ARR validates the macro category; Spectora at $27–30M ARR bootstrapped validates the niche-down playbook. FieldDoc applies the identical Spectora formula — pick one underserved inspection vertical, dominate via Facebook Groups and SEO, white-glove onboarding — to pool inspection first, then systematically expands to pest control (urgency: EPA electronic mandate, April 2025), HVAC compliance, and fire safety.

The primary value driver is radical time savings: AI-assisted report generation reduces post-inspection report writing from 45–120 minutes to 5–15 minutes. Combined with a $49–$79/month solo-operator price point (vs. CompanyCam's $237/month floor for a 3-user minimum), FieldDoc addresses a documented, concrete pricing and functionality gap that CompanyCam has explicitly chosen not to serve.

**Target market entry:** Pool inspection (US: 10,000–15,000 operators)
**Revenue target:** $10K MRR within 9 months; $130K MRR ($1.5M ARR) within 18 months
**GTM strategy:** Facebook Groups → AppSumo LTD → Trade association partnerships → Vertical SEO
**Build timeline:** 4-week MVP

---

## Core Vision

### Problem Statement

Niche contractor professionals — pool inspectors, pest control operators, HVAC install crews, fire safety inspectors — spend 45–120 minutes per job writing reports manually after completing field work. Their photo documentation is fragmented across phone camera rolls, Dropbox folders, and WhatsApp threads. When they do use dedicated software, they're forced into either:

1. **CompanyCam** ($237/month minimum for 3 users) — built for general contractors, with no vertical-specific checklists, no AI report generation, and pricing that locks out solo operators; or
2. **Generic inspection tools** (SafetyCulture, GoCanvas, paper forms) — requiring hours of custom template configuration with no photo-first workflow, no niche comment libraries, and no offline reliability.

The result: solo and small-team contractors either overpay for tools that don't fit their workflow, cobble together generic photo apps with manual report writing, or stay on paper — delivering unprofessional documentation that costs them business and exposes them to liability.

### Problem Impact

- **Time drain:** 45–120 minutes of report writing per inspection consumes 15–30% of a solo inspector's working day. At $75/hour equivalent, that's $56–$90 in lost productive time per job.
- **Lost revenue:** Solo operators who deliver unprofessional-looking reports lose bids to larger competitors. Professional branded PDF reports directly enable solo operators to charge more and win more business.
- **Regulatory exposure:** Pest control operators face EPA electronic documentation mandates (April 2025) — continuing on paper creates active legal liability. HVAC installers must provide ENERGY STAR-compliant geotagged photo records. Fire inspectors' records can be subpoenaed in litigation.
- **Competitive disadvantage:** When a client receives a clean, branded inspection PDF from a competitor and a blurry photo album from a solo operator, the perception gap is immediate and lasting.
- **Photo organization collapse:** Field teams spend an average of 13 hours/week looking for project data. At 50–200+ photos per inspection, organization falls apart within 2–3 jobs without dedicated tooling.

### Why Existing Solutions Fall Short

| Solution | Core Gap |
|----------|----------|
| **CompanyCam** | 3-user minimum ($237/mo floor); no vertical-specific checklists; no AI report narrative; not built for inspection workflows |
| **SafetyCulture/iAuditor** | 100,000+ templates paradoxically increases friction; enterprise pricing and complexity; not photo-first |
| **GoCanvas** | Generic forms platform; no photo-first workflow; no AI narrative generation; no niche comment libraries |
| **Spectora** | Excellent for home inspection; not designed for pool/pest/HVAC/fire workflows; home inspection templates don't map to other verticals |
| **Paper + phone camera** | Zero professional output; no compliance audit trail; catastrophic photo organization at scale |
| **Google Photos / Dropbox** | Zero report generation; zero compliance features; zero workflow structure |

The market white space is explicit and documentable: no product occupies the position of "niche-specific + photo-first + AI report narrative + solo-friendly pricing" in pool inspection, pest control, HVAC compliance, or fire safety.

### Proposed Solution

FieldDoc is a mobile-first app that turns field photos and checklist selections into professional, branded inspection reports — in minutes instead of hours — with a pre-loaded library of hundreds of vertical-specific standard comments that make the AI output accurate and immediately usable.

**The core loop:**
1. Inspector opens FieldDoc on-site, creates a new job (address, client, date auto-populated)
2. Captures photos with one tap; photos are immediately tagged to the job (offline-first: no signal required)
3. For each photo or area, selects from a pre-built checklist (pool: pump, filter, surface condition, water chemistry; pest: evidence type, severity, treatment location; HVAC: equipment nameplate, installation checkpoint, compliance tag)
4. AI generates a professional 2–3 sentence defect/finding narrative per item, combining the photo context with the checklist selection
5. Inspector reviews and edits (optional — most go straight to publish)
6. One-tap export: branded PDF report with company logo, cover page, organized findings with photos, and digital signature field
7. Report delivered to client via link or email while still on-site or en route to next job

**What changes for the inspector:** A 90-minute post-job report-writing session becomes a 10-minute on-site confirmation step. The report goes to the client the same day, every time, looking like it came from a 20-person firm.

### Key Differentiators

1. **Niche-vertical comment library as primary moat** — Spectora's defensible advantage was its home inspector comment library (500+ pre-written comments covering every standard finding). FieldDoc's pool defect taxonomy, pest evidence classification system, and HVAC checklist library are the equivalent moat: they require real domain expertise to build and create switching costs once inspectors have trained the system on their preferences.

2. **AI-generated narrative — the killer feature** — No competitor in these niche verticals offers GPT-powered defect descriptions from photos + checkbox selections. Reports using automated generation are completed 4.3x faster with 68% more photos included on average. First to market with this in any target vertical owns the "AI inspection reports" category term.

3. **Solo-operator pricing that CompanyCam explicitly ignores** — $49/month individual plan (vs. $237 CompanyCam floor). This isn't a race-to-the-bottom; it's capturing a segment CompanyCam has structurally abandoned. Solo operators represent the majority of pool inspectors and a significant share of pest control operators.

4. **Offline-first architecture** — Basements, crawlspaces, rural properties, and pool equipment rooms routinely have no cell signal. Every competitor that requires connectivity is abandoned the first time it fails in the field. Firebase/PouchDB local-first with automatic sync is table stakes for trust, not a premium feature.

5. **Compliance export formats that regulators and insurers actually accept** — EPA-compliant pesticide records, ENERGY STAR geotagged photo documentation, NFPA inspection exports. Generic tools require manual reformatting; FieldDoc produces them natively.

6. **Branded client-facing PDF as viral distribution** — Every report delivered to a client markets FieldDoc. "Report powered by FieldDoc" in the footer turns a professional output into an acquisition channel. Same dynamic drove Spectora's early growth.

---

## Target Users

### Primary Users

**Persona 1: "Marcus" — Solo Pool Inspector**

*Background:* Marcus is 38, self-employed, certified pool inspector in Arizona. He does 4–6 pool inspections per day during spring and summer for real estate transactions and pool safety compliance. He's been operating for 6 years, left a pool service company to go solo, and charges $150–$250 per inspection.

*Current workflow:* Uses his iPhone camera for photos, keeps them in albums labeled by address, and writes reports at home every evening in a Google Doc template he built himself. The report writing takes 60–90 minutes per inspection and is the thing he hates most about his job. He's tried CompanyCam but couldn't justify the $237/month minimum for himself alone.

*Pain points:* Report writing takes his evenings. Photos sometimes end up in the wrong album. He loses jobs to a larger 3-person operation in his market because their reports look more polished. His Google Doc template has no pool-specific checklist built in — he writes everything from scratch.

*What success looks like:* Marcus completes his last inspection at 4pm and has all 5 reports delivered to clients by 4:30pm. He looks like the most professional inspector in his market. He can take Friday afternoons off because the time he was spending on reports is gone.

*aha! moment:* First time he generates a report from FieldDoc in the field and sends it to a client while still in the parking lot. Client replies within 10 minutes asking for his card for future referrals.

---

**Persona 2: "Diana" — Pest Control Owner-Operator**

*Background:* Diana is 45, runs a 3-person pest control company in Florida. She and two technicians handle residential and commercial accounts. The EPA's April 2025 electronic pesticide record mandate has her stressed — she's been on paper forms and knows she needs to digitize, but every solution she's evaluated is either priced for enterprise (PestPac) or not built for documentation workflows (GorillaDesk).

*Current workflow:* Technicians fill out paper treatment forms on-site, take photos on their phones of evidence and treatments, and hand them to Diana at the end of the day. She manually scans or photographs the forms, organizes photos into labeled Dropbox folders, and types up any client-facing reports. Her compliance audit trail is a paper folder she dreads the day a regulator asks to see.

*Pain points:* EPA mandate creates real legal exposure if she doesn't digitize. Evidence photos are scattered across 3 different employees' phones. Client-facing reports take 30–45 minutes each. Coordinating photo documentation across a field team is a constant headache.

*What success looks like:* Every technician documents on-site with FieldDoc. EPA-compliant treatment records are auto-generated and stored in the cloud. Client evidence reports go out same-day. An EPA inspection would be a 5-minute Dropbox export, not a 3-hour archive dig.

*aha! moment:* First time Diana reviews a technician's completed job from her phone in real time — every photo tagged, checklist complete, EPA record auto-generated — without having to chase anyone down.

---

**Persona 3: "James" — HVAC Install Crew Lead**

*Background:* James is 34, leads a 4-person HVAC installation crew for a regional HVAC contractor. His company does commercial and residential installs that require ENERGY STAR documentation for utility rebate programs and warranty compliance. He's tried GoCanvas and found it took longer to set up than to just take photos manually.

*Current workflow:* Takes equipment nameplate photos on his personal phone, keeps a folder per job, and fills out Excel-based compliance sheets at the end of each week. The Excel sheets frequently don't match the photos because he fills them in from memory. ENERGY STAR rebate applications get delayed because photo documentation is incomplete or missing geotags.

*Pain points:* Rebate application delays cost his clients $500–$2,000 per install. His crew doesn't document consistently without a structured workflow. GoCanvas felt like it was designed by a committee, not a field tech.

*What success looks like:* Every install is documented on-site: equipment nameplate photo, serial number auto-extracted (OCR), geotagged, timestamped, ENERGY STAR format. Rebate applications go out the same week as install with zero follow-up documentation requests.

---

### Secondary Users

**Building Owners / Property Managers (Report Recipients):** Receive branded PDF reports from inspectors using FieldDoc. Their experience drives viral acquisition (they see the report quality and ask "what tool are you using?"). Not paying users, but their satisfaction is a retention and referral lever.

**Insurance Adjusters and Compliance Auditors:** Receive FieldDoc-generated documentation for insurance claims, EPA audits, NFPA inspections, and warranty disputes. Their acceptance of the output format determines whether FieldDoc's compliance exports are truly "table stakes" — this segment validates the product's regulatory fitness.

**Multi-Technician Team Leads (Small Teams of 2–5):** Secondary to the solo user but important for team plan revenue. They care about consistency across technicians, photo accountability, and consolidated reporting. Often the purchase decision-maker for a 3-5 person pest control or HVAC team.

### User Journey

**Discovery:**
Pool inspectors and pest control operators almost exclusively discover new tools through Facebook Groups and word-of-mouth within trade communities (NPMA forums, pool inspector groups, HVAC contractor groups). The entry point is a peer recommendation: "I've been using this app that cuts my report time in half." Secondary: Google search for "[vertical] inspection software" or "[vertical] report generation app." AppSumo serves price-sensitive solo operators actively looking for tools.

**Onboarding:**
First 15 minutes are critical. User creates account, selects their vertical (pool / pest / HVAC / fire safety), and immediately sees the pre-loaded checklist library. The onboarding demo creates a sample job with stock photos and generates a sample branded PDF — showing the finished output before they've done any real work. This is the core acquisition moment: seeing the end product (the report) creates immediate desire.

**Core Usage:**
Inspector creates a new job on the way to the site, captures photos during the inspection with FieldDoc open (photos go directly into the job, tagged and organized), selects checklist items, optionally taps "Generate Report," reviews AI narrative, and exports PDF. Repeat per job. Power users customise their comment library over time — this is when FieldDoc becomes sticky and switching costs increase.

**Success Moment:**
The aha! moment is the first report delivered to a client from the field — same day, same hour as the inspection. For most solo operators this is a workflow transformation they didn't think was possible with their current tools. Secondary aha!: first time a client asks who did their "professional" pool inspection because the report looked great.

**Long-term Retention:**
Inspectors who customize their comment library (adding their personal standard findings, preferred phrasing, company-specific notes) are essentially building a personal asset inside FieldDoc. This creates deep switching costs — their customized library doesn't transfer to a competitor. Additionally, every report in the system becomes a searchable job history and client database, increasing stickiness over time.

---

## Success Metrics

### User Success Metrics

| Metric | Target | Measurement |
|--------|--------|-------------|
| Time-to-first-report (onboarding) | < 15 minutes from sign-up | In-app event tracking |
| Report generation time | < 15 minutes per job (vs. 60–90 min baseline) | Job timer tracking |
| Report delivery same-day rate | > 85% of jobs deliver report same day | Job completion → report sent timestamps |
| Offline usage rate | > 40% of photo captures happen offline | Sync event logging |
| Comment library customization | > 60% of users add 1+ custom comments within 30 days | Feature adoption tracking |
| Net Promoter Score | > 55 (inspection software avg: ~35) | Monthly in-app NPS survey |

**Primary user success indicator:** Reduction in time between job completion and report delivery. If inspectors are sending reports the same day, the core value proposition is working. If not, onboarding or AI quality is broken.

### Business Objectives

**3-Month Objectives:**
- AppSumo LTD launch: 300–500 LTD purchases (pool inspection vertical)
- 50+ active paying subscribers on monthly plan
- MRR: $2,500–$5,000
- Product-market fit signal: >70% of trial users complete at least 3 jobs with FieldDoc

**6-Month Objectives:**
- 200+ active paying subscribers
- MRR: $12,000–$15,000
- Pest control vertical launched (EPA mandate urgency)
- 10+ verified case study quotes ("reduced report time from X to Y")
- First trade association partnership (PHTA or NPMA newsletter feature)

**12-Month Objectives:**
- 1,000+ active paying subscribers across 2–3 verticals
- MRR: $65,000
- HVAC compliance vertical launched
- AppSumo featured deal (or second campaign)
- Team plan represents > 25% of MRR (vertical expansion from solo)

**18-Month Objectives:**
- 2,000+ active paying subscribers
- MRR: $130,000 ($1.5M ARR run rate)
- 4 verticals fully operational (pool, pest, HVAC, fire safety)
- Exploring Series A or strategic partnership (Spectora exit path: majority stake at $90M)

### Key Performance Indicators

**Acquisition KPIs:**
- Facebook Group referral rate: track UTM-tagged links from community posts — target 40% of new signups from community channels in first 6 months
- Organic search traffic: "[vertical] inspection software" keyword group — target 500 monthly visits by month 6 from SEO
- AppSumo conversion rate: target 2–3% of AppSumo page views → purchase
- Trial-to-paid conversion: target > 25% (Spectora benchmarks ~30%)

**Retention KPIs:**
- Monthly churn rate: < 3% (inspection software benchmark: ~5%)
- DAU/MAU ratio: > 35% (inspectors use daily during peak season)
- Feature adoption — AI report generation: > 70% of paying users use AI report at least once per week
- Annual plan conversion: > 30% of subscribers choose annual billing by month 6

**Revenue KPIs:**
- MRR growth rate: > 20% month-over-month for first 6 months
- Average Revenue Per User (ARPU): target $65/month blended (solo plan $49–$79 + team plan pull-up)
- LTD revenue as % of total: < 40% by month 6 (LTD is acquisition tool, not revenue engine)
- Payback period on AppSumo fee: < 6 months from LTD subscribers converting to paid add-ons

**Product Quality KPIs:**
- AI report acceptance rate (user publishes without edits): target > 60% within 90 days of launch
- Crash-free sessions: > 99.5% (offline-first reliability is core to trust)
- Support tickets per 100 active users: < 5/month (simplicity is the product)

---

## MVP Scope

### Core Features

The 4-week MVP delivers the full core loop for pool inspection only. Subsequent verticals share the same architecture; the primary addition per vertical is the checklist library and AI prompt library.

**Feature 1: Mobile Job Management**
- Create new job: address (auto-suggest via Google Places), client name, inspection date, job type (pool inspection v1)
- Job list view with status (In Progress / Report Sent / Draft)
- Job search and filter by date, client, status
- Offline-first: all job data stored locally; full functionality with zero cell signal

**Feature 2: Photo Capture & Organization**
- In-app camera with direct-to-job capture (photos never go to camera roll unless user opts in)
- Batch capture mode for high-volume photo areas
- Photo annotation: tap to add a checklist item tag to any photo
- Offline sync queue: photos captured offline sync automatically when connectivity returns
- Support for existing photos from camera roll (for inspectors who forget to open the app first)

**Feature 3: Pool-Specific Checklist Library (MVP vertical)**
- 200+ standard pool defects, equipment items, safety observations, water chemistry readings
- Organized by area: deck, coping, surface, equipment, plumbing, electrical, safety features
- Each item has: name, severity (minor/major/safety hazard), standard narrative template
- Inspectors can mark items as N/A, acceptable, deficient, or informational
- Inspector can add free-text notes to any item

**Feature 4: AI-Generated Report Narrative**
- One-tap "Generate Report" button after checklist completion
- GPT-4o takes: photo description (auto-generated from image), selected checklist items + severities, any inspector free-text notes
- Output: 2–3 sentence professional finding narrative per deficient item
- Inspector can edit any narrative before publishing (inline text editing)
- Regenerate individual items if narrative misses the mark

**Feature 5: Branded PDF Report Export**
- Cover page: company logo (uploaded once during onboarding), inspector name and license number, client name, property address, inspection date
- Executive summary section: overall property assessment, total findings by severity
- Findings section: each deficient item with photo(s), AI narrative, severity indicator
- Appendix: acceptable items list, photos-only documentation, inspector signature field
- Export to PDF, share via link (7-day expiry), email directly from app, or save to Files

**Feature 6: Company Branding Setup**
- Logo upload (appears on all reports)
- Company name, phone, email, website (appears in report footer)
- License number field (auto-populates on all reports)
- Color theme selection (report header color)

**Feature 7: Basic Job History**
- All completed jobs searchable by address, client, date
- Re-open any past report for re-delivery (client lost the link)
- Job archive with local + cloud backup

### Out of Scope for MVP

The following are explicitly deferred to post-MVP:

| Deferred Feature | Rationale |
|-----------------|-----------|
| Pest control / HVAC / fire safety verticals | Focus pool inspection first; validate PMF before adding complexity |
| Multi-technician team accounts | Solo-first; team plan is Month 4+ after proving solo value |
| Client-facing portal (client login to view past reports) | Nice-to-have; clients need reports, not a portal, at MVP |
| Scheduling / calendar integration | FieldDoc is documentation, not FSM; avoid scope inflation |
| Payment processing / invoice generation | Out of product scope; inspectors use existing billing tools |
| CRM / client management | Same rationale — documentation focus, not full FSM |
| OCR equipment nameplate capture (HVAC) | HVAC vertical feature; out of scope for pool MVP |
| Two-way sync with CompanyCam | Partnership/integration play; not needed at MVP scale |
| White-label (reseller) mode | Post-revenue feature for trade association partnerships |
| Web app (desktop) | Mobile-first; field work is mobile; web is Phase 2 |
| Advanced AI photo defect detection (computer vision) | Roadmap feature; checklist + narrative is sufficient for MVP |
| Zapier / API integrations | Post-MVP; inspectors don't need this at early stage |

### MVP Success Criteria

FieldDoc's MVP is validated when ALL of the following are true:

1. **Report speed:** At least 50 inspectors track ≥3 jobs through FieldDoc, and their average time from job completion to report delivery is < 20 minutes (vs. 60–90 minute baseline)
2. **AI narrative quality:** ≥65% of AI-generated narratives are published without inspector edits (no regeneration, no manual override)
3. **Offline reliability:** Zero reports of lost data due to offline sync failures in the first 30 days
4. **Conversion:** ≥25% of free trial users convert to paid within 14 days
5. **Retention signal:** ≥70% of paying users complete at least one job per week in their first 60 days
6. **Word-of-mouth:** ≥3 unprompted referrals documented in Facebook Groups or app review mentions within first 60 days

**Go/No-Go decision at Day 60:**
If criteria 1, 2, and 4 are met → proceed to pest control vertical expansion and team plan.
If any of 1, 2, or 4 are not met → iterate on failing component before expanding verticals.

### Future Vision

**Phase 2 (Months 4–8): Pest Control Vertical + Team Plans**

Pest control is the highest-urgency expansion due to the EPA electronic mandate. The checklist library addition covers: evidence documentation (pest type, evidence category, severity), treatment records (pesticide applied, EPA registration number, application method, target pest), before/after documentation, and compliance export (EPA-formatted treatment log with geotags and timestamps).

Team plan enables: shared job library across technicians, team lead oversight dashboard (real-time job status per tech), consistent documentation standards enforcement, consolidated reporting.

**Phase 3 (Months 9–12): HVAC Compliance + Fire Safety**

HVAC compliance checklist: equipment nameplate capture (model/serial auto-populated via OCR), ENERGY STAR documentation requirements, installation checkpoints, warranty photo package. Fire safety checklist: NFPA 25 (sprinkler systems), NFPA 72 (fire alarm systems), fire extinguisher inspection records, deficiency tracking and re-inspection workflow.

**Phase 4 (Months 12–18): Platform Expansion**

White-label mode for trade associations to offer FieldDoc to members as a benefit. API for integration with existing FSM tools (PestPac, GorillaDesk, ServiceTitan) — FieldDoc handles documentation, existing tools handle scheduling/invoicing. International expansion (UK, Australia, Canada share similar inspection regulatory frameworks). Client-facing portal with historical report access and digital property records.

**Long-term Vision (3 Years):**

FieldDoc becomes the standard documentation infrastructure for the inspection economy — the tool that every niche inspector vertical uses to produce professional, compliant documentation. The comment library becomes an industry knowledge base; AI defect detection evolves from checklist-assisted to photo-first (computer vision identifies defects before the inspector marks them). Strategic exit potential mirrors the Spectora playbook: achieve $20–30M ARR in 3–4 verticals, then pursue majority stake sale to a strategic acquirer (CompanyCam, ServiceTitan, or private equity consolidator in the field service software space).

The total addressable market at full vertical coverage (pool + pest + HVAC + fire safety + elevator + septic + mold/air quality) in the US alone approaches $9–14M SAM at current penetration assumptions. International doubles or triples this. The Spectora exit ($90M majority stake at $27–30M ARR) suggests FieldDoc's terminal value at similar scale is $75–120M — achievable with the Spectora playbook applied to a larger set of verticals.

---

*Product Brief complete. Next steps: create PRD → architecture → epics & stories → AutoMVP implementation.*
