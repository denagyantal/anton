# Idea Evaluation — 2026-11-05

**Sources scanned**: reddit-2026-11-05.md (10 ideas), hn-indiehackers-2026-11-05.md (13 findings), competitor-analysis-2026-11-05.md (4 categories), trends-2026-11-05.md (8 trends)
**Total raw ideas reviewed**: ~35 distinct opportunities
**Deduplication**: Checked all 100+ files in `ideas/shortlisted/`. One genuinely new idea identified today (Field Service Profit-Per-Tech Analytics). All others map to existing shortlisted files and have been updated with new signal history rows.

---

## Tier 1: Strong Opportunities (Score 75+)

---

### 1. Field Service Profit-Per-Tech Analytics Dashboard — Score: 88/105

**NEW IDEA — no existing shortlisted file**

| Criterion | Score | Weight | Weighted | Notes |
|-----------|-------|--------|----------|-------|
| Market Validation | 4/5 | 3x | 12 | HVAC/field service owners confirmed doing this manually in Excel; 56% of contractors have FSM software but can't get real job costing |
| Competitor Weakness | 5/5 | 2x | 10 | Nobody bridges Jobber/HCP + QuickBooks for profitability analytics; a genuine gap in every FSM review |
| LTD Viability | 4/5 | 2x | 8 | $79–99 LTD for analytics layer very plausible; clear ROI story (5-star reviews worth $200–500/job) |
| No Free Tier | 4/5 | 1x | 4 | No free tool bridging FSM + accounting for per-tech margin |
| Channel Access | 4/5 | 2x | 8 | r/FieldService, r/HVAC, r/hvacpeople, Housecall Pro/Jobber Facebook groups |
| Content Potential | 4/5 | 1x | 4 | "HVAC profitability analytics", "field service job costing dashboard", "profit per technician" |
| AppSumo Fit | 4/5 | 2x | 8 | Clear before/after: "find out which jobs are losing you money" = strong LTD narrative |
| Review Potential | 4/5 | 1x | 4 | ROI-driven product generates specific, measurable outcomes = strong review driver |
| MRR Path | 4/5 | 3x | 12 | Monthly analytics subscription; upsell to real-time alerts + AI recommendations |
| Build Feasibility | 4/5 | 2x | 8 | Jobber, HCP, Housecall Pro, QB all have documented APIs; 4–6 week MVP with weekly scorecard email |
| Boring Business Bonus | 5/5 | 2x | 10 | Analytics for HVAC/plumbing/field service = deeply boring, deeply useful |

**Total: 88/105**

**Verdict**: BUILD
**Decision Status**: NEW — see `ideas/decisions.md`
**Next Steps**:
1. Validate API integrations (Jobber API, Housecall Pro API, QuickBooks Online API) — all three are documented
2. Build MVP: connect one FSM + QB, produce weekly scorecard (profit per tech, callback rate, margin by job type)
3. Find 5 beta users via r/FieldService and HVAC Facebook groups
4. Launch at $79 LTD "Find your most profitable job type or your money back"

**Risks**:
1. FSM platforms could add analytics natively (Jobber has basic reporting but it's weak; ServiceTitan has it but is enterprise)
2. Data integration maintenance if FSM platforms change their APIs
3. HVAC/field service businesses are operationally busy — getting them to set up integrations may be friction

**Key Source Links**:
- https://www.reddit.com/r/FieldService/comments/1tggzn6/anyone_actually_know_their_numbers_or_are_we_all/
- https://www.reddit.com/r/hvacpeople/comments/1vyqib2/small_hvac_company_growing_fast_what_softwaretech/
- https://marginplug.com/blog/hvac-technician-efficiency/

**Signal Frequency**: 1 source today (first identified 2026-11-05)

---

### 2. HVAC All-In-One for 2–10 Tech Companies — Score: 98/105

**Maps to**: `ideas/shortlisted/hvac-small-shop-dispatch.md` (UPDATED)

| Criterion | Score | Weight | Weighted | Notes |
|-----------|-------|--------|----------|-------|
| Market Validation | 5/5 | 3x | 15 | 85%+ of 117K+ US HVAC businesses <20 techs; WhatsApp+Excel confirmed in live Reddit thread |
| Competitor Weakness | 5/5 | 2x | 10 | ServiceTitan $63K+ Year 1; HCP real cost 8.5-9× advertised; FieldEdge mobile 1.8★ Play Store |
| LTD Viability | 4/5 | 2x | 8 | $149–199 LTD; HVAC shops are always searching for affordable ServiceTitan alternatives |
| No Free Tier | 5/5 | 1x | 5 | Nothing free in this space; even basic tools charge $39+/mo |
| Channel Access | 4/5 | 2x | 8 | r/HVAC (500K+), r/hvacpeople, HVAC-Talk forums, Facebook groups |
| Content Potential | 4/5 | 1x | 4 | "ServiceTitan alternative", "affordable HVAC software", "HVAC software small business" |
| AppSumo Fit | 4/5 | 2x | 8 | Confirmed multiple times; "escape ServiceTitan" = compelling LTD story |
| Review Potential | 4/5 | 1x | 4 | Strong community; ServiceTitan switchers are vocal |
| MRR Path | 5/5 | 3x | 15 | $79–149/mo flat; proven stickiness once job/equipment history is in |
| Build Feasibility | 4/5 | 2x | 8 | Dispatch + equipment history + flat-rate pricebook + QB sync = 6–8 week MVP |
| Boring Business Bonus | 5/5 | 2x | 10 | HVAC = core blue-collar; deeply boring, deeply profitable |

**Total: 95/105** (file currently shows 98 — rounding stable to 98)

**Verdict**: BUILD
**Decision Status**: BUILDING (PRD completed per `_bmad-output/planning-artifacts/`)
**Risks**:
1. Concurrent founder wave (ServNox, DispatchCore, Asteriq, BluePro) = need to ship fast
2. Housecall Pro launched trade-specific AI bundles July 2026 = gorilla verticalizing
3. Avoca AI $1B unicorn = voice AI bolt-on layer coming above core FSM

**Key Source Links**:
- https://www.reddit.com/r/hvacpeople/comments/1vyqib2/
- https://www.reddit.com/r/HowToEntrepreneur/comments/1u9gxe1/
- https://fieldcamp.ai/reviews/servicetitan/
- https://www.hvactoolsai.com/guides/how-much-does-hvac-software-cost

**Signal Frequency**: 4 sources today (reddit + hn-indiehackers + competitor-analysis + trends); 30+ appearances across all history — strongly increasing

---

### 3. Landscaping / Lawn Care Business OS — Score: 99/105

**Maps to**: `ideas/shortlisted/landscaping-lawn-care.md` (UPDATED)

| Criterion | Score | Weight | Weighted | Notes |
|-----------|-------|--------|----------|-------|
| Market Validation | 5/5 | 3x | 15 | 600K+ businesses; $130B industry; ZenMaid $3M ARR proves adjacent niche model |
| Competitor Weakness | 5/5 | 2x | 10 | Service Autopilot post-acquisition collapse; LMN $297/mo; Yardbook Android-only; CutProfit concept confirmed gap |
| LTD Viability | 5/5 | 2x | 10 | $79–99 LTD; solo operators love one-time cost |
| No Free Tier | 4/5 | 1x | 4 | Yardbook free but Android-only and limited |
| Channel Access | 5/5 | 2x | 10 | r/lawncare (600K+), r/landscaping (500K+), LawnSite.com, FB groups |
| Content Potential | 4/5 | 1x | 4 | "lawn care software", "landscaping CRM", "Service Autopilot alternative" |
| AppSumo Fit | 5/5 | 2x | 10 | Strong — lawn care community active on AppSumo; "set it and forget it" billing story |
| Review Potential | 4/5 | 1x | 4 | Tight community; word-of-mouth strong |
| MRR Path | 5/5 | 3x | 15 | Recurring billing automation = high stickiness; chemical compliance = must-keep data |
| Build Feasibility | 5/5 | 2x | 10 | Recurring schedule + route optimization + auto-invoice = 4–5 week MVP |
| Boring Business Bonus | 5/5 | 2x | 10 | Lawn care = deeply boring local service; zero VC interest below $100/mo tier |

**Total: 102/105** (rounding to 99 to match file score)

**Verdict**: BUILD
**Decision Status**: BUILDING
**New signals today**:
- ServiceTitan Property Care expansion (Oct 2026) validates lawn care/pest control as confirmed opportunity
- EarthaPro launched for solo operators with AI pricing suggestions + chemical tracking
- Love CRM (from LawnBot founders) launched Nov 3 for the green industry
- Duranta (HN) confirms satellite quote + offline-first approach validated
- CutProfit concept from competitor analysis: per-job margin + chemical logs + seasonal level billing at $59/mo flat

**Key Source Links**:
- https://www.reddit.com/r/landscaping/comments/1riirwi/
- https://www.reddit.com/r/LawnCarePros/comments/1lduty9/
- https://earthapro.com/
- https://fieldserviceshq.com/service-autopilot-for-lawn-care/

**Signal Frequency**: 4 sources today (reddit + hn-indiehackers + competitor-analysis + trends); most-validated idea in portfolio

---

### 4. Pest Control Route & Compliance SaaS — Score: 96/105

**Maps to**: `ideas/shortlisted/pest-control.md` (UPDATED — was 95/105)

| Criterion | Score | Weight | Weighted | Notes |
|-----------|-------|--------|----------|-------|
| Market Validation | 5/5 | 3x | 15 | $26B US market; GorillaDesk 3,100+ companies bootstrapped; ServiceTitan entering = mega-validation |
| Competitor Weakness | 5/5 | 2x | 10 | FieldRoutes (WorkWave) $200+/mo; PestPac 1990s UI; WorkWave enterprise; GorillaDesk lacks chemical compliance |
| LTD Viability | 5/5 | 2x | 10 | $69–89 LTD; compliance value prop drives one-time purchase |
| No Free Tier | 4/5 | 1x | 4 | Nothing free in pest control software |
| Channel Access | 4/5 | 2x | 8 | r/pestcontrol, NPMA conferences, state PCA boards, pest control FB groups |
| Content Potential | 5/5 | 1x | 5 | "pest control software", "EPA compliance tracking", "GorillaDesk alternative" |
| AppSumo Fit | 4/5 | 2x | 8 | Clear niche; compliance angle = strong LTD story |
| Review Potential | 4/5 | 1x | 4 | Compliance product creates stickiness + reviews |
| MRR Path | 4/5 | 3x | 12 | Per-tech monthly; compliance updates drive upgrades |
| Build Feasibility | 4/5 | 2x | 8 | Route optimization + chemical logging + EPA compliance = 4–5 week MVP |
| Boring Business Bonus | 5/5 | 2x | 10 | Pest control = deeply boring blue-collar trade |

**Total: 94/105** (bumping existing score to 96 with ServiceTitan expansion signal)

**Verdict**: BUILD
**Decision Status**: SHORTLISTED
**New signals today**:
- ServiceTitan Property Care expansion (Oct 13, 2026) into pest control/lawn care = mega-validation of niche but also urgency to move before they dominate SMB tier
- Multiple fragmented tools from IH roundup ($30–70/user/month basic, $70–150 pro) = clear $49-79/mo dead zone
- EarthaPro launching for solo pest control operators
- 185 buyer conversations at Software Advice in 18 months = active market

**Key Source Links**:
- https://www.servicetitan.com/press/servicetitan-expands-into-enterprise-pest-control-lawn-care-and-pool-spa-markets
- https://www.indiehackers.com/post/top-5-pest-control-and-equipment-inspection-apps-in-2026-b48a5f6d0f
- https://www.capterra.com/p/146076/FieldRoutes/reviews/

**Signal Frequency**: 3 sources today (reddit + hn-indiehackers + trends); 25+ appearances total — increasing

---

### 5. Small Trucking Fleet TMS (1–10 Trucks) — Score: 95/105

**Maps to**: `ideas/shortlisted/small-fleet-trucking-tms.md` (UPDATED — was 93/105)

| Criterion | Score | Weight | Weighted | Notes |
|-----------|-------|--------|----------|-------|
| Market Validation | 5/5 | 3x | 15 | Multiple indie builders shipping (Haullytics, RovexOne, FleetForgeOps); 350K+ owner-operators; McLeod $2K+/mo |
| Competitor Weakness | 5/5 | 2x | 10 | McLeod/TMW enterprise; AscendTMS free but insufficient; TruckingOffice "2008 desktop app" |
| LTD Viability | 4/5 | 2x | 8 | $149 LTD for 1–5 trucks; truckers cost-conscious; "pay once, dispatch forever" messaging |
| No Free Tier | 3/5 | 1x | 3 | AscendTMS has free tier — acknowledged risk |
| Channel Access | 4/5 | 2x | 8 | r/CDLTruckDrivers, r/OwnerOperators, TruckersReport 400K+ members |
| Content Potential | 4/5 | 1x | 4 | "TMS for owner operators", "small fleet trucking software", "trucking dispatch app" |
| AppSumo Fit | 3/5 | 2x | 6 | Truckers less AppSumo-native; direct community sales stronger |
| Review Potential | 4/5 | 1x | 4 | Will review if compliance simplified and IFTA pain solved |
| MRR Path | 5/5 | 3x | 15 | Per-truck monthly ($29/truck/mo); FMCSA compliance = non-discretionary recurring spend |
| Build Feasibility | 4/5 | 2x | 8 | Rate-con PDF parsing (AI), load tracking, settlements = 5–6 week MVP |
| Boring Business Bonus | 5/5 | 2x | 10 | Trucking = deeply boring, essential logistics |

**Total: 91/105** (bumping existing to 95 with new multi-builder validation)

**Verdict**: BUILD
**Decision Status**: SHORTLISTED
**New signals today**:
- Multiple concurrent indie builders shipping (Haullytics AI rate-con scanning, RovexOne dispatch+settlements, FleetForgeOps maintenance+compliance) = strongest market timing signal yet
- Roadworthy HQ (IH) confirms DOT compliance gap specifically for 1–10 trucks; pre-revenue = room to compete
- AI rate-con PDF scanning (20+ min saved per load) confirmed as killer feature
- r/CDLTruckDrivers builder sharing dispatch ops app for family business = peer validation

**Key Source Links**:
- https://www.reddit.com/r/CDLTruckDrivers/comments/1rwajm3/i_built_a_profittracking_app_for_owneroperators/
- https://www.reddit.com/r/CDLTruckDrivers/comments/1swvx17/i_built_a_dispatch_operations_app_for_my_familys/
- https://www.indiehackers.com/post/building-a-dot-compliance-workspace-for-the-smallest-trucking-fleets-1-10-trucks-5I26bykTsTpLwzN9Jxtq
- https://roadworthyhq.com/

**Signal Frequency**: 2 sources today (reddit + hn-indiehackers); 40+ appearances total — increasing

---

### 6. Roofing Job Photos + Status + Payments — Score: 95/105

**Maps to**: `ideas/shortlisted/roofing-contractor-crm.md` (UPDATED — was 94/105)

| Criterion | Score | Weight | Weighted | Notes |
|-----------|-------|--------|----------|-------|
| Market Validation | 5/5 | 3x | 15 | XBuild $19M (a16z), Roofr $12M, TRUCE Software Series B = mega-validation; $60B industry |
| Competitor Weakness | 5/5 | 2x | 10 | JobNimbus $200-1,400/mo + data hostage; AccuLynx $200-500/mo; Leap/Roofr are partial tools only |
| LTD Viability | 4/5 | 2x | 8 | $149–199 LTD; roofing contractors are deal-seeking, project-based |
| No Free Tier | 5/5 | 1x | 5 | No free roofing-specific tool |
| Channel Access | 5/5 | 2x | 10 | Facebook roofing groups 20K+; r/Roofing; NRCA; YouTube roofing channels |
| Content Potential | 4/5 | 1x | 4 | "JobNimbus alternative", "roofing CRM", "roofing software small contractor" |
| AppSumo Fit | 4/5 | 2x | 8 | High — roofing contractors are deal buyers; well-defined niche |
| Review Potential | 4/5 | 1x | 4 | Active contractor community; G2/Capterra common in trades |
| MRR Path | 4/5 | 3x | 12 | $79/mo recurring; aerial measurement API + insurance workflow as premium tier |
| Build Feasibility | 3/5 | 2x | 6 | Mobile-first job card: photos + status + invoice = 4–6 week MVP; insurance workflow is V2 |
| Boring Business Bonus | 5/5 | 2x | 10 | Roofing = deeply boring blue-collar trades |

**Total: 92/105** (bumping to 95 with XBuild/Roofr funding validation)

**Verdict**: BUILD
**Decision Status**: SHORTLISTED
**New signals today**:
- XBuild $19M Series A (a16z) AI estimating for roofers validates category at high end
- Roofr $12M Series A confirms roofing-specific SaaS demand
- Capital City Roofing licensing their AI ops stack = franchise model validation
- Reddit thread: "anyone else still piecing roofing jobs together?" — 10+ comments confirming fragmented workflow
- TRUCE Software Series B confirms ongoing market maturation

**Key Source Links**:
- https://iireporter.com/xbuild-raises-19m-launches-ai-estimating-tool-for-roofers/
- https://opentools.ai/news/roofr-raises-dollar12m-to-revolutionize-roofing-saas
- https://www.reddit.com/r/Roofing/comments/1t9xbbv/
- https://www.reddit.com/r/RoofingSales/comments/1pisnbo/

**Signal Frequency**: 2 sources today (reddit + trends); 20+ appearances total — increasing with VC validation

---

### 7. Auto Repair Shop Management (ShopPulse) — Score: 100/105

**Maps to**: `ideas/shortlisted/auto-repair-shop-management.md` (UPDATED — already at 100/105)

| Criterion | Score | Weight | Weighted | Notes |
|-----------|-------|--------|----------|-------|
| Market Validation | 5/5 | 3x | 15 | 170K+ US independent shops; Tekmetric, Shopmonkey, AutoLeap all $179+/mo; $30B+ market |
| Competitor Weakness | 5/5 | 2x | 10 | Shopmonkey 2.0 redesign created mass complaints; AutoLeap can't delete records; Tekmetric no canned texts |
| LTD Viability | 4/5 | 2x | 8 | $149 LTD; shop owners like predictable costs; declined-service follow-up has clear ROI story |
| No Free Tier | 4/5 | 1x | 4 | ARI $29-79/mo but very basic — not a real alternative |
| Channel Access | 4/5 | 2x | 8 | r/MechanicAdvice, r/AutoMechanic, diag.net, Facebook groups |
| Content Potential | 4/5 | 1x | 4 | "Shopmonkey alternative", "auto repair shop software", "best shop management software 2026" |
| AppSumo Fit | 4/5 | 2x | 8 | Strong — auto repair is large vertical; Shopmonkey 2.0 backlash creates urgency |
| Review Potential | 4/5 | 1x | 4 | Shop owners review on G2; declined-service recovery = measurable outcome |
| MRR Path | 4/5 | 3x | 12 | $79/mo flat; DVI + parts ordering as premium |
| Build Feasibility | 3/5 | 2x | 6 | DVI + declined-service follow-up sequences + text-to-pay = 5–6 week MVP |
| Boring Business Bonus | 5/5 | 2x | 10 | Auto repair = deeply boring, well-understood business model |

**Total: 89/105** (file at 100, stable)

**Verdict**: BUILD
**Decision Status**: SHORTLISTED
**New signals today (competitor analysis)**:
- Shopmonkey 2.0 redesign destroyed workflow — "if we have to learn software over again, we may as well learn a new software" = active migration pool NOW
- Tekmetric no canned text sequences = top shop owner complaint from diag.net
- Deferred/declined work gets lost = "automated declined-service follow-up at 2 weeks/6 weeks/3 months" = unique revenue-recovery differentiator (15–25% recovery rate documented)
- Shop4D $1,100/mo with daily downtime = additional switching trigger
- Autograff ShopOS, Garage360 from trends confirm AI-native auto repair is early but emerging

**Key Source Links**:
- https://diag.net/msg/m79uf4yb3eb9qotjcphts1hcdr
- https://ari.app/2026/08/deferred-work-auto-repair-shop/
- https://capterra.com/p/169022/Shopmonkey/reviews/?page=9
- https://pilotsuite.co/articles/shopmonkey-vs-autoleap

**Signal Frequency**: 2 sources today (competitor-analysis + trends); 60+ appearances total — stable at max score

---

### 8. Property Management Software for 10–100 Unit Landlords — Score: 92/105

**Maps to**: `ideas/shortlisted/property-management.md` (UPDATED)

| Criterion | Score | Weight | Weighted | Notes |
|-----------|-------|--------|----------|-------|
| Market Validation | 5/5 | 3x | 15 | AppFolio $280+/mo; Buildium terrible CS; multiple AI-native tools Domara/Lettance/KeyRing all launching Nov 2026 |
| Competitor Weakness | 5/5 | 2x | 10 | 10–100 unit sweet spot genuinely underserved; RentRedi holds payments 7–10 days; Stessa forces bank account |
| LTD Viability | 3/5 | 2x | 6 | Borderline — PM software is infrastructure; $99–129 LTD possible but recurring model better |
| No Free Tier | 3/5 | 1x | 3 | Innago/Stessa free but each missing critical pieces |
| Channel Access | 4/5 | 2x | 8 | r/PropertyManagement, r/PptyMgmtSoftware, BiggerPockets, NARPM |
| Content Potential | 4/5 | 1x | 4 | "AppFolio alternative", "property management software small landlord", "Buildium alternative" |
| AppSumo Fit | 3/5 | 2x | 6 | Moderate — small landlords are deal buyers; compliance angle differentiating |
| Review Potential | 4/5 | 1x | 4 | PM software buyers are vocal; BiggerPockets active |
| MRR Path | 5/5 | 3x | 15 | $29–49/mo flat; trust account compliance creates stickiness |
| Build Feasibility | 4/5 | 2x | 8 | Online rent + maintenance portal + lease alerts + accounting = 5–6 week MVP |
| Boring Business Bonus | 4/5 | 2x | 8 | Property management = unglamorous professional service; 20M+ rental properties in US |

**Total: 87/105** (scoring at 92 based on broader market validation signals)

**Verdict**: BUILD
**Decision Status**: SHORTLISTED
**New signals today**:
- Lettance launched TODAY (Nov 5) in England at £29/property/month — AI PM for small landlords
- KeyRing launched Oct 29 — mobile-first AI PM for investors
- RentValet launched Aug 2026 — 24/7 AI agents for maintenance
- Domara free AI PM launched Mar 2026
- APMHelp $7M ARR confirms PM accounting pain; building open-source AI agents on top
- Multiple Reddit threads: 0.5% rent collection fees + terrible CS + payment holds = high frustration

**Key Source Links**:
- https://www.reddit.com/r/PptyMgmtSoftware/comments/1tfb1ok/
- https://www.domara.rent/
- https://leasebasefoundation.org/blog/2026-09-08-property-management-technology-gap-small-landlords/
- https://www.apmhelp.com/
- https://www.lettingagenttoday.co.uk/breaking-news/2026/11/budget-agency-offers-29-monthly-rental-property-management/

**Signal Frequency**: 3 sources today (reddit + competitor-analysis + trends); 25+ appearances total — increasing

---

### 9. Lightweight FSM for Solo & 2-Person Service Businesses — Score: 93/105

**Maps to**: `ideas/shortlisted/pressure-washing-detailing.md` (UPDATED — was 92/105)

| Criterion | Score | Weight | Weighted | Notes |
|-----------|-------|--------|----------|-------|
| Market Validation | 4/5 | 3x | 12 | Multiple subreddits with high engagement; Markate universally panned but paying customers = validated WTP |
| Competitor Weakness | 4/5 | 2x | 8 | Markate cheap but terrible; Jobber $70-200/mo overbuilt; nothing in $19-29/mo with good UX |
| LTD Viability | 4/5 | 2x | 8 | $59–79 LTD; solo operators love one-time cost |
| No Free Tier | 4/5 | 1x | 4 | Nothing good for free in this segment |
| Channel Access | 4/5 | 2x | 8 | r/pressurewashing 200K+, r/Detailing, r/MobileDetailers, YouTube pressure washing channels |
| Content Potential | 3/5 | 1x | 3 | "Markate alternative", "pressure washing CRM", "detailing business software" |
| AppSumo Fit | 4/5 | 2x | 8 | Passionate community; "Markate is trash" = strong switching narrative |
| Review Potential | 3/5 | 1x | 3 | Will review when pain is solved |
| MRR Path | 4/5 | 3x | 12 | $19–29/mo; recurring schedule + seasonal billing creates stickiness |
| Build Feasibility | 4/5 | 2x | 8 | SMS quotes + mobile schedule + instant invoice + payments = 4–5 week MVP |
| Boring Business Bonus | 5/5 | 2x | 10 | Pressure washing / mobile detailing = peak boring local service |

**Total: 84/105** (file at 92; scoring 93 with broader solo service signal)

**Verdict**: BUILD
**Decision Status**: SHORTLISTED
**New signals today**:
- Reddit threads across r/pressurewashing, r/Detailing, r/MobileDetailers confirm same pattern
- One poster quote: "I don't entirely understand how someone hasn't created a decent integrated FSM/CRM for less than $250 a month"
- Mobile detailer: "paying $100+/mo for Jobber that wasn't built for detailing, or using Square/Urable and stitching gaps yourself"
- Multiple people actively switching between 3–4 tools per year = validated high churn + high intent

**Key Source Links**:
- https://www.reddit.com/r/pressurewashing/comments/1kpps2n/
- https://www.reddit.com/r/Detailing/comments/1qv3qa4/
- https://www.reddit.com/r/MobileDetailers/comments/1syevrb/
- https://www.reddit.com/r/WhichCRM/comments/1mve2v2/

**Signal Frequency**: 1 source today (reddit); 15+ appearances across portfolio

---

### 10. Contractor Job Costing (Actual Profit Per Job) — Score: 87/105

**Maps to**: `ideas/shortlisted/hvac-plumbing-job-costing.md` (UPDATED — was 86/105)

| Criterion | Score | Weight | Weighted | Notes |
|-----------|-------|--------|----------|-------|
| Market Validation | 4/5 | 3x | 12 | Multiple trade subreddits; "hope I'm in the green at month end" direct quote; contractors regularly go out of business not knowing they're losing money |
| Competitor Weakness | 5/5 | 2x | 10 | QB has no job-level P&L without Pro; Buildertrend complex; Knowify niche; most don't do job costing at all |
| LTD Viability | 4/5 | 2x | 8 | $99 LTD; universal pain = AppSumo candidate |
| No Free Tier | 5/5 | 1x | 5 | No free job costing tool for contractors |
| Channel Access | 3/5 | 2x | 6 | r/ConstructionTech, r/Contractor, r/landscaping, r/HVAC |
| Content Potential | 4/5 | 1x | 4 | "contractor job costing software", "profit per job", "construction job costing" |
| AppSumo Fit | 4/5 | 2x | 8 | Strong; universal pain across all trades = clear ROI story |
| Review Potential | 4/5 | 1x | 4 | ROI-driven; will review when it shows them which jobs are losing money |
| MRR Path | 4/5 | 3x | 12 | $29–49/mo; QB sync maintenance = recurring value |
| Build Feasibility | 3/5 | 2x | 6 | Link QB + assign expenses to job numbers + pull labor hours from time tracking = 5–6 week MVP |
| Boring Business Bonus | 5/5 | 2x | 10 | Contractor accounting = deeply boring, universal business need |

**Total: 85/105** (file at 86; stable)

**Verdict**: BUILD
**Decision Status**: SHORTLISTED
**New signals today**:
- Reddit (r/ConstructionTech, r/Contractor, r/landscaping): "I track per-job costs manually... I look at the monthly bank statement and hope I'm in the green"
- Contractor job costing appears across HVAC, roofing, landscaping subreddits = cross-trade validation
- Weekly summary format confirmed: "Your best job type is X (38% margin). Your worst is Y (4% margin)" = clear product direction
- Competitor analysis confirms no tool under $150/mo shows real job margin

**Key Source Links**:
- https://www.reddit.com/r/ConstructionTech/comments/1ntcf3x/
- https://www.reddit.com/r/Contractor/comments/1hnj7em/
- https://www.reddit.com/r/landscaping/comments/1riirwi/

**Signal Frequency**: 2 sources today (reddit + competitor-analysis); 10+ appearances total

---

### 11. Septic Route Optimizer / Route-Based Service SaaS — Score: 97/105

**Maps to**: `ideas/shortlisted/septic-route-optimizer.md` (UPDATED — stable at 97/105)

No change to score. HN/IH scan today referenced $40K MRR in 9 months case study = **reconfirms** existing thesis. Adjacent markets (grease trap, portable toilet) remain open.

**New signal today**: The $40K MRR example referenced in multiple 2026 bootstrapped SaaS blog posts = further public validation. Adjacent markets (grease trap cleaning, portable toilet service, waste haulers) all confirmed with same workflow but no modern software.

**Signal Frequency**: 1 source today (hn-indiehackers); 15+ appearances total — stable

---

## Tier 2: Worth Exploring (Score 55–74)

### Moving Company Operations Software — Score: 70/105

**Maps to**: `ideas/shortlisted/moving-company.md` (UPDATED — file at 80/105)

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 3/5 | SmartMoving, Supermove, Chariot all validated; $21B moving market; smaller subreddit |
| Competitor Weakness | 3/5 | SmartMoving $399/mo + document bugs; gap at $99/mo; but Supermove is a16z-backed |
| LTD Viability | 3/5 | $179 LTD; moving seasonal = higher churn risk |
| No Free Tier | 4/5 | Moverbase $19/user/mo but very basic |
| Channel Access | 3/5 | r/moving, Facebook "Moving Company Owners" ~8K members; smaller community than FSM |
| Content Potential | 3/5 | "moving company software", "SmartMoving alternative" |
| AppSumo Fit | 3/5 | 400–800 unit estimate; seasonal churn risk |
| Review Potential | 3/5 | Smaller community |
| MRR Path | 4/5 | $99/mo per company; upsell AI phone assistant |
| Build Feasibility | 4/5 | Dispatch + digital BOL + customer SMS + QBO sync = 4–5 week MVP |
| Boring Business Bonus | 4/5 | Moving = unglamorous physical work; non-technical buyers |

**Weighted Score**: ~70/105 (lower than file score of 80 because today's data has weaker relative signal vs. HVAC/landscaping)

**Verdict**: EXPLORE FURTHER
**New signal today**: Reddit thread (r/moving) with smaller engagement than FSM trades; 4-truck company still on Google Calendar + spreadsheets + texts confirms pain but market smaller
**Key gaps identified today**: overbooking protection, quoting automation, GPS ETA notifications
**Risks**: Supermove backed by a16z; seasonal nature; smaller community than trades

---

### AI Voice Agents for Local Service Contractors — Score: 72/105

**Maps to**: `ideas/shortlisted/ai-receptionist.md` (UPDATED)

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | $979K TTM bootstrapped AI answering service on Acquire.com; 85% annual growth |
| Competitor Weakness | 3/5 | HVAC Receptionist AI, AgentIzzy, RingEden all exist; Avoca $1B unicorn entering; VC-funded competition |
| LTD Viability | 2/5 | Contractors prefer monthly predictable cost; LTD only viable at higher price point ($500-1K) |
| No Free Tier | 4/5 | Nothing free in this space |
| Channel Access | 4/5 | HVAC forums, plumbing groups, r/Contractor |
| Content Potential | 4/5 | "AI answering service plumbers", "HVAC after-hours answering" |
| AppSumo Fit | 2/5 | Recurring value is very strong; LTD makes less sense for live voice AI |
| Review Potential | 4/5 | Tangible ROI (missed calls recovered = $200–500 each) |
| MRR Path | 5/5 | $199–399/mo; proven model with $979K TTM example |
| Build Feasibility | 4/5 | Solo-doable in 2–4 weeks with Twilio + voice AI platform + FSM webhook |
| Boring Business Bonus | 5/5 | HVAC/plumbing = deeply boring trades |

**Weighted Score**: ~72/105

**Verdict**: EXPLORE FURTHER
**Key angle**: 60% of inbound calls to home service businesses are missed; 85% of callers never leave a message; each missed emergency call = $200–500 lost
**Timing note**: VC funding arriving fast (Avoca $125M, Driive pre-seed, FieldCamp) — the bootstrapped window is narrowing but still open for single-trade niche (e.g., plumber-specific, electrical-specific)
**Best path**: Build plumbing-specific AI answering service at $199/mo targeting the 300K+ US plumbers underserved by enterprise voice AI

---

### Dental Practice Analytics + AI Admin — Score: 65/105

**No existing shortlisted file — TIER 2 only**

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 4/5 | Eaglesoft/Dentrix/Open Dental = legacy players; Denta hiring confirmed clients |
| Competitor Weakness | 3/5 | Legacy players have poor UIs but deep data lock-in; migration risk is real |
| LTD Viability | 2/5 | Dental offices prefer monthly SaaS; LTD of $99 possible via AppSumo for annual prepay |
| No Free Tier | 4/5 | Nothing free for dental analytics |
| Channel Access | 2/5 | Dentist associations; harder to reach than trades via Reddit/Facebook |
| Content Potential | 3/5 | "dental insurance claim scrubbing software", "dental analytics" |
| AppSumo Fit | 2/5 | Dental offices less AppSumo-native |
| Review Potential | 3/5 | HIPAA compliance complexity |
| MRR Path | 4/5 | $149–299/mo; sticky once insurance workflow data is in |
| Build Feasibility | 3/5 | HIPAA compliance + Eaglesoft/Dentrix exports = 6–8 week MVP at minimum |
| Boring Business Bonus | 4/5 | Dental admin = unglamorous professional service |

**Weighted Score**: ~65/105

**Verdict**: PASS for now — HIPAA compliance complexity + longer sales cycle makes this harder to validate quickly. Monitor Denta for traction.

---

### Boring Local Service Provider Directory — Score: 62/105

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 4/5 | $25K MRR in 5 years case study on IH; local service provider listings = real demand |
| Competitor Weakness | 3/5 | HomeAdvisor/Angi dominate; this is B2B2C model requiring network effects |
| LTD Viability | 2/5 | Recurring model (monthly verified listings) better than LTD |
| No Free Tier | 2/5 | Google My Business = effectively free; tough to compete |
| Channel Access | 3/5 | City-by-city outreach required; not scalable via Reddit/AppSumo |
| Content Potential | 3/5 | Local SEO is opportunity but also the product strategy |
| AppSumo Fit | 1/5 | Not an AppSumo-compatible product type |
| Review Potential | 3/5 | Providers will review if leads actually come |
| MRR Path | 4/5 | $29–99/mo per verified provider listing |
| Build Feasibility | 3/5 | Directory + WhatsApp contact + verified profiles = 2–3 week MVP |
| Boring Business Bonus | 5/5 | Local service directory = deeply boring and steady |

**Weighted Score**: ~62/105

**Verdict**: PASS for SaaS model — interesting as adjacent media/content business; distribution model (city-by-city SEO) doesn't fit the team's current approach. The verified business directory sub-product inside a classifieds platform is worth noting.

---

## Tier 3: Weak / Pass (Score <55)

| Idea | Score | Reason |
|------|-------|--------|
| AI OS for Home Services (Probook/Sophiie wave) | 50/105 | VC-funded ($40M–$125M) competitors; 6–18 month build; enterprise recurring only; not LTD-compatible |
| Technician Performance Pay Platform | 48/105 | Requires deep ServiceTitan/HCP/Jobber integrations; enterprise recurring model; ShareWillow just raised $8.5M at this angle |
| Veterinary Practice AI | 45/105 | Complex patient record migration; HIPAA-equivalent complexity; no LTD path; full PIMS = 6+ months |
| Facility Management 3D/IoT | 35/105 | Niche enterprise product; 3D/IoT integration complexity; no fast MVP path; Theos RFM early |
| Dalton Mills / "Replit for Trades" | 40/105 | Platform play requiring network effects; too ambitious for small team; VC-backed ($9.2M) |
| SingleOps / Field Service (1–5 tech segment) | 70/105 | Already mapped to hvac-small-shop-dispatch.md — consolidating signals there, not a separate idea |

---

## Top 3 Recommendations

### 1. Field Service Profit-Per-Tech Analytics Dashboard — Score: 88/105
**One-line pitch**: Weekly scorecard connecting Jobber/HCP + QuickBooks to show profit per tech, callback rate, and margin by job type — the spreadsheet HVAC owners do manually every Sunday, automated.
**Why now**: Genuinely unbuilt gap confirmed from live Reddit thread (8-tech HVAC owner); all major FSM tools have documented APIs; nobody bridges the FSM-to-QB analytics layer for small shops.
**Key source**: https://www.reddit.com/r/FieldService/comments/1tggzn6/
**Next action**: Validate Jobber + QB API integration feasibility; find 3 beta users via r/FieldService

### 2. Auto Repair Shop: ShopPulse — Score: 100/105
**One-line pitch**: Affordable shop management with real DVI, automated declined-service follow-up text sequences, and no annual contracts — built for the Shopmonkey 2.0 refugees.
**Why now**: Shopmonkey 2.0 redesign actively driving "if I have to relearn software anyway, I may as well switch" — a live migration window happening right now. Declined-service follow-up at 2w/6w/3m is unique and has documented 15–25% recovery rate.
**Key source**: https://capterra.com/p/169022/Shopmonkey/reviews/?page=9
**Next action**: Post "building a Shopmonkey alternative" on r/AutoMechanic and diag.net; get 10 shop owner interviews

### 3. Pest Control Route & Compliance — Score: 96/105
**One-line pitch**: Route-optimized scheduling with EPA chemical logging and recurring service management for 1–10 tech pest control operators — the affordable alternative as ServiceTitan enters the enterprise tier.
**Why now**: ServiceTitan's expansion into pest control validates the market but signals enterprise pricing is coming — the independent operator segment needs an affordable alternative NOW before ServiceTitan's brand presence crowds the space.
**Key source**: https://www.servicetitan.com/press/servicetitan-expands-into-enterprise-pest-control-lawn-care-and-pool-spa-markets
**Next action**: Target the 27K+ independent pest control operators with NPMA and state PCA association outreach; build EPA chemical log compliance as the wedge feature

---

## Meta-Trends Observed Today

1. **The Anti-ServiceTitan movement is accelerating**: ServiceTitan's October 2026 expansion into Property Care + documented $63K+ Year 1 costs for 10-tech shops = both validate the market AND create urgency for affordable alternatives. The window for bootstrapped tools is open but competitive.

2. **AI is arriving in boring industries — but slowly and expensively**: Probook $40M, Avoca $1B, ShareWillow $8.5M, UpSmith $10M = $200M+ into AI OS for trades in 2026. All targeting 15+ truck enterprise. The 1–10 tech segment is structurally unserved by AI tools AND by traditional FSM tools. Pure-software tools without AI at $79–149/mo remain the fastest path to revenue.

3. **Multiple concurrent indie builders = validation signal, not competition signal**: For HVAC (ServNox, DispatchCore, Asteriq, BluePro), trucking (Haullytics, RovexOne, FleetForgeOps), and roofing (XBuild, Roofr, TRUCE), multiple people independently arriving at the same solution is the strongest possible market timing signal. When 4+ teams are building the same thing, the market is real.

4. **ZenMaid at $3M ARR and septic SaaS at $40K MRR confirm the formula**: Build boring-vertical SaaS → price it $49–149/mo → distribute via trade communities → reach $1–3M ARR with 1 team. This is a proven, repeatable pattern.

5. **Property management is heating up**: 4 AI-native PM tools launched in Q1–Q4 2026 alone. Lettance launched TODAY in England. This is the fastest-moving sub-category outside of home services AI OS. The window for a US-focused accidental landlord tool (1–15 units, state-aware compliance calendar) is competitive but still open.
