# HVAC/Plumbing Flat-Rate Price Book Builder — Score: 91/105

**Verdict**: BUILD
**Tier**: 1 (Strong Opportunity)
**Evaluation Date**: 2026-05-13
**Decision Status**: NEW

## One-Line Pitch
Standalone flat-rate price book builder for HVAC/plumbing/electrical contractors — customer-facing menus in minutes at $29/mo vs. $400+/mo from The New Flat Rate.

## Problem
"The New Flat Rate" charges $99/month **per technician** — for a 3-tech shop that's $400/month just for price books. Platforms that include native flat-rate pricing (ServiceTitan, FieldEdge) are enterprise-priced. Jobber and Housecall Pro have basic pricebooks but lack the structured flat-rate presentation (customer-facing menu of repair options at fixed prices) that increases average ticket value. Small contractors are either quoting time-and-materials (leaving money on the table) or paying $400+/month for a price book tool they can barely afford.

## Market Evidence
- 500K+ HVAC, plumbing, and electrical contractors in the US
- "Flat rate pricing HVAC" and "plumbing flat rate" are high-volume monthly search terms
- r/HVAC and r/Plumbing: recurring threads on flat-rate pricing software monthly
- The New Flat Rate: validated willingness to pay at $99/tech/mo = clear price ceiling to undercut
- Housecall Pro flat-rate pricebook: locked behind $149/mo tier (add-on, not base feature)

## Scoring Breakdown

| Criterion | Score | Weight | Weighted | Notes |
|-----------|-------|--------|----------|-------|
| Market Validation | 4/5 | 3x | 12 | TNFR proves market; 500K+ contractors need flat-rate pricing |
| Competitor Weakness | 4/5 | 2x | 8 | TNFR $400+/mo for 3 techs; ST pricebook enterprise-only; Jobber = limited |
| LTD Viability | 5/5 | 2x | 10 | $149 LTD; very low infrastructure; immediate ROI story |
| No Free Tier | 4/5 | 1x | 4 | People pay for pricing tools; no credible free option |
| Channel Access | 5/5 | 2x | 10 | r/HVAC, r/Plumbing, HVAC-Talk, trade Facebook groups |
| Content Potential | 4/5 | 1x | 4 | "flat rate pricing HVAC", "plumbing flat rate software" |
| AppSumo Fit | 5/5 | 2x | 10 | Simple point solution; crystal-clear ROI; proven LTD market for trades |
| Review Potential | 4/5 | 1x | 4 | Tradespeople review if it increases average ticket value |
| MRR Path | 3/5 | 3x | 9 | Standalone limits MRR; integrations with Jobber/HCP/QB as upsell path |
| Build Feasibility | 5/5 | 2x | 10 | CRUD + pricing logic + PDF generator = 1-2 week MVP |
| Boring Business Bonus | 5/5 | 2x | 10 | HVAC/Plumbing = deeply boring, essential |

**Total: 91/105**

## Must-Have Filters
- [x] Problem is real (TNFR $99/tech/mo proves willingness to pay)
- [x] Can build without deep domain expertise (CRUD app + PDF)
- [x] No dominant player in affordable tier
- [x] Revenue potential >$10K MRR within 12 months (1,000 customers at $29/mo = $29K MRR)

## Boring Business Fit Check
- Market VCs ignore? YES (trade-specific software)
- Non-technical customers? YES (HVAC/plumbing contractors)
- Existing software outdated or overpriced? YES (TNFR $400+/mo)
- Real budgets? YES (contractors allocate $100-500/mo on software)
- Low churn? YES (pricebook = operational foundation, hard to switch)

## Product Concept
**Simple MVP:**
- Import your services (CSV or manual entry)
- Set flat prices with optional "good/better/best" tiers per job type
- Generate customer-facing "menu" as a PDF or in-app presentation
- Customer signs/approves on tablet before work begins
- Sync exports to Jobber, Housecall Pro, or QuickBooks

**Pricing:**
- $29/mo flat (no per-tech fees — massive vs. TNFR's $99/tech/mo)
- $149 LTD for early buyers (AppSumo or direct)

**One-line ROI pitch**: "One upsell from a flat-rate menu pays for the tool."

## Key Differentiators
1. **Flat per-company pricing** — $29/mo total vs. TNFR's $99/tech/mo ($300+/mo for 3 techs)
2. **Integrations** — Sync to Jobber, HCP, QuickBooks (not a siloed tool)
3. **Customer presentation mode** — Clean tablet interface for "good/better/best" options at doorstep
4. **Speed** — Set up in 30 minutes, not weeks

## Target Channels
- r/HVAC, r/Plumbing, r/electricians, r/sweatystartup
- HVAC-Talk forum (hvac-talk.com)
- Plumbing Facebook groups ("HVAC Business Owners", "Plumbing Contractors")
- ACCA, PHCC member lists
- AppSumo (LTD launch)

## Top 3 Risks
1. Jobber or Housecall Pro adds a free flat-rate pricebook feature
2. Limited MRR ceiling as a standalone tool (needs integration play to grow)
3. Tradespeople may want more features than a pricebook alone

## Key Source Links
- https://www.flatratesoftware.com/flatratepricing-hvac-2025/
- https://buildops.com/resources/plumbing-flat-rate-pricing-guide/
- https://www.hnatewiczmedia.com/plumbing-flat-rate-pricing-software/
- https://www.hvac-talk.com/ (trade community)
- https://www.reddit.com/r/HVAC/ (primary discovery channel)

## Signal History

| Date | Score | Sources | Notes |
|------|-------|---------|-------|
| 2026-05-13 | 91/105 | reddit-2026-05-13, hn-indiehackers-2026-05-13 | First identified; TNFR $400+/mo for 3 techs documented; 500K+ contractors need flat-rate; $29/mo vs $99/tech/mo = clear positioning; MVP = 1-2 weeks |
| 2026-05-26 | 91/105 | reddit-2026-05-26 | Stable: SINGLE-source — Reddit: 47% of contractors in 2025 still use spreadsheets for estimating reconfirmed;
| 2026-05-31 | 91/105 | reddit-2026-05-31, hn-indiehackers-2026-05-31 | Stable: DUAL-source — Reddit: Paper binders ($200+ upfront, quickly outdated) OR bundled into enterprise FSM ($200–500/mo) = no standalone mobile flat-rate pricebook at <$20/mo; solo HVAC/plumbing techs and small shops can't justify full FSM cost just for pricing; 500+ pre-loaded tasks for HVAC/plumbing; customer-facing quote view hides margins; PDF export for proposals; QuickBooks sync; HN: flat-rate pricebook named explicitly as missing feature from ALL mid-tier FSM tools — Jobber/HCP/ServiceTitan all lack it natively at base tiers; HCP pricebook $149/mo extra confirmed; positioning as "gateway drug" into FSM = land with pricebook, upsell to scheduling; Sources: buildops.com/resources/hvac-software-for-small-businesses, agentzap.ai/blog/hvac-scheduling-software-complete-guide-2025, workiz.com/blog/hvac/best-hvac-business-software-comparison/ | HVAC techs manually calculate labor + material + markup in Excel, then re-enter into invoicing = double-entry pain; ServiceTitan pricebook enterprise-only; Profit Rhino $200+/mo for pricebook subscription; standalone digital flat-rate pricebook builder with parts database + labor rates + configurable markup + professional proposals + customer e-sign + QBO integration at $49/mo or $299 LTD = confirmed unoccupied; best positioned as "gateway drug" into full FSM — land with pricebook, upsell to scheduling + invoicing; pre-populate with HVAC equipment pricing from major manufacturers (Carrier, Trane, Lennox, Rheem) as data moat; Sources: housecallpro.com/hvac/templates-calculators/, buildops.com/resources/hvac-estimating-excel-spreadsheet/, fieldcamp.ai/reviews/jobber/ |
