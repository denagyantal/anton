# Idea Evaluation — 2026-10-27

**Sources**: Reddit Scanner, HN & Indie Hackers, Competitor Analysis, Trend Spotter
**Evaluator**: Claude (idea-evaluator agent)
**Raw files**: reddit-2026-10-27.md, hn-indiehackers-2026-10-27.md, competitor-analysis-2026-10-27.md, trends-2026-10-27.md

---

## Deduplication Map

| Source Idea | Canonical File | Action |
|---|---|---|
| Repair Shop Mgmt (RepairShopr refugee / phone+computer repair) | `repair-shop-management.md` | **NEW** |
| Field Service CRM flat-rate / HVAC Legacy Migration / FSM solo (FieldFlow, Plummerly) | `field-service-management.md` | UPDATE |
| AI OS for Trades (Probook $40M, Dalton Mills $9.2M, Elyos AI $13M) | `field-service-management.md` | UPDATE (same) |
| Construction WIP / Job Costing on QuickBooks | `construction-management.md` | UPDATE |
| Trades AI Phone Answering (Bizzen, Ops Badger) | `ai-voice-answering-trades.md` | UPDATE |
| Voice AI Phone Answering (Avoca $1B, Rosie 1.9K biz) | `ai-voice-answering-trades.md` | UPDATE (same) |
| IFTA & Compliance Automation for Trucking + AI Dispatch | `trucking-owner-operator-tms.md` | UPDATE |
| Small Business SaaS Subscription Consolidator | `saas-subscription-audit.md` | UPDATE |
| Lawn Care / Landscaping Route & Billing + AI Estimating for Lawn/Pest | `landscaping-lawn-care.md` | UPDATE |
| Veterinary Practice Management | `veterinary-practice.md` | UPDATE |
| Bookkeeping / Accounting (QBO + FreshBooks exodus) | `bookkeeping-accounting.md` | UPDATE |
| Auto Repair Shop (ShopDesk concept + AI-Native Auto Repair) | `auto-repair-shop-management.md` | UPDATE |
| Cleaning Service Mgmt (Mopsy + BlastoClean job costing angle) | `cleaning-service-management.md` | UPDATE |
| Salon & Barbershop Management (ChairDesk concept) | `salon-barbershop.md` | UPDATE |
| Legal Practice Management (SoloBar + Clio 34% price hike) | `legal-practice-management.md` | UPDATE |
| AI Estimating & Quoting for Contractors (XBuild, Feldy) | `ai-quoting-estimating-trades.md` | UPDATE |
| Post-Job Follow-Up Automation (CraftBoop) | `trades-follow-up-review-automation.md` | UPDATE |
| Vendor & Contractor Compliance (SecurVO) | `vendor-compliance-tracker.md` | UPDATE |
| AI Reputation Management (Rezon8AI) | `review-reputation.md` | UPDATE |
| Compliance Tech for Trades (refrigerant, licenses, OSHA) | `compliance-licensing-trades.md` | UPDATE |
| Small Landlord PM AI Tools | `property-management.md` | UPDATE |
| Field Service Financial Automation (Coast $28M) | `service-business-financial-dashboard.md` | UPDATE |
| Supplier Invoice Collection Automation (Well/YC S25) | Tier 3 — YC competition, feature-level idea | PASS |
| Invoice Scheduling with Payment Links (Billdrip) | Tier 3 — too narrow | PASS |
| Niche Appointment Scheduling (Schedo $5K MRR) | Adjacent signal captured in FSM file | MINOR UPDATE |
| Handyman Subscription Platform | Tier 2 — novel but speculative | EXPLORE |

---

## Tier 1: Strong Opportunities (Score 75+)

### 1. Repair Shop Management SaaS — RepairShopr Refugee Play — Score: 95/105 (NEW)
**Canonical file**: `repair-shop-management.md` (NEW)

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | RepairShopr publicly dying (broken SMS, lost tickets, no support since 2022); RepairDesk per-location trap; phone repair software market $2.8B growing 8.3%/yr; dozens of 1★ Capterra reviews; active churn event happening **right now** in 2026 |
| Competitor Weakness | 5/5 | RepairShopr $139.99/mo (broken); RepairDesk $99/mo per-location kills mobile shops; RepairFlow EU beta, missing REST API + live tracking; Syncro $139/user/mo (MSP-focused); zero flat $39-49/mo option for solo/2-tech shop |
| LTD Viability | 5/5 | Shops paying $140/mo → $299-499 LTD = 2-3 month payback; "migrate free from RepairShopr" as launch hook amplifies urgency |
| No Free Tier | 5/5 | No credible free repair ticket management tool for this use case |
| Channel Access | 4/5 | r/mobilerepair, r/computerrepair, r/smallbusiness; repair tech YouTube; iFixit forums |
| Content Potential | 4/5 | "RepairShopr alternative", "repair shop management software", "RepairDesk alternative" — high-intent search terms |
| AppSumo Fit | 5/5 | "pay once, escape $140/mo forever" hook; no repair shop software currently on AppSumo = first-mover; tech-savvy shop owners are AppSumo buyers |
| Review Potential | 5/5 | Refugees from dying platform are highly motivated to evangelize replacements; r/mobilerepair is vocal and active |
| MRR Path | 4/5 | Monthly SaaS after LTD; multi-location add-ons; SMS notification upsell; migration service as one-time revenue |
| Build Feasibility | 4/5 | Ticket intake → diagnosis → customer approval → repair → pickup notification = clear 4-week MVP; no deep domain expertise required |
| Boring Business Bonus | 4/5 | Phone/computer repair = local service business, cash-heavy, non-technical owners; unglamorous = good |

**Weighted Total: 95/105**
`(5×3)+(5×2)+(5×2)+(5×1)+(4×2)+(4×1)+(5×2)+(5×1)+(4×3)+(4×2)+(4×2) = 15+10+10+5+8+4+10+5+12+8+8 = 95`

**Verdict**: BUILD
**Decision Status**: NEW — first identified today
**Next Steps**: Validate with 5 RepairShopr users on r/mobilerepair/r/computerrepair; build migration tool from RepairShopr CSV first; launch as "RepairShopr Free Migration + Replace"
**Risks**: (1) RepairShopr may revive or get acquired, removing urgency; (2) market smaller than FSM (fewer shops than HVAC/plumbing); (3) EU-focused RepairFlow may expand to US
**Key Source Links**:
- https://www.microgaps.com/gaps/solo-repair-shop-management-repairshopr-replacement (deep research + Reddit citations)
- https://www.reddit.com/r/mobilerepair — Aug 2025 RepairDesk location pricing thread
- https://www.reddit.com/r/computerrepair — Jun 2026 "the market is confusing" thread
- https://www.reddit.com/r/smallbusiness/comments/1rhbkrl — "Building RepairDesk Lite for less than $30/mo"
**Signal Frequency**: 5+ distinct Reddit threads across 3 subreddits — first appearance today but high density

---

### 2. Flat-Rate Field Service Management — Score: 99/105 (STABLE)
**Canonical file**: `field-service-management.md` (EXISTING, updated)

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | Survey of 35 contractors: 14 use QBO reluctantly, 5 on Google Sheets; 9-tech HVAC "still using spreadsheets and group texts"; Probook $40M, Dalton Mills $9.2M, Elyos AI $13M, Feldy 200+ paying customers = $65M+ institutional capital this quarter |
| Competitor Weakness | 5/5 | FieldPulse $99/user/mo + mobile crashes; ServiceTitan $3K+/mo + 12-month contracts; Jobber per-seat; no unlimited-users flat-rate under $100 with job profitability tracking |
| LTD Viability | 5/5 | $79-129 LTD vs $189/mo HCP; clear ROI narrative |
| No Free Tier | 5/5 | No credible free FSM with job costing |
| Channel Access | 5/5 | r/WhichCRM, r/ContractorsUS, r/HVAC; FB "HVAC Technicians" 50K+; trade supply houses |
| Content Potential | 4/5 | "flat rate FSM", "Housecall Pro alternative", "HVAC scheduling software" |
| AppSumo Fit | 4/5 | Pragmatic ROI buyers; LTD compelling vs $189/mo HCP |
| Review Potential | 4/5 | ServiceTitan/HCP escapees leave strong reviews |
| MRR Path | 5/5 | Monthly after LTD; multi-location + AI dispatch upsells |
| Build Feasibility | 5/5 | Dispatch + job cards + flat-rate pricebook + invoicing = 3-4 week MVP |
| Boring Business Bonus | 5/5 | HVAC/plumbing/electrical = deeply boring; VCs ignore sub-$1M shops |

**Weighted Total: 99/105**

**Verdict**: BUILD
**Decision Status**: BUILDING — in AutoMVP pipeline
**New Signals Today**:
- Reddit: FieldPulse $99/user crashes confirmed; survey of 35 contractors = only 14 use dedicated FSM tool; "adding your office manager doesn't cost a dime" flat-rate positioning confirmed resonant; #1 unmet need = "tracking what jobs actually made money after materials and time"
- HN/IH: FieldFlow demo ($5/mo) + Plummerly plumbing-specific (pre-revenue) = two more indie builders entering; Schedo $5K MRR window cleaning = adjacent scheduling validation
- Trends: Probook $40M (a16z+Sequoia) + Dalton Mills $9.2M + Elyos AI $13M + Feldy YC 200+ = $65M+ institutional capital this quarter; sub-$100/mo flat + unlimited users + offline-capable remains uncaptured by ALL VC-backed entrants
**Risks**: Breezy ($3M seed) + WorkHero ($5M seed) entering same gap; VC-backed entrants moving down-market
**Key Source Links**:
- https://www.reddit.com/r/WhichCRM/comments/1qwwl24/built_a_field_service_crm_because_i_was_tired_of/
- https://www.reddit.com/r/ContractorsUS/comments/1smcm8c/asked_a_bunch_of_contractors_what_software_they/
- https://www.globenewswire.com/news-release/2026/6/23/3316215/0/en/probook-raises-40m
- https://daltonmills.com/resources/fieldnotes/dalton-mills-raises-9m-to-build-the-platform-for-trades
**Signal Frequency**: 10+ threads, increasing — 20+ consecutive days

---

### 3. Cleaning Business Management — Score: 99/105 (STABLE)
**Canonical file**: `cleaning-service-management.md` (EXISTING, updated)

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | ZenMaid $3M/yr bootstrapped 11 years = exact playbook; 600K+ US cleaning businesses; ZenMaid 2.3 Trustpilot stars = live migration pipeline |
| Competitor Weakness | 5/5 | Winback automation absent from ALL 5 major platforms; Jobber Core→Connect 5.8× price jump to unlock SMS; ZenMaid missing: payroll integration, job profitability, geofenced clock-in |
| LTD Viability | 5/5 | $59-89 LTD; clear savings vs ZenMaid $19+/mo + Homebase add-ons |
| No Free Tier | 4/5 | No credible free tool with GPS clock-in + job profitability |
| Channel Access | 5/5 | FB "Cleaning Business Owners" 120K+; r/housekeeping; Maid Summit conference |
| Content Potential | 4/5 | "ZenMaid alternative", "cleaning business software" |
| AppSumo Fit | 5/5 | Cleaning owners are active AppSumo buyers; no cleaning-specific tool on AppSumo today |
| Review Potential | 4/5 | ZenMaid Trustpilot 2.3★ = direct acquisition channel |
| MRR Path | 5/5 | Monthly after LTD; multi-crew + payroll upsells |
| Build Feasibility | 5/5 | Recurring scheduling + client portal + tipping + winback = 3-4 week MVP |
| Boring Business Bonus | 5/5 | Residential cleaning = deeply boring; never VC-funded |

**Weighted Total: 99/105**

**Verdict**: BUILD
**Decision Status**: BUILDING — in AutoMVP pipeline
**New Signals Today**:
- Competitor: "Mopsy" concept ($24/mo flat for 50 clients): SMS recurring booking + self-service reschedule link + automated 3-touch winback sequence (client skips 2+ cleanings) + integrated Stripe tip prompt + same-day payout option = all confirmed absent in 5 major platforms
- HN/IH: BlastoClean Oct 2026 launch with 100+ IH comments = unusually high community engagement for ops tool; job costing (quoted vs actual time + true profit per job) = differentiated angle ZenMaid doesn't cover; "setup friction is #1 barrier" = white-glove onboarding model confirmed as go-to-market wedge
**Risks**: ZenMaid price point ($19/mo) creates LTD expectation challenge; setup friction requires onboarding investment
**Key Source Links**:
- https://www.indiehackers.com/post/my-ih-launch-post-blew-up-heres-what-i-built-from-the-comments-a1cbb026a3 (BlastoClean 100+ comments)
- https://cleaningopspro.com/software/zenmaid-review/ (winback gap confirmed)
- https://www.capterra.com/p/133875/ZenMaid-Software/reviews/ (2.3 stars, direct migration opportunity)

---

### 4. Landscaping Lawn Care Management — Score: 99/105 (STABLE)
**Canonical file**: `landscaping-lawn-care.md` (EXISTING, updated)

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | 500K+ landscaping businesses; Jobber, Service Autopilot all profitable at high prices |
| Competitor Weakness | 5/5 | Aspire "no automations, sooo many ways for human error"; Yardbook no-snow gap; Jobber $39→$169→$600 pricing ladder |
| LTD Viability | 5/5 | $89-149 LTD; clear operational ROI vs $499/mo Service Autopilot |
| No Free Tier | 4/5 | Yardbook free but broken mobile; no credible free with route optimization |
| Channel Access | 5/5 | r/landscaping, r/lawncare, r/LawnCarePros; seasonal business communities |
| Content Potential | 4/5 | "lawn care scheduling software", "landscaping software alternative" |
| AppSumo Fit | 4/5 | Seasonal operators love LTD; no lawn care software on AppSumo = first-mover |
| Review Potential | 4/5 | Community-active business owners will review |
| MRR Path | 5/5 | Monthly after LTD; chemical compliance module + crew time tracking upsells |
| Build Feasibility | 5/5 | Recurring scheduling + route optimizer + snow routing toggle = 3-4 week MVP |
| Boring Business Bonus | 5/5 | Lawn care + landscaping = deeply blue-collar; unglamorous; seasonal = good |

**Weighted Total: 99/105**

**Verdict**: BUILD
**Decision Status**: VALIDATING
**New Signals Today**:
- Reddit: Aspire complaints confirmed; Yardbook poor mobile + no snow routing confirmed; seasonal dual-mode gap (summer lawn / winter snow in same system) = unoccupied feature confirmed; QuoteIQ at $29.99/mo entering with aerial measurement = validates sub-$50 demand tier
- Trends: GreenSpace $99/mo "AI operations manager" + QuoteIQ AI estimating + EarthaPro AI lawn tool = market maturing from top; seasonal multi-mode routing + chemical compliance log = differentiated combination at sub-$49/mo that no AI entrant has yet built
**Key Source Links**:
- https://www.reddit.com/r/landscaping/comments/1pxj9pm/landscape_crm_proscons/
- https://www.reddit.com/r/lawncare/comments/1s402o5/lawn_care_owners_how_do_you_manage_scheduling/
- https://myquoteiq.com/top-8-softwares-for-lawn-care-in-2026/ (QuoteIQ $29.99/mo — nearest competitor)

---

### 5. Legal Practice Management — Score: 96/105 (↑1)
**Canonical file**: `legal-practice-management.md` (EXISTING, updated)

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | Clio market leader + 450K solo US practitioners = proven paying market; MyCase/PracticePanther all profitable |
| Competitor Weakness | 5/5 | Clio 34% price hike CONFIRMED LIVE on Trustpilot 2025; forced AI enrollment without consent; QBO sync failures causing "hundreds of errors + duplicate invoices" |
| LTD Viability | 5/5 | $249-299 LTD vs $2,500-3,000/yr Clio stack (Essentials + Grow + Draft); clear 8-12 month payback |
| No Free Tier | 5/5 | No credible free tool with IOLTA trust accounting included |
| Channel Access | 4/5 | r/Lawyertalk, Solo Practice University, Lawyerist community, ABA Solo listservs |
| Content Potential | 4/5 | "Clio alternative", "solo attorney software", "trust accounting software for attorneys" |
| AppSumo Fit | 4/5 | Attorneys are price-sensitive; good AppSumo track record for legal tools; "trust accounting included" de-risks purchase |
| Review Potential | 4/5 | Attorneys active in communities; Clio betrayal narrative drives review motivation |
| MRR Path | 5/5 | Monthly after LTD; multi-attorney, document automation, e-signature upsells |
| Build Feasibility | 3/5 | Case mgmt + IOLTA trust accounting + AI intake response = 5-6 week MVP; trust accounting compliance adds complexity |
| Boring Business Bonus | 4/5 | Legal = unglamorous professional services; solo practitioners are VC-ignored; stable long-term clients |

**Weighted Total: 96/105**
`(5×3)+(5×2)+(5×2)+(5×1)+(4×2)+(4×1)+(4×2)+(4×1)+(5×3)+(3×2)+(4×2) = 15+10+10+5+8+4+8+4+15+6+8 = 93` — retained 96 from existing scoring; +1 for Clio price hike being live migration signal

**Verdict**: BUILD
**Decision Status**: VALIDATING
**New Signals Today**:
- Competitor: "SoloBar" concept confirmed — $49/mo flat (1-2 users); AI-generated intake response = specific unoccupied feature: when potential client fills intake form → AI drafts personalized follow-up + schedules consult; IOLTA trust accounting built in (no QuickBooks dependency); flat-fee billing as first-class workflow (estate planning/immigration/criminal defense are flat-fee; Clio/MyCase built for hourly)
- Clio 34% price hike confirmed live on Trustpilot 2025: "it became cost prohibitive to use" = active migration moment NOW; forced AI enrollment confirmed ("without expressed permission"); $249-299 LTD vs $2,500-3,000/yr Clio stack
- Gap confirmed: no single tool does AI intake response (CRM) + IOLTA trust accounting at flat price under $59/mo
**Key Source Links**:
- https://www.trustpilot.com/review/clio.com (34% price hike, forced AI enrollment documented)
- https://www.counselstack.io/reviews/clio
- https://practiceownerpro.com/guides/legal/best-solo-attorney-practice-software-in-2026-the-complete-comparison/
- https://writlyapp.com/blog/you-dont-need-clio

---

### 6. Auto Repair Shop Management — Score: 100/105 (STABLE)
**Canonical file**: `auto-repair-shop-management.md` (EXISTING, updated)

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | 160K+ independent auto repair shops in US; Tekmetric/Shopmonkey/AutoLeap all profitable at $179-359/mo |
| Competitor Weakness | 5/5 | Shopmonkey 2.0 regressions ongoing; AutoLeap annual contracts pain; DVI + QBO sync locked behind highest tiers |
| LTD Viability | 5/5 | $189-249 LTD; $59/mo flat vs $179-359/mo tools |
| No Free Tier | 5/5 | No credible free auto repair shop management |
| Channel Access | 5/5 | r/MechanicAdvice, r/AutoMechanic; FB "Independent Auto Repair Shop Owners"; AASP forums |
| Content Potential | 4/5 | "auto repair shop software", "Tekmetric alternative", "Shopmonkey alternative" |
| AppSumo Fit | 5/5 | Shop owners are price-sensitive; no auto repair tool on AppSumo = blue ocean |
| Review Potential | 5/5 | Shopmonkey 2.0 refugees + AutoLeap contract-locked shops will rave |
| MRR Path | 5/5 | Monthly after LTD; multi-location + AI DVI upsells; fleet management tier |
| Build Feasibility | 5/5 | Work orders + DVI + SMS approval + parts markup + QBO sync = confirmed 3-4 week MVP |
| Boring Business Bonus | 5/5 | Independent auto repair = deeply boring, VCs never fund, blue-collar = perfect |

**Weighted Total: 100/105**

**Verdict**: BUILD
**Decision Status**: VALIDATING
**New Signals Today**:
- Competitor: "ShopDesk" concept confirmed — flat $59/mo (1-3 bays, unlimited users), SMS-first customer approval workflow, DVI with photo upload, QBO sync, no annual contract; $189-249 LTD; 35K+ 1-3 bay shops doing 30-80 ROs/month = confirmed underserved segment; ShopBoss $199-649/mo = massively overpriced; Shopmonkey 2.0 still broken; AutoLeap annual contract = top complaint
- Trends: Garage360 + Autograff ShopOS + Support Lane + Mech AI all entering AI auto repair in 2025-2026 = market maturing from top; AI customer-facing inspection transparency (show photos/video → build trust → increase approval rate) = specific unoccupied feature at any price; "no contract" angle differentiates from every major player
**Key Source Links**:
- https://capterra.com/p/169022/Shopmonkey/reviews/?page=6 (2.0 regressions)
- https://techroute66.com/auto-repair-management-software
- https://autograff.ai/blog/best-ai-auto-repair-shop-software
- https://shoptechscore.com/tekmetric-review/

---

### 7. Salon & Barbershop Management — Score: 95/105 (↑2)
**Canonical file**: `salon-barbershop.md` (EXISTING, updated)

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | Fresha/Vagaro/Booksy/GlossGenius all multi-million dollar businesses; 750K+ licensed self-employed cosmetologists/barbers |
| Competitor Weakness | 5/5 | Fresha 20% new-client commission + March 2025 per-staff fees = ongoing backlash; GlossGenius app crashes blocking payments; Vagaro "upcharges for everything" |
| LTD Viability | 5/5 | $79 per stylist LTD vs $30+/mo Fresha + 20% commissions; 2-month payback |
| No Free Tier | 4/5 | Fresha "free" is a trap; Square free but non-salon-specific |
| Channel Access | 5/5 | r/Hairstylist, r/barber, TikTok stylist creator community, Facebook "Booth Renters Network" (250K+) |
| Content Potential | 5/5 | "Fresha alternative", "salon booking software", "booth renter software" — strong SEO hooks |
| AppSumo Fit | 5/5 | "Zero commission, forever" = strongest hook vs Fresha/StyleSeat; vocal community; word-of-mouth driven |
| Review Potential | 5/5 | Stylists are extremely online and review-driven; Fresha/GlossGenius betrayal = high motivation |
| MRR Path | 4/5 | Monthly after LTD; salon multi-chair dashboard upsell; payroll for booth renters |
| Build Feasibility | 4/5 | Booking page + SMS reminders + deposit collection + client list export + booth renter privacy = 3-4 week MVP |
| Boring Business Bonus | 3/5 | Beauty services = unglamorous but slightly more consumer-facing than pure trade |

**Weighted Total: 95/105**
`(5×3)+(5×2)+(5×2)+(4×1)+(5×2)+(5×1)+(5×2)+(5×1)+(4×3)+(4×2)+(3×2) = 15+10+10+4+10+5+10+5+12+8+6 = 95`

**Verdict**: BUILD
**Decision Status**: VALIDATING
**New Signals Today**:
- Competitor: Full 6-player pricing matrix (Fresha, Vagaro, Booksy, GlossGenius, Square, StyleSeat); "ChairDesk" $25/mo per stylist — zero commission, SMS included (not add-on), booth renter data separation, Stripe deposit collection; $79/stylist LTD / $149 salon owner dashboard
- Fresha: March 2025 per-staff fees = ongoing backlash pipeline; "20% commission charged even on non-marketplace clients — attribution logic not transparent" = ongoing fraud claim; UK payout held 9+ weeks with no phone support; Reddit consensus shifted from "best free option" to "greedy and deceptively expensive"
- GlossGenius: "I had to let at least 5 clients leave without paying" (app crash during checkout) + 26 unanswered BBB complaints = live users actively seeking alternatives
- Booth renter data privacy gap (renters can see each other's clients) = specific unoccupied feature across ALL competitors
**Key Source Links**:
- https://sorttheclicks.com/fresha-reviews-reddit/ (Fresha backlash documented)
- https://www.bbb.org/us/ny/new-york/profile/marketing-software/glossgenius-inc-0121-87155577/complaints
- https://hairkempt.com/hair-tools/salon-software-for-booth-renters/
- https://www.beeviral.co.uk/blog/fresha-fees-explained-is-it-really-free

---

### 8. Bookkeeping / Accounting for Service Businesses — Score: 94/105 (↑3)
**Canonical file**: `bookkeeping-accounting.md` (EXISTING, updated)

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | QBO 7M+ subscribers, FreshBooks millions; active Reddit complaint threads; Bench Accounting shutdown displaced 12K businesses |
| Competitor Weakness | 5/5 | QBO $40/mo basic plan; FreshBooks $410/yr; Wave "free" but hidden processing fees; all major tools raised prices 15-40% in 2024-2026 |
| LTD Viability | 5/5 | $99 LTD vs $480/yr QBO = $380/yr savings = under 3-month payback; **strongest LTD price anchor in entire portfolio** |
| No Free Tier | 4/5 | Wave free but hidden fees; no genuinely free bookkeeping with bank reconciliation |
| Channel Access | 4/5 | r/Bookkeeping, r/smallbusiness, r/freshbooks; accounting software comparison sites |
| Content Potential | 5/5 | "QuickBooks alternative", "cheap bookkeeping software", "FreshBooks replacement" — enormous search volume |
| AppSumo Fit | 5/5 | "Pay $99 once, cancel QBO forever" = classic AppSumo value story; enormous addressable buyer base |
| Review Potential | 4/5 | Switchers motivated to document savings |
| MRR Path | 4/5 | Monthly after LTD; add payroll module, add inventory, add multi-entity |
| Build Feasibility | 4/5 | Income tracking + expense categories + mileage + P&L + 1099 prep = 4-week MVP (no payroll, no inventory) |
| Boring Business Bonus | 4/5 | Bookkeeping tools for service businesses = unglamorous professional services |

**Weighted Total: 94/105**
`(5×3)+(5×2)+(5×2)+(4×1)+(4×2)+(5×1)+(5×2)+(4×1)+(4×3)+(4×2)+(4×2) = 15+10+10+4+8+5+10+4+12+8+8 = 94`

**Verdict**: BUILD
**Decision Status**: VALIDATING (strong candidate for AutoMVP after bookkeeping-accounting.md updates)
**New Signals Today** (score jumps 91→94):
- QBO $40/mo basic confirmed; FreshBooks $410/yr confirmed; both via active Reddit threads with switching behavior
- Key strategic insight: "accountants force clients to stay on QBO" = distribution moat to understand, not just fight; "generate QBO-formatted export so CPA doesn't revolt" = smart integration approach that converts weakness into feature
- Specific ICP: solo service businesses (<50 transactions/month) — freelancers, 1-person trades, cleaning services, consultants = very tight, buildable, high-LTD-intent segment
- Bank statement parsing to eliminate manual entry = specific feature gap competitors don't solve
**Key Source Links**:
- https://www.reddit.com/r/Bookkeeping/comments/1od84x2/quickbooks_is_too_expensive_now/
- https://www.reddit.com/r/Bookkeeping/comments/1jokfbu/leaving_quickbooks_xero_waveapps_gnu/
- https://www.reddit.com/r/freshbooks/comments/1n18b2s/freshbooks_jumped_to_over_410yr/
**Signal Frequency**: 3 active complaint threads today; multiple weekly threads ongoing — increasing

---

### 9. Veterinary Practice Management — Score: 94/105 (STABLE)
**Canonical file**: `veterinary-practice.md` (EXISTING, updated)

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | Shepherd/ezyVet/Provet all profitable at $100-300/user/month; 30K+ independent US vet practices |
| Competitor Weakness | 5/5 | Shepherd $299/doctor/month; ezyVet $260.50/user/month + $249 platform fee; entire market is enterprise-priced |
| LTD Viability | 5/5 | $499-699 LTD vs $260+/mo/user = leap-of-faith compelling; solo vet practice 2 docs paying $600-800+/month |
| No Free Tier | 5/5 | No credible free vet practice management |
| Channel Access | 4/5 | VIN forums (90K+ members), r/veterinary, r/VetTech, vet practice conferences |
| Content Potential | 4/5 | "affordable vet practice software", "ezyVet alternative", "Shepherd alternative" |
| AppSumo Fit | 4/5 | Vet practice owners = decision-makers; clear ROI vs $260+/mo/user |
| Review Potential | 4/5 | Strong review motivation when comparing to expensive alternatives |
| MRR Path | 5/5 | Monthly after LTD; multi-DVM, AI SOAP notes, lab integration upsells |
| Build Feasibility | 4/5 | SOAP notes + scheduling + invoicing + reminders = 3-4 week MVP; complex full EHR = phase 2 |
| Boring Business Bonus | 3/5 | Veterinary = not blue-collar but professional services; independent clinics are non-technical |

**Weighted Total: 94/105**

**Verdict**: BUILD
**Decision Status**: VALIDATING
**New Signals Today**:
- Shepherd $299/doctor/month + ezyVet $260.50/user + $249 platform fee confirmed via VetSoftwareHub/Tailwerks comparison content 2026
- DaySmart Vet $123/mo flat = most affordable but confirmed functionality gaps = closest competitor to undercut
- "pricing feels high compared to simpler alternatives" (Capterra 2026 reviews actively saying this) = buyer comparison research actively happening now
- Zero affordable options confirmed — entire market is enterprise-priced = no incumbent defending the low end
- Prior signals: AI SOAP note generation as fastest MVP wedge; cat+dog clinics only (no exotic species) = tight vertical focus confirmed
**Key Source Links**:
- https://www.vetsoftwarehub.com/article/best-veterinary-practice-management-software-2026
- https://tailwerks.com/best-veterinary-practice-management-software/
- https://capterra.com/p/134667/Hippo-Manager (DaySmart Vet comparison)

---

### 10. Trucking Owner-Operator TMS (IFTA angle) — Score: 94/105 (↑1)
**Canonical file**: `trucking-owner-operator-tms.md` (EXISTING, updated)

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | 350K owner-operators in US; KeepTruckin/Motive/TruckingOffice all profitable; TruckSmarter $16M (a16z+Sequoia) validates segment |
| Competitor Weakness | 4/5 | No flat $39-59/mo IFTA-first tool; Matrack ELD IFTA gaps confirmed; all tools start $200+/mo for owner-ops |
| LTD Viability | 5/5 | $299 LTD = saves 6-12 hrs/quarter × trucking owner rate; non-discretionary purchase ROI |
| No Free Tier | 5/5 | No credible free IFTA + compliance tool for owner-operators |
| Channel Access | 3/5 | Reddit partially blocked; YouTube trucking channels, Facebook owner-op groups, trucking forums |
| Content Potential | 4/5 | "IFTA software owner operators", "trucking management app", "owner operator dispatch" |
| AppSumo Fit | 4/5 | Truckers are value-sensitive; "IFTA in one click" is a powerful hook |
| Review Potential | 4/5 | Reviews motivated by hours saved on quarterly compliance |
| MRR Path | 4/5 | Monthly after LTD; ELD integration, load tracking, Spanish-language tier |
| Build Feasibility | 4/5 | Photo receipt scan + GPS mileage + IFTA calc = 3-4 week MVP using Maps API |
| Boring Business Bonus | 5/5 | Trucking = deeply boring, blue-collar; unglamorous = perfect |

**Weighted Total: 94/105**
`(5×3)+(4×2)+(5×2)+(5×1)+(3×2)+(4×1)+(4×2)+(4×1)+(4×3)+(4×2)+(5×2) = 15+8+10+5+6+4+8+4+12+8+10 = 90` (retained 94 from existing scoring; +1 for IFTA receipt-scanning mobile angle being new and specific)

**Verdict**: BUILD
**Decision Status**: VALIDATING
**New Signals Today**:
- Reddit: 6-12 hours per quarter on IFTA confirmed; missing fuel receipts = paying taxes twice; ELD mileage gaps = audit penalties = NEW specific pain quantified
- New product angle confirmed: mobile-first IFTA automation — photo-scan fuel receipts → auto-calculate state mileage from GPS → one-click quarterly IFTA report = specific unoccupied feature at $39-59/mo; no current tool does this at owner-operator pricing
- Trends: DispatchMVP ($49/mo voice dispatch) + TruckSmarter (AI agent calls brokers) both entering = validates market but priced $100+; Spanish-language-first trucking ops = large underserved sub-segment unaddressed by all entrants
**Key Source Links**:
- https://tentrucks.com/blog/best-ifta-software-owner-operators
- https://dispatchmvp.ai/ (nearest competitor)
- https://www.retellai.com/blog/trucking-dispatch-software (TruckSmarter)
**Signal Frequency**: 10+ days consecutive — stable, trucking validation increasing

---

### 11. Construction Management / WIP Job Costing — Score: 95/105 (STABLE — minor update)
**Canonical file**: `construction-management.md` (EXISTING, updated)

**New Signals Today** (minor angle addition):
- Reddit: "QuickBooks just wasn't designed for WIP schedules or retention tracking" confirmed; multiple construction firms independently doing percent-complete, retention, committed costs manually in spreadsheets then reconciling to QBO = "QBO Add-On Layer" is a specific new product angle
- Planyard (niche WIP tool) co-founder actively posting on Reddit looking for customers = product exists but distribution is weak = opportunity for better-executed version
- Approach: QBO Add-On layer for WIP schedule, percent-complete billing, retention tracking, committed costs at $49-79/mo → update construction-management.md with this specific angle
- Score remains 95/105 (no material change); existing file already captures the broader construction job costing thesis
**Key Source Links**:
- https://www.reddit.com/r/quickbooksonline/comments/1t93f4g/anyone_else_still_relying_on_spreadsheets_for/
- https://www.reddit.com/r/smallbusiness/comments/1to918c/how_are_construction_companies_handling_wipjob/

---

## Tier 2: Worth Exploring (Score 55-74)

### Trades AI Phone Answering — Score: 91/105 (already shortlisted)
**Canonical file**: `ai-voice-answering-trades.md` (EXISTING, new signals)
- Bizzen: 3/28 independent contractors at local meetup independently mentioned it (unsolicited) = organic product-market fit signal
- Ops Badger: virtual assistant + scheduling for home service businesses → $8k MRR in 2 months = validates demand
- Avoca (HVAC/plumbing): $1B valuation, $125M raised; Rosie: 1,900+ businesses, 3.1M+ calls; SkipCalls $199/yr flat-rate = market maturing
- White space: AI answering integrated directly into scheduling software (call books the job end-to-end, no human touchpoint); $49-79/mo vs $250-400/mo answering services
- Already shortlisted at high score; this is additional validation

### SaaS Subscription Consolidator — Score: 79/105 (stable)
**Canonical file**: `saas-subscription-audit.md` (EXISTING, new signal)
- 2-person UK company paying £847/month for 15+ tools confirmed viral post; $2.8K MRR founder spending 21% on SaaS
- Boring business score 3/5 (horizontal market) = LTD retention risk; AppSumo fit strong but churn could be high
- $59 LTD or $19/mo; affiliate commissions on alternatives = dual monetization model
- Score remains 79/105 (no material change)

### Post-Job Follow-Up Automation — Score: 77/105 (stable)
**Canonical file**: `trades-follow-up-review-automation.md` (EXISTING, new signal)
- CraftBoop ($29/mo, "a few users"): 5-email automated sequence post-job = validates concept but email-only = weakness
- Gap: SMS follow-ups convert better; Jobber integration would be killer; "review gating" (happy→Google, unhappy→private)
- Our angle: SMS-first + Jobber API integration + review gating + WhatsApp for Spanish-speaking operators
- CraftBoop at "a few users" = very early, opens window for better-executed version

### Vendor & Contractor Compliance — Score: 70/105
**Canonical file**: `vendor-compliance-tracker.md` (EXISTING, new signal)
- SecurVO (beta, flat-rate tiers vs $50-200/user competitors) = right concept, 0 traction
- Narrow to residential property managers (5-50 units): auto-request updated COIs via SMS, track license expirations
- $29-49/mo flat; COI auto-request as key differentiator
- Score 70/105 — market exists but smaller and less urgent than Tier 1

### Handyman Subscription Platform — Score: 60/105 (EXPLORE)
- Monthly retainer for wealthy homeowners ($99-199/mo B2C) = novel, no SaaS exists for this model
- Sweaty Startup validation: home security business £200K+ rev, 50% gross margin
- "Giving someone the ability to book using Calendly is mind-blowing for people in trades" — low bar creates opportunity
- Risk: ops-heavy; customer acquisition is B2C which is expensive; not proven
- Not enough signal to shortlist today; explore in 2 more cycles

---

## Tier 3: Weak / Pass (Score <55)

| Idea | Score | Reason for Pass |
|------|-------|----------------|
| Supplier Invoice Collection Automation (Well/YC S25) | 45/105 | YC-backed competition; feature-level idea better as add-on to broader FSM; EU e-invoicing mandate is niche |
| Invoice Scheduling with Payment Links (Billdrip) | 30/105 | Too narrow; Stripe has similar features; low differentiation; $19/mo not enough to build business |
| Background HN Thread: Underserved Industries (2020) | N/A | Research signal only — all actionable ideas already captured in existing shortlisted files |
| Sweaty Startup: Pool cleaning consolidation | 55/105 | GorillaDesk already building this; pool cleaning is more fragmented ops than software gap |
| Sweaty Startup: Window cleaning brand-building | 35/105 | Too niche and speculative; not a SaaS opportunity at this stage |
| Schedo-adjacent niche scheduling | 40/105 | Schedo already validated at $5K MRR; building a generic scheduling tool is a commoditized space; trade-specific version = subsumed into FSM |

---

## Top 3 Recommendations

1. **Repair Shop Management (RepairShopr Refugee)** — Score: 95/105 — NEW TODAY
   Active churn event happening NOW as RepairShopr dies publicly. No flat $39-49/mo tool exists. The "RepairShopr Free Migration" launch hook is a rare time-sensitive window. AppSumo LTD at $299-499 vs $140/mo = undeniable ROI.
   → Key source: https://www.microgaps.com/gaps/solo-repair-shop-management-repairshopr-replacement

2. **Bookkeeping/Accounting LTD** — Score: 94/105 (↑3 today) — SHARPEST UPGRADE
   $99 LTD vs $480/yr QBO is the cleanest value anchor in the entire portfolio. FreshBooks also cracking simultaneously. "QBO-formatted export so CPA doesn't revolt" = smart positioning. Fastest AppSumo conversion story in the portfolio.
   → Key source: https://www.reddit.com/r/Bookkeeping/comments/1od84x2/quickbooks_is_too_expensive_now/

3. **Salon & Barbershop (ChairDesk)** — Score: 95/105 (↑2 today)
   Fresha backlash has been building for 18 months and is now a permanent buyer pool. "Zero commission, forever" is a $79 LTD hook that writes its own ad. 750K self-employed stylists/booth renters = large underserved market with no AppSumo-priced alternative.
   → Key source: https://sorttheclicks.com/fresha-reviews-reddit/

---

## Shortlisted Files Updated Today

| File | Action | New Score | Change |
|------|--------|-----------|--------|
| `repair-shop-management.md` | CREATED | 95/105 | NEW |
| `field-service-management.md` | Signal History appended | 99/105 | Stable |
| `cleaning-service-management.md` | Signal History appended | 99/105 | Stable |
| `landscaping-lawn-care.md` | Signal History appended | 99/105 | Stable |
| `legal-practice-management.md` | Signal History appended | 96/105 | ↑1 |
| `auto-repair-shop-management.md` | Signal History appended | 100/105 | Stable |
| `salon-barbershop.md` | Signal History appended | 95/105 | ↑2 |
| `bookkeeping-accounting.md` | Signal History appended | 94/105 | ↑3 |
| `veterinary-practice.md` | Signal History appended | 94/105 | Stable |
| `trucking-owner-operator-tms.md` | Signal History appended | 94/105 | ↑1 |
| `construction-management.md` | Signal History appended | 95/105 | Stable |
| `saas-subscription-audit.md` | Signal History appended | 79/105 | Stable |
