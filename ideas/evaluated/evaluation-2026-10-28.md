# Idea Evaluation — 2026-10-28

**Sources**: Reddit Scanner, HN & Indie Hackers, Competitor Analysis, Trend Spotter
**Evaluator**: Claude (idea-evaluator agent)
**Raw files**: reddit-2026-10-28.md, hn-indiehackers-2026-10-28.md, competitor-analysis-2026-10-28.md, trends-2026-10-28.md

---

## Deduplication Map

| Source Idea | Canonical File | Action |
|---|---|---|
| F-Gas / Refrigeration Compliance Tracking (Reddit) | `f-gas-refrigeration-compliance.md` | **NEW** |
| Auto Detailing Vehicle-History CRM (Reddit) | `auto-detailing-crm.md` | **NEW** |
| Zirco.ai — AI Dental Front Desk (HN) | `dental-ai-front-desk.md` | **NEW** |
| Pest Control Software / FieldRoutes PITA (Reddit) | `pest-control.md` | UPDATE |
| Vertical Pest Control / OnHand.pro $2M ARR (HN) | `pest-control.md` | UPDATE (same) |
| Roofing Photo + Job Management (Reddit) | `roofing-contractor-crm.md` | UPDATE |
| Small Trucking TMS 1–5 Truck (Reddit) | `trucking-owner-operator-tms.md` | UPDATE |
| HVAC/FSM Affordable Replacement (Reddit) | `field-service-management.md` | UPDATE |
| TradeBase Flat FSM Concept (Competitor) | `field-service-management.md` | UPDATE (same) |
| ClientPing + FieldLedgr + Rainslice + Plummerly (HN) | `field-service-management.md` | UPDATE (same) |
| AI OS for Trades macro trend (Trends) | `field-service-management.md` | UPDATE (same) |
| HCP Trade-Specific Packages Signal (Trends) | `field-service-management.md` | UPDATE (same) |
| Property Management Small Landlords (Reddit) | `property-management.md` | UPDATE |
| LandlordStack Concept (Competitor) | `property-management.md` | UPDATE (same) |
| AI-Powered Facility Management Trend (Trends) | `property-management.md` | UPDATE (same) |
| Auto Repair Shop 1–3 Bay (Reddit) | `auto-repair-shop-management.md` | UPDATE |
| ShopDesk Concept (Competitor) | `auto-repair-shop-management.md` | UPDATE (same) |
| BlastoClean 100+ IH Comments (HN) | `cleaning-service-management.md` | UPDATE |
| ZenMaid $3M/yr Validated (HN) | `cleaning-service-management.md` | UPDATE (same) |
| Rainslice.ai 3 Cleaning Companies (HN) | `cleaning-service-management.md` | UPDATE (same) |
| Landscaping / GreenRoute Concept (Competitor) | `landscaping-lawn-care.md` | UPDATE |
| CraftBoop Follow-Up Automation (HN) | `trades-follow-up-review-automation.md` | UPDATE |
| InstaBid Solo — Instant Quote Wizard (HN) | `ai-quoting-estimating-trades.md` | UPDATE |
| Field-First AI / Feldy YC + TapHero (Trends) | `ai-quoting-estimating-trades.md` | UPDATE (same) |
| Voice-to-CRM for Trades (HN) | `voice-ai-trades-lightweight.md` | UPDATE |
| SMASH Voice-to-Invoice + WorkQuote (Trends) | `voice-ai-trades-lightweight.md` | UPDATE (same) |
| AI Voice Receptionists for Trades (Trends) | `ai-voice-answering-trades.md` | UPDATE |
| AI Quiz/Training for Trade Licensing (HN) | `trade-certification-exam-prep.md` | UPDATE |
| Small Fleet / Owner-Operator Trucking (Trends) | `trucking-owner-operator-tms.md` | UPDATE (same) |
| Vertical SaaS Meta-Trend (Trends) | INFO only — validates existing ideas broadly | — |
| AI Voice OS for Trades macro (Trends) | INFO only — validates field-service-management.md broadly | — |

---

## Tier 1: Strong Opportunities (Score 75+)

### 1. Dental AI Front Desk (Zirco.ai Angle) — Score: 85/105 (NEW)
**Canonical file**: `dental-ai-front-desk.md` (NEW)

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 4/5 | 100K+ dental practices; front desk turnover 40%/yr = confirmed pain; Weave/Lighthouse360 validate enterprise market; Zirco.ai founder ran 30+ discovery calls before coding |
| Competitor Weakness | 5/5 | Weave/Lighthouse360 enterprise-only; insurance verification via Playwright/Availity = technically complex moat; no LTD-priced entry for 1-2 dentist solo practices |
| LTD Viability | 4/5 | Dental practices = exact AppSumo buyer profile; tech-skeptical but cost-motivated; front desk $40–50K/yr = compelling LTD ROI |
| No Free Tier | 5/5 | No free dental AI front desk |
| Channel Access | 4/5 | DentistryIQ, r/Dentistry, dental office manager forums, Open Dental user community |
| Content Potential | 4/5 | "dental front desk software", "dental insurance verification software", "Open Dental alternatives" |
| AppSumo Fit | 4/5 | Small dental practices = decision maker = budget owner; clear ROI narrative |
| Review Potential | 4/5 | Dental community active in reviewing tools; compliance creates motivation |
| MRR Path | 4/5 | $49–99/mo after LTD; add voice AI, multi-location, EHR sync as upsells |
| Build Feasibility | 3/5 | HIPAA + multi-tenant + insurance verification (Playwright/Availity) = moderately complex; 5–7 week MVP |
| Boring Business Bonus | 4/5 | Dental = unglamorous professional services; independent practices are VC-ignored |

**Weighted Total: 85/105**
`(4×3)+(5×2)+(4×2)+(5×1)+(4×2)+(4×1)+(4×2)+(4×1)+(4×3)+(3×2)+(4×2) = 12+10+8+5+8+4+8+4+12+6+8 = 85`

**Verdict**: BUILD
**Decision Status**: NEW — first identified today
**Next Steps**: Validate insurance verification pain with 5 dental office managers; start with insurance verification bolt-on (skip voice AI initially); target Open Dental users (open-source, easier integration)
**Risks**: (1) HIPAA compliance adds significant complexity; (2) Insurance verification via browser automation (Playwright) is brittle as portals change UI; (3) Front desk staff may resist AI tool
**Key Source Links**:
- https://news.ycombinator.com/item?id=47385090 (Zirco.ai Show HN)
- https://zircoai.vercel.app/
- https://www.weave.com/ (enterprise competitor)
**Signal Frequency**: 1 source — new today, high quality (HN + 30 discovery calls done)

---

### 2. F-Gas / Refrigeration Compliance Tracking Software — Score: 83/105 (NEW)
**Canonical file**: `f-gas-refrigeration-compliance.md` (NEW)

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 4/5 | EU F-Gas regulation tightened 2026; r/refrigeration thread confirms paper+WhatsApp workflow universal; Wintac (DOS/MS Access) dead = active migration; UK REFCOM ~13K certified companies |
| Competitor Weakness | 5/5 | Joblogic expensive for solo; FTrack £15/user; Field Ascend £10/user (temporary EOY pricing); no affordable F-Gas native tool under £10/user/mo |
| LTD Viability | 4/5 | £99–149 LTD for solo UK contractors; regulatory compliance = high-urgency purchase |
| No Free Tier | 5/5 | No free F-Gas compliance tracking tool |
| Channel Access | 3/5 | UK/EU-specific; REFCOM community; r/refrigeration; HVAC/R trade forums; limited US AppSumo reach |
| Content Potential | 4/5 | "F-Gas software UK", "refrigerant log software", "F-Gas compliance tracking" — low competition, regulatory urgency |
| AppSumo Fit | 2/5 | UK/EU market = significantly reduced AppSumo reach; consider direct UK SaaS launch instead |
| Review Potential | 4/5 | Regulated trades leave strong reviews for compliance tools; switching costs high once records are in |
| MRR Path | 4/5 | Annual F-Gas regulation updates justify SaaS; UK → EU → US HVAC expansion path |
| Build Feasibility | 4/5 | F-Gas log + job tracking + compliance report generator = 4–5 week MVP; regulatory forms are documented |
| Boring Business Bonus | 5/5 | Refrigeration contracting = deeply boring trade; EU regulatory requirement = non-discretionary |

**Weighted Total: 83/105**
`(4×3)+(5×2)+(4×2)+(5×1)+(3×2)+(4×1)+(2×2)+(4×1)+(4×3)+(4×2)+(5×2) = 12+10+8+5+6+4+4+4+12+8+10 = 83`

**Verdict**: BUILD (UK-first launch, then expand)
**Decision Status**: NEW — first identified today
**Next Steps**: Research REFCOM certification database to size UK market; validate with 3 UK refrigeration engineers; partner with REFCOM for launch distribution
**Risks**: (1) UK/EU market limits AppSumo LTD reach; (2) F-Gas regulations vary UK vs EU post-Brexit; (3) Smaller TAM than general FSM
**Key Source Links**:
- https://www.reddit.com/r/refrigeration/comments/1s6a5bm/what_software_are_you_guys_using/
- https://www.reddit.com/r/ProHVACR/comments/1k1n7ba/allinone_software/
- https://www.joblogic.com/solutions/f-gas/ (main competitor)
**Signal Frequency**: 2 subreddit threads — new today, regulatory urgency is real

---

### 3. Auto Detailing Vehicle-History CRM — Score: 83/105 (NEW)
**Canonical file**: `auto-detailing-crm.md` (NEW)

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 4/5 | $15B+ US auto detailing industry growing 6%/yr; multiple 2026 comparison articles confirm vehicle-history gap = #1 missing feature across all tools |
| Competitor Weakness | 4/5 | No purpose-built vehicle-centric detailing tool; Jobber/Square miss vehicle-per-customer data model; DaySmart has generic version not detailing-specific |
| LTD Viability | 4/5 | $199–399 LTD; detailers are small business owners; clear ROI vs generic tools |
| No Free Tier | 3/5 | Square free tier exists but completely non-specific; DaySmart has limited free option |
| Channel Access | 4/5 | r/AutoDetailing (200K+), r/PressureWashingGrowth, YouTube detailing community (very active) |
| Content Potential | 4/5 | "auto detailing software", "mobile detailing app", "detailing CRM" — decent SEO potential |
| AppSumo Fit | 4/5 | Detailers = small business owners, deal-seekers; no auto detailing software on AppSumo |
| Review Potential | 4/5 | Active online community; detailers share tools heavily on YouTube/Reddit |
| MRR Path | 4/5 | $49–79/mo after LTD; multi-location, ceramic coating bay scheduling, route optimization upsells |
| Build Feasibility | 4/5 | Vehicle-object CRM + SMS + package templates + route clustering = 3–4 week MVP |
| Boring Business Bonus | 4/5 | Auto detailing = unglamorous local service; mobile-first; not VC-funded |

**Weighted Total: 83/105**
`(4×3)+(4×2)+(4×2)+(3×1)+(4×2)+(4×1)+(4×2)+(4×1)+(4×3)+(4×2)+(4×2) = 12+8+8+3+8+4+8+4+12+8+8 = 83`

**Verdict**: BUILD
**Decision Status**: NEW — first identified today
**Next Steps**: Validate vehicle-centric data model with 5 mobile detailers; confirm ceramic coating bay-time workflow (2–3 day turnaround); build MVP with vehicle as core object (not customer)
**Risks**: (1) Mobile detailers are very price-sensitive; (2) Ceramic coating shops have different needs than mobile detailers — two sub-segments; (3) No-show rate (~12–18%) means scheduling app alone may not be sufficient
**Key Source Links**:
- https://autohustl.com/blog/best-auto-detailing-software/
- https://myquoteiq.com/top-10-best-invoicing-software-for-auto-detailing-businesses-in-2026/
- https://www.reddit.com/r/AutoDetailing/ (community validation)
**Signal Frequency**: 1 source (aggregated industry content) — new today

---

### 4. Pest Control Software — Score: 95/105 (STABLE)
**Canonical file**: `pest-control.md` (EXISTING, updated)

**New Signals Today**:
- Reddit: FieldRoutes confirmed "huge PITA" for new operators — buggy, exterior bait stations don't save, character limits on service reports, hard cancellation; GorillaDesk $49–149/mo gaining traction; QuoteIQ $29.99+ entering = validates sub-$100 tier; PestPac $800–1,500/mo enterprise = massive price gap for small operators (<10 routes)
- HN (OnHand.pro, 448 pts/182 comments reconfirmed): commenter reports running pest control SaaS at $2M ARR from ~1,400 customers; founder acquiring small residential operator to tech-enable from inside; voice-to-CRM for gloved techs confirmed as #1 unmet AI feature
- Trends: AI voice agents for pest-specific vertical = confirmed white space; pest/pool service least covered in HCP's July 2026 trade packages = explicit gap left

**Score remains 95/105** — no upward revision today; signals confirm and repeat prior findings

**Key Source Links**:
- https://www.reddit.com/r/PestControlIndustry/comments/1jl9a9e/fieldroutes_has_been_a_huge_pita_for_me_as_a_new/
- https://servicebusinessacademy.org/best-fieldroutes-alternatives-pest-control-2026/
- https://news.ycombinator.com/item?id=47509571 (OnHand.pro $2M ARR)
**Signal Frequency**: 3+ concurrent sources — increasing, 20+ consecutive days

---

### 5. Flat-Rate Field Service Management — Score: 99/105 (STABLE)
**Canonical file**: `field-service-management.md` (EXISTING, updated)

**New Signals Today**:
- Reddit: 9-tech HVAC "still using spreadsheets and group texts" reconfirmed; FieldEdge cloud sync failures + blank invoices + mobile app crashes; scheduling mistakes as company grows; ServiceTitan ETFs $16K–$67K documented
- HN/IH: FieldLedgr (free field service PLG), ClientPing (mobile+offline-first, one-tap SMS), Plummerly (plumbing-specific, build-in-public), Rainslice.ai (3 cleaning companies on full AI ops) = four concurrent builders validating gap
- Competitor: TradeBase concept — flat $49/mo unlimited techs (HVAC/plumbing/electrical); maintenance agreement auto-scheduling as first-class feature; offline mobile; native QB sync; competitor pricing matrix confirms $49–$245/tech dead zone unoccupied
- Trends: Avoca $125M/$1B (Meritech+GC), Probook $40M (a16z+Sequoia), Dalton Mills $9.2M ("Replit for trades"), Elyos AI £10M, UpSmith $10M, Sophiie AUD $5M, Stormy $1.7M = $200M+ institutional capital in Q2-Q4 2026; sub-$100/mo flat + unlimited users + offline-capable STILL uncaptured by all VC-backed entrants; HCP trade packages (July 2026) validates verticalization but locks/dismisses/isolates pest control + pool service

**Score remains 99/105** — strongest-ever macro validation signal

---

### 6. Auto Repair Shop Management — Score: 100/105 (STABLE)
**Canonical file**: `auto-repair-shop-management.md` (EXISTING, updated)

**New Signals Today**:
- Reddit: Roofing photo management signal cross-confirms contractor photo documentation gap; auto repair shops have identical need (before/after photos for DVI approval)
- Competitor: ShopDesk concept — $59/mo flat (unlimited techs, 1 location), DVI with customer SMS approval, QBO sync, no annual contract; Mitchell 1 billing chaos (January 2026 BBB: 4 charges/month = $1,200 unexplained); Tekmetric "too many clicks"; Shopmonkey 2.0 backlash ongoing; Garage360/GreaseGoose at $39–$99/mo = new budget alternatives with tiny mindshare

**Score remains 100/105** — stable at max

---

### 7. Cleaning Business Management — Score: 99/105 (STABLE)
**Canonical file**: `cleaning-service-management.md` (EXISTING, updated)

**New Signals Today**:
- HN/IH: BlastoClean Oct 2026 IH launch = 100+ comments (one of IH's most-discussed cleaning software threads ever); job costing (quoted vs actual time + true W-2 vs 1099 profit per job) = differentiated angle ZenMaid doesn't cover; "setup friction = #1 barrier" → white-glove onboarding as GTM wedge
- ZenMaid $3M/yr case study reconfirmed (bootstrapped 11 years, $250K/mo ARR); gap ZenMaid leaves: profitability analytics, commercial janitorial, international markets
- Rainslice.ai (3 live cleaning company clients, AI runs entire ops 24/7) = AI-native ops layer signals future product direction; "supervised autonomy" version = lower trust threshold

**Score remains 99/105** — stable

---

### 8. Landscaping / Lawn Care Management — Score: 99/105 (STABLE)
**Canonical file**: `landscaping-lawn-care.md` (EXISTING, updated)

**New Signals Today**:
- Competitor: GreenRoute concept — $49/mo flat (unlimited crew members); route optimization included (not add-on); recurring job billing + one-click seasonal activation; EPA chemical/fertilizer compliance log; flat per-company pricing; crew time clock tied to job records for real job costing; 600K+ landscaping businesses, LMN at $297+/mo kills solo/small operators
- Trends: Service Autopilot complaints ("no automations, tons of human error"); Yardbook no-snow gap; route optimization add-on pricing pain; equipment maintenance tracking missing

**Score remains 99/105** — stable

---

### 9. Property Management for Small Landlords — Score: 100/105 (STABLE)
**Canonical file**: `property-management.md` (EXISTING, updated)

**New Signals Today**:
- Reddit: Building Link in active decay (email alerts stopped, error codes daily); Appfolio Smart Maintenance auto-assigns incorrectly; Yardi mobile can't show work orders; small landlords (5–30 units) hit spreadsheet wall at ~10 units
- Competitor: LandlordStack concept — $29/mo flat (unlimited units), zero tenant ACH fees, maintenance portal with vendor management, Schedule E export; AppFolio 50-unit floor hard-coded (excludes ~7M landlords); Baselane no maintenance tracking; no single tool combines accounting + maintenance for sub-50-unit landlords
- Trends: Baselane gaining traction (banking + rent collection + bookkeeping) but no maintenance; Theos RFM (3D facility management) signals commercial FM segment; AI-native landlord software (lease renewals via SMS, AI maintenance triage) = white space for sub-10-unit landlords

**Score remains 100/105** — stable at max

---

### 10. Small Trucking TMS — Score: 94/105 (STABLE)
**Canonical file**: `trucking-owner-operator-tms.md` (EXISTING, updated)

**New Signals Today**:
- Reddit: Enterprise TMS (Truckbase $3,500+/yr, McLeod, TMW) priced for 50+ truck fleets; owner-operators stuck on Excel; affordable options ($30–60/mo) lack driver pay settlements, IFTA, load board integrations, document management; "can't find anything that does it all for under $100/mo"
- Trends: 1-25 truck owner-operator segment confirmed woefully underserved; TenTrucks, Truckbase, AscendTMS serve this space but not AI-native; Kebra ($500K seed, Sep 2026) = AI field-service docs for trucking; voice-to-BOL, automated IFTA from ELD, driver settlement automation = confirmed white space; InstaLILY $60M Series B validates logistics SaaS at scale

**Score remains 94/105** — stable

---

### 11. Roofing Contractor CRM — Score: 92/105 (STABLE)
**Canonical file**: `roofing-contractor-crm.md` (EXISTING, updated)

**New Signals Today**:
- Reddit: Residential roofers (15–20 jobs/month) managing job status in Google Sheets, crews on personal phones, invoices sent separately; ServiceTitan $245–500/tech/month; JobNimbus three-layer pricing lands 2–3× sticker; no photo-first + status + payment tool at simple flat pricing
- **New specific gap**: "Job card = photos + status + invoice in one view" — confirmed as #1 missing workflow; crew uploads before/after from phone; customer gets link to approve + pay; $99/mo for 3 users. This is distinct from JobNimbus (CRM/estimate-heavy) — a simpler photo-first job management angle

**Score remains 92/105** — the photo-first angle is additive to existing thesis

---

### 12. AI Voice Answering for Trades — Score: 91/105 (↑2)
**Canonical file**: `ai-voice-answering-trades.md` (EXISTING, updated)

**New Signals Today**:
- Trends: AI voice receptionist market entering early mainstream adoption; 5-10% of SMB contractors have tried it; Trillet $49/mo (150 min), Marlie.ai $49/mo (250 min), Hey Rosie, Frontdesk AI (10,000+ businesses), CSflow (YC-backed trades focus), Wakeman (roofing/restoration focus) = 6 concurrent products at $49-500/mo
- **New score driver**: Frontdesk AI at 10,000+ businesses = strongest mass adoption signal to date; Wakeman launch specifically for plumbing/HVAC confirms specialist market; bilingual English/Spanish agent = confirmed white space no current player addresses; trades-integrated dispatch (call books job end-to-end) = unoccupied feature
- Score ↑2: Frontdesk AI 10K+ businesses validates at-scale adoption; specialist verticals (pest, pool) still uncovered

**Score: 91/105** (previously 89)

---

### 13. AI Quoting & Estimating for Trades — Score: 95/105 (STABLE)
**Canonical file**: `ai-quoting-estimating-trades.md` (EXISTING, updated)

**New Signals Today**:
- HN/IH: InstaBid Solo — embeddable instant-quote wizard; conversion data (price sensitivity analytics) shows which price brackets close best in market = differentiator; multi-tenant portal confirmed
- Trends: Feldy (YC-backed, 200+ paying customers) = AI field-first capture for home services; TapHero (video + remote diagnostics); Theos RFM (3D facility management) all validate photo/video → estimate workflow

**Score remains 95/105** — stable

---

### 14. Voice-to-CRM / Voice-First Field Tools — Score: 90/105 (↑2)
**Canonical file**: `voice-ai-trades-lightweight.md` (EXISTING, updated)

**New Signals Today**:
- HN: Voice-to-CRM for trades — HN pest control thread: multiple commenters independently raised hands-free data entry as obvious AI win; tech speaks 30-sec job summary while driving → AI extracts customer, job type, materials, time, notes, next service, parts → exports to Jobber/ServiceTitan/Google Sheets; $19–29/mo per tech OR $59/tech LTD; no competitor has this feature
- Trends: SMASH Voice-to-Invoice (built by tree service operator); WorkQuote (built by tree service operator) — two operator-built products converging on same insight: quoting on-site via voice/phone is faster than typing; "two founder-market-fit examples from people who lived the pain" = strong authentic demand signal; voice-to-quote with automatic markup/margin by job type = unbuilt feature
- Score ↑2: Two operator-built products + HN 182-comment validation = highest authenticity signal for voice-first field tools yet

**Score: 90/105** (previously 88)

---

### 15. Post-Job Follow-Up Automation (CraftBoop) — Score: 98/105 (STABLE)
**Canonical file**: `trades-follow-up-review-automation.md` (EXISTING, updated)

**New Signals Today**:
- HN/IH: CraftBoop at $29/mo confirmed live with "a few users" (just launched); email-only = weakness vs SMS-first alternative; 5-email post-job sequence = validates concept but misses channel preference
- ClientPing (HN) = one-tap SMS "On my way / Running late / Job complete" = adjacent confirmation that SMS is the native channel for trades + customers
- Gap confirmed: SMS-first + review gating (unhappy → private feedback before public ask) = unbuilt combination

**Score remains 98/105** — stable

---

### 16. Trade Certification Exam Prep (AI QuizTool) — Score: 82/105 (↑4)
**Canonical file**: `trade-certification-exam-prep.md` (EXISTING, updated)

**New Signals Today**:
- HN (pest control thread): founder confirmed "no reliable test/quiz prep tool available online for pest control licensing, just some free ones with errors" — passed pest control training in 13 days using custom GPT (company record); ~500K+ tradespeople enter apprenticeships annually; every trade has required exams
- **Score driver**: Founder validated the gap by actually building a custom GPT and using it to break company records — highest authenticity signal; EPA 608 (HVAC refrigerant handling), pest control licensing, electrical journeyman, plumbing exams = large mandatory certification market
- Score ↑4 (78→82): Founder-market-fit signal (pest control founder built GPT to pass exam) is rare and high-value

---

## Tier 2: Worth Exploring (Score 55–74)

None new today. All signals either update Tier 1 ideas or are too narrow.

### AI Home Services OS (Rainslice/Stormy) — Score: 65/105 (watching)
- Rainslice.ai (3 live cleaning company clients, "AI agents run entire business 24/7") = early signal of what full-autonomy home services AI looks like
- Stormy ($1.7M, YC) = command layer for physical ops with AI agents
- Both are better as signals that CONFIRM field-service-management.md potential rather than standalone opportunities
- **Why not Tier 1**: AI inference costs = LTD unviable; "fully autonomous" trust barrier = slow adoption; better as V2/roadmap item for FSM tools rather than standalone

---

## Tier 3: Weak / Pass (Score <55)

| Idea | Score | Reason for Pass |
|------|-------|----------------|
| Zirco.ai Voice AI specific implementation | — | Captured in dental-ai-front-desk.md (different but related) |
| Plummerly standalone plumbing management | 55/105 | Pre-revenue, solo dev; better served as signal that field-service-management.md is valid; plumbing-specific = absorbed into FSM file |
| FieldLedgr free model specifically | 40/105 | Free model without monetization plan = hard to copy commercially; LTD version of the idea captured in FSM file |
| AI satellite estimating for landscaping (standalone) | 55/105 | Duranta AI $7M seed already here; better as feature within landscaping-lawn-care.md |
| Vertical SaaS meta-trend as standalone product | N/A | Research/macro signal — all actionable ideas already captured in existing shortlisted files |

---

## Top 3 Recommendations

1. **Dental AI Front Desk** — Score: 85/105 — **NEW TODAY**
   Insurance verification alone takes 2–3 hours/day manually. Weave/Lighthouse360 are enterprise-only. No LTD-priced entry-level version exists for the 100K+ solo/2-dentist practices. Zirco.ai's 30+ discovery calls + HIPAA-compliant architecture = real product with early traction. The "dental front desk costs $40–50K/year with 40% turnover" narrative writes its own AppSumo listing.
   → Key source: https://news.ycombinator.com/item?id=47385090

2. **F-Gas Refrigeration Compliance Tracking** — Score: 83/105 — **NEW TODAY**
   UK F-Gas regulation tightened in 2026 with immediate regulatory urgency. Solo refrigeration engineers confirmed running on paper + WhatsApp. Wintac is dead (activation servers down). No affordable tool under £10/user/mo exists. UK/EU market limits AppSumo but direct UK SaaS launch with REFCOM partnership = strong channel.
   → Key source: https://www.reddit.com/r/refrigeration/comments/1s6a5bm/what_software_are_you_guys_using/

3. **Auto Detailing Vehicle-History CRM** — Score: 83/105 — **NEW TODAY**
   No tool stores vehicle-centric service history (customer brings 3 different cars). No-show problem (12–18%) + ceramic coating bay time (2–3 days) = scheduling complexity generic tools can't handle. r/AutoDetailing has 200K+ members. First auto detailing tool on AppSumo = first-mover opportunity.
   → Key source: https://autohustl.com/blog/best-auto-detailing-software/

---

## Shortlisted Files Updated Today

| File | Action | Score | Change |
|------|--------|-------|--------|
| `dental-ai-front-desk.md` | CREATED | 85/105 | NEW |
| `f-gas-refrigeration-compliance.md` | CREATED | 83/105 | NEW |
| `auto-detailing-crm.md` | CREATED | 83/105 | NEW |
| `pest-control.md` | Signal History appended | 95/105 | Stable |
| `field-service-management.md` | Signal History appended | 99/105 | Stable |
| `auto-repair-shop-management.md` | Signal History appended | 100/105 | Stable |
| `landscaping-lawn-care.md` | Signal History appended | 99/105 | Stable |
| `property-management.md` | Signal History appended | 100/105 | Stable |
| `trucking-owner-operator-tms.md` | Signal History appended | 94/105 | Stable |
| `cleaning-service-management.md` | Signal History appended | 99/105 | Stable |
| `roofing-contractor-crm.md` | Signal History appended | 92/105 | Stable |
| `ai-voice-answering-trades.md` | Signal History appended | 91/105 | ↑2 |
| `ai-quoting-estimating-trades.md` | Signal History appended | 95/105 | Stable |
| `voice-ai-trades-lightweight.md` | Signal History appended | 90/105 | ↑2 |
| `trades-follow-up-review-automation.md` | Signal History appended | 98/105 | Stable |
| `trade-certification-exam-prep.md` | Signal History appended | 82/105 | ↑4 |
