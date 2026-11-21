---
stepsCompleted: [step-01-init, step-02-discovery, step-02b-vision, step-02c-executive-summary, step-03-success, step-04-journeys, step-05-domain, step-06-innovation, step-07-project-type, step-08-scoping, step-09-functional, step-10-nonfunctional, step-11-polish, step-12-complete]
inputDocuments:
  - ideas/shortlisted/service-business-review-reactivation-sequences.md
  - _bmad-output/planning-artifacts/market-research-service-business-review-reactivation.md
  - _bmad-output/planning-artifacts/brief-service-business-review-reactivation.md
workflowType: prd
product_name: TextBack
working_title: TextBack (working title)
date: 2026-11-21
author: Root
---

# Product Requirements Document — TextBack

**Author:** Root
**Date:** 2026-11-21
**Version:** 1.0

---

## Executive Summary

Service businesses — plumbers, HVAC techs, landscapers, house cleaners, painters — complete jobs and disappear. No thank-you, no review request, no rebooking nudge, no reactivation when a customer goes quiet. The result is a compounding revenue leak: zero Google reviews (losing Map Pack placement to competitors), 30–60% lower repeat booking rates, and $8K–$12K in customer lifetime value silently abandoned after every completed job.

**TextBack** is an SMS-first post-job follow-up tool for 1–10 person service businesses. After a job is marked complete, it fires a four-message sequence: Day 0 thank-you, Day 1 review request with a direct one-tap Google review link, Day 14 rebooking nudge, and a 90/180-day reactivation trigger when a customer goes dormant. The entire system runs without ongoing effort after a 5-minute setup.

Three concurrent product launches in Q1–Q3 2026 (CraftBoop, OwePilot, HandyPay) confirm this customer segment is now paying for automation tools. CraftBoop ($29/month, real users) proved the market — but it uses email-only sequences that reach 20% of recipients. SMS reaches 98%+. No tool under $97/month currently combines SMS-first sequences, a direct Google review link (not just a text asking customers to find the profile), and dormant-customer reactivation triggers.

The MVP is 2–3 weeks of coding. The AppSumo launch path is validated by More Good Reviews (4.9/5 from 81 reviews at $79–316 LTD). The build window is 6–9 months before CraftBoop adds SMS.

### What Makes This Special

**Three capabilities absent from every sub-$97/month competitor:**

1. **Direct Google review link in the SMS** — The customer taps once and lands directly on the review form. No searching for the business profile. This single detail doubles review conversion rates vs. a text that just asks customers to "find us on Google."

2. **90/180-day reactivation trigger** — When a customer hasn't booked in 90 days, the system fires automatically: "Hey, it's been a while — this month we're offering X." A single reactivation campaign on a 300-customer dormant list generates $8K–$25K in recovered revenue with zero ongoing effort.

3. **SMS-first at $29/month** — CraftBoop's $29/month email sequences achieve ~20% open rates. SMS achieves 98% within 90 seconds. Same price point, 4–5x the engagement from the first message.

The core insight: service businesses have high-quality customer relationships that they systematically fail to monetize after the job ends. TextBack automates the follow-up that every tradesperson knows they should do but never does.

## Project Classification

- **Project Type:** SaaS B2B — web application with SMS delivery infrastructure
- **Domain:** SMB automation / field service market / reputation management
- **Complexity:** Medium — SMS compliance (10DLC/TCPA) adds regulatory overhead; Google Places API integration adds a lightweight third-party dependency; FSM webhook integrations (Phase 2) add complexity
- **Project Context:** Greenfield — no existing codebase

---

## Success Criteria

### User Success

A TextBack user succeeds when:

- Their Google review count visibly increases within 30 days of activation — the moment a tradesperson sees their first new review without having asked for it verbally is the core value realization
- They recover booked jobs from dormant customers through the 90/180-day reactivation trigger without taking any action beyond initial setup
- They spend zero time on manual follow-up after setup — the tool runs invisibly in the background

**Specific user success thresholds:**

| Outcome | Target | Timeframe |
|---------|--------|-----------|
| New Google reviews per active user | ≥5 | First 30 days |
| Review link click-through rate | ≥25% of review request SMS sent | Ongoing |
| Reactivation response rate | ≥15% of dormant customers messaged | Per campaign |
| Day 14 rebooking conversion | ≥10% of nudges result in booked job | Ongoing |
| Time to first review received | <7 days from product activation | Onboarding |

### Business Success

**12-month targets:**

| KPI | Month 3 | Month 6 | Month 12 |
|-----|---------|---------|----------|
| Paying customers | 50 | 200 | 600 |
| MRR | $1,500 | $7,000 | $22,000 |
| SMS messages sent | 50K | 300K | 1.2M |
| Google reviews generated | 1,000 | 8,000 | 40,000 |
| NPS | ≥50 | ≥60 | ≥65 |
| Monthly churn | <5% | <4% | <3% |

**LTD launch target:** 300–500 purchases in first 30 days on AppSumo at $69 average ($20,700–$34,500 gross). Minimum 4.5-star rating from 50+ reviews within 90 days.

**North Star Metric:** Google reviews generated per month across all customers. This directly measures whether the tool delivers its core promise, creates organic case study material, and compounds over time (customers who get more reviews stay longer and refer more).

**Decision gates:**
- Month 3: If <50 paying customers or NPS <40, revisit pricing and onboarding before scaling marketing
- Month 6: If <200 customers, re-evaluate AppSumo timing and community channel strategy
- Month 12: If <$10K MRR, assess whether SMS compliance friction is a bigger barrier than expected

### Technical Success

- 10DLC brand registration flow working end-to-end for all new customers before first SMS send
- SMS delivery rate ≥95% (messages not flagged as spam, not bounced)
- Direct Google review link generation works for any US Google Business Profile
- STOP/HELP reply auto-handling 100% compliant with TCPA requirements
- System handles 1,000 concurrent customers without performance degradation
- Zero data leakage between customer accounts (tenant isolation)

### Measurable Outcomes

**Beta success criteria (60 days post-launch):**
1. ≥20 tradespeople complete full setup (add first customer, fire first sequence)
2. ≥50% of beta users receive at least 1 new Google review within 30 days of activation
3. ≥70% of beta users are still active (fired a sequence) in Week 4
4. Beta cohort collectively generates ≥100 new Google reviews
5. NPS ≥50 from beta survey (minimum 10 responses)
6. ≥3 users willing to share before/after review counts publicly

**Go/no-go for AppSumo launch:** All 5 criteria met → proceed. Criteria 1–3 met but 4–5 lagging → delay 30 days. Criteria 1–2 not met → revisit onboarding.

## Product Scope

### MVP — Minimum Viable Product

The MVP solves the core problem for Solo Mike in 5 minutes of setup. Everything else is Phase 2.

**Core capabilities:**

| Feature | Description |
|---------|-------------|
| F1 — Customer Records | Add customer (name, mobile, email optional, job date, job type); CSV import |
| F2 — Post-Job SMS Sequence | Day 0 thank-you, Day 1 review request with Google link, Day 14 rebooking nudge; customizable templates per job type |
| F3 — Direct Google Review Link | One-tap URL generated from Google Place ID; click tracked |
| F4 — 90/180-Day Reactivation | Auto-trigger when no new job after threshold; manual blast for dormant segments |
| F5 — 10DLC Compliance | Brand registration flow; TCPA consent tracking; STOP/HELP auto-handling |
| F6 — Basic Dashboard | Messages sent, review link clicks, opt-outs, active customers, reactivation replies |

**Non-negotiable exclusions from MVP:**

| Excluded | Reason |
|----------|--------|
| Email sequences | SMS is the differentiator; email adds complexity and reduces positioning clarity |
| Jobber/HCP integration | API approval takes 2–4 weeks; manual trigger is sufficient for beta |
| Multi-location support | Adds data model complexity; single-location covers 90% of TAM |
| AI-drafted review responses | Phase 3 feature |
| Review gating / sentiment check | Legally sensitive; not needed for launch |
| Free tier | LTD is the acquisition mechanism |
| Calendar/booking | Out of scope entirely |
| Mobile app | Web dashboard sufficient; tradespeople trigger via web |

### Growth Features (Post-MVP)

**Phase 2 (Month 2–4):**
- Jobber webhook integration (auto-trigger on job completion)
- Housecall Pro integration
- Zapier/Make triggers for other FSM tools
- Email sequences as complement (not replacement) to SMS
- Multi-location support with centralized dashboard
- Review monitoring (track Google star rating trajectory)

**Phase 3 (Month 4–8):**
- AI-drafted personalized review response suggestions
- Review gating with sentiment detection
- Referral mechanic ("Know another [trade]? Get 1 month free")
- Advanced reactivation segmentation (by job type, season, spend level)
- Franchise dashboard with per-location performance reporting
- Zapier/Make templates for the most common FSM tools

### Vision (Future)

**Phase 4 (Month 8–18):**
- WhatsApp integration for UK/CA/AU markets
- Predictive reactivation (ML-based: "these 23 customers are likely to need HVAC in the next 60 days")
- In-app review analytics and rating trajectory visualization
- Partner program with Jobber, HCP App Marketplace
- API access for agency/franchise management

**Long-term:** TextBack becomes the customer intelligence layer for independent service businesses — not just review/reactivation automation, but a lightweight CRM that knows each customer's service history, response patterns, and optimal contact timing. At 3,000+ customers it becomes an acquisition target for Jobber, NiceJob, or a mid-market FSM platform.

---

## User Journeys

### Journey 1: Solo Mike — First Week (Primary User, Happy Path)

**Opening scene:** Mike is a solo plumber doing 5–8 jobs per day, earning ~$280K/year. He has 11 Google reviews; his competitor down the street has 94. After his seventh job of the day, he sees a post in r/sweatystartup: "Built a tool that gets plumbers 50+ Google reviews automatically — testing for free." He DMs the founder.

**Rising action:** Mike signs up. The onboarding asks for his business name and Google Business Profile. The tool finds his Place ID via search and generates a preview of all four messages with his name and a one-tap review link. He adds his first customer manually — name, mobile number, and today's job date. He sees the Day 0 thank-you message send immediately in the preview. Total time: 5 minutes.

**Climax:** Day 2, Mike checks the dashboard. The Day 1 review request fired automatically. He sees the customer clicked the Google review link. That evening, a new 5-star review appears on his profile. He texts the founder: "this actually works."

**Resolution:** By end of week 1, 2 of his 5 customers from that week left reviews. His review count is now 13 — the best improvement he's seen since opening. He sets it and forgets it; every subsequent job auto-sends the sequence.

**Journey reveals needs:** Manual trigger UX, quick onboarding with Google Place ID lookup, real-time dashboard showing sequence delivery status, review link click tracking.

---

### Journey 2: Solo Mike — Reactivation Discovery (Primary User, Month 3)

**Opening scene:** Three months in, Mike remembers he has hundreds of past customers from his old invoice tool — a CSV export with 400 names and phone numbers. He wonders if any of them would rebook.

**Rising action:** Mike imports the CSV. TextBack flags 47 customers who, based on import date, have not booked in 90+ days. It offers to send the reactivation sequence to all of them: "It's been a while since we serviced your [job type]. This month we're offering a free drain inspection with any plumbing call — interested?" Mike reviews the message, edits the seasonal offer, and sends the blast.

**Climax:** Within 48 hours, 8 of the 47 respond and book jobs. Mike looks at the dashboard: 8 bookings × ~$400 average = $3,200 from a list that was sitting idle. Zero acquisition cost.

**Resolution:** Mike posts in r/sweatystartup: "Went from 11 to 67 Google reviews in 4 months using TextBack. Also recovered $3K in jobs from old customers I hadn't talked to in a year. AMA." The post drives 200+ signups in a week.

**Journey reveals needs:** CSV import with column mapping, dormant customer detection (last-job-date logic), reactivation batch sending with per-segment message customization, reply tracking on reactivation blast.

---

### Journey 3: Amanda — Office Manager, Housecall Pro Integration (Secondary User, Happy Path)

**Opening scene:** Amanda manages scheduling and invoicing for a 5-person HVAC company doing $1.2M/year in Housecall Pro. She's tried the built-in HCP review email (18% open rates) and was turned down on Podium ($399/month). She finds TextBack in the HCP App Marketplace while searching for review automation.

**Rising action:** Amanda connects her HCP account via API key. TextBack pulls her business profile, job types, and customer list automatically. She customizes templates for HVAC-specific language ("annual tune-up" instead of generic "service"). She enables the HCP trigger: "when job status changes to Complete → fire sequence." She configures the 90-day and 180-day reactivation rules. Setup takes 15 minutes.

**Climax:** Next job completed in HCP fires the sequence without Amanda touching anything. By end of week 1, 7 jobs have fired sequences automatically. She runs the 180-day reactivation campaign on 312 of her 800 dormant customers. 44 respond within 48 hours. The owner asks what changed.

**Resolution:** The HVAC company goes from 23 Google reviews (after 6 years) to 89 reviews within 4 months. Amanda's weekly check-in takes 2 minutes to glance at the dashboard. She becomes a vocal advocate in trade office-manager Facebook groups.

**Journey reveals needs:** FSM webhook integration (HCP), job-type-specific template customization, multi-job-type customer segmentation, campaign-level analytics (response rate per reactivation blast), admin account management (single business, multiple staff logins).

---

### Journey 4: Compliance Failure Recovery (Edge Case — TCPA STOP)

**Opening scene:** A customer of Mike's receives a Day 0 thank-you but is irritated that they were texted without being explicitly told they'd receive automated messages. They reply "STOP."

**Rising action:** TextBack auto-handles the STOP reply: immediately removes this customer from all active sequences, sends the TCPA-mandated confirmation ("You have been unsubscribed from [Business Name] messages. Reply START to resubscribe"), and marks the customer as opted-out in the dashboard.

**Climax:** Mike logs in that week and sees one opt-out on his dashboard. He clicks in and sees the customer name and the STOP event timestamp. He notes the customer's name and makes a mental note to explain the texting consent process when he takes deposits at the job start.

**Resolution:** No compliance incident occurs. The system handled it correctly without Mike's intervention. Mike adjusts his verbal script at job start to mention "we'll send you a text follow-up after."

**Journey reveals needs:** Automatic STOP/HELP/UNSTOP handling, opt-out status visible in customer record, opt-out count on dashboard, TCPA consent checkbox at customer record creation, consent language in onboarding guidance.

---

### Journey 5: Business Owner Onboarding Failure — Can't Find Google Profile (Edge Case)

**Opening scene:** A landscaper named Dave signs up but types his business name incorrectly when setting up his Google Business Profile link. The Place ID lookup returns no match.

**Rising action:** TextBack shows a "Profile not found" message with a fallback: "We couldn't find your Google Business Profile automatically. You can enter your Place ID manually." TextBack provides a link to the Google Place ID lookup tool and shows a step-by-step guide. Dave opens the guide, finds his Place ID in 2 minutes, and pastes it in.

**Climax:** TextBack validates the Place ID by generating a test review link and showing Dave a preview. Dave clicks the preview and sees his Google review form. He confirms.

**Resolution:** Dave's sequences fire correctly from that point. The edge case is resolved without customer support.

**Journey reveals needs:** Graceful failure state for Place ID lookup, manual Place ID entry with validation, preview of generated review link before saving, in-app troubleshooting guide for common setup issues.

---

### Journey Requirements Summary

| Capability revealed | From journey |
|---------------------|-------------|
| Google Place ID lookup + manual fallback + preview | 1, 5 |
| 5-minute onboarding with single customer add | 1 |
| Real-time dashboard with sequence delivery status | 1, 3 |
| Review link click tracking | 1 |
| CSV import with dormant customer detection | 2 |
| Reactivation batch send with preview | 2 |
| Reply tracking per reactivation campaign | 2, 3 |
| FSM webhook (HCP, Jobber) | 3 |
| Job-type-specific template customization | 3 |
| Automatic STOP/HELP/UNSTOP compliance handling | 4 |
| Opt-out tracking in customer record and dashboard | 4 |
| TCPA consent checkbox at customer creation | 4 |
| Campaign-level analytics | 3, 2 |
| In-app troubleshooting / setup guidance | 5 |

---

## Domain-Specific Requirements

### Compliance & Regulatory (TCPA / 10DLC)

TextBack sends commercial SMS to US mobile numbers on behalf of small business customers. This is a regulated activity under TCPA and requires:

**10DLC Registration (mandatory before first send):**
- Every TextBack business customer must register a "brand" with The Campaign Registry (TCR) before sending any sequences
- The registration flow must be integrated into onboarding — no manual off-platform steps for the user
- Brand registration data: business legal name, EIN or sole-proprietor attestation, business type, website
- Campaign registration: use case must be declared as "customer care / notifications" — not marketing
- Estimated registration turnaround: 1–3 business days; sequences must be held until approval
- Monthly TCR pass-through fee (~$10/brand/month) must be factored into pricing

**TCPA Consent Requirements:**
- TextBack customers must attest that their end-customers provided prior express written consent to receive automated texts
- Each customer record must include a "TCPA consent confirmed" checkbox — sequences must not fire without this checked
- The consent language displayed in onboarding and customer record creation must be legally accurate: "Customer has provided prior express written consent to receive automated text messages from [Business Name]"
- Consent is the TextBack customer's (the tradesperson's) legal responsibility; TextBack surfaces the requirement and provides the checkbox — it does not independently verify consent

**Opt-Out Handling (100% mandatory):**
- STOP reply: immediately deactivate all sequences for that phone number, send TCPA confirmation message within 5 minutes
- HELP reply: send business name + "Reply STOP to unsubscribe" within 5 minutes
- START/UNSTOP reply: re-enable sequences for previously opted-out number, send confirmation
- Opt-out must persist across sessions — a re-imported CSV must not reactivate an opted-out number
- Business name must appear in every outbound message (10DLC requirement)

**Message Content Restrictions:**
- No promotional pricing language in sequences classified as "customer care" (review requests and rebooking nudges are acceptable; discount-first messages may require a separate "marketing" campaign registration)
- No prohibited content: no cannabis, firearms, gambling, alcohol, adult content references
- Reactivation messages that include seasonal offers should be framed as service reminders, not discount blasts

### Technical Constraints

**SMS Infrastructure:**
- Use Twilio or Vonage (Bandwidth.com as fallback) for SMS delivery
- Dedicated short codes or 10DLC long codes — shared short codes are no longer available on US carriers
- SMS cost: ~$0.0075/segment (US); 160-character segments; most sequences will be 1–2 segments per message
- Monthly SMS cost per active customer: ~$2–4 at 5 jobs/week × 3 messages/job = 60 messages/month × $0.0075 = $0.45/customer/month in SMS costs at scale (acceptable margin)
- Rate limiting: Twilio 10DLC throughput is 10 MPS per 10DLC phone number; at 1,000 customers × 60 messages/month = 60,000 messages/month ÷ 30 days ÷ (10 × 86,400 seconds) = well within limits

**Google Places API:**
- Place ID lookup uses Google Places API (Text Search or Find Place) — cost ~$0.017/request; for onboarding this is a one-time cost per business customer
- Review link format: `https://search.google.com/local/writereview?placeid={PLACE_ID}` — this is a stable Google-supported format
- API key must be server-side only; never exposed to client
- Fallback: if Places API lookup fails, provide manual entry with validation

**Data Isolation:**
- All customer data (name, phone number, job history, sequence state) is scoped to a single TextBack business account
- No cross-account data access under any circumstance
- Phone numbers must be stored encrypted at rest (they are PII under TCPA and may be considered sensitive under state privacy laws)

### Risk Mitigations

| Risk | Mitigation |
|------|-----------|
| CraftBoop adds SMS within 6 months | Ship MVP in 6–8 weeks; build reactivation + FSM integrations that take longer to copy |
| Carrier spam filtering blocks sequences | Use 10DLC registration (reduces filtering); avoid marketing-language triggers; test across carriers in beta |
| SMS costs exceed pricing margin at scale | Usage-based SMS credit model for heavy senders (>100 messages/month); overage pricing at $0.02/SMS |
| TCPA lawsuit from end-customer | Consent checkbox is mandatory at customer record creation; clear legal attribution to TextBack customer; not TextBack's liability directly |
| Google review link format changes | Monitor Google Places API changelog; abstract link generation into a single service layer that can be patched quickly |

---

## Innovation & Novel Patterns

### Detected Innovation Areas

**1. Direct review link generation at the SMS layer**

The core technical innovation is generating a `writereview` deep-link from a Google Place ID and embedding it directly in the SMS body. This is not novel technology — Google has supported this URL format for years — but no SMS-based tool at this price point has implemented it. The innovation is the packaging: a tradesperson enters their business name once during onboarding, the tool resolves the Place ID, and every subsequent review request SMS contains a link that opens the review form in one tap.

The market impact is significant: requiring a customer to search for a business on Google before reviewing creates enough friction that most don't bother. The direct link reduces this to a single tap. Competitors that ask "please leave us a review on Google" in an email achieve 3–5% conversion; a one-tap SMS link targets 25%+.

**2. Dormant customer reactivation as a core feature (not a campaign add-on)**

Reactivation features exist in enterprise platforms like Podium and GoHighLevel, but they are buried under complex campaign builders that require marketing expertise to use. TextBack's innovation is making 90/180-day reactivation a set-and-forget background behavior: the trigger fires automatically when a customer's last job date crosses a threshold, with no ongoing configuration.

This is not a novel algorithm — it is a date comparison — but the product decision to make it invisible after setup (rather than a "campaign" the user must remember to run) is what makes it valuable for the target persona, who does not think of themselves as a marketer.

### Market Context & Competitive Landscape

- CraftBoop ($29/month, launched April 2026): email sequences only, no direct Google link, no reactivation. Validated the market at this price point.
- NiceJob ($75/month): partial SMS, no multi-step sequences, no reactivation. Too expensive for solo tradespeople.
- Podium ($399/month): full-featured but 10–13x the price. Constant Reddit complaints about price for small shops.
- GoHighLevel ($97/month): agency-focused, overwhelming complexity for a 1-person plumbing operation.
- More Good Reviews (AppSumo, $79–316 LTD, 4.9/5 from 81 reviews): validates AppSumo launch path for the category.

The gap is structural: the tools that have SMS charge enterprise prices; the tools at $29–49/month use email only. No one at this price point has combined SMS + direct Google review link + automatic reactivation.

### Validation Approach

The primary validation risk is not whether the technical approach works — generating a Places URL is trivial — but whether:

1. The direct link meaningfully increases review conversion rates vs. a standard "please review us" text
2. The reactivation trigger generates enough responses to justify the incremental complexity

**Validation plan:**
- Beta cohort of 20 tradespeople; track review link CTR and resulting reviews in first 30 days
- A/B test reactivation message copy (service reminder framing vs. seasonal offer framing) on the first 100 reactivation sends
- Track reply rate on Day 1 review request SMS vs. Day 14 rebooking nudge to understand which message drives the most engagement

### Risk Mitigation

| Innovation risk | Fallback |
|----------------|---------|
| Direct review link CTR is low (<15%) | Test shorter message copy; test sending Day 1 link earlier (same day as job) |
| Reactivation messages flagged as spam by carriers | Frame as "service reminder" not "offer"; use 10DLC registered campaign |
| Google changes `writereview` URL format | Abstract into a service layer; fallback to `maps.app.goo.gl` short link with custom tracking |

---

## SaaS B2B Specific Requirements

### Project-Type Overview

TextBack is a SaaS B2B product targeting micro-businesses (1–10 employees). Key product-type characteristics:

- **Single-tenant lite**: each TextBack business account is fully isolated; no data sharing between accounts
- **Self-serve acquisition**: target persona (Solo Mike) will not tolerate a sales call; product must be fully self-service
- **Low configuration ceiling**: Solo Mike cannot spend more than 5 minutes on setup; all configuration must be optional or have smart defaults
- **Usage-based cost component**: SMS costs mean per-customer unit economics scale predictably, enabling usage-based overage pricing

### Technical Architecture Considerations

**Authentication & Authorization:**
- Email/password registration with email verification (magic link preferred for mobile-friendliness)
- Single account owner per business in MVP; role-based access (owner + staff) in Phase 2
- Session tokens with 30-day rolling expiry; no persistent sessions on shared devices
- API key management for FSM integrations (Phase 2)

**Multi-Tenancy:**
- Soft multi-tenant: all data in shared infrastructure but row-level tenant isolation enforced at application layer
- Every database query must include `account_id` filter — no raw queries without tenant scope
- SMS phone numbers are provisioned per-account (not shared), ensuring delivery reputation is per-customer

**Onboarding Flow:**
- Target: account activation to first sequence fired in under 5 minutes
- Required at signup: business name, owner mobile (for test SMS), Google Business Profile lookup
- Required before first send: 10DLC brand registration (can be deferred up to 7 days with clear warning; sequences queued until approved)
- Optional at signup: job types, template customization

**Billing:**
- Stripe for subscription billing (SaaS tiers) and LTD code redemption
- Base plans: Starter ($29/month, up to 50 active customers, 100 SMS/month), Pro ($49/month, up to 300 active customers, FSM integration, 500 SMS/month)
- SMS overage: $0.02/message beyond plan limit
- LTD redemption: code-based, maps to Pro plan features, includes SMS credit allocation (1,000 credits/month forever)
- Monthly invoice with SMS usage breakdown

**Integrations (Phase 2):**
- Jobber: webhook on job status change → `completed`
- Housecall Pro: webhook on job status change → `completed`
- Zapier/Make: generic webhook trigger for any FSM tool
- Google Places API: Place ID lookup and validation
- Twilio/Vonage: SMS delivery, opt-out webhook handling, delivery receipts

### Implementation Considerations

**SMS Queue Architecture:**
- All sequences managed via a job queue (not synchronous sends)
- Day 0 messages send within 2 hours of job trigger; Day 1/14/90/180 messages scheduled based on trigger timestamp
- Failed sends retry up to 3 times with exponential backoff; after 3 failures, mark as undeliverable and surface in dashboard
- Sending hours restricted to 8am–8pm recipient local time (TCPA best practice; use phone number area code to infer timezone as MVP approximation)

**Data Model (MVP core entities):**
- `Account` — business account; holds 10DLC registration status, Google Place ID, SMS phone number assignment
- `Customer` — belongs to Account; holds name, phone, email, job type, last job date, opt-out status, TCPA consent flag
- `Job` — belongs to Customer; holds job date, job type, trigger timestamp, sequence state
- `SequenceMessage` — belongs to Job; holds message type (day0/day1/day14/reactivation), status (queued/sent/delivered/failed/clicked), sent_at, click_at
- `OptOut` — belongs to Account × phone number; persists across Customer re-imports

---

## Project Scoping & Phased Development

### MVP Strategy & Philosophy

**MVP Approach:** Revenue-proving MVP — the product must generate measurable, attributable Google reviews within 30 days for the first 20 beta users. This is the minimum proof needed to proceed to AppSumo launch.

**MVP Philosophy:** "Invisible automation for the technophobic tradesperson." If a plumber has to think about TextBack more than once a week, the MVP has failed. The design constraint is that every configuration decision must have a default that works for 80% of users without customization.

**Resource Requirements:** 1 developer (full-stack), 1 part-time growth/community (Reddit, AppSumo application), 1 part-time customer support during beta. 10DLC registration adds 1–2 weeks of non-coding overhead.

### MVP Feature Set (Phase 1)

**Core User Journeys Supported:**
- Solo Mike happy path (manual job trigger → Day 0/1/14 sequence → review received)
- Reactivation via CSV import (dormant customer detection → batch reactivation blast)
- TCPA compliance handling (STOP/HELP auto-response, opt-out persistence)

**Must-Have Capabilities:**
- Customer record management (manual add + CSV import with column mapping)
- Post-job SMS sequence (Day 0, Day 1 with Google review link, Day 14 rebooking nudge)
- Google Place ID lookup and direct review link generation
- 90/180-day reactivation trigger (automatic + manual blast)
- 10DLC brand registration flow integrated into onboarding
- TCPA consent checkbox on customer record; STOP/HELP auto-handling
- Basic dashboard (messages sent, clicks, opt-outs, active customers)
- Stripe-based billing (Starter + Pro + LTD redemption)
- Sending hours restriction (8am–8pm recipient time zone)

### Post-MVP Features

**Phase 2 (Months 2–4):**
- Jobber and Housecall Pro webhook integrations
- Zapier/Make generic webhook trigger
- Email sequence complement to SMS
- Multi-location support (single account, multiple business locations)
- Staff/team accounts (role-based: owner + staff)
- Advanced dashboard: per-job-type metrics, sequence performance charts

**Phase 3 (Months 4–8):**
- AI-drafted review response suggestions
- Review gating with sentiment detection
- Referral mechanic
- Advanced reactivation segmentation (by job type, season, revenue tier)
- Franchise/multi-owner dashboard

### Risk Mitigation Strategy

**Technical Risks:**
- 10DLC approval delay blocks first sends → mitigate with clear status indicator in onboarding; queue messages; set user expectation of 1–3 day delay
- SMS delivery failures spike unexpectedly → alert system when delivery rate drops below 90%; auto-pause account pending review

**Market Risks:**
- CraftBoop adds SMS → move faster; focus on reactivation sequences and FSM integrations as differentiated moat; CraftBoop cannot replicate both in <6 months
- Beta users don't see reviews materialize → track review link clicks first (direct metric); if clicks are high but reviews low, the Google funnel (not TextBack) is the issue; adjust Day 1 message copy

**Resource Risks:**
- Sole developer gets blocked on 10DLC registration complexity → pre-register one test brand before writing any send logic; use Twilio's pre-built 10DLC registration API
- AppSumo application rejected → apply with 50+ beta users and 4.5+ NPS data; have review screenshots ready

---

## Functional Requirements

### Customer Management

- FR1: Business owner can add a customer record with name, mobile phone number, job date, and job type
- FR2: Business owner can import customers from a CSV file with column mapping for name, phone, job date, and job type
- FR3: Business owner can manually trigger a post-job sequence for any customer
- FR4: Business owner can view all customers with their current sequence status and opt-out state
- FR5: Business owner can edit a customer record (name, phone, job type, TCPA consent flag)
- FR6: System marks a customer as opted-out when a STOP reply is received, and this state persists across all future imports
- FR7: Business owner can view which customers are dormant (no new job in 90+ days) filtered by threshold

### Post-Job SMS Sequence

- FR8: System sends a Day 0 thank-you SMS within 2 hours of a job trigger
- FR9: System sends a Day 1 review request SMS containing a one-tap direct Google review link
- FR10: System sends a Day 14 rebooking nudge SMS
- FR11: Business owner can customize the message template for each sequence step per job type
- FR12: System inserts the business name and customer first name into every outbound message
- FR13: System only sends messages between 8am and 8pm in the recipient's local time zone
- FR14: System retries failed message delivery up to 3 times before marking as undeliverable

### Google Review Link

- FR15: Business owner can enter their business name and have the system find their Google Place ID via lookup
- FR16: Business owner can manually enter a Google Place ID when automatic lookup fails
- FR17: System generates a direct `writereview` review link from the Place ID
- FR18: Business owner can preview the generated review link before it goes live
- FR19: System tracks each unique review link click (attributed to the customer who received the message)

### Reactivation Sequences

- FR20: System automatically queues a reactivation SMS for customers who have no new job after 90 days
- FR21: System automatically queues a second reactivation SMS for customers who have no new job after 180 days
- FR22: Business owner can configure the 90-day and 180-day reactivation message templates
- FR23: Business owner can send a manual reactivation blast to a selected group of dormant customers
- FR24: Business owner can preview the reactivation message before sending a manual blast
- FR25: System tracks replies to reactivation messages (inbound SMS containing non-opt-out content)

### Compliance

- FR26: Business owner must complete 10DLC brand registration before any sequence can send
- FR27: System displays 10DLC registration status and queues messages pending approval
- FR28: Each customer record includes a TCPA consent checkbox; sequences do not fire without consent confirmed
- FR29: System sends a TCPA-compliant opt-out confirmation message within 5 minutes of receiving a STOP reply
- FR30: System sends a HELP response with business name and opt-out instructions within 5 minutes of receiving a HELP reply
- FR31: System re-enables sequences for a previously opted-out number when UNSTOP/START is received
- FR32: Business name appears in every outbound SMS (10DLC requirement)

### Dashboard & Reporting

- FR33: Business owner can view total messages sent, broken down by sequence step
- FR34: Business owner can view total review link clicks and click-through rate
- FR35: Business owner can view opt-out count and list of opted-out customers
- FR36: Business owner can view count of active customers (at least one sequence fired in last 30 days)
- FR37: Business owner can view reactivation reply count
- FR38: Business owner can view per-customer sequence history (messages sent, delivered, clicked)

### Account & Billing

- FR39: Business owner can register with email and password; email verification required before first sequence
- FR40: Business owner can select a subscription plan (Starter or Pro) and enter payment via Stripe
- FR41: Business owner can redeem an LTD code during signup or from account settings
- FR42: Business owner can view current billing period SMS usage and estimated overage
- FR43: System notifies business owner via email when SMS credit limit is 80% consumed
- FR44: Business owner can update business name, Google Place ID, and notification email from account settings

### Onboarding

- FR45: New account onboarding guides business owner through Google Place ID setup, 10DLC registration, and first customer add in a single flow
- FR46: System sends a test SMS to the business owner's own mobile number during onboarding to confirm delivery
- FR47: System provides in-app guidance when Google Place ID lookup fails (manual entry instructions)
- FR48: System surfaces 10DLC registration status changes via in-app notification and email

---

## Non-Functional Requirements

### Performance

- Review link click tracking must resolve within 500ms (redirect from tracking URL to Google)
- Dashboard must load within 3 seconds for accounts with up to 1,000 customers
- CSV import of up to 5,000 rows must complete within 60 seconds
- SMS queue must process and deliver Day 0 messages within 2 hours of job trigger under normal load (up to 10,000 pending messages)

### Security

- All customer phone numbers stored encrypted at rest (AES-256 or equivalent); they are PII under TCPA
- All data in transit encrypted via TLS 1.2+
- Tenant isolation enforced at application layer: every query scoped by `account_id`; no raw cross-account queries permitted
- API keys for FSM integrations stored hashed; never returned in plaintext after initial creation
- Stripe handles all payment card data; no card data touches TextBack servers (Stripe.js / payment intents only)
- TCPA consent timestamps stored immutably (append-only log) for legal defensibility

### Scalability

- System must support 1,000 paying accounts with no performance degradation at MVP
- Architecture must support horizontal scaling to 10,000 accounts without re-architecture (stateless app servers, queue-based SMS delivery)
- SMS queue must handle burst of 10,000 messages per hour (e.g., Monday morning bulk import by multiple users)

### Reliability

- Core sequence delivery (Day 0 through reactivation): 99.5% uptime target
- STOP/HELP compliance response: must fire within 5 minutes of receipt regardless of platform availability; if main queue is degraded, compliance responses get a dedicated fast-path queue
- Dashboard and account management: 99% uptime acceptable (non-critical path)

### Integration

- Twilio (or Vonage) webhook for inbound SMS (STOP, HELP, replies) must respond with HTTP 200 within 5 seconds to prevent retry storms
- Google Places API calls must have a 5-second timeout with graceful fallback to manual entry
- Stripe webhook handling must be idempotent (duplicate event processing must not create duplicate charges or credits)
- FSM webhooks (Phase 2) must validate HMAC signature before processing any job completion event
