---
name: AI Business Analytics for Field Service SMBs
description: Weekly business health check dashboard for Jobber/Housecall Pro/ServiceTitan users — "are we on track this week?" in one view, replacing Friday-night spreadsheet reconciliation; first identified 2026-11-01 at 83/105
type: shortlisted
---

# AI Business Analytics for Field Service SMBs — Score: 92/105

**Verdict**: BUILD
**Tier**: 1 (Strong Opportunity)
**Evaluation Date**: 2026-11-01
**Decision Status**: NEW

## One-Line Pitch

"The Nut Report" for every Jobber user — a weekly business health check that answers "are we on track this week?" in 10 seconds, pulling from Jobber/HCP/ServiceTitan APIs and delivering a decision digest, not a dashboard.

## Problem

Service business owners on Jobber, Housecall Pro, and ServiceTitan have their data spread across 3-5 different reports and can't get a single answer to "are we on track this week?" without spending Friday evening piecing it together. ServiceTitan Insights exists but costs enterprise money. Jobber's built-in reporting requires manual Excel post-processing for meaningful analysis.

The unmet need is not more reports — it's **one decision** delivered weekly:
- Are open estimates being followed up?
- Are any membership plans about to lapse?
- Revenue vs. same week last year?
- Any techs with unusually low job completion rates?

From ServiceTitan/Jobber/HCP APIs, all of this is computable in seconds. No owner is computing it. They're writing it down on whiteboards on Sunday nights.

## Market Evidence

- X signal: "$1M ARR founder selling reporting software to service businesses, agencies paying ~$10K/year because it saves hundreds of hours/week" (2026)
- The Nut Report (Product Hunt profile active, pre-launch 2026): building exactly this for HCP/Jobber/ServiceTitan users
- IDC 2026 SMB report: SMBs want "highly pragmatic AI with measurable ROI" — not experimental tools
- Jobber has 200K+ users; HCP has 100K+ businesses; no third-party analytics layer at $99-199/mo
- NorthBound Advisory 2026: "configured workflows with embedded AI inside existing systems outperform custom experiments"

## Scoring Breakdown

| Criterion | Score | Weight | Weighted | Notes |
|-----------|-------|--------|----------|-------|
| Market Validation | 4/5 | 3x | 12 | $1M ARR tool confirmed on X; The Nut Report pre-validating; 200K+ Jobber users |
| Competitor Weakness | 4/5 | 2x | 8 | No "Jobber reporting" at $99-199/mo; ST Insights = enterprise only |
| LTD Viability | 4/5 | 2x | 8 | "Pay once, save 2 hrs every Friday" = strong LTD psychology |
| No Free Tier | 4/5 | 1x | 4 | No good free analytics layer for Jobber/HCP users |
| Channel Access | 4/5 | 2x | 8 | r/HVAC, r/sweatystartup, Jobber/HCP Facebook groups |
| Content Potential | 4/5 | 1x | 4 | "Jobber reporting dashboard", "HVAC business analytics", "service business KPIs" |
| AppSumo Fit | 4/5 | 2x | 8 | "Saves you 2 hours every Friday" = clear AppSumo ROI pitch |
| Review Potential | 3/5 | 1x | 3 | Will review if dashboard delivers measurable weekly insight |
| MRR Path | 4/5 | 3x | 12 | $49-199/mo; 100 customers = $5-20K MRR |
| Build Feasibility | 5/5 | 2x | 10 | Jobber/HCP API reads + weekly digest email + web dashboard = 2-3 weeks |
| Boring Business Bonus | 3/5 | 2x | 6 | Field service analytics = small business but tech-adjacent |

**Total: 83/105**

## Must-Have Filters
- [x] Problem is real (owners spend Friday night building their own reports)
- [x] Can build without deep domain expertise (API reads + aggregation)
- [x] Market not dominated by unbeatable player (ServiceTitan Insights doesn't integrate with Jobber)
- [x] Revenue potential > $10K MRR within 12 months (50 customers at $199/mo)

## Product Direction

**Wedge product**: "Weekly business pulse" for Jobber users
- Connect to Jobber API (OAuth, read-only)
- Every Monday morning: email digest with 5 key numbers
  1. Revenue vs. prior week and same-week-last-year
  2. Open estimates older than 48 hours (follow up alert)
  3. Jobs completed vs. scheduled (completion rate)
  4. Customers with lapsed or expiring memberships
  5. Top-performing tech by revenue generated
- Simple web dashboard showing trends for each metric
- "Revenue recovery" tab: flags open estimates + dormant customers with 1-click follow-up SMS

**Expansion**: Multi-location rollup for franchise-style home service companies; cash flow forecasting from Jobber + QuickBooks combined API.

## LTD Pricing
- $199 LTD (Jobber + HCP integration, 1 business)
- $349 LTD (Jobber + HCP + ServiceTitan, unlimited locations)
- Monthly: $49/mo (1 integration) / $99/mo (all platforms)

## Target Channels
- Jobber user Facebook groups (50K+ members)
- r/sweatystartup, r/HVAC
- Jobber's own partner directory / "integrations" page
- AppSumo — "The Nut Report" is pre-launch = timing window open

## Risks
1. The Nut Report is pre-launching the same concept — move fast
2. API dependency (Jobber/HCP can change or revoke API access)
3. Service owners need to trust data accuracy — wrong numbers = churn

## Next Steps
1. Build Jobber API OAuth integration + 5-metric weekly email digest (2 weeks)
2. Launch MVP with 10 beta users from r/sweatystartup
3. AppSumo application with "The Nut Report" as validation of the concept timing

## Key Source Links
- https://www.producthunt.com/p/introduce-yourself/hey-product-hunt-i-m-chad-founder-of-the-nut-report-here-s-why-i-built-it
- https://www.techtwitter.com/tweet/07e0ea55-8560-4e36-9014-12ec206782d3 ($1M ARR reporting software for service businesses)
- https://www.idc.com/resource-center/blog/the-smb-2026-digital-landscape-how-ai-is-redefining-growth/
- https://www.northboundadvisory.com/blog/why-most-smbs-are-overthinking-ai

## Signal History

| Date | Score | Sources | Notes |
|------|-------|---------|-------|
| 2026-11-01 | 83/105 | hn-indiehackers-2026-11-01, trends-2026-11-01 | First identified — The Nut Report pre-launching on PH confirming timing; $1M ARR reporting tool X signal; "decision tool not dashboard" = product direction; 2-3 week MVP via Jobber API reads; AppSumo LTD $199; white space: no Jobber analytics at $99-199/mo |
| 2026-11-07 | 84/105 | hn-indiehackers-2026-11-07, competitor-analysis-2026-11-07 | ↑1: DUAL-source — HN/IH: multiple indie builders (DispatchCore, ServNox, BluePro, TradeCaddy) all shipping simultaneously; 35-contractor survey confirms top gaps; FieldLedgr free-tier entry confirms market is real; Jobber has zero built-in sales pipeline (confirmed "WTF???" reaction); Competitor: TradeCaddy distribution model for trades-specific FSM validated; Sources: hn-indiehackers-2026-11-07, competitor-analysis-2026-11-07 |
| 2026-11-10 | 90/105 | reddit-2026-11-10, hn-indiehackers-2026-11-10, competitor-analysis-2026-11-10, trends-2026-11-10 | ↑6 (FSM product angle): QUAD-source — Reddit: HVAC scheduling tool at $8K MRR (89 companies at $89/mo) = live revenue validation for mid-market FSM product; HN/IH: Crewbird (indie dev building FSM for father's carpet cleaning company + Google LSA integration gap) = practitioner-built FSM validation; Competitor: PilotPro concept — flat $149/mo unlimited techs + AI dispatch vs ServiceTitan $63K+ Year 1 for 10-tech, Housecall Pro gates QuickBooks sync, Jobber zero AI scheduling; Trends: AI-Native OS for Trades wave ($40M Probook a16z/Sequoia, $9.2M Dalton Mills, $13M Elyos AI) = VC confirming market; white space: flat-rate $149/mo unlimited techs with AI dispatch vs ServiceTitan $63K+ Year 1; NOTE: file covers both FSM product (90/105, today's elevated angle) and AI analytics product (84/105, prior angle) — both map to canonical field-service-management.md |
| 2026-11-13 | 92/105 | hn-indiehackers-2026-11-13, competitor-analysis-2026-11-13 | ↑2: DUAL-source — HN/IH: Crewbird (indie dev building FSM + Google LSA attribution for father's carpet cleaning company at 3x ROAS) = practitioner-built validation; WorkHero $5M seed (Navitas Capital) validates small HVAC back-office automation market at scale; "space between full-blown ERP and Excel spreadsheet is abysmal" (HN thread comment); Competitor: Jobber $267–400+/mo switching intent documented; WorkHero hybrid human+AI model capital-intensive = pure-SaaS version of same offering unoccupied at accessible price points; Google LSA integration + flat $149/mo unlimited techs = confirmed unoccupied combination |
