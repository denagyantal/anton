# Idea Evaluation — 2026-10-10

**Sources**: reddit-2026-10-10, hn-indiehackers-2026-10-10, trends-2026-10-10, competitor-analysis-2026-10-10, competitors-2026-10-10 (duplicate competitor file)
**Evaluator**: Idea Evaluator Agent
**Total ideas reviewed**: 28 distinct signals across 5 sources

---

## Deduplication Notes

All 28 ideas mapped against 100+ existing shortlisted files. Key mappings applied:
- FSM for Micro Trades → `hvac-small-shop-dispatch.md`
- Small Landlord All-in-One → `property-management.md`
- Cleaning Crew Scheduling → `cleaning-service-management.md`
- Pest Control Route Optimizer → `pest-control.md`
- Mobile Mechanic → `mobile-mechanic-software.md`
- Insurance Agency AMS → `insurance-agency-management.md`
- Auto Detailing Booking → `pressure-washing-detailing.md`
- Trades AR Chasing → `invoice-auto-followup-trades.md`
- Funeral Home Operations → `funeral-home-management.md`
- Septic/Wastewater Service → `septic-route-optimizer.md`
- HVAC Maintenance Agreements → `hvac-maintenance-agreements.md`
- Contractor Estimate + Profit → `contractor-quoting-estimation.md`
- Documentorium/Quote PDF → `contractor-quoting-estimation.md`
- Lawn Care Route Optimizer → `landscaping-lawn-care.md`
- Auto Repair Shop → `auto-repair-shop-management.md`
- SMB Compliance/License Tracking → `trade-license-renewal-tracker.md`
- Micro Rental Booking → `niche-equipment-rental.md`
- **NEW**: Bookkeeper CSV Data Cleaner → `bookkeeper-csv-data-cleaner.md` (created today)
- **NEW**: Service Business Financial Dashboard → `service-business-financial-dashboard.md` (created today)

---

## Tier 1: Strong Opportunities (Score 75+)

### 1. Pest Control Route & Compliance Tracker — Score: 97/105

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | GorillaDesk $49+/mo bootstrapped with 6,200+ customers; FieldRoutes (ServiceTitan) = active migration event; $2M ARR anonymous IH commenter; $22.7B→$29.1B market |
| Competitor Weakness | 5/5 | Chemical tracking absent from all affordable tools; FieldRoutes active migration event; GorillaDesk 25-stop routing limit ceiling hit by moderate-volume solo operators |
| LTD Viability | 4/5 | $99-149 LTD; "pass your state audit" pitch; operators love one-time deals |
| No Free Tier | 4/5 | No free pest control tools; compliance = non-discretionary purchase |
| Channel Access | 4/5 | r/pestcontrol, Pest Control Business Owners FB, NPMA; peer distribution confirmed |
| Content Potential | 5/5 | "pest control software", "EPA chemical log", "GorillaDesk alternative", "FieldRoutes alternative" |
| AppSumo Fit | 3/5 | Niche but compelling ROI story; GHS Revision 7 regulatory forcing function |
| Review Potential | 4/5 | Compliance stickiness = sticky customers = active reviewers |
| MRR Path | 4/5 | Per-tech or per-route monthly; EPA report generation = premium tier |
| Build Feasibility | 4/5 | Route optimization + chemical logging + recurring scheduling = 4-5 weeks |
| Boring Business Bonus | 5/5 | Pest control = deeply boring trade; VCs ignore this market entirely |

**Today's new signal**: Real-time same-day route reoptimization confirmed as unmet need — PestRoutes rebuilds routes overnight only. GorillaDesk 25-stop routing limit hit by solo operators on moderate-volume days. Chemical/pesticide usage tracking gap confirmed in state compliance context. FieldRoutes migration window = best-ever timing signal in category history.

**Verdict**: BUILD
**Decision Status**: NEW — see `ideas/decisions.md`
**Next Steps**: Target FieldRoutes/PestRoutes switchers (ServiceTitan acquisition = active migration event). Lead with EPA chemical compliance positioning as moat. "No lock-in + full data portability + EPA chemical log" = three-feature anti-FieldRoutes triad.
**Risks**: (1) GorillaDesk $49/mo floor is entrenched; (2) New AI entrants (EarthaPro, Cactus, PestPro.app); (3) Chemical tracking alone may not be enough moat if GorillaDesk adds it
**Key Source Links**:
- https://www.fieldproxy.ai/resources/blog/best-pest-control-software-ai-routing-2026
- https://pilotsuite.co/articles/best-pest-control-software
- https://capterra.com/p/146076/FieldRoutes/reviews
- https://www.contractorsoftwarehub.com/best-pest-control-software/
- https://myquoteiq.com/best-software-for-pest-control-startups/
**Signal Frequency**: 60+ mentions across 7+ months — strongly increasing, especially in Oct 2026

---

### 2. Property Management for Small Landlords — Score: 100/105

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | 18M individual US landlords, 70% own <10 units; Buildium/AppFolio/TurboTenant all proven; r/landlord 890K members |
| Competitor Weakness | 5/5 | Buildium +40% EFT fee hike Feb 2026 (6 price hikes in 3 years); AppFolio $250/mo minimum locks out <50-unit landlords; 13% of Buildium Trustpilot reviews are 1-star |
| LTD Viability | 5/5 | $79-149 LTD vs $55-375/mo; DoorLoop AppSumo launch proves category |
| No Free Tier | 3/5 | TurboTenant, Innago, Stessa offer free tiers (mitigation: all have pain points) |
| Channel Access | 5/5 | r/landlord 890K, BiggerPockets 2M+, FB "DIY Landlords", YouTube real estate channels |
| Content Potential | 5/5 | "landlord software", "Buildium alternative", "property management under 50 units" |
| AppSumo Fit | 5/5 | Landlord = price-sensitive deal-seeker; DoorLoop proves the model |
| Review Potential | 4/5 | Landlords review software actively on Capterra, G2 |
| MRR Path | 5/5 | Per-unit monthly or flat-fee tiered; portfolio growth = natural upsell |
| Build Feasibility | 4/5 | Maintenance request loop + rent collection + lease storage = 4-6 weeks |
| Boring Business Bonus | 4/5 | Property management = unglamorous, sticky customer base |

**Today's new signal**: Buildium EFT fee hike +40% in February 2026 — the 6th price hike in under 3 years. AppFolio explicitly not designed for <50 units. Maintenance loop (tenant request → contractor dispatch → invoice → accounting ledger) confirmed as unbuilt for DIY landlords without $250/mo plan. Competitor analysis: no tool under $250/mo closes the full maintenance loop end-to-end.

**Verdict**: BUILD
**Decision Status**: BUILDING (already shortlisted, ongoing BMAD pipeline)
**Next Steps**: "LandlordLoop" concept — maintenance cycle closure as #1 differentiator; flat $79 LTD for up to 20 units
**Risks**: (1) TurboTenant/Innago free tier creates adoption barrier; (2) Rent collection requires banking/ACH integration; (3) Tenant fee model subsidizes free competitors
**Key Source Links**:
- https://www.capterra.com/p/47428/Buildium-Property-Management-Software/reviews/?page=8
- https://www.workyard.com/compare/property-management-software-for-small-landlords
- https://capterra.com/rental-property-management-software/features/3298-tenant-portal/
- https://www.turbotenant.com/property-management-software/best-property-management-software-for-small-landlords/
**Signal Frequency**: 20+ mentions across 8 months — stable and consistent

---

### 3. Auto Repair Shop Management — Score: 100/105

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | 190K+ shops; Tekmetric 4.9/5 G2 = incumbent to displace; ShopMonkey $110M raised with only 2.6% penetration |
| Competitor Weakness | 5/5 | Tekmetric QBO connector requires third-party "The Back Office" that breaks; Mitchell 1 no cloud sync; AutoLeap annual contracts with hidden exit clauses; dead zone $79-119/mo |
| LTD Viability | 4/5 | $89 LTD confirmed; ongoing DVI storage cost = risk |
| No Free Tier | 4/5 | ARI $39.99/mo = lowest floor but too basic |
| Channel Access | 4/5 | r/MechanicAdvice, NAPA AutoCare FB groups, shop owner communities |
| Content Potential | 4/5 | "auto repair software small shop", "Tekmetric alternative", "QuickBooks auto repair" |
| AppSumo Fit | 3/5 | Auto repair underrepresented on AppSumo; moderate awareness |
| Review Potential | 4/5 | Shop owners actively review on G2/Capterra |
| MRR Path | 4/5 | DVI storage, parts ordering, customer portal upsells |
| Build Feasibility | 3/5 | VIN lookup, parts catalog, DVI, QBO API = higher complexity |
| Boring Business Bonus | 5/5 | Independent auto repair = deeply boring |

**Today's new signal**: Cross-platform competitor analysis confirms: (1) Tekmetric QBO → "The Back Office" third-party connector breaks = #1 complaint; (2) Mitchell 1 "no cloud sync" in 2026 = accountant depends on manual reports; (3) $79-119/mo gap with full features (digital inspections + QBO + SMS workflow + no annual contracts) = zero occupants. "ShopDesk" concept: direct QBO API integration (not a connector) = primary differentiator at $89 LTD.

**Verdict**: BUILD
**Decision Status**: NEW
**Next Steps**: Validate QBO API integration feasibility; build DVI as mobile-first capture; target NAPA AutoCare network as distribution channel
**Risks**: (1) Shopmonkey well-funded ($110M); (2) DVI/parts catalog requires significant mobile investment; (3) Mitchell 1 loyal user base despite poor UX
**Key Source Links**:
- https://blog.csiaccounting.com/top-shop-management-software-auto-repair-reviews-breakdown
- https://blog.torque360.co/best-auto-repair-software-for-small-shops/
- https://techroute66.com/auto-repair-management-software
- https://mysimplifix.com/blog/tekmetric-software-review
**Signal Frequency**: 15+ mentions across 6 months — increasing

---

### 4. Landscaping & Lawn Care Business OS — Score: 99/105

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | 600K+ businesses; LMN $297/mo; Service Autopilot collapse post-acquisition = active refugee market |
| Competitor Weakness | 5/5 | Jobber route optimization locked at $139/mo; Yardbook Android-only; SA post-acquisition collapsing; LMN $297/mo = massive dead zone |
| LTD Viability | 4/5 | $69 LTD; route optimization included at base price = clear AppSumo pitch |
| No Free Tier | 3/5 | Yardbook free tier with ads (mitigated by lack of iOS, route optimization) |
| Channel Access | 5/5 | r/lawncare 280K, LawnSite.com forums, FB "Lawn Care Business Owners" 100K+ |
| Content Potential | 5/5 | "lawn care software", "route optimization lawn care", "Service Autopilot alternative" |
| AppSumo Fit | 5/5 | Price-sensitive audience; $139/mo gap = textbook AppSumo opportunity |
| Review Potential | 4/5 | SA refugees actively seeking alternatives + writing reviews |
| MRR Path | 4/5 | Chemical tracking compliance, QuickBooks integration, crew payroll |
| Build Feasibility | 4/5 | Native iOS+Android + route optimization + chemical log = 4-6 weeks |
| Boring Business Bonus | 5/5 | Lawn care = deeply boring blue-collar market |

**Today's new signal**: Competitor analysis confirms Jobber route optimization locked behind $139/mo Connect plan — the advertised $49 plan doesn't include it. Yardbook web-based iOS (not native), ads on free tier, no dispatching. Clear dead zone: $30-60/mo range with full features genuinely empty. "CutRoute" concept: route optimization from day one (no gating), native mobile, chemical compliance log built in.

**Verdict**: BUILD
**Decision Status**: BUILDING (longstanding top-priority idea)
**Next Steps**: Build native iOS + Android app with route optimization at base price; target SA refugee market via Facebook groups
**Risks**: (1) Seasonal revenue pattern; (2) Yardbook free tier creates adoption barrier; (3) SA post-acquisition = lots of noise but complex migration path
**Key Source Links**:
- https://www.lawnstarter.com/blog/reviews/software/best-lawn-care-software/
- https://www.lawncareledger.com/articles/best-scheduling-software-lawn-care
- https://www.workyard.com/compare/lawn-care-scheduling-software
- https://capterra.com/p/122075/Service-Autopilot/
**Signal Frequency**: 40+ mentions across 8 months — very high and stable

---

### 5. Insurance Agency Management System (1-5 Agents) — Score: 96/105

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | 36,000+ indie agencies; HawkSoft $94/user confirmed; Applied Epic ~$150-200+/user; AMS360 $99+/user |
| Competitor Weakness | 5/5 | No flat-fee AMS under $50/mo; 41% of small agencies on Excel/Outlook indefinitely |
| LTD Viability | 4/5 | $89-119 LTD; category completely absent from AppSumo = first-mover |
| No Free Tier | 5/5 | No free AMS exists in the market |
| Channel Access | 4/5 | r/Insurance, r/InsuranceAgent, IIABA local chapters, Big "I" FB groups |
| Content Potential | 3/5 | "insurance agency software small", "AMS360 alternative", "affordable AMS micro agency" |
| AppSumo Fit | 4/5 | First AMS on AppSumo = category-first opportunity |
| Review Potential | 4/5 | Insurance professionals actively review tools |
| MRR Path | 5/5 | Policy renewals, compliance tracking, commission management = persistent recurring value |
| Build Feasibility | 4/5 | Client/policy DB + renewal reminders + commission calculator = 4-6 weeks |
| Boring Business Bonus | 5/5 | Insurance agency management = ignored by VCs, deeply sticky |

**Today's new signal**: Applied Epic alternatives confirmed as unaffordable for micro shops (<5 agents). NowCerts $99/mo and AgencyBloc $165-260/mo too expensive. No clean $35-60/mo flat product confirmed. New angle: producer license compliance tracking (per-state license renewals, CE credits, carrier appointments) — AgentSync $75M raised validates demand at enterprise but nothing at $49-99/mo for 5-producer shops.

**Verdict**: BUILD
**Decision Status**: BUILDING (in BMAD pipeline)
**Next Steps**: Add producer license compliance module as premium tier to differentiate from NowCerts/Jenesis
**Risks**: (1) Carrier API integration complexity; (2) High switching cost from established AMS; (3) E&O liability documentation requirements
**Key Source Links**:
- https://insurancesnapshotforghl.com/blog/applied-epic-alternatives-small-insurance-agencies/
- https://www.fuzen.io/posts/agencybloc-alternative-for-insurance-brokers-2026
- https://agencymate.com/insights/best-insurance-broker-software/
- https://glovebox.io/blog/best-insurance-agency-management-systems/
**Signal Frequency**: 25+ mentions across 6 months — stable

---

### 6. Invoice Auto-Follow-Up for Trades — Score: 95/105

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | $47K plumber case study; $40B+ estimated uncollected US contractor AR annually; 7,200/mo searches +45% growth |
| Competitor Weakness | 4/5 | Jobber buries follow-up behind $199/mo Grow; QuickBooks generic; no standalone trades tool |
| LTD Viability | 5/5 | $59-79 LTD; "one recovered invoice pays for the tool" = irresistible pitch |
| No Free Tier | 4/5 | No trades-specific free invoice follow-up |
| Channel Access | 5/5 | r/sweatystartup, r/Plumbing, r/HVAC, r/contractors, plumber/HVAC/cleaner FB groups |
| Content Potential | 4/5 | "invoice follow-up contractor", "plumber payment reminder", "contractor accounts receivable" |
| AppSumo Fit | 4/5 | Clear value pitch; immediate visible ROI after first recovery |
| Review Potential | 3/5 | "Set and forget" = moderate review motivation |
| MRR Path | 4/5 | SMS costs = recurring model; $15-25/mo natural; Stripe payment link = upsell |
| Build Feasibility | 5/5 | SMS + email sequences at 7/14/30 days + Stripe "pay now" link = 2-week MVP |
| Boring Business Bonus | 5/5 | Plumbers, HVAC techs, cleaners = deeply boring |

**Today's new signal**: US contractors leave an estimated $40B+ in accounts receivable uncollected annually. New differentiating angle: state-specific mechanics lien rights language in Day 30 notice — "notice of intent to file lien" as tool feature (most small contractors don't know their lien rights). No FSM has this + it dramatically increases payment urgency. QBO/Xero integration to pull overdue invoices = clear distribution path.

**Verdict**: BUILD
**Decision Status**: NEW
**Next Steps**: Add state-specific "notice of intent to lien" template as premium feature (legal review needed); build QBO/Xero integration for overdue invoice pull
**Risks**: (1) State-specific lien language requires legal review per state; (2) Relationship sensitivity — overly aggressive tone can damage customer relationships; (3) SMS costs = ongoing infra cost
**Key Source Links**:
- https://fieldcamp.ai/blog/best-field-service-management-software/
- https://buildops.com/resources/field-service-software-pricing
- https://www.ownrops.com/reviews/servicetitan
**Signal Frequency**: 15+ mentions across 4 months — increasing

---

### 7. Septic Route Optimizer — Score: 97/105

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | $51K/mo MRR proven; 340 paying customers at $150/mo; zero marketing spend; ~28K companies |
| Competitor Weakness | 5/5 | Zero purpose-built septic software; Google Maps + spreadsheets = the competitor |
| LTD Viability | 5/5 | $299-399 LTD; operators buy once and stay forever |
| No Free Tier | 5/5 | Nothing exists at any price point |
| Channel Access | 4/5 | NAWT forums, state septic associations, FB "Septic Tank Service Owners" |
| Content Potential | 4/5 | "septic service software", "septic route optimizer" — zero SEO competition |
| AppSumo Fit | 3/5 | Niche; confirmed via $51K/mo MRR proof |
| Review Potential | 4/5 | Small but tight-knit community |
| MRR Path | 5/5 | Compliance mandate = non-discretionary; county-level filing = recurring need |
| Build Feasibility | 4/5 | Route optimization + compliance records + waste manifests = 4-5 weeks |
| Boring Business Bonus | 5/5 | Septic pumping = maximally boring |

**Today's new signal**: State-mandated service interval tracking (3-5 years depending on state/county) per property confirmed as scheduling core. Waste disposal manifests — many states require tracking where waste is disposed (manifest per load). No purpose-built tool under $99/mo confirmed. "Septic pumping + grease trap + portable toilet rental + wastewater haulers" all have same route+compliance problem.

**Verdict**: BUILD
**Decision Status**: BUILDING (shortlisted)
**Next Steps**: Mandated interval tracking per property + state-specific compliance rules database = technical moat; waste manifest tracking as second core feature
**Risks**: (1) Small total addressable market (~28K companies); (2) Adjacent markets (grease trap, portable toilet) have different workflows; (3) May need county-by-county compliance rules database
**Key Source Links**:
- https://buildops.com/resources/hvac-dispatch-software
- https://www.fieldproxy.ai/resources/blog/best-pest-control-software-ai-routing-2026
- https://septicmind.com/best-septic-service-software-2026
**Signal Frequency**: 8 mentions across 3 months — stable

---

### 8. HVAC Small Shop Dispatch & Invoicing — Score: 93/105

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | ServiceTitan $250-500/tech/mo; 118K HVAC + 200K+ plumbing/electrical shops priced out; FieldPulse, EstimateKit validate |
| Competitor Weakness | 5/5 | $69-149/mo dead zone with HVAC-specific workflows; Jobber lacks equipment database (20-30 min manual entry per install) |
| LTD Viability | 4/5 | $79-99 LTD confirmed (up to 5-8 users); strong "never pay per-tech" story |
| No Free Tier | 4/5 | No free HVAC field service tools at this level |
| Channel Access | 4/5 | r/HVAC, HARDI/ACCA forums, HVAC Business Secrets FB 40K+ |
| Content Potential | 4/5 | "HVAC software small shop", "ServiceTitan alternative affordable", "flat rate FSM HVAC" |
| AppSumo Fit | 4/5 | Field service underrepresented on AppSumo; HVAC audience high-intent |
| Review Potential | 4/5 | HVAC shop owners review when they find the right tool |
| MRR Path | 4/5 | Customer portal add-on, GPS integration, maintenance agreement tracking |
| Build Feasibility | 4/5 | Dispatch + equipment history + pricebook + invoicing = 4-6 weeks |
| Boring Business Bonus | 5/5 | HVAC = deeply boring trade |

**Today's new signal**: Triple-source confirmation today. Reddit: flat-fee ($79-99/mo unlimited users) explicitly confirmed as unmet need — 80% of HVAC businesses priced out of per-tech models. HN/IH: MicroGaps analysis specifically names flat-fee FSM for 2-10 tech shops. Competitor: HCP Android app 3.3/5; GPS locked to higher tiers; add-ons compound $200+/mo. "HVAC Desk" concept: Manual J templates + equipment spec lookups (Carrier/Lennox/Trane databases) + flat pricing for teams up to 8.

**Verdict**: BUILD
**Decision Status**: NEW
**Next Steps**: Validate HVAC-specific estimating (Manual J templates) feasibility; target HVAC Business Secrets FB group (40K+) for pre-launch validation
**Risks**: (1) HCP/Jobber have large installed bases; (2) HVAC-specific estimating (load calcs) requires domain knowledge; (3) Probook $40M raise targeting same market
**Key Source Links**:
- https://estimatekit.com/blog/jobber-review-hvac-contractors-2026
- https://fieldcamp.ai/reviews/servicetitan/
- https://ustechautomations.com/resources/blog/servicetitan-alternatives-for-small-contractors-2026
- https://www.dispatchcore.io/blog/servicetitan-alternatives-small-business
**Signal Frequency**: 30+ mentions across 8 months — high and increasing (Oct 2026 = triple source)

---

### 9. HVAC Maintenance Agreement Tracker — Score: 93/105

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 4/5 | ServiceTitan $500+/mo handles this; 100K+ HVAC contractors; 55% HVAC revenue from agreements |
| Competitor Weakness | 5/5 | No standalone tool under $100/mo; ServiceTitan overkill; HCP requires upgrade |
| LTD Viability | 4/5 | $79-99 LTD; "never lose a contracted visit" = compelling ROI story |
| No Free Tier | 5/5 | No free maintenance agreement tracker exists |
| Channel Access | 4/5 | r/HVAC 250K+, ACCA 60K+ members, HVAC FB groups |
| Content Potential | 4/5 | "HVAC maintenance agreement software", "HVAC service contract tracking" |
| AppSumo Fit | 4/5 | Strong story: "replace spreadsheets, never miss a contracted visit" |
| Review Potential | 4/5 | Clear ROI makes reviews easy to write |
| MRR Path | 4/5 | Annual renewal tracking = natural recurring; QB integration upsell |
| Build Feasibility | 5/5 | CRUD + reminder logic; 2-3 week MVP |
| Boring Business Bonus | 5/5 | HVAC trades = deeply boring |

**Today's new signal**: MicroGaps analysis explicitly names HVAC maintenance agreement tracking at $29-49/mo as confirmed gap with 118K businesses using spreadsheets to track renewals. bdrco.com HVAC software guide confirms no standalone affordable tool. "One lapsed renewal per month pays for subscription many times over" = pitch confirmed. Score bumped +2 from MicroGaps explicit naming.

**Verdict**: BUILD
**Decision Status**: BUILDING (shortlisted, in pipeline)
**Next Steps**: Build MVP: customer/equipment roster + agreement renewal dates + automated SMS/email reminders + service visit log; $49/mo up to 50 agreements
**Risks**: (1) Could be positioned as FSM module rather than standalone; (2) Spreadsheet inertia; (3) Market size (100K contractors smaller than cleaning/landscaping)
**Key Source Links**:
- https://www.microgaps.com/blog/saas-niches-nobody-talking-about-2026
- https://www.microgaps.com/gaps/hvac-maintenance-agreement-manager
- https://www.bdrco.com/blog/hvac-business-software-guide/
- https://buildops.com/resources/hvac-service-agreement-software/
**Signal Frequency**: 10+ mentions across 5 months — increasing (MicroGaps explicit naming = strong signal)

---

### 10. Funeral Home Operations Platform — Score: 93/105

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 4/5 | 19K funeral homes; FuneralTech/FDMS/TerraPro all have paying customers; 85%+ independent |
| Competitor Weakness | 5/5 | FuneralTech/FDMS Windows-only locked; TerraPro $100/mo dated; 1Director $350/mo overkill |
| LTD Viability | 4/5 | $149-199 LTD; funeral homes price-sensitive, one-time payment responsive |
| No Free Tier | 5/5 | No free funeral home software; operations critical |
| Channel Access | 3/5 | FB groups 53K+ combined; NFDA; tight-knit word-of-mouth |
| Content Potential | 4/5 | "funeral home software", "funeral home QuickBooks integration" |
| AppSumo Fit | 3/5 | Niche but "modernize from paper" pitch compelling |
| Review Potential | 3/5 | Small but tight-knit community |
| MRR Path | 4/5 | Per-location pricing, document storage, family portal, pre-need tracking |
| Build Feasibility | 3/5 | Case management + FTC compliance + document generation + QB sync |
| Boring Business Bonus | 5/5 | Funeral homes = maximally boring |

**Today's new signal**: FuneralTech (MiMs) and FDMS confirmed as Windows-only with expensive support contracts. Small funeral homes (50-200 services/year) still on paper + QuickBooks + Word templates. 1Director $350/mo = overkill. Cloud-native FTC General Price List generator at $99/mo flat = confirmed unoccupied. Family portal for obituaries = missing from all affordable tools.

**Verdict**: BUILD
**Decision Status**: NEW
**Next Steps**: Build cloud-native FTC GPL generator as MVP core feature; $99/mo flat pricing vs $349/mo alternatives
**Risks**: (1) FTC regulatory compliance required from day 1; (2) Tight-knit industry = slow referral cycle; (3) Build complexity of arrangement forms + death certificate workflow
**Key Source Links**:
- https://www.deelo.ai/blog/best-funeral-home-software-2026
- https://zipdo.co/best/funeral-home-software/
- https://www.softwareworld.co/funeral-home-software-for-small-businesses/
**Signal Frequency**: 5 mentions across 3 months — stable niche

---

### 11. Contractor Quoting & Estimating Tool — Score: 93/105

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 4/5 | Joist acquired by Buildertrend; Documentorium "hundreds of paying users, almost all renewed"; multiple Show HN posts |
| Competitor Weakness | 4/5 | Joist $8/mo = basic; Jobber $39-199/mo = overkill; solo contractor profit tracker gap confirmed |
| LTD Viability | 5/5 | $59-89 LTD; simple CRUD tool; near-zero infra cost |
| No Free Tier | 4/5 | Trade-specific quoting with profit tracking = paid |
| Channel Access | 5/5 | r/sweatystartup 200K+, r/HVAC, r/electricians, FB trade groups |
| Content Potential | 5/5 | "contractor estimate app", "HVAC quoting software", "job profit tracker contractor" |
| AppSumo Fit | 5/5 | Simple tool, clear value, strong trade audience |
| Review Potential | 4/5 | Faster, professional quotes = reviews |
| MRR Path | 4/5 | Upsell to full CRM/invoicing; QuickBooks integration |
| Build Feasibility | 5/5 | Mobile quoting app + job closeout screen = 2-3 week MVP |
| Boring Business Bonus | 5/5 | Pure trades tool |

**Today's new signal**: Documentorium (HN Show HN) has "hundreds of paying users, almost all renewed their yearly subscription" in another market — strong validation of the annual pricing model. MicroGaps confirms Solo Contractor Estimate + Profit Tracker gap: Joist users (large base, $8/mo) stuck tracking profitability in spreadsheets. Two-screen app (estimate creation + job closeout comparison) = fastest possible MVP.

**Verdict**: BUILD
**Decision Status**: BUILDING (shortlisted)
**Next Steps**: Target Joist users explicitly (import Joist estimates via CSV); position as "job profit tracker" rather than "estimating tool"
**Risks**: (1) Joist already serves estimating need adequately for many; (2) Solo contractors may not pay for analytics
**Key Source Links**:
- https://news.ycombinator.com/item?id=47540841
- https://www.microgaps.com/blog/saas-niches-nobody-talking-about-2026
- https://documentorium.com/
**Signal Frequency**: 20+ mentions across 8 months — consistent

---

### 12. Mobile Mechanic Software — Score: 91/105

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 4/5 | Mobile mechanic market projected $23.1B by 2033; 150K+ independent mobile mechanics; 34% growth post-COVID |
| Competitor Weakness | 5/5 | All shop software (Torque360, Mitchell1) built for service bays; mobile-specific features locked behind higher tiers |
| LTD Viability | 4/5 | $59-79 LTD for solo operators; no compliance overhead |
| No Free Tier | 4/5 | No free mobile mechanic tools |
| Channel Access | 4/5 | r/mechanic 400K+, r/AutoMechanic, mobile mechanic FB groups |
| Content Potential | 3/5 | "mobile mechanic app", "mobile mechanic software" — low competition |
| AppSumo Fit | 4/5 | Mobile-first, passionate niche, clear ROI |
| Review Potential | 4/5 | Active communities; motivated by shop-software frustration |
| MRR Path | 4/5 | Parts ordering integration, fleet expansion tiers |
| Build Feasibility | 5/5 | Booking + route clustering + inspection + invoice + payment = 2-3 weeks |
| Boring Business Bonus | 5/5 | Auto mechanic = deeply boring trade |

**Today's new signal**: Drive time scheduling explicitly confirmed as #1 gap — mobile mechanics booking two jobs 45 minutes apart with 30 minutes drive time = constant scheduling mistake. Torque360 (most popular tool) locks field-invoicing (building/sending invoices from the vehicle) behind a higher pricing tier — solo operators discover this after signing up. Route-aware scheduling with travel time warnings = new specific product feature. Score bumped +2 from drive time scheduling detail.

**Verdict**: BUILD
**Decision Status**: BUILDING (shortlisted)
**Next Steps**: Route-aware scheduling (shows drive time between jobs, warns on conflicts) as primary differentiator vs. Torque360; parts lookup integration
**Risks**: (1) 150K mobile mechanics is smaller than other markets; (2) Torque360 already established; (3) Parts lookup API integration cost
**Key Source Links**:
- https://pro.trackara.app/blog/mobile-mechanic-software
- https://servicebusinessacademy.org/top-6-invoicing-software-mobile-mechanics-2026/
- https://www.torque360.co/mobile-mechanic-software/
**Signal Frequency**: 12+ mentions across 5 months — stable, increasing

---

### 13. Trade License & Certification Renewal Tracker — Score: 91/105

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 4/5 | CE Broker proves model (healthcare); 3.5M+ licensed tradespeople; AgentSync $75M validates enterprise version |
| Competitor Weakness | 5/5 | CE Broker = healthcare only; no multi-trade tracker at SMB price; state-specific rules database = moat |
| LTD Viability | 4/5 | $199-299 LTD; "never let a license lapse" pitch |
| No Free Tier | 4/5 | No free trade license tracker |
| Channel Access | 4/5 | r/HVAC, r/contractors, ACCA, trade association forums |
| Content Potential | 4/5 | "contractor license renewal tracking", "HVAC EPA certification tracker" |
| AppSumo Fit | 4/5 | "Never miss a renewal" resonates strongly with trade business owners |
| Review Potential | 3/5 | Moderate — set-and-forget nature limits review motivation |
| MRR Path | 4/5 | Annual renewal calendar = recurring value; CE credit logging = premium |
| Build Feasibility | 5/5 | CRUD app with reminders + document upload = 3-4 weeks |
| Boring Business Bonus | 5/5 | HVAC/electrical/plumbing contractors = deeply boring |

**Today's new signal**: RegTech market confirmed at $20B → $116B by 2036 (19.2% CAGR). SMB trade shops face: state licenses, EPA certifications, OSHA 10/30 cards, vehicle inspections, insurance certificates — all tracked in spreadsheets or memory. "Never lose a job because your tech's EPA 608 card expired" = vivid $3-10K real-world loss. Score bumped +2 from RegTech market sizing + BMAD pipeline validation (market research and brief completed Oct 9).

**Verdict**: BUILD
**Decision Status**: BUILDING (BMAD market research + product brief completed 2026-10-09)
**Next Steps**: State-specific license renewal rules database = technical moat to build first; launch with HVAC EPA 608 certification as MVP wedge
**Risks**: (1) State database maintenance overhead; (2) ACCA/trade associations may build their own tools; (3) Low urgency until license lapses
**Key Source Links**:
- https://redwerk.com/blog/micro-saas-ideas-that-print-money/
- https://www.futuremarketinsights.com/reports/regtech-market
- https://cynomi.com/learn/compliance-management-software-solutions/
- https://www.safeboxtech.com/blogs/compliance-in-2026-what-smbs-need-to-know-about-new-regulations/
**Signal Frequency**: 6 mentions across 2 months — new idea, increasing

---

### 14. Cleaning Business Management — Score: 86/105

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 4/5 | 1.1M cleaning businesses; ZenMaid validates (raised prices, driving refugees); r/CleaningBusiness active |
| Competitor Weakness | 4/5 | ZenMaid: scheduling only; Connecteam: not cleaning-specific; Jobber: too expensive |
| LTD Viability | 4/5 | $79 LTD for up to 10 cleaners; payroll integration add-on |
| No Free Tier | 3/5 | Some generic HR tools offer free tiers |
| Channel Access | 4/5 | r/sweatystartup, r/CleaningBusiness, cleaning biz FB groups |
| Content Potential | 3/5 | "cleaning business software", "ZenMaid alternative" |
| AppSumo Fit | 3/5 | Moderate — cleaning is niche on AppSumo |
| Review Potential | 3/5 | Cleaning owners review tools they switch to |
| MRR Path | 4/5 | Payroll integration, GPS tracking, multi-location expansion |
| Build Feasibility | 4/5 | Scheduling + escalation alerts + time tracking + Gusto API = 4-5 weeks |
| Boring Business Bonus | 4/5 | Residential cleaning = boring, blue-collar |

**Today's new signal**: New differentiation angle: tiered escalation when a cleaner no-shows — automatically alerts nearest available cleaner first, then backup list, then supervisor only if nobody confirms within 12 minutes. No cleaning software handles this workflow today. ZenMaid/Connecteam focus on scheduling/invoicing but not crew-coverage escalation. Also: W-2 cleaners time tracking → payroll in one tool = unoccupied for 5-15 cleaner operations. Score bumped +2 from specific escalation feature gap.

**Verdict**: BUILD
**Decision Status**: BUILDING (shortlisted)
**Next Steps**: Tiered escalation for no-shows as primary differentiator; Gusto payroll API integration as second feature
**Risks**: (1) Escalation workflow complexity; (2) ZenMaid and Connecteam have established user bases; (3) Payroll integration = compliance liability
**Key Source Links**:
- https://connecteam.com/cleaning-business-software-solutions/
- https://ustechautomations.com/resources/blog/why-cleaning-teams-best-crew-scheduling-alert-software-2026
- https://www.zenmaid.com/magazine/the-best-cleaning-business-software-in-2026/
**Signal Frequency**: 10+ mentions across 5 months — stable

---

### 15. Auto Detailing & Pressure Washing CRM — Score: 86/105

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 4/5 | r/AutoDetailing 1M+, r/pressurewashing 280K+; no-show rates 12-18% = documented industry problem |
| Competitor Weakness | 4/5 | Generic schedulers (Square, Calendly) miss duration-aware and geographic clustering |
| LTD Viability | 4/5 | $59 LTD for solo detailers; low infra cost |
| No Free Tier | 3/5 | Square/Calendly free tiers exist |
| Channel Access | 4/5 | r/AutoDetailing, r/pressurewashing, r/sweatystartup |
| Content Potential | 3/5 | "auto detailing software", "detailing booking app" |
| AppSumo Fit | 4/5 | Solo operator audience responds well to LTD |
| Review Potential | 3/5 | Moderate |
| MRR Path | 3/5 | SMS reminders = small ongoing cost; upsell geographic clustering |
| Build Feasibility | 5/5 | Service duration presets + SMS reminders + Stripe deposit = 2-3 weeks |
| Boring Business Bonus | 4/5 | Auto detailing/pressure washing = unglamorous |

**Today's new signal**: Confirmed no-show rates: 12-18% without automated SMS reminders → drops to 4-7% with reminders. Duration-aware scheduling (full detail = 4 hours vs quick wash = 45 minutes) confirmed as gap in generic schedulers. Geographic job clustering for mobile detailers = specific feature missing from all tools. Auto detailing businesses confirm spreadsheet scheduling + text confirmations as status quo.

**Verdict**: BUILD
**Decision Status**: BUILDING (shortlisted as pressure-washing-detailing.md)
**Next Steps**: Auto detailing-specific service duration presets + geographic clustering as primary differentiators vs Square/Calendly
**Risks**: (1) Square/Calendly have strong brand recognition; (2) $29/mo pricing ceiling limits revenue; (3) Seasonal nature of detailing
**Key Source Links**:
- https://www.guideflow.com/blog/auto-detailing-software
- https://myquoteiq.com/best-self-scheduling-software-auto-detailing-2026/
- https://www.xenia.team/articles/mobile-car-wash-software
**Signal Frequency**: 8 mentions across 3 months — stable

---

### 16. Bookkeeper CSV Data Cleaner — Score: 78/105 ⭐ NEW

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 3/5 | IH $750 MRR proof; founder observation: "thousands of small workflow problems nobody builds tools for" |
| Competitor Weakness | 4/5 | No dedicated bookkeeper CSV converter tool; Excel macros are the workaround |
| LTD Viability | 5/5 | Near-zero infra cost; natural LTD at $49-79 |
| No Free Tier | 4/5 | Excel can do this but not cleanly; no dedicated tool |
| Channel Access | 3/5 | Bookkeeper FB groups, r/accounting, r/bookkeeping, VA communities |
| Content Potential | 3/5 | "bookkeeper CSV converter", "invoice data cleaner", "bank statement format converter" |
| AppSumo Fit | 4/5 | Simple utility tool; clear ROI (saves 15-30 min/week) |
| Review Potential | 3/5 | Bookkeepers review tools in their communities |
| MRR Path | 3/5 | $15-25/mo natural; MRR ceiling limited for narrow tool |
| Build Feasibility | 5/5 | CSV parsing + format conversion + cleaning rules = 1-week build |
| Boring Business Bonus | 4/5 | Bookkeepers = boring professional service |

**Today's new signal**: IH post confirms $750 MRR from CSV automation tool for bookkeepers/accountants. "While everyone chases the next AI unicorn, there are thousands of small workflow problems businesses deal with every day." Pattern: bank statement reconciliation, expense report formatting, payroll data conversion — each is a small, unglamorous tool with a paying audience. Build one, grow via bookkeeper communities. LTD at $49-79 viable since infra cost is near zero.

**Verdict**: BUILD (small MVP first, validate before investing deeply)
**Decision Status**: NEW — first identification today
**Next Steps**: Target the Joist user adjacency — export Joist estimates to QuickBooks format; or target bookkeeper bank statement reformatting (common pain)
**Risks**: (1) MRR ceiling is low for narrow tool; (2) AI coding tools making this trivially buildable by users; (3) Limited growth potential beyond $3-5K MRR
**Key Source Links**:
- https://www.indiehackers.com/post/how-a-simple-csv-converter-reached-750-mrr-in-just-months-d3ff74cbad
**Signal Frequency**: 1 mention today — new idea

---

### 17. Service Business Financial Dashboard — Score: 77/105 ⭐ NEW

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 3/5 | "The Nut Report" on Product Hunt; Housecall Pro +$96K MRR with trade-specific packages validates demand |
| Competitor Weakness | 4/5 | No "hiring decision calculator" layer on Jobber/HCP APIs; Jobber has dashboards but not "can I afford to hire" framing |
| LTD Viability | 4/5 | $99-199 LTD "know if you can afford to hire your next tech" |
| No Free Tier | 3/5 | Basic QuickBooks dashboards exist; not FSM-native |
| Channel Access | 4/5 | r/sweatystartup, Jobber/HCP user communities, HVAC FB groups |
| Content Potential | 3/5 | "service business profitability", "can I afford to hire", "HVAC business calculator" |
| AppSumo Fit | 4/5 | Clear ROI story; service business owners understand the question |
| Review Potential | 3/5 | Moderate |
| MRR Path | 4/5 | Monthly data refresh from FSM APIs = recurring value |
| Build Feasibility | 4/5 | Read-only API integration on Jobber/HCP = 3-4 weeks |
| Boring Business Bonus | 3/5 | Service businesses = moderately boring |

**Today's new signal**: "The Nut Report" (Product Hunt) targets Jobber/HCP/ServiceTitan users with a single decision-view: "Can I afford to hire someone? Should I take on more work?" PLMBR's investors observe: owners don't need more data, they need fewer decisions to make manually. Housecall Pro +$96K MRR from trade-specific SaaS packages confirms demand for vertical depth. "Financial clarity layer on top of existing FSM" = read-only API integration = fastest possible MVP.

**Verdict**: EXPLORE FURTHER
**Decision Status**: NEW — first identification today
**Next Steps**: Build read-only Jobber API dashboard showing revenue/cost/profit + "hiring threshold" calculator; position as add-on to Jobber users
**Risks**: (1) Jobber could build this natively; (2) FSM platforms restrict API access; (3) Limited differentiation vs general business dashboards
**Key Source Links**:
- https://www.producthunt.com/p/introduce-yourself/hey-product-hunt-i-m-chad-founder-of-the-nut-report-here-s-why-i-built-it
- https://www.saasrise.com/news/housecall-pro-adds-96k-mrr-with-tradespecific-saas-for-hvac-plumbing-and-electrical
**Signal Frequency**: 1 mention today — new idea

---

### 18. Niche Equipment Rental Operations Software — Score: 78/105

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 4/5 | Rentman $15-20M ARR bootstrapped = ceiling proof; 80K+ solo rental operators |
| Competitor Weakness | 4/5 | EZRentOut starts $89/mo (built for construction fleets); nothing purpose-built under $29/mo for 5-50 item operators |
| LTD Viability | 5/5 | $59-79 LTD; "Calendly for rental items"; minimal infra |
| No Free Tier | 3/5 | Some improvise with Calendly |
| Channel Access | 3/5 | Bounce house FB groups, kayak rental owner groups, DJ rental communities |
| Content Potential | 3/5 | "bounce house rental software", "equipment rental booking" |
| AppSumo Fit | 4/5 | Calendly-model, low infra, LTD appetite |
| Review Potential | 3/5 | Niche but motivated users |
| MRR Path | 3/5 | $15/mo for basic; $39/mo with damage waivers + deposits |
| Build Feasibility | 5/5 | Booking page + availability calendar + Stripe deposit + damage waiver PDF = 2 weeks |
| Boring Business Bonus | 4/5 | Bounce houses, kayak rental = boring |

**Today's new signal**: MicroGaps explicitly confirms micro rental booking for solo operators as gap. "$15/month booking page: show item availability, pick dates, collect deposit, generate damage waiver. That's the entire product." EZRentOut fleet GPS and maintenance modules = worthless for someone renting 15 kayaks. Rentman's $15-20M ARR bootstrapped = market ceiling proof for adjacent verticals (photography studio gear rental, tent/linen rental, AV for weddings).

**Verdict**: EXPLORE FURTHER
**Decision Status**: NEW — micro rental angle added today (existing file at 76/105)
**Next Steps**: Build "Calendly for rental items" — focus on bounce houses as first vertical (largest Facebook groups, clear use case)
**Risks**: (1) Calendly extends into this; (2) Low price point limits revenue; (3) Adjacent verticals have different damage waiver needs
**Key Source Links**:
- https://www.microgaps.com/blog/saas-niches-nobody-talking-about-2026
- https://www.indiehackers.com/post/tech/building-a-15m-arr-saas-from-a-gap-he-found-at-his-brick-and-mortar-HFriCBQLHukAmdXVEj1q
- https://rentman.io/
**Signal Frequency**: 5 mentions across 2 months — stable

---

## Tier 2: Worth Exploring (Score 55-74)

### Small Event Venue Booking Software — Score: 71/105

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 3/5 | 72K+ small venues; Google Calendar is the competitor |
| Competitor Weakness | 4/5 | Tripleseat/Perfect Venue $79-150/mo built for hotel banquet halls |
| LTD Viability | 4/5 | Simple tool; $29-49/mo or $79 LTD |
| No Free Tier | 3/5 | Calendly exists but lacks deposits/contracts |
| Channel Access | 3/5 | Photography studio communities, venue rental groups |
| Content Potential | 3/5 | "event venue booking software", "photography studio booking" |
| AppSumo Fit | 4/5 | Calendly-style tools do well on AppSumo |
| Review Potential | 3/5 | Solo operators leave reviews |
| MRR Path | 3/5 | Clear SaaS model at $29-49/mo |
| Build Feasibility | 5/5 | Calendly + Stripe + PDF contract = 2 weeks |
| Boring Business Bonus | 2/5 | Event venues = not very boring |

**Verdict**: EXPLORE FURTHER — lower priority than core trades verticals; build Feasibility is high but Boring Business Bonus is low

---

### AI Voice Agent for Small Trades — Score: 68/105

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | Avoca $1B valuation; Probook $40M raise; HVAC loses 40-55% of after-hours calls |
| Competitor Weakness | 3/5 | Well-funded competitors (Avoca, IVAI, Newo) already targeting this |
| LTD Viability | 3/5 | Ongoing AI call costs = recurring model required |
| No Free Tier | 4/5 | No free voice AI for trades |
| Channel Access | 4/5 | r/HVAC, r/Plumbing, HVAC FB groups |
| Content Potential | 4/5 | "AI answering service HVAC", "after-hours call answering plumbing" |
| AppSumo Fit | 3/5 | $299-499 LTD moderate; ongoing AI costs limit LTD sustainability |
| Review Potential | 3/5 | Moderate |
| MRR Path | 4/5 | Clear recurring model |
| Build Feasibility | 3/5 | Vapi/Retell infra available but trade-specific customization needed |
| Boring Business Bonus | 5/5 | HVAC/plumbing = deeply boring |

**Verdict**: PASS as standalone product — signal confirms trend but Avoca/Probook are well-funded; our team is better positioned in non-AI-voice niches; this is market intelligence not a build recommendation

---

### Restaurant Tip Compliance & Payroll — Score: 62/105

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 3/5 | 500K+ independent restaurants; FLSA tip compliance real issue |
| Competitor Weakness | 3/5 | Toast Payroll, 7shifts, Restaurant365 all partially address |
| LTD Viability | 1/5 | Payroll is inherently recurring; LTD doesn't work for payroll |
| No Free Tier | 4/5 | No free tip compliance tools |
| Channel Access | 3/5 | r/restaurateur 150K members |
| Content Potential | 3/5 | "restaurant tip pooling compliance", "tip credit software" |
| AppSumo Fit | 2/5 | Poor — payroll tools don't work as LTDs |
| Review Potential | 3/5 | Moderate |
| MRR Path | 4/5 | Strong recurring model at $79-99/mo |
| Build Feasibility | 2/5 | Payroll = complex legally (state tax filing, FLSA compliance) |
| Boring Business Bonus | 3/5 | Restaurants = moderately boring |

**Verdict**: PASS for us — payroll requires ongoing legal/tax compliance work; LTD model doesn't fit; space occupied by well-funded competitors

---

### Contractor Back-Office AI Agents — Score: 65/105

**One-liner**: PLMBR model ($10.5-25K/yr ACV) — AI handles proposals, customer comms, scheduling, invoicing, project coordination for small contractors.
**Key issue**: Capital-intensive AI infrastructure; PLMBR has early VC backing; annual contract model, not LTD. Good trend signal but not ideal for our LTD-first model.
**Verdict**: PASS as standalone product — better as a feature of the existing contractor quoting/FSM tools we're building.

---

### Franchise Multi-Location Operations Software — Score: 55/105

**One-liner**: PE-backed HVAC/plumbing/pest roll-ups need cross-location performance benchmarking across ServiceTitan/Jobber/HCP APIs.
**Key issue**: Poor LTD fit; PE/enterprise buyers want contracts, not LTDs; capital-intensive; team is better positioned at SMB level.
**Verdict**: PASS — trend to watch but not a build recommendation for our team.

---

## Tier 3: Weak / Pass (Score <55)

- **Manufacturing ERP for Job Shops** (45/105): Too complex for 4-person team; SAP/Acumatica have deep incumbent moats; no clear LTD path.
- **AI Lawn Diagnosis + Lead Gen (territory licensing)**: Interesting monetization model but not a direct SaaS build; too dependent on AI infra + geographic territory management.
- **Rainslice.ai (Autonomous Home Services AI)**: Running 3 real cleaning companies is impressive but too capital-intensive and operationally complex for bootstrapped team. Good market signal.
- **Rentman AV/Event Production (direct build)**: Rentman already has $15-20M ARR; building a direct competitor is inadvisable. Better to target adjacent verticals (niche equipment rental).

---

## Top 3 Recommendations

1. **Pest Control Route & Compliance Tracker** — Score: 97/105 — active FieldRoutes migration event creates best-ever acquisition timing; $2M ARR solo IH commenter proves ceiling; GorillaDesk's 25-stop routing limit hitting real operators = urgent gap today. Sources: https://capterra.com/p/146076/FieldRoutes/reviews, https://gorilladesk.com, https://www.contractorsoftwarehub.com/best-pest-control-software/

2. **Invoice Auto-Follow-Up for Trades** — Score: 95/105 — $40B+ uncollected contractor AR annually; state-specific lien rights language = untapped differentiator no competitor has; 2-week MVP with clear LTD pitch: "one recovered invoice pays for the tool." Sources: https://fieldcamp.ai/blog/best-field-service-management-software/, https://buildops.com/resources/field-service-software-pricing

3. **HVAC Maintenance Agreement Tracker** — Score: 93/105 — MicroGaps explicitly names this gap; 118K HVAC businesses tracking agreement renewals in spreadsheets; 55% of HVAC revenue = maintenance agreements; 2-3 week MVP, $49/mo, strong AppSumo story: "never lose a contracted visit." Sources: https://www.microgaps.com/blog/saas-niches-nobody-talking-about-2026, https://www.bdrco.com/blog/hvac-business-software-guide/

---

## Cross-Cutting Signals from Today

1. **Probook $40M + Avoca $1B = VC validating trades market at scale** — but both target mid-market ($1M+ revenue shops). The 1-5 technician owner-operator is still underserved. This is confirmation we're in the right space.

2. **FieldRoutes/PestRoutes migration window** — ServiceTitan acquisition = active churn event in pest control and lawn care. This is the best distribution opportunity in these categories right now.

3. **MicroGaps confirms 3 specific gaps today**: (1) HVAC maintenance agreement tracker at $29-49/mo, (2) flat-fee FSM for 2-10 tech shops, (3) solo contractor estimate + profit tracker. External market research explicitly validating our existing shortlisted ideas = very strong signal.

4. **Route optimization gating** is the #1 competitor weakness across all field service verticals — Jobber, Housecall Pro, Yardbook all lock route optimization behind premium tiers. Any entrant that includes it at base price immediately wins the value perception battle.

5. **QuickBooks integration is universally broken** across auto repair, lawn care, HVAC, and property management. Native QBO integration (not a third-party connector) is a concrete technical differentiator in any of these verticals.
