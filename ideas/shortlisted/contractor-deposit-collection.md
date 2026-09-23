# Contractor Deposit Collection (Pre-Job) — Score: 87/105

**Verdict**: BUILD
**Tier**: 1 (Strong Opportunity)
**Evaluation Date**: 2026-09-23
**Decision Status**: NEW

## One-Line Pitch
Send a Stripe payment link via SMS before the job starts — auto-remind 24 hours before, auto-notify the contractor if unpaid — so contractor no-shows cost the customer, not the business.

## Problem
Contractors routinely get burned: they block a full day for a job, show up, and the customer cancels or doesn't answer the door. No-shows cost a service day ($300–$1,200 in lost revenue). Getting a deposit before the job eliminates this — but current tools make it awkward:

- **Jobber**: deposit collection exists but requires significant setup; not available at all tiers
- **Housecall Pro**: deposit feature clunky; not integrated into the customer communication flow
- **Manual**: sending a Stripe link via email/text = fine but no automated reminders, no auto-cancel workflow

HandyPay reached $1K MRR in under 60 days in the adjacent spa/salon market by walking into businesses in person — confirmed willingness to pay, immediate ROI. The trades version is identical in structure.

The ROI is self-evident: one recovered $500 deposit pays for years of a $149 LTD. One recovered job day ($800) pays for the tool indefinitely.

## Market Evidence
- HandyPay $1K MRR in under 60 days in spa/salon (adjacent market)
- No dedicated "contractor deposit collection" tool at any price point
- Jobber/HCP both have deposits but neither is frictionless or workflow-native
- r/sweatystartup: "no-shows cost me $X this month" = recurring complaint pattern
- Booking + deposit SMS automation is the most common request in service business communities

## Scoring Breakdown

| Criterion | Score | Weight | Weighted | Notes |
|-----------|-------|--------|----------|-------|
| Market Validation | 4/5 | 3x | 12 | HandyPay $1K MRR in 60 days adjacent; no-show problem documented across all trade subs |
| Competitor Weakness | 4/5 | 2x | 8 | Jobber/HCP deposit awkward; no dedicated tool exists |
| LTD Viability | 5/5 | 2x | 10 | $149 LTD; one saved no-show pays for tool forever |
| No Free Tier | 5/5 | 1x | 5 | Each recovered $500 deposit pays for the tool |
| Channel Access | 4/5 | 2x | 8 | All trade subs, r/sweatystartup, contractor FB groups |
| Content Potential | 3/5 | 1x | 3 | "contractor deposit app", "no-show prevention contractor" |
| AppSumo Fit | 5/5 | 2x | 10 | "Pay once, recover deposits forever" = perfect AppSumo pitch |
| Review Potential | 4/5 | 1x | 4 | Every contractor who recovers from a no-show will review |
| MRR Path | 3/5 | 3x | 9 | Point solution; FSM integration = stickiness |
| Build Feasibility | 5/5 | 2x | 10 | Stripe payment links + SMS (Twilio) = 1 week MVP |
| Boring Business Bonus | 4/5 | 2x | 8 | Contractor/trades market |

**Total: 87/105**

## Must-Have Filters
- [x] Problem is real (HandyPay $1K MRR; no-show documented universally)
- [x] Can build without deep domain expertise (Stripe + Twilio + simple UI)
- [x] No dominant player (Jobber/HCP have awkward deposit features; no dedicated tool)
- [x] Revenue potential > $10K MRR within 12 months (500 contractors × $19/mo)

## Key Differentiators
1. **SMS-first deposit request** — payment link sent via text, not email (higher open rates for homeowners)
2. **Auto-reminder 24 hours before job** — "Your appointment is tomorrow — deposit not received yet, here's the link"
3. **Auto-cancel workflow** — if deposit not received by X hours before job, contractor gets notified; optional auto-cancel SMS to customer
4. **Frictionless Stripe setup** — contractor connects Stripe once; every deposit request is generated in 10 seconds
5. **Jobber/HCP webhook integration** — deposit requested auto-fires when job is booked

## Product Concept
**MVP (1 week):**
- Contractor connects Stripe account
- New job entry: customer name + phone + job date + deposit amount
- System generates Stripe payment link, sends SMS: "Hi [Name], [Contractor] is confirmed for [Date]. Please pay your $[X] deposit to hold your spot: [link]"
- 24hr before: auto-reminder SMS
- 4hr before: if unpaid, contractor gets SMS alert: "⚠️ [Name] hasn't paid deposit for today's job"
- On deposit paid: contractor SMS confirmation + job auto-confirmed
- Dashboard: upcoming jobs + deposit status per job

**Jobber/HCP integration (v2):**
- Webhook: job booked in Jobber → deposit request auto-fires
- Deposit status synced back to Jobber job record

**Pricing:**
- $39/mo: up to 50 deposit requests/month
- $149 LTD: unlimited requests + Jobber/HCP webhook
- $19/mo: post-LTD lightweight tier

## Target Channels
- r/sweatystartup (primary — exact buyer demographic)
- r/GeneralContractor, r/lawncare, r/cleaningbusiness
- AppSumo (LTD launch)
- Contractor Facebook groups

## Risks
1. Jobber adds native automated deposit SMS — monitor roadmap
2. Point solution churn once FSM tools improve deposit features
3. SMS costs (Twilio) eat into margins at high volume — need to cap low tiers

## Key Source Links
- https://www.indiehackers.com/post/the-boring-way-we-reached-1k-mrr-in-less-than-60-days-61739ba3d9 (HandyPay)
- https://www.reddit.com/r/sweatystartup/comments/18xy4o3/all_in_one_platform/
- https://www.indiehackers.com/post/the-boring-way-we-reached-1k-mrr-in-less-than-60-days-61739ba3d9

## Signal History

| Date | Score | Sources | Notes |
|------|-------|---------|-------|
| 2026-09-23 | 87/105 | hn-indiehackers-2026-09-23 | First identified: HandyPay $1K MRR in under 60 days in adjacent spa/salon market (in-person direct sales GTM validated); Jobber/HCP deposit awkward/clunky; no dedicated "contractor deposit collection" tool; Stripe payment link + SMS + 24hr auto-reminder + auto-cancel workflow = confirmed MVP scope; $149 LTD; Jobber/HCP webhook = v2; "pay once, recover deposits forever" = AppSumo pitch |
