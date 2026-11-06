---
stepsCompleted: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
inputDocuments:
  - ideas/shortlisted/ai-voice-receptionist-home-services.md
  - _bmad-output/planning-artifacts/market-research-ai-voice-receptionist-home-services.md
  - _bmad-output/planning-artifacts/product-brief-ai-voice-receptionist-home-services.md
workflowType: 'prd'
research_topic: 'ai-voice-receptionist-home-services'
user_name: Root
date: '2026-11-06'
classification:
  projectType: saas_b2b
  domain: voice_ai_home_services
  complexity: medium
  projectContext: greenfield
documentCounts:
  briefCount: 1
  researchCount: 1
  brainstormingCount: 0
  projectDocsCount: 0
---

# Product Requirements Document — RingMate: AI Voice Receptionist for Home Services

**Author:** Root
**Date:** 2026-11-06

---

## Executive Summary

Small HVAC, plumbing, and pest control businesses (1–10 trucks, $200K–$600K annual revenue) miss 30–40% of inbound calls because the owner is in the field. Each missed call costs $300–2,000 in lost job revenue. The only current options — a full-time receptionist at $3,500/month, a generic answering service at $200–400/month that only takes messages, or voicemail — all fail the trades shop owner at the moment that matters most: when an emergency caller is about to call the competitor.

**RingMate** is a 24/7 AI voice receptionist purpose-built for home-services trades. It answers every inbound call in a natural, HVAC-native voice, correctly triages emergency dispatches from routine bookings, pushes confirmed appointments directly into Jobber or Housecall Pro via webhooks (no customer plan upgrade required), and delivers an owner dashboard showing every call outcome and estimated revenue captured.

The enterprise AI platforms — Broccoli ($52M raised, Khosla/YC) and Avoca ($1B valuation, $125M raised) — have validated this category at scale. Both explicitly serve multi-location companies doing $1M+ per year. The 500,000+ small shops doing $200K–$600K per year are priced out of their solutions. RingMate owns that gap: niche-trained, niche-priced, and niche-integrated from day one at $199–299/month.

The business case is binary and visceral: a single recovered emergency HVAC call in July pays for three months of service. The path to $10K MRR is 50 clients, achievable within 12 months via community go-to-market in the channels where these owners already congregate.

### What Makes This Special

**HVAC-native call intelligence is the core differentiator.** No tool at the $199–299/month price point is simultaneously (1) trained on HVAC/plumbing/pest control vocabulary and triage logic, (2) integrated with Jobber and Housecall Pro without requiring FSM plan upgrades, and (3) designed specifically for the sub-$500K independent shop.

The product's core insight is that "answering a call" and "handling a call correctly" are entirely different capabilities. Generic AI voice platforms answer calls. RingMate classifies job type, priority, and next action in real time — routing emergencies to owner SMS alert, routine jobs to calendar booking with FSM push, and maintenance inquiries to CRM capture. This triage accuracy is what earns word-of-mouth in trades communities and creates genuine switching cost.

The long-term moat is a proprietary training dataset built from real trades calls — emergency keyword libraries, regional dialect patterns, seasonal demand shifts, pest-specific triage logic. This data flywheel is what makes the niche-trained product defensible against generic platforms moving down-market.

**Secondary differentiators:**
- FSM webhook integration works at all Jobber/HCP subscription tiers — no customer upgrade required
- Spanish-language variant (Month 2–3) addresses 25–40% of Sun Belt trades calls with zero existing competition
- Transparent call credits model eliminates cost uncertainty and enables honest LTD pricing
- Sub-$500K shop pricing: $199/month is 94% cheaper than Avoca and 56% cheaper than Sameday

## Project Classification

- **Project Type:** SaaS B2B — web application with telephony integration layer
- **Domain:** Voice AI for home-services trades (HVAC, plumbing, pest control)
- **Complexity:** Medium — telecom compliance requirements (STIR/SHAKEN, call recording consent), real-time voice AI with <500ms latency requirements, webhook integrations with third-party FSM platforms
- **Project Context:** Greenfield — no existing codebase; building from scratch using Retell AI voice infrastructure + GPT-4o-mini/GPT-4o LLM layer + webhook-first FSM integration

---

## Success Criteria

### User Success

The primary user outcome is recovering at least one missed-call job per month that covers the monthly subscription cost. Success is measured by the "first booked job" moment — when the shop owner sees a job in their dashboard (or Jobber/HCP) that RingMate booked while they were unavailable.

**User success metrics:**

| Metric | Target | Measurement Method |
|---|---|---|
| Time to first booked call | < 72 hours post-onboarding | Dashboard event: first booking logged |
| Call answer rate | > 95% of inbound calls answered | Call log: answered / (answered + missed) |
| Correct triage rate | > 90% calls routed to correct action | Owner-reported or spot-check review |
| Owner dashboard weekly visits | > 1 visit/week at 60 days | Product analytics |
| Net Promoter Score at 90 days | > 60 | In-app NPS survey |
| 90-day retention | > 80% | Subscription churn tracking |

**User success milestones:**
- Month 1: Owner completes onboarding in < 60 minutes and receives first live call
- Month 1–2: Owner identifies at least one job booked that would have been a voicemail miss
- Month 3: Owner can demonstrate ROI to a peer (basis for word-of-mouth referral)

### Business Success

**12-month revenue targets:**

| Metric | Target |
|---|---|
| Monthly Recurring Revenue | $10,000 (50 clients × $199/mo average) |
| Total paying customers | 50+ |
| Gross margin | > 70% |
| CAC (blended across channels) | < $200 |
| CAC payback period | < 1.5 months |
| Monthly churn rate | < 2% |
| Trial-to-paid conversion | > 40% |

**6-month milestone gates:**
- Month 1–2: 10 paying clients via community channels (Reddit, Facebook groups) at zero paid CAC
- Month 3–4: 25 clients; AppSumo LTD launch initiated; unit economics validated
- Month 5–6: 50 clients; agency/reseller channel active; Spanish-language variant launched

**Unit economics gate (validate before scaling):** COGS/client < $60/month at $199/month price point (requires Retell AI infrastructure + LLM averaging < $0.10/minute at 60–120 calls/month typical volume).

### Technical Success

- RingMate completes a live HVAC call with correct triage in production environment (End of Week 4)
- Jobber webhook push works without customer needing to upgrade FSM plan (End of Week 4)
- Onboarding flow completes in < 60 minutes for a non-technical owner (End of Week 4)
- Voice response latency < 500ms for call handling (ongoing)
- System uptime > 99.5% (ongoing)
- Call recording storage compliant with two-party consent laws in relevant states (ongoing)

### Measurable Outcomes

**Leading indicators of product-market fit:**
- Trial users who reach "first booked call" within 72 hours have 3× higher 90-day retention
- Customers who connect Jobber/HCP integration have 40% lower churn (hypothesis; validate in first cohort)
- Community posts mentioning RingMate generate new trial signups at zero CAC

**Go/No-Go Signal:**
If 10 customers achieve > 75% 90-day retention with confirmed ROI proof stories → scale to $10K MRR sprint. If retention < 60% at 10-customer cohort → investigate triage quality before scaling acquisition.

## Product Scope

### MVP — Minimum Viable Product

The MVP must deliver the "first booked job" moment within 72 hours of onboarding for HVAC and plumbing shops. It represents the minimum feature set that creates measurable, undeniable ROI for a 2-truck trades shop.

**MVP core capabilities:**
1. 24/7 AI voice answering on a forwarded business number (Retell AI voice layer)
2. HVAC-specific and plumbing-specific call scripts with job triage engine
3. Emergency detection and owner SMS alert (no-heat, no-cool, sewage backup, active leak)
4. Google Calendar availability check and appointment booking with SMS confirmation to caller
5. Jobber webhook integration — create job with job type classification (all Jobber tiers)
6. Housecall Pro webhook integration — create job with job type and priority (all HCP tiers)
7. Owner dashboard: call log, outcomes, booked jobs, missed-call alerts
8. Onboarding flow: number forwarding setup, trade vertical selection, calendar/FSM connection, test call
9. Post-call owner SMS notification with call summary

**Target build timeline:** 3–4 weeks

### Growth Features (Post-MVP)

Planned for Months 2–4 based on customer feedback and unit economics validation:

- Spanish-language HVAC and plumbing variant (Month 2–3) — first-mover in Sun Belt market
- Pest control trade vertical with pest-specific triage logic (German cockroach emergency vs. routine service)
- Native Jobber and HCP API integration (beyond webhooks) for deeper dispatch board push
- Agency/reseller portal with multi-client dashboard and white-label capability
- Missed-call text-back: automated SMS to caller within 2 minutes if call drops before triage
- Monthly ROI report emailed to owner (jobs booked, estimated revenue recovered vs. subscription cost)
- AppSumo LTD launch ($599 tier with 3,000 included call minutes)

### Vision (Future)

Planned for Year 2+ as category deepens:

- ServiceTitan, FieldEdge, and Successware integrations (serves $600K+ shop tier)
- Garage door, septic service, chimney, and pool cleaning sub-verticals
- Multi-trade support (single subscription covers HVAC + plumbing for combination shops)
- Outbound follow-up campaigns (call back unclosed estimates, maintenance reminder calls)
- Call analytics and competitive intelligence dashboard (avg response rate vs. industry benchmark)
- AI-powered service agreement upsell detection
- Bilingual AI across 10+ trade verticals
- Potential horizontal expansion into dental, veterinary, and legal (adjacent phone-answering markets)

---

## User Journeys

### Journey 1: Marcus — 2-Truck HVAC Owner, Peak Season Emergency Miss

**Persona:** Marcus runs a residential HVAC company (7 years, Houston TX, $280K revenue). He has two full-time techs and a 20-hour/week part-time admin. Last July, he found 11 voicemails on a Monday morning — all from the previous weekend. He uses Jobber. He found Jobber via a Facebook recommendation and set it up in an afternoon.

**Opening scene:** It's a Tuesday in July. Marcus is on a roof replacing a condenser. His phone rings at 2:14 PM — he's in the middle of an installation and can't answer. The caller hears voicemail and hangs up. Marcus finds out 90 minutes later when he checks his phone. By then, the caller has already booked with a competitor. The caller was a new homeowner — $1,800 emergency replacement job, plus a likely maintenance agreement.

**Discovery:** Marcus's admin shows him a Facebook post in "HVAC Business Owners TX" — another owner describing how they recovered a $2,200 Saturday emergency using an AI receptionist for $199/month. Marcus Googles "AI answering service for HVAC" and lands on RingMate's page. He sees: $199/month, HVAC-native triage, integrates with Jobber. Those are his three questions answered before he even reads further.

**Onboarding (rising action):** Marcus signs up for a 7-day trial. The setup wizard walks him through: forward his business number to a RingMate number, select "HVAC" as trade vertical, connect to his Jobber account via webhook, set his service area and business hours. He runs a test call. RingMate answers, says "Hi, you've reached [Marcus's company name], how can I help today?" Marcus says "My air conditioner isn't working" and hears RingMate correctly triage it as a service call and offer to book an appointment. Total onboarding time: 42 minutes.

**Climax — The aha moment:** Friday at 6:47 PM. Marcus is driving home. A caller contacts his number with no heat (incorrect — it's a no-cool emergency in July). RingMate answers, asks qualifying questions, identifies it as an emergency cooling failure, books the job for Saturday 8 AM in Marcus's Jobber dispatch board, and sends Marcus an SMS: "Emergency AC call: Smith residence, 123 Oak Street. No cool since yesterday. Booked Sat 8 AM. Caller: 713-555-0192." Marcus sees the notification at 7:03 PM. He checks Jobber — the job is there, job type: AC Emergency, notes from the call.

**Resolution:** Saturday job pays $1,650. Marcus tells his admin Monday: "RingMate paid for itself five times over in one call." The next week, he posts in his Facebook group: "Anyone else using this? Worth it." Three peers ask for the link.

**Journey requirements revealed:** voice answering with HVAC-specific scripts, real-time job triage with emergency detection, Jobber webhook job creation with job type classification, owner SMS alert with call summary, owner dashboard with job log.

---

### Journey 2: Sandra — Solo Plumber, Spanish-Caller Emergency

**Persona:** Sandra is a licensed plumber running solo in Phoenix AZ ($190K revenue). She's in the field 8–10 hours a day. 30–40% of her calls come in Spanish. She pays $400/month for Google Local Services Ads and misses half the leads that come in. She uses Google Calendar.

**Opening scene:** Sandra is mid-job under a kitchen sink. Her phone rings. It's a Spanish-speaking homeowner whose water heater has just failed — no hot water, family of 5. Sandra's phone goes to voicemail. The caller doesn't leave a message. They call another plumber from the Google results. Sandra loses a $900 water heater replacement job she paid $40 in ad spend to generate.

**Discovery — trigger event:** Sandra calculates her lead-to-answer rate: she's paying $400/month for about 25 leads and converting roughly 10 — missing 15 that she couldn't answer. At $600 average ticket, that's $9,000/month in missed revenue from calls she paid to generate. She finds RingMate through a Reddit post in r/Plumbing.

**Spanish variant onboarding:** Sandra signs up and selects "Plumbing" and enables the Spanish-language variant (Month 2–3 feature). She sets her calendar availability and connects Google Calendar.

**Climax:** A Spanish-speaking caller contacts her number on a Thursday afternoon with water heater failure. RingMate answers in Spanish, correctly identifies it as an urgent water heater replacement (not a routine repair), books an appointment for the next morning, and sends Sandra an SMS summary in English: "Water heater emergency: Ramirez, 4821 Camelback Dr. Hot water out 2 days. Booked Fri 9 AM. Spanish caller. 602-555-0847."

**Resolution:** Sandra books the job, quotes $950 on-site. The customer leaves a 5-star Google review: "She answered right away and was there the next morning." Sandra realizes she converted a lead that would have gone to a competitor — a lead she paid $40 to generate.

**Journey requirements revealed:** Spanish-language call handling, plumbing-specific scripts (water heater emergency detection), Google Calendar integration for availability and booking, SMS summary to owner with translated summary.

---

### Journey 3: Dale — 5-Truck Pest Control, After-Hours Weekend Booking

**Persona:** Dale runs a pest control route business in Atlanta GA (5 technicians, $450K revenue). His office manager handles calls during business hours. After 5 PM and on weekends, calls go unanswered. He uses Housecall Pro. He evaluated Broccoli but was told it wasn't recommended for his revenue tier.

**Opening scene:** Saturday 10:30 AM. A homeowner has just found a large rodent entry point in their crawlspace. It's the weekend. Dale's office is closed. The caller reaches voicemail and doesn't leave a message — they call two more pest control companies. The third one answers and books the job. Dale's on-call tech, who was available, never knew the call came in. The job was an $800 rodent exclusion.

**Discovery:** Dale finds RingMate through a recommendation from another HCP user in the HCP community Facebook group. He notes that RingMate's webhook integration doesn't require upgrading his HCP plan — this was the blocker with a previous product he evaluated.

**Onboarding:** Dale selects "Pest Control" trade vertical, connects Housecall Pro webhook, sets after-hours and weekend as the primary active window, sets his on-call tech's number for emergency escalation.

**Climax:** The following Saturday at 10:30 AM, an identical situation occurs. This time, RingMate answers. It identifies the caller's concern (rodents, evidence of entry points), classifies the job as urgent, creates a job in Housecall Pro with job type "Rodent Exclusion/Emergency," and sends an alert to both Dale and his on-call tech. The tech calls back within 20 minutes and books a Monday appointment.

**Resolution:** Dale reviews his first month: 3 weekend jobs booked that would have been voicemails. $2,100 in revenue from calls that previously disappeared. He upgrades to the $299/month unlimited plan.

**Journey requirements revealed:** pest control-specific call scripts and triage, HCP webhook job creation, after-hours/weekend scheduling configuration, tech escalation SMS alert, owner dashboard showing weekend bookings.

---

### Journey 4: Agency Reseller — Managing Multiple Client Accounts

**Persona:** An agency owner who manages marketing and operations for 8 HVAC and plumbing shops across the Southeast. They run $800/month per client for setup + monthly SaaS retainer. They handle onboarding, script customization, and reporting for each client.

**Opening scene:** The agency owner is onboarding a new HVAC client. Currently, they manually configure each tool across clients. They need to view all 8 client accounts in one dashboard, see which ones have calls coming in, check triage accuracy, and generate monthly ROI reports for client retention.

**Journey:** Agency logs into a multi-client dashboard (Phase 2 feature), selects "New Client," enters client business details (trade vertical, service area, business hours), connects the client's Jobber account via webhook, and customizes call scripts for the client's specific service area and pricing. They run a test call, confirm it works, and hand off to the client. Monthly, they pull a per-client call log and ROI report to show client the value.

**Journey requirements revealed:** agency/reseller multi-client portal, per-client configuration management, per-client call log and ROI reporting, white-label capability (Phase 2).

---

### Journey Requirements Summary

| Journey | Core Capabilities Needed |
|---|---|
| Marcus (HVAC emergency) | Voice answering, HVAC triage, Jobber webhook, emergency SMS alert, dashboard |
| Sandra (Spanish plumber) | Spanish language, plumbing scripts, Google Calendar, translated SMS summary |
| Dale (pest control weekend) | Pest control scripts, HCP webhook, weekend scheduling, tech escalation |
| Agency reseller | Multi-client portal, per-client config, ROI reporting, white-label |

---

## SaaS B2B Specific Requirements

### Project-Type Overview

RingMate is a SaaS B2B product with a telephony integration layer. The primary delivery model is a subscription web application accessed via browser by the shop owner or admin. The core value-delivery layer is a real-time voice AI system that operates independently of the owner's browser session — calls are handled 24/7 regardless of whether the owner is logged in. This architecture requires:

- Persistent voice agent running on hosted infrastructure (not user-session-dependent)
- Asynchronous event dispatch (SMS alerts, webhook pushes) triggered by call events
- Web dashboard as the owner's control and monitoring surface (not the core value delivery surface)

### Technical Architecture Considerations

**Voice layer (Retell AI):**
- Call forwarding: Owner's business number forwards to a RingMate-issued Twilio number
- Retell AI handles: speech-to-text, LLM routing, text-to-speech, latency management
- Latency target: < 500ms turn-around for natural conversation flow
- LLM routing: GPT-4o-mini for routine classification flows; GPT-4o/Claude Sonnet for complex triage
- Call recording: stored with caller consent disclosure at call start (state-specific two-party consent handling)

**FSM integration (webhook-first):**
- Jobber: webhook to `/api/v1/jobs` endpoint — creates job with job type, description, customer contact, scheduled time
- Housecall Pro: webhook to HCP webhook API — creates job with job type, priority flag, customer record
- Webhook approach works at all FSM subscription tiers — no customer plan upgrade required
- Fallback: if webhook fails, owner SMS includes all job details for manual entry

**Dashboard (web application):**
- Authentication: email/password + magic link (no OAuth complexity for MVP)
- Real-time updates: polling acceptable for MVP (WebSocket for call-active indicator in Phase 2)
- Mobile-responsive: owners check dashboard from mobile; full functionality required on mobile browser

### Multi-Tenancy Model

Each customer account is fully isolated:
- Dedicated Twilio phone number per account
- Isolated call logs, recordings, and job data
- Independent webhook configurations per account
- No shared AI context between customer accounts (each account's call scripts are isolated)

### Subscription and Billing Model

- **Starter ($199/month):** Up to 100 calls/month, Google Calendar booking, basic dashboard
- **Pro ($299/month):** Unlimited calls + SMS follow-up + Jobber/HCP webhook integration
- **LTD ($599):** 3,000 included call minutes (~2 years typical usage) + credit pack refills
- Call minutes tracking: displayed in dashboard; owner receives alert at 80% and 100% usage
- Overage handling: Starter plan pauses answering at 100 calls and notifies owner (no surprise charges)

### Integration Requirements

**Inbound:** Twilio phone number (number provisioning, forwarding, call handling)
**Voice AI:** Retell AI API (agent management, call handling, transcript retrieval)
**LLM:** OpenAI API (GPT-4o-mini primary, GPT-4o escalation)
**Calendar:** Google Calendar API (availability check, event creation, OAuth2 per customer account)
**FSM — Jobber:** Jobber webhook API (job creation, no OAuth required for webhook push)
**FSM — HCP:** Housecall Pro webhook API (job creation, customer record creation)
**SMS:** Twilio Messaging API (owner alert, caller confirmation, missed-call text-back)
**Payments:** Stripe (subscription billing, credit pack purchases, LTD redemption)

### Implementation Considerations

- Telecom compliance: STIR/SHAKEN for outbound calls; TCPA for SMS; state-specific call recording consent disclosure
- Voice quality: RingMate must pass the "doesn't hang up" test for homeowners in distress — conversation quality and triage accuracy are non-negotiable at launch
- Onboarding < 60 minutes: non-technical owner (Marcus persona) must complete full setup in under an hour with zero phone support
- Graceful degradation: if Retell AI is unavailable, forward directly to owner's cell as fallback

---

## Project Scoping & Phased Development

### MVP Strategy & Philosophy

**MVP Approach:** Problem-solving MVP — deliver the minimum viable experience that makes a shop owner say "this paid for itself" within the first month.

The MVP is not a feature-complete product. It is a narrow, deeply reliable solution to one problem: missed inbound calls during business hours and after hours for HVAC and plumbing shops. The MVP is validated when 10 paying customers achieve > 75% 90-day retention with documented ROI proof moments.

**Resource Requirements:** 1 full-stack developer + 1 PM/founder × 3–4 weeks for MVP build.

### MVP Feature Set (Phase 1)

**Core User Journeys Supported:**
- Marcus (HVAC owner) — emergency call → Jobber webhook → owner SMS alert
- Sandra (solo plumber) — routine call → Google Calendar booking → caller SMS confirmation
- Dale (pest control) — after-hours call → HCP webhook → tech escalation SMS

**Must-Have Capabilities:**

| Capability | Rationale |
|---|---|
| 24/7 AI voice answering via Retell AI | Core value delivery — without this, nothing else matters |
| HVAC-specific call scripts + triage | Differentiator from generic tools — without this, same as NextPhone |
| Plumbing-specific call scripts + triage | Second trade vertical for launch; significantly expands TAM |
| Emergency detection + owner SMS alert | #1 user success moment for high-ticket emergency jobs |
| Google Calendar booking | Required for Sandra persona; covers shops not on Jobber/HCP |
| Jobber webhook integration | Required for Marcus persona; core marketing claim |
| HCP webhook integration | Required for Dale persona; second FSM integration |
| Owner dashboard (call log, outcomes, jobs) | Required for owner to see value and justify renewal |
| Caller confirmation SMS | Builds trust with caller; reduces no-shows |
| Onboarding wizard (< 60 min) | Without this, non-technical owners can't get to value |
| Test call feature | Required for onboarding confidence |
| Number forwarding setup guide | First step in onboarding; must work frictionlessly |

**Deferred from MVP:**
- Spanish-language variant (Month 2–3)
- Pest control trade vertical (Month 2–3)
- Missed-call text-back automation (Month 2)
- Monthly ROI report email (Month 2)
- Agency/reseller portal (Month 4–6)
- ServiceTitan integration (Month 3–4)
- Mobile native app (Month 6+)
- Multi-location support (Year 2)

### Post-MVP Features

**Phase 2 (Month 2–4): Market Penetration**
- Spanish-language HVAC and plumbing variant (first-mover, Sun Belt TAM)
- Pest control trade vertical (3rd vertical, $450K revenue tier)
- Missed-call text-back (automated SMS within 2 minutes of dropped call)
- Monthly ROI report email (retention tool; reduces churn by giving owners quantified value)
- AppSumo LTD launch ($599 tier with 3,000 call minutes + credit pack refills)
- Garage door and HVAC tune-up seasonal script updates

**Phase 3 (Month 5–6+): Distribution Expansion**
- Agency/reseller portal with multi-client dashboard
- White-label capability for agency partners
- Native Jobber and HCP API integration (deeper dispatch board push)
- ServiceTitan, FieldEdge integration (opens $600K+ revenue tier)
- Outbound estimate follow-up campaigns

### Risk Mitigation Strategy

**Technical Risks:**
- Voice quality / latency: Retell AI is validated (used by enterprise AI voice platforms); risk is LLM prompt tuning for HVAC-native triage. Mitigation: 2-week pre-launch call script testing with 3–5 beta users.
- Webhook reliability: FSM webhooks can fail silently. Mitigation: retry logic with exponential backoff + owner SMS fallback with full job details.
- Number porting friction: Carriers have varying forwarding reliability. Mitigation: test with top 5 carriers (Verizon, AT&T, T-Mobile, Google Voice, RingCentral) before launch.

**Market Risks:**
- Enterprise players moving down-market: Broccoli and Avoca are focused on enterprise sales motions; moving to $199/month would require a full go-to-market restructure. 12–18 month runway before this is likely.
- Mitigation: build niche depth (Spanish variant, specific trade verticals) that enterprise players won't prioritize for the sub-$500K market.

**Resource Risks:**
- Retell AI pricing changes: Retell charges $0.07–0.115/minute. At 100 calls/month × 3 min avg = 300 minutes × $0.115 = $34.50 COGS for voice alone. At $199/month, this is 17% COGS — acceptable. Monitor and renegotiate at volume.
- LLM costs: GPT-4o-mini at $0.15/1M tokens for routine flows keeps costs < $5/month per typical account. GPT-4o reserved for complex triage only.

---

## Functional Requirements

### Call Handling & Answering

- FR1: System can answer 100% of inbound calls to a customer's forwarded business number, 24 hours a day, 7 days a week
- FR2: System can initiate a natural-language voice conversation with an inbound caller using a fluent, low-latency voice agent
- FR3: System can greet callers with the customer's configured business name and service area
- FR4: System can conduct multi-turn voice conversations to gather caller name, phone number, address, and reason for calling
- FR5: System can disclose call recording at the start of each call with appropriate state-specific consent language
- FR6: System can transfer call to the shop owner's configured cell number when owner requests live transfer
- FR7: System can handle caller-initiated hang-up gracefully and log the incomplete call with available information

### Call Triage & Job Classification

- FR8: System can classify each inbound call into one of the defined job categories: Emergency Dispatch, Routine Service Booking, Maintenance Inquiry, Equipment Quote, General Question, or Spam
- FR9: System can detect emergency conditions using trade-specific keyword recognition: no-heat, no-cool, sewage backup, active water leak, rodent emergency, and other high-urgency indicators
- FR10: System can assign urgency score to each call based on job type, time of day, and emergency language
- FR11: System can apply HVAC-specific triage logic to distinguish emergency heat/cool calls from routine tune-up requests
- FR12: System can apply plumbing-specific triage logic to distinguish emergency leak/backup calls from routine repair requests
- FR13: System can apply pest control-specific triage logic to distinguish urgent rodent/infestation calls from routine service bookings (Phase 2)

### Appointment Booking

- FR14: System can check the customer's Google Calendar for available appointment slots in real time
- FR15: System can offer available appointment times to callers and confirm booking selection via voice
- FR16: System can create a Google Calendar event with caller details, job type, and service address
- FR17: System can send an SMS confirmation to the caller with appointment date, time, and address
- FR18: System can push job creation to Jobber via webhook with job type classification, caller contact information, service address, and scheduled time
- FR19: System can push job creation to Housecall Pro via webhook with job type, priority flag, customer record, and scheduled time
- FR20: System can handle cases where no available slots exist and offer to record caller contact information for follow-up

### Owner Notifications & Alerts

- FR21: System can send owner an SMS alert immediately following an emergency-classified call with caller name, phone number, address, job type, and booked time
- FR22: System can send owner a post-call SMS summary for all non-emergency calls with call outcome and next action
- FR23: System can send owner a missed-call SMS alert if a call ends before triage is completed (Phase 2)
- FR24: System can send owner an automated SMS text-back to the caller within 2 minutes of an incomplete call (Phase 2)

### Owner Dashboard & Account Management

- FR25: Owner can view a chronological call log with date, time, duration, caller number, call outcome, and job classification
- FR26: Owner can view the status of each call: answered/triaged/booked/escalated/incomplete/spam
- FR27: Owner can listen to call recordings from the dashboard (with consent compliance)
- FR28: Owner can view a summary of estimated revenue captured from booked calls in the current month
- FR29: Owner can configure business name, service area, business hours, and after-hours behavior
- FR30: Owner can configure emergency escalation: which number receives SMS alerts, which calls trigger live transfer
- FR31: Owner can connect and disconnect Google Calendar integration with OAuth2 flow
- FR32: Owner can configure Jobber webhook URL and test webhook connectivity
- FR33: Owner can configure Housecall Pro webhook URL and test webhook connectivity
- FR34: Owner can view current call minute usage and remaining credits in current billing period
- FR35: Owner can receive in-dashboard notification when call minutes reach 80% and 100% of plan limit

### Onboarding & Account Setup

- FR36: New customer can complete account setup including number forwarding, trade vertical selection, calendar connection, and FSM webhook configuration in a single guided flow
- FR37: Customer can provision a dedicated business phone number through the onboarding flow
- FR38: Customer can test the configured AI receptionist by calling their forwarded number from within the onboarding flow
- FR39: Customer can select their primary trade vertical (HVAC, Plumbing) during onboarding to load appropriate call scripts and triage logic
- FR40: Customer can configure business hours and service area during onboarding

### Subscription & Billing

- FR41: Customer can subscribe to a monthly plan (Starter or Pro) via credit card through a Stripe-powered checkout
- FR42: Customer can purchase a Lifetime Deal (LTD) with included call minutes and credit pack refills
- FR43: Customer can purchase additional call minute credit packs when approaching usage limits
- FR44: Customer can view invoices and billing history in the account settings
- FR45: Customer can cancel or pause subscription with self-service flow

### Agency & Reseller (Phase 2)

- FR46: Agency user can manage multiple client accounts from a single dashboard with per-client call logs and configurations (Phase 2)
- FR47: Agency user can onboard a new client account, configure trade vertical, scripts, and FSM integrations on behalf of client (Phase 2)
- FR48: Agency user can generate per-client monthly ROI reports showing calls handled, jobs booked, and estimated revenue recovered (Phase 2)

---

## Non-Functional Requirements

### Performance

- **Call answer latency:** Inbound call must be answered within 2 rings (< 6 seconds from first ring to AI voice greeting)
- **Conversation turn latency:** AI voice response must begin within 500ms of caller completing a turn to maintain natural conversation flow; this is non-negotiable for homeowners in distress
- **Webhook dispatch latency:** Jobber/HCP webhook push must complete within 30 seconds of call completion
- **SMS alert latency:** Owner emergency SMS must be delivered within 60 seconds of call triage completion
- **Dashboard load time:** Call log and dashboard views must load within 3 seconds on mobile browser
- **Calendar availability check:** Real-time slot lookup must complete within 2 seconds to avoid awkward pauses in call flow

### Reliability

- **Uptime target:** 99.5% monthly uptime for the call-answering layer (< 3.6 hours downtime/month)
- **Failover behavior:** If Retell AI is unavailable, inbound calls must forward directly to the owner's configured cell number — silent failure is not acceptable
- **Webhook retry:** Failed webhook pushes retry 3× with exponential backoff (30s, 2min, 10min); on final failure, owner SMS alert with full job details for manual entry
- **Data durability:** Call logs and recordings must be retained for 36 months minimum; lost call data is a trust-killing failure mode

### Security

- **Data in transit:** All API communication encrypted via TLS 1.2+
- **Data at rest:** Call recordings encrypted at rest (AES-256)
- **Authentication:** Dashboard requires email verification; session tokens expire after 30 days of inactivity
- **Webhook security:** Outbound webhooks signed with HMAC-SHA256 so receiving systems can verify origin
- **PII handling:** Caller phone numbers, names, and addresses are PII; retained only as long as the subscription is active + 36-month legal minimum; not shared between customer accounts
- **Call recording consent:** System must play consent disclosure and log consent before recording; two-party consent language applied for CA, FL, IL, and other two-party states

### Scalability

- **Initial scale:** System must support 50 concurrent customer accounts at MVP (50 paying customers)
- **Growth scale:** Architecture must support 500 concurrent accounts without code changes (horizontal scaling of webhook dispatch and dashboard layers)
- **Seasonal spikes:** HVAC demand spikes 3–5× during July–August and January–February; infrastructure must handle burst call volume without degradation
- **Stateless design:** Call-handling layer should be stateless to enable horizontal scaling

### Integration Reliability

- **Retell AI dependency:** Retell AI is the critical path for call answering; monitor for API changes and maintain one version behind latest to avoid breaking changes
- **FSM webhook compatibility:** Jobber and HCP webhook APIs may change; version-pin integration contracts and monitor for deprecation notices
- **Google Calendar OAuth:** Handle token refresh gracefully; if token expires, notify owner via dashboard and SMS rather than silently failing bookings
- **Twilio number management:** Monitor number provisioning availability; if number is unavailable in owner's area code, offer next-nearest option

### Accessibility

- **Dashboard WCAG 2.1 AA compliance:** Dashboard must meet WCAG 2.1 Level AA for keyboard navigation, color contrast, and screen reader compatibility — many small business owners use accessibility tools
- **Voice interface accessibility:** Call flow must function without requiring visual cues; audio-only interaction must be complete and unambiguous for callers with visual impairments

---

*PRD Status: Complete. All workflow steps executed. Ready for Architecture phase.*
