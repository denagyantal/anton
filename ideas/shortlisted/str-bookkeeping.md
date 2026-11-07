---
name: Short-Term Rental (STR) Bookkeeping & Tax Prep
description: STR-native bookkeeping for Airbnb/VRBO hosts — auto-import from platform APIs, channel-mixed income separation, multi-property Schedule E reporting, occupancy tax tracking; validated $22K MRR builder
score: 84/105
tier: 1
verdict: BUILD
date: 2026-11-07
---

# Short-Term Rental (STR) Bookkeeping & Tax Prep — Score: 84/105

**Verdict**: BUILD
**Decision Status**: NEW
**LTD Price**: $79 per property or portfolio LTD

## One-Line Pitch

Airbnb/VRBO accounting that actually understands short-term rentals — auto-import from platform APIs, automatic separation of cleaning fees vs. platform fees vs. taxable income, multi-property Schedule E at year-end, occupancy tax tracking by jurisdiction.

## Problem

Airbnb hosts can't use regular accounting software because it doesn't understand their workflow:

- **Channel-mixed income**: Airbnb + VRBO + direct booking = separate income streams that must be tracked and reconciled
- **Platform fee deductions**: Airbnb's 3% fee reduces gross payout; cleaning fees are pass-through (not income); guests pay total, host gets net
- **Occupancy taxes**: collected by Airbnb in some states, remitted by host in others; varies by jurisdiction
- **Multi-property Schedule E**: IRS Schedule E requires per-property income/expense reporting; generic bookkeeping tools don't have this structure
- **Cleaning fee handling**: cleaning fees are neither pure income nor pure expense — they're pass-throughs with contractor relationships
- **Capital improvements vs. repairs**: wrong classification triggers audits; STR-specific guidance doesn't exist in QuickBooks

The result: Airbnb hosts were either using generic spreadsheets (error-prone) or paying accountants $300/month for manual work. A builder posting on r/buildinpublic documented starting from zero, finding validated signal in host Facebook groups and Reddit, and reaching **$22K MRR** with no paid ads.

## Market Evidence

- Builder disclosed: $22K MRR, started from zero via host communities — strongest possible validation
- Distribution channel confirmed: Airbnb host Facebook groups and Reddit (accessible + active)
- Adjacent market: STR permits compliance + local regulation tracking = expanding pain
- Market size: 2M+ US Airbnb hosts, estimated 400K–800K managing 2+ properties (the target)

## Scoring Breakdown

| Criterion | Score | Weight | Weighted | Notes |
|-----------|-------|--------|----------|-------|
| Market Validation | 5/5 | 3x | 15 | $22K MRR builder with zero paid ads, found via host communities — most validated builder signal today |
| Competitor Weakness | 4/5 | 2x | 8 | QB/Xero completely miss STR workflow; no Airbnb API integration with Schedule E structure |
| LTD Viability | 4/5 | 2x | 8 | $79 per property or portfolio LTD; seasonal tax prep spike creates urgency window |
| No Free Tier | 3/5 | 1x | 3 | Generic spreadsheets + accountants = common free alternatives |
| Channel Access | 4/5 | 2x | 8 | Airbnb host FB groups (massive), BiggerPockets, r/airbnb, r/realestateinvesting |
| Content Potential | 4/5 | 1x | 4 | "Airbnb accounting software", "STR bookkeeping", "short term rental Schedule E", "Airbnb tax software" |
| AppSumo Fit | 4/5 | 2x | 8 | "File Airbnb taxes in 10 minutes" = clear AppSumo hook; Airbnb hosts are tech-comfortable |
| Review Potential | 4/5 | 1x | 4 | Host communities are vocal; will post reviews in Facebook groups |
| MRR Path | 4/5 | 3x | 12 | Annual tax season creates recurring upgrade path from LTD; ongoing bookkeeping = $19/mo per property |
| Build Feasibility | 4/5 | 2x | 8 | Airbnb/VRBO CSV/API import + categorization logic + multi-property P&L = 4–6 weeks |
| Boring Business Bonus | 3/5 | 2x | 6 | STR accounting = boring; hosts themselves are tech-adjacent (harder to sell to) |

**Total: 84/105**

## Must-Have Filters

- [x] Problem is real ($22K MRR builder + consistent host complaints about QB/Xero gaps)
- [x] Can build without deep domain expertise (Schedule E structure is documented; Airbnb/VRBO APIs are public)
- [x] No dominant unbeatable player ($22K MRR builder exists but hasn't reached saturation)
- [x] Revenue potential > $10K MRR within 12 months (at $22K MRR competitor scale, achievable)

## Boring Business Fit Check

- [x] VC-ignored (no VC-backed STR-specific bookkeeping tool known)
- [x] Customers are non-technical hosts managing properties (not SaaS-builders)
- [x] Existing software (QB/Xero) explicitly doesn't understand STR workflow
- [x] STR hosts have real budgets (they're running properties worth hundreds of thousands)
- [x] Low churn: annual tax prep + ongoing bookkeeping = sticky if workflow is embedded

## Product Concept

**"RentLedger"** — STR-native bookkeeping platform.

**Core features (MVP, 4–6 weeks):**
1. **Platform import**: Airbnb CSV/API + VRBO CSV import; auto-detect income type (reservation income, cleaning fee, resolution payment)
2. **Income categorization**: Automatic separation of gross reservation income, platform fees (3%), cleaning fees (pass-through), and net payout
3. **Multi-property structure**: Each property has its own P&L; costs allocated per property (mortgage interest, utilities, supplies, cleaning contractor payments)
4. **Occupancy tax tracking**: Flag which states/cities Airbnb collects on your behalf vs. which require host remittance
5. **Schedule E report**: Annual property-by-property income/expense summary in Schedule E format ready for CPA or TurboTax
6. **Expense entry**: Mobile receipt photo → auto-categorize (maintenance vs. supplies vs. capital improvement)

**v2 features:**
- Local STR permit compliance reminders (annual renewal dates by jurisdiction)
- Depreciation tracking (cost basis + annual depreciation schedule per property)
- 1099-K reconciliation (Airbnb issues a 1099-K; tool verifies it matches tracked income)
- Direct TurboTax/H&R Block export format

## Pricing

- $19/mo per property (ongoing bookkeeping)
- $99/yr per property (annual plan — tax season timing)
- **LTD**: $79 per property one-time (all features, forever)
- Portfolio LTD: $199 for up to 5 properties, $299 for unlimited

## Go-to-Market

1. **Airbnb host Facebook groups** — "I built STR-specific bookkeeping because QB doesn't understand our workflow" (the proven channel of the $22K MRR builder)
2. **BiggerPockets** — largest real estate investor community; STR section active
3. **r/airbnb, r/vrbo, r/realestateinvesting** — post during tax season (Jan–April) for maximum conversion
4. **ProductHunt launch** — "Airbnb bookkeeping that actually understands STR income"
5. **AppSumo LTD** — "file STR taxes in 10 minutes" at $79/property

## Risks

1. The $22K MRR builder already in market — building the same product requires differentiation (better UX, lower price, or platform integrations they don't have)
2. Airbnb could add bookkeeping features natively (they have all the transaction data)
3. Host communities can be fickle; distribution depends on staying active in multiple groups
4. STR regulations vary massively by jurisdiction = compliance module requires ongoing maintenance

## Key Source Links

- https://www.reddit.com/r/buildinpublic/comments/1oejjnd/i_niched_down_so_hard_people_said_id_never_scale/

## Signal History

| Date | Score | Sources | Notes |
|------|-------|---------|-------|
| 2026-11-07 | 84/105 | reddit-2026-11-07 | First identified — VALIDATED: builder at $22K MRR, started from zero with no paid ads via Airbnb host Facebook groups and Reddit before building; QB/Xero confirmed as poor fit for STR workflow (channel-mixed income, platform fee deductions, cleaning fee pass-throughs, multi-property Schedule E, occupancy tax by jurisdiction); seasonal LTD window (Jan–April tax season); portfolio LTD at $199 for 5 properties; no competitor file previously existed for this niche; Sources: reddit.com/r/buildinpublic/comments/1oejjnd/ |
