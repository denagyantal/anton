---
name: Field Service Job Costing & Profitability Analytics
score: 84/105
tier: 1
verdict: BUILD
date: 2026-11-17
---

# Field Service Job Costing & Profitability Analytics — Score: 84/105

**Verdict**: BUILD
**Decision Status**: NEW

## One-Line Pitch
Lightweight analytics layer that syncs with Jobber/Housecall Pro via API and delivers a weekly scorecard to HVAC/plumbing/landscaping owners: gross margin per job type, labor hours vs estimate, revenue per truck day, callback rate per tech — the Sunday-night Excel killer.

## Problem
"Jobber has been great for scheduling and invoicing. But when it comes to actually understanding the business — which tech is making me money, which jobs are killing my margins — I'm still doing it manually in Excel every Sunday."

HVAC/plumbing/landscaping owners with 5–20 techs can schedule and invoice in Jobber or Housecall Pro, but Sunday-night Excel is still the only way they know their actual margins. The data already exists in their FSM — it's just not surfaced intelligently.

**What's missing (and nobody is building it affordably):**
- Which job types (tune-ups vs. repairs vs. installs) have best gross margin?
- Which technicians make money vs. consistently go over their time estimates?
- Revenue per truck day across the fleet?
- Callback rate per tech (warranty calls that cost time with no revenue)?
- Which clients are chronically unprofitable (should they be dropped)?

ServiceTitan has this functionality but costs $500–2,500+/mo. Jobber/HCP have zero per-job profitability analytics. The gap: a focused analytics add-on at $29–49/mo that integrates via Jobber API.

**Reference:** Breezy HVAC hit $250K ARR in 9 months by identifying and codifying one painful manual workflow in HVAC that nobody else had bothered to model correctly.

## Market Evidence
- r/FieldService: "anyone actually know their numbers or are we all flying blind?" thread — multiple HVAC/plumbing owners describing Sunday-night Excel
- r/Plumbing, r/AskContractors: "which tech is making me money" threads — consistent theme
- Multiple threads with 20–50 upvotes each across r/FieldService, r/HVAC, r/Plumbing, r/AskContractors
- Jobber API: publicly available, well-documented, allows job/timesheet/invoice data export
- Breezy HVAC case study: $0 → $250K ARR in 9 months by owning one workflow; "moat is the manual workflow nobody else has bothered to model correctly"

## Scoring Breakdown

| Criterion | Score | Weight | Weighted | Notes |
|-----------|-------|--------|----------|-------|
| Market Validation | 4/5 | 3x | 12 | Multiple threads, consistent "Sunday-night Excel" theme; Breezy HVAC $250K ARR validates approach |
| Competitor Weakness | 4/5 | 2x | 8 | ServiceTitan has this but at $500–2,500+/mo; Jobber/HCP have zero per-job analytics |
| LTD Viability | 4/5 | 2x | 8 | Analytics add-on tool → $79–99 LTD is compelling |
| No Free Tier | 4/5 | 1x | 4 | Operators with 5–20 techs have budget for tools that show real ROI |
| Channel Access | 4/5 | 2x | 8 | r/FieldService, r/HVAC, r/Plumbing, r/AskContractors |
| Content Potential | 3/5 | 1x | 3 | "field service profitability analytics" — niche but findable |
| AppSumo Fit | 3/5 | 2x | 6 | Requires existing Jobber/HCP account = somewhat limited AppSumo audience |
| Review Potential | 3/5 | 1x | 3 | Analytics tools generate reviews but it's niche |
| MRR Path | 4/5 | 3x | 12 | Add-on → grow into full job costing + estimating → eventually standalone FSM |
| Build Feasibility | 5/5 | 2x | 10 | Jobber API + analytics dashboard = 2–3 weeks MVP; no mobile app needed |
| Boring Business Bonus | 5/5 | 2x | 10 | Field service = deeply boring; analytics for trades = doubly boring |

**Total: 84/105**

## Must-Have Filters
- [x] Problem is real ("Sunday-night Excel" confirmed by multiple community threads)
- [x] Can build without deep domain expertise (API integration + data visualization + scheduled reports)
- [x] Market not dominated by single unbeatable player (ServiceTitan has this but at unaffordable price)
- [x] Revenue potential > $10K MRR (350 shops × $29/mo = $10.2K MRR; achievable in 6–9 months)

## Product Concept

**"MarginPulse"** — Weekly profitability scorecard for field service businesses.

**Core features (MVP):**
1. **Jobber sync** — connect via OAuth → pull jobs, timesheets, invoices, expenses
2. **Weekly scorecard email** — every Monday: top 5 job types by gross margin, bottom 5 techs by efficiency, revenue per truck day
3. **Job margin drill-down** — click any job type → see all jobs of that type, margin distribution, outliers
4. **Tech performance dashboard** — time-to-complete vs. estimate per tech; callbacks per tech; revenue generated per tech
5. **Housecall Pro integration** — same as Jobber (second integration)

**Differentiators:**
- Zero new data entry — all data already in Jobber/HCP
- Weekly email scorecard format = actionable, not just a dashboard to log into
- Shows profit, not just revenue — the fundamental gap in existing tools
- Priced for 5–20 tech shops, not enterprise

**Phase 2 expansion:**
- ServiceTitan integration (for shops that can afford it but want better analytics)
- Estimating accuracy reports (quoted vs. actual per job type)
- Material cost tracking against estimates
- Client profitability scoring (which clients should be dropped)

**Pricing:**
- $29/mo (Jobber or HCP sync, up to 10 techs)
- $49/mo (both platforms, unlimited techs)
- LTD: $79 (single platform) / $99 (both platforms)

## Target Market
- HVAC shops: 5–20 techs, $1M–$5M revenue
- Plumbing businesses: 5–15 techs
- Landscaping companies: 5–20 crews
- Any field service shop already using Jobber or Housecall Pro

## Go-to-Market
1. r/HVAC, r/FieldService — "Built a weekly profitability report for Jobber users — no Excel, just your margins every Monday morning"
2. Jobber community (Jobber has an active online community and partner marketplace)
3. HCP marketplace
4. AppSumo at $79 LTD (Jobber integration)

## Risks
1. Jobber could build native analytics and kill add-on market
2. Depends on Jobber API continuing to be open and not charging for access
3. ServiceTitan could release a cheaper analytics-only tier
4. Limited to customers already using Jobber/HCP — can't acquire customers who don't

## Key Source Links
- https://www.reddit.com/r/FieldService/comments/1tggzn6/anyone_actually_know_their_numbers_or_are_we_all/
- https://www.reddit.com/r/Plumbing/comments/1rqe4dh/plumberswhat_appsoftware_do_you_use_to_handle/
- https://www.reddit.com/r/AskContractors/comments/1rqe9ux/small_trade_business_ownerswhat_job/
- https://www.silasreinagel.com/product/software-engineering/saas/vertical-saas/founding-engineer/2023/11/15/breezy-0-to-250k-arr-owning-the-manual-workflow/

## Signal History
| Date | Score | Sources | Notes |
|------|-------|---------|-------|
| 2026-11-17 | 84/105 | reddit-2026-11-17, hn-indiehackers-2026-11-17 | First identified — "Sunday-night Excel" pattern confirmed across r/FieldService, r/HVAC, r/Plumbing; Jobber API publicly available = low build risk; Breezy HVAC $250K ARR in 9 months is the playbook reference; ServiceTitan has this at $80K+/yr = clear white space; $79 LTD vs $29/mo subscription = good AppSumo offer |
