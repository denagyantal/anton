---
stepsCompleted: [1, 2, 3, 4, 5, 6]
inputDocuments:
  - ideas/shortlisted/local-service-marketing-automation.md
  - _bmad-output/planning-artifacts/market-research-local-service-marketing-automation.md
workflowType: product-brief
lastStep: 6
research_type: product-brief
research_topic: local-service-marketing-automation
user_name: Root
date: '2026-05-23'
---

# Product Brief: Local Service Marketing Automation

---

## Executive Summary

Local service businesses — lawn care, HVAC, cleaning, pest control, auto detailing — sit on goldmines they never mine: warm customer lists inside their field service management (FSM) software that are never touched after the job is done. The result is a massive, invisible revenue leak: dormant customers who'd book again if only someone sent them a timely spring reactivation email or a post-service review request.

**Local Service Marketing Automation** is a webhook-native, template-first marketing automation tool purpose-built for local service businesses. It plugs directly into Jobber, Housecall Pro, and ServiceTitan — the FSMs where the data already lives — and fires pre-built, trade-specific campaign sequences automatically: spring reactivation, post-service review requests, seasonal tune-up reminders, and win-back sequences for dormant customers.

The value proposition is unambiguous: at $39/mo, this is 5–20x cheaper than the real alternatives (Podium $399/mo, Broadly $249/mo, Topline Pro $99+/mo, ServiceTitan Marketing Pro $200–600/mo add-on). Setup takes under 15 minutes. No marketing knowledge required. The first reactivated HVAC customer pays for a year of the subscription.

The market is 5M+ US local service businesses, largely unserved. Topline Pro's $44M in VC funding proves institutional conviction in this space. The urgent window is 12–18 months before FSM platforms expand native marketing features — particularly Jobber, which launched an AI Marketing Suite in early 2026. Housecall Pro users represent the most underserved segment today and are the primary initial target.

The go-to-market is AppSumo-first: $199 LTD to capture 500–1,000 early customers, generate reviews, and validate the "5-minute setup + trade-specific templates" story. MRR growth follows through r/sweatystartup organic, Facebook contractor communities, and SEO targeting "Jobber marketing automation" and "HVAC email marketing."

---

## Core Vision

### Problem Statement

Local service business owners run every role in their business — technician, scheduler, bookkeeper, and marketer. They have zero time, zero marketing knowledge, and zero appetite for $200–800/mo platforms designed for marketing teams they'll never hire. Their most valuable asset — a list of past customers who already trust them and are likely to book again — sits dormant in their FSM software, untouched between jobs.

The specific problem is this: **there is no affordable, simple, trade-aware marketing automation tool that connects directly to a service business's existing FSM data and fires the right campaigns at the right time without requiring the owner to become a marketer.**

Mailchimp is free but generic, requires manual list exports, and assumes the user understands email marketing. HubSpot at $890+/mo is absurd for a 3-crew lawn operation. Podium ($399+/mo) is review-focused, not campaign-focused. ServiceTitan Marketing Pro ($200–600/mo add-on) targets large operators. Topline Pro ($99+/mo) is a broader platform that doesn't cleanly solve the "my customer list is already in Jobber" problem. The whitespace — simple, FSM-native, trade-specific, under $50/mo — is unowned.

### Problem Impact

- A lawn care business with 200 past customers that runs a spring reactivation email can expect 5–15% reactivation (10–30 bookings), each worth $1,200–3,600/yr in recurring revenue. At zero marketing effort.
- An HVAC company with 500 past customers that sends automated AC tune-up reminders each spring fills weeks of technician time they would otherwise spend cold-calling or paying for Google Ads.
- A cleaning service that sends automated review requests after every job goes from 12 Google reviews to 150 in 6 months — changing their local search ranking entirely.

None of this happens today because the friction of learning Mailchimp or paying for Podium is too high. The dormant customer list is a silent, permanent revenue leak.

### Why Existing Solutions Fall Short

| Solution | Price | Problem |
|----------|-------|---------|
| Mailchimp (free) | $0 | Generic, no FSM integration, requires marketing knowledge, manual list import/export |
| NiceJob | $75–125/mo | Review automation only — no proactive campaign sequences |
| Broadly | $249/mo | Review + messaging, no campaign automation, annual contract |
| Podium | $399–999+/mo | Review-focused, too expensive for small operators, annual contracts |
| Topline Pro | $99+/mo | Broad marketing platform — doesn't plug into the FSM's existing data cleanly |
| ServiceTitan Marketing Pro | $200–600/mo add-on | Complex, designed for large operations, requires base ServiceTitan subscription |
| HubSpot | $890+/mo | Built for marketing teams, wildly complex, no trade-specific templates |
| Jobber AI Marketing Suite | Included in $69–149/mo | **FSM-locked** — only works within Jobber ecosystem; unclear template depth; HCP/ServiceTitan users unaffected |

The core gap: no tool combines (a) FSM webhook integration + (b) trade-specific campaign templates + (c) price under $99/mo + (d) setup under 30 minutes. This quadrant is unoccupied.

### Proposed Solution

A SaaS product with a single, narrow purpose: connect your FSM (Jobber, Housecall Pro, or ServiceTitan) and automatically fire pre-built, trade-specific marketing campaigns to your customer list — with zero marketing knowledge required.

**The core product loop:**
1. Connect your FSM via OAuth or webhook (under 15 minutes, step-by-step guide)
2. Choose your trade (lawn care, HVAC, cleaning, pest control, detailing)
3. Activate pre-built campaigns — spring reactivation, post-service review request, seasonal reminder, win-back
4. Campaigns fire automatically based on FSM data triggers (job completed, customer dormant 90 days, season start)
5. Track results in plain language: "3 customers rebooked from your spring reactivation"

**Pricing:** $39/mo subscription or $199 LTD (AppSumo launch)

The product is deliberately narrow: email-only in v1 (no SMS complexity), no CRM, no landing pages, no ad management. It does one thing — turns dormant FSM data into booked jobs — and does it in under 15 minutes of setup.

### Key Differentiators

1. **FSM-webhook-native**: Campaigns fire from real FSM data (job completed, customer inactive) without manual list exports. No competitor at $39/mo offers this.

2. **Trade-specific templates**: Pre-written copy for spring lawn reactivation, HVAC AC tune-up season, post-pest-control review request — not generic "insert product name here" templates. A lawn care owner doesn't have to write a single word.

3. **Zero marketing knowledge required**: No A/B testing, no funnel building, no segment creation. Activate a campaign, it runs. The mental model is "I press go, customers get emails, some of them call back."

4. **5-minute setup story**: The pitch is live-demo-able. Connect Jobber → see customer list populate → activate spring reactivation campaign → done. This story converts on AppSumo, Reddit, and YouTube better than any feature list.

5. **Price-as-moat**: $39/mo is so low that budget is not a decision point for any local service business doing $100K+/yr. The comparison to "1 reactivated HVAC job pays for 1 year of this tool" makes the ROI trivially obvious.

6. **Multi-FSM agnosticism (v2)**: While FSM platforms build native marketing within their own ecosystems, a tool that works across Jobber, HCP, and ServiceTitan survives FSM switching and appeals to multi-FSM operations.

---

## Target Users

### Primary Users

**Segment 1 — The Lawn Care Operator ("Jake")**

Jake runs a 3-crew lawn care and landscaping business doing $350K/yr. He uses Jobber to schedule jobs and invoice customers. He has 180 past clients from the last 3 seasons, a dozen of whom haven't rebooked. Every March, he knows he should send a "spring is coming, ready to schedule your first cut?" email to his list. He never does because he tried Mailchimp once, spent 2 hours, got confused, and gave up.

- **FSM:** Jobber
- **Revenue:** $150K–$600K/yr
- **Marketing budget:** $0–$500/mo (most of it on door hangers)
- **Pain:** Dormant customer list, no reactivation strategy, zero time to learn marketing tools
- **Trigger to buy:** Sees a r/sweatystartup post showing someone got 8 callbacks from a $39 tool
- **Aha moment:** First spring reactivation email fires automatically; 2 customers call to rebook

**Segment 2 — The HVAC Shop Owner ("Maria")**

Maria runs a 6-tech HVAC company on ServiceTitan, doing $1.8M/yr. She knows ServiceTitan has Marketing Pro but it's another $400/mo and requires more setup time than she has. She wants two things: AC tune-up reminders every April to existing customers, and automatic review requests after every service call. She's paying a marketing agency $800/mo for "digital marketing" that she can't measure.

- **FSM:** ServiceTitan (or Jobber for smaller shops)
- **Revenue:** $500K–$3M/yr
- **Marketing budget:** $500–$3K/mo
- **Pain:** Seasonal campaign execution is manual; review generation is inconsistent; paying too much for generic marketing
- **Trigger to buy:** Competitor HVAC company mentions they automated seasonal reminders and it filled their schedule
- **Aha moment:** Spring campaign fires to 400 past customers; 22 book AC tune-ups in the first week

**Segment 3 — The Cleaning Service Owner ("David")**

David runs a residential cleaning service on Housecall Pro, doing $280K/yr with 5 cleaners. He has 95 active recurring clients and another 60 who've gone quiet. He wants two things: automated review requests so he stops getting 1 review a month, and a win-back sequence for dormant clients. He tried every review platform — NiceJob felt like overkill at $75/mo for just reviews.

- **FSM:** Housecall Pro
- **Revenue:** $150K–$800K/yr
- **Marketing budget:** $0–$300/mo
- **Pain:** Review generation is manual and forgotten; dormant client list never contacted; can't justify $75/mo for reviews only
- **Trigger to buy:** Sees AppSumo deal — $199 once vs. $75/mo forever for just reviews
- **Aha moment:** Review count goes from 14 to 67 in 3 months from automated post-job requests

**Segment 4 — The Pest Control Operator**

Runs a seasonal pest control business (mosquito, termite, lawn treatment) on Field Routes or ServiceTitan. Strong need for annual renewal campaigns ("your annual termite contract is coming up"), seasonal start-of-service reminders, and referral requests from satisfied customers.

- **FSM:** ServiceTitan, Field Routes
- **Revenue:** $300K–$3M/yr
- **High-value campaigns:** Annual renewal, pre-season activation, referral request

### Secondary Users

**FSM Consultants and Onboarding Specialists**
A growing industry of consultants who help local service businesses set up and optimize their FSM software (e.g., Jobber Partner Program members, certified ServiceTitan consultants). These people work with 10–50 service businesses at a time. A white-label or referral program makes them a channel — they recommend the tool to every client during FSM onboarding.

**Marketing Agencies Serving Local Service Businesses**
Small agencies ($500–2K/mo retainers) that manage digital marketing for contractors. They currently use GoHighLevel white-label or manual tools. A simpler, FSM-integrated tool they can resell or use for clients at $39/mo would reduce their own costs and improve results.

### User Journey

**Discovery**
Jake scrolls r/sweatystartup on a Tuesday evening. Someone posts: "I used [tool] to send a spring reactivation email to my old lawn care customers. Sent it Monday, by Friday I had 6 new bookings. Setup took 10 minutes." Jake reads the comments, clicks the link in the post, and lands on the pricing page.

**Consideration**
Jake reads the landing page. He sees "connects to Jobber in 5 minutes" — this matters because he actually uses Jobber. He sees the template preview for spring lawn reactivation — it already has copy, it already mentions lawn care, he doesn't have to write anything. He sees $39/mo. He's spending $400/mo on door hangers that he can't measure. He signs up for the free trial.

**Onboarding**
Jake connects his Jobber account via OAuth. The tool immediately imports his customer list (182 contacts). He sees a campaign labeled "Spring Reactivation — Lawn Care." He clicks preview, reads the email, changes one word. He clicks "Activate." The system tells him it will send to 42 customers who haven't booked in 90+ days starting next Monday. Total setup time: 11 minutes.

**First Win**
The following Thursday, Jake gets a notification: "Your Spring Reactivation campaign has been opened 31 times. 4 customers have replied." He checks his phone — 3 voicemails and a text asking to get on his schedule. He made $1,800 in recurring bookings this week from a tool he spent 11 minutes setting up.

**Retention and Advocacy**
Jake pays $39/mo without thinking about it. He tells two other lawn care guys in a Facebook group when someone asks "what are you using for marketing?" He becomes a case study. He refers 3 additional customers through an organic referral link.

**Long-term**
Jake activates the fall cleanup reminder in September and the win-back sequence for clients he hasn't seen in 18 months. He's now running 3 campaigns year-round and never thinks about them. His Google review count has gone from 11 to 78. He mentions the tool in every r/sweatystartup thread about marketing.

---

## Success Metrics

### User Success Metrics

The primary user success event — the moment that drives retention and advocacy — is: **a customer receives a campaign and a past customer books a job within 30 days.**

This is the metric to optimize for in onboarding and product design. Everything else is secondary.

| User Metric | Definition | Target (Month 3) |
|-------------|------------|-----------------|
| Time to first campaign live | Minutes from signup to first campaign activated | < 15 minutes |
| Reactivation rate | % of targeted dormant customers who book within 30 days | 5–15% |
| Customer review velocity | Increase in Google/Yelp reviews per month after activation | 3x baseline |
| Campaign activation rate | % of new customers who activate at least 1 campaign | > 70% |
| Aha moment conversion | % of users who see a reactivated booking within 30 days | > 40% |

### Business Objectives

**3-Month Goals (Post-AppSumo Launch)**
- 500+ LTD customers acquired via AppSumo campaign
- 50+ verified reviews on AppSumo and G2
- < 5% monthly churn on LTD customers who completed setup
- Product-market fit signal: 40%+ of activated customers report a reactivated booking

**6-Month Goals**
- 200+ MRR customers at $39/mo = $7,800+ MRR
- Multi-FSM support live (Jobber + HCP minimum, ServiceTitan stretch)
- 3–5 case studies with quantified outcomes ("booked $4,200 from one spring campaign")
- SEO ranking for "Jobber marketing automation" and "HVAC email marketing" in top 10

**12-Month Goals**
- 1,000+ MRR customers (mix of $39/$79 tiers)
- ~$50K MRR
- SMS tier launched with 10DLC infrastructure in place
- Recognized in r/sweatystartup, r/lawncare community as the go-to marketing tool for service businesses
- Potential AppSumo "Staff Pick" or rerun for second LTD cohort

### Key Performance Indicators

| KPI | Month 1 | Month 3 | Month 6 | Month 12 |
|-----|---------|---------|---------|----------|
| AppSumo LTD sales | 100 | 500 | 1,000 | 1,500 |
| MRR customers | 0 | 50 | 200 | 1,000 |
| MRR ($) | $0 | $1,950 | $7,800 | $50,000 |
| Avg campaigns active per customer | 1 | 2 | 3 | 4 |
| Monthly churn (MRR) | N/A | <5% | <3% | <2% |
| NPS | N/A | 40+ | 50+ | 55+ |
| Time-to-first-campaign (median) | <30 min | <15 min | <10 min | <10 min |
| Reactivation rate (median customer) | N/A | 6% | 8% | 10% |

**Leading Indicator:** Percentage of newly activated customers who see at least one inbound contact from a dormant customer within their first 30 days. This single metric predicts 90-day retention better than any other. Target: 40%+.

**Churn Signal:** Customers who complete setup but see zero campaign activity in month 1 churn at 4x the rate of customers who activate a campaign. Onboarding must push to campaign activation, not just FSM connection.

---

## MVP Scope

### Core Features

**Feature 1: FSM Connection (Jobber v1, HCP v2)**
- Jobber OAuth integration: read customer list, completed jobs, job tags
- Webhook listener: receive job.completed event → trigger campaign sequence
- Customer sync: import existing customer list on first connect, delta-sync ongoing
- HCP integration (v2, Month 3–4): same pattern via HCP webhooks

*Scope decision: ServiceTitan pushed to v3. ServiceTitan's API complexity and enterprise buyer profile means HCP captures more volume faster.*

**Feature 2: Pre-Built Campaign Library (5 campaigns in v1)**
- **Spring Reactivation** — "Hey [Name], spring is almost here. Ready to get back on the schedule?" — fires to customers inactive 90+ days in March/April
- **Post-Service Review Request** — fires 48 hours after job.completed webhook — personalized to service type
- **Win-Back (90-Day Dormant)** — 2-email sequence for customers who haven't booked in 90+ days
- **Seasonal Reminder** — configurable by trade: AC tune-up (April), furnace check (October), fall cleanup (September), mosquito season start (May)
- **Referral Ask** — fires 7 days after positive review or 5-star rating in FSM

*All campaigns have pre-written copy, trade-specific language, editable in a simple inline editor. No blank-canvas email builder.*

**Feature 3: Campaign Activation and Management**
- One-click campaign activation with confirmation screen showing: "This will send to X customers starting [date]"
- Campaign status dashboard: Active / Paused / Draft
- Per-campaign metrics: emails sent, open rate, replies (tracked via webhook or reply-to inbox)
- Plain-language results: "4 customers replied to your spring campaign" — no marketing jargon
- Manual one-time campaign send (for ad-hoc situations like a flash sale or weather delay notice)

**Feature 4: Email Infrastructure**
- Dedicated sending subdomain per account (e.g., mail.jakeslawncare.com) via Mailgun/SendGrid
- CAN-SPAM compliance built in: unsubscribe link, physical address field in settings
- Bounce and unsubscribe handling: automatic list hygiene
- Spam score check before send with warnings for high-risk content
- SPF/DKIM setup guide shown at onboarding

**Feature 5: Onboarding Flow**
- Step 1: Connect FSM (OAuth button — no webhook config required from user)
- Step 2: Select your trade (shows trade-specific campaign library)
- Step 3: Preview and activate first campaign
- Step 4: Confirmation + "Your first campaign fires in [X] days"
- Total target: < 10 minutes, zero technical knowledge required
- Guided walkthrough with Loom-style video at each step

**Feature 6: Billing**
- Stripe integration for $39/mo subscription
- AppSumo LTD redemption flow ($199 one-time, lifetime access capped at plan features at launch date)
- Simple plan: one tier in v1 (unlimited campaigns, up to 5,000 contacts, email only)

### Out of Scope for MVP

| Feature | Why Deferred |
|---------|-------------|
| SMS campaigns | TCPA/10DLC compliance infrastructure requires significant time and legal review; email-only v1 reduces risk and build time by 4–6 weeks |
| Custom email builder (drag-and-drop) | Pre-written templates are a competitive advantage, not a gap; blank canvas creates paradox of choice and defeats "zero marketing knowledge" positioning |
| CRM / contact management | FSM is the source of truth; building a CRM layer adds complexity and competes with the FSM rather than complementing it |
| ServiceTitan integration | API complexity is high; HCP covers similar buyer profile with simpler API; ST can be v3 |
| Paid ad management | Out of product scope entirely — this is a retention/reactivation tool, not a lead generation tool |
| Website or landing page builder | Scope creep; not relevant to FSM-triggered campaign automation |
| Advanced analytics / attribution | v1 shows plain-language results; full attribution requires call tracking integration (later) |
| Multi-user / team accounts | Target buyer is solo owner or 1-2 person operation; team features add complexity for no v1 value |
| White-label / agency tier | Valid future opportunity but adds billing complexity; defer to Month 6+ |
| A/B testing | Contradicts "zero marketing knowledge" positioning; adds cognitive load for no v1 value |

### MVP Success Criteria

The MVP is considered validated when any two of the following three conditions are met:

1. **Revenue validation**: 500 LTD sales on AppSumo within 60 days of launch (proves willingness to pay at scale)
2. **Product validation**: 40%+ of customers who activate a campaign report receiving an inbound contact from a dormant customer within 30 days
3. **Retention validation**: < 5% monthly churn on activated customers after 90 days

When these conditions are met, proceed to Phase 2: HCP integration, SMS tier development, and $39/mo MRR scaling.

If AppSumo sales reach 100 but plateau below 300 within 30 days, conduct customer interviews to determine if pricing ($199 LTD), FSM compatibility, or campaign relevance is the blocker before investing in Phase 2.

### Future Vision

**Phase 2 (Months 4–6): Multi-FSM and MRR Foundation**
- Housecall Pro integration (highest priority — weakest native marketing of the three FSMs)
- ServiceTitan integration
- $39/mo recurring subscription with 200+ MRR customers
- Expanded campaign library: 15+ templates covering HVAC, pest control, detailing, pressure washing
- Trade vertical content: blog posts ranking for "HVAC email marketing," "lawn care customer reactivation"

**Phase 3 (Months 7–12): SMS and Depth**
- SMS campaigns with full 10DLC registration infrastructure (Twilio Messaging Services)
- TCPA-compliant opt-in collection: checkbox integration guide for Jobber/HCP intake forms
- $79/mo tier: email + SMS + priority support
- Campaign performance analytics with revenue attribution (estimate: "this campaign generated ~$2,400 in bookings based on reply data")
- Seasonal campaign calendar: pre-scheduled campaigns for the full year by trade

**Phase 4 (12–24 Months): Platform and Ecosystem**
- Campaign template marketplace: users share and sell custom campaigns; network effects and content moat
- Agency/white-label tier: marketing agencies managing 10–50 service businesses pay $200–500/mo for branded version
- Zapier integration: fallback FSM connector for platforms not natively supported (ServiceM8, mHelpDesk, FieldEdge)
- International markets: Canada, Australia, UK (same local service market dynamics, less competition)
- Outcome-based pricing tier: pay per verified reactivated customer booking (% of estimated revenue)

**Long-Term (2–5 Years)**
- AI-generated campaign copy tailored to individual business data (average job value, seasonality, customer tenure)
- Fully autonomous campaign management: tool analyzes FSM data, recommends campaigns, auto-schedules sends, reports outcomes in dollars
- Potential acquisition target for Jobber, HCP, or ServiceTitan as a bolt-on marketing layer, or for Podium/Broadly as a down-market entry point
- White-label to FSM platforms: "Powered by [Product]" marketing automation within Jobber/HCP app marketplace

---

## Strategic Considerations

### Go-to-Market Sequencing

The AppSumo launch is not optional — it is the go-to-market strategy. The "5-minute setup + trade-specific templates + FSM-native" story is purpose-built for AppSumo's audience of small business owners who buy tools to solve specific problems. The $199 LTD removes financial risk, generates reviews immediately, and provides a 500–1,000 customer cohort for product validation before the MRR machine is required.

Post-AppSumo, the growth engine is organic community (r/sweatystartup, r/lawncare, contractor Facebook groups) supplemented by SEO. Paid acquisition is not planned for v1 — the target CAC at $39/mo cannot support Google Ads without a significant LTV extension.

### Competitive Risk: Jobber AI Marketing Suite

Jobber's 2026 AI Marketing Suite is the primary competitive risk. Mitigation:
1. Launch Housecall Pro integration in v1 alongside Jobber — HCP users are completely unserved by native marketing
2. Compete on template depth and trade specificity that Jobber's generic AI can't match at launch
3. Build the multi-FSM story aggressively: "Works with any FSM — even if you switch from Jobber"
4. Move fast: AppSumo launch within 6–8 weeks of build completion

### Compliance Non-Negotiable

SMS is explicitly deferred to v2. TCPA class action litigation increased 95% YoY. A single non-compliant SMS blast to 1,000 contacts = potential $500K–$1.5M exposure. Email is safe, well-understood, and sufficient to prove the model. SMS infrastructure investment (10DLC registration, consent management) requires dedicated time and legal review before launch.

---

*Product Brief created: 2026-05-23*
*Based on: Market Research Report (Local Service Marketing Automation, 2026-05-23) + Shortlisted Idea Score 84/105*
*Next step: create-prd — Full Product Requirements Document*
