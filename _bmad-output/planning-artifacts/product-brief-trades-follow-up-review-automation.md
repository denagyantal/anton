---
stepsCompleted: [1, 2, 3, 4, 5, 6]
inputDocuments:
  - ideas/shortlisted/trades-follow-up-review-automation.md
  - _bmad-output/planning-artifacts/research/market-trades-follow-up-review-automation-research-2026-09-26.md
workflowType: product-brief
lastStep: 6
project_name: trades-follow-up-review-automation
product_name: TradesPing
user_name: Root
date: 2026-09-27
author: Root
---

# Product Brief: TradesPing — Trades Follow-Up & Review Automation

---

## Executive Summary

TradesPing is an SMS-first automated follow-up and review generation tool built exclusively for trade service businesses — HVAC technicians, plumbers, electricians, cleaners, and landscapers. After every completed job, TradesPing automatically fires a 5-step SMS sequence that captures Google reviews, prompts reobookings, and solicits referrals — all without the contractor lifting a finger after initial setup.

The market opportunity is unambiguous: 600K–800K US trade businesses lose enormous lifetime value from every completed job because they never follow up. CraftBoop ($29/mo, April 2026) validated willingness to pay in this exact category but is email-only — a channel with 20% open rates vs SMS's 98%. No competitor in the $0–75/mo bracket offers SMS-first, AI-personalized follow-up sequences for trade-specific verticals. TradesPing claims this gap with the same $29/mo price point, better channel, and a brand built for the trades.

**The core proposition:** "Every job earns you a review, a rebooking, and a referral — automatically."

**Revenue model:** $29/mo (up to 100 jobs/month) → $49/mo (unlimited jobs, 3 users) → $59–79 LTD on AppSumo → $49/mo white-label for agencies managing trade clients. Year 1 target: 500 monthly subscribers + 1,500 AppSumo LTD holders = ~$290K combined revenue.

**Evaluation score:** 93/105 (Tier 1 — BUILD verdict, 2026-09-25)

---

## Core Vision

### Problem Statement

Service businesses lose enormous lifetime value from every completed job because they never follow up. A plumber finishes a $600 repair, drives to the next job, and never asks for a review, a rebooking, or a referral. A cleaner completes 40 jobs per week and manually remembers to text zero of those customers afterwards.

The problem is structural, not motivational: contractors are physical workers who are literally behind the wheel between jobs. There is no Sunday morning to sit at a desk and send follow-up emails. Even contractors who want to follow up forget by the time they get home.

The ROI math makes this a crisis of silent missed revenue:
- One extra 5-star Google review → 1–3 extra calls/month → $300–$1,500 additional revenue
- One winter HVAC tune-up rebooking → $150–$300 recurring revenue
- One referral → $500–$3,000 new customer value
- HVAC customers on maintenance plans: $47,200 LTV vs $15,340 without — nearly the entire gap is attributable to repeated contact

### Problem Impact

**The scale of the gap is quantifiable:**

A solo HVAC contractor doing 10 jobs/day has 10 chances per day to earn a 5-star review — and currently captures perhaps 1–2 per month. Moving from 4.0 to 4.5 stars on Google generates 15–25% more inbound inquiries in local search. A contractor with 20 reviews loses work to a competitor with 200, regardless of actual quality.

Automated SMS review requests sent within 2 hours of job completion achieve 34–48% response rates. Manual requests sent days later (when contractors remember) achieve 6–9%. The timing of the ask — immediate, while the customer's positive experience is fresh — is where 80% of the value is created, and it can only be captured by automation.

At the business level: acquiring a new customer costs 5x more than retaining an existing one. Every completed job is a retention and upsell opportunity that currently evaporates. The referral channel — which closes at 60–70% vs 20–30% for paid channels — is almost entirely uncaptured because asking for referrals in person is awkward and contractors never think to ask via SMS.

### Why Existing Solutions Fall Short

**CraftBoop ($29/mo, April 2026):** Direct category validation but email-only. Email open rates for trades customers are 20% vs SMS's 98%. A contractor's customer base — homeowners who just had their AC repaired — is not checking Gmail; they are texting. CraftBoop proved $29/mo willingness to pay exists but left the SMS channel entirely unclaimed. Generic "CraftBoop" branding is not trades-native.

**Jobber / HousecallPro (built-in review features):** Review request functionality is buried in settings, email-primary, and not personalized per trade type. These are full field service management platforms ($59–149/mo) — contractors who just want follow-up automation don't want to switch FSM platforms and pay 3–5x more. HousecallPro's best documented case study (4 → 22 reviews/month) required an enterprise plan and HousecallPro adoption.

**NiceJob ($75–125/mo):** The best SMS option below enterprise tier, but at 2.5–4x the price point of CraftBoop. No trade-type AI personalization. No AppSumo LTD history. Not positioned to trades verticals specifically.

**Birdeye / Podium ($200–449/mo):** Enterprise reputation management — correct feature set, completely wrong price point for a solo HVAC contractor making $80–120K/year. Overkill for the problem.

**The gap is specific and unoccupied:** SMS-first, AI-personalized per trade type, standalone (no FSM required), at $29/mo. This exact combination does not exist.

### Proposed Solution

TradesPing connects to a contractor's existing job completion trigger (via Zapier integration with Jobber, HousecallPro, or Stripe; or manual entry) and automatically fires a 5-step SMS sequence tailored to their trade type and the specific job completed:

**The 5-Step Sequence:**
1. **+2 hours:** "Hi {customer_name}, thanks for letting us handle your {job_type} today! Happy with the service? Quick reply helps our small business — [review link]"
2. **+2 days:** "Everything still working well with your {job_type}? Any questions, just reply."
3. **+4 weeks:** "Hey {customer_name}, time for your seasonal {follow_up_service}? Reply YES and we'll get you scheduled."
4. **+8 weeks:** "Know anyone who needs a great {trade_type}? Send them our way and you get a $20 credit on your next visit."
5. **+6 months:** Re-engagement if no new job booked

**Trade-type personalization library (pre-built at launch):**
- HVAC: seasonal tune-up, filter replacement, emergency repair variants
- Plumbing: drain cleaning, water heater, emergency call variants
- Electrician: panel upgrade, outlet install, inspection variants
- Landscaping: weekly maintenance, seasonal cleanup variants
- Cleaning: regular clean, deep clean variants
- Handyman: general repair, project completion variants

**Google Review shortlink automation:** Auto-generated per business, pre-fills business name in review URL, so the customer is one tap away from leaving a review.

**Dashboard:** Review count trend over time, SMS delivery status, sequence status per customer, rebooking conversions, referral tracking.

**What it deliberately omits:** Full CRM, invoice generation, payment processing — no competition with Jobber/HCP, no complexity for the buyer.

### Key Differentiators

1. **SMS-first at $29/mo** — the only tool combining SMS delivery with the CraftBoop price point. 98% open rate vs 20% email. For a buyer who is driving between jobs all day, this is not a preference — it's structural dominance.

2. **Trade-type AI personalization below $299/mo** — HVAC messages reference seasonal tune-ups; plumbing messages reference drain clearing; cleaning messages reference deep cleans. Generic "How did we do?" messages are being replaced across the industry by personalized follow-ups, but this level of personalization exists only at Birdeye's price tier. TradesPing brings it to $29/mo.

3. **Standalone — works with any FSM or no FSM** — a contractor using Jobber, HousecallPro, FieldPulse, or a paper invoice pad can connect TradesPing via Zapier or manual entry. No platform switch required.

4. **AppSumo LTD as primary distribution channel** — 1.25M AppSumo community, $113M+ in partner payouts. No competitor in the trades follow-up category has activated this channel. First-mover AppSumo advantage creates a community of LTD holders who become advocates, reviewers, and word-of-mouth vectors.

5. **Trades-native brand** — "TradesPing" signals immediately who this is for. "CraftBoop" does not.

---

## Target Users

### Primary Users

**Segment 1: Established Solo HVAC Operator — "Marcus"**

Marcus is 41, has been running his HVAC business solo for 9 years in Phoenix, AZ. He does 8–12 jobs/week — mostly system repairs, tune-ups, and filter replacements. He grosses ~$115K/year. He uses Jobber to dispatch and invoice. He has 34 Google reviews — he knows he should have more, but every time he finishes a job, he's already driving to the next one. His competitor down the street has 187 reviews and is getting calls Marcus isn't.

Marcus's day: Wake at 5:30am, first job at 7am, last job done by 5pm, home by 6pm, dinner with kids, asleep by 10pm. There is no moment in Marcus's day for "go to computer and send follow-up emails to customers from today." He has a smartphone and reads every text within 10 minutes.

Marcus hears about TradesPing in the "HVAC Business Owners" Facebook group. Someone posts: "Went from 34 to 112 Google reviews in 4 months, used this tool for $29/mo." Marcus clicks, signs up for a trial in 8 minutes. Within 48 hours his first customer texts back a 5-star Google review.

**What makes Marcus succeed with TradesPing:**
- Zapier + Jobber integration (set-and-forget trigger)
- HVAC-specific message templates (sounds like him, not like a robot)
- Dashboard he checks once a week to see review count going up
- Never needs to remember to follow up — it happens while he's driving

**Persona size:** ~150,000 solo HVAC operators in the US; combined HVAC + plumbing + cleaning solo operators = 400,000+ potential Marcus equivalents

---

**Segment 2: Growing Cleaning Service Owner — "Diana"**

Diana runs a residential cleaning company with 3 crews in Denver. She does 40–60 cleans per week. She uses a combination of Google Sheets and HousecallPro. Her problem is slightly different from Marcus: at 40+ jobs/week, manual follow-up is simply impossible — she'd need a part-time employee just for texting customers. Her business lives and dies on referrals ("refer a friend, get a free clean" is her best customer acquisition channel) but she has no systematic way to ask every customer.

Diana's referral close rate is 70% — but she's only capturing 10% of the referrals she could be getting because asking happens organically, not systematically.

**What makes Diana succeed with TradesPing:**
- High-volume automation (40+ sequences per week without Diana touching anything)
- Referral prompt at 8-week mark captures the high-intent referral window
- Dashboard shows referral conversion tracking so Diana can see ROI
- White-label add-on keeps "Diana's Cleaning" branding on all messages

**Persona size:** ~200K+ cleaning and landscaping small crew operators in the US

---

### Secondary Users

**Segment 3: Trade Marketing Agency — "James at CleanSweep Marketing"**

James manages marketing for 18 HVAC and cleaning franchise clients across the Southeast. He currently uses GoHighLevel ($497/mo) for most clients but the review automation is buried in a complex platform his clients can't navigate. He needs a white-label solution he can resell to clients at a markup.

TradesPing's white-label tier ($49/mo add-on) lets James:
- Brand all client messages with client logos/business names
- Manage all 18 client accounts from a single dashboard
- Show clients a monthly review count growth report
- Charge clients $79–99/mo for a service that costs him $29+$49 = $78/mo

**Agency multiplier:** 5,000–10,000 US marketing agencies serving trade verticals; a 20-agency white-label base adds $980/mo floor revenue with near-zero marginal cost.

---

### User Journey

**Marcus (HVAC Solo Operator) — Full Journey:**

**Discovery:**
- Sees post in Facebook "HVAC Business Owners" group: real screenshot of review count growth
- Searches Google: "automated review request HVAC" — finds TradesPing landing page with HVAC-specific testimonials
- Hears a 30-second mention on a trade YouTube channel he watches (Successfulcontractor.com)

**Consideration:**
- Visits landing page; sees "$29/mo or $59 one-time deal" — immediately affordable
- Watches 2-minute demo showing the exact SMS sequence his customers would receive
- Reads one blog post: "How HVAC Contractors Get 10x More Google Reviews Without Doing Anything After the Job"
- Checks: "Does it work with Jobber?" — sees yes, Zapier template available

**Onboarding (target: under 30 minutes):**
- Starts 14-day free trial or purchases $59 LTD
- Enters business name, trade type (HVAC), Google Review link
- Connects Jobber via Zapier (step-by-step tutorial for this specific integration)
- Reviews default HVAC message templates, tweaks one phrase
- Marks a test job as complete — receives the +2 hour message on his own phone to preview

**First value moment (target: within 48 hours):**
- First customer receives the +2 hour review request
- Customer texts back: "Left you a great review! You deserve it, Mike"
- Marcus opens the dashboard: "1 new review this week (↑1 from last week)"
- This is the "aha!" moment — the tool worked without Marcus doing anything

**Long-term retention pattern:**
- Marcus checks dashboard weekly (3 minutes) to see review count trend
- After 6 weeks: 8–12 new reviews/month vs the 1–2 before
- Starts mentioning TradesPing in the Facebook group he got it from
- When a slow week happens, sees the rebooking reminders driving call-backs for tune-ups
- Never turns it off — "turning it off means losing reviews"

---

## Success Metrics

### User Success Metrics

**The primary signal that TradesPing is working for a user is review count growth:**
- Baseline measurement at onboarding: current Google review count
- Target: 8–12 new reviews/month per active user (vs 1–2 industry average for manual)
- "Aha!" moment definition: first review received via automated sequence (target: within 72 hours of first job completion)

**Engagement health signals:**
- % of users who connect a job-completion integration (Zapier/webhook) within 7 days of signup — target 70%+
- % of users who receive their first automated review within 14 days — target 60%+
- Weekly dashboard visits per active user — target 1+ per week (3+ = highly engaged)
- Sequence completion rate: % of 5-step sequences that complete without opt-out — target 85%+

**Rebooking and referral conversion:**
- Rebooking conversion rate: % of +4-week reminders that result in a new job being booked — target 5–10%
- Referral conversion rate: % of +8-week referral prompts that generate a referred customer — target 3–6%

**User satisfaction:**
- NPS target: 50+ at Month 3; 60+ at Month 6; 65+ at Month 12
- Support ticket rate: <2% of active users per week (tool should be invisible when working)

### Business Objectives

**Year 1 Targets:**

| Milestone | Target | Timeline |
|-----------|--------|----------|
| Beta contractors (free) | 5–10 active users, 2+ verticals | Month 1 |
| Paid customers (community launch) | 50 monthly subscribers | Month 3 |
| AppSumo LTD units | 1,500 units | Month 4–5 |
| Monthly subscribers | 300 | Month 6 |
| Monthly subscribers | 500 | Month 12 |
| White-label agency accounts | 20 | Month 6 |
| White-label agency accounts | 50+ | Month 12 |
| Monthly churn rate | <5% | Month 3 onwards |
| MRR | $14,500 (500 × $29) | Month 12 |
| Total Year 1 revenue | ~$290K (MRR + LTD + agency) | End of Year 1 |

**Strategic milestones:**
- AppSumo launch: target $100K+ in launch 30 days (1,400+ units at $69)
- Jobber App Marketplace listing: distribution inside the largest FSM platform
- r/sweatystartup post with real numbers: target 200+ upvotes, 50+ sign-ups from a single post

### Key Performance Indicators

**Acquisition KPIs:**
- Community-sourced sign-ups (r/sweatystartup, FB groups): target 40% of total new users in Year 1
- AppSumo LTD conversion rate: target >2% of AppSumo page views
- CAC from community channels: target <$10 (near-zero for organic community posts)
- CAC from AppSumo: $0 customer acquisition cost (AppSumo handles distribution)

**Retention KPIs:**
- Month 1 → Month 3 retention: target 85%+
- Annual churn rate: target <25% (monthly <2.5%)
- Seasonal churn recovery: % of churned seasonal businesses that reactivate next season — target 40%+

**Revenue KPIs:**
- MRR growth rate: target 15–20% month-over-month in first 6 months
- LTV (monthly subscribers): target $290 (10-month average lifetime at $29/mo)
- Gross margin: target 80%+ (SMS COGS ~$4/user/month at 100 jobs)
- Agency/white-label contribution to MRR: target 15% by Month 12

**Product health KPIs:**
- Average reviews generated per active user per month: target 8–12
- Opt-out rate per SMS sequence: target <2% per message
- Integration setup completion rate: target 70% within 7 days

---

## MVP Scope

### Core Features

The MVP is a focused 3–4 week build covering the essential loop: job completion → 5-step SMS sequence → Google Review captured → dashboard visibility.

**Feature 1: Job Completion Trigger**
- Zapier integration templates for: Jobber, HousecallPro, Stripe (job marked as paid)
- Manual job entry fallback (contractor enters customer name, phone, job type)
- Webhook endpoint for custom integrations (documented in onboarding)
- TCPA consent checkbox + timestamp recorded at trigger point

**Feature 2: 5-Step SMS Sequence Engine**
- Pre-built sequences for 6 trade types (HVAC, plumbing, electrician, landscaping, cleaning, handyman)
- Configurable delay timings (+2hr, +2 days, +4 weeks, +8 weeks, +6 months)
- Sequence pause/cancel on customer reply (human takes over conversation)
- Automatic STOP opt-out handling (Twilio-native)
- 8am–9pm local time window enforcement for TCPA compliance
- Message personalization tokens: {customer_name}, {job_type}, {follow_up_service}, {trade_type}

**Feature 3: Google Review Shortlink Automation**
- Auto-generated per business from their Google Business Profile URL
- Pre-fills business name in review URL (one-tap to review form)
- Link click tracking (knows if customer tapped the link)
- Integrated into Step 1 of every sequence

**Feature 4: Basic Dashboard**
- Review count over time (graph: past 30/90 days)
- SMS sequence status per customer (pending / in-progress / completed / opted-out)
- New reviews this week/month (pulled via Google Business Profile API or manual entry)
- Rebooking reply tracking (flagged conversations where customer said YES)
- Referral click tracking

**Feature 5: Onboarding**
- Trade type selection (6 options at signup)
- Google Review link setup (guided entry + link preview)
- Zapier integration video (specific to Jobber and HousecallPro; Stripe as fallback)
- TCPA consent language template for job booking forms (copy-paste for contractor's own website/intake)
- Test sequence: contractor enters their own phone number to preview the full sequence

**Feature 6: Billing**
- Stripe integration: $29/mo (100 jobs) and $49/mo (unlimited, 3 users) plans
- 14-day free trial (credit card required)
- Usage meter: jobs triggered this month vs plan limit

### Out of Scope for MVP

The following features are explicitly deferred to prevent scope creep and keep the 3–4 week build timeline:

**Not in MVP:**
- Full CRM or contact management (Jobber/HCP already serve this)
- Invoice generation or payment processing
- Multi-location management (post-MVP for growing crews)
- Native mobile app (responsive web dashboard sufficient for MVP)
- AI-generated per-job message customization (template library sufficient; AI layer is v2)
- Review aggregation across Yelp, Facebook, Angi (Google-only for MVP — where local search ranking actually matters)
- Email channel option (SMS-only for MVP to maintain positioning clarity vs CraftBoop)
- Agency/white-label multi-account dashboard (Month 4 addition after SaaS validated)
- Spanish-language message variants (post-MVP; large Hispanic trades market is a clear v2 opportunity)
- Maintenance plan integration (advanced rebooking logic; v2 post-MVP)
- ServiceTitan or FieldPulse native integrations (Zapier covers these at MVP; native integrations are v2)

**Rationale for deferrals:** Each deferred feature is a growth opportunity, not a core promise. The core promise is "automated SMS follow-up that captures reviews, reobookings, and referrals." Everything in the MVP directly serves this promise. Everything deferred is additive.

### MVP Success Criteria

TradesPing MVP is validated and ready to proceed to full scale when:

1. **Product-market fit signal:** 10+ beta users across HVAC, plumbing, and cleaning verticals; average 8+ new reviews generated per user in first 30 days
2. **Willingness to pay confirmed:** 50+ paying monthly subscribers at $29/mo (not just free trial users)
3. **Retention validated:** Month 1 → Month 3 retention ≥80% (tool becoming part of daily workflow)
4. **Community traction:** r/sweatystartup launch post reaches 100+ upvotes, 30+ new signups traceable to post
5. **Ops confidence:** SMS delivery rate ≥97%; opt-out rate <2% per message; zero TCPA compliance issues from beta
6. **AppSumo readiness:** 50+ paid customers + ≥10 public reviews/testimonials (AppSumo requires social proof to accept)

**Go/no-go decision point for AppSumo application:** End of Month 2 with 50+ paying customers and 3+ user testimonials with review count screenshots.

### Future Vision

**Year 2: The Complete Trade Reputation Engine**

TradesPing evolves from a follow-up tool into the reputation operating system for trade businesses:

- **AI-personalized sequences per job:** When the Jobber webhook fires with "HVAC tune-up, tech: Mike, job: 16 SEER unit filter + coil cleaning," the AI generates a message that references the specific service: "Hope your Carrier system is running cooler after Mike's visit today!" — personalization at the job level, not just the trade-type level
- **Review aggregation dashboard:** Google + Yelp + Angi + Facebook review count in one view, trending over time
- **Maintenance plan conversion:** Rebooking automation that identifies customers who would benefit from a maintenance plan and includes a "join our plan for $X/month" CTA — the highest-value upsell in HVAC ($47,200 LTV vs $15,340)
- **Spanish-language variants:** Dedicated templates for Hispanic-owned trade businesses and contractors serving Spanish-speaking customers — a large, underserved segment
- **Native integrations:** Jobber app marketplace plugin, ServiceTitan app, HousecallPro marketplace — replaces Zapier with one-click native connection, dramatically reducing onboarding friction

**Year 3: Platform and International**

- **White-label as primary revenue tier:** Marketing agencies managing 10–50 trade clients each; $49/mo per client seat; B2B2B flywheel
- **UK and Australia expansion:** Identical market structure (SMS-native, HVAC/plumbing trades, Google reviews as trust signal) with no current SMS-first follow-up tool in either market
- **Acquisition potential:** At 5,000+ customers and $2M+ ARR, TradesPing becomes an attractive acquisition target for Jobber, ServiceTitan, or reputation management consolidators (Birdeye, Podium). The trades-native brand + AppSumo community + SMS infrastructure creates a defensible asset that FSM platforms would pay for.

---

## Competitive Positioning Summary

| | CraftBoop | NiceJob | Birdeye | TradesPing (MVP) |
|---|---|---|---|---|
| **Monthly price** | $29 | $75–$125 | $299–$449 | $29 |
| **SMS-first** | No | Yes | Yes | Yes |
| **Trade AI personalization** | No | Partial | Partial | Yes |
| **Standalone (no FSM required)** | Yes | Yes | Yes | Yes |
| **AppSumo LTD** | No | No | No | Yes |
| **Trades-native brand** | No | Partial | No | Yes |
| **5-step sequence** | Yes | Partial | Yes | Yes |
| **Price for HVAC solo operator** | $29 | $75–$125 | $299–$449 | **$29** |

**Positioning statement:** "TradesPing is what CraftBoop would be if it sent texts instead of emails, knew the difference between an HVAC tune-up and a drain clearing, and had a real brand — at the exact same $29/mo price."

---

## Risk Register

| Risk | Severity | Probability | Mitigation |
|------|----------|-------------|------------|
| TCPA litigation | High | Medium | Consent collection at booking; 8am–9pm enforcement; STOP handling; compliance guide |
| CraftBoop adds SMS | Medium | Medium | Speed to AppSumo; trade personalization moat; brand loyalty |
| Jobber/HCP adds standalone SMS module | Medium | Low | Price point defensibility; community distribution; LTD lock-in |
| Seasonal churn (landscapers, HVAC shoulder) | Low | High | Annual plan discount; win-back sequences; agency tier floor revenue |
| SMS carrier filtering (spam flags) | Medium | Low | Verified 10DLC registration; service-oriented content (not promotional) |

---

## Implementation Roadmap

**Weeks 1–2: Core Infrastructure**
- Twilio SMS integration + 5-step sequence engine with delay scheduling
- Google Review shortlink generator
- Basic Zapier trigger templates (Jobber, HousecallPro, Stripe)

**Week 3: Personalization & UX**
- Trade-type template library (6 trades × 5 messages = 30 templates)
- Onboarding flow (trade selection → Google link → Zapier connection → test sequence)
- TCPA consent handling + opt-out automation

**Week 4: Dashboard & Billing**
- Dashboard: review trend, sequence status, rebooking flags
- Stripe billing integration ($29/mo and $49/mo plans)
- 14-day trial flow

**Weeks 5–6: Beta**
- Recruit 5–10 beta users from HVAC/plumbing/cleaning Facebook groups (free 60-day access)
- Collect before/after review count screenshots
- Iterate on template quality based on feedback
- Finalize TCPA compliance guide for customers

**Month 3: Community Launch**
- r/sweatystartup post with real beta numbers
- $29/mo SaaS + $59 LTD early-access offer
- Target: 50+ paying customers

**Month 4–5: AppSumo Launch**
- Apply with 50+ customers + testimonials
- Target: 1,000–2,000 LTD units at $59–79
- AppSumo launch = primary distribution event for Year 1

---

*Product Brief created: 2026-09-27*
*Based on: Shortlisted idea (93/105, 2026-09-25) + Market Research (2026-09-26)*
*Next step: Create PRD — `run-bmad-pipeline.sh` or `/bmad-bmm-create-prd`*
