# HN & Indie Hackers Research — 2026-06-29

## Summary

Today's research confirms a strong and accelerating signal: boring-business vertical SaaS is where indie hackers are quietly printing money while VC-backed companies ignore the space. Key findings include multiple YC-backed companies (Ressl AI, Acrely, Cohesive) launching in 2025–2026 specifically targeting trades and blue-collar service businesses — a strong demand validation signal. Revenue benchmarks are compelling: dental analytics SaaS at $16.5M ARR bootstrapped, AV rental ops SaaS at $15–20M ARR bootstrapped 8 years, funeral home software hitting $29k MRR in 12 months from one founder. On HN, the most-engaged threads are about plumber/HVAC millionaires, why trade software still sucks, and the economics of the trades gap. The largest white-space opportunities identified: AI-native dispatching for micro-fleets, pest control back-office automation, funeral home workflow SaaS, dental compliance tools, and simpler field service management for sub-10-technician shops that find Jobber/ServiceTitan overkill.

---

## Zirco.ai — AI Front Desk for Dental Practices

- **Source**: https://news.ycombinator.com/item?id=47385090
- **Additional Links**: https://zircoai.vercel.app/
- **Platform**: HN
- **Type**: Show HN
- **Engagement**: 1 point, 3 comments (low engagement but rich technical detail)
- **Revenue Data**: Beta, no public revenue; 30+ discovery calls with dental practices
- **Boring Business Score**: 5/5
- **Target Industry**: Dental practices
- **Core Value Prop**: End-to-end AI front desk — insurance verification (Playwright + Availity APIs across 10+ carrier portals), inbound call handling via voice AI (Vapi), appointment booking into Dentrix/Open Dental/Eaglesoft, SMS/email reminders. Front desk employees cost $40–50k/yr and turn over at 40% annually.
- **Gap/Opportunity**: Insurance verification is uniquely painful — requires logging into 10+ portals with different formats. Existing solutions are partial. Full-stack automation is rare. HIPAA compliance adds complexity competitors underestimate.
- **Our Angle**: Build a narrower, faster-to-deploy version focused on one workflow (insurance verification only) as an LTD or fixed-fee entry point, then upsell to full front desk automation. Or niche further: pediatric dental, orthodontics.
- **LTD Potential**: 3/5 (compliance requirements make LTD complex but not impossible; a per-seat annual deal is more realistic)

---

## Ressl AI — AI Employees for Trades & Home Services

- **Source**: https://www.ycombinator.com/launches/PXv-ressl-ai-ai-employees-for-the-trades
- **Additional Links**: https://www.ressl.ai/
- **Platform**: HN (YC W26 Launch)
- **Type**: YC Launch / Show HN
- **Engagement**: YC W26 batch company
- **Revenue Data**: Not disclosed; targeting PE roll-up operators and individual shop owners
- **Boring Business Score**: 5/5
- **Target Industry**: HVAC, plumbing, electrical, landscaping, collision repair, roofing
- **Core Value Prop**: AI agents that act as "glue employees" — the people whose only job is copy-pasting between systems, clicking through janky UIs. Agents handle: lead response across every channel, estimating/bidding, procurement coordination, admin/invoicing. Works on top of existing software (ServiceTitan, CCCOne, Jobber, QuickBooks) — nothing gets ripped out.
- **Gap/Opportunity**: "Glue employee" problem is universal in trades — every shop with 5+ field techs has someone whose entire job is managing software. AI agents that can autonomously operate legacy software UIs (via computer-use) are now technically feasible. The $650B market is largely unautomated.
- **Our Angle**: Build a narrow AI agent for a single glue-task (e.g., reading inbound Yelp/Google leads and booking them into Jobber via API) — much simpler scope than Ressl's full suite. Bootstrappable. LTD-compatible.
- **LTD Potential**: 4/5

---

## Acrely — Voice AI CSR for Home Services

- **Source**: https://www.ycombinator.com/launches/OH3-acrely-the-ai-customer-service-representative-for-home-services
- **Additional Links**: https://www.acrely.ai/
- **Platform**: HN (YC S25 Launch)
- **Type**: YC Launch
- **Engagement**: 64 points on YC launch; pivoted from real estate and landed 6 home service customers in 2 weeks
- **Revenue Data**: Not disclosed; pivoted from real estate to home services in 2 weeks and immediately landed 6 customers
- **Boring Business Score**: 5/5
- **Target Industry**: HVAC, plumbing, electrical (home services)
- **Core Value Prop**: AI that answers inbound calls 24/7, books jobs, dispatches techs, handles follow-up — integrates directly with ServiceTitan and other CRMs so jobs are booked, not just recorded. Focuses on the "urgent call because something broke" dynamic of home services.
- **Gap/Opportunity**: HVAC/plumbing shops miss thousands per month in after-hours calls. CSR churn is brutal. The 6-customer-in-2-weeks traction with zero marketing is strong market pull signal. Most AI answering services are generic; trade-specific context (scheduling windows, dispatch logic, part availability) makes the difference.
- **Our Angle**: Build a simpler, cheaper voice AI specifically for a single trade (e.g., HVAC only) with native Jobber integration — without the ServiceTitan enterprise requirement. Jobber has 200k+ SMB contractors. LTD-friendly pricing.
- **LTD Potential**: 4/5

---

## Cohesive — Agentic CRM for Blue-Collar Services

- **Source**: https://www.ycombinator.com/companies/cohesive
- **Additional Links**: https://getcohesiveai.com/
- **Platform**: HN (YC Spring 2025)
- **Type**: YC Company
- **Engagement**: Active YC Spring 2025 company
- **Revenue Data**: Not disclosed; backed by YC
- **Boring Business Score**: 5/5
- **Target Industry**: Janitorial, pressure washing, landscaping, HVAC, pest control (commercial B2B focus)
- **Core Value Prop**: Agentic CRM that fully automates sales and marketing outreach to local businesses and property owners — prospecting, follow-up, missed call recovery — all while the owner is in the field. Targets commercial B2B service contracts, not residential.
- **Gap/Opportunity**: Commercial cleaning/landscaping companies win contracts through persistent outreach to property managers and building owners — the exact workflow business owners can't do while running jobs. Automating the business development side (not just the ops side) is an underserved angle.
- **Our Angle**: Build a stripped-down version for pest control businesses specifically — a CRM that auto-sends proposals to restaurant/commercial property managers, follows up on leads, and tracks contract renewal dates. Very LTD-compatible.
- **LTD Potential**: 4/5

---

## Rentman — AV & Event Production Operations Platform ($15–20M ARR Bootstrapped)

- **Source**: https://www.indiehackers.com/post/tech/building-a-15m-arr-saas-from-a-gap-he-found-at-his-brick-and-mortar-HFriCBQLHukAmdXVEj1q
- **Additional Links**: https://rentman.io/
- **Platform**: Indie Hackers
- **Type**: Revenue milestone / Case study
- **Engagement**: 111 upvotes, 18+ comments
- **Revenue Data**: $15–20M ARR; bootstrapped for 8 years before taking outside capital; 70+ countries
- **Boring Business Score**: 4/5
- **Target Industry**: AV/event production rental companies (equipment rental, crew scheduling, quoting, logistics, invoicing)
- **Core Value Prop**: All-in-one operations platform for AV rental and event production companies — the industry was using spreadsheets or expensive clunky on-prem software. Founder was a 16-year-old DJ/AV rental operator who built it for himself.
- **Gap/Opportunity**: Same pattern (founder from the industry, built for own use, competitors ignored the niche) applies to dozens of similarly-sized "boring" rental verticals: party supply rental, medical equipment rental, construction equipment rental, photography/video gear rental. Each is its own $50–100M ARR opportunity.
- **Our Angle**: Replicate the Rentman model in an adjacent boring rental vertical — e.g., medical/therapy equipment rental, bounce house/party rental, or mobile tool rental. The playbook is proven: cloud-first, simple UI, industry-native workflows.
- **LTD Potential**: 3/5 (equipment rental businesses pay per seat/per job; LTD works as a hook but MRR is the real model)

---

## Practice by Numbers — Dental Practice Analytics ($16.5M ARR Bootstrapped)

- **Source**: https://getlatka.com/blog/how-practice-by-numbers-achieved-16-5m-revenue-in-2026-with-innovative-saas-solutions/
- **Additional Links**: https://getlatka.com/companies/practice-by-numbers
- **Platform**: Indie Hackers / Latka
- **Type**: Revenue milestone
- **Engagement**: Major revenue milestone reported
- **Revenue Data**: $16.5M ARR in 2026; bootstrapped; 1,300+ customers (dental practices), 35–40% annual growth rate; $12.5M ARR in 2025
- **Boring Business Score**: 5/5
- **Target Industry**: Dental practices (practice analytics, AI receptionist, patient communication)
- **Core Value Prop**: 360-degree analytics and operations dashboard for dental offices — tracks production, collections, recall rate, new patients. Added AI receptionist and sentiment analysis. Co-founded by a dentist (Dr. Aditi) who identified the analytics gap from inside her own practice.
- **Gap/Opportunity**: The dental space is dominated by old, expensive practice management systems (Dentrix, Open Dental). A focused analytics/reporting layer on top of existing PMS has proven to be worth $16.5M ARR. Same pattern can be applied to: chiropractic, optometry, veterinary, and physical therapy practices — all use outdated practice management systems with no good analytics layer.
- **Our Angle**: Build a lightweight "Practice Analytics Dashboard" for veterinary clinics — connects to common VMSs (AVImark, Cornerstone, Impromed), shows key metrics (revenue per visit, vaccination recall rate, no-show rate), priced at $199–$399/month. No vet-specific analytics product has hit scale.
- **LTD Potential**: 3/5

---

## FleetFix — Free Trucking Fleet Management (Show HN)

- **Source**: https://news.ycombinator.com/item?id=46468469
- **Additional Links**: N/A
- **Platform**: HN
- **Type**: Show HN (January 2, 2026)
- **Engagement**: Low (new product)
- **Revenue Data**: Free product; no revenue disclosed
- **Boring Business Score**: 4/5
- **Target Industry**: Small trucking/fleet operators
- **Core Value Prop**: Free fleet management website for trucking operators — vehicle management (VIN, license plate, make/model, year, mileage tracking). Entry-level product for owner-operators and small fleets that can't justify $200+/month for enterprise fleet software.
- **Gap/Opportunity**: The trucking fleet management market is dominated by expensive enterprise tools (Samsara at $25–50/vehicle/month, Fleetio, etc.). Small owner-operators (1–10 trucks) are massively underserved. A simple, affordable tool with just scheduling + maintenance tracking + driver logs could capture thousands of small fleets.
- **Our Angle**: Build a "Jobber for small trucking" — scheduling, driver assignment, maintenance alerts, DOT compliance reminders, basic invoicing. $49–99/month flat fee regardless of truck count (under 10). LTD at $299–499. Find customers in r/Truckers, trucking Facebook groups, and owner-operator forums.
- **LTD Potential**: 5/5

---

## Funeral Home Software — Bootstrapped to $29k MRR in 12 Months

- **Source**: https://medium.com/@urano10/vertical-saas-micro-niches-beyond-the-obvious-01e0adf16a98
- **Additional Links**: N/A (founder identity not disclosed in source)
- **Platform**: Indie Hackers (referenced case study)
- **Type**: Revenue milestone
- **Engagement**: Referenced in vertical SaaS analysis article (Dec 2025)
- **Revenue Data**: $29k MRR in 12 months; 45 locations at $650/location/month; CAC $280 via funeral home association newsletter sponsorships; monthly churn 0.9%
- **Boring Business Score**: 5/5
- **Target Industry**: Funeral homes
- **Core Value Prop**: Funeral home scheduling and operations workflow SaaS — built initially on Airtable + Zapier, distributed via industry association newsletters. Market leaders (FrontRunner Professional, Tribute Technology) charge $400–$900/location/month for clunky cloud software.
- **Gap/Opportunity**: The funeral home software market is $1.5B (2024) growing to $3B (2032). Legacy vendors charge high prices for outdated UX. A modern, mobile-first tool with cleaner UX and lower price can win on distribution alone via funeral home association newsletters/trade shows. The 0.9% monthly churn is exceptional — operational lock-in is real.
- **Our Angle**: Build a modern funeral home ops tool (arrangement planning, family portal, staff scheduling, vendor coordination) at $399/location/month. Target independent funeral homes (not corporate chains). Distribution: National Funeral Directors Association (NFDA) newsletter, state funeral director associations.
- **LTD Potential**: 3/5 (recurring model strongly preferred given operational lock-in; LTD works only as acquisition tool)

---

## Craftplan — Production Management for Bakeries (Show HN)

- **Source**: https://news.ycombinator.com/item?id=46847690
- **Additional Links**: N/A
- **Platform**: HN
- **Type**: Show HN (2026)
- **Engagement**: Significant thread; 40+ comments discussing implications for small food production businesses
- **Revenue Data**: Not disclosed; built for founder's wife's bakery
- **Boring Business Score**: 4/5
- **Target Industry**: Artisan bakeries, food production SMBs
- **Core Value Prop**: Production management for bakeries — recipes, inventory, orders, and production batch planning. Solves the core problem: bakeries run on manual spreadsheets or nothing for production scheduling. HN discussion noted this approach (owner building tool for spouse's business) is how the best vertical tools get made.
- **Gap/Opportunity**: No dominant SaaS for small-to-medium food production (bakeries, caterers, meal prep companies, specialty food makers). Existing tools are either spreadsheets or enterprise ERP (too expensive). The HN thread surfaced demand from other small food producers. Adjacent to FSMA compliance tracking (FDA food safety law), which creates regulatory lock-in.
- **Our Angle**: Turn Craftplan's concept into a product for commercial bakeries and small food manufacturers — add FSMA compliance tracking (lot traceability, temperature logs, sanitation records), which adds regulatory stickiness. $149–299/month. Distribution via food industry associations, r/Baking, local baker Facebook groups.
- **LTD Potential**: 4/5

---

## Service Book — Smart Car Maintenance Tracking (Show HN)

- **Source**: https://news.ycombinator.com/item?id=47211736
- **Additional Links**: N/A
- **Platform**: HN
- **Type**: Show HN (March 1, 2026)
- **Engagement**: Moderate
- **Revenue Data**: Free tier + paid plans from $2.99/month; solo developer under Sector Three LLC
- **Boring Business Score**: 3/5
- **Target Industry**: Individual car owners (consumer) / auto fleet operators (B2B)
- **Core Value Prop**: Smart maintenance tracking app for car owners — Smartcar OAuth integration for connected 2015+ vehicles (auto-reads odometer, enables maintenance reminders), manual tracking for older vehicles. Built on Next.js + Supabase.
- **Gap/Opportunity**: Consumer side is crowded (CarFax, Google). But the B2B fleet maintenance tracking angle for small fleets (10–50 vehicles) is underserved. Auto repair shops could also use a tool like this for customer vehicle history tracking and proactive maintenance reminders — a "maintenance reminder CRM" for independent auto shops.
- **Our Angle**: Pivot the concept to an "Auto Shop Customer Retention Tool" — tracks each customer's vehicle, sends automated maintenance reminders (oil change due, inspection coming up, tire rotation), allows the shop to book appointments directly. $99–199/month per shop. AppSumo-friendly.
- **LTD Potential**: 4/5

---

## Dental Compliance SaaS (Auxpanel) — Bootstrapped to Profitability

- **Source**: https://medium.com/@urano10/vertical-saas-micro-niches-beyond-the-obvious-01e0adf16a98
- **Additional Links**: N/A (Auxpanel referenced in vertical SaaS article)
- **Platform**: Indie Hackers (referenced case study, Dec 2025)
- **Type**: Revenue milestone
- **Engagement**: Referenced alongside funeral home and fleet case studies
- **Revenue Data**: Profitable by year 2; estimated $30–50k MRR (100+ dental practices at $300–500/month); zero marketing spend; organic/word-of-mouth only; two-person team (co-founders only)
- **Boring Business Score**: 5/5
- **Target Industry**: Dental practices (OSHA compliance, practice management)
- **Core Value Prop**: Business intelligence + practice management focused on compliance tracking for dental offices. Built by a dentist (Sophia Chou) who knew the workflows intimately. Regulatory compliance creates switching costs: once you're the system of record for OSHA logs, migration creates legal exposure.
- **Gap/Opportunity**: The same regulatory-lock-in dynamic applies to: chiropractic (HIPAA + billing compliance), veterinary (DEA controlled substance logs, USDA inspection records), optometry (vision insurance compliance), physical therapy (Medicare compliance). None of these have a dominant bootstrapped compliance SaaS.
- **Our Angle**: Build a "Chiro Compliance + Analytics Dashboard" — OSHA logs, HIPAA documentation, insurance billing analytics, patient recall tracking. Charge $249/month. Distribution via chiropractic state associations and r/Chiropractic.
- **LTD Potential**: 3/5

---

## Why Is There No Uber for Plumbing/HVAC? (HN Discussion)

- **Source**: https://news.ycombinator.com/item?id=45828971
- **Additional Links**: https://news.ycombinator.com/item?id=41828896 (America's millionaire plumbers thread)
- **Platform**: HN
- **Type**: Discussion
- **Engagement**: 55+ comments; active debate
- **Revenue Data**: N/A (discussion)
- **Boring Business Score**: 5/5
- **Target Industry**: HVAC, plumbing (residential)
- **Core Value Prop**: Thread reveals deep market frustration: customers can't verify quality before hiring, good contractors are booked out 5+ months, pricing opacity is massive. Key insight from thread: "Every decent tradesman always has about 10x the amount of work waiting for them as they can accomplish." This signals not a marketplace opportunity but an *operations efficiency* opportunity — help the same contractors do more jobs.
- **Gap/Opportunity**: Several comments highlight that the real problem is contractors losing jobs due to missed calls, slow follow-up, and no-shows — not a marketplace problem. Contractors who pick up calls and follow up reliably get all the work. A tool that helps a solo HVAC contractor manage their pipeline, follow up on quotes, and schedule efficiently (without the complexity of ServiceTitan) would address this demand. Jobber has this market but at $49–199/month with 60+ features most micro-contractors don't use.
- **Our Angle**: "Jobber Lite" — a $29/month tool for solo HVAC and plumbing contractors (1–3 techs) with just: call log, quote tracker, follow-up reminders, job scheduling, and invoice. No fleet management, no marketing suite. Frictionless mobile-first. LTD at $149.
- **LTD Potential**: 5/5

---

## Fleet Maintenance SaaS — Vehicle DOT Compliance for Small Fleets

- **Source**: https://medium.com/@urano10/vertical-saas-micro-niches-beyond-the-obvious-01e0adf16a98
- **Additional Links**: https://navifleet.com/ (mentioned as example)
- **Platform**: Analysis / Indie Hackers referenced
- **Type**: Market opportunity
- **Engagement**: N/A
- **Revenue Data**: Navifleet: 1,500+ clients, 25% MRR surge after pricing optimization; modeled solo-founder path: 100 fleets x 30 vehicles x $80/vehicle = $240k MRR
- **Boring Business Score**: 5/5
- **Target Industry**: Small trucking fleets, delivery companies, service fleets (10–50 vehicles)
- **Core Value Prop**: Fleet maintenance tracking + DOT compliance for small fleets. Enterprise tools (Samsara, Fleetio, Verizon Connect) start at $25–50/vehicle/month and require 1-year contracts. Small fleets (10–50 vehicles) need maintenance logs, driver inspection reports (DVIRs), and DOT HOS compliance — but can't afford enterprise pricing.
- **Gap/Opportunity**: The 10–50 vehicle segment is genuinely underserved. DOT regulations create compliance lock-in (companies can't easily not have a system — fines are steep). A $99/month flat-rate tool covering DVIRs, maintenance scheduling, and basic dispatch for up to 25 vehicles would undercut every competitor by 60–80%.
- **Our Angle**: "Fleetio Lite" — maintenance logs, DVIR forms, DOT inspection reminders, driver scheduling, $99/month flat for up to 25 vehicles. AppSumo LTD at $199–299. Target r/Trucking, CDL school forums, owner-operator Facebook groups.
- **LTD Potential**: 5/5

---

## Pest Control Back-Office Automation

- **Source**: https://www.indiehackers.com/post/top-5-pest-control-and-equipment-inspection-apps-in-2026-b48a5f6d0f
- **Additional Links**: https://getcohesiveai.com/blog/crm-features-janitorial-landscaping
- **Platform**: Indie Hackers / Cohesive Blog
- **Type**: Market opportunity / Discussion
- **Engagement**: IH post on pest control apps; Cohesive explicitly serves pest control
- **Revenue Data**: Existing players: PestPac, ServicePro, FieldRoutes (acquired by ServiceTitan for $200M) — massive exits in this space
- **Boring Business Score**: 5/5
- **Target Industry**: Pest control companies (residential and commercial)
- **Core Value Prop**: Pest control is an ideal SaaS vertical: recurring service contracts (monthly/quarterly visits), chemical compliance records, technician routing, customer portals for service history. FieldRoutes was acquired by ServiceTitan for $200M+ — but they serve mid-market. Small pest control operators (1–10 techs) find FieldRoutes/PestPac expensive and complex.
- **Gap/Opportunity**: The $200M FieldRoutes acquisition proves the market is real. But the bottom of the market (independent pest control operators with 1–5 trucks) is underserved. A simple CRM + scheduling + chemical log tool at $79/month would serve thousands of small operators.
- **Our Angle**: Build "PestOps Lite" — scheduling, route optimization for recurring stops, chemical usage log (for EPA compliance), quote-to-invoice, customer portal. $79/month or LTD at $249. Target: NPMA (National Pest Management Association) forums, pest control Facebook groups, r/PestControl.
- **LTD Potential**: 5/5

---

## Stagetimer — Remote Countdown Timer for Live Events ($15–20k MRR)

- **Source**: https://www.indiehackers.com/post/tech/turning-a-simple-b2b-solution-into-a-15k-mrr-saas-by-exploiting-a-market-niche-xIxrVwn24DVsN8b3PYD3
- **Additional Links**: https://stagetimer.io/
- **Platform**: Indie Hackers
- **Type**: Revenue milestone / Case study
- **Engagement**: 50 upvotes, 15+ comments
- **Revenue Data**: $15k MRR subscription + one-time payments; 13,000+ accounts; solo founder Lukas Hermann
- **Boring Business Score**: 3/5
- **Target Industry**: Live event production (conferences, TV studios, churches, corporate events)
- **Core Value Prop**: Remote-controlled countdown timer for live events — presenter/speaker management, synchronized across devices, remotely controllable by producers. "One of the simplest ideas I could think of." SEO on low-competition keywords drove organic growth. Shows the power of a focused single-feature tool in an overlooked operational niche.
- **Gap/Opportunity**: The Stagetimer story is the playbook: pick the simplest possible tool in a boring operational niche, nail the SEO, charge for it. The same pattern applies to: stage/event call sheet management, crew scheduling for event production, equipment checkout for AV companies renting to crew members.
- **Our Angle**: The opportunity here is less "compete with Stagetimer" and more "apply the Stagetimer playbook" to an adjacent unsexy operational niche. Example: a simple "vendor payment tracker for event production companies" — who owes who what from the event, with net-30 invoice tracking. No such focused tool exists.
- **LTD Potential**: 5/5
