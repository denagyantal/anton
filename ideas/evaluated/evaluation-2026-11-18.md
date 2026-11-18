# Idea Evaluation — 2026-11-18

**Sources scanned today**: reddit-2026-11-18, hn-indiehackers-2026-11-18, competitor-analysis-2026-11-18, trends-2026-11-18
**Subreddits**: r/OwnerOperators, r/Truckers, r/logistics, r/HVAC, r/landscaping, r/LawnCarePros, r/PestControlIndustry, r/PptyMgmtSoftware, r/Landlord, r/smallbusiness, r/Bookkeeping, r/AskVet, r/VetTech, r/VeterinaryMedicine, r/homeinspectors, r/MusicTeachers, r/TattooBeginners, r/sweatystartup, r/SaaS, r/microsaas, r/NoCodeSaaS
**HN/IH**: Show HN, Ask HN Nov 2026, Indie Hackers revenue posts
**Trend sources**: a16z, Axios, Product Hunt, YC launches, deal news

---

## Tier 1: Strong Opportunities (Score 75+)

### 1. Small Fleet Trucking TMS (3-15 Trucks) — Score: 93/105 → Existing: 99/105

**Canonical file**: `ideas/shortlisted/small-fleet-trucking-tms.md`

| Criterion | Score | Weighted | Notes |
|-----------|-------|----------|-------|
| Market Validation | 5/5 | 15 | 100K+ r/OwnerOperators; 350K+ US owner-operators; McLeod/TMW quoted $18-40K/yr |
| Competitor Weakness | 5/5 | 10 | Alvys/Rose Rocket still expensive; Tailwinds/Trucking Office "2005 interfaces"; AscendTMS free but inadequate |
| LTD Viability | 4/5 | 8 | $299 LTD solo O/O tier viable; MRR model (compliance = recurring) is natural fit |
| No Free Tier | 4/5 | 4 | AscendTMS free but "straight trash" — practical free tier is nonexistent |
| Channel Access | 5/5 | 10 | r/OwnerOperators 100K+, r/Truckers 300K+, TruckersReport 400K+ |
| Content Potential | 5/5 | 5 | High-intent searches: "TMS for small fleets", "owner operator TMS", "$18K/yr TMS" |
| AppSumo Fit | 2/5 | 4 | Truckers not typical AppSumo buyers — $299 LTD viable as one-off promo |
| Review Potential | 4/5 | 4 | Truckers vocal and community-driven; will review loudly if it solves IFTA |
| MRR Path | 5/5 | 15 | Compliance = non-discretionary recurring spend; $99-149/mo per fleet |
| Build Feasibility | 4/5 | 8 | 6-8 week build; ELD API integration + IFTA calc + dispatch + settlements |
| Boring Business Bonus | 5/5 | 10 | Trucking = max boring, deeply unglamorous |

**Total today: 93/105 | File score after update: 99/105 (+1)**

**Verdict**: BUILD
**Decision Status**: BUILDING — see `ideas/decisions.md`
**What's new today**: Multiple threads ("everything overpriced or garbage" in r/OwnerOperators); exact $18-40K/yr quote confirmed again from multiple users; Haullytics (AI rate-con scanning) confirmed as paying-customer competitor validates market; McLeod "charges extra to fix own bugs + resells rate data against you" — strongest anti-incumbent positioning confirmed.
**Next Steps**: Ship IFTA auto-calc + load tracking + driver settlement at $49/mo flat or $99/mo up to 15 trucks
**Risks**: Multiple new entrants (Haullytics, TruckDocsAI, Aura Dispatch) validating market but increasing competition
**Key Source Links**:
- https://www.reddit.com/r/OwnerOperators/comments/1qg5gsz/what_tms_are_you_actually_using_everything_seems/
- https://www.reddit.com/r/OwnerOperators/comments/1m1z4y1/tms_expensive_af/
- https://www.reddit.com/r/OwnerOperators/comments/1r1aa4u/which_tms_are_you_guys_using/
- https://www.reddit.com/r/Truckers/comments/1vqoaft/what_software_do_small_trucking_companies/

---

### 2. Veterinary PIMS — Score: 91/105 → Existing: 95/105

**Canonical file**: `ideas/shortlisted/veterinary-practice.md`

| Criterion | Score | Weighted | Notes |
|-----------|-------|----------|-------|
| Market Validation | 5/5 | 15 | 32K+ US vet practices; Covetrus Pulse universally hated; Impromed being DISCONTINUED |
| Competitor Weakness | 5/5 | 10 | Pulse: 1-2 min record opens, crashes hourly, lab results don't integrate; Impromed: dying |
| LTD Viability | 3/5 | 6 | Mission-critical = monthly SaaS; $499 LTD possible as wedge for AI SOAP note standalone |
| No Free Tier | 5/5 | 5 | No free PIMS; every clinic pays $200-800/mo |
| Channel Access | 3/5 | 6 | r/VetTech 150K+, r/AskVet, VIN forums 90K+ |
| Content Potential | 4/5 | 4 | "Covetrus Pulse alternative", "Impromed replacement", "cloud PIMS for small clinic" |
| AppSumo Fit | 2/5 | 4 | Vet practices don't shop AppSumo; LTD possible for AI scribe add-on only |
| Review Potential | 4/5 | 4 | Vet tech community very vocal about software frustrations |
| MRR Path | 5/5 | 15 | Healthcare SaaS = natural recurring; $199/mo per clinic × 30K clinics |
| Build Feasibility | 3/5 | 6 | 8-12 week full PIMS; 3-4 week AI SOAP note standalone wedge |
| Boring Business Bonus | 4/5 | 8 | Unglamorous veterinary back-office |

**Total today: 91/105 | File score after update: 95/105 (+1)**

**Verdict**: BUILD
**Decision Status**: NEW (AI SOAP note wedge should be prioritized given Impromed migration event)
**What's new today**: CRITICAL SIGNAL — Impromed being discontinued, leaving thousands of small clinics in limbo ("mass migration moment right now"). Covetrus Pulse takes 1-2 minutes to open a record, crashes hourly, lab results don't integrate despite vendor promises. One vet tech "trying to build their own." Shepherd described as "widely praised but limited" — not yet dominant. This is the best timing signal yet.
**Next Steps**: Target Impromed refugees specifically with migration guarantee. Build AI SOAP note standalone (3-4 wks) while full PIMS is in development.
**Risks**: Shepherd + Digitail well-funded; full PIMS is 8-12 week build minimum; compliance requirements
**Key Source Links**:
- https://www.reddit.com/r/AskVet/comments/1q53d8o/all_vets_what_software_do_you_guys_use_and_what/
- https://www.reddit.com/r/VetTech/comments/1u3qnzl/vet_techs_what_part_of_your_clinic_software_slows/
- https://www.reddit.com/r/VetTech/comments/1ru1skb/50_billion_dollar_company_btw/
- https://www.reddit.com/r/VeterinaryMedicine/comments/1nqag4c/practice_management_software_pulse/

---

### 3. Cleaning Service Management (CleanOps) — Score: 91/105 → Existing: 91/105

**Canonical file**: `ideas/shortlisted/cleaning-service-management.md`

| Criterion | Score | Weighted | Notes |
|-----------|-------|----------|-------|
| Market Validation | 4/5 | 12 | ZenMaid $250K MRR = paying customers proven; $3M/yr bootstrapped comp exists |
| Competitor Weakness | 5/5 | 10 | ZenMaid per-seat $19/cleaner; recurring booking modification resets entire series; no payroll integration; no mileage tracking; no multi-language |
| LTD Viability | 4/5 | 8 | $79-119 LTD vs ZenMaid per-seat = very compelling acquisition pitch |
| No Free Tier | 4/5 | 4 | Jobber Core too bare; no genuinely free cleaning-specific tool |
| Channel Access | 4/5 | 8 | r/sweatystartup, r/housekeeping, FB "House Cleaning Business Owners" group |
| Content Potential | 4/5 | 4 | "ZenMaid alternative", "flat-rate cleaning software", "Launch27 replacement" |
| AppSumo Fit | 4/5 | 8 | Per-seat → flat switch is perfect AppSumo pitch; Launch27 is dead = active switchers |
| Review Potential | 4/5 | 4 | Cleaning company owners vocal; will review if rotation scheduling works |
| MRR Path | 4/5 | 12 | $49/mo flat for up to 15 cleaners; Gusto/QB integration = retention |
| Build Feasibility | 4/5 | 8 | 4-5 week MVP: rotation scheduling + GPS check-in + payroll export + client notes |
| Boring Business Bonus | 5/5 | 10 | Residential cleaning = max boring, deeply unglamorous |

**Total today: 91/105 | File score after update: 91/105 (+6 from prior 85)**

**Verdict**: BUILD
**Decision Status**: NEW
**What's new today**: BEST-EVER competitor analysis — ZenMaid per-cleaner pricing creates obvious switching trigger at scale (5 cleaners = $95/mo before features unlock). Three unique gaps confirmed: (1) single-visit modification of recurring booking (ZenMaid resets entire series), (2) payroll export to Gusto/QB doesn't exist, (3) structured client notes fields (not just a text box) for eco-products/pet/door codes. Launch27 platform is stagnant and AI-only support = active refugee market.
**Next Steps**: Target Launch27 and ZenMaid users directly with flat-rate messaging
**Risks**: ZenMaid's incumbent position; Jobber could add cleaning-specific features
**Key Source Links**:
- https://softwarefinder.com/field-service/zenmaid/reviews
- https://www.capterra.com/p/133875/ZenMaid-Software/pricing/
- https://www.reddit.com/r/smallbusiness/comments/1p5f7d0/paying_120month_for_software_that_does_60_of_what/
- https://www.reddit.com/r/sweatystartup/comments/1ayle03/launch_27_alternatives/

---

### 4. Auto Repair Shop Management (ShopSimple) — Score: 93/105 → Existing: 100/105

**Canonical file**: `ideas/shortlisted/auto-repair-shop-management.md`

| Criterion | Score | Weighted | Notes |
|-----------|-------|----------|-------|
| Market Validation | 5/5 | 15 | 150K+ independent shops; Tekmetric at $179+ proves paying customers |
| Competitor Weakness | 5/5 | 10 | $300+/mo threshold for all serious tools; labor guide + DVI only on expensive tiers; RO Writer forced subscription after $14K purchase |
| LTD Viability | 5/5 | 10 | $89 LTD one-time for shop = strong; "tools of the trade" purchase |
| No Free Tier | 5/5 | 5 | Paper operations still common; no free or ultra-cheap good tool |
| Channel Access | 4/5 | 8 | r/mechanics, r/AutoShopOwners, FB "Auto Repair Shop Owners" |
| Content Potential | 4/5 | 4 | "Tekmetric alternative", "cheap auto repair software", "shop management under $100" |
| AppSumo Fit | 5/5 | 10 | Strong — paper-only shops converting to digital = one-time purchase mindset |
| Review Potential | 4/5 | 4 | Mechanics community active; will review when pain is solved |
| MRR Path | 4/5 | 12 | LTD entry → annual plan transition; labor guide API = natural upsell |
| Build Feasibility | 4/5 | 8 | 5-7 weeks: ROs + DVI + 2-way SMS + customer history + parts supplier lookup |
| Boring Business Bonus | 5/5 | 10 | Auto repair back-office = max boring |

**Total today: 93/105 | Existing file: 100/105 (stable)**

**Verdict**: BUILD
**Decision Status**: NEW
**What's new today**: Competitor deep-dive — $300+/mo overkill for 1-3 bay shops confirmed with specific evidence. ARI at $39-79/mo exists but limited reviews. ShopOfficer at $119/mo new entrant = price ceiling validation. Legacy Mitchell/AllData "clearly old technology, slowly patched to be sort-of online." "They look like Enterprise software packed with features he'll never use" — exact positioning statement confirmed.
**Key Source Links**:
- https://www.reddit.com/r/mechanics/comments/1p4us06/helping_a_buddy_with_a_3bay_shop_is/
- https://www.softwareadvice.com/auto-repair/tekmetric-profile/
- https://www.softwareadvice.com/auto-repair/ro-writer-profile/reviews/

---

### 5. Landscaping & Lawn Care Software (CrewTrack) — Score: 92/105 → Existing: 99/105

**Canonical file**: `ideas/shortlisted/landscaping-lawn-care.md`

| Criterion | Score | Weighted | Notes |
|-----------|-------|----------|-------|
| Market Validation | 5/5 | 15 | LMN $6K+/yr with paying customers proves market exists; 500K+ landscaping businesses |
| Competitor Weakness | 5/5 | 10 | LMN crew app 2.7 stars on Play Store; Aspire % of revenue "predatory"; CLIP 80% price hike |
| LTD Viability | 4/5 | 8 | $79-149 LTD for seasonal businesses = perfect fit |
| No Free Tier | 4/5 | 4 | Yardbook free but "web only on mobile" — practical free tier nonexistent |
| Channel Access | 5/5 | 10 | r/LawnCarePros, r/landscaping, LawnSite forums, FB lawn business groups |
| Content Potential | 4/5 | 4 | "LMN alternative", "lawn care software small crew", "landscaping dispatch" |
| AppSumo Fit | 4/5 | 8 | LMN resentment creates perfect AppSumo switcher audience |
| Review Potential | 4/5 | 4 | Landscaping community vocal and forum-active |
| MRR Path | 4/5 | 12 | $49/mo flat; seasonal business means strong spring renewal |
| Build Feasibility | 4/5 | 8 | 4-6 weeks: crew + equipment scheduling + Android crew app + seasonal billing |
| Boring Business Bonus | 5/5 | 10 | Lawn care = max boring |

**Total today: 92/105 | Existing file: 99/105 (stable)**

**Verdict**: BUILD
**Decision Status**: NEW
**What's new today**: Detailed competitor analysis — LMN $6K+/yr + $1K setup fee universally resented; crew Android app 2.7 stars with "clunky, buggy, deletes job cards without warning"; LMNTime is a separate app that doesn't integrate; Aspire "1% of revenue feels steep"; CLIP 80% price hike with no warning. Equipment scheduling gap confirmed — most tools can't schedule equipment alongside crews. "DIY stack that breaks as business grows" (Yardbook free + Google Sheets + CompanyCam + Slack) is current workaround.
**Key Source Links**:
- https://www.reddit.com/r/LawnCarePros/comments/1d0mlrh/what_do_you_dislike_about_your_current_lawncare/
- https://www.reddit.com/r/landscaping/comments/1cdyzzz/aspire_software/
- https://connecteam.com/reviews/lmn/
- https://www.lawnsite.com/threads/clip-software.519289/

---

### 6. Small Landlord Property Management — Score: 91/105 → Existing: 100/105

**Canonical file**: `ideas/shortlisted/property-management.md`

| Criterion | Score | Weighted | Notes |
|-----------|-------|----------|-------|
| Market Validation | 5/5 | 15 | AppFolio $280/mo + 0.5% fees proves paying customers; 15-20M US small landlords |
| Competitor Weakness | 5/5 | 10 | AppFolio 50-unit minimum; Buildium $55+ + onboarding nightmare; TurboTenant hidden fees; Innago free but bare |
| LTD Viability | 4/5 | 8 | $59-89 LTD vs $280/mo AppFolio = compelling; RENTBOX proven at $149 one-time |
| No Free Tier | 3/5 | 3 | Innago is genuinely free; Stessa free tier exists |
| Channel Access | 5/5 | 10 | r/Landlord 400K+, r/PropertyManagement, r/realestateinvesting |
| Content Potential | 4/5 | 4 | "AppFolio alternative small landlord", "property management 1-20 units" |
| AppSumo Fit | 4/5 | 8 | Accidental landlords hate subscriptions = LTD buyers |
| Review Potential | 4/5 | 4 | Landlord community very vocal |
| MRR Path | 4/5 | 12 | $19-29/mo flat; no per-unit fees = differentiation; expand to India/LatAm |
| Build Feasibility | 4/5 | 8 | 4-5 weeks: rent tracking + maintenance + lease storage + basic P&L |
| Boring Business Bonus | 4/5 | 8 | Landlord admin = unglamorous professional services |

**Total today: 91/105 | Existing file: 100/105 (stable)**

**Verdict**: BUILD
**Decision Status**: BUILDING
**What's new today**: Competitor analysis confirms AppFolio 50-unit minimum locks out small landlords; pricing model "terrible for small landlords" — fixed monthly or tiered both broken for 1-20 unit operators. Visual NOI/cash flow dashboard specifically requested (DoorLoop Capterra review: "would be nice to have graph feature"). Buildium ePay onboarding: landlord with 2-unit property denied after $1K in compliance docs. RENTBOX at $149 one-time desktop app confirms LTD model validated. AI-native wave (Bevado $10M, Lette $6.5M, reltix €3M) validates market timing.
**Key Source Links**:
- https://www.reddit.com/r/PptyMgmtSoftware/comments/1w14lgh/property_management_for_14_doors_without_the/
- https://www.reddit.com/r/PptyMgmtSoftware/comments/1tfb1ok/why_are_we_still_paying_05_rent_collection_fees/
- https://www.reddit.com/r/Landlord/comments/1u4x1yk/landlord_usny_anyone_else_ditch_the_property/

---

### 7. Home Inspector Voice-to-Report — Score: 85/105 → Existing: 90/105

**Canonical file**: `ideas/shortlisted/home-inspection-software.md`

| Criterion | Score | Weighted | Notes |
|-----------|-------|----------|-------|
| Market Validation | 4/5 | 12 | 35K+ US inspectors; Spectora/HomeGauge already paid = market validated |
| Competitor Weakness | 4/5 | 8 | ReportWalk "still early"; voice-first not addressed by Spectora/HomeGauge |
| LTD Viability | 4/5 | 8 | $99 LTD = "tools of the trade" purchase; inspectors buy software once |
| No Free Tier | 4/5 | 4 | No free inspection report tool with voice input |
| Channel Access | 4/5 | 8 | r/homeinspectors, ASHI/InterNACHI forums, inspector FB groups |
| Content Potential | 4/5 | 4 | "voice inspection software", "home inspection report dictation", "Spectora alternative" |
| AppSumo Fit | 3/5 | 6 | Inspectors shop for tools; AppSumo viable at $99 LTD |
| Review Potential | 4/5 | 4 | Inspectors active in community; will review if 1-2 hours saved per inspection |
| MRR Path | 4/5 | 12 | $79-129/mo; LTD entry → annual plan |
| Build Feasibility | 4/5 | 8 | 4-5 weeks: voice input + AI categorization + photo annotation + PDF output |
| Boring Business Bonus | 5/5 | 10 | Home inspection back-office = deeply boring |

**Total today: 85/105 | File score after update: 90/105 (+3)**

**Verdict**: EXPLORE FURTHER → BUILD
**Decision Status**: NEW
**What's new today**: Voice-first angle explicitly named as "exactly how inspections should work" by inspector community. ReportWalk identified as early comp ("still early"). Pain: "1-2 hour time savings per inspection = strong ROI argument." Current tools require heavy manual typing while moving through a property. AI categorizes findings (structural, electrical, plumbing) and auto-fills deficiency descriptions = clear differentiation vs Spectora/HomeGauge. 35K+ inspectors at $99/mo = $3.5M addressable revenue.
**Key Source Links**:
- https://www.reddit.com/r/homeinspectors/comments/1qgeioe/what_does_everyone_use_for_software_and_why_i/
- https://www.reddit.com/r/Superframeworks/comments/1t27snf/15_untapped_micro_saas_niches_with_avg_8310_gap/
- https://www.reddit.com/r/NoCodeSaaS/comments/1t9v7w3/i_analyzed_26000_reddit_posts_to_find_niche/

---

### 8. Private Music Teacher Studio Management — Score: 83/105 → Existing: 90/105

**Canonical file**: `ideas/shortlisted/private-music-teacher-studio.md`

| Criterion | Score | Weighted | Notes |
|-----------|-------|----------|-------|
| Market Validation | 4/5 | 12 | 250K+ US private music teachers; My Music Staff/Fons/Opus1 all charging $15-30/mo |
| Competitor Weakness | 4/5 | 8 | CRM pipeline + retention analytics absent from ALL existing tools |
| LTD Viability | 4/5 | 8 | $59-79 LTD for solo teachers = strong AppSumo fit |
| No Free Tier | 3/5 | 3 | Some tools have free tiers |
| Channel Access | 4/5 | 8 | r/MusicTeachers, music teacher FB groups, Piano Teachers association forums |
| Content Potential | 3/5 | 3 | "music studio management software", "My Music Staff alternative" |
| AppSumo Fit | 4/5 | 8 | Solo teacher market = AppSumo buyer persona |
| Review Potential | 3/5 | 3 | Moderate — music teacher community smaller |
| MRR Path | 4/5 | 12 | $29-49/mo solo, $99+/mo multi-teacher; retention analytics = retention |
| Build Feasibility | 4/5 | 8 | 3-4 weeks: CRM pipeline + makeup lesson tracking + parent portal |
| Boring Business Bonus | 3/5 | 6 | Small business but not a "trade" — moderate boring bonus |

**Total today: 83/105 | File score after update: 90/105 (+3)**

**Verdict**: BUILD
**Decision Status**: NEW
**What's new today**: Clear CRM layer gap confirmed — existing tools (My Music Staff, Fons, Teachworks, Opus1) handle scheduling and billing but ALL fall short on lead→trial→active student pipeline tracking and retention/churn visibility. Owner: "I still end up using spreadsheets for follow-ups and reporting." The gap isn't scheduling — it's the CRM layer and retention analytics. Makeup lesson management and curriculum progress tracking also confirmed gaps. 250K+ teachers already paying $15-30/mo = will pay more for the right tool.
**Key Source Links**:
- https://www.reddit.com/r/MusicTeachers/comments/1rfizqk/music_school_owners_am_i_the_only_one_struggling/
- https://www.reddit.com/r/MusicTeachers/comments/1rwaai0/for_those_of_you_that_use_studio_management/

---

### 9. Tattoo Studio OS — Score: 88/105 → Existing: 90/105

**Canonical file**: `ideas/shortlisted/tattoo-studio-management.md`

| Criterion | Score | Weighted | Notes |
|-----------|-------|----------|-------|
| Market Validation | 4/5 | 12 | 21K+ US studios; Booksy/Vagaro actively used but hated; $200-2K/session = motivated buyers |
| Competitor Weakness | 5/5 | 10 | Generic tools don't understand deposit-heavy, reference-image workflow; Ink Book outdated since 2021 |
| LTD Viability | 5/5 | 10 | $79-99 LTD for solo artists = exactly the persona; AppSumo fit explicitly named by 3+ IH sources |
| No Free Tier | 4/5 | 4 | No free tattoo-specific tool with deposit management |
| Channel Access | 4/5 | 8 | r/TattooBeginners, Instagram tattoo communities, tattoo FB groups |
| Content Potential | 4/5 | 4 | "tattoo booking software", "tattoo studio management", "Ink Book alternative" |
| AppSumo Fit | 5/5 | 10 | Named by Superframeworks + multiple IH sources as prime 2026 AppSumo opportunity |
| Review Potential | 4/5 | 4 | Tattoo artists share tools in community forums and Instagram actively |
| MRR Path | 4/5 | 12 | $29-99/mo; per-artist pricing creates growth path |
| Build Feasibility | 5/5 | 10 | Multi-step booking + deposit + consent forms + portfolio = 3-4 weeks |
| Boring Business Bonus | 4/5 | 8 | Tattoo studio administration = unglamorous professional services |

**Total today: 88/105 | File score after update: 90/105 (+5 from prior 85)**

**Verdict**: BUILD
**Decision Status**: NEW
**What's new today**: Reddit (r/TattooBeginners) + Superframeworks dual-source confirmation. 21K+ studios running on Instagram DM + paper consent forms. Virgin Voyages ship tattoo shop: 200+ clients per cruise managed on paper "is hell." Artist-tested competitor (early beta noted in thread). Superframeworks Gap Score analysis explicitly names tattoo studio OS in "15 untapped micro-SaaS niches." Photo-quote deposit-on-booking + digital consent is the wedge — zero affordable digital consent/waiver collection for tattoo sessions exists.
**Key Source Links**:
- https://www.reddit.com/r/TattooBeginners/comments/1vjvwsu/solo_artists_studio_owners_what_do_you_use_for/
- https://www.reddit.com/r/Superframeworks/comments/1u05nk7/why_21000_tattoo_studios_still_dont_have_real/
- https://www.reddit.com/r/Superframeworks/comments/1t27snf/15_untapped_micro_saas_niches_with_avg_8310_gap/

---

### 10. Accounting/Tax Document Collection Portal — Score: 86/105 → Existing: 88/105

**Canonical file**: `ideas/shortlisted/accounting-document-collection-portal.md`

| Criterion | Score | Weighted | Notes |
|-----------|-------|----------|-------|
| Market Validation | 4/5 | 12 | Validated builder at $8.5K revenue in 14 months from subreddit posts alone |
| Competitor Weakness | 4/5 | 8 | Karbon $59/mo but 80% unused; TaxDome expensive; no simple $29/mo document portal |
| LTD Viability | 4/5 | 8 | $99-149 LTD compelling for seasonal tool |
| No Free Tier | 4/5 | 4 | No free tax document portal worth using |
| Channel Access | 4/5 | 8 | r/Bookkeeping, r/Accounting, r/taxpros |
| Content Potential | 4/5 | 4 | "tax document collection portal", "CPA client portal" |
| AppSumo Fit | 4/5 | 8 | CPAs are on AppSumo; solo practice tools do well |
| Review Potential | 4/5 | 4 | CPAs leave detailed reviews in professional communities |
| MRR Path | 4/5 | 12 | $29-49/mo per firm; expand to engagement letters, e-sign |
| Build Feasibility | 5/5 | 10 | Checklist + file upload + completion dashboard = 2-3 weeks MVP |
| Boring Business Bonus | 4/5 | 8 | Accounting firm back-office = deeply unglamorous |

**Total today: 86/105 | File score after update: 88/105 (+2)**

**Verdict**: BUILD
**Decision Status**: NEW
**What's new today**: Builder at $8.5K in 14 months via r/microsaas post confirmed + second validated builder at $11K MRR (invoicing tool) + third at $18K MRR (invoice follow-ups) confirm boring-SaaS playbook works in accounting space. QBO price hike to $140/mo driving mass exodus — creates appetite for simpler, cheaper tools. Perfect pre-tax-season timing NOW (November launch = January/February demand peak).
**Key Source Links**:
- https://www.reddit.com/r/microsaas/comments/1u38pi1/sharing_how_i_went_from_0_to_85k_in_revenue_in_14/
- https://www.reddit.com/r/SaaS/comments/1s19sc9/i_built_a_boring_saas_that_solves_one_small/

---

## Tier 2: Worth Exploring (Score 55-74)

### Dump Trailer / Junk Hauler Route Optimizer — Score: 72/105
**Maps to**: `ideas/shortlisted/waste-hauling-dumpster.md`
Unique photo-quote workflow (customer sends photo → operator quotes on the spot) + landfill hour awareness in job stacking is NOT handled by generic field service tools. 223 upvotes on specific pain post. Growing market. LTD 5/5 (solo operator profile = AppSumo buyer). **Build feasibility strong**: mobile app with photo-quote + job stacking + landfill database = 4-5 weeks. Missing: more validated builder signals. **Score signal up**.

### TechSplit — Technician Commission & Payout Calculator — Score: 72/105
**Maps to**: `ideas/shortlisted/technician-performance-pay.md`
Universal pain across every multi-tech service business (mobile grooming, lawn care, pool, detailing). IH founder actively talking to customers. Payment processing cut = clear revenue model beyond SaaS. LTD Viability 5/5 — "clear ROI, no ongoing AI costs." Build feasibility: 3-4 weeks. Main risk: unproven (still in customer discovery). **Update existing file**.

### Craftplan — Small-Batch Manufacturer Production SaaS — Score: 73/105
**Maps to**: `ideas/shortlisted/micro-manufacturer-production.md`
577 HN upvotes + 167 comments on the open-source version = massive proven demand signal. Productize = hosted SaaS with onboarding support, targeting food-specific compliance (allergens, lot traceability). Regulated food businesses have high WTP for compliance features. Build feasibility: 5-6 weeks (fork open-source, add SaaS layer + compliance). Gap: no paid model to compare against; build risk in regulated food space. **Update existing file**.

### Crewbird — FSM/CRM with Google LSA Integration — Score: 70/105
**Maps to**: `ideas/shortlisted/field-service-management.md`
Google LSA is growing as lead source for service businesses but no FSM tools have clean integration. Dad on 3x ROAS with the tool already. HN thread: "the space between ERP and Excel spreadsheet is abysmal." Build feasibility: 6-8 weeks. Risk: narrow differentiation angle; Crewbird itself is a competitor.

### QuickBooks Replacement for Solopreneurs — Score: 65/105
**Maps to**: `ideas/shortlisted/bookkeeping-accounting.md`
Validated ($11K MRR, 180 customers, 14-month avg retention for a narrow invoicing tool). QBO at $140/mo driving mass exodus. But: Wave (free), FreshBooks, Zoho Books all exist. The "dumb simple" niche is real but crowded. Main risk: bank sync (Plaid) + 1099 compliance requires significant ongoing maintenance. LTD Viability: strong ($59-79 LTD). **Score update if applicable**.

### Avenue-Style Booking Widget (US) — Score: 68/105
**Maps to**: `ideas/shortlisted/booking-widget-no-show-reducer.md`
A$63K MRR in Australia proves the model. Google My Business "book from search" angle is the killer feature. US market wide open. LTD Viability 5/5. Risk: Google can break the integration; US market is more competitive than AU.

### BarBrain US Equivalent — Score: 68/105
**Maps to**: `ideas/shortlisted/craft-brewery-management.md`
€50K MRR (1,000+ paying businesses) in DACH proves the market. US craft brewery/taproom POS+inventory is specifically underserved (keg tracking, pour reconciliation). Key lesson from BarBrain: in-person demos work, bimodal retention (early churn or stay forever). LTD: 3/5 (inventory needs ongoing maintenance). Risk: Toast/Square adjacent; POS is complex to build.

### AI Business Diagnostics for Trades — Score: 62/105
**Maps to**: `ideas/shortlisted/ai-trade-diagnostic.md`
Validated product (SweatyStartup engagement). $99 one-time confirmed for target persona. But: "15-minute intake → 4 AI reports → 90-day plan" is more service than SaaS. MRR path unclear. LTD Viability: strong. Risk: ChatGPT will commoditize the analysis layer; distribution difficult.

### Restaurant Multi-System Dashboard — Score: 60/105
**Maps to**: `ideas/shortlisted/restaurant-operations.md`
Real pain: 5-7 disconnected systems, inventory drift at multi-site. But: hospitality is notoriously hard to sell SaaS to. R365 serves this need well for inventory/invoicing. The "connective tissue" play requires integrations with Toast/Square/HotSchedules = long build. Restaurants are low-margin, high-churn software buyers.

---

## Tier 3: Weak / Pass (Score <55)

| Idea | Score | Reason |
|------|-------|--------|
| AI Voice Receptionist for Trades | 40/105 | Crowded (10+ products launching); ongoing API/telephony costs make LTD unviable; Phena, ServiceAgent, SimplePro, Frontdesk all competing |
| AI OS for Home Services/Trades | 35/105 | VC wave (Probook $34M a16z, Drillbit YC, Sophiie $5M, Elyos $13M) = too competitive for bootstrapped entry |
| AI-Native Dental Practice Management | 38/105 | Archy $50M Series C; Curve Dental $100M ARR; requires healthcare expertise; crowded |
| Voice-to-Quote Standalone | 42/105 | Handoff AI (YC), Feldy (YC), SMASH Voice all launched; multiple well-funded entrants in 2025-2026 |
| Trades Workforce Management | 44/105 | ShareWillow $8.5M + Quinn $4M = VC-backed; early market; complex to build |
| Pest Control Regulatory Compliance | 48/105 | ServiceLife founder already building this; niche within niche; compliance module = bolt-on not standalone |
| Tamper-Proof Work Verification | 42/105 | Cryptographic approach over-engineered for market; builder selling IP = no product; simplify to "Job Proof" but no clear channel |
| Vertical Harnesses / Done-for-You Agents | 30/105 | Service business model, not SaaS product; not an evaluable software idea |
| ServiceTitan Displacement (generic) | 48/105 | Already tracked in field-service-management.md at high score; this raw signal is subsumed by existing analysis |
| Roofing CRM with Insurance Workflow | 52/105 | Builder Prime $1M ARR comp proves it works; but already tracked in roofing-contractor-crm.md |
| AI Property Management (VC wave) | 40/105 | Dwelly $170M, Bevado $10M, Lette $6.5M — the small-landlord angle is separately tracked at 100/105 |
| Pest Control Voice-First Field Companion | 48/105 | 448 HN upvotes validates market interest, but OnHand.pro founder is building specifically this; better as adjacent angle to pest-control.md |
| BarBrain US Equivalent (bar inventory) | Tier 2 | Elevated from Tier 3 — see Tier 2 above |
| Clawbolt WhatsApp Invoice Follow-up | 50/105 | Mozilla.ai validates concept; whatsapp-trades-invoicing.md already tracked; crowded (Clawbolt, invoice-auto-followup-trades.md) |
| Weather-based Contractor Scheduling | 50/105 | Prelay is live but un-monetized; weather API costs ongoing; already tracked in weather-scheduling-outdoor-contractors.md |

---

## Top 3 Recommendations

1. **Cleaning Service Management (CleanOps)** — Score: 91/105
   ZenMaid's per-seat pricing creates a perfect, measurable switching trigger (5 cleaners = $95/mo before any features unlock). Competitor analysis today confirms THREE unoccupied differentiators: flat-rate pricing, rotation-aware scheduling, and payroll export. Launch27 is stagnant and AI-only support = active refugee market NOW. First-mover advantage in this specific positioning still open.
   - Key source: https://softwarefinder.com/field-service/zenmaid/reviews
   - Recommended launch price: $79 LTD (up to 10 cleaners) on AppSumo

2. **Veterinary PIMS (Modern)** — Score: 95/105
   HIGHEST TIMING URGENCY today: Impromed being discontinued. Thousands of small clinics are actively searching for alternatives RIGHT NOW. This is the clearest migration moment in any vertical we've tracked. AI SOAP note standalone (Whisper + Claude = 3-4 week build) is the fastest wedge while full PIMS is built. Target Impromed refugees specifically.
   - Key source: https://www.reddit.com/r/AskVet/comments/1q53d8o/
   - Recommended entry: $199 LTD for AI SOAP note standalone; $149/mo flat for full PIMS

3. **Small Fleet Trucking TMS** — Score: 99/105
   Consistently the strongest and most persistent signal across all days. Today: exact $18-40K/yr quotes confirmed from multiple independent threads. FMCSA digital DVIR mandate still driving regulatory urgency. Multiple indie builders (Haullytics, TruckDocsAI) validating market but no dominant affordable winner at sub-$100/mo. "No rate data reselling" is a unique positioning pledge vs McLeod.
   - Key source: https://www.reddit.com/r/OwnerOperators/comments/1qg5gsz/
   - Recommended launch price: $29/truck/mo or $149 LTD for 5 trucks

---

## Deduplication Notes

All Tier 1 ideas today are updates to existing shortlisted files (no new canonical files needed). The following files received signal updates today:
- `small-fleet-trucking-tms.md` — +1 point (99/105)
- `veterinary-practice.md` — +1 point (95/105)
- `auto-repair-shop-management.md` — stable at 100/105 (competitor data confirms)
- `landscaping-lawn-care.md` — stable at 99/105 (competitor data confirms)
- `cleaning-service-management.md` — +6 points (91/105, up from 85)
- `home-inspection-software.md` — +3 points (90/105, up from 87)
- `private-music-teacher-studio.md` — +3 points (90/105, up from 87)
- `tattoo-studio-management.md` — +5 points (90/105, up from 85)
- `accounting-document-collection-portal.md` — +2 points (88/105, up from 86)
- `property-management.md` — stable at 100/105 (competitor data + AI wave confirms)
