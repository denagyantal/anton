# Idea Evaluation — 2026-04-10

**Sources evaluated**: reddit-2026-04-09, reddit-2026-04-10, hn-indiehackers-2026-04-09, hn-indiehackers-2026-04-10, competitor-analysis-2026-04-09, competitor-analysis-2026-04-10, trends-2026-04-09, trends-2026-04-10

**Total raw ideas reviewed**: 38 unique signals across 8 files
**Dedup notes**: All FSM/trades, cleaning, landscaping, auto repair, property mgmt signals mapped to existing canonical shortlisted files. One new Tier 1 idea identified (Church Management). Two new Tier 2 ideas identified (Hotel/B&B PMS, Access Control Software).

---

## Tier 1: Strong Opportunities (Score 75+)

### EXISTING — Field Service Management (Solo/Micro Trades) — Score: 101/105
| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | ServiceTitan IPO (TTAN) at $961M revenue validates category at scale; 500K+ HVAC businesses |
| Competitor Weakness | 5/5 | New HN thread: 186 upvotes/260 comments on trades millionaires; ServiceTitan per-tech pricing documented |
| LTD Viability | 5/5 | $79 LTD; solo operators are AppSumo's classic buyer |
| No Free Tier | 5/5 | No credible free FSM for trades |
| Channel Access | 5/5 | r/HVAC, r/Plumbing, r/electricians active daily |
| Content Potential | 5/5 | "ServiceTitan alternative" = high-volume search |
| AppSumo Fit | 4/5 | ServiceTitan alternatives sell consistently on AppSumo |
| Review Potential | 4/5 | Trade operators review on G2, Capterra, BBB |
| MRR Path | 5/5 | Per-tech upsell path; AI voice/dispatch as upsell |
| Build Feasibility | 4/5 | Core MVP 4-6 weeks; QB sync ongoing maintenance |
| Boring Business Bonus | 5/5 | Deeply boring trades |

**Verdict**: BUILD
**Decision Status**: BUILDING — see `../ideas/decisions.md`
**Next Steps**: Continue building; AI voice/dispatch bolt-on is the confirmed upsell path (Avoca $225M validation)
**Risks**: (1) FieldPulse/Jobber launch stripped-down cheap tiers; (2) QB API maintenance; (3) trade-specific pricebook data per vertical
**Key Source Links**:
- https://fieldcamp.ai/reviews/servicetitan/
- https://news.ycombinator.com/item?id=41828896 (186 upvotes, 260 comments — trades millionaires thread)
- https://korekomfortsolutions.com/jobber-vs-housecall-pro-pricing-hidden-fees-real-costs-2026/
- https://www.fieldpulse.com/resources/blog/workiz-alternatives
**Signal Frequency**: 14+ mentions across 23+ days — stable at maximum signal

---

### EXISTING — Auto Repair Shop Management — Score: 98/105
| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | Auto repair software market $30.12B in 2025, growing 14% CAGR to $34.32B in 2026 |
| Competitor Weakness | 4/5 | Shopmonkey v2.0 broke UX; Tekmetric cloud-only = offline death; $199-439/mo pricing gap |
| LTD Viability | 4/5 | JRD Garage $99 one-time alternative gaining traction validates LTD appetite |
| No Free Tier | 4/5 | ARI at $20/mo is near-free but feature-bare |
| Channel Access | 4/5 | r/MechanicAdvice, diag.net, ASA forums, NAPA networks |
| Content Potential | 4/5 | "Mitchell1 alternative cheap", "digital vehicle inspection software" |
| AppSumo Fit | 3/5 | Moderate AppSumo awareness in this category |
| Review Potential | 4/5 | Shop owners review on G2, Capterra, shop forums |
| MRR Path | 4/5 | DVI, parts ordering, multi-shop add-on |
| Build Feasibility | 3/5 | VIN lookup, parts catalog, DVI = 6-8 week MVP |
| Boring Business Bonus | 5/5 | Auto repair = deeply boring/unsexy |

**Verdict**: BUILD
**Decision Status**: BUILDING — see `../ideas/decisions.md`
**Next Steps**: Standalone DVI tool (3-4 week MVP) as wedge into full shop management — 1 extra $500 job/month from photos that get customers to approve work
**Risks**: (1) Integration complexity for parts catalogs; (2) Tekmetric/AutoLeap could add pricing tier; (3) VIN data API costs
**Key Source Links**:
- https://dev.to/jaydurangodev/i-built-a-99-mitchell1-alternative-that-auto-shop-owners-actually-want-11bi
- https://www.capterra.com/p/190952/Tekmetric/reviews/
- https://www.capterra.com/p/169022/Shopmonkey/reviews/
- https://diag.net/msg/m79uf4yb3eb9qotjcphts1hcdr
- https://news.ycombinator.com/item?id=47246004 (Motara show HN, March 2026)
**Signal Frequency**: 8+ mentions across 2 days — increasing (new competitor deep-dive + market size data)

---

### EXISTING — Cleaning Service Management — Score: 98/105
| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | ZenMaid $3M/yr validates; ~1M cleaning businesses in US |
| Competitor Weakness | 4/5 | Housecall Pro 253% price escalation documented; ZenMaid hits wall at 8-10 employees |
| LTD Viability | 5/5 | $99-149 LTD; cleaning owners are classic price-sensitive buyers |
| No Free Tier | 3/5 | Some free scheduling tools exist |
| Channel Access | 4/5 | r/housekeeping, FB groups "Cleaning Business Owners" (50K+) |
| Content Potential | 4/5 | "cleaning business software", "ZenMaid alternative" |
| AppSumo Fit | 4/5 | ZenMaid's 3,000+ customer base proves demand; HCP billing reputation drives churn |
| Review Potential | 3/5 | Less review-oriented market |
| MRR Path | 4/5 | Flat-rate SMS, payment processing, route optimization upsells |
| Build Feasibility | 5/5 | Simpler workflows; 3-5 week MVP |
| Boring Business Bonus | 5/5 | Cleaning = deeply boring |

**Verdict**: BUILD
**Decision Status**: BUILDING — see `../ideas/decisions.md`
**New Signal**: Competitor analysis confirms first flat-rate (no-per-seat) residential+commercial bridge is still unclaimed. HCP hidden fees at 253% increase is live churn driver. ZenMaid per-seat at $289/mo for 10 cleaners = same cost as HCP without the features.
**Key Source Links**:
- https://get.zenmaid.com/pricing
- https://www.capterra.com/p/133875/ZenMaid-Software/reviews/
- https://www.capterra.com/p/140363/HouseCall-Pro/reviews/
- https://vev.co/blog/housecall-pro-vs-zenmaid
**Signal Frequency**: 6+ mentions across 2 days — stable

---

### EXISTING — Landscaping & Lawn Care — Score: 98/105
| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | 600K+ businesses; LMN, Jobber, Service Autopilot prove market |
| Competitor Weakness | 5/5 | FieldRoutes charges $500 for data export (data hostage); Service Autopilot 10%+ price hikes + GPS removed post-acquisition; Yardbook Android-only |
| LTD Viability | 4/5 | $149-199 hybrid LTD; SMS credits consumed separately |
| No Free Tier | 3/5 | Yardbook free tier is the barrier |
| Channel Access | 5/5 | r/lawncare, LawnSite.com (500K+ posts), FB "Lawn Care Entrepreneurs" |
| Content Potential | 4/5 | "Jobber alternative", "lawn care software route optimization" |
| AppSumo Fit | 4/5 | Lawn care tools sell well on AppSumo |
| Review Potential | 4/5 | Lawn site forums, Capterra reviews |
| MRR Path | 4/5 | Chemical compliance module, crew GPS, seasonal billing |
| Build Feasibility | 4/5 | Route optimization + iOS/Android + recurring billing; 5-6 weeks |
| Boring Business Bonus | 5/5 | Lawn care = deeply boring |

**Verdict**: BUILD
**Decision Status**: BUILDING — see `../ideas/decisions.md`
**New Signal**: Competitor analysis confirms route optimization tier-locked at $199/mo (Jobber) = key differentiator opportunity. Chemical compliance monopoly crumbling post-Service Autopilot acquisition = winnable gap. Before/after photo invoicing as dispute-reduction feature identified.
**Key Source Links**:
- https://www.capterra.com/p/142064/LMN/reviews/
- https://www.capterra.com/p/122075/Service-Autopilot/reviews/
- https://www.g2.com/products/fieldroutes-a-servicetitan-company/reviews
- https://www.lawnsite.com/threads/lawn-care-software-recommendations.500583/
**Signal Frequency**: 6+ mentions across 2 days — increasing (new competitor analysis)

---

### EXISTING — Property Management for Small Landlords — Score: 100/105
| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | 14M independent landlords in US; AppFolio, Buildium, TurboTenant prove market |
| Competitor Weakness | 5/5 | AppFolio $298/mo minimum excludes small landlords; Buildium forced price hikes with no notice; TurboTenant no customer service on free plan |
| LTD Viability | 5/5 | $79-149 LTD; landlords are value-conscious buyers |
| No Free Tier | 3/5 | TurboTenant, Innago, Stessa offer free tiers |
| Channel Access | 5/5 | BiggerPockets 2M+, r/realestateinvesting 500K+, r/landlord 65K+ |
| Content Potential | 5/5 | "landlord software", "Buildium alternative", "Schedule E tax software" |
| AppSumo Fit | 5/5 | Real estate investors are AppSumo's deal-savvy buyers |
| Review Potential | 4/5 | Landlord communities review heavily |
| MRR Path | 5/5 | Banking interchange, tenant screening, lease templates |
| Build Feasibility | 3/5 | Banking integration is complex (Plaid + ACH) |
| Boring Business Bonus | 4/5 | Landlording = unglamorous |

**Verdict**: BUILD
**Decision Status**: BUILDING — see `../ideas/decisions.md`
**New Signal**: AI-powered Schedule E tax prep identified as white space (AI expense categorization tool). Multiple PH launches (PapayaPods, Rentger, RentFollow) = market heating. Competitor analysis confirms Buildium unexpected price hike October 2025 with no communication = active churn opportunity.
**Key Source Links**:
- https://agorareal.com/compare/buildium-vs-appfolio/
- https://www.capterra.com/p/47428/Buildium-Property-Management-Software/reviews/
- https://www.turbotenant.com/blog/best-property-management-software-for-small-landlords/
- https://www.producthunt.com/products/papayapods
**Signal Frequency**: 6+ mentions across 2 days — stable

---

### EXISTING — Insurance Agent CRM & Policy Tracker — Score: 91/105
| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 4/5 | 38,000+ independent agencies; Applied Epic, EZLynx prove market |
| Competitor Weakness | 5/5 | Applied Epic $1,100+/mo + $10-25K setup; EZLynx described as "hell" |
| LTD Viability | 4/5 | $79-99 LTD for lite CRM |
| No Free Tier | 4/5 | No notable free insurance CRM |
| Channel Access | 4/5 | r/Insurance 200K+, Insurance Forums, state associations |
| Content Potential | 4/5 | "insurance agent CRM", "EZLynx alternative" |
| AppSumo Fit | 3/5 | Insurance agents unlikely on AppSumo |
| Review Potential | 4/5 | Insurance agent communities review on Capterra |
| MRR Path | 4/5 | Policy renewal automation, commission tracking |
| Build Feasibility | 4/5 | CRM + renewal tracker = 4-5 week MVP |
| Boring Business Bonus | 5/5 | Insurance agent admin = deeply boring |

**Verdict**: EXPLORE FURTHER
**Decision Status**: VALIDATING — see `../ideas/decisions.md`
**New Signal**: Today's scan confirms 38,000+ agencies and "missed policy renewals = #1 reason clients leave" adds urgency angle. Small agencies (1-5 agents) confirmed as underserved at the small end.
**Key Source Links**:
- https://agencymate.com/insights/insurance-broker-crm/
- https://www.brightway.com/news/best-agency-management-systems-ams-platforms-for-insurance-agencies-2025
- https://www.insurance-forums.net/community/threads/who-has-the-best-mgmt-system.112600/
**Signal Frequency**: 2 mentions across 1 day — new signal; previously 1 mention (Mar 4)

---

### EXISTING — Pest Control — Score: 89/105
| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | $30B US market; GorillaDesk 437% growth validates; HN thread 448 pts/183 comments |
| Competitor Weakness | 4/5 | GorillaDesk feature-bloated; PestPac enterprise; HN founder confirms Salesforce customization = fragile |
| LTD Viability | 4/5 | $79-149 LTD; AI upsell tool as new LTD angle |
| No Free Tier | 4/5 | No free pest control tools |
| Channel Access | 4/5 | Pest control Facebook groups, NPMA, state associations |
| Content Potential | 5/5 | "pest control software", "GorillaDesk alternative" |
| AppSumo Fit | 3/5 | Less AppSumo-friendly market |
| Review Potential | 4/5 | Chemical compliance creates stickiness and reviews |
| MRR Path | 4/5 | Recurring service model; compliance updates |
| Build Feasibility | 4/5 | Route optimization + chemical logging + recurring scheduling |
| Boring Business Bonus | 5/5 | Pest control = deeply boring |

**Verdict**: BUILD
**Decision Status**: VALIDATING — see `../ideas/decisions.md`
**New Signal**: HN post (448 pts, 183 comments, March 2026) on founder working undercover as pest tech = massive validation. Key insight from comments: core FSM market mature, but AI upsell coach during service visits is the white space. Commercial compliance reporting (FDA/USDA-regulated accounts) is new angle.
**Key Source Links**:
- https://news.ycombinator.com/item?id=47509571 (448 pts, 183 comments)
- https://www.onhand.pro/p/i-wanted-to-build-vertical-saas-for-pest-control-i-took-a-technician-job-instead
- https://gorilladesk.com/
**Signal Frequency**: 5+ mentions across 2 days — increasing

---

### EXISTING — Small Fleet Trucking TMS — Score: 84/105
| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 4/5 | 500K+ small carriers; Truckbase/Toro TMS prove market; Pallet $50M at 700% revenue growth |
| Competitor Weakness | 4/5 | TMS $700 startup + $585/mo for one user; McLeod Windows-only; no mobile-native option |
| LTD Viability | 4/5 | $299-499 LTD for owner-operators |
| No Free Tier | 3/5 | AscendTMS has free tier |
| Channel Access | 4/5 | r/trucking 200K+, TruckersReport 400K+, trucking Facebook groups |
| Content Potential | 4/5 | "TMS for owner operators", "trucking software small fleet" |
| AppSumo Fit | 2/5 | Truckers not on AppSumo typically |
| Review Potential | 3/5 | Forum-centric, less G2/Capterra |
| MRR Path | 4/5 | IFTA compliance, factoring integration, fleet maintenance |
| Build Feasibility | 3/5 | IFTA calculation + BOL OCR + dispatch = 6-8 weeks |
| Boring Business Bonus | 5/5 | Trucking = deeply boring |

**Verdict**: EXPLORE FURTHER
**Decision Status**: VALIDATING — see `../ideas/decisions.md`
**New Signal**: AI BOL digitization identified as focused wedge — camera → invoice → factoring submission. Pallet ($50M, 700% revenue growth) validates AI back-office for trucking. TruckersReport 400K+ members confirm active community.
**Key Source Links**:
- https://truckpedia.io/resources/top-7-tms-software-for-carriers-in-2025-and-how-to-choose
- https://www.thetruckersreport.com/truckingindustryforum/threads/transportation-management-system-tms.1293749/
- https://www.truckbase.com/
**Signal Frequency**: 3+ mentions across 2 days — increasing

---

### EXISTING — AI Voice Receptionist for Home Services — Score: 88/105
| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | Avoca AI $1.4M revenue / $225M valuation; 258% lift in after-hours bookings documented |
| Competitor Weakness | 4/5 | All AI receptionists priced for enterprise; $300-1,000+/mo leaves solo operator out |
| LTD Viability | 3/5 | Ongoing API costs (Twilio, LLM tokens); LTD on capped minutes viable |
| No Free Tier | 4/5 | No free AI voice answering |
| Channel Access | 5/5 | All trade communities; AI receptionist is universal pain |
| Content Potential | 5/5 | "AI answering service HVAC", "never miss a plumbing call" |
| AppSumo Fit | 3/5 | Moderate fit; capped-minute LTD structure needed |
| Review Potential | 3/5 | Early market; reviews building |
| MRR Path | 4/5 | Per-minute overages; CRM booking integrations |
| Build Feasibility | 4/5 | Twilio + Vapi/Bland.ai + OpenAI; 2-3 week MVP |
| Boring Business Bonus | 5/5 | Solves a boring problem for boring businesses |

**Verdict**: BUILD (AI upsell on FSM)
**Decision Status**: VALIDATING — see `../ideas/decisions.md`
**New Signal**: $45K-$120K/year in missed calls per average HVAC contractor quantified. Contractors miss ~27% of inbound calls. Multiple new entrants (AutomateNexus Voice Jan 2026). Ultra-simple $49/mo tier for solo operators confirmed as white space.
**Key Source Links**:
- https://www.avoca.ai/
- https://www.leadtruffle.co/blog/best-ai-answering-services-contractors-2026/
- https://www.withallo.com/blog/ai-phone-answering-services-for-hvac
**Signal Frequency**: 4+ mentions across 2 days — increasing

---

### EXISTING — AI Blueprint-to-Quote / Estimating for Trades — Score: 87/105
| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | Rebar $14M Series A (March 2026); doubled ARR in 6 weeks; 40 clients; 7 are investors |
| Competitor Weakness | 4/5 | Rebar = enterprise; residential solo-contractor tier untouched |
| LTD Viability | 4/5 | $79-149 LTD for residential trade version |
| No Free Tier | 4/5 | No free AI estimating tools at this quality |
| Channel Access | 4/5 | r/construction, r/HVAC, painting FB groups |
| Content Potential | 4/5 | "AI estimating software painter", "construction takeoff app" |
| AppSumo Fit | 4/5 | Tool-savvy buyers; strong value prop story |
| Review Potential | 3/5 | Early market |
| MRR Path | 3/5 | Per-estimate tier or monthly subscription |
| Build Feasibility | 4/5 | PDF/image upload + LLM extraction + template; 4-6 weeks |
| Boring Business Bonus | 4/5 | Estimating is unglamorous |

**Verdict**: BUILD (as FSM upsell / standalone)
**Decision Status**: VALIDATING
**New Signal**: Rebar $14M Series A (Prudence + Founder Collective, March 2026) — 7 of 40 clients are investors. Doubled ARR in 6 weeks of 2026. Residential-side (not commercial supply) remains wide open. QuoteIQ ($29.99/mo) proves indie price point.
**Key Source Links**:
- https://news.crunchbase.com/real-estate-property-tech/ai-generated-hvac-quotes-rebar-seriesa/
- https://www.businesswire.com/news/home/20260310158768/en/Rebar-Closes-$14M-Series-A
- https://myquoteiq.com/
**Signal Frequency**: 4+ mentions across 2 days — increasing (second consecutive funding signal)

---

### EXISTING — Veterinary Practice Management — Score: 85/105
| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | Market grew $663M→$718M at 9.31% CAGR; $1.23B by 2032; 30K+ US clinics |
| Competitor Weakness | 4/5 | Cornerstone $420+/mo + server costs; DaySmart limited mobile; no affordable cloud option |
| LTD Viability | 3/5 | Compliance/data needs make pure LTD impractical; standalone AI SOAP notes at $149-199 LTD |
| No Free Tier | 4/5 | No free credible vet PM software |
| Channel Access | 3/5 | r/veterinary, vet associations, specialty vet communities |
| Content Potential | 4/5 | "cloud vet practice management", "Avimark alternative" |
| AppSumo Fit | 3/5 | Vets are professionals; standalone AI tools sell better |
| Review Potential | 3/5 | Vet communities review on specialty forums |
| MRR Path | 4/5 | Telemedicine integration, AI SOAP notes, client comms automation |
| Build Feasibility | 3/5 | Full PIMS = 3-4 months; standalone client comms = 4-6 weeks |
| Boring Business Bonus | 4/5 | Veterinary admin = unglamorous |

**Verdict**: EXPLORE FURTHER
**Decision Status**: VALIDATING
**New Signal**: Market size updated — $663M (2025) → $718M (2026) at 9.31% CAGR, reaching $1.23B by 2032. 78% improved efficiency after adoption. Standalone client comms platform ($49/mo) identified as faster-to-market wedge vs. full PIMS replacement. AI SOAP note tool ($149-199 LTD) as even faster wedge.
**Key Source Links**:
- https://www.shepherd.vet/blog/8-best-ai-powered-veterinary-practice-management-software-platforms-2026-comparison-guide/
- https://www.nectarvet.com/post/best-vet-appointment-scheduling-software
- https://www.researchandmarkets.com/report/veterinary-practice-management-software
**Signal Frequency**: 4+ mentions across 2 days — increasing

---

### EXISTING — Bookkeeping / QB Alternative for Micro-Businesses — Score: 83/105

**Verdict**: EXPLORE FURTHER
**Decision Status**: VALIDATING
**New Signal**: QuickBooks cost documented rising 275% from 2021-2026 ($1,106 → $4,149 for one business). Support rep told 20-year customer "if you don't like it, go find an alternative." QBO Desktop being killed = forced migration wave. 33M small businesses in the US = massive TAM.
**Signal Frequency**: 3+ mentions across 2 days — stable
**Key Source Links**:
- https://quickbooks.intuit.com/learn-support/en-us/other-questions/price-increase-2025/00/1546802
- https://www.fondo.com/blog/quickbooks-reddit-vs-xero

---

### EXISTING — Multi-Site Contractor Time Tracking — Score: 82/105

**Verdict**: BUILD
**Decision Status**: VALIDATING
**New Signal**: GPS-verified clock-in tied to job sites confirmed as key gap. Workyard $8-13/user/mo + Hubstaff per-user pricing = flat $29/mo for up to 10 workers is differentiated. Recurring across multiple trades subreddits.
**Signal Frequency**: 1 mention today — stable

---

### EXISTING — UK MTD Compliance for Trades — Score: 80/105

**Verdict**: BUILD
**Decision Status**: VALIDATING
**New Signal**: HN $500/month thread (485 upvotes, 560 comments, Dec 2025) confirmed multiple participants building niche tools for local services. HMRC MTD mandate creates regulatory pull — mandatory demand rather than discretionary. £39-59/mo with WhatsApp-friendly invoice sending confirmed as positioning.
**Signal Frequency**: 1 mention today — stable
**Key Source Links**:
- https://news.ycombinator.com/item?id=46307973

---

### EXISTING — Pressure Washing & Auto Detailing CRM — Score: 79/105

**Verdict**: BUILD
**Decision Status**: VALIDATING
**New Signal**: Before/after photo CRM + chemical mix calculator + recurring client reminders confirmed as the three missing features. r/pressurewashing is fast-growing community. QuoteIQ covers pressure washing but not detailing. $29/mo or $79 LTD.
**Signal Frequency**: 1 mention today — stable
**Key Source Links**:
- https://myquoteiq.com/pressure-washing-crm-business-software/

---

### EXISTING — Contractor Quoting / Estimation — Score: 78/105

**Verdict**: EXPLORE FURTHER
**Decision Status**: VALIDATING
**New Signal**: Security failure case documented — contractor emailing bid to wrong client, exposing another customer's personal data. Quote-open tracking + one-click approval confirmed as #1 missing feature. 3.7M construction businesses = large TAM.
**Signal Frequency**: 2 mentions across 2 days — stable

---

### EXISTING — Tax Professional Software (Workflow + Portal) — Score: 77/105

**Verdict**: EXPLORE FURTHER
**Decision Status**: VALIDATING
**New Signal**: 62% of tax professionals cite price as top complaint. Only 37% "very satisfied" with tech stack. 60% received zero training from software vendor. Seasonal scheduling tool (intake form + document upload + staff capacity limits) identified as narrow MVP wedge.
**Signal Frequency**: 2 mentions across 2 days — stable
**Key Source Links**:
- https://www.thetaxadviser.com/issues/2025/aug/2025-tax-software-survey/

---

### NEW — Church Management Software — Score: 75/105
| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 4/5 | The Church Co. at $25K MRR (confirmed IH product page); Planning Center, Pushpay, Breeze prove market; 300K+ churches in US |
| Competitor Weakness | 4/5 | Planning Center per-module pricing = expensive for small churches; Breeze acquired; Rock RMS open-source has no commercial version |
| LTD Viability | 4/5 | Churches have annual budget approval cycles; one-time payment aligns with committee buying model |
| No Free Tier | 3/5 | Rock RMS is open-source/free |
| Channel Access | 3/5 | Church leadership FB groups, denomination networks, pastoral communities |
| Content Potential | 3/5 | "church management software", "Planning Center alternative" = decent search volume |
| AppSumo Fit | 3/5 | Churches buy at committee level; slower sales cycle but repeat buyers |
| Review Potential | 3/5 | Church leaders review on Capterra, denomination forums |
| MRR Path | 4/5 | Churches don't churn; stable MRR; giving module adds transaction fee revenue |
| Build Feasibility | 3/5 | Member database, attendance, giving, volunteer scheduling = standard CRUD; 4-6 weeks |
| Boring Business Bonus | 4/5 | Non-profit admin = unglamorous; far from VC radar |

**Verdict**: EXPLORE FURTHER
**Decision Status**: NEW — not yet in `../ideas/decisions.md`
**Next Steps**: Validate Planning Center pricing pain with church admins; survey small churches (<200 members) on current software; assess giving module transaction fees as revenue model
**Risks**: (1) Sales cycle is slow (committee approval); (2) Trust is critical for donation/giving data; (3) Rock RMS free tier creates price anchor
**Key Source Links**:
- https://www.indiehackers.com/product/thechurchco/25k-mrr--M3ZTVv-K7tkE5_q4niO (The Church Co. at $25K MRR)
- https://www.planningcenter.com/ (per-module pricing = pain for small churches)
**Signal Frequency**: 1 mention — new discovery

---

### EXISTING — Home Inspection Software — Score: 75/105

**Verdict**: EXPLORE FURTHER
**Decision Status**: VALIDATING
**New Signal**: Spectora reached $30M ARR ($2.5M/month), sold to PE at $110M valuation. Now moving upmarket to Enterprise. Solo inspectors (1-3 person shops) being abandoned. Adjacent inspection niches (commercial property, swimming pool, fire safety) still have no dominant player.
**Key Source Links**:
- https://www.indiehackers.com/post/tech/hitting-30m-arr-with-the-first-product-he-built-oJ1E1ukp60M7OZZXl2AJ

---

### EXISTING — Small Batch Food Production / Craftplan SaaS — Score: 75/105

**Verdict**: EXPLORE FURTHER
**Decision Status**: VALIDATING
**New Signal**: Craftplan open-source received 577 HN upvotes (Feb 1, 2026, #3 Show HN of the month). No commercial version exists. Founder built because wife was opening micro-bakery and found nothing affordable. This is an explicit "open-source gap" opportunity — build the hosted SaaS version.
**Key Source Links**:
- https://news.ycombinator.com/item?id=46847690 (577 pts, 167 comments)
- https://github.com/puemos/craftplan

---

## Tier 2: Worth Exploring (Score 55–74)

### NEW — Hotel / B&B Property Management Software — Score: 72/105
| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 4/5 | Mews, Cloudbeds prove market; HN comment "there's like two, both garbage" from professional |
| Competitor Weakness | 4/5 | Mews/Cloudbeds consolidating mid-market; boutique hotel/B&B segment being abandoned |
| LTD Viability | 3/5 | Ongoing OTA integrations (Booking.com, Expedia, Airbnb APIs) make pure LTD hard |
| No Free Tier | 4/5 | Hotels always pay for PMS |
| Channel Access | 3/5 | Boutique hotel FB groups, B&B associations, small innkeeper communities |
| Content Potential | 3/5 | "boutique hotel PMS", "B&B management software" = moderate volume |
| AppSumo Fit | 3/5 | Small inn owners could be AppSumo buyers |
| Review Potential | 3/5 | Hospitality buyers review on Capterra/TrustRadius |
| MRR Path | 4/5 | OTA commission share + monthly SaaS fee = strong MRR |
| Build Feasibility | 2/5 | OTA integrations (Airbnb, Booking.com, Expedia) are complex; 3-4 month MVP |
| Boring Business Bonus | 4/5 | Innkeeping = deeply boring; not VC-attractive |

**Verdict**: EXPLORE FURTHER
**Decision Status**: NEW
**Next Steps**: Validate specific OTA integration complexity; survey boutique hotel owners on current software pain; assess competition (Little Hotelier, Lodgify) at the B&B tier
**Risks**: (1) OTA integration complexity = significant ongoing maintenance; (2) Cloudbeds/Mews have strong brand loyalty in mid-market; (3) Long sales cycle for hospitality
**Key Source Links**:
- https://news.ycombinator.com/item?id=38882314 (70 upvotes, 76 comments — "only two, both garbage")
- https://news.ycombinator.com/item?id=38882314#38889134
**Signal Frequency**: 1 mention — new discovery

---

### NEW — Access Control / Biometric Software for Small Offices — Score: 69/105
| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 3/5 | Kisi, Brivo prove market; HN comment validates frustration with Chinese hardware software |
| Competitor Weakness | 4/5 | Chinese hardware UX genuinely terrible; Kisi/Brivo $150-500+/mo too expensive |
| LTD Viability | 3/5 | Per-door pricing makes LTD complex; $199-299/door LTD possible |
| No Free Tier | 4/5 | Security software always paid |
| Channel Access | 3/5 | IT manager forums, coworking space operator communities |
| Content Potential | 3/5 | "ZKTeco cloud software", "access control small office" = niche volume |
| AppSumo Fit | 3/5 | SMB tech tools sell on AppSumo |
| Review Potential | 3/5 | IT/office managers review on G2 |
| MRR Path | 4/5 | Security is sticky; per-door recurring revenue |
| Build Feasibility | 2/5 | Hardware API integration; device-specific SDK work needed; 8-12 week MVP |
| Boring Business Bonus | 4/5 | Facilities/security management = boring |

**Verdict**: PASS for now — hardware dependency creates MVP complexity disproportionate to reward
**Decision Status**: NEW
**Key Source Links**:
- https://news.ycombinator.com/item?id=38882314#38889565 (specific HN comment on biometric/NFC gap)
**Signal Frequency**: 1 mention — new discovery

---

### EXISTING — Restaurant POS (No-Contract, Transparent Pricing) — Score: 68/105

**Verdict**: EXPLORE FURTHER (existing shortlisted, already evaluated)
**New Signal**: Toast processing lock-in + rate hikes "at will" documented. SpotOn "buggy, unreliable." Square designed for retail, not restaurants. No-contract month-to-month positioning remains differentiated. LTD viability remains low (POS requires ongoing infrastructure).
**Signal Frequency**: 2 mentions across 2 days — stable

---

### EXISTING — STR Turnover Coordinator — Score: 68/105

**New Signal**: Multi-listing hosts (3-20 properties) spending hours on turnover coordination. Turno/TurnoverBnB $8-12/listing viewed as overpriced for hosts with <5 listings. Lightweight auto-sync (Airbnb/VRBO calendars → cleaner SMS → photo upload → host notification) as MVP.
**Signal Frequency**: 1 mention today — stable

---

### EXISTING — Dental Practice Management — Score: 67/105

**New Signal**: Archy raised $20M Series B (TCV + Bessemer, Oct 2025). 300% YoY growth, 80 hours/month saved per practice. AI dental is the leading wedge — standalone AI insurance eligibility checker at $99-149/mo or LTD is the fastest path.
**Signal Frequency**: 2 mentions across 2 days — increasing

---

### EXISTING — Chiropractic / PT Billing + Scheduling — Score: 65/105

**New Signal**: AI insurance eligibility checker for chiropractors/PTs identified as narrow wedge — saves 2 hrs/day of front desk work. $99-149/mo or LTD. Fastest path to market of any healthcare vertical.
**Signal Frequency**: 2 mentions across 2 days — stable

---

### EXISTING — Construction Job Costing + Estimating — Score: 63/105

**New Signal**: Construction management software market $10.64B in 2025, growing to $11.58B at 12% CAGR. Permit tracking gap confirmed — no focused tool for small GCs to track permit status across active jobs. Subcontractor lien waiver collection identified as second gap.
**Signal Frequency**: 2 mentions across 2 days — increasing

---

### EXISTING — Funeral Home Management — Score: 62/105

**New Signal**: 95% of US funeral homes are family-owned independents. Modern cloud alternatives (Gather, Passare) still have poor UX. Digital family portal (live case updates), cremation QR tracking, digital signatures as differentiators.
**Signal Frequency**: 1 mention today — stable

---

### Live Event Production Timer / Adjacent Tools — Score: 62/105

**Verdict**: EXPLORE FURTHER as case study model
**Notes**: Stagetimer at $15K MRR + $5K one-time = $20K/month. Built simple, niche, B2B. Primary lesson: extremely simple niche B2B tools can reach $15-20K MRR via SEO on low-volume, high-intent keywords. Adjacent: conference session management, hybrid event rundown sync tools.
**Signal Frequency**: 1 mention — new discovery

---

### EXISTING — Skilled Trades Workforce / Blue-collar ATS — Score: 60/105

**New Signal**: HN pest control thread confirms recruitment/onboarding black hole (founder applied for tech job, got no reply for days). Blue-collar ATS for field service: job posting to trades boards + SMS follow-up + background check integration + license tracking. No good indie tool exists vs. Workable/Greenhouse (too corporate).
**Signal Frequency**: 1 mention today — stable

---

## Tier 3: Weak / Pass (Score <55)

| Idea | Score | Reason for Pass |
|------|-------|-----------------|
| Franchise/Multi-Location Ops Layer | ~50 | Too complex to build as indie; Jobber/GorillaDesk APIs would need to cooperate; LTD economics weak |
| Tax Season Scheduling for Accounting Firms | ~48 | Very narrow seasonal use case; would need CPA community trust; TaxDome/Karbon already addressing |
| AI Healthcare Practice Admin (full replacement) | ~45 | Regulatory complexity too high for 4-person team; Archy at $47M total funding = heavily capitalized competitor |
| Geography Arbitrage (ZenMaid/Spectora for UK/AUS) | ~45 | Interesting but not worth separate evaluation here; covered by UK MTD file |

---

## Top 3 Recommendations

1. **Field Service Management** (101/105) — ServiceTitan IPO at $961M revenue validates the category; the 1-5 tech shop tier remains completely unserved. Build: flat-rate FSM with AI voice bolt-on path. LTD $79. Key source: https://news.ycombinator.com/item?id=41828896

2. **Auto Repair Shop Management** (98/105) — $30B market, 14% CAGR, and a developer just proved market appetite with a $99 one-time product. The $50-150/mo dead zone between ARI and Tekmetric is winnable. Start with standalone DVI tool as wedge. Key source: https://dev.to/jaydurangodev/i-built-a-99-mitchell1-alternative-that-auto-shop-owners-actually-want-11bi

3. **Cleaning Service Management** (98/105) — ZenMaid $3M/yr bootstrapped proves the model. Competitor analysis confirms no one has built the flat-rate residential+commercial bridge. HCP's 253% price escalation is driving active customer churn now. Key source: https://www.capterra.com/p/140363/HouseCall-Pro/reviews/

---

## Summary Signal Table

| Idea | Score | Trend | New Today |
|------|-------|-------|-----------|
| Field Service Management | 101/105 | → Stable at max | ServiceTitan IPO confirms $961M market; HN 186-pt thread |
| Property Management | 100/105 | → Stable | AI Schedule E tax prep + Buildium forced price hike Oct 2025 |
| Auto Repair Shop Management | 98/105 | ↑ Increasing | $30B market confirmed; standalone DVI wedge identified |
| Landscaping/Lawn Care | 98/105 | → Stable | FieldRoutes data hostage $500 fee; before/after photo invoicing gap |
| Cleaning Service Management | 98/105 | → Stable | Flat-rate residential+commercial bridge still unclaimed |
| Insurance Agent CRM | 91/105 | → Stable | 38K+ agencies; missed renewals = #1 client churn driver |
| Pest Control | 89/105 | ↑ Increasing | HN 448-pt founder story; AI upsell coach as new angle |
| AI Voice Receptionist | 88/105 | ↑ Increasing | $45K-120K/year missed call cost quantified; solo tier white space |
| AI Blueprint-to-Quote | 87/105 | ↑ Increasing | Rebar $14M Series A; residential side still open |
| Veterinary Practice | 85/105 | ↑ Increasing | Market $718M (+9.31% CAGR); standalone client comms wedge |
| Small Fleet Trucking TMS | 84/105 | ↑ Increasing | AI BOL digitization wedge; Pallet $50M validates |
| Bookkeeping / QB Alternative | 83/105 | → Stable | QB +275% price increase 2021-2026 documented |
| Multi-site Contractor Time Tracking | 82/105 | → Stable | GPS + flat $29/mo vs per-user pain confirmed |
| UK MTD Compliance Trades | 80/105 | → Stable | HN $500/month thread (485 upvotes) referenced |
| Pressure Washing/Detailing CRM | 79/105 | → Stable | Before/after photo CRM confirmed as differentiator |
| Contractor Quoting/Estimation | 78/105 | → Stable | Security failure case documented |
| Tax Professional Software | 77/105 | → Stable | Seasonal scheduling tool as focused wedge |
| Church Management | 75/105 | NEW | $25K MRR at The Church Co. validates; Planning Center gap |
| Home Inspection Software | 75/105 | → Stable | Spectora $30M ARR + PE acquisition = downmarket gap |
| Small Batch Food Production | 75/105 | → Stable | Craftplan 577 HN pts; no commercial version = explicit gap |
| Hotel/B&B PMS | 72/105 | NEW | HN "only two, both garbage"; Tier 2 |
| Restaurant POS | 68/105 | → Stable | No-contract positioning differentiated; LTD not viable |
| Access Control Software | 69/105 | NEW | Hardware-software gap; Tier 2 — hardware complexity a barrier |
| STR Turnover Coordinator | 68/105 | → Stable | Lightweight calendar-sync + SMS approach identified |
| Dental Practice | 67/105 | ↑ Increasing | Archy $20M Series B; AI eligibility checker as standalone wedge |
| Chiropractic/PT | 65/105 | → Stable | AI insurance eligibility checker = fastest wedge |
| Construction Management | 63/105 | ↑ Increasing | Permit tracking gap; $11.58B market (12% CAGR) |
| Funeral Home | 62/105 | → Stable | Family-owned independents; digital family portal differentiator |
| Skilled Trades ATS | 60/105 | → Stable | Recruitment black hole confirmed in HN pest control thread |
