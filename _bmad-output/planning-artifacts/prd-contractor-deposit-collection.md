---
stepsCompleted: [step-01-init, step-02-discovery, step-02b-vision, step-02c-executive-summary, step-03-success, step-04-journeys, step-05-domain, step-06-innovation, step-07-project-type, step-08-scoping, step-09-functional, step-10-nonfunctional, step-11-polish, step-12-complete]
inputDocuments:
  - ideas/shortlisted/contractor-deposit-collection.md
  - _bmad-output/planning-artifacts/research/market-contractor-deposit-collection-research-2026-10-15.md
  - _bmad-output/planning-artifacts/product-brief-contractor-deposit-collection.md
workflowType: 'prd'
classification:
  projectType: saas_b2b
  domain: fintech_payments
  complexity: medium
  projectContext: greenfield
lastStep: 12
project_name: 'contractor-deposit-collection'
date: '2026-10-16'
author: 'Root'
---

# Product Requirements Document — Contractor Deposit Collection

**Author:** Root
**Date:** 2026-10-16
**Status:** Ready for Architecture

---

## Executive Summary

Solo and small-team contractors across the trades — HVAC, plumbing, electrical, cleaning, landscaping — lose $14,250–$30,000 per year to customer no-shows. The root cause is structural: without a deposit, customers carry zero cost for same-day cancellation or ghosting. The contractor bears 100% of the loss — wasted travel, a blocked schedule slot, and opportunity cost ranging from $300 to $1,200 per day.

**Contractor Deposit Collection** is a standalone, SMS-first web application that eliminates no-shows by automating the deposit workflow entirely. The contractor connects their Stripe account once, creates a job in under 30 seconds, and the system handles the rest: an immediate deposit request SMS to the customer, a 24-hour auto-reminder if unpaid, and a 4-hour contractor alert if the deposit still hasn't arrived. When the customer pays, both parties receive confirmation automatically. No manual follow-up. No FSM overhead. No $70/month platform subscription for one feature.

**Validated demand:** HandyPay reached $1K MRR in under 60 days in the adjacent spa/salon market using the identical model (SMS deposit + in-person onboarding). No dedicated contractor deposit collection tool exists at any price point. Jobber and Housecall Pro both offer deposit features but neither executes the automated SMS sequence that actually prevents no-shows.

**Business model:** $149 LTD (AppSumo launch) + $39/month subscription. One recovered $500 no-show covers the LTD indefinitely. Target: 500 LTD buyers ($74,500 upfront) → 500 MRR subscribers within 12 months ($19,500/month).

### What Makes This Special

**The automated SMS sequence is the product.** Every competitor either (a) requires manual deposit requests inside a larger FSM platform or (b) has no reminder chain at all. This is the only tool that executes the full three-step chain — request → 24hr reminder → contractor alert — without any manual intervention after job creation.

Five differentiators compound to create a durable position:

1. **Automated three-step SMS chain** — the only product that fires request → 24hr reminder → 4hr contractor alert without human intervention
2. **Standalone, not bundled** — $39/month for one workflow vs. $69–$329/month for a full FSM platform the contractor doesn't need
3. **SMS-first** — homeowners and contractors communicate by text; email-based deposit flows get ignored
4. **Trades-specific positioning** — copy, onboarding, and pricing are built for HVAC, plumbing, electrical, cleaning, landscaping
5. **ROI narrative is instant** — one recovered $500 no-show covers the LTD indefinitely; contractors calculate this in 10 seconds

**Core insight:** The existing FSM tools that offer deposit collection are designed for workflow managers, not for the burned contractor in a truck. The deposit is buried 4–6 steps inside a larger job management flow and relies on the contractor remembering to do it. This product makes the deposit request the first thing that happens after a job is booked — frictionless by design.

## Project Classification

- **Project Type:** SaaS B2B web application (SMB/solo-operator segment)
- **Domain:** Fintech/payments adjacent; field service management niche
- **Complexity:** Medium — Stripe Connect integration, Twilio SMS automation, scheduled job queues, webhook event handling
- **Project Context:** Greenfield — no existing codebase

---

## Success Criteria

### User Success

The product succeeds at the user level when contractors stop losing money to no-shows because of it:

- **No-show rate drops below 5%** for users who send deposits via the tool (industry baseline: 12–22%)
- **Contractor creates their first deposit request within 30 minutes** of signing up — if they don't send one within 7 days, the product has failed at onboarding
- **75%+ of deposit requests result in payment before the job date** — establishes that SMS-first delivery outperforms email-based competitors
- **Contractor doesn't manually think about deposits** — the aha moment is realizing the 24-hour reminder fired while they were on another job, and payment arrived without any follow-up action

Success at the emotional level: contractors report feeling less anxious about booked slots because they know the deposit is either paid or they'll be warned before wasting a trip.

### Business Success

| Milestone | Target | Timeframe |
|-----------|--------|-----------|
| AppSumo LTD buyers | 300–500 | Launch month |
| LTD revenue | $29,700–$74,500 | Launch month |
| Time to first deposit SMS (new user) | < 30 minutes | Ongoing |
| Monthly active users (deposit sent past 30 days) | ≥ 70% of subscribers | Month 3 |
| MRR subscribers | 100 | Month 6 |
| MRR subscribers | 500 | Month 12 |
| G2/Capterra average rating | ≥ 4.5/5 | Month 6 |
| Monthly churn (subscribers) | < 5%/month | Ongoing |

The business is validated when 100 AppSumo buyers have each used the tool for at least 30 days and NPS ≥ 40.

**Leading indicators to watch (not lagging):**
- % of signups who connect Stripe within 24 hours
- % of Stripe-connected users who create their first job within 48 hours

If either falls below 50%, fix onboarding before scaling acquisition.

### Technical Success

- ≥ 95% of scheduled reminder and alert SMSs fire within ±5 minutes of target time over a 30-day window
- Deposit confirmation webhook fires within 60 seconds of Stripe payment received
- Zero missed contractor alerts when deposit is unpaid at the 4-hour window
- Stripe Connect onboarding completable in < 5 minutes on a mobile device
- Dashboard loads in < 2 seconds on iOS Safari and Android Chrome

### Measurable Outcomes

| Outcome | Measurement | Success Threshold |
|---------|-------------|-------------------|
| No-show prevention | Self-reported at 30- and 90-day survey | < 5% no-show rate for tool users |
| Onboarding funnel | Signup → Stripe connect → first job → first SMS | 60%+ complete within 7 days |
| Deposit payment rate | Stripe webhook (request → payment timestamp) | ≥ 75% paid within 24 hours |
| Second deposit request | % of active users who send 2nd request within 30 days | ≥ 50% — if below this, investigate retention |
| NPS at 30 days | Survey sent to first 50 users | ≥ 40 |

---

## Product Scope

### MVP — Minimum Viable Product

**Philosophy:** Problem-solving MVP. The product must demonstrate that automated SMS deposit collection prevents no-shows. Every feature either directly prevents a no-show or enables the contractor to manage the workflow with zero manual follow-up.

**Supported core journeys (MVP):**
- Contractor onboards with Stripe Connect
- Contractor creates a job and fires deposit SMS in < 30 seconds
- Customer receives SMS and pays via Stripe link
- System auto-reminds at 24 hours if unpaid
- System alerts contractor at 4 hours if still unpaid
- Contractor views all job deposit statuses on dashboard

**Must-have MVP capabilities:**
1. Stripe Connect OAuth onboarding
2. Job creation form (name, phone, date/time, deposit amount)
3. Immediate deposit request SMS via Twilio
4. 24-hour auto-reminder SMS (conditional on unpaid status)
5. 4-hour contractor alert SMS (conditional on unpaid status)
6. Stripe webhook listener → deposit paid confirmation
7. Dual confirmation SMS (contractor + customer) on payment
8. Job dashboard: upcoming jobs, deposit status, quick-resend action

### Growth Features (Post-MVP)

Phase 2 targets (months 4–8 post-launch):
- **Jobber webhook integration** — job booked in Jobber auto-fires deposit SMS; status synced back to Jobber
- **Housecall Pro webhook integration** — same
- **State deposit cap calculator** — detects contractor's state, surfaces applicable cap (CA: 10% or $1,000; NV similar) with UI warning
- **Configurable auto-cancel workflow** — contractor sets cutoff hours; auto-cancel SMS sent to customer if deposit unpaid by deadline
- **Basic analytics dashboard** — monthly deposit recovery rate, estimated no-show prevention savings
- **Reminder timing configuration** — contractor can adjust 24hr/4hr defaults

### Vision (Future)

Phase 3 targets (12+ months):
- **White-label** for franchise networks and larger contractor organizations
- **Adjacent market expansion** — spas, salons, personal trainers (HandyPay's validated market)
- **Zapier/Make.com connector** — connects to any CRM/scheduling tool without native integration
- **Milestone payments** — multi-stage payment collection (deposit → progress → completion)
- **Customer rebooking automation** — if contractor cancels, system offers next available slot
- **Stripe Capital integration** — working capital advances for high-volume contractors
- **Review automation** — post-job SMS requesting Google/Yelp review from confirmed customers

---

## User Journeys

### Journey 1: Marcus — The Burned Solo HVAC Contractor (Primary Success Path)

Marcus runs a one-man HVAC operation in suburban Atlanta. He's had three no-shows last month, including a $1,400 boiler replacement where he drove 40 minutes, waited 30 minutes, and drove back. He pays $29/month for Jobber Lite but the deposit feature is on a higher tier.

**Discovery:** Marcus posts in r/sweatystartup: "Three no-shows this month, one was $1,400. Anyone use a deposit app?" A community member replies with a link. Marcus clicks it at 7pm, reading from his couch.

**Landing:** Headline — "Stop showing up to empty driveways." He reads the copy in 60 seconds. One recovered no-show covers the cost forever. He signs up.

**Onboarding:** He creates an account with email, lands on the Stripe Connect screen. He taps "Connect Stripe" — he already has a Stripe account from sending manual links. OAuth completes in 90 seconds. He's on the job creation form.

**First job:** He types "Janet Smith," her mobile number, tomorrow's date at 10am, and $200 deposit. He hits send. His phone buzzes 20 seconds later — a preview of the SMS that Janet received. He grins.

**The aha moment:** The next morning, Marcus is on a service call. He gets a "✅ Janet Smith paid $200" SMS. He didn't have to remember anything. He didn't have to set a calendar reminder. The money is already in his Stripe account.

**Sustained use:** Marcus creates a job after every booking. His no-show rate drops from 18% to 2% within 60 days. He tells two other HVAC contractors at a supply house. He posts: "This saved me from a $900 no-show last week. Best $149 I've spent this year."

**Journey Requirements:** Job creation, immediate SMS, paid confirmation, dashboard, mobile-first UX.

---

### Journey 2: Diane — The Systematic Plumbing Owner-Operator (Power User)

Diane runs a 3-person plumbing business in Denver. She already collects deposits manually by texting Stripe links. Her process works, but she manages 12–15 active jobs at a time. She manually sets calendar reminders for each job to follow up 24 hours before — consuming 30–45 minutes per week.

**Discovery:** Diane sees the AppSumo listing while browsing her afternoon deals. "$149 one-time" catches her eye. She reads the feature list and immediately understands the value: automated reminders replace her manual alarm system.

**Onboarding:** Diane is a faster, more deliberate onboarder. She reads the Stripe Connect explanation, connects her existing account, and immediately creates three jobs in a row — her active backlog. She configures each with exact deposit amounts from her mental model.

**Core usage:** Diane checks the dashboard most mornings — a 15-second scan showing which jobs are paid and which aren't. She uses "resend deposit link" once when a customer's phone number was slightly wrong. She no longer sets manual alarms.

**The aha moment:** Diane realizes after two weeks that she hasn't thought about deposit follow-ups at all. The system fired automatically. Three reminders went out and two resulted in same-day payment. One customer called to cancel before the reminder even fired — the deposit had changed his thinking about canceling.

**Retention driver:** Diane is a permanent user because the ROI is continuous. She has 12–15 active jobs always; 12–15 Stripe payment links always being tracked automatically.

**Journey Requirements:** Bulk job creation efficiency, dashboard with deposit status at a glance, resend capability, pagination for large job counts.

---

### Journey 3: Jake — The Jobber User Who Wants Integration (v2 Target)

Jake runs a 6-person electrical contracting team in Dallas on Jobber Connect ($69/month). He has access to Jobber's deposit feature but finds it clunky — 4–6 steps to generate and send a deposit request, and it goes by email (which customers don't check).

**Discovery:** Jake is Googling "Jobber deposit SMS automation" after submitting a feature request to Jobber that went unanswered for 8 months. He finds the product in a Reddit thread.

**v1 friction:** Jake tries the tool in v1. He has to manually re-enter job details he's already entered in Jobber. He uses it for a week, sends 8 deposits, and 6 get paid. He's satisfied but the double-entry friction is real.

**v2 decision:** When Jobber webhook integration ships, Jake's calculus changes immediately. Job booked in Jobber → deposit SMS fires in 30 seconds → zero double-entry. Jake upgrades to the $39/month plan because the time savings justify it easily.

**Journey Requirements (v2):** OAuth app registration with Jobber, webhook receiver, automatic job creation on Jobber webhook event, status sync back to Jobber job record.

---

### Journey 4: The Customer Homeowner (End Recipient)

Sarah books Marcus for an HVAC tune-up for Tuesday at 2pm. She booked over the phone.

**Receives SMS:** "Hi Sarah, Atlanta HVAC Services has you confirmed for Tuesday, Oct 21 at 2:00 PM. Please pay your $75 deposit to hold your spot: [Stripe link]. Reply STOP to opt out."

**Trust check:** Sarah sees the Stripe link (familiar, trusted). The message names the company she just called. It looks professional, not phishing. She taps the link.

**Payment:** Stripe's hosted payment page loads. She enters her card in under 30 seconds. She sees "Payment confirmed."

**Confirmation SMS:** "Payment received! You're confirmed with Atlanta HVAC Services for Tuesday, Oct 21 at 2:00 PM. See you then! 🏠"

**Day before:** She receives nothing (reminder doesn't fire since she already paid). Tuesday arrives; she's home because she paid — she has skin in the game.

**Journey Requirements:** SMS must read as professional and company-attributed; Stripe hosted page must work on mobile; confirmation must feel reassuring; opt-out compliance required.

---

### Journey Requirements Summary

| Requirement | Source Journey |
|------------|----------------|
| Sub-30-second job creation form | Marcus, Diane |
| Immediate SMS delivery (< 30 seconds post-submit) | Marcus |
| Automated 24hr reminder (conditional on unpaid) | Diane, Customer |
| 4hr contractor alert (conditional on unpaid) | Marcus |
| Dual confirmation SMS (contractor + customer) | Marcus, Customer |
| Mobile-responsive dashboard with deposit status | Marcus, Diane |
| Resend deposit link action | Diane |
| Professional, company-attributed SMS copy | Customer |
| Stripe hosted payment page (no custom checkout) | Customer |
| SMS opt-out / STOP compliance | Customer |
| Jobber webhook receiver (v2) | Jake |
| Stripe Connect OAuth onboarding | Marcus, Diane |

---

## Domain-Specific Requirements

### Payments Compliance (Stripe Connect)

The product processes real money between contractors and their customers via Stripe Connect. This creates specific compliance obligations:

- **Stripe Connect platform agreement** — the product operator is a Stripe Connect platform; must agree to Stripe's platform terms and anti-money-laundering policies
- **Contractor KYC via Stripe** — Stripe handles identity verification for connected accounts; the product does not collect or store payment card data at any point
- **PCI DSS scope reduction** — by using Stripe-hosted payment pages and Stripe Connect, the product achieves PCI SAQ-A compliance (lowest scope); no card data ever touches the product's servers
- **Deposit ownership** — funds land directly in the contractor's connected Stripe account; the product never holds funds in transit (no escrow, no marketplace model)
- **Stripe Connect fees** — platform (product) may take an application fee on each transaction; must be disclosed to contractors in pricing and terms

### SMS / Telecommunications Compliance

Twilio 10DLC registration requirements for sending SMS in the United States:

- **10DLC registration** — the product must register as a business with The Campaign Registry (TCR) before sending A2P (Application-to-Person) SMS; unregistered numbers face filtering and fines
- **Campaign type:** "Customer care" or "appointment reminder" — standard campaign use case
- **Opt-out compliance** — all outgoing SMS must include opt-out language or STOP instructions; system must honor STOP replies and cease sending to that number immediately
- **Message content** — SMS content must not contain prohibited content (adult material, hate speech, illegal promotions); must disclose the business name
- **Customer consent** — contractors represent they have permission to contact their customers; terms of service must include this representation; product should display this requirement during onboarding

### State Deposit Law Awareness

Some US states cap contractor deposits by law:

- **California:** Contractor deposit capped at 10% of total job cost OR $1,000, whichever is less (Business and Professions Code §7159)
- **Nevada:** Similar caps exist for contractor deposits
- **Maryland:** Deposits must be held in separate trust account for jobs over certain thresholds

**MVP handling:** Include a ToS disclaimer that contractors are responsible for compliance with their state's deposit laws. Display informational text on the job creation form: "Check your state's deposit requirements before charging."

**v2 handling:** Detect contractor's state from Stripe Connected account address; surface applicable cap as a UI warning if deposit amount exceeds the cap.

### Technical Constraints

- All Stripe API calls must use HTTPS with TLS 1.2+
- Webhook endpoints must verify Stripe webhook signatures before processing
- Twilio webhook callbacks must verify Twilio signature headers
- No storage of payment card data, CVV, or full card numbers at any point
- Contractor phone numbers and customer phone numbers stored in database must be treated as PII; deletable on request

---

## SaaS B2B Specific Requirements

### Project Type Overview

This is a single-workflow SaaS tool targeting SMB/solo-operator contractors. The B2B dynamics are:
- **Buyer = user** (the contractor signs up and uses the product themselves)
- **Single-seat** in MVP — no team management, no multi-user accounts
- **Per-seat pricing** in v1 (one subscription per contractor business)
- **Tenant isolation** via contractor account — each contractor's jobs, customers, and Stripe account are fully isolated

### Authentication Model

- Email + password authentication for MVP (no OAuth required in v1 — contractor's Stripe account is the identity anchor)
- Email verification on signup
- Password reset via email link
- Session management: persistent sessions (contractors work from phones; don't want to re-login constantly)
- Optional: magic link login in v2 for mobile-first UX

### Multi-Tenancy

Simple tenant isolation: each contractor account is a separate entity in the database. No shared data between contractors. No org/team hierarchy in MVP.

- Contractor record: id, email, business name, mobile phone (for alerts), Stripe Connect account ID, subscription status
- Jobs belong to a contractor; customers belong to jobs (no shared customer database)

### Subscription & Billing

- Stripe Billing for subscription management (ironic but appropriate: use Stripe for both the contractor-facing payments and the platform's own billing)
- Plans: $39/month (post-LTD) and $149 LTD (implemented as a one-time charge + lifetime subscription record)
- LTD enforcement: create a "lifetime" subscription tier in Stripe with $0/month recurring; flag in database
- Dunning: Stripe's automatic retry logic handles failed payments; contractor loses access after 3 failed attempts (grace period: 7 days)
- Trial: 14-day free trial to encourage onboarding; no credit card required for trial

### Integrations Required (MVP)

| Integration | Purpose | MVP/v2 |
|------------|---------|--------|
| Stripe Connect | Contractor account linking; deposit payment links; webhook for payment events | MVP |
| Twilio | Outbound SMS (deposit request, reminder, alert, confirmation) | MVP |
| Stripe Billing | Platform subscription management | MVP |

### Integrations Required (v2)

| Integration | Purpose |
|------------|---------|
| Jobber API/webhooks | Auto-fire deposit on job creation in Jobber |
| Housecall Pro webhooks | Same for HCP users |
| Zapier/Make.com | Generic connector for any scheduling tool |

---

## Project Scoping & Phased Development

### MVP Strategy & Philosophy

**MVP Approach:** Problem-solving MVP — prove the product prevents no-shows before adding any workflow enhancement. The goal is: contractor creates job → deposit arrives before job day → contractor validates the ROI proposition in their own business.

**Resource Requirements:** 1 full-stack developer + Stripe/Twilio accounts; ~4–6 weeks build time for MVP (based on comparable simple SaaS: Stripe Connect + Twilio + simple CRUD).

### MVP Feature Set (Phase 1)

**Core User Journeys Supported:**
- Marcus (burned solo contractor): signup → Stripe connect → create job → deposit SMS fires → paid confirmation
- Diane (systematic operator): dashboard view, multiple active jobs, resend link

**Must-Have Capabilities:**

| Feature | Acceptance Criteria |
|---------|---------------------|
| Stripe Connect onboarding | Contractor completes OAuth in < 5 minutes on mobile; tested on iOS Safari |
| Job creation form | One-handed operation on phone; submit fires SMS in < 30 seconds |
| Deposit request SMS | Delivered via Twilio within 30 seconds; includes Stripe payment link |
| 24hr auto-reminder | Fires within ±5 minutes; does NOT fire if deposit already paid |
| 4hr contractor alert | Fires within ±5 minutes; reaches contractor mobile; not firing if paid |
| Paid confirmation (dual) | Fires within 60 seconds of Stripe payment webhook; contractor + customer receive separate SMSs |
| Job dashboard | Loads in < 2 seconds; shows all jobs with deposit status; mobile-responsive |
| Resend deposit link | Manual retry sends fresh SMS to customer; recorded in job history |
| SMS opt-out | STOP reply stops all SMS to that number; compliant with 10DLC requirements |

**Explicitly excluded from MVP:**
- Jobber/HCP webhook integration
- Auto-cancel workflow
- State deposit cap warnings (informational text only)
- Email deposit request
- Team/multi-user accounts
- Reporting/analytics
- Mobile native app
- White-label

### Post-MVP Features

**Phase 2 (Months 4–8):**
- Jobber webhook integration (job booked → deposit SMS auto-fires)
- Housecall Pro webhook integration
- State deposit cap calculator with UI warnings
- Configurable auto-cancel workflow
- Reminder timing customization (contractor adjusts 24hr/4hr defaults)
- Basic analytics: monthly deposit recovery rate, savings estimate

**Phase 3 (12+ months):**
- White-label for franchise networks
- Adjacent market expansion (spas, salons, personal trainers)
- Zapier/Make.com connector
- Milestone payments (deposit → progress → completion)
- Customer rebooking automation
- Stripe Capital referral integration
- Review automation (post-job SMS)

### Risk Mitigation Strategy

**Technical Risks:**
- *Twilio 10DLC approval delays:* Apply for registration immediately (4–6 week lead time). Plan soft launch with alpha testers on unregistered number while awaiting approval.
- *Stripe Connect webhook reliability:* Implement idempotency on all webhook handlers; store raw webhook payload before processing; retry failed handlers.
- *SMS delivery failures (wrong number format):* Validate US phone number format at job creation; use Twilio's number lookup API to validate before sending.

**Market Risks:**
- *Jobber adds native automated deposit SMS:* Monitor Jobber's product roadmap (public changelog + r/Jobber). Deepen integration value prop as competitive hedge.
- *Low adoption despite signup:* Watch leading indicators (Stripe connect rate, first job creation rate) weekly. If below 50%, run user interviews immediately.

**Resource Risks:**
- *Single developer bottleneck:* Keep scope narrow. If delayed, defer resend feature and dashboard pagination to v1.1 — core SMS chain must ship first.
- *AppSumo launch underwhelms:* If < 50 LTD buyers in first 30 days, pause paid acquisition and do direct outreach in r/sweatystartup before scaling.

---

## Functional Requirements

### Account & Authentication Management

- FR1: Contractor can create an account with email and password
- FR2: Contractor can verify their email address via a verification link
- FR3: Contractor can log in with email and password via persistent session
- FR4: Contractor can reset their password via an email link
- FR5: Contractor can view and edit their business name and mobile phone number

### Stripe Connect Onboarding

- FR6: Contractor can initiate Stripe Connect OAuth flow from within the app
- FR7: Contractor can complete Stripe Connect onboarding on a mobile device
- FR8: System can store and retrieve the contractor's Stripe Connect account ID after successful OAuth
- FR9: Contractor can see their Stripe connection status (connected / not connected) in account settings
- FR10: Contractor can disconnect their Stripe account (removes stored Connect ID; disables job creation)

### Job Management

- FR11: Contractor can create a job by entering customer first name, customer mobile phone number, job date and time, and deposit amount
- FR12: System validates that the customer phone number is a valid US mobile format before submission
- FR13: System validates that the deposit amount is greater than $0 and the job date is in the future
- FR14: Contractor can view all jobs on a dashboard sorted by upcoming job date
- FR15: Contractor can view deposit status per job: Pending, Paid, Overdue (unpaid and job date has passed), Cancelled
- FR16: Contractor can resend the deposit SMS to a customer for a specific job
- FR17: Contractor can mark a job as cancelled (stops any future automated SMS for that job)
- FR18: Contractor can view the full history of SMS actions sent for a given job

### SMS Deposit Request

- FR19: System sends an SMS to the customer immediately upon job creation containing the business name, job date/time, deposit amount, and a Stripe payment link
- FR20: The Stripe payment link in the deposit SMS points to a Stripe-hosted payment page pre-loaded with the deposit amount and job reference
- FR21: Customer can pay the deposit via the Stripe payment link without creating an account

### Automated SMS Sequence

- FR22: System sends a reminder SMS to the customer 24 hours before the job start time if the deposit has not been received
- FR23: System does not send the 24-hour reminder if the deposit has already been paid
- FR24: System sends an alert SMS to the contractor's mobile phone 4 hours before the job start time if the deposit has not been received
- FR25: System does not send the 4-hour contractor alert if the deposit has already been paid
- FR26: System can reschedule or cancel pending automated SMSs when a deposit is paid, a job is cancelled, or a job date is changed

### Payment Confirmation

- FR27: System receives and processes Stripe payment webhooks to detect deposit payment events
- FR28: System sends a confirmation SMS to the contractor when a deposit is paid, including the customer name, amount, and job date
- FR29: System sends a confirmation SMS to the customer when their deposit is received, including the business name and job date
- FR30: System updates the job's deposit status to "Paid" immediately upon successful webhook processing

### SMS Compliance

- FR31: All outgoing SMSs include opt-out instructions (e.g., "Reply STOP to opt out")
- FR32: System processes inbound STOP replies from Twilio and marks that phone number as opted out
- FR33: System does not send any further SMS to opted-out phone numbers

### Subscription & Billing

- FR34: New contractor accounts receive a 14-day free trial with full feature access and no credit card required
- FR35: Contractor can subscribe to the $39/month plan via Stripe Billing
- FR36: Contractor can enter and manage their payment method for the platform subscription
- FR37: Contractor can view their current subscription status and next billing date
- FR38: Contractor loses job creation and SMS capabilities after subscription expiry (view-only dashboard preserved)
- FR39: LTD purchasers are granted permanent access without recurring billing

---

## Non-Functional Requirements

### Performance

- Job creation form submission to SMS delivery: < 30 seconds end-to-end under normal Twilio throughput
- Dashboard initial load: < 2 seconds for up to 100 active jobs on mobile LTE
- Stripe payment webhook processing: < 60 seconds from Stripe event to confirmation SMS dispatched
- API response times: < 500ms for all dashboard and job management endpoints (p95)
- Scheduled SMS timing accuracy: ±5 minutes of target fire time for all automated reminders and alerts

### Security

- All data in transit encrypted via TLS 1.2+
- No payment card data (PAN, CVV, expiry) stored or transited through the product's servers — all card handling delegated to Stripe
- Stripe webhook endpoints validate Stripe-Signature header before processing any event
- Twilio webhook callbacks validate Twilio signature before processing inbound messages
- Contractor and customer phone numbers treated as PII; deletable via account deletion request
- Passwords stored using bcrypt or Argon2 (minimum work factor: 12 rounds)
- Session tokens: httpOnly, Secure cookies; sessions expire after 30 days of inactivity
- Rate limiting on all auth endpoints: max 10 failed attempts per 15-minute window

### Reliability

- Scheduled SMS job queue must survive application restarts (persistent job queue, not in-memory)
- Stripe webhook handlers must be idempotent — replaying the same webhook event must not send duplicate SMSs
- Failed SMS sends (Twilio error): log the error, retry up to 3 times with exponential backoff, alert operator on final failure
- Failed webhook processing: store raw payload, log failure, retry processing; do not silently discard Stripe events
- Uptime target: 99.5% monthly (allows ~3.6 hours downtime/month); acceptable for a single-developer v1

### Scalability

- MVP architecture should support up to 1,000 concurrent contractor accounts without infrastructure changes
- SMS volume: Twilio handles throughput scaling; SMS queue processing should be horizontally scalable
- Database: relational (PostgreSQL) with indexes on job date, contractor ID, deposit status for dashboard queries
- No real-time or WebSocket requirements in MVP; polling or page refresh is acceptable for status updates

### Integration

- Stripe Connect: OAuth 2.0 flow; payment links API for deposit requests; webhooks for payment events; Billing API for subscription management
- Twilio: SMS API for outbound messages; webhook for inbound STOP replies; 10DLC registered campaign for A2P messaging
- All external API credentials (Stripe keys, Twilio keys) stored as environment variables; never committed to source control
- Twilio and Stripe integration failures must be surfaced as actionable errors to the contractor (e.g., "SMS failed to send — check your Twilio setup") not as silent failures
