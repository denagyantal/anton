---
stepsCompleted: [1, 2, 3, 4, 5, 6]
inputDocuments:
  - ideas/shortlisted/fire-protection-inspection-software.md
  - _bmad-output/planning-artifacts/market-research-fire-inspection-software.md
workflowType: 'product-brief'
lastStep: 6
date: '2026-05-27'
author: Root
---

# Product Brief: FireTrack — Fire Inspection Software for Solo Techs & Small Shops

---

## Executive Summary

FireTrack is a cross-platform mobile-first fire inspection application built exclusively for solo fire protection technicians and small shops (1–5 technicians). It is the only product on the market that simultaneously delivers iOS + Android native apps, pre-built NFPA 10/25/72 checklists, barcode/QR equipment scanning, auto-generated branded PDF certificates, Stripe invoicing, and offline-first operation — all at under $100/month with no annual contract and no setup fee.

The US fire protection industry comprises nearly 20,000 businesses, 60–70% of which are small independent shops. These operators are legally required to perform recurring NFPA-mandated inspections on fire extinguishers, sprinkler systems, and fire alarms for restaurants, schools, office buildings, and factories. Today they manage this work with 3–5 disconnected tools: a buggy inspection app (or paper forms), a separate invoicing app, Google Calendar, and handwritten certificates. The market's dominant tools (InspectNTrack at $1,500–2,900/yr, Inspect Point at $2,616–3,816/yr iOS-only) price out and exclude solo operators entirely.

FireTrack closes this gap with a $79/month subscription (up to 3 techs, month-to-month) and a $149 lifetime deal — delivering a 20x cost advantage over the closest full-featured alternative, with the Android support, invoicing, and offline reliability that the market has left unaddressed for years.

**One-line pitch:** The only cross-platform (iOS + Android), sub-$100/mo fire inspection tool with barcode scanning, NFPA checklists, auto-generated PDF certificates, and invoicing — built for solo techs and 2–5 person shops.

**Market opportunity:** $1.28–1.45B fire inspection software market, 11–13% CAGR, 12,000–14,000 small shops in the ICP with zero suitable options today.

**Revenue target:** $10,000+ MRR within 12 months (130 monthly subscribers at $79/mo).

---

## Core Vision

### Problem Statement

Solo fire protection technicians and small 2–5 person inspection shops have no software tool that fits their workflow, their device (Android), or their budget. They are legally required to conduct recurring NFPA-compliant inspections on thousands of commercial properties — but the software built for this job either excludes them entirely (Inspect Point: iOS-only, 2-tech minimum, $2,616/yr), is unreliable (InspectNTrack: iPad crashes, data loss, manual sync at $1,500–2,900/yr), or is missing critical workflow steps (FireNSpec: no invoicing; Fire Inspect Hub: no mobile app, no barcode scanning).

The result: a licensed fire protection technician running a one-person or two-person shop today uses paper forms for inspections, QuickBooks or FreshBooks for invoicing, Google Calendar for scheduling, and either handwritten or Word-templated certificates — four disconnected tools that each add administrative overhead to every job.

### Problem Impact

The disconnected-tool problem creates compounding costs for small shop operators:

- **Time loss:** 74% of fire safety professionals spend 15+ hours/week on manual documentation and compliance reporting (Xenia research). For a solo operator, this is 15+ hours/week that is not billable.
- **Revenue leakage:** Invoicing is the most commonly delayed step — operators finish an inspection and invoice days or weeks later because the workflow is disconnected. Some inspections go unbilled entirely.
- **Compliance risk:** Without a centralized record system, operators risk missing recurring inspection deadlines for customer sites, creating liability exposure and customer churn.
- **Data loss:** InspectNTrack users report losing inspection data when the app crashes during barcode scanning — forcing re-inspection or incomplete records.
- **Android exclusion:** Inspect Point's iOS-only stance forces Android-using technicians to purchase iPads at their own expense, or forgo digital inspection entirely.
- **Financial burden:** Operators currently paying $1,500–2,900/yr for tools that partially address these problems, with annual contracts and $500 setup fees even if the tool doesn't meet their needs.

The 47% of fire protection companies still on paper forms represent operators who looked at available software and found nothing worth buying — not operators who lack motivation to digitize.

### Why Existing Solutions Fall Short

| Problem | Best Current Option | Why It Fails |
|---------|-------------------|--------------|
| Android support | InspectNTrack | Crashes on iPad; no first-class Android app |
| Solo operator pricing | FireNSpec ($599/yr) | Missing invoicing; no recurring scheduler |
| iOS + Android + invoicing | Nothing | Gap entirely uncovered |
| No annual contract | Fire Inspect Hub | Web-only, no barcode scanning, no mobile app |
| Under $100/mo with full workflow | Nothing | True gap in the market |
| Offline inspection capability | FireNSpec, Joyfill | Neither includes invoicing or scheduling |

The competitive analysis reveals a clear structural pattern: affordable tools ($40–50/mo) are form-only with no invoicing or scheduling, while full-workflow tools ($109–500+/mo) are iOS-only, require annual contracts, and are priced for companies with 10–50 technicians. No product occupies the middle: full-workflow, cross-platform, solo-operator-friendly, under $100/month.

Fire Inspect Hub is the newest entrant targeting the same ICP, but is web-only with no native app, no barcode scanning, and no invoicing — validating the market segment while leaving the feature gap open.

### Proposed Solution

FireTrack is a React Native mobile application (iOS + Android) with a web admin panel, built specifically for the solo and small-team fire protection inspection workflow. It replaces four disconnected tools with one:

**The complete field workflow in one app:**
1. Arrive at customer site → open FireTrack on any Android or iPhone
2. Scan barcode/QR code on fire extinguisher or equipment → equipment identified
3. Complete pre-built NFPA 10, 25, or 72 checklist (works offline in basements with no cell signal)
4. Note deficiencies → auto-queued for follow-up
5. Generate branded PDF certificate on-site with NICET credentials embedded → emailed to customer
6. Create invoice via Stripe → sent immediately, not weeks later
7. Recurring inspection auto-scheduled for next annual/semi-annual visit

**Pricing designed for the ICP:**
- LTD: $149 one-time (up to 2 technicians, lifetime) — launch vehicle
- Monthly: $79/month (up to 3 technicians, unlimited customers, month-to-month)
- No setup fee, no annual contract, 14-day free trial

### Key Differentiators

FireTrack is the only fire inspection software that achieves all eight of these simultaneously:

1. **iOS AND Android native apps** — both first-class, both offline-capable (Inspect Point is iOS-only; InspectNTrack has known Android/iPad crashes)
2. **Solo-operator pricing** — 1-person shops are the primary customer, not an afterthought (Inspect Point minimum 2 techs at $2,616/yr)
3. **Invoicing built-in** — Stripe integration for on-site invoicing (FireNSpec, Joyfill, Fire Inspect Hub all lack invoicing)
4. **NFPA-specific pre-built checklists** — NFPA 10, 25, 72 are included, not generic form builders requiring hours of setup
5. **Offline-first with automatic sync** — no manual sync button, no data loss when screen goes black (InspectNTrack's most-cited review complaint)
6. **$149 LTD pricing** — zero LTD competition in this vertical; 20x savings vs. Inspect Point Year 1
7. **Month-to-month, no setup fee** — vs. annual contracts + $500 setup fees from InspectNTrack and Inspect Point
8. **Barcode + QR scanning** — equipment tracking that works (Fire Inspect Hub: web-only, no scanning)

**Competitive positioning statement:** "The fire inspection app built for solo techs and small shops — works on Android, includes invoicing, and costs less than one month of InspectNTrack."

---

## Target Users

### Primary Users

#### Persona 1: Marcus — The Solo Operator

**Background:** Marcus is 38, a licensed fire protection technician (NICET Level II) running a one-person shop in suburban Ohio. He left a larger fire protection company five years ago to work for himself. He inspects roughly 200–250 commercial properties per year — restaurants, schools, small factories, and office buildings — performing NFPA 10 portable extinguisher inspections and some NFPA 25 sprinkler work.

**Current tools:** Paper inspection forms (bought in bulk from NAFED), QuickBooks Self-Employed for invoicing, Google Calendar for scheduling, and Word templates for PDF certificates he emails from his truck.

**Devices:** Android phone (Samsung Galaxy) — he has no iPhone or iPad and has no intention of buying one.

**Daily workflow pain:** After each inspection, Marcus fills out paper forms on-site, drives to his next job, and batches his invoicing at night. Some jobs get invoiced 2–3 weeks later. He estimates he loses $800–1,200/month in delayed invoicing and forgotten follow-up visits. He tried InspectNTrack once but the app crashed twice during a scan and he abandoned it.

**Core motivation:** Reduce administrative overhead, invoice faster, keep clean records that satisfy AHJ audits, avoid buying an iPad.

**Success moment:** Completing an inspection, generating a PDF certificate, and sending the invoice — all before he leaves the parking lot. Getting paid 3 days after the inspection instead of 3 weeks.

**Willingness to pay:** Currently paying ~$150/yr for paper forms + $180/yr for QuickBooks Self-Employed = $330/yr for a broken workflow. Would pay $149 LTD in a heartbeat if it replaces all four tools reliably on Android.

---

#### Persona 2: Denise — The Small Shop Owner

**Background:** Denise is 45, owns a 3-technician fire protection company in central Texas. She does office management and some field work. Her shop inspects 600–800 properties per year across extinguishers, sprinklers, and kitchen hood suppression systems. She recently lost a technician who switched to an iPhone-only competitor company, and she's frustrated that every software vendor she calls requires a minimum 5-technician commitment and wants an annual contract.

**Current tools:** InspectNTrack ($2,900/yr, 3 licenses) — she keeps it because switching is painful, but her team complains about iPad crashes and the manual sync requirement.

**Core motivation:** Reliable cross-platform tools her technicians will actually use, with invoicing that doesn't require a separate system, and pricing that doesn't assume she's running a 15-person company.

**Success moment:** Her technicians finishing inspections on their own Android phones, certificates emailing automatically, and her dashboard showing unbilled jobs that she can invoice in one click at day's end.

**Switching trigger:** InspectNTrack crashes one more time during an audit, or she finds a tool with better Android support and invoicing that costs $79/month instead of $242/month.

**Willingness to pay:** Currently paying $2,900/yr ($242/mo). Would switch to $79/mo immediately if the Android support and invoicing are reliable. Would pay up to $149/mo before reconsidering.

---

### Secondary Users

#### Property Managers and Facility Directors

Commercial property managers are not direct users of FireTrack, but they are the customers of Marcus and Denise. They receive:
- PDF inspection certificates via email
- Compliance documentation for AHJ audits
- Deficiency reports when equipment fails inspection

FireTrack's customer portal (Phase 2) could give property managers direct access to their inspection history and compliance status — expanding the value prop beyond the technician into the buyer's organization.

#### NAFED Member Distributors

National Association of Fire Equipment Distributors (1,000+ member companies) often provide inspection services alongside distribution. These are mid-market operators (5–20 techs) who may use FireTrack as a team subscription. They are a secondary user segment that grows naturally from the solo and small-team base.

#### Insurance Carriers and AHJs (Authorities Having Jurisdiction)

Indirect stakeholders who receive inspection documentation. Insurance carriers increasingly require digital inspection records with GPS timestamps and technician credentials. AHJs accept FireTrack's PDF certificates as compliance documentation. These stakeholders create pull demand from property owners — accelerating FireTrack adoption without requiring direct marketing to them.

---

### User Journey

#### Marcus (Solo Operator) — Discovery to Habit

**Discovery:**
Marcus searches "fire inspection app Android" after his third InspectNTrack crash. He finds FireTrack via a Capterra listing (4.8 stars, "finally works on Android") or a post in the Facebook "Fire Extinguisher Service Technicians" group. He clicks the landing page, sees "works on Android, includes invoicing" above the fold. He signs up for the 14-day free trial without reading further.

**Onboarding (Day 1–3):**
Marcus downloads the Android app, adds his first customer (ABC Restaurant), scans the barcode on their fire extinguisher, completes the NFPA 10 checklist in 4 minutes, and hits "Generate Certificate." A branded PDF with his license number arrives in his email immediately. He sends it to the property manager. He then creates an invoice — $85 for the inspection — and sends it via Stripe. The whole workflow takes 8 minutes total.

**Aha Moment:**
The property manager at ABC Restaurant pays the $85 invoice within 24 hours via Stripe's credit card link. Marcus has never been paid same-week for an inspection. He converts to the paid plan the next morning.

**Core Usage:**
Marcus uses FireTrack for every inspection. His workflow is now: arrive → scan → inspect → certify → invoice → leave. His monthly invoicing backlog disappears within 60 days. He starts the recurring scheduler and notices overdue visits he had forgotten.

**Success Moment (Month 3):**
Marcus reconciles his QuickBooks and realizes his monthly revenue is up 18% — the same number of inspections, but no delayed invoicing and no forgotten follow-ups. He leaves a 5-star Capterra review: "Finally — fire inspection software that works on Android and actually has invoicing."

**Long-term Retention:**
After 12 months, Marcus has 240 customer records, 1,100 inspection reports, and recurring schedules set for all 240 properties in FireTrack. Switching cost is now high: every customer's history, every barcode, every certificate, every scheduled visit lives in FireTrack. He has not looked at alternative software since month 1.

---

#### Denise (Small Shop Owner) — Evaluation to Team Adoption

**Discovery:**
Denise hears about FireTrack from a NAFED newsletter or at a regional fire protection trade show. She's actively evaluating because InspectNTrack's contract is up for renewal and her team hates it.

**Evaluation:**
Denise evaluates FireTrack against Fire Inspect Hub and InspectNTrack. Key decision criteria: (1) does it work on Android, (2) does it include invoicing, (3) can she cancel month-to-month. FireTrack answers yes to all three. Fire Inspect Hub has no mobile app. InspectNTrack is $2,900/yr with poor Android support.

**Onboarding:**
Denise starts a team trial. She imports her customer list via CSV and assigns her three technicians. Each technician logs in on their Android phone and runs a test inspection in 10 minutes. No iPad required.

**Team Adoption:**
The technicians adopt FireTrack within one week — primarily because it works on their own phones and doesn't require manual sync. Denise tracks their work from the web dashboard.

**Success Moment:**
End of month 1: Denise reconciles revenue and realizes her team invoiced 23% faster. No missed invoices. Certificates are going out same-day instead of 3–5 days post-inspection.

---

## Success Metrics

### User Success Metrics

These are the behaviors that indicate users are getting real value from FireTrack:

| Metric | Definition | Target |
|--------|-----------|--------|
| Time-to-first-certificate | Minutes from sign-up to first PDF generated | <15 minutes |
| Inspection completion rate | % of started inspections that reach certificate generation | >85% |
| Same-day invoicing rate | % of inspections invoiced same day | >70% (vs. ~20% industry baseline) |
| Recurring scheduler adoption | % of active users with at least 5 recurring schedules set | >60% by Month 3 |
| Android usage share | % of active users on Android devices | >40% (validates core positioning) |
| Invoice paid within 7 days | % of Stripe invoices paid within 7 days of sending | >50% |
| Offline inspection sessions | % of inspection sessions with no connectivity during completion | >25% (validates offline value) |
| Customer record growth | Average customer records per active user at Month 6 | >50 customers |

**Primary user success indicator:** A solo tech who generates a certificate AND sends an invoice within the same inspection session has achieved the core value prop. Tracking this "full-loop session" rate is the most important user success metric.

### Business Objectives

**3-Month Targets:**
- 50 LTD sales ($7,450 revenue)
- 40 monthly subscribers ($3,160 MRR)
- 10+ Capterra reviews at 4.5+ average rating
- 1 NAFED community appearance (newsletter or forum post)
- Android sign-up rate >40%

**12-Month Targets:**
- 300 LTD sales ($44,700 lifetime)
- 200 monthly subscribers ($15,800 MRR)
- 50+ Capterra reviews at 4.5+ average
- NAFED conference presence (booth or sponsorship)
- 10,000+ inspections processed (validates product-market fit)
- Monthly churn <5%

**Strategic Objectives:**
- Establish FireTrack as the recognized tool for solo and small-team fire protection in the US
- Achieve top Capterra ranking for "fire inspection software" (currently InspectNTrack holds this with 56 reviews and 4.3/5 — a 4.5+ rating with 30+ reviews would rank above it)
- Build enough NAFED community presence to be considered the "endorsed" independent tool for small shops
- Reach $1M ARR as the threshold for acquisition consideration or Series A-equivalent bootstrapped growth

### Key Performance Indicators

**Revenue KPIs:**

| KPI | Month 3 | Month 6 | Month 12 |
|-----|---------|---------|---------|
| Monthly Recurring Revenue | $3,160 | $8,700 | $15,800 |
| LTD sales total | 50 | 150 | 300 |
| Average revenue per user | $79 | $79 | $79–99 |
| Annual recurring revenue run rate | $37,920 | $104,400 | $189,600 |

**Growth KPIs:**

| KPI | Month 3 | Month 6 | Month 12 |
|-----|---------|---------|---------|
| Monthly active users | 80 | 180 | 400 |
| New trials per month | 30 | 60 | 100 |
| Trial-to-paid conversion | 25% | 30% | 35% |
| Monthly churn | <10% | <7% | <5% |
| Organic referral rate | 10% | 15% | 20% |

**Engagement KPIs:**

| KPI | Target |
|-----|--------|
| Weekly active usage | >70% of paying customers use FireTrack in a given week |
| Inspections per user per month | >20 (indicates real field deployment) |
| Certificate generation rate | >90% of completed checklists generate a PDF |
| Invoice creation rate | >65% of completed inspections create a Stripe invoice |
| Recurring schedule setup | >60% of users with 10+ customers have recurring schedules |

**Leading Indicators (predict churn risk):**
- Users who complete <5 inspections in 30 days → at-risk cohort, trigger onboarding outreach
- Users who haven't used invoicing in 30 days → feature adoption gap, trigger in-app prompt
- Users with 0 recurring schedules after 60 days → educational intervention needed

---

## MVP Scope

### Core Features (Phase 1 — Months 1–2)

The MVP must deliver the complete field workflow: scan → inspect → certify → invoice. Every feature below is required to close this loop. Nothing in this list is optional.

**1. Equipment Management with Barcode/QR Scanning**
- Add customers and their locations (building name, address)
- Add equipment to each location (extinguisher, sprinkler zone, alarm panel)
- Scan barcode or QR code to identify equipment (expo-barcode-scanner or React Native Camera)
- Manual entry fallback for equipment without barcode
- Equipment history: full inspection record per equipment item

**2. NFPA 10 Inspection Checklist (Launch)**
- Pre-built NFPA 10 checklist for portable fire extinguishers (the highest-volume inspection type)
- All NFPA 10 checklist items pre-populated — no setup required by user
- Pass/fail per checklist item
- Deficiency logging with notes and photo attachment
- NFPA 25 and 72 checklists in Month 2 (sprint 2 of MVP build)

**3. PDF Certificate Generation**
- Auto-generate branded PDF inspection certificate on completion
- User's company name, logo, license number, NICET credentials embedded
- Certificate includes: equipment scanned, checklist results, deficiencies noted, technician signature, inspection date
- Email certificate to property manager directly from the app
- Store all certificates in the app for AHJ audit access

**4. Stripe Invoicing**
- Create invoice immediately after completing inspection (or from the job list)
- Line items: inspection fee, deficiency correction, equipment replacement
- Send invoice via Stripe payment link (email or SMS)
- Track payment status in the app
- Basic invoice history per customer

**5. Offline-First Sync**
- All inspection data stored locally (SQLite) and synced to cloud (Supabase/PostgreSQL) automatically
- No manual sync button — background sync on reconnect
- Inspect in airplane mode in basements, utility rooms, rooftops — no data loss
- Sync conflict resolution: local version always wins; server version never overwrites uncommitted work

**6. Customer and Schedule Management**
- Customer database: name, address, contact info, primary property manager
- Location database (multiple locations per customer)
- Manual scheduling: set next inspection date per equipment item
- Basic dashboard: upcoming inspections for the next 30 days
- Overdue inspection alerts

**7. Cross-Platform Native Apps**
- React Native iOS app (App Store)
- React Native Android app (Google Play)
- Web admin panel (React or Next.js): customer management, invoice history, report exports
- All three must be functional at launch — Android is priority for QA and testing

**8. Authentication and Multi-Technician**
- Account creation (email/password, Google OAuth)
- Up to 3 technicians per $79/mo plan
- Basic role: owner (full access) and technician (field access only)
- Technician activities visible to owner in web dashboard

**9. 14-Day Free Trial and Stripe Billing**
- Free trial on sign-up, no credit card required
- Trial converts to paid ($79/mo) or LTD ($149 one-time) at Day 14
- Stripe billing for subscriptions
- Grace period: 7 days after failed payment before account lock

---

### Out of Scope for MVP

These features are explicitly deferred. They are validated future value but would delay the 4–5 week MVP timeline without increasing core value:

| Feature | Why Deferred |
|---------|-------------|
| NFPA 25 and 72 checklists | Month 2 sprint — NFPA 10 alone covers the majority of solo tech volume |
| Recurring inspection auto-scheduler | Month 2 — manual scheduling sufficient for MVP validation |
| Compliance Engine CSV export | Phase 3 — premium upsell, not required for core workflow |
| Customer portal | Phase 2 — property managers can receive certificates via email for MVP |
| Team management (5+ techs, roles, permissions) | Phase 2 — 3-tech limit sufficient for ICP |
| GPS/photo-verified inspections | Phase 2 — insurance carrier requirement, not yet standard |
| QuickBooks/Xero integration | Phase 2 — Stripe invoicing sufficient; integration is nice-to-have |
| AI-assisted deficiency identification | Phase 3 — advanced feature, requires data volume to train |
| Multi-language support | Not in roadmap for US market focus |
| AppSumo campaign | Post-launch only — own-site LTD launch first to preserve margin |
| NFPA 96 (kitchen hood suppression) checklists | Phase 2 adjacent vertical expansion |

---

### MVP Success Criteria

The MVP is validated for scale-up investment when:

1. **Product-market fit signal:** 30+ paying customers (LTD + monthly) within 60 days of launch, with <20% churn in the first 90 days
2. **Android validation:** >40% of active users on Android devices at 30 days post-launch
3. **Invoicing adoption:** >60% of active users create at least one Stripe invoice per month
4. **Quality signal:** 4.5+ average Capterra rating with 10+ reviews by Month 3
5. **Revenue signal:** $3,000+ MRR or $5,000+ LTD revenue by Month 3

If all five criteria are met, proceed to Phase 2 (recurring scheduler, NFPA 25/72, customer portal). If fewer than three are met, investigate churn patterns before investing in Phase 2 features.

---

### Future Vision

#### Phase 2 (Months 4–6): Complete the Workflow

- **NFPA 25 and 72 checklists** — sprinkler and fire alarm inspections extend TAM and ARPU
- **Recurring inspection auto-scheduler** — auto-creates next annual/semi-annual visit at completion; sends reminders to operator and property manager 30 days before due
- **NICET credential embedding** — automatically embeds technician's NICET certification level in all certificates
- **Customer portal** — property managers self-serve their compliance documents and inspection history
- **Photo documentation** — attach field photos to deficiency items for documentation and insurance carrier requirements
- **Compliance Engine CSV export** — enables AHJ digital submission and creates premium upsell tier

#### Phase 3 (Months 7–12): Premium Tier and Enterprise Features

- **Advanced reporting** — annual inspection summary reports for property managers; technician productivity reports for shop owners
- **GPS verification** — timestamped, location-verified inspections for insurance carrier compliance
- **Multi-tech team management** — teams of 5–20, custom roles and permissions, technician scheduling
- **QuickBooks/Xero integration** — two-way sync for shop owners who use accounting software
- **Compliance Engine direct integration** — automated AHJ report submission for participating jurisdictions
- **Bulk import tools** — migrate customer and equipment lists from InspectNTrack and Inspect Point (reduces switching friction)

#### Phase 4 (Year 2): Adjacent Verticals and Ecosystem

- **NFPA 96 (kitchen hood suppression)** — same field tech workflow, adjacent market, high density in restaurant-heavy ICP
- **NFPA 101 (emergency lighting)** — life safety inspection vertical with same customer base
- **International markets** — UK, Australia, Canada have comparable fire protection industries with similar dynamics (Uptick dominates in Australia/UK but is expensive and enterprise-only)
- **Data products** — anonymized aggregated inspection data has value to insurance actuaries, building owners, and AHJs
- **Marketplace/network** — property managers post RFQs; certified fire inspectors in the FireTrack network bid; FireTrack takes transaction fee

#### Long-Term (Year 3+): Acquisition Target

At $1M+ ARR with strong Capterra reviews and NAFED community presence, FireTrack becomes an attractive acquisition target for:
- ServiceTrade (dominant FSM platform, could add fire-specific compliance tools)
- Inspect Point (could add Android support and solo pricing via acquisition)
- PE-backed fire protection roll-up operators seeking scalable software for acquired companies

The exit strategy is not required for a successful bootstrapped SaaS business, but the structural dynamics (niche vertical, regulatory moat, sticky data, community reputation) make it a natural acquisition candidate at $5–10M valuation.

---

## Go-to-Market Strategy

### Launch Sequence

**Months 1–2 (Build + Beta):**
- Recruit 15–20 beta users from r/FireProtection and Facebook "Fire Extinguisher Service Technicians" group
- Offer free lifetime access in exchange for weekly feedback calls and Capterra/G2 reviews at launch
- Core validation: Android barcode scan + NFPA 10 checklist + PDF certificate + Stripe invoice — all in one session

**Month 3 (LTD Launch):**
- Direct LTD launch via own site: $149 (1–2 techs), $249 (3–5 techs)
- Announce in r/FireProtection, Facebook fire protection groups, LinkedIn fire protection community
- NAFED member newsletter outreach (cold email or newsletter sponsor)
- Target: 50–100 LTD sales in first 30 days

**Months 4–6 (Monthly SaaS Growth):**
- Convert LTD buzz to monthly subscribers ($79/mo)
- Apply for NAFED conference sponsorship (next annual meeting)
- Google Ads: "fire inspection software Android", "InspectNTrack alternative", "Inspect Point Android"
- Build Capterra review volume from beta users and early customers
- Target: 100+ monthly subscribers, 4.5+ Capterra rating

### Channel Priority

| Channel | Reach | Conversion | Priority |
|---------|-------|-----------|---------|
| Facebook "Fire Extinguisher Service Technicians" | ~5,000 members | High (peer trust) | Tier 1 |
| r/FireProtection | ~20,000 readers | Medium | Tier 1 |
| NAFED newsletter/conference | 1,000+ companies | Very High (exact ICP) | Tier 1 |
| Capterra/G2 organic | High-intent buyers | High | Tier 1 |
| Google Ads (competitor terms) | Unlimited reach | Medium | Tier 2 |
| LinkedIn fire protection community | 10,000+ | Medium | Tier 2 |
| AppSumo | Large but off-ICP | Low | Tier 3 |

### Pricing Strategy

| Tier | Price | Terms | Target |
|------|-------|-------|--------|
| LTD Launch | $149 | Lifetime, up to 2 techs | Launch revenue, word-of-mouth |
| LTD Team | $249 | Lifetime, up to 5 techs | Small shops, NAFED members |
| Monthly | $79/mo | Month-to-month, up to 3 techs | Recurring revenue engine |
| Monthly Team | $129/mo | Month-to-month, up to 8 techs | Phase 2 mid-market |

**Pricing rationale:**
- $149 LTD represents 1-month payback vs. InspectNTrack's cheapest plan
- $79/mo is 20x less than Inspect Point's minimum annual cost ($218/mo)
- Month-to-month eliminates the #2 most-cited complaint about incumbent tools (annual contracts)
- No setup fee eliminates the #3 complaint ($500 setup fees at InspectNTrack and Inspect Point)

---

## Risk Assessment

### Key Risks and Mitigations

| Risk | Level | Mitigation |
|------|-------|-----------|
| Small TAM ceiling ($1–3M ARR) | Medium | Accept as niche SaaS; adjacent verticals expand TAM in Year 2 |
| Fire Inspect Hub execution | Medium | Ship faster; FireTrack's native mobile + barcode + invoicing is a durable moat |
| Established player response | Low | Neither InspectNTrack nor Inspect Point has addressed 3-year-old complaints; enterprise vendors don't move down-market fast |
| App Store/Play Store policy | Low | React Native + web panel hybrid reduces dependency; offline-first reduces runtime risk |
| Compliance Engine integration complexity | Low | CSV export sufficient for MVP; deep integration deferred to Phase 3 |
| NAFED community access | Medium | Approach via member newsletter, regional reps, and in-person conference; don't rely on cold DMs |
| Android quality at launch | High | Build and QA Android-first; no launch without 0 crash sessions in 50-inspection beta test |

---

## Technical Architecture Overview

**Stack recommendation (from market research and MVP scope):**
- **Mobile:** React Native (iOS + Android), expo-barcode-scanner, offline SQLite
- **Backend:** Supabase (PostgreSQL + Auth + Storage + Realtime sync)
- **PDF generation:** Server-side Puppeteer or react-native-pdf-lib
- **Payments:** Stripe (subscriptions + invoicing + payment links)
- **Hosting:** Vercel (web admin panel) + Supabase cloud
- **File storage:** Supabase Storage or S3 (PDF certificates, field photos)

**Build timeline:** 4–5 weeks for MVP with 1 React Native developer + 1 backend developer. NFPA 10 checklist only at launch; NFPA 25 and 72 in sprint 2.

**Domain/branding:** FireTrack.io or GetFireTrack.com (verify availability)

---

*Product Brief complete. Ready for PRD creation.*

*Next recommended step: `/bmad-bmm-create-prd` — build the full Product Requirements Document from this brief, with detailed feature specs, user stories, and acceptance criteria.*
