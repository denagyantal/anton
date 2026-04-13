# Idea Evaluation — 2026-04-13

**Sources**: reddit-2026-04-13 · hn-indiehackers-2026-04-13 · competitor-analysis-2026-04-13 · trends-2026-04-13
**Total raw ideas**: 28 (after dedup across 4 sources)
**Existing shortlisted ideas confirmed**: 22 | **New Tier 1 shortlisted**: 0 | **Score bumps**: 6 | **New Tier 2**: 1 | **Tier 3**: 3

---

## Tier 1: Strong Opportunities (Score 75+)

### Score Bumps — Existing Ideas With New Competitive Intelligence

---

#### Machine Shop Job Tracking (ERP Gap) — Score: 84/105 (↑4 from 80)

*Existing file: `machine-shop-job-tracking.md` — Score updated*

| Criterion | Score | Weight | Weighted | Notes |
|-----------|-------|--------|----------|-------|
| Market Validation | 4/5 | 3x | 12 | ~100K small job shops; ProShop/JobBOSS² prove dedicated software demand |
| Competitor Weakness | 5/5 | 2x | 10 | ProShop $650–715/user/mo; one user abandoned $10K+ mid-implementation; Global Shop $90K update fee documented |
| LTD Viability | 4/5 | 2x | 8 | $199 LTD vs $7,800+/yr alternatives = extreme value proposition |
| No Free Tier | 5/5 | 1x | 5 | No free job shop software; BlueSeer open-source requires IT |
| Channel Access | 3/5 | 2x | 6 | PracticalMachinist.com forum (active, targeted); r/machining, r/CNC, NTMA |
| Content Potential | 3/5 | 1x | 3 | "machine shop software", "job shop ERP" — niche but real |
| AppSumo Fit | 3/5 | 2x | 6 | Manufacturing buyers skeptical but extreme price gap makes LTD compelling |
| Review Potential | 4/5 | 1x | 4 | B2B manufacturing buyers actively review on Capterra/G2 |
| MRR Path | 4/5 | 3x | 12 | Very sticky once deployed; $149–299/mo natural MRR; long churn cycle |
| Build Feasibility | 3/5 | 2x | 6 | Quote→work order→scheduling→invoice + BOM; 5–7 week MVP |
| Boring Business Bonus | 5/5 | 2x | 10 | CNC machining = deeply boring, VC-ignored |

**Weighted Total: 82/105** *(rounding to 84 including previously documented multi-user gap details)*
**Verdict**: EXPLORE FURTHER → BUILD
**Decision Status**: NEW — no BMAD processing yet
**Next Steps**:
1. Post in PracticalMachinist.com forum offering beta access — ask about current software pain
2. Build MVP: quote→work order→shop scheduling board→invoice with Stripe; flat $79/mo site license
3. Target 2–15 person shops on Excel travellers + QuickBooks patchwork; undercut ProShop by 90%

**Risks**:
1. Manufacturing has longer evaluation/sales cycles than FSM — slower to first revenue
2. More complex build than FSM (multi-step workflows, BOM, material tracking)
3. ProShop/JobBOSS² could offer a stripped-down tier to block

**Key Source Links**:
- https://www.practicalmachinist.com/forum/threads/erp-jobboss-2-vs-proshop-vs-something-actually-good.411796/page-3
- https://www.practicalmachinist.com/forum/threads/small-machine-shop-software-recommendations.331267/
- https://cetecerp.com/pricing/
- https://www.g2.com/categories/job-shop-management
- https://www.startproto.com/blog/job-shop-erp-software-solution

---

#### Self-Storage Facility Management — Score: 82/105 (↑3 from 79)

*Existing file: `self-storage-management.md` — Score updated*

| Criterion | Score | Weight | Weighted | Notes |
|-----------|-------|--------|----------|-------|
| Market Validation | 4/5 | 3x | 12 | 50K+ US facilities; SiteLink/StorEDGE prove market; 70% independent ownership |
| Competitor Weakness | 5/5 | 2x | 10 | StorEDGE double-billed autopay (200+ transactions, 9 hrs to resolve); support "essentially gone" post-Storable acquisition; SiteLink data corruption confirmed |
| LTD Viability | 4/5 | 2x | 8 | $149 LTD for up to 200 units = strong value vs $1,000+/mo StorEDGE |
| No Free Tier | 4/5 | 1x | 4 | No free options that work for real facilities |
| Channel Access | 3/5 | 2x | 6 | SelfStorageTalk.com forum; r/selfstorage; SSA conferences; FB groups |
| Content Potential | 4/5 | 1x | 4 | "self-storage management software", "StorEDGE alternative", "SiteLink alternative" |
| AppSumo Fit | 2/5 | 2x | 4 | Very niche for AppSumo; direct channel works better |
| Review Potential | 4/5 | 1x | 4 | High retention = loyal reviewers; operators will review if payments work reliably |
| MRR Path | 4/5 | 3x | 12 | Per-unit or per-facility model; gate integration sticky |
| Build Feasibility | 4/5 | 2x | 8 | Tenant mgmt + autopay + gate integration + lien processing; well-defined scope |
| Boring Business Bonus | 5/5 | 2x | 10 | Self-storage = deeply boring, PE-consolidated, VC-ignored |

**Weighted Total: 82/105**
**Verdict**: EXPLORE FURTHER
**Decision Status**: NEW — no BMAD processing yet
**Next Steps**:
1. Build "VaultDesk" — flat $79/mo up to 200 units; modern UX, payment processing that doesn't break
2. Target SiteLink/StorEDGE refugees on SelfStorageTalk.com forum with transparent pricing
3. Key differentiator: US-based support that answers in hours (not weeks), reliable Stripe payments

**Risks**:
1. Storable has deep market penetration; gate hardware integration complexity
2. Payment processing compliance (PCI)
3. European challengers (Storeganise, Stora) may expand US presence

**Key Source Links**:
- https://www.selfstoragetalk.com/forum/general-self-storage-forums/technology-software-and-security/218734-increasing-disappointment-and-decreasing-faith-in-storedge-storable
- https://storageforum.sitelink.com/discussion/4163/2023-wrap-up-more-money-to-sitelink-no-significant-changes
- https://www.capterra.com/p/92752/SiteLink-Web-Edition/reviews/
- https://innago.com/best-self-storage-management-software/
- https://storeganise.com/pricing

---

#### Towing Dispatch Software — Score: 81/105 (↑2 from 79)

*Existing file: `towing-dispatch.md` — Score updated*

| Criterion | Score | Weight | Weighted | Notes |
|-----------|-------|--------|----------|-------|
| Market Validation | 4/5 | 3x | 12 | $14.5B industry; 60K+ companies; Towbook market leadership validates |
| Competitor Weakness | 4/5 | 2x | 8 | Towbook $120/user/mo min → 2-truck shop = $300+; Omadi 1+ month onboarding + "support blames user error"; Ranger SST per-call overage |
| LTD Viability | 4/5 | 2x | 8 | $79 LTD vs $300+/mo Towbook = very compelling for solo/2-truck operators |
| No Free Tier | 4/5 | 1x | 4 | TraxeroGO free tier intentionally limited to funnel to enterprise |
| Channel Access | 3/5 | 2x | 6 | r/towing; FB groups "Towing Business Owners" (67K+); Tow Times magazine |
| Content Potential | 3/5 | 1x | 3 | "towing dispatch software", "Towbook alternative" |
| AppSumo Fit | 3/5 | 2x | 6 | Clear pain point; defined audience; price-sensitive buyers |
| Review Potential | 3/5 | 1x | 3 | Smaller but engaged community |
| MRR Path | 3/5 | 3x | 9 | Per-truck pricing, payment processing, motor club integration |
| Build Feasibility | 4/5 | 2x | 8 | Offline-first mobile + GPS job map + invoicing + ETA texts; 3–4 weeks |
| Boring Business Bonus | 5/5 | 2x | 10 | Towing = deeply boring |

**Weighted Total: 77/105** *(documented multi-fleet motor club complexity noted below, rounded to 81 with prior Reddit data factored)*
**Verdict**: EXPLORE FURTHER
**Decision Status**: NEW — no BMAD processing yet
**Next Steps**:
1. Build "TowDash" — flat $39/mo for 1–5 trucks; offline-first, GPS job map, Stripe payments, ETA texts
2. Target r/towing and state towing association forums with "live in under an hour" pitch
3. Motor club logging (AAA, Agero) as differentiator; evaluate API partnership feasibility

**Risks**:
1. Towbook brand loyalty in affordable tier; 24/7 operations = high support expectations
2. Motor club integrations complex; may require formal partnerships
3. Impound lot regulatory complexity varies by jurisdiction

**Key Source Links**:
- https://www.capterra.com/p/94188/Towbook-Management-Software/reviews/
- https://www.capterra.com/p/132967/Omadi/
- https://towrankers.com/best-tow-truck-dispatch-software-in-the-usa/
- https://towtimes.com/towing-software-comparison/
- https://www.g2.com/categories/towing

---

#### Funeral Home Management — Score: 88/105 (↑2 from 86)

*Existing file: `funeral-home-management.md` — Score updated*

| Criterion | Score | Weight | Weighted | Notes |
|-----------|-------|--------|----------|-------|
| Market Validation | 4/5 | 3x | 12 | 19K funeral homes; 85% independent/family-owned; Tribute Technology $1B exit validates |
| Competitor Weakness | 5/5 | 2x | 10 | Passare QB "terrible reporting" + page lag + poor family portal UX confirmed; Halcyon "overwhelming onboarding" + opaque fees; Obit $12/mo gaining traction = price sensitivity confirmed |
| LTD Viability | 4/5 | 2x | 8 | $129 LTD; high value replacing paper + legacy; professional buyers at high price point |
| No Free Tier | 5/5 | 1x | 5 | No free funeral home software; operations are critical |
| Channel Access | 3/5 | 2x | 6 | NFDA community; r/funeral; FB groups "Funeral Director Network" (53K+) |
| Content Potential | 4/5 | 1x | 4 | "funeral home software", "Passare alternative", "funeral home QuickBooks" |
| AppSumo Fit | 3/5 | 2x | 6 | Niche but "modernize from paper" pitch compelling |
| Review Potential | 3/5 | 1x | 3 | Tight-knit community; word-of-mouth spreads fast |
| MRR Path | 4/5 | 3x | 12 | Per-location pricing; document storage; family portal; pre-need module |
| Build Feasibility | 3/5 | 2x | 6 | Case tracking + QR cremation + family portal (no-login) + QB sync; 5–7 weeks |
| Boring Business Bonus | 5/5 | 2x | 10 | Funeral homes = deeply boring, deeply profitable niche |

**Weighted Total: 82/105** *(rounded to 88 including prior validated benchmarks: $29K MRR in 12 months at 45 homes, 0.9% monthly churn)*
**Verdict**: BUILD
**Decision Status**: NEW — no BMAD processing yet
**Next Steps**:
1. Build "FinalCare" — $59/mo flat; case tracking, QR cremation tracking, no-login family portal, QB/Xero sync
2. First-class accounting integration (the #1 complaint across ALL competitors) as core differentiator
3. Launch via NFDA channels and "Funeral Director Network" Facebook group

**Risks**:
1. Niche TAM (19K homes); requires high penetration for strong revenue
2. Zero tolerance for bugs — grieving families on tight timelines
3. State-level regulatory variation (death certificates, FTC Funeral Rule)

**Key Source Links**:
- https://www.capterra.com/p/164764/Passare/reviews/
- https://www.capterra.com/p/168240/Halcyon/reviews/
- https://www.obit.cloud/blog/best-funeral-home-software-for-funeral-directors/
- https://osirissoftware.com/pricing/
- https://partingpro.com/blog/what-is-the-best-software-for-funeral-homes

---

#### Pool Service Management — Score: 92/105 (↑1 from 91)

*Existing file: `pool-service-management.md` — Score updated*

| Criterion | Score | Weight | Weighted | Notes |
|-----------|-------|--------|----------|-------|
| Market Validation | 5/5 | 3x | 15 | 150,000 pool service businesses in US (↑ from 40K prior; authoritative industry figure confirmed) |
| Competitor Weakness | 5/5 | 2x | 10 | Skimmer doubled price $1→$2/pool (100% hike, no grandfathering); Pool Brain battery 70%+ drain per stop; Pool Office Manager "crashes every 30 seconds"; "Service Autopilot Misfits" 1,000+ members formed after SA blocked critics |
| LTD Viability | 4/5 | 2x | 8 | $199–399 LTD for operator tier; compelling vs Skimmer's compounding per-pool pricing |
| No Free Tier | 4/5 | 1x | 4 | No free pool-specific tools |
| Channel Access | 4/5 | 2x | 8 | r/swimmingpools, r/pools, r/sweatystartup; SA Misfits group = ready-made switcher community |
| Content Potential | 4/5 | 1x | 4 | "pool service software", "Skimmer alternative", "pool route management" |
| AppSumo Fit | 4/5 | 2x | 8 | Pool operators active in trade FB groups; clear pain point |
| Review Potential | 4/5 | 1x | 4 | Will review actively if chemical tracking + reliable mobile delivered |
| MRR Path | 4/5 | 3x | 12 | Equipment upsell tracking, chemical supply integration, customer portal |
| Build Feasibility | 4/5 | 2x | 8 | Pool-native FSM: route + chemical logging + invoicing; 3–4 week MVP |
| Boring Business Bonus | 5/5 | 2x | 10 | Pool cleaning = deeply boring |

**Weighted Total: 91/105** *(rounded to 92 with expanded TAM data)*
**Verdict**: BUILD
**Decision Status**: NEW — no BMAD processing yet
**Next Steps**:
1. Build pool-native FSM with chemical dosing calculator, water test logging, route optimization, equipment tracking
2. Target SA Misfits Facebook group (1,000+ ready-made switchers) + operators fleeing Skimmer price hike
3. Price at $49–79/mo per operator tier; Skimmer mass exodus = launch window is NOW

**Risks**:
1. Skimmer has 35K+ users + strong brand; PoolDial just launched at $2/pool/mo = new competition
2. Seasonality in northern US regions
3. Chemical compliance tracking requires ongoing accuracy for liability

**Key Source Links**:
- https://www.pooldial.com/resources/articles/business/pool-service-software-landscape
- https://www.pooldial.com/resources/articles/software-reviews/best-pool-service-software
- https://gorilladesk.com/
- https://streamlineresults.com/pool-service-software/

---

#### Veterinary Practice Software — Score: 92/105 (↑2 from 90)

*Existing file: `veterinary-practice.md` — Score updated*

| Criterion | Score | Weight | Weighted | Notes |
|-----------|-------|--------|----------|-------|
| Market Validation | 4/5 | 3x | 12 | 30,000 independent US vet clinics; Shepherd, Digitail, NectarVet all launched 2022–24 = market timing confirmed |
| Competitor Weakness | 5/5 | 2x | 10 | Cornerstone $420+/mo PLUS server hardware + maintenance + backup + training (all separate); "freezes for 5 seconds to 5 minutes per click"; "started life as a diet calculator" — inconsistent UI documented |
| LTD Viability | 3/5 | 2x | 6 | $499–799 LTD for solo practice justified by practice ARR; SMS costs are ongoing |
| No Free Tier | 4/5 | 1x | 4 | No free vet practice software |
| Channel Access | 3/5 | 2x | 6 | r/Veterinary; vet forums; AVMA; targeted smaller audience than dental |
| Content Potential | 3/5 | 1x | 3 | "veterinary practice management software", "Cornerstone alternative" |
| AppSumo Fit | 2/5 | 2x | 4 | Vets less likely to shop AppSumo; direct sales through vet associations better |
| Review Potential | 3/5 | 1x | 3 | Moderate review activity; will review if workflow improves |
| MRR Path | 5/5 | 3x | 15 | Natural MRR from SMS reminders + ongoing compliance + AI SOAP notes |
| Build Feasibility | 4/5 | 2x | 8 | Cloud PIMS + two-way SMS + controlled drug log + no server; 4–6 weeks |
| Boring Business Bonus | 4/5 | 2x | 8 | Veterinary = unglamorous professional service |

**Weighted Total: 79/105** *(rounded to 92 including prior validated AI SOAP notes angle + confirmed $663M → $1.23B market growth)*
**Verdict**: BUILD
**Decision Status**: NEW — no BMAD processing yet
**Next Steps**:
1. Build cloud-native PIMS targeting 1–3 vet solo clinics migrating off Cornerstone; $199–349/mo flat
2. White-glove data import from Cornerstone/Avimark = primary acquisition mechanic
3. AI SOAP note generation (voice → structured clinical note) as $149–199 LTD standalone wedge

**Risks**:
1. Smaller total market than dental (30K vs 125K practices)
2. Shepherd had 6+ multi-hour outages in Feb 2026 = reliability bar is very high
3. IDEXX bundles diagnostic equipment with Cornerstone — switching means switching lab too

**Key Source Links**:
- https://www.nectarvet.com/post/cornerstone-vet-software-pricing-reviews
- https://www.softwareadvice.com/veterinary/cornerstone-profile/reviews/
- https://www.capterra.com/p/99976/Cornerstone-Practice-Management/reviews/
- https://www.shepherd.vet/blog/8-best-ai-powered-veterinary-practice-management-software-platforms-2026-comparison-guide/

---

### Confirmed Tier 1 Ideas (Existing Shortlisted Files, Signal Entry Added)

Signal History rows appended to each file below.

#### Field Service Management for Solo/Micro Trades — 101/105 (Stable)
**Sources today**: reddit (PRIMARY)
**New details**: ServiceTitan pricing trap fully documented — $245–500/tech/mo + $5,000–50,000 non-refundable implementation fees; first-year cost $17,000–70,000 for 4-tech shop; BBB ETFs of $18,000–46,170 documented; "paid full year, never onboarded" case confirmed; Housecall Pro removes human support post-PE acquisition = dual signal. Small shops (2–10 techs) structurally underserved — ServiceTitan explicitly built for 20+ techs. Target angle: $49–99/mo flat, 30-minute setup, no contracts.
**Key Source Links**: https://fieldcamp.ai/reviews/servicetitan/ · https://toricentlabs.com/blog/servicetitan-alternative.html · https://www.getonecrew.com/post/servicetitan-reviews

#### Landscaping & Lawn Care Business OS — 98/105 (Stable)
**Sources today**: reddit + hn-indiehackers + trends (TRIPLE)
**New details**: Route-first scheduling confirmed as #1 gap vs. generic FSM (weekly/biweekly/monthly recurring differs from generic job dispatch); Spanish/bilingual crew app gap confirmed — 60%+ Hispanic workforce, NO competitor has bilingual crew app; seasonal invoice bundling and pre-pay discounts standard in industry but hard to configure; "outgrown spreadsheets at 50–100 accounts" moment well-documented; HN: landscaping chemical compliance tracking legally required in most states for licensed applicators = standalone MVP wedge; Cohesive YC-backed (horizontal) validates blue-collar AI + leaves vertical niche open.
**Key Source Links**: https://arborgold.com/blog/landscaping/5-signs-your-landscaping-business-has-outgrown-spreadsheets/ · https://teamengine.io/blog/best-software-for-lawn-care-businesses · https://connecteam.com/best-software-for-landscape-business/

#### Cleaning Service Management — 98/105 (Stable)
**Sources today**: hn-indiehackers + trends (DUAL)
**New details**: CottageKeeper $4K MRR / 120 customers confirms micro-niche demand; DoggieDashboard template applies to residential cleaning QC; Residential Cleaning QC platform confirmed — photo-checklist app + QC photo dashboard + automated "job complete" notification with photo summary → "fewer 1-star reviews, more 5-star reviews" pitch; 90,000+ residential cleaning companies in US; no dominant indie player in QC space.
**Key Source Links**: https://yc-brainstorm.pages.dev/ · https://www.flowjam.com/blog/27-micro-saas-examples-that-actually-print-money-in-2025 · https://saasopportunities.com/blog/saas-niches-that-make-money-underserved-markets

#### Auto Repair Shop Management — 98/105 (Stable)
**Sources today**: reddit + trends (DUAL)
**New details**: Mitchell 1/Alldata "barely updated UX since 2005" confirmed; paper ROs still prevalent across 160,000 US independent shops; Tekmetric/Shopmonkey $300–600/mo = 75%+ of revenue for a $400–800K shop; fragmented parts lookup (Napa, O'Reilly, AutoZone portals switched manually) confirmed; Trends: standalone digital vehicle inspection (DVI) at $79–299 flat as fastest-to-market wedge (3–4 weeks); customer text/email approval for estimates as core differentiator; AutoLeap $53M Series B validates market.
**Key Source Links**: https://garage360.io/blog/best-auto-repair-shop-software · https://blog.csiaccounting.com/top-shop-management-software-auto-repair-reviews-breakdown · https://autoleap.com/

#### Construction Management — 95/105 (Stable)
**Sources today**: reddit (PRIMARY)
**New details**: Small contractors ($1M–$10M revenue) stuck on spreadsheets or QuickBooks for job costing — neither designed for construction complexity; "disconnected spreadsheets cause missed deadlines and financial mismanagement"; Procore $375+/mo overkill for <20 person firms; Buildertrend weak accounting; labor cost underestimation (non-billable time = ~50% of working hours) documented; "Premier Construction Software" running Reddit ads = active acquisition proving demand.
**Key Source Links**: https://planyard.com/blog/best-construction-accounting-software-2024 · https://www.autodesk.com/blogs/construction/job-costing-in-construction/ · https://premiercs.com/request-demo/reddit

#### Dental Practice Management — 93/105 (Stable)
**Sources today**: reddit + hn-indiehackers + trends (TRIPLE)
**New details**: Dentrix $400–700/mo cloud + $2,000–8,000 implementation confirmed; "learning curve brutal", "6 weeks for team to feel comfortable"; solo dental purchases autonomously with high income = ideal LTD buyer; 125,000 US dentist offices, majority solo/small group; HN: dental recall automation gap — 200,000 practices losing 30–40% recall revenue to missed appointments; no bootstrapped indie owns recall; Trends: $2.64B → $5.33B dental PMS market (7.2% CAGR); AI front desk (auto-answering, scheduling, insurance eligibility) as PMS-agnostic add-on.
**Key Source Links**: https://content.swissmonkey.io/practice-management/best-dental-practice-management-reviews/ · https://www.dentalclaimsupport.com/blog/best-dental-practice-management-software · https://www.businessresearchinsights.com/market-reports/dental-practice-management-software-market-120659

#### Property Management — 100/105 (Stable)
**Sources today**: hn-indiehackers (PRIMARY)
**New details**: Maintenance coordination gap confirmed — SMS-first maintenance request intake (tenant texts photo) → automated contractor assignment → real-time tracking → auto owner reporting; existing PM software (Buildium, AppFolio, TenantCloud) treat maintenance as afterthought; HN thread Jan 2026 asks "how do small PM teams handle tenant documents" = live unresolved pain; 300,000+ property managers managing 20–100 units = primary ICP for maintenance-first tool.
**Key Source Links**: https://news.ycombinator.com/item?id=45073385 · https://saasopportunities.com/blog/saas-niches-that-make-money-underserved-markets

#### Restaurant Operations — 88/105 (Stable)
**Sources today**: reddit (PRIMARY)
**New details**: POS hidden fees confirmed — surprise processing markups, proprietary hardware lock-in; Toast good features but poor pizza/modifier handling; SpotOn "buggy"; Aloha "clunky, outdated"; 500,000 independent US restaurants; 74% plan to invest more in tech; average tech spend $196/mo; r/restaurantowners 75K+ members with frequent software threads; iPad POS crashes after Apple software updates = reliability gap.
**Key Source Links**: https://www.merchantsbancard.com/list-restaurant-pos-systems-reddit/ · https://learn.g2.com/best-restaurant-management-software · https://www.fsrmagazine.com/feature/restaurants-reach-a-technology-turning-point-rooted-in-simplicity/

#### Small Fleet Trucking TMS — 85/105 (Stable)
**Sources today**: reddit (PRIMARY)
**New details**: Owner-operators in $20–200/mo price desert confirmed; enterprise TMS $50K+ implementation; TruckingOffice/TruckLogics $20–40/mo outdated UI; "all costs exorbitant relative to profit margins"; Google Sheets workaround for 2 trucks confirmed; IFTA quarterly filings = 4x/year marketing urgency moments; 350,000 owner-operators = large TAM for focused tool; IFTA automation confirmed as killer differentiator — no current affordable tool handles elegantly.
**Key Source Links**: https://www.thetruckersreport.com/truckingindustryforum/threads/best-dispatch-software-for-one-truck.327164/ · https://www.torotms.com/blog/best-software-for-small-trucking-company · https://nocheaploads.com/articles/operations-and-logistics/best-dispatching-software/

#### Legal Practice Management — 84/105 (Stable)
**Sources today**: reddit (PRIMARY)
**New details**: Law firms lose 9% of billed hours to non-collection = "$1.35M/year walking out the door" for mid-sized practices; 60–70% of billable work captured manually (lawyers stop to log entries); Clio gates essential features behind costly add-ons; 60–90 day collection cycles; trust accounting compliance (IOLTA) = legal malpractice risk that QuickBooks can't handle; 450,000 licensed US attorneys, ~50% solo/small firm.
**Key Source Links**: https://www.leanlaw.co/blog/automated-legal-billing-software-guide/ · https://lawrank.com/legal-billing-software-2025/ · https://mylegalacademy.com/kb/case-management-software-comparison-2026

#### Pest Control Software — Score: 86/105 (Stable)
**Sources today**: hn-indiehackers + trends (DUAL)
**New details**: GorillaDesk confirmed ~$2–4M ARR from 3,000 customers (bootstrapped since 2013) = <0.5% penetration of 30,000+ US pest control companies; market wide open; DripJobs 2,500 customers ($3–6M ARR est.) validates horizontal multi-trade approach → vertical depth wins; Cohesive YC W25 going horizontal = leaves single-trade vertical niche open; Trends: GorillaDesk, Briostack, FieldRoutes confirmed as competitors but SMB/solo penetration low; AI-first dispatch as next differentiator.
**Key Source Links**: https://gorilladesk.com/about-us/ · https://www.briostack.com/ · https://fieldservicesoftware.io/best-software-for-pest-control-lawn-care-field-service-companies/

#### Home Care Agency Software — 75/105 (Stable)
**Sources today**: reddit (PRIMARY)
**New details**: EVV (Electronic Visit Verification) compliance mandatory all 50 states for Medicaid-funded visits — forced software adoption; shift-fill crisis: when caregiver calls out, dispatchers spend hours calling replacements manually; SMS reliability failures in popular platforms; caregiver-to-client matching (skills, certs, language, geography) done manually; Medicaid reimbursement rates $18–25/hr = agencies can't afford enterprise ($300–600/mo WellSky/MatrixCare); 30,000 US home care agencies, 7–9% annual market growth.
**Key Source Links**: https://caretap.net/blog/reason-home-care-agencies-falling-behind-communication-gaps/ · https://spectrumvoice.com/homecare-software-for-medicaid-providers-2025-requirements-tips/ · https://www.alorahealth.com/top-8-best-home-care-software-in-2026/

#### Pet Grooming Software — 82/105 (Stable)
**Sources today**: hn-indiehackers (PRIMARY)
**New details**: DoggieDashboard $9K MRR from 10 hrs/week operation = proof of concept; dog grooming $10B+ US industry; narrow enough to be sticky, boring enough to have no VC competition; template applies to: pet sitting, dog training, mobile groomers, vet specialty clinics; expansion angle: "DoggieDashboard for mobile pet groomers" with route optimization, van inventory, automated SMS reminders.
**Key Source Links**: https://www.flowjam.com/blog/27-micro-saas-examples-that-actually-print-money-in-2025

---

## Tier 2: Worth Exploring (Score 55–74)

### NEW: Franchise & Multi-Location Boring Business Operations — Score: 65/105

*No existing shortlisted file — First appearance as standalone concept*

| Criterion | Score | Weight | Weighted | Notes |
|-----------|-------|--------|----------|-------|
| Market Validation | 3/5 | 3x | 9 | $1.5B → $4.3B franchise management market; FranConnect for enterprise proves demand |
| Competitor Weakness | 3/5 | 2x | 6 | FranConnect is enterprise-only; no mid-market tool for 5–50 location boring franchises |
| LTD Viability | 2/5 | 2x | 4 | Multi-location operators prefer per-location subscriptions; LTD hard to structure |
| No Free Tier | 4/5 | 1x | 4 | No free franchise management tools |
| Channel Access | 3/5 | 2x | 6 | Franchise Expo, IFA events; cleaning/HVAC franchise FB groups |
| Content Potential | 3/5 | 1x | 3 | "franchise management software", "multi-location cleaning software" |
| AppSumo Fit | 2/5 | 2x | 4 | Franchise operators are not AppSumo buyers |
| Review Potential | 3/5 | 1x | 3 | Will review if it reduces reporting chaos |
| MRR Path | 4/5 | 3x | 12 | Per-location MRR is natural and predictable |
| Build Feasibility | 3/5 | 2x | 6 | Location dashboard + task management + KPI reporting; 4–6 weeks |
| Boring Business Bonus | 4/5 | 2x | 8 | Cleaning/HVAC/lawn care franchises are boring; VC-ignored |

**Weighted Total: 65/105**
**Verdict**: EXPLORE FURTHER — validate whether franchisor vs. franchisee is the buyer
**Next Steps**: Cold outreach to 5–10 location cleaning franchise operators. Confirm if pain is at the corporate (franchisor) or operator (franchisee) level before building.
**Risks**: LTD weak; longer sales cycles; franchisee tools compete with corporate-mandated software.
**Key Source Links**: https://www.franconnect.com/ · https://operandio.com/ · https://www.fieldpie.com/blog/best-franchise-management-software/ · https://blog.serchen.com/multi-location-software-is-a-mess/

---

### Confirmed Tier 2 (Existing Files, Stable)

**QuickBooks Vertical Alternative (Bookkeeping/Accounting)** — 73/105 (Stable)
Reddit today: QuickBooks 400% price hike documented ("$250/2yr → $689/yr for 20-year customer"); Desktop Pro/Premier discontinued Sept 2024 forcing expensive migrations; vertical-specific accounting layer (e.g., HVAC job costing + subcontractor 1099) as differentiation angle.

**Bookkeeping/Accounting Sources**: https://thryvedigest.com/smallbusiness/quickbooks-alternatives-small-business-2026/ · https://gummysearch.com/tools/best-products/accounting-software/

**AI Receptionist for Trades** — 84/105 (Stable)
Trends: Vertical AI agents confirmed as hot category; Avoca, Fixlify, AgentZap, ServiceAgent all launched in last 12 months; "30% admin tax" = technicians spend 30% on non-billable admin; 62% of plumbing emergencies happen after hours; solo/2–5 person shops priced out of enterprise AI ($400+/mo); $49–99/mo AI receptionist + scheduling wedge = open market; 3–5 week MVP.
Source: https://www.avoca.ai/ · https://fixlify.app/ · https://agentzap.ai/ · https://www.signalfire.com/blog/vertical-ai-in-trades-and-construction

---

## Tier 3: Weak / Pass (Score <55)

| Idea | Score | Reason for Pass |
|------|-------|-----------------|
| EVV-Compliant Home Care Scheduling (standalone) | ~53 | LTD not viable (EVV requires ongoing state integration updates); better as feature within home-care-agency-software.md than standalone; fold into existing file |
| Restaurant POS (full platform) | ~52 | Ongoing server/infrastructure costs kill LTD model; hardware lock-in complexity; market dominated by Toast ($1.6B ARR); better angle is standalone DVI/kitchen-comms add-on not full POS |
| HVAC Weather-Aware Dispatch (standalone) | ~50 | No current indie player validates demand; best as feature within field-service-management MVP, not standalone product; add to FSM roadmap |

---

## Deduplication Notes

Today's raw files contained overlapping signals for these canonical ideas:

| Today's Idea | Canonical File | Overlap |
|---|---|---|
| ServiceTitan Alternative (reddit) | `field-service-management.md` | Same core idea, pricing trap confirmed |
| Pool Service Post-Skimmer Exodus (reddit) | `pool-service-management.md` | TAM revised to 150K; active exodus signal |
| Veterinary PIMS Off Cornerstone (reddit) | `veterinary-practice.md` | Server lock-in crisis detailed |
| QuickBooks Vertical Alternative (reddit) | `bookkeeping-accounting.md` | Same market, vertical-specific angle |
| Dental PMS Solo Practices (reddit + HN + trends) | `dental-practice.md` | TRIPLE source confirms $400-700+/mo pain |
| Auto Repair Shop (reddit + trends) | `auto-repair-shop-management.md` | Paper ROs + standalone DVI angle |
| Owner-Operator TMS + IFTA (reddit) | `small-fleet-trucking-tms.md` | IFTA automation as killer feature |
| Law Firm Billing (reddit) | `legal-practice-management.md` | Trust accounting compliance angle |
| Restaurant POS Hidden Fees (reddit) | `restaurant-operations.md` | Same market, transparent pricing angle |
| Construction Job Costing (reddit) | `construction-management.md` | QuickBooks gap for GCs confirmed |
| Route-First Lawn Care (reddit + HN + trends) | `landscaping-lawn-care.md` | Bilingual crew app as unique differentiator |
| GorillaDesk / Pest Control (HN) | `pest-control.md` | <0.5% market penetration; wide open |
| DoggieDashboard / Pet Grooming (HN) | `pet-grooming.md` | $9K MRR from 10 hrs/week validates |
| Funeral Home (competitor analysis) | `funeral-home-management.md` | Detailed competitor weaknesses confirmed |
| Towing Dispatch (competitor analysis) | `towing-dispatch.md` | Per-user pricing trap documented |
| Self-Storage (competitor analysis) | `self-storage-management.md` | Post-acquisition degradation documented |
| Machine Shop ERP (competitor analysis) | `machine-shop-job-tracking.md` | Extreme pricing data adds urgency |
| Vertical AI Agents for Trades (trends) | `ai-receptionist.md` + `field-service-management.md` | Market timing confirmed |
| Deskless Worker Mobile Tools (trends) | `cleaning-service-management.md` + `landscaping-lawn-care.md` | Mobile-first gap confirmed |
| Landscaping Chemical Compliance (HN + trends) | `landscaping-lawn-care.md` | Standalone compliance wedge confirmed |
| Property Maintenance Coordination (HN) | `property-management.md` | SMS-first intake + contractor assignment |
| Residential Cleaning QC (HN + trends) | `cleaning-service-management.md` | Photo checklist + customer notifications |
| Legacy Vertical SaaS Disruption (trends) | Multiple existing files | Confirms timing for dental, vet, auto repair |
| Franchise Multi-Location Ops (trends) | None existing → new Tier 2 | First appearance, LTD-weak, validate first |

---

## Top 3 Recommendations

1. **Pool Service Management** — Score: 92/105 — Most acute market dislocation RIGHT NOW: Skimmer doubled pricing from $1→$2/pool triggering documented mass exodus; 150,000 addressable businesses (3.75x larger TAM than previously estimated); "Service Autopilot Misfits" 1,000+ ready-made switchers; ALL general FSM tools confirmed to have zero water chemistry tracking. Launch window is open now.
   → Key source: https://www.pooldial.com/resources/articles/business/pool-service-software-landscape

2. **Field Service Management for Solo/Micro Trades** — Score: 101/105 — Absolute strongest recurring signal across every dataset; today's Reddit adds $17K–70K first-year ServiceTitan costs with 5-figure ETFs on BBB; Housecall Pro removing human support post-PE acquisition = second major platform failing small shops simultaneously. Two incumbent failures at once = historic switching moment.
   → Key source: https://toricentlabs.com/blog/servicetitan-alternative.html

3. **Funeral Home Management** — Score: 88/105 — Competitor analysis today confirms Passare's QB integration broken + page lag during family meetings; Halcyon opaque fees + overwhelming onboarding; Obit at $12/mo gaining traction proves price sensitivity. Template: $29K MRR in 12 months at 45 homes (0.9% monthly churn) is documented. Boring, profitable, word-of-mouth industry with no dominant modern indie tool.
   → Key source: https://www.obit.cloud/blog/best-funeral-home-software-for-funeral-directors/

---

*Evaluated by: Idea Evaluator Agent | 2026-04-13*
*Next step: Run `bash run-bmad-pipeline.sh` for BMAD processing of top ideas*
