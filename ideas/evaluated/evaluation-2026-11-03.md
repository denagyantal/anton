# Idea Evaluation - 2026-11-03

**Sources**: reddit-2026-11-03, hn-indiehackers-2026-11-03, competitor-analysis-2026-11-03, trends-2026-11-03
**Evaluator**: Idea Evaluator Agent
**Ideas assessed**: 17 distinct concepts (+ 5 existing shortlisted ideas updated)

---

## Deduplication Notes

The following ideas from today's raw files map to **existing shortlisted files** (Signal History updated):
- **Property Management for small landlords** → `property-management.md` (already 100/105, add TurboTenant/TenantCloud consolidation signal)
- **Contractor quoting/estimating/AI takeoff** → `contractor-quoting-estimation.md` (already 100/105, add Bobyard/Biltix/InstaBid signal)
- **Vendor compliance tracking (VendorCheck)** → `vendor-compliance-tracker.md` (88/105, confirmed again via HN)
- **Blue-collar/agentic CRM** → `simple-crm-micro-teams.md` (confirmed via Cohesive YC P2025, Netic $23M Series B)
- **Technician retention/performance pay** → `skilled-trades-workforce.md` (add ShareWillow $8.5M signal)

---

## Tier 1: Strong Opportunities (Score 75+)

### 1. Trades Bookkeeping for QuickBooks Refugees — Score: 101/105

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | QBO doubled from ~$30 to $60-120/mo (2021-2026); Wave paywalled bank feeds (Jan 2024); FreshBooks raised prices; extreme multi-platform complaint volume on r/QuickBooks, r/Bookkeeping, r/smallbusiness |
| Competitor Weakness | 5/5 | No job-costing-native bookkeeping for trades at $15-25/mo; Foundation/Knowify target $5M+ contractors; Zoho Books best alternative but not trades-specific |
| LTD Viability | 5/5 | $59-79 LTD replacing a $60/mo subscription = obvious ROI; "pay once, own it" pitch is the product's headline |
| No Free Tier | 4/5 | Wave nominally free but paywalled; trust destroyed; no viable free alternative |
| Channel Access | 5/5 | r/QuickBooks, r/Bookkeeping, r/HVAC, r/Plumbing, r/Electricians, Facebook "Plumbing Business Owners Network," "Trades Business Success" |
| Content Potential | 5/5 | "QuickBooks alternative for tradespeople," "job costing app for HVAC," "bookkeeping for plumbers" |
| AppSumo Fit | 5/5 | Bookkeeping tools are proven AppSumo bestsellers; Wave betrayal created a live refugee pool |
| Review Potential | 4/5 | Saving $720+/yr = strong incentive to recommend and review |
| MRR Path | 5/5 | $15-25/mo recurring; natural QB replacement; sticky once books are in |
| Build Feasibility | 4/5 | Job card + bank import + invoice + P&L + tax export = 4-6 week MVP |
| Boring Business Bonus | 5/5 | Trades bookkeeping = deeply boring, deeply essential |

**Weighted Total: 101/105**
**Verdict**: BUILD
**Decision Status**: NEW
**Next Steps**: Build mobile-first job-card-centric bookkeeping MVP; bank import + categorize + invoice + P&L + Schedule C export; price at $59 LTD; launch on AppSumo as "the bookkeeping tool built for plumbers, not accountants"
**Risks**: (1) QBO/Wave have mindshare; switching inertia is real; (2) Accounting software requires trust — security and data reliability matter more than price; (3) Zoho Books at $15/mo is a solid competitor once discovered
**Key Source Links**:
- https://www.reddit.com/r/QuickBooks/comments/1qpshqp/i_hate_quickbooks_they_try_to_bleed_you_dry/
- https://www.reddit.com/r/Bookkeeping/comments/1jt94fa/the_price_of_bookkeeping_software_is_nuts/
- https://ecommerce-platforms.com/articles/wave-accounting-review
- https://www.nerdwallet.com/article/small-business/quickbooks-pricing
- https://www.launchadvisor.co/guides/quickbooks-vs-freshbooks-vs-wave-for-operations-home-services-handyman
**Signal Frequency**: 7 Reddit/review sources across 2 raw files (reddit + competitor) — strong multi-platform signal in a single day

---

### 2. Post-Job Follow-Up Automation for Service Businesses — Score: 97/105

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 4/5 | CraftBoop live at $29/mo with early users; ZenMaid $3M/yr proves cleaning SaaS scales; Ops Badger $8K MRR adjacent; multiple HN/IH builder validation signals |
| Competitor Weakness | 5/5 | No dead-simple post-job sequence tool; existing CRMs too complex; CraftBoop is early/unpolished |
| LTD Viability | 5/5 | "Get more Google reviews" = clear ROI; $79-99 LTD; perfect AppSumo impulse buy |
| No Free Tier | 4/5 | No free dedicated post-job automation tool |
| Channel Access | 5/5 | r/sweatystartup, r/smallbusiness, r/landscaping, r/AutoDetailing, Facebook service business groups |
| Content Potential | 4/5 | "automated follow-up for service businesses," "get more Google reviews plumber" |
| AppSumo Fit | 5/5 | Simple concept, clear ROI, "gets you reviews" = AppSumo sales copy writes itself |
| Review Potential | 5/5 | Tool literally generates reviews = strongest possible category; referral loop |
| MRR Path | 4/5 | $29/mo recurring confirmed by CraftBoop's actual pricing |
| Build Feasibility | 5/5 | Email + SMS sequence + Google Review link = 1-2 week MVP |
| Boring Business Bonus | 5/5 | Plumbers, HVAC techs, cleaners, painters — core boring business users |

**Weighted Total: 97/105**
**Verdict**: BUILD
**Decision Status**: NEW
**Next Steps**: Build core: job completion trigger → 5-message automated sequence (thank you, Google review request, check-in, rebooking reminder, referral ask); SMS-first rather than email-only differentiates from CraftBoop; add Google Business Profile integration for automated review link delivery; price at $79 LTD
**Risks**: (1) CraftBoop is already live — need to move fast or differentiate; (2) SMS deliverability compliance (TCPA) adds complexity; (3) Service businesses vary widely in follow-up needs — may need vertical specialization
**Key Source Links**:
- https://www.craftboop.com
- https://www.indiehackers.com/post/craftboop-built-automated-follow-ups-for-service-businesses-just-launched-looking-for-feedback-5aa58e1c39
- https://www.indiehackers.com/post/tech/from-a-cleaning-side-hustle-to-a-3m-yr-saas-for-cleaning-services-suhsqkDZB1zIwRmXxrFm
- https://www.reddit.com/r/sweatystartup/comments/1u9dj4y/a_friend_tried_my_tool_and_realized_hed_been/
**Signal Frequency**: 3 IH sources + multiple subreddits — first-time signal, strong single-day cross-platform hit

---

### 3. Affordable FSM for 5-20 Tech Trades Shops — Score: 95/105

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | Multiple validated builders (Asteriq, DispatchCore, TradeCaddy, ServNox) actively targeting this gap; ServiceTitan terminated Podium integration Sep 2026 creating live churn event; 500K+ HVAC/plumbing/landscaping businesses in this exact size range |
| Competitor Weakness | 5/5 | ServiceTitan $57K-63K/yr + $22-29K cancellation penalty; Housecall Pro add-on creep; Jobber no job costing; per-user pricing punishes growth at every mid-tier tool |
| LTD Viability | 4/5 | $299-499 LTD viable; AppSumo anchor against ServiceTitan's $57K/yr is compelling copy |
| No Free Tier | 4/5 | No free FSM for 5-20 tech shops |
| Channel Access | 5/5 | r/HVAC (92K), r/Plumbing (105K), r/Contractors (65K), r/Electricians (210K), Facebook "HVAC Business Owners" |
| Content Potential | 5/5 | "ServiceTitan alternative," "affordable HVAC software," "Housecall Pro alternative" |
| AppSumo Fit | 4/5 | Contractors are price-sensitive AppSumo shoppers; $57K/yr anchor = compelling copy |
| Review Potential | 4/5 | High pain = high gratitude when solved = reviews |
| MRR Path | 5/5 | $200+/mo flat for 5-20 tech shops = strong MRR; flat pricing is the differentiator |
| Build Feasibility | 3/5 | Dispatch board + GPS + flat-rate pricing book + job costing + QB sync = 8-12 week realistic MVP |
| Boring Business Bonus | 5/5 | HVAC/plumbing/electrical = core of the boring business universe |

**Weighted Total: 95/105**
**Verdict**: BUILD
**Decision Status**: NEW — distinct from contractor-quoting-estimation.md (which is 0-5 person quoting); this is 5-20 tech full FSM
**Next Steps**: Flat-rate pricing FSM with self-serve signup, 14-day free trial; core: dispatch board + GPS, flat-rate pricing book, job costing (materials + labor + callbacks), recurring maintenance contracts, QuickBooks sync; pricing: flat $149-199/mo regardless of tech count; target HVAC first then expand to plumbing/electrical
**Risks**: (1) Complex 8-12 week build — most risky item on this list; (2) Multiple funded competitors (ShareWillow, Dalton Mills, FieldPulse) entering; (3) Sales cycle longer than solo-operator tools
**Key Source Links**:
- https://www.g2.com/products/servicetitan/reviews?qs=pros-and-cons
- https://www.capterra.com/p/150053/ServiceTitan/reviews/
- https://www.reddit.com/r/smallbusiness/comments/1pid38c/solo_founder_building_a_simple_crm_for_small_hvac/
- https://www.reddit.com/r/HowToEntrepreneur/comments/1u9gxe1/what_is_the_best_service_company_software_that_i/
- https://contractortoolstack.com/software/service-fusion/
**Signal Frequency**: 4 sources in a single day (reddit + competitor + trends + HN all mention this category) — highest cross-source signal today

---

### 4. AI Voice Receptionist for Home Services — Score: 95/105

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | Broccoli $52M (Khosla/YC) — 1,500 businesses, 10M conversations, 2.5M appointments; Avoca $1B valuation at $125M raised; ServiceAgent, NextPhone, Pingwin.ai all competing = category PMF confirmed |
| Competitor Weakness | 4/5 | Enterprise tools (Broccoli, Avoca) priced out of <$500K revenue shops; no niche-specific AI agents (septic vocab, Spanish-language) |
| LTD Viability | 4/5 | "Pay once, never miss a call again" pitch = strong; $299-599 LTD viable; ongoing AI costs are a challenge but manageable with call credits model |
| No Free Tier | 4/5 | No free AI answering service at this quality |
| Channel Access | 5/5 | All trades communities + Facebook groups; "AI answering service" SEO has high search volume |
| Content Potential | 5/5 | "AI answering service for HVAC," "never miss a plumbing call," "24/7 AI receptionist for [trade]" |
| AppSumo Fit | 4/5 | "Never miss a customer call" = clear ROI story; trades demographic is AppSumo-friendly |
| Review Potential | 4/5 | High ROI (replacing $300-2K/missed job) = strong review motivation |
| MRR Path | 5/5 | $300-800 MRR/client proven by agency model; natural recurring subscription |
| Build Feasibility | 4/5 | 3-4 weeks with Twilio + LLM; moat is industry-specific training data and FSM integrations |
| Boring Business Bonus | 5/5 | HVAC, plumbing, pest control, garage door = deeply boring |

**Weighted Total: 95/105**
**Verdict**: BUILD
**Decision Status**: NEW
**Next Steps**: Build niche-specific (HVAC or plumbing-first); pre-built call scripts for common call types (emergency dispatch, routine service booking, quote requests); Google Calendar + Stripe deposit integration; name it "RingMate for HVAC" or similar; consider Spanish-language variant as differentiator vs Broccoli/Avoca
**Risks**: (1) Broccoli and Avoca moving down-market as they scale; (2) Ongoing AI inference costs require careful unit economics before LTD; (3) Phone number porting + telecom compliance adds setup friction
**Key Source Links**:
- https://www.accessnewswire.com/newsroom/en/business-and-professional-services/broccoli-raises-52m-led-by-khosla-ventures-to-help-home-services-1243378
- https://www.avoca.ai/
- https://www.indiehackers.com/post/building-a-profitable-ai-voice-saas-agency-300-800-mrr-per-client-frAbgO1yQMfHOFFtY3gE
- https://www.producthunt.com/products/serviceagent
- https://www.retellai.com/blog/best-answering-service-for-hvac-company
**Signal Frequency**: 5+ sources across HN/IH and trends — major new trend category emerging

---

### 5. Auto Detailer All-in-One Platform — Score: 92/105

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 4/5 | r/AutoDetailing 1M+ members; OrbisX $1,500/yr proves serious WTP; QuoteIQ gaining traction in 2026; TradeCaddy builder got immediate positive engagement in r/pressurewashers |
| Competitor Weakness | 4/5 | OrbisX expensive ($1,500/yr); Jobber overkill; QuoteIQ early but only doing quoting; no all-in-one with photos |
| LTD Viability | 5/5 | $79 LTD vs $1,500/yr OrbisX = 19x ROI is the pitch; very strong AppSumo impulse buy |
| No Free Tier | 4/5 | No free all-in-one for detailers with before/after photos |
| Channel Access | 5/5 | r/AutoDetailing (1M+), r/pressurewashing, r/PressureWashingGrowth — highly active niche communities |
| Content Potential | 4/5 | "auto detailing software," "mobile detailer booking app," "OrbisX alternative" |
| AppSumo Fit | 5/5 | Simple concept, clear value, impulse-buy price range, 1M+ enthusiast community |
| Review Potential | 4/5 | Before/after photo documentation = compelling demo = easy reviews |
| MRR Path | 4/5 | $29-49/mo after LTD; detailing businesses grow fast = natural upsell |
| Build Feasibility | 5/5 | Booking + before/after photos + invoice calculator by vehicle type + Stripe = 2-3 weeks |
| Boring Business Bonus | 4/5 | Auto detailing = unglamorous service business; not the most boring but qualifies |

**Weighted Total: 92/105**
**Verdict**: BUILD
**Decision Status**: NEW
**Next Steps**: Mobile-first MVP: vehicle type + service selector → instant online quote → booking confirmation → on-site before photo → invoice + Stripe payment → after photo sent to customer; $79 LTD on AppSumo; differentiate from QuoteIQ with photo-to-invoice-to-payment in one flow; add recurring client/membership management
**Risks**: (1) QuoteIQ is ahead and gaining traction; (2) Detailing businesses are small and may have high churn; (3) OrbisX has brand recognition in the community
**Key Source Links**:
- https://www.reddit.com/r/AutoDetailing/comments/104iims/noob_here_is_there_software_out_there/
- https://www.reddit.com/r/pressurewashers/comments/1w4lxr9/built_a_schedulingquotinginvoicing_tool_after_my/
- https://www.reddit.com/r/PressureWashingGrowth/comments/1s5zt04/best_crm_for_mobile_detailers/
- https://myquoteiq.com/best-app-for-field-service-technicians/
**Signal Frequency**: 4 Reddit sources + HN — new signal, first evaluation

---

### 6. Contractor Permit & Inspection Tracker — Score: 89/105

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 4/5 | 750K licensed contractors in US; r/Construction 800K members; recurring digitalization-gap thread; industry research confirms spreadsheet-based permit tracking for 5-25 employee shops |
| Competitor Weakness | 4/5 | Procore $499+/mo; Buildertrend $499+/mo; PermitFlow targets high-volume services not small GCs; no lightweight $19-29/mo permit-only tool |
| LTD Viability | 5/5 | $59 LTD; single-purpose, obvious recurring value; low-complexity tool |
| No Free Tier | 4/5 | No free permit tracking tool for small contractors |
| Channel Access | 4/5 | r/Construction (800K), r/GeneralContractor, contractor trade associations |
| Content Potential | 4/5 | "contractor permit tracking software," "permit inspection management app," "replace Procore for small GCs" |
| AppSumo Fit | 5/5 | Single-purpose tool with obvious use case = strong AppSumo fit |
| Review Potential | 3/5 | Set-and-forget nature reduces review urgency; but permit expiration prevention = very memorable win |
| MRR Path | 4/5 | $19-29/mo; phase-2 upsell to subcontractor coordination + lien waivers |
| Build Feasibility | 5/5 | Milestone tracking + expiration alerts + Google Calendar integration = 1-2 week MVP |
| Boring Business Bonus | 4/5 | Construction compliance = unglamorous but critical |

**Weighted Total: 89/105**
**Verdict**: BUILD
**Decision Status**: NEW
**Next Steps**: Build: permit milestone tracking, inspection scheduling, expiration alerts at 30/15/7 days, document storage per permit, Google Calendar sync; $59 LTD or $19-29/mo; launch on AppSumo targeting r/Construction and r/GeneralContractor; differentiate with subcontractor "who needs to be on-site for inspection" as phase-2 feature
**Risks**: (1) Set-and-forget tools have low retention unless they prevent a costly miss; (2) Each municipality has different permit workflows — normalization is hard; (3) Could be built as a feature inside larger PM tools
**Key Source Links**:
- https://www.reddit.com/r/Construction/comments/1r5ci82/why_does_digitalization_in_construction_rarely_fit/
- https://www.reddit.com/r/GeneralContractor/comments/1ntdlsf/contractors_what_tools_do_you_actually_use_to_run/
- https://projul.com/blog/best-construction-permit-tracking-software/
**Signal Frequency**: 2 Reddit threads + industry roundup — first-time signal

---

### 7. Pest Control Route & CRM — Score: 85/105

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 4/5 | $27B US pest control industry; ~30K businesses; active r/PestControlIndustry; QuickBooks-for-routing inefficiency confirmed by active shop manager; pest control equipment inspection market at $30-150/user/mo |
| Competitor Weakness | 4/5 | GorillaDesk well-regarded but $100+/mo; PestPac enterprise; Jobber/Housecall Pro not pest-specific; commission-per-stop handled poorly by generic FSM |
| LTD Viability | 4/5 | $79-99 LTD for route-based tool; compliance angle (chemical records) adds urgency |
| No Free Tier | 4/5 | No free purpose-built pest control CRM |
| Channel Access | 4/5 | r/PestControlIndustry, r/pestcontrol, Pest Control Technology forums, National Pest Management Association channels |
| Content Potential | 4/5 | "pest control software alternative," "GorillaDesk alternative," "pest control route optimization" |
| AppSumo Fit | 4/5 | Vertical SaaS with specific community; "GorillaDesk at half the price" is clear copy |
| Review Potential | 3/5 | Route optimization + regulatory compliance = functional tool; reviews when it prevents a missed audit |
| MRR Path | 4/5 | $49-79/mo flat; recurring chemical treatments = sticky recurring revenue |
| Build Feasibility | 4/5 | Route scheduling + service agreements + chemical usage logs + commission calc = 4-6 weeks |
| Boring Business Bonus | 5/5 | Pest control = deeply boring; kills bugs for a living = maximum unglamorous |

**Weighted Total: 85/105**
**Verdict**: BUILD
**Decision Status**: NEW
**Next Steps**: Build: route scheduling with map view, recurring service agreements, chemical usage log (OSHA + state ag dept compliance), commission calculation per stop, customer portal; target "GorillaDesk at half the price"; $49-79/mo flat (not per-tech); chemical compliance records are the moat vs generic FSM tools
**Risks**: (1) GorillaDesk has strong brand in the community; (2) Regulatory compliance (chemical records) adds complexity; (3) Small operators may be too small for SaaS; may need very low entry pricing
**Key Source Links**:
- https://www.reddit.com/r/PestControlIndustry/comments/1r6g1ph/best_crmsoftware_for_medium_sized_business/
- https://www.indiehackers.com/post/top-5-pest-control-and-equipment-inspection-apps-in-2026-b48a5f6d0f
- https://www.reddit.com/r/pestcontrol/comments/zdbg88/i_have_some_questions_regarding_software_be_it_a/
**Signal Frequency**: 2 sources (reddit + HN/IH) — first-time evaluation, dual-source confirmation

---

### 8. Owner-Operator TMS + Fleet GPS/IFTA — Score: 82/105

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 4/5 | 1M+ owner-operators in US; documented mid-market gap in trucking software; Verizon Connect $39K lock-in, Motive D- BBB, Samsara 3-year contracts all documented; high repeat search volume for "TMS for owner operators" |
| Competitor Weakness | 4/5 | TruckingOffice tops out at 5-10 trucks; McLeod/TMW cost $250-300/mo for 5 trucks; no tool combines GPS + IFTA + dispatch + settlements at $49-79/mo |
| LTD Viability | 3/5 | Ongoing GPS/compliance data needs make LTD tricky; $99-149 LTD for solo operators or "3-year prepay at 50% off" angle |
| No Free Tier | 4/5 | No free TMS + GPS + IFTA combo |
| Channel Access | 4/5 | r/Trucking, r/TruckDrivers, DAT Community Forums, TruckersReport.com, Facebook "Owner Operators Network" |
| Content Potential | 4/5 | "TMS for owner operators," "IFTA tracking software," "fleet GPS no contract," "cancel Samsara" |
| AppSumo Fit | 3/5 | Ongoing GPS subscription model is harder for LTD; "starter fleet kit" approach possible |
| Review Potential | 3/5 | Saves 15-20 hrs/week on IFTA = memorable win; but truckers are hard reviewers |
| MRR Path | 5/5 | IFTA quarterly compliance = sticky; cancel-anytime is the pitch vs 3-year contracts |
| Build Feasibility | 3/5 | GPS + IFTA + dispatch + settlements = 8-12 week build; hardware/OBD integration adds complexity |
| Boring Business Bonus | 5/5 | Trucking = deeply boring, deeply unsexy |

**Weighted Total: 82/105**
**Verdict**: EXPLORE FURTHER
**Decision Status**: NEW
**Next Steps**: Validate via 10 owner-operator interviews before building; key questions: (1) Would they pay $49/mo for cancel-anytime GPS+IFTA? (2) OBD dongle vs phone GPS? (3) Do they want load board integration (DAT/Truckstop.com)? Build IFTA calculator as free tool first, then gate behind subscription; LTD at $99-149 for solo operators on AppSumo
**Risks**: (1) Hardware dependency (GPS dongles) creates supply chain and support issues; (2) IFTA calculation has state-specific complexity (Canada, US fuel tax treaties); (3) Samsara and Motive have been burned — brand trust issues for new entrants
**Key Source Links**:
- https://www.datatruck.io/blog/best-tms-for-owner-operators
- https://capterra.com/p/122284/TruckingOffice/reviews/
- https://smallfleethq.com/elds/samsara
- https://fleetrabbit.com/blogs/post/fleet-management-cost-comparison-2026
- https://www.dispatchff.com/blog/fleet-management-systems-small-fleets
**Signal Frequency**: 2 sources (reddit + competitor) — first-time evaluation, dual-source confirmation

---

### 9. MTD-Compliant Bookkeeping for UK Tradespeople — Score: 81/105

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 4/5 | UK Making Tax Digital enforced April 2026 for businesses >£50K income; April 2027 extends to £30-50K; regulatory deadline = guaranteed demand; 34% of small businesses received regulatory penalties in 2026 |
| Competitor Weakness | 4/5 | No MTD-specific product for trades; FreeAgent and QuickBooks are generic; no mobile-first, voice-first MTD option |
| LTD Viability | 4/5 | "Avoid fines" anxiety = strong buying trigger; $99-149 LTD; compliance tools sell themselves |
| No Free Tier | 4/5 | No free MTD-compliant trades bookkeeping |
| Channel Access | 3/5 | UK-specific channels; Facebook "UK Tradespeople Groups," UK trade forums; less familiar territory but accessible |
| Content Potential | 4/5 | "Making Tax Digital for tradesmen UK," "MTD software for sole traders," "MTD bookkeeping for plumbers" |
| AppSumo Fit | 3/5 | UK-focused audience has lower AppSumo reach but is underserved on the platform |
| Review Potential | 3/5 | Compliance tools get reviews when they prevent actual fines |
| MRR Path | 4/5 | Quarterly MTD submissions = sticky recurring; accounting is the stickiest SaaS category |
| Build Feasibility | 4/5 | Digital record-keeping + HMRC MTD API integration + quarterly digital submissions = 3-4 weeks |
| Boring Business Bonus | 5/5 | UK trades bookkeeping = deeply boring, regulatory-forced = maximum unsexy |

**Weighted Total: 81/105**
**Verdict**: BUILD
**Decision Status**: NEW
**Next Steps**: Build HMRC MTD API integration; mobile-first digital record keeping; voice-note expense capture ("I bought fittings for £40" → categorized); quarterly VAT digital submission; focus on self-employed plumbers, electricians, HVAC techs in UK; $99-149 LTD or £9/mo; market as "the easiest MTD software for tradies" — differentiate on mobile + voice
**Risks**: (1) HMRC API integration has regulatory complexity; (2) UK-specific audience limits AppSumo reach; (3) FreeAgent and QuickBooks already MTD-certified — incumbents have head start
**Key Source Links**:
- https://grahamwood.co.uk/making-tax-digital-a-small-business-guide-to-compliance-in-2026/
- https://medium.com/@nexzensoftware/the-small-business-compliance-crunch-why-regulation-is-breaking-smbs-in-2026-and-what-actually-a5eb83f096bd
- https://www.bbsi.com/business-owner-resources/new-laws-regulations-small-business-owners-2026
**Signal Frequency**: 1 source (trends) — new from trends scan, regulatory forcing function = strong signal despite single source

---

### 10. Weather-Based Work Planning for Outdoor Contractors — Score: 78/105

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 2/5 | Prelay just launched (2 HN points, pre-revenue); but the pain is well-documented — outdoor contractors manually check weather for every job site at 4am; if crews aren't notified before 6am, they're paid anyway |
| Competitor Weakness | 4/5 | No tool links weather data to job schedules for trades; phone weather apps are the only current solution |
| LTD Viability | 4/5 | Outdoor contractors, simple recurring pain; $79-99 LTD viable |
| No Free Tier | 4/5 | No free weather-job scheduling tool exists |
| Channel Access | 4/5 | r/landscaping, r/Roofing, r/Construction; seasonal service business communities |
| Content Potential | 4/5 | "weather app for contractors," "landscaping weather scheduling," "when can my crew work outdoor" |
| AppSumo Fit | 4/5 | Simple, clear value, outdoor trades demographic |
| Review Potential | 3/5 | High when it prevents a "paid crew for nothing" day; seasonal use limits review frequency |
| MRR Path | 3/5 | Best as add-on to existing FSM tools; limited standalone platform potential |
| Build Feasibility | 5/5 | Weather API (Tomorrow.io/OpenWeatherMap) + job schedule = 2-3 weeks |
| Boring Business Bonus | 5/5 | Landscaping, roofing, outdoor contracting = deeply boring |

**Weighted Total: 78/105**
**Verdict**: EXPLORE FURTHER
**Decision Status**: NEW
**Next Steps**: Validate the 4am alarm pain with 5 landscape/roofing business owners before building; consider as a feature bolt-on to a larger FSM rather than standalone; if standalone: weather suitability rules per trade activity (62 types = impressive moat) + auto-generated SMS crew notifications; fastest path to market = "Weather Widget for Jobber/Housecall Pro" integration
**Risks**: (1) Prelay already building this — risk of duplication; (2) Standalone viability is questionable (limited feature surface for MRR); (3) Seasonal businesses may have high churn in off-season
**Key Source Links**:
- https://prelay.lwnn.news
- https://news.ycombinator.com/item?id=50341158
**Signal Frequency**: 1 source (HN) — first-time signal, pre-revenue product; concept has merit but needs validation

---

## Tier 2: Worth Exploring (Score 55-74)

### 11. AI-Autonomous Home Services Operations (Rainslice angle) — Score: 72/105

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 3/5 | 3 cleaning companies running on Rainslice; Broccoli $52M confirms adjacent demand |
| Competitor Weakness | 4/5 | No "full autonomy" home services OS at affordable price; enterprise tools need enterprise budgets |
| LTD Viability | 3/5 | Full autonomy = ongoing AI costs; LTD for specific features (call answering + booking) is more viable |
| No Free Tier | 3/5 | Partial alternatives exist |
| Channel Access | 4/5 | All cleaning/HVAC/home service communities |
| Content Potential | 3/5 | "AI for home service businesses," "automate HVAC admin" |
| AppSumo Fit | 3/5 | Full autonomy claim is hard to deliver reliably = AppSumo review risk |
| Review Potential | 3/5 | High if it reliably handles calls |
| MRR Path | 4/5 | Recurring AI subscription; similar to Broccoli's model |
| Build Feasibility | 2/5 | Full autonomy (call handling + dispatch + ads + support) = 3-4 month build minimum |
| Boring Business Bonus | 5/5 | Cleaning, HVAC = deeply boring |

**Weighted Total: 72/105**
**Verdict**: EXPLORE FURTHER — build the "AI front desk" version (inbound calls + booking) rather than full autonomy; simpler scope, more reliable, easier sell
**Risks**: Full autonomy scope is likely overkill; reliability concerns will tank reviews; start with AI call answering as standalone
**Key Source Links**: https://rainslice.ai, https://news.ycombinator.com/item?id=48769010

---

### 12. Technician Retention & Performance Pay Platform — Score: 71/105

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 4/5 | ShareWillow $8.5M raised (Lerer Hippeau), $2M/mo in performance pay Sep 2026; 1.7M trades openings/year through 2035 per Jobs for the Future |
| Competitor Weakness | 3/5 | ShareWillow has first-mover; Connecteam/Homebase horizontal — differentiate on trades-specific pay structures |
| LTD Viability | 3/5 | $199-299 LTD for analytics layer; ongoing payroll tool = subscription makes more sense |
| No Free Tier | 3/5 | Homebase has free tier |
| Channel Access | 3/5 | Trades business owner communities; HVAC contractor Facebook groups |
| Content Potential | 3/5 | "how to retain HVAC technicians," "technician performance pay software" |
| AppSumo Fit | 2/5 | B2B workforce tools — not typical AppSumo demographic |
| Review Potential | 3/5 | If it helps retain techs, high advocacy |
| MRR Path | 4/5 | Per-employee monthly; ShareWillow model proven |
| Build Feasibility | 4/5 | Performance tracking + Jobber/HCP integration = 4-6 weeks |
| Boring Business Bonus | 4/5 | Trades workforce management = unglamorous |

**Weighted Total: 71/105**
**Verdict**: EXPLORE FURTHER
**Risks**: ShareWillow has first-mover with $8.5M; differentiation angle must be "shops without ServiceTitan" (Jobber/Housecall Pro users)
**Key Source Links**: https://alleywatch.com/2026/10/sharewillow-home-field-service-technicians-performance-pay-platform-ai-agents-skilled-trades-ryan-shank/

---

### 13. AI Business Diagnostic for Owner-Operators — Score: 69/105

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 3/5 | Ops Badger $8K MRR with 11 customers validates adjacent concept; one compelling first-user reaction (tree service owner) |
| Competitor Weakness | 3/5 | SCORE free but generic; business coaches $200-500/hr |
| LTD Viability | 3/5 | $99 LTD for a diagnostic report is feasible |
| No Free Tier | 3/5 | SCORE is free but very different quality |
| Channel Access | 3/5 | r/sweatystartup, r/sweatystartups (specialized) |
| Content Potential | 4/5 | "business diagnostic for contractors," "HVAC business health check" |
| AppSumo Fit | 3/5 | Novel concept; could generate buzz but retention is unclear |
| Review Potential | 3/5 | High if it produces actionable 90-day plan |
| MRR Path | 4/5 | Monthly check-ins, coaching upsell, vertical specialization |
| Build Feasibility | 4/5 | AI analysis intake form = 2-3 weeks |
| Boring Business Bonus | 3/5 | Cross-vertical, not specifically boring |

**Weighted Total: 69/105**
**Verdict**: EXPLORE FURTHER — vertical specialization (HVAC-specific, restaurant-specific) would significantly improve score; generic diagnostics have onboarding friction
**Key Source Links**: https://www.reddit.com/r/sweatystartups/comments/1u9dj4y/a_friend_tried_my_tool_and_realized_hed_been/

---

### 14. Dental Front Desk AI (Zirco.ai angle) — Score: 68/105

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 3/5 | 30+ dental practices interviewed; insurance verification pain = documented; $40-50K/year front desk cost |
| Competitor Weakness | 4/5 | Insurance verification (2-3 hrs/day) = most painful; no tool solves both phone answering AND verification |
| LTD Viability | 2/5 | HIPAA compliance complexity + per-practice customization makes LTD extremely tricky |
| No Free Tier | 4/5 | No free dental front desk AI |
| Channel Access | 3/5 | Dental forums (Dentaltown), Dentrix/Open Dental user communities |
| Content Potential | 3/5 | "dental insurance verification software," "dental front desk AI" |
| AppSumo Fit | 2/5 | HIPAA = complex for AppSumo; dental practices not typical AppSumo buyers |
| Review Potential | 3/5 | High-stakes tool = reviews when it saves $40K/year |
| MRR Path | 5/5 | $99-199/mo per practice = strong MRR potential; sticky category |
| Build Feasibility | 2/5 | Playwright scraping 10+ insurance portals, HIPAA compliance, voice AI = very complex |
| Boring Business Bonus | 4/5 | Dental practice management = unglamorous |

**Weighted Total: 68/105**
**Verdict**: EXPLORE FURTHER — insurance verification as standalone wedge at $99-199/mo is the right entry product; full front desk AI is phase-2
**Key Source Links**: https://news.ycombinator.com/item?id=47385090

---

## Tier 3: Weak / Pass (Score <55)

| Idea | Score | Reason for Pass |
|------|-------|-----------------|
| Facilities Management AI (Metcor signal) | 59/105 | Enterprise B2B only; Metcor hiring signal = opportunity for large operators, not indie SaaS; too complex build for too long a sales cycle |
| ZenMaid Companion (cleaning marketing automation) | Subsumed | Rolled into Post-Job Follow-Up Automation (idea #2 above) — same audience, same solution; no reason for standalone product |
| Pest Control Equipment Inspection (standalone) | Subsumed | The inspection checklist/compliance feature should be part of Pest Control Route & CRM (idea #7 above) — not a standalone product at scale |
| InstaBid Solo (standalone quoting) | Maps to existing | Already captured in contractor-quoting-estimation.md (100/105); adds validation signal to existing shortlisted idea |
| WorkPhotos (job photo recording app) | Maps to existing | The before/after photo concept is a feature within auto-detailer-platform.md and contractor-quoting-estimation.md; standalone niche too narrow |

---

## Existing Shortlisted Ideas — Signal Updates (2026-11-03)

The following ideas already in shortlisted/ received new signals today and have been updated:

| File | Previous Score | New Signal |
|------|---------------|------------|
| `property-management.md` | 100/105 | TurboTenant absorbed TenantCloud Aug 2026 (1M+ landlords, live consolidation churn); DoorLoop bugs per competitor analysis; "orphan zone" 5-50 unit landlord confirmed; new accidental landlord framing |
| `contractor-quoting-estimation.md` | 100/105 | Bobyard Oct 2026 AI takeoff-to-submittal; Biltix MEP AI estimating launch; InstaBid Solo IH launch; Documentorium "hundreds of paying users, almost all renewed yearly" reconfirmed; mobile quoting apps wave (WorkQuote, QuoteIQ, FieldCamp) |
| `vendor-compliance-tracker.md` | 88/105 | VendorCheck concept confirmed via HN thread (Ask HN: What Industries Are Underserved by Software?); vendor verification for rental management confirmed as "real paying product category" |
| `simple-crm-micro-teams.md` | 81/95 | Cohesive (YC P2025) confirmed building agentic CRM for blue-collar businesses; Netic $23M Series B (Founders Fund) equipping contractors with AI tools; category crystallizing around blue-collar-specific CRM |
| `skilled-trades-workforce.md` | 78/105 | ShareWillow $8.5M raised (Lerer Hippeau), revenue grew 8x in 18 months, $2M paid through platform in Sep 2026 alone; 1.7M trades openings/year through 2035 confirms macro driver |

---

## Top 3 Recommendations

1. **Trades Bookkeeping for QuickBooks Refugees** — Score: 101/105 — [BUILD]
   The QBO price-doubling cycle (2021→2026), Wave's betrayal, and FreshBooks hikes have created a live, active refugee pool that is right now searching for alternatives. A job-card-centric bookkeeping tool built for trades (job costing, parts tracking, mobile-first) at a $59 LTD is the clearest build → AppSumo pipeline this team has seen. Fastest path to $10K MRR in this batch.
   Key source: https://www.reddit.com/r/QuickBooks/comments/1qpshqp/i_hate_quickbooks_they_try_to_bleed_you_dry/

2. **Post-Job Follow-Up Automation for Service Businesses** — Score: 97/105 — [BUILD]
   CraftBoop has proven people pay $29/mo for this. The build is 1-2 weeks (email + SMS sequences + Google Review link). The ROI story is concrete: "get more 5-star reviews = more customers." Easiest build on this list with one of the highest scores. Ship before CraftBoop grows.
   Key source: https://www.craftboop.com, https://www.indiehackers.com/post/craftboop-built-automated-follow-ups-for-service-businesses-just-launched-looking-for-feedback-5aa58e1c39

3. **Affordable FSM for 5-20 Tech Trades Shops** — Score: 95/105 — [BUILD]
   ServiceTitan's September 2026 Podium integration termination is a live churn event. Multiple independent founders are already validating this gap (Asteriq, DispatchCore, TradeCaddy). Highest revenue per customer of any idea here ($200+/mo). Most complex build (8-12 weeks) but the prize is the largest.
   Key source: https://www.capterra.com/p/150053/ServiceTitan/reviews/, https://www.reddit.com/r/HowToEntrepreneur/comments/1u9gxe1/what_is_the_best_service_company_software_that_i/
