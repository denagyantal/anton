# Idea Evaluation - 2026-11-22

**Sources scanned today:**
- `reddit-2026-11-22.md` — 12 ideas (r/FieldService, r/OwnerOperators, r/PptyMgmtSoftware, r/InsuranceAgent, r/cleaningbusiness, r/PestControlIndustry, r/microsaas, r/restaurateur, r/Dentistry, r/landscaping, r/smallbusiness)
- `hn-indiehackers-2026-11-22.md` — 14 signals (Crewbird, Prelay, Pest Control $2M ARR, Avenue AU$85K/mo, AI Voice, Breezy $250K ARR, CraftBoop, Conkoa, WithoutMe, Clawbolt, LSA gap, ZenMaid $3M, FreshLeads, Gardener AI)
- `competitor-analysis-2026-11-22.md` — 4 deep-dives (HVAC FSM, Property Management, Pest Control/Lawn, Auto Repair)
- `competitor-analysis-boring-biz-2026-11-22.md` — duplicate of above
- `trends-2026-11-22.md` — 10 trends (AI Voice, AI OS, AI Dispatch Trucking, PM AI, Dental AI, Auto Repair AI, Construction Estimating, Pest/Lawn SMB, Bespoke Platform, Franchise Ops, Permit Compliance)

**Existing shortlisted ideas checked for deduplication:** 240+ canonical files reviewed.

---

## Tier 1: Strong Opportunities (Score 75+)

### 1. Pest Control FSM with Compliance Recordkeeping — Score: 101/105
*(Canonical file: `pest-control.md`)*

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | HN thread 448pts/182 comments confirms $2M ARR in space; Reddit operator built own software after 13 years; PestPro.app just launched; EarthaPro + Love entering market |
| Competitor Weakness | 5/5 | FieldRoutes (buggy, data hostage $500), GorillaDesk (no WDO/WDI, no instant quote, routing ignores traffic), PestPac ($40K cancellation fee) |
| LTD Viability | 4/5 | Core scheduling LTD viable at $79; compliance module as monthly add-on is better model |
| No Free Tier | 5/5 | Compliance is a legal mandate — will pay from day 1 |
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
- https://www.reddit.com/r/PestControlIndustry/comments/1voc4cl/owneroperator_philly_we_built_our_own_field/ ← operator built own software (highest conviction signal)
- https://news.ycombinator.com/item?id=47509571 ← 448pts/182 comments HN thread, $2M ARR confirmed
- https://www.capterra.com/p/146076/FieldRoutes/reviews/?page=6 ← "$500 to export your own data"
- https://servicebusinessacademy.org/top-7-differences-gorilladesk-pestpac-pest-control-2026/
- https://pestpro.app — new entrant just launched
**Signal Frequency**: Daily signal for 30+ consecutive days — increasing

---

### 2. Auto Repair Shop Management (Declined-Work Recovery) — Score: 100/105
*(Canonical file: `auto-repair-shop-management.md`)*

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | 280,000+ US independent shops; CarSignal YC S26 at $200/mo (40+ shops in 18 states); Autograff ShopOS Oct 2026 launch; Garage360 entering |
| Competitor Weakness | 5/5 | Two-way texting locked to Tekmetric $439/mo; DVI gated to Shopmonkey $359+/mo; Shopmonkey 2.0 "biggest dumpster fire"; RepairShopr exodus; AutoLeap annual lock-in = live migration events |
| LTD Viability | 4/5 | "Recovers its own cost in first month" ROI story = strong LTD argument; $89 LTD single location |
| No Free Tier | 5/5 | Shop owners pay from day 1 — 60% still on paper is the upside |
| Channel Access | 5/5 | r/AutoMechanic, diag.net, Facebook "Independent Shop Owners", NAPA AutoCare newsletters |
| Content Potential | 4/5 | "How to recover declined repairs", "auto repair shop software 2026" |
| AppSumo Fit | 5/5 | No LTD auto repair tool on AppSumo — confirmed first-mover |
| Review Potential | 4/5 | High-stakes software decision = shops leave detailed reviews |
| MRR Path | 5/5 | Shop management is recurring by nature; upsell: AI voice receptionist, parts ordering |
| Build Feasibility | 4/5 | DVI + 2-way SMS + declined-work follow-up = manageable 4-6 week MVP |
| Boring Business Bonus | 5/5 | Auto repair = boring, non-technical owner-operators, deeply unsexy |

**Verdict**: BUILD
**Decision Status**: VALIDATING — `../ideas/decisions.md`
**Next Steps**: Prototype declined-work recovery module; approach RepairShopr refugees and Shopmonkey 2.0 migrators on Reddit/diag.net
**Risks**: (1) CarSignal YC = well-funded competition entering; (2) Autograff ShopOS Oct 2026 = window narrowing; (3) established brands (Tekmetric, AutoLeap) can copy features
**Key Source Links**:
- https://saasopportunities.com/blog/saas-hiding-in-independent-auto-repair-shops-nobody-building-this ← best market overview
- https://autoshopcoaching.net/declined-repair-follow-up/ ← declined work ROI data
- https://www.ycombinator.com/companies/carsignal ← competitive landscape
- https://capterra.com/p/190952/Tekmetric/reviews/?page=4 ← "too many clicks"
- https://ghlcarmechanicsnapshot.com/blog/tekmetric-vs-shopmonkey-vs-autoleap-vs-shop-ware/ ← tier wall documentation
**Signal Frequency**: 30-day streak at 100/105 — stable at maximum

---

### 3. Property Management for Small Landlords (1–50 Units) — Score: 100/105
*(Canonical file: `property-management.md`)*

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | 19M+ US small landlords; TurboTenant 1M+ landlords (absorbed TenantCloud); Bevado $10M seed; Dwelly $170M Series B; Lette $6.5M |
| Competitor Weakness | 5/5 | AppFolio 50-unit minimum + $298/mo; DoorLoop "hot garbage" Capterra; "even the new tech alternatives cost $15K just to onboard"; TurboTenant security breach Jan 2026 |
| LTD Viability | 4/5 | $69–99 LTD for core features; small landlords hate subscriptions |
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
**Next Steps**: Build Tenancy Lifecycle Manager with maintenance loop closure (the feature everyone says is missing); target TurboTenant/DoorLoop migrants
**Risks**: (1) Many new entrants in 2026 (Domara, RentValet, Lettance, Bevado $10M); (2) free-tier competition from TurboTenant/Innago; (3) tenant payment processing regulatory complexity
**Key Source Links**:
- https://www.reddit.com/r/PptyMgmtSoftware/comments/1wbvl7n/property_management_software_help/ ← 29-comment thread
- https://keywise.app/blog/property-management-software-small-landlords ← best gap analysis
- https://www.businesswire.com/news/home/20261116477086/en/Bevado-Raises-10-Million-Seed ← market validation
- https://turbotenant.pissedconsumer.com/complaints/RT-P.html ← TurboTenant failure data
- https://practicallandlord.co/best-property-management-software-small-landlords
**Signal Frequency**: Daily signal for 30+ consecutive days — stable at maximum

---

### 4. Field Service Management + Analytics for Small Trades (1–15 Techs) — Score: 98/105
*(Canonical file: `field-service-management.md`)*

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | FieldPulse $80M raised; Probook $40M a16z/Sequoia; Broccoli $52M; Avenue AU$85K/mo bootstrapped; "Sunday Excel ritual" for 8-15 tech shops confirmed in multiple threads |
| Competitor Weakness | 5/5 | Jobber zero analytics; HCP no job costing; FieldPulse $99/user = $990+/mo for 10-tech shop; ServiceTitan $11,400/mo real-world bill documented |
| LTD Viability | 4/5 | Analytics-only overlay at $79-99; full FSM LTD at $149-199 |
| No Free Tier | 5/5 | Businesses have immediate operational need |
| Channel Access | 5/5 | r/HVAC, r/FieldService, r/ContractorsUS, r/WhichCRM — all highly active |
| Content Potential | 4/5 | "Jobber analytics dashboard", "HVAC business profitability" |
| AppSumo Fit | 5/5 | No HVAC/FSM tool has pursued AppSumo — category-first confirmed |
| Review Potential | 4/5 |  |
| MRR Path | 5/5 | FSM = core operations, monthly recurring by definition |
| Build Feasibility | 4/5 | Analytics overlay (read-only Jobber/HCP API) = 3-4 week MVP; full FSM = 6-8 weeks |
| Boring Business Bonus | 5/5 | HVAC/plumbing/electrical = deeply boring blue-collar industries |

**Verdict**: BUILD (analytics overlay first, full FSM as Phase 2)
**Decision Status**: VALIDATING — `../ideas/decisions.md`
**Next Steps**: Build read-only analytics dashboard connecting to Jobber/HCP API — weekly report on gross margin by job type, callback rate by tech, top/bottom 10 customers. Validate with 5 HVAC owners from r/HVAC
**Risks**: (1) Many well-funded entrants (Broccoli, Probook, Dalton Mills) targeting adjacent segments; (2) Jobber could add analytics natively; (3) API access risk if Jobber restricts integrations
**Key Source Links**:
- https://www.reddit.com/r/FieldService/comments/1tggzn6/anyone_actually_know_their_numbers_or_are_we_all/ ← "Sunday Excel ritual"
- https://www.reddit.com/r/WhichCRM/comments/1qwwl24/built_a_field_service_crm_because_i_was_tired_of/ ← flat pricing CRM builder
- https://news.ycombinator.com/item?id=50418273 ← Crewbird + Google LSA integration
- https://www.globenewswire.com/news-release/2026/6/23/3316215 ← Probook $40M validation
- https://www.contractoredge.io/reviews/housecall-pro-review-2026/ ← HCP no job costing
**Signal Frequency**: Daily signal for 20+ consecutive days — increasing

---

### 5. Small Fleet Trucking TMS (1–5 Trucks, IFTA + Compliance) — Score: 99/105
*(Canonical file: `small-fleet-trucking-tms.md`)*

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | 350K+ owner-operators; TrueMile YC F26 (AI trucking company model); Aura Dispatch $5%/load; Haullytics (rate-con AI, paying customers); IFTA thread 24 comments all confirming manual pain |
| Competitor Weakness | 5/5 | TruckingOffice "built in 2009"; ITS Dispatch "too cumbersome"; TMS $500–2000+/mo built for 20+ trucks; McLeod $500K for mid-size + resells rate data |
| LTD Viability | 3/5 | Truckers prefer monthly/per-load; LTD for IFTA/compliance standalone could work at $79-99 |
| No Free Tier | 5/5 | IFTA is legally required quarterly — will pay |
| Channel Access | 4/5 | r/OwnerOperators (100K+ members), r/Truckers, r/FreightBrokers |
| Content Potential | 4/5 | "IFTA calculator owner operator", "small fleet TMS 1-5 trucks" |
| AppSumo Fit | 3/5 | Truckers less likely AppSumo buyers; direct community marketing stronger |
| Review Potential | 4/5 | Trucking forums very active with software reviews |
| MRR Path | 5/5 | Compliance + dispatch = core ongoing operations |
| Build Feasibility | 4/5 | ELD CSV import + IFTA calc + compliance tracker = 4-6 week MVP |
| Boring Business Bonus | 5/5 | Trucking = deeply boring, essential, non-glamorous |

**Verdict**: BUILD
**Decision Status**: VALIDATING — `../ideas/decisions.md`
**Next Steps**: Ship IFTA auto-calculator from ELD CSV import as standalone MVP; validate in r/OwnerOperators; layer dispatch + compliance tracking in v2
**Risks**: (1) TrueMile (YC F26) and Aura Dispatch entering with AI-native approach; (2) ELD data formats vary by provider; (3) DOT/FMCSA regulatory knowledge required
**Key Source Links**:
- https://www.reddit.com/r/OwnerOperators/comments/1rq8sjh/small_fleet_owner_15_trucks_called_her_admin_work/ ← "very complicated" despite 22yr accounting experience
- https://www.reddit.com/r/Truckdrivers/comments/1sqzz8e/ifta_time_again_and_im_already_dreading_it_what/ ← IFTA pain
- https://www.ycombinator.com/launches/Waf-truemile-the-trucking-company-run-by-ai-agents ← TrueMile YC F26
- https://www.accessnewswire.com/newsroom/en/computers-technology-and-internet/aura-dispatch-brings-ai-dispatch-to-small-trucking-fleets-as-truc-1243518
- https://www.reddit.com/r/OwnerOperators/comments/1vkuf33/ifta_quarterly_workflow_for_15_trucks_what/
**Signal Frequency**: Strong daily signal for 20+ consecutive days — increasing

---

### 6. HVAC Flat-Rate Pricebook + Job Costing for 1–5 Tech Shops — Score: 97/105
*(Canonical file: `hvac-flat-rate-pricebook.md`)*

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | Profit Rhino $119+/mo (pricebook only) confirms paying market; 300K+ HVAC/plumbing/electrical shops |
| Competitor Weakness | 5/5 | Jobber zero pricebook at any tier confirmed; HCP pricebook gated to $149+/mo; ServiceTitan $245-500/tech/mo overkill |
| LTD Viability | 4/5 | $79 LTD for standalone pricebook; $149 for pricebook + analytics |
| No Free Tier | 5/5 | Techs pricing from memory lose margin every job |
| Channel Access | 5/5 | r/HVAC (140K+ members), FB "HVAC Business Owners" (45K+), ACCA forums |
| Content Potential | 4/5 | "HVAC flat-rate pricing guide", "how to price HVAC repair jobs" |
| AppSumo Fit | 4/5 | No HVAC/trades pricebook on AppSumo — first-mover |
| Review Potential | 4/5 |  |
| MRR Path | 5/5 | Pricebook → dispatch → invoicing → analytics = natural upsell ladder |
| Build Feasibility | 4/5 | Pre-loaded HVAC pricebook (parts + labor) + good/better/best proposals = 3-4 week MVP; supply-house sync complex |
| Boring Business Bonus | 5/5 | HVAC = deeply boring, non-technical owners |

**Verdict**: BUILD
**Decision Status**: VALIDATING — `../ideas/decisions.md`
**Next Steps**: Pre-build HVAC/plumbing pricebook with 500 common tasks; ship good/better/best proposal PDF export; test on r/HVAC
**Risks**: (1) Many FSM tools adding pricebook features; (2) keeping pricing data current is an ongoing operational requirement; (3) pricing varies heavily by region
**Key Source Links**:
- https://mainstreetpicks.com/hvac/pricebook-and-flat-rate-software ← gap documentation
- https://www.contractoredge.io/reviews/housecall-pro-review-2026/ ← HCP no job costing
- https://fieldservicecompare.com/articles/jobber-review-2026/ ← Jobber limitations
- https://www.reddit.com/r/WhichCRM/comments/1qq05ee/fieldpulse_users_whats_your_actual_experience_been/ ← FieldPulse complaints
- https://www.reddit.com/r/HowToEntrepreneur/comments/1u9gxe1/what_is_the_best_service_company_software_that_i/
**Signal Frequency**: Strong recurring signal — 30+ days

---

### 7. Insurance AMS for Small Independent Agencies (1–10 Producers) — Score: 98/105
*(Canonical file: `insurance-agency-management.md`)*

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | 38K independent P&C agencies in US; AMS360 $35K/year (confirmed real-world pricing); Applied Epic $4,500 data export fee |
| Competitor Weakness | 5/5 | "They all suck" consistent thread title; AMS360 14% YoY hike 3 consecutive years; QQCatalyst 1-star Capterra reviews; EZLynx weak on commercial lines |
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
**Decision Status**: NEW — not previously assessed with today's direct r/InsuranceAgent signals
**Next Steps**: Prototype flat-rate agency dashboard (unlimited users, $69-99/mo); skip IVANS for MVP; start with ACORD 25/130 certificate generation as differentiating feature
**Risks**: (1) IVANS integration = real technical complexity for full product; (2) domain expertise required (P&C insurance); (3) NowCerts/HawkSoft have brand presence in this niche
**Key Source Links**:
- https://www.reddit.com/r/InsuranceAgent/comments/1rr0jkb/horribly_inefficient_agency_workflows/ ← "horrendously inefficient"
- https://www.reddit.com/r/InsuranceAgent/comments/1ob4nms/hubspot_or_something_else_i_hate_all_amss/ ← "I hate all AMS's"
- https://www.reddit.com/r/InsuranceAgent/comments/1tbbsct/thinking_about_migrating_off_ams360_for_our/ ← AMS360 migration
- https://selecthub.com/p/insurance-agency-management-systems/ams360 ← pricing data
- https://www.reddit.com/r/InsuranceAgent/comments/1s6joyx/how_the_hell_do_i_track_my_stuff/
**Signal Frequency**: Strong recurring signal — 30+ days

---

### 8. Cleaning Business CRM with Structured Client Notes — Score: 89/105
*(Canonical file: `cleaning-service-management.md`)*

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | ZenMaid $3M/yr bootstrapped (cleaning SaaS); BlastoClean entering; 200K+ Hispanic-owned cleaning businesses identified as underserved |
| Competitor Weakness | 3/5 | ZenMaid is established; gap is in structured crew cards vs generic notes field |
| LTD Viability | 4/5 | $59-79 LTD compelling for small cleaning ops |
| No Free Tier | 4/5 |  |
| Channel Access | 5/5 | r/cleaningbusiness (50K+ members), Facebook cleaning groups, r/sweatystartup |
| Content Potential | 4/5 | "cleaning business CRM", "how to manage cleaning crew schedules" |
| AppSumo Fit | 4/5 | ZenMaid pricing gap above commodity = room for LTD entrant |
| Review Potential | 4/5 |  |
| MRR Path | 4/5 | Recurring scheduling + reactivation sequences |
| Build Feasibility | 5/5 | Structured client profile cards + mobile crew view = 2-3 week MVP |
| Boring Business Bonus | 4/5 | Cleaning = boring local services |

**Verdict**: BUILD
**Decision Status**: VALIDATING — `../ideas/decisions.md`
**Next Steps**: Ship bilingual (EN/Spanish) structured client card MVP; validate reactivation SMS feature with 5-10 cleaning business owners from r/cleaningbusiness
**Risks**: (1) ZenMaid has strong brand in this niche; (2) Solo cleaning operators may not pay even $29/mo; (3) Spanish-language requires localization effort
**Key Source Links**:
- https://www.reddit.com/r/smallbusiness/comments/1p5f7d0/paying_120month_for_software_that_does_60_of_what/
- https://www.reddit.com/r/cleaningbusiness/comments/1v6dkpm/how_are_you_tracking_jobs_and_customer_notes_once/
- https://www.indiehackers.com/post/tech/from-a-cleaning-side-hustle-to-a-3m-yr-saas-for-cleaning-services-suhsqkDZB1zIwRmXxrFm ← ZenMaid $3M/yr
- https://www.reddit.com/r/cleaning_business/comments/1rpun4p/im_building_a_simpler_alternative_to/
**Signal Frequency**: Recurring — multiple days per week

---

### 9. Tax Document Collection Portal for Small CPA Firms — Score: 91/105
*(Canonical file: `accounting-document-collection-portal.md`)*

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | Builder went 0→$8.5K revenue in 14 months organically from r/Bookkeeping alone |
| Competitor Weakness | 4/5 | SmartVault $65-100/mo enterprise; TaxDome overbuilt; Liscio $50/client/year; gap at $29/mo for 1-5 person firms |
| LTD Viability | 5/5 | Annual pain = perfect LTD use case; tax season justifies buying once |
| No Free Tier | 4/5 | CPAs will pay to solve Jan-April chaos |
| Channel Access | 4/5 | r/Bookkeeping, r/taxpros, r/microsaas |
| Content Potential | 4/5 | "CPA document collection software", "tax document portal small firm" |
| AppSumo Fit | 4/5 | Accounting tools sell well on AppSumo |
| Review Potential | 4/5 |  |
| MRR Path | 4/5 | Year-round document storage extends use case beyond tax season |
| Build Feasibility | 5/5 | Checklist + file upload portal + e-sign + status dashboard = 2-3 week MVP |
| Boring Business Bonus | 4/5 | Accounting firms = unglamorous, non-technical, loyal |

**Verdict**: BUILD
**Decision Status**: VALIDATING — `../ideas/decisions.md`
**Next Steps**: Ship minimal portal (send checklist → client uploads → CPA downloads organized folder); target r/Bookkeeping and r/taxpros in December ahead of tax season
**Risks**: (1) Another builder already at $8.5K in this space — market may become crowded; (2) DocuSign/Adobe Acrobat incumbent for e-sign; (3) seasonal demand pattern challenges MRR
**Key Source Links**:
- https://www.reddit.com/r/microsaas/comments/1u38pi1/sharing_how_i_went_from_0_to_85k_in_revenue_in_14/ ← builder at $8.5K MRR validated
- https://www.reddit.com/r/xero/comments/1kfarho/whats_the_one_thing_you_wish_xero_could_do_which/
- https://www.reddit.com/r/Bookkeeping/comments/17z4m17/what_features_would_you_change_about_your/
**Signal Frequency**: Recurring — multiple confirmed sources

---

### 10. HVAC Maintenance Plan Management (Standalone Layer) — Score: 87/105
*(Canonical file: `hvac-maintenance-agreements.md`)*

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | Breezy $250K ARR in 9 months (now Sera Systems/acquired) = highest conviction single-product validation |
| Competitor Weakness | 4/5 | HVAC shops run maintenance plans on spreadsheets/sticky notes; existing FSM tools don't model multi-axis state machine correctly |
| LTD Viability | 3/5 | Complex ongoing state management; LTD for tool + 1-year pricing tier |
| No Free Tier | 5/5 | Revenue leakage from unmissed renewals = clear ROI |
| Channel Access | 4/5 | HVAC forums, r/HVAC, r/ProHVACR |
| Content Potential | 4/5 | "HVAC maintenance agreement software", "how to manage HVAC service contracts" |
| AppSumo Fit | 3/5 | Less obvious AppSumo fit due to complexity |
| Review Potential | 4/5 |  |
| MRR Path | 5/5 | "400 plans under management → obvious ROI story" — $199/mo per shop |
| Build Feasibility | 3/5 | Breezy needed 3 rebuilds + 1,000 customer conversations to get it right |
| Boring Business Bonus | 5/5 | HVAC = deeply boring |

**Verdict**: EXPLORE FURTHER
**Decision Status**: VALIDATING — `../ideas/decisions.md`
**Next Steps**: Interview 5-10 HVAC owners about maintenance plan management pain specifically; understand the state machine before committing to build
**Risks**: (1) Breezy needed 3 rebuilds = domain complexity is real; (2) Sera Systems/Breezy = acquired, may resurface as competition; (3) requires deep HVAC domain knowledge
**Key Source Links**:
- https://www.silasreinagel.com/product/software-engineering/saas/vertical-saas/founding-engineer/2023/11/15/breezy-0-to-250k-arr-owning-the-manual-workflow/ ← Breezy $250K ARR case study
**Signal Frequency**: Recurring — multiple days

---

### 11. Post-Job Follow-up Automation (SMS-first for Trades) — Score: 92/105
*(Canonical file: `post-job-follow-up-automation.md`)*

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 4/5 | CraftBoop just launched at $29/mo (email-only); Avenue AU$85K/mo includes review requesting |
| Competitor Weakness | 4/5 | CraftBoop email-only; existing tools stop at answering the call; no SMS-first + direct Google review link at affordable price |
| LTD Viability | 5/5 | Simple automation = natural LTD; $299 AppSumo launch |
| No Free Tier | 4/5 |  |
| Channel Access | 5/5 | r/HVAC, r/smallbusiness, r/cleaningbusiness — all active |
| Content Potential | 4/5 | "get more Google reviews HVAC", "automated follow-up service business" |
| AppSumo Fit | 5/5 | Simple automation with ROI story = strong AppSumo category |
| Review Potential | 4/5 |  |
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
- https://howtomakemoney.io/cases/avenue-tom-holliday-tradie-widget-55k/ ← Avenue AU$85K/mo model
**Signal Frequency**: Recurring — multiple confirmed sources

---

### 12. Google LSA ROAS Analytics for Field Service — Score: 89/105
*(Canonical file: `google-lsa-trades-crm.md`)*

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 4/5 | Crewbird building it; "Google LSA dashboard left a lot to be desired" (HN comments); $500-5K/mo LSA spend with zero attribution |
| Competitor Weakness | 5/5 | Google LSA has terrible built-in analytics; no attribution from LSA call → job → invoice value |
| LTD Viability | 5/5 | Analytics/reporting = natural LTD; $799 lifetime |
| No Free Tier | 4/5 |  |
| Channel Access | 4/5 | r/HVAC, r/LocalSEO, home service business Facebook groups |
| Content Potential | 4/5 | "Google LSA ROI tracking", "HVAC ad attribution software" |
| AppSumo Fit | 5/5 | Analytics tools sell very well on AppSumo |
| Review Potential | 3/5 |  |
| MRR Path | 4/5 | Monthly analytics subscription natural |
| Build Feasibility | 4/5 | LSA API webhook + FSM API reads + attribution dashboard = 3-4 week MVP |
| Boring Business Bonus | 4/5 |  |

**Verdict**: BUILD (as companion product to FSM)
**Decision Status**: VALIDATING
**Next Steps**: Wire Google LSA call webhook → auto-create lead in Jobber → track job outcome → report ROAS; test with 5 HVAC shops spending on LSA
**Risks**: (1) Google API access restrictions; (2) Small initial market (LSA users who also use Jobber/HCP); (3) Crewbird is building this natively
**Key Source Links**:
- https://news.ycombinator.com/item?id=50418273 ← Crewbird + LSA discussion
- https://getcrewbird.com/
**Signal Frequency**: Emerging — 3-5 confirmed sources in recent days

---

### 13. Permit & Compliance Tracker for Licensed Contractors — Score: 84/105
*(Canonical file: `compliance-licensing-trades.md`)*

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 4/5 | Government digitization wave creating API layer; multiple municipalities went live 2026; GovWell contract confirms market |
| Competitor Weakness | 4/5 | No private-sector winner for multi-jurisdiction license tracking yet; AgentSync $75M (enterprise); nothing at $49-99/mo |
| LTD Viability | 4/5 | License tracking = one-time setup + ongoing reminders; natural LTD at $99-199 |
| No Free Tier | 4/5 | Miss a license renewal = producer can't work = real revenue risk |
| Channel Access | 4/5 | r/ContractorsUS, r/electricians, r/HVAC |
| Content Potential | 3/5 | "contractor license renewal reminder", "how to track trade certifications" |
| AppSumo Fit | 4/5 |  |
| Review Potential | 3/5 |  |
| MRR Path | 4/5 | Annual license cycles + multi-state tracking = strong retention |
| Build Feasibility | 4/5 | License tracker MVP = 3-4 weeks; jurisdiction database = data work |
| Boring Business Bonus | 5/5 | Licensed contractors = deeply boring, compliance-focused |

**Verdict**: EXPLORE FURTHER
**Decision Status**: NEW
**Next Steps**: Survey 20 electrical/HVAC/plumbing contractors on how they currently track license renewals; size the jurisdiction database effort
**Risks**: (1) Government API access varies; (2) jurisdictional database requires ongoing maintenance; (3) low emotional urgency (most contractors haven't been fined yet)
**Key Source Links**:
- https://www.baltimorecountymd.gov/departments/communications/news/baltimore-county-launches-new-trade-permit-portal-electrical
- https://www.newstribune.com/news/2026/nov/18/jefferson-city-moves-business-licensing-system/
- https://www.governor.ny.gov/news/video-audio-photos-rush-transcript-cutting-red-tape-governor-hochul-announces-launch-nation
**Signal Frequency**: New signal today — first appearance from trends

---

### 14. Restaurant Food Cost & Invoice Management (1–3 Locations) — Score: 77/105
*(Canonical file: `restaurant-operations.md`)*

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 4/5 | Restaurant365 $10,876/year for 2 locations = clear pricing pain; MarginEdge praised but costly |
| Competitor Weakness | 4/5 | R365 too expensive; XtraChef integrations break constantly; MarginEdge lacks commissary |
| LTD Viability | 4/5 | $149-199 LTD for core cost-tracking |
| No Free Tier | 4/5 |  |
| Channel Access | 3/5 | r/restaurateur, r/restaurantowners, r/ToastPOS |
| Content Potential | 3/5 |  |
| AppSumo Fit | 3/5 | Less typical AppSumo category |
| Review Potential | 4/5 | Restaurant owners very vocal on Capterra |
| MRR Path | 4/5 |  |
| Build Feasibility | 3/5 | OCR invoice scanning + recipe costing + POS integration = moderately complex |
| Boring Business Bonus | 4/5 | Restaurant operations = not glamorous |

**Verdict**: EXPLORE FURTHER
**Decision Status**: VALIDATING
**Next Steps**: Survey restaurant owners in r/restaurantowners about current food cost tracking workflow; understand POS integration requirements before committing
**Risks**: (1) Restaurant churn rate very high; (2) OCR invoice scanning is table stakes (many existing tools); (3) MarginEdge UX praised = strong competitor
**Key Source Links**:
- https://www.reddit.com/r/restaurateur/comments/1ddodi7/is_restaurant_365_worth_the_1087632_a_year_for/
- https://www.reddit.com/r/restaurantowners/comments/1ismf0h/restaurant_365_vs_margin_edge_for_cost_tracking/
- https://www.reddit.com/r/ToastPOS/comments/1jz8yv0/xtrachef_vs_marginedge/
**Signal Frequency**: Recurring — multiple sources

---

### 15. AI Voice Receptionist for Trades (Niche Vertical Focus) — Score: 81/105
*(Canonical file: `ai-voice-receptionist-trades.md`)*

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | Broccoli $52M (Khosla+YC, 1,500 customers); Probook $40M a16z/Sequoia; Rezora IO YC 2026; Avoca $1B valuation |
| Competitor Weakness | 3/5 | Market getting crowded at top (Broccoli, Avoca, Sameday); gap = sub-5-employee trades at $50-150/mo + niche verticals (garage door, chimney, irrigation) |
| LTD Viability | 2/5 | Ongoing AI minute costs make LTD risky |
| No Free Tier | 4/5 |  |
| Channel Access | 5/5 | r/HVAC, r/plumbing — active |
| Content Potential | 4/5 |  |
| AppSumo Fit | 2/5 | Ongoing AI costs = AppSumo difficult |
| Review Potential | 3/5 |  |
| MRR Path | 5/5 | Ongoing voice minutes = very strong MRR |
| Build Feasibility | 3/5 | Vapi/Retell wrapping + FSM integration = 2-4 weeks for voice-only MVP |
| Boring Business Bonus | 5/5 |  |

**Verdict**: EXPLORE FURTHER (niche vertical approach only; general voice AI is crowded)
**Decision Status**: VALIDATING
**Next Steps**: Target underserved niche verticals (garage door repair, chimney sweep, irrigation service) where Avoca/Broccoli don't have brand presence yet
**Risks**: (1) Broccoli $52M + Probook $40M = enormous competitive pressure; (2) AI voice costs make margin difficult at $50-150/mo price point; (3) requires sales effort + onboarding
**Key Source Links**:
- https://www.newswire.com/news/broccoli-raises-52m-led-by-khosla-ventures-to-help-home-services-businesses
- https://www.producthunt.com/products/rezora-io-ai-calling-assistant
- https://the-ai-future.com/tools/ai-receptionist-for-home-services-alternatives
**Signal Frequency**: Daily signal — market is heating rapidly

---

### 16. Dental Practice Management — Affordable Cloud Alternative — Score: 78/105
*(Canonical file: `dental-practice.md`)*

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | tab32 Alpine $95/mo with 17 AI agents just launched; Isaac PracticeOS $299/mo, 8K dentists via word of mouth; Kairos Health YC F26 |
| Competitor Weakness | 5/5 | Dentrix $5K startup + $130/mo support; Dentrix Ascend $5K transfer fee; Curve Dental 6+ hour outages; Denticon 12% annual hikes |
| LTD Viability | 1/5 | No — dental practices need ongoing support, compliance, insurance billing |
| No Free Tier | 5/5 |  |
| Channel Access | 3/5 | r/Dentistry, r/Dentists — active but reaching dentists takes dental sales motion |
| Content Potential | 3/5 |  |
| AppSumo Fit | 2/5 | Full PMS not AppSumo-friendly |
| Review Potential | 4/5 |  |
| MRR Path | 5/5 | Long-term contracts + practice stickiness = very strong MRR |
| Build Feasibility | 2/5 | Insurance billing/EDI + X-ray integration + appointment scheduling = 6+ month build |
| Boring Business Bonus | 5/5 |  |

**Verdict**: EXPLORE FURTHER (AI recall/reactivation add-on is better wedge than full PMS)
**Decision Status**: VALIDATING
**Next Steps**: Instead of full PMS, build AI recall automation that integrates with legacy Dentrix/Eaglesoft — lower switching cost, faster time to revenue
**Risks**: (1) Build feasibility is lowest in portfolio (insurance billing/EDI is very complex); (2) Isaac PracticeOS and tab32 Alpine just launched = window narrowing; (3) dental domain expertise required for insurance billing
**Key Source Links**:
- https://tab32.com/tab32-launches-alpine-bringing-agentic-ai-to-independent-dental-practices/
- https://www.prnewswire.com/news-releases/trust-ai-unveils-isaac-practiceos-the-first-practice-management-system-that-thinks-302689219.html
- https://www.ycombinator.com/launches/W5m-kairos-health-ai-front-desk-for-dental-practices
- https://www.reddit.com/r/Dentistry/comments/1nxc0sn/stay_away_from_dentrix_ascend/
**Signal Frequency**: Strong — multiple new entrants launching confirms timing

---

### 17. Booking Widget for Trades (Avenue Model — Online Booking + Google Business) — Score: 93/105
*(Canonical file: `ai-voice-booking-trades.md`)*

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | Avenue: AU$85K/month bootstrapped, grew AU$597→AU$63K in one year |
| Competitor Weakness | 4/5 | Most trades have "contact us form + phone" only; online booking with Google Business "Book Online" button is clear gap |
| LTD Viability | 5/5 | Simple widget = natural LTD at $299 one-time vs Avenue subscription |
| No Free Tier | 4/5 |  |
| Channel Access | 4/5 | r/HVAC, r/electricians, door-to-door to trades |
| Content Potential | 4/5 |  |
| AppSumo Fit | 5/5 | Strong LTD fit |
| Review Potential | 4/5 |  |
| MRR Path | 4/5 | SMS reminders, review requests as recurring add-ons |
| Build Feasibility | 5/5 | Embeddable booking widget + Google Business API = 2-3 week MVP |
| Boring Business Bonus | 4/5 |  |

**Verdict**: BUILD (simpler than Avenue at lower price point)
**Decision Status**: VALIDATING
**Next Steps**: Build Google Business Profile "Book Online" widget for HVAC/pest control specifically (vertical-specific logic); LTD at $299 vs Avenue subscription
**Risks**: (1) Avenue is bootstrapped and growing fast = direct competition; (2) many scheduling tools (Calendly, Setmore) already exist; (3) differentiating from generic booking tools requires trade-specific logic
**Key Source Links**:
- https://www.starterstory.com/stories/this-simple-widget-makes-50k-month
- https://howtomakemoney.io/cases/avenue-tom-holliday-tradie-widget-55k/
- https://stackstarts.com/avenue-branded-trades-booking-widget/
**Signal Frequency**: Recurring — multiple confirmed sources

---

### 18. Contractor Job Costing (QuickBooks Alternative for Trades) — Score: 85/105
*(Canonical file: `trade-job-cost-accounting.md`)*

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 4/5 | 10M+ self-employed contractors; QuickBooks "doesn't do job costing well" = documented pain |
| Competitor Weakness | 4/5 | QuickBooks no job costing; Jobber overkill for solo; Wave free but no job costing |
| LTD Viability | 5/5 | $59 LTD in sweet spot for solo contractors |
| No Free Tier | 3/5 | Wave/Joist exist free — will some contractors stick with free tools? |
| Channel Access | 4/5 | r/landscaping, r/handyman, r/Contractor |
| Content Potential | 3/5 |  |
| AppSumo Fit | 4/5 |  |
| Review Potential | 3/5 |  |
| MRR Path | 4/5 |  |
| Build Feasibility | 5/5 | Job-first workflow = simple data model, 2-3 week MVP |
| Boring Business Bonus | 4/5 |  |

**Verdict**: BUILD (as $19-29/mo or $59 LTD — extremely simple MVP)
**Decision Status**: VALIDATING
**Next Steps**: Ship "job card" MVP: create job → attach quote → log hours + materials → see margin → invoice; test with r/landscaping solo operators
**Risks**: (1) Joist/Invoice2go targeting this market; (2) QuickBooks integration adds complexity; (3) low price point limits revenue
**Key Source Links**:
- https://www.reddit.com/r/landscaping/comments/1riirwi/those_of_you_running_your_own_landscaping_crew/
- https://www.reddit.com/r/handyman/comments/1vivbwg/admin_side_of_the_business_self_employed/
- https://www.reddit.com/r/Contractor/comments/1hnj7em/do_you_use_any_software_to_make_your_business_run/
**Signal Frequency**: Recurring — multiple confirmed sources

---

### 19. Small Batch Manufacturing / BOM Tracker — Score: 79/105
*(Canonical file: `micro-manufacturer-production.md`)*

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 4/5 | 300K+ small batch manufacturers; Craftybase $49/mo exists; thread 57 comments = emotional validation |
| Competitor Weakness | 4/5 | Craftybase craft-focused; Katana $99+/mo growing; "spent 4 months entering data then vendor raised prices" = devastating switching cost story |
| LTD Viability | 5/5 | $79-99 LTD + prominent CSV export (after the horror story) |
| No Free Tier | 3/5 | Many small makers use Airtable or Excel |
| Channel Access | 3/5 | r/smallbusiness, Etsy seller forums, food producer communities |
| Content Potential | 3/5 |  |
| AppSumo Fit | 4/5 |  |
| Review Potential | 3/5 |  |
| MRR Path | 4/5 |  |
| Build Feasibility | 4/5 | Recipe/BOM + batch tracking + inventory = manageable; self-hostable version as differentiator |
| Boring Business Bonus | 3/5 | Small batch manufacturing = moderately boring |

**Verdict**: EXPLORE FURTHER
**Decision Status**: VALIDATING
**Next Steps**: Survey small food/cosmetics producers on current tools; emphasize no-lock-in and self-hostable in positioning
**Risks**: (1) Craftybase/Katana already have traction; (2) diverse market (food vs cosmetics vs craft) makes content strategy harder; (3) lower boring-business score means less LTD premium
**Key Source Links**:
- https://www.reddit.com/r/smallbusiness/comments/1xk9g0m/we_spent_4_months_setting_up_our_production/ ← 57 comments
**Signal Frequency**: Recurring

---

## Tier 2: Worth Exploring (Score 55–74)

### Weather-Based Work Planning for Outdoor Contractors (Prelay) — Score: 69/105
*(Canonical file: `weather-scheduling-outdoor-contractors.md`)*
Prelay just launched on HN (2 points, 0 comments). Problem is real (owner wakes at 4am to check weather for each job site), and ensemble weather + soil-condition modeling is genuine IP. However, market validation is very early, and the integration play (widget into existing FSMs) is a stronger angle than standalone. **PASS for now — monitor Prelay's traction.**
Key source: https://news.ycombinator.com/item?id=50341158

### Full AI OS for Trades (Beyond Voice) — Score: 65/105
*(Canonical file: `field-service-management.md`)*
Stormy (YC S25 #1 PH), Feldy (YC F26, 200+ customers), Dalton Mills ($9.2M) all in this space. Too complex and capital-intensive for a 4-person team to build from scratch. Better approach: build narrow feature wedge (pricebook, analytics, LSA) and upsell from there.

### SOP Video Tool for Trades (WithoutMe + Video Layer) — Score: 65/105
*(Canonical file: `business-process-documentation.md`)*
WithoutMe validated at $39/mo Pro tier. Gap is adding video-based SOP creation (record → AI transcribes → SOP). Clear LTD fit. Problem: "SOPs for trades" is a secondary pain — operators think about customers and jobs first.

### Construction Estimating AI for Small Specialty Contractors — Score: 72/105
*(Canonical file: `contractor-quoting-estimation.md`)*
Rebar $14M (blueprint-to-quote for HVAC/MEP), Foreman (YC W26), Handoff AI all entering. Jobsite Scheduler ($29/mo) validating low end. Good LTD fit but crowded with well-funded players.

### AI Dispatch for Small Trucking Fleets — Score: 68/105
*(Different angle from full TMS — sub-canonical: `small-fleet-trucking-tms.md`)*
TrueMile (YC F26), Aura Dispatch (5%/load), Loady.ai ($10/mo beta) all entering with AI-native approach. The admin/IFTA angle (Tier 1 above) is cleaner for a bootstrapped approach than AI dispatch which requires ongoing AI costs and DAT/Truckstop API fees.

---

## Tier 3: Weak / Pass (Score <55)

| Idea | Score | Reason for Pass |
|------|-------|----------------|
| **FreshLeads.pro (local biz lead enrichment)** | 50/105 | B2B lead gen infrastructure tool, not a boring-business vertical SaaS; serves sales teams not trade operators; crowded (Apollo, Clay, Bright Data) |
| **Franchise & Multi-Location Ops AI** | 55/105 | FranConnect has brand presence; complexity too high for 4-person team; franchise operators are not typical AppSumo buyers |
| **Bespoke Platform for Trades ("Replit for Trades")** | 48/105 | Platform play = 8-12 month minimum; requires ecosystem development; Dalton Mills well-funded in this space |
| **AI Proposal Generator for Maintenance/Landscaping (Gardener HN)** | 65/105 | Handoff AI and multiple builders already entering; would be a narrow single-feature at $49/mo; better served by folding into FSM/job costing tool |
| **Clawbolt AI (AI in messaging apps for contractors)** | 58/105 | Open-source (Mozilla.ai) = can't charge for core; MCP architecture makes this difficult to productize; ongoing API costs |

---

## Top 3 Recommendations

1. **Pest Control FSM with Compliance** — Score: 101/105 — An operator literally built their own software after 13 years of frustration with the available tools — that's the highest conviction signal in this portfolio. Compliance recordkeeping is legally mandated (not optional), GorillaDesk leaves a clear gap, and $2M ARR exists in this niche. Instant quote widget on website + FIFRA chemical log + flat $79/mo = unoccupied. — Key source: https://www.reddit.com/r/PestControlIndustry/comments/1voc4cl/owneroperator_philly_we_built_our_own_field/

2. **Auto Repair Declined-Work Recovery** — Score: 100/105 — The ROI story is the clearest in the portfolio: shops lose $16K–$30K/year to unrecovered declined repairs. Shopmonkey 2.0 "dumpster fire", RepairShopr exodus, and Mitchell 1 desktop legacy = three simultaneous live migration events. CarSignal YC S26 at $200/mo (40+ shops) validates the category but leaves the sub-$100 no-contract segment open. — Key source: https://saasopportunities.com/blog/saas-hiding-in-independent-auto-repair-shops-nobody-building-this

3. **Small Fleet Trucking Admin Hub** — Score: 99/105 — Today's Reddit thread is the freshest strong signal: 22-year accounting veteran calling 1-5 truck admin "very complicated." TrueMile YC F26 validates AI-native approach is coming, but the unsexy IFTA auto-calculator from ELD CSV import is an immediately buildable wedge for 350K+ owner-operators with zero good options below $200/mo. — Key source: https://www.reddit.com/r/OwnerOperators/comments/1rq8sjh/small_fleet_owner_15_trucks_called_her_admin_work/

---

*Total ideas evaluated today: 26 unique ideas across 5 raw files. 19 Tier 1, 5 Tier 2, 5 Tier 3.*
*Shortlisted files updated: auto-repair-shop-management.md, pest-control.md, property-management.md, field-service-management.md, small-fleet-trucking-tms.md, insurance-agency-management.md, hvac-flat-rate-pricebook.md, cleaning-service-management.md, accounting-document-collection-portal.md, dental-practice.md*
