---
stepsCompleted:
  - step-01-init
  - step-02-discovery
  - step-02b-vision
  - step-02c-executive-summary
  - step-03-success
  - step-04-journeys
  - step-05-domain
  - step-06-innovation
  - step-07-project-type
  - step-08-scoping
  - step-09-functional
  - step-10-nonfunctional
  - step-11-polish
  - step-12-complete
inputDocuments:
  - ideas/shortlisted/micro-manufacturer-production-management.md
  - _bmad-output/planning-artifacts/market-research-micro-manufacturer-production.md
  - _bmad-output/planning-artifacts/brief-micro-manufacturer-production.md
workflowType: 'prd'
project_name: micro-manufacturer-production
user_name: Root
date: '2026-06-21'
classification:
  projectType: saas_b2b
  domain: manufacturing_smb
  complexity: medium
  projectContext: greenfield
---

# Product Requirements Document — CraftPlan Cloud

**Author:** Root
**Date:** 2026-06-21
**Product Working Title:** CraftPlan Cloud
**Status:** Complete — ready for architecture and epic breakdown

---

## Executive Summary

Millions of artisan makers — cottage bakers, soap makers, candle makers, small breweries, specialty food producers — operate genuine businesses ($50K–$300K annual revenue) on spreadsheets and notebooks. They face real operational problems every batch: calculating recipe costs, planning production runs against open orders, tracking ingredient inventory, and maintaining compliance records. Yet the software market offers no viable solution at their price point: spreadsheets at $0 on one side, enterprise MRP at $300+/month on the other.

The Craftplan open-source project validated this gap definitively in early 2026: its Show HN post reached 577 points and 167 comments, becoming a Top 20 Show HN of all time. The creator built it for his wife's bakery. The intense community response confirmed massive unmet demand. Yet the gap remains: Craftplan is self-hosted and requires Docker expertise that no artisan baker or soap maker will ever have.

CraftPlan Cloud is the hosted, managed cloud version of this vision — a purpose-built production management SaaS at $49–79/month that connects to Etsy and Shopify out of the box, puts recipe costing, batch production planning, ingredient inventory, lot traceability, and allergen tracking in one tool, and onboards a non-technical artisan business owner in under 30 minutes.

**Revenue model:** $49/mo (Solo), $79/mo (Team, up to 5 users), $149 LTD on AppSumo at launch
**Target MRR:** $10,000 by Month 12 (~150–200 paying customers)
**Evaluation score:** 87/105 — Tier 1 Strong Opportunity

### What Makes This Special

The single most important differentiator: **CraftPlan Cloud is the only hosted cloud tool with batch production planning under $149/month.** Craftybase — the category incumbent — handles recipe costing and inventory but has no production batch planning. Every other solution above $149/month is designed for businesses 10–100x the size of a 1–5 person artisan operation.

The core insight: artisan makers are not running a hobby; they are running a manufacturing business at micro scale. Their software needs match a manufacturer's needs (BOM costing, batch production scheduling, lot traceability, allergen compliance) but their budget and technical sophistication match a small retailer's. No tool has been built for exactly this intersection until now.

Three concrete moments where users feel the difference:

1. **Margin clarity in seconds** — Enter ingredient costs once; every recipe shows exact cost-per-unit and margin instantly. When a supplier raises prices, update one ingredient and every product's margin recalculates.
2. **Weekly batch planning in one step** — Select the week's open Etsy/Shopify orders; the system shows exactly which batches to run, in what quantity, and which ingredients to pull — including a shortage alert if inventory is insufficient.
3. **Compliance without paperwork** — Batch records are created automatically at production time. Allergen statements are generated per product, not hand-typed per wholesale order.

## Project Classification

- **Project Type:** SaaS B2B (micro/SMB segment, self-serve PLG motion)
- **Domain:** Small-batch manufacturing / artisan production operations
- **Complexity:** Medium — integrations (Etsy, Shopify OAuth/webhooks), multi-user account model, compliance-adjacent features (lot traceability, allergen management)
- **Project Context:** Greenfield — no existing codebase; inspired by Craftplan OSS but built clean-room to resolve AGPL license risk
- **Target Tech Stack:** Elixir/Phoenix LiveView, PostgreSQL, Fly.io or Render, Stripe, Oban

---

## Success Criteria

### User Success

The primary signal of user success is completing the core weekly production workflow — recipe costs updated, batch plan generated, ingredient availability confirmed, and Etsy/Shopify orders linked to production — within a single session and under 30 minutes for new users.

**Activation milestones (Week 1):**
- User has entered at least 3 recipes with current ingredient costs
- User has connected at least one Etsy or Shopify account
- User has run at least 1 batch production plan against real orders

Users who complete all three milestones in Week 1 will retain at 80%+. This is the onboarding target.

**Engagement signals (ongoing):**
- Weekly production plans run per active account: target 1.5+/week (North Star Metric)
- Recipes in account: target 8+ by Month 3, 12+ by Month 6 (stickiness indicator — recipe library is core business data)
- Batch records created per month: signals operational embedding

**User outcome targets:**
- Time to first batch plan (new user): under 30 minutes
- Trial-to-paid conversion: 20% (Month 3) → 25% (Month 6) → 30% (Month 12)
- 60-day retention: 70%+ across paying customers

### Business Success

| Milestone | Month 3 | Month 6 | Month 12 | Month 18 |
|-----------|---------|---------|---------|---------|
| Paying customers | 20 | 50 | 200 | 400+ |
| MRR | $1,000 | $2,500 | $10,000 | $25,000+ |
| Monthly churn | <10% | <8% | <5% | <4% |
| NPS | — | 40+ | 50+ | 55+ |

**AppSumo LTD objective (Month 8–12):** Sell 500–1,000 LTD seats at $149 = $75K–$150K cash injection. Requires 100+ MRR customers before launch and ≥4.5 AppSumo rating to avoid refund cascade. Treat as growth accelerator, not primary revenue strategy.

**Unit economics targets:**
- CAC: under $50 (community-led growth = low CAC; Etsy/soap Facebook groups, Reddit, YouTube creator partnerships)
- Gross margin: 80%+ (hosting cost approximately $1–8/customer at scale on Fly.io)
- LTV target: $49 × 24 months = $1,176 at 5% monthly churn; LTV/CAC ≥5:1

**Referral target:** 30%+ of new signups from existing customer referrals by Month 6. Artisan maker communities are vocal recommendation networks; referral is the primary organic growth mechanism.

### Technical Success

- **Uptime:** 99.5%+ SLA measured monthly. A Sunday outage during Monday production prep is a customer-loss event for artisan businesses with weekly production cycles.
- **Etsy/Shopify sync reliability:** 90%+ of syncs complete without manual intervention. Sync failures are visible in-app with retry capability.
- **Onboarding completion:** 80%+ of trial signups complete the onboarding flow (connect store + enter 1 recipe + run 1 batch plan)
- **Zero critical bugs at launch:** No P0/P1 issues blocking core workflows at public launch

### Measurable Outcomes

**North Star Metric:** Weekly production plans run per active account. Target: 1.5+ per week.

**Leading indicators tracked weekly:**
- Trial signups → recipe entries → store connections → batch plans run (funnel conversion)
- Recipes per account (embedding indicator)
- Etsy/Shopify sync success rate
- Weekly active ratio (target 60% Month 3 → 75% Month 12)

**Validation gates:**
- Go/no-go for AppSumo LTD: 25+ paying customers AND 70%+ 60-day retention AND 5+ organic referrals
- Go/no-go for Phase 2 investment: Trial-to-paid ≥20% AND NPS ≥40 AND zero open P0/P1 bugs

---

## Product Scope

### MVP — Minimum Viable Product

The MVP enables a single artisan maker to run their complete weekly production workflow inside CraftPlan Cloud. Every MVP feature is load-bearing for this workflow; nothing is included for completeness.

**Core Feature Set:**

**1. Recipe / BOM Builder**
Build ingredient-based product recipes with auto-calculated unit costs. When ingredient prices update, all recipe costs recalculate instantly. Supports yield adjustments (e.g., a 2kg soap batch yields 12 bars). Allergen flags per ingredient (gluten, nuts, dairy, soy, eggs, sulfites) are captured in recipe view but not formatted for label output in MVP.

**2. Batch Production Planner**
Select a recipe and target batch quantity; the system calculates total ingredient requirements, checks on-hand inventory, and flags shortages before production begins. Creates a batch record (date, recipe version, yield, lot number, notes). Marking a batch complete automatically deducts ingredient quantities from inventory.

**3. Ingredient Inventory Tracker**
On-hand quantities per ingredient with unit-of-measure support (weight, volume, count). Manual adjustments for receiving stock and write-offs. Configurable reorder alert thresholds with dashboard indicators. Lot number tracking per received ingredient batch for traceability.

**4. Order Queue with Etsy / Shopify Sync**
OAuth connection to Etsy seller account and/or Shopify store. Open orders pull in automatically and display as a production queue sorted by ship-by date. Link production batches to specific orders. Mark orders fulfilled (status reflected in Etsy/Shopify). Manual order entry for markets and wholesale accounts not connected via API.

**5. Multi-User Access (Solo and Team)**
Solo plan: 1 seat. Team plan: up to 5 seats with role differentiation. Admin role: full access to recipes, pricing, and account settings. Operator role: can log batch completions and view production plans; cannot modify recipes or pricing.

**6. Basic Reporting**
COGS report: total ingredient costs consumed in a user-selected date range (for Schedule C / tax preparation). Batch history: list of all production runs with date, recipe, quantity, lot numbers used, and notes. Low-stock alert summary showing all ingredients below reorder threshold.

**Non-negotiable MVP quality bars:**
- Mobile-responsive UI (makers work from phones/tablets in the kitchen, not at a desk)
- CSV export for every major data type (recipes, batch history, ingredient ledger)
- Onboarding completable in under 30 minutes without documentation
- 99.5%+ uptime SLA

### Growth Features (Phase 2 — Months 4–12 post-launch)

Features with strong demand but not required for core weekly workflow:

- **Allergen statement generator** — Formatted allergen statements per product (label-ready PDF/text). First-class Phase 2 feature; MVP captures allergen flags but doesn't format output.
- **Nutritional fact panel generation** — Requires third-party nutritional database licensing. Real demand from food producers scaling to retail.
- **QuickBooks / Xero COGS sync** — Financial integration for producers who want automated bookkeeping. MVP provides CSV export as a bridge.
- **Production calendar view** — Visual calendar showing planned batch runs by day. Real value for team coordination; not required for solo workflow.
- **Barcode scanning for inventory** — Mobile barcode scanning to receive stock and deduct inventory. Useful at scale; manual entry sufficient for MVP.
- **Amazon Handmade integration** — Extends order sync beyond Etsy and Shopify; post-MVP when core integrations are stable.
- **Supplier management / purchase orders** — In-app purchasing workflow. MVP tracks inventory and alerts; purchasing is manual.
- **Mobile native app (iOS/Android)** — Mobile-responsive web is sufficient for MVP; native app post-MRR is established.

### Vision (Phase 3 — Year 2+)

Platform expansion into adjacent verticals with shared BOM/batch production workflows:

- **Craft beverage vertical** — Brewery, meadery, cidery: fermentation scheduling, gravity tracking, ABV calculation, TTB-compliant batch records
- **Pet food producer vertical** — FDA FSMA traceability rules create forced upgrade triggers from informal tracking
- **Cosmetics / personal care vertical** — INCI ingredient tracking, EU Cosmetics Regulation compliance, cosmetic batch records
- **Network effects layer** — Wholesale buyer directory specifying "CraftPlan Cloud exports accepted" for supplier documentation; in-app ingredient supplier marketplace

---

## User Journeys

### Journey 1: Sarah — The Scaling Cottage Baker (Primary User, Success Path)

**Opening scene:** Sarah is a state-licensed cottage baker with a growing Etsy business ($85K/year, 12–15 SKUs, 40+ ingredients). She runs her kitchen off a Google Sheets workbook she built herself — last updated six months ago. On a Sunday night, preparing for Monday baking, she opens her spreadsheet to check if she has enough oats for the week's granola orders. She discovers a formula error has wiped out two months of ingredient cost updates. She posts in the "Cottage Food Business Owners" Facebook group: "Does anyone use anything better than spreadsheets?"

**Rising action:** Two group members mention CraftPlan Cloud and link to it. Sarah clicks through. The homepage shows a live demo: Etsy orders pull in automatically, and the batch planner tells you exactly what to make and whether you have enough ingredients. She thinks "this is too simple to be real" and starts a free trial — no credit card required.

The onboarding asks: "Do you sell on Etsy or Shopify?" She clicks Etsy. The OAuth flow takes 45 seconds. Her last 30 days of orders appear in the order queue automatically, sorted by ship-by date.

She enters her granola recipe — oats, honey, coconut oil, almonds, vanilla, salt — with current prices from her last supplier receipts. The system shows: "Cost per bag: $3.47. Your Etsy price: $11.00. Margin: 68%." She checks her cookie box: "Cost per box: $6.82. Your Etsy price: $16.00. Margin: 57%." She immediately knows her pricing is holding — and also that she's been guessing.

**Climax:** She navigates to the Batch Planner and selects the week's 8 open Etsy orders. The system calculates: she needs 3 batches of granola and 2 batches of cookies. It shows aggregate ingredient requirements for all 5 batches. Then: "⚠️ Oats: You need 6 lbs. On hand: 3 lbs. Reorder before Monday production." She checks her pantry. Three pounds. The system caught a shortage she would have discovered mid-batch on Monday morning.

**Resolution:** She orders oats that night. Monday production runs without incident. She completes the trial and converts to Solo at $49/mo. She posts back in the Facebook group: "You guys, CraftPlan Cloud is literally what I've been needing for three years. It pulled in all my Etsy orders, told me what I needed to bake this week, and flagged an ingredient shortage before I ran out mid-batch. The spreadsheet era is over."

**Journey requirements revealed:** Etsy OAuth integration, order queue display with ship-by date sort, recipe/BOM entry with cost calculation, batch production planner with multi-order aggregation, ingredient inventory check against batch requirements, shortage alert display

---

### Journey 2: Marcus — The Artisan Soap Brand Owner (Primary User, Switcher Path)

**Opening scene:** Marcus has been running his soap business for 5 years ($150K/year, 25+ formulas, Shopify store, 3 craft markets, 2 boutique wholesale accounts). He switched from spreadsheets to Craftybase two years ago and it was a massive upgrade for recipe costing. But every week he's rebuilding a separate spreadsheet to plan his production runs — Craftybase tells him what a batch costs but not how many batches to make or what the aggregate ingredient need is across the week. He's paying $79/month and doing half his planning in a separate spreadsheet. When Craftybase raised prices again, he Googled "Craftybase alternative batch production planning."

**Rising action:** He finds a Reddit post in r/soapmaking comparing options. CraftPlan Cloud appears with a comment: "Craftybase doesn't do batch scheduling. CraftPlan Cloud does." He signs up for a trial and imports his existing formulas from a Craftybase CSV export. His 25 formulas are in the system inside an hour.

He connects his Shopify store. His open orders appear, sorted by fulfill-by date. He opens the Batch Planner for Monday–Friday: he has orders for 4 formulas. He selects "plan this week's batches." The system returns: Lavender Castile × 3 batches, Charcoal Detox × 2 batches, Oat & Honey × 2 batches, Lemon Verbena × 1 batch. Aggregate ingredient requirements: 8kg sodium hydroxide, 6kg olive oil, 4kg coconut oil, 3kg fragrance oils (breakdown by scent).

**Climax:** He realizes he can forward-plan two weeks at once. He enters next week's anticipated order volume (based on his seasonal history). The system shows that he'll need to order coconut oil in 4 days to have it in time. This is the moment he's never had from Craftybase: the system sees time as a variable, not just cost.

He also creates a second account seat for his part-time helper. Operator role: she can log batch completions when she's in the studio alone; she can't touch recipe pricing. She immediately starts logging batch weights at completion, building lot traceability records Marcus will need when his boutique accounts start requiring documentation.

**Resolution:** After trial, Marcus converts to Team at $79/mo. Same price as Craftybase, features that Craftybase doesn't have. He posts his Craftybase cancellation confirmation in his soap business accountability group and recommends CraftPlan Cloud to three others in the same situation.

**Journey requirements revealed:** CSV import for recipe migration, Shopify webhook order sync, multi-week batch planning view, aggregate ingredient requirements across multiple recipes and batches, multi-user account with role differentiation (Admin/Operator), lot number logging at batch completion

---

### Journey 3: Elena — The Artisan Chocolate Brand Owner (Compliance-Driven Conversion)

**Opening scene:** Elena makes artisan chocolates and confections ($200K/year, commercial kitchen, 3 employees, Shopify D2C + 8 wholesale retail accounts). A compliance audit at a neighboring producer triggered a recall notice last quarter. Elena realized she has no batch records — no way to trace which customers received chocolates from a specific batch of hazelnuts if a supplier issued a recall. She also has a new wholesale account (a specialty grocer chain) requiring formal allergen statements per product before they'll place their first order.

**Rising action:** Elena's food business consultant recommends CraftPlan Cloud after a demo. Elena's concern is immediate: "Can I prove which customer got which batch?" The answer is yes — every batch record captures the lot numbers of every ingredient used. If her hazelnut supplier issues a recall, she can filter batch records by that lot number and see exactly which production runs and which Shopify orders they touched.

She also sees the allergen summary per recipe: her Milk Chocolate Hazelnut Bar automatically shows "Contains: Tree Nuts (Hazelnut), Milk, Soy (Lecithin)." Her Espresso Dark shows "May contain: Tree Nuts" from shared equipment. This is the allergen documentation her wholesale account needs.

**Climax:** She walks her team through the production logging workflow. The morning of a production run, one employee opens the Production Planner, pulls up the week's Shopify orders, and runs the batch planning. A second employee logs ingredient lot numbers as materials are pulled. After production, they mark batches complete and record actual yields. Elena can now produce a batch record for any production day in 2 seconds — date, recipe version used, ingredient lot numbers, batch yield, and which orders it was assigned to.

Her wholesale account receives their allergen documentation package. The buyer emails: "This is exactly what we need. Welcome to our approved supplier list."

**Resolution:** Elena converts to Team at $79/mo. She immediately starts building the compliance library that her wholesale accounts will require for scale. She refers CraftPlan Cloud to two friends in the specialty food space who are trying to break into retail.

**Journey requirements revealed:** Lot number recording per ingredient per batch, batch-to-order linkage (traceability chain), allergen flag display per recipe aggregated from ingredient flags, allergen summary per recipe viewable and shareable, production logging workflow with ingredient pull record, batch history with searchable lot number filter

---

### Journey 4: Admin / Account Owner (Setup and Billing Journey)

**Opening scene:** Sarah (from Journey 1) has been using CraftPlan Cloud for 3 months. She's bringing on a part-time kitchen helper and wants to give her access to log batch completions without exposing recipe costs or pricing settings.

**Rising action:** Sarah opens Account Settings → Team Management. She sees her current plan: Solo (1 seat). She upgrades to Team ($79/mo), confirmed via Stripe's card-on-file flow. She invites her helper by email. The helper receives a welcome email with setup link. Sarah assigns Operator role — the system shows a clear role comparison: "Operators can log batch completions and view production plans. Operators cannot view ingredient costs, recipe pricing, or account billing."

**Climax:** Her helper logs in for the first time and sees a simplified view: just the production queue and batch completion logging. The interface is the same recipe and batch system but read-only for pricing; the batch log form is prominent. She logs her first batch: selects the recipe, enters the batch date, enters the quantity produced, records the lot numbers from the ingredient packaging. Sarah sees the completed batch appear in her dashboard. The lot traceability chain is intact.

**Resolution:** Sarah's business now has operational continuity. Her helper can independently run production days when Sarah is at the farmers market. The batch records are building a compliance library Sarah didn't have before.

**Journey requirements revealed:** In-app plan upgrade (Solo → Team) via Stripe, team member invite by email, role-based access control (Admin/Operator), simplified Operator UI (batch logging focused), batch completion form with lot number capture, real-time visibility of completed batches for Admin

---

### Journey Requirements Summary

| Capability | Journeys | Priority |
|---|---|---|
| Recipe/BOM entry with cost calculation | J1, J2, J3 | P0 MVP |
| Ingredient inventory tracking with on-hand quantities | J1, J3 | P0 MVP |
| Shortage alert in batch planner | J1 | P0 MVP |
| Etsy OAuth order sync | J1 | P0 MVP |
| Shopify webhook order sync | J2 | P0 MVP |
| Batch production planner with order aggregation | J1, J2 | P0 MVP |
| Batch record creation with lot numbers | J2, J3, J4 | P0 MVP |
| Allergen flag per ingredient / allergen summary per recipe | J3 | P0 MVP |
| Batch-to-order traceability linkage | J3 | P0 MVP |
| Multi-user account with Admin/Operator roles | J2, J4 | P0 MVP |
| In-app plan upgrade with Stripe | J4 | P0 MVP |
| CSV recipe import | J2 | P1 Launch |
| Multi-week forward batch planning | J2 | P1 Launch |
| Lot-number-based batch history search | J3 | P1 Launch |
| Formatted allergen statement export | J3 | P2 Phase 2 |

---

## Domain-Specific Requirements

### Compliance and Regulatory Context

CraftPlan Cloud operates in the artisan food / cottage food / small-batch consumer goods space. This domain carries regulatory context that must be reflected in the product architecture:

**Cottage Food Laws (US state-level):** Requirements vary by state, but batch record-keeping is increasingly required. The product should make batch record creation automatic and effortless (not a separate admin task) so compliance happens as a byproduct of production logging.

**Allergen Disclosure (FDA Food Allergen Labeling and Consumer Protection Act):** The 9 major allergens (milk, eggs, fish, shellfish, tree nuts, peanuts, wheat/gluten, soybeans, sesame) require disclosure. CraftPlan Cloud's allergen flagging per ingredient and per-recipe allergen summary gives producers the data to construct compliant labels and allergen statements.

**Lot Traceability (FDA Food Safety Modernization Act):** Under FSMA, food producers must be able to trace ingredients to their source. Lot number tracking in CraftPlan Cloud — capturing the supplier lot number when stock is received and linking it to production batch records — provides the chain of custody documentation FSMA requires.

**Note:** CraftPlan Cloud is not a compliance tool; it is a production management tool that produces compliance-useful records as a byproduct. The product should not make claims about regulatory compliance but should position batch records and allergen management as compliance-supportive.

### Technical Constraints

**Data isolation:** Each paying account (workspace) must have complete data isolation. One customer's recipes, inventory, and batch records must never be accessible to another customer's account.

**Etsy API rate limits:** Etsy's API imposes rate limits on OAuth access. The Etsy sync must implement exponential backoff and queue-based polling, not real-time polling. New orders should appear in the queue within 15 minutes of being placed on Etsy.

**Shopify webhook reliability:** Shopify sends webhooks for new orders and order updates. The system must verify webhook HMAC signatures, handle duplicate webhook delivery idempotently, and process webhooks asynchronously via Oban job queue to avoid blocking.

**Recipe version history:** When a recipe is modified (ingredient quantities or costs), in-progress and historical batch records should reference the recipe version at the time of production, not the current version. This preserves COGS accuracy for historical reporting.

### Integration Requirements

**Etsy Seller API:** OAuth 2.0 PKCE flow; read/write access to open orders and order fulfillment status. Scope: `transactions_r transactions_w`.

**Shopify Partner API:** OAuth 2.0 for Shopify store connection; webhook subscriptions for `orders/create` and `orders/updated`. Fulfillment status write-back via Orders API.

**Stripe Billing:** Subscription management for Solo ($49/mo) and Team ($79/mo) plans. Webhook handling for subscription creation, upgrade, downgrade, and cancellation events. Metered billing is not required for MVP; seat count is enforced at login.

### Risk Mitigations

**AGPL License Risk:** Craftplan (puemos/craftplan on GitHub) is licensed AGPLv3. Building directly on the Craftplan codebase requires open-sourcing all modifications — a significant constraint for a commercial SaaS. Resolution path: build a clean-room product inspired by Craftplan's model but using no Craftplan code. The domain knowledge (BOM costing, batch production planning, lot traceability) is not proprietary; the specific Elixir/Phoenix code implementation is what the AGPL protects.

**Etsy/Shopify Policy Changes:** Platform API access can be revoked or limited at any time. Architecture must treat platform integrations as optional enhancements, not core data flows. The system must function fully without any connected store (manual order entry is a first-class workflow).

---

## SaaS B2B Specific Requirements

### Multi-Tenancy Architecture

CraftPlan Cloud operates as a multi-tenant SaaS with workspace-based tenancy:

**Workspace Model:**
- Each paying customer owns one Workspace
- All data (recipes, inventory, batches, orders, users) belongs to a Workspace
- Workspaces are isolated at the data layer; no cross-workspace data access is possible
- Workspace identity flows through all database queries via tenant-scoped tables or row-level security

**Tenant Isolation Requirements:**
- Database: tenant_id column on all customer data tables; enforced at ORM/query level, not just application layer
- File storage: workspace-scoped storage paths for any file exports or attachments
- Background jobs: workspace_id required on all Oban jobs to prevent cross-tenant processing

### Role-Based Access Control

Two roles for MVP; expandable in Phase 2:

| Permission | Admin | Operator |
|---|---|---|
| View recipes with ingredient costs and margins | ✅ | ❌ (view recipe name/steps only) |
| Create/edit/delete recipes | ✅ | ❌ |
| View ingredient inventory with costs | ✅ | ❌ (view quantities only) |
| Receive ingredient stock (add inventory) | ✅ | ✅ |
| Create and run batch production plans | ✅ | ✅ |
| Log batch completions with lot numbers | ✅ | ✅ |
| View order queue | ✅ | ✅ |
| Mark orders fulfilled | ✅ | ✅ |
| View COGS reports | ✅ | ❌ |
| View batch history | ✅ | ✅ (own batches only) |
| Manage team members | ✅ | ❌ |
| Manage billing and plan | ✅ | ❌ |
| Connect/disconnect Etsy/Shopify | ✅ | ❌ |

### Billing and Plan Management

**Plans:**
- Solo: $49/month, 1 user seat, all core features
- Team: $79/month, up to 5 user seats, all core features + multi-user roles

**Billing requirements:**
- Stripe Checkout for initial subscription creation (hosted payment page, no PCI scope)
- Stripe Customer Portal for plan management, seat upgrades, and cancellation
- Webhook handling for `customer.subscription.updated`, `customer.subscription.deleted`, `invoice.payment_failed`
- 14-day free trial: no credit card required; trial users access Solo feature set
- Trial-to-paid conversion flow: prompted at day 10 and day 13 of trial

**Seat enforcement:** Team plan enforces 5-seat maximum at invite time; attempt to add 6th user prompts plan information. Solo plan enforces 1 seat; any team invite prompts upgrade flow.

### Technical Architecture Considerations

**Elixir/Phoenix LiveView** is the recommended stack:
- Phoenix LiveView enables real-time UI updates for batch completion logging without full-page reloads — critical for mobile kitchen use
- Elixir's concurrency model (OTP) handles parallel Etsy/Shopify sync jobs without thread management complexity
- Oban (Elixir job queue) for reliable background processing of webhook events, sync jobs, and alert emails
- Ecto for database interactions with compile-time query safety

**Database:** PostgreSQL with:
- `tenant_id` columns on all tenant-scoped tables (workspace_id)
- Partitioned batch_records table for scale (partition by workspace_id or date range)
- Full-text search on recipe names and ingredient names (pg_trgm extension)

**Hosting:** Fly.io (Elixir-native deployment, global edge, built-in PostgreSQL clusters) or Render (simpler ops, PostgreSQL included). Fly.io preferred for Elixir workloads.

**Estimated hosting cost:** $30–60/month at launch; $1–2/customer at 50 customers; <$1/customer at 200+ customers.

---

## Project Scoping & Phased Development

### MVP Strategy & Philosophy

**MVP Approach:** Experience MVP — the MVP must deliver a complete, end-to-end experience of the core weekly production workflow. Partial experiences (recipe costing without batch planning, or batch planning without Etsy integration) do not validate the key differentiator. The MVP succeeds when a baker can connect Etsy, enter recipes, run a batch plan, and see ingredient shortages — in that order, in one session.

**MVP Resource Requirements:** 1–2 Elixir/Phoenix developers; 8–12 weeks from zero to public beta. AGPL-clean, greenfield implementation.

**Build priority within MVP:** Etsy integration and batch production planner first. These are the features competitors don't have and the demo moments that convert trials. Recipe costing and inventory management are foundational but table-stakes; the differentiator is the production planning layer on top.

### MVP Feature Set (Phase 1)

**Core User Journeys Supported:**
- Artisan baker / soap maker weekly production workflow (Journey 1 and Journey 2)
- Allergen and lot traceability for food compliance (Journey 3)
- Account owner invites helper and assigns Operator role (Journey 4)

**Must-Have Capabilities:**
1. Recipe / BOM builder with automatic cost calculation
2. Ingredient inventory tracker with on-hand quantities, lot numbers, and reorder alerts
3. Batch production planner: select orders → calculate batch requirements → check inventory → flag shortages → create batch record
4. Etsy OAuth order sync (orders pull in; fulfillment status writes back)
5. Shopify webhook order sync (orders pull in; fulfillment status writes back)
6. Manual order entry for non-connected channels (wholesale, markets)
7. Allergen flagging per ingredient with per-recipe allergen summary
8. Batch record creation with lot number capture (automatic at batch completion)
9. Multi-user account with Admin / Operator roles
10. Stripe-based subscription billing with 14-day free trial
11. Mobile-responsive UI across all core workflows
12. CSV data export (recipes, batch history, ingredient ledger)
13. COGS report and batch history report

### Post-MVP Features

**Phase 2 (Months 4–12 post-launch):**
- Formatted allergen statement generator (PDF/text, ready for wholesale buyer documentation)
- Nutritional fact panel generation (third-party database integration)
- Production calendar view (visual week/month batch scheduling)
- QuickBooks / Xero COGS sync
- Amazon Handmade integration
- Barcode scanning for inventory receiving and depletion
- Supplier management with purchase orders
- AI-powered demand forecasting (seasonal patterns, sales velocity)

**Phase 3 (Year 2 — Vertical Expansion):**
- Craft beverage module (fermentation scheduling, gravity tracking, ABV, TTB batch records)
- Pet food producer module (FDA FSMA traceability, ingredient sourcing records)
- Cosmetics / personal care module (INCI ingredient tracking, EU Cosmetics Regulation)
- Wholesale buyer portal (buyers access allergen docs and batch certificates directly)
- In-app ingredient supplier marketplace

### Risk Mitigation Strategy

**Technical Risks:**
- *Etsy/Shopify API changes:* Architecture treats integrations as optional enhancement layers; system is fully functional without any connected store. Manual order entry is a first-class alternative.
- *AGPL license:* Build clean-room. No Craftplan code in the codebase. Elixir/Phoenix is the right stack independently of Craftplan.
- *Recipe version drift in batch records:* Store a snapshot of the recipe version used in each batch record at creation time, not a live foreign key to the current recipe.

**Market Risks:**
- *Craftybase adds batch planning:* Move fast on community adoption and brand recognition. A Craftybase feature addition in 18 months is slower than our customer relationships and loyalty built from 0–12 months.
- *Craftplan creator launches a hosted tier:* Contact puemos proactively with partnership/white-label conversation. If they launch independently, the market validation confirms the opportunity; differentiation comes from GTM execution.

**Resource Risks:**
- *If 1 developer instead of 2:* Defer Shopify integration to 4 weeks after launch; prioritize Etsy-only MVP (Etsy is the primary channel for most initial users). Manual order entry covers Shopify users in the interim.
- *If timeline extends:* Cut reporting to manual CSV only (no in-app report UI) for MVP; add in Phase 2.

---

## Functional Requirements

### Recipe and BOM Management

- FR1: Admin can create a recipe with a name, description, target yield quantity, and yield unit of measure
- FR2: Admin can add ingredients to a recipe with quantity and unit of measure per ingredient
- FR3: Admin can set or update the cost per unit for each ingredient; the system recalculates recipe cost per unit of output immediately
- FR4: Admin can view the calculated cost-per-unit and gross margin percentage for any recipe given a sale price they enter
- FR5: Admin can mark any ingredient in the system as containing one or more of the standard allergens (gluten, tree nuts, peanuts, dairy, eggs, soy, fish, shellfish, sesame, sulfites)
- FR6: The system displays a per-recipe allergen summary aggregated from all ingredients in that recipe
- FR7: Admin can duplicate an existing recipe to use as a starting point for a new recipe variant
- FR8: Admin can archive a recipe (removes from active list; batch history is preserved)
- FR9: Admin can import recipes from a CSV file with columns for recipe name, ingredient name, quantity, and unit

### Batch Production Planning

- FR10: Admin and Operator can create a batch production plan by selecting one or more open orders from the order queue as inputs
- FR11: The system calculates the total number of batches required for each recipe to fulfill the selected orders
- FR12: The system calculates aggregate ingredient requirements across all planned batches (total quantity of each ingredient needed)
- FR13: The system compares aggregate ingredient requirements against on-hand inventory and displays shortage alerts for any ingredient with insufficient quantity
- FR14: Admin and Operator can adjust planned batch quantities before confirming the production plan
- FR15: When a batch plan is confirmed, the system creates one batch record per recipe run, pre-populated with the planned quantities, assigned lot numbers from current inventory, and linked orders
- FR16: Admin and Operator can mark a batch record as complete, triggering automatic deduction of ingredient quantities from inventory
- FR17: The system displays the production history for any date range as a list of batch records with recipe, yield, date, operator, and ingredient lot numbers used

### Ingredient Inventory Management

- FR18: Admin can add ingredients to the system with a name, default unit of measure, and current cost per unit
- FR19: Admin can record inventory receipts (adding stock) with quantity received, cost paid, supplier name (optional), and lot number from supplier labeling
- FR20: The system maintains a running on-hand quantity for each ingredient, updated by inventory receipts (additions) and batch completions (depletions)
- FR21: Admin can set a reorder alert threshold per ingredient; the system displays a low-stock indicator in the dashboard and on the ingredient detail view when on-hand quantity falls below threshold
- FR22: Admin can manually adjust on-hand quantities for write-offs, waste, or corrections, with a required reason note
- FR23: Admin and Operator can view a chronological inventory ledger for any ingredient showing all receipts, depletions (by batch record), and manual adjustments
- FR24: The system supports multiple units of measure (weight: g, kg, oz, lb; volume: ml, L, fl oz; count: each, dozen) with conversions within unit families (e.g., oz to lb)

### Order Management and Platform Integration

- FR25: Admin can connect a CraftPlan Cloud account to an Etsy seller account via OAuth; the connection can be disconnected from account settings
- FR26: Admin can connect a CraftPlan Cloud account to a Shopify store via OAuth; the connection can be disconnected from account settings
- FR27: The system syncs open orders from connected Etsy and Shopify accounts on a scheduled basis (within 15 minutes of order placement); orders display in the order queue with customer name, items ordered, quantities, and required ship-by date
- FR28: Admin and Operator can manually add an order to the queue (for farmers market, wholesale, or non-integrated channels) with product name, quantity, due date, and customer reference
- FR29: Admin and Operator can link a completed batch record to one or more orders in the queue as the fulfillment source
- FR30: Admin can mark an order as fulfilled; the fulfillment status is written back to Etsy or Shopify for connected orders
- FR31: The order queue displays orders sorted by ship-by date by default; Admin can filter by status (open, in-production, fulfilled)
- FR32: The system displays a sync status indicator showing the last successful Etsy/Shopify sync time and any sync errors with retry option

### Compliance and Traceability

- FR33: Every batch record includes the exact ingredient lot numbers pulled for that batch run, recorded either automatically from current inventory or manually at production time
- FR34: Admin can search batch history by ingredient lot number to identify all production runs and associated orders that used a specific ingredient lot
- FR35: Admin can view a traceability report for a specific ingredient lot showing: lot number, supplier, date received, batches produced using that lot, and orders linked to those batches
- FR36: The system stores the recipe version (ingredient quantities and costs) as a snapshot in each batch record, preserving historical accuracy even when recipes are subsequently edited
- FR37: Admin can view a per-recipe allergen summary (aggregated from ingredient allergen flags) and copy or export it for use in product listings or wholesale documentation
- FR38: Admin can export batch records for a date range as a CSV file including all traceability fields (dates, recipes, lot numbers, yields, linked orders)

### Reporting and Analytics

- FR39: Admin can generate a COGS report for any date range showing total ingredient cost consumed, broken down by recipe, usable for Schedule C tax preparation
- FR40: Admin can view a dashboard summary of key operational metrics: total batches this week, low-stock alert count, open orders count, and orders due within 48 hours
- FR41: Admin can export ingredient inventory history as a CSV showing all receipts, depletions, and adjustments with dates
- FR42: Admin can export the recipe library as a CSV including ingredient costs and calculated cost-per-unit
- FR43: Admin can view batch completion trends over time (batches per week, yield per recipe) in a simple chart view

### User and Account Management

- FR44: A new user can start a 14-day free trial without entering a credit card; the trial provides access to Solo plan features
- FR45: Admin can upgrade from trial or Solo to Team plan via in-app Stripe Checkout; the upgrade takes effect immediately
- FR46: Admin can invite up to 4 additional team members by email address; invitees receive an email with an account setup link
- FR47: Admin can assign team members the Admin or Operator role; role can be changed at any time by an Admin
- FR48: Admin can remove a team member from the account; removed members lose access immediately
- FR49: Admin can manage billing via Stripe Customer Portal (update payment method, view invoices, change plan, cancel subscription) accessible from account settings
- FR50: Any user can update their own name, email address, and password; Admin can reset another team member's password

---

## Non-Functional Requirements

### Performance

- All user-initiated actions (recipe save, inventory update, order status change) complete within 2 seconds on a standard broadband connection
- Batch production plan calculation (aggregating up to 20 recipes across 50 orders) completes within 5 seconds
- Dashboard loads within 3 seconds on first visit after login; within 1.5 seconds on subsequent visits (LiveView persistent connection)
- Etsy/Shopify order sync delivers new orders to the queue within 15 minutes of placement on the platform
- Background jobs (sync, alert emails) do not degrade UI response times; Oban worker pools are isolated from web request processing

### Reliability

- 99.5% monthly uptime SLA (equates to maximum 3.6 hours downtime/month)
- Scheduled maintenance windows communicated 48 hours in advance via in-app banner and email to account admins; maintenance preferred during 2–6 AM UTC on weekdays
- Etsy/Shopify webhook processing is idempotent: duplicate webhook delivery does not create duplicate orders or trigger duplicate fulfillment status updates
- Background job failures are retried with exponential backoff; after 3 failures, the Admin receives an in-app notification and email
- Database backups: daily automated backups with 30-day retention; point-in-time recovery capability

### Security

- All data transmitted between client and server uses TLS 1.2+ (HTTPS enforced; HTTP redirects to HTTPS)
- All data stored at rest uses AES-256 encryption at the database layer (managed by Fly.io or Render infrastructure)
- Passwords are hashed with bcrypt (minimum cost factor 12) and never stored in plaintext
- Etsy and Shopify OAuth access tokens are stored encrypted in the database; never exposed in client-side code or logs
- Shopify webhook payloads are verified using HMAC-SHA256 signature validation before processing
- Session tokens expire after 30 days of inactivity; users are prompted to re-authenticate
- Tenant isolation enforced at the database query level; all queries include workspace_id filtering; no cross-tenant data access is possible via any API route
- Stripe integration follows PCI-DSS SAQ-A compliance: no card data passes through CraftPlan Cloud servers; Stripe Checkout and Customer Portal handle all payment flows

### Scalability

- Application architecture supports horizontal scaling to 1,000+ concurrent users without architectural changes
- Database connection pooling via PgBouncer or Fly.io Postgres managed connection pooling
- Oban job queue supports increasing background job volume without degrading web request performance
- Etsy/Shopify sync architecture supports 500+ connected stores without polling rate limit violations (queue-based polling with per-account rate limiting)

### Accessibility

- All primary user workflows are accessible via keyboard navigation (no mouse-only interactions)
- Color is never the sole indicator of status (low-stock alerts, shortage flags, sync errors use icons and text in addition to color)
- Minimum contrast ratio of 4.5:1 for all text elements (WCAG 2.1 AA)
- All form fields have associated visible labels (no placeholder-only labels)
- Mobile-responsive design: all core workflows function on 375px-wide screens without horizontal scrolling (target: iPhone SE viewport as minimum)

### Integration

- Etsy OAuth connection setup completes within 3 redirects (CraftPlan → Etsy → CraftPlan)
- Shopify OAuth connection setup completes within 3 redirects (CraftPlan → Shopify → CraftPlan)
- Etsy order sync failure rate must remain below 5% of sync attempts (retries excluded); failures surface as visible sync status errors in the UI
- Integration connections include explicit disconnect option from account settings with confirmation prompt
- All third-party API credentials (Etsy, Shopify, Stripe keys) are stored as environment variables or secrets management; never in source code or version control

---

## Strategic Risks and Open Decisions

### Critical Pre-Build Decision: AGPL License

**Status:** Open — resolve before writing a line of product code.

Craftplan (github.com/puemos/craftplan) uses AGPLv3, which requires any SaaS deploying modified Craftplan code to publish the full modified source. This makes building a defensible commercial SaaS on the Craftplan codebase legally complex.

**Recommended path:** Contact Craftplan creator (puemos on GitHub) within Week 1 with a proposal for commercial license or co-creation partnership. If that fails or is unresponsive, proceed with clean-room implementation — same domain model and workflow design, zero shared code. The AGPL protects the specific code, not the problem domain or architectural approach.

**Decision deadline:** Before any code is written. This PRD assumes the clean-room path.

### Go-to-Market Timing

The Craftplan GitHub currently shows no signs of a hosted tier in development. The creator is an active developer; monitor the Craftplan repository and Elixir Forum for announcements. The window to establish community presence before a potential hosted Craftplan launch is 6–12 months. Move fast on public beta and community seeding.

### AppSumo LTD Cap

Cap LTD seats at 500–1,000. AppSumo's platform has declined significantly (down ~50% from peak). Treat the LTD as a liquidity event and brand amplifier, not a sustainable revenue strategy. The monthly recurring subscription base is the defensible business; LTD is a one-time growth accelerant.

---

## Document Completeness Checklist

- [x] Executive Summary with product vision and differentiator
- [x] Project Classification (type, domain, complexity, context)
- [x] Success Criteria (user, business, technical, measurable)
- [x] Product Scope (MVP, Phase 2, Phase 3)
- [x] User Journeys (4 journeys covering all user types)
- [x] Domain-Specific Requirements (compliance, technical constraints, integrations)
- [x] SaaS B2B Specific Requirements (multi-tenancy, RBAC, billing, architecture)
- [x] Project Scoping & Phased Development (MVP strategy, risk mitigation)
- [x] Functional Requirements (50 FRs across 7 capability areas)
- [x] Non-Functional Requirements (performance, reliability, security, scalability, accessibility, integration)
- [x] Strategic Risks and Open Decisions

**Document status:** Ready for architecture design, UX design, and epic/story breakdown.

**Downstream consumers of this PRD:**
- Architecture workflow: use tech stack notes, integration requirements, NFRs, and multi-tenancy model
- UX design workflow: use user journeys, RBAC matrix, mobile-responsive requirement, functional requirements
- Epics and stories breakdown: FR1–FR50 map directly to 5 epics (Recipe Management, Batch Production, Inventory Management, Order Integration, User/Account Management)
