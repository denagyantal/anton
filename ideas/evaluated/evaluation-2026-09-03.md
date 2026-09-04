# Idea Evaluation — 2026-09-03

**Sources**: reddit-2026-09-03, hn-indiehackers-2026-09-03, competitor-analysis-2026-09-03, trends-2026-09-03
**Evaluator**: Idea Evaluator Agent

---

## Deduplication Notes

Before scoring, cross-referenced all ideas against `ideas/shortlisted/`:

| Today's Idea | Existing File | Action |
|---|---|---|
| Micro-Landlord App / PM Portfolio Analytics | `property-management.md` (100/105) | UPDATE signal history |
| Local SEO Automation for Trades | `ai-local-seo-trades.md` (87/105) | UPDATE signal history |
| Small Manufacturing Shop ERP | `manufacturing-erp-sme.md` (80/105) | UPDATE with Bus Core angle |
| CNC Machine Shop Quoting | `machine-shop-job-tracking.md` (86/105) | UPDATE with Isonq angle |
| GC Project Phase Tracker | `contractor-job-documentation.md` (87/105) | UPDATE with phase-billing angle |
| Small Carrier TMS / Owner-Operator Dispatch | `small-carrier-tms.md` (existing) | UPDATE signal history |
| All remaining ideas | No match found | CREATE new files |

---

## Tier 1: Strong Opportunities (Score 75+)

---

### 1. Cleaning Service Micro-Crew App — Score: 97/105

| Criterion | Score | Weight | Weighted | Notes |
|-----------|-------|--------|----------|-------|
| Market Validation | 5/5 | 3x | 15 | ZenMaid $3M/yr bootstrapped proves market; Connecteam/Jobber explicitly overpriced for this segment |
| Competitor Weakness | 5/5 | 2x | 10 | Connecteam 3-subscription model is #1 pricing complaint; Jobber pricing cliff at 5 users; ZenMaid weak UX |
| LTD Viability | 5/5 | 2x | 10 | $59 LTD for up to 5 staff — compelling vs $500+/yr Jobber; flat-rate model is natural LTD |
| No Free Tier | 4/5 | 1x | 4 | Will pay; existing tools either free-with-gaps or $300+/mo |
| Channel Access | 5/5 | 2x | 10 | Large FB groups (Cleaning Business Owners, Maid Service Business Owners), r/housekeeping, ARCSI |
| Content Potential | 4/5 | 1x | 4 | "cleaning business software", "maid service scheduling app", "Jobber alternative cleaning" |
| AppSumo Fit | 5/5 | 2x | 10 | Very strong — flat vs per-user pricing, emotional resonance ($59 vs $500+/yr Jobber) |
| Review Potential | 4/5 | 1x | 4 | Engaged cleaning community; will review if workflow improved |
| MRR Path | 4/5 | 3x | 12 | Flat-rate MRR from day 1; team expansion natural upsell |
| Build Feasibility | 4/5 | 2x | 8 | Recurring booking + route opt + auto-charge; 4-5 week MVP |
| Boring Business Bonus | 5/5 | 2x | 10 | Cleaning services — deeply boring, loyal once adopted |

**Total: 97/105**

**Verdict**: BUILD
**Decision Status**: NEW
**Key Differentiators**: Flat $39/mo regardless of team size (not per-user), auto-charge on job completion (not invoice-then-chase), cleaning-workflow-specific checklists and supply tracking
**Next Steps**: Validate with 10 cleaning business owners in FB groups; build recurring booking + auto-charge core; launch $59 LTD on AppSumo
**Risks**: ZenMaid could improve UX; Jobber could add flat pricing; scheduling SaaS hosting costs eat LTD margin
**Key Source Links**:
- [ZenMaid $3M/yr founder story](https://www.indiehackers.com/post/tech/from-a-cleaning-side-hustle-to-a-3m-yr-saas-for-cleaning-services-suhsqkDZB1zIwRmXxrFm)
- [Cleaning Business Software 2026 - Connecteam](https://connecteam.com/cleaning-business-software-solutions/)
- [CleanerHQ analysis — "overkill and overpriced"](https://cleanerhq.com/best-cleaning-business-software/)
- [Best Recurring Billing for Cleaning](https://myquoteiq.com/best-recurring-billing-software-cleaning-businesses-2026/)
- [FieldVibe Top 6 Cleaning Software](https://www.fieldvibe.com/articles/top-6-best-cleaning-business-software-in-2026/)

**Signal Frequency**: First identified today — strong multi-source signal (Reddit cleaning threads, competitor analysis, ZenMaid IH story)

---

### 2. HVAC/Plumbing 2–10 Tech FSM (Flat-Rate + Reliable QB Sync) — Score: 95/105

| Criterion | Score | Weight | Weighted | Notes |
|-----------|-------|--------|----------|-------|
| Market Validation | 5/5 | 3x | 15 | ServiceTitan $35K first-year documented; Housecall Pro QB sync duplicates 60-70% transactions — both proven at scale |
| Competitor Weakness | 5/5 | 2x | 10 | HCP QB sync broken (60-70% duplicates vs Jobber's 10-15%); HCP Basic ($59) omits QB sync entirely; ServiceTitan "overkill for <15 techs" |
| LTD Viability | 4/5 | 2x | 8 | $89 (5 techs) / $149 (unlimited) LTD — compelling vs $300+/tech/mo ServiceTitan |
| No Free Tier | 5/5 | 1x | 5 | Willingness to pay proven — shops spend $300+/tech/mo on ServiceTitan |
| Channel Access | 5/5 | 2x | 10 | r/HVAC, r/plumbing, r/electricians, ACCA, PHCC, large trade Facebook groups |
| Content Potential | 4/5 | 1x | 4 | "ServiceTitan alternative", "Housecall Pro QuickBooks sync fix", "flat rate field service software" |
| AppSumo Fit | 4/5 | 2x | 8 | Flat pricing fits AppSumo; FSM is complex to demo but emotional purchase |
| Review Potential | 4/5 | 1x | 4 | Engaged trade community; will review if QB sync actually works |
| MRR Path | 5/5 | 3x | 15 | Ongoing scheduling + dispatch + invoicing = very sticky; natural MRR |
| Build Feasibility | 3/5 | 2x | 6 | Full FSM + reliable QB integration is complex; 6-8 week MVP minimum |
| Boring Business Bonus | 5/5 | 2x | 10 | HVAC, plumbing, electrical — deeply boring |

**Total: 95/105**

**Verdict**: BUILD
**Decision Status**: NEW
**Key Differentiators**: Flat pricing (not per-technician), QuickBooks sync that actually works (not 60-70% duplicates), set up in one day
**Next Steps**: Validate core QB sync pain first (survey HVAC owners in r/HVAC about their QB sync experience); build scheduling + dispatch + QB sync MVP; launch flat-rate trial
**Risks**: Full FSM build complexity is the biggest risk; QB API reliability depends on Intuit; FieldPulse/Workiz have closed the feature gap recently
**Key Source Links**:
- [Jobber vs Housecall Pro QuickBooks Sync](https://korekomfortsolutions.com/jobber-vs-housecall-pro-for-quickbooks-which-sync-actually-works/)
- [ServiceTitan Pricing 2026](https://tooleduppro.com/guides/servicetitan-pricing/)
- [Housecall Pro Review 2026](https://fieldservicecompare.com/articles/housecall-pro-review-2026/)
- [Top ServiceTitan Alternatives](https://projul.com/blog/best-servicetitan-alternatives/)

**Signal Frequency**: Recurring pattern across multiple weeks; confirmed today in both Reddit and competitor analysis

---

### 3. AI Invoice Auto-Followup for Trades (AR Automation) — Score: 89/105

| Criterion | Score | Weight | Weighted | Notes |
|-----------|-------|--------|----------|-------|
| Market Validation | 4/5 | 3x | 12 | Documented case: 71% payment within 18 days, DSO 43→19 days for HVAC; cost per invoice $20→<$3 with AI |
| Competitor Weakness | 4/5 | 2x | 8 | Quadient/Versapay priced for mid-market; no trades-first AR brand at SMB price ($49-149/mo) |
| LTD Viability | 4/5 | 2x | 8 | "Never chase an invoice again" — compelling LTD at $199-299; ROI pays back in one recovered invoice |
| No Free Tier | 5/5 | 1x | 5 | Immediate measurable ROI — will pay day 1 |
| Channel Access | 4/5 | 2x | 8 | r/HVAC, r/Plumbing, r/Contractor, trade association newsletters, Facebook groups |
| Content Potential | 4/5 | 1x | 4 | "stop chasing unpaid HVAC invoices", "auto follow up invoices plumbing business", "reduce AR days trades" |
| AppSumo Fit | 4/5 | 2x | 8 | Clear ROI, standalone tool, LTD narrative works well |
| Review Potential | 4/5 | 1x | 4 | Measurable DSO improvement drives enthusiastic reviews |
| MRR Path | 4/5 | 3x | 12 | Monthly subscription for ongoing automation; new invoices = ongoing value |
| Build Feasibility | 5/5 | 2x | 10 | QuickBooks API → Twilio sequences → payment links; 2-3 week MVP |
| Boring Business Bonus | 5/5 | 2x | 10 | HVAC, plumbing, electrical, roofing — deeply boring |

**Total: 89/105**

**Verdict**: BUILD
**Decision Status**: NEW
**Key Differentiators**: Standalone (doesn't replace FSM), QuickBooks/Xero/ServiceTitan API plug-in, AI-timed sequences (not fixed intervals), SMS-primary channel (trades read texts, not emails)
**Next Steps**: Build QuickBooks OAuth connection + overdue invoice pull + Twilio SMS sequence; test with 3-5 HVAC companies; track DSO change
**Risks**: QuickBooks webhook reliability; SMS deliverability if trades use business numbers (Twilio A2P 10DLC); InvoiceButler and AutomationLabz are early competitors
**Key Source Links**:
- [AI AR Automation Tools 2026 — InvoiceButler](https://www.invoicebutler.com/blog/ai-accounts-receivable-automation-tools)
- [Stop Slow-Paying Customers in HVAC 2026](https://ustechautomations.com/resources/blog/automate-stop-slowpaying-customers-in-hvac-2026)
- [HVAC/Plumbing AR automation stack](https://agent-finder.co/stack/hvac-plumbing)
- [AI Paraglide AR automation](https://www.paraglide.ai/blog/how-ai-agents-automate-accounts-receivable)

**Signal Frequency**: First identified today; confirmed across 3 sources (trends + competitor + Reddit complaints about chasing invoices)

---

### 4. AI Voice Receptionist for Single-Trade Micro-Shops — Score: 88/105

| Criterion | Score | Weight | Weighted | Notes |
|-----------|-------|--------|----------|-------|
| Market Validation | 4/5 | 3x | 12 | AnveVoice: 40% more bookings (dental); agency model validated at $300-800 MRR/client for HVAC/plumbing |
| Competitor Weakness | 4/5 | 2x | 8 | Ruby/Smith.ai $200-500/mo for humans; AI at $99-149/mo is 3-5x cheaper + 24/7 |
| LTD Viability | 3/5 | 2x | 6 | Voice infra has ongoing costs (Twilio); $199-299 "starter bundle" LTD possible |
| No Free Tier | 4/5 | 1x | 4 | Will pay — missed calls = lost jobs; ROI immediate |
| Channel Access | 4/5 | 2x | 8 | r/HVAC, r/Plumbing, trade FB groups, auto repair forums |
| Content Potential | 4/5 | 1x | 4 | "AI answering service for plumbers", "never miss a call HVAC", "24/7 receptionist trades" |
| AppSumo Fit | 3/5 | 2x | 6 | LTD structurally tricky with Twilio usage; but starter bundle concept works |
| Review Potential | 4/5 | 1x | 4 | ROI measurable (more booked jobs) → enthusiastic reviews |
| MRR Path | 5/5 | 3x | 15 | Usage-based MRR natural; seat/location expansion |
| Build Feasibility | 4/5 | 2x | 8 | Twilio Voice + Whisper + GPT-4o + booking API; 2-3 weeks for single-trade vertical |
| Boring Business Bonus | 5/5 | 2x | 10 | HVAC, plumbing, auto repair — deeply boring |

**Total: 88/105**

**Verdict**: BUILD (Niche to one trade — auto repair recommended for first vertical)
**Decision Status**: NEW
**Key Differentiators**: Vertical-specific pre-built question flows (auto repair: brake job pricing, oil change scheduling), integrates with Google Calendar/CRM, SMS fallback for missed connections, emergency vs. non-emergency triage
**Next Steps**: Pick one trade (auto repair — high FAQ volume); build Twilio Voice flow + GPT-4o intent detection; integrate Google Calendar API for booking; test with 5 shops
**Risks**: Twilio usage costs erode LTD margins; Probook ($40M) and Sophiie ($5M) validating same space from mid-market end; voice quality critical
**Key Source Links**:
- [AnveVoice founder story — 40% more bookings](https://www.indiehackers.com/post/built-an-ai-voice-receptionist-for-my-dads-dental-clinic-40-more-bookings-80e2c4a830)
- [AI voice agency model — $300-800 MRR/client](https://www.indiehackers.com/post/building-a-profitable-ai-voice-saas-agency-300-800-mrr-per-client-frAbgO1yQMfHOFFtY3gE)
- [Probook $40M raise — a16z + Sequoia](https://techfundingnews.com/built-by-a-tradesman-backed-by-a16z-and-sequoia-probook-raises-40m-to-reinvent-dispatch-for-americas-home-service-businesses/)
- [Sophiie AI $5M raise](https://lifestyle.harcourthealth.com/story/820941/sophiie-ai-raises-aud-5-million-seed-round-and-launches-ai-operating-system-for-trades-and-service-businesses/)

**Signal Frequency**: Multiple sources today; Probook/Sophiie raises confirm institutional momentum

---

### 5. Specialty Pest Control & Lawn Care Software — Score: 86/105

| Criterion | Score | Weight | Weighted | Notes |
|-----------|-------|--------|----------|-------|
| Market Validation | 4/5 | 3x | 12 | FieldRoutes/PestPac are paid incumbents; Briostack carving share; dedicated software market confirmed |
| Competitor Weakness | 4/5 | 2x | 8 | Incumbents legacy-coded, poor UX; Service Autopilot "buggy, poor support, steep learning curve" |
| LTD Viability | 4/5 | 2x | 8 | "Replaces FieldRoutes at 1/10th the cost" — strong LTD positioning; pest control operators prefer one-time |
| No Free Tier | 4/5 | 1x | 4 | Pest control operators pay; no good free alternative |
| Channel Access | 3/5 | 2x | 6 | r/PestControl, r/lawncare, Green Industry Pros forum, NPMA channels |
| Content Potential | 4/5 | 1x | 4 | "FieldRoutes alternative", "pest control scheduling software", "lawn care route optimization" |
| AppSumo Fit | 5/5 | 2x | 10 | AppSumo has ZERO pest control tools — first-mover advantage explicitly identified |
| Review Potential | 4/5 | 1x | 4 | Tight-knit industry community; referrals strong once established |
| MRR Path | 4/5 | 3x | 12 | Recurring route management = natural subscription; chemical compliance requires ongoing updates |
| Build Feasibility | 4/5 | 2x | 8 | Route + scheduling + compliance log + invoice; 4-5 weeks |
| Boring Business Bonus | 5/5 | 2x | 10 | Pest control — deeply boring, essential, non-glamorous |

**Total: 86/105**

**Verdict**: BUILD
**Decision Status**: NEW
**Key Differentiators**: AI-assisted route optimization + chemical/material cost tracking per job + built-in pesticide compliance log (EPA equivalent) + automatic re-service reminder sequences + integrated Google review requests — no single tool bundles all four at $79/mo
**Next Steps**: Survey pest control operators in NPMA forums; build route scheduling + compliance log core; target AppSumo as primary launch (zero competition there)
**Risks**: FieldRoutes/Briostack could add modern UX; compliance log requirements vary by state; smaller total addressable market than FSM
**Key Source Links**:
- [Best Pest Control Software 2026 — SafetyCulture](https://safetyculture.com/apps/best-pest-control-software/)
- [Pest Control & Lawn Care CRM — IntegrateIQ](https://integrateiq.com/blogs/top-crm-for-lawn-care-pest-control/)
- [Briostack blog — best pest control software](https://www.briostack.com/blog/best-pest-control-software)
- [Real Green exterior pest control](https://www.realgreen.com/industries/exterior-pest-control-software)

**Signal Frequency**: First identified today; confirmed across trends and competitor analysis

---

### 6. HVAC/Trades Analytics Layer (Plug Into Jobber/ServiceTitan) — Score: 85/105

| Criterion | Score | Weight | Weighted | Notes |
|-----------|-------|--------|----------|-------|
| Market Validation | 4/5 | 3x | 12 | Multiple Reddit threads: "Jobber reporting can't do profit per job type, tech utilization rates, seasonal trends"; AppFolio analog confirms pattern |
| Competitor Weakness | 4/5 | 2x | 8 | Jobber reporting basic; ServiceTitan analytics costs $300-600/mo minimum; everyone exports to Sheets |
| LTD Viability | 4/5 | 2x | 8 | Read-only analytics SaaS, low hosting costs; $79-99 LTD works well |
| No Free Tier | 4/5 | 1x | 4 | Clear ROI (stop spending 5 hrs/week in Google Sheets) — will pay |
| Channel Access | 4/5 | 2x | 8 | r/HVAC, r/smallbusiness, r/Contractor, HVAC Facebook groups; direct to Jobber users |
| Content Potential | 4/5 | 1x | 4 | "Jobber reporting alternative", "HVAC profit per job analytics", "field service business intelligence" |
| AppSumo Fit | 4/5 | 2x | 8 | Standalone tool, clear value, not tied to team size; natural LTD |
| Review Potential | 3/5 | 1x | 3 | Analytics tools get reviews; "saved me 5 hours/week" is a strong review hook |
| MRR Path | 4/5 | 3x | 12 | $29-49/mo analytics subscription; new integrations and dashboards justify ongoing billing |
| Build Feasibility | 4/5 | 2x | 8 | Read Jobber/HCP API → dashboard; no write operations = simpler; 3-4 weeks |
| Boring Business Bonus | 5/5 | 2x | 10 | HVAC, plumbing, electrical — deeply boring |

**Total: 85/105**

**Verdict**: BUILD
**Decision Status**: NEW
**Key Differentiators**: Read-only (no workflow replacement = lower switching cost), surfaces profit per job type + tech utilization + seasonal demand + customer LTV — the 4 specific metrics tradespeople export to Sheets manually
**Next Steps**: Build Jobber API integration; surface 4 core metrics in a dashboard; soft-launch to r/HVAC/r/smallbusiness; $29/mo or $79 LTD
**Risks**: Jobber could improve native reporting; analytics-only tools have limited stickiness; Jobber could revoke API access
**Key Source Links**:
- [Reddit: "I've tried 4 CRMs in 2 years..."](https://www.reddit.com/r/smallbusiness/comments/1rq6xu2/ive_tried_4_crms_in_2_years_and_they_all_feel.json)
- [Reddit CRM for trades](https://www.reddit.com/r/CRM/comments/1lja3yx/anyone_here_using_crm_tools_specifically_for/)

**Signal Frequency**: First identified today; specific complaint pattern well-documented across Reddit

---

### 7. Micro-Landlord App (1–20 Units) — Score: 85/105

*(Existing file: `property-management.md` — already at 100/105. New signal added to Signal History.)*

Today's new signals from competitor-analysis-2026-09-03:
- AppFolio hard 50-unit minimum ($200-250+/mo) confirmed
- DoorLoop missing features + payment issues (G2)
- Avail: no mobile app, hidden payment processing fees, slow deposits, no live support
- Buildium "missing features" and "limited customization" top complaint categories
- 1-5 rental units segment has no software built specifically for them — reiterated

**Verdict**: STABLE at BUILD — no score change

---

### 8. Independent Auto Repair Shop Management (1–4 Bay) — Score: 84/105

| Criterion | Score | Weight | Weighted | Notes |
|-----------|-------|--------|----------|-------|
| Market Validation | 4/5 | 3x | 12 | Mitchell1 $150-300+/mo (legacy); Shopmonkey $239-499/mo with documented complaints; Tekmetric $200-350/mo |
| Competitor Weakness | 5/5 | 2x | 10 | Mitchell1 no cloud sync; Shopmonkey multi-tab crashes; Tekmetric invoice totals obscure (caused billing errors); Shop Boss mobile crashes |
| LTD Viability | 4/5 | 2x | 8 | $79 LTD per location — replaces $2K+/yr Shopmonkey |
| No Free Tier | 4/5 | 1x | 4 | No good free alternative for shop management |
| Channel Access | 3/5 | 2x | 6 | r/MechanicAdvice, r/AutoMechanics, NAPA AutoCare forums, DRIVE Network FB groups |
| Content Potential | 4/5 | 1x | 4 | "Shopmonkey alternative", "auto repair shop management software cloud", "Mitchell1 replacement" |
| AppSumo Fit | 4/5 | 2x | 8 | "$79 once vs $2K+/year" story resonates strongly |
| Review Potential | 4/5 | 1x | 4 | Shop owners review software on Capterra/G2 actively |
| MRR Path | 4/5 | 3x | 12 | Ongoing parts integration updates + cloud access = sticky MRR |
| Build Feasibility | 3/5 | 2x | 6 | RO management + parts ordering + cloud = 6-8 week MVP |
| Boring Business Bonus | 5/5 | 2x | 10 | Auto repair shops — deeply boring, essential |

**Total: 84/105**

**Verdict**: EXPLORE FURTHER
**Decision Status**: NEW
**Key Differentiators**: Cloud-based (Mitchell1 killer), tablet-friendly counter UX, clear invoice totals (Tekmetric's documented failure), parts inventory that doesn't crash (Shopmonkey's documented failure), $79/mo flat vs $239+ for Shopmonkey
**Next Steps**: Survey 10 independent shop owners; validate parts ordering integration pain; build RO management + invoice core; launch trial in DRIVE Network FB group
**Risks**: Established players (Shopmonkey, Tekmetric) have strong sales teams; parts database integration complex; auto repair is a narrower channel than trades
**Key Source Links**:
- [Shopmonkey Capterra reviews](https://www.capterra.com/p/169022/Shopmonkey/)
- [Tekmetric Reviews - Software Finder](https://softwarefinder.com/auto-repair-software/tekmetric/reviews)
- [Auto Repair Software Comparison 2026](https://nextcarhub.com/auto-repair-shop-software-comparison.html)
- [Tekmetric vs Shopmonkey 2026](https://ustechautomations.com/resources/blog/automate-tekmetric-vs-shopmonkey-for-auto-repair-shops-2026)

**Signal Frequency**: Strong first-identification; multi-source competitor analysis confirms well-documented complaint pattern

---

### 9. Small Contractor PM for <$5M Contractors — Score: 84/105

| Criterion | Score | Weight | Weighted | Notes |
|-----------|-------|--------|----------|-------|
| Market Validation | 4/5 | 3x | 12 | Procore $15K-30K/yr for $3-5M contractor; Buildertrend $3,600+/yr — both proven at scale |
| Competitor Weakness | 4/5 | 2x | 8 | Procore "field crews don't want to spend an hour learning"; Buildertrend $299-599/mo for tools rarely fully used |
| LTD Viability | 4/5 | 2x | 8 | $99 LTD single contractor — compelling vs $3,600+/yr Buildertrend |
| No Free Tier | 4/5 | 1x | 4 | Contractors pay for project management; clear ROI |
| Channel Access | 4/5 | 2x | 8 | r/Construction, r/GeneralContractor, r/HomeImprovement, contractor Facebook groups |
| Content Potential | 4/5 | 1x | 4 | "Procore alternative small contractor", "construction PM under $100/mo", "Buildertrend too expensive" |
| AppSumo Fit | 4/5 | 2x | 8 | Strong story vs $3,600+/yr Buildertrend; "set up in 30 minutes" |
| Review Potential | 4/5 | 1x | 4 | Contractors review software actively on Capterra/G2 |
| MRR Path | 4/5 | 3x | 12 | Project-based work = ongoing subscription; natural per-project upsells |
| Build Feasibility | 3/5 | 2x | 6 | Estimate + job costing + schedule + client portal = complex; 6-8 weeks |
| Boring Business Bonus | 5/5 | 2x | 10 | Construction, remodeling — deeply boring |

**Total: 84/105**

**Verdict**: EXPLORE FURTHER
**Decision Status**: NEW
**Key Differentiators**: 30-minute setup (vs 3-month Procore onboarding), no per-user pricing, full job-cost-to-estimate comparison in one click, $79/mo flat
**Next Steps**: Define MVP scope (estimate → job cost tracking OR scheduling + client portal — not both in v1); validate in r/GeneralContractor; target remodelers first (less specialized than GC)
**Risks**: Build scope is broad for 4-6 week MVP; many competitors (Projul, Buildertrend lite) attacking same space; requires construction domain knowledge
**Key Source Links**:
- [Construction Software Pricing 2026](https://projul.com/blog/construction-software-pricing-guide-2026/)
- [Small Contractor PM Software](https://www.submittallink.com/post/construction-project-management-software-small-business)
- [How Much Does Construction Management Software Really Cost](https://buildersoftwarehub.com/costs-pricing-comparisons/how-much-does-construction-management-software-really-cost/)

**Signal Frequency**: First identified today from competitor analysis; r/GeneralContractor thread confirms GC Phase Tracker angle (see also `contractor-job-documentation.md`)

---

### 10. Local SEO Automation for Trades — Score: 84/105

*(Existing file: `ai-local-seo-trades.md` — currently at 87/105. New angle below, Signal History updated.)*

Today's new signal from hn-indiehackers-2026-09-03:
- LocalRank.so case study: Denver plumber position 18 → position 5 in 4 weeks, phone calls doubled, hired new tech
- Autonomous cold pitch pipeline + self-serve diagnostic audit concept validated
- Google Business Profile optimization + citation building + review automation bundled = complete local presence package at $49/mo or $299 LTD

**Verdict**: STABLE — no score change

---

### 11. Mobile-First FSM for Ignored Micro-Trades — Score: 82/105

| Criterion | Score | Weight | Weighted | Notes |
|-----------|-------|--------|----------|-------|
| Market Validation | 3/5 | 3x | 9 | FieldServicePro launched Aug 2026; Product Hunt micro-FSM launches monthly; solo operators building for themselves proves demand |
| Competitor Weakness | 4/5 | 2x | 8 | AppSumo has ZERO products dedicated to locksmith, fire sprinkler inspection, mobile detailing — confirmed first-mover |
| LTD Viability | 5/5 | 2x | 10 | $59-99 LTD hits sweet spot for solo operators; micro-trade owners won't pay $59/mo but will pay $79 once |
| No Free Tier | 4/5 | 1x | 4 | Trade operators pay for scheduling; no meaningful free alternative |
| Channel Access | 3/5 | 2x | 6 | Smaller communities per trade; but each is a tight-knit vertical with high referral rates |
| Content Potential | 3/5 | 1x | 3 | "[trade] business management software", "[trade] scheduling app", "invoice app [specific trade]" |
| AppSumo Fit | 5/5 | 2x | 10 | Explicit: first launch in locksmith/sprinkler/detailing category = near-zero competition on platform |
| Review Potential | 3/5 | 1x | 3 | Small communities but referral-based; first reviews drive category domination |
| MRR Path | 3/5 | 3x | 9 | Solo operators have higher churn; multi-user features as MRR path |
| Build Feasibility | 5/5 | 2x | 10 | Same FSM core, vertical-specific templates; 2-4 weeks per vertical |
| Boring Business Bonus | 5/5 | 2x | 10 | Locksmith, fire sprinkler inspection, mobile detailing — deeply boring |

**Total: 82/105**

**Verdict**: BUILD (pick ONE trade first — mobile locksmith or fire sprinkler inspection recommended)
**Decision Status**: NEW
**Key Differentiators**: Built specifically for one trade (not generic), pre-loaded job templates (key types, lock brands for locksmith; NFPA inspection checklists for sprinkler), offline-first photo capture, AppSumo first-mover in category
**Next Steps**: Pick fire sprinkler inspection (NFPA compliance checklists + photo documentation + certificate generation) as first vertical; build job + schedule + compliance photo + PDF cert; AppSumo launch
**Risks**: Small niche per trade limits ceiling; must expand verticals for meaningful MRR; FieldServicePro (Aug 2026) is targeting same space at flat $199/mo
**Key Source Links**:
- [Trades Admin on Product Hunt](https://www.producthunt.com/products/trades-admin)
- [Service Shark on Product Hunt](https://www.producthunt.com/products/service-shark)
- [FieldServicePro Aug 2026 launch](https://spindigit.com/2026/08/21/fieldservicepro-launches-ai-native-suite-that-runs-your-entire-service-business-from-lead-to-invoice/)
- [FieldZenPro offline-first](https://fieldzenpro.com/mobile-field-service-management-app)

**Signal Frequency**: First identified today; trend spotter confirms FSM micro-trade category growing monthly

---

### 12. MEP Subcontractor Manpower Scheduling — Score: 81/105

| Criterion | Score | Weight | Weighted | Notes |
|-----------|-------|--------|----------|-------|
| Market Validation | 3/5 | 3x | 9 | r/ConstructionManagers thread confirmed by multiple comments; Excel workaround = clear unmet need |
| Competitor Weakness | 5/5 | 2x | 10 | Nothing purpose-built; Excel is the only alternative; Procore is GC-focused and overkill |
| LTD Viability | 4/5 | 2x | 8 | $59-79 LTD for up to 30 employees — compelling vs Excel pain |
| No Free Tier | 4/5 | 1x | 4 | Will pay to fix Excel collaboration chaos |
| Channel Access | 3/5 | 2x | 6 | r/ConstructionManagers, construction LinkedIn groups, SMACNA (sheet metal) channels |
| Content Potential | 3/5 | 1x | 3 | "MEP subcontractor scheduling software", "manpower planning construction", "crew scheduling app" |
| AppSumo Fit | 3/5 | 2x | 6 | Niche B2B; smaller AppSumo audience but no competition in category |
| Review Potential | 3/5 | 1x | 3 | Small community; reviews from early users carry weight |
| MRR Path | 4/5 | 3x | 12 | $29-49/mo for ongoing collaboration + scheduling features |
| Build Feasibility | 5/5 | 2x | 10 | Drag-drop weekly calendar per project; learn in 10 minutes; 2-3 week MVP |
| Boring Business Bonus | 5/5 | 2x | 10 | MEP subcontractors — deeply boring construction trade |

**Total: 81/105**

**Verdict**: EXPLORE FURTHER
**Decision Status**: NEW
**Key Differentiators**: Purpose-built for MEP subs (not generic scheduler), shared weekly crew view across 15-20 projects, PDF export for field supervisors, collaboration without "messing up the format"
**Next Steps**: Post in r/ConstructionManagers asking for beta testers; build drag-drop weekly crew calendar with project assignment; target SMACNA member mailing list
**Risks**: Very niche market; Procore could add a basic crew scheduling view; limited AppSumo audience
**Key Source Links**:
- [MEP sub scheduling thread — r/ConstructionManagers](https://www.reddit.com/r/ConstructionManagers/comments/1l46phf/mep_sub_scheduling_software.json)
- [Excel-based PO management — r/ConstructionManagers](https://www.reddit.com/r/ConstructionManagers/comments/1r6dbip/does_anyone_else_manage_all_their_pos_in_an_excel/)

**Signal Frequency**: First identified today; specific community thread with multiple confirming comments

---

### 13. Property Management Portfolio Analytics (AppFolio/Buildium reporting layer) — Score: 81/105

*(Maps to existing `property-management.md` — covered as analytics angle.)*

Signal today from reddit-2026-09-03:
- AppFolio raised ACH fees to $2.49/transaction with almost no notice — users fleeing to Rentvine
- Cross-portfolio analytics missing: NOI by property, vacancy trends, maintenance cost per unit
- $49-99/mo analytics-only layer that syncs with AppFolio/Buildium API = confirmed gap

This is a standalone product angle distinct from the core property-management.md (which focuses on small landlords owning the software). A separate "analytics layer for professional PMs managing 50-500 units" file may be warranted but maps closely enough to include in property-management.md notes for now.

---

### 14. Small Manufacturing / Fabrication Shop ERP — Score: 80/105

*(Existing file: `manufacturing-erp-sme.md` — currently at 76/105. New Bus Core signal upgrades.)*

Today's HN signal:
- Bus Core (Show HN): open-source local-first ERP (inventory, vendors, manufacturing runs, costing) getting active discussion from shop owners; SQLite + Python + local web UI
- Validates demand: shops would pay $99-199/mo for a hosted, supported, backed-up version
- "Shopify for small fab shops" angle: quote → track jobs → manage inventory → invoice from one place

Score upgrade: 80/105 (from 76/105) — Build Feasibility ↑ (managed Bus Core = faster path to market)

---

### 15. GC Project Phase Tracker (Logbook Digitizer) — Score: 78/105

*(Maps to existing `contractor-job-documentation.md` — 87/105. New angle documented.)*

Today's Reddit signal from r/GeneralContractor:
- Old-school GC still uses paper logbook — tracks job phases, client progress payments, receipts, balances
- Specific need: phase-based billing tied to draw schedule + receipt capture + accounting sync
- Billdr Pro gaining traction for this exact segment
- Gap is phase-based billing with dead-simple UX — QuickBooks has no job phases, Procore is overkill

This is a differentiated angle within contractor-job-documentation.md (photo docs + compliance) but focuses on financial workflow. Adding to signal history with "phase-based billing angle" note.

---

### 16. Electrician T&M Consumables Tracker — Score: 78/105

| Criterion | Score | Weight | Weighted | Notes |
|-----------|-------|--------|----------|-------|
| Market Validation | 3/5 | 3x | 9 | Active r/AskElectricians thread with specific workflow descriptions; BuildOps market validation |
| Competitor Weakness | 4/5 | 2x | 8 | QuickBooks/Tradify don't solve on-site consumables capture; no electrical material code lookup |
| LTD Viability | 4/5 | 2x | 8 | $59-79 LTD for solo/small shop tier |
| No Free Tier | 4/5 | 1x | 4 | Will pay — technicians forget to bill breakers; lost revenue motivates payment |
| Channel Access | 4/5 | 2x | 8 | r/AskElectricians, r/electricians, electrical contractor Facebook groups |
| Content Potential | 3/5 | 1x | 3 | "electrician consumables tracking", "T&M billing app electrician" |
| AppSumo Fit | 3/5 | 2x | 6 | Niche audience on AppSumo; standalone tool with clear ROI |
| Review Potential | 3/5 | 1x | 3 | Small community; reviews spread through trade networks |
| MRR Path | 3/5 | 3x | 9 | Natural MRR transition for teams; per-tech pricing |
| Build Feasibility | 5/5 | 2x | 10 | Mobile tap-to-log + pre-loaded materials library + QB sync; 2-3 weeks |
| Boring Business Bonus | 5/5 | 2x | 10 | Electrical contractors — deeply boring |

**Total: 78/105**

**Verdict**: EXPLORE FURTHER
**Decision Status**: NEW
**Key Differentiators**: Pre-loaded NEC code / electrical materials library, tap-on-site logging (no free-text), one-tap billing sync with QuickBooks, mobile-first offline-capable
**Next Steps**: Validate with 5-10 electricians in r/AskElectricians; build materials library + tap-log + QB sync; test at $59 LTD
**Risks**: Very niche; BuildOps could add this feature; limited to electrical (would need to expand to plumbing/HVAC for scale)
**Key Source Links**:
- [r/AskElectricians T&M tracking thread](https://www.reddit.com/r/AskElectricians/comments/1qn2g9k/electricians_doing_tm_how_do_you_track.json)
- [Electrical T&M billing software — BuildOps](https://buildops.com/resources/electrical-contractor-time-and-material-billing-software)

**Signal Frequency**: First identified today; specific thread with multiple confirming responses

---

### 17. Small Fleet Manager (5–15 Vehicles, No Contracts) — Score: 78/105

| Criterion | Score | Weight | Weighted | Notes |
|-----------|-------|--------|----------|-------|
| Market Validation | 4/5 | 3x | 12 | Samsara $9K-10K upfront for 10 trucks + 3yr contracts well-documented; Verizon Connect designed for large fleets |
| Competitor Weakness | 5/5 | 2x | 10 | Samsara 399 G2 "Technical Issues" + 280 "Poor Customer Support"; 3-year lock-in + $350-500/vehicle hardware |
| LTD Viability | 3/5 | 2x | 6 | Hardware dependency makes LTD tricky; software-only LTD at $99 (5 trucks lifetime) possible |
| No Free Tier | 4/5 | 1x | 4 | Will pay; GPS tracking has clear value; no good free alternative |
| Channel Access | 3/5 | 2x | 6 | r/Trucking, r/smallbusiness, OOIDA forums, small fleet Facebook groups |
| Content Potential | 3/5 | 1x | 3 | "Samsara alternative small fleet", "GPS tracker no contract", "fleet management 10 trucks" |
| AppSumo Fit | 3/5 | 2x | 6 | Hardware component complicates AppSumo; software-only LTD possible |
| Review Potential | 3/5 | 1x | 3 | Small fleet owners review software but smaller community |
| MRR Path | 4/5 | 3x | 12 | Per-truck/month = natural SaaS; maintenance alerts and IFTA reporting add stickiness |
| Build Feasibility | 3/5 | 2x | 6 | OBD integration + GPS dashboard + IFTA reporting = moderate complexity |
| Boring Business Bonus | 5/5 | 2x | 10 | Trucking, HVAC vans, landscaping fleets — deeply boring |

**Total: 78/105**

**Verdict**: EXPLORE FURTHER
**Decision Status**: NEW
**Key Differentiators**: No long-term contracts (vs Samsara's 3-year), OBD plug-in ships in 48 hours ($39/truck one-time hardware), IFTA reports auto-generated, cancel anytime
**Next Steps**: Source OBD dongle supplier; build GPS tracking dashboard + maintenance alerts + IFTA report generator; test with 3-5 small fleet operators
**Risks**: Hardware supply chain complexity; Samsara has strong brand and sales team; per-truck SaaS model requires hardware dependency management
**Key Source Links**:
- [GPS trackers for company vehicles — r/smallbusiness](https://www.reddit.com/r/smallbusiness/comments/1qod0ek/gps_trackers_for_company_vehicles_in_2026_which.json)
- [Samsara Alternatives for Small Fleets 2026](https://blog.movcar.app/samsara-alternatives-small-fleets-2026/)
- [Best Fleet Management for Small Business 2026](https://ortemtech.com/blog/best-fleet-management-software-small-business-2026)

**Signal Frequency**: Multiple Reddit threads today; consistent complaint across r/smallbusiness, r/Construction, r/richmondbc

---

### 18. CNC Machine Shop Quoting from Engineering Files (Isonq angle) — Score: 77/105

*(Existing file: `machine-shop-job-tracking.md` — currently at 86/105. Isonq is strong confirmation.)*

Today's HN signal:
- Isonq (Show HN): reads PDF/DXF/DWG/STEP files on-machine, auto-generates priced quote; local-first (nothing leaves machine); live pilot at Colorado CNC shop in production
- Reconciles 2D vs 3D geometry using LLM + computer vision — the specific gap vs all other tools
- YC Spring 2026 RFS already called out "AI quoting for metal mills" — YC is watching this space
- Local-first is a genuine differentiator for NDA/IP-sensitive shops

**Current score remains 86/105 in existing file.** No score change needed — already well-captured.

---

### 19. Commercial Landscaping Team Ops App — Score: 77/105

| Criterion | Score | Weight | Weighted | Notes |
|-----------|-------|--------|----------|-------|
| Market Validation | 3/5 | 3x | 9 | Specific Reddit thread; Service Autopilot $499/mo complaint pattern recurring; commercial-only gap articulated |
| Competitor Weakness | 4/5 | 2x | 8 | Jobber residential-focused; Service Autopilot $499/mo overkill; LMN complex — none nail commercial team ops |
| LTD Viability | 4/5 | 2x | 8 | $79-99 LTD for up to 10 users |
| No Free Tier | 4/5 | 1x | 4 | Will pay; commercial landscaping companies have real budgets |
| Channel Access | 3/5 | 2x | 6 | r/landscaping, r/lawncare, Green Industry Pros, NALP channels |
| Content Potential | 3/5 | 1x | 3 | "commercial landscaping software", "landscaping team operations app" |
| AppSumo Fit | 3/5 | 2x | 6 | Commercial-only is narrower AppSumo audience; but no competition in category |
| Review Potential | 3/5 | 1x | 3 | Moderate — smaller commercial landscaping community vs residential |
| MRR Path | 4/5 | 3x | 12 | Per-crew/month subscription; seasonal contract management as upsell |
| Build Feasibility | 4/5 | 2x | 8 | Job calendar + materials tracking + photo time logs + task checklists; 4 weeks |
| Boring Business Bonus | 5/5 | 2x | 10 | Commercial landscaping — deeply boring, B2B clients |

**Total: 77/105**

**Verdict**: EXPLORE FURTHER
**Decision Status**: NEW
**Key Differentiators**: Team-ops first (not CRM/invoicing), real-time materials expense per job, shared crew calendar for team leads, morning truck/safety/materials checklists, commercial-only positioning
**Next Steps**: Validate in landscaping Facebook groups; build crew calendar + job materials tracking core; test with 5 commercial landscaping companies
**Risks**: Service Autopilot could cut price; commercial landscaping is smaller niche than residential; seasonality creates subscription churn
**Key Source Links**:
- [r/smallbusiness landscaping ops thread](https://www.reddit.com/r/smallbusiness/comments/1q6prh4/need_help_with_software_for_small_business.json)
- [Best Scheduling Software Lawn Care 2026](https://www.lawncareledger.com/articles/best-scheduling-software-lawn-care)

**Signal Frequency**: First identified today with specific commercial-only articulation

---

## Tier 2: Worth Exploring (Score 55–74)

### AI Roofing / Subtrade Estimating (Adjacent to Rudus/Concrete) — Score: 74/105
- Rudus (YC P26) validated the "one trade, done right" AI takeoff model for concrete
- Same problem exists for roofing (satellite imagery + slope calculations), HVAC ductwork, framing
- Gap: 20-year-old workflows, Excel-based estimating, generic tools missing trade-specific sheet formats
- Build complexity high (reading satellite imagery + slope calculations = 8-12 weeks)
- **Next Step**: Validate roofing AI estimating as adjacent niche; watch Rudus for playbook

### Small Carrier TMS / Owner-Operator Dispatch — Score: 74/105
*(Existing file: `small-carrier-tms.md`. Signal confirmed today from r/logistics. Signal History updated.)*

- Today's signal: Double-entry across TMS + ERP + spreadsheets confirmed; WhatsApp for status updates; ETA reconciliation as most common "source of truth break"
- Truckbase is the main competitor gaining traction for 10-100 trucks; gap remains for sub-$99/mo for 1-5 trucks

### Veterinary & Dental Practice AI Workflow Tools — Score: 74/105
- Vet market $2.1B growing 9%; dental practice AI market growing 12%+
- AI SOAP notes from voice (Shepherd Veterinary) + automated recall sequences
- Existing file: `vetscribe-ai-soap-notes.md` covers vet SOAP notes specifically
- Dental recall automation is uncovered — worth exploring as standalone angle
- Build time: 2-3 weeks for AI SOAP note tool using Whisper + GPT-4o structured output

### Home Services Ops Hub (10–30 Technicians) — Score: 65/105
- WhatsApp + Google Sheets → smart booking + dispatch + work orders for 10-30 tech operations
- Real pain but LTD viability marginal (team-based pricing); existing FSM options exist (Jobber outgrown, ServiceTitan too expensive)
- $6-9K custom integration quote in original Reddit post = market gap signal
- **Pass on LTD/AppSumo angle; potential for SaaS-only at $149-299/mo**

### Voice-First Team Communication for Construction (Conkoa AI) — Score: 61/105
- Voice routes to Procore; English/Spanish auto-translation; 40+ companies using it
- Narrow white space: landscaping or HVAC fleet dispatch without Procore dependency
- Build is achievable but distribution is hard (not AppSumo-friendly; requires enterprise GTM)

---

## Tier 3: Weak / Pass (Score <55)

| Idea | Score | Reason to Pass |
|------|-------|---------------|
| MEP Blueprint Automation (PillarPlus) | 45/105 | LTD risky (ongoing AI compute + regulatory updates); complex build (15 technical drawings from floor plan); regulatory liability if wrong |
| Embedded Payments for Trades (standalone) | 38/105 | Not a standalone product — it's a feature layer built ON TOP of an FSM; no AppSumo fit; revenue only as embedded in existing platform |
| Vertical SaaS + AI Macro Trend (meta) | N/A | Meta-analysis / market sizing insight; not a specific product idea |
| Boring SaaS Aggregated Signal (Reddit meta-post) | N/A | Market intelligence signal only; actionable insight: use "overkill" as filter word |

---

## Top 3 Recommendations

### 1. AI Invoice Auto-Followup for Trades — Score: 89/105
"Never chase an invoice again" — standalone AR automation plug-in for QuickBooks/ServiceTitan that cuts HVAC/plumbing DSO from 43 to 19 days with AI-timed SMS sequences. Fastest build (2-3 weeks), clearest measurable ROI, no FSM replacement required. First-mover in "AR autopilot for trades" brand position.
- **Key Source**: [Stop Slow-Paying Customers in HVAC](https://ustechautomations.com/resources/blog/automate-stop-slowpaying-customers-in-hvac-2026)

### 2. Cleaning Service Micro-Crew App — Score: 97/105
Flat $39/mo for 1-5 staff, auto-charge on job completion, recurring booking management. ZenMaid $3M/yr proves the market; Connecteam's 3-subscription model is the documented pain. AppSumo first-mover potential ($59 LTD vs $500+/yr Jobber). Straightforward 4-5 week build.
- **Key Source**: [ZenMaid $3M/yr founder story](https://www.indiehackers.com/post/tech/from-a-cleaning-side-hustle-to-a-3m-yr-saas-for-cleaning-services-suhsqkDZB1zIwRmXxrFm)

### 3. HVAC/Plumbing 2–10 Tech FSM (Flat-Rate + QB Sync) — Score: 95/105
Flat $99/mo (not per-tech), QuickBooks sync that actually works (Housecall Pro's documented 60-70% duplicate rate is the opening). Largest total addressable market of all Tier 1 ideas; proven spending behavior ($300+/tech/mo for ServiceTitan). Most complex build but highest revenue ceiling.
- **Key Source**: [Jobber vs Housecall Pro QuickBooks Sync](https://korekomfortsolutions.com/jobber-vs-housecall-pro-for-quickbooks-which-sync-actually-works/)

---

## Summary Scoring Table

| Rank | Idea | Score | Action | Shortlisted File |
|------|------|-------|--------|-----------------|
| 1 | Cleaning Service Micro-Crew App | 97/105 | BUILD | CREATE cleaning-service-management.md |
| 2 | HVAC/Plumbing 2-10 Tech FSM (Flat-Rate) | 95/105 | BUILD | CREATE field-service-management.md |
| 3 | AI Invoice Auto-Followup for Trades | 89/105 | BUILD | CREATE trades-invoice-ar-automation.md |
| 4 | AI Voice Receptionist (Single-Trade) | 88/105 | BUILD | CREATE ai-voice-receptionist-trades.md |
| 5 | Specialty Pest Control & Lawn Care | 86/105 | BUILD | CREATE pest-control-lawn-care.md |
| 6 | HVAC/Trades Analytics Layer | 85/105 | BUILD | CREATE trades-analytics-reporting.md |
| 7 | Micro-Landlord App (1-20 units) | 85/105 | BUILD | UPDATE property-management.md |
| 8 | Auto Repair Shop Management | 84/105 | EXPLORE | CREATE auto-repair-shop-management.md |
| 9 | Small Contractor PM (<$5M) | 84/105 | EXPLORE | CREATE small-contractor-pm.md |
| 10 | Local SEO for Trades | 84/105 | BUILD | UPDATE ai-local-seo-trades.md |
| 11 | Mobile-First FSM for Micro-Trades | 82/105 | BUILD | CREATE micro-trade-vertical-fsm.md |
| 12 | MEP Subcontractor Scheduling | 81/105 | EXPLORE | CREATE mep-subcontractor-scheduling.md |
| 13 | PM Portfolio Analytics | 81/105 | BUILD | UPDATE property-management.md |
| 14 | Small Manufacturing ERP | 80/105 | EXPLORE | UPDATE manufacturing-erp-sme.md |
| 15 | GC Project Phase Tracker | 78/105 | EXPLORE | UPDATE contractor-job-documentation.md |
| 16 | Electrician T&M Consumables Tracker | 78/105 | EXPLORE | CREATE electrician-consumables-tracker.md |
| 17 | Small Fleet Manager (5-15 vehicles) | 78/105 | EXPLORE | CREATE small-fleet-management.md |
| 18 | CNC Machine Shop Quoting (Isonq) | 77/105 | EXPLORE | UPDATE machine-shop-job-tracking.md |
| 19 | Commercial Landscaping Team Ops | 77/105 | EXPLORE | CREATE landscaping-lawn-care.md |
| 20 | AI Roofing/Subtrade Estimating | 74/105 | WATCH | — |
| 21 | Small Carrier TMS | 74/105 | EXPLORE | UPDATE small-carrier-tms.md |
| 22 | Vet/Dental AI Workflow (dental recall) | 74/105 | WATCH | UPDATE vetscribe-ai-soap-notes.md |
| 23 | Home Services Ops Hub (10-30 team) | 65/105 | PASS (LTD) | — |
| 24 | Voice-First Construction Comms | 61/105 | PASS | — |
| 25 | MEP Blueprint Automation | 45/105 | PASS | — |
| 26 | Embedded Payments for Trades | 38/105 | PASS | — |
