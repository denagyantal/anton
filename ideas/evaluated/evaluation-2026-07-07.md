# Idea Evaluation — 2026-07-07

**Sources**: reddit-2026-07-07, hn-indiehackers-2026-07-07, competitor-analysis-2026-07-07, trends-2026-07-07  
**Ideas evaluated**: 25 distinct ideas across 4 source files  
**Evaluator note**: Reddit access blocked again; research via Capterra/G2/software comparison/industry sites. Signal quality validated via cross-source corroboration. Trends file provides strong macro context reinforcing multiple individual ideas.

---

## Deduplication Notes

Before scoring, all ideas mapped against existing `shortlisted/` files:

| Today's Idea | Canonical File | Action |
|---|---|---|
| Tattoo Studio All-in-One (multi-session + flash day) | tattoo-studio-management.md | UPDATE ↑ score (flash day + multi-session workflow newly detailed) |
| Small Marina Slip Assignment + Seasonal Storage | **NEW → marina-slip-management.md** | **CREATE** |
| Private Swim School Level Progression + Make-up | **NEW → swim-school-management.md** | **CREATE** |
| Junk Removal Load-Based Pricing + Dump Fee Tracker | **NEW → junk-removal-software.md** | **CREATE** |
| Bounce House & Party Rental Route + Safety Log | **NEW → bounce-house-party-rental.md** | **CREATE** |
| Dry Cleaner Garment Photo Intake + SMS Notifications | **NEW → dry-cleaner-pos.md** | **CREATE** |
| Small Custom Fabrication Job Costing & Production | machine-shop-job-tracking.md | UPDATE ↑ score (broadened to cabinet/upholstery/sign shops) |
| AI Dental Front Desk (Zirco.ai angle) | **NEW → dental-ai-front-desk.md** | **CREATE** |
| Pest Control Voice-to-CRM / Smart Trap Integration | pest-control.md | UPDATE (voice input for gloved techs + smart trap IoT angle) |
| AI Call Answering + Booking for Small HVAC/Plumbing | ai-voice-answering-trades.md | UPDATE ↑ score (Avoca $1B validation confirmed) |
| Trades Job Costing + Bookkeeping (QB alternative) | cash-flow-forecasting.md | UPDATE (job-costing-for-trades angle) |
| Cleaning Service (CleanDesk — flat-rate + photo) | cleaning-service-management.md | UPDATE (ZenMaid per-seat pain newly documented) |
| Lawn Care (LawnDesk — route opt + job costing) | landscaping-lawn-care.md | UPDATE (Service Autopilot 3-4× learning curve confirmed) |
| Small Fleet Trucking (HaulerHQ — phone ELD + IFTA) | small-fleet-tms.md | UPDATE (phone-based ELD + no-contract angle added) |
| Chiropractic Practice Mgmt (ChiroDesk — $79/mo) | chiropractic-ehr-billing.md | UPDATE ↑ score (clearinghouse-included angle from competitor analysis) |
| Vertical SaaS macro trend | General context | No file; reinforces all trades ideas |
| ServiceTitan pricing backlash | General context | reinforces hvac-small-shop-dispatch.md |
| AI Front Office for boring businesses | General context | reinforces ai-voice-answering-trades.md |
| Embedded Payments in vertical SaaS | General context | strategic; reinforces MRR paths across all ideas |
| Property Management AI + niche sub-verticals | property-management.md | UPDATE (AI adoption 20%→58%; marina niche called out) |
| AI Lawn Care automation (Deep Lawn, QuoteIQ) | landscaping-lawn-care.md | UPDATE (AI route opt + chemical tracking specifically named) |
| Trucking compliance (ELD mandate → fleet mgmt) | small-fleet-tms.md | UPDATE (FleetRabbit $3/vehicle confirms price sensitivity) |
| Franchise management (boring service franchises) | micro-franchise-ops.md | UPDATE (boring franchise segment fastest-growing) |
| Niche bookkeeping + vertical KPI dashboards | cash-flow-forecasting.md | UPDATE (Aced Accounting 7-vertical model validation) |
| Compliance tech (EPA/DOT/OSHA for trades) | compliance-licensing-trades.md | UPDATE (Jan 2026 regulations active) |

---

## Tier 1: Strong Opportunities (Score 75+)

### Junk Removal Load-Based Pricing + Dump Fee Tracker — Score: 97/105

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | $27B market, 8% CAGR; 20K+ independent operators; Jobber/HouseCall Pro prove FSM market exists; r/sweatystartup is the highest-signal channel for this exact business type |
| Competitor Weakness | 5/5 | Jobber/Housecall Pro built for plumbers, "retrofitted for hauling"; zero FSM tools support load-based pricing; all require workarounds like "Quarter Truck Load - $149" as service name |
| LTD Viability | 5/5 | $99 LTD; dump fee tracking ROI is immediate — one large mixed-load job (electronics + furniture + mattresses at different dump rates) recovers $50-150 in cost tracking alone |
| No Free Tier | 4/5 | Kickserv has a lower tier but zero junk-specific features; nothing purpose-built for this pricing model |
| Channel Access | 5/5 | r/sweatystartup (highest-signal community for junk removal), Junk Removal Authority Facebook community; one shared post can generate 100+ signups |
| Content Potential | 4/5 | "junk removal software", "load-based pricing app", "dump fee tracker" — moderate volume, near-zero competition |
| AppSumo Fit | 4/5 | sweatystartup community overlaps heavily with AppSumo buyer; small operator demographic is a natural fit |
| Review Potential | 4/5 | Junk removal operators are active online (r/sweatystartup, Facebook groups) and motivated to share tools that work |
| MRR Path | 4/5 | Daily operations tool; $39/mo unlimited trucks is clean and sticky; annual plan upgrade natural for established operators |
| Build Feasibility | 5/5 | Load-based pricing matrix + dump fee tracking + photo capture + basic route sequencing + Stripe = 3-4 week MVP; no complex regulatory integrations |
| Boring Business Bonus | 5/5 | Junk removal = the definition of boring business; deeply blue-collar, VC-ignored, huge r/sweatystartup following |

**Weighted Total: 97/105**

**Verdict**: BUILD  
**Decision Status**: NEW  
**Next Steps**: Build load-based pricing quote builder + dump fee tracking as core MVP; post in r/sweatystartup for beta users; add before/after photo capture and route sequencing in Sprint 2  
**Risks**: (1) Jobber or HouseCall Pro could add load-based pricing as a feature; (2) dump facility API data not standardized — requires manual price entry per facility type; (3) operators may be too lean/busy to adopt new tools  
**Key Source Links**:
- https://smith.ai/blog/best-software-for-junk-removal-business
- https://www.method.me/resources/best-junk-removal-software/
- https://myquoteiq.com/top-8-softwares-for-junk-removal-in-2026/
- https://zenbooker.com/junk-removal-software
- https://myquoteiq.com/crm-for-junk-removal/

**Signal Frequency**: 1 mention, 1 day — **NEW**

---

### Small Marina Slip Assignment + Seasonal Storage Manager — Score: 89/105

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | 12K US private marinas; 60-70% are small independent ops; winter storage = 20-30% of annual revenue; industry surveys show 61% of small-to-mid marinas struggle with double bookings and delayed response |
| Competitor Weakness | 5/5 | DockMaster built for 200+ slip commercial marinas; Molo/Storable Marine mid-market with steep learning curve; literally nothing modern and affordable for 20-120 slip family operations |
| LTD Viability | 4/5 | $299 LTD; recovering even one lost winter storage payment (typically $500-1,500 per boat) more than justifies the purchase |
| No Free Tier | 5/5 | Nothing exists at small marina price point — not even inadequate free tools |
| Channel Access | 3/5 | NMMA (National Marine Manufacturers Association), state Marine Industries Associations, marina trade shows; less Reddit-accessible than trades communities |
| Content Potential | 3/5 | "marina management software", "slip lease management", "small marina software" — low volume, near-zero competition |
| AppSumo Fit | 3/5 | Marina operators are not typical AppSumo buyers; NMMA/MIA direct channel is better distribution |
| Review Potential | 3/5 | Smaller community but highly motivated users (seasonal billing errors = real revenue loss) |
| MRR Path | 5/5 | Annual slip leases + winter storage contracts + transient dock + work orders = multi-revenue-stream daily tool; high switching cost once lease data is in the system |
| Build Feasibility | 4/5 | Visual slip map + lease management + seasonal storage workflow + transient booking + work orders = 6-8 week MVP; complex domain but standard CRUD patterns |
| Boring Business Bonus | 5/5 | Small family marina = deeply boring, zero VC attention, highly seasonal but loyal customer base |

**Weighted Total: 89/105**

**Verdict**: BUILD  
**Decision Status**: NEW  
**Next Steps**: Interview 10 small marina operators via NMMA member directory; validate that seasonal storage billing is the highest-pain workflow; build visual slip map + annual lease management as MVP wedge  
**Risks**: (1) Geographic concentration — most marinas in coastal/lake states; limited inland market; (2) seasonal revenue means low months will test subscription churn; (3) boat specifications diversity (length, beam, draft) complicates slip matching  
**Key Source Links**:
- https://www.marinamatch.org/blog-detail/top-marina-management-software
- https://www.g2.com/categories/marina-management
- https://www.dockmaster.com/
- https://getmolo.com/
- https://slashdot.org/software/marina-management/

**Signal Frequency**: 1 mention, 1 day — **NEW** (reinforced by Trends Trend 5: "niche operating businesses like marinas" called out by analysts as massive white space)

---

### Dry Cleaner Garment Photo Intake + SMS Ready-Notification — Score: 87/105

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 4/5 | 22K dry cleaning establishments in the US; CleanCloud $89/mo proves market; average 50-100 orders/day per location |
| Competitor Weakness | 5/5 | Zero affordable tools have garment photo intake workflow — this is genuinely unaddressed; CleanCloud, Quick Dry Cleaning, SMRT Systems all miss it; garment disputes are the #1 pain point |
| LTD Viability | 5/5 | $59 LTD for single location; one resolved garment dispute (avg $80-200 value) pays for LTD immediately; ROI story is crystal clear |
| No Free Tier | 4/5 | Geelus $9/mo exists but caps SMS automation; nothing free with photo intake capability |
| Channel Access | 3/5 | Drycleaning & Laundry Institute (DLI) association, regional associations, Podium/CleanCloud user migration lists; less viral than trades communities |
| Content Potential | 3/5 | "dry cleaning software", "dry cleaner POS", "garment tracking app" — moderate competition |
| AppSumo Fit | 3/5 | Dry cleaners less AppSumo-native but DLI community is reachable; "replace $89/mo CleanCloud for $29/mo" narrative converts |
| Review Potential | 4/5 | Highly motivated to review if garment dispute protection delivers — operators track this closely |
| MRR Path | 4/5 | $29/mo flat unlimited orders = compelling and sticky; daily operational tool; pickup/delivery routing add-on creates natural upsell |
| Build Feasibility | 5/5 | Barcode scan → camera → order record + auto-SMS notification = 2-3 week MVP; no complex regulatory integrations |
| Boring Business Bonus | 5/5 | Dry cleaning = perfectly boring, family-operated, VC-ignored, high daily operational need |

**Weighted Total: 87/105**

**Verdict**: BUILD  
**Decision Status**: NEW  
**Next Steps**: Build garment photo intake workflow (scan tag → camera → attach to order) + auto-SMS "order ready" notification as MVP; reach DLI members via association newsletter advertising  
**Risks**: (1) CleanCloud or Quick Dry could add garment photo feature relatively easily; (2) dry cleaner owners are less tech-savvy than average — adoption requires very simple UX; (3) multi-location operators may require more complex pricing  
**Key Source Links**:
- https://geelus.com/low-cost-pos-for-dry-cleaning-the-most-affordable-solution-in-the-usa/
- https://www.capterra.com/dry-cleaning-software/
- https://myuniclean.com/best-software-for-dry-cleaning-laundry-business-owners/
- https://zipdo.co/best/dry-cleaning-software/
- https://www.podium.com/article/best-software-for-dry-cleaner-business/

**Signal Frequency**: 1 mention, 1 day — **NEW**

---

### Bounce House & Party Rental Same-Day Route + Equipment Safety Log — Score: 82/105

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 4/5 | 15-20K party rental companies in the US; $6B+ bounce house market; InflatableOffice proves market; APRA association with active member community |
| Competitor Weakness | 4/5 | InflatableOffice too complex for small operators; PartyCenter has "dated UI" per multiple reviews; no tool combines same-day logistics routing with equipment safety inspection log |
| LTD Viability | 4/5 | $99 LTD; documented safety inspections alone reduce commercial liability insurance premiums 5-10%; single year of savings pays for LTD |
| No Free Tier | 4/5 | Booqable has simple rental management but no route optimization or safety log; nothing purpose-built with both features |
| Channel Access | 4/5 | Facebook Groups (Bounce House Business Owners 30K+ members), APRA community; active social media sharing of tools in this community |
| Content Potential | 3/5 | "bounce house software", "party rental management", "inflatable rental software" — low-medium competition |
| AppSumo Fit | 3/5 | Bounce house operators occasionally on AppSumo; community sales through APRA and FB groups is primary channel |
| Review Potential | 3/5 | Will review if insurance/routing saves real money; motivated by insurance premium reduction story |
| MRR Path | 4/5 | $49-79/mo for year-round subscription; safety log is ongoing compliance requirement; seasonal peak doesn't prevent off-season retention |
| Build Feasibility | 4/5 | Booking calendar + unit availability + logistics planner (drag-drop delivery sequence) + post-rental inspection form + damage photo = 4-5 week MVP |
| Boring Business Bonus | 5/5 | Bounce house rental = peak weekend boring business; zero VC attention; highly localized and unsexy |

**Weighted Total: 82/105**

**Verdict**: BUILD  
**Decision Status**: NEW  
**Next Steps**: Validate with 5-10 bounce house operators on whether insurance documentation is primary pain or same-day routing; build booking calendar + unit availability + basic inspection form as MVP; post in Bounce House Business Owners FB group  
**Risks**: (1) InflatableOffice could rebuild for small operators; (2) highly seasonal business = natural churn periods in off-season; (3) weather-dependent revenue creates unpredictable cash flow for subscribers  
**Key Source Links**:
- https://myquoteiq.com/top-8-softwares-for-party-rental-businesses-in-2026/
- https://spiderwebdev.com/blogs/news/whats-the-best-rental-software-platform/
- https://lendcontrol.com/industries/bounce-house-rental-software/
- https://eventrentalsystems.com/how-to-start-party-rental-business/
- https://www.bouncycastlenetwork.com/bounce-house-rental-software

**Signal Frequency**: 1 mention, 1 day — **NEW**

---

### Private Swim School Level Progression + Make-up Class Manager — Score: 78/105

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 4/5 | JackRabbit Swim proves market; 8-12K independent swim school operators; 700K+ children in lessons at any time; documented admin burden (2-3 hrs/week on makeup scheduling alone) |
| Competitor Weakness | 4/5 | JackRabbit complex and pricey; Activity Messenger $100+/mo; no platform automates make-up class booking (all manual); skill progression still paper-based |
| LTD Viability | 4/5 | $79 LTD for up to 50 students; seasonal billing model fits LTD well; "pause in off-season" feature directly addresses seasonal operator concern |
| No Free Tier | 4/5 | Nothing free with actual swim school features (enrollment, skill tracking, makeup booking) |
| Channel Access | 3/5 | USA Swimming, YMCA training networks, swim school owner Facebook groups; less viral than trades communities |
| Content Potential | 3/5 | "swim school software", "swim lesson management", "make-up class scheduler" — moderate competition |
| AppSumo Fit | 3/5 | Swim school operators less AppSumo-native; community sales through USA Swimming and parent networks better |
| Review Potential | 3/5 | Vocal community; will review if parent make-up booking automation delivers on promise |
| MRR Path | 4/5 | Seasonal enrollment cycles + skill progression = ongoing tool; parent portal creates direct user adoption; re-enrollment automation drives renewal |
| Build Feasibility | 4/5 | Online enrollment by level/session + skill checklist per student + parent self-serve make-up booking + instructor scheduling = achievable 4-5 week MVP |
| Boring Business Bonus | 4/5 | Independent swim school = unglamorous professional service; parent-operated small business; VC-ignored at this scale |

**Weighted Total: 78/105**

**Verdict**: BUILD  
**Decision Status**: NEW  
**Next Steps**: Validate make-up class automation as primary pain with 10 swim school operators; build enrollment + skill tracking + parent self-serve make-up booking MVP; test distribution through USA Swimming affiliate programs  
**Risks**: (1) YMCA and large aquatic centers use institutional software — independent operator TAM is smaller; (2) JackRabbit or Activity Messenger could add make-up booking automation; (3) strong seasonal concentration in summer means off-season retention requires careful product design  
**Key Source Links**:
- https://activitymessenger.com/blog/7-best-swim-school-software-in-depth-comparison/
- https://www.pembee.app/blog/best-swim-school-software
- https://www.classcardapp.com/blog/best-swim-school-management-software-for-2026
- https://www.iclasspro.com/swim-software-features
- https://www.jackrabbitclass.com/swim/

**Signal Frequency**: 1 mention, 1 day — **NEW**

---

### AI Dental Front Desk (Insurance Verification Automation) — Score: 75/105

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 4/5 | Avoca AI ($1B valuation) proves AI call answering works in adjacent trades; dental front desk staff cost $40-50K/yr with 40% annual turnover; insurance verification 2-3 hrs/day manually |
| Competitor Weakness | 4/5 | Avoca targets HVAC/plumbing at $2K/mo — dental is a parallel unserved market; no dental AI front desk at $200-400/mo; Zirco.ai just identified this with 30+ practices interviewed |
| LTD Viability | 3/5 | AI voice agents have ongoing compute costs; recurring SaaS is more natural than LTD; could offer $499-799 LTD for early adopters |
| No Free Tier | 4/5 | Nothing free or useful for dental insurance verification automation exists at SMB price point |
| Channel Access | 3/5 | Dental FB groups, state dental associations, dental practice management consultants; less viral than trades communities |
| Content Potential | 3/5 | "AI dental receptionist", "dental insurance verification software", "dental front desk automation" — moderate competition |
| AppSumo Fit | 3/5 | Dental practitioners buy AppSumo; AI receptionist has obvious ROI (replaces $40-50K/yr staff cost) |
| Review Potential | 4/5 | Dentists very active reviewers on Capterra/Dental Product Shopper; willing to share if tool genuinely saves staff hours |
| MRR Path | 4/5 | AI agents are inherently recurring (ongoing compute + call handling); $200-400/mo sticky for any practice that replaces manual verification |
| Build Feasibility | 3/5 | Voice AI API + insurance verification integration (Availity, eligibility APIs) + appointment booking = 6-8 week MVP; insurance API complexity adds scope |
| Boring Business Bonus | 4/5 | Dental practice = unsexy professional services, high willingness to pay, not VC-funded at this price tier |

**Weighted Total: 75/105**

**Verdict**: BUILD  
**Decision Status**: NEW  
**Next Steps**: Validate insurance verification workflow with 10 dental offices; test Availity/Change Healthcare APIs for eligibility checking; position as "$399/mo vs $40K/year staff" ROI story  
**Risks**: (1) Avoca AI, Weave, or Doctible could expand into dental AI front desk with larger budgets; (2) HIPAA compliance adds legal overhead for patient data handling; (3) insurance verification APIs have significant complexity and edge cases per payer  
**Key Source Links**:
- https://news.ycombinator.com/item?id=47385090
- https://zircoai.vercel.app
- https://www.prnewswire.com/news-releases/avoca-raises-125m-at-1b-valuation-to-power-americas-services-economy-with-ai-302753962.html
- https://www.avoca.ai/

**Signal Frequency**: 1 mention, 1 day — **NEW** (strongly validated by Avoca AI $1B market signal in adjacent trades)

---

## Tier 1 Updates: Existing Ideas Reinforced Today

### Tattoo Studio Management — Updated Score: 85/105 (was 83/105)

New signal adds multi-session piece tracker workflow detail (large pieces spanning 3-10 sessions over months), flash day management (design catalog + claimed/available status + deposit collection — zero current tool does this), integrated reference photo collection during booking, and InkDesk ($35/mo) confirmed as the only tattoo-specific tool but narrowly focused on inquiry management only. Flash day manager is a genuinely novel differentiator not previously captured.

**→ Signal History appended; see tattoo-studio-management.md**

---

### Machine Shop / Custom Fabrication Job Costing — Updated Score: 86/105 (was 84/105)

Today's signal broadens confirmed target market from CNC/machining shops to include: custom cabinet makers, metal fabricators, upholstery shops, sign makers, custom furniture makers — all with identical quote-to-job profitability gap. JobBOSS² pricing ($10K-20K+ base license) confirmed again. "Production management systems geared toward higher-volume shops are expensive and rarely applicable to small custom shops" — direct industry quote validating the dead zone.

**→ Signal History appended; see machine-shop-job-tracking.md**

---

### Chiropractic EHR + Billing — Updated Score: 85/105 (was 83/105)

Today's competitor analysis adds: clearinghouse-included angle at $79/mo (vs. ChiroFusion $129/mo + $60+/mo clearinghouse), patient recall automation (lapsed patient re-engagement via text/email), and confirmed ChiroTouch $650/mo pain for solo DCs. "Replace $650/mo ChiroTouch + $200-500/mo billing service + manual recall calls in one product at $79/mo" = stronger ROI story.

**→ Signal History appended; see chiropractic-ehr-billing.md**

---

### Cleaning Service Management — Score: 84/105 (stable)

New competitor data from today confirms: ZenMaid per-seat pricing ($14/seat at Pro tier) becomes expensive fast with part-time cleaners; no tool combines photo quality inspections with flat unlimited-user pricing; hybrid residential + commercial operator market fully confirmed. CleanDesk concept ($39/mo unlimited users, photo inspections, AI scheduling) matches existing file direction.

**→ Signal History appended; see cleaning-service-management.md**

---

### Landscaping & Lawn Care — Score: 99/105 (stable, top score)

Today adds confirmed competitor pain data: Service Autopilot takes "3-4× longer to learn than Jobber" — too complex for crews under 4; LMN real-time job costing behind paywall at Starter plan; Yardbook invoices go to spam causing slow collections. AI route optimization + chemical compliance tracking angle (Trends) reinforces the product direction. Already at top score.

**→ Signal History appended; see landscaping-lawn-care.md**

---

### Small Fleet TMS / Owner-Operator Trucking — Score: 87/105 (stable)

Today's competitor analysis adds: phone-based FMCSA-compliant ELD (no hardware required) as key differentiator; BigRoad Bluetooth connectivity issues + IFTA inaccuracies confirmed; Samsara 3-year contract forcing upfront payment for <11 vehicles confirmed; 4-tool fragmentation (BigRoad ELD + TruckLogics + fuel card + Excel IFTA) documented as daily workflow. HaulerHQ concept ($39/mo, phone ELD, no 3-year contract) adds sharpness.

**→ Signal History appended; see small-fleet-tms.md**

---

## Tier 2: Worth Exploring (Score 55-74)

### Franchise Operations Platform for Home Service Franchises — Score: 62/105

Market signal from Trends: boring service franchises (cleaning, HVAC, lawn care) are the fastest-growing franchise segment. Gap: royalty tracking + brand standards checklists + franchisee onboarding for home service franchises under $200/mo. Operandio targets restaurants; no tool focuses on cleaning/HVAC/lawn care franchise networks specifically.

*Deprioritized vs. Tier 1 new ideas due to: complex multi-stakeholder sales (franchisor AND franchisees), longer sales cycles, and lower LTD fit.*

---

## Tier 3: Pass / Monitor

| Idea | Score | Reason for Pass |
|------|-------|-----------------|
| AI bookkeeping for founders (LayerNext-style) | 48/105 | Too generic; founders will self-build; no boring business vertical focus; free products dominate |
| Embedded payments as standalone product | 38/105 | Not a standalone opportunity — bolt-on for existing vertical SaaS; Stripe/Payabli are the platforms |
| EU/AI Act compliance for SMBs | 45/105 | Not boring enough (B2B SaaS compliance); Vanta/Drata already in market; SMB awareness too low yet |
| India PG property management (HarGharPG) | 52/105 | Geographic concentration; UPI/WhatsApp integrations add complexity; US-focused pipeline has more traction |
| Craftplan / production management for bakeries | 55/105 | Open source kills LTD angle; generalist market without clear boring-business dominance; high vertical sprawl |

---

## Top 3 Recommendations

1. **Junk Removal Load-Based Pricing + Dump Fee Tracker** — Score: 97/105 — The best new idea today. Load-based pricing + dump fee tracking is a *completely unaddressed* feature gap in FSM software. r/sweatystartup distribution is proven. 3-4 week MVP. Source: https://www.method.me/resources/best-junk-removal-software/

2. **Small Marina Slip Assignment + Seasonal Storage Manager** — Score: 89/105 — Zero modern SaaS for 20-120 slip family marina operators. Winter storage billing is the highest-pain workflow. NMMA/MIA distribution channels. 6-8 week MVP. Source: https://www.dockmaster.com/ (validates larger market; small gap confirmed)

3. **Dry Cleaner Garment Photo Intake + SMS Ready-Notification** — Score: 87/105 — Garment photo intake is a genuinely zero-competition feature gap. $29/mo flat (vs CleanCloud $89+) with instant ROI from first resolved dispute. 2-3 week MVP is the fastest build on today's list. Source: https://geelus.com/low-cost-pos-for-dry-cleaning-the-most-affordable-solution-in-the-usa/
