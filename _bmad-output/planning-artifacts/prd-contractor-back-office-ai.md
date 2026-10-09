---
stepsCompleted: [step-01-init, step-02-discovery, step-02b-vision, step-02c-executive-summary, step-03-success, step-04-journeys, step-06-innovation, step-07-project-type, step-08-scoping, step-09-functional, step-10-nonfunctional, step-11-polish, step-12-complete]
inputDocuments:
  - ideas/shortlisted/contractor-back-office-ai-agents.md
  - _bmad-output/planning-artifacts/research/market-research-contractor-back-office-ai.md
workflowType: prd
classification:
  projectType: saas_b2b
  domain: construction_field_services
  complexity: medium
  projectContext: greenfield
date: '2026-10-09'
author: Root
project_name: 'ContractorAI — AI Back-Office Agents for Solo Contractors'
---

# Product Requirements Document - ContractorAI: AI Back-Office Agents for Solo Contractors

**Author:** Root
**Date:** 2026-10-09

## Executive Summary

770,000–920,000 solo US contractors with $300K–$2M in annual revenue have two options for back-office administration: do it themselves at 10pm after a 12-hour day on the job site, or hire an office manager at $40,000–$65,000/year. Every existing software tool — Jobber, Housecall Pro, Buildertrend — organizes information; none of them do the work. When a contractor needs a proposal sent, they have to sit down and type it. When an invoice ages past 30 days, they have to make the awkward phone call. When a job is confirmed, they have to text the customer manually. The "10pm admin" pattern is not a personal failure — it is the structural consequence of a software market that has produced zero AI action agents at the solo contractor price point.

**ContractorAI** is an autonomous AI back-office platform — three agents that replace the office manager for $99/month. The Proposal Agent converts a contractor's voice note or text message into a professional PDF proposal and emails it to the customer while the contractor is still on the job site. The Invoice Follow-Up Agent monitors QuickBooks for aging invoices and automatically sends payment reminders via SMS and email with embedded Stripe payment links. The Scheduling SMS Agent sends day-before and day-of customer reminders, handles running-late notifications, and automatically requests Google reviews after job completion.

**Target users:** Solo GCs, electrical, plumbing, HVAC, roofing, and landscaping subcontractors ($300K–$2M in annual revenue, 0–4 employees) who currently write proposals in Word at 10pm, accept 30–60 day invoice delays because follow-up calls are awkward, and lose 15–25% of scheduled jobs to no-show friction.

**The competitive position no incumbent holds:** No current tool at $49–$99/month initiates actions autonomously. Jobber, Housecall Pro, and Buildertrend are all organizing-tools; none are doing-agents. The enterprise AI agents (PLMBR at $10,500–$25,000/year, Arrakis at $38M for industrial) are validated and funded — but are architecturally and commercially unreachable for solo contractors. The unoccupied quadrant is "autonomous AI action agents + solo contractor price point." 18–24 month window before a well-funded entrant moves down-market.

**Go-to-market:** $99/month SaaS with $399 AppSumo LTD launch at Month 6. Target: 50 paying customers at Month 3 ($4,950 MRR), 250 customers at Month 12 ($24,750 MRR), 375–750 AppSumo LTDs at launch ($150K–$300K).

### What Makes This Special

**Does the work, doesn't organize the work.** The single most specific insight from contractor software reviews is not about features or price — it is that contractors reject tools because the tools organize work instead of doing it. ContractorAI is the only product at this price point that initiates actions on behalf of the contractor without requiring the contractor to trigger them. The contractor dictates a scope, the agent sends the proposal. An invoice ages, the agent sends the follow-up. A job is confirmed, the agent texts the customer. Zero keystrokes required after initial setup.

**Voice-to-professional-output in 90 seconds.** The lowest-friction input method for a contractor on a job site is talking. ContractorAI accepts a voice note from a moving contractor, extracts job scope, materials, and pricing, generates a professional contractor-specific PDF, and emails it to the customer — all without the contractor touching a keyboard. This is an architectural capability, not a feature toggle.

**Priced against the salary, not against the software.** "$99/month vs. $50,000/year" is not a software comparison. It is a hiring decision. ContractorAI's acquisition frame is not "why pay us instead of Jobber?" — it is "why hire an office manager when this does the same work for the price of one afternoon?" This framing closes on ROI, not features, and creates a category comparison where ContractorAI wins by definition.

**First-mover in the unoccupied position.** The "AI action agents + solo contractor price point" quadrant has zero incumbents. PLMBR and Arrakis are enterprise. Jobber and Housecall Pro are rule-based organizers. The category does not yet exist at $99/month. ContractorAI can define it.

## Project Classification

- **Project Type:** SaaS B2B — multi-tenant web application with mobile-optimized PWA for on-site use
- **Domain:** Construction / Field Services (solo contractor back-office administration)
- **Complexity:** Medium — involves AI/LLM pipeline (voice transcription → structured extraction → PDF generation), third-party integrations (QuickBooks, Twilio, Stripe, SendGrid), and autonomous agent logic that must operate reliably without user initiation
- **Project Context:** Greenfield — new product built from scratch, no existing codebase

## Success Criteria

### User Success

The defining measure of user success is: does ContractorAI save the contractor meaningful time and recover real money — without requiring the contractor to manage the platform?

- **Time to first autonomous action:** 80%+ of new users receive a ContractorAI-generated proposal delivered to a real customer within 30 minutes of account setup
- **Proposal volume increase:** Users who complete onboarding send ≥8 proposals/month (vs. baseline ~5–7 manually) — measured via agent action logs
- **Invoice recovery rate:** Users connected to QuickBooks who have aged invoices see ≥60% of invoices overdue >14 days collected within 30 days of agent activation
- **No-show rate reduction:** Users who activate the Scheduling SMS Agent report ≥70% reduction in customer no-shows within the first month
- **Time saved per week:** Users self-report ≥3 hours/week saved on admin tasks at 90-day survey (target 5 hours)
- **"Aha!" moment:** ≥60% of trialing users hit activation event (autonomous proposal sent + customer reply received) within Day 3 of signup — this event predicts paid conversion
- **Retention indicator:** Users with ≥3 agent actions in first 7 days have >85% probability of paying conversion at trial end

### Business Success

| Milestone | Target | Rationale |
|-----------|--------|-----------|
| MRR at Month 3 | $4,950 | 50 paying contractors × $99/month — proof of WTP |
| MRR at Month 12 | $24,750 | 250 paying contractors × $99/month |
| AppSumo launch (Month 6) | $150K–$300K | 375–750 LTDs at $399 avg — validates market |
| Monthly churn at Month 3 | <6% | Structural retention through workflow integration |
| NPS at Month 6 | ≥50 | Contractor word-of-mouth is the primary growth channel |
| Total users (trial + paid + LTD) at Month 12 | 600 | Validates market penetration signal |
| Case studies with documented ROI pre-AppSumo | ≥20 | Conversion engine for AppSumo listing |

### Technical Success

- **AI proposal quality:** ≥85% of AI-generated proposals sent by beta contractors are accepted by customers without the contractor requesting a manual edit before sending — measured in first 60 days
- **Voice transcription accuracy:** ≥95% of contractor voice notes produce structurally correct proposals (correct line items, materials, pricing) without manual correction in post-beta review
- **Agent reliability:** Invoice Follow-Up and Scheduling SMS agents execute their scheduled actions within 15 minutes of the trigger condition being met, with zero silent failures
- **QuickBooks sync reliability:** ≥99% of QuickBooks invoice sync and payment poll operations succeed within 30 minutes; failures surface to the contractor with actionable error messaging
- **PDF generation speed:** Proposal PDF generation completes in <10 seconds from voice note submission to email delivery, measured end-to-end
- **System uptime:** 99.9% availability for agent execution infrastructure; agents must execute even if the web dashboard is unavailable

### Measurable Outcomes

| Metric | Month 3 | Month 6 | Month 12 |
|--------|---------|---------|----------|
| Total Paying Customers | 50 | 200 | 250 |
| MRR | $4,950 | $19,800 | $24,750 |
| Trial → Paid Conversion | ≥25% | ≥28% | ≥30% |
| Monthly Churn | <6% | <5% | <4% |
| 90-Day Retention | 70% | 78% | 85% |
| NPS Score | 40+ | 50+ | 55+ |
| QuickBooks Integration Rate | 60% | 75% | 80% |
| AppSumo LTD Revenue | — | $150K–$300K | — |
| Organic Community Mentions/Week | 2+ | 10+ | 20+ |

## Product Scope

### MVP — Minimum Viable Product

The MVP hypothesis is narrow: contractors will pay $99/month for three AI agents that autonomously send proposals, follow up on invoices, and coordinate job scheduling. Everything in scope serves this hypothesis test. Everything else is deferred.

**Core capabilities:**

1. **Voice/Text-to-Proposal Agent** — Contractor submits a voice note (via phone share sheet) or text message with job scope → AI extracts line items, labor, materials, and pricing → generates professional trade-specific PDF → emails to customer with contractor BCC → auto-follows-up Day 3 if no customer reply → records win/loss outcome

2. **Invoice Follow-Up Agent** — Connects to QuickBooks Online → monitors for unpaid invoices aging past 14 days (configurable) → sends Day 14 friendly SMS + email with Stripe payment link → escalates tone at Day 21 → sends final notice at Day 28 → auto-stops on payment detection via Stripe webhook or QB sync → sends contractor weekly SMS summary of collections

3. **Scheduling SMS Agent** — Contractor confirms job date/time → agent auto-texts customer Day-before reminder with confirm/reschedule option → Day-of ETA text → running-late trigger from contractor → post-job satisfaction check + Google review request link

4. **Onboarding flow** — QuickBooks OAuth connection, proposal template selection (10 trade-specific templates), Twilio phone number provisioning, Stripe Connect link, test proposal delivery — completable in under 30 minutes

5. **Minimal web dashboard** — View proposal log (sent/won/lost), invoice follow-up log, scheduling message log, configure agent rules, view monthly recovery summary

### Growth Features (Post-MVP)

- Change order generation from site photos + voice notes
- Job cost tracking (receipt photos + labor hours → per-job P&L)
- Subcontractor coordination (auto-send RFIs, track responses, lien waiver requests)
- Multi-user / team plan ($199/month, spouse or office manager view-only access)
- Spanish-language proposal templates and SMS
- QuickBooks Desktop integration
- Native iOS/Android app (PWA first, native in Phase 2)
- AI phone receptionist for inbound call qualification

### Vision (Future)

- ContractorAI as the back-office operating system for independent tradespeople — every customer communication, financial follow-up, scheduling coordination, and compliance task handled autonomously
- White-label / trade association distribution (NRCA, PHCC, NECA membership benefit)
- Integrated contractor financing (offer customer payment plans directly from proposal)
- Insurance and license renewal tracking
- Horizontal expansion to Canada and Australia
- Enterprise tier for $2M–$5M contractors ($299–$499/month, team coordination + payroll)

## User Journeys

### Journey 1: Mike the Electrician — The Proposal That Closed Itself

**Opening Scene:** Mike has been running his electrical sub business for 11 years in Tampa. He's a one-man operation with an apprentice. It's 4:45pm on a Thursday. He's finishing a panel replacement at a residential job site. He has a voicemail from a homeowner who wants a quote for a 200-amp service upgrade at their house — they called Monday, he hasn't gotten back to them yet because every time he thinks about writing the proposal, he's either too tired or on another job. He lost a similar job last month to a competitor who responded the same day.

**Rising Action:** Mike's buddy from r/Electricians posted a screenshot in the contractor Facebook group: "My AI sent this proposal while I was on the roof. Customer said yes before I got home." Mike clicked the link three days ago, signed up for the trial, spent 20 minutes connecting QuickBooks and choosing the Electrical template. This morning he tried it for the first time on a small job — it worked. Now, at 4:45pm, he opens ContractorAI's phone share sheet and records 47 seconds: "Quote for the Johnson house on Maple Drive. 200 amp service upgrade. Replace main panel, new meter base, permit and inspection. Figure 8 hours labor, parts about $900. I want to make $3,400 total."

**Climax:** At 4:52pm — while Mike is still loading tools into his truck — a professional PDF proposal lands in the Johnson homeowner's inbox from Mike's email address. Line items: Service Upgrade Materials ($900), Labor — Panel Replacement ($2,200), Permit and Inspection ($300). Total: $3,400. The homeowner replies at 5:18pm: "This looks great, when can you start?" Mike is on the highway when his phone buzzes. He sees the reply. He has never closed a job this fast without trying.

**Resolution:** Mike uses ContractorAI for every proposal from that day forward. He stops writing in Word. He stops losing jobs because he didn't respond fast enough. At the end of Month 1, ContractorAI reports 14 proposals sent (vs. 8 the prior month), 9 won. His close rate went from ~60% to ~64%. More importantly, every proposal went out the same day the customer called — a behavioral change that took zero additional effort from Mike.

---

### Journey 2: Sarah the GC — $6,200 She'd Already Written Off

**Opening Scene:** Sarah runs a custom residential remodeling business in Phoenix. She manages 4–6 projects at a time with 4 subs. She has no employees. At any given moment, she has 2–3 invoices that are more than 30 days overdue. She knows she should follow up on them. She hates calling customers about money. One customer owes $4,800 for a completed bathroom — she's called twice, they keep saying "this week," and now she's stopped calling because she doesn't want to damage the relationship. Another owes $1,400 for extras from a project that finished 45 days ago.

**Rising Action:** Sarah connects ContractorAI to QuickBooks. She sets the Invoice Follow-Up Agent's trigger to 14 days overdue. Within the first hour, ContractorAI identifies 3 overdue invoices: $4,800 (45 days), $1,400 (45 days), and $680 (16 days). It sends friendly automated SMS + email messages to all three customers with direct Stripe payment links. Sarah doesn't have to write any of it. She gets a copy of each message sent.

**Climax:** The $680 customer pays via Stripe link within 4 hours — they hadn't realized the invoice was even outstanding. The $1,400 customer calls Sarah the next day and says "sorry, I thought I paid that." Sarah processes payment by phone. The $4,800 customer receives the Day 21 firmer follow-up and calls Sarah directly — it's awkward, but the conversation happens. They pay $2,500 that day, promise the rest by Friday. Friday comes: ContractorAI sends the final notice, customer pays the remaining $2,300.

**Resolution:** In Month 1, ContractorAI recovers $6,200 that Sarah had mentally written off. She calculates: that's 63 months of the $99 subscription. She posts in the contractor Facebook group. She screenshots her "Recovered This Month" dashboard. She tells her husband: "I should have done this three years ago."

---

### Journey 3: Dave the HVAC Sub — Zero No-Shows in August

**Opening Scene:** Dave runs HVAC installations and service calls in Dallas with two technicians. Peak summer means 8–12 calls per day. His #1 operational problem is no-shows: customers who booked a service call aren't home, or call to reschedule at the last minute — after his tech has already driven 25 minutes to the address. He averages 3–4 no-shows per week in summer. Each one wastes 1.5–2 hours of billable tech time and $20–40 in fuel. In July, he calculates he lost $2,800 in wasted dispatch costs.

**Rising Action:** Dave activates the Scheduling SMS Agent. Setup takes 8 minutes: connect his phone number, enter his business name, set the reminder timing. He enters his first confirmed job. At 8:45pm the night before the appointment, the customer gets an automated text: "Hi James, just a reminder that Premier HVAC arrives tomorrow between 9:00–11:00am. Reply CONFIRM or call us to reschedule." James replies "CONFIRM" at 8:47pm. Dave's tech shows up the next morning. James is home.

**Climax:** The second week, Dave's tech Marcus is running 40 minutes behind because of a parts issue on the previous job. Dave texts ContractorAI from his truck: "LATE Martinez 40min." Two minutes later, the Martinez customer receives: "Running a bit behind — Premier HVAC is on the way and will arrive around 2:40pm. Sorry for the delay!" The Martinez customer texts back: "No problem, thanks for letting me know!" Marcus has no idea ContractorAI sent the message. He just shows up and the customer is there, unflustered.

**Resolution:** In August, Dave has 1 no-show (a customer who genuinely forgot and didn't see the text). The prior August, he had 14. He recovers approximately $2,600 in previously lost dispatch costs. Three weeks after activating the post-job review request, Dave has 7 new Google reviews — more than he got in all of 2025 combined.

---

### Journey 4: Sarah — Proposal Agent Flags an Edge Case

**Opening Scene:** A new commercial client asks Sarah to quote a full kitchen remodel at a small restaurant — a bigger job than she usually takes. She voice-notes the scope while driving: "Commercial kitchen remodel, about $85,000 in materials, 300 hours labor. I want to make around $170,000 total." She submits the voice note.

**Rising Action:** ContractorAI extracts the scope and generates a draft proposal. Before sending, the Proposal Agent triggers a pricing validation flag: "Estimated labor rate implied by this quote: $283/hour. This is 2.4× higher than typical for your trade in your area. Please review before sending." ContractorAI holds the proposal in a "Review Before Send" state and sends Sarah a push notification asking her to confirm.

**Climax:** Sarah opens the review screen, looks at the proposal. She realizes she said $170,000 when she meant $85,000 in labor — she'd been thinking about the materials number and mixed it up. She corrects the proposal to $85,000 materials + $85,000 labor + markup = $135,000 total, reviews the PDF, and approves it for sending.

**Resolution:** The proposal goes out with the correct numbers. Sarah realizes the pricing validation flag prevented her from sending a wildly overpriced commercial quote that would have cost her the relationship. She turns on the "always review before send" setting for jobs over $50,000, and keeps "auto-send" for smaller residential quotes.

---

### Journey 5: Mike — The Contractor Who Doesn't Pay the Bill

**Opening Scene:** Mike has been using ContractorAI for four months. He's had 47 proposals sent, collected $9,400 in invoices the agent followed up on, and had zero no-shows in the past 6 weeks. Then he forgets to update his credit card after his old card expires. ContractorAI sends three email warnings over 8 days. Mike's email is overwhelmed. He misses them.

**Rising Action:** On day 9, ContractorAI pauses agent execution. Mike texts a customer a voice note of a job scope, nothing happens. He opens the app and sees a red banner: "Subscription inactive — agent execution paused. Update payment to resume. Your data and settings are safe." He updates his payment method in 90 seconds.

**Resolution:** Agents resume immediately. All three agent queues pick up where they left off — the Invoice Follow-Up Agent continues its sequences without resetting the clock. Mike loses about 9 days of agent coverage but no data, no customer confusion, no dropped sequences from Day 1. He sets up autopay.

---

### Journey Requirements Summary

| Journey | Capabilities Revealed |
|---------|----------------------|
| Mike (proposal agent) | Voice note intake, AI scope extraction, PDF generation, email delivery, Day-3 follow-up, win/loss recording |
| Sarah (invoice follow-up) | QuickBooks sync, aging invoice detection, SMS + email sequences, Stripe payment link, escalation tones, contractor weekly summary |
| Dave (scheduling SMS) | Job confirmation trigger, Day-before reminder, Day-of ETA, running-late notification, post-job review request |
| Sarah (edge case pricing flag) | AI pricing validation, review-before-send gate, proposal approval flow, configurable auto-send thresholds |
| Mike (subscription lapse) | Payment failure handling, graceful agent pause, resume without data loss, queue continuity |

## Innovation & Novel Patterns

### Detected Innovation Areas

**AI action agents at the solo contractor price point** is a genuine innovation — not an incremental improvement. The pattern of "AI reads inputs → takes autonomous action → reports results" exists in the enterprise ($10K+/year tools) but has never been deployed for a $99/month SaaS targeting owner-operators. The specific innovation is not the AI itself; it is the combination of:

1. **Autonomous initiation** — agents monitor conditions (invoice age, job confirmation, customer reply absence) and initiate actions without user triggers
2. **Voice-to-professional-output** — unstructured contractor speech → structured professional document in under 90 seconds, without user interaction post-submission
3. **Contractor-domain-specific LLM prompting** — proposal templates that understand contractor-specific terminology (change orders, RFIs, line-item scope, material vs. labor breakdown) rather than generic business templates

### Market Context & Competitive Landscape

The market validation for this innovation class is strong and recent:
- PLMBR raised and charges $10,500–$25,000/year for the same agent pattern (proposal generation, invoice follow-up, scheduling) — targeted at mid-to-large contractors
- Trayd raised $10M Series A for construction back-office automation (2026)
- YC S26 included 4+ funded startups in this space, all targeting enterprise
- The solo contractor segment ($300K–$2M revenue) is explicitly unserved by all funded entrants

The innovation claim is not "AI agents" (these exist at high price points) but "AI agents accessible to a sole proprietor who uses QuickBooks and a $99/month budget."

### Validation Approach

- **Beta validation (Months 1–2):** 10–20 solo contractors across 3 trades (electrical, HVAC, GC) run free beta. Validation criteria: ≥70% of voice notes produce proposals the contractor would send without editing; ≥80% of invoice follow-up sequences execute without errors; scheduling SMS sequences complete without customer complaints
- **Price validation (Month 3):** At least 50 contractors convert from free trial to $99/month paid without discount — establishes genuine WTP separate from AppSumo audience
- **ROI validation (pre-AppSumo):** 20 documented case studies with specific numbers (hours saved per week, dollars recovered via invoice follow-up) — these are the AppSumo conversion asset

### Risk Mitigation

- **AI proposal quality risk (primary):** If AI-generated proposals are not professional enough for contractors to trust sending without editing, the core value prop fails. Mitigate by: (1) trade-specific templates with contractor vocabulary, (2) pricing validation gate that catches obvious errors before send, (3) beta feedback loop that refines prompts before public launch
- **Contractor adoption risk:** Contractors who have rejected every previous software tool may not trust an AI agent to send communications on their behalf. Mitigate by: (1) "review before send" mode as the default for new users, gradually building toward full autonomy; (2) BCC on every agent-sent message so contractor always sees what went out

## SaaS B2B Specific Requirements

### Project-Type Overview

ContractorAI is a multi-tenant SaaS serving solo business owners (contractors) in the field services / construction trades. The primary interaction model is asynchronous agent execution — the contractor is on a job site, submits an input, and the agent handles the output. The web dashboard is an oversight and configuration interface, not a daily-use workspace. Mobile input (voice note, SMS trigger) is the primary action surface. Agent execution and reporting happen server-side, independent of any active user session.

### Technical Architecture Considerations

**Multi-Tenancy:**
- Tenant isolation at the database level — each contractor's customers, proposals, invoices, jobs, and agent logs are strictly isolated
- Tenant provisioning on account creation; role model is single-user for MVP (one contractor account = one tenant)
- Team/spouse access is Phase 2 (view-only role at $199/month plan)

**Subscription & Billing:**
- Stripe for subscription management: $99/month and $199/month plans; annual discount option
- AppSumo LTD codes: permanent license tied to a feature tier (500 agent actions/month, 1 location, all three agents)
- Overage billing: $0.10/agent action above plan limit — prevents margin squeeze from heavy users; surfaced transparently in dashboard
- Graceful degradation on subscription lapse: agent execution pauses, all data preserved read-only, resumes immediately on payment restoration

**Authentication:**
- Email + password with email verification; Google SSO for frictionless onboarding
- Magic link login as mobile-friendly alternative (no password recall on job site)
- Session tokens via HTTP-only cookies; 30-day remember-me

**Agent Execution Infrastructure:**
- Agents run as scheduled background jobs (cron-style): Invoice Follow-Up Agent polls QB daily; Scheduling SMS Agent runs T-24h and T-2h before job start time
- Proposal Agent is event-driven: triggers on voice note or text submission
- All agent actions logged in an append-only action log per tenant (visibility, auditability, and debugging)
- Agent pause/resume tied to subscription status; queue state persists through pause so sequences don't reset

**External Integrations:**
- QuickBooks Online via OAuth 2.0 (read invoices, read payment events, read customer contact info)
- Twilio for outbound SMS (dedicated per-tenant phone number or shared pool with contractor name in sender field)
- Stripe Connect for embedded payment links in invoice follow-up messages
- SendGrid/Postmark for email delivery (proposals, follow-ups, agent action summaries)
- Google My Business API for generating direct review links per business location
- OpenAI Whisper (or equivalent) for voice-to-text transcription
- OpenAI GPT-4o (or equivalent) for structured proposal generation from unstructured scope text

### Implementation Considerations

- Web-first MVP with mobile-optimized PWA; native iOS/Android app deferred to Phase 2
- AI proposal generation pipeline: voice → Whisper transcription → GPT-4o structured extraction → template rendering → PDF generation (Puppeteer) → email delivery (SendGrid)
- QuickBooks sync as a scheduled background job with retry, backoff, and per-tenant sync status tracking
- Twilio phone number provisioning automated on account creation (no manual admin step)
- PDF storage in S3-compatible object storage; per-tenant key namespacing
- Pricing validation in proposal pipeline: flag proposals where implied labor rate is >2× typical for the contractor's trade and region before auto-sending

## Project Scoping & Phased Development

### MVP Strategy & Philosophy

**MVP Approach:** Revenue-first MVP — build the three agents and ship them to beta contractors fast enough to validate contractor WTP before the competitive window narrows. The MVP hypothesis is falsifiable: does a contractor pay $99/month after 14-day trial? If yes for 50 contractors with <6% monthly churn at Month 3, the product works. If no, the root cause is either (a) proposal quality is not good enough, or (b) onboarding blocks QuickBooks connection. Fix before AppSumo launch.

**Resource Requirements:** 2–3 developers. One backend developer for agent execution engine, QuickBooks/Twilio/Stripe integration, and scheduled job infrastructure. One frontend developer for web dashboard and PWA. One part-time QA/beta-coordinator to work with beta contractors on proposal quality calibration. Timeline: 6 weeks to beta (Proposal Agent + onboarding), 10 weeks to full MVP (all three agents + dashboard), 6 months to AppSumo launch.

**Go / No-Go Decision Point at Month 3:** If activation <40% (users who send at least one autonomous proposal in first 7 days) or churn >10%, pause AppSumo launch and investigate before scaling.

### MVP Feature Set (Phase 1)

**Core User Journeys Supported:**
- Solo contractor on job site: submit voice note → AI generates proposal → customer receives it → contractor closes job with zero keyboard time
- Solo contractor with aging invoices: connect QuickBooks → agent follows up automatically → contractor receives weekly collection summary
- Solo contractor with confirmed jobs: enter job → agent handles all customer communication from confirmation through review request

**Must-Have Capabilities:**
1. Onboarding flow: QuickBooks OAuth, trade type selection, template selection, Twilio number provisioning, Stripe Connect, test proposal — <30 minutes
2. Proposal Agent: voice note / SMS intake, AI proposal generation, trade-specific PDF, auto-email, Day-3 follow-up, win/loss tracking
3. Invoice Follow-Up Agent: QuickBooks invoice monitoring, Day 14/21/28 SMS + email sequences, Stripe pay link, payment detection stop, weekly contractor summary
4. Scheduling SMS Agent: job confirmation trigger, Day-before + Day-of SMS, running-late notification, post-job review request
5. Pricing validation gate in proposal pipeline (prevents sending wildly incorrect quotes)
6. Web dashboard: proposal log, invoice follow-up log, scheduling log, agent settings, monthly summary
7. 14-day free trial with full agent access; $99/month subscription via Stripe; AppSumo LTD code redemption
8. Agent action log: every action an agent took, when, to whom, with what content — full transparency

### Post-MVP Features

**Phase 2 (Months 9–18):**
- Change order generation from site photos + voice notes
- Job cost tracking (receipt photos + labor hours → per-job P&L)
- Subcontractor coordination and lien waiver requests
- Multi-user / team plan with spouse/office-manager access
- Spanish-language proposal templates and SMS
- QuickBooks Desktop integration
- Native iOS/Android app

**Phase 3 (Year 2+):**
- AI phone receptionist for inbound call handling
- Integrated contractor financing in proposals
- Insurance and license renewal tracking
- White-label for trade associations (NRCA, PHCC, NECA)
- Horizontal expansion: Canada and Australia
- Enterprise tier ($299–$499/month, team coordination, payroll integration)

### Risk Mitigation Strategy

**Technical Risks:** AI proposal quality is the highest technical risk — a proposal that looks unprofessional or has incorrect numbers destroys contractor trust on first use. Mitigate by: (1) 10-template trade-specific library built and reviewed by real contractors in beta, (2) pricing validation gate that catches obvious errors, (3) "review before send" default for new users until they opt into full autonomy.

**Market Risks:** A YC S26-funded player could pivot down-market within 12 months. Mitigate by moving to AppSumo at Month 6 (before they reach this price point), building brand loyalty through "does work, not organizes work" narrative, and achieving structural retention through QuickBooks integration + workflow embedding.

**Margin Risks:** AI API costs at $99/month could compress margins if heavy users send 50+ proposals/month. Mitigate by: 500 agent action/month cap on base plan; $0.10/action overage; monitor per-user API cost in first 60 days and adjust limits if margin is negative at plan price.

**Adoption Risks:** Contractors who tried and abandoned Jobber/Buildertrend may be skeptical. Mitigate by: (1) framing onboarding as "30-minute setup then we do the rest" — not "new platform to learn"; (2) targeting Facebook groups where peer success screenshots are the highest-credibility content format.

## Functional Requirements

### Proposal Agent

- FR1: Contractors can submit a voice note (via phone share sheet integration or direct upload) as proposal input
- FR2: Contractors can submit a text or SMS message describing a job scope as proposal input
- FR3: The system transcribes voice input to text and extracts structured proposal data (line items, materials, labor, pricing, customer name/address) using AI
- FR4: The system generates a professional PDF proposal from extracted scope using the contractor's selected trade template
- FR5: The system auto-emails the generated PDF proposal to the specified customer on behalf of the contractor
- FR6: The system sends a BCC copy of every agent-sent proposal email to the contractor
- FR7: The system sends a Day-3 automated follow-up email to the customer if no reply has been received to the original proposal
- FR8: Contractors can configure the Day-3 follow-up as on/off and customize the follow-up message tone
- FR9: The system flags proposals where the implied pricing is outside typical range for the contractor's trade before sending, and holds for contractor review
- FR10: Contractors can review, edit, and approve a flagged or any proposal before it is sent
- FR11: Contractors can record proposal outcomes (won / lost / no response) and the system tracks win/loss rate over time
- FR12: Contractors can view a log of all proposals sent: date, customer, amount, status, and delivery confirmation

### Invoice Follow-Up Agent

- FR13: Contractors can connect ContractorAI to QuickBooks Online via OAuth 2.0 without sharing QuickBooks credentials
- FR14: The system reads unpaid invoices and customer contact information from the connected QuickBooks account
- FR15: The system identifies invoices that have been unpaid past a configurable threshold (default 14 days, configurable to 7 or 21 days)
- FR16: The system sends an automated SMS message to the invoice's customer with a Stripe payment link on Day 14
- FR17: The system sends an automated email message to the invoice's customer on Day 14, simultaneous with the SMS
- FR18: The system sends a firmer-tone follow-up SMS + email at Day 21 for still-unpaid invoices
- FR19: The system sends a final notice SMS + email at Day 28 for still-unpaid invoices
- FR20: The system stops all follow-up sequences for an invoice immediately upon detecting payment via Stripe webhook or QuickBooks sync
- FR21: Contractors receive a weekly SMS summary: number of invoices followed up, number paid, total amount collected
- FR22: Contractors can view an invoice follow-up log showing every message sent, to whom, for which invoice, and current payment status
- FR23: Contractors can pause the Invoice Follow-Up Agent for a specific customer or invoice (opt-out without disconnecting QB)

### Scheduling SMS Agent

- FR24: Contractors can enter a confirmed job with customer name/phone, job date, and arrival time window to trigger the scheduling sequence
- FR25: The system sends the customer an SMS reminder the day before the job with job date, arrival window, and a CONFIRM / RESCHEDULE option
- FR26: The system sends the customer an SMS 2 hours before the job with an ETA confirmation
- FR27: Contractors can trigger a running-late notification by texting a command to the system (e.g., "LATE [Customer Name] [minutes]")
- FR28: The system automatically sends the customer a revised ETA SMS when a running-late notification is triggered
- FR29: The system sends the customer a post-job satisfaction check SMS 24 hours after the contractor marks the job complete
- FR30: The system includes a direct Google review link in the post-job SMS, generated from the contractor's Google My Business location
- FR31: Contractors can view a scheduling message log showing every message sent per job with timestamps and delivery status

### Onboarding & Setup

- FR32: New contractors can sign up with email/password or Google SSO and access a full-featured 14-day free trial without a credit card
- FR33: The onboarding flow guides contractors through: trade type selection → proposal template selection → QuickBooks OAuth connection → Twilio phone number provisioning → Stripe Connect → test proposal delivery
- FR34: The onboarding flow is completable in under 30 minutes with no technical prerequisites beyond a QuickBooks account
- FR35: The system automatically provisions a dedicated Twilio phone number for the contractor during onboarding
- FR36: Contractors can select from 10 trade-specific proposal templates: electrical, HVAC, plumbing, general contracting, roofing, painting, landscaping, flooring, drywall, fencing
- FR37: Contractors can customize their proposal template (company name, logo, payment terms, licensing info) from the dashboard

### Agent Configuration & Transparency

- FR38: Contractors can configure per-agent settings: follow-up timing, message tone, auto-send vs. review-before-send mode for proposals
- FR39: Contractors can view a complete chronological agent action log showing every action any agent took, when, to whom, with full message content
- FR40: Contractors receive push notification or SMS when an agent executes an action on their behalf
- FR41: Contractors can pause all agents, pause a specific agent, or pause actions for a specific customer
- FR42: The system surfaces agent execution errors (failed SMS delivery, QuickBooks sync failure, email bounce) with specific cause and recommended action

### Account & Subscription

- FR43: Contractors can subscribe at $99/month (all three agents, 1 location, 500 agent actions/month) with Stripe
- FR44: Contractors can redeem an AppSumo LTD code to activate a permanent license on their account
- FR45: The system tracks agent action consumption and notifies contractors approaching their monthly limit
- FR46: Contractors can purchase additional agent actions at $0.10/action above the plan limit without upgrading
- FR47: When a subscription lapses, agent execution pauses immediately; all data, logs, and configurations are preserved in read-only state until payment is restored
- FR48: Contractors can export all proposal PDFs, agent logs, and account data at any time, including during subscription lapse

### Web Dashboard

- FR49: Contractors can view a monthly summary: proposals sent, proposals won, invoices followed up, amount recovered, no-shows prevented, reviews generated
- FR50: Contractors can view detailed logs for each agent (proposals, invoice follow-up, scheduling) with filtering and search
- FR51: Contractors can manage QuickBooks connection status with sync health indicators and manual re-sync trigger
- FR52: Contractors can view a real-time proposal status: each proposal's delivery status, customer open/reply status, and outcome

## Non-Functional Requirements

### Performance

- Voice note to proposal PDF delivered to customer email: end-to-end <10 seconds (voice upload → transcription → AI extraction → PDF generation → email delivery)
- Web dashboard page loads: <2 seconds on standard broadband
- Agent action log page (up to 500 entries): loads in <2 seconds
- QuickBooks sync for a typical contractor (≤100 open invoices): completes within 30 seconds
- Outbound SMS delivery (Day-before reminder, invoice follow-up): sent within 15 minutes of trigger condition being met

### Security

- All data encrypted in transit via TLS 1.3+; all stored data encrypted at rest (AES-256)
- Multi-tenant isolation enforced at application and database layer — one contractor's data is inaccessible to any other tenant or query path
- QuickBooks OAuth tokens stored server-side in encrypted secrets storage; never exposed to client-side code or logged in plaintext
- Twilio credentials and API keys stored in secrets manager (AWS Secrets Manager, HashiCorp Vault, or equivalent); never hardcoded or in environment files
- Agent action log is append-only; individual agent actions cannot be deleted (audit trail integrity)
- Stripe Connect integration must comply with Stripe's Connect platform security requirements; contractor payment data never touches ContractorAI servers directly
- Session tokens use HTTP-only, SameSite=Strict cookies; no sensitive tokens in localStorage

### Scalability

- Agent execution infrastructure (invoice polling, SMS scheduling, proposal pipeline) must scale horizontally to support 1,000 active contractors without queue latency degradation
- QuickBooks sync job queue must handle backlog gracefully: exponential backoff on rate limit errors, priority queuing for time-sensitive sequences, no silent job drops
- PDF generation service (Puppeteer/WeasyPrint) must support parallel execution; AppSumo launch burst (estimated 500 signups/48 hours) must not cause proposal generation delays >30 seconds
- Twilio phone number pool must be provisioned at scale; automated provisioning must handle up to 100 new accounts/day without manual intervention

### Reliability

- 99.9% uptime target for agent execution infrastructure; agents must execute scheduled actions even if the web dashboard is temporarily unavailable
- No silent agent failures: every failed agent action (SMS delivery failure, email bounce, QuickBooks sync error, Stripe link generation failure) must be surfaced to the contractor within 15 minutes via in-app notification or SMS
- Proposal pipeline must retry failed AI calls (transcription, extraction) up to 3 times with exponential backoff before surfacing an error to the contractor
- QuickBooks sync failures must preserve the contractor's sync state so retries do not duplicate invoice follow-up sequences

### Integration

- QuickBooks Online OAuth integration must handle token refresh transparently; contractors must never be prompted to reconnect QB except after explicit token revocation
- Twilio SMS delivery must achieve >98% successful delivery rate for US numbers; failed deliveries must be logged with the Twilio error code and surfaced in the agent action log
- Stripe payment link generation must work reliably for amounts from $50 to $500,000; links must embed the specific invoice reference so payment is traceable back to the QB invoice record
- Google My Business API integration must gracefully handle contractors who have not claimed their GMB listing — fall back to a generic Google search URL for the contractor's business name + "reviews"

### Accessibility

- Web dashboard meets WCAG 2.1 AA for core contractor workflows (proposal log, invoice follow-up log, agent settings) — office managers and spouses who may use the dashboard have diverse accessibility needs
- Mobile PWA supports iOS and Android system font scaling (Dynamic Type and Android font size accessibility settings) for the primary input flow (voice note submission, job confirmation entry)
