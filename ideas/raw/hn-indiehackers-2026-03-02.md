# HN & Indie Hackers Boring Business Scan — 2026-03-02

---

## Craftplan — Open-Source Production Management for Small Manufacturers
- **Source**: https://news.ycombinator.com/item?id=46847690
- **Additional Links**: https://news.ycombinator.com/item?id=46869383 (Elixir-focused repost), https://elixirforum.com/t/craftplan-open-source-production-management-for-small-manufacturers/74142, https://github.com/puemos/craftplan, https://craftplan.fly.dev (live demo)
- **Platform**: HN
- **Type**: Show HN
- **Engagement**: 577 upvotes, 167 comments — top Show HN of February 2026
- **Revenue Data**: None — open source, self-hosted. No SaaS pricing yet.
- **Boring Business Score**: 5
- **Target Industry**: Micro-bakeries, small-batch food manufacturers, soap makers, candle makers, small breweries
- **Core Value Prop**: Built by a developer whose wife was opening a micro-bakery and couldn't find affordable, non-bloated production management software. Handles recipes (versioned BOMs with cost rollups), inventory (lot traceability, demand forecasting, allergen tracking), orders, production batch planning, and purchasing. Built with Elixir/Ash Framework/Phoenix LiveView/PostgreSQL.
- **Gap/Opportunity**: The 577 upvotes and 167 comments validate massive demand for affordable production management in small manufacturing. Key feedback from comments: (1) semi-finished product support needed (intermediate ingredients used in multiple recipes), (2) meat processing is a specifically underserved niche (catch-weight processing), (3) 3D printing/custom manufacturing has similar needs, (4) furniture manufacturing needs BOM tools. The founder stated "data structure is almost everything" — the core moat is the domain-specific data model, not the UI. Current alternatives are enterprise ERPs ($10K-$50K+/year) or spreadsheets. The comment thread debated whether AI-generated custom software will kill small ERPs — consensus: no, because the hard part is domain knowledge, not code.
- **Our Angle**: Craftplan validates the "micro-ERP for specific boring industry" concept. Two plays: (1) **Fork and SaaS-ify** — take the open-source model, add hosted version, charge $49-99/mo for small manufacturers who don't want to self-host. Add the semi-finished product support and allergen compliance reporting that commenters requested. (2) **Apply the pattern to adjacent trades** — the BOM + inventory + job costing pattern applies to any make-to-order business: custom cabinet shops, sign makers, print shops, upholstery shops. Build "Craftplan for [trade]" as a hosted SaaS with trade-specific templates. The 577-upvote validation means the concept resonates — the question is packaging it as a paid product.
- **LTD Potential**: 5

---

## Carbon — Open-Source ERP for Manufacturing ($90/mo)
- **Source**: https://news.ycombinator.com/item?id=44792005
- **Additional Links**: https://github.com/crbnos/carbon
- **Platform**: HN
- **Type**: Show HN
- **Engagement**: 322 upvotes, 158 comments (August 2025)
- **Revenue Data**: $90/month business tier. Small job shops and startups currently using it. Targeting mid-market manufacturers (~200 employees).
- **Boring Business Score**: 5
- **Target Industry**: Manufacturing — general manufacturing, furniture, meat processing, 3D printing, laser fabrication
- **Core Value Prop**: Three years of development. Focuses on the middle layer of manufacturing — purchasing, bill of materials, sales orders, scheduling — while remaining API-first. Positions as complementary to accounting systems (not a replacement). Built on Supabase, Trigger, Upstash, Novu.
- **Gap/Opportunity**: Key feedback from HN: (1) deployment stack too complex for non-technical manufacturers (multiple dependencies), (2) accounting/G/L integration still incomplete, (3) 13-icon sidebar needs UX improvement. The competition landscape: ERPNext is the open-source incumbent, Sage handles accounting but not manufacturing workflows, SAP is enterprise-only. The $90/mo price point is interesting — far cheaper than enterprise ERPs but revenue-generating unlike pure open-source. The meat processing niche (catch-weight pricing) was called out as specifically underserved. One commenter noted two mid-market manufacturers (~$10B revenue) recently replaced Oracle financials — proving enterprise migration appetite exists.
- **Our Angle**: Carbon + Craftplan together signal that manufacturing ERP is a hot space for indie builders. The gap: no one has built a hosted, simple manufacturing ERP for 5-20 person shops at $49-149/mo with zero self-hosting complexity. Carbon requires too much infrastructure. Craftplan is open-source only. The opportunity is a managed, vertical-specific manufacturing tool: pick ONE manufacturing niche (custom cabinets, metal fabrication, food production), build the minimal BOM + inventory + quoting workflow, host it fully managed, price at $99-199/mo. The $90/mo Carbon price validates willingness to pay.
- **LTD Potential**: 4

---

## TurboOps — Workflow Engine & Job Status Tracker for Contractors
- **Source**: https://news.ycombinator.com/item?id=46482268 (Jan 2026 "What are you working on?" thread)
- **Additional Links**: https://turboops.io/platform/public-tracker
- **Platform**: HN
- **Type**: Working-on thread mention
- **Engagement**: Mentioned in thread (individual engagement not tracked)
- **Revenue Data**: None disclosed. Early-stage product.
- **Boring Business Score**: 4
- **Target Industry**: Construction, field services, trades — any job-based business needing status tracking
- **Core Value Prop**: Workflow engine for job status tracking with real-time public status pages, email notifications, and evidence tracking (photos, documents). Contractors can give customers a link to see their job's progress — similar to a package tracking page but for service jobs.
- **Gap/Opportunity**: The "job tracking page" concept is extremely underserved in trades. When a homeowner hires a contractor for a kitchen remodel, they have zero visibility into progress unless they call. The concept of a customer-facing job status page (like Domino's pizza tracker but for home services) could differentiate any field service tool. Evidence tracking (before/after photos, permits, inspection documents) is also a compliance requirement that most tools handle poorly.
- **Our Angle**: The customer-facing "job tracker" is a strong wedge feature for trades businesses. Build it as a standalone micro-SaaS: contractor sets up a project, uploads photos at each stage, customer gets a branded link to watch progress. Upsell: automated photo requests from crew, permit status integration, auto-generated completion reports. Price at $19-39/mo. This is simple enough to build as a first product and could become a wedge into broader job management. The "pizza tracker for contractors" positioning is memorable and marketable.
- **LTD Potential**: 4

---

## PostalAgent — Direct Mail Marketing for Service Businesses
- **Source**: https://news.ycombinator.com/item?id=46482268 (Jan 2026 "What are you working on?" thread)
- **Additional Links**: https://PostalAgent.com
- **Platform**: HN
- **Type**: Working-on thread mention
- **Engagement**: Mentioned in thread
- **Revenue Data**: None disclosed. Has integrations with Jobber, Pipedrive, Zoho, Follow Up Boss, and Zapier.
- **Boring Business Score**: 4
- **Target Industry**: Local service businesses — the Jobber integration signals trades/field service as primary target
- **Core Value Prop**: Personalized postcard printing and mailing with address list building. The Jobber integration is the key signal — this targets home service companies (HVAC, plumbing, cleaning) who want to do direct mail marketing to their service area.
- **Gap/Opportunity**: Direct mail is experiencing a renaissance as digital ad costs rise. For local service businesses, a postcard to homes within 5 miles of a completed job is high-ROI marketing. The Jobber integration means the tool can auto-trigger postcards after job completion ("We just serviced your neighbor's HVAC system — here's 10% off your first service"). This "service radius marketing" is proven in trades but currently done manually or through expensive agencies.
- **Our Angle**: The PostalAgent + Jobber integration validates demand for automated marketing in trades. The bigger play: build "marketing autopilot for trades" that combines direct mail, Google Business Profile optimization, review request automation, and neighborhood-targeted digital ads — all triggered by job completions from field service software (Jobber, Housecall Pro, ServiceTitan). Each marketing channel becomes a module at $19-29/mo. The automated "we just serviced your neighbor" postcard is the hook feature. Total package at $79-149/mo replaces a $500-2000/mo marketing agency.
- **LTD Potential**: 3

---

## 10Cups / BeanPOS — NFC Loyalty System for Coffee Shops
- **Source**: https://news.ycombinator.com/item?id=46937696 (Feb 2026 "What are you working on?" thread)
- **Additional Links**: https://www.beanpos.co.za
- **Platform**: HN
- **Type**: Working-on thread mention
- **Engagement**: Mentioned in thread
- **Revenue Data**: None disclosed. Operating in a real coffee shop (South Africa).
- **Boring Business Score**: 4
- **Target Industry**: Coffee shops, food service, hospitality
- **Core Value Prop**: NFC-based loyalty system integrated with POS. "No stupid loyalty apps, no QR Codes, no sign ups" — customers tap NFC stickers on travel mugs to skip queues and pre-order regular orders. Eliminates the friction of loyalty app sign-ups that most customers abandon.
- **Gap/Opportunity**: Every coffee shop loyalty program suffers from the same problem: customers don't want another app. The NFC-on-physical-object approach (sticker on a mug) is elegant because it ties loyalty to the object they already bring. The adjacent opportunity: NFC-based loyalty for any repeat-visit local business — barbershops, car washes, dry cleaners, nail salons. The hardware cost per customer is near-zero (NFC stickers are $0.10-0.30 each) but the switching cost is high (customers won't re-program their mugs).
- **Our Angle**: The NFC loyalty concept has legs beyond coffee shops. Build "tap to earn" for local service businesses: (1) car wash — NFC sticker on car, auto-recognizes returning customer, applies loyalty discount, (2) barbershop — NFC card, tap on arrival, auto-checks-in and applies loyalty pricing, (3) laundromat — NFC tag on machine, tracks visits for free-wash-after-10 program. The hardware simplicity (NFC stickers, not custom hardware) keeps COGS near zero. Price at $29-49/mo for the SaaS + $0.20/sticker. The moat: once customers have tagged objects, switching loyalty providers means re-tagging everything.
- **LTD Potential**: 3

---

## ItemGrid — Free Inventory Management for Single-Location Businesses
- **Source**: https://news.ycombinator.com/item?id=46872508
- **Additional Links**: https://itemgrid.io
- **Platform**: HN
- **Type**: Show HN
- **Engagement**: 3 upvotes (February 2026)
- **Revenue Data**: Free tier. No paid pricing disclosed.
- **Boring Business Score**: 4
- **Target Industry**: Retail shops, restaurants, local businesses with single locations
- **Core Value Prop**: Simple inventory tracking for businesses that don't need multi-warehouse enterprise tools. Targets the gap between spreadsheets and complex inventory systems like Cin7 or Fishbowl.
- **Gap/Opportunity**: The low engagement (3 upvotes) doesn't mean low demand — inventory management for small businesses is a proven pain point. The "single-location" constraint is smart positioning — most inventory tools try to do everything (multi-warehouse, manufacturing, ecommerce). A tool that excels at single-location inventory for specific business types (auto parts shop, hardware store, restaurant kitchen) could own a niche. The adjacent play: trade-specific inventory for contractors — tracking materials by job, not just by warehouse. A plumber needs to know "I have 15 3/4-inch copper elbows on my truck" not "I have 500 fittings in inventory."
- **Our Angle**: Fork the concept into "truck inventory for trades" — mobile-first inventory tracking for service vehicles. Technicians scan barcodes when loading trucks, the system tracks per-truck stock levels, auto-generates reorder lists when supplies drop below thresholds, and attributes material usage to specific jobs. This solves the universal trades problem of "my guys are running to Home Depot 3 times a day because nobody tracked what's on the truck." Price at $15-29/mo per truck. The per-job material attribution feeds into job costing (ties to bookkeeping/profitability tools).
- **LTD Potential**: 3

---

## Alquilame.io — Mobile-First Rental Management for Small Businesses
- **Source**: https://news.ycombinator.com/item?id=44297376
- **Additional Links**: https://alquilame.io
- **Platform**: HN
- **Type**: Show HN
- **Engagement**: 4 upvotes (June 2025)
- **Revenue Data**: None disclosed.
- **Boring Business Score**: 4
- **Target Industry**: Equipment rental, tool rental, party rental, small rental operators
- **Core Value Prop**: Mobile-first rental management tool designed for small businesses that rent out equipment, tools, or other assets. Simpler than enterprise rental management systems.
- **Gap/Opportunity**: Equipment rental is a $60B+ market in the US alone, dominated by large chains (United Rentals, Sunbelt) with expensive enterprise software. Small rental operators (tool rental shops, party supply rentals, camera/AV rental, construction equipment rental) use paper or basic spreadsheets. The unique data model: assets have utilization rates, maintenance schedules, depreciation, and per-rental profitability — different from inventory management or property management. The compliance angle: many rental items require inspection logs and safety certifications.
- **Our Angle**: Build "rental shop manager" for a specific niche — the strongest is construction tool/equipment rental for small operators (5-50 items). Core features: (1) asset catalog with maintenance tracking, (2) rental scheduling with conflict detection, (3) customer deposits and billing, (4) utilization rate reports showing which items are profitable. The magic feature: auto-calculate optimal fleet composition based on historical demand ("sell the pressure washer nobody rents, buy another excavator mini"). Price at $49-99/mo. The construction rental niche has high ARPU potential because asset values are high and downtime is expensive.
- **LTD Potential**: 4

---

## YC Spring 2026 RFS — Industrial Software Opportunities for Indie Hackers
- **Source**: https://superframeworks.com/articles/yc-rfs-startup-ideas-indie-hackers-2026
- **Additional Links**: None
- **Platform**: Industry analysis (YC RFS interpretation)
- **Type**: Market signal / Demand analysis
- **Engagement**: N/A
- **Revenue Data**: Market benchmarks: industrial software $200-500/mo per shop; "they'll pay $300+/mo without blinking."
- **Boring Business Score**: 5
- **Target Industry**: Manufacturing, metal fabrication, HVAC, plumbing, appliance repair, construction
- **Core Value Prop**: YC's Spring 2026 Request for Startups explicitly calls out industrial and manufacturing software as an opportunity area. Specific ideas highlighted: (1) AI-powered quoting for metal shops at $200-500/mo, (2) supplier marketplace for industrial metals ("Faire for metals"), (3) production scheduling SaaS for job shops, (4) AI repair assistant for field technicians, (5) quality inspection via phone camera + AI vision, (6) AI training modules for trades apprentices.
- **Gap/Opportunity**: When YC explicitly lists an area in their RFS, it means they see a massive market with inadequate software. The key insight from the analysis: "Industrial software has notoriously low competition and high willingness to pay." Legacy tools are expensive and complex, designed for enterprises. Small shops (10-50 employees) are stuck between enterprise ERP and spreadsheets. The AI angle: photo-based quoting, visual inspection, and repair guidance are all achievable with current vision models and don't require massive training data.
- **Our Angle**: Three actionable opportunities from this signal: (1) **Quick Quote for Metal Shops** — upload a drawing or photo of a part, get an instant rough quote based on material weight + machine time + finish type. Shops manually quote each job in 30-60 minutes; AI can do 80% of this in 2 minutes. Price at $199-299/mo. (2) **Photo Inspection Tool for Construction** — GC takes photo of completed work, AI compares against spec drawings and flags deviations. Saves 2-3 hours of manual inspection per job site visit. Price at $149-249/mo. (3) **Trade Training Simulator** — AI-powered scenario-based training for apprentices (plumbing, electrical, HVAC). Sell to trade schools and unions at $29/student/mo. Each is a standalone product with clear buyer and pricing.
- **LTD Potential**: 4

---

## Invocrea — AI Invoice Templates for Freelancers and Contractors
- **Source**: https://news.ycombinator.com/item?id=46943969
- **Additional Links**: https://www.invocrea.com/en
- **Platform**: HN
- **Type**: Show HN
- **Engagement**: 1 upvote (February 2026)
- **Revenue Data**: None disclosed. Free tier with paid plans.
- **Boring Business Score**: 3
- **Target Industry**: Freelancers, solo developers, contractors
- **Core Value Prop**: Create and send professional invoices in under 30 seconds with AI-generated custom templates. Features: smart auto-completion, real-time payment tracking, automatic reminders, PDF export. Built with Next.js, NestJS, MongoDB. Solo dev frustrated with "bloated, expensive, or just ugly" alternatives.
- **Gap/Opportunity**: The invoicing space is extremely crowded (Wave, Invoice Ninja, Zoho Invoice, FreshBooks, etc.) and the 1-upvote engagement confirms it's hard to differentiate. However, the "AI-generated template" angle is novel — if it could auto-generate industry-specific invoice templates (HVAC service report + invoice, plumbing repair documentation + invoice, construction progress billing), it becomes a trades-specific tool rather than a generic invoicer. The trades-specific angle: service documentation bundled with invoicing (photos, material lists, warranty info, compliance reports).
- **Our Angle**: Don't compete on generic invoicing. The trades invoice opportunity is bundling service documentation with payment: a plumber generates a "service report + invoice" document that includes before/after photos, material codes, warranty terms, and the payment amount — all from one mobile-first flow. This document serves four purposes: (1) customer invoice, (2) insurance claim documentation, (3) warranty record, (4) internal job record. No tool combines all four. Price at $29-49/mo as an add-on to existing field service tools, or standalone at $49-79/mo for operators who don't use FSM software.
- **LTD Potential**: 3

---

## Locksmith Software — Untapped $49/user/mo Niche (25K+ Shops in North America)
- **Source**: https://www.flowjam.com/blog/indie-hackers-saas-ideas-2025-10-you-can-launch-fast
- **Additional Links**: None
- **Platform**: Indie Hackers / Industry analysis
- **Type**: Market signal / Idea analysis
- **Engagement**: N/A
- **Revenue Data**: Target pricing: $49/user/month. Market: 25,000+ mom-and-pop locksmith shops in North America.
- **Boring Business Score**: 5
- **Target Industry**: Locksmiths
- **Core Value Prop**: Proposed features: job dispatch with SMS ETA, key-code lookup table, invoice auto-sending to property managers. Locksmiths are mobile service providers with unique needs: emergency dispatch (lockouts), key code databases, property manager relationships for recurring commercial work, and inventory tracking for lock hardware and key blanks.
- **Gap/Opportunity**: Locksmiths have essentially ZERO purpose-built software. They use generic field service tools (Jobber, Housecall Pro) that don't understand key codes, lock types, or the emergency dispatch workflow unique to lockouts. With 25K+ shops in North America, even 2% penetration at $49/user/mo = $300K+ ARR. The property manager angle is the real wedge — property managers need a reliable locksmith on speed dial and want digital invoices + documentation. A CRM that manages the locksmith-property manager relationship (recurring rekeying contracts, master key tracking, access logs) is high-value.
- **Our Angle**: Build "LockOps" — the all-in-one for locksmiths. Core: (1) emergency dispatch with real-time ETA (customer sees technician location like Uber), (2) key code database with customer history ("last time we cut a Schlage B60N for this address"), (3) property manager portal for commercial clients (request service, view history, approve invoices), (4) inventory tracking for key blanks and lock hardware. The emergency dispatch + ETA feature is the marketing hook — locksmiths can show customers their arrival time, reducing no-shows and cancellations. Price at $49-99/mo. The master key management feature for commercial clients is a premium upsell at $149-199/mo.
- **LTD Potential**: 5

---

## Contractor Bid Security Tracker — Construction Compliance Micro-SaaS
- **Source**: https://www.greensighter.com/blog/micro-saas-ideas (Reddit-aggregated ideas)
- **Additional Links**: None
- **Platform**: Industry analysis / Reddit
- **Type**: Market signal
- **Engagement**: N/A
- **Revenue Data**: None. Described as "a massive emerging vertical for SaaS adoption."
- **Boring Business Score**: 5
- **Target Industry**: Construction contractors, GCs, subcontractors bidding on public/commercial projects
- **Core Value Prop**: Automated tracking of bid bonds, performance bonds, payment bonds, and insurance certificates — all required for commercial and government construction projects. Currently tracked via spreadsheets, email, and paper files. Missing a renewal or expiration can disqualify a contractor from bidding.
- **Gap/Opportunity**: Construction compliance is a $1.5B+ market and growing with increasingly stringent regulations. Every contractor bidding on commercial or government work needs to track: (1) bid bonds per project, (2) performance bonds, (3) insurance certificates (GL, workers comp, auto), (4) license renewals by jurisdiction, (5) safety certifications (OSHA). Missed expirations = lost bids = lost revenue. No indie-built solution exists — enterprise tools like Procore handle this but start at $375+/mo. The solo contractor or 5-person crew needs a $29-49/mo compliance tracker.
- **Our Angle**: Build "ComplianceHQ for Contractors" — simple dashboard tracking all bonds, insurance, and license expirations with auto-reminders. Core features: (1) upload documents, OCR extracts dates and amounts, (2) auto-reminders 90/60/30 days before expiration, (3) per-project compliance package generator (one-click export of all required documents for a bid submission), (4) surety broker integration for bond renewal. The bid package generator is the killer feature — instead of manually assembling 10+ documents for each bid, the contractor clicks "generate bid package" and gets a formatted PDF. Price at $29-49/mo for small contractors, $99-149/mo for GCs managing multiple subs' compliance.
- **LTD Potential**: 4

---

## Solo Therapist Billing & Note-Taking Hub — HIPAA-Compliant Practice Management
- **Source**: https://www.greensighter.com/blog/micro-saas-ideas (Reddit-aggregated ideas)
- **Additional Links**: None
- **Platform**: Industry analysis / Reddit
- **Type**: Market signal
- **Engagement**: N/A
- **Revenue Data**: None directly. Benchmark: SimplePractice ($39-99/mo), TherapyNotes ($49/mo).
- **Boring Business Score**: 5
- **Target Industry**: Solo mental health practitioners — therapists, counselors, psychologists
- **Core Value Prop**: HIPAA-compliant platform integrating scheduling, AI-assisted session note generation, Stripe billing, and client portal. Designed for solo practitioners who handle their own administration.
- **Gap/Opportunity**: The mental health practice management market is growing rapidly (mental health visits up 40%+ post-COVID) but existing tools (SimplePractice, TherapyNotes, Jane App) are designed for practices, not solo operators. Solo therapists pay $39-99/mo for features they don't need (multi-provider scheduling, insurance billing workflows). The AI note-taking angle is the real opportunity: therapists spend 30-45 minutes writing session notes for every 50-minute session. AI that generates SOAP notes from session recordings (with proper consent and HIPAA compliance) would save 5-8 hours/week.
- **Our Angle**: Don't build a full practice management system — build "AI Session Notes for Therapists" as a focused micro-SaaS. Core: (1) therapist records session (with client consent), (2) AI generates SOAP-formatted progress notes, (3) notes are HIPAA-compliant and exportable to any EHR. This single feature is worth $39-49/mo standalone because it saves $200-400/mo in documentation time. The compliance moat: HIPAA requirements (BAA with cloud providers, encrypted storage, audit logs) create a barrier that keeps casual competitors out. Start with therapy, expand to other documentation-heavy healthcare providers (physical therapy, speech therapy, chiropractic).
- **LTD Potential**: 4

---

## Onedesk — Cleaning SaaS/Ecommerce ($100K+ MRR, Bootstrapped)
- **Source**: https://www.indiehackers.com/post/2020-in-review-0-to-100k-mrr-for-our-cleaning-saas-ecommerce-d53de6dde5
- **Additional Links**: https://www.indiehackers.com/product/cleaning-services
- **Platform**: Indie Hackers
- **Type**: Revenue milestone
- **Engagement**: Major featured post on IH
- **Revenue Data**: $100K+ MRR (December 2020). Launched March 2020. Hybrid SaaS + ecommerce model.
- **Boring Business Score**: 5
- **Target Industry**: Commercial cleaning — offices, retail, restaurants, warehouses, clinics, daycares
- **Core Value Prop**: Mobile app for office managers to conduct self-walkthroughs, web app for messaging cleaners, invoicing, scheduling, and an ecommerce shop selling cleaning equipment (electrostatic sprayers). Distribution breakthrough: SEO via PR outreach about COVID disinfection → features in Reader's Digest and other publications.
- **Gap/Opportunity**: The $100K MRR in 9 months proves commercial cleaning SaaS can scale fast with the right distribution strategy. Key insight from the founder: "distribution is everything. If you don't have distribution, you're dead." The COVID-era success was timing-specific, but the underlying need — managing cleaner crews across multiple commercial sites — is permanent. The market has since gotten more crowded (Swept, CleanGuru, Janitorial Manager), but residential cleaning remains less served than commercial. The self-walkthrough feature (customer inspects and reports cleaning quality via mobile app) is a unique differentiator that creates accountability without adding manager overhead.
- **Our Angle**: The Onedesk playbook — combining SaaS + ecommerce + content SEO — is replicable for other service industries. The "self-walkthrough" concept (customer audits service quality via mobile checklist) applies to any recurring service: lawn care (photo-based quality check), pool cleaning (chemical reading verification), janitorial (cleanliness scoring), property maintenance (condition reporting). Build the quality-audit layer as a standalone tool: service provider sets up a checklist, customer receives a link after each visit, rates quality, flags issues. Service provider gets a quality dashboard. Price at $19-29/mo per customer site. This creates accountability that helps service businesses retain customers — and the data becomes a competitive moat.
- **LTD Potential**: 3

---

# CROSS-CUTTING THEMES & SYNTHESIS

## Strongest Demand Signals (Convergence Across Multiple Sources)

### 1. Manufacturing ERP/Production Management for Small Operators
**Evidence**: Craftplan (577 upvotes — top Show HN Feb 2026), Carbon ERP (322 upvotes, $90/mo, Aug 2025), YC Spring 2026 RFS explicitly calling for manufacturing software. Three independent signals in 6 months. Small manufacturers (5-50 people) are stuck between enterprise ERPs ($10K+/year) and spreadsheets. Willingness to pay: $90-500/mo confirmed.

### 2. AI-Powered Field Tools for Trades Technicians
**Evidence**: YC RFS 2026 (AI repair assistant, quality inspection tool), Magai explicitly targeting "electricians, plumbers" (from previous scans), construction inspection demand. The AI application here is photo-based: snap a photo → get an answer (diagnosis, quote, inspection result). Current vision AI models are good enough for this. The non-obvious angle: the AI doesn't replace the technician, it augments them — younger apprentices become as capable as 20-year veterans when AI guides diagnostics.

### 3. Trades-Specific Compliance & Documentation
**Evidence**: Contractor bid security tracker (Reddit/industry), construction estimation market ($1.5B → $2.6B), OSHA/EPA compliance requirements increasing. Every trade has documentation requirements that are currently manual: HVAC (EPA 608 refrigerant tracking), pest control (chemical usage logs), electrical (load calculations and permits), plumbing (backflow test reports). Building the compliance documentation tool for ONE specific trade creates a sticky product that's hard to churn from.

### 4. Service Quality Tracking for Recurring Service Businesses
**Evidence**: TurboOps (job status pages), Onedesk (self-walkthrough feature at $100K MRR), PostalAgent (post-job marketing automation). The pattern: after a service visit, the customer receives an automated touchpoint (quality check, review request, or marketing offer). This layer sits between the field service software and the customer, and no one owns it well.

### 5. Purpose-Built Tools for Ultra-Niche Trades
**Evidence**: Locksmith software (25K+ shops, zero purpose-built tools), Craftplan for bakeries/manufacturers, GorillaDesk for pest/lawn/cleaning (from previous scans). The pattern: pick a trade with 10K-50K businesses, zero dedicated software, and unique workflow requirements that generic tools can't serve. New candidates identified: garage door repair companies, septic service providers, tree service companies, pressure washing businesses, chimney sweeps.

## Revenue Benchmarks Update (Boring SaaS, March 2026)

| Product | MRR | Customers | ARPU | Team Size |
|---------|-----|-----------|------|-----------|
| Onedesk (cleaning) | $100K+ | Unknown | Unknown | Small |
| Magai (AI aggregator) | ~$100K | ~4,000 | ~$25/mo | Small |
| Swifteq (Zendesk apps) | $51K | Unknown | $5-15/app | 1 (solo) |
| Rashid's portfolio | $42K | Unknown | Varies | Small |
| Stagetimer (events) | $20K | 13,000 | ~$1.50/mo | Small |
| Carbon ERP (manufacturing) | Unknown | Small shops | $90/mo | Small |
| Topliner (exec search) | $10K+ | Unknown | High | 2-3 |

## Key Strategic Insights for This Week

1. **Manufacturing micro-ERP is the hottest boring-SaaS space right now.** Craftplan's 577 upvotes + Carbon's 322 upvotes + YC RFS inclusion = triple validation. The play: pick a specific manufacturing niche (food production, custom woodworking, metal fabrication), build a hosted BOM + inventory + quoting tool, price at $99-199/mo. The open-source projects prove the concept; the opportunity is in hosted, managed, niche-specific versions.

2. **YC formally validating "industrial software" as an opportunity area** changes the calculus. When YC says "we want to fund this," it means (a) the market is real, (b) well-funded competitors will appear within 12-18 months. The indie hacker advantage: move fast, pick a hyper-specific niche (e.g., "quoting tool for sheet metal shops only"), and build domain expertise before VC-backed competitors try to boil the ocean.

3. **The "customer-facing job tracker" concept** (TurboOps) is a sleeper opportunity. Every homeowner who's hired a contractor has experienced the anxiety of zero visibility. A simple "project tracker" that contractors share with customers (stage updates, photos, next steps) costs almost nothing to build, creates marketing differentiation for the contractor, and generates customer engagement data. This is a wedge product that leads to broader job management.

4. **NFC-based loyalty** (10Cups/BeanPOS) represents hardware-light IoT for local businesses. The NFC sticker approach eliminates app download friction — the biggest barrier to loyalty program adoption. The concept applies broadly to any repeat-visit local business. Worth watching for traction data.

5. **The compliance documentation niche** is the most defensible boring-business SaaS category. Once a contractor's compliance records (bonds, insurance, licenses, certifications) are in a system, switching is painful because re-uploading and re-configuring everything takes hours. The regulatory mandate ensures ongoing demand regardless of economic conditions. Build for one trade's specific compliance requirements and expand from there.
