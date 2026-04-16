---
stepsCompleted: [step-01-init, step-02-discovery, step-02b-vision, step-02c-executive-summary, step-03-success, step-04-journeys, step-05-domain, step-06-innovation, step-07-project-type, step-08-scoping, step-09-functional, step-10-nonfunctional, step-11-polish, step-12-complete]
inputDocuments:
  - ideas/shortlisted/restaurant-recipe-costing.md
  - _bmad-output/planning-artifacts/market-research-restaurant-operations.md
  - _bmad-output/planning-artifacts/brief-restaurant-operations.md
workflowType: prd
author: Root
date: 2026-04-16
classification:
  projectType: saas_b2b
  domain: restaurant_food_service
  complexity: medium
  projectContext: greenfield
---

# Product Requirements Document — DishCost

**Author:** Root
**Date:** 2026-04-16

---

## Executive Summary

Independent restaurant operators run on margins of 3–6%, where a single percentage point of food cost variance can eliminate a quarter of annual profit — yet 60%+ of the 412,000 independent single-location US restaurants still track recipe costs with spreadsheets or nothing at all. The tools that solve this problem cost $199–$350+/month and are built for multi-location chains, not the independent operator who needs actionable numbers before the dinner rush.

**DishCost** is a standalone recipe costing and menu profitability tool for independent restaurant operators. It calculates the exact cost of every dish in real time, flags dishes that are quietly bleeding margin, and automatically updates ingredient costs when a supplier invoice is uploaded — all for a one-time $79 LTD or $49/month subscription. No POS lock-in. No setup fee. No waiting for enterprise sales.

The market window is clear: AppSumo has zero active restaurant software deals, MarketMan users are visibly defecting over OCR failures and hostile cancellation policies, and a direct analog (Open Pantry, Australia) has validated the $79 LTD model with 2,000+ users. DishCost is a US-focused execution with superior OCR reliability, modern UX, and a community-led go-to-market through r/restaurateur and r/KitchenConfidential.

### What Makes This Special

DishCost wins on three dimensions no competitor combines: OCR reliability (>90% accuracy vs. MarketMan's estimated ~50%), POS-agnostic design (works alongside any existing system or none at all), and honest LTD pricing (one impulse purchase removes all financial friction for operators who have ever been surprised by a month-end food cost).

The core insight: independent restaurant operators don't need more software — they need one piece of software that does the most important thing perfectly. Food cost visibility is that thing. Every other enterprise feature (inventory counting, purchasing workflows, accounting integrations) is scope that makes the product worse for this buyer, not better. DishCost is deliberately narrow and deeply reliable.

The moment of differentiation: an operator uploads a Sysco invoice photo on Monday morning, sees 3 dishes flagged red because chicken prices spiked, adjusts portions before the week starts, and saves $800 that would have silently leaked. MarketMan users describe failing to get this moment reliably after months of use. DishCost delivers it in the first session.

## Project Classification

- **Project Type:** SaaS B2B (small business — independent restaurant operators)
- **Domain:** Restaurant / Food Service Operations
- **Complexity:** Medium — real-time calculation requirements, OCR processing pipeline, multi-tenancy from day one, AppSumo launch spike tolerance required; no heavy regulatory compliance
- **Project Context:** Greenfield — new product, no existing codebase

---

## Success Criteria

### User Success

The core user success metric: **Did this operator find and fix a food cost problem they would have missed without the tool?**

A successful user can answer the question "How much does this dish cost me to make?" in under 60 seconds, and receives an alert when the answer changes materially. Success is not engagement metrics — it is margin visibility that translates to real dollars saved.

**User success moments (in priority order):**
1. First recipe costed (Aha moment #1) — within first session
2. First margin alert received and acted on — within first week of active use
3. First invoice uploaded and costs updated automatically — within first month
4. "I caught a food cost problem before it hit my P&L" — by day 30

**Success thresholds:**
- Time to first recipe cost visible: < 15 minutes from signup
- Recipes entered in first 7 days: ≥ 10 (meaningful menu coverage)
- % of users uploading at least 1 invoice within 30 days: > 50%
- Margin alerts triggered and viewed per active user per month: ≥ 1
- 30-day retention of LTD purchasers: > 70%
- NPS at day 60: > 50
- "Found a food cost problem I didn't know about" (day-30 survey): > 60% of respondents

### Business Success

**6-Month Objectives:**
1. Validate LTD demand: 500+ LTD units within 60 days of AppSumo launch
2. Prove core value delivery: >50% of LTD users enter a complete recipe library (10+ recipes) within 30 days
3. Establish community presence: Unprompted mentions of DishCost in r/restaurateur or r/KitchenConfidential from non-affiliated users
4. Begin MRR validation: First 50 paying monthly subscribers

**12-Month Objectives:**
1. Revenue: $150,000+ total (LTD + MRR combined)
2. MRR: $10,000+/month from Pro/Business tiers
3. Reviews: 25+ verified reviews on G2 or Capterra (average ≥ 4.0 stars)
4. Subscription churn: < 5% monthly
5. Referral-driven acquisition: ≥ 30% of new users from word-of-mouth/community

**Go/No-Go for MRR Tier:** If LTD purchasers hit 500 in 30 days AND day-30 retention is ≥ 70%, launch paid monthly subscription tiers.

### Technical Success

- OCR invoice processing accuracy: ≥ 90% on first 1,000 processed invoices (vs. MarketMan's estimated ~50%)
- Recipe cost calculation: real-time, < 200ms response
- OCR processing: async, < 3 minutes for standard invoice photo with completion notification
- Dashboard load time: < 2 seconds on average restaurant office internet
- Uptime: ≥ 99.5% (operators use during prep and service, not just 9–5)
- OCR review queue rate: < 2% of invoices require human correction (confidence scoring working correctly)
- Support ticket rate: < 5% of monthly active users (low complexity = low support burden)

### Measurable Outcomes

| Metric | Target | Window | Measurement |
|--------|--------|--------|-------------|
| LTD units sold (AppSumo) | 500 | Days 1–30 | Sales data |
| Day-1 activation (≥1 recipe entered) | ≥ 60% | Day of signup | Product analytics |
| Day-7 retention | ≥ 55% | First week | Login analytics |
| Invoice upload rate | ≥ 50% active users | Per month | Product analytics |
| OCR accuracy | ≥ 90% | First 1,000 invoices | Processing logs |
| NPS | > 50 | Day 60 | In-app survey |
| Monthly churn (subscriptions) | ≤ 5% | Ongoing | Revenue data |

## Product Scope

### MVP — Minimum Viable Product

The MVP delivers one thing with zero friction: **"Tell me exactly how much this dish costs me to make, and alert me when that changes."**

**Core capabilities (all required for launch):**
1. Recipe & Ingredient Library — ingredients with unit costs, pre-loaded database (~500 items with USDA average starting prices), recipes with sub-recipe support, yield/waste % adjustments, batch scaling
2. Real-Time Food Cost Dashboard — per-dish cost %, contribution margin, color-coded margin status, customizable targets by category, blended summary view
3. OCR Invoice Scanning — mobile photo + PDF upload, automatic line-item extraction with confidence scoring, price cascade across all affected recipes, manual review queue for uncertain items
4. Margin Alert System — per-category and per-dish thresholds, triggered alerts when prices change, weekly digest email, in-app notification badge
5. Multi-User Access — owner + up to 2 additional users, role-based permissions (Owner: full access; Staff: recipe entry + invoice upload, no pricing data)
6. Basic Reporting & Export — food cost report by category (CSV + PDF), printable recipe cost cards, ingredient price history chart, data export for accounting
7. Onboarding Flow — concept type selection with template pre-loading, guided 5-step first recipe creation, "quick wins" flow for first 5 dishes

**MVP success gate (all required before shipping):**
- 500+ LTD units in 30 days post AppSumo launch
- ≥ 60% of LTD purchasers enter 10+ recipes within 30 days
- ≥ 50% of active users report finding an unknown food cost problem (day-30 survey)
- OCR accuracy ≥ 90% on first 1,000 invoices
- ≥ 70% of LTD purchasers still active at Day 30

### Growth Features (Post-MVP, v1.5)

- POS read-only integration: sales volume per dish from Toast, Square, Clover
- Full menu engineering matrix (Stars, Plowhorses, Puzzles, Dogs) using sales volume × food cost %
- Multi-location support: 2–5 locations under one account, shared recipe library, per-location pricing
- Email invoice parsing: forward supplier emails to DishCost for automatic processing
- Supplier price benchmarking: "Your chicken breast cost is 12% above regional average"
- LTD upgrade campaign tooling: in-app prompts triggered by OCR volume thresholds

### Vision (Future, v2.0+)

- Ghost kitchen / multi-brand recipe management: separate costing per virtual brand sharing a common ingredient pool
- Light inventory counting: weekly count entry → actual vs. theoretical food cost variance
- QuickBooks / Xero integration: push food cost data to accounting systems
- AI-powered menu engineering: repricing recommendations based on cost and sales patterns
- Mobile-native app (iOS/Android): optimized invoice capture, full functionality on phone
- Data network effect feature: anonymized benchmark food cost data by cuisine type, region, menu size

---

## User Journeys

### Journey 1: Marco — The Independent Full-Service Owner (Primary Success Path)

Marco owns a 55-seat Italian restaurant. He works 60+ hours/week, uses Toast POS, and manages food costs with a Google Sheet he updates when he remembers. Last March, he ran a salmon special for three weeks before realizing food cost had spiked from 28% to 36% — he didn't catch it until month-end P&L.

**Opening scene:** It's Sunday night before the week starts. Marco sees a post in a restaurant owners Facebook group — someone mentions they "caught a $800 food cost problem before it hit the books" using DishCost. The $79 LTD is half what he spent last week on paper towels. He buys it.

**Rising action:** He signs up in 4 minutes. The onboarding asks "What type of restaurant?" — he picks Full Service, and the template loads with pasta, protein, and sauce recipes ready to customize. He enters his tagliatelle al salmone recipe in 8 minutes using the pre-loaded salmon ingredient (price: USDA average, flagged as "update with your actual cost"). He uploads his last Sysco invoice photo with his phone camera. OCR processes in 90 seconds and extracts 23 line items. 2 items need review (one unrecognized brand name) — he taps to confirm both. Salmon updates to $14.20/lb.

**Climax:** The dashboard reloads. His tagliatelle shows 34.2% food cost — red. Target was 30%. He sees exactly why: the salmon price increase he caught weeks late last time is right there on his screen, on Monday morning.

**Resolution:** He adjusts the portion by 0.5oz, bringing cost to 29.8% — green. He sets a margin alert for any dish that crosses 32%. He enters 12 more recipes before Tuesday. By Friday, he's received one more alert (pasta primavera crossed 33% due to cherry tomato price change) and fixed it before the weekend rush. Month-end arrives with no surprises. He posts about DishCost in the Facebook group.

**Journey reveals capabilities:** Recipe entry with pre-loaded database → OCR invoice processing → real-time cost recalculation → margin alert system → mobile invoice capture

---

### Journey 2: Priya — The Fast-Casual Operator (Pre-Scale Validation Path)

Priya owns a fast-casual South Asian street food concept, 18 months profitable, planning a second location. Revenue ~$650K/year, uses Square. Her food cost is "somewhere around 32–35%" — she can't say per item. She needs consistent numbers across two kitchens before she expands.

**Opening scene:** Priya Googles "restaurant food cost software" before a bank meeting about the second location. She lands on a DishCost blog post about how a 2% food cost improvement adds $13,000 to the bottom line of a $650K restaurant. She clicks through to the pricing page, sees "$79 one-time," and purchases without hesitation. She's been burned by $199/month SaaS that she never fully used.

**Rising action:** She sets her food cost target at 33% across all categories. She enters all 28 menu items in two sessions over the weekend. She discovers she has no idea what her samosa filling actually costs — she's been pricing by feel. She enters the recipe, and the result is 38.5% food cost. She's been selling her most popular item at a loss for 18 months.

**Climax:** She reprices the samosa $1.50 higher (still below market for the area), sets a margin alert, and does the mental math: 40 samosas/day × $1.50 × 365 days = $21,900/year she was leaving on the table. This is not a software demo result — this is her money.

**Resolution:** She enters all 28 recipes. Eight are over 35%. She reprices or redesigns five of them before the second location opens. She upgrades to the Pro tier for multi-location access and exports her complete recipe library as the "template" for location 2. At the bank meeting, she hands over a food cost breakdown by category. The loan officer has never seen a restaurant owner prepared at this level.

**Journey reveals capabilities:** Multi-category food cost targets → full menu recipe library → cost calculation at scale → data export → multi-location upgrade path

---

### Journey 3: James — The Chef-Owner Who Hates Spreadsheets (Error Recovery Path)

James is a chef-first, business-second operator. 30-seat restaurant, 2 years open, uses Clover POS. He's bad at the numbers and knows it. Revenue ~$480K/year. He had an $8,200 food cost month in November that blindsided him; he still doesn't know which dishes caused it.

**Opening scene:** Someone on r/KitchenConfidential asks "what do you use for recipe costing?" — James reads the replies and sees DishCost mentioned by three different owners. He clicks the link, watches the 90-second demo video, and signs up for the free trial. No credit card required. He's been burned by "free trials" before.

**Rising action:** James starts entering recipes. He gives up three times in the first session because he doesn't know the exact per-oz cost of his proteins — he buys whole primals and breaks them down himself. The pre-loaded database has whole boneless pork loin at $3.89/lb as a starting price with a yield % field. He enters 80% yield. The system does the math. He didn't have to convert units manually.

**Failing moment:** He uploads a handwritten invoice from his local butcher. OCR struggles — 6 of 12 items need manual review. He almost abandons the tool here. But the review queue is one screen: each uncertain item shows what OCR read and asks "Is this correct?" Tap to confirm or type the correction. It takes 3 minutes. He notes this is still faster than manually updating a spreadsheet.

**Climax:** After entering 22 recipes, he sees the dashboard: 7 dishes over 35% food cost. The duck confit he prices at $28 has a 44% food cost. He goes back to the November P&L — the duck confit special ran for three weeks that month. Mystery solved.

**Resolution:** He redesigns the duck confit portion, reduces one side dish, reprices by $4. He tells his sous chef about the tool and assigns them as a Staff user to handle weekly invoice uploads. He enters 12 more recipes and finds two more problem dishes. He posts about it on r/KitchenConfidential.

**Journey reveals capabilities:** Manual entry fallback for non-standard ingredients → yield % calculation → OCR review queue (graceful degradation) → multi-user access with Staff role → mobile invoice upload by non-owner user

---

### Journey 4: Kitchen Manager / Staff User (Operations Journey)

Maria is the kitchen manager at a fast-casual burger concept. She's not the owner — she's the person who actually handles invoices and updates the recipe library. The owner signed up for DishCost and added her as a Staff user.

**Opening scene:** Every Tuesday, Maria receives invoices from three distributors. Previously, she'd scan them and email PDFs to the owner, who would "update the spreadsheet when he gets time" (never). Now she opens DishCost on her phone during the 10-minute truck arrival window.

**Rising action:** She photographs each invoice and uploads. Status shows "Processing" for 2 minutes. She goes back to receiving the delivery. When she returns, all three invoices have been processed: 47 items updated, 3 items flagged for review. She taps through the 3 review items (two were alternate brand names for ingredients she knows) and confirms them in 90 seconds.

**Resolution:** She gets no success notification — the job is done, silently. The owner checks the dashboard Thursday morning and sees two dishes flagged. He texts Maria: "Did you see the avocado price?" She replies: "I uploaded Tuesday. System caught it automatically." The owner doesn't have to tell her to do anything — it's part of her closing routine now.

**Journey reveals capabilities:** Staff-role permissions (invoice upload without pricing visibility) → mobile-first invoice capture → async OCR with review queue accessible from mobile → owner notification of upstream cost changes

---

### Journey Requirements Summary

| Journey | Capabilities Revealed |
|---------|----------------------|
| Marco (primary success) | Pre-loaded ingredient DB, OCR mobile upload, real-time recalculation, margin alerts, onboarding templates |
| Priya (pre-scale) | Category-level cost targets, full menu entry, multi-location upgrade path, data export |
| James (error recovery) | Yield % calculation, OCR review queue, Staff multi-user access, alternative ingredient entry |
| Maria (staff operations) | Mobile-first upload, Staff role permissions, async processing with mobile review, owner dashboard notifications |

**Implicit system capabilities revealed across journeys:** Multi-tenancy (each restaurant is an isolated account), role-based access control, audit trail of price changes, async job processing with user notification, responsive design (works on phone AND desktop manager screen)

---

## Domain-Specific Requirements

The restaurant/food service domain has medium operational complexity driven by real-time calculation needs, supplier invoice variability, and the operational cadence of restaurant kitchens (prep windows, service hours). No heavy regulatory compliance is required for MVP.

### Operational Constraints

- **Invoice variability:** Supplier invoices (Sysco, US Foods, local distributors) vary dramatically in format, layout, font quality, and structure. OCR must handle handwritten invoices, thermal paper scans, email PDF invoices, and multi-page distributor invoices. Confidence scoring is not optional — it is the core reliability mechanism.
- **Unit of measure heterogeneity:** Ingredients are sold in cases, each, lb, oz, gallon, quart, bunch, and dozens of other units. The system must support flexible unit entry and per-serving cost calculation with unit conversion. Operators should never need to do manual unit math.
- **Real-time operational window:** Restaurant operators make decisions during prep (5–11 AM typically) and review dashboards before service. The system must be reliably available during these windows. Maintenance windows must avoid 5–11 AM local time and 5–10 PM dinner service.
- **Price volatility:** Produce, protein, and dairy prices can change week-to-week. The system must support rapid price updates (invoice upload is the primary mechanism) and must cascade updates to all affected recipes instantly.

### Data Integrity Requirements

- **Price history:** All ingredient price changes must be stored with timestamps. An operator must be able to see what an ingredient cost on any given date to understand historical margin performance.
- **Recipe versioning (lightweight):** When a recipe is modified (ingredients, quantities, yield %), the system should preserve the previous cost data so operators can compare before/after. This does not require full version control — a "last modified cost" snapshot is sufficient for MVP.
- **Multi-tenancy isolation:** Each restaurant account is fully isolated. Ingredient prices, recipes, and margin data must never be visible across accounts. This is a strict data privacy requirement — restaurant operators will not accept a system where their pricing is accessible to competitors.

### Integration Constraints

- **POS-agnostic positioning is a core product requirement, not a technical choice.** The PRD explicitly defers POS integration to v1.5. The MVP must deliver full value with zero POS dependency. This shapes the data model: recipes exist independently of any POS item catalog.
- **Supplier invoice diversity:** No direct integration with Sysco, US Foods, or other distributors is required or expected at MVP. OCR from photos/PDFs is the integration mechanism. This is intentional — direct EDI integrations with distributors require vendor agreements and significant complexity that would delay launch.

---

## Innovation & Novel Patterns

### Detected Innovation Areas

**1. OCR Reliability as Primary Competitive Moat**

The defining innovation in DishCost is not the feature set — recipe costing tools exist. The innovation is building OCR invoice processing that actually works at the reliability level restaurant operators need. MarketMan's estimated ~50% OCR accuracy has become its defining market weakness; Capterra reviews cite it as the primary reason for cancellation. No existing competitor has published accuracy metrics or made reliability a first-class product promise.

DishCost's approach: Google Document AI or AWS Textract with multi-pass confidence scoring, explicit uncertainty handling (uncertain items go to a one-tap review queue rather than silently failing or silently wrong-updating), and a user-visible accuracy metric ("We've processed 47 of your invoices with 94% accuracy"). OCR accuracy becomes a product trust signal, not just an implementation detail.

**2. LTD-First Distribution Strategy in an Underserved AppSumo Category**

AppSumo has zero active restaurant or food service software deals. The existing LTD analog (Open Pantry, Australia, $79 LTD, 2,000+ users) proves the model works for this buyer. The innovation is recognizing that the AppSumo channel is wide open for a US-focused execution — first-mover advantage in a category that MarketMan, MarginEdge, and Restaurant365 have never considered as a distribution channel because they're priced 3–5x above the LTD impulse purchase threshold.

**3. "Works Alongside Any POS" as a Feature, Not a Limitation**

Existing tools position POS integration as a premium selling point. DishCost reframes POS-agnosticism as a feature for buyers who feel locked into Toast or Square ecosystems and resent add-on pricing from their POS vendor. "It works with whatever POS you already have — or no POS at all" is a direct counter-positioning to the value chain that POS vendors are aggressively building into.

### Validation Approach

- **OCR accuracy:** Measured on every processed invoice; accuracy dashboard visible to operators builds trust and creates a feedback loop for manual review data that trains future accuracy improvements
- **LTD demand:** AppSumo community response within 30 days is a binary signal — 500 units validates the channel, sub-200 requires pivoting distribution strategy
- **POS-agnostic positioning:** Measured by asking new users in onboarding "Do you currently use a POS?" — if >40% use Toast/Square and still choose DishCost, the positioning is working

### Risk Mitigation

- **OCR fails below 90% at launch:** Soft launch with beta testers (20–30 operators) before AppSumo; build the OCR review queue UI before assuming high accuracy so the fallback is always graceful
- **LTD model doesn't translate MRR:** Design OCR volume limits into LTD tier as the natural upgrade trigger; LTD holders who upload >50 invoices/month have revealed they're power users who will upgrade for unlimited OCR
- **Toast/Square adds native recipe costing:** DishCost's moat is POS-agnosticism + OCR accuracy, not features; a POS vendor adding recipe costing captures only their ecosystem, not food truck operators or multi-POS restaurants

---

## SaaS B2B Specific Requirements

### Multi-Tenancy Architecture

- Each restaurant account is a fully isolated tenant with separate ingredient libraries, recipe databases, and price histories
- Tenant isolation must be enforced at the database query level, not just application logic
- A single user (owner) may eventually manage multiple locations (v1.5); the data model must accommodate this without requiring a schema migration — each location is a tenant, linked to a parent account

### Authentication & Access Control

- **Auth:** Email + password with optional Google OAuth (social login expected by modern SaaS buyers); no enterprise SSO required for MVP
- **Roles (MVP):**
  - Owner: Full access — all recipes, costs, invoices, reports, account management, billing
  - Staff (Kitchen Manager): Recipe entry, ingredient management, invoice upload; no access to menu pricing data, no access to billing
- **Invitation flow:** Owner sends email invitation → invited user sets password → account created with assigned role
- **Session management:** Standard web session security; persistent sessions acceptable (restaurant owners stay logged in on a shared office computer)

### Billing & Subscription Management

- **Payment processor:** Stripe — LTD as one-time charge, monthly subscriptions as recurring
- **LTD handling:** LTD purchasers are permanent accounts with no billing relationship post-purchase (except upgrade to Pro); LTD tier tracked in user record
- **AppSumo integration:** AppSumo issues redemption codes; DishCost validates codes via AppSumo API at account creation
- **Upgrade paths:** LTD → Pro ($69/month discounted); Free Trial → any paid tier; Starter → Pro or Business
- **Cancellation:** Immediate or end-of-period cancellation; no 60-day notice requirement (explicit anti-pattern vs. MarketMan)

### Onboarding & Time-to-Value

- The onboarding flow is a product requirement, not a UX nicety — it is the primary mechanism for achieving Day-1 activation (≥60% of new users entering ≥1 recipe on day of signup)
- **Concept type selection:** Full Service, Fast Casual, Food Truck, Ghost Kitchen — each pre-loads relevant template recipes and ingredient categories
- **Pre-loaded ingredient database:** ~500 most common restaurant ingredients with USDA average prices as starting values; operators see pre-populated costs immediately, not blank fields
- **Guided first recipe:** 5-step wizard with inline help text; target < 5 minutes to first recipe cost displayed
- **Progressive disclosure:** Advanced features (yield %, sub-recipes, batch scaling) are available but not shown in the guided onboarding flow

### Technical Architecture Guidance (for Architecture Phase)

- **Web-first, responsive:** No native mobile app at MVP; mobile photo upload via browser camera API (no App Store required); responsive design for tablet use in restaurant offices
- **OCR pipeline:** Async processing via Google Document AI (primary) or AWS Textract; results delivered via WebSocket notification or polling; confidence scores stored per line item
- **Database:** PostgreSQL; multi-tenant schema with tenant_id on all user-generated data; suitable for multi-location extensions in v1.5
- **Hosting:** Cloud infrastructure (AWS, GCP, or Railway) with auto-scale for AppSumo launch spike; no single-server deployments
- **Caching:** Recipe cost calculations are deterministic — cache at the recipe level, invalidate on any ingredient price change in the recipe's dependency tree
- **Background jobs:** OCR processing, email digests, and price cascade recalculations run as async jobs (not blocking web requests)

---

## Project Scoping & Phased Development

### MVP Strategy & Philosophy

**MVP Approach:** Problem-solving MVP — prove the core value proposition (food cost visibility + margin alerts) works reliably for independent operators before adding any growth features. The MVP is not a feature-complete product; it is a reliable delivery of the single most important workflow.

**Defining principle:** MarketMan is complex. MarginEdge is expensive. DishCost MVP is neither — it does one thing with zero friction and >90% reliability. Every scope decision must be evaluated against this principle.

**Resource Requirements:** 2–3 engineers (full-stack + OCR/data pipeline specialist), 1 designer, 1 product/GTM owner; 10–14 week build cycle targeting AppSumo launch.

### MVP Feature Set (Phase 1)

**Core User Journeys Supported:**
- Restaurant owner enters complete menu recipe library (onboarding flow)
- Owner or staff uploads supplier invoice via mobile photo (OCR pipeline)
- Owner reviews real-time food cost dashboard and acts on margin alerts
- Owner exports food cost report for accounting review

**Must-Have Capabilities:**
- Recipe & ingredient library with pre-loaded database and USDA starting prices
- OCR invoice processing (photo + PDF) with confidence scoring and manual review queue
- Real-time food cost calculation (<200ms) with color-coded margin status
- Margin alert system with email digest + in-app notifications
- Multi-user access (Owner + up to 2 Staff users)
- Basic CSV/PDF export of food cost reports
- Guided onboarding with concept-type templates
- Stripe billing integration (LTD + monthly tiers)
- AppSumo redemption code validation

**Explicitly Out of Scope for MVP:**
| Feature | Reason |
|---------|--------|
| POS integration (sales volume sync) | Adds integration complexity; recipe costing delivers full value without it |
| Inventory counting / stock management | MarketMan's complexity trap; separate job to be done |
| Purchasing / ordering workflows | Different product (BlueCart territory) |
| Accounting system integration (QuickBooks/Xero) | CSV export covers 95% of need |
| Multi-location management | Single-location operators are 90%+ of initial market |
| Multi-brand / ghost kitchen management | Secondary segment; v2 feature |
| Email invoice parsing | Complex; photo + PDF sufficient for MVP |
| Nutritional information / allergen tracking | Different job to be done |
| AI-powered pricing recommendations | Requires training data from active users |

### Post-MVP Features

**Phase 2 — Growth (3–6 months post-MVP):**
- POS read-only integration: Toast, Square, Clover (sales volume per dish)
- Full menu engineering matrix (Stars/Plowhorses/Puzzles/Dogs)
- Multi-location support (2–5 locations, shared recipe library)
- Email invoice parsing (forward supplier emails to DishCost)
- Supplier price benchmarking (regional comparison data)
- LTD→Pro upgrade tooling with in-app prompts triggered by usage thresholds

**Phase 3 — Expansion (6–12 months post-MVP):**
- Ghost kitchen / multi-brand recipe management
- Light inventory counting with actual vs. theoretical variance
- QuickBooks / Xero integration
- AI-powered menu engineering recommendations
- iOS/Android mobile-native app

### Risk Mitigation Strategy

**Technical Risks:**
- OCR accuracy below 90% at launch: Mitigate by soft-launching with 20–30 beta operators, capturing real invoice samples, and building the review queue UI before assuming high accuracy
- AppSumo launch traffic spike: Mitigate with auto-scaling infrastructure; load test to 10x expected concurrent sessions before launch date

**Market Risks:**
- LTD demand underperforms (<200 units): Mitigate with parallel community seeding (Reddit, Facebook groups) so AppSumo is not the only distribution channel; direct LTD sales from website as backup
- Toast/Square adds native recipe costing: Mitigate through POS-agnostic positioning and food truck/ghost kitchen segments that POS vendors underserve

**Resource Risks:**
- Smaller team than planned: Cut Phase 1 to Recipe Library + OCR + Dashboard + basic alerts; defer multi-user access to first post-launch update (2 weeks); this is the minimum viable version of the MVP
- OCR vendor pricing spike: Negotiate per-document pricing caps; build abstraction layer so OCR vendor can be swapped without application changes

---

## Functional Requirements

### Recipe & Ingredient Management

- FR1: Operators can add ingredients with name, unit (oz, lb, gallon, each, etc.), and cost per unit
- FR2: Operators can edit ingredient costs individually or in bulk
- FR3: Operators can search and filter the pre-loaded ingredient database by name, category, or food type
- FR4: Operators can import ingredients from the pre-loaded database as starting points, then customize prices
- FR5: Operators can create recipes that combine ingredients and sub-recipes with specified quantities
- FR6: Operators can set yield percentage and waste percentage adjustments per ingredient within a recipe
- FR7: Operators can create sub-recipes (e.g., sauces, stocks) that are reused as ingredients in other recipes
- FR8: Operators can scale recipe quantities (batch costing) at 1x, 10x, 100x, or custom multiples
- FR9: Operators can organize recipes by category (appetizers, entrees, desserts, beverages, etc.)
- FR10: Operators can archive recipes without deleting historical cost data
- FR11: Operators can view the cost breakdown of a recipe showing each ingredient's contribution to total cost

### Food Cost Dashboard & Calculation

- FR12: Operators can view the per-serving food cost in dollars for every recipe in their library
- FR13: Operators can view the food cost percentage for every recipe relative to their set menu price
- FR14: Operators can view the contribution margin (menu price minus food cost) for every recipe
- FR15: Operators can set a suggested menu price and see the resulting food cost % automatically
- FR16: Operators can set food cost target thresholds by category (e.g., 28% for entrees, 35% for apps)
- FR17: Operators can view recipes color-coded by margin status (green/on target, yellow/near threshold, red/over threshold)
- FR18: Operators can view a summary dashboard showing blended food cost % and top 5 margin problems
- FR19: Operators can see how ingredient price changes immediately affect all recipes containing that ingredient (real-time recalculation on price update)

### OCR Invoice Processing

- FR20: Operators can upload supplier invoice images (JPG/PNG from phone camera) via mobile browser
- FR21: Operators can upload supplier invoice PDF files from desktop or email
- FR22: The system can automatically extract ingredient names, quantities, units, and prices from uploaded invoices
- FR23: The system assigns a confidence score to each extracted line item and flags low-confidence items for review
- FR24: Operators can review and confirm or correct low-confidence OCR extractions before they are applied
- FR25: Operators can map extracted OCR items to existing ingredients in their library (for first-time matching of ingredient names)
- FR26: The system automatically updates ingredient prices across the library when confirmed OCR extractions are applied
- FR27: Operators can view a history of invoice uploads including processing status and items extracted
- FR28: The system notifies operators (in-app + email) when OCR processing is complete

### Margin Alert System

- FR29: Operators can configure margin alert thresholds per recipe category (e.g., alert when any entree exceeds 32% food cost)
- FR30: Operators can configure margin alert thresholds for individual recipes
- FR31: The system automatically evaluates all recipes against thresholds after each ingredient price update
- FR32: Operators receive in-app notifications listing recipes that have crossed their alert thresholds
- FR33: Operators receive a weekly email digest summarizing recipes that need attention
- FR34: Operators can dismiss or snooze individual alerts without changing thresholds

### User Management & Access Control

- FR35: Account owners can invite users by email and assign them a role (Owner or Staff)
- FR36: Staff users can add and edit recipes and upload invoices
- FR37: Staff users cannot view menu pricing data, margins, or food cost percentages (privacy from employees)
- FR38: Account owners can revoke user access at any time
- FR39: Account owners can view an activity log of recipe changes and invoice uploads by user

### Reporting & Export

- FR40: Operators can generate a food cost report by category showing average food cost % and total cost for a period
- FR41: Operators can export the food cost report as CSV or PDF
- FR42: Operators can generate a printable recipe cost card for any recipe (formatted for kitchen use)
- FR43: Operators can view an ingredient price history chart showing cost changes over time for any ingredient
- FR44: Operators can export their complete ingredient and recipe data as CSV for accounting or backup purposes

### Onboarding & Account Management

- FR45: New users can select their restaurant concept type during onboarding, triggering relevant template recipes and ingredient categories
- FR46: New users can complete a guided 5-step first recipe creation flow during initial onboarding
- FR47: New users can access a "quick wins" onboarding path that prompts entry of their 5 most-sold dishes first
- FR48: Account owners can manage billing, subscription tier, and payment information
- FR49: Account owners can redeem an AppSumo code at account creation or within an existing account
- FR50: Operators can access in-app help documentation and onboarding tooltips (skippable after first use)

---

## Non-Functional Requirements

### Performance

- Real-time recipe cost calculation: < 200ms from ingredient price change to dashboard refresh (user should never see a loading spinner after editing an ingredient price)
- OCR invoice processing: < 3 minutes for standard invoice photo (JPG under 5MB); async with completion notification; this is acceptable latency for an upload workflow
- Dashboard initial load: < 2 seconds on a 25 Mbps connection (typical restaurant office internet)
- Invoice upload: < 5 seconds to upload and acknowledge receipt (not including OCR processing time)
- Concurrent users: System must support 500 concurrent active sessions without degradation (AppSumo launch spike condition); auto-scaling must trigger before this threshold is reached

### Security

- All data encrypted in transit (TLS 1.2+) and at rest (AES-256 for database storage and uploaded invoice files)
- Multi-tenant isolation enforced at database query level with tenant_id predicate on all data access; no application-level workaround acceptable
- Uploaded invoice images stored in private cloud storage (not publicly accessible URLs); access via time-limited signed URLs only
- Stripe handles all payment card data (PCI-DSS compliance delegated to Stripe; DishCost never stores card numbers)
- Password storage: bcrypt with cost factor ≥ 12; no plaintext or MD5/SHA1 storage
- Session tokens: secure, httpOnly, SameSite cookies; session expiry after 30 days of inactivity (restaurant computers stay logged in)
- OWASP Top 10 mitigations required before AppSumo launch: SQL injection, XSS, CSRF, broken access control, security misconfiguration

### Scalability

- Horizontal scaling: Application tier must be stateless to support multiple instances behind a load balancer; session state in Redis or equivalent, not in-process
- Database: PostgreSQL with connection pooling; must support 10,000 active accounts without schema changes
- OCR processing: Async job queue (not synchronous web request) to handle concurrent invoice uploads; queue must support at least 100 concurrent OCR jobs without degradation
- Storage: Invoice image storage must scale to 10GB+ per account-year without architectural changes; use cloud object storage (S3 or equivalent), not local disk
- Auto-scaling: Infrastructure must auto-scale to 10x normal load within 5 minutes (AppSumo launch condition); load test this scenario before launch

### Reliability

- Uptime: ≥ 99.5% measured monthly (corresponds to < 3.6 hours downtime/month)
- Planned maintenance: Maintenance windows must avoid 5–11 AM and 5–10 PM local time for US timezones (restaurant prep and service windows); zero-downtime deployments preferred
- OCR vendor failure: If primary OCR vendor (Google Document AI) is unavailable, fall back to secondary vendor (AWS Textract) automatically; operators must not see OCR failures due to vendor outages
- Data backup: Database backup daily with 30-day retention; point-in-time recovery to within 1 hour of any data loss event
- Job queue: Failed OCR jobs must retry up to 3 times with exponential backoff before marking as failed and notifying the operator

### Integration

- **Stripe:** Payment processing for LTD one-time charges, monthly subscriptions, and upgrade flows; Stripe webhooks for subscription lifecycle events (created, updated, canceled, payment failed)
- **AppSumo:** Redemption code validation via AppSumo API at account creation; code must be validated as unused before granting LTD access
- **OCR vendors:** Google Document AI (primary) and AWS Textract (fallback) via respective cloud SDKs; abstraction layer required so vendor can be swapped without application-layer changes
- **Email:** Transactional email (margin alert digests, OCR completion notifications, invitation emails) via SendGrid, Postmark, or equivalent; email delivery rate ≥ 95%
- **Future (v1.5):** Toast, Square, Clover POS APIs for read-only sales volume sync; data model must not preclude this extension

### Accessibility

- WCAG 2.1 AA compliance for core user flows (recipe entry, dashboard, invoice upload, alerts); operators include users with varied technical literacy, not just tech-savvy buyers
- Color-coded margin status (green/yellow/red) must include non-color indicators (icon + text label) for colorblind users — this affects the primary dashboard feature
- Mobile-responsive design that works on phone cameras and tablet screens without horizontal scrolling; invoice upload is a primary mobile workflow

