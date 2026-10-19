---
stepsCompleted: ["step-01-init.md", "step-02-discovery.md", "step-02b-vision.md", "step-02c-executive-summary.md", "step-03-success.md", "step-04-journeys.md", "step-05-domain.md", "step-06-innovation.md", "step-07-project-type.md", "step-08-scoping.md", "step-09-functional.md", "step-10-nonfunctional.md", "step-11-polish.md", "step-12-complete.md"]
inputDocuments: ["ideas/shortlisted/ai-voice-booking-trades.md", "_bmad-output/planning-artifacts/product-brief-ai-voice-booking-trades.md"]
workflowType: prd
project_name: ai-voice-booking-trades
user_name: Root
date: 2026-10-19
classification:
  projectType: saas_b2b
  domain: home_services_ai
  complexity: medium
  projectContext: greenfield
---

# Product Requirements Document — TradeRing

**Author:** Root
**Date:** 2026-10-19
**Product:** TradeRing — AI Phone Answering & Booking Agent for Small Trades Shops
**Version:** 1.0

---

## Executive Summary

Small HVAC, plumbing, and pest control owner-operators miss 68–75% of inbound calls because the owner is the technician — physically unavailable while on a job. One missed emergency HVAC call loses $1,200–$3,500. One missed plumbing emergency loses $800–$2,000. After-hours calls — the highest-margin work of the week — go unanswered at an 82% competitor-redirect rate.

Enterprise AI has validated the category: Avoca AI raised $125M at $1B valuation (Kleiner Perkins, April 2026) serving shops at $1,000–$3,500/month. The structural gap: every category leader targets operators with 20+ CSRs and $3M+ revenue. The 90,000+ shops with 1–3 technicians — generating $150K–$600K/year — are unserved at a price they can pay.

**TradeRing** is the $99/month AI phone answering and booking agent built for this gap. It answers calls 24/7 using trade-specific triage scripts, captures full lead information, fires an SMS summary to the owner's phone within 30 seconds, and books available appointments into Google Calendar. Setup takes 10 minutes. No contract. No setup fee. No FSM platform required.

### What Makes This Special

TradeRing's differentiation is the combination of three capabilities no competitor at sub-$200/month offers simultaneously: (1) **trade-specific triage** — scripts built around actual HVAC, plumbing, and pest control diagnostic questions, not generic "how can I help you?"; (2) **instant SMS lead delivery** — the owner gets a structured text in their pocket within 30 seconds of call completion, readable in 5 seconds between jobs; and (3) **zero-dependency onboarding** — works with Google Calendar or no calendar at all, no FSM platform required.

The infrastructure economics enable this: Bland AI all-in pricing of $0.09–$0.14/minute makes a $99/month plan a 70–80% gross margin business. The product builds the community moat before category leaders extend downmarket.

## Project Classification

- **Project Type:** B2B SaaS — web application with telephony integration
- **Domain:** Home Services AI / Field Services Automation
- **Complexity:** Medium — telecom integration, call recording compliance, voice AI orchestration, external calendar sync
- **Project Context:** Greenfield — new product

---

## Success Criteria

### User Success

**The core user success event:** The owner receives an SMS summary of a call they would have missed — name, address, problem, urgency level, callback preference — while finishing a job. They call back within 30 minutes with full context and book the job.

| Metric | Target | Measurement |
|--------|--------|-------------|
| AI call completion rate | ≥85% | % of calls reaching natural conclusion without caller hangup before lead capture |
| Lead capture rate | ≥80% | % of calls where name + phone + address + problem description all captured |
| Booking completion rate | ≥60% | % of non-emergency calls where appointment is booked during the AI interaction |
| Owner SMS delivery time | ≤30 seconds | Time from call end to SMS received on owner's phone (Twilio delivery confirmation) |
| Setup time to first live call | ≤15 minutes | Time from account creation to first real call answered by AI |
| Time-to-aha event | ≤48 hours | Time from onboarding to first SMS received for a real missed call |

**Owner churn signal:** Owners who receive their first aha-moment SMS within 48 hours of onboarding retain at >90% through month 3. Owners who do not receive it within 7 days churn at >60%.

### Business Success

| Milestone | Target | Timeline |
|-----------|--------|----------|
| Beta customers | 10 paying | Week 8 (AppSumo launch) |
| MRR customers | 50 | Month 3 |
| MRR customers | 100 | Month 6 |
| MRR customers | 200 | Month 12 |
| Monthly churn rate | <15% | Month 3 |
| Monthly churn rate | <10% | Month 6 |
| Monthly churn rate | <7% | Month 12 |
| Gross margin | ≥65% | Month 3 |
| Gross margin | ≥70% | Month 12 |
| NPS | ≥40 | Month 6 (post-90-day survey) |
| AppSumo LTD buyers | 150–300 | Launch window (2 weeks) |

Revenue trajectory: $4,950 MRR at Month 3 → $9,900 MRR at Month 6 → $19,800 MRR at Month 12 (blended average $99/customer across Solo and Shop plans).

### Technical Success

- AI call latency: first response within 1.5 seconds of caller finishing their sentence
- Call handling uptime: ≥99.5% measured monthly (calls cannot fail silently — fallback to voicemail with owner SMS notification)
- SMS delivery success rate: ≥99.9% (Twilio delivery confirmation)
- Google Calendar sync: booking confirmation created within 10 seconds of call completion
- Test call success rate: ≥99% (onboarding test call must complete without technical failure)

### Measurable Outcomes

**Validation gates for proceeding to Phase 2 investment:**
1. AI call completion rate >80% on first 500 real calls across beta customers
2. ≥70% of beta users report receiving at least one aha-moment SMS within first 2 weeks
3. 50 paying customers within 60 days of public launch
4. <15% monthly churn in first 90 days
5. $3,000+ MRR by Month 2

---

## Product Scope

### MVP — Minimum Viable Product (Phase 1)

**MVP philosophy:** Revenue-proving MVP. The product must capture at least one real job for a real customer in the first week of use. Every feature decision gates on whether its absence would prevent that outcome.

**Core user journeys supported by MVP:**
- Solo HVAC owner-operator receiving and responding to a missed call via SMS
- 2-tech plumbing shop owner booking a non-emergency appointment via AI triage
- Pest control route operator capturing a new lead while on route

**Must-Have Capabilities:**
1. AI inbound call handler with trade-specific scripts (HVAC, plumbing, pest control)
2. Structured lead capture (name, address, problem, urgency, callback preference)
3. Instant owner SMS notification (≤30 seconds after call, structured format)
4. Google Calendar appointment booking (reads availability, books slot)
5. Call recording and transcript per call
6. Web dashboard: call log, lead details, recording playback, settings
7. Self-serve onboarding: Twilio number provisioning, call forwarding setup, calendar OAuth, test call
8. Stripe subscription billing with 14-day free trial
9. Three call forwarding workflows (AT&T, Verizon, T-Mobile instructions)
10. AI disclosure opening statement on every call (compliance requirement)

### Growth Features — Phase 2 (Months 3–6)

- Jobber webhook integration — push booked appointments to Jobber dispatch board
- Housecall Pro webhook integration
- Spanish/English bilingual mode (language switch based on caller preference)
- Per-technician routing (2–3 tech shops route leads by tech availability)
- Outbound follow-up add-on ($29–49/month) — AI calls back unbooked estimates 24–48 hours later
- Overage alerts and usage dashboard

### Vision — Phase 3 (Months 6–18)

- Seasonal outbound campaign automation (maintenance agreement reminders)
- Additional trade verticals: pool service, lawn care, gutter cleaning
- Review request automation (SMS 24 hours after job completion)
- AppSumo Select pursuit (requires 200+ reviews at 4.5+ stars)
- Medium shop tier (4–8 techs) at $299–$399/month

### Explicitly Out of Scope for MVP

- ServiceTitan or Jobber native integration (Phase 2; requires API partnerships)
- Outbound follow-up calling (Phase 2 upsell)
- Spanish/bilingual mode (Phase 2; documented as priority)
- Mobile app (responsive web only; app adds 6+ weeks)
- Custom voice cloning (stock ElevenLabs/Bland voices sufficient)
- Multi-tenant white-label
- Per-technician routing
- Seasonal campaigns

---

## User Journeys

### Journey 1: Mike — Solo HVAC Owner, First Captured Lead

**Persona:** Mike, 42, solo HVAC owner-operator in suburban Ohio. 18 years experience. 4–6 service calls per day. $180K annual revenue. Uses Google Calendar and his personal cell. Misses 3–4 calls per day while on jobs.

**Opening Scene:** Mike is under a crawl space diagnosing a condensate drain backup. It is 2:17 PM on a Tuesday. His phone rings — a number he doesn't recognize. He doesn't answer. He can't answer.

**Rising Action:** TradeRing picks up on the second ring. The AI opens: "Thanks for calling Comfort Zone HVAC. I'm Mike's AI scheduling assistant. This call may be recorded. How can I help you today?" The caller — Tom — explains his AC unit is running but blowing warm air. The AI asks: "Is anyone in the home who is elderly or has medical needs that require cooling?" Tom says no. "And roughly how old is the system?" Tom says about 8 years. The AI offers Mike's next available slot: "He has an opening tomorrow at 2 PM or Thursday at 10 AM — which works better?" Tom picks Thursday.

**Climax:** Mike's phone buzzes at 2:34 PM. "TRADERING: New booking — Tom Heller, 220 Cedar Lane, Columbus. AC running, no cold air. Unit ~8 years old. No medical dependency. Booked: Thu Oct 22 @ 10am. Call: (614) 555-0198." Mike finishes the job, reads the text while washing his hands. He didn't miss this one.

**Resolution:** Mike calls Tom back at 3:45 PM to confirm. Tom is surprised — he expected voicemail. Thursday's job pays $680. Mike realizes he would have lost this caller to a competitor. He tells his neighbor (also an HVAC tech) about TradeRing at lunch on Friday.

**Requirements revealed:** AI call handler, trade-specific HVAC triage script, urgency classification, Google Calendar slot reading, appointment booking confirmation, owner SMS within 30 seconds, call recording.

---

### Journey 2: Dave — 2-Tech Plumbing Shop, Emergency After-Hours

**Persona:** Dave, 47, plumbing shop owner in suburban Texas. 2 techs + himself. $520K annual revenue. Uses Jobber. Pays $75/month for a shared answering service that "takes messages but never books anything."

**Opening Scene:** 7:43 PM on a Friday. Dave is finishing a water heater replacement that ran late. His business line rings. His answering service picks up — the caller hears an offshore agent reading a generic script. The caller hangs up before finishing the message. Dave finds out at 9 PM. The customer has already booked with a competitor.

**Day 1 with TradeRing — Rising Action:** Dave switches. The same scenario plays out three weeks later. At 7:51 PM his business line rings. TradeRing answers. The AI opens with the plumbing emergency triage: "Hi, you've reached Dave's Plumbing. I'm the after-hours AI assistant. Is there water actively flowing or a visible leak right now?" The caller — Maria — says yes, under her kitchen sink, soaking the cabinet. "Can you locate your main shutoff valve? It's usually in the basement or utility room near where the main line enters the house." Maria says she found it. "Go ahead and shut it off — that will stop the flow. I'm flagging this as an emergency for Dave. Can I get your address?" Maria gives it. The AI takes name, confirms callback number, summarizes the issue.

**Climax:** Dave's phone buzzes at 7:53 PM. "TRADERING [EMERGENCY]: Maria Santos, 1847 Bluebonnet Rd, Houston. Active leak under kitchen sink — main shutoff confirmed closed. Wants callback ASAP. Call: (713) 555-0374." Dave calls back at 8:02 PM. He dispatches his on-call tech.

**Resolution:** $1,400 job. Maria leaves a 5-star Google review: "Called at 8 PM on a Friday and someone helped me immediately." Dave cancels his $75/month answering service. He upgrades to the Shop plan at $199/month.

**Requirements revealed:** After-hours call handling, plumbing emergency triage (active water flow, shutoff instructions), EMERGENCY urgency classification, priority SMS flag, 24/7 availability without calendar booking for emergencies, distinct emergency vs. standard lead handling.

---

### Journey 3: Rosa — Pest Control Route Operator, New Customer Lead

**Persona:** Rosa, 51, pest control operator in Florida. 1 tech (herself) + 1 part-time. 35 residential accounts per week. $95K annual revenue. Loses 2–3 new leads per week during routes.

**Opening Scene:** Rosa is treating a property for German roaches at 10:30 AM. A new customer — finding her via Google — calls her business number. Rosa's phone rings in her pocket. She's in full gear, sprayer in hand, inside a customer's kitchen.

**Rising Action:** TradeRing answers. The AI opens with the pest control script: "Thanks for calling Rosa's Pest Solutions. I'm Rosa's scheduling assistant. Are you calling about an existing service or a new pest problem?" New problem. "What type of pest are you seeing, and roughly how long has this been going on?" Caller describes seeing cockroaches in the kitchen for about 2 weeks. "Are you seeing them inside the home, outside, or both?" Inside. The AI continues: "I can schedule Rosa for an initial inspection and treatment. She has availability Wednesday morning or Friday afternoon this week — which works better?" Caller picks Wednesday.

**Climax:** Rosa's phone buzzes at 10:38 AM. "TRADERING: New booking — David Chen, 4402 Palm Beach Blvd, Fort Lauderdale. German roaches, kitchen, ~2 weeks, inside only. Initial treatment booked: Wed Oct 21 @ 9am. Call: (954) 555-0219." Rosa finishes the current treatment, reads the text during the drive to her next stop. New account secured with zero interruption.

**Resolution:** Wednesday's job pays $180 initial + $120/quarter ongoing service agreement. Rosa adds David to her route. She stops losing new leads during routes — her business grows by 8 accounts in the first 2 months.

**Requirements revealed:** Pest control triage script, new-vs-existing caller classification, pest type identification, Google Calendar booking, route availability, SMS with new booking confirmation.

---

### Journey 4: Owner — Web Dashboard Admin, Quality Review

**Persona:** Mike (same as Journey 1), 3 weeks into using TradeRing. He wants to review a call that didn't convert — the caller didn't book and left without confirming anything.

**Opening Scene:** Mike opens his TradeRing dashboard on a Saturday morning with coffee. He sees the call log — 14 calls this week, 11 booked or message captured, 3 "incomplete." He taps one from Thursday afternoon.

**Rising Action:** The call details panel opens: caller info (partial — "unknown name, (614) 555-0288"), problem description ("furnace not igniting"), urgency level ("STANDARD"), outcome ("caller disconnected before booking"). Recording available. Mike taps play. He hears the AI ask the right questions — but notices it offered "October 26" for an appointment when that date was already full on his calendar. The caller said "that doesn't work for me" and hung up before the AI offered an alternative.

**Climax:** Mike checks his Google Calendar settings. He realizes he hadn't marked October 26 as blocked. He updates his availability blocks. He also notices the AI's script response for "I need something sooner" doesn't acknowledge urgency — it just re-lists available dates. He makes a note to update the script preference for calendar full scenarios.

**Resolution:** Mike now reviews his call log every Saturday. He catches 2 script improvement opportunities in the first month. His booking completion rate rises from 58% to 71% by month 3. He also discovers that 60% of his missed calls happen between 12 PM and 2 PM — he starts briefer lunch breaks and stops missing as many calls organically.

**Requirements revealed:** Call log with outcome categorization (booked, message, incomplete), per-call detail view, recording playback, partial lead capture display, calendar availability management in dashboard settings, call transcript view.

---

### Journey 5: New Account Setup — Self-Serve Onboarding

**Persona:** First-time TradeRing user who signed up from a Reddit post. No technical background. Expects a frustrating setup experience based on prior SaaS experiences.

**Opening Scene:** User clicks the activation email link on a Tuesday evening. It's 8:30 PM. They have 20 minutes before their kid's bedtime.

**Rising Action:** The onboarding flow asks: business name, trade type (dropdown: HVAC / Plumbing / Pest Control), owner name, owner mobile (for SMS). Then: "Your TradeRing number is (419) 555-0100. To forward calls from your business number to TradeRing, follow these steps for [Verizon / AT&T / T-Mobile — selected from dropdown]." Step-by-step instructions with the exact dial codes. "When you're done, tap 'Test my setup.'" User follows instructions, dials the test code, taps the button. TradeRing places a test call to the business number. The user picks up and hears the AI open with the trade-specific greeting.

**Climax:** "Setup confirmed. Your first real call will be answered by TradeRing." The user sets their available appointment hours (Mon–Fri 8 AM–5 PM), connects Google Calendar (OAuth flow), and sees their availability populated. Total elapsed time: 11 minutes.

**Resolution:** User goes to bed. At 9:15 AM the next morning, their first SMS arrives for a real call from a customer who normally would have gotten voicemail.

**Requirements revealed:** Guided onboarding flow, Twilio number provisioning on signup, carrier-specific forwarding instructions (Verizon/AT&T/T-Mobile), test call trigger, availability hour configuration, Google Calendar OAuth, confirmation of setup complete.

### Journey Requirements Summary

| Journey | Key Capabilities Required |
|---------|--------------------------|
| Solo owner first captured lead | Trade triage, booking, SMS notification, calendar integration |
| Emergency after-hours plumbing | 24/7 handling, emergency classification, priority SMS, no-calendar emergency mode |
| Pest control new lead capture | Pest triage, new vs. existing classification, booking |
| Dashboard quality review | Call log, recording playback, transcript, outcome categorization |
| Self-serve onboarding | Number provisioning, carrier instructions, test call, calendar OAuth |

---

## Domain-Specific Requirements

### Compliance & Regulatory

**Call Recording Law (12-State All-Party Consent):**
- Every call must open with an AI disclosure and recording notice: "Hi, this is [Business Name]'s AI assistant. This call may be recorded for quality and training purposes."
- This disclosure satisfies all-party consent requirements in CA, CT, FL, IL, MA, MD, MI, NH, OR, PA, WA, and other all-party states when delivered clearly before conversation begins.
- California AB 2905 (effective January 2025) mandates AI disclosure at the outset of any AI-conducted phone interaction. Penalty: $500/violation. Compliance via mandatory opening statement.
- Disclosure text is hardcoded — not configurable by business owner — to prevent compliance gaps.

**AI Impersonation / Disclosure:**
- The AI must identify itself as an AI assistant, not a human employee. Phrasing: "AI assistant" or "AI scheduling assistant" — never "receptionist" or human name without qualification.
- The business name is included in the opening: "This is [Business Name]'s AI assistant."

**Telephone Consumer Protection Act (TCPA):**
- SMS notifications are sent only to the business owner's registered mobile number — not to callers. No TCPA exposure for owner SMS.
- If outbound follow-up is added in Phase 2, TCPA compliance (prior express written consent) becomes a requirement at that point.

**Data Retention:**
- Call recordings retained for 30 days by default. Owner can download before deletion.
- Lead data retained for 12 months post-account-cancellation, then purged.
- Twilio call metadata retained per Twilio's standard 13-month retention policy.

### Technical Constraints

**Voice AI Vendor Lock-In Mitigation:**
- Primary voice AI: Bland AI ($0.09–$0.14/minute all-in)
- Fallback: Retell AI (same price range, compatible architecture)
- No single-vendor dependency. Voice AI provider abstracted behind a thin wrapper that enables switching without script rewrites.

**Telephony Architecture:**
- Twilio handles inbound call routing, SIP trunking, call recording, and SMS delivery.
- Each business account gets a dedicated Twilio number provisioned programmatically on signup.
- Call forwarding: conditional call forwarding (forward on no-answer, on-busy) not unconditional — this preserves owner ability to answer directly when available.

**Infrastructure Cost Discipline:**
- Per-plan minute caps are hard limits, not soft warnings. When a plan's monthly minute cap is reached, calls route to a voicemail fallback (not TradeRing AI) with owner SMS notification that cap was reached.
- This prevents infrastructure cost runaway and signals upgrade need organically.

### Integration Requirements

| System | Integration Type | Scope |
|--------|-----------------|-------|
| Bland AI | REST API + WebSocket | Voice AI call orchestration |
| Twilio | REST API | Phone number provisioning, call routing, recording, SMS |
| Google Calendar | OAuth 2.0 + REST API | Availability reading, event creation |
| Stripe | REST API + Webhooks | Subscription management, trial start, overage billing |
| AWS S3 | SDK | Recording storage (30-day retention) |
| Supabase | Postgres + Auth | Business data, lead records, user accounts |

---

## Innovation & Novel Patterns

### Detected Innovation Areas

**Trade-Specific Triage as Competitive Moat:**
The primary innovation is operational knowledge embedded as AI script logic. Competitors (My AI Front Desk, Dialzara, Rosie) use generic call scripts. TradeRing's scripts ask the questions a field tech would ask:

- **HVAC:** "Is the system running but not cooling, or not running at all?" / "Is anyone in the home medically dependent on cooling or heat?" / "How old is the system approximately?"
- **Plumbing:** "Is water actively flowing or leaking right now?" / "Can you locate your main water shutoff valve?" / "Is this affecting one fixture or multiple?"
- **Pest control:** "Are you seeing the pests inside the home, outside, or both?" / "Is this a new sighting or an ongoing issue?" / "What type of pest — cockroaches, ants, rodents, something else?"

These questions determine urgency classification and booking priority. They also build caller confidence — a caller who hears the right questions trusts that the business knows its trade.

**The Structural Gap as Market Position:**
The innovation is positional, not purely technical. The $99/month price at full-trades triage coverage is structurally impossible for incumbent enterprise players to match without cannibilizing their core revenue. Avoca cannot launch a $99/month product without destroying their $1K–$3.5K/month positioning. This gap is durable for 12–18 months.

### Market Context

- Avoca AI: $1B valuation, serves ~800–1,000 operators at $1K–$3.5K/month = unserved floor below them
- Voksha: HVAC-only at $49–$99/month — validates price point but leaves plumbing and pest control unaddressed
- Botphonic, Finn AI, CSflow: entering the space in 2026, all still HVAC-primary
- Frontdesk AI: 10,000+ businesses on free/generic tier — proves mass demand, but no trade specificity
- Build window: 12–18 months before a well-funded entrant solves trade specificity at SMB price point

### Validation Approach

**MVP validation signal (first 60 days):**
- 50 paying customers confirms price-point demand
- ≥80% call completion rate confirms AI quality is sufficient for trust
- NPS ≥40 at 90 days confirms product-market fit at this tier
- Organic community referrals (trackable via "how did you hear about us" signup field) >60% confirms community moat is building

### Risk Mitigation

| Risk | Probability | Mitigation |
|------|-------------|------------|
| Bland AI pricing doubles | Medium | Multi-provider abstraction layer; Retell AI fallback ready on Day 1 |
| Voksha expands to plumbing/pest | Medium | Community moat (r/HVAC, Facebook groups) built before product expansion |
| Sameday AI launches sub-$199 tier | Medium | Price war defense: community trust and review base is the real moat |
| CA AB 2905 enforcement action | Low | Mandatory disclosure on every call, pre-launch legal review |
| LTD buyers don't convert to MRR | Medium | Design LTD to demonstrate value; upgrade path at $50/month loyalty discount |

---

## SaaS B2B Specific Requirements

### Project-Type Overview

TradeRing is a vertical SaaS product — a B2B application for a specific industry (home services trades) with a narrow, well-defined customer segment. It is not a horizontal platform. The product's value derives from domain specificity, not generality.

**Key architectural implications:**
- Each business account is fully isolated (no data sharing between accounts)
- Owner is the sole user per account at MVP (no team member access, no multi-user dashboard)
- The "product" is mostly telephony infrastructure + AI orchestration, not a traditional CRUD application
- Dashboard is an audit and management layer — not the primary workflow tool (SMS is the primary workflow)

### Technical Architecture Considerations

**Telephony Flow:**
```
Customer calls business number
  → Conditional call forwarding (no-answer/busy) to Twilio TradeRing number
  → Twilio webhook fires to TradeRing backend
  → Backend initiates Bland AI call session with trade-specific script
  → Bland AI conducts call, extracts structured lead data
  → Backend receives call completion webhook from Bland AI
  → Backend writes lead record to Supabase
  → Backend triggers Twilio SMS to owner's mobile
  → If appointment booked: backend creates Google Calendar event
  → Call recording stored to S3
  → Transcript generated (Deepgram or Whisper)
```

**Data Model (core entities):**
- `accounts` — business account, trade type, Twilio number, owner phone, Stripe subscription
- `leads` — per-call record: caller info, problem description, urgency level, outcome, recording URL, transcript
- `appointments` — booked slots linked to leads and Google Calendar event IDs
- `availability_blocks` — owner-configured available hours per day of week

### Multi-Tenancy Model

- Each account is completely isolated at the data level (Supabase row-level security by account_id)
- Twilio numbers are provisioned per account (1 DID per business)
- No cross-tenant data access at any layer
- No team member access in MVP (sole owner = sole user per account)

### Subscription & Billing Model

| Plan | Price | Minutes/Month | Overage Rate | Notes |
|------|-------|---------------|--------------|-------|
| Solo | $99/month | 200 | $0.35/min | 1 business, 1 owner SMS number |
| Shop | $199/month | 500 | $0.30/min | Up to 3 tech notification routing (Phase 2) |
| LTD | $399 one-time | 300 | Hard cap — no overage | AppSumo early adopters |

- Stripe subscription with 14-day free trial (credit card required at signup)
- Minute tracking per billing cycle; resets on renewal date
- When cap reached: calls route to voicemail, owner receives cap-reached SMS
- Overage billed at end of cycle via Stripe metered billing add-on

### RBAC / Permission Model

MVP has a single role: **Owner** (the account holder). No sub-user roles, no team access, no admin console in MVP.

Post-MVP (Phase 2): add **Tech** role for lead notification routing without dashboard access.

### Implementation Considerations

**Voice AI Script Management:**
- Trade scripts are stored as configuration (YAML or JSON) per trade type, not hardcoded
- This enables script iteration without code deploys
- Triage question sequences, urgency classification rules, and fallback responses are all script config
- Scripts are shared across all accounts of a given trade type — no per-account custom scripts in MVP

**Call Fallback Logic:**
- If Bland AI call session fails to initialize within 3 seconds: Twilio plays a generic recorded message ("Thanks for calling — we're unavailable right now. Please leave a message") and fires a fallback SMS to owner: "[TRADERING] AI call failed — call came from [number]. Check voicemail."
- This ensures no silent failure — owner always knows when a call arrived.

**Google Calendar Availability:**
- TradeRing reads free/busy status from connected Google Calendar
- It does NOT read event details (privacy) — only whether a slot is free or busy
- Available slots offered to caller: next 3 open slots within owner's configured availability hours
- Appointments are created as Google Calendar events with lead details in the description

---

## Functional Requirements

### Call Handling

- FR1: Inbound calls to a TradeRing-provisioned number receive an AI answer within 3 seconds, 24 hours a day, 7 days a week.
- FR2: Every call opens with a mandatory AI disclosure statement identifying the AI as an assistant and stating the call may be recorded, before any other interaction.
- FR3: The AI identifies the appropriate trade script (HVAC, plumbing, or pest control) based on the business account's configured trade type.
- FR4: The AI conducts a structured triage using trade-specific diagnostic questions appropriate to the caller's stated problem.
- FR5: The AI classifies each call as EMERGENCY or STANDARD based on triage responses (urgency criteria defined per trade: active water flow, medical dependency on HVAC, active infestation requiring immediate response).
- FR6: The AI captures caller name, callback phone number, service address, problem description, urgency classification, and preferred callback time during the call.
- FR7: For calls that reach the minute cap mid-conversation, the AI gracefully concludes: "I want to make sure the owner gets back to you — let me take your contact information" and routes to lead capture only.
- FR8: When a call cannot be completed by the AI (Bland AI session failure), Twilio plays a fallback message and the system sends a failure-notification SMS to the owner.

### Lead Management

- FR9: Each completed call creates a lead record containing: caller name, phone, address, problem summary, urgency level, outcome (booked / message captured / incomplete), call date/time, recording URL, transcript.
- FR10: Leads are stored per business account with no cross-account visibility.
- FR11: Leads are retrievable via the web dashboard in reverse chronological order with outcome filtering.
- FR12: Individual lead records display all captured fields, recording playback, and transcript.
- FR13: Lead outcome status transitions: NEW → REVIEWED (when owner views the record).

### Owner Notifications

- FR14: Within 30 seconds of call completion, the owner's registered mobile number receives an SMS containing: lead source label ("[TRADERING]"), caller name, address, urgency flag, problem summary (≤2 sentences), callback preference, caller phone number.
- FR15: EMERGENCY-classified calls receive a distinct SMS prefix ("[TRADERING — EMERGENCY]") to differentiate from STANDARD leads in the owner's notification stream.
- FR16: When the account's monthly minute cap is reached, the owner receives an SMS notification: "[TRADERING] Monthly call limit reached. Calls are now going to voicemail. Upgrade to continue AI answering."
- FR17: When an AI call session fails (fallback triggered), the owner receives an SMS: "[TRADERING] Call failure — [caller number] tried to reach you. Check voicemail."

### Appointment Booking

- FR18: For STANDARD-classified calls, the AI offers the caller the next 3 available appointment slots from the owner's connected Google Calendar within configured availability hours.
- FR19: When the caller selects an appointment slot, the AI confirms the date, time, and address back to the caller verbally before concluding.
- FR20: Confirmed appointments create a Google Calendar event in the owner's calendar with lead details (caller name, address, problem summary, phone) in the event description.
- FR21: For EMERGENCY-classified calls, the AI does not offer scheduled appointments; it captures lead information and communicates urgency ("I'll make sure [Business Name] gets back to you within the hour") before ending the call.
- FR22: When no Google Calendar is connected, the AI captures lead information and confirms a general callback ("Someone from [Business Name] will call you back within the business day") without attempting to book a slot.

### Call Recording & Transcription

- FR23: Every call is recorded in full from the moment TradeRing answers to the moment the call ends.
- FR24: Call recordings are stored in AWS S3 and retained for 30 days from the call date, then automatically deleted.
- FR25: Call transcripts are generated for each recording and stored alongside the recording.
- FR26: Recordings and transcripts are accessible to the account owner via the web dashboard for 30 days from the call date.
- FR27: Recordings can be played back directly in the dashboard (audio player) without requiring download.
- FR28: Account owners can download individual recordings before the 30-day deletion window.

### Business Configuration

- FR29: Account owners can set per-day-of-week availability hours for appointment scheduling.
- FR30: Account owners can configure their business name as used in the AI opening statement.
- FR31: Account owners can connect a Google Calendar account via OAuth and can disconnect it at any time.
- FR32: Account owners can update their owner SMS notification number.
- FR33: Account owners can view their current monthly minute usage and plan cap.
- FR34: Account owners can view call-forwarding setup instructions for their carrier (AT&T, Verizon, T-Mobile) from within the dashboard.

### Account & Onboarding

- FR35: New accounts are created with email + password authentication.
- FR36: A Twilio phone number is provisioned automatically within 60 seconds of account creation.
- FR37: During onboarding, the owner selects their trade type (HVAC / Plumbing / Pest Control) and this selection determines the AI script used for all calls on the account.
- FR38: Onboarding provides carrier-specific call forwarding instructions for conditional forwarding (no-answer, on-busy) to the provisioned Twilio number.
- FR39: A test call button in the onboarding flow places a real call to the provisioned Twilio number, allowing the owner to hear the AI greeting and verify setup before going live.
- FR40: Accounts start a 14-day free trial on creation; a valid payment method is required at signup via Stripe.

### Billing & Subscription

- FR41: Accounts are billed monthly via Stripe at the plan rate starting after the 14-day free trial.
- FR42: Monthly minute usage is tracked per account and resets on the billing cycle renewal date.
- FR43: When monthly minutes are exceeded, per-minute overage charges are calculated at the plan rate and billed at end of cycle via Stripe metered billing.
- FR44: Account owners can upgrade or downgrade their plan from the billing settings page; changes take effect at the next billing cycle.
- FR45: Account owners can cancel their subscription from the billing settings page; cancellation takes effect at the end of the current billing period.
- FR46: LTD accounts have a fixed 300-minute/month cap with no overage — calls route to voicemail when cap is reached.

---

## Non-Functional Requirements

### Performance

- NFR1: The AI must produce a first spoken response within 1.5 seconds of the caller finishing their sentence, measured end-to-end from Twilio receiving audio to Bland AI returning synthesized speech, for 95th percentile of calls.
- NFR2: Owner SMS notifications must be delivered within 30 seconds of call completion for 99th percentile of calls, as measured by Twilio delivery confirmation timestamps.
- NFR3: Google Calendar event creation must complete within 10 seconds of booking confirmation, measured from booking webhook receipt to Calendar API response.
- NFR4: Dashboard call log must load within 2 seconds for accounts with up to 500 calls in history, measured from page load to first data render.
- NFR5: Twilio number provisioning during onboarding must complete within 60 seconds of account creation, as measured by Twilio API response time.

### Reliability

- NFR6: Call handling infrastructure must maintain ≥99.5% monthly uptime, measured as the percentage of inbound calls that receive either an AI response or a fallback voicemail message without silent failure.
- NFR7: The fallback voicemail + owner SMS path must execute in ≤5 seconds when the Bland AI session fails to initialize, ensuring no call is silently dropped.
- NFR8: Twilio SMS delivery failures must trigger an automatic retry (≤3 retries at 30-second intervals) before marking a notification as failed.
- NFR9: Google Calendar OAuth tokens must be refreshed proactively before expiry; when refresh fails the system must notify the owner and disable booking (falling back to message-only mode) rather than crashing the call.

### Security

- NFR10: All call recordings stored in S3 must be encrypted at rest using AES-256.
- NFR11: All data in transit between TradeRing backend and Twilio, Bland AI, Google Calendar, and Stripe must use TLS 1.2 or higher.
- NFR12: The Supabase Postgres database must enforce row-level security by account_id so that no account can access another account's leads, recordings, or settings via any application path.
- NFR13: Stripe is the exclusive handler of all payment card data — TradeRing never stores, logs, or transmits raw card numbers. PCI-DSS SAQ-A compliance via Stripe.
- NFR14: Google Calendar OAuth tokens are stored encrypted (not in plaintext) and scoped to free/busy read + event write only (no full calendar access).
- NFR15: All admin actions (plan changes, phone number changes, calendar connect/disconnect) are logged with timestamp and actor for 12 months.

### Scalability

- NFR16: The backend must support 500 concurrent active Twilio call sessions without performance degradation, enabling 500 simultaneous businesses each receiving a call at the same moment.
- NFR17: Database queries for call log retrieval must perform within the response time NFR4 target up to 10,000 accounts and 5M lead records without index redesign.

### Integration Reliability

- NFR18: Bland AI API calls must implement a circuit breaker: if 3 consecutive session initializations fail within a 5-minute window, the system switches to fallback mode for all new calls until Bland AI availability is restored.
- NFR19: Twilio webhook handlers must return 2xx HTTP responses within 5 seconds to prevent Twilio from retrying the webhook (which would create duplicate lead records).
- NFR20: Google Calendar API rate limits (1,000 requests/user/100 seconds) must be respected; booking requests must be queued when approaching the limit rather than failing.

### Compliance

- NFR21: The AI disclosure opening statement ("Hi, this is [Business Name]'s AI assistant. This call may be recorded.") must be present in 100% of answered calls — no configuration option exists to disable it.
- NFR22: Call recording deletion must execute automatically at 30 days post-call; the system must run a daily deletion job and log completion. Recording URLs must return 404 after deletion.
- NFR23: All Twilio phone numbers provisioned for TradeRing must be registered with the Twilio A2P 10DLC campaign for business SMS (required for Twilio SMS deliverability to US numbers as of 2023).

