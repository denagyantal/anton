---
name: Dunning for Field Service Subscriptions
description: Payment recovery for failed recurring service contracts (pest control, lawn care, HVAC maintenance) — integrates with Jobber/ServiceTitan where Churnkey/ProfitWell cannot; first identified 2026-09-29 at 87/105
type: shortlisted
---

# Dunning for Field Service Subscriptions — Score: 87/105

**Verdict**: BUILD
**Tier**: 1 (Strong Opportunity)
**Evaluation Date**: 2026-09-29
**Decision Status**: NEW

## One-Line Pitch
Automated payment recovery for recurring field service contracts — the Churnkey/ProfitWell for pest control and lawn care, where Stripe dunning tools don't reach.

## Problem

SaaS companies lose ~9% of MRR to failed payments (involuntary churn), and the SaaS dunning market is proven: Churnkey ($400K+ ARR), ProfitWell Retain (acquired by Paddle), RecoveryMRR ($99/mo flat, recovering $300+/mo for early customers immediately) — all profitable.

**But these SaaS dunning tools require Stripe/Braintree**. Field service businesses (pest control, lawn care, HVAC maintenance plan subscribers) bill via Jobber, ServiceTitan, or Housecall Pro — not Stripe. Their recurring monthly contracts fail just as often as SaaS subscriptions (ACH rejects, expired cards, bank changes), but zero dunning tools integrate with FSM platforms.

The identical problem exists for:
- **Pest control**: 30,000+ companies with monthly recurring service contracts ($49–150/mo per customer)
- **Lawn care**: 600K+ businesses with seasonal subscription plans ($35–150/mo)
- **HVAC maintenance plans**: HVAC companies selling $150–300/yr maintenance agreements
- **Pool service**: Monthly recurring chemical + cleaning routes ($75–200/mo per pool)

When a pest control company loses a $75/mo customer to a failed ACH debit, they lose the service contract AND the value of an ongoing relationship. Without a dunning workflow, the operator sends a manual text (maybe), then writes it off.

**RecoveryMRR's validated stats apply here**: 40–80% of failed payments are recoverable with a systematic retry + notification sequence. For a pest control company with 200 recurring customers at $75/mo, recovering 60% of failed payments = ~$900/month recovered.

## Market Evidence

- IH post: "RecoveryMRR lives at $99/mo flat, recovering $300+/month for early customers = immediate ROI" — same math applies to field service
- Churnkey $400K+ ARR, ProfitWell acquired, RecoveryMRR growing = dunning market validated
- SaaS companies lose 9% MRR to involuntary churn; 40–80% recoverable
- Field service subscriptions use the same payment infrastructure (ACH / card-on-file) with the same failure modes
- Jobber, Housecall Pro, GorillaDesk all support recurring billing but have NO dunning/retry workflow
- ServiceTitan has basic payment reminders but no systematic dunning sequences

## Scoring Breakdown

| Criterion | Score | Weight | Weighted | Notes |
|-----------|-------|--------|----------|-------|
| Market Validation | 4/5 | 3x | 12 | RecoveryMRR $99/mo live; Churnkey $400K+ ARR; field service subscriptions proven |
| Competitor Weakness | 5/5 | 2x | 10 | Zero dunning tools integrate with Jobber/ServiceTitan/HCP |
| LTD Viability | 3/5 | 2x | 6 | Dunning is recurring; $149 LTD as "recovery insurance" viable |
| No Free Tier | 4/5 | 1x | 4 | No free solution for this niche |
| Channel Access | 4/5 | 2x | 8 | r/pestcontrol, r/lawncare, pest control/lawn care FB groups |
| Content Potential | 4/5 | 1x | 4 | "pest control payment recovery", "lawn care failed payment", "field service dunning" |
| AppSumo Fit | 3/5 | 2x | 6 | Niche but clear ROI narrative — recovery math is compelling |
| Review Potential | 4/5 | 1x | 4 | Operators review when payments recovered (measurable result) |
| MRR Path | 5/5 | 3x | 15 | Dunning = recurring; payment per recovery event; integrates with existing tools |
| Build Feasibility | 4/5 | 2x | 8 | Webhooks from Jobber/HCP APIs + automated retry sequences = 3–4 weeks |
| Boring Business Bonus | 5/5 | 2x | 10 | Pest control + lawn care = deeply boring |

**Total Weighted Score: 87/105**

## Must-Have Filters
- [x] Problem is real (RecoveryMRR $99/mo validated; same payment failure dynamic applies to field service)
- [x] Can build without deep domain expertise (webhook integration + SMS/email sequences)
- [x] No dominant player (zero tools serve this; SaaS dunning tools require Stripe)
- [x] Revenue potential > $10K MRR within 12 months (100 operators × $99/mo = $9,900 MRR; 200 at $99 = $19,800 MRR)

## Boring Business Fit Check
- ✅ VCs ignore pest control + lawn care payment recovery entirely
- ✅ Pest control and lawn care operators are non-technical; dunning "just works" = high adoption
- ✅ Existing software (Jobber/HCP) has no recovery workflow — clear gap to fill
- ✅ Monthly recurring service contracts = real budgets; recovering 3 months of failed payments pays for a year's subscription
- ✅ Once integrated with their FSM platform, switching is painful (integration setup cost)

## Product Concept: "RecoverRoute" (or "FieldRecovery")

**Pricing**: $99/mo flat (up to 500 active subscribers tracked) / $199/mo (unlimited)
**LTD**: $149 (up to 200 subscribers) — "Recovery Insurance" positioning

**Integration targets (priority order):**
1. Jobber (largest small-business FSM; public API available)
2. Housecall Pro (second largest; API available)
3. GorillaDesk (pest control + lawn care focus; most relevant vertical)
4. ServiceTitan (larger shops; longer sales cycle but higher ARPU)

**Core MVP (3–4 weeks):**
1. **Webhook listener** — connects to Jobber/HCP API; monitors for failed payment events on recurring jobs/service contracts
2. **Retry sequence engine** — Day 0 (soft reminder), Day 3 (account update request), Day 7 (final notice with "update payment method" link); tone-calibrated per stage
3. **SMS + email delivery** — same dual-channel approach as SaaS dunning; SMS has 90%+ open rate vs 20% email
4. **Payment update link** — branded hosted page where customer updates their card/ACH without calling the shop
5. **Recovery dashboard** — recovered vs. failed vs. written-off by month; shows monthly $ recovered

**Phase 2:**
- AI tone calibration (different sequences for new customers vs. 3-year loyal customers)
- Integration with ServiceTitan and FieldRoutes
- "Win-back" sequences for cancelled subscribers (reactivation after 30/60/90 days)
- Dunning analytics by service type and region

## Key Differentiators
1. **FSM-native integration** — first and only dunning tool for Jobber/HCP/GorillaDesk (vs. Churnkey which requires Stripe)
2. **Trade-specific tone** — "Hi from [Company], your lawn care payment for [Property Address] didn't go through" = relationship-preserving language vs. generic SaaS dunning
3. **Field service recurring math** — shows "$ recovered this month" in language operators understand (service revenue, not MRR)
4. **One-click onboarding** — connect Jobber OAuth → import recurring jobs → sequences start; 15-minute setup

## Target Channels
- r/pestcontrol, r/lawncare, r/mowing, r/landscaping
- Facebook: "Pest Control Business Owners", "Lawn Care Business Owners" (300K+ combined)
- GorillaDesk user communities (they serve pest control + lawn care already)
- AppSumo LTD launch: "Recover the lawn care payments you're writing off every month"
- Content: "pest control payment recovery", "lawn care failed payment automation", "how to recover missed service payments"

## Top 3 Risks
1. **API access depth** — Jobber and HCP APIs must expose payment failure webhooks; if not, integration requires polling (less clean)
2. **FSM platform dependency** — if operators switch FSM platforms, integration must be rebuilt; mitigate by supporting top 4 platforms
3. **Market size** — pest control + lawn care is large but each company's $99/mo cap limits ARPU; need 100–200 operators to hit $10K MRR

## Key Source Links
- https://www.indiehackers.com/post/everyone-said-don-t-build-in-payment-recovery-ae9a323375
- https://recoverymrr.com
- https://churnkey.co
- https://developer.getjobber.com/ (Jobber API documentation)
- https://www.gorilladesk.com/api (GorillaDesk API)

## Signal History

| Date | Score | Sources | Notes |
|------|-------|---------|-------|
| 2026-09-29 | 87/105 | hn-indiehackers-2026-09-29 | First identified: IH post confirms RecoveryMRR $99/mo live recovering $300+/mo immediately; Churnkey $400K+ ARR validates SaaS dunning; field service operators (pest control, lawn care, HVAC maintenance plans) use Jobber/ServiceTitan not Stripe — zero dunning tools serve them; RecoverRoute concept: Jobber/HCP webhook integration + Day 0/3/7 SMS+email retry sequence + payment update link + recovery dashboard; 3–4 week MVP; pest control first vertical; $99/mo flat |
| 2026-10-14 | 97/105 | competitor-analysis-2026-10-14, reddit-2026-10-14, trends-2026-10-14 | ↑10: TRIPLE-source — NEW PRIMARY CONCEPT: "FieldKit" flat-rate FSM for 1–6 tech teams (HVAC/plumbing/pest) — separate from dunning concept above; Competitor: ServiceTitan dropped Podium integration Sept 2026 with 4-week notice = live acquisition catalyst; Jobber per-user trap ($400+/mo at 5-person crew), HCP add-on creep (2-way SMS/review requests gated at $149+), ST overkill = no flat-rate sub-$100 FSM with ALL features included; "FieldKit" concept at $59/mo flat (up to 5 users): scheduling + dispatch + mobile job cards + invoice + 2-way SMS + QBO sync all at base price; prior AppSumo deals (Workiz etc.) sold 3K–8K units; Reddit: multiple solo/small crew operators confirmed paying $400+/mo for basic FSM features; Trends: FieldCamp, Breezy (VC-funded), WorkHero ($5M seed), Faraday all entering trades AI in 2026 = market validation; affordable end ($49–99/mo flat) wide open; indie score: 97/105 — strongest new FSM signal to date; Sources: fieldcamp.ai/reviews/servicetitan, fieldservicecompare.com/articles/housecall-pro-review-2026, bizglo.co/servicetitan-alternatives, reddit.com/r/SoftwareForTrades/comments/1v2tie0, reddit.com/r/landscaping/comments/1v2wuew |
| 2026-10-15 | 97/105 | hn-indiehackers-2026-10-15, reddit-2026-10-15, trends-2026-10-15 | Stable: TRIPLE-source — HN/IH: FieldLedgr (Show HN, free PLG wedge into trades market), ClientPing (mobile-first, offline-first for 1-3 crew, voice-to-invoice angle), Plummerly (plumbing-specific vertical SaaS build-in-public), Breezy ($0→$250K ARR in 9 months by codifying HVAC maintenance plan workflow = applied methodology) = 4 concurrent indie builds validating same gap; InstaBid Solo (instant-price embeddable widget) = new lead-gen entry point model; Reddit: "Jobber + QB don't show job profitability — every shop exports to a sheet on Sundays" (r/FieldService); "tried 4 CRMs in 2 years — a bus when the problem is 4 different doors" (r/smallbusiness); Trends: ServiceTitan moving upmarket confirms sub-10-truck gap; $8K-$20K MRR per solo founder validated across sources; Breezy lesson: find the one workflow everyone apologizes for, model it precisely; Sources: news.ycombinator.com/item?id=47668698, indiehackers.com/post/how-i-ended-up-building-clientping-Vbp1uNN8PkHcgblAW1iC, silasreinagel.com/product/2023/11/15/breezy-0-to-250k-arr-owning-the-manual-workflow/, indiehackers.com/post/i-m-building-plummerly-plumbing-service-business-management-software-Yk7gp1SLquc1d8NPx1Ff, reddit.com/r/FieldService/comments/1tggzn6, reddit.com/r/smallbusiness/comments/1rq6xu2 |
| 2026-10-19 | 98/105 | reddit-2026-10-19, reddit-scanner-2026-10-19, hn-indiehackers-2026-10-19, competitor-analysis-2026-10-19, trends-2026-10-19 | ↑1: PENTA-source — Competitor: "TradesDesk" concept confirmed: flat FSM + native missed-call text-back + lead-to-job pipeline, single company fee not per-tech; HCP trade-specific packages added $96K MRR on launch day = verticalization confirmed as market direction; Reddit/Scanner: "I don't entirely understand how someone hasn't created a decent integrated FSM/CRM for less than $250 a month" (r/pressurewashing); Jobber called out for no sales pipeline with "WTF???" reaction; 62% of calls missed during business hours; HN/IH: FieldLedgr free PLG wedge; ClientPing offline-first mobile FSM; Plummerly plumbing-specific vertical build; InstaBid Solo quote widget = 4 indie builders simultaneously validating same gap; Trends: ServiceTitan moving upmarket confirms sub-10-truck gap; $49-99/mo flat-fee end still wide open; Sources: reddit.com/r/pressurewashing/comments/1kpps2n, fieldcamp.ai/alternatives/servicetitan, contractorincharge.com/blog/missed-call-statistics, news.ycombinator.com/item?id=47668698 |
| 2026-10-21 | 98/105 | reddit-2026-10-21, hn-indiehackers-2026-10-21 | Stable: DUAL-source — Reddit: per-user pricing frustration peaked — multiple r/WhichCRM + r/smallbusiness posts documenting $460/mo FSM bills from seat growth; Fieldkit ($99/mo flat, unlimited users) and ServNox/DispatchCore as emerging indie validators; Housecall Pro + Jobber + ServiceTitan all charge per seat; target market confirmed: HVAC/plumbing/electrical/roofing 1–15 trucks; flat-rate $79–149/mo covering scheduling + dispatch + estimates + invoices + SMS automation + review collection = confirmed unoccupied below VC-backed Breezy; HN/IH: WorkHero $5M seed (AI back-office for HVAC) + Breezy ($3M seed, $250K ARR in 9 months) both VC-backed = confirms 1–5 tech segment is actively funded; indie underserved at $49–99/mo flat; ClientPing (mobile+offline-first) + Plummerly (plumbing-specific) = 2 more indie builders validating same demand; LTD $299–499 for ≤10 trucks (prior AppSumo Workiz deals sold 3K–8K units); Sources: reddit.com/r/WhichCRM/comments/1qwwl24, reddit.com/r/micro_saas/comments/1uv1f0f, reddit.com/r/smallbusiness/comments/1rhbkrl, getbreezyapp.com, workhero.pro |
| 2026-10-23 | 99/105 | reddit-2026-10-23, hn-indiehackers-2026-10-23, competitor-analysis-2026-10-23, trends-2026-10-23 | ↑1: QUAD-source — Reddit: FieldPulse $99/user/mo + mobile app crashes during estimates + won't save quotes + QBO sync breaks = live migration trigger; 10-person crew pays $1,000+/mo in user fees alone; DispatchCore (dispatchcore.io) and ServNox (servnox.com) just launched targeting this exact gap — "simplicity + flat pricing for HVAC/plumbing/landscaping"; HN/IH: FieldLedgr free PLG wedge confirmed; ServiceTitan/Workiz 70-comment HN thread confirms 1–5 tech shop is the unserved segment; Competitor: FieldPulse non-transparent pricing (demo required) + mobile crashes confirmed across Capterra; full 6-player matrix reconfirms $79/mo flat dead zone; Trends: Probook $40M (a16z+Sequoia) + Avoca AI $125M/$1B (Kleiner+GC) = $200M+ institutional capital confirming AI OS for trades; small independent shop (2–5 techs, <$2M revenue) sub-$100/mo remains uncaptured by all VC-backed entrants; "beneath ServiceTitan" gap analysis from Startup Heist confirms mobile RAG copilot for small shops = 4–6 week MVP; Sources: reddit.com/r/WhichCRM/comments/1qq05ee, reddit.com/r/smallbusiness/comments/1rhbkrl, reddit.com/r/micro_saas/comments/1uv1f0f, startupheist.com/the-field-manual-copilot-79k-mrr-underneath-servicetitan/, globenewswire.com/news-release/2026/6/23/3316215 |
| 2026-10-26 | 99/105 | reddit-2026-10-26, hn-indiehackers-2026-10-26, competitor-analysis-2026-10-26, trends-2026-10-26 | Stable: QUAD-source — Competitor: "WrenchOS" concept documented — flat-rate pricebook bundled at base (vs HCP $149/mo add-on), unlimited users at $79–$129, offline-capable, equipment service history per customer address = dead zone confirmed below $100/mo; Reddit: 9-tech HVAC owner "still using spreadsheets and group chats" = 5–20 tech inflection confirmed live; voice-to-estimate via "Willow Voice" organic adoption = mobile estimating gap; AI phone answering + invoicing combo for solo operators = new sub-vertical adjacent signal; HN/IH: FieldLedgr free PLG wedge + ClientPing offline-first mobile + Plummerly plumbing-specific + Rainslice.ai (running 3 cleaning companies fully on AI) = FOUR concurrent indie builders validating gap; Trends: Probook $40M (a16z+Sequoia) + Dalton Mills $9.2M ("Replit for trades") + Feldy YC + 15 YC home services companies 2026 = $50M+ institutional VC confirming AI OS for trades; sub-$100/mo flat-fee end remains uncaptured by ALL VC-backed entrants; Sources: reddit.com/r/HowToEntrepreneur/comments/1u9gxe1, reddit.com/r/ContractorsUS/comments/1smcm8c, fieldserviceguide.com/does-servicetitan-work-for-small-hvac-companies-2026/, globenewswire.com/news-release/2026/6/23/3316215, daltonmills.com/resources/fieldnotes/dalton-mills-raises-9m-to-build-the-platform-for-trades |
| 2026-10-27 | 99/105 | reddit-2026-10-27, hn-indiehackers-2026-10-27, trends-2026-10-27 | Stable: TRIPLE-source — Reddit: survey of 35 contractors = 14 use QBO reluctantly, 5 on Google Sheets; FieldPulse $99/user crashes confirmed; "adding office manager doesn't cost a dime" flat-rate positioning resonates; #1 unmet need = "tracking what jobs made money after materials and time" = job profitability gap confirmed; HVAC legacy churn (Wintac shutdown, FieldEdge glitches) = additional migration wave; HN/IH: FieldFlow ($5/mo demo only) + Plummerly (plumbing-specific, pre-revenue) = TWO new builders entering; Schedo $5K MRR (window cleaning first customer) = adjacent scheduling validation; Trends: Probook $40M a16z+Sequoia + Dalton Mills $9.2M + Elyos AI $13M Series A + Feldy YC 200+ paying customers = $65M+ institutional capital this quarter; sub-$100/mo flat + unlimited users + offline-capable remains uncaptured by ALL VC-backed entrants; Sources: reddit-2026-10-27, hn-indiehackers-2026-10-27, trends-2026-10-27 |
| 2026-10-28 | 99/105 | reddit-2026-10-28, hn-indiehackers-2026-10-28, competitor-analysis-2026-10-28, trends-2026-10-28 | Stable: QUAD-source — Reddit: 9-tech HVAC "still using spreadsheets and group texts" reconfirmed; FieldEdge cloud sync failures + blank invoices + mobile app crashes; scheduling mistakes as company grows; ServiceTitan ETFs $16K–$67K documented; HN: FieldLedgr (free field service PLG), ClientPing (mobile+offline-first, one-tap SMS), Plummerly (plumbing-specific, build-in-public), Rainslice.ai (3 cleaning companies on full AI ops) = four concurrent indie builders validating gap; Competitor: TradeBase concept — flat $49/mo unlimited techs (HVAC/plumbing/electrical); $49–$245/tech dead zone confirmed unoccupied; Trends: Avoca $125M/$1B (Kleiner+GC), Probook $40M (a16z+Sequoia), Dalton Mills $9.2M, Elyos AI £10M = $200M+ institutional capital; sub-$100/mo flat + unlimited users + offline-capable STILL uncaptured by all VC-backed entrants; HCP trade packages (July 2026) validates verticalization but explicitly excludes pest control + pool service |
| 2026-10-29 | 99/105 | reddit-2026-10-29, hn-indiehackers-2026-10-29, competitors-2026-10-29, competitor-analysis-2026-10-29, trends-2026-10-29 | Stable: PENTA-source — Reddit: Fieldkit confirmed actively recruiting 6 pilot contractors at $99/mo flat unlimited users; r/ProHVACR 25-employee HVAC shop stranded after Wintac activation servers shut down (Wintac/TSD abandonware refugee wave confirmed); FieldEdge bugs cited in 55% of negative reviews = active churn event; 35-contractor survey: 14 on QB reluctantly, 5 on Google Sheets = flat-file chaos confirmed; HN/IH: FieldLedgr free PLG wedge; ClientPing offline-first mobile; MrTask (Field Complete) $20/mo with AI back-office; Rainslice.ai running 3 cleaning companies on AI = concurrent indie builders validating gap; Competitor (dual-file): ServiceTitan Year 1 cost $51K-63K for 10-tech shop; FieldEdge persistent bugs 55% negative reviews; Service Fusion poor Android/offline; $99-199/mo flat dead zone confirmed across full 6-player matrix; Trends: HCP launched trade-specific packages July 2026 adding $96K new MRR in first month (HVAC/plumbing/electrical) = trade verticalization confirmed; WEX FSM rebranded targeting 35K+ contractors; sub-niche white space (chimney, locksmith, pool, window washing) explicitly confirmed; Sources: reddit.com/r/WhichCRM/comments/1qwwl24, reddit.com/r/ProHVACR/comments/1k1n7ba, fieldcamp.ai/reviews/servicetitan/, capterra.com/p/150053/ServiceTitan/reviews, contractortoolstack.com/software/fieldedge, globenewswire.com/news-release/2026/07/15/3327769 |
