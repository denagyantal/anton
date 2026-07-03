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
| 2026-06-13 | 93/105 | Stable | TRIPLE-source (Reddit + HN/IH + competitor-analysis + trends): **Breezy (HVAC SaaS)** confirmed 80,000+ active users growing fast = market demand not yet saturated; Breezy venture-backed and going upmarket = leaves bootstrapped $29-99/mo tier open; **QuoteIQ** launched AI Estimator + AI Autopilot + 24/7 AI call answering at $29.99/mo = new price floor competitor but validates AI-first feature demand; multiple comparison articles published 2025-2026 ("best ServiceTitan alternatives") = active comparison search; 89% of tradespeople lack adequate digital tools (SBA Q3 2025) = vast undigitized base; gap: flat-rate pricebook + AI dispatch + missed-call auto text-back in ONE tool under $100/mo = confirmed unoccupied; ServiceTitan G2 June 2025: "product support TERRIBLE" + "onboarding long and difficult"; Trends: AI-first FSM wave beginning — 6-8 week MVP for intake → AI dispatch → auto-quoting → auto-invoicing → auto-follow-up; Sources: projul.com/blog/best-servicetitan-alternatives/, crewroute.app/compare/alternatives/servicetitan/, myquoteiq.com/ai-powered-software-hvac-companies/, fieldcamp.ai/reviews/servicetitan/ |
| 2026-06-15 | 95/105 | ↑2 | DUAL-source — Reddit: "ServiceTitan costs $35K–$65K in Year 1 for small shops ($2–6M revenue)" confirmed; visible chasm between $99/mo Jobber (feature-light) and $3,000+/mo ServiceTitan (enterprise overkill); FieldFuze Pro $349/mo flat for 15 seats = emerging but unknown; Competitor: BEST-EVER complaint documentation — BBB: "trapped into contract" (verified); "NEVER BEEN ONBOARDED — paid for 1 year" (Dec 2024); "product support TERRIBLE" (G2 June 2025); early termination = ALL remaining contract payments; $39,375 termination fee BBB documented; "built for enterprise, not 6-person company" (YouTube May 2025); Jobber: "features I pay for just don't work" + 10pm sales calls; HCP: advertised $79/mo but real cost $229–320/mo for 3-truck shop; "TinyTitan" concept: flat $69/mo up to 5 techs (all features), month-to-month only, 5-tech maximum enforced forever (brand promise), 2-hour onboarding; AppSumo $150–300K LTD launch estimated; Sources: fieldcamp.ai/reviews/servicetitan/, projul.com/blog/servicetitan-pricing-analysis-2026/, tradesly.ai/blog/housecall-pro-vs-jobber-comparison-small-business-2026, korekomfortsolutions.com/jobber-vs-housecall-pro-pricing-hidden-fees-real-costs-2026/ |
| 2026-07-02 | 95/105 | Stable | QUAD-source (reddit, hn-indiehackers, competitor-analysis x2, trends) — Full competitor matrix from two independent analyses confirms 1–5 tech dead zone. FieldPulse $1,000+/yr in add-ons for "basic calling/texting/emailing" documented (features marketed as included). HCP Android rated 3.2/5 stars + chat-only support = "Great on iPhone but I'm 58 — I don't want to chat with a bot when my business is on fire." "TechRoute" concept (flat $299 LTD, 5 users, all features no per-tech penalty): scheduling + dispatch + flat-rate pricebook + GPS + invoicing + QuickBooks sync + analytics (vs Excel export). Avoca AI raised $125M at $1B valuation — HVAC/trades AI voice market confirms sector momentum. 89% of tradespeople still lack adequate digital tools (SBA Q3 2025). Breezy AI doing $1.7M ARR with 7 people targeting HVAC/plumbing = bootstrapped adjacent validation. Sources: fieldcamp.ai/reviews/servicetitan/, rivetops.io/servicetitan-vs-jobber-vs-housecall-pro, projul.com/blog/housecall-pro-pricing-analysis-2026/, prnewswire.com/news-releases/avoca-raises-125m |
| 2026-07-03 | 95/105 | Stable | QUAD-source (reddit, hn-indiehackers, competitor-analysis, trends) — Reddit (r/HVAC/Plumbing/Electricians): ServiceTitan $250–500/tech/mo; HCP 20–40% price hikes at renewal; Jobber tiers force $119–199 upgrades; FieldFlow Show HN (Mar 2026) at $5/mo confirms demand but unpolished = gap wide open for better product at $9–79/mo; HN/IH: TinySeed/Walling confirms home improvement contractor SaaS to 7-figure path; Competitor: "FieldDesk" concept — no per-tech pricing, 30-min setup, HVAC/plumbing templates baked in; LTD $79 (solo) / $129 (up to 5 techs); Trends: Avoca $125M + Probook $40M (June 2026) confirms AI voice layer above FSM; sector heating up; SMB $79/mo flat slot still unoccupied; Sources: news.ycombinator.com/item?id=47294092, fieldcamp.ai/reviews/servicetitan/, indiehackers.com/post/should-i-just-create-a-boring-b2b-saas-b6181991c0, fieldservicesoftware.io/comparisons/housecall-pro-vs-jobber-vs-servicetitan/ |
