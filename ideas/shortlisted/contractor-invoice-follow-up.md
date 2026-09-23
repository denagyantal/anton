# Contractor Invoice Follow-Up Automation — Score: 91/105

**Verdict**: BUILD
**Tier**: 1 (Strong Opportunity)
**Evaluation Date**: 2026-09-23
**Decision Status**: NEW

## One-Line Pitch
SMS + email follow-up sequences for contractors after every invoice — friendly → firm → final notice, automatically — so getting paid stops depending on who remembered to text.

## Problem
Contractors send an invoice and then... nothing systematic happens. QuickBooks automated reminders are ignored ("payment is due" = spam). Manual WhatsApp follow-up works but is awkward — nobody wants to chase a homeowner and risk the relationship. No dedicated tool handles the emotional complexity of contractor-to-homeowner collections: preserving the relationship while escalating appropriately.

CraftBoop launched at $29/mo with an email-only sequence — confirmed demand, confirmed gap (email-only is not how trades customers respond; they respond to SMS).

The result: contractors leave real money on the table. A missed $500 invoice on a $2,000 job is a 25% margin evaporation.

## Market Evidence
- Ask HN thread explicitly confirms: QB/Xero reminders ineffective; WhatsApp works but is manual
- CraftBoop ($29/mo, email-only) launched and validated the category
- HandyPay reached $1K MRR in under 60 days in adjacent spa/salon market using in-person direct sales
- Universal pain: every contractor community has "how do you deal with late payments?" threads
- r/sweatystartup, r/GeneralContractor, r/FenceBuilding all have recurring collections complaints

## Scoring Breakdown

| Criterion | Score | Weight | Weighted | Notes |
|-----------|-------|--------|----------|-------|
| Market Validation | 4/5 | 3x | 12 | CraftBoop $29/mo validated; Ask HN thread; HandyPay $1K MRR adjacent |
| Competitor Weakness | 4/5 | 2x | 8 | No dedicated tool; CraftBoop email-only = SMS gap; QB reminders generic |
| LTD Viability | 5/5 | 2x | 10 | $59–99 LTD; low cost to serve; "get paid faster" = instant ROI |
| No Free Tier | 5/5 | 1x | 5 | Each recovered $500 invoice pays for years of LTD |
| Channel Access | 4/5 | 2x | 8 | All trade subs; r/sweatystartup; contractor FB groups |
| Content Potential | 4/5 | 1x | 4 | "invoice reminder app for contractors", "late payment software trades" |
| AppSumo Fit | 5/5 | 2x | 10 | Universal need; crystal-clear ROI; perfect pitch |
| Review Potential | 4/5 | 1x | 4 | Every contractor who recovers a $500 invoice will review |
| MRR Path | 4/5 | 3x | 12 | $39–59/mo; low churn; natural recurring |
| Build Feasibility | 5/5 | 2x | 10 | SMS + email sequences + Stripe webhook = 1–2 weeks |
| Boring Business Bonus | 4/5 | 2x | 8 | Contractor/trades market |

**Total: 91/105**

## Must-Have Filters
- [x] Problem is real (Ask HN + CraftBoop + HandyPay validation)
- [x] Can build without deep domain expertise (SMS/email sequences + Stripe webhook)
- [x] No dominant player (CraftBoop email-only = clear gap to exploit with SMS)
- [x] Revenue potential > $10K MRR within 12 months (500 customers × $19/mo)

## Key Differentiators
1. **SMS-first** — contractors and homeowners both prefer text over email for relationship comms
2. **Tone-calibrated sequences** — pre-written templates that sound human, not dunning notices (friendly → polite → firm → final notice)
3. **Stripe webhook trigger** — auto-fires when invoice passes due date; no manual action required
4. **Relationship preservation mode** — option to pause sequence if customer messages back
5. **Google review request** — built into the "thank you for payment" message

## Product Concept
- Connect to Stripe (or Jobber/HCP webhook) — invoice marked as unpaid after due date
- Day 1: friendly SMS ("Hey [Name], just checking in on that invoice...")
- Day 4: polite reminder + link
- Day 10: firm notice ("Invoice #[X] is now 10 days past due...")
- Day 20: final notice + optional "pay now" Stripe link
- On payment: auto-send Google review request link
- Dashboard: outstanding invoices + sequence status per customer

## LTD Pricing
- $59 LTD: up to 50 active invoices/month
- $99 LTD: unlimited invoices + Jobber/HCP integration
- $29/mo: subscription post-LTD

## Target Channels
- r/sweatystartup, r/GeneralContractor, r/FenceBuilding, r/lawncare
- AppSumo (LTD launch)
- Contractor Facebook groups: "HVAC Business Owners", "Plumbing Contractors"
- Direct outreach to Jobber/HCP power users

## Risks
1. CraftBoop has head start — SMS-first is the differentiation; ship fast
2. Requires Stripe or invoice app webhooks — standalone (CSV upload) is fallback MVP
3. Carrier filtering (A2P 10DLC registration) adds time to SMS launch — account for 2-3 weeks

## Key Source Links
- https://news.ycombinator.com/item?id=47638685 (Ask HN payment collection thread)
- https://www.indiehackers.com/post/craftboop-built-automated-follow-ups-for-service-businesses-just-launched-looking-for-feedback-5aa58e1c39
- https://www.indiehackers.com/post/the-boring-way-we-reached-1k-mrr-in-less-than-60-days-61739ba3d9 (HandyPay)
- https://www.reddit.com/r/SaaS/comments/1rk21op/small_contractors_lose_thousands_monthly_to_late/

## Signal History

| Date | Score | Sources | Notes |
|------|-------|---------|-------|
| 2026-09-23 | 91/105 | hn-indiehackers-2026-09-23, reddit-2026-09-23 | First identified: CraftBoop $29/mo (email-only) validates category; Ask HN confirms QB reminders ineffective; HandyPay $1K MRR in 60 days in adjacent spa/salon market = GTM validation; SMS-first as differentiator vs CraftBoop; tone-calibrated sequences for contractor-homeowner relationship; Stripe webhook trigger; Google review on payment; $59–99 LTD confirmed viable |
