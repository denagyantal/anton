# Idea Evaluation - 2026-05-31

**Sources**: reddit-2026-05-31 · hn-indiehackers-2026-05-31 · competitor-analysis-2026-05-31 · trends-2026-05-31
**Note**: Reddit direct API was blocked (403) on this date; research conducted via WebSearch across industry review aggregators and vendor comparison sites that directly quote community pain points.

---

## Tier 1: Strong Opportunities (Score 75+)

---

### 1. Micro-Contractor Field Service App / HVAC-Specific FSM — Score: 101/105

**Existing file**: `shortlisted/field-service-management.md`
**Sources today**: reddit, hn-indiehackers, competitor-analysis, trends (4-source confirmation)

| Criterion | Score | Weighted | Notes |
|-----------|-------|----------|-------|
| Market Validation | 5/5 | 15 | ServiceTitan $245–$500/tech/mo; Breezy 80K+ active users; FieldFlow ($5/mo by solo carpenter) independently validates demand |
| Competitor Weakness | 5/5 | 10 | HCP GPS $20/vehicle extra + pricebook $149/mo extra; no tool flat-priced for 1–5 techs; Workiz minimum 3 users |
| LTD Viability | 5/5 | 10 | $79–99 LTD, unlimited techs under 5 — no FSM has done this on AppSumo |
| No Free Tier | 4/5 | 4 | Kickserv $19/mo is too bare; real operators pay |
| Channel Access | 5/5 | 10 | r/HVAC, r/Plumbing, HVAC-Talk, ACCA, trade FB groups |
| Content Potential | 5/5 | 5 | "ServiceTitan alternative small business" = high-volume search term |
| AppSumo Fit | 5/5 | 10 | No FSM has launched on AppSumo; trades are cost-conscious LTD buyers |
| Review Potential | 4/5 | 4 | HVAC/plumbing techs do leave reviews on Capterra/G2 |
| MRR Path | 5/5 | 15 | Operational software = sticky; add AI dispatch, flat-rate pricebook as upsell |
| Build Feasibility | 4/5 | 8 | Core FSM (schedule → dispatch → invoice → pay) is well-defined 4-6 week MVP |
| Boring Business Bonus | 5/5 | 10 | HVAC/plumbing = deeply boring trades |

**Verdict**: BUILD
**Decision Status**: NEW (in pipeline)
**Next Steps**: Prioritize flat-rate pricebook + mobile-first offline PWA + Stripe embedded payments. Target HVAC single-trade first.
**Risks**: (1) Jobber/HCP could add stripped-down solo tier; (2) QuickBooks sync complexity; (3) many competitors entering at $79–149/mo
**Key Source Links**:
- https://cadobook.com/blog/servicetitan-alternatives-for-small-businesses-2026
- https://contractorplus.app/blog/housecall-pro-vs-jobber-vs-servicetitan
- https://fieldcamp.ai/reviews/servicetitan/
- https://news.ycombinator.com/item?id=47272986 (FieldFlow Show HN)
- https://servicetrade.com/products/stella-ai-agents/ (AI-native FSM trend)
**Signal Frequency**: Appears in every raw file, every day — most consistent signal across entire research cycle.

---

### 2. Pest Control Route + Compliance — Score: 97/105

**Existing file**: `shortlisted/pest-control.md`
**Sources today**: hn-indiehackers, trends (2-source)

| Criterion | Score | Weighted | Notes |
|-----------|-------|----------|-------|
| Market Validation | 5/5 | 15 | $29.1B US pest control (2026, 28% 2-yr growth); GorillaDesk 437% YoY bootstrapped; anonymous commenter $2M ARR from solo pest control SaaS |
| Competitor Weakness | 5/5 | 10 | PestPac enterprise only ($300+/mo, 1990s UI); GorillaDesk dispatch-first with no CRM automation; FieldRoutes enterprise pricing + data hostage horror stories |
| LTD Viability | 5/5 | 10 | $79–99 LTD "pass your state audit" = AppSumo pitch confirmed; chemical compliance is non-optional |
| No Free Tier | 4/5 | 4 | Compliance = mandatory purchase |
| Channel Access | 5/5 | 10 | r/pestcontrol, NPMA events, "Pest Control Business Owners" FB group |
| Content Potential | 4/5 | 4 | "pest control compliance software", "EPA chemical log", "GorillaDesk alternative" |
| AppSumo Fit | 5/5 | 10 | "Never fail a state audit" + recurring service = perfect LTD profile |
| Review Potential | 4/5 | 4 | Pest operators review on Capterra; compliance stickiness |
| MRR Path | 5/5 | 15 | Monthly/quarterly routes = recurring MRR; GHS Revision 7 (2026) = live regulatory forcing function |
| Build Feasibility | 4/5 | 8 | Route opt + chemical log + EPA PDF export = 3-4 week MVP |
| Boring Business Bonus | 5/5 | 10 | Pest control = deeply boring |

**Verdict**: BUILD
**Decision Status**: NEW (in pipeline)
**Next Steps**: Chemical application log MVP (EPA reg#, chemical, concentration, date, GPS, applicator license) → add route optimization → add recurring billing → launch at $79 LTD "pass your state audit"
**Risks**: (1) GorillaDesk expanding scope; (2) state-specific compliance variation; (3) GHS Revision 7 adds ongoing update burden
**Key Source Links**:
- https://www.fieldroutes.com/blog/pest-control-industry-trends
- https://www.pestpac.com/blog/pest-control-statistics-industry-trends-to-look-out-for
- https://news.ycombinator.com/item?id=47509571 (448 pts / 183 comments — founder took technician job)
- https://gorilladesk.com/
- https://integrateiq.com/blogs/top-crm-for-lawn-care-pest-control/
**Signal Frequency**: Consistent multi-source signal; HN viral post (448 upvotes) is the highest-engagement single piece of evidence in the entire portfolio.

---

### 3. Lawn Care / Landscaping All-in-One — Score: 100/105

**Existing file**: `shortlisted/landscaping-lawn-care.md`
**Sources today**: reddit, competitor-analysis, trends (3-source)

| Criterion | Score | Weighted | Notes |
|-----------|-------|----------|-------|
| Market Validation | 5/5 | 15 | 600K+ US landscaping businesses; $130B industry; Attentive.ai $30.5M validates AI estimating segment |
| Competitor Weakness | 5/5 | 10 | Service Autopilot post-Xplor: 25% price hike + GPS removed + payment processor lock-in = "single largest switching moment in lawn care software history"; LMN $297–598/mo with 2.7★ crew app; Yardbook Android-only/no iOS |
| LTD Viability | 4/5 | 8 | $69–99 LTD for solo operators; $149–249 for crews — strong fit |
| No Free Tier | 4/5 | 4 | Yardbook's free tier creates adoption friction but significant feature gaps |
| Channel Access | 5/5 | 10 | r/lawncare 918K+, LawnSite.com 1M+, "Lawn Care Business Owners" FB 200K+ |
| Content Potential | 4/5 | 4 | "Service Autopilot alternative", "lawn care software route optimization" |
| AppSumo Fit | 5/5 | 10 | No lawn care software on AppSumo; SA defector rage = conversion motivation |
| Review Potential | 4/5 | 4 | Lawn care operators review on Capterra |
| MRR Path | 5/5 | 15 | Recurring routes = recurring SaaS; seasonal upsell (aeration, overseeding) as in-app prompts |
| Build Feasibility | 3/5 | 6 | Route optimization + iOS/Android + chemical log + recurring billing = complex scope |
| Boring Business Bonus | 5/5 | 10 | Lawn care = deeply boring |

**Verdict**: BUILD
**Decision Status**: NEW (in pipeline)
**Next Steps**: SA defector outreach → route-first scheduling (recurring weekly/biweekly/monthly) → chemical compliance log (owned only by SA, now collapsing) → competitor migration tool
**Risks**: (1) Seasonal revenue; (2) route optimization algorithm quality is a moat; (3) Yardbook free tier creates price anchor
**Key Source Links**:
- https://softwareconnect.com/reviews/service-autopilot/
- https://lawncrewpro.com/software/best-lawn-care-software/
- https://urable.com/2025/02/28/7-common-problems-solved-by-lawn-care-software/
- https://www.workyard.com/compare/lawn-care-scheduling-software
- https://www.softwareadvice.com/field-service/service-autopilot-profile/
**Signal Frequency**: Consistent quad-source signal; Service Autopilot acquisition fallout is the single biggest switching catalyst in any category studied.

---

### 4. Pool Service Chemical Tracking + Route App (Skimmer Competitor) — Score: 88/105

**Existing file**: `shortlisted/pool-service-management.md`
**Sources today**: reddit (1-source)

| Criterion | Score | Weighted | Notes |
|-----------|-------|----------|-------|
| Market Validation | 4/5 | 12 | $1.8B market → $4.2B by 2034; Skimmer 35K+ pool pros validates TAM; "Skimmer alternative" growing search |
| Competitor Weakness | 4/5 | 8 | Skimmer per-customer pricing criticized; Pool Brain battery drain + crashes; generic FSM = zero chemistry features |
| LTD Viability | 4/5 | 8 | $79–99 LTD for solo operators (up to 40 accounts) — replacing $100+/mo Skimmer |
| No Free Tier | 4/5 | 4 | No free pool-specific software |
| Channel Access | 4/5 | 8 | r/pools, "Pool Professionals" FB groups, PHTA events |
| Content Potential | 4/5 | 4 | "Skimmer alternative", "pool service software chemical tracking" |
| AppSumo Fit | 4/5 | 8 | Pool operators are LTD-friendly; rare category on AppSumo |
| Review Potential | 4/5 | 4 | Pool pros review on GetApp/Capterra |
| MRR Path | 4/5 | 12 | Recurring routes → recurring MRR; chemical supply integration as upsell |
| Build Feasibility | 4/5 | 8 | Chemical log + route builder = well-defined scope |
| Boring Business Bonus | 5/5 | 10 | Pool cleaning = deeply boring |

**Verdict**: BUILD
**Decision Status**: NEW (in pipeline)
**Key Source Links**:
- https://www.getskimmer.com/blog/the-best-pool-service-software-complete-guide
- https://dataintelo.com/report/global-pool-service-software-market
- https://www.capterra.com/pool-service-software/

---

### 5. Independent Landlord Software for Small Portfolios (1–20 Units) — Score: 100/105

**Existing file**: `shortlisted/property-management.md`
**Sources today**: reddit, competitor-analysis, trends (3-source)

| Criterion | Score | Weighted | Notes |
|-----------|-------|----------|-------|
| Market Validation | 5/5 | 15 | 18M US landlords; Innago/TurboTenant validate ad-supported free tier; DoorLoop $69/unit AppSumo proves landlord LTD demand |
| Competitor Weakness | 5/5 | 10 | Buildium surprise $400 price hike; Avail 2.4★ Trustpilot; TurboTenant monetizes data/tenant-paid screening; DoorLoop $69/single unit absurd |
| LTD Viability | 5/5 | 10 | $79–129 LTD (up to 20 units) — privacy-first vs ad-supported free tools |
| No Free Tier | 3/5 | 3 | Free tools exist (Innago, TurboTenant) — overcoming free is hard |
| Channel Access | 4/5 | 8 | r/landlord, r/realestateinvesting, BiggerPockets 2M+, local REIA groups |
| Content Potential | 5/5 | 5 | "Innago alternative", "property management small landlord", "landlord software privacy" |
| AppSumo Fit | 4/5 | 8 | Prior PM tools (Landlord Report) performed well; flat-rate LTD fills gap |
| Review Potential | 4/5 | 4 | Landlords review on Trustpilot/G2 |
| MRR Path | 5/5 | 15 | Landlords grow portfolios = natural upsell; tenant screening as recurring revenue at cost |
| Build Feasibility | 4/5 | 8 | Rent collection + maintenance + lease storage + expense tracking = 4–6 week MVP |
| Boring Business Bonus | 4/5 | 8 | Unglamorous professional service |

**Verdict**: BUILD
**Decision Status**: NEW (in pipeline)
**Key Source Links**:
- https://www.baselane.com/resources/15-best-landlord-software-platforms
- https://www.landlordstudio.com/blog/property-management-software-for-small-landlords
- https://www.turbotenant.com/property-management/best-property-management-software-for-small-landlords/
- https://www.capterra.com/p/47428/Buildium-Property-Management-Software/reviews/

---

### 6. HVAC/Plumbing Flat-Rate Pricing Book (Mobile, Under $20/mo) — Score: 91/105

**Existing file**: `shortlisted/hvac-flat-rate-pricebook.md`
**Sources today**: reddit, hn-indiehackers (2-source)

| Criterion | Score | Weighted | Notes |
|-----------|-------|----------|-------|
| Market Validation | 4/5 | 12 | The New Flat Rate $99/tech/mo proves willingness to pay; HCP pricebook locked at $149/mo |
| Competitor Weakness | 4/5 | 8 | Paper binders outdated; TNFR $400+/mo for 3 techs; no standalone mobile app at <$25/mo |
| LTD Viability | 5/5 | 10 | $99–149 LTD = perfect tool-like utility; immediate ROI story (higher ticket size) |
| No Free Tier | 4/5 | 4 | No credible free flat-rate pricing tool |
| Channel Access | 5/5 | 10 | r/HVAC, r/Plumbing, HVAC-Talk, ACCA |
| Content Potential | 4/5 | 4 | "flat rate pricing HVAC app", "plumbing flat rate software" |
| AppSumo Fit | 5/5 | 10 | Tool-like utility = ideal LTD profile; no HVAC pricebook on AppSumo |
| Review Potential | 4/5 | 4 | Trades leave reviews for pricing tools |
| MRR Path | 3/5 | 9 | Tool utility → add FSM features as natural growth path |
| Build Feasibility | 5/5 | 10 | 500+ pre-loaded task library + customer-facing quote view = 2-3 week MVP |
| Boring Business Bonus | 5/5 | 10 | HVAC/plumbing = deeply boring |

**Verdict**: BUILD
**Decision Status**: NEW
**Key Source Links**:
- https://buildops.com/resources/hvac-software-for-small-businesses/
- https://agentzap.ai/blog/hvac-scheduling-software-complete-guide-2025
- https://www.workiz.com/blog/hvac/best-hvac-business-software-comparison/

---

### 7. Owner-Operator Trucking TMS with Bundled IFTA/ELD ($15–25/mo All-In) — Score: 82/105

**Existing file**: `shortlisted/small-carrier-tms.md`
**Sources today**: reddit, competitor-analysis, trends (3-source — ↑4 from 78)

| Criterion | Score | Weighted | Notes |
|-----------|-------|----------|-------|
| Market Validation | 5/5 | 15 | ~350K owner-operators; TruckLogics/TruckingOffice/Rigbooks validate paid market; "TMS for small trucking companies" = high-volume search term with 10+ dedicated articles in 2025 |
| Competitor Weakness | 5/5 | 10 | Rigbooks ($19/mo) missing IFTA + fuel tracking; TruckLogics crashes on mobile; no true all-in-one under $40/mo |
| LTD Viability | 4/5 | 8 | $79 (solo) / $149 (fleet) LTD; truckers love paying once |
| No Free Tier | 4/5 | 4 | Truckers pay for tools that prevent IFTA fines |
| Channel Access | 4/5 | 8 | r/Truckers, r/TruckDrivers, TruckersReport.com, OOIDA forums, DAT Community |
| Content Potential | 4/5 | 4 | "owner operator TMS", "IFTA filing software", "trucking software small fleet" |
| AppSumo Fit | 3/5 | 6 | Niche but passionate; rare AppSumo category = opening |
| Review Potential | 3/5 | 3 | Truckers less likely to write software reviews |
| MRR Path | 5/5 | 15 | IFTA quarterly filing = year-round; compliance software is sticky |
| Build Feasibility | 3/5 | 6 | GPS IFTA mileage + mobile + integrations = significant complexity |
| Boring Business Bonus | 5/5 | 10 | Trucking = deeply boring blue-collar industry |

**Verdict**: BUILD (with caution on build complexity)
**Decision Status**: VALIDATING
**Next Steps**: Validate IFTA accuracy requirement before building; confirm GPS-based state-line detection approach
**Risks**: (1) IFTA GPS tracking requires ELD data partnership (regulatory complexity); (2) TruckLogics/TruckPedia are growing; (3) mobile reliability is table stakes and hard to get right
**Key Source Links**:
- https://truckpedia.io/resources/best-trucking-tms-software-2025-complete-carrier-guide
- https://rockytransportinc.com/blog/trucking-company-tms-software/
- https://fleetcollect.net/blog/best-ifta-software-comparison
- https://www.truckinfo.net/guide/trucking-software
- https://softwareconnect.com/reviews/rigbooks/

---

### 8. Auto Repair Shop Management (DVI + Customer Texting) — Score: 100/105

**Existing file**: `shortlisted/auto-repair-shop-management.md`
**Sources today**: hn-indiehackers, trends (2-source)

| Criterion | Score | Weighted | Notes |
|-----------|-------|----------|-------|
| Market Validation | 5/5 | 15 | ServiceUp $55M Series B at 180%+ YoY revenue growth; 190K+ shops; $115B US market |
| Competitor Weakness | 4/5 | 8 | Mitchell1/AllData desktop-only and dealership-priced; Shopmonkey V2.0 broke UX; ARI $20/mo ultra-basic; dead zone $20–$179/mo |
| LTD Viability | 4/5 | 8 | $299–499 LTD for shop owners; SMS-based DVI customer approval = high perceived value |
| No Free Tier | 4/5 | 4 | ARI near-free but too limited for real shops |
| Channel Access | 4/5 | 8 | Automotive trade FB groups, NAPA AutoCare forums, ASE community |
| Content Potential | 4/5 | 4 | "auto repair shop software", "digital vehicle inspection software", "Mitchell1 alternative" |
| AppSumo Fit | 4/5 | 8 | Shop owners respond to LTD; rare category on AppSumo |
| Review Potential | 4/5 | 4 | Shop owners leave reviews on G2/Capterra |
| MRR Path | 4/5 | 12 | DVI becomes core workflow = sticky; parts ordering as upsell |
| Build Feasibility | 4/5 | 8 | Photo annotation + SMS approval + work order = well-defined scope |
| Boring Business Bonus | 4/5 | 8 | Auto repair = unglamorous professional service |

**Verdict**: BUILD
**Decision Status**: NEW
**Key Source Links**:
- https://siliconangle.com/2025/07/09/vehicle-repair-management-startup-serviceup-raises-55m/
- https://www.wickedfile.com/blogs/wickedfile-the-future-of-auto-repair-shop-software-in-2026/
- https://news.ycombinator.com/item?id=22496129 (HN underserved industries thread)

---

### 9. AI Dispatch / Receptionist for Home Services — Score: 84/105

**Existing file**: `shortlisted/ai-receptionist.md`
**Sources today**: hn-indiehackers, trends (2-source)

| Criterion | Score | Weighted | Notes |
|-----------|-------|----------|-------|
| Market Validation | 4/5 | 12 | Avoca $125M Series B at $1B valuation; AgentZap 2,500+ contractors at $199/mo; 27% of HVAC calls missed |
| Competitor Weakness | 4/5 | 8 | Enterprise solutions (Avoca = $5M+ revenue shops); no self-serve SMB product below $299/mo |
| LTD Viability | 4/5 | 8 | $299–499 LTD with "never miss another call" pitch |
| No Free Tier | 4/5 | 4 | Voice AI costs money to run; pay as you go is the model |
| Channel Access | 4/5 | 8 | r/HVAC, r/sweatystartup, trade FB groups |
| Content Potential | 4/5 | 4 | "AI answering service HVAC", "AI dispatcher for contractors" |
| AppSumo Fit | 4/5 | 8 | "Never miss a plumbing call" = strong AppSumo pitch |
| Review Potential | 4/5 | 4 | Trades operators review ROI-driven tools |
| MRR Path | 4/5 | 12 | AI call answering = ongoing voice costs = natural monthly billing |
| Build Feasibility | 4/5 | 8 | Bland.ai/Retell + Twilio + scheduling API = 3–4 week MVP |
| Boring Business Bonus | 4/5 | 8 | Trades-focused service |

**Verdict**: BUILD
**Decision Status**: NEW (in pipeline)

---

### 10. Tax Data Entry Automation for Independent Tax Preparers — Score: 82/105

**Existing file**: `shortlisted/tax-professional.md`
**Sources today**: reddit (1-source, strong validation)

| Criterion | Score | Weighted | Notes |
|-----------|-------|----------|-------|
| Market Validation | 5/5 | 15 | Juno AI raised $12M + mid-7-figure ARR in 8 months = fastest validation in this research cycle |
| Competitor Weakness | 3/5 | 6 | Juno is the main competitor and growing fast; entering established but growing market |
| LTD Viability | 4/5 | 8 | 50-return bundle for $99 = seasonal LTD model that works for AppSumo |
| No Free Tier | 5/5 | 5 | Tax preparers pay per return — clear unit economics |
| Channel Access | 4/5 | 8 | r/taxpros, r/Bookkeeping, CPA association newsletters |
| Content Potential | 4/5 | 4 | "tax document extraction", "AI tax data entry", "Juno alternative" |
| AppSumo Fit | 3/5 | 6 | Seasonal tool; bundle model fits but limited historical AppSumo presence |
| Review Potential | 4/5 | 4 | CPAs review practice management tools actively |
| MRR Path | 4/5 | 12 | Per-return pricing → annual subscription as firms grow |
| Build Feasibility | 3/5 | 6 | AI OCR for tax documents (1099s, W-2s, K-1s) = meaningful technical complexity |
| Boring Business Bonus | 4/5 | 8 | Independent tax prep = unglamorous professional service |

**Verdict**: BUILD (but validate differentiation vs. Juno)
**Key Source Links**:
- https://news.crunchbase.com/fintech/cpa-founded-ai-tax-return-startup-juno-seed-funding/
- https://karbonhq.com/resources/best-tax-practice-management-software/

---

### 11. Construction Subcontractor Payment & Retention Management — Score: 76/105

**Existing file**: `shortlisted/subcontractor-payment-retention.md`
**Sources today**: hn-indiehackers (1-source)

| Criterion | Score | Weighted | Notes |
|-----------|-------|----------|-------|
| Market Validation | 4/5 | 12 | $273B tied up in unpaid contractor invoices US annually; Ireland/UK company with paying customers validates |
| Competitor Weakness | 4/5 | 8 | Mostly spreadsheets; US market 10x Ireland/UK; AIA G702/703 doc generation manual |
| LTD Viability | 2/5 | 4 | Compliance-heavy; ongoing update burden; monthly SaaS only |
| No Free Tier | 5/5 | 5 | Construction firms pay for compliance tools |
| Channel Access | 3/5 | 6 | Construction industry forums, AGC, ABC trade associations |
| Content Potential | 3/5 | 3 | "subcontractor payment software", "lien waiver tracking" |
| AppSumo Fit | 2/5 | 4 | Complex onboarding; compliance-heavy = poor LTD fit |
| Review Potential | 3/5 | 3 | GC/sub payment tools reviewed less frequently |
| MRR Path | 5/5 | 15 | Project-based with ongoing retention; payment compliance = very sticky |
| Build Feasibility | 3/5 | 6 | AIA doc generation + lien waivers + certified payroll = complex |
| Boring Business Bonus | 5/5 | 10 | Construction payment management = deeply boring |

**Verdict**: EXPLORE FURTHER (strong MRR path, weak LTD/AppSumo fit)
**Key Source Links**:
- https://news.ycombinator.com/item?id=47975571 (Who Is Hiring, May 2026)

---

## Tier 2: Worth Exploring (Score 55–74)

---

### Independent Pharmacy POS/Management Software — Score: 70/105 (NEW)

**No existing shortlisted file.** LTD viability = 1/5 disqualifies AppSumo path. Strong MRR business but build complexity (DEA, e-prescribing, PMP) requires deep domain expertise — fails the "can we build without domain expertise" filter.

| Criterion | Score | Weighted | Notes |
|-----------|-------|----------|-------|
| Market Validation | 5/5 | 15 | PioneerRx $1,200+/mo; ~19K independent pharmacies; complaints visible in forums |
| Competitor Weakness | 4/5 | 8 | Legacy tools (Datascan) dated; PioneerRx expensive |
| LTD Viability | 1/5 | 2 | **Hard no** — drug database updates + DEA compliance = must be subscription |
| No Free Tier | 5/5 | 5 | Pharmacies must pay for compliant software |
| Channel Access | 2/5 | 4 | Pharmacy associations only; not community/Reddit accessible |
| Content Potential | 3/5 | 3 | "independent pharmacy software" |
| AppSumo Fit | 1/5 | 2 | **Disqualified** — compliance updates cannot be LTD |
| Review Potential | 4/5 | 4 | Pharmacists do review on Capterra |
| MRR Path | 5/5 | 15 | Extremely sticky once installed; compliance = lock-in |
| Build Feasibility | 1/5 | 2 | **Disqualified** — DEA regulation, e-prescribing, PMP integration require specialist expertise |
| Boring Business Bonus | 5/5 | 10 | Independent pharmacy = deeply boring |

**Verdict**: PASS for this team (build feasibility + LTD path both fail)
**Key Source Links**: https://datascanpharmacy.com/what-software-do-independent-pharmacies-use/

---

### Restaurant POS (No Contracts, Commission-Free Online Ordering) — Score: 69/105

**Existing file**: `shortlisted/restaurant-operations.md` (UPDATE signal history — see below)

Signal today: Pain is real (restaurant owners hate Toast/Lightspeed lock-in), but Square for Restaurants already does month-to-month at competitive pricing. Online ordering is complex infrastructure. Build feasibility = 2/5. Annual prepay model is better than LTD here. **This idea's moat is eroded by Square's existing no-contract offering.**

**Verdict**: PASS (existing solutions partially address the core complaint)
**Key Source Links**: https://myrestro.io/hidden-costs-of-restaurant-software-what-owners-dont-realize-2026-guide/

---

### Inspec — FF&E Schedule Management for Interior Designers — Score: 62/105 (NEW)

**No existing shortlisted file.** Weak boring score (3/5). Interior design is not a blue-collar trades market. However, 100% Excel-based workflow + only 2 known competitors is genuinely interesting. Score too low for Tier 1.

| Criterion | Score | Weighted | Notes |
|-----------|-------|----------|-------|
| Market Validation | 3/5 | 9 | Interior designers universally use Excel; only 2 known competitors |
| Competitor Weakness | 3/5 | 6 | Thin competitor set but market is small |
| LTD Viability | 3/5 | 6 | $49–99/mo or $199/firm |
| No Free Tier | 4/5 | 4 | Design firms pay for project tools |
| Channel Access | 3/5 | 6 | Houzz Pro, ASID community, interior design FB groups |
| Content Potential | 3/5 | 3 | "FF&E schedule software" — niche but low volume |
| AppSumo Fit | 3/5 | 6 | Design tool community somewhat AppSumo-active |
| Review Potential | 3/5 | 3 | Design firms do review on G2 |
| MRR Path | 3/5 | 9 | Per-project + per-designer seat |
| Build Feasibility | 4/5 | 8 | Well-defined scope; no compliance complexity |
| Boring Business Bonus | 2/5 | 4 | Glamorous professional = wrong end of boring spectrum |

**Verdict**: PASS for primary focus (boring score too low; small market)
**Key Source Links**: https://news.ycombinator.com/item?id=45692353

---

### Wholesale Distribution TUI Replacement — Score: 65/105 (NEW)

**No existing shortlisted file.** Businesses on 30-year-old text-based software are genuinely a captive market, but switching friction is extreme and requires white-glove onboarding. Not LTD-viable. Interesting as a high-ACV MRR business but beyond current team scope.

**Verdict**: PASS (too complex for team; onboarding is the product, not the software)
**Key Source Links**: https://news.ycombinator.com/item?id=45823234

---

### Craft Brewery Inventory + TTB Compliance — Score: 68/105

**Existing file**: `shortlisted/craft-brewery-management.md`
TTB federal compliance reporting is the "must-have" wedge. ~9,778 active craft breweries × $99–199/mo = $10–24M TAM. Niche but passionate. LTD viable at $199/location.

**Verdict**: EXPLORE FURTHER (solid niche; TTB compliance = defensible wedge; small TAM limits upside)

---

### Elder Care / Home Care Agency Management — Score: 72/105

**Existing file**: `shortlisted/home-care-agency-software.md`
EVV compliance is Medicaid-mandated — non-optional purchase. Mon Ami/Aaniie exist but expensive. Build complexity (EVV + Medicaid billing) is high.

**Verdict**: EXPLORE FURTHER (strong MRR path; complex build)

---

### Dental/Vet PMS — AI Communication Add-On — Score: 78/105

**Existing file**: `shortlisted/dental-practice.md`
Dentrix cybersecurity vulnerabilities + Eaglesoft subscription push = switching urgency. $1.66B dental PMS market at 9.54% CAGR. Add-on approach (AI patient communication + recall) = lighter build.

**Verdict**: BUILD (add-on play; see dental-practice.md)

---

### AI Job Costing for Trades — Score: 80/105

**Existing file**: `shortlisted/ai-job-costing-trades.md`
Trades-native job costing (actual vs. estimated per job) = massive gap in all FSM tools. Contractor Foreman at $49/mo validates affordable tier. Strong LTD at $299–499.

**Verdict**: BUILD (see ai-job-costing-trades.md)

---

## Tier 3: Weak / Pass (Score <55)

| Idea | Score | Reason |
|------|-------|--------|
| QuickBooks Alternative for Service Businesses | 55/105 | Boring score 3/5; FreshBooks/Wave/Zoho already exist; extremely crowded market |
| AI-Native Trades FSM (Stella-style) | N/A | Meta-trend, not a standalone product opportunity for small team |
| Embedded Payments for Vertical SaaS | N/A | Meta-trend / strategy layer, not a standalone product |
| 2026 Vertical SaaS Meta-Signal | N/A | Market research signal only; no actionable idea |

---

## Cross-Source Observations

### 1. The Acquisition Fallout Opportunity
Service Autopilot (Xplor), Buildium, and ServiceTitan's move upmarket have all created distinct "refugee audiences" ready to switch. This is the single most actionable GTM insight: **target named defector communities, not cold markets.**

### 2. Compliance = Must-Have Moat
Every top-scoring idea has a compliance layer: chemical logs (pest/lawn), IFTA filing (trucking), flat-rate pricing compliance (HVAC), Schedule E expense tracking (landlords). Compliance features create non-discretionary purchases and data lock-in.

### 3. Flat-Rate Pricing is the Universal Differentiator
Per-user/per-unit pricing is universally despised across all 4 raw sources. Flat-rate = the product positioning. Every product concept should lead with "flat $X/month, unlimited users."

### 4. AppSumo White Space in Boring Verticals
No FSM, no lawn care tool, no pest control software, no pool service tool, no trucking TMS has successfully launched an LTD on AppSumo. This is the #1 distribution opportunity across all 4 categories.

### 5. AI Layer is the Next Wave, Not Yet the Battle
Enterprise AI (ServiceTrade Stella, Simpro Lightning, Avoca $1B) is landing at the top. The self-serve AI layer for 1–5 person shops is still wide open. Build the core FSM first; add AI voice/dispatch as a bolt-on upsell once established.

---

## Top 3 Recommendations

1. **Micro-Contractor Field Service App (HVAC-first)** — Score: 101/105 — The most validated idea in the entire portfolio, confirmed in every daily run. Build now.
   - Key URL: https://cadobook.com/blog/servicetitan-alternatives-for-small-businesses-2026

2. **Pest Control Route + Compliance** — Score: 97/105 — Chemical compliance logs are legally mandated, $29B market, GorillaDesk validates the model, HN viral post (448 upvotes) confirms demand.
   - Key URL: https://news.ycombinator.com/item?id=47509571

3. **Lawn Care / Landscaping All-in-One** — Score: 100/105 — Service Autopilot's post-acquisition collapse is creating tens of thousands of defectors NOW. Best time-to-market opportunity in the portfolio.
   - Key URL: https://softwareconnect.com/reviews/service-autopilot/
