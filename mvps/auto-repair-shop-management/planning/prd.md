---
stepsCompleted: [step-01-init, step-02-discovery, step-02b-vision, step-02c-executive-summary, step-03-success, step-04-journeys, step-05-domain, step-06-innovation, step-07-project-type, step-08-scoping, step-09-functional, step-10-nonfunctional, step-11-polish, step-12-complete]
inputDocuments:
  - ideas/shortlisted/auto-repair-shop-management.md
  - _bmad-output/planning-artifacts/research/market-auto-repair-shop-management-research-2026-04-03.md
  - _bmad-output/planning-artifacts/product-brief-auto-repair-shop-management.md
workflowType: 'prd'
classification:
  projectType: saas_web_app
  domain: vertical_software
  complexity: medium
  projectContext: greenfield
date: '2026-04-04'
author: Root
project_name: 'ShopFlow — Auto Repair Shop Management'
---

# Product Requirements Document - ShopFlow: Auto Repair Shop Management

**Author:** Root
**Date:** 2026-04-04

## Executive Summary

The US auto repair industry has 174,000+ establishments — 71% independently owned — yet fewer than 3% use a modern cloud-based shop management platform. Every serious full-featured competitor (Tekmetric, Shopmonkey, AutoLeap, Shop-Ware) starts at $179–$279/month. The only affordable options are ultra-basic tools like ARI ($33–$60/month) that cannot handle Digital Vehicle Inspection, customer texting, or reliable QuickBooks sync. This leaves a confirmed dead zone between $50–$179/month with no full-featured, cloud-native solution.

**ShopFlow** is a full-featured auto repair shop management platform priced at $79/month — filling this dead zone by giving 1–5 bay independent shops everything they actually need: work orders, DVI, two-way customer texting, native QuickBooks Online sync, and parts catalog lookup. No annual contracts. Free data export. Mobile-first. One-day onboarding.

**Go-to-market:** AppSumo lifetime deal at $79–$99 (no auto repair software exists on AppSumo) to generate 500–1,000 LTD buyers, followed by conversion to $79/month SaaS. The Shopmonkey v2.0 forced upgrade in 2025 — which triggered 67% 1-star Trustpilot reviews and 1,500–3,000 active switchers — creates a 6–12 month acquisition window that must be exploited immediately.

**Target users:** Owner-mechanics and service advisors running 1–5 bay independent shops earning $180K–$800K/year who are priced out of enterprise tools, stuck on outdated software, or fleeing Shopmonkey's regression.

### What Makes This Special

**Full features at base price.** DVI and customer texting are gated behind $309+/month tiers at Tekmetric. ShopFlow includes both at $79/month. No upgrade required.

**Native QuickBooks Online sync.** Every competitor either lacks native QB integration (Tekmetric requires a third-party connector) or has broken it (Shopmonkey post-v2.0). ShopFlow connects via direct OAuth — no middleware.

**No annual contract, free data export.** The two things shop owners fear most about switching: ShopFlow explicitly removes both barriers.

**Shopmonkey migration tool.** One-click data import from Shopmonkey (customers, vehicles, repair history, open ROs) captures the live switcher wave while the window is open.

**AP reconciliation alerts.** A unique differentiator: ShopFlow monitors parts invoices for missed vendor credits, duplicate charges, and unreturned cores — a quantified $5K–$20K/year hidden loss that no competitor surfaces.

## Project Classification

- **Project Type:** SaaS Web App (browser-first, responsive for mobile tablet use in the bay)
- **Domain:** Vertical software (auto repair shop management)
- **Complexity:** Medium — standard CRUD for work orders/invoicing, SMS integration, OAuth-based QB sync, photo-based DVI workflow, external parts catalog APIs. No regulated data, but customer PII and financial data require security attention.
- **Project Context:** Greenfield — new product built from scratch

## Success Criteria

### User Success

- **Time to First Repair Order:** 80%+ of new users create their first completed work order within 24 hours of signup
- **DVI Adoption:** 60%+ of active accounts include at least one DVI per week within 30 days of activation
- **Digital Approval Rate:** 40%+ of estimates approved via DVI text link rather than phone call within 60 days
- **QB Sync Reliability:** 99%+ of completed invoices sync to QuickBooks without error over any 30-day period
- **SMS Workflow Adoption:** 70%+ of active shops send at least 10 customer text messages per month within 60 days
- **Admin Time Saved:** Users self-report saving > 3 hours/week on phone calls, paperwork, and QB entry within first 60 days
- **Migration Success:** 85%+ of Shopmonkey migrators report full data import in under 2 hours

### Business Success

| Milestone | Target | Timing |
|---|---|---|
| AppSumo LTD launch | 500–1,000 LTD purchases | Month 3–4 |
| Monthly subscribers | 200 paying | Month 6 |
| MRR | $15,800/month | Month 6 |
| Monthly subscribers | 500 paying | Month 12 |
| MRR | $39,500+/month | Month 12 |
| NPS | ≥ 40 | Month 6 |
| Monthly churn | < 3% | Month 6+ |

**Strategic objectives:**
- Establish presence in AutoShopOwner forum (6,182 members) and ASOG Facebook group (10,000+ members) as the default affordable recommendation
- Achieve AppSumo "Featured Deal" status for maximum reach
- Own "Shopmonkey alternative" Google search intent before the switching window closes

### Technical Success

- **Page load:** Core app screens (work order list, create RO, DVI editor) load in < 2 seconds on standard broadband
- **Mobile performance:** Full DVI photo capture and upload workflow completes in < 5 seconds per photo on 4G
- **SMS delivery:** 98%+ of customer text messages delivered within 60 seconds of send
- **QB sync latency:** Invoices appear in QuickBooks within 5 minutes of completion
- **Uptime:** 99.9% availability for all core services
- **Data integrity:** Zero data loss on any user-facing operation

### Measurable Outcomes

| Metric | Month 3 | Month 6 | Month 12 |
|---|---|---|---|
| Total active accounts | 600 (LTD) | 800 | 600 MRR + 800 LTD |
| Work orders created/month | 9,000 | 20,000 | 60,000 |
| DVI completion rate | 55% | 65% | 70% |
| MRR | $0 (LTD phase) | $15,800 | $39,500+ |
| NPS | 40+ | 45+ | 50+ |
| Monthly churn | — | < 3% | < 3% |
| QB-connected accounts syncing cleanly | 90% | 95% | 99% |

## Product Scope

### MVP — Minimum Viable Product

The MVP delivers the complete shop workflow: **Write RO → DVI → Text Customer → Approve → Invoice → Sync QB**. Every feature must serve at least one of these six steps. Nothing is included that doesn't map to a confirmed pain point from validated customer research.

**Core capabilities:**

1. **Work Orders / Repair Orders** — Create, edit, and manage ROs with customer and vehicle linked; labor and parts line items; status lifecycle (Estimate → Approved → In Progress → Complete → Invoiced); PDF invoice generation and email/SMS delivery

2. **Digital Vehicle Inspection (DVI)** — Photo-based inspection attached to any RO; tech captures photos from mobile; color-coded items (Green/Yellow/Red); shareable customer link opening in browser (no app needed); customer approves/declines items via link; approval reflected in real-time on RO

3. **Two-Way Customer Texting** — Send and receive SMS directly from RO; conversation history per customer; customizable message templates; 250 SMS/month included at base tier; additional credits purchasable

4. **Native QuickBooks Online Sync** — Direct OAuth connection (no third-party connector); auto-sync completed invoices to QB; customer and income account mapping; nightly automatic sync plus manual trigger; sync error log visible to shop owner

5. **Parts Catalog Lookup** — Search by part name or number from within RO (NAPA and AutoZone APIs); add parts to RO with price auto-populated; markup rules (e.g., "always mark up 35%")

6. **Customer & Vehicle Management** — Customer records with full contact info; vehicle records with year/make/model, mileage, notes, and service history; CSV import from ARI and Shopmonkey exports; Shopmonkey one-click migration tool

7. **AP Reconciliation Alerts** — Monitor parts invoices for missed vendor credits, duplicate charges, and unreturned cores; surface alerts with estimated dollar value; export reconciliation report

8. **Reporting (Basic)** — Revenue summary (daily/weekly/monthly); open ROs and aging report; top services by revenue; invoice history and search

9. **User Roles** — Owner/Admin (full access); Technician (RO view, DVI photo upload, status updates only)

### Growth Features (v1.1, Months 6–12)

- VIN decode API (auto-populate year/make/model/engine from VIN)
- Labor guide integration (MOTOR flat-rate time lookup from within RO)
- Technician time tracking and job clock (real vs. book hours)
- Appointment scheduling and service reminder calendar
- Integrated payment processing (Stripe-powered card collection)
- Parts ordering (not just lookup — direct order from NAPA/AutoZone)
- Inspection template customization per shop
- Multi-bay technician dispatch board

### Future Vision (v2.0, Year 2+)

- Multi-location support for shops opening second locations
- Advanced profitability analytics (profit per job, per tech, per service type)
- AI-powered features: voice-to-work-order dictation, automated follow-up texts, smart estimate recommendations
- Fleet management module (commercial accounts with 10+ vehicles)
- EV service module: battery diagnostic tracking, EV certification management, EV-specific DVI items
- Open API for third-party integrations (ProDemand, ALLDATA, Mitchell repair info)
- Franchise management (5–15 location regional groups)

## User Journeys

### Journey 1: Marcus — First Week, Owner-Mechanic Going Digital

**Opening Scene:** Marcus is a 38-year-old ASE-certified mechanic running a 2-bay shop solo. He's been in business 3 years. Revenue ~$280K/year. He writes paper invoices and manually enters everything into QuickBooks every Sunday — a 3-hour ritual his wife calls "the Sunday grind." He loses about 2 hours/day to phone calls: calling customers about estimates, getting approvals, confirming pickup. A friend from his local mechanic group texts him: "Just started using ShopFlow. DVI changed my game. $79/mo." Marcus Googles it at 11 PM.

**Rising Action:** He sees the pricing page — $79/month, no annual contract, free data export. Signs up for a 14-day trial on his phone. The onboarding asks for business name, service rate (he enters $120/hr), and a CSV upload. He uploads his customer list exported from QuickBooks in 20 minutes.

**Climax:** Day 3. A customer's Camry comes in for a brake job. Marcus writes the RO, goes under the car, and spots worn ball joints. Instead of calling the customer, he opens ShopFlow on his tablet, creates a DVI, takes 4 photos of the ball joints with a ruler showing the wear, flags them Red, and sends the DVI link by text: "Hi Janet — brake job is done, but I found something else. Here's what I found: [link]." Janet opens it from her desk at work, looks at the photos, reads his note, and taps "Approve." Marcus gets a text: "Customer approved ball joint replacement." He fixes it. Total phone calls today: zero.

That night, Marcus opens QuickBooks and finds it's already updated. His accountant texted: "Did you get new software? Your books are clean." The Sunday grind doesn't happen.

**Resolution:** Month 2. Marcus's average repair order is up $180 because DVI approvals are converting work he previously couldn't get approved over the phone. He posts in the ASOG Facebook group when someone asks about software: "ShopFlow. DVI is legitimately changing how much I close." Three shop owners from the group sign up that week.

**Capabilities revealed:** CSV customer import, RO creation with labor/parts, DVI photo capture on mobile, color-coded inspection items, SMS DVI delivery, customer one-tap approval, QB auto-sync, 24-hour time-to-first-RO onboarding

---

### Journey 2: Sandra — Growing Shop Owner, Upgrading from ARI

**Opening Scene:** Sandra (45) runs a 3-bay shop with 2 technicians and a part-time admin. Revenue ~$620K/year. She's been on ARI for 4 years at $50/month — it handles invoicing but no DVI, and the QB sync "works sometimes." Customer texts come to her personal iPhone and she loses track of threads. She's been trying to justify $179/month for Tekmetric for 18 months but can't get past the price. A peer at her local NAPA customer appreciation event mentions ShopFlow.

**Rising Action:** Sandra signs up, imports her ARI customer data via CSV. She sets up her two techs with Technician accounts — they can only see their assigned ROs and upload DVI photos. She sets a price markup rule: 38% on all parts. She customizes 5 SMS templates: "Estimate ready," "DVI complete — here's what we found," "Car is ready for pickup," "Appointment reminder," and "Invoice."

**Climax:** Week 2. A customer's truck comes in for an AC recharge. While recharging, her tech finds a cracked belt and low coolant. He opens ShopFlow on the shop tablet, creates a DVI, photos the cracked belt, flags it Red, and submits it. Sandra sees the notification, reviews the tech's DVI, adds pricing to the line items, and texts the customer the DVI link. The customer approves the belt — but declines the coolant flush — in 8 minutes. Sandra texts back: "No problem, belt is being replaced now." Zero phone tag.

At month-end, Sandra's accountant calls: "Your QB data has been perfect this month. What happened?" Sandra realizes she hasn't manually touched QuickBooks in 30 days.

**Resolution:** Sandra cancels ARI. She saves $50/month and gains DVI, texting, and reliable QB sync. In the ASOG forum, when someone posts "ARI vs Shopmonkey", she replies: "There's a third option." Her post gets 43 likes and 11 DMs.

**Capabilities revealed:** CSV import from ARI, Technician role accounts, parts markup rules, SMS template customization, multi-user DVI workflow (tech captures, owner reviews), customer selective approval per DVI item, QB sync, reporting dashboard

---

### Journey 3: Derek — Shopmonkey Refugee, Active Switcher

**Opening Scene:** Derek (42) ran one of the first shops to adopt Shopmonkey cloud in 2019. He had the premium plan: DVI, texting, QB sync, estimate templates, detailed reporting. Then the forced v2.0 upgrade in mid-2025 happened. Three features he relied on were removed without warning. Creating an estimate now requires 40% more clicks. QB sync broke and support told him "it's being worked on" for 4 months. He's been posting in AutoShopOwner forums since November 2025: "Does anyone know a Shopmonkey alternative that isn't $179+?" He's still on Shopmonkey, still paying $179/month, still angry.

**Rising Action:** Derek sees a Google ad: "Shopmonkey raised prices and broke features. We didn't. $79/month. Free Shopmonkey migration." He clicks. Reads the migration page in detail — it specifically describes importing Shopmonkey customers, vehicle history, and open ROs. He signs up for the trial and runs the Shopmonkey export migration tool. 847 customers, 1,200 vehicles, 23 open ROs — all imported in 38 minutes.

**Climax:** Day 5. Derek opens an RO, runs a DVI, texts a customer. Everything he had in Shopmonkey v1 is here, at base tier, for $79/month. The estimate template system is cleaner than what Shopmonkey had. He fires off a test invoice — QB sync fires within 3 minutes. He calls support with one question about labor rate configuration. A human responds in 2 hours with a screen recording.

He cancels Shopmonkey before his next billing cycle. Annual savings: $1,200.

**Resolution:** Derek posts a detailed comparison on AutoShopOwner forum: "I ran both side by side for a week. ShopFlow has everything I need and costs half as much." Post gets 87 views and 12 sign-ups are tracked back to the forum thread through the referral code he shared.

**Capabilities revealed:** Shopmonkey one-click migration (customers, vehicles, open ROs), feature parity with Shopmonkey v1, estimate templates, DVI with QB sync, human support with < 4-hour response, cancellation without data hostage

---

### Journey 4: Bay Tech — DVI Workflow Without Disruption

**Opening Scene:** James is a 29-year-old technician at Sandra's shop. He's skeptical of new software — the last time Sandra "upgraded" something, he had to sit through a 3-hour training. His phone is a basic Android. He's been doing mental math on what's flagged for which car, sometimes forgetting to tell Sandra about findings.

**Rising Action:** Sandra sets James up with a Technician account. His login only shows him his assigned ROs. The DVI is a single screen: tap an inspection item, take a photo, tap Red/Yellow/Green. He can do a 20-point inspection in 8 minutes without returning to the service counter.

**Climax:** James finds a cracked CV boot on a Civic. He photographs it, marks Red, writes "CV boot cracked — left front, leaking grease." Submits. Sandra gets a notification in 30 seconds. She adds pricing and texts the customer. The customer approves before James is done with the oil change. Sandra hands him a slip: "Do the CV boot too." The whole loop took 12 minutes.

**Resolution:** James stopped forgetting to mention findings — the DVI forces him to document before moving on. His average additional work approved per week increases Sandra's ARO by $140. He tells the other tech: "It's actually less work than forgetting to tell Sandra."

**Capabilities revealed:** Technician-scoped access (only assigned ROs), mobile-optimized DVI screen, camera integration for inspection photos, Red/Yellow/Green status tapping, real-time notification to shop owner on DVI submission

---

### Journey 5: Shop Accountant — Clean Books, No More Reconciliation

**Opening Scene:** Patricia is a bookkeeper managing 8 independent shop clients. Three of them are on ShopFlow. Before that, she spent 2–3 hours per shop per month manually reconciling invoices because QB syncs from Shopmonkey and Mitchell 1 kept creating duplicates or missing payments. One Mitchell 1 client still emails her PDF invoices every Friday for manual entry.

**Rising Action:** After her three ShopFlow clients go live, she notices something in February: not a single reconciliation call. She checks the QB data — customers are mapping correctly, invoices are clean, payments match. She opens the ShopFlow sync status dashboard (accessible to accountants via read-only link) and sees: 743 syncs in the last 30 days, 0 errors.

**Climax:** Month-end close for Marcus. Patricia opens QuickBooks: all 127 repair order invoices are there, correctly categorized, with matching payments. She cross-references 5 random invoices to ShopFlow — perfect match. Month-end close takes 20 minutes instead of 2.5 hours. She sends Marcus a note: "Your books are the cleanest of any client I have."

Additionally, ShopFlow surfaced 2 AP reconciliation alerts: a NAPA vendor credit from December that was never applied ($87) and a duplicate parts charge for a gasket kit ($34). Patricia flags them for Marcus in one email. He calls NAPA and recovers $121.

**Resolution:** Patricia recommends ShopFlow to her two other shop clients still using Mitchell 1 on-premise. She becomes an unpaid distribution channel. Two additional shops sign up based on her direct referral.

**Capabilities revealed:** QB sync accuracy (zero duplicates, correct categorization), read-only accountant access via sync status dashboard, AP reconciliation alerts with dollar amounts, invoice cross-reference visibility

### Journey Requirements Summary

| Journey | Capabilities Revealed |
|---|---|
| Marcus (owner-mechanic) | CSV import, RO creation, DVI mobile capture, SMS DVI delivery, customer approval link, QB auto-sync, 24-hour onboarding |
| Sandra (growing shop) | Multi-user Technician roles, ARI import, parts markup rules, SMS templates, QB reliability, basic reporting |
| Derek (Shopmonkey refugee) | One-click Shopmonkey migration, estimate templates, feature parity, human support < 4 hours, no data hostage |
| James (bay tech) | Technician-scoped access, mobile-optimized DVI, camera integration, real-time owner notification |
| Patricia (accountant) | QB sync accuracy dashboard, zero-error reconciliation, AP reconciliation alerts, read-only accountant access |

## Domain-Specific Requirements

### Auto Repair Industry Context

Auto repair shop management sits at the intersection of service scheduling, automotive data (VIN, year/make/model/engine), parts procurement, labor pricing standards, and customer communication. Several domain-specific requirements shape the product that general SaaS tools don't encounter.

### Vehicle Data Management

- Vehicle records must store: year, make, model, trim level, engine, transmission, mileage (with date captured), VIN (manual entry in MVP, decoded in v1.1), and license plate
- Mileage history must be tracked per vehicle across multiple service visits (regulatory requirement in many states for odometer disclosure)
- ROs must record mileage in and mileage out
- Service history per vehicle must be searchable by shop (not just by customer) to support fleet/commercial accounts and shop-owned loaner vehicles

### Labor and Parts Pricing

- Labor rates must support per-technician rates and per-service rates (not just a single shop rate)
- Parts must support cost, retail price, and markup percentage — with markup rules applied automatically at add-to-RO time
- Parts line items must track: part number, description, quantity, cost, retail price, and optional vendor reference
- Hazmat/disposal fees and shop supplies must be configurable as automatic line items added to every invoice (common shop practice: shop supplies = 5–8% of labor, capped at $40)
- Tax must be configurable: some states tax labor, some only parts — the system must handle both

### Customer Authorization

- Digital customer approval (via DVI link or texted estimate) must be stored as an auditable record with timestamp and IP address — this is increasingly required for warranty claims and consumer protection compliance
- Estimates must display a validity period (default 30 days) consistent with state consumer protection laws requiring estimates to be honored for a specified period
- RO status must reflect whether work was performed on an authorized estimate vs. a new verbal authorization

### Regulatory Awareness

- No specific federal licensing data is stored in MVP (EPA refrigerant handling, state inspection certifications are future scope)
- Shop owner's business license and state registration number should be configurable for display on invoices (required in several states)
- CCPA and state privacy regulations apply to customer PII stored in the system — standard data deletion and export capabilities required

## Innovation Discovery

### Confirmed Innovative Aspects

**1. AP Reconciliation Intelligence**
No competitor in the auto repair software market surfaces accounts-payable reconciliation gaps. Independent shops operate at 6.3% average net margin — at that margin, $5K–$20K/year in missed vendor credits, duplicate parts charges, and unreturned cores is financially significant. ShopFlow monitors parts invoice history against vendor credit memos and surfaces discrepancies as actionable alerts with dollar amounts. This is a direct, quantifiable ROI feature with no competitive equivalent.

**2. Shopmonkey Migration as an Acquisition Tool**
The migration tool isn't just a convenience feature — it's a growth weapon during a defined time window. The Shopmonkey v2.0 migration crisis is a 6–12 month event. A one-click import that removes the biggest switching barrier (data migration risk) converts intent into action for the 1,500–3,000 active refugee shops. This is a time-sensitive innovation advantage.

**3. Full Features at Base Tier**
The market has normalized feature gating: Tekmetric gates DVI behind $309/month; texting behind $409/month. ShopFlow includes both in $79/month. This isn't just a pricing decision — it's a philosophical statement about how the product serves the market. In customer communications, this should be framed as "the feature tax doesn't exist here."

**4. No Annual Contract + Free Data Export as Product Features**
These are explicitly documented as product features, not just business policy. In a market where data hostage (Mitchell 1 cloud outage forcing shops offline, Shopmonkey refusing data export after cancellation) is a documented trauma, making portability a core brand promise differentiates ShopFlow even from tools with similar features.

## SaaS Web App Requirements

### Platform and Access

- Browser-first application (primary interface) with full functionality on Chrome, Firefox, Safari, and Edge (latest 2 versions)
- Responsive design for tablet use in the shop bay (iPad and Android tablet): DVI capture and RO status updates must be fully functional on tablet
- No native mobile app in MVP — PWA approach for mobile/tablet access
- iOS and Android PWA installation supported (add to home screen)

### Authentication & Accounts

- Email/password authentication with optional 2FA (TOTP)
- Google OAuth as alternative login for shop owners
- Subdomain-per-shop architecture for white-label readiness (future)
- Account tiers: Owner/Admin (full access), Technician (scoped), Accountant (read-only sync dashboard and reports)
- Single account covers unlimited technicians at the same shop (no per-seat pricing)

### Onboarding Flow

- Step-by-step onboarding wizard: business profile → service rates → customer import → connect QB (optional) → create first RO
- Shopmonkey migration path: dedicated import screen accepting Shopmonkey CSV export files
- ARI migration path: CSV import supporting ARI's export format
- Sample data / demo mode for evaluators (pre-loaded with 5 customers and 3 ROs for trial users)

## Project Scoping & Phased Development

### MVP Strategy

**Philosophy:** Solve the core 5 workflows deeply and reliably. Every shop owner must be able to say "ShopFlow does these 5 things better than anything in its price range: work orders, DVI, texting, QB sync, parts lookup." No feature will ship in MVP unless it directly serves one of these five workflows. Breadth is the enemy of the initial launch.

**Resource profile:** Small team (2–4 developers) building a web app. React/Next.js frontend, Node.js or Python backend, PostgreSQL, Twilio for SMS, QBO API for accounting sync, NAPA/AutoZone APIs for parts. Timeline target: 10–14 weeks to beta, 16–20 weeks to AppSumo launch.

### MVP Feature Set (Phase 1)

**Core workflows supported:**
- Shop owner: create RO → build DVI → text customer → receive approval → invoice → QB sync
- Technician: receive assigned RO → capture DVI photos → update status
- Customer: receive SMS → view DVI → approve/decline items → receive invoice PDF

**Must-have capabilities:**
1. Repair order creation with customer, vehicle, labor, and parts line items
2. RO status lifecycle (Estimate → Approved → In Progress → Complete → Invoiced)
3. PDF invoice generation with shop logo and configurable tax/fee items
4. DVI creation with mobile camera capture, Green/Yellow/Red flagging, and typed notes
5. Shareable DVI link (browser-based, no customer app required) with per-item approval
6. Two-way SMS from RO with conversation thread and 5 customizable message templates
7. 250 SMS/month included; credit top-up for additional volume
8. Native QuickBooks Online OAuth sync (customers, invoices, payments)
9. Sync status dashboard with error log and manual re-sync
10. Parts catalog lookup from RO (NAPA + AutoZone) with markup rules
11. Customer records with contact info and full vehicle/service history
12. Vehicle records (year/make/model/mileage, VIN manual entry)
13. CSV customer import (generic + ARI + Shopmonkey format support)
14. Shopmonkey one-click data migration (customers, vehicles, open ROs)
15. AP reconciliation alert engine (vendor credit, duplicate charge, unreturned core detection)
16. Revenue and aging reports (daily/weekly/monthly, open RO aging)
17. Owner/Admin and Technician roles with scoped access
18. Accountant read-only role (sync dashboard + reports)

### Post-MVP Features (Phase 2, Months 6–12)

- VIN decode API (enter VIN → auto-populate year/make/model/engine)
- MOTOR labor guide integration (flat-rate time lookup per operation)
- Technician time tracking and job clock (real vs. book hours comparison)
- Appointment scheduling with service reminder calendar
- Stripe-powered integrated payment collection (card-on-file and payment links)
- Parts ordering (direct order to NAPA/AutoZone from within RO, not just lookup)
- DVI template customization per shop (add/remove inspection items, reorder sections)
- Multi-bay dispatch board (who is on what job, bay assignment)

### Phase 3 (Year 2+)

- Multi-location support
- AI features (voice-to-RO, smart recommendations, automated follow-up SMS)
- EV service module (battery diagnostics, EV inspection items)
- Fleet management (commercial accounts)
- Open API for third-party repair information integrations
- Advanced profitability analytics

### Risk Mitigation

**Technical Risks:** QB API changes are the highest-reliability risk. Mitigate with a QB API versioning strategy, automated integration tests on every deployment, and a fallback manual sync notification flow.

**Market Risks:** Shopmonkey could respond to the refugee crisis with aggressive discounting or features restoration. Mitigate by moving fast (the 6–12 month window closes), building community trust in AutoShopOwner and ASOG forums before competitive response, and winning on no-annual-contract positioning which Shopmonkey cannot adopt without business model disruption.

**LTD Financial Risks:** High DVI photo storage costs from LTD users. Mitigate with per-RO storage caps (100 photos/RO), photo compression on upload, and S3 lifecycle rules moving old photos to cold storage after 12 months.

**Adoption Risks:** Shops are loyalty-sticky once they adopt software. Win before they re-sign with Shopmonkey or accept a Tekmetric discount deal. Urgency is a real constraint.

## Functional Requirements

### Work Orders / Repair Orders

- FR1: Users can create a repair order (RO) linked to a customer and vehicle record
- FR2: Users can add labor line items to an RO with description, estimated hours, and labor rate
- FR3: Users can add parts line items to an RO with part number, description, quantity, cost, and retail price
- FR4: Users can apply shop supplies and hazmat/disposal fees as configurable automatic line items
- FR5: Users can advance an RO through the status lifecycle: Estimate → Approved → In Progress → Complete → Invoiced
- FR6: Users can generate a professional PDF invoice from a completed RO, including shop logo, license number, tax breakdown, and line-item detail
- FR7: Users can email or SMS the PDF invoice directly from the RO
- FR8: Users can add internal shop notes to an RO (not visible to the customer)
- FR9: Users can record mileage in and mileage out on each RO
- FR10: Users can create estimate templates from existing ROs for common repeat services
- FR11: Users can search and filter all ROs by status, customer, vehicle, date range, and assigned technician

### Digital Vehicle Inspection (DVI)

- FR12: Users can create a DVI linked to any RO
- FR13: Technicians can capture photos directly from a device camera within the DVI interface
- FR14: Users can flag each DVI inspection item as Green (OK), Yellow (Monitor), or Red (Urgent)
- FR15: Users can add typed notes to any DVI inspection item
- FR16: The system generates a shareable DVI link that opens in a browser with no app install required
- FR17: Customers can view all DVI photos, status flags, and tech notes via the shareable link
- FR18: Customers can approve or decline individual recommended repair items via the DVI link
- FR19: The RO reflects customer approval status in real-time when items are approved/declined via the link
- FR20: Users receive a notification when a customer interacts with a DVI link (views it, approves items)
- FR21: The system records a timestamped, IP-addressed audit log of customer approvals for warranty and compliance purposes
- FR22: Users can add pricing to DVI-recommended items before sending the link

### Two-Way Customer Texting

- FR23: Users can send SMS messages to any customer directly from an RO
- FR24: Users can receive customer SMS replies tied to the originating RO and customer record
- FR25: Users can view a conversation thread per customer showing all sent and received messages
- FR26: Users can use pre-configured SMS templates (e.g., "Estimate ready," "Car is ready," "DVI link") with one-tap insertion
- FR27: Users can customize up to 10 SMS templates with placeholders for customer name, RO number, and shop name
- FR28: Users can view their monthly SMS usage and remaining credit balance
- FR29: Users can purchase additional SMS credits from within the app when balance runs low
- FR30: The system includes the DVI link automatically when the "DVI complete" template is used

### QuickBooks Online Sync

- FR31: Users can connect their QuickBooks Online account via OAuth 2.0 without leaving ShopFlow
- FR32: The system automatically syncs each invoiced RO to QuickBooks Online as a sales transaction within 5 minutes of invoice creation
- FR33: The system maps ShopFlow customers to matching QuickBooks customers (by name/email match) or creates new QB customers automatically
- FR34: Users can configure income account mapping (labor charges → QB income account, parts → separate QB income account)
- FR35: The system syncs payment records to QuickBooks when a payment is marked received in ShopFlow
- FR36: Users can view a sync status dashboard showing the last 30 days of sync events, success/failure counts, and per-transaction status
- FR37: Users can manually trigger a re-sync for any failed transaction from the sync dashboard
- FR38: The system sends an email alert to the shop owner when QB sync fails for more than 3 consecutive invoices
- FR39: Users can disconnect QuickBooks and re-authenticate without losing sync history or configuration

### Parts Catalog Lookup

- FR40: Users can search for parts by name or part number from within any RO
- FR41: The system returns results from NAPA and AutoZone catalog APIs with part number, description, and list price
- FR42: Users can add a part directly from search results to the RO line items with quantity 1 and markup-adjusted price pre-populated
- FR43: Users can configure global or per-category parts markup percentages (e.g., 35% markup on all parts)
- FR44: Users can override the auto-calculated retail price on any parts line item
- FR45: The system displays NAPA and AutoZone results in parallel with source labeling

### Customer & Vehicle Management

- FR46: Users can create and edit customer records with name, phone, email, address, and notes
- FR47: Users can create and edit vehicle records linked to a customer with year, make, model, trim, engine, VIN (manual), mileage history, and license plate
- FR48: Users can view a customer's complete RO and service history across all visits
- FR49: Users can view a vehicle's complete service history regardless of current owner
- FR50: Users can search customers by name, phone, email, and vehicle license plate
- FR51: Users can import customers from a CSV file in generic format, ARI export format, or Shopmonkey export format
- FR52: Users can run the Shopmonkey migration tool, which imports customers, vehicles, and open ROs from a Shopmonkey data export in a single workflow

### AP Reconciliation

- FR53: Users can log parts vendor invoices (vendor name, invoice number, invoice total, line items) in ShopFlow
- FR54: The system cross-references received parts invoices against RO parts line items to detect potential discrepancies
- FR55: The system surfaces AP reconciliation alerts for: vendor credits not yet applied, potential duplicate charges (same part number, similar amounts within 30 days), and unreturned cores (core charge present with no corresponding credit)
- FR56: Each AP alert displays the estimated dollar amount at risk and a recommended action
- FR57: Users can export a reconciliation report (PDF or CSV) for accountant review

### Reporting

- FR58: Users can view a revenue summary dashboard with daily, weekly, and monthly totals for parts revenue, labor revenue, and total invoiced
- FR59: Users can view an open RO aging report showing all in-progress and estimate-status ROs with days since creation
- FR60: Users can view a top services report showing the 10 highest-revenue service types by labor description
- FR61: Users can search invoice history by date range, customer, vehicle, and RO number with export to CSV
- FR62: Users can view a technician summary report showing ROs assigned and completed per technician per time period

### User & Account Management

- FR63: Users can sign up with email and password
- FR64: Users can log in via Google OAuth as an alternative to email/password
- FR65: Users can configure their business profile (name, logo, address, phone, license number, tax rates, shop supplies percentage)
- FR66: Shop owners can create Technician accounts for bay staff with scoped access (assigned ROs, DVI capture, status updates only)
- FR67: Shop owners can create Accountant accounts with read-only access to reports and QB sync dashboard
- FR68: Technicians can log in on any shop device (shared tablet) and view only their assigned ROs
- FR69: Users can export all shop data (customers, vehicles, ROs, invoices) as a ZIP archive of CSV files at any time
- FR70: Users can close their account and immediately receive a full data export link (data retained for 90 days before deletion)

## Non-Functional Requirements

### Performance

- NFR1: The work order list, RO detail page, and DVI editor must load in under 2 seconds on a standard broadband connection (50 Mbps)
- NFR2: DVI photo upload (single photo, average 3 MB JPEG) must complete in under 5 seconds on a 4G mobile connection
- NFR3: Parts catalog search must return results within 3 seconds including live API calls to NAPA and AutoZone
- NFR4: QB sync for a single invoice must complete within 5 minutes of invoice creation under normal load
- NFR5: PDF invoice generation must complete in under 3 seconds for ROs with up to 50 line items

### Security

- NFR6: All data transmitted between client and server must use TLS 1.3
- NFR7: Customer PII (name, phone, email, address) must be encrypted at rest in the database
- NFR8: Payment-related data is never stored on ShopFlow servers — any payment card processing must be delegated entirely to Stripe (PCI-DSS Level 1 compliant)
- NFR9: Session tokens expire after 7 days of inactivity; users are prompted to re-authenticate
- NFR10: Customer-facing DVI approval and invoice links expire after 30 days
- NFR11: The DVI audit log (timestamp + IP of customer approval) must be immutable — no user can edit or delete approval records
- NFR12: Technician accounts cannot access customer financial data (invoice totals, payment status)
- NFR13: All file uploads (DVI photos, CSV imports) are scanned for malware before storage

### Reliability & Availability

- NFR14: Core services (RO management, DVI, texting, QB sync) must maintain 99.9% uptime (< 8.76 hours downtime/year)
- NFR15: Zero data loss guarantee — all user-submitted data (RO creation, DVI photos, customer approvals) must be durably persisted before the UI confirms success
- NFR16: QB sync must achieve 99%+ success rate over any rolling 30-day period; failures must be surfaced in the sync dashboard within 5 minutes
- NFR17: SMS delivery must achieve 98%+ success rate using a Tier-1 provider (Twilio); undelivered messages surfaced in the conversation thread within 60 seconds

### Scalability

- NFR18: The platform must support 10,000 concurrent active shops without performance degradation (sized for Year 2 growth)
- NFR19: The QB sync queue must process up to 500 sync operations per minute at peak (e.g., end-of-business-day batch)
- NFR20: DVI photo storage must support 500 photos per shop per month without additional configuration (S3 with lifecycle policies managing cold storage)

### Integration

- NFR21: QuickBooks Online integration must support the current QB API version and must be updated within 30 days of any breaking API change
- NFR22: NAPA and AutoZone parts catalog APIs must be wrapped in a fallback layer — if one API is unavailable, results from the other are still displayed with a notice
- NFR23: SMS delivery (Twilio) must have automatic failover to a secondary number pool if primary pool is rate-limited
- NFR24: Shopmonkey CSV import must support export files from Shopmonkey v1 and v2 formats

### Accessibility & Usability

- NFR25: All primary workflows (create RO, add DVI photo, send SMS, view reports) must be fully functional on tablet screen sizes (768px width minimum) without horizontal scrolling
- NFR26: DVI photo capture interface must function with large tap targets (minimum 44×44 px) to accommodate use with gloves
- NFR27: Color-coded DVI status (Green/Yellow/Red) must include a text label in addition to color for colorblind accessibility
- NFR28: The application must meet WCAG 2.1 Level AA for all customer-facing screens (DVI approval page, invoice view page)

### Compliance

- NFR29: Users must be able to export all personal data for any customer on request (CCPA compliance)
- NFR30: Users must be able to delete a customer record and all associated data on request, with confirmation and 30-day grace period
- NFR31: DVI approval records with timestamp and IP must be retained for a minimum of 7 years (standard warranty documentation requirement)
- NFR32: Invoices must be retained for a minimum of 7 years (IRS/tax compliance for shop owners)
