---
stepsCompleted: [1, 2, 3, 4, 5, 6]
inputDocuments:
  - ideas/shortlisted/trade-job-cost-accounting.md
workflowType: product-brief
lastStep: 6
research_type: product-brief
research_topic: trade-job-cost-accounting
user_name: Root
date: 2026-10-23
---

# Product Brief: TradeBooks — Job Cost Accounting for Trade Contractors

<!-- Generated via automated BMAD product brief workflow from shortlisted idea + market research -->

---

## Executive Summary

A sole-proprietor roofer in Texas finishes a three-day job. Did she make money? She doesn't know. Her materials, subcontractor, and equipment costs are scattered across a credit card statement, three paper receipts, and a Venmo payment to her sub. QuickBooks could tell her — but it requires a $140/month Plus subscription just to unlock job costing, and even then it takes hours of manual allocation to produce an answer that should take seconds.

This is the daily reality for ~8 million US trade contractors. The tool that solves their core problem (job-level profitability) is locked behind the most expensive plan of the most resented software in small business. Wave is free but structurally blind to jobs. Knowify and JobTread are built for commercial subcontractors billing $2M/year, not the sole-proprietor fencer billing $200K.

**TradeBooks** is the bookkeeping tool built specifically for trade contractors: job costing as the core feature (not an add-on), professional contractor invoice templates with materials + labor + markup breakdowns, 1099-NEC subcontractor payment tracking, and Stripe payment collection — all for $19/month flat or $59 one-time.

The market entry is AppSumo-first: "Pay once, track your jobs forever" is the headline that writes itself for the contractor who hates subscriptions as much as they hate QuickBooks. Every QB price increase email — the sixth consecutive annual increase ran in 2026 — creates a fresh cohort of 8M contractor addresses searching for an exit. No credible exit at $19/month exists today.

**Target**: 500 paying customers at $19/month ($9,500 MRR) by month 6. AppSumo launch revenue of $30K–$118K. $38K+ MRR by month 18 with SEO moat and 1099-season funnel compounding annually.

---

## Core Vision

### Problem Statement

Trade contractors — HVAC techs, roofers, fence builders, plumbers, electricians, landscapers — run project-based businesses where every job has a unique cost structure: materials purchased, hours worked, subcontractors hired, equipment rented. Knowing whether a specific job was profitable is not a reporting afterthought — it is the single most important financial number in their business. If a fence contractor doesn't know that 6-foot cedar privacy jobs are profitable but chain-link jobs are not, she will keep pricing chain-link jobs the same way and slowly go broke.

The only mainstream tool that tracks this — job costing — is QuickBooks Online Plus. In 2026, that plan costs **$140/month**, up from $70/month in 2021 (a 100% increase in five years). It requires consistent, disciplined data entry across every transaction, produces meaningful job reports only after significant setup effort, and was described by a long-term contractor customer in r/GeneralContractor as "bloated, complicated, and hammering you with ads." The sixth consecutive annual price increase in 2026 (+22%, from $115 to $140) generated a fresh wave of contractor Reddit posts asking for alternatives.

Wave — the most recommended free alternative — has no job costing at any tier. The product literally cannot answer "did I make money on the Henderson roofing job?" Wave is useful for invoicing and basic expense tracking but is structurally broken for the core contractor use case.

The purpose-built construction platforms (Knowify, JobTread, Buildertrend) start at $199–$339/month and are architected for commercial specialty subcontractors managing multi-crew multi-million-dollar projects. A sole-proprietor landscaper with 1–3 crews is not their customer — and the pricing makes that clear.

The pricing gap: **no product under $29/month** offers genuine trade-specific job costing with 1099 subcontractor tracking and professional contractor invoice templates. This gap has existed since Wave launched in 2012 and has only grown more valuable as QuickBooks prices have doubled.

### Problem Impact

The impact is financial, operational, and behavioral:

- **Financial blind spots**: Contractors who don't track job-level costs cannot identify their most and least profitable job types. They systematically underprice complex jobs, overprice simple jobs, and miss the 15–30% margin improvement that job-level profitability data unlocks.
- **Tax season dread**: Every January, contractors with subcontractors face the 1099-NEC scramble — collecting W-9s they didn't ask for at the time, totaling up payments from bank statements and Venmo history, generating paper forms or paying a bookkeeper $200/hour to do it. The $2,000 reporting threshold (updated from $600 in 2026) reduced the volume slightly but doesn't eliminate the workflow.
- **Professional credibility gap**: A contractor who sends a plain invoice with a single "Labor — $3,500" line loses jobs to competitors who send a detailed breakdown with materials, labor hours, and markup. Professional invoice templates with contractor-specific line items are an underrated differentiator in a price-sensitive market.
- **Subscription fatigue**: At $140/month for QB Plus, a sole-proprietor contractor earning $120K gross is paying 1.4% of gross revenue for accounting software. This is quantifiably more painful than it was at $70/month in 2021.
- **The "just use a spreadsheet" fallback**: Contractors who can't afford QB Plus (or refuse to pay it) use Excel spreadsheets, which fail silently — wrong formulas, lost files, no discipline — and never actually tell them if they're pricing correctly.

### Why Existing Solutions Fall Short

| Competitor | Monthly Cost | Job Costing | 1099 Tracking | Trade Templates | Gap |
|---|---|---|---|---|---|
| **QuickBooks Online Plus** | $140/mo | Yes (requires setup) | Partial | No | 6x price increases; complex; not trade-specific |
| **Wave** | Free | None | None | No | Fundamental feature gap; can't answer "did I make money?" |
| **FreshBooks Plus** | $43/mo | Project tracking only | None | No | Project tracking ≠ job costing; no contractor invoice format |
| **Xero Standard** | $50/mo | Available but complex | Limited US 1099 | No | Professional tool; not simplified for trades; complex setup |
| **Knowify Advanced** | $329–$549/mo | Yes, excellent | Partial | Trade-specific | 18x too expensive for sole proprietors |
| **JobTread** | $199/mo + per user | Yes, strong | Limited | Residential GC focus | Too complex; per-user pricing punishes small crews |
| **Buildertrend** | $339–$829/mo | Yes | Partial | Builder-focused | Residential builder market; massive overkill |
| **Jobber** | $29–$299/mo | Limited | None | Field service | CRM/scheduling focus; not accounting |
| **Tradify** | $47–$61/mo per user | Limited | None | Trade-specific | Per-user pricing; not accounting-first |

**The unoccupied position**: Every tool with genuine job costing costs $100+/month. Every tool under $50/month lacks genuine job costing for trade work. The $19/month trade-specific job costing slot with 1099 tracking is genuinely empty.

### Proposed Solution

**TradeBooks** is a web-based job cost accounting tool built exclusively for sole-proprietor and small-crew trade contractors. It solves exactly four problems:

1. **Job Costing**: Every project has an estimated budget and an actual cost tracker. Materials, labor, subcontractor payments, equipment rental, and permit fees are logged against the job — not just against the business. At job close, a single-screen summary shows: estimated cost, actual cost, variance, and gross profit per job. "Did I make money on this job?" takes 3 seconds to answer.

2. **Contractor Invoice Templates**: Professional invoices with line-item breakdowns — materials (list price, quantity, markup), labor (hours × rate), subcontractor costs, permit fees — that look like what homeowners expect from a licensed contractor. Stripe payment link embedded in every invoice.

3. **1099-NEC Subcontractor Tracking**: Log sub payments from day one. Flag when cumulative payments cross the $2,000 threshold. Export a sub payment summary for the accountant in January. (Phase 2: integrate TaxBandits API for direct NEC e-filing.)

4. **Trade-Specific Cost Categories**: Materials, equipment rental, dump fees, permit fees, subcontractor costs, vehicle fuel — pre-configured, ready to use on day one. No chart-of-accounts setup required.

The product is intentionally not a full accounting replacement. It is "job profitability + invoicing + 1099 tracking" positioned alongside Wave (if they want free invoicing) or as a standalone replacement for contractors who need more than Wave offers. The disclaimer is a feature: "Not a full accounting system — the focused tool that solves what QuickBooks overcharges for."

### Key Differentiators

1. **Job costing as the only core feature**: Every design decision optimizes for the question "did I make money on this job?" Not a module. Not an add-on. The reason the product exists.

2. **Contractor-specific invoice format**: Materials + labor + markup + sub line items on a professional template. Not a "freelancer invoice" with one description field. A form that a homeowner recognizes as professional and a contractor recognizes as their workflow.

3. **1099-NEC built in from day one**: The January tax scramble for contractor payments is a recurring, annual pain point. Solving it at no extra cost is a direct differentiator from Wave, FreshBooks, and Xero at this price point.

4. **Flat pricing — no plan tiers**: $19/month. No "job costing add-on." No "unlimited jobs" tier at $49. No per-user fees. The pricing page is one line. This is a structural advantage in a category defined by pricing complexity and annual increases.

5. **"87% cheaper than QB Plus for the same outcome"**: The value proposition is mathematically defensible and immediately calculable. A contractor on QB Plus saves $145/month by switching. LTD buyers save $1,680/year forever.

6. **AppSumo LTD fit**: "Pay once, track your jobs forever" is the exact psychographic match for a trade contractor who thinks about tool purchases the way they think about buying a good drill — once, not every month forever.

---

## Target Users

### Primary Users

#### Segment 1: The QB Plus Refugee (Highest Intent, Fastest Decision)

**Persona — Mike, HVAC Owner-Operator**

- **Profile**: 44 years old, owner of a 2-person HVAC business (himself + one tech). On QB Plus at $140/month since 2021, when it was $70. Just received the 2026 price increase notification.
- **Context**: Bills 8–12 jobs/month ranging from $300 service calls to $8,000 equipment installations. Materials per job range from $50 to $4,000. Uses one regular sub for electrical work; pays him $1,500–$2,500/month in peak season.
- **Current workflow**: QB Plus for accounting, a separate spreadsheet for job-level cost tracking ("QB doesn't make this easy enough"), handwritten materials list converted to invoice manually.
- **Pain**: "I'm paying $140/month for something I use to do $70/month of work. The job costing barely works — I have to allocate every transaction manually. I have a spreadsheet that does it better. And every year the price goes up."
- **Trigger**: Price increase email hits. He does the math: $140/month × 12 = $1,680/year. Posts in r/AskContractors asking for alternatives. Discovers TradeBooks.
- **Decision process**: Looks at pricing ($19/month or $59 LTD) → reads feature list (job costing, contractor invoice, 1099 tracking) → buys the LTD in under 10 minutes.
- **Success moment**: Finishes first job in TradeBooks. Opens the job card: estimated $2,800 in materials + labor. Actual: $3,100. "So I lost $300 on that one. That's why my quote was too low." First time this calculation took less than 2 minutes.
- **Would pay**: $59 LTD immediately. $19/month as subscription. Would not pay $40+/month.
- **Find him at**: r/AskContractors, r/HVAC, contractor Facebook groups, Google "QuickBooks alternative for HVAC contractor"

#### Segment 2: The Spreadsheet Refugee (High Potential, Slower Decision)

**Persona — Carlos, Fence Contractor**

- **Profile**: 31 years old, sole proprietor. 3 years in business. Uses Excel for everything — a job cost spreadsheet he built himself, a separate invoice template in Word, Venmo and cash for sub payments.
- **Context**: Does 15–25 fence jobs/month. Materials per job range from $300 to $2,500. Occasionally uses a sub for concrete post setting.
- **Current workflow**: Spreadsheet with 14 tabs. Job profitability calculated manually. Invoice Word doc copy-pasted for each client. Panic every January to figure out what he paid his sub.
- **Pain**: "My spreadsheet works but it's fragile. Last month I had a formula error and my P&L was off by $800. And I dread January when I have to figure out what I paid my sub all year."
- **Trigger**: Excel formula breaks during a busy week. He posts in r/FenceBuilding asking what software people use for job tracking. Multiple people recommend TradeBooks.
- **Decision process**: Watches the 3-minute demo video → tries the free trial → creates a test job → realizes it does exactly what his spreadsheet does but without maintenance → upgrades.
- **Success moment**: January. Opens TradeBooks sub tracker. Exports the payment summary for his accountant. "That used to take me a full day. Just did it in 10 minutes."
- **Would pay**: $59 LTD (one-time purchase aligns with how he thinks about tools). $19/month less compelling but acceptable if trial converts well.
- **Find him at**: r/FenceBuilding, r/sweatystartup, local contractor Facebook groups

#### Segment 3: The Wave User Who Needs More (Lower Intent, Clear Upgrade Story)

**Persona — Diana, General Contractor (Small Residential)**

- **Profile**: 38 years old, sole proprietor GC doing small residential remodel jobs. Uses Wave for invoicing. Has no job costing at all — bills on a fixed-price basis and hopes the margin works out.
- **Context**: 4–6 active jobs/month. Uses 3–5 different subs depending on the job (tile, drywall, electrical). Each sub gets paid $500–$3,000 per job.
- **Current workflow**: Wave for invoices (free). No expense tracking per job. Manual Venmo/check payments to subs with no record-keeping system.
- **Pain**: "I know I'm losing money on some jobs and making money on others but I have no idea which ones. And every January I have to dig through my bank account to add up what I paid each sub. Wave doesn't help with either of those things."
- **Trigger**: Loses money on a bathroom tile job. Retrospectively tries to figure out where the loss came from. Realizes she has no system to track this. Searches "job costing tool for general contractors."
- **Success moment**: Completes a kitchen remodel and gets the job P&L in TradeBooks — 12% over budget because tile costs ran $800 higher than quoted. "Now I know to add a 10% buffer on material estimates for tile jobs."
- **Would pay**: $19/month (clear upgrade from free Wave). Would be more hesitant about LTD since she's evaluating whether she actually uses it.
- **Find her at**: r/GeneralContractor, r/Construction, Google "Wave alternative job costing"

### Secondary Users

#### Segment 4: The Growing Trade Business (Near-Future)

- Contractor with 2–5 employees who needs basic job-level reporting for payroll allocation
- Starts as a sole-proprietor TradeBooks user, grows the business
- Represents the natural upgrade path to a $29–$49/month tier with crew time tracking and multi-user access
- Not the MVP target but the clearest v2 expansion segment
- Influence on product: multi-user access and time tracking become v2 priorities if Segment 4 activity is visible in MVP usage data

#### Segment 5: The Bookkeeper/Accountant Serving Trades Clients

- CPA or bookkeeper with 5–15 trade contractor clients
- Currently forces clients onto QBO because it's the only thing they know
- If TradeBooks integrates with QBO export or provides accountant access, this channel becomes a referral multiplier
- Not a direct buyer — an influencer who can drive 10–20 clients to TradeBooks at once
- Note: Accountant-partner program is a post-PMF initiative, not MVP

### User Journey

#### Journey: Mike (Primary — QB Plus Refugee)

**1. Discovery**
- Receives QB price increase email in July 2026
- Posts in r/AskContractors: "Anyone else fed up with QB's prices? What are you using?"
- Thread includes multiple TradeBooks mentions with firsthand cost comparisons
- Alternatively: Googles "QuickBooks alternative for HVAC" → lands on comparison article

**2. Evaluation (10–20 minutes)**
- Sees pricing: $59 LTD vs. $140/month QB → immediate math: "$59 vs. $1,680/year"
- Reads feature list: job costing, contractor invoice, 1099 tracking → "that's everything I actually use QB for"
- Reads 3–5 AppSumo reviews → finds at least one from another HVAC contractor
- No free trial needed — the LTD eliminates purchase risk

**3. Purchase**
- Buys $59 LTD on AppSumo (or direct if post-LTD)
- Receives onboarding email: "Set up your first job in 5 minutes"

**4. Onboarding (Target: First Job Created in <10 Minutes)**
- Creates account → sees pre-configured trade cost categories (materials, labor, sub, equipment, permits)
- Creates first job: name, client, estimated budget broken down by category
- Logs actual costs as the job progresses
- Generates invoice: selects job, adds materials + labor line items, adds markup → sends with Stripe payment link
- **Aha moment**: Job closes → job P&L screen shows estimated vs. actual → "I've never been able to see this in under a minute before"

**5. Core Usage (Per-Job Rhythm)**
- Start of job: create job card, set budget
- During job: log material purchases against job (receipt photo or manual entry)
- End of job: generate invoice, collect payment
- Monthly: review job P&L across all jobs for the month
- December: verify sub payments for year-end 1099 prep

**6. Advocacy**
- AppSumo follow-up email → writes review: "Finally replaced QuickBooks for $59"
- When QB price increase threads appear in trade subs → recommends TradeBooks with firsthand data
- Tells his accountant, who mentions it to other contractor clients

---

## Success Metrics

### User Success Metrics

| Metric | Definition | Target Month 3 | Target Month 6 | Target Month 12 |
|---|---|---|---|---|
| **Time to First Job** | Time from signup to first job created with a cost entry | < 10 min | < 8 min | < 6 min |
| **Job Completion Rate** | % of created jobs that reach a "closed" or "invoiced" state | 60%+ | 68%+ | 75%+ |
| **Invoice Completion Rate** | % of jobs that generate a sent invoice via TradeBooks | 55%+ | 65%+ | 72%+ |
| **1099 Feature Adoption** | % of active users who use sub payment tracking | 40%+ | 50%+ | 60%+ |
| **Monthly Active Usage** | % of paying users who log a cost entry or create a job in a given month | 60%+ | 65%+ | 70%+ |
| **Job P&L Views** | % of closed jobs where the user viewed the P&L summary | 70%+ | 75%+ | 80%+ |
| **Payment Collection Rate** | % of invoices paid via Stripe payment link | 30%+ | 40%+ | 50%+ |
| **NPS** | Net Promoter Score at 60 days post-purchase | 38+ | 45+ | 52+ |

**North Star Metric**: Monthly Active Users who complete at least one full job cycle (job created → cost logged → invoice sent). This proves the product is delivering its core value — job-level profitability tracking and professional invoicing — not just being opened and abandoned.

### Business Objectives

**Objective 1: Validate Product-Market Fit via AppSumo LTD Launch (Months 1–3)**
- Run AppSumo campaign generating 500–2,000 purchases at $59 LTD
- Achieve 4.2+ average rating through first 100 reviews
- Validate that the target customer is actually a trade contractor (not a generic freelancer buying an accounting tool)
- Identify top 3 feature requests for v1.5 roadmap prioritization

**Objective 2: Own the "QB Alternative for Contractors" SEO Position (Months 3–9)**
- Build organic ranking for: "QuickBooks alternative for contractors," "job costing software small contractor," "1099 tracking tool for subcontractors"
- Publish seasonal 1099 content before November to capture year-end search traffic
- Build community presence in r/sweatystartup, r/FenceBuilding, r/GeneralContractor before the product launches

**Objective 3: Reach $9,500+ MRR on Subscription (Month 6–12)**
- Close LTD window after AppSumo campaign; transition to $19/month
- Target 500 active monthly subscribers by month 9, 2,000 by month 18
- Use July QB price increase season (annual) as primary acquisition spike

**Objective 4: Launch 1099 E-Filing Integration (Tax Season Year 2)**
- Partner with TaxBandits or BoomTax API for direct 1099-NEC filing from TradeBooks
- Position the January 1099 filing workflow as a subscription retention driver (annual lock-in)
- Target 40%+ of active users with subs to use the e-filing feature in year 2

### Key Performance Indicators

| KPI | Month 3 | Month 6 | Month 12 | Month 18 |
|---|---|---|---|---|
| AppSumo LTD purchases | 500–2,000 | — | — | — |
| AppSumo avg rating | 4.2+ | 4.3+ | — | — |
| AppSumo review count | 75+ | 150+ | — | — |
| Monthly active users | 400–1,600 | 1,200–3,000 | 3,000–6,000 | 8,000+ |
| MRR (subscription) | $0 (LTD phase) | $4,000–$9,500 | $15,000–$38,000 | $50,000+ |
| Monthly churn | — | <8% | <5% | <4% |
| Jobs created/month (platform) | 1,000 | 5,000 | 15,000 | 40,000 |
| G2/Capterra reviews | 20+ | 60+ | 150+ | 300+ |
| Stripe payment volume | $25K | $200K | $1M | $3M |
| CAC (post-LTD) | — | <$50 | <$35 | <$25 |
| LTV:CAC | — | >3:1 | >6:1 | >10:1 |
| AppSumo refund rate | <10% | — | — | — |

---

## MVP Scope

### Core Features

The MVP delivers exactly what is needed to solve the job profitability + invoicing + 1099 tracking problem for sole-proprietor trade contractors. Four features. No more.

#### Feature 1: Job/Project Creation and Cost Tracking

- Create a job with: client name, job type (roofing, HVAC, fence, plumbing, electrical, landscaping, other), estimated budget broken down by cost category
- **Cost categories pre-configured**: Materials, Labor (own), Labor (sub-contractor), Equipment Rental, Permit/Inspection Fees, Dump/Disposal Fees, Vehicle/Fuel, Other
- Log actual costs against the job in real time: amount, category, date, vendor, optional receipt photo
- Mark job as in progress → completed
- **Job P&L screen**: estimated vs. actual by category, gross profit/loss, profit margin %
- Dashboard: active jobs with current budget status (green/yellow/red by % of budget consumed)
- **Why this is MVP**: This is the entire reason the product exists. Without accurate, effortless job cost tracking, there is no product.

#### Feature 2: Contractor Invoice Builder and Sending

- Create invoice from a job: pulls job name, client, line items from cost log (editable before send)
- **Contractor invoice template**: separate line sections for Materials (itemized), Labor (hours × rate), Subcontractor Work (description + amount), Markup (%), Permit/Other Fees, Tax if applicable
- Invoice customization: company name, logo, license number, contractor contact info
- Payment terms: net 10/15/30, due on receipt
- **Stripe integration**: send invoice with embedded payment link; client pays by card from a simple landing page; funds deposited to contractor's connected bank
- Invoice status tracking: draft, sent, viewed, paid, overdue
- Email invoice (PDF attachment + payment link)
- Dashboard widget: total outstanding invoices, total collected this month
- **Why this is MVP**: Professional invoicing that matches the contractor's actual cost structure — not a generic freelancer invoice — is the second core problem. Stripe integration creates a revenue-sharing income stream (Stripe's standard 2.9% + $0.30 per transaction).

#### Feature 3: 1099-NEC Subcontractor Payment Tracking

- Add subcontractors: name, business/individual, EIN or SSN (collected via W-9 upload or manual entry)
- Log payment to sub against a job: date, amount, payment method (check, ACH, Venmo, cash)
- Running annual total per sub with automatic flagging at $2,000 threshold (2026 IRS standard)
- Year-end sub payment summary export: CSV with all sub names, EINs, and annual totals — formatted for accountant or for self-filing
- **Phase 2**: TaxBandits/BoomTax API integration for direct 1099-NEC e-filing from TradeBooks
- **Why this is MVP**: 1099 tracking is described in research as "the #1 January headache for trade contractors." Building this from day one (rather than retrofitting later) makes TradeBooks the tool contractors set up in January instead of at year-end.

#### Feature 4: Dashboard and Reporting

- Business overview: total revenue (this month / YTD), total job costs (this month / YTD), gross profit (this month / YTD)
- Job list: all active and recent jobs with budget status indicators
- Outstanding invoices: total amount and count
- Subs approaching $2,000 threshold: proactive alert
- Simple P&L export: month/quarter/year range, by category, CSV + PDF
- **Why this is MVP**: The dashboard is the product's front door. It must answer "how's my business doing?" in under 5 seconds.

### Out of Scope for MVP

| Feature | Deferred Reason | Future Timeline |
|---|---|---|
| **Bank account sync** | Plaid integration adds complexity and cost; trade contractors are more accustomed to manual/receipt-based entry than service freelancers. MVP validates demand before adding bank feeds. | v1.5 (Month 4–6) |
| **1099 e-filing** (TaxBandits API) | API integration adds scope; export for accountant satisfies MVP. E-filing is a v2 retention driver. | v2 (before tax season Year 2) |
| **Multi-user / crew access** | Solo operators are the MVP target. Adding multi-user requires roles/permissions architecture. | v2 (Month 6–9) |
| **Time tracking** | Labor time tracking is a v2 feature for contractors with employees; sole operators track hours manually. | v2 |
| **Estimates/Quotes** | Desirable but not the core problem. The core problem is tracking actual vs. estimated, not creating estimates. | v1.5 (Month 3–5) |
| **Purchase orders** | Materials procurement workflow is v2 complexity. MVP: log expenses manually. | v2 |
| **Inventory tracking** | Not relevant for service-based trade contractors. | Never in core scope |
| **Payroll** | Out of category entirely. ADP and Gusto own this. | Never |
| **Mobile native app** | Web-first with mobile-responsive design covers the MVP. App store adds release complexity. | v2 |
| **QuickBooks sync** | Data migration is a premium upsell tier ($99 LTD). Not required for new/AppSumo users. | v2 ($99 tier) |
| **Direct tax filing** | Liability risk. Export to accountant is the correct v1 design. | Never in v1 |
| **Client portal** | Clients receive invoice PDFs via email with Stripe payment link. Full portal is v2. | v2 |
| **Recurring jobs** | Nice-to-have for maintenance contractors. Not core for project-based trades. | v1.5 |

**Scope Enforcement Rule**: Every feature request is evaluated against: "Does this help a sole-proprietor trade contractor know if a specific job was profitable, generate a professional contractor invoice, or track sub payments for 1099s?" If the answer is no, it is deferred.

### MVP Success Criteria

The MVP is validated when all five gates are met:

1. **Job Creation Adoption**: 80%+ of paying users create at least one job with a cost entry within their first 7 days (not just sign up and stall).
2. **Invoice Completion**: 60%+ of created jobs generate a sent invoice via TradeBooks (not just job tracking without invoicing).
3. **1099 Feature Activation**: 35%+ of active users add at least one subcontractor to the payment tracker within 30 days (validates that this pain point is real and discovered).
4. **AppSumo Rating**: Maintain 4.0+ average through first 100 reviews with no "doesn't do job costing" complaints in reviews.
5. **Refund Rate**: Less than 12% of AppSumo LTD buyers request a refund in the first 60 days.

**Go/No-Go Decision Point**: If job creation adoption falls below 60% after 200 active users, the onboarding flow is broken and must be redesigned before AppSumo launch scale. If invoice completion is below 45%, the invoice builder UX requires a redesign sprint before broader distribution.

### Future Vision

**Phase 2 (Months 6–12): Bank Sync + 1099 E-Filing + Estimates**

- Bank/credit card connection via Plaid for automatic expense import and job assignment
- 1099-NEC e-filing via TaxBandits API — submit directly from TradeBooks, no accountant required
- Estimate/quote builder as a pre-job step (estimate → approve → becomes job budget)
- Recurring job templates for maintenance contractors (HVAC service agreements, lawn care)
- Mobile app (React Native or PWA) for on-site expense logging

**Phase 3 (Months 12–18): Multi-User + QBO Sync Tier + Vertical Expansion**

- Crew time tracking: log hours per crew member per job
- Multi-user access with roles (owner, office manager, crew lead)
- $99 LTD tier: everything + QuickBooks sync (exports job-level data to QBO for accountants who require it)
- Vertical expansion landing pages: landscaping, pressure washing, mobile mechanics, appliance repair — same product, trade-specific templates and marketing
- Bookkeeper referral program: accountants with trade clients earn $50/client referral

**Phase 4 (Months 18–36): Financial OS for Small Trade Businesses**

- Business bank account integration (Relay, Mercury) for automatic payment categorization
- Job cost prediction: AI learns historical cost patterns by job type and flags bids that are likely to go over budget
- Materials pricing database: contractor enters job type and size, gets pre-populated materials estimate with regional pricing
- "Send invoice, collect payment, file 1099, done" — the complete financial operating system for a trade contractor
- AppSumo 2nd launch with expanded feature set and review base from year 1

**Long-Term Exit Narrative (Year 3–5)**

- Acquisition target: Jobber or ServiceM8 (field service CRM looking to add a real accounting layer), H&R Block/Wave (looking to add job costing for their contractor user base), or Intuit itself (removing an increasingly visible competitive gap)
- Alternatively: own the "job costing for small trades" vertical at scale — 50,000 contractors at $19/month = $11.4M ARR with a clear path to $30M+ with multi-user and vertical expansion

---

## Strategic Context

### Go-to-Market Summary

| Phase | Channel | Target | Revenue |
|---|---|---|---|
| Month 0–3 | Reddit community presence (r/sweatystartup, r/FenceBuilding, r/GeneralContractor) | 50–100 beta users; bug reports; testimonials | $0 (free beta) |
| Month 2–4 | AppSumo LTD launch ($59) | 500–2,000 LTD buyers | $30K–$118K gross |
| Month 4–9 | Direct SEO + AppSumo social proof | Organic subscriber acquisition | Transition to $19/mo |
| Month 6–12 | Subscription + 1099 season SEO content | 500 monthly subscribers | $9,500 MRR |
| Month 9–18 | Annual QB price increase cohort (July) + 1099 season (Nov–Jan) | Compounding seasonal acquisition | $20K–$38K MRR |

**Seasonal acquisition flywheel**: Two predictable annual windows generate contractor switching intent — July (QB price increase notification month) and November–January (1099 prep season). These are recurring, annual acquisition events that compound as the product gains SEO authority and review volume.

### Risk Register

| Risk | Probability | Impact | Mitigation |
|---|---|---|---|
| Wave adds $15/mo job costing add-on | Medium | High | Move fast; AppSumo community creates brand loyalty before Wave acts; Wave's free-first model limits job costing architecture |
| QB launches $39/mo "Contractor Lite" plan | Low-Medium | High | Build brand moat in Reddit communities; LTD buyers are locked in regardless of QB pricing moves |
| Accounting accuracy errors damage brand | Medium | Critical | Limit MVP to cost tracking + invoicing; no double-entry accounting; CPA review before launch; clear disclaimer: "Job profitability tool, not full accounting software" |
| 1099 API scope underestimated | High | Medium | Phase 1 MVP uses export only; TaxBandits integration is v2; this derisks the MVP scope |
| Jobber or ServiceM8 adds real accounting | Low | High | 12–24 month minimum to execute; establish brand before they move |
| AppSumo LTD cohort becomes unsustainable | Medium | Medium | Cap LTD sales at 2,000; publish transparent pricing roadmap; build subscription revenue before LTD burns out |
| Trade contractor TAM smaller than 8M | Medium | Low | Even at 10% of optimistic SAM, the math produces $9,500 MRR at 500 users — the business is viable at small scale |

### Build Timeline

| Milestone | Target |
|---|---|
| Core data model: jobs, costs, line items, clients, subs | Weeks 1–2 |
| Job creation + cost logging UI | Weeks 2–4 |
| Contractor invoice builder + PDF generation | Weeks 3–5 |
| Stripe payment integration on invoices | Weeks 4–6 |
| 1099 sub tracker + payment logging | Weeks 5–7 |
| Dashboard (job list, P&L summary, alerts) | Weeks 6–8 |
| CSV/PDF export (job P&L, sub payments) | Weeks 7–8 |
| Mobile-responsive UI polish | Weeks 8–9 |
| Beta with 20–50 real trade contractors | Weeks 8–12 |
| CPA review of P&L calculations | Week 10 |
| AppSumo application submitted | Month 3 |
| AppSumo launch | Month 4–5 |

**Critical path**: The invoice builder + Stripe integration is the most time-sensitive MVP component because it generates Stripe payment volume (secondary monetization). The 1099 tracker requires W-9 data handling; GDPR/data security review before storing SSN/EIN data is non-negotiable.

---

*Product Brief generated: 2026-10-23*
*Based on: Shortlisted idea (Score: 87/105, Tier 1 — Strong Opportunity) + Comprehensive Market Research completed 2026-10-23*
*Next step: Create PRD (`/bmad-bmm-create-prd`)*
