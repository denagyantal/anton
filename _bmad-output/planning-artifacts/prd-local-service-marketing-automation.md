---
stepsCompleted: [step-01-init, step-02-discovery, step-02b-vision, step-02c-executive-summary, step-03-success, step-04-journeys, step-05-domain, step-06-innovation, step-07-project-type, step-08-scoping, step-09-functional, step-10-nonfunctional, step-11-polish, step-12-complete]
inputDocuments:
  - ideas/shortlisted/local-service-marketing-automation.md
  - _bmad-output/planning-artifacts/market-research-local-service-marketing-automation.md
  - _bmad-output/planning-artifacts/brief-local-service-marketing-automation.md
workflowType: prd
research_topic: local-service-marketing-automation
user_name: Root
date: '2026-05-23'
classification:
  projectType: saas_b2b
  domain: marketing_automation
  complexity: medium
  projectContext: greenfield
documentCounts:
  briefCount: 1
  researchCount: 1
  brainstormingCount: 0
  projectDocsCount: 0
---

# Product Requirements Document — Local Service Marketing Automation

**Author:** Root
**Date:** 2026-05-23

---

## Executive Summary

Local service businesses (lawn care, HVAC, cleaning, pest control, auto detailing) accumulate warm customer lists inside their field service management (FSM) software — Jobber, Housecall Pro, ServiceTitan — that go entirely untouched between jobs. This dormant-list problem is a silent revenue leak: past customers who trust the business and would rebook if prompted never receive a single outreach.

**Local Service Marketing Automation** is a webhook-native, template-first SaaS that plugs directly into the FSMs where customer data already lives, and fires pre-built, trade-specific campaign sequences automatically: spring reactivation, post-service review requests, seasonal tune-up reminders, and win-back sequences for dormant customers. No marketing knowledge required. Setup under 15 minutes.

The addressable market is 5M+ US local service businesses. The pricing gap is stark: Podium starts at $399/mo, Broadly at $249/mo, and ServiceTitan Marketing Pro at $200–600/mo. This product enters at $39/mo — 5–20x cheaper than category alternatives — with a go-to-market anchored on AppSumo ($199 LTD) to acquire 500–1,000 validated customers before building an MRR engine.

### What Makes This Special

The quadrant occupied by this product is genuinely unowned: (a) FSM webhook integration + (b) trade-specific campaign copy + (c) price under $50/mo + (d) setup under 30 minutes. No existing product combines all four.

The core insight is that FSMs are the customer data source of truth for local service businesses, but zero FSMs at this price tier offer automatic outbound marketing from that data. Mailchimp is free but generic and requires manual list exports. Podium and Broadly are review-focused, expensive, and annual-contract. The "FSM-native" framing reframes the product not as a competitor to email tools but as an activation layer on top of software the customer already uses and trusts.

The trade-specific template library is the moat. A lawn care owner cannot use a generic email marketing template — they don't know how to write copy. Pre-written "spring is coming, ready to get back on the schedule?" language means zero activation friction: connect FSM, select trade, press go. The product's demo story is also its onboarding story.

## Project Classification

- **Project Type:** SaaS B2B (small business)
- **Domain:** Marketing automation / local services vertical
- **Complexity:** Medium — email compliance (CAN-SPAM), FSM OAuth/webhook integrations, deliverability infrastructure, Stripe billing
- **Project Context:** Greenfield — no existing codebase

---

## Success Criteria

### User Success

The primary user success event — the single metric that drives retention and advocacy — is: **a past customer receives a campaign and books a job within 30 days**.

User success is measured at this moment. Everything before it (setup time, campaign activation) is pre-success. Everything after it (repeat bookings, review volume, referrals) is post-success compounding. The product must optimize for the time between activation and first reactivation.

Secondary user success states:
- Business owner completes FSM connection and sees their customer list populated within the onboarding session
- First campaign activates with a confirmation showing target audience count and scheduled send date
- Business owner receives notification of inbound contacts from a campaign without checking a dashboard
- Google review count increases measurably within 60 days of activating post-service review request campaign

**Key user success metrics:**

| Metric | Definition | Target |
|--------|------------|--------|
| Time to first campaign live | Minutes from signup to first campaign activated | < 15 minutes |
| Reactivation rate | % of targeted dormant customers who book within 30 days | 5–15% |
| Review velocity | Increase in Google/Yelp reviews per month after activation | 3× baseline |
| Campaign activation rate | % of new users who activate at least 1 campaign | > 70% |
| Aha moment rate | % of activated users who see an inbound contact from a campaign within 30 days | > 40% |

### Business Success

**3-Month Goals:**
- 500+ LTD customers acquired via AppSumo
- 50+ verified reviews on AppSumo and G2
- < 5% monthly churn on customers who completed setup
- Product-market fit signal: 40%+ of activated customers report a reactivated booking

**6-Month Goals:**
- 200+ MRR customers at $39/mo ($7,800+ MRR)
- Housecall Pro integration live (most underserved FSM segment)
- 3–5 case studies with quantified outcomes
- SEO ranking for "Jobber marketing automation" and "HVAC email marketing" in top 10

**12-Month Goals:**
- 1,000+ MRR customers (~$50K MRR)
- SMS tier launched
- Recognized in r/sweatystartup, r/lawncare as the go-to marketing tool for service businesses

### Technical Success

- Email deliverability rate ≥ 95% (Mailgun/SendGrid infrastructure)
- FSM webhook processing latency < 60 seconds from event to campaign trigger evaluation
- Web application availability ≥ 99.5% uptime
- Onboarding flow completion rate > 60% (users who begin FSM OAuth and complete first campaign activation)
- Zero CAN-SPAM violations — all emails must include unsubscribe link and physical address

### Measurable Outcomes

**Leading indicator:** % of newly activated customers who receive an inbound contact (reply, call, booking) from a dormant customer within 30 days. Target: 40%+. This single metric predicts 90-day retention better than any other.

**Churn signal:** Customers who complete setup but see zero campaign activity in month 1 churn at 4× the rate of customers who activate a campaign. Onboarding must push to campaign activation, not just FSM connection.

**Revenue signal:** If AppSumo sales reach 100 but plateau below 300 within 30 days of launch, conduct customer interviews to identify blockers before Phase 2 investment.

---

## Product Scope

### MVP — Minimum Viable Product

Email-only campaigns. Jobber OAuth integration. Five pre-built trade-specific campaigns. One pricing tier. Up to 5,000 contacts per account.

**MVP is validated when any two of the following are met:**
1. 500 LTD sales on AppSumo within 60 days of launch
2. 40%+ of customers who activate a campaign receive an inbound contact from a dormant customer within 30 days
3. < 5% monthly churn on activated customers after 90 days

### Growth Features (Post-MVP)

- Housecall Pro integration (Month 3–4, highest priority — weakest native marketing of all FSMs)
- ServiceTitan integration (Month 5–6)
- Expanded campaign library: 15+ templates (HVAC, pest control, detailing, pressure washing)
- $39/mo MRR subscription model scaling alongside LTD base
- Trade vertical SEO content strategy

### Vision (Future)

- SMS campaigns with full 10DLC/TCPA compliance infrastructure ($79/mo tier)
- Campaign performance analytics with estimated revenue attribution
- Seasonal campaign calendar: full-year pre-scheduled campaigns by trade
- Campaign template marketplace (user-generated content, network effects)
- Agency/white-label tier for marketing agencies serving 10–50 service businesses
- Zapier integration for non-native FSMs (ServiceM8, mHelpDesk, FieldEdge)
- AI-generated campaign copy tailored to individual business data
- International markets (Canada, Australia, UK)

---

## User Journeys

### Journey 1: Jake — Lawn Care Operator (Primary User, Happy Path)

Jake runs a 3-crew lawn care business doing $350K/yr on Jobber. He has 180 past clients, a dozen of whom haven't rebooked. Every March he knows he should send a "spring is coming" email. He never does because he tried Mailchimp once, spent 2 hours, and gave up.

**Discovery:** Jake is scrolling r/sweatystartup on a Tuesday evening. Someone posts about getting 6 new bookings from a $39 tool in one week. He reads comments, clicks the link, and lands on the pricing page. He sees "connects to Jobber in 5 minutes" — this matters because he actually uses Jobber. He sees a template preview for spring lawn reactivation with pre-written copy. He sees $39/mo. He signs up.

**Onboarding:** Jake clicks "Connect Jobber," completes the OAuth flow, and his 182 contacts appear immediately. He sees a campaign labeled "Spring Reactivation — Lawn Care." He previews the email, changes one word, clicks "Activate." The system shows him a confirmation: "This will send to 42 customers who haven't booked in 90+ days starting next Monday." Total setup: 11 minutes.

**First Win:** Thursday, Jake gets a notification: "Your Spring Reactivation campaign has been opened 31 times. 4 customers have replied." Three voicemails and a text asking to get on his schedule. $1,800 in recurring bookings from 11 minutes of setup.

**Retention:** Jake pays $39/mo without thinking about it. He activates fall cleanup reminders in September and win-back sequences in January. He becomes a r/sweatystartup case study. He refers 3 additional customers through an organic referral link.

*Capabilities revealed: FSM OAuth connection, customer sync, campaign preview, one-click activation, audience confirmation screen, notification on campaign activity, sequential/automated campaign sending, referral mechanism.*

---

### Journey 2: Maria — HVAC Shop Owner (Primary User, Higher Value Segment)

Maria runs a 6-tech HVAC company on Jobber doing $1.8M/yr. She wants two things: AC tune-up reminders each April to existing customers, and automatic review requests after every service call. She's paying a marketing agency $800/mo for "digital marketing" she can't measure.

**Discovery:** A competitor HVAC company mentions in a local contractors Facebook group that they automated seasonal reminders and filled their April schedule. Maria finds the tool, sees the HVAC campaign library, and calculates: $39/mo vs. $800/mo agency. She signs up for the trial.

**Onboarding:** Maria connects Jobber, selects "HVAC" as her trade. She sees the campaign library: Spring AC Tune-Up, Post-Service Review Request, Fall Furnace Check. She previews the AC tune-up email — it already mentions HVAC, mentions seasonal maintenance, sounds professional. She activates it for her 400 past customers. She also activates the post-service review request.

**Revenue Impact:** Three weeks later, 22 customers have booked AC tune-ups from the spring campaign. Her review count is rising — 3 new Google reviews in one week vs. 1 per month before.

**Long-term:** Maria cancels the marketing agency. She's spending $39/mo on the tool and getting measurable results.

*Capabilities revealed: Trade-specific campaign library (HVAC), webhook-triggered post-service campaign, post-job review request automation, campaign metrics, customer segmentation by job type/history.*

---

### Journey 3: David — Cleaning Service Owner (Primary User, Review-Focused)

David runs a residential cleaning service on Housecall Pro doing $280K/yr. He has 95 active recurring clients and 60 dormant ones. He wants automated review requests and a win-back sequence. NiceJob felt like overkill at $75/mo for just reviews.

**Discovery:** David sees the AppSumo deal — $199 once vs. $75/mo forever for just reviews. He calculates: 2-year payback is better than NiceJob at month 3. He redeems.

**Onboarding (HCP — v2 flow):** David connects Housecall Pro, selects "Cleaning." He activates post-service review request and the 90-day win-back sequence. Within 60 days, his review count goes from 14 to 67. Three dormant clients rebook.

*Capabilities revealed: AppSumo LTD redemption, Housecall Pro OAuth integration, win-back sequence automation, review request timing, unsubscribe handling.*

---

### Journey 4: New User — Failed Onboarding Recovery (Edge Case)

A pest control owner signs up but stalls during FSM connection — their ServiceTitan account requires admin-level OAuth permissions they don't have. They abandon onboarding mid-flow.

**System behavior:** 48 hours later, the system sends a re-engagement email: "Still getting started? Here's a 2-minute guide to getting the right permissions in ServiceTitan." The email links to a step-by-step permissions guide. The owner completes setup the next day.

*Capabilities revealed: Onboarding abandonment detection, re-engagement email trigger, FSM-specific setup guides, error state handling in OAuth flow.*

---

### Journey 5: Business Owner — Campaign Compliance & Control

A lawn care owner activates spring reactivation, then realizes two customers on the list asked to stop being contacted. They need to verify those customers are excluded.

**System behavior:** The owner views their customer list, sees unsubscribed customers flagged and excluded from active campaigns. They can manually mark additional customers as do-not-contact. They can also view the unsubscribe history.

*Capabilities revealed: Unsubscribe list management, manual exclusion, do-not-contact flag, campaign audience audit view.*

---

### Journey Requirements Summary

| Journey | Core Capabilities Required |
|---------|---------------------------|
| Jake — lawn care happy path | FSM OAuth, customer sync, campaign preview, one-click activate, audience confirmation, activity notification |
| Maria — HVAC high value | Trade-specific library, webhook-triggered campaigns, post-job review automation, campaign metrics |
| David — cleaning/AppSumo | AppSumo LTD redemption, HCP integration, win-back automation, review request timing |
| Failed onboarding recovery | Abandonment detection, re-engagement email, FSM setup guides, OAuth error handling |
| Compliance & control | Unsubscribe management, manual exclusions, do-not-contact list, campaign audience audit |

---

## Domain-Specific Requirements

### Compliance & Regulatory

**CAN-SPAM Act (US Federal):**
- Every outbound email must include: (a) clear identification of the sender, (b) a visible and functional unsubscribe mechanism, (c) the sender's valid physical postal address
- Unsubscribe requests must be honored within 10 business days; system must process automatically within 24 hours
- Subject lines must not be deceptive; pre-built templates must be reviewed for compliance before launch
- No "send on behalf of" deception — emails must identify the business owner's business as the sender

**Email Service Provider Compliance:**
- Dedicated sending subdomain per account required (e.g., mail.jakeslawncare.com) to prevent cross-account deliverability contamination
- SPF and DKIM records must be configured per account; onboarding must guide user through DNS setup
- Bounce rates must be monitored per account; accounts exceeding 5% hard bounce rate must be paused and owner notified
- Spam complaints above 0.1% rate must trigger account review

**TCPA (SMS — Phase 2 scope only):**
- SMS is explicitly out of scope for MVP. When implemented, requires: written opt-in consent, 10DLC registration, STOP handling, and legal review before launch.

### Technical Constraints

**Email Infrastructure:**
- All customer PII (name, email, phone) must be encrypted at rest (AES-256) and in transit (TLS 1.2+)
- OAuth tokens for FSM integrations must be stored encrypted; never logged in plaintext
- Sending domain credentials (Mailgun/SendGrid API keys) must be stored in environment secrets, never in application code or database

**FSM Integration Reliability:**
- Webhook endpoints must respond to FSM webhook delivery within 200ms to avoid FSM-side retry storms
- All incoming webhooks must be idempotent — duplicate event delivery must not result in duplicate campaign sends
- OAuth token refresh must be handled automatically; expired tokens must not result in silent failures — owner must be notified

**Data Retention:**
- Customer contact data must be deletable on owner request (account deletion flow)
- Email send/open/click logs may be retained for up to 24 months for deliverability analysis

### Integration Requirements

**Jobber (v1):**
- OAuth 2.0 authorization code flow
- Scopes: read customers, read jobs, read job tags
- Webhooks: job.completed event
- API: customer list fetch, job history fetch

**Housecall Pro (v2):**
- OAuth 2.0 authorization code flow
- Webhooks: job.completed equivalent
- Same customer data model as Jobber integration

**Email Provider (Mailgun or SendGrid):**
- Dedicated IP or shared subdomain per account
- Webhook callbacks for bounces, unsubscribes, spam complaints
- Transactional send API with per-message tagging for campaign attribution

**Stripe:**
- Subscription billing for $39/mo plan
- AppSumo LTD webhook for redemption code validation
- Customer portal for self-service billing management

---

## Innovation & Novel Patterns

### Detected Innovation Areas

**FSM-Native Trigger Architecture:**
The core innovation is webhook-first campaign triggering. Unlike Mailchimp (import a CSV once) or Podium (separate review platform), this product receives real-time events from the FSM and evaluates campaign eligibility at the moment data changes. A job.completed event triggers review request evaluation immediately. A customer's 90-day inactivity window is computed dynamically from synced job history — not from a static list import.

This architecture means campaigns stay current without any user action. A customer who books a job gets removed from the dormant list automatically. A new customer who completes their first job immediately enters the post-service review request flow.

**Trade-Specific Template Library as Distribution Moat:**
The innovation isn't the template itself — it's that the template writes itself for the vertical. A HVAC owner doesn't have to know what a "Spring AC tune-up" campaign says. The product knows. This collapses the activation barrier from "learn email marketing" to "press go."

This is also a distribution moat: the product's pitch is a live demo that any contractor can follow. Connect Jobber → see customer list → click "Spring Reactivation — Lawn Care" → read pre-written email → activate. The demo is 4 steps and 3 minutes. No competitor at $39/mo can replicate this in a live demo.

### Market Context

Topline Pro raised $44M in VC to build a broader home service marketing platform. This validates institutional conviction in the space. However, Topline Pro targets larger operators and requires active campaign management. The innovation here is in the opposite direction: radical simplification to the point where no marketing decision is required from the owner.

Jobber's 2026 AI Marketing Suite is the primary competitive risk. Mitigation: HCP integration in v1 (HCP users are completely unserved), trade-specific template depth that generic AI can't match at launch, and multi-FSM agnosticism as the long-term moat.

### Validation Approach

The AppSumo launch is simultaneously the go-to-market and the validation experiment. The specific claims to validate:
1. "Under 15 minutes setup" — tracked in onboarding analytics as time from signup to first campaign activated
2. "Trade-specific templates remove all marketing knowledge requirement" — measured by campaign activation rate (target: 70%+)
3. "Dormant list reactivation generates bookings" — tracked as 30-day reactivation rate (target: 5%+)

### Risk Mitigation

**Jobber AI Marketing Suite risk:** Ship HCP integration alongside Jobber in v1. Compete on template depth. Build multi-FSM story aggressively. Move fast.

**Email deliverability risk:** Use established ESP (Mailgun/SendGrid), enforce bounce/spam thresholds per account, warm sending subdomains gradually, SPF/DKIM required in onboarding.

**Low reactivation rate risk:** If reactivation rates are below 3%, invest in template improvement and A/B testing before Phase 2. The product only works if the campaigns work.

---

## SaaS B2B Specific Requirements

### Project-Type Overview

This is a multi-tenant SaaS product targeting small businesses. Each business owner has an isolated account with their own customer list, campaign configurations, email sending subdomain, and FSM credentials. There is no cross-account data visibility. The product is single-user per account in v1 — one owner, one FSM connection, one sending domain.

### Technical Architecture Considerations

**Multi-Tenancy:**
- Each account has isolated customer data (no shared tables without account_id scoping)
- Each account has a dedicated email sending subdomain (provisioned at account creation via Mailgun/SendGrid subaccount API)
- FSM OAuth credentials are scoped per account; one account = one FSM connection in v1
- Stripe customer ID linked 1:1 to account

**Authentication:**
- Email/password authentication with email verification
- OAuth flow for FSM connection (Jobber, HCP) — this is FSM OAuth, not user authentication
- Session management via JWT or server-side sessions; reasonable expiry with refresh

**Campaign Execution Engine:**
- Webhook receiver: accepts FSM events, validates signature, enqueues for processing
- Trigger evaluator: determines which campaigns are eligible to fire for a given customer/event
- Campaign scheduler: handles time-delayed sends (e.g., review request 48hr after job completion)
- Audience calculator: computes campaign target audience from customer sync data
- Send executor: calls ESP API to queue outbound emails

**Billing Integration:**
- Stripe subscription creation at signup
- Webhooks: customer.subscription.deleted (handle churn), invoice.payment_failed (dunning)
- AppSumo redemption: validate code via AppSumo marketplace webhook or manual entry + API validation
- Plan enforcement: contact limit (5,000 in v1) checked before campaign send

### Tenant Model

Single-tier in v1: one plan, one user per account, one FSM per account, email-only. No team seats, no role-based access, no white-label. Plan features locked at time of LTD purchase for LTD customers.

### Implementation Considerations

**AppSumo LTD Handling:**
LTD customers receive lifetime access to features available at time of purchase. Plan tier must be stored at redemption and not automatically upgraded if future plan tiers are introduced. LTD customers are excluded from recurring billing but still tracked in Stripe as customers (with $0 recurring) for analytics.

**Contact Limit Enforcement:**
Contact limit (5,000 v1) is a soft guard — campaigns above the limit are blocked with a clear message. Owner can reduce list size by marking contacts as inactive. No automatic purging.

**Webhook Idempotency:**
Each webhook event from a FSM must be processed at most once. Use event ID from FSM as idempotency key. Store processed event IDs for 7 days to deduplicate retries.

---

## Project Scoping & Phased Development

### MVP Strategy & Philosophy

**MVP Approach:** Problem-solving MVP — deliver the single most valuable outcome (reactivated booking from dormant customer) with minimum viable infrastructure. Email-only, Jobber-only, five campaigns, one pricing tier.

**Resource Requirements:** 1 full-stack developer + design assistance. Target: 4–6 weeks to AppSumo submission.

**MVP Philosophy:**
- Pre-written templates are not a gap — they are the product. No blank canvas.
- Email-only removes TCPA/10DLC complexity entirely. SMS comes when the model is validated.
- Jobber-first because it has the simplest OAuth implementation and largest small-operator adoption.
- Five campaigns covers 80% of use cases. Depth before breadth.

### MVP Feature Set (Phase 1)

**Core User Journeys Supported:**
- Jake (lawn care, Jobber) — spring reactivation, review request
- Maria (HVAC, Jobber) — seasonal reminder, post-service review request
- David (cleaning, HCP — stretch) — win-back, review request

**Must-Have Capabilities:**
- Jobber OAuth integration + customer sync + job.completed webhook
- 5 pre-built campaigns: Spring Reactivation, Post-Service Review Request, Win-Back (90-day), Seasonal Reminder, Referral Ask
- One-click campaign activation with audience confirmation screen
- Campaign status dashboard (Active/Paused/Draft)
- Per-campaign plain-language metrics
- Dedicated sending subdomain + CAN-SPAM compliance (unsubscribe, physical address)
- Stripe $39/mo billing + AppSumo LTD redemption
- Guided onboarding flow (< 10 minutes target)

### Post-MVP Features

**Phase 2 (Months 4–6):**
- Housecall Pro integration (highest priority)
- ServiceTitan integration
- Expanded campaign library: 15+ templates
- MRR scaling infrastructure ($39/mo subscription engine)
- Trade vertical SEO content

**Phase 3 (Months 7–12):**
- SMS campaigns with 10DLC registration ($79/mo tier)
- Campaign performance analytics with revenue attribution estimates
- Seasonal campaign calendar (full-year pre-scheduled by trade)
- Agency/referral partner program

### Risk Mitigation Strategy

**Technical Risks:** Email deliverability is the highest technical risk. Mitigation: use established ESP (Mailgun or SendGrid) with dedicated subdomain per account, enforce bounce/spam thresholds, require SPF/DKIM in onboarding. Jobber webhook reliability is well-documented and has retry logic — acceptable risk.

**Market Risks:** Jobber AI Marketing Suite (launched early 2026) creates urgency. Mitigation: launch HCP integration in v1, position on multi-FSM agnosticism, ship fast. Topline Pro and Podium are not direct competitors at this price tier.

**Resource Risks:** MVP scope is deliberately narrow. If timeline extends, drop Phase 1 stretch items (ServiceTitan, HCP) and launch Jobber-only with 5 campaigns. The validation story works with Jobber alone.

---

## Functional Requirements

### FSM Integration Management

- FR1: Business owner can initiate Jobber OAuth connection from onboarding with no manual webhook configuration required
- FR2: Business owner can initiate Housecall Pro OAuth connection (v2) using the same guided flow
- FR3: System can automatically import the business's full customer list on first successful FSM connection
- FR4: System can perform incremental delta-sync of customer data on an ongoing scheduled basis
- FR5: System can receive, validate, and process job.completed webhook events from Jobber within 60 seconds
- FR6: Business owner can view current FSM connection status (connected/disconnected/error) from account settings
- FR7: Business owner can disconnect their FSM integration, which stops future syncs and webhook processing

### Campaign Library & Management

- FR8: Business owner can browse the pre-built trade-specific campaign library filtered by their selected trade
- FR9: Business owner can select their trade (lawn care, HVAC, cleaning, pest control, auto detailing) to see relevant campaigns
- FR10: Business owner can preview complete campaign email content including subject line and body before activating
- FR11: Business owner can edit pre-written campaign subject line and body inline without requiring a full email builder
- FR12: Business owner can activate a campaign with a single action after reviewing audience confirmation
- FR13: Business owner can pause any active campaign, which stops future scheduled sends
- FR14: Business owner can view a campaign status dashboard showing all campaigns as Active, Paused, or Draft
- FR15: Business owner can send a manual one-time campaign broadcast to a selected customer segment

### Campaign Targeting & Automation

- FR16: System can automatically target the Spring Reactivation campaign to customers inactive 90+ days during the March–April window
- FR17: System can automatically trigger a post-service review request email 48 hours after a job.completed webhook is received for a customer
- FR18: System can automatically enroll customers in a 2-email Win-Back sequence when they have been dormant for 90+ days
- FR19: Business owner can configure the send date for seasonal reminder campaigns (AC tune-up, furnace check, fall cleanup, mosquito season)
- FR20: System can automatically send a referral ask email 7 days after a customer receives a 5-star rating in the connected FSM
- FR21: Business owner can view an audience confirmation screen showing exact target count and scheduled send date before a campaign activates
- FR22: System can filter and segment the customer list by last booking date to compute campaign eligibility

### Email Infrastructure & Deliverability

- FR23: System can provision a dedicated email sending subdomain per business account during onboarding
- FR24: System can automatically include a CAN-SPAM compliant unsubscribe link in every outbound campaign email
- FR25: System can process ESP bounce webhooks and automatically suppress hard-bounced email addresses from future sends
- FR26: System can process unsubscribe requests (via link click or ESP webhook) and exclude unsubscribed customers from all future campaign sends
- FR27: Business owner can enter their physical business address in account settings, which is automatically appended to all outbound emails
- FR28: System can display a spam score warning to the business owner if a customized campaign email exceeds a risk threshold before send

### Customer Data Management

- FR29: System can maintain a synced customer contact list reflecting the current state of the connected FSM
- FR30: Business owner can view their customer list with last-booking-date and current campaign enrollment status
- FR31: System can automatically compute and maintain customer segments by dormancy duration (30, 60, 90, 180+ days without a booking)
- FR32: System can display unsubscribed and suppressed customers distinctly in the customer list and exclude them from campaign targeting

### Results & Reporting

- FR33: Business owner can view plain-language campaign results for each active campaign (e.g., "4 customers replied to your Spring Reactivation campaign")
- FR34: Business owner can view per-campaign numeric metrics: emails sent, open rate, reply rate
- FR35: Business owner can receive an in-app notification when a campaign generates a reply or measurable engagement event
- FR36: System can track email opens via tracking pixel and link clicks via redirect, attributing them to the originating campaign per customer

### Onboarding Flow

- FR37: New business owner can complete FSM OAuth connection through a step-by-step guided flow without requiring technical knowledge
- FR38: New business owner can select their trade during onboarding to immediately see the relevant pre-built campaign library
- FR39: New business owner can preview and activate their first campaign as the final step of the onboarding flow
- FR40: New business owner can see a clear confirmation of when their first campaign will begin sending before leaving the onboarding flow

### Billing & Account Management

- FR41: Business owner can subscribe to the $39/mo plan via Stripe-powered checkout during or after onboarding
- FR42: Business owner can redeem an AppSumo LTD code during account creation to activate lifetime access without a recurring subscription
- FR43: Business owner can view their current subscription status, plan, and next billing date from account settings
- FR44: Business owner can update their payment method via Stripe Customer Portal
- FR45: System can enforce the v1 contact limit (5,000 contacts) by blocking campaign sends and notifying the owner when the limit is reached

### Settings & Configuration

- FR46: Business owner can configure the send date window for each seasonal reminder campaign to match their local market timing
- FR47: Business owner can set a reply-to email address so that customer replies go directly to their inbox
- FR48: Business owner can access a step-by-step SPF/DKIM setup guide from account settings to configure their sending domain
- FR49: Business owner can manually mark individual customers as do-not-contact, which excludes them from all future campaign sends

---

## Non-Functional Requirements

### Performance

- Campaign trigger evaluation (from webhook receipt to send-or-skip decision) must complete within 60 seconds for 95% of events
- Customer list sync for a 5,000-contact account must complete within 5 minutes of initial connection
- Dashboard and campaign management pages must load within 3 seconds on a standard broadband connection
- Sending subdomain provisioning must complete within 30 seconds of account creation so it does not block onboarding

### Security

- All customer PII (name, email, phone) must be encrypted at rest using AES-256
- All data in transit must use TLS 1.2 or higher
- FSM OAuth access tokens and refresh tokens must be stored encrypted; never logged in plaintext
- ESP API keys and Stripe keys must be stored as environment secrets, not in application code or database
- Each tenant's customer data must be scoped by account_id at the query level — no cross-tenant data access
- OAuth token refresh must be handled silently; expired tokens must notify the account owner without exposing token details

### Reliability

- Application availability target: 99.5% uptime (< 3.6 hours downtime per month)
- FSM webhook receiver endpoint must be independently deployable and monitored — it is the critical real-time path
- Webhook processing must be idempotent: duplicate webhook delivery from FSM must not result in duplicate campaign sends
- Failed email sends (ESP error) must be retried with exponential backoff; persistent failures must notify the account owner
- Bounce and unsubscribe webhook processing must be reliable — missed events result in compliance risk

### Scalability

- v1 system must support 5,000 contacts per account; architecture must not require re-engineering to increase this limit in v2
- System must handle 1,000 concurrent accounts at MVP launch without degradation
- Campaign send batching must be implemented to avoid ESP rate limit violations at scale (e.g., 500 contacts/account should not create 500 simultaneous API calls)

### Integration

- Jobber OAuth integration must use Jobber's published OAuth 2.0 spec and not rely on undocumented API behavior
- Webhook endpoint must validate Jobber's HMAC signature on every incoming request; unsigned requests must be rejected
- ESP integration must use webhook callbacks for bounce/unsubscribe/complaint events — polling is not acceptable
- Stripe integration must use Stripe's webhook events for subscription lifecycle management, not client-side confirmation alone
- All integration dependencies must have documented fallback behavior (e.g., if Jobber API is unavailable, customer sync retries every 4 hours with exponential backoff)

---

*PRD created: 2026-05-23*
*Based on: Market Research Report + Product Brief (Local Service Marketing Automation, 2026-05-23)*
*Idea score: 84/105 — EXPLORE FURTHER*
*Next step: create-architecture — Technical architecture and stack decisions*
