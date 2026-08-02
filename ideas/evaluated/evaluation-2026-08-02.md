# Idea Evaluation — 2026-08-02

**Sources evaluated**: reddit-2026-08-02, hn-indiehackers-2026-08-02, competitor-analysis-2026-08-02, trends-2026-08-02, reddit-2026-08-01, hn-indiehackers-2026-08-01, competitor-analysis-2026-08-01, trends-2026-08-01
**Evaluator**: idea-evaluator agent
**New shortlisted files created**: small-gc-subcontractor-coordination.md, tattoo-studio-management.md
**Existing shortlisted files updated**: auto-repair-shop-management.md, commercial-janitorial-operations.md, landscaping-lawn-care.md, cleaning-service-management.md, invoice-auto-followup-trades.md, quote-followup-automation.md, vendor-compliance-tracker.md, construction-subcontractor-job-loop.md, multi-crew-service-dispatcher.md, cleaning-quoting-calculator.md, pest-control.md, smb-ai-compliance.md, bookkeeping-accounting.md, ai-answering-dispatch-trades.md, micro-manufacturer-production.md, field-service-management.md

---

## Today's Theme

**Double signal day** — two full days of raw data (Aug 1 + Aug 2) converge on four dominant themes:

1. **Construction coordination is the highest-urgency underserved niche.** The competitor analysis gave "Small GC Subcontractor Coordination" a 90/105 internal score — the single highest new idea this week. The pain is documented across 6+ review sites: Procore is priced for $10M+ GCs, nobody owns the lien waiver + COI + bid board + draw request workflow for the $500K–$5M GC. This is a genuinely new shortlisted idea.

2. **Auto repair and janitorial software gaps are now deeply validated.** Both received rich, independent competitor analysis in both the Aug 1 and Aug 2 scans. Auto repair has a $39→$179/mo price dead zone with 30K+ shops in it. Janitorial is uniquely broken — Swept (the category leader) literally has no invoicing, so every customer uses two tools.

3. **Speed-to-lead and invoice recovery keep appearing across all four sources.** Reddit 92/100 pain signals, HN validation, Avoca's $1B valuation — all point to the same insight: trades businesses lose jobs and revenue not from bad service, but from slow follow-up. Three existing ideas (invoice-auto-followup, quote-followup, ai-answering-dispatch) are all continuously reconfirmed.

4. **An entirely unexpected niche appeared from HN: tattoo studios.** 21,000+ US studios, $3B industry, zero purpose-built software — everybody running on Instagram DMs and Venmo. Strong build feasibility, clear channel access (tattoo conventions + Facebook groups), and a community that actively buys tools. New shortlisted file created.

---

## Tier 1: Strong Opportunities (Score 75+)

---

### 1. Small GC Subcontractor Coordination ("SubStack") — Score: 88/105 — NEW

| Criterion | Score | Weight | Weighted | Notes |
|-----------|-------|--------|----------|-------|
| Market Validation | 5/5 | 3× | 15 | 400K+ GC firms in US, "still the industry standard in 2026" to coordinate via spreadsheets + group texts |
| Competitor Weakness | 5/5 | 2× | 10 | Procore prohibitive ($375+/mo), Knowify missing CPM scheduling, no one owns lien waiver + COI + bid tracking for small GCs |
| LTD Viability | 4/5 | 2× | 8 | $99 (5 projects) / $149 (15 projects) LTD — ROI story: one missed COI = $50K+ liability |
| No Free Tier | 4/5 | 1× | 4 | No affordable competitor; Procore has no free entry |
| Channel Access | 4/5 | 2× | 8 | r/construction, r/GeneralContractor, Facebook "General Contractors of America", AGC chapters |
| Content Potential | 4/5 | 1× | 4 | "subcontractor coordination software," "lien waiver tracking," "COI management for small GC" |
| AppSumo Fit | 4/5 | 2× | 8 | Compliance ROI story is clear — "one incident pays for it"; construction community active on AppSumo |
| Review Potential | 3/5 | 1× | 3 | Contractors review on G2/Capterra when they find something that works |
| MRR Path | 4/5 | 3× | 12 | Per-project tiers, add document storage, QuickBooks sync upgrades |
| Build Feasibility | 3/5 | 2× | 6 | Multiple workflows (bid, contract, COI, lien, draw) but each is simple CRUD |
| Boring Business Bonus | 5/5 | 2× | 10 | Construction coordination — the definition of boring operational software |
| **Total** | | | **88/105** | |

**Verdict**: BUILD
**Decision Status**: NEW
**Next Steps**: Validate with 5 small GC interviews (target: $1-3M revenue GCs with 5-20 active subs). Build the lien waiver + COI tracker as the minimum wedge — it's the highest-pain single feature and forces daily use. Expand to bid board and draw requests in V2.
**Risks**:
1. Complex multi-party workflows (GC + subs both need to take action) — adoption depends on subs willingly uploading docs
2. Existing players (Procore, Knowify) could add a "light" tier; construction tech is well-funded
3. Build scope is broader than single-feature micro-SaaS — team coordination needed

**Key Source Links**:
- https://palcode.ai/blog/subcontractor-management-software
- https://www.permitflow.com/blog/subcontractor-management-software
- https://exayard.com/blog/subcontractor-management-software
- https://buildbite.com/insights/subcontractor-management-software
- https://solvpro.com/feeds/blog/construction-management-computer-programs
- https://www.softwareadvice.com/construction/subcontractor-software-comparison/

**Signal Frequency**: 1st appearance — strong from competitor analysis (Aug 2026)

---

### 2. Commercial Janitorial All-in-One Operations Platform — Score: 91/105 — EXISTING UPDATE

*(See `commercial-janitorial-operations.md` — created 2026-08-01 at 90/105)*

Today's competitor analysis confirms and strengthens the gap:
- **Swept (the market leader for commercial cleaning) has NO invoicing** — every customer must run a separate billing tool. This is a rare case where the #1 category tool is missing an entire functional area.
- **Janitorial Manager has opaque pricing** (requires custom quote for a SMB tool — red flag that drives SMB customers away)
- **No offline mode** across any platform (cleaners work in basements and facilities with no signal)
- **Client portal missing or basic** across all tools — commercial clients expect inspection logs and invoices online

Score update: 91/105 (+1 for stronger competitor evidence)

**Key Source Links**:
- https://learn.sweptworks.com/best-janitorial-commercial-cleaning-software
- https://www.capterra.com/p/133875/ZenMaid-Software/reviews/
- https://www.capterra.com/p/164100/Janitorial-Manager/
- https://www.estimatty.com/blog/housecall-pro-vs-jobber-vs-zenmaid

---

### 3. Auto Repair Shop Software (1-3 Bay Independents) — Score: 90/105 — EXISTING UPDATE

*(See `auto-repair-shop-management.md` — score 100/105, created 2026-04-16)*

Today's competitor analysis (Aug 2) adds rich detail to the price gap:
- **$39→$179/mo dead zone confirmed**: ARI ($39.99/mo) is too basic; Tekmetric ($179+/mo) has "labor guide full of holes" and requires Mitchell 1 separately (+$180/mo)
- **QuickBooks connector broken** on Tekmetric — requires paid middleware "The Back Office"
- **No multi-tech assignment on a single work order** in Shopmonkey
- **Abandonment pattern after 30 days**: onboarding support drops off, shops feel stuck
- **30,000+ independent shops** in the US "still on spreadsheets" — $5K–$15K/year in missed upsells per shop

Recommended concept: "ShopDesk" — $79/mo flat with PartsTech integration + native QuickBooks sync (no middleware), no annual contracts.

---

### 4. Lawn Care Small-Crew Route + Invoicing ("LawnPilot") — Score: 89/105 — EXISTING UPDATE

*(See `landscaping-lawn-care.md`)*

Today's competitor analysis (Aug 1+2) adds critical new angle:
- **Service Autopilot forced payment processor**: post-Xplor acquisition, SA forces its own payment processor — you can't bring Stripe or Square. Rate increases sneaking in without notice.
- **Price spike 25%+ in one year** post-acquisition — active, vocal dissatisfied customer base ready to switch NOW
- **Support wait times measured in days** (Capterra rating falling from 4.5 to 4.1)
- **LMN ($297+/mo) is expensive** but has the best production-rate estimating — no tool combines LMN's estimating with Jobber's clean UI + Stripe payment choice at an SMB price

Key differentiator confirmed: "Bring Your Own Payment Processor" (BYOP) as a direct attack on Service Autopilot's forced processor. This is a concrete, searchable complaint with active switchers.

---

### 5. Unpaid Invoice Chase / Dunning Automation for Trades — Score: 88/105 — EXISTING UPDATE

*(See `invoice-auto-followup-trades.md` — score 94/105, created 2026-07-13)*

Today's Reddit data (Aug 2) adds new evidence:
- **92/100 IdeaFast Pain Signal** from r/smallbusiness — multiple viral threads on unpaid invoices
- **$14K owed story** (thread: "customer owes me $14k and has stopped responding") — direct product demand
- **"I sued a customer for $15K, won in court but they still haven't paid"** — shows the severity and cost of the problem
- **Lien notice templates for contractors** — a specific feature need not yet captured in the existing shortlisted file; contractors want a legally formatted lien notice they can send before collections
- **Integration gap**: no field-service-specific dunning tool integrates with Jobber/Housecall Pro/ServiceTitan

New angle: lien notice templates + one-click "send to collections" flow for amounts under $10K.

---

### 6. Lead Response Automation / Speed-to-Lead for Service Businesses — Score: 83/105 — EXISTING UPDATE

*(See `ai-answering-dispatch-trades.md` and `local-service-marketing-automation.md`)*

Today's data adds new urgency evidence:
- **92/100 IdeaFast signal** for "lead management difficulties" in r/smallbusiness
- **92/100 signal** for "Speed-to-Lead" — "78% of leads go cold after 5 minutes without a response"
- **90/100 IdeaFast** for customer acquisition on small-business-owners scan
- Avoca's $1B valuation validates the core problem (missed calls = lost revenue) — but Avoca is enterprise; the SMB SMS auto-responder tier is wide open

Specific need: AI-powered SMS auto-responder trained on service business scenarios — not a generic chatbot, but something that asks 2-3 qualifying questions (service type, zip, timeline) and either books a callback or sends a quote link. Integrates with Google My Business, Angi, Thumbtack, Facebook Leads.

**Key Source Links**:
- https://www.reddit.com/r/sweatystartup/comments/1oex952/whats_your_system_for_responding_to_leads_fast_enough_that_they_dont_ghost_you/
- https://www.morningstar.com/news/pr-newswire/20260427ny43862/avoca-raises-125m-at-1b-valuation-to-power-americas-services-economy-with-ai

---

### 7. Pest Control Vertical SaaS (Technician-First) — Score: 88/105 — EXISTING UPDATE

*(See `pest-control.md`)*

HN discussion (448 pts, 182 comments) from Aug 1 adds rich detail from someone who worked as a technician:
- **PE consolidation (60% market)** is degrading quality at incumbents (PestPac, ServSuite) — creating classic "incumbent rot" opportunity
- **Technicians enter data while driving** (dangerous!) — hands-free voice input is a concrete unsolved problem
- **No smart trap/station monitoring dashboard** in any affordable platform
- **Lead cost ~$600/lead with only 20-25% conversion** — software that improves close rates has massive measurable ROI
- Independent operators squeezed by PE-owned chains = a motivated, reachable customer base

**Key Source Links**:
- https://news.ycombinator.com/item?id=47509571
- https://getlatka.com/companies/industries/i-pest-control-software

---

### 8. Tattoo Studio Management — Score: 85/105 — NEW

| Criterion | Score | Weight | Weighted | Notes |
|-----------|-------|--------|----------|-------|
| Market Validation | 4/5 | 3× | 12 | 21,000+ US studios, $3B industry, no industry-standard software identified |
| Competitor Weakness | 5/5 | 2× | 10 | Zero purpose-built software — Acuity and Calendly fail on deposits and consent forms |
| LTD Viability | 4/5 | 2× | 8 | $29-59/artist/mo → $199-299 LTD per studio, clean AppSumo story |
| No Free Tier | 5/5 | 1× | 5 | Nobody offering free tier — first day-1 payment likely |
| Channel Access | 4/5 | 2× | 8 | Tattoo conventions, Instagram, Facebook groups ("Tattoo Business Owners"), TikTok |
| Content Potential | 4/5 | 1× | 4 | "tattoo studio booking software," "tattoo artist booking app," "flash day booking" |
| AppSumo Fit | 3/5 | 2× | 6 | Niche but passionate community; smaller TAM but high conversion |
| Review Potential | 4/5 | 1× | 4 | Tattoo artists are community-oriented and active online reviewers |
| MRR Path | 4/5 | 3× | 12 | Per-artist pricing → studio tiers → multi-location chain management |
| Build Feasibility | 5/5 | 2× | 10 | Booking + deposit + digital consent forms = standard components, no exotic tech |
| Boring Business Bonus | 3/5 | 2× | 6 | Semi-creative industry; not as "boring" as trades, but has operational needs that are equally unsexy |
| **Total** | | | **85/105** | |

**Verdict**: BUILD
**Decision Status**: NEW
**Next Steps**: Validate by finding 5 tattoo studio owners through Instagram and asking about their current booking workflow. Look for the "flash day" booking problem specifically — it's unique to tattoo and not solved by any generic tool.
**Risks**:
1. TAM is smaller than trades (21K studios vs 200K+ contractors)
2. Studios are hobbyist-adjacent in perception — may not get AppSumo traction
3. Artist community needs individual subscriptions more than studio subscriptions — sales motion is different

**Key Source Links**:
- https://superframeworks.com/articles/untapped-underserved-micro-saas-niches
- r/TattooArtists (general community sentiment)

**Signal Frequency**: 1st appearance — IH research synthesis (Aug 2026)

---

### 9. Accounting Integration Middleware (Stripe→QB Reconciliation) — Score: 82/105 — EXISTING UPDATE

*(See `bookkeeping-accounting.md`)*

Today's data (Aug 2 trends) adds quantification:
- **4.0/5 severity** for "integration challenges" in accounting across 39,000+ software complaint analysis
- **AI can now parse and validate CSV reconciliation intelligently** — the technology enabler is now here
- **Synder and SaaSAnt are generic** — no validation-focused tool for bookkeepers managing 5-20 small business clients specifically
- Target buyer: bookkeepers saving 2+ hours/week = clear ROI; $299-499 LTD is a no-brainer
- High margin (70-90%) and sticky use once embedded in workflow

---

### 10. EU AI Act Compliance SMB Kit — Score: 81/105 — EXISTING UPDATE

*(See `smb-ai-compliance.md`)*

**URGENT TIMING SIGNAL**: August 2, 2026 is the enforcement date for the EU AI Act's concrete obligations. This is TODAY.

Key angles:
- **Article 4 requires documented AI literacy** for all deployers — no size exemption
- Most GDPR-first tools don't yet offer AI risk classification and Article 4 training documentation
- Enterprise tools are $500+/month; SMB market wide open at $49-99/month
- Demand will spike as first audits begin — this is the exact window to build and launch

The enforcement timing creates a rare urgency window for content marketing: "Your EU AI Act checklist — are you compliant today?"

---

### Existing Ideas with Strong Signal Confirmations (No Score Change)

| Idea | File | Current Score | Today's Signal |
|------|------|--------------|----------------|
| Quote Follow-Up Automation | quote-followup-automation.md | 95/105 | 92/100 Reddit signal, HN medium analysis confirmation |
| Cleaning Business Quote Calculator | cleaning-quoting-calculator.md | 95/105 | 5+ r/sweatystartup threads confirmed; post-construction angle re-confirmed |
| Construction Sub Job Loop | construction-subcontractor-job-loop.md | 92/105 | r/Construction, r/estimators, planajob.com all confirm; 700K+ specialty trade contractors in US |
| Multi-Crew Service Dispatcher | multi-crew-service-dispatcher.md | 91/105 | r/sweatystartup "managing 4 crews" thread; 90/100 IdeaFast signal |
| Vendor Compliance Tracker | vendor-compliance-tracker.md | 88/105 | r/smallbusiness direct product request thread ("how are you tracking vendor compliance?") — strong buying intent signal |
| Field Service Management All-Inclusive | field-service-management.md | 101/105 | QuoteIQ (new entrant) gaining traction via "all-inclusive flat fee" pricing — validates thesis; Jobber add-on stack math documented ($674/mo) |
| Cleaning Service Management | cleaning-service-management.md | 96/105 | ZenMaid phone support void + photo doc gap confirmed; CleanOps concept validated |
| AI Voice Answering for Trades | ai-voice-answering-trades.md | Score high | Avoca $1B valuation; $300-800 MRR/client at 80% margins; SMB tier wide open |
| Small-Batch Manufacturer Production | micro-manufacturer-production.md | Score high | Craftplan (HN 577 pts) is open-source/pre-revenue = SMB paid product gap; FDA compliance + wholesale angle new |
| Pest Control Vertical SaaS | pest-control.md | Score high | PE consolidation driving customer churn; voice CRM + smart monitoring gap confirmed |

---

## Tier 2: Worth Exploring (Score 55-74)

---

### Service Business Operational Burnout Hub — Score: 72/105

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 4/5 | 86/100 IdeaFast signal; 4 high-signal r/sweatystartup threads in one scan |
| Competitor Weakness | 3/5 | Many point solutions exist; FSMs cover pieces of this |
| LTD Viability | 4/5 | $79-99 LTD possible |
| No Free Tier | 4/5 | No unified ops hub exists at this price |
| Channel Access | 4/5 | r/sweatystartup is the ideal channel |
| Content Potential | 3/5 | Crowded SEO for "business operations" |
| AppSumo Fit | 3/5 | Less specific problem statement = harder to sell |
| Review Potential | 3/5 | Moderate |
| MRR Path | 4/5 | Clear recurring value |
| Build Feasibility | 4/5 | Modular: lead timer + invoice alert + crew check-in |
| Boring Business Bonus | 4/5 | Service businesses, trades |

**Verdict**: EXPLORE FURTHER — Likely overlaps with `multi-crew-service-dispatcher.md`. The "ops burnout hub" concept is compelling but may be better positioned as a specific feature addition to the existing multi-crew dispatcher idea rather than a standalone product. Validate whether the lead response timer + invoice alert + crew check-in combination is what owners actually want unified.

**Source Links**:
- https://www.reddit.com/r/sweatystartup/comments/1suslwc/the_part_of_running_a_service_business_nobody_prepares_you_for/
- https://www.reddit.com/r/sweatystartup/comments/1tuyibw/service_business_owners_what_is_your_system_for/

---

### Mobile Field Inspection App for Subcontractors — Score: 72/105

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 4/5 | 4.0/5 severity in 39K complaint analysis; subcontractors with 5-20 workers |
| Competitor Weakness | 3/5 | Procore and Buildertrend have inspection features; gap is mobile-first simplicity |
| LTD Viability | 4/5 | $299-499 LTD for 5-20 person shops |
| No Free Tier | 4/5 | Enterprise tools are priced out of reach |
| Channel Access | 3/5 | r/construction, Facebook GC groups |
| Content Potential | 3/5 | "field inspection app" is searchable |
| AppSumo Fit | 3/5 | Moderate |
| Review Potential | 3/5 | Contractors review when they find something that works |
| MRR Path | 3/5 | Per-user expansion |
| Build Feasibility | 5/5 | GPS photo + form + PDF export = 2-3 week MVP |
| Boring Business Bonus | 4/5 | Construction inspection |

**Verdict**: EXPLORE FURTHER — GPS-tagged photo + form + PDF export with QR-code job assignment is a well-defined scope. May overlap with `contractor-job-documentation.md`. The "no login required for field workers" angle (QR code) is a genuine differentiator worth validating.

---

### Client No-Show / Appointment Reminder with Deposit Capture — Score: 65/105

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 3/5 | 60/100 IdeaFast signal — below threshold |
| Competitor Weakness | 3/5 | GReminders, SimplyBook.me exist; not trade-specific but functional |
| LTD Viability | 4/5 | $49 LTD for standalone tool |
| No Free Tier | 3/5 | Multiple free options exist (Google Calendar reminders) |
| Channel Access | 4/5 | Pet grooming, auto detailing communities are accessible |
| Content Potential | 3/5 | "appointment reminder for pet grooming" is searchable |
| AppSumo Fit | 3/5 | Moderate |
| Review Potential | 3/5 | Moderate |
| MRR Path | 3/5 | Monthly subscription $19/mo |
| Build Feasibility | 5/5 | SMS API + Stripe = well-understood |
| Boring Business Bonus | 3/5 | Pet grooming, auto detailing |

**Verdict**: EXPLORE FURTHER — See `booking-widget-no-show-reducer.md` (existing, strong score). The deposit-capture angle is the differentiator here. Lower signal strength (60/100) suggests this is a "nice to have" rather than a burning pain. Low priority given the existing coverage.

---

### AI Voice Agents for Trades (SMB Tier) — Score: 78/105 — EXISTING

*(See `ai-voice-answering-trades.md` — high score, well-covered)*

Avoca's $1B valuation (April 2026) is the strongest validation signal in this scan. The white space is clear: Avoca is enterprise, most alternatives are generic AI receptionists not trained on trade workflows. The $99-199/mo SMB tier targeting 1-5 truck shops is wide open. Built via Retell/Vapi + trade workflow templates in 3-6 weeks.

---

### Small Landlord OS (1-10 Units) — Score: 75/105 — EXISTING UPDATE

*(See `landlord-property-management-tax.md`)*

Multiple strong signals today:
- HN discussion (Ask HN: Why don't we pay rent online?) — "Less is more. Tenant, apartment number, payments, payments owed."
- Vibrantsnap April 2026: explicitly called out as $10K-$30K MRR opportunity
- AppFolio reviews confirm "expensive for small number of tenants"
- Shuk Rentals being called "best overall for 1-100 units" in 2026 — market is validating

Key update: free tier for under 10 units → paid at $19/mo for 10-50 units is the correct acquisition model. LTD at $99 for up to 50 units would sell well on AppSumo.

---

## Tier 3: Weak / Pass (Score <55)

| Idea | Reason for Pass |
|------|----------------|
| Multi-Trade Platform (ServiceTitan tier) | Build too large (6-10 wks), LTD fit low, Housecall Pro just launched trade-specific packages = market getting crowded at this tier |
| AI Estimating for Trade Suppliers | Rebar raised $14M Series A — space is being taken by funded competitor, too hard for bootstrapped team to compete on distributor relationships |
| AI Voice for Micro-Operators (1-van) | Avoca is winning, usage-based costs make LTD math hard, existing idea already covers this angle |
| ZenMaid Success Story (Residential Cleaning SaaS) | Market validation signal, not a product gap — ZenMaid already owns residential; our focus should be commercial janitorial (higher score) |
| TinySeed/Rob Walling Boring SaaS Meta-Signal | Useful market context signal, not a specific idea to build |
| Micro-SaaS Market Landscape Overview | Background research, not an actionable idea |

---

## Top 3 Recommendations

1. **Small GC Subcontractor Coordination ("SubStack")** — Score: 88/105 — Score: 88 — [NEW] The most underserved unaddressed niche found today. Lien waiver + COI tracking alone is worth $50K+ in liability protection, making the ROI story obvious. Start with the compliance tracking wedge, then add bid management. Source: https://palcode.ai/blog/subcontractor-management-software

2. **Commercial Janitorial All-in-One ("CleanOps")** — Score: 91/105 — [EXISTING, HIGH PRIORITY] Swept having no invoicing is a uniquely exploitable gap. Every Swept customer must run a second billing tool. "Swept + billing in one" is the pitch. High-value B2B contracts, strong AppSumo story. Source: https://learn.sweptworks.com/best-janitorial-commercial-cleaning-software

3. **Tattoo Studio Management** — Score: 85/105 — [NEW] Zero purpose-built software for 21K+ US studios doing $3B in revenue. Flash-day bookings, digital consent forms, and deposit enforcement are all unsolved. Community is online, reachable, and under-served. Fast build (3-4 weeks). Source: https://superframeworks.com/articles/untapped-underserved-micro-saas-niches

---

## Signal Trend Analysis

| Idea Category | 7-Day Signal Trend | Recommendation |
|--------------|-------------------|----------------|
| Field service / trades FSM | Stable (already deeply validated) | Build — stop researching |
| Construction subcontractor tools | **Increasing** (new niches appearing) | Explore SubStack concept |
| Cleaning / janitorial | Stable | Build commercial angle (CleanOps) |
| Invoice + quote follow-up | Stable (recurring) | Build — already shortlisted |
| AI voice / answering for trades | Stable (Avoca dominant) | Niche down to 1-van segment |
| Property management (small) | Stable | Build — already shortlisted |
| EU AI Act compliance | **Spike** (Aug 2 enforcement date) | 2-week content sprint |
| Tattoo studio | **New** (first appearance) | Validate with 5 interviews |
