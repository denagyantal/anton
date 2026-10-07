---
name: Job Profitability Tracker for Trades
description: Per-job P&L for plumbing/HVAC/electrical shops — job card with materials + time → auto-calculate job margin → "which jobs are making you money" dashboard; QBO integration — first identified 2026-10-07 at 88/105
type: shortlisted
---

# Job Profitability Tracker for Trades — Score: 88/105

**Verdict**: BUILD  
**Tier**: 1 (Strong Opportunity)  
**Evaluation Date**: 2026-10-07  
**Decision Status**: NEW

## One-Line Pitch

Per-job P&L for small plumbing, HVAC, and electrical shops — finally know which jobs are making you money and which are eating your margins.

## Problem

Small trade businesses (1–8 employees: plumbing, HVAC, electrical, general contracting) run Google Calendar + QuickBooks and have zero per-job P&L visibility. They know they're busy but don't know which jobs are profitable. The pattern is universal:

- A plumbing shop does 15 jobs this week. Gross revenue looks fine. But which 3 jobs lost money after materials + drive time + tech hours?
- A HVAC shop bids flat-rate on service calls. Which call types are draining margin? Coil replacements or equipment installs?
- An electrician is pricing panel swaps the same way for 2 years. Are they actually profitable at current material costs?

**The gap**: ServiceTitan has job costing but costs $1,000–$5,000+/month (enterprise-only). QuickBooks doesn't correlate job-level time + materials. JobTread targets $2M+ revenue shops. Nothing exists under $100/month that does: job card → materials + labor tracking → margin calculation → P&L by job type.

## Market Evidence

- r/Plumbing thread (2026-03-11): "The biggest pain point I hear about isn't really dispatching — it's tracking what jobs actually made money after materials and time." — dozens of confirming comments
- r/Accounting (2026-04-09): explicit request for right software stack for small plumbing shop; no single tool answer
- QuickBooks raising prices 400% in 3 years (NerdWallet 2026 article on QB refugees) = active switcher market
- JobTread exists for $2M+ shops = proves the idea but confirms the small-shop gap
- Google Calendar + QuickBooks "default combo that breaks down" — confirmed across multiple threads

## Scoring Breakdown

| Criterion | Score | Weight | Weighted | Notes |
|-----------|-------|--------|----------|-------|
| Market Validation | 4/5 | 3x | 12 | Multiple threads, QuickBooks + Calendar combo universally broken for job P&L |
| Competitor Weakness | 5/5 | 2x | 10 | ServiceTitan $1K+/mo; QuickBooks no job correlation; nothing under $100/mo |
| LTD Viability | 4/5 | 2x | 8 | $99 LTD; "find the losing job types" = clear ROI story |
| No Free Tier | 4/5 | 1x | 4 | No free job-level P&L tool exists |
| Channel Access | 4/5 | 2x | 8 | r/Plumbing, r/HVAC, r/Accounting, r/smallbusiness; HVAC + plumbing FB groups |
| Content Potential | 4/5 | 1x | 4 | "job costing for plumbers", "HVAC job profitability tracker" = low competition SEO |
| AppSumo Fit | 4/5 | 2x | 8 | "See which jobs are actually making you money" = clear AppSumo pitch |
| Review Potential | 4/5 | 1x | 4 | Owners review when margin improvement is measurable |
| MRR Path | 4/5 | 3x | 12 | $29/mo flat; QBO integration = recurring stickiness |
| Build Feasibility | 4/5 | 2x | 8 | Job card + time+materials entry + margin calc + QBO sync = 3-4 weeks |
| Boring Business Bonus | 5/5 | 2x | 10 | Plumbing/HVAC/electrical = deeply boring |

**Total Weighted Score: 88/105**

## Must-Have Filters
- [x] Problem is real (r/Plumbing + r/Accounting threads, QuickBooks default broken for job-level P&L)
- [x] Can build without deep domain expertise (job card + QBO sync)
- [x] No dominant player under $100/mo (ServiceTitan enterprise-only; JobTread for large shops)
- [x] Revenue potential > $10K MRR within 12 months (300 shops × $29/mo = $8,700 MRR; 400 shops = $11,600 MRR)

## Boring Business Fit Check
- ✅ VCs ignore plumbing/HVAC job costing entirely
- ✅ Shop owners are non-technical; need it to "just show the numbers"
- ✅ ServiceTitan has this feature — proves it's worth building — but is priced out of the small shop segment
- ✅ Trades businesses have real budgets (already paying $38–$90/mo for QuickBooks)
- ✅ Once integrated with their workflow and QBO, switching = losing all job history

## Product Concept

**"JobLens"** (or "TradeMargin" / "ProfitRoute")

**Core MVP (3-4 weeks)**:
1. **Job card creation** — customer name, job type, address, date
2. **Materials entry** — line items (part name, cost, quantity); running total
3. **Time tracking** — tech time entry (hours + hourly cost rate); auto-calculates labor cost
4. **Auto-margin calculation** — revenue (invoice amount) - materials - labor = job profit + margin %
5. **Dashboard** — "Your last 30 jobs" sorted by margin; job type breakdown ("Service calls: 42% avg margin; Installs: 28% avg margin")
6. **QuickBooks Online sync** — import invoices automatically; tag expenses to jobs

**Phase 2**:
- Material cost tracking (link to supplier invoices to auto-update material costs)
- Overhead allocation (truck costs, insurance per hour of billable time)
- Seasonal profitability view (summer HVAC vs winter HVAC)
- Export for accountant review

**Pricing**:
- $29/month flat (unlimited jobs, unlimited techs)
- $99 LTD — AppSumo edition (lifetime access, up to 50 jobs/month)
- $149 LTD — unlimited

## Key Differentiators
1. **Standalone** — doesn't require switching FSM or accounting; works alongside Jobber/HCP/QuickBooks
2. **Job-type analytics** — not just "which jobs" but "which types of jobs" = pricing intelligence
3. **Mobile-first** — tech enters materials in the field; owner sees margins in real-time
4. **"Find the money" framing** — not "job costing" (accounting term) but "which jobs made you money this month"

## Target Channels
- r/Plumbing, r/HVAC, r/hvacpeople, r/Accounting, r/smallbusiness
- Facebook: "HVAC Business Owners", "Plumbing Business Owners", "Sweaty Startup Community"
- QuickBooks/FreshBooks migration communities (pricing complaints)
- SEO: "job costing for plumbers", "how to track profit per job HVAC", "HVAC job profitability"
- AppSumo: "$99 one-time — stop guessing which jobs are profitable"

## Risks
1. **Already a feature**: `hvac-small-shop-dispatch.md` includes job costing — could position as standalone module or roll into that product
2. **QBO integration complexity**: OAuth + sync edge cases + accounting accuracy = needs careful build
3. **Trust gap**: Trade businesses may not trust P&L data without full accounting reconciliation

## Key Source Links
- https://www.reddit.com/r/Plumbing/comments/1rqe4dh/plumberswhat_appsoftware_do_you_use_to_handle/
- https://www.reddit.com/r/Accounting/comments/1sgf7ho/software_for_small_plumbing_shop/
- https://www.nerdwallet.com/article/small-business/quickbooks-alternatives-signs

## Signal History

| Date | Score | Sources | Notes |
|------|-------|---------|-------|
| 2026-10-07 | 88/105 | reddit-2026-10-07, competitor-analysis-2026-10-07 | First identified — r/Plumbing confirms "tracking what jobs actually made money" is #1 pain beyond dispatching; QuickBooks + Google Calendar default has zero job-level P&L; ServiceTitan $1K+/mo only option; JobTread for $2M+ shops; "JobLens" concept: job card + materials + labor → margin calc → "which jobs are profitable" dashboard + QBO sync; $99 LTD; $29/mo recurring; 3-4 week MVP |
