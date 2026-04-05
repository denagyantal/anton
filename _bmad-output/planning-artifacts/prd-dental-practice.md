---
stepsCompleted: [step-01-init, step-02-discovery, step-02b-vision, step-02c-executive-summary, step-03-success, step-04-journeys, step-05-domain, step-06-innovation, step-07-project-type, step-08-scoping, step-09-functional, step-10-nonfunctional, step-11-polish, step-12-complete]
inputDocuments:
  - ideas/shortlisted/dental-patient-communication-platform.md
  - _bmad-output/planning-artifacts/market-research-dental-practice.md
  - _bmad-output/planning-artifacts/brief-dental-practice.md
workflowType: prd
research_type: prd
research_topic: dental-practice
user_name: Root
date: 2026-04-05
classification:
  projectType: saas_b2b
  domain: healthcare
  complexity: high
  projectContext: greenfield
---

# Product Requirements Document — DentalPing

**Author:** Root
**Date:** 2026-04-05
**Product:** DentalPing — Dental Patient Communication Platform

---

## Executive Summary

Dental practices in the US lose $105,000/year on average to no-shows and lapsing recall patients, while overpaying $249–$399+/month for communication platforms (Weave, Solutionreach, Lighthouse 360) that bundle VOIP hardware and enterprise features irrelevant to solo and small-group practices. A clear pricing gap exists: no credible HIPAA-compliant solution serves the 60,000–80,000 solo/small practices at under $149/month with quality integrations and support.

**DentalPing** is a HIPAA-compliant patient communication SaaS for solo and small-group dental practices. It delivers appointment confirmations, hygiene recall campaigns, two-way SMS, and automated review requests at $79/month — no VOIP hardware, no setup fees, no annual contracts. It integrates on top of any existing Practice Management System (PMS) without replacing it.

**Target users:** Office managers and dentist-owners at solo GP and small-group (2–5 location) dental practices, $600K–$2M annual revenue, running Dentrix, Eaglesoft, or Open Dental.

**Market context:** $184–$395M US dental patient communication sub-segment, 11.2% CAGR, 135,000+ US practice locations. Incumbent ARPU is $3,000–$5,000/year; DentalPing targets $948/year with comparable outcomes.

### What Makes This Special

DentalPing's differentiation is not a novel technology — it is a deliberate positioning and operational choice: the only dental communication platform with published pricing, $0 setup fee, month-to-month terms, and a purpose-built ROI dashboard that shows practices revenue recovered in dollars, not vanity metrics.

Core insight: the dental communication market is under-served not because the problem is hard, but because incumbents optimize for ARPU via VOIP bundling and annual contracts. DentalPing exists for the dentist who already has a phone system and just needs software that works.

Key differentiators:
- **Price transparency**: Pricing visible without a demo call or sales contact
- **No VOIP bundling**: Software-only; practices keep existing phones
- **$0 setup, no annual contracts**: Month-to-month from day one
- **"Live in 15 minutes"**: PMS integration wizard, pre-built dental templates
- **ROI dashboard**: Shows no-show reduction and recall reactivation in recovered revenue dollars
- **HIPAA-first architecture**: BAA at all tiers, tokenized SMS links, audit logs — built in from day one

## Project Classification

- **Project Type:** SaaS B2B web application
- **Domain:** Healthcare (dental vertical)
- **Complexity:** High (HIPAA compliance, PMS integrations, SMS infrastructure, regulated PHI handling)
- **Project Context:** Greenfield product

---

## Success Criteria

### User Success

Users (office managers and practice owners) succeed when DentalPing eliminates their daily manual communication burden and delivers measurable clinical and revenue outcomes:

| Outcome | Baseline | Target (Month 3) | Target (Month 12) |
|---------|----------|-----------------|------------------|
| No-show rate reduction (avg. across accounts) | ~10% no-show | 20% reduction | 30% reduction |
| Recall reactivation (lapsed patients booked) | 0 automated | 15% of contacted patients book | 25% of contacted patients book |
| Front desk time savings | 60 min/day on confirmations | 30 min/day saved | 45 min/day saved |
| Google review volume | Organic only | 5+ new reviews/practice/month | 10+ new reviews/practice/month |
| Customer NPS | — | >45 | >60 |

**User "aha!" moments:**
- Week 2: First lapsed patient books a hygiene appointment via automated recall SMS
- Month 1: Dashboard shows no-show rate dropped from 10% to 7%
- Month 2: 8 new Google reviews posted without front desk action

### Business Success

- **Primary goal:** $10,000 MRR within 6 months of public launch
- **Secondary goal:** $50,000 MRR within 12 months
- **Retention target:** Monthly churn <3% by Month 6, <2% by Month 12
- **Competitive benchmark:** 20 verified "switched from Weave/Solutionreach" testimonials by Month 6
- **Review platform target:** G2 rating >4.5 by Month 6, >4.7 by Month 12
- **CAC target:** <$200 via community channels, <$400 via SEO; payback period <3 months

**Growth KPIs:**

| Metric | Month 3 | Month 6 | Month 12 |
|--------|---------|---------|---------|
| Paying customers | 20 | 50 | 120 |
| MRR (avg $79 ARPU) | $1,580 | $3,950 | $9,480 |
| Monthly churn | <5% | <3% | <2% |

### Technical Success

- Zero PHI data breaches or HIPAA incidents in first 12 months
- PMS sync reliability: >99.5% successful appointment pulls per day
- SMS delivery rate: >98% for confirmation/recall messages
- Platform uptime: >99.5% monthly during business hours (7am–7pm practice timezone)
- Onboarding completion rate: >80% of trials reach first sent confirmation within 24 hours of signup

### Measurable Outcomes

**MVP success criteria (10 beta customers, 90 days):**
1. 10 paying beta customers live with at least 30 days of appointment data processed
2. At least 6 of 10 beta practices show >15% no-show reduction vs. reported baseline
3. At least 1 reactivated recall patient per beta practice
4. NPS >45 from first 10 customers
5. Zero churn in first 90 days
6. G2 listing with 5+ verified reviews averaging 4.5+
7. 3 PMS integrations live: Open Dental, Dentrix, Eaglesoft

Go/no-go for scale: 7 of 7 criteria met → proceed to public launch.

---

## Product Scope

### MVP — Minimum Viable Product (Months 1–6)

**Core premise:** The MVP proves that DentalPing can reduce no-shows, reactivate recall patients, and increase review volume for solo dental practices, while being operationally viable with HIPAA compliance intact.

**Must-have capabilities:**

1. **Appointment Confirmation + Reminder Campaigns** — SMS + email, 2-step (72h reminder → 24h confirmation), confirmation tracking dashboard, PMS-synced, no-PHI in SMS body
2. **Hygiene Recall/Recare Campaigns** — Automated sequences for patients overdue at 5/6/12/18+ months, multi-step (SMS → email → SMS), one-click booking link, reactivation dashboard
3. **Two-Way SMS Inbox** — Unified inbox for all patient SMS replies, reply-as-practice from web browser, conversation threading, handled/in-progress assignment
4. **Post-Appointment Review Requests** — Triggered 2–4 hours post-appointment, configurable delay, Google Business Profile routing, review volume dashboard
5. **ROI Analytics Dashboard** — No-show rate trend, confirmation rate, recall performance (contacted / booked), review volume, estimated recovered revenue
6. **PMS Integrations: Open Dental + Dentrix + Eaglesoft** — Automated appointment pulls, patient data sync (name, DOB, appointment date/time, last hygiene visit), no manual CSV upload
7. **HIPAA Infrastructure** — BAA at signup, AES-256/TLS 1.3 encryption, audit log, Twilio HIPAA-enabled, tokenized patient links, no PHI in SMS body
8. **Practice Onboarding Wizard** — PMS connection, template selection, campaign schedule configuration; target: live in 15 minutes

**Out of scope for MVP (explicit decisions):**

- VOIP phone system integration
- Insurance eligibility verification (Month 7+ — requires clearinghouse API)
- Online scheduling widget
- AI conversational SMS agent
- Treatment plan follow-up automation
- Multi-location reporting dashboard
- Payments / text-to-pay
- OSHA/HIPAA compliance binder (separate product)

### Growth Features (Post-MVP, Months 7–12)

- Insurance eligibility verification (15–30 min/patient saved; target: new $109/month tier)
- PMS integrations: Dentrix Ascend, Carestream Dental, Curve Dental, WinOMS, Dolphin (8+ total)
- Multi-location pricing: $49/location/month for 2–5 locations
- Referral program: 1 free month credited per referred practice that converts
- Treatment plan follow-up sequences (patients who deferred recommended work)

### Vision (Year 2+)

- AI-enhanced recall: conversational SMS agent that schedules directly without human intervention
- Veterinary and optometry practice expansion (same workflows, different PMS targets)
- Dental compliance SaaS (HIPAA + OSHA + DEA + sterilization logs) as a separate adjacent product at $97–197/month
- Full front-office OS: scheduling + communication + reviews + insurance verification

---

## User Journeys

### Journey 1: Sarah Chen — Office Manager Escaping Manual Confirmation Hell

**Opening scene:** It's 8:05 AM on a Tuesday. Sarah arrives at the practice 30 minutes before the dentist to prepare for the day. She opens Dentrix, pulls tomorrow's schedule, and begins calling patients one by one to confirm. She leaves 7 voicemails. Two numbers ring out. One patient replies that they need to reschedule — she spends 12 minutes on the phone finding a new slot. By the time the dentist walks in at 8:30 AM, she's called 19 people and reached 8 of them. This is every single day.

**Rising action:** Sarah searches "Weave alternative dental" after her dentist asks her to look at communication tools again — they dropped Weave six months ago because "the support was basically a phone tree." She lands on DentalPing's pricing page. $79/month. No setup fee. No contract. She screenshots it and texts the dentist.

She books a demo — no phone number required — and gets a walkthrough of the confirmation dashboard. She's live within a week. The PMS integration wizard connects to Dentrix in under 10 minutes. She selects pre-built dental templates (confirmation, 24h reminder, recall). She schedules a test confirmation to herself and watches it arrive.

**Climax:** Day 3. Sarah opens DentalPing's dashboard at 8:05 AM instead of her confirmation call list. 14 of 18 patients have already confirmed via SMS reply — two declined and need rescheduling, two haven't responded. She calls only those two. It takes 8 minutes instead of 45.

**Resolution:** By Month 1, DentalPing's dashboard shows the no-show rate dropped from 11% to 7%. The dentist stops asking about no-shows at the morning huddle. By Month 2, Sarah sees 7 new Google reviews posted — more than the previous quarter combined. She posts in her dental office manager Facebook group: "Switched from doing everything manually to DentalPing. Actually works, affordable, doesn't require a demo call to get pricing."

**Journey requirements revealed:** PMS-synced confirmation dashboard with confirmed/unconfirmed/declined status; automated two-step reminder sequences; exception-based workflow (show only what needs human action); review request automation; transparent pricing without sales gatekeeping.

---

### Journey 2: Dr. Marcus Webb — Practice Owner Recovering Recall Revenue

**Opening scene:** Marcus is reviewing his quarterly numbers with his dental consultant. Recall rate: 62%. Industry target: 75%+. The consultant pulls up a competitor practice three miles away that jumped from 80 to 230 Google reviews in 8 months and asks: "Do you know what changed?" Marcus doesn't.

**Rising action:** Marcus runs on Open Dental ($179/month) plus a generic reminder service ($129/month) that doesn't pull from Open Dental — staff has to manually export patient lists every week, and nobody does it consistently. He sees a post in the Open Dental community forum from another practice owner: "Switched to DentalPing after Weave got too expensive. Has native Open Dental integration and my recall rate went from 60% to 71% in 4 months."

Marcus checks the pricing page. Open Dental integration: listed. $79/month, month-to-month. He cancels his generic reminder service ($129/month), signs up for DentalPing's trial, connects to Open Dental via the integration wizard.

**Climax:** Week 3. The recall campaign automatically identifies 287 patients overdue for hygiene appointments based on their last visit date in Open Dental. DentalPing sends a 3-step sequence over 2 weeks. 34 patients click the "call to book" link. 19 book appointments. Marcus's practice recovered $8,930 in hygiene revenue from patients who had been silent in the system for 8–18 months.

**Resolution:** Month 6: recall rate is 71% (from 62%). No-show rate is 4% (from 9%). 11 new Google reviews per month on average. The morning huddle is now about clinical prep, not "who do we call today?" Marcus renews without thinking about it — the ROI dashboard shows $41,200 recovered revenue in 6 months against $474 spent on DentalPing.

**Journey requirements revealed:** Open Dental PMS integration with last-hygiene-visit date access; configurable recall triggers by lapse duration; multi-step recall sequences; one-click booking link in recall messages; reactivation dashboard tracking contacted/booked/lapsed; ROI calculation using practice-input average appointment value.

---

### Journey 3: Jordan (Front Desk Coordinator) — Daily Two-Way SMS Inbox Operator

**Opening scene:** Jordan is 26, front desk coordinator, 2 years at the practice. Her biggest complaint is phone tag — she leaves voicemails, patients text the old practice number (which nobody monitors), and the office manager Sarah has to remind her to check the Dentrix inbox. There is no unified place for patient messages.

**Rising action:** DentalPing goes live at the practice. Jordan gets a 10-minute orientation from Sarah: "This is the inbox. When a patient replies to a reminder, it shows up here. You reply here. That's it."

**Climax:** A patient texts "can we move my appointment to Thursday?" at 9:15 AM. Jordan sees it in the DentalPing inbox, checks Dentrix for Thursday availability, and replies: "Of course! I moved you to Thursday 10 AM. See you then!" — all within 3 minutes, no phone call. The patient calls the next day to say thank you. Jordan marks the conversation as handled.

**Resolution:** Jordan processes 8–12 patient SMS conversations per day from the DentalPing inbox. Phone call volume drops 30%. She mentions to her dental office manager friends: "The inbox is actually simple. I didn't need training."

**Journey requirements revealed:** Unified SMS inbox accessible to multiple staff users; simple reply interface requiring no training; conversation threading by patient; assignment/status tracking (handled/in-progress); mobile-accessible interface for staff who use iPads at the front desk.

---

### Journey 4: Practice Owner — Quarterly ROI Review

**Opening scene:** Dr. Webb reviews his software subscriptions every quarter. He sees DentalPing: $79/month × 3 = $237 over the quarter. He opens the DentalPing dashboard to justify the line item to himself.

**Journey:** He opens the ROI dashboard. It shows:
- No-show rate: 4.1% (was 9.2% when he started — down 55%)
- Recall reactivations: 47 patients booked in Q3 from recall campaigns
- Average appointment value he entered: $471
- Estimated recovered revenue: $22,137
- Google reviews gained in Q3: 31

**Resolution:** He closes the tab. He's not canceling. He screenshots the dashboard and sends it to his consultant with the message: "You asked me to get recall to 75%. We're at 71% and climbing."

**Journey requirements revealed:** Persistent ROI metrics accumulation (not resetting monthly); estimated revenue recovered calculation using configurable average appointment value; historical trend charts (week/month/quarter views); easy-to-screenshot dashboard layout.

---

### Journey 5: Admin/DentalPing Operations — Monitoring and Support

**Opening scene:** A DentalPing operations staff member monitors the system dashboard showing SMS delivery rates, PMS sync failures, and HIPAA audit events across all customer accounts.

**Journey:** An alert fires: "PMS sync failure — Dentrix customer account #4721, 3 consecutive failed pulls." The ops team investigates: the practice's Dentrix installation has an outdated API credential. Ops sends an automated alert to the practice with a link to refresh credentials. The sync resumes. The ops team sees the incident logged in the audit trail.

**Journey requirements revealed:** Internal ops dashboard with per-account health metrics; SMS delivery rate monitoring; PMS sync failure alerting; automated customer-facing notifications for resolvable errors; HIPAA audit log accessible to ops team; account management interface for credential refresh.

---

### Journey Requirements Summary

| Capability Revealed | Journeys |
|---------------------|---------|
| PMS-synced confirmation dashboard with exception-based workflow | 1, 2 |
| Automated reminder sequences (configurable timing and content) | 1, 2 |
| Recall campaign engine with lapse-based triggers | 2 |
| Two-way SMS inbox with conversation threading and status | 3 |
| ROI dashboard with revenue recovery calculation | 1, 2, 4 |
| Post-appointment review request automation | 1, 2 |
| Practice onboarding wizard (PMS connection + template setup) | 1, 2 |
| Multi-staff access with role-appropriate views | 3, 5 |
| Internal ops/monitoring dashboard | 5 |
| HIPAA audit log | 5 |
| PMS sync health monitoring and error recovery | 5 |

---

## Domain-Specific Requirements

This product operates in the **US healthcare domain** (dental vertical) and is subject to HIPAA Privacy and Security Rules. Domain complexity is **high**. All requirements in this section are **non-negotiable** — missing any of these constitutes a regulatory failure, not a product gap.

### Compliance & Regulatory

**HIPAA Privacy Rule:**
- Business Associate Agreement (BAA) must be signed by every customer prior to accessing patient data; BAA workflow is automated at signup
- No Protected Health Information (PHI) transmitted in SMS message bodies; patient-identifiable data in messages limited to first name only; appointment details delivered via tokenized HTTPS links
- Patient data used solely for communication purposes defined in the BAA; no secondary use, profiling, or advertising use of patient data
- Patients have the right to opt out of SMS communications; opt-out processing (STOP keyword) occurs within 24 hours and is reflected in the patient record

**HIPAA Security Rule:**
- All patient data encrypted at rest using AES-256
- All data in transit protected by TLS 1.3 minimum
- Access to patient records requires authenticated user session (practice staff account)
- Minimum necessary standard enforced: API pulls from PMS retrieve only fields required for communication (name, appointment datetime, last hygiene date, phone, email)
- Business Associate Agreement required with all third-party subprocessors handling PHI (Twilio for SMS, AWS/GCP for infrastructure)

**Audit Requirements:**
- Every patient communication event logged: message type, timestamp, patient identifier (not PHI), delivery status, staff member who triggered or responded
- Audit log is tamper-evident and retained for minimum 6 years per HIPAA requirements
- Audit log accessible to practice owner (HIPAA Privacy Officer) and DentalPing compliance team

**Breach Notification:**
- Security incident response plan documented before any customer data is onboarded
- HIPAA Breach Notification Rule compliance: affected practices notified within 60 days of discovery
- Incident log maintained and available to compliance team

### Technical Constraints

- **Authentication:** Multi-factor authentication (MFA) required for all staff accounts accessing patient data
- **Session management:** Sessions expire after 8 hours of inactivity; no persistent "remember me" tokens for PHI-accessible sessions
- **SMS infrastructure:** Twilio HIPAA-eligible product tier with BAA in place; no use of non-HIPAA-eligible messaging APIs
- **Data residency:** Patient data stored in US-based infrastructure only (AWS us-east-1 / us-west-2 or equivalent)
- **Subprocessor requirements:** BAA required with AWS/GCP, Twilio, and any analytics tooling that touches patient data
- **Penetration testing:** Annual third-party penetration test before public launch and annually thereafter
- **Data deletion:** Patient data for a churned practice deleted within 30 days of account termination upon request; PHI deletion confirmation provided in writing

### Integration Requirements

- **PMS data flow:** DentalPing reads appointment and patient data from PMS via API or secure local connector; it does not write back to the PMS in MVP
- **Twilio integration:** HIPAA-eligible account; all outbound SMS sent via Twilio Programmable Messaging; inbound SMS received via Twilio webhooks
- **Google Places API:** Used for review volume monitoring (detect new reviews for the practice's Google Business Profile); no PHI transmitted
- **SMTP/email provider:** Transactional email for appointment confirmations and recall campaigns; HIPAA BAA required with provider (SendGrid or equivalent)

### Risk Mitigations

| Risk | Mitigation |
|------|-----------|
| PHI exposed in SMS body | All message templates reviewed at creation; template engine enforces no-PHI rule; tokenized links only for appointment details |
| PMS credential breach | Credentials stored encrypted at rest; never logged; credential rotation documented in onboarding |
| Unauthorized staff access | Role-based access; audit log; MFA required |
| Twilio routing PHI to non-HIPAA tier | Explicit Twilio HIPAA-eligible configuration verified at account setup |
| Patient opts out and still receives SMS | Opt-out processing from Twilio STOP keyword updates suppression list within 1 hour; suppression checked before every send |

---

## SaaS B2B Specific Requirements

### Multi-Tenancy Architecture

- Each dental practice is an isolated tenant with no data visibility across tenants
- Tenant isolation enforced at the database level (row-level security or separate schemas)
- Practice admin (owner/manager) can create and manage staff user accounts within their tenant
- DentalPing internal ops team accesses practice data only via separate privileged access path with audit logging

### Role-Based Access Control

| Role | Capabilities |
|------|-------------|
| Practice Owner / Admin | Full access: settings, billing, reports, staff management, campaign configuration |
| Office Manager | Campaign management, inbox, reports; no billing or staff management |
| Front Desk Coordinator | Two-way SMS inbox, confirmation status view; no campaign configuration or reports |
| DentalPing Ops (internal) | Read-only access to account health metrics and audit logs; no PHI access |

### PMS Integration Architecture

**MVP integrations:**

| PMS | Integration Method | Market Share |
|-----|--------------------|-------------|
| Open Dental | REST API (open source, well-documented) | ~15% of US practices |
| Dentrix (Henry Schein) | Dentrix Developer Program API (requires agreement) | ~28% of US practices |
| Eaglesoft (Patterson Dental) | Patterson developer API | ~8% of US practices |

**Integration requirements:**
- PMS connection via integration wizard; practice provides API credentials or authorizes OAuth
- Appointment data pulled on a configurable schedule (default: every 15 minutes during business hours, every 60 minutes overnight)
- Sync failure detected within 2 consecutive missed cycles; practice notified by email within 1 hour
- Offline-first architecture for PMS connector: if connection drops, re-sync on reconnect without data loss
- Only read permissions required from PMS in MVP (no write-back)

**Data pulled from PMS:**
- Patient: first name, last name, mobile phone, email, date of birth (for identity matching only)
- Appointment: scheduled datetime, appointment type, provider, status (confirmed/unconfirmed/cancelled)
- Last hygiene visit date (for recall targeting)

### Billing and Subscription

- Subscription managed via Stripe; practice enters payment details at trial conversion
- $79/month solo tier; $49/location/month for 2–5 locations (billed monthly; no annual discount at MVP)
- SMS usage: 2,500 messages/month included; $0.012/message above that (Stripe metered billing)
- Failed payment: practice notified by email; 7-day grace period before service suspension
- Self-serve cancellation available from account settings (no call required); data export available at cancellation

### Onboarding Flow

- Target: practice live (first confirmation sent) within 15 minutes of account creation
- Steps: email verification → PMS type selection → API credentials entry → test connection → template selection → campaign schedule configuration → first test message
- Onboarding completion tracked per practice; practices stalled at any step trigger automated follow-up email at 24h and 72h

---

## Project Scoping & Phased Development

### MVP Strategy & Philosophy

**MVP Approach:** Revenue MVP — prove quantifiable ROI (no-show reduction, recall reactivation, review growth) before adding features. The product must generate measurable value that justifies $79/month within the first 30 days of a practice's use.

**Resource requirements for MVP build:**
- 1 full-stack engineer (primary)
- 1 part-time engineer (PMS integrations)
- 1 product/founder (customer discovery, support, copy)
- HIPAA-reviewed legal terms: 1-time attorney cost ~$2,000–$3,000
- Estimated timeline: 6–8 weeks from start to beta-ready

### MVP Feature Set (Phase 1)

**Core user journeys supported by MVP:**
- Office Manager: automated confirmation + reminder workflow with exception-based dashboard
- Practice Owner: recall campaigns targeting lapsed patients by last hygiene date
- Front Desk Coordinator: two-way SMS inbox for patient replies
- Any staff: ROI dashboard with no-show rate trend and recovered revenue estimate
- Patient: post-appointment review request via automated SMS

**Must-have capabilities (all required for MVP go-live):**
1. PMS integrations: Open Dental, Dentrix, Eaglesoft
2. Appointment confirmation and reminder campaigns (SMS + email)
3. Hygiene recall campaigns with configurable lapse triggers
4. Two-way SMS inbox (web-based)
5. Post-appointment review request automation
6. ROI analytics dashboard
7. Practice onboarding wizard
8. HIPAA infrastructure (BAA, encryption, audit log, Twilio HIPAA)
9. Multi-staff access with role-based permissions
10. Stripe billing with SMS overage metering

### Post-MVP Features (Phase 2 — Months 7–12)

- Insurance eligibility verification (clearinghouse API integration; unlock $109/month tier)
- 5 additional PMS integrations (Dentrix Ascend, Carestream, Curve Dental, WinOMS, Dolphin)
- Multi-location pricing and consolidated reporting for 2–5 location practices
- Referral program (automated credit on referred practice conversion)
- Treatment plan follow-up sequences

### Expansion Features (Phase 3 — Year 2)

- AI-assisted recall: conversational SMS agent (answers rescheduling questions, books appointments directly)
- Veterinary and optometry practice support
- Dental compliance SaaS (separate product: HIPAA + OSHA + DEA + sterilization logs)
- DSO (Dental Service Organization) enterprise tier with role-based multi-location management

### Risk Mitigation Strategy

**Technical risks:**
- PMS API access (Dentrix requires developer agreement): Mitigation: Lead with Open Dental (open-source, no gating) for first beta customers; apply for Dentrix developer program during build
- SMS delivery costs exceeding projected margins: Mitigation: 2,500 msg/month cap included; overage converts to metered MRR naturally; model unit economics before launch
- HIPAA gap at launch: Mitigation: Attorney-reviewed BAA and policies before any customer data is touched; Twilio HIPAA agreement in place before first beta account

**Market risks:**
- Weave introduces sub-$200 tier: Mitigation: DentalPing's moat is operational excellence (support, no-setup-fee, no-contract, transparent pricing) — not just price; Weave is unprofitable and cannot easily cannibalize ARPU
- Emitrr accelerates dental-specific marketing: Mitigation: Differentiate on dental-specific depth, community trust (Open Dental forum presence), and ROI dashboard

**Resource risks:**
- PMS integration takes longer than planned: Mitigation: Launch MVP with Open Dental only for first 10 beta customers; Dentrix and Eaglesoft added in waves based on beta customer PMS mix

---

## Functional Requirements

### Patient Communication — Appointment Confirmation

- FR1: The system can automatically pull scheduled appointments from connected PMS on a configurable sync interval (15–60 minutes)
- FR2: Office manager can configure a two-step confirmation sequence: initial reminder message (configurable timing: 48–96h before appointment) followed by confirmation request (configurable timing: 12–48h before appointment)
- FR3: Patients can confirm, decline, or not respond to appointment reminders via SMS reply or link
- FR4: Staff can view a confirmation dashboard showing each appointment's status: confirmed, declined, or no response
- FR5: Staff can filter and sort the confirmation dashboard by date, provider, appointment type, and confirmation status
- FR6: The system can send confirmation messages via SMS and email, with delivery method configurable per patient based on their contact preference in PMS
- FR7: Staff can customize message templates using pre-built dental language, with practice name and patient first name as merge fields

### Patient Communication — Hygiene Recall Campaigns

- FR8: Staff can configure recall campaign triggers based on months since a patient's last hygiene appointment (options: 5, 6, 12, 18, 24+ months)
- FR9: The system can automatically identify patients overdue for hygiene appointments based on last visit date pulled from PMS
- FR10: Staff can configure a multi-step recall sequence (up to 3 messages: SMS → email → SMS) with configurable delays between steps (default: day 1, day 7, day 14)
- FR11: Recall messages can include a configurable booking call-to-action: link to online scheduling, practice phone number, or both
- FR12: Staff can view a recall dashboard showing patients contacted, patients who booked, and patients who did not respond, per campaign
- FR13: Staff can pause, resume, or stop recall campaigns for individual patients or the entire campaign
- FR14: The system can exclude patients who have booked an appointment after receiving a recall message from further recall steps

### Two-Way SMS Inbox

- FR15: All inbound patient SMS messages appear in a unified practice inbox accessible to authorized staff
- FR16: Staff can reply to patient SMS messages from the inbox interface without switching tools
- FR17: Staff can view full conversation history per patient (all messages sent and received, chronological)
- FR18: Staff can assign inbox conversations a status: new, in-progress, or handled
- FR19: Multiple staff users can access the inbox simultaneously; conversations handled by one staff member are visible to others
- FR20: Staff can assign a conversation to a specific staff member for follow-up

### Review Request Automation

- FR21: The system can send a review request SMS to patients within a configurable window after appointment completion (2h, 4h, or next morning)
- FR22: Staff can configure which review platform(s) receive the routing link (Google Business Profile, Healthgrades, Yelp)
- FR23: Staff can view a review dashboard showing requests sent, click-through rate, and estimated new reviews detected
- FR24: The system can detect when a patient has previously clicked the review link and route subsequent requests to a secondary platform to avoid duplication
- FR25: Staff can disable review request automation for specific patients (e.g., patients who complained)

### ROI Analytics Dashboard

- FR26: Practice admin can input the practice's average appointment value (in dollars) for revenue recovery calculations
- FR27: Staff can view no-show rate trend charted week-over-week and month-over-month
- FR28: Staff can view confirmation rate trend (% of appointments confirmed before date)
- FR29: Staff can view recall campaign performance summary: patients contacted, patients booked, estimated revenue recovered (booked patients × average appointment value)
- FR30: Staff can view review volume trend: requests sent, estimated new reviews per month
- FR31: Staff can view estimated total recovered revenue for any selected time range (no-show reduction + recall reactivation combined)
- FR32: Dashboard data is exportable as CSV for practice reporting

### Practice Onboarding & Configuration

- FR33: New practices can connect to their PMS (Open Dental, Dentrix, or Eaglesoft) via a step-by-step integration wizard requiring no technical expertise
- FR34: The system can test and validate the PMS connection before completing onboarding, displaying a success or error state with actionable resolution steps
- FR35: Practices can select from pre-built dental message templates or write custom templates during onboarding
- FR36: Practices can configure campaign schedules (timing, triggers, steps) during onboarding and adjust them at any time thereafter
- FR37: Staff can send a test message to their own phone number before activating any campaign
- FR38: Practice admin can manage staff user accounts: invite, remove, and assign roles (owner, manager, coordinator)

### HIPAA Compliance & Security

- FR39: Every new practice must accept a Business Associate Agreement before accessing patient data; BAA acceptance is recorded with timestamp and user identity
- FR40: All outbound SMS messages containing appointment context use tokenized HTTPS links; no PHI (appointment details, procedure information) appears in the SMS message body
- FR41: Every patient communication event (sent, delivered, clicked, replied) is recorded in an audit log with timestamp, event type, patient identifier (non-PHI token), and acting staff member
- FR42: Practice admin can view and export the audit log for their practice
- FR43: Patients can opt out of SMS communications by replying STOP; opt-out is processed within 1 hour and suppresses future SMS to that patient
- FR44: Staff can view each patient's SMS opt-out status in the inbox and confirmation dashboard
- FR45: All staff accounts require email + password authentication with a forced MFA enrollment at first login

### Billing & Subscription

- FR46: Practice admin can view current plan, SMS usage vs. included allotment, and current month estimated invoice from the account settings
- FR47: Practice admin can update payment method, view billing history, and download invoices
- FR48: Practice admin can cancel their subscription from account settings without contacting support
- FR49: The system can notify practice admin by email when SMS usage exceeds 80% and 100% of included monthly allotment
- FR50: Practice admin can export all practice data (patient communication records, campaign history, analytics) prior to account cancellation

### Ops & Monitoring (Internal)

- FR51: DentalPing ops team can view per-account PMS sync status, last successful sync time, and sync error history
- FR52: DentalPing ops team can view per-account SMS delivery rate and failed delivery events
- FR53: The system can automatically alert the DentalPing ops team when a practice's PMS sync fails for 2 consecutive scheduled intervals
- FR54: The system can send an automated email to the practice when their PMS connection fails, with step-by-step resolution instructions

---

## Non-Functional Requirements

### Performance

- Page load time for confirmation dashboard and inbox: <2 seconds for 95th percentile under normal load (up to 50 concurrent practice users)
- PMS sync operations complete within 60 seconds for a practice with up to 5,000 active patients
- SMS delivery latency: outbound confirmation/recall messages queued and dispatched within 60 seconds of scheduled trigger
- Dashboard data refresh: analytics dashboard reflects data updated within the last 15 minutes
- API response time for all practice-facing endpoints: <500ms for 95th percentile under normal load

### Security

- All patient data encrypted at rest using AES-256; all data in transit uses TLS 1.3 minimum
- MFA required for all staff accounts; no PHI-accessible session without active MFA enrollment
- Sessions expire after 8 hours of inactivity
- HIPAA audit log retained for minimum 6 years; tamper-evident (append-only log storage)
- Annual third-party penetration test; critical findings remediated within 30 days
- All third-party subprocessors handling PHI have signed BAAs
- Twilio HIPAA-eligible tier with active BAA; confirmed before first practice account goes live
- Patient data stored exclusively in US-based infrastructure (AWS us-east-1 or us-west-2)
- PMS API credentials stored encrypted at rest; never included in logs or error messages

### Reliability & Availability

- Platform uptime: >99.5% monthly during business hours (7am–7pm practice local timezone, Mon–Sat)
- PMS sync failure detected and practice notified within 60 minutes of first failure
- Scheduled message delivery: system retries failed SMS deliveries up to 3 times within 30 minutes before marking as undeliverable
- No single point of failure for the SMS delivery pipeline (Twilio failover configuration)
- Database backups: automated daily, retained for 30 days; restore tested quarterly

### Scalability

- System supports up to 500 concurrent practice accounts in Year 1 without architectural changes
- SMS throughput: system handles up to 50,000 outbound messages per day (equivalent to ~500 practices × 100 messages/day peak)
- PMS sync architecture supports horizontal scaling of sync workers as account count grows
- Multi-tenant data architecture supports adding new tenants without downtime

### Integration

- PMS integration reliability: >99.5% successful sync cycles per practice per month (measured across all connected practices)
- Twilio webhook processing: inbound SMS webhooks acknowledged within 500ms to prevent message loss
- Google Places API rate limits respected; review monitoring runs at most once per hour per practice
- Stripe webhook processing: subscription events (payment success, failure, cancellation) processed within 60 seconds of receipt
- PMS connector supports credential refresh without requiring a full re-onboarding of the practice

### Accessibility

- Web application meets WCAG 2.1 AA standards for all practice-facing interfaces (confirmation dashboard, inbox, campaign configuration, analytics)
- All form fields have visible labels; error messages are descriptive and actionable
- SMS inbox and confirmation dashboard are usable on mobile browsers (responsive design) — front desk coordinators frequently use iPads

---

## Appendix: Key Decisions Log

| Decision | Rationale |
|----------|-----------|
| No VOIP integration in MVP | Weave's moat; out of our lane; adds hardware dependency and setup complexity that contradicts "live in 15 minutes" |
| No insurance eligibility verification in MVP | High API complexity (clearinghouse relationships); planned for Month 7 as $109/month tier unlock |
| No online scheduling widget in MVP | Competes with Zocdoc; adds scope; use "call to book" or partner link instead |
| Open Dental first for beta | Open-source, no developer agreement gating, fastest to integrate; de-risks PMS integration timeline |
| Month-to-month pricing only | Core positioning: anti-Weave. Annual contracts are the #1 reason practices stay with bad tools. |
| $0 setup fee | Removes the #1 barrier cited in competitive research; $750–$3,600 setup fees deter trial |
| ROI dashboard as core feature | Justifies spend on the bill-pay screen; differentiates vs. tools that only show vanity metrics |
| No AppSumo launch | Dentists don't browse AppSumo; direct community channels (dental Facebook groups, Open Dental forum) have higher concentration of ICP |
