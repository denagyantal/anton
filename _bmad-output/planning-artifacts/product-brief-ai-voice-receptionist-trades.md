---
stepsCompleted: [1, 2, 3, 4, 5, 6]
inputDocuments: ["ideas/shortlisted/ai-voice-receptionist-trades.md", "_bmad-output/planning-artifacts/research/market-ai-voice-receptionist-trades-research-2026-10-04.md"]
workflowType: product-brief
lastStep: 6
project_name: ai-voice-receptionist-trades
user_name: Root
date: 2026-10-05
---

# Product Brief: AI Voice Receptionist for Trades (Sub-5-Tech Shops)

---

## Executive Summary

Trade contractors — HVAC, plumbing, and electrical businesses with 1–5 technicians — miss 30–40% of inbound calls because they are physically unable to answer while working. Each missed call costs $200–$800 in lost revenue on average; a missed emergency call (burst pipe, HVAC failure in extreme weather) costs $450–$1,800. A solo HVAC operator missing just 3 calls per week loses $30K–$120K annually to voicemail.

Avoca AI's $1B valuation (Kleiner Perkins, April 2026) definitively validates that the trades industry will pay for AI voice answering — but Avoca targets $3M+ revenue operators with 5+ customer service reps at $1,000–$3,500/month. The 80,000–90,000 sub-5-tech shops in HVAC, plumbing, and electrical are structurally excluded from that product.

**This product fills that gap.** An AI phone receptionist priced at $99/month that answers every call 24/7, asks the trade-specific triage questions a real dispatcher would ask ("Is water actively flowing? Can you locate your main shutoff?"), distinguishes emergencies from standard bookings, routes urgent calls to the owner's cell immediately, and books routine jobs directly into Housecall Pro or Google Calendar — all without requiring any new software installation or platform migration.

The core differentiation is depth of triage logic, not mere call answering. Existing sub-$100 tools (Voksha at $49, Rosie AI at $49) answer calls generically. No product at any price point in the sub-$100 tier provides multi-trade emergency triage, Spanish/English bilingual support, and platform-agnostic deployment simultaneously. That combination is the moat.

**Target outcome:** 200 paying subscribers at $99/month within 12 months ($19,800 MRR), with an AppSumo LTD launch at Month 3 targeting 200+ one-time sales ($59,800 gross). Infrastructure gross margin of 55–70% at steady state.

---

## Core Vision

### Problem Statement

Skilled trade contractors (HVAC, plumbing, electrical) are physically unable to answer their phones while performing work. A plumber cannot take a call while under a sink. An HVAC technician cannot answer while on a rooftop. This is not a management or discipline problem — it is physics.

The consequences are severe and immediate:
- **74.1% of trade calls go unanswered** (analysis of 130,175 calls across 45 contractors)
- **Only 3% of callers leave a voicemail** — 82% immediately call the next contractor
- **After-hours pickup rate: below 18%** despite 35–45% of inbound calls arriving outside business hours
- **Average HVAC emergency: $1,400. Average plumbing emergency: $450–$1,800.** Solo operators miss 3–5 of these weekly

Human answering services cost $800–$2,000/month and lack trade-specific knowledge. Generic AI receptionists cost $49–$79/month but ask "How can I help?" instead of "Is water actively flowing? Can you locate your main shutoff?" — the questions that actually matter for triage.

### Problem Impact

**Financial impact per operator:**
- Solo HVAC contractor: $45,000–$176,800/year in missed revenue
- 2–3 plumber shop: $67,600–$135,200/year
- Solo electrician: $78,000–$156,000/year

**ROI case for $99/month is immediate and visceral:**
One captured plumbing emergency at $450 pays for 4.5 months of service. A single captured HVAC emergency at $1,400 pays for over a year. The break-even math is inescapable for any operator who has lost an emergency call to a competitor.

**Market scale:**
- 60,000+ sub-5-employee plumbing businesses (US, confirmed)
- 30,000–40,000 sub-5-tech HVAC shops (estimated)
- ~35,000–45,000 sub-5-tech electrical contractors (estimated)
- **Total SAM: 125,000–145,000 businesses** across three trades
- At $99/month: **$148M–$172M ARR potential**

### Why Existing Solutions Fall Short

| Solution | Price | Fatal Gap |
|----------|-------|-----------|
| Voicemail | Free | 97% of callers don't leave messages; job is lost |
| Human answering service | $800–$2,000/mo | Expensive; no trade triage knowledge; still misses calls |
| Avoca AI | $1,000–$3,500/mo | Requires 5+ CSRs, $3M+ revenue; structurally unaffordable for target |
| Sameday AI | $449+/mo | Still too expensive; not standalone |
| Voksha | $49/mo | Tied to ServiceTitan; no multi-trade triage depth |
| Rosie AI | $49/mo | Generic "How can I help?" — no emergency triage |
| Goodcall | $79–$249/mo | Generic SMB; no trade-specific triage |
| Jobber (built-in, Sept 2026) | Bundled | Only for Jobber users; 70% of market is NOT on Jobber |

**The specific gap:** No product at $49–$99/month combines (1) multi-trade emergency triage logic, (2) platform-agnostic deployment, (3) Spanish/English bilingual support, and (4) emergency vs. standard routing intelligence. That quadrant is unoccupied.

### Proposed Solution

An AI voice receptionist built specifically for HVAC, plumbing, and electrical businesses with 1–5 technicians. The product:

1. **Answers every call**, 24/7, with a professional voice that identifies itself as representing the contractor's business
2. **Asks the right triage questions** for each trade — not generic "How can I help?" but structured emergency decision trees developed for each trade
3. **Distinguishes emergencies from standard bookings** and routes accordingly — urgent calls trigger an immediate SMS/call to the owner; standard jobs get booked autonomously
4. **Books directly** into Housecall Pro or Google Calendar via webhook
5. **Sends SMS job summaries** to the contractor within 60 seconds of each handled call
6. **Works with any scheduling tool or no scheduling tool** — platform agnostic by design
7. **Speaks English and Spanish** natively, not as a translated afterthought

Setup takes under 5 minutes: enter business name and trade type, receive a virtual phone number, forward your existing number. No new software to learn. No migration required.

### Key Differentiators

**1. Trade triage depth** — The AI asks what a trained dispatcher would ask, not what a generic chatbot would ask. For plumbing: "Is water actively flowing? Can you locate your main shutoff? Is there visible pipe damage?" For HVAC: "Heating or cooling failure? Is anyone medically dependent on climate control? System age and model?" This triage logic is the primary moat and a 2–4 week head start over any competitor attempting to match it.

**2. Emergency escalation intelligence** — The product distinguishes "burst pipe at midnight" (owner gets called immediately) from "slow drain, can wait until Tuesday" (autonomously scheduled). No existing sub-$100 product has this routing logic.

**3. Platform agnosticism** — Works with Google Calendar, Housecall Pro, any tool, or no tool. Voksha requires ServiceTitan. Avoca requires HCP or ServiceTitan. 70% of target customers are NOT on either platform. Platform-agnostic deployment reaches the full market.

**4. Spanish/English bilingual** — Hispanic-owned and Hispanic-staffed trade businesses are estimated at 15–20% of the HVAC and plumbing market. No existing sub-$100 product offers trade-specific triage in Spanish. This is a unique channel and a unique feature simultaneously.

**5. Price and simplicity** — $99/month vs. $449–$3,500/month for capable alternatives. Setup under 5 minutes. No new logins, no migration, no complex configuration.

**6. Maintenance upsell during calls** — During routine service calls, the AI can proactively mention maintenance agreements. "We also offer an annual HVAC maintenance plan that covers this type of issue. Would you like me to note that for the technician?" No competitor at any price tier has this. It directly increases contractor revenue per call.

---

## Target Users

### Primary Users

**Persona 1: Marcus — Solo HVAC Technician (Owner-Operator)**

Marcus is 42, runs a one-man HVAC business in Phoenix. He's been doing HVAC for 18 years, built his own book of business, and does $280K/year in revenue. He is the technician, the dispatcher, the accountant, and the salesperson.

His phone rings constantly — but he's on rooftops, in crawl spaces, and in attics. He's missed at least two $1,400+ emergency calls this month alone because his phone went to voicemail while he was head-down in a unit. He's tried a human answering service ($900/month) but they can't qualify HVAC callers, don't know what "R-410A refrigerant" means, and still miss after-hours calls. He schedules on Google Calendar. He will never adopt a full FSM platform — too expensive, too complex, too much migration.

*Pain:* Missed emergency calls, especially during heat waves. The money lost is visceral — he personally remembers two $2,000 jobs he lost to competitors last July.

*What he needs:* Something that answers when he can't, asks the right questions, texts him if it's an emergency, and books the routine stuff while he's working. Setup must take minutes, not days.

*Win condition:* Demo call showing the AI asking "Is this a heating or cooling failure? Is anyone medically dependent on the system?" He hears that and says "it actually knows what to ask."

*Willingness to pay:* $99/month or $299 LTD (prefers LTD to eliminate monthly anxiety)

---

**Persona 2: Carlos & Deb — 2-Tech Plumbing Shop (Owner + One Plumber)**

Carlos is 38, owns a plumbing shop in Houston with one full-time plumber (his brother-in-law). They do $750K/year. Deb, his wife, answers the office phone — but only during school hours. After 3 PM and on weekends, calls go unanswered.

They're on Housecall Pro. They've looked at Smith.ai ($600/month) and decided it's not worth it. They've heard of Avoca AI at trade shows but the price was "for the big guys." They miss 12–15 calls per week — mostly after-hours and weekend requests.

*Pain:* After-hours emergency calls they can't staff. Carlos estimates he's losing $4,000–$6,000/month in missed emergency jobs.

*What he needs:* An AI that books into Housecall Pro directly, texts him and his brother-in-law when there's an emergency (burst pipe, no hot water, etc.), and handles Spanish-speaking callers naturally — about 30% of their calls are in Spanish.

*Win condition:* Seeing the Housecall Pro webhook in action ("it literally created the job while I watched"), plus the bilingual demo.

*Willingness to pay:* $99–$149/month

---

**Persona 3: Ray — Solo Electrician with Apprentice**

Ray is 51, licensed master electrician in Chicago. He and his apprentice do commercial and residential electrical work. Revenue: $420K/year. After-hours calls are his highest-margin work — emergency service calls during outages bill at $175–$250/hour.

He misses 5–8 calls per week. His biggest fear: an AI misidentifying an electrical emergency and giving bad advice that damages a customer's property or his reputation. He's skeptical of tech but loses sleep over missed emergency calls during winter storms.

*Pain:* Missing high-margin emergency calls; fear that AI will say something wrong during an electrical emergency.

*What he needs:* An AI that immediately escalates "sparking outlet," "burning smell," or "full outage" calls to his phone — no autonomous booking for those situations. Standard scheduling (new panel quote, outlet installation) can be handled autonomously.

*Win condition:* Hearing the AI say: "There's a burning smell near your panel? I'm going to reach out to Ray immediately — he handles emergency situations like this personally. I'm texting him your contact information right now." Trust created by knowing the AI escalates immediately rather than trying to handle electrical emergencies autonomously.

*Willingness to pay:* $99/month

---

**Persona 4: Elena — Bilingual HVAC Shop Owner**

Elena is 45, runs a 3-tech HVAC business in Miami that serves both English and Spanish-speaking customers. About 40% of her calls are in Spanish. Generic AI receptionists struggle with her callers — they either respond only in English, or produce stilted translated responses that feel robotic and unprofessional to native Spanish speakers.

Her current solution: a bilingual part-time receptionist at $1,200/month who works 9-5 on weekdays. Everything outside those hours goes unanswered.

*Pain:* After-hours Spanish-language calls missed entirely. Feeling underserved by a category that builds only for English-speaking markets.

*What he needs:* Native Spanish/English bilingual triage — not "translated," but natural-sounding Spanish with the same triage depth as the English version. Emergency escalation in Spanish. SMS summaries in Spanish to her.

*Win condition:* Hearing the AI switch naturally to Spanish when the caller begins in Spanish, and ask "¿Está perdiendo agua en este momento? ¿Puede encontrar la llave de paso principal?" (Is water actively flowing? Can you locate the main shutoff?)

*Willingness to pay:* $149/month (Pro tier with bilingual + unlimited calls)

### Secondary Users

**Housecall Pro Office Managers** — In 2–5 tech shops with an office manager, this person is the day-to-day user who monitors call transcripts, adjusts escalation settings, and verifies bookings. They are not the buyer but are the primary daily operator. Setup must be simple enough that a non-technical office manager can manage the triage scripts via a web interface.

**Trade apprentices and secondary technicians** — In multi-tech shops, technicians may be the ones who receive emergency escalation SMS alerts. The escalation system must work reliably across multiple recipients with configurable priority routing.

### User Journey

**Discovery:**
The contractor misses an emergency call and loses a $1,400 job to a competitor. They search "AI answering service for HVAC" or "never miss plumbing call" — or they see a post in r/HVAC or the "HVAC Business Owners" Facebook group from a peer saying "this thing booked me $1,800 while I was asleep."

**Evaluation:**
Visits the landing page. Listens to the embedded demo call — hears the AI asking "Is this a heating or cooling failure?" Checks the price: $99/month. Reads 2–3 authentic testimonials. Calculates the ROI: "I miss 10 calls a week, average job $400. One captured call pays for 4 months of this service." Signs up for the free trial or buys the AppSumo LTD.

**Onboarding:**
Enters business name, selects trade (HVAC, plumbing, electrical, or combination). Receives a virtual phone number. Forwards their existing business number to it. Tests it by calling in — hears the AI answer professionally with their business name and ask a triage question relevant to their trade. **Total time: under 5 minutes.**

**First value moment:**
The first time a call comes in when the contractor is on a job, the AI handles it, books the appointment (or escalates the emergency), and the contractor receives an SMS with the job details. "It booked a $500 drain cleaning job while I was replacing a water heater."

**Ongoing usage:**
"Set and forget." The phone number is forwarded, the tool is invisible in the daily workflow, jobs appear in their calendar. The product becomes infrastructure — like having a receptionist who never sleeps, never calls in sick, and always asks the right questions.

**Advocacy:**
The first significant emergency call captured (burst pipe at 11 PM, booked and escalated = $1,800 job) creates an immediate advocate. The contractor texts a peer, posts in r/HVAC or their trade Facebook group. Peer referral is the primary customer acquisition engine.

---

## Success Metrics

The core success metric is simple: did the contractor capture revenue they would otherwise have lost? Every other metric is a proxy for this.

### User Success Metrics

| Metric | Definition | Target |
|--------|-----------|--------|
| Calls handled per customer/month | Number of inbound calls the AI answers | 30 (Month 3) → 100 (Month 12) |
| Emergency escalation accuracy | % of true emergencies correctly escalated | >95% (no missed emergencies) |
| Call → booking conversion rate | % of handled calls resulting in scheduled job | >60% for standard calls |
| Setup time | Time from signup to live call handling | <5 minutes |
| Contractor satisfaction (NPS) | Net Promoter Score from monthly survey | >50 by Month 6 |
| Time to first value | Time from signup to first AI-handled booking | <24 hours |

**The ultimate user success signal:** A contractor posts in r/HVAC, r/plumbing, or their trade Facebook group about a job the AI booked that they would have otherwise missed. This is the flywheel.

### Business Objectives

**Revenue targets:**
- Month 3: 30 paying subscribers → $2,970 MRR
- Month 6: 100 paying subscribers → $9,900 MRR
- Month 12: 200+ paying subscribers → $19,800+ MRR
- AppSumo LTD launch (Month 3): 200+ sales → $59,800+ one-time gross

**Unit economics targets:**
- Gross margin: 50% at launch → 65%+ by Month 12 (infrastructure volume discounts)
- Customer Acquisition Cost: <$30 (community-driven; Reddit, Facebook Groups, peer referral)
- Monthly churn: <5% (Month 3) → <3% (Month 12)
- LTV:CAC ratio: >10:1 at $99/month with <3% churn

**Market position:**
- Recognized in r/HVAC, r/plumbing, r/electricians as the go-to AI receptionist for small shops
- First trade-specific AI receptionist LTD on AppSumo
- Established before Housecall Pro launches native AI receptionist (estimated 12–24 month window)

### Key Performance Indicators

| KPI | Month 3 | Month 6 | Month 12 |
|-----|---------|---------|---------|
| Paying subscribers (MRR) | 30 | 100 | 200+ |
| MRR | $2,970 | $9,900 | $19,800+ |
| LTD sales (AppSumo) | — | 200 | 500 |
| Calls handled / customer / month | 30 | 60 | 100 |
| Monthly churn | <5% | <4% | <3% |
| Gross margin | 50% | 58% | 65%+ |
| Reddit organic mentions | 5/mo | 15/mo | 30+/mo |
| AppSumo rating | — | 4.5+ | 4.7+ |
| Bilingual (ES/EN) users | — | 15% | 20%+ |
| NPS | >30 | >45 | >60 |

**Leading indicators to watch weekly:**
- Free trial → paid conversion rate (target: >25%)
- First call handled within 24 hours of signup (retention predictor)
- Organic Reddit/Facebook mentions (CAC efficiency signal)
- Emergency escalation satisfaction (single most important quality metric)

---

## MVP Scope

### Core Features

**The MVP must deliver one thing above all else:** When a contractor can't answer their phone, the AI answers it, asks the right questions, and either books the job or escalates the emergency — with zero configuration complexity.

**Feature 1: Trade-Specific Triage Engine**
- HVAC triage: 7–9 question emergency decision tree (heating/cooling failure? medical dependency? system age/model? emergency vs. standard routing?)
- Plumbing triage: 5–7 questions (active water flow? shutoff valve location? pipe damage type? emergency vs. standard?)
- Both trades covered at MVP launch; electrical added Month 5

**Feature 2: Emergency Escalation Logic**
- Real-time emergency keyword detection during triage
- Immediate SMS + phone call to contractor's registered cell within 60 seconds of emergency identification
- Configurable escalation: primary contact + one backup number
- Escalation includes caller name, phone, issue summary, and urgency level

**Feature 3: Autonomous Standard Job Booking**
- Housecall Pro webhook: creates job directly in HCP calendar with caller details, issue type, requested timing
- Google Calendar integration: creates invite with job details; contractor receives SMS confirmation
- "No scheduling tool" mode: collects caller info + preferred times, sends SMS summary to contractor

**Feature 4: SMS Job Summary (All Calls)**
- Every handled call generates an SMS to the contractor within 60 seconds of call end
- Summary includes: caller name, phone number, issue type, urgency classification (standard/emergency), and action taken (booked/escalated/message left)
- Full call transcript link in SMS (accessible via web dashboard)

**Feature 5: Professional Call Handling**
- Virtual phone number provisioned on signup
- Simple forward: contractor forwards existing number to virtual number
- AI opens with contractor's business name: "Thank you for calling [Company Name], I'm an AI assistant answering on their behalf..."
- FCC-compliant AI disclosure on every call

**Feature 6: 5-Minute Onboarding**
- Signup → select trade(s) → receive virtual number → test call
- No FSM migration required; no new software to learn daily
- Web dashboard for: call history, transcripts, escalation settings, business hours

**Feature 7: After-Hours Mode**
- Configurable business hours; all after-hours calls handled identically
- Emergency escalation active 24/7 regardless of business hours setting
- Standard booking during business hours if contractor is unavailable; full AI handling after hours

### Out of Scope for MVP

The following are explicitly deferred to preserve focus and meet the 3–4 week build timeline:

| Feature | Reason Deferred | Target Phase |
|---------|----------------|-------------|
| Electrical triage scripts | Adds 1–2 weeks; HVAC + plumbing covers 80% of SAM | Month 5 |
| Spanish/English bilingual | Complex to build correctly; needs native-quality TTS/STT | Month 4–5 |
| Maintenance upsell during calls | High value but not core to missed-call problem | Month 6 |
| Roofing/pest control triage | Adjacent verticals; validate core trades first | Month 6+ |
| Outbound calling (reminders, reviews) | Different product motion; needs separate GTM | Month 9+ |
| Advanced analytics dashboard | Contractors need SMS summaries, not dashboards | Month 6+ |
| Multi-user/team portal | Solo operators are primary; team features after validation | Month 6 |
| In-app triage script editor | Support complexity; handle via onboarding templates first | Month 4 |
| ServiceTitan integration | Low priority; target market isn't on ServiceTitan | Month 9+ |
| Jobber integration | Jobber now has native AI; deprioritize to focus on HCP | Month 9+ |

### MVP Success Criteria

The MVP is validated when:

1. **Technical:** AI handles calls end-to-end with <5% escalation errors (emergency calls routed correctly) across 100+ live test calls
2. **User:** 10 beta users complete onboarding in <5 minutes without assistance; at least 8/10 have the AI handle a real call within 24 hours of signup
3. **Value:** At least 3 beta users capture a job they confirm they would have otherwise missed; at least 1 captures an emergency call
4. **Economics:** Confirmed COGS per customer at 500 min/month is under $55, validating >44% gross margin at $99/month
5. **Quality:** Emergency escalation accuracy >95% in beta testing (no missed emergency = priority #1 quality gate)

**Decision gate to proceed to AppSumo LTD:** 20 paying customers at $99/month; <10% monthly churn; at least 5 organic Reddit/Facebook mentions

### Future Vision

**Year 1 post-MVP additions (in order of priority):**
- Bilingual Spanish/English support with native-quality TTS for both languages
- Electrical triage with high-urgency escalation (burning smell, visible sparking)
- In-app triage script editor (operator can customize without technical help)
- Maintenance upsell during standard service calls
- Roofing and pest control vertical expansion

**Year 2 platform evolution:**
- Outbound AI calling for post-job follow-up and review generation
- Proactive maintenance reminder calls (seasonal tune-ups, annual inspections)
- Multi-line support for 5–15 tech shops (expanding upmarket with proven triage library)
- Canada and UK expansion (same trades, same economics, English)
- Integration with more FSM platforms (ServiceTitan, Jobber, FieldEdge) as the market broadens

**3–5 year vision:**
The product evolves from "AI voice receptionist" to "AI front office for trade contractors." Beyond answering inbound calls, the system proactively manages the customer relationship: scheduling follow-ups, enrolling customers in maintenance plans during calls, generating review requests, and identifying at-risk customers who haven't scheduled their annual service. The triage library becomes the deepest in the industry — covering 12+ trades with emergency protocols trained on real dispatch data. The moat transitions from "price and simplicity" to "the only AI that knows more about trade emergency dispatch than any human receptionist."

**The market opportunity in 5 years:**
As AI voice quality continues improving and becomes infrastructure-level expectation for trade businesses, the revenue model transitions from "never miss a call" to "complete AI customer relationship management for trade contractors." The TAM expands from $155M–$166M ARR (voice answering only) toward $1B+ as the product encompasses the full customer lifecycle.

---

## Strategic Notes

### Go-to-Market Sequence

**Phase 1 — Beta (Weeks 1–3):** Build MVP using Retell AI + Twilio + HVAC/plumbing triage scripts. Recruit 10–20 beta users from r/HVAC and Housecall Pro communities. Confirm emergency escalation accuracy and COGS.

**Phase 2 — Soft Launch (Month 2):** Landing page with embedded demo calls. $99/month with 14-day free trial. Target 20–30 paying customers. Begin AppSumo application.

**Phase 3 — AppSumo LTD (Month 3):** $299 Tier 1 (500 calls/month) and $499 Tier 2 (unlimited + 3 trades). Target 200+ LTD sales. Review generation campaign for 50+ AppSumo reviews.

**Phase 4 — MRR Growth (Months 4–12):** SEO content, YouTube outreach to trade business channels, ongoing Reddit/Facebook community presence. Add electrical, bilingual, maintenance upsell. Target $19,800 MRR.

### Competitive Urgency

Two windows are closing:
1. **Housecall Pro native AI:** Estimated 12–24 months before HCP builds their own AI receptionist. Until then, HCP users need third-party tools. This is the primary acquisition channel.
2. **Voksha/Rosie AI triage depth:** Both have the right price point but lack deep triage. They can add triage scripts in 2–4 weeks. Community brand trust is the non-replicable moat — establish it before they catch up.

### Infrastructure Stack

- **Voice AI:** Retell AI (recommended at $0.07–$0.08/min) or Vapi ($0.05/min base)
- **Telephony:** Twilio (virtual numbers, SMS delivery)
- **LLM:** Claude Haiku or GPT-4o-mini for triage decision logic ($0.01–$0.02/call)
- **Integrations:** Housecall Pro webhook (launch day), Google Calendar (launch day)
- **COGS at 500 min/month:** ~$43–$57 → 42–56% gross margin at $99/month
- **At scale (500+ customers, volume discounts):** ~60–70% gross margin

---

*Product Brief completed: 2026-10-05*
*Source idea evaluation: ideas/shortlisted/ai-voice-receptionist-trades.md (Score: 88/105)*
*Source market research: _bmad-output/planning-artifacts/research/market-ai-voice-receptionist-trades-research-2026-10-04.md*
*Next step: create-prd*
