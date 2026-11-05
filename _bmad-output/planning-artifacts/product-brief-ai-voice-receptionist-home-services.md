---
stepsCompleted: [1, 2, 3, 4, 5]
inputDocuments:
  - ideas/shortlisted/ai-voice-receptionist-home-services.md
  - _bmad-output/planning-artifacts/market-research-ai-voice-receptionist-home-services.md
workflowType: 'product-brief'
research_type: 'product-brief'
research_topic: 'ai-voice-receptionist-home-services'
user_name: Root
date: '2026-11-05'
---

# Product Brief: AI Voice Receptionist for Home Services

---

## Executive Summary

Small HVAC, plumbing, and pest control businesses miss 30–40% of inbound calls — not because they don't want to answer, but because the owner is under a crawlspace or on a roof when the phone rings. Each unanswered call costs $300–2,000 in lost job revenue. Hiring a full-time receptionist runs $3,500/month and still leaves nights, weekends, and peak-season call surges uncovered.

**RingMate** is an AI voice receptionist purpose-built for home-services trades. It answers every call 24/7 in a fluent, HVAC-native voice, correctly triages emergency dispatches from routine bookings, and pushes confirmed appointments directly into Jobber or Housecall Pro — all for $199–299/month.

The enterprise players (Broccoli at $52M raised, Avoca at $1B valuation) have proven this category works for multi-location companies doing $1M+ per year. The 500,000+ small shops doing $200K–$600K per year are explicitly priced out of their solutions. RingMate owns that gap: niche-trained, niche-priced, and niche-integrated from day one.

The business case is immediate and visceral: a single recovered emergency HVAC call in July pays for three months of service. The path to $10K MRR is 50 clients, achievable within 12 months via community go-to-market in channels where these owners already congregate.

---

## Core Vision

### Problem Statement

Small home-services businesses (1–10 trucks, $200K–$600K annual revenue) are losing 30–40% of inbound calls to voicemail during peak seasons. The owner-operator is physically in the field — unable to answer — and their only current options are:

1. **Full-time receptionist** — $3,500/month fully loaded, doesn't cover nights/weekends, requires HVAC knowledge training, 25% annual turnover
2. **Generic answering service** — $200–400/month for message-taking only; no booking, no triage, no FSM integration
3. **Voicemail** — the caller calls the competitor who answers

The problem is binary and high-stakes. In emergency scenarios (no heat in January, sewage backup on Saturday night), the first business that answers gets the job. Calling back rarely works — the homeowner has already moved on.

### Problem Impact

The financial cost is documented and quantifiable:

- **74.1%** of calls to home-services businesses go unanswered on average
- **45–70%** missed call rate during peak seasons (summer HVAC, winter plumbing)
- **$1,200–$3,500** lost per missed emergency HVAC call
- **$800–$2,000** lost per missed plumbing call
- **$45,000–$120,000/year** in missed-call revenue per contractor (dataset of 1,200+ contractors)
- One Houston HVAC company tracked 127 voicemail calls in a single month — $152,400 in potential revenue at $1,200 average ticket

Beyond revenue, there is a compounding competitive dynamic: if a competitor answers and the owner does not, the owner doesn't just lose that job — they lose the customer's mental availability for future calls. Speed-to-answer is the decisive factor when a homeowner is in distress.

### Why Existing Solutions Fall Short

**Enterprise AI platforms (Broccoli, Avoca)** have validated this category at scale but serve a different customer:
- Avoca starts at ~$1,100/month with a $600 setup fee — a 2-truck HVAC shop with $300K revenue cannot justify this
- Broccoli is enterprise-sales with unpublished pricing; explicitly not recommended for sub-$500K shops
- Neither is niche-trained for HVAC-specific terminology or triage logic

**Mid-market tools (Sameday, NextPhone, LocalCall):**
- Sameday: $449–789/month — still too expensive for the target segment
- NextPhone: $199/month unlimited but uses generic call scripts with no HVAC-specific triage
- None push jobs directly to Jobber/HCP dispatch board with job type classification

**Budget tools (Rosie, ServiceAgent, Allo):**
- Minute limits create cost uncertainty at volume
- Not HVAC-trained — an AI that can't distinguish "emergency no-heat call" from "tune-up request" creates service failures, not solutions
- Limited or no FSM integration at accessible price tiers

**The core gap:** No tool at the $199–299/month price point is simultaneously (1) trained on HVAC/plumbing/pest control vocabulary and triage logic, (2) integrated with Jobber and Housecall Pro without requiring FSM plan upgrades, and (3) designed specifically for the sub-$500K independent shop.

### Proposed Solution

**RingMate for HVAC** — an AI voice receptionist that speaks the language of home-services trades.

RingMate answers every inbound call with a natural voice agent trained on HVAC, plumbing, and pest control terminology. It triages the call in real time — recognizing an emergency dispatch situation vs. a routine tune-up booking vs. a maintenance agreement inquiry — and takes the appropriate action: dispatch alert to the owner, calendar booking with FSM push, CRM capture for follow-up, or SMS deposit request for high-ticket emergency work.

The shop owner gets a clean dashboard showing every call, its outcome, and the jobs booked or missed. The first time they see a $1,500 emergency job that RingMate booked at 11 PM on a Saturday while they were asleep, they understand the ROI immediately.

**Core architecture:**
- Voice layer: Retell AI (best latency/quality in class, $0.07–0.115/min)
- LLM: GPT-4o-mini for routine flows; GPT-4o/Claude Sonnet for complex triage
- FSM integration: Webhook-first (works with all Jobber/HCP tiers, no customer upgrade required)
- Dashboard: Call log, outcome summaries, booked jobs, missed-call alerts

**Pricing:**
- $199/month — up to 100 calls/month, Google Calendar booking, basic dashboard
- $299/month — unlimited calls + SMS follow-up + Jobber/HCP webhook integration
- LTD: $599 tier (3,000 included call minutes, ~2 years for typical shop) with transparent credit-pack refills

### Key Differentiators

1. **HVAC-native call intelligence** — The only tool at this price point trained on HVAC terminology: emergency heat loss, AC tune-up, maintenance agreements, refrigerant inquiries, new equipment quotes. Triage logic handles seasonal demand patterns (dispatch urgency in July vs. February). No generic AI platform offers this.

2. **Correct triage, not just call answering** — Most competitors answer calls and book appointments. RingMate classifies job type, priority, and next action. Emergency calls trigger SMS alerts to the owner. Maintenance inquiries go to CRM. This is the core value that earns word-of-mouth in trades communities.

3. **FSM push without upgrade friction** — Webhook-based Jobber and Housecall Pro integration works at all subscription tiers, eliminating the barrier that stops most competitors. Customers don't need to upgrade their existing FSM plan to get integration.

4. **Spanish-first variant (Month 2–3)** — 25–40% of trades calls in Sun Belt metros come in Spanish. Zero HVAC-specific Spanish AI receptionist exists at any price. This creates a defensible first-mover position in a large, underserved segment.

5. **Sub-$500K shop pricing** — $199/month is 94% cheaper than Avoca and 56% cheaper than Sameday. ROI is immediate: a single recovered emergency job covers 2–6 months of service.

6. **Transparent unit economics** — Call credits model (validated by Dialora's AppSumo launch) means the LTD story is honest: "pay once for 3,000 included minutes, then top up at transparent rates." No opaque pricing that erodes trust.

---

## Target Users

### Primary Users

**Persona 1 — Marcus, 2-Truck HVAC Owner ($280K revenue, Houston TX)**

Marcus runs a residential HVAC company he started 7 years ago. He has two full-time techs including himself and a part-time office admin who works 20 hours a week. During summer (his busiest season), calls come in constantly and his admin is overwhelmed. After hours and on weekends, calls go to his personal cell or voicemail. He knows he misses calls — last July he found 11 voicemails on a Monday morning — but he can't afford a full-time receptionist and doesn't want to manage one.

Marcus uses Jobber for scheduling and invoicing. He's not technical but he uses apps if setup is simple. He found Jobber via a Facebook recommendation and set it up in an afternoon. He will buy software that solves a real problem if the demo is convincing and setup takes less than an hour.

**Pain:** Missed emergency calls during peak season. Knowing a competitor is answering and getting the jobs he's not.

**Success moment:** RingMate books a no-heat emergency at 11 PM on a Sunday and Marcus sees it in Jobber when he wakes up Monday. He calculates it was a $1,800 job. He tells everyone in his Facebook group.

**Decision trigger:** One specific event — usually a string of voicemails after a weekend or a customer who calls to say "I called you first but you didn't answer so I went with [competitor]."

---

**Persona 2 — Sandra, Solo Plumber ($190K revenue, Phoenix AZ)**

Sandra is a licensed plumber who runs solo with occasional help from a subcontractor. She's in the field 8–10 hours a day and her phone goes to voicemail constantly. She has no office admin. Her calls come from Google Local Services Ads and referrals — she pays $400/month to get those leads and then misses half of them.

Sandra uses Google Calendar and QuickBooks. She's not on Jobber. She speaks Spanish at home and 30–40% of her calls come in Spanish from homeowners in her service area.

**Pain:** Paying for leads she doesn't answer. No Spanish-first option that knows plumbing terminology.

**Success moment:** RingMate answers a Spanish-speaking caller, correctly identifies a water heater emergency (not a routine job), schedules it for the next morning, and sends Sandra an SMS summary in English. She books the job without ever picking up the phone.

**Decision trigger:** Calculating how much she pays for leads versus how many she actually converts.

---

**Persona 3 — Dale, 5-Truck Pest Control Operator ($450K revenue, Atlanta GA)**

Dale runs a pest control route business with 5 technicians. He has an office manager who handles calls during business hours but nothing after 5 PM. He loses weekend and evening calls, especially for German cockroach emergencies or rodent problems that customers consider urgent. He's evaluated Broccoli but the pricing was too high for his operation.

Dale uses Housecall Pro. He's tech-comfortable and has used multiple SaaS tools. He evaluates by ROI and integration quality.

**Pain:** After-hours calls going unanswered. Wanting integration with Housecall Pro without paying more for the HCP plan tier required by competitors.

**Success moment:** RingMate triages a weekend rodent emergency, books the job in HCP, and Dale's on-call tech gets the alert. He sees 3 booked weekend jobs in his first month that would have been voicemails.

---

### Secondary Users

**Shop Office Managers / Dispatchers** — At the 5-15 truck tier (Segment 3), office staff use RingMate as overflow and after-hours coverage rather than a full replacement. They interact primarily with the dashboard to review call logs and confirm triage decisions. They need the system to escalate correctly and not create double-booking conflicts.

**Agency/Reseller Partners** — The IH playbook validates that agencies are building $300–800 MRR/client businesses managing AI voice solutions for trades shops at $800–2,000 setup + monthly SaaS. These partners become a high-leverage distribution channel. They need white-label or multi-client dashboard access, transparent COGS, and reliable uptime SLAs.

**Homeowner Callers** — Technically not users of the product but a critical constituency. The AI must pass the "doesn't hang up" test: a homeowner who realizes they're talking to AI but whose emergency gets booked correctly will accept it. A homeowner who gets confused by bad triage or robotic responses will complain publicly. Voice quality and correct triage are table-stakes for this stakeholder.

### User Journey

**Discovery → Decision:**
1. Owner encounters the problem acutely (missed-call event, slow Monday-morning voicemail review, or competitor got a job they should have had)
2. Searches Google for "answering service for HVAC" or "AI receptionist for plumbers" — lands on a comparison article or RingMate's niche landing page
3. Sees pricing ($199/month), demo call recording showing HVAC-native triage, and "integrates with Jobber" — the three things they were going to ask about
4. Signs up for 7-day trial; onboarding: port or forward a number, select trade vertical, connect calendar/Jobber webhook
5. Gets first booked call within 24–72 hours of going live

**First Value Moment (Aha):**
The first booked job that the owner would have missed — especially if it's an emergency or comes in after hours — creates immediate emotional proof. This is the ROI moment that drives retention and word-of-mouth.

**Ongoing Usage:**
- Weekly: Check dashboard for call log, missed-call alerts, and booked jobs
- Monthly: Review call volume and confirm credit usage is on track
- Seasonally: Confirm call scripts are updated for seasonal demand shifts (spring tune-up season vs. emergency season)

**Churn Risk Points:**
- Day 30: Post-onboarding if first value moment hasn't occurred (address with proactive check-in call)
- Day 90: First billing review (address with ROI report: X jobs booked, $Y estimated revenue captured)
- Day 180: 6-month ROI audit (address with annual-plan offer at 20% discount)

**Referral Trigger:**
Facebook group post or word-of-mouth to peers. Trades communities are high-trust and recommendation-driven. One visible success story in "HVAC Business Owners" Facebook group generates qualified inbound at zero CAC.

---

## Success Metrics

### User Success Metrics

**Primary user outcome:** Shop owner recovers at least one missed-call job per month that covers the monthly subscription cost.

| User Metric | Target | Measurement |
|---|---|---|
| Time to first booked call | < 72 hours post-onboarding | Dashboard event: first booking logged |
| Calls answered vs. missed | > 95% answer rate | Call log: answered / (answered + missed) |
| Correct triage rate | > 90% calls triaged to right action | Owner-reported or spot-check review |
| Owner dashboard weekly visits | > 1 visit/week at 60 days | Product analytics |
| Net Promoter Score | > 60 at 90 days | In-app NPS survey |
| 90-day retention | > 80% | Subscription churn tracking |

### Business Objectives

**12-Month Targets:**

| Objective | Target |
|---|---|
| MRR | $10,000 (50 clients × $199/mo) |
| Total paying customers | 50+ |
| Gross margin | > 70% |
| CAC (blended) | < $200 |
| CAC payback period | < 1.5 months |
| Monthly churn rate | < 2% (24% annual) |

**6-Month Milestones:**
- Month 1–2: 10 paying clients via community channels (Reddit, Facebook groups)
- Month 3–4: 25 clients; AppSumo LTD launch initiated
- Month 5–6: 50 clients; agency/reseller channel active

**Unit Economics Gate:** Before scaling marketing spend, confirm: COGS/client < $60/month at $199/month price point (requires Retell AI infrastructure + LLM averaging < $0.10/minute at typical call volumes).

### Key Performance Indicators

**Acquisition KPIs:**
- Monthly new customer signups
- Trial-to-paid conversion rate (target: > 40%)
- CAC by channel (community posts, SEO, AppSumo, referral)
- Weekly free trial starts

**Product KPIs:**
- Calls handled per customer per month (benchmark: 60–120 for a 2-5 truck shop)
- Booking conversion rate (calls that result in a booked job or lead captured)
- Triage accuracy (emergency correctly escalated, routine correctly booked)
- Dashboard DAU/WAU/MAU ratio

**Revenue KPIs:**
- MRR growth rate
- Expansion revenue (upsell from $199 to $299, credit pack purchases)
- LTD revenue and credit redemption rate
- Gross margin % per customer cohort

**Retention KPIs:**
- 30/60/90-day cohort retention curves
- Net Revenue Retention (NRR)
- Reactivation rate after pause/cancel

**Leading Indicators (early signals of success):**
- Trial users who reach "first booked call" within 72 hours have 3× higher 90-day retention
- Customers who connect Jobber/HCP integration have 40% lower churn (hypothesis; validate in first cohort)
- Community posts mentioning RingMate generate new trial signups at zero CAC

---

## MVP Scope

### Core Features

The MVP must solve the central problem — missed calls costing $300–2,000 each — and create the "aha moment" (first booked job) within 72 hours of onboarding.

**Feature 1: AI Voice Answering (24/7)**
- Answers calls on a forwarded or ported business number
- Natural voice conversation using Retell AI infrastructure
- HVAC-specific call scripts: emergency heat/cool loss, routine service booking, maintenance agreement inquiry, new equipment quote request
- Plumbing-specific scripts: emergency backup/leak, routine repair, water heater, drain cleaning
- Handles basic caller questions: service area, hours, pricing estimates
- Graceful human handoff: "Let me connect you to [name]" or "I'll have someone call you right back"

**Feature 2: Call Triage Engine**
- Classifies each call: Emergency Dispatch / Routine Booking / Maintenance Inquiry / New Equipment Quote / General Question / Spam
- Routes correctly: emergencies trigger owner SMS alert; routine calls proceed to booking flow
- Urgency scoring: time-of-day + job type + caller language (e.g., "no heat," "flooding," "not working" = high urgency)

**Feature 3: Appointment Booking**
- Google Calendar integration: check availability, book appointment, send confirmation SMS to caller
- Jobber webhook integration: create job in Jobber with job type classification populated
- Housecall Pro webhook integration: create job in HCP with job type and priority
- Booking confirmation: caller receives SMS with appointment details

**Feature 4: Post-Call Actions**
- Owner SMS notification: call summary with caller name, number, job type, booked time
- Missed-call text-back: if call somehow drops before triage, automated SMS to caller within 2 minutes
- After-hours booking confirmation: caller receives booking details even when owner is unavailable

**Feature 5: Owner Dashboard**
- Call log with date, time, duration, outcome (booked / triaged / missed / escalated)
- Job summary: estimated revenue captured, job type breakdown
- Call recordings (optional, with caller consent)
- Monthly summary: calls handled, jobs booked, estimated revenue recovered

**Feature 6: Onboarding Flow**
- Number forwarding setup guide (Twilio or carrier-based forward to RingMate number)
- Trade vertical selection: HVAC / Plumbing / Pest Control
- Business hours configuration
- Calendar / FSM webhook connection wizard
- Test call feature: owner calls their number and hears RingMate in action
- Target: < 60-minute onboarding from signup to first live call

### Out of Scope for MVP

The following are explicitly deferred to prevent scope creep and hit the 3–4 week build timeline:

- **Spanish-language variant** — High value but requires additional call script development and testing. Target Month 2–3.
- **ServiceTitan integration** — Serves the $600K+ shop tier (Segment 3); adds complexity without serving the core $200–600K target. Target Month 3–4.
- **Native Jobber/HCP API integration** (beyond webhooks) — Webhook approach covers all FSM tiers. Full API integration adds partnership negotiation overhead. Target Month 2–3.
- **Outbound calling / follow-up campaigns** — Out of scope for the core "never miss an inbound call" value proposition. Future product expansion.
- **Multi-location / multi-trade support** — Single-trade, single-location focus for MVP. Enterprise multi-location is Broccoli/Avoca territory.
- **AI-powered quote generation** — Complex; separate product category. Not in scope.
- **White-label / reseller portal** — Agency channel is a growth path but adds multi-tenancy complexity. Target Month 4–6.
- **iOS/Android mobile app** — Web dashboard sufficient for MVP; native app adds 6+ weeks. Target Month 6+.
- **CRM-native integration** (HubSpot, Salesforce) — Home-services shops don't use these at the target tier.

### MVP Success Criteria

The MVP is validated and ready for scaling when the following gates are met:

**Gate 1 — Technical Validation (End of Week 4):**
- RingMate completes a live HVAC call with correct triage in a production environment
- Jobber webhook push works without customer needing to upgrade FSM plan
- Onboarding time < 60 minutes for a non-technical owner

**Gate 2 — Early Customer Validation (End of Month 2):**
- 10 paying customers ($199/month tier)
- Average trial-to-paid conversion rate > 35%
- 90-day retention for first cohort > 75%
- At least 3 customers have reported a "first booked job" success moment

**Gate 3 — Unit Economics Validation (End of Month 3):**
- COGS/customer < $70/month at current call volumes
- Gross margin > 65% at $199/month
- LTV:CAC > 5:1

**Go/No-Go Signal:**
If 10 customers with > 75% 90-day retention and confirmed ROI proof stories → scale to $10K MRR sprint. If retention < 60% → investigate triage quality before scaling acquisition.

### Future Vision

**Year 1 (Months 6–12) — Niche Depth:**
- Spanish-language HVAC and plumbing variant (first-mover in a gap with no competition)
- Garage door, pest control, and septic service sub-verticals (additional call scripts + triage logic)
- Native Jobber and HCP API integration with full dispatch board push
- Agency/reseller portal for white-label deployment ($300–800 MRR/client model validated by IH)
- AppSumo LTD launch ($599 tier with call credits)

**Year 2 — Platform Expansion:**
- Multi-trade support (single subscription covers HVAC + plumbing for combination shops)
- Outbound follow-up campaigns (call back unclosed estimates, maintenance reminder calls)
- Call analytics and competitive intelligence dashboard (avg response rate vs. industry benchmark)
- AI-powered service agreement upsell detection (recognize caller is a good maintenance agreement prospect)
- Voice AI training marketplace: sell anonymized call scripts and triage logic to new entrants

**Year 3 — Category Leader for Sub-$1M Home Services:**
- Full FSM-native integrations (ServiceTitan, FieldEdge, Successware)
- Bilingual AI across 10+ trade verticals
- Call coaching AI (alerts owner to triage mistakes, training mode for staff)
- Potential acquisition target for Jobber, HCP, or ServiceTitan as AI voice layer for their platforms
- Or: horizontal expansion into dental, veterinary, and legal (adjacent phone-answering markets at same price point)

The long-term moat is the proprietary training dataset built from millions of real trades calls — triage accuracy, emergency keyword library, regional dialect variations, seasonal demand patterns. This data flywheel is what makes the niche-trained product defensible against generic platforms moving down-market.

---

*Product Brief Status: Complete. All 5 steps executed. Ready for PRD creation phase.*
