# Heating Oil Delivery Route Software for Small Dealers — Score: 78/105

**Verdict**: EXPLORE FURTHER
**Tier**: 1 (Strong Opportunity)
**Evaluation Date**: 2026-10-22
**Decision Status**: NEW

## One-Line Pitch
Cloud-native heating oil delivery software for 1–5 truck independent dealers: degree-day tank monitoring → auto-schedule deliveries → driver mobile app → billing — at $99–149/mo flat vs. legacy 1990s desktop software and $199+/mo modern alternatives.

## Problem
~5,000 independent heating oil dealers in the northeastern US run on legacy Windows software (FuelsManager, Cargas Energy) designed in the 1990s with on-premise servers. Most operators have 1–5 delivery trucks and 200–2,000 residential accounts.

The core workflow is: degree-day tank monitoring → auto-generate delivery schedule → dispatch driver → print delivery tickets → billing and AR. Modern cloud alternatives are either non-existent or expensive ($199/mo for Neurobird's 3-truck plan; Droplet Fuel at undisclosed pricing).

Many small dealers (1–5 trucks) are trapped on legacy software or spreadsheets because no affordable modern cloud tool exists with degree-day prediction, routing, and proper billing.

## Market Evidence
- ~3,500–5,000 independent heating oil dealers in the northeastern US
- ~600 million gallons of heating oil consumed annually in residential NE US
- FuelsManager/Cargas: legacy desktop-first software from 1990s; on-premise servers
- Neurobird: $199/mo for 3 trucks — closest modern competitor
- Droplet Fuel: cloud-based but pricing not published
- Most family-owned operators haven't modernized — still manually scheduling deliveries

## Scoring Breakdown

| Criterion | Score | Weight | Weighted | Notes |
|-----------|-------|--------|----------|-------|
| Market Validation | 3/5 | 3x | 9 | ~5K independent dealers; legacy software proves willingness to pay; regional NE US |
| Competitor Weakness | 5/5 | 2x | 10 | Legacy 1990s desktop software is THE competition; no affordable modern cloud option for 1–3 trucks |
| LTD Viability | 2/5 | 2x | 4 | Seasonal compliance + compliance model; better as $99–149/mo subscription than LTD |
| No Free Tier | 5/5 | 1x | 5 | Zero free heating oil delivery software exists |
| Channel Access | 3/5 | 2x | 6 | NEOA (Northeast Oil & Energy Association), OPIS energy dealer network, trade shows — tighter community |
| Content Potential | 3/5 | 1x | 3 | "heating oil delivery software," "degree-day fuel delivery routing" — niche but uncontested |
| AppSumo Fit | 3/5 | 2x | 6 | Smaller total market; possible on AppSumo but modest volume |
| Review Potential | 4/5 | 1x | 4 | Legacy software refugees highly motivated to review modern replacement |
| MRR Path | 5/5 | 3x | 15 | Residential customers return every heating season; $99–149/mo per dealer; high annual retention |
| Build Feasibility | 3/5 | 2x | 6 | Degree-day modeling adds technical complexity; driver mobile app; billing for residential accounts |
| Boring Business Bonus | 5/5 | 2x | 10 | Heating oil delivery — extremely unglamorous, regional, completely VC-ignored |

**Total: 78/105**

## Must-Have Filters
- [x] Problem is real (FuelsManager/Cargas users have been on legacy software for 20+ years with no modern alternative)
- [x] Can build without deep domain expertise (degree-day modeling is well-documented; delivery routing is standard)
- [x] No dominant affordable player (Neurobird at $199/mo is closest; Droplet Fuel undisclosed)
- [x] Revenue potential >$10K MRR within 12 months (100 dealers at $99/mo = $9,900 MRR — tight but achievable)

## Boring Business Fit
- VC-ignored market: Yes — zero funded startups in heating oil delivery software
- Non-technical customers: Yes — family-owned operators running 1–5 trucks
- Outdated/overpriced existing software: Yes — 1990s desktop software with on-premise servers
- Real budgets: Yes — dealers already pay for legacy software + server maintenance
- Low churn once adopted: Yes — customer data, tank profiles, delivery history = high switching costs

## Core Feature Set (MVP)
1. **Customer tank profiles**: Tank size, fuel type, location, delivery preferences, payment terms
2. **Degree-day monitoring**: Track heating degree days; calculate when each tank will run low based on delivery history and degree-day consumption
3. **Auto-schedule deliveries**: Generate priority delivery list based on tank estimation
4. **Driver mobile app**: View route, confirm delivery, capture signature, record gallons delivered
5. **Delivery tickets**: Generate and print/email delivery confirmation with gallons, price, and payment info
6. **Billing & AR**: Generate invoices, track payments, manage accounts receivable
7. **Will-call management**: Separate workflow for customers who call to request delivery vs. automatic delivery customers

## Pricing Model
- **Monthly**: $99/mo (up to 3 trucks, 500 accounts), $149/mo (up to 5 trucks, 2,000 accounts)
- **Annual**: 2 months free
- **Note**: LTD not recommended — seasonal compliance model works better as subscription
- **No per-delivery fees**: Key differentiator vs. enterprise platforms with transaction pricing

## Target Channels
- NEOA (Northeast Oil & Energy Association) member directory and annual conference
- OPIS (Oil Price Information Service) energy dealer community
- NE Petroleum Dealers Associations (MA, NH, VT, ME, NY, CT have state associations)
- LinkedIn search for heating oil dealer owners
- SEO: "heating oil delivery software small dealer," "degree-day fuel delivery software," "Cargas alternative"

## Top Risks
1. **Small addressable market**: 3,500–5,000 NE dealers cap total revenue potential — realistic ceiling ~$500K–1M ARR
2. **Degree-day modeling complexity**: Accurate consumption prediction requires calibration per customer/tank — first version will have errors that damage trust
3. **Seasonal cash flow**: Operators are busy Oct–Mar, slow Apr–Sep — may resist new software adoption mid-season
4. **Regional concentration**: Almost entirely NE US — distribution channels are regional, not national

## Key Source Links
- https://www.dropletfuel.com/
- https://neurobird.com/heatingoil/
- https://www.softwareadvice.com/distribution/fuel-delivery-comparison/

## Signal History

| Date | Score | Sources | Notes |
|------|-------|---------|-------|
| 2026-10-22 | 78/105 | reddit-2026-10-22 | First identified — ~5K NE US independent heating oil dealers trapped on legacy 1990s desktop software (FuelsManager, Cargas); Neurobird at $199/mo for 3 trucks = closest modern competitor; Droplet Fuel exists but pricing undisclosed; no affordable cloud option at $99/mo; degree-day + routing + billing workflow gap; NEOA as primary distribution channel; MRR model preferred over LTD due to seasonal compliance |
