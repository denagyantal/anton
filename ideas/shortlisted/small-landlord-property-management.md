# Small Landlord Property Management — Score: 81/105

**Verdict**: BUILD
**Tier**: 1 (Strong Opportunity)
**Evaluation Date**: 2026-11-15

## One-Line Pitch
Rent collection + maintenance coordination + Schedule E tax export for self-managing landlords with 1–20 units — the gap between free (TurboTenant/Innago) and enterprise (AppFolio/Buildium).

## Problem
Self-managing landlords (5–20 units) are caught between free tools (TurboTenant, Innago) that have hidden tenant fee conflicts and expensive enterprise platforms ($200+/mo for AppFolio/Buildium). The free tools charge tenants $3–5/transaction on rent collection, creating friction with tenants who know the landlord is indirectly monetizing them. The core unmet need: simple rent tracking + maintenance coordination + Schedule E tax export (required for every rental property owner at tax time) in one tool under $25/month with no hidden tenant fees.

The contractor coordination loop is the biggest unsolved problem: tenant reports issue → landlord finds contractor → contractor schedules → confirms completion → tenant confirms. Nobody automates this sequence. Landlords are doing it manually in text messages.

## Market Evidence
- 20M+ rental housing units in the US; ~17M individual landlord taxpayers filing Schedule E annually
- TurboTenant/Innago validated by Reddit: free but "charges tenants $3-5 to pay rent" = landlord-tenant friction
- Founder case study: organic growth via Google/YouTube without paid acquisition
- AppFolio $200+/mo, Buildium $55–300/mo — both overkill for sub-20-unit landlords
- Reddit threads: small landlord software pain appears 2–3x/month across r/landlord, r/realestateinvesting

## Scoring Breakdown

| Criterion | Score | Weight | Weighted | Notes |
|-----------|-------|--------|----------|-------|
| Market Validation | 4/5 | 3x | 12 | 17M Schedule E filers; TurboTenant/Innago user friction confirmed; recurring Reddit threads |
| Competitor Weakness | 3/5 | 2x | 6 | Free tools exist but have hidden fee conflict; enterprise too expensive; gap at $15-25/mo |
| LTD Viability | 4/5 | 2x | 8 | "Pay once, track rent forever" = clean LTD story; $79-99 LTD viable |
| No Free Tier | 3/5 | 1x | 3 | Free tools exist — need clear differentiation (no tenant fees, Schedule E export) |
| Channel Access | 4/5 | 2x | 8 | r/landlord, r/realestateinvesting, BiggerPockets forums, landlord FB groups |
| Content Potential | 3/5 | 1x | 3 | "landlord software small", "rent collection app", "Schedule E software" — moderate SEO |
| AppSumo Fit | 4/5 | 2x | 8 | Small landlords are AppSumo-aware; "one-time purchase for annual property management" sells |
| Review Potential | 3/5 | 1x | 3 | BiggerPockets community reviews; Capterra niche |
| MRR Path | 3/5 | 3x | 9 | $15-25/mo sticks if embedded in annual tax workflow; churn risk after initial setup |
| Build Feasibility | 5/5 | 2x | 10 | Stripe rent collection + maintenance ticket + PDF export = 2-week build |
| Boring Business Bonus | 4/5 | 2x | 8 | Residential landlording = unglamorous, VC-ignored, deeply boring |

**Total: 78/105**

## Must-Have Filters
- [x] Problem is real (Reddit recurring threads; TurboTenant hidden fee friction confirmed)
- [x] Can build without deep domain expertise (Stripe + CRUD + PDF/CSV export)
- [x] No dominant affordable player (free tools have fee conflict; enterprise too pricey)
- [x] Revenue potential > $10K MRR within 12 months (500 landlords at $19/mo = $9,500; 600 = $11,400 MRR)

## Boring Business Fit Check
- VCs ignore this market? Yes — landlord SaaS too fragmented and "boring" for venture
- Customers non-technical? Yes — self-managing landlords range from tech-naive to moderately technical
- Existing software outdated/overpriced? Free tools = hidden fees; enterprise = overkill
- Real budgets? Yes — landlords already track rent income; $19/mo is trivial vs. one month's rent
- Low churn? Moderate — sticky at tax time (Schedule E), but can manually track off-season

## Product Concept: "LandlordFlow"

**Pricing**: $15/mo (1-5 units) | $25/mo (6-20 units) | $79 LTD (up to 10 units, AppSumo)

**Core MVP (2 weeks):**
1. **Rent collection** — Stripe ACH + card; no hidden fees to tenants; landlord pays flat tool fee
2. **Maintenance tickets** — tenant submits via web form → landlord assigns contractor → contractor confirms → tenant confirms completion
3. **Schedule E export** — annual income/expense by property, pre-formatted for Schedule E (IRS Form 1040)
4. **Lease storage** — PDF upload + expiration reminder 90 days before renewal
5. **Late rent tracking** — overdue dashboard + automated SMS/email reminder sequence

**Key Differentiator vs TurboTenant/Innago:**
- Zero tenant fees on rent collection (landlord pays the small monthly fee instead)
- Contractor coordination loop built-in (the workflow nobody automates)
- Schedule E export pre-formatted for tax prep

## Target Channels
- r/landlord, r/realestateinvesting (direct "I built this" launch post)
- BiggerPockets forums (landlord community with high software awareness)
- Facebook Groups: "Small Landlord Nation", "Rental Property Owners"
- YouTube SEO: "best landlord software for small landlords 2026"

## Top Risks
1. **Free tool competition** — TurboTenant/Innago are free; must clearly communicate the hidden fee problem to convert
2. **Churn risk** — landlords with stable portfolios may set up once and churn after setup; Schedule E export is the annual retention hook
3. **Plaid/Stripe costs** — ACH processing costs eat margin; price must account for transaction fees
4. **Legal complexity** — eviction workflows, state-specific notices = scope creep risk; keep MVP focused on rent + maintenance only

## Key Source Links
- Reddit: r/landlord threads on TurboTenant hidden fees
- Reddit: r/realestateinvesting — small landlord software recurring pain
- Competitor analysis: TurboTenant free tier fee conflict, AppFolio $200+/mo overkill

## Signal History

| Date | Score | Sources | Notes |
|------|-------|---------|-------|
| 2026-11-15 | 81/105 | reddit-2026-11-15, competitor-analysis-2026-11-15 | First identified — Reddit: simple rent collection + maintenance for small landlords (5-50 units); TurboTenant/Innago free but charge tenants $3-5/transaction = landlord-tenant friction; contractor coordination loop ("follow-up loop nobody automates") = biggest unbuilt workflow; founder case study organic growth confirmed; AppFolio $200+/mo, Buildium $55-300/mo = overkill; Competitor: free tools create tenant fee conflicts; Schedule E export (17M filers annually) = retention hook at tax time; "LandlordFlow" concept: $15-25/mo, no tenant fees, contractor coordination, Schedule E CSV export; 2-week build; Sources: reddit-2026-11-15, competitor-analysis-2026-11-15 |
