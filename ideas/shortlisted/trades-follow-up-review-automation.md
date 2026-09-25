---
name: Trades Follow-Up & Review Automation
description: SMS-first automated follow-up + review generation for HVAC/plumbing/cleaning trades — CraftBoop validated the model at $29/mo; SMS + AI personalization = untapped upgrade; 93/105
type: shortlisted
---

# Trades Follow-Up & Review Automation — Score: 93/105

**Verdict**: BUILD
**Tier**: 1 (Strong Opportunity)
**Evaluation Date**: 2026-09-25
**Decision Status**: NEW

## One-Line Pitch

After every completed job, automatically send a 5-step SMS sequence — review request, job check-in, rebooking reminder, referral prompt — so every plumber, HVAC tech, and cleaner captures the Google reviews, repeat bookings, and referrals they're currently leaving on the table.

## Problem

Service businesses lose enormous lifetime value from every completed job because they never follow up. A plumber finishes a $600 repair, drives to the next job, and never asks for a review, a rebooking, or a referral. The ROI math is stark:
- One extra 5-star Google review → 1-3 extra calls/month → $300-1,500 extra revenue
- One winter HVAC tune-up rebooking → $150-300 recurring revenue
- One referral → $500-3,000 new customer

**Why it doesn't happen manually**: Contractors are physical workers running between jobs. There is no Sunday morning to sit at a desk and send follow-up emails. Even contractors who want to follow up forget by the time they get home.

**Why existing tools don't solve it**: Jobber and HousecallPro have basic review request features but they're buried in settings, email-only (20% open rate vs 98% for SMS), and not personalized per trade type. CraftBoop (launched April 2026 on Indie Hackers) confirmed the model at $29/month, but is email-only with a weak B2B name and no SMS.

## Market Evidence
- CraftBoop: $29/mo, early users, April 2026 IH launch — direct validation of willingness to pay
- HandyPay: $1K MRR in under 60 days via direct in-person sales to spas/salons — same customer profile, same go-to-market
- IH "5 Red-Flag Industries" (August 2026): AI receptionist/booking tools at $179K MRR; SMB bookkeeping from Reddit alone at $14K/month
- SMS vs email: 98% open rate vs 20%; for a contractor driving between jobs, SMS is the only realistic channel
- 100K+ solo contractors + 500K+ small trades businesses = massive addressable base

## Scoring Breakdown

| Criterion | Score | Weight | Weighted | Notes |
|-----------|-------|--------|----------|-------|
| Market Validation | 4/5 | 3x | 12 | CraftBoop at $29/mo + HandyPay $1K MRR in 60 days = direct validation |
| Competitor Weakness | 4/5 | 2x | 8 | CraftBoop email-only + bad name; Jobber review request buried/email-only; SMS + AI personalization = completely open |
| LTD Viability | 5/5 | 2x | 10 | $59-79 LTD = perfect AppSumo; one rebooked job covers cost; broad appeal |
| No Free Tier | 4/5 | 1x | 4 | No free SMS follow-up + review automation tool for trades |
| Channel Access | 5/5 | 2x | 10 | r/sweatystartup, r/HVAC, r/handyman, FB "HVAC Business Owners" — same as FSM tools |
| Content Potential | 3/5 | 1x | 3 | "automated review request for HVAC", "follow-up automation trades" = moderate |
| AppSumo Fit | 5/5 | 2x | 10 | Simple + proven pain + small business buyer + $59-79 LTD = AppSumo archetype |
| Review Potential | 4/5 | 1x | 4 | A tool that generates reviews will itself get reviews from happy users |
| MRR Path | 4/5 | 3x | 12 | $29/mo × growing base; SMS sending costs are low, margins healthy |
| Build Feasibility | 5/5 | 2x | 10 | 3-4 weeks: email/SMS sequences + Google Review link automation + Stripe webhook |
| Boring Business Bonus | 5/5 | 2x | 10 | Following up on plumbing and HVAC jobs = deeply boring |

**Total: 93/105**

## Must-Have Filters
- [x] Problem is real (CraftBoop validates $29/mo willingness to pay; HandyPay $1K MRR confirms)
- [x] Can build without deep domain expertise (Twilio + SMTP + Google Business Profile API = standard)
- [x] Market not dominated by single unbeatable player (CraftBoop is early; Jobber/HCP don't do this well)
- [x] Revenue potential > $10K MRR within 12 months (500 contractors × $29/mo = $14.5K MRR)

## Boring Business Fit
- [x] VC-ignored? YES — automated follow-up for HVAC techs is zero VC interest
- [x] Non-technical buyers? YES — contractors are the definition of non-technical
- [x] Existing software outdated? YES — CraftBoop email-only; Jobber review request buried; no SMS player
- [x] Real business budgets? YES — contractor making $80K+/year can afford $29/mo tool
- [x] Low churn once adopted? YES — follow-up sequences become part of daily workflow; turning it off = losing reviews

## Product Concept: "TradesPing" (working name)

**Core MVP (3-4 weeks):**
1. **Job completion trigger**: Connect via Zapier/webhook to Jobber, HousecallPro, or Stripe (job marked complete)
2. **SMS sequence**: 5-step, fully automated:
   - +2 hours: "Hi {customer_name}, thanks for letting us handle your {job_type} today! Happy with the service? Quick reply helps our small business — [review link]"
   - +2 days: "Everything still working well with your {job_type}? Any questions, just reply."
   - +4 weeks: "Hey {customer_name}, just checking in. Time for your seasonal {follow_up_service}? Reply YES and we'll get you scheduled."
   - +8 weeks: "Know anyone who needs a great {trade_type}? Send them our way and you get a $20 credit on your next visit."
   - +6 months: Re-engagement if no new job booked
3. **Google Review shortlink**: Auto-generated per business, pre-fills business name in review URL
4. **Dashboard**: Review count trend, SMS sends, rebooking conversions, referral tracking
5. **White-label**: $29/mo adds your logo and business name to all messages

**Trade-type personalization library (pre-built message templates):**
- HVAC (seasonal tune-up, filter replacement, emergency repair)
- Plumbing (drain cleaning, water heater, emergency call)
- Electrician (panel upgrade, outlet install, inspection)
- Landscaping (weekly maintenance, seasonal cleanup)
- Cleaning service (regular clean, deep clean)
- Handyman (general repair, project completion)

**What it deliberately does NOT include:**
- Full CRM (point people to Jobber/HCP for that)
- Invoice generation (not competing with FSM tools)
- Payment processing

## Positioning
**"Every job earns you a review, a rebooking, and a referral — automatically."**

- vs. CraftBoop: SMS-first (not email-only), AI-personalized per trade type, stronger B2B brand
- vs. Jobber/HCP: Standalone tool → works without switching FSM; no $100+/mo subscription required
- vs. doing nothing: "30 seconds to set up, runs forever, earns reviews while you sleep"

## Revenue Model
- $29/mo (up to 100 jobs/month)
- $49/mo (unlimited jobs, up to 3 users)
- $59-79 LTD on AppSumo (AppSumo launch = primary distribution)
- White-label add-on: $49/mo for agencies managing multiple trade clients

## Target Channels
1. **r/sweatystartup** — primary; "I built this so HVAC techs get reviews automatically" post
2. **AppSumo** ($59-79 LTD launch) — target $100K+ in first 30 days
3. **Facebook "HVAC Business Owners" groups** (100K+ combined) — direct video demos
4. **YouTube** — trade business channel sponsorships ("here's how to get more Google reviews")
5. **Cold outreach to cleaning franchise networks** — white-label tier

## Top Risks
1. CraftBoop copies SMS and relaunches with better brand — first mover risk
2. Jobber/HCP adds this as a paid module at their next conference
3. SMS deliverability and spam compliance (TCPA compliance required for US outreach) adds legal complexity
4. Solo contractors may churn after slow seasons (winter for landscapers, summer for HVAC is slow south)

## Next Steps
1. Build Zapier trigger + 5-SMS sequence + Google Review shortlink in Twilio (3-4 weeks)
2. Test with 5 beta contractors (HVAC + plumber + cleaner) — get first reviews within 48 hours
3. Launch on r/sweatystartup with actual review count screenshots
4. AppSumo application ($59 LTD) once beta validated

## Key Source Links
- [CraftBoop — IH launch](https://www.indiehackers.com/post/craftboop-built-automated-follow-ups-for-service-businesses-just-launched-looking-for-feedback-5aa58e1c39)
- [HandyPay $1K MRR in 60 days — IH](https://www.indiehackers.com/post/the-boring-way-we-reached-1k-mrr-in-less-than-60-days-61739ba3d9)
- [5 Red-Flag Industries (AI receptionist $179K MRR) — IH](https://www.indiehackers.com/post/5-red-flag-industries-ripe-for-disruption-data-backed-aug-26-96325c45a0)

---

## Signal History

| Date | Score | Sources | Notes |
|------|-------|---------|-------|
| 2026-09-25 | 93/105 | hn-indiehackers-2026-09-25 | First identified: CraftBoop (IH Apr 2026) validates $29/mo demand for automated follow-up sequences; HandyPay $1K MRR in 60 days via direct sales to same customer type; SMS vs email = 5× open rate advantage; AI personalization per trade type = open gap; IH Aug 2026 "5 Red-Flag Industries" confirms AI receptionist $179K MRR validating trades automation category; 3-4 week build; AppSumo $59-79 LTD is primary distribution; "CraftBoop but SMS-first, AI-personalized, real B2B brand" = confirmed positioning |
