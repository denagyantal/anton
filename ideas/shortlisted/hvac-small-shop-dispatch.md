---
name: HVAC Small Shop Dispatch & Invoicing
score: 92
tier: 1
verdict: BUILD
last_updated: 2026-06-09
---

# HVAC Small Shop Dispatch & Invoicing

## One-Line Summary
Flat-rate dispatch board + equipment history + invoice + payment tool for 1-5 tech HVAC shops priced at $79/mo — the gap between ServiceTitan ($300+/mo) and generic tools.

## Problem
Small HVAC shops (1-5 technicians) are priced out of ServiceTitan and HCP but outgrow QuickBooks + Google Sheets. They need: drag-drop dispatch, customer equipment history (serial numbers, install dates, warranties), flat-rate pricebook, and mobile invoicing — in one tool they can set up in an afternoon.

## Target Customer
- 1-5 technician HVAC shops
- Owner-operators who do both office and field work
- Currently using Google Sheets + QuickBooks + texting
- Pain: Can't track which unit a customer has, when it was last serviced, or what parts are under warranty

## Competitor Landscape
| Competitor | Price | Gap |
|---|---|---|
| ServiceTitan | $300-$600/mo | Too expensive, 6-month onboarding |
| Housecall Pro | $129-$249/mo | Feature-bloated, generic |
| Jobber | $99-$199/mo | No HVAC-specific workflows (equipment history, maintenance agreements) |
| FieldEdge | $150+/mo | Legacy UI, no mobile-first |
| Generic invoice apps | $15-$30/mo | No dispatch, no equipment tracking |

**Dead zone**: $69-$149/mo with HVAC-specific workflows = no dominant player

## Product Concept
- **Drag-drop dispatch board** — morning job assignment, color-coded by tech and status
- **Customer equipment history** — unit make/model/serial, install date, last service, warranty status
- **Flat-rate pricebook** — standard HVAC repair prices, can customize per job
- **Mobile invoicing + Stripe** — tech invoices on-site, customer pays by card
- **Maintenance agreement tracking** — recurring service contracts, auto-reminder scheduling
- **Pricing**: $79/mo flat (up to 5 techs), $39/mo solo, $149 LTD on AppSumo

## Revenue Model
- $79/mo × 200 shops = $15,800 MRR / $190K ARR
- LTD at $149: AppSumo launch = 500 units = $74,500 upfront
- Upsell: customer portal add-on ($20/mo), GPS integration ($15/mo)

## Scoring

| Criterion | Weight | Score | Weighted |
|---|---|---|---|
| Market Validation | 3x | 5 | 15 |
| MRR Path | 3x | 5 | 15 |
| Competitor Weakness | 2x | 5 | 10 |
| LTD Viability | 2x | 4 | 8 |
| Channel Access (Reddit/FB/X) | 2x | 4 | 8 |
| AppSumo Fit | 2x | 4 | 8 |
| Build Feasibility | 2x | 4 | 8 |
| Boring Business Bonus | 2x | 5 | 10 |
| No Free Tier | 1x | 5 | 5 |
| Content Potential | 1x | 3 | 3 |
| Review Potential | 1x | 4 | 4 |
| **TOTAL** | | | **94/105** |

> Note: Score recorded as 92/105 in initial evaluation; refined to 94 on detailed scoring.

## Channels
- r/HVAC, r/hvacadvice, r/smallbusiness
- Facebook: "HVAC Business Owners", "HVAC Contractors Network"
- HVAC-Talk forums
- YouTube: HVAC business content (target channel sponsors)
- Jobber/HCP migration communities (users complaining about price increases)

## Risks
- ServiceTitan or Jobber could add a "lite" tier
- HVAC-specific workflows require domain knowledge (refrigerant tracking, EPA 608 compliance)
- Seasonal demand (busy in summer/winter, slow spring/fall) = higher churn risk

## Decision
**BUILD** — 3x market validation (HVAC forums, IH discussion, competitor pricing dead zone), clear $79/mo price point, HVAC-specific workflows justify switching from generic tools. Start with dispatch board + equipment history as MVP, add pricebook in v2.

---

## Signal History

| Date | Score | Direction | Notes |
|---|---|---|---|
| 2026-06-09 | 92/105 | NEW | HVAC pricing dead zone ($69-$149/mo) confirmed across Reddit + HN/IH + competitor analysis; ServiceTitan → indie migration pain is strong signal |
| 2026-06-11 | 93/105 | ↑1 | TRIPLE-source (Reddit + competitor-analysis + competitor-analysis-boring-biz): 5+ distinct r/HVAC threads in past 2 months — dispatching software, invoicing/scheduling software, FSM software, proposal software, all-in-one software = remarkable signal density; ServiceTitan $22K unauthorized charge BBB complaints documented; $99/mo flat-fee dead zone confirmed with full pricing matrix (ServiceTitan $245–500/tech/mo; HCP $59–149 + per-user; Jobber not HVAC-specific; FieldEdge $299–$599 setup fee); NEW TODAY: HVAC proposal add-on angle (good/better/best equipment tiers + financing calculator = explicitly requested feature missing from Jobber); competitor-analysis names "HVACDesk" concept: flat $99/mo unlimited techs + HVAC pricebook + per-address equipment history + maintenance agreements; LTD $249 (up to 5 techs) vs $3,500+/mo ServiceTitan; Sources: reddit.com/r/HVAC/comments/1jvd1k9, reddit.com/r/HVAC/comments/1kouder, fieldcamp.ai/reviews/servicetitan/, hvacsoftwarehub.com/hvac/pricing/fieldedge-pricing/ |
