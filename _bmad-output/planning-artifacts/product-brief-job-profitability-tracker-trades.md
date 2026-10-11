---
stepsCompleted: [1, 2, 3, 4, 5, 6]
inputDocuments:
  - ideas/shortlisted/job-profitability-tracker-trades.md
  - _bmad-output/planning-artifacts/research/market-job-profitability-tracker-trades-research-2026-10-10.md
workflowType: product-brief
lastStep: 6
project_name: job-profitability-tracker-trades
product_name: JobLens
user_name: Root
date: 2026-10-11
author: Root
---

# Product Brief: JobLens — Job Profitability Tracker for Trades

---

## Executive Summary

Small plumbing, HVAC, and electrical shops are running blind. They book jobs, send invoices, and check their bank accounts — but they have no idea which jobs actually made them money. The tools that solve this problem either cost $1,750+/month (ServiceTitan) or require switching the entire business software stack. Nothing exists under $100/month that does the one thing these shop owners desperately need: show them, per job, what they made.

**JobLens** fills that gap. It is a standalone, focused job profitability tracker for small trades businesses — job card → materials + labor entry → auto margin calculation → "which jobs made you money this month" dashboard. It works **alongside** whatever FSM and accounting tools a shop already uses (Jobber, HouseCallPro, QuickBooks Online) rather than replacing them. No migration. No workflow disruption. Just profit visibility.

The market is ideally timed: QuickBooks Online raised prices 41–70% in August 2026, triggering an active software re-evaluation wave across small trades businesses. ServiceTitan continues consolidating the enterprise tier, leaving the 240,000-shop small-trades market without an affordable job costing solution. JobLens enters at $29/month flat (or $99 LTD via AppSumo) — the right tool, right price, right moment.

**Key numbers:**
- TAM: ~240,000 small trades shops (plumbing, HVAC, electrical) in the US
- SAM: ~72,000–120,000 shops actively evaluable
- SOM Year 1: 360–720 shops → $125K–$250K ARR at $29/month
- MVP build time: 3–4 weeks
- Scoring: 88/105 on the 10-step playbook framework

---

## Core Vision

### Problem Statement

Small trade shops — plumbing, HVAC, electrical, 1–8 employees — cannot tell which jobs made them money. They invoice in QuickBooks, schedule in Google Calendar or Jobber, and buy materials at supply houses. But when the week ends, all they see is total revenue and total expenses. No correlation. No per-job P&L. No answer to "which job types are draining my margin?"

An estimated 70–80% of HVAC and plumbing shops under $3M revenue operate this way. They are busy and often profitable in aggregate — but they price by intuition, absorb underpriced jobs without knowing it, and can't make data-driven decisions about which work to take, how to bid it, or where to raise rates.

The "default combo" — Google Calendar + QuickBooks — is universally cited in trades communities as broken for job-level P&L:

- Jobs flow into QBO as invoices; material expenses land when supplier bills arrive (days or weeks later)
- Time is logged informally at day end or not at all
- Revenue and costs exist in the same system but are never meaningfully correlated per job
- Labor is systematically undercounted: a tech at $28/hour costs $38–$44 fully loaded, and drive time (18–32% of paid hours) almost never gets billed back

The result: a plumbing shop does 15 jobs in a week, gross revenue looks fine, and three of those jobs lost money — and the owner has no idea.

### Problem Impact

The impact of this blind spot is substantial and measurable:

- **Margin gap:** Shops that track job costs run at 20–35% net margin. Shops that don't run at 2–8% net margin. This is not a small difference.
- **Pricing drift:** Without per-job data, prices are set once and updated only when competitors change theirs or materials spike visibly. An HVAC shop case study showed a shop believed it made 25% on installs; actual per-job tracking revealed 11%, once drive time and callbacks were loaded.
- **Strategic blindness:** No ability to answer "which job types should we market more? which should we reprice or stop taking?" — basic business decisions that should be data-driven are made entirely by feel.
- **Compounding cost:** Every week without job costing is a week of pricing decisions made on wrong assumptions.

### Why Existing Solutions Fall Short

| Solution | Why It Fails |
|----------|-------------|
| **ServiceTitan** | $245–$500/tech/month + $5K–$50K setup. Minimum ~$1,750/month for 5 techs. Enterprise-only, requires demo and annual contract. Fundamentally inaccessible for 1–5 tech shops by price alone. |
| **JobTread** | $199+/month, strong job costing — but built for residential remodeling GCs, not service trade shops. No dispatch, no service call cycle. Customer profile is $2M+ remodelers, not 3-truck plumbers. |
| **Jobber Grow** | Job costing visible only on Grow tier ($249/month). Jobber's primary identity is dispatching/CRM. Most Jobber users are on Core or Connect ($39–$129) and have no access to job costing. |
| **HouseCallPro Essentials** | "Profit Tracker" exists but is a thin feature at $149/month. No job-type analytics, no margin-sorted dashboard. It's an afterthought, not a primary product. |
| **Tradify / Fergus** | Good job costing ($47–$75/month) but concentrated in NZ/AU markets. Minimal US presence, no US-focused marketing or support. |
| **QuickBooks itself** | Post-job, not real-time. Expenses enter days/weeks after jobs complete. Requires payroll integration for time tracking. No "service calls vs. installs" analytics. Manual discipline required to approximate job costing — most small shops give up. |

**The structural gap:** There is no standalone, dedicated, US-market job P&L tracker for service trades under $100/month. The category is empty because:
- ServiceTitan has no incentive to price down
- Jobber/HCP see job costing as a premium tier feature, not a standalone product
- Tradify/Fergus haven't invested in US go-to-market
- No one has built a focused single-purpose tool for this exact job

### Proposed Solution

**JobLens** — "Stop guessing which jobs are profitable."

A standalone web application (mobile-first PWA) that gives small trade shops their first real per-job P&L view. The core loop is simple:

1. Create a job card (customer, job type, date)
2. Enter materials as line items during or after the job
3. Log tech time with fully-loaded hourly rates
4. Import the invoice from QuickBooks Online (or enter manually)
5. See: revenue − materials − labor = job profit + margin %

The dashboard shows the last 30 jobs sorted by margin, with a job-type breakdown ("Service calls: 42% avg margin | Installs: 28% avg margin | Emergency calls: 19% avg margin"). In one screen, an owner knows which work is making money and which isn't.

JobLens is **not** a field service management platform. It doesn't do scheduling, dispatch, invoicing, or customer management. It does one thing: tell you which jobs made money. It works *alongside* Jobber, HouseCallPro, and QuickBooks — no migration required.

**Positioning:** "The tool that tells you which jobs made you money this month — works with QuickBooks, works with Jobber, works with HouseCallPro."

### Key Differentiators

1. **Standalone, not a platform.** No FSM switch required. No accounting migration. Plug it into what the shop already uses. This is the primary adoption barrier remover — the #1 reason small shops don't use job costing today is that every solution requires switching their entire stack.

2. **Service-trades-specific.** Designed for the service call cycle (schedule → dispatch → job → invoice), not construction project management (AIA billing, change orders, bid estimates). The UX reflects a plumber's or HVAC tech's day, not a GC's.

3. **"Find the money" framing.** Not "job costing software" (accounting jargon that creates distance) but "which jobs made you money this month" (owner language). The product's entire UX reinforces this framing.

4. **Job-type intelligence.** Not just "job X was profitable" but "service calls vs. installs vs. maintenance: here's which type you should market more and which you should reprice." This is pricing intelligence that no sub-$100/month tool provides today.

5. **QBO-first.** QuickBooks Online integration is the anchor feature, not an afterthought. Invoice import auto-populates job revenue. This removes the friction of double-entry and leverages the tool the shop already trusts for financials.

6. **Priced for the market it serves.** $29/month flat — under every FSM competitor's job costing tier, accessible to any shop paying for QuickBooks, no per-user pricing to complicate decisions.

---

## Target Users

### Primary Users

#### Persona 1: Marcus — The Busy Grinder (Owner-Operator, 3-Tech Plumbing Shop)

**Background:** Marcus has been in plumbing for 22 years. He bought out his boss 8 years ago and now runs a 3-tech shop doing mostly residential service and light commercial. Revenue: ~$850K/year. He uses Jobber for dispatch and QuickBooks Plus for accounting. His phone is always ringing.

**Current Reality:**
- Runs 10–18 jobs per week across 3 techs
- Invoices are created in Jobber and synced to QuickBooks
- Materials are bought at Ferguson — the bills come in weekly
- He "knows" his margins are around 35% because that's what they were 4 years ago when he last ran the numbers
- He has no idea which jobs are making money and which aren't at the individual level

**Pain Experience:**
"We're always busy. Revenue looks fine. But I feel like we're working harder than we should be for what's in the bank. I started doing more emergency calls because people pay a premium — but are they actually profitable after the extra drive time?"

**Trigger Events:**
- QuickBooks raised his Plus plan from $99 to $140 in August — he's re-evaluating his software stack
- A peer in his HVAC Business Facebook group mentioned they found out their emergency calls had 15% margin once drive time was loaded — Marcus suspects he has the same problem

**What Success Looks Like:**
"I want to open an app Monday morning and see which jobs from last week made us money and which ate it. I want to know if emergency calls are worth doing. I want to stop pricing panel swaps the same way I priced them in 2022."

**JobLens "Aha" Moment:** Sees his job-type breakdown for the first time. Emergency calls: 18% margin. Routine service: 41% margin. He immediately knows to stop prioritizing emergency dispatch and to raise his emergency callout rate.

---

#### Persona 2: Sandra — The Data-Hungry Optimizer (Owner, 5-Tech HVAC Shop)

**Background:** Sandra took over her father's HVAC shop 6 years ago after a decade in corporate operations. Revenue: ~$1.4M. She's read the Sweaty Startup / Codie Sanchez content. She understands gross vs. net margin and wants to run her business like a business. She uses HouseCallPro for dispatch and QuickBooks Advanced.

**Current Reality:**
- HouseCallPro's "Profit Tracker" felt shallow — no job-type breakdown, no margin sorting
- She tried setting up QuickBooks job tracking but found it required more manual discipline than she could enforce across 5 techs
- ServiceTitan was quoted at $2,400/month for her crew — she passed

**Pain Experience:**
"I can see my revenue and expenses at the company level. I cannot see whether residential changeouts are more profitable than commercial maintenance contracts. I have a hypothesis but no data. And I can't make pricing or marketing decisions off a hypothesis."

**Trigger Events:**
- End of Q3 review showed 22% net margin — good, but down from 28% in 2024. She suspects it's a mix shift issue (more emergency calls, fewer maintenance plans) but can't prove it.
- Actively Googling "HVAC job profitability tracker" and finding blog posts, not products

**What Success Looks Like:**
"I want a margin-sorted dashboard by job type. I want to know at a glance: maintenance contracts, changeouts, emergency service calls — which makes us the most money per hour of tech time? That tells me what to sell, how to bid, and where to focus our marketing."

**JobLens "Aha" Moment:** First week of data shows maintenance agreements averaging 48% margin vs. emergency calls at 21%. She immediately restructures her marketing to push maintenance plan upsells, which she can now prove is the highest-margin work.

---

#### Persona 3: Kevin — The QB Refugee (Owner, 2-Tech Electrical Shop)

**Background:** Kevin runs a 2-person electrical shop (himself + 1 tech). Revenue: ~$420K. He's been on QuickBooks Desktop for years. Intuit discontinued support for his version and is forcing him to QBO — which just raised prices again. He's angry and actively evaluating his full software stack.

**Current Reality:**
- Switching to QBO has made him aware of what he's actually paying for software
- He doesn't have a dispatch tool — uses Google Calendar and a whiteboard
- He's heard about Jobber but doesn't want to pay for another platform until he understands what he actually needs
- Right now his biggest question is "am I making money on panel replacements or am I busy and breaking even?"

**Pain Experience:**
"I've been doing this 9 years. I think I'm profitable. My accountant tells me I'm profitable. But when I look at specific jobs — especially the big installs that take 2–3 days — I genuinely don't know if I'm making money once I load in all the materials and my time versus what I billed."

**Trigger Events:**
- QuickBooks migration to cloud + price increase
- Found a thread in r/Electrical where someone said "job costing changed my pricing for commercial panels" — went to find the tool they used and couldn't

**What Success Looks Like:**
"I want something simple that doesn't require a big setup. I enter the job, enter what I spent on materials, log my hours, and it tells me the margin. I don't need 100 features. I need that one thing, for every job."

**JobLens "Aha" Moment:** First job entered shows he made $280 on a panel swap he billed $1,100 — 25% margin, not the 40% he assumed. He immediately revisits his panel swap pricing.

---

### Secondary Users

#### Field Technicians (Input Contributors)

**Role:** Techs on larger shops (3–8 employees) who enter materials from the field via mobile. They are not the decision-makers for the product but are critical to data quality. If material entry is painful, they won't do it — and the data becomes worthless.

**Need:** Mobile-first, fast entry, minimal friction. Tap to add parts from a recents list, adjust quantities, submit. Should take under 60 seconds per job close-out.

**Impact on Product Design:** Mobile PWA must be the primary materials entry interface, not a secondary feature. Tech UX is a first-class concern.

#### Office Managers / Admins

**Role:** In shops with 5+ techs, there's often an office manager who handles billing, follows up on jobs, and manages the QuickBooks integration. They may be the person who actually connects JobLens to QBO and reviews the dashboard before the owner does.

**Need:** Easy QBO setup (clear OAuth flow, sensible defaults), ability to tag and categorize jobs, clean export for accountant review.

#### Accountants and Bookkeepers (Referral Channel)

**Role:** Trade-industry bookkeepers advising 10–30 small trades businesses each. They are high-trust advisors who recommend tools — a positive recommendation from one bookkeeper can drive 3–10 direct sign-ups.

**Need:** A tool they can recommend with confidence that doesn't conflict with QBO (the system they manage), provides a clean audit trail, and gives their clients actionable margin data without requiring accounting expertise to interpret.

**Impact on Strategy:** A bookkeeper referral program (partner dashboard, referral links, co-marketing in trade bookkeeper Facebook groups) is a high-leverage growth channel.

---

### User Journey

#### Discovery

**Channel pathways:**
1. **Reddit organic:** User asks "what are you using for job costing?" in r/Plumbing or r/hvacpeople. JobLens is recommended by an existing user. Authentic product story ("I built this because nothing under $100/month existed") earns trust in these communities.
2. **Google search:** "job costing for plumbers," "HVAC profit tracker," "how to track profit per job HVAC" — currently answered by workaround blog posts. JobLens content fills this gap.
3. **AppSumo:** "Stop guessing which jobs are profitable — $99 lifetime deal" reaches 1.25M Sumo-lings, many of whom are small business operators.
4. **Facebook groups:** HVAC Business Owners, Plumbing Business Owners, Sweaty Startup Community — peer recommendations carry very high trust.
5. **QB price shock:** Owner Googling "QuickBooks alternatives" or "QuickBooks too expensive" in mid-2026; JobLens appears in relevant content about managing a trades business's software stack.

#### Onboarding

**Critical path:** Connect QBO → import one invoice → enter one job's materials → see the margin number. This must work in under 10 minutes on first session.

**Zero-friction QBO setup:** OAuth flow should be 3 clicks: authorize → select company → done. Default to importing the last 30 invoices. Tech enters their hourly rate once (prompted on first job).

**First-session goal:** Owner sees at least one real job's margin before closing the app. If they don't see real data in session one, they will not return.

#### Core Usage

**Owner (weekly review):** Opens the dashboard Monday morning. Reviews last week's jobs sorted by margin. Spots outliers — one job at 12% margin. Clicks in, sees that materials ran over budget. Mental note to price that job type differently. 5 minutes, high value.

**Tech (field entry):** At job close, opens the mobile PWA. Selects the job from today's list. Adds 3 parts from the recents list. Adjusts one quantity. Submits. 90 seconds.

**Office manager (monthly close):** Reconciles any manually-entered revenue against QBO invoices. Tags new job types. Runs the month-end report for the accountant. Exports to CSV.

#### Success Moment (The "Aha")

The "aha" moment is the first time an owner sees their job-type breakdown and recognizes the margin difference between work types. This typically happens within the first 2–4 weeks, once 10–20 jobs have been entered. The moment they say "I didn't know emergency calls were only 18% margin" — they are hooked. Job history accumulation from that point creates natural retention.

**Secondary aha:** "I found the jobs that are losing me money" — when a specific job type or a specific recurring customer is revealed as consistently below-margin. The ability to make a pricing or customer decision based on data, not intuition, is the product's core value delivered.

#### Long-term Retention

Job history creates compounding value and switching cost:
- Month 3: First seasonal comparison ("last February vs this February")
- Month 6: Job-type pricing intelligence ("my coil replacements are 8% below market margin — I can raise rates")
- Month 12: Annual report showing margin improvement since starting to track

The "send to accountant" export gives the owner something tangible to show their bookkeeper, embedding JobLens into the monthly accounting workflow.

---

## Success Metrics

### User Success Metrics

**Primary Value Metric — "Found a losing job type"**
The defining success moment is when a user identifies a job type that is consistently below their margin target and makes a pricing decision as a result. We will track this activation event explicitly.

- **Target:** 40% of active users identify a below-margin job type within 30 days of first job entry
- **Target:** 55% reach this event by 60 days
- **Measurement:** Funnel event — "user views job-type breakdown with 2+ job types having 5+ entries each"

**Onboarding Success**
- QBO connection rate: 60% of signups connect QBO within 7 days
- First job entered within 24 hours: 70% of signups
- "Real data" session (QBO invoice imported + 1 job margin calculated): 50% of signups within 3 days

**Engagement Health**
- Weekly active rate: 40% of paid users open the app in any given week
- Monthly active rate: 70% of paid users open the app in any given month (weekly review cadence is the target behavior)
- Jobs entered per user per month: target average of 12+

**Retention**
- Monthly churn: <5% at 3 months, <3% at 12 months
- 6-month retention: 65%+
- 12-month retention: 55%+

### Business Objectives

**Revenue Objectives**

| Milestone | Target | Timeframe |
|----------|--------|-----------|
| AppSumo launch revenue | $50K–$100K | Month 1–3 |
| MRR from subscriptions | $2,900 (100 shops × $29) | Month 3 |
| MRR from subscriptions | $7,250 (250 shops × $29) | Month 6 |
| MRR from subscriptions | $14,500 (500 shops × $29) | Month 12 |
| ARR | $174K | Month 12 |

**Strategic Objectives**
1. **Own the category:** Become the default recommendation when someone asks "what do you use for job costing?" in r/Plumbing and r/hvacpeople within 6 months.
2. **Build the data moat:** Average 6+ months of job history per active user by end of Year 1 — creates switching cost and compounding value.
3. **Validate the bookkeeper channel:** Establish 5+ bookkeeper partners who actively recommend JobLens to their trades clients by Month 6.
4. **AppSumo launch:** Achieve 500+ LTD users within 60-day launch window, generating proof-of-concept social proof and feature feedback.

**Market Position Objective**
Be the first Google result for "job costing for plumbers" and "HVAC profit tracker" by Month 9. These are currently low-competition SEO terms with no definitive product answer.

### Key Performance Indicators

| KPI | 3-Month | 6-Month | 12-Month |
|-----|---------|---------|---------|
| AppSumo LTD users | 500 | — | — |
| MRR subscribers | 100 | 250 | 500 |
| Monthly Recurring Revenue | $2,900 | $7,250 | $14,500 |
| Annual Recurring Revenue | $34,800 | $87,000 | $174,000 |
| QBO connect rate (of signups) | 60% | 70% | 75% |
| "Found a losing job type" activation | 40% | 55% | 65% |
| Monthly churn | <6% | <5% | <3% |
| Net Promoter Score | — | 40+ | 50+ |
| G2/Capterra reviews | 25 | 75 | 150 |
| Avg job history per active user | — | 3 months | 6 months |

**Leading Indicators (predictive of retention):**
- Jobs entered in first 7 days (>5 jobs = strong predictor of 60-day retention)
- QBO connected within 48 hours (strong predictor of 90-day retention)
- Job-type breakdown viewed (strong predictor of 12-month retention)

**Vanity Metrics to Avoid:**
- Total signups (without activation tracking, this masks churn)
- Page views
- Social followers without engagement correlation

---

## MVP Scope

### Core Features

The MVP is the minimum product that delivers the "found the losing job type" activation event for a shop owner using QuickBooks Online. Every feature on this list is load-bearing — removing any one of them breaks the core value loop.

#### 1. Job Card Creation
- Fields: Customer name, job type (free text + common type presets: Service Call, Install, Maintenance, Emergency Call), date, job address (optional), brief notes
- Job types become the categories for the job-type analytics breakdown
- Quick-create from mobile (one screen, < 30 seconds)

#### 2. Materials Line-Item Entry
- Add parts: part name, unit cost, quantity → auto-calculates line total
- "Recents" list: last 20 parts used auto-populate for fast re-entry
- Running materials total visible at bottom of screen
- Entry works on mobile (field tech use case) and desktop (office close-out)

#### 3. Labor Time Entry
- Log hours per tech per job
- Each tech has a configured "fully-loaded hourly rate" (set once in settings, editable per job)
- Auto-calculates labor cost: hours × fully-loaded rate
- Multiple techs per job supported

#### 4. Auto Margin Calculation
- Invoice amount (revenue) − materials total − labor cost = job profit
- Margin % = job profit / invoice amount × 100
- Displayed prominently on the job card — this is the primary output
- No configuration required — just enter the numbers, see the margin

#### 5. QuickBooks Online Integration
- OAuth connection (3-click setup: authorize → select company → done)
- Import invoices: pulls last 30 closed invoices from QBO; matches to job cards by customer/date for one-click revenue population
- Manual override: if QBO invoice not found, enter invoice amount manually
- Sync is one-directional (QBO → JobLens); no write-back to QBO in MVP

#### 6. Dashboard — "Which Jobs Made You Money"
- Last 30 jobs sorted by margin % (highest to lowest)
- Color-coded: green (above target margin), yellow (near target), red (below target)
- Owner sets target margin in settings (default: 35%)
- Job-type breakdown: average margin per job type, job count per type
- Simple time filter: last 30 days / last 90 days / custom date range

#### 7. Tech Management
- Add techs with name and fully-loaded hourly rate
- Rates can be edited at any time (changes apply to future jobs only, not historical)
- No login required for techs in MVP (owner/office enters on their behalf; field entry via shared link is Phase 2)

### Out of Scope for MVP

These are explicitly deferred. They are valuable but not required for the core value loop.

| Feature | Rationale for Deferral |
|---------|----------------------|
| Overhead allocation (truck, insurance per hour) | Increases complexity; most users don't have this data readily available; Phase 2 when users ask for it |
| Direct Jobber / HouseCallPro integration | Adds build complexity; QBO sync is the anchor — FSM integrations follow |
| Per-tech login / mobile field entry as separate role | Simplifies auth in MVP; shared-device entry is sufficient for most 1–3 tech shops |
| Supplier invoice linking (auto-update material costs) | Nice-to-have but materials can be entered manually; Phase 2 |
| Export for accountant (PDF/CSV) | Useful but not blocking the core loop; Phase 2 |
| Seasonal / year-over-year comparison | Requires enough job history to be meaningful; natural Phase 2 feature |
| Recurring job templates (maintenance agreements) | Useful for maintenance-heavy shops; not blocking MVP |
| Customer lifetime value view | Requires more job history; Phase 2 analytics feature |
| Team performance / margin by technician | More relevant for 5+ tech shops; Phase 2 |
| AI pricing suggestions | Requires sufficient job history and model; Phase 3 |

### MVP Success Criteria

Before scaling marketing spend or beginning Phase 2 development, the MVP must validate:

1. **Activation rate:** 50%+ of users who connect QBO and enter 3+ jobs reach the "job-type breakdown" screen within 14 days. If this fails, the onboarding flow needs redesign before scaling.

2. **Retention signal:** 60%+ of users who reach activation are still active at 30 days. If churn before 30 days is high, the core value delivery is not strong enough — likely a UX or data-quality issue.

3. **Revenue validation:** 100+ paying subscribers ($29/month) or 200+ LTD buyers within 60 days of AppSumo launch. Demonstrates willingness to pay, not just curiosity.

4. **QBO integration quality:** <10% of users report QBO sync issues in the first 30 days. QBO integration quality is the single highest-risk technical component and must be validated early.

5. **Qualitative validation:** At least 10 users voluntarily mention the "found a losing job type" or "changed my pricing" outcome in reviews, support messages, or community posts. This confirms the product is delivering the core value proposition, not just being used.

**Go/No-Go Decision Point:** If criteria 1, 2, and 3 are met by Day 60, proceed to Phase 2 development and increase marketing spend. If criteria 4 fails, pause marketing and fix QBO integration. If only 1 or 2 criteria are met, do a user interview sprint before committing to Phase 2.

### Future Vision

#### Phase 2 — Deepening Value (Months 2–4 post-launch)

**Overhead Allocation**
- Configure fixed costs per month (truck lease, insurance, fuel estimate)
- Auto-allocate per billable hour of tech time
- Shows "true margin" vs. "direct margin" for each job — the gap between these is often the biggest insight for shop owners

**Mobile-First Tech Entry (Separate Role)**
- Tech gets a unique link or PIN-based access to enter materials on their assigned jobs only
- No full account access — just the materials entry screen
- Push notification when job is assigned; entry closes when job is marked complete

**Supplier Invoice Linking**
- Link QBO bills (from Ferguson, Wesco, etc.) to job material line items
- Auto-updates material costs when supplier invoices arrive in QBO
- Closes the "I estimated $280 in materials but the invoice came in at $320" gap

**Export and Reporting**
- Monthly job profitability report PDF (for accountant, for personal review)
- CSV export of all jobs with margins (for Excel power users)
- "Send to accountant" one-click email with PDF attachment

**Jobber + HouseCallPro Integration**
- Pull scheduled jobs from Jobber/HCP to pre-populate job cards (saves manual entry)
- One-click sync: if a job exists in Jobber, it's also in JobLens with customer and date pre-filled

#### Phase 3 — Platform Expansion (Months 5–12 post-launch)

**AI Pricing Intelligence**
- "Based on your last 24 residential changeouts, you're running 8% below the margin you'd need to hit your 35% target. You could raise your standard changeout rate by $180 and still be below the ServiceTitan-shop average in your area."
- Natural language job query: "Show me all jobs below 20% margin in the last 90 days that were service calls"

**Vertical Expansion**
- Roofing, landscaping, pest control, pool service — same ICP, same problem, different job type vocabulary
- Custom job type presets per vertical
- Vertical-specific benchmark data ("HVAC industry avg: residential changeouts 31% margin")

**Team Analytics**
- Margin by technician (which tech runs the most efficient jobs?)
- Callback rate per tech (callbacks are margin killers)
- Tech performance dashboard for owners with 3+ employees

**Multi-Location / Multi-Company**
- Owner operates 2 trade businesses (e.g., plumbing + HVAC)
- Single login, company switcher
- Consolidated owner-level view across companies

**Acquisition Target Positioning**
- At 3,000+ users and $1M+ ARR, JobLens becomes an attractive acquisition for Jobber, HouseCallPro, ServiceTitan (lite tier), or QuickBooks
- All platform expansions and integrations increase strategic value

---

## Technical Considerations

### Build Approach

**Stack recommendation for 3–4 week MVP:**
- Frontend: React (Next.js) PWA — mobile-first, installable on iOS/Android homescreen
- Backend: Node.js + PostgreSQL
- QBO Integration: QuickBooks Online OAuth 2.0 + Intuit Developer API (v3)
- Hosting: Railway or Render (simple deployment, fast iteration)

**QBO Integration — Highest Risk Component**
The QBO integration should receive disproportionate build investment (40% of total build time). Key edge cases to handle:
- OAuth token refresh (QBO tokens expire; silent refresh required)
- Company with multiple QBO connections (some shops have separate QBO companies for different entities)
- Invoice sync timing (QBO invoices may not have a direct job card match; fuzzy matching by customer + date range)
- Accounting accuracy: never write back to QBO in MVP; all data flows in one direction to avoid risk of corrupting the shop's books

### Pricing Infrastructure
- Stripe for subscription billing ($29/month, annual option)
- LTD codes via Stripe or a simple code redemption system for AppSumo integration
- No per-user or per-job pricing — flat rate is a deliberate positioning choice to remove friction

---

## Go-to-Market Strategy

### Launch Sequence

**Phase 1 — AppSumo + Reddit (Month 1–3)**
1. AppSumo deal: $99 LTD standard / $149 LTD unlimited (500–1,500 LTD target)
2. Reddit launch post in r/Plumbing, r/HVAC, r/Accounting: authentic "I built this because nothing existed" story
3. Early user testimonial collection (target: 10 "changed my pricing" quotes by Day 30)

**Phase 2 — SEO + Community (Month 3–6)**
1. Content: "job costing for plumbers" guide, "HVAC profit tracker: how to find your most profitable job types"
2. YouTube: 5-minute "how to find your most profitable job type" tutorial — practical, tool-agnostic
3. Facebook group engagement: HVAC Business Owners, Plumbing Business Owners, Sweaty Startup
4. Bookkeeper outreach: LinkedIn + trade-bookkeeper Facebook groups

**Phase 3 — Scale (Month 6–12)**
1. G2/Capterra review push with AppSumo cohort
2. Partner with trade industry publications (ACHR News, PM Engineer, Electrical Contractor)
3. MRR transition offer to LTD users ($19/month for premium features)
4. Explore trade show presence (HARDI, PHCC National)

### Positioning Statement

**For:** Small plumbing, HVAC, and electrical shop owners (1–8 employees)

**Who:** Can't tell which jobs are profitable because no affordable tool shows per-job P&L

**JobLens is:** A standalone job profitability tracker

**That:** Automatically calculates margin per job and shows which job types are making you money — works alongside QuickBooks and whatever FSM you already use

**Unlike:** ServiceTitan ($1,750+/month), Jobber Grow ($249/month), or QuickBooks job tracking (unreliable, post-job)

**JobLens:** Gives you the answer in under 5 minutes, for $29/month

---

## Risk Summary

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| Jobber/HCP builds this as a feature | Medium | High | Move fast, build brand, accumulate job history data (switching cost) |
| QBO integration quality issues | High | Medium | Allocate 40% of build time to QBO; one-directional sync only; thorough edge case testing |
| Trust gap ("is this data accurate?") | Medium | High | Always show data provenance; explicit reconciliation view; manual override for every auto-populated field |
| Low AppSumo conversion | Low | Medium | Pre-launch Reddit validation; clear ROI story; 60-day refund window reduces friction |
| Market too niche | Low | Low | 240K addressable shops; 1% = 2,400 shops × $29/month = $835K ARR — viable bootstrap SaaS |

---

## Product Brief Status

**Date Completed:** 2026-10-11
**Input Documents:** Shortlisted idea (88/105 score), comprehensive market research (2026-10-10)
**Confidence Level:** High — market gap, customer pain, and competitive positioning all validated through primary community research and market data
**Recommended Next Step:** Create PRD — this brief provides the product vision, user personas, success metrics, and MVP scope required for detailed requirements specification

**The opportunity is real, the gap is clear, the timing is optimal. JobLens is ready to build.**
