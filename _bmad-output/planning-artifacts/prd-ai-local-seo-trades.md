---
stepsCompleted: [1, 2, 2b, 2c, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
inputDocuments:
  - ideas/shortlisted/ai-local-seo-trades.md
  - _bmad-output/planning-artifacts/research/market-research-ai-local-seo-trades.md
workflowType: prd
idea_name: ai-local-seo-trades
date: 2026-05-22
author: Root
classification:
  projectType: saas_b2b
  domain: martech_local_seo
  complexity: medium
  projectContext: greenfield
---

# Product Requirements Document — TradeVisible

**Author:** Root
**Date:** 2026-05-22
**Status:** Complete

---

## Executive Summary

TradeVisible is a trade-specific AI visibility and lead generation platform that audits how AI assistants (ChatGPT, Gemini, Perplexity, Google AI Mode, Siri) represent a contractor's business, generates the structured schema and entity signals needed to get cited, manages multi-platform reviews, and produces AI-optimized content briefs — delivered through a dashboard built for non-technical trades owners.

**The core problem:** Google AI Mode, ChatGPT, Gemini, Perplexity, Siri, and Alexa now generate contractor recommendations by name rather than presenting a list of links. Consumer adoption of AI for local service discovery surged from 6% to 45% in twelve months. Yet 87% of independent HVAC and plumbing contractors have zero AI citation share in their own metro — even with 800+ reviews and decades in business — while national franchise networks dominate AI recommendations by default through structural entity-strength advantages. No tool exists at any SMB price point to help independent contractors close this gap.

**Target users:** Independent trades business owners (HVAC, plumbing, electrical, roofing, landscaping) with 1–20 employees and existing websites, primarily in the US. Secondary: local marketing agencies managing 20–50 trades clients. Validated high-urgency segments: HVAC and plumbing (230K US businesses, 87% AI-invisible stat confirmed).

**Market position:** $99/month ($199 LTD) at the intersection of "local trades" and "AI search optimization" — a category that did not exist 18 months ago and now faces 45% consumer adoption with no dedicated product. Horizontal GEO tools (BrightLocal, Otterly, AthenaHQ) start at $39–$745/month with zero trade specificity. No direct competitor confirmed after exhaustive research across 30+ sources.

**Launch path:** Free AI visibility audit as freemium hook → content-first acquisition on "Google AI Mode for plumbers/HVAC" keywords → AppSumo LTD at $199 (target 500 sales) → $99/month subscription → agency white-label tier.

### What Makes This Special

**Trade-specific depth at SMB price:** Every schema template, content brief, FAQ structure, and audit query is pre-built for trades service types (plumbing, HVAC, electrical, roofing, landscaping). No horizontal GEO tool offers this specificity at under $499/month.

**The Franchise Gap benchmark:** The only tool that shows an independent contractor exactly how their AI citation share compares to local franchise competitors (Roto-Rooter, Mr. Rooter, ARS) — a comparison that converts because it makes the invisible crisis emotionally concrete: "You have 200 reviews, they have 50, but AI recommends them 12x more often."

**Multi-platform AI citation score below $499/month:** Shows citation share separately for ChatGPT, Gemini, Perplexity, and Google AI Mode — channels that recommend different contractors based on different data sources. No competitor does this below $499/month.

**One-click schema implementation:** Generates validated, trade-specific JSON-LD schema as a WordPress plugin or two-line paste — eliminating the developer-level work that agencies charge $200+ per page to implement.

**First-mover content moat:** "Google AI Mode for plumbers," "why isn't my HVAC company on ChatGPT" — real searches with near-zero current content competition. The platform that publishes definitive guides first owns the category narrative.

## Project Classification

- **Project Type:** SaaS B2B — web application with external API integrations
- **Domain:** MarTech / Local SEO / Generative Engine Optimization (GEO)
- **Complexity:** Medium — external AI API calls (OpenAI, Gemini, Perplexity), Google Business Profile API read/write, review platform scraping/API, schema validation, email automation
- **Project Context:** Greenfield — new product in an unoccupied category
- **Primary Trades (MVP):** HVAC, plumbing, electrical, roofing, landscaping

---

## Success Criteria

### User Success

**North Star Metric:** AI Citation Score Improvement — the percentage-point increase in a contractor's AI citation share within 90 days of onboarding. This single metric validates schema implementation, content quality, and GBP optimization simultaneously.

| Metric | Unoptimized Baseline | Target (Active User, 90 Days) |
|--------|---------------------|-------------------------------|
| AI citation share (all-platform avg) | 0% (87% of independents) | 8–15% |
| Schema markup coverage | 0% (most contractors) | 95% of MVP trade service types |
| GBP completeness score | 60–70% typical | 90%+ |
| Review response rate | 30–40% typical | 85%+ |
| Content pages with FAQ schema | 0 typical | 10+ within 60 days |
| Multi-platform citation presence | 1–2 platforms | 4+ platforms |

**The 30-Day Win Gate:** The most critical retention signal is measurable citation improvement within 30 days. Onboarding is sequenced to maximize early citation impact: schema implementation first (highest impact, achievable in 24 hours) → GBP optimization → FAQ content pages.

**User-reported success signals:** "A new customer told me they found me on ChatGPT"; monthly citation dashboard becomes a ritual; NPS ≥ 55 at 90-day cohort mark.

### Business Success

| Phase | Timeline | Target |
|-------|----------|--------|
| Validation | Months 1–3 | 500+ free audit completions; 10–15% audit-to-paid conversion; 10+ testimonials with citation improvement data |
| LTD Launch | Months 3–5 | 500+ AppSumo LTD sales ($99,500 revenue); AppSumo rating 4.5+; citation improvement for 60%+ of active LTD users within 90 days |
| MRR Transition | Months 5–12 | $20K MRR (200 monthly subscribers + agency accounts); monthly churn < 4% |
| Scale | Months 12–24 | $50K+ MRR; 500+ active monthly subscribers; 5+ agency partners |

### Technical Success

- Audit engine completes in < 60 seconds for any US city
- Citation scores accurate within ±5% of manual spot-checks for 95% of tested metro areas
- Schema generator passes Google Rich Results Test for 90%+ of generated schemas on first implementation
- GBP API read/write succeeds for 98%+ of connected accounts
- Review aggregation working correctly for Google, Yelp, and Facebook
- API cost per location < $5/month at scale (achieved via batched queries and 30-day result caching)

### Measurable Outcomes

- **Gate 1 — Technical (Week 4):** Audit accuracy verified; schema passes validation; GBP API integration live; review aggregation functional
- **Gate 2 — User (Week 6):** 20 beta contractors complete onboarding; 15/20 report actionable audit insight; 10/20 implement schema within 7 days; 5/20 show measurable citation improvement at day 30
- **Gate 3 — Market (Week 8):** 200+ free audit completions from organic; 10%+ audit-to-paid conversion; 3+ public testimonials with specific citation improvement numbers
- **Go/No-Go for AppSumo:** All 3 gates must pass; citation improvement data from Gate 2 is non-negotiable

---

## Product Scope

### MVP — Minimum Viable Product

**Core loop:** Audit reveals visibility gap → Fix with schema + entity signals → Monitor AI citations improving → Review automation amplifies signals → Content briefs sustain momentum → Repeat audit shows progress.

**MVP trades coverage:** HVAC, plumbing, electrical, roofing, landscaping (5 trades).

**MVP capabilities:**

1. **AI Visibility Audit Engine (freemium hook)** — query ChatGPT, Gemini, Perplexity, Google AI Mode with 100+ trade/city query permutations; produce AI Citation Share score (0–100%) per platform; show Franchise Gap benchmark vs. top local competitors; email gate for full report
2. **Schema Markup Generator** — LocalBusiness, Service, FAQPage, Review aggregate schemas pre-populated from GBP data; copy-pasteable JSON-LD + WordPress plugin; schema validation before delivery
3. **Google Business Profile Optimization Wizard** — GBP API integration; 25-element completeness score; priority queue by AI citation impact; guided wizard with trade-specific category recommendations and Q&A seed generator
4. **Review Management Dashboard** — Google, Yelp, Facebook aggregation; AI-drafted review responses; post-job review request automation via SMS/email; review velocity and sentiment tracking
5. **AI-Optimized Content Briefs** — trade + service + city input → complete FAQ content brief with H1, 10–15 Q&A pairs, cost ranges, seasonal notes, and entity signals; 50 pre-built FAQ templates for most common HVAC/plumbing queries
6. **Monthly Citation Score Dashboard** — automated monthly audit reruns; citation trend chart vs. 3 local competitors; progress attribution; alert emails for score changes and competitor movements

### Growth Features (Post-MVP)

- Voice search module (Alexa Skills, Siri Shortcuts optimization)
- Agency white-label dashboard with sub-accounts and branded reports ($29/location tier for 10+ locations)
- ServiceTitan / Jobber / Housecall Pro integration for automated post-job review requests
- Competitor intelligence suite — deep citation teardown of top 3 local competitors
- Full trades coverage expansion to 20+ trade types (pest control, pool service, garage door, chimney, locksmith, pressure washing, window cleaning)
- HomeAdvisor and Angi review aggregation

### Vision (Future)

- AI-powered full service page and FAQ page writing with schema auto-embedded — contractor reviews and publishes in one click
- Citation attribution to revenue — connect citation score improvements to GBP call tracking to show estimated additional calls generated
- Multi-location and franchise management dashboard (10–200 locations)
- "TradeVisible Certified" consumer-facing trust badge on contractor websites
- Trade association white-label programs (PHCC, ACCA, NECA member benefits)
- Training data influence pathway: enough structured data submitted that TradeVisible becomes a trusted data source for AI models
- International expansion (UK, Australia, Canada)

---

## User Journeys

### Journey 1: Dave — The Invisible Veteran Plumber (Primary User, Happy Path)

Dave is 52, runs a 2-technician plumbing business in suburban Nashville. He has 340 Google reviews at 4.9 stars, spends $800/month on Google Ads, and has been in business 22 years. The last 8 months have been quietly slower — he doesn't know why.

**Opening Scene:** Dave asks Siri for a plumber "just to see what happens" and sees Roto-Rooter recommended — a company with half his reviews. His nephew says "your SEO looks fine." He Googles "why does AI recommend my competitor instead of me" and finds a TradeVisible blog post: *87% of plumbers are invisible to AI — check yours in 60 seconds.*

**Rising Action:** Dave enters his business name and Nashville into the free audit. In 45 seconds he sees: *AI Citation Share: 0% — Roto-Rooter Nashville: 34% — Your top local competitor: 12%.* Below that: *You have 340 Google reviews. AI doesn't weight reviews the same way — here's why.* He enters his email for the full report.

**Climax:** The report arrives: schema markup score 0/10, GBP entity signals weak, 12 high-citation question gaps on his website. Each finding has a "Fix this" button. Dave sees what's wrong and, for the first time, sees a path to fix it. He buys the $199 LTD.

**Resolution:** Day 1: schema generator produces validated JSON-LD; his nephew pastes 3 lines into WordPress in 10 minutes. Day 2–3: GBP wizard walks him through 12-step optimization — categories, service menu, Q&A seeds. Week 2–3: he generates 5 FAQ content pages for "how much does drain cleaning cost in Nashville." Week 4 automated audit: citation share 0% → 4%, first appearance in Perplexity for "emergency plumber Nashville." He receives an email: *You've been cited for the first time.* Within 60 days a new customer mentions "I found you on ChatGPT." Dave posts in his trades Facebook group; 8 members sign up via his referral link.

**Journey Requirements Revealed:** Free audit with no-login flow; email capture with drip sequence; Franchise Gap benchmark display; schema generator with GBP auto-population; WordPress plugin delivery; GBP wizard; FAQ content brief generator; automated monthly re-audit; citation alert emails; referral tracking.

---

### Journey 2: Maria — The Growth-Stage HVAC Owner (Primary User, Informed Buyer)

Maria is 41, owns an 8-technician HVAC company in Phoenix with $2.1M revenue. She pays $1,200/month to a local SEO agency. She's heard about AI search and asked her agency; they offered AI optimization for an extra $800/month. She's skeptical.

**Opening Scene:** Maria finds TradeVisible via a ACHR News article about AI search and contractors. She runs the free audit as a sanity check before deciding whether to pay her agency more.

**Rising Action:** Audit shows Maria's AI citation share: 3% across all platforms. Her top local competitor (a franchise): 19% citation share. The Franchise Gap benchmark makes the gap undeniable and gives her specific numbers to bring to her agency.

**Climax:** Maria subscribes at $99/month and runs TradeVisible in parallel with her agency. She sets up the review dashboard and sees 23 unanswered Google reviews. AI-drafted responses are in her voice — she edits two, approves the rest in 15 minutes. She generates service page content briefs and sends them to her agency for implementation.

**Resolution:** Month 2: citation share 3% → 9%. Maria walks into her agency meeting with a printed citation score trend chart: "Our ChatGPT citation rate is 9%; our competitor's is 19% — what specifically are you doing about that gap?" She becomes an informed buyer. She keeps both subscriptions; the agency starts treating her as a high-value client with specific AI visibility KPIs.

**Journey Requirements Revealed:** Multi-platform citation score with competitor comparison; review dashboard with bulk AI-drafted responses; content brief export for agency handoff; month-over-month trend chart; per-platform citation breakdown.

---

### Journey 3: Jordan — The Digital-Native Solo Electrician (Primary User, Power User / Referral Engine)

Jordan is 29, runs a solo electrical contracting business in Austin. He already uses BrightLocal ($39/mo) and Otterly AI for brand monitoring. He's read every article about Google AI Mode and is manually building schema markup from blog tutorials.

**Opening Scene:** Jordan sees a Reddit post in r/Electricians from someone asking about AI search. He posts TradeVisible's free audit link. Tries it himself — sees he's spending 3 hours on what the schema generator produces in 90 seconds.

**Rising Action:** Jordan replaces BrightLocal + Otterly ($39 + $39 = $78/month) with TradeVisible ($99/month or $199 LTD). He explores every feature. He finds the schema generator creates service-specific schema he didn't know about — generator creates schema for "panel upgrade," "EV charger installation," "emergency electrical" as separate service pages.

**Climax:** Jordan implements everything within 48 hours (he's technical). Week 3: he appears in "best electrician Austin" queries on Perplexity. He screenshots the citation and posts it in r/Electricians.

**Resolution:** His Reddit post generates 40 signups through his referral link. Jordan becomes an unofficial TradeVisible ambassador in trades communities. He DMs the founders with feature requests; two make it into the roadmap.

**Journey Requirements Revealed:** Power-user schema generator with per-service-page output; referral program with tracking links; community-shareable citation achievement notifications; feature request intake; BrightLocal/Otterly feature parity on the monitoring side.

---

### Journey 4: Agency Operator (Secondary User — White-Label)

A 6-person marketing agency in Atlanta manages 28 trades clients (HVAC, plumbing, electrical). They currently can't offer AI visibility services because no tool supports their workflow at their margins. One client asks why a competitor is showing up on ChatGPT.

**Opening Scene:** Agency principal finds TradeVisible, realizes they can offer "AI visibility management" as a new service line at $299/location with near-zero delivery cost using the platform.

**Rising Action:** Agency enrolls in the agency tier ($29/location). They set up all 28 clients in the multi-location dashboard. They generate branded citation score reports for each client using white-label templates.

**Climax:** Agency brings the TradeVisible-branded report to each client's quarterly review. "Your AI citation score went from 0% to 7% this quarter" lands better than any report they've previously delivered. Two clients upgrade their retainers on the spot.

**Resolution:** Agency adds "AI Visibility Management — $299/month" as a recurring service line. 28 clients × $299 = $8,372/month in new agency revenue, $29 × 28 = $812/month in TradeVisible cost. Net margin: $7,560/month from one agency partner. Agency refers two more agencies to TradeVisible.

**Journey Requirements Revealed:** Multi-account dashboard with client sub-accounts; white-label branded reports; bulk client setup; agency-level billing ($29/location); consolidated citation score view across all clients; exportable PDF reports.

### Journey Requirements Summary

| Capability Area | Revealed By |
|----------------|-------------|
| Free audit with no-login, < 60 sec completion | Dave, Jordan journeys |
| Franchise Gap benchmark with named competitor comparison | Dave, Maria journeys |
| Email capture + drip sequence from audit | Dave journey |
| Schema generator (per-business + per-service-page) | Dave, Jordan journeys |
| WordPress plugin delivery | Dave journey |
| GBP API read/write wizard | Dave, Maria journeys |
| Review dashboard (Google, Yelp, Facebook) | Maria journey |
| AI-drafted review responses | Maria journey |
| Post-job review request automation | Maria journey |
| FAQ content brief generator | Dave, Maria journeys |
| Automated monthly citation re-audit + alert emails | Dave journey |
| Month-over-month citation trend chart vs. competitors | Maria journey |
| Per-platform citation breakdown | Maria journey |
| Referral program with tracking links | Jordan journey |
| Community-shareable citation achievement | Jordan journey |
| Multi-account agency dashboard | Agency journey |
| White-label branded reports | Agency journey |
| Agency-tier billing model | Agency journey |

---

## Innovation & Novel Patterns

### Detected Innovation Areas

**Category Creation:** TradeVisible creates a category — "AI SEO for trades" — that does not exist at any price point. The product does not compete with existing tools; it occupies an empty space at the intersection of GEO (Generative Engine Optimization), local service businesses, and trade-specific workflow requirements. This is a genuine first-mover opportunity, not incremental improvement.

**AI-Auditing-AI:** The core innovation is using AI APIs (OpenAI, Gemini, Perplexity) to audit how AI perceives and cites a business — then using those audit results to drive a structured improvement loop (schema generation, GBP optimization, content briefs) that directly improves AI citation. The product monitors AI behavior and feeds that intelligence back as actionable optimization steps. This recursive AI audit → optimize loop is novel in the local SMB context.

**The Franchise Gap Benchmark:** Quantifying the citation-share gap between independent contractors and named franchise competitors (Roto-Rooter, Mr. Rooter, ARS) makes an abstract AI behavior problem concrete and emotionally urgent. No existing tool surfaces this comparison. This is both a UX innovation and an acquisition mechanic — it converts because it reframes a vague concern ("AI is changing search") as a specific competitive threat with a dollar value attached.

**Trade-Specific Schema Taxonomy:** Building a validated schema library organized by trade type (HVAC, plumbing, electrical, etc.) × service type (emergency, maintenance, installation, repair) × local modifier (city, metro, neighborhood) creates a proprietary structured data asset that accumulates value as the library expands to 20+ trades × 50+ service types. This schema library is both a technical moat and a defensibility asset that horizontal tools cannot replicate without full trade-domain knowledge.

### Market Context & Competitive Landscape

- No horizontal GEO tool (BrightLocal, Otterly, AthenaHQ, Profound, Semrush) has trade-specific schema, FAQ templates, or franchise gap analysis
- The closest competitive move is BrightLocal adding "AI Mode monitoring" — probable in 6–12 months, but trade-specific depth would require 12+ months to replicate
- AI search citation patterns have been documented for national brands and content publishers; local trades is a completely uncharted application of GEO principles
- The 87% AI-invisible statistic (HVAC/plumbing specifically) is a validated, citable market data point that no competitor has yet used as a product positioning anchor

### Validation Approach

- Free audit as real-time market signal: if 500 audits complete in 60 days without paid acquisition, the crisis is real and discoverable
- Gate 2 validation (Week 6): 5 of 20 beta contractors show measurable citation score improvement within 30 days — this proves the fix loop works, not just the diagnosis
- AppSumo rating ≥ 4.5 with testimonials containing specific citation improvement percentages confirms willingness-to-pay and product efficacy simultaneously

### Risk Mitigation

| Innovation Risk | Mitigation |
|----------------|------------|
| AI platform behavior changes (query format, citation logic) | Multi-platform monitoring means no single platform change breaks value; schema and entity-strength signals are platform-agnostic |
| AI API costs scale faster than revenue | Batch queries off-peak; cache results for 30-day windows; target < $5/location/month; progressive capacity limits by tier |
| Citation improvements too slow for retention | 30-day win sequence (schema first, fastest impact); alert emails for first citation; over-communicate small wins |
| Horizontal competitor pivots to trades | First-mover community brand + content authority + LTD customer base; 500 vocal LTD customers are better defensibility than 2 months of head start |

---

## SaaS B2B Specific Requirements

### Project-Type Overview

TradeVisible is a multi-tenant SaaS B2B web application. Primary users are single-location or small multi-location trades businesses (1–3 locations). Secondary users are agencies managing 20–50 locations. The product integrates with external AI APIs, Google Business Profile API, review platform APIs, and delivers both a web dashboard and scheduled automated reports.

The product is NOT a developer tool. The UI must be operable by a non-technical trades business owner without any technical explanation. Every technical action (schema generation, GBP connection, review aggregation setup) must be expressed in plain business language.

### Technical Architecture Considerations

**Multi-tenancy model:** Account-per-business (single-location default); agency tier adds sub-account management with role-based access (agency admin → view all clients; client user → view own account only). No cross-tenant data leakage — enforced at the data layer.

**External AI API integration strategy:**
- OpenAI API (GPT-4o or equivalent): citation audit queries, AI-drafted review responses, content brief generation
- Google Gemini API: citation audit queries
- Perplexity API: citation audit queries
- API calls are batched and scheduled (not real-time on user request) to control costs
- Audit results cached for 30-day window; re-run triggered monthly or manually

**Google Business Profile API:**
- OAuth 2.0 authorization flow; contractor grants read/write access to their GBP
- Read: completeness scoring, category analysis, review aggregation
- Write: GBP Q&A seeding, post scheduling (post-MVP)
- Token refresh handled server-side; contractor never re-authorizes unless token revoked

**Review platform integrations:**
- Google Reviews: via GBP API
- Yelp: Yelp Fusion API
- Facebook: Facebook Graph API (page reviews)
- Review responses posted via respective APIs (not screen scraping)

**Schema generation and validation:**
- Schema generation server-side (not in browser) using trade-specific templates
- Each generated schema validated against Schema.org spec and Google Rich Results Test API before delivery
- Output: JSON-LD code block (copy-paste) + WordPress plugin auto-install

**Email automation:** Drip sequences for audit-to-paid conversion; monthly citation score reports; citation achievement alerts; review request SMS/email (Twilio or SendGrid).

### Authentication & Authorization

- Email/password with MFA option (post-MVP: SSO for agency tier)
- Role model: Owner, Team Member, Agency Admin, Agency Client View
- GBP OAuth tokens stored encrypted at rest per account
- API keys (OpenAI, Gemini, Perplexity) stored in environment/secrets manager; never exposed to client

### Tenant Model

| Tier | Accounts | Locations | Billing |
|------|----------|-----------|---------|
| Free (Audit) | No account required | 1 (audit-only) | $0 |
| Individual | 1 business | 1 location | $99/month or $199 LTD |
| Agency | 1 agency | 10–200 locations | $29/location/month |

### RBAC Matrix

| Role | Own Account | Other Client Accounts | Billing | Agency Config |
|------|-------------|----------------------|---------|---------------|
| Business Owner | Full access | None | Own billing | N/A |
| Team Member | Read + limited write | None | None | N/A |
| Agency Admin | Full access (all clients) | Full access (all clients) | Agency billing | Yes |
| Agency Client View | Read-only (own) | None | None | No |

### Implementation Considerations

**Deployment:** Cloud-native (AWS or GCP); containerized services; separate worker processes for AI audit jobs (long-running, cost-sensitive) vs. web request handling (latency-sensitive). Managed database (PostgreSQL). Redis for job queues and result caching.

**Audit job architecture:** Audit jobs run asynchronously. User triggers audit → job queued → worker executes 100+ AI queries (batched, rate-limited) → results stored → user notified via email and dashboard. Expected completion time: 5–15 minutes for full audit (acceptable for monthly cadence; 60-second "quick preview" for the freemium funnel uses a subset of 10 queries).

**Cost controls:** Per-account monthly AI query budgets enforced at the application layer; graceful degradation if budget exceeded (show cached results with "stale" indicator); tiered query volume by plan (free: 10-query preview; paid: full 100+ queries monthly).

---

## Project Scoping & Phased Development

### MVP Strategy & Philosophy

**MVP Approach:** Problem-solving MVP — prove the audit → fix → cite loop works for HVAC and plumbing contractors in the US. The MVP succeeds when 5+ beta contractors show measurable citation score improvement within 30 days of implementation.

**Resource Requirements:** 1–2 engineers (backend-heavy), 1 designer (non-technical UX focus), founder handling content/marketing in parallel. Expected build time: 4–6 weeks to Gate 1; 8 weeks to AppSumo-ready state.

### MVP Feature Set (Phase 1)

**Core User Journeys Supported:**
- Invisible veteran contractor discovers AI citation gap (Dave journey — full happy path)
- Aware growth-stage owner uses data to hold agency accountable (Maria journey — partial; full agency features post-MVP)

**Must-Have Capabilities:**
1. Free AI visibility audit (10-query preview, < 60 seconds, no login required)
2. Email capture with full audit report (100-query, Franchise Gap benchmark, gap analysis)
3. Schema markup generator for 5 MVP trade types (HVAC, plumbing, electrical, roofing, landscaping)
4. WordPress plugin delivery for generated schema
5. Google Business Profile connection + completeness wizard (25-element scoring, priority queue)
6. Review aggregation dashboard (Google, Yelp, Facebook)
7. AI-drafted review responses (editable before posting)
8. Post-job review request (SMS or email; manual customer entry)
9. FAQ content brief generator (trade + service + city input)
10. Monthly citation score dashboard with trend vs. 3 competitors
11. Citation improvement alert emails
12. Basic account management (sign up, billing, GBP connection)

### Post-MVP Features

**Phase 2 (Months 5–12):**
- Agency white-label dashboard ($29/location tier)
- Review response posting via API (currently: drafts only, contractor posts manually)
- ServiceTitan / Jobber integration for automated post-job review requests
- Competitor intelligence: deep citation teardown of top 3 local competitors
- Trades coverage expansion: pest control, pool service, garage door, chimney, locksmith
- HomeAdvisor and Angi review aggregation
- Voice search module (Alexa, Siri optimization path)
- Referral program with tracking links

**Phase 3 (Months 12–24):**
- Full AI content writing (complete service pages, not just briefs)
- Citation attribution to revenue (connect citation score to GBP call tracking)
- Multi-location franchise management dashboard
- "TradeVisible Certified" consumer trust badge
- Trade association white-label programs
- International expansion (UK, Australia, Canada)

### Risk Mitigation Strategy

**Technical Risks:** AI API cost unpredictability — mitigated by batched monthly audit cadence, 30-day result caching, per-account query budgets, and progressive capacity limits by tier. Schema validation failure rate — mitigated by pre-delivery validation against Schema.org spec and Google Rich Results Test API before user sees output.

**Market Risks:** Citation improvement too slow for retention — mitigated by 30-day win sequence (schema first), over-communication of early wins, and 30-day money-back guarantee tied to measurable citation improvement.

**Resource Risks:** If build time extends, defer: review response API posting (draft-only is sufficient for MVP); post-job review automation SMS (email-only is sufficient); per-service-page schema (business-level schema delivers most impact). Core audit + schema generator + GBP wizard are non-negotiable for MVP.

---

## Functional Requirements

### AI Citation Audit

- FR1: Visitor can initiate a free AI visibility audit by entering a business name and city (no account required)
- FR2: System queries ChatGPT, Gemini, Perplexity, and Google AI Mode with trade/city query permutations and returns an AI Citation Share score (0–100%) per platform within 60 seconds (10-query preview for freemium)
- FR3: Visitor can see a Franchise Gap benchmark comparing their citation share to the top 2–3 named local competitors (including franchises) in their metro
- FR4: Visitor can enter their email to receive a full audit report (100+ queries, complete gap analysis, platform breakdown)
- FR5: Authenticated user can trigger a full manual audit at any time (within monthly quota)
- FR6: System automatically re-runs the full audit monthly and stores historical results per account
- FR7: User can view citation score trend over time (per platform and overall) vs. up to 3 competitor businesses
- FR8: System sends email alert when citation score changes by ≥ 2 percentage points between audits
- FR9: System sends email alert when a competitor's citation share surpasses the user's in their metro

### Schema Markup Generation

- FR10: User can generate LocalBusiness, Service, FAQPage, and Review aggregate schema markup for their business by entering basic business details (pre-populated from connected GBP)
- FR11: User can select their trade type (HVAC, plumbing, electrical, roofing, landscaping in MVP) and receive trade-specific serviceType values and service taxonomies in generated schema
- FR12: User can generate service-specific schema for individual service pages (e.g., "emergency plumbing," "drain cleaning," "HVAC maintenance")
- FR13: System validates generated schema against Schema.org spec and Google Rich Results Test before presenting output; invalid schemas are auto-corrected or flagged with explanation
- FR14: User can download generated schema as a copy-pasteable JSON-LD code block
- FR15: User can install generated schema via a WordPress plugin (one-click install)
- FR16: System auto-populates schema fields from connected Google Business Profile data (business name, address, phone, categories, hours, review aggregate)

### Google Business Profile Optimization

- FR17: User can connect their Google Business Profile via OAuth 2.0 authorization
- FR18: System scores GBP completeness across 25 elements and displays a completeness score (0–100%)
- FR19: System presents a prioritized action queue ranking missing GBP elements by their AI citation impact
- FR20: User can complete a guided step-by-step wizard for each missing GBP element, with instructions in plain non-technical language specific to their trade type
- FR21: System recommends trade-appropriate primary and secondary GBP categories with AI citation correlation context
- FR22: System generates 10 trade-appropriate Q&A pairs for the GBP Q&A section, pre-populated for the user's trade and service area
- FR23: User can publish generated Q&A pairs to their GBP directly from the dashboard

### Review Management

- FR24: User can connect Google, Yelp, and Facebook review accounts and view all reviews from a single dashboard
- FR25: User can see a prioritized queue of unanswered reviews across all connected platforms
- FR26: System generates AI-drafted review responses in the contractor's voice for each unanswered review; user can edit before posting
- FR27: User can post review responses to Google, Yelp, and Facebook from the dashboard without leaving the platform
- FR28: User can send a post-job review request by entering a customer's phone number or email address; system delivers a branded request with a one-tap Google review link
- FR29: System tracks review count per month and displays a review velocity trend graph
- FR30: System performs sentiment analysis on reviews and flags negative reviews for priority response attention

### AI-Optimized Content Briefs

- FR31: User can generate a content brief by entering trade type, service, and city; system returns a complete FAQ content brief including H1 suggestion, 10–15 Q&A pairs, local cost ranges, seasonal timing notes, and entity signals
- FR32: User can access a pre-built template library of FAQ sets for the 50 most common HVAC and plumbing service queries (MVP); expanded to additional trades post-MVP
- FR33: User can generate content briefs for multiple city/service combinations and save them to a brief library within their account
- FR34: System provides implementation guidance for adding generated content to WordPress, Squarespace, Wix, and static HTML sites

### Monthly Citation Score Dashboard

- FR35: User can view their overall AI Citation Score and per-platform breakdown on a persistent dashboard
- FR36: System displays a month-over-month citation score trend chart showing improvement attribution (e.g., "Schema implementation: +3% citation share")
- FR37: System recommends the 3 highest-impact next actions based on current citation score and account activity
- FR38: System sends a monthly citation score email report summarizing progress and recommended next actions

### Account & Billing Management

- FR39: Visitor can create an account with email/password
- FR40: User can connect their Google Business Profile, Yelp, and Facebook accounts via OAuth from account settings
- FR41: User can subscribe to a monthly plan or purchase a Lifetime Deal via integrated payment (Stripe)
- FR42: User can view billing history, update payment method, and cancel subscription
- FR43: Agency admin can create and manage sub-accounts for client businesses within an agency plan
- FR44: Agency admin can view citation scores, audit results, and action queues for all client accounts from a consolidated dashboard
- FR45: System enforces per-account monthly AI query budgets; displays usage meter; gracefully shows cached results when budget is reached with clear explanation

### Onboarding & Education

- FR46: New user is guided through a "Get Cited in 30 Days" onboarding checklist prioritizing schema implementation, GBP optimization, and first content briefs
- FR47: User receives contextual education within each feature explaining why the action improves AI citation (in plain language, not technical jargon)
- FR48: System generates shareable citation score achievement cards when a user reaches citation milestones (first citation, 5%, 10%, etc.)

---

## Non-Functional Requirements

### Performance

- Free audit 10-query preview completes in < 60 seconds for any US metro area (p95)
- Dashboard pages load in < 2 seconds (p95) on standard broadband
- Schema generation and validation completes in < 10 seconds (p95)
- Full 100-query audit runs as async background job; user receives email notification on completion (target < 15 minutes)
- Review dashboard loads with aggregated reviews in < 3 seconds for accounts with up to 1,000 total reviews

### Security

- All data encrypted at rest (AES-256) and in transit (TLS 1.3)
- GBP OAuth tokens, Yelp, and Facebook access tokens stored encrypted per account; never transmitted to client
- AI API keys (OpenAI, Gemini, Perplexity) stored in cloud secrets manager; not in environment files or source code
- Multi-tenant data isolation enforced at the database query layer (row-level security or equivalent)
- PCI-DSS compliance for payment processing delegated to Stripe; no card data stored in TradeVisible systems
- GDPR-compliant data handling: users can export their data and request deletion; audit logs retained for 12 months
- MFA available (TOTP) for all accounts; required for agency admin accounts

### Scalability

- System designed to support 500 concurrent users at MVP launch; 5,000 concurrent users by Month 12 without architectural changes
- AI audit job queue scales horizontally; worker count adjustable based on queue depth
- Stateless web tier enables horizontal scaling behind a load balancer
- Database connection pooling; read replicas for dashboard queries as load grows
- Monthly audit batch jobs staggered across time zones to flatten AI API request peaks
- API cost per location remains < $5/month at 5,000 active locations through batching and caching

### Accessibility

- WCAG 2.1 AA compliance for all authenticated dashboard surfaces
- Dashboard operable by keyboard navigation (no mouse required for core workflows)
- Color contrast ratios ≥ 4.5:1 for all body text; ≥ 3:1 for UI components
- Screen reader compatibility for citation score dashboard and audit results
- Mobile-responsive design (dashboard accessible on tablet; primary use case is desktop)

### Integration

- Google Business Profile API: OAuth 2.0; read (profile, categories, reviews, Q&A) + write (Q&A, response posting)
- OpenAI API: GPT-4o or equivalent; citation audit queries, review response drafts, content brief generation
- Google Gemini API: citation audit queries
- Perplexity API: citation audit queries
- Yelp Fusion API: review aggregation, response posting
- Facebook Graph API: page review aggregation, response posting
- Stripe API: subscription billing, LTD purchase, agency billing, webhooks for billing events
- SendGrid or equivalent: transactional email (audit reports, citation alerts, review requests)
- Twilio (Phase 2): SMS delivery for post-job review requests
- WordPress REST API + plugin: schema deployment via WordPress plugin
- Schema.org validator + Google Rich Results Test API: pre-delivery schema validation
- All integrations must degrade gracefully: if a third-party API is unavailable, display cached data with a "last updated" timestamp rather than erroring

### Reliability

- Target uptime: 99.5% for web dashboard (allows ~3.6 hours/month maintenance)
- Scheduled maintenance windows communicated 48 hours in advance
- AI audit job failures retry up to 3 times with exponential backoff before notifying user
- Review platform API failures surface as "temporarily unavailable" with last-synced timestamp; do not fail the page load
- Daily automated backups of all account data; recovery time objective (RTO) < 4 hours; recovery point objective (RPO) < 24 hours

---

*This PRD is the strategic and capability foundation for all subsequent architecture, design, and development work. All UX design, technical architecture, epic breakdown, and sprint stories must trace back to the requirements and vision documented here. Update as planning evolves.*
