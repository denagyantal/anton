# Idea Evaluation — 2026-10-15

**Sources**: hn-indiehackers-2026-10-15, reddit-2026-10-15, trends-2026-10-15, competitor-analysis-2026-10-15
**Evaluator**: Claude (idea-evaluator agent)
**Total ideas evaluated**: 34 (consolidated into 19 distinct concepts after deduplication)

---

## Tier 1: Strong Opportunities (Score 75+)

---

### Auto Repair Shop Management ("ShopPilot") — Score: 100/105
*Maps to: `auto-repair-shop-management.md` — update signal history*

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | 280K independent auto repair shops in US; Tekmetric/AutoLeap/Shopmonkey have hundreds of thousands of paying customers; G2 auto shop category active |
| Competitor Weakness | 5/5 | Tekmetric modular add-ons ($39-$345/mo extra), no free trial, no mobile for techs; AutoLeap annual contract + undisclosed setup fee; Shopmonkey $20/mo per extra user; every platform bundles SMS/DVI behind expensive tiers |
| LTD Viability | 5/5 | $79 LTD (1 shop) / $149 (3 bays) confirmed; no auto shop competitor on AppSumo today; prior field service LTDs sold 2K-8K codes |
| No Free Tier | 5/5 | Clear paid market; shops understand they need management software |
| Channel Access | 5/5 | r/MechanicAdvice (600K+), r/autorepair, r/smallbusiness; Facebook "Auto Repair Shop Owners" (50K+), "Independent Auto Repair Shops"; NAPA AutoCare forums |
| Content Potential | 5/5 | "Tekmetric alternative", "affordable auto repair software", "shop management for small shops" = high-volume SEO with active switching intent |
| AppSumo Fit | 5/5 | Zero shop management software on AppSumo today; price-sensitive operators; "stop paying $400/mo" hook is clear |
| Review Potential | 4/5 | Shop owners leave detailed G2/Capterra reviews; active community discussion on r/MechanicAdvice |
| MRR Path | 5/5 | $49-79/mo flat; offline-capable, sticky once jobs/customer history live; Shopmonkey 2.0 migration issues = live refugee wave |
| Build Feasibility | 5/5 | Repair order + DVI with photos + SMS + invoicing = well-understood stack; 3-5 week MVP |
| Boring Business Bonus | 5/5 | Independent auto repair = deeply boring blue-collar industry; VC-ignored; non-technical buyers |

**Total: 100/105**

**Verdict**: BUILD
**Decision Status**: EXISTING — update `auto-repair-shop-management.md`
**Next Steps**:
1. Lead with flat pricing and no annual contract — every competitor uses contracts or annual lock-in
2. Include DVI with photo/video push to customer phone from day one (this is what SMS-first looks like for shops)
3. Offline mode (Tekmetric's #1 failure: "if we lose internet we are down") = key differentiator
4. AppSumo launch at $79 LTD; "ex-Tekmetric/Shopmonkey" communities as warm audience
5. EV-specific DVI checklist = unoccupied product feature gap

**Risks**:
1. Tekmetric/AutoLeap are VC-backed and could respond quickly on pricing
2. Parts catalog integrations (NAPA, O'Reilly, PartsTech) add complexity
3. Multi-location shops need separate architecture decisions early

**Key Source Links**:
- https://garageauto.app/tekmetric-vs-shopmonkey-vs-autoleap-small-shop/
- https://ghlcarmechanicsnapshot.com/blog/tekmetric-vs-shopmonkey-vs-autoleap-vs-shop-ware/
- https://shoptechscore.com/tekmetric-review/
- https://www.g2.com/categories/auto-shop-management
- https://www.capterra.com/compare/169022-190952/Shopmonkey-vs-Tekmetric

**Signal Frequency**: 3 dedicated mentions across competitor analysis today — stable at maximum score (100/105 confirmed for 3rd consecutive week)

---

### Cleaning Service Management ("CleanBase") — Score: 99/105
*Maps to: `cleaning-service-management.md` — update signal history*

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | 1.1M cleaning businesses in US; ZenMaid $3M/yr ($250K MRR) bootstrapped 11 years = durable proof; Jobber/HCP/ZenMaid all have large paying customer bases |
| Competitor Weakness | 5/5 | Per-seat pricing punishes growth (Jobber $29/mo extra user, HCP $35/mo on MAX); recurring service plans locked to $329 MAX tier; no "proof-of-service" photos at entry tier; 656 G2 mentions of "missing features"; ZenMaid payment processing failures documented |
| LTD Viability | 5/5 | $69 LTD (up to 3 staff); cleaning business owners active AppSumo buyers; field service LTDs sell 3K-10K codes; "proof-of-service" is demonstrable for launch video |
| No Free Tier | 4/5 | ZenMaid $19 starter exists but limited; Connecteam free up to 10 but costs escalate; paid LTD still compelling |
| Channel Access | 5/5 | Facebook "Cleaning Business Owners Support Group" (120K+), "House Cleaning Business Owners" (85K+); r/CleaningBusiness; ARCSI association |
| Content Potential | 5/5 | "ZenMaid alternative", "cleaning business software", "proof of service cleaning" = active SEO with switching intent |
| AppSumo Fit | 5/5 | No direct cleaning-specific competitor on AppSumo; proof-of-service angle = strong AppSumo launch video hook |
| Review Potential | 4/5 | Cleaning business owners vocal on Google Reviews and FB groups; G2 cleaning software category active |
| MRR Path | 5/5 | $99/mo flat (unlimited cleaners); GPS clock-in → payroll bridge as upsell; ZenMaid price hikes = ongoing refugee wave |
| Build Feasibility | 4/5 | GPS clock-in, photo upload, invoice gen, scheduling = 5-7 weeks; payroll sync adds complexity |
| Boring Business Bonus | 5/5 | Residential/commercial cleaning = deeply boring blue-collar; VC-ignored; non-technical owners |

**Total: 99/105**

**Verdict**: BUILD
**Decision Status**: EXISTING — update `cleaning-service-management.md`
**Next Steps**:
1. Lead with the "proof pack" differentiator: GPS-stamped photos + timestamp + map pin shared automatically with client after each visit
2. Flat per-business pricing (never per-seat) as the anti-ZenMaid positioning
3. BlastoClean's community validation confirms "setup complexity" is the #1 barrier — design onboarding to get first quote sent in 5 minutes
4. AppSumo LTD at $69 (up to 3 staff) / $99 (up to 10 staff)
5. Build piece-rate payroll calculator (pay per room/per house) — confirmed unoccupied by all competitors

**Risks**:
1. ZenMaid could add flat pricing; Connecteam expanding cleaning workflows
2. BlastoClean (launched Oct 2026 with community traction) is a live early competitor in quoting niche
3. GPS geofencing in multi-unit buildings creates accuracy disputes

**Key Source Links**:
- https://www.leadduo.io/en/compare/servicehub/housecall-pro-vs-jobber-vs-zenmaid-vs-swept
- https://www.fieldvibe.com/articles/top-6-best-cleaning-business-software-in-2026/
- https://www.g2.com/categories/cleaning-services
- https://www.blastoclean.com/
- https://www.capterra.com/p/133875/ZenMaid-Software/reviews/

**Signal Frequency**: Dual-source today (competitor analysis + HN/IH); BlastoClean Oct 2026 launch confirms ongoing market timing; 15+ signal entries since June 2026 — strongest recurring signal in portfolio

---

### Landscaping / Lawn Care Management — Score: 99/105
*Maps to: `landscaping-lawn-care.md` — update signal history*

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | $130B landscaping industry; 600K+ businesses; Yardbook (YC W16) + Service Autopilot $499+/mo = market validated |
| Competitor Weakness | 5/5 | Yardbook route optimization "failed during testing"; invoices go to spam (#1 Capterra complaint); LMN $297+/mo with NO invoicing; Jobber route optimization gated at $139/mo tier |
| LTD Viability | 5/5 | $59-$99 LTD; seasonal operators prefer one-time pricing; LawnPro/Yardbook refugees are price-sensitive |
| No Free Tier | 4/5 | Yardbook free but unusable for growing operations; LawnPro $0-30 basic; paid tools clearly needed above ~5 clients |
| Channel Access | 5/5 | r/landscaping (200K+), r/lawncare (500K+), r/sweatystartup; Facebook lawn care groups; NALP association |
| Content Potential | 5/5 | "best lawn care software", "Yardbook alternative", "lawn care route optimization", "landscaping estimating app" = high search volume |
| AppSumo Fit | 5/5 | Lawn care software on AppSumo confirmed audience; owner-operators are deal-hunting; LTD strong fit for seasonal income |
| Review Potential | 4/5 | r/lawncare and r/landscaping are active review communities |
| MRR Path | 5/5 | $49/mo flat; seasonal billing pause/resume = loyalty feature; Service Autopilot post-Xplor switching wave ongoing |
| Build Feasibility | 4/5 | Route optimization + recurring billing + chemical log + QB sync = 5-7 weeks; satellite measurement API adds to MVP |
| Boring Business Bonus | 5/5 | Lawn care = quintessential "sweaty startup" boring business; VC-ignored; blue-collar buyers |

**Total: 99/105**

**Verdict**: BUILD
**Decision Status**: EXISTING — update `landscaping-lawn-care.md`
**Next Steps**:
1. Target the "I still use a spreadsheet I made five years ago" user — that's the specific segment to win first
2. Dead-simple estimate builder (enter dimensions + service type → calculates price using operator's production rates) as MVP wedge
3. Yardbook "invoices go to spam" is the single best migration hook — emphasize payment reliability
4. Route optimization at base price (vs. Jobber's $139/mo tier) = primary differentiator
5. Seasonal billing pause/resume = unoccupied feature at any sub-$50/mo price

**Risks**:
1. 3+ new entrants in October 2026 (Halden Pro, Bigzy, Spanstead Works, LawnBook) = intensifying competition
2. Deep Lawn (satellite AI measurement) and QuoteIQ entering quoting niche
3. Yardbook is free and "good enough" for many solo operators

**Key Source Links**:
- https://www.reddit.com/r/landscaping/comments/1vxjpwk/
- https://www.reddit.com/r/sweatystartup/comments/1fskgz8/
- https://capterra.com/p/207272/Yardbook
- https://capterra.com/p/105508/LawnPro/reviews

**Signal Frequency**: Single Reddit source today (consistent with daily confirmation); 20+ signal entries since March 2026 — most-tracked idea in portfolio

---

### Trades Follow-up & Review Automation ("CraftBoop + SMS") — Score: 98/105
*Maps to: `trades-follow-up-review-automation.md` — update signal history*

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | CraftBoop live at $29/mo (April 2026); STARSLIFT beta with paying users; HandyPay $1K MRR in 60 days via direct sales = THREE concurrent products validating same market |
| Competitor Weakness | 5/5 | CraftBoop email-only (no SMS); Birdeye/Podium $200-400/mo enterprise pricing; no tool combines SMS-first + Google Review direct-link + FSM job-completion webhook |
| LTD Viability | 5/5 | $59-$99 LTD; review automation is perennial AppSumo winner category; simple tool = easy to explain |
| No Free Tier | 4/5 | NiceJob $75/mo; CraftBoop $29/mo; market clearly pays |
| Channel Access | 5/5 | r/sweatystartup (active beta testers found here); every trade subreddit; STARSLIFT is already recruiting beta users here |
| Content Potential | 5/5 | "automated review request for service businesses", "Google review automation for contractors", "post-job follow-up tool" |
| AppSumo Fit | 5/5 | Review automation consistently top AppSumo category; SMS tool = demonstrable feature |
| Review Potential | 4/5 | Trades business owners very vocal about review tools; AppSumo itself is the review channel |
| MRR Path | 4/5 | $39-49/mo SMS-first version; bundle with FSM tools for higher ARPU; CraftBoop proves model |
| Build Feasibility | 5/5 | Twilio SMS + Jobber/HCP webhook + Google Review API = 2-3 week MVP; simplest build in portfolio |
| Boring Business Bonus | 4/5 | Service business operations = unglamorous small business tooling |

**Total: 98/105**

**Verdict**: BUILD
**Decision Status**: EXISTING — update `trades-follow-up-review-automation.md`
**Next Steps**:
1. SMS-first (not email-first like CraftBoop) — trades customers communicate by text; 5× open rate advantage
2. Google Review direct-link generation as core feature (not afterthought)
3. Jobber/Housecall Pro webhook on job completion = auto-trigger (no manual work for contractor)
4. Add "review gate" — internal thumbs before pushing to Google (customers not asked if unhappy)
5. AppSumo LTD at $59-79; "automated 5-star machine for your trades business" hook

**Risks**:
1. Three concurrent competitors (CraftBoop, STARSLIFT, OnToolsAI) already in market
2. Jobber/HCP could add SMS follow-up and kill the category
3. Google's API policies on review solicitation can change

**Key Source Links**:
- https://www.indiehackers.com/post/craftboop-built-automated-follow-ups-for-service-businesses-just-launched-looking-for-feedback-5aa58e1c39
- https://www.indiehackers.com/post/the-boring-way-we-reached-1k-mrr-in-less-than-60-days-61739ba3d9
- https://www.reddit.com/r/sweatystartup/comments/1jnveik/

**Signal Frequency**: Dual-source today (HN/IH + Reddit); THREE concurrent active products = strongest market timing signal in this batch; consistently in top signals since September 2026

---

### Septic / Grease Trap / Liquid Waste FSM — Score: 98/105
*Maps to: `septic-route-optimizer.md` — update signal history*

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | Solo dev confirmed $51K/mo MRR (no marketing); PumpDocket 2026 bootstrapped launch validates ongoing market; ServiceCore $54M investment = institutional validation |
| Competitor Weakness | 5/5 | PumpDocket $99-454/mo steep for 1-3 truck operators; Tank Track $149/mo with basic mobile UX; ServiceCore complex enterprise; none with AI manifest generation |
| LTD Viability | 4/5 | $249-299 LTD viable; "pays for itself with one recovered job"; compliance-critical but LTD at intro works |
| No Free Tier | 5/5 | Compliance-critical = operators must have software; no free option viable |
| Channel Access | 4/5 | State septic/pumping associations; county environmental health vendor lists; PSAI for portable sanitation |
| Content Potential | 5/5 | "septic pumping software", "grease trap service software", "liquid waste dispatch" = low competition, high intent |
| AppSumo Fit | 4/5 | Niche but compliance angle is demonstrable; "never miss a compliance manifest again" hook |
| Review Potential | 4/5 | Operators leave detailed reviews when compliance tools save them from fines |
| MRR Path | 5/5 | $79-149/mo sticky once compliance records and tank customer database loaded; quarterly grease trap service = recurring revenue model for operators |
| Build Feasibility | 4/5 | Dispatch + manifest gen + route sheets = 3-4 week MVP; county portal integrations add complexity |
| Boring Business Bonus | 5/5 | Septic pumping = most boring business in portfolio; VC-ignored; blue-collar operators |

**Total: 98/105**

**Verdict**: BUILD
**Decision Status**: EXISTING — update `septic-route-optimizer.md`
**Next Steps**:
1. AI-assisted compliance manifest generation = primary differentiator over PumpDocket
2. "Due-book" as the hero feature: mine old service records to send reminders recovering 3-5 year overdue appointments
3. Grease trap cleaning as expansion from septic — same compliance + routing pattern, restaurant market
4. Pricing at $249 LTD (pays for itself with one recovered appointment) vs $99-454/mo incumbents

**Risks**:
1. County environmental portal integrations vary wildly by state — fragmented API landscape
2. PumpDocket just launched with transparency and no-contract positioning — direct competition
3. Small market (28K septic companies) — need grease trap + portable sanitation adjacencies to reach scale

**Key Source Links**:
- https://www.pumpdocket.com
- https://tank-track.com
- https://www.guideflow.com/blog/septic-pumping-software
- https://www.guideflow.com/blog/grease-trap-software
- https://startupheist.com/housecall-pro-skipped-septic-thats-a-96k-mrr-opening

**Signal Frequency**: Single trends source today; consistent 10+ entries since June 2026; $51K/mo MRR proof unchanged

---

### Field Service Management ("FieldKit" / Micro-Trades) — Score: 97/105
*Maps to: `field-service-management.md` — update signal history*

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | FieldLedgr (Show HN validates market), ClientPing (active build-in-public), Breezy ($0→$250K ARR in 9 months), InstaBid (launched Jul 2026) = 4 concurrent indie builds validating same pain |
| Competitor Weakness | 5/5 | ServiceTitan moving upmarket; Jobber per-user pricing ($400+/mo at 5-person crew); HCP add-on creep; "a bus when we needed 4 different doors" = consistent sentiment |
| LTD Viability | 4/5 | $149 LTD for up to 5 users; prior Workiz deals sold 3K-8K units; field service is consistently top AppSumo vertical |
| No Free Tier | 5/5 | Clear paid market; FieldLedgr's free tier is PLG wedge not a free product |
| Channel Access | 5/5 | r/HVAC (140K+), r/Plumbing, r/pest_control, r/ContractorsUS; Facebook "HVAC Business Owners"; "Pest Control Business Owners Network" |
| Content Potential | 5/5 | "Jobber alternative", "ServiceTitan alternative small business", "HVAC scheduling app", "flat rate field service software" |
| AppSumo Fit | 5/5 | Field service consistently top AppSumo vertical; ServiceTitan Podium drop (Sept 2026) = live acquisition catalyst |
| Review Potential | 4/5 | FSM buyers are vocal on G2/Capterra; active switching behavior creates natural reviews |
| MRR Path | 4/5 | $59/mo flat; QBO sync + SMS = retention hooks; ServiceTitan exodus = ongoing |
| Build Feasibility | 4/5 | Scheduling + dispatch + mobile job cards + invoice + 2-way SMS + QBO sync = 4-6 weeks |
| Boring Business Bonus | 5/5 | HVAC/plumbing/pest control = deeply boring trades; VC-ignored at micro scale |

**Total: 97/105**

**Verdict**: BUILD
**Decision Status**: EXISTING — update `field-service-management.md`
**Next Steps**:
1. Breezy's playbook is the template: find the one workflow everyone apologizes for, model it precisely. For pest control it's treatment schedules; for HVAC it's maintenance plans
2. FieldLedgr's "free tier as wedge" shows PLG is viable — compete on mobile UX + faster invoicing
3. ClientPing's voice-to-invoice (say what you did, it creates the invoice) = compelling mobile feature
4. InstaBid's instant-price wizard is a lead-gen entry point — replicate for specific trade niches
5. Focus on 1-5 tech shops (FieldLedgr/ClientPing segment) rather than trying to serve 20-person crews

**Risks**:
1. Jobber and HCP are well-funded and actively adding features
2. FieldLedgr's "free" positioning could win the lowest-tier segment on price alone
3. Multiple concurrent indie builders in exact same space (ClientPing, Plummerly, FieldLedgr)

**Key Source Links**:
- https://news.ycombinator.com/item?id=47668698 (FieldLedgr Show HN)
- https://www.indiehackers.com/post/how-i-ended-up-building-clientping-Vbp1uNN8PkHcgblAW1iC
- https://www.silasreinagel.com/product/software-engineering/saas/vertical-saas/founding-engineer/2023/11/15/breezy-0-to-250k-arr-owning-the-manual-workflow/
- https://www.reddit.com/r/smallbusiness/comments/1rq6xu2/

**Signal Frequency**: Triple-source today (HN/IH + Reddit + trends); most-cited category this week; 20+ signal entries since February 2026

---

### Small Fleet Management ("FleetPocket") — Score: 95/105
*Maps to: `small-fleet-tms.md` — update signal history*

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | 2-4M US micro-fleet operators; Fleetio 4.6/5 G2 validates maintenance tracking market; Samsara/Verizon Connect = massive paying base |
| Competitor Weakness | 5/5 | Samsara 3-year mandatory contracts with $10K unauthorized auto-renewal documented; Verizon Connect "Stay away" top-voted comment; no integrated no-contract option under $25/mo total |
| LTD Viability | 4/5 | $89 LTD (up to 5 vehicles); "no contracts, no hardware required" hook is AppSumo-friendly |
| No Free Tier | 4/5 | FleetRabbit free up to 3 vehicles = low-end competition; paid market above 5 vehicles clear |
| Channel Access | 5/5 | r/smallbusiness, r/Plumbing, r/landscaping; Facebook "Small Trucking Company Owners" (45K+), "Owner Operator Truckers" (90K+) |
| Content Potential | 5/5 | "fleet management software no contract", "GPS tracking small business no contract", "vehicle maintenance app owner operator" |
| AppSumo Fit | 4/5 | Hardware complexity is demo hurdle; but no-contract hook is compelling |
| Review Potential | 4/5 | Fleet management tools generate detailed reviews; operators are vocal about contract horror stories |
| MRR Path | 5/5 | $19/mo for 1-5 vehicles; ELD decertification wave 2026 = forced switch event; maintenance tracking = sticky once service history loaded |
| Build Feasibility | 4/5 | Phone GPS mode (no hardware required) + OBD-II plug option + maintenance reminders + DVIR = 4-5 weeks |
| Boring Business Bonus | 5/5 | Small fleet operators (plumbers, roofers, delivery) = boring service businesses |

**Total: 95/105**

**Verdict**: BUILD
**Decision Status**: EXISTING — update `small-fleet-tms.md`
**Next Steps**:
1. Lead with "zero hardware required to start" — phone GPS mode as entry point; upgrade to $15 OBD-II plug for engine data
2. "Month-to-month, cancel anytime" is the entire pitch vs. Samsara/Verizon — say nothing else in ads
3. ELD decertification wave (GTS, UTRUCKIN, ELD365, IRONMAN forced off market in 2026) = acquisition window NOW
4. Target trucking/delivery operators hitting 5-truck scale who need basic GPS without a 3-year commitment
5. HOS alert integration (dispatcher notified when driver near hours limit) = differentiator for trucking micro-fleets

**Risks**:
1. GPS hardware profitability — software-only may be hard to monetize at $19/mo without device margin
2. FleetRabbit free tier competes for smallest operators
3. ELD compliance for trucking requires FMCSA certification — complex regulatory path

**Key Source Links**:
- https://airpinpoint.com/compare/fleetio-vs-samsara
- https://airpinpoint.com/compare/samsara-vs-verizon-connect
- https://fleetrabbit.com/industry/transportation-and-logistics/best-fleet-management-software-small-trucking-companies-2026
- https://www.dashdoc.com/en-us/blog/eld-compliance-software-guide

**Signal Frequency**: Dual-source today (competitor + Reddit); consistent 8+ signal entries since August 2026

---

### Legal Practice Management ("SoloDesk") — Score: 94/105
*Maps to: `legal-practice-management.md` — update signal history*

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | $3.14B legal PM market; 350K+ solo practitioners; Clio ($1.6B valuation), MyCase, PracticePanther all have large paying bases |
| Competitor Weakness | 5/5 | Clio EasyStart ($39) lacks client portal + e-signatures (need $139 Complete); MyCase moved trust reconciliation to $39/mo add-on; all platforms raised prices in 2025; per-user pricing punishes solos |
| LTD Viability | 4/5 | $99 LTD for 1 attorney + 3 staff; legal tech LTD is rare = novelty; AppSumo for lawyers documented audience |
| No Free Tier | 4/5 | CaseFox free tier but no IOLTA trust accounting; paid tools clearly needed for compliance |
| Channel Access | 4/5 | r/Lawyertalk, r/LawSchool; ABA Solosez listserv (13K+ members); state bar solo/small firm sections |
| Content Potential | 5/5 | "Clio alternative for solo attorneys", "legal practice management software", "IOLTA trust accounting software" = high-value SEO |
| AppSumo Fit | 3/5 | Attorney demographic buys AppSumo (documented); but legal tech skepticism of LTD needs addressing in copy |
| Review Potential | 4/5 | Attorneys review tools extensively on G2/Capterra/Trustpilot |
| MRR Path | 4/5 | $49/mo flat rate (1 firm, up to 3 users); IOLTA compliance = high retention; Clio betrayal events = ongoing |
| Build Feasibility | 3/5 | Trust accounting + IOLTA compliance + client portal + e-sign = 5-7 weeks; state-by-state variations add complexity |
| Boring Business Bonus | 4/5 | Solo law practice = unglamorous professional services; not a VC darling |

**Total: 94/105**

**Verdict**: BUILD
**Decision Status**: EXISTING — update `legal-practice-management.md`
**Next Steps**:
1. IOLTA trust accounting included at base price (not add-on) = primary differentiator; every competitor gates it at $89-149/mo
2. Flat-fee billing as first-class workflow (estate planning, immigration, criminal defense attorneys do flat-fee; all tools built for hourly)
3. Position as "Everything Clio charges extra for, included from day one"
4. MyCase's trust reconciliation add-on move = acute betrayal event — target these users now
5. AppSumo LTD at $99 (1 firm, unlimited staff up to 3) vs $1,188/year Clio

**Risks**:
1. Trust accounting compliance varies by state — requires careful legal review
2. Clio's ecosystem (250+ integrations) creates strong switching costs
3. Healthcare/legal LTD skepticism — "what happens if the company folds?" objection must be addressed

**Key Source Links**:
- https://biztechscout.com/en/article/best-legal-practice-management-software-2026
- https://www.capterra.com/p/105428/Clio/reviews/
- https://www.accountingatelier.com/blog/best-legal-billing-software
- https://ernietheattorney.net/appsumo-saves-lawyers-money/
- https://www.lawnext.com/2026/04/practicepanther-launches-pantheraccounting-plus-a-native-trust-and-operating-accounting-suite-for-law-firms.html

**Signal Frequency**: Single competitor source today; 25+ entries since March 2026; second most-tracked idea after landscaping

---

### Trade Safety / OSHA Compliance — Score: 92/105
*Maps to: `trade-safety-compliance.md` — update signal history*

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | OSHA issued 4,867 recordkeeping violations FY2023; $165,514 willful violation penalty in 2026; Field1st + Lumiform have paying customers validating market |
| Competitor Weakness | 4/5 | SafetyCulture/iAuditor generic ($24+/user/mo, not trade-specific); Field1st targets 50+ person companies; gobuid/SnapInspect mid-market; 5-20 person trades crew unserved |
| LTD Viability | 4/5 | $79-149 LTD ("pays for itself in 1 avoided $165K fine" = 1,000x+ ROI pitch); compliance tool LTD has trust hesitation |
| No Free Tier | 5/5 | OSHA compliance is legally required; operators must have digital records |
| Channel Access | 4/5 | r/Construction, r/Contractor, r/HVAC; Facebook construction contractor groups; AGC/NRCA association events |
| Content Potential | 5/5 | "OSHA compliance app for contractors", "construction safety checklist app", "digital OSHA log small contractor" = regulatory search intent |
| AppSumo Fit | 4/5 | "Pays for itself with one avoided fine" = clearest ROI pitch in portfolio for AppSumo copy |
| Review Potential | 4/5 | Contractors who avoid OSHA fines become advocates; compliance tools get enthusiastic reviews |
| MRR Path | 4/5 | $29-49/mo subscription; EU CPR mandate (Jan 2026) + California SB 440 = ongoing regulatory forcing function through 2027 |
| Build Feasibility | 5/5 | Digital safety checklist + incident log + OSHA recordkeeping = 2-3 week MVP; fastest build in portfolio |
| Boring Business Bonus | 5/5 | Construction safety compliance = deeply unglamorous; VC-ignored; blue-collar buyers |

**Total: 92/105**

**Verdict**: BUILD
**Decision Status**: EXISTING — update `trade-safety-compliance.md`
**Next Steps**:
1. Lead with the ROI math: $149 LTD vs $165,514 OSHA willful violation = 1,100x return
2. Digital inspection systems show 96% audit pass rate vs 73% for paper — use this stat in all copy
3. California SB 440/SB 61 and EU CPR are new forcing functions in 2026 — target these markets specifically
4. Target 5-15 person roofing/electrical/construction crew (unserved by Field1st or Lumiform's pricing)
5. MVP: daily safety checklist + photo hazard detection + incident log + OSHA 300 log = 2-3 weeks

**Risks**:
1. OSHA enforcement varies by administration — political risk to the forcing function
2. SafetyCulture/iAuditor generic version may be "good enough" for small contractors
3. Training/certification tracking adds significant complexity to MVP scope

**Key Source Links**:
- https://gobuid.com/en/blog/all-articles/digital-safety-inspection-forms-streamlining-construction-compliance-in-2026
- https://buildcheck.ai/insights-case-studies/ai-construction-compliance-2026-regulatory-tech-shift
- https://www.hdtech.com/blog/cybersecurity-for-construction-firms-the-2026-compliance-playbook
- https://field1st.com/software/safety-audit-software-for-osha-compliance/

**Signal Frequency**: Single trends source today; 6+ entries since mid-2026; regulatory pressure intensifying = score at 92/105

---

### Job Profitability Tracker for Trades — Score: 91/105
*Maps to: `job-profitability-tracker-trades.md` — update signal history*

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | "Anyone actually know their numbers or are we all just guessing?" (r/FieldService) = direct validation; ServiceTitan solves at $400+/mo; HCP Profit Tracker $149/mo; Sera $399/mo; clear paying market |
| Competitor Weakness | 5/5 | Jobber + QB don't show job profitability at any price; "every shop exports to a sheet on Sundays" = universal workaround; ServiceTitan solves but requires $400+/mo + long onboarding |
| LTD Viability | 4/5 | $99 LTD; "stop guessing which jobs are profitable" = AppSumo headline that writes itself |
| No Free Tier | 4/5 | No free job costing tool for field service exists at any quality level |
| Channel Access | 5/5 | r/FieldService, r/Contractor, r/HVAC; Facebook "HVAC Business Owners"; trade association events |
| Content Potential | 5/5 | "job costing for plumbers", "HVAC job profitability", "how to track profit per job contractor" = high-intent SEO |
| AppSumo Fit | 4/5 | "See which jobs are actually making you money" = strong AppSumo hook |
| Review Potential | 4/5 | Business owners who find profitable job types leave evangelical reviews |
| MRR Path | 5/5 | $29/mo flat; Jobber + QBO API integration makes it sticky; ServiceTitan alternative for cost-conscious shops |
| Build Feasibility | 4/5 | Job card + materials + labor → margin calc + QBO sync = 3-4 week MVP; QuoteIQ entering market validates build viability |
| Boring Business Bonus | 5/5 | HVAC/plumbing/trades accounting = deeply boring |

**Total: 91/105**

**Verdict**: BUILD
**Decision Status**: EXISTING — update `job-profitability-tracker-trades.md`
**Next Steps**:
1. Position as the lightweight layer that connects Jobber + QuickBooks for profit visibility (rather than replacing either)
2. Weekly email digest ("here's what your most and least profitable job types were this week") = habit-forming feature
3. Competitor QuoteIQ entering AI estimating niche — differentiate on job costing (retrospective) vs quoting (prospective)
4. Target service company owners at 5-20 tech scale specifically (too small for ServiceTitan, too big to wing it on spreadsheets)

**Risks**:
1. Already an overlapping concept with FSM ideas — could fold into FieldKit vs standalone product
2. Jobber/HCP could add basic job costing features
3. QBO API sync complexity is non-trivial to build correctly

**Key Source Links**:
- https://www.reddit.com/r/FieldService/comments/1tggzn6/
- https://www.reddit.com/r/Contractor/comments/1rli1ka/
- https://redwerk.com/blog/micro-saas-ideas-that-print-money/
- https://myquoteiq.com/

**Signal Frequency**: Dual-source today (Reddit + trends); 5+ entries since October 2026 — fast-rising idea

---

### AI Voice Receptionist for Trades — Score: 91/105
*Maps to: `ai-voice-receptionist-trades.md` — update signal history*

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | Avoca AI: $125M raised at $1B valuation (Kleiner Perkins, April 2026); 800+ customers; on track to book $1B in jobs through platform in 2026 = strongest institutional validation in portfolio |
| Competitor Weakness | 4/5 | Avoca targets $1K-3K/mo enterprise operators; sub-$99/mo for 1-5 tech solo shops wide open; Spanish-first multilingual AI = unserved segment |
| LTD Viability | 3/5 | $299-499 LTD for lightweight version viable; recurring fits better once operators see ROI |
| No Free Tier | 4/5 | Upfirst $24.95/mo, Rosie ~$49/mo = market clearly pays at entry level |
| Channel Access | 5/5 | r/HVAC, r/Plumbing, r/ContractorsUS; Facebook trades groups; IH ecosystem; Avoca refugee communities |
| Content Potential | 5/5 | "HVAC answering service software", "AI for plumbers", "missed call booking for contractors" = strong SEO |
| AppSumo Fit | 4/5 | "Lifetime AI receptionist credits" LTD viable; trades owners price-sensitive |
| Review Potential | 4/5 | When an AI recovers $1,500 missed job, owner leaves glowing review |
| MRR Path | 5/5 | $99/mo recurring; Dolfyn.ai's integration middleware angle = higher ARPU via per-integration seat pricing |
| Build Feasibility | 3/5 | VAPI/Bland.ai + Twilio + Jobber/HCP API = 3-4 week MVP; multilingual + deep FSM integration adds complexity |
| Boring Business Bonus | 5/5 | HVAC/plumbing/pest = deeply boring trades; AI solving boring problems = boring business bonus applies |

**Total: 91/105**

**Verdict**: BUILD
**Decision Status**: EXISTING — update `ai-voice-receptionist-trades.md`
**Next Steps**:
1. Position at $99/mo for 1-5 tech shops — explicitly NOT competing with Avoca's enterprise pricing
2. Spanish-first voice for Hispanic-owned trades = completely unserved segment (Dolfyn.ai doesn't do this)
3. Dolfyn.ai's insight: integration middleware first (trigger real workflows, not just transcription) — bolt AI voice on top
4. Rainslice.ai's "3 live CA cleaning companies on AI agents" suggests cleaning is the fastest vertical to validate
5. Sub-vertical focus: pick one trade (HVAC or cleaning or pest control) and build deeply specific voice flows

**Risks**:
1. Avoca/Probook are well-funded and could expand downmarket
2. Generic AI voice tools (Ruby, Numa) are cheap and improving
3. Operator trust in "AI on the phone" is still limited; ROI story must be crystal clear

**Key Source Links**:
- https://www.idlen.io/news/avoca-ai-1-billion-valuation-kleiner-perkins-services-economy-voice-agents-april-2026/
- https://contractortoolstack.com/software/avoca-ai/
- https://ai2.work/blog/avoca-raises-125m-to-bring-ai-agents-to-home-services
- https://rainslice.ai/
- https://dolfyn.ai/

**Signal Frequency**: Dual-source today (trends + HN/IH); Avoca $1B valuation is the biggest single market signal in this entire evaluation batch; 10+ entries since June 2026

---

### MTD Compliance for UK Tradespeople — Score: 86/105
*Maps to: `mtd-compliance-uk-trades.md` — update signal history*

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 4/5 | April 2026 MTD mandate live for £50K+ income; VoxaMTD (indie niche tool) launched confirming market; BHW case study: £2K MRR in 4 months from 60 customers confirms demand |
| Competitor Weakness | 4/5 | Sage/QuickBooks/Xero = overkill for sole trader tradesperson; "no one owns MTD for plumbers" as a brand position |
| LTD Viability | 5/5 | £79-£149 LTD confirmed; UK audience strong on AppSumo; tradespeople hate subscriptions |
| No Free Tier | 4/5 | Sage and Clear Books offer free MTD tier — significant competition at free end |
| Channel Access | 4/5 | NICEIC/Gas Safe Register communities; UK tradesperson forums; construction magazine content |
| Content Potential | 5/5 | "making tax digital for sole traders", "MTD software for tradespeople", "MTD for plumbers 2026" = strong regulatory search |
| AppSumo Fit | 4/5 | UK AppSumo audience active; LTD "lifetime compliance tool" is rare = novelty |
| Review Potential | 3/5 | UK trade community active but smaller than US equivalents |
| MRR Path | 3/5 | UK-only = smaller market; 2027 £30K threshold expansion broadens it; £15-49/mo recurring possible |
| Build Feasibility | 5/5 | HMRC has open API; bridging app MVP in 3-4 weeks; CIS (Construction Industry Scheme) support needed |
| Boring Business Bonus | 5/5 | UK sole trader tradesperson = deeply boring, non-technical, compliance-driven |

**Total: 86/105**

**Verdict**: BUILD
**Decision Status**: EXISTING — update `mtd-compliance-uk-trades.md`
**Next Steps**:
1. Lead with CIS (Construction Industry Scheme) support — UK construction sole traders have this additional complexity none of the generic tools handle well
2. "MTD for plumbers" as the brand position — nobody has claimed this despite the mandate being live
3. £79-£149 LTD with the 2027 threshold expansion as growth catalyst
4. Target via NICEIC/Gas Safe communities, Google for "making tax digital sole trader"

**Risks**:
1. UK-only limits TAM; Sage/Xero are free at basic tier = free competition
2. Soft landing for HMRC penalties in 2026/27 reduces urgency
3. HMRC API can change; compliance must be maintained ongoing

**Key Source Links**:
- https://fvaccounts.com/making-tax-digital-for-contractors-2026-compliance-guide/
- https://blog.voxamtd.com/blog/sole-trader-tax-compliance-making-tax-digital-2026
- https://en.wikipedia.org/wiki/Making_Tax_Digital
- https://voxamtd.com

**Signal Frequency**: Single trends source today; 3+ entries since March 2026; 2026/2027/2028 expanding threshold = recurring catalyst

---

### Prior Authorization Automation (PT / Chiro) — Score: 81/105
*Maps to: `prior-authorization-automation.md` — update signal history*

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | Solo founder documented $41K MRR in 14 months from PT-clinic PA automation = best-ever "someone already proved it" signal; Spry at 80% automation rate with paying customers |
| Competitor Weakness | 5/5 | Availity enterprise-only; Spry pricing unserved for 1-3 therapist practices; no indie SaaS for chiropractic PA automation |
| LTD Viability | 1/5 | Healthcare compliance + ongoing payer updates = LTD inappropriate; subscription required |
| No Free Tier | 5/5 | Practices pay without question for tools that save 10+ hours/week; clear willingness to pay |
| Channel Access | 3/5 | APTA/ACA specialty forums; LinkedIn; continuing education events; therapist Facebook groups |
| Content Potential | 4/5 | "prior authorization software for physical therapy", "chiropractic prior auth software" = low competition, high intent SEO |
| AppSumo Fit | 1/5 | Healthcare compliance + no LTD = wrong channel entirely |
| Review Potential | 4/5 | Practices that save 10-20 hrs/week on PA leave detailed reviews |
| MRR Path | 5/5 | $99-199/mo per practice; specialty expansion path; HIPAA compliance = switching costs |
| Build Feasibility | 2/5 | Payer-specific forms + status tracking + HIPAA + EHR integrations = 6-8 weeks minimum; healthcare domain knowledge required |
| Boring Business Bonus | 4/5 | Medical billing admin = deeply unglamorous professional services |

**Total: 81/105**

**Verdict**: EXPLORE FURTHER
**Decision Status**: EXISTING — update `prior-authorization-automation.md`
**Next Steps**:
1. UHC cutting 30% of prior auths by end-2026 = reduce but not eliminate the market; chiropractic/OT remain full-PA verticals
2. Find the PT founder at $41K MRR — reach out to understand approach and which payers they automated first
3. Chiropractic-specific as first expansion from PT (same model, different CPT codes, similar payer landscape)
4. Start with single payer + single specialty — UHC + PT clinic at $99/mo as MVT

**Risks**:
1. UHC eliminating 30% of prior auths reduces TAM
2. Healthcare domain expertise required — HIPAA + payer portal compliance adds build complexity
3. Market getting competitive: Spry, Waystar, Hellonote already active

**Key Source Links**:
- https://www.foundra.ai/key-reads/41k-mrr-boring-workflow-solo-vertical-ai-first-time-founder-2026
- https://www.sprypt.com/prior-authorization
- https://hellonote.com/blogs/unitedhealthcare-prior-authorization-therapy-2026/
- https://www.verifytx.com/best-prior-authorization-software/

**Signal Frequency**: Single trends source today; 3+ entries since May 2026; $41K MRR proof unchanged; score bumped to 81/105

---

### Moving Company CRM + Dispatch — Score: 80/105
*Maps to: `moving-company.md` — update signal history*

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 4/5 | 18K+ moving companies in US; SmartMoving/MoveJoy have paying customers; structured follow-up sequences raised booking rates from 28% to 41% documented |
| Competitor Weakness | 4/5 | CRM and dispatch are separate systems with manual handoff; SmartMoving/MoveJoy gaps in crew communication and interstate workflow; multiple failed custom development attempts |
| LTD Viability | 2/5 | Operations software needs ongoing updates/support; MRR model stronger |
| No Free Tier | 4/5 | No viable free option for moving company CRM+dispatch |
| Channel Access | 4/5 | Moving company owner forums; r/sweatystartup; Facebook moving business groups |
| Content Potential | 4/5 | "moving company software", "best CRM for moving companies" = moderate search volume |
| AppSumo Fit | 2/5 | Operations software without LTD = poor AppSumo fit |
| Review Potential | 4/5 | Moving company owners are vocal when software fails them; active review communities |
| MRR Path | 4/5 | $99/mo flat; lead-to-move pipeline is sticky; small niche but each customer high value |
| Build Feasibility | 3/5 | Lead capture → quote → booking → crew dispatch → move-day app → invoice = complex data model; 6-8 weeks |
| Boring Business Bonus | 4/5 | Moving companies = unglamorous service business |

**Total: 80/105**

**Verdict**: EXPLORE FURTHER
**Decision Status**: EXISTING — update `moving-company.md`
**Signal Frequency**: Single Reddit source today; stable at 80/105; MRR model is the right approach here

---

### **NEW: Dental AI Front Desk / Insurance Verification (Zirco.ai angle)** — Score: 77/105
*NEW — create `dental-ai-front-desk.md`*

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | 30+ dental practices in Zirco.ai discovery; $40-50K/yr front desk hire being replaced; Weave/NexHealth have paying customers validating market; dental AI receptionist market $6.26B→$21.15B by 2034 |
| Competitor Weakness | 5/5 | Weave/NexHealth focus on scheduling/comms — SKIP insurance verification complexity; Availity enterprise-only; no indie SaaS owns "dental insurance verification" standalone |
| LTD Viability | 1/5 | HIPAA + healthcare vertical + ongoing payer updates = LTD inappropriate; subscription required |
| No Free Tier | 5/5 | Dental practices readily pay for compliance/billing tools; insurance verification saves 2-3 hrs/day = clear ROI |
| Channel Access | 3/5 | Dental associations, Dentrix/Eaglesoft user groups, LinkedIn dental practice management; Facebook dental office manager groups |
| Content Potential | 4/5 | "dental insurance verification software", "dental front desk automation 2026", "Weave alternative dental" |
| AppSumo Fit | 1/5 | HIPAA healthcare + subscription model = wrong AppSumo channel |
| Review Potential | 4/5 | Dental practices leave detailed reviews; Dentrix/Eaglesoft user communities vocal |
| MRR Path | 5/5 | $199/mo per practice (insurance verification standalone) → expand to full front desk; HIPAA compliance creates switching friction; dental practices have 90%+ retention once core workflows adopted |
| Build Feasibility | 2/5 | Playwright automation + Availity integration + HIPAA compliance + Dentrix/Open Dental/Eaglesoft connectors = complex; 8-12 weeks; requires healthcare domain expertise |
| Boring Business Bonus | 5/5 | Dental front office operations = deeply unglamorous professional services; VC-ignored; non-technical buyers (office managers, not dentists) |

**Total: 77/105**

**Verdict**: EXPLORE FURTHER → BUILD if HIPAA compliance team available
**Decision Status**: NEW — create `dental-ai-front-desk.md`
**Next Steps**:
1. Start with insurance verification as a standalone product ($199/mo "insurance check automation") before full front desk replacement
2. Target practices already using Dentrix/Eaglesoft (largest market share) — build integration for these first
3. HIPAA compliance architecture from day 1 — this is the moat; forces proper infrastructure that deters fast-follow competitors
4. Validate: contact 10 dental office managers and ask how long insurance verification takes daily (target is confirming the 2-3 hrs/day figure)
5. Availity is the key integration — everything else follows from this

**Risks**:
1. HIPAA compliance adds significant infrastructure cost and legal overhead
2. Healthcare buyer sales cycle is long (6-12 months); revenue takes longer than typical SaaS
3. Zirco.ai (30+ dental practices in discovery) has first-mover advantage in this specific niche
4. Playwright web automation is fragile — insurance portal UI changes break flows

**Key Source Links**:
- https://news.ycombinator.com/item?id=47385090 (Zirco.ai Show HN)
- https://www.indiehackers.com/product/zirco-ai
- https://availity.com (insurance verification portal)

**Signal Frequency**: Single HN/IH source today — first identification; compelling Tier 1 due to MRR path and clear market gap

---

## Tier 2: Worth Exploring (Score 55-74)

---

### Service Booking API ("Merge.dev for Bookings") — Score: 61/105

*Infrastructure play: unified API layer over Jobber, Housecall Pro, ServiceM8, Mindbody, Vagaro*

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 4/5 | Active Ask HN thread; Dolfyn.ai + multiple AI builder pain points hitting same integration wall | 
| Competitor Weakness | 4/5 | No unified API layer exists; Plaid did this for banking at $13B; real gap |
| LTD Viability | 1/5 | Developer infrastructure = API pricing model, not LTD |
| No Free Tier | 4/5 | Developers pay for APIs; model proven |
| Channel Access | 3/5 | HN, ProductHunt, dev communities; B2B2B referral |
| Content Potential | 3/5 | Technical SEO for "service booking API integration" |
| AppSumo Fit | 1/5 | Developer infrastructure = wrong channel |
| Review Potential | 3/5 | Different review vectors (GitHub stars, HN upvotes) |
| MRR Path | 5/5 | B2B2B; $99-499/mo per dev team; sticky once integrated; massive potential scale |
| Build Feasibility | 2/5 | 6+ platform APIs, each different; 10-12 weeks; ongoing maintenance burden |
| Boring Business Bonus | 1/5 | Developer infrastructure = not boring business |

**Total: 61/105**

**Verdict**: EXPLORE FURTHER (high ceiling, wrong team profile for our playbook)
**Why not Tier 1**: No LTD/AppSumo fit; developer infrastructure requires different GTM and team DNA; not a "boring business" per our framework

**Key Source Links**:
- https://news.ycombinator.com/item?id=45754496

---

### AI-Powered Franchise Ops for Home Services — Score: 66/105

*PE roll-up management layer: consolidated reporting + AI brand audit + royalty tracking for 10-100 location home service franchisors*

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 4/5 | 22 PE roll-up platforms in pest control alone in 2026; $2.5M combined software revenue vs massive acquisition activity = undersoftwareized market |
| Competitor Weakness | 3/5 | FranConnect targets large franchisors; mid-market roll-ups (5-20 locations) gap is real |
| LTD Viability | 1/5 | Enterprise software; per-location pricing; no LTD feasible |
| No Free Tier | 5/5 | PE-backed operators have real budgets ($500-2000/mo) |
| Channel Access | 2/5 | Direct PE portfolio outreach; trade conferences; hard to reach via Reddit/AppSumo |
| Content Potential | 3/5 | "franchise management software home services" |
| AppSumo Fit | 1/5 | Enterprise B2B = wrong channel |
| Review Potential | 3/5 | G2 enterprise reviews; slower cycle |
| MRR Path | 5/5 | $500-2000/mo per portfolio; enterprise contracts = very high LTV |
| Build Feasibility | 2/5 | Multi-tenant, multi-location, PE-grade reporting; 8-12 weeks |
| Boring Business Bonus | 5/5 | PE-backed pest control/HVAC/cleaning roll-ups = deeply boring |

**Total: 66/105**

**Verdict**: EXPLORE FURTHER (enterprise motion required; wrong for our playbook but real opportunity)
**Why not Tier 1**: No AppSumo/LTD fit; direct enterprise sales model vs. our PLG motion; requires relationships in PE ecosystem

---

### AV/Event Gear Rental Operations (Rentman Model) — Score: 58/105

*Rentman proved $15-20M ARR bootstrapped. Adjacent opportunity: photo/video production gear rental or construction equipment rental for small operators using same pattern.*

Key signal: The playbook ("boring industry, patient operator, model the one workflow everyone apologizes for") is validated. Adjacent opportunity exists in industrial/construction equipment rental for sub-10-truck operators. Rentman itself is the incumbent in AV rental.

**Verdict**: PASS on AV rental (Rentman exists). EXPLORE adjacent: construction equipment rental software for small operators. Score: 58/105

---

## Tier 3: Weak / Pass (Score <55)

- **PE Roll-Up Dashboard (HN/IH)** — 48/105. Enterprise-only ($500-2000/mo per portfolio); direct enterprise sales model; no LTD/AppSumo fit; requires PE industry relationships; outside our 4-person team playbook. PASS.
- **Plummerly-style vertical-specific FSM** — 45/105. Pre-revenue 9+ months post-launch suggests plumbing-specific vs. generic FSM isn't compelling enough to command premium. Better to validate vertical niche with working product before betting on vertical-only branding. PASS — roll into field-service-management.md.

---

## Top 3 Recommendations

1. **Auto Repair Shop Management** (ShopPilot) — Score: 100/105 — The freshest competitor data today confirms no AppSumo competitor exists and Tekmetric/Shopmonkey users are actively angry about pricing and missing features. The Shopmonkey 2.0 botched migration is a live refugee event. Build signal: maximum confidence.
   - Key source: https://garageauto.app/tekmetric-vs-shopmonkey-vs-autoleap-small-shop/

2. **Trades Follow-up & Review Automation** — Score: 98/105 — Today's data has THREE concurrent products in this space simultaneously (CraftBoop + STARSLIFT + HandyPay adjacent) — the clearest market timing signal in this entire batch. First-mover with SMS-first + Google Review integration + Jobber webhook wins this market.
   - Key source: https://www.indiehackers.com/post/craftboop-built-automated-follow-ups-for-service-businesses-just-launched-looking-for-feedback-5aa58e1c39

3. **AI Voice Receptionist for Trades** — Score: 91/105 — Avoca AI's $125M raise at $1B valuation (Kleiner Perkins, April 2026) is the biggest single market validation signal in this batch. Enterprise end validated; sub-$99/mo for 1-5 tech shops is wide open. Rainslice and Dolfyn.ai confirm adjacent builder activity. Spanish-first multilingual voice = unserved segment within the gap.
   - Key source: https://www.idlen.io/news/avoca-ai-1-billion-valuation-kleiner-perkins-services-economy-voice-agents-april-2026/
