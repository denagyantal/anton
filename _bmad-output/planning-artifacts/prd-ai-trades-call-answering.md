---
stepsCompleted: [1, 2, 2b, 2c, 3, 4, 5, 6, 7, 8, 9, 10, 11]
inputDocuments:
  - ideas/shortlisted/ai-trades-call-answering.md
  - _bmad-output/planning-artifacts/product-brief-ai-trades-call-answering.md
workflowType: prd
classification:
  projectType: saas_b2b
  domain: field_service_management
  complexity: medium
  projectContext: greenfield
documentCounts:
  briefCount: 1
  researchCount: 0
  brainstormingCount: 0
  projectDocsCount: 0
project_name: ai-trades-call-answering
date: '2026-10-03'
author: Root
---

# Product Requirements Document — TradeCall AI

**Author:** Root
**Date:** 2026-10-03
**Product:** TradeCall AI — Trade-Specific AI Phone Agent for After-Hours Lead Capture

---

## Executive Summary

Trade contractors — HVAC technicians, plumbers, and electricians — lose $45,000–$176,800 in annual revenue because they physically cannot answer calls while on-site. Industry data from 130,175+ analyzed calls shows 74.1% of trade calls go unanswered, with after-hours emergency calls (worth $1,400+ average) seeing a pickup rate below 18%. The market has validated AI call answering as a flagship feature: Probook ($40M), Netic AI ($23M), and Podium all include it — but at $199–$600+/month bundled into FSM platforms that 90% of small trade shops will never adopt.

**TradeCall AI** is a standalone, trade-specific AI phone agent priced at $49–$99/month. It answers calls in the operator's business name, runs through deep trade triage (HVAC, plumbing, electrical), detects emergencies using rule-based keyword logic, books appointments into Google Calendar, and pushes an SMS job summary to the operator within 30 seconds of every handled call. Setup is a call forward — live in 2 minutes, zero FSM migration required.

The ROI math is unambiguous: one captured $800 emergency call pays for 16 months of service at $49/month. The target: $10K MRR within 12 months via community acquisition (r/HVAC, r/plumbing, trade Facebook groups) and an AppSumo LTD launch at Month 3.

### What Makes This Special

Three genuine differentiators separate TradeCall AI from every existing option:

**1. Trade-specific triage intelligence, not generic chatbot.** Every competitor either (a) charges $199–$600+/month for full platforms, or (b) offers generic AI that asks "How can I help?" TradeCall AI asks the questions a trained dispatcher would ask. For plumbing: "Is water actively flowing? Can you locate the main shutoff valve?" For HVAC: "Is this heating or cooling failure? Is anyone medically dependent on climate control?" For electrical: "Is there any burning smell or sparking? Are breakers tripping?" This triage logic determines emergency vs. standard routing, gives operators actionable pre-call context, and sounds like a professional dispatcher — not a bot. This is the moat: domain knowledge embedded in conversational logic that horizontal platforms will not build for a single vertical.

**2. Standalone deployment, 2-minute setup.** Every competing trade-specific solution requires a full FSM platform migration. TradeCall AI works with any calendar or no calendar at all. The operator forwards their existing number to a virtual number — that's the entire setup. No onboarding calls, no software to learn, no migration. This structural difference makes TradeCall AI accessible to the 300,000+ solo trade operators who will never adopt a $200+/month FSM platform.

**3. Affordable LTD-first model designed for community distribution.** At $49–$99/month, a single captured emergency call covers multiple months of cost. The AppSumo LTD ($299 one-time) removes monthly cost anxiety entirely and generates the social proof needed for community-driven acquisition. The target customer — a solo contractor burned by a missed job — calculates the ROI in seconds and converts. Community word-of-mouth (r/HVAC, trade Facebook groups) is the distribution channel; a real job-capture story is the conversion event.

## Project Classification

- **Project Type:** SaaS B2B — Vertical SaaS, SMB-focused, LTD/AppSumo model
- **Domain:** Field Service Management / Home Services / Telephony AI
- **Complexity:** Medium — voice AI telephony, trade-specific NLP, rule-based emergency dispatch, calendar sync, subscription + LTD billing
- **Project Context:** Greenfield — no existing codebase or user base

---

## Success Criteria

### User Success

Operators succeed when they recover measurable revenue from calls they would otherwise have missed — without managing any software themselves.

- **Call coverage:** Every call answered 24/7; operator never misses a service request or emergency while on-site
- **Triage quality:** AI correctly identifies emergency vs. routine in ≥92% of calls; operator receives actionable pre-call context in every SMS summary
- **Booking outcomes:** ≥80% of inbound calls with booking intent result in a calendar appointment and operator SMS notification
- **Emergency safety:** 100% of genuine emergencies (burst pipe, no heat, sparking panel, active flooding) trigger immediate operator SMS with urgency flag; no emergency-classified call goes unnotified
- **Setup friction:** Operators complete full setup — call forward configured, test call passed — in ≤5 minutes without contacting support
- **Aha! moment definition:** Operator receives an SMS at night or weekend for a job they would have missed. That job converts. This must happen within the first 7 days of activation.

**"Worth it" signal:** Operator wakes up to an SMS reading "Emergency AC call handled at 11:43 PM — customer Sarah T., 142 Oak St. System not cooling, elderly parent on premises. Booked for 7 AM tomorrow." They show up prepared and close a $1,900 job. That moment creates vocal advocates.

### Business Success

| Milestone | Target | Timeline |
|-----------|--------|----------|
| Beta validation | 20 paying customers via organic channels only | Month 1–2 |
| Pre-AppSumo | 30+ paying customers, 5 verified job-capture stories | Month 3 |
| AppSumo LTD | 200 LTD sales in first 30 days, 50+ reviews, 4.5+ stars | Month 3–4 |
| MRR growth | 100 paying subscribers = $4,900 MRR | Month 6 |
| Annual target | 204+ subscribers = $10,000+ MRR | Month 12 |

**AppSumo LTD economics:** $299/LTD × 200 sales = $59,800 one-time. This funds 12 months of operational costs, provides social proof for MRR conversion, and creates a user base for feature feedback.

**Acquisition:** Community-driven CAC < $30. A single authentic Reddit post ("AI handled my after-hours calls and I booked a $1,600 AC emergency at 11 PM — costs $49/month") generates 10–30 signups. No paid acquisition needed in first 6 months.

**Retention:** Monthly churn < 5% (target < 3% by Month 12). Operators who capture their first AI-handled job within 7 days have near-zero churn. The product is invisible when working — operators don't notice it until they turn it off and miss a call.

### Technical Success

- Voice AI triage completion rate ≥ 85% (AI completes triage without human intervention)
- Emergency vs. routine classification accuracy ≥ 92% in blind testing before launch
- Google Calendar booking end-to-end success rate ≥ 95%
- SMS job summaries delivered within 30 seconds of call completion
- System uptime ≥ 99.5% (voice infrastructure + application layer combined)
- Call handle latency: ≤ 800ms AI response time during active conversation
- Setup flow: operator live (call forwarded, test call passing) in ≤ 5 minutes

### Measurable Outcomes

| KPI | Month 3 | Month 6 | Month 12 |
|-----|---------|---------|---------|
| Paying MRR subscribers | 30 | 100 | 204+ |
| MRR | $1,470 | $4,900 | $9,996+ |
| LTD sales (AppSumo) | 200 | 400 | 500 |
| Triage completion rate | ≥ 85% | ≥ 88% | ≥ 90% |
| Emergency detection accuracy | ≥ 90% | ≥ 92% | ≥ 95% |
| Monthly churn | < 5% | < 4% | < 3% |
| Gross margin per customer | 55% | 65% | 70%+ |
| CAC (blended) | < $50 | < $35 | < $30 |
| Organic community mentions/month | 5 | 15 | 30+ |
| AppSumo rating | — | ≥ 4.5 | ≥ 4.7 |
| NPS | — | 40+ | 50+ |

**Decision gates:**
- If < 20 paying customers by Month 2: investigate setup friction and triage quality before AppSumo submission
- If AppSumo generates < 100 sales in 30 days: audit demo quality and messaging before scaling outreach
- If gross margin falls below 50%: audit per-minute infrastructure costs and LTD usage caps

---

## Product Scope

### MVP — Minimum Viable Product

The MVP delivers one complete, reliable value loop: contractor misses a call → AI answers professionally → runs trade triage → books appointment or flags emergency → contractor gets SMS with job details → contractor shows up prepared. Four components make this work end-to-end.

**Component 1: Virtual Phone Number + Call Routing (Twilio)**
- Dedicated US virtual number per account (operator's area code of choice)
- Call forwarding: operator directs existing business number to virtual number
- Three routing modes: always-on AI answering; after-hours only (configurable hours); overflow-only (rings operator first, AI picks up after N rings)
- Call recording and transcript storage (30-day retention)

**Component 2: Trade-Specific AI Voice Agent (Retell AI or Vapi)**
- Greets in operator's business name: "Thanks for calling [Mike's HVAC], this is the assistant — how can I help you today?"
- Three complete triage script flows at launch: HVAC, Plumbing, Electrical
- Emergency detection: identifies high-urgency situations (burst pipe, no heat, sparking panel) and routes to escalation flow
- Standard booking flow: collects caller name, phone, address, preferred time, issue description
- Graceful fallback: when confidence is low or call goes off-script, AI says "Let me have [Mike] call you right back" and ends cleanly
- AI disclosure: compliant with FCC and multi-state requirements (caller informed they're speaking with an AI assistant)

**Component 3: Operator Notification (SMS + Email)**
- Immediate SMS within 30 seconds of call completion: caller name, callback phone, address, urgency level, issue summary, next action (appointment booked or follow-up needed)
- Email backup with full call transcript
- Urgency flags: [EMERGENCY] prefix for high-urgency calls requiring same-day or immediate response
- Customer confirmation SMS with appointment details (when booked)

**Component 4: Google Calendar Integration**
- Operator connects Google Calendar via OAuth
- AI books appointments directly into operator's calendar
- Respects existing availability — no double-booking
- Sends customer confirmation SMS with appointment time and operator contact
- Works alongside any existing CRM — no migration required

**Simple Web Dashboard:**
- Call log with transcripts and audio playback
- Minute usage tracker vs. plan limit
- Triage script customization (custom phrases, service area, pricing guidance)
- On/off toggle and call routing mode configuration
- Account and billing management

**Pricing at Launch:**
- **Starter:** $49/month — 200 min/month, 1 trade type, Google Calendar, SMS job summary
- **Pro:** $99/month — 500 min/month, 3 trade types, multi-line, emergency escalation calls, basic CRM webhook
- **LTD (AppSumo):** $299 one-time — 200 min/month ongoing, Starter features, credit top-ups at $0.25/min above baseline

### Growth Features (Post-MVP, Phase 2)

- ServiceTitan and HousecallPro native integration (Phase 2, Months 4–9)
- Spanish-language triage for HVAC and plumbing (Sun Belt markets)
- Roofing, pest control, and landscaping triage scripts (adjacent verticals)
- Multi-tech emergency escalation chains (if primary on-call doesn't respond in 5 min)
- Outbound AI calls: missed-call follow-up within 5 minutes of missed call
- Mobile-friendly dashboard (PWA)
- Operator referral program ($25/referred paying account)

### Vision (Phase 3+, Year 2+)

- Outbound AI campaigns: review requests, maintenance reminders, quote follow-ups
- Full AI front-office platform: integrations with all major FSM platforms (ServiceTitan, Jobber, HousecallPro, Workiz)
- Multi-language support (Spanish, Portuguese)
- Franchise/multi-location accounts with centralized management
- Predictive demand alerts: notify operator to increase after-hours capacity during weather events, peak seasons
- Equipment history integration: AI retrieves prior service history from operator's CRM if customer mentions system model
- Proprietary trade triage LLM fine-tuned on real call transcripts

---

## User Journeys

### Journey 1: Mike — Solo HVAC Technician (Primary, Happy Path)

**Opening scene:** Mike is 42, runs his HVAC business solo in a suburb of Phoenix. It's a Saturday in August — 108°F outside. He's been under equipment since 7 AM. His phone is in his truck. Between 9 AM and noon, 11 calls come in. He surfaces at 12:15 PM, sees the missed calls, and feels the familiar dread. He listens to two voicemails — one is an AC emergency, one is a scheduling request. He calls back immediately; both have already found someone else. The AC emergency was a $2,200 job. He sits in his truck and does the math: he's lost that job at least four times this summer.

**Discovery:** That evening, he searches "after-hours answering service for HVAC" and finds TradeCall AI. He reads a testimonial on Reddit: "Booked a $1,600 emergency at 11 PM while I was asleep. I woke up to the SMS. $49/month is nothing." He watches the 90-second demo video. The AI knows what a capacitor replacement is. It asks about system make and model. It sounds like a dispatcher, not a bot.

**Rising action:** Mike signs up for the 14-day trial. He enters his business name, service area (zip codes), trade type (HVAC), and lists his main services (diagnostic, tune-up, emergency). He copies his call-forward number. He sets it up in iPhone settings in 2 minutes. He sends a test call — the AI answers "Thanks for calling Mike's HVAC" and handles a test AC diagnostic request correctly. He's live.

**Climax:** Day 5, a Tuesday. Mike is on a job with no cell service. A homeowner calls at 2:47 PM — her elderly mother's AC has been down since morning; indoor temp is 89°F. TradeCall AI answers, hears the urgency, runs the HVAC triage ("Is this heating or cooling? Is anyone medically dependent on temperature control?"), marks it as [EMERGENCY], and books her for the first available slot: 5 PM same day. Mike's phone buzzes: "EMERGENCY: HVAC call handled at 2:47 PM — Margaret H., 234 Sunridge Blvd. AC out, elderly resident inside, 89°F indoors. Booked for 5 PM today. Patient has health concerns." Mike finishes his 3 PM job and drives directly to Margaret's. He replaces a blown capacitor and a weak contactor. Invoice: $1,850.

**Resolution:** End of his first full month. Dashboard shows: 67 calls handled, 43 appointments booked, 3 emergencies escalated, 6 flagged for follow-up. Estimated recovered revenue: $28,400. He upgrades to Pro ($99/month) and buys an AppSumo LTD for his brother-in-law who runs a plumbing shop. He posts in r/HVAC: "Used to lose 3-4 jobs per weekend. Now I wake up to job tickets in my inbox. $49/month."

**Journey requirements revealed:** 24/7 voice answering, HVAC triage with emergency detection, SMS job summary with urgency flag, Google Calendar booking, dashboard with call log and transcript, recovered revenue estimate, 2-minute setup flow, test call capability.

---

### Journey 2: Dave — Owner of 3-Tech Plumbing Shop (Primary, After-Hours Emergency)

**Opening scene:** Dave is 50 and runs a plumbing shop with himself and two apprentices in suburban Dallas. Annual revenue ~$900K. He has a part-time office manager (9 AM–1 PM weekdays). After hours — evenings, weekends — calls go to his personal cell. He answers when he can, misses when he can't. He tried a human answering service for six months ($1,200/month). The summaries were useless: "Man says pipe is broken, wants call back." By the time he called back, the customer had found someone else.

**Discovery:** Dave is in a Facebook group for plumbing business owners. Someone posts a job-capture story: "Set up TradeCall AI last week. Got an SMS at 1 AM — burst pipe, active flooding, customer address and all the questions already answered. Called them back in 5 minutes. $2,800 job." Dave DMs the poster. Hears it works with Google Calendar. No platform migration. He signs up.

**Setup:** Dave configures plumbing triage, sets his service area (Dallas metro), adds emergency keywords (burst pipe, flooding, sewage backup, no water). He sets call routing to "overflow — ring me first 3 times, then AI picks up." He adds his wife's phone as secondary emergency contact (she can reach him in the field). Setup takes 7 minutes.

**Climax:** Third night on the trial. Thursday, 11:42 PM. A homeowner's water heater burst — 40 gallons onto the basement floor. Dave's cell rings twice and he doesn't hear it. TradeCall AI picks up. The AI hears "water everywhere, it's flooding" and enters plumbing emergency triage: "Is water actively flowing right now? Do you know where the main water shutoff is?" The homeowner says they found the shutoff and water stopped. AI classifies: urgent but not active flooding — books for 8 AM emergency slot and fires Dave an SMS: "[EMERGENCY] Plumbing call 11:42 PM — James C., 5621 Maple Dr, Dallas. Water heater burst, flooding contained, shutoff located. Booked for 8 AM. System appears to be 15+ years old." Dave sees the SMS at 7:30 AM, loads his truck with a water heater, and arrives at 8:05 AM. Invoice: $2,600.

**Resolution:** Dave cancels the human answering service. TradeCall AI costs $99/month vs. $1,200/month, and the summaries actually contain the information he needs to show up prepared. He upgrades his apprentices' ring sequence so they also get emergency SMS copies. He configures the Pro plan's CRM webhook to push job summaries to his ServiceTitan account.

**Journey requirements revealed:** Overflow call routing (ring-first, AI-backup), plumbing triage with shutoff valve qualification, multi-contact SMS (primary + secondary), CRM webhook (Pro), configurable emergency keyword triggers, after-hours routing schedule, preparation-level detail in SMS (not just name/phone).

---

### Journey 3: Carmen — Solo Electrician (Primary, Safety Edge Case)

**Opening scene:** Carmen is 35, licensed electrician in a mid-size Pacific Northwest city, 2-person operation (herself + apprentice). She does residential service calls and small commercial. Annual revenue ~$420K. She worries about one specific scenario: a generic AI telling a customer to "wait for the next available appointment" when their panel is sparking — that's a fire risk. She's seen generic AI receptionists give dangerous advice by treating electrical calls like any other service inquiry.

**Discovery:** Carmen finds TradeCall AI through a LinkedIn post from an electrician trade association. The demo call shows the AI responding to "sparking panel" with "That sounds like an urgent safety issue — I'm flagging this as an emergency and notifying [business name] immediately. Do not touch the panel. If you see smoke or smell burning, please evacuate and call 911." She calls the demo number herself to test it. The AI handles a routine outlet repair call professionally. It handles a "burning smell from the breaker box" call exactly as a trained dispatcher would.

**Rising action:** Carmen signs up, selects Electrical as her trade type, and reviews the triage script. She customizes the emergency trigger list to add "flickering lights and burning smell" (common precursor to electrical fire she sees often). She sets routing to always-on (she misses calls all day, not just after hours). Setup: 4 minutes.

**Climax:** Week 2, a Monday. A homeowner calls while Carmen is in a crawlspace. "I've got a burning smell coming from one of my outlets and the breaker keeps tripping." TradeCall AI classifies immediately: electrical fire risk. "This is a potential safety emergency. I'm alerting [Carmen's Electrical] right now. While you wait: please stop using the outlet, do not attempt to reset the breaker, and if you see smoke, evacuate the home and call 911." Emergency SMS fires to Carmen: "[EMERGENCY] Electrical call 2:14 PM — Linda K., 89 Birchwood Ave. Burning smell from outlet + tripping breaker. Possible electrical fire risk. Address confirmed. Please respond ASAP." Carmen surfaces from the crawlspace at 2:25 PM, sees the SMS, calls Linda back immediately. She's on-site by 3 PM — finds an overloaded circuit with a melting wire nut. She fixes the hazard and writes the job up as an emergency service call: $680.

**Resolution:** Carmen doesn't just appreciate the revenue capture — she appreciates that the AI handled a safety-critical call correctly under pressure. She tells her apprentice she trusts the system to never give a customer dangerous advice. She refers two other electricians in her trade association.

**Journey requirements revealed:** Electrical trade triage with safety-first language, customizable emergency trigger phrases, real-time SMS with safety context, operator-configurable routing modes (always-on vs. after-hours), AI scripted safety guidance for dangerous situations (evacuation, 911 reference), customer confirmation that help is coming.

---

### Journey 4: Ray — Skeptical Solo Plumber (Primary, Conversion Resistance)

**Opening scene:** Ray is 48, solo plumber in suburban Chicago. He's been burned before: he paid $180/month for an "AI answering service" that spoke in a robotic voice and once told a customer he was "available for weddings and events." He's skeptical of AI tools and considers himself bad with software. He heard about TradeCall AI from a friend but thinks "it probably doesn't know plumbing."

**Rising action:** Ray uses the free trial, does NOT connect Google Calendar yet — he wants to test the voice before trusting it with his calendar. He calls his own TradeCall AI number from a different phone. He pretends to be a homeowner with a slow drain. The AI asks if it's a single drain or multiple fixtures (distinguishing localized clog from main line blockage — exactly what Ray himself would ask). He tries again as a homeowner with "water won't stop coming out from under the toilet." The AI asks if the main shutoff is accessible, confirms the address, and flags it as an emergency. He tries a third call: "I need a rough estimate for a new water heater." The AI says "Water heater replacement typically runs $800–$1,500 depending on tank size and access — I can get you on the schedule for a free assessment" (Ray had configured a rough pricing range during setup).

**Climax:** Ray connects Google Calendar. He goes live. First week: 14 calls handled, 9 appointments booked (he confirms all of them are legitimate), 1 emergency flagged. He listens to 3 transcripts in full. The AI never gave plumbing advice outside its lane.

**Resolution:** Ray posts in a Chicago-area plumbers Facebook group: "Was skeptical. It actually knows plumbing. Asks the right questions. Not a robot voice. $49/month and I already booked 9 jobs in the first week I was at work." Three people ask for the link.

**Journey requirements revealed:** Free trial without calendar commitment, call recording + transcript review available from day one, trade-specific plumbing knowledge (clog triage, main shutoff qualification, fixture count), configurable pricing range for customer-facing price guidance, mobile-accessible dashboard for transcript review between jobs.

---

### Journey 5: Sandra — Office Manager at Dave's Plumbing Shop (Secondary, Daily Operations)

**Opening scene:** Sandra is Dave's part-time office manager, works 9 AM–1 PM weekdays. Before TradeCall AI, she arrived each morning to 3–8 voicemails, attempted to decode them ("broken pipe, call him back" — no address, no callback number written clearly), and created ServiceTitan jobs manually from incomplete information. It took 40 minutes every morning before she could start her actual work.

**Rising action:** With TradeCall AI, Sandra opens the dashboard at 9 AM. She sees 6 overnight calls: 4 booked (already in the calendar with caller name, phone, address, issue description), 1 emergency (dispatched to Dave at 11:42 PM, job completed), 1 flagged for follow-up (caller asked about commercial sewer line scope — outside the normal residential triage flow). She reviews the flagged transcript, calls the customer back, gets the commercial job details, and creates the ServiceTitan entry manually. Total morning processing: 11 minutes.

**Resolution:** Sandra's 40-minute morning triage routine is gone. She uses the transcript and playback to do quality review — once per week she flags a transcript where the AI's triage could have been sharper and adds the scenario to the custom script notes. Dave now has a system where overnight activity is reviewed with full context each morning, not reconstructed from incomplete voicemails.

**Journey requirements revealed:** Dashboard with overnight call summary, flagged-for-follow-up classification and transcript review, call audio playback, job status visibility (booked/emergency/flagged/partial), admin access with transcript and call log permissions, export capability for manual record-keeping.

---

### Journey Requirements Summary

| Capability Revealed | Journey Source |
|--------------------|---------------|
| 24/7 voice answering, always-on and overflow modes | All |
| HVAC trade triage (system make/model, cooling/heating, urgency) | Mike |
| Plumbing trade triage (shutoff qualification, fixture count, active flow) | Dave, Ray |
| Electrical trade triage with safety-first emergency language | Carmen |
| Emergency detection → operator SMS with urgency flag | All |
| Google Calendar appointment booking | Mike, Carmen, Ray |
| Customizable emergency keyword triggers | Carmen, Dave |
| Multi-contact emergency SMS (primary + secondary) | Dave |
| CRM webhook (Pro tier) | Dave |
| Call routing configuration (always-on, overflow, after-hours) | Mike, Carmen |
| Setup Wizard ≤ 5 minutes | Mike |
| Free trial without calendar commitment | Ray |
| Call recording + transcript review | Ray, Sandra |
| Configurable pricing guidance for customer calls | Ray |
| Dashboard with call log, flagged-for-follow-up, overnight summary | Sandra |
| Admin-level access (transcript + audio, no config changes) | Sandra |
| SMS with preparation-level detail (issue qualifications, not just name/phone) | Dave, Mike |
| Customer confirmation SMS with appointment details | Mike, Carmen |

---

## Domain-Specific Requirements

### Field Service Management Context

TradeCall AI operates in a domain where operators are physically inaccessible during working hours, make high-value time-critical decisions, and have zero tolerance for AI failures on emergency calls.

**Operational constraints:**
- Contractors cannot interact with software while working — on rooftops, under sinks, in attics, inside electrical panels
- All operator interaction with TradeCall AI is asynchronous: review SMS summaries between jobs, check dashboard at end of day
- Call volume is seasonal — HVAC peaks 3–5x during summer heat waves and winter freeze events
- After-hours calls carry the highest margin: emergency surcharges bring average job values to $800–$2,000

**Trust and reliability requirements:**
- Emergency misclassification (AI treats an emergency as routine and books a next-day appointment) is a product failure and a reputational liability event for the operator
- Voice quality is binary for this audience: if a customer mentions to the contractor that "the phone AI sounded weird," the contractor will cancel within days
- The system must handle peak-season call spikes without degradation — the moment operators need reliability most (a heat wave) is also the highest-volume moment
- A single incorrect AI response (dangerous advice, wrong pricing, wrong service type) can cause immediate churn and negative word-of-mouth in trade communities

**Compliance and regulatory considerations:**
- TCPA and state-level AI disclosure laws: calls must disclose AI nature; specific two-party consent states (California, Florida, Washington) require explicit disclosure in the opening greeting
- Call recording laws: consent captured in the AI greeting; operators in two-party consent states need a disclosure-compliant greeting option (setup configuration)
- No HIPAA or PCI requirements at MVP level — TradeCall AI handles no health data; payment processing is Stripe-delegated
- FCC AI disclosure requirements: the AI must clearly identify as an AI assistant, not a human, when asked

**Calendar integration reliability:**
- Google Calendar is the operator's job coordination tool; a failed booking (AI tells customer they're booked but no event appears in calendar) is worse than no booking — it creates missed appointments, which damage customer trust and generate chargebacks
- All calendar sync failures must surface in the operator SMS and dashboard within 60 seconds
- OAuth token expiry handling must be silent — operators cannot be expected to re-authorize their calendar when access tokens expire

**Safety-specific requirements for electrical triage:**
- Electrical emergencies (sparking, burning smell, tripping breakers, flickering lights) carry fire risk; AI triage script must include safety guidance (don't touch panel, call 911 if smoke) as part of the emergency flow — not just booking/dispatch
- The system must never instruct a caller to attempt electrical repairs themselves or downplay electrical safety concerns

---

## Innovation & Novel Patterns

### Detected Innovation Areas

**1. Vertical triage intelligence as the product moat**
Generic AI receptionists (Goodcall, Hey Rosie, Marlie.ai, AI Front Desk) ask "How can I help?" — an acceptable response for a dental appointment, catastrophic for a burst pipe at midnight. TradeCall AI's innovation is embedding dispatcher-grade triage logic for three specific trades into the conversational flow by default, not through configuration. An operator doesn't train the AI to ask about the main shutoff — it already knows. This vertical specificity is not achievable by horizontal platforms without significant domain investment, and enterprise FSM platforms have no incentive to build an affordable standalone version.

**2. Rule-based emergency dispatch as an architectural guarantee**
Competing products that include emergency handling rely on LLM-discretionary classification: if the LLM "decides" a call is an emergency, it fires an alert. This creates a known failure mode: adversarial phrasing, unusual terminology, or hallucination can miss an emergency. TradeCall AI's emergency detection is a deterministic keyword layer — a pre-defined trigger set fires the operator alert before the LLM makes any subsequent decisions. This is communicable as a product guarantee ("never misses an emergency, by architecture") that LLM-discretionary systems cannot match.

**3. LTD pricing as a community distribution mechanism**
Per-minute AI receptionist pricing creates anxiety for seasonal businesses — a contractor who runs 3x volume in July worries about their August bill. The AppSumo LTD ($299 one-time) eliminates this entirely. More importantly, LTD converts price-skeptical trade contractors into vocal advocates: a contractor who paid once and captures 10 jobs/month has zero reason to churn and every reason to tell their peer network. The LTD is not a discount — it's a community distribution flywheel.

### Market Context

- $63M+ in 2025–2026 VC funding validates AI call answering for trades as a large, real market
- Enterprise solutions (Probook, Netic AI) are priced at $199–$300+/month, require full FSM migration, and average 41-day deployment — structurally excluding solo operators
- Generic AI receptionists ($29–$65/month) are horizontal and trade-unaware
- No standalone, affordable, trade-specific AI phone agent exists in the current market
- Voice AI infrastructure (Retell AI, Vapi) has matured to 2–4 week build time — the infrastructure cost is now commoditized

### Validation Approach

- **Triage quality gate:** 100 synthetic test calls per trade type — ≥90% correct triage classification and emergency detection before beta launch
- **Voice quality gate:** 10 real trade contractors call the demo line blind — ≥8/10 cannot identify AI within 30 seconds
- **Emergency detection gate:** 50 emergency scenario calls — 100% emergency detection rate required before launch
- **Market validation gate:** 20 paying customers at $49/month via organic community channels only before AppSumo submission

### Risk Mitigation

- **Voice AI infrastructure cost (LTD model):** Per-minute costs (Retell AI ~$0.075/min, Twilio ~$0.011/min, LLM ~$0.012/min) total ~$0.098/min. LTD plan caps at 200 min/month ($19.60 COGS vs. $299 one-time revenue — recovered in ~15 months). Monitor per-LTD-customer usage monthly; add overage caps at 200 min to prevent outliers destroying LTD economics.
- **Enterprise competitive response:** Probook/Netic launching a $49 SMB tier within 12 months is low probability (their unit economics and go-to-market focus on enterprise). Primary defense is community brand and triage depth built during the first-mover window.
- **Voice quality failures:** Retell AI tested against electrical, HVAC, plumbing terminology before launch; phonetic customization for trade terms ("HVAC," "PVC," "BTU," "amperage"). Fallback escalation ("let me have [business name] call you right back") is always available when AI confidence is low.

---

## SaaS B2B Specific Requirements

### Multi-Tenancy Model

TradeCall AI is a multi-tenant SaaS: each operator account is a fully isolated tenant with their own virtual phone number, triage configuration, call history, calendar connection, and billing. No data sharing between tenants.

**Tenant isolation requirements:**
- Each account has a dedicated provisioned phone number (Twilio via Retell/Vapi)
- Call recordings and transcripts are scoped per tenant account; no cross-tenant access
- Google OAuth tokens are encrypted per-tenant and never shared
- LTD accounts are tracked separately for usage cap monitoring and overage billing

### Role-Based Access

| Role | Capabilities |
|------|-------------|
| Owner | Full access: billing, triage script configuration, routing modes, call data, user management, Google Calendar OAuth |
| Admin | Call log, transcripts, recordings, flagged-for-follow-up review; no billing, no configuration changes |

For MVP: Owner and Admin roles sufficient. Read-only technician access deferred to Phase 2.

### Calendar Integration Architecture

**Google Calendar (MVP):**
- OAuth 2.0 authorization flow in Setup Wizard
- Token refresh handling: silent refresh for ≥90 days; alert operator 14 days before expiry if refresh fails
- Create calendar event with: customer name, callback number, address, service type, issue notes, requested time
- Check existing availability before booking (no double-booking)
- Send customer confirmation SMS with appointment time and operator name
- Surface calendar sync failures in operator SMS and dashboard within 60 seconds

**CRM Webhook (Pro plan, MVP):**
- HTTP POST to operator-configured webhook URL with call summary JSON after each handled call
- Payload includes: caller name, phone, address, trade type, urgency level, transcript URL, appointment time (if booked)
- Allows Pro-tier operators to build their own ServiceTitan/HousecallPro/Jobber integration via Zapier

**Native CRM Integration (Phase 2):**
- Jobber and HousecallPro native OAuth integrations
- Failure handling: retry logic (3 attempts, exponential backoff); sync failures surfaced within 2 minutes

### Billing & Plan Structure

| Plan | Price/month | Annual Price | Minutes/month | Features |
|------|-------------|-------------|---------------|---------|
| Starter | $49/month | $39/month | 200 min | 1 trade type, Google Calendar, SMS summary |
| Pro | $99/month | $79/month | 500 min | 3 trade types, multi-line, emergency escalation, CRM webhook |
| LTD (AppSumo) | $299 one-time | — | 200 min/month ongoing | Starter features; overage at $0.25/min |

- 14-day free trial, no credit card required
- Overage policy: dashboard warning at 80% of minute limit; hard cap + SMS alert at 100%; overage minutes at $0.20/min (Starter) or $0.15/min (Pro)
- LTD users: 200 min/month hard cap; additional minutes purchasable in $10 blocks (40 min)
- Stripe for all billing: subscription lifecycle, trial-to-paid conversion, monthly vs. annual, overage charges, LTD one-time payments

### Onboarding Flow

Self-serve only (no sales-assisted onboarding required):
1. Signup (email + password or Google OAuth)
2. Setup Wizard: business name, trade type(s), service area (zip codes), service list, pricing guidance, routing mode, emergency contact number
3. Virtual phone number provisioned (<30 seconds, US area code selection)
4. Call forwarding instructions auto-generated for carrier type (iPhone, Android, carrier-specific)
5. Google Calendar OAuth connection (optional; AI can operate without calendar in SMS-only mode)
6. Test call (guided 90-second test to validate triage and SMS delivery)
7. First real handled call → operator SMS and dashboard notification

---

## Project Scoping & Phased Development

### MVP Strategy & Philosophy

**MVP Approach:** Problem-solving MVP. The product must complete one reliable value loop — call handled → operator SMS received → job captured — at a quality level where operators trust it with their primary business phone number. An MVP that misses emergencies or schedules appointments that don't appear in the calendar fails instantly in this market. The quality bar is high because the product runs on the operator's most important asset: their phone number.

**Resource Requirements:**
- 1 full-stack engineer (Node.js/TypeScript or Python + React)
- 1 AI/voice integration engineer (Retell AI/Vapi + LLM prompting, triage script development)
- 1 product/founder (can overlap with engineering)
- 2–4 week build target to beta (infrastructure is commodity; triage scripts are the custom work)

### MVP Feature Set (Phase 1)

**Core User Journeys Supported:**
- Solo HVAC operator (Mike): inbound calls answered, HVAC triage, Google Calendar booking, emergency SMS
- Small plumbing shop (Dave): after-hours overflow routing, plumbing triage, emergency detection and multi-contact SMS
- Solo electrician (Carmen): always-on answering, electrical safety triage, customizable emergency triggers
- Skeptical operator (Ray): trial without calendar commitment, transcript and recording review

**Must-Have Capabilities:**
- Three complete trade triage scripts (HVAC, plumbing, electrical)
- Rule-based emergency detection and immediate operator SMS
- Google Calendar appointment booking (OAuth)
- Operator SMS job summary within 30 seconds of call completion
- Call routing configuration (always-on, overflow, after-hours)
- Setup Wizard (≤ 5 minutes to live)
- Web dashboard: call log, transcripts, audio playback, minute usage
- Subscription billing: Starter ($49/month), Pro ($99/month), 14-day trial
- LTD payment processing (one-time $299 via Stripe or AppSumo)

### Post-MVP Features

**Phase 2 (Months 4–12): Vertical Depth**
- Jobber and HousecallPro native CRM integration
- Spanish-language triage (HVAC and plumbing)
- Roofing, pest control, landscaping triage scripts
- Multi-tech emergency escalation (auto-re-alert if primary doesn't respond in 5 min)
- Missed call follow-up: outbound AI call within 5 minutes of missed call
- Mobile-responsive dashboard (PWA)
- Operator referral program

**Phase 3 (Year 2+): Platform**
- Outbound AI campaigns (review requests, maintenance reminders, quote follow-ups)
- Full FSM platform integrations (ServiceTitan, Workiz, Jobber, HousecallPro)
- Multi-language support
- Franchise/multi-location portal
- Predictive demand alerts
- Equipment history integration

### Risk Mitigation Strategy

**Technical Risks:**
- *LTD economics erosion*: Monitor cost-per-LTD-customer monthly; LTD usage cap at 200 min/month enforced in billing layer. If average LTD COGS exceeds $25/month, implement overage charges. Target: $19.60/month COGS at 200 min.
- *Triage quality failures on real calls*: Mandatory blind test with 10 real trade contractors before beta launch. Every triage script reviewed by an active trade contractor before launch. Deploy "escalate to owner" fallback for any call where AI confidence < threshold.
- *Google Calendar OAuth failures*: Circuit breaker — if Calendar API unavailable, AI books a "pending" slot and sends operator SMS flagged "calendar unavailable — manual booking needed."

**Market Risks:**
- *Generic AI platforms add trade triage*: Horizontal platforms will not build deep trade-specific triage for a single vertical. The moat is triage depth + community brand, both of which take time that enterprise players are unwilling to invest in for this segment.
- *Trade contractors resist AI*: "Burned-by-voicemail" buyer is emotionally primed — they have a specific lost job in mind. ROI calculation takes < 30 seconds. The conversion story is one job capture, not software adoption.

**Resource Risks:**
- *If 1 engineer only*: Reduce MVP to HVAC and plumbing triage only; defer electrical for Month 2. Validate with 20 beta users before adding third trade.
- *If timeline at risk*: Cut dashboard to minimum (call log + SMS log only); defer Google Calendar to Phase 1.5 (SMS-only mode as day-one MVP, calendar booking as fast-follow).

---

## Functional Requirements

### Call Answering & Routing

- FR1: System can answer inbound calls within 2 rings (≤ 6 seconds), 24 hours a day, 7 days a week, including holidays
- FR2: System can greet callers with a business-name-specific greeting configured by the operator
- FR3: System can route calls in three modes: always-on (AI answers all calls), after-hours only (AI answers outside configured business hours), and overflow (AI answers after operator does not pick up within N rings)
- FR4: System can confirm the caller's service area against the operator's configured coverage zones (zip code list or city-level)
- FR5: System can escalate calls to a human (operator's cell) when the caller explicitly requests to speak with a person
- FR6: System can handle dropped calls and incomplete calls gracefully, logging them as partial attempts in the dashboard without generating a false booking

### Trade-Specific Triage

- FR7: System can identify the caller's trade need (HVAC, plumbing, electrical) from natural caller descriptions without requiring the caller to specify the trade category explicitly
- FR8: System can execute a complete HVAC triage flow: confirm heating or cooling issue, ask about system make/model, determine urgency (equipment failure vs. maintenance vs. install inquiry), and collect appointment details
- FR9: System can execute a complete plumbing triage flow: assess whether water is actively flowing, ask about shutoff valve access, distinguish emergency (active flooding, burst pipe) from routine (slow drain, fixture replacement), and collect appointment details
- FR10: System can execute a complete electrical triage flow: screen for safety indicators (burning smell, sparking, tripping breakers), provide appropriate safety guidance for dangerous situations, and collect appointment details for non-emergency calls
- FR11: System can provide callers with operator-configured pricing guidance by service type (e.g., "A diagnostic visit typically runs $89–$149 — I can get you scheduled for an assessment")
- FR12: System can ask qualifying questions appropriate to the detected service type to collect preparation-level details for the operator (equipment age, fixture count, system model)
- FR13: System can collect the complete set of information needed for an operator to show up prepared: caller name, callback number, service address, issue description, system details where applicable, and requested time range
- FR14: System can handle callers who are unsure of their issue and guide them to a useful service classification through conversational follow-up questions

### Emergency Detection & Dispatch

- FR15: System can detect emergency trigger conditions from caller speech using a pre-defined, operator-customizable keyword and phrase set (burst pipe, flooding, active water flow, no heat in winter, AC failure with vulnerable occupants, sparking panel, burning smell, breaker trip, no power, carbon monoxide, gas smell)
- FR16: System can fire an emergency operator SMS within 30 seconds of emergency keyword detection, before the call ends
- FR17: Emergency SMS must include: caller name, callback phone, service address, detected issue summary, urgency flag [EMERGENCY], timestamp, and any qualifying details collected during triage (shutoff status, occupant vulnerability, system details)
- FR18: System can deliver emergency SMS to a configured secondary contact if the operator designates one (Pro plan)
- FR19: Operator can configure a custom emergency keyword list via the dashboard with immediate effect (no restart required)
- FR20: Operator can configure a primary emergency contact number and a secondary fallback contact number
- FR21: All emergency-classified calls are flagged separately in the dashboard with full audit trail including detection timestamp and dispatch confirmation

### Operator Notification

- FR22: System can deliver an SMS to the operator within 30 seconds of every handled call: caller name, callback phone, address, urgency level, issue summary, and next action (appointment booked or follow-up needed)
- FR23: System can deliver an email to the operator with the full call transcript after every handled call
- FR24: System can send a customer confirmation SMS with the appointment date, time, and operator business name after every successful booking
- FR25: Operator can configure the SMS notification format (which fields to include) via the dashboard
- FR26: System can flag calls for follow-up (operator action required) when the AI cannot complete the triage or the request falls outside configured service types, and include the flag status in the operator SMS

### Calendar Integration & Booking

- FR27: Operator can connect their Google Calendar to TradeCall AI using OAuth 2.0 authorization in the Setup Wizard
- FR28: System can check the operator's calendar availability before offering appointment times to callers
- FR29: System can create a Google Calendar event with: customer name, callback phone, service address, trade type, issue description, and any triage-collected system details
- FR30: System can detect and avoid double-booking by checking for existing events at the requested time before confirming
- FR31: System can surface calendar sync failures in the operator SMS and dashboard within 60 seconds, with a clear indication that the appointment requires manual confirmation
- FR32: Operator can disconnect and re-authorize their Google Calendar from the account settings without contacting support
- FR33: System can operate in SMS-only mode (no calendar) when the operator has not connected a calendar, notifying the operator of the call via SMS without making an appointment booking

### CRM Webhook (Pro Plan)

- FR34: Pro-tier operator can configure a webhook URL to receive a structured JSON payload after each handled call
- FR35: Webhook payload includes: caller name, phone, address, trade type, urgency classification, issue summary, appointment time (if booked), and transcript URL
- FR36: System retries failed webhook deliveries up to 3 times with exponential backoff; surfaces delivery failures in the dashboard

### Operator Setup & Configuration

- FR37: New operators can complete initial setup — business name, trade type(s), service area, service list, pricing guidance, routing mode, emergency contact — in ≤ 5 minutes via a guided wizard
- FR38: Operator can configure call forwarding from their existing phone number using auto-generated carrier-specific instructions (iPhone, Android, major US carriers)
- FR39: Operator can configure business hours and routing behavior (always-on, after-hours only, overflow with ring count)
- FR40: Operator can add, edit, or remove services and associated pricing guidance without contacting support
- FR41: Operator can update the emergency contact phone number with immediate effect
- FR42: Operator can run a guided test call to validate their triage configuration and SMS delivery before going live
- FR43: Operator can toggle AI answering on or off with immediate effect (off = calls ring through to their phone normally)

### Operator Dashboard & Reporting

- FR44: Operator can view a call log showing all calls with date, time, caller ID, trade type detected, urgency classification, outcome (booked/emergency/follow-up/partial), and duration
- FR45: Operator can access the full text transcript for every handled call
- FR46: Operator can play back the audio recording of any call directly from the dashboard
- FR47: Operator can view a summary of calls handled, appointments booked, emergencies dispatched, and calls flagged for follow-up by day/week/month
- FR48: Operator can see a recovered revenue estimate (jobs booked × operator-configured average job value per trade type)
- FR49: Operator can view current month's minute usage vs. plan limit with a visual usage indicator
- FR50: Operator can export call logs and transcripts as CSV for their records
- FR51: Admin-level users can access the call log, transcripts, and recordings without access to billing, configuration, or user management

### Subscription & Billing

- FR52: New users can start a 14-day free trial without providing credit card details
- FR53: Users can subscribe to Starter ($49/month) or Pro ($99/month) plans with monthly or annual billing
- FR54: Annual billing offers a 20% discount displayed at checkout
- FR55: Operators can upgrade or downgrade their plan at any time with prorated billing
- FR56: Operators receive a dashboard warning when monthly minutes reach 80% of plan limit; an SMS alert when limit is reached
- FR57: Overage minutes are billed at $0.20/min (Starter) or $0.15/min (Pro) at end of billing cycle
- FR58: LTD accounts are enforced to a 200 min/month hard cap; additional minutes purchasable in-app at $0.25/min
- FR59: Operators receive an email notification 7 days before trial expiry with a one-click upgrade link

### Account & User Management

- FR60: Account owner can invite additional users with role assignment (Owner, Admin)
- FR61: Users can reset their password via email link
- FR62: Account owner can update business name, service area, and trade types without contacting support
- FR63: Account owner can cancel their subscription with same-day effect (no calls answered after cancellation; data retained for 30 days then purged)
- FR64: Account owner can view complete account activity history (configuration changes, billing events) in account settings

---

## Non-Functional Requirements

### Performance

- Voice call pickup latency: ≤ 6 seconds from first ring to answered (≤ 2 rings)
- AI response latency during conversation: ≤ 800ms between caller turn-end and AI response start (imperceptible delay threshold)
- Emergency SMS delivery: ≤ 30 seconds from emergency keyword detection to operator SMS received
- Google Calendar booking: ≤ 60 seconds from call completion to calendar event appearing
- Dashboard page load: ≤ 2 seconds for call log view (up to 90 days of history)
- Call transcript availability: ≤ 5 minutes after call completion
- Setup Wizard virtual number provisioning: ≤ 30 seconds from form completion to number active

### Reliability

- System availability: ≥ 99.5% uptime (≤ 43.8 hours downtime per year), monitored via external uptime service
- Call answer rate: ≥ 99% of all inbound calls answered (excluding scheduled maintenance windows, communicated 48 hours in advance)
- Emergency SMS dispatch: 100% delivery on all emergency-classified calls — if the system accepts and classifies an emergency call, the dispatch SMS must fire. Failure here is a P0 incident
- Google Calendar sync success rate: ≥ 95% of booking attempts succeed on first try or within 3 retries
- Telephony provider: vendor selection must provide ≥ 99.9% telephony uptime SLA
- Fallback behavior: if AI voice infrastructure is unavailable, calls must ring through to operator's number rather than drop silently

### Security

- All data transmitted over TLS 1.2+; HTTPS enforced on all endpoints
- Call recordings and transcripts encrypted at rest (AES-256)
- Google OAuth tokens encrypted at rest, never logged, per-tenant isolated, rotated on refresh
- Passwords hashed using bcrypt (cost factor ≥ 12) or Argon2id
- PCI DSS compliance delegated to Stripe; TradeCall AI stores no cardholder data
- GDPR/CCPA: operators can request deletion of all account data; 30-day retention after account cancellation, then automated purge
- Call recording and AI disclosure: greeting must be configurable to include explicit AI disclosure language and recording consent notification for two-party consent states (California, Florida, Washington, others)
- Rate limiting on all API endpoints; authentication required for all dashboard and configuration endpoints
- Tenant isolation: no cross-tenant data access enforced at database query level, not application logic level

### Scalability

- System must handle seasonal peak call volume (3–5x baseline) without degradation — a Phoenix HVAC operator receiving 50 calls/day in July must get the same performance as 10 calls/day in February
- Architecture must support 2,000+ concurrent tenant accounts with independent virtual number pools at launch; scaled to 10,000+ by end of Year 2
- LLM inference must support load balancing across multiple API keys to avoid rate-limit failures during regional weather events that spike calls across many tenants simultaneously
- Database must retain 12 months of call history per tenant (estimated 100–500 calls/month per active account)
- LTD accounts are tracked separately for per-account usage monitoring; usage cap enforcement must be real-time (within the billing period, not month-end reconciliation)

### Integration

- Google Calendar API: OAuth token expiry handled silently; alert operator at 14 days before expiry if refresh token fails; system operates in SMS-only fallback mode if calendar API is unavailable
- Retell AI / Vapi: voice AI integration must support real-time function calling for calendar writes and SMS dispatch during active calls, not post-call batch processing
- Twilio: SMS delivery must be confirmed (delivery receipts); failed SMS alerts must retry 3 times before surfacing failure in dashboard
- All external API dependencies (LLM, TTS, telephony, calendar) must have circuit breaker patterns: if a dependency fails, calls still answered (fallback to simpler response or human escalation) rather than dropped
- Webhook delivery (Pro plan): retry logic with exponential backoff (3 attempts over 15 minutes); failures surfaced in dashboard within 2 minutes

---

*PRD Version: 1.0 | Date: 2026-10-03 | Author: Root*
*Created via BMAD automated PRD workflow*
*Based on: Product Brief (2026-10-03) + Shortlisted Idea (score: 89/105)*
*Next step: Architecture design — `/bmad-bmm-create-architecture`*
