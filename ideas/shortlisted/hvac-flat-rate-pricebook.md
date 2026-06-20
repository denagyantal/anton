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
| 2026-06-02 | 93/105 | competitor-analysis-2026-06-02, reddit-2026-06-02 | ↑2: DUAL-source — Competitor: BEST-EVER full-FSM analysis — ServiceTitan $245–500/tech/mo + $5K–$50K implementation; Jobber has ZERO pricebook at ANY tier; Housecall Pro removed human support (AI-only); FieldEdge hides pricing + mandatory paid onboarding; QBO sync broken across ALL competitors (Jobber drops ~2% of line items; FieldEdge users must buy new add-on to keep existing QBO sync); no pricebook at affordable price confirmed; HVAC asset tracking fields (filter info, belt specs, zone names, multi-zone equipment) = zero competitor includes these below enterprise tier; per-company (not per-tech) pricing at <$149/mo = unoccupied; LTD $149 "1 year of Housecall Pro saved" framing confirmed; Reddit: 1-5 tech HVAC shops (doing $500K–$2M/year) paying enterprise prices for features they don't use; 10-tech shop at $63,000+/year = current situation; new target channels confirmed: r/HVAC (140K+), HVAC-Talk.com, Contractor Talk (145K+), Facebook "HVAC Business Owners"; AppSumo first-mover confirmed — no VC-funded HVAC/FSM tool has ever pursued AppSumo; Sources: fieldcamp.ai/reviews/servicetitan/, projul.com/blog/servicetitan-pricing-analysis-2026/, bizglo.co/servicetitan-alternatives/, repair-crm.com/2026/05/27/hidden-costs-of-field-service-software-2026-small-business-guide/ |
| 2026-06-06 | 93/105 | reddit-2026-06-06 | Stable: SINGLE-source — Reddit: ServiceTitan $245/tech/mo confirmed gap for 1–8 tech HVAC shops; maintenance agreement auto-scheduler (2 visits/year + 3-week-out automated reminder) = missing from all affordable tools; equipment asset tracking (unit serial/model/filter size/refrigerant type/service history per unit) = zero mid-tier competitor includes; $39/mo flat-rate all-in for solo HVAC shop = confirmed acquisition angle vs $99–260/mo competitors; Sources: reddit-2026-06-06 |
| 2026-06-14 | 93/105 | competitor-analysis-2026-06-14, trends-2026-06-14, hn-indiehackers-2026-06-14 | Stable: TRIPLE-source — Competitor: "FieldRate" concept documented — HVAC/trades FSM with pre-loaded flat-rate price book (OEM-level pricing for 500+ common repairs), good-better-best customer presentation on mobile, route optimization, clean invoicing; no per-technician pricing below 5 techs; ServiceTitan $250-500/tech/mo "way too much for a small family company" (Capterra 2025-2026); Jobber "lacks flat-rate pricing book integration, equipment tracking by serial number, no good-better-best tiered presentation"; contractors manually build Excel price sheets + email PDFs = workaround; route optimization absent across all affordable tools; "FieldRate" at $79 solo / $149 up to 5 techs LTD; target: r/HVAC (140K+), FB "HVAC Business Owners" (45K+), ACCA forums; AppSumo: no HVAC FSM on AppSumo = category-first confirmed; HN/IH: FieldFlow (Show HN) demonstrates solo contractor FSM pain — carpenter built $5/mo FSM after paying $150+/mo for Jobber he found "too bloated"; 4x YC companies (Ressl AI, Drillbit, Bravi, Elyos AI) entering space confirms massive market; Trends: "anti-ServiceTitan" for 1-5 tech shops is single strongest cross-source signal of the day — appeared in all 4 sources; white space: AI dispatch + inbound call answering bundled with lightweight FSM; flat $99/mo, 30-min setup, no long-term contracts for rural/regional HVAC; Sources: getonecrew.com/post/servicetitan-reviews, workyard.com/compare/hvac-service-software, fieldcamp.ai/reviews/jobber/, projul.com/blog/best-servicetitan-alternatives/, news.ycombinator.com/item?id=47294092 |
| 2026-06-20 | 93/105 | reddit-2026-06-20, hn-indiehackers-2026-06-20, competitor-analysis-2026-06-20, trends-2026-06-20 | Stable: QUAD-source — Reddit: HVAC affordable FSM gap ($49/mo flat vs $245–500/tech/mo ServiceTitan); HN: HVAC-Specific CRM with EPA 608 refrigerant compliance (#11) — legally required tracking; seasonal maintenance scheduling + service agreement management as differentiators; 100K+ HVAC companies with 1-5 techs; Competitor: MicroField concept documents maintenance agreement scheduler + equipment database per customer address; EPA refrigerant log (legally mandated) = must-have hook; Trends: ServiceTitan refugee market active; HVAC software $1.51B→$6.29B (17.3% CAGR); Sources: reddit-2026-06-20, hn-indiehackers-2026-06-20, competitor-analysis-2026-06-20, trends-2026-06-20 |
