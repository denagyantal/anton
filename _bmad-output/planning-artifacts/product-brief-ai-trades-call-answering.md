---
stepsCompleted: [1, 2, 3, 4, 5, 6]
inputDocuments: ["ideas/shortlisted/ai-trades-call-answering.md"]
workflowType: product-brief
lastStep: 6
project_name: ai-trades-call-answering
user_name: Root
date: 2026-10-03
author: Root
---

# Product Brief: AI Call Answering for Trades (After-Hours Lead Capture)

---

## Executive Summary

Trade contractors — HVAC technicians, plumbers, and electricians — are losing $45,000–$120,000 in annual revenue because they physically cannot answer their phones while on-site. Industry data from 130,175 analyzed calls shows 74.1% of trade calls go unanswered, with after-hours emergency calls (worth $1,400+ each) seeing a pickup rate below 18%. Voicemail fails these businesses: 82% of callers who hit voicemail immediately contact a competitor.

The $63M+ in 2025–2026 VC funding (Probook $40M, Netic AI $23M) confirms this is a real, large market — but funded solutions are priced at $199–$600+/month and require full FSM platform migrations, structurally excluding the 300,000+ small trade shops that make up the majority of the market.

Generic AI receptionists ($49/month) exist but are not trade-specific: they ask "How can I help?" instead of "Is water actively flowing? Can you shut off the main?" That triage gap is the entire product.

**The opportunity**: A standalone, trade-specific AI phone agent at $49–$99/month that handles after-hours calls, asks the right triage questions for each trade, books appointments, and texts job details to the operator. No FSM migration required. 2-minute setup. The first captured emergency call pays for months of service.

**Target**: $10K MRR within 12 months via community-driven acquisition (r/HVAC, r/plumbing, Facebook trade groups) and an AppSumo LTD launch.

---

## Core Vision

### Problem Statement

HVAC technicians, plumbers, and electricians are physically on-site when emergency calls arrive — under a crawlspace, on a rooftop, inside an electrical panel. They cannot answer the phone. When a homeowner's pipes burst at 10 PM, they call three contractors and hire the first one who picks up. The contractor who was busy on another job just lost a $1,800 job to a competitor who happened to be available.

This is not a management or technology adoption failure — it is the structural reality of trade work. Every missed emergency call is $500–$2,000 in direct revenue loss and often a permanent customer relationship transferred to a competitor.

Current "solutions" don't work:
- **Voicemail**: 82% of emergency callers don't leave a message — they call the next contractor
- **Human answering services** ($800–$2,000/month): Expensive, not trade-specific, unsustainable for a 1–3 person shop
- **Full AI platforms** (Probook, Netic AI, Podium): Require $199–$600+/month and complete FSM migration — inaccessible to the majority of trade businesses
- **Generic AI receptionists** (Goodcall, Hey Rosie, Marlie.ai): Don't know trade triage logic — asking "How can I help?" damages credibility in a high-stakes emergency call

### Problem Impact

**Quantified revenue loss** (industry data from 130,175+ calls analyzed):
- Solo HVAC operators: miss 68–75% of inbound calls; lose $45,000–$176,800/year
- Solo plumbers: lose $67,600–$135,200/year to missed calls
- Electricians: lose $78,000–$156,000/year
- After-hours pickup rate: below 18% despite 35–45% of all inbound calls arriving after hours
- Average missed emergency job value: $1,400 (HVAC), $800–$2,000 (plumbing), $600–$1,500 (electrical)

**The ROI math is unambiguous**: capturing one emergency call per month at $800 average generates $9,600/year against a $588/year software cost at $49/month. The product pays for itself 16x over.

**Emotional impact**: The "Burned-by-Voicemail" buyer has a vivid memory of a specific lost job. This is not abstract software ROI — it's a wound. The testimonial "I used to lose jobs every weekend; now I wake up to a job ticket in my inbox" converts this buyer instantly.

### Why Existing Solutions Fall Short

| Solution | Why It Fails for SMB Trades |
|----------|---------------------------|
| Voicemail | 82% of callers don't leave messages; zero active engagement |
| Human answering services (Ruby, AnswerConnect) | $800–$2,000/month; not trade-specific; financially unsustainable for 1–3 person shops |
| Probook / Netic AI | Custom enterprise pricing (~$199–$300+/month); requires full FSM migration; 41-day average deployment; designed for 10+ tech operations |
| Podium | $399–$600+/month after add-ons; annual contracts with cancellation penalties; overwhelming complexity for solo operators |
| Generic AI receptionists (Goodcall, Hey Rosie, Marlie.ai) | $49–$249/month but generic: no HVAC triage, no plumbing emergency logic, no electrical safety questions; "How can I help?" is not acceptable for a burst pipe at midnight |
| Trillet | $49/month with partial trade awareness (emergency detection only) — doesn't ask the right follow-up triage questions per trade |

**The core gap**: A standalone, affordable ($49–$99/month), trade-specific AI phone agent with deep triage logic does not exist. Every contractor who experiences this problem acutely has nowhere to go.

### Proposed Solution

A trade-specific AI phone agent that small trade shops can activate in 2 minutes by forwarding their calls to a dedicated virtual number (Twilio). The AI answers in their name, runs through trade-specific triage scripts, books appointments into their existing calendar, and sends an immediate SMS job summary to the operator.

**What makes it different from everything else**:

The AI asks the questions a real dispatcher would ask — not "How can I help?" but:
- **Plumbing**: "Is water actively flowing? Can you locate the main shutoff valve? Is there visible damage to the pipe or fixture?"
- **HVAC**: "Is this a heating or cooling failure? Is anyone medically dependent on climate control? What's the make and model of your system if you know it?"
- **Electrical**: "Is there any burning smell or sparking? Are your breakers tripping? Is power out in the whole house or just part of it?"

This triage logic determines emergency vs. standard routing, gives the operator actionable information before calling back, and sounds like a trained dispatcher — not a generic chatbot.

**Setup**: Forward your existing business number to the provided virtual number. Live in under 5 minutes. Works alongside any existing calendar or CRM — no migration required.

### Key Differentiators

1. **Trade-specific triage scripts** — The only affordable product that asks the right questions for HVAC, plumbing, and electrical emergencies. This is the moat: domain knowledge embedded in conversational logic that generic platforms will not build for a single vertical.

2. **Standalone deployment** — Works with Google Calendar, any FSM platform, or no platform at all. Requires zero migration, zero onboarding calls, zero new software to learn. The operator forwards a phone number and is live.

3. **Affordable pricing** — $49–$99/month vs. $199–$600+/month for bundled platforms. Accessible to the 1–3 person shops that make up ~90% of all trade businesses.

4. **2-minute setup, SMS-push everything** — Forward your number; receive SMS job summaries for every handled call. No dashboard to monitor, no reports to generate, no maintenance. It runs silently and texts you when something needs attention.

5. **Emergency escalation logic** — High-urgency calls (burst pipe, HVAC failure in extreme heat, sparking electrical) trigger immediate operator notification with urgency flag, not a next-day appointment slot.

---

## Target Users

### Primary Users

#### Persona 1: Mike — Solo HVAC Technician

**Background**: Mike is 42, runs his own HVAC business solo. He does installs, repairs, and maintenance across a 25-mile radius. Annual revenue: ~$280K. He uses Google Calendar and QuickBooks. He tried Housecall Pro for 3 months and cancelled because he "never had time to learn it."

**Daily reality**: Mike is under equipment 6–8 hours a day. He checks his phone during lunch and at end of day. He knows he misses calls — he hears the voicemails later — but he has no solution that doesn't cost him $200/month or require him to become a software admin.

**Problem experience**: "Last August I missed an emergency AC call during a heat wave. Found out later the customer called me first, then called a competitor who answered. That was a $2,200 job. I still think about it."

**Success for Mike**: He wakes up to an SMS that says "Emergency AC call handled 11:43 PM — customer Sarah T., house at 142 Oak Street. System not cooling, says it's 88 degrees inside. Booked for 7 AM tomorrow. Customer has an elderly parent." He shows up prepared and closes the job.

**Willingness to pay**: $49/month without question if the demo call sounds professional. Would consider $299 LTD to avoid monthly anxiety.

---

#### Persona 2: Dave — Owner of a 3-Tech Plumbing Shop

**Background**: Dave is 50, runs a plumbing business with himself and two apprentices. Annual revenue: ~$900K. He has an office manager (part-time, 9–5 only) and uses ServiceTitan but admits "we barely scratch the surface of what it does."

**Daily reality**: Dave is in the field most days. After-hours calls go to his cell phone, which he often can't answer. His office manager fields daytime calls but 40% of his emergency revenue comes from after-hours. He's tried a human answering service ($1,200/month) but they "didn't know what questions to ask" and he got useless messages like "man says pipe is broken, wants a call back."

**Problem experience**: "The answering service gives me a name and number. By the time I call back, they've found someone else. I need to know if there's active flooding happening — that's an emergency and I need to drive there now. A slow drip can wait till morning."

**Success for Dave**: The AI fields after-hours calls, distinguishes emergencies from routine issues, routes emergencies to his cell immediately, and queues routine calls for 8 AM booking. ServiceTitan webhook integration (Pro plan) logs jobs automatically.

**Willingness to pay**: $79–$99/month. Wants multi-line support and potential ServiceTitan integration.

---

#### Persona 3: Carmen — Electrical Contractor (Solo + 1 Apprentice)

**Background**: Carmen is 35, licensed electrician, runs a 2-person operation in a mid-size city. She focuses on residential service calls and small commercial. Annual revenue: ~$420K. Uses Google Calendar.

**Daily reality**: Carmen gets 15–25 inbound calls per day. She misses about 30% while on-site. Electrical emergencies (sparking panels, burning smells, tripping breakers) are her highest-value jobs and highest urgency — she needs to know when a situation is dangerous, not just inconvenient.

**Problem experience**: She's worried a generic AI will tell a customer to "wait until the next available slot" when there's a sparking panel — which is a fire risk. She needs the AI to know the difference.

**Success for Carmen**: The AI screens electrical calls, identifies safety emergencies (sparking, burning smell → immediate escalation), and books non-emergency calls into her Google Calendar. She receives an SMS with urgency level and caller details for every handled call.

**Willingness to pay**: $49/month. Tech-forward compared to Mike or Dave — might onboard within minutes of seeing a demo.

---

### Secondary Users

**Office Managers / Dispatchers** (2–5 tech shops): They receive the AI's job summaries and handle booking confirmation. They interact with the dashboard (call log, transcripts, minute usage) rather than the voice AI itself. Key need: visibility into what the AI handled overnight, editable notes on call transcripts.

**Bookkeepers/Accountants**: Minimal interaction — they benefit indirectly from increased revenue capture but don't directly use the product.

### User Journey

**Discovery**:
Mike sees a post in r/HVAC: "Set this thing up last month. Booked a $1,600 AC emergency at 11 PM while I was asleep. Costs me $49/month." He clicks the link. Alternatively, he Googles "AI answering service for HVAC contractors" after losing a job and finds the landing page.

**Evaluation (15–30 minutes)**:
Mike visits the landing page. He watches a 90-second demo call video — he hears the AI answer with his business name, ask the right triage questions, and text a job summary. Price: $49/month. He calculates: one emergency job = 34 months paid. He signs up.

**Onboarding (under 5 minutes)**:
Mike enters his business name, trade type (HVAC), and phone number. He gets a virtual phone number. He sets his call forward in his iPhone settings. The setup guide takes 3 minutes. He sends a test call.

**Core usage (ongoing, invisible)**:
The AI runs silently. Mike gets SMS job summaries as they happen. He checks a simple dashboard weekly to review transcripts and minute usage. Churn driver here is zero — the tool is invisible and capturing jobs.

**Aha moment**:
First captured emergency call. Mike sees an SMS at 1 AM: "HVAC emergency handled — customer is booking for first thing tomorrow. They have an elderly parent and it's 91°F inside." He texts his apprentice to clear the morning. He closes the job at 9 AM for $1,900. He tells three contractor friends about it that week.

**Long-term behavior**:
Mike never turns it off. He adds electrical triage (secondary trade he does on the side). He refers Dave. He posts in r/HVAC. He upgrades to Pro ($99/month) when he hires a second tech and needs multi-line support.

---

## Success Metrics

### User Success Metrics

| Metric | Description | Target (Month 12) |
|--------|-------------|-------------------|
| Calls handled successfully | Calls where the AI completed triage and either booked a job or sent a qualified lead SMS | >85% of handled calls |
| Emergency triage accuracy | Calls correctly classified as emergency vs. routine | >92% accuracy |
| Time to first captured job | Days from signup to first job booked by AI | Median ≤ 3 days |
| Setup completion rate | % of signups who complete call forwarding and test call | >80% within 24 hours |
| "Aha moment" conversion | % of users who have a job booked by AI within 7 days | >60% of active users |
| Operator satisfaction (CSAT) | Post-call operator rating of AI summary quality | >4.3/5 |

**The core user success signal**: An operator receives an SMS for a job they would otherwise have missed, confirms it was handled correctly, and that job converts. This single event creates loyal, vocal customers.

### Business Objectives

**12-Month Primary Objective**: $10,000 MRR from subscription customers

**Supporting Objectives**:
- Establish brand recognition as the go-to trade-specific AI answering product in r/HVAC and r/plumbing communities before FSM platforms bundle basic AI answering (~12–18 month window)
- Complete AppSumo LTD launch generating $60K–$150K one-time revenue and 50+ reviews (month 3)
- Achieve gross margins of 65%+ at scale (infrastructure cost trajectory supports this)
- Build community-driven CAC under $30 (avoiding paid acquisition dependency)
- Establish triage script library for HVAC, plumbing, electrical as proprietary domain moat

### Key Performance Indicators

| KPI | Month 3 | Month 6 | Month 12 |
|-----|---------|---------|---------|
| Paying MRR subscribers | 30 | 100 | 204+ |
| MRR | $1,470 | $4,900 | $9,996+ |
| LTD sales (AppSumo) | — | 200 | 500 |
| Monthly calls handled (platform total) | 1,500 | 7,500 | 20,000+ |
| Avg. calls handled per customer/month | 50 | 75 | 100 |
| Monthly churn rate | <5% | <4% | <3% |
| Gross margin per customer | 55% | 65% | 70%+ |
| CAC (blended) | <$50 | <$35 | <$30 |
| Reddit/community organic mentions/month | 5 | 15 | 30+ |
| AppSumo rating | — | ≥4.5 | ≥4.7 |
| NPS | — | 40+ | 50+ |

**Leading indicators to watch**:
- Setup completion rate within 24 hours (predicts activation)
- First job captured within 7 days of signup (predicts retention)
- Organic community mentions (predicts viral acquisition)
- Per-minute overage usage (predicts upsell/upgrade)

**Decision gates**:
- If <30 paying customers by Month 3: investigate setup friction, triage accuracy, and pricing
- If AppSumo LTD generates <100 sales: audit messaging and demo quality before scaling paid acquisition
- If gross margin falls below 50%: audit per-minute infrastructure costs and LTD usage caps

---

## MVP Scope

### Core Features

The MVP is a focused, 4-component system that solves one problem: a contractor misses a call, the AI handles it professionally, the contractor gets a job summary and a booked appointment.

**Component 1: Virtual Phone Number + Call Routing (Twilio)**
- Dedicated virtual phone number per account (US area code of operator's choice)
- Call forwarding: operator directs their existing number to the virtual number (or uses virtual number directly)
- Call routing modes: always-on AI answering, after-hours only (configurable hours), overflow-only (rings operator first, AI picks up after X rings)
- Call recording and transcript storage (30-day retention)

**Component 2: Trade-Specific AI Voice Agent (Retell AI or Vapi)**
- Answers in the operator's business name: "Thanks for calling [Mike's HVAC], this is the assistant — how can I help you today?"
- Three complete triage script flows at launch: HVAC, Plumbing, Electrical
- Emergency detection: identifies high-urgency situations and routes to escalation flow
- Standard booking flow: collects caller name, phone, address, preferred time, job description
- Graceful fallback: if confidence is low or call goes off-script, AI says "Let me have [Mike] call you right back" and ends gracefully
- AI disclosure: compliant with FCC and state AI disclosure requirements (caller informed they're speaking with an AI assistant)

**Component 3: Operator Notification (SMS + Email)**
- Immediate SMS to operator after every handled call: caller name, phone, address, urgency level, summary of issue, next action (booked appointment or follow-up needed)
- Email backup with full transcript
- Urgency flags: [EMERGENCY] prefix for high-urgency calls requiring same-day or immediate response

**Component 4: Google Calendar Integration**
- AI books appointments directly into operator's Google Calendar
- Sends customer confirmation SMS with appointment time and operator name
- Buffer logic: respects operator's calendar availability, doesn't double-book
- Reschedule link in confirmation SMS (handled via simple Calendly-style logic)

**Simple Admin Dashboard (web)**:
- Call log with transcripts and audio playback
- Minute usage tracker (vs. plan limit)
- Triage script customization (add custom phrases, business-specific info like service area or pricing)
- On/off toggle and call routing mode configuration

**Pricing at Launch**:
- **Starter**: $49/month — 200 min/month, 1 trade type, Google Calendar, SMS job summary
- **Pro**: $99/month — 500 min/month, 3 trade types, multi-line, emergency escalation calls, basic CRM webhook
- **LTD (AppSumo)**: $299 one-time — 200 min/month ongoing, Starter features, credit top-ups at $0.25/min above baseline

### Out of Scope for MVP

These features are explicitly deferred to preserve focus and achieve the 2–4 week build target:

| Deferred Feature | Rationale | Target Phase |
|-----------------|-----------|-------------|
| ServiceTitan / Housecall Pro native integration | Requires complex API partnership; most solo operators don't use FSM platforms | Phase 2 (Month 3–6) |
| Outbound AI calling (review requests, quote follow-up) | Same infrastructure but separate product motion; distracts from core answering use case | Phase 3 |
| Spanish-language triage | High value for Sun Belt markets but requires separate voice/TTS configuration | Phase 2 |
| Roofing and pest control triage scripts | Adjacent verticals; HVAC/plumbing/electrical are highest-volume and most validated | Phase 2 |
| Multi-location / franchise accounts | Needed for regional HVAC/plumbing franchises but adds billing and account complexity | Phase 3 |
| Mobile app | Web dashboard + SMS push covers all operator needs; mobile app adds development cost without clear MVP value | Phase 3 |
| AI voice customization (custom voice cloning) | Nice differentiator but not a purchase driver for trades operators in MVP stage | Future |
| AI chat / text answering (SMS/web chat) | Distinct product surface; voice is the primary channel for emergency trades calls | Phase 3 |
| Stripe invoicing / payment collection on call | High complexity; contractors don't expect to pay on first contact | Future |

### MVP Success Criteria

The MVP is successful when the following gates are reached:

**Technical Validation** (Month 1, Beta):
- AI completes HVAC and plumbing triage calls without human intervention in >85% of test calls
- Emergency vs. routine classification accuracy >90% in blind testing
- Google Calendar booking works end-to-end without manual intervention
- SMS job summaries delivered within 30 seconds of call end

**Market Validation** (Month 2, Soft Launch):
- 20+ paying customers at $49/month acquired via organic community channels only
- At least 5 customers report a real job captured by the AI (validated via transcript review)
- Net Promoter Score > 35 from early users
- No customer churning due to AI triage quality failures

**Business Validation** (Month 3, Pre-AppSumo):
- Gross margin per customer confirmed at >50% (tracking actual Twilio + Retell AI costs)
- CAC via organic Reddit/Facebook channels confirmed < $50
- At least 3 authentic testimonials with specific job capture stories
- AppSumo submission approved

**Go/No-Go for Scale (Month 4)**:
- AppSumo launch generates 100+ LTD sales within 30 days
- MRR growth rate 15%+ month-over-month
- Churn rate below 5%/month

### Future Vision

In 18–24 months, the product evolves from a call answering tool into the AI front office for independent trade businesses:

**Phase 2 (Months 4–12): Vertical Depth**
- Add roofing, pest control, and landscaping triage scripts (same miss-call problem, same economics)
- Spanish-language triage for HVAC and plumbing (Sun Belt market expansion)
- ServiceTitan and Housecall Pro native integration for 2–5 tech shops
- Emergency severity scoring (5-point scale) with configurable escalation rules

**Phase 3 (Months 12–24): Outbound AI**
- Outbound review request calls: "Hi, this is [Mike's HVAC] following up on your service visit last week — do you have 30 seconds to share your experience?"
- Quote follow-up: AI calls back unbooked leads after 48 hours
- Maintenance reminder outbound calls for HVAC seasonal scheduling
- Missed call follow-up: AI proactively calls back missed numbers within 5 minutes

**Long-term (2–3 years): AI Front Office Platform**
- Full AI front-office product for 1–10 tech trade businesses
- Integrations with all major FSM platforms (ServiceTitan, Jobber, Housecall Pro, Workiz)
- Multi-language support (Spanish, Portuguese for US markets)
- Franchise/multi-location accounts with centralized management
- Predictive demand: AI alerts operator to increase after-hours capacity during weather events, HVAC season peaks
- Equipment history integration: if customer mentions system model, AI retrieves prior service history from operator's records

The long-term vision is that this product becomes the invisible infrastructure every small trade business relies on — as expected as having a business phone number. The moat at that stage is not voice AI (commoditized) but the triage knowledge base, community trust, and integrations built over the critical 18-month first-mover window.

---

## Technical Approach (MVP Architecture)

**Infrastructure Stack**:
- **Voice AI**: Retell AI (recommended: $0.07–$0.08/min, strong API, tested trades performance) or Vapi ($0.05/min base)
- **Telephony**: Twilio (virtual numbers, call routing, SMS delivery)
- **LLM**: Claude Haiku or GPT-4o-mini for triage reasoning (low latency, low cost)
- **Calendar**: Google Calendar API (OAuth-based integration per account)
- **Backend**: Node.js or Python; simple REST API; Postgres for call/account data
- **Hosting**: Railway or Render (low ops overhead for solo founder)

**Unit Economics at Launch**:

| Component | Cost/minute | 200 min monthly COGS |
|-----------|------------|---------------------|
| Retell AI | $0.075 | $15.00 |
| Twilio (voice + SMS) | $0.011 | $2.20 |
| LLM (Haiku) | $0.012 | $2.40 |
| **Total blended** | **$0.098** | **$19.60** |
| Revenue (Starter $49/mo) | — | $49.00 |
| **Gross margin** | — | **~60%** |

At 200 customers and 100K minutes/month with volume discounts: gross margin reaches 70%+.

**Build Timeline (2–4 weeks)**:
- Week 1: Retell AI voice agent setup, Twilio integration, HVAC triage script v1
- Week 2: Plumbing + electrical triage scripts, SMS job summary, Google Calendar booking
- Week 3: Admin dashboard (call log, transcript, usage), account management, billing (Stripe)
- Week 4: Beta testing with 10 operators, edge case refinement, AppSumo preparation

---

## Go-to-Market Strategy

**Phase 1 — Beta (Weeks 1–4)**:
- Recruit 10–20 beta users from r/HVAC and r/plumbing with free 60-day access in exchange for feedback
- Collect real call transcripts; identify and fix failure modes
- Build 3–5 authentic testimonials with job-captured stories

**Phase 2 — Soft Launch (Month 2)**:
- Landing page live with demo call recording embedded (HVAC emergency scenario)
- $49/month Starter + 14-day free trial
- Organic posts in r/HVAC, r/plumbing, r/hvacpeople: "Built this for contractors who miss after-hours calls — feedback welcome"
- Target: 20–30 paying customers before AppSumo submission

**Phase 3 — AppSumo LTD (Month 3)**:
- LTD pricing: $299 (Tier 1), $499 (Tier 2 — Pro features, multi-line), $799 (Tier 3 — agency/reseller)
- Target: 200+ LTD sales within 30 days
- AppSumo review generation: target 50+ reviews, 4.5+ star average
- Use AppSumo cohort as social proof for ongoing MRR conversion

**Phase 4 — MRR Growth (Months 4–12)**:
- SEO content: 20+ articles targeting "AI answering service for HVAC," "plumber after-hours answering service," "electrician missed call AI"
- YouTube outreach: 10 HVAC/plumbing business YouTube channels (demo video, affiliate arrangement)
- ACCA and PHCC conference presence (networking, not exhibitor)
- Reddit community organic engagement: answer real questions, share real data, no spam

**Target Channels**:

| Channel | Members/Reach | Role |
|---------|--------------|------|
| r/HVAC | 147,000+ | Primary acquisition (organic posts, AMAs) |
| r/plumbing | 85,000+ | Primary acquisition |
| r/hvacpeople | 65,000+ | Secondary — more contractor-focused |
| r/electricians | 120,000+ | Secondary acquisition |
| Facebook: "HVAC Business Owners" | 45,000+ | High-intent buyers, direct outreach |
| Facebook: "Plumbing Contractor Network" | 30,000+ | Secondary acquisition |
| AppSumo | Broad SaaS buyer audience | LTD launch channel |
| Google (SEO) | — | Long-term organic |

---

## Risk Register

| Risk | Probability | Impact | Mitigation |
|------|------------|--------|-----------|
| Probook/Netic AI launches $49/mo SMB tier | Low (12-month horizon) | High | Build community brand and triage moat before enterprise players can respond; community trust takes time to replicate |
| Voice AI quality failures on real calls | Medium | High | Extensive triage script testing; "escalate to operator" fallback for any uncertain call; AI disclosure upfront sets expectations |
| Infrastructure costs erode LTD profitability | Medium | Moderate | Per-minute overage caps on LTD plans; monitor COGS per customer monthly; volume discounts at 500+ customers |
| FSM platforms bundle AI answering at $0 | High (18–24 month horizon) | Moderate | Target customers NOT on FSM platforms first; standalone positioning is the product for this segment permanently |
| Generic AI receptionists add trade triage | Low (12-month horizon) | Moderate | Community brand, testimonials, and triage depth are the moat; horizontal platforms avoid vertical customization |
| Regulatory changes (AI disclosure laws) | Low-Medium | Low-Moderate | Build AI disclosure into all triage scripts proactively; monitor FCC and state-level rules quarterly |

---

## Product Brief Completion

**Document**: `/home/anton/research-team/_bmad-output/planning-artifacts/product-brief-ai-trades-call-answering.md`
**Completed**: 2026-10-03
**All workflow steps completed**: Steps 1–6

**What this brief covers**:
- Executive summary with market validation and opportunity sizing
- Core vision: problem, impact, why solutions fail, proposed solution, key differentiators
- Three detailed user personas (Mike the solo HVAC tech, Dave the 3-person plumbing shop, Carmen the electrical contractor)
- User journey from discovery through aha moment
- Quantified success metrics, business objectives, and 12-month KPI targets
- MVP scope: 4 core components with explicit out-of-scope boundaries
- Technical architecture and unit economics
- Future vision through 2–3 year horizon
- Go-to-market strategy with channel breakdown
- Risk register with mitigations

**Recommended next step**: `create-prd` — the PRD workflow builds directly on this brief to produce detailed feature requirements, acceptance criteria, and technical specifications ready for architecture and implementation.
