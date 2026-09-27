---
stepsCompleted:
  - step-01-init.md
  - step-02-discovery.md
  - step-02b-vision.md
  - step-02c-executive-summary.md
  - step-03-success.md
  - step-04-journeys.md
  - step-05-domain.md
  - step-06-innovation.md
  - step-07-project-type.md
  - step-08-scoping.md
  - step-09-functional.md
  - step-10-nonfunctional.md
  - step-11-polish.md
  - step-12-complete.md
inputDocuments:
  - ideas/shortlisted/trades-follow-up-review-automation.md
  - _bmad-output/planning-artifacts/research/market-trades-follow-up-review-automation-research-2026-09-26.md
  - _bmad-output/planning-artifacts/brief-trades-follow-up-review-automation.md
workflowType: prd
project_name: trades-follow-up-review-automation
product_name: TradesPing
user_name: Root
date: 2026-09-27
author: Root
classification:
  projectType: saas_b2b
  domain: trade_services_smb
  complexity: medium
  projectContext: greenfield
documentCounts:
  briefCount: 1
  researchCount: 1
  brainstormingCount: 0
  projectDocsCount: 0
---

# Product Requirements Document — TradesPing

**Author:** Root
**Date:** 2026-09-27
**Product:** TradesPing — Trades Follow-Up & Review Automation
**Evaluation Score:** 93/105 (Tier 1 — BUILD)

---

## Executive Summary

TradesPing is an SMS-first automated follow-up and review generation SaaS built exclusively for trade service businesses — HVAC technicians, plumbers, electricians, cleaners, and landscapers. After every completed job, TradesPing fires a 5-step SMS sequence that captures Google reviews, prompts rebookings, and solicits referrals, without contractor intervention after initial setup.

600K–800K US trade businesses lose compounding lifetime value from every completed job because they never follow up. Automated SMS review requests sent within 2 hours of job completion achieve 34–48% response rates; manual requests days later achieve 6–9%. The timing advantage is structural and can only be captured through automation. One additional 5-star Google review generates 1–3 extra calls/month ($300–$1,500 incremental revenue); one rebooking generates $150–$300; one referral generates $500–$3,000.

The competitive gap is specific: SMS-first, trade-type-personalized, standalone (no FSM required), at $29/mo. CraftBoop ($29/mo, April 2026) validated willingness to pay in this exact category but is email-only — a channel with 20% open rates vs SMS's 98%. NiceJob delivers SMS but at $75–$125/mo. Birdeye/Podium deliver enterprise SMS at $299–$449/mo. No competitor combines SMS delivery, per-trade AI personalization, and the CraftBoop price point.

**Core proposition:** "Every job earns you a review, a rebooking, and a referral — automatically."

**Revenue model:** $29/mo (up to 100 jobs/month) → $49/mo (unlimited jobs, 3 users) → $59–79 LTD on AppSumo → $49/mo white-label for agencies. Year 1 target: 500 monthly subscribers + 1,500 AppSumo LTD holders = ~$290K combined revenue.

### What Makes This Special

**SMS-first at the $29/mo price point** is the core differentiator — not just a feature. For a contractor driving between jobs all day, SMS is the only realistic follow-up channel; it is a structural advantage, not a preference. CraftBoop proved $29/mo demand exists but left the SMS channel entirely unclaimed.

**Trade-type AI personalization below $299/mo** means HVAC messages reference seasonal tune-ups; plumbing messages reference drain clearing; cleaning messages reference deep cleans. This level of personalization exists only at Birdeye's price tier today. TradesPing brings it to $29/mo with a pre-built 6-trade × 5-message library (30 templates at launch).

**Standalone architecture** (Zapier integration with any FSM, or manual entry) eliminates the switching cost barrier that blocks adoption of Jobber/HCP's bundled review features. A contractor on any FSM, or on paper invoices, can connect TradesPing in under 30 minutes.

**AppSumo LTD as primary distribution** is a zero-CAC channel with 1.25M community buyers. No competitor in the trades follow-up category has activated this channel. First-mover AppSumo advantage creates a community of LTD holders who become advocates, reviewers, and word-of-mouth vectors.

## Project Classification

- **Project Type:** SaaS B2B (web application, multi-tenant)
- **Domain:** Trade services / SMB automation
- **Complexity:** Medium — TCPA compliance requirements, SMS carrier regulations (10DLC), Zapier integration dependency, Google Business Profile API
- **Project Context:** Greenfield — no existing codebase

---

## Success Criteria

### User Success

**Primary signal — review count growth:**
- Baseline Google review count recorded at onboarding
- Target: 8–12 new reviews/month per active user (vs 1–2 industry average without automation)
- "Aha!" moment definition: first review received via automated sequence within 72 hours of first job completion trigger

**Engagement health signals:**
- 70%+ of new users connect a job-completion integration (Zapier/webhook) within 7 days of signup
- 60%+ of users receive their first automated review within 14 days of signup
- 1+ weekly dashboard visits per active user (3+ = highly engaged)
- 85%+ of 5-step sequences complete without opt-out

**Conversion signals:**
- Rebooking conversion: 5–10% of +4-week rebooking reminders result in a new job booked
- Referral conversion: 3–6% of +8-week referral prompts generate a referred customer

**User satisfaction:**
- NPS ≥50 at Month 3; ≥60 at Month 6; ≥65 at Month 12
- Support ticket rate: <2% of active users per week

### Business Success

| Milestone | Target | Timeline |
|-----------|--------|----------|
| Beta contractors (free) | 5–10 active users, 2+ verticals | Month 1 |
| Paid customers (community launch) | 50 monthly subscribers | Month 3 |
| AppSumo LTD units | 1,500 units | Month 4–5 |
| Monthly subscribers | 300 | Month 6 |
| Monthly subscribers | 500 | Month 12 |
| White-label agency accounts | 20 | Month 6 |
| Monthly churn | <5% | Month 3 onwards |
| MRR | $14,500 (500 × $29) | Month 12 |
| Total Year 1 revenue | ~$290K (MRR + LTD + agency) | End of Year 1 |

**Strategic milestones:**
- AppSumo launch: $100K+ in launch 30 days (≥1,400 units at $69)
- Jobber App Marketplace listing by Month 6
- r/sweatystartup post: 200+ upvotes, 50+ sign-ups from a single post

### Technical Success

- SMS delivery rate ≥97% (measured via Twilio delivery receipts)
- Opt-out rate per SMS message: <2%
- Zero TCPA compliance incidents during beta
- Onboarding completion rate ≥70% (users who reach first successful sequence trigger)
- API uptime: 99.5% monthly measured by external monitor
- SMS sequence trigger latency: <5 minutes from job completion event to first message delivery

### Measurable Outcomes

- Average reviews generated per active user per month: 8–12 (vs 1–2 baseline)
- Integration setup completion within 7 days: 70%+ of new users
- CAC from community channels: <$10 (near-zero for organic community posts)
- CAC from AppSumo: $0
- Gross margin: ≥80% (SMS COGS ~$4/user/month at 100 jobs)
- LTV (monthly subscribers): $290 (10-month average lifetime at $29/mo)

## Product Scope

### MVP — Minimum Viable Product (Weeks 1–6)

The MVP proves the core loop: job completion → 5-step SMS sequence → Google Review captured → dashboard visibility.

**Must-Have Capabilities:**
1. Job completion trigger — Zapier templates (Jobber, HousecallPro, Stripe) + manual entry fallback + webhook endpoint
2. 5-step SMS sequence engine — 6 trade types × 5 messages (30 pre-built templates), configurable delay timings, TCPA time-window enforcement, opt-out handling
3. Google Review shortlink automation — auto-generated per business, link click tracking
4. Basic dashboard — review count trend, sequence status per customer, rebooking/referral tracking
5. Onboarding — trade type selection, Google link setup, Zapier integration walkthrough, test sequence
6. Billing — Stripe $29/mo and $49/mo plans, 14-day free trial, usage metering

**MVP Success Gate** (end of Month 2, before AppSumo application):
- 50+ paying customers
- ≥10 public reviews/testimonials with review count screenshots
- SMS delivery rate ≥97%
- Zero TCPA compliance issues from beta

### Growth Features (Post-MVP, Months 3–6)

- White-label / agency multi-account dashboard ($49/mo add-on)
- Email channel option (for users who prefer it; does not dilute SMS-first positioning)
- Review aggregation: Yelp, Facebook, Angi alongside Google
- Spanish-language message variants
- Native Jobber App Marketplace plugin

### Vision (Year 2+)

- AI-personalized sequences per job (job-level details from webhook → GPT-generated message)
- Maintenance plan conversion prompts (HVAC highest-value upsell path)
- Native ServiceTitan and FieldPulse integrations
- UK and Australia market expansion
- White-label as primary revenue tier (B2B2B flywheel)

---

## User Journeys

### Journey 1: Marcus — HVAC Solo Operator (Primary Success Path)

Marcus, 41, runs a solo HVAC business in Phoenix. He does 8–12 jobs/week using Jobber for dispatch. He has 34 Google reviews; his competitor has 187. He knows he should follow up but there is no moment in his day — first job at 7am, last job done by 5pm, home for dinner by 6pm.

**Discovery:** A post in "HVAC Business Owners" Facebook group shows a real screenshot: "Went from 34 to 112 Google reviews in 4 months, $29/mo." Marcus clicks through to TradesPing's landing page, sees HVAC-specific testimonials, confirms Jobber integration exists, and starts a 14-day trial in 8 minutes.

**Onboarding:** Marcus enters his business name, selects HVAC, pastes his Google Business Profile link (guided), and connects Jobber via a Zapier template with a step-by-step video. He reviews the default HVAC templates (seasonal tune-up variant), tweaks one phrase, then enters his own phone number for a test sequence. Within 2 minutes he receives "Hi Marcus, thanks for letting us handle your HVAC tune-up today! Happy with the service?" on his phone — the exact message his customers will receive.

**First value moment (target: within 48 hours):** The next job completes in Jobber; the webhook fires. Two hours later, the customer texts back: "Left you a 5-star review! You deserve it, Mike." Marcus opens the dashboard and sees "1 new review this week (↑1 from last week)." This is the "aha!" moment — the tool worked while Marcus was driving to his next job.

**Retention:** Marcus checks the dashboard weekly (3 minutes). After 6 weeks: 8–12 new reviews/month vs 1–2 before. Slow week in January shows rebooking reminders driving call-backs for tune-ups. He mentions TradesPing in the Facebook group where he found it. He never turns it off: "Turning it off means losing reviews."

**Journey requirements revealed:** Zapier webhook trigger, HVAC template library, Google review shortlink, dashboard with review trend chart, weekly summary data, test-sequence preview, mobile-responsive dashboard.

---

### Journey 2: Diana — Growing Cleaning Service (High-Volume Path)

Diana runs a residential cleaning company with 3 crews in Denver, doing 40–60 cleans per week. She uses HousecallPro. At this volume, manual follow-up is impossible without a dedicated hire. Her referral close rate is 70% — but she captures only 10% of possible referrals because asking happens organically, not systematically.

**Discovery:** Diana finds TradesPing via a Google search for "automated review request cleaning business." The landing page shows a cleaning-specific testimonial ("went from 2 to 15 reviews/month") and confirms HousecallPro Zapier integration.

**Onboarding:** Diana selects Cleaning as trade type, chooses the "regular clean" and "deep clean" message variants, connects HousecallPro via Zapier. She configures sequences for two customer segments: regular maintenance cleans and one-off deep cleans. She adds her logo to messages (white-label add-on).

**Value realization:** Diana's 40 weekly jobs fire 40 automated sequences with zero intervention. The +8-week referral prompt systematically captures referrals Diana was missing. After 60 days, her referral pipeline shows 6 new customers attributable to the automated referral prompt — $3,600+ in new customer value from a single sequence step.

**Dashboard use:** Diana reviews the Referral Tracking view weekly, uses the Sequence Status table to confirm no sequences stalled, and monitors the rebooking conversion rate. She shows the dashboard to her business partner as proof of marketing ROI.

**Journey requirements revealed:** High-volume sequence processing (40+ per week), multi-sequence-variant configuration per trade type, white-label messaging, referral tracking dashboard, sequence status table, multi-user access ($49/mo plan).

---

### Journey 3: James — Trade Marketing Agency (Agency/Admin Path)

James manages marketing for 18 HVAC and cleaning franchise clients across the Southeast. He currently uses GoHighLevel ($497/mo) for most clients but the review automation is buried in a complex platform his clients can't navigate. He needs a simpler white-label solution he can resell.

**Discovery:** James finds TradesPing via a post in a marketing agency Facebook group: "White-label SMS review automation for trade clients." The $49/mo agency add-on pricing lets him manage 18 clients and charge $79–99/mo per client.

**Onboarding:** James creates a TradesPing account, adds the white-label add-on, then creates sub-accounts for each client. For each client, he configures: trade type, Google Review link, Zapier integration with their FSM, message templates with client branding. He sets up a monthly dashboard export (PDF report) to share with clients.

**Agency workflow:** Each client's jobs trigger sequences automatically. James reviews a single agency dashboard showing review count growth across all 18 clients. He uses this data in monthly client reporting. He onboards 3 new trade clients by cloning an existing configuration.

**Journey requirements revealed:** Agency sub-account management, white-label branding per sub-account, aggregated agency dashboard, configuration cloning across accounts, client-level reporting export, single billing across all sub-accounts.

---

### Journey 4: Marcus — Opt-Out Edge Case (Compliance Path)

Marcus's customer, after receiving the +2-hour review request, texts back "STOP." The sequence must immediately halt, log the opt-out with timestamp, and never send another SMS to this number from any TradesPing business account.

**System behavior:** Twilio receives the STOP keyword, fires a webhook to TradesPing. TradesPing marks the contact as opted-out, cancels all pending sequence steps for this contact, logs opt-out timestamp for TCPA audit trail. Marcus's dashboard shows the contact status as "Opted Out." If Marcus later attempts to manually re-add this contact, the system warns: "This number has opted out on [date]. Re-adding requires explicit new consent documentation."

**Journey requirements revealed:** STOP keyword handling via Twilio webhook, opt-out log with timestamp, sequence cancellation on opt-out, opted-out status display in dashboard, re-consent warning on attempted re-add.

### Journey Requirements Summary

| Capability | Journeys It Serves |
|-----------|-------------------|
| Zapier/webhook job trigger | Marcus (1), Diana (2), James (3) |
| Trade-type SMS template library | Marcus (1), Diana (2) |
| Google review shortlink + tracking | Marcus (1), Diana (2) |
| Review trend dashboard | Marcus (1), Diana (2), James (3) |
| Referral tracking | Diana (2) |
| Rebooking conversion tracking | Marcus (1), Diana (2) |
| White-label messaging | Diana (2), James (3) |
| Agency sub-account management | James (3) |
| STOP/opt-out handling | Marcus edge case (4) |
| TCPA time-window enforcement | All journeys |
| Test sequence preview | Marcus (1) |

---

## Domain-Specific Requirements

### TCPA Compliance (US Telemarketing Law)

TCPA (Telephone Consumer Protection Act) governs automated SMS to US consumers. Violations carry statutory damages of $500–$1,500 per message. All SMS sent via TradesPing constitutes marketing communication subject to TCPA.

**Consent Collection:**
- Contractors must collect written consent from customers at time of booking or job creation
- TradesPing provides a consent language template for contractors to embed in their booking forms, job intake PDFs, and website contact forms
- Consent timestamp and method (web form, verbal on intake, etc.) must be recordable and retrievable per contact
- TradesPing does not send SMS to any contact without a recorded consent flag; the system blocks sequence initiation if consent is not flagged

**Time-Window Enforcement:**
- All outbound SMS must be delivered only between 8:00am and 9:00pm in the recipient's local time zone
- System detects or stores customer time zone (derived from area code or contractor-provided ZIP code)
- Messages scheduled outside the window are queued and delivered at 8:00am local time on the next allowed day
- Sequence delay timers ("+2 hours", "+2 days") apply from message delivery time, not trigger time, ensuring relative timing is preserved across time-zone queueing

**Opt-Out (STOP) Handling:**
- Twilio's native STOP/HELP/UNSTOP keyword processing is enabled on all TradesPing numbers
- STOP receipt immediately cancels all pending sequence steps for the contact across all sequences
- Opt-out logged with timestamp, contact ID, and business ID for audit trail
- Re-opt-in (UNSTOP) only possible if contractor documents new explicit consent
- Business-level reporting: opt-out count and rate visible in dashboard

**10DLC Registration:**
- All TradesPing sending numbers must be registered under 10DLC (10-Digit Long Code) program with US carriers
- Shared short code architecture is not used (higher spam filter rates, less compliance defensibility)
- TradesPing handles 10DLC registration for all business accounts as part of onboarding
- Message content must align with registered campaign use case (service-related follow-up, not promotional offers)

**Compliance Documentation:**
- TCPA compliance guide (plain-English) provided to all customers at signup
- Consent collection template (copy-paste HTML + PDF) provided for contractor's own customer-facing forms
- Monthly opt-out rate visible in dashboard (early warning if content is triggering opt-outs)

### SMS Carrier Requirements

- Messages sent from verified 10DLC numbers only (not shared shortcodes or toll-free provisionally)
- Message content must pass Twilio content filtering (avoid promotional trigger words in templates)
- All templates reviewed against carrier content guidelines before going live
- Delivery receipt tracking enabled on all messages; failed delivery logged and visible per-contact

---

## Innovation & Novel Patterns

### Detected Innovation Areas

**Channel + Price Point Innovation:** The combination of SMS delivery and the $29/mo CraftBoop price point has not been assembled by any competitor. This is not breakthrough technology — it is a gap in market positioning. The innovation is recognizing that the channel advantage (98% vs 20% open rate) had not been brought to the price tier where 400K+ solo trade operators actually buy. This "obvious in hindsight" gap is the clearest signal of first-mover opportunity.

**Vertical Specificity at Commodity Pricing:** Generic SMS automation tools (NiceJob, Birdeye) exist at higher price tiers. TradesPing's innovation is building trade-type-specific message personalization — a capability that previously required either enterprise spend or custom development — into a $29/mo SaaS with pre-built template libraries. The 6-trade × 5-message matrix (30 templates) creates immediate perceived personalization for the buyer without AI inference at launch, with AI-per-job personalization as a v2 feature.

**AppSumo-as-Primary-Distribution for B2B SaaS:** Using AppSumo LTD as the primary distribution event (not a secondary monetization channel) is an unconventional product launch strategy. The trade-off: LTD holders reduce MRR ceiling but create 1,500 word-of-mouth advocates, reviews, and a defensible community moat before any enterprise competitor reacts. No trades follow-up tool has executed this playbook.

### Market Context

CraftBoop (email-only, April 2026) provides direct proof of $29/mo willingness to pay in this category. Its existence is a signal, not a competitor threat — it validated demand without claiming SMS or trade personalization. The optimal response window is 6–12 months before CraftBoop or a well-funded entrant adds SMS.

### Validation Approach

- Beta with 5–10 real HVAC/plumbing/cleaning contractors before public launch (Week 5–6)
- Measure actual review count growth before/after (not proxy metrics)
- Confirm 10DLC registration process is feasible within 2-week beta window
- Confirm Zapier Jobber/HCP templates trigger reliably without false positives

### Risk Mitigation

- **CraftBoop adds SMS:** Speed to AppSumo launch (community moat before pivot is possible); trade personalization depth is a 3-month build for CraftBoop vs TradesPing's pre-built library
- **Jobber/HCP adds standalone SMS module:** Price point defensibility ($29/mo vs $59–149/mo FSM price); community distribution is platform-agnostic
- **SMS carrier filtering:** 10DLC registration mitigates; service-oriented content (not "BUY NOW") mitigates further; opt-out rate monitoring provides early warning

---

## SaaS B2B Specific Requirements

### Project Type Overview

TradesPing is a B2B SaaS targeting non-technical small business buyers (solo trade operators and small crews). The product must be operable without technical support — contractors who cannot debug a Zapier zap will not retain. The onboarding experience must deliver first value within 30 minutes of signup.

Architecture is web-first (responsive, no native mobile app in MVP). Multi-tenancy is required: each business account is isolated with its own customer contacts, sequences, billing, and SMS numbers. Agency white-label requires sub-account nesting (agency account owns N business accounts).

### Technical Architecture Considerations

**Multi-Tenancy:**
- Each business account has isolated contact data, sequence configurations, SMS sending numbers, and billing state
- No cross-account data visibility except agency parent→child relationships
- Row-level security on all database queries (business_id filter on all customer/contact/sequence tables)

**SMS Infrastructure (Twilio):**
- One Twilio phone number provisioned per business account (dedicated number, not shared pool)
- 10DLC campaign registered per business during onboarding
- Twilio webhooks handle inbound messages (STOP, HELP, UNSTOP, customer replies)
- Twilio status callbacks update message delivery state in TradesPing database
- Twilio Messaging Services used for throughput scaling (prevents carrier throttling at high volume)

**Sequence Scheduling:**
- Delay-based scheduling (not fixed time): "+2 hours from trigger", "+2 days from trigger"
- Time-window enforcement layer: schedule → check if within 8am–9pm local → deliver or queue to next window open
- Sequence state machine: PENDING → IN_PROGRESS → COMPLETED or CANCELLED (on opt-out or manual cancel)
- Each sequence step is an independent scheduled job (allows per-step cancellation)

**Zapier Integration:**
- Zapier webhook trigger: TradesPing provides a webhook URL per business account that accepts POST with: {customer_name, customer_phone, job_type, trade_type}
- Zapier templates published for Jobber, HousecallPro, and Stripe (job marked paid)
- Manual entry fallback: contractor enters customer name, phone, job type via a simple form in dashboard
- Webhook validation: API key authentication header required on all webhook requests

**Google Review Shortlink:**
- Contractor enters their Google Business Profile URL during onboarding
- TradesPing generates a shortlink (via bit.ly or custom domain) that redirects to the review form
- Link click tracked (Twilio link shortening or custom redirect with query param)
- Shortlink embedded in Step 1 message template; click events stored per contact/sequence

### Tenant Model

- **Tier 1 — Solo Business Account:** Single business, single user, up to 100 jobs/month ($29/mo)
- **Tier 2 — Team Business Account:** Single business, up to 3 users, unlimited jobs/month ($49/mo)
- **Tier 3 — Agency Account:** Parent account with N child business accounts; white-label branding per child; single billing at parent level; $49/mo add-on per agency account, child accounts billed separately at standard rates

### Permission Matrix

| Role | Trigger Jobs | Edit Templates | View Dashboard | Manage Billing | Add Sub-accounts |
|------|-------------|---------------|----------------|----------------|------------------|
| Business Owner | ✅ | ✅ | ✅ | ✅ | ❌ |
| Team Member | ✅ | ❌ | ✅ | ❌ | ❌ |
| Agency Admin | ✅ | ✅ | ✅ (all children) | ✅ | ✅ |

### Integration Considerations

- **Zapier:** Webhook trigger is primary. TradesPing does not build native Zapier app in MVP (webhook URL is sufficient). Native Zapier app (with visual trigger selection) is Growth phase.
- **Twilio:** Primary SMS infrastructure. All SMS logic routes through Twilio. No fallback SMS provider in MVP.
- **Stripe:** Billing and subscription management. Stripe webhooks handle subscription lifecycle (created, updated, cancelled, payment failed).
- **Google Business Profile API:** Not required in MVP — review count is either tracked via Google Business Profile API (OAuth) or manually entered by contractor. OAuth integration is Growth phase to automate review count tracking.

### Implementation Considerations

- Sequence engine must handle delayed jobs reliably — use a job queue (Sidekiq, BullMQ, or equivalent) with dead-letter handling for failed sends
- TCPA time-window logic must be unit-tested exhaustively for edge cases: midnight triggers, cross-timezone job completions, DST transitions
- Onboarding completion rate is a key product health metric — instrument each onboarding step with completion events
- Template rendering must escape all user-provided tokens to prevent injection (customer name, job type fields are user-controlled)

---

## Project Scoping & Phased Development

### MVP Strategy & Philosophy

**MVP Approach:** Problem-solving MVP — prove that automated SMS follow-up generates measurable review count growth for real trade contractors before AppSumo scale.

**Resource Requirements:** 1 full-stack developer, 1 PM/founder (same person acceptable); no designer required for MVP (functional over beautiful); TCPA legal review recommended before beta launch.

**Timeline:** 4 weeks build + 2 weeks beta = 6 weeks to community launch.

### MVP Feature Set (Phase 1)

**Core User Journeys Supported:**
- Marcus (HVAC solo operator): job trigger via Zapier/Jobber → SMS sequence → review capture → dashboard
- Diana (cleaning service): high-volume jobs via Zapier/HousecallPro → SMS sequence → referral tracking
- Opt-out edge case: STOP handling → sequence cancellation → audit log

**Must-Have Capabilities:**
- Job completion trigger: Zapier webhook + manual entry form
- 5-step SMS sequence engine with 6 trade types × 5 message templates
- TCPA: time-window enforcement, STOP handling, consent flag, opt-out log
- Google Review shortlink per business account with click tracking
- Dashboard: review count chart, sequence status table, rebooking/referral flags
- Onboarding: trade selection, Google link setup, Zapier walkthrough, test sequence
- Billing: Stripe $29/mo and $49/mo plans, 14-day free trial, usage metering

### Post-MVP Features

**Phase 2 (Months 3–6):**
- White-label / agency multi-account management ($49/mo add-on)
- Google Business Profile OAuth (automated review count sync)
- Email channel option
- Review aggregation: Yelp + Facebook + Angi

**Phase 3 (Expansion, Year 2):**
- AI-generated per-job message personalization (job-level webhook data → GPT message)
- Native Jobber App Marketplace plugin
- Maintenance plan conversion prompts (HVAC upsell path)
- Spanish-language template variants
- UK/Australia market (regulatory review required for local SMS laws)

### Risk Mitigation Strategy

**Technical Risks:** Twilio 10DLC registration can take 2–4 weeks; begin registration before beta launch. Zapier webhook reliability depends on contractor's FSM configuration — manual entry fallback must work independently.

**Market Risks:** AppSumo acceptance requires 50+ paying customers and ≥10 testimonials; community launch (Month 3) is a prerequisite, not a shortcut to AppSumo.

**Resource Risks:** If developer bandwidth is constrained, defer agency white-label to Phase 2 and ship MVP with solo/team accounts only. Dashboard can be read-only static charts in MVP (no real-time); this is acceptable.

---

## Functional Requirements

### Job Trigger & Integration Management

- FR1: Business owners can connect their Jobber, HousecallPro, or Stripe account as a job completion source via Zapier webhook URL
- FR2: Business owners can manually trigger a follow-up sequence by entering customer name, phone number, and job type in a form
- FR3: Business owners can configure a webhook endpoint that accepts job completion events from any external system
- FR4: The system validates incoming webhook requests using an API key per business account
- FR5: Business owners can view all incoming job triggers (pending, processed, failed) with timestamps and source identifiers
- FR6: Business owners can test their integration by triggering a preview sequence to their own phone number

### SMS Sequence Engine

- FR7: Business owners can select a trade type from six options (HVAC, Plumbing, Electrician, Landscaping, Cleaning, Handyman) and receive a pre-built 5-step message template set
- FR8: Business owners can edit any pre-built message template within their account without affecting templates in other accounts
- FR9: The system sends each sequence step at the configured delay (Step 1: +2 hours, Step 2: +2 days, Step 3: +4 weeks, Step 4: +8 weeks, Step 5: +6 months) relative to the job trigger timestamp
- FR10: The system personalizes each message with contact-level tokens: {customer_name}, {job_type}, {trade_type}, {follow_up_service}
- FR11: The system enforces delivery only within 8:00am–9:00pm in the customer's local time zone; messages scheduled outside this window are queued to the next valid delivery window
- FR12: The system cancels all pending sequence steps for a contact when a customer reply is received (human handoff mode)
- FR13: Business owners can manually pause or cancel a sequence for a specific contact
- FR14: The system maintains sequence state (PENDING, IN_PROGRESS, COMPLETED, CANCELLED, OPTED_OUT) per contact and exposes it in the dashboard

### TCPA Compliance & Opt-Out Management

- FR15: Business owners can record written consent status (consented / not consented) per customer contact at trigger time
- FR16: The system blocks sequence initiation for any contact without a recorded consent flag
- FR17: Business owners can access and copy a TCPA-compliant consent language template for use in their customer-facing booking forms
- FR18: The system processes STOP, HELP, and UNSTOP keywords from inbound SMS and updates contact opt-out status immediately
- FR19: The system logs each opt-out event with timestamp, contact ID, and business ID
- FR20: Business owners can view opted-out contacts in the dashboard with opt-out timestamps
- FR21: The system warns business owners when attempting to re-add an opted-out contact without documented new consent

### Google Review Automation

- FR22: Business owners can enter their Google Business Profile URL and receive an auto-generated review shortlink for their account
- FR23: The system embeds the Google review shortlink in Step 1 of every sequence for the business account
- FR24: The system tracks shortlink clicks per contact and stores click events with timestamps
- FR25: Business owners can view Google review link click counts in the dashboard

### Dashboard & Analytics

- FR26: Business owners can view a time-series chart of their Google review count over the past 30 and 90 days
- FR27: Business owners can view a table of all active, completed, and opted-out sequences with status, last message sent, and next scheduled message
- FR28: Business owners can view how many new reviews were generated this week and this month (relative to baseline set at onboarding)
- FR29: Business owners can identify contacts who replied "YES" to a rebooking prompt (Step 3) and view them in a flagged list
- FR30: Business owners can view referral prompt click and response metrics (contacts who replied to Step 4 referral message)
- FR31: Business owners can view their current month's job count vs their plan limit

### User Onboarding & Configuration

- FR32: New users can select their trade type during signup and receive the corresponding pre-built message template set
- FR33: New users can enter their Google Business Profile URL and see a preview of the generated review shortlink before saving
- FR34: New users can access a step-by-step Zapier integration guide for Jobber, HousecallPro, and Stripe within the onboarding flow
- FR35: New users can send a test sequence to their own phone number to preview the full 5-step message experience
- FR36: Business owners can update their Google Review link, trade type, and message templates from account settings at any time

### Billing & Subscription Management

- FR37: Users can subscribe to the $29/mo plan (up to 100 jobs/month) or the $49/mo plan (unlimited jobs, up to 3 users) during or after onboarding
- FR38: New users receive a 14-day free trial with full feature access; credit card required at trial start
- FR39: The system tracks jobs triggered in the current billing period and alerts users when approaching the 100-job limit on the $29/mo plan
- FR40: Business owners can view their billing history, update payment method, and cancel subscription from account settings
- FR41: The system handles subscription lifecycle events from Stripe (payment failure, renewal, cancellation) and updates account access state accordingly

---

## Non-Functional Requirements

### Performance

- SMS delivery latency: Step 1 message delivered within 5 minutes of job trigger event for 95th percentile of triggers (measured via Twilio delivery timestamps)
- Dashboard page load: Initial load under 3 seconds for accounts with up to 1,000 contacts; data tables paginate at 50 rows
- API response time: Webhook endpoint processes and enqueues job trigger within 500ms for 99th percentile (measured by application APM)
- Sequence scheduling precision: Sequence steps execute within ±15 minutes of their scheduled delivery time

### Security

- All customer contact data (phone numbers, names) encrypted at rest using AES-256
- All data in transit uses TLS 1.2 minimum
- Webhook endpoint requires per-business API key authentication; keys are hashed in storage
- Stripe handles all payment card data; TradesPing stores no raw card data (PCI-DSS scope reduction)
- TCPA opt-out log is immutable (append-only); no business owner can delete an opt-out record
- Business account data is row-level isolated; no API endpoint returns cross-account data

### Scalability

- System supports 500 concurrent business accounts each processing up to 200 jobs/month (100K total jobs/month) at MVP launch without architectural changes
- Sequence scheduling job queue sized to handle 10x spike (e.g., 1,000 jobs triggered within 1 hour) without message delay exceeding 30 minutes
- Twilio Messaging Services provisioned per business account to prevent per-number throughput throttling at high job volume

### Reliability

- API uptime: 99.5% monthly availability measured by external uptime monitor
- SMS delivery success rate: ≥97% of messages where Twilio reports delivery (excludes carrier-side delivery failures beyond TradesPing's control)
- Sequence engine fault tolerance: failed SMS sends are retried up to 3 times with exponential backoff before marking as failed; failed steps do not cascade to cancel subsequent steps
- Dead-letter queue for failed job triggers: visible to system admin for investigation; triggers not silently dropped

### Integration

- Zapier webhook accepts standard JSON POST; documented schema with example payloads provided in onboarding
- Twilio inbound webhook (STOP/HELP/reply handling) processed within 30 seconds of Twilio delivery
- Stripe webhook events processed within 60 seconds of event emission for subscription lifecycle changes
- Google Business Profile URL validation: system confirms URL resolves to a valid Google Maps business listing before accepting it

---

## Appendix: Competitive Positioning Reference

| | CraftBoop | NiceJob | Birdeye | TradesPing |
|---|---|---|---|---|
| **Monthly price** | $29 | $75–$125 | $299–$449 | $29 |
| **SMS-first** | No (email) | Yes | Yes | Yes |
| **Trade AI personalization** | No | Partial | Partial | Yes |
| **Standalone (no FSM required)** | Yes | Yes | Yes | Yes |
| **AppSumo LTD** | No | No | No | Yes |
| **Trades-native brand** | No | Partial | No | Yes |
| **5-step sequence** | Yes | Partial | Yes | Yes |

**Positioning statement:** "TradesPing is what CraftBoop would be if it sent texts instead of emails, knew the difference between an HVAC tune-up and a drain clearing, and had a real brand — at the exact same $29/mo price."

---

*PRD created: 2026-09-27*
*Based on: Product Brief (2026-09-27) + Market Research (2026-09-26) + Shortlisted idea (93/105, 2026-09-25)*
*Next step: Architecture — `run-automvp.sh --step architecture` or `/bmad-bmm-create-architecture`*
