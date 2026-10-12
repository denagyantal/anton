# HN & Indie Hackers Scan — 2026-10-12

**Agent**: HN & Indie Hackers Scanner
**Date**: 2026-10-12
**Focus**: Boring business SaaS — trades, local services, field service, logistics

---

## Zirco.ai — AI Front Desk Employee for Dental Practices
- **Source**: https://news.ycombinator.com/item?id=47385090
- **Platform**: HN
- **Type**: Show HN (beta post, ~7 months ago)
- **Engagement**: Low upvotes, 3 comments — early stage
- **Revenue Data**: In beta; 30+ dental practices spoken to during discovery
- **Boring Business Score**: 5
- **Target Industry**: Dental offices / healthcare admin
- **Core Value Prop**: AI that handles the full dental front desk — insurance verification (Playwright browser automation across 10+ carrier portals), inbound call scheduling via voice AI, SMS reminders, and appointment booking directly into Dentrix/Open Dental/Eaglesoft. Replaces a $40–50K/yr employee who churns 40% annually.
- **Gap/Opportunity**: Insurance verification is a nightmare (10+ carrier portals, no standard API, different session handling per carrier). Voice AI for healthcare remains underbuilt — needs to handle insurance jargon, multi-step logic, and interruptions. HIPAA compliance adds real moat.
- **Our Angle**: Most dental front-desk AI tools tackle one piece (just scheduling or just verification). A bundled "full-stack front desk" with deep EHR integrations (Dentrix, Eaglesoft, Open Dental) and solid insurance verification automation has clear wedge. Could productize the Playwright/Availity insurance layer as a standalone API for other dental tools.
- **LTD Potential**: 2 (HIPAA compliance and multi-year PMS integrations make LTD hard; monthly recurring is the right model here)

---

## Rainslice.ai — Autonomous Home Services Business Platform
- **Source**: https://news.ycombinator.com/item?id=48769010
- **Platform**: HN
- **Type**: Show HN (recent)
- **Engagement**: Low comments; early access model
- **Revenue Data**: Running "entirety" of 3 cleaning companies in California
- **Boring Business Score**: 4
- **Target Industry**: Residential home services — cleaning, HVAC, plumbing (any dispatched field service)
- **Core Value Prop**: AI agent that runs a home services business end-to-end: handles inbound calls/SMS, creates quotes, dispatches workers, runs ads, follows up leads, handles customer support — 24/7.
- **Gap/Opportunity**: The claim is bold (full autonomy) but the wedge is real: missed calls and slow response are the #1 revenue killer for home service businesses. Cleaning companies have the simplest workflows to automate first. True 24/7 coverage without hiring is hugely valuable.
- **Our Angle**: Rather than "autonomous business," position as AI dispatcher + voice answering specifically for cleaning or HVAC companies. Narrower scope = easier to prove ROI. Integrate with Jobber or Housecall Pro for dispatching rather than replacing the whole stack.
- **LTD Potential**: 2 (usage-based value means LTD doesn't make sense; per-job or per-seat SaaS is right)

---

## Blue-Collar Instant Estimator — Micro-SaaS for Excavation/Foundation Contractors
- **Source**: https://www.indiehackers.com/post/how-we-built-a-micro-saas-estimator-to-automate-quotes-for-a-blue-collar-business-and-boosted-conversions-by-35-e976b94354
- **Platform**: Indie Hackers
- **Type**: Revenue milestone / build story (July 2026)
- **Engagement**: High quality post, featured on IH
- **Revenue Data**: ~$500 MRR from 6 contractors at $79/month; nearly zero churn; $18/month to run
- **Boring Business Score**: 5
- **Target Industry**: Excavation, foundation, site prep — extensible to roofing, paving, concrete, any quote-heavy trade
- **Core Value Prop**: A 5-question web form that returns an instant price range in under 60 seconds, then books a site visit. Replaces the 2–3 day quoting delay where leads go cold. Conversion went up 35% in one quarter with identical traffic.
- **Gap/Opportunity**: The real insight: "trades don't buy software, they buy booked jobs." Speed of response beats price and reviews. Most trades still answer in hours or next morning — the bar is embarrassingly low. Six trades have zero dedicated takeoff/estimating software. This pattern (rules-engine estimator + SMS + slot booking) is highly replicable across roofing, concrete, HVAC, painting, fencing.
- **Our Angle**: Build a white-label "Instant Quote Engine" for trade verticals — one configurable platform where a roofing contractor, fencing company, or HVAC installer can set up their own pricing rules and get a branded estimator in a day. $79–149/month per contractor. Distribution: trade supply houses, contractor associations, Facebook groups.
- **LTD Potential**: 4 (simple, low-cost tool; LTD at $297–500 makes sense for the one-time setup + perpetual access model)

---

## JobNook — Simple Business Tool for Trade Contractors
- **Source**: https://www.indiehackers.com/post/jobnook-a-simple-business-tool-for-trade-contractors-looking-for-beta-feedback-hn5sxlXIzxNZwOoitJCs
- **Platform**: Indie Hackers
- **Type**: Show IH / beta feedback request (August 2026)
- **Engagement**: 4 upvotes, 13 detailed comments
- **Revenue Data**: Free beta; pricing set at $19.99 Starter / $49 Pro
- **Boring Business Score**: 4
- **Target Industry**: Independent trade contractors — electricians, plumbers, HVAC, painters
- **Core Value Prop**: Lightweight app for independent contractors to manage customers, jobs, quotes, invoices, and get paid online — without the complexity of Jobber or Housecall Pro. "Simple over feature-rich" for the huge segment still on paper/texts/spreadsheets.
- **Gap/Opportunity**: Biggest competitor is pen and paper. Jobber/$70+/month is too complex and expensive for solo operators. The IH comments reveal a real distribution insight: "trusted by their accountant" — if the accountant uses QuickBooks, they recommend the contractor use QuickBooks-linked tools. Also: verified customer portfolio / ratings system is an unbuilt wedge.
- **Our Angle**: An accountant-first distribution strategy: partner with small business accountants who service trade clients, offer QuickBooks/Xero sync, and let the accountant recommend the tool. A "contractor profile + verified reviews" page that gets indexed in Google ("find a plumber in [city]") creates organic traffic and doubles as a lightweight directory.
- **LTD Potential**: 4 (simple tool, clear LTD use case, low support overhead per customer)

---

## Construction Gaps Below Procore — 5 Validated Underserved Products
- **Source**: https://www.indiehackers.com/post/procore-is-worth-8b-heres-what-they-don-t-build-and-won-t-e985092d14
- **Additional Links**: ConTechFinder directory (catalogued 570 construction software tools)
- **Platform**: Indie Hackers
- **Type**: Market analysis / opportunity post (April 2026)
- **Engagement**: High quality IH post
- **Revenue Data**: Market research only — author runs paid directory
- **Boring Business Score**: 5
- **Target Industry**: Construction — solo GCs, small crews, residential remodelers, sub-trades
- **Core Value Prop**: Procore ($8B market cap, $100K+ ACV sales motion) cannot profitably serve the 1.5M US construction firms with <10 employees. Five validated gaps: (1) $29/month daily log app for solo GCs, (2) single-trade takeoff tool (6 trades with zero dedicated software), (3) $49/month OSHA phone-first checklist app, (4) residential remodeler CRM, (5) $19-29/month multi-jurisdiction permit tracker for solo contractors.
- **Gap/Opportunity**: 55% of construction software vendors won't show price without sales call. Only 45% have a mobile app. 9% target solo operators. All five gaps are phone-first problems. The OSHA checklist app ($49/month vs. $200/seat/month incumbents) is the most immediate indie opportunity.
- **Our Angle**: OSHA Daily Checklist App — phone-first, no login complexity, pre-built templates per trade (roofing, electrical, excavation). At $49/month with no competitor under $200, the price-point gap is essentially open. Distribution: OSHA.gov compliance reminder emails, contractor Facebook groups, supply house partnerships.
- **LTD Potential**: 5 (simple compliance checklist app is perfect LTD candidate: one-time setup, low churn, clear value)

---

## ZenMaid — $3M/yr Scheduling SaaS for Cleaning Services
- **Source**: https://www.indiehackers.com/post/tech/from-a-cleaning-side-hustle-to-a-3m-yr-saas-for-cleaning-services-suhsqkDZB1zIwRmXxrFm
- **Additional Links**: https://get.zenmaid.com/
- **Platform**: Indie Hackers
- **Type**: Revenue milestone / founder story (February 2025)
- **Engagement**: 28 upvotes, multiple comments
- **Revenue Data**: $250K MRR / $3M ARR; bootstrapped; founded 2013; 11 years to this point
- **Boring Business Score**: 5
- **Target Industry**: Residential maid/cleaning services
- **Core Value Prop**: Scheduling software purpose-built for maid services — solves recurring schedule management, customer communication, and billing for cleaning businesses that are too small for generic field service software but have complex recurring schedules.
- **Gap/Opportunity**: ZenMaid dominates the cleaning-specific niche. Adjacent niches with identical workflow patterns and zero dedicated tool: pest control (recurring visits, route optimization, chemical logs), pool service (recurring, route-based, chemical tracking), window cleaning, carpet cleaning, pressure washing. Each is a smaller TAM but with no ZenMaid equivalent.
- **Our Angle**: "ZenMaid for pest control" — recurring service scheduling, technician route optimization, chemical usage logging (compliance requirement), customer portal for service history. Pest control companies are required to maintain treatment records by law, creating a compliance moat. ~$49–99/month per technician.
- **LTD Potential**: 3 (compliance/record-keeping creates stickiness; LTD possible but recurring compliance updates favor monthly)

---

## BasinCheck — Safety Audit & Compliance Tool for Oil & Gas Contractors
- **Source**: https://www.indiehackers.com/post/crossed-1-2k-mrr-with-two-customers-the-whole-growth-strategy-was-one-underpriced-pilot-GeZfVMqKBl7828E9PIHJ
- **Platform**: Indie Hackers
- **Type**: Revenue milestone (July 2026)
- **Engagement**: Featured on IH
- **Revenue Data**: $1.2K MRR with 2 customers; $860/month renewal (3x from $299 pilot); solo founder from Poland selling to Texas oilfield
- **Boring Business Score**: 5
- **Target Industry**: Oil & gas contractors, industrial safety teams
- **Core Value Prop**: Digital safety audit and compliance tool for US oil & gas contractors — replaces paper-based safety checklists, incident reports, and compliance documentation required for oilfield work.
- **Gap/Opportunity**: Pilot strategy worked: cheap 6-month pilot → heavy iteration → renewal at 3x → customer reference → compound growth. Industrial compliance tools (oilfield, mining, heavy construction) are massively underserved at the sub-enterprise level. Big players (Intelex, Enablon) cost $200+/seat/month. A mobile-first $99–299/month tool for 5–50 person crews has almost no competition.
- **Our Angle**: Clone the model for adjacent industrial verticals: roofing safety compliance, electrical contractor OSHA documentation, demolition/abatement crews. The compliance requirement creates guaranteed recurring spend — a safety audit missed is a fine or fatality. Distribution via safety officers, trade associations.
- **LTD Potential**: 2 (compliance requirements change; customers need ongoing updates; monthly recurring strongly preferred)

---

## HandyPay — Deposit & Payment Tool for Service Businesses
- **Source**: https://www.indiehackers.com/post/the-boring-way-we-reached-1k-mrr-in-less-than-60-days-61739ba3d9
- **Additional Links**: https://handypay.me/
- **Platform**: Indie Hackers
- **Type**: Revenue milestone (January 2026)
- **Engagement**: IH post
- **Revenue Data**: $1K MRR in under 60 days; door-to-door to spas, salons, service businesses
- **Boring Business Score**: 4
- **Target Industry**: Local service businesses — spas, salons, cleaning, pet grooming, mobile services
- **Core Value Prop**: Simple way for service businesses to collect deposits and reduce no-shows. No funnels, no ads — founder walked into businesses and set them up on the spot.
- **Gap/Opportunity**: Trust and simplicity beat features for this customer. The "set up in person" distribution model is highly effective but hard to scale. Real problem: no-shows cost service businesses 15–20% of revenue. Deposit collection with an SMS reminder sequence is the minimum viable product.
- **Our Angle**: Vertical-specific: "No-show protection for HVAC companies" — frame the deposit/payment tool around the specific lost-revenue math of a cancelled HVAC appointment ($150–500 per missed job). Include scheduling confirmation + cancellation fee enforcement. Integrate with Jobber/Housecall Pro as an add-on.
- **LTD Potential**: 4 (simple payment tool, no ongoing compliance, LTD at $197–297 viable)

---

## Latchel (YC W19) — 24/7 Property Maintenance Coordination as a Service
- **Source**: https://news.ycombinator.com/item?id=19370333
- **Additional Links**: https://latchel.com/
- **Platform**: HN
- **Type**: Launch HN (YC W19, 2019; follow-up comment 2023)
- **Engagement**: 76 points, 69 comments
- **Revenue Data**: Not disclosed publicly; managing hundreds of thousands of rental units
- **Boring Business Score**: 5
- **Target Industry**: Residential property management — third-party property managers
- **Core Value Prop**: 24/7 emergency maintenance coordination as a service. Tenants call Latchel, not the property manager. Latchel dispatches contractors, tracks work orders, and handles all communication. Property managers pay monthly subscription + 10% contractor referral fee.
- **Gap/Opportunity**: Property managers are extremely thin-margin businesses (the post is explicit about this). Maintenance coordination = communications problem + contractor reluctance to adopt new processes + tenant low portal adoption. The 2023 follow-up reveals Latchel's real challenge: property owners (not managers) could afford the service, but the average US rental owner has <2 units. Distribution challenge remains.
- **Our Angle**: AI-first maintenance triage: instead of human coordination, use voice AI to triage tenant calls (emergency vs non-emergency), auto-dispatch for common issues (clogged drain, HVAC filter), send photo-based diagnostic requests to tenants before rolling a truck. Reduces dispatch cost by 40–60%. Target the 50–500 unit property management company that can't afford Latchel's full service.
- **LTD Potential**: 2 (service + software hybrid; monthly operational cost makes LTD unsuitable)

---

## Propify (YC W23) — API Aggregator for Property Management Systems
- **Source**: https://news.ycombinator.com/item?id=35170955
- **Additional Links**: https://getpropify.com/
- **Platform**: HN
- **Type**: Launch HN (March 2023)
- **Engagement**: Strong HN discussion
- **Revenue Data**: Not disclosed; YC-backed, Series A stage
- **Boring Business Score**: 4
- **Target Industry**: Proptech / property management software ecosystem
- **Core Value Prop**: "Plaid for real estate" — unified REST API over Yardi, RealPage, Entrata, Buildium, Rent Manager, Rentvine, AppFolio, MRI. Companies building screening, maintenance, parking, or security tools for property managers integrate once with Propify instead of building 8+ fragile integrations.
- **Gap/Opportunity**: PMS APIs are notoriously archaic, undocumented, and unreliable. The consultant/implementation model required (customers need their own relationship with each PMS) limits self-serve growth. Adjacent opportunity: a lightweight read-only version for small proptech builders who just need tenant data and work order status — not the full sync.
- **Our Angle**: "Mini-Propify for indie builders" — a simpler, cheaper API wrapper targeting the long tail of proptech builders who need basic Buildium/AppFolio data sync but can't afford enterprise integration fees. $99–299/month developer tier. Also: apply the same aggregation model to FSM software (Jobber, Housecall Pro, ServiceTitan API aggregation for add-on builders).
- **LTD Potential**: 2 (API/infrastructure product — ongoing reliability and updates required; monthly only)

---

## NexusBMS / AutomataNexus — Commercial Building Automation Platform on Raspberry Pi
- **Source**: https://news.ycombinator.com/item?id=47198743
- **Platform**: HN
- **Type**: Show HN (built Aegis-DB; the BMS is the real product)
- **Engagement**: Strong Show HN post; in production across 16 commercial facilities
- **Revenue Data**: 16+ live facilities (Taylor University, Element Labs, schools, retirement facilities); 50+ Pi edge controllers deployed
- **Boring Business Score**: 5
- **Target Industry**: Commercial building automation — HVAC controls, boilers, cooling towers, industrial IoT
- **Core Value Prop**: Full-stack commercial BMS (Building Management System) running on Raspberry Pi 4/5 edge controllers with Hailo NPU for ML-based predictive maintenance. BACnet/Modbus/I2C integration with real HVAC equipment. Edge-first, offline-capable, CRDT sync to central server. Fraction of the cost of Siemens/Johnson Controls enterprise BMS.
- **Gap/Opportunity**: Enterprise BMS (Siemens, Johnson Controls, Honeywell) costs $50K–$500K+ per facility and requires certified integrators. Mid-market facilities (schools, churches, small commercial, retirement homes) are completely underserved. A $500–2000/month managed BMS subscription for 5–50K sq ft buildings is essentially an open market.
- **Our Angle**: Package NexusBMS-style capability as a managed service for facilities managers who don't want to run their own Pi fleet: ship pre-configured hardware + cloud dashboard + support. Monthly subscription replaces a building engineer. Target: school districts, churches, small office parks, restaurant chains.
- **LTD Potential**: 1 (hardware + ongoing managed service; LTD incompatible with the model)

---

## Multi-Brand Home Services CRM Gap (HN Discussion Signal)
- **Source**: https://news.ycombinator.com/item?id=46891272
- **Platform**: HN
- **Type**: Discussion comment (February 2026)
- **Engagement**: Comment within a broader "enterprise vibe coding" thread
- **Revenue Data**: N/A — user revealing internal pain
- **Boring Business Score**: 4
- **Target Industry**: Multi-brand home services operators (residential electric, HVAC, plumbing, cleaning — multiple franchise/brand entities under one owner)
- **Core Value Prop**: A commenter running multiple residential service brands (electric, HVAC, etc.) reveals they had to build their own CRM because no SaaS CRM could aggregate data across all their logos/brands without running "multiple CRMs." They're vibe-coding to eliminate $5M+ in annual SaaS spend.
- **Gap/Opportunity**: Multi-brand/multi-trade home service operators are a growing segment (private equity roll-ups of HVAC/plumbing companies). ServiceTitan is too expensive and too per-brand. A single CRM designed for a 3–10 brand home services group that aggregates job data, revenue, technician performance, and marketing across all entities doesn't exist at the $500–2000/month price point.
- **Our Angle**: "Home Services Group CRM" — purpose-built for the multi-brand operator. Single dashboard, multi-brand job data, consolidated P&L per brand, shared technician scheduling across brands, combined marketing spend analytics. Target: PE-backed roll-ups and owner-operators with 3+ service brands.
- **LTD Potential**: 1 (enterprise multi-brand tool; LTD not appropriate — high support, ongoing product requirements)

---

## YardBook (YC W16) — Software Platform for Landscapers
- **Source**: https://news.ycombinator.com/item?id=11075439
- **Additional Links**: https://yardbook.com/
- **Platform**: HN
- **Type**: Show HN / YC launch (2016)
- **Engagement**: Strong HN discussion; YC-backed
- **Revenue Data**: Established product, free + paid tiers; significant user base in landscaping
- **Boring Business Score**: 5
- **Target Industry**: Landscaping, lawn care, gardening
- **Core Value Prop**: "Salesforce and QuickBooks for landscapers" — scheduling, routing optimization, customer management, billing, door-to-door route sequencing. Purpose-built for a vertical where generic software misses industry-specific needs (seasonal contracts, per-property billing, crew routing).
- **Gap/Opportunity**: YardBook exists but is not dominating. Competitors Jobber and Housecall Pro compete. The lawnsite.com forum community is massive and active — landscapers want software tailored to their niche, not generic FSM. Remaining gap: AI-powered seasonal scheduling, automatic recurring contract renewal, weather-integrated rescheduling, material/mulch cost tracking per job.
- **Our Angle**: A lawn care sub-niche play: "mowing business accounting" — combine simple job tracking with auto-generated P&L by property, mowing cost vs. revenue per lawn, seasonal contract auto-renewal reminders, and QuickBooks sync. Position as "the financial clarity tool for lawn care operators," not just another scheduler.
- **LTD Potential**: 3 (vertical SaaS with decent LTD potential; seasonal nature of the business means value is clear but ongoing updates needed)

---

## Local Classifieds + Service Directory ($25K MRR)
- **Source**: https://www.indiehackers.com/post/five-years-in-how-a-boring-local-classifieds-site-quietly-crossed-25k-mrr-4d2395fb81
- **Platform**: Indie Hackers
- **Type**: Revenue milestone (July 2026)
- **Engagement**: Featured IH post
- **Revenue Data**: $25K+ MRR; ~55% featured listings, 25% power-seller subs, 15% escrow fees, 5% directory placements (plumbers, tutors, repair shops)
- **Boring Business Score**: 4
- **Target Industry**: Local service businesses — plumbers, cleaning services, repair shops, tutors
- **Core Value Prop**: Hyperlocal classifieds site built around local trust. The directory line (verified business profiles for local tradespeople and service providers) is explicitly called out as the most exciting, steadiest revenue stream — "it doesn't depend on someone having something to sell today."
- **Gap/Opportunity**: The 5% directory revenue line (local plumbers, cleaning services paying for verified profiles) is the most underexploited part. A standalone "local trades directory with verified reviews and booking" — separate from classifieds — could be 10x bigger. Think: Angi/HomeAdvisor but cheaper, with no lead auction model that trades distrust for spend.
- **Our Angle**: Verified local service directory with no lead-auction model. Flat monthly fee ($29–79/month) for a verified profile + reviews widget. SEO-optimized "best plumber in [city]" pages per trade per geography. Revenue from subscriptions, not lead fees — contractors keep their margin, trust the platform.
- **LTD Potential**: 5 (directory listings are perfect LTD candidates — one-time setup, low ongoing cost, clear value)

---

## Summary: Top Opportunities by Actionability

| Rank | Idea | Score | Why Now |
|------|------|-------|---------|
| 1 | Trade Instant Quote Engine (excavation/roofing/HVAC) | 5 | Proven at $500 MRR; replicable formula; massive underserved market |
| 2 | OSHA Checklist App for Small Contractors | 5 | Zero competition under $200/seat; $49/month open price band; compliance = guaranteed spend |
| 3 | Pest Control / Pool Service Scheduling (ZenMaid clone) | 5 | ZenMaid = $3M/yr proof; identical workflow in adjacent verticals with no dedicated tool |
| 4 | AI Dental Insurance Verification + Front Desk | 5 | Deep technical moat; $40-50K/yr pain point; 30+ validated practices |
| 5 | Verified Local Trades Directory (no lead auction) | 4 | Angi is despised; contractors pay for trust over leads; clear LTD path |

---

## Key Meta-Findings

1. **Speed beats price in trades**: The #1 insight across multiple posts — responding to a job lead within 60 seconds vs. 3 hours is worth more than a 10% price difference. Any tool that makes a trade contractor respond faster has an obvious ROI story.

2. **Compliance = guaranteed recurring spend**: Businesses legally required to keep records (safety audits, OSHA logs, pest control chemical logs, insurance documentation) will pay monthly indefinitely. BasinCheck at $860/month from 2 customers is a small proof, but the model is sound.

3. **Distribution insight**: Trades don't discover tools on Product Hunt. They discover them through: (a) their accountant, (b) their supply house, (c) other contractors in Facebook groups, (d) trade associations. Building for this channel from day one is the difference between traction and silence.

4. **Procore/ServiceTitan pricing creates open sub-$100/month market**: Both giants require $100K+ ACV sales motions. Everything below that is structurally underserved. 9% of construction software vendors target solo operators. 55% won't show a price without a sales call.

5. **"Boring directory" model works**: $25K MRR from a local classifieds site. The directory component (plumbers and service businesses paying for verified profiles) is the most stable and scalable revenue line — not the listings.
