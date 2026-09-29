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
