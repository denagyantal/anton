---
stepsCompleted: [1, 2, 3, 4, 5, 6]
inputDocuments: ["ideas/shortlisted/ai-voice-booking-trades.md"]
workflowType: product-brief
lastStep: 6
project_name: ai-voice-booking-trades
user_name: Root
date: 2026-10-19
---

# Product Brief: AI Voice Booking Agent for Small Trades Shops

<!-- Created via autonomous BMAD product-brief workflow from shortlisted idea + market research -->

---

## Executive Summary

Small trades shops — 1–3 technician HVAC, plumbing, and pest control businesses — are leaking $45,000–$120,000 per year through missed inbound calls. The owner is the technician, crawling under a house or on a rooftop when the phone rings. Solo operators miss 68–75% of calls; 2–5 person shops miss 55–65%. Emergency calls arriving after hours — the highest-margin work of the week — go to voicemail at an 82% competitor-redirect rate.

Enterprise solutions have validated the category: Avoca AI raised $125M at a $1B valuation (Kleiner Perkins, April 2026) serving HVAC and plumbing shops at $1,000–$3,500/month. Probook raised $40M from a16z + Sequoia for AI dispatch. My AI Front Desk has 10,000+ businesses on its platform. The market is proven. The problem: every category leader is building for operators with 20+ CSRs and $3M+ revenue. The 90,000+ shops with 1–3 technicians are structurally unserved.

**TradeRing** is the $99/month AI phone answering and booking agent built specifically for this gap. It answers calls 24/7 using trade-specific triage scripts — asking the HVAC, plumbing, and pest control questions that reveal true urgency — captures full lead information, fires an instant SMS summary to the owner, and books available appointments into Google Calendar or sends a callback confirmation. Setup takes 10 minutes. No contract. No setup fee. No ServiceTitan required.

The infrastructure economics are compelling: Bland AI all-in pricing of $0.09–$0.14/minute makes the 200-minute $99/month plan a 70–80% gross margin business. A $399 AppSumo LTD with a 300-minute cap has a ~$36–42 infrastructure cost and an 11x payback period.

Target: 120 MRR customers at $99/month = $11,880 MRR within 12 months. Build window: 12–18 months before Voksha expands beyond HVAC or Jobber Teammate goes standalone.

---

## Core Vision

### Problem Statement

A 1–3 technician HVAC, plumbing, or pest control shop owner cannot answer the phone while doing the job. This is not a workflow inefficiency — it is a physical impossibility. The owner is the lead technician, the dispatcher, and the salesperson. When they are in an attic diagnosing a failing heat exchanger, every call goes to voicemail. When a homeowner calls about a burst pipe at 9 PM, they call the next number on Google if voicemail picks up.

The result: 68–75% missed call rate for solo operators, $45,000–$120,000 per year in lost revenue per business, and a structural inability to grow without hiring staff the business cannot yet afford.

The solutions that exist today serve opposite ends of the market. A dedicated receptionist costs $40–50K/year — unaffordable until a business reaches $500K+ revenue. Enterprise AI platforms (Avoca, Sameday) require $449–$3,500/month, multi-week onboarding, and ServiceTitan integration. Generic AI receptionists ($20–$99/month) take messages without booking, don't understand trade vocabulary, and have no idea whether "my unit is short cycling" means call the tech immediately or schedule next week.

The 90,000+ shops with 1–3 technicians need a $99/month solution that works the way their business works: instant setup, Google Calendar integration, trade-specific triage, and an SMS in their pocket 30 seconds after every call.

### Problem Impact

**Revenue Impact (Per Business):**
- Solo operators miss 68–75% of inbound calls (Loopcall 2026 Missed-Call Cost Report, 1,200+ contractor surveys)
- Missed HVAC repair call value: $1,200–$3,500
- Missed plumbing emergency value: $800–$2,000
- After-hours calls (5 PM–8 AM): pickup rate below 18%, representing 35–45% of total inbound volume
- Annual revenue loss to missed calls per small contracting business: $45,000–$120,000

**Compounding Effects:**
- 82% of callers who reach voicemail contact a competitor without leaving a message
- Summer cooling/winter heating emergencies = 60–70% of annual HVAC revenue, arriving when all techs are deployed
- New customer acquisition is entirely dependent on first-call capture — missed calls from new prospects are permanently lost

**Market Scale:**
- ~50,000 HVAC shops with 1–3 techs
- ~40,000 plumbing shops with 1–3 techs
- ~12,000 pest control businesses with <5 employees
- **Combined addressable market: ~102,000 businesses × $1,188/year = $121M+ annual revenue potential**

### Why Existing Solutions Fall Short

| Solution | Price | Why It Fails This Segment |
|----------|-------|---------------------------|
| Avoca AI | $1,000–$3,500/mo | Requires 20+ CSRs, ServiceTitan, 4–12 week onboarding. Minimum viable customer = $3M+ revenue. |
| Sameday AI | $449–$789/mo | Best-fit product but 4.5x the target price. $449/mo entry requires 1+ emergency call/week just to break even. |
| Voksha | $49–$99/mo | HVAC-only. No plumbing or pest control triage. Missing the multi-trade value. |
| Rosie AI | $49–$149/mo | Booking only available at $149/mo tier. Generic triage — doesn't ask the right questions for trades. |
| Dialzara | $29–$349/mo | Generic — no trade vocabulary or triage logic. |
| My AI Front Desk | $20–$99/mo | 10K+ users but generic scripts for any small business. Trade callers notice immediately. |
| Shared answering service | $75–$150/mo | Offshore agents reading generic scripts. Takes messages but can't book. Doesn't know trade terminology. |
| Dedicated receptionist | $40–50K/year | Unaffordable for sub-$500K revenue shops. |

**The fundamental gap:** No product at $99/month asks "Is water actively flowing?" for plumbing, "Is anyone medically dependent on cooling?" for HVAC, or "Have you seen the insects inside or only outside?" for pest control — and combines that triage logic with instant SMS owner notification, calendar booking, and call recording in a single platform with 10-minute setup.

### Proposed Solution

**TradeRing** — the AI phone answering and booking agent built for 1–3 tech HVAC, plumbing, and pest control shops.

When a customer calls the shop's number, TradeRing answers immediately, 24/7. It identifies the trade (based on business configuration), runs through the appropriate triage script to understand urgency and gather job details, and either books an appointment into the owner's Google Calendar or captures the lead and fires an SMS summary to the owner's phone in under 30 seconds.

The owner gets a text while finishing their current job: *"New lead: Sarah at 45 Oak St, HVAC not cooling, says unit is 8 years old, wants callback today."* They can call back when they're between jobs, knowing exactly what they're calling about.

Calls are recorded and transcribed. The owner can review any call from a simple web dashboard. Setup takes 10 minutes: enter business name, choose trade type, forward the business number to the TradeRing Twilio number, connect Google Calendar or set manual availability hours.

No contract. No setup fee. Month-to-month. Works with Google Calendar — or no calendar at all.

**Pricing:**
- **Solo** — $99/month: 200 minutes, overage at $0.35/min
- **Shop** — $199/month: 500 minutes (up to 3 techs), overage at $0.30/min
- **LTD** — $399 one-time: 300 minutes/month cap (AppSumo early adopter)

### Key Differentiators

1. **Trade-specific triage across three verticals.** HVAC, plumbing, and pest control scripts built from operator research — not generic business AI scripts. The AI asks the questions a tech would ask.

2. **Instant SMS lead summary to owner.** No checking a call log app. An SMS arrives in the owner's pocket within 30 seconds of a call: name, address, problem summary, urgency level, preferred callback time.

3. **Platform-agnostic booking.** Works with Google Calendar (most common in target segment) and webhooks for Jobber/Housecall Pro users. No FSM platform required — works with a whiteboard schedule.

4. **10-minute self-serve onboarding.** The entire setup — number forwarding, trade selection, calendar connection, test call — takes 10 minutes with no support call needed.

5. **Month-to-month pricing with no setup fee.** The segment is anti-commitment. One month free to try; cancel anytime.

6. **Price point that eliminates the ROI calculation.** At $99/month, one captured emergency call pays for 9 months of service. The business case is so obvious it doesn't need to be made — it needs to be demonstrated.

---

## Target Users

### Primary Users

**Persona 1 — Mike, the Solo HVAC Owner-Operator**

*Profile:* 42-year-old HVAC owner in suburban Ohio. 18 years experience. Runs 4–6 service calls per day solo. Annual revenue: $180,000. Uses Google Calendar and his personal cell. Has considered hiring a part-time receptionist but can't justify it on current volume.

*Day in the life:* Mike starts at 7 AM, does 2 maintenance calls in the morning, an install at 11 AM that runs until 2 PM, and tries to fit in an emergency call at 4 PM. While he's under the house, his phone rings 3–4 times. He checks it after finishing — two voicemails from people who didn't leave a number, one empty voicemail, and a missed call from an unknown number. $1,800 in potential revenue, gone.

*Current workaround:* He texts customers back when he can, sometimes hours later. About half of them have already found someone else.

*Problem experience:* "I'm literally under a house when my best jobs call. I can't stop a service call to answer. But if I don't answer, they call someone else."

*What success looks like:* Getting a text while finishing the current job telling him exactly who called and what they need. Calling them back in 10 minutes with full context. Booking the job. Every call captured.

*Key purchase driver:* One peer testimonial in the HVAC Facebook group: "I stopped missing calls on jobs. Been using it 3 months, booked at least 8 calls I'd have missed." That's enough.

*Price tolerance:* $99/month without hesitation if a peer vouches. $399 LTD if presented with a no-risk framing.

---

**Persona 2 — Dave, the 2-Tech Plumbing Shop Owner**

*Profile:* 47-year-old plumbing shop owner in suburban Texas. 2 techs + himself. Annual revenue: $520,000. Uses Jobber for scheduling. Answers phones himself between jobs. Occasional shared answering service at $75/month that "takes messages but never books anything."

*Day in the life:* Dave manages dispatch while doing his own service calls. After-hours calls — broken water heaters, burst pipes — are his highest-margin work. He misses them most because he's finishing late jobs and has his hands full. His answering service takes the message but doesn't know to say "we can be there within 2 hours for emergencies."

*Problem experience:* "I pay $75 a month for someone to take messages that half my customers never read back. I miss the $2,000 emergency calls at 7 PM and find out about them at 9 PM when it's too late."

*What success looks like:* An AI that answers emergency calls appropriately ("Is water actively flowing? Can you shut off the main valve?"), communicates real urgency back to the caller, and sends Dave a priority SMS for emergency dispatching — distinct from routine booking.

*Key purchase driver:* Jobber integration. Dave will pay $199/month if TradeRing pushes booked appointments directly into his Jobber dispatch board.

*Price tolerance:* $199/month for the Shop plan. Would not pay $449/month (Sameday). Needs month-to-month.

---

**Persona 3 — Rosa, the Pest Control Route Owner**

*Profile:* 51-year-old pest control operator in Florida. 1 tech (herself) + 1 part-time. Services 35 residential accounts/week. Annual revenue: $95,000. Paper routes + basic invoicing. Relies entirely on new inbound calls for growth. 30% of her customer base is Spanish-speaking.

*Day in the life:* Rosa does routes 8 AM–4 PM. New customers call during that window — and she doesn't answer because she's actively treating properties. She loses 2–3 new leads per week this way.

*Problem experience:* "New customers call once. They don't call back. If I don't answer, I lose them forever. My routes take all day and I can't stop for every call."

*What success looks like:* Every call answered professionally. New customers booked into her schedule without her lifting a finger. A Spanish-language option for bilingual callers.

*Key purchase driver:* "Set it and forget it." She wants something that works without her having to think about it. The simpler the setup, the better.

*Price tolerance:* $99/month or $399 LTD.

### Secondary Users

**The Owner's Spouse / Office Admin (Occasional)**

In many 1–2 tech shops, a spouse or part-time admin handles some phone calls. TradeRing doesn't replace them — it handles overflow calls when no one is available. The admin benefits from having call recordings and transcripts to review, and doesn't need to be onboarded on the product directly.

**The Prospective Customer (Caller)**

The end-user of every interaction is the homeowner calling about an HVAC problem, burst pipe, or pest sighting. They don't know they're interacting with AI — they experience a clear, knowledgeable phone interaction that captures their information, answers their urgency questions, and either books them or confirms a callback. Their success metric: did someone get back to me quickly with the right information?

### User Journey

**Discovery → Onboarding → First Aha → Routine Value → Expansion**

**Discovery:**
Mike sees a post in the HVAC Business Owners Network Facebook group: "Anyone using AI answering? I'm missing too many calls." Three replies mention TradeRing with specific revenue numbers attached. He Googles "AI phone answering HVAC $99" and finds the site.

**Consideration:**
Mike reads the landing page. Clear pricing. No setup fee. "10 minutes to set up." He watches a 90-second demo video showing a real HVAC triage call. The AI asks the right questions. He tries the free 14-day trial.

**Onboarding:**
He sets up in 12 minutes: business name, selects "HVAC" from the trade dropdown, forwards his business number to the TradeRing Twilio number, connects Google Calendar, sets his unavailable hours. Does a test call — hears the AI ask the right questions. Satisfied.

**First Aha Moment (Days 1–3):**
While finishing a service call at 2 PM, his phone buzzes: "New lead: Tom at 220 Cedar Lane, AC not cooling, says unit runs but no cold air, wants callback today." He finishes the job, calls Tom back 20 minutes later, books an emergency call for 5 PM. $800 job. He would have missed this call entirely.

**Routine Value (Months 1–3):**
Mike stops worrying about calls during service jobs. He reviews his call log weekly, listens to 1–2 recordings to improve script responses. His call capture rate climbs from 25% to 85%.

**Expansion (Month 3+):**
Dave (the plumbing shop owner) hears Mike talking about TradeRing in the same Facebook group. He signs up for the Shop plan at $199/month and requests the Jobber webhook integration.

---

## Success Metrics

**The core user success metric:** The owner gets an SMS summary of a call they would have missed — and books the job. Everything else follows from that moment.

### User Success Metrics

| Metric | Target | Measurement |
|--------|--------|-------------|
| AI call completion rate | >85% | % of calls reaching a natural conclusion without caller hangup |
| Lead capture rate | >80% | % of calls where full lead info (name, address, issue, urgency) is captured |
| Booking completion rate | >60% | % of non-emergency calls where appointment is booked during the call |
| Owner SMS delivery rate | 99.9% | % of captured leads where owner SMS fires within 60 seconds |
| Setup time to first live call | <15 minutes | Time from signup to first call answered by AI |
| Time-to-aha (first captured lead) | <48 hours | Time from onboarding to first SMS received for a real call |

**The "aha moment" definition:** Owner receives an SMS for a call that came in while they were on a job. They call back within the hour, and the lead converts to a booked job. This moment drives retention — owners who experience it once rarely churn.

### Business Objectives

**Month 3:**
- 50 MRR customers
- $4,950 MRR
- AppSumo LTD: 100–200 buyers
- Gross margin: ≥65%
- Churn: <15%/month

**Month 6:**
- 100 MRR customers
- $9,900 MRR
- 5 documented case studies with specific revenue capture numbers
- NPS ≥ 40 (measured via post-90-day survey)
- Churn: <10%/month

**Month 12:**
- 200 MRR customers
- $19,800 MRR (blended avg $99/customer)
- AppSumo Select consideration (200+ reviews, 4.5+ stars)
- Churn: <7%/month
- Gross margin: ≥70%

**Month 18:**
- 400 MRR customers + upsell add-ons
- $45,000+ MRR
- Jobber and Housecall Pro native integrations live
- Trade association partnerships (ACCA, PHCC) in place

### Key Performance Indicators

**Acquisition KPIs:**
- New MRR customers per month (target: 10 by Month 1 → 25 by Month 6 → 40+ by Month 12)
- AppSumo LTD conversion rate (target: >2% of visitors during launch window)
- Community-sourced signups as % of total (target: >60% — community moat validation)
- Cost per acquired customer (target: <$30 via community channels; <$100 via paid)

**Product Health KPIs:**
- AI call completion rate: >85%
- Lead capture rate: >80%
- Owner SMS delivery rate: 99.9%
- Average calls handled per customer per month (leading indicator of stickiness)
- % of customers who hit minute cap (signals upgrade potential)

**Retention KPIs:**
- Monthly churn rate: <10% by Month 3, <7% by Month 6
- Net Revenue Retention: >100% (overage revenue + upgrades exceeding churn)
- 90-day retention rate: >75%
- Customers who've received at least 1 "aha moment" SMS: track as cohort

**Financial KPIs:**
- Infrastructure cost per customer per month: <$30 (maintains 70%+ gross margin at $99)
- LTD payback period: <15 months at $399 with 300 min/month cap
- MRR expansion from overage: track separately (price signal for tier optimization)

---

## MVP Scope

### Core Features

**Feature 1 — AI Inbound Phone Handler (Essential)**
The core product. Answers calls 24/7 on behalf of the business. Trade-specific scripts for HVAC, plumbing, and pest control — built from operator research, not generic AI prompts. Callers experience a confident, knowledgeable interaction.

*MVP scope:* Three trade scripts (HVAC, plumbing, pest control) with urgency triage. Natural-sounding AI voice (ElevenLabs or similar). Call opening with AI disclosure statement (required by CA AB 2905 and similar laws). Graceful fallback for out-of-scope questions ("I'll have the team call you back shortly").

**Feature 2 — Lead Capture & Structured Data Extraction**
The AI extracts: customer name, phone number, address, problem description, urgency level (emergency vs. standard), preferred callback time. All stored in a Postgres database tied to the business account.

*MVP scope:* Structured extraction during the call flow. Data available in the web dashboard. Lead tagged as NEW until owner reviews.

**Feature 3 — Instant SMS to Owner**
Within 30 seconds of call completion, owner receives an SMS: "[TRADE RING] New lead: [Name] at [Address]. Issue: [Problem Summary]. Urgency: [HIGH/STANDARD]. Wants callback: [Time]."

*MVP scope:* Single owner phone number per account. Twilio SMS delivery. Urgency level set by AI triage (emergency calls flagged HIGH). No app required — pure SMS.

**Feature 4 — Simple Booking Flow**
For non-emergency calls, the AI offers available appointment slots from Google Calendar and confirms a booking. For emergency calls, AI communicates urgency ("I'll make sure the team gets back to you within the hour") and flags the SMS HIGH.

*MVP scope:* Google Calendar integration via OAuth. Owner sets available appointment blocks. AI reads next 3 available slots and offers them to caller. Booked appointments create a Google Calendar event with lead details in the description.

**Feature 5 — Call Recording and Transcript**
Every call is recorded (with disclosure) and transcribed. Owner can listen to any call from the web dashboard. This is the trust-building feature — owners review early calls to validate AI quality before fully trusting it.

*MVP scope:* Twilio call recording. Transcript via Deepgram or Whisper. Stored per call in S3. Accessible from dashboard with playback. 30-day retention.

**Feature 6 — Simple Web Dashboard**
Single-page dashboard: call log (date, time, caller name, urgency, status), lead details per call, recording playback, business settings (trade type, available hours, Google Calendar link, owner SMS number).

*MVP scope:* Static React frontend. No mobile app. Responsive for phone browser viewing. Minimal — call log + settings only.

**Feature 7 — Self-Serve Onboarding (10-Minute Setup)**
Signup → Enter business name and trade type → Phone number provisioning (Twilio) → Call forwarding instructions → Google Calendar OAuth → Test call → Live.

*MVP scope:* Email + password auth. Twilio number provisioned automatically on signup. Clear call-forwarding instructions for 3 major carriers (AT&T, Verizon, T-Mobile). Test call button that places a real call to verify setup. Credit card via Stripe on signup (14-day free trial).

### Out of Scope for MVP

The following are intentionally excluded from the initial build:

- **Native Jobber / Housecall Pro integration** — Phase 2; requires API partnership and adds complexity. Google Calendar is sufficient for MVP segment.
- **Outbound follow-up calls** — Phase 2 upsell. AI that proactively calls back unbooked leads. Inbound only for MVP.
- **Multi-tenant white-label** — Not needed for direct SaaS launch.
- **Spanish/bilingual mode** — Phase 2. High potential but adds 2–3 weeks to build. Document the demand from Rosa persona as Phase 2 priority.
- **Seasonal outbound campaigns** — Phase 3. Requires customer contact list management and outbound AI flows.
- **Per-tech routing** — For 2–3 tech shops, MVP sends all leads to the owner's SMS. Routing to individual techs is Phase 2.
- **Mobile app** — Responsive web dashboard is sufficient. App adds 6+ weeks.
- **Custom voice cloning** — ElevenLabs stock voices are sufficient for MVP trust validation.
- **ServiceTitan integration** — Not the target segment. Explicitly out of scope.

### MVP Success Criteria

TradeRing MVP is considered validated when:

1. **Product health:** AI call completion rate >80% on first 500 real calls across beta customers
2. **User outcome:** ≥70% of beta users report receiving at least one "aha moment" SMS within their first 2 weeks (captured a call they'd have missed, lead converted to job)
3. **Market signal:** 50 paying customers within 60 days of public launch (AppSumo + community combined)
4. **Churn signal:** <15% monthly churn in first 90 days
5. **Revenue signal:** $3,000+ MRR by Month 2

These gates inform the decision to invest in Phase 2 (Jobber integration, bilingual, outbound follow-up).

### Future Vision

**Phase 2 (Months 3–6): Depth and Integration**
- **Jobber and Housecall Pro native sync** — Push booked appointments directly to dispatch board; pull real-time availability. Unlocks 2–3 tech shop segment more fully.
- **Spanish/English bilingual mode** — AI switches language based on caller preference. Targets Sun Belt HVAC and pest control markets where 25–35% of customers are Spanish-speaking.
- **Per-tech routing** — For shops with 2–3 techs, route leads and bookings to the right person based on availability and skill.
- **Outbound follow-up add-on ($29–49/mo)** — AI calls back unbooked estimates and open quotes 24–48 hours later. Early data from Probook shows outbound follow-up sequences can 2x estimate conversion.

**Phase 3 (Months 6–12): Expansion and Upsells**
- **Seasonal outbound campaigns** — AI calls maintenance agreement customers ahead of HVAC season. Automated "your AC tune-up is due" campaigns.
- **Additional trade verticals** — Pool service, lawn care, gutter cleaning. Same triage-script model, new verticals.
- **Review request automation** — AI sends SMS review request 24 hours after job completion, links to Google profile.
- **AppSumo Select** — If LTD launch achieves 200+ reviews at 4.5+ stars.

**Phase 4 (Year 2+): Platform Ambition**
- **Trade AI platform** — Full-lifecycle AI: inbound booking → status updates → invoice delivery → review request → renewal reminder. The AI handles the entire customer communication lifecycle.
- **Two-sided matching (moonshot)** — AI identifies overflow demand (shops at capacity) and matches calls to nearby available shops. Revenue share model.
- **Enterprise tier** — As customer base and review history grows, approach medium-sized shops (4–8 techs) with a higher-tier product at $299–$399/month. This is the natural Avoca-adjacent migration path.

**The long-term vision:** TradeRing becomes the operating system for customer communication at small trade shops — the product that HVAC, plumbing, and pest control operators recommend to each other as the first tool you add when you start a business, and the last tool you cancel because everything runs through it.

---

## Go-to-Market Strategy

### Channels (Priority Order)

1. **AppSumo LTD launch** — Initial burst of users, upfront capital, social proof via reviews. Target: 150–300 LTD buyers at $399 in the first 2 weeks. Headline: "Never miss a $2,000 emergency call again."

2. **Facebook Trade Groups** — HVAC Business Owners Network (50K+ members), Plumbing Business Owners. Post with founder story and real metrics after beta. No paid ads — organic post with social proof hook.

3. **Reddit Communities** — r/sweatystartup, r/HVAC (400K+ members), r/ProHVACR, r/Plumbing. AMA-style post: "I built this because my plumber lost $9,000 in one week to missed calls."

4. **YouTube Trade Channels** — Partnership with HVAC Know It All (2M subs), AC Service Tech (590K subs). Product demo showing real call flow. Affiliate commission on referred signups.

5. **Trade Associations (Phase 2)** — ACCA (HVAC), PHCC (plumbing), NPMA (pest control). Sponsored listing in member directory. Credibility signal for the most skeptical buyers.

### Distribution Sequencing

- **Weeks 1–4:** Build + beta test with 5 HVAC shops from Reddit/Facebook (free 30-day access)
- **Weeks 5–6:** Launch prep, AppSumo application, documentation
- **Weeks 7–8:** AppSumo launch + simultaneous community posts
- **Months 2–6:** MRR growth via community distribution
- **Months 6–12:** YouTube partnerships, trade association outreach, Jobber integration launch

---

## Risk Assessment

### Risk 1 — API Cost Variability (HIGH IMPACT / MEDIUM PROBABILITY)
Voice AI infrastructure pricing (Retell, Bland, Vapi) can change. If wholesale costs double, $99/month gross margin erodes.

**Mitigation:** Minute caps on all plans. Overage charges at 3–4x infrastructure cost provide buffer. Multi-provider architecture (Bland primary, Retell fallback) — never locked to one vendor.

### Risk 2 — Competitor Entry at SMB Tier (HIGH IMPACT / MEDIUM PROBABILITY)
Voksha expanding to plumbing/pest, Sameday launching sub-$199 tier, or Jobber Teammate going standalone could compress the advantage within 12–18 months.

**Mitigation:** Community moat beats product moat at early stage. Build brand in r/HVAC and Facebook trade groups before any competitor does. The product that trade owners recommend to other trade owners survives competitive entry.

### Risk 3 — Call Recording Regulatory Exposure (MEDIUM IMPACT / HIGH PROBABILITY)
12 states require all-party consent for call recording. California AB 2905 mandates AI disclosure with $500/violation fines.

**Mitigation:** Default opening disclosure on every call: "Hi, this is [Business Name]'s AI assistant. This call may be recorded for quality purposes. How can I help?" Satisfies all-party consent states and AI disclosure requirements. Telecoms attorney review before launch.

### Risk 4 — Low Conversion from LTD to MRR (MEDIUM IMPACT / MEDIUM PROBABILITY)
AppSumo LTD buyers may not convert to MRR plans as minute caps tighten.

**Mitigation:** Design the LTD tier to demonstrate value — not to maximize LTD revenue. LTD buyers who regularly hit the 300-minute cap naturally request higher-tier MRR. Offer "LTD to MRR" upgrade at $50/month loyalty discount.

---

## Technology Stack

| Component | Provider | Cost |
|-----------|---------|------|
| Voice AI | Bland AI (primary), Retell AI (fallback) | $0.09–$0.14/min all-in |
| Phone numbers | Twilio | $1/mo/number |
| SMS notifications | Twilio | ~$0.008/SMS |
| Call recording | Twilio built-in | Included |
| Transcription | Deepgram or Whisper | ~$0.0059/min |
| Database | Postgres (Railway or Supabase) | $5–$20/mo |
| Calendar integration | Google Calendar API | Free |
| Auth + payments | Supabase Auth + Stripe | ~$0/mo at early stage |
| File storage (recordings) | AWS S3 | ~$0.023/GB |

**Infrastructure cost at $99/mo plan (200 min/mo):** ~$20–$30/month → **70–80% gross margin**

**Build timeline:** 2–4 weeks to working MVP with a solo developer.

---

## Appendix: Competitive Positioning Map

```
                    HIGH TRADE SPECIFICITY
                           |
    Avoca AI               |           Sameday AI
    $1K–$3.5K/mo           |           $449–$789/mo
    (enterprise)           |           (mid-market)
                           |
LOW PRICE ─────────────────────────────────────── HIGH PRICE
                           |
    Voksha $49–$99/mo      |    ★ TRADERING $99–$199/mo ★
    (HVAC only)            |    Full trades triage + booking
                           |    UNOCCUPIED
    Dialzara $29/mo        |
    Rosie $49/mo           |
    (generic)              |
                    LOW TRADE SPECIFICITY
```

TradeRing occupies the unoccupied quadrant: high trade specificity (HVAC + plumbing + pest) at a price the target segment will actually pay. This is the market position no incumbent holds today.

---

*Product Brief generated: 2026-10-19*
*Source: ideas/shortlisted/ai-voice-booking-trades.md + market research (2026-10-18)*
*BMAD workflow: create-product-brief (steps 1–6 complete)*
