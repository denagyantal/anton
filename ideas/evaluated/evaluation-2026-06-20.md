# Idea Evaluation — 2026-06-20

**Sources**: reddit-2026-06-20, hn-indiehackers-2026-06-20, competitor-analysis-2026-06-20, trends-2026-06-20
**Total ideas identified**: 35 across 4 sources (significant clustering around field service, lawn care, cleaning, trades)
**Deduplication note**: Most ideas map to existing shortlisted files. One genuinely new idea (Auto Detailing CRM) added today.

---

## Tier 1: Strong Opportunities (Score 75+)

### 1. Field Service Management for Solo/Micro Trades — Score: 101/105
**Existing file**: `ideas/shortlisted/field-service-management.md`
**Decision Status**: NEW (file exists, not yet built)

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | ServiceTitan $245-500/tech/mo; 3.5M home service businesses; 85%+ small |
| Competitor Weakness | 5/5 | ServiceTitan enterprise-only; HCP no route optimization; Jobber per-user |
| LTD Viability | 4/5 | $79 LTD; scheduling/invoicing low infra cost |
| No Free Tier | 4/5 | FieldVibe free but feature-bare |
| Channel Access | 5/5 | r/HVAC (140K+), r/Plumbing, ACCA chapters, trade FB groups |
| Content Potential | 5/5 | "ServiceTitan alternative", "affordable HVAC software" |
| AppSumo Fit | 5/5 | No VC-funded FSM tool has ever done AppSumo = category first |
| Review Potential | 4/5 | Trades active on G2, Capterra, FB groups |
| MRR Path | 5/5 | Per-tech or flat SaaS; AI add-ons as upsell |
| Build Feasibility | 5/5 | Core scheduling + invoicing + mobile = 4-6 week MVP |
| Boring Business Bonus | 5/5 | HVAC/plumbing = deeply boring, essential |

**Total: 101/105**

**Today's signal (QUAD-source)**:
- Reddit: ServiceTitan $245-500/tech/mo + $5K-50K setup; Housecall Pro no route optimization on any plan; "MicroField" concept gap documented; add-on cost creep ruins HCP value
- HN: FieldFlow Show HN (solo carpenter, $5/mo) confirms demand vs distribution gap; HVAC-specific CRM with EPA refrigerant compliance needed (legally required)
- Competitor Analysis: "MicroField" opportunity — route optimization included at base, no per-user fees, no $5K setup; Avoca AI $125M validates AI-for-trades category at scale
- Trends: ServiceTitan refugee market exploding — search volume for "ServiceTitan alternatives" exploding in 2026; Avoca AI $1B valuation validates AI voice for trades

**Verdict**: BUILD
**Next Steps**: Build MVP with scheduling + dispatch + invoicing + route optimization (route opt = HCP's #1 missing feature) at $49-99/mo flat. Target ServiceTitan refugees with "30-min setup, no contracts" messaging.
**Risks**: Avoca AI/Sameday AI entering adjacent AI call-answering space with $100M+ capital; Jobber/HCP could launch micro-shop tiers
**Key Source Links**:
- https://fieldcamp.ai/reviews/servicetitan/
- https://fieldcamp.ai/reviews/housecall-pro/
- https://www.getonecrew.com/post/servicetitan-reviews
- https://news.ycombinator.com/item?id=47294092 (FieldFlow Show HN)
- https://www.prnewswire.com/news-releases/avoca-raises-125m-at-1b-valuation-to-power-americas-services-economy-with-ai-302753962.html

---

### 2. Auto Repair Shop Management — Score: 100/105
**Existing file**: `ideas/shortlisted/auto-repair-shop-management.md`
**Decision Status**: NEW

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | 190K+ shops; $2.5B software market; 2.6% penetration |
| Competitor Weakness | 4/5 | Tekmetric $179-409/mo slow; Shopmonkey V2 broke UX; Mitchell1 no cloud |
| LTD Viability | 4/5 | DVI photo storage = ongoing cost |
| No Free Tier | 4/5 | ARI near-free but feature-bare |
| Channel Access | 4/5 | r/AskMechanics, ASA forums, NAPA network |
| Content Potential | 4/5 | "Tekmetric alternative", "affordable auto repair software" |
| AppSumo Fit | 3/5 | Moderate; shop owners research before buying |
| Review Potential | 4/5 | Active on Capterra, G2 |
| MRR Path | 4/5 | DVI, parts ordering, SMS features as upsell |
| Build Feasibility | 3/5 | VIN lookup, parts catalog, DVI add complexity |
| Boring Business Bonus | 5/5 | Auto repair = deeply boring, VC-ignored |

**Total: 100/105**

**Today's signal (DUAL-source)**:
- Competitor Analysis: "ShopFlow" concept — keyboard-first repair order creation, native QBO sync (no third-party bridge), smart part dedup, DVI built-in at under $200/mo; Tekmetric "SLOWER" than Mitchell1 for experienced users; Tekmetric labor guide "a falsehood... full of holes"; Shop-Ware "many days of lagging"
- Trends: AI-powered vertical call & communication for auto repair shops — AI status update texts ($49/mo bolt-on), customer-friendly DVI with plain-English summaries; WickedFile positioning as AI shop management but early-stage

**Verdict**: BUILD
**Key Source Links**:
- https://www.capterra.com/p/190952/Tekmetric/reviews/
- https://www.capterra.com/p/153469/Shop-Ware/reviews/
- https://www.bvp.com/news/shopmonkey-and-the-next-great-800-billion-vertical-saas-market
- https://www.wickedfile.com/blogs/wickedfile-the-future-of-auto-repair-shop-software-in-2026

---

### 3. Small Landlord Property Management — Score: 100/105
**Existing file**: `ideas/shortlisted/property-management.md`
**Decision Status**: NEW

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | 20M+ individual US landlords; AppFolio/Buildium prove paid market |
| Competitor Weakness | 5/5 | AppFolio 50-unit minimum; Buildium $62→$340/mo gap; free tools too bare |
| LTD Viability | 5/5 | $79-149 LTD; DoorLoop launched on AppSumo = precedent |
| No Free Tier | 3/5 | TurboTenant, Innago, Stessa all have free tiers |
| Channel Access | 5/5 | r/landlord (500K+), BiggerPockets (2M+), r/realestateinvesting |
| Content Potential | 5/5 | "AppFolio alternative", "small landlord software" |
| AppSumo Fit | 5/5 | Real estate investors are deal-savvy buyers |
| Review Potential | 4/5 | Landlords vocal on Trustpilot, Google, BBB |
| MRR Path | 5/5 | Per-unit or tiered; portfolio growth = natural upsell |
| Build Feasibility | 4/5 | Rent collection + maintenance portal + lease storage = 4-6 weeks |
| Boring Business Bonus | 4/5 | Property management = unglamorous but essential |

**Total: 100/105**

**Today's signal (DUAL-source)**:
- Reddit: AppFolio 50-unit minimum completely inaccessible; Buildium charges $75/mo for just 21 units; flat $19-29/mo for 1-10 units, $39/mo for 11-30 units = confirmed positioning; no per-unit transaction fees as differentiator
- Competitor Analysis: "LandlordDesk" concept — flat $29/mo for up to 50 units with maintenance tracking + vendor assignment + Schedule E cash flow + tenant portal; AppFolio effective rate 4x advertised at 50-unit minimum; state-specific late fee compliance as novel moat

**Verdict**: BUILD
**Key Source Links**:
- https://www.shukrentals.com/learn/property-management-software-for-small-landlords
- https://www.landlordcart.com/best-property-management-software-for-small-landlords/
- https://kinja.com/software/best-property-management-software-small-landlords-2026

---

### 4. Landscaping & Lawn Care Business OS — Score: 100/105
**Existing file**: `ideas/shortlisted/landscaping-lawn-care.md`
**Decision Status**: NEW

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | 600K+ landscaping businesses; $130B industry; SA/LMN prove market |
| Competitor Weakness | 5/5 | LMN $297-697/mo; SA acquisition-degraded; Jobber per-user pricing |
| LTD Viability | 4/5 | $79-99 LTD; route optimization API = small ongoing cost |
| No Free Tier | 4/5 | Yardbook free but Android-only + no iOS + feature-bare |
| Channel Access | 5/5 | r/lawncare (918K+), LawnSite.com (1M+), FB lawn care groups (200K+) |
| Content Potential | 5/5 | "Service Autopilot alternative", "affordable lawn care software" |
| AppSumo Fit | 5/5 | Zero lawn care software on AppSumo = category first |
| Review Potential | 5/5 | Lawn care active on Capterra, YouTube, LawnSite |
| MRR Path | 5/5 | $49/mo solo→$99/mo 3 crews; seasonal upsell (snow removal) |
| Build Feasibility | 4/5 | Route optimization + recurring billing + crew app = 4-6 weeks |
| Boring Business Bonus | 5/5 | Lawn care = deeply boring, VC-ignored |

**Total: 100/105**

**Today's signal (QUAD-source)**:
- Reddit: Service Autopilot acquisition-degraded (3-crew needs 8+ user seats at $57+/mo each on top of base); Jobber QuickBooks integration limited; reporting caps at 50-75 customers; mid-tier operator (5-50 accounts) has no clear software home
- HN: Lawn care software market $487M (2026) → $1.3B (2035) at 11.7% CAGR; RealGreen dominates at $200+/mo; Jobber $39/mo not lawn-specific; chemical compliance (EPA/state pesticide laws) missing
- Competitor Analysis: "CrewRoute" concept — route-optimized scheduling + client SMS reminders + invoice + crew GPS + snow dispatch at flat $49/mo (no per-seat fees); LMN $297-697/mo too expensive; Jobber no route optimization + no photo documentation without add-on
- Trends: GorillaDesk/FieldRoutes serve mid-market; TurfHop adding AI "Orbit" feature; sub-$500K operators underserved; chemical log compliance + route optimization = paper-to-digital wedge

**Verdict**: BUILD
**Key Source Links**:
- https://myquoteiq.com/best-service-autopilot-alternative-for-lawn-care-businesses/
- https://www.upperinc.com/blog/lawn-care-routing-software/
- https://fieldservicesoftware.io/software/lmn/
- https://markwideresearch.com/lawn-care-software-market

---

### 5. Cleaning Business Management (Payroll-Invoice Bridge) — Score: 95/105
**Existing file**: `ideas/shortlisted/cleaning-service-management.md`
**Decision Status**: NEW

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 4/5 | ZenMaid $3M/yr proves market; $60B cleaning industry |
| Competitor Weakness | 4/5 | ZenMaid lacks payroll; Jobber no rotation scheduling; Swept no bidding |
| LTD Viability | 4/5 | $199-299 LTD for GPS + invoice + payroll workflow |
| No Free Tier | 4/5 | No free cleaning-specific GPS+invoice+payroll |
| Channel Access | 4/5 | r/CleaningBusiness, FB "Cleaning Business Owners" (150K+) |
| Content Potential | 3/5 | "ZenMaid alternative", "cleaning business software" |
| AppSumo Fit | 4/5 | No dedicated cleaning payroll-invoice tool on AppSumo |
| Review Potential | 4/5 | Cleaning biz owners vocal on FB, Google Reviews |
| MRR Path | 4/5 | $99/mo flat after LTD; unlimited cleaners = retention |
| Build Feasibility | 4/5 | GPS clock-in + photo + invoice + payroll summary = 6-8 weeks |
| Boring Business Bonus | 4/5 | Cleaning = blue-collar adjacent, high boring score |

**Total: 95/105**

**Today's signal (TRIPLE-source)**:
- Reddit: Rotation-based scheduling (different cleaners for same client alternating visits) missing from all tools including ZenMaid; team-based job assignment; cleaning supply tracking (which team used what + restocking alerts) missing from Jobber; ZenMaid simple but doesn't scale past small operations
- HN: ZenMaid $3M/yr ($250K/month) bootstrapped since 2013 = adjacent playbook proof; commercial cleaning gap (office/janitorial, Airbnb turnover) with B2B workflows distinct from residential; OSHA chemical logs + employee certification tracking for commercial
- Competitor Analysis: "CleanBook" concept — room-by-room checklists, online booking + pay-by-clean pricing, commercial bid builder, SMS reminders, team scheduling; Jobber lacks cleaning-specific checklists; Swept has zero bidding features + $250 implementation fee

**Verdict**: BUILD
**Key Source Links**:
- https://www.zenmaid.com/magazine/the-best-cleaning-business-software-in-2026/
- https://www.indiehackers.com/post/tech/from-a-cleaning-side-hustle-to-a-3m-yr-saas-for-cleaning-services-suhsqkDZB1zIwRmXxrFm
- https://connecteam.com/reviews/swept/

---

### 6. Pest Control Route & Compliance Tracker — Score: 95/105
**Existing file**: `ideas/shortlisted/pest-control.md`
**Decision Status**: NEW

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | $26.1B US pest control; GorillaDesk/Briostack validate |
| Competitor Weakness | 4/5 | GorillaDesk being disrupted; legacy tools aging |
| LTD Viability | 4/5 | $69-89 LTD; compliance = high perceived value |
| No Free Tier | 4/5 | No free pest control tools |
| Channel Access | 4/5 | r/pestcontrol, NPMA, FB groups |
| Content Potential | 5/5 | "pest control software", "EPA compliance tracking" |
| AppSumo Fit | 3/5 | Pest control ops less on AppSumo |
| Review Potential | 4/5 | Compliance creates stickiness and reviews |
| MRR Path | 4/5 | Per-route or per-tech monthly; compliance updates = premium |
| Build Feasibility | 4/5 | Route opt + chemical logging + recurring scheduling = 4-5 weeks |
| Boring Business Bonus | 5/5 | Pest control = deeply boring trade |

**Total: 95/105**

**Today's signal (DUAL-source)**:
- HN: 67% of small pest control businesses (under 5 techs) still use paper; OSHA and state ag department regulations require meticulous records; no simple tool under $30/mo exists for 2-5 tech tier; PestPac enterprise $150+/user/mo; "AI-powered treatment report + chemical log generator" where technician speaks or photos the job = AI fills EPA/state compliance form
- Trends: Pest control software market $280M growing to $570M by 2032 (doubling); GorillaDesk/FieldRoutes serve mid-market; sub-$500K operators underserved; chemical log compliance = paper-to-digital compliance wedge with regulatory mandate

**Verdict**: BUILD
**Key Source Links**:
- https://www.indiehackers.com/post/top-5-pest-control-and-equipment-inspection-apps-in-2026-b48a5f6d0f
- https://www.fieldpie.com/blog/best-pest-control-software-2026/

---

### 7. HVAC Flat-Rate Price Book Builder — Score: 93/105
**Existing file**: `ideas/shortlisted/hvac-flat-rate-pricebook.md`
**Decision Status**: NEW

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 4/5 | TNFR $99/tech/mo proves willingness to pay; 500K+ contractors |
| Competitor Weakness | 4/5 | TNFR $400+/mo for 3 techs; HCP pricebook locked behind $149/mo tier |
| LTD Viability | 5/5 | $149 LTD; very low infra; immediate ROI story |
| No Free Tier | 4/5 | No credible free option; operators pay for pricing tools |
| Channel Access | 5/5 | r/HVAC, r/Plumbing, HVAC-Talk, trade FB groups |
| Content Potential | 4/5 | "flat rate pricing HVAC", "plumbing flat rate software" |
| AppSumo Fit | 5/5 | Simple point solution; crystal-clear ROI; proven LTD market |
| Review Potential | 4/5 | Tradespeople review if it increases average ticket value |
| MRR Path | 3/5 | Standalone limits MRR; integrations with Jobber/HCP/QB as upsell |
| Build Feasibility | 5/5 | CRUD + pricing logic + PDF generator = 1-2 week MVP |
| Boring Business Bonus | 5/5 | HVAC/Plumbing = deeply boring, essential |

**Total: 93/105**

**Today's signal (QUAD-source)**:
- Reddit: EPA 608 refrigerant tracking (legally required) + equipment database per customer address + seasonal maintenance scheduling = specific unmet needs generic tools miss; ServiceTitan the only platform with EPA refrigerant log = clear gap at affordable tier
- HN: HVAC-specific CRM with EPA refrigerant compliance documented as white space; one satisfied HVAC customer refers 3-5 colleagues on average = organic referral flywheel; service agreement management + seasonal tune-up automation missing from affordable FSM
- Competitor Analysis: Route optimization absent from affordable tools (Housecall Pro #1 complaint); flat-rate pricebook locked behind $149/mo HCP tier; no pricebook at affordable price confirmed across all competitors
- Trends: ServiceTitan refugee market — contractors hunting alternatives; AI flat-rate pricebook with OEM pricing pre-loaded as differentiator; ACCA chapters as distribution channel

**Verdict**: BUILD
**Key Source Links**:
- https://entrepreneurloop.com/bootstrapped-saas-niches-solo-founders/
- https://www.servicetitan.com/blog/hvac-crm-software-app
- https://fieldcamp.ai/reviews/servicetitan/

---

### 8. Veterinary Practice Management — Score: 93/105
**Existing file**: `ideas/shortlisted/veterinary-practice.md`
**Decision Status**: NEW

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 4/5 | 30K+ vet practices in US; Cornerstone/Impromed prove paid market |
| Competitor Weakness | 4/5 | Cornerstone crash/click-heavy; Impromed degraded post-acquisition |
| LTD Viability | 3/5 | Practice management needs ongoing support; MRR model preferred |
| No Free Tier | 5/5 | No free practice management; operations-critical |
| Channel Access | 3/5 | r/veterinary smaller; AVMA conference as channel |
| Content Potential | 3/5 | Smaller audience but high intent |
| AppSumo Fit | 2/5 | Vets don't shop AppSumo typically |
| Review Potential | 3/5 | Moderate activity on Capterra |
| MRR Path | 5/5 | $99-199/mo per clinic; very low churn once embedded |
| Build Feasibility | 3/5 | SOAP notes, prescription management, PIMS complexity |
| Boring Business Bonus | 4/5 | Independent vet clinics = unglamorous but essential |

**Total: 93/105** (weighted)

**Today's signal (SINGLE-source)**:
- Reddit: Cornerstone (IDEXX) and Impromed (Covetrus) both degraded significantly post-acquisition; Cornerstone complaints: crashes, click-heavy interface; Impromed: support response multi-day after acquisition; DaySmart Vet $116-565/mo; ezyVet starts at $245+/mo + implementation fees; independent vet clinics feel trapped — switching costs high but current software getting worse and more expensive

**Verdict**: BUILD
**Key Source Links**:
- https://www.vetsoftwarehub.com/article/best-veterinary-practice-management-software-2026
- https://www.nectarvet.com/post/best-cloud-based-vet-software-prices-reviews
- https://vetsycare.com/blog/free-veterinary-software-worth-it

---

### 9. Funeral Home Case Manager — Score: 92/105
**Existing file**: `ideas/shortlisted/funeral-home-management.md`
**Decision Status**: NEW

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 4/5 | 19K funeral homes; dedicated software exists proving paid market |
| Competitor Weakness | 5/5 | Osiris "financial reporting terrible"; no QB integration; FrontRunner stagnant |
| LTD Viability | 4/5 | $99 LTD; high value replacing paper + legacy systems |
| No Free Tier | 5/5 | No free funeral home software; operations critical |
| Channel Access | 3/5 | FB groups (53K+); NFDA; tight-knit word-of-mouth |
| Content Potential | 4/5 | "funeral home management software", "funeral home QuickBooks" |
| AppSumo Fit | 3/5 | Niche but "modernize from paper" pitch compelling |
| Review Potential | 3/5 | Small but tight-knit community |
| MRR Path | 4/5 | Per-location pricing; document storage; family portal |
| Build Feasibility | 3/5 | Case management + document generation + QB integration; regulatory complexity |
| Boring Business Bonus | 5/5 | Funeral homes = deeply boring |

**Total: 92/105**

**Today's signal (SINGLE-source)**:
- HN: Market growing $1.5B (2024) → $3.03B (2032) at 9.2% CAGR; FrontRunner/Tribute Technology $400-900/location/month; 17,000+ independent funeral homes cannot afford enterprise tools; death care has industry-low churn — operators almost never switch once embedded; AI obituary generator + family portal + state-specific death certificate checklist at $99/mo; NFDA and state funeral director associations as marketing channels; 5/5 LTD potential — "funeral home operators are conservative buyers who want permanence"

**Verdict**: BUILD
**Key Source Links**:
- https://www.marketresearchfuture.com/reports/funeral-home-software-market-41183
- https://www.capterra.com/funeral-home-software/

---

### 10. QuickBooks Alternative — Bookkeeping for Service Businesses — Score: 91/105
**Existing file**: `ideas/shortlisted/bookkeeping-accounting.md`
**Decision Status**: NEW

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 4/5 | QB controls 85% of SMB accounting; Wave exodus proves switching |
| Competitor Weakness | 5/5 | QB 21% price hike 2025; Wave gutted free tier; FreshBooks doubled |
| LTD Viability | 4/5 | $79 LTD for first year; low infrastructure |
| No Free Tier | 3/5 | Wave free tier (gutted) exists; FreshBooks free trial |
| Channel Access | 4/5 | r/smallbusiness, r/Bookkeeping, r/sweatystartup |
| Content Potential | 5/5 | "QuickBooks alternative", "bookkeeping for service businesses" |
| AppSumo Fit | 4/5 | Price-conscious SMB buyers = strong LTD demographic |
| Review Potential | 4/5 | QB refugees vocal on Reddit and Trustpilot |
| MRR Path | 4/5 | $29/mo flat; bank sync cost = low recurring; grows with features |
| Build Feasibility | 3/5 | Bank sync + double-entry accounting = compliance complexity |
| Boring Business Bonus | 4/5 | Accounting = unglamorous but essential |

**Total: 91/105**

**Today's signal (SINGLE-source — with new service-business angle)**:
- Reddit: QuickBooks Online raised prices 21% in 2025 (64% cumulative over 5 years); service businesses (HVAC, landscaping, cleaning) overwhelmed by QB complexity AND priced out; core gap = no bookkeeping tool designed specifically for service businesses that reconciles job revenue (from FSM tool) with expenses; double-entry between Jobber/Housecall Pro and QuickBooks = recurring documented pain; Wave doesn't scale; native integrations for Jobber, Housecall Pro, Service Titan at $19-39/mo = specific unoccupied combination

**Verdict**: BUILD
**Key Source Links**:
- https://www.nerdwallet.com/article/small-business/quickbooks-alternatives
- https://synder.com/blog/8-best-free-quickbooks-alternatives/

---

### 11. Concrete & Paving Contractor Estimating — Score: 88/105
**Existing file**: `ideas/shortlisted/concrete-paving-estimating.md`
**Decision Status**: NEW

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 4/5 | 70K+ concrete contractors; 35K+ paving contractors; $10B+ residential concrete |
| Competitor Weakness | 5/5 | HCSS $300+/mo enterprise; OneCrew early-stage; QuoteIQ minimal mobile |
| LTD Viability | 5/5 | $79-99 LTD; offline-capable calculations; low infra |
| No Free Tier | 5/5 | No free contractor; contractors pay for tools that win jobs |
| Channel Access | 4/5 | r/concrete, r/Construction, paving contractor FB groups |
| Content Potential | 4/5 | "concrete estimating software", "paving contractor software" |
| AppSumo Fit | 4/5 | Contractors hate subscriptions; LTD resonates |
| Review Potential | 4/5 | Active on SoftwareAdvice, Capterra |
| MRR Path | 3/5 | Estimating-only limits stickiness; e-sign + deposit collection improves |
| Build Feasibility | 4/5 | Material calculators + PDF proposals + area-based calculations |
| Boring Business Bonus | 5/5 | Paving/concrete = deeply boring, VC-ignored |

**Total: 88/105**

**Today's signal (DUAL-source)**:
- Reddit: Paving/concrete contractors underserved by generic FSM; plan-based takeoffs, multi-day crew scheduling with weather windows, equipment delivery coordination — all missing; training new estimators takes months with no standardized tools; OneCrew new entrant in 2025-2026 but still early-stage confirms market interest
- HN: Specialty construction fabrication shop management (natural stone, custom cabinet, millwork) — under-served even more than general paving; custom job quoting + variable material costs + fabrication queue tracking + installation scheduling + mobile punch-list; current toolstack = QuickBooks + spreadsheets + paper job folders

**Verdict**: BUILD
**Key Source Links**:
- https://www.fieldpromax.com/blog/paving-contractor-software
- https://www.getonecrew.com/post/asphalt-paving-software
- https://getjobtrackerpro.com/paving-dispatch-software-complete-guide/

---

### 12. WhatsApp-Based Invoicing for Blue-Collar Trades — Score: 86/105
**Existing file**: `ideas/shortlisted/whatsapp-trades-invoicing.md`
**Decision Status**: NEW

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 4/5 | 5M+ self-employed tradespeople; WhatsApp 50M+ US users |
| Competitor Weakness | 5/5 | Zero US competitors in WhatsApp-native invoicing |
| LTD Viability | 4/5 | $29-49 LTD; low COGS on WhatsApp API |
| No Free Tier | 4/5 | No free WhatsApp invoice bot for US contractors |
| Channel Access | 5/5 | Spanish+English contractor FB groups; immigrant trades word-of-mouth |
| Content Potential | 3/5 | "WhatsApp invoice generator" — niche but growing |
| AppSumo Fit | 3/5 | Trades workers not typical AppSumo buyers; FB group launch preferred |
| Review Potential | 3/5 | Harder to get G2/Trustpilot from this demographic |
| MRR Path | 3/5 | $19/mo flat; needs 500+ customers for meaningful MRR |
| Build Feasibility | 4/5 | WhatsApp Business API + Stripe + PDF generation = 3-4 weeks |
| Boring Business Bonus | 5/5 | Blue-collar trades = deeply boring market |

**Total: 86/105**

**Today's signal (SINGLE-source)**:
- Reddit: Non-tech blue-collar workers (carpenters, plumbers, painters, handymen) don't want dashboards or training; Reddit threads about WhatsApp-based workflows "get massive upvotes"; existing solutions all assume workers will adopt new apps — friction kills adoption; WhatsApp Business API integration for job confirmations, PDF invoices, Stripe payment links, job notes confirmed as gap; 7M+ construction/trades workers in US alone; no major player has built WhatsApp-first workflow for job management and invoicing

**Verdict**: BUILD
**Key Source Links**:
- https://medium.com/@Ravateinsights/reddit-keeps-screaming-these-8-startup-ideas-14eec7d47f0c
- https://dev.to/shayy/the-boring-saas-playbook-that-actually-works-5dce

---

### 13. Small Carrier TMS (1-20 Trucks) — Score: 82/105
**Existing file**: `ideas/shortlisted/small-carrier-tms.md`
**Decision Status**: NEW

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 4/5 | 500K+ trucking companies; 97% <20 trucks; TruckingOffice proves paid market |
| Competitor Weakness | 4/5 | McLeod $100K+ enterprise; no affordable IFTA auto-calc tool |
| LTD Viability | 3/5 | $99-149 LTD; fleet nature = MRR more appropriate |
| No Free Tier | 4/5 | Missing PODs = real revenue lost; operators pay to fix billing leakage |
| Channel Access | 3/5 | r/trucking, r/logistics; owner-operator forums |
| Content Potential | 3/5 | "small carrier TMS", "owner operator dispatch software" |
| AppSumo Fit | 3/5 | Trucking operators less AppSumo-native but price-conscious |
| Review Potential | 3/5 | Active on YouTube, forums, FB groups |
| MRR Path | 4/5 | Per-load pricing; fleet growth = natural upsell |
| Build Feasibility | 4/5 | Load booking + POD capture + IFTA auto-calc + invoice + QBO sync |
| Boring Business Bonus | 5/5 | Trucking = deeply boring, VC-ignored, blue-collar |

**Total: 82/105**

**Today's signal (DUAL-source)**:
- Reddit: McLeod costs $100K+ to implement + VPN required for off-site access + data doesn't sync to accounting; IFTA compliance every carrier must file quarterly; 97% of US trucking companies <20 trucks; web + mobile TMS covering load dispatch + IFTA auto-calculation + driver pay settlement + QuickBooks sync + DOT compliance at $49-69/truck/month = confirmed gap
- Trends: Small fleet compliance automation — FleetRabbit (est. 2023), Truckpedia, Truckbase entering but room for compliance-focused tool; DOT enforcement pressure rising 2026; $29/mo "DOT compliance kit" for owner-operators; hotshot hauler-specific app = growing gig economy segment with zero dedicated software

**Verdict**: EXPLORE FURTHER
**Key Source Links**:
- https://rockytransportinc.com/blog/trucking-company-tms-software/
- https://truckpedia.io/resources/top-7-tms-software-for-carriers-in-2025-and-how-to-choose
- https://www.torotms.com/blog/best-software-for-small-trucking-company

---

### 14. Pool Route Management for Solo & Small Operators — Score: 93/105
**Existing file**: `ideas/shortlisted/pool-service-management.md`
**Decision Status**: NEW

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 4/5 | $6B+ pool service market; Skimmer 35K+ pool pros validates |
| Competitor Weakness | 4/5 | Skimmer price hike $1→$2/pool; PoolDial new 2025 at $2/pool |
| LTD Viability | 4/5 | $89 LTD replaces $100-250/mo Skimmer — massive value |
| No Free Tier | 4/5 | No free pool-specific tools |
| Channel Access | 4/5 | r/poolservice, Pool & Spa News, FB groups (47K+) |
| Content Potential | 4/5 | "pool service software", "Skimmer alternative" |
| AppSumo Fit | 4/5 | Pool operators active in trade FB groups |
| Review Potential | 4/5 | Pool pros review on Capterra/GetApp |
| MRR Path | 4/5 | Equipment upsell tracking, chemical supply integration |
| Build Feasibility | 4/5 | Route optimization + chemical logging + invoicing; well-defined |
| Boring Business Bonus | 5/5 | Pool cleaning = deeply boring |

**Total: 93/105**

**Today's signal (DUAL-source)**:
- Reddit: 94% of pool service businesses miss appointments monthly (each callback ~$85 unbilled); Skimmer raised prices $1→$2/pool creating churn among price-sensitive solo operators; PoolDial new 2025 entrant at $2/pool confirms market activity; mobile-first route optimization + chemical logging + one-tap invoicing for 1-5 tech shops with 20-200 pools; $1/pool/month with $29 minimum vs Skimmer's pricing
- Trends: 300K+ registered pool service companies in US; most owner-operators; paper-to-digital transition still massively incomplete; GorillaDesk/FieldRoutes serve mid-market; solo pool tech with 50+ weekly stops = route optimization AI white space

**Verdict**: BUILD
**Key Source Links**:
- https://pooldial.com/resources/articles/software-reviews/best-pool-service-software
- https://poolofficemanager.com/blog/best-pool-service-software-small-business

---

### 15. Auto Detailing CRM with Variable-Duration Scheduling — Score: 76/105
**Existing file**: NONE — **NEW SHORTLISTED IDEA TODAY**
**Decision Status**: NEW

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 3/5 | $15B industry; Urable exists; fragmented — moderate validation |
| Competitor Weakness | 4/5 | No dominant player; variable-duration scheduling gap unoccupied |
| LTD Viability | 4/5 | $59-79 LTD viable for solo detailers |
| No Free Tier | 4/5 | No credible free detailing-specific CRM |
| Channel Access | 4/5 | r/AutoDetailing active; FB detailing groups; Instagram |
| Content Potential | 3/5 | "auto detailing software", "mobile detailing CRM" |
| AppSumo Fit | 4/5 | Solo detailers would buy LTD; Urable & Zenbooker review counts low |
| Review Potential | 3/5 | Moderate Capterra/G2 activity |
| MRR Path | 3/5 | Niche limits ceiling; upsell = chemical/supply inventory tracking |
| Build Feasibility | 4/5 | CRM + variable-duration scheduling + booking portal = standard stack |
| Boring Business Bonus | 4/5 | Auto detailing = unglamorous, VC-ignored service business |

**Total: 76/105**

**Today's signal (SINGLE-source — new)**:
- Reddit: Auto detailing jobs have highly variable durations (1-stage polish = 2 hours vs 3-stage + ceramic = 8-12 hours); generic scheduling software doesn't handle this, leading to 68.5% fewer scheduling errors for shops using detailing-specific bay scheduling; mobile detailers report 8-10 hrs/week admin time; no dominant player nailed variable-duration scheduling + service package configuration; Urable exists at mid-tier pricing; Zenbooker booking-focused only; $15B industry fragmented and growing; $39/mo solo operators, $79/mo for shops up to 5 techs; $59-79 LTD viable

**Verdict**: EXPLORE FURTHER
**Next Steps**: Research Urable pricing/reviews; survey r/AutoDetailing for software pain points; validate whether variable-duration scheduling is the killer feature or just a nice-to-have
**Risks**: Niche is smaller than FSM/cleaning/lawn care; Urable could improve their mobile experience; TAM ceiling limits MRR potential
**Key Source Links**:
- https://anolla.com/en/best-auto-detailing-software
- https://myquoteiq.com/top-10-crms-for-mobile-detailing-businesses-in-2026/
- https://urable.com/2025/08/21/how-to-operate-a-mobile-detailing-business-successfully/

---

## Tier 2: Worth Exploring (Score 55-74)

### Restaurant POS with Transparent Flat-Rate Pricing — Score: 65/105
Toast's "3.09% + 15¢ per transaction" bait-and-switch with $300-700/month in add-ons is real pain. However, building a POS + payment processing infrastructure is too complex for a 4-person team (hardware, interchange compliance, bank partnerships, PCI DSS, chargeback handling). Better angle: **AI-powered POS fee analyzer** that shows restaurants what they're actually paying vs. what they could pay. See: `restaurant-operations.md`.
**Key Sources**: https://www.upmenu.com/blog/toast-pricing/, https://merchantinsiders.com/blogs/toast-fees/

### AI Voice Agents for Home Service Trades — Score: 72/105
Avoca AI raising $125M at $1B validates the category loudly. However, VC-backed players (Avoca, Sameday AI, AgentZap) now cover the large-shop segment well. White space: bilingual (English/Spanish) AI receptionist for small trades shops under $500K revenue at $79-99/month. Build feasibility = 3-4 weeks using Vapi/Retell AI + Twilio. Better as a bolt-on to existing FSM play than standalone product. See: `ai-quoting-estimating-trades.md`.
**Key Sources**: https://www.prnewswire.com/news-releases/avoca-raises-125m-at-1b-valuation.html, https://fortune.com/2026/04/27/avoca-ai-agents-missed-calls-hvac-plumbing-roofing/

### Small Builder & Subcontractor Construction Software — Score: 68/105
Painting contractors, drywall, tile, flooring subs manage jobs via group texts and paper tickets. Change order tracking, material cost management, crew time tracking, and lien waiver management all unmet. $49/month for painting contractors = viable MVP. See: `construction-management.md`.
**Key Sources**: https://thedigitalprojectmanager.com/tools/best-subcontractor-project-management-software/

### Compliance Tech for Regulated Boring Businesses — Score: 68/105
OSHA logs for contractors, EPA chemical records for pest control, ELD for truckers all structurally unmet at SMB tier. Cross-cutting signal — best captured as features within vertical tools rather than standalone compliance SaaS. See: `trade-safety-compliance.md`.
**Key Sources**: https://theelitex.com/is-your-business-trade-ready-for-2026/

### Offline-First Mobile Trade Tool — Score: 70/105
Trades in basements, tunnels, and commercial builds need offline job cards, photos, signatures, invoices. React Native + SQLite = 3-4 week MVP. $149 LTD per device resonates with solo tradespeople. Best as feature within FSM product rather than standalone. See: `field-service-management.md` for integration.
**Key Sources**: https://www.simprogroup.com/blog/best-apps-contractors, https://companycam.com/resources/blog/apps-software-for-plumbing-contractors

### Franchise Multi-Location Boring Business Operations — Score: 65/105
5-25 location cleaning/pest control/HVAC franchise owners need royalty tracking + performance benchmarking + centralized hiring. Better as recurring $299-499/month than LTD. See: `micro-franchise-ops.md`.
**Key Sources**: https://www.joinhomebase.com/blog/franchise-software

---

## Tier 3: Weak / Pass (Score <55)

- **Meta-Signal: Boring Industry Vertical SaaS** (structural insight, not buildable product — cross-cutting, tracked as strategic context)
- **Rentman Construction Equipment Rental** ($15-20M ARR player already owns the space; building would mean competing with established bootstrapped company)
- **Embedded Payments in Vertical SaaS** (structural trend, not a standalone product — should be integrated into FSM/cleaning/lawn care tools being built)
- **Vertical SaaS Consolidation** (meta-trend signal, not actionable as standalone product)

---

## Top 3 Recommendations

1. **Field Service Management for Solo/Micro Trades** — Score: 101 — The anti-ServiceTitan for 1-5 tech shops, with route optimization built-in (HCP's #1 missing feature), flat pricing, and offline mode. ServiceTitan refugee market accelerating in 2026. QUAD-source confirmation today. — Key URLs: https://fieldcamp.ai/reviews/servicetitan/, https://www.getonecrew.com/post/servicetitan-reviews

2. **Landscaping & Lawn Care Business OS** — Score: 100 — SA post-acquisition = single largest switching moment in lawn care history; LMN $297-697/mo too expensive; chemical compliance log legally required in most states + route optimization = must-haves; zero lawn care software on AppSumo = category first. QUAD-source today. — Key URLs: https://myquoteiq.com/best-service-autopilot-alternative-for-lawn-care-businesses/, https://fieldservicesoftware.io/software/lmn/

3. **Auto Repair Shop Management** — Score: 100 — $179-409/mo Tekmetric vs. $30/mo ARI = dead zone; Shopmonkey V2.0 UX regression = active migration window; keyboard-first + native QBO sync + no contracts = clear differentiation; 280K+ independent shops, 35% still on paper. DUAL-source today. — Key URLs: https://www.capterra.com/p/190952/Tekmetric/reviews/, https://blog.csiaccounting.com/top-shop-management-software-auto-repair-reviews-breakdown

---

## Summary Statistics

| Tier | Count | New Shortlisted Files | Updated Files |
|------|-------|----------------------|---------------|
| Tier 1 | 15 ideas | 1 (Auto Detailing CRM) | 14 existing |
| Tier 2 | 6 ideas | 0 | 4 existing (minor) |
| Tier 3 | 4 ideas | 0 | 0 |

**Cross-source signal concentration**: FSM/trades (Reddit + HN + Competitor + Trends), Lawn Care (all 4 sources), Cleaning (Reddit + HN + Competitor) = the three strongest opportunities this cycle by breadth of signal.

**New idea flagged**: Auto Detailing CRM (76/105) — added to shortlisted/ as genuinely new.

**Strongest trend today**: Avoca AI $125M at $1B valuation + ServiceTitan refugee market + AI-for-trades category validation. The opportunity is NOT in AI answering (well-funded) but in the simple FSM platform underneath that plugs in AI answering as an add-on.
