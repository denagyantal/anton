# HN & Indie Hackers Scan — 2026-06-19

## Summary

Today's scan of Hacker News and Indie Hackers reveals strong and consistent validation for boring-business vertical SaaS. The clearest signal: well-funded ($20M–$450M valuation) startups like Netic and CurbWaste are targeting HVAC/plumbing/waste hauling — markets that are enormous ($100B+), deeply unglamorous, and still running on spreadsheets. Meanwhile the indie hacker space is producing real case studies in niche-specific operations software (Skimmer at $5.7M revenue for pool service; Rentman at $15M+ ARR for AV/event equipment rental; Tank Track dominating septic/grease trap). The most notable HN post — Craftplan, a production management tool a developer built for his wife's bakery (577 points, 167 comments) — sparked intense debate about whether AI-assisted custom software is displacing generic SaaS for small manufacturers. That debate itself is a signal: the SMB software market for boring verticals is ripe. Key themes: (1) blue-collar AI CRM is a hot category; (2) equipment/inventory management for niche operators is underserved; (3) field service dispatch for single-trade niches commands high willingness to pay; (4) the open-source/self-hosted angle for boring-biz ops tools is gaining HN attention.

---

## [Netic — AI Revenue Engine for HVAC, Plumbing, Roofing, Pest Control]
- **Source**: https://www.inc.com/chloe-aiello/this-startup-gives-ai-superpowers-to-hvac-plumbing-and-roofing-companies/91266172
- **Additional Links**: https://greylock.com/portfolio-news/introducing-netic-the-ai-revenue-engine-for-americas-essential-services/ | https://techfundingnews.com/netic-ai-raises-23m-for-plumbers-roofers-home-services/
- **Platform**: HN / Industry Press
- **Type**: Funded startup / market validation signal
- **Engagement**: Greylock portfolio feature; $43M total raised (Series A + B); $450M valuation
- **Revenue Data**: 1,700% revenue growth in under a year; on track for 2,100% growth in 2025; serves companies $20M–billions in revenue
- **Boring Business Score**: 5/5
- **Target Industry**: HVAC, plumbing, roofing, pest control, appliance maintenance, solar
- **Core Value Prop**: AI agents autonomously handle inbound calls, schedule appointments, manage follow-ups, and optimize revenue for home service companies — without anyone touching the phone
- **Gap/Opportunity**: Netic targets enterprise ($20M+ revenue) home service companies. The SMB segment (1–10 techs, $500K–$5M revenue) is wide open. These shops cannot afford $450M-valuation pricing but need exactly the same automation: missed call capture, SMS follow-up, estimate follow-through, seasonal reminder campaigns
- **Our Angle**: Build a Netic-lite for the solo/small HVAC or plumbing shop. Single-trade focus (e.g., just HVAC), affordable flat-rate pricing ($99–$199/mo), plug-and-play SMS + call-capture AI without enterprise onboarding. Distribution via HVAC Facebook groups, PHCC associations, local trade expos
- **LTD Potential**: 3/5 (strong MRR play, LTD viable as launch mechanism via AppSumo)

---

## [Cohesive AI — Agentic CRM for Blue-Collar Commercial Services]
- **Source**: https://www.ycombinator.com/launches/NWQ-cohesive-ai-crm-for-blue-collar-businesses
- **Additional Links**: https://getcohesiveai.com/ | https://www.linkedin.com/posts/y-combinator_cohesive-ai-yc-x25-is-the-agentic-crm-for-activity-7332842967365234689-KWGz
- **Platform**: HN (via YC X25 launch)
- **Type**: YC-backed launch / market validation
- **Engagement**: YC X25 batch; 350+ commercial cleaning, landscaping, pest control customers
- **Revenue Data**: Not disclosed; YC-backed (early stage)
- **Boring Business Score**: 5/5
- **Target Industry**: Commercial cleaning, janitorial, landscaping, pressure washing, HVAC, pest control
- **Core Value Prop**: Fully automates sales and marketing outreach to local businesses — researches targets, sends personalized multi-channel outreach (email, phone, SMS), handles replies and missed calls, books appointments, even while owner is on-site servicing clients
- **Gap/Opportunity**: Cohesive is YC-backed and focused on outbound lead generation. The gap is CRM + operations (scheduling, invoicing, job tracking) in a single tool for the same audience. Cohesive helps you get customers; there's still no affordable, combined "get customers + run jobs" platform for these micro-businesses
- **Our Angle**: All-in-one ops + light CRM for commercial cleaning/janitorial companies specifically. Bundle inbound AI (SMS, call capture) with job scheduling, recurring billing, and team clock-in. Target commercial cleaning companies with 3–15 employees who are the sweet spot Cohesive doesn't fully serve with the full ops layer
- **LTD Potential**: 4/5

---

## [Rentman — $15M+ ARR Operations Platform for AV/Event Equipment Rental]
- **Source**: https://www.indiehackers.com/post/tech/building-a-15m-arr-saas-from-a-gap-he-found-at-his-brick-and-mortar-HFriCBQLHukAmdXVEj1q
- **Additional Links**: https://rentman.io/
- **Platform**: Indie Hackers
- **Type**: Revenue milestone case study (published April 29, 2026)
- **Engagement**: 111 upvotes, 11 bookmarks, 14 substantive comments
- **Revenue Data**: $15M–$20M ARR ($1.25M/month); bootstrapped for 8 years before raising
- **Boring Business Score**: 4/5
- **Target Industry**: AV production, equipment rental, lighting/staging/broadcast companies, event production
- **Core Value Prop**: Single operations platform handling equipment rental inventory, crew scheduling, quoting, logistics, invoicing for production companies — replacing 5 disconnected tools
- **Gap/Opportunity**: Rentman serves 70+ countries and is heading toward $20M ARR, but the core insight — "built by someone who lived the problem" — points to adjacent niches where the same playbook works: medical equipment rental, construction tool rental, party/tent rental, photography gear rental. Each has operators still using spreadsheets or outdated desktop software. Commenters explicitly named "HVAC, dental, restoration" as verticals where the same moat is quietly being built
- **Our Angle**: Apply the Rentman model to party/tent rental companies (a $5B+ industry with almost no modern software). Handle inventory availability, customer bookings, delivery logistics, setup crew scheduling, damage deposits — all in one tool. Existing solutions (QuoteIQ, EZRentOut) are generic; nobody owns "party rental" deeply
- **LTD Potential**: 3/5

---

## [Craftplan — Production Management for Small Manufacturers/Bakeries]
- **Source**: https://news.ycombinator.com/item?id=46847690
- **Additional Links**: https://github.com/puemos/craftplan | https://puemos.github.io/craftplan/
- **Platform**: Hacker News
- **Type**: Show HN (February 1, 2026)
- **Engagement**: 577 points, 167 comments — Top 20 Show HN of 2026
- **Revenue Data**: Open-source / not monetized (yet)
- **Boring Business Score**: 4/5
- **Target Industry**: Small-batch manufacturers: artisan bakeries, soap makers, candle makers, breweries, food producers
- **Core Value Prop**: ERP for micro-manufacturers — recipe/BOM management with cost rollup, inventory with lot traceability and allergen tracking, order management, production batch planning, purchasing. Built in Elixir/Phoenix/PostgreSQL, self-hostable under AGPL
- **Gap/Opportunity**: The 577-point HN reception and intense 167-comment debate confirms massive unmet demand. Small manufacturers are running production on spreadsheets. The open-source version exists but no hosted SaaS layer. The comment thread explicitly validates the pattern: small businesses desperately need simple, affordable operational software and are being failed by generic ERP. A cloud-hosted version at $49–$99/month with white-glove onboarding could convert the massive "I need this" signal into revenue
- **Our Angle**: Build the hosted SaaS version of Craftplan — branded for specific niches (bakery, brewery, soap/candle maker). Focus on: recipe costing, batch production planning, ingredient inventory, customer order tracking. Keep it dead simple. Target via Etsy-seller communities, small food producer Facebook groups, bakery trade associations. $49/mo per business, LTD at $149 on AppSumo
- **LTD Potential**: 5/5

---

## [Skimmer — Pool Service Software at $5.7M Revenue]
- **Source**: https://getlatka.com/companies/getskimmer.com
- **Additional Links**: https://www.getskimmer.com/
- **Platform**: Industry research / Latka data
- **Type**: Revenue milestone / validated market proof
- **Engagement**: 35,000+ pool pros using platform; 7,000+ customers
- **Revenue Data**: $5.7M ARR; 52 employees; bootstrapped 8+ years
- **Boring Business Score**: 5/5
- **Target Industry**: Pool service companies (residential and commercial pool maintenance)
- **Core Value Prop**: Route optimization, chemical tracking, automated QuickBooks billing, customer history, technician tracking — all specific to pool service workflows
- **Gap/Opportunity**: Skimmer proves the vertical pool service market is real. But $5.7M with 35K pros means average revenue per customer is low (~$13/mo). The gap: premium features these pros need but won't pay for in a basic tool — AI-powered chemical dosing recommendations, equipment failure prediction, customer-facing scheduling portal, franchise/multi-location management. Also: adjacent niches (irrigation, lawn treatment spray) have identical workflows and zero dedicated software
- **Our Angle**: Build "Skimmer for irrigation service companies" — same route + customer + scheduling model but for irrigation technicians who currently have zero dedicated tool. ~50,000 irrigation service businesses in the US, pricing $79–$129/mo. Distribution via National Irrigation Association events, irrigation contractor Facebook communities
- **LTD Potential**: 4/5

---

## [Tank Track — Software for Septic, Grease Trap & Portable Toilet Operators]
- **Source**: https://tank-track.com/
- **Additional Links**: https://myquoteiq.com/industries/septic-services-software/
- **Platform**: Industry research
- **Type**: Validated niche product / market proof
- **Engagement**: "#1 Most Recommended Software in Pumper Nation" (septic industry trade magazine community); active customer reviews
- **Revenue Data**: Not publicly disclosed; established player with pricing plans
- **Boring Business Score**: 5/5
- **Target Industry**: Septic pumping, grease trap service, portable toilet rental operators
- **Core Value Prop**: Job scheduling, route optimization, customer management, digital service manifests, billing — purpose-built for pumper truck operators who service septic systems, restaurant grease traps, and porta-potty rentals
- **Gap/Opportunity**: Tank Track exists but the UX appears dated and not mobile-first. The grease trap market alone (mandatory pumping for every commercial kitchen in the US, usually quarterly) represents a recurring revenue stream for haulers that has no modern scheduling/compliance tracking tool. Competitors are Tank Track and old desktop software. AI-enabled compliance reminders (auto-alerts when a customer is 2 weeks from their required pump date, based on local health codes) would be a differentiated feature no current player has
- **Our Angle**: Modern mobile-first SaaS for grease trap service companies specifically — the subset of Tank Track's market that services commercial kitchens. Features: health-code compliance calendar, automated customer reminders, photo documentation of pumps, DOT manifest tracking. $79–$149/mo. Distribution via restaurant supply expos, National Restaurant Association channels, grease trap hauler Facebook groups
- **LTD Potential**: 4/5

---

## [Micasa — House Maintenance Tracker (Terminal UI)]
- **Source**: https://news.ycombinator.com/item?id=47075124
- **Additional Links**: https://micasa.dev/ | https://ubos.tech/news/micasa-terminal%E2%80%91based-home-maintenance-platform-transforms-home-management/
- **Platform**: Hacker News
- **Type**: Show HN (February 19, 2026)
- **Engagement**: 657 points, 218 comments — #15 Show HN of 2026
- **Revenue Data**: Open source / free (no monetization)
- **Boring Business Score**: 3/5
- **Target Industry**: Homeowners (B2C) — but the underlying demand points to property management B2B opportunity
- **Core Value Prop**: Terminal-based TUI for tracking everything about your home — maintenance tasks, appliances, vendors, quotes, documents. Local-first, SQLite, no cloud, no subscription
- **Gap/Opportunity**: 657 points on HN for a house maintenance tracker confirms latent demand. The HN comment thread called out the real observation: "most SaaS companies are just a curated domain model + CRUD." The property management version of this concept — for landlords managing 1–20 units — has this exact pain: tracking maintenance requests, vendor contacts, appliance histories, lease dates, inspection schedules. Existing property management tools (Buildium, AppFolio) are priced for professional property managers with 100+ units. The 1–20 unit landlord is completely underserved
- **Our Angle**: Simple property management tool for small landlords (1–10 units). Focus exclusively on: maintenance request tracking, vendor management, appliance/system history per unit, lease renewal reminders, move-in/move-out checklists. No rent collection complexity. $19–$49/mo. Distribution: BiggerPockets community, real estate investor Facebook groups, landlord Reddit communities. LTD at $79 to seed AppSumo reviews
- **LTD Potential**: 5/5

---

## [CurbWaste — Waste Hauler Operations Software ($28M Series B)]
- **Source**: https://www.prnewswire.com/news-releases/curbwaste-raises-28m-to-bring-modern-tech-to-the-backbone-of-the-american-economy-independent-waste-haulers-302588009.html
- **Additional Links**: https://www.curbwaste.com/ | https://trashlab.com/
- **Platform**: Industry news (validated by funding)
- **Type**: Series B funding announcement (October 2025)
- **Engagement**: $50M total funding; 150 haulers; direct competitor TrashLab also active
- **Revenue Data**: Not disclosed; Series B implies meaningful ARR
- **Boring Business Score**: 5/5
- **Target Industry**: Independent waste haulers, dumpster rental companies, residential garbage collection
- **Core Value Prop**: End-to-end platform replacing dispatch boards, paper tickets, and generic field service apps for independent waste haulers — dispatch, billing, route optimization, container tracking, customer management
- **Gap/Opportunity**: CurbWaste raised $50M total, which means they're not a bootstrapped play — but it validates a real market. TrashLab is the scrappier alternative. The opportunity for an indie builder: hyper-niche on one segment CurbWaste doesn't go deep on — e.g., dumpster rental companies specifically (no route optimization needed; instead: container availability tracking, delivery/pickup scheduling, weight ticket management, damage billing). Dumpster rental is a $10B+ industry with thousands of small operators
- **Our Angle**: Lightweight SaaS specifically for dumpster rental companies with 1–20 containers. Core features: container availability calendar, automatic delivery/pickup scheduling, customer portal for booking, weight ticket upload, damage photo documentation, QuickBooks sync. $79–$129/mo. Distribution: dumpster rental owner Facebook groups (multiple active communities), waste industry trade shows, direct outreach on Google Maps
- **LTD Potential**: 4/5

---

## [Noosa Labs / Micro-SaaS Acquisition Model at $120K MRR]
- **Source**: https://www.indiehackers.com/post/tech/acquiring-micro-saas-products-and-growing-them-to-120k-mrr-uC42WHXCFk9lKt3HTPK0
- **Additional Links**: https://www.noosalabs.com/
- **Platform**: Indie Hackers
- **Type**: Revenue milestone case study (March 10, 2026)
- **Engagement**: 129 upvotes, 15 bookmarks, substantive multi-thread comments
- **Revenue Data**: $120K MRR across portfolio of 3 acquired micro-SaaS products; targets $200K–$600K ARR with 50%+ margins
- **Boring Business Score**: 2/5 (portfolio is not boring-business specific, but the acquisition model is relevant)
- **Target Industry**: SMB-facing SaaS (any vertical with product-led growth)
- **Core Value Prop**: Serial acquisition of profitable, bootstrapped SaaS companies with $200K–$600K ARR and 50%+ margins. Grow through pricing optimization, improved onboarding, and distribution rather than feature development
- **Gap/Opportunity**: The acquisition criteria Pascal uses — SMB-focused, PLG, 50%+ margins, $200K–$600K ARR — perfectly describes boring-business vertical SaaS at maturity. Comments from an angel investor in this thread explicitly called out "HVAC, dental, restoration" as verticals where "the biggest moats are quietly being built." This validates building to acquire or build to the point of being acquirable in boring-niche SaaS
- **Our Angle**: Build boring-business vertical SaaS with the acquisition exit in mind. Target the $200K–$600K ARR range (roughly $17K–$50K MRR) where acquirers like Noosa Labs, Calm Capital, and Tiny Capital are actively looking. Focus on defensible niches where customer churn is tied to going out of business, not switching costs
- **LTD Potential**: 2/5 (more of a strategic framing than a direct product idea)

---

## [Stagetimer — Remote Countdown Timer for Live Events at $15–20K MRR]
- **Source**: https://www.indiehackers.com/post/tech/turning-a-simple-b2b-solution-into-a-15k-mrr-saas-by-exploiting-a-market-niche-xIxrVwn24DVsN8b3PYD3
- **Additional Links**: https://stagetimer.io/
- **Platform**: Indie Hackers
- **Type**: Revenue milestone case study (August 2024, still relevant)
- **Engagement**: 50 upvotes, 20 bookmarks, 13 comments
- **Revenue Data**: $15K–$20K MRR (~$20K combining subscriptions + one-time); 13,000+ accounts
- **Boring Business Score**: 3/5
- **Target Industry**: Live event production: conferences, broadcast studios, churches, corporate AV
- **Core Value Prop**: Synchronized countdown timer controllable from any device via browser — lets a stage manager count down speakers remotely without physical hardware
- **Gap/Opportunity**: Lukas built the simplest possible thing for a niche he happened to understand — live events. Revenue model shifted from pure subscription to hybrid (subscriptions + one-time per-event payments). The pattern: simple tool, specific industry, low-competition keyword ("stage timer" = exact buyer intent), SEO as growth engine. Adjacent opportunities with the same model: broadcast-specific rundown software (news shows, podcasts, YouTube live), church service planning tools, conference A/V production checklists
- **Our Angle**: Apply the Stagetimer model to church production teams — the largest underserved segment of live event production. Churches run Sunday services as mini-productions but have zero affordable dedicated tooling. A $19/mo web app handling service rundown, countdown, volunteer scheduling, and presenter notes would serve ~400,000 Protestant churches in the US. No current tool owns this niche
- **LTD Potential**: 4/5

---

## [DentalRx — Medication Reference Tool for Dental Professionals]
- **Source**: https://www.indiehackers.com/product/dentalrx/revenue
- **Additional Links**: https://boomcloudapps.com/ (adjacent: BoomCloud for dental membership plans)
- **Platform**: Indie Hackers
- **Type**: Niche product with revenue page listed
- **Engagement**: Product listed on IH revenue tracker; active category
- **Revenue Data**: Not publicly visible (behind login); niche dental software category confirmed validated
- **Boring Business Score**: 4/5
- **Target Industry**: Dental offices, dental professionals
- **Core Value Prop**: Medication recommendation tool for dental healthcare professionals — quick, up-to-date drug references without relying on outdated pocket guides
- **Gap/Opportunity**: Dental offices are a classic "boring business SaaS" environment: high willingness to pay, compliance needs, professional buyer who is time-constrained. Adjacent gaps confirmed by web search: (1) dental practice membership plan management (BoomCloud exists but expensive/complex); (2) dental patient reactivation automation (patients who haven't been seen in 18+ months); (3) dental supply inventory for independent practices. Each is a $50–$150/mo recurring-revenue opportunity
- **Our Angle**: Dental patient reactivation SaaS — automated SMS/email campaigns targeting patients overdue for hygiene appointments. Integration with major practice management systems (Dentrix, Eaglesoft). Simple ROI story: one reactivated patient = $200+ revenue, tool pays for itself in first week. $79–$149/mo. Distribution: dental association events, dental office manager Facebook groups, dental consultant referral network
- **LTD Potential**: 4/5

---

## [Neuclis — Field Service CRM for Home Service Contractors]
- **Source**: Search results referencing IH community discussion
- **Additional Links**: https://ductarchitect.com/blog/best-crm-for-home-services-businesses-in-2026-hvac-plumbing-guide
- **Platform**: Indie Hackers (community discussion)
- **Type**: Pre-launch indie product / market validation discussion
- **Engagement**: IH community discussion; product built, distribution challenge
- **Revenue Data**: Not yet launched (solo dev product ready, no GTM)
- **Boring Business Score**: 5/5
- **Target Industry**: HVAC, plumbing, electrical, landscaping contractors — home service businesses globally
- **Core Value Prop**: Full field service management CRM for home service contractors; built by a solo developer targeting 8 global markets
- **Gap/Opportunity**: Neuclis illustrates the classic indie dilemma in boring-business SaaS: the product exists but distribution is the hard part. The market is proven (ServiceTitan $350+/tech/month, Jobber $49+/mo, Housecall Pro $49+/mo) — all are too expensive or too complex for the 1–3 tech contractor. The opportunity is a simpler, cheaper alternative with strong onboarding and community-based distribution. The community thread confirms builders know the market is real but struggle with go-to-market
- **Our Angle**: Hyper-niche on one trade type — e.g., only for chimney sweep businesses (a trade with zero dedicated modern software). Simple scheduling, inspection report generation (with photo upload), customer history, recurring annual appointment reminders, Stripe payments. 10,000+ chimney sweep businesses in the US paying $79–$99/mo = potential $10M+ ARR market with zero VC competition
- **LTD Potential**: 4/5

---

## Key Themes

**1. AI-first operations for blue-collar services is the hottest 2025–2026 category**
Netic ($450M valuation) and Cohesive (YC X25) confirm that investors have validated the blue-collar AI market. The indie opportunity is the SMB tier these companies leave behind — the 1–10 tech shop that needs AI call capture and SMS follow-up but cannot afford enterprise pricing.

**2. The "simplest possible tool for one specific industry" keeps winning**
Skimmer (pools, $5.7M ARR), Stagetimer (events, $15K MRR), Tank Track (septic), and DentalRx all followed the same pattern: ignore generic tools, go so niche that you own the entire category vocabulary. Commenters on the Rentman and Craftplan posts explicitly named this pattern as the right approach.

**3. Open-source + "needs a SaaS layer" is an emerging HN signal**
Both Craftplan (577 pts) and Micasa (657 pts) went viral as open-source tools addressing unglamorous operational problems. Neither has a paid cloud tier. Both generated massive discussion validating the underlying problem. The commercialization opportunity is clear: take the open-source concept, host it, add onboarding and support, price at $49–$99/mo.

**4. The small landlord (1–20 units) is shockingly underserved**
Micasa's success pointed to property management as a gap. Large PM tools (Buildium, AppFolio) target 50+ units. The 15M+ US landlords with 1–10 units have no good modern tool. This is the single largest recurring complaint in landlord communities.

**5. Acquisition exit thesis for boring-business SaaS is validated**
Noosa Labs actively acquires boring niche SaaS at $200K–$600K ARR with 50%+ margins. Calm Capital, Tiny Capital, and others are all buying in this range. Building a boring-biz vertical SaaS to the $17K–$50K MRR range and selling is a real and increasingly common exit path for solo/small founders.

**6. Trade-specific single-vertical tools command LTD pricing AND low churn**
Septic, pool, grease trap, dumpster rental, chimney sweep, irrigation — each is a $1B–$10B industry where the buyer uses the software daily, has no good alternative, and churn tracks to going out of business (not dissatisfaction with software). These are the best LTD candidates: high initial conversion, near-zero churn once embedded.
