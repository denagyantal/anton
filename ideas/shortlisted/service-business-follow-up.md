---
name: Service Business Post-Job Follow-Up Automation
description: Automated SMS+email follow-up sequences for service businesses (review request, rebooking, referral) — CraftBoop-style at $29-49/mo with trade-vertical focus
type: shortlisted
score: 78
tier: 1
verdict: EXPLORE FURTHER
last_updated: 2026-09-28
---

# Service Business Post-Job Follow-Up Automation — Score: 78/105

**Verdict**: EXPLORE FURTHER → BUILD
**Tier**: 1 (Viable Opportunity)
**Evaluation Date**: 2026-09-28
**Decision Status**: NEW
**LTD Price**: $49

## One-Line Pitch
After every completed job, automatically send a review request → rebooking reminder → referral ask via SMS+email — built for trade service businesses (HVAC, plumbers, cleaners, painters) at $29–49/mo or $49 LTD.

## Problem
Service businesses (plumbers, HVAC techs, cleaners, painters, landscapers) do excellent work and then completely fail to follow up. No review request. No rebooking reminder. No referral ask. The result:
- Google reviews left on the table (the #1 free marketing tool for local service businesses)
- Repeat customers not retained (most clients book annually but never get reminded)
- Referrals not requested (the highest-conversion channel, never triggered)

The follow-up gap is near-universal in trades. CraftBoop (IH April 2026) built exactly this at $29/mo and received strong community validation — with IH commenters explicitly calling out that "reviews, rebooking, and referrals are where the most revenue is lost." The problem is proven and the willingness-to-pay is confirmed.

The gap above CraftBoop: SMS is dramatically more effective than email for trade audiences (higher open rates, faster response), and a trade-vertical-specific product (HVAC only, or plumbers only) would enable more targeted messaging and better word-of-mouth within the trade community.

## Market Evidence
- CraftBoop (IH, April 2026): launched at $29/mo with community validation; 14-day trial
- IH commenters explicitly confirmed: reviews/rebooking/referrals = highest-revenue-impact unmet gap for service businesses
- Podium ($200–$400/mo) and Birdeye (enterprise pricing, hidden) serve the enterprise version of this market
- 500K+ HVAC companies, 400K+ plumbers, 200K+ painters in the US
- r/sweatystartup (sweaty = blue-collar services) is a large, active community for this exact ICP
- Adjacent proof: "automated review requests get 84% more reviews" (SQUIRE barbershop data — same pattern applies to trade services)

## Scoring Breakdown

| Criterion | Score | Weight | Weighted | Notes |
|-----------|-------|--------|----------|-------|
| Market Validation | 4/5 | 3x | 12 | CraftBoop $29/mo launched + IH validation + r/sweatystartup signal; review gap near-universal |
| Competitor Weakness | 3/5 | 2x | 6 | Podium/Birdeye exist but enterprise; CraftBoop is direct competitor at same price |
| LTD Viability | 4/5 | 2x | 8 | $49 LTD; simple workflow tool; easy to demo ROI |
| No Free Tier | 3/5 | 1x | 3 | Mailchimp/email tools partially compete; SMS automation is a distinct paid category |
| Channel Access | 4/5 | 2x | 8 | r/sweatystartup, r/HVAC, r/plumbing, trade FB groups; accessible community |
| Content Potential | 3/5 | 1x | 3 | "follow up service business", "auto review request trades", "HVAC customer follow-up" |
| AppSumo Fit | 4/5 | 2x | 8 | Simple automation tool with clear ROI = classic AppSumo winner |
| Review Potential | 3/5 | 1x | 3 | Trade communities vocal; will review if reviews+referrals increase measurably |
| MRR Path | 3/5 | 3x | 9 | $29–49/mo; low ACV but high volume of potential customers; Twilio SMS = ongoing cost |
| Build Feasibility | 5/5 | 2x | 10 | SMS+email sequences with CRM import = 2–3 week build |
| Boring Business Bonus | 4/5 | 2x | 8 | Plumbing/HVAC/cleaning follow-up = blue-collar, unglamorous |

**Total: 78/105**

## Must-Have Filters
- [x] Problem is real (CraftBoop market entry + IH community validation + r/sweatystartup signal)
- [x] Can build without deep domain expertise (SMS/email sequences = standard stack)
- [x] No dominant unbeatable player at this price point
- [x] Revenue potential > $10K MRR within 12 months (350+ customers × $29/mo = $10.15K MRR)

## Boring Business Fit Check
- [x] VCs ignore this segment (not sexy enough)
- [x] Non-technical buyers (trade business owners)
- [x] Existing tools either enterprise-priced or generic (CraftBoop = direct validation this gap exists)
- [x] Real business budgets (HVAC companies average $500K+ annual revenue)
- [x] Moderate stickiness once customer list + job history integrated

## Product Concept: "TradeFollow"

**Core workflow:**
1. **Job completion trigger** — customer marked "job complete" in their current FSM tool (Jobber, HCP) via API, or manually added to TradeFollow via CSV/import
2. **Automatic 5-touch sequence:**
   - Day 0 (job complete): "Thanks [Name] — we loved taking care of [job type] at your place today! Here's your receipt: [link]"
   - Day 1: "Hi [Name], could you spare 30 seconds to leave us a Google review? It helps other homeowners find us: [Google link]"
   - Day 7: Check-in — "Hi [Name], everything still looking good with your [service]? Any questions or concerns, just reply!"
   - Day 60: Rebooking reminder — "Hi [Name], it's been about 2 months since your [service]. Would you like to rebook for another [seasonal upsell]?"
   - Day 90: Referral ask — "Hi [Name], if you know anyone who needs [service type] please pass along our number — we'll give them 10% off their first visit!"
3. **Review dashboard** — aggregate view of review requests sent vs. opened vs. clicked; see which sequences are converting to Google reviews
4. **Jobber/HCP integration** — webhook or CSV sync so jobs auto-populate without double-entry

**Differentiation from CraftBoop:**
- **SMS-first** (not just email): trades respond to text, not email
- **Trade vertical specialization**: HVAC-specific messaging templates ("follow up on your A/C tune-up") vs. generic service business
- **Review management dashboard**: see Google review count over time, not just fire-and-forget emails
- **Jobber/HCP API integration**: no manual data entry for shops already on FSM software

**MVP scope (2–3 weeks):**
- Customer import (CSV or manual add)
- 5-message SMS/email sequence per customer
- Review request with direct Google link
- Simple dashboard: jobs completed / reviews sent / reviews received

## Pricing Model
- **Monthly**: $29/mo (up to 100 customers/month) / $49/mo (unlimited)
- **LTD**: $49 (up to 100 customers/month, lifetime); $79 (unlimited)
- **AppSumo launch**: $49 LTD

## Why EXPLORE FURTHER (Not BUILD Immediately)
Score is Tier 1 at the lower end (78/105). Main concern: CraftBoop is a direct competitor at the same price with a head start. The path to win requires clear differentiation:
1. SMS-first (not email-first) — trades respond better to SMS
2. Trade vertical specialization (HVAC only for launch, then expand)
3. Integration with existing FSM tools (removes manual data entry friction)

Validate: build a $0 waitlist for "HVAC follow-up automation" and target r/HVAC + HVAC FB groups. If 50 signups in 2 weeks, build. If < 10, reassess.

## Target Channels
- r/sweatystartup, r/HVAC, r/plumbing, r/landscaping
- Facebook "HVAC Business Owners", "Plumbing Business Owners" groups
- AppSumo
- Jobber/HCP user community forums

## Top 3 Risks
1. **CraftBoop head start** — they have a working product with community validation; differentiation must be clear
2. **Low ACV** — $29/mo requires large volume; LTD-first AppSumo strategy mitigates
3. **SMS delivery compliance** — 10DLC registration for A2P messaging adds setup friction; Twilio SMS costs reduce margins at low price point

---

## Signal History

| Date | Score | Sources | Notes |
|------|-------|---------|-------|
| 2026-09-28 | 78/105 | hn-indiehackers-2026-09-28 | NEW — IH: CraftBoop launched April 2026 at $29/mo with community validation; post-job follow-up gap documented (thank-you → review request → check-in → rebooking → referral ask); IH commenters confirmed reviews/rebooking/referrals = highest-revenue-impact unmet gap for service businesses; Podium/Birdeye enterprise-only; CraftBoop name may be liability for trust-driven trades; our angle: SMS-first + single trade vertical (HVAC) + Jobber/HCP API integration + review management dashboard; LTD $49 on AppSumo; Sources: hn-indiehackers-2026-09-28 |
