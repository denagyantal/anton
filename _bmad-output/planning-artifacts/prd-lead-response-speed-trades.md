---
stepsCompleted: [step-01-init, step-02-discovery, step-02b-vision, step-02c-executive-summary, step-03-success, step-04-journeys, step-05-domain, step-06-innovation, step-07-project-type, step-08-scoping, step-09-functional, step-10-nonfunctional, step-11-polish, step-12-complete]
inputDocuments:
  - ideas/shortlisted/lead-response-speed-trades.md
  - _bmad-output/planning-artifacts/market-research-lead-response-speed-trades.md
  - _bmad-output/planning-artifacts/brief-lead-response-speed-trades.md
workflowType: prd
product_name: lead-response-speed-trades
user_name: Root
date: 2026-10-21
classification:
  projectType: saas_mobile_first
  domain: home_services_b2b
  complexity: medium
  projectContext: greenfield
---

# Product Requirements Document — QuickReply

**Author:** Root
**Date:** 2026-10-21
**Product:** QuickReply (alt: FirstClaim)
**Status:** Complete

---

## Executive Summary

Solo and small-crew (1–5 person) home service operators — HVAC technicians, plumbers, landscapers, cleaners, electricians — lose an estimated $50,000–$60,000/year in jobs they never had a chance to win. The cause is structural: they are physically on a job when leads arrive. Homeowners contact 3–4 contractors simultaneously and hire whoever responds first; the average contractor first response time is 4.2 hours and only 12% respond within 5 minutes.

**QuickReply** eliminates lost jobs from slow response with three focused capabilities: (1) an auto-acknowledgment SMS fires within 30 seconds of any inbound lead — missed call, text, or manual entry — keeping the job in play; (2) a mobile-first lead queue surfaces all active leads with one-tap call, quote, and schedule actions; and (3) basic win/loss analytics close the feedback loop. The entire product is set up from a phone in under 5 minutes. Pricing is $29/month flat.

**Target users:** 1.875 million solo and micro-crew home service operators in the US (HVAC, plumbing, landscaping, cleaning, electrical, roofing). Primary persona is the overwhelmed solo tech — on a job from 7 AM to 5 PM, losing 2–3 leads per week to whoever calls back faster.

**Market gap:** No tool serves this segment at sub-$60/month with mobile-native setup, trade-specific context, and a single-purpose focus on speed-to-lead. Jobber and Housecall Pro start at $99–$349/month and require hours of desktop setup. Purpose-built speed-to-lead tools (Hatch, LeadTruffle) start at $229–$1,500/month and require sales demos. Generic missed-call text-back tools ($29–$99/month) lack a unified lead queue and follow-through actions.

### What Makes This Special

QuickReply occupies a single uncontested position: the only sub-$30/month, mobile-first, trade-specific, speed-to-lead tool that a solo operator can activate in under 5 minutes from their phone while sitting in their truck at lunch.

The core insight is that the problem is not a motivation or skills gap — it is a timing gap with a structural cause. The product does not attempt to replace a CRM or schedule jobs. It solves one thing: ensuring no lead goes cold before the operator gets a chance to call back.

Unfair advantages: (1) brand built inside r/sweatystartup (1.2M members) where this pain scores 86/100 — the highest validated pain signal in the community; (2) AppSumo LTD creates a self-reinforcing review engine; (3) TCPA compliance designed in from day one using "request confirmation" framing that is unambiguously permissible.

## Project Classification

- **Project Type:** Mobile-first SaaS (React Native mobile app + Node.js API backend)
- **Domain:** Home services B2B — solo/micro-crew operator tooling
- **Complexity:** Medium — TCPA regulatory compliance, Twilio phone number provisioning, inbound call/SMS webhooks, push notifications
- **Project Context:** Greenfield

---

## Success Criteria

### User Success

Operators succeed when they win a job they would otherwise have lost to a faster competitor. The proxy signal for this is an auto-acknowledged lead that converts to a booked job.

- Operator receives their first auto-acknowledged real lead within 5 days of signup
- Operator average lead response time drops from 4.2 hours (industry baseline) to under 30 minutes
- Operator self-reports winning at least one job attributable to QuickReply within the first 30 days
- Operator opens the lead queue at least 5 times per week (daily habit formation)
- Operator completes onboarding (number setup → first auto-text confirmed) in under 5 minutes

### Business Success

- 50 paying subscribers within 60 days of launch (validates community-led acquisition channel)
- 100 paying subscribers within 90 days
- 10+ documented "won job" testimonials with specific dollar figures within 90 days
- AppSumo LTD application submitted with 10+ G2/Capterra reviews at ≥ 4.5 stars
- $10,000+ MRR from recurring subscriptions by Month 6
- Monthly churn rate ≤ 5% after Month 3
- Average CAC ≤ $15 via organic community channels (r/sweatystartup, trade Facebook groups)

### Technical Success

- Auto-acknowledgment SMS delivery within 30 seconds of trigger event for ≥ 99% of lead events
- Mobile app onboarding completion rate ≥ 80% (users who start setup finish it)
- Push notification delivery within 60 seconds of lead creation
- TCPA compliance audit completed with zero violations before first 100 subscribers
- SMS delivery success rate ≥ 98% as measured by Twilio delivery confirmations

### Measurable Outcomes

| Outcome | Target | Measurement Method |
|---------|--------|--------------------|
| Time to first auto-acknowledged lead | ≤ 5 days post-signup | Event: first auto-SMS fired per account |
| Operator response time improvement | < 30 min average (from 4.2 hr baseline) | Timestamp: lead created → first outbound call/action |
| Day-30 retention | ≥ 70% | Active subscription at Day 30 |
| Day-90 retention | ≥ 55% | Active subscription at Day 90 |
| Activation rate | ≥ 60% | % of signups firing ≥ 1 auto-SMS within 7 days |
| Weekly queue opens per user | ≥ 5/week | Mobile app session analytics |
| Win rate self-report lift | ≥ 20% vs pre-signup baseline | Optional in-app "did you book this?" prompt |

---

## Product Scope

### MVP — Minimum Viable Product

The MVP answers one question: does auto-acknowledging leads in real time increase the rate at which solo home service operators win jobs? Everything else is deferred.

**Core user story:** As a solo HVAC operator on a job, when a new lead comes in, I want it acknowledged automatically and surfaced in a simple queue so I can follow up between jobs without losing the opportunity.

**MVP capabilities:**
1. Business phone number setup (new Twilio number or call forwarding from existing number)
2. Instant auto-acknowledge SMS within 30 seconds of missed call, inbound SMS, or manual entry
3. Mobile lead queue — prioritized list with name, time, source, status
4. One-tap actions — Dial Now, Mark Won, Mark Lost, Send Quote Link, Snooze
5. Basic analytics — weekly leads, response time, win rate
6. Weekly email summary (Sunday delivery)

**Lead sources for MVP:**
- Inbound missed calls to business number
- Inbound SMS to business number
- Manual lead entry (paste from email, Angi notification)

**Out of scope for MVP (explicitly deferred):**
- Webhook integrations for Angi, HomeAdvisor, Thumbtack, Google Business Profile
- AI follow-up sequences
- Scheduling / calendar integration
- Jobber / Housecall Pro integration
- Team / multi-user access
- Desktop / web dashboard
- Email lead capture
- White-label / agency features

### Growth Features (Phase 2, Months 6–12)

- Multi-source lead intake: Webhooks for Angi, HomeAdvisor, Thumbtack, Google Business Profile form fills, website contact forms
- AI follow-up sequences: Automated follow-up SMS at 24h and 72h for unreached leads
- Jobber / Housecall Pro integration: One-tap push of won lead into operator's FSM system
- Team plan: Multi-user access for 2–5 person crews with shared lead queue
- Booking link: Customers can self-schedule from the auto-acknowledge text
- iOS and Android widget for lead queue at a glance

### Vision (Phase 3, Year 2+)

- Lightweight scheduling: "what jobs do I have this week?" without full FSM complexity
- Google Calendar integration
- Past-customer SMS marketing with full compliance framework
- International expansion: UK, Canada, Australia (same market dynamics)
- White-label version for marketing agencies serving contractor clients

---

## User Journeys

### Journey 1 — Mike the Solo HVAC Tech (Primary: Happy Path)

Mike, 38, runs a one-person HVAC business in Atlanta grossing $110K/year. He's on jobs from 7 AM to 4:30 PM Monday through Friday. His phone is in his pocket but he can't answer it while inside an attic or on a roof.

**Opening scene:** It's a Tuesday in July — peak season. Mike finishes a repair at 11 AM and checks his phone. Three missed calls since 8 AM. He calls the first number back at 11:15 AM: "Sorry, I already booked someone." Second number: voicemail. Third number: "I'll call you back later." He loses an estimated $900 in jobs he never had a shot at.

**Discovery:** That evening, frustrated, he posts in r/sweatystartup: "Losing jobs every week because I can't answer my phone on the job. What do you guys do?" Three replies mention QuickReply with specific ROI stories.

**Signup:** Mike visits QuickReply, sees $29/month with no annual contract. He watches a 90-second demo showing the auto-text firing from a phone while the operator is visually busy. He signs up.

**Onboarding (under 5 minutes):** On his phone, he follows a 5-step wizard: (1) enters business name "Mike's Heating & Cooling," (2) selects a local Atlanta Twilio number, (3) reviews the default auto-text template ("Hi [Name], got your HVAC request. I'll call you within the hour. — Mike's Heating & Cooling"), (4) selects HVAC as his service type, (5) sends a test lead to himself. The auto-text fires in 18 seconds. He sees it on his own phone. He's immediately confident.

**Rising action:** Thursday morning, a homeowner submits a "my AC stopped working" inquiry via Google Business Profile at 9:17 AM. Mike is inside a crawlspace. At 9:17:23 AM, QuickReply fires: "Hi Sarah, got your AC repair request. I'll call you within the hour. — Mike's Heating & Cooling." Sarah sees the text and relaxes — someone's on it.

**Climax:** At 11:50 AM, Mike checks his lead queue at lunch. He sees Sarah's lead: "New — AC Repair — 2h 33m ago — Google form." One tap: Dial Now. Sarah answers. He books a $380 diagnostic visit for Friday.

**Resolution:** Mike wins the job. He posts: "Been using QuickReply 3 weeks, booked 4 jobs I would've lost before. $29/month. No-brainer." This post generates 22 signups.

**Journey requirements revealed:** Business number setup, auto-SMS within 30 seconds, mobile lead queue with time-since-contact, one-tap dial, lead source attribution, push notification on new lead.

---

### Journey 2 — Mike the Solo HVAC Tech (Edge Case: Setup Friction)

Same persona — Mike tries to set up QuickReply but encounters confusion during number forwarding.

**Opening scene:** Mike's existing business number is with AT&T. The QuickReply onboarding suggests he forward calls from his AT&T number to the new QuickReply business number. He doesn't know how to set up call forwarding on AT&T.

**Rising action:** He taps the "I need help with this" link in the onboarding wizard. QuickReply shows him the exact AT&T USSD code to type (*21* followed by the QuickReply number and #) with a short video GIF. He types it in, sees the forwarding confirmation on screen.

**Resolution:** He sends himself a test missed call. The forwarding works. He sees the auto-text fire on his personal phone. He continues onboarding.

**If friction persists:** He uses the in-app chat (available during onboarding week) to get 1:1 help from a QuickReply setup guide.

**Journey requirements revealed:** Step-by-step carrier forwarding instructions by carrier, test mode to verify forwarding is active, onboarding help/support access, completion checklist with green checkmarks per step.

---

### Journey 3 — Carlos the Landscaping Crew Lead (2–4 Crew, Volume Management)

Carlos, 42, runs a 3-person landscaping crew in Phoenix. Peak season (March–October) they're on-site 6 AM to 3 PM. Lead volume peaks exactly when he's least able to respond.

**Opening scene:** It's peak spring. Carlos finishes a job at 2:45 PM and checks his phone: 7 missed calls, 3 Google Business Profile messages, 2 texts from unknown numbers. He has no idea which are new clients, which are existing clients, which called yesterday. He spends 25 minutes sorting through them, calls back 4 — three already booked competitors.

**Discovery:** A friend in his Facebook landscaping group says "I use QuickReply — every lead gets a text in 30 seconds and I can see them in a list."

**Key interaction — Lead Queue:** Carlos's primary need differs from Mike's. He needs the queue view at 2:45 PM to know at a glance: "I have 7 new leads from today. Let me work through them in order before I go home." He sorts by "New" status, calls three in his truck before leaving the site. Converts two.

**Snooze action:** The other four leads he snoozes to "Tomorrow 8 AM" — they reappear in his queue at 8 AM the next morning with a push notification.

**Journey requirements revealed:** Multi-lead queue management, status filtering (New / In Progress / Snoozed / Won / Lost), snooze with wake-at options, daily push notification for snoozed lead reminders.

---

### Journey 4 — Diane the Cleaning Service Owner (Low-Volume, High-Value New Clients)

Diane, 34, runs a 2-person residential cleaning service in Chicago with 40 recurring clients. She and her partner clean all day. She gets 4–8 new client inquiries per week via her website and Google.

**Opening scene:** Diane realizes she hasn't followed up on 12 contact form submissions from the last 3 weeks. She lost those potential clients — each worth $180/month recurring.

**Key interaction — Manual Entry:** Diane's incoming leads often come through her website (not phone calls). She exports a name and number from her Squarespace contact form and pastes it into QuickReply's "Add Lead" field. QuickReply fires an auto-acknowledgment and adds the lead to her queue. She reviews leads during the drive between clients.

**Success state:** Diane converts 6 of her next 10 new inquiries. She attributes this to responding within the hour instead of 3 days later.

**Journey requirements revealed:** Manual lead entry (paste name and phone), auto-acknowledgment triggered on manual entry, lead queue usable during short phone breaks (2–3 minutes between jobs).

---

### Journey 5 — Admin / Account Configuration (Ongoing Maintenance)

Mike has been using QuickReply for 2 months. He wants to update his auto-text message to mention his new $49 diagnostic special.

**Key interaction — Message Template Edit:** He opens Settings → Auto-Message. He edits the template: "Hi [Name], got your HVAC request. I'm running a $49 diagnostic special this week. I'll call you shortly. — Mike's Heating & Cooling." He saves. He sends a test lead to confirm the new message fires correctly.

**Additional maintenance scenarios:**
- Mike temporarily pauses QuickReply during his vacation week (leads should not fire auto-texts when he's unavailable)
- Mike wants to see his best performing week (analytics drill-down)
- Mike adds a second phone number for a referral-only line

**Journey requirements revealed:** Message template editing with test-fire confirmation, lead auto-acknowledgment pause mode (vacation/unavailable), analytics with weekly drill-down, multi-number support (Phase 2).

---

### Journey Requirements Summary

| Capability Area | Revealed By Journey |
|----------------|---------------------|
| Business phone number provisioning and forwarding setup | J1, J2 |
| Carrier-specific forwarding instructions with test confirmation | J2 |
| Auto-SMS ≤ 30 seconds, all trigger types | J1, J3, J4 |
| Mobile lead queue with time-since-contact and status | J1, J3 |
| Push notifications on new leads | J1, J3 |
| One-tap Dial Now action | J1 |
| Snooze with wake-at options | J3 |
| Manual lead entry with auto-acknowledgment | J4 |
| Status filtering (New / In Progress / Snoozed / Won / Lost) | J3 |
| Message template editing with test-fire | J5 |
| Pause mode (stop auto-texts during vacation) | J5 |
| Basic weekly analytics | J1, J5 |
| Onboarding completion checklist | J2 |

---

## Domain-Specific Requirements

### Compliance & Regulatory — TCPA (Telephone Consumer Protection Act)

QuickReply auto-sends SMS messages to homeowners who did not explicitly opt in to marketing messages. TCPA compliance is non-negotiable from day one — violations carry $500–$1,500 per message in civil penalties.

**Compliant framing strategy:** All auto-acknowledgment messages are framed as "confirmation of a service request" — a business-to-customer transactional message in direct response to the homeowner's inquiry. This framing is unambiguously permissible under TCPA as it constitutes an "informational communication directly related to a request the recipient initiated."

**Required compliance behaviors:**
- Every auto-acknowledgment must include a brief opt-out instruction ("Reply STOP to stop messages")
- The system must immediately add opted-out numbers to a suppression list
- Opted-out numbers must never receive further automated messages
- Message content must not contain promotional offers, upsells, or marketing language (reserved for Phase 2 with full opt-in consent framework)
- All messages must be sent from the operator's provisioned Twilio business number (not a shared shortcode) to maintain 1:1 sender identity
- Message templates must not be editable in ways that introduce prohibited language (template validation required)

**Pre-launch requirement:** TCPA legal review of message templates and opt-out flow completed by qualified telecommunications attorney before first 100 subscribers.

### Technical Constraints — SMS Infrastructure

- All SMS delivery via Twilio Programmable Messaging (industry standard, audit-ready delivery logs)
- Twilio webhook signatures must be validated on every inbound webhook to prevent spoofed lead injection
- Delivery status callbacks must be logged for every sent message (delivered / failed / undelivered)
- Failed SMS delivery (carrier rejection) must trigger in-app notification to operator within 5 minutes
- Phone number provisioning must verify number availability before completing operator onboarding

---

## SaaS Mobile-First Specific Requirements

### Mobile Platform Requirements

- iOS support: iOS 15+ (covers 97%+ of active iPhones as of 2026)
- Android support: Android 10+ (API level 29+)
- App must function on 4G/LTE connections without Wi-Fi dependency
- Core lead queue and one-tap actions must complete all interactions in ≤ 3 taps from launch
- Lead queue must be accessible from push notification without navigating menus
- Offline state: app displays last-cached lead queue with "offline" indicator; actions queue locally and sync on reconnect

### Push Notifications

- Operators must grant push notification permission during onboarding (required for core value delivery)
- New lead push notification fires within 60 seconds of lead creation
- Notification payload includes: lead name/number, service type, lead source
- Tapping notification opens lead card directly (deep link)
- Operators can configure notification quiet hours (e.g., 10 PM – 7 AM) without disabling the auto-SMS function

### Onboarding Flow Requirements

- Onboarding must complete in under 5 minutes on a mobile device without a desktop
- Step count: maximum 6 steps before operator can receive first auto-acknowledged lead
- Each step includes a progress indicator and a "get help" escape hatch
- Carrier-specific call forwarding instructions shown dynamically based on detected carrier (AT&T, Verizon, T-Mobile, Google Voice)
- Test lead functionality: operator can fire a test lead to their own number to verify the system is working before going live
- Onboarding completion unlocks the lead queue and analytics dashboard

### Authentication & Account Management

- Email and password authentication with email verification
- Optional SMS-based two-factor authentication
- Password reset via email link
- Account supports one business number at MVP (multi-number in Phase 2)
- Operators can pause auto-acknowledgment from the account settings (vacation mode)

---

## Project Scoping & Phased Development

### MVP Strategy & Philosophy

**MVP Approach:** Problem-solving MVP — minimum functionality required to prove the core hypothesis that auto-acknowledging leads in real time results in jobs won that would otherwise be lost.

**Resource requirements:** 1 full-stack developer + 1 designer, 4–6 week build. Tech stack: React Native (mobile), Node.js/Express (API), PostgreSQL (database), Twilio (SMS/phone), Firebase (push notifications).

**MVP success gate (go/no-go for Phase 2 investment):**
- Day-30 retention ≥ 70% after 3 months of data
- 10+ documented "won job" user stories
- Activation rate ≥ 60% (users who fire ≥ 1 auto-SMS within 7 days)

### MVP Feature Set (Phase 1)

**Core user journeys supported:**
- Solo operator onboards in under 5 minutes → receives first auto-acknowledged lead → responds via one-tap action → wins job

**Must-have capabilities:**
1. Business phone number provisioning (new Twilio number)
2. Call forwarding setup with carrier-specific instructions and test confirmation
3. Inbound missed-call trigger → auto-SMS within 30 seconds
4. Inbound SMS trigger → auto-SMS within 30 seconds
5. Manual lead entry → auto-SMS within 30 seconds
6. Mobile lead queue (prioritized, newest first)
7. One-tap Dial Now from lead card
8. One-tap Mark Won / Mark Lost
9. One-tap Send Quote Link (custom URL)
10. Snooze lead (2h, 4h, tomorrow morning)
11. Push notification on new lead
12. Basic weekly analytics (leads, response time, win rate)
13. Weekly email summary
14. Message template customization (within TCPA-compliant constraints)
15. Vacation/pause mode
16. TCPA-compliant opt-out handling (STOP keyword suppression)

### Post-MVP Features

**Phase 2 (Months 6–12):**
- Webhook integrations for Angi, HomeAdvisor, Thumbtack, Google Business Profile
- AI follow-up SMS sequences (24h and 72h auto-follow-up for unreached leads)
- Jobber / Housecall Pro integration (one-tap push of won lead)
- Team plan (2–5 user shared queue with dispatcher view)
- Self-scheduling booking link for customers
- Multi-number support per account

**Phase 3 (Year 2+):**
- Lightweight scheduling ("jobs this week" view)
- Google Calendar sync
- Past-customer SMS marketing with full opt-in consent framework
- International (UK, Canada, Australia)
- Agency white-label

### Risk Mitigation Strategy

**Technical risks:**
- *Twilio phone number availability in operator's area code* — Mitigate: provision numbers from a pool with fallback to adjacent area codes; allow operators to specify preferred area code
- *TCPA compliance edge cases* — Mitigate: legal review pre-launch; conservative template constraints in MVP; operator-customizable fields limited to non-promotional content

**Market risks:**
- *Jobber adds free auto-reply to entry tier* — Mitigate: establish community brand and operator habits before competitive response; offer Jobber integration as additive positioning
- *Low activation if operators struggle with call forwarding* — Mitigate: carrier-specific instructions, 1:1 onboarding support for first 50 beta users, hosted number as default option

**Resource risks:**
- *Twilio cost escalation with high SMS volume* — Mitigate: Twilio carrier surcharge pass-through in pricing model; 200 SMS/month included in $29 plan with per-message overage

---

## Functional Requirements

### Account & Onboarding

- **FR1:** Operators can create an account using an email address and password from a mobile device
- **FR2:** Operators can provision a new local business phone number during onboarding with preferred area code selection
- **FR3:** Operators can configure their business name, service type(s), and auto-acknowledgment message template during onboarding
- **FR4:** Operators can view step-by-step call forwarding instructions specific to their detected mobile carrier (AT&T, Verizon, T-Mobile, Google Voice, other)
- **FR5:** Operators can fire a test lead to their own phone number to verify auto-acknowledgment is working before going live
- **FR6:** Operators can view an onboarding completion checklist showing the status of each setup step
- **FR7:** Operators can reset their password via email verification link
- **FR8:** Operators can pause all auto-acknowledgment messages (vacation mode) and resume without losing lead history

### Lead Intake & Acknowledgment

- **FR9:** The system sends an auto-acknowledgment SMS to the lead's phone number within 30 seconds of a missed inbound call to the operator's business number
- **FR10:** The system sends an auto-acknowledgment SMS to the lead's phone number within 30 seconds of an inbound SMS to the operator's business number
- **FR11:** The system creates a lead record and sends an auto-acknowledgment SMS within 30 seconds when an operator manually enters a lead's contact details
- **FR12:** All auto-acknowledgment messages include the operator's business name, a customizable acknowledgment phrase, and TCPA-required opt-out instruction
- **FR13:** The system suppresses all automated messages to phone numbers that have replied STOP or any TCPA opt-out keyword
- **FR14:** The system records the lead source (missed call, inbound SMS, manual entry) for every lead created
- **FR15:** The system logs the delivery status (delivered, failed, undelivered) of every auto-acknowledgment SMS sent

### Lead Queue Management

- **FR16:** Operators can view all active leads in a prioritized mobile queue sorted by time since last contact, newest first
- **FR17:** Each lead card in the queue displays: customer name or phone number, service type (if captured), time since first contact, lead source, and current status
- **FR18:** Operators receive a push notification within 60 seconds of a new lead entering their queue
- **FR19:** Operators can filter the lead queue by status: All, New, In Progress, Snoozed, Won, Lost
- **FR20:** Operators can view the full interaction history for each lead, including timestamps of auto-acknowledgments sent, calls initiated, and status changes
- **FR21:** The system automatically moves leads to "Archived" status after 30 days with no activity

### Lead Actions & Follow-Through

- **FR22:** Operators can initiate a direct call to a lead's phone number from the lead card with a single tap
- **FR23:** After a call ends, the system prompts the operator to record the call outcome (booked / not booked / no answer / left voicemail)
- **FR24:** Operators can mark a lead as Won or Lost from the lead card with a single tap
- **FR25:** Operators can send a predefined quote link URL to a lead via SMS from the lead card with a single tap
- **FR26:** Operators can snooze a lead for a selected duration (2 hours, 4 hours, or next morning at 8 AM) from the lead card with a single tap
- **FR27:** Snoozed leads return to the "New" queue position with a push notification at the selected wake time
- **FR28:** Operators can change the status of any lead between New, In Progress, Won, and Lost

### Analytics & Reporting

- **FR29:** Operators can view a weekly summary showing: total leads received, leads auto-acknowledged, leads won, leads lost, and win rate percentage
- **FR30:** Operators can view their average lead response time (lead created → first operator call or action) for the current and previous week
- **FR31:** The system sends a weekly email summary to the operator every Sunday evening containing the previous week's lead metrics
- **FR32:** Operators can view running all-time totals for leads received, acknowledged, and won

### Message Template Management

- **FR33:** Operators can edit the auto-acknowledgment message template text within a constrained editable zone that preserves TCPA-required elements
- **FR34:** Operators can preview the rendered auto-acknowledgment message (with sample variable substitution) before saving template changes
- **FR35:** The system validates that saved message templates contain the required opt-out language before activation

---

## Non-Functional Requirements

### Performance

- Auto-acknowledgment SMS fires within 30 seconds of trigger event (missed call webhook, inbound SMS webhook, or manual entry submission) for ≥ 99% of events, measured from webhook receipt to Twilio send confirmation
- Mobile lead queue renders with current data within 2 seconds on a 4G/LTE connection at 95th percentile, measured by app analytics
- Push notifications delivered within 60 seconds of lead creation for ≥ 95% of notifications, measured by FCM/APNs delivery receipts
- Lead card actions (Dial Now, Mark Won, Snooze) complete in ≤ 1 second from tap to UI confirmation at 95th percentile

### Security

- All customer PII (names, phone numbers) encrypted at rest using AES-256
- All data in transit encrypted via TLS 1.2 minimum
- Twilio webhook signatures validated on every inbound webhook request to prevent spoofed lead injection
- Authentication tokens expire after 30 days of inactivity; re-authentication required
- Operators can only access lead data associated with their own account — no cross-account data access possible
- Twilio API credentials stored in environment secrets, never in application code or client-side bundles

### Scalability

- API backend supports 1,000 concurrent active operators without response time degradation beyond 10% of baseline
- SMS ingestion pipeline processes 500 concurrent inbound webhook events without queue delay exceeding 5 seconds
- Each operator account supports up to 500 active (non-archived) leads without UI or query performance degradation
- System architecture supports horizontal scaling of the SMS processing pipeline to 10x initial capacity without code changes

### Reliability

- Auto-acknowledgment SMS pipeline maintains 99.5% uptime measured monthly (≤ 3.6 hours downtime/month)
- Mobile app API backend maintains 99.9% uptime measured monthly (≤ 43 minutes downtime/month)
- SMS delivery success rate ≥ 98% as measured by Twilio delivery confirmation callbacks
- Failed SMS delivery (carrier rejection or Twilio error) triggers an in-app operator notification within 5 minutes so the operator can follow up manually
- All lead data persisted durably; no lead records lost due to system failure

### Integration

- Twilio Programmable Messaging used for all outbound SMS and phone number management; no alternative SMS providers in MVP
- Push notifications delivered via Firebase Cloud Messaging (FCM) for Android and Apple Push Notification Service (APNs) for iOS
- Webhook endpoint accepts standard HTTP POST with JSON payload for future lead source integrations (Angi, website contact forms)
- Webhook endpoint returns HTTP 200 within 5 seconds to prevent Twilio timeout and retry storms

---

*PRD completed: 2026-10-21 | Input: shortlisted idea (89/105), market research, product brief | Ready for Architecture phase*
