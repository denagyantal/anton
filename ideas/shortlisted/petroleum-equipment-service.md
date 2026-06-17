---
name: Petroleum Equipment Service Software
description: Digital compliance and service management for petroleum equipment contractors (fuel pump installation/maintenance, UST testing, vapor recovery) — pen-and-paper industry with EPA/state regulatory mandate
type: project
---

# Petroleum Equipment Service Software — Score: 76/105

**Evaluation Date**: 2026-06-15
**Verdict**: EXPLORE FURTHER
**Tier**: 1 (Strong Opportunity)

## One-Line Pitch
The only digital compliance + service management tool built for petroleum equipment contractors — replace pen-and-paper EPA UST inspection records before a state audit does it for you.

## Problem
Petroleum equipment service contractors (fuel pump installation/maintenance, underground storage tank testing, vapor recovery systems) must track EPA/state underground storage tank (UST) regulations, work orders, and periodic certifications for every gas station they service. A HN commenter noted that after buying a petroleum equipment service business they found "pen and paper still dominates the industry" with no existing SaaS player — and promptly started building internal tools. Every gas station in the US (approximately 150,000+) requires periodic equipment inspection and certification by licensed petroleum equipment contractors. These records are federally mandated by EPA and enforced by state environmental agencies.

## Market Evidence
- ~150,000 gas stations in the US, each requiring periodic equipment certification
- EPA 40 CFR Part 280 mandates annual inspection and certification records
- No SaaS competitor identified — truly greenfield
- HN commenter acquired a petroleum equipment service business and is building internal tools = operator-validated pain
- Extremely high switching cost: once compliance records are in the system, operators cannot leave without manually exporting years of EPA records

## Scoring Breakdown

| Criterion | Score | Weight | Weighted | Notes |
|-----------|-------|--------|----------|-------|
| Market Validation | 3/5 | 3x | 9 | Pen-and-paper dominates; no SaaS competitor; but small niche with no named competitor for triangulation |
| Competitor Weakness | 5/5 | 2x | 10 | Greenfield — no existing SaaS player in this niche |
| LTD Viability | 4/5 | 2x | 8 | $199 LTD for small operators; compliance history = extremely high switching cost |
| No Free Tier | 5/5 | 1x | 5 | EPA regulatory consequence = will pay from day 1 |
| Channel Access | 3/5 | 2x | 6 | Petroleum equipment contractor associations (NACS, SIGMA); not accessible via Reddit |
| Content Potential | 3/5 | 1x | 3 | "UST inspection software", "petroleum equipment compliance"; limited search volume |
| AppSumo Fit | 2/5 | 2x | 4 | Very niche; low AppSumo audience awareness |
| Review Potential | 3/5 | 1x | 3 | Small community; moderate review generation |
| MRR Path | 4/5 | 3x | 12 | EPA UST regulations = perpetual compliance demand; annual renewal = natural SaaS retention |
| Build Feasibility | 3/5 | 2x | 6 | Compliance report generation + work orders + regulatory DB = 4–5 weeks; state DB ongoing |
| Boring Business Bonus | 5/5 | 2x | 10 | Petroleum equipment = deeply boring, high-consequence compliance |

**Total Weighted Score**: 76/105

## Must-Have Filters
- [x] Problem is real (EPA mandates are federal law; pen-and-paper is confirmed status quo)
- [x] Can build without deep domain expertise (work order management + compliance calendar)
- [x] Market not dominated by unbeatable player (no SaaS player identified)
- [~] Revenue potential > $10K MRR within 12 months (small niche — possible but requires targeted outreach)

## White Space
A digital compliance + service management tool for petroleum equipment contractors covering:
1. Annual UST inspection tracking with certificate generation
2. Vapor recovery test scheduling and results logging
3. Fuel pump installation work orders with parts lists
4. Regulatory report auto-fill (EPA Form 7530-1, state equivalents)
5. Certification letter generation for gas station owners
6. Technician certification expiry tracking (state petroleum equipment licenses)

No dedicated SaaS exists — operators use paper binders, Excel, and generic work order tools that miss the regulatory reporting layer.

## Product Concept
**"TankTrack"** — Digital compliance + service management for petroleum equipment contractors.
- Work order creation (pump install, UST test, vapor recovery test)
- Inspection schedule calendar per gas station customer
- Compliance record vault (EPA reports, state inspection certificates, test results)
- Auto-generated certification letters for gas station owners
- Technician credential tracker (state petroleum equipment licenses, expiry alerts)
- Pricing: $49/mo per technician; $199 LTD for solo operator (1–2 techs)
- Secondary: $15/mo per gas station for customer-facing compliance portal (upsell)

## Target Channels
- NACS (National Association of Convenience Stores) contractor network
- SIGMA (Society of Independent Gasoline Marketers of America)
- State petroleum equipment contractor associations
- Direct outreach to petroleum equipment service companies via LinkedIn/cold email
- PEI (Petroleum Equipment Institute) member directory

## Top 3 Risks
1. **Small addressable market** — US petroleum equipment service contractors total ~5,000–10,000 companies; maximum ARR may cap at $3–5M without expanding to adjacent regulatory niches
2. **Distribution difficulty** — petroleum contractors are not on Reddit, AppSumo, or trade Facebook groups; requires B2B direct outreach
3. **State regulatory complexity** — EPA federal baseline + 50 state equivalents each have different forms and requirements; maintaining the regulatory DB requires ongoing legal/regulatory research

## Key Source Links
- https://news.ycombinator.com/item?id=47509571 (HN comment about building tools after acquiring petroleum equipment service company)
- EPA 40 CFR Part 280 (federal UST regulations)
- https://www.pei.org/ (Petroleum Equipment Institute)

## Signal History

| Date | Score | Sources | Notes |
|------|-------|---------|-------|
| 2026-06-15 | 76/105 | hn-indiehackers-2026-06-15 | First identified — HN comment in pest control thread: commenter purchased a petroleum equipment service business; confirmed "pen and paper still dominates the industry"; building internal tools; EPA/state UST regulations = federally mandated compliance records; no SaaS competitor named; ~150K gas stations requiring periodic certification = perpetual demand; greenfield with highest competitor-weakness score (5/5) in portfolio; distribution via NACS/PEI industry associations; $199 LTD; Sources: news.ycombinator.com/item?id=47509571 |
| 2026-06-17 | 76/105 | hn-indiehackers-2026-06-17 | Stable: BUILDING — PRD already created (commit 2026-06-16); SINGLE-source — HN: practitioner confirmed "pen and paper still dominates" petroleum equipment service space; petroleum equipment service (fuel dispensers, storage tanks, pumps, compressors) has strict EPA/state compliance but zero SMB digital tooling; compliance-first FSM: pre-built inspection forms, regulatory submission tracking, parts catalog for major dispenser brands (Gilbarco, Wayne, Veeder-Root); Channels: NACS, PMMI, state fire marshal communities; LTD: $149; MVP: 5–6 weeks; Sources: news.ycombinator.com/item?id=47509571 |
