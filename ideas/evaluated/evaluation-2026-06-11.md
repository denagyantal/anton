# Idea Evaluation - 2026-06-11

**Sources**: reddit-2026-06-11, hn-indiehackers-2026-06-11, competitor-analysis-2026-06-11, competitor-analysis-boring-biz-2026-06-11, trends-2026-06-11
**Evaluator**: idea-evaluator agent

---

## Deduplication Check

All ideas from today's raw files map to existing shortlisted files. No new canonical files needed — auto detailing maps to `pressure-washing-detailing.md`, small trucking to `owner-operator-trucking-tms.md`, bookkeeping to `bookkeeping-accounting.md`.

| Today's Idea | Maps To | Action |
|---|---|---|
| HVAC Dispatching Alternative (ServiceTitan) | hvac-small-shop-dispatch.md | Update signal ↑1 |
| HVAC Proposal Add-on for Jobber | hvac-small-shop-dispatch.md | Merged |
| HVAC Field App (BTU calc + wiring) | field-service-management.md | Update signal (technical angle) |
| Lawn Care All-in-One / GreenRoute | landscaping-lawn-care.md | Update signal stable |
| Property Management Small Portfolio / LandlordKit | property-management.md | Update signal stable |
| PM Multi-Platform Listing Syndication | property-management.md | Merged (new international angle) |
| Auto Detailing Shop Management | pressure-washing-detailing.md | Update signal ↑1 |
| Auto Repair / ShopDesk | auto-repair-shop-management.md | Update signal stable |
| BookkeeperHub / Solo Bookkeeper Practice Mgmt | bookkeeping-accounting.md | Update signal ↑1 |
| Receipt Scanning + QB Batch Upload | bookkeeping-accounting.md | Merged |
| All-in-One Back-Office for Small Service Biz | specialty-trade-back-office.md | Update signal |
| Small Trucking / IFTA + ELD | owner-operator-trucking-tms.md | Update signal ↑1 |
| Invoicing with Partial Payments + Follow-up | simple-invoicing-freelancers.md | Update signal |
| Booking-to-Invoice Auto-Generation | booking-widget-no-show-reducer.md | Update signal |
| Trades-Specific Hiring & Vetting | skilled-trades-workforce.md | Update signal |
| Simple Payroll <10 Employees | (Tier 3 — no LTD viability) | No file update |
| Pest Control Vertical SaaS | pest-control.md | Update signal |
| AI Voice Agent for Home Services | ai-voice-answering-trades.md | Update signal |
| AV/Event Equipment Rental (Rentman clone) | av-event-production.md | Update signal |
| Dental Front Desk AI | dental-practice.md | Update signal |
| Property Management API Aggregator | property-management.md | Merged |
| Boring Business Acquisition Pattern (Ask HN) | (meta-signal across all files) | Cross-file note |
| Healthcare Small Practice AI / Chiro SOAP Notes | chiropractic-ehr-billing.md | Update signal |
| Roofing/Construction Digital | roofing-contractor-crm.md | Update signal |
| Micro-SaaS Boring Utilities | specialty-trade-back-office.md | Merged |
| Small Fleet Trucking TMS (5–50 trucks) | small-fleet-tms.md | Update signal |

---

## Tier 1: Strong Opportunities (Score 75+)

### 1. Lawn Care All-in-One / GreenRoute — Score: 100/105 (STABLE)

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | 6-year operator says "haven't come across a system that handles logistics AND subscriptions/payment." Someone built open-source alternative. $1.57B→$2.27B market, 600K+ businesses. |
| Competitor Weakness | 5/5 | RealGreen $300+/mo collapsing post-acquisition; SA post-Xplor: 25% hike + GPS removed + payment lock-in; LMN $297/mo "not intuitive"; Yardbook Android-only; no tool under $100/mo with chemical compliance. |
| LTD Viability | 5/5 | $149 LTD vs $1,800–$3,564/yr SA/LMN = instant ROI pitch. Solo operators explicitly want to pay once. |
| No Free Tier | 4/5 | Yardbook exists free but Android-only + very limited. |
| Channel Access | 5/5 | r/lawncare 900K+, LawnSite.com 1M+, "Lawn Care Business Owners" FB 150K+. |
| Content Potential | 5/5 | "Service Autopilot alternative" + chemical compliance = high organic search intent. |
| AppSumo Fit | 5/5 | No lawn-care-specific tool on AppSumo. SA refugee wave = ready audience now. |
| Review Potential | 4/5 | SA users motivated to switch and vocal in forums. |
| MRR Path | 5/5 | $49/mo solo → $99/mo 5 crews → AI route optimizer add-on. |
| Build Feasibility | 5/5 | Route scheduling + recurring billing + chemical log + SMS = 3–4 week MVP. |
| Boring Business Bonus | 5/5 | Lawn care = deeply boring, seasonal, non-glamorous. |

**Verdict**: BUILD
**Decision Status**: BUILDING — see `../ideas/decisions.md`
**Next Steps**: SA refugee positioning. Flat $49/mo unlimited crew. Core: recurring route scheduling + chemical compliance log (state-auto-generated) + flat payment processing (no Stripe lock-in) + crew app (iOS + Android). The chemical log is the ONLY feature SA had that nobody else has, and SA is collapsing.
**Risks**: GorillaDesk expanding to lawn care. RealGreen may lower pricing. Yardbook may add iOS.
**Key Source Links**:
- https://www.reddit.com/r/lawncare/comments/1iz43ob/what_appssoftware_do_you_recommend/
- https://www.reddit.com/r/lawncare/comments/1jpw5vi/comparing_jobber_pricing_to_alternative_crms/
- https://www.capterra.com/p/78106/Service-Assistant/reviews/
- https://www.lawnsite.com/threads/service-autopilot-vs-real-green.477290/
- https://outdoorservicehub.com/blog/housecall-pro-review/
**Signal Frequency**: All 3 relevant sources today — 100+ signal instances since March 2026 — stable at max

---

### 2. Small Landlord Property Management (1–50 Units) / LandlordKit — Score: 100/105 (STABLE)

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | AppFolio 50-unit minimum + $298/mo; Buildium hidden fees; 17M+ individual US landlords; new angle today: room-by-room rental + utility sub-metering billing gap. |
| Competitor Weakness | 5/5 | AppFolio hard-coded 50-unit gate. Buildium hidden $99 bank setup + per-EFT fees. TurboTenant 10-day payment delays. Innago app broken 50% of time. |
| LTD Viability | 5/5 | $99–149 LTD vs $700+/yr Buildium. Landlord software ABSENT from AppSumo = first-mover. |
| No Free Tier | 3/5 | TurboTenant, Innago, Stessa free but feature-limited. |
| Channel Access | 5/5 | r/Landlord 700K+, BiggerPockets 2M+, "Small Landlords" FB 200K+. |
| Content Potential | 5/5 | "AppFolio alternative small landlords", "Buildium pricing small portfolio" = high intent. |
| AppSumo Fit | 5/5 | Zero landlord PM tools on AppSumo = category-first opportunity. |
| Review Potential | 4/5 | Motivated switchers saving $1,000+/yr will review. |
| MRR Path | 5/5 | $29/mo flat → per-unit upsell → AI lease generation → tenant screening credits. |
| Build Feasibility | 4/5 | Rent collection + maintenance portal + Schedule E + lease storage = 4–6 week MVP. |
| Boring Business Bonus | 4/5 | Property management: unglamorous, non-VC-funded at small-landlord tier. |

**Verdict**: BUILD
**Decision Status**: BUILDING
**Next Steps**: Flat $29/mo for 1–20 units. Zero per-transaction fees. 2-day ACH. Maintenance request portal with photo threads. Schedule E tax export. State-specific late fee compliance checker (only tool at any price to have this). TODAY: new angle confirmed — room-by-room rental support + utility sub-metering billing.
**Risks**: Leasense (2026 AI-native entrant) validates but creates competition. Free tools commoditizing basic rent collection.
**Key Source Links**:
- https://www.reddit.com/r/PropertyManagement/comments/1kh1qmn/best_software_for_small_portfolios/
- https://www.shukrentals.com/learn/property-management-software-for-small-landlords
- https://dealflowaistack.com/best-property-management-software-small-landlords/
- https://www.g2.com/products/appfolio-property-manager/reviews
- https://www.leasense.com/blog/best-property-management-software-small-landlords-under-100-units
**Signal Frequency**: All 3 relevant sources today — 130+ signal instances since March 2026 — stable at max

---

### 3. Auto Repair Shop Management / ShopDesk — Score: 100/105 (STABLE)

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | 280K+ independent shops; Mitchell1 BBB billing fraud documented; Tekmetric $179–439/mo; $30.12B market at 14% CAGR. |
| Competitor Weakness | 5/5 | Mitchell1 Windows-only; Tekmetric no native QBO sync; Shopmonkey forced proprietary payment processor; AutoLeap annual contracts + 60-day cancel notice; $50–150/mo dead zone confirmed. |
| LTD Viability | 5/5 | $199 LTD vs $2,148+/yr Shopmonkey; ROI immediate (vendor AP reconciliation finds missed credits). |
| No Free Tier | 4/5 | ARI $20/mo basic but too limited for multi-bay shops. |
| Channel Access | 5/5 | r/MechanicAdvice, r/Justrolledintotheshop, NAPA AutoCare FB groups (100K+), ASE forums. |
| Content Potential | 5/5 | "Tekmetric alternative", "Shopmonkey alternative", "auto repair software small shop" = high intent. |
| AppSumo Fit | 5/5 | No mainstream auto repair tool has run AppSumo = category-first. |
| Review Potential | 4/5 | Mitchell1/Shopmonkey refugees = highly motivated reviewers. |
| MRR Path | 5/5 | $79/mo → AI service advisor add-on → multi-location pricing. |
| Build Feasibility | 5/5 | Cloud RO + photo DVI + SMS customer portal + QB sync = 4–6 week MVP. |
| Boring Business Bonus | 5/5 | Independent auto repair = deeply boring, non-glamorous, non-VC. |

**Verdict**: BUILD
**Decision Status**: BUILDING
**Next Steps**: $79/mo flat (unlimited users/bays). Vendor AP reconciliation (missed credits, flagged duplicates = pays for itself). Native QBO sync. Photo DVI with SMS customer approval. No annual contracts, no forced payment processor.
**Risks**: Tekmetric/Shopmonkey could add affordable tiers. ServiceUp $55M Series B = enterprise validation but confirms category interest.
**Key Source Links**:
- https://www.bbb.org/us/ca/san-diego/profile/auto-repair-equipment/mitchell1-1126-29000405/complaints
- https://www.g2.com/products/shopmonkey/reviews
- https://www.capterra.com/p/190952/Tekmetric/reviews/
- https://blog.torque360.co/auto-repair-software-pricing-2026/
- https://techroute66.com/auto-repair-management-software
**Signal Frequency**: All 3 relevant sources today — 100+ signal instances — stable at max

---

### 4. HVAC Small Shop Dispatch / HVACDesk — Score: 93/105 (↑1)

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | 5+ distinct Reddit threads in r/HVAC in 2 months; ServiceTitan $22K unauthorized charges documented on BBB; 300K+ HVAC companies in US. |
| Competitor Weakness | 5/5 | ServiceTitan $245–500/tech/mo + $5K–$50K onboarding; Housecall Pro per-user pricing = 1 owner + 9 crew = $324/mo before add-ons; FieldEdge hidden setup fees $299–$599; $99–$149/mo flat dead zone confirmed. |
| LTD Viability | 5/5 | $249 LTD (up to 5 techs) = compelling vs $3,500+/mo ServiceTitan. |
| No Free Tier | 4/5 | ServiceAgent AI free tier but no features. |
| Channel Access | 5/5 | r/HVAC 100K+, ACCA forums, HVAC School podcast community, HARDI group FB. |
| Content Potential | 5/5 | "ServiceTitan alternative", "affordable HVAC software", "Jobber HVAC" = massive search volume. |
| AppSumo Fit | 4/5 | "Anti-ServiceTitan" positioning is marketable; HVAC niche well-defined. |
| Review Potential | 4/5 | HVAC operators motivated by $3,500/mo switching event. |
| MRR Path | 5/5 | $99/mo flat → AI voice receptionist add-on → multi-tech tiers. |
| Build Feasibility | 5/5 | Scheduling + dispatch + flat-rate HVAC pricebook + equipment history + QB sync = 4 week MVP. |
| Boring Business Bonus | 5/5 | HVAC = deeply boring, blue-collar, non-VC-attractive. |

**Verdict**: BUILD
**Decision Status**: BUILDING
**Next Steps**: Flat $99/mo (unlimited techs). HVAC-specific flat-rate pricebook preloaded. Per-address equipment history. Maintenance agreement automation. 30-minute onboarding. TODAY: proposal add-on confirmed (good/better/best tiers + financing calculator = missing from Jobber, direct request from r/HVAC).
**Risks**: FieldPulse ($99–249/mo) is a potential substitute. Jobber could add HVAC pricebook. AI voice scheduling (ServiceAgent) capturing inbound leads.
**Key Source Links**:
- https://www.reddit.com/r/HVAC/comments/1jvd1k9/dispatching_software/
- https://www.reddit.com/r/HVAC/comments/1kouder/proposal_software/
- https://fieldcamp.ai/reviews/servicetitan/
- https://hvacsoftwarehub.com/hvac/pricing/fieldedge-pricing/
- https://www.capterra.com/p/150053/ServiceTitan/reviews/
**Signal Frequency**: 5 distinct Reddit threads in r/HVAC this month + full competitor analysis today — increasing

---

### 5. Solo Bookkeeper Practice Management / BookkeeperHub — Score: 97/105 (↑1)

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | TaxDome $600–$800/user/yr (annual upfront); Canopy $150/mo base → $400–600/mo with modules; Jetpack workflow-only; QB Desktop 2023 EOL May 2026 forcing migrations; 400% cumulative price increases. |
| Competitor Weakness | 5/5 | TODAY CONFIRMATION: TaxDome annual payment trap; Canopy complex modular pricing ("complex and confusing pricing structure" = top complaint); Jetpack has NO client portal, no invoicing; sub-$50/mo solo segment "essentially empty." |
| LTD Viability | 5/5 | $79 LTD vs $600+/yr TaxDome = 10x cheaper for same core workflow. Magic-link client portal = zero tenant friction = AppSumo pitch. |
| No Free Tier | 4/5 | QBO Accountant free but zero practice management. |
| Channel Access | 5/5 | r/Bookkeeping, r/accounting, "Bookkeepers" FB 80K+, Bookkeeper Business Academy, Hector Garcia YouTube. |
| Content Potential | 5/5 | "TaxDome alternative", "Canopy alternative for solo bookkeepers", QB Desktop refugees. |
| AppSumo Fit | 5/5 | Bookkeeper community is deal-seeking; LTD removes "is it worth the monthly?" friction entirely. |
| Review Potential | 4/5 | Solo bookkeepers saving $600+/yr are vocal and community-active. |
| MRR Path | 5/5 | $29/mo flat for 25 clients → $49/mo for 50 clients → AI transaction categorization add-on. |
| Build Feasibility | 5/5 | Magic-link client portal + QBO/Xero transaction Q&A queue + monthly report generator + close-status CRM = 3–4 week MVP. |
| Boring Business Bonus | 4/5 | Solo bookkeeping practice: unglamorous professional services, non-VC. |

**Verdict**: BUILD
**Decision Status**: BUILDING
**Next Steps**: $29/mo flat (up to 25 clients). TODAY's key angle: transaction Q&A loop is the core daily pain — client portal where uncategorized QBO/Xero transactions appear inline for client to answer. Eliminates back-and-forth emails. $79 LTD is the AppSumo pitch vs $600+/yr TaxDome.
**Risks**: Double (doublehq.com) is purpose-built for bookkeepers but $8/client/mo adds up quickly. TaxDome could release cheaper solo tier.
**Key Source Links**:
- https://doublehq.com/blog/best-bookkeeping-practice-management-software/
- https://usefoyer.com/blog/taxdome-vs-canopy
- https://www.g2.com/products/taxdome/reviews
- https://www.capterra.com/p/207956/Canopy/
- https://www.xenett.com/blog/top-bookkeeping-practice-management-software
**Signal Frequency**: Strong single competitor-analysis source + receipt scanning confirmation (merged) — increasing

---

### 6. Auto Detailing Shop Management — Score: 95/105 (↑1)

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | "Built our own custom system" = strongest possible signal. 50K+ detailing businesses. $18.7B market growing 16% annually. Multiple "what software do you use" threads. |
| Competitor Weakness | 5/5 | Square, Jobber, generic salon tools = none built for detailing. No upsell notification feature. No vehicle-centric workflows. Most detailers on Excel spreadsheets. |
| LTD Viability | 5/5 | $39–59/mo or $59 LTD. Detailers are scrappy operators who love one-time deals. |
| No Free Tier | 4/5 | Square free but zero vehicle-specific features. |
| Channel Access | 5/5 | r/AutoDetailing 1.8M members = highest-reach Reddit community of today's scan. |
| Content Potential | 4/5 | "Auto detailing software", "detailing shop management app" = solid search intent. |
| AppSumo Fit | 4/5 | Clear niche, demonstrable feature (mid-job upsell SMS). |
| Review Potential | 4/5 | Detailers love sharing tools in community; vocal online. |
| MRR Path | 4/5 | $39/mo solo → $59/mo shop; fleet account B2B upsell = natural growth path. |
| Build Feasibility | 5/5 | Vehicle profiles + appointment booking + mid-job SMS upsell + payment + review request = 3–4 week MVP. |
| Boring Business Bonus | 5/5 | Auto detailing = blue-collar, physical service, non-glamorous. |

**Verdict**: BUILD
**Decision Status**: VALIDATING
**Next Steps**: Core = vehicle history profiles (service history by car, not by customer), mid-job SMS upsell notifications, appointment booking, payment collection, review request automation. TODAY: "upsell mid-service" angle is unique — no tool anywhere does this. $39/mo solo, $59/mo shop.
**Risks**: ROXO Hub $39.99/mo entering the space. Anolla AI dynamic pricing = early competitor.
**Key Source Links**:
- https://www.reddit.com/r/AutoDetailing/comments/1b8bks8/so_we_tried_a_few_software_including_square_and/
- https://www.reddit.com/r/AutoDetailing/comments/1kb5522/does_something_like_this_exist/
- https://roxohub.com/blog/best-software-mobile-auto-detailers-2026/
- https://fieldd.co/mobile-carwash-software
- https://anolla.com/en/best-auto-detailing-software
**Signal Frequency**: 5+ distinct Reddit threads in r/AutoDetailing + trends confirming — increasing

---

### 7. Small Trucking Operations (ELD + IFTA + Dispatch) / OwnerOpTMS — Score: 89/105 (↑1)

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | 500K+ small trucking companies in US; family trucking company "still using paper logs in 2024"; ELD fee complaint post score 10; IFTA manual nightmare documented. |
| Competitor Weakness | 5/5 | Samsara/Geotab built for 50+ fleets; only 25 SaaS companies with 6K combined customers vs 500K+ companies = massive white space; no affordable all-in-one under $50/mo flat. |
| LTD Viability | 4/5 | Truckers hate recurring fees; $299–499 LTD for ELD+IFTA+dispatch = very viable. |
| No Free Tier | 4/5 | AscendTMS free tier exists but very limited (no IFTA, no driver payroll). |
| Channel Access | 4/5 | r/Trucking, r/OwnerOperators, OOIDA 150K members, CDL Life forums. |
| Content Potential | 4/5 | "IFTA reporting software for small carriers", "ELD for owner operators" = high intent. |
| AppSumo Fit | 4/5 | Truckers hate subscriptions; one-time ELD/IFTA tool would do well. |
| Review Potential | 3/5 | Truckers less active on review sites but OOIDA = strong advocacy channel. |
| MRR Path | 4/5 | $39/mo flat → $79/mo fleet tier → HazMat compliance add-on. |
| Build Feasibility | 4/5 | ELD integration adds 2–3 weeks complexity vs pure FSM. 5–8 week MVP realistic. |
| Boring Business Bonus | 5/5 | Small trucking = deeply boring, blue-collar, overlooked by VC. |

**Verdict**: BUILD (VALIDATING)
**Decision Status**: VALIDATING
**Next Steps**: Flat $39/mo for 1–5 trucks: ELD (BYOD phone), IFTA auto-generated quarterly reports from GPS data, basic load dispatch, driver payroll. TODAY: Reddit confirms 7-truck family company on paper logs in 2024 + ELD monthly fee resentment. Key differentiator: IFTA included (not a $5/truck add-on). LTD $79 (1–3 trucks lifetime).
**Risks**: Truckbase $99/mo, Toro TMS $149/mo = growing competition. ELD compliance complexity is non-trivial to build. AscendTMS free tier captures solo operators.
**Key Source Links**:
- https://www.reddit.com/r/Trucking/comments/5efc0i/what_are_the_main_challenges_for_small_trucking/
- https://www.reddit.com/r/Trucking/comments/20k6r4/building_a_new_ifta_reporting_software/
- https://www.torotms.com/blog/best-software-for-small-trucking-company
- https://truckpedia.io/resources/best-trucking-software-small-fleets
- https://getlatka.com/companies/industries/i-trucking-software
**Signal Frequency**: 5 Reddit threads confirmed + trends (Truckbase/Truckpedia validates) — increasing

---

### 8. AI Voice Agent for Home Services Scheduling — Score: 87/105 (STABLE)

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | Avoca raised $125M at $1B valuation for AI call handling in home services. IH builder at $300–$800 MRR per client. 30–60% of trade calls missed after hours = $300–$1,500 lost job each. |
| Competitor Weakness | 4/5 | Avoca targets 20+ tech operations (enterprise). Bland.ai/Vapi are generic, not HVAC/plumbing-specific. Purpose-built sub-$99/mo gap confirmed for 1–10 tech shops. |
| LTD Viability | 4/5 | "Lifetime AI receptionist credits" model viable. $199 LTD = replaces $1,500/mo dispatcher. |
| No Free Tier | 4/5 | ServiceAgent AI has free tier but distribution-limited. |
| Channel Access | 4/5 | r/HVAC, r/Plumbing, trade Facebook groups, HVAC School podcast. |
| Content Potential | 4/5 | "HVAC answering service", "after hours HVAC dispatch", "AI phone agent for contractors" = good intent. |
| AppSumo Fit | 4/5 | "AI receptionist for your trade business" is demonstrable; $199 LTD compelling. |
| Review Potential | 3/5 | More adoption-barrier than competitor-barrier. |
| MRR Path | 4/5 | $49–99/mo → per-call overage → CRM integration add-on. |
| Build Feasibility | 4/5 | 2–4 weeks using ElevenLabs/Vapi + Cal.com + FSM webhook; HVAC-specific call flows = differentiation. |
| Boring Business Bonus | 4/5 | HVAC/plumbing/pest control = boring industries. |

**Verdict**: EXPLORE FURTHER
**Decision Status**: VALIDATING
**Next Steps**: Purpose-built for one vertical (HVAC-only to start). AI handles inbound calls 24/7: captures service request, checks technician calendars, books appointment, sends confirmation text. Integrates with Jobber/ServiceTitan via webhook. TODAY: IH builder confirms $300–$800 MRR/client using Callin.io + n8n + Cal.com stack = validated as agency model, needs productization.
**Risks**: Avoca $125M makes enterprise segment hard. Rosie, Trillet, Marlie.ai = sub-$100 tier already crowded. Distribution (trades companies don't buy online) is hardest problem.
**Key Source Links**:
- https://www.indiehackers.com/post/building-a-profitable-ai-voice-saas-agency-300-800-mrr-per-client-frAbgO1yQMfHOFFtY3gE
- https://news.ycombinator.com/item?id=47385090
- https://serviceagent.ai/blogs/hvac-scheduling-software/
- https://leadtruffle.co/blog/best-ai-answering-services-contractors-2026
**Signal Frequency**: HN + IH + Trends confirmed today — stable, growing market evidence

---

## Tier 2: Worth Exploring (Score 55–74)

### Healthcare Small Practice AI / Chiro SOAP Notes — Score: 82/105

**Summary**: AI-powered SOAP note generation from voice for chiropractors and physical therapists. 1-5 provider practices face HIPAA 2025 compliance pressure + Medicare fee cuts + rising audit risk but can't afford enterprise EHR. Veterinary practices = sleeper hit ($2.1B market, 9% CAGR, almost no AI-native tools). Existing: `chiropractic-ehr-billing.md` + `vetscribe-ai-soap-notes.md`.
**Signal Today**: Trends source confirms ASC compliance deadlines + billing compliance 2026. PracticeSuite targeting small practices. AdvancedMD mid-market leaves <5 provider tier wide open.
**Key Links**: https://www.certifyhealth.com/blog/asc-technology-gap-purpose-built-software-2026/ | https://kaizenus.com/medical-billing-compliance-2026/
**Why Tier 2**: Strong signal but multiple well-funded competitors (Arini YC-backed, Dentina, Zirco). Distribution is challenging (healthcare practices don't buy from AppSumo). $299–799 LTD = strong pricing, longer sales cycle.

---

### Roofing/Construction Digital Handoff — Score: 78/105

**Summary**: End-to-end job handoff tool connecting estimate → purchase order → crew schedule in one click for sub-$5M roofing companies. 67% using enterprise software but one-third still haven't adopted same-day follow-up. "The estimate lives in one system, the schedule in another, the material order is on a sticky note." Existing: `roofing-contractor-crm.md`.
**Signal Today**: Trends: roofing contractors betting on tech for 2026; 40% using AI (up from 29% in 2024); CompanyCam, JobNimbus, Acculynx = each solves a piece but no unified handoff.
**Key Links**: https://www.roofingcontractor.com/articles/101759-roofing-contractors-bet-on-tech-for-growth-in-2026 | https://companycam.com/resources/blog/
**Why Tier 2**: Roofing software is more competitive than it looks (Acculynx, JobNimbus are competent). $199–399 LTD viable but roofing seasonality + storm-chasing = complex ICP.

---

### Pest Control Vertical SaaS — Score: 78/105

**Summary**: Technician-first distribution model (free mobile app for techs that becomes a sales channel into their operators). GorillaDesk 3,100+ customers validates bootstrap. PestRoutes $10.8M ARR (acquired). PE-consolidated market but many smaller operators still on pen-and-paper. Existing: `pest-control.md`.
**Signal Today**: HN thread (Show HN: "I took a technician job to build vertical SaaS for pest control") — HN commenter reports $2M ARR from pest control SaaS in the thread.
**Key Links**: https://news.ycombinator.com/item?id=47509571 | https://gorilladesk.com/ | https://getlatka.com/companies/pestroutes-software
**Why Tier 2**: GorillaDesk is strong and growing. Technician-first distribution is clever but unproven. Signal solid but market is more competitive than lawn care.

---

### All-in-One Back-Office for Small Service Businesses — Score: 76/105

**Summary**: Single platform for scheduling + invoicing + payroll + basic bookkeeping for <10 employee service businesses. 59-comment Reddit thread explicitly asks for "all in one" — note: user literally says "Not software. I want real people." Pain is integration fatigue. Existing: `specialty-trade-back-office.md`.
**Signal Today**: Reddit: 59-comment thread on "anyone know a team that does everything for small service business" + multiple cross-subreddit occurrences.
**Key Links**: https://www.reddit.com/r/smallbusiness/comments/1knd8kw/ | https://www.reddit.com/r/smallbusiness/comments/1knv34o/ | https://www.reddit.com/r/sweatystartup/comments/1k5zwp0/software_stack/
**Why Tier 2**: Strong pain but extremely broad — every FSM tool is trying to do this. Differentiation requires picking one vertical. "All-in-one" is usually beaten by "just right for [specific trade]."

---

### Invoicing with Partial Payments + Auto Follow-up — Score: 72/105

**Summary**: Milestone-based payment stages + automated SMS/email follow-up sequences tied to job completion. Contractors need deposit-now + balance-on-completion with automatic chasing. Salon owner says "booking, chasing payments, texting back-and-forth is killing me." Existing: `simple-invoicing-freelancers.md`.
**Signal Today**: Reddit: r/sweatystartup partial payment request + r/smallbusiness multiple invoicing threads.
**Key Links**: https://www.reddit.com/r/sweatystartup/comments/1k643ai/ | https://www.reddit.com/r/smallbusiness/comments/1ko1wxv/
**Why Tier 2**: Real pain but Wave, FreshBooks, Stripe have partial payments. The automation follow-up is the differentiation — could be standalone or integrated.

---

### Booking-to-Invoice Auto-Generation — Score: 68/105

**Summary**: Client books → job happens → invoice auto-fires with no manual step. Piano teacher with Acuity says it doesn't auto-generate invoices. Existing: `booking-widget-no-show-reducer.md`.
**Signal Today**: Reddit: r/smallbusiness post about appointment → invoice gap across Acuity, Calendly, Square Appointments.
**Key Links**: https://www.reddit.com/r/smallbusiness/comments/1koh85t/autogenerate_invoices_based_on_appointments/
**Why Tier 2**: HoneyBook and Dubsado already solve this for creative businesses. The gap is for non-creative solopreneurs (tutors, trainers, groomers). Narrow ICP but high LTD conversion.

---

### Trades-Specific Hiring & Vetting Tool — Score: 65/105

**Summary**: ATS built for tradespeople: post to trades-specific boards, screen for certifications (EPA 608, OSHA 30), skills tests, reference checks for tradespeople. HVAC contractor built something themselves. Existing: `skilled-trades-workforce.md`.
**Signal Today**: Reddit: HVAC contractor says "all the hiring tools seem made for software companies" + carpentry startup.
**Key Links**: https://www.reddit.com/r/HVAC/comments/1khtnpq/looking_for_feedback/ | https://www.reddit.com/r/sweatystartup/comments/1kjhlfd/
**Why Tier 2**: Market exists but certification verification APIs + job board integrations add complexity. Tradesmen International exists. AppSumo viability unclear (HR tools need enterprise distribution).

---

### Dental Front Desk AI — Score: 63/105

**Summary**: AI handles insurance verification + scheduling calls + referrals. Independent dental practices at $99–199/mo LTD tier. Zirco, Arini (YC), Dentina = crowded at high end. Existing: `dental-practice.md`.
**Signal Today**: HN: Zirco.ai Show HN + Arini YC-backed + Dentina.ai. Market clearly attracting capital.
**Key Links**: https://news.ycombinator.com/item?id=47385090 | https://dentina.ai/ | https://www.ycombinator.com/companies/arini
**Why Tier 2 (lower)**: YC-backed competitors make this hard. Insurance verification API complexity is high. Distribution requires dental-specific sales motion.

---

### AV/Event Equipment Rental Management (Rentman Clone) — Score: 60/105

**Summary**: Clone Rentman model for adjacent rental vertical (medical equipment, party/event furniture, construction equipment for small operators). Rentman $15–20M ARR validates the model. Adjacent verticals still use spreadsheets. Existing: `av-event-production.md`.
**Signal Today**: IH: Rentman "$15M ARR from a gap found at brick-and-mortar" — insider builds own tool, others want it pattern.
**Key Links**: https://www.indiehackers.com/post/tech/building-a-15m-arr-saas-from-a-gap-he-found-at-his-brick-and-mortar-HFriCBQLHukAmdXVEj1q | https://rentman.io/
**Why Tier 2 (lower)**: Rentman is good and expanding to US. Adjacent verticals would need new research to confirm demand. Primarily a product-market fit question.

---

## Tier 3: Weak / Pass (Score <55)

| Idea | Score | Reason |
|------|-------|--------|
| Simple Payroll for <10 Employees | 52/105 | No LTD viability (compliance-critical); Gusto, Patriot, Wave Payroll already affordable; crowded space |
| HVAC Field App (BTU calc + wiring diagrams) | 48/105 | Niche-within-niche; technical complexity; unclear monetization path; "does not exist" framing could mean no market |
| PM Multi-Platform Listing Syndication | 47/105 | Someone already building = losing first-mover advantage; narrow ICP (Canadian/international PMs); Buildium/AppFolio cover US portals |
| Property Management API Aggregator (Propexo clone) | 40/105 | Developer tool (B2B2B); Propexo already funded ($3.3M seed, YC W23) owns this space; not a "boring business" play |
| Generic Field Service Business Management Tool | 35/105 | Too vague to evaluate; "small business management" is the most crowded SaaS category; no differentiation identified |
| Boring Business Acquisition Pattern | N/A | Meta-observation, not a product; confirms framework — apply to each specific vertical independently |
| HVAC Proposal Add-on for Jobber | Merged | Merged with hvac-small-shop-dispatch.md — becomes a feature, not standalone product |

---

## Top 3 Recommendations

1. **Lawn Care All-in-One / GreenRoute** — Score: 100/105 — SA post-Xplor defector wave = single largest switching moment in lawn care software history RIGHT NOW. Chemical compliance log + flat pricing destroys RealGreen's $300+/mo. The moment to ship is today.
   - Key source: https://www.reddit.com/r/lawncare/comments/1iz43ob/what_appssoftware_do_you_recommend/ | https://www.capterra.com/p/78106/Service-Assistant/reviews/

2. **BookkeeperHub / Solo Bookkeeper Practice Management** — Score: 97/105 — Transaction Q&A loop (inline in-app vs email back-and-forth) + $79 LTD vs $600+/yr TaxDome is a clean asymmetric play. QB Desktop EOL September 2027 = second forcing function. TODAY confirmed with specific product concept: magic-link portal + transaction Q&A = most distinct differentiator in category.
   - Key source: https://doublehq.com/blog/best-bookkeeping-practice-management-software/ | https://usefoyer.com/blog/taxdome-vs-canopy

3. **HVAC Small Shop Dispatch / HVACDesk** — Score: 93/105 — 5+ Reddit threads in 2 months + full competitor matrix confirms $99/mo dead zone. "Anti-ServiceTitan" = one of the strongest positioning narratives in any of today's ideas. TODAY: proposal add-on angle (good/better/best tiers for equipment quotes) adds differentiation vs Jobber.
   - Key source: https://www.reddit.com/r/HVAC/comments/1jvd1k9/dispatching_software/ | https://fieldcamp.ai/reviews/servicetitan/
