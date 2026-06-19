# Micro-Manufacturer Production Management (Craftplan-Inspired Hosted SaaS)

**Score**: 87/105
**Verdict**: BUILD
**Tier**: 1 (Strong Opportunity)
**Evaluation Date**: 2026-06-19
**LTD Price**: $149

## One-Line Pitch
Hosted cloud SaaS version of the open-source Craftplan tool — recipe/BOM costing, batch production planning, and ingredient inventory for artisan food producers, soap/candle makers, and small-batch manufacturers.

## Problem
Micro-manufacturers — artisan bakeries, soap makers, candle makers, breweries, food producers — are running production on spreadsheets. Every batch requires: calculating recipe costs (ingredient price × quantity), planning how many batches to produce based on orders, tracking ingredient inventory (do we have enough flour for 200 loaves?), and logging production for allergen compliance.

Craftplan, an open-source Elixir/Phoenix tool built by a developer for his wife's bakery, received 577 Hacker News points and 167 comments — making it a Top 20 Show HN of 2026. The intense community reaction confirmed massive unmet demand. The gap: Craftplan exists as an open-source self-hosted tool, but no hosted cloud SaaS version exists at $49–99/month with white-glove onboarding.

Generic ERPs (QuickBooks, Wave) handle invoicing but have no recipe management, BOM costing, or batch production planning. Purpose-built manufacturing ERPs (MRPeasy, Fishbowl) start at $300+/month and require implementation consultants. The 1–5 person artisan producer is completely unserved.

## Market Evidence
- 577 HN points + 167 comments = Top 20 Show HN of 2026; massive unmet demand signal
- Craftplan is on GitHub (puemos/craftplan) — OSS with AGPL license
- Artisan food production, soap/candle making are booming categories (Etsy, Shopify, farmers markets)
- The HN comment thread explicitly validated: "small businesses desperately need simple operational software and are being failed by generic ERP"
- AppSumo audience (creative entrepreneurs, small business owners) perfectly matches artisan business owners
- Adjacent proof: Rentman ($15M+ ARR), Skimmer ($5.7M ARR) — "simplest possible tool for one specific industry" model keeps winning

## Scoring Breakdown

| Criterion | Score | Weight | Weighted | Notes |
|-----------|-------|--------|----------|-------|
| Market Validation | 4/5 | 3x | 12 | 577 HN pts + 167 comments = massive validation; OSS codebase proves problem is real |
| Competitor Weakness | 4/5 | 2x | 8 | No cloud/hosted SaaS layer exists; generic ERP overkill; Craftplan is OSS-only |
| LTD Viability | 5/5 | 2x | 10 | $149 LTD on AppSumo; artisan business owners love one-time pricing |
| No Free Tier | 3/5 | 1x | 3 | OSS free version exists; but cloud hosting + support + onboarding = clear paid tier value |
| Channel Access | 4/5 | 2x | 8 | Etsy seller communities, food producer FB groups, bakery trade associations, soap/candle communities |
| Content Potential | 4/5 | 1x | 4 | "bakery production management software", "soap business ERP" = near-zero SEO competition |
| AppSumo Fit | 5/5 | 2x | 10 | Creative artisan audience + $149 LTD + niche positioning = classic AppSumo winner |
| Review Potential | 4/5 | 1x | 4 | Artisan community is very vocal; Etsy seller FB groups actively recommend tools |
| MRR Path | 4/5 | 3x | 12 | $49–99/mo; sticky (recipe library + batch history + ingredient inventory = core business data) |
| Build Feasibility | 5/5 | 2x | 10 | OSS Craftplan codebase exists; build hosted SaaS layer + niche onboarding = 3–4 weeks |
| Boring Business Bonus | 3/5 | 2x | 6 | Artisan food/craft manufacturing — unglamorous but not deeply boring trades |

**Total: 87/105**

## Must-Have Filters
- [x] Problem is real (577 HN points is exceptionally strong validation)
- [x] Can build without deep domain expertise (recipe management, BOM, batch tracking = known patterns)
- [x] No dominant unbeatable player (no cloud SaaS in this space; OSS only)
- [x] Revenue potential $10K+ MRR within 12 months (millions of Etsy/Shopify artisan producers × $49/mo × very small %)

## Boring Business Fit Check
- VCs mostly ignore artisan food/soap/candle software ✓
- Customers (artisan business owners) are non-technical ✓
- Existing software (generic ERP) is massively overbuilt for 1–5 person operations ✓
- Artisan businesses have real budgets (Etsy sellers at $100K+ annual revenue) ✓
- Churn is very low once recipe library and batch history are in the system ✓

## Team Fit Check
- Front-end: Recipe builder UI, batch production planner, ingredient inventory tracker
- Back-end: BOM cost rollup engine, lot traceability, allergen flagging, Shopify/Etsy order sync
- Designer: Mobile-friendly batch tracking (bakery manager = on their feet, not at a desk)
- Generalist: Etsy seller FB groups, food producer associations, bakery/soap/candle YouTube channels

## Key Differentiators
1. **Recipe/BOM cost rollup** — enter ingredient costs once, see exact cost per unit auto-calculated; know margin before baking the batch
2. **Batch production planner** — select recipe + quantity → system calculates ingredient requirements, checks inventory, alerts on shortages
3. **Lot traceability** — track which batch used which flour delivery for allergen recalls
4. **Allergen management** — flag allergens per ingredient, auto-generate allergen statements
5. **Shopify/Etsy order sync** — pull orders, show production queue, mark fulfilled

## MVP Features (3–4 Week Build)
1. Recipe/BOM builder (ingredient + quantity → auto-calculate cost per unit)
2. Batch production planner (orders → production batches → ingredient requirements)
3. Ingredient inventory tracker (on-hand → depleted by batch → reorder alerts)
4. Basic customer order tracking (orders in queue, in production, fulfilled)

## Revenue Model
- $49/mo: Solo producer (1 user, unlimited recipes/batches)
- $79/mo: Team (up to 5 users + allergen tracking + lot traceability)
- LTD: $149 (up to 3 users, lifetime); AppSumo at $149 for launch

## Niche Targeting Strategy
Start with **bakers** — the largest, most organized sub-community with strong online presence. "Bakery ERP" has real search volume with no competition. After proving in bakery, expand to: soap/candle makers (identical workflow), breweries (already has `craft-brewery-management.md` but this is a simpler micro-operator tool), artisan chocolate/confection makers.

## Go-to-Market
1. Fork Craftplan (AGPL), set up cloud-hosted version; test with 5 artisan bakeries
2. Post in "Cottage Food Business Owners" Facebook groups (500K+ members across groups)
3. AppSumo launch at $149 with "Craftplan cloud — the bakery ERP that just works"
4. YouTube channel sponsorships in bakery/food business channels

## Top 3 Risks
1. Craftplan maintainer ships a paid cloud tier (check GitHub activity regularly)
2. AGPL license requires modifications to be open-sourced — may limit SaaS defensibility; consider building inspired-by (not forked) version to avoid license constraints
3. Artisan businesses are very small ($50K–300K revenue) — LTV may be lower than trades businesses

## Key Source Links
- https://news.ycombinator.com/item?id=46847690 (577 pts, 167 comments — Top 20 Show HN 2026)
- https://github.com/puemos/craftplan
- https://puemos.github.io/craftplan/

## Signal History
| Date | Score | Sources | Notes |
|------|-------|---------|-------|
| 2026-06-19 | 87/105 | hn-indiehackers-2026-06-19 | First identified — Craftplan HN Show HN = Top 20 of 2026 (577pts/167 comments); OSS proves unmet demand but no hosted SaaS layer exists; artisan bakery → soap/candle/brewery expansion path; AppSumo LTD at $149 is natural fit; AGPL license risk noted; bakery niche first |
