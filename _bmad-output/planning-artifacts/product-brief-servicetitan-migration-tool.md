---
stepsCompleted: [1, 2, 3, 4, 5, 6]
inputDocuments:
  - ideas/shortlisted/servicetitan-exit-data-migration-tool.md
  - _bmad-output/planning-artifacts/market-research-servicetitan-migration-tool.md
workflowType: 'product-brief'
lastStep: 6
project_name: servicetitan-migration-tool
user_name: Root
date: '2026-11-08'
author: Root
---

# Product Brief: ServiceTitan Exit & Data Migration Tool

---

## Executive Summary

Tens of thousands of HVAC, plumbing, and trades shop owners are trapped inside ServiceTitan — paying $3,000–$10,000/month, locked in by auto-renewal contracts with early termination fees as high as $67,230, and unable to leave because taking their own customer data costs thousands more. When they finally decide to escape, they face a brutal choice: hire a generic IT consultant for $5,000–$15,000 and wait 3 months, or attempt a manual export that destroys years of customer history.

The **ServiceTitan Exit & Data Migration Tool** solves this with two tracks: a $99 self-serve export tool that pulls customers, jobs, invoices, equipment history, and maintenance agreements from ServiceTitan in under 10 minutes, and a $500–$2,000 done-for-you migration service that delivers a clean, verified data transfer into Jobber, FieldPulse, Housecall Pro, or Service Fusion in 2–5 business days.

No dedicated, platform-neutral ServiceTitan exit tool exists today. The market is validated by 27 BBB complaints, active Reddit communities dedicated to ST exit, and documented price shocks ($3K → $10K/month in February 2026) driving the highest-ever switching intent. This is a Tier 1 bootstrapped opportunity with a clear path to $500K–$2M annual revenue in 18 months — built on the most powerful moat in the niche: ServiceTitan's own behavior makes the product necessary, and their API TOS restriction prevents tech giants from building it first.

---

## Core Vision

### Problem Statement

ServiceTitan is the dominant field service management (FSM) platform for mid-to-large trades businesses with ~10,800 active customers in 2026. Its retention model depends less on satisfaction than on structural lock-in:

- **Contract auto-renewal traps**: 30-day cancellation windows that go unacknowledged; cancellation notices "lost"; shops re-enrolled for another year despite written, documented notice.
- **Early termination fees**: Documented ETFs range from $16,121 to $67,230 — full remaining contract balances charged upon exit.
- **Data hostage**: ServiceTitan's API Terms of Use explicitly forbid third-party apps whose purpose is migrating customers off the platform. FieldRoutes (ServiceTitan-owned) charges $500 for a 6-field incomplete CSV export.
- **Migration failure risk**: Three data types cause most migration failures — preferred-technician assignments, membership expiry dates, and pricebook task codes. Generic consultants don't know to look for these.

For the trades shop owner who has been in ServiceTitan for 5–7 years, the data asset isn't just records — it's the customer relationships they've built. A plumber who knows Mrs. Chen's water heater age, her preferred appointment windows, and her last 12 service calls has a competitive advantage. That data, lost on migration, represents real business value.

The specific, acute pain: **shops desperately want to leave but can't bear to lose their history, and no one has built the bridge.**

### Problem Impact

- ServiceTitan processes $67B+ in annual contractor revenue; even a 2–3% annual churn of its 10,800 customers = 216–324 migration opportunities per year at conservative exit rates.
- Reddit r/fieldservicesoftwares and r/ServiceTitanFAQ have active threads on ST exit; "ServiceTitan alternatives" and "cancel ServiceTitan" are high-commercial-intent search queries.
- February 2026's documented price increase ($3K → $10K/month) created a migration demand surge that has not yet been captured by any purpose-built product.
- Shops paying $3,000–$10,000/month view a $500–$2,000 migration fee as trivial — less than 1 month's savings. Price-to-value is obvious.
- The emotional stakes are high: owners who escape ServiceTitan become extremely vocal advocates in the tight-knit trades community — driving organic word-of-mouth from every successful migration.

### Why Existing Solutions Fall Short

| Solution | Why It Fails |
|----------|-------------|
| **DIY (guides + forums)** | High failure rate; misses the 3 problematic fields; can take 60–120 days; risks data corruption |
| **Generic IT consultants** | $5,000–$15,000 entry price; not FSM-native; don't understand ST's data model (customer vs. location vs. job vs. invoice) |
| **Destination-platform migration tools (Deelo, FieldPulse)** | Destination-locked; only works if you choose their platform; not neutral |
| **ST implementation partners (TradeWeave)** | ST-certified = ST-aligned; expensive ($5K–$15K); conflict of interest |
| **ServiceTitan itself** | Actively restricts export; FieldRoutes charges $500 for 6 fields |

**The gap no one fills**: a product that is simultaneously (a) platform-neutral, (b) FSM-data-aware, (c) priced for small businesses ($99–$2,000), and (d) done-for-you at scale.

### Proposed Solution

The ServiceTitan Exit & Data Migration Tool operates on two tracks, designed to serve different customer needs and willingness-to-pay:

**Track A — Self-Serve Export Tool ($99 one-time)**
- Connect via ServiceTitan API credentials
- Extract: customers, locations, job history, invoices, equipment history, maintenance agreements
- Output: clean CSV files in pre-built import formats for Jobber, FieldPulse, Housecall Pro, and Service Fusion
- Handles the 3 high-failure fields: preferred-tech assignments, membership expiry dates, pricebook task codes
- Value: "Get your 10 years of data back from ServiceTitan in 10 minutes"
- Timeline: immediate; no human labor required

**Track B — Done-For-You Migration Service ($500–$2,000)**
- Customer submits credentials via secure intake form
- Team extracts, cleans, transforms, and maps data to destination platform
- Handles edge cases: custom fields, legacy data formats, corrupted records
- 2–5 business day turnaround; verified before formal ServiceTitan cancellation
- Value: "We've done 50+ ST migrations — we know exactly what to look for"
- Price tiers: $500 (up to 500 customer records), $1,000 (up to 2,000 records), $2,000 (unlimited + custom field mapping)

**Manual Extraction Backup (Critical Risk Mitigation)**
- API-independent extraction via in-product CSV exports and browser-assisted extraction
- Required because ServiceTitan's API TOS restricts migration-purpose applications
- Ensures the product works even if API access is revoked

### Key Differentiators

1. **Platform neutral** — the only migration tool that doesn't have a preferred destination; get your data, go wherever you want
2. **FSM-native field mapping** — understands ServiceTitan's exact data model (customer → location → job → invoice → equipment → maintenance agreement); generic tools don't
3. **Handles the 3 failure-prone fields** — preferred-tech assignments, membership expiry dates, pricebook task codes — the specific fields that cause most DIY migrations to fail
4. **Pre-built destination templates** — import-ready CSV formats for the 4 most common destinations; no reformatting required
5. **Sub-$2,000 done-for-you** — 10× cheaper than consulting alternatives; 5× faster (2–5 days vs 4–8 weeks)
6. **Data-first philosophy** — extract and verify before formally cancelling ServiceTitan; eliminates the data risk window
7. **Timing moat** — ST's API TOS restriction prevents ST-certified partners from competing; ST's own behavior is the product's best marketing

---

## Target Users

### Primary Users

**Persona: "The Trapped Operator" — Marcus, 44, HVAC Shop Owner (12 techs)**

Marcus runs a successful HVAC company in Atlanta. He's been on ServiceTitan for 6 years — his entire commercial operation runs through it: customer history, maintenance agreements, equipment records, job scheduling, invoicing. He genuinely liked ServiceTitan at $2,800/month when he signed up. Then came the February 2026 renewal: $8,400/month for essentially the same features. His account manager offered a small discount and a 3-year lock-in. He said no. ServiceTitan processed the renewal anyway.

Marcus has now documented the cancellation in writing, consulted a lawyer, and is actively on r/fieldservicesoftwares asking which platform to move to. His biggest concern isn't which platform to use next — he's already decided on Housecall Pro. His concern is: *"What happens to 6 years of customer history?"*

He needs someone who has done this before, knows ServiceTitan's quirks, and can get his data into Housecall Pro without destroying his maintenance agreement records. He'll pay $999 without negotiation if the answer is "yes, we've done this 50 times, your data will be intact."

**Key characteristics:**
- Business size: 5–25 technicians, $500K–$5M annual revenue
- ServiceTitan tenure: 2–7 years (significant data asset at risk)
- Industries: HVAC (largest segment), plumbing, electrical, pest control, appliance repair
- Technical comfort: moderate; can follow instructions but doesn't want to manage an ETL pipeline
- Purchase trigger: price increase, renewal trap, or support failure
- Willingness to pay: high ($500–$2,000 is trivial relative to $3K–$10K/month ST cost)
- Primary channel: r/fieldservicesoftwares, r/ServiceTitanFAQ, Facebook groups (HVAC Business Owners)

**What success looks like for Marcus:**
"I cancelled ServiceTitan, my Housecall Pro account has all 847 customer records with complete job history and my 23 active maintenance agreements intact. My team can look up any customer and see everything we've done for them. It took 3 days and cost me $1,200."

---

**Persona: "The Budget-Conscious Grower" — Alicia, 36, Plumbing Business Owner (6 techs)**

Alicia's plumbing company has grown from 2 to 6 techs in 3 years. She joined ServiceTitan at a discounted rate 2 years ago as a "growth customer." Now her contract is renewing at $3,900/month — twice what she was paying — and she's looking at Jobber at $395/month as an alternative. The difference is $42,000/year. She'll switch. But she's nervous about losing her customer database.

Alicia is more technically curious than Marcus. She'll try the self-serve $99 export tool if the instructions are clear. She's done minor Excel work before and feels comfortable with CSV files. If the tool clearly explains what to do, she'll handle it herself.

**Key characteristics:**
- Business size: 3–10 technicians, $200K–$1.5M annual revenue
- More price-sensitive; will try self-serve before done-for-you
- Technically curious but not a developer
- Motivated by cost savings (Jobber saves $3,500+/month)
- Purchase trigger: upcoming contract renewal with price increase

---

### Secondary Users

**Destination Platform Partners (Jobber, FieldPulse, Housecall Pro, Service Fusion)**

These platforms actively court ServiceTitan defectors with migration incentives but provide no migration tooling. A referral partnership creates mutual value:
- Migration tool sends verified, clean data to their import system
- Destination platforms refer migrating ST customers to the migration tool
- Referral fee model: $100–$300 per converted customer for the destination platform

**Recently-Exited Shops (Post-Cancellation Cleanup)**

Shops that have already formally cancelled ServiceTitan but still have messy or incomplete data exports. They need data cleaning and import assistance more than extraction. Addressable via the same Reddit and Facebook communities; slightly lower urgency but willing to pay.

**Trades Shop Advisors / Peer Networks**

HVAC and plumbing shop owners rely heavily on peer advice — a recommendation from a trusted colleague in a Facebook group or Reddit thread can generate 3–5 immediate inquiries. These network nodes aren't direct users but are critical distribution amplifiers.

---

### User Journey

**Stage 1 — Trigger Event (Day 0)**

A specific event breaks the inertia: a price increase announcement, an auto-renewal processed despite documented notice, a support failure, or a peer posting about their successful ST exit on Reddit. Marcus goes from "frustrated but inert" to "actively evaluating."

**Stage 2 — Research Phase (Weeks 1–8)**

Marcus searches: "ServiceTitan alternatives," "cancel ServiceTitan," "ServiceTitan data export." He reads Reddit threads, Capterra reviews, and BBB complaints confirming his experience is common. He identifies Housecall Pro as his destination platform. His research now surfaces the question: "How do I get my data out?"

**Stage 3 — Migration Blocker (Weeks 2–12)**

Marcus knows where he's going but is blocked by data migration fear. He asks on Reddit: "Has anyone successfully moved all their data from ServiceTitan to HCP?" This is the highest-value moment for the migration tool — a direct answer to his specific blocker. A community post or SEO content article about ST-to-HCP migration brings him to the product.

**Stage 4 — Evaluation (Days 1–3 after discovery)**

Marcus looks at pricing, reads 2–3 case studies of similar HVAC shops, and verifies that maintenance agreements and equipment records transfer completely. The done-for-you intake form removes the last friction: he fills it out in 5 minutes, pays $999, and schedules a brief credentials handoff call.

**Stage 5 — Migration Execution (Days 1–5)**

Data extracted, cleaned, and loaded into Housecall Pro. Marcus receives a verification report showing: 847 customers, 4,312 jobs, 23 active maintenance agreements, 156 equipment records. He confirms everything looks right before officially cancelling ServiceTitan.

**Stage 6 — Advocacy (Day 6+)**

Marcus posts on r/fieldservicesoftwares: "Successfully migrated from ServiceTitan to HCP — used [product], took 3 days, everything intact including my maintenance agreements. Worth every penny." This post generates 5 direct inquiries within 48 hours.

---

## Success Metrics

### User Success Metrics

**Primary user outcome**: A trades shop owner successfully migrates all customer records, job history, equipment records, and maintenance agreements from ServiceTitan to their chosen destination platform, with data verified before formally cancelling ServiceTitan, within 5 business days.

**Leading indicators of user success:**
- Successful data extraction completeness rate: ≥98% of records transferred without data loss
- Zero post-migration data quality issues requiring manual correction on 3-critical-fields (preferred-tech, membership expiry, pricebook codes)
- NPS score ≥75 (target: ≥80 by Month 12); vocal advocates in trades communities are the primary organic growth channel
- Time-to-value: done-for-you migrations completed in ≤5 business days; self-serve users extract data in ≤30 minutes

**User behavior signals:**
- Users who return to purchase quarterly backup exports (indicating they found value in the first migration)
- Referral rate: percentage of new customers sourced from peer recommendations in Reddit/Facebook communities

---

### Business Objectives

**Month 3:**
- Validate the done-for-you model: 10 paid migrations completed at ≥$500 average
- Validate pricing: ≥60% of inquiries convert to paid migration without price objection
- Validate channels: ≥3 customers sourced from Reddit/Facebook community engagement
- Establish product: publish 3 SEO articles targeting "cancel ServiceTitan," "ServiceTitan data export," "ServiceTitan to Jobber migration"

**Month 6:**
- Scale to 25–30 paid migrations/month
- Achieve $20,000–$30,000 monthly revenue (blended done-for-you + self-serve)
- 10 published case studies generating organic referrals
- Outreach initiated to Jobber/FieldPulse/HCP partner programs; ≥1 referral agreement active

**Month 12:**
- 75–100 migrations completed/month
- $60,000–$100,000 monthly revenue
- 25 SEO keywords in top 10 for "ServiceTitan [exit/cancel/alternative/migration]" cluster
- Subscription backup tier launched ($39/month quarterly exports)
- NPS ≥80; product is self-sustaining on word-of-mouth

**18-Month Strategic Objective:**
Establish the definitive brand for ServiceTitan data migration and FSM platform transitions. Evaluate: (a) expand to adjacent FSM migrations (FieldEdge, Jonas Software, Commusoft), (b) build destination HVAC FSM using migration customer base as seed, or (c) strategic acquisition by a destination platform.

---

### Key Performance Indicators

| KPI | Month 3 | Month 6 | Month 12 |
|-----|---------|---------|---------|
| Migrations completed/month | 10 | 30 | 100 |
| Done-for-you revenue/month | $8,000 | $20,000 | $65,000 |
| Self-serve tool sales/month | 15 | 60 | 200 |
| Total monthly revenue | $9,500 | $26,000 | $85,000 |
| SEO keywords top 10 | 3 | 10 | 25 |
| NPS score | 70+ | 75+ | 80+ |
| Case studies published | 3 | 10 | 25 |
| Partner referral revenue | $0 | $1,000 | $5,000 |
| Referral rate (% new customers from peers) | 20% | 35% | 50% |
| Data migration success rate | ≥95% | ≥97% | ≥98% |

**North Star Metric**: Migrations completed per month — this single number captures product value delivery, revenue generation, and word-of-mouth pipeline in one measure.

---

## MVP Scope

### Core Features

The 4–5 week MVP delivers the minimum viable migration capability required to serve "The Trapped Operator" with the done-for-you track and validate the self-serve track.

**Feature 1: ServiceTitan Data Extractor**
- API connection via ServiceTitan API credentials (OAuth or API key)
- Extract all 6 primary objects: customers, locations, jobs, invoices, equipment, maintenance agreements
- Handle API rate limits (ServiceTitan: 500 requests/minute)
- Manual extraction backup path for shops with restricted API access (in-product CSV export + parsing)
- Output: raw data in normalized JSON/CSV for processing pipeline

**Feature 2: Data Cleaner and Normalizer**
- Deduplicate customer records (common issue: same customer entered multiple times under different addresses)
- Normalize address formats (USPS-compliant)
- Standardize date formats across all objects
- Handle the 3 high-failure fields: preferred-tech assignment mapping, membership expiry date formats, pricebook task code normalization
- Flag records with data quality issues for human review (done-for-you tier)

**Feature 3: Destination Import Template Generator**
- Pre-built import format specifications for 4 destinations: Jobber, FieldPulse, Housecall Pro, Service Fusion
- Field-by-field mapping from ServiceTitan schema → destination schema
- Output clean CSV files in each destination's required import format
- Validation layer: verify field counts, required fields, format compliance before export

**Feature 4: Migration Checklist and Verification Report**
- Step-by-step migration guide for the shop owner (what to do before, during, and after)
- Pre-cancellation checklist: verify all data types are intact before formal cancellation
- Verification report: human-readable summary showing record counts by type, any issues flagged, confirmation of successful import
- "Safe to cancel" indicator: explicit confirmation that data is verified in destination platform

**Feature 5: Done-For-You Intake Form and Workflow**
- Secure intake form: collect credentials, company size, ST data age, destination platform choice
- Tiered pricing: $500 (≤500 records), $1,000 (≤2,000 records), $2,000 (unlimited + custom fields)
- Internal workflow management: assign job, track status (Received → Extracting → Cleaning → Mapping → Verifying → Complete)
- Customer communication: automated status emails at each stage
- Secure credential handling: credentials used for extraction only; not stored post-completion

---

### Out of Scope for MVP

The following are explicitly deferred to prevent scope creep and maintain a 4–5 week build timeline:

- **Adjacent FSM migrations** (FieldEdge, Jonas Software, Commusoft) — validate the ST model first
- **AI-enhanced field mapping** — LLM-powered mapping of non-standard custom fields; valuable but not needed for initial destinations
- **Contract review service** — flag auto-renewal dates and ETF calculations from uploaded contracts; important future feature
- **Destination platform recommendation engine** — analyze shop data to recommend best-fit alternative; Phase 2
- **Quarterly backup subscription** — recurring export tier ($39/month); Phase 2 revenue model
- **Destination HVAC FSM** (Track C) — building a competing FSM platform is a 12–18 month strategic decision, not MVP scope
- **Multi-language support** — US market only for MVP
- **Automated destination API import** — direct API push to destination platforms; manual CSV import is sufficient for MVP; direct import reduces friction in Phase 2

---

### MVP Success Criteria

The MVP is validated and ready to scale when:

1. **Migration completeness**: 10 consecutive done-for-you migrations completed with ≥95% data transfer rate and zero customer complaints about missing records
2. **Pricing validation**: ≥60% of inquiries convert to paid migration without price objection at $500–$2,000 pricing
3. **Self-serve validation**: ≥20 self-serve tool purchases at $99 with positive feedback on data quality
4. **Channel validation**: ≥3 organic customer acquisitions from Reddit/Facebook community engagement (non-paid)
5. **NPS threshold**: First 10 customers surveyed show NPS ≥65
6. **Business model signal**: Monthly revenue ≥$5,000 from migration fees by end of Month 2

**Go/no-go decision point (Week 8):** If 3 or more of the 6 above criteria are not met, pause and diagnose before scaling the done-for-you service.

---

### Future Vision

**Phase 2 (Months 4–9): Subscription Revenue + Platform Partnerships**

- **Quarterly backup export service** ($39/month): shops that haven't yet committed to leaving ST get "data insurance" — a clean monthly/quarterly export of their data as leverage and risk mitigation. This creates recurring revenue from the pre-migration pipeline.
- **Destination platform partnerships**: Referral agreements with Jobber, FieldPulse, HCP, Service Fusion. For each migrating customer who chooses a partner destination, the migration tool earns a $100–$300 referral fee. This aligns incentives and opens co-marketing opportunities.
- **Self-serve upload and import**: Replace manual CSV import guidance with direct API push to destination platforms (eliminating the destination import step entirely for most users)
- **Case study engine**: structured collection and publishing of migration success stories — the most powerful sales asset in the trades community

**Phase 3 (Months 10–18): Adjacent Migrations + AI**

- **Adjacent FSM migration expansion**: The ST data model knowledge transfers to other FSM platforms with similar lock-in tactics — FieldEdge, Jonas Software, Commusoft. Each new source platform adds a new addressable market without changing the core product.
- **AI-powered field mapping**: LLM-assisted mapping of non-standard custom fields and free-text job notes; reduces done-for-you review time from hours to minutes; improves self-serve success rate for complex migrations
- **Pre-cancellation risk analysis**: Automated review of extracted data to identify issues before the customer commits to cancelling ServiceTitan; positions the product as a data integrity advisor, not just an extraction tool

**Phase 4 (Strategic): The 1-2 Year Horizon**

- **Destination HVAC FSM (Track C)**: Build the competing field service management platform for small HVAC shops (5–25 techs) with migration from ServiceTitan as the free acquisition hook. The migration customer base becomes the founding user cohort for the competing platform. This is the highest-risk, highest-reward path.
- **Strategic acquisition**: The migration tool's data assets, customer relationships, and brand authority in the trades market make it an attractive acquisition target for Jobber, FieldPulse, or HCP as a customer acquisition engine.
- **Industry association partnerships**: ACCA, PHCC, NFIB could become distribution channels for the migration tool and/or the destination FSM; members consistently ask "how do I get off ServiceTitan?"

**Long-term vision**: The ServiceTitan Exit Tool becomes the trusted infrastructure layer for FSM platform transitions — the brand that any trades shop thinks of when they're considering a software switch. Whether that leads to an independent destination FSM, a strategic acquisition, or a migration platform that handles all FSM-to-FSM transitions, the foundation is built on a clear, urgent, underserved problem and a vocal community that will carry the word-of-mouth flywheel.

---

## Appendix: Risk Summary and Go-To-Market

### Top Risks

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| ServiceTitan API TOS enforcement | Medium | High | Build manual extraction backup as MVP requirement; position as "data backup service" in API-facing communications |
| ST improves exit experience | Low | Medium | Focus on content and community as durable assets independent of this risk |
| Destination platform builds free neutral tool | Medium | Medium | Speed to market in 4–8 weeks; platform neutrality remains differentiator |
| One-time revenue ceiling | Certain | Low | Subscription backup tier (Phase 2); partner referral revenue; adjacent migrations |

### Go-To-Market Summary

**Primary channel**: Organic SEO targeting "cancel ServiceTitan," "ServiceTitan data export," "ServiceTitan to Jobber migration," "ServiceTitan alternatives" — high commercial intent, low competition.

**Secondary channel**: Reddit community engagement (r/fieldservicesoftwares, r/ServiceTitanFAQ, r/HVAC, r/ProHVACR) and Facebook groups (HVAC Business Owners, Field Service Professionals) — build authentic expertise, not advertising.

**Tertiary channel**: Destination platform partnerships — co-marketing with Jobber/FieldPulse/HCP for referral revenue on each converted migration.

**Optimal entry timing**: The February 2026 price shock ($3K → $10K/month documented) has already created maximum market awareness and switching intent. No competitor has yet occupied this niche. The window to establish category leadership is open now.

---

*Product Brief completed: 2026-11-08*
*Next recommended step: Create PRD — this brief provides the foundation for detailed functional requirements, API specifications, and destination import format mapping.*
