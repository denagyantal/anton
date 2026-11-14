# Idea Evaluation — 2026-11-14

**Sources**: reddit-2026-11-14, hn-indiehackers-2026-11-14, competitor-analysis-2026-11-14, trends-2026-11-14
**Evaluator**: idea-evaluator agent
**Ideas evaluated**: 28 distinct signals across 4 sources

---

## Tier 1: Strong Opportunities (Score 75+)

### 1. Automated Invoice Follow-Up for Trades — Score: 100/105

| Criterion | Score | Weight | Weighted | Notes |
|-----------|-------|--------|----------|-------|
| Market Validation | 5/5 | 3x | 15 | Multiple concurrent validated builders: $14K/mo (r/passive_income), $11K/mo (r/SaaSGrowth_01), $18K/mo (r/SaaS) — this is the clearest multi-builder validation in the entire portfolio |
| Competitor Weakness | 4/5 | 2x | 8 | Generic QB/FreshBooks reminders exist but aren't trade-specific; CraftBoop early but email-only; SMS-first is unoccupied |
| LTD Viability | 5/5 | 2x | 10 | $49-69 LTD vs. ongoing $29/mo — plumber with $47K in unpaid invoices = clear ROI story |
| No Free Tier | 4/5 | 1x | 4 | Wave has basic reminders but generic; nothing trade-specific |
| Channel Access | 5/5 | 2x | 10 | r/sweatystartup, r/HVAC, r/Plumbing, r/GeneralContractor — all active, all validate the problem |
| Content Potential | 4/5 | 1x | 4 | "Automated invoice reminders for contractors", "how to get paid faster HVAC" — strong SEO angles |
| AppSumo Fit | 5/5 | 2x | 10 | Perfect: simple, boring, clear ROI ("get paid faster"), LTD makes sense for trades hating subscriptions |
| Review Potential | 4/5 | 1x | 4 | Tradespeople will review if they recover unpaid invoices within 30 days |
| MRR Path | 5/5 | 3x | 15 | Multiple live examples of $10K-$18K MRR — clearest validated MRR path in this evaluation cycle |
| Build Feasibility | 5/5 | 2x | 10 | Stripe/QuickBooks webhooks + Twilio SMS + mobile-first invoice UI = 2-3 week MVP |
| Boring Business Bonus | 5/5 | 2x | 10 | Trades + payment collection = quintessential boring business |

**Total: 100/105** ↑8 (prior: 92/105 on 2026-09-29)

**Verdict**: BUILD
**Decision Status**: NEW — validated revenue, existing shortlisted file exists
**Next Steps**: Build SMS-first invoice follow-up for HVAC/plumbing. Differentiate from CraftBoop (email-only) with SMS + WhatsApp. Add "dispute detection" (client question pauses sequence). Launch AppSumo at $59 LTD.
**Risks**:
1. CraftBoop ($29/mo) has head start — ship fast and go SMS-first
2. A2P 10DLC registration takes 2-3 weeks — plan for this in timeline
3. Carriers (Twilio/Vonage) can filter aggressive SMS sequences — tone calibration required

**Key Source Links**:
- https://www.reddit.com/r/passive_income/comments/1rkivif/a_guy_i_talked_to_makes_14kmonth_from_an_app_that/
- https://www.reddit.com/r/sweatystartup/comments/1ho5jv8/tradespeople_deserve_better_admin_tools_so_i/
- https://www.reddit.com/r/SaaS/comments/1s19sc9/i_built_a_boring_saas_that_solves_one_small/
- https://www.reddit.com/r/SaaSGrowth_01/comments/1tum83d/my_saas_is_boring_but_it_makes_11kmonth/

**Signal Frequency**: 4 concurrent threads across 3 subreddits; 3 confirmed live products at $11K-$18K MRR — highest revenue validation frequency ever seen in this evaluation cycle; increasing

---

### 2. Property Management for Small Landlords (Multi-LLC, Real Accounting) — Score: 95/105

| Criterion | Score | Weight | Weighted | Notes |
|-----------|-------|--------|----------|-------|
| Market Validation | 5/5 | 3x | 15 | 17M+ US individual landlords; Stessa/DoorLoop/AppFolio all prove market; RentOS $99/mo AI property manager already launched; 44M US rental units |
| Competitor Weakness | 5/5 | 2x | 10 | Per-unit pricing universally complained about; Stessa too simple (no balance sheet); AppFolio/Buildium minimum 50+ units; multi-LLC breaks every existing tool |
| LTD Viability | 5/5 | 2x | 10 | $59-99 LTD for 1-50 units; "flat pricing landlords" is confirmed AppSumo sweet spot; DoorLoop launched on AppSumo |
| No Free Tier | 3/5 | 1x | 3 | Stessa/TurboTenant/Innago have free tiers — must differentiate on features |
| Channel Access | 5/5 | 2x | 10 | r/realestateinvesting (600K+), r/landlord (65K+), BiggerPockets (2M+), r/PptyMgmtSoftware |
| Content Potential | 5/5 | 1x | 5 | "AppFolio alternative", "landlord software for 10 units", "multi-LLC property accounting" |
| AppSumo Fit | 5/5 | 2x | 10 | Real estate investors are deal-savvy buyers; flat pricing is natural AppSumo pitch |
| Review Potential | 4/5 | 1x | 4 | Landlords will review if rent tracking + tax export saves time at year-end |
| MRR Path | 5/5 | 3x | 15 | Per-unit or flat monthly; portfolio growth = natural expansion revenue; RentOS proves $99/mo price point |
| Build Feasibility | 4/5 | 2x | 8 | Multi-entity accounting is hard but doable in 4-6 weeks for MVP; bank CSV import + P&L per property |
| Boring Business Bonus | 4/5 | 2x | 8 | Property management = unglamorous professional service |

**Total: 98/105** (prior: 100/105 original — today re-scored with multi-LLC accounting angle)

**Verdict**: BUILD
**Decision Status**: VALIDATING — existing shortlisted file; multiple new angles confirmed today
**Key angle today**: Multi-LLC is the killer feature nobody handles — inter-entity loans break every existing tool. The competitor analysis confirms "Landlord OS" flat-rate $29/mo unlimited units = unoccupied combination. Trends confirm RentOS $99/mo AI property manager launched (validation, but also new competition).
**Next Steps**: Focus specifically on multi-LLC support + clean CPA export. That's the differentiator Stessa/TurboTenant can't match. No tenant portal in MVP — just the books.
**Risks**:
1. Free tier from Stessa/TurboTenant creates hard-to-beat comparison
2. RentOS ($99/mo, AI-native) just launched — need to differentiate on accounting depth vs. AI novelty
3. Multi-LLC accounting is complex to build correctly — risk of scope creep

**Key Source Links**:
- https://www.reddit.com/r/rentalproperty/comments/1refdp6/frustrated_with_rental_property_accounting_options/
- https://www.reddit.com/r/PptyMgmtSoftware/comments/1welk0d/accounting_software_for_landlords_with_a_few/
- https://news.marketersmedia.com/this-austin-founder-built-an-ai-property-manager-for-independent-landlords/89201997
- https://rentredi.com/blog/best-property-management-software-independent-landlords

**Signal Frequency**: 6+ concurrent threads; RentOS launched + Proprietio confirmed + Supa £21M (UK) = market in structural shift; increasing

---

### 3. Field Service Management for 1-5 Tech Shops (ServiceTitan Gap) — Score: 93/105

| Criterion | Score | Weight | Weighted | Notes |
|-----------|-------|--------|----------|-------|
| Market Validation | 5/5 | 3x | 15 | Multiple indie builders confirmed paying customers; JamieToolfy at 10 beta users from one Reddit post; $8K MRR HVAC tool at 89 companies; Crewbird at 3x ROAS for father's business |
| Competitor Weakness | 5/5 | 2x | 10 | ServiceTitan $800+/mo + 6-week onboarding; Jobber per-user fees bite at first hire; no flat-rate unlimited-tech option below $200/mo |
| LTD Viability | 5/5 | 2x | 10 | $59-99 LTD for 3-tech operation = 1 month ServiceTitan payback; very easy sell |
| No Free Tier | 4/5 | 1x | 4 | FieldCamp/Fieldtics have free tiers but very limited |
| Channel Access | 5/5 | 2x | 10 | r/HVAC, r/Plumbing, r/QuickBooks, r/smallbusiness, FB "HVAC Business Owners" (50K+) |
| Content Potential | 4/5 | 1x | 4 | "ServiceTitan alternative", "HVAC software small business", "field service app 1-5 techs" |
| AppSumo Fit | 4/5 | 2x | 8 | Strong candidate; "field service without the enterprise price" = clear AppSumo hook |
| Review Potential | 4/5 | 1x | 4 | Will review if scheduling + invoicing actually works without 6-week onboarding |
| MRR Path | 4/5 | 3x | 12 | $89-149/mo for 3-5 tech shops; 100 customers = $9-15K MRR; Jobber/HCP prove the model |
| Build Feasibility | 4/5 | 2x | 8 | Core: schedule + dispatch + mobile checklist + invoice; 4-6 weeks; Google LSA integration adds complexity |
| Boring Business Bonus | 5/5 | 2x | 10 | HVAC/plumbing/electrical = deeply boring |

**Total: 95/105** (tracking at 92/105 as of 2026-11-13 in existing file — today's quad-source signal justifies bump)

**Verdict**: BUILD
**Decision Status**: NEW (file exists as `field-service-management.md`)
**Key angle today**: Google LSA integration + flat $149/mo unlimited techs = confirmed unoccupied combination (Crewbird building this for father's business; multiple HN commenters validating). "30-minute setup" = key differentiator vs. Jobber/ServiceTitan onboarding complexity.
**Next Steps**: Build MVP around Google LSA integration as first-class feature — auto-import leads, track job → invoice → review pipeline. Target carpet cleaners and HVAC shops spending on LSA.
**Risks**:
1. Crewbird building exact same concept — move fast or differentiate on specific trade vertical
2. Google LSA API may have access restrictions — validate API availability first
3. Competitor Analyst documents WorkHero $5M seed in same space — funded competition emerging

**Key Source Links**:
- https://www.reddit.com/r/QuickBooks/comments/1sbb8xl/servicetitan_alternative_that_doesnt_need_a_full/
- https://news.ycombinator.com/item?id=50418273 (Crewbird Show HN)
- https://fieldtics.com/blog/best-hvac-software-small-business
- https://www.reddit.com/r/micro_saas/comments/1uv1f0f/built_a_field_service_management_tool_for/

**Signal Frequency**: Quad-source today (all 4 raw files); 15+ months of consistent signal; increasing (WorkHero funding, Crewbird launch = market heating)

---

### 4. Cleaning Business Client Intelligence — Score: 95/105

| Criterion | Score | Weight | Weighted | Notes |
|-----------|-------|--------|----------|-------|
| Market Validation | 5/5 | 3x | 15 | ZenMaid $3M/yr (11 years); BlastoClean launched Oct 2026 (100+ IH comments) = live entry validation; $61B US cleaning market |
| Competitor Weakness | 5/5 | 2x | 10 | ZenMaid/Jobber/HCP all treat client details as afterthought (generic notes fields); no structured pet/product/access data model; job intelligence layer unbuilt |
| LTD Viability | 5/5 | 2x | 10 | $49-69 LTD; ZenMaid's $200-300/mo actual cost for 8 cleaners = clear comparison |
| No Free Tier | 4/5 | 1x | 4 | ZenMaid advertised $19/mo (actual $200-300/mo); positioning against hidden fees = natural differentiator |
| Channel Access | 5/5 | 2x | 10 | FB "House Cleaning Business Owners" (120K+); r/cleaningbusiness; ZenMaid Trustpilot = direct acquisition channel |
| Content Potential | 4/5 | 1x | 4 | "ZenMaid alternative", "cleaning business software 2026", "maid service app" |
| AppSumo Fit | 5/5 | 2x | 10 | Very easy to explain; "ZenMaid without the hidden fees" = AppSumo headline |
| Review Potential | 4/5 | 1x | 4 | Cleaning business owners active on Capterra/G2 when software fails |
| MRR Path | 5/5 | 3x | 15 | ZenMaid $3M/yr = exact playbook; $49-99/mo per business; 300 customers = $15-30K MRR |
| Build Feasibility | 5/5 | 2x | 10 | Client profile system (structured fields for pets/products/access) is 2-3 weeks; ZenMaid clone is 4-6 weeks |
| Boring Business Bonus | 5/5 | 2x | 10 | House cleaning = quintessentially boring |

**Total: 102/105** (tracking at 99/105 as of 2026-11-12 — today's additional validation + BlastoClean = ZenMaid reconfirmation)

**Verdict**: BUILD
**Decision Status**: NEW (file exists as `cleaning-service-management.md`)
**Key angle today**: Reddit reveals the specific job intelligence gap: clients book a clean but don't specify bedrooms, pets, or access instructions — crews show up and the job is twice as big. The "client profile as first-class entity" (pets/eco-products/alarm codes/photos of quirks) is the specific unbuilt feature. BlastoClean entering the bottom of market (quoting accuracy) confirms timing.
**Next Steps**: Build client profile system with structured fields + booking intake form that forces pet/room/access info BEFORE confirming. Standalone or alongside Jobber/HCP as "crew deployment layer."
**Risks**:
1. ZenMaid has 11-year head start in brand recognition — acquisition via Trustpilot reviews is the channel
2. BlastoClean building similar concept at zero revenue — could commoditize the quoting layer
3. Piece-rate payroll is complex; don't add payroll to MVP

**Key Source Links**:
- https://www.reddit.com/r/smallbusiness/comments/1p5f7d0/paying_120month_for_software_that_does_60_of_what/
- https://www.reddit.com/r/cleaningbusiness/comments/1v6dkpm/how_are_you_tracking_jobs_and_customer_notes_once/
- https://www.indiehackers.com/post/tech/from-a-cleaning-side-hustle-to-a-3m-yr-saas-for-cleaning-services-suhsqkDZB1zIwRmXxrFm
- https://www.indiehackers.com/product/blastoclean

**Signal Frequency**: Quad-source today + 150+ days consecutive signal; ZenMaid playbook confirmed; stable at max signal frequency

---

### 5. HVAC-First Equipment & Maintenance Agreement Platform — Score: 92/105

| Criterion | Score | Weight | Weighted | Notes |
|-----------|-------|--------|----------|-------|
| Market Validation | 5/5 | 3x | 15 | 55% HVAC revenue from maintenance agreements; ServiceTitan $151B industry; Breezy HVAC $0→$250K ARR in 9 months |
| Competitor Weakness | 5/5 | 2x | 10 | ServiceTitan/FieldEdge do it but enterprise; HCP maintenance agreements locked behind MAX ($299/mo); Jobber has no equipment-first model |
| LTD Viability | 4/5 | 2x | 8 | $79-299 LTD; slightly harder because recurring compliance and scheduling = monthly model stronger; but LTD unlocks user base |
| No Free Tier | 4/5 | 1x | 4 | No significant free-tier competition in HVAC-specific tools |
| Channel Access | 5/5 | 2x | 10 | r/HVAC, r/HVACAdvice, ACCA member forums, FB "HVAC Business Owners" (50K+) |
| Content Potential | 4/5 | 1x | 4 | "HVAC maintenance agreement software", "equipment history HVAC", "refrigerant log software" |
| AppSumo Fit | 4/5 | 2x | 8 | No HVAC-native AppSumo-friendly tool exists; compliance pain = clear ROI |
| Review Potential | 4/5 | 1x | 4 | HVAC shop owners review when compliance pain is solved |
| MRR Path | 4/5 | 3x | 12 | $49-99/mo; 500 shops × $79/mo = $39.5K MRR; natural path given 55% agreement-based revenue |
| Build Feasibility | 4/5 | 2x | 8 | Equipment-first data model (each unit gets own record) + agreement scheduling = 4-6 weeks; refrigerant log more complex |
| Boring Business Bonus | 5/5 | 2x | 10 | HVAC = deeply boring trades business |

**Total: 93/105** (consistent with 92/105 prior, today competitor analysis upgrades to 93/105)

**Verdict**: BUILD
**Decision Status**: NEW (file exists as `hvac-maintenance-agreements.md`)
**Key angle today**: Competitor analysis identifies a specific gap no HVAC tool fills at base price: equipment is a first-class entity with installed date, service history, refrigerant log (EPA 608), warranty status, and linked maintenance agreement. The "records that failed quietly a year after you buy" complaint directly validates this.
**Next Steps**: Build equipment-centric data model (not job-centric like Jobber/HCP). Every unit gets its own record. Auto-schedule spring/fall PM visits, send renewal reminders 60 days before expiry.
**Risks**:
1. HVAC shop workflows vary significantly by region — refrigerant compliance differs by state
2. WorkHero $5M seed (Navitas Capital) entering adjacent space — funded competition
3. Equipment data model complexity could delay MVP past 6 weeks

**Key Source Links**:
- https://fieldtics.com/blog/best-hvac-software-small-business
- https://comparehvacsoftware.com/hvac-maintenance-agreement-software/
- https://hvacsoftwarehub.com/hvac/crm/housecall-pro-review/
- https://silasreinagel.com/product/software-engineering/saas/vertical-saas/founding-engineer/2023/11/15/breezy-0-to-250k-arr-owning-the-manual-workflow/

**Signal Frequency**: Quad-source today (competitor analysis + Reddit HVAC threads + HN WorkHero + trends AI OS wave); increasing with VC attention

---

### 6. Solo Auto Repair Shop Management — Score: 93/105

| Criterion | Score | Weight | Weighted | Notes |
|-----------|-------|--------|----------|-------|
| Market Validation | 5/5 | 3x | 15 | 200,000+ US independent shops; RepairShopr exodus actively happening in 2026 (broken SMS, lost tickets); Tekmetric/Shopmonkey prove market at $200-500/mo |
| Competitor Weakness | 5/5 | 2x | 10 | RepairShopr "rotted since 2022"; Tekmetric $279+/mo + per-tech fees; Shopmonkey annual contracts; SMS locked behind upper tiers across all major competitors |
| LTD Viability | 5/5 | 2x | 10 | $79-149 LTD; "Never pay $200/mo for shop software again" = perfect AppSumo headline |
| No Free Tier | 4/5 | 1x | 4 | ARI ($39.99) and GreaseGoose ($39.99) are low-price but not LTD |
| Channel Access | 5/5 | 2x | 10 | r/mechanicadvice, r/autorepair, r/MobileAutoRepair, FB "Independent Auto Repair Shop Owners", NAPA network |
| Content Potential | 4/5 | 1x | 4 | "RepairShopr alternative", "auto repair shop software solo", "shop management software $49" |
| AppSumo Fit | 5/5 | 2x | 10 | RepairShopr refugee pool = ready buyer pool; "lifetime deal for shop management" is a compelling hook |
| Review Potential | 4/5 | 1x | 4 | Shop owners active on Capterra; migration from broken RepairShopr creates motivated reviewers |
| MRR Path | 4/5 | 3x | 12 | $49/mo flat; 200 shops = $9.8K MRR; BookingAutomotive at $99/mo flat-rate validates price point |
| Build Feasibility | 4/5 | 2x | 8 | Repair orders + DVI + customer SMS + invoicing + QB sync = 4-6 weeks; labor guide integration harder |
| Boring Business Bonus | 5/5 | 2x | 10 | Auto repair = deeply boring |

**Total: 93/105** (prior: 100/105 in existing file — recalibrated for today's new RepairShopr refugee context)

**Verdict**: BUILD
**Decision Status**: NEW (file exists as `auto-repair-shop-management.md`)
**Key angle today**: RepairShopr exodus is happening NOW. SMS notifications broken, tickets lost, support takes weeks — documented across multiple review sites. This is the clearest active migration window in this category. The competitor analysis quantifies: 20% of shop owners pay for Tekmetric features they never use; solo shops pay $199-499/mo for 6-bay software.
**Next Steps**: Position as "RepairShopr replacement" — target RepairShopr users specifically (they know the pain, need a decision quickly). SMS included at base price (not add-on). No annual contracts.
**Risks**:
1. Tekmetric, Shopmonkey have strong brand recognition among shop owners — switching inertia
2. Labor guide (Mitchell 1) integration is expensive/complex — start without it
3. AutoLeap, Garage, GreaseGoose are also targeting this segment — not first-mover

**Key Source Links**:
- https://www.microgaps.com/gaps/solo-repair-shop-management-repairshopr-replacement
- https://ghlcarmechanicsnapshot.com/blog/auto-repair-shop-software-cost-2026/
- https://garageauto.app/tekmetric-vs-shopmonkey-vs-autoleap-small-shop/
- https://pro.trackara.app/blog/one-man-shop-software

**Signal Frequency**: Competitor analysis confirms RepairShopr exodus actively happening in 2026; second multi-source confirmation this week; increasing

---

### 7. Landscaping / Lawn Care (Receipt Capture + Route Management) — Score: 91/105

| Criterion | Score | Weight | Weighted | Notes |
|-----------|-------|--------|----------|-------|
| Market Validation | 5/5 | 3x | 15 | 600,000 US lawn care businesses; Jobber/Service Autopilot/LMN prove market; GrassDx HN 78 upvotes/60 comments confirms demand |
| Competitor Weakness | 5/5 | 2x | 10 | Jobber $39→$119 price jump at first hire (#1 documented complaint); LMN "looks like 2015"; Service Autopilot steep learning curve; no weather-aware scheduling at affordable tier |
| LTD Viability | 5/5 | 2x | 10 | $59-99 LTD; weather-aware scheduling is unique differentiator = easy explain for AppSumo |
| No Free Tier | 4/5 | 1x | 4 | Yardbook free tier exists; GreenRoute $5/mo; must compete on features |
| Channel Access | 5/5 | 2x | 10 | r/lawncare, r/landscaping, FB "Lawn Care Business Owners", YouTube (Mike Andes, Keith Kalfas), LawnSite forums |
| Content Potential | 4/5 | 1x | 4 | "Jobber alternative lawn care", "lawn care scheduling app", "landscaping route optimization software" |
| AppSumo Fit | 4/5 | 2x | 8 | "Route software that knows when it rains" = unique differentiator; LMN 3.3★ app creates active refugee pool |
| Review Potential | 4/5 | 1x | 4 | Lawn care operators active on Capterra when LMN/Jobber fail them |
| MRR Path | 4/5 | 3x | 12 | $29-49/mo flat; 500 operators = $14.5-24.5K MRR; natural expansion to chemical log + irrigation management |
| Build Feasibility | 4/5 | 2x | 8 | SMS receipt capture via WhatsApp (no app for crews) + AI tag to job = novel but achievable; weather API integration straightforward |
| Boring Business Bonus | 5/5 | 2x | 10 | Lawn care = deeply boring, local service |

**Total: 95/105** (prior file at 99/105 — today adds receipt capture angle as new feature focus)

**Verdict**: BUILD
**Decision Status**: NEW (file exists as `landscaping-lawn-care.md`)
**Key angles today**: (1) Reddit: receipt capture via WhatsApp/SMS — crew texts photo → AI extracts amount/vendor → auto-assigns to job → feeds billing. No app install required for field crews. (2) Competitor analysis: weather-triggered rescheduling + satellite measurement for quotes without site visit = unoccupied combination. (3) HN: GrassDx two-sided model (AI diagnosis → warm leads) confirms lawn care SaaS market engagement.
**Next Steps**: Build WhatsApp/SMS receipt capture as the wedge product. This solves a daily pain for 2-10 crew operators without requiring any crew app install. Expand to route management + weather integration.
**Risks**:
1. WhatsApp Business API has usage limits and approval requirements — plan for 4-6 week setup
2. ServiceTitan Property Care expansion into lawn care (Oct 2026) = mega competitor entering market
3. 36% of landscaping market still uses no software — paper-to-digital is harder GTM than switcher

**Key Source Links**:
- https://www.reddit.com/r/landscaping/comments/1rnawjv/how_are_you_tracking_weekly_maintenance_invoices/
- https://greenrouteapp.com/compare/best-lawn-care-software
- https://news.ycombinator.com/item?id=48544823 (GrassDx HN)
- https://lawnbook.app/blog/jobber-alternatives-free-lawn-care-20260721

**Signal Frequency**: Quad-source today; 300+ days consecutive signal; stable at high frequency

---

### 8. AI Voice Agents for Small Service Businesses — Score: 90/105

| Criterion | Score | Weight | Weighted | Notes |
|-----------|-------|--------|----------|-------|
| Market Validation | 5/5 | 3x | 15 | Bootstrapped HVAC/plumbing AI voice: $979K TTM revenue, $360K profit, 85% growth on acquire.com; Broccoli $52M (Khosla/YC); Avoca $125M/$1B valuation; ServiceAgent, Frontdesk AI (10K+ businesses) |
| Competitor Weakness | 4/5 | 2x | 8 | Broccoli/Avoca target mid-to-large operators; self-serve at $99/mo for 1-2 tech shops = unoccupied; niche-specific (pest control, window cleaning) = unbuilt |
| LTD Viability | 3/5 | 2x | 6 | $497-997 LTD viable at higher price point; "one missed call = $200-500 lost" ROI story; but AI infra costs complicate unit economics |
| No Free Tier | 5/5 | 1x | 5 | No significant free voice AI for trades; Phena (UK, £29/mo) has no US equivalent |
| Channel Access | 5/5 | 2x | 10 | r/HVAC, r/Plumbing, r/sweatystartup, r/PestControlIndustry; also agency model (re-sellers) |
| Content Potential | 4/5 | 1x | 4 | "AI receptionist for HVAC", "AI answering service for plumbers", "missed call solution for contractors" |
| AppSumo Fit | 3/5 | 2x | 6 | Harder to explain in AppSumo listing; agency re-seller model might be better GTM |
| Review Potential | 4/5 | 1x | 4 | Will review if calls answered after hours result in booked jobs |
| MRR Path | 5/5 | 3x | 15 | $979K TTM proven bootstrapped; $300-800 MRR per client via agency model at 80% margin |
| Build Feasibility | 4/5 | 2x | 8 | VAPI/Retell + LLM + Twilio = 2-3 week MVP; industry-specific training adds 2-4 more weeks |
| Boring Business Bonus | 5/5 | 2x | 10 | Phone answering for plumbers/pest control = deeply boring |

**Total: 91/105** (prior file at 95/105 — today's bootstrapped $979K ARR signal is highest MRR validation for this category)

**Verdict**: BUILD
**Decision Status**: NEW (file exists as `ai-voice-receptionist-home-services.md`)
**Key angle today**: Bootstrapped AI voice (HVAC/plumbing), $979K TTM revenue, $360K profit, 85% growth, now on acquire.com. 40% of appointments booked after hours. White space: pest control, window cleaning, locksmith — specific verticals not served by generic home services AI.
**Next Steps**: Build pest control-specific AI voice agent (highly seasonal, appointment-driven terminology). Or locksmith dispatch AI (emergency/non-emergency routing is critical). Both are unbuilt.
**Risks**:
1. Broccoli $52M + Avoca $1B targeting adjacent segment — funded competition very real
2. SayDoo launched Nov 6 2026 (built inside a roofing co) = category getting crowded fast
3. AI infra costs complicate LTD unit economics — monthly model strongly preferred

**Key Source Links**:
- https://xitter.cf/agazdecki/status/2114778346089283919 ($979K ARR bootstrapped)
- https://www.einpresswire.com/article/934145369/sophiie-ai-raises-aud-5-million-seed-round-and-launches-ai-operating-system-for-trades-and-service-businesses
- https://getphena.com/ (UK model at £29/mo)
- https://www.pmmag.com/articles/107849-saydoo-launches-ai-company-for-the-skilled-trades

**Signal Frequency**: Triple-source today (HN/IH, trends, indirect via Reddit automated invoice tools); multiple VC rounds confirming; strongly increasing

---

### 9. Lightweight TMS for Small Trucking (1-10 Trucks) — Score: 90/105

| Criterion | Score | Weight | Weighted | Notes |
|-----------|-------|--------|----------|-------|
| Market Validation | 5/5 | 3x | 15 | 90%+ US carriers under 6 trucks; McLeod/TMW prove enterprise market; TMSEZ/Rose Rocket validates mid-market; Haullytics/FreightOps building for exact gap = competitors proving demand |
| Competitor Weakness | 5/5 | 2x | 10 | Enterprise TMS $18-40K/year; "cheap" options have 2005-era UIs; nothing sub-$100/mo combines IFTA + per-truck P&L + driver settlement + dispatch |
| LTD Viability | 4/5 | 2x | 8 | $99-199 LTD per truck; "IFTA alone saves 4-8 hrs/quarter" = clear ROI; easier sell than monthly subscription |
| No Free Tier | 4/5 | 1x | 4 | TMSEZ exists at $15/user/mo; Rigbooks basic; no free-tier competitor worth worrying about |
| Channel Access | 5/5 | 2x | 10 | r/OwnerOperators, r/TruckDispatchers, r/FreightBrokers; very active communities asking this exact question |
| Content Potential | 4/5 | 1x | 4 | "TMS for small fleets", "owner operator dispatch software", "IFTA tracking app" |
| AppSumo Fit | 4/5 | 2x | 8 | "TMS without enterprise pricing" = strong AppSumo hook; $299 LTD for owner-operators confirmed viable |
| Review Potential | 4/5 | 1x | 4 | Truckers are detailed reviewers when software saves time on IFTA/settlements |
| MRR Path | 4/5 | 3x | 12 | $29-50/truck/mo; 50 operators × 3 trucks = $4.3-7.5K MRR; natural expansion to ELD integration |
| Build Feasibility | 4/5 | 2x | 8 | Load entry + IFTA state mileage tracking + driver settlement + invoice = 4-6 weeks; ELD integration harder |
| Boring Business Bonus | 5/5 | 2x | 10 | Small trucking = deeply boring |

**Total: 93/105** (prior file at 95/105 — calibrated for today's Reddit perennial demand signal)

**Verdict**: BUILD
**Decision Status**: NEW (file exists as `small-fleet-tms.md`)
**Key angle today**: Reddit documents: one person with 12 trucks building their own TMS because nothing fits. 18+ months of identical threads across 3 subreddits. Owner with 22 years of corporate accounting experience describing 4 trucks as "very complicated" to manage. IFTA quarterly automation = $500+ in avoided late-filing fines = clear ROI.
**Next Steps**: Build "Truck Ledger" — load entry → IFTA state mileage auto-tracking → quarterly return auto-fills → per-truck P&L dashboard → driver pay wizard → settlement PDF. Zero hardware, zero ELD required to start.
**Risks**:
1. TrueMile (YC 2026), Motive ($150M July 2025), Alvys ($40M Sept 2025) = well-funded competition
2. FMCSA compliance complexity varies by state — legal review required before compliance claims
3. ELD integration = top request but adds 4-6 weeks to MVP

**Key Source Links**:
- https://www.reddit.com/r/OwnerOperators/comments/1qg5gsz/what_tms_are_you_actually_using_everything_seems/
- https://www.reddit.com/r/OwnerOperators/comments/1m1z4y1/tms_expensive_af/
- https://www.reddit.com/r/TruckDispatchers/comments/1r0qmrb/dispatchers_ownerops_what_do_you_wish_your_tms/
- https://fleetcollect.net/blog/best-dispatch-software-for-owner-operators-2026

**Signal Frequency**: Perennial question across 3 subreddits for 18+ months; active builder validation; stable

---

### 10. Pest Control Compliance Logger / Vertical SaaS — Score: 89/105

| Criterion | Score | Weight | Weighted | Notes |
|-----------|-------|--------|----------|-------|
| Market Validation | 5/5 | 3x | 15 | $2M ARR pest control SaaS confirmed (HN 448pts/182 comments); GorillaDesk 6,200+ companies; $60B+ market; FieldRoutes exodus actively happening |
| Competitor Weakness | 5/5 | 2x | 10 | GorillaDesk: no FIFRA compliance depth, no license expiration tracking, no chemical inventory reorder; FieldRoutes (ServiceTitan acquisition): active exodus, support "weeks for unresolved issues" |
| LTD Viability | 4/5 | 2x | 8 | $59-89 LTD; "one avoided state fine covers LTD 10x" = ROI story |
| No Free Tier | 4/5 | 1x | 4 | No significant free tier in pest control; GorillaDesk $49-149/mo with no free tier |
| Channel Access | 5/5 | 2x | 10 | r/PestControlIndustry; NPMA member communities; GorillaDesk Capterra reviews as acquisition channel |
| Content Potential | 4/5 | 1x | 4 | "GorillaDesk alternative", "pest control compliance software", "FIFRA application log software" |
| AppSumo Fit | 4/5 | 2x | 8 | Compliance SaaS underrepresented in AppSumo; "never miss a state inspection" = clear hook |
| Review Potential | 4/5 | 1x | 4 | Pest control operators active on Capterra; FieldRoutes refugees = motivated reviewers |
| MRR Path | 4/5 | 3x | 12 | $49-99/mo; 200 operators = $9.8-19.8K MRR; natural expansion to route optimization |
| Build Feasibility | 4/5 | 2x | 8 | Compliance logger: pesticide application record (chemical, EPA reg. number, amount, GPS, weather auto-fill) = 3-4 weeks MVP |
| Boring Business Bonus | 5/5 | 2x | 10 | Pest control = deeply boring |

**Total: 93/105** (prior file at 98/105 — today's Reddit compliance logger angle is new, specific feature focus)

**Verdict**: BUILD
**Decision Status**: NEW (file exists as `pest-control.md`)
**Key angle today**: Reddit specifically identifies the compliance logger need: pesticide application records with location, chemical used, amount, wind speed/direction, temperature — for state compliance. The GorillaDesk gap at the compliance depth level = operator going independent from national chain. ServiceTitan Property Care expansion (Oct 2026) validates market at scale.
**Next Steps**: Build compliance-first pest control field app. Structured pesticide application log (chemical, EPA reg number, amount, location GPS, weather conditions auto-filled). Customer service reports with photo. State-specific forms auto-populated.
**Risks**:
1. ServiceTitan Property Care (Oct 2026) expanding into pest control = major funded competitor entering
2. GorillaDesk has strong brand loyalty at 6,200+ companies — compliance layer as add-on play vs. full replacement
3. FIFRA compliance varies by state — legal review required

**Key Source Links**:
- https://www.reddit.com/r/PestControlIndustry/comments/1ud6xj5/do_you_use_gorilladesk/
- https://news.ycombinator.com/item?id=47509571 (448pts HN pest control SaaS thread)
- https://tooleduppro.com/guides/best-pest-control-software/
- https://servicetitan.com/press/servicetitan-expands-into-enterprise-pest-control-lawn-care-and-pool-spa-markets

**Signal Frequency**: Quad-source this week; sustained at 98/105 for 2+ months; stable-high

---

### 11. Insurance AMS for Scratch Agents — Score: 88/105

| Criterion | Score | Weight | Weighted | Notes |
|-----------|-------|--------|----------|-------|
| Market Validation | 5/5 | 3x | 15 | 300K+ independent P&C agencies; EZLynx/HawkSoft/Applied Epic prove market; "I hate all AMS's" is consistent thread title across r/InsuranceAgent |
| Competitor Weakness | 5/5 | 2x | 10 | EZLynx 91% poor support rating; Applied Epic charges $4,500 to export your own data; QQCatalyst 1-star reviews; AMS360 14% YoY price hikes; ALL expensive for year-1 scratch agents |
| LTD Viability | 4/5 | 2x | 8 | $499 LTD for solo agent; 1.5-month payback vs. $250+/mo ongoing — specific to year-1 bootstrappers |
| No Free Tier | 4/5 | 1x | 4 | NowCerts $99/mo closest but limited P&C depth; no meaningful free tier in AMS |
| Channel Access | 5/5 | 2x | 10 | r/InsuranceAgent, r/InsuranceSoftwareHub, FB "Independent Insurance Agents Network", IIABA/PIA member comms |
| Content Potential | 4/5 | 1x | 4 | "EZLynx alternative", "AMS for new insurance agent", "affordable insurance agency software" |
| AppSumo Fit | 4/5 | 2x | 8 | First AMS on AppSumo = category-first opportunity; $499 LTD vs. $2,400/yr ongoing = strong pitch |
| Review Potential | 4/5 | 1x | 4 | Insurance agents active on Capterra/G2; will review when AMS actually works without costing $4K/year |
| MRR Path | 4/5 | 3x | 12 | $69-99/mo per agency; high LTV (agents stay on AMS for years); 150 agencies = $10.4-14.9K MRR |
| Build Feasibility | 4/5 | 2x | 8 | Client policy log + renewal alerts + doc vault + E&O notes = 4-5 weeks; ACORD form generation harder |
| Boring Business Bonus | 4/5 | 2x | 8 | Insurance agency = unglamorous professional service |

**Total: 91/105** (prior file at 96/105 — today's Reddit scratch agent angle is a new specific sub-ICP)

**Verdict**: BUILD
**Decision Status**: NEW (file exists as `insurance-agency-management.md`)
**Key angle today**: New sub-ICP identified — scratch agents in year 1-3. They need an AMS but can't afford $250+/mo before their book of business is established. $499 LTD is a no-brainer vs. $2,400/year ongoing. The specific need: policy log with renewal alerts 60/30/14 days out, document vault, E&O note logging, basic book-of-business analytics. No complex rating/comparative required.
**Next Steps**: Build "AgencyDesk" scratch-agent tier: flat $69/mo per agency unlimited users (or $499 LTD). Personal + commercial policy tracking + ACORD 25/130 certificate generation + renewal alerts + doc vault. First AMS on AppSumo.
**Risks**:
1. Applied Epic's $4,500 data export fee creates lock-in elsewhere — scratch agents may resist any AMS adoption
2. Compliance/E&O requirements create liability risk if renewal reminder fails
3. ACORD form generation requires licensed forms — ACORD licensing costs and complexity

**Key Source Links**:
- https://www.reddit.com/r/InsuranceAgent/comments/1qcqcdm/scratch_agent_trying_to_outgrow_spreadsheets_need/
- https://www.reddit.com/r/InsuranceAgent/comments/1jxp8p9/crmams_system_for_independent_broker/
- https://getregure.com/blog/best-insurance-management-software-for-small-agencies–2026-complete-guide
- https://madgeek.ai/resources/insurance-agency-software-gap-map-2026

**Signal Frequency**: Reddit recurring question; 96/105 prior signal for months; stable

---

### 12. Voice-First Estimation & Invoicing for Trades — Score: 85/105

| Criterion | Score | Weight | Weighted | Notes |
|-----------|-------|--------|----------|-------|
| Market Validation | 5/5 | 3x | 15 | Feldy 200+ paying customers (YC-backed); SMASH launched (voice → quote → invoice); xBuild $19M Series A (a16z) for roofing AI estimating; Handoff AI live product |
| Competitor Weakness | 4/5 | 2x | 8 | Feldy targets construction; SMASH is generic; solo-contractor mobile estimating "from the driveway in 5 minutes" under $99/mo = unbuilt gap specifically for HVAC/plumbing/landscaping |
| LTD Viability | 5/5 | 2x | 10 | $99-199 LTD; "contractors hate recurring fees"; voice-to-quote is a clear use case; one quote saved = ROI |
| No Free Tier | 4/5 | 1x | 4 | QuoteIQ $29.99/mo exists; no meaningful free tier |
| Channel Access | 4/5 | 2x | 8 | r/HVAC, r/Plumbing, r/GeneralContractor; YouTube contractor channels |
| Content Potential | 4/5 | 1x | 4 | "Voice to quote app for contractors", "AI estimating HVAC", "fast quote tool for plumbers" |
| AppSumo Fit | 4/5 | 2x | 8 | "Quote from the job site in 60 seconds" = strong AppSumo hook; LTD makes sense for this use case |
| Review Potential | 3/5 | 1x | 3 | Will review if conversion rate improves — but results harder to attribute than invoicing tools |
| MRR Path | 3/5 | 3x | 9 | $29-79/mo; niche-within-niche; 500 customers = $14.5-39.5K MRR; natural expansion to material ordering |
| Build Feasibility | 5/5 | 2x | 10 | Whisper + LLM + PDF generation = 2-4 week MVP; HVAC-specific training adds 1-2 weeks |
| Boring Business Bonus | 5/5 | 2x | 10 | Trade estimating = deeply boring |

**Total: 89/105** (prior file at 95/105 — today specifically validates voice-to-quote for HVAC service calls)

**Verdict**: BUILD
**Decision Status**: NEW (file exists as `ai-quoting-estimating-trades.md`)
**Key angles today**: (1) Trends confirms SMASH (PH #49), Angebotsmeister (German trades, voice-first), Tutti (WhatsApp ERP for Spanish contractors, $1,202 MRR, 35 subs) — category is real but fragmented. (2) Gardener on HN built entire AI quote → Xero invoice flow himself with Claude Code + MCPs. (3) Specific white space: HVAC service calls (voice diagnostic + repair estimate on-site). Speed to market: 2-4 weeks.
**Next Steps**: Build voice-to-quote specifically for HVAC service calls: contractor speaks diagnostic notes + repair scope on-site → AI generates structured estimate → PDF to customer + payment link. Whisper + LLM + rate card database.
**Risks**:
1. Feldy (YC-backed, 200+ customers) + xBuild ($19M a16z) = well-funded competition in adjacent spaces
2. Voice accuracy in noisy job sites (ambient HVAC noise, construction) = real UX challenge
3. Rate cards require ongoing maintenance — pricing data gets stale

**Key Source Links**:
- https://www.ycombinator.com/launches/SiZ-feldy-field-first-ai-for-home-services-and-contractors/ (200+ paying customers)
- https://www.producthunt.com/products/smash-voice-to-invoice
- https://news.ycombinator.com/item?id=47784724 (Gardener Agentic CRM)
- https://trustmrr.com/startup/tutti ($1,202 MRR, WhatsApp ERP)

**Signal Frequency**: Triple-source today (HN/IH, trends, HN); multiple products launching confirming category; increasing

---

### 13. Construction Job Costing for Small GCs — Score: 83/105

| Criterion | Score | Weight | Weighted | Notes |
|-----------|-------|--------|----------|-------|
| Market Validation | 5/5 | 3x | 15 | Procore/Buildertrend prove market; Billdr $4.4M CAD for GC OS; "discovered 18% over on labor only at final invoice" = documented real loss |
| Competitor Weakness | 4/5 | 2x | 8 | Procore $6K+/year; Buildertrend complex + expensive; JobTread missing real-time cost alerts; QB job costing requires separate scheduling tool |
| LTD Viability | 4/5 | 2x | 8 | $99 LTD; already paying QB + scheduling tool ($100-150/mo combined) = easy comparison |
| No Free Tier | 4/5 | 1x | 4 | Contractor Foreman ~$49/mo; no significant free tier |
| Channel Access | 4/5 | 2x | 8 | r/ConstructionMNGT, r/Construction, r/GeneralContractor, r/ConstructionManagers |
| Content Potential | 3/5 | 1x | 3 | "Job costing software small GC", "construction budget tracking", "real-time job costing" |
| AppSumo Fit | 3/5 | 2x | 6 | Harder to explain in AppSumo; B2B construction = less AppSumo-native audience |
| Review Potential | 4/5 | 1x | 4 | GCs will review when real-time alerts prevent cost overruns |
| MRR Path | 4/5 | 3x | 12 | $49-99/mo; residential GC market is large; 200 customers = $9.8-19.8K MRR |
| Build Feasibility | 4/5 | 2x | 8 | Estimate → actual comparison + sub invoice import + material receipt photo → job = 4-6 weeks; change order complexity adds time |
| Boring Business Bonus | 5/5 | 2x | 10 | Residential GC = deeply boring |

**Total: 86/105**

**Verdict**: EXPLORE FURTHER
**Decision Status**: NEW (file exists as `ai-job-costing-trades.md`)
**Key angle today**: Specific pain point — "discover 18% over on labor only when sub submits final invoice." That's too late. Real-time cost alerts when any line item exceeds budget by X% = differentiated feature. Mobile-first, estimate → actual comparison daily.
**Next Steps**: Validate with 5-10 small GC conversations. The real-time alert feature is the wedge vs. JobTread/Buildertrend's post-job reporting.
**Risks**:
1. Billdr $4.4M CAD building GC OS = funded direct competition
2. Change order complexity = scope creep risk in MVP
3. AppSumo audience less ideal; direct Reddit GTM probably more effective

**Key Source Links**:
- https://www.reddit.com/r/ConstructionMNGT/comments/1tpthca/what_job_costing_software_do_small_home_builders/
- https://www.reddit.com/r/Construction/comments/1r2xmrx/what_job_costing_software_do_small_contractors_use/
- https://betakit.com/billdr-relaunches-with-4-4-million-cad-to-build-operating-system-for-construction/
- https://www.reddit.com/r/GeneralContractor/comments/1rsmxkb/small_gc_operation_how_do_you_manage_job_costing/

**Signal Frequency**: 5+ concurrent threads across 4 subreddits; recurring question for 12+ months; stable

---

## Tier 2: Worth Exploring (Score 55-74)

### Dental Practice Management Alternative (OpenDental Managed Hosting) — Score: 72/105
High pain ($5K transfer fees, Dentrix Ascend notification bugs unfixed 10+ months) but complex build. The managed OpenDental hosting + setup + support model is clever (take free open-source, add $99-149/mo cloud hosting vs. $400-500/mo Dentrix). **Risk**: HIPAA compliance + EHR complexity; ongoing hosting costs mean LTD is weaker here.
**Sources**: r/Dentistry, r/Dentists, Zirco.ai HN (insurance verification automation)
**Canonical file**: `dental-practice.md`

### Small Fleet DOT/IFTA Compliance (1-5 Trucks) — Score: 72/105
Strong pain (IFTA late filing = $500+ fine) but overlaps significantly with `small-fleet-tms.md`. Today's Reddit adds specific compliance-first angle (DOT renewal reminders, insurance certificate storage and expiry alerts, broker settlement tracker at $29/truck/month). **Consider**: building compliance module into existing TMS concept rather than standalone product.
**Sources**: r/OwnerOperators, r/FreightBrokers
**Canonical file**: `small-fleet-tms.md` (update rather than separate file)

### Local Service Follow-Up Automation (CraftBoop angle) — Score: 70/105
CraftBoop ($29/mo, launched April 2026) is live and validating. HandyPay $1K MRR in 60 days (salon/spa deposits). The gap: add SMS to the follow-up sequence, build review interceptor (4-5 stars → Google, 1-3 → private), trigger from job scheduling. This is adjacent to the invoice follow-up idea (Tier 1 #1) but focused on reviews + rebooking rather than payment collection.
**Sources**: HN/IH (CraftBoop, HandyPay)
**Canonical file**: `local-service-marketing-automation.md`

### Technician Retention & Performance Pay — Score: 68/105
ShareWillow $8.5M seed (Oct 2026) with $2M in performance pay processed in September alone = strong market validation. But ShareWillow targets mid-to-large operators (ServiceTitan/HCP/Jobber certified). White space: 1-10 tech shops that calculate performance pay manually or not at all. Build lightweight "TechPay" at $29-49/mo per shop. **Risk**: ShareWillow will expand downmarket; build fast or pivot to individual technician-facing mobile app.
**Sources**: trends-2026-11-14 (ShareWillow, The Nut Report)

### QuickBooks Desktop Replacement for Multi-Business — Score: 68/105
Huge macro tailwind (QB Desktop price $599→$1,150/year, discontinuation forcing hundreds of thousands of users). But market is extremely competitive (Wave, Xero, Zoho Books, FreshBooks all fighting for this). The specific angle (multi-entity support, 1-5 DBAs, combined P&L view, one-time payment) is differentiated but build complexity is high. LTD model makes more sense here than recurring.
**Sources**: r/Accounting, r/Bookkeeping, r/smallbusiness
**Consider**: This overlaps with `property-management.md` (multi-LLC accounting) — evaluate if multi-LLC property accounting + multi-entity small business are the same product.

### Trades Workforce Training & Compliance — Score: 65/105
Strong VC validation (Quinn $4M, Skillmaker $4.5M, Navigate.AI $25M, Trayd $10M Series A). But the affordable end (under 20 employees, OSHA compliance tracking + e-learning) requires content creation which is non-trivial. Speed to market for compliance checklist + certification tracking is 4-6 weeks. **Most viable angle**: lightweight "skills passport" for individual technicians to own and carry.
**Sources**: trends-2026-11-14 (multiple VC rounds)

### Crewbird / Google LSA + FSM Integration — Score: 67/105
Crewbird founder is already building this for their father's carpet cleaning business. The HN discussion validated the gap strongly (multiple commenters confirmed "nothing exists in between Excel and a full ERP"). Our angle would be to target HVAC specifically (higher AOV per job than carpet cleaning) and add route optimization. **Risk**: Crewbird already building, avoid direct copy.
**Sources**: HN/IH (Crewbird)
**Canonical file**: `field-service-management.md` (update rather than separate file)

### Gardener Agentic CRM (AI for Maintenance Gardeners) — Score: 65/105
Single HN comment from a professional gardener who built their own AI business OS. Interesting proof point but too niche for a standalone product. The "AI field ops for landscapers and maintenance gardeners" angle (photo → AI scope analysis → PDF proposal → Xero invoice) is relevant to the broader landscaping file.
**Sources**: HN (single detailed firsthand account)
**Canonical file**: `landscaping-lawn-care.md` (update rather than separate file)

### Deposit + No-Show Tool (HandyPay angle) — Score: 65/105
HandyPay at $1K MRR in 60 days via in-person outreach (not ads) is a strong signal for the deposit/no-show problem specifically for appointment-based businesses. For trades specifically (HVAC, pest control, cleaning) — no-show rate is a real pain. Build deposit collection + automatic no-show fee enforcement. **But**: this feature is better as a module within a larger FSM/cleaning tool than standalone.
**Sources**: HN/IH (HandyPay)

### Auto Detailing CRM with Automated Rebooking — Score: 63/105
Clear gap between basic Square and full Urable, with nothing in between for solo detailers. Rebooking text at 6 months = high perceived value. Electronic condition report with signature = legal protection. **Issue**: auto detailing market is smaller than HVAC/cleaning/landscaping; also overlaps with `specialty-auto-enhancement-shop.md`.
**Sources**: r/AutoDetailing
**Canonical file**: `specialty-auto-enhancement-shop.md`

---

## Tier 3: Weak / Pass (Score <55)

- **Prelay Weather-Based Work Planning** (HN, 2 points, early launch) — 48/105. Concept is good but engagement too low; best as feature within a larger landscaping/outdoor contractor tool, not standalone. No LTD fit.
- **Zirco.ai Dental AI** (HN, 1 upvote, beta stage) — 45/105. HIPAA compliance + browser automation for insurance portals + AI voice is a 3-layer complexity stack. Build time 12+ weeks; well-funded incumbents (Availity, Kareo) in space. Pass for now.
- **Conductor QB Desktop API Wrapper** ($46K MRR validated) — 42/105. Interesting model but developer-focused infrastructure; no LTD fit; requires deep QB Web Connector SOAP/XML expertise; better as framework idea than direct build.
- **Clawbolt AI via Messaging Apps** (HN, Mozilla.ai open source) — 40/105. Messaging API costs complicate economics; WhatsApp Business API approval is non-trivial; open source core reduces differentiation. Pass.
- **GrassDx AI Lawn Diagnosis Lead Gen** (HN, 78 upvotes) — 38/105. Two-sided marketplace model; AWS/AI infra costs high; lead gen doesn't fit LTD model; better as feature within lawn care tool. Pass.

---

## Top 3 Recommendations

1. **Automated Invoice Follow-Up for Trades** — Score: 100/105 — Multiple concurrent validated products at $11K-$18K/MRR. SMS-first (not email-only like CraftBoop) targeting HVAC/plumbing. Build in 2-3 weeks, launch AppSumo at $59 LTD. The clearest validated opportunity in this evaluation.
   - Key signal: https://www.reddit.com/r/passive_income/comments/1rkivif/a_guy_i_talked_to_makes_14kmonth_from_an_app_that/

2. **Property Management / Small Landlord Accounting (Multi-LLC)** — Score: 95/105 — 17M+ US individual landlords, every tool either too simple or too expensive, multi-LLC accounting breaks every existing tool. RentOS launched as AI property manager validating timing. Build in 4-6 weeks focused on books (not tenant portal).
   - Key signal: https://www.reddit.com/r/rentalproperty/comments/1refdp6/frustrated_with_rental_property_accounting_options/

3. **Cleaning Business Client Intelligence** — Score: 95/105 — ZenMaid $3M/yr (11 years) is the exact playbook. BlastoClean launching validates timing. Job intelligence layer (structured pet/product/access data) is the specific unbuilt feature. First-mover in "crew deployment layer" standalone or as ZenMaid companion.
   - Key signal: https://www.reddit.com/r/smallbusiness/comments/1p5f7d0/paying_120month_for_software_that_does_60_of_what/

---

## Summary Table

| Rank | Idea | Score | Tier | Canonical File | Action |
|------|------|-------|------|---------------|--------|
| 1 | Automated Invoice Follow-Up for Trades | 100/105 | 1 | `contractor-invoice-follow-up.md` | UPDATE |
| 2 | Property Management (Multi-LLC Accounting) | 95/105 | 1 | `property-management.md` | UPDATE |
| 3 | Cleaning Business Client Intelligence | 95/105 | 1 | `cleaning-service-management.md` | UPDATE |
| 4 | Field Service Management (1-5 Tech Shops) | 93/105 | 1 | `field-service-management.md` | UPDATE |
| 5 | HVAC Equipment-First Platform | 92/105 | 1 | `hvac-maintenance-agreements.md` | UPDATE |
| 6 | Solo Auto Repair Shop Management | 92/105 | 1 | `auto-repair-shop-management.md` | UPDATE |
| 7 | Landscaping / Lawn Care (Receipt + Route) | 91/105 | 1 | `landscaping-lawn-care.md` | UPDATE |
| 8 | AI Voice Agents for Small Service Businesses | 90/105 | 1 | `ai-voice-receptionist-home-services.md` | UPDATE |
| 9 | Lightweight TMS for 1-10 Trucks | 90/105 | 1 | `small-fleet-tms.md` | UPDATE |
| 10 | Pest Control Compliance Logger | 89/105 | 1 | `pest-control.md` | UPDATE |
| 11 | Insurance AMS for Scratch Agents | 88/105 | 1 | `insurance-agency-management.md` | UPDATE |
| 12 | Voice-First Estimation & Invoicing | 85/105 | 1 | `ai-quoting-estimating-trades.md` | UPDATE |
| 13 | Construction Job Costing (Small GCs) | 83/105 | 1 | `ai-job-costing-trades.md` | UPDATE |
| 14 | Dental Practice Management Alternative | 72/105 | 2 | `dental-practice.md` | UPDATE |
| 15 | Small Fleet DOT/IFTA Compliance | 72/105 | 2 | `small-fleet-tms.md` | UPDATE |
| 16 | Local Service Follow-Up Automation | 70/105 | 2 | `local-service-marketing-automation.md` | UPDATE |
| 17 | Technician Retention & Performance Pay | 68/105 | 2 | — | EXPLORE |
| 18 | QuickBooks Desktop Replacement | 68/105 | 2 | — | EXPLORE |
| 19 | Trades Workforce Training & Compliance | 65/105 | 2 | — | EXPLORE |
| 20 | Crewbird / Google LSA + FSM | 67/105 | 2 | `field-service-management.md` | UPDATE |
| 21 | Gardener Agentic CRM | 65/105 | 2 | `landscaping-lawn-care.md` | UPDATE |
| 22 | Deposit + No-Show Tool (HandyPay) | 65/105 | 2 | — | EXPLORE |
| 23 | Auto Detailing CRM with Rebooking | 63/105 | 2 | `specialty-auto-enhancement-shop.md` | UPDATE |
| 24 | Prelay Weather Planning | 48/105 | 3 | — | PASS |
| 25 | Zirco.ai Dental AI | 45/105 | 3 | — | PASS |
| 26 | Conductor QB Desktop API | 42/105 | 3 | — | PASS |
| 27 | Clawbolt AI via Messaging | 40/105 | 3 | — | PASS |
| 28 | GrassDx Lead Gen Model | 38/105 | 3 | — | PASS |
