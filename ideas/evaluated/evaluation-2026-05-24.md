# Idea Evaluation — 2026-05-24

**Sources evaluated**: reddit-2026-05-24, hn-indiehackers-2026-05-24, trends-2026-05-24, competitor-analysis-2026-05-24
**Total ideas surfaced**: 24 across all sources
**New ideas (not previously shortlisted)**: 1 (Accounting Middleware/Unified API)
**Existing ideas re-confirmed**: 11 (updated signal history)
**Evaluator**: Idea Evaluator Agent

---

## Tier 1: Strong Opportunities (Score 75+)

### 1. Affordable Field Service Management for 1–5 Person Trades Shops — Score: 101/105
*Maps to: `ideas/shortlisted/field-service-management.md`*

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | ServiceTitan $245–500/tech/mo + $5K–50K onboarding; 400K+ small trades businesses; FieldFlow + FieldLedgr both launched same quarter |
| Competitor Weakness | 5/5 | ServiceTitan explicitly refuses <5-tech shops; HCP GPS $20/vehicle + pricebook $149/mo + proposals $40/mo add-on creep; Jobber no bulk reschedule |
| LTD Viability | 5/5 | $79 (solo) / $149 (up to 5 techs); flat pricing is key differentiator |
| No Free Tier | 4/5 | FieldLedgr has free tier but no traction |
| Channel Access | 5/5 | r/HVAC, r/Plumbing, r/sweatystartup; trade Facebook groups; ACCA |
| Content Potential | 5/5 | "ServiceTitan alternative", "affordable HVAC software", "field service for small contractor" |
| AppSumo Fit | 5/5 | No FSM has done AppSumo due to per-seat model — flat LTD breaks that barrier |
| Review Potential | 4/5 | Contractors leave reviews when something just works |
| MRR Path | 5/5 | Flat-rate subscription; AI bolt-on upsell (dispatch, voice receptionist) |
| Build Feasibility | 4/5 | 3–4 week MVP: schedule + dispatch + mobile job card + invoice + QB sync |
| Boring Business Bonus | 5/5 | Deeply boring — blue-collar trades |

**Verdict**: BUILD
**Decision Status**: BUILDING — see `ideas/decisions.md`
**Next Steps**: Continue AutoMVP pipeline; add HVAC-specific refrigerant tracking + flat-rate pricebook as V1 differentiators
**Risks**: Jobber/HCP could launch stripped-down tiers; QB API maintenance; trade-specific pricebook data
**Key Source Links**:
- https://fieldcamp.ai/reviews/servicetitan/
- https://www.getonecrew.com/post/servicetitan-reviews
- https://news.ycombinator.com/item?id=47294092 (FieldFlow Show HN)
- https://news.ycombinator.com/item?id=47668698 (FieldLedgr Show HN)
- https://www.businesswire.com/news/home/20260513010148/en/Simpro-Group-Launches-Lightning (AI-native FSM era just started)
**Signal Frequency**: 35+ consecutive days, all 4 sources — increasing

---

### 2. Property Management for Small Landlords (1–30 Units) — Score: 100/105
*Maps to: `ideas/shortlisted/property-management.md`*

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | 20M+ individual US landlords; 91% own ≤10 units; AppFolio/Buildium/DoorLoop prove market |
| Competitor Weakness | 5/5 | AppFolio $298/mo minimum; Buildium hidden fees ($2.35/EFT + $5/eSign + $99/bank setup); TurboTenant 10-day payment delays |
| LTD Viability | 5/5 | $79–149 LTD vs $1,500+/yr Buildium; flat payment processing fee is killer hook |
| No Free Tier | 3/5 | TurboTenant/Innago offer free tiers |
| Channel Access | 5/5 | r/landlord, r/realestateinvesting, BiggerPockets 2M+ |
| Content Potential | 5/5 | "small landlord software", "Buildium alternative for small landlord", "free property management app" |
| AppSumo Fit | 5/5 | Landlord software COMPLETELY ABSENT from AppSumo catalog = first-mover |
| Review Potential | 4/5 | Landlords review if it saves time and money |
| MRR Path | 5/5 | Per-unit monthly; portfolio growth = natural upsell |
| Build Feasibility | 4/5 | Core MVP in 4–6 weeks |
| Boring Business Bonus | 4/5 | Unglamorous property management |

**Verdict**: BUILD
**Decision Status**: BUILDING
**Next Steps**: State-specific late fee compliance database; Plaid income verification; Schedule E export
**Risks**: Leasense is a new AI-native flat-rate entrant to monitor; TurboTenant free tier creates adoption barrier
**Key Source Links**:
- https://www.leasense.com/blog/buildium-vs-appfolio-comparison-2026
- https://www.tenantcloud.com/review/appfolio-vs-buildium
- https://www.doorloop.com/blog/small-landlord-property-management-software
- https://www.leasense.com (new AI-native flat-rate competitor to monitor)
- https://www.capterra.com/rental-property-management-software/
**Signal Frequency**: 30+ days across all sources — stable at max

---

### 3. Auto Repair Shop Management (Independent Shop Gap) — Score: 100/105
*Maps to: `ideas/shortlisted/auto-repair-shop-management.md`*

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | 160K+ independent US shops ($3.4B market → $8.6B by 2033); Shopmonkey $110M raised, only 2.6% penetration |
| Competitor Weakness | 4/5 | Tekmetric $199–$439/mo; Mitchell1 "sneaky billing" + desktop-only; Shopmonkey v2.0 broke UX; ARI $20/mo ultra-basic |
| LTD Viability | 4/5 | $79–199 LTD; DVI storage creates minor ongoing costs |
| No Free Tier | 4/5 | ARI near-free but Windows-only; no modern free option |
| Channel Access | 4/5 | r/justrolledintotheshop (1.5M), auto repair Facebook groups, NAPA AutoCare network |
| Content Potential | 4/5 | "best auto repair software", "Tekmetric alternative", "auto shop management $50/mo" |
| AppSumo Fit | 4/5 | Zero auto repair software on AppSumo = category-first opportunity |
| Review Potential | 4/5 | Shop owners active on G2/Capterra |
| MRR Path | 4/5 | DVI, parts ordering, SMS add-on |
| Build Feasibility | 3/5 | VIN lookup, parts catalog, DVI; 4–5 weeks |
| Boring Business Bonus | 5/5 | Deeply boring — auto repair |

**Verdict**: BUILD
**Decision Status**: BUILDING
**Next Steps**: "ShopSimple" concept — flat $79/mo: DVI + repair orders + customer SMS + QB sync; offline PWA for internet outage resilience
**Risks**: Tekmetric actively improving; AI DVI tools emerging; integration complexity
**Key Source Links**:
- https://www.g2.com/products/mitchell-1-automotive-repair/reviews
- https://autorepairshopsoftware.com/software/tekmetric
- https://blog.csiaccounting.com/top-shop-management-software-auto-repair-reviews-breakdown
- https://metapress.com/how-auto-shop-software-is-revolutionizing-independent-repair-shops-in-2026/
- https://blog.torque360.co/auto-repair-software-pricing-2026/
**Signal Frequency**: 30+ days across all sources — stable at max

---

### 4. Landscaping & Lawn Care Business OS — Score: 99/105
*Maps to: `ideas/shortlisted/landscaping-lawn-care.md`*

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | $130B lawn care industry; 600K+ businesses; SA post-Xplor defector wave = largest switching moment in lawn care history |
| Competitor Weakness | 5/5 | LMN $598/mo for 1–3 crew; Jobber no bulk reschedule; Yardbook dated UI; Service Autopilot "going downhill extremely fast" |
| LTD Viability | 5/5 | $79–99 LTD solo; route optimization = clear daily value |
| No Free Tier | 3/5 | Yardbook free tier; CrewNest free tier |
| Channel Access | 5/5 | r/lawncare (918K+), LawnSite.com, lawn care Facebook groups |
| Content Potential | 5/5 | "lawn care scheduling software", "landscaping route optimizer", "lawn care app small business" |
| AppSumo Fit | 4/5 | Seasonal service businesses love admin-saving tools |
| Review Potential | 3/5 | Moderate review culture in lawn care |
| MRR Path | 4/5 | AI route optimization + chemical compliance tracking premium |
| Build Feasibility | 4/5 | Scheduling + route optimization + invoicing in 3–4 weeks |
| Boring Business Bonus | 5/5 | Deeply boring — lawn care |

**Verdict**: BUILD
**Decision Status**: BUILDING
**Next Steps**: "GreenRoute" / "LawnFlow" concept targeting Service Autopilot refugees; chemical log compliance; weather-day bulk reschedule
**Risks**: Attentive.ai $30.5M validates AI estimating = well-funded entrant; seasonal revenue pattern; GorillaDesk expansion
**Key Source Links**:
- https://www.capterra.com/p/142064/LMN/
- https://www.lawnsite.com/threads/jobber-vs-turfhop-vs-yardbook.504637/
- https://softwareconnect.com/roundups/best-landscaping-business-software/
- https://www.realgreen.com/blog/10-best-lawn-care-apps-for-providers
**Signal Frequency**: 30+ days across all sources — stable

---

### 5. Cleaning Service Management — Score: 99/105
*Maps to: `ideas/shortlisted/cleaning-service-management.md`*

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | ZenMaid $200K MRR bootstrapped 11+ years; Onedesk $100K+ MRR; $652M-2B cleaning software market |
| Competitor Weakness | 4/5 | ZenMaid no payroll + per-seat + SMS fees; Swept zero invoicing; Jobber not cleaning-specific |
| LTD Viability | 5/5 | $69–99 LTD; simple enough to be very profitable LTD |
| No Free Tier | 3/5 | Some free scheduling tools exist |
| Channel Access | 4/5 | FB: "House Cleaning Business Owners" (80K+), "Commercial Cleaning Business Owners" |
| Content Potential | 4/5 | "cleaning business software", "ZenMaid alternative" |
| AppSumo Fit | 4/5 | Price-sensitive owner-operators love LTDs |
| Review Potential | 3/5 | Less review-oriented market |
| MRR Path | 4/5 | SMS flat-rate, payroll export, geo-fence clock-in |
| Build Feasibility | 5/5 | Simpler workflows; 3–5 week MVP |
| Boring Business Bonus | 5/5 | Cleaning = deeply boring |

**Verdict**: BUILD
**Decision Status**: BUILDING
**Next Steps**: "CleanOps" — geo-fenced clock-in + payroll export (Gusto/ADP) + per-room photo checklists; flat $59/mo for up to 8 cleaners
**Risks**: ZenMaid is incumbency-defended; commercial cleaning has complex crew routing
**Key Source Links**:
- https://www.capterra.com/p/133875/ZenMaid-Software/reviews/
- https://www.workyard.com/compare/cleaning-service-software
- https://www.indiehackers.com/post/2020-in-review-0-to-100k-mrr-for-our-cleaning-saas-ecommerce-d53de6dde5
- https://get.zenmaid.com/compare/jobber
**Signal Frequency**: 30+ days, confirmed today by HN (Onedesk case study) + competitor analysis

---

### 6. AI Receptionist for Home Service Trades — Score: 96/105
*Maps to: `ideas/shortlisted/ai-receptionist.md`*

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | Avoca $125M Series B at $1B valuation booking $1B/yr for 800+ HVAC/plumbing/roofing customers; Cactus $7M seed (YC-backed) |
| Competitor Weakness | 4/5 | Avoca targets $5M+ revenue businesses; self-serve <$100/mo tier unoccupied |
| LTD Viability | 2/5 | Per-minute API costs make pure LTD risky; $299 LTD with cap is marginal |
| No Free Tier | 4/5 | Businesses pay to capture missed calls |
| Channel Access | 5/5 | Trade communities; "never miss a call" resonates universally |
| Content Potential | 4/5 | "AI answering service HVAC", "AI receptionist for contractors" |
| AppSumo Fit | 3/5 | Usage costs complicate LTD; but $299/yr plan can work |
| Review Potential | 4/5 | Users who stop missing calls will rave |
| MRR Path | 5/5 | Natural recurring per-minute/per-call |
| Build Feasibility | 4/5 | Retell/Vapi + Twilio; 2–4 week MVP |
| Boring Business Bonus | 5/5 | Serves deeply boring trades businesses |

**Verdict**: BUILD
**Decision Status**: VALIDATING
**Next Steps**: HVAC-specific prototype; test with 5–10 HVAC shops; verify sustainable per-minute pricing with API cost analysis; explore pest control + pool service as Avoca-unserved niches
**Risks**: Per-minute API costs erode margins; Avoca well-funded; voice quality must be exceptional; Cactus (YC-backed) entering market
**Key Source Links**:
- https://fortune.com/2026/04/27/avoca-ai-agents-missed-calls-hvac-plumbing-roofing-kleiner-perkins-chen-shrivastava-braswell/
- https://www.prnewswire.com/news-releases/avoca-raises-125m-at-1b-valuation-to-power-americas-services-economy-with-ai-302753962.html
- https://techfundingnews.com/cactus-raises-7m-ai-automation-home-services/
- https://serviceagent.ai/
- https://www.indiehackers.com/post/building-a-profitable-ai-voice-saas-agency-300-800-mrr-per-client-frAbgO1yQMfHOFFtY3gE
**Signal Frequency**: 10 days since last signal; Cactus $7M is new data point today

---

### 7. Pressure Washing / Auto Detailing CRM — Score: 95/105
*Maps to: `ideas/shortlisted/pressure-washing-detailing.md`*

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 4/5 | $2.3B pressure washing + $15B auto detailing; r/AutoDetailing 1M+ members |
| Competitor Weakness | 5/5 | ZERO purpose-built software; all use generic FSM (Housecall Pro, Square) |
| LTD Viability | 5/5 | $59–79 LTD; owner-operators love one-time payments |
| No Free Tier | 4/5 | No free pressure washing-specific tools |
| Channel Access | 5/5 | r/pressurewashing 90K+, r/AutoDetailing 1M+, r/MobileDetailers |
| Content Potential | 5/5 | "pressure washing software" near-zero SEO competition |
| AppSumo Fit | 4/5 | Before/after photos create viral sharing |
| Review Potential | 4/5 | Visual results encourage reviews |
| MRR Path | 4/5 | Route optimization, chemical tracking, marketing as upsell |
| Build Feasibility | 5/5 | Simple CRM + sq ft estimating + invoicing + photos in 2–3 weeks |
| Boring Business Bonus | 5/5 | Pressure washing = deeply boring blue-collar |

**Verdict**: BUILD — Quick Win
**Decision Status**: BUILDING
**Next Steps**: VIN-linked vehicle history for detailing; satellite sq footage for pressure washing; online booking widget with deposit collection
**Risks**: Generic FSM tools adding vertical features; auto detailers very price-sensitive
**Key Source Links**:
- https://fieldcamp.ai/reviews/housecall-pro/
- https://wifitalents.com/best/landscaping-business-scheduling-software/
- https://www.fieldpulse.com/resources/blog/best-dispatch-software
- https://myquoteiq.com/most-affordable-field-service-management-softwares-in-2026/
**Signal Frequency**: 10 days since last signal; reddit confirms today

---

### 8. QuickBooks Alternative for Growing SMBs — Score: 94/105 ↑
*Maps to: `ideas/shortlisted/bookkeeping-accounting.md`*
*Previous score: 89/105 — upgraded due to 2026 timing catalyst*

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | 3M+ businesses hit by $20/month unexpected increases in 2026; 400% cumulative price increases over 3 years for some plans; QBO Desktop EOL Sept 2027 |
| Competitor Weakness | 4/5 | Wave free tier gutted (removed bank feeds); Xero generic; FreshBooks per-client pricing; QBO 400% increase = rage-switching momentum |
| LTD Viability | 4/5 | $79–99 LTD for the core tier; recurring for payroll add-on |
| No Free Tier | 2/5 | Wave still free (weakened); multiple free options exist |
| Channel Access | 4/5 | r/smallbusiness, r/Bookkeeping, r/accounting |
| Content Potential | 5/5 | "QuickBooks alternative" is massive search category with 95/100 search frequency |
| AppSumo Fit | 5/5 | Perfect AppSumo — broad appeal, frustration-driven, "escape QBO" narrative |
| Review Potential | 4/5 | "Finally escaped QuickBooks" is a compelling review narrative |
| MRR Path | 4/5 | Monthly natural for accounting software |
| Build Feasibility | 3/5 | Bank integrations via Plaid + categorization + invoicing + tax reports; 6+ weeks |
| Boring Business Bonus | 3/5 | Horizontal (not vertical) accounting tool |

**Verdict**: BUILD (upgraded from EXPLORE FURTHER)
**Decision Status**: VALIDATING — 2026 timing is exceptionally strong
**Next Steps**: Trades-specific positioning ("built for contractors, not accountants") — job costing + per-job P&L differentiates from generic QBO clones; target the Sept 2027 QB Desktop EOL migration wave; flat $19/mo or $79 LTD
**Risks**: Wave free tier still exists; QBO network effects (accountants force users back); bank integrations technically challenging; overcrowded category
**Key Source Links**:
- https://stephsbooks.com/news/quickbooks-online-price-increase-2026
- https://quickbooks.intuit.com/learn-support/en-us/other-questions/price-increase-2025/00/1546802
- https://jamietrull.com/2025/04/20/quickbooks-pricing/
- https://fitsmallbusiness.com/wave-review/
**Signal Frequency**: Confirmed daily for months; new 2026 pricing catalyst hitting 3M+ businesses simultaneously is the strongest timing signal yet

---

### 9. Small Carrier Trucking TMS (1–5 Trucks) — Score: 93/105
*Maps to: `ideas/shortlisted/small-fleet-trucking-tms.md`*

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 4/5 | 350K+ owner-operators; 91.5% of US carriers <10 trucks; TruckLogics GPS "NEVER works" |
| Competitor Weakness | 4/5 | Enterprise TMS built for 20+ trucks; TruckLogics crashes; TruckingOffice IFTA errors flagged by auditors; AscendTMS free but basic |
| LTD Viability | 4/5 | $99–149 LTD per operator; IFTA quarterly pain alone justifies purchase |
| No Free Tier | 3/5 | AscendTMS has free tier |
| Channel Access | 4/5 | r/trucking 200K+, trucking Facebook groups, load board communities |
| Content Potential | 4/5 | "trucking software for small carriers", "owner operator TMS", "IFTA reporting app" |
| AppSumo Fit | 2/5 | Truckers not typically on AppSumo |
| Review Potential | 4/5 | Will review if IFTA + compliance simplified |
| MRR Path | 4/5 | Per-truck monthly; IFTA quarterly need favors MRR |
| Build Feasibility | 3/5 | Load mgmt + IFTA + compliance + dispatching; 5–6 weeks |
| Boring Business Bonus | 5/5 | Trucking = deeply boring |

**Verdict**: EXPLORE FURTHER
**Decision Status**: VALIDATING
**Next Steps**: IFTA alone as wedge product ($9.99/mo) → upgrade to full TMS; Spanish-language UI for Hispanic owner-operators; DAT load board integration
**Risks**: PE consolidation of legacy TMS creating well-funded challengers; IFTA complexity; AscendTMS free tier creates adoption barrier
**Key Source Links**:
- https://truckpedia.io/resources/best-trucking-software-small-fleets
- https://www.torotms.com/blog/best-software-for-small-trucking-company
- https://www.capterra.com/p/122284/TruckingOffice/
- https://www.freightwaves.com/news/pe-firm-acquires-carrier-logistics-pledges-ai-overhaul
- https://www.truckbase.com/
**Signal Frequency**: Confirmed today by both reddit + trends; 8 days since last signal

---

### 10. Tax Software for Solo CPA / Small Tax Firms — Score: 90/105
*Maps to: `ideas/shortlisted/tax-professional.md`*

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 4/5 | 300K+ preparers; 62% say pricing is #1 issue; 37% satisfied with current tech |
| Competitor Weakness | 4/5 | ProConnect hook-and-bait pricing; Canopy $150/mo core + add-ons; TaxDome complex; Drake clunky |
| LTD Viability | 5/5 | $79–99 LTD; October launch for January season optimal |
| No Free Tier | 4/5 | Few free tax workflow tools |
| Channel Access | 4/5 | r/taxpros (70K+), TaxProTalk forums |
| Content Potential | 4/5 | "tax preparer client portal", "TaxDome alternative", "Canopy alternative small firm" |
| AppSumo Fit | 4/5 | Good fit if timed for Oct–Nov |
| Review Potential | 4/5 | Vocal profession; recommend within networks |
| MRR Path | 3/5 | Seasonal usage makes pure MRR harder; annual licensing is natural |
| Build Feasibility | 4/5 | Upload portal + reminders + e-sig + status dashboard in 3–4 weeks |
| Boring Business Bonus | 5/5 | Tax preparation = deeply boring |

**Verdict**: BUILD (time for October 2026 launch)
**Decision Status**: VALIDATING
**Next Steps**: Client portal + e-signature + document collection + task workflow at $49/mo flat; position as "Canopy without the nickel-and-diming"; October 2026 AppSumo launch for January 2027 season
**Risks**: Seasonal usage pattern; Intuit dominates filing engine; changing tax law complexity
**Key Source Links**:
- https://www.smartvault.com/resources/what-accountants-hate-most-about-tax-software/
- https://www.thetaxadviser.com/issues/2025/aug/2025-tax-software-survey/
- https://taxdome.com/blog/best-canopy-alternatives
- https://www.wolterskluwer.com/en/expert-insights/best-tax-software-for-preparers-an-expert-guide-to-choosing-the-right-solution
**Signal Frequency**: Confirmed today by reddit; 20 days since last signal

---

### 11. Accounting Firm Client Communication Hub — Score: 83/105
*Maps to: `ideas/shortlisted/accounting-client-communication-hub.md`*

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 4/5 | 1.2M+ bookkeepers; TaxDome/Canopy/Karbon prove market; "40% of time chasing client documents" |
| Competitor Weakness | 4/5 | TaxDome $75+/user/mo; Canopy $150/mo + per-module; Karbon $59+/user/mo + implementation; no affordable lightweight option |
| LTD Viability | 4/5 | $79–99 LTD viable; low COGS overlay |
| No Free Tier | 4/5 | No free accounting client portal built for bookkeeping workflows |
| Channel Access | 4/5 | r/Bookkeeping (200K+), r/taxpros, QBO ProAdvisor network |
| Content Potential | 3/5 | "TaxDome alternative", "client portal for bookkeepers" |
| AppSumo Fit | 4/5 | Solo bookkeepers are typical AppSumo buyers |
| Review Potential | 4/5 | Accounting professionals actively review on G2/Capterra |
| MRR Path | 4/5 | Monthly client communication = high daily use |
| Build Feasibility | 4/5 | Email + file sharing + document requests + unified inbox; 4–6 weeks |
| Boring Business Bonus | 4/5 | Accounting firm operations = unglamorous, VC-ignored |

**Verdict**: BUILD
**Decision Status**: VALIDATING
**Next Steps**: Launch "all-in-one at $49/mo" — client portal + e-sig + document storage + task tracking + time billing; position directly against Canopy's nickel-and-diming
**Risks**: Overlaps with tax-professional.md (consider merging); TaxDome improving onboarding
**Key Source Links**:
- https://taxdome.com/blog/best-canopy-alternatives
- https://www.smartvault.com/resources/what-accountants-hate-most-about-tax-software/
- https://www.capterra.com/p/142390/FreshBooks/reviews/
**Signal Frequency**: First identified 2026-05-16; confirmed again today via reddit (Practice Management for Solo/Small CPA Firms signal)

---

## Tier 2: Worth Exploring (Score 55–74)

### Accounting Middleware / Unified API for QBO + Xero — Score: 60/105
*NEW IDEA — not previously shortlisted*

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 3/5 | Codat/Merge/APIDeck validate demand; all charge $500–2K/month = indie/small SaaS teams priced out |
| Competitor Weakness | 3/5 | Incumbents expensive but technically capable; high switching cost once integrated |
| LTD Viability | 2/5 | B2D SaaS; LTD marginal for API product; $99 LTD for low-volume tier possible |
| No Free Tier | 4/5 | No free accounting API with smart rate limiting |
| Channel Access | 3/5 | r/SaaS, r/selfhosted, dev forums, Product Hunt |
| Content Potential | 3/5 | "accounting API", "QBO integration library", "Xero rate limit solution" |
| AppSumo Fit | 2/5 | B2D tools rarely thrive on AppSumo |
| Review Potential | 2/5 | Developer tools don't get reviewed much publicly |
| MRR Path | 4/5 | Per-org monthly is natural; scales with customer growth |
| Build Feasibility | 3/5 | OAuth per platform + rate limit handling + retry logic + webhook normalization; 5–6 weeks |
| Boring Business Bonus | 2/5 | Developer-facing tool, not a boring business vertical |

**Verdict**: PASS (for now — revisit if pivoting to specific trade vertical)
**Decision Status**: NEW
**Next Steps**: Only pursue if we're building vertical SaaS that needs accounting integration ourselves; open-source core + hosted option could work as B2D acquisition channel
**Risks**: Codat is well-funded; Merge.dev expanding; dev tools commoditizing; low boring biz fit
**Key Source Links**:
- https://www.apideck.com/blog/accounting-software-integration
- https://developer.xero.com/documentation/guides/oauth2/limits/
- https://www.getknit.dev/blog/developers-guide-to-accounting-api-integration
**Signal Frequency**: First seen today; single source

---

## Tier 3: Weak / Pass (Score <55)

| Idea | Why Passing |
|------|------------|
| Simple HVAC/Plumbing Estimates + Invoicing (standalone) | Subset of the FSM opportunity; doesn't stand alone as differentiated product |
| HVAC-Specific Vertical SaaS (equipment tracking only) | Covered and exceeded by field-service-management.md at 101/105 |
| Contractors Building Own Software (HN thread) | Demand signal only — confirms FSM gap but is not a product idea |
| Micro-SaaS Boom trend | General market tailwind, not a specific actionable idea |
| AI Quote Generator for Blue-Collar (ToolsAI) | Already mapped to contractor-quoting-estimation.md; single low-engagement HN post |
| Franchise & Multi-Location Ops | Mapped to micro-franchise-ops.md; medium signal only; separate from boring business focus |
| Paper-to-Digital Inspection (horizontal trend) | Covered by existing vertical shortlists (chimney-sweep-inspection.md, hvac-flat-rate-pricebook.md, food-service-compliance.md); pursue per-vertical not horizontal |
| Compliance & Vendor Management (SecurVO) | 90-day free beta, no revenue; maps to subcontractor-compliance-tracking.md; niche within property management |

---

## Top 3 Recommendations

1. **Field Service Management** — Score: 101/105 — The anti-ServiceTitan: dead-simple FSM for 1–5 tech trades shops at flat $79–149 LTD; quad-source confirmation for 35+ consecutive days; Simpro Lightning launch confirms AI-native FSM era but leaves solo/micro shop tier permanently unoccupied — https://fieldcamp.ai/reviews/servicetitan/

2. **QuickBooks Alternative** — Score: 94/105 — **TIMING CATALYST**: 2026 Intuit price hike hitting 3M+ businesses simultaneously; 400% cumulative increases; QB Desktop EOL September 2027; this is the strongest "right now" buying window ever observed for this idea — position as "built for contractors, not accountants" with job costing built in — https://stephsbooks.com/news/quickbooks-online-price-increase-2026

3. **AI Receptionist for Home Services** — Score: 96/105 — Avoca ($125M Series B, $1B valuation) + Cactus ($7M, YC-backed) confirm enterprise demand; self-serve micro-operator tier (<$100/mo) still completely wide open; 30–40% of HVAC calls missed during peak = $50K+ revenue leak per contractor per year — https://fortune.com/2026/04/27/avoca-ai-agents-missed-calls-hvac-plumbing-roofing-kleiner-perkins-chen-shrivastava-braswell/

---

## Signal Summary

| Idea | Today's Sources | Score | Δ | Action |
|------|----------------|-------|---|--------|
| Field Service Management | reddit + hn + trends + competitor | 101/105 | → | Update signal history |
| Property Management | reddit + trends + competitor | 100/105 | → | Update signal history |
| Auto Repair Shop Mgmt | trends + competitor | 100/105 | → | Update signal history |
| Landscaping/Lawn Care | reddit + trends + competitor | 99/105 | → | Update signal history |
| Cleaning Service Mgmt | hn + competitor | 99/105 | → | Update signal history |
| AI Receptionist | hn + trends | 96/105 | → | Update signal history (Cactus $7M new) |
| Pressure Washing/Detailing | reddit | 95/105 | → | Update signal history |
| QuickBooks Alternative | reddit | 94/105 | ↑+5 | Update signal history (2026 timing catalyst) |
| Trucking TMS | reddit + trends | 93/105 | → | Update signal history |
| Tax Professional | reddit | 90/105 | → | Update signal history |
| Accounting Client Hub | reddit | 83/105 | → | Update signal history |
| **Accounting Middleware API** | reddit | **60/105** | NEW | Tier 2, do not shortlist |
