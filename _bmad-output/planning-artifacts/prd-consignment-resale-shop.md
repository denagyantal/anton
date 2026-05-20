---
stepsCompleted: [1, 2, 2b, 2c, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
inputDocuments:
  - "ideas/shortlisted/consignment-resale-shop-inventory-auto-decay-pricing.md"
  - "_bmad-output/planning-artifacts/market-research-consignment-resale-shop.md"
  - "_bmad-output/planning-artifacts/product-brief-consignment-resale-shop.md"
workflowType: 'prd'
date: '2026-05-20'
author: Root
---

# Product Requirements Document: Consignment & Resale Shop Management Platform

**Author:** Root
**Date:** 2026-05-20
**Status:** Final

---

## Executive Summary

The US consignment and resale market is a $61B industry growing at 8%+ annually. 9,986 brick-and-mortar consignment shops operate on a fundamentally different inventory model than retail: every item is owned under an individual consignor contract specifying a commission split, a per-consignor markdown schedule, and payout terms. No modern, affordable software handles this natively.

Shop owners run parallel systems — a generic POS (Square, Shopify) and a manual spreadsheet — that constantly go out of sync. Month-end payout reconciliation costs 4–8 hours of manual work per month. Consignor inquiries consume 40% of the owner's working day. Markdown errors cause disputes with no audit trail to resolve them.

The product is a cloud-native consignment management platform with three core capabilities: a configurable per-consignor auto-decay pricing engine, a self-service consignor portal, and automated month-end payout reports. It targets the 4,000–5,000 US consignment shops not yet on dedicated software and undercuts every modern competitor at $39–59/month.

### What Makes This Special

The core differentiator is **per-consignor configurable decay contracts** — not store-level markdown rules. Every consignor gets their own schedule mirroring their actual signed contract: "20% off after 30 days, 50% off after 60 days, donate after 90 days." The system applies these automatically with a full immutable audit log on every price change. No competitor has solved this at the individual-consignor level at sub-$65/month pricing.

Secondary differentiators: (1) pricing at 40–60% below SimpleConsign, ConsignCloud, and Circle-Hand; (2) Lifetime Deal option via AppSumo, capturing the one-time-payment demand that BCSS proved exists but no cloud platform has fulfilled; (3) simplicity-first design targeting shops that need intake → markdown tracking → payout calculation → consignor portal without enterprise feature bloat.

### Project Classification

- **Project Type:** SaaS B2B — cloud-native multi-tenant web application
- **Domain:** Specialty Retail Software (consignment/resale vertical)
- **Complexity:** Medium — complex business rules (decay engine, payout calculations, per-consignor contracts) but no regulated compliance (no HIPAA, PCI beyond basic card handling)
- **Project Context:** Greenfield — no existing codebase; new product targeting an underserved niche

---

## Success Criteria

### User Success

**Primary metric:** A shop owner who previously spent 5+ hours/month on manual payout calculations completes month-end payouts in under 15 minutes.

**User success indicators:**

| Outcome | Definition | Target |
|--------|-----------|--------|
| Time-to-first-payout-report | Minutes from account creation to generating a valid payout report | < 20 minutes |
| Month-end time savings | Self-reported hours saved vs. prior process | > 3 hours/month |
| Markdown automation adoption | % of consignors with configured decay rules within 30 days | > 80% |
| Consignor portal activation | % of shops with ≥ 50% of consignors active in portal (Phase 2) | > 60% within 60 days of portal launch |
| Dispute resolution via audit trail | % of payout disputes resolved with audit trail without owner manual intervention | > 70% |

**User satisfaction indicators:**
- NPS > 50 by Month 6
- G2/Capterra rating ≥ 4.5 by Month 6
- Monthly gross churn < 4% (higher than typical B2B SaaS due to shop closures)

### Business Success

**3-Month targets:**
- 100–200 AppSumo LTD customers
- 15–20 monthly SaaS subscribers
- 10+ G2/Capterra reviews at ≥ 4.5 average
- 5 beta shops live for 30+ days with zero critical payout errors

**6-Month targets:**
- 50+ monthly SaaS subscribers
- $2,450–3,000 MRR
- AppSumo LTD revenue > $10,000
- Shopify integration launched (Phase 2)

**12-Month targets:**
- 150+ monthly SaaS subscribers
- $7,350–8,850 MRR
- NARTS vendor directory listing
- Multi-location support launched (Phase 3)

**18-Month target:**
- $10,000 MRR (200 subscribers at $49/month average)

### Technical Success

- Zero data loss incidents (financial records are the core trust asset)
- Zero incorrect payout calculations reaching shop owners (all payout logic validated in beta before launch)
- Decay engine job completes daily without manual intervention for all active shops
- Uptime ≥ 99.5% measured monthly

### Measurable Outcomes

**Acquisition KPIs:**
- AppSumo LTD conversion rate: > 2% of page views
- Trial-to-paid conversion: > 25% of 14-day free trials
- CAC: < $50 average (Facebook groups = zero; AppSumo is revenue-generating)
- Organic monthly signups by Month 6: ≥ 20/month

**Engagement KPIs:**
- Weekly active usage: > 70% of paying accounts use POS or portal in any 7-day period
- Feature adoption — decay rules configured: > 80% of accounts within 30 days
- Feature adoption — consignor portal invites sent: > 75% of accounts within 14 days of portal launch (Phase 2)

**Revenue KPIs:**
- MRR growth: ≥ 15% month-over-month in first 6 months
- ARPA: > $49/month
- Support tickets per account per month: < 0.5

---

## Product Scope

### MVP — Minimum Viable Product (8-week target)

**Core user journeys supported:** Consignor intake → item markdown automation → POS sale → month-end payout calculation

**Must-have capabilities:**

1. **Consignor Management** — Profiles with per-consignor contract configuration (commission %, intake fee, markdown schedule up to 5 tiers, expiry action)
2. **Item Intake** — Item creation with photo, condition grade, initial price; barcode/tag generation and printing
3. **Auto-Decay Pricing Engine** — Daily automated markdowns with immutable audit log; expiry action automation
4. **Basic POS** — Cash and manual card entry; multi-item mixed-consignor cart; receipt generation
5. **Payout Report Generator** — Per-consignor payout reports (any date range), bulk month-end report, PDF/CSV export
6. **Basic Reporting** — Aging report, upcoming markdown milestones, donation queue preview, sales by consignor
7. **Multi-user Access** — Owner role (full access) and Staff role (intake, POS, tag printing only; no financial data)

**MVP go/no-go gates:**
- 5 beta shops run actual operations for 30+ days
- All 5 beta shops generate ≥ 1 successful month-end payout report
- Zero critical bugs causing data loss or incorrect payout calculations
- Beta NPS ≥ 8/10; if < 7, pause public launch and fix first

### Growth Features — Phase 2 (Month 3–6)

**Consignor Self-Service Portal** (highest leverage): Branded login for consignors to view active items, markdown status, sales history, pending payout, and payout history. Automatic email notification when items sell. Projected 60% reduction in owner support volume. Upgrade trigger from Basic to Pro tier.

**Shopify Integration:** Auto-sync non-expired active inventory to a Shopify storefront. Remove items from Shopify when sold in-store. Mark items sold on Shopify as sold in-platform. Critical for tech-savvy new shop owners (Priya persona).

**Square Payment Processing:** Replace manual card entry with real integrated payment via Square. Eliminates need for shops to run a parallel Square account.

### Vision — Phase 3+ (Month 7–18)

- Multi-location support (2+ locations, unified consignor management, per-location reporting)
- Bulk payout processing (one-click PayPal/Venmo/Zelle to all consignors with outstanding balances)
- Photo-based AI condition grading (suggest condition score and category from intake photo)
- Predictive pricing suggestions (optimal initial price based on sell-through data for similar items)
- Multi-channel resale integration (Poshmark, eBay, Facebook Marketplace alongside Shopify)

---

## User Journeys

### Journey 1: Sarah — The Spreadsheet Refugee (Primary Success Path)

Sarah, 47, runs a women's apparel consignment shop with 120 active consignors. She uses Square for POS and maintains a Google Sheets spreadsheet for consignor tracking. She spends every Sunday evening updating her spreadsheet, makes 3–4 markdown errors per month, and spends 5 hours on month-end payout calculations.

**Discovery:** Sarah posts in her consignment Facebook group: "Looking for software that actually handles different markdown schedules per consignor." She receives a recommendation describing the platform as "cheaper than SimpleConsign and has the per-consignor thing she needs."

**Evaluation (Days 1–7):** She visits the site, sees $39–59/month versus competitors' $99+, and starts the free trial. She imports her consignor list from CSV and configures her top 5 consignors with their actual contract terms. She runs a mock month-end payout report and sees it matches her manual spreadsheet calculation. This is her "aha!" moment — the numbers are right and it took 4 minutes.

**Onboarding (Days 7–14):** She migrates all 120 consignors, sets up decay rules for each, and starts using the POS for daily sales. The Sunday spreadsheet update ritual disappears. The first real month-end payout report takes 4 minutes instead of 5 hours.

**Advocacy (Month 2+):** Sarah posts in the Facebook group: "I switched 6 weeks ago — this is the only one I found with real per-consignor markdown rules. The audit trail alone saved me a dispute last week." This post drives 8–12 trial signups.

**Journey requirements revealed:** CSV consignor import, per-consignor decay rule configuration, payout report generation, daily decay automation, audit trail visibility.

---

### Journey 2: Marcus — The Legacy Upgrader (Cloud Migration Path)

Marcus, 52, runs a furniture and home goods consignment shop with 200+ consignors. He uses ConsignPro on a back-office Windows PC. He cannot check inventory from the shop floor, cannot access the system from his phone, and his consignors are calling more frequently as their items age.

**Discovery:** Marcus searches "ConsignPro alternative" and finds a comparison article. He's drawn by the lower price and a data migration option.

**Evaluation (Weeks 1–3):** Marcus tests the platform with skepticism. His key concerns: Can he import 8 years of ConsignPro history via CSV? Will it run on iPad from the shop floor? Is consignor data secure? He submits 4 questions via support chat and receives clear answers. He runs the aging report and sees it automatically flags the 34 items approaching their 90-day expiry — something he was doing manually in ConsignPro.

**Conversion:** Marcus subscribes to Pro ($59/month) after confirming the iPad experience meets his needs. He migrates 200+ consignors over 2 weeks.

**Key outcome:** Marcus processes sales from his iPad on the shop floor. He accesses consignor accounts from his phone while with customers. Month-end payouts go from 6 hours to 20 minutes.

**Journey requirements revealed:** Browser-based (no desktop install), CSV data import/migration, mobile-responsive design, aging report with expiry warnings, phone-accessible consignor lookup.

---

### Journey 3: A Consignor — Maria (Self-Service Portal Path, Phase 2)

Maria, 38, has 12 items at Sarah's shop. She checks in every few days with texts like "Did my blue coat sell?" and "What's my current payout?" These texts interrupt Sarah's day.

**Portal activation:** Sarah invites Maria to the consignor portal. Maria receives an email, creates a password, and sees all 12 of her items — including current prices, which markdown tier each is in, and how many days remain before the next markdown.

**Ongoing experience:** Maria now checks the portal herself. When her blue coat sells, she receives an automatic email notification and sees the payout calculation immediately. At month-end, she downloads her payout statement without contacting Sarah.

**Dispute prevention:** When Maria questions why her coat sold at $45 instead of $60, Sarah shares the audit trail showing the 25% markdown applied at day 32 per Maria's contract. The dispute resolves in under 2 minutes.

**Journey requirements revealed:** Consignor portal login, active item view with markdown status, sale notification emails, payout history, audit trail sharing, branded portal experience.

---

### Journey 4: Shop Staff — Alex (Daily Operations Path)

Alex, 24, works part-time at Sarah's shop. He processes intake and runs the POS but has no business ownership and should not see financial data.

**Intake flow:** A consignor drops off 6 items. Alex logs in to his staff account, creates item records for each (photos from his phone, condition grades, prices per Sarah's guidance), assigns them to the consignor, and prints barcode tags on the Dymo printer at the counter. Total intake time: 8 minutes for 6 items.

**POS flow:** A customer wants to buy 3 items from 2 different consignors. Alex scans the barcodes, confirms the prices (with current markdown tier visible on screen), accepts cash payment, and emails the receipt. The sale posts to all 3 consignors' accounts automatically.

**Access boundary:** Alex cannot see commission rates, payout amounts, or consignor financial summaries. He can see item prices and inventory status.

**Journey requirements revealed:** Staff role restrictions, photo capture on mobile browser, barcode scan for POS, multi-consignor cart, receipt email, tag printing from browser.

---

### Journey 5: Shop Owner — Month-End Close (Administrative Path)

On the last day of the month, Sarah opens the "Month-End Payouts" screen. The system shows 94 consignors with outstanding balances totaling $12,847.

Sarah reviews the bulk report, notes 3 consignors with questions she expects, and exports the full CSV. She prints checks or initiates transfers manually, marks each consignor as "paid" in the system with the payment date, and the outstanding balances reset. Time elapsed: 14 minutes.

Two weeks later, a consignor disputes that her cashmere sweater "sold for less than I dropped it off at." Sarah pulls up the item's price history: intake price $85, markdown to $68 at day 31, sold at $68. She emails the audit log screenshot. Dispute resolved.

**Journey requirements revealed:** Bulk month-end report, consignor-level payout balances, CSV export, mark-as-paid functionality, item price history with timestamps.

---

### Journey Requirements Summary

| Capability | Revealed by |
|-----------|-------------|
| CSV consignor import | Sarah — spreadsheet migration |
| Per-consignor decay rule configuration | Sarah — core differentiator |
| Automated daily markdown application | Sarah + Marcus |
| Immutable price change audit log | Sarah (disputes) + Month-end close |
| Month-end payout report (bulk + individual) | Sarah + Month-end close |
| Mobile-responsive browser interface | Marcus — shop floor iPad |
| Item intake with photo, condition, barcode print | Alex — daily operations |
| Multi-consignor POS cart | Alex — mixed-item transactions |
| Role-based access control | Alex — staff restrictions |
| Consignor portal with item/payout visibility | Maria — self-service |
| Automatic sale notification email | Maria — consignor experience |
| Mark-payout-as-settled workflow | Month-end close |

---

## Domain-Specific Requirements

This is a **medium-complexity domain** due to the financial calculation logic, multi-party transaction model, and audit requirements. No regulated compliance (HIPAA/PCI-DSS full certification) is required for MVP, but financial data handling demands specific attention.

### Financial Calculation Integrity

- Payout calculations must be deterministic: given the same inputs (sale price, markdown tier at time of sale, commission %, intake fee), the calculation must always produce the same output
- Markdown tier at time of sale is immutable once recorded — retroactive pricing rule changes must not affect historical sales
- All payout calculations traceable to their source data (sale record → commission rate → markdown tier applied)

### Audit Trail Requirements

- Every price change recorded with: timestamp (UTC), triggering rule ID, before/after price, and whether system-triggered or manually overridden
- Audit records are append-only; no deletion or modification permitted
- Audit trail must be exportable per item as evidence for dispute resolution

### Multi-Party Transaction Model

- Each item belongs to exactly one consignor under exactly one active contract
- A single POS transaction may include items from multiple consignors; revenue attribution must be split correctly per item
- Consignor contract terms (commission %, intake fee, markdown schedule) in effect at item intake time govern the item's entire lifecycle — contract changes do not retroactively affect existing items

### Data Retention

- Sales records and payout records retained indefinitely (business financial records)
- Price change audit logs retained indefinitely
- Consignor records retained for 3 years after last activity (configurable)

### Label Printing

- Barcode tags must print to Zebra ZPL and Dymo LabelWriter formats
- Tag format must include: item barcode, item title (truncated), current price, consignor initials (not full name — staff privacy), and intake date

---

## Innovation & Novel Patterns

### Detected Innovation: Per-Consignor Decay Contract Engine

The consignment industry has operated under a store-level markdown model in all existing software. The insight here is that consignment contracts are fundamentally per-person agreements — a shop with 150 consignors may have 150 different markdown schedules reflecting different consignor negotiations, item categories, and relationship terms.

The innovation is **treating the decay schedule as a first-class contract object**, scoped to the consignor, not the store. Each consignor contract defines: commission split %, intake fee, markdown tiers (up to 5 pairs of days_threshold → price_reduction_%), and expiry action. Items inherit their consignor's contract at intake time. The engine evaluates this contract daily.

This is an execution innovation, not a technology breakthrough — the concept is achievable with a standard background job and relational database. The competitive value is that no affordable modern SaaS competitor has done this, leaving a clear gap.

### Market Context

Circle-Hand is the closest modern competitor and achieves 5/5 Capterra ratings. However, their marketing describes "aging suggestions" without specifying per-consignor configurability. SimpleConsign, the market leader, uses store-level markdown rules explicitly. No competitor marketing confirms individual consignor contract-level decay scheduling.

### Validation Approach

Validate in beta by recruiting 5 shops with documented consignor contracts that have different terms per consignor. If all 5 shops can configure their actual contracts into the system within 15 minutes, and if payout reports match their existing manual calculations for a prior month, the core innovation is validated.

### Risk Mitigation

- **Configuration complexity**: If per-consignor configuration proves too complex for non-technical shop owners, provide a "copy contract from template" feature that allows one configured consignor to be used as a template for others with similar terms
- **Edge cases**: Consignors who have items in multiple condition-dependent contracts; address by allowing item-level contract override at intake time

---

## SaaS B2B Specific Requirements

### Multi-Tenancy

- Each shop account is a fully isolated tenant: consignors, items, sales, pricing rules, and reports are scoped to the tenant
- No data leaks across tenants; tenant ID is enforced at the database query level
- Shop owner can only access their own shop data; no cross-shop visibility

### Permission Model

**Owner role (full access):**
- Configure consignor contracts and pricing rules
- View and export all financial data (payout reports, commission rates)
- Manage staff accounts
- Access all reports

**Staff role (restricted):**
- Create item intake records
- Process POS transactions
- Print barcode tags
- Cannot view: commission rates, consignor payout amounts, financial summaries
- Cannot modify: pricing rules, consignor contracts, system settings

### Subscription Tiers

| Tier | Price | Limits | Key Features |
|------|-------|--------|-------------|
| Basic | $39/month | 1 location, up to 100 consignors | POS + decay engine + payout reports |
| Pro | $59/month | 1 location, unlimited consignors | + Consignor portal + Shopify integration |
| Multi-Location | $89/month | 2+ locations | + All Pro features |
| LTD (AppSumo) | $69–89 one-time | 1 location, up to 150 consignors | Pro features, permanent license |

### Onboarding

- 14-day free trial (no credit card required)
- CSV import for consignors (columns: name, email, phone, commission%, intake_fee, default_markdown_schedule)
- Default markdown schedule templates (30/60/90-day standard; 45/90-day extended; custom) to accelerate setup
- In-app guided setup: 4-step checklist (add first consignor → configure decay rules → add first item → run trial payout report)

### Integration Surface (MVP)

- Label printer: Zebra ZPL and Dymo LabelWriter via browser-based print driver
- Export: CSV and PDF for all reports
- Email: Transactional email for receipts, daily decay digest, consignor notifications

---

## Project Scoping & Phased Development

### MVP Strategy & Philosophy

**Approach:** Problem-solving MVP — the minimum capability set that eliminates the core pain (parallel spreadsheets + manual month-end calculations). We are NOT trying to replace every feature of SimpleConsign in 8 weeks. We are trying to make it possible for a shop owner to run their entire consignment operation — intake, markdown, sales, payouts — in a single system.

**Resource requirements:** Solo developer with full-stack capability (backend-heavy for business logic). 8-week timeline assumes 40+ hrs/week focused effort.

### MVP Feature Set (Phase 1)

**Core user journeys supported:**
- Shop owner onboarding: import consignors, configure contracts, add first items
- Daily operations: item intake → tag printing → POS sales
- Automated background: daily decay job → markdown application → audit logging
- Month-end: generate payout reports → export → mark as settled

**Must-have capabilities:**
- Consignor management with per-consignor contract configuration
- Item intake with photo, condition, and barcode printing
- Auto-decay pricing engine with daily batch processing and immutable audit log
- Basic POS (cash + manual card, multi-item cart, receipt email)
- Payout report generator (individual + bulk month-end, PDF + CSV export)
- Aging report and donation queue
- Owner + Staff roles

### Post-MVP Features

**Phase 2 (Months 3–6):**
- Consignor self-service portal with sale notifications
- Shopify inventory sync
- Square payment processing integration

**Phase 3 (Months 7–18):**
- Multi-location support
- Bulk payout processing (PayPal/Venmo/Zelle)
- AI-assisted condition grading from photo
- QuickBooks export

**Phase 4 (Year 2+):**
- Multi-channel resale (Poshmark, eBay, Facebook Marketplace)
- Predictive pricing engine
- Consignor loyalty/gamification

### Risk Mitigation Strategy

**Technical risks:**
- *Decay engine correctness*: Build comprehensive unit tests for all payout calculation scenarios before beta. Incorrect payouts are trust-destroying.
- *Label printer compatibility*: Test with real Zebra and Dymo hardware in Week 2. Printer integration bugs are the most common onboarding blocker in POS software.

**Market risks:**
- *Per-consignor configuration UX*: If shop owners find decay rule setup too complex, adoption of the core differentiator will fail. Run 3 usability tests in Week 4 beta with real shop owners.

**Resource risks:**
- *Shopify integration scope creep*: Explicitly defer to Phase 2. If 80% of beta users are on spreadsheets (not Shopify), delaying is correct. Revisit after validating basic product-market fit.

---

## Functional Requirements

### Consignor Management

- FR1: Shop owner can create a consignor profile with name, email, phone, and payout contact details
- FR2: Shop owner can configure per-consignor commission split percentage (0–100%)
- FR3: Shop owner can configure per-consignor intake fee (flat dollar amount or percentage)
- FR4: Shop owner can configure per-consignor markdown schedule with up to 5 tiers, each specifying days-since-intake threshold and percentage price reduction
- FR5: Shop owner can configure per-consignor item expiry action (return to consignor / donate / flag for review)
- FR6: Shop owner can import consignors in bulk via CSV with name, contact, and contract fields
- FR7: Shop owner can view all consignors in a list showing active item count and pending payout balance
- FR8: Shop owner can apply a contract template to multiple consignors to accelerate setup
- FR9: Shop owner can deactivate a consignor account, preserving all historical data

### Item Intake & Inventory

- FR10: Staff can create an item record with title, category, condition grade (1–5), initial price, and up to 4 photos
- FR11: Staff can assign an item to a consignor at intake, automatically applying the consignor's active contract rules
- FR12: Staff can generate a barcode tag for a new item and print it to a connected Zebra or Dymo label printer
- FR13: Shop owner can view full inventory with filtering by consignor, category, age range, and item status (active / sold / returned / donated / expired)
- FR14: Staff can search inventory by item title, barcode number, or consignor name
- FR15: Shop owner can manually update an item's status (active, returned, donated) with a reason note
- FR16: Shop owner can view an item's full price history including all markdowns, with timestamp and trigger for each

### Auto-Decay Pricing Engine

- FR17: System runs a daily batch job that evaluates all active items against their consignor's markdown schedule and applies price reductions when thresholds are reached
- FR18: System records every price change in an immutable audit log with: timestamp (UTC), item ID, consignor ID, rule trigger description, price before, and price after
- FR19: System marks items as "pending expiry action" when the final markdown milestone days are reached and triggers the configured expiry action (return / donate / flag)
- FR20: System sends shop owner a daily digest email listing items that were marked down, items approaching expiry within 14 days, and items that triggered expiry actions
- FR21: Shop owner can manually override an item price, with the override recorded in the audit log as a manual change
- FR22: System prevents retroactive application of contract changes to items already in the inventory (contract terms at intake time are binding per item)

### Point of Sale

- FR23: Staff can open a new sale transaction and add items by barcode scan or manual search
- FR24: Staff can include items from multiple consignors in a single sale transaction
- FR25: Staff can process a cash payment, record the amount tendered, and display change due
- FR26: Staff can record a manual card payment without integrated processing
- FR27: Staff can apply a percentage or flat-dollar discount to an individual line item or the entire transaction
- FR28: System generates a receipt for each completed transaction, deliverable by email to customer or printable
- FR29: Shop owner can void a completed transaction within the same business day, reversing all inventory and payout impact
- FR30: Shop owner can view a daily sales summary showing transaction count, total revenue, and revenue by consignor

### Payout Management

- FR31: System calculates consignor payout using: (sale price at time of sale × consignor commission %) − intake fee, where sale price is the actual transaction price including any markdown tier in effect
- FR32: Shop owner can generate an itemized payout report for any consignor for any date range, showing per-item breakdown (item title, sale date, sale price, markdown tier at sale, commission amount, intake fee, net payout)
- FR33: Shop owner can generate a bulk month-end payout report for all consignors with outstanding balances, showing totals per consignor
- FR34: Payout reports are exportable as PDF and CSV
- FR35: Shop owner can mark a consignor payout as "settled" with payment method, date, and optional note, reducing that consignor's outstanding balance to zero
- FR36: System maintains a running outstanding balance per consignor representing all unsettled sales

### Reporting & Analytics

- FR37: Shop owner can view an aging report listing all active items sorted by days in inventory, with current price and next markdown milestone date
- FR38: Shop owner can view a list of items whose next markdown milestone falls within the next 14 days
- FR39: Shop owner can view a donation/return queue listing all items that have reached their expiry threshold and are awaiting action
- FR40: Shop owner can view sales by consignor for any date range, showing item count, gross revenue, and commission totals

### User & Access Management

- FR41: Shop owner can create staff accounts with email and password, assigning the Staff role
- FR42: Staff role users can access item intake, POS, barcode printing, and inventory search only
- FR43: Staff role users cannot view consignor commission rates, payout amounts, payout reports, or financial summaries
- FR44: Staff role users cannot modify consignor contracts, pricing rules, or system settings
- FR45: Shop owner can deactivate a staff account, immediately terminating their access

### Consignor Self-Service Portal (Phase 2)

- FR46: Consignor can log in to a branded portal using email and password to view their account
- FR47: Consignor can view all their active items with current prices and current markdown tier displayed
- FR48: Consignor can view their complete sales history with sale dates, prices, and commission amounts
- FR49: Consignor can view their pending payout balance and settled payout history
- FR50: System sends consignor an automatic email notification within 30 minutes of an item selling, including item name, sale price, and payout amount for that item

---

## Non-Functional Requirements

### Performance

- POS transaction completion (from scan last item to receipt generation) completes in under 2 seconds for 95th percentile under normal load (< 5 concurrent users per shop)
- Page load for any screen in the application completes in under 3 seconds for 95th percentile on a standard broadband connection
- Daily decay pricing batch job processes all active items for a shop with up to 10,000 items within 15 minutes of its scheduled run time
- Payout report generation for a single consignor with up to 500 sales completes in under 5 seconds

### Security

- All data transmitted over TLS 1.2 or higher; no plain HTTP endpoints
- All sensitive data at rest encrypted using AES-256 or equivalent
- User authentication requires email and password; optional TOTP two-factor authentication available for shop owner accounts
- Consignor financial data (commission rates, payout amounts, financial reports) accessible only to Owner role; enforced at API level, not just UI level
- Price change audit logs are append-only; no API endpoint permits deletion or modification of audit records
- User sessions expire after 60 minutes of inactivity
- Failed login attempts trigger account lockout after 10 consecutive failures within 15 minutes

### Reliability

- Platform maintains ≥ 99.5% uptime measured monthly, excluding scheduled maintenance windows communicated 24 hours in advance
- Daily decay pricing job executes within a 2-hour window of its configured time without requiring manual intervention or restarts
- All sales transactions and payout calculations maintain ACID properties (Atomicity, Consistency, Isolation, Durability) — no partial writes
- Application recovers from infrastructure failures without data loss for completed transactions

### Scalability

- Single shop tenant: supports up to 500 active consignors and 10,000 active items without performance degradation
- Multi-tenant isolation: each shop's data queries are scoped to that tenant's ID; no cross-tenant data leakage possible
- Database schema and query patterns accommodate growth to 5,000 shop tenants without architectural changes

### Integration

- Label printing: supports Zebra ZPL format and Dymo LabelWriter format; print initiated from any modern browser without a native desktop app
- Data export: all reports exportable in CSV and PDF; CSV files conform to RFC 4180; PDF files are text-searchable (not image-rendered)
- Email delivery: transactional emails (receipts, decay digests, consignor notifications) delivered via a reliable transactional email provider with delivery tracking; target < 30 seconds from trigger to inbox delivery
- Phase 2 Shopify: integration uses Shopify REST Admin API for product and inventory management; webhook-based for real-time sync of online sales back to platform

### Accessibility

- Platform meets WCAG 2.1 Level AA for all owner-facing and staff-facing screens
- Consignor portal (Phase 2) meets WCAG 2.1 Level AA to support the full age range of consignors (including older, less tech-comfortable users)
- All form inputs include visible labels; all images used in UI include descriptive alt text
