# Idea Evaluation — 2026-04-22

**Sources**: reddit-2026-04-22, hn-indiehackers-2026-04-22, competitor-analysis-2026-04-22, trends-2026-04-22
**Ideas Evaluated**: 35+ signals consolidated to 27 unique ideas (after deduplication)
**New Shortlisted Files Created**: tattoo-studio-management.md, residential-care-home-compliance.md
**Existing Files Updated**: 15+ signal history rows appended

---

## Tier 1: Strong Opportunities (Score 75+)

### 1. FSM for Small HVAC/Plumbing/Electrical (1-5 Techs) — Score: 101/105
_Maps to: `ideas/shortlisted/field-service-management.md`_

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | BBB ETF complaints $18k-$46k documented; "paid full year, never onboarded"; Jobber 200k+ businesses, ServiceTitan 100k+ |
| Competitor Weakness | 5/5 | ServiceTitan $245-500/tech/mo + $5k-50k onboarding; HCP killed human support in 2025; 2 independent HN builders launched same product same week = unmet demand |
| LTD Viability | 5/5 | $79 solo / $149 team LTD; Heffl ran AppSumo LTD at $44-49; "pay once vs $150/mo forever" = clear mental math |
| No Free Tier | 5/5 | No viable free FSM for 2-5 tech shops |
| Channel Access | 5/5 | r/HVAC 370k, r/Plumbing 290k, r/electricians 200k, HVAC-Talk, trade FB groups |
| Content Potential | 5/5 | "ServiceTitan alternative", "Jobber alternative cheap" = high-intent SEO |
| AppSumo Fit | 5/5 | 7/10 AppSumo score; first-mover trade-specific on AppSumo |
| Review Potential | 4/5 | Trades contractors write reviews when software saves their business |
| MRR Path | 5/5 | $49-99/mo natural after LTD; maintenance contracts = sticky |
| Build Feasibility | 4/5 | Core scheduling/invoicing/flat-rate MVP 4-6 weeks |
| Boring Business Bonus | 5/5 | HVAC/plumbing = deeply blue-collar |

**Verdict**: BUILD
**Decision Status**: BUILDING — see `ideas/decisions.md`
**Next Steps**: AutoMVP pipeline active on this idea
**Risks**: (1) Jobber/HCP launch stripped-down cheap tiers; (2) QuickBooks API complexity; (3) Pricebook data needs per vertical
**Key Source Links**:
- https://fieldcamp.ai/reviews/servicetitan/
- https://www.getonecrew.com/post/servicetitan-reviews
- https://crewroute.app/compare/alternatives/servicetitan/
- https://www.hvac-talk.com/threads/hvac-software-to-run-business.2226005/
- https://news.ycombinator.com/item?id=47294092
**Signal Frequency**: 20+ mentions across 45+ days — increasing; HN showed 2 independent builders same week

---

### 2. Property Management for Small Landlords (1-20 Units) — Score: 100/105
_Maps to: `ideas/shortlisted/property-management.md`_

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | 17M+ individual US landlords; AppFolio 50-unit minimum excludes 70% of market; DoorLoop AppSumo validates category |
| Competitor Weakness | 5/5 | AppFolio $298/mo minimum + 50-unit gate; Buildium hidden fees ($2.35/ACH, $99/bank setup, $5/eSignature); free tools too weak for tax needs |
| LTD Viability | 5/5 | $59-79 LTD vs $62/mo Buildium = pays for itself in 6 weeks; RENTBase on AppSumo validates category |
| No Free Tier | 3/5 | TurboTenant, Innago, Avail offer free tiers |
| Channel Access | 5/5 | r/Landlord 400k, r/realestateinvesting 2M+, BiggerPockets 2M+ |
| Content Potential | 5/5 | "small landlord software", "Buildium alternative", "AppFolio alternative" |
| AppSumo Fit | 5/5 | 8/10 AppSumo score; landlords are value-oriented buyers |
| Review Potential | 4/5 | Will review when tax time saves them money |
| MRR Path | 5/5 | Per-unit monthly or tiered; portfolio growth = natural upsell |
| Build Feasibility | 4/5 | Rent collection + accounting + leases + maintenance in 4-6 weeks |
| Boring Business Bonus | 4/5 | Property management = unglamorous |

**Verdict**: BUILD
**Decision Status**: BUILDING (PRD complete, AutoMVP in pipeline)
**Next Steps**: AutoMVP architecture step
**Risks**: (1) Free tools exist and attract landlords first; (2) State-specific lease compliance complexity; (3) Payment processing verification requirements
**Key Source Links**:
- https://appfoliopricing.com/
- https://www.capterra.com/p/47428/Buildium-Property-Management-Software/reviews/
- https://doorloop.com/blog/small-landlord-property-management-software
- https://appsumo.com/products/rentbase-lite-property-management-software/
**Signal Frequency**: 10+ mentions across 30+ days — stable; competitor analysis confirmed deep pricing gap

---

### 3. Lawn Care / Landscaping Business OS — Score: 98/105
_Maps to: `ideas/shortlisted/landscaping-lawn-care.md`_

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | $176B US lawn care market; r/lawncare 918k members; Yardbook free proves massive demand; Attentive.ai $12M raised for AI bidding validates commercial need |
| Competitor Weakness | 5/5 | Service Autopilot post-acquisition "scammy," QuickBooks sync failures; Yardbook stagnant with no CRM/automation; Jobber lacks bulk scheduling edits |
| LTD Viability | 5/5 | $199-299 LTD; recurring daily use = natural MRR conversion |
| No Free Tier | 3/5 | Yardbook is free (stagnant) |
| Channel Access | 5/5 | r/lawncare 918k, r/landscaping, lawnsite.com forums |
| Content Potential | 5/5 | "Yardbook alternative", "lawn care software automation" = strong SEO |
| AppSumo Fit | 5/5 | Solo lawn care operators = perfect LTD buyer |
| Review Potential | 4/5 | Active community reviews software publicly |
| MRR Path | 5/5 | Route optimization, chemical tracking, crew mgmt as upsells |
| Build Feasibility | 4/5 | Yardbook data import tool + CRM + automation in 4-6 weeks |
| Boring Business Bonus | 5/5 | Lawn care = deeply blue-collar boring |

**Verdict**: BUILD
**Decision Status**: VALIDATING
**Next Steps**: Confirm Yardbook data import feasibility; build Yardbook-to-import migration tool
**Risks**: (1) Yardbook could add CRM features; (2) Seasonal businesses = churn risk in winter; (3) Route optimization complexity
**Key Source Links**:
- https://www.lawnsite.com/threads/yardbook-bitter-sweet-relationship.501173/
- https://lawncrewpro.com/software/best-lawn-care-software/
- https://techcrunch.com/2024/02/07/attentive-ai-funding-landscaping-construction/
**Signal Frequency**: 12+ mentions across 40+ days — increasing

---

### 4. Cleaning Service Management (Residential + Commercial) — Score: 98/105
_Maps to: `ideas/shortlisted/cleaning-service-management.md`_

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | $100B+ US cleaning market; 1M+ cleaning businesses; ZenMaid/MaidCentral/Swept all have paying customers |
| Competitor Weakness | 5/5 | ZenMaid residential-only; Swept commercial-only = NO hybrid solution; MaidCentral expensive with poor mobile app |
| LTD Viability | 5/5 | $149-199 LTD; cleaning businesses use software daily |
| No Free Tier | 4/5 | No free cleaning-specific tools |
| Channel Access | 5/5 | r/CleaningBusiness, r/maidservice, r/sweatystartup, cleaning FB groups |
| Content Potential | 5/5 | "ZenMaid alternative", "cleaning business software" = clear SEO |
| AppSumo Fit | 5/5 | Solo cleaning owners = AppSumo buyer persona |
| Review Potential | 4/5 | Cleaning business owners are active community reviewers |
| MRR Path | 5/5 | Per-cleaner pricing, SMS, client portal = natural upsell |
| Build Feasibility | 5/5 | Scheduling + invoicing + recurring client management = 3-4 weeks |
| Boring Business Bonus | 5/5 | Cleaning = deeply blue-collar boring |

**Verdict**: BUILD
**Decision Status**: VALIDATING
**Next Steps**: Validate hybrid residential+commercial scheduling logic
**Risks**: (1) ZenMaid adds commercial mode; (2) Price sensitive market; (3) High cleaner turnover = software churn
**Key Source Links**:
- https://www.zenmaid.com/magazine/the-best-cleaning-business-software-in-2025-what-you-need-and-why/
- https://learn.sweptworks.com/best-janitorial-commercial-cleaning-software
- https://www.capterra.com/p/189582/Maid-Central/reviews/
**Signal Frequency**: 10+ mentions across 40+ days — stable

---

### 5. Pest Control Route & Compliance Tracker — Score: 95/105
_Maps to: `ideas/shortlisted/pest-control.md`_

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | $27B US pest control market growing 5.8%/yr; 30k+ companies; FieldRoutes/ServiceTitan proves paying customers exist |
| Competitor Weakness | 5/5 | FieldRoutes = enterprise priced; PestPac = complex; GorillaDesk generic; PE consolidation anxiety creating churn signal |
| LTD Viability | 5/5 | $199-299 LTD; daily route software use drives MRR conversion |
| No Free Tier | 4/5 | No free pest control tools |
| Channel Access | 4/5 | r/PestControl, r/sweatystartup, pest control trade associations |
| Content Potential | 4/5 | "pest control software", "FieldRoutes alternative" |
| AppSumo Fit | 5/5 | Small pest operators = sweaty startup buyer |
| Review Potential | 4/5 | Pest control owners leave reviews when compliance saves them |
| MRR Path | 5/5 | Chemical compliance log, seasonal scheduling, customer portal as upsells |
| Build Feasibility | 4/5 | Route scheduling + chemical logging + recurring billing in 4-5 weeks |
| Boring Business Bonus | 5/5 | Pest control = maximum boring blue-collar |

**Verdict**: BUILD
**Decision Status**: VALIDATING
**Next Steps**: Map chemical/treatment compliance requirements by state
**Risks**: (1) GorillaDesk adds compliance features; (2) State licensing requirements for chemical tracking; (3) PE-backed consolidation creates well-funded competitors
**Key Source Links**:
- https://www.pestbase.ai/blog/pest-control-business-management-software-2025-guide
- https://www.fieldroutes.com/blog/best-pest-control-scheduling-apps
**Signal Frequency**: 8+ mentions across 35+ days — stable

---

### 6. AI Receptionist for Home Service Businesses — Score: 95/105
_Maps to: `ideas/shortlisted/ai-receptionist.md`_

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | Trillet $49/mo launched; LeadTruffle $229-629/mo; Jobber launched native AI Receptionist 2025; AgentZap plumbing-specific = multiple competitors validates huge market |
| Competitor Weakness | 5/5 | Jobber's native version locks behind $199 Grow plan; no standalone affordable voice AI for solo/2-5 person shops under $49/mo |
| LTD Viability | 4/5 | $299-499 LTD possible; trade owners understand "missed call = lost $500 job" |
| No Free Tier | 4/5 | No free AI receptionist for trades |
| Channel Access | 5/5 | r/HVAC, r/Plumbing, HVAC-Talk, trade FB groups |
| Content Potential | 5/5 | "missed calls HVAC", "AI answering service plumber" = strong SEO |
| AppSumo Fit | 4/5 | AI tools do well on AppSumo; moderate AppSumo fit |
| Review Potential | 4/5 | "It booked 3 jobs while I was under a sink" = viral testimonials |
| MRR Path | 5/5 | Per-call or per-booking pricing; strong MRR model |
| Build Feasibility | 5/5 | Twilio + Vapi/ElevenLabs + Jobber API = 3-4 week MVP |
| Boring Business Bonus | 5/5 | Answering service for plumbers = deeply boring |

**Verdict**: BUILD
**Decision Status**: BUILDING
**Next Steps**: AutoMVP pipeline processing
**Risks**: (1) Jobber bundles this natively = feature kill; (2) Voice AI hallucination on emergency calls = liability; (3) Twilio costs can escalate
**Key Source Links**:
- https://www.trillet.ai/blogs/best-ai-answering-service-for-trades-2026
- https://www.getjobber.com/features/ai-receptionist/
- https://agentzap.ai/industries/plumbing
- https://solasai.net/
**Signal Frequency**: 8+ mentions across 20+ days — increasing rapidly

---

### 7. Construction Safety & Compliance for Small Contractors — Score: 95/105
_Maps to: `ideas/shortlisted/construction-management.md`_

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | Trimble acquired Document Crunch April 2, 2026 — major acquisition signal; construction safety market $2.1B growing 28% YoY; SafetyCulture 43% adoption among small contractors via free tier |
| Competitor Weakness | 5/5 | Document Crunch targets enterprise/large GCs only; SafetyCulture generic — no trade-specific compliance; 41% of mid-size GCs still on paper forms |
| LTD Viability | 5/5 | $79-149 LTD for compliance toolkit; construction owners hate monthly fees |
| No Free Tier | 3/5 | SafetyCulture has a free tier |
| Channel Access | 5/5 | r/Construction, r/Contractor, r/Roofing, trade associations |
| Content Potential | 5/5 | "OSHA compliance small contractor", "AI contract review subcontractor" — strong SEO |
| AppSumo Fit | 5/5 | High LTD fit; subcontractors understand visceral contract risk |
| Review Potential | 4/5 | "Saved me from an unfair indemnification clause" = strong testimonials |
| MRR Path | 5/5 | Annual compliance updates, document library = subscription hooks |
| Build Feasibility | 4/5 | Mobile inspection + checklists MVP in 3 weeks; AI document review adds 2-3 weeks |
| Boring Business Bonus | 5/5 | Construction compliance = deeply boring |

**Verdict**: BUILD
**Decision Status**: VALIDATING
**Next Steps**: Validate AI contract clause detection accuracy; check SafetyCulture free tier threat
**Risks**: (1) SafetyCulture free tier captures new users first; (2) AI hallucination on legal documents = liability; (3) State-specific compliance variation
**Key Source Links**:
- https://news.trimble.com/2026-04-02-Trimble-to-Acquire-Document-Crunch-to-Add-AI-Powered-Risk-Management-and-Document-Compliance-to-Trimble-Construction-One-Project-Delivery-Ecosystem
- https://www.getclue.com/blog/construction-osha-compliance-software
- https://goaudits.com/blog/construction-compliance-software/
**Signal Frequency**: 5+ mentions across 20+ days — increasing (Trimble acquisition = major catalyst)

---

### 8. Pool Service Chemical + Business Management — Score: 94/105
_Maps to: `ideas/shortlisted/pool-service-management.md`_

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | $6B+ US pool service market; Skimmer 35k+ pool pros, raised $74M (Mainsail); PoolNest entered 2023 proving new entrants can get traction |
| Competitor Weakness | 5/5 | Skimmer doubled per-pool pricing $1→$2 in 2024 with minimal notice; Pool Brain battery drain 30%; data export "nearly impossible"; 26% of pros anxious about PE consolidation |
| LTD Viability | 5/5 | $1.50/pool/month or $79/mo flat; per-pool pricing makes MRR transition natural |
| No Free Tier | 4/5 | No free pool service tools |
| Channel Access | 4/5 | r/pools, Pool & Spa News, FB groups 47k+, PHTA events |
| Content Potential | 4/5 | "Skimmer alternative", "pool service software" = moderate SEO |
| AppSumo Fit | 4/5 | Pool service operators = sweaty startup AppSumo buyer |
| Review Potential | 4/5 | Defected Skimmer customers actively post alternatives online |
| MRR Path | 5/5 | Per-pool pricing scales naturally with business |
| Build Feasibility | 4/5 | Route scheduling + chemistry tracking + Android app in 4-5 weeks |
| Boring Business Bonus | 5/5 | Pool service = deeply boring blue-collar |

**Verdict**: BUILD
**Decision Status**: VALIDATING
**Next Steps**: Validate Android reliability vs Pool Brain; research LSI calculation requirements
**Risks**: (1) Skimmer responds with lower pricing tier; (2) Android app reliability is a pass/fail requirement; (3) Low average revenue per customer
**Key Source Links**:
- https://www.pooldial.com/resources/articles/business/pool-service-software-landscape
- https://www.getskimmer.com/
- https://www.softwareadvice.com/field-service/pool-service-comparison/
**Signal Frequency**: 7+ mentions across 30+ days — stable

---

### 9. Dental Patient Communication & Practice Management — Score: 93/105
_Maps to: `ideas/shortlisted/dental-practice.md`_

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | 200k+ dental offices in US; $4B+ dental software market; Dentrix/Eaglesoft dominate with 20yr-old software |
| Competitor Weakness | 5/5 | Dentrix "Windows 95 but it works"; simultaneous imaging+charting impossible; data export restrictions; Open Dental requires IT server |
| LTD Viability | 3/5 | Healthcare prefers subscription; standalone AI scribe LTD at $299-499 possible |
| No Free Tier | 4/5 | No free dental management tools |
| Channel Access | 4/5 | r/dentistry, dental association conferences, CE credit events |
| Content Potential | 4/5 | "Dentrix alternative", "AI dental notes", "dental practice management cloud" |
| AppSumo Fit | 3/5 | Dental practices less likely on AppSumo; standalone AI scribe could work |
| Review Potential | 4/5 | Dentists will review if case acceptance improves |
| MRR Path | 5/5 | Strong MRR; practice management = sticky subscription |
| Build Feasibility | 4/5 | AI case acceptance tool = killer feature differentiator |
| Boring Business Bonus | 4/5 | Dental office management = unglamorous |

**Verdict**: BUILD (AI case acceptance as wedge feature)
**Decision Status**: BUILDING (BMAD PRD complete)
**Next Steps**: AutoMVP step — architecture
**Risks**: (1) HIPAA compliance requirements; (2) Long sales cycle for dental offices; (3) Data migration from legacy systems
**Key Source Links**:
- https://revupdental.com/best-dental-practice-management-systems/
- https://blog.titanwebagency.com/dental-management-software-reviews
**Signal Frequency**: 8+ mentions across 40+ days — stable

---

### 10. Roofing Contractor CRM — Estimate to Invoice — Score: 92/105
_Maps to: `ideas/shortlisted/roofing-contractor-crm.md`_

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 4/5 | $56B US roofing market; 100k+ contractors; Procore $1B+ revenue signals huge software demand |
| Competitor Weakness | 5/5 | AccuLynx dated with exit tactics; Roofr "CRM features perpetually Coming Soon"; JobNimbus integration sync issues; Procore $55k/year |
| LTD Viability | 5/5 | $249-349 LTD; "repair amnesia" is a clear pain point customers will pay to solve |
| No Free Tier | 4/5 | No free roofing CRM |
| Channel Access | 5/5 | r/Roofing, r/Construction, r/Contractor, roofing FB groups |
| Content Potential | 5/5 | "AccuLynx alternative", "roofing CRM software" = strong SEO |
| AppSumo Fit | 4/5 | Roofing contractors are AppSumo-adjacent buyers |
| Review Potential | 4/5 | Contractors will review if invoicing saves hours |
| MRR Path | 4/5 | SaaS subscription after LTD; roof asset history = long-term retention |
| Build Feasibility | 4/5 | Mobile-first with offline sync + asset history by roof address in 4-6 weeks |
| Boring Business Bonus | 4/5 | Roofing = unglamorous trades |

**Verdict**: BUILD
**Decision Status**: VALIDATING
**Next Steps**: Validate asset-specific history (by roof address, not customer) — key differentiator
**Risks**: (1) Roofr adds true CRM features; (2) Storm/season-driven demand = MRR volatility; (3) Insurance documentation complexity
**Key Source Links**:
- https://www.repair-crm.com/2026/04/20/roofing-job-management-software-the-2026-guide-for-small-teams
- https://www.roofchief.com/resources/the-best-roofing-crm-softwares-of-2025-ranked-real-contractor-reviews
- https://projul.com/blog/procore-pricing-analysis-2026/
**Signal Frequency**: 7+ mentions across 35+ days — stable

---

### 11. Simple Bookkeeping / QuickBooks Alternative for Contractors — Score: 92/105
_Maps to: `ideas/shortlisted/bookkeeping-accounting.md`_

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | QB holds 85%+ SMB market share; raised prices 75% in 3 years; 30M small businesses in US |
| Competitor Weakness | 5/5 | QB Desktop discontinuation forced migration; SSN disclosure for payments; "if you don't like it, find an alternative" (QB rep) |
| LTD Viability | 4/5 | $99-149 LTD; $289/yr savings vs QB Plus |
| No Free Tier | 3/5 | Wave free; FreshBooks trial exists |
| Channel Access | 5/5 | r/smallbusiness, r/Bookkeeping, r/Accounting, r/Contractor |
| Content Potential | 5/5 | "QuickBooks alternative", "accounting software for contractors" = massive SEO |
| AppSumo Fit | 4/5 | Contractors want one-time payments for recurring tools |
| Review Potential | 4/5 | Strong testimonial potential ("saved $689/year") |
| MRR Path | 5/5 | Clear subscription model; job costing = retention hook |
| Build Feasibility | 4/5 | Contractor-specific job costing + QB import in 4-6 weeks |
| Boring Business Bonus | 4/5 | Small business accounting = unglamorous |

**Verdict**: BUILD (contractor-specific job costing as differentiator)
**Decision Status**: VALIDATING
**Next Steps**: Validate QB import accuracy; define contractor-specific job costing MVP
**Risks**: (1) QuickBooks ecosystem lock-in via accountants; (2) Wave free tier competes; (3) Financial data = high trust bar
**Key Source Links**:
- https://thryvedigest.com/smallbusiness/quickbooks-alternatives-small-business-2026/
- https://www.bench.co/blog/accounting/quickbooks-alternatives
**Signal Frequency**: 8+ mentions across 40+ days — stable

---

### 12. Veterinary Practice Communication & PIMS — Score: 92/105
_Maps to: `ideas/shortlisted/veterinary-practice.md`_

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | 30k+ vet practices in US; $2B+ vet software market; Shepherd and NectarVet both raised VC |
| Competitor Weakness | 5/5 | Covetrus Pulse "bulky," migration "wrong categories"; Cornerstone server-based; ezyVet $230/user/mo; Impromed post-acquisition decline |
| LTD Viability | 3/5 | LTD for standalone AI scribe possible ($299-499); practice management requires subscription |
| No Free Tier | 4/5 | No free vet PIMS |
| Channel Access | 4/5 | r/veterinary, r/VetTech, vet professional associations |
| Content Potential | 4/5 | "Covetrus Pulse alternative", "AI veterinary notes" |
| AppSumo Fit | 3/5 | Vet clinics less likely on AppSumo; standalone AI scribe could work |
| Review Potential | 4/5 | Vets review when AI saves 6 hrs/week on documentation |
| MRR Path | 5/5 | Strong MRR; vet PIMS = sticky subscription |
| Build Feasibility | 4/5 | AI scribe (Shepherd model) + basic PIMS in 5-6 weeks |
| Boring Business Bonus | 4/5 | Veterinary practice management = unglamorous |

**Verdict**: BUILD (AI scribe as wedge into PIMS)
**Decision Status**: BUILDING (BMAD PRD complete)
**Next Steps**: AutoMVP architecture step
**Risks**: (1) Shepherd/NectarVet already well-funded in same space; (2) HIPAA-equivalent vet record requirements; (3) Pharmacy dispensing integration complexity
**Key Source Links**:
- https://www.vetsoftwarehub.com/article/best-veterinary-practice-management-software-2026
- https://www.capterra.com/p/130107/Covetrus-Pulse/reviews/
- https://www.nectarvet.com/post/best-pims-for-startup-veterinary-clinics-in-2025
**Signal Frequency**: 6+ mentions across 25+ days — stable

---

### 13. Tattoo Studio Management — Deposits, Multi-Step Booking, Artist Scheduling — Score: 92/105
_Maps to: `ideas/shortlisted/tattoo-studio-management.md` (NEW)_

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 4/5 | 21k+ tattoo studios in US; Booksy/Vagaro actively used = paying customers; high-spending clients ($200-2k/session) |
| Competitor Weakness | 5/5 | Booksy/Vagaro = generic salon tools with "horrible reviews from tattoo artists around deposit handling"; Ink Book outdated (last update 2021) |
| LTD Viability | 5/5 | Tattoo studio owners = perfect LTD persona; AppSumo community has many tattoo clients |
| No Free Tier | 4/5 | No free tattoo-specific software |
| Channel Access | 4/5 | Instagram tattoo communities, r/tattoo, tattoo artist FB groups, NDGAA adjacent |
| Content Potential | 4/5 | "tattoo studio management software", "tattoo booking deposits" = clear SEO gap |
| AppSumo Fit | 5/5 | Explicitly named by 3+ IH sources as prime AppSumo opportunity |
| Review Potential | 4/5 | Tattoo artists share tools in communities actively |
| MRR Path | 4/5 | Per-artist pricing; portfolio management = retention hook |
| Build Feasibility | 5/5 | Multi-step booking + deposit + consent forms + photo portfolio = 3-4 weeks |
| Boring Business Bonus | 4/5 | Tattoo studio admin = unglamorous professional services |

**Verdict**: BUILD
**Decision Status**: NEW
**Next Steps**: Validate tattoo-specific booking workflow; identify active tattoo studio FB groups for outreach
**Risks**: (1) Booksy could add tattoo-specific workflows; (2) Artists are price-sensitive; (3) High geographic concentration of competitors in studio management
**Key Source Links**:
- https://www.wearefounders.uk/10-saas-ideas-to-avoid-as-an-indie-hacker-in-2026/
- https://entrepreneurloop.com/bootstrapped-saas-niches-solo-founders/
**Signal Frequency**: First identified today (3+ IH sources citing same niche simultaneously = strong entry signal)

---

### 14. Residential Care Home Compliance Tracker (CQC-Ready) — Score: 91/105
_Maps to: `ideas/shortlisted/residential-care-home-compliance.md` (NEW)_

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 4/5 | 17k+ UK care homes + 65k US assisted living facilities; CQC introduced stricter digital requirements 2025 = regulatory forcing function |
| Competitor Weakness | 5/5 | PointClickCare/MatrixCare start at $500-2000/mo; nothing affordable for sub-30-bed facilities; small homes on paper or spreadsheets |
| LTD Viability | 4/5 | $199-299 LTD; care home owners hate recurring costs |
| No Free Tier | 5/5 | Nothing free exists; regulatory necessity = paid from day 1 |
| Channel Access | 4/5 | UK care home owner associations, Facebook groups for care home managers |
| Content Potential | 4/5 | "CQC compliance software small care home", "CQC digital records 2025" = regulatory SEO |
| AppSumo Fit | 4/5 | UK/international buyers on AppSumo; compliance tools sell on trust |
| Review Potential | 4/5 | Care home managers review when inspection results improve |
| MRR Path | 4/5 | CQC update cadence = ongoing subscription justification; US expansion as upsell |
| Build Feasibility | 5/5 | Checklist + incident log + medication log + PDF report = 3-4 weeks |
| Boring Business Bonus | 5/5 | Residential care administration = deeply unsexy |

**Verdict**: BUILD
**Decision Status**: NEW
**Next Steps**: Map CQC digital requirements checklist (UK); identify UK care home owner FB communities for validation
**Risks**: (1) CQC requirements change = ongoing maintenance burden; (2) UK-first limits initial TAM; (3) Sensitive data = regulatory compliance overhead
**Key Source Links**:
- https://www.wearefounders.uk/10-saas-ideas-to-avoid-as-an-indie-hacker-in-2026/
- https://millipixels.com/blog/micro-saas-startup-ideas-2026
**Signal Frequency**: First identified today (named by multiple IH sources simultaneously = strong entry signal)

---

### 15. Pet Grooming / Mobile Dog Groomer Scheduling — Score: 90/105
_Maps to: `ideas/shortlisted/pet-grooming.md`_

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 4/5 | 150k+ mobile groomers in US; DoggieDashboard $9k MRR validates market; MoeGo/123Pet serve salons |
| Competitor Weakness | 5/5 | ZERO tools purpose-built for mobile (not salon) groomers; Acuity/Calendly lack route optimization; MoeGo built for fixed locations |
| LTD Viability | 5/5 | Perfect LTD product; solopreneur buyers; named by 3+ IH sources as prime AppSumo fit |
| No Free Tier | 4/5 | No free mobile groomer-specific tools |
| Channel Access | 5/5 | NDGAA, mobile grooming FB groups 50k+, Instagram groomer communities |
| Content Potential | 4/5 | "mobile dog groomer software", "mobile groomer booking app" = low SEO competition |
| AppSumo Fit | 5/5 | 5/5 LTD potential per HN/IH analysis |
| Review Potential | 4/5 | Mobile groomers are community-oriented; share tools actively |
| MRR Path | 4/5 | Route optimization, SMS reminders, recurring scheduling = subscription hooks |
| Build Feasibility | 5/5 | Route optimization + booking + recurring appointments + breed notes = 3-4 weeks |
| Boring Business Bonus | 4/5 | Mobile pet service = unglamorous solopreneur |

**Verdict**: BUILD
**Decision Status**: VALIDATING
**Next Steps**: Post in mobile grooming FB groups to validate pain points; build route optimization MVP
**Risks**: (1) MoeGo adds mobile route mode; (2) Small market (150k = niche); (3) Route optimization API costs
**Key Source Links**:
- https://www.wearefounders.uk/10-saas-ideas-to-avoid-as-an-indie-hacker-in-2026/
- https://entrepreneurloop.com/bootstrapped-saas-niches-solo-founders/
**Signal Frequency**: Named by 3+ IH sources simultaneously — strong new entry signal

---

### 16. Small Fleet Trucking TMS — Score: 90/105
_Maps to: `ideas/shortlisted/small-fleet-trucking-tms.md`_

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | 3.5M+ truckers in US; 350k+ owner-operators; Hauler Hero $16M raised Feb 2026; Truckbase/Toro/Rose Rocket all validating the segment |
| Competitor Weakness | 5/5 | McLeod Software 30-year-old on-premise; Motive declining service; no tool at $29-79/mo for 1-10 trucks |
| LTD Viability | 3/5 | DOT compliance = mission-critical; MRR model preferred; $299 LTD for non-compliance features possible |
| No Free Tier | 4/5 | No free TMS for small trucking |
| Channel Access | 4/5 | r/Trucking, r/TruckDrivers, OOIDA 150k+ members |
| Content Potential | 4/5 | "TMS small trucking company", "owner-operator dispatch software" |
| AppSumo Fit | 3/5 | Truckers less likely on AppSumo; OOIDA direct channel better |
| Review Potential | 4/5 | Truckers share tools in forums actively |
| MRR Path | 5/5 | DOT compliance updates = strong subscription retention |
| Build Feasibility | 4/5 | Load dispatch + IFTA + invoice generation MVP in 4-5 weeks |
| Boring Business Bonus | 4/5 | Trucking logistics = unglamorous |

**Verdict**: EXPLORE FURTHER
**Decision Status**: VALIDATING
**Next Steps**: Define ELD compliance scope — is this buildable without hardware?
**Risks**: (1) ELD requires hardware certification; (2) DOT compliance errors = legal liability; (3) Factoring integration complexity
**Key Source Links**:
- https://www.thetruckersreport.com/truckingindustryforum/threads/best-overall-eld.2500546/
- https://techcrunch.com/2026/02/10/hauler-hero-collects-16m-for-its-ai-waste-management-software/
- https://www.truckbase.com/
**Signal Frequency**: 8+ mentions across 35+ days — stable

---

### 17. Home Inspection Report Software (Pay-Per-Use Model) — Score: 87/105
_Maps to: `ideas/shortlisted/home-inspection-software.md`_

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 4/5 | 30k+ home inspectors in US; 5M+ inspections/year; Inspector Nexus $4.99/report proves pay-per model works |
| Competitor Weakness | 4/5 | HIP browser-dependent; Spectora subscription-heavy; one major provider shut down = vendor risk fears; no dominant mobile-offline option |
| LTD Viability | 4/5 | $79-99 LTD for monthly plan equivalent; pay-per model at $4.99-6.99/report |
| No Free Tier | 3/5 | Some basic tools exist |
| Channel Access | 4/5 | r/HomeInspectors, NACHI forums, InterNACHI association |
| Content Potential | 4/5 | "home inspection software pay per use", "Spectora alternative" |
| AppSumo Fit | 4/5 | Home inspectors = solopreneur buyers |
| Review Potential | 4/5 | Active community shares tools on NACHI forums |
| MRR Path | 4/5 | Convert from pay-per to subscription at 20+ inspections/month |
| Build Feasibility | 4/5 | Mobile-offline report writing + customizable templates + client portal in 4-5 weeks |
| Boring Business Bonus | 4/5 | Home inspection reporting = unglamorous |

**Verdict**: EXPLORE FURTHER (BMAD analysis in progress)
**Decision Status**: BUILDING (BMAD pipeline active per decisions.md)
**Next Steps**: AutoMVP pipeline
**Risks**: (1) Spectora dominant + well-funded; (2) Pay-per model limits predictable MRR; (3) Report template customization scope creep
**Key Source Links**:
- https://forum.nachi.org/t/2025-spectora-vs-home-gauge-vs-home-inspection-pro/256472
- https://homeinspectology.com/pay-as-you-go-home-inspection-report-writing-software-here-are-your-options/
**Signal Frequency**: 6+ mentions across 35+ days — stable

---

### 18. AI Quoting & Estimating for Trade Contractors — Score: 84/105
_Maps to: `ideas/shortlisted/ai-quoting-estimating-trades.md`_

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 4/5 | 500k+ licensed plumbing/electrical businesses; Kickserv $120k MRR validates field invoicing market |
| Competitor Weakness | 4/5 | ServiceTitan locks flat-rate pricebook behind enterprise pricing; no affordable standalone quoting at $25-49/mo |
| LTD Viability | 4/5 | $99-149 LTD; standalone quoting = clear value proposition |
| No Free Tier | 4/5 | No free trade quoting tools |
| Channel Access | 5/5 | r/Plumbing, r/Electricians, r/Contractors, r/Handyman |
| Content Potential | 4/5 | "trade estimate software", "good better best estimate plumbing" |
| AppSumo Fit | 4/5 | Solo/small trades = AppSumo buyer |
| Review Potential | 3/5 | Simpler tools get fewer reviews |
| MRR Path | 3/5 | Standalone quoting is a stepping stone; full FSM is the MRR play |
| Build Feasibility | 5/5 | Mobile estimate builder + "good/better/best" templates + e-sign in 2-3 weeks |
| Boring Business Bonus | 5/5 | Trade estimating = deeply boring |

**Verdict**: BUILD (as FSM entry wedge)
**Decision Status**: VALIDATING
**Next Steps**: Validate standalone vs bundled with FSM platform
**Risks**: (1) Too narrow — may cannibalize FSM adoption; (2) Jobber adds free estimate feature; (3) Market education needed
**Key Source Links**:
- https://medium.com/@e2larsen/50-saas-ideas-pulled-straight-from-reddit-pain-points-a64569371691
**Signal Frequency**: 8+ mentions across 30+ days — stable

---

### 19. Auto Detailing & Mobile Car Wash Business Management — Score: 93/105
_Maps to: `ideas/shortlisted/pressure-washing-detailing.md`_

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 4/5 | $14B US auto detailing growing 6%/yr; 50k+ businesses; ROXO Hub at $39.99/mo validates price point |
| Competitor Weakness | 5/5 | ZERO purpose-built tools for mobile detailers; vehicle VIN service history gap is critical and unaddressed; Detail Connect marketplace-focused only |
| LTD Viability | 5/5 | $149-199 LTD; r/AutoDetailing 840k community = organic distribution |
| No Free Tier | 4/5 | No free mobile detailing tools |
| Channel Access | 5/5 | r/AutoDetailing 840k, r/MobileDetailers, r/pressurewashing |
| Content Potential | 5/5 | "mobile detailing software", "auto detail app with vehicle history" = low competition SEO |
| AppSumo Fit | 4/5 | Owner-operators are AppSumo buyers |
| Review Potential | 4/5 | Before/after photo workflows generate social content naturally |
| MRR Path | 4/5 | Fleet contract management, recurring clients = subscription hooks |
| Build Feasibility | 5/5 | VIN-linked history + scheduling + before/after photos in 2-3 weeks |
| Boring Business Bonus | 5/5 | Auto detailing admin = deeply boring |

**Verdict**: BUILD — Quick Win
**Decision Status**: VALIDATING
**Next Steps**: Validate VIN-linked service history as core differentiator
**Risks**: (1) ROXO Hub could add VIN tracking; (2) Small revenue per customer; (3) Mobile-first offline sync complexity
**Key Source Links**:
- https://medium.com/@joseflifts/top-3-auto-detailing-communities-on-reddit-offer-tips-trends-and-support-for-newcomers-and-pros-50eae0254422
- https://www.detailconnect.app/
- https://roxohub.com/blog/best-software-detailing-businesses-fleet-services/
**Signal Frequency**: 4+ mentions across 20+ days — increasing (new mobile-specific signal today)

---

## Tier 2: Worth Exploring (Score 55-74)

### Mobile-First Offline Field Inspection Apps — Score: 74/105
_Maps to: `ideas/shortlisted/home-inspection-software.md` (add as angle)_

- **Pain**: "Offline" inspection apps fail in basements/attics; true offline-first architecture is rare; 1-1.5 hours per inspection wasted on manual data transfer
- **Opportunity**: Trade-specific offline-first inspection app (e.g., roofing, HVAC energy audit) with AI-generated report from photos
- **LTD Fit**: High — $99-199 LTD; replaces paper + manual report writing
- **Build**: PWA with IndexedDB + service worker + photo capture + PDF export = 3-4 weeks
- **Source**: https://www.financialcontent.com/article/marketersmedia-2026-4-8-field-inspection-app-for-home-services-with-offline-functionality-announced
- **Why Tier 2**: Generic; maps to home-inspection-software.md or becomes a feature of FSM tools

### Tenant Income Verification Standalone — Score: 73/105
_Possible new file or add to `property-management.md`_

- **Pain**: Fake pay stubs endemic in rental market; 17M+ individual landlords; no standalone income verification (only bundled screening)
- **Opportunity**: $5-10/verification or $19/mo unlimited; Plaid + Argyle direct payroll connection; white-label for PM platforms
- **LTD Fit**: $79 LTD; per-verification as primary model
- **Build**: Plaid + Argyle integrations + simple UI = 3-4 weeks (API complexity is the risk)
- **Source**: https://medium.com/@e2larsen/50-saas-ideas-pulled-straight-from-reddit-pain-points-a64569371691
- **Why Tier 2**: Needs Plaid/Argyle partnership complexity; may be better as property-management.md feature

### AI Contract Risk Scanner for Subcontractors — Score: 72/105
_Potential new file or maps to `construction-management.md`_

- **Pain**: 500k+ subcontractors sign prime contracts without legal review; pay-when-paid, indemnification, no-damage-for-delay clauses create massive hidden liability
- **Opportunity**: PDF upload → GPT-4o → plain-English risk summary at $49-149/mo or $149 LTD; Trimble acquisition of Document Crunch validates the space
- **LTD Fit**: High — subcontractors understand contract risk viscerally
- **Build**: PDF upload + GPT-4o + clause extraction = 2-3 weeks
- **Source**: https://wepitched.com/blog/why-ai-native-vertical-saas-funding-trends-2026-favor-the-niche
- **Why Tier 2**: AI hallucination on legal documents = liability risk; smaller TAM than FSM tools

### AI Scribe for Independent Healthcare Practices (Chiro/OT/Speech Therapy) — Score: 70/105
_Maps to: `ideas/shortlisted/chiropractic-practice.md`_

- **Pain**: Chiropractors/OTs spend 40%+ of day on documentation; Freed.ai is general-purpose; no clear winner for chiro/OT specifically
- **Opportunity**: Specialty-specific AI SOAP note generator at $99-199/mo; 65k+ chiro practices in US
- **LTD Fit**: Moderate — $299-499 LTD for standalone scribe
- **Build**: Audio transcription + LLM SOAP generation MVP 2-3 weeks
- **Source**: https://www.getfreed.ai/resources/best-ehr-software
- **Why Tier 2**: Freed.ai already well-established; chiro/OT are smaller markets than dentist/vet

### Landscaping AI Bidding Tool (Residential Satellite Takeoff) — Score: 70/105
_Maps to: `ideas/shortlisted/landscaping-lawn-care.md` (add as feature angle)_

- **Pain**: Residential landscapers spend hours measuring lots manually; Attentive.ai ($12M raised) targets commercial only
- **Opportunity**: Google Maps API + AI → instant residential lawn size estimate + pricing calculator at $29-79/mo
- **LTD Fit**: High — solo landscapers = AppSumo audience
- **Build**: Google Maps API + area calculation + pricing rules = 3-4 weeks
- **Source**: https://techcrunch.com/2024/02/07/attentive-ai-funding-landscaping-construction/
- **Why Tier 2**: Feature of lawn care software rather than standalone; Attentive could expand downmarket

### Franchise & Multi-Location Service Brand Operations — Score: 68/105
_Maps to: `ideas/shortlisted/micro-franchise-ops.md`_

- **Pain**: FranConnect overbuilt for 5-25 location service brands; cleaning/HVAC/pest control franchises need location performance benchmarking + SOP enforcement
- **Opportunity**: $99-299/mo per location; PE-backed roll-ups = growing TAM
- **LTD Fit**: Low — multi-location ops = ongoing support needed
- **Build**: 4-6 weeks for dashboard + location benchmarking
- **Source**: https://blog.serchen.com/multi-location-software-is-a-mess/
- **Why Tier 2**: LTD doesn't work well; complex sales; better as enterprise MRR play

### AI Predictive Maintenance for HVAC (IoT Layer) — Score: 62/105

- **Pain**: 30% unplanned downtime; IoT on HVAC equipment generates failure prediction signals
- **Opportunity**: Lightweight IoT + AI layer for small HVAC shops offering "smart maintenance contracts" to commercial clients
- **LTD Fit**: Low — IoT requires ongoing connectivity
- **Build**: Hardware + data pipeline = 6-12 weeks minimum; not a 4-6 week MVP
- **Source**: https://fieldworkhq.com/2025/12/26/field-service-management-trends-in-2026/
- **Why Tier 2**: Hardware dependency; 6-12 week minimum; low LTD fit; better as feature of FSM platform

---

## Tier 3: Weak / Pass (Score <55)

- **ELD Compliance Standalone (Owner-Operator)** — Score: 55/105. Compliance-critical = no LTD. Hardware certification required. Better served by Small Fleet TMS. PASS on standalone.
- **IoT Predictive Maintenance Standalone** — Score: 40/105. Hardware required. 6-12 week minimum build. No LTD. Enterprise market. PASS.
- **Dental Practice Standalone** — Already fully covered in dental-practice.md (93/105) with BMAD pipeline active. Not a separate evaluation needed.

---

## Top 3 Recommendations

1. **Tattoo Studio Management** — Score: 92/105 — New idea named by 3+ IH sources, existing tools universally panned, LTD 5/5, 21k+ studios, build in 3-4 weeks. — Source: https://www.wearefounders.uk/10-saas-ideas-to-avoid-as-an-indie-hacker-in-2026/

2. **Residential Care Home Compliance Tracker** — Score: 91/105 — CQC digital mandate 2025 = regulatory tailwind; 17k UK homes on paper/spreadsheets; enterprise tools at $500-2k/mo; nothing affordable exists; build in 3-4 weeks. — Source: https://millipixels.com/blog/micro-saas-startup-ideas-2026

3. **Mobile Dog Groomer Scheduling** — Score: 90/105 — Zero purpose-built tools for mobile (not salon) groomers; 150k+ operators; named by 3+ IH sources; LTD 5/5; distribution via mobile grooming FB groups (50k+ members). — Source: https://entrepreneurloop.com/bootstrapped-saas-niches-solo-founders/

---

## Meta-Findings

1. **PE acquisition = customer churn signal (recurring)**: Skimmer (Mainsail $74M), Service Autopilot (declining post-acquisition), HCP (Permira). Every PE-backed acquisition in the boring business SaaS space triggers immediate customer defection searches. Watch for the next acquisition.

2. **Trimble's Document Crunch acquisition (Apr 2, 2026)** is the biggest new market signal: AI document analysis is now validated for construction at enterprise level. The SMB/subcontractor tier ($49-149/mo) is completely unaddressed.

3. **Two independent HN founders building "solo contractor FSM" in same week (March 2026)** = strongest independent signal confirmation. When multiple founders independently see the same gap, the market is real but execution is missing.

4. **CQC digital mandate (UK, 2025)** creates a regulatory forcing function for care home compliance software similar to EVV mandates in US home care. Regulatory catalysts = low churn, high urgency.

5. **Tattoo + mobile groomers + care homes**: three new "micro-niche" ideas validated simultaneously by 3+ IH community sources. These are quick-build, clear LTD, AppSumo-friendly ideas with extremely low competition.
