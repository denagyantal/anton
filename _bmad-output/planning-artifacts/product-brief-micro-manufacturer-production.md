---
stepsCompleted: [1, 2, 3, 4, 5, 6]
inputDocuments:
  - ideas/shortlisted/micro-manufacturer-production-management.md
  - _bmad-output/planning-artifacts/market-research-micro-manufacturer-production.md
workflowType: 'product-brief'
lastStep: 6
project_name: micro-manufacturer-production
user_name: Root
date: '2026-06-21'
---

# Product Brief: Micro-Manufacturer Production Management SaaS

<!-- Generated from shortlisted idea + market research context — automated run 2026-06-21 -->

---

## Executive Summary

Millions of artisan makers — cottage bakers, soap makers, candle makers, small breweries, and specialty food producers — run multi-SKU production businesses on spreadsheets and notebooks. They have real revenue (Etsy sellers at $50K–$300K/year), real compliance obligations (allergen labeling, batch traceability), and real operational pain (COGS errors, batch stockouts, manual order reconciliation). Yet the software market leaves them entirely stranded: spreadsheets at $0 on one side, enterprise MRP at $300+/month on the other.

Craftplan — an open-source Elixir/Phoenix production management tool built by a developer for his wife's bakery — validated this gap definitively in February 2026. Its Show HN post reached 577 points and 167 comments, becoming a Top 20 Show HN of all time. It has since accumulated 1,100+ GitHub stars. The creator's own words sum up the market: "everything available was either expensive, too generic, or both."

This product is the hosted, managed cloud version of that vision — an artisan-focused production management SaaS at $49–79/month that requires zero Docker expertise to set up, integrates directly with Etsy and Shopify, and puts recipe costing, batch production planning, ingredient inventory, lot traceability, and allergen tracking into one purpose-built tool for the 1–5 person maker business.

**Product name working title:** CraftPlan Cloud (or equivalent — to be finalized pending AGPL license resolution with the Craftplan creator)

**Revenue model:** $49/mo solo, $79/mo team (up to 5 users), $149 LTD on AppSumo at launch

**Target MRR:** $10,000 by Month 12 (approximately 150–200 paying customers)

**Verdict:** BUILD — 87/105 on internal evaluation framework, Tier 1 Strong Opportunity

---

## Core Vision

### Problem Statement

Micro-manufacturers — artisan bakers, soap and candle makers, small breweries, cottage food producers, confectioners — are running serious businesses on fragile spreadsheets. Every batch they produce requires solving four interconnected operational problems that spreadsheets handle poorly:

1. **Recipe costing**: What does it actually cost to make a dozen soaps? When a fragrance oil price goes up 20%, which products are now being sold at a loss?
2. **Production planning**: How many batches of each product do I need to make this week to fulfill my orders, and do I have enough raw materials on hand?
3. **Inventory tracking**: Is there enough lavender essential oil for this production run, or will I run out mid-batch?
4. **Compliance record-keeping**: Which batch of flour went into which bread order — essential for allergen recalls and increasingly required by cottage food regulations?

The current market offers no viable solution at the price point these businesses can afford. Craftybase ($49–$349/mo) handles recipe costing and inventory but lacks production batch planning. Everything above $149/mo (Katana, Dear Systems, BatchMaster) is designed for companies 10–100x the size of a 1–5 person artisan operation. Self-hosted Craftplan is free but requires Docker Compose deployment skills that an artisan baker or soap maker will never have.

The result: a 200,000–1,400,000 person US market segment that is systematically underserved by both hobbyist-grade and enterprise-grade tools.

### Problem Impact

The consequences of running artisan production on spreadsheets are concrete and costly:

- **Margin erosion from mispriced products**: When ingredient prices change, spreadsheet costs don't auto-update. Artisans regularly discover they've been selling products below COGS for months.
- **Production surprises**: No forward visibility into whether current inventory can fulfill the next batch run. Stockouts discovered mid-production.
- **Tax season pain**: Calculating COGS for Schedule C from a year of notebook entries is several hours of painful work, often done wrong.
- **Compliance exposure**: Cottage food laws increasingly require batch records. Artisan food brands scaling to wholesale need allergen documentation their notebooks can't provide.
- **Scale ceiling**: Spreadsheets break under complexity. Most artisan businesses report hitting a spreadsheet wall around 15–20 active SKUs, after which errors multiply and tracking becomes unreliable.

The HN comment thread on Craftplan captured this directly: "small businesses desperately need simple operational software and are being failed by generic ERP." This is not a mild inconvenience — it is a structural business operations failure that caps the growth potential of an entire business category.

### Why Existing Solutions Fall Short

| Tool | Price | Gap |
|------|-------|-----|
| Spreadsheets | $0 | No automation, no production planning, breaks at scale, no compliance records |
| Inventora | $19/mo | Basic inventory only; no production batch planning; limited features |
| Craftybase | $49–$349/mo | No forward batch production planning; price increases drawing switcher intent; lacks allergen/nutritional tracking at lower tiers |
| SoapMaker Software | ~$50 one-time | Desktop only, no cloud, soap niche only, no production scheduling |
| Self-hosted Craftplan | Free | Requires Docker/server expertise — completely inaccessible to non-technical artisan business owners |
| MRPeasy | $49/user/mo | Designed for 10–200 employee manufacturers; per-user pricing explodes costs; overkill complexity |
| Katana MRP | $179–$1,799/mo | Enterprise pricing; designed for funded D2C brands with dedicated operations staff |
| Dear Systems / Cin7 | $249–$525/mo | Mid-market ERP; 10x over-engineered for 1–5 person operations |
| BatchMaster | $45K+ implementation | Enterprise process ERP; completely inaccessible |

The gap between Craftybase ($149/mo Business) and Katana ($179/mo) is almost exactly $0 — but the gap in what these products can do for a micro-manufacturer is enormous. No purpose-built tool exists in the $49–$149/mo range with (a) cloud hosting, (b) batch production planning, (c) Etsy/Shopify integration, and (d) allergen/lot traceability.

### Proposed Solution

A hosted, fully managed cloud SaaS built on the conceptual model of Craftplan that delivers:

**Core workflow for a 1–5 person artisan maker:**

1. **Recipe/BOM builder** — Enter ingredients and quantities once. Costs auto-calculate per unit. When a supplier price changes, update the ingredient once and every product's margin recalculates instantly.

2. **Batch production planner** — Select a recipe and target quantity. The system calculates total ingredient requirements, checks inventory against on-hand stock, flags shortages, and outputs a pick list for the batch run.

3. **Ingredient inventory tracker** — On-hand quantities tracked against batch consumption. Reorder alerts when stock falls below configurable thresholds. Lot numbers tracked for traceability.

4. **Order queue and fulfillment** — Pull orders from Etsy and Shopify. Display production queue by fulfillment date. Mark orders fulfilled and trigger inventory deductions.

5. **Allergen and compliance** — Tag allergens per ingredient. Auto-generate allergen statements per recipe. Export batch records for cottage food compliance or wholesale buyer documentation.

The product is positioned not as "software for makers" (which sounds hobby-grade) but as **"production operations for artisan businesses"** — the operational layer that the 1–5 person artisan business needs to run like a real manufacturer without enterprise software complexity.

### Key Differentiators

1. **The only cloud tool with production batch planning at under $149/mo** — This single feature gap is the structural market opening. Craftybase (the category leader) doesn't have it. Nothing else at this price has artisan-specific features.

2. **Zero setup friction** — No Docker, no server provisioning, no configuration complexity. Etsy and Shopify integrations connect in under 5 minutes. Recipe import from CSV or manual entry. Operational in under an hour.

3. **Built for makers, not operations managers** — Mobile-friendly batch tracking UI for people who are on their feet, not at desks. Plain English, no ERP jargon. Designed with the single insight that makers are experts at their craft, not at software.

4. **Open-source credibility** — The Craftplan OSS heritage (or clean-room equivalent) gives the product a developer-friendly story. The GitHub community represents a warm, interested audience of early adopters and validators.

5. **Compliance as a feature, not an afterthought** — Allergen tracking, lot traceability, and batch record export are first-class features from day one, not late-stage additions. This is a genuine differentiator versus Craftybase at the Studio and Indie tiers.

6. **The right price for the right customer** — $49/mo solo and $79/mo team threads the needle perfectly between the inadequate ($19–$49) and the unaffordable ($179+). The $149 LTD creates an accessible AppSumo launch moment for the artisan entrepreneur audience.

---

## Target Users

### Primary Users

#### Persona 1: Sarah — The Scaling Cottage Baker

**Background:** Sarah started baking at home three years ago, initially selling at the farmers market. She now has a state cottage food license, sells through Etsy (her primary channel) and a local café wholesale account, and runs her kitchen like a small business. Annual revenue: approximately $85,000. She bakes 12–15 SKUs — muffins, cookie boxes, granola, specialty breads — with a total of 40+ ingredients.

**Current tools:** A Google Sheets workbook she built herself with recipe costs (last updated 6 months ago), a notebook for batch records, Wave for invoicing, and the Etsy app on her phone for orders. She knows her sheets are out of date but updating them takes an hour she never has.

**Pain she experiences:**
- "I think I'm making money on the granola but I honestly don't know — I haven't updated the oat price in months."
- "Tax time is a nightmare — I have to reconstruct my ingredient costs from memory and receipts."
- "When I get a big wholesale order I have to manually calculate if I have enough of everything. I've run out of vanilla extract mid-batch twice this year."
- "My state cottage food inspector asked me about my batch records last year. I showed her my notebook and she wasn't happy."

**What success looks like for Sarah:**
- Know her actual margin on every product without manual updates
- See at a glance whether she has enough ingredients to fulfill the week's orders
- Print out a batch record at the end of a production day for her files
- Have her Etsy orders automatically show up as a production queue

**Discovery path:** Sarah will find this product through a post in the "Cottage Food Business Owners" Facebook group, or through a YouTube tutorial from a baker educator she follows (channels like "The Bread Code" or homestead food business content).

**Conversion driver:** The Etsy integration demo — "your orders pull in automatically and the system tells you if you have enough ingredients to fulfill them."

**Plan:** Solo at $49/mo (or the $149 LTD on AppSumo launch)

---

#### Persona 2: Marcus — The Artisan Soap Brand Owner

**Background:** Marcus has been making cold-process soap for 5 years. He runs a proper branded soap business with a Shopify store, sells at 3 craft markets per weekend during peak season, and supplies 2 boutique retail accounts. He makes 25+ soap formulas with oils, butters, lye, fragrances, and colorants. Revenue: ~$150,000/year. He just hired a part-time helper.

**Current tools:** Craftybase at the Indie tier ($79/mo). He switched from spreadsheets 2 years ago and it was a massive upgrade for recipe costing. But Craftybase doesn't have production scheduling — he manually plans each week's production runs and can't easily see the week's aggregate ingredient requirements across all planned batches.

**Pain he experiences:**
- "Craftybase tells me what a batch costs but I have to manually figure out how many batches to make and what I need. I'm building a separate spreadsheet for that, which defeats the purpose."
- "They keep raising prices. I've been on Indie for two years and they've added $20/mo. I feel like I'm paying more for the same thing."
- "I need my helper to be able to log batch completions but I don't want to give her admin access to everything."
- "I sell through Shopify but I have to manually enter fulfillments into Craftybase — it doesn't sync order-to-production automatically."

**What success looks like for Marcus:**
- One place to see: "this week I need to make X batches of these formulas — here's the aggregate ingredient list"
- Multi-user access so his helper can log production without being an admin
- Shopify orders automatically creating a production queue
- Not paying for features he doesn't use

**Discovery path:** Marcus is the Craftybase switcher. He'll find this product through a Google search ("Craftybase alternative batch production planning"), a Reddit post in r/soapmaking, or word of mouth in the Handcrafted Soap and Cosmetic Guild community.

**Conversion driver:** The batch production planner — the feature Craftybase doesn't have.

**Plan:** Team at $79/mo

---

#### Persona 3: Elena — The Artisan Chocolate Brand

**Background:** Elena makes artisan chocolates and confections. She sells D2C through her own Shopify store, wholesale to 8 specialty food retailers, and at pop-up events. Revenue: ~$200,000/year with 3 employees in a commercial kitchen. She has allergen obligations (many chocolates contain nuts, dairy) and has been told by her largest wholesale account that they need documented allergen statements.

**Current tools:** A combination of QuickBooks (invoicing/financials) and a custom Google Sheets setup for production. She's been using Craftybase but is considering upgrading to something with lot traceability — an incident at another local producer (a customer recall) scared her.

**Pain she experiences:**
- "If a recall happened I have no idea which customers received products from a specific batch of ingredients. I should have records. I don't."
- "My wholesale accounts are asking for allergen statements and HACCP documentation. I'm producing them manually per-account."
- "I'm running my production on a whiteboard. Seriously — a whiteboard with sticky notes for each day's batches."
- "QuickBooks tells me my profit at the end of the month but it can't tell me if the pistachio bark is actually profitable."

**What success looks like for Elena:**
- Lot traceability: know exactly which customer received products from batch X of ingredient Y
- Allergen statements generated automatically per product
- A production calendar that her team can see and update
- Integration between what Shopify sells and what gets produced

**Discovery path:** Elena will find this through the Specialty Food Association, a food business consultant recommendation, or a Google search for "artisan food production software lot traceability."

**Conversion driver:** Allergen tracking + lot traceability — the compliance features she urgently needs.

**Plan:** Team at $79/mo; potential Business tier with compliance exports

---

### Secondary Users

**The Candle Maker:** Identical workflow to the soap maker — recipes (fragrance load, wax type, wick sizing), batch production planning, ingredient inventory. Secondary because the candle community (r/candlemaking) has slightly less commercial density than the soap maker community, but represents 400,000+ small-batch producers in the US.

**The Small Brewery / Meadery / Cidery:** Craft beverage producers face the same BOM/batch workflow but with additional complexity (fermentation scheduling, gravity measurements, ABV calculations). These are a natural expansion vertical with purpose-built features post-MVP.

**The Partner (Wholesale Buyer / Farmers Market Organizer):** Not a direct software user but an influencer — wholesale buyers who require allergen documentation and batch traceability are the compliance driver that pushes artisan food producers to upgrade from spreadsheets. Designing exports that satisfy wholesale buyer documentation requirements is a key secondary use case.

### User Journey

#### Discovery → Activation

1. **Trigger**: Sarah gets her Etsy order volume up to 50+ orders/week. Her spreadsheet breaks (literally — a formula error erases a column of costs). She posts in a Facebook group: "anyone use anything besides spreadsheets for tracking costs and inventory?"

2. **Discovery**: Multiple group members mention the product. She Googles it. The homepage shows her Etsy integration and a live demo of the batch production planner.

3. **Trial start**: She clicks "Start free trial" — no credit card required. The onboarding asks: "Do you sell on Etsy or Shopify?" She clicks Etsy. The system pulls in her last 30 days of orders automatically.

4. **First recipe entry**: She enters her granola recipe with current ingredient costs. The system shows her: "Cost per bag: $3.47. Your Etsy price: $11.00. Margin: 68%." She immediately knows she's been undercharging.

5. **Aha moment**: She sees the production planner. She enters "I need to fulfill 8 open Etsy orders this week." The system calculates: she needs 3 batches of granola, 2 batches of cookies. It shows her ingredient requirements and flags: "You have 3 lbs of oats; you need 6 lbs. Reorder before production."

6. **Conversion**: End of trial, she converts to Solo at $49/mo. She posts back in the Facebook group: "You guys, this is literally what I've been needing for 3 years."

#### Retention and Expansion

- **Month 1–3**: Core workflow established (recipe costing, weekly batch planning, Etsy sync)
- **Month 3–6**: Starts using allergen tracking after a customer inquiry; recommends the product to 2 other baker friends
- **Month 6–12**: Referrals become the primary growth driver within maker communities

---

## Success Metrics

### User Success Metrics

**Primary success indicator — the "aha moment":**
A user runs their first batch production plan and sees: ingredient requirements automatically calculated, inventory shortage flagged, Etsy orders linked to production output. This moment should occur within the first session, ideally within 20 minutes of signup.

**Leading indicators (Week 1):**
- User has entered at least 3 recipes with ingredient costs
- User has connected Etsy or Shopify account
- User has run at least 1 batch production plan
- Users who complete all three of these steps in Week 1 will retain at 80%+

**Ongoing engagement indicators:**
- Weekly active usage (batch planning is a weekly workflow for most artisan businesses)
- Number of recipes in the account (stickiness indicator — recipe library is core business data)
- Etsy/Shopify sync activity
- Batch records created per month

**User outcome metrics:**
- Time from trial signup to first batch plan: target under 30 minutes
- Trial-to-paid conversion rate: target 25%+
- 60-day retention rate: target 70%+
- NPS: target 50+ by Month 6

### Business Objectives

**Revenue milestones:**
- Month 3: $1,000 MRR (approximately 20 paying customers)
- Month 6: $2,500 MRR (approximately 50 paying customers)
- Month 12: $10,000 MRR (approximately 150–200 paying customers)
- Month 18: $25,000+ MRR (AppSumo LTD uplift + organic growth)

**AppSumo LTD objective (Month 8–12, post MRR traction):**
- Sell 500–1,000 LTD seats at $149 = $75K–$150K cash
- Target 1-star AppSumo rating of 4.5+ to avoid refund avalanche
- Use AppSumo cash to fund content/SEO and integration development

**Customer acquisition:**
- CAC target: under $50 (community-led growth = low CAC)
- Primary channels: Reddit/Facebook organic (Month 1–6), SEO content (Month 3–12), YouTube creator partnerships (Month 6+), AppSumo LTD (Month 8–12)

**Unit economics:**
- Solo at $49/mo: 80%+ gross margin (hosting cost approximately $3–8/customer at scale)
- Team at $79/mo: 82%+ gross margin
- LTV/CAC ratio target: 5:1 minimum (with average LTV of $49 × 24 months = $1,176 at 5% monthly churn)

### Key Performance Indicators

| KPI | Month 3 | Month 6 | Month 12 |
|-----|---------|---------|---------|
| Paying customers | 20 | 50 | 200 |
| MRR | $1,000 | $2,500 | $10,000 |
| Monthly churn | <10% | <8% | <5% |
| Trial-to-paid conversion | 20% | 25% | 30% |
| NPS | — | 40+ | 50+ |
| Etsy integrations active | 10 | 30 | 100 |
| Recipes per active account | 5+ | 8+ | 12+ |
| Weekly active ratio | 60% | 70% | 75% |

**Growth indicators:**
- Referral rate: target 30%+ of new signups from existing customer referrals by Month 6
- Community presence: be mentioned positively in at least 3 major craft business Facebook groups organically by Month 4

**North Star Metric:** Weekly production plans run per active account. This is the core workflow — if a customer is running weekly batch plans, they are embedded in the product and will not churn. Target: 1.5+ production plans per active account per week.

---

## MVP Scope

### Core Features

The MVP must enable a single artisan maker to run their weekly production workflow entirely within the product. Every feature included in the MVP is load-bearing for this weekly workflow.

**Feature 1: Recipe/BOM Builder**
- Add ingredients with unit of measure and cost per unit
- Build recipe formulas (ingredient + quantity → auto-calculate cost per unit of finished product)
- Auto-recalculate recipe costs when ingredient prices are updated
- Support for yield adjustments (e.g., a soap batch that yields 12 bars from 2kg of ingredients)
- Basic allergen flagging per ingredient (flag as: contains gluten / nuts / dairy / soy / eggs / sulfites)

**Feature 2: Batch Production Planner**
- Select recipe + target batch quantity → system calculates total ingredient requirements
- Checks on-hand inventory against requirements and flags shortages
- Creates a batch record (date, recipe, yield, notes field)
- Mark batch as complete → automatically deducts ingredients from inventory

**Feature 3: Ingredient Inventory Tracker**
- On-hand quantity per ingredient (unit and weight-based)
- Manual adjustments (receiving new stock, waste/write-off)
- Low stock alert thresholds (configurable per ingredient)
- Lot number recording for purchased ingredient batches (for traceability)

**Feature 4: Order Queue with Etsy/Shopify Sync**
- OAuth connection to Etsy seller account and/or Shopify store
- Pull open orders; display as production queue (sorted by ship-by date)
- Link production batches to orders (which batch fulfills which order)
- Mark orders fulfilled (reflected in Etsy/Shopify status)

**Feature 5: User Account and Multi-User Access**
- Solo plan: 1 user seat
- Team plan: up to 5 user seats with role differentiation (admin vs. operator)
- Operator role: can log batch completions and view production plans, cannot modify pricing/recipes

**Feature 6: Basic Reporting**
- COGS report: total ingredient costs consumed in a date range (for tax preparation)
- Batch history: list of all production batches with date, recipe, yield, lot numbers used
- Low-stock alert summary

**Non-negotiable MVP criteria:**
- Mobile-responsive UI (artisan makers work from phones/tablets in the kitchen, not at a desk)
- Data export to CSV for every major data type (recipes, batch records, ingredient history)
- Onboarding in under 30 minutes for a non-technical user
- 99.5%+ uptime SLA (production planning is time-sensitive — a Sunday outage during a Monday prep day is a customer-loss event)

### Out of Scope for MVP

The following features are explicitly deferred. They are real customer needs but not essential for the core weekly production workflow that MVP must nail:

- **Nutritional fact panel generation** — Real demand (especially for food producers), but requires third-party nutritional database licensing. Post-MVP.
- **Full allergen label/statement generator** — The MVP includes allergen flagging per ingredient; formatted allergen statement output is Phase 2.
- **Amazon Handmade / TikTok Shop integration** — Etsy and Shopify cover 80%+ of target customers. Amazon integration adds complexity for a small segment; Phase 2.
- **Production calendar view** — A visual calendar showing planned batch runs by day. Real value but not required for the core use case; Phase 2.
- **Mobile native app (iOS/Android)** — Mobile-responsive web covers the need adequately for MVP; native app is Phase 2 after MRR is established.
- **AI-powered demand forecasting** — High complexity; Phase 2+ feature.
- **Barcode scanning for inventory** — Useful at scale; Phase 2 after establishing core user base.
- **Supplier management / purchasing workflow** — The MVP tracks inventory and alerts on low stock; purchase order management is Phase 2.
- **QuickBooks / Xero integration** — Financial system integration; Phase 2. MVP provides CSV COGS exports as a bridge.
- **Craft beverage (brewery/meadery) specific features** — Fermentation scheduling, ABV calculation, regulatory compliance. Phase 2 vertical expansion.

### MVP Success Criteria

The MVP is validated and ready for scaling investment when:

1. **25+ paying customers** on monthly plans (not just trial users)
2. **70%+ 60-day retention** across those customers
3. **At least 5 organic referrals** (customers who found the product through another customer's recommendation, not paid/owned channels)
4. **Trial-to-paid conversion ≥ 20%** from the first public launch cohort
5. **NPS ≥ 40** from post-onboarding survey
6. **Zero critical bugs** open (P0/P1 issues that block core workflows)
7. **Etsy sync working reliably** for 90%+ of connected accounts without manual intervention

The go/no-go decision for AppSumo LTD launch requires criteria 1, 2, and 3 to be met. The go/no-go decision for Phase 2 feature investment requires criteria 4, 5, and 6.

### Future Vision

**Phase 2 — Compliance and Integration Layer (Months 6–12 post-launch):**
- Allergen statement export (formatted for wholesale buyer documentation requirements)
- Nutritional fact panel generation (third-party database integration)
- QuickBooks/Xero COGS sync
- Amazon Handmade integration
- Barcode scanning for inventory receiving and depletion
- Production calendar view
- Supplier management with purchase orders

**Phase 3 — Platform Expansion (Year 2):**
- Craft beverage vertical module (brewery/meadery/cidery-specific workflows: fermentation scheduling, gravity tracking, TTB-compliant batch records)
- Pet food producer vertical (similar BOM/batch workflow; FDA compliance requirements create a natural compliance moat)
- Cosmetics/personal care vertical (cosmetic batch records, INCI ingredient tracking, EU Cosmetics Regulation compliance)
- Marketplace directory: a searchable directory of artisan producers using the platform, creating B2B2C exposure

**3-Year Vision:**
The platform becomes the operational backbone for 10,000+ artisan manufacturing businesses. Network effects emerge as wholesale buyers start specifying "CraftPlan Cloud exports accepted" for supplier documentation — similar to how Shopify became table-stakes for DTC. The platform expands into supply chain connections (in-app ordering from artisan ingredient suppliers) and compliance-as-a-service (automated label generation, regulatory filing assistance).

**Vertical expansion priority:**
1. Soap/candle makers (identical workflow to bakery — minimal product changes)
2. Chocolate/confection makers (food compliance overlap)
3. Pet food producers (FDA FSMA traceability rules = forced upgrade trigger)
4. Small breweries / meaderies / cideries
5. Cosmetics / personal care

**Exit scenario:** At $2M+ ARR, the platform is an attractive acquisition target for:
- A food industry compliance software company (traceability data is strategically valuable)
- A manufacturing ERP company seeking the SMB/micro-manufacturer segment
- A commerce platform (Shopify, Etsy) seeking to add production management to their ecosystem

---

## Strategic Risks and Mitigations

### Risk 1: AGPL License (Critical — Resolve First)

Craftplan is licensed under AGPLv3, which requires any SaaS built on it to open-source the entire hosted product. This is the single most important decision before writing a line of code.

**Options:**
- **A. Negotiate commercial license** with Craftplan creator (GitHub: puemos) — cleanest path; creates a potential partnership and ensures no license exposure. Contact immediately.
- **B. Open-source the hosted product** (AGPL-compliant) — defensibility comes from brand, community, and GTM rather than code exclusivity. Viable model (see Metabase, GitLab).
- **C. Build a clean-room product** inspired by Craftplan's model but not using its code — loses the "hosted Craftplan" narrative but eliminates license risk entirely.

**Recommendation:** Contact puemos immediately about Option A. If commercial license negotiations fail or are too costly, proceed with Option C. Do not build on Craftplan code without resolving the license question.

### Risk 2: Craftybase Adding Production Planning

If Craftybase adds a batch production planning module, the primary differentiator shrinks. However: Craftybase's development velocity is slow (the gap has existed for years), and their focus on the hobbyist segment means their production planning, if built, will be lighter than a purpose-built tool. Move fast and build community trust before this window closes.

### Risk 3: Craftplan Creator Launches Hosted Version

The creator is a developer with an obvious commercial opportunity in front of him. This is both a threat and a signal that the market is real. Monitor the Craftplan GitHub and Elixir Forum for announcement signals. If they launch before us, the partnership/commercial license route becomes more urgent and potentially more valuable.

### Risk 4: AppSumo Platform Decline

AppSumo's revenue declined ~50% in 2024–2025. The LTD model faces structural sustainability concerns. Mitigation: treat the AppSumo launch as a growth accelerator after MRR is established, not a primary revenue strategy. Cap LTD seats at 500–1,000 to protect unit economics.

---

## Go-to-Market Strategy

### Launch Sequence

**Month 0–1 (Pre-launch):**
- Resolve AGPL license question
- Set up infrastructure (Elixir/Phoenix on Fly.io or Render)
- Build Etsy and Shopify integrations first (table-stakes for target audience)
- Recruit 15–20 beta testers from r/candlemaking, r/soapmaking, Soapmaking Forum, cottage food Facebook groups

**Month 2–3 (Private Beta):**
- 20 beta users, weekly feedback calls
- Fix critical UX issues based on real maker feedback
- Write the first 3 pieces of SEO content ("bakery batch planning software", "soap business inventory software", "recipe costing for Etsy sellers")

**Month 4 (Public Launch):**
- Authentic Reddit posts in r/smallbusiness, r/candlemaking, r/soapmaking ("I built this because my partner needed it for her bakery")
- Product Hunt launch (developer credibility; warm Craftplan GitHub audience)
- Show HN post (Elixir/Phoenix stack = relevant to Craftplan community)

**Month 5–8 (Community Growth):**
- Facebook group presence in: Cottage Food Business Owners (500K+ members across groups), Soap Business Builders, Candle Makers Community
- YouTube creator partnerships (Bramble Berry, CandleScience — each with 100K–400K subscribers who are exactly the target audience)
- Soapmaking Forum sponsored presence + authentic participation

**Month 8–12 (AppSumo + SEO Scale):**
- AppSumo LTD launch after 100+ MRR customers validate the product
- Specialty Food Association expo or media presence
- SEO content scaling: target 20+ long-tail keywords with near-zero competition

### Pricing at Launch

| Plan | Price | Users | Key Features |
|------|-------|-------|-------------|
| Solo | $49/mo | 1 user | Unlimited recipes/batches, Etsy/Shopify sync, allergen flags |
| Team | $79/mo | Up to 5 users | All Solo features + lot traceability, role-based access, batch record exports |
| LTD (AppSumo) | $149 one-time | Up to 3 users | Solo feature set locked at launch; Team features available via upgrade |

---

## Technical Foundation Notes

**Tech stack (if building on Craftplan or clean-room equivalent):**
- Elixir/Phoenix LiveView (high concurrency, excellent for real-time inventory state)
- PostgreSQL with partitioned tables for batch records at scale
- Fly.io or Render for hosting (Elixir ecosystem fit; cost-efficient)
- Stripe for billing
- Oban for background jobs (Etsy/Shopify sync, alert emails)

**Key integrations for MVP:**
- Etsy Seller API (OAuth 2.0; order sync, fulfillment status updates)
- Shopify Partner API (webhook-based order sync)

**Infrastructure cost estimate at launch:**
- Fly.io: approximately $30–60/month for a 2-core instance with PostgreSQL
- Per-customer hosting cost at 50 customers: approximately $1–2/customer
- Per-customer hosting cost at 200 customers: approximately $0.50–1/customer

---

## Document Status

**Product Brief:** Complete — ready for PRD development

**Next steps:**
1. Resolve AGPL license question (Week 1 action — contact puemos on GitHub)
2. Conduct 10–15 customer discovery interviews in artisan maker communities (Week 1–2)
3. Validate $49/mo and $79/mo price tolerance with 20+ prospective customers (Week 2–4)
4. Proceed to `create-prd` workflow using this brief as foundation
5. Consider `create-ux-design` workflow to nail the mobile-responsive kitchen UI before development begins

**Brief serves as input for:**
- PRD: User stories, acceptance criteria, and feature specifications trace to Section "Core Features" and the three primary personas
- Architecture: Tech stack notes above provide initial guidance; architecture workflow should address real-time inventory concurrency and Etsy/Shopify webhook reliability
- Epics and stories: MVP feature set maps directly to 4–5 epics (Recipe Management, Batch Production Planning, Inventory Management, Order Integration, User/Account Management)
