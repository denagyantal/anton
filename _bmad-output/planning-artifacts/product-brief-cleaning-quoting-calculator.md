---
stepsCompleted: [1, 2, 3, 4, 5, 6]
inputDocuments:
  - ideas/shortlisted/cleaning-business-self-quoting-widget.md
  - _bmad-output/planning-artifacts/research/market-cleaning-quoting-calculator-research-2026-07-16.md
workflowType: product-brief
lastStep: 6
date: '2026-07-18'
author: Root
project_name: CleanQuote
---

# Product Brief: CleanQuote — Cleaning Business Self-Quoting Widget

<!-- Completed through automated BMAD product brief workflow -->

## Executive Summary

CleanQuote is an embeddable customer-facing quote calculator built exclusively for cleaning businesses. It solves a documented, costly, and currently unserved problem: cleaning business owners lose 28–35% of inbound leads because they cannot respond fast enough to quote requests — and commercial/post-construction businesses spend 30–45 minutes manually calculating per-job estimates for large industrial cleans.

No existing tool combines (1) a customer-facing embeddable widget, (2) commercial/post-construction complexity (debris level, cleaning phases, floor type mix, fixture count), and (3) standalone affordable pricing. QuoteIQ comes closest but requires a full FSM subscription ($189.99+/mo for commercial features). Ganarpro and CleanGuru solve the commercial calculation problem but are internal-only tools — they cannot be embedded on a cleaning company's website for prospect self-service. ZenMaid, BookingKoala, and Launch27 offer residential widgets but have no commercial template capability.

CleanQuote closes this gap with a single-product widget (not a full FSM) starting at $29/mo or a $59 LTD, instantly embeddable on any website. Prospects fill in their property details, receive a price range in real time, and become pre-qualified leads delivered to the owner's dashboard with the full quote context attached. The target market is 350,000+ cleaning businesses with active websites, a community-first go-to-market through r/sweatystartup and cleaning Facebook groups, and an AppSumo LTD launch once the product has 10+ reviews from beta users.

---

## Core Vision

### Problem Statement

Cleaning business owners are losing revenue every day through two separate but equally costly bottlenecks:

**Bottleneck 1 — The Phone-Tag Revenue Leak (residential and recurring commercial):**
A prospect visits a cleaning company's website, sees no way to get an instant price, and moves on to the next search result. Businesses that respond to inquiries within 5 minutes are 100× more likely to make contact than those that respond in 30 minutes, and leads are 21× more likely to convert in that window. The average cleaning business takes 47 hours to respond — meaning the first responder captures 78% of closed deals. A residential cleaning business averaging 80 inbound leads/month loses approximately 28 leads/month to faster-responding competitors; at a $200 average first-clean ticket, this is $5,600/month in direct lost revenue from phone-first quoting alone.

**Bottleneck 2 — The Commercial/Post-Construction Estimation Tax (commercial and post-construction):**
Large commercial cleaning jobs — 30,000–55,000 sq ft industrial facilities, multi-floor post-construction cleanouts — require estimating per-sq-ft pricing across soil level, debris type (light drywall dust vs. heavy construction debris), cleaning phase (rough/final/touch-up), floor type mix (carpet/hard floor/tile percentages), fixture count, and window count. Owners report spending 30–45 minutes per estimate on large jobs. A 10% miscalculation on a $20,000 job is $2,000 of margin lost. Multiple Reddit threads in r/sweatystartup from 2025–2026 document owners manually doing this math while standing on job sites.

No single affordable tool currently solves both problems together.

### Problem Impact

- **$5,600+/month in lost lead revenue** per average residential cleaning business from phone-first quoting delays
- **$200–$2,000 per job in margin risk** on large commercial estimates done manually in the field
- **$50–$150/month in redundant tool spend** for businesses stacking an internal estimating tool (Ganarpro/CleanGuru) with a separate FSM or booking widget
- **Psychological cost**: owners who cannot quote during job-site hours feel the business is "running them" rather than the other way around; 24/7 automated quoting directly addresses this
- **Competitive disadvantage**: cleaning businesses without instant-quoting capability lose to franchises and tech-enabled competitors that have invested in automation

### Why Existing Solutions Fall Short

| Competitor | What They Do | Critical Gap |
|---|---|---|
| **QuoteIQ** ($29.99–$189.99/mo) | Full FSM + customer-facing InstaQuote widget | No dedicated post-construction/commercial variable templates; commercial features require Elite ($189.99+/mo); no standalone widget option |
| **ZenMaid** ($19+/seat) | Residential maid FSM with embeddable booking widget | Residential ONLY; no commercial or post-construction; per-seat pricing scales poorly |
| **BookingKoala** ($27–$79/mo) | Booking widget with template pricing | Template-based only (no variable-complexity quoting); no post-construction support; steep setup |
| **Launch27** ($63.75–$127.50/mo) | Widget-only residential embed | No commercial/post-construction; expensive for widget-only use case; no lead CRM |
| **Ganarpro** (undisclosed SaaS) | Post-construction internal calculator | **Internal tool only** — cannot be embedded on client website; generates proposals to send GCs, not customer-facing quotes |
| **CleanGuru / CleanBid** | Janitorial/commercial internal bidding | **Internal only**; 25+ year-old software; no customer-facing embed capability |
| **Housecall Pro** ($59–$329/mo) | Broad home services FSM | No native instant priced quoting at any tier; customer-facing requires callback |
| **Jobber** ($39–$349/mo) | Broad home services FSM | No native self-quoting; add-on (ResponsiBid) costs $179–$225/mo + $500–$800 setup |

**The core gap:** No tool on the market combines a customer-facing embeddable widget + commercial/post-construction variable complexity + standalone pricing accessible to solo operators. CleanQuote occupies this unclaimed intersection.

### Proposed Solution

**CleanQuote** is a standalone embeddable quote calculator for cleaning businesses. The owner configures their pricing matrix once through a web dashboard; a single `<script>` tag embeds a branded calculator on their website. Prospects get an instant price range without calling. The owner receives a pre-qualified lead with the full quote context.

**How it works — two modes in one product:**

**Residential Mode:**
- Prospect selects service type (standard clean, deep clean, move-in/out, recurring maintenance)
- Selects home details: bedrooms, bathrooms, square footage tier, add-ons (oven, fridge, windows)
- Selects frequency (one-time, weekly, biweekly, monthly) — frequency discount applied automatically
- Receives branded price range (e.g., "$180–$220 for a 3BR/2BA biweekly clean")
- Enters contact info → lead delivered to owner dashboard with full quote context

**Commercial / Post-Construction Mode (premium differentiator):**
- Prospect selects service type (commercial recurring maintenance, post-construction rough clean, post-construction final clean, post-construction touch-up)
- Inputs: total square footage, cleaning phase (rough/final/touch-up), debris level (light drywall dust / medium mixed debris / heavy construction debris), floor type mix (% carpet / % hard floor / % tile), fixture count (restrooms, sinks), window count
- Owner has pre-set per-sq-ft base rates per phase, with multipliers for soil level and floor type — all configurable in dashboard
- Output: line-item estimate with breakdown (sq ft base + debris multiplier + fixture charge + floor type factor) and a margin-safe price range

**Owner dashboard:**
- Pricing matrix builder with industry benchmark suggestions
- Lead inbox showing each quote request with property details and estimated price
- Basic CRM: assign lead to staff, mark contacted/booked/lost
- Embed code generator with platform-specific guides (WordPress, Wix, Squarespace, Weebly, GoDaddy)

### Key Differentiators

| Differentiator | Why It Matters | Competitive Advantage |
|---|---|---|
| **Customer-facing embed + post-construction complexity** | No competitor combines these two capabilities | Ganarpro solves the calculation but can't be embedded; widget tools don't handle commercial complexity |
| **Standalone widget pricing** | Cleaning businesses that don't need a full FSM are underserved | $29–$49/mo vs. $189.99+/mo at QuoteIQ for commercial features |
| **Pre-qualified lead handoff** | Owner receives lead with full quote context, not just "contact us" | Transforms the widget from a convenience feature into a revenue system |
| **LTD option** | Price-sensitive cleaning operators respond strongly to pay-once | No competitor offers a cleaning-specific widget LTD; AppSumo channel is open |
| **Industry benchmark suggestions** | Owners don't know what to charge when setting up pricing matrix | Reduces time-to-first-embed and improves pricing confidence |
| **24/7 availability** | Owners clean during business hours; prospects browse at any time | Widget quotes while owner is on a job site, evenings, weekends |

---

## Target Users

### Primary Users

#### Persona 1: Tony — The Solo-to-Small Residential Cleaner

**Profile:**
- Age 34, owns "Pristine Home Cleaning" in suburban Columbus, OH
- Operates solo with 2 part-time cleaners; ~35 recurring residential clients
- Revenue: ~$8K/month | Profit margin: ~20%
- Website on Wix; active on Facebook; member of r/sweatystartup
- Phone is always with him — manages his entire business from it

**Problem Experience:**
Tony knows he loses 5–10 potential clients every month because they visit his website, see no pricing, and call a competitor who answers immediately. He's tried adding a "Request a Quote" form but rarely responds same-day because he's cleaning 8 hours a day. He quotes manually by phone in the evenings, spending 45–60 minutes per night on calls that often go nowhere.

**Current Workaround:**
A Google Form that sends him an email; he responds when he can, usually the next morning. He knows prospects have moved on by then.

**Success Vision:**
Tony wants to wake up to a dashboard showing 3 new pre-qualified quote requests from overnight, each with the prospect's home details and an estimated price already calculated. He wants to spend 10 minutes confirming bookings instead of 60 minutes on quote calls.

**Key Behavior:**
Discovers tools on r/sweatystartup, buys on impulse if the ROI story is clear and the price is under $100 lifetime. Will recommend enthusiastically to his cleaning Facebook group if it works within the first week.

---

#### Persona 2: Sandra — The Commercial Cleaning Owner

**Profile:**
- Age 47, owns "Metro Commercial Cleaning" in Atlanta, GA; 8 employees
- Primarily commercial accounts (offices, industrial, post-construction cleanouts)
- Revenue: ~$40K/month | Profit margin: ~12%
- Has a website (WordPress) but no online quoting — all estimates done in person or by phone
- Regularly bids on post-construction jobs from GCs

**Problem Experience:**
Sandra spends 30–45 minutes estimating every post-construction job, doing the math on her phone's calculator: sq ft × soil level factor × debris type × floor type mix × fixture count. She frequently wins jobs at margins lower than intended because she underestimates debris levels or floor type complexity. She loses some bids entirely because she can't respond to RFQs fast enough.

**Current Workaround:**
An Excel spreadsheet she's built over 5 years, updated manually with each job. She copies and pastes figures into email quotes. The spreadsheet isn't accessible to her office manager, so Sandra is the bottleneck for every estimate.

**Success Vision:**
Sandra wants a way for her office manager to run estimates without her, and eventually wants prospects (GCs, property managers) to get a rough ballpark instantly from her website. She wants line-item transparency in her quotes to justify her prices to GC clients.

**Key Behavior:**
Researches tools thoroughly before buying; will pay $49/mo without hesitation if the commercial template genuinely handles debris levels and cleaning phases the way her Excel spreadsheet does. Has tried QuoteIQ but found the commercial features too simplified.

---

#### Persona 3: Jaylen — The Cleaning Business Agency Owner

**Profile:**
- Age 41, runs a consulting/management operation for 7 cleaning businesses in the Southeast
- Provides website management, lead generation, and business systems to his clients
- Revenue from consulting: ~$12K/month
- His clients are mostly solo to 3-person residential cleaning businesses

**Problem Experience:**
Jaylen wants to offer a white-labeled quoting widget to all 7 of his clients — branded with each business's colors and name — but no tool offers white-label at an accessible price point. QuoteIQ doesn't white-label. Building a custom widget for each client is time-prohibitive.

**Current Workaround:**
Generic "Contact Us" forms on all client websites; Jaylen handles follow-up calls on their behalf. This doesn't scale.

**Success Vision:**
One agency account where Jaylen can spin up 7 branded widget instances, each with their own pricing matrix, and manage all leads from a central dashboard. At $99/mo for the agency tier, he adds a $50/mo markup per client and earns $350/mo in margin from this service.

**Key Behavior:**
Will pay for agency tier immediately if white-label and multi-client management work reliably. Will refer CleanQuote to his consulting network of 30+ cleaning business owners.

---

### Secondary Users

**Property Managers and General Contractors (lead submitters, not buyers):**
For Sandra's commercial clients, the *prospect* is often a property manager or GC who needs a rough ballpark quickly before they issue a formal RFQ. They use the widget to pre-screen vendors before requesting detailed bids. They don't pay for CleanQuote but are the end-users of the customer-facing widget experience.

**Cleaning business coaches and communities (influencers/distributors):**
Operators like Jaylen who run cleaning business coaching communities on Facebook and YouTube will recommend CleanQuote to their audiences if it works reliably. These influencers (10K–100K follower accounts in the cleaning niche) are secondary distribution channels that amplify the community-first GTM.

### User Journey

**Residential Owner (Tony) — Discovery to First Lead:**

| Stage | Experience |
|---|---|
| **Discovery** | Sees a Reddit post in r/sweatystartup: "I built the quote calculator you've been asking for." Clicks the link. |
| **Onboarding** | Signs up for 14-day free trial. Dashboard presents pricing matrix setup with residential template pre-populated with industry benchmarks. Adjusts 5–6 values to match his rates. Total time: ~18 minutes. |
| **Embed** | Copies the 1-line embed code. Follows Wix-specific guide to paste it into his site. Widget goes live. Total time: ~8 minutes. |
| **First Lead** | 14 hours later (overnight), receives first self-quoted lead: "3BR/2BA biweekly clean — prospect estimated $175–$210 — contact info attached." |
| **Aha Moment** | Opens dashboard in the morning, sees the lead, calls prospect, books the job. Realizes he would have missed this lead on the old form. Converts to paid plan. |
| **Long-term** | Receives 6–12 quote requests/week through the widget. Spends 20 minutes/week confirming bookings instead of 60+ minutes on quote calls. Posts a 5-star review and recommends it in his cleaning Facebook group. |

**Commercial Owner (Sandra) — Discovery to Embedded Commercial Widget:**

| Stage | Experience |
|---|---|
| **Discovery** | Googles "post-construction cleaning estimator online" — finds CleanQuote's SEO content. Compares feature matrix: CleanQuote is the only tool with debris level + floor type mix + cleaning phases. |
| **Onboarding** | Signs up for Growth tier trial. Imports her Excel rates into the commercial pricing matrix with help from setup guide. Takes ~35 minutes (more complex configuration). |
| **Embed** | Has her web person paste the embed code on the WordPress site. Widget now shows a "Get a Commercial Quote" button. |
| **First Lead** | A property manager submits a quote request for a 12,000 sq ft post-construction final clean — heavy debris, 60% hard floor, 40% tile, 4 restrooms. Pre-calculated estimate: $3,800–$4,600. Sandra calls back with a formal bid at $4,200. Wins the job. |
| **Aha Moment** | Realizes she would have spent 40 minutes estimating this manually and might have underpriced it. The transparency of the line-item breakdown also helps her justify the price to the GC client. |
| **Long-term** | Both her office manager and her use the internal pricing matrix for all commercial estimates. Widget also generates 2–3 inbound commercial leads per month. Upgrades to agency tier to manage widgets for 2 partner businesses. |

---

## Success Metrics

### User Success Metrics

The primary measure of user value is **time-to-first-lead-through-widget** — the duration from account creation to the first self-quoted lead appearing in the owner's dashboard. If this happens within 48 hours, the owner has tangible proof of value before they've invested enough time to disengage.

**Activation Metrics:**
- % of new accounts that complete pricing matrix setup within 24 hours of signup (target: 70%)
- % of new accounts that embed widget on live website within 72 hours (target: 55%)
- % of new accounts that receive first self-quoted lead within 7 days of embedding (target: 60%)

**Engagement Metrics:**
- Average weekly leads received per active widget (target: 3–8/week for residential tier, 1–3/week for commercial tier)
- % of leads logged as "contacted" or "booked" in CRM within 48 hours (target: 65%)
- Monthly active dashboard visits per paid account (target: 8+/month)

**User Success Signal:**
The core user success moment is when an owner opens their dashboard and sees a pre-qualified lead they would have missed under their old phone-first process. Qualitative confirmation comes from users reporting "I got a booking I would have missed" in reviews and referrals.

### Business Objectives

**Month 3:**
- 100 paying customers (mix of LTD and monthly)
- $3,500–$5,000 MRR from monthly plans
- 10+ verified reviews (AppSumo + G2/Trustpilot)
- AppSumo LTD launch completed with 200+ LTD sales at $59–$79 avg

**Month 12:**
- 500+ paying customers
- $19,000–$24,000 MRR from monthly plans
- NPS > 45
- 2+ cleaning business influencer partnerships driving organic referrals
- Commercial tier accounts for 30% of MRR (vs. 20% residential share)

**Month 18:**
- 1,200+ paying customers
- $50,000+ MRR
- White-label/agency tier accounts for 15% of revenue
- Recognized as the default recommendation in r/sweatystartup for quoting

### Key Performance Indicators

| KPI | Target (Month 3) | Target (Month 12) | Measurement Method |
|---|---|---|---|
| Paying customers | 100 | 500 | Stripe |
| MRR | $5,000 | $22,000 | Stripe |
| Activation rate (embed within 72h) | 50% | 60% | Product analytics |
| Time-to-first-lead (median) | < 72 hours after embed | < 48 hours after embed | Product analytics |
| Trial-to-paid conversion | 20% | 30% | Stripe / app |
| Monthly churn | < 8% | < 5% | Stripe |
| NPS | 35 | 50 | In-app survey |
| Leads generated per active widget/mo | 8 | 12 | Product analytics |
| Commercial tier % of revenue | 20% | 30% | Stripe plan data |
| Organic referrals (from community) | 15% of signups | 30% of signups | Signup source tracking |

**North Star Metric:** Total leads generated through CleanQuote widgets per month (proxy for network effect and customer value; growing this metric means CleanQuote is actively capturing revenue for its users).

---

## MVP Scope

### Core Features

The MVP must deliver the complete residential quoting widget with lead capture — this is the fastest path to demonstrating value, the most validated use case, and the necessary foundation before commercial complexity is added.

**MVP — Residential Widget (2–3 weeks):**

1. **Pricing Matrix Builder (Dashboard)**
   - Owner configures: service types (standard, deep, move-in/out, recurring), sq ft tiers, bedroom/bathroom pricing, add-ons (oven, fridge, windows, etc.)
   - Frequency discount settings (biweekly/monthly)
   - Industry benchmark suggestions pre-populate the matrix on first setup
   - Output: price range (low + high) calculated from configured rates

2. **Embeddable Widget (Frontend)**
   - Branded with owner's business name and primary color (configurable in dashboard)
   - Multi-step form: service type → property details → frequency → contact info → price range display
   - Responsive design; mobile-first (60%+ of prospects browse on phone)
   - 1-line `<script>` embed code generated per account

3. **Lead Inbox (Dashboard)**
   - Each submitted quote shows: prospect name, contact info, service type, property details, estimated price range, submission timestamp
   - Simple CRM actions: mark as contacted / booked / lost
   - Email notification to owner on new lead submission

4. **Embed Setup Guides**
   - Step-by-step visual guides for: WordPress, Wix, Squarespace, Weebly, GoDaddy, Showit
   - "Send to your web person" email template (for non-technical owners)

5. **Account & Billing**
   - Email/password auth + Google OAuth
   - Stripe-powered billing: $29/mo Starter plan, 14-day free trial
   - Single widget embed per account on Starter tier

**Post-MVP Step 1 — Commercial Templates (Month 2):**
6. **Commercial Pricing Matrix**
   - Sq ft + phase (rough/final/touch-up) base rates
   - Debris level multipliers (light/medium/heavy)
   - Floor type mix weights (carpet/hard floor/tile)
   - Fixture count charges (per restroom, per sink)
   - Window count charges
   - Line-item breakdown shown to prospect with price range

7. **Growth Plan**
   - $49/mo (or $79 LTD); unlocks commercial templates + 3 widget embeds

**Post-MVP Step 2 — Agency/White-Label (Month 4–5):**
8. **Agency Dashboard**
   - Manage up to 10 client accounts from one login
   - Per-client pricing matrix and widget configuration
   - Custom branding per client (logo, colors, domain)
   - Consolidated lead inbox across all clients
   - $99/mo agency tier

### Out of Scope for MVP

The following are explicitly deferred to avoid scope creep and ensure the MVP ships within 2–3 weeks:

- **Calendar/scheduling integration** — CleanQuote is a lead generation tool, not a full FSM. Integration with Jobber, ZenMaid, etc. is a v2 add-on.
- **Payment collection** — Booking deposits and payment processing are out of scope; the widget generates leads, not transactions.
- **AI-powered photo analysis** — Auto-estimating from uploaded property photos is a future premium feature.
- **CRM integrations** (HubSpot, Pipedrive, Zapier) — v2; MVP provides basic built-in lead inbox.
- **SMS/email marketing** — Follow-up automation to leads is out of scope; owner handles follow-up manually.
- **Review request automation** — Out of scope; focus on core quoting function.
- **Native mobile app** — Widget is mobile-responsive; dashboard is web-based. Native app is v2.
- **Multi-language widget** — English-only for MVP; Spanish localization is v2.
- **Offline mode** — Not applicable to a web widget.

### MVP Success Criteria

The MVP is considered successful when the following are true simultaneously:

1. **10 beta users** have embedded the residential widget on live websites within the first 2 weeks of beta access
2. At least **7 of those 10 beta users** receive at least 1 self-quoted lead through the widget within 7 days of embedding
3. At least **3 beta users** provide a written testimonial referencing a booking they made from a widget lead
4. Trial-to-paid conversion rate reaches **20%** or higher in the first 30 days of paid plan availability
5. No critical bugs that prevent widget loading or lead submission on any of the 6 supported website platforms

The go/no-go decision for commercial templates (Month 2) is based on beta user feedback: if 30%+ of beta users ask for commercial/post-construction quoting functionality, we proceed on schedule.

### Future Vision

CleanQuote's long-term trajectory is to become the de facto quoting infrastructure layer for the cleaning industry — the tool that sits between a cleaning company's website and their FSM, handling lead capture, qualification, and pricing.

**12–24 Month Vision:**

- **Integration marketplace**: Native integrations with Jobber, ZenMaid, Housecall Pro — CleanQuote quotes flow directly into FSM as jobs, eliminating manual data re-entry
- **AI debris estimation**: Upload site photos → AI suggests debris level and floor type mix for post-construction bids, reducing manual field assessment time
- **Competitor benchmarking**: Aggregate (anonymized) pricing data from all CleanQuote users to show "your price vs. market" benchmarks by region and service type
- **Dynamic pricing**: Allow owners to set demand-based pricing multipliers (surge on weekends, discounts on slow days)
- **Spanish-language widget**: Full ES localization for widgets serving Spanish-speaking prospects (significant underserved segment)
- **Multi-location widget management**: For cleaning franchises and multi-market operators

**3-Year Vision:**

CleanQuote becomes the "Stripe for cleaning quotes" — a utility that any cleaning business website can embed in 10 minutes, and that GCs, property managers, and homeowners increasingly expect to see on any professional cleaning company's website. Network effects from industry-wide adoption drive pricing benchmarks and market intelligence that no individual tool can provide.

Market expansion targets: window cleaning, pressure washing, carpet cleaning (adjacent verticals with identical pricing complexity problems and no dedicated customer-facing calculator).

---

## Go-to-Market Strategy

### Launch Sequence

**Phase 1 — Beta (Weeks 1–4):**
- Post in r/sweatystartup: "I'm building the quote calculator you've been asking for — looking for 5 beta testers" (no sales, request for help framing)
- Target: 10 beta users from the community; free access in exchange for weekly feedback calls and testimonials
- Success gate: 7/10 beta users receive at least 1 widget lead within 7 days of embed

**Phase 2 — Community Launch (Weeks 5–8):**
- Reddit launch post: "I built the thing — here's what happened" with before/after data from beta users
- Facebook group posts in 3–5 cleaning business groups (50K+ members each)
- Outreach to myquoteiq.com for guest post or product review (they rank #1 for "best self-quoting software cleaning")
- 14-day free trial, no credit card required

**Phase 3 — AppSumo LTD (Months 3–4):**
- Submit to AppSumo after achieving 10+ verified reviews
- LTD pricing: $59 (residential) / $79 (commercial templates)
- Target: 500 LTD sales (~$34.5K one-time revenue, strong review base)
- AppSumo listing copy anchor: "24/7 cleaning quotes while you're on the job"

**Phase 4 — Ongoing (Month 5+):**
- SEO content targeting "cleaning business quote calculator", "post-construction cleaning estimator", "embeddable cleaning quote widget"
- YouTube tutorials: "How to price post-construction cleaning jobs" (educational funnel)
- Cleaning business influencer partnerships (Facebook/YouTube coaches with 10K+ followers)
- Agency tier outreach to cleaning business consultants and coaches

### Pricing Summary

| Plan | Monthly | LTD | Includes |
|---|---|---|---|
| Starter | $29/mo | $59 | Residential calculator, 1 widget embed, unlimited leads, basic lead CRM |
| Growth | $49/mo | $79 | Starter + commercial/post-construction templates, 3 widget embeds |
| Agency | $99/mo | — | 10 client accounts, white-label branding per client, reseller portal |

---

## Risk Assessment

| Risk | Probability | Impact | Mitigation |
|---|---|---|---|
| QuoteIQ adds post-construction templates to lower tiers | Medium (6–18 months) | High | Move fast; establish brand/community loyalty before they respond |
| Non-technical owners can't embed widget independently | High | Medium | Proactive: platform-specific guides, "send to web person" template, offer live embed help chat in first 30 days |
| Price sensitivity blocks conversion ($29/mo feels high) | Medium | Medium | LTD framing eliminates recurring objection; ROI calculator ("how many leads do you need to break even?") in onboarding |
| Beta users don't generate leads in first 7 days | Low-Medium | High | Proactively help beta users with widget placement and pricing matrix setup; ensure widget is above-the-fold on their sites |
| Commercial template complexity underestimated in build | Medium | Medium | Ship residential first; commercial is a clear Phase 2 with 4–6 additional weeks |
