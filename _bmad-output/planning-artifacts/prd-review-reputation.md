---
stepsCompleted: [step-01-init, step-02-discovery, step-02b-vision, step-02c-executive-summary, step-03-success, step-04-journeys, step-05-domain, step-06-innovation, step-07-project-type, step-08-scoping, step-09-functional, step-10-nonfunctional, step-11-polish, step-12-complete]
inputDocuments:
  - ideas/shortlisted/reputation-review-management-local-businesses.md
  - _bmad-output/planning-artifacts/brief-review-reputation.md
workflowType: prd
classification:
  projectType: saas_b2b
  domain: smb_home_services
  complexity: medium
  projectContext: greenfield
research_type: prd
research_topic: review-reputation
user_name: Root
date: 2026-06-14
---

# Product Requirements Document — ReviewDrop

**Author:** Root
**Date:** 2026-06-14
**Status:** Complete

---

## Executive Summary

ReviewDrop is a dead-simple, SMS-first Google review automation tool built exclusively for single-location home service trades — plumbers, HVAC technicians, electricians, residential cleaners, and landscapers. The core product value is a single automated action: when a job is marked complete (via manual trigger, CSV upload, or Jobber webhook), the customer receives a personalized SMS with a direct Google review link within minutes of service completion. No funnels, no landing pages, no enterprise overhead.

The target user is a solo or small-team owner-operator (1–10 employees) running 10–50 jobs per week. They use Jobber, Housecall Pro, or a shared calendar and QuickBooks. They have 10–50 Google reviews while their competitors have 150–300. They know reviews matter to their ranking in Google's local 3-pack — they simply lack an automated system to collect them without changing their daily workflow.

The structural market opportunity: no purpose-built, trade-vertical, SMS-first review tool exists below the $75/month NiceJob floor. The $299–599/month range (Birdeye, Podium) is built for multi-location enterprise chains. The $4–25/month range offers email-only tools with no FSM integration and no trade-specific design. ReviewDrop occupies the vacated middle at $19–29/month SaaS or $49–69 one-time LTD — 3–15x cheaper than the next meaningful competitor at equivalent functionality.

**Go-to-market:** AppSumo LTD launch (targeting 500–1,000 sales at $49–$69 average = $25K–$70K upfront capital) followed by SaaS conversion and Jobber Marketplace listing.

**Build timeline:** ~2 weeks for MVP (Twilio + Google Business Profile API + lightweight web dashboard). Gross margin at $25/month SaaS: ~92% (SMS COGS < $2/month per standard-tier account).

### What Makes This Special

Three compounding advantages that NiceJob, Birdeye, and Podium cannot match without repricing their entire business:

1. **FSM-native triggers**: SMS fires automatically when a Jobber job status changes to "complete" — the owner changes nothing about their existing workflow. Competing tools require manual action or generic Zapier setups.
2. **Trade-specific language**: Message templates pre-written for HVAC, plumbing, electrical, cleaning, landscaping — not generic "Hi, we'd love your feedback" corporate filler that customers ignore.
3. **Price**: $19–29/month or $49–69 LTD. This is not a feature gap — it is a structural pricing gap that has persisted for years because enterprise vendors have no incentive to serve solos, and budget tools lack the integration depth and trade focus.

The timing advantage: the December 2025 acquisition of GatherUp and Grade.us by Insight Integrity Group created active evaluation windows among their combined 5,000+ customers. Jobber's 200,000+ user ecosystem has no affordable review tool in its app marketplace. Both windows are open simultaneously.

## Project Classification

- **Project Type:** SaaS B2B (web application; subscription + LTD; single-tenant data, multi-account platform)
- **Domain:** SMB Home Services — local trades (HVAC, plumbing, electrical, cleaning, landscaping)
- **Complexity:** Medium — Google Business Profile API compliance requirements, Twilio SMS delivery reliability, Jobber webhook integration, fair-use LTD cost management
- **Project Context:** Greenfield — no existing codebase

---

## Success Criteria

### User Success

A user has succeeded when their Google review count increases measurably within 30 days of setup — without them changing their daily workflow. The specific success signals:

- **Setup success**: User connects Google Business Profile, enters first customer, sends test SMS, and sees the direct review link — all within 15 minutes of signup
- **First review**: At least one new Google review appears within 72 hours of sending the first real review request
- **30-day outcome**: Account collects ≥ 20 new reviews in the first 30 days
- **Workflow invisibility**: User does not need to remember to do anything — review requests fire automatically from Jobber job completions
- **Negative review awareness**: Owner receives an alert within 30 minutes of a sub-3-star review appearing on their Google Business Profile

The primary emotional success signal: "I set it up once and new reviews just keep coming in."

### Business Success

**6-month targets:**

| Objective | Target |
|---|---|
| AppSumo LTD revenue | $25,000–$70,000 (500–1,000 sales at $49–$69) |
| SaaS MRR | $2,000–$3,000 (100 accounts at $19–$29/month) |
| Beta conversion rate (SMS → review) | ≥ 15% validated across 20+ accounts |
| Community presence | Named tool in ≥ 3 trade communities (r/HVAC, r/Plumbing, Jobber Users Facebook group) |

**12-month targets:**

| Objective | Target |
|---|---|
| SaaS MRR | $15,000+ |
| Monthly churn | < 3% |
| Jobber Marketplace listing | Live |
| LTD 6-month retention | ≥ 70% active |

**Break-even:** ~185 AppSumo LTD sales at $49 cover estimated 2-week MVP development cost equivalent.

### Technical Success

- SMS delivery rate ≥ 98% (Twilio delivery receipts)
- Review request → review posted conversion ≥ 15% in Month 1, ≥ 25% by Month 6
- Onboarding completion (signup to first SMS sent) < 15 minutes for ≥ 80% of users
- Dashboard page load < 2 seconds
- Jobber webhook processing latency < 60 seconds (job complete → SMS sent)
- Negative review alert delivery < 30 minutes from GBP review detection
- System uptime ≥ 99.5% (< 4 hours downtime per month)
- SMS COGS as % of SaaS revenue < 5% at $25/month tier (100 requests/month)

### Measurable Outcomes

**The north star metric:** Average new Google reviews per active account per 30 days.

Target trajectory: ≥ 20 new reviews/account/30 days by Month 3.

This single metric drives every downstream outcome — retention (stickiness is structural once the review flow is integrated), NPS (users who see real results share them), AppSumo rating (verifiable before/after review counts in listing description), and word-of-mouth in trade communities (shareable outcomes drive organic growth in tight-knit communities).

Secondary dashboard metrics tracked per account:
- Review request conversion rate (sent → review posted)
- Request delivery rate (sent → delivered)
- Time from signup to first review collected
- Negative review alert response time (alert sent vs. GBP response timestamp)

---

## Product Scope

### MVP — Minimum Viable Product

**MVP success gate:** 20 beta users each collect ≥ 5 new reviews within 30 days of signup, with an average SMS → review conversion rate of ≥ 15%.

**Core MVP capabilities:**

1. **SMS Review Request Engine** — Manual trigger (enter customer name + phone number → send), CSV batch upload, trade-specific message templates (HVAC/plumbing/electrical/cleaning/landscaping), direct Google review URL (no landing page), optional day-3 follow-up SMS, 90-day re-request throttle per customer
2. **Google Business Profile Integration** — OAuth connection, current review count pull, recent reviews (last 5), auto-generated direct review URL, new review detection for conversion tracking
3. **Owner Dashboard** — Review count delta since signup, recent review list, request history (sent/delivered/clicked/reviewed), conversion rate, negative review alert (< 3 stars triggers email + SMS to owner)
4. **Jobber Webhook Integration** — Endpoint that triggers SMS on Jobber job status → "complete"; guided setup (< 5 minutes, no code); tested on Jobber Pro+
5. **Onboarding Flow** — 5-step setup: GBP connect → test SMS → Jobber setup (optional) → confirmation screen; total time < 15 minutes

### Growth Features (Post-MVP)

Targeting V2 (Months 3–5) after AppSumo launch and SaaS conversion validation:

- **AI review response drafting** — One-click response suggestions tuned by trade vertical (plumber responses ≠ cleaning company responses)
- **Website review widget** — Embeddable carousel pulling live Google reviews, auto-updating
- **Social media auto-post** — One-click "share this 5-star review to Instagram/Facebook" from dashboard
- **Housecall Pro integration** — Native webhook (covers cleaning companies, general contractors)
- **ServiceTitan integration** — Native webhook (covers larger HVAC and plumbing operations)
- **Zapier integration** — Catch-all for any FSM not natively supported
- **Multi-platform routing** — Yelp, Houzz (contractors), Angi (home services) in addition to Google
- **Team accounts** — Multi-user access for businesses with office managers and field techs

### Vision (Future)

Targeting V3+ (Months 6–18):

- **Jobber Marketplace listing** — Official app integration surfacing ReviewDrop to 200,000+ Jobber users
- **White-label licensing** — Review module sold B2B2B to FSM SaaS vendors as a bolt-on feature
- **Review analytics** — Industry benchmarks ("the average HVAC company in your metro has X reviews — you have Y")
- **Verified job-completion badge** — Authenticate reviews as tied to real completed jobs (defensible trust signal as fake review detection evolves)
- **Video testimonial collection** — Tap growing visual review trend via SMS video link
- **Healthcare vertical expansion** — Zocdoc + Healthgrades + Google tri-platform routing for dental/chiro/medical
- **Canadian and Australian markets** — Same English-language Google ecosystem, minimal localization required

**Out of scope permanently:**

- Negative review pre-screening funnel (directs dissatisfied customers to private feedback instead of Google) — violates Google review policy; legal and reputational risk outweighs any benefit; excluded permanently
- SMS two-way chat — different product category; out of scope

---

## User Journeys

### Journey 1: Mike — Solo HVAC Tech, Jobber-Integrated Success Path

Mike runs a one-person HVAC company in a mid-size metro. He does 8–12 jobs per week using Jobber Pro. He has 23 Google reviews; his competitor has 187.

**Opening scene:** Mike loses a quote on a Wednesday afternoon. The prospect tells him: "We went with the other company — they had a lot more reviews on Google." Mike searches "how to get more Google reviews for HVAC" that evening and finds ReviewDrop through a Reddit post in r/HVAC from another tech who went from 30 reviews to 90 in 60 days.

**Discovery and signup:** Mike sees the $49 LTD price on AppSumo. He reads three community posts validating it works. He buys.

**Onboarding (< 15 minutes):** He connects his Google Business Profile via OAuth — one click, sees his current 23 reviews confirmed. He enters his first customer from yesterday's job — first name, phone number, trade (HVAC). He clicks "Send Test SMS." His own phone buzzes: "Hi Mike, thanks for trusting us with your AC repair today! We'd love your feedback: [direct Google link]." He smiles. He pastes the Jobber webhook URL into Jobber's settings — the guided setup takes 4 minutes. He's done.

**Core usage (invisible):** Two hours after Mike's next completed Jobber job, his customer gets a text automatically. Mike is already at his next call. He didn't do anything.

**Resolution:** Three weeks later, Mike checks his dashboard for the first time since setup. He has 41 Google reviews. He posts in the Jobber Users Facebook group: "ReviewDrop — went from 23 to 41 reviews in 3 weeks. Set it up in 15 minutes, hasn't cost me any time since. $49 once. Do it."

**Journey requirements revealed:** GBP OAuth connection, Jobber webhook processing, automated SMS send on trigger, dashboard with delta counter, trade-specific templates.

---

### Journey 2: Sarah — Cleaning Company Owner, Manual + Dashboard Path

Sarah runs a 5-tech residential cleaning company on Housecall Pro (not yet integrated in MVP). She has 45 Google reviews and wants 200+ to compete with franchise chains.

**Opening scene:** Sarah sees Mike's post in a cleaning Facebook group. She's paying $125/month for NiceJob and barely uses it. She buys ReviewDrop's Tier 2 LTD for $69.

**Onboarding:** GBP connected in two clicks. She tries the Jobber webhook — it doesn't apply (she's on HCP). She switches to the CSV upload path. She exports this week's completed jobs from HCP as CSV, uploads it to ReviewDrop (40 customers). The batch queue shows 40 requests ready to send. She reviews the preview — HVAC template isn't right. She selects "Cleaning" template. Sends. Done in 12 minutes.

**Core usage (weekly cadence):** Every Friday, Sarah exports the week's completed cleans from HCP and uploads the CSV. 5 minutes, once a week, 40 review requests sent.

**Crisis moment:** Tuesday 9am, Sarah gets an alert: "New 2-star review: 'Cleaners left a window open.'" She reads the reviewer's name, recognizes the customer, calls within 20 minutes, and resolves it with a free re-clean. The customer updates their review to 4 stars.

**Resolution:** After 60 days, Sarah is at 93 reviews. Her conversion rate is 22%. She cancels NiceJob. She shares her "before/after" screenshot in the Facebook group — becomes ReviewDrop's most-cited case study for the AppSumo listing.

**Journey requirements revealed:** CSV batch upload, trade template selection, batch queue preview, negative review alert with star rating + review snippet, alert via email and SMS.

---

### Journey 3: Dan — Non-FSM Plumber, Friction-Tolerant Manual Path

Dan runs a plumbing operation with 2 employees. He uses Google Calendar and QuickBooks, no FSM. He has 14 Google reviews and has started losing calls to the 4.8-star competitor with 230 reviews.

**Opening scene:** Dan's wife shows him a local Facebook ad for ReviewDrop ("Get more Google reviews automatically"). $49 feels like a gamble but it's less than one service call.

**Onboarding:** Dan struggles with "OAuth." He clicks the Google connect button and is confused by the permission screen. ReviewDrop's help text says "Click Allow — this lets us see your Google reviews." He clicks Allow. He sees his 14 reviews confirmed. He manually enters his customer from yesterday's emergency call — first name, phone, trade (plumbing). He sends. The SMS is sent. He's done. Jobber webhook step: he skips it (no Jobber account). The app says "You can still send manual requests anytime."

**Core usage:** Dan texts his customers one at a time from the dashboard. It takes 30 seconds per customer. He aims for 5 per day. It's not fully automated — but it's better than forgetting entirely.

**Pain point discovered:** Dan sends 3 requests to the same customer across 3 months. The customer is annoyed. Dan logs a support ticket. This reveals the 90-day re-request throttle is essential and must be enforced per-phone-number, not per-name.

**Resolution:** After 45 days, Dan has 29 reviews. Not as fast as Mike's automated flow, but 2x growth. He tells his supplier rep about it at a parts counter. The supplier rep mentions it to 3 other plumbers.

**Journey requirements revealed:** Manual one-at-a-time trigger, clear FSM-optional onboarding, 90-day throttle enforced at the phone number level, duplicate send prevention, simple non-technical UX for GBP OAuth.

---

### Journey 4: Negative Review Early Warning — Owner Response Path

**Trigger:** Any active ReviewDrop account receives a Google review with 1 or 2 stars.

**System behavior:** GBP API detects the new review during its polling cycle (every 30 minutes). ReviewDrop identifies it as below 3 stars. It immediately sends:
- Email to the account owner: "[Alert] New 2-star review on your Google listing — click to view and respond"
- SMS to the owner's phone: "New 2-star review: '[first 100 chars of review text]' — respond now: [GBP respond link]"

**Owner response path:** Owner sees alert on their phone within 30 minutes. Clicks link. Goes directly to the Google review response interface. Types response (or uses ReviewDrop's AI draft in V2). Posts response.

**Business impact:** 73% of consumers say owner responses to negative reviews affect their perception. Responding within hours signals the business takes service quality seriously — and can convert the reviewer to update their rating.

**Journey requirements revealed:** GBP review polling (30-minute interval), sub-3-star detection logic, dual-channel alert (email + SMS), direct link to GBP response interface, owner contact info stored per account.

---

### Journey 5: Owner Dashboard — Weekly Pulse Check

**Trigger:** Business owner wants to see if ReviewDrop is working.

**Scenario:** It's Sunday evening. Mike has had ReviewDrop running for 3 weeks. He opens the dashboard.

**What he sees:**
- Review count: 41 (was 23 at signup — +18 shown in green)
- Conversion rate: 19% (requests sent → reviews posted)
- Last 5 reviews (star rating + first 100 chars each)
- Request history: 94 sent, 91 delivered (3 failed — carrier filtering on one landline, 2 undeliverable numbers)
- No open alerts (no negative reviews this week)

**What he does:** Nothing. He closes the tab. The product has delivered its value silently. He doesn't need to take action.

**Alternate path (failed delivery):** He notices 3 failed deliveries. He clicks "Failed" row. Sees the three numbers. One is his customer Jim — Dan recognizes it as Jim's office landline, not his cell. He manually enters Jim's cell number and resends.

**Journey requirements revealed:** Dashboard with review delta (since signup), conversion rate display, recent review list (5 items), request history with delivery status breakdown, failed delivery details with resend option.

---

### Journey Requirements Summary

Capabilities revealed across all journeys:

| Capability Area | Journeys That Reveal It |
|---|---|
| Google Business Profile OAuth connection | J1, J2, J3 |
| Direct Google review URL generation | J1, J2, J3 |
| Manual single-customer SMS trigger | J1, J3 |
| CSV batch upload and queue | J2 |
| Jobber webhook receiver | J1 |
| Trade-specific SMS templates | J1, J2 |
| 90-day per-phone-number throttle | J3 |
| GBP review polling and new review detection | J4, J5 |
| Negative review alert (email + SMS) | J4, J2 |
| Dashboard with review count delta | J1, J5 |
| Request history with delivery status | J5 |
| Failed delivery details + resend | J5 |
| Onboarding flow (< 15 minutes) | J1, J2, J3 |

---

## Domain-Specific Requirements

### Google API Compliance

ReviewDrop's entire business model depends on maintaining Google's trust. Non-compliance risks API key revocation and product death.

**Absolute constraints:**
- Never gate or filter customers before sending them to Google — all customers receive the same direct Google review link regardless of any signal about likely rating
- No negative review pre-screening funnels — no "how was your experience?" pre-filter that routes unhappy customers to private feedback instead of Google
- No review incentivization language in SMS templates ("Leave a review and get $5 off your next service" is prohibited)
- SMS messages must not falsely imply the review is required for warranty, continued service, or any other obligation

**Implementation approach:**
- All message templates reviewed against Google review policy before launch
- Template editing by users is allowed within guardrails (cannot add incentive language)
- Single direct URL to Google review form — no intermediate landing pages

### SMS Compliance (TCPA / CAN-SPAM)

US-based SMS review requests are regulated under TCPA. The risk is low (business-to-customer transactional communication immediately post-service) but must be handled correctly.

**Requirements:**
- Each review request SMS must have an opt-out path ("Reply STOP to opt out")
- Opted-out phone numbers must be persisted per account and never re-messaged
- SMS must be sent within a reasonable post-service window (templates reflect recent service context)
- No bulk cold-prospecting messages — all recipients must be customers who recently received service from the business

**LTD fair-use:**
- Tier 1 LTD (100 requests/month) — enforced at send time; requests above cap are queued and held to next billing cycle
- Tier 2 LTD (500 requests/month) — same enforcement logic
- Overage handling: account owner alerted at 80% cap usage; can purchase SMS top-up bundles at cost + 20% margin

### Twilio Dependency

ReviewDrop routes all SMS through Twilio. Twilio is a single point of failure at the infrastructure layer.

**Requirements:**
- Each ReviewDrop account sends from a provisioned Twilio phone number (not shared sender) — improves deliverability and prevents one account's spam behavior from affecting others
- Twilio delivery webhooks must be consumed and stored per request (delivered/failed/undelivered status)
- Failed deliveries must be surfaced in the owner dashboard within 5 minutes of Twilio webhook receipt
- Carrier filtering (T-Mobile/AT&T blocking review request SMS) is a known risk — mitigation is using A2P 10DLC registration (required for US business messaging at scale since 2023)

---

## Innovation & Novel Patterns

### Detected Innovation Areas

ReviewDrop's innovation is not algorithmic or AI-driven — it is structural and distribution-focused. Three genuine innovation signals:

**1. FSM Webhook-as-Trigger Pattern**

No review tool under $75/month has built native, webhook-native integration with field service management platforms (Jobber, Housecall Pro, ServiceTitan). The dominant pattern among cheap review tools is "manually remember to send a request." ReviewDrop replaces a human memory requirement with a system trigger. This is behavioral innovation — removing the behavior from the human entirely rather than making it easier.

The specific insight: the highest-converting review request window (1–2 hours post-service) is exactly when the business owner is least likely to remember. Jobber's job completion status change is a machine-generated event at precisely that moment. Connecting these two facts creates a system that performs better than manual effort without requiring any better habits.

**2. Trade-Vertical Language Specificity**

Generic review tools send "Hi [Name], we'd love your feedback on your recent experience!" — which registers as spam to customers who have been receiving it from every local business for years.

ReviewDrop's innovation is template specificity: "Hi Mike, thanks for trusting us with your AC repair today!" lands differently than "thanks for your recent service." The specificity signal (trade type, job type implied) increases open rate and click-through because it reads as personal, not automated. This is a low-tech innovation that competitors don't replicate because their general-purpose design prevents trade-specific customization.

**3. LTD Economics for SMB SaaS Infrastructure**

AppSumo LTD as a capital-generation mechanism for building FSM integrations is itself an innovation in go-to-market. The upfront capital from 500–1,000 LTD sales ($25K–$70K) funds the integration engineering work (Jobber webhook, HCP, ServiceTitan) that in turn justifies the higher ongoing SaaS price for new customers. LTD buyers become the integration-validation beta cohort. This is a capital-efficient path to building a multi-integration platform without VC funding.

### Market Context & Competitive Landscape

The December 2025 GatherUp/Grade.us acquisition by Insight Integrity Group is the key external event. GatherUp had 3,000+ customers, Grade.us had 2,000+. Both were primary tools for SMB review management in the $99–$149/month tier. The acquisition created:
- Product uncertainty (roadmap freeze periods are common post-acquisition)
- Pricing uncertainty (often rises post-acquisition)
- Support quality concerns (integration periods degrade support)

This creates a 6–12 month evaluation window where these 5,000+ customers are actively looking for alternatives. ReviewDrop's price point ($49 LTD) removes the switching cost friction entirely.

### Validation Approach

Beta validation targets:
- 20 accounts, 30-day window
- Conversion rate ≥ 15% SMS → review (validates core hypothesis)
- ≥ 5 accounts with documented 20+ new reviews in 30 days (AppSumo case study candidates)

Secondary validation: post 3 community posts in r/HVAC, r/Plumbing, Jobber Users group with real results before AppSumo launch. Community validation is the primary trust signal for this audience — they are highly skeptical of marketing claims and highly responsive to peer reports.

### Risk Mitigation

**Google API policy changes:** Build for compliance-first from day one. No review gating, no incentivization, all customers go directly to Google review form. This means if Google tightens policy, ReviewDrop is already on the right side.

**SMS carrier filtering:** Register for A2P 10DLC (Application-to-Person 10-Digit Long Code) on Twilio at launch. This is mandatory for US business SMS at scale and improves deliverability from ~70% unregistered to ~98% registered.

**Low defensibility / clone risk:** FSM integration depth and trade community brand trust are the moats. A clone takes 2 weeks to build the same product — it takes 12 months to replicate the brand trust in tight-knit trade communities like the Jobber Users group (18,000+ members) or r/HVAC (480,000+ members).

---

## SaaS B2B Specific Requirements

### Multi-Account Architecture

ReviewDrop is a multi-tenant SaaS where each account represents one business location with one Google Business Profile.

**Tenant isolation requirements:**
- Each account has its own Twilio phone number (no shared senders)
- GBP OAuth tokens stored per account (scoped to that business's GBP only)
- SMS send logs, customer lists, and review history scoped to account — never cross-tenant accessible
- Account deletion must cascade: revoke GBP OAuth, release Twilio number, delete all customer phone numbers (PII)

**Account types (MVP):**
- Single location business account (primary)
- Admin account for ReviewDrop operators (internal — manage LTD caps, billing, support)

### Authentication

- Email + password authentication at MVP (simplest path for non-technical SMB owners)
- Password reset via email
- Sessions expire after 30 days of inactivity
- V2: Google SSO (natural since GBP OAuth is already required)

### Subscription & LTD Management

**LTD tiers:**
- Tier 1 ($49): 100 SMS review requests per calendar month; Google integration; manual trigger; CSV upload; dashboard
- Tier 2 ($69): 500 SMS review requests per calendar month; all Tier 1 features; Jobber webhook integration; negative review alerts; AI response drafting (V2)

**SaaS tiers (post-LTD):**
- Starter ($19/month): 100 SMS/month; manual + CSV; dashboard
- Pro ($29/month): 500 SMS/month; Jobber webhook; negative review alerts

**Billing:**
- Stripe for SaaS subscription billing
- AppSumo LTD codes redeemed via code entry at signup (no Stripe subscription created for LTDs)
- SMS overage top-ups purchasable à la carte ($5 per 100 additional requests)

### Permissions & Access Control (MVP)

Single-owner account model for MVP:
- Account owner has full access to all features
- No team members / multi-user in MVP
- V2: add "team member" role (read-only dashboard access, cannot send SMS, cannot change settings)

### Jobber Webhook Integration

**Technical flow:**
1. ReviewDrop provides the business owner a unique webhook URL per account (e.g., `https://app.reviewdrop.io/webhooks/jobber/{account_token}`)
2. Owner adds URL to Jobber's webhook settings (Jobber Pro+)
3. Jobber sends POST on job status change
4. ReviewDrop webhook handler receives event, checks if status = "completed", extracts customer name + phone from payload, checks 90-day throttle, queues SMS send
5. SMS sent via Twilio within 60 seconds of webhook receipt

**Webhook security:** Account token in URL is 32-character random string (HMAC signature validation added if Jobber supports it)

**Failure handling:** Failed webhook deliveries logged; if Twilio returns non-200, retry up to 3x with exponential backoff; failed after 3 attempts surfaced in dashboard as "failed delivery"

---

## Project Scoping & Phased Development

### MVP Strategy & Philosophy

**MVP approach:** Problem-solving MVP. The minimum that makes a user say "this is useful" is: one SMS sent to one customer that results in one Google review, with no ongoing effort from the business owner beyond initial setup.

**Resource requirements:** 1 developer, 2 weeks, ~$500 in infrastructure (Twilio dev account, GBP API setup, hosting). No designer required at MVP (functional dashboard > beautiful dashboard for this audience).

**MVP philosophy:** Ship the single most impactful action (job completion → SMS → review) and validate it works before building anything else. Every feature beyond that single action is V2+.

### MVP Feature Set (Phase 1)

**Core user journeys supported:**
- Manual trigger (J3 — Dan's path)
- CSV batch upload (J2 — Sarah's path)
- Jobber webhook auto-trigger (J1 — Mike's path)
- Negative review alert (J4)
- Dashboard pulse check (J5)

**Must-have capabilities:**
- Google Business Profile OAuth connection
- SMS send via Twilio (manual, CSV, webhook trigger paths)
- Trade-specific templates (5 verticals: HVAC, plumbing, electrical, cleaning, landscaping)
- 90-day per-phone-number throttle
- STOP/opt-out handling
- GBP review polling (30-minute intervals)
- Sub-3-star alert via email + SMS
- Dashboard: review count delta, request history, conversion rate, recent reviews
- Onboarding: 5-step guided flow (< 15 min)
- Jobber webhook endpoint
- LTD tier enforcement (Tier 1: 100/mo, Tier 2: 500/mo)
- AppSumo code redemption

### Post-MVP Features

**Phase 2 (Months 3–5) — Growth:**
- AI review response drafting (one-click per trade vertical)
- Website review widget (embeddable carousel)
- Social media auto-post (Instagram/Facebook from 5-star reviews)
- Housecall Pro webhook integration
- Zapier integration (catch-all for non-native FSM)
- Multi-platform routing (Yelp, Houzz, Angi)
- Google SSO login
- Team member role (read-only)

**Phase 3 (Months 6–18) — Expansion:**
- ServiceTitan integration
- Jobber Marketplace official listing
- White-label / reseller mode
- Multi-location account support
- Review analytics with industry benchmarks
- Verified job-completion badge
- Healthcare vertical (Zocdoc, Healthgrades)
- Canadian/Australian market

### Risk Mitigation Strategy

**Technical risks:**
- GBP API rate limits → implement exponential backoff and per-account polling cadence; GBP API allows 15,000 requests/day which is more than sufficient for 1,000 accounts
- Twilio carrier filtering → A2P 10DLC registration required at launch; budget $400 one-time registration fee
- Jobber webhook payload changes → build webhook handler with schema validation and version-tolerant parsing; test against Jobber sandbox

**Market risks:**
- Conversion rate below 15% hypothesis → validate with 20 beta users before AppSumo launch; if below 10%, A/B test message templates before scaling
- AppSumo refund rate → require 5 documented case studies with real before/after review counts in listing; demo video showing live review count increase

**Resource risks:**
- Solo developer gets blocked → FSM webhook and GBP API both have well-documented SDKs; Twilio SMS is 3 lines of code; the risk is in GBP OAuth complexity, which can be mitigated by using an existing OAuth library (Passport.js or similar)
- LTD SMS cost overrun → tier enforcement is hard cap, not soft warning; add automated cost monitoring (alert if any account's monthly SMS cost exceeds $15)

---

## Functional Requirements

### Account & Authentication

- FR1: Business owner can create a ReviewDrop account with email and password
- FR2: Business owner can reset their password via email
- FR3: Business owner can connect their Google Business Profile via OAuth
- FR4: Business owner can disconnect and reconnect their Google Business Profile
- FR5: Business owner can redeem an AppSumo LTD code to activate their account tier
- FR6: Business owner can view their current plan tier and monthly SMS usage/cap

### Review Request Engine

- FR7: Business owner can send a review request SMS to a single customer by entering their name, phone number, and trade type
- FR8: Business owner can upload a CSV of customer name/phone/trade records to queue batch review requests
- FR9: Business owner can preview the SMS message content (with their business name and trade type filled in) before sending
- FR10: Business owner can select from pre-written SMS templates for five trade verticals (HVAC, plumbing, electrical, cleaning, landscaping)
- FR11: System prevents sending a review request to any phone number that received a request within the last 90 days
- FR12: System prevents sending a review request to any phone number that has opted out (replied STOP)
- FR13: Customer receives a review request SMS containing their first name, trade context, and a direct one-tap Google review URL
- FR14: System sends an optional day-3 follow-up SMS to customers who have not posted a review, if the owner has enabled follow-ups
- FR15: System processes Jobber webhook events and automatically sends a review request SMS when a job status changes to "complete"
- FR16: Business owner can view their unique Jobber webhook URL in the integration settings
- FR17: Business owner can temporarily pause all automatic review request sends without deleting integration settings

### Google Business Profile Integration

- FR18: System displays the business owner's current Google review count immediately after GBP connection
- FR19: System generates and stores the direct Google review URL for the business (no intermediate landing page)
- FR20: System polls the connected GBP every 30 minutes to detect new reviews
- FR21: System displays the 5 most recent Google reviews in the owner dashboard (star rating, reviewer name, review snippet)
- FR22: System tracks which review requests resulted in new reviews (matches timing of request send to review post date within 7-day window)

### Negative Review Alerts

- FR23: System detects when a new Google review with a rating below 3 stars is posted on the connected GBP
- FR24: System sends an email alert to the account owner within 30 minutes of detecting a sub-3-star review, containing the star rating, reviewer name, and review text excerpt
- FR25: System sends an SMS alert to the account owner's registered phone number for sub-3-star reviews
- FR26: Alert SMS and email contain a direct link to the Google Business Profile review response interface
- FR27: Business owner can configure their alert phone number separately from the business's customer contact settings

### Owner Dashboard

- FR28: Business owner can view total Google review count at account connection and the delta (new reviews) since they connected ReviewDrop
- FR29: Business owner can view review request conversion rate (requests sent vs. reviews attributed)
- FR30: Business owner can view a history of all review requests sent, with status (queued, sent, delivered, failed, review posted)
- FR31: Business owner can view delivery failure details (failed phone numbers, failure reason from Twilio)
- FR32: Business owner can manually resend a review request to a previously failed delivery if the 90-day throttle has not been triggered
- FR33: Business owner can view monthly SMS usage against their plan cap

### Onboarding

- FR34: New user is guided through a 5-step onboarding flow: GBP connect → send test SMS → optional Jobber setup → confirmation screen
- FR35: System shows a live preview of the SMS message in the onboarding flow before the user sends their first real request
- FR36: System confirms successful Jobber webhook configuration with a test event during onboarding

### Compliance & Administration

- FR37: Customer can opt out of future review request SMS by replying STOP; opt-out is stored per phone number per account
- FR38: System enforces monthly SMS send cap per account tier; sends above cap are blocked (not silently dropped) and the owner is notified
- FR39: Business owner receives an in-app and email notification when their account reaches 80% of monthly SMS cap
- FR40: Account owner can export their full customer request history as CSV (name, phone, date sent, delivery status, review posted Y/N)
- FR41: Account owner can delete their account and all associated customer data (cascades to GBP OAuth revoke, Twilio number release, customer PII deletion)

---

## Non-Functional Requirements

### Performance

- Dashboard pages load in < 2 seconds on a standard broadband connection (page weight < 500KB)
- Jobber webhook receipt to SMS send: < 60 seconds end-to-end
- GBP review poll cycle: every 30 minutes; alert delivery < 30 minutes from review detection
- Batch CSV processing: 500-row CSV processed and queued within 30 seconds of upload
- API response times for user-initiated actions (send request, load dashboard): < 1 second p95

### Security

- All customer phone numbers stored encrypted at rest (AES-256)
- GBP OAuth refresh tokens stored encrypted at rest
- Twilio account credentials never exposed in client-side code or API responses
- HTTPS enforced on all endpoints (no HTTP fallback)
- Webhook endpoint tokens are 32-character random strings; rotatable by account owner
- Account deletion cascades to all customer PII within 24 hours (GDPR-aligned)
- Failed login attempts rate-limited (5 attempts per 15 minutes per IP)

### Scalability

- MVP must support 1,000 concurrent accounts without architecture changes
- SMS send queue must handle 500 sends/minute at peak (AppSumo launch day with all Tier 2 LTD accounts sending at once)
- GBP polling must scale to 1,000 accounts × 30-minute intervals = ~33 polls/minute without hitting GBP API rate limits
- Architecture must support 10x account growth (10,000 accounts) with horizontal scaling of webhook processing workers

### Integration

- Twilio delivery webhooks must be consumed within 5 seconds of delivery event (ensures dashboard delivery status is near-real-time)
- GBP API usage must stay within quota limits (15,000 requests/day per project); implement per-account rate limiting and backoff
- Jobber webhook payload must be processed idempotently (duplicate webhook deliveries from Jobber must not result in duplicate SMS sends)
- AppSumo code redemption API must be called at account activation to validate code validity and tier assignment
- Stripe webhook must be consumed for subscription lifecycle events (created, cancelled, payment failed)

### Reliability

- System uptime: ≥ 99.5% (< 4 hours downtime per month)
- SMS queues must be durable: if the application server goes down, queued requests must not be lost (use persistent queue, not in-memory)
- GBP poll failures (API rate limit, temporary outage) must be retried with exponential backoff; owner is not alerted for transient failures
- Twilio send failures (non-delivery) must be retried up to 3 times with exponential backoff; permanent failures surfaced in dashboard

