---
stepsCompleted: [1, 2, 2b, 2c, 3, 4, 5, 6, 7, 8, 9, 10, 11]
inputDocuments:
  - ideas/shortlisted/ai-receptionist-home-service-businesses.md
  - _bmad-output/planning-artifacts/market-research-ai-receptionist.md (referenced)
workflowType: prd
classification:
  projectType: saas_b2b
  domain: field_service_management
  complexity: medium
  projectContext: greenfield
documentCounts:
  briefCount: 1
  researchCount: 1
  brainstormingCount: 0
  projectDocsCount: 0
date: '2026-04-02'
author: Root
---

# Product Requirements Document — TradesAI

**Author:** Root
**Date:** 2026-04-02
**Product:** TradesAI — AI Receptionist for Home Service Businesses

---

## Executive Summary

Home service contractors (HVAC, plumbing, electrical, roofing, pest control) miss 60–80% of incoming calls while on job sites. Each missed call costs an average of $1,200 in lost revenue — translating to $45,000–$120,000 in lost annual revenue per operator. Existing solutions force contractors to choose between an unaffordable human receptionist ($3,750–$5,000/month), a generic AI that doesn't understand trade terminology, or enterprise platforms built for 50-truck operations that exclude solo and small operators entirely.

**TradesAI** is a purpose-built voice AI phone agent for solo and small home service businesses (1–15 trucks). It answers every call 24/7, understands trade terminology and service types from day one, triages emergencies via rule-based dispatch, books jobs directly in the contractor's CRM (Jobber-first), and shows recovered revenue in a plain dashboard — all at a flat $99–$249/month with no per-minute overages. The $4.6B virtual receptionist market is growing at 9.8% CAGR; voice AI is accelerating at 34.8% CAGR. Well-funded enterprise players (Avoca $47.8M, Netic $43M) leave the 200,000+ solo/small-operator segment systematically underserved. TradesAI captures this segment by being trade-native, Jobber-native, flat-rate, and community-distributed.

### What Makes This Special

Four genuine differentiators separate TradesAI from every existing option:

**1. Trade-native intelligence, not retrained generics.** TradesAI is pre-trained with 200+ trade-specific intents (service calls, installs, maintenance plans, emergency types) across HVAC, plumbing, and electrical. A contractor doesn't configure what "R-22 refrigerant" or "no heat in winter" means — the system already knows, and responds with appropriate urgency and pricing context.

**2. Emergency dispatch that cannot miss.** The top reason contractors need a receptionist is to catch emergencies when they're unreachable. TradesAI's emergency detection is rule-based (not LLM-discretion): the moment a trigger keyword (gas smell, burst pipe, no heat, flooding, carbon monoxide) is detected, an SMS fires to the on-call tech — before the call ends. Zero miss rate is enforced by architecture, not prompt engineering.

**3. Flat-rate pricing removes peak-season anxiety.** Every competitor charges per-minute. During summer HVAC peaks, call volume spikes 3–5x — creating bill surprises that cause churn. TradesAI's $99–$249/month flat rate turns the busiest month into the best ROI month, not the scariest billing cycle.

**4. Jobber-native distribution, not ServiceTitan-first.** Avoca and Sameday are built around ServiceTitan (enterprise CRM). Jobber has 200,000+ users — predominantly the solo/small operator segment — and no dominant AI receptionist partner. TradesAI integrates with Jobber first, creating a defensible channel that enterprise players structurally de-prioritize.

## Project Classification

- **Project Type:** SaaS B2B — Vertical SaaS, SMB-focused
- **Domain:** Field Service Management / Home Services
- **Complexity:** Medium — voice AI telephony, real-time CRM sync, LLM-driven conversation, emergency rule-based dispatch, subscription billing
- **Project Context:** Greenfield — no existing codebase or user base

---

## Success Criteria

### User Success

Operators succeed when they recover measurable revenue from previously missed calls without managing the system themselves.

- **Call coverage:** Every call answered within 2 rings; operator never misses a service request or emergency while on-site
- **Booking outcomes:** ≥88% of inbound calls with booking intent result in a job created in the operator's CRM
- **Emergency safety:** 100% of genuine emergencies (gas, flooding, no heat, burst pipe) trigger on-call dispatch within 30 seconds of keyword detection
- **Zero setup overhead:** Operators complete initial configuration in ≤15 minutes without reading documentation or contacting support
- **CRM visibility:** Every call becomes a dashboard entry; every booked job appears in Jobber within 60 seconds, with no manual data entry required
- **Recovered revenue visibility:** Operators see dollar amounts tied to calls handled — operators who see this metric stay subscribed

**"Aha!" moment definition:** Operator finishes a job, checks the dashboard, sees 3 jobs booked while they were on-site, and calculates the recovered revenue. This must happen in the first 7 days.

### Business Success

| Milestone | Target | Timeline |
|-----------|--------|----------|
| Validation | 50 paying accounts at $149/mo avg = $7,500 MRR | Month 1–3 |
| Growth | 300 paying accounts = $45,000 MRR | Month 4–9 |
| Scale | 1,500 paying accounts = $225,000 MRR | Month 10–18 |
| Year 3 | 5,000 accounts = $895,000 MRR (~$10.7M ARR) | Year 3 |

**Retention:** Monthly churn ≤ 3% post-CRM integration. Operators who connect Jobber and book their first 5 jobs through TradesAI have <1% 90-day churn — this is the retention anchor.

**Acquisition:** Community-led CAC ≤ $100. Trade Facebook groups (HVAC Business Owners: 40K+ members) are the primary channel. Every operator who posts "anyone missing calls?" is a potential acquisition. One testimonial from a recognizable peer generates 5–10 signups.

**Economics:** Gross margin target ≥45% at launch, ≥55% at 300+ accounts (volume pricing with voice API providers).

### Technical Success

- Voice AI call answer rate ≥ 99% (system uptime × call pickup)
- Emergency escalation accuracy = 100% (tested via synthetic call set before launch)
- CRM job sync success rate ≥ 98% (Jobber API reliability SLA)
- Customer hang-up rate < 5% in first 30 seconds (voice quality gate)
- Average call handle time ≤ 3 minutes for routine booking calls
- System capable of handling 10x current call volume during peak seasons without degradation

### Measurable Outcomes

| KPI | Target | Why It Matters |
|-----|--------|----------------|
| Call Answer Rate | ≥ 99% | Core product promise; a missed call is a product failure |
| Booking Conversion | ≥ 88% | Revenue recovery for operators |
| Emergency Accuracy | 100% | Zero-miss is non-negotiable by architecture |
| CRM Sync Rate | ≥ 98% | Integration reliability |
| Monthly Churn | ≤ 3% | Subscription health |
| NPS | ≥ 50 | Community word-of-mouth driver |
| Gross Margin | ≥ 55% (at scale) | Business viability |
| CAC | ≤ $150 | Community-led model validation |
| LTV | ≥ $3,000 | 25+ month avg. retention at $149/mo |
| Time to First Value | ≤ 15 min setup | Onboarding friction gate |

---

## Product Scope

### MVP — Minimum Viable Product

The MVP delivers one complete, reliable value loop: answer the call → understand the issue → book the job or dispatch the emergency → sync to CRM → show the operator what happened.

**Core MVP capabilities:**
1. Trade-specific call handling (HVAC, plumbing, electrical) with 200+ service type intents
2. Emergency detection and rule-based on-call SMS dispatch (cannot miss; rule-based, not AI discretion)
3. CRM job creation in Jobber via OAuth (new client + job record within 60 seconds)
4. Setup Wizard with ≤15 minute time-to-live for first call
5. Operator dashboard: call log, transcripts, recordings, recovered revenue estimate
6. Subscription billing via Stripe: 3 flat-rate plans ($99/$149/$249/month), 14-day free trial

**MVP is validated when:**
- 500 internal test calls pass ≥95% appropriate response rate
- 50 emergency scenario calls hit 100% detection rate
- 200 synthetic Jobber sync calls hit ≥98% success rate
- 10 real contractors call the test line; ≥8/10 cannot identify as AI within first 30 seconds
- 20 paying accounts with ≤3% churn after 60 days

### Growth Features (Post-MVP, Phase 2)

- HousecallPro integration (secondary CRM after Jobber validation)
- ServiceTitan integration via Zapier bridge (enterprise bridge)
- Bilingual English/Spanish for Sun Belt markets (TX, FL, CA, AZ)
- Roofing and pest control knowledge bases
- Mobile-friendly dashboard (PWA)
- Operator referral program ($50/referred account)
- ServiceTitan App Marketplace listing

### Vision (Phase 3+)

- AI call analytics: top issue categories, pricing friction signals, seasonal patterns
- Outbound AI calls: post-job review requests, maintenance plan renewal outreach
- Maintenance plan upsell flows during routine service calls
- Multi-tech escalation chains when on-call doesn't respond
- Franchise/multi-location portal
- White-label API for home service franchise brands ($499–$999/location/month)
- Proprietary trades LLM fine-tuned on 1M+ real service calls
- Adjacent verticals: landscaping, appliance repair, pool service

---

## User Journeys

### Journey 1: Marcus — The Solo HVAC Operator (Primary, Happy Path)

**Opening scene:** Marcus runs a 2-truck HVAC business in Phoenix, AZ. It's 9:30 AM on a Tuesday in July — 114°F outside. He's in an attic replacing a condenser coil. His phone is in his pocket on silent. Between 9 AM and 11 AM, his phone receives 14 calls. He surfaces at 11:15 AM, sees the missed calls, and feels the familiar stomach drop. At least 2 of those were emergency AC failures. They've already called his competitor.

**Discovery:** Marcus posts in "HVAC Business Owners" Facebook group: "anyone using AI to answer calls? Lost 3 jobs this week." Three replies in 20 minutes. One says: "TradesAI. Flat rate, knows HVAC, syncs with Jobber. Changed my business." He clicks the link.

**Rising action:** The homepage shows a 2-minute demo of a TradesAI call handling an HVAC diagnostic request — the AI knows what a capacitor replacement is, confirms the service area, and books a 2 PM appointment in Jobber. Marcus sees "14-day free trial, no credit card." He signs up.

**Setup:** The Setup Wizard takes 8 minutes. He enters his business name, Phoenix service area (zip codes), selects HVAC, lists his primary services (diagnostic, AC tune-up, installation, emergency), sets typical price ranges ($89 diagnostic, $350 tune-up, $3,500 install), adds his on-call cell number, and connects Jobber via OAuth one-click. The wizard generates call forwarding instructions for his carrier. He sets it up in 2 minutes.

**Climax:** Day 4. Marcus is on a job from 7 AM. A homeowner calls at 6:52 AM — AC died overnight, 3 small kids in a 95°F house. TradesAI answers on ring 2. The homeowner says "My AC stopped working and my kids are miserable." TradesAI detects no-AC-with-urgency, confirms Phoenix address, offers a same-morning emergency visit, and sends an SMS to Marcus's on-call cell (which is Marcus himself, since it's morning). The SMS reads: "EMERGENCY — Sarah Chen, 4521 Desert Sun Blvd, Phoenix. Issue: AC not working. 3 children at home. Called 6:52 AM. Job created in Jobber." Marcus sees the SMS at 7:15 AM on his break. He texts back "on my way after this job." He gets there at 9:30 AM and bills $1,800 for a compressor replacement.

**Resolution:** At the end of Week 2, Marcus opens the dashboard. 23 calls handled, 18 jobs booked, 2 emergency dispatches, 3 flagged for follow-up. Estimated recovered revenue: $14,400. He upgrades from trial to Pro ($149/month) immediately and sets up annual billing. His wife is no longer the backup receptionist.

**Journey requirements revealed:** 24/7 voice answering, emergency keyword detection, SMS dispatch, Jobber job creation, call log dashboard, recovered revenue metric, Setup Wizard, annual billing.

---

### Journey 2: Diana — The Growing Plumbing Shop Owner (Primary, After-Hours Emergency)

**Opening scene:** Diana runs a 9-truck plumbing business in Dallas, TX. It's 11:15 PM on a Thursday. A homeowner's main water line burst. They call Diana's business line — it rings 4 times and goes to voicemail. They leave no message and call the next plumber on Google. Diana's on-call tech, Mike, is sitting at home waiting for a call that never comes. That job was worth $2,800.

**Discovery:** Diana has seen Avoca mentioned in plumbing forums but it felt enterprise — she runs HousecallPro, not ServiceTitan, and Avoca doesn't integrate. She finds TradesAI through a comment in a HousecallPro users group: "Finally one that does HCP and plumbing-specific triage."

**Rising action:** She signs up for the trial, connects her HousecallPro account, adds Mike as on-call tech with his SMS number, and configures emergency keywords: burst pipe, flooding, sewage backup, no water. Setup takes 12 minutes.

**Climax:** Three nights into her trial, a homeowner calls at 12:44 AM with a burst pipe under the kitchen sink. TradesAI answers, identifies burst pipe + active flooding, confirms Dallas address, and — within 8 seconds of keyword detection — fires an SMS to Mike: "EMERGENCY — Tom Valdez, 7823 Oak Ridge Dr, Dallas. Burst pipe, kitchen. Active flooding. Job #1847 created in HCP. Called 12:44 AM." Mike calls Tom back within 4 minutes. He's on-site by 1:30 AM. The job bills at $3,100 with emergency surcharge.

**Resolution:** Diana's dashboard shows the timeline. She reviews Mike's SMS receipt log. The job was in HousecallPro before she woke up. She cancels her answering service ($400/month) and locks in TradesAI Growth plan ($249/month). Net savings: $150/month. Recovered after-hours revenue in trial period: $9,800.

**Journey requirements revealed:** HousecallPro integration, multiple CRM support, on-call tech SMS with job details, emergency keyword customization, post-call job records visible to admin, call timeline audit log.

---

### Journey 3: Raj — Skeptical Electrician (Primary, Edge Case: Voice Quality Concern)

**Opening scene:** Raj runs a 5-truck electrical business in Atlanta, GA. He's technically curious and has burned money on 2 AI tools that felt "obviously robotic." He's seen too many frustrated customers hang up on AI voices. He's interested in TradesAI but won't commit without proof.

**Rising action:** Raj uses the free trial but doesn't connect Jobber yet. He tests the voice by calling his own TradesAI number from a different phone. He asks about a panel upgrade — the voice responds naturally, knows what a 200-amp service panel is, and quotes a typical range of $2,500–$4,500 without hesitation. He calls again and says "I have a breaker that keeps tripping, feels hot." The AI flags it as a potential fire risk, says "This sounds like an urgent safety issue — let me connect you with the on-call electrician immediately," and fires the dispatch SMS.

**Climax:** Raj shows the call recording to his office admin Sandra. She says it sounds professional. He connects Jobber and goes live. First week: 11 calls handled, 8 jobs booked, 1 emergency panel fault dispatched. Raj reviews every transcript. Zero complaints from customers about the AI.

**Resolution:** Raj is converted. He posts in r/electricians: "Tried 3 AI receptionists. TradesAI is the first one that actually knows electrical work. No one on hold complained. Already paid for itself."

**Journey requirements revealed:** Trial period without CRM commitment, call recording playback, transcript review, voice quality must survive real-world test, trade-specific knowledge for electrical (panel, breaker, wiring), emergency detection for electrical scenarios.

---

### Journey 4: Sandra — The Office Administrator (Secondary, Day-to-Day Operations)

**Opening scene:** Sandra is Diana's part-time office admin. She works 9 AM–1 PM weekdays. Her role: make sure nothing fell through the cracks overnight. Before TradesAI, she'd arrive to 3–5 voicemails, attempt to decipher them, and create HousecallPro jobs manually. It took 45 minutes every morning.

**Rising action:** With TradesAI, Sandra opens the dashboard at 9 AM. She sees 7 calls overnight: 5 booked (already in HCP with customer details), 1 emergency (dispatched to Mike at 12:44 AM, job completed), 1 flagged for follow-up (customer asked about a commercial account — outside normal residential flow). She reviews the flagged transcript, calls the customer back, and creates the job manually. Total time: 12 minutes.

**Resolution:** Sandra's morning task list shrinks from 45 minutes to 12 minutes. She starts her days with context, not chaos. She flags one call per week for quality review — transcripts where the AI stumbled on an unusual request. Diana uses these to refine the knowledge base over time.

**Journey requirements revealed:** Dashboard with overnight call summary, flagged-for-follow-up classification, call transcript review, job status visibility (dispatched/booked/flagged), admin access separate from owner, call recording per call.

---

### Journey Requirements Summary

| Capability Revealed | Journey Source |
|--------------------|---------------|
| 24/7 voice answering, sub-2-ring pickup | All |
| Trade-specific intent recognition (HVAC, plumbing, electrical) | Marcus, Raj |
| Emergency keyword detection → SMS dispatch | Marcus, Diana |
| CRM job creation (Jobber + HousecallPro) | Marcus, Diana |
| Setup Wizard ≤15 minutes | Marcus |
| Operator dashboard: call log, transcripts, recordings | All |
| Recovered revenue estimate | Marcus |
| On-call tech SMS with customer + job details | Marcus, Diana |
| Emergency dispatch with fallback re-alert | Diana |
| Multiple CRM support | Diana |
| Annual billing option | Marcus |
| Call recording playback | Raj |
| Free trial without CRM requirement | Raj |
| Admin-level dashboard access | Sandra |
| Flagged-for-follow-up classification | Sandra |
| Overnight batch summary view | Sandra |

---

## Domain-Specific Requirements

### Field Service Management Context

TradesAI operates in the field service management domain, where operators are physically mobile, frequently unreachable, and make high-value time-sensitive decisions. Domain constraints:

**Operational constraints:**
- Contractors cannot interact with software while working (on ladders, under sinks, in attics)
- All interaction with TradesAI is asynchronous — operators review activity between jobs, not during
- Call volume is highly seasonal (HVAC peaks 3–5x in summer; plumbing peaks in winter freeze events)
- After-hours calls represent the highest-margin work (emergency surcharges $500–$2,000 above normal rates)

**Trust and reliability requirements:**
- Contractors cannot tolerate a missed emergency — it creates liability exposure and reputational damage
- A single AI miscommunication that frustrates a customer (wrong pricing, wrong service type) can cause immediate churn
- Voice quality is a table-stakes requirement: contractors will cancel if a customer complains that they "talked to a robot"
- The product must work reliably during peak demand — the moments it's needed most are heat waves, freeze events, and storms, which also cause infrastructure stress

**Compliance and regulatory considerations:**
- Telephone Consumer Protection Act (TCPA): calls must disclose AI nature if required by state law; disclosure approach must be legal-team reviewed
- CCPA/state privacy laws: call recordings require proper disclosure; consent captured in call greeting
- No HIPAA or PCI requirements at the operator level (TradesAI handles no health data; payment processing is handled by Stripe, not TradesAI)

**CRM integration reliability:**
- Jobber and HousecallPro are mission-critical systems for operators; a failed job sync is worse than no sync — it creates duplicate work and erodes trust
- Integration must handle API rate limits, OAuth token refresh, and duplicate detection (customer already in CRM by phone number)
- All integration failures must be surfaced in the dashboard; operators cannot discover sync failures by finding missing jobs days later

---

## Innovation & Novel Patterns

### Detected Innovation Areas

**1. Vertical AI voice agent with pre-trained trade domain knowledge**
Most AI receptionists are horizontal (work for any business) and require extensive prompt configuration to work in a specific domain. TradesAI inverts this: the default configuration knows HVAC, plumbing, and electrical without setup. This is novel for the SMB field services market and directly addresses the primary failure mode of generic AI receptionists (miscategorizing requests, not understanding urgency).

**2. Rule-based emergency dispatch as a product guarantee**
Emergency detection in competing products relies on LLM judgment, which can fail under adversarial or unusual phrasing. TradesAI's emergency dispatch is deterministic: a pre-defined keyword set triggers dispatch before the conversation ends. This is an architectural safety guarantee, not a quality-of-service claim — and it's communicable as such in marketing ("never misses an emergency, by design").

**3. Flat-rate pricing as competitive moat in a per-minute market**
Per-minute pricing is the industry norm (Dialzara, Rosie, AI Front Desk, Avoca all charge usage-based rates). Flat-rate pricing is not just a pricing strategy — it's a product differentiator that directly removes the #1 objection to AI receptionists in seasonal businesses: "What happens to my bill in July?" Flat-rate requires careful API cost management (see NFRs) but creates a structural acquisition and retention advantage.

### Market Context

- Voice AI market CAGR: 34.8% (2024–2028) — accelerating adoption
- Enterprise validation: Avoca ($47.8M raised, ServiceTitan-native), Netic ($43M, $450M valuation) confirm category legitimacy
- SMB white space: Dialzara ($29/mo), Rosie ($49–$199/mo), AI Front Desk ($65–$150/mo) are generic and horizontal — none offer trade-specific intelligence or CRM-native integration with Jobber
- Timing: 38% of contractors report measurable AI business impact in 2026 (ServiceTitan survey) — early majority adoption phase

### Validation Approach

- Voice quality gate: 10 real contractors blindly call the test number — ≥8/10 cannot identify AI within 30 seconds
- Trade knowledge gate: 500 synthetic test calls across HVAC/plumbing/electrical scenarios — ≥95% appropriate response rate
- Emergency gate: 50 emergency scenario calls — 100% detection rate required before launch
- Market validation gate: 20 paying accounts within 90 days at ≥$99/month

### Risk Mitigation

- API cost risk (flat-rate model): GPT-4o-mini for routine calls (cost-efficient); GPT-4o only for complex/emergency triage. Cost per call target: <$0.40 average at $149/month plan to maintain ≥55% gross margin
- Voice quality risk: ElevenLabs TTS with phonetic customization for trade terminology (e.g., "HVAC," "PVC," "kilowatt") — tested before launch
- Competitor response risk: Avoca/Netic could add SMB pricing tier — TradesAI's advantage shifts to Jobber distribution, trade community brand, and community referral moat

---

## SaaS B2B Specific Requirements

### Multi-Tenancy Model

TradesAI is a multi-tenant SaaS: each contractor account is a fully isolated tenant with their own phone number, knowledge base configuration, call history, CRM connection, and billing. No data leakage between tenants is architecturally enforced.

**Tenant isolation requirements:**
- Each account has a dedicated provisioned phone number (via Twilio through Retell/Vapi)
- All call recordings and transcripts are scoped to the tenant account
- CRM credentials (Jobber OAuth tokens) are encrypted per-tenant and never shared
- Account owner can have multiple users with role-based access (Owner, Admin, View-only)

### Role-Based Access

| Role | Capabilities |
|------|-------------|
| Owner | Full access: billing, configuration, all call data, user management |
| Admin | Call log, transcripts, recordings, knowledge base editing (no billing, no user management) |
| View-only | Call log and recordings; no configuration changes |

For MVP: Owner and Admin roles sufficient. View-only can be deferred.

### CRM Integration Architecture

**Jobber (MVP):**
- OAuth 2.0 authorization flow in Setup Wizard
- Token refresh handling (access + refresh token pair)
- Create Client (or look up existing by phone number) → Create Job
- Job fields: client name, phone, address, service type, requested datetime, call notes
- Webhook or polling for sync status confirmation
- Sync within 60 seconds of call completion

**HousecallPro (Phase 2):**
- Same OAuth pattern, HousecallPro API v2
- Deferred from MVP; stub integration infrastructure during MVP build

**Failure handling:**
- Failed sync surfaced immediately in dashboard with manual retry option
- Duplicate detection by phone number before creating new client records
- Sync error log retained for 30 days

### Billing & Plan Structure

| Plan | Price/month | Annual Price | Call Volume | Target Segment |
|------|-------------|-------------|-------------|---------------|
| Solo | $99/month | $79/month | Up to 300 calls/month | 1-truck operators |
| Pro | $149/month | $119/month | Up to 600 calls/month | 2-8 truck operators |
| Growth | $249/month | $199/month | Unlimited | 9-15 truck operators |

- Annual billing: 20% discount, improves LTV and provides cash flow
- 14-day free trial, no credit card required
- Overage policy for MVP: soft limit with dashboard warning; no hard cutoff or surprise charges in Year 1 (supports flat-rate brand promise)
- Stripe for all billing: subscription lifecycle, trial-to-paid conversion, annual vs. monthly, refunds

### Onboarding Flow

Self-serve only for MVP (no sales-assisted onboarding):
1. Signup (email + password or Google OAuth)
2. Setup Wizard (10 questions, ≤15 minutes)
3. Phone number provisioning (automated, <30 seconds)
4. Call forwarding instructions (carrier-specific, auto-generated)
5. Jobber OAuth connection
6. Test call (optional guided test to validate setup)
7. First real call → dashboard notification

---

## Project Scoping & Phased Development

### MVP Strategy & Philosophy

**MVP Approach:** Problem-solving MVP. The MVP must deliver one complete, reliable value loop — answer the call, understand the trade issue, book or dispatch, sync to CRM, show the operator — and do it at a quality level where operators trust it with their business phone number. An MVP that books 85% of calls and syncs 90% of the time will fail. The quality bar is higher than typical B2C SaaS because it touches the operator's primary revenue channel.

**Resource Requirements:**
- 1 full-stack engineer (Node.js/TypeScript + React)
- 1 AI/voice integration engineer (Retell AI / Vapi + LLM prompting)
- 1 product/PM (can be founder)
- 8-week build target to beta

### MVP Feature Set (Phase 1)

**Core User Journeys Supported:**
- Solo operator (Marcus): inbound calls answered, jobs booked in Jobber, emergencies dispatched
- Growing shop (Diana): after-hours emergency detection and dispatch (HousecallPro deferred to Phase 2 — Jobber only in MVP)
- Skeptical operator (Raj): trial without commitment, call recording review before going live

**Must-Have Capabilities:**
- Trade-specific voice AI (HVAC, plumbing, electrical)
- Emergency detection + rule-based SMS dispatch
- Jobber CRM integration (OAuth, job creation)
- Setup Wizard (≤15 min to live)
- Operator dashboard (call log, transcripts, recordings, recovered revenue)
- Subscription billing (Stripe, 3 plans, 14-day trial)

### Post-MVP Features

**Phase 2 (Post-MVP, Months 4–12):**
- HousecallPro integration
- Bilingual English/Spanish
- Roofing and pest control knowledge bases
- ServiceTitan Zapier bridge
- Mobile PWA dashboard
- Operator referral program
- ServiceTitan App Marketplace listing

**Phase 3 (Expansion, Year 2+):**
- AI call analytics and insights
- Outbound call campaigns (review requests, renewal reminders)
- Franchise/multi-location portal
- White-label API
- Proprietary trades LLM
- Adjacent verticals (landscaping, appliance repair, pool service)

### Risk Mitigation Strategy

**Technical Risks:**
- *API cost overrun on flat-rate plan*: Mitigate via LLM tier routing (GPT-4o-mini default, GPT-4o for emergencies only). Monitor cost-per-call daily; alert if approaching margin threshold. Target: <$0.40/call average.
- *Voice quality rejection*: Mandatory blind test with 10 real contractors before launch. ElevenLabs TTS with custom phoneme list for trade terms. Fallback: Retell AI's built-in TTS if ElevenLabs latency exceeds 800ms.
- *Jobber API instability*: Implement retry logic (3 attempts with exponential backoff). Surface all failures in dashboard within 2 minutes.

**Market Risks:**
- *Enterprise players add SMB tier*: TradesAI's moat is Jobber distribution and community brand. Build Jobber relationship early (potential App Marketplace listing). Community brand is slow to build for enterprises.
- *Voice AI commodity risk*: Proprietary trade knowledge base (200+ intents, emergency detection logic) is the durable asset. Begin curating labeled call data from beta to feed Phase 3 LLM.

**Resource Risks:**
- *If only 1 engineer available*: Scope MVP to HVAC-only with Jobber integration. Validate with 20 HVAC operators before expanding to plumbing/electrical.
- *If timeline slips*: Cut HousecallPro (Phase 2 anyway), cut roofing/pest control, defer bilingual. Core HVAC+plumbing+electrical with Jobber remains viable MVP.

---

## Functional Requirements

### Call Answering & Routing

- FR1: System can answer inbound calls within 2 rings (≤6 seconds), 24 hours a day, 7 days a week, including holidays
- FR2: System can greet callers with a business-name-specific greeting configured by the operator
- FR3: System can detect caller intent (service request, scheduling, emergency, price inquiry, directions/hours, other) within the first 30 seconds of a call
- FR4: System can confirm the caller's service area against the operator's configured coverage (zip codes or radius)
- FR5: System can escalate calls to a human (operator's cell) when explicitly requested by the caller ("let me speak to someone")
- FR6: System can handle dropped calls and incomplete calls gracefully, logging them as partial attempts in the dashboard

### Trade Knowledge & Triage

- FR7: System can identify the specific trade type for a call (HVAC, plumbing, electrical, roofing, pest control) from caller description without requiring the caller to specify the trade
- FR8: System can recognize 200+ trade-specific service type intents (e.g., AC diagnostic, heat pump install, main line rooter, panel upgrade, emergency generator, pest inspection) and classify them accurately
- FR9: System can provide callers with typical price range guidance based on operator-configured pricing by service type (e.g., "A diagnostic visit is typically $89–$149")
- FR10: System can ask qualifying questions appropriate to the detected service type (e.g., confirm equipment age for HVAC, building type for electrical, number of fixtures for plumbing)
- FR11: System can collect the complete information needed to create a job record: customer name, callback number, service address, issue description, requested service date/time, and urgency level
- FR12: System can handle callers who are unsure of the issue and guide them to a useful service classification through conversational triage

### Emergency Detection & Dispatch

- FR13: System can detect emergency trigger conditions from caller speech using a pre-defined keyword and phrase set (gas smell, no heat, no AC, burst pipe, flooding, sewage backup, no power, smoke, carbon monoxide, electrical fire)
- FR14: System can fire an emergency SMS to the designated on-call technician within 30 seconds of emergency detection, before the call ends
- FR15: Emergency SMS must include: caller name, callback number, service address, detected issue summary, detected urgency level, and timestamp
- FR16: System can trigger a secondary alert (re-SMS + operator cell call) if the primary on-call tech does not respond within 5 minutes of initial dispatch
- FR17: Operator can configure emergency keywords, on-call tech phone number, and secondary fallback contact number
- FR18: All emergency-classified calls are flagged separately in the dashboard with enhanced audit trail (detection timestamp, dispatch timestamp, tech response status)

### CRM Job Creation (Jobber)

- FR19: Operator can connect their Jobber account to TradesAI using OAuth 2.0 authorization in the Setup Wizard
- FR20: System can automatically check if a calling phone number matches an existing Jobber client before creating a new client record
- FR21: System can create a new Jobber job record within 60 seconds of call completion, populated with: client name, phone, address, service type, requested date/time, and call notes
- FR22: System can link call records to Jobber job IDs for bidirectional traceability (dashboard shows Jobber job link; Jobber job notes reference TradesAI call)
- FR23: All CRM sync attempts are logged with success/failure status and surfaced in the operator dashboard within 2 minutes
- FR24: Operator can manually trigger a sync retry for any failed job creation from the dashboard

### Operator Setup & Configuration

- FR25: New operators can complete initial setup (business name, service area, trade selection, service types, pricing ranges, emergency config, CRM connection) in ≤15 minutes using a guided wizard
- FR26: Operator can configure call forwarding from their existing business phone number to their TradesAI number (wizard generates carrier-specific instructions)
- FR27: Operator can configure business hours and after-hours behavior (answer all calls vs. only after-hours calls)
- FR28: Operator can add, edit, or remove service types and associated pricing ranges without support intervention
- FR29: Operator can update on-call tech phone number at any time with immediate effect (no restart or propagation delay)
- FR30: Operator can run a test call to validate their TradesAI configuration before going live

### Operator Dashboard & Reporting

- FR31: Operator can view a call log showing all calls with date, time, caller ID, call duration, detected intent, and outcome classification (booked/emergency/follow-up/declined/partial)
- FR32: Operator can access a full text transcript for every call handled by TradesAI
- FR33: Operator can play back the audio recording of any call directly from the dashboard
- FR34: Operator can see a daily/weekly/monthly summary of calls handled, jobs booked, emergencies dispatched, and calls flagged for follow-up
- FR35: Operator can see a recovered revenue estimate based on jobs booked × operator-configured average job value
- FR36: Operator can export call logs and transcripts as CSV for their own records
- FR37: Admin-level users can access the full dashboard (call log, transcripts, recordings) without access to billing or user management

### Subscription & Billing

- FR38: New users can start a 14-day free trial without providing a credit card
- FR39: Users can subscribe to Solo ($99/mo), Pro ($149/mo), or Growth ($249/mo) plans with monthly or annual billing
- FR40: Operators on annual billing receive a 20% discount displayed at checkout
- FR41: Operators can upgrade or downgrade their plan at any time with prorated billing
- FR42: Operators can view current billing period, next billing date, plan details, and payment method in account settings
- FR43: Operators receive an email notification 7 days before trial expiry with one-click upgrade link

### Account & User Management

- FR44: Account owner can invite additional users to the account with role assignment (Owner, Admin)
- FR45: Users can reset their password via email link
- FR46: Account owner can update business name, phone number, and service area without contacting support
- FR47: Account owner can cancel their subscription with same-day effect (no calls answered after cancellation, data retained for 30 days)

---

## Non-Functional Requirements

### Performance

- Voice call pickup latency: ≤6 seconds from ring 1 to answered (≤2 rings)
- AI response latency during conversation: ≤800ms between caller turn-end and AI response start (below perceptible delay threshold)
- CRM job sync: ≤60 seconds from call completion to job appearing in Jobber
- Dashboard page load: ≤2 seconds for call log view (up to 90 days of history)
- Call transcript availability: ≤5 minutes after call completion
- Test call in Setup Wizard: live within 60 seconds of phone number provisioning

### Reliability

- System availability: ≥99.9% uptime (≤8.7 hours downtime per year), monitored via external uptime check
- Call answer rate: ≥99% of all inbound calls answered (excluding calls during scheduled maintenance windows, communicated 72 hours in advance)
- Emergency dispatch delivery: 100% — if the system accepts an emergency-classified call, the dispatch SMS must fire. Any failure here is a P0 incident requiring post-mortem
- CRM sync success rate: ≥98% of job creation attempts succeed on first try or within 3 retries
- Telephony provider SLA: vendor selection (Retell AI / Vapi / Twilio) must provide ≥99.95% telephony uptime SLA

### Security

- All data transmitted over TLS 1.2+; HTTPS enforced on all endpoints
- Call recordings and transcripts encrypted at rest (AES-256)
- CRM OAuth tokens encrypted at rest, never logged, per-tenant isolated
- Passwords hashed using bcrypt (cost factor ≥12) or Argon2id
- PCI DSS compliance delegated to Stripe; TradesAI stores no cardholder data
- GDPR/CCPA: operators can request deletion of all account data within 30 days of written request; 30-day retention after account cancellation then purge
- Call recording disclosure: AI greeting must include disclosure language compliant with two-party consent state requirements (California, Florida, etc.)
- Rate limiting on API endpoints to prevent abuse; authentication required for all dashboard and configuration endpoints

### Scalability

- System must handle peak season call volume (3–5x baseline) without degradation — a Phoenix HVAC operator receiving 50 calls/day in July must get the same performance as 10 calls/day in February
- Architecture must support 5,000 concurrent tenant accounts with independent phone number pools
- LLM inference must be load-balanced across multiple API keys/providers to avoid rate-limit failures during regional weather events that spike calls across multiple tenants simultaneously
- Database must be sized to retain 12 months of call history per tenant (estimated 200–500 calls/month per Growth-tier account)

### Integration

- Jobber API: must handle OAuth token expiry and refresh without operator re-authentication for ≥90 days; alert operator at 14 days before expiry if refresh fails
- All external API dependencies (LLM, TTS, telephony) must have circuit breaker patterns: if a dependency fails, calls must still be answered (fallback to simpler response or human escalation) rather than dropping
- Webhook reliability: CRM sync failures must be retried with exponential backoff (3 attempts over 15 minutes); after 3 failures, operator dashboard must show alert within 2 minutes
- Retell AI / Vapi: voice AI platform integration must support real-time function calling for CRM writes and SMS dispatch during active calls (not post-call only)

### Accessibility

- Dashboard: WCAG 2.1 AA compliance for web dashboard (contractor's office admin may use assistive technology)
- Mobile-responsive dashboard (CSS/responsive layout); full PWA in Phase 2
- Call transcripts provide text-based access to all call content (supports hearing-impaired operators reviewing calls)

---

*PRD Version: 1.0 | Date: 2026-04-02 | Author: Root*
*Created via BMAD automated PRD workflow*
*Based on: Product Brief (2026-04-01) + Shortlisted Idea (score: 93/105)*
*Next step: Architecture design or /bmad-bmm-create-architecture*
