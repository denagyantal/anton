# Idea Evaluation — 2026-10-25

**Sources**: Reddit Scanner, HN & Indie Hackers, Competitor Analysis, Trend Spotter
**Evaluator**: Claude (idea-evaluator agent)
**Raw files**: reddit-2026-10-25.md, hn-indiehackers-2026-10-25.md, competitor-analysis-2026-10-25.md, trends-2026-10-25.md

---

## Tier 1: Strong Opportunities (Score 75+)

### 1. Flat-Rate Field Service CRM + Marketing Automation ("TrustBook") — Score: 93/105
**Canonical file**: `shortlisted/hvac-flat-rate-pricebook.md` (EXISTING, updated)

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 4/5 | 500K+ HVAC/plumbing/electrical contractors; ServiceTitan/TNFR validate willingness to pay |
| Competitor Weakness | 5/5 | No flat-rate pricebook + marketing automation combo at <$100/mo; Jobber zero pricebook confirmed |
| LTD Viability | 5/5 | $79–149 LTD; very low infra; "one upsell pays for the tool" ROI story |
| No Free Tier | 4/5 | The New Flat Rate $99/tech/mo proves people pay; no credible free option |
| Channel Access | 5/5 | r/HVAC, r/Plumbing, FB "HVAC Business Owners", ACCA trade forums |
| Content Potential | 4/5 | "flat rate pricing HVAC", "plumbing flat rate software", "contractor review automation" |
| AppSumo Fit | 5/5 | Category-first on AppSumo; crystal-clear ROI; no HVAC FSM ever ran LTD here |
| Review Potential | 4/5 | One 5-star review = $1K+ job value; tradespeople review willingly if it helps revenue |
| MRR Path | 3/5 | Standalone pricebook limits MRR ceiling; integrations (Jobber/HCP/QB) as upsell path |
| Build Feasibility | 5/5 | CRUD + pricing logic + PDF generator + SMS automation = 2–3 week MVP |
| Boring Business Bonus | 5/5 | HVAC/plumbing = deeply boring; VCs completely ignore |

**Weighted Total: 93/105**

**Verdict**: BUILD
**Decision Status**: BUILDING (in BMAD pipeline per hvac-flat-rate-pricebook.md)
**New Signals Today**:
- Reddit: Fieldkit (flat $99/mo unlimited users) and ServNox launched July 2026 targeting same gap — validates category
- Competitor Analysis: "TrustBook" concept — flat-rate pricebook + built-in marketing automation (review requests, follow-up sequences) + offline-first mobile; TNFR $400+/mo for 4-person shop; Housecall Pro has no flat-rate pricebook; ServiceTitan pricebook enterprise-only
- Reddit: solo HVAC/plumbing operators explicitly saying "I need estimates + invoice + get paid, that's it" — stripped-down FSM demand confirmed
- HN: "PDF Quote Generator for Solo Trades" — hundreds of paying users in other countries confirm demand; dead-simple quote-to-PDF at $29–49/yr = LTD-perfect
**Risks**: Jobber could add free flat-rate pricebook; limited MRR ceiling as standalone; execution risk on integrations
**Key Source Links**:
- https://www.reddit.com/r/WhichCRM/comments/1qwwl24/built_a_field_service_crm_because_i_was_tired_of/
- https://www.reddit.com/r/EntrepreneurRideAlong/comments/1saxgqa/field_service_management_software_for_small/
- https://fieldcamp.ai/reviews/servicetitan/
- https://blog.salescaptain.com/servicetitan-alternatives-for-small-hvac-companies-2026/
- https://www.flatratesoftware.com/flatratepricing-hvac-2025/
**Signal Frequency**: 4+ sources, 8+ distinct Reddit threads across the FSM/pricebook space — increasing

---

### 2. Trade Job Costing with Cost Codes ("TradeCoast") — Score: 89/105
**Canonical file**: `shortlisted/trade-job-cost-accounting.md` (EXISTING, updated)

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 4/5 | QB complaints universal; 8M+ trade contractors; QBO Plus $90/mo just for job costing |
| Competitor Weakness | 4/5 | QuickBooks no real cost codes for trades; Procore $375+/mo; Buildertrend better for home builders; Planyard limited mobile |
| LTD Viability | 5/5 | $79 LTD (up to 3 users); "pay once, know your job profits forever" = AppSumo headline |
| No Free Tier | 3/5 | Wave (free) is comparison pressure; differentiation is job costing + trade templates |
| Channel Access | 4/5 | r/Construction, r/electrical, r/Plumbing, r/HVAC, Facebook "Electrical Contractors" |
| Content Potential | 4/5 | "job costing app for contractors", "QuickBooks alternative trades", "HVAC job profitability" |
| AppSumo Fit | 5/5 | $79 LTD; "I finally understand my job profitability" = very concrete value prop |
| Review Potential | 4/5 | Anyone who escapes QB subscription will leave a review |
| MRR Path | 4/5 | $19–29/mo natural recurring; QBO sync add-on; integrates with ongoing job data |
| Build Feasibility | 4/5 | Job cost codes + real-time mobile entry + budget vs actual + QuickBooks sync = 4 weeks |
| Boring Business Bonus | 4/5 | Trade contractor accounting = unglamorous; VC-ignored |

**Weighted Total: 89/105**

**Verdict**: BUILD
**Decision Status**: NEW (BMAD PRD completed per signal history)
**New Signals Today**:
- Competitor Analysis: "TradeCoast/JobLedger" — QuickBooks no cost codes documented; Procore $375+/mo; change orders require manual adjustment everywhere; no real-time cost visibility on mobile for sub-10-person contractors
- Reddit: r/landscaping + r/ConstructionTech — electricians + landscapers "just look at the monthly bank statement and hope" for profitability; per-job cost tracking gap explicitly confirmed
- Trends: "The Nut Report" pre-launch (FSM data analytics) + Knowify $149/mo = market validating
**Risks**: Wave free tier comparison; QB brand recognition; accounting accuracy expectations high; 1099 generation adds scope
**Key Source Links**:
- https://www.reddit.com/r/landscaping/comments/1riirwi/those_of_you_running_your_own_landscaping_crew/
- https://www.reddit.com/r/ConstructionTech/comments/1ntcf3x/contractors_what_tools_do_you_actually_use_to_run/
- https://livecosts.com/blog/the-best-construction-job-costing-software-for-smbs-in-2026-2/
- https://planyard.com/blog/7-best-construction-cost-control-software-for-small-contractors
- https://supercrew.com/blog/best-job-costing-apps-for-construction-2026
**Signal Frequency**: 5+ sources confirming — stable/increasing

---

### 3. Lawn Care Chemical Application Compliance Tracker ("GreenLog") — Score: 93/105
**Canonical file**: `shortlisted/lawn-chemical-tracking-route.md` (EXISTING, updated)

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 4/5 | RealGreen/GorillaDesk prove willingness to pay; EPA compliance = legally required = inelastic demand |
| Competitor Weakness | 5/5 | Jobber explicitly no chemical tracking; RealGreen "skyrocketing" pricing; LawnPro billing bugs = live churn |
| LTD Viability | 4/5 | $59–99 LTD; "one avoided fine covers the LTD cost" conversion psychology |
| No Free Tier | 4/5 | No free EPA-compliant chemical tracking tool exists |
| Channel Access | 4/5 | r/lawncare, r/landscaping, LawnSite.com, Facebook "Lawn Care Business Owners", NALP |
| Content Potential | 4/5 | "lawn care chemical tracking software", "pesticide application records", "EPA lawn compliance" |
| AppSumo Fit | 4/5 | "need-to-have" compliance narrative; no lawn care software on AppSumo confirmed |
| Review Potential | 3/5 | Moderate; lawn care community active on LawnSite |
| MRR Path | 4/5 | Legal compliance = ongoing record-keeping = high retention; state reports = stickiness |
| Build Feasibility | 4/5 | EPA log form + state report generator + GPS route + recurring invoicing = 3–4 week MVP |
| Boring Business Bonus | 5/5 | Lawn treatment operators = deeply boring; VC-ignored entirely |

**Weighted Total: 93/105**

**Verdict**: BUILD
**Decision Status**: BUILDING (in BMAD pipeline)
**New Signals Today**:
- Competitor Analysis: "GreenLog" concept — standalone chemical application compliance tracker; EPA required fields (product name, reg#, amount applied, area treated, weather, technician, applicator license); state-compliant report export PDF; Jobber/Housecall Pro explicitly have zero chemical tracking; Service Autopilot 4-week onboarding wait; satellite property measurement absent from general tools
- Reddit: landscaping bids/proposals automation signal — "drowning in paperwork" + no per-job cost tracking for landscapers
- Competitor: LMN $1,144 entry threshold locks out small operators; Yardbook chemical tracking only on paid tier with weak support
**Risks**: 50-state form format maintenance; market sub-segment may be smaller than general lawn care; GorillaDesk expansion possible
**Key Source Links**:
- https://myquoteiq.com/top-10-best-chemical-tracking-software-for-lawn-fertilization-businesses-in-2026/
- https://www.capterra.com/p/105508/LawnPro/reviews/
- https://www.realgreen.com/blog/best-lawn-care-software-2026
- https://www.capterra.com/compare/127994-176382/Jobber-vs-TurfHop
- https://www.reddit.com/r/landscaping/comments/1qvbezl/would_you_use_an_automated_bidding_tool_like_this/
**Signal Frequency**: 4 sources — stable high-conviction

---

### 4. Pest Control Mobile-First / Mid-Market Gap — Score: 98/105
**Canonical file**: `shortlisted/pest-control.md` (EXISTING, updated)

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | $22.7B US market; GorillaDesk 6,200+ customers bootstrapped; $2M ARR confirmed |
| Competitor Weakness | 5/5 | GorillaDesk hitting ceiling; FieldRoutes (ServiceTitan) active migration event; PestPac enterprise-only |
| LTD Viability | 4/5 | $79–129 LTD; compliance angle = "I must have this" conversion; chemical compliance = stickiness |
| No Free Tier | 5/5 | No free pest control compliance tools; GorillaDesk $49+/mo is floor |
| Channel Access | 4/5 | r/pestcontrol, NPMA events, Facebook "Pest Control Business Owners", PestWorld |
| Content Potential | 5/5 | "pest control software", "EPA compliance tracking", "GorillaDesk alternative" |
| AppSumo Fit | 3/5 | Pest control niche; but compliance = "I must have this" AppSumo conversion hook |
| Review Potential | 4/5 | EPA compliance creates stickiness = reviews; pest control community is active |
| MRR Path | 4/5 | Recurring route contracts = lowest churn; chemical compliance = high switching cost |
| Build Feasibility | 4/5 | Route optimization + chemical logging + recurring scheduling + EPA compliance = 4–5 weeks |
| Boring Business Bonus | 5/5 | Pest control = deeply boring; VCs never invested here |

**Weighted Total: 98/105**

**Verdict**: BUILD
**Decision Status**: BUILDING
**New Signals Today**:
- Reddit (HN): FieldSync launched — "true mobile-first pest control app" (route planning → job details on phone → chemical/treatment notes → invoice on site → customer portal for service history); validates market with live product
- Competitor: GorillaDesk explicitly hitting ceiling at 3–15 route operators; gap between GorillaDesk ($49–149/route) and PestPac (enterprise) is the "GorillaDesk Pro" opportunity; 5–15 route commercial pest control = new unaddressed segment angle
- HN: "pest control is a big, good business" — founder took technician job to validate; AI reduces engineering needed for vertical SaaS
- GorillaDesk 4.8 Capterra / 4.7 G2 at 6,200+ companies but now showing ceiling = confirmed mid-market whitespace
**Risks**: GorillaDesk could expand features; FieldRoutes migration window may close; small operators are resistant to cold SaaS outreach
**Key Source Links**:
- https://www.reddit.com/r/SaaS/comments/1rh93a3/i_watched_my_father_in_law_run_his_pest_control/
- https://news.ycombinator.com/item?id=47509571
- https://tooleduppro.com/reviews/gorilladesk/
- https://fieldserviceguide.com/gorilladesk/
- https://servicebusinessacademy.org/top-7-differences-gorilladesk-pestpac-pest-control-2026/
**Signal Frequency**: Every single day for 6+ months — highest-conviction idea in portfolio

---

### 5. Small Landlord Property Management 1–20 Units ("DoorSimple") — Score: 87/105
**Canonical file**: `shortlisted/property-management.md` (EXISTING, updated)

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | 19M landlords in US; 40% have <5 units; TurboTenant/RentRedi proving market |
| Competitor Weakness | 4/5 | AppFolio 50-unit minimum; Buildium minimum fees regardless of size; TurboTenant charges tenants |
| LTD Viability | 4/5 | $69–99 LTD; small landlords sticky once rental data is in; "pay once, manage forever" |
| No Free Tier | 3/5 | TurboTenant/Innago are free — comparison pressure but they have real gaps |
| Channel Access | 4/5 | r/Landlord, r/realestateinvesting, BiggerPockets, Facebook "Small Landlords Network" |
| Content Potential | 4/5 | "landlord software 5 units", "small landlord app", "property manager 10 doors" |
| AppSumo Fit | 4/5 | Proven AppSumo category; fixed-cost-per-portfolio-size easy to justify |
| Review Potential | 4/5 | Small landlords are vocal community; escape from Buildium = natural review trigger |
| MRR Path | 4/5 | $15–25/mo natural recurring; WhatsApp/SMS communication = feature differentiation |
| Build Feasibility | 4/5 | Rent collection (ACH) + maintenance portal + lease storage + tenant messaging = 4 weeks |
| Boring Business Bonus | 4/5 | Small landlord mgmt = unglamorous professional services; VC-ignored |

**Weighted Total: 87/105**

**Verdict**: EXPLORE FURTHER → BUILD
**Decision Status**: NEW
**New Signals Today**:
- Competitor Analysis: "DoorSimple" — AppFolio 50-unit minimum fully documented; Buildium minimum fee charges small landlords for features they'll never use; TurboTenant makes money on tenant fees (not landlord UX investment); free tools lack maintenance portal + tenant communication; spreadsheets still common for <5 unit landlords
- Trends: PropTech AI consolidation signal — Entrata (100+ AI agents), EliseAI, Brickwise AI all targeting mid-large; 1–20 unit self-managing landlord segment still empty; CleanRoll AI rent roll standardization = adjacent validation
- Reddit: Buildium/AppFolio Capterra complaints confirm "too bloated or too expensive for small landlords"; TenantCloud pricing creep = live churn event
- Strong LTD potential: landlords are sticky buyers; "$99 LTD for set-and-forget" works well
**Risks**: Free tools (TurboTenant, Innago) create resistance to paid; market has many players at low end; WhatsApp/SMS-native communication as differentiator requires regional focus
**Key Source Links**:
- https://pickspace.com/blog/best-property-management-software-small-landlords
- https://www.baselane.com/resources/15-best-landlord-software-platforms
- https://capterra.com/p/47428/Buildium-Property-Management-Software/reviews/
- https://capterra.com/p/133029/TenantCloud/reviews/
- https://www.proptechoutlook.com/news/property-management-platforms-become-operating-systems-for-rental-portfolios-nwid-1399.html
**Signal Frequency**: 3 sources today — new strong entry

---

### 6. Post-Job Follow-Up Automation — SMS-First ("CraftBoop + SMS") — Score: 80/105
**Canonical file**: `shortlisted/service-business-follow-up.md` (EXISTING, updated)

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 4/5 | CraftBoop launched $29/mo; NiceJob $75/mo proves market; Podium/Birdeye at enterprise |
| Competitor Weakness | 4/5 | CraftBoop is email-only; SMS dramatically more effective for trades; no Jobber/HCP integration |
| LTD Viability | 4/5 | $49–59 LTD; single-purpose tools do well on AppSumo |
| No Free Tier | 3/5 | Some basic follow-up tools are free; differentiation is SMS + integration |
| Channel Access | 4/5 | r/sweatystartup, Facebook groups for all trade types, trade forums |
| Content Potential | 4/5 | "automatic Google review request", "review automation for HVAC", "post-job SMS follow-up" |
| AppSumo Fit | 4/5 | "Never lose a review again" = concrete AppSumo hook; single-purpose = easy to demo |
| Review Potential | 3/5 | Users will review if it increases Google review count |
| MRR Path | 3/5 | $29/mo natural; but can be perceived as non-essential |
| Build Feasibility | 5/5 | Twilio SMS + webhook to Jobber/HCP + review link = 1–2 week MVP |
| Boring Business Bonus | 4/5 | Field service review automation = unglamorous B2B tooling |

**Weighted Total: 80/105**

**Verdict**: BUILD
**Decision Status**: NEW
**New Signals Today**:
- HN/IH: CraftBoop just launched ($29/mo, 14-day trial) — 5-email sequence after each job; IH community active; confirmed SMS-first + job software integration is the gap CraftBoop hasn't filled
- Reddit: STARSLIFT beta (r/sweatystartup) — barbers, junk removal, lawn care, cleaners testing post-job SMS review automation; March 2025 but gap is still open in 2026
- HN/IH: ClientPing — one-tap "On my way" SMS updates = related but different (pre-job, not post-job); confirms trades love SMS automation
**Risks**: Bundled into larger FSM tools; market crowding at $29/mo tier; perceived as nice-to-have, not must-have
**Key Source Links**:
- https://www.indiehackers.com/post/craftboop-built-automated-follow-ups-for-service-businesses-just-launched-looking-for-feedback-5aa58e1c39
- https://www.craftboop.com
- https://www.reddit.com/r/sweatystartup/comments/1jnveik/looking_for_service-based_business_owners_to_beta/
- https://nicejob.com
**Signal Frequency**: 3 sources — new; growing category

---

### 7. AI Voice Answering for Sub-10-Tech Trades Shops ("Lightweight Avoca") — Score: 82/105
**Canonical file**: `shortlisted/voice-ai-trades-lightweight.md` or `ai-voice-answering-trades.md` (EXISTING, updated)

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | Avoca $1B valuation, $125M raised, booking $1B in jobs; FrontdeskAI 10K+ customers |
| Competitor Weakness | 3/5 | Avoca $1K–3.5K/mo — too expensive for small shops; but major players are rapidly entering |
| LTD Viability | 2/5 | Recurring AI call minutes = MRR model; LTD works only for setup/base usage |
| No Free Tier | 4/5 | People pay for inbound call answering; strong willingness to pay proven |
| Channel Access | 4/5 | r/HVAC, r/sweatystartup, Facebook "HVAC Business Owners" |
| Content Potential | 4/5 | "AI phone answering HVAC", "never miss a call plumber", "AI receptionist contractor" |
| AppSumo Fit | 3/5 | LTD tricky due to call costs; "setup + base minutes" tier could work |
| Review Potential | 4/5 | Very concrete ROI: "I used to miss 5 calls/day, now I miss 0" |
| MRR Path | 5/5 | Recurring value from live calls; $49–149/mo natural MRR model |
| Build Feasibility | 3/5 | Twilio + LLM + Jobber/HCP API integration = 4–6 weeks; HIPAA/voice quality are risks |
| Boring Business Bonus | 5/5 | Inbound call answering for HVAC/plumbing = deeply boring |

**Weighted Total: 82/105**

**Verdict**: EXPLORE FURTHER
**Decision Status**: NEW (multiple existing shortlisted variants)
**New Signals Today**:
- Trends: Avoca raised $125M at $1B valuation in April 2026; on track to book $1B in jobs in 2026; ServiceAgent, Estera, Frontdesk AI all on Product Hunt in 2026 confirming accelerating competition
- HN/IH: Rainslice.ai — 3 live cleaning companies in California; "handles inbound calls/SMS, creates quotes, dispatches workers" — cleaning angle validated
- HN/IH: Zirco.ai — dental AI front desk (inbound calls + insurance verification + appointment booking); same pattern for dental; 30+ practices in discovery
- White space: Avoca targets 800+ operators at $1K–3.5K/mo; sub-10-tech shops need $49–149/mo; boiler/hydronics shops, pool service, locksmith, pest control niches barely addressed
**Risks**: Avoca/ServiceAgent rapidly entering lower price tiers; call quality + HIPAA for healthcare verticals; ongoing AI costs make LTD tricky
**Key Source Links**:
- https://enterprisedna.co/resources/news/avoca-voice-ai-trades-unicorn-2026/
- https://www.producthunt.com/products/serviceagent
- https://contractortoolstack.com/software/avoca-ai/
- https://rainslice.ai
- https://news.ycombinator.com/item?id=48769010
**Signal Frequency**: 4 sources today — rapidly accelerating category

---

### 8. HVAC/Plumbing Field Manual Copilot (RAG for Equipment Docs) — Score: 82/105
**Canonical file**: `shortlisted/hvac-tech-personal-documentation.md` (EXISTING, 82/105, updated)

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 3/5 | 60K HVAC/plumbing shops under 5 employees; XOi validates enterprise end; HVAC tech pays OOP |
| Competitor Weakness | 4/5 | XOi is enterprise; ServiceTitan moving upmarket; small shops have nothing |
| LTD Viability | 4/5 | $79–149 LTD; small shop owners love one-time purchases |
| No Free Tier | 3/5 | Some tools (OneNote, photos) are free; AI value-add must be clear |
| Channel Access | 4/5 | r/HVAC, r/hvacadvice, hvac-talk.com, Facebook HVAC groups |
| Content Potential | 4/5 | "HVAC manual app for small shops", "plumbing equipment lookup tool", "field technician job notes" |
| AppSumo Fit | 4/5 | Simple RAG tool; "snap equipment photo → get relevant manual page" = demo-friendly |
| Review Potential | 3/5 | Moderate; tech-savvy HVAC techs are reviewers |
| MRR Path | 3/5 | $29–79/mo; but can be perceived as nice-to-have |
| Build Feasibility | 3/5 | RAG over equipment PDFs + Vision API equipment ID + job note template = 6–10 weeks |
| Boring Business Bonus | 5/5 | HVAC equipment documentation = deeply boring |

**Weighted Total: 82/105**

**Verdict**: EXPLORE FURTHER
**Decision Status**: NEW
**New Signals Today**:
- Trends: "Field Manual Copilot" — startupheist.com analysis ($79K MRR underneath ServiceTitan); mobile RAG tool for 2-tech shops; Bluon PartsConnect launched April 2026 (HVAC parts sourcing + Housecall Pro integration); Mainteny (AI for maintenance companies) both confirm direction; XOi owns enterprise lane
- Existing hvac-tech-personal-documentation.md (82/105, 2026-10-23) already captures this signal with new details
- New specific approach: (1) snap equipment photo → identify model → surface relevant manual pages → draft job note → generate invoice language; no migration required; narrower than XOi, simpler than ServiceTitan
**Risks**: Manufacturer manual licensing may be needed; photo ID accuracy for obscure equipment; 6–10 weeks is longer than typical MVP
**Key Source Links**:
- https://www.startupheist.com/the-field-manual-copilot-79k-mrr-underneath-servicetitan/
- https://www.bluon.com
- https://mainteny.com
- https://fieldtics.com/blog/servicetitan-alternatives
**Signal Frequency**: 2 sources — new, growing

---

## Tier 2: Worth Exploring (Score 55–74)

### Moving Company Ops Platform — Score: 72/105
**Canonical file**: `shortlisted/moving-company.md` (EXISTING)

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 3/5 | SmartMoving/Supermove exist; 16K moving companies; fragmented small operators |
| Competitor Weakness | 3/5 | Existing tools gaps in employee communication + in-field workflow |
| LTD Viability | 3/5 | $79–99 LTD; moving companies have some budget |
| No Free Tier | 3/5 | Paid market but existing tools exist |
| Channel Access | 3/5 | r/moving, movers Facebook groups, trade associations |
| Content Potential | 3/5 | "moving company software", "crew management moving" |
| AppSumo Fit | 3/5 | Moderate fit; not obvious category |
| Review Potential | 3/5 | Moderate |
| MRR Path | 3/5 | Clear monthly subscription model |
| Build Feasibility | 3/5 | CRM + quote + crew assignment + digital contract + time tracking = 5 weeks |
| Boring Business Bonus | 4/5 | Moving companies = unglamorous local service |

**Score: ~72/105**

**Verdict**: EXPLORE FURTHER
**Signal**: Reddit r/sweatystartup 2023 (still unsolved in 2026); SmartMoving/Supermove/Movegistics all have gaps in employee communication + in-field workflow; 16K moving companies in US
**Key Source**: https://www.reddit.com/r/sweatystartup/comments/10dq78u/do_sweaty_businesses_have_custom_software_needs/

---

### Roofing Job Tracker (Photos + Status + Payments) — Score: 70/105
**Canonical file**: `shortlisted/roofing-contractor-crm.md` (EXISTING)

**Verdict**: EXPLORE FURTHER
**Signal**: r/Roofing May 2026 — 15–20 jobs/month roofer using Google Sheets + phone photos + separate invoices; "10 comments confirming you're not alone"; Acculynx/JobNimbus feel like overkill; ~100K roofing contractors; strong demand for simple job photos + status + payment in one place
**Gap**: Photo-first approach (GPS-tagged, timestamped before/after) not offered by any tool in this price range
**Key Source**: https://www.reddit.com/r/Roofing/comments/1t9xbbv/anyone_else_still_piecing_roofing_jobs_together/

---

### Contractor GPS Timesheet App (Paper Replacement) — Score: 68/105
**Canonical file**: `shortlisted/multi-site-contractor-time-tracking.md` (EXISTING)

**Verdict**: EXPLORE FURTHER
**Signal**: r/Workyard — construction companies still on paper timesheets; photo clock-in (GPS + photo confirms job site, prevents buddy-punching) is underserved vs Workyard/TSheets which have awareness gaps; r/AdminAssistant confirms field service admin manually entering paper sheets into QuickBooks
**Gap**: Photo confirmation on clock-in at job site = specific differentiator; QuickBooks/Gusto payroll export
**Key Source**: https://www.reddit.com/r/Workyard/comments/1qi0i25/still_using_paper_timesheets_on_your_jobs_heres/

---

### Auto Detailing Booking + Deposit + On-Site Payment — Score: 68/105
**Canonical file**: `shortlisted/pressure-washing-detailing.md` (EXISTING)

**Verdict**: EXPLORE FURTHER
**Signal**: Industry research confirms detailing-specific payment model (on-site payment vs. send-and-wait invoice); deposit tracking for ceramic coatings; multi-visit billing; ~50K+ auto detailing businesses; mobile detailing boom post-COVID
**Gap**: Online booking with deposit → job checklist with before/after photos → on-site QR payment → review request; no tool in market built for detailing specifically
**Key Source**: https://autohustl.com/blog/best-auto-detailing-software/

---

### AI TMS / Dispatch for Small Carriers (1–10 Trucks) — Score: 67/105
**Canonical file**: `shortlisted/small-fleet-tms.md` or `owner-operator-trucking-tms.md` (EXISTING)

**Verdict**: EXPLORE FURTHER
**Signal**: FreightCoreTMS (startup explicitly targeting 1-10 trucks); Datatruck (AI-native TMS, "AI Dispatcher books loads from rate confirmation without retyping"); 66% of fleet managers report active AI adoption plans; small carriers showing 30% efficiency gains with AI dispatch
**Gap**: One-click load acceptance from load boards + auto rate confirmation reading + driver settlement generation + IFTA mileage tracking — all in one $49/mo mobile app; existing solutions too complex/expensive
**Key Source**: https://freightcoretms.com/ + https://www.datatruck.io/blog/best-tms-software-for-carriers

---

### Permit & Inspection Automation for Residential Contractors — Score: 65/105
**Canonical file**: `shortlisted/contractor-permit-tracker.md` (EXISTING)

**Verdict**: EXPLORE FURTHER
**Signal**: SolarAPP+ cut permit turnaround from weeks to same-day; NEC 2026 code cycle creating new compliance requirements; manual permit filing still dominates for solar/roofing/electrical; GoCanvas 30K+ pre-built inspection forms
**Gap**: AI permit prep tool: reads project scope → identifies permits required by jurisdiction → auto-fills application forms → tracks submission status; $49/mo for residential solar/roofing saves 2–5 hours/project
**Key Source**: https://sunspec.org/solarapp/ + https://projul.com/industries/solar-contractor/

---

### Dry Cleaner Management Software — Score: 65/105
**Canonical file**: `shortlisted/commercial-laundry-management.md` (EXISTING — update with dry cleaning specific angle)

**Verdict**: EXPLORE FURTHER
**Signal**: Rinse (10+ metro areas, 10+ years old) now hiring for AI-powered operational automation = signal that independent dry cleaners need modern tooling; most independent dry cleaners use legacy Windows-based POS from the 1990s; customer pickup request → driver route optimized → SMS status updates → invoice on delivery
**Gap**: Mobile-first dry cleaner app for independents; Rinse proves the business model works; no modern indie SaaS tool exists for this very specific workflow
**Key Source**: HN Who is Hiring October 2026 + rinse.com

---

### Instant Quote Widget for Home Service Contractors (InstaBid) — Score: 63/105
**Canonical file**: `shortlisted/contractor-quoting-estimation.md` (EXISTING)

**Verdict**: EXPLORE FURTHER
**Signal**: InstaBid Solo launched July 2026 (pre-revenue); customer-facing instant-quote wizard on contractor website; first contractor to respond wins the job; ServiceTitan's instant booking does this at enterprise scale for $250+/mo
**Gap**: Simpler LTD-priced embeddable quote widget with SMS/email notification of new leads; focus on 3–5 service types (pressure washing, lawn care, window cleaning) with pre-built pricing logic
**Key Source**: https://getinstabid.app

---

## Tier 3: Weak / Pass (Score <55)

| Idea | Score | Reason for Pass |
|------|-------|----------------|
| AI Business Diagnostic for Owner-Operators | ~48 | Unproven conversion — 100+ visitors, 0 paid; "AI coach" positioning is generic; no compliance forcing function |
| Local Service Business Directory/Classifieds | ~52 | Subscription model (not LTD compatible); Yelp/Angi/Thumbtack competition; trust is hard moat to build |
| AI Front Desk for Dental (Zirco.ai pattern) | ~50 | HIPAA complexity, enterprise sales cycle, 2–3 year timeline; better as a future expansion, not MVP focus |
| AI Lead Response for HVAC (TheSolarAI pattern) | ~55 | Strong MRR model (high 4-fig MRR validated) but LTD tricky due to ongoing AI costs; better as MRR-first play |
| Cleaning Co. Quoting/Scheduling (BlastoClean) | ~52 | $0 revenue at launch; crowded market (ZenMaid $3M/yr); differentiation unclear at current stage |
| Facilities Management AI (Metcor signal) | ~50 | Enterprise market signal; SMB FM is complex different work-order model; SLA tracking + tenant comms = niche |
| Trade Vertical AI Power Dialers (Clairvo) | ~52 | Clairvo $1M ARR at mid-market ($250/seat/mo); LTD tricky due to call costs; requires sales team for distribution |
| Vertical SaaS for AV/Event Production (Rentman) | ~56 | Rentman $15–20M ARR validates; but AV/event segment is not "boring boring"; party rental is more interesting angle |
| Mobile-First Voice-to-Document (SMASH) | ~58 | Interesting but compliance records variant (pest control, HVAC service records) already covered in pest-control.md and hvac-tech-personal-documentation.md |

---

## Top 3 Recommendations

1. **Pest Control Mobile-First / Compliance (Score: 98/105)**
   — Three active migration events (FieldSync live, FieldRoutes ServiceTitan acquisition churn, Briostack instability), chemical compliance as legal forcing function, GorillaDesk mid-market ceiling confirmed. Highest-conviction idea in portfolio for 6+ months.
   — Key source: https://news.ycombinator.com/item?id=47509571

2. **Lawn Care Chemical Application Compliance Tracker — "SprayRoute/GreenLog" (Score: 93/105)**
   — Today's competitor analysis adds best-ever gap documentation: Jobber zero chemical tracking explicitly confirmed, LMN $1,144 entry threshold, EPA stormwater 2026 new GPS-timestamp requirement = compliance urgency increasing. Standalone compliance tracker concept is cleaner than full-FSM approach.
   — Key source: https://myquoteiq.com/top-10-best-chemical-tracking-software-for-lawn-fertilization-businesses-in-2026/

3. **Flat-Rate Field Service CRM + Marketing Automation — "TrustBook" (Score: 93/105)**
   — Three independent builders (Fieldkit, ServNox, multiple Reddit threads) have independently discovered the flat-rate pricing + per-user cost pain in 2026. Competitor analysis confirms no tool under $100/mo has flat-rate pricebook + marketing automation. The "one upsell pays for the tool" ROI story is perfect for AppSumo.
   — Key source: https://www.reddit.com/r/WhichCRM/comments/1qwwl24/built_a_field_service_crm_because_i_was_tired_of/

---

## Deduplication Notes

All Tier 1 ideas mapped to existing shortlisted files. No new shortlisted files needed today — all concepts are refinements or signal reinforcement for existing tracked ideas. Key mappings:

| Today's Concept | Existing File |
|----------------|---------------|
| TrustBook / flat-rate FSM | `hvac-flat-rate-pricebook.md` |
| TradeCoast / job costing | `trade-job-cost-accounting.md` |
| GreenLog / lawn chemical compliance | `lawn-chemical-tracking-route.md` |
| FieldSync / pest control mobile-first | `pest-control.md` |
| DoorSimple / small landlord 1–20 units | `property-management.md` |
| CraftBoop SMS-first / post-job follow-up | `service-business-follow-up.md` |
| Lightweight Avoca / AI voice trades | `voice-ai-trades-lightweight.md` |
| Field Manual Copilot / equipment RAG | `hvac-tech-personal-documentation.md` |
| Rinse / dry cleaner management | `commercial-laundry-management.md` |
