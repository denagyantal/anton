---
stepsCompleted: [1, 2, 3, 4, 5, 6]
inputDocuments:
  - ideas/shortlisted/reputation-review-management-local-businesses.md
  - _bmad-output/planning-artifacts/market-research-review-reputation.md
workflowType: product-brief
lastStep: 6
research_type: product-brief
research_topic: review-reputation
user_name: Root
date: 2026-06-14
---

# Product Brief: ReviewDrop — SMS-First Review Automation for Local Trades

**Date:** 2026-06-14
**Author:** Root
**Status:** Complete

---

## Executive Summary

Local home service businesses — plumbers, HVAC techs, electricians, cleaners, landscapers — are losing customers to competitors with more Google reviews, but the tools that fix this cost $299–600/month and are built for multi-location chains with dedicated admins, not a one-person operation finishing a job at 6pm.

**ReviewDrop** is a dead-simple, SMS-first review automation tool built specifically for single-location home service trades. When a job is marked complete (manually or via Jobber/Housecall Pro webhook), it automatically texts the customer a personalized review request with a direct Google link. The business owner gets a dashboard showing review count, trends, and negative review alerts. Nothing else. No bloat, no annual contracts, no enterprise sales calls.

At $19–29/month SaaS or $49–69 as a one-time Lifetime Deal, ReviewDrop occupies a structural market gap that has persisted for years: no purpose-built, trade-vertical, SMS-first review tool exists below the $75/month NiceJob floor. The market is large ($6.88–14.27B globally, 8–14% CAGR), the problem is universal among SMBs, the build is fast (Twilio + Google Business Profile API + lightweight dashboard, ~2 weeks), and the AppSumo LTD model provides upfront capital while building a base of paying advocates in trade communities.

The timing is optimal: the December 2025 acquisition of both GatherUp and Grade.us by Insight Integrity Group has created active evaluation cycles among their combined 5,000+ customers. The window is open now.

**Target:** 500+ AppSumo LTD sales at $49–69 average = $25,000–$70,000 upfront; 100 SaaS customers at $24/month = $2,400 MRR by month 6.

---

## Core Vision

### Problem Statement

A one-person plumbing operation or HVAC company with 12 Google reviews is invisible next to a competitor with 200. They know reviews matter — they just have no reliable system for collecting them. They forget to ask. Customers forget. The 1–2 hour post-job window when review conversion is highest passes without action.

The existing software market offers two options: (1) do nothing, or (2) pay $299–600/month for enterprise tools designed for franchise chains. The $30–75/month segment — where a single-location trade business actually lives — is genuinely empty of purpose-built tooling.

**The core problem:** Local service business owners have no affordable, automated way to collect Google reviews at the moment customer satisfaction is highest (right after job completion), causing them to fall behind competitors in Google local rankings and lose leads to businesses with more social proof.

### Problem Impact

The stakes are measurable and documented:
- **Revenue**: A one-star increase on Google correlates with a 5–9% revenue uplift; responding to all reviews correlates with an 18% revenue increase
- **Visibility**: Appearing in Google's local 3-pack yields 126% more traffic than positions 4–10; review count and recency are ~10% of the local ranking algorithm
- **Consumer behavior**: 93–97% of consumers read reviews before engaging a local service provider; 73% distrust reviews older than one month
- **Competitive reality**: A competitor with 200 fresh reviews beats a better contractor with 15 stale ones in every Google search result that matters

For trade businesses where every job lead is worth $200–2,000, falling behind on reviews is a direct revenue problem — not a vanity metric issue.

### Why Existing Solutions Fall Short

| Solution | Price | Core Gap |
|---|---|---|
| Birdeye | $299–449/mo | Built for 5+ location enterprises; overkill and out of budget for solos |
| Podium | $399–599/mo | AI add-ons cost extra $99/mo; annual contract required; not trade-specific |
| NiceJob | $75–125/mo | Closest competitor; still 3–5x our target price; limited FSM webhooks |
| GatherUp | $99+/mo | Acquired by Insight Integrity Group (Dec 2025); customer anxiety rising |
| SocialPilot Reviews | $25/mo | No SMS-first flow; no FSM integration; no trade-specific routing |
| ReviewScout AI | $4.99–9.99/mo | Basic email-only; no automation; no job-completion triggers |

The structural gap: **no tool under $30/month offers SMS-first review automation with FSM integration hooks and trade-specific review platform routing.** This gap has persisted because enterprise vendors have no incentive to serve solos, and budget tools lack the trade focus and integration depth.

### Proposed Solution

**ReviewDrop** automates the single most impactful review behavior: sending a personalized SMS to the customer within 1–2 hours of job completion, containing a direct one-tap Google review link, with zero friction for the business owner.

**Core flow:**
1. Job completed → trigger fired (manual, webhook, or Zapier from Jobber/HCP/ServiceTitan)
2. Customer receives SMS: "Hi [Name], thanks for letting us handle your [HVAC/plumbing/cleaning] today! We'd love your feedback — [direct Google review link]"
3. Optional: one follow-up SMS on day 3 if no review posted
4. Owner dashboard: total review count, recent reviews pulled from Google, conversion rate, negative review alert (email/SMS when <3 stars detected)
5. V2: AI-drafted responses to reviews, website review widget (embeddable carousel), social media auto-post from 5-star reviews

**Infrastructure:** Twilio SMS (~$0.83/month variable cost for 100 requests), Google Business Profile API, lightweight web dashboard. Total COGS per LTD customer: < $3/month. Gross margin: 90–98%.

### Key Differentiators

1. **FSM-native triggers**: Auto-send when Jobber/HCP/ServiceTitan job status → "complete" — no behavior change required from the owner; review requests fire as part of existing workflow
2. **Trade-specific language**: Message templates pre-written for HVAC, plumbing, electrical, cleaning, landscaping; industry-appropriate tone that doesn't feel generic
3. **Price**: $19–29/month or $49–69 LTD — 3–15x cheaper than the next meaningful competitor at equivalent functionality
4. **One-tap Google link**: Direct review URL (not a landing page, not a funnel) — minimum friction for the customer
5. **Negative review early warning**: Alert the owner before a 1-star review metastasizes publicly so they can respond within hours
6. **AI responses in v2**: Trade-specific response templates trained for plumbing/HVAC/cleaning scenarios — not generic corporate-speak

**Why now:** The GatherUp/Grade.us acquisition created active evaluation windows. The Jobber ecosystem (200,000+ home service businesses) has no affordable review tool. AppSumo has not seen a trade-vertical review tool. All three windows are open simultaneously.

---

## Target Users

### Primary Users

#### Persona 1: Mike — Solo HVAC Technician, Owner-Operator

**Context:** Mike runs a one-person HVAC company in a mid-size metro. He does 8–12 jobs per week, mostly residential, charging $150–600 per service call. He uses Jobber to schedule jobs and invoice customers. He has 23 Google reviews; his main competitor has 187.

**Day in the life:** Mike is in the field by 7am. He diagnoses, fixes, invoices, and moves to the next call. By 6pm he's tired and the last thing on his mind is asking customers for Google reviews. He tried texting a few customers manually but stopped after two weeks.

**Problem experience:** He lost a quote last month — the prospect mentioned seeing his competitor's 190 reviews vs. his 23. He knows he needs more reviews. He just can't build a manual habit around it while running everything solo.

**Tech stack:** Jobber (core FSM), QuickBooks (accounting), occasional Instagram. He's comfortable with software that takes < 30 minutes to set up.

**What success looks like:** "I set it up once, connected it to Jobber, and new reviews just start appearing. I didn't have to change anything about how I work."

**Price tolerance:** Open to $25/month if it works. Would strongly prefer a one-time payment to remove the recurring anxiety.

---

#### Persona 2: Sarah — Owner of a 5-Tech Cleaning Company

**Context:** Sarah runs a residential cleaning company with 5 cleaners. She does 30–50 cleans per week. She uses Housecall Pro to dispatch and schedule. She has 45 Google reviews and wants to reach 200+ to compete with the franchises.

**Problem experience:** She asked her team to remind customers about reviews verbally — it worked once in a while, awkwardly. She tried a QR code leave-behind card — 2% of customers scanned it. She knows volume is the only answer but can't afford NiceJob at $125/month on top of her HCP subscription.

**What success looks like:** Every completed clean triggers an automatic review request. She checks the dashboard once a week to see the tally grow. She gets an alert if someone leaves a 1-star review so she can call them before it's public.

**Price tolerance:** $39–59/month SaaS or $69 LTD. She's calculating the ROI — even one additional booked job per month justifies it.

---

#### Persona 3: Dan — Plumber, Owner with 2 Employees

**Context:** Dan and two employees run a plumbing service. 15–25 jobs per week. He doesn't use FSM software — just a shared Google Calendar and QuickBooks. He's not very technical but knows he needs more Google reviews after seeing a competitor's Google Maps listing dominate for "emergency plumber [city]."

**Problem experience:** Dan is the classic "I know I should but I don't" profile. He doesn't have an automated workflow to hook into, so ReviewDrop's manual trigger (text a customer's number directly from the dashboard) is his entry point.

**What success looks like:** "I type in the customer's number, hit send, they get a text. I don't have to remember to ask. It just works."

**Price tolerance:** $19/month or $49 LTD. Any friction or complication above this level and he walks.

---

### Secondary Users

**Trade Facebook Group Moderators / Community Influencers**
These are not end users but are the primary word-of-mouth amplification channel. A single post in r/HVAC, r/Plumbing, or the Jobber Users Facebook group from a satisfied Mike or Sarah can drive 20–50 trial signups. They don't use ReviewDrop but they're key to distribution.

**FSM Platform (Jobber, Housecall Pro) Integration Partners**
App marketplace listing managers at Jobber and HCP are decision-makers who can surface ReviewDrop to their entire user base. Not direct users, but secondary stakeholders who control a high-leverage distribution channel.

**Agency Resellers (future)**
Marketing agencies serving local home service clients may white-label or resell ReviewDrop to manage review collection across multiple clients. Not an MVP target, but a natural V2 segment.

### User Journey

#### Discovery
**Trigger event:** Mike sees a competitor's 200-review Google Maps listing ranking above his 23-review listing for "HVAC repair [city]." Or Sarah loses a quote when the prospect says "we went with the company that had more reviews."

**Search behavior:** Google: "how to get more Google reviews for HVAC business" / "best review software for small business" / "cheaper alternative to Podium." Lands on content article or Reddit thread. Discovers ReviewDrop or AppSumo listing.

**Community validation:** Checks r/HVAC or Jobber Users Facebook group — sees other trade owners vouching for it. Trust established in < 5 minutes of reading peer posts.

#### Onboarding
**Target: < 15 minutes from signup to first review request sent.**

1. Enter Google Business Profile — one-click OAuth connect
2. Enter first customer's name + phone number
3. Send test SMS — see exactly what customer receives
4. Connect Jobber/HCP via webhook (optional, < 5 minutes with guided setup)
5. Done — first real review request queued

The "aha moment" is when a customer texts back or the first new Google review appears in the dashboard within 24 hours of setup.

#### Core Usage
**Daily:** Jobber job marked complete → SMS auto-fires → owner sees nothing (it just works)
**Weekly:** Owner glances at dashboard — review count ticking up, conversion rate improving
**As-needed:** Negative review alert fires → owner responds within hours

#### Success Moment
A customer texts back "Left you a 5-star review! You guys were great." — or the dashboard shows a jump from 23 to 47 reviews in the first 30 days. This is when Mike posts in his trade Facebook group: "Started using ReviewDrop 3 weeks ago — went from 23 to 47 reviews. $49 one-time, totally worth it."

#### Long-term Integration
ReviewDrop becomes an invisible part of the job completion workflow. The owner never thinks about it — it just works. Churn is near-zero because stopping it means the review flow stops. This stickiness is the foundation of the MRR model.

---

## Success Metrics

### User Success Metrics

The primary user outcome is simple and measurable: **more Google reviews, faster than they could achieve manually.**

| User Metric | Definition | Target |
|---|---|---|
| Reviews per customer per 30 days | Average new reviews collected per active account | +20 reviews in first 30 days |
| Review request conversion rate | % of SMS requests that result in a review | >15% Month 1 → >25% by Month 6 |
| Time to first review | Days from account creation to first review collected | < 3 days |
| Setup completion rate | % of signups who complete onboarding and send first request | > 80% |
| Owner dashboard engagement | % of users who log in at least weekly | > 60% |

**The user success signal:** A business owner who goes from 15 reviews to 65 reviews in 90 days is a success story. This is a measurable, shareable outcome that drives word-of-mouth in trade communities.

### Business Objectives

**6-month objectives:**

1. **Capital**: Generate $25,000–$70,000 upfront via AppSumo LTD launch (500–1,000 sales at $49–$69 average)
2. **Validation**: Prove the conversion rate hypothesis (>15% SMS → review) with real data from 50+ active accounts
3. **MRR foundation**: Convert 100 SaaS subscribers at $19–29/month = $2,000–$3,000 MRR by month 6
4. **Community presence**: Establish ReviewDrop as the recommended tool in at least 3 major trade communities (r/HVAC, r/Plumbing, Jobber Users Facebook group)

**12-month objectives:**

1. **MRR growth**: $15,000+ MRR from SaaS subscriptions (post-LTD)
2. **FSM marketplace**: Live on Jobber marketplace — distribution multiplier of 200,000+ addressable businesses
3. **Churn**: < 3% monthly churn (industry benchmark; stickiness is structural once integrated)
4. **Retention**: > 70% of LTD users active 6 months post-purchase (healthy LTD cohort)

### Key Performance Indicators

**Acquisition KPIs:**

| KPI | 30-Day | 90-Day | 6-Month |
|---|---|---|---|
| AppSumo LTD sales | — | 500 | 1,000+ |
| LTD Revenue | — | $30K | $60K+ |
| SaaS MRR | — | $2K | $15K |
| Beta users | 20 | — | — |

**Product KPIs:**

| KPI | Target | Measurement |
|---|---|---|
| SMS delivery rate | >98% | Twilio delivery receipts |
| Review request → review conversion | >20% (steady state) | Google Business Profile API review count delta |
| Average reviews/account/30 days | +20 | Monthly snapshot delta |
| Onboarding completion (< 15 min) | >80% | Time from signup to first SMS sent |
| Negative alert response time | < 4 hours by owner | Alert sent vs. GBP response timestamp |

**Business Health KPIs:**

| KPI | Target |
|---|---|
| Monthly churn (SaaS) | < 3% |
| LTD 90-day retention | > 85% active |
| SMS COGS as % of revenue | < 5% (at $25/month SaaS) |
| Support ticket volume | < 1 ticket per 20 active accounts |

**The north star metric:** Average Google review count across active accounts. If the average account is collecting 20+ reviews per month, every other metric follows — retention, NPS, word-of-mouth, AppSumo rating.

---

## MVP Scope

### Core Features

The MVP solves one problem — getting the right SMS to the right customer at the right time after a job — and nothing else. Every feature below is essential to proving this works.

**Feature 1: SMS Review Request Engine**
- Manual trigger: paste customer name + phone number → send SMS
- Bulk trigger: upload CSV of recent customers → queue SMS batch
- Template: pre-written, trade-specific message with direct Google review link
- Follow-up: optional day-3 reminder SMS if no review detected
- Rate limiting: max 1 request per customer per 90 days (prevent harassment)

**Feature 2: Google Business Profile Integration**
- One-click OAuth connection to GBP
- Pull current review count and recent reviews into dashboard
- Auto-generate direct review URL for the business (no landing page, no funnel)
- Monitor for new reviews to close the conversion loop

**Feature 3: Owner Dashboard**
- Total review count (current + delta since signup)
- Recent reviews (last 5, with star rating and snippet)
- Review request history (sent, delivered, clicked, reviewed)
- Conversion rate tracker
- Negative review alert: email/SMS to owner when GBP detects < 3-star review

**Feature 4: Jobber Webhook Integration (MVP-tier)**
- Webhook endpoint that fires SMS trigger when Jobber job status → "complete"
- Setup guide: < 5 minutes, no code required
- Tested on Jobber Pro and above

**Feature 5: Onboarding Flow**
- Step 1: Connect Google Business Profile
- Step 2: Enter first customer + send test SMS (live preview)
- Step 3: Optional Jobber webhook setup
- Step 4: Confirmation screen with expected timeline to first review
- Total time target: < 15 minutes

**What defines MVP complete:** 20 beta users each collect at least 5 new reviews within 30 days of signup, with an average conversion rate of > 15% SMS → review.

### Out of Scope for MVP

These are real features — they're just not needed to validate the core hypothesis:

| Deferred Feature | Why Deferred | Target Phase |
|---|---|---|
| AI review response drafting | Core value is collection, not response; adds API cost complexity | V2 (Month 3–4) |
| Website review widget (embedded carousel) | Nice-to-have; no impact on review collection validation | V2 (Month 4) |
| Social media auto-post from reviews | Bonus feature; no SMB will choose/reject based on this in MVP | V2 (Month 5) |
| Housecall Pro / ServiceTitan integration | Important, but Jobber covers the largest addressable segment first | V2 (Month 3) |
| Multi-platform review routing (Yelp, Houzz, Angi, Zocdoc) | Google is 80%+ of value; add platforms after proving SMS flow | V2 (Month 4) |
| Negative review pre-screening "funnel" | Against Google ToS; legal and reputational risk outweighs benefit | Never (compliance risk) |
| White-label / agency reseller mode | Different sales motion; distraction in MVP phase | V3+ |
| Team accounts (multi-user) | Solo/small business MVP; multi-user adds auth complexity | V2 |
| SMS two-way chat | Scope creep; different product | Out of scope |
| Zapier integration (HCP, ServiceTitan) | Available post-Jobber; Zapier adds support complexity | V2 (Month 3) |

### MVP Success Criteria

Before declaring MVP validated and investing in V2, the following gates must pass:

1. **Conversion rate gate**: ≥ 20% of SMS requests result in a review posted (measured across 20+ beta accounts, 30-day window)
2. **Retention gate**: ≥ 85% of beta users still active at 60 days (no sign-up and abandon pattern)
3. **AppSumo readiness gate**: At least 5 beta users who experienced ≥ 20 new reviews in 30 days agree to be listed as case studies in the AppSumo listing
4. **Support volume gate**: < 1 support request per 10 active accounts per week (complexity manageable without full-time support)
5. **Economics gate**: Confirm SMS COGS + infrastructure < $3/month per LTD customer at Tier 1 (100 requests/month)

If all five gates pass, proceed to AppSumo application and V2 feature development simultaneously.

### Future Vision

**V2 (Months 3–5): The Complete Review Platform**
- AI review response drafting: one-click draft responses to new reviews, tuned by trade vertical (plumber responses sound different from cleaning company responses)
- Website review widget: embeddable carousel pulling live Google reviews, auto-updating
- Social media auto-post: one-click "share this 5-star review to Instagram/Facebook" from the dashboard
- Multi-platform support: Yelp, Houzz (contractors), Angi (home services), Zocdoc (healthcare)
- Housecall Pro and ServiceTitan webhook integrations (native)
- Zapier integration for any FSM tool not natively supported

**V3 (Months 6–12): Distribution and Scale**
- Jobber Marketplace official listing (200,000+ addressable businesses)
- Housecall Pro integrations marketplace listing
- White-label licensing: sell review module to FSM SaaS companies as a bolt-on (B2B2B model)
- Review analytics: industry benchmarks ("the average HVAC company in your metro has X reviews — you have Y")
- Multi-location support for growing trades businesses (2–5 locations)

**Long-term (Year 2+): Platform**
- Video testimonial collection (tap the growing visual review trend)
- Verified job-completion review badge (authenticates reviews as tied to real completed jobs — a defensible trust signal as fake reviews proliferate)
- Canadian and Australian market expansion (same English-language Google ecosystem)
- Healthcare vertical: Zocdoc + Healthgrades + Google tri-platform routing for dental/chiro practices

**The two-year vision:** ReviewDrop is the standard review automation layer for home service trades — either as a standalone tool used by 5,000+ businesses or embedded as a module inside Jobber, Housecall Pro, and similar FSM platforms serving their combined 300,000+ users.

---

## Appendix: Market Context

### Competitive Pricing Map

| Tool | Monthly Price | LTD Available | Trade-Specific | SMS-First | FSM Integration |
|---|---|---|---|---|---|
| Birdeye | $299–449/mo | No | No | Partial | Limited |
| Podium | $399–599/mo | No | No | Yes | Limited |
| NiceJob | $75–125/mo | No | No | Email-first | Partial |
| GatherUp | $99+/mo | No | No | Email-first | No |
| SocialPilot Reviews | $25/mo | No | No | No | No |
| ReviewScout AI | $4.99–9.99/mo | No | No | No | No |
| **ReviewDrop (MVP)** | **$19–29/mo** | **$49–69** | **Yes** | **Yes** | **Yes (Jobber)** |

### SMS Economics

- Twilio US SMS: $0.0083/message
- 100 messages/month: $0.83 variable cost
- Phone number: $1.15/month
- Total COGS (Tier 1 LTD, 100 req/mo): ~$2.00/month
- Total COGS (Tier 2 LTD, 500 req/mo): ~$5.30/month
- Gross margin at $25/month SaaS: ~92%

### AppSumo LTD Scenario

| Scenario | LTD Sales | Avg Price | Revenue | Monthly COGS (steady state) |
|---|---|---|---|---|
| Conservative | 500 | $54 | $27,000 | $1,000 |
| Base | 1,000 | $59 | $59,000 | $2,000 |
| Optimistic | 2,000 | $59 | $118,000 | $4,000 |

Break-even on development (estimated 2-week solo build at $10K equivalent): achieved at ~185 LTD sales.

### Key Risk Summary

| Risk | Severity | Mitigation |
|---|---|---|
| Google API restrictions / ToS changes | High | Send all customers to Google, no review gating; compliance-first design |
| Low defensibility / easy to clone | Medium | FSM integration depth + trade community brand + AppSumo first-mover position |
| SMS cost overruns on "unlimited" LTD | Medium | Fair-use caps (500 msgs/mo for Tier 2); SMS top-up bundles above cap |
| NiceJob matches price | Low | Build FSM integration depth first; trade community trust takes time to replicate |
| AppSumo refund wave (< 5% conversion on landing page) | Medium | 20 beta user case studies with documented results before listing; demo video showing real review counts |

---

**Product Brief Completion Date:** 2026-06-14
**Next Recommended Step:** `create-prd` — Full Product Requirements Document
**Document:** Ready for architecture and PRD workflows
