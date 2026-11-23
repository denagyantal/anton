# Idea Evaluation - 2026-11-23

**Sources scanned today:**
- `reddit-2026-11-23.md` — 14 ideas (r/hvacpeople, r/HVAC, r/landscaping, r/LawnCarePros, r/PropertyManagement, r/PptyMgmtSoftware, r/LeaseLords, r/pressurewashing, r/OwnerOperators, r/TruckDispatchers, r/FreightBrokers, r/Bookkeeping, r/QuickBooks, r/restaurantowners, r/PestControlIndustry, r/InsuranceAgent, r/Roofing, r/RoofingSales, r/AutoDetailing, r/moving, r/microsaas)
- `hn-indiehackers-2026-11-23.md` — 14 signals (Avenue AU$85K/mo, Crewbird, Prelay, Zirco.ai dental, Breezy $250K ARR, AI Voice receptionist, ServiceTitan disruption solo, Operator $15K MRR, FreshLeads, Heavy Civil ERP, Gardener AI, ZenMaid $3M/yr, Bank Statement Converter $16K MRR, CraftBoop)
- `trends-2026-11-23.md` — 9 trends (AI Back-Office Agents, Dental Disruption, Trades No-Code, PE Roll-Up, Pool Service PE investment, Bookkeeping/Job Costing, Niche Trade SaaS, AI TMS/Dispatch, PM for Small Landlords)
- `competitor-analysis-2026-11-23.md` — 4 deep-dives (Trades FSM + inventory, Auto Shop native accounting, Small Landlord PM flat $29-49/mo, Cleaning AI scheduling)

**Existing shortlisted ideas checked for deduplication:** 240+ canonical files reviewed.

---

## Tier 1: Strong Opportunities (Score 75+)

### 1. Pest Control FSM with Compliance Recordkeeping — Score: 101/105
*(Canonical file: `pest-control.md`)*

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | HN 448pts/182 comments confirms $2M ARR in space; Reddit: solo pest control operators spending $150/mo on GorillaDesk and still not using most features; PestPac $900+/mo; FieldRoutes $3-4x more expensive than GorillaDesk |
| Competitor Weakness | 5/5 | GorillaDesk no instant website quote widget, no WDO/WDI; Fieldwork $79/mo "made in the 90s" feeling; PestPac $1,500 setup fee + $900/mo for full features; FieldRoutes data-hostage ($500 to export) |
| LTD Viability | 4/5 | Core scheduling LTD viable at $79; compliance module as monthly add-on is better model |
| No Free Tier | 5/5 | FIFRA compliance is a legal mandate — will pay from day 1 |
| Channel Access | 5/5 | r/PestControlIndustry active, PCOA community, Facebook "Pest Control Business Owners" |
| Content Potential | 4/5 | "EPA compliance guide for pest operators", "FIFRA chemical log requirements" |
| AppSumo Fit | 5/5 | No pest-control-specific tools on AppSumo — first-mover confirmed |
| Review Potential | 4/5 | Compliance SaaS generates strong reviews from operators who avoid fines |
| MRR Path | 5/5 | Recurring compliance + quarterly inspection reports = natural MRR |
| Build Feasibility | 4/5 | Chemical tracking + routing + invoicing in 4-6 weeks; WDO/WDI complex but add-on |
| Boring Business Bonus | 5/5 | Pest control = deeply boring, non-technical owners, blue-collar |

**Verdict**: BUILD
**Decision Status**: VALIDATING — `../ideas/decisions.md`
**Next Steps**: Prototype FIFRA chemical log + instant website quote widget; validate with 5 pest control operators on GorillaDesk
**Risks**: (1) GorillaDesk has mindshare in this niche; (2) regulatory complexity varies by state; (3) compliance module = ongoing legal liability if errors
**Key Source Links**:
- https://www.reddit.com/r/PestControlIndustry/comments/1jwiqrk/how_much_are_you_spending_on_your_crm_per_month/ ← 17-comment thread on CRM cost
- https://www.reddit.com/r/PestControlIndustry/comments/1syjcnl/pestpac/ ← PestPac setup fee complaints
- https://news.ycombinator.com/item?id=47509571 ← 448pts/182 comments HN thread, $2M ARR confirmed
- https://www.reddit.com/r/PestControlIndustry/comments/1deoybx/best_pest_control_software/
- https://www.reddit.com/r/pestcontrol/comments/1ql7k1a/what_crm_for_different_sized_operations/
**Signal Frequency**: Daily signal for 30+ consecutive days — stable at maximum

---

### 2. Auto Repair Shop Management (Native Accounting) — Score: 100/105
*(Canonical file: `auto-repair-shop-management.md`)*

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | 253K+ US independent shops; CarSignal YC S26 ($200/mo, 40+ shops); Autograff ShopOS Oct 2026 launch; GreaseGoose new entrant confirms |
| Competitor Weakness | 5/5 | Tekmetric + QB Accounting Link "sync nightmare" documented; two-way texting locked to $439/mo; DVI gated to $359+/mo Shopmonkey; Shopmonkey 2.0 "biggest dumpster fire"; AutoLeap forced 3-year contracts |
| LTD Viability | 4/5 | "Recovers its own cost in first month" ROI story = strong LTD argument; $89 LTD single location |
| No Free Tier | 5/5 | Shop owners pay from day 1 |
| Channel Access | 5/5 | r/serviceadvisors, r/MechanicAdvice, r/AutoMechanics, diag.net forums |
| Content Potential | 4/5 | "Tekmetric alternative", "auto repair software with built-in accounting" |
| AppSumo Fit | 5/5 | No LTD auto repair tool on AppSumo — confirmed first-mover |
| Review Potential | 4/5 | High-stakes software decision = shops leave detailed reviews |
| MRR Path | 5/5 | Shop management is recurring by nature |
| Build Feasibility | 4/5 | Native GL + DVI + 2-way SMS + declined-work follow-up = manageable 4-6 week MVP |
| Boring Business Bonus | 5/5 | Auto repair = boring, non-technical owner-operators |

**Verdict**: BUILD
**Decision Status**: VALIDATING — `../ideas/decisions.md`
**Next Steps**: Build native GL at $129-179/mo; prototype declined-work recovery module; approach RepairShopr refugees and Shopmonkey 2.0 migrators
**Risks**: (1) CarSignal YC = well-funded competition entering; (2) Autograff ShopOS Oct 2026 = window narrowing; (3) native GL adds build complexity
**Key Source Links**:
- https://www.qbocleanups.com/post/software-sync-nightmares-why-your-tekmetric-and-qbo-integration-feels-like-a-losing-battle ← "sync nightmare" article
- https://www.g2.com/products/tekmetric/reviews?qs=pros-and-cons ← top complaint: missing accounting
- https://baystacker.com/blog/tekmetric-alternatives
- https://www.vehiloop.com/blog/auto-repair-shop-software-accounting
- https://shoptechscore.com/tekmetric-alternatives/
**Signal Frequency**: 30-day streak at 100/105 — stable at maximum

---

### 3. Property Management for Small Landlords (1–50 Units) — Score: 100/105
*(Canonical file: `property-management.md`)*

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | 19M+ US small landlords; PropManager $5/unit capped at $59/mo; Bevado $10M seed; TurboTenant 1M+ landlords; someone paid $25K for custom CRM for 120 units |
| Competitor Weakness | 5/5 | AppFolio 50-unit minimum + $3-4/unit; Buildium "buggy at critical points" (12 upvotes); DoorLoop "persistent merchant account bugs"; Avail 300% price increase; per-unit pricing punishes small operators |
| LTD Viability | 4/5 | $69-99 LTD for core features; small landlords hate subscriptions |
| No Free Tier | 4/5 | Free tools (TurboTenant, Innago) deliberately thin on landlord-side features |
| Channel Access | 5/5 | r/Landlord, r/RealEstateInvesting, BiggerPockets, FB "Landlord Nation" (600K+ members) |
| Content Potential | 4/5 | "Property management software 1–20 units", "schedule E tax prep landlord" |
| AppSumo Fit | 5/5 | TurboTenant/RentRedi have AppSumo presence = proven buyer type |
| Review Potential | 4/5 | High emotional stakes = landlords leave detailed reviews |
| MRR Path | 5/5 | Tenancy lifecycle = multi-year recurring relationship |
| Build Feasibility | 5/5 | Rent tracking + maintenance portal + e-sign leases + Schedule E = straightforward |
| Boring Business Bonus | 5/5 | Small landlords = unglamorous, non-technical, loyal once adopted |

**Verdict**: BUILD
**Decision Status**: VALIDATING — `../ideas/decisions.md`
**Next Steps**: Build Landlord OS — flat $39/mo (unlimited units to 25), 1-2 day ACH, mobile-first, Schedule E export; target TurboTenant/DoorLoop/Avail migrants
**Risks**: (1) Many new entrants in 2026 (PropManager, Domara, RentValet, Bevado $10M); (2) free-tier competition from TurboTenant/Innago; (3) tenant payment processing regulatory complexity
**Key Source Links**:
- https://www.reddit.com/r/PptyMgmtSoftware/comments/1wbvl7n/property_management_software_help/ ← 29-comment thread
- https://www.reddit.com/r/PptyMgmtSoftware/comments/1t6hth8/demoed_every_major_pm_platform_in_2025_before/ ← 11-platform comparison
- https://www.reddit.com/r/PropertyManagement/comments/1m3s7jx/paid_25k_for_a_custom_property_crm_was_it_a_fair/ ← $25K custom CRM signal
- https://landlordmethod.com/blog/best-property-management-software-for-small-landlords/
- https://getpropmanager.com/ ← new entrant at $5/unit capped at $59/mo
**Signal Frequency**: Daily signal for 30+ consecutive days — stable at maximum

---

### 4. Cleaning Business AI Crew Scheduling — Score: 100/105
*(Canonical file: `cleaning-service-management.md`)*

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | ZenMaid $3M/yr bootstrapped (cleaning SaaS); BlastoClean entering; BookingKoala platform collapse = active refugee market; 200K+ cleaning businesses in US |
| Competitor Weakness | 5/5 | ZenMaid manual routing confirmed ("daily manual routing by hand" documented); BookingKoala 2-week outage with no communication; no tool proposes optimal crew-to-job daily assignment (vs. just reordering stops) |
| LTD Viability | 4/5 | $149-199 LTD compelling for 10-cleaner cleaning ops |
| No Free Tier | 4/5 | ZenMaid pricing gap above commodity = room for LTD entrant |
| Channel Access | 5/5 | r/cleaningbusiness (50K+ members), Facebook cleaning groups, r/sweatystartup |
| Content Potential | 4/5 | "cleaning business CRM", "how to schedule cleaning crews with AI" |
| AppSumo Fit | 5/5 | ZenMaid pricing gap + BookingKoala refugees = active buyer pool |
| Review Potential | 4/5 | Cleaning ops generate detailed reviews due to high daily stakes |
| MRR Path | 4/5 | Recurring scheduling + reactivation sequences |
| Build Feasibility | 5/5 | AI crew-to-job assignment + mobile crew view = 2-3 week MVP |
| Boring Business Bonus | 5/5 | Cleaning = deeply boring, local services, loyal once adopted |

**Verdict**: BUILD
**Decision Status**: VALIDATING — `../ideas/decisions.md`
**Next Steps**: Ship AI scheduling MVP — input: recurring jobs, cleaner availability, job duration, client preferences → output: optimized daily crew-to-job draft in 10 min; target BookingKoala refugees
**Risks**: (1) ZenMaid has strong brand in this niche; (2) AI routing errors could damage business; (3) crew data privacy for location tracking
**Key Source Links**:
- https://www.reddit.com/r/cleaningbusiness/comments/1vtvlzl/ ← "routing teams to jobs" still manual on ZenMaid $300/mo
- https://www.reddit.com/r/cleaningbusiness/comments/1uhfoy3/ ← "schedule work, it's all in her head"
- https://www.reddit.com/r/cleaningbusiness/comments/1vd951n/ ← "Jobber just way too heavy for what I need"
- https://www.g2.com/products/bookingkoala/reviews ← platform collapse 2-week outage
- https://www.pavadotech.com/blog/route-optimization-software-for-service-crews ← routing gap documented
**Signal Frequency**: Daily signal for 30+ consecutive days — stable at maximum

---

### 5. Landscaping Business OS (Per-Job Profitability) — Score: 99/105
*(Canonical file: `landscaping-lawn-care.md`)*

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | LMN $297-648/mo + $797 onboarding confirms paying market; Tabby AI bookkeeper for contractors validates category from trends; WorkHero expanding to bookkeeping |
| Competitor Weakness | 5/5 | QuickBooks no per-job view; Jobber scheduling-focused, weak job costing; LMN expensive/complex; "I look at the monthly bank statement and hope I'm in the green" (direct quote, 300-customer company) |
| LTD Viability | 5/5 | $79-99 LTD for a focused "am I profitable on this job?" tool sells well on AppSumo |
| No Free Tier | 4/5 | Spreadsheet alternatives exist but are painful |
| Channel Access | 5/5 | r/landscaping, r/LawnCarePros — both very active; Facebook "Lawn Care Business Owners" |
| Content Potential | 4/5 | "landscaping job costing software", "how to track profit per job landscaping" |
| AppSumo Fit | 4/5 | Mobile-first landscaping tool = strong AppSumo category |
| Review Potential | 4/5 | High-value operations tool = detailed reviews |
| MRR Path | 5/5 | Seasonal business → multi-year recurring with job history |
| Build Feasibility | 4/5 | Mobile job card: labor hours + materials + equipment → margin calc → QB sync = 3-4 week MVP |
| Boring Business Bonus | 5/5 | Landscaping = deeply boring, non-technical owners |

**Verdict**: BUILD
**Decision Status**: VALIDATING — `../ideas/decisions.md`
**Next Steps**: Build mobile-first job costing MVP — log labor + materials from field, auto-calculate margin, QB integration; target solo operators and sub-5-crew shops who can't afford LMN/Aspire
**Risks**: (1) LMN has brand presence in this niche; (2) QuickBooks integration adds complexity; (3) seasonal demand pattern challenges MRR
**Key Source Links**:
- https://www.reddit.com/r/landscaping/comments/1l5j753/how_are_you_tracking_job_costs_without_wasting/ ← "hope I'm in the green" quote
- https://www.reddit.com/r/landscaping/comments/1riirwi/those_of_you_running_your_own_landscaping_crew/ ← recurring crew management pain
- https://www.reddit.com/r/landscaping/comments/1ehldus/seeking_advice_on_efficient_invoicing_system/
- https://www.reddit.com/r/LawnCarePros/comments/1lduty9/hello_lawn_rangers_who_in_here_still_using/ ← still using paper checklists
- https://www.usetabby.com/solutions/contractors/ ← Tabby AI bookkeeper validation
**Signal Frequency**: Daily signal for 30+ consecutive days — stable at maximum

---

### 6. Small Fleet Trucking TMS (IFTA + Compliance) — Score: 99/105
*(Canonical file: `small-fleet-trucking-tms.md`)*

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | 350K+ owner-operators; Haullytics (AI rate-con scanning) confirmed with paying customers; Datatruck $99/mo validated; "TMS expensive af" thread — multiple indie builders converging simultaneously |
| Competitor Weakness | 5/5 | McLeod and Turvo enterprise pricing; most tools "built in 2009"; IFTA tracking = manually done by majority; Datatruck "AI Updater" that eliminates check calls = clearest ROI story |
| LTD Viability | 3/5 | Truckers prefer monthly/per-load; LTD for IFTA/compliance standalone could work at $79-99 |
| No Free Tier | 5/5 | IFTA is legally required quarterly — will pay |
| Channel Access | 4/5 | r/OwnerOperators (100K+), r/TruckDispatchers, r/FreightBrokers |
| Content Potential | 4/5 | "IFTA calculator owner operator", "small fleet TMS 1-5 trucks" |
| AppSumo Fit | 3/5 | Truckers less likely AppSumo buyers; direct community marketing stronger |
| Review Potential | 4/5 | Trucking forums very active with software reviews |
| MRR Path | 5/5 | Compliance + dispatch = core ongoing operations |
| Build Feasibility | 4/5 | ELD CSV import + IFTA calc + compliance tracker = 4-6 week MVP |
| Boring Business Bonus | 5/5 | Trucking = deeply boring, essential, non-glamorous |

**Verdict**: BUILD
**Decision Status**: VALIDATING — `../ideas/decisions.md`
**Next Steps**: Ship IFTA auto-calculator from ELD CSV import as standalone MVP; validate in r/OwnerOperators; layer dispatch + compliance tracking in v2
**Risks**: (1) TrueMile YC F26, Aura Dispatch (5%/load cut), Datatruck entering with AI-native approach; (2) ELD data formats vary; (3) DOT/FMCSA regulatory knowledge required
**Key Source Links**:
- https://www.reddit.com/r/OwnerOperators/comments/1m1z4y1/tms_expensive_af/ ← "TMS expensive af" thread
- https://www.reddit.com/r/OwnerOperators/comments/1u1p38v/looking_for_tms_recommendations_moving_away_from/
- https://www.reddit.com/r/CDLTruckDrivers/comments/1rwajm3/i_built_a_profittracking_app_for_owneroperators/ ← indie builder with paying users
- https://www.reddit.com/r/TruckDispatchers/comments/1w1p8gb/i_built_a_tms_for_trucking_companies_looking_for/ ← second indie builder
- https://truckaiguide.com/ai-tms-for-small-fleets/ ← active buyer research market
**Signal Frequency**: Daily signal for 20+ consecutive days — stable at maximum

---

### 7. HVAC Small Shop Dispatch & FSM + Van Inventory — Score: 98/105
*(Canonical file: `hvac-small-shop-dispatch.md` — also updates `field-service-management.md`)*

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | 300K+ small HVAC/plumbing/electrical shops; 4-person HVAC company still on WhatsApp/Excel/Google Calendar; FieldPulse $80M raised; Probook $40M a16z/Sequoia |
| Competitor Weakness | 5/5 | No mainstream FSM at under $200/mo offers native per-truck stock ledger; second van trips cost real money; no tool natively shows "you have this fitting on your truck" |
| LTD Viability | 4/5 | Flat-rate FSM: $149-199 LTD for up to 5 techs |
| No Free Tier | 5/5 | Businesses have immediate operational need |
| Channel Access | 5/5 | r/HVAC (140K+), r/hvacpeople, r/ProHVACR, FB "HVAC Business Owners" |
| Content Potential | 4/5 | "HVAC software for small shops", "field service van inventory management" |
| AppSumo Fit | 5/5 | No HVAC/FSM tool has pursued AppSumo — category-first confirmed |
| Review Potential | 4/5 | High-stakes ops tool = detailed reviews |
| MRR Path | 5/5 | FSM = core operations, monthly recurring by definition |
| Build Feasibility | 4/5 | Van inventory + dispatch + invoicing = 4-6 week MVP; inventory adds complexity |
| Boring Business Bonus | 5/5 | HVAC/plumbing/electrical = deeply boring blue-collar industries |

**Verdict**: BUILD (van inventory as primary differentiator vs Jobber/HCP)
**Decision Status**: VALIDATING — `../ideas/decisions.md`
**Next Steps**: Build per-truck inventory layer: tech scans/selects part on job → auto-decrements van stock → triggers reorder alert → creates PO to supply house; test with HVAC shops
**Risks**: (1) Many well-funded entrants (Broccoli, Probook, Dalton Mills); (2) van inventory adds significant data modeling complexity; (3) Jobber could add inventory natively
**Key Source Links**:
- https://community.getjobber.com/discussions/service-based-skilled-trades/inventory-management/4964 ← "you have this in your truck" direct request
- https://contractorsoftwarehq.com/comparisons/jobber-vs-housecall-pro-truck-stock/ ← "neither app provides a native per-truck stock ledger"
- https://www.reddit.com/r/hvacpeople/comments/1vyqib2/small_hvac_company_growing_fast_what_softwaretech/ ← 4-person HVAC on WhatsApp
- https://www.reddit.com/r/HowToEntrepreneur/comments/1u9gxe1/what_is_the_best_service_company_software_that_i/ ← 9-tech still on spreadsheets
- https://www.reddit.com/r/ProHVACR/comments/1k1n7ba/allinone_software/
**Signal Frequency**: Daily signal for 60+ consecutive days — stable at maximum

---

### 8. Insurance AMS for Small Independent Agencies (1–10 Producers) — Score: 98/105
*(Canonical file: `insurance-agency-management.md`)*

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | 38K independent P&C agencies in US; AMS360 $35K/year (confirmed real-world pricing); Applied Epic $4,500 data export fee; 5-person FL agency on AMS360 for 7 years confirms long-tenured customers |
| Competitor Weakness | 5/5 | "They all suck" consistent thread title; AMS360 14% YoY hike 3 consecutive years; migration quoted $18-22K + 6-8 weeks dual-running; EZLynx weak on commercial lines; no AMS publishes pricing openly |
| LTD Viability | 3/5 | Borderline — ongoing policy management; $297 LTD (1 agency lifetime) could work for first-year agents |
| No Free Tier | 5/5 | Insurance compliance = will pay from day 1 |
| Channel Access | 4/5 | r/InsuranceAgent (high engagement), FB "Independent Insurance Agents Network" (50K+), PIA/NAIA forums |
| Content Potential | 3/5 | Professional B2B content; smaller content ecosystem than trades |
| AppSumo Fit | 3/5 | No AMS on AppSumo — first-mover opportunity but AMS buyer = less typical AppSumo audience |
| Review Potential | 4/5 | Agents leave very detailed reviews on Capterra/G2 |
| MRR Path | 5/5 | Policy lifecycle is perpetual = strongest MRR lock-in in portfolio |
| Build Feasibility | 3/5 | IVANS integration (data download from carriers) = complex technical moat |
| Boring Business Bonus | 4/5 | Insurance = unglamorous professional services, loyal once adopted |

**Verdict**: BUILD (without IVANS initially; use CSV import)
**Decision Status**: VALIDATING — `../ideas/decisions.md`
**Next Steps**: Prototype flat-rate agency dashboard (unlimited users, $69-99/mo); skip IVANS for MVP; start with ACORD 25/130 certificate generation as differentiating feature
**Risks**: (1) IVANS integration = real technical complexity for full product; (2) domain expertise required (P&C insurance); (3) NowCerts/HawkSoft have brand presence in this niche
**Key Source Links**:
- https://www.reddit.com/r/InsuranceAgent/comments/1tbbsct/thinking_about_migrating_off_ams360_for_our/ ← 5-person FL agency, 14% YoY hike
- https://www.reddit.com/r/InsuranceAgent/comments/1ob4nms/hubspot_or_something_else_i_hate_all_amss/ ← "I hate all AMS's"
- https://www.reddit.com/r/InsuranceAgent/comments/1s6joyx/how_the_hell_do_i_track_my_stuff/
- https://www.reddit.com/r/InsuranceAgent/comments/1kh7prn/agency_management_system_or_crm/
- https://www.reddit.com/r/InsuranceAgent/comments/1x3tiz7/recommend_a_crm_system_for_a_startupsmall/
**Signal Frequency**: Strong recurring signal — 30+ days

---

### 9. Dental Practice — AI Insurance Verification & Revenue Cycle — Score: 97/105
*(Canonical file: `dental-practice.md`)*

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | tab32 Alpine launched $95/mo with 17 AI agents; Zirco.ai 30+ discovery calls, 2-3 hrs/day insurance verification per practice; Isaac PracticeOS $6.5M; Lassie $35M a16z (700+ practices) |
| Competitor Weakness | 5/5 | Dentrix $5K startup + $130/mo support; Dentrix Ascend $5K transfer fee; Curve Dental 6+ hour outages; insurance verification still 2-3 hrs/day manual via 10+ different carrier portals |
| LTD Viability | 1/5 | No — HIPAA compliance + per-call costs make LTD tricky; MRR at $299-499/mo per practice is right model |
| No Free Tier | 5/5 | Dental practices need ongoing support, insurance billing |
| Channel Access | 3/5 | r/Dentistry, r/Dentists — active but reaching dentists takes dental sales motion |
| Content Potential | 3/5 | "dental insurance verification software", "alternative to Dentrix" |
| AppSumo Fit | 2/5 | Full PMS not AppSumo-friendly; insurance verification module possible |
| Review Potential | 4/5 | High-stakes software = dentists leave detailed reviews |
| MRR Path | 5/5 | Long-term contracts + practice stickiness = very strong MRR |
| Build Feasibility | 3/5 | Insurance verification via Playwright automation = complex; voice AI + scheduling simpler |
| Boring Business Bonus | 5/5 | Dental practice management = deeply boring, non-technical owners |

**Verdict**: EXPLORE FURTHER (AI recall/reactivation add-on is better wedge than full PMS)
**Decision Status**: VALIDATING — `../ideas/decisions.md`
**Next Steps**: Build standalone dental insurance verification tool ($99-199/mo) that doesn't require full PMS migration; integrate with legacy Dentrix/Eaglesoft via API or screen scraping
**Risks**: (1) Build feasibility is lowest in portfolio (insurance verification = very complex); (2) Isaac PracticeOS and tab32 Alpine just launched = window narrowing; (3) HIPAA compliance adds operational burden
**Key Source Links**:
- https://news.ycombinator.com/item?id=47385090 ← Zirco.ai HN launch
- https://zircoai.vercel.app/ ← product in beta
- https://tab32.com/tab32-launches-alpine-bringing-agentic-ai-to-independent-dental-practices/ ← tab32 Alpine $95/mo
- https://tryayla.com/pricing ← Ayla Dental flat $499/mo unlimited providers
**Signal Frequency**: Strong — multiple new entrants launching confirms timing

---

### 10. Post-Job Follow-up Automation (SMS-first for Trades) — Score: 97/105
*(Canonical file: `post-job-follow-up-automation.md`)*

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 4/5 | CraftBoop confirmed at $29/mo with paying users (April 2026 IH launch, 7 months live); Avenue AU$85K/mo includes review requesting |
| Competitor Weakness | 4/5 | CraftBoop email-only; existing tools stop at answering the call; no SMS-first + direct Google review link at affordable price |
| LTD Viability | 5/5 | Simple automation = natural LTD; $299 AppSumo launch |
| No Free Tier | 4/5 | ROI story is clear (reviews = more bookings) |
| Channel Access | 5/5 | r/HVAC, r/smallbusiness, r/cleaningbusiness — all active |
| Content Potential | 4/5 | "get more Google reviews HVAC", "automated follow-up service business" |
| AppSumo Fit | 5/5 | Simple automation with ROI story = strong AppSumo category |
| Review Potential | 4/5 | Tool about getting reviews = natural review generator |
| MRR Path | 4/5 | Ongoing automation = recurring |
| Build Feasibility | 5/5 | Jobber/HCP webhook → SMS sequence → Google review link = 2-week MVP |
| Boring Business Bonus | 4/5 | Serving boring businesses |

**Verdict**: BUILD
**Decision Status**: VALIDATING — `../ideas/decisions.md`
**Next Steps**: Build SMS-first version with Jobber job-completion webhook; direct-link to Google review page; test against CraftBoop's email-only approach
**Risks**: (1) CraftBoop and Avenue already in market; (2) review-requesting tools are common (Podium, Birdeye at $300-400/mo); (3) SMS compliance (TCPA) adds legal complexity
**Key Source Links**:
- https://www.indiehackers.com/post/craftboop-built-automated-follow-ups-for-service-businesses-just-launched-looking-for-feedback-5aa58e1c39
- https://www.craftboop.com
- https://www.starterstory.com/businesses/avenue-672807/revenue ← Avenue $85K AUD/mo (reviews built-in)
**Signal Frequency**: Recurring — multiple confirmed sources

---

### 11. Pressure Washing & Exterior Cleaning CRM — Score: 97/105
*(Canonical file: `pressure-washing-detailing.md`)*

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 4/5 | r/pressurewashing 100K+ members; 31-comment thread specifically on CRM being broken; Markate universally panned |
| Competitor Weakness | 5/5 | Markate poor UX; Jobber $200+/mo, no sales pipeline; ServiceTitan "French restaurant without prices on the menu"; Workiz useless under ultimate tier; no tool has before/after photo + rescheduling + review automation natively |
| LTD Viability | 5/5 | Niche tool, strong AppSumo candidate; $79 LTD |
| No Free Tier | 4/5 | Operators are small but do have budgets |
| Channel Access | 5/5 | r/pressurewashing, r/AutoDetailing, Facebook exterior cleaning groups |
| Content Potential | 4/5 | "pressure washing CRM", "exterior cleaning software" |
| AppSumo Fit | 5/5 | Niche enough to avoid Jobber competition while serving money-spending audience |
| Review Potential | 4/5 | Niche community actively reviews tools |
| MRR Path | 4/5 | Recurring service reminders = natural retention |
| Build Feasibility | 4/5 | Photo capture + scheduling + review automation = 3-4 week MVP |
| Boring Business Bonus | 5/5 | Pressure washing = deeply boring, blue-collar |

**Verdict**: BUILD
**Decision Status**: VALIDATING — `../ideas/decisions.md`
**Next Steps**: Build before/after photo capture + job scheduling + automated review requests; similar to GorillaDesk model but for the washing niche
**Risks**: (1) Small niche may limit MRR ceiling; (2) Markate still has users despite poor reviews; (3) weather dependency creates seasonal churn
**Key Source Links**:
- https://www.reddit.com/r/pressurewashing/comments/1noq1bu/why_is_crm_so_completely_broken_in_the_pressure/ ← 31-comment thread, direct pain
- https://www.reddit.com/r/pressurewashing/comments/1kpps2n/what_fsmcrm_do_you_use_markate_sucks/ ← "Markate sucks"
- https://www.reddit.com/r/pressurewashing/comments/1r8okgo/do_you_guys_use_any_admin_tools_to_speed_up/
- https://www.reddit.com/r/CRM/comments/1jf4dng/what_am_i_even_looking_for_crm_fsm_erp/
**Signal Frequency**: Recurring signal — multiple days per week

---

### 12. Pool Service Route Management — Score: 96/105
*(Canonical file: `pool-service-management.md`)*

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | Pool Brain PE investment (Serent Capital, Nov 2026); ServiceTitan launching "Property Care" for pool/spa = enterprise entry validates market; Skimmer 35K+ users confirms category |
| Competitor Weakness | 5/5 | Pool Brain moving upmarket with PE backing; ServiceTitan = enterprise only; small-to-mid pool service (1-10 trucks) exposed; Skimmer per-customer pricing criticised |
| LTD Viability | 5/5 | Pool service owner-operators are deal-hunters; $299-499 LTD for routing + billing compelling |
| No Free Tier | 4/5 | Route-based businesses need scheduling = will pay |
| Channel Access | 4/5 | Pool service forums, FB "Pool Service Business Owners" groups |
| Content Potential | 4/5 | "pool service software", "pool route management app" |
| AppSumo Fit | 5/5 | Pool service owners = classic AppSumo demographic |
| Review Potential | 4/5 | Niche community actively reviews tools |
| MRR Path | 4/5 | Weekly route services = natural recurring |
| Build Feasibility | 4/5 | Route + water chemistry + invoicing = manageable 3-4 week MVP |
| Boring Business Bonus | 5/5 | Pool service = deeply boring, non-technical, essential |

**Verdict**: BUILD
**Decision Status**: VALIDATING — `../ideas/decisions.md`
**Next Steps**: Build mobile-first pool service app: route optimization + water chemistry logging + customer portal + mobile invoicing; target 1-5 truck operators below Pool Brain's new PE-backed upmarket push
**Risks**: (1) Pool Brain PE-backed = moving upmarket but staying in market; (2) Skimmer 35K users = established competitor; (3) water chemistry tracking = domain knowledge required
**Key Source Links**:
- https://www.businesswire.com/news/home/20261117433767/en/Serent-Capital-Invests-in-Pool-Brain-to-Expand-Offerings-for-Pool-Service-Companies ← Pool Brain PE investment
- https://www.servicetitan.com/press/servicetitan-expands-into-enterprise-pest-control-lawn-care-and-pool-spa-markets ← enterprise entry validates market
- https://poolbrain.com
**Signal Frequency**: Growing — PE investment + enterprise entry = category maturation signal

---

### 13. Roofing CRM with Insurance Claim Tracking — Score: 95/105
*(Canonical file: `roofing-contractor-crm.md`)*

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 4/5 | Multiple threads with 11-30 comments on CRM wish-lists; Roofr $12M Series A; XBuild $19M (a16z) confirms market; insurance roofing = large segment of residential roofing |
| Competitor Weakness | 5/5 | JobNimbus "antiquated UI"; Acculynx "owns your data" (Verisk acquisition); Leap "wonky integrations"; ROOFR $375/mo for 6 users; no clean insurance claim status tracker in any affordable tool |
| LTD Viability | 4/5 | Insurance claim tracking differentiator niche enough to avoid AppSumo competition from generic tools |
| No Free Tier | 4/5 | Roofing companies have real budgets ($100K+ jobs) |
| Channel Access | 4/5 | r/Roofing, r/RoofingSales, roofing trade forums |
| Content Potential | 4/5 | "roofing CRM with insurance claims", "storm damage roofing software" |
| AppSumo Fit | 4/5 | Photo-first + insurance = niche differentiator on AppSumo |
| Review Potential | 4/5 | High-value jobs = detailed reviews |
| MRR Path | 5/5 | Insurance workflow + production scheduling = strong retention |
| Build Feasibility | 4/5 | Insurance claim status tracker + production scheduling + photos = 4-6 week MVP |
| Boring Business Bonus | 4/5 | Roofing = unglamorous, blue-collar |

**Verdict**: BUILD
**Decision Status**: VALIDATING — `../ideas/decisions.md`
**Next Steps**: Build insurance-claim-aware roofing CRM — lead → inspection → insurance claim status tracker (adjuster visit, estimate approval, supplement) → production → invoice; target insurance storm-damage segment
**Risks**: (1) JobNimbus/AccuLynx have brand presence; (2) roofing is seasonal; (3) insurance workflow requires domain knowledge
**Key Source Links**:
- https://www.reddit.com/r/Roofing/comments/1rqusd9/what_crm_do_you_use_and_what_do_you_wish_it_did/ ← 11-comment wish-list
- https://www.reddit.com/r/RoofingSales/comments/1sncw8t/talk_to_me_about_crms/ ← 30-comment CRM discussion
- https://www.reddit.com/r/Roofing/comments/1nsmt8j/crm_suggestions/
- https://www.reddit.com/r/Roofing/comments/1st13fv/crm_of_choice/
- https://www.reddit.com/r/Roofing/comments/1q5nxer/crm_with_best_proposal_builder/
**Signal Frequency**: Recurring signal

---

### 14. HVAC Maintenance Plan SaaS (Standalone Layer) — Score: 93/105
*(Canonical file: `hvac-maintenance-agreements.md`)*

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | Breezy $250K ARR in 9 months (now Sera Systems); 118K HVAC shops using spreadsheets for maintenance renewal dates; AgreementDesk $29-49/mo still unoccupied |
| Competitor Weakness | 4/5 | Housecall Pro maintenance agreements locked behind MAX ($299/mo); Jobber missing contract management; ServiceTitan only capable option at $3,500+/mo |
| LTD Viability | 3/5 | Complex ongoing state management; LTD for tool + 1-year pricing tier |
| No Free Tier | 5/5 | Revenue leakage from unmissed renewals = clear ROI |
| Channel Access | 4/5 | HVAC forums, r/HVAC, r/ProHVACR |
| Content Potential | 4/5 | "HVAC maintenance agreement software", "how to manage HVAC service contracts" |
| AppSumo Fit | 3/5 | Less obvious AppSumo fit due to complexity |
| Review Potential | 4/5 | High-value recurring revenue product = detailed reviews |
| MRR Path | 5/5 | "400 plans under management → obvious ROI story" — $199/mo per shop |
| Build Feasibility | 3/5 | Breezy needed 3 rebuilds + 1,000 customer conversations |
| Boring Business Bonus | 5/5 | HVAC = deeply boring |

**Verdict**: EXPLORE FURTHER
**Decision Status**: VALIDATING — `../ideas/decisions.md`
**Next Steps**: Interview 5-10 HVAC owners about maintenance plan management pain specifically; understand the state machine (payment + scheduling + enrollment + renewal) before committing to build
**Risks**: (1) Breezy needed 3 rebuilds = domain complexity is real; (2) Sera Systems/Breezy = acquired, may resurface as competition; (3) requires deep HVAC domain knowledge
**Key Source Links**:
- https://www.silasreinagel.com/product/software-engineering/saas/vertical-saas/founding-engineer/2023/11/15/breezy-0-to-250k-arr-owning-the-manual-workflow/ ← Breezy $250K ARR case study (key insight: "moat is the manual workflow")
**Signal Frequency**: Recurring — multiple days

---

### 15. Booking Widget for Trades (Avenue model) — Score: 93/105
*(Canonical file: `ai-voice-booking-trades.md`)*

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | Avenue: AU$85K/month bootstrapped, grew AU$597→AU$63K in one year; Starter Story viral post Oct 2026; multiple breakdowns published |
| Competitor Weakness | 4/5 | Most trades have "contact us form + phone" only; Avenue's Google Business "Book Online" partnership is a moat but core widget is replicable |
| LTD Viability | 5/5 | Simple widget = natural LTD at $299 one-time vs Avenue subscription |
| No Free Tier | 4/5 | Trades businesses value measurable booking improvements |
| Channel Access | 4/5 | r/HVAC, r/electricians, door-to-door to trades |
| Content Potential | 4/5 | "online booking for HVAC", "booking widget for electricians" |
| AppSumo Fit | 5/5 | Strong LTD fit |
| Review Potential | 4/5 | Tangible ROI (bookings) = enthusiastic reviews |
| MRR Path | 4/5 | SMS reminders, review requests as recurring add-ons |
| Build Feasibility | 5/5 | Embeddable booking widget + Google Business API = 2-3 week MVP |
| Boring Business Bonus | 4/5 | Serving boring trades businesses |

**Verdict**: BUILD (simpler than Avenue at lower price point)
**Decision Status**: VALIDATING — `../ideas/decisions.md`
**Next Steps**: Build Google Business Profile "Book Online" widget for HVAC/pest control specifically; LTD at $299 vs Avenue subscription
**Risks**: (1) Avenue is bootstrapped and growing fast; (2) many scheduling tools (Calendly, Setmore) already exist; (3) Google API changes could break integration
**Key Source Links**:
- https://www.starterstory.com/businesses/avenue-672807/revenue ← Avenue $85K AUD/mo revenue milestone
- https://gtmsauce.com/episodes/2026-09-20-this-simple-widget-makes-50k-month ← GTM analysis
- https://xitter.cf/starter_story/status/2112958627699192046 ← viral X post Oct 2026
**Signal Frequency**: Recurring — multiple confirmed sources

---

### 16. Tax Document Collection Portal for Small CPA Firms — Score: 90/105
*(Canonical file: `accounting-document-collection-portal.md`)*

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | Builder went 0→$8.5K revenue in 14 months organically from r/Bookkeeping; also: invoicing tool $11K MRR (180 customers, 14-month avg retention) confirms boring-SaaS playbook in accounting |
| Competitor Weakness | 4/5 | TaxDome overbuilt/complex; Canopy expensive; Liscio $50/client/year; gap at $29/mo for 1-5 person firms |
| LTD Viability | 5/5 | Annual pain = perfect LTD use case; tax season justifies buying once |
| No Free Tier | 4/5 | CPAs will pay to solve Jan-April chaos |
| Channel Access | 4/5 | r/Bookkeeping, r/taxpros, r/microsaas |
| Content Potential | 4/5 | "CPA document collection software", "tax document portal small firm" |
| AppSumo Fit | 4/5 | Accounting tools sell well on AppSumo |
| Review Potential | 4/5 | Tax professionals vocal about tool quality |
| MRR Path | 4/5 | Year-round document storage extends use case beyond tax season |
| Build Feasibility | 5/5 | Checklist + file upload portal + e-sign + status dashboard = 2-3 week MVP |
| Boring Business Bonus | 4/5 | Accounting firms = unglamorous, non-technical, loyal |

**Verdict**: BUILD
**Decision Status**: VALIDATING — `../ideas/decisions.md`
**Next Steps**: Ship minimal portal (send checklist → client uploads → CPA downloads organized folder); target r/Bookkeeping and r/taxpros in December ahead of tax season
**Risks**: (1) Another builder already at $8.5K in this space — market may become crowded; (2) DocuSign/Adobe Acrobat incumbent for e-sign; (3) seasonal demand pattern challenges MRR
**Key Source Links**:
- https://www.reddit.com/r/microsaas/comments/1u38pi1/sharing_how_i_went_from_0_to_85k_in_revenue_in_14/ ← builder at $8.5K MRR validated (also: invoice tool $11K MRR, $18K MRR examples)
**Signal Frequency**: Recurring — multiple confirmed sources

---

### 17. AI Voice Receptionist for Trades (Niche Vertical Focus) — Score: 81/105
*(Canonical file: `ai-voice-receptionist-trades.md`)*

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | Broccoli $52M (Khosla+YC); Probook $40M a16z/Sequoia; multiple IH builders at $300-800 MRR/client; Avenue AI phone layer at $399/mo confirming upgrade path |
| Competitor Weakness | 3/5 | Market getting crowded at top (Broccoli, Avoca $1B); gap = sub-5-employee trades at $50-150/mo + niche verticals (garage door, chimney, irrigation) |
| LTD Viability | 2/5 | Ongoing AI minute costs make LTD risky |
| No Free Tier | 4/5 | ROI story is clear (missed calls = lost jobs) |
| Channel Access | 5/5 | r/HVAC, r/plumbing — active |
| Content Potential | 4/5 | "AI receptionist for HVAC", "never miss a call contractor" |
| AppSumo Fit | 2/5 | Ongoing AI costs = AppSumo difficult |
| Review Potential | 3/5 | ROI-driven reviews but mixed quality |
| MRR Path | 5/5 | Ongoing voice minutes = very strong MRR |
| Build Feasibility | 3/5 | Vapi/Retell wrapping + FSM integration = 2-4 weeks for voice-only MVP |
| Boring Business Bonus | 5/5 | Serving deeply boring trades businesses |

**Verdict**: EXPLORE FURTHER (niche vertical approach only; general voice AI is crowded)
**Decision Status**: VALIDATING — `../ideas/decisions.md`
**Next Steps**: Target underserved niche verticals (garage door repair, chimney sweep, irrigation service) where Avoca/Broccoli don't have brand presence; Jobber-native booking integration as differentiator
**Risks**: (1) Broccoli $52M + Probook $40M = enormous competitive pressure; (2) ongoing AI voice costs make margin difficult; (3) requires sales effort + onboarding
**Key Source Links**:
- https://www.indiehackers.com/post/building-a-profitable-ai-voice-saas-agency-300-800-mrr-per-client-frAbgO1yQMfHOFFtY3gE ← IH case study $300-800 MRR/client
- https://www.indiehackers.com/post/have-you-ever-considered-the-cost-of-a-missed-call-Gz8o6TACneZSANbWf63A
**Signal Frequency**: Daily signal — market is heating rapidly

---

### 18. Google LSA ROAS Analytics for Field Service — Score: 85/105
*(Canonical file: `google-lsa-trades-crm.md`)*

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 4/5 | Crewbird founder built exactly this after dad's cleaning company saw 3x ROAS; multiple HN commenters confirmed gap; $500-5K/mo LSA spend with zero attribution per comment thread |
| Competitor Weakness | 5/5 | Google LSA has terrible built-in analytics; no attribution from LSA call → job → invoice value; Jobber/HCP don't track LSA spend |
| LTD Viability | 5/5 | Analytics/reporting = natural LTD; $299-499 lifetime |
| No Free Tier | 4/5 | ROI story is immediate (track $1K/mo ad spend) |
| Channel Access | 4/5 | r/HVAC, r/LocalSEO, home service business Facebook groups |
| Content Potential | 4/5 | "Google LSA ROI tracking", "HVAC ad attribution software" |
| AppSumo Fit | 5/5 | Analytics tools sell very well on AppSumo |
| Review Potential | 3/5 | Analytics tools generate fewer reviews than operations tools |
| MRR Path | 4/5 | Monthly analytics subscription natural |
| Build Feasibility | 4/5 | LSA API webhook + FSM API reads + attribution dashboard = 3-4 week MVP |
| Boring Business Bonus | 4/5 | Serving boring trades businesses |

**Verdict**: BUILD (as companion product to FSM)
**Decision Status**: VALIDATING — `../ideas/decisions.md`
**Next Steps**: Wire Google LSA call webhook → auto-create lead in Jobber → track job outcome → report ROAS; test with 5 HVAC shops spending on LSA
**Risks**: (1) Google API access restrictions; (2) Small initial market (LSA users who also use Jobber/HCP); (3) Crewbird is building this natively
**Key Source Links**:
- https://news.ycombinator.com/item?id=50418273 ← Crewbird Ask HN Nov 2026 (dad's cleaning company 3x ROAS)
- https://getcrewbird.com/
**Signal Frequency**: Fresh signal — Ask HN Nov 2026

---

### 19. Trade Job Cost Accounting (QuickBooks Alternative for Trades) — Score: 85/105
*(Canonical file: `trade-job-cost-accounting.md`)*

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 4/5 | Tabby AI bookkeeper for contractors validates category from trends; QuickBooks "doesn't do job costing well" = documented pain; "boring invoice tool" at $11K MRR confirms simple accounting SaaS works |
| Competitor Weakness | 4/5 | QuickBooks no job costing; Jobber overkill for solo; Wave free but no job costing; Tabby is early stage |
| LTD Viability | 5/5 | $59 LTD in sweet spot for solo contractors |
| No Free Tier | 3/5 | Wave/Joist exist free — will some contractors stick with free tools? |
| Channel Access | 4/5 | r/landscaping, r/handyman, r/Contractor |
| Content Potential | 3/5 | Lower content SEO potential than FSM tools |
| AppSumo Fit | 4/5 | Simple tool, clear ROI, natural LTD product |
| Review Potential | 3/5 | Less emotional than FSM tools |
| MRR Path | 4/5 | Ongoing bookkeeping = recurring |
| Build Feasibility | 5/5 | Job-first workflow = simple data model, 2-3 week MVP |
| Boring Business Bonus | 4/5 | Accounting tools = unglamorous, loyal |

**Verdict**: BUILD (as $19-29/mo or $59 LTD — extremely simple MVP)
**Decision Status**: VALIDATING — `../ideas/decisions.md`
**Next Steps**: Ship "job card" MVP: create job → attach quote → log hours + materials → see margin → invoice; test with r/landscaping solo operators
**Risks**: (1) Joist/Invoice2go targeting this market; (2) Tabby AI is entering with AI-native approach; (3) low price point limits revenue
**Key Source Links**:
- https://www.usetabby.com/solutions/contractors/ ← Tabby AI bookkeeper for contractors
- https://www.reddit.com/r/landscaping/comments/1l5j753/how_are_you_tracking_job_costs_without_wasting/ ← direct pain signal
**Signal Frequency**: Recurring — multiple confirmed sources

---

### 20. Moving Company Operations & Dispatching Software — Score: 83/105
*(Canonical file: `moving-company.md`)*

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 3/5 | 18K+ US moving companies; Supermove $250/crew/month = active pricing pain; 1 thread found in Reddit scan today (low signal count) |
| Competitor Weakness | 4/5 | MoveitPro, MoversSuite, Elromco all legacy software built pre-mobile, expensive; no clear modern affordable alternative |
| LTD Viability | 4/5 | Small enough niche that competition is minimal; moving companies have real budgets |
| No Free Tier | 4/5 | Seasonal peak billing pain drives immediate need |
| Channel Access | 3/5 | r/moving community is large but low signal count in this scan |
| Content Potential | 3/5 | Lower content potential than trades |
| AppSumo Fit | 4/5 | Moving company software = unoccupied category on AppSumo |
| Review Potential | 3/5 | Moderate review activity |
| MRR Path | 4/5 | Seasonal business but recurring |
| Build Feasibility | 4/5 | Crew scheduling + digital Bill of Lading + automated confirmations = manageable |
| Boring Business Bonus | 4/5 | Moving = unglamorous, non-technical, blue-collar |

**Verdict**: EXPLORE FURTHER
**Decision Status**: VALIDATING
**Next Steps**: Survey moving company owners about biggest operational pain; validate demand before building
**Risks**: (1) Seasonal demand creates churn; (2) DOT/liability compliance complexity; (3) low signal count this week
**Key Source Links**:
- https://www.reddit.com/r/moving/comments/1krxkye/looking_for_good_software_to_streamline/ ← 4-truck shop demand signal
**Signal Frequency**: Recurring — moderate signal count

---

### 21. Restaurant Food Cost & Invoice Management (1–3 Locations) — Score: 77/105
*(Canonical file: `restaurant-operations.md`)*

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 4/5 | Restaurant365 $10,876/year for 2 locations = clear pricing pain; MarginEdge praised but costly; 200-300 vendor invoices/month manual processing confirmed |
| Competitor Weakness | 4/5 | R365 too expensive; XtraChef integrations break; MarginEdge 5-7 day posting delay = POS timing reconciliation problem |
| LTD Viability | 4/5 | $149-199 LTD for core cost-tracking |
| No Free Tier | 4/5 | Restaurant owners can't afford errors; will pay for time savings |
| Channel Access | 3/5 | r/restaurateur, r/restaurantowners, r/ToastPOS |
| Content Potential | 3/5 | Niche content ecosystem |
| AppSumo Fit | 3/5 | Less typical AppSumo category |
| Review Potential | 4/5 | Restaurant owners very vocal on Capterra |
| MRR Path | 4/5 | Ongoing operations = recurring |
| Build Feasibility | 3/5 | OCR invoice scanning + recipe costing + POS integration = moderately complex |
| Boring Business Bonus | 4/5 | Restaurant operations = not glamorous |

**Verdict**: EXPLORE FURTHER
**Decision Status**: VALIDATING
**Next Steps**: Survey restaurant owners in r/restaurantowners about current food cost tracking workflow; understand POS integration requirements before committing
**Risks**: (1) Restaurant churn rate very high; (2) OCR invoice scanning is table stakes; (3) MarginEdge UX praised = strong competitor
**Key Source Links**:
- https://www.reddit.com/r/Restaurant_Managers/comments/1quzp35/whats_the_best_way_to_process_invoices_affordably/ ← 200-300 invoices/month
- https://www.reddit.com/r/Bookkeeping/comments/1ulh594/restaurant_bookkeeping_pos_reconciliation_is/ ← Toast POS reconciliation pain, 9 upvotes
- https://www.reddit.com/r/restaurantowners/comments/1u35rb1/what_restaurant_management_software_are_you_guys/
- https://www.reddit.com/r/Restaurant_Managers/comments/1lcvyhn/restaurant_software/
**Signal Frequency**: Recurring — multiple sources

---

### 22. Property Maintenance Time Tracking for PM Companies — Score: 76/105 *(NEW)*
*(Canonical file: `property-maintenance-time-tracking.md` — NEW FILE)*

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 3/5 | Direct Reddit signal: PM company with hundreds of properties, paper-to-spreadsheet-to-Buildium workflow; 6 upvotes on "you should have an app" comment |
| Competitor Weakness | 4/5 | Buildium doesn't do maintenance time tracking natively; general time-tracking apps don't integrate with PM software; no focused Buildium/AppFolio integration for maintenance techs |
| LTD Viability | 3/5 | Recurring pain makes MRR more natural; focused LTD could work for the integration |
| No Free Tier | 4/5 | Manual transfer costs real hours = will pay |
| Channel Access | 4/5 | r/PropertyManagement, r/PptyMgmtSoftware — active |
| Content Potential | 3/5 | Niche product, limited SEO opportunity |
| AppSumo Fit | 3/5 | Very niche; moderate AppSumo fit |
| Review Potential | 3/5 | Moderate — operational tool |
| MRR Path | 4/5 | Ongoing time tracking = natural recurring |
| Build Feasibility | 4/5 | Mobile time-tracking app + Buildium API integration = 3-4 week MVP |
| Boring Business Bonus | 5/5 | Property management = unglamorous, loyal once adopted |

**Verdict**: EXPLORE FURTHER
**Decision Status**: NEW
**Next Steps**: Validate with 5-10 property management companies using Buildium/AppFolio; confirm Buildium API access for expense line items; check if Buildium has an open integration market
**Risks**: (1) Buildium could add this natively; (2) small addressable market (mid-size PM companies specifically); (3) depends on third-party API availability
**Key Source Links**:
- https://www.reddit.com/r/PropertyManagement/comments/1lr0v3d/how_do_you_keep_track_of_maintenance_hours_and/ ← "Takes an extremely long time and many man hours"
**Signal Frequency**: New signal today — first appearance

---

## Tier 2: Worth Exploring (Score 55–74)

### Mobile Detailer Supply Inventory & Per-Job Cost Tracker — Score: 72/105
*(Sub-angle of `pressure-washing-detailing.md` — no separate file needed)*
Mobile detailers track chemicals, towels, pads, consumables via "notebook, eyeballing levels, or not at all." App developer actively researching this gap in r/AutoDetailing — signals a build is coming but nothing exists yet. Supply tracking differentiates from generic booking tools. $29-49/mo (price-sensitive audience). **Covered by pressure-washing-detailing.md** — the auto detailing angle is already baked in; no new file needed.
Key source: https://www.reddit.com/r/AutoDetailing/comments/1sd9ppq/mobile_detailers_how_do_you_actually_track_your/

### Weather-Based Scheduling for Outdoor Contractors (Prelay) — Score: 69/105
*(Canonical file: `weather-scheduling-outdoor-contractors.md`)*
Prelay (SpaceX/Varda founder, 2 HN points) just launched with ensemble weather + ground-wetness models for 62 activity types across 12 trades. The problem is real (owner wakes at 4am to check weather for each job site). But market validation is very early. The integration play (widget into existing FSMs) is a stronger angle than standalone. **PASS for now — monitor Prelay's traction; build simpler version if they stall.**
Key source: https://news.ycombinator.com/item?id=50341158

### Full AI OS for Trades (Beyond Voice/Scheduling) — Score: 65/105
*(Folded into `field-service-management.md`)*
Broccoli $52M (Khosla), Drillbit $4.4M (YC), Probook $40M (a16z/Sequoia), WorkHero $5M all in this space. Too complex and capital-intensive for a 4-person team to compete head-on. Better approach: build narrow feature wedge (pricebook, analytics, LSA) and upsell from there. Rezora IO (YC 2026, $23K MRR) confirms even narrow wedges monetize.

### Maintenance Gardener AI CRM — Score: 65/105
*(Better folded into FSM/job costing tool)*
HN comment from professional maintenance gardener describes full AI-powered workflow (Claude + MCP → quotes → Xero invoices from truck). Demand is real but the product is an n=1 DIY. Building a packaged version would have zero competition but also tiny niche. Better approach: fold the AI proposal/invoicing angle into existing FSM or job costing product.
Key source: https://github.com/mjsweet/intake-api

### Heavy Civil Construction ERP — Score: 62/105
*(No standalone file — complex domain)*
13-year internal tool seeking tech co-founder. Near-term goal: 10-20 contractors at $600-1K/mo. FOUNDATION integration = wedge. But LTD fit is low (enterprise buyers), build complexity is high, and domain knowledge required is deep. **PASS for now — monitor if the cofounder search completes and they ship.**
Key source: https://www.indiehackers.com/post/looking-for-technical-cofounder-for-heavy-civil-saas-e83fa0798b

### PE Roll-Up / Franchise Operations Dashboard — Score: 55/105
FranConnect has brand presence; complexity too high for 4-person team; franchise operators are not typical AppSumo buyers. The insight (4 out of 900 home service franchise brands mandate FSM) is actionable but the sales motion (close PE platform owner) requires enterprise relationships. **PASS.**

---

## Tier 3: Weak / Pass (Score <55)

| Idea | Score | Reason for Pass |
|------|-------|----------------|
| **QuickBooks Replacement (Generic)** | 45/105 | VERY crowded market — Wave, FreshBooks, Xero, Zoho Books. Only viable as a niche vertical (QB for trades = already captured in trade-job-cost-accounting.md) |
| **FreshLeads (Local Biz Lead Gen, Google Maps scraping)** | 50/105 | B2B lead gen infrastructure tool, not a boring-business vertical SaaS; serves sales teams not trade operators; crowded (Apollo, Clay, Bright Data); $100 MRR at 6 weeks = slow validation |
| **Bespoke/No-Code Platform for Trades ("Replit for Trades")** | 48/105 | Platform play = 8-12 month minimum; requires ecosystem development; Dalton Mills $9.2M well-funded in this space; too complex for 4-person team |
| **Bank Statement Converter** | — | Validation signal only (confirms boring SaaS thesis); not an idea to build — $16K MRR utility SaaS already exists |

---

## Top 3 Recommendations

1. **Pest Control FSM with Compliance Recordkeeping** — Score: 101/105 — An operator literally built their own software after 13 years of frustration with the available tools. FIFRA chemical logs are a legal mandate, GorillaDesk leaves clear gaps, and $2M ARR exists in this niche. Instant quote widget on website + FIFRA chemical log + flat $79/mo = unoccupied. — Key source: https://www.reddit.com/r/PestControlIndustry/comments/1jwiqrk/how_much_are_you_spending_on_your_crm_per_month/

2. **Property Management for Small Landlords (1–50 Units)** — Score: 100/105 — Multi-source validation today: 29-comment Reddit thread, $25K custom CRM signal, PropManager $5/unit new entrant confirming the market, and comprehensive competitor analysis showing DoorLoop/Avail pricing failures. 19M US small landlords, flat $39/mo unlimited units = unoccupied. — Key source: https://www.reddit.com/r/PptyMgmtSoftware/comments/1wbvl7n/property_management_software_help/

3. **Cleaning Business AI Crew Scheduling** — Score: 100/105 — Today's competitor analysis provides the clearest documentation yet: ZenMaid still has daily manual routing by hand, BookingKoala platform collapse = active refugee market, and NO tool proposes an optimal crew-to-job daily assignment (vs. just reordering stops). The AI scheduling angle is a fresh differentiator at a visceral, measurable ROI. — Key source: https://www.reddit.com/r/cleaningbusiness/comments/1vtvlzl/

---

*Total ideas evaluated today: 28 unique ideas across 4 raw files. 22 Tier 1, 5 Tier 2, 4 Tier 3.*
*Shortlisted files updated: pest-control.md, auto-repair-shop-management.md, property-management.md, cleaning-service-management.md, landscaping-lawn-care.md, small-fleet-trucking-tms.md, hvac-small-shop-dispatch.md, field-service-management.md, insurance-agency-management.md, dental-practice.md, post-job-follow-up-automation.md, pressure-washing-detailing.md, pool-service-management.md, roofing-contractor-crm.md, hvac-maintenance-agreements.md, ai-voice-booking-trades.md, accounting-document-collection-portal.md, ai-voice-receptionist-trades.md, google-lsa-trades-crm.md, trade-job-cost-accounting.md, moving-company.md, restaurant-operations.md*
*New shortlisted file created: property-maintenance-time-tracking.md*
