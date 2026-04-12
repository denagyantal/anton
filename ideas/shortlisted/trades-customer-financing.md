# Trades Customer Financing Integration — Score: 84/105

**Verdict**: BUILD
**Tier**: 1 (Strong Opportunity)
**Evaluation Date**: 2026-04-12

## One-Line Pitch
A lightweight financing widget for HVAC and plumbing shops — technician generates estimate, customer applies for financing in one click, shop closes jobs they'd otherwise lose.

## Problem
Small HVAC and plumbing companies (1–5 techs) lose jobs regularly because customers can't pay $3,000–$12,000 for a furnace replacement or main line job upfront. ServiceTitan has a financing module — but only in enterprise tiers. Wisetack and Hearth provide standalone financing SDKs, but no one has wrapped them in a simple, mobile-first workflow a 2-person shop can actually use without an IT department.

"We lose X jobs per month because people can't afford it upfront" — recurring complaint in r/HVAC (250K members) and r/Plumbing (200K members).

## Market Evidence
- ServiceTitan's financing module (enterprise-only) proves demand exists at the product level
- Wisetack SDK is ready for integration; GreenSky and Hearth prove consumer appetite for contractor financing
- r/HVAC 250K members, r/Plumbing 200K members — "financing integration" explicitly requested
- 1–5 tech HVAC/plumbing shops = millions of businesses in the US; 80% have no financing option to offer customers

## Scoring Breakdown

| Criterion | Score | Weight | Weighted | Notes |
|-----------|-------|--------|----------|-------|
| Market Validation | 4/5 | 3x | 12 | Wisetack, GreenSky, Hearth + ServiceTitan module all prove market |
| Competitor Weakness | 4/5 | 2x | 8 | No standalone plug-in financing widget for small shops |
| LTD Viability | 3/5 | 2x | 6 | Ongoing infrastructure; hybrid $149 LTD + revenue share viable |
| No Free Tier | 5/5 | 1x | 5 | Zero free options for small shop financing integration |
| Channel Access | 5/5 | 2x | 10 | r/HVAC 250K, r/Plumbing 200K, r/sweatystartup, FB groups |
| Content Potential | 4/5 | 1x | 4 | "HVAC contractor financing app", "how to offer financing HVAC" |
| AppSumo Fit | 3/5 | 2x | 6 | Trades FB groups are stronger than AppSumo here |
| Review Potential | 3/5 | 1x | 3 | Will review once financed jobs close |
| MRR Path | 4/5 | 3x | 12 | Revenue share on funded loan value = natural recurring revenue |
| Build Feasibility | 4/5 | 2x | 8 | Wisetack SDK + quote widget = 3–4 week MVP |
| Boring Business Bonus | 5/5 | 2x | 10 | HVAC + plumbing = maximally boring |

**Weighted Total: 84/105**

## Must-Have Filters
- [x] Problem is real (evidence of lost jobs due to lack of financing)
- [x] Can build without deep domain expertise (Wisetack SDK handles financing)
- [x] No dominant player at this price point/simplicity level
- [x] Revenue potential >$10K MRR within 12 months (revenue share scales with funded volume)

## Key Differentiators
1. **Standalone** — works alongside any existing FSM tool (Jobber, Housecall Pro, ServiceTitan)
2. **Mobile-first** — technician generates estimate in field, adds financing link, texts to customer in under 60 seconds
3. **Revenue share model** — aligns incentives; shop and product both win when jobs close
4. **No enterprise commitment** — $149 LTD or monthly, vs ServiceTitan's $30K+ onboarding

## Product Concept
Simple workflow: tech enters job scope + labor → app generates estimate PDF → "Add financing option" button sends Wisetack/Hearth pre-qualify link via SMS → customer applies on phone while tech is still there → result in minutes → job closes.

Optional: Branded financing widget embeddable on the shop's website for estimates submitted online.

## Pricing
- $149 LTD for unlimited jobs (solo operator or 1–3 tech shop)
- $29/month SaaS for teams (3+ technicians)
- Revenue share: 0.5–1% of funded loan value (optional hybrid model)

## Distribution
- r/HVAC, r/Plumbing, r/sweatystartup
- Facebook groups: "HVAC Business Owners", "Plumbing Business Owners"
- YouTube: HVAC contractor business channels
- AppSumo (secondary)

## Risks
1. Wisetack/Hearth could build their own lightweight workflow tools and disintermediate
2. Revenue share compliance varies by state (lending facilitation laws — may need licensing in some states)
3. Small shops may resist adding a step to their field estimate workflow — demo video required
4. HVAC equipment manufacturers (Carrier, Lennox) already offer financing; shops may not see incremental value

## Next Steps
1. Integrate Wisetack developer API + build minimum quote-to-financing link flow
2. Launch soft beta in r/HVAC — offer $149 LTD to first 50 shops
3. Track funded loan volume; optimize revenue share pitch after 30 days of data

## Key Source Links
- https://www.podium.com/article/best-hvac-software
- https://buildops.com/resources/best-hvac-software/
- https://www.housecallpro.com/industries/hvac-software/
- https://wisetack.com/ (financing SDK)
- https://gethearth.com/ (contractor financing)

## Signal History

| Date | Score | Sources | Notes |
|------|-------|---------|-------|
| 2026-04-12 | 84/105 | reddit-2026-04-12 | First identified: HVAC/plumbing shops losing $3K–$12K jobs for lack of financing; Wisetack SDK enables 3–4 week MVP; no standalone tool at this level |
