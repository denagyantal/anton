---
stepsCompleted: ["step-01-init.md", "step-02-discovery.md", "step-02b-vision.md", "step-02c-executive-summary.md", "step-03-success.md", "step-04-journeys.md", "step-05-domain.md", "step-06-innovation.md", "step-07-project-type.md", "step-08-scoping.md", "step-09-functional.md", "step-10-nonfunctional.md", "step-11-polish.md", "step-11-complete.md"]
inputDocuments: ["ideas/shortlisted/ai-voice-receptionist-trades.md", "_bmad-output/planning-artifacts/product-brief-ai-voice-receptionist-trades.md", "_bmad-output/planning-artifacts/research/market-ai-voice-receptionist-trades-research-2026-10-04.md"]
workflowType: prd
project_name: ai-voice-receptionist-trades
user_name: Root
date: 2026-10-05
classification:
  projectType: saas_b2b
  domain: voice_ai_telephony
  complexity: medium
  projectContext: greenfield
---

# Product Requirements Document — AI Voice Receptionist for Trades

**Author:** Root
**Date:** 2026-10-05
**Project:** ai-voice-receptionist-trades

---

## Executive Summary

Trade contractors — HVAC, plumbing, and electrical businesses with 1–5 technicians — lose 30–40% of inbound calls because physical work prevents answering. Each missed call costs $200–$800 in lost revenue; a missed emergency call (burst pipe, HVAC failure during extreme weather) costs $450–$1,800. A solo HVAC operator missing 3 calls per week loses $30K–$120K annually to voicemail.

Avoca AI's $1B valuation (Kleiner Perkins, April 2026) definitively validates that the trades industry will pay for AI voice answering — but Avoca targets $3M+ revenue operators with 5+ customer service reps at $1,000–$3,500/month. The 80,000–90,000 sub-5-tech shops in HVAC, plumbing, and electrical are structurally excluded from that product.

This product fills that gap: an AI phone receptionist priced at $99/month that answers every call 24/7, asks trade-specific triage questions a real dispatcher would ask, distinguishes emergencies from standard bookings, routes urgent calls immediately to the owner's cell, and books routine jobs directly into Housecall Pro or Google Calendar — without requiring any new software installation or platform migration.

**Target outcome:** 200 paying subscribers at $99/month within 12 months ($19,800 MRR), with an AppSumo LTD launch at Month 3 targeting 200+ one-time sales ($59,800 gross). Infrastructure gross margin of 55–70% at steady state.

### What Makes This Special

No product at any price point in the sub-$100 tier combines (1) multi-trade emergency triage logic, (2) platform-agnostic deployment, (3) Spanish/English bilingual support, and (4) emergency vs. standard routing intelligence simultaneously. That quadrant is unoccupied.

The core differentiation is triage depth, not call answering. Generic AI receptionists at $49–$79/month ask "How can I help?" This product asks "Is water actively flowing? Can you locate your main shutoff?" — the questions that actually matter for dispatch. The triage scripts are the moat; they require domain knowledge that takes weeks to replicate correctly, and community brand trust built in r/HVAC and trade Facebook groups is non-replicable once established.

A unique secondary differentiator: the AI can proactively mention maintenance agreements during standard service calls — directly increasing contractor revenue per call. No competitor at any price tier has this.

## Project Classification

- **Project Type:** SaaS B2B — subscription phone service for small trade businesses
- **Domain:** Voice AI / telephony automation for vertical SMB
- **Complexity:** Medium — combines voice AI (Retell/Vapi), telephony (Twilio), LLM triage logic, and scheduling integrations (Housecall Pro, Google Calendar)
- **Project Context:** Greenfield — no existing codebase

---

## Success Criteria

### User Success

A contractor using this product succeeds when calls they would have missed are answered, triage questions are asked correctly, emergencies are escalated within 60 seconds, and routine jobs are booked without the contractor being interrupted.

The ultimate user success signal is behavioral: a contractor posts in r/HVAC, r/plumbing, or a trade Facebook group saying "this booked me a $1,800 job while I was on a roof." This organic advocacy is both the success measure and the primary acquisition engine.

**User success thresholds:**
- Contractor completes onboarding (signup → live call forwarding) in under 5 minutes without assistance
- First AI-handled call occurs within 24 hours of signup
- At least one call per week results in a booked job the contractor confirms they would have otherwise missed
- Emergency escalation accuracy exceeds 95% — zero missed emergencies is the #1 quality gate
- Contractor does not need to log in to the web dashboard to receive value; SMS summaries are sufficient for daily operation

### Business Success

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

**Decision gate to proceed to AppSumo LTD:** 20 paying customers at $99/month; <10% monthly churn; at least 5 organic Reddit/Facebook mentions

### Technical Success

- AI handles calls end-to-end with <5% triage errors across 100+ live beta calls
- Emergency escalation SMS delivered within 60 seconds of emergency identification
- Virtual phone number provisioned within 30 seconds of signup completion
- Housecall Pro webhook creates job within 90 seconds of call end
- Call transcript available in dashboard within 3 minutes of call end
- System uptime ≥99.5% (telephony infrastructure; missed calls during downtime are unacceptable)
- COGS per customer at 500 min/month confirmed under $55, validating >44% gross margin at $99/month

### Measurable Outcomes

| KPI | Month 3 | Month 6 | Month 12 |
|-----|---------|---------|---------|
| Paying subscribers (MRR) | 30 | 100 | 200+ |
| MRR | $2,970 | $9,900 | $19,800+ |
| LTD sales (AppSumo) | — | 200 | 500 |
| Calls handled / customer / month | 30 | 60 | 100 |
| Monthly churn | <5% | <4% | <3% |
| Gross margin | 50% | 58% | 65%+ |
| Emergency escalation accuracy | >95% | >97% | >98% |
| Free trial → paid conversion | >25% | >30% | >35% |
| NPS | >30 | >45 | >60 |
| Organic Reddit/Facebook mentions | 5/mo | 15/mo | 30+/mo |

---

## Product Scope

### MVP — Minimum Viable Product

The MVP delivers one thing above all else: when a contractor can't answer their phone, the AI answers it, asks the right triage questions, and either books the job or escalates the emergency — with zero configuration complexity.

**Trades covered at MVP launch:** HVAC and plumbing. Electrical added Month 5.

**Core MVP capabilities:**
1. Trade-specific triage engine (HVAC: 7–9 questions; plumbing: 5–7 questions)
2. Emergency escalation logic (SMS + phone call to owner within 60 seconds)
3. Autonomous standard job booking (Housecall Pro webhook + Google Calendar)
4. SMS job summary to contractor for every handled call
5. Professional call handling with FCC-compliant AI disclosure
6. 5-minute onboarding (signup → virtual number → call forwarding)
7. After-hours mode with configurable business hours
8. Web dashboard for call history, transcripts, and escalation settings

**Pricing at MVP launch:**
- $99/month: up to 500 calls/month; HVAC + plumbing triage
- $149/month (Pro): unlimited calls; add electrical (Month 5); bilingual (Month 4–5)
- $299/$499 LTD: AppSumo team license (Month 3 launch)

### Growth Features (Post-MVP)

Additions in priority order after MVP validation:

| Feature | Target Month | Rationale |
|---------|-------------|-----------|
| Spanish/English bilingual triage | Month 4–5 | 15–20% of market; requires native-quality TTS/STT |
| Electrical triage scripts | Month 5 | Completes the three-trade core; adds 35–45K businesses to SAM |
| In-app triage script editor | Month 4 | Reduces support load; operators customize without technical help |
| Maintenance upsell during calls | Month 6 | Direct contractor revenue increase; unique vs. all competitors |
| Roofing/pest control triage | Month 6+ | Adjacent verticals; validate core trades first |
| Advanced analytics dashboard | Month 6+ | Contractors need SMS summaries first; dashboards are secondary |
| Multi-user/team portal | Month 6 | For 5–15 tech shops; after solo operator base validated |

### Vision (Future)

**Year 2:**
- Outbound AI calling for post-job follow-up and review generation
- Proactive maintenance reminder calls (seasonal tune-ups, annual inspections)
- Multi-line support for 5–15 tech shops (expanding upmarket)
- Canada and UK expansion (same trades, English, similar economics)
- ServiceTitan and Jobber integrations as market broadens

**3–5 year:**
The product evolves from "AI voice receptionist" to "AI front office for trade contractors." The triage library becomes the deepest in the industry — 12+ trades with emergency protocols trained on real dispatch data. Revenue model transitions from "never miss a call" to "complete AI customer relationship management for trade contractors," expanding TAM from $155M toward $1B+ as the product encompasses the full customer lifecycle.

---

## User Journeys

### Journey 1: Marcus — Solo HVAC Owner-Operator (Primary Success Path)

Marcus is on a commercial rooftop in Phoenix on a 107°F day, replacing a failed compressor. His phone rings twice while he's elbow-deep in the unit. He doesn't even hear the second ring.

Two hours later, he checks his messages. Instead of two missed calls from unknown numbers, he has two SMS messages from his AI receptionist:

**SMS 1:** "Call handled — Lisa M. (602-555-0192). Heating failure at residential property, no medical dependency, system >10 years old. NOT emergency — requested standard service call. Booked Tuesday 9 AM in Google Calendar. Full transcript: [link]"

**SMS 2:** "EMERGENCY escalated — James T. (602-555-0447). Full A/C failure, elderly resident, temperature 104°F inside. I called your cell and texted immediately. Full transcript: [link]"

Marcus stares at the second message. The second call was a $1,400 emergency service call. He got the escalation — he was at the bottom of the unit and felt the vibration, called James back within 3 minutes. The job is his.

He made $1,943 from two calls he didn't answer. At $99/month, the math is permanent.

**Journey reveals requirements for:** triage decision engine, emergency classification, SMS summary delivery, Google Calendar booking, voice call escalation

---

### Journey 2: Carlos & Deb — 2-Tech Plumbing Shop (After-Hours Emergency)

It's 11:42 PM on a Saturday. Deb put the kids to bed at 9. Carlos's phone rings — his personal cell, forwarded from the business line. Normally he'd let it go.

But the AI receptionist already answered it. The caller, Mrs. Reyes, speaks Spanish. The AI switches immediately: "Hola, gracias por llamar a Rodriguez Plumbing. Soy un asistente de inteligencia artificial..."

The AI asks the triage questions in Spanish: "¿Está perdiendo agua activamente en este momento? ¿Puede encontrar la llave de paso principal?" Mrs. Reyes says yes, water is spraying from a burst pipe under the kitchen sink. She can't find the shutoff.

The AI classifies EMERGENCY. Within 45 seconds, Carlos's phone rings (separate from the forwarded call). The AI voice says: "Emergency call from Maria Reyes, active burst pipe, no shutoff located, 4421 Westheimer, Houston. She is waiting."

Carlos takes the job. It's a $780 call at emergency rates. Deb sees the Housecall Pro job created in the shared app — "burst pipe, no shutoff, after-hours emergency" — before Carlos even leaves the driveway.

**Journey reveals requirements for:** Spanish/English bilingual triage, after-hours emergency classification, Housecall Pro webhook job creation, multi-recipient escalation (Carlos + Deb), emergency keyword detection

---

### Journey 3: Ray — Solo Electrician, Edge Case (Ambiguous Emergency)

A caller reports "sparking outlet" to Ray's AI receptionist. The AI's electrical triage script flags sparks + outlet + smell as HIGH URGENCY. Rather than booking autonomously (which Ray has configured OFF for electrical emergencies), the AI says:

"There's sparking near your outlet? That could be a serious electrical hazard. I'm going to reach out to Ray immediately — he handles situations like this personally. I'm texting him your contact information and the details right now. Please stay away from the outlet until he confirms."

Ray gets the escalation SMS, calls the customer, and determines it's a loose outlet cover (not an actual emergency). He books a non-urgent call for the next morning.

Ray's concern — that the AI would misidentify an electrical emergency and give bad advice — is addressed. The AI escalates and defers to Ray instead of giving autonomous advice on electrical hazards.

**Journey reveals requirements for:** configurable escalation-only mode per trade/situation, conservative electrical hazard handling, no-autonomous-booking config option for high-risk emergency types

---

### Journey 4: Elena — Bilingual HVAC Shop Owner (Bilingual + Team Routing)

Elena runs a 3-tech Miami shop. 40% of calls are Spanish-speaking. Her part-time bilingual receptionist works 9–5 weekdays only.

A caller begins in Spanish: "Hola, necesito un técnico para el aire acondicionado..." The AI responds naturally in Spanish, asks triage questions, and determines it's a standard tune-up request. It books directly into Elena's Housecall Pro calendar for next week, sends Elena and her lead tech both an SMS summary in English (Elena's preference), and the caller receives a Spanish-language confirmation.

Elena's technician Miguel, who receives the SMS alert, immediately recognizes the address — existing customer. He texts Elena: "I know that customer, I serviced them last June, they'll probably want the maintenance plan." Elena calls the customer back and upsells the maintenance agreement.

**Journey reveals requirements for:** native bilingual voice (not translation), configurable language for SMS summaries vs. caller-facing voice, multi-recipient SMS routing, Housecall Pro booking with customer note fields

---

### Journey 5: Office Manager (Admin/Operations User)

Deb Rodriguez (Carlos's wife) is the de facto office manager for Rodriguez Plumbing. She's not the buyer but is the daily operator of the system.

She logs into the web dashboard Monday morning. She sees: 14 calls handled over the weekend, 2 emergencies escalated (both jobs captured), 9 standard bookings confirmed in Housecall Pro, 3 calls that ended without a booking (callers who hung up after hearing the AI).

She clicks into the 3 no-booking calls to listen to transcripts. One caller wanted a commercial job quote — out of their service area. She marks it as "not a fit." The other two were price shoppers who hung up when the AI didn't quote a price. She notes this to Carlos: "We should let the AI say we're in the $150–$250 range for standard calls."

She goes to Settings → Triage Script → adds "We typically charge $150–$250 for standard service calls" to the standard response.

**Journey reveals requirements for:** web dashboard with call history and transcripts, admin triage script customization, call outcome tagging, per-call notes, no-booking reason tracking

---

### Journey Requirements Summary

| Journey | Key Capabilities Revealed |
|---------|--------------------------|
| Marcus (solo HVAC) | Trade triage, Google Calendar booking, SMS summaries, emergency escalation |
| Carlos & Deb (plumbing shop) | Bilingual voice, HCP webhook, multi-recipient SMS, after-hours emergency |
| Ray (electrician) | Configurable escalation-only mode, conservative electrical handling |
| Elena (bilingual HVAC) | Native bilingual TTS/STT, team SMS routing, HCP booking with notes |
| Office manager (admin) | Call history dashboard, transcript access, script customization UI |

---

## Domain-Specific Requirements

### Telephony & Voice AI

- **Virtual phone number provisioning:** Twilio-based DID number in the contractor's local area code. Provisioned automatically within 30 seconds of onboarding completion.
- **Call forwarding:** Contractor forwards their existing business number to the virtual number via carrier settings. No app installation required. The product must work with standard carrier call forwarding (unconditional forward, busy forward, no-answer forward).
- **Voice quality:** AI voice must sound professional and natural, not robotic. Retell AI or Vapi TTS required. Custom voice cloning is out of scope for MVP.
- **Latency requirements:** First AI utterance after caller speaks must begin within 1.5 seconds. Triage question → response → next question cycle must complete within 2 seconds per turn.
- **Call recording:** All calls recorded and stored for 90 days. Contractor-facing transcript generated via STT within 3 minutes of call end.
- **FCC compliance:** Every call must begin with a disclosure that the caller is speaking to an AI assistant. Exact phrasing: "I'm an AI assistant answering on behalf of [Company Name]." This is non-negotiable for legal compliance.

### Scheduling Integration Protocols

- **Housecall Pro:** Job creation via HCP API (OAuth 2.0). Fields mapped: customer name, phone, address (if provided), issue type, urgency classification, preferred appointment window. Job creates in "Unscheduled" status for contractor review.
- **Google Calendar:** Event creation via Google Calendar API (OAuth 2.0). Event title format: "[Trade] — [Issue Type] — [Caller Name]". Description includes full call summary. Duration defaulted to 1 hour unless caller specifies.
- **No-tool mode:** If contractor has no scheduling integration, AI collects name, phone, address, issue description, and preferred time window. Delivers via SMS summary to contractor. No autonomous booking in this mode.

### Compliance & Legal

- **FCC AI disclosure:** Required on every call, enforced at the application layer.
- **TCPA compliance:** SMS communications to contractors and their staff require prior consent. Collected during onboarding.
- **Call recording notice:** State-specific disclosure for one-party vs. two-party consent states. Default to two-party consent disclosure ("this call may be recorded") in all states.
- **Data retention:** Call recordings and transcripts retained 90 days by default. Contractor can delete on request. PII (caller name, phone, address) stored in contractor account only.

---

## Innovation & Novel Patterns

### Detected Innovation Areas

**Trade-Specific Emergency Triage Logic**

The primary innovation is the depth and specificity of emergency decision trees. This is not a generic "is this urgent?" question. It is structured triage developed for each trade:

*HVAC triage path:*
1. Heating or cooling failure? (determines urgency season)
2. Anyone in the home/building medically dependent on climate control? (escalation trigger)
3. Pets or temperature-sensitive items? (escalation context)
4. System age and model (helps technician prep)
5. Has system made any unusual sounds or smells? (safety check)
6. Is the thermostat responding? (diagnostic)

*Plumbing triage path:*
1. Is water actively flowing or has it stopped? (immediate vs. recoverable)
2. Can you locate your main shutoff? Guide if no (emergency mitigation)
3. Is there visible pipe damage or only water presence? (scope)
4. Visible sewage or only clean water? (health hazard classification)
5. Affected area: kitchen, bathroom, utility? (technician prep)

This triage library is a 2–4 week head start against any competitor attempting to copy it, and it gets better with usage data (which questions correlate with job value, which emergency classifications prove accurate).

**Maintenance Upsell During Standard Calls**

No competitor at any price tier proactively offers maintenance agreements during inbound service calls. During a standard A/C tune-up booking, the AI can say: "We also offer an annual HVAC maintenance plan that covers preventive tune-ups like this one. Would you like me to note that interest for your technician?" This feature directly increases contractor LTV per customer.

### Market Context & Competitive Landscape

The innovation window is defined by two closing threats:
1. **Housecall Pro native AI:** HCP building their own AI receptionist (estimated 12–24 month window). Until then, HCP users need third-party tools — and HCP's user base is the primary acquisition channel.
2. **Voksha/Rosie AI triage depth:** Both have the right price point but generic triage. They can add triage scripts in 2–4 weeks. Community brand trust in r/HVAC and trade Facebook groups is the non-replicable moat — it must be established before they catch up.

### Validation Approach

**Beta validation (Weeks 1–3):** 10–20 beta users from r/HVAC and HCP community forums. Each beta user makes 10+ test calls. Emergency escalation accuracy measured manually by reviewing call transcripts and escalation outcomes. COGS confirmed per customer at 500 min/month.

**Community signal validation (Month 2):** First organic Reddit/Facebook post referencing the product from a user who didn't create it. This is the signal that word-of-mouth is real.

### Risk Mitigation

| Risk | Mitigation |
|------|-----------|
| HCP builds native AI receptionist (12–24 mo window) | Build community brand first; diversify to Google Calendar and no-tool users (70% of market) |
| Retell/Vapi price increase | Multi-vendor architecture; Twilio fallback; negotiate volume rates at 200+ customers |
| Voksha/Rosie add triage depth | Triage depth alone isn't the moat; community trust + maintenance upsell + bilingual are compounding advantages |
| Emergency misclassification (safety liability) | Conservative classification (false positive escalations are acceptable; false negatives are not); electrical always escalates, never autonomous booking |

---

## SaaS B2B Specific Requirements

### Project-Type Overview

This is a vertical SaaS B2B product targeting a single industry segment (sub-5-tech trade contractors) with a simple subscription model. The product is "set and forget" infrastructure — contractors don't log in daily; the product operates invisibly in the background. The primary interaction model is SMS (contractor receives job summaries) with a secondary web dashboard for configuration and history.

### Multi-Tenancy Model

- **Single-tenant data isolation:** Each contractor account is fully isolated. Call recordings, transcripts, and job bookings are account-scoped with no cross-account visibility.
- **Account structure:** One primary account per business. Secondary phone numbers (for multi-tech escalation) are configuration within the account, not separate accounts.
- **Tier management:** Starter ($99/mo, 500 calls) and Pro ($149/mo, unlimited) tiers with automatic overage detection on Starter.

### Onboarding Architecture

5-minute onboarding is a hard product requirement, not an aspiration:
1. Business name + trade selection (HVAC, plumbing, electrical, combination)
2. Primary owner phone number (for escalation)
3. Optional: secondary escalation number
4. Virtual phone number provisioned automatically (Twilio DID)
5. Optional: Housecall Pro or Google Calendar OAuth connection
6. Confirmation screen with call forwarding instructions
7. Test call option (contractor can call the virtual number to hear the AI)

No credit card required for 14-day free trial. Card collected at trial end.

### Permission Model

- **Owner role:** Full account access; billing; triage script edits; escalation number configuration; integration management; call history and transcripts.
- **Team member role (Pro tier):** Call history and transcript read access; no billing; no script editing. Added by owner via phone number invite.
- **No API access at MVP:** Webhook-out for Housecall Pro and Google Calendar; no inbound API. Developer access is post-MVP.

### Integration Architecture

| Integration | Type | MVP | Post-MVP |
|-------------|------|-----|---------|
| Housecall Pro | OAuth 2.0 + REST webhook | Yes | — |
| Google Calendar | OAuth 2.0 + REST | Yes | — |
| Twilio (telephony) | REST API | Yes | — |
| Retell AI or Vapi | REST API | Yes | — |
| Claude Haiku / GPT-4o-mini (triage) | REST API | Yes | — |
| ServiceTitan | REST API | No | Month 9+ |
| Jobber | REST API | No | Month 9+ |
| Stripe (billing) | REST API | Yes | — |

### Technical Architecture Considerations

**Voice AI stack:**
- Retell AI ($0.07–$0.08/min) or Vapi ($0.05/min base) for voice conversation management
- LLM (Claude Haiku or GPT-4o-mini) for triage decision logic — $0.01–$0.02/call for triage classification
- Twilio for telephony (virtual numbers, call forwarding, SMS delivery)

**COGS model at 500 min/month per customer:**
- Voice AI: ~$35–$40 (Retell) or ~$25 (Vapi)
- Twilio telephony: ~$5–$8 (DID + SMS)
- LLM triage: ~$2–$3
- Infrastructure (hosting, storage): ~$3–$5
- **Total: ~$43–$57 per customer/month** → 42–56% gross margin at $99/month
- At scale with volume discounts: ~60–70% gross margin

### Implementation Considerations

- Build on Retell AI for MVP (better latency, more predictable pricing, better documentation). Vapi as fallback.
- Triage decision tree implemented as structured prompt with Claude Haiku — not a complex state machine. Each triage turn passes conversation history + trade context + decision rules.
- Housecall Pro integration uses HCP's job creation API (not webhooks-in). Job status: "Unscheduled" by default; contractor or office manager schedules from HCP dashboard.
- SMS delivery via Twilio Messaging. Delivery confirmation tracked; retry once on failure; alert contractor via email on delivery failure.

---

## Project Scoping & Phased Development

### MVP Strategy & Philosophy

**MVP Approach:** Problem-solving MVP — the minimum that makes a missed call recoverable. The product is useful from the first handled call. There is no network effect or content library required; value is immediate and individual.

**MVP Philosophy:** "Invisible infrastructure that books jobs." Contractors should not need to think about the product after setup. No daily login required. No new workflow to adopt. The product sits silently between callers and the contractor, doing work invisibly, and surfaces only when action is needed (emergency) or completed (job booked).

**Resource Requirements:** 1–2 engineers (full-stack + voice AI integration), 1 product/growth person. 3–4 week build timeline for MVP.

### MVP Feature Set (Phase 1)

**Core User Journeys Supported:**
- Solo contractor who can't answer while on a job
- Multi-person shop with after-hours gaps
- Bilingual shop owner (Phase 4–5, not MVP)

**Must-Have Capabilities:**
1. HVAC emergency triage (7–9 question decision tree)
2. Plumbing emergency triage (5–7 question decision tree)
3. Emergency escalation via SMS + phone call within 60 seconds
4. Housecall Pro job creation via OAuth webhook
5. Google Calendar event creation via OAuth
6. No-tool mode (SMS-only job summary)
7. Virtual phone number provisioning on signup
8. FCC-compliant AI disclosure on every call
9. Call recording + transcript (3-minute delivery)
10. SMS job summary for every call
11. Web dashboard: call history, transcripts, escalation settings
12. Configurable business hours (after-hours = full AI handling)
13. 14-day free trial with Stripe billing at conversion

### Post-MVP Features

**Phase 2 (Months 4–6):**
- Spanish/English bilingual triage with native-quality voice
- Electrical triage scripts
- In-app triage script editor (non-technical customization)
- Maintenance upsell during standard service calls
- Multi-user team portal (Pro tier)
- Advanced call analytics (conversion rates, emergency frequency, missed vs. captured)

**Phase 3 (Months 7–12):**
- Roofing and pest control triage
- Outbound call campaigns (post-job follow-up, review requests)
- ServiceTitan integration
- Multi-line support for 5–15 tech shops
- Proactive maintenance reminder calls

### Risk Mitigation Strategy

**Technical Risks:**
- *Voice latency too high for natural conversation:* Mitigated by using Retell AI (optimized for low-latency voice) and testing with real tradespeople in beta before launch. Fallback: increase LLM response caching for common triage paths.
- *Emergency classification errors (false negatives):* Mitigated by conservative classification rules (when in doubt, escalate) and weekly manual review of 10 random emergency classifications during beta.

**Market Risks:**
- *Contractors skeptical of AI answering calls:* Mitigated by framing as "AI assistant" not "AI replacement," prominent human-escalation features, and transparent FCC disclosure. Beta testimonials are the primary trust signal.
- *HCP builds native AI receptionist:* Mitigated by building community brand in r/HVAC/r/plumbing BEFORE HCP launches, and ensuring 70% of customers are on Google Calendar or no-tool (not HCP-dependent).

**Resource Risks:**
- *Build timeline slips past 4 weeks:* Minimum shippable: HVAC triage only, Google Calendar only, no dashboard (SMS-only interface). This is still a complete MVP for solo HVAC operators.
- *Voice AI cost higher than projected:* Per-call cost cap enforced at Starter tier (500 calls/month hard limit); Pro tier priced at $149 to absorb unlimited call costs.

---

## Functional Requirements

### Call Handling & Reception

- FR1: System can answer inbound calls 24/7 on a virtual phone number provisioned to the contractor's account
- FR2: System can open every call with the contractor's business name and an FCC-compliant AI disclosure
- FR3: System can detect caller language (English or Spanish) from first utterance and conduct the conversation in that language
- FR4: System can handle concurrent calls up to the account's call limit without dropping calls
- FR5: System can record every call and generate a transcript within 3 minutes of call end
- FR6: Contractor can configure business hours and set different handling rules for in-hours vs. after-hours calls

### Trade-Specific Triage Engine

- FR7: System can conduct HVAC-specific triage using a structured 7–9 question decision tree covering heating/cooling failure type, medical dependency, system age, and unusual signs
- FR8: System can conduct plumbing-specific triage using a structured 5–7 question decision tree covering active water flow, shutoff valve location, pipe damage type, and sewage presence
- FR9: System can classify each handled call as Emergency, Standard Service, or Information Request based on triage responses
- FR10: System can collect caller name, phone number, address, and issue description during triage
- FR11: Contractor can customize triage script responses (add business-specific notes, service area, pricing guidance) via web dashboard
- FR12: System can proactively mention maintenance agreements during standard service calls when enabled by contractor

### Emergency Escalation

- FR13: System can detect emergency keywords and triage responses in real-time during a call and trigger escalation before the call ends
- FR14: System can send an emergency escalation SMS to the contractor's primary phone within 60 seconds of emergency classification, including caller name, phone, address, and issue summary
- FR15: System can place an automated phone call to the contractor's primary phone within 60 seconds of emergency classification with a spoken alert
- FR16: Contractor can configure a secondary escalation number (e.g., spouse, partner tech) to receive escalation alongside primary
- FR17: Contractor can configure escalation-only mode for specific call types (e.g., all electrical calls escalate; no autonomous booking)
- FR18: System can log escalation delivery status (SMS delivered, call answered, call missed) and retry SMS once on delivery failure

### Job Booking & Scheduling

- FR19: System can create a job in Housecall Pro via OAuth integration with caller name, phone, address, issue type, urgency classification, and preferred appointment window
- FR20: System can create a calendar event in Google Calendar via OAuth integration with call summary in description and default 1-hour duration
- FR21: System can operate in no-integration mode, collecting job details and delivering them via SMS summary only without creating calendar entries
- FR22: System can detect when a caller wants to book vs. wants information, and route accordingly (book vs. message-only)
- FR23: Contractor can set service area and instruct the AI to note out-of-area requests without booking

### Notifications & Communication

- FR24: System can send an SMS job summary to the contractor within 60 seconds of every handled call, regardless of outcome (booked, escalated, or information only)
- FR25: SMS summary includes caller name, phone, issue type, urgency classification, and action taken
- FR26: SMS summary includes a link to the full call transcript in the web dashboard
- FR27: Contractor can configure which team members receive SMS summaries (Pro tier)
- FR28: System can send a confirmation SMS to the caller after a successful standard booking with appointment window and contractor name

### Account Configuration & Onboarding

- FR29: Contractor can complete full onboarding (business setup → virtual number → optional integrations) in under 5 minutes
- FR30: System can provision a virtual phone number in the contractor's local area code within 30 seconds of signup completion
- FR31: Contractor can select one or more trades at signup (HVAC, plumbing, electrical) to configure the appropriate triage scripts
- FR32: Contractor can test the AI by calling their virtual number before going live (test call mode with no billing impact)
- FR33: Contractor can connect Housecall Pro or Google Calendar via OAuth during or after onboarding
- FR34: Contractor can configure primary and secondary escalation phone numbers
- FR35: Contractor can configure business hours and after-hours behavior

### Call History & Dashboard

- FR36: Contractor can view paginated call history sorted by recency in the web dashboard
- FR37: Contractor can filter call history by date range, outcome (booked, escalated, information), and trade
- FR38: Contractor can access full call transcript and recording for each handled call
- FR39: Contractor can tag individual calls with outcomes (e.g., "lost to competitor," "not in service area")
- FR40: Dashboard displays summary statistics: total calls this month, bookings created, emergencies escalated, no-booking rate

### Billing & Subscription

- FR41: System can enforce call volume limits (500 calls/month for Starter tier) and alert contractor at 80% and 100% of limit
- FR42: System can collect payment via Stripe at trial end and manage monthly subscription
- FR43: Contractor can view current billing period, calls used, and remaining balance in account settings
- FR44: System can downgrade service to voicemail-fallback mode (not complete outage) if subscription lapses

---

## Non-Functional Requirements

### Performance

- **Call handling latency:** AI first utterance must begin within 1.5 seconds of call connect. Triage response latency (caller finishes speaking → AI responds) must not exceed 2.0 seconds per conversational turn. Exceeding 2.5 seconds creates perceivable awkward pauses that damage trust.
- **Emergency escalation delivery:** SMS + phone call escalation must be initiated within 60 seconds of emergency classification. This is a hard SLA — missed escalations are a product failure, not a support issue.
- **Transcript availability:** Call transcript must be accessible in the dashboard within 3 minutes of call end.
- **Webhook delivery:** Housecall Pro and Google Calendar webhooks must complete within 90 seconds of call end.
- **Dashboard load time:** Call history page must load in under 2 seconds for accounts with up to 1,000 calls.

### Security

- **Data encryption:** All call recordings and transcripts encrypted at rest (AES-256). All API communication encrypted in transit (TLS 1.3+).
- **PII handling:** Caller PII (name, phone, address) stored only within contractor account. Not shared across accounts. Not used for training without explicit consent.
- **OAuth security:** Third-party integrations (HCP, Google Calendar) use OAuth 2.0 with minimal required scopes. Access tokens stored encrypted. Refresh tokens never exposed to client.
- **FCC disclosure enforcement:** AI disclosure cannot be disabled by contractor configuration — it is hardcoded into every call opening sequence.
- **TCPA compliance:** SMS opt-in consent collected during contractor onboarding. Contractor staff receiving escalation SMS must have consented via onboarding or team member invitation flow.

### Reliability

- **System uptime:** 99.5% monthly uptime target for call handling infrastructure. Downtime during business hours is a direct revenue loss for contractors — treated with highest operational priority.
- **Telephony fallback:** If AI infrastructure is unavailable, calls must fall through to contractor's original phone (not drop to silence). Twilio call forwarding fallback must be configured as the last resort.
- **Escalation redundancy:** Emergency escalation uses both SMS and voice call in parallel. SMS failure does not prevent voice call attempt. Both logged independently.
- **Webhook retry:** Failed Housecall Pro or Google Calendar webhooks retry 3 times with exponential backoff before logging failure and notifying contractor via SMS.

### Scalability

- **Initial scale:** Support 200 active accounts at launch (Month 12 target). Each account handles up to 500 calls/month = 100,000 calls/month total.
- **Concurrency:** Support minimum 50 simultaneous calls across all accounts without degradation. Scale to 500 concurrent calls by Month 12 as needed.
- **Architecture:** Stateless call handling workers enable horizontal scaling. No shared mutable state per call — each call is self-contained.

### Integration

- **Housecall Pro API:** Job creation must use HCP's stable v1 API with graceful error handling for API timeouts and rate limits. Failed job creation must not block SMS summary delivery.
- **Google Calendar API:** Event creation via Google Calendar API with graceful degradation if OAuth token expires. Contractor notified via SMS if calendar integration fails.
- **Twilio reliability:** Twilio Messaging and Voice SLA is the floor for telephony reliability. Monitor Twilio incident status; alert contractor via email if Twilio outage exceeds 5 minutes.

### Accessibility

- **Caller-facing:** AI voice must be clearly intelligible for callers with standard hearing. Speak at measured pace; allow caller to interrupt and re-ask questions.
- **Contractor dashboard:** WCAG 2.1 AA compliance for web dashboard. Trade contractors include users with varying levels of digital literacy; simple, high-contrast UI with minimal cognitive load.
- **SMS-first design:** Primary contractor interaction is SMS, not web dashboard — ensures contractors without smartphones capable of web browsing still receive full value.

---

*PRD completed: 2026-10-05*
*Source: Product Brief — AI Voice Receptionist for Trades (2026-10-05)*
*Source idea evaluation: ideas/shortlisted/ai-voice-receptionist-trades.md (Score: 88/105)*
*Next step: create-architecture*
