---
stepsCompleted: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
inputDocuments:
  - ideas/shortlisted/post-job-follow-up-automation.md
  - _bmad-output/planning-artifacts/market-research-post-job-follow-up-automation.md
  - _bmad-output/planning-artifacts/brief-post-job-follow-up-automation.md
workflowType: prd
lastStep: 11
project_name: post-job-follow-up-automation
product_name: ReviewPilot
user_name: Root
date: 2026-11-04
classification:
  projectType: saas_b2b
  domain: smb_marketing_automation
  complexity: medium
  projectContext: greenfield
---

# Product Requirements Document — ReviewPilot

**Author:** Root
**Date:** 2026-11-04
**Product:** ReviewPilot — Post-Job Follow-Up Automation for Service Businesses

---

## Executive Summary

ReviewPilot is an SMS-first post-job follow-up automation tool for US service businesses (HVAC, cleaning, landscaping, plumbing, painting, pressure washing). It sends a 5-step automated sequence — thank you, review request, check-in, rebooking prompt, referral ask — triggered automatically on job completion via Jobber or Housecall Pro webhook integration, requiring zero ongoing effort from the business owner.

The core problem: a service business completing 100 jobs per month follows up with zero of them. The post-job window (24–48 hours after completion, peak customer satisfaction) passes unused every time. The average Google review is worth $200–500 in customer LTV; a referral is worth $500–1,500. Manual follow-up almost never happens. Existing tools either cost $75+/mo (NiceJob, Spokk) or are email-only with 20% open rates (CraftBoop, $29/mo, launched April 2026).

ReviewPilot fills the specific gap: SMS-first delivery at $19–39/mo, complete 5-step sequence (not just review requests), Jobber/Housecall Pro webhook integration triggering on actual job completion, and Google Business Profile direct review link auto-generation. No sub-$100 tool offers all five simultaneously.

**Target:** 750 paying customers ($14,250 MRR) by month 12. AppSumo LTD ($79) as primary acquisition engine targeting $39,500 in launch revenue from 500 LTD sales.

### What Makes This Special

ReviewPilot's moat is the combination of channel (SMS), completeness (full 5-step sequence), and integration (FSM webhooks) at a price point ($19–39/mo) that no current tool offers. CraftBoop validated the concept with paying users but delivers via email only. NiceJob covers reviews at $75/mo but misses rebooking and referral. No sub-$100 tool offers native Jobber/HCP webhook integration.

The defining differentiator is the Google Business Profile direct review link auto-generated at onboarding. All competitors send customers to a generic Google search. ReviewPilot generates the direct "leave a review" URL once and uses it in every future review request — removing the single biggest friction point that stops review requests from converting.

Vertical-specific sequence timing is the second structural advantage: a cleaning service needs a 4-week rebooking prompt; an HVAC company needs a 6-month interval; a landscaper needs spring/fall seasonal logic. Generic tools send the same rebooking timing to all verticals and miss the rebooking moment entirely.

## Project Classification

- **Project Type:** SaaS B2B — web application with webhook integrations and SMS delivery pipeline
- **Domain:** SMB marketing automation with regulatory compliance (TCPA SMS regulations)
- **Complexity:** Medium — third-party OAuth integrations (Jobber, HCP, Google), 10DLC SMS registration, TCPA consent management, webhook ingestion pipeline
- **Project Context:** Greenfield — new product, no existing codebase

---

## Success Criteria

### User Success

A service owner using ReviewPilot is successful when they receive new Google reviews without taking any manual action after initial setup. The defining success signal: a user who has received 10+ new Google reviews via ReviewPilot will almost never cancel. The product has fundamentally changed their business trajectory at that point.

Specific user success milestones:

- **First review received within 7 days** of connecting their Jobber/HCP account — the primary leading indicator of retention; users who don't see a review in week 1 churn at 3× the base rate
- **5+ new Google reviews per month** for a business completing 50+ jobs/month — the threshold where local search ranking begins to shift
- **At least 1 rebooking per 10 rebooking prompts sent** — proves the sequence has value beyond reviews
- **Zero setup friction** — user describes the experience as "I didn't do anything" when asked how they got new reviews

### Business Success

| Milestone | Target | Date |
|---|---|---|
| Beta: 10 Jobber webhook users onboarded | 10 paying beta users | Month 1 post-launch |
| AppSumo LTD launch | 500 LTD sales × $79 = $39,500 | Month 3 |
| Monthly paying subscribers | 50 at $19+/mo ($950 MRR) | Month 3 |
| Jobber App Marketplace listing live | Published | Month 2 |
| Monthly paying subscribers | 200 ($3,800 MRR) | Month 6 |
| Monthly paying subscribers | 750 ($14,250 MRR) | Month 12 |
| Trial-to-paid conversion | ≥35% | Month 3 onward |
| Monthly churn | ≤3% | Month 6 onward |
| NPS | ≥60 | Month 4 onward |

### Technical Success

- SMS delivery rate ≥95% across all active accounts (10DLC registration and carrier compliance achieved pre-launch)
- Google review link correctly generated for 100% of GBP accounts during onboarding
- Webhook processing latency: job completion event → first SMS sent within 30 seconds (95th percentile)
- TCPA consent flow passes legal review before any SMS is sent commercially
- Zero data breaches or PII exposure incidents (measured continuously)
- System uptime ≥99.5% during business hours (6AM–10PM local time)

### Measurable Outcomes

The product is validated when beta Gate 2 is cleared (Week 10 post-beta start):

- ≥7 of 10 beta users have received ≥1 new Google review via ReviewPilot
- ≥3 beta users use the phrase "I didn't do anything" when describing how they got new reviews
- NPS from beta cohort ≥50
- Zero beta users churn due to setup complexity

If Gate 2 is not met, the product is NOT ready for paid launch.

---

## Product Scope

### MVP — Minimum Viable Product

**MVP Philosophy:** Problem-solving MVP. The product must solve one problem completely: a service business connects Jobber, the next job fires a sequence, and the customer leaves a Google review. Everything else is secondary.

**Core MVP Capabilities:**

1. SMS sequence engine: 5-message sequence, Twilio/Telnyx delivery, 10DLC-registered sender numbers, Day 0/1/3/7/14 configurable timing, STOP/opt-out handling, delivery status tracking
2. Google Business Profile integration: one-time Google OAuth, GBP listing auto-detection, direct review URL generation and storage, review count display on dashboard
3. TCPA compliance layer: consent checkbox with FCC disclosure language on customer intake, consent timestamp + language version storage, STOP handling, quiet hours enforcement (8AM–9PM local), 10DLC support
4. Jobber webhook integration: OAuth connection, `job.completed` webhook listener, auto-create customer record + trigger sequence, job type → vertical preset mapping, duplicate prevention
5. Manual customer entry: 3-tap mobile-optimized form (name, phone, job type, job date)
6. Customer management: list with sequence status, pause/stop per customer, search/filter
7. Minimal viable dashboard: total Google reviews (from GBP API), reviews this month, sequences active/completed/paused, SMS delivery rate, review conversion rate
8. 5 vertical presets with default message templates: HVAC, Cleaning, Landscaping, Plumbing, Generic
9. Onboarding flow: FSM connection → GBP connection → vertical selection → sequence preview → TCPA enablement; target <10 minutes to first sequence enabled
10. Subscription management: Solo ($19/mo, ≤50 customers/mo) and Growth ($39/mo, unlimited) tiers; Stripe-powered billing

**MVP Build Estimate:** 6 weeks

### Growth Features (Post-MVP)

- Housecall Pro webhook integration (same pattern as Jobber; Month 2 post-launch)
- Referral link tracking with attribution dashboard (which customers sent which referrals)
- Weekly email digest summary (reviews received, rebookings, referral links sent)
- Annual billing option with 2-month discount
- A/B testing for message templates (requires analytics foundation first)
- Advanced analytics: conversion funnels, cohort retention charts

### Vision (Future)

- Multi-location dashboard and white-label for cleaning/HVAC franchises ($99–199/mo per location)
- Agency portal for marketing agencies managing multiple service business clients
- ZenMaid, ServiceTitan, FieldPulse, Workiz webhook integrations
- AI-personalized message variants trained on highest-converting templates per vertical
- Seasonal campaign layer (spring outreach, holiday check-ins, weather-triggered rebooking)
- Review monitoring and AI-drafted response suggestions
- Customer LTV scoring (predict churn risk vs. referral candidate)

---

## User Journeys

### Journey 1: Marcus — Solo HVAC Technician (Primary User, Happy Path)

Marcus is 38, runs his own HVAC business in suburban Atlanta, 80–120 jobs/month, $340K ARR, uses Jobber ($69/mo plan). He has 31 Google reviews after 8 years; his main competitor has 287. He knows the gap costs him jobs but can't execute manual follow-up after a 10-hour day.

**Opening Scene:** Marcus Googles "how to get more Google reviews HVAC" on a Sunday evening. He finds a Reddit post in r/sweatystartup mentioning ReviewPilot: "set it up once, it texts your customers automatically after every job." The $19/mo price is impulse-buy territory. He clicks through.

**Rising Action:** He starts the free trial. The onboarding asks him to connect Jobber — one OAuth click, 2 minutes. It finds his Google Business Profile automatically and generates his review link. He picks "HVAC" as his vertical and sees a preview of the 5-message sequence with his business name filled in. He checks the TCPA consent box, reads the disclosure, and enables it. Total time: 8 minutes.

**Climax:** The next morning Marcus completes a job for a customer named Mike. Jobber marks it complete. Twenty seconds later ReviewPilot fires the Day 0 SMS: "Hi Mike, this is Marcus from Atlanta HVAC — thanks for letting us take care of your AC today! How did we do? [1-tap link]" Mike taps 5 stars. Day 1: ReviewPilot sends the Google review link. Mike leaves a review. Wednesday morning Marcus gets a ReviewPilot notification: "Mike just rated you 5 stars and left a Google review." He opens Google Maps. His review count is 32.

**Resolution:** Marcus did nothing except complete the job. Over the next 90 days, ReviewPilot fires sequences on 94 more jobs. He receives 23 new Google reviews — almost equaling his 8-year total in one quarter. He upgrades to Growth plan at $39/mo when he hits the 50 customer/month limit.

**Journey Requirements Revealed:** Jobber OAuth, webhook-triggered sequence, 1-tap satisfaction rating, conditional routing (4–5 stars → review link), GBP review link in Day 1 message, push notification for new reviews, upgrade flow from Solo to Growth.

---

### Journey 2: Sofia — Cleaning Service Owner (Primary User, Referral + Rebooking Focus)

Sofia is 44, 6-cleaner residential cleaning service in Denver, 300+ jobs/month, $520K ARR, uses ZenMaid. Her business depends on recurring clients and referrals. 15% annual churn rate; most churning clients never explain why. 48 Google reviews.

**Opening Scene:** Sofia discovers ReviewPilot on AppSumo — $79 LTD, "Set it once, get reviews and referrals automatically." She buys it because the rebooking feature specifically catches her eye; she loses 15–20 clients per year who simply forget to rebook until their slot is gone.

**Rising Action:** Sofia can't connect ZenMaid (not integrated yet in MVP). She uses manual entry. She adds her first 10 customers via the 3-tap form after their jobs. She sets the Cleaning vertical preset: 4-week rebooking interval, neighbor-focused referral language.

**Climax:** Day 3 after a cleaning job, one client replies to the check-in SMS: "Actually one of my bathrooms wasn't cleaned thoroughly." Sofia receives an alert. She reaches out directly, re-cleans the bathroom, and saves the relationship — a client who would have silently churned and left a 2-star review. At Day 14, the referral SMS goes out: "Know a neighbor who'd love the same service? Share this link for 1 free cleaning for them." Sofia's referral link is shared 3 times in the first month.

**Resolution:** Sofia's review count climbs from 48 to 71 in 60 days. The check-in message catches 2 service issues that become positive resolutions instead of churned clients. The rebooking prompt recovers 3 clients who had let their biweekly schedule lapse.

**Journey Requirements Revealed:** Manual customer entry with 3-tap UX, Cleaning vertical preset (4-week rebooking timing), private feedback capture for 1–3 star ratings, alert to service owner on negative feedback, referral link generation with shareable URL, Day 14 referral message.

---

### Journey 3: Derek — Landscaping / Lawn Care (Primary User, Seasonal Rebooking)

Derek is 31, 5-crew landscaping operation in suburban Ohio, 200+ residential clients in season (April–October), $280K seasonal revenue, uses Housecall Pro. He loses 20–30% of clients each winter who don't rebook for spring, then pays for Google Ads in March to replace them.

**Opening Scene:** Derek's Housecall Pro reseller mentions ReviewPilot when Derek asks about Google reviews. Derek visits the Jobber App Marketplace listing, sees it auto-triggers after job completion, and starts a 14-day trial.

**Rising Action (Edge Case — HCP not yet in MVP):** HCP integration isn't live yet. Derek uses manual entry for his spring cleanup clients. He sets the Landscaping preset. The rebooking prompt timing is set to "October — fall cleanup rebooking" for clients added in spring.

**Climax:** In October, ReviewPilot automatically fires the Day 7 rebooking prompts for Derek's spring clients: "Hi [name], fall cleanup season is here — want us to get your yard ready before the first frost? Reply YES to book." 18 of Derek's 90 spring clients reply YES in the first week — a 20% rebooking rate he previously achieved only with his personal mass-text blast.

**Resolution:** Derek recovers $12,600 in fall cleanup revenue from inbound rebookings. The Google review requests from spring cleanups have brought his review count from 19 to 47. The following spring he has 15% less churn than the prior year.

**Journey Requirements Revealed:** Landscaping vertical preset (seasonal rebooking timing, spring/fall intervals), Day 7 rebooking message with YES/NO reply capture, rebooking conversion tracking on dashboard, manual entry flow sufficient for seasonal batch processing.

---

### Journey 4: Service Owner (Edge Case — TCPA Opt-Out and Compliance)

A plumber named Ray adds a customer and fires a sequence. The customer — Dave — receives the Day 0 thank-you SMS and replies STOP.

**What must happen (zero margin for error):**
- System immediately adds Dave to the opt-out registry
- All remaining sequence messages for Dave are cancelled
- If Ray adds Dave again in the future (another job), system detects the opt-out and either blocks the sequence or prompts Ray to get renewed consent
- Ray can see Dave's opt-out status in the customer list
- The opt-out record is immutable: timestamp, phone number, opt-out method stored permanently

**Journey Requirements Revealed:** STOP keyword detection and processing within 60 seconds, opt-out registry with per-phone-number lookup, sequence cancellation for opted-out customers, opt-out status visible in customer list, duplicate opt-out prevention (don't re-add to sequences without fresh consent), immutable opt-out audit log.

---

### Journey 5: Service Owner (Onboarding Failure Recovery)

A new user starts onboarding, connects Jobber, but their Google Business Profile is not found (the business is new and GBP isn't verified yet).

**What must happen:**
- System clearly explains why GBP wasn't found (not verified, or multiple listings detected)
- Provides a manual GBP URL entry option as a fallback
- Allows the user to skip GBP connection and continue — sequences will work, but Day 1 review link will show a placeholder until GBP is connected later
- Service owner can connect GBP from account settings at any time after initial onboarding

**Journey Requirements Revealed:** GBP connection failure state with clear error messaging, manual review URL entry as fallback, ability to complete onboarding without GBP (degraded mode), GBP connection accessible from account settings post-onboarding, placeholder handling in review link template variable when GBP not connected.

---

### Journey Requirements Summary

Capabilities revealed across all journeys:

| Capability Area | Journeys |
|---|---|
| Jobber OAuth + webhook ingestion | Journey 1 |
| Manual customer entry (3-tap UX) | Journey 2, 3 |
| Vertical presets with timing logic | Journey 1, 2, 3 |
| 1-tap satisfaction rating + conditional routing | Journey 1 |
| Google review link in Day 1 (GBP API) | Journey 1, 5 |
| Private feedback capture (1–3 stars) + owner alert | Journey 2 |
| Rebooking prompt with YES/NO reply | Journey 3 |
| Referral link generation + shareable URL | Journey 2 |
| TCPA STOP handling + opt-out registry | Journey 4 |
| Dashboard: review count, delivery rate, rebooking rate | Journey 1, 2, 3 |
| Onboarding failure recovery + GBP manual fallback | Journey 5 |
| Sequence pause/cancel per customer | Journey 2, 4 |

---

## Domain-Specific Requirements

### Compliance & Regulatory (TCPA)

The Telephone Consumer Protection Act (TCPA) governs automated SMS marketing messages in the US. Violations can result in $500–$1,500 per message in statutory damages. All SMS sent by ReviewPilot on behalf of service owners constitutes A2P (application-to-person) messaging subject to TCPA.

**Mandatory requirements:**

- Prior express written consent is required before sending any promotional SMS. The consent must be captured on the customer intake form with: (a) FCC-compliant disclosure language stating the nature of texts and that consent is not required for purchase, (b) an unchecked opt-in checkbox, (c) a link to the terms of service and privacy policy.
- Consent records must store: customer phone number, consent timestamp, disclosure language version, IP address of the person who submitted the form, and the form submission source (Jobber auto-import or manual entry).
- Opt-out must be honored immediately (within 60 seconds) when a customer replies STOP, STOPALL, UNSUBSCRIBE, CANCEL, END, or QUIT to any message.
- Quiet hours must be enforced: no messages sent between 9PM–8AM in the recipient's local time zone. Messages queued during quiet hours are delivered when the window reopens.
- The service owner's business name must appear in every message (pre-filled from onboarding profile).
- Messages must not contain deceptive content or false claims.

**10DLC (10-Digit Long Code) Registration:**

- All A2P SMS must be sent from 10DLC-registered numbers per US carrier requirements (enforced since 2021).
- ReviewPilot must register each account's SMS sender number under a 10DLC campaign. Campaign registration is required before commercial SMS is sent.
- 10DLC registration requires: business legal name, EIN, website, use case description, sample message content.
- Throughput limits per registered number: standard 10DLC = ~75 messages/minute. If a service owner exceeds this (high-volume accounts), multiple registered numbers are assigned.

### Technical Constraints

- **Data residency:** All customer PII must be stored in US-based data centers (CCPA consideration for California customers).
- **Phone number formatting:** All phone numbers stored in E.164 format (+1XXXXXXXXXX) for Twilio/Telnyx API compatibility.
- **Time zone handling:** Customer local time zone is detected from the job location's zip code (or service owner's business zip if unavailable) for quiet hours enforcement and rebooking prompt timing.
- **Google Business Profile API:** Subject to rate limits (quota per project per day). Review count refresh must be batched and cached (maximum 1 refresh per business per hour).

### Integration Requirements

- **Jobber API:** OAuth 2.0 with `read:jobs` and `read:clients` scopes minimum. Webhook subscription for `job.completed` event. API version pinning required (Jobber has breaking changes on major version upgrades).
- **Twilio/Telnyx:** A2P messaging API for SMS delivery. Delivery status webhooks (delivered, failed, undelivered) must be ingested for dashboard accuracy. Number pool management for 10DLC-registered sender numbers.
- **Google Business Profile API (formerly My Business API):** OAuth 2.0 with `business.manage` scope. `accounts.locations.reviews.list` for review count. Direct review URL constructed as `https://search.google.com/local/writereview?placeid={place_id}`.
- **Stripe:** Subscription billing (Solo/Growth tiers), usage-based metering for Solo tier (customers/month count), webhook ingestion for subscription events (payment failure, cancellation, upgrade/downgrade).

### Risk Mitigations

- **TCPA class action risk:** Pre-approved consent language written by TCPA-specialized attorney before any commercial SMS is sent. Consent records are immutable once created (append-only). Legal review of onboarding flow required as Gate 1 success criterion.
- **10DLC rejection risk:** Campaign registration can be rejected by carriers (5–15% rejection rate). Fallback: toll-free number (TFN) registration as backup sender while 10DLC is resubmitted. TFNs have higher spam filter rates but are pre-approved for A2P use.
- **GBP API deprecation risk:** Google deprecated the My Business API in favor of Business Profile API in 2022. Use only the current Business Profile API v1. Monitor Google API deprecation notices quarterly.
- **SMS carrier filtering risk:** Carriers filter messages that appear as spam. Mitigations: 10DLC registration, business name in every message, unsubscribe language, no URL shorteners in review links.

---

## Innovation & Novel Patterns

### Detected Innovation Areas

ReviewPilot's innovation is not a new technology category — it is a focused combination of existing capabilities (SMS delivery, webhook integrations, Google API access) at a price point and integration depth that no existing product has achieved in the target segment. The innovation is market positioning and integration architecture, not novel technology.

**Specific innovations:**

1. **GBP direct review URL auto-generation at onboarding:** Competitors send customers to a generic Google search result or a landing page. ReviewPilot constructs the `writereview?placeid=` URL once during onboarding and uses it in every subsequent review request — eliminating 2–3 steps of customer friction. This is technically simple but operationally distinctive.

2. **FSM webhook as the trigger (not a CRM):** All competitors require the service owner to manually add customers or import a CSV. ReviewPilot treats the FSM (Jobber, HCP) as the source of truth — a job completed in the FSM is the trigger, not a manual action. This is architecturally different from other review tools and is the primary retention mechanism (the tool "just works" in the background).

3. **Vertical-specific timing presets:** No competitor has codified the difference between HVAC seasonal timing, cleaning 4-week intervals, and landscaping spring/fall windows. ReviewPilot ships with these presets, reducing the configuration barrier to near-zero for the target verticals.

### Market Context & Competitive Landscape

CraftBoop (craftboop.com, launched April 2026, $29/mo) is the closest competitor and directly validates the market. Its critical gap — email-only delivery — is structural, not incidental. Switching CraftBoop to SMS would require re-architecting the delivery layer, 10DLC registration, TCPA compliance infrastructure, and pricing model changes. This gap will not close in under 12 months.

NiceJob ($75/mo) covers review requests via SMS but covers only the review step — no rebooking, no referral, no FSM webhook integration. Its price point ($75+) prices out solo operators and 1–3 person service businesses, which is 70%+ of the target market.

### Validation Approach

The concept is already validated by CraftBoop's paying users and ZenMaid's $3M ARR (single-vertical SaaS for cleaning). The innovation-specific validation required is:

1. **SMS vs. email conversion uplift:** Measured in beta — if SMS review conversion rate is not ≥25% (vs. CraftBoop's email ~20%), the SMS-first thesis needs re-examination.
2. **GBP link friction reduction:** Measured by Day 1 (review request) → review received conversion rate. Target ≥25%. If rate is below 15%, the GBP link is not providing the expected friction reduction and troubleshooting is required.
3. **FSM webhook reliability:** Measured in beta — if >5% of Jobber `job.completed` events fail to trigger a sequence, the integration is not reliable enough for production.

---

## SaaS B2B Specific Requirements

### Multi-Tenancy Model

ReviewPilot is a single-tenant-per-account SaaS. Each service business owner has an isolated account. There is no shared data between accounts. Customer PII, SMS history, sequence templates, GBP credentials, and FSM OAuth tokens are all scoped to a single account.

**Account isolation requirements:**
- All database queries must include an account_id filter — no cross-account data access is architecturally possible
- OAuth tokens (Jobber, HCP, Google) are stored per account with encryption at rest
- Twilio/Telnyx sender numbers are assigned per account (required for 10DLC registration)
- Stripe customer and subscription records map 1:1 to ReviewPilot accounts

### Permission Model

MVP requires a single user per account (the service owner). Multi-user support (e.g., office staff or operations manager) is deferred to v1.2.

**Account roles (MVP):**
- **Owner:** Full access to all features, billing, and account settings. Only role in MVP.

### Onboarding & Activation

Target activation metric: Days-to-first-sequence ≤3 days (Jobber webhook users should be near-instant). The onboarding flow is the primary retention intervention — users who don't complete onboarding and receive their first review within 7 days churn at high rates.

**Onboarding gates:**
1. FSM connection (Jobber OAuth) OR manual entry mode selection
2. Google Business Profile connection (or manual URL entry as fallback)
3. Vertical preset selection
4. Sequence preview with real data
5. TCPA consent enablement

Each gate must be completable independently — if FSM connection fails, user continues with manual entry. If GBP connection fails, user continues with manual review URL entry.

### Subscription & Billing

| Tier | Price | Limit | Target User |
|---|---|---|---|
| Solo | $19/mo | ≤50 customers/mo | Solo operators, part-time service businesses |
| Growth | $39/mo | Unlimited | 2–10 person operations |
| AppSumo LTD | $79 one-time | Unlimited | AppSumo acquisition cohort (Growth features, grandfathered) |

**Billing behavior:**
- Solo tier: monthly customer count is metered. If a user exceeds 50 customers in a billing period, the system prompts upgrade before blocking new sequences.
- Growth tier: unlimited customers/mo, all current and future features.
- LTD buyers: treated as Growth tier accounts permanently; no upgrade path needed.
- Failed payment: 3-day grace period, then sequences pause (not deleted) until payment resolves.

### Integration Architecture

**Jobber webhook flow:**
1. Service owner authorizes ReviewPilot via Jobber OAuth
2. ReviewPilot subscribes to `job.completed` webhook on Jobber's API
3. Jobber sends POST to ReviewPilot webhook endpoint when any job is marked complete
4. ReviewPilot validates webhook signature, extracts customer name/phone + job type
5. ReviewPilot creates customer record (or updates existing) + queues Day 0 SMS
6. Day 0 SMS is delivered within 30 seconds of webhook receipt

**Webhook idempotency:** Jobber may deliver the same webhook event multiple times. ReviewPilot must deduplicate using the `job_id` from Jobber — if a sequence was already started for that `job_id`, the duplicate webhook is ignored.

**Duplicate customer handling:** Same customer (matched by phone number) may have multiple jobs. Each job triggers a new sequence only if no active sequence exists for that customer. If an active sequence exists, the duplicate is logged and the existing sequence continues.

---

## Project Scoping & Phased Development

### MVP Strategy & Philosophy

**MVP Approach:** Problem-solving MVP — proves the core value proposition (service business connects Jobber → job completes → customer leaves Google review without any additional effort).

**Resource Requirements:** 1 full-stack engineer + part-time design. 6-week build target.

### MVP Feature Set (Phase 1)

**Core User Journeys Supported:**
- Solo HVAC/plumbing tech connecting Jobber and receiving Google reviews automatically
- Any service owner using manual customer entry with any vertical preset
- Service owner managing TCPA compliance (consent capture, opt-out handling)

**Must-Have Capabilities:**
1. Jobber OAuth + `job.completed` webhook integration
2. Manual customer entry (3-tap mobile form)
3. 5-message SMS sequence engine (Twilio/Telnyx, 10DLC, configurable timing)
4. Email fallback for customers without mobile numbers
5. STOP/opt-out handling with quiet hours enforcement
6. Google Business Profile OAuth + direct review link auto-generation
7. 1-tap satisfaction rating capture + conditional routing (4–5 stars → review link; 1–3 stars → private feedback)
8. 5 vertical presets (HVAC, Cleaning, Landscaping, Plumbing, Generic) with default templates
9. Customer management list (status, pause/stop, search/filter)
10. MVP dashboard (review count from GBP, sequences status, delivery rate, review conversion rate)
11. Onboarding flow (<10 min to first sequence)
12. Stripe billing (Solo $19/mo, Growth $39/mo)
13. TCPA consent form with immutable audit log

### Post-MVP Features (Phase 2)

- Housecall Pro webhook integration (Month 2 post-launch)
- Referral link tracking with attribution dashboard
- Weekly email digest (new reviews, rebookings, referral links sent)
- Annual billing option (2-month discount)
- Advanced dashboard: rebooking conversion by vertical, referral conversion, cohort retention
- A/B testing for message templates

### Vision (Phase 3)

- Multi-location dashboard and white-label for franchise accounts ($99–199/mo per location)
- Agency portal (marketing agencies managing multiple service business clients)
- ZenMaid, ServiceTitan, FieldPulse, Workiz integrations
- AI-personalized message variants trained on per-vertical conversion data
- Seasonal campaign layer (auto-send spring/fall outreach to inactive clients)
- Review monitoring + AI-drafted response suggestions

### Risk Mitigation Strategy

**Technical Risks:**
- 10DLC registration rejection → Pre-register with Twilio's 10DLC service before beta launch; have toll-free fallback ready
- Jobber API breaking changes → Pin to current API version; subscribe to Jobber developer changelog
- GBP API rate limits → Cache review count per business (refresh max 1×/hour); never fetch in real-time on page load

**Market Risks:**
- CraftBoop adds SMS → 12+ month window based on architectural complexity; use window to establish Jobber Marketplace position and accumulate reviews/case studies
- AppSumo LTD buyers don't convert to MRR → LTD is acquisition engine only; MRR path is organic + Jobber Marketplace; ensure LTD buyers are still active users generating word-of-mouth

**Resource Risks:**
- If build takes >6 weeks → Defer HCP integration to v1.1; ship with Jobber-only + manual entry as absolute minimum
- If 10DLC registration is delayed → Use toll-free number for beta; switch to 10DLC immediately on registration approval

---

## Functional Requirements

### Customer Intake & Job Triggering

- **FR1:** Service owners can manually add a customer contact using a form requiring name, mobile phone, job type, and job date in 3 taps or fewer on mobile.
- **FR2:** Service owners can connect their Jobber account via OAuth to enable automatic sequence triggering on job completion.
- **FR3:** The system triggers a new sequence automatically when a Jobber `job.completed` webhook event is received for a connected account.
- **FR4:** The system detects when a webhook event references a customer already in an active sequence and suppresses the duplicate trigger, logging the event for review.
- **FR5:** Service owners can pause or permanently stop an active sequence for any individual customer at any time before all 5 messages are sent.
- **FR6:** Service owners can manually re-trigger a fresh sequence for any customer in their customer list.

### SMS & Email Sequence Engine

- **FR7:** The system sends a 5-message automated sequence with per-step timing configurable by the service owner (default: Day 0, 1, 3, 7, 14).
- **FR8:** The system delivers all sequence messages via SMS as the primary channel using a 10DLC-registered sender number assigned to the account.
- **FR9:** The system delivers sequence messages via email when no mobile phone number is on file for the customer.
- **FR10:** Service owners can select a vertical preset (HVAC, Cleaning, Landscaping, Plumbing, Generic) that sets default sequence timing intervals and message templates for that vertical.
- **FR11:** Service owners can edit any of the 5 default message templates within their account without affecting other accounts.
- **FR12:** Message templates support variable substitution for `{customer_name}`, `{business_name}`, `{technician_name}`, `{service_type}`, and `{review_link}`.
- **FR13:** The Day 0 message includes a 1-tap satisfaction rating link allowing customers to submit a rating of 1–5 stars without creating an account.
- **FR14:** The system routes the Day 1 message based on the Day 0 rating: customers who rated 4–5 stars receive the Google review link; customers who rated 1–3 stars receive a private feedback form.
- **FR15:** Service owners receive an in-app and email notification when a customer submits a 1–3 star rating (private feedback capture).
- **FR16:** The Day 7 message prompts customers to rebook using vertical-specific timing language (e.g., "Your HVAC filter is due for replacement" for HVAC; "Ready to schedule your next cleaning?" for cleaning).
- **FR17:** The Day 14 message prompts customers to refer a neighbor using a unique shareable link generated per customer.

### Google Business Profile Integration

- **FR18:** Service owners can authenticate with Google via OAuth to connect their Google Business Profile during onboarding.
- **FR19:** The system auto-detects the GBP listing associated with the authenticated Google account and presents it for confirmation.
- **FR20:** The system generates and stores a direct Google review URL (`writereview?placeid=` format) for the confirmed GBP listing.
- **FR21:** Service owners can enter a manual review URL as a fallback if GBP auto-detection fails or the listing is not yet verified.
- **FR22:** Service owners can connect or update their GBP connection from account settings after initial onboarding.
- **FR23:** The dashboard displays the current total Google review count and star rating fetched from the GBP API, refreshed no more than once per hour per account.

### TCPA Compliance

- **FR24:** The manual customer intake form includes a TCPA consent checkbox with FCC-compliant disclosure language (pre-written, not editable by service owner) that must be checked before the customer record is created.
- **FR25:** The system stores an immutable consent record for each customer containing: phone number, consent timestamp, disclosure language version, submission source (manual or Jobber import), and the service owner account ID.
- **FR26:** The system detects inbound STOP, STOPALL, UNSUBSCRIBE, CANCEL, END, or QUIT replies to any sequence message and processes the opt-out within 60 seconds of receipt.
- **FR27:** Opted-out customers are removed from all active sequences immediately upon opt-out processing and cannot be re-added to new sequences without a fresh consent record.
- **FR28:** Service owners can view the opt-out status of any customer in the customer list.
- **FR29:** The system enforces quiet hours by queuing messages that would otherwise be delivered between 9PM and 8AM in the recipient's local time zone, delivering them at 8AM local time the next business day.

### Customer Management

- **FR30:** Service owners can view a paginated list of all customers with their current sequence status (active, completed, paused, opted-out, never-started).
- **FR31:** Service owners can filter the customer list by sequence status, job type/vertical, and date added range.
- **FR32:** Service owners can search the customer list by customer name or phone number.
- **FR33:** Service owners can view the full sequence history for any individual customer, showing each message send status (queued, sent, delivered, failed, replied) and timestamp.

### Dashboard & Reporting

- **FR34:** The dashboard displays total Google reviews (current count from GBP), reviews received in the current calendar month, and change vs. prior month.
- **FR35:** The dashboard displays the total number of active sequences, sequences completed this month, and sequences paused or stopped this month.
- **FR36:** The dashboard displays the SMS delivery rate (percentage of messages with "delivered" status out of total sent) for the current billing period.
- **FR37:** The dashboard displays the review conversion rate (percentage of review-request messages sent that resulted in a new Google review) for the current billing period.
- **FR38:** The dashboard displays the rebooking prompt response rate (percentage of Day 7 messages that received a reply or rebooking confirmation) for the current billing period.

### Account & Billing

- **FR39:** New service owners can sign up, complete onboarding, and enable their first sequence during a 14-day free trial without entering payment information.
- **FR40:** Service owners can subscribe to the Solo tier ($19/mo) or Growth tier ($39/mo) via Stripe-powered checkout.
- **FR41:** Service owners on the Solo tier who exceed 50 customers in a billing month receive an in-app alert and can upgrade to Growth tier before new sequences are blocked.
- **FR42:** Service owners can view their current subscription tier, monthly customer count (Solo tier), next renewal date, and billing history from the account settings page.
- **FR43:** Service owners can upgrade or downgrade between Solo and Growth tiers at any time; changes take effect at the next billing period with prorated adjustment.

---

## Non-Functional Requirements

### Performance

- **NFR1:** The ReviewPilot dashboard loads in under 2 seconds for 95th percentile of page loads under normal load (up to 500 concurrent active users), as measured by application performance monitoring.
- **NFR2:** Sequence trigger to first SMS sent: ≤30 seconds from Jobber webhook receipt to Twilio/Telnyx API call, measured at 95th percentile under normal load.
- **NFR3:** Manual customer entry form: submission to sequence-queued confirmation displayed in under 1 second for 95th percentile.
- **NFR4:** Dashboard review count refresh (from GBP API): displayed in under 3 seconds, served from cache for requests within 1 hour of last refresh.

### Security

- **NFR5:** All customer PII (name, phone number, email) is encrypted at rest using AES-256 encryption in the database.
- **NFR6:** All data transmitted between client, server, and third-party APIs (Twilio, Google, Jobber, Stripe) uses TLS 1.2 or higher.
- **NFR7:** TCPA consent records are stored in an append-only log structure; no consent record can be modified or deleted after creation.
- **NFR8:** OAuth access tokens and refresh tokens for Jobber, Google, and Stripe are stored encrypted at rest using the application's encryption key.
- **NFR9:** Jobber, Twilio, Google, and Stripe webhook endpoints validate HMAC signatures on all inbound requests and reject requests with invalid signatures with HTTP 401.
- **NFR10:** Stripe payment card data is never stored or logged in ReviewPilot's systems; all payment processing is fully delegated to Stripe.

### Scalability

- **NFR11:** The SMS delivery pipeline supports 10,000 concurrently active sequences without measurable increase in trigger-to-send latency.
- **NFR12:** The webhook ingestion layer handles up to 100 simultaneous Jobber `job.completed` events per second without message loss, as measured by load testing before AppSumo launch.
- **NFR13:** The database schema and query patterns support 100,000 customer records per account without query performance degradation below NFR3 thresholds.

### Reliability

- **NFR14:** The system maintains 99.5% uptime during business hours (6AM–10PM US Eastern) as measured by an external uptime monitor, with a maximum of 3.6 hours of unplanned downtime per month during business hours.
- **NFR15:** Failed SMS deliveries (carrier rejection or timeout) are retried up to 3 times with exponential backoff (1 min, 5 min, 15 min) before the message is marked as failed and the service owner is notified.
- **NFR16:** If the GBP API is unavailable, the system falls back to the previously cached review URL; onboarding does not fail and existing review request messages continue to include the cached URL.
- **NFR17:** If a Jobber webhook delivery fails (ReviewPilot's webhook endpoint returns non-2xx), Jobber will retry the event per its retry policy. ReviewPilot's endpoint must be idempotent — processing the same `job_id` twice must not create duplicate sequences.

### Integration Reliability

- **NFR18:** Jobber OAuth tokens are refreshed transparently before expiration; service owners do not need to re-authenticate unless they explicitly revoke the connection.
- **NFR19:** Google OAuth tokens are refreshed transparently before expiration; a failed GBP token refresh logs an alert for the service owner but does not stop SMS sequence delivery.
- **NFR20:** Twilio/Telnyx delivery status webhooks (delivered, failed, undelivered) are processed within 5 minutes of receipt and reflected on the dashboard delivery rate metric.
