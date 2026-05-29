# HVAC Maintenance Agreement Autopilot — Score: 91/105

**Verdict**: EXPLORE FURTHER → BUILD
**Tier**: 1 (Strong Opportunity)
**Evaluation Date**: 2026-05-29

## One-Line Pitch

"Never lose a contracted visit again" — standalone maintenance agreement tracker for HVAC shops at $49–79/mo vs. $500/mo+ for ServiceTitan or spreadsheet chaos.

## Problem

Recurring maintenance agreements account for **55% of all HVAC services revenue** in the US (growing 8.3% CAGR). Yet industry data shows **1.4 contracted visits per asset go uncompleted annually** when unmonitored — meaning small HVAC shops lose revenue from agreements they've already sold, simply because they have no system to track whether contracted visits actually happened.

ServiceTitan handles this at $500–$1,500+/mo, priced for 50+ employee shops. Housecall Pro's implementation requires expensive plan upgrades. Most small shops (1–10 techs) use Excel spreadsheets to track when maintenance visits are due across dozens or hundreds of active service contracts — and miss visits constantly.

**No standalone, affordable maintenance agreement management tool exists under $100/mo.**

## Market Evidence

- ~100,000 HVAC contractors in the US; 60%+ of established shops have active maintenance agreement portfolios
- 55% revenue share from maintenance agreements = strong ROI incentive for operators to pay for this
- "HVAC maintenance agreement software" has search demand but no dominant affordable result below $100/mo
- ServiceTitan ($500–$1,500+/mo) and FieldEdge (mid-market) are the only tools addressing this — both priced for large shops
- Housecall Pro ($149–$279/mo) offers basic recurring scheduling with no contract-specific tracking
- Spreadsheets are the dominant "solution" for under-20-tech shops

## Scoring Breakdown

| Criterion | Score | Weight | Weighted | Notes |
|-----------|-------|--------|----------|-------|
| Market Validation | 4/5 | 3x | 12 | Exists with paying customers at $500+/mo; standalone affordable tool doesn't exist yet |
| Competitor Weakness | 5/5 | 2x | 10 | No standalone tool under $100/mo; ServiceTitan overkill; HCP requires upgrade |
| LTD Viability | 4/5 | 2x | 8 | $79–$99 LTD; "never lose a contracted visit again" = strong ROI story |
| No Free Tier | 5/5 | 1x | 5 | Compliance and revenue-tracking tool; no free tier expected |
| Channel Access | 4/5 | 2x | 8 | r/HVAC, r/sweatystartup, HVAC-Talk forums, ACCA events, Facebook HVAC groups |
| Content Potential | 4/5 | 1x | 4 | "HVAC maintenance agreement software", "HVAC service contract tracking" = clear SEO |
| AppSumo Fit | 4/5 | 2x | 8 | Strong AppSumo story: "replace spreadsheets, never miss a contracted visit" |
| Review Potential | 4/5 | 1x | 4 | HVAC shop owners active reviewers; clear ROI to write about |
| MRR Path | 4/5 | 3x | 12 | Agreement management = recurring workflow = natural MRR; annual renewal tracking = built-in churn prevention |
| Build Feasibility | 5/5 | 2x | 10 | Relatively simple CRUD + reminder logic; 2–3 week MVP |
| Boring Business Bonus | 5/5 | 2x | 10 | Deeply boring: HVAC trades |
| **TOTAL** | | | **91/105** | |

## Product Concept

**"AgreementDesk"** — Standalone maintenance agreement tracker for HVAC contractors with 1–10 technicians.

**Core MVP features** (2–3 week build):
- Customer + equipment roster (unit type, age, location, serial number)
- Agreement type configuration (annual / semi-annual / quarterly) + price per agreement
- Auto-generated visit schedule per agreement
- Technician assignment per visit
- Visit completion tracking (status + photo proof + tech notes)
- Renewal date reminders at 90/60/30 days via SMS/email
- **"Missed visit alert"**: if a scheduled visit isn't completed within 7 days of due date → owner notification
- Monthly revenue dashboard: total agreement ARR, visits completed vs. scheduled, renewal pipeline

**Phase 2 (MRR upsells)**:
- QuickBooks integration for automated billing
- Automated renewal proposal email (generates draft renewal quote before expiration)
- Multi-tech assignment and route optimization for same-day agreement visits

**Pricing**:
- $49/mo — up to 50 active agreements
- $79/mo — unlimited agreements, unlimited techs
- LTD: $79 (up to 50 agreements) / $129 (unlimited)

## Key Differentiators

- **No FSM required**: doesn't replace their dispatch software — adds the agreement management layer on top (works alongside ServiceTitan, Jobber, HCP, or nothing)
- **Revenue protection framing**: "1.4 missed visits per asset per year" = ~$150–$500 in lost revenue per asset — easy ROI calculation for HVAC shop with 100+ assets under contract
- **"Agreement ARR" dashboard**: first time many small shops will see their agreement revenue as a real number, not a spreadsheet cell

## Target Channels

- r/HVAC (250K+ members), r/sweatystartup, r/hvacadvice
- HVAC-Talk forum (industry forum for HVAC techs + owners)
- ACCA (Air Conditioning Contractors of America) — 60K+ members
- Facebook: "HVAC Business Owners Network" (50K+), "HVAC Contractor Talk" (30K+)
- YouTube HVAC business channels (TheHVACShop, HVAC Know It All, Kalos Services)
- Search: "HVAC maintenance agreement software", "HVAC service contract management"

## Risks

1. **Standalone vs. feature**: Could be positioned as an FSM module rather than a standalone product; ServiceTitan has this for their customers. Mitigation: explicitly targets shops NOT using ServiceTitan (80%+ of the market).
2. **Spreadsheet inertia**: Many shop owners don't realize how many visits they're missing. Mitigation: "missed visit calculator" on landing page (enter number of agreements → estimated missed revenue per year).
3. **Market size**: 100K HVAC contractors is smaller than cleaning or landscaping. Mitigation: expandable to HVAC + plumbing + electrical (any service-contract-heavy trade) after validating with HVAC.

## Source Links

- https://www.servicetitan.com/blog/hvac-service-contracts
- https://ifactoryapp.com/industries/hvac/hvac-maintenance-agreement-management-service-contracts
- https://buildops.com/resources/hvac-service-agreement-software/
- https://oxmaint.com/industries/hvac/hvac-service-agreement-management-software
- https://www.bdrco.com/blog/hvac-business-software-guide/

## Signal History

| Date | Score | Sources | Notes |
|------|-------|---------|-------|
| 2026-05-29 | 91/105 | reddit-2026-05-29 | First identified — 55% HVAC revenue is agreement-based; 1.4 missed visits/asset/year = real daily revenue loss; ServiceTitan $500+/mo only option; no standalone tool under $100/mo; 100K contractors + 60%+ with agreement portfolios; 2–3 week MVP; "never lose a contracted visit again" LTD pitch; AgreementDesk concept |
