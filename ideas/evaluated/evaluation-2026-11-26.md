# Idea Evaluation — 2026-11-26

**Sources Evaluated**: reddit-2026-11-26, hn-indiehackers-2026-11-26, competitor-analysis-2026-11-26, trends-2026-11-26
**Total Ideas Reviewed**: 30+ (12 Reddit, 15 HN/IH, 5 Competitor Analysis, 9 Trends)

---

## Deduplication Check

All ideas cross-referenced against existing `ideas/shortlisted/` directory (200+ files).
- **11 existing files updated** with new Signal History rows
- **1 new file created**: `dental-vet-practice-management.md`
- No duplicates created

---

## Tier 1: Strong Opportunities (Score 75+)

---

### Field Service Job Profitability Analytics Layer — Score: 93/105
*Existing file: `job-profitability-tracker-trades.md` (was 92/105 on 2026-11-20) ↑1*

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | "Anyone actually know their numbers or are we all just guessing?" (r/FieldService); same Friday/Sunday Excel ritual confirmed INDEPENDENTLY in r/FieldService, r/decisionlayer, r/quickbooksonline, r/smallbusiness simultaneously |
| Competitor Weakness | 5/5 | ServiceTitan analytics = enterprise only; Jobber analytics locked to Grow tier ($249/mo); nothing bridges FSM + QB at <$100/mo; analytics-only layer = confirmed unoccupied |
| LTD Viability | 4/5 | $89-149 LTD viable; "find your losing job types" = clear one-time ROI story |
| No Free Tier | 4/5 | No free job-level P&L tool for field service |
| Channel Access | 5/5 | Signal confirmed across r/FieldService, r/decisionlayer, r/quickbooksonline, r/HVAC, r/Contractor |
| Content Potential | 4/5 | "HVAC job profitability tracker", "field service analytics layer" |
| AppSumo Fit | 4/5 | "See which jobs are actually making you money" = clear LTD pitch |
| Review Potential | 4/5 | Owners review when margin improvement is measurable |
| MRR Path | 4/5 | $49-99/mo; Jobber/ServiceTitan API integration = recurring stickiness |
| Build Feasibility | 4/5 | Analytics-only layer connecting to existing FSM + QB = 3-4 weeks |
| Boring Business Bonus | 5/5 | HVAC/plumbing/electrical = deeply boring |

**Weighted Total: 93/105**
**Verdict**: BUILD
**Decision Status**: NEW — see `ideas/decisions.md`
**Next Steps**: Build analytics-only MVP connecting to Jobber API + QuickBooks; "which job types made you money this month?" dashboard
**Risks**: Jobber/ServiceTitan could add analytics; QBO sync complexity; trust gap if numbers don't reconcile
**Key Source Links**:
- https://www.reddit.com/r/FieldService/comments/1tggzn6/anyone_actually_know_their_numbers_or_are_we_all/
- https://www.reddit.com/r/decisionlayer/comments/1ukt3xg/how_do_you_track_margin_by_job_type_when_your/
- https://www.reddit.com/r/quickbooksonline/comments/1vi2lu6/how_are_you_handling_projectjob_profitability/
**Signal Frequency**: 5+ appearances across 4+ different communities — increasing

---

### Pest Control Regulatory Compliance Recordkeeping — Score: 101/105
*Existing file: `pest-control.md` (stable at 101/105 since 2026-11-25)*

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | Philadelphia PCO owner (13 years, 4 trucks) built full platform from scratch because existing tools miss compliance — highest conviction signal possible |
| Competitor Weakness | 5/5 | GorillaDesk, PestPac, FieldRoutes, Briostack all confirmed failing at per-application compliance recordkeeping |
| LTD Viability | 4/5 | Compliance tools sell well on LTD because ROI (avoiding fines, audit-ready) is obvious |
| No Free Tier | 4/5 | PCOs pay for compliance |
| Channel Access | 4/5 | r/PestControlIndustry, NPMA events, pest control FB groups |
| Content Potential | 5/5 | State-specific compliance guides = SEO moat; "EPA record requirements pest control" |
| AppSumo Fit | 3/5 | Niche but compelling; compliance tools do well on AppSumo |
| Review Potential | 4/5 | Compliance creates stickiness + reviews |
| MRR Path | 5/5 | Compliance = recurring forever; state regs change = ongoing subscription justification |
| Build Feasibility | 4/5 | Compliance recordkeeping module + existing FSM integration = 3-4 weeks |
| Boring Business Bonus | 5/5 | Pest control = deeply boring trade |

**Weighted Total: 101/105**
**Verdict**: BUILD
**Decision Status**: NEW — see `ideas/decisions.md`
**Next Steps**: Build compliance recordkeeping module as standalone add-on; focus on PA state requirements as first state, then expand
**Risks**: ServiceLife (the PCO owner's self-built tool) is now entering market as competition; state-by-state data collection effort
**Key Source Links**:
- https://www.reddit.com/r/PestControlIndustry/comments/1voc4cl/owneroperator_philly_we_built_our_own_field/
- https://www.reddit.com/r/PestControlIndustry/comments/1r6g1ph/best_crmsoftware_for_medium_sized_business/
- https://www.reddit.com/r/PestControlIndustry/comments/1ql774u/bestworst_software_tools/
**Signal Frequency**: Recurring across multiple months — stable and strong

---

### Auto Repair Shop Management — Score: 101/105
*Existing file: `auto-repair-shop-management.md` (was 100/105 on 2026-11-25) ↑1*

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | 253K+ US shops; 97% underpenetrated; 3 simultaneous migration events ongoing |
| Competitor Weakness | 5/5 | Shopmonkey 2.0 "biggest dumpster fire" ongoing; AutoLeap annual contracts with 60-day cancellation notice; Shop4D $1,100/mo with daily downtime; labor guide unusable on Tekmetric |
| LTD Viability | 4/5 | $249 LTD (unlimited bays up to 5); DVI image storage ongoing cost caps it at 4/5 |
| No Free Tier | 4/5 | ARI at $39/mo is near-free but too limited |
| Channel Access | 4/5 | r/AutoShopOwners, r/serviceadvisors, r/mechanics; Auto Shop Owners Alliance 25K+ FB |
| Content Potential | 4/5 | "best auto repair software small shop", "Tekmetric alternative", "Shopmonkey alternative" |
| AppSumo Fit | 3/5 | Auto repair shops are price-sensitive and research software actively; moderate AppSumo fit |
| Review Potential | 4/5 | Shop owners review on G2/Capterra when switching |
| MRR Path | 4/5 | Parts ordering, DVI storage, multi-bay expansion |
| Build Feasibility | 3/5 | VIN lookup, labor guide, parts catalog, DVI = 5-6 weeks |
| Boring Business Bonus | 5/5 | Auto repair = deeply boring trade |

**Weighted Total: 101/105**
**Verdict**: BUILD
**Decision Status**: NEW — see `ideas/decisions.md`
**Next Steps**: Ship $79/mo flat MVP with DVI + 2-way SMS + QBO sync before competition locks up Shopmonkey 2.0 migration window
**Risks**: 6+ new entrants launching (CarSignal YC S26, Autograff, Gearboxly) = narrowing first-mover window
**Key Source Links**:
- https://www.autojoy.ai/blog/2026-tekmetric-shopmonkey-autoleap-shopware
- https://diag.net/msg/m79uf4yb3eb9qotjcphts1hcdr
- https://www.capterra.com/p/190952/Tekmetric/reviews/
- https://nextcarhub.com/auto-repair-shop-software-pricing.html
**Signal Frequency**: 20+ consecutive daily appearances — peak urgency

---

### Cleaning Business Management — Score: 100/105
*Existing file: `cleaning-service-management.md` (stable at 100/105 since 2026-11-23)*

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | ZenMaid $3M/yr (11 years) proves market; BlastoClean Oct 2026 = entry window; multiple threads confirm client intelligence gap |
| Competitor Weakness | 5/5 | ZenMaid residential-only wall; Swept no billing; ZenMaid per-cleaner pricing ($289/mo at 10 cleaners); no tool bridges Res+Commercial; structured client fields unbuilt in all 7+ tools |
| LTD Viability | 4/5 | $249 LTD (up to 25 crew); compelling vs $1,500+/year subscription |
| No Free Tier | 4/5 | Cleaning businesses pay from day 1 |
| Channel Access | 5/5 | r/cleaningbusiness, cleaning FB groups (100K+ members), cleaning business podcasts |
| Content Potential | 4/5 | "ZenMaid alternative", "cleaning business software commercial and residential" |
| AppSumo Fit | 4/5 | "No per-cleaner fees, includes commercial clients" = clear AppSumo narrative |
| Review Potential | 4/5 | Cleaning business owners review when cash flow improves |
| MRR Path | 5/5 | ZenMaid per-cleaner pricing is the perfect anti-trigger for flat-rate positioning |
| Build Feasibility | 4/5 | Residential + commercial + GPS + client intelligence fields = 4-5 weeks |
| Boring Business Bonus | 5/5 | Residential cleaning = deeply boring |

**Weighted Total: 100/105**
**Verdict**: BUILD
**Decision Status**: NEW — see `ideas/decisions.md`
**New angles confirmed today**:
1. **Client intelligence**: structured fields for eco products vs bleach, pet flags, entry codes, special instructions → "use notes field" is useless when you have 50+ clients
2. **CleanFlow commercial/residential**: ZenMaid users hit a wall at 8-10 employees; no tool handles both Res+Commercial affordably; HouseCall Pro 2.59%+ processing on $20K volume = $518/mo unnecessary fees → Stripe-direct positioning
**Key Source Links**:
- https://www.reddit.com/r/smallbusiness/comments/1p5f7d0/paying_120month_for_software_that_does_60_of_what/
- https://cleanerhq.com/top-5-software-tools-to-streamline-your-cleaning-business-2026/
- https://cleaningservicesghlsnapshot.com/blog/zenmaid-alternatives-cleaning-business/
**Signal Frequency**: 10+ consecutive weekly appearances — sustained maximum

---

### Tax Document Collection Portal for Small CPA Firms — Score: 91/105
*Existing file: `accounting-document-collection-portal.md` (stable at 91/105 since 2026-11-25)*

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 4/5 | Validated builder at $8.5K MRR in 14 months from subreddit posts alone — reconfirmed 5+ days running |
| Competitor Weakness | 4/5 | Karbon $59/mo but 80% unused; TaxDome expensive; no simple $29/mo document portal; QBO rage-quit context adds urgency |
| LTD Viability | 4/5 | Seasonal use makes LTD very attractive; $99-149 LTD vs $198+/mo stack |
| No Free Tier | 4/5 | Tax season urgency = real willingness to pay |
| Channel Access | 4/5 | r/Bookkeeping, r/Accounting, r/taxpros, r/microsaas |
| Content Potential | 4/5 | "tax document collection portal", "client document management CPA" |
| AppSumo Fit | 4/5 | CPAs active on AppSumo; solo practice tools do well |
| Review Potential | 4/5 | CPAs leave detailed professional reviews |
| MRR Path | 4/5 | $29-49/mo per firm; expand to engagement letters, e-sign, secure messaging |
| Build Feasibility | 5/5 | Checklist + file upload + completion dashboard = 2-3 weeks MVP |
| Boring Business Bonus | 4/5 | Accounting firm back-office = deeply unglamorous |

**Weighted Total: 91/105**
**Verdict**: BUILD
**Decision Status**: BUILDING — in BMAD pipeline (PRD completed 2026-11-19)
**Next Steps**: AutoMVP pipeline active; pre-tax-season launch timing is critical (Nov-Jan window)
**Key Source Links**:
- https://www.reddit.com/r/microsaas/comments/1u38pi1/sharing_how_i_went_from_0_to_85k_in_revenue_in_14/
- https://www.reddit.com/r/Bookkeeping/comments/1jt94fa/the_price_of_bookkeeping_software_is_nuts/
**Signal Frequency**: 7+ consecutive days confirmed — maximum sustained signal in accounting space

---

### Field Service Management (TradePilot) — Score: 93/105
*Existing file: `field-service-management.md` (from competitor analysis — analytics + dispatch layer)*

**Competitor Analysis confirms today**:
- ServiceTitan $30K–$75K year 1 for 10 techs; "absolutely hate it, everyone at our company hates it"
- Housecall Pro add-on cost creep: GPS $20/vehicle/mo, flat-rate pricebook $149/mo extra → real cost reaches $300–$400/mo for 3-truck shop
- Jobber missing lead intake entirely; small HVAC shops lose $30K–$50K annually from missed/mishandled calls
- Workiz locks flat-rate pricing behind custom Ultimate tier
- **300,000+ HVAC/plumbing/electrical shops** in the US in the 1-10 tech bracket

**Verdict**: BUILD — The clearest AppSumo pitch: "Everything Housecall Pro charges extra for, included at $99/mo"
**Next Steps**: Build MVP with flat-rate pricebook + GPS + 2-way SMS + AI missed-call capture at single $99-149/mo price
**Key Source Links**:
- https://fieldservicecompare.com/articles/servicetitan-review-2026/
- https://contractortoolstack.com/software/housecall-pro/
- https://www.tradesly.ai/blog/housecall-pro-vs-jobber-comparison-small-business-2026
**Signal Frequency**: Persistent across 6+ months — sustained high

---

### Property Management Maintenance Coordination Hub — Score: 89/105
*Existing file: `property-maintenance-coordination.md` (was 87/105 on 2026-11-19) ↑2*

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | FOUR platforms simultaneously failing at maintenance: DoorLoop 2.0 broke basic workflows, Yardi Breeze "designed by someone who has never managed a property", AppFolio module "blow it up and start over", BuildingLink lost notifications for weeks |
| Competitor Weakness | 4/5 | Property Meld validates category but expensive; DoorLoop 2.0 breakage creates migration window |
| LTD Viability | 4/5 | $89-149 LTD viable for standalone maintenance coordination tool |
| No Free Tier | 4/5 | PM companies with 50+ units clearly pay for tools |
| Channel Access | 4/5 | r/PropertyManagement (300K+ members), r/yardi, r/maintenance |
| Content Potential | 3/5 | "property management maintenance software", "AppFolio work order tracking" |
| AppSumo Fit | 3/5 | B2B niche; moderate AppSumo fit |
| Review Potential | 3/5 | PM professionals review on G2/Capterra |
| MRR Path | 5/5 | Per-unit sticky; vendor network integration = hard to remove once embedded |
| Build Feasibility | 4/5 | Maintenance coordination layer + API integrations = 4 weeks |
| Boring Business Bonus | 4/5 | Property management = unglamorous professional services |

**Weighted Total: 89/105**
**Verdict**: EXPLORE FURTHER
**Decision Status**: NEW
**Next Steps**: Validate AppFolio API depth; build SMS-first vendor coordination loop (vendor → scheduling → tenant update → auto-close)
**Risks**: Property Meld is funded direct competitor; AppFolio may build natively
**Key Source Links**:
- https://www.reddit.com/r/PropertyManagement/comments/1xdgsz7/doorloop_20_from_bad_to_worse/
- https://www.reddit.com/r/PropertyManagement/comments/1t9gpbw/property_manager_beware_doorloop_is_hot_garbage/
- https://www.reddit.com/r/yardi/comments/1qcbvsv/yardi_breeze_users_are_you_annoyed_too/
- https://www.reddit.com/r/PropertyManagement/comments/1rqnf89/maintenance_coordination/
**Signal Frequency**: 7+ appearances — increasing (new DoorLoop 2.0 breakage adds urgency)

---

### Junk Removal Dispatch + Client Management — Score: 89/105
*Existing file: `junk-removal-dispatch.md` (was 88/105 on 2026-11-24) ↑1*

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 4/5 | Multiple validated builders simultaneously: ChambaDesk, QuoteIQ, solo n8n builder who automated 80% of admin; junk removal $10B+ market growing with decluttering trends |
| Competitor Weakness | 5/5 | Jobber/Workiz too generic; CurbWaste "rarely mentioned as working well"; Square + spreadsheet is current state; no photo-volume quoting in any tool |
| LTD Viability | 4/5 | $79-99 LTD viable; "automated 80% of admin" = compelling LTD narrative |
| No Free Tier | 5/5 | Junk removal operators pay from day 1 |
| Channel Access | 4/5 | r/junkremovalstartup, r/smallbusiness, junk removal FB groups |
| Content Potential | 3/5 | "junk removal software", "junk removal dispatch app" |
| AppSumo Fit | 4/5 | "Automated 80% of admin" = clear AppSumo headline |
| Review Potential | 4/5 | "Saved me hours each day" testimonial is easy |
| MRR Path | 4/5 | Per-booking value; AI photo quoting is recurring compute cost |
| Build Feasibility | 4/5 | Photo-to-volume (GPT-4o Vision) + booking windows + truck load tracking = 4-6 weeks |
| Boring Business Bonus | 5/5 | Junk removal = deeply boring, blue-collar |

**Weighted Total: 89/105**
**Verdict**: EXPLORE FURTHER
**Decision Status**: NEW
**Next Steps**: Validate photo-based volume quoting as #1 pain with 5-10 operators; build GPT-4o Vision proof of concept
**Risks**: ChambaDesk already targeting this exact niche; market smaller than HVAC/landscaping; photo AI liability
**Key Source Links**:
- https://www.reddit.com/r/smallbusiness/comments/1ra3kj2/i_automated_80_of_the_admin_work_in_my_junk/
- https://www.reddit.com/r/WhichCRM/comments/1q369uo/best_junk_removal_crm/
- https://www.reddit.com/r/smallbusiness/comments/1ryeosm/3_years_running_a_junk_removal_business_solo/
**Signal Frequency**: 2 appearances — first identified 2026-11-24, confirmed today with new builders

---

### Contractor Building Permit Lead Monitor — Score: 87/105
*Existing file: `trade-permit-lead-gen.md` (was 76/105 on 2026-05-18) ↑11 — TODAY'S BIGGEST MOVE*

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | DIRECT VALIDATION: developer built it, friend told 7 other contractors, 8 people paying $10/month from word-of-mouth alone — no marketing |
| Competitor Weakness | 4/5 | Angi/HomeAdvisor expensive + shared leads; BuildZoom different angle; no $29-49/mo permit monitor for contractors |
| LTD Viability | 4/5 | Geography-locked tool = natural LTD unit; $59-99 per geography/trade |
| No Free Tier | 5/5 | Contractors clearly pay for lead gen; Google LSA lead = $400-700 for HVAC |
| Channel Access | 5/5 | r/ContractorsUS, r/sweatystartup, r/HVAC, r/Plumbing — every trade sub |
| Content Potential | 4/5 | "building permit leads HVAC", "contractor permit alerts", "find new construction jobs" |
| AppSumo Fit | 3/5 | Niche but compelling ROI story; geography LTD model is unusual but interesting |
| Review Potential | 3/5 | Reviews based on lead quality/conversion |
| MRR Path | 4/5 | Geography expansion = natural upsell; $29-49/county/trade = clear path |
| Build Feasibility | 5/5 | Scraper + normalization + email digest = 2-3 weeks; leanest MVP in portfolio |
| Boring Business Bonus | 5/5 | Permit monitoring for trades = deeply boring |

**Weighted Total: 87/105**
**Verdict**: BUILD
**Decision Status**: NEW
**Next Steps**: Start with 1-2 counties, 1-2 trade categories (HVAC + plumbing); build scraper + daily email digest; price at $29-49/month
**Risks**: County data format varies; scaling per-county data quality; Google/county could restrict public data access
**Key Source Links**:
- https://www.reddit.com/r/SaaS/comments/1p32bn4/my_side_project_makes_80month_and_im_weirdly/
- https://www.reddit.com/r/ContractorsUS/comments/1smcm8c/asked_a_bunch_of_contractors_what_software_they/
- https://www.reddit.com/r/sweatystartup/comments/1wb9lhl/aspiring_developer_here_i_want_to_build_software/
**Signal Frequency**: 2 appearances total (May 2026 concept, Nov 2026 validated) — NEWLY VALIDATED

---

### Restaurant Food Costing (Single-Unit Operators) — Score: 83/105
*Existing file: `restaurant-operations.md` (was 77/105 on 2026-11-23, recalibrated ↓17) ↑6*

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 4/5 | 2-location mom & pop spending $4K/mo on inventory/admin; multiple posts from r/restaurant, r/Chefit, r/restaurantowners, r/ToastPOS all describing same gap |
| Competitor Weakness | 4/5 | MarginEdge $300-350/mo (too expensive for single-unit); XtraCHEF complex/overwhelming; Craftables mixed reviews; spreadsheets dominant for <$2M operators |
| LTD Viability | 4/5 | $79-129 LTD viable for single-unit operators; seasonal use makes LTD attractive |
| No Free Tier | 4/5 | No free food costing tool for independent restaurants |
| Channel Access | 4/5 | r/restaurantowners, r/Chefit, r/ToastPOS, restaurant owner FB groups |
| Content Potential | 4/5 | "food cost tracking software independent restaurant", "recipe costing app" |
| AppSumo Fit | 4/5 | Restaurant tools on AppSumo; "stop guessing your food costs" = clear LTD pitch |
| Review Potential | 4/5 | Restaurateurs review when margin improvement is measurable |
| MRR Path | 4/5 | Supplier price changes → recalculation = recurring value; integrate with Toast/Square |
| Build Feasibility | 4/5 | Recipe + ingredient cost tracking + food cost % calc + price change alerts = 3-4 weeks |
| Boring Business Bonus | 4/5 | Restaurant back-of-house operations = unglamorous |

**Weighted Total: 83/105**
**Verdict**: BUILD
**Decision Status**: NEW
**Next Steps**: Build simple recipe costing tool: set up recipes → enter ingredient costs → see food cost % → alert when costs change. $29-79/mo for single-unit.
**Risks**: MarginEdge could add lighter tier; restaurant churn historically high; OCR integration complexity
**Key Source Links**:
- https://www.reddit.com/r/restaurantowners/comments/1vtln00/inventory_and_administration_cost_v_benefit/
- https://www.reddit.com/r/ToastPOS/comments/1nruqu6/xtrachef/
- https://www.reddit.com/r/Chefit/comments/1tczir6/food_costing_software/
- https://www.reddit.com/r/restaurant/comments/1pusead/why_is_restaurant_software_so_expensive_and_bloated/
**Signal Frequency**: Recurring across multiple months — increased urgency today (new $4K/mo pain point documented)

---

### Job/Crew Scheduling Built Around Jobs (Not Shifts) — Score: 83/105
*Existing file: `crew-scheduling-job-centric.md` (stable at 83/105 since 2026-11-25)*

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 3/5 | Direct Reddit product request (r/smallbusiness) with 9 engaged comments; echoed in r/landscaping, r/HVAC; 5/28 contractors still on Google Sheets because nothing fits |
| Competitor Weakness | 4/5 | 7shifts/When I Work/Deputy all shift-focused; Jobber closest but no labor cost forecasting; gap confirmed |
| LTD Viability | 4/5 | $79-149 LTD viable |
| No Free Tier | 3/5 | Some free scheduling tools exist |
| Channel Access | 4/5 | r/smallbusiness, r/landscaping, r/ContractorsUS, cleaning FB groups |
| Content Potential | 3/5 | "crew scheduling by job", "job-based scheduling software" |
| AppSumo Fit | 3/5 | Moderate — cross-industry appeal but niche concept |
| Review Potential | 3/5 | Moderate review potential |
| MRR Path | 4/5 | $49-99/mo; time tracking and payroll export = recurring integration value |
| Build Feasibility | 4/5 | Job card + crew assignment + labor cost estimate + time tracking = 3-4 weeks |
| Boring Business Bonus | 4/5 | Service businesses (cleaning, landscaping, HVAC) = boring |

**Weighted Total: 83/105**
**Verdict**: EXPLORE FURTHER
**Decision Status**: NEW
**Next Steps**: Target one vertical first (landscaping or cleaning); validate 3-5 operators pay for labor-cost-per-job forecasting
**Key Source Links**:
- https://www.reddit.com/r/smallbusiness/comments/1uuzrtc/scheduling_apps_built_around_jobsprojects/
- https://www.reddit.com/r/landscaping/comments/1riirwi/those_of_you_running_your_own_landscaping_crew/
**Signal Frequency**: 2 appearances (Nov 25-26) — newly emerging

---

### Dental/Vet Practice Management Software That Actually Works — Score: 78/105
*NEW FILE CREATED: `dental-vet-practice-management.md`*
*(Distinct from `dental-practice.md` which covers production/payroll reconciliation)*

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | Multiple posts with 10-20+ comments each in r/Dentistry, r/VeterinaryMedicine, r/Veterinary; very high emotional intensity; recurring complaints about all major platforms |
| Competitor Weakness | 5/5 | Dentrix Ascend $5K migration fee (doesn't include AR/ledgers); Curve Dental 6+ hrs downtime; Covetrus Pulse crashes hourly; Digitail deleted inventory/appointments; Denticon raised from $290→$780+/office |
| LTD Viability | 1/5 | No — requires ongoing hosting, HIPAA/HITECH compliance, clinical data integrity. Pure subscription |
| No Free Tier | 4/5 | Open Dental is free but requires self-hosting; hosted options start at $149+/mo |
| Channel Access | 4/5 | r/Dentistry, r/VeterinaryMedicine, r/Veterinary; dental/vet professional associations |
| Content Potential | 4/5 | "open dental hosted alternative", "modern dental software cloud", "dentrix alternative" |
| AppSumo Fit | 2/5 | Medical/dental data sensitivity = poor LTD fit; attorneys and compliance issues |
| Review Potential | 4/5 | Practices leave detailed reviews given high switching cost |
| MRR Path | 5/5 | $149-299/month per practice; pure subscription, strong retention once migrated |
| Build Feasibility | 2/5 | Full clinical PMS (patient records, insurance claims, billing, scheduling) + HIPAA = 6-12 months minimum |
| Boring Business Bonus | 4/5 | Dental/vet practice management = unglamorous professional services |

**Weighted Total: 78/105**
**Verdict**: EXPLORE FURTHER (not ready to build — too complex for 4-6 week MVP)
**Decision Status**: NEW
**Next Steps**: Consider dental-first (larger market) or vet-first (less competition post-IDEXX/CoVetAI). The moat is Open Dental compatibility — position as a hosted, managed, modern cloud version.
**Risks**: Very long build time (6-12 months); HIPAA compliance burden; clinical features require domain expertise; EHR data migration is a major customer objection
**Key Source Links**:
- https://www.reddit.com/r/Dentistry/comments/1nxc0sn/stay_away_from_dentrix_ascend/
- https://www.reddit.com/r/veterinaryprofession/comments/1ve2mmi/digitail/
- https://www.reddit.com/r/VeterinaryMedicine/comments/1nqag4c/practice_management_software_pulse/
- https://www.reddit.com/r/Veterinary/comments/1wi616q/avoid_weave_if_you_own_or_manage_a_practice/
**Signal Frequency**: 2 appearances — newly identified, monitor before committing

---

### Affordable Modern TMS for Small Trucking Carriers — Score: 100/105
*Existing file: `small-fleet-trucking-tms.md` (was 99/105 on 2026-11-24) ↑1*

Today's new evidence: Dispatch Mate CAD$355/mo "interface makes me want to blow my brains out"; ASCEND freezing "multiple times a day halting the entire operation"; Revenova $20K upfront setup; carriers coordinating group buys for better pricing. One 9-person company paying $355/mo for a Windows 95-style interface. This is redundant with existing signal but adds vivid specifics.

**Score: 100/105 (↑1)**
**Key Source Links**:
- https://www.reddit.com/r/TruckDispatchers/comments/1wzb7rv/dispatch_mate_by_cargowise/
- https://www.reddit.com/r/OwnerOperators/comments/1m1z4y1/tms_expensive_af/
- https://www.reddit.com/r/FreightBrokers/comments/1ec156q/mcleod_is_expensive/
**Signal Frequency**: 20+ consecutive appearances — maximum sustained signal in trucking

---

## Tier 2: Worth Exploring (Score 55-74)

### QuickBooks Alternative for Solo Service Businesses — Score: 70/105
Massive ongoing QBO rage (108+ comments on alternatives post; $70→$140/month in 3 years) but market is **crowded**: Wave (free), Zoho (free tier), FreshBooks, Harpoon all exist. Best angle: ultra-simple bookkeeping for specific trade verticals ("accounting for plumbers" with pre-built service categories, automatic mileage tracking, photo receipt capture) at $19-29/month flat. Must avoid building another generic bookkeeping tool.
- **Why not Tier 1**: Wave is free; "simple bookkeeping" is a commoditized feature set; bank sync is technically complex; vertical-specific angle is better positioned in existing trade-focused tools
- **Source**: https://www.reddit.com/r/QuickBooks/comments/1r43tof/best_alternatives_to_quickbooks/

### Solo Legal Practice Management — Confirms 93/105 existing
Today's competitor analysis adds specific new evidence: Clio's practical cost $138/user/mo vs $49 advertised (add-ons for workflows + document automation); MyCase has no LEDES billing = blocks insurance defense work; 41% of solos already use AI for drafting weekly = AI-native tool is right timing. Existing `legal-practice-management.md` already at 93/105.
- **Source**: https://owlesq.com/buyer-guides/best-practice-management-software-solo-small-law-firms

### AI Voice Receptionists for Trades — Confirms ~85/105 existing
**Broccoli raised $52M (Khosla + YC)** — biggest new signal from today's trends. 1,500 businesses served out of 600K+ potential = <0.3% penetration. Rezora $23K MRR, 40+ businesses, 20% WoW growth. ServiceAgent targeted at home services. This validates the category massively but Broccoli's funding makes it formidable competition for a new entrant. Best white space: Spanish-language home services, specific sub-verticals (roofing-only, chimney-sweep-only), or integration-first approach (Jobber-native voice agent).
- **Sources**: https://www.newswire.com/news/broccoli-raises-52m-led-by-khosla-ventures, https://www.ycombinator.com/launches/Xi8-rezora-io

### AI Dispatch OS for Home Services — 65/105 (complex build)
Probook $40M (a16z + Sequoia), Dalton Mills $9.2M "Replit for trades". Strong VC signal but high complexity (6-12 weeks minimum). Best approach for a small team: start as a dispatch-focused add-on for existing FSM users, not a full platform.

### Freight & Logistics Doc Automation for Small Brokers — 62/105
Small brokers (sub-50 employees) processing rate confirmations, BOLs, PODs manually. PDF extraction via GPT-4o is straightforward but TMS fragmentation is the real challenge. Moderate signal, early market.

---

## Tier 3: Weak / Pass (Score <55)

- **Legacy Construction Software Disruption** — Too complex (6-12 months build), heavyweight competition (Shackleton $5M Battery Ventures, Billdr $3.2M, XBuild $19M a16z). The VC-funded entrants have locked up the mid-market. Best path: narrow sub-vertical (specialty electrical subs, pool/spa install PM) rather than general GC.
- **AI Back-Office Automation for Restaurants** (Marble YC, $5.5M seed) — Pre-consensus, requires deep supplier/ERP integrations (4-8 week minimum build). Marble just launched November 2026, market is early. Wait for more signal.
- **Niche SMB Platform Consolidation** (Barbershops/Gyms) — Squire $140M+, Fresha $1B/KKR = core market is locked. Only white space is in hyper-niches: tattoo studios (see existing `tattoo-studio-management.md`), pet grooming (see existing `pet-grooming.md`).

---

## HN/IH Validation Signals (Confirmatory — Existing Files)

| Idea | Validation | Existing File |
|------|-----------|---------------|
| Lockin (Locksmiths) | $30K MRR, 400 subscribers, $75 ARPU | `locksmith-crm.md` |
| Breezy HVAC | $250K ARR in 9 months — maintenance plan management | `hvac-maintenance-agreements.md` |
| dashp (D2D pest control commission) | $100K+ ARR — commission tracking for D2D sales | `d2d-field-sales-commission-tracking.md` |
| Crewbird (Google LSA + FSM) | "Quickly approaching 3x ROAS" — early stage | `google-lsa-trades-crm.md` |
| Field Manual Copilot | RAG-based job knowledge; $24K-79K MRR modeled | `field-manual-copilot.md` |
| Mizarah (Progress Billing) | UAE contractor billing → US AIA G702/G703 angle | `subcontractor-payment-retention.md` |
| InstaBid Solo (Instant Quote Wizard) | Just launched; quote-first = win-job-first | `contractor-quoting-estimation.md` |
| CraftBoop (Follow-up sequences) | $29/mo, just launched — SMS-first version stronger | `service-business-follow-up.md` |

---

## Trends Signals (Confirmatory — Existing Files)

| Trend | New Signal | Existing File |
|-------|-----------|---------------|
| AI Estimation & Quoting | **XBuild $19M a16z Series A** = strongest new VC signal | `ai-quoting-estimating-trades.md` (95/105) |
| Ambient AI Scribe | **IDEXX acquires CoVetAI** after 18 months = market validated | `vetscribe-ai-soap-notes.md` |
| AI Voice Receptionists | **Broccoli $52M** (Khosla+YC) = category validation | `ai-voice-receptionist-home-services.md` |
| AI Dispatch OS | Probook $40M a16z + Sequoia rare co-investment | `field-service-management.md` |
| Compliance & Licensing Tracker | Bessemer: "compliance/licensing = prime AI target" | `compliance-licensing-trades.md` |
| Niche SMB (tattoo/pet grooming) | No dominant player; LTD strong fit | `tattoo-studio-management.md` |

---

## Top 3 Recommendations

1. **Contractor Building Permit Lead Monitor** — Score: 87/105 | Shortlisted: `trade-permit-lead-gen.md`
   *Today's biggest move (↑11 from 76). Just validated with 8 real paying customers through word-of-mouth. Leanest MVP in portfolio (2-3 week build). Every HVAC/plumbing/electrical/roofing/landscaping contractor needs leads. Every US county publishes permit data. $29-49/month is obvious. No significant competition at this price point.*
   - https://www.reddit.com/r/SaaS/comments/1p32bn4/my_side_project_makes_80month_and_im_weirdly/

2. **Field Service Job Profitability Analytics Layer** — Score: 93/105 | Shortlisted: `job-profitability-tracker-trades.md`
   *Confirmed simultaneously in 4+ different communities today (r/FieldService, r/decisionlayer, r/quickbooksonline, r/HVAC). The "Friday/Sunday Excel ritual" is universal, independent, and documented. Analytics-only layer means no need to replace existing FSM. Clear $49-99/month pricing. 3-4 week build.*
   - https://www.reddit.com/r/FieldService/comments/1tggzn6/anyone_actually_know_their_numbers_or_are_we_all/

3. **Property Management Maintenance Coordination Hub** — Score: 89/105 | Shortlisted: `property-maintenance-coordination.md`
   *Four different platforms (DoorLoop, Yardi, AppFolio, BuildingLink) simultaneously failing at maintenance coordination today creates a rare multi-platform validation event. Property Meld proves the category is fundable. $49-99/month standalone maintenance coordination tool at AppFolio/Buildium refugee positioning is the right angle.*
   - https://www.reddit.com/r/PropertyManagement/comments/1xdgsz7/doorloop_20_from_bad_to_worse/
