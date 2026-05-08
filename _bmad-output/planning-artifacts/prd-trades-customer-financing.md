---
stepsCompleted: [step-01-init, step-02-discovery, step-02b-vision, step-02c-executive-summary, step-03-success, step-04-journeys, step-05-domain, step-06-innovation, step-07-project-type, step-08-scoping, step-09-functional, step-10-nonfunctional, step-11-polish]
inputDocuments:
  - ideas/shortlisted/trades-customer-financing.md
  - _bmad-output/planning-artifacts/market-research-trades-customer-financing.md
workflowType: prd
project_name: trades-customer-financing
user_name: Root
date: 2026-05-08
---

# Product Requirements Document — FieldFund (Trades Customer Financing)

**Author:** Root  
**Date:** 2026-05-08  
**Product Name:** FieldFund — Contractor Financing, In the Field  
**Status:** Ready for Architecture

---

## Executive Summary

FieldFund is a standalone, mobile-first financing widget that enables small HVAC and plumbing contractors (1–5 technicians) to offer Wisetack customer financing in under 60 seconds — without adopting a full FSM platform or signing annual contracts.

**The precise market gap:** ~60,000–80,000 small trades shops cannot access Wisetack's proven financing infrastructure because it is only available embedded in FSM platforms (Housecall Pro $59–$169/month, Jobber $149–$349/month) that bundle it with scheduling, dispatch, and CRM features the target segment does not need. The only standalone financing alternative, Hearth, requires a $1,499/year annual commitment — prohibitive for seasonal shops with uneven monthly cash flow.

**Core workflow:** Technician opens app on-site → enters job description and amount → taps "Send Financing" → customer receives SMS with Wisetack pre-qualification link → customer applies in 3 minutes → approval in under 10 minutes → job closes. Total elapsed time for tech: under 60 seconds.

**Revenue model:** $49–$79/month SaaS (month-to-month, no annual lock-in) or $149–$299 one-time LTD, plus 0.5–1.0% Wisetack revenue share on funded loan volume.

**Target market:** ~60,000–80,000 HVAC/plumbing shops with 1–5 employees in the US.

**Revenue potential:** $2.5M–$5M ARR at 5–10% penetration at $59/month average.

**Time to MVP:** 3–4 weeks (Wisetack REST API + estimate input form + Twilio SMS).

**Documented market validation:**
- ACCA "Contractor of the Future" study (n=1,000+): close rates jump from 38% to 49% when financing is offered; 32% of contractors offer no financing.
- Abbott Brothers Plumbing & Heating: $72,000 incremental annual revenue attributed directly to adding Wisetack financing.
- Financed jobs average 4.5x larger than unfunded jobs ($1,000 unfunded → $4,500 financed).

## What Makes This Special

Three compounding differentiators vs. existing alternatives:

1. **No FSM required:** Wisetack financing without adopting Housecall Pro, Jobber, or ServiceTitan. The only standalone Wisetack-backed widget available outside an FSM context.
2. **In-field, 60-second flow:** Optimized for the moment the technician is standing in the customer's home with a completed estimate. Existing tools (Hearth web app, ServiceTitan iPad workflow) are built for post-visit or office use. The close window is the moment of estimate presentation — this product is built for that moment.
3. **Flexible pricing, no annual lock-in:** $49–$79/month month-to-month or one-time LTD. Direct counter to Hearth's $1,499/year annual commitment that is the single biggest adoption barrier for seasonal 1-tech shops.

**Project Classification:**
- Type: SaaS B2B — mobile-first PWA + lightweight web dashboard
- Domain: FinTech-adjacent (lending facilitation middleware / contractor financing access layer)
- Target segment: SMB trades, 1–5 technicians, HVAC / plumbing / electrical
- Context: Greenfield new product

---

## Success Criteria

### User Success

**North Star Metric:** Total funded loan volume processed through the platform (measured via Wisetack webhook API). This metric aligns with Wisetack revenue share, contractor revenue outcome, and product retention simultaneously.

**Leading indicators (predict funded volume):**

| Metric | Target |
|--------|--------|
| Time to first financing link sent | ≤ 48 hours from account creation |
| Time to first funded job | ≤ 14 days from signup |
| Financing links sent per active contractor/month | ≥ 8 |
| Wisetack approval rate per contractor | ≥ 70% of links sent |
| In-app NPS after first funded job | ≥ 8/10 |
| Support ticket rate per active contractor | < 2 tickets/month |
| Monthly active rate for contractors beyond day 90 | ≥ 70% |

### Business Success

| KPI | 3-month | 6-month | 12-month | Measurement |
|-----|---------|---------|---------|-------------|
| Paying customers | 75 | 200 | 500+ | Account records |
| Monthly funded volume | $200K | $600K | $2M+ | Wisetack webhook |
| Cumulative funded volume | $300K | $1M | $5M+ | Wisetack webhook |
| MRR (subscriptions) | $4,000 | $12,000 | $30,000 | Stripe |
| Wisetack revenue share income | $500 | $2,000 | $5,000/mo | Wisetack partner dashboard |
| Monthly churn rate | <10% | <7% | <5% | Stripe |
| Organic referral rate | 15% | 20% | 30% | Signup attribution |
| Contractor NPS (post-first-fund) | 8+ | 8.5+ | 9+ | In-app survey |

**Revenue model validation gates:**
- LTD model valid: 200+ LTD units sold in first 6 months at ≥$149 average = $30,000+ upfront
- SaaS model valid: Monthly churn stays below 5% after month 3
- Revenue share model valid: Wisetack revenue share reaches $2,000+/month by month 6

### Technical Success

| Metric | Target | Measurement |
|--------|--------|-------------|
| Wisetack webhook status delivery accuracy | ≥ 99% | Webhook delivery log |
| SMS delivery rate | ≥ 98% | Twilio delivery receipts (7-day rolling) |
| Financing link generation to SMS delivery | ≤ 5 seconds | App performance monitoring |
| Webhook event to push notification | ≤ 10 seconds (p95) | Webhook processing log |
| PWA first contentful paint (4G) | ≤ 2 seconds | Lighthouse mobile |
| System uptime | ≥ 99.5% monthly | Cloud provider monitoring |

---

## Product Scope

### Phase 1 — MVP (Months 1–3)

**Goal:** Validate that the core workflow closes jobs. One funded job per new contractor within 14 days of signup.

**In scope:**
- Contractor account creation with Wisetack OAuth onboarding
- Estimate creation + Wisetack pre-qualification link generation
- Twilio SMS delivery to customer phone number
- Real-time application status tracking via Wisetack webhooks
- Push notification on customer approval
- Funded jobs dashboard with running funded-volume counter
- Basic subscription management via Stripe (monthly + LTD)
- Solo technician accounts (single login per contractor)
- Password reset and basic account management

**Out of scope for MVP:**
- Multi-technician / team accounts (Phase 2)
- Second-look lender integration / Fortiva / FTL Finance (Phase 2)
- Website embed widget (Phase 2)
- CRM/FSM integrations — Jobber, QuickBooks, Invoice Ninja (Phase 2)
- Estimate PDF generation (Phase 2)
- iOS/Android native apps — PWA only (Phase 3)
- Partial financing / split-payment flows (Phase 2)
- Branded widget with contractor logo in Wisetack flow (Phase 2)
- HVAC/plumbing job templates (Phase 2)

**MVP success gate (Day 60):**
- ≥ 20 contractors have sent financing links; ≥ 15 have ≥ 1 funded job
- Post-first-funded NPS averages ≥ 8/10 from first 20 respondents
- 90% of financing links sent within 60 seconds of estimate entry (measured via app event log)
- 50+ LTD units sold within 30 days of public launch with no paid advertising
- Zero cancellations from contractors with ≥ 1 funded job in their first 30 days

### Phase 2 — Growth (Months 4–9)

- Multi-technician team accounts (up to 5 techs per shop, shared dashboard, owner/tech roles)
- Second-look lender integration (Fortiva/FTL Finance for Wisetack declines, targeting 90%+ combined approval rate)
- Website embed widget — "Apply for Financing" button embeddable on contractor website
- Estimate PDF generation with financing option embedded
- QuickBooks integration for funded job reconciliation
- Hearth migration path — explicit positioning and import for Hearth churners

### Phase 3 — Vision (Months 10–18+)

- Adjacent trade expansion: electrical (panel replacements $5,000–$25,000), roofing ($10,000–$30,000), windows/doors, garage doors
- Light CRM: customer contact history, follow-up reminders for declined applications
- ACCA/PHCC trade association co-branded version for member distribution
- API for small FSM tools (Invoice Ninja, Knowify) to embed financing widget
- Instant pre-qualification link: soft-check showing estimated monthly payment before formal application
- Canada market expansion

---

## User Journeys

### Journey 1 — Mike: Solo HVAC Operator (Primary Success Path)

**Context:** Mike, 42, runs a 1-tech HVAC shop in suburban Texas ($380K/year revenue). He uses iPhone + Google Calendar + Invoice Ninja. He loses 2–3 jobs/month to "I need to think about it" responses when customers see $5,000–$8,000 estimates.

**Discovery:** Mike sees a post on r/sweatystartup: "Been using FieldFund for 3 months, closed 6 jobs I'd have lost — paid for itself in Week 1." He visits the landing page, watches a 2-minute demo showing the complete field workflow. He reads 5–6 testimonials with specific dollar amounts. He sees $49/month or $149 LTD and calculates: one extra $5,000 job pays for 8 years of the LTD.

**Onboarding:** Mike signs up for $149 LTD. Onboarding collects: business name, trade (HVAC), email, phone, bank account for Wisetack payouts. Wisetack OAuth connection completes in 8 minutes. Total setup: 18 minutes.

**First Value Moment:** Three days later, Mike finishes diagnosing a failed compressor. He shows the homeowner a $6,500 estimate for a Carrier heat pump replacement. The homeowner looks pained: "That's a lot right now." Mike opens FieldFund on his iPhone, enters: "Heat pump replacement" / $6,500 / customer phone number, taps "Send Financing." Elapsed time: 42 seconds. The customer receives an SMS, applies while Mike packs his tools. Eight minutes later: push notification — "Customer approved for $6,500." Job closes on the spot.

**Retention:** Mike checks his funded jobs dashboard every Friday. It reads: "14 jobs funded • $78,400 total." He posts about it on r/sweatystartup. Two HVAC peers sign up from his post.

**Capabilities revealed:** Frictionless mobile onboarding under 20 minutes; single-screen estimate entry with phone number and "Send Financing" as primary CTA; SMS delivery under 5 seconds; push notification on approval; persistent funded-volume counter as primary retention surface.

---

### Journey 2 — Dave & Carl: 3-Tech Plumbing Shop (Team Account Path)

**Context:** Dave owns a 15-year plumbing business (3 techs, $900K/year). They use Jobber but never activated Wisetack inside it — buried in settings, felt optional. Their largest jobs (sewer replacements $3,500–$6,000, whole-house repipes $8,000–$15,000) are where customers hesitate most. Carl, lead tech (35), is the one who will use the app in the field.

**Discovery:** Dave sees a Facebook sponsored post in "Plumbing Business Owners" group. Signs up for the $79/month team plan (up to 5 technicians).

**First Use:** Carl uses FieldFund on a $4,200 tankless water heater estimate. Customer says "let me check with my wife." Carl sends a financing link in 51 seconds. Customer applies while Carl is still in the driveway. Approved in 8 minutes. Job closes.

**Operational integration:** By Month 3, Carl and both other techs offer financing as standard practice on every job over $2,000. Dave reviews the shared dashboard weekly: 4–7 financed jobs/month, $12,000–$22,000 total funded. He uses the funded volume data in weekly team check-ins.

**Capabilities revealed:** Team accounts with multiple technician logins under one contractor account; centralized dashboard showing all techs' activity; owner vs. technician role separation; consistent UX across multiple phone models.

---

### Journey 3 — Sarah: Early Adopter & Community Influencer (Referral Path)

**Context:** Sarah, 38, runs a 2-tech HVAC business in Atlanta. Posts on r/sweatystartup, 850 Instagram followers focused on small HVAC business ownership. Tried Hearth, paid $1,499/year, resented paying $125/month in slow winter months when she had 2–3 jobs total. Churned after 14 months.

**Switch:** Sarah sees FieldFund mentioned in r/HVAC. Immediately notices "month-to-month, no annual contract." Signs up for $49/month. First financed job closes in Week 1 ($3,800 mini-split installation).

**Influencer moment:** Sarah demos the FieldFund app on her Instagram Stories — shows the full workflow from her iPhone in 90 seconds. Three followers DM her asking for the link. She posts a "6-week update" on r/sweatystartup with specific numbers: 8 financed jobs, $31,400 funded.

**Capabilities revealed:** Demo-able UX — the workflow must be visibly fast and simple enough to show on a phone screen; friction-free month-to-month billing with clear pause/cancel; sharable funded-volume milestone for social proof; responsive support when she tests it.

---

### Journey 4 — Lisa: End Homeowner (Customer Application Experience)

**Context:** Lisa is a homeowner in suburban Texas. She receives an SMS from Mike's business: "Mike from ABC HVAC has sent you a financing option for your Heat pump replacement ($6,500). Apply now to see your monthly payment options: [link]"

**Application:** Lisa taps the link. Wisetack's application loads in her iPhone's Safari browser in under 3 seconds. She fills in name, address, income, SSN last 4. Submits in 3 minutes. Within 7 minutes: "Congratulations! You're approved for up to $6,500. Monthly payments from $178/month at 9.99% APR." She calls Mike: "I'll do it."

**Capabilities revealed:** SMS must render cleanly on iOS Safari and Android Chrome; Wisetack application must load within 3 seconds; status webhook from Wisetack must fire and update tech's app within 60 seconds of customer submission; declined customers must see a clear next-step message.

---

### Journey Requirements Summary

| Journey | Capabilities Required |
|---------|----------------------|
| Mike (solo HVAC) | Mobile onboarding <20 min, estimate entry <60s, SMS delivery <5s, push on approval, funded dashboard |
| Dave & Carl (team) | Multi-tech accounts, shared dashboard, owner/tech role separation, multi-device consistency |
| Sarah (influencer) | Demo-quality mobile UX, month-to-month cancel-anytime billing, shareable funded milestone |
| Lisa (homeowner) | SMS renders cross-browser, Wisetack loads <3s, real-time status update to tech app |

---

## Domain Requirements

**Domain classification:** FinTech-adjacent — lending facilitation middleware. FieldFund is a technology vendor, not a lender. Wisetack is the licensed lender; FieldFund facilitates access to Wisetack's portal.

### Compliance & Regulatory

**Lending facilitation posture:**
- FieldFund must not quote loan terms, make credit decisions, or hold funds. All credit decisions and fund flows are managed by Wisetack. This posture keeps FieldFund as a technology vendor, not a credit services organization.
- Legal review required pre-launch in CA, TX, and GA (most active consumer finance regulation states) to confirm technology-vendor posture is compliant. Budget: 2–4 hours with a startup attorney.
- NMLS licensing is not required under technology-vendor posture, but must be confirmed by legal review.
- Phase 2 second-look lender integration (Fortiva/FTL Finance) requires separate dealer agreements and state-level compliance review before deployment.

**Data scope and PII handling:**
- FieldFund collects: contractor business info, technician names/phones, customer phone numbers (for SMS delivery only), job descriptions, dollar amounts, Wisetack application status.
- FieldFund does NOT collect: customer SSN, credit card numbers, bank account numbers, loan terms, or application data — all handled directly by Wisetack.
- Customer phone numbers are PII: encrypted at rest, not shared with third parties, deletable on contractor account deletion request.
- Contractor bank account details pass through Wisetack's onboarding OAuth flow; FieldFund does not store bank account numbers.

**SMS compliance (TCPA):**
- All SMS messages sent via a Twilio 10DLC (10-Digit Long Code) number registered to the contractor's business name.
- SMS messages include contractor business name as sender identification.
- Twilio 10DLC registration takes 4–6 weeks; registration must be initiated at product launch, not MVP completion.

**Payment processing:**
- Stripe handles all SaaS subscription billing. FieldFund stores no card numbers, CVV, or full PANs.
- PCI-DSS compliance delegated entirely to Stripe hosted fields.

### Technical Constraints

- Wisetack partner program enrollment required for revenue share economics and formal integration support. Estimated 1–2 week approval. Wisetack public API available during partnership negotiation for MVP build.
- Wisetack integration must handle: merchant OAuth account linking, pre-qualification URL generation per job, application status webhook receipt (applied / approved / declined / funded), payout confirmation events.
- PWA must support: iOS 14+ Safari, Android Chrome 90+, minimum 320px viewport width.
- HTTPS mandatory: required for PWA, service worker, web push notifications.

---

## Innovation Analysis

**Innovation type:** Market-structural gap exploitation — the "missing middleware" position.

FieldFund is not technologically novel, but it occupies a market-structural innovation: Wisetack has built excellent lending infrastructure that is only accessible through FSM platform adoption (16 platform integrations as of 2026). FieldFund creates a standalone access layer for the 60,000–80,000 shops that will not or cannot adopt an FSM platform.

### Validated Market Gap

| Gap | Current State |
|-----|---------------|
| Wisetack standalone widget | Does not exist — Wisetack deploys exclusively through FSM partnerships |
| Sub-$100/month standalone contractor financing | Does not exist — Hearth is $125+/month billed annually only |
| In-field 60-second mobile financing flow | Does not exist at this price point |
| Month-to-month flexible pricing in this category | Does not exist |

### Validation Approach

- **Private beta (Weeks 1–4):** Recruit 15–20 beta contractors from r/sweatystartup and r/HVAC. Offer free lifetime access in exchange for documented feedback and one testimonial with real revenue numbers. Target: 15 funded jobs, 10 testimonials with specific dollar amounts.
- **LTD demand validation:** 50 LTD units sold organically within 30 days of public soft launch.
- **Funded volume trajectory:** $1M+ cumulative funded within 6 months confirms market pull.

### Risk Register

| Risk | Probability | Impact | Mitigation |
|------|------------|--------|-----------|
| Wisetack builds standalone widget | Medium | High | Formalize partnership before public launch; Phase 2 multi-lender integration adds independence from Wisetack alone |
| Hearth eliminates annual lock-in | Low-Medium | Medium | Mobile UX + no-FSM-required positioning differentiates regardless of Hearth pricing changes |
| State lending facilitation licensing required | Low | High | Pre-launch attorney review; technology-vendor posture is defensible given Wisetack handles all credit decisions |
| Small shop churn (infrequent large jobs) | Medium | Medium | Onboarding ROI framing; month-to-month pricing removes lock-in risk; funded dashboard drives retention |
| Wisetack partnership approval delayed | Low-Medium | Medium | Public API enables MVP build in parallel with partnership negotiation |

---

## Project-Type Requirements

**Classification:** SaaS B2B — mobile-first PWA with lightweight REST API backend.

### Technical Architecture Overview

**Frontend — Progressive Web App (PWA):**
- Mobile-first layout: primary surfaces (estimate entry, status tracking, funded dashboard) designed for 375px+ viewport.
- Installable on iOS/Android home screen via Web App Manifest without app store.
- Service worker for offline support and web push notifications.
- Desktop-accessible web dashboard for funded jobs management and account settings.
- Offline-capable estimate drafting: form submits queue when connectivity is restored.

**Backend — Lightweight REST API:**
- Account management: contractor registration, authentication, Wisetack OAuth linking.
- Job lifecycle: create estimate → generate Wisetack pre-qualification URL → send SMS → receive status webhooks → update job record.
- SMS delivery: Twilio API integration with delivery status tracking.
- Subscription billing: Stripe API for monthly plans, LTD one-time payments, subscription lifecycle webhooks.

**Authentication:**
- Email + password with bcrypt hashing.
- OAuth 2.0 flow for Wisetack merchant account linking (token storage encrypted).
- Session management with JWT (short-lived access + refresh token pattern).
- Password reset via email link (time-limited tokens, 1-hour expiry).

**Core Data Model:**

| Entity | Key Fields |
|--------|-----------|
| `contractors` | id, business_name, trade, email, wisetack_merchant_id, twilio_sender_number, subscription_tier, subscription_status |
| `technicians` | id, contractor_id, name, email, phone, role (owner \| tech) |
| `jobs` | id, contractor_id, technician_id, customer_name, customer_phone, description, amount, wisetack_application_id, status (draft \| link_sent \| applied \| approved \| declined \| funded), funded_amount, payout_expected_date |
| `sms_log` | id, job_id, recipient_phone, message_body, twilio_sid, delivery_status, sent_at |
| `webhook_events` | id, job_id, source (wisetack \| twilio \| stripe), event_type, payload, processed_at |

**Integration surface:**
- Wisetack REST API: merchant onboarding OAuth, pre-qualification URL generation, webhook receipt (application status events)
- Twilio SMS API: outbound SMS delivery, delivery receipt callbacks, 10DLC sender management
- Stripe API: subscription creation, one-time LTD payments, subscription lifecycle webhooks (payment_failed, subscription_deleted)

### Platform-Specific Requirements

**PWA requirements:**
- Service worker: cache app shell for instant load; queue SMS sends when offline.
- Web App Manifest: name, icons, `display: standalone`, `start_url` set to estimate entry screen.
- Web Push API: contractor receives approval push notifications when app is in background.
- HTTPS required for all of the above.

**Mobile performance targets:**
- First Contentful Paint ≤ 2 seconds on 4G (Lighthouse mobile simulation).
- Time to Interactive ≤ 4 seconds on 4G.
- Estimate entry form: all required fields visible without scroll on 375px viewport (max 4 fields above the fold).
- "Send Financing" CTA must be reachable with one thumb without scrolling.

**Multi-tenant isolation:**
- All job, technician, and funded-volume data is scoped to contractor_id.
- No cross-tenant data access at API or database layer.
- Contractor-level audit log for all financing link sends (who sent, when, to what number, job amount).

**Subscription enforcement:**
- Jobs with `link_sent` status or beyond require active subscription or LTD status.
- Accounts with lapsed subscriptions can view dashboard (read-only) but cannot send new financing links.
- Clear upgrade prompt displayed when restricted action is attempted.

---

## Functional Requirements

### FR Area 1 — Contractor Onboarding & Account Setup

- FR-01: Contractors can create an account by providing business name, trade type (HVAC / plumbing / electrical / other), email, and password.
- FR-02: Contractors can link their Wisetack merchant account via OAuth 2.0 flow during onboarding.
- FR-03: Contractors can provide bank account details for Wisetack payouts as part of Wisetack's OAuth onboarding flow.
- FR-04: Contractors can complete full account setup — including Wisetack connection — in under 20 minutes from initial signup.
- FR-05: Contractors can reset their password via a time-limited email link.
- FR-06: Contractors can update their business name, trade type, and contact information after initial setup.
- FR-07: The system notifies contractors via email when their Wisetack OAuth token expires or requires re-authentication.

### FR Area 2 — Estimate Creation & Financing Link Generation

- FR-08: Technicians can create a financing estimate by entering customer name, job description (free text, ≤ 200 characters), and total job amount ($500–$25,000).
- FR-09: Technicians can enter a customer phone number to receive the financing link via SMS.
- FR-10: The system delivers a Wisetack pre-qualification SMS to the customer's phone within 5 seconds of the technician tapping "Send Financing."
- FR-11: Technicians receive on-screen confirmation — displaying customer name and last 4 digits of their phone — within 5 seconds of sending.
- FR-12: The estimate entry form and "Send Financing" CTA are fully operable on a 375px mobile viewport without horizontal scrolling or zooming.
- FR-13: Technicians can send a financing link for a new job in under 60 seconds from opening the app (measured from app open to confirmation screen).

### FR Area 3 — Application Status Tracking

- FR-14: Technicians can view real-time application status for each financing link: Sent → Applied → Approved / Declined / Funded.
- FR-15: Technicians receive a push notification within 60 seconds of a customer being approved by Wisetack.
- FR-16: The system displays the approved loan amount and estimated monthly payment once a customer is approved.
- FR-17: The system updates job status to "Funded" within 60 seconds of receiving Wisetack's funded webhook event.
- FR-18: Technicians can see the expected Wisetack payout date (1–3 business days from job completion confirmation) on approved jobs.
- FR-19: Jobs with failed SMS delivery are flagged in the jobs list with a one-tap retry option.

### FR Area 4 — Funded Jobs Dashboard

- FR-20: Contractors can view a list of all financing links sent, showing date, customer name, job description, amount, and current status.
- FR-21: Contractors can see a persistent counter displaying total funded jobs count and total funded dollar volume (e.g., "14 jobs funded • $78,400 total").
- FR-22: Contractors can filter the funded jobs list by date range: last 30 days, last 90 days, all time.
- FR-23: Contractors can see monthly funded volume as a distinct metric for Wisetack revenue share tracking.
- FR-24: Contractors can access the funded jobs dashboard on both mobile (PWA) and desktop browser.

### FR Area 5 — SMS Delivery & Communication

- FR-25: SMS messages are sent from a Twilio 10DLC number registered to the contractor's business name.
- FR-26: SMS messages include the contractor's business name, job description, dollar amount, and Wisetack pre-qualification URL.
- FR-27: The system records SMS delivery status (delivered, failed, pending) for each financing link sent.
- FR-28: Contractors can see SMS delivery status for each job in their jobs list.

### FR Area 6 — Subscription & Billing Management

- FR-29: Contractors can subscribe to a monthly plan via credit card through Stripe-hosted payment fields.
- FR-30: Contractors can purchase a Lifetime Deal (LTD) access option as a one-time payment via Stripe.
- FR-31: Contractors can view their current plan, next billing date, and payment history.
- FR-32: Contractors can cancel their subscription at any time; access continues until end of current billing period.
- FR-33: The system restricts financing link creation for accounts with lapsed subscriptions, displaying a plan upgrade prompt.
- FR-34: The system sends contractors an email 3 days before a subscription renewal charge.
- FR-35: The system sends contractors an email notification when a payment fails, with a direct link to update payment method.

### FR Area 7 — Team Accounts (Phase 2)

- FR-36: Contractor owners can invite additional technicians to their account via email.
- FR-37: Invited technicians can create their own login credentials and access the app under the contractor's account.
- FR-38: Technicians can view and manage their own jobs; owners can view all technicians' jobs in a unified dashboard.
- FR-39: Owners can remove a technician from their account, immediately revoking that technician's access.
- FR-40: Team plans support up to 5 technicians per contractor account.

### FR Area 8 — Support & Administration

- FR-41: Contractors can submit support requests via an in-app contact form or embedded chat widget.
- FR-42: Contractors can delete their account and all associated PII (customer phone numbers, job records) within 30 days of request.

---

## Non-Functional Requirements

### Performance

- NFR-01: PWA first contentful paint shall be ≤ 2 seconds on a simulated 4G mobile connection (20 Mbps), as measured by Lighthouse in mobile mode with CPU throttling.
- NFR-02: The end-to-end financing link flow — from technician tapping "Send Financing" to SMS delivery confirmation displayed on screen — shall complete in ≤ 5 seconds for the 95th percentile of sends, measured via application performance monitoring.
- NFR-03: The funded jobs dashboard shall load all records for a contractor with up to 500 jobs in ≤ 2 seconds server response time, as measured by backend APM.
- NFR-04: Wisetack webhook processing — from webhook receipt to push notification delivered to technician — shall complete in ≤ 10 seconds for the 95th percentile of events, measured via webhook processing log.
- NFR-05: PWA Time to Interactive shall be ≤ 4 seconds on simulated 4G mobile, measured by Lighthouse.

### Security

- NFR-06: All data in transit shall be encrypted using TLS 1.2 or higher; TLS 1.0/1.1 disabled.
- NFR-07: All customer PII stored in the database (phone numbers, names) shall be encrypted at rest using AES-256.
- NFR-08: Contractor authentication sessions shall expire after 30 days of inactivity, requiring re-authentication.
- NFR-09: Wisetack webhook endpoint shall validate HMAC request signatures on every inbound event; requests with invalid signatures shall be rejected with 401 and logged.
- NFR-10: Stripe payment processing shall use Stripe hosted fields; FieldFund stores no card numbers, CVV, or PANs.
- NFR-11: Failed authentication attempts shall be rate-limited to 5 attempts per 15-minute window per IP address; subsequent attempts return 429 with retry-after header.
- NFR-12: Wisetack OAuth tokens shall be stored encrypted; plaintext tokens shall never appear in logs or error messages.

### Reliability

- NFR-13: System uptime shall be ≥ 99.5% measured monthly, excluding maintenance windows announced ≥ 24 hours in advance.
- NFR-14: Wisetack webhook processing shall achieve ≥ 99% success rate; failed webhook deliveries shall be retried up to 3 times with exponential backoff (1s, 4s, 16s), then flagged for manual review.
- NFR-15: SMS delivery shall achieve ≥ 98% successful delivery rate as measured by Twilio delivery receipts over any 7-day rolling window.
- NFR-16: Stripe subscription webhook processing (payment success, payment failure, cancellation) shall achieve ≥ 99.9% processing accuracy; failed events shall be retried up to 5 times with exponential backoff.

### Scalability

- NFR-17: The system shall support 500 concurrent active contractor accounts without degradation in API response times, validated by load testing prior to public launch.
- NFR-18: The API layer shall be deployable horizontally (stateless application servers behind a load balancer) to accommodate 10x contractor growth without application code changes.

### Accessibility & Mobile

- NFR-19: The PWA shall be installable as a home screen application on iOS 14+ Safari and Android Chrome 90+.
- NFR-20: The estimate entry form and all primary job management surfaces shall be fully operable on a 375px viewport without horizontal scrolling or zooming.
- NFR-21: All interactive elements shall have minimum 44×44px tap targets on mobile, conforming to WCAG 2.5.5 (Target Size).
- NFR-22: Estimate drafts created while offline shall be queued locally and automatically submitted when connectivity is restored, with no data loss.
- NFR-23: Core application text shall have color contrast ratio ≥ 4.5:1 for normal text and ≥ 3:1 for large text, conforming to WCAG 2.1 AA Level AA.
