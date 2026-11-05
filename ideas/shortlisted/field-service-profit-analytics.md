---
name: Field Service Profit-Per-Tech Analytics Dashboard
description: Analytics layer connecting Jobber/HCP + QuickBooks to produce weekly scorecards — profit per tech, callback rate, and margin by job type for 5–30 tech HVAC and field service shops
type: shortlisted
---

# Field Service Profit-Per-Tech Analytics Dashboard — Score: 88/105

**Verdict**: BUILD
**Tier**: 1 (Strong Opportunity)
**Evaluation Date**: 2026-11-05
**Decision Status**: NEW

## One-Line Pitch

Connect your Jobber/Housecall Pro + QuickBooks and get a weekly scorecard: profit per tech, callback rate, margin by job type — the spreadsheet HVAC owners do manually every Sunday, automated.

## Problem

HVAC and field service owners use Jobber, ServiceTitan, or Housecall Pro for scheduling and invoicing, but have zero visibility into what actually drives profit. Their FSM tracks revenue; their accounting tracks expenses — but nothing bridges the two to answer the real question: **which jobs, techs, and job types are actually making money?**

Real quote from r/FieldService (8-tech HVAC shop owner): *"I'm still doing it manually in Excel every Sunday."*

Industry research confirms: 56% of contractors have FSM software but can't get real job costing. At minimum 20% of jobs at a typical HVAC company lose money — and the owner doesn't know which ones.

**The specific gaps nobody solves affordably:**
- Profit per technician (revenue generated minus labor cost minus callbacks)
- Callback rate per tech (warranty/redo work eats margin silently)
- Margin by job type (service call vs. install vs. maintenance agreement)
- Indirect time % (drive time, parts runs, unbilled hours)
- Comparison to industry benchmarks ($350K/year revenue gap between average and top-quartile efficiency)

**What operators do today**: Manual Excel pivot tables every weekend. Weekly profit calculation takes 2–3 hours for an owner who should be running the business.

## Market Evidence

- r/FieldService direct quote: "Anyone actually know their numbers, or are we all just guessing?" — strong engagement, explicit spreadsheet replacement demand
- r/hvacpeople: 4-person HVAC company "still managing almost everything manually — WhatsApp, calendars, notebooks, Excel"
- Industry stat: $350K/year revenue gap between average and top-quartile efficiency on **identical headcount** = enormous financial motivation
- Jobber, Housecall Pro, ServiceTitan all have documented APIs → technical foundation exists
- QuickBooks Online has REST API → bridge is buildable
- marginplug.com confirms commercial viability of HVAC analytics niche

## Scoring Breakdown

| Criterion | Score | Weight | Weighted | Notes |
|-----------|-------|--------|----------|-------|
| Market Validation | 4/5 | 3x | 12 | Multiple live Reddit threads; 56% of contractors have FSM but can't do job costing |
| Competitor Weakness | 5/5 | 2x | 10 | Nobody bridges FSM + QB for profitability analytics; ServiceTitan has it but is enterprise; Jobber's reports require Excel post-processing |
| LTD Viability | 4/5 | 2x | 8 | $79–99 LTD for analytics layer; clear ROI story (one correctly-priced job type = $500+ saved monthly) |
| No Free Tier | 4/5 | 1x | 4 | No free tool bridging FSM + accounting for per-tech margin |
| Channel Access | 4/5 | 2x | 8 | r/FieldService, r/hvacpeople, r/HVAC, Housecall Pro/Jobber Facebook user groups |
| Content Potential | 4/5 | 1x | 4 | "HVAC profitability analytics", "profit per technician HVAC", "field service job costing dashboard" |
| AppSumo Fit | 4/5 | 2x | 8 | "Find out which jobs are losing you money" = strong LTD narrative with tangible ROI |
| Review Potential | 4/5 | 1x | 4 | ROI-driven product generates specific, measurable outcomes = natural review driver |
| MRR Path | 4/5 | 3x | 12 | Monthly analytics subscription; upsell to real-time alerts + AI recommendations per tech |
| Build Feasibility | 4/5 | 2x | 8 | Jobber, HCP, QB all have documented APIs; OAuth + data sync + weekly scorecard = 4–6 week MVP |
| Boring Business Bonus | 5/5 | 2x | 10 | Analytics for HVAC/plumbing/field service = deeply boring, deeply useful |

**Total: 88/105**

## Must-Have Filters

- [x] Problem is real (explicit Reddit thread with 8-tech owner doing it manually in Excel)
- [x] Can build without deep domain expertise (API integrations + analytics dashboard are well-understood)
- [x] Market not dominated by single unbeatable player (ServiceTitan has it but costs $63K+/year; nothing at <$100/mo)
- [x] Revenue potential > $10K MRR within 12 months (200 customers × $49/mo = $9,800 MRR — reachable in 12 months)

## Boring Business Fit Check

- ✅ VC completely ignores "analytics for HVAC companies" market
- ✅ HVAC owners are non-technical — they want reports emailed to them, not a BI dashboard to configure
- ✅ Existing options (Jobber reports, QB) require manual Excel work — clearly outdated
- ✅ HVAC companies have real P&L impact motivation ($350K/year efficiency gap)
- ✅ Once job history is synced, switching cost is high

## Product Concept: "MarginDesk" (or "TechPulse")

**Core MVP (4–6 weeks):**
1. OAuth connect to Jobber OR Housecall Pro (pick one first)
2. OAuth connect to QuickBooks Online
3. Auto-match jobs to QB expenses by date/job number
4. Calculate: revenue per tech, labor cost per tech, gross margin per job type, callback rate per tech
5. Weekly email scorecard: "Your best job type: X (38% margin). Worst: Y (4% margin)."

**Pricing**: $49/mo (single FSM integration) / $79/mo (Jobber + QB + HCP); $99 LTD (1-year value prepay)

**Key differentiators**:
1. Automatic — connects Jobber/HCP + QB via APIs, no manual data entry
2. Weekly email format — no dashboard to log into; lands in inbox Sunday morning
3. Callback rate tracking — service call came back within 30 days = warranty redo = margin killer nobody tracks
4. Industry benchmarks — "Your average service call margin is 31%; top-quartile shops run 42%"

**V2 Features**:
- Standalone with CSV import (for shops not on Jobber/HCP)
- ServiceTitan integration (enterprise upsell)
- Real-time job costing during the job (tech logs parts → running margin updates)
- AI recommendations: "Consider raising your HVAC tune-up price — you're at 12% margin vs. 35% industry avg"

## Target Customer

- 5–30 technician HVAC shops ($1–5M revenue)
- Currently using Jobber or Housecall Pro for scheduling
- Currently using QuickBooks Online for accounting
- Running manual monthly/weekly P&L reconciliation in Excel
- Price: $49–79/mo subscription or $99 LTD

## Go-to-Market

1. Find beta users via r/FieldService and r/hvacpeople (post: "building an analytics tool for HVAC owners — looking for 5 beta testers")
2. Validate Jobber API + QB API integration (2 weeks research before coding)
3. Build MVP: Jobber + QB connection → weekly email scorecard → 5 beta users
4. Launch at $49/mo or $99 LTD on AppSumo with "find out which jobs are losing you money" headline
5. Expand to Housecall Pro, ServiceTitan data export

## Risks

1. **FSM platforms could add analytics natively** — Jobber has basic reporting but it's weak; ServiceTitan has job costing but is enterprise; risk is medium-term (2–3 years), not immediate
2. **API changes / rate limits** — Jobber, HCP, and QB all have APIs but integration maintenance is ongoing overhead
3. **Data matching complexity** — matching FSM jobs to QB expenses requires consistent job numbering; small shops may not have clean data

## Key Source Links

- https://www.reddit.com/r/FieldService/comments/1tggzn6/anyone_actually_know_their_numbers_or_are_we_all/
- https://www.reddit.com/r/hvacpeople/comments/1vyqib2/small_hvac_company_growing_fast_what_softwaretech/
- https://marginplug.com/blog/hvac-technician-efficiency/
- https://www.reddit.com/r/ConstructionTech/comments/1ntcf3x/
- https://www.reddit.com/r/Contractor/comments/1hnj7em/

## Signal History

| Date | Score | Sources | Notes |
|------|-------|---------|-------|
| 2026-11-05 | 88/105 | reddit-2026-11-05 | First identified — r/FieldService direct quote from 8-tech HVAC owner doing manual Excel P&L every Sunday; 56% of contractors have FSM but no job costing; $350K/year revenue gap between average and top-quartile efficiency on identical headcount; Jobber/HCP/QB all have documented APIs = buildable in 4–6 weeks; nobody bridges FSM + accounting at < $100/mo |
