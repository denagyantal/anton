# Idea Evaluation — 2026-07-04

**Sources**: reddit-2026-07-04, hn-indiehackers-2026-07-04, competitor-analysis-2026-07-04, trends-2026-07-04
**Evaluator note**: Full QUAD-source scan (all 4 agents ran today). Intentionally focused on niches not covered in recent scans (home inspection, fire protection, equipment rental, commercial janitorial, food truck, notary, power equipment dealers, IFTA). HN/IH covered ZenMaid $3M revenue milestone + Rentman $15-20M ARR + lawn care vertical deep dive. Competitor analysis deep-dived HVAC FSM, property management, lawn care, auto repair, and trade-specific bookkeeping. Trends surfaced Voice AI ($1B Avoca), vet practice legacy displacement, construction ESG compliance, and IoT field service. Deduplication applied — most ideas map to existing shortlisted files. One new shortlisted file created: `powersports-outdoor-dealer-dms.md`.

---

## Tier 1: Strong Opportunities (Score 75+)

### 1. Subcontractor / Vendor Compliance Document Tracker — Score: 103/105
**File**: `ideas/shortlisted/subcontractor-compliance-tracking.md` (UPDATE — strong new Reddit signal)

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | 700K+ construction companies + 300K+ property management companies; Procore compliance module proves enterprise pays; Reddit thread on COI tracking had 200+ upvotes |
| Competitor Weakness | 5/5 | Procore $375+/mo enterprise-only; Vendor Centric mid-market; everyone else uses Google Drive + manual email chasing |
| LTD Viability | 5/5 | $99 LTD; liability ROI story: one expired COI incident = potentially six-figure exposure avoided |
| No Free Tier | 5/5 | No free compliance tracker targeting GCs/property managers at the SMB level |
| Channel Access | 5/5 | r/PropertyManagement, r/Construction, BiggerPockets (2M+ members); Reddit COI thread = word-of-mouth engine |
| Content Potential | 4/5 | "COI tracking software for contractors", "certificate of insurance expiry alerts" — moderate volume, very low competition |
| AppSumo Fit | 5/5 | Fear/pain story: "expired COI → your sub causes a job site fire → you're personally liable" = instant emotional hook |
| Review Potential | 4/5 | GCs and property managers are active G2/Capterra reviewers |
| MRR Path | 5/5 | $39/mo up to 25 vendors, $79/mo unlimited; grows naturally with contractor/vendor count |
| Build Feasibility | 5/5 | Document upload portal + AI PDF expiry extraction + email alerts + compliance dashboard = 4-5 weeks |
| Boring Business Bonus | 5/5 | GC/PM compliance admin = deeply boring; VCs ignore entirely |

**Weighted Total: 103/105**

**Verdict**: BUILD
**Decision Status**: VALIDATING → BUILDING — strongest Reddit signal of the week; existing file updated
**Next Steps**: Vendor self-upload portal (vendor clicks link → uploads their own COI/W-9/license → AI extracts expiry date) = the killer feature. GC adds sub to dashboard, sub gets email with upload link, GC gets compliance status automatically. No manual PDF hunting. $39/mo for 25 active vendors, $79/mo unlimited, $99 LTD for single-project GCs.
**Risks**: Procore/Buildertrend could add this; large GCs may already have enterprise solutions; PDF AI extraction accuracy needs careful QA
**Key Source Links**:
- https://superframeworks.com/articles/untapped-underserved-micro-saas-niches
- https://bigideasdb.com/b2b-saas-ideas-2026
- https://medium.com/startup-insider-edge/9-reddit-small-business-pain-points-with-no-solutions-5d194d4d9a36
- https://buildbite.com/insights/subcontractor-management-software
- https://permitflow.com/blog/subcontractor-management-software
**Signal Frequency**: 6+ mentions across 8+ weeks — increasing (Reddit COI thread > 200 upvotes = new qualitative peak)

---

### 2. Property Management for Small Landlords (1–20 Units) — Score: 100/105
**File**: `ideas/shortlisted/property-management.md` (UPDATE — competitor analysis adds maintenance dispatch angle)

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | 17M+ individual US landlords; r/Landlord 320K+; DoorLoop AppSumo launch confirmed buyer-present |
| Competitor Weakness | 5/5 | TurboTenant 10-day ACH lag; Innago fraud/support issues; AppFolio $298/mo minimum; Buildium raised fees 40% |
| LTD Viability | 5/5 | $79/10 units / $99/20 units — "pay once, collect rent forever" |
| No Free Tier | 3/5 | TurboTenant/Innago/Stessa free tiers exist but all have crippling limitations |
| Channel Access | 5/5 | r/Landlord, r/realestateinvesting, BiggerPockets 2M+, Facebook "Small Landlords" groups |
| Content Potential | 5/5 | "TurboTenant alternative", "landlord software no fees", "best property management small landlord" |
| AppSumo Fit | 5/5 | DoorLoop AppSumo launch confirms category; landlord tools are proven AppSumo performers |
| Review Potential | 4/5 | 10-day rent lag + tenant fee resentment = emotionally charged reviews |
| MRR Path | 5/5 | Per-unit tiered monthly post-LTD; AI maintenance triage as premium |
| Build Feasibility | 4/5 | ACH rent collection + lease storage + maintenance tickets + expense log + Schedule E export = 4-6 weeks |
| Boring Business Bonus | 4/5 | Unglamorous small landlord; non-technical buyers |

**Weighted Total: 100/105**

**Verdict**: BUILD
**Decision Status**: BUILDING — BMAD pipeline active; today's competitor analysis adds new "LandlordHub" concept: maintenance coordination layer (tenant submits issue with photo → landlord approves → vetted contractor dispatched → tenant gets live status updates)
**Next Steps**: Key new angle: the maintenance coordination module — no current tool automates the "phone tag" loop between tenant, landlord, and contractor. Build this as the differentiated V2 layer on top of standard rent collection + lease management.
**Risks**: AI-native entrants (MagicDoor, Shuk) moving fast; free tools entrenched at low end
**Key Source Links**:
- https://www.shukrentals.com/learn/property-management-software-for-small-landlords
- https://www.leasense.com/blog/buildium-vs-appfolio-comparison-2026
- https://www.kdsdevelopment.net/articles/buildium-pricing-2026-property-management-costs
- https://aiandrealtors.com/review-innago
- https://rentredi.com/blog/best-small-landlord-property-management-software/
**Signal Frequency**: 25+ mentions across 60+ days — peak recurring signal; AI entrant activity increasing

---

### 3. Auto Repair Shop Management (1–3 Bay Independent) — Score: 100/105
**File**: `ideas/shortlisted/auto-repair-shop-management.md` (UPDATE — competitor adds full "ShopDesk" spec)

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | 130K+ independent 1–3 bay shops in US; Tekmetric/Shopmonkey prove paid demand; $3.4B→$8.6B by 2033 |
| Competitor Weakness | 5/5 | Tekmetric hidden fees; Shopmonkey 2.0 broke features; Mitchell 1 no cloud sync; AutoLeap "not possible" support |
| LTD Viability | 5/5 | $89–$199 LTD for 1–3 bay shops; vs $179–$199/mo incumbents |
| No Free Tier | 5/5 | No free auto repair shop management tool exists |
| Channel Access | 5/5 | r/MechanicAdvice, r/AutoMechanic; Facebook "Independent Auto Repair Shop Owners" group (large) |
| Content Potential | 4/5 | "Tekmetric alternative", "auto repair software for small shops", "shop management software" |
| AppSumo Fit | 5/5 | Owner-operator shops = classic AppSumo buyer; "DVI-to-text" workflow is highly demo-able |
| Review Potential | 4/5 | Active Tekmetric/Shopmonkey switching intent = motivated reviewers |
| MRR Path | 5/5 | $59–99/mo flat post-LTD; natural upgrade as shops add bays |
| Build Feasibility | 4/5 | Digital ROs, DVI photos, customer SMS, PartsTech lookup, Stripe invoicing = 4–6 weeks |
| Boring Business Bonus | 5/5 | Independent auto repair = quintessential boring trade; VCs ignore entirely |

**Weighted Total: 100/105**

**Verdict**: BUILD
**Decision Status**: BUILDING — "ShopDesk" concept from today's competitor analysis; existing file updated
**Next Steps**: "ShopDesk" = DVI-to-SMS workflow at $99/mo (half the cost of Tekmetric/Shopmonkey). Technician completes inspection → customer gets SMS with photos + approval button. Core differentiator: mobile-first for techs who use phones, not desktops. PartsTech integration for one-click parts lookup.
**Risks**: Tekmetric/Shopmonkey could add a budget tier; established integrations hard to replicate
**Key Source Links**:
- https://www.capterra.com/compare/169022-190952/Shopmonkey-vs-Tekmetric
- https://www.capterra.com/compare/190952-216500/Tekmetric-vs-Autoleap
- https://blog.csiaccounting.com/top-shop-management-software-auto-repair-reviews-breakdown
- https://blog.torque360.co/auto-repair-software-pricing-2026/
- https://diag.net/msg/m79uf4yb3eb9qotjcphts1hcdr
**Signal Frequency**: 20+ mentions across 50+ days — stable at max; competitor analysis reconfirms weekly

---

### 4. Trade-Specific Bookkeeping (HVAC/Plumbing/Electrical Contractors) — Score: 100/105
**File**: `ideas/shortlisted/bookkeeping-accounting.md` (UPDATE — QB Desktop EOL Sept 2027 = major new urgency signal)

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | QuickBooks losing 15%+ customers/yr since price hikes; QB Desktop EOL Sept 2027 = forced migration of millions of users |
| Competitor Weakness | 5/5 | QB 52% price increase since 2020; support replaced by AI chatbots; no job costing built in; Desktop EOL Sept 2027 |
| LTD Viability | 5/5 | $99 LTD is extremely compelling vs $38-235/mo ongoing QB subscription |
| No Free Tier | 5/5 | Wave is free but won't scale (no inventory, limited accountant access) |
| Channel Access | 5/5 | r/HVAC, r/Plumbing, r/Electricians, r/lawncare, QB Desktop migration forums (captive migrating audience) |
| Content Potential | 5/5 | "QuickBooks Desktop alternative 2027", "QuickBooks alternative for contractors" — massive search volume growing |
| AppSumo Fit | 5/5 | QB Desktop EOL = urgency trigger; "migrate off QB before Sept 2027" campaign writes itself |
| Review Potential | 4/5 | QB haters are extremely vocal on Reddit and G2 |
| MRR Path | 5/5 | $29–49/mo post-LTD vs QB's $38-235/mo; clear migration path |
| Build Feasibility | 4/5 | Job-level P&L + invoice + expense categorization + CPA export = 5-6 weeks; QB sync adds complexity |
| Boring Business Bonus | 4/5 | Accounting for trade contractors = unsexy but critical |

**Weighted Total: 100/105**

**Verdict**: BUILD
**Decision Status**: VALIDATING → BUILD — QB Desktop EOL Sept 2027 is the biggest urgency trigger we've seen; "TradeBooks" concept confirmed
**Next Steps**: "TradeBooks" = the only bookkeeping tool with trade-specific job categories pre-built (HVAC service call, install, maintenance contract, materials run). Job-level profit by job type, not just total revenue. CPA export button produces clean report. Target the 2M+ QB Desktop users who need to migrate off by Sept 2027. AppSumo LTD at $99 is the offer.
**Risks**: Intuit could build a focused migration offer; Xero/FreshBooks have deep resources; job costing for trades is genuinely complex to get right
**Key Source Links**:
- https://www.nerdwallet.com/business/software/reviews/quickbooks-online
- https://www.dualentry.com/blog/quickbooks-alternatives
- https://www.sdocpa.com/quickbooks-desktop-discontinued/
- https://stephsbooks.com/blog/hvac-bookkeeping-guide
- https://www.remotebooksonline.com/blog/bookkeeping-for-hvac-plumbing-electricians
**Signal Frequency**: 8+ mentions across 30+ days — accelerating (QB Desktop EOL = new forced migration catalyst)

---

### 5. HVAC / Field Service for 1–5 Tech Shops — Score: 95/105
**File**: `ideas/shortlisted/hvac-small-shop-dispatch.md` (UPDATE — competitor matrix adds detailed pricing data)

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | ServiceTitan $685M ARR confirms market size; r/HVAC most complaint-dense subreddit for software |
| Competitor Weakness | 5/5 | ServiceTitan $245-500+/tech/mo; HCP real cost $229-320/mo for 3 trucks; Jobber $119/mo before first mow for 2 people |
| LTD Viability | 5/5 | $79 solo / $249 up to 8 techs LTD; vs $1,000-3,000+/mo ServiceTitan |
| No Free Tier | 4/5 | No credible free FSM for trades; FieldFlow at $5/mo is minimally functional |
| Channel Access | 5/5 | r/HVAC, r/Plumbing, r/Electricians; ACCA forums; "HVAC Business Owners" Facebook group |
| Content Potential | 4/5 | "ServiceTitan alternative for small shops" — high intent, moderate volume |
| AppSumo Fit | 5/5 | Flat-rate FSM with clear ROI story; proven AppSumo category |
| Review Potential | 4/5 | Contractors vocal when switching from overpriced enterprise software |
| MRR Path | 5/5 | $49-99/mo flat; maintenance agreement module as natural upsell |
| Build Feasibility | 4/5 | Dispatch + flat-rate pricebook + mobile invoicing + job photos = 4-6 weeks |
| Boring Business Bonus | 5/5 | HVAC/plumbing/electrical = archetypal boring business |

**Weighted Total: 95/105**

**Verdict**: BUILD
**Decision Status**: BUILDING — "TechDispatch"/"FieldDesk" concept; competitor analysis today adds full 6-player pricing matrix
**Next Steps**: Fixed $79/mo for up to 8 users, zero add-on upsells; pre-loaded trade-specific pricebooks on signup; designed for owner-operators who spend time in the field not at a desk. Key today: FieldEdge mobile app "confusing and limiting for technicians, requiring far more back-end work than it should" = confirmed execution gap.
**Risks**: Avoca AI / Probook entering from AI voice layer could redefine product category; FieldFlow could improve
**Key Source Links**:
- https://fieldcamp.ai/reviews/servicetitan/
- https://fieldservicecompare.com/
- https://projul.com/blog/servicetitan-pricing-analysis-2026/
- https://servicebusinessacademy.org/jobber-review-2026/
- https://getfieldy.com/blogs/best-hvac-software-for-small-business
**Signal Frequency**: 15+ mentions across 40+ days — stable, recurring, high-quality signal

---

### 6. IFTA / Fuel Tax Automation for Owner-Operators — Score: 95/105
**File**: `ideas/shortlisted/owner-operator-trucking-tms.md` (UPDATE — IFTA automation angle newly detailed from Reddit)

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | 3.5M trucking companies in US; 90% under 6 trucks; IFTA filing is legally required quarterly; TruckBytes proves paid demand |
| Competitor Weakness | 5/5 | TruckBytes basic/dated; ELD IFTA modules locked behind full platform subscriptions ($35-70/vehicle/mo); ProMiles dated |
| LTD Viability | 4/5 | $59 LTD for 1-truck owner-operator; seasonal urgency (IFTA due April, July, October, January) |
| No Free Tier | 4/5 | TruckBytes is free but very basic; no free ELD-integrated option |
| Channel Access | 5/5 | r/trucking 300K+ members; r/AskTrucker, CDLLife forums, OOIDA community — all active |
| Content Potential | 4/5 | "IFTA software", "IFTA report automation", "owner operator IFTA calculator" — strong search intent quarterly |
| AppSumo Fit | 4/5 | Compliance tool with urgency triggers (quarterly deadlines); clear cost comparison |
| Review Potential | 4/5 | Truckers vocal on Reddit when tools save them time |
| MRR Path | 4/5 | $19/truck/mo; grows with fleet size; natural expansion to full TMS |
| Build Feasibility | 5/5 | ELD API connection + fuel card CSV import + state mile calculator + PDF report = 4-5 weeks |
| Boring Business Bonus | 5/5 | Trucking compliance = deeply boring; VCs completely ignore |

**Weighted Total: 95/105**

**Verdict**: BUILD
**Decision Status**: VALIDATING — IFTA automation as standalone product newly validated today (previously embedded in broader TMS concept)
**Next Steps**: Standalone IFTA tool with ELD connections (Motive, Samsara, Verizon Connect APIs) + fuel card import (WEX/Comdata CSV) + auto-calculated state miles/gallons → quarterly IFTA report ready to submit. $19/truck/mo competitive with IFTA module add-ons. $59 LTD for 1-truck operators. Mobile app for fuel receipt photo capture as fallback.
**Risks**: Motive/Samsara could bundle IFTA more aggressively; ELD API access may be rate-limited or gated
**Key Source Links**:
- https://www.dashdoc.com/en-US/blog/ifta-reporting-software-trucking
- https://loadstop.com/blogs/ifta-explained-why-smart-trucking-companies-swear-by-ifta-software
- https://fleetcollect.net/blog/best-ifta-software-comparison
- https://truxeltms.com/2026/03/07/why-a-tms-beats-spreadsheets-for-growing-trucking-companies/
**Signal Frequency**: 8+ mentions across 30+ days (trucking TMS + new IFTA-specific angle today)

---

### 7. Commercial Janitorial Contract Management — Score: 95/105
**File**: `ideas/shortlisted/cleaning-service-management.md` (UPDATE — commercial janitorial angle from Reddit reinforces B2B gap)

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | ZenMaid $3M/yr proves cleaning SaaS works; 3M+ cleaning businesses in US; commercial is larger segment |
| Competitor Weakness | 5/5 | Swept targets enterprise; ZenMaid residential-only; Hubstaff is generic scheduling; nothing purpose-built for small commercial operators |
| LTD Viability | 4/5 | $59 LTD converts well; commercial contracts = recurring revenue = clear ROI |
| No Free Tier | 4/5 | When I Work has a free tier but is generic scheduling only |
| Channel Access | 4/5 | r/smallbusiness, cleaning business Facebook groups; ZenMaid IH story = organic discovery |
| Content Potential | 3/5 | "commercial janitorial software", "commercial cleaning business app" — limited volume |
| AppSumo Fit | 4/5 | Clear operational pain (3 apps that don't talk to each other); obvious ROI |
| Review Potential | 4/5 | Small business owners leave reviews when tool saves them time |
| MRR Path | 5/5 | $29/mo (1-5 employees), $49/mo (up to 15); flat pricing is a clear win over per-user |
| Build Feasibility | 5/5 | Site-specific checklists + GPS verification + quality photo reports + monthly billing = 4 weeks |
| Boring Business Bonus | 5/5 | Commercial janitorial = most boring business category; #1 recommendation in r/sweatystartup |

**Weighted Total: 95/105**

**Verdict**: BUILD
**Decision Status**: VALIDATING — separate commercial angle from ZenMaid's residential focus confirmed strongest gap; existing file updated
**Next Steps**: Commercial-specific tool: site-specific checklist templates per client, GPS "on-site" verification, photo quality inspection reports emailed to clients after each visit, monthly contract billing from completed visits. $29/mo flat for 1-5 employees (no per-user pricing = core pitch vs Swept). ZenMaid forum and Facebook groups for distribution.
**Risks**: ZenMaid could add commercial features; niche is smaller than residential
**Key Source Links**:
- https://www.janitorialmanager.com/work-management-system/janitorial-scheduling-software/
- https://myquoteiq.com/best-employee-scheduling-software-cleaning-businesses-2026/
- https://www.zenmaid.com/magazine/the-best-cleaning-business-software-in-2026/
- https://www.indiehackers.com/post/tech/from-a-cleaning-side-hustle-to-a-3m-yr-saas-for-cleaning-services-suhsqkDZB1zIwRmXxrFm
**Signal Frequency**: 8+ mentions across 25+ days — stable; commercial angle newly separated from residential today

---

### 8. Small Equipment Rental Management (Party / Construction / Trailer) — Score: 99/105
**File**: `ideas/shortlisted/niche-equipment-rental.md` (UPDATE — Reddit damage documentation angle + Rentman $15-20M ARR)

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | Booqable/EZRentOut prove market; Rentman $15-20M ARR (AV rental) = clearest adjacent proof; 40K+ party rental companies US |
| Competitor Weakness | 5/5 | Booqable lacks damage documentation; EZRentOut gets expensive fast (per-asset fees); no dominant SMB tool |
| LTD Viability | 5/5 | $79–149 LTD; one prevented damage dispute ($300-2,000 avg) pays for tool immediately |
| No Free Tier | 5/5 | No credible free equipment rental tool |
| Channel Access | 4/5 | r/sweatystartup, r/smallbusiness; ARA (American Rental Association) member directory as cold outreach |
| Content Potential | 4/5 | "party rental software", "equipment rental management software small business" |
| AppSumo Fit | 5/5 | Visual product (damage photo workflow); clear pain point demo |
| Review Potential | 4/5 | Rental operators vocal when tool prevents disputes |
| MRR Path | 5/5 | $49-79/mo flat; grows with asset count |
| Build Feasibility | 4/5 | Availability calendar + damage photo check-out/in + Stripe deposit + delivery routing = 5-6 weeks |
| Boring Business Bonus | 5/5 | Party/tool/trailer rental = boring local business; VCs completely ignore |

**Weighted Total: 99/105**

**Verdict**: BUILD
**Decision Status**: VALIDATING — damage documentation workflow from Reddit = key differentiator confirmed; Rentman $15-20M ARR proves exact same model at scale
**Next Steps**: Mobile-first: availability calendar, online booking, damage deposit via Stripe, photo check-out/check-in with timestamped condition documentation (THE differentiator), delivery route planning, late return fee automation. Flat $49/mo for up to 200 assets. "Available on [date]?" in 10 seconds = the killer demo hook.
**Risks**: Booqable or EZRentOut could add damage documentation; Rentman could add a party rental tier
**Key Source Links**:
- https://rentrax.com/blog/top-10-equipment-rental-software/
- https://ezo.io/ezrentout/blog/quipli-vs-booqable-vs-ezrentout/
- https://www.indiehackers.com/post/tech/building-a-15m-arr-saas-from-a-gap-he-found-at-his-brick-and-mortar-HFriCBQLHukAmdXVEj1q
- https://rentmy.co/blog/best-rental-software-2026
**Signal Frequency**: 10+ mentions across 30+ days — stable; Rentman $15-20M ARR reconfirmed today via HN/IH

---

### 9. Home Inspector Report & Business Software — Score: 99/105
**File**: `ideas/shortlisted/home-inspection-software.md` (UPDATE — detailed Reddit coverage with Spectora offline crash specifics)

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | Spectora at $109/mo + $90M acquisition + 30M ARR proves 35K inspectors pay; solo operators dominate |
| Competitor Weakness | 5/5 | Spectora crashes offline (inspectors in basements/attics with no signal); per-inspector pricing; zero phone support; alternatives dated |
| LTD Viability | 5/5 | $79 LTD; ROI: save 1 hr/inspection = $350-500/week recovered at $79 total cost |
| No Free Tier | 5/5 | No credible free home inspection software |
| Channel Access | 5/5 | InterNACHI forum + Facebook (largest inspector community globally); inspectors are very tool-aware |
| Content Potential | 4/5 | "Spectora alternative", "home inspection app affordable", "home inspector software" |
| AppSumo Fit | 5/5 | Owner-operator tool with clear ROI; offline reliability as key demo differentiator |
| Review Potential | 4/5 | Inspectors vocal about tool reliability (safety-critical work) |
| MRR Path | 5/5 | $49 solo / $79 for 2–3 inspectors/mo flat |
| Build Feasibility | 4/5 | Offline-capable mobile app = main challenge (critical differentiator); photo-annotated report templates; 5-6 weeks |
| Boring Business Bonus | 4/5 | Home inspection = unglamorous professional service |

**Weighted Total: 99/105**

**Verdict**: BUILD
**Decision Status**: VALIDATING — Spectora's offline crash problem confirmed as #1 complaint; 80% solo operator market = LTD sweet spot
**Next Steps**: Mobile-first, offline-capable (critical differentiator): photo-annotated report templates by property type, drag-and-drop defect library, client delivery portal, built-in scheduling + online booking, Stripe invoicing. Flat $49/mo solo / $79/mo for 2-3 inspectors. Target InterNACHI forum and Facebook Groups — inspectors talk tools constantly.
**Risks**: Spectora could fix offline issues; offline-capable mobile app is technically harder to build
**Key Source Links**:
- https://poolverify.io/resources/spectora-pricing-breakdown-comparison
- https://www.capterra.com/p/157144/Spectora/
- https://fieldscribe.report/blog/spectora-pricing-2026
- https://www.softwareworld.co/competitors/spectora-alternatives/
- https://www.g2.com/products/spectora/reviews
**Signal Frequency**: 5+ mentions across 30+ days — increasing (Reddit today adds strongest case yet)

---

### 10. Fire Protection Contractor Software (NFPA Compliance Tracking) — Score: 97/105
**File**: `ideas/shortlisted/fire-inspection-software.md` (UPDATE — Reddit confirms full market picture for small contractors)

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | NFPA compliance non-negotiable; 10K+ US fire protection contractors; ServiceTrade/InspectPoint prove enterprise pays $200-400+/tech/mo |
| Competitor Weakness | 5/5 | ServiceTrade enterprise pricing; Uptick AU-focused; InspectPoint enterprise; Essential mid-market; nothing affordable for 1-5 tech shops |
| LTD Viability | 5/5 | $99 LTD; compliance liability = must-have not nice-to-have; sticky annual inspection cycle |
| No Free Tier | 5/5 | No free NFPA-specific inspection tool |
| Channel Access | 4/5 | NFPA forums, LinkedIn contractor groups; smaller Reddit community than HVAC |
| Content Potential | 4/5 | "fire inspection software small business", "NFPA compliance tracking app" |
| AppSumo Fit | 4/5 | Niche but strong LTD story; compliance software has urgent regulatory angle |
| Review Potential | 4/5 | Compliance software users review when it saves time + prevents liability |
| MRR Path | 5/5 | $79-129/mo; annual inspection cycle = built-in return business |
| Build Feasibility | 4/5 | NFPA-specific templates + deficiency tracking + AHJ certificate PDF generation = 5-6 weeks |
| Boring Business Bonus | 5/5 | Fire protection contracting = deeply boring trade; zero VC interest |

**Weighted Total: 97/105**

**Verdict**: BUILD
**Decision Status**: VALIDATING — small fire protection shop (1-5 techs) using clipboard + Word + QuickBooks confirmed; no affordable software exists
**Next Steps**: NFPA-aware inspection app: pre-built templates (NFPA 25 sprinkler, NFPA 72 alarm, portable extinguisher), deficiency tracking with reinspection scheduling, AHJ-compliant certificates auto-generated, customer portal for certificate download, QuickBooks invoicing integration. $79/mo for 1-2 techs, $129/mo for 3-5. $99 LTD.
**Risks**: ServiceTrade/Uptick could release a budget tier; AHJ certificate formats vary by jurisdiction (adds complexity)
**Key Source Links**:
- https://www.uptickhq.com/us/blog/best-fire-inspection-software-tools
- https://servicetrade.com/resources/blog/best-fire-life-safety-software-2026/
- https://www.inspectpoint.com/best-fire-inspection-software/
- https://www.withessential.com/resources/the-top-10-best-fire-protection-software-solutions
**Signal Frequency**: 4+ mentions across 20+ days — increasing; first Reddit-sourced detail today

---

### 11. Lawn Care & Landscaping Software (Solo/Small Crews) — Score: 102/105
**File**: `ideas/shortlisted/landscaping-lawn-care.md` (UPDATE — DUAL-source confirmation: HN/IH vertical SaaS analysis + competitor RouteCut concept)

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | Jobber $100M+ ARR proves demand; ZenMaid $3M/yr shows niche wins; 600K+ solo lawn operators in US |
| Competitor Weakness | 5/5 | Service Autopilot 4-8 week learning curve + declining support after Xplor acquisition; Yardbook iOS still beta, no auto-invoice; Jobber $1,400+/yr for 2-person crew |
| LTD Viability | 5/5 | $79-99 LTD; solo operators are deal hunters; large audience of motivated buyers |
| No Free Tier | 4/5 | Yardbook is free but broken on iOS; effectively no viable free option |
| Channel Access | 5/5 | r/lawncare, r/landscaping; Facebook "Lawn Care Business Owners" (100K+); lawnsite.com forums |
| Content Potential | 4/5 | "Jobber alternative lawn care", "lawn care software solo operator", "Yardbook alternative" |
| AppSumo Fit | 5/5 | Visual product (route map + invoice flow); large audience; clear before/after value story |
| Review Potential | 4/5 | Jobber switchers are vocal; Yardbook users frustrated = active switching intent |
| MRR Path | 5/5 | $39/mo (1-3 crew) → $79/mo (4-8); natural growth |
| Build Feasibility | 5/5 | Route optimization (Google Maps API) + recurring schedule + auto-invoicing + Stripe = 4-5 weeks |
| Boring Business Bonus | 5/5 | Lawn care = classic boring/sweaty business; $105B industry, VCs ignore SMB segment |

**Weighted Total: 102/105**

**Verdict**: BUILD
**Decision Status**: BUILDING — "RouteCut"/"MowTrack" concept; HN/IH identifies chemical application log as key differentiator for licensed applicators
**Next Steps**: "RouteCut" — daily route optimization + auto-invoicing on job completion in single tap. Competitors either don't do route optimization (Yardbook) or charge $119+/mo (Jobber). Key new angle from HN: chemical application log (required by pesticide license holders) = regulatory differentiator not in any affordable tool. One-click HOA proposal templates = upsell.
**Risks**: Duranta AI ($7M seed) targeting landscape estimating at the high end; Yardbook could finally release iOS app
**Key Source Links**:
- https://lawncrewpro.com/software/service-autopilot-review/
- https://lawnbook.app/blog/jobber-alternatives-free-lawn-care
- https://lawncrewpro.com/software/yardbook-review/
- https://www.indiehackers.com/post/tech/from-a-cleaning-side-hustle-to-a-3m-yr-saas-for-cleaning-services-suhsqkDZB1zIwRmXxrFm
- https://www.servicetitan.com/blog/home-services-industry-trends
**Signal Frequency**: 20+ mentions across 50+ days — stable at max; QUAD-source week

---

### 12. Small Power Equipment / Outdoor Recreation Dealer DMS — Score: 92/105 ⭐ NEW
**File**: `ideas/shortlisted/powersports-outdoor-dealer-dms.md` (NEW — first identification today)

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | CDK/Reynolds & Reynolds $1,500-5,000+/mo proves dealers pay; Lightspeed EVO $300-800/mo proves mid-market DMS market; 15K outdoor power equipment dealers + 10K powersports dealers in US |
| Competitor Weakness | 5/5 | CDK built for franchised auto dealers (overkill); Lightspeed EVO $300-800/mo + complex setup; nothing affordable for small independent dealers |
| LTD Viability | 4/5 | $299 LTD for solo dealer; higher price point but strong ROI (replaces $3,600-9,600/yr Lightspeed EVO) |
| No Free Tier | 5/5 | No free DMS exists at any level |
| Channel Access | 4/5 | OPEI, NPDA dealer associations; LinkedIn dealer groups; smaller Reddit community than trades |
| Content Potential | 3/5 | "powersports dealer software", "outdoor equipment dealer DMS", "Lightspeed EVO alternative" — moderate volume |
| AppSumo Fit | 4/5 | B2B with clear cost comparison story; dealer associations as distribution |
| Review Potential | 4/5 | Tight-knit dealer communities share recommendations |
| MRR Path | 5/5 | $149/mo flat for up to 5 users; clear migration from spreadsheets + QuickBooks |
| Build Feasibility | 3/5 | VIN/serial number tracking, service work orders, parts counter POS, F&I paperwork = more complex than basic FSM; 6-8 weeks |
| Boring Business Bonus | 5/5 | Outdoor power equipment + powersports dealers = deeply boring local retail; zero VC interest |

**Weighted Total: 92/105**

**Verdict**: EXPLORE FURTHER
**Decision Status**: NEW — first identification today; strong signal but niche smaller than trades/FSM markets
**Next Steps**: Validate via OPEI (Outdoor Power Equipment Institute) and NPDA (National Powersports Dealer Association) — find active dealer forums. Key features: unit inventory (VIN/serial, cost, floor plan tracking), service work orders (labor + parts, tech time), parts counter POS (bin locations, cost vs retail), customer history, basic AR reporting. QuickBooks integration for accounting. $149/mo flat, no per-unit fees. $299 LTD for solo/2-person dealer.
**Risks**: More complex to build than basic FSM; Lightspeed EVO covers powersports adequately for some dealers; niche is dealer-specific and smaller than the broader trades market
**Key Source Links**:
- https://bigideasdb.com/boring-industries-begging-for-micro-saas
- https://blog.startupstash.com/6-boring-industries-begging-for-micro-saas-with-zero-competition-9e626316ddf1
- https://bigideasdb.com/micro-saas-ideas-2026
**Signal Frequency**: 1 mention — first identification today (2026-07-04)

---

### 13. Voice AI Receptionist for Trades (Non-ServiceTitan) — Score: 91/105
**File**: `ideas/shortlisted/ai-voice-answering-trades.md` (UPDATE — Avoca $1B, Probook $40M reconfirm; Jobber/HCP gap named)

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | Avoca $125M at $1B valuation; booking $1B in jobs for customers in 2026; Probook $40M a16z/Sequoia |
| Competitor Weakness | 4/5 | Avoca's moat is ServiceTitan Gold Partner status — Jobber/HCP users underserved; sub-$149/mo slot for 1-5 tech shops wide open |
| LTD Viability | 3/5 | Usage-based AI voice = harder to do true LTD; $299-499 for call-limit tier works |
| No Free Tier | 4/5 | Rosie at $49/mo is cheapest; no free AI voice for trades |
| Channel Access | 5/5 | r/HVAC, r/Plumbing; HVAC Facebook groups; "Avoca alternative for Jobber" = positioning gift |
| Content Potential | 5/5 | "AI receptionist HVAC", "Avoca alternative Jobber", "never miss a service call" = proven content angles |
| AppSumo Fit | 3/5 | Usage-based is harder for LTD; but "pays for itself on one booked call" = compelling angle |
| Review Potential | 4/5 | Trades owners vocal when tool books jobs overnight |
| MRR Path | 5/5 | $49-149/mo per tech; per-call or per-job pricing scales with usage |
| Build Feasibility | 4/5 | VAPI/Bland.ai/Retell + Jobber/HCP webhook integration = 3-4 weeks |
| Boring Business Bonus | 5/5 | HVAC/plumbing/electrical = boring industry; AI applied to answering phones = unsexy but high-value |

**Weighted Total: 91/105**

**Verdict**: BUILD
**Decision Status**: BUILDING — Avoca/Probook raised $165M combined in Q2 2026 = market validated at scale; SMB slot still unoccupied
**Next Steps**: "Avoca alternative for Jobber users" — VAPI/Bland.ai for voice + Jobber webhook to auto-book jobs. Target: 1-5 tech shops on Jobber/HCP who miss 35-50% of calls. Outbound AI calling for seasonal reminders (HVAC tune-ups, winterization) = barely touched adjacent feature.
**Risks**: Avoca could add Jobber integration; Probook positions as "AI OS for home services" = direct competitor
**Key Source Links**:
- https://www.avoca.ai/
- https://aiautomationglobal.com/blog/avoca-ai-voice-agent-trades-unicorn-2026
- https://www.idlen.io/news/avoca-ai-1-billion-valuation-kleiner-perkins-services-economy-voice-agents-april-2026/
- https://solvea.cx/blog/best-ai-receptionist-for-hvac
- https://leapingai.com/blog/voice-ai-platforms-compared-leaping-ai-vs-avoca
**Signal Frequency**: 10+ mentions across 30+ days — accelerating (Avoca $1B valuation + Probook $40M = sector validation peak)

---

### 14. SMB Fleet Management (Samsara Lite, 10–50 Vehicles) — Score: 94/105
**File**: `ideas/shortlisted/small-fleet-tms.md` (UPDATE — HN/IH identifies smartphone-first gap below Samsara)

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | Samsara IPO'd (IOTC); Verizon Connect dominant; HVAC/plumbing millionaire trend = 5-30 van fleets growing |
| Competitor Weakness | 5/5 | Samsara $33+/vehicle/mo annual contract + hardware; SMB (10-50 vehicles) = ignored segment |
| LTD Viability | 4/5 | $99 for 5 vehicles perpetual; higher price per-unit = harder LTD math |
| No Free Tier | 4/5 | No credible free fleet tracking for SMBs |
| Channel Access | 4/5 | r/HVAC, r/Plumbing (fleet owners); trucking communities; HVAC/plumbing Facebook groups |
| Content Potential | 4/5 | "Samsara alternative small business", "fleet tracking no hardware" |
| AppSumo Fit | 4/5 | No-hardware smartphone-first = compelling demo; HVAC/plumbing fleet owners = AppSumo buyers |
| Review Potential | 4/5 | Fleet managers active on G2 |
| MRR Path | 5/5 | $19/vehicle/mo; natural growth as business adds vans |
| Build Feasibility | 4/5 | Smartphone GPS + maintenance reminders + driver reports = 4-6 weeks |
| Boring Business Bonus | 5/5 | Fleet management for local service businesses = boring operations |

**Weighted Total: 94/105**

**Verdict**: EXPLORE FURTHER
**Decision Status**: VALIDATING — smartphone-first "Samsara Lite" concept confirmed viable; HVAC/plumbing millionaire trend drives fleet growth
**Next Steps**: No hardware, no annual contracts. Basic location + mileage + maintenance reminders + driver reports at $19/vehicle/mo. Month-to-month billing as the anti-Samsara pitch. Target HVAC/plumbing/pest control owners with 5-30 vans.
**Risks**: Samsara/Verizon Connect could release no-hardware tier; location tracking is commodity
**Key Source Links**:
- https://medium.com/@urano10/vertical-saas-micro-niches-beyond-the-obvious-01e0adf16a98
- https://news.ycombinator.com/item?id=41828896
- https://www.housecallpro.com/resources/field-home-service-industry-trends/
**Signal Frequency**: 5+ mentions across 30+ days — increasing with HVAC/plumbing growth trend

---

### 15. Food Truck Event Booking & Profitability Tracker — Score: 84/105
**File**: `ideas/shortlisted/food-truck-management.md` (UPDATE — multi-jurisdiction permit tracking confirmed gap)

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 4/5 | 50K food trucks US; Square/Toast prove operators pay for software; SchedulingKit partial solution confirms demand |
| Competitor Weakness | 4/5 | No all-in-one: Square handles POS; SchedulingKit handles bookings; nobody does the back-office + permit tracking |
| LTD Viability | 4/5 | $59-99 LTD; operators are deal hunters; "one avoided permit fine pays for lifetime access" |
| No Free Tier | 3/5 | Square is free (for POS); but no free back-office tool for non-POS workflows |
| Channel Access | 4/5 | r/foodtrucks (active community); Facebook "Food Truck Owners Worldwide" 50K+ |
| Content Potential | 3/5 | "food truck management software", "food truck permit tracker" — limited volume |
| AppSumo Fit | 3/5 | Smaller niche; but strong ROI story with permit fine avoidance |
| Review Potential | 3/5 | Moderate; operators will review if tool prevents fines |
| MRR Path | 4/5 | $29/mo solo, $49/mo multi-truck; small but recurring |
| Build Feasibility | 5/5 | Event calendar + P&L tracker + permit renewal reminders + catering booking = 4-5 weeks |
| Boring Business Bonus | 4/5 | Food truck back-office = unglamorous; slightly trendier than plumbing but still boring |

**Weighted Total: 84/105**

**Verdict**: EXPLORE FURTHER
**Decision Status**: VALIDATING — multi-jurisdiction permit tracking gap confirmed; private event booking + P&L angles added
**Next Steps**: Focus on the non-POS workflows: event/location calendar, per-event P&L, multi-jurisdiction permit renewal reminders, catering booking with deposit. Designed to sit alongside Square/Toast. $29/mo flat.
**Risks**: Niche is smaller than trades software; food trucks have notoriously high business failure rates
**Key Source Links**:
- https://schedulingkit.com/hub/scheduling/best-food-truck-booking-software
- https://www.joinhomebase.com/blog/food-truck-pos-software
- https://gitnux.org/best/food-truck-management-software/
**Signal Frequency**: 8+ mentions across 35+ days — stable

---

### 16. Mobile Notary & Signing Agent Business Manager — Score: 79/105
**File**: `ideas/shortlisted/mobile-notary-business-hub.md` (UPDATE — first detailed Reddit coverage today)

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 4/5 | 150K+ certified NSAs in US; NotaryAssist/CloseWise prove partial demand; active NNA forum community |
| Competitor Weakness | 4/5 | NotaryAssist + CloseWise are partial solutions; no integrated cross-platform order aggregation + accounting + mileage + tax |
| LTD Viability | 4/5 | $49 LTD ideal; cost-sensitive community; "consolidates 5 apps into 1" pitch |
| No Free Tier | 3/5 | Notaries currently use spreadsheets + Google Calendar as "free" solution |
| Channel Access | 4/5 | NNA forum, Facebook notary groups (large active communities); word-of-mouth strong in signing agent network |
| Content Potential | 3/5 | "notary signing agent software", "notary business tracker" — limited search volume |
| AppSumo Fit | 3/5 | Smaller niche; but community-driven distribution potential |
| Review Potential | 4/5 | Community-driven; NNA forum recommendation = word-of-mouth engine |
| MRR Path | 3/5 | $19/mo; low ARPU; but 150K potential customers |
| Build Feasibility | 5/5 | Calendar + mileage GPS + income tracker by signing service + Schedule C export = 4-5 weeks |
| Boring Business Bonus | 4/5 | Mobile notary work = unglamorous independent contractor work |

**Weighted Total: 79/105**

**Verdict**: EXPLORE FURTHER
**Decision Status**: NEW → VALIDATING — first detailed coverage today; low ARPU but straightforward build and community distribution
**Next Steps**: Single-dashboard: aggregate signing orders from email confirmations (parse order details), built-in GPS mileage tracker, income tracker by signing service (see who pays best), auto-generated Schedule C report for tax season, conflict detection. $19/mo or $49 LTD.
**Risks**: Market contracted post-2022 refi boom; low ARPU ($19/mo) makes unit economics challenging
**Key Source Links**:
- https://www.closewise.com/top-5-notary-signing-agent-platforms/
- https://www.nationalnotary.org/knowledge-center/signing-agent-resources
- https://forum.notarycafe.com/t/notary-signing-companies/50105
- https://notaryassist.com/
**Signal Frequency**: 2 mentions — first detailed Reddit coverage today

---

## Tier 2: Worth Exploring (Score 55–74)

### Construction ESG & Carbon Compliance for Small Contractors — Score: 70/105
**File**: New (no existing shortlisted file yet — signal too early for Tier 1)

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 3/5 | Green Badger exists (proves large-project demand); $15B market cited; but SMB segment currently minimal paying customers |
| Competitor Weakness | 4/5 | Green Badger targets large projects; nothing for small contractors ($1M-10M revenue) |
| LTD Viability | 3/5 | $199-399 LTD; early adopter buyers; regulatory mandate creates urgency in NY/CA |
| No Free Tier | 4/5 | No free ESG tool for small contractors |
| Channel Access | 3/5 | LinkedIn contractor groups; AGC chapters; regulatory-driven discovery |
| Content Potential | 3/5 | "LEED compliance small contractor", "construction ESG reporting" — low volume today |
| AppSumo Fit | 3/5 | Niche regulatory angle; limited audience size on AppSumo |
| Review Potential | 3/5 | Moderate |
| MRR Path | 3/5 | Regulatory deadline-driven; willingness to pay uncertain until mandate bites |
| Build Feasibility | 5/5 | Materials tracker + compliance checklist + ESG scorecard = simple build |
| Boring Business Bonus | 3/5 | Compliance tech = somewhat boring but "green" has trendy connotations |

**Weighted Total: 70/105**

**Verdict**: PASS for now — revisit in 2027 when NY/CA green building mandates tighten
**Next Steps**: Monitor regulatory timeline. If NY's Local Law 97 or CA SB 253 compliance deadlines move to 2027-2028 enforcement, revisit as Tier 1.
**Key Source Links**:
- https://getgreenbadger.com/
- https://neuroject.com/esg-software-tool/
- https://saaslatestnews.com/vertical-saas-startups-2026/

---

### IoT / Smart Home Integration Layer for Field Service Techs — Score: 65/105
**File**: New (too early-stage for Tier 1; keep watching)

**Summary**: HVAC, plumbing, and electrical systems are connecting to Nest/ecobee/Ring, but field service tech workflows don't integrate with smart home data. Two product angles: (1) pre-arrival diagnostic app (pull thermostat history before arriving) and (2) proactive service triggers (IoT anomaly → automated reminder → one-click booking). ServiceTitan has it on roadmap but no winner yet.

**Verdict**: PASS for now — technically complex, early market; revisit when smart home API ecosystems stabilize

---

### Bakery & Artisan Food Production Management — Score: 82/105
**File**: `ideas/shortlisted/small-batch-food-production.md` (UPDATE — Craftplan Show HN confirms demand; Natasha's Law allergen hook)

**Summary**: Craftplan (HN Show HN) confirms demand from multiple bakery owners in the comments. Allergen tracking (Natasha's Law in UK) = regulatory compliance hook. Bake Diary/BakeSmart are legacy with poor UX. Recipe costing + allergen tracking + production planning + customer orders = unoccupied at indie price point ($59-79 LTD). UK/EU focus first due to regulatory pressure.
**Key Sources**: https://news.ycombinator.com/item?id=46847690

---

### Skilled Trades Job Board / AI Matching — Score: 75/105
**File**: `ideas/shortlisted/skilled-trades-workforce.md` (UPDATE — 500K unfilled trades jobs, AI matching angle confirmed)

**Summary**: Indeed/LinkedIn don't surface plumbing license types, OSHA certifications, union membership. 500K+ unfilled trades jobs in US. ServiceTitan IPO at $9.6B proves sector scale. But LTD model is hard for a marketplace; $99/mo employer or job credits is better monetization. Signal is there but monetization model needs work.
**Key Sources**: https://www.servicetitan.com/blog/home-services-industry-trends

---

### Veterinary Practice Legacy Displacement — Score: 72/105
**File**: `ideas/shortlisted/veterinary-practice.md` (UPDATE — AI scribe 26.5% CAGR, Instinct acquired ScribbleVet Jan 2026)

**Summary**: $2.1B vet software market growing 9% annually; Avimark/Cornerstone to cloud migration underway; AI scribe (26.5% CAGR) is the key differentiator. Instinct acquired ScribbleVet Jan 2026. Window for niche players is closing as Shepherd/Digitail/ezyVet consolidate. AI client communication for solo/independent practices = white space.
**Key Sources**: https://www.shepherd.vet/blog/8-best-ai-powered-veterinary-practice-management-software-platforms-2026-comparison-guide/

---

### Micro-SaaS for Small Franchisors (5–20 Locations) — Score: 68/105
**File**: `ideas/shortlisted/micro-franchise-ops.md` (UPDATE — micro-franchisor segment 5-20 units confirmed underserved)

**Summary**: FranConnect/Homebase built for 50+ locations. Small franchisors (5-20 units) in cleaning/lawn/pest have no affordable alternative. Core needs: royalty tracking, ops audit checklists, centralized scheduling, local marketing automation. Per-location pricing model (not LTD) fits better.
**Key Sources**: https://www.autymate.com/blog/the-franchisors-guide-to-the-best-franchise-management-software-in-2026

---

### PastureEgg / Pasture Livestock Management — Score: 63/105
**File**: `ideas/shortlisted/agricultural-farm-management.md` (UPDATE — pasture poultry angle confirmed pre-revenue but HN engagement positive)

**Summary**: 50K+ small poultry farms using spreadsheets. Broader farm management software ignores livestock. PastureEgg (HN) confirms founder-market fit but pre-revenue. Community angle (regenerative agriculture) = high-engagement but price-sensitive. $29-49/mo or $149 LTD.
**Key Sources**: https://news.ycombinator.com/item?id=46414570

---

### Manufacturing ERP for SMB (Carbon / Food & Beverage MRP) — Score: 62/105
**File**: `ideas/shortlisted/manufacturing-erp-sme.md` (UPDATE — Carbon Show HN: 5 early customers, accounting integration gap)

**Summary**: Carbon ERP (open-source, Show HN) — SAP for sub-200 employee manufacturers. 5 early customers. Key gap confirmed: no accounting/GL integration = #1 blocker. Self-hosting complexity is UX barrier. Hosted-first, food/beverage niche angle (recipe/BOM + production batches + inventory + invoicing) = cleaner MVP path. $99/mo or $499 LTD.
**Key Sources**: https://news.ycombinator.com/item?id=44792005

---

## Tier 3: Weak / Pass (Score <55)

- **Rentman competitor (AV/Event production niche)** — Market proven at $15-20M ARR but AV production is Boring Score 3/5; Rentman dominates; adjacent party rental is better angle (already in niche-equipment-rental file)
- **Stagetimer clone (church countdown timers)** — $15K MRR proves micro-niche exists; better served as feature within church-management.md which already exists
- **Vertical AI agents trend (general)** — Not a product idea; context for positioning all trades/field service tools
- **Last-mile logistics SMB** — Raw signal only; too early, too broad
- **Dental lab ↔ dentist handoff** — Niche with limited software precedent; skip for now
- **Mental health practice billing** — Flagged but already covered in mental-health-therapist-ehr.md

---

## Top 3 Recommendations

1. **Subcontractor / Vendor Compliance Document Tracker** — Every GC and property manager fears the expired COI liability scenario; vendor self-upload portal eliminates the #1 admin pain point; $99 LTD with airtight ROI story — Score: 103/105 — https://bigideasdb.com/b2b-saas-ideas-2026

2. **Trade-Specific Bookkeeping ("TradeBooks")** — QuickBooks Desktop EOL Sept 2027 = the forced migration event that creates a captive audience of millions; job-level P&L for trades is completely unserved at an indie price point — Score: 100/105 — https://www.sdocpa.com/quickbooks-desktop-discontinued/

3. **Small Power Equipment / Outdoor Dealer DMS** — 25,000+ independent outdoor/powersports dealers running on spreadsheets + QuickBooks; Lightspeed EVO $300-800/mo is the only option; nobody has built the affordable version yet — Score: 92/105 — https://bigideasdb.com/boring-industries-begging-for-micro-saas
