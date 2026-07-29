---
stepsCompleted: [step-01-init, step-02-discovery, step-02b-vision, step-02c-executive-summary, step-03-success, step-04-journeys, step-05-domain, step-06-innovation, step-07-project-type, step-08-scoping, step-09-functional, step-10-nonfunctional, step-11-polish, step-12-complete]
inputDocuments:
  - ideas/shortlisted/cleaning-business-self-quoting-widget.md
  - _bmad-output/planning-artifacts/product-brief-cleaning-quoting-calculator.md
  - _bmad-output/planning-artifacts/research/market-cleaning-quoting-calculator-research-2026-07-16.md
workflowType: prd
lastStep: step-12-complete
date: '2026-07-29'
author: Root
project_name: CleanQuote
classification:
  projectType: saas_b2b
  domain: vertical_saas_small_business
  complexity: low_medium
  projectContext: greenfield
---

# Product Requirements Document — CleanQuote

**Author:** Root
**Date:** 2026-07-29
**Project:** CleanQuote — Cleaning Business Self-Quoting Widget

---

## Executive Summary

CleanQuote is a standalone embeddable quote calculator built exclusively for cleaning businesses. Cleaning business owners lose 28–35% of inbound leads because prospects visit their website, see no pricing, and move to a faster-responding competitor. For commercial and post-construction cleaning companies, the problem compounds: a 30,000–55,000 sq ft industrial job requires 30–45 minutes of manual estimation math, creating margin risk of $200–$2,000 per job when variables like debris level and floor type mix are miscalculated.

No existing tool closes the gap between (1) a customer-facing embeddable widget and (2) commercial/post-construction quoting complexity at standalone pricing accessible to solo operators. QuoteIQ offers both a widget and commercial features but only at $189.99+/mo bundled inside a full FSM. Ganarpro and CleanBid handle commercial calculations but are internal-only tools with no customer-facing embed capability. Launch27 and BookingKoala offer widgets but are residential-only with no commercial template support. ZenMaid and Housecall Pro have no native customer-facing quoting at any tier.

CleanQuote occupies this unclaimed intersection: a single-product embeddable widget starting at $29/mo (or $59 LTD) that handles both residential and commercial/post-construction quoting, delivers pre-qualified leads with full quote context to the owner's dashboard, and embeds on any website with a single `<script>` tag. The target market is 350,000+ cleaning businesses with active websites; go-to-market begins in r/sweatystartup and cleaning Facebook groups, followed by an AppSumo LTD launch after 10+ verified reviews.

### What Makes This Special

The core differentiator is the combination of two capabilities no competitor bundles at accessible pricing: a **customer-facing embeddable widget** with **commercial/post-construction variable complexity** (debris level, cleaning phase, floor type mix, fixture count, window count). This makes CleanQuote simultaneously a 24/7 lead capture engine for residential businesses and a field-ready commercial estimation tool that prospects can self-serve — addressing two distinct but co-located revenue problems with one product.

The business model is also differentiated: LTD pricing ($59–$79) removes the recurring-cost objection that blocks price-sensitive cleaning operators from adopting SaaS, while the agency tier ($99/mo) enables cleaning business consultants to white-label and resell the widget across client portfolios at a margin.

The operational differentiator is the **pre-qualified lead handoff**: the owner receives not just a contact form submission but the full quote context — service type, property details, and estimated price range — meaning they can confirm a booking in 10 minutes instead of spending 45 minutes recalculating on a callback.

## Project Classification

- **Project Type:** SaaS B2B — embeddable widget frontend + owner dashboard + REST API
- **Domain:** Vertical SaaS / Small Business Tooling (cleaning industry)
- **Complexity:** Low-Medium — greenfield product with standard web app patterns; no regulated data; cleaning-specific domain logic is the primary complexity
- **Project Context:** Greenfield — new product, no existing codebase or migration constraints

---

## Success Criteria

### User Success

Users succeed when they receive a pre-qualified lead they would have missed under their prior phone-first process. The specific success moment is an owner opening their dashboard to find a new quote submission with full property context and an estimated price range — a booking they can close in 10 minutes instead of 60 minutes of evening quote calls.

**Activation Success (leading indicators):**
- New account completes pricing matrix setup within 24 hours of signup (target: 70% of new accounts)
- Widget is embedded on a live website within 72 hours of account creation (target: 55%)
- First self-quoted lead appears in dashboard within 7 days of embedding (target: 60%)

**Engagement Success (ongoing):**
- Owner actively reviews lead inbox at least 2×/week
- At least 60% of leads are marked "contacted" or "booked" within 48 hours of submission
- Owner does not revert to phone-only quoting after 30 days on platform

**Outcome Success (proof of value):**
- Owner can directly attribute at least one booked job per month to a widget-sourced lead
- Commercial tier users eliminate manual spreadsheet estimation for at least 80% of their commercial bids
- Owner reports time spent on quote calls reduced by >50% within 60 days of activation

**Commercial Tier Specific Success:**
- Sandra-type user configures commercial matrix within 48 hours and generates first line-item estimate
- Commercial estimate accuracy within 10% of the owner's manual estimate (validates pricing matrix calibration)
- GC/property manager prospects receive and act on widget estimates without requiring a follow-up call

### Business Success

**Month 3 Targets:**
- 100 paying customers (mix of LTD and monthly)
- $3,500–$5,000 MRR from monthly plans
- 10+ verified reviews on AppSumo and/or G2/Trustpilot
- AppSumo LTD launch completed with 200+ LTD sales at $59–$79 avg

**Month 12 Targets:**
- 500+ paying customers
- $19,000–$24,000 MRR from monthly plans
- NPS > 45
- 2+ cleaning business influencer partnerships driving organic referrals
- Commercial tier accounts for 30% of MRR

**Month 18 Targets:**
- 1,200+ paying customers
- $50,000+ MRR
- Agency tier accounts for 15% of revenue
- Recognized as the default recommendation in r/sweatystartup for quoting

### Technical Success

- Widget loads from CDN in < 1.5 seconds on average mobile connection (4G)
- Widget embeds successfully on all 6 target platforms without CSS/JS conflicts: WordPress, Wix, Squarespace, Weebly, GoDaddy, Showit
- Lead submission success rate > 99.5% (no data loss on submission)
- Dashboard API read responses < 500ms at p95
- Platform uptime: 99.9% for widget CDN, 99.5% for dashboard API

### Measurable Outcomes (KPIs)

| KPI | Month 3 Target | Month 12 Target | Measurement Method |
|-----|---------------|-----------------|-------------------|
| Paying customers | 100 | 500 | Stripe |
| MRR | $5,000 | $22,000 | Stripe |
| Activation: embed within 72h | 50% | 60% | Product analytics |
| Median time-to-first-lead post-embed | < 72 hours | < 48 hours | Product analytics |
| Trial-to-paid conversion | 20% | 30% | Stripe / app |
| Monthly churn | < 8% | < 5% | Stripe |
| NPS | 35 | 50 | In-app survey |
| Leads per active widget/month | 8 | 12 | Product analytics |
| Commercial tier % of revenue | 20% | 30% | Stripe plan data |
| Organic referral % of signups | 15% | 30% | Signup source tracking |

**North Star Metric:** Total leads generated through CleanQuote widgets per month — growing this metric means CleanQuote is actively capturing revenue for its users.

## Product Scope

### MVP — Minimum Viable Product (Weeks 1–3)

The MVP delivers the complete residential quoting widget with lead capture — the fastest path to validating the core value proposition (24/7 self-quoting leads to bookable business) before adding commercial complexity or agency features.

**MVP Success Gate (go/no-go for Phase 2):**
1. 10 beta users embed residential widget on live websites within 2 weeks of beta access
2. 7/10 beta users receive at least 1 self-quoted lead within 7 days of embedding
3. 3+ beta users provide a written testimonial referencing a booking from a widget lead
4. Trial-to-paid conversion reaches 20%+ in the first 30 days of paid plan availability
5. No critical bugs preventing widget load or lead submission on any of the 6 supported platforms

**Core Capabilities:**
1. Residential pricing matrix builder with benchmark pre-population
2. Embeddable widget — branded, mobile-first, multi-step residential quote form
3. Lead inbox with full quote context (service type, property details, estimated price, timestamp)
4. Email notification on new lead submission
5. Basic CRM actions on leads (contacted / booked / lost)
6. 1-line embed code generator
7. Platform-specific embed guides (WordPress, Wix, Squarespace, Weebly, GoDaddy, Showit)
8. "Send to web person" email template
9. Google OAuth + email/password authentication
10. Stripe billing — $29/mo Starter, 14-day free trial (no CC required at signup)
11. One widget embed per Starter account

### Growth Features — Phase 2 (Month 2)

**Trigger:** 30%+ of beta users request commercial/post-construction quoting functionality.

- Commercial pricing matrix: per-sq-ft base rates by cleaning phase (rough/final/touch-up), debris level multipliers (light/medium/heavy), floor type mix weights (carpet/hard floor/tile %), fixture count charges, window count charges
- Line-item estimate breakdown shown to prospect in widget and owner in lead inbox
- Growth plan: $49/mo / $79 LTD — unlocks commercial templates + 3 widget embeds per account
- Widget customization: logo upload, extended color options, custom CTA text

### Vision — Phase 3 (Month 4+)

- Agency/white-label dashboard: manage up to 10 client sub-accounts, per-client branding (logo, colors, domain), consolidated multi-client lead inbox, $99/mo agency tier
- CRM integrations: Zapier, HubSpot, Pipedrive lead routing
- Calendar/FSM integration: Jobber, ZenMaid, Housecall Pro booking handoff — widget quotes flow directly into FSM as jobs
- AI debris estimation: upload site photos → AI suggests debris level and floor type mix
- Competitor benchmarking: anonymized pricing benchmarks by region and service type
- Spanish-language widget: full ES localization for Spanish-speaking prospect markets
- Dynamic pricing: demand-based multipliers (weekend surge, slow-day discounts)
- Multi-location widget management for cleaning franchises

**Explicitly Out of Scope for MVP:**
- Calendar/scheduling integration
- Payment collection or booking deposits
- AI photo analysis
- CRM integrations (Zapier, HubSpot, Pipedrive)
- SMS/email marketing or follow-up automation
- Review request automation
- Native mobile app
- Multi-language widget
- Offline mode

---

## User Journeys

### Journey 1 — Tony: Solo Residential Cleaner (Primary Success Path)

**Persona:** Tony, age 34, owns Pristine Home Cleaning in Columbus, OH. Solo with 2 part-time cleaners. ~35 recurring residential clients, ~$8K/month revenue. Website on Wix, active on Facebook and r/sweatystartup. Manages everything from his phone while cleaning.

**Opening Scene:** Tony is cleaning a client's kitchen when his phone buzzes — another "Contact Us" form submission he'll need to call back tonight. He's lost 3 potential clients this month to competitors who answered the phone first. He's tired of the evening call marathon: 45–60 minutes of quote calls that often go nowhere.

That evening, a post in r/sweatystartup catches his eye: "I built the quote calculator you've been asking for." The link takes him to CleanQuote.

**Rising Action:** Tony signs up for a free trial. The dashboard opens on a pricing matrix setup screen, pre-populated with residential benchmarks ($120–$180 for a 2BR/1BA standard clean, $15 per add-on). He spends 18 minutes adjusting 6 values to match his actual rates. The interface is simple enough to navigate on his phone. He copies the 1-line embed code and follows the Wix guide — 8 minutes to paste it. His website now shows a "Get an Instant Quote" button.

**Climax:** Fourteen hours later, he opens his dashboard before starting his first job of the day. A new lead: "3BR/2BA biweekly clean — estimated $175–$210 — Sarah K., [phone number], submitted at 11:42 PM." Sarah was browsing at midnight. Tony calls her at 8 AM — she booked a biweekly recurring.

**Resolution:** Tony realizes he would have completely missed Sarah under his old form. In month 2, he receives 8 widget leads and books 5. He posts a review in r/sweatystartup: "Made $2,000 in new clients this month from leads I would have missed." His post brings 3 more referral signups.

**Key Requirements Revealed:**
- Pricing matrix with residential benchmark pre-population
- Mobile-usable dashboard
- 1-line embed code with Wix-specific guide
- Lead inbox showing contact info, service type, property details, estimated price, and timestamp
- Email notification on lead submission

---

### Journey 2 — Tony: Failed Embed (Edge Case / Recovery Path)

**Opening Scene:** Tony uses Wix, but his website was built by his daughter on a legacy Wix editor template. He pastes the embed code, but the widget doesn't render — just a blank area on the page.

**Rising Action:** Tony clicks "Having trouble?" on the embed guide page. He finds a troubleshooting section for non-standard Wix editor issues. He can't identify his exact Wix template version. He clicks "Contact Support."

**Climax:** A chat window opens. Tony pastes his site URL. The support agent identifies the template version and sends Tony a "Send to web person" email template pre-filled with the correct embed method for his specific Wix setup. Tony forwards it to his daughter.

**Resolution:** His daughter makes the fix within 4 hours. Widget goes live. Tony never had to understand the technical issue — he just forwarded an email.

**Key Requirements Revealed:**
- Troubleshooting documentation with platform-specific edge cases
- "Send to web person" email template pre-filled with account's embed code and instructions
- Support channel accessible from the embed guide pages

---

### Journey 3 — Sandra: Commercial Cleaning Owner (Commercial Estimation Path)

**Persona:** Sandra, age 47, owns Metro Commercial Cleaning in Atlanta, GA. 8 employees. Primarily commercial accounts and post-construction cleanouts, ~$40K/month revenue. Uses WordPress. Regularly bids on post-construction jobs from GCs.

**Opening Scene:** Sandra is on a job site at a 15,000 sq ft post-construction cleanout — 40% carpet, 60% hard floor, medium debris level. Her phone's calculator is open. She's been estimating: $0.28/sq ft base × carpet factor × debris multiplier × hard floor factor... she loses count and guesses $4,200. A week later she wins the job but it takes 12 hours longer than estimated. She underpriced the debris level. Margin lost: ~$800.

That night she Googles "post-construction cleaning estimator online" and finds CleanQuote's SEO content — the only result that mentions debris level and floor type mix variables.

**Rising Action:** Sandra signs up for the Growth tier trial. She imports her Excel rates into the commercial pricing matrix using the setup guide — 35 minutes. Her configurations: debris multipliers (light = 1.0×, medium = 1.3×, heavy = 1.7×), floor type weights (carpet = 0.85, hard floor = 1.0, tile = 1.1), fixture charges ($35 per restroom). She has her web person paste the embed code on her WordPress site.

A property manager submits a quote through Sandra's website widget: 12,000 sq ft final clean, heavy debris, 40% hard floor, 60% tile, 4 restrooms, 12 windows. The system calculates: **$3,800–$4,600**.

**Climax:** Sandra calls back with a formal bid at $4,200. Her dashboard shows her the full line-item breakdown: base sq ft at $0.28 × 12,000 = $3,360 + heavy debris multiplier (1.7×) applied to incremental = totals to $4,200 estimated midpoint. She uses the line-item transparency to justify the price to the GC client: "The debris level on a final clean at this stage requires a 1.7× factor." GC accepts.

**Resolution:** Sandra eliminates her Excel spreadsheet for standard commercial bids. Her office manager now runs estimates independently without calling her. She upgrades to the agency tier to manage widgets for two partner businesses.

**Key Requirements Revealed:**
- Commercial pricing matrix: sq ft × phase × debris level multipliers × floor type mix weights × fixture count charges × window count charges
- Line-item estimate breakdown shown in both the widget output and the lead inbox
- Configurable multipliers and weights in the dashboard
- Widget works for GC/property manager prospects as lead submitters
- Office manager needs access (at minimum read access to lead inbox)

---

### Journey 4 — Jaylen: Agency Owner (Agency/White-Label Path)

**Persona:** Jaylen, age 41, runs a consulting operation managing 7 cleaning businesses in the Southeast. Provides website management, lead generation, and business systems. ~$12K/month consulting revenue. His clients are mostly solo to 3-person residential businesses.

**Opening Scene:** Jaylen handles follow-up calls on behalf of his 7 cleaning business clients using their "Contact Us" forms. He's hitting a wall — 7 clients means ~40 phone leads per week to qualify. He can't scale this model. He needs a way to let prospects self-qualify through each client's website.

**Rising Action:** Jaylen discovers CleanQuote through a cleaning Facebook group post. He immediately sees the agency play. He signs up for the Agency tier and creates 7 sub-accounts — each configured with the client's business name, brand colors, and actual pricing matrix. Each widget is embedded on the respective client's website.

**Climax:** In week 2, four of his seven clients receive their first self-quoted lead. Jaylen can see all 7 lead inboxes from his central agency dashboard. One client receives a lead for a biweekly 3BR/2BA clean at $185–$220 and books it directly — without Jaylen's involvement.

**Resolution:** Jaylen adds CleanQuote setup and management as a $50/month service line for each client — $350/month in recurring margin from the $99/month agency tier cost. He refers CleanQuote to 12 other cleaning business consultants in his network. His client NPS improves because clients are booking leads they previously missed.

**Key Requirements Revealed:**
- Agency dashboard with multi-client sub-account management
- Per-client widget branding (business name, colors, logo)
- Per-client independent pricing matrix
- Consolidated lead inbox showing leads across all sub-accounts
- Agency billing tier at $99/mo covering up to 10 client accounts

---

### Journey Requirements Summary

| Journey | Core Capabilities Revealed |
|---------|---------------------------|
| Tony — Success Path | Residential pricing matrix with benchmarks, mobile dashboard, embed code + Wix guide, lead inbox with context, email notification |
| Tony — Failed Embed | "Send to web person" template, troubleshooting docs, support channel from embed guide |
| Sandra — Commercial Path | Commercial matrix (debris/phase/floor/fixtures/windows), line-item breakdown, multi-user access, GC-compatible widget UX |
| Jaylen — Agency Path | Multi-account management, per-client branding, consolidated inbox, agency billing tier |

---

## SaaS B2B Specific Requirements

### Multi-Tenancy Model

Each cleaning business is an isolated tenant. Tenant isolation is enforced at the data layer — one tenant's leads, pricing matrices, and widget configurations are never accessible to another tenant.

**Tenant Boundaries:**
- Pricing matrix: per-tenant, private to that account
- Lead inbox: per-tenant, private (agency accounts can read all sub-tenant leads)
- Widget embed token: per-tenant, unique non-guessable identifier
- Billing: per-tenant Stripe subscription (agency accounts bill for all sub-accounts via one subscription)

**Agency Nested Model:**
The agency account is a parent tenant that owns sub-accounts (client accounts). The agency admin can read all sub-account data and configure sub-account widgets but cannot access sub-account billing credentials. Sub-accounts can optionally be granted client-level login access to their own account.

### Role & Permission Model

**Starter/Growth Tier:**
- **Owner** (default): Full access to pricing matrix, lead inbox, billing, embed code, and account settings
- **Staff** (Phase 3): Lead inbox read access only; no access to pricing matrix, billing, or embed settings

**Agency Tier:**
- **Agency Admin**: Full access to all sub-account dashboards; can create and delete sub-accounts; manages agency billing
- **Client Admin** (per sub-account): Full access to their own account only; no visibility into other sub-accounts

### Technical Architecture Considerations

- **Widget delivery**: Embeddable `<script>` tag loads widget JS from CDN; widget must be sandboxed from host page (iFrame or Shadow DOM) to prevent CSS/JS conflicts with the host website
- **Embed token**: Each widget is tied to a unique account token validated server-side on every quote submission; deactivated accounts stop serving widget content without requiring re-embedding
- **API architecture**: Dashboard and widget submit through separate API surfaces; widget lead submission API is lightweight, unauthenticated-from-user-perspective but token-validated, and independently scalable
- **Database**: Multi-tenant relational schema with `tenant_id` foreign key on all tenant-scoped tables; row-level security enforced at query layer; agency accounts use parent-child tenant relationship

### Billing Architecture

- Stripe-powered subscription management with webhook-driven status updates
- Free trial: 14 days, no credit card required at signup; credit card required before trial expires to continue
- Plan changes (Starter → Growth) take effect at next billing cycle or immediately on upgrade
- LTD purchases stored as a permanent subscription state (no renewal date); LTD accounts are never deactivated for billing reasons
- Agency billing: single Stripe subscription at $99/mo for agency account; sub-accounts are not independently billed in Stripe

---

## Innovation & Novel Patterns

### Detected Innovation Areas

CleanQuote's innovation is **combinatorial rather than technological**: it is the first product to combine the customer-facing embeddable widget pattern (common in booking software) with cleaning-industry-specific commercial complexity variables (rare, previously only found in internal estimation tools). Neither capability is novel in isolation; the combination creates a product that has not existed before.

**Specific Novel Combination:**
- Embeddable widget with real-time self-serve pricing (established pattern in booking software)
- Commercial/post-construction complexity variables: debris level × cleaning phase × floor type mix × fixture count (established pattern in internal Ganarpro/CleanBid estimating tools)
- Pre-qualified lead handoff with full quote context (established pattern in lead gen tools)

Combining all three in a single lightweight widget — priced for solo operators and embeddable in 8 minutes — is the innovation.

### Validation Approach

The MVP validates the primary hypothesis: that cleaning business owners will embed a widget and receive widget-sourced leads within 7 days. The commercial template hypothesis (that commercial owners will configure the matrix and generate accurate estimates) is validated in Phase 2 with a defined beta cohort.

**Key validation checkpoints:**
- 7/10 beta users receive at least 1 lead within 7 days of embedding (validates lead capture mechanic)
- 3 written testimonials referencing actual bookings (validates business value, not just tool usage)
- Commercial beta: 5 commercial owners configure matrix + generate at least 1 commercial estimate within 2 weeks (validates commercial UX complexity is manageable)

### Risk Mitigation

- **QuoteIQ adds commercial features to lower tiers:** Move fast; establish community brand in r/sweatystartup before they respond (estimated 6–18 month window)
- **Widget/host page CSS conflict:** Shadow DOM sandboxing + explicit testing on all 6 target platforms during MVP build
- **Commercial matrix UX too complex for non-technical owners:** Provide pre-populated rate benchmarks by service type; offer "import from spreadsheet" in Phase 2

---

## Project Scoping & Phased Development

### MVP Strategy & Philosophy

**MVP Approach:** Problem-solving MVP — prove the lead capture value proposition with the simplest version of the calculator (residential only) before adding commercial complexity or agency infrastructure.

**Rationale for Residential-First:**
- Residential quoting requires 3–4 input variables vs. 6–8 for commercial — faster to build and test
- The primary acquisition channel (r/sweatystartup) skews 70% residential operators
- Validating the widget embed + lead delivery mechanic first de-risks the commercial build
- Commercial templates add complexity that could delay beta and AppSumo launch

**Resource Requirements:** 1 full-stack developer, 2–3 weeks to MVP; no design agency needed (widget is functional UI, not pixel-perfect marketing).

### MVP Feature Set (Phase 1)

**Core User Journeys Supported:**
- Tony — Solo Residential Cleaner (Primary Success Path)
- Tony — Failed Embed (Edge Case Recovery)

**Must-Have Capabilities:**
1. Residential pricing matrix builder with industry benchmark pre-population
2. Embeddable widget (multi-step form, mobile-first, branded with owner's business name and color)
3. Quote calculation engine (residential: service type × property details × frequency discount)
4. Lead capture form with contact info collection
5. Lead inbox with full quote context per submission
6. Email notification to owner on new lead
7. CRM status actions on leads (New → Contacted / Booked / Lost)
8. 1-line `<script>` embed code generator
9. Platform-specific embed guides × 6 platforms
10. "Send to web person" email template
11. Email/password authentication + Google OAuth
12. Stripe billing: $29/mo Starter + 14-day free trial (no CC at signup)
13. Widget preview in dashboard before going live
14. Widget enable/disable toggle (deactivates without destroying configuration)

### Post-MVP Features

**Phase 2 — Commercial Templates (Month 2):**
- Commercial pricing matrix with all cleaning phase/debris/floor/fixture/window variables
- Line-item estimate breakdown in widget output and lead inbox
- Growth plan: $49/mo / $79 LTD; unlocks commercial templates + 3 widget embeds
- Widget logo upload and extended branding options

**Phase 3 — Agency & Integrations (Month 4+):**
- Agency dashboard with up to 10 client sub-account management
- Per-client white-label branding (business name, colors, logo, domain)
- Consolidated multi-client lead inbox
- Agency billing tier: $99/mo
- Zapier integration for lead routing to external CRMs
- Jobber/ZenMaid booking handoff

### Risk Mitigation Strategy

**Technical Risks:**
- Widget/host CSS conflict → Shadow DOM or iFrame sandboxing; explicit embed testing on all 6 target platforms during MVP sprint
- Embed token security leakage → Server-side token validation + rate limiting (10 submissions/IP/hour) on lead submission endpoint

**Market Risks:**
- QuoteIQ competitive response → Establish r/sweatystartup community presence and 10+ verified reviews before they notice (M1–M3 window)
- Non-technical owners can't embed → "Send to web person" template + live chat support during first 30 days of beta; track embed completion rate as leading indicator

**Resource Risks:**
- MVP timeline slips → Residential widget is the only required deliverable for beta; commercial templates can slip to Week 6; agency can slip to Month 6 without risking AppSumo launch

---

## Functional Requirements

### Account Management

- FR1: Users can create an account with email/password
- FR2: Users can create an account using Google OAuth
- FR3: Users can update their account profile (business name, email, password)
- FR4: Users can view their current subscription plan and billing status
- FR5: Users can view their billing history and next renewal date
- FR6: Users can start a 14-day free trial without providing credit card information
- FR7: Users can enter payment information to activate a paid subscription before or at trial expiration
- FR8: Users can upgrade their subscription plan (Starter → Growth) and immediately gain access to unlocked capabilities
- FR9: Users can cancel their subscription with immediate effect or at end of billing period
- FR10: Agency admins can create new client sub-accounts under their agency account
- FR11: Agency admins can delete client sub-accounts (with lead data retention)
- FR12: Agency admins can grant client-level login access to individual sub-accounts

### Pricing Matrix Builder — Residential

- FR13: Owners can configure base pricing by service type (standard clean, deep clean, move-in/out clean, recurring maintenance)
- FR14: Owners can configure pricing by property size tier (square footage ranges and/or bedroom + bathroom count)
- FR15: Owners can configure per-item add-on pricing (oven, refrigerator, windows, laundry, walls, etc.)
- FR16: Owners can configure frequency discount percentages for recurring service schedules (weekly, biweekly, monthly)
- FR17: Owners can view pre-populated industry benchmark rates as a starting point when first configuring their residential pricing matrix
- FR18: Owners can reset pricing matrix values to benchmark defaults at any time

### Pricing Matrix Builder — Commercial (Phase 2)

- FR19: Owners can configure per-sq-ft base rates for each cleaning phase (rough clean, final clean, touch-up)
- FR20: Owners can configure debris level multipliers (light, medium, heavy) applied to the base sq ft calculation
- FR21: Owners can configure floor type mix weights (carpet percentage factor, hard floor factor, tile factor)
- FR22: Owners can configure per-unit fixture charges (per restroom, per sink)
- FR23: Owners can configure per-unit window charges
- FR24: Owners can view and configure pre-populated commercial benchmark rates when first setting up the commercial matrix

### Widget Configuration

- FR25: Owners can configure widget display name (their business name shown in the widget header)
- FR26: Owners can configure the widget's primary brand color
- FR27: Owners can upload a business logo for display in the widget (Phase 2)
- FR28: Owners can preview the configured widget before embedding on a live website
- FR29: Owners can enable or disable widget serving without deleting their pricing matrix configuration
- FR30: Owners can generate a unique 1-line `<script>` embed code for their widget

### Widget Embed & Setup

- FR31: Owners can access platform-specific visual embed installation guides for WordPress, Wix, Squarespace, Weebly, GoDaddy, and Showit
- FR32: Owners can generate a "Send to web person" email template pre-filled with their embed code and platform-specific installation instructions
- FR33: The system confirms widget is detected as live on the owner's domain after embedding (connection verification)

### Quote Calculation Engine

- FR34: Prospects can select a residential service type and receive a real-time price range estimate as they input property details
- FR35: Prospects can input residential property details (service type, bedrooms, bathrooms, approximate sq ft, add-ons, service frequency) and receive an instant branded price range
- FR36: Prospects can input commercial property details (total sq ft, cleaning phase, debris level, floor type percentage mix, fixture count, window count) and receive an instant line-item price range (Phase 2)
- FR37: The calculation engine applies the owner's configured rates, multipliers, frequency discounts, and add-on charges to produce a min/max price range
- FR38: The widget displays a line-item breakdown of the commercial estimate showing each cost component (Phase 2)

### Lead Capture

- FR39: Prospects can submit their contact information (name, email, phone number) to complete a quote request through the widget
- FR40: The system stores the complete quote context with each lead submission (service type, all property inputs, estimated price range min/max, submission timestamp, source domain)
- FR41: The system rejects lead submissions from deactivated or invalid widget tokens

### Lead Inbox & CRM

- FR42: Owners can view all leads in a time-ordered inbox showing prospect contact info, service type, property details, and estimated price range
- FR43: Owners can update a lead's status (New, Contacted, Booked, Lost)
- FR44: Owners can filter their lead inbox by status
- FR45: Owners can search their lead inbox by prospect name, email, or phone number
- FR46: Owners receive an email notification when a new lead is submitted through their widget

### Agency & Multi-Client Management (Phase 3)

- FR47: Agency admins can view a list of all client sub-accounts with summary metrics (active widget, lead count this month)
- FR48: Agency admins can navigate into any sub-account dashboard with full owner-level access
- FR49: Agency admins can configure per-client widget branding (name, color, logo) independently for each sub-account
- FR50: Agency admins can configure per-client pricing matrices independently for each sub-account
- FR51: Agency admins can view a consolidated lead inbox showing leads from all sub-accounts, labeled by client
- FR52: Agency admins can assign a consolidated inbox lead to a specific sub-account for follow-up

---

## Non-Functional Requirements

### Performance

Widget load time and quote calculation speed are directly on the critical path of the user value proposition — a slow widget means prospects abandon before submitting.

- Widget JavaScript bundle loads from CDN in < 1.5 seconds on a 4G mobile connection (LCP target for widget rendering)
- Quote price range updates within 300ms of the prospect completing an input field (real-time feedback loop is the core UX differentiation from static "contact us" forms)
- Lead submission POST endpoint responds with success/failure confirmation within 1 second
- Dashboard API read endpoints (lead inbox, pricing matrix) respond within 500ms at p95
- Dashboard search operations (lead search by name/email/phone) respond within 800ms at p95

### Security

Lead data contains PII (prospect name, email, phone); payment flow uses Stripe. No medical or financial account data.

- All lead data (prospect PII, quote details) encrypted at rest (AES-256) and in transit (TLS 1.2 minimum)
- Widget embed tokens are UUIDs (v4 minimum entropy) validated server-side on every quote submission; invalid or deactivated tokens are rejected with no data stored
- Widget submission endpoint rate-limited to 10 submissions per IP address per hour to prevent lead spam
- Stripe handles all payment card data; CleanQuote never stores card numbers, CVVs, or full card details
- Account passwords stored as bcrypt hashes (cost factor ≥ 12)
- Tenant data isolation enforced at query layer (row-level `tenant_id` filtering); cross-tenant reads are structurally blocked, not policy-blocked
- Agency sub-account data readable by parent agency account; not readable by sibling sub-accounts

### Scalability

- System must support 0 → 2,000 active tenants across the first 18 months without architectural changes
- Widget CDN must support serving 10,000 concurrent widget page loads per hour (accounts for tenants with high-traffic websites)
- Database schema uses indexed `tenant_id` on all tenant-scoped tables to prevent full-table scans as tenant count grows
- Stateless API design enables horizontal scaling without session affinity requirements
- Lead submission endpoint scales independently from dashboard API (different traffic patterns)

### Accessibility

Widget is customer-facing and must be accessible to prospects with disabilities. Dashboard accessibility targets are lower risk but still relevant.

- Widget must meet WCAG 2.1 Level AA for keyboard navigation and screen reader compatibility (multi-step form must be fully navigable without a mouse)
- Widget color contrast for all text elements must meet WCAG 2.1 AA contrast ratio (4.5:1 minimum for normal text)
- Dashboard must meet WCAG 2.1 Level A for all core owner actions (pricing matrix configuration, lead inbox, billing management)

### Reliability

- Widget CDN uptime target: 99.9% (downtime = missed leads and publicly visible failure on customer websites)
- Dashboard API uptime target: 99.5%
- Lead submission data is never silently lost: if the write fails, the system retries for up to 1 hour; if retries exhaust, owner is notified of the failed submission with the prospect's submitted data
- Database: automated daily backups with 30-day retention and tested restore capability
- Widget embed is tolerant of dashboard downtime: if the dashboard API is unavailable, the widget continues to serve and submit leads to a queue for later processing

---

## Go-to-Market Requirements

The GTM strategy is part of the product's functional scope because it shapes requirements for the first-user experience, community-facing messaging, and AppSumo launch readiness. The following GTM requirements must be satisfied by the product at launch:

- The widget embed experience must complete in < 30 minutes from signup to first live embed for a non-technical owner (measured in beta user testing)
- The pricing matrix setup must complete in < 25 minutes from blank to first quote-ready configuration (measured in beta user testing)
- The dashboard must prominently display the owner's lead count and "leads you would have missed" framing to reinforce the ROI story
- The product must be self-service: no sales call required to sign up, configure, embed, or upgrade
- The product must support a public demo widget (no login required) so prospects can experience the tool before signing up
- AppSumo LTD eligibility requirements: the product must have at least 10 verified customer reviews and a stable pricing page before LTD submission

---

*This PRD is the capability contract for all downstream architecture, UX, and development work. All epics, stories, and design decisions should trace back to the functional requirements listed in this document. Any capability not listed in the Functional Requirements section will not exist in the final product unless this document is explicitly updated.*
