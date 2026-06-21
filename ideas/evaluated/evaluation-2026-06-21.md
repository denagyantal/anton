# Idea Evaluation — 2026-06-21

**Sources**: reddit-2026-06-21, hn-indiehackers-2026-06-21, competitor-analysis-2026-06-21, trends-2026-06-21
**Ideas evaluated**: 24 distinct opportunities (some appearing in multiple sources)
**Total raw ideas across all files**: 8 (Reddit) + 11 (HN/IH) + 4 (Competitor) + 10 (Trends) = 33 signals, collapsed to 24 unique

---

## Tier 1: Strong Opportunities (Score 75+)

### 1. Auto Repair Shop Management — Score: 100/105
*(Existing shortlisted: `auto-repair-shop-management.md`)*

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | 160K–280K+ independent US shops; ShopMonkey forced v2 update creating live refugees |
| Competitor Weakness | 5/5 | Mitchell1 no cloud sync, Tekmetric $179+/mo + QBO bridge needed, ShopMonkey forced processor |
| LTD Viability | 4/5 | $89 LTD vs $2,148+/yr Shopmonkey; some ongoing labor guide cost |
| No Free Tier | 4/5 | ARI $39.99/mo is basic floor, not free |
| Channel Access | 4/5 | r/AskMechanics (900K+), Diagnostic Network, AutoRepair FB groups |
| Content Potential | 4/5 | "best auto repair software", "Mitchell1 alternative" — active search demand |
| AppSumo Fit | 5/5 | No auto repair tool on AppSumo; ShopMonkey refugee market primed |
| Review Potential | 4/5 | Shop owners leave detailed G2/Capterra reviews |
| MRR Path | 4/5 | Parts ordering, labor guide, DVI subscriptions |
| Build Feasibility | 3/5 | VIN lookup, DVI, QBO sync = 6-8 week MVP |
| Boring Business Bonus | 5/5 | Auto repair = deeply boring essential service |

**Today's New Data**: Competitor analysis adds: ShopDesk concept at $89/mo flat — DVI + native QBO sync (no Back Office bridge) + two-way customer texting. Specific gaps confirmed: Mitchell1 still no cloud sync ("accountant depends on manual monthly reports"); ShopMonkey $199-475/mo; Tekmetric QBO requires paid third-party connector "can break its sync"; Garage360 $79/mo as new affordable entrant. Trends: auto repair software $3.4B→$8.6B by 2033 (14.2% CAGR); AI adoption only ~12% vs 60% projected.

**Verdict**: BUILD
**Decision Status**: NEW — see `ideas/decisions.md`
**Next Steps**: Build offline-first PWA + DVI + two-way SMS + native QBO sync at $89/mo flat. Target ShopMonkey v2 refugees.
**Risks**: Tekmetric well-funded; labor guide data licensing cost; shop loyalty to legacy
**Key Source Links**:
- https://www.capterra.com/compare/169022-190952/Shopmonkey-vs-Tekmetric
- https://tradetechguide.com/p/mitchell-1-shop-manager-se-review-and-pricing-overview
- https://garage360.io/blog/best-auto-repair-shop-software
- https://techroute66.com/auto-repair-management-software
**Signal Frequency**: 100+ mentions across 90+ days — strongly increasing

---

### 2. Landscaping & Lawn Care Business OS — Score: 100/105
*(Existing shortlisted: `landscaping-lawn-care.md`)*

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | 600K+ landscaping businesses, $130B industry |
| Competitor Weakness | 5/5 | Service Autopilot Xplor acquisition collapse; support weeks, 10% price hikes, processor lock-in |
| LTD Viability | 4/5 | $69 LTD viable (timing play) |
| No Free Tier | 4/5 | Yardbook free but Android-only + limited |
| Channel Access | 5/5 | r/lawncare (900K+), LawnSite.com (1M+), Facebook groups |
| Content Potential | 4/5 | "lawn care software", "service autopilot alternative" |
| AppSumo Fit | 4/5 | Zero lawn care software on AppSumo; first-mover |
| Review Potential | 4/5 | Lawn care community writes reviews + forum posts |
| MRR Path | 5/5 | Crew scaling, chemical compliance tier, route optimization |
| Build Feasibility | 4/5 | Route optimization + recurring schedules + EPA chemical log = 4-6 weeks |
| Boring Business Bonus | 5/5 | Lawn care = deeply boring essential service |

**Today's New Data (Competitor Analysis)**: GrowCrew concept at $59/mo flat (no per-seat fees for up to 10 crew) — route-optimized scheduling + automated recurring invoicing (actually auto-sends, vs Yardbook manual) + chemical tracking (EPA-compliant) + client SMS reminders + crew GPS + no processor lock-in. Service Autopilot Xplor: support email-only + weeks for resolution + 10% annual price increases + forced payment processor. Yardbook: "growing businesses outgrow it within 2-3 seasons." LMN $297-697/mo with mobile app 2.7★. Trends: GorillaDesk/FieldRoutes mid-market; sub-$100/mo gap confirmed ongoing.

**Verdict**: BUILD
**Decision Status**: NEW — see `ideas/decisions.md`
**Next Steps**: Build NOW. SA migration is live. Core: route optimization + chemical log + auto-recurring invoices + no processor lock-in.
**Risks**: SA users may wait for SA to improve; LMN has loyal power users; seasonal revenue
**Key Source Links**:
- https://myquoteiq.com/best-service-autopilot-alternative-for-lawn-care-businesses/
- https://softwareconnect.com/reviews/service-autopilot/
- https://www.lawnsite.com/threads/lmn-vs-service-auto-pilot.511977/
- https://fieldservicesoftware.io/software/yardbook/
**Signal Frequency**: 100+ mentions across 90+ days — strongly increasing

---

### 3. Property Management for Small Landlords (5-20 Units) — Score: 100/105
*(Existing shortlisted: `property-management.md`)*

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | 10.6M individual US landlords; AppFolio/Buildium/Stessa all prove massive market |
| Competitor Weakness | 5/5 | Stessa free tier gutted 2025; AppFolio 50-unit min; Buildium hidden fees; TurboTenant 10-day ACH |
| LTD Viability | 5/5 | $79 LTD vs $340/mo Buildium; landlord software absent from AppSumo |
| No Free Tier | 3/5 | TurboTenant/Innago/Avail offer free tiers |
| Channel Access | 5/5 | r/landlord (700K+), BiggerPockets (2M+), r/realestateinvesting |
| Content Potential | 5/5 | "property management software small landlord", "Stessa alternative" |
| AppSumo Fit | 5/5 | Landlord software absent from AppSumo; real estate investors are deal-savvy |
| Review Potential | 4/5 | Landlords review if it saves time/money |
| MRR Path | 5/5 | Per-unit monthly, portfolio growth = natural upsell |
| Build Feasibility | 4/5 | Core MVP in 4-6 weeks |
| Boring Business Bonus | 4/5 | Unglamorous professional property management |

**Today's New Data (Competitor Analysis)**: UnitDesk concept at $29/mo flat (up to 25 units) — bank-synced accounting with Schedule E auto-mapping + real tenant-landlord messaging (not just maintenance tickets) + maintenance tracker with vendor assignment + rent collection (no forced bank account). Stessa 2025 gutted free tier; bank connections break repeatedly; rent collection requires unwanted checking account. TurboTenant premium "overpriced for features bundled that I don't use." Avail no direct messaging. 23% of small landlords still on pen/paper. Trends: AI PM wave — Shuk Rentals ($5/unit), Leasense (AI-native flat-rate), MagicDoor — all 2025-2026 entrants confirming active market.

**Verdict**: BUILD
**Decision Status**: NEW — see `ideas/decisions.md`
**Next Steps**: Core: Schedule E export + maintenance portal + real messaging + no ACH percentage fees. Target Stessa free-tier refugees.
**Risks**: Multiple new AI-native entrants in 2026; free tiers make adoption harder
**Key Source Links**:
- https://www.capterra.com/p/181042/Stessa/reviews/
- https://www.reihub.net/compare-to-stessa/
- https://www.kdsdevelopment.net/articles/avail-vs-rentredi-vs-turbotenant-landlord-apps
- https://www.buildium.com/pricing/
**Signal Frequency**: 100+ mentions across 90+ days — strongly increasing

---

### 4. Independent Insurance Agency Management System — Score: 96/105
*(Existing shortlisted: `insurance-agency-management.md`)*

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | 400K+ independent P&C agents in US; Applied Epic dominates enterprise |
| Competitor Weakness | 5/5 | Applied Epic $300+/user/mo + 6-12 month impl; EZLynx carrier fee complexity; "they're all terrible" |
| LTD Viability | 4/5 | $99 LTD for solo agents; $49/seat/mo recurring |
| No Free Tier | 4/5 | No credible free AMS exists |
| Channel Access | 4/5 | r/Insurance, r/InsuranceAgents, IIABA forums |
| Content Potential | 4/5 | "insurance agency management system", "EZLynx alternative" |
| AppSumo Fit | 3/5 | No AMS on AppSumo; professional audience |
| Review Potential | 3/5 | Insurance professionals review on G2 |
| MRR Path | 5/5 | $49/seat/mo is sticky — AMS is operational foundation |
| Build Feasibility | 3/5 | P&C policy management + carrier downloads = 6-8 week MVP |
| Boring Business Bonus | 5/5 | Insurance agency = unglamorous professional services |

**Today's New Data (Reddit)**: Applied Epic $300+/user/month + 6-12 month implementation. EZLynx: carrier-specific rate fees add up for high-volume agencies. New entrants gaining traction: AGENCYMATE (minutes to set up vs 6-8 weeks for EZLynx), unLocked CRM ($69-149/month flat, modern UI), NowCerts. Market not won. 400K+ independent agents in US; majority are small agencies. Multiple "EZLynx alternatives 2025" articles = active switching behavior.

**Verdict**: BUILD
**Decision Status**: NEW — see `ideas/decisions.md`
**Next Steps**: MVP: policy management (P&C) → client CRM → renewals workflow → commission tracking → flat $49/agent/mo
**Risks**: Insurance domain compliance complexity; IVANS carrier integrations expensive; Applied Epic has network effects
**Key Source Links**:
- https://agencymate.com/insights/ezlynx-alternatives/
- https://www.unlockedcrm.ai/blog/best-agency-management-system-insurance-2026
- https://www.softwareworld.co/competitors/ezlynx-alternatives/
- https://glovebox.io/blog/best-insurance-agency-management-systems/
**Signal Frequency**: 8 mentions across 5 weeks — stable/increasing

---

### 5. Pest Control Software for Small Operators — Score: 95/105
*(Existing shortlisted: `pest-control.md`)*

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | 30K+ pest control companies; GorillaDesk $49/mo proves small-operator market |
| Competitor Weakness | 4/5 | FieldRoutes $350+/mo hidden costs; PestPac enterprise overkill; GorillaDesk lacks compliance depth |
| LTD Viability | 4/5 | $79 LTD for solo operators; AppSumo viable |
| No Free Tier | 4/5 | GorillaDesk $49/mo = floor, not free |
| Channel Access | 4/5 | r/pestcontrol, "Pest Control Business Owners" FB groups |
| Content Potential | 4/5 | "pest control software", "GorillaDesk alternative" |
| AppSumo Fit | 4/5 | Clear ROI story; solo operators are LTD buyers |
| Review Potential | 4/5 | Pest control community active on G2 |
| MRR Path | 4/5 | Route optimization, CRM marketing tier, AI scheduling |
| Build Feasibility | 4/5 | EPA compliance log + route scheduler = 4-6 weeks |
| Boring Business Bonus | 5/5 | Pest control = deeply boring essential service |

**Today's New Data (Reddit)**: FieldRoutes $350+/mo "pricing just got way too expensive" with hidden costs. PestPac doesn't publish pricing. GorillaDesk $49/mo = entry-level but limited (no EPA chemical tracking built-in, no CRM marketing automation). Pest-specific needs absent from generic FSM: recurring service agreements + chemical usage logging + EPA compliance + technician route efficiency. Trends: AI dispatch/scheduling for pest control identified as white space. Pest control market $22.7B (2024) → $29.1B (2026), 28% 2-year growth.

**Verdict**: BUILD
**Decision Status**: NEW — see `ideas/decisions.md`
**Next Steps**: MVP: service agreement management + recurring routes + EPA chemical log + SMS + billing on completion + QBO sync
**Risks**: GorillaDesk has loyal installed base; FieldRoutes has market share despite pricing
**Key Source Links**:
- https://www.capterra.com/p/146076/FieldRoutes/reviews/
- https://tech.co/field-service-management/best-pest-control-business-software
- https://softwareconnect.com/roundups/best-pest-control-software/
- https://gorilladesk.com/
**Signal Frequency**: 50+ mentions across 60+ days — stable

---

### 6. Dental Practice Management System — Score: 95/105
*(Existing shortlisted: `dental-practice.md`)*

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | 30K+ independent dental clinics; Dentrix/Eaglesoft validate huge market |
| Competitor Weakness | 5/5 | Curve Dental 6+ hour outages; Eaglesoft proprietary data lock-in + 2005 UI; Dentrix $500-700/mo |
| LTD Viability | 2/5 | HIPAA + continuous compliance updates = MRR model required |
| No Free Tier | 5/5 | No free dental PMS exists; all start at $149+/mo |
| Channel Access | 4/5 | DentalTown forums, r/Dentistry, ADA channels |
| Content Potential | 4/5 | "dental practice management software", "Dentrix alternative" |
| AppSumo Fit | 2/5 | HIPAA complexity; recurring model required; not AppSumo-typical |
| Review Potential | 4/5 | Dentists and office managers review extensively |
| MRR Path | 5/5 | $199-299/mo per clinic, extremely sticky once adopted |
| Build Feasibility | 2/5 | HIPAA, insurance claims, clinical charting = 4-6 month build |
| Boring Business Bonus | 4/5 | Dental = unglamorous professional service |

**Today's New Data (Reddit)**: Curve Dental went down 6+ hours multiple times in 2025 with no support. Eaglesoft proprietary imaging format = $5K+ migration cost. Dentrix $500-700/mo + hardware. CareStack $698/user/mo with billing chaos ("accounting team HATES it"). Open Dental $149-199/mo but paid support add-on + steep learning curve. Consistent theme: excessive clicking, outages, hidden fees. 30K+ independent dental clinics (1-5 operatories) feel locked in. Trends: AI dental insurance automation (Toothy.ai voice AI for insurance calls); Overjet AI X-ray analysis (enterprise); Oryx cloud-native practice management gaining. White space: AI insurance pre-authorization agent for small dental/chiro clinics ($150-300/mo).

**Verdict**: BUILD (patient comms layer first; full PMS is moat)
**Decision Status**: NEW — see `ideas/decisions.md`
**Next Steps**: Start with patient comms wedge ($49-99/mo on top of existing PMS); build to full PMS replacement targeting Eaglesoft/Dentrix refugees
**Risks**: HIPAA compliance = significant ongoing cost; Archy ($20M Series B) moving fast
**Key Source Links**:
- https://revupdental.com/best-dental-practice-management-systems/
- https://www.capterra.com/p/23486-dental-software/
- https://www.g2.com/categories/dental-practice-management-software
- https://www.oryxdental.com/
**Signal Frequency**: 60+ mentions across 90+ days — stable

---

### 7. HVAC Flat-Rate Pricebook + FSM for Small Shops — Score: 93/105
*(Existing shortlisted: `hvac-flat-rate-pricebook.md`)*

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 4/5 | 500K+ HVAC/plumbing/electrical contractors; The New Flat Rate validates willingness to pay |
| Competitor Weakness | 5/5 | ServiceTitan BBB 1/5 stars; HCP pricebook is self-built (not preloaded); Jobber ZERO pricebook |
| LTD Viability | 5/5 | $99 LTD vs $1,500+/yr The New Flat Rate; immediate ROI story |
| No Free Tier | 4/5 | No credible free pricebook exists |
| Channel Access | 5/5 | r/HVAC (500K+), HVAC Business Owners FB (47K+), ACCA forums |
| Content Potential | 4/5 | "HVAC flat rate pricing software", "plumbing flat rate" |
| AppSumo Fit | 5/5 | Simple tool; clear ROI; no HVAC tool on AppSumo |
| Review Potential | 4/5 | Tradespeople review if it increases average ticket |
| MRR Path | 3/5 | Standalone limits MRR; FSM integration play needed |
| Build Feasibility | 5/5 | CRUD + pricing logic + PDF generator = 1-2 week MVP |
| Boring Business Bonus | 5/5 | HVAC/plumbing = deeply boring, essential |

**Today's New Data (Competitor Analysis — PriceWrench concept)**: ServiceTitan minimum ~$10K first-year cost for 2-tech shop; 1/5 BBB rating; ETF of $24K-$46K. Housecall Pro pricebook is entirely SELF-BUILT (not preloaded) — unlike FieldEdge's Coolfront which has prebuilt HVAC pricing. Jobber has zero flat-rate pricebook at ANY tier. Refrigerant price volatility: Honeywell announced 42% surcharge on R-454B in April 2025 — pricebook tools rarely auto-update pricing. 46% of small HVAC firms run outdated accounting software. Key gap: prebuilt pricebook with quarterly refrigerant/parts cost auto-updates, native QBO sync, sub-30-minute setup. Trends: AI voice + full FSM bundle for 1-5 truck HVAC operators under $200/mo.

**Verdict**: BUILD
**Decision Status**: NEW — see `ideas/decisions.md`
**Next Steps**: MVP — 500+ preloaded HVAC repair categories + quarterly cost updates + customer-facing tablet menu + QBO sync
**Risks**: HCP or Jobber could add free pricebook; standalone limits MRR ceiling
**Key Source Links**:
- https://fieldcamp.ai/reviews/servicetitan/
- https://crewroute.app/resources/best/best-flat-rate-pricebook-software/
- https://buildops.com/resources/hvac-flat-rate-pricing-software/
- https://relayfi.com/blog/hvac-flat-rate-pricing/
**Signal Frequency**: 15+ mentions across 6 weeks — stable

---

### 8. Childcare / Daycare Center Management — Score: 93/105
*(Existing shortlisted: `childcare-center-management.md`)*

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | 200K+ licensed childcare facilities; ProCare has hundreds of active reviews |
| Competitor Weakness | 4/5 | ProCare: no photos in chat, ACH-only payments, session timeouts during busy pickup |
| LTD Viability | 3/5 | Compliance updates needed; $299 LTD borderline |
| No Free Tier | 4/5 | All solutions start at $150+/mo |
| Channel Access | 4/5 | r/ECEProfessionals, r/Daycare, NAEYC channels |
| Content Potential | 4/5 | "childcare management software", "ProCare alternative" |
| AppSumo Fit | 3/5 | Professional audience; compliance needed |
| Review Potential | 4/5 | Childcare staff leave detailed Capterra/G2 reviews |
| MRR Path | 5/5 | $59-149/mo per center; compliance updates = sticky |
| Build Feasibility | 3/5 | State licensing compliance + QR check-in = 6-8 week MVP |
| Boring Business Bonus | 4/5 | Childcare = unglamorous essential service |

**Today's New Data (Reddit)**: ProCare: (1) can't send photos in parent chat — must post to separate feed parents don't check; (2) no credit card option — ACH-only; (3) logs out too quickly during drop-off/pickup; (4) bugs + slow support; (5) limited permission customization. These are ProCare's top daily-workflow failures. Brightwheel is the modern alternative but multiple competitors (Lilio, Playground, Famly, ChildPilot) haven't solved these core pain points. 200K+ licensed facilities. Market has high software adoption (ProCare hundreds of reviews) = unhappy installed base.

**Verdict**: BUILD
**Decision Status**: NEW — see `ideas/decisions.md`
**Next Steps**: Native photo/video in parent chat + credit card + ACH + QR check-in at $59-149/mo
**Risks**: Brightwheel growing fast with capital; state compliance varies significantly
**Key Source Links**:
- https://mybrightwheel.com/blog/procare-alternatives
- https://www.capterra.com/p/23486/Procare-Child-Care-Management/reviews/
- https://www.softwareadvice.com/child-care/procare-profile/reviews/
**Signal Frequency**: 7 mentions across 3 weeks — increasing

---

### 9. Funeral Home Software for Independent & Family-Owned Homes — Score: 92/105
*(Existing shortlisted: `funeral-home-management.md`)*

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 4/5 | 20K+ funeral homes, 70% independent; $29K MRR case study validated |
| Competitor Weakness | 5/5 | Legacy platforms for large groups; 1Director $49/mo new entrant = confirms gap |
| LTD Viability | 4/5 | $199 LTD per location; premium regulated market |
| No Free Tier | 5/5 | No free funeral software; all paid |
| Channel Access | 3/5 | NFDA, Facebook funeral groups (53K+ combined) |
| Content Potential | 3/5 | "funeral home software", "funeral management software" |
| AppSumo Fit | 3/5 | Niche but regulated = works at $199+ |
| Review Potential | 3/5 | Funeral directors review on G2/Capterra |
| MRR Path | 4/5 | Per-location, compliance updates, low churn |
| Build Feasibility | 3/5 | State-specific death certificate forms, FTC compliance = 8+ weeks |
| Boring Business Bonus | 5/5 | Funeral home = quintessentially boring essential service |

**Today's New Data (Reddit)**: Multiple new affordable players entering: 1Director ($49/mo flat, no hidden costs) and Sacred Grounds (cloud-based) explicitly targeting this gap. "Clunky, overpriced enterprise systems" quote from comparison sites. Most independent funeral homes on paper, Excel, or legacy desktop for case management, death certificates, and family communication. Market not won — new entrants confirm demand but no dominant affordable option. State death certificate forms compliance = moat. G2's funeral home category shows limited reviews = low software penetration = early market.

**Verdict**: BUILD
**Decision Status**: NEW — see `ideas/decisions.md`
**Next Steps**: Case intake → family comms portal → state-specific death certificate workflow → invoicing. Start with 3-5 states.
**Risks**: 1Director and Sacred Grounds = new entrants to monitor; state compliance per-state complexity
**Key Source Links**:
- https://eventpipe.com/blog/best-funeral-home-software
- https://www.g2.com/categories/funeral-home
- https://scan2remember.com/blogs/memorial-guides/funeral-tech-stack-review-2025
- https://www.capterra.com/funeral-home-software/
**Signal Frequency**: 12+ mentions across 3 months — stable

---

### 10. AI-Native Construction Estimating for Small Contractors — Score: 92/105
*(Existing shortlisted: `contractor-quoting-estimation.md`)*

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | JobTread #6 Deloitte Fast 500; Bidi AI estimating validates; Contractor Foreman $49/mo proves market |
| Competitor Weakness | 4/5 | Small GCs still on spreadsheets/paper; Buildxact $169-439/mo overkill |
| LTD Viability | 5/5 | Small contractors hate subscriptions; $199-299 LTD confirmed by source |
| No Free Tier | 4/5 | No credible free construction estimating |
| Channel Access | 4/5 | r/construction, roofing FB groups, NRCA channels |
| Content Potential | 4/5 | "roofing estimate software", "contractor estimating app" |
| AppSumo Fit | 5/5 | Small contractors are LTD buyers; clear ROI on won bids |
| Review Potential | 4/5 | Contractors review on G2/Capterra |
| MRR Path | 4/5 | Material pricing updates, integrations |
| Build Feasibility | 5/5 | GPT-4o vision + PDF estimate template = 2-week MVP |
| Boring Business Bonus | 5/5 | Construction estimating = unglamorous essential |

**Today's New Data (Trends)**: Mobile-first photo-to-estimate for 1-5 person specialty contractors (roofers, painters, landscapers). Take a photo → AI produces itemized estimate → send to customer. No desktop app, no onboarding call. JobTread fastest-growing; Bidi uses AI trained on actual sub pricing. Speed to market: 2 weeks. Strong LTD fit confirmed. $199-299 LTD for unlimited estimates.

**Verdict**: BUILD
**Decision Status**: NEW — see `ideas/decisions.md`
**Next Steps**: Mobile-first photo-to-estimate with local sub pricing database. Start with roofing (highest ticket, best ROI story).
**Risks**: JobTread moving fast with full platform; AI estimates need accuracy validation
**Key Source Links**:
- https://www.jobtread.com/
- https://www.bidicontracting.com/blog/best-construction-estimating-software-small-contractors
- https://contractorforeman.com/
**Signal Frequency**: 20+ mentions across 8 weeks — stable

---

### 11. Auto Detailing Business Management — Score: 87/105
*(Existing shortlisted: `pressure-washing-detailing.md`)*

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 4/5 | r/AutoDetailing 200K+ members; "what do you use?" threads appear monthly |
| Competitor Weakness | 5/5 | No dominant tool; detailers using 5-app stacks (Square + GCal + notes + Venmo + texts) |
| LTD Viability | 5/5 | Source rates this 5/5 "perfect AppSumo" — $59-99 LTD |
| No Free Tier | 4/5 | Square free but no vehicle history; detailers pay |
| Channel Access | 5/5 | r/AutoDetailing (200K+), Chemical Guys/Meguiar's supply vendors |
| Content Potential | 3/5 | "auto detailing software", "detailing business app" |
| AppSumo Fit | 4/5 | Mobile service + clear ROI + VIN killer feature |
| Review Potential | 3/5 | Smaller community than trades |
| MRR Path | 3/5 | $29-79/mo; smaller TAM than auro repair |
| Build Feasibility | 5/5 | VIN → car details auto-filled + before/after photos + route = 2-3 weeks |
| Boring Business Bonus | 4/5 | Auto detailing = boring service business |

**Today's New Data (HN/IH)**: Vehicle-specific CRM as killer feature: VIN tracking, service history per car, paint correction records — generic tools can't provide. Mobile-first (detailers work from phones in parking lots). Before/after photo storage per job. Route planning for mobile detailers. Automated review requests. Price $29-79/mo. r/AutoDetailing 200K+ members as distribution; Chemical Guys/Meguiar's distributor partnerships. Confirmed: "One app that does everything" is the phrase repeating in subreddit.

**Verdict**: BUILD
**Decision Status**: NEW — see `ideas/decisions.md`
**Next Steps**: VIN-centric vehicle profiles + before/after photos + mobile-first scheduling + route planning + review automation
**Risks**: Market smaller than trades; Generic tools may suffice for solo operators
**Key Source Links**:
- https://superframeworks.com/articles/untapped-underserved-micro-saas-niches
- r/AutoDetailing (200K+ members)
- r/autodetailing_business
**Signal Frequency**: 6+ mentions across 3 weeks — increasing

---

### 12. Craftplan — Micro-ERP for Small-Scale Manufacturers — Score: 85/105
*(Existing shortlisted: `micro-manufacturer-production.md`)*

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 4/5 | HN Show HN: 577 points, 167 comments, #18 best Show HN of 2026; open-source validates demand |
| Competitor Weakness | 5/5 | Creator released free — no commercial monetization; generic ERPs (Odoo) overkill |
| LTD Viability | 4/5 | $149 LTD for small bakery/soap maker; clear one-time appeal |
| No Free Tier | 3/5 | Craftplan itself is free/open-source |
| Channel Access | 4/5 | r/smallbusiness, bakery/soap/brewery communities |
| Content Potential | 4/5 | "bakery inventory management", "small manufacturer ERP" |
| AppSumo Fit | 4/5 | Artisan maker community is LTD-friendly |
| Review Potential | 4/5 | Makers leave detailed reviews in niche communities |
| MRR Path | 4/5 | Allergen/FDA compliance tracking as premium tier |
| Build Feasibility | 4/5 | BOM management + inventory = 4-6 weeks |
| Boring Business Bonus | 4/5 | Small manufacturing = unglamorous, essential |

**Today's New Data (HN)**: Craftplan concept — recipes (versioned BOMs with cost rollups), inventory (lot traceability, demand forecasting, allergen tracking), orders, production batch planning, purchasing — for sub-50-person makers. Built in Elixir/Ash. Founder built for wife's bakery. Released free with note "other small-scale manufacturers probably need the same things." Our angle: commercial SaaS version at $49-149/mo; vertical-specific flavors (bakery vs. soap maker vs. brewery); allergen/FDA compliance as premium tier.

**Verdict**: BUILD
**Decision Status**: NEW — see `ideas/decisions.md`
**Next Steps**: Commercial SaaS version of Craftplan for bakeries first (highest volume, FDA allergen requirements)
**Risks**: Craftplan open-source = price anchoring; small manufacturer TAM per vertical
**Key Source Links**:
- https://news.ycombinator.com/item?id=46847690
- https://news.ycombinator.com/item?id=46869383
**Signal Frequency**: 4+ mentions across 2 weeks — new/increasing

---

### 13. AI Voice Receptionist for Home Service Contractors — Score: 84/105
*(Existing shortlisted: `ai-voice-answering-trades.md`)*

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | $300-800 MRR per client validated; 62M SMBs missing calls; IH detailed revenue data |
| Competitor Weakness | 4/5 | Most SMBs don't know AI option exists; implementation arbitrage |
| LTD Viability | 2/5 | Requires ongoing voice AI infrastructure; pure recurring |
| No Free Tier | 4/5 | Answering services cost $300-600/mo; AI is competitive |
| Channel Access | 4/5 | Facebook groups for HVAC/plumbing, trade associations |
| Content Potential | 4/5 | "HVAC answering service alternative", "plumber missed call" |
| AppSumo Fit | 2/5 | Not LTD-suitable; MRR play |
| Review Potential | 4/5 | Contractors review if it prevents missed calls |
| MRR Path | 5/5 | $300-800/mo per client at 80% margin |
| Build Feasibility | 4/5 | Vapi/Bland + Twilio + simple FSM DB = 3-week MVP |
| Boring Business Bonus | 5/5 | Trades = deeply boring essential |

**Today's New Data (HN/IH)**: IH post with revenue breakdown: $1-2K setup + $300-800 MRR per client, ~80% margin, unit cost $50-100/month/client in infrastructure. Stack: Callin.io (white-label) + n8n + Cal.com. 62M+ SMBs in US/EU running on 2005 workflows. Trades miss 35-50% of inbound calls. Trends: trades AI voice agents gaining traction; ServiceTitan Atlas AI for enterprise ($5M+ revenue shops); SMB gap ($500K-$3M revenue) remains wide open. Full AI stack costs $300-800/mo with reported 1,500-3,000% ROI year one.

**Verdict**: BUILD (as productized vertical SaaS, not agency)
**Decision Status**: NEW — see `ideas/decisions.md`
**Next Steps**: Build "AI Receptionist for HVAC & Plumbing" — white-label Callin.io or Twilio+OpenAI. Sell via Facebook Groups + trade associations.
**Risks**: Commoditizing fast; VAPI/Bland/Callin license costs; voice AI quality inconsistency
**Key Source Links**:
- https://www.indiehackers.com/post/building-a-profitable-ai-voice-saas-agency-300-800-mrr-per-client-frAbgO1yQMfHOFFtY3gE
- https://relayfi.com/blog/9-game-changing-ai-tools-contractors-scale-2026/
**Signal Frequency**: 15+ mentions across 2 months — stable

---

### 14. Laundromat & Laundry Business Management — Score: 84/105
*(Existing shortlisted: `laundromat-management.md`)*

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 4/5 | 35K+ laundromats; pickup/delivery growing 15%+/year; CleanCloud validates market |
| Competitor Weakness | 4/5 | CleanCloud pricier for small ops; Cents newer; no clean solution for WDF/pickup-delivery |
| LTD Viability | 4/5 | $59 LTD viable for single-location |
| No Free Tier | 4/5 | All platforms paid |
| Channel Access | 3/5 | r/laundromat, laundry business Facebook groups |
| Content Potential | 3/5 | "laundromat management software", "wash and fold app" |
| AppSumo Fit | 4/5 | Clean niche, AppSumo-friendly ROI story |
| Review Potential | 3/5 | Laundromat owners do review niche software |
| MRR Path | 4/5 | $39/mo per location; multi-location upsell |
| Build Feasibility | 5/5 | Order tracking + route + SMS = 2-3 weeks |
| Boring Business Bonus | 5/5 | Laundromat = deeply boring essential service |

**Today's New Data (Reddit)**: Most laundry businesses on spreadsheets + paper tickets + manual delivery scheduling = data silos + performance blindness. Clothes get misplaced, orders mixed up, deliveries go off track. Pickup/delivery (fastest-growing segment) has no purpose-built affordable software. CleanCloud = market leader but expensive for small operators. For coin-laundry operators adding pickup/delivery, essentially no clean digital solution. New entrant Cents is growing but the market winner isn't clear.

**Verdict**: BUILD
**Decision Status**: NEW — see `ideas/decisions.md`
**Next Steps**: SMS order intake + bag/tag tracking + WDF workflow with weight + route optimization + automated customer SMS + subscription billing
**Risks**: Small TAM per operator; CleanCloud has head start; hardware integration expectations
**Key Source Links**:
- https://metrobi.com/blog/top-10-laundromat-software-solutions-to-your-business/
- https://laundrymarketing.agency/best-software-for-laundry-businesses/
- https://www.capterra.com/laundry-software/
**Signal Frequency**: 2 mentions across 3 days — new

---

### 15. AI Trucking Dispatch for Small Fleets — Score: 84/105
*(Existing shortlisted: `small-fleet-trucking-tms.md`)*

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 4/5 | $11.5B/yr unpaid detention fees; Numeo free up to 5 trucks; DispatchMVP $49/mo validates |
| Competitor Weakness | 4/5 | Small fleets (2-50 trucks) on spreadsheets, phone calls, WhatsApp |
| LTD Viability | 4/5 | $199-399 LTD to eliminate $200-400/mo dispatch service |
| No Free Tier | 3/5 | Numeo free up to 5 trucks = price floor competitor |
| Channel Access | 4/5 | Trucking Facebook groups, owner-operator forums |
| Content Potential | 4/5 | "dispatch software small trucking", "owner operator dispatch" |
| AppSumo Fit | 4/5 | Truckers are cost-sensitive; LTD converts well |
| Review Potential | 3/5 | Truckers review in niche forums |
| MRR Path | 4/5 | Fleet scaling, broker calling, AI negotiation |
| Build Feasibility | 4/5 | DAT API + AI calling + load tracking = 2-4 weeks |
| Boring Business Bonus | 5/5 | Trucking = deeply boring essential service |

**Today's New Data (Trends)**: AI can handle broker calling, rate negotiation, load matching, automated status updates. On-time delivery improves 10-15% with AI dispatch. New AI-native entrants: Numeo (free up to 5 trucks, $99/mo for 10 trucks), DispatchMVP (2-50 trucks, AI voice dispatch, $49/mo). White space: detention fee documentation + automated claims filing specifically for small carriers. Also: bilingual dispatch AI for Spanish-speaking owner-operators (large underserved demographic).

**Verdict**: EXPLORE FURTHER
**Decision Status**: NEW — see `ideas/decisions.md`
**Next Steps**: Validate specific white space: automated detention fee documentation + claims filing. Bilingual dispatch for Spanish-speaking operators.
**Risks**: Numeo free tier = price anchoring; DAT API costs; broker relationships needed
**Key Source Links**:
- https://dispatchmvp.ai/
- https://numeo.ai/
- https://www.torotms.com/blog/best-software-for-small-trucking-company
**Signal Frequency**: 10+ mentions across 4 weeks — stable

---

### 16. Tattoo Studio Management — Score: 83/105
*(Existing shortlisted: `tattoo-studio-management.md`)*

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 4/5 | 21K+ US studios; r/tattoo and tattoo business FB groups show pain repeatedly |
| Competitor Weakness | 4/5 | No dedicated dominant tool; studios using 3-4 apps duct-taped together |
| LTD Viability | 4/5 | $49-99/mo; tight-knit vocal community = great AppSumo |
| No Free Tier | 4/5 | No credible free tattoo studio software |
| Channel Access | 4/5 | Tattoo supply distributors, tattoo community FB groups, r/TattooArtists |
| Content Potential | 3/5 | "tattoo studio management software", "tattoo booking app" |
| AppSumo Fit | 4/5 | Tight-knit community + compliance angle = AppSumo-ready |
| Review Potential | 4/5 | Tattoo community is vocal and community-oriented |
| MRR Path | 4/5 | $49-99/mo per studio |
| Build Feasibility | 5/5 | Booking + deposits + digital consent forms + aftercare SMS = 2-3 weeks |
| Boring Business Bonus | 3/5 | Tattoo = semi-artsy but still service business |

**Today's New Data (HN/IH)**: Artists manage bookings via Instagram DMs, collect deposits via Venmo, track consent forms on paper. Digital consent forms + health history are legal requirements — this is a compliance tool. Studio owners value their time; high willingness to pay. "Tattoo Studio OS" — booking + deposits + digital consent forms + aftercare SMS. Partner with tattoo supply distributors for distribution. Compliance angle (digital consent forms replace paper liability) makes it must-have vs. nice-to-have.

**Verdict**: BUILD
**Decision Status**: NEW — see `ideas/decisions.md`
**Next Steps**: Booking + deposits + digital consent forms + aftercare SMS. Partner with tattoo supply distributors (Starbrite, Cheyenne) for B2B distribution.
**Risks**: Smaller TAM; some studios use generic booking (Fresha); compliance varies by state
**Key Source Links**:
- https://superframeworks.com/articles/untapped-underserved-micro-saas-niches
- https://www.nxcode.io/resources/news/micro-saas-ideas-2026
**Signal Frequency**: 5+ mentions across 2 months — stable

---

### 17. Pet Grooming Software with Unlimited SMS — Score: 91/105
*(Existing shortlisted: `pet-grooming.md`)*

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 4/5 | $10B+ US pet grooming; MoeGo/Gingr/DaySmart validate demand |
| Competitor Weakness | 4/5 | MoeGo SMS charged per-message = #1 complaint; Gingr built for boarding |
| LTD Viability | 5/5 | $59-79 LTD; "switch from MoeGo, no SMS fees" is clean marketing hook |
| No Free Tier | 3/5 | Square Appointments free but no pet features |
| Channel Access | 5/5 | Groomer FB groups (145K+ combined); NDGAA; Instagram-native niche |
| Content Potential | 4/5 | "dog grooming software", "MoeGo alternative no SMS fees" |
| AppSumo Fit | 4/5 | Demo-friendly before/after photos; natural viral marketing |
| Review Potential | 4/5 | Groomers are engaged, community-oriented |
| MRR Path | 3/5 | Per-groomer pricing; photo storage; mobile route optimization |
| Build Feasibility | 5/5 | Breed-aware scheduling + pet profiles + unlimited SMS = 2-3 weeks |
| Boring Business Bonus | 5/5 | Pet grooming = boring service business |

**Today's New Data (Reddit + HN)**: MoeGo is widely regarded as best-designed BUT its #1 complaint is SMS reminders charged per message — "the single most effective tool for reducing no-shows." Busy shop sending 30-50 confirmations/day = $40-100+/month add-on. Gingr is boarding-focused; requires groomers to work around many features. Solo groomers need simple scheduling with unlimited texting. HN confirms: 150,000+ mobile groomers in US; pet grooming FB groups confirm tool complaints; "Pet Groomer OS" validated by multiple IH sources as prime 2026 opportunity.

**Verdict**: BUILD
**Decision Status**: NEW — see `ideas/decisions.md`
**Next Steps**: Scheduling + unlimited SMS (Twilio flat-rate bundle) + breed/coat notes + vaccination tracking + tip collection; $39-69/mo flat
**Risks**: MoeGo could add unlimited SMS tier; small per-groomer revenue
**Key Source Links**:
- https://tryteddy.com/blog/moego-vs-gingr
- https://www.animalo.com/blog/animalo-vs-gingr-vs-moego-doggy-daycare-software
- https://www.softwareadvice.com/pet-grooming/
**Signal Frequency**: 15+ mentions across 3 months — increasing

---

### 18. Compliance & EHS Automation for Small Contractors — Score: 88/105
*(Existing shortlisted: `trade-safety-compliance.md`)*

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 4/5 | OSHA penalties up to $165K/violation; SafetyCulture validates enterprise end |
| Competitor Weakness | 4/5 | SafetyCulture targets enterprise; no mobile-first tool for 5-50 employee shops |
| LTD Viability | 4/5 | $299 LTD; compliance = must-have not nice-to-have |
| No Free Tier | 4/5 | Basic checklists only free; real compliance requires paid |
| Channel Access | 4/5 | OSHA-focused trade communities; construction safety FB groups |
| Content Potential | 4/5 | "OSHA compliance app small business", "contractor safety checklist" |
| AppSumo Fit | 4/5 | Must-have compliance angle; LTD works for one-time compliance tools |
| Review Potential | 4/5 | Contractors review compliance tools extensively |
| MRR Path | 4/5 | Annual subscription; regulation updates = stickiness |
| Build Feasibility | 5/5 | Checklist app + PDF report generation = 2-week MVP |
| Boring Business Bonus | 5/5 | Construction safety = deeply boring essential |

**Today's New Data (Trends)**: OSHA increased penalties Jan 2025 (serious violations now $16,550/case; repeat/willful up to $165,514). EPA advancing new PFAS/GHG rules. Electronic injury reporting requirements expanding. Compliance management software 13.8% CAGR through 2030. Mobile-first OSHA compliance: daily toolbox talks, injury logs, OSHA 300 log automation, inspection reports from phone. Price: $29-49/mo or $299 LTD.

**Verdict**: BUILD
**Decision Status**: NEW — see `ideas/decisions.md`
**Next Steps**: Mobile checklist app + OSHA 300 log automation + toolbox talk library + PDF export. Target roofing contractors first (highest OSHA risk).
**Risks**: Enterprise players (SafetyCulture) could launch low-tier product; regulation interpretation requires expertise
**Key Source Links**:
- https://safetyculture.com/apps/osha-compliance-software
- https://www.getfileflo.com/blog/osha-compliance-tracking-tool
- https://blr.com/resources/ehs-regulatory-outlook-2026-osha-epa-compliance-updates/
**Signal Frequency**: 8+ mentions across 3 months — stable

---

### 19. Craft Brewery Inventory Management — Score: 76/105
*(Existing shortlisted: `craft-brewery-management.md`)*

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 4/5 | 9,778 active craft breweries; $12K/yr average inventory loss; Ekos validates market |
| Competitor Weakness | 4/5 | Ekos/Orchestrated Beer target 20+ barrels; 6,000+ nano/micro breweries unserved |
| LTD Viability | 3/5 | Works but MRR preferred |
| No Free Tier | 4/5 | No credible free brewery software |
| Channel Access | 3/5 | r/TheBrewery, r/homebrewing, local brewing guilds |
| Content Potential | 3/5 | "craft brewery software", "TTB report automation" |
| AppSumo Fit | 3/5 | Niche but passionate community |
| Review Potential | 3/5 | Brewers review in niche forums |
| MRR Path | 4/5 | Compliance tier, keg tracking, recipe scaling |
| Build Feasibility | 4/5 | Batch tracking + inventory + TTB reports = 4-6 weeks |
| Boring Business Bonus | 4/5 | Nano brewery = unglamorous small manufacturing |

**Today's New Data (HN/IH)**: Breweries lose $12K/year to inventory issues. Ekos and Orchestrated Beer target 20+ barrel breweries. 6,000+ nano/micro (under 15 barrels) underserved. TTB compliance reports mandatory = regulatory forcing function. "BrewTrack Lite" at $79/mo: TTB report automation (saves hours + avoids fines) + fermentation log + keg inventory + ingredient reorder alerts.

**Verdict**: EXPLORE FURTHER
**Decision Status**: NEW — see `ideas/decisions.md`
**Next Steps**: Validate TTB report automation as wedge; interview nano brewery owners; target homebrewing-to-nano community
**Risks**: Smaller TAM; TTB reporting complexity varies by state; seasonal cash flow for breweries
**Key Source Links**:
- https://entrepreneurloop.com/bootstrapped-saas-niches-solo-founders/
- https://www.brewersassociation.org/ (9,778 active US craft breweries 2025)
**Signal Frequency**: 3+ mentions across 1 week — new

---

### 20. Escape Room / Experience Venue Management — Score: 75/105
*(Existing shortlisted: `escape-room-venue-booking.md`)*

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 3/5 | $1.2B+ industry; active Escape Room Owners FB group (3K+ members) |
| Competitor Weakness | 4/5 | Generic booking tools can't handle multi-room + GM scheduling; Booker is enterprise |
| LTD Viability | 4/5 | Venue owners are AppSumo buyers |
| No Free Tier | 4/5 | Escape rooms need specialized software |
| Channel Access | 4/5 | Escape Room Owners FB group; ERAA conference |
| Content Potential | 3/5 | "escape room booking software", "EscapeDesk" |
| AppSumo Fit | 4/5 | Niche + clear ROI on booking confusion |
| Review Potential | 4/5 | Venue owners leave reviews in niche communities |
| MRR Path | 3/5 | Gift cards, birthday packages; moderate MRR path |
| Build Feasibility | 4/5 | Multi-room booking + GM scheduling + waivers = 4-6 weeks |
| Boring Business Bonus | 3/5 | Experience venue = semi-entertainment, not boring |

**Today's New Data (HN/IH)**: "EscapeDesk" — booking + digital waiver signing + GM scheduling + gift cards + birthday package automation. Expand to axe throwing and rage rooms (same booking complexity). Generic booking tools (Calendly, Square) can't handle simultaneous multi-room + time constraints + GM assignment. 5,000+ independent US escape rooms need $79-149/mo option. Community: Escape Room Owners & Operators Facebook group (3,000+ members), ERAA conference.

**Verdict**: EXPLORE FURTHER
**Decision Status**: NEW — see `ideas/decisions.md`
**Next Steps**: Validate with Escape Room Owners FB group; build multi-room booking MVP
**Risks**: Smaller TAM; industry growth slowing post-COVID; Booker has installed base
**Key Source Links**:
- https://entrepreneurloop.com/bootstrapped-saas-niches-solo-founders/
- Escape Room Owners & Operators Facebook group (3,000+ members)
**Signal Frequency**: 5+ mentions across 6 weeks — stable

---

### 21. Party Rental Business Management — Score: 81/105
*(Existing shortlisted: `niche-equipment-rental.md`)*

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 3/5 | 50K party rental businesses in US; Rentman $15M ARR from AV rental = adjacent proof |
| Competitor Weakness | 5/5 | Rentman focuses on AV/production; no good party rental tool at $79-199/mo |
| LTD Viability | 4/5 | $59-99 LTD; small business owners = AppSumo audience |
| No Free Tier | 4/5 | No credible free party rental software |
| Channel Access | 3/5 | ARA (American Rental Association), party rental FB groups |
| Content Potential | 3/5 | "party rental software", "bounce house business software" |
| AppSumo Fit | 4/5 | Party rental owners = LTD buyers; clear ROI on booking confusion |
| Review Potential | 3/5 | Party rental operators review in niche communities |
| MRR Path | 4/5 | Inventory growth, delivery optimization, multi-location |
| Build Feasibility | 4/5 | Inventory availability + order + delivery route = 4-6 weeks |
| Boring Business Bonus | 5/5 | Party rental = boring essential service |

**Today's New Data (HN/IH)**: Rentman case study ($15M ARR) — founder ran AV rental company at 16, hated software, built own, sold to peers. Adjacent gap: party rental (tables, chairs, tents, linens, bounce houses). Same workflow as AV rental (availability, delivery scheduling, damage tracking) but different items. Linens with cleaning turnaround, bounce houses with safety inspection records. "PartyRental OS" — inventory availability calendar, order management, delivery route optimizer, damage tracking with photos, linen laundry tracking.

**Verdict**: EXPLORE FURTHER
**Decision Status**: NEW — see `ideas/decisions.md`
**Next Steps**: Validate with party rental FB groups; inventory availability engine is the core challenge
**Risks**: Highly seasonal (peaks weekends/summer); smaller TAM than hoped; Rentman could expand
**Key Source Links**:
- https://www.indiehackers.com/post/tech/building-a-15m-arr-saas-from-a-gap-he-found-at-his-brick-and-mortar-HFriCBQLHukAmdXVEj1q
- https://rentman.io/
**Signal Frequency**: 4+ mentions across 2 weeks — new

---

## Tier 2: Worth Exploring (Score 55-74)

### 22. Home Inspector Software Gap — Score: 73/105
*(Existing shortlisted: `home-inspector-crm.md`)*

Spectora dominates at $99-149/mo but many solo home inspectors (35K+ in US) can't justify the cost. Gap: mobile report writing + state-specific templates at $29-49/mo. Spectora is good and growing but not unbeatable for solo operators. Moderate competition, moderate LTD fit. Build feasibility is good (report template builder + mobile photos). Main weakness: Spectora is well-entrenched and reasonably priced for the value. Score held at Tier 2.

**Verdict**: PASS
**Risks**: Spectora is affordable enough; market too small for serious investment

---

### 23. Contractor Vetting B2B Marketplace — Score: 70/105
*(Existing shortlisted: `skilled-trades-workforce.md`)*

HN signal: home builders describe only 1-2 qualified subcontractors in their entire area. B2B vetting marketplace (general contractors rating subcontractors) is an interesting concept but requires marketplace dynamics (both sides must adopt). Ratings from other professionals > homeowners is the key insight. LTD doesn't fit marketplace models. Revenue: subscription for builders ($199/mo) + lead fees for contractors.

**Verdict**: PASS (marketplace cold-start problem)
**Risks**: Chicken-and-egg marketplace problem; Angi/HomeAdvisor have large budgets to enter B2B

---

## Tier 3: Weak / Pass (Score <55)

- **Trends Meta-Signal: Vertical SaaS wins in boring niches** — Not an actionable idea, macro confirmation of strategy
- **Legacy ERP Disruption meta-trend** — Too broad; already covered by specific vertical ideas above
- **AI Property Management** — Duplicates existing property-management.md; covered in Tier 1 above

---

## Top 3 Recommendations

1. **Landscaping / GrowCrew** — Service Autopilot Xplor migration is a live, time-sensitive switching wave happening RIGHT NOW. "SA alternative with chemical tracking and no processor lock-in" is a three-word elevator pitch. Chemical log compliance is legally required in most US states = must-have, not nice-to-have. Score: 100/105
   - Sources: competitor-analysis-2026-06-21, trends-2026-06-21
   - Key link: https://myquoteiq.com/best-service-autopilot-alternative-for-lawn-care-businesses/

2. **HVAC Flat-Rate Pricebook (PriceWrench)** — Today's competitor analysis provides the clearest gap ever documented: ServiceTitan's preloaded pricebook is enterprise-only; Housecall Pro's pricebook is entirely SELF-BUILT (no preloaded HVAC categories); Jobber has ZERO pricebook at any tier. The quarterly refrigerant cost update angle (R-454B +42% surcharge) is a new urgency signal. MVP is 1-2 weeks. Score: 93/105
   - Sources: competitor-analysis-2026-06-21
   - Key link: https://crewroute.app/resources/best/best-flat-rate-pricebook-software/

3. **Pet Grooming Unlimited SMS** — Today's Reddit data provides the cleanest value proposition: MoeGo is best-designed but SMS = $40-100+/mo add-on. "Same features as MoeGo but unlimited SMS included for $39/mo" is a one-sentence marketing campaign. LTD 5/5, 2-3 week MVP, 150K+ mobile groomers as TAM. Score: 91/105
   - Sources: reddit-2026-06-21, hn-indiehackers-2026-06-21
   - Key link: https://tryteddy.com/blog/moego-vs-gingr
