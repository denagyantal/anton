---
stepsCompleted: [1, 2, 3, 4, 5, 6]
inputDocuments:
  - ideas/shortlisted/google-lsa-trades-crm.md
  - _bmad-output/planning-artifacts/market-research-google-lsa-trades-crm.md
workflowType: 'product-brief'
lastStep: 6
research_topic: 'google-lsa-trades-crm'
user_name: 'Root'
date: '2026-11-22'
author: Root
---

# Product Brief: Google LSA-Native CRM for HVAC/Plumbing Trades

---

## Executive Summary

**Product Name:** LSATrack CRM *(working title)*

**One-Line Pitch:** The only CRM that shows HVAC and plumbing shops exactly which Google Local Service Ad leads turned into booked jobs, completed invoices, and profit — zero CRMs integrate with LSA today.

**Category:** Vertical SaaS / Field Service Management CRM

**Stage:** Pre-launch, MVP definition

**LTD Price:** $299–499 (acquisition hook); $49–149/month recurring (long-term model)

The HVAC and plumbing contractor market spends over $11 million per month on Google Local Services Ads — and not a single CRM platform closes the loop from LSA lead to paid invoice for small shops. The median HVAC contractor spends $4,766/month on LSA, generates a 9.55x return when properly tracked, yet 58% of LSA leads do not convert to booked appointments due to missed calls, poor follow-up, and zero attribution tooling. This is a large, stable, cash-rich industry segment that has been systematically ignored by enterprise platforms (ServiceTitan) and underserved by mid-market tools (Jobber, HouseCallPro).

The proposed product occupies a confirmed whitespace: **LSA ROAS attribution at SMB-accessible pricing**. No existing platform occupies this position. The only direct competitor (Crewbird) is a solo-founder indie project, validating the market gap at the product level while confirming the window is still open.

The go-to-market is built on a tightly defined LTD offer to the trades community (r/HVAC, r/plumbing, Facebook contractor groups, ACCA chapters), transitioning to a monthly SaaS subscription after product-market fit validation. The product's core technical moat is the Google Ads API LSA integration — achievable via documented API endpoints, but deprioritized by every incumbent for the SMB segment.

---

## Core Vision

### Problem Statement

HVAC, plumbing, and electrical contractors are among the highest-spending Google Local Services Ads customers — yet they operate completely blind on return. A shop spending $4,766/month on LSA has no native tool to answer the most basic question: *which of these leads actually made me money?*

The LSA lead lives in Google Ads. The job lives in Jobber or HouseCallPro. The invoice lives in QuickBooks. ROAS is calculated by hand, on Sundays, by owners who have already exhausted themselves running the field. Most shops never calculate it at all.

The specific gap: Google folded LSA into the main Google Ads interface in 2025–2026, increasing LSA's prominence and legitimacy. LSA now appears in 40% of all local searches and captures 13.8% of SERP clicks. Yet as LSA became a first-class advertising product, the attribution chain for the shops spending money on it only got more complex. No SMB-focused FSM vendor has responded by building native closed-loop attribution — because their primary revenue comes from enterprise clients (ServiceTitan) or generalist feature parity (Jobber/HouseCallPro).

The pain is confirmed at multiple levels:
- The Crewbird founder's November 2026 HN thread: *"12 different trackers per hour just to find a snippet of information"* — multiple commenters immediately validated the gap
- HouseCallPro explicitly acknowledges that "per-channel attribution on answered calls is not part of the native story"
- ServiceTitan's Marketing Pro add-on solves it but costs $63,000+/year for a 10-tech shop — inaccessible to the 2–10 technician SMB segment
- 58% of unique LSA leads in December 2024 did not convert — many due to missed calls or slow follow-up — costing shops thousands per month in wasted ad spend

### Problem Impact

For a shop spending $4,766/month on LSA — the median spend — the inability to attribute revenue to leads creates several compounding losses:

1. **Wasted ad budget:** Without knowing which LSA categories and service types close profitably, shops cannot optimize their LSA configuration. They over-bid on low-margin jobs and under-bid on high-margin ones.

2. **Missed leads:** LSA's algorithm rewards fast response. Without CRM-integrated lead arrival alerts, shops miss calls and lose leads they already paid for. At $51 CPL for HVAC, every missed call is $51 in the trash.

3. **Unbillable lead costs:** LSA charges for spam calls, out-of-area requests, and wrong-service inquiries unless formally disputed. Without tooling that surfaces dispute eligibility at the CRM level, shops absorb these costs silently.

4. **Strategic blindness:** Owners cannot decide how much to increase or decrease LSA budgets because they have no revenue-to-spend data. The business feels opaque even to the person running it.

5. **Competitive disadvantage:** The small percentage of HVAC shops that do track LSA attribution (via manual CSV exports and spreadsheet reconciliation) achieve dramatically better ROAS — 9.55x closed ROAS vs. the industry average. The data-driven minority is winning market share from the data-blind majority.

### Why Existing Solutions Fall Short

| Platform | LSA Lead Ingest | ROAS Attribution | SMB Price (<$300/mo) | Verdict |
|----------|----------------|------------------|----------------------|---------|
| ServiceTitan + Marketing Pro | Yes | Yes | No ($63K+/yr) | Priced out of SMB |
| HouseCallPro | Yes (native) | No | Yes | Closest but missing the core feature |
| Jobber | No | No | Yes | No LSA integration at all |
| FieldEdge | No | No | Partial | HVAC-specific but LSA-blind |
| Workiz | Partial | No | Partial | Call tracking but no attribution |
| Crewbird | Yes | Yes (early) | Unknown | Solo-founder, no distribution |

The fundamental issue is not technical complexity — it is prioritization. The Google Ads API provides the `LocalServicesLead` resource, `ProvideLeadFeedback` API, and CRM download capabilities needed to build this integration. The barrier is that no SMB-focused FSM vendor has treated this as a priority, because their revenue model rewards feature breadth over vertical depth.

### Proposed Solution

A purpose-built CRM for HVAC, plumbing, and electrical contractors that makes Google LSA attribution automatic, invisible, and actionable:

**Core flow:**
1. LSA lead arrives → automatically pulled from Google Ads API every 10 minutes (or via webhook)
2. Lead opens in CRM with call recording, lead type, and charge status visible
3. Owner or dispatcher books the job in one click (no double entry)
4. Technician completes job on mobile app → job status updates automatically
5. Invoice synced to QuickBooks → revenue associated with the originating LSA lead
6. ROAS dashboard updates in real time: spend vs. revenue, by service type, by time period

**What this enables:**
- Shop owner sees, at a glance, that "emergency HVAC repair" LSA leads close at 68% with a $580 average ticket, while "HVAC installation estimate" leads close at 23% with high no-show rates
- Dispatcher gets an alert when a new LSA lead arrives, with average response time displayed (critical for LSA algorithm ranking)
- Google review request fires automatically after job completion, feeding the LSA ranking flywheel
- Unbillable leads are flagged automatically for dispute with one-click submission

**The strategic wedge:** The product enters as an "LSA attribution tool" — something HouseCallPro users specifically need and cannot get from their current platform. It wins on a single differentiating feature, then expands into the full CRM relationship.

### Key Differentiators

1. **Native Google LSA integration — the only SMB-accessible option.** The product's core value proposition is architecturally unavailable in any sub-$300/month FSM tool. This is not a feature gap that competitors can close overnight — it requires API partnership, integration development, and vertical-specific product thinking.

2. **ROAS dashboard that speaks the owner's language.** Not "conversions" or "impressions" — dollars in vs. dollars out, by service category, by technician, by month. HVAC owners understand money, not marketing metrics.

3. **Built for 2–10 tech shops, not 50-tech enterprises.** No implementation cost. No dedicated admin required. Field techs can use it after a 10-minute onboarding. This is the anti-ServiceTitan.

4. **Lead dispute management at the CRM level.** Every other tool makes disputing bad LSA leads a manual, forgotten process. This product surfaces dispute candidates automatically and submits them in one click — directly recovering money for shops.

5. **Google review closing loop.** After job completion, the product sends a review request and routes positive reviews back to the Google Business Profile that feeds LSA ranking — creating a compounding flywheel that improves LSA performance over time.

6. **Timing advantage.** Google's consolidation of LSA into Google Ads is making attribution complexity worse, not better. The window is now.

---

## Target Users

### Primary Users

#### Persona 1: Mike — HVAC Owner-Operator, 5 Technicians

**Background:** Mike has run his HVAC shop for 11 years in suburban Ohio. He does $1.8M in revenue, splits between residential service, maintenance agreements, and new equipment installs. He has 5 field technicians and one office coordinator. He uses HouseCallPro for scheduling and invoicing.

**LSA context:** Mike started on LSA 18 months ago after his old Google Ads agency stopped performing. He now spends $3,200/month on LSA. He checks the LSA app obsessively — or rather, he used to, before Google discontinued it in January 2025. Now he checks Google Ads on his phone while he's driving between jobs, confused by the new interface.

**Pain points:**
- He genuinely does not know if LSA is profitable. He knows he gets calls from it, but when his wife asks "is the Google thing working?", he can't answer the question with data.
- He has tried to reconcile LSA spend vs. revenue in a spreadsheet twice. Both times he got halfway through, something broke in the field, and he never finished.
- He has had bad leads — a guy who called from 3 hours away, two Spanish-language calls that weren't serviceable — and he thinks he's being charged for them, but he's never disputed anything because he doesn't know how.
- HouseCallPro syncs LSA leads into his job inbox, but it doesn't tell him what his LSA spend is or what revenue came from it.

**Success vision:** Mike opens the app on Monday morning and sees: "LSA spend last week: $780. Revenue from LSA jobs: $6,400. ROAS: 8.2x." He adjusts his LSA budget for this week based on that number. He does this in 2 minutes before his first coffee.

**Discovery path:** Mike will find this product through r/HVAC or a Facebook group post showing a screenshot of the ROAS dashboard. He will buy if the demo makes sense and the price is under $500 one-time or under $100/month.

---

#### Persona 2: Sarah — Office Manager, 8-Tech Plumbing Shop

**Background:** Sarah manages operations for a mid-sized plumbing contractor. She handles dispatching, customer calls, invoicing, and marketing reporting. The owner trusts her to evaluate and recommend software. She is frustrated that she cannot answer his weekly question: "how are the Google ads performing?"

**LSA context:** The shop spends $5,500/month on LSA for plumbing and drain services. Sarah exports a CSV from Google Ads once a month, opens it in Excel, tries to match call timestamps against their ServiceMax records, and gives up after an hour because the data doesn't line up cleanly. She uses this incomplete data to generate a report she describes as "directionally accurate."

**Pain points:**
- The manual attribution process is time-consuming and unreliable. She cannot distinguish which calls came from LSA vs. organic Google vs. their website.
- She receives no alert when a new LSA lead arrives — she checks manually every few hours.
- She has never disputed a bad LSA lead because the dispute process requires going to a separate interface and filling out a form she doesn't have time for.

**Success vision:** Sarah's weekly report is auto-generated: LSA leads, booked rate, revenue, and ROAS — all pulled automatically. She emails it to the owner on Friday afternoon without spending more than 5 minutes on it.

**Discovery path:** Sarah will find this through a comparison article ("HouseCallPro vs. LSATrack CRM") or a YouTube video targeting "HVAC/plumbing CRM with Google LSA integration." She evaluates software carefully, reads reviews, and runs a 14-day trial before recommending anything.

---

### Secondary Users

#### Field Technician (Reluctant Adopter)

**Background:** 3–8 years in the trades, primarily works on iOS or Android. Hates software that slows him down or requires back-office thinking.

**Key need:** A mobile-first job completion interface that requires as little input as possible. The ideal: tap "job complete," add a photo if needed, and move on. The product must be designed for one-handed use in the field.

**Success vision:** The technician opens the app when he arrives on site, sees the customer and job details from the LSA lead, marks completion with one tap, and gets a prompt to request a Google review from the customer. Total interaction: 45 seconds.

**Risk:** Technician resistance is the #1 CRM adoption killer in the trades. If the mobile app requires significant data entry, adoption will collapse within 60 days of launch, regardless of how strong the owner dashboard is. The product must solve this.

---

#### Bookkeeper / QuickBooks User

**Background:** Part-time bookkeeper who handles QuickBooks reconciliation for a 4-tech HVAC shop. Not a primary user, but a critical integration stakeholder.

**Key need:** Invoices from the CRM must flow to QuickBooks automatically with correct line items, tax codes, and customer records. Any double-entry requirement will generate immediate pushback and slow adoption.

**Success vision:** Invoices created in LSATrack CRM appear in QuickBooks within 10 minutes, properly categorized, with no manual intervention.

---

### User Journey

#### Discovery (Month 0)

Mike or Sarah encounters the product through one of:
- A post in r/HVAC or "HVAC Business Owners" Facebook group showing a ROAS screenshot
- A Google search for "HVAC CRM Google LSA integration" (keyword with zero current results for a native product)
- A comparison article targeting "HouseCallPro alternatives with LSA tracking"
- A YouTube video: "How to track Google LSA ROI for your HVAC company"

The discovery is typically passive — they were not looking for a new CRM, they were looking for a way to answer the ROAS question. The product needs to show up in that moment.

#### Evaluation (Week 1–2)

Mike visits the landing page, watches a 90-second demo showing the LSA lead arriving in the app, the ROAS dashboard updating, and the Google review request firing. He reads 3–5 reviews from other HVAC owners (critical: peers, not generic SaaS users).

He signs up for a 14-day free trial. No credit card required.

He connects his Google Ads account (OAuth, 2 clicks). Within 24 hours, his existing LSA leads are populated in the system. He sees his lead history with call recordings. He manually closes out the last 10 jobs to see ROAS for the first time.

**The aha moment:** Seeing the ROAS number for the first time, calculated automatically, is the conversion event. Everything before this is funnel; this is activation.

#### Onboarding (Week 2–3)

The shop onboards in stages:
1. Google Ads API connection (day 1 — owner does this during trial)
2. QuickBooks integration (day 2–3 — bookkeeper assists)
3. LSA lead flow enabled (automated)
4. Field tech app installation (week 2 — brief training session)
5. First automated invoice-to-QuickBooks sync (validation milestone)

The onboarding sequence should be guided in-app, with milestone celebrations (first LSA lead synced, first ROAS report generated, first dispute flagged).

#### Core Usage (Ongoing)

**Daily:** Dispatcher opens the web app, sees new LSA leads in the queue, books jobs, monitors response time metrics.

**Weekly:** Owner reviews ROAS dashboard — spend vs. revenue, trending up or down, which service categories are performing.

**Post-job:** Technician marks job complete on mobile. System fires review request to customer. Invoice syncs to QuickBooks.

**Monthly:** System flags bad leads for dispute, submits automatically with one-click confirmation. LSA budget recommendation generated based on seasonal demand data.

#### Long-Term Value

The product becomes the single source of truth for LSA-driven business. As the shop accumulates 6–12 months of attribution data, the system can:
- Surface seasonal ROAS patterns ("December HVAC emergency calls close 2x better than September")
- Recommend LSA budget adjustments before peak season
- Show which technicians have the highest customer review rate from LSA jobs
- Benchmark the shop's ROAS against anonymized industry averages

This historical data depth creates lock-in that is difficult to replicate by migrating to another tool.

---

## Success Metrics

### User Success Metrics

**Primary user success indicator:** Shop owner can answer "what was my ROAS from Google LSA last month?" within 30 seconds of opening the app — without manual calculation.

**Activation metric:** User connects Google Ads account AND views their first automatically generated ROAS report within 7 days of trial start. This is the "aha moment" event.

**Engagement metrics:**
- Owner opens the ROAS dashboard at least once per week (indicates ongoing reliance on the product vs. casual use)
- Dispatcher uses the LSA lead queue daily (indicates operational integration, not just reporting)
- Tech marks ≥80% of jobs complete via mobile app (indicates field adoption, the most fragile link in the chain)

**Outcome metric:** Customers who actively use the dispute management feature recover an average of $200–400/month in bad lead charges — a concrete, measurable ROI that drives word-of-mouth.

**Google review metric:** Shops using the auto-review request function generate 3–5x more Google reviews per month than pre-product baseline — improving their LSA ranking and creating visible, attributable value.

### Business Objectives

**90-day objectives:**
- 50 paying customers (beta LTD at $99 or early-access pricing)
- NPS > 40 from initial cohort
- Validated that average LSA spend in customer base exceeds $1,500/month (confirms target segment alignment)
- Zero critical defects in Google Ads API integration

**6-month objectives:**
- 200+ paying customers
- $60,000–$150,000 in LTD revenue
- Churn rate < 5% monthly in SaaS phase
- AppSumo listing live (secondary channel validation)
- G2 and Capterra profiles with ≥20 verified reviews

**12-month objectives:**
- 500+ customers
- $15,000+ MRR in SaaS phase
- Average ARPA ≥ $125/month
- Net revenue retention ≥ 110% (upsell from Solo → Team tier)
- Brand recognition in core HVAC/plumbing communities: "LSATrack" mentioned unprompted in r/HVAC threads

**Strategic objective:** Become the first CRM platform that HVAC/plumbing shop owners recommend specifically for Google LSA integration — establishing brand moat before HouseCallPro ships native attribution (estimated 18–24 month competitor response window).

### Key Performance Indicators

| KPI | Target (90 days) | Target (12 months) | Measurement |
|-----|-----------------|-------------------|-------------|
| Paying customers | 50 | 500 | CRM count |
| Monthly recurring revenue | — | $15K | Stripe dashboard |
| Trial-to-paid conversion | >25% | >30% | Funnel analytics |
| Activation rate (ROAS report view in 7 days) | >60% | >70% | In-app event tracking |
| Weekly active users (owner dashboard) | >50% of customers | >60% | In-app event tracking |
| Tech mobile adoption | >60% of techs per shop | >75% | Mobile session data |
| Monthly churn rate | <8% | <5% | Subscription analytics |
| Average LSA spend tracked per customer | >$1,500/mo | >$2,500/mo | Aggregated API data |
| NPS | >35 | >50 | Quarterly NPS survey |
| Google disputes recovered per customer | >$200/month | >$300/month | Dispute tracking module |
| Community mentions (r/HVAC, Facebook groups) | 5+ organic | 25+ organic | Manual monitoring |

**The ultimate product validation metric:** Average ROAS visibility score — defined as the percentage of a shop's LSA spend that has closed-loop revenue attribution in the system. Target: ≥80% of LSA spend attributable within 90 days of onboarding. This measures whether the product is actually solving the core problem, not just being installed.

---

## MVP Scope

### Core Features

The MVP must deliver exactly one thing flawlessly: **close the loop from LSA lead to revenue, automatically.** Every other feature is secondary.

**Feature 1: Google LSA Lead Ingest (Must-Have)**
- Google Ads API integration pulling `LocalServicesLead` resource every 10 minutes
- Displays: lead ID, service requested, customer phone/name, call recording link, charge status (charged/not charged), lead type (phone/message)
- Push notification to owner/dispatcher when new lead arrives
- Response time timer visible from lead detail view (rewards fast response for LSA algorithm)

**Feature 2: Lead → Job → Invoice Workflow (Must-Have)**
- One-click lead conversion to booked job (no duplicate data entry)
- Job card: customer info, service requested, scheduled tech, job notes
- Invoice creation from job completion with line items
- Job status transitions: New Lead → Booked → In Progress → Completed → Invoiced

**Feature 3: LSA ROAS Dashboard (Must-Have)**
- Weekly/monthly view: LSA spend vs. LSA-attributed revenue
- Broken down by: service category, time period, technician (future)
- Key numbers: leads received, leads booked, revenue generated, ROAS ratio
- Trend line: ROAS over the last 12 weeks
- Data source: Google Ads API (spend) + completed invoices (revenue)

**Feature 4: Mobile App — iOS and Android (Must-Have)**
- Technician view: today's jobs, job detail, one-tap job completion
- Photo attachment for job documentation
- Post-completion: Google review request prompt (SMS or email, one tap)
- Offline capability: job can be completed without signal, syncs when connected

**Feature 5: QuickBooks Online Integration (Must-Have)**
- Automatic invoice sync to QuickBooks on job completion
- Customer record sync (create/update)
- Payment recording sync
- Two-way sync for existing customer records during onboarding

**Feature 6: LSA Lead Dispute Management (Should-Have for MVP)**
- Automatic flagging of potential unbillable leads (out-of-area, wrong service, duplicate)
- One-click dispute submission via Google Ads API `ProvideLeadFeedback`
- Dispute status tracking (pending/approved/denied)
- Monthly recovery report: how much was reclaimed via disputes

**Feature 7: User Management (Must-Have)**
- Owner/admin role: full access including billing, integrations, and reports
- Dispatcher role: lead queue, booking, job scheduling
- Technician role: mobile app only (job list, completion, photos)
- Invitation-based onboarding for each role

### Out of Scope for MVP

The following features are explicitly deferred to prevent scope creep and maintain focus on the core attribution problem:

- **Multi-channel attribution** (Facebook Ads, Yelp, organic) — LSA-only for MVP; add other channels post-PMF
- **Maintenance agreement tracking** — valuable for HVAC but not part of the LSA attribution wedge
- **Flat-rate price book** — important for field efficiency but not differentiating for MVP
- **Customer portal / self-service booking** — high complexity, deferred to v2
- **Multi-location support** — target single-location shops for MVP; multi-location is a growth-tier feature
- **AI lead scoring / call transcription** — Google provides call recordings; AI analysis of recordings is a v2 feature
- **Zapier / API access** — deferred post-launch; prioritize direct integrations first
- **Estimates / quote management** — basic jobs only for MVP; full estimating workflow is v2
- **Inventory / parts management** — out of scope for entire MVP phase
- **Payroll integration** — out of scope; focus on revenue-side attribution, not cost-side

**Decision rationale:** Everything out of scope is either (a) already handled by incumbent tools that shops currently use alongside this product, or (b) adds complexity without differentiating the core LSA attribution value proposition. Shops should be able to use LSATrack CRM *alongside* their existing tools during transition — it replaces the attribution gap, not the entire FSM stack, until it has earned the right to do so.

### MVP Success Criteria

The MVP is validated and ready for growth investment when:

1. **50 paying customers** are live and processing LSA leads through the system
2. **≥80% of customers** report they can now answer "what was my LSA ROAS last month?" within 30 seconds (NPS survey question)
3. **Tech mobile adoption ≥60%** — meaning field technicians are actually using the app, not just owners
4. **Churn rate <8% monthly** after the first 60 days (indicates real value delivery, not just trial excitement)
5. **Google API stability confirmed** — 99.5%+ uptime for LSA lead sync over 30 days with no data loss incidents
6. **At least 3 unprompted testimonials** from customers referencing LSA attribution or dispute recovery as the primary value
7. **At least 1 customer** who can demonstrate measurable improvement in LSA ROAS (e.g., 15%+ improvement) attributable to data-driven budget adjustments enabled by the product

**Go/no-go decision:** If criteria 1–4 are met at 90 days post-launch, proceed to Series A growth investment. If criteria are not met, conduct 10 customer interviews and iterate before scaling.

### Future Vision

**Phase 2 (Months 4–9): Full CRM**

Once the LSA attribution wedge is established and PMF is validated, expand into full CRM capabilities that make switching costs prohibitive:
- Maintenance agreement tracking and auto-renewal reminders
- Customer equipment history (every unit serviced, age, last maintenance date)
- Full estimating workflow with flat-rate price book integration
- Multi-channel attribution (Google Ads, Facebook, Yelp, referral)
- Automated follow-up sequences (LSA lead didn't answer → SMS in 2 hours → call reminder in 24 hours)

**Phase 3 (Months 9–18): Intelligence Layer**

As the platform accumulates attribution data across hundreds of shops:
- Seasonal ROAS benchmarking: "Your HVAC ROAS is 8.2x — the top quartile in your market is 11.4x. Here's what they're doing differently."
- Budget optimization recommendations: "Based on your historical data, increasing LSA budget 40% in December will likely return 2.1x the investment"
- Lead quality scoring: AI-powered analysis of call recordings to flag high-intent vs. price-shopping callers
- Technician performance benchmarking: which techs generate the most repeat customers and reviews from LSA jobs

**Phase 4 (Year 2+): Platform Expansion**

- Multi-location support (shops growing from 1 to 2–5 locations)
- White-label / franchise support (HVAC franchise groups with centralized LSA management)
- Vertical expansion: pool service, pest control, roofing, landscaping (identical LSA pain points)
- Embedded financing integration (Wisetack-style consumer financing for large HVAC installs)
- Acquisition target readiness: at 2,000+ customers with strong retention data, the platform becomes attractive to HouseCallPro, Workiz, or private equity roll-ups in the trades software space

**The 5-year vision:** LSATrack CRM becomes the dominant CRM platform for home service contractors with 1–20 technicians who use Google LSA as their primary acquisition channel — a market that will only grow as LSA's share of local search continues to expand. The company owns the attribution layer for the trades industry and uses that data advantage to deliver continuously compounding value that no horizontal CRM can replicate.

---

## Competitive Positioning Summary

| Dimension | LSATrack CRM | HouseCallPro | Jobber | ServiceTitan |
|-----------|-------------|-------------|--------|-------------|
| LSA lead ingest | Native | Native | None | Via Marketing Pro |
| LSA ROAS attribution | Core feature | Missing | Missing | Via Marketing Pro ($$$) |
| Target segment | 2–10 techs | 1–10 techs | 1–20 techs | 10+ techs |
| Annual cost (5-tech shop) | $588–$1,788 | $1,788–$3,588 | $1,668–$2,388 | $63,000+ |
| Implementation required | Zero | Minimal | Minimal | $4K–$15K |
| LSA dispute management | Native | Partial | None | Via Marketing Pro |
| Mobile-first field app | Yes | Yes | Yes | Yes |
| QuickBooks integration | Yes | Yes | Yes | Yes |

**Core positioning:** LSATrack CRM enters the market as a **focused attribution tool** priced as an affordable CRM. It wins on the one feature that no competitor provides at SMB pricing — LSA ROAS attribution — and uses that wedge to earn the right to become the shop's primary operational platform over time.

---

## Go-To-Market Summary

**Phase 1 (0–3 months): Community-Led Beta**
- Channels: r/HVAC, r/plumbing, Facebook contractor groups, targeted HouseCallPro user outreach
- Offer: Beta access at $99 (fully refundable) — filters for motivated buyers
- Goal: 50 paying customers, PMF validation

**Phase 2 (3–9 months): LTD Launch**
- Channels: Same community channels + limited AppSumo listing
- Offer: Lifetime Deal at $299–499 (tiered by shop size)
- Goal: 200–500 customers, $60K–$150K in LTD revenue, brand establishment

**Phase 3 (9–24 months): SaaS Transition**
- New acquisition: SEO (LSA-specific keywords), YouTube, trade association partnerships (ACCA, PHCC)
- Transition: LTD buyers offered upgrade to recurring for advanced features
- Goal: $200K+ ARR, 2,000+ customers, acquisition discussions

---

## Risk Register

| Risk | Probability | Impact | Mitigation |
|------|------------|--------|-----------|
| HouseCallPro adds native LSA attribution | High (18–24mo) | High | Build 12+ month lead time; go deep on features HCP can't replicate quickly; build brand loyalty in community |
| Google changes LSA API access policies | Medium | High | Build on official Google Ads API only; maintain Google Ads Partner status; CSV import fallback path |
| Crewbird raises funding and scales | Medium | Medium | Execute faster; build community presence before they get distribution; consider founder outreach |
| Technician resistance kills adoption | High | High | Zero-friction mobile design; job completion in <45 seconds; never require field-team data entry |
| LTD buyers are not qualified customers | Medium | Medium | Gate LTD with questionnaire (number of techs, monthly LSA spend ≥$500); only sell to active LSA accounts |
| AppSumo deal-chasers overwhelm support | Medium | Low | Limit LTD to 500 customers; prioritize community channels over AppSumo for niche vertical |

---

*Product Brief for Google LSA-Native CRM for HVAC/Plumbing — completed 2026-11-22*
*Next step: `create-prd` — full Product Requirements Document*
