---
stepsCompleted: [1, 2, 3, 4, 5]
inputDocuments:
  - ideas/shortlisted/restaurant-recipe-costing.md
  - _bmad-output/planning-artifacts/market-research-restaurant-operations.md
workflowType: product-brief
lastStep: 5
author: Root
date: 2026-04-16
---

# Product Brief: Restaurant Recipe Costing & Menu Profitability

---

## Executive Summary

Independent restaurant operators are running their businesses blind. With net margins of 3–6%, a single percentage point of food cost variance can eliminate a quarter of a restaurant's annual profit — yet 60%+ of the 412,000 independent single-location restaurants in the US still track recipe costs with spreadsheets or nothing at all. The tools that solve this problem cost $199–$350+/month and are designed for multi-location chains, not the independent operator who needs answers before the dinner rush, not after a month-end accounting review.

**DishCost** (working title) is a standalone recipe costing and menu profitability tool for independent restaurant operators. It calculates the exact cost of every dish in real time, flags the dishes that are quietly bleeding margin, and automatically updates ingredient costs when a supplier invoice is uploaded — all for a one-time $79 LTD or a simple $49/month subscription. No POS lock-in. No setup fee. No waiting for enterprise sales. Works alongside Toast, Square, Clover, or no POS at all.

The market window is unusually clear: AppSumo has zero active restaurant software deals, MarketMan users are visibly defecting over OCR failures and hostile cancellation policies, and a direct analog (Open Pantry, Australia) has already validated the $79 LTD model with 2,000+ users. The opportunity is a US-focused execution with stronger OCR reliability, modern UX, and a clear community-led go-to-market through r/restaurateur and r/KitchenConfidential.

---

## Core Vision

### Problem Statement

Independent restaurant operators cannot answer a simple question: "How much does this dish actually cost me to make?"

Menu prices are set by gut feel and industry rules of thumb ("keep food cost under 30%"), not by per-dish calculation. When ingredients spike — and in 2024, 90%+ of operators reported food expenses increasing — there is no system that tells them which dishes just became unprofitable. The discovery happens at month-end when the P&L lands, weeks after thousands of dollars in margin have already been lost.

Existing tools solve this problem only for operators with $199–350+/month budgets, IT resources to handle complex onboarding, and the patience to enter hundreds of ingredients manually before getting any value. For the independent operator running a 40-seat restaurant with two managers and 70% annual staff turnover, these tools don't exist in practice.

### Problem Impact

The quantified impact of untracked food costs on independent restaurants:

- **A 2% increase in food costs can eliminate 50% of profit margin** for a restaurant operating at 4% net margin. This is not an edge case — it is the median experience.
- **Restaurants operate 7–9 percentage points above their ideal food cost** due to internal inefficiencies that simple costing visibility would expose and eliminate.
- **4–10% of all food purchased never reaches a customer's plate**, representing $1,600–$4,000/month in waste for a restaurant spending $40,000/month on food.
- **36% of operators** named food costs their #1 operational concern in 2025.
- The "hidden dish" problem: a menu with a blended 30% food cost can conceal a 42% dish selling 80 times per week, representing thousands in avoidable margin loss that a simple costing tool would surface immediately.

### Why Existing Solutions Fall Short

The competitive landscape reveals a structural gap, not a minor product deficiency:

**Enterprise tools are priced for chains, not independents:**
- MarketMan: $199/month + $500 setup fee — $2,888+ in year one for a restaurant with $40K annual profit
- MarginEdge: $350/month — 10.5% of annual profit for a median independent operator
- Restaurant365: Custom/enterprise pricing; full back-office ERP; overkill for single-location

**The most affordable dedicated tool (meez) has a hidden price cliff:**
- $89/month Starter Plus covers recipe management but not invoice processing or real POS sync
- To get those features requires the $199/month Scale tier — a 124% price jump

**The closest affordable option (reciProfity at $99–119/month) has poor execution:**
- Outdated UI, thin POS integrations, no OCR invoice scanning, minimal brand visibility

**MarketMan's OCR failure rate (estimated ~50%) is its defining weakness:**
- The most-cited tool is the most-hated; Capterra reviews document consistent OCR failures, days-long support waits, and hostile 60-day cancellation notice requirements
- This is the primary market opening: a tool that reliably does what MarketMan promises

**No viable LTD option exists for US restaurants:**
- Open Pantry ($79 LTD, Australia, 2,000+ users) proves the model works
- AppSumo currently has zero active restaurant or food software deals

### Proposed Solution

DishCost is a web-based recipe costing and menu profitability tool designed around the workflow of an independent restaurant operator — not a chain's back-office analyst.

**Core workflow:**
1. **Build your recipe library** — Enter ingredients and recipes (or import from a template). Most operators can cover their full menu in under an hour with the provided ingredient database.
2. **Upload supplier invoices** — Photograph an invoice with your phone. OCR extracts line items and automatically updates ingredient costs across all affected recipes.
3. **See your margins in real time** — Every recipe shows current food cost %, actual cost per serving, and target margin status.
4. **Get alerted when a dish goes unprofitable** — When ingredient prices change, affected dishes are flagged if they fall below your target margin threshold.
5. **Price confidently** — Use the built-in menu engineering view to identify which dishes to promote, reprice, or redesign.

The tool requires no POS integration to deliver core value (food cost visibility), but offers optional read-only sync with Toast, Square, and Clover to pull sales volume per dish for full menu engineering analysis.

### Key Differentiators

1. **OCR invoice scanning that actually works** — Built on Google Document AI or AWS Textract with confidence scoring; uncertain reads flag for manual review rather than silently failing. Target: >90% accuracy vs. MarketMan's estimated ~50%.

2. **POS-agnostic design** — Works standalone with manual sales entry, or with light read-only sync to Toast, Square, or Clover. No ecosystem lock-in. The pitch: "Works alongside whatever POS you already have."

3. **Setup in under 1 hour** — Pre-loaded ingredient database (common produce, proteins, dairy, pantry staples with USDA average prices as starting points), template recipe library, and guided onboarding flow. Operators see their first recipe cost in the first session.

4. **Honest, simple pricing** — No setup fee. No per-scan limits. No 60-day cancellation notice. One price covers the core product. The $79 LTD is a single impulse purchase for any operator who has ever been surprised by month-end food cost numbers.

5. **Built for independent operators, not chains** — UI optimized for a single location, a single manager, and a menu of 20–100 items. No multi-location complexity cluttering the interface until it's needed.

6. **AppSumo first-mover advantage** — Zero competition in the category on AppSumo. First restaurant costing tool to launch there captures the entire community of restaurant owner deal-seekers.

---

## Target Users

### Primary Users

#### Persona 1: Marco — The Independent Full-Service Owner

**Background:** Marco owns a 55-seat Italian restaurant that's been open for 6 years. Revenue is about $1.1M/year. He works 60+ hours/week between managing staff, handling vendor relationships, and running the floor on busy nights. He uses Toast POS for ticketing and Square for occasional pop-up events. His "food cost system" is a Google Sheet he built in 2021 that he updates maybe once a month when he remembers.

**Problem experience:**
- Last March, he ran a salmon special for three weeks before realizing Atlantic salmon prices had spiked 22% — the dish went from a 28% food cost to a 36% food cost and he didn't catch it until the monthly P&L
- He suspects his brunch menu is underpriced but hasn't had time to sit down and run the numbers
- He asked his kitchen manager to "redo the spreadsheet" six months ago; it hasn't happened

**What success looks like:** Marco opens the app on Monday morning, sees a red flag on his tagliatelle (salmon price update pushed it to 34% food cost), adjusts the portion size before the week starts, and moves on. Total time: 4 minutes. He doesn't need a report — he needs the alert.

**Acquisition path:** r/restaurateur, peer recommendation from another Italian restaurant owner who posted about it in a local restaurant owners Facebook group. The $79 LTD removes all purchase friction.

---

#### Persona 2: Priya — The Fast-Casual Operator Growing to Location 2

**Background:** Priya owns a fast-casual South Asian street food concept that opened 3 years ago and has been profitable for 18 months. She's planning to open a second location and knows she needs to "get her numbers right" before she does. Revenue: ~$650K/year. Uses Square.

**Problem experience:**
- Her food cost is "somewhere around 32–35%" but she can't tell you per item — she's going to need consistent numbers across two kitchens
- She has downloaded three different spreadsheet templates and abandoned all of them
- She researched meez, got to the pricing page, saw $199/month for the tier she actually needs, and closed the tab

**What success looks like:** Before opening Location 2, Priya has a costed recipe library for all 28 menu items, knows the exact food cost % for each, and has set margin alerts so she knows immediately if a dish crosses 35%. When Location 2 opens, she upgrades to the multi-location tier.

**Acquisition path:** Google search ("restaurant food cost software"), lands on a blog post, sees the LTD offer on the site, purchases same session. Later discovers the AppSumo listing and refers two other restaurant owners.

---

#### Persona 3: James — The Chef-Owner Who Hates Spreadsheets

**Background:** James is a chef-first, business-second operator. He opened his 30-seat restaurant 2 years ago. He's good at food and knows it; he's bad at the numbers side and knows that too. Revenue ~$480K/year, thin margins, uses Clover POS.

**Problem experience:**
- "I can't overstate how much I hate using Excel to try to figure out my recipe costs." (Actual documented quote from target demographic)
- He has a 70-item menu. He prices based on experience and "feels right"
- He had a $8,200 food cost month in November that blindsided him; he still doesn't know which dishes caused it

**What success looks like:** James enters his 70 recipes once (with help from the onboarding guide), uploads his last three Sysco invoices with his phone, and sees the dashboard. He finds 7 dishes over 35% food cost. He fixes two of them immediately. He tells his sous chef about the tool.

**Acquisition path:** r/KitchenConfidential thread where someone asks "what do you use for recipe costing?" — sees multiple recommendations for DishCost, follows the link, signs up for a free trial, purchases within 3 days.

---

### Secondary Users

**Kitchen Manager / Head Chef (non-owner):**
- Often the person who enters recipe data and updates ingredient counts
- Values: ease of data entry, mobile-friendly invoice upload, clear instructions
- Not the buyer, but the primary daily user in larger independent operations
- Feature implication: Multi-user access (at least 1 owner + 1 kitchen manager) must be included in base tier

**Accountant / Bookkeeper (occasional):**
- Needs cost reports for P&L reconciliation
- Values: exportable data (CSV, PDF food cost reports)
- Feature implication: Basic reporting/export is a base-tier feature, not a premium add-on

**Food Truck Operators (emerging secondary segment, high-pain):**
- 35,000+ food trucks in US; zero purpose-built software exists for them
- Usually on Square + Excel; extremely price-sensitive
- LTD at $79 is perfectly positioned; feature set maps exactly to their needs
- Acquisition: food truck Facebook groups, YouTube channels, food truck associations

**Ghost Kitchen / Virtual Restaurant Operators:**
- 8,000+ ghost kitchen locations running multiple brands from one kitchen
- Recipe costing per brand is critical and unsolved
- Higher willingness to pay ($79–99/month); multi-brand management is a genuine feature gap
- Secondary segment for MVP; primary target for v2 multi-brand feature set

### User Journey

**Discovery:**
Trigger: A bad month-end food cost report, a peer recommendation on Reddit, or a Google search for "recipe costing software." The majority of independent operators will arrive via community channels (Reddit, Facebook groups) rather than paid advertising.

**First Contact:**
Landing page focuses on the "30-second value demo" — an animated GIF or short video showing: upload invoice photo → ingredient prices update → dashboard flags a dish in red. No pricing confusion: "$79 one-time, no subscription required" is above the fold.

**Onboarding (Target: Value in first session):**
1. Create account (email + password; no credit card required for trial)
2. Choose your concept type (full-service, fast casual, food truck, ghost kitchen)
3. Add your first 5 ingredients from the pre-loaded database (takes ~2 minutes)
4. Create your first recipe (takes ~3 minutes)
5. See your first food cost % displayed → **"Aha!" moment**
6. Prompted: "Upload a supplier invoice to keep costs current"

**Core Usage (Weekly habit):**
- Monday morning: Check the margin alerts dashboard — any dishes flagged this week?
- When a supplier invoice arrives: Photo upload via mobile → costs updated in 2 minutes
- Quarterly: Menu engineering review — which dishes to reprice, redesign, or promote?

**Success Moment:**
The first time an operator catches a margin problem before it hits the P&L — "I saw the alert on Tuesday, adjusted the portion by 0.5oz, and saved maybe $800 this month" — is the moment they become a champion. NPS surveys at day 30 should probe specifically for this moment.

**Long-term / Upgrade Hook:**
LTD users who upload >20 invoices/month hit a natural prompt: "You're uploading a lot of invoices — upgrade to Pro for unlimited OCR processing + POS sync." The upgrade from $79 LTD to $89/month Pro is justified by hours of manual entry saved.

---

## Success Metrics

### User Success Metrics

The core user success metric is simple: **Did this operator find and fix a food cost problem they would have missed without the tool?**

Proxies for this outcome:

| Metric | Target | Measurement |
|--------|--------|-------------|
| Time to first recipe cost visible | < 15 minutes from signup | Session analytics |
| Recipes entered in first 7 days | ≥ 10 (meaningful coverage) | Product analytics |
| % of users who upload at least 1 invoice | > 50% within 30 days | Product analytics |
| Margin alerts triggered and viewed | > 1 per active user per month | Product analytics |
| 30-day retention | > 70% of LTD purchasers still active | Login analytics |
| NPS at day 60 | > 50 | In-app survey |
| "Found a food cost problem I didn't know about" | > 60% of surveyed users | Day-30 survey |

### Business Objectives

**6-Month Objectives:**
1. **Validate LTD demand**: Achieve 500+ LTD units within 60 days of AppSumo launch
2. **Prove core value delivery**: >50% of LTD users enter a complete recipe library (10+ recipes) within 30 days
3. **Establish community presence**: Unprompted mentions of DishCost in r/restaurateur or r/KitchenConfidential from non-affiliated users
4. **Begin MRR validation**: First 50 paying monthly subscribers (converted from LTD or direct)

**12-Month Objectives:**
1. **Revenue**: $150,000+ total revenue (LTD + MRR combined)
2. **Monthly recurring revenue**: $10,000+ MRR from Pro/Business tiers
3. **Reviews**: 25+ verified reviews on G2 or Capterra (average ≥ 4.0 stars)
4. **Retention**: Monthly churn on paid subscriptions < 5%
5. **Referral**: ≥ 30% of new users acquired via word-of-mouth/community (not paid ads)

**Strategic Objectives:**
- Establish DishCost as the default answer to "what do you use for recipe costing?" in independent restaurant communities
- Build a moat through OCR reliability that MarketMan cannot match without rebuilding their core feature
- Create a data asset (anonymized benchmark food cost data by cuisine type, region, menu size) that enables a future "how do you compare?" feature with high retention value

### Key Performance Indicators

**Acquisition KPIs:**
- AppSumo launch: 500 units in days 1–30; 1,500 total in 90 days
- Direct website conversion rate: ≥ 3% (visitor → trial signup)
- Community post engagement: ≥ 2 organic Reddit/Facebook mentions per week by month 3

**Activation KPIs:**
- Day-1 activation: ≥ 60% of new users enter ≥ 1 recipe on day of signup
- Day-7 retention: ≥ 55% of new users log in at least twice in first week
- Invoice upload rate: ≥ 50% of active users upload at least 1 invoice per month

**Engagement KPIs:**
- Weekly active users / Monthly active users ratio: ≥ 40% (product used most weeks, not just monthly)
- Average recipes per active account: ≥ 25 (full menu coverage)
- OCR invoice processing accuracy: ≥ 90% (vs. MarketMan's ~50% estimated failure rate)

**Revenue KPIs:**
- LTD-to-MRR conversion: ≥ 15% of LTD holders upgrade to paid monthly within 6 months
- Average revenue per user (blended): ≥ $85 in year 1
- Monthly churn on subscriptions: ≤ 5%

**Quality KPIs:**
- Support ticket rate: < 5% of monthly active users (low complexity = low support burden)
- OCR review queue: < 2% of processed invoices require human correction
- Uptime: ≥ 99.5% (restaurant operators need it open during prep, not just 9–5)

---

## MVP Scope

### Core Features

The MVP must deliver one thing with zero friction: **"Tell me exactly how much this dish costs me to make, and alert me when that changes."**

#### Feature 1: Recipe & Ingredient Library
- Add, edit, and organize ingredients with unit costs (per oz, per lb, per unit, etc.)
- Pre-loaded ingredient database with USDA average prices as starting values (~500 most common restaurant ingredients)
- Create recipes that combine ingredients and sub-recipes
- Support for yield % (e.g., 80% yield on butchered protein) and waste % adjustments
- Batch recipe scaling (calculate cost at 1x, 10x, 100x)

#### Feature 2: Real-Time Food Cost Dashboard
- Per-dish display: ingredient cost, food cost %, contribution margin, suggested menu price at target margin
- Color-coded margin status (green = on target, yellow = within 3% of threshold, red = over threshold)
- Customizable food cost target by category (e.g., 28% for entrees, 22% for desserts, 35% for apps)
- Summary view: whole-menu blended food cost %, top 5 margin problems

#### Feature 3: OCR Invoice Scanning
- Mobile photo upload of supplier invoices (Sysco, US Foods, local distributors)
- Automatic extraction of line items (ingredient name, unit, quantity, price)
- Confidence scoring: high-confidence items update automatically; uncertain items queue for 1-tap review
- Automatic price cascade: when an ingredient price updates, all recipes containing it recalculate immediately
- Supported formats: JPG/PNG photos, PDF invoices, email forward (MVP: photo + PDF; v2: email parsing)

#### Feature 4: Margin Alert System
- Set per-category or per-dish food cost thresholds
- Alert when a dish crosses the threshold due to ingredient price changes
- Weekly digest email: "3 dishes need your attention this week"
- In-app notification badge on dashboard entry point

#### Feature 5: Multi-User Access
- Owner account + up to 2 additional users (kitchen manager, bookkeeper)
- Role-based permissions: Owner (full access), Staff (recipe entry + invoice upload, no pricing data)
- Simple invite-by-email flow

#### Feature 6: Basic Reporting & Export
- Food cost report by category (exportable as CSV and PDF)
- Recipe cost cards (printable format for kitchen use)
- Monthly cost trend: ingredient price history chart for top ingredients
- Data export for accounting purposes

#### Feature 7: Onboarding Flow
- Concept type selection (full-service, fast casual, food truck, ghost kitchen) that pre-loads relevant recipe templates
- Guided 5-step first recipe creation
- "Quick wins" flow: enter your 5 most-sold dishes first, see immediate value
- In-app tooltip tour (skippable after first use)

### Out of Scope for MVP

The following are explicitly deferred to preserve focus and shipping velocity:

| Feature | Rationale for Deferral |
|---------|------------------------|
| POS integration (sales volume sync) | Valuable but not required for core food cost tracking; adds significant integration complexity; recipe costing delivers value without it |
| Inventory counting / stock management | Separate workflow; MarketMan's complexity trap — this is where they lose independent operators |
| Purchasing / ordering workflows | Out of scope for v1; BlueCart owns this workflow and it's a different problem |
| Accounting system integration (QuickBooks, Xero) | Nice-to-have; CSV export covers most needs at MVP |
| Multi-location management | Deferred to v1.5; single-location operators are 90%+ of initial addressable market |
| Multi-brand recipe management (ghost kitchens) | Important secondary segment but adds UI complexity; address in v2 |
| Email invoice parsing (auto-forward to DishCost) | Complex to build reliably; photo upload + PDF are sufficient for MVP |
| Nutritional information / allergen tracking | Not the core job-to-be-done; adds ingredient database complexity |
| Recipe scaling for catering/events | Niche use case; basic batch scaling covers most needs |
| AI-powered menu pricing recommendations | Future AI feature; requires training data from active users first |

### MVP Success Criteria

The MVP is successful when:

1. **Validation gate (Day 30 post-launch):** 500+ LTD units sold on AppSumo
2. **Activation gate:** ≥ 60% of LTD purchasers enter a complete recipe library (10+ recipes) within 30 days
3. **Core value gate:** ≥ 50% of active users report "I found a food cost problem I didn't know about" in Day-30 survey
4. **OCR quality gate:** Invoice OCR accuracy ≥ 90% measured on first 1,000 processed invoices
5. **Retention gate:** ≥ 70% of LTD purchasers still active (logged in) at Day 30
6. **Community gate:** Unprompted organic mention of DishCost in r/restaurateur or r/KitchenConfidential within 60 days of launch

**Go/no-go for MRR tier:** If LTD purchasers hit 500 in 30 days AND day-30 retention is ≥ 70%, launch the paid monthly subscription tier.

### Future Vision

**v1.5 (3–6 months post-MVP):**
- POS read-only integration: Pull sales volume per dish from Toast, Square, and Clover
- Full menu engineering view: sales volume × food cost % = menu matrix (Stars, Plowhorses, Puzzles, Dogs)
- Multi-location support: 2–5 locations under one account; shared recipe library, per-location pricing
- Email invoice parsing: Forward supplier emails directly to DishCost for automatic processing
- Supplier price benchmarking: "Your chicken breast cost is 12% above the average for similar restaurants in your region"

**v2.0 (6–12 months post-MVP):**
- Ghost kitchen / multi-brand recipe management: Separate costing per virtual brand sharing a common ingredient pool
- Light inventory counting: Weekly count entry → actual vs. theoretical food cost variance
- QuickBooks / Xero integration: Push food cost data to accounting systems automatically
- AI-powered menu engineering: "Based on your costs and sales patterns, we recommend repricing these 3 dishes"
- Mobile-native app (iOS/Android): Full functionality on phone; optimized invoice capture

**3-Year Vision:**
DishCost becomes the default back-of-house intelligence layer for independent restaurants — the tool that is already running when an operator decides to invest in more sophisticated technology. The data network effect (benchmarking against similar restaurants) creates a defensible moat that larger players cannot replicate by simply copying features. Target: 50,000 active independent restaurant accounts, meaningful MRR, and a platform position that makes DishCost the answer every time someone on Reddit asks "what should I use to track my food costs?"

---

## Go-to-Market Strategy

### Phase 1: AppSumo LTD Launch (Weeks 1–8)
- Launch on AppSumo at $69 (founder price); standard LTD at $79 post-launch
- Positioning: "Know your exact food cost per dish — no monthly fees, no setup fee, works with any POS"
- Pre-launch: Seed 3–5 independent restaurant operators with beta access; capture testimonials with specific food cost amounts saved
- Community seeding: Post in r/restaurateur, r/KitchenConfidential, Ghost Kitchen Network Facebook group the week of launch
- AppSumo-specific: Respond to every question in the comments within 24 hours; early review velocity is critical for deal ranking

### Phase 2: Community & Content (Months 2–4)
- Free tool: "Restaurant Menu Profitability Calculator" (lead capture + conversion to paid)
- Content targeting: "How to price your restaurant menu," "food cost percentage calculator," "recipe costing for restaurants" — high-intent SEO keywords with manageable competition
- Outreach: 10 restaurant owner micro-influencers (YouTube, Instagram, TikTok) with authentic restaurant ownership content; offer free Pro accounts for honest reviews

### Phase 3: MRR Layer & Referral (Months 3+)
- Launch $49/month (Starter) and $89/month (Pro) tiers
- LTD upgrade campaign: "You've saved X hours of manual entry — here's what OCR automation unlocks at $89/month"
- Referral program: Restaurant owners refer peers; both get 1 free month Pro credit
- Target MarketMan defectors directly: Create comparison content; offer migration assist (free recipe import from MarketMan CSV export)

---

## Pricing Architecture

| Tier | Price | Features |
|------|-------|---------|
| LTD Founder | $69 (AppSumo launch only) | Full core features: 100 recipes, OCR (50 invoices/month), 2 users |
| LTD Standard | $79 (post-AppSumo, own website) | Same as Founder |
| Starter | $49/month | Unlimited recipes, OCR (30 invoices/month), 2 users, basic reporting |
| Pro | $89/month | Unlimited OCR, 5 users, POS sync (1 integration), advanced reporting, multi-location (up to 2) |
| Business | $129/month | Unlimited users, all POS integrations, up to 5 locations, priority support |

**LTD upgrade hook:** LTD holders can unlock OCR beyond 50 invoices/month and POS sync by upgrading to Pro at a discounted $69/month (vs. $89 standard).

---

## Risk Register

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|-----------|
| OCR accuracy below 90% at launch | Medium | High | Use Google Document AI + confidence thresholding; soft launch with beta testers before AppSumo |
| MRR transition stalls (LTD users satisfied without upgrading) | Medium | Medium | Design upgrade hook into core workflow; OCR limits are the natural trigger |
| Toast / Square add native recipe costing for free | Low | High | Differentiate on POS-agnostic positioning; food truck + ghost kitchen segments unserved by POS players |
| MarketMan cuts price significantly | Low | Medium | Our moat is OCR reliability and UX simplicity, not price; a price cut doesn't fix bad OCR |
| AppSumo deal underperforms (<200 units) | Low | Medium | Distribution is not solely AppSumo; community channels + direct are parallel tracks |
| Ingredient database gaps cause slow onboarding | Medium | Medium | Launch with 500 most common ingredients + manual entry fallback; expand database based on upload data |

---

## Technical Considerations

**Tech stack (guidance for Architecture phase):**
- Web-first (responsive); mobile photo upload via browser camera API (no native app required for MVP)
- OCR: Google Document AI (recommended) or AWS Textract; process asynchronously with result notification
- Database: PostgreSQL (structured ingredient/recipe data); suitable for multi-tenancy from day one
- Hosting: Cloud (AWS, GCP, or Railway); auto-scale for AppSumo launch spike
- Auth: Email/password + optional Google OAuth; no complex enterprise SSO needed for MVP
- Pricing/billing: Stripe; LTD as one-time charge, subscriptions as recurring

**Performance requirements:**
- Recipe cost calculation: real-time (< 200ms)
- OCR processing: async, < 3 minutes for standard invoice photo; user notified on completion
- Dashboard load: < 2 seconds on average restaurant office internet (assume modest connection)
- Uptime: 99.5%+ (restaurant operators may use during prep and service)
