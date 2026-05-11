---
stepsCompleted: [1, 2, 3, 4, 5, 6]
inputDocuments:
  - ideas/shortlisted/subcontractor-compliance-tracking.md
  - _bmad-output/planning-artifacts/market-research-subcontractor-compliance-tracking.md
workflowType: product-brief
lastStep: 6
project_name: subcontractor-compliance-tracking
research_type: product-brief
user_name: Root
date: 2026-05-11
---

# Product Brief: SubShield — Subcontractor Compliance Tracking for General Contractors

---

## Executive Summary

SubShield is an AI-powered compliance hub that eliminates the spreadsheet-and-email chase general contractors endure every day to track subcontractor certificates of insurance (COIs), contractor licenses, lien waivers, W-9s, and OSHA certifications.

General contractors managing 20–75 active subcontractors lose 15–25 hours per week — and $20,000–$36,000 per year in admin labor — to a compliance workflow that has not meaningfully changed in decades: email a sub, wait, chase again, manually read a PDF, enter data into a spreadsheet, hope nothing expires. One missed COI expiry can invalidate the GC's own insurance coverage, trigger claim denial, and expose the business to six-figure liability.

The construction compliance software market is a $3.67B and growing at 10.3% CAGR, yet every current solution either requires enterprise minimums that exclude SMB GCs (myCOI: 200 COI minimum; BCS: $10K/year floor) or is too shallow to truly replace the spreadsheet (Procore, Contractor Foreman). The SMB GC tier — firms managing 20–75 active subs — is effectively unserved at an accessible price point.

SubShield fills this gap with:
- **AI OCR** that reads any COI PDF in under 30 seconds, extracting policy numbers, coverage amounts, and expiry dates without manual data entry
- **Automated expiry alerts** to both the GC admin and the subcontractor at 90/60/30 days
- **Zero-friction sub portal** — subcontractors upload documents via an email link, no account required
- **All-document-type coverage** — COIs, W-9s, state licenses, lien waivers, and OSHA certs in one dashboard
- **Procore/Buildertrend integration** — complements existing PM workflows rather than replacing them
- **Transparent SMB pricing** — $49/month (up to 25 subs) or $99/month (up to 75 subs), with LTD options at $199–$399

The LTD (lifetime deal) model de-risks early revenue: a GC saving even one week of admin per month justifies a $199–$399 one-time purchase in the first 30 days of use.

**Build verdict: CONFIRMED.** Market is large and growing, competitors are exploitable, the problem is acute and universal, and the MVP is achievable in 3–4 weeks.

---

## Core Vision

### Problem Statement

General contractors managing 20 or more active subcontractors are required by law, contract, and insurance policy to maintain current compliance documentation for every sub on every active job site. This includes:

- **Certificates of Insurance (COIs)** — each sub must carry workers' compensation, general liability, and auto coverage meeting the GC's contract minimums; COIs expire on independent schedules and must be re-verified
- **State contractor licenses** — trades are licensed at the state level with varying expiry cycles; an unlicensed sub on a project exposes the GC to the same liability as an uninsured one
- **W-9 and tax documentation** — required annually for 1099 issuance; frequently outdated
- **Lien waivers** — conditional and unconditional progress and final waivers must be collected and matched to payment milestones
- **OSHA and safety certifications** — OSHA 10/30 cards and site-specific certifications with their own expiry cycles

This compliance stack is **managed almost entirely manually** in 2026: spreadsheets tracking expiry dates, email threads chasing non-responsive subs, admin coordinators spending 15–25 hours per week on document collection and review. There is no alert when something expires. There is no automated follow-up. There is no single source of truth for compliance status across a project.

The direct consequence: a GC with 50 active subs has 150–250 compliance line items to track simultaneously. Manual accuracy is impossible at scale. Documents expire unnoticed. Claims get denied. Insurance premiums spike 20–50%. Projects get shut down.

### Problem Impact

The stakes are quantifiable and significant:

| Impact | Magnitude |
|--------|-----------|
| Admin labor cost | $20,000–$36,000/year per GC (15–25 hrs/week at $25–35/hr) |
| Workers' comp liability exposure | Potentially $100K–$500K+ per incident if a sub's WC has lapsed |
| Insurance premium increase | 20–50% annual increase triggered by audit failures |
| Manual COI review time | 25–30 minutes per certificate when done properly |
| Project shutdown risk | One expired COI can trigger contract termination for cause |

The emotional impact compounds the financial one: GC owners and office managers live with low-grade anxiety about the documents they haven't chased yet, the expiry they might have missed, and the claim that might be denied because of a spreadsheet oversight. This is a problem that wakes people up at 3 AM.

### Why Existing Solutions Fall Short

**Enterprise tools exclude SMBs entirely:**
- myCOI requires a minimum of 200 COIs — a GC managing 50 subs across 3 projects might track 150 COIs total, putting them under the floor
- BCS full-service starts at $10,000/year — not viable for a $5M–$20M GC business
- SmartCompliance runs $40–$80 per vendor per year — at 50 subs, that's $2,000–$4,000/year for a single document type

**Horizontal platforms are too shallow:**
- Procore (the dominant construction PM platform) has basic sub document collection but no AI extraction, no automated chasing, and no compliance depth
- Contractor Foreman and Knowify treat compliance as a feature, not the product — they can't replace a spreadsheet for a compliance-focused workflow

**Pure-play COI tools ignore the full document stack:**
- Billy (the closest competitor) covers COIs well but not W-9s, licenses, or lien waivers
- TrustLayer covers multiple document types but has documented OCR accuracy complaints and no reporting dashboard
- None of the current players track state contractor licenses or OSHA certifications

**Subcontractor experience is broken:**
- Most tools require subs to create accounts and log in — subs managing relationships with 10+ GCs each using different platforms will simply ignore the request
- No current SMB tool offers a zero-friction, no-login email-link upload portal

**Pricing is opaque:**
- Six of eight major competitors list "contact sales" as the only pricing path — a deal-killer for SMB buyers who need to evaluate and decide independently

### Proposed Solution

SubShield is a purpose-built compliance hub for general contractors managing 20–75 active subcontractors, priced accessibly for the SMB tier and designed to replace the spreadsheet entirely.

The core workflow:

1. **GC onboards a subcontractor** — enters name, trade, contact email, and required document types
2. **Sub receives an email with a link** — clicks, uploads their documents (COI PDF, license copy, W-9, signed lien waiver); no account creation required
3. **AI reads the documents** — SubShield's OCR + AI layer extracts all structured data: policy numbers, coverage amounts, expiry dates, named endorsements, license numbers, certification dates
4. **Dashboard shows compliance status** — green/yellow/red per sub, per document type, per project; the GC sees at a glance what's current, what's expiring, and what's missing
5. **Automated reminders run in the background** — 90/60/30-day alerts to both the GC admin and the sub; the system tracks whether the sub has responded and escalates
6. **Procore/Buildertrend sync** — compliance status reflected in the GC's existing PM platform; new subs added in Procore automatically appear in SubShield

The result: a GC admin who spent 20 hours per week chasing compliance documents spends 2–3 hours reviewing what the system flagged and approving what was auto-processed.

### Key Differentiators

| Differentiator | How it creates value | Competitive gap |
|---------------|---------------------|-----------------|
| AI OCR on all document types | 30-second extraction vs. 30-minute manual review | Competitors do COIs only; no one does licenses + W-9s + lien waivers + OSHA in one AI layer |
| Zero-friction sub portal | Email-link upload, no account, no password | myCOI, TrustLayer, BCS all require sub account creation |
| All-document-type coverage | One dashboard for COIs + licenses + W-9s + lien waivers + OSHA | No SMB tool covers all five document types |
| Transparent SMB pricing | $49–$99/month published, no "contact sales" | 6 of 8 competitors require sales calls for pricing |
| LTD availability | One-time $199–$399 purchase | Zero current competitors offer lifetime deals |
| Procore + Buildertrend integration | Works alongside existing workflow | Only Billy has Procore integration; no competitor has Buildertrend |
| State license verification | Automated lookup against state license boards | No current competitor does this |

---

## Target Users

### Primary Users

**Persona 1: Michelle — The Office Manager at a Mid-Size GC**

Michelle is 38, working for a commercial GC in Atlanta that runs 3–5 concurrent projects with 40–60 active subcontractors at any given time. She has been in the role for six years. Compliance tracking was manageable when the company had 20 subs; now it's consuming most of her week.

Her current workflow: a Google Sheet with 12 columns (sub name, document type, expiry date, contact email, date last chased, status). She reviews it every Monday morning, sends a batch of "your COI expires in 30 days" emails manually, and then fields the inevitable "which form do I send?" replies. Three times in the past year, a sub's document has lapsed without her catching it in time.

**What Michelle needs:**
- To stop maintaining the spreadsheet entirely
- Automated reminders so she's not the one sending follow-up emails
- Confidence that the system catches expiries she would have missed
- A dashboard she can show the project manager in 30 seconds to prove all subs on Site B are compliant

**Michelle's journey:**
- Discovers SubShield via a peer mention in a Facebook "Administrative Professionals in Construction" group, or via Google ("how to track subcontractor COIs automatically")
- Evaluates by importing her existing spreadsheet and running the AI extraction on 5 real COI PDFs she has on hand
- "Aha moment": AI reads a COI in 28 seconds and populates all fields correctly — she validates against her spreadsheet and it matches
- Adopts within 2 weeks; presents cost savings to the owner as justification
- Becomes an internal champion who mentions SubShield to GC owners she knows

**Persona 2: Dave — The Owner-Operator GC**

Dave is 51, runs a residential GC firm in Phoenix with 20 regular subs and a part-time admin who handles invoicing. Dave personally reviews and chases compliance documents because the stakes are too high to delegate to someone who doesn't fully understand them. He spends 10–12 hours per week on this. He's been burned once — a sub's workers' comp lapsed and there was a fall on-site. The insurance claim was complicated and expensive.

**What Dave needs:**
- A tool simple enough that his part-time admin can own it without constant supervision
- Ironclad confidence that expiry dates are never missed
- Proof that sub documents are what they claim to be (coverage amounts, endorsements)
- Low onboarding friction — he doesn't want to spend 3 hours setting it up

**Dave's journey:**
- Discovers SubShield from an AGC chapter email newsletter or a post in r/contractors
- Evaluates on price first — the $199 LTD is the decision point (pays for itself in one week of saved time)
- Onboards his part-time admin and walks through two subs together
- "Aha moment": gets a text alert that a sub's COI expires in 14 days — he'd completely forgotten, and the sub already got an automated reminder 3 days earlier
- Refers SubShield to two other GC owners at a jobsite safety meeting

**Persona 3: Karen — The Compliance Coordinator at a Regional Builder**

Karen is 44, works for a home builder in North Carolina managing 50–70 trade contractors (framers, plumbers, electricians, HVAC, roofers, painters) across 15 active home builds. Her challenge is that the same subs work across multiple projects and she needs to know, on any given day, whether every sub currently on-site is fully compliant. She also needs to track state electrical and plumbing licenses, which Procore doesn't do.

**What Karen needs:**
- Project-level compliance views ("show me all subs on Build #142 and their status")
- Trade-specific document requirements (electricians need a state license; framers don't)
- Procore integration — her company is a Procore shop and she doesn't want to maintain two sub lists
- OSHA 10 card tracking by individual worker (not just company-level)

**Karen's journey:**
- Discovers SubShield via the Procore App Marketplace after searching for "compliance tracking integration"
- Evaluates against Billy (the other Procore-native option) — SubShield wins on pricing and multi-document type coverage
- Onboards by importing sub list from Procore (bidirectional sync)
- "Aha moment": runs the state license verification on all 60 subs in under 5 minutes; finds one unlicensed sub before they show up on-site

### Secondary Users

**Subcontractors (Document Uploaders)**

Subcontractors are not customers — they don't pay, they don't decide whether to use the tool. But they are critical users because the zero-friction sub portal is only valuable if subs actually use it.

The sub's experience: they receive an email from "[GC Company Name] is requesting your compliance documents." They click a link, see a simple upload form with clear labels ("Upload your COI here"), drag and drop their PDF, and click Submit. 60 seconds, no account, no password, done. They receive a confirmation email.

The sub's motivation to comply: if they don't upload, they don't get put on the approved vendor list and don't get work. Compliance with the GC's documentation request is already a requirement — SubShield just makes it 10x easier.

**Design priorities for the sub portal:**
- Works on mobile (subs are on job sites)
- No account creation, ever
- Clear, plain-language instructions (not every sub is tech-savvy)
- Instant feedback on what was received and what's still missing

**Project Managers and GC Owners (Dashboard Readers)**

Project managers and company owners don't manage compliance day-to-day, but they need visibility. The dashboard read-only view lets them answer the question "are all subs on this project compliant?" in 30 seconds before a site walk or before releasing a payment.

**Insurance Agents and Risk Managers (Verification Requestors)**

At larger GC firms or during annual insurance audits, risk managers or external insurance agents need to verify compliance records. A shareable compliance report (PDF export or read-only link) serves this need without exposing the full system.

### User Journey

**The Full GC Compliance Workflow — Before and After SubShield:**

| Stage | Before SubShield | After SubShield |
|-------|-----------------|-----------------|
| **New Sub Onboarding** | GC admin emails sub asking for documents; waits; follows up manually | GC adds sub to SubShield; automated email goes to sub with upload link; sub uploads in 60 seconds |
| **Document Review** | Admin manually reads PDF, extracts data into spreadsheet, verifies coverage amounts | AI reads PDF in 30 seconds; admin reviews extracted data and clicks Approve or flags discrepancy |
| **Expiry Monitoring** | Admin checks spreadsheet weekly; may miss items | System sends 90/60/30-day alerts to GC admin and sub automatically; sub receives reminder to upload renewal |
| **Compliance Status Check** | PM asks admin "are we good on Site B?"; admin pulls up spreadsheet | PM opens dashboard, sees green/yellow/red per sub per project in real time |
| **Insurance Audit** | Admin pulls spreadsheet + scanned PDFs from email; 4-hour exercise | Admin exports compliance report as PDF or sends read-only link; 10-minute exercise |
| **New Project Setup** | Admin re-checks all returning subs for current documents | SubShield shows returning subs' current compliance status; only flags those with upcoming expiries |

**Key value moments:**
- **First AI extraction** (first 10 minutes of use) — seeing a COI read correctly by the AI is the first confirmation the product works
- **First automated reminder sent** (within first 30 days) — GC admin realizes the system is running in the background so they don't have to
- **First prevented lapse** (within first 60 days) — a document would have expired; the sub renewed it because of an automated reminder; the GC admin sees it turn green with no action required on their part

---

## Success Metrics

### User Success Metrics

**Primary metric: Admin hours saved per account per week**
- Baseline: 15–25 hours/week before SubShield
- Target: 2–4 hours/week after SubShield (80–90% reduction)
- Measurement: In-app time tracking prompts at 30/60/90-day intervals; user-reported self-assessment at account anniversary

**Secondary metrics:**
- % of subs with all documents current (compliance rate): target 90%+ within 60 days of account creation
- Time from new sub onboarding to first document received: target under 48 hours (vs. 1–2 weeks manually)
- % of sub document uploads completed via sub portal (vs. manually uploaded by GC admin): target 70%+
- Days from GC adding a sub to complete compliance verification: target under 72 hours

**"Aha moment" metric:**
- % of users who complete their first AI extraction within 24 hours of signup: target 80%
- User who extracts their first COI and validates it against their own records is 3x more likely to convert to paid

### Business Objectives

**3-Month Objectives:**
- Validate product-market fit with 50+ paying customers across at least 10 US states
- Achieve $2,500 MRR (subscription) or $15,000 in LTD revenue (AppSumo)
- Collect 15+ verified G2/Capterra reviews (minimum 4.2/5.0 average)
- Confirm AI OCR accuracy >90% on ACORD-format COIs from 10+ insurance carriers

**6-Month Objectives:**
- 200+ paying customers; $10,000 MRR
- 50+ Procore integrations active
- LTD campaign complete: $60,000+ in cumulative lifetime deal revenue
- Churn rate <5% monthly (sticky compliance tool; should behave like infrastructure)
- Partnership or referral agreement with at least one construction-focused insurance agency

**12-Month Objectives:**
- 750+ paying customers; $37,500 MRR
- Procore App Marketplace listing live with 200+ integrations active
- 100+ G2/Capterra reviews
- Average compliance rate across accounts: 92%+
- $120,000+ in LTD revenue (cumulative)
- Expansion into Buildertrend integration and state license verification

### Key Performance Indicators

| KPI | 3 Month | 6 Month | 12 Month | Measurement Method |
|-----|---------|---------|---------|-------------------|
| Paying customers | 50 | 200 | 750 | Database count |
| MRR | $2,500 | $10,000 | $37,500 | Billing system |
| LTD revenue (cumulative) | $15,000 | $60,000 | $120,000 | AppSumo + direct |
| Avg subs tracked per account | 28 | 35 | 42 | Database avg |
| Compliance rate (% subs current) | 85% | 90% | 93% | Computed per account |
| Monthly churn rate | <8% | <5% | <3% | Cohort analysis |
| G2/Capterra reviews | 15 | 40 | 100 | Review platform |
| Procore integrations | 0 | 50 | 200 | Integration event log |
| AI OCR accuracy (ACORD forms) | >88% | >92% | >95% | Validation dataset |
| NPS score | 30+ | 40+ | 50+ | Quarterly survey |
| Admin hours saved/account/week | 12 | 14 | 16 | User-reported survey |
| Sub portal adoption (% of uploads) | 55% | 68% | 75% | Upload source tracking |

**Leading indicators (early warning signals):**
- First AI extraction completion rate within 24 hours (predicts conversion)
- Sub portal first-use completion rate (predicts retention)
- Days to first automated alert sent (predicts engagement)
- Spreadsheet import success rate (predicts onboarding completion)

---

## MVP Scope

### Core Features

The MVP is a 3–4 week build that delivers the core compliance workflow: document collection, AI extraction, expiry tracking, automated alerts, and a compliance dashboard. No bells, no platform complexity — just the spreadsheet replacement.

**Feature 1: Subcontractor Directory**
- Add/edit/deactivate subcontractors (name, company, trade, contact email, phone)
- Assign required document types per sub (some trades need licenses; some don't)
- Bulk import from CSV (for GCs migrating from spreadsheets)
- Sub status overview: Compliant / Expiring Soon / Non-Compliant / Awaiting Documents

**Feature 2: Document Collection — Sub Portal**
- Email-link based upload flow: GC clicks "Request Documents" → sub receives branded email → clicks link → sees required document checklist → uploads PDFs → confirmation sent to both parties
- No sub account or password required — ever
- Works on mobile browsers
- Tracks upload status per document per sub

**Feature 3: AI Document Extraction (COI + W-9 priority)**
- Upload a COI PDF → AI extracts: policy number, coverage types, coverage amounts, additional insured endorsements, expiry dates, carrier name
- Upload a W-9 → AI extracts: business name, EIN/SSN, address, entity type
- Confidence scoring: high / medium / low per extracted field
- One-click human review and correction for low-confidence fields
- Approved documents stored with extracted data as structured records

**Feature 4: Expiry Tracking and Automated Alerts**
- Per-document expiry date tracking (pulled from AI extraction or manually set)
- Configurable alert schedule: 90/60/30/14/7 days before expiry
- Alert recipients: GC admin (always) + sub contact (configurable)
- Alert channels: email (MVP); SMS (V2)
- Escalation tracking: alert sent → sub acknowledged → document uploaded → approved
- Alert history log per document

**Feature 5: Compliance Dashboard**
- Overall compliance health score per account (% of subs fully current)
- Per-sub compliance status card: each required document shown as green (current) / yellow (expiring <30 days) / red (expired or missing)
- Project-level view: filter dashboard by project to see which subs are assigned and their status
- "Action required" queue: prioritized list of overdue items needing admin attention

**Feature 6: Basic Reporting**
- Compliance status report: exportable PDF or CSV snapshot of all subs and document statuses
- Expiry calendar: upcoming expiries in the next 30/60/90 days
- Audit trail: timestamps of when documents were uploaded, extracted, reviewed, and approved

**Feature 7: Document Storage**
- Secure cloud storage for all uploaded PDFs
- Organized by sub → document type → version history
- Direct link to view original uploaded document alongside extracted data

**Feature 8: Billing and Account Management**
- Stripe integration for monthly/annual subscription and LTD purchase
- Tier enforcement: 25-sub limit (Starter) / 75-sub limit (Growth) / unlimited (Enterprise)
- Usage dashboard showing current sub count vs. tier limit

### Out of Scope for MVP

These features are deliberately excluded from the MVP to maintain build velocity and validate core value before adding complexity:

| Feature | Why Deferred | Planned Release |
|---------|-------------|-----------------|
| Procore / Buildertrend integration | Requires OAuth partner approval and API implementation; adds 2–3 weeks | V2 (month 2–3) |
| State license board verification | Requires scraping or API agreements with 50 state boards; complex | V2 (month 3–4) |
| Lien waiver tracking with payment milestones | Requires payment system integration; different workflow from document collection | V2 (month 4–5) |
| OSHA certification tracking | Lower urgency than COIs/licenses; smaller target segment | V2 (month 4–5) |
| SMS alerts | Email is sufficient for MVP; SMS requires Twilio integration and compliance opt-in | V2 (month 2) |
| Sub account / SubPass network | Compelling long-term feature but adds sub-side complexity; deferred until GC side is proven | V3+ |
| AI endorsement language analysis | Requires NLP beyond standard OCR; high investment, incremental value for MVP users | V3+ |
| Multi-company / franchise accounts | Adds user hierarchy complexity; target MVP segment is single-company GCs | V3+ |
| Mobile native apps (iOS/Android) | Web-responsive MVP is sufficient; apps add significant maintenance overhead | V3+ |
| Insurance carrier API integration | Real-time policy data instead of PDF; requires carrier partnerships | Long-term |

**Explicit out-of-scope for MVP:**
- Full construction project management (we are a point solution, not a Procore replacement)
- General document storage for non-compliance documents
- Payment processing or invoicing features
- Employee HR or payroll compliance (different buyer, different workflow)

### MVP Success Criteria

The MVP will be declared successful and ready for growth investment when:

1. **Product-market fit signal:** 5+ design partners report that SubShield has replaced their compliance spreadsheet as the primary system of record (not a supplement to it)
2. **AI accuracy threshold:** OCR extraction achieves >88% field-level accuracy on a validation set of 30 real COI PDFs from at least 8 different insurance carriers
3. **Sub portal adoption:** >50% of document uploads in design partner accounts occur via the sub portal (not uploaded manually by the GC admin)
4. **Retention signal:** 0 churned design partners after 60 days of use
5. **Revenue validation:** 50+ paying customers acquired within 90 days of public launch (LTD + subscription combined)
6. **NPS threshold:** Net Promoter Score of 30+ from initial cohort (measures whether users would recommend to other GCs)

**Go/no-go decision point:** If after 90 days the AI accuracy is below 85% on ACORD forms or sub portal adoption is below 35%, pause marketing investment and prioritize the underlying technical improvements before scaling.

### Future Vision

**V2 (Months 2–5): Ecosystem Integration**

The most requested features from design partner interviews will likely converge on three themes: Procore/Buildertrend integration, lien waiver management, and state license verification. V2 makes SubShield the compliance layer that sits on top of any construction PM platform.

Key V2 capabilities:
- **Procore bidirectional sync:** Sub list imports from Procore; compliance status syncs back into Procore sub records; GCs manage one sub directory in Procore and compliance in SubShield
- **Buildertrend integration:** Same bidirectional sync pattern for the residential builder segment
- **State license verification:** Automated lookup of contractor license status and expiry against all 50 state boards; alert when a license is set to expire before project completion
- **Lien waiver management:** Track conditional and unconditional progress and final waivers per payment milestone; auto-chase missing waivers before releasing payment; integrate with Levelset or direct payment-milestone triggers
- **SMS alerts:** Configurable text message alerts for high-urgency expiries (7-day and 14-day warnings)
- **Procore App Marketplace listing:** Discovery channel for GCs already inside the Procore ecosystem

**V3 (Months 6–12): Network and Intelligence**

With a critical mass of GC accounts, V3 introduces the network effect and moves from reactive compliance to predictive compliance.

Key V3 capabilities:
- **SubPass — Subcontractor verified profile:** A portable compliance profile for subcontractors, containing their current documents verified by SubShield. Subs share their SubPass link with any GC they work with; the GC's SubShield account auto-populates from the SubPass rather than re-collecting documents. Creates a network effect: the more GCs use SubShield, the more subs maintain SubPasses, the faster new GC onboarding becomes
- **Predictive compliance scoring:** Machine learning model trained on document patterns to flag subs who are likely to lapse (based on historical renewal behavior, carrier patterns, and industry data)
- **Compliance-as-a-Service tier:** Managed service offering where the SubShield team handles all COI review, verification, and chasing; GC pays premium for zero-admin operation
- **OSHA certification tracking:** Worker-level certification tracking (OSHA 10/30, confined space, fall protection); integrates with site access control
- **API access:** Allows larger GC firms and integration partners to push/pull compliance data programmatically

**Long-Term (Year 2+): Platform and Market Expansion**

- **Insurance carrier API integration:** Direct policy data from carriers (bypassing PDF entirely); near-100% accuracy, real-time policy status
- **Canada and Australia expansion:** Similar GC/sub compliance dynamics; English-language markets; regulatory mapping required
- **White-label offering:** Insurance agencies offer SubShield to their GC clients as a value-added service under the agency's brand
- **Acquisition pathway:** Position for acquisition by Procore, Trimble, or a construction-focused insurance carrier as compliance becomes a platform-level expectation

---

## Appendix: Competitive Context

### Positioning Statement

SubShield is the **compliance layer for general contractors who use Procore or Buildertrend** — the only affordable, all-document-type compliance hub purpose-built for GCs managing 20–75 active subcontractors, at a price the SMB market can actually pay.

### Market White Space

```
                         HIGH PRICE / ENTERPRISE
                                   |
                SmartCompliance    |    myCOI
                    BCS Full-Svc   |    TrustLayer
                            Jones  |    CertFocus
                                   |
CONSTRUCTION ─────────────────────┼──────────────── MULTI-INDUSTRY
SPECIFIC                          |                 GENERIC
                                   |
                   Billy           │    Contractor Foreman
                                   │    Knowify
                    ✦ SubShield    │
                                   |
                         SMB ACCESSIBLE / AFFORDABLE
```

SubShield owns the bottom-left quadrant: construction-specific + SMB-affordable. Billy comes closest but has opaque pricing and enterprise complexity. SubShield wins on price transparency, document coverage breadth, and sub portal zero-friction.

### Channels to Market

**Primary (Launch):**
- Facebook "General Contractors" groups (50K+ members) — peer-to-peer referrals and sponsored posts
- r/contractors and r/construction — educational content and problem-aware posts
- AppSumo LTD campaign — front-loaded revenue, reviews, and word-of-mouth

**Secondary (Months 3–6):**
- AGC (Associated General Contractors) chapter newsletters — B2B credibility channel
- NAHB member communications — home builder segment outreach
- G2 and Capterra profile optimization — inbound from buyers in evaluation mode

**Partner (Months 6–12):**
- Procore App Marketplace — discovery within the Procore ecosystem
- Construction-focused insurance agencies — white-label or co-branded referral partnerships

### Pricing Strategy

| Tier | Monthly | Annual | LTD |
|------|---------|--------|-----|
| Starter (up to 25 active subs) | $49/month | $470/year (20% off) | $199 |
| Growth (up to 75 active subs) | $99/month | $950/year (20% off) | $399 |
| Enterprise (75+ active subs) | $199/month | $1,910/year (20% off) | Not available |

All tiers include: AI OCR extraction, automated alerts, sub portal, dashboard, and document storage.

The LTD pricing is the primary early acquisition driver. At $199–$399, SubShield pays for itself in the first month (1 week of saved admin time at $25–35/hr = $100–$175). ROI is immediately visible and undeniable.

---

**Product Brief Complete**
**Date:** 2026-05-11
**Status:** Ready for PRD phase
**Next Step:** create-prd workflow
