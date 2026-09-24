# Idea Evaluation — 2026-09-24

**Sources**: Reddit Scanner, HN & Indie Hackers, Trend Spotter, Competitor Analysis
**Total raw ideas reviewed**: 33
**Evaluator**: Claude Code Agent
**Existing shortlisted ideas checked**: 100+

---

## Tier 1: Strong Opportunities (Score 75+)

---

### 1. Micro-FSM for 1–5 Truck HVAC/Plumbing Shops — Score: 94/105

*Maps to existing `electrical-contractor-software.md` — signal broadened to multi-trade*

| Criterion | Score | Notes |
|---|---|---|
| Market Validation | 5/5 | ServiceTitan IPO at $772M ARR / $78K avg contract proves massive market; Jobber, Housecall Pro, FieldEdge all profitable = willingness to pay confirmed |
| Competitor Weakness | 5/5 | Jobber price cliff (+205% at first tech hire); Housecall Pro support degradation documented; ST 5-tech minimum excludes solo shops entirely; CrewRoute emerging but no market awareness |
| LTD Viability | 4/5 | $149–249 one-time; trades community responds well to LTD; built-in flat-rate pricebook is a strong unlock trigger |
| No Free Tier | 4/5 | No serious free FSM with flat-rate pricebook for trades |
| Channel Access | 5/5 | r/hvacpeople, r/ProHVACR, r/MasterPlumber, r/electricians; "HVAC Business Owners" FB Group; YouTube trade channels with dedicated audiences |
| Content Potential | 4/5 | "ServiceTitan alternative", "HVAC software small business", "Jobber alternative for small shops" = high-intent search |
| AppSumo Fit | 4/5 | Field service tools historically strong on AppSumo; no FSM with built-in pricebook has launched there yet |
| Review Potential | 4/5 | Tradespeople are vocal in subreddits and FB groups; review naturally follows if tool saves admin time |
| MRR Path | 5/5 | Daily dispatch + invoicing = highest-retention SaaS category; $79–149/mo flat per shop |
| Build Feasibility | 3/5 | Schedule + dispatch + flat-rate pricebook + invoicing + QBO sync = 6–10 week MVP; pricebook data requires trade advisor |
| Boring Business Bonus | 5/5 | HVAC/plumbing/electrical = deeply boring; VCs focus on ST/Housecall at scale |

**Weighted Total: 94/105**

**Verdict**: BUILD
**Decision Status**: BUILDING — `electrical-contractor-software.md` covers the electrical slice; today's signals broaden to HVAC + plumbing. Same canonical file.
**Next Steps**:
1. Decide: broaden `electrical-contractor-software.md` to multi-trade OR create separate HVAC/plumbing file
2. Key differentiator: flat-rate pricebook pre-loaded per trade (HVAC tune-up, plumbing drain, electrical panel) = removes #1 onboarding blocker
3. Price: $79/mo (1 tech), $99/mo (up to 3), flat regardless of tech count
**Risks**:
1. Market perception of "another FSM" — must lead with pricebook + flat pricing story, not features
2. Build scope creep — keep MVP to: schedule → invoice → payment; pricebook is the wedge
3. FieldPulse and QuoteIQ both growing fast; window narrows as more VC money pours in
**Key Source Links**:
- https://www.reddit.com/r/hvacpeople/comments/1rv1xlf/service_titan_alternative_for_small_hvac_operation/
- https://fieldcamp.ai/reviews/servicetitan/
- https://fieldservicepro.io/blog/hvac-software-for-small-businesses/
- https://crewroute.app/resources/best/best-hvac-software-small-business/
- https://fieldcamp.ai/alternatives/servicetitan/
**Signal Frequency**: 4 simultaneous source types (Reddit, HN, Trends, Competitor Analysis) — strongest convergence of any idea this session

---

### 2. Maintenance Agreement Automation for Trades — Score: 91/105

*Maps to existing `subscription-maintenance-plans.md` (was 87/105 → updated to 91)*

| Criterion | Score | Notes |
|---|---|---|
| Market Validation | 4/5 | Deepsel launched Sept 2026 as dedicated maintenance agreement software — direct market validation; $225/yr average agreement × 300 agreements = $67.5K recurring revenue managed per shop |
| Competitor Weakness | 5/5 | Deepsel just entered with narrow scope; ServiceTitan maintenance module at $300–500/tech/mo; Jobber treats plans as basic recurring jobs (no equipment tracking, no renewal flow) |
| LTD Viability | 5/5 | $199–299 LTD with ROI story: "recover $20K/yr in uncollected agreement billing" — self-justifying price point |
| No Free Tier | 4/5 | No free maintenance plan management tools for trades |
| Channel Access | 4/5 | r/HVAC, r/Plumbing, pest control forums; HVAC School FB group; trade associations |
| Content Potential | 4/5 | "HVAC maintenance agreement software", "service contract billing HVAC", "recurring revenue HVAC business" |
| AppSumo Fit | 5/5 | "Build recurring revenue from your trade business" = compelling AppSumo narrative; LTD-to-MRR story-within-a-story |
| Review Potential | 3/5 | Moderate — HVAC owners review where ROI is clear |
| MRR Path | 4/5 | Per-shop subscription + payment processing fee revenue model; agreement tracking = high daily use |
| Build Feasibility | 5/5 | Agreement tracker + Stripe billing + renewal automation + scheduled visit calendar = 2–3 week MVP |
| Boring Business Bonus | 5/5 | HVAC maintenance plans = deeply boring, unglamorous |

**Weighted Total: 91/105**

**Verdict**: BUILD
**Decision Status**: BUILDING — see `subscription-maintenance-plans.md`; Deepsel launch confirms market timing is NOW
**Next Steps**:
1. Deepsel just launched (Sept 2026) — differentiate on: pest control/lawn care seasonal tracking (adjacent but underserved vs. HVAC focus)
2. Key differentiator: card-on-file auto-billing converts at 80–95%; shops leaving $20K/yr uncollected
3. White-label portal embed for shop websites (customer self-service signup)
**Risks**:
1. Deepsel is active competition — differentiate on adjacent markets or broader trade coverage
2. FSM platforms (Jobber, HCP) could add this as a standard feature
3. Service business owners may not prioritize building recurring revenue
**Key Source Links**:
- https://usedeepsel.com/maintenance-agreement-software/
- https://hvacpproducts.com/2026/09/deepsel-launches-maintenance-agreement-software-for-hvac-and-plumbing-contractors/
- https://www.servicetitan.com/blog/hvac-service-contracts
- https://myquoteiq.com/best-maintenance-plan-software-hvac-2026/
**Signal Frequency**: 4 sources over 6+ months; Deepsel Sept 2026 launch = market-timing confirmation

---

### 3. Auto Repair Shop Management (No-Contract, 1–3 Bay) — Score: 90/105

*New idea — see `auto-repair-shop.md`*

| Criterion | Score | Notes |
|---|---|---|
| Market Validation | 5/5 | 160,000+ independent US repair shops; Tekmetric $179–409/mo, Shopmonkey $125–499/mo all profitable; verified willingness to pay |
| Competitor Weakness | 5/5 | "$1,100/mo with add-ons" Tekmetric complaints documented; annual contract lock-in = #1 switching barrier; Shopmonkey proprietary payment processing at higher rates |
| LTD Viability | 4/5 | $149–249 one-time; "no contract" as primary hook resonates with LTD buyers who hate commitments |
| No Free Tier | 4/5 | ARI at $40/mo is cheapest; no full-feature free tier; clear paid market |
| Channel Access | 4/5 | r/MechanicAdvice, Diagnostic Network (diag.net), FB "Independent Auto Shop Owners" groups, NAPA AutoCare network |
| Content Potential | 4/5 | "auto repair shop software", "Tekmetric alternative", "Shopmonkey alternative", "no contract shop management" |
| AppSumo Fit | 4/5 | Auto shop software absent from AppSumo; "no contract + unlimited users" story maps perfectly to deal buyers |
| Review Potential | 4/5 | Auto shop owners are active reviewers on diag.net, Reddit, NAPA forums |
| MRR Path | 5/5 | Daily dispatch + repair orders + invoicing = high-frequency daily use; $89/mo flat unlimited users |
| Build Feasibility | 3/5 | Digital inspection + labor guide (MOTOR/ALLDATA API) + text-to-pay + parts ordering (PartsTech API) = 6–8 week MVP; API costs add ongoing expense |
| Boring Business Bonus | 4/5 | Independent auto repair shops = unglamorous; non-technical operators; VCs focus on marketplace plays (CarDash, YourMechanic) not VSaaS |

**Weighted Total: 90/105**

**Verdict**: BUILD
**Decision Status**: NEW
**Next Steps**:
1. Core differentiators: month-to-month only (no annual contracts), flat unlimited-user pricing, built-in text-to-pay
2. PartsTech integration for parts ordering = immediate ROI (shop saves time sourcing parts)
3. Target: shops escaping Tekmetric/Shop4D contracts as the migration moment
**Risks**:
1. MOTOR or ALLDATA labor guide license = $200–500+/mo ongoing cost; must factor into unit economics
2. PartsTech/integration dependencies add complexity and vendor lock-in risk
3. Existing players (ARI, Torque360) occupy $40–80/mo tier; must differentiate on specific features (text-to-pay, no contract)
**Key Source Links**:
- https://capterra.com/p/190952/Tekmetric/reviews/?page=2
- https://diag.net/msg/m79uf4yb3eb9qotjcphts1hcdr
- https://nextcarhub.com/auto-repair-shop-software-cost.html
- https://blog.torque360.co/auto-repair-software-pricing-2026/
- https://ari.app/
**Signal Frequency**: New idea — single-source competitor deep-dive; strong evidence base from verified customer reviews

---

### 4. Lawn Chemical Tracking + Route Software (SprayRoute) — Score: 88/105

*New idea — see `lawn-chemical-tracking-route.md`*

| Criterion | Score | Notes |
|---|---|---|
| Market Validation | 4/5 | RealGreen ($125–300/mo), Service Autopilot ($49+/mo), GorillaDesk ($49–99/mo) all prove willingness to pay; legal compliance requirement = inelastic demand |
| Competitor Weakness | 5/5 | Jobber explicitly lacks chemical tracking ("not EPA-compliant"); RealGreen "skyrocketing" pricing complaints; LawnPro billing bugs (billed wrong clients) = active churn event |
| LTD Viability | 4/5 | $99–199 one-time; compliance angle = "I must have this" rather than "I'd like this" = strong LTD conversion |
| No Free Tier | 4/5 | No free EPA-compliant chemical tracking tools |
| Channel Access | 4/5 | r/lawncare, LawnSite forums, Facebook "Lawn Care" groups, NALP associations |
| Content Potential | 4/5 | "lawn care chemical tracking software", "pesticide application records", "EPA lawn care compliance" |
| AppSumo Fit | 4/5 | Compliance tool narrative; no lawn treatment software has launched on AppSumo; $99–199 LTD in the "must-have" zone |
| Review Potential | 3/5 | Moderate; compliance-motivated buyers less likely to review on generic platforms |
| MRR Path | 4/5 | Legal compliance = ongoing record-keeping = high retention; auto-generated state compliance reports = stickiness |
| Build Feasibility | 4/5 | Chemical application log + GPS route optimization + recurring invoicing + QBO sync = 3–4 week MVP |
| Boring Business Bonus | 5/5 | Pesticide/herbicide lawn applicators = deeply boring; VCs ignore entirely |

**Weighted Total: 88/105**

**Verdict**: BUILD
**Decision Status**: NEW
**Next Steps**:
1. Core differentiator: auto-generated state compliance reports (required by most US states for pesticide applications) — this alone justifies the purchase price
2. Adjacent signal: general landscaping receipt tracking (paper receipts from crews for materials) = potential Phase 2 expansion
3. LawnPro is actively losing customers due to billing bugs — migration moment NOW
**Risks**:
1. Chemical tracking is a niche sub-segment of lawn care; must validate addressable market size more precisely
2. State pesticide application forms vary — maintaining compliance data per state has ongoing maintenance cost
3. GorillaDesk expanding beyond pest control could add lawn chemical tracking
**Key Source Links**:
- https://capterra.com/p/78106/Service-Assistant/reviews/
- https://lawncrewpro.com/software/jobber-alternatives/
- https://www.capterra.com/p/105508/LawnPro/reviews/
- https://gorilladesk.com/features/chemical-tracking-software/
- https://spraye.io/5-ways-spraye-lawn-care-software-simplifies-chemical-tracking/
- https://www.reddit.com/r/landscaping/comments/1rnawjv/how_are_you_tracking_weekly_maintenance_invoices/
**Signal Frequency**: Strong competitor + Reddit signals; first time appearing — compliance angle is validated

---

### 5. AI Voice Agents for Trades — Score: 87/105

*Maps to existing `ai-answering-dispatch-trades.md` (was 82/105 → updated to 87)*

| Criterion | Score | Notes |
|---|---|---|
| Market Validation | 5/5 | Avoca raised $125M at $1B valuation (April 2026); 8-figure ARR; on track to book $1B in jobs in 2026; Breezy 80K+ active users; ServiceAgent 7,600+ businesses = overwhelming market validation |
| Competitor Weakness | 4/5 | None integrate natively with FSM to auto-create jobs + update dispatch boards; Avoca enterprise-only; SMB (1–5 truck) gap remains open |
| LTD Viability | 3/5 | Usage-based harder as LTD; $299–499 capped-call LTD could work for skeptical trades owners |
| No Free Tier | 4/5 | All AI phone systems subscription; Rosie at $49/mo is floor |
| Channel Access | 5/5 | r/HVAC, r/sweatystartup, FB trade groups; universal pain across all trades |
| Content Potential | 4/5 | "AI answering service HVAC", "missed calls plumbing business", "AI dispatcher for contractors" |
| AppSumo Fit | 3/5 | Usage-based model harder to package; but ROI narrative overcomes resistance |
| Review Potential | 3/5 | Moderate — trades owners share wins in communities |
| MRR Path | 4/5 | Call volume = natural usage-based recurring; emergency dispatch upsell = premium tier |
| Build Feasibility | 3/5 | VAPI + Twilio + FSM webhooks = 4–6 weeks; multi-FSM integration = ongoing engineering |
| Boring Business Bonus | 4/5 | HVAC/trades = boring context |

**Weighted Total: 87/105**

**Verdict**: EXPLORE FURTHER — Avoca $1B confirms market is real but enterprise; SMB entry is the remaining gap
**Decision Status**: VALIDATING — see `ai-answering-dispatch-trades.md`
**Next Steps**:
1. Avoca $1B valuation cements the market — focus on the 1–5 truck shop that won't pay Avoca rates
2. Key white space: after-hours emergency triage + maintenance agreement renewal calls (voice agents targeting specific high-value workflows, not generic answering)
3. 12% adoption with 34% experimenting = explosive growth curve in 12–18 months
**Risks**:
1. Market may consolidate quickly as Avoca/Breezy scale down to SMB
2. Multi-FSM integration (Jobber/HCP/ServiceTitan) requires separate API work
3. AI accuracy at high stakes — misbooked emergency call = reputation damage
**Key Source Links**:
- https://fortune.com/2026/04/27/avoca-ai-agents-missed-calls-hvac-plumbing-roofing-kleiner-perkins-chen-shrivastava-braswell/
- https://www.leadtruffle.co/blog/best-ai-answering-services-contractors-2026/
- https://www.withallo.com/blog/ai-phone-answering-services-for-hvac
- https://www.servicetitan.com/guides/2026-ai-in-the-trades
**Signal Frequency**: Multi-source; Avoca $1B is strongest-ever external validation signal

---

### 6. Invoice Auto-Follow-Up for Trades — Score: 94/105

*Maps to existing `invoice-auto-followup-trades.md` — BUILDING — PRD complete*

| Criterion | Score | Notes |
|---|---|---|
| Market Validation | 5/5 | 34-day average collection cycle; Houzz 2025: automated follow-up collects 68% of overdue invoices before day 14; US Tech Automations reports 85% collection within 7 days after automation |
| Competitor Weakness | 4/5 | Jobber buries follow-up behind $199/mo Grow plan; FreshBooks/QB generic (not trades-specific); no standalone multi-channel (SMS+email) escalation tool |
| LTD Viability | 4/5 | $149–249 LTD; ROI story = "recover $47K in unpaid invoices" = self-justifying |
| No Free Tier | 4/5 | No free invoice automation for trades |
| Channel Access | 4/5 | r/Contractor, r/smallbusiness, FB trade groups; universal pain |
| Content Potential | 4/5 | "contractor invoice follow-up software", "HVAC billing automation", "auto invoice reminders contractors" |
| AppSumo Fit | 5/5 | ROI story is perfect AppSumo headline; trades category converts well |
| Review Potential | 3/5 | Moderate |
| MRR Path | 4/5 | Per-shop + per-FSM-integration = natural recurring |
| Build Feasibility | 5/5 | Webhook + Twilio SMS + email = 1–2 week MVP |
| Boring Business Bonus | 4/5 | Contractor billing = unglamorous |

**Weighted Total: 94/105**

**Verdict**: BUILD — PRD complete, in BMAD pipeline
**Decision Status**: BUILDING — PRD at `_bmad-output/planning-artifacts/prd-invoice-auto-followup-trades.md`
**Next Steps**: Architecture → Epics → Dev implementation in AutoMVP pipeline
**Signal Frequency**: Multi-source over multiple months; today's Trends source adds $20K average uncollected per shop as new quantification angle

---

### 7. Property Management for Small Landlords — Score: 100/105

*Maps to existing `property-management.md` — stable at maximum score*

| Criterion | Score | Notes |
|---|---|---|
| Market Validation | 5/5 | Stable — 20M+ individual US landlords; AppFolio/Buildium/TurboTenant all profitable; market undeniably proven |
| Competitor Weakness | 5/5 | Stable — AppFolio 200-unit minimum; Buildium hidden fees ($99 bank setup, per-EFT); TurboTenant 10-day ACH; Innago support failures; all confirmed again |
| LTD Viability | 5/5 | $79–149 LTD; first-mover on AppSumo (landlord software still absent) |
| No Free Tier | 3/5 | TurboTenant/Innago/Avail offer free tiers |
| Channel Access | 5/5 | BiggerPockets 2M+; r/realestateinvesting 500K+; r/landlord |
| Content Potential | 5/5 | "landlord software", "AppFolio alternative", "Buildium alternative" |
| AppSumo Fit | 5/5 | Real estate investors are deal-savvy buyers |
| Review Potential | 4/5 | Active community shares tools |
| MRR Path | 5/5 | Per-unit monthly or flat; portfolio growth = natural upsell |
| Build Feasibility | 4/5 | 4–6 week core MVP |
| Boring Business Bonus | 4/5 | Unglamorous professional service |

**Weighted Total: 100/105** (stable)

**Verdict**: BUILD
**Decision Status**: BUILDING — see `property-management.md`
**New Signals Today**: FixLog (competitor analysis) identifies maintenance-first angle as specific white space; Pickspace AI-native launch; Shuk Rentals $5/unit/mo as new pricing floor competitor
**Key Source Links (new)**:
- https://www.hemlane.com/resources/best-property-management-software-for-small-landlords/
- https://pickspace.com/blog/best-property-management-software-small-landlords
- https://www.shukrentals.com/learn/property-management-software-for-small-landlords
**Signal Frequency**: 50+ data points over 7 months; stable at maximum

---

### 8. Pest Control Vertical SaaS — Score: 80/105

*New idea — see `pest-control-software.md`*

| Criterion | Score | Notes |
|---|---|---|
| Market Validation | 5/5 | $2M ARR documented at existing pest control SaaS (HN thread); pen-and-paper still dominates = massive untapped market; 20,000+ US pest control companies |
| Competitor Weakness | 3/5 | "Decent, cheap, and ubiquitous" incumbent exists (FieldRoutes/PestPac); gap is specifically voice data entry for field techs + compliance reporting |
| LTD Viability | 3/5 | $59–99/seat; some LTD potential for owner-operators |
| No Free Tier | 4/5 | No free full-feature pest control software |
| Channel Access | 4/5 | r/pestcontrol, NPMA forums, FB "Pest Control Business Owners" groups |
| Content Potential | 4/5 | "pest control software", "pest control CRM", "field service pest control" |
| AppSumo Fit | 3/5 | Possible; pest control community is niche but passionate |
| Review Potential | 3/5 | Moderate review activity |
| MRR Path | 4/5 | Recurring service model = natural software MRR; quarterly treatment reminders = sticky |
| Build Feasibility | 3/5 | Voice data entry + treatment logs + compliance reports + scheduling = 4–6 week MVP |
| Boring Business Bonus | 5/5 | Pest control = deeply boring; VCs ignore |

**Weighted Total: 80/105**

**Verdict**: EXPLORE FURTHER
**Decision Status**: NEW
**Next Steps**:
1. Key differentiator: voice-to-work-order entry for techs who drive and type simultaneously (confirmed as #1 feature gap)
2. Compliance reporting for commercial food facility contracts (legally required, high-value accounts)
3. Validate: is the $2M ARR player beatable, or is this a market to observe vs. enter?
**Risks**:
1. Established incumbent ($2M ARR) = not a greenfield; must have clear differentiation
2. State pesticide record-keeping requirements vary; compliance data maintenance ongoing
3. Seasonal concentration of revenue (spring/summer heavy)
**Key Source Links**:
- https://news.ycombinator.com/item?id=47509571
- https://www.briostack.com/
**Signal Frequency**: First appearance — HN thread with deep operator discussion; single-source but high quality

---

### 9. Small-Batch Food Production Management — Score: 84/105

*Maps to existing `small-batch-food-production.md` (was 79/105 → updated to 84)*

| Criterion | Score | Notes |
|---|---|---|
| Market Validation | 4/5 | Craftplan HN #15 of 2026 (577 pts, 167 comments); open-source = proven demand without commercial model |
| Competitor Weakness | 5/5 | Zero affordable commercial tools; Craftplan unmonetized; enterprise MES $10K+/mo |
| LTD Viability | 4/5 | $99–199 LTD; compliance angle (FSMA 204) justifies higher price |
| No Free Tier | 4/5 | Craftplan terminal-based; no accessible free options |
| Channel Access | 4/5 | Cottage food Facebook groups, bakery forums, Etsy/Shopify seller communities |
| Content Potential | 4/5 | "bakery management software", "cottage food tracking", "food production compliance software" |
| AppSumo Fit | 3/5 | Food producers less likely on AppSumo; but Etsy/Shopify sellers are |
| Review Potential | 4/5 | Passionate community shares tools |
| MRR Path | 4/5 | Monthly per-facility; compliance updates create ongoing value |
| Build Feasibility | 4/5 | BOM + inventory + allergen tracking + batch planner = 4–5 week MVP |
| Boring Business Bonus | 5/5 | Micro-bakeries = deeply boring manufacturing |

**Weighted Total: 84/105**

**Verdict**: BUILD
**Decision Status**: VALIDATING — see `small-batch-food-production.md`
**New Angle Today**: FSMA 204 (FDA traceability rule) takes full effect in 2026 — lot traceability for food businesses is now a legal compliance trigger (business shutdowns for non-compliance). This converts "nice-to-have" to "must-have" for cottage food businesses scaling to commercial kitchens.
**Key Source Links**:
- https://news.ycombinator.com/item?id=46847690
- https://github.com/puemos/craftplan
**Signal Frequency**: Recurring HN signal + new FSMA 204 compliance angle = score upgrade

---

### 10. Moving Company Software — Score: 81/105

*Maps to existing `moving-company.md` — stable*

Today's Reddit signal (r/sweatystartup) confirms: SmartMoving/MoversTech/Supermove still missing crew-specific workflows; dispatch double-booking remains a recurring nightmare; $200–500/mo existing tools leave 1–3 truck operators underserved.

**Signal Frequency**: Stable — 3rd source confirmation; no score change

---

## Tier 2: Worth Exploring (Score 55–74)

### Auto Detailing CRM — Score: 73/105
Mobile detailers need vehicle profile CRM + booking + before/after photos + Stripe payments. QuoteIQ and Easy Auto Detailing exist but clunky. Strong community (r/AutoDetailing), good LTD fit ($59 solo). Score held back by small TAM and moderate evidence base. **Next steps**: validate channel size in FB auto detailing groups before building.

**Key Source Links**:
- https://myquoteiq.com/top-10-crms-for-mobile-detailing-businesses-in-2026/
- https://www.reddit.com/r/AutoDetailing

---

### Construction PM for Small GCs (Procore Alternative) — Score: 72/105
Clear pain ($10–25K/yr Procore, Excel-only alternative), huge market (millions of small GCs). Score held back by crowded mid-market (JobTread $200/mo, CoConstruct, Fieldwire, Buildertrend all exist). Less differentiated than trades-specific tools. **Pass unless unique angle identified** (e.g., change order automation only, or subcontractor-specific).

**Key Source Links**:
- https://www.reddit.com/r/Construction/comments/1rkvbu4/procore_but_for_small_gcs_subs/
- https://www.reddit.com/r/ConstructionManagers/comments/1lf6d28/

---

### Post-Job SMS Follow-Up for Service Businesses (CraftBoop angle) — Score: 70/105
CraftBoop hit $1K MRR in 60 days with zero ads. SMS (not email) follow-up for Google reviews + rebooking + referrals. Score held back by narrow scope (better as feature of FSM than standalone), and weak brand trust issue confirmed in community. **Better as add-on module** within a larger trade-ops tool.

**Key Source Links**:
- https://www.indiehackers.com/post/craftboop-built-automated-follow-ups-for-service-businesses-just-launched-looking-for-feedback-5aa58e1c39

---

### Trucking Dispatch + Invoice for Owner-Operators — Score: 66/105
ITS Dispatch has 50K+ users = market proven. Gap: no unified dispatch-to-invoice tool for micro fleets (1–5 trucks). Score held back by: existing competition (ITS Dispatch, Rigbooks, TruckerZoom), niche is trucking-specific requiring domain expertise, and some freight-related files already in shortlisted. **Recommend monitoring** rather than building; also see `freight-broker-crm.md`.

**Key Source Links**:
- https://www.torotms.com/blog/best-software-for-small-trucking-company
- https://pcssoft.com/blog/7-tms-alternatives/

---

### Landscaping Crew Receipt & Materials Tracking — Score: 65/105
Crews drowning in paper receipts for job materials; no tool captures field-level receipts-to-job-cost-to-invoice. Score held back: narrow scope (better as feature of a broader landscaping tool), and SprayRoute (Tier 1) addresses the broader lawn care opportunity. **Absorb into SprayRoute/lawn-care file as Phase 2 feature.**

**Key Source Links**:
- https://www.reddit.com/r/landscaping/comments/1rnawjv/how_are_you_tracking_weekly_maintenance_invoices/

---

### Dental Insurance Verification Automation (Zirco.ai) — Score: 63/105
2–3 hours/day on manual insurance verification per dental practice = real pain. HIPAA compliance and carrier API complexity add 18–24 months of build time. Pre-revenue (30+ practices in beta). Score held back by regulatory complexity and insufficient LTD viability (HIPAA SaaS needs SOC 2, BAAs, ongoing security audits). **High potential but wrong team fit** unless strong healthcare technical background.

**Key Source Links**:
- https://news.ycombinator.com/item?id=47385090

---

### Trades Compliance + Certification Tracking — Score: 62/105
Cert expiry alerts + license tracking + insurance certs for 2–15 tech shops. Real pain (techs lose certs, shops get fined). Score held back: niche feature that fits better as add-on to a larger FSM than standalone product. Many existing compliance platforms (SALUS, SafetyCulture) at mid-market. **Better as a feature add-on.**

---

## Tier 3: Weak / Pass (Score <55)

| Idea | Reason for Pass |
|---|---|
| QuickBooks Replacement for Trades | Massive incumbents (QBO $85–200/mo, Xero); accounting is a compliance-heavy, slow-switching category; not LTD-friendly |
| Voice-First Construction Comms (Conkoa AI) | Pre-revenue, limited traction (4 pts on HN); requires deep Procore/GC integration; translation feature is narrow |
| FleetFix Fleet Management | Free product with no business model; Fleetio/Samsara are defensible at SMB with VC backing |
| Verito Cloud Hosting for Tax Firms | Infrastructure product; ongoing hosting costs make LTD impossible; requires deep specialization |
| ZenMaid / Commercial Janitorial Clone | ZenMaid is category winner; commercial janitorial requires B2B sales complexity |
| SMB Platform Consolidation | Too broad; solved by consolidators (Homebase, Thryv); FranConnect covers franchise layer |
| Wholesale Distribution TUI Migration | Extremely complex legacy system replacement; 12+ month sales cycles; not LTD-friendly |
| Fake Review Defense (local businesses) | Too narrow; better as feature of existing reputation management; low MRR ceiling |
| Autonomous Local Business Diagnostic | 49 emails sent → 1 open → 0 sales; conceptually interesting but monetization model unproven |
| NexusBMS Commercial Building Automation | Hardware + SaaS hybrid; edge firmware required; not buildable in 4–6 weeks by generalist team |

---

## Top 3 Recommendations

1. **Auto Repair Shop Management (BayOS)** — Score: 90/105 — 160K+ independent shops with verified pain at $1,100/mo all-in Tekmetric costs; "no contract, flat pricing, unlimited users" = strong AppSumo story; auto shop software completely absent from AppSumo catalog; clear 6–8 week MVP path with text-to-pay + digital inspections. Source: https://capterra.com/p/190952/Tekmetric/reviews/

2. **Lawn Chemical Tracking (SprayRoute)** — Score: 88/105 — EPA compliance = inelastic demand (states require pesticide application records by law); Jobber explicitly lacks this feature; LawnPro billing bugs creating active churn moment; 50K–100K US chemical applicator businesses in the sweet spot; $99–199 LTD with compliance-driven ROI story. Source: https://capterra.com/p/78106/Service-Assistant/reviews/

3. **Micro-FSM for 1–5 Truck HVAC/Plumbing (TruckReady)** — Score: 94/105 — ServiceTitan IPO confirms massive willingness to pay; all 4 sources converge on this gap; no affordable flat-rate pricebook + dispatch tool exists for solo/small shops; Jobber's 205% price cliff is creating daily churn; built-in pricebook = strongest single differentiator. Source: https://www.reddit.com/r/hvacpeople/comments/1rv1xlf/

---

*Full shortlisted files updated or created: `auto-repair-shop.md` (new), `lawn-chemical-tracking-route.md` (new), `pest-control-software.md` (new), `electrical-contractor-software.md` (updated), `subscription-maintenance-plans.md` (updated), `ai-answering-dispatch-trades.md` (updated), `property-management.md` (updated), `small-batch-food-production.md` (updated), `moving-company.md` (updated), `invoice-auto-followup-trades.md` (updated)*
