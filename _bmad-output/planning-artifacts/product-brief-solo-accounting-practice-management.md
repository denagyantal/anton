---
stepsCompleted: [1, 2, 3, 4, 5]
inputDocuments:
  - ideas/shortlisted/solo-accounting-practice-management.md
  - _bmad-output/planning-artifacts/market-research-solo-accounting-practice-management.md
workflowType: product-brief
lastStep: 5
date: 2026-11-24
author: Root
product_name: ProPractice
idea_slug: solo-accounting-practice-management
---

# Product Brief: ProPractice — Solo Accounting Practice Management

---

## Executive Summary

Solo CPAs and bookkeepers are caught in a painful pricing squeeze: they pay $176–245/month for a fragmented stack of four separate tools (QBO Accountant/Intuit Accountant Suite + Karbon + DocuSign + Calendly) that they use at less than 50% combined capacity. The existing purpose-built alternatives are either overbuilt and over-priced for a solo operator (Karbon at $59/user, TaxDome at $1,500/year minimum) or under-featured (Financial Cents lacks e-signature and QBO data integration).

**ProPractice** is an all-in-one practice management layer for solo CPAs and bookkeepers that integrates with QuickBooks Online rather than replacing it. It consolidates the four-tool stack — workflow, e-signature, client portal, and scheduling — into a single subscription at $49–79/month, eliminating more than $127/month in overhead compared to the typical solo practitioner stack.

The timing is exceptional: Intuit's QBO price increases (13–70% in August 2026), the discontinuation of QBO Online Accountant on December 31, 2026, and TaxDome's November 2026 pricing restructuring (minimum $1,500/year) have created the largest simultaneous stack-disruption event in the accounting software market in a decade. Solo practitioners are actively re-evaluating their entire tech stacks right now.

**Key opportunity metrics:**
- TAM: ~183,850 US solo/micro accounting firms — $174M ARR at $79/mo penetration
- $10K MRR achievable at ~250 customers (1.4% of solo CPA market)
- AppSumo LTD launch potential: $140K–$200K in a 2-week campaign
- Target window: December 2026–June 2027 (peak stack re-evaluation period)

---

## Core Vision

### Problem Statement

Solo CPAs and bookkeepers running 10–50 client practices are trapped paying $176–245/month across four separate tools that each solve only one piece of their workflow. The core stack problem:

| Tool | Monthly Cost | Actual Utilization |
|------|-------------|-------------------|
| QBO Accountant / Intuit Accountant Suite | $80–149/mo | High |
| Karbon (Team plan) | $59/user/mo | ~20% |
| DocuSign (Standard) | $25/mo | Engagement letters only |
| Calendly (Standard) | $12/mo | Scheduling only |
| **Total** | **$176–245+/mo** | **<50% combined** |

For a solo CPA with 12 clients generating ~$6,000/year in fees from those clients, this stack consumes 35–48% of that client revenue in software overhead alone — before taxes, E&O insurance, or any other overhead.

The problem is not simply "too many tools." The deeper problem is structural: Karbon is designed for multi-person firms and charges per-seat, so it's immediately over-featured and over-priced for a solo operator. DocuSign and Calendly are standalone point solutions that exist in the stack only because nothing else bundles them for accounting workflows. No single tool currently occupies the intersection of: solo-first UX + e-signature included + QBO integration + affordable pricing ($49–99/mo).

A second, compounding problem: the QBO ecosystem disruption of 2026 has forced a simultaneous stack re-evaluation on tens of thousands of practitioners:
- QBO Online Accountant is being discontinued December 31, 2026 — accountants must migrate workflow anyway
- QBO Plus rose from $99/mo to $140/mo (+41%) in August 2026, triggering fee and tool renegotiations
- TaxDome's November 2026 pricing restructuring raised its minimum to $1,500/year, pricing out the sub-50-client solo segment

### Problem Impact

**Financial impact:** The $176–245/month stack overhead is not abstract. For a 12-client solo CPA practice at $500/client/year ($6,000 total), software costs alone consume 35–48% of revenue from those clients. This ceiling directly limits profitability and growth for the smallest practitioners.

**Operational friction:** Solo practitioners log in and out of four separate systems to complete a single client engagement (schedule call → conduct call → send engagement letter via DocuSign → collect docs via email → track progress in Karbon → reconcile in QBO). This context-switching overhead adds 20–30 minutes of administrative time per client per engagement cycle.

**Cognitive overhead:** Each tool means a separate subscription renewal, billing event, support relationship, and login — all managed solo. This overhead falls entirely on the practitioner with no operations staff to absorb it.

**Switching cost paralysis:** Because the QBO lock-in mechanism is accountant dependency (clients can't easily switch away from QBO if their accountant only knows QBO), practitioners feel unable to switch accounting platforms — but they're not locked into the surrounding practice management tools. They simply haven't had a good consolidation option.

**Growth ceiling:** Karbon's per-seat pricing model means that adding a part-time contractor immediately doubles the practice management cost. This discourages hiring and constrains practice growth.

### Why Existing Solutions Fall Short

**Karbon ($59/user/mo):** Built for multi-person firms. Provides shared inboxes, team workflows, and complex visibility features that a solo operator simply doesn't need. 80% feature waste for solo practitioners. Requires a demo/sales call before you can even try it — incompatible with solo practitioner behavior. No QBO data integration.

**TaxDome ($1,500/year minimum as of November 2026):** Comprehensive but repriced itself out of the solo segment. Its new $1,500/year minimum (covering 150 active clients) is overkill for a 15–25 client solo practice. The November 2026 pricing change has driven churners into the market.

**Financial Cents ($19–69/user/mo):** Most affordable option and closest to the right positioning — but lacks built-in e-signature (practitioners must keep a separate DocuSign subscription) and has no QBO data integration layer. Lightweight on client portal depth.

**Jetpack Workflow ($40–50/user/mo):** Simple workflow tracking only. No e-signature, no client portal, no scheduling. Requires maintaining all surrounding point tools.

**Canopy ($74–149/user/mo):** Full-featured but expensive for solos. Priced similarly to the existing multi-tool stack.

**Intuit Accountant Suite (Core = free, Accelerate = $149/mo):** Intuit's replacement for QBOA is focused on the accounting platform itself, not the practice management layer around it. It doesn't eliminate the need for Karbon/DocuSign/Calendly.

**The gap:** No tool currently occupies the intersection of solo-first UX + built-in e-signature + QBO data integration + self-serve onboarding + pricing under $100/month. Financial Cents is the closest but misses e-sign and QBO integration. That gap is ProPractice's target.

### Proposed Solution

**ProPractice** is a practice management layer for solo CPAs and bookkeepers. It integrates with QBO rather than competing with it. The core design assumption: there is one person running this firm.

**The critical scope discipline:** Do NOT build an accounting engine. ProPractice is not trying to replace QBO — the lock-in mechanism makes that counterproductive. ProPractice replaces the $95–120/month of Karbon + DocuSign + Calendly that wraps around QBO.

**Five core capabilities:**

1. **Client Portal** — Secure, branded client-facing portal for document upload/download, messaging, and engagement status. Clients interact with their accountant through one clean interface instead of email attachments and scattered communication.

2. **E-Signature (built-in, no DocuSign required)** — Engagement letter templates with integrated e-signature workflow. Practitioner creates/sends, client signs, document is filed automatically. Eliminates the $25/month DocuSign subscription and the separate login/workflow.

3. **Workflow Management (accounting-first templates)** — Pre-built workflow templates for common accounting engagements: individual tax return, business tax return, monthly bookkeeping, annual cleanup, new client onboarding. Each template is a simple checklist (gather docs → prepare → review → file → deliver) with per-client status tracking.

4. **Scheduling Integration** — Built-in appointment booking tied to the practitioner's calendar. Clients can self-schedule based on availability windows. Automated confirmation emails. Eliminates the $12/month Calendly subscription.

5. **QBO Read-Only Integration** — View client QBO reconciliation status, flag anomalies, and surface at-risk accounts from within ProPractice. No separate QBO login needed for a quick client status check. Read-only via QBO API (no write access, minimizing API complexity and cost).

**Pricing:**
- $49/month — up to 25 clients, all features
- $79/month — unlimited clients
- LTD $149 — 25 clients (AppSumo launch)
- LTD $249 — unlimited clients (AppSumo launch)

**Positioning statement:** "The only practice management tool built for solo CPAs and bookkeepers that includes e-signature, QBO data integration, and costs less than your current Karbon + DocuSign + Calendly stack combined."

### Key Differentiators

1. **E-signature bundled at base price** — Every competitor requires a separate DocuSign subscription. Bundling it in eliminates $25/month for the customer and simplifies the engagement letter workflow into a single tool.

2. **QBO read-only data layer** — No other sub-$100/month practice management tool pulls QBO client data. Practitioners can see reconciliation status and flag anomalies without logging into QBO separately. This creates a genuine second moat beyond e-sign.

3. **Solo-first UX design assumption** — The product assumes one person is running the firm. No shared inboxes, no team permission matrices, no multi-user workflow visibility. Every screen and flow is designed for a single practitioner managing 10–50 clients.

4. **Self-serve onboarding under 30 minutes** — No demo required, no sales call. Practitioners can evaluate and decide in an afternoon. This directly contradicts Karbon's approach and is a strong positioning differentiator in a market where prospects are discovery-averse.

5. **LTD option eliminates recurring billing anxiety** — The most underserved pricing model in the category. No current player offers a credible lifetime deal. For a market defined by subscription fatigue, $149 LTD vs. $176+/month stack is a visceral comparison.

6. **Accounting-specific workflow templates** — Out-of-the-box templates for individual returns, business returns, monthly bookkeeping, and new client onboarding. Karbon's templates are generic project management; ProPractice ships with workflows accountants actually use.

7. **Market timing** — Entering at the exact moment of maximum market disruption: QBO price increases, QBOA discontinuation, and TaxDome pricing cliff have created the largest simultaneous stack re-evaluation event in a decade.

---

## Target Users

### Primary Users

**Persona 1: Sarah — Solo CPA, 25 individual tax clients**

Sarah is a CPA who left a mid-size accounting firm three years ago to run her own practice. She earns $140K/year from a mix of individual 1040s, a few small business 1120-S filings, and three monthly bookkeeping clients. She works from home and manages everything herself — no staff, no contractors.

Her current stack: Intuit Accountant Suite (Accelerate at $149/mo, the forced migration from QBOA), Karbon at $59/mo (which she uses primarily as a task checklist), DocuSign at $25/mo (for engagement letters only), Calendly at $12/mo (for the initial consultation calls). Total: $245/month.

Sarah's frustrations:
- When QBO sent her the QBOA discontinuation notice in September 2026, she had to research and migrate to Intuit Accountant Suite — which she's still not happy with
- Karbon's demo-only sales process annoyed her; she doesn't have time to watch demos, she needs to try tools
- She's used maybe 5 of Karbon's features; the rest of it is "enterprise noise"
- She has to log into 4 different tools to send an engagement letter and confirm a client's document submission

Her success vision: One tool that handles the administrative side of running her practice — client intake, engagement letters, task tracking, and appointment booking — integrated with the QBO she already uses. Under $100/month. No demo required.

**ProPractice fit:** Sarah is the exact target. She'd immediately calculate: "$49/mo ProPractice vs. $96/mo Karbon + DocuSign + Calendly = save $47/month plus reduce to 2 tools instead of 4." The LTD option ($149 one-time) would catch her attention even more strongly.

---

**Persona 2: Marcus — Solo Bookkeeper, 18 small business clients**

Marcus runs a solo bookkeeping practice. He's not a CPA but handles QuickBooks cleanup, monthly reconciliation, payroll processing, and 1099 preparation for 18 small business clients at an average of $350/month per client ($75K/year ARR). He's growing — adding 2–3 new clients per year.

His current stack: QBO Wholesale Partner Program at ~$80/month equivalent, Financial Cents at $19/month (which he uses for task tracking), DocuSign at $25/month. He uses Google Calendar and email for scheduling.

Marcus's frustrations:
- Financial Cents doesn't have built-in e-sign — he still needs DocuSign for engagement letters and service agreements
- No good way to show clients their reconciliation status without logging into their QBO and generating a report manually
- His client portal (email) is unprofessional; larger clients have asked if he has a "real client portal"
- Worried about losing his "enterprise clients" (small businesses with $5M+ revenue) to firms that look more professional

His success vision: A professional client-facing experience with a real portal, combined with the workflow tools he already uses — including e-sign built in. At a price point that makes sense for his margin.

**ProPractice fit:** Marcus is a secondary-primary user. He'd move from Financial Cents + DocuSign ($44/month) to ProPractice ($49/month) for a slight cost increase but a major capability upgrade (client portal + e-sign + QBO data integration). The professionalism of the client portal is a growth enabler for him.

---

**Persona 3: Jennifer — 2-Person CPA Firm, 1 lead + 1 part-time staff**

Jennifer runs a 2-person CPA firm — herself as lead and one part-time staff accountant at 20 hours/week. She has 45 clients (30 individual, 15 small business), earns $280K in firm revenue, and is the decision-maker on all software.

Her current stack: Karbon Team plan at $118/month (2 users × $59), DocuSign at $25/month, Calendly at $12/month. Her part-time staffer complains that Karbon is confusing to use.

Jennifer's frustrations:
- Karbon's per-seat model means adding her second user doubled the cost — and her staffer uses maybe 3 features
- When a client asks "where are we on my return?" she has to open Karbon, find the client, navigate to the engagement, and read the status before replying
- The complexity of Karbon's shared inbox workflows is confusing for a part-time staff member with limited onboarding time

Her success vision: A tool that tracks client engagements clearly enough that her part-time staffer can update it without training, and that she can check from her phone between client calls.

**ProPractice fit:** Jennifer is the high-value edge of the target. She'd move from $155/month (Karbon + DocuSign + Calendly) to $79/month (ProPractice unlimited) — saving $76/month — while getting a simpler tool her staffer can actually use. The 2-seat scenario is a natural upsell to unlimited-client pricing.

### Secondary Users

**Clients of accounting practices (passive users):**
The clients of ProPractice's primary users — small business owners and individual tax clients — interact with the ProPractice client portal to upload documents, sign engagement letters, and check their engagement status. They are not buyers but are significant stakeholders in the product's value perception: a polished client portal makes the accountant look more professional, which directly supports retention and referrals.

Client experience requirements:
- Zero-login or simple-link access (clients shouldn't need to create an account to sign a document)
- Mobile-optimized (small business owners review and sign from their phones)
- Clear, non-technical language for status updates ("Your tax return is in review" vs. "Engagement 2026-TXR-0023 is in PREP_REVIEW")

**Accounting practice referral network:**
CPAs and bookkeepers actively refer colleagues to tools they like. r/Bookkeeping and r/taxpros are peer networks where a single positive post from a credible practitioner can generate dozens of trial signups. These secondary users (the broader community) are the primary discovery and social proof channel.

### User Journey

**Discovery:**
Sarah is scrolling r/Bookkeeping in November 2026. She sees a thread: "Anyone found a good alternative to Karbon for solo practices? The price increase is killing me." She's currently paying $245/month and seething about the QBOA discontinuation. Someone responds: "Tried ProPractice — $49/mo, includes e-sign, connects to QBO. Signed up without talking to anyone." Sarah clicks.

**Evaluation:**
She arrives at the ProPractice landing page. The headline: "Replace Karbon + DocuSign + Calendly for $49/mo — built for solo CPAs." She calculates her savings ($96/mo vs. $49/mo for those three tools). She signs up for a free trial without filling out a demo request form.

**Onboarding:**
She imports her 25 client names from a CSV. She sets up one workflow template: "Individual Tax Return 2026." She customizes it for 3 steps (gather docs, prepare, review/file). She connects QBO via OAuth. She sends herself a test engagement letter with e-sign. Total time: 22 minutes.

**First "Aha!" moment:**
On day 3, she opens ProPractice from her phone between client calls. She can see that 7 of her 25 clients still haven't submitted their documents. She sends a nudge email to all 7 from one screen. Previously, this required logging into Karbon, filtering, exporting a list, and sending individual emails. 3 minutes vs. 20 minutes.

**Core usage pattern (weekly):**
- Monday: Check engagement status dashboard — who's pending, who needs attention
- As needed: Send engagement letters (e-sign), schedule consultation calls
- Monthly: Review QBO reconciliation status for monthly bookkeeping clients, flag anomalies

**Success moment:**
During tax season, Sarah handles 25 clients simultaneously without missing any deadlines. She closes out the season with zero "where's my return?" client calls — because clients can check their portal status themselves. She posts about ProPractice in r/Bookkeeping.

**Long-term:**
ProPractice becomes the operational backbone of her practice. She renews annually (or uses the LTD she bought on AppSumo). When she adds a part-time bookkeeper, she doesn't pay more because she's on the unlimited plan.

---

## Success Metrics

ProPractice success is measured in three layers: user success (are practitioners solving the problem?), product health (is the product retained and used?), and business health (is the company growing sustainably?).

### User Success Metrics

**Primary user success indicators:**

| Metric | Target | Measurement |
|--------|--------|-------------|
| Stack replacement rate | ≥70% of active users cancel Karbon OR DocuSign within 60 days of ProPractice signup | Post-onboarding survey + NPS at 60 days |
| Onboarding completion | ≥80% of signups complete first client setup within 24 hours | In-product event tracking |
| Engagement letter send within 7 days | ≥60% of users send first e-signed engagement letter within first week | In-product event tracking |
| Client portal activation | ≥50% of users have at least 3 clients using the portal within 30 days | In-product event tracking |
| Monthly active usage | ≥85% of paying subscribers log in at least 2x per week | Session tracking |

**The "aha!" moment:** User has sent their first e-signed engagement letter AND connected QBO AND has at least 5 active client workflows. This triple-activation event is the target first-week milestone — users who reach it churn at <5%.

### Business Objectives

**6-month targets (by June 2027):**
- $10K MRR from subscription revenue (~250 customers at $49/mo blended)
- AppSumo LTD launch: $100K+ in LTD revenue (target Q1 2027)
- Net Promoter Score ≥ 50 (accounting practitioners are detail-oriented reviewers; NPS 50+ enables organic community growth)
- G2 / Capterra listing with ≥15 reviews at ≥4.5/5 stars (required for organic discovery and AppSumo credibility)

**12-month targets (by November 2027):**
- $25K MRR from subscription revenue (~500 customers)
- Churn rate ≤ 3% monthly (accounting software is sticky; this target reflects that dynamic)
- 2 successful community-driven acquisition spikes (Reddit posts generating 50+ signups each)
- QBO API costs remain ≤ 8% of gross revenue (metered sync policy enforcement)

**24-month strategic position:**
- $60–80K MRR from subscriptions
- Clear brand recognition as "the solo CPA practice management tool" in the r/Bookkeeping and r/taxpros communities
- AppSumo review standing in top 10 for "accounting practice management" category

### Key Performance Indicators

**Acquisition:**
- Trial-to-paid conversion rate: ≥25% (accounting professionals who make it through self-serve onboarding are high-intent)
- Reddit-sourced signups: ≥40% of trials in first 6 months
- Cost per trial: <$30 (community-led; near-zero paid acquisition initially)

**Retention & Engagement:**
- Monthly churn: ≤3% (after month 3)
- Annual retention: ≥70%
- Expansion revenue: MRR expansion from $49 → $79 tier upgrade ≥10% of installed base by month 12

**Product Health:**
- Onboarding completion rate: ≥80% within 24 hours of signup
- Support ticket rate: <2 tickets per 100 active users per month (self-serve UX validation)
- QBO OAuth connection rate: ≥60% of paying users connect QBO within first week

**Financial Health:**
- Gross margin: ≥75% (after QBO API costs, e-sign API costs, hosting)
- LTD-to-subscription conversion: ≥15% of LTD customers convert to a subscription plan after LTD purchase (upsell to higher usage tiers)
- Payback period on CAC: <6 months

---

## MVP Scope

### Core Features

The MVP must solve the core problem completely for the primary user: a solo CPA or bookkeeper managing 10–50 clients who wants to replace Karbon + DocuSign + Calendly with one tool.

**Feature 1: Client Management (foundation)**
- Client list with name, contact info, engagement type (individual tax, business tax, monthly bookkeeping, etc.)
- Per-client notes and document history
- Client-facing portal link generation (simple shareable URL per client)
- CSV import for initial client setup

**Feature 2: Workflow Engine (accounting-first templates)**
- Pre-built templates: Individual Tax Return, Business Tax Return, Monthly Bookkeeping, New Client Onboarding
- Per-client workflow instances: "John Smith — 2026 1040" = checklist with status
- Status tracking: Not started / In progress / Awaiting client / Complete
- Simple dashboard view: all engagements with status across all clients
- Due date tracking and overdue alerts

**Feature 3: E-Signature (DocuSign replacement)**
- Engagement letter templates with merge fields (client name, services, fees, dates)
- E-signature request: practitioner sends link, client signs via browser (no account required)
- Signed document automatically filed to client record
- Status tracking: Sent / Viewed / Signed / Declined
- PDF download of signed document

**Feature 4: Client Portal**
- Branded portal URL per client (propractice.app/portal/[slug])
- Document upload: client can upload files from portal (browser and mobile)
- Document viewing: practitioner-shared documents visible to client
- Engagement status visible to client ("Your 2026 tax return: In Progress — awaiting your W-2")
- Simple messaging thread per client (async, email-notified)

**Feature 5: Scheduling (Calendly replacement)**
- Practitioner sets availability windows (recurring + one-off)
- Shareable booking link per meeting type (Initial Consultation, Review Call, etc.)
- Client self-books; practitioner and client receive email confirmations
- Google Calendar / Apple Calendar sync (OAuth)
- 15/30/60-minute meeting type presets

**Feature 6: QBO Integration (read-only)**
- QBO OAuth connection (Intuit App Partner Program)
- Pull client list from QBO and match to ProPractice clients
- Per-client reconciliation status (last reconciled date, outstanding transactions)
- Anomaly flagging: flag clients with >30 unreconciled transactions or >90-day reconciliation gap
- Read-only access — no write operations, no bookkeeping engine

**Feature 7: Billing & Account Management**
- Stripe-based subscription billing ($49/mo, $79/mo, annual discount)
- LTD code redemption for AppSumo launch
- Usage-based client count enforcement (25-client limit on Starter tier)
- In-app upgrade flow (Starter → Pro)

### Out of Scope for MVP

The following are explicitly NOT in the MVP. They are deferred to v1.1 or later:

- **Invoicing / billing to clients** — ProPractice is not an accounting tool and not a billing platform. Practitioners use QBO for invoicing.
- **QBO write operations** — Read-only integration is sufficient for MVP; write capability adds QBO API cost and liability complexity.
- **Tax document preparation** — ProPractice is not tax software. It manages the workflow around tax preparation, not the preparation itself.
- **Multi-user collaboration** — The MVP is designed for solo practitioners. Team features (shared inbox, role-based permissions, staffer assignment) are deferred to a Team plan post-MVP.
- **Time tracking / billing by hour** — Out of scope; practitioners use separate invoicing tools or QBO for this.
- **CRM / lead management** — ProPractice is for existing clients, not prospect tracking.
- **AI-generated draft engagement letters** — Deferred to v1.1; the MVP needs basic template + e-sign working first. AI can enhance in the next cycle.
- **IRS/tax authority portal integration** — TaxDome's compliance depth is out of scope for MVP; that's a later strategic decision point.
- **Mobile native app (iOS/Android)** — MVP is a responsive web app. Native app deferred until sufficient user base.
- **Integrations beyond QBO** — Xero, FreshBooks, Wave integrations deferred. QBO first.
- **White-labeling / client subdomain customization** — Deferred to v1.1 or Pro+ tier.

### MVP Success Criteria

ProPractice MVP is considered successful when:

1. **Stack replacement validated:** ≥60% of users who complete onboarding report canceling at least one of DocuSign, Calendly, or Karbon within 60 days (measured by survey)
2. **Self-serve works:** ≥80% of trial users complete onboarding (first client setup) within 24 hours without contacting support
3. **Core engagement loop active:** ≥50% of paying users send ≥3 e-signed engagement letters in their first month
4. **Retention signal:** Month-2 retention ≥85% for users who completed onboarding
5. **Community resonance:** At least one organic Reddit thread in r/Bookkeeping or r/taxpros praising ProPractice with ≥30 upvotes — indicating genuine practitioner community adoption, not forced marketing
6. **Financial milestone:** $10K MRR by month 6 post-launch

**Go/No-Go decision point:** If at month 3 post-launch fewer than 100 paying subscribers exist and self-serve onboarding completion is below 60%, the product requires a significant UX rethink before scaling marketing spend.

### Future Vision

**v1.1 (months 4–6 post-MVP):**
- AI-drafted engagement letters (Claude API — draft based on client type and service scope, practitioner reviews and sends)
- QBO anomaly AI analysis (flag clients with unusual patterns, generate plain-English explanation)
- Multi-user support (Team plan at $79/mo for 2 users, $129/mo for unlimited users)
- Annual billing option (20% discount) to reduce churn from monthly billing decisions

**v2.0 (months 7–12):**
- White-label client portal (custom domain per firm — propractice.app/[firm-slug])
- Xero integration (second accounting platform, opens non-QBO users)
- Time tracking (billable hours per client, invoice generation)
- Zapier/Make integration for practitioners who use automation
- Native mobile app (iOS and Android) for on-the-go practice management

**v3.0 / Long-term platform vision (year 2+):**
- Advisory intelligence layer: AI-driven client health scores, proactive outreach triggers ("Client A's revenue is down 30% YoY — good moment to reach out about tax planning")
- Multi-firm network effects: ProPractice as the "accountant graph" — connecting solo practitioners who want to refer overflow clients to each other
- Client onboarding automation: auto-generate new client workflows from initial consultation notes
- API marketplace: third-party integrations with tax research tools (Thomson Reuters, CCH), payroll platforms (Gusto, ADP), and document management (SmartVault)
- Potential expansion beyond solo: Small firm plan (up to 5 users, 500 clients) targeting the adjacent 2–5 person firm segment currently served by Karbon and OfficeTools

**Strategic expansion optionality:**
- **Geographic expansion:** Canadian and UK solo practitioners have similar stack pain (Xero is more prevalent; integrate Xero for UK/Canada market)
- **Vertical expansion:** Law firm practice management (similar solo-practitioner stack pain, different workflow templates — consultable with same core architecture)
- **Platform bet:** If ProPractice reaches 10,000+ practitioners, the client portal becomes a network with significant data value for benchmarking and advisory services

---

*Product Brief created: 2026-11-24*
*Based on: Shortlisted idea (84/105, Tier 1) + Market Research (2026-11-23)*
*Next step: create-prd*
