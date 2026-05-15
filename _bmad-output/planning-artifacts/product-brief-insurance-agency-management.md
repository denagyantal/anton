---
stepsCompleted: [1, 2, 3, 4, 5, 6]
inputDocuments:
  - ideas/shortlisted/insurance-agency-management-system.md
  - _bmad-output/planning-artifacts/market-research-insurance-agency-management.md
workflowType: product-brief
lastStep: 6
research_type: product-brief
research_topic: insurance-agency-management
user_name: Root
date: 2026-05-15
---

# Product Brief: Insurance Agency Management System (AgencyCore)

---

## Executive Summary

Small independent insurance agencies — the 30,000+ shops with 1–5 agents writing over half of all US P&C premiums — are stuck in a pricing dead zone. The enterprise AMS options (AMS360, Applied Epic, EZLynx) start at $350–$600/month for a 3-person shop. The only "affordable" alternative, Jenesis, is Windows-only, barely maintained, and lacks basic automation. The result: roughly 25% of small agencies still run their books on Excel spreadsheets, accepting missed renewals and manual commission reconciliation as an unavoidable cost of doing business.

No full-featured, modern, cloud-based Agency Management System exists at a flat price under $100/month. This is not a gap that might close — incumbents are structurally incapable of filling it. Their per-user pricing models and enterprise sales motions make a genuine $89/month flat-fee offer impossible for them to match without destroying their existing revenue.

**AgencyCore** is the modern AMS built specifically for 1–5 agent independent P&C agencies — client and policy tracking, automated renewal reminders, commission split calculation, and a carrier document vault — at a flat $89/month with no per-user fees. A 3-person agency pays $89/month on AgencyCore versus $532/month on HawkSoft or $550–$600/month on EZLynx. The math sells itself.

The opportunity is validated at every layer: 40,000+ target agencies confirmed, competitor pricing gaps independently verified, zero AMS products on AppSumo (confirmed first-mover opportunity), explicit price-complaint community signals across Insurance-Forums.com and r/Insurance, and a growing wave of new independent agencies formed by agents leaving captive carriers — agencies with no legacy AMS baggage and high urgency to get organized.

**Recommended path:** 4–6 week MVP targeting P&C personal lines → AppSumo LTD launch at $59–$149 tiers → seed community channels → transition to $89/month flat MRR. Conservative 10% penetration of the 30,000 small-agency market yields $2.7M ARR.

---

## Core Vision

### Problem Statement

Independent insurance agencies with 1–5 agents are professionally managing millions of dollars in annual premiums using tools that would embarrass a solo consultant. The category is caught between two extremes:

1. **Enterprise AMS platforms** (AMS360, Applied Epic, HawkSoft, EZLynx): Built for 20–100 person brokerages. Per-user pricing starts at $94–$200/user/month, meaning a 3-person P&C shop pays $300–$600/month minimum — before setup fees, training costs, and optional module add-ons. UIs haven't meaningfully changed since 2008. Support is consistently rated poorly for small accounts. Vendor relationships are opaque and adversarial.

2. **Spreadsheets and carrier portals** ($0/month, but enormous hidden cost): The fallback for agencies that can't justify $300–$600/month. Manual renewal tracking means missed expirations and lost clients. Manual commission reconciliation from 5–10 carrier PDFs every month means lost revenue and undetected errors. No centralized client record means policy history is scattered across email threads, paper files, and carrier portal logins.

There is no credible option between these extremes. The pricing dead zone — a cloud-based, modern-UI AMS at flat $50–$99/month for a small team — is completely unoccupied.

### Problem Impact

The consequences of this gap are documented and measurable:

- **Renewal slippage**: Agencies on spreadsheets regularly miss the optimal renewal outreach window (90/60/30 days pre-expiration). Even one lost renewal per month represents $1,500–$6,000 in lost annual premium commission.
- **Commission errors**: Agencies managing 5–10 carrier relationships manually report losing 3–6% of earned commissions annually to billing discrepancies that go undetected.
- **Operational fragility**: When a solo agent's "system" is a personal spreadsheet, the entire agency knowledge base is one laptop failure or resignation away from disaster.
- **E&O exposure**: Activity logs and communication records are required for Errors & Omissions defense. Agencies on spreadsheets have no audit trail.
- **Competitive disadvantage**: Agents using modern AMS are the first to reach clients at renewal time, with automated outreach sequences that spreadsheet users can't replicate manually.

The emotional impact is equally significant. Agents describe the daily spreadsheet ritual — manual renewals check, carrier portal hopping, monthly commission reconciliation — as exhausting and embarrassing. The language used in forums is not frustration; it's resignation. They've accepted this as the cost of being small.

### Why Existing Solutions Fall Short

| Solution | Price (3 Users) | Core Failure for Small Agency |
|----------|----------------|-------------------------------|
| Applied Epic | $1,500–$15,000+/mo | Enterprise product; $10–25K setup; requires outside consultant |
| AMS360 (Vertafore) | $450–$600/mo | Opaque "call for pricing"; outdated UI; hated by agents who can't afford it |
| HawkSoft | $532/mo | Best support in category, but per-user pricing ($250 base + $94/user) is still $532/mo for 3 people |
| EZLynx | $550–$600/mo | Aggressive 1–3 year contracts; 3.3/5 support rating; "EZLynx hell" is a known community term |
| QQCatalyst | $387/mo | Per-user at $129/user; same problem |
| NowCerts/Momentum AMP | $214/mo | Brand confusion post-2024 rebrand; still per-user; limited review base |
| Jenesis | $150–$210/mo | Cheapest option, but Windows-only; no automation; no renewal reminders; not being developed |
| AgencyZoom | $149–$349/mo | CRM overlay, not a real AMS — lacks policy management, document vault, commission tracking |
| **Gap** | **$0–$149** | **No cloud-based, full-featured AMS with flat pricing exists in this range** |

The structural reason no incumbent fills this gap: all established AMS vendors generate revenue on per-user pricing. Offering flat-rate $89/month would cannibalize their existing customer base. This isn't a gap they've overlooked — it's a gap they're structurally prevented from filling.

### Proposed Solution

**AgencyCore** is a cloud-based Agency Management System built from the ground up for independent P&C agencies with 1–5 agents. It is not a stripped-down enterprise tool — it's a focused product that delivers the five workflows small agencies actually need, at a price point that makes business sense for a sub-$750K revenue operation.

**The five core workflows:**

1. **Client & Policy Database** — Insurance-native data model: clients linked to multiple policies, each with carrier, policy number, type, effective/expiration dates, premium, and coverage summary. Search by client, carrier, expiration date range. Full policy history in one place, accessible in seconds during a live client call.

2. **Renewal Reminder Automation** — A visual renewal pipeline showing every policy expiring in the next 90/60/30 days. Automated email (and SMS) outreach sequences trigger at configurable intervals without manual intervention. Agents manage exceptions, not logistics. Renewal retention goes up; weekly Excel-checking ritual goes away.

3. **Commission Split Calculator** — Upload carrier commission statements. System matches payments to policies, flags discrepancies, calculates agent splits, and produces a monthly commission ledger. Replace the CSR's personal spreadsheet with a shareable, auditable record. Catch the under-payments before they disappear.

4. **Carrier Document Vault** — Centralized storage for policy documents, certificates of insurance, quote comparisons, binders, and client correspondence. Organized by client and policy. One-click retrieval during client calls. E&O-defensible activity log included.

5. **Book-of-Business Reporting** — Expiring policy dashboard by time period, carrier, or agent. Revenue forecast from upcoming renewals. Commission ledger summary. The reports a 1–5 person agency actually needs — not the 200-page enterprise report suite no one reads.

**Pricing:** $89/month flat for up to 5 users. No per-user fees. Same price whether you're 1 person or a team of 5. Month-to-month, no contract, free data export on cancellation.

**The positioning:** "Everything a small agency needs to run the book — client records, renewal automation, commission tracking, and document storage — at $89/month for the whole team. No per-user trap. No contract. Up and running this afternoon."

### Key Differentiators

1. **Flat pricing that eliminates the per-user trap** — "One flat price, no per-user fees" is a 7-word sentence that converts. A 3-person agency saves $443–$511/month vs. HawkSoft or EZLynx. The pricing model itself is the primary marketing message.

2. **Built for 1–5 agent agencies, not scaled down from enterprise** — The feature set, UX, and onboarding are designed for an owner-operator who is also the primary producer and CSR. No consultant required. No 3-week implementation. Operational within 2 hours.

3. **Month-to-month with free data export** — The single biggest trust barrier in the AMS category is "what happens if I want to leave?" AgencyCore answers this upfront: no contract, cancel anytime, full data export as CSV. This removes the fear-of-commitment objection that keeps agents on bad systems.

4. **Modern, clean UI** — All established AMS products have interfaces that look and feel like Windows 2008. AgencyCore is built for 2026 — responsive, clean, accessible from any device. For the growing cohort of new agency owners in their 30s and 40s, UI quality is a buying signal.

5. **LTD option as conversion wedge** — No incumbent can or will offer a lifetime deal. AppSumo LTD removes the monthly cost objection for the most price-sensitive agents (solo agents, newly formed agencies) and generates the social proof (G2/Capterra reviews) that drives subsequent MRR conversion at scale.

6. **First-mover AppSumo presence** — Zero insurance AMS currently on AppSumo (confirmed via live search). AgencyCore is the first credible entrant in an untapped vertical, with access to AppSumo's ~800K subscriber base of bootstrapped small-business buyers.

---

## Target Users

### Primary Users

#### Persona 1: Linda — The Solo Independent Agent

**Background:** Linda is 42, has been in insurance for 14 years, spent 10 of them at a captive carrier, and went independent 4 years ago. She runs a 1-person P&C shop with 340 active personal lines policies (auto, home, renters, umbrella). Annual premium volume ~$1.1M. She works from a home office and handles everything herself: client service, new business, renewals, and back-office.

**Current Setup:** Linda uses Google Sheets for everything. She has a mastersheet with every policy, sorted by expiration date. She reviews it every Monday morning, identifies what's coming up in the next 30–60 days, and manually sends renewal follow-up emails one by one. She tracks commissions by downloading PDFs from each of her 9 carrier portals at month end and cross-referencing against her sheet. The whole process takes her most of Saturday. She's considered EZLynx twice but can't justify $350/month for a 1-person operation.

**Day-to-Day Pain:**
- Monday morning renewal ritual takes 90 minutes and is the thing she dreads most each week
- Lost two clients last year to competitors who "called them first" before she got to them at renewal time
- Pretty sure one carrier has been under-paying her commissions for 6 months but can't prove it without spending a full day going through statements
- When a client calls and asks "what does my home policy cover?", she has to log into the carrier portal while they're on hold — her spreadsheet doesn't have coverage details

**What Would Make Her Say "This Is Exactly What I Needed":**
- A renewal dashboard she can trust: see 90 days of expirations at a glance, confirm automated emails went out, just handle the exceptions
- Commission reconciliation that shows her exactly which carrier paid what against what was expected — in under 30 minutes
- Client record with full policy details so she can answer questions without logging into carrier portals during calls
- Saving $260/month vs. EZLynx while getting better functionality

**Acquisition Path:** AppSumo LTD; r/InsuranceAgent Reddit thread recommendation; Insurance-Forums.com technology forum post

---

#### Persona 2: Kevin — The Small Agency Principal

**Background:** Kevin is 55, runs a 4-person P&C agency in suburban Atlanta. The team: Kevin (producer/owner), two producers, and a CSR named Diane who manages all the back-office work. The agency writes personal and small commercial lines. Annual premium volume ~$3.2M. Kevin has been on HawkSoft for 6 years, pays $532/month, and tolerates it — but the per-user bill doubles every time he hires someone, and the interface makes him feel like he's using Windows 2000.

**Current Setup:** HawkSoft cloud for the core AMS. Diane maintains a separate Excel commission ledger because HawkSoft's commission module "never quite worked right." Kevin pays $532/month for HawkSoft + Diane's manual commission time (4–6 hours/month). Total friction: the software is adequate, the price is irritating, and the UI is dated enough that recruiting younger producers is harder than it should be.

**Day-to-Day Pain:**
- Every new hire costs an immediate $94/month increase in software fees — Kevin resents this
- Diane's commission spreadsheet is a single point of failure; if she's out sick on statement day, nobody knows how to run the reconciliation
- Two producers expressed that the HawkSoft UI "looks ancient" in a way that suggests it undermined their confidence in the agency's professional image
- Renewal automation is basic — Diane manually generates and sends renewal reminders, which costs her 3–4 hours per week

**What Would Make Him Say "This Is Exactly What I Needed":**
- Flat pricing: the $532/month bill (and the anxiety every time he thinks about hiring a 5th person) goes away
- Commission tracking built into the platform so Diane isn't the only person who understands the commission process
- Modern UI that doesn't make the agency look like it's operating out of 1998
- Self-service onboarding — Kevin doesn't want to sit through a 2-hour vendor demo

**Acquisition Path:** Insurance-Forums.com AMS comparison thread; Big "I" state chapter meeting; Google search "HawkSoft alternative flat rate"

---

#### Persona 3: Jenna — The New Agency Owner

**Background:** Jenna is 34, just launched her own independent P&C agency 8 months ago after 6 years as a producer at a regional broker. She has 85 policies and is growing fast. She has no legacy AMS — she started with Google Sheets because she didn't have time to evaluate software in the first hectic months. She knows she needs an AMS but has been overwhelmed by the options and the pricing.

**Current Setup:** Google Sheets + Gmail + a folder of carrier portal bookmarks. She's technically comfortable (grew up digital), understands what she needs, and has been actively evaluating NowCerts and Jenesis for the past 3 weeks. She found Jenesis through a Reddit thread but the Windows-only architecture is a dealbreaker. NowCerts/Momentum AMP pricing is confusing post-rebrand and she doesn't trust unclear pricing.

**Day-to-Day Pain:**
- Spreadsheet is already straining at 85 policies — she knows it won't scale past 200
- No automated renewal reminders means she has to manually track and send every follow-up
- No commission tracking at all — she's estimating her monthly income from memory
- Every carrier lives in a different portal; she spends 20–30 minutes per client service call toggling between tabs

**What Would Make Her Say "This Is Exactly What I Needed":**
- Self-serve signup, transparent flat pricing, working in under 2 hours
- The first automated renewal email going out without her touching it
- Commission tracking that shows her exactly what she earned this month and from which carrier
- Something that looks modern and professional — consistent with the brand image she's trying to build

**Acquisition Path:** AppSumo LTD (price-sensitive, no prior AMS investment); Reddit r/InsuranceAgent thread; Google search "affordable AMS new agency"

**Note: Jenna is the highest-value ICP.** No switching cost, high urgency, moldable expectations, and years of compounding LTV ahead. Prioritize onboarding experience for her profile.

---

### Secondary Users

#### Persona 4: Diane — The Agency CSR

**Background:** Diane is the CSR at Kevin's agency. She's the primary power user of the AMS, spending 5–7 hours/day in the system. She handles client service calls, policy changes, claims follow-up, and the monthly commission reconciliation. She is not the buyer but she determines whether adoption succeeds or fails post-purchase. If AgencyCore makes Diane's job easier, Kevin keeps the subscription forever. If it doesn't, Kevin cancels within 60 days.

**Role in Product:** Renewal outreach management, commission statement upload and reconciliation, document vault organization, client record maintenance.

**Success Indicator:** Diane completes the monthly commission reconciliation in 90 minutes instead of 4–6 hours, without maintaining a parallel spreadsheet. She can pull a client's full policy history — all policies, all documents — in one click during a live call. She stops maintaining the backup Excel file because the system is reliable enough to trust.

---

### User Journey

#### Discovery

- **Trigger:** A missed renewal, a bad HawkSoft/EZLynx support interaction, a billing dispute, or a peer recommendation in a Facebook group or forum
- **Search behavior:** "AMS360 alternative," "HawkSoft flat rate," "affordable AMS small agency," "insurance agency software under $100" — high-intent, moderate-competition search terms
- **AppSumo:** A Sumo-ling in insurance or an adjacent field discovers the LTD; tags it in an independent agents Facebook group; thread grows organically
- **Forum discovery:** Insurance-Forums.com AMS thread — Linda or Kevin posts "switched from HawkSoft, paying $89/month now for the same functionality" — the thread drives 50+ new evaluations

#### Onboarding

- **Day 1 (target: <2 hours to operational):** Sign up → import policies via CSV from existing system or spreadsheet template → connect carrier commission statement formats → configure renewal outreach sequences → invite team members
- **Day 2:** First automated renewal reminder fires without manual intervention. Linda opens the dashboard, sees 18 policies expiring in the next 60 days, 12 with automated emails already scheduled. This is the "aha!" moment.
- **Week 2:** First commission statement uploaded. System matches 94% automatically; flags 2 discrepancies for manual review. Kevin calculates he recovered $600 in under-payments in the first month.

#### Core Usage

- **Daily:** Open renewal dashboard (replaces spreadsheet ritual). Review pending client items. Pull policy documents during calls.
- **Weekly:** Review upcoming renewal pipeline. Confirm outreach sequences are firing. Update policy statuses (renewed, lapsed, in progress).
- **Monthly:** Upload carrier commission statements. Review reconciliation report. Run book-of-business summary for agency revenue forecasting.

#### Success Moment

- **For Linda:** The Monday she opens her laptop and all the renewal outreach is already handled — she just reviews exceptions.
- **For Kevin:** The first month-end commission reconciliation Diane runs without the backup spreadsheet.
- **For Jenna:** The first automated renewal email sent to a client she's never had to manually follow up with.

#### Long-Term Retention

- Data gravity: moving 300+ policies with full history is painful — same retention mechanism incumbents exploit, now working in AgencyCore's favor
- Commission history, renewal sequence templates, and document vault create deep switching costs over time
- Word-of-mouth: insurance is a relationship business; satisfied agents tell peers at state association meetings and in forum threads with specificity ("saving $443/month vs. HawkSoft" is a sentence that travels)

---

## Success Metrics

### User Success Metrics

| Metric | Target | Measurement Method |
|--------|--------|--------------------|
| Renewal reminders sent without manual intervention | ≥80% of expiring policies within 60 days of signup | Product analytics: automated sends / total renewals due |
| Commission reconciliation time | <2 hours/month for agencies with ≤8 carriers | User-reported survey at 30 and 90 days |
| Time-to-operational (signup → first automated reminder configured) | <2 hours | Funnel analytics: signup → first automated email configured |
| Policy data import completion | ≥70% of signups complete CSV import within 48 hours | Product analytics: import flow completion rate |
| Weekly active usage | ≥65% of subscribers log in ≥3x/week | Product analytics |
| Net Promoter Score | ≥50 (vs. EZLynx/HawkSoft NPS ~15–20 estimated from review data) | In-app NPS at 30 and 90 days |

**The "aha!" moment to design for:** The first time an automated renewal email goes out to a client without the agent lifting a finger. The entire onboarding flow should be architected to get agents to this moment within the first session.

### Business Objectives

**3-Month Targets (Post-LTD Launch):**
- 200–350 LTD customers at $59–$149 tiers (AppSumo launch)
- 30+ verified reviews on Capterra and G2 (minimum 4.2/5 average)
- Validate that renewal automation and commission tracking — not just pricing — drive the "worth it" decision
- Identify and document the 3 most common objections during the post-AppSumo trial-to-MRR conversion

**12-Month Targets:**
- 500+ active paying customers (LTD + MRR combined)
- $350K–$450K ARR run rate from MRR subscribers
- Listed and reviewed on Catalyit (the primary AMS discovery directory agents use)
- At least one Big "I" or PIA state chapter technology session or mention

**24-Month Targets:**
- 2,000+ active paying customers
- $2.1M ARR (approximately 8% penetration of the 25,000–30,000 small-agency market at $89/month average)
- IVANS carrier download integration in beta with 3+ carriers
- Considered a credible primary alternative in "AMS360 alternative" and "HawkSoft alternative" searches

### Key Performance Indicators

| KPI | 3-Month | 12-Month | 24-Month |
|-----|---------|---------|---------|
| Total Paying Customers | 300 | 500 | 2,000 |
| ARR | ~$0 (LTD phase) | $400K | $2.1M |
| Monthly Churn Rate | — | <3% | <2% |
| NPS Score | ≥40 | ≥50 | ≥55 |
| Capterra/G2 Reviews | 30+ | 100+ | 200+ |
| Renewal Automation Adoption Rate | ≥65% within 14 days | ≥80% | ≥85% |
| Commission Reconciliation Adoption | ≥45% | ≥65% | ≥75% |
| CAC (blended) | — | <$120 | <$80 |
| LTV (projected at $89/mo) | — | $3,200 (36-month avg) | $4,000+ |
| LTV:CAC | — | ≥27:1 | ≥50:1 |

**Leading indicators to monitor weekly (first 90 days):**
- AppSumo refund rate (target: ≤12%)
- "Time to first automated renewal configured" (onboarding proxy)
- Commission statement upload rate (stickiness proxy)
- Insurance-Forums.com and Reddit sentiment mentions

---

## MVP Scope

### Core Features

The MVP is scoped to the five workflows that directly address the top documented pain points: renewal slippage, commission reconciliation errors, lack of centralized policy records, and document chaos. Everything else is explicitly post-MVP.

#### Feature 1: Client & Policy Database (Priority: Critical)

- **Insurance-native data model:** Client profiles → linked policies (multiple per client) → policy fields: carrier, policy number, type (auto/home/renters/umbrella/commercial BOP/etc.), effective date, expiration date, premium, coverage summary notes
- **CSV import** — Import from HawkSoft, AMS360, EZLynx exports and from a provided spreadsheet template; column mapping UI for custom formats
- **Policy status lifecycle** — Active, Expired, Cancelled, Non-Renewed, Pending
- **Client communication log** — Timestamped notes on calls, emails, and policy changes per client/policy record
- **Search and filter** — By client name, carrier, policy type, expiration date range, agent (if multi-user)
- **Policy count per subscription tier** — Unlimited for $89/month plan

**Acceptance criteria:** An agent can import their full policy book from EZLynx or a spreadsheet within 60 minutes. Full client and policy history is searchable and accessible in under 5 seconds. Data integrity confirmed post-import.

---

#### Feature 2: Renewal Reminder Automation (Priority: Critical)

- **Renewal pipeline view** — Visual list/calendar of all policies expiring in the next 90, 60, 30, and 14 days; sortable by carrier, expiration date, agent
- **Automated email sequences** — Configurable triggers at 90/60/30/14 days before expiration; per-sequence email templates with client/policy variable substitution
- **Email template library** — 5 pre-built insurance-appropriate renewal outreach templates (personal lines, commercial BOP, lapse warning); fully editable
- **Renewal status tracking** — Mark policies as: Renewed, Not Renewing, In Progress, Awaiting Client Response, or Sent to Carrier
- **Manual override** — Suppress automation for specific policies or entire clients (e.g., non-renewing accounts)
- **Delivery log** — Record of every automated email sent, with timestamp and delivery status

**Acceptance criteria:** An agent can configure renewal automation for their full book within 30 minutes of import. Automated emails fire without manual intervention at configured intervals. Dashboard accurately reflects real-time policy status. Agent can confirm at a glance which policies have upcoming automated outreach scheduled.

---

#### Feature 3: Commission Split Calculator & Ledger (Priority: High)

- **Commission statement upload** — Accept CSV, Excel (.xlsx), and text-extractable PDF formats from carriers
- **Automated statement matching** — Match line items to policies by policy number; flag unmatched line items for manual review
- **Expected vs. received tracking** — Set expected commission rate per carrier/policy type; flag when received deviates by >$X or >X% threshold (configurable)
- **Agent split configuration** — Define commission split percentages per agent for shared-book scenarios (producer splits, house accounts)
- **Monthly commission ledger** — Exportable PDF and CSV showing all transactions: carrier, policy, expected, received, delta, agent allocation
- **Carrier profiles** — Store commission rate schedules per carrier; template library for common carriers (State Farm, Progressive, Travelers, etc.)

**Acceptance criteria:** An agent can upload a carrier commission statement and get a reconciled/unreconciled breakdown within 5 minutes. Discrepancies are clearly flagged with policy-level detail. Monthly commission ledger is exportable and audit-ready.

---

#### Feature 4: Carrier Document Vault (Priority: High)

- **Document upload and storage** — Store any file type (PDF, Word, Excel, image) per client or per policy record
- **Document categorization** — Policy document, certificate of insurance, quote comparison, binder, correspondence, claim document, other
- **Quick retrieval** — Search documents by client, policy, document type, or date; retrieve in under 3 seconds
- **Activity log** — Timestamped record of all documents uploaded, viewed, and downloaded (E&O-defensible audit trail)
- **Storage limits** — 5GB included per subscription; upgrade path available

**Acceptance criteria:** An agent can find and retrieve any stored document for a live client call within 30 seconds. Activity log provides timestamped record of all document access for E&O defense purposes.

---

#### Feature 5: Book-of-Business Reports (Priority: Medium-High)

- **Expiring policies report** — All policies expiring in a configurable time window (30/60/90/180 days), with carrier, premium, renewal status, and assigned agent
- **Revenue forecast** — Estimated commission income from upcoming renewals based on carrier commission rate profiles
- **Commission summary** — Monthly earned vs. received commission by carrier, with total discrepancy amount
- **Policy count snapshot** — Active/expired/cancelled counts by policy type and carrier; book composition view
- **CSV export** — All reports exportable as CSV for external analysis

**Acceptance criteria:** Agency owner can generate a book-of-business snapshot, expiring policy report, and monthly commission summary in under 2 minutes each.

---

#### Feature 6: Multi-User & Agency Setup (Priority: High)

- **Flat-fee team seats** — Up to 5 users at $89/month; no per-user fees within the plan limit
- **User roles** — Principal (full access + billing), Producer (own policies + clients), CSR (all client/policy records + documents; no billing)
- **Agency branding** — Agency name and logo on renewal emails and exported documents
- **Basic audit trail** — Log of who created/modified policy records, uploaded documents, and ran commission reconciliations

---

#### Feature 7: Billing & Subscription (Priority: Critical)

- **Stripe integration** — Monthly and annual billing (annual at ~15% discount)
- **LTD code redemption** — AppSumo one-time purchase code support (Tier 1: $59/1-user; Tier 2: $99/3-user; Tier 3: $149/5-user)
- **Self-serve plan management** — Upgrade/downgrade without contacting support
- **Cancellation and data export** — Full data export as CSV at any time, including post-cancellation for 30 days; no lock-in

---

### Out of Scope for MVP

Explicitly deferred to preserve a 4–6 week build timeline:

| Feature | Rationale for Deferral |
|---------|------------------------|
| IVANS carrier download / real-time carrier sync | Requires carrier partnership agreements; complex integration; V2 moat-builder |
| Direct carrier API integrations | Same as IVANS — partnership-gated; not needed for V1 value |
| Comparative rater | A full product category; out of scope entirely at launch |
| ACORD form auto-fill | High-value but technically complex; Phase 2 after core AMS is validated |
| E-signature workflow (DocuSign/HelloSign) | Adds scope; PDF download covers MVP use case |
| Native SMS renewal reminders | Email-only at launch; Twilio integration in V2 |
| Client-facing portal | Post-MVP; add after core agent workflow is stable |
| Mobile app (iOS/Android) | Web-first with responsive design covers mobile use; native app is V2 |
| AI-powered commission statement parsing | Feature layer on top of core product; Phase 3 |
| Claims tracking workflow | Important but not the #1 pain point at this agency size; V2 |
| Commercial lines ACORD library | Phase 2; MVP focuses on personal lines P&C which has simpler feature set |
| Carrier commission API feeds | Requires carrier partnerships; statement upload is sufficient for MVP |
| Two-way carrier portal sync | Enterprise-tier; not viable for MVP |

**Communicating scope to early users:** "AgencyCore handles the five things that eat your week as a small P&C agency: tracking clients and policies, automating renewal outreach, reconciling commissions, storing carrier documents, and reporting on your book. We're not trying to be AMS360. If you need raters, ACORD forms, and carrier downloads all in one, we're not there yet. If you need those five workflows done right for $89/month for your whole team, we are."

---

### MVP Success Criteria

Gates to transition from MVP (LTD acquisition mode) to V1.1 (MRR growth focus):

| Gate | Target | Timeline |
|------|--------|----------|
| LTD customers acquired | ≥200 | 60 days post-AppSumo launch |
| AppSumo refund rate | ≤12% (AppSumo average is ~15%) | 60-day refund window |
| NPS (LTD cohort) | ≥40 | 45 days post-purchase |
| Capterra / G2 reviews | ≥30, average ≥4.0/5 | 90 days post-launch |
| Monthly churn (MRR customers) | ≤5% | First 3 MRR months |
| Renewal automation activation | ≥60% of signups use it within 14 days | Product analytics |

**Decision point:** If all gates are met at 90 days, shift budget from LTD acquisition to MRR conversion and begin IVANS carrier download partnership outreach for V2.

---

### Future Vision

AgencyCore's 3-year trajectory is to become the default operating system for the independent P&C agency — the system of record for client, policy, commission, and document data. The MVP is the wedge; the moat is built through data depth and workflow lock-in:

**Phase 2 (Months 6–18): Workflow Automation Layer**
- ACORD form auto-fill from policy records (top 20 personal and commercial lines forms)
- Native SMS renewal outreach via Twilio integration
- E-signature workflow for ACORD forms (DocuSign/HelloSign integration)
- Chrome extension for carrier portal auto-fill from AgencyCore data
- AI-assisted commission statement parsing (OCR + extraction from any carrier format)

**Phase 3 (Months 18–36): Carrier Integration Moat**
- IVANS carrier download integration for real-time policy sync with major carriers
- Automated commission feeds from IVANS-connected carriers
- Predictive renewal risk scoring (which clients are most likely to shop at renewal?)
- Cross-agency benchmarking ("your renewal retention vs. similar agencies")
- Native mobile app (iOS and Android)

**Phase 4 (36+ Months): Platform & Ecosystem**
- MGA/wholesale white-label: MGAs offer AgencyCore to their agent networks as a value-add retention tool
- Carrier-sponsored access: carriers subsidize AgencyCore for agents in their preferred programs
- Embedded insurtech integrations: comparative raters (EZLynx, Turborater), client portals (GloveBox), e-delivery platforms connect to AgencyCore as the data source
- Acquisition target: consistent SMB SaaS multiples in this vertical run 4–6x ARR; $2M ARR builds a credible exit story

**The 5-year vision:** AgencyCore is the data layer for the independent P&C agent. Carriers, MGAs, and insurtech platforms integrate with it rather than the reverse. The agency that moves to AgencyCore in year 1 never moves off it, because every policy, every commission history, every client document, every renewal record is there — and that gravity compounds every year.

---

## Go-to-Market Summary

### Launch Strategy

**Phase 1 — AppSumo LTD (Months 1–2):**
- List at three tiers: $59 (1 user/500 policies), $99 (3 users/unlimited), $149 (5 users/unlimited + priority support)
- Target: 300–500 LTD buyers across tiers
- Simultaneous organic seeding: Insurance-Forums.com technology threads (authentic participation, not spam), r/InsuranceAgent, Independent Insurance Agents Facebook groups
- Goal: Seed reviews on Capterra/G2, validate onboarding flow, surface the 3–5 most common real-world pain points

**Phase 2 — MRR Conversion (Months 3–6):**
- LTD cohort becomes word-of-mouth engine; begin converting trial/LTD users to $89/month
- Public pricing page live with monthly/annual options
- Catalyit directory listing application
- SEO content targeting: "HawkSoft alternative," "AMS360 alternative," "affordable AMS small agency," "insurance agency software $89"

**Phase 3 — Association & Partnership (Months 6–18):**
- Apply for Big "I" (IIABA) technology vendor relationship and state chapter presentation slots
- PIA chapter introductions
- Approach Smart Choice, Keystone, or Arrowhead cluster networks about bundled access for their member agencies
- Insurance Journal editorial pitch: "How flat-rate pricing is breaking the AMS cost trap for small agencies"

### Pricing Architecture

| Plan | Price | Users | Target Segment |
|------|-------|-------|----------------|
| Solo | $49/month | 1 user | Solopreneur agents, newly formed agencies |
| Agency | $89/month | Up to 5 users | Primary target — small independent agency |
| Annual | $890/year (~$74/mo) | Up to 5 users | Retention incentive; ~17% discount |
| LTD Tier 1 (AppSumo) | $59 one-time | 1 user, 500 policies | Solo agent; seed user base |
| LTD Tier 2 (AppSumo) | $99 one-time | 3 users, unlimited policies | Small agency core use case |
| LTD Tier 3 (AppSumo) | $149 one-time | 5 users + priority support | Full small agency; upsell |

**Primary positioning message:** "HawkSoft charges $532/month for a 3-person agency. EZLynx charges $550–600/month. AgencyCore is $89/month for your whole team. Same renewal automation, commission tracking, and client records. Different math."

---

## Risk Summary

| Risk | Severity | Mitigation |
|------|----------|------------|
| "Will you still exist in 3 years?" trust objection | High | Transparent roadmap with public changelog; founder name and story attached; AppSumo refund policy as safety net |
| Data migration friction kills trial-to-paid conversion | High | Free migration guide + CSV import from EZLynx/HawkSoft/Excel on Day 1; optional 30-min onboarding call for first 100 users |
| NowCerts/Momentum AMP drops to flat-rate pricing | High | Speed to AppSumo first; build review moat before incumbent pricing resets; flat-rate is still a model they can't easily adopt without cannibalization |
| E&O documentation requirements vary by state | Medium | Legal disclaimer on all activity log features; consult with one insurance attorney before launch; focus on P&C personal lines where requirements are well-defined |
| High support burden from non-technical users | Medium | Loom video library per feature; in-app tooltips; office hours for first 90 days; async support-first model |
| Commission statement format changes break matching | Medium | Community-contributed carrier statement templates; quarterly format review; fallback to manual upload always available |
| AgencyZoom adds policy management to compete directly | Low–Medium | Commission reconciliation + document vault are not on AgencyZoom's roadmap; their CRM-overlay positioning is structurally different |
| Small agency market M&A consolidation reduces TAM | Low | New independent agency formation is net positive; consolidation events create AMS churn opportunities for the agencies that survive |

---

## Brief Metadata

- **Product:** Insurance Agency Management System (working name: AgencyCore)
- **Pipeline Score:** 94/105 (Tier 1 Strong Opportunity)
- **Brief Date:** 2026-05-15
- **Market Research Completed:** 2026-05-15
- **Next Step:** Create PRD (`run-bmad-pipeline.sh` → prd step)
- **Author:** Root (Automated Pipeline)
- **Workflow:** BMAD product-brief workflow, autonomous execution

_This product brief serves as the strategic foundation for the AgencyCore PRD. All subsequent architecture, design, and development work should trace back to the vision, user needs, and success criteria documented here._
