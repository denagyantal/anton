---
stepsCompleted: [1, 2, 3, 4, 5, 6]
inputDocuments: ["ideas/shortlisted/consignment-resale-shop-inventory-auto-decay-pricing.md", "_bmad-output/planning-artifacts/market-research-consignment-resale-shop.md"]
workflowType: 'product-brief'
lastStep: 6
date: '2026-05-20'
author: Root
---

# Product Brief: Consignment & Resale Shop Inventory with Auto-Decay Pricing

---

## Executive Summary

The US consignment and resale market is a $61B industry growing at 8%+ annually — yet the 9,986 brick-and-mortar consignment shops running it are stuck in the spreadsheet era. Every consignment shop operates a fundamentally different inventory model from retail: items are owned by individual consignors under contract, prices decay on schedules negotiated per consignor, and payouts must be calculated accurately at month-end across hundreds of items with different split rates and markdown histories.

No modern, affordable software solves this natively. The existing options either charge $99–559/month for feature-heavy platforms that were designed for the top 10% of shops, or leave owners on spreadsheets running parallel to whatever generic POS they're using. The result: shop owners spend 40% of their working day answering consignor inquiries and 4–8 hours every month-end manually calculating payouts — work that should take minutes.

**The product:** A cloud-native consignment POS with a configurable per-consignor auto-decay pricing engine, self-service consignor portal, and automated payout calculation — priced at $39–59/month (half the market rate) with a Lifetime Deal option for AppSumo launch.

**The market entry strategy:** Win on price, simplicity, and the one workflow gap no competitor has fully solved — configurable decay contracts per individual consignor agreement, not just store-level markdown rules. Launch via AppSumo LTD at $69–89 to build customer base and validate product-market fit. Target the 4,000–5,000 US consignment shops not yet on dedicated software.

**Revenue target:** $10K MRR within 18 months (achievable via 200 monthly subscribers at $49/month). Conservative, micro-SaaS scale — realistic for solo/small team.

---

## Core Vision

### Problem Statement

Consignment shops operate on a fundamentally different inventory model than retail: every item is owned by a consignor under an individual contract that specifies the commission split, the markdown schedule (e.g., 20% off after 30 days, 50% off after 60 days, return or donate after 90 days), and the payout terms. These contracts vary per consignor. A shop with 150 active consignors may have 150 different contract configurations.

No POS or inventory system handles this natively. The consequence:

1. **Parallel spreadsheet hell**: Shop owners maintain one system for sales (Square, Shopify, or a legacy POS) and a separate spreadsheet tracking each consignor's items, markdown status, and payout calculations. These systems constantly go out of sync.

2. **Month-end payout torture**: Calculating accurate consignor payouts requires reconciling sales history, applying the correct split rate per consignor, accounting for which markdown tier each item was in when it sold, and deducting any intake fees. This takes 4–8 hours manually — every single month.

3. **Constant consignor inquiries**: Without a self-service portal, consignors call and email constantly to ask "Did my item sell?" and "When do I get paid?" These interruptions consume 40% of the owner's working day and erode the consignor relationship.

4. **Markdown errors cause consignor disputes**: When markdowns are applied manually or forgotten, items sell at wrong prices. Consignors dispute payouts. The owner has no audit trail to resolve disputes cleanly.

### Problem Impact

- **Time cost**: 4–8 hours/month on payout calculations × 12 months = 48–96 hours/year lost to administrative work that software should automate
- **Revenue cost**: A shop owner's time is worth $30–50/hour implicitly; 6 hours/month = $180–300/month in lost opportunity
- **Relationship cost**: Consignor disputes from markdown errors and opaque payouts damage the supply chain. Consignors are both suppliers and customers — losing them hurts inventory and revenue simultaneously
- **Growth ceiling**: Shops that could handle 200 consignors with proper software are capped at ~100 consignors because management overhead becomes unworkable beyond that
- **Switching cost barrier**: The pain of the current system is severe, but it's familiar. The trigger to switch is typically a consignor dispute that "breaks the camel's back" or a recommendation from a trusted peer in the consignment Facebook community

### Why Existing Solutions Fall Short

**SimpleConsign ($99/month):** Market leader with "dated interface designed in 2002." Markdown rules are store-level, not per consignor contract. Reports lack detail. Staff training takes longer than modern alternatives. Shopify integration has documented issues.

**ConsignPro ($99–299/month):** Desktop-only (no mobile). No cloud access. Legacy Windows architecture. Cannot manage a shop from a phone or tablet. For modern shop owners, this is a dealbreaker.

**Ricochet ($99–799/month):** Multi-platform but shallow analytics. Bulk item status updates require one-by-one actions. No cash drawer module. Higher tiers become expensive.

**Circle-Hand ($99/month):** The strongest competitor — 5/5 Capterra ratings, AI-assisted item entry, consignor portal, payout calculations, Shopify integration. However: $99/month with no LTD option; per-consignor decay contract configurability is **unverified** (their marketing describes "aging suggestions" but it's unclear if rules are configurable per individual consignor contract). Vendors cannot self-edit items after upload.

**ConsignCloud ($119/month):** Modern interface, good Shopify integration, automated payouts — but priced at the high end. Cost concerns reported by users after trial ends.

**BCSS ($395 one-time):** Desktop Windows only. No cloud, no mobile, no modern UX. But its one-time pricing model has proven demand — shops pay $395 to avoid monthly fees.

**The gap no one fills:** A modern, cloud-native platform at $39–59/month with per-consignor configurable decay rules and a Lifetime Deal option. The sub-$65 tier is entirely unoccupied by modern SaaS.

### Proposed Solution

A purpose-built, cloud-native consignment management platform with three core pillars:

**1. Auto-Decay Pricing Engine (the core differentiator)**
Each consignor gets their own contract configuration: commission split %, intake fee, markdown schedule (days → price reduction %), and expiry action (return / donate / auto-discount further). When an item reaches a milestone, the system automatically applies the markdown and logs it with a full audit trail. No manual intervention required.

**2. Consignor Self-Service Portal**
Every consignor gets a branded login where they can see all their active items, current prices (including which markdown tier each item is in), sales history, pending payout amounts, and payout history. The portal eliminates the "Did my item sell?" phone calls that eat 40% of the owner's day.

**3. Automated Month-End Payout Reports**
At month-end (or on demand), the system generates a payout report for each consignor: items sold, sale prices, markdown tiers at time of sale, commission amounts, and net payout. Accurate, exportable, disputable with a full audit trail. What took 4–8 hours now takes 5 minutes of review.

Supporting capabilities: item intake with photo + condition grading, barcode/tag printing, basic POS (cash + card), aging reports, donation queue for expired items.

**Pricing:**
- $39/month — Basic (1 location, up to 100 consignors, POS + decay engine + payout reports)
- $59/month — Pro (unlimited consignors, consignor portal, Shopify integration)
- $89/month — Multi-location (2+ locations, all Pro features)
- $69–89 LTD — Lifetime deal (AppSumo launch, 1 location, Pro features, capped at 150 consignors)

### Key Differentiators

1. **Per-consignor decay contracts** — Not store-level markdown rules. Every consignor can have a unique schedule that mirrors their actual signed contract with the shop.

2. **Price** — $39–59/month is 40–60% below every modern competitor. For a shop owner paying $99/month for SimpleConsign, switching saves $480–720/year.

3. **Lifetime Deal model** — The only modern SaaS platform in this category to offer LTD pricing. BCSS proved there's demand for one-time pricing; no cloud platform has captured it.

4. **Simplicity-first design** — Most competitors are feature-heavy for shops that only need: intake → markdown tracking → payout calculation → consignor portal. Fewer features = faster onboarding = lower switching cost.

5. **Full audit trail on markdowns** — Every price change is logged with timestamp, rule trigger, and before/after price. Consignor disputes are resolved with data, not arguments.

---

## Target Users

### Primary Users

#### Persona 1: Sarah, The Spreadsheet Refugee
**Background:** Sarah, 47, runs a women's apparel consignment shop in a mid-size suburb. She opened it 4 years ago as a second career after corporate HR. She has 120 active consignors and processes 80–120 new items per week. Monthly revenue: ~$18,000. She uses Square for POS and maintains a Google Sheets spreadsheet for consignor tracking.

**Current pain experience:**
- Every Sunday evening she updates her spreadsheet: which items sold, which are due for markdown, which are due to be returned
- She makes markdown errors 3–4 times per month — items that should have dropped 20% at day 30 get missed
- Month-end takes her 5 hours: cross-referencing Square sales against the spreadsheet to calculate each consignor's payout
- She gets 8–12 "Did my item sell?" texts per day from consignors
- Last month a consignor dispute over a markdown error took 45 minutes to resolve — and the consignor still felt wronged

**What success looks like for Sarah:**
- Monday morning: open the app, see which items need markdown today, approve with one tap
- End of month: click "Generate Payout Report" — done in 2 minutes
- Consignors check their own portal instead of texting her
- Zero payout disputes because the audit trail is always there

**Decision behavior:** Sarah follows 3 consignment Facebook groups. She'll ask "Has anyone tried [product]?" before buying. She needs a 14-day trial with real data before she'll commit. Price sensitivity is high — she notices every SaaS subscription.

---

#### Persona 2: Marcus, The Legacy Upgrader
**Background:** Marcus, 52, runs a furniture and home goods consignment shop in a mid-size city. He's been in business 8 years, has 200+ consignors, and processes large-ticket items ($150–2,000 each). He uses ConsignPro (desktop) on a Windows PC in the back office. He can't access his inventory from the shop floor without going to the back.

**Current pain experience:**
- ConsignPro is desktop-only. He can't check inventory or process a sale from the iPad he bought for the shop floor
- Reporting is limited — he can't easily see which consignors have items approaching the 90-day expiry
- His consignors are often older and more tech-averse, but a few are asking about online tracking
- He's on a ConsignPro version from 2021 and the upgrade path is unclear

**What success looks like for Marcus:**
- Process sales from an iPad on the shop floor
- Pull up a consignor's account from his phone when they call
- Run the aging report weekly to proactively call consignors before items expire
- Generate payout checks at month-end without touching a spreadsheet

**Decision behavior:** Marcus has used ConsignPro for 8 years. He needs a data migration path and clear evidence the new system won't lose his history. He'll spend 3–4 weeks evaluating before switching. Price is secondary to reliability.

---

#### Persona 3: Priya, The New Shop Owner
**Background:** Priya, 34, opened a children's clothing consignment shop 8 months ago. She has 60 consignors and is growing fast. She's tech-savvy (former startup employee) and started with Shopify + a manual consignor spreadsheet because she couldn't justify $99/month for dedicated software when she was just getting started.

**Current pain experience:**
- She knew spreadsheets were a stopgap. Now at 60 consignors, the spreadsheet is becoming unmanageable
- She wants to sell online (Shopify) and in-store simultaneously, with unified inventory
- Her consignors are young parents who expect a modern portal experience
- She's been watching competitors' reviews on Capterra and is ready to switch

**What success looks like for Priya:**
- Shopify integration so online and in-store inventory are unified
- Modern consignor portal that feels like a real product, not an afterthought
- $39–59/month pricing that she can justify at her current stage
- Easy onboarding — she wants to import her spreadsheet and be live in an afternoon

**Decision behavior:** Priya will trial 2–3 products before deciding. She reads G2 reviews and checks if the product has a public roadmap. Price matters but she'll pay $59/month for a product she trusts.

---

### Secondary Users

#### Consignors (The Suppliers)
Consignors are not the paying customer, but they are critical stakeholders whose experience determines whether the shop owner churns. A consignor portal that genuinely satisfies them reduces the shop owner's administrative burden and strengthens their relationship with their supplier base.

**What consignors need from the portal:**
- See all active items and their current prices (including current markdown tier)
- See sales history and pending payout amounts
- Receive automatic notifications when items sell
- Understand how the markdown schedule works for their contract

**Consignor tech-savviness:** Ranges from digital natives (25–35 year olds) to older, less tech-comfortable consignors (55+). The portal must be simple enough for both. Email notifications are more reliable than expecting consignors to log in proactively.

#### Shop Staff (Employees)
For shops with 1–3 employees, staff need to process intake, print tags, mark items, and run the POS without deep training. The system needs role-based access: staff can process sales and intake but cannot see consignor financial data or modify pricing rules.

---

### User Journey

#### Sarah's Journey (Spreadsheet Refugee — Primary)

**Discovery:**
Sarah posts in the "Consignment Shop Owners" Facebook group: "Looking for software that actually handles different markdown schedules per consignor — tired of my spreadsheet." She gets 3 replies recommending different tools, one of which is this product, described as "cheaper than SimpleConsign and has the per-consignor thing."

**Evaluation (Days 1–7):**
She visits the site, sees the pricing ($39–59/month vs. competitors' $99+), and starts the free trial. She imports her consignor list from CSV and sets up her top 5 consignors with their actual contract terms. She runs a mock month-end payout report and sees it matches her manual spreadsheet calculation. This is her "aha!" moment.

**Onboarding (Days 7–14):**
She migrates all 120 consignors, invites them to the portal (60% activate within 2 weeks), and starts using the POS. The Sunday spreadsheet update ritual disappears. Month-end payout report takes 4 minutes instead of 5 hours.

**Advocacy (Month 2+):**
Sarah posts in the Facebook group: "I switched from spreadsheets 6 weeks ago — [product] is the only one I found with real per-consignor markdown rules. The consignor portal alone was worth it." This single post drives 8–12 trial signups.

#### Marcus's Journey (Legacy Upgrader — Secondary)

**Discovery:** Marcus googles "ConsignPro alternative" and finds a comparison article listing this product alongside Circle-Hand and ConsignCloud. He's drawn by the lower price and sees it has a data migration option.

**Key concerns addressed during evaluation:**
- Can he import his 8 years of ConsignPro history? (Yes, CSV import)
- Will it run on iPad? (Yes, cloud-native, any browser)
- Is the consignor data secure? (SOC 2 compliant hosting, explain clearly)

**Conversion:** Marcus takes 3 weeks and asks 4 specific questions via chat before converting. He starts on the $59/month Pro plan.

---

## Success Metrics

### User Success Metrics

**The core user success indicator:** A shop owner who previously spent 5+ hours/month on manual payout calculations should complete month-end payouts in under 15 minutes using the platform.

**Key user outcomes to measure:**

| Metric | Definition | Target |
|--------|------------|--------|
| Time-to-first-payout-report | Minutes from account creation to generating a valid payout report | < 20 minutes |
| Month-end time savings | Self-reported hours saved vs. previous process | > 3 hours/month |
| Consignor portal activation rate | % of shops that have at least 50% of consignors activated in portal | > 60% within 60 days |
| Markdown automation adoption | % of consignors with configured decay rules vs. manual-only | > 80% within 30 days |
| Dispute resolution rate | % of consignor payout disputes resolved via audit trail without owner involvement | > 70% |

**User satisfaction indicators:**
- NPS > 50 (Circle-Hand demonstrates 5/5 is achievable in this niche)
- G2/Capterra rating ≥ 4.5 by Month 6
- Churn rate < 4%/month (higher than typical B2B SaaS due to shop closures; budget for 3–4%)

---

### Business Objectives

**3-Month Objectives:**
- 100–200 LTD customers from AppSumo launch
- First 15–20 monthly SaaS subscribers
- 10+ G2/Capterra reviews (minimum 4.5 average)
- 5 beta shops that have been live for 30+ days with zero critical support issues

**6-Month Objectives:**
- 50+ monthly SaaS subscribers
- $2,450–3,000 MRR
- AppSumo campaign completed; LTD revenue > $10,000
- Shopify integration launched (critical for Segment 3 — Priya persona)
- Positive comparison article appearing in "best consignment software" search results

**12-Month Objectives:**
- 150+ monthly SaaS subscribers
- $7,350–8,850 MRR
- NARTS vendor directory listing
- Multi-location support launched
- Total first-year revenue > $50,000 (LTD + SaaS)

**18-Month Objective:**
- $10,000 MRR (200 subscribers at $49/month average)
- Churn stabilized at < 3%/month for shops open > 1 year
- Net Promoter Score sustained above 50

---

### Key Performance Indicators

**Acquisition KPIs:**
- AppSumo LTD conversion rate: > 2% of AppSumo page views
- Trial-to-paid conversion: > 25% of 14-day trials
- Organic monthly signups from SEO/community: 20+ per month by Month 6
- CAC (Customer Acquisition Cost): < $50 average (Facebook groups = zero; AppSumo is revenue-generating)

**Engagement KPIs:**
- Weekly active usage rate: > 70% of paying accounts use POS or portal within any 7-day period
- Feature adoption — decay rules configured: > 80% of accounts within first 30 days
- Feature adoption — consignor portal invites sent: > 75% of accounts within 14 days

**Revenue KPIs:**
- Monthly Recurring Revenue (MRR) growth: 15%+ month-over-month in first 6 months
- LTD revenue (AppSumo): $10,000+ in first campaign
- Average Revenue Per Account (ARPA): > $49/month
- Gross Revenue Churn: < 5%/month

**Product quality KPIs:**
- Support tickets per account per month: < 0.5 (low-touch support model)
- Critical bug response: < 4 hours
- Uptime: > 99.5%

---

## MVP Scope

### Core Features

The MVP must solve the three core problems that drive shop owners to switch: (1) automated decay pricing, (2) accurate payout calculations, and (3) consignor inquiries. Every other feature is Phase 2+.

**MVP Feature Set (8 weeks to build):**

**1. Consignor Management**
- Create/edit consignor profiles (name, contact, bank/payout info)
- Per-consignor contract configuration: commission split %, intake fee, markdown schedule (configurable days → % reduction pairs, up to 5 tiers), expiry action (return / donate / flag for review)
- Consignor list view with active item count and pending payout amount

**2. Item Intake**
- Item creation: title, category, condition (graded 1–5), initial price, photo (1 required, up to 4)
- Assign to consignor + apply consignor's contract rules automatically
- Barcode/tag generation + print to Zebra/Dymo label printers

**3. Auto-Decay Pricing Engine**
- Daily background job: checks all active items, applies markdowns when milestone days are reached
- Full audit log per item: every price change logged with timestamp, trigger rule, before/after price
- Expiry action automation: when final milestone is reached, marks item as "pending return/donate" and notifies owner

**4. Basic POS**
- Sell items (cash or manual card entry — no payment processing integration in MVP)
- Multi-item transaction with consignor-mixed cart
- Receipt generation (email or print)
- Daily/weekly sales summary

**5. Payout Report Generator**
- Generate payout report for any consignor for any date range
- Shows: items sold, sale price, markdown tier at time of sale, commission amount, intake fee deduction, net payout
- Exportable as PDF and CSV
- Bulk "month-end report" for all consignors with outstanding balances

**6. Basic Reporting**
- Items by age (aging report) — highlights items approaching markup milestones
- Consignors sorted by pending payout
- Items due to expire in the next 14 days (donation queue preview)
- Sales by consignor for any date range

**7. Multi-user Access**
- Owner role: full access
- Staff role: intake, POS, tag printing only (no financial data)

---

### Out of Scope for MVP

These features are explicitly deferred to Phase 2 and beyond. Including them in MVP would extend the build timeline beyond 8 weeks without delivering meaningfully more value to the first 50 customers.

| Feature | Reason Deferred | Target Phase |
|---------|----------------|--------------|
| Consignor self-service portal | High value, but requires polished UX; owner-generated reports solve the immediate problem | Phase 2 (Month 3) |
| Shopify integration | Critical for Priya persona, but not blocking for Sarah and Marcus; adds 3–4 weeks | Phase 2 (Month 3–4) |
| Built-in payment processing | Square/Stripe integration requires PCI compliance review; manual card entry unblocks MVP | Phase 2 (Month 4) |
| Mobile app (iOS/Android) | PWA (mobile-responsive web) sufficient for MVP; native app is a Phase 3 investment | Phase 3 |
| Multi-location support | Only ~15% of addressable market; add after 100 single-location customers | Phase 3 |
| AI-powered item entry | Nice-to-have; Circle-Hand has it; but not a switching trigger for the Spreadsheet Refugee | Phase 3 |
| Bulk payout processing (PayPal/Venmo/Zelle) | Useful but complex; paper check or manual bank transfer is acceptable at MVP scale | Phase 3 |
| QuickBooks/accounting integration | Deferred; CSV export of payout reports is sufficient for bookkeepers at MVP stage | Phase 3 |
| Consignor mobile notifications | Email notifications sufficient; push notifications require native app | Phase 3 |
| Luxury/authentication features | Different market segment; tackle furniture or luxury verticals post-traction | Phase 4 |

---

### MVP Success Criteria

The MVP is considered successful and ready for full launch when:

**Product validation (by end of Week 8 beta):**
- [ ] 5 beta shops have run their actual operations on the platform for 30+ days
- [ ] All 5 beta shops have generated at least 1 successful month-end payout report
- [ ] Zero critical bugs causing data loss or incorrect payout calculations
- [ ] Average beta shop NPS ≥ 8/10

**Business validation (by Month 3):**
- [ ] 100 AppSumo LTD customers converted
- [ ] 3+ positive Capterra/G2 reviews (4+ stars)
- [ ] At least 1 organic inbound signup per day from community/SEO
- [ ] < 20% of LTD customers have requested refunds

**Go/no-go gates:**
- If beta NPS < 7 or > 2 critical payout calculation bugs found: pause public launch, fix first
- If AppSumo LTD waitlist < 50 signups before launch: reconsider positioning or AppSumo campaign strategy
- If month 3 MRR growth < 5%/month: conduct 10 customer interviews to identify blocking issues

---

### Future Vision

**Phase 2 — Growth Features (Months 3–6):**

*Consignor Portal (highest leverage feature)*
A branded self-service portal where consignors log in to view their items, current prices and markdown status, sales history, and payout calculations. Includes automatic email notifications when items sell. This single feature is projected to reduce support volume by 60% and is a major upgrade reason from Basic to Pro plan.

*Shopify Integration*
Sync active, non-expired inventory to a Shopify storefront automatically. When an item sells online, it's removed from the in-store system instantly. Critical for shops that want an online presence — the fastest-growing segment of the consignment market.

*Square payment processing integration*
Replace the manual "card entry" with real integrated payments via Square. Eliminates the need for shops to run a separate Square account alongside the consignment software.

**Phase 3 — Platform Expansion (Months 7–18):**

*Multi-location support*
Unified inventory and consignor management across 2+ locations. Consignors can drop items at any location; payouts aggregated. Opens the door to franchise and multi-owner cooperatives.

*Bulk payout processing*
One-click PayPal/Venmo/Zelle payout to all consignors with outstanding balances. Payout records automatically marked as settled. For shops with 150+ consignors, this alone saves 2+ hours per month.

*Photo-based AI condition grading*
Take a photo during intake; AI suggests condition score (1–5) and category. Reduces intake time and improves consistency across staff members.

*Predictive pricing suggestions*
Based on sell-through data for similar items (by category, condition, and initial price), suggest optimal initial price to maximize sell probability within the consignment window. Higher sell-through = happier consignors = better retention.

**Phase 4 — Vertical Expansion (Year 2+):**

*Furniture & home goods vertical*
Furniture consignment has fundamentally different dynamics: higher per-item value ($150–2,000), longer hold periods, component-level condition grading (frame vs. cushions vs. hardware), and delivery coordination. A dedicated furniture module would open a largely unserved sub-niche.

*Multi-channel resale integration*
Aggregate inventory across Shopify + Poshmark + eBay + Whatnot + Facebook Marketplace. The consignment shop owner as multi-channel resale operator. This is where the platform becomes a true business operating system rather than a POS replacement.

*Consignor loyalty/gamification*
Top consignors (by volume, sell-through rate, or item quality) earn better commission splits or priority pickup slots. Drives supply chain quality and consignor loyalty in a niche where the best consignors are the most valuable asset.

**Long-term vision (3–5 years):**
The platform becomes the operating system for the resale economy's independent operators — consignment shops, estate sale businesses, charity resale shops, and multi-channel individual resellers. The auto-decay engine evolves into a predictive pricing engine. The consignor portal evolves into a mobile app used by millions of people who sell their items on consignment. The market is $61B and growing; the software serving it is decades behind. There is a generational opportunity to build the Shopify of consignment.

---

*Product Brief created: 2026-05-20*
*Source documents: shortlisted idea (consignment-resale-shop-inventory-auto-decay-pricing.md), market research (market-research-consignment-resale-shop.md)*
*Next step: create-prd*
