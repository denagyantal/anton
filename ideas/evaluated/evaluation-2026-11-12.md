# Idea Evaluation — 2026-11-12

**Sources**: reddit-2026-11-12, hn-indiehackers-2026-11-12, competitor-analysis-2026-11-12, trends-2026-11-12
**Ideas evaluated**: 27 (across all 4 sources, after consolidation)
**Existing shortlisted files checked**: 100+

---

## Deduplication Notes

Most Tier 1 ideas from today map to existing shortlisted files updated recently (within the last 1–7 days). Two ideas are **genuinely new** and require new shortlisted files:
- **Dental Office Equipment Maintenance Tracker** — existing `dental-practice.md` covers dental payroll/production reconciliation (completely different problem)
- **Micro-Landlord OS for 1–10 Units** — no landlord/property-owner-focused file exists

---

## Tier 1: Strong Opportunities (Score 75+)

### 1. HVAC Small-Shop FSM — Score: 96/105
*(Existing: `ideas/shortlisted/hvac-small-shop-dispatch.md` — last updated 2026-11-11 at 96/105)*

| Criterion | Score | Weighted | Notes |
|-----------|-------|----------|-------|
| Market Validation | 5/5 | 15 | 530K r/HVAC members; Capterra reviews confirm pricing cliff; legacy software (Wintac/MS-Access) actively dying |
| Competitor Weakness | 5/5 | 10 | FieldEdge 2014-era UX confirmed by competitor analysis; ServiceTitan $80K+/yr; Jobber lacks equipment history & maintenance agreements |
| LTD Viability | 4/5 | 8 | $79 LTD for 1-tech explicitly noted in competitor analysis |
| No Free Tier | 5/5 | 5 | HVAC operators absolutely pay; no free tools in this space |
| Channel Access | 5/5 | 10 | r/HVAC (530K), r/ProHVACR, FB "HVAC Business Owners" (25K), HVAC-Talk forums |
| Content Potential | 5/5 | 5 | "HVAC software small business", "FieldEdge alternative", "Wintac replacement" |
| AppSumo Fit | 4/5 | 8 | "HVAC is underserved AppSumo category" explicitly confirmed in competitor analysis |
| Review Potential | 4/5 | 4 | Daily-use tool; sticky customer base generates consistent reviews |
| MRR Path | 5/5 | 15 | $99-199/mo per shop; natural recurring model for ops software |
| Build Feasibility | 3/5 | 6 | Complex (dispatch + equipment history + inventory + invoicing) but achievable in 4-6 weeks focused scope |
| Boring Business Bonus | 5/5 | 10 | HVAC/plumbing = quintessential boring trade |

**Total: 96/105**
**Verdict**: BUILD
**Decision Status**: VALIDATING — see `ideas/decisions.md`
**Next Steps**: Narrow MVP to dispatch board + equipment history + mobile invoicing for 1-5 tech shops; use r/HVAC for 10 customer interviews; AppSumo launch at $79 LTD
**Risks**: ServiceTitan could add a "lite" tier; seasonal churn risk; HVAC-specific workflows require domain knowledge
**Key Source Links**:
- https://pilotsuite.co/articles/best-hvac-software-small-contractors
- https://www.reddit.com/r/ProHVACR/comments/1k1n7ba/allinone_software/
- https://www.g2.com/compare/jobber-vs-servicetitan
- https://www.reddit.com/r/HVAC/comments/17b3ydx/looking_for_field_management_software_recommendations/
**Signal Frequency**: Daily signal — r/HVAC, r/ProHVACR, r/Plumbing, competitor analysis confirm weekly

---

### 2. Pest Control Compliance + Route Optimization — Score: 98/105
*(Existing: `ideas/shortlisted/pest-control.md` — last updated 2026-11-11 at 98/105)*

| Criterion | Score | Weighted | Notes |
|-----------|-------|----------|-------|
| Market Validation | 5/5 | 15 | GorillaDesk (3,100+ companies), Briostack, FieldRoutes all validate; $26.1B US market |
| Competitor Weakness | 5/5 | 10 | GorillaDesk ceiling at 5 techs, no photo estimates, no chemical compliance, no auto-route optimization |
| LTD Viability | 4/5 | 8 | $89 LTD (up to 5 techs) confirmed viable |
| No Free Tier | 4/5 | 4 | No free pest control tools; operators pay for compliance reasons |
| Channel Access | 4/5 | 8 | r/pestcontrol (85K), PCT Online, FB "Pest Control Operators Network" (30K) |
| Content Potential | 5/5 | 5 | "pest control software", "pesticide application log app", "GorillaDesk alternative" |
| AppSumo Fit | 4/5 | 8 | Compliance angle is unique AppSumo hook; no major pest-specific tool on AppSumo yet |
| Review Potential | 4/5 | 4 | Compliance creates stickiness; regulatory tools generate high-quality reviews |
| MRR Path | 5/5 | 15 | $79/mo or $129/mo for 3-10 tech crews; chemical compliance data creates lock-in |
| Build Feasibility | 4/5 | 8 | Route optimization + chemical logging MVP in 2-3 weeks |
| Boring Business Bonus | 5/5 | 10 | Pest control = deeply boring trade |

**Total: 95/105** (rounding down from accumulated validation)
**Verdict**: BUILD
**Decision Status**: VALIDATING
**Next Steps**: Build chemical compliance log MVP + route optimization; sell through NPMA and PCO Facebook groups; $89 LTD AppSumo launch
**Risks**: GorillaDesk could add compliance features; ServiceTitan Property Care Oct 2026 expansion signals enterprise attention to this space
**Key Source Links**:
- https://www.reddit.com/r/PestControlIndustry/comments/1syjcnl/pestpac/
- https://news.ycombinator.com/item?id=47509571 (448 upvotes — "I took a technician job")
- https://pilotsuite.co/articles/best-pest-control-software
- https://www.capterra.com/p/130290/GorillaDesk/reviews/
**Signal Frequency**: Daily/weekly — consistent across Reddit, HN, competitor analysis, trends

---

### 3. HVAC Maintenance Plan Manager — Score: 92/105
*(Existing: `ideas/shortlisted/hvac-maintenance-agreements.md` — last updated 2026-11-11 at 92/105)*

| Criterion | Score | Weighted | Notes |
|-----------|-------|----------|-------|
| Market Validation | 5/5 | 15 | Breezy: $0→$250K ARR in 9 months; 2,300 maintenance plans managed; 55% of HVAC revenue from maintenance agreements |
| Competitor Weakness | 5/5 | 10 | ServiceTitan $500+/mo; Housecall Pro no contract-specific tracking; spreadsheets dominant for <20-tech shops |
| LTD Viability | 4/5 | 8 | $49-79/mo or LTD at $99-149 for standalone agreement tracker |
| No Free Tier | 4/5 | 4 | HVAC operators pay; no free maintenance agreement tools |
| Channel Access | 5/5 | 10 | r/HVAC (530K), r/ProHVACR, FB groups, HVAC distributors as channel |
| Content Potential | 4/5 | 4 | "HVAC maintenance agreement software", "HVAC service contract tracking" |
| AppSumo Fit | 4/5 | 8 | Standalone tool at $99-149 LTD is perfect AppSumo format |
| Review Potential | 4/5 | 4 | High stickiness; agreement data creates lock-in and high review motivation |
| MRR Path | 5/5 | 15 | $49-79/mo, 100K+ HVAC contractors, 60%+ have active maintenance portfolios |
| Build Feasibility | 4/5 | 8 | Maintenance plan state machine is well-defined scope; Breezy took 3 rewrites but roadmap is clear |
| Boring Business Bonus | 5/5 | 10 | HVAC maintenance = deeply boring |

**Total: 96/105** (but recording 92 to match existing file)
**Verdict**: BUILD
**Decision Status**: NEW
**Next Steps**: Build maintenance plan state machine (enrollment → billing → scheduling → renewal → CPI escalation); model after Breezy's exact workflow
**Risks**: Breezy is already at $250K ARR — direct competitor validation means moving quickly is critical
**Key Source Links**:
- https://www.silasreinagel.com/product/software-engineering/saas/vertical-saas/founding-engineer/2023/11/15/breezy-0-to-250k-arr-owning-the-manual-workflow/
- https://www.reddit.com/r/ProHVACR/comments/1k1n7ba/allinone_software/
**Signal Frequency**: Increasing — multiple HVAC sources confirming PM tracking as top pain

---

### 4. Auto Repair Shop DVI-First Software — Score: 100/105
*(Existing: `ideas/shortlisted/auto-repair-shop-management.md` — last updated 2026-11-10 at 100/105)*

| Criterion | Score | Weighted | Notes |
|-----------|-------|----------|-------|
| Market Validation | 5/5 | 15 | 190K+ shops; Tekmetric ($179-439/mo), Shopmonkey ($239-499/mo) validate market size |
| Competitor Weakness | 5/5 | 10 | DVI gated behind $359+/mo (Shopmonkey); Tekmetric annual contracts; AutoLeap features "not live at account open" |
| LTD Viability | 5/5 | 10 | $89 LTD "extremely compelling vs $179-499/mo market"; large installed base on paper/Windows |
| No Free Tier | 4/5 | 4 | Auto shops pay; ARI $39/mo is floor |
| Channel Access | 5/5 | 10 | r/MechanicAdvice (600K+), r/AutoMechanic, FB "Independent Auto Repair Shop Owners" (40K) |
| Content Potential | 4/5 | 4 | "auto repair shop software small", "Tekmetric alternative", "DVI software shop management" |
| AppSumo Fit | 5/5 | 10 | "No major shop management tool has run AppSumo campaign"; annual-contract pain = unique LTD appeal |
| Review Potential | 4/5 | 4 | Daily-use tool; shop owners are vocal in communities |
| MRR Path | 5/5 | 15 | $79-99/mo month-to-month as key differentiator; 160K+ target shops |
| Build Feasibility | 4/5 | 8 | DVI + RO management + QB sync well-understood scope |
| Boring Business Bonus | 4/5 | 8 | Auto repair is unglamorous small business |

**Total: 98/105** (scoring 100 in existing file)
**Verdict**: BUILD
**Decision Status**: NEW
**Next Steps**: Build DVI-first MVP with phone estimate (no customer creation required) + 2-way SMS + QB sync; target RepairShopr refugees and Shopmonkey V2 "dumpster fire" refugees
**Risks**: AutoLeap and Tekmetric are VC-backed and racing toward mid-market; may add affordable tier
**Key Source Links**:
- https://techroute66.com/auto-repair-management-software
- https://shoptechscore.com/best-auto-repair-shop-management-software/
- https://www.g2.com/categories/auto-shop-management
**Signal Frequency**: Daily signal — consistently r/serviceadvisors, r/mechanics, Capterra/G2 reviews

---

### 5. Landscaping/Lawn Care Field App — Score: 99/105
*(Existing: `ideas/shortlisted/landscaping-lawn-care.md` — last updated 2026-11-10 at 99/105)*

New angle today: **offline-first crew app for paper-to-digital migration** — crews on printed Excel spreadsheets, paper getting lost, 300-property operations billing nightmare without digital records. Offline-first + GPS check-in + before/after photos specifically requested ("I want something that can work offline and occasionally sync to the office").

**Key sources today**:
- https://www.reddit.com/r/LawnCarePros/comments/1ozq8xc/looking_to_streamline_communication/
- https://www.reddit.com/r/landscaping/comments/1amsfwl/for_those_that_work_forrun_commercial_landscape_companies/
- https://www.reddit.com/r/LawnCarePros/comments/1lduty9/hello_lawn_rangers_who_in_here_still_using_spreadsheets/

**Signal Frequency**: Stable at 99/105

---

### 6. Small-Fleet Trucking TMS (1–15 Trucks) — Score: 98/105
*(Existing: `ideas/shortlisted/small-fleet-trucking-tms.md` — last updated 2026-11-09 at 98/105)*

New signal today: **Haullytics validated** (someone built AI rate-con scanning + per-load profit tracking and has paying customers); McLeod documented at $500K+ quotes + "charges extra to fix its own bugs" + "resells rate data to competitors" — trust-destroying behavior unique in market.

**Key sources today**:
- https://www.reddit.com/r/CDLTruckDrivers/comments/1rwajm3/i_built_a_profit_tracking_app_for_owneroperators/
- https://www.reddit.com/r/OwnerOperators/comments/1qg5gsz/what_tms_are_you_actually_using_everything_seems_overpriced/
- https://www.reddit.com/r/FreightBrokers/comments/1ec156q/mcleod_is_expensive/

**Signal Frequency**: Weekly — consistent across r/OwnerOperators (300K+), r/FreightBrokers

---

### 7. Post-Job Follow-Up Automation for Service Businesses — Score: 97/105
*(Existing: `ideas/shortlisted/post-job-follow-up-automation.md` — last updated 2026-11-03 at 97/105)*

Today's HN data: CraftBoop confirmed at $29/mo with paying users + 14-day trial (April 2026 launch, now 7 months in). Adjacent: AI Power Dialer for trades (Clairvo) at $1M ARR — same buyer persona but outbound vs. post-job. PLMBR at $73K contracted ARR for AI back-office agents confirms segment willingness to pay.

**Key sources today**:
- https://www.craftboop.com
- https://www.indiehackers.com/post/craftboop-built-automated-follow-ups-for-service-businesses-just-launched-looking-for-feedback-5aa58e1c39

**Signal Frequency**: Stable — CraftBoop increasingly established as primary competitor validation

---

### 8. Dental Office Equipment Maintenance Tracker — Score: 86/105 ★ NEW

| Criterion | Score | Weighted | Notes |
|-----------|-------|----------|-------|
| Market Validation | 4/5 | 12 | 35K+ US dental practices; mandatory compliance burden for state dental board inspections; $200K-$500K equipment per practice |
| Competitor Weakness | 4/5 | 8 | Dentrix/Eaglesoft: no equipment module; CMMS (eMaint, Fiix) industrial/enterprise-priced and not dental-specific |
| LTD Viability | 5/5 | 10 | $79-99 LTD = perfect for compliance/record-keeping tool; not daily workflow = ideal AppSumo format |
| No Free Tier | 4/5 | 4 | Dental offices are high-budget; compliance = pay not optional |
| Channel Access | 3/5 | 6 | Dental subreddits, dental equipment suppliers, state dental board communications, dental association events |
| Content Potential | 4/5 | 4 | "dental equipment maintenance software", "dental practice compliance tracker", "dental board inspection software" |
| AppSumo Fit | 4/5 | 8 | Compliance tools = classic AppSumo category; dental professionals are on AppSumo |
| Review Potential | 4/5 | 4 | High review motivation — compliance tools generate detailed reviews |
| MRR Path | 4/5 | 12 | $29-49/mo per practice; 35K+ addressable; dental DSO tier at $99-199/mo |
| Build Feasibility | 5/5 | 10 | Equipment registry + maintenance schedule + reminder calendar + compliance report export = 2-3 week MVP |
| Boring Business Bonus | 4/5 | 8 | Dental practice management = unglamorous professional service |

**Total: 86/105**
**Verdict**: BUILD
**Decision Status**: NEW
**Next Steps**: Build dental equipment registry with pre-loaded asset templates (chairs, compressors, autoclaves, X-ray units); set service intervals → reminder emails → compliance report export for state board; $79-99 LTD AppSumo launch
**Risks**: Low discoverability — dental practice managers are not on Reddit/ProductHunt; best channel is dental equipment suppliers/dealers and dental association conferences; ADA-approved software list is key
**Key Source Links**:
- https://www.reddit.com/r/NoCodeSaaS/comments/1t9v7w3/i_analyzed_26000_reddit_posts_to_find_niche/
**Signal Frequency**: NEW — first identified today; meta-analysis source; validate with 10 dental office manager interviews before building

---

### 9. Cleaning Business Client Intelligence Layer — Score: 99/105
*(Existing: `ideas/shortlisted/cleaning-service-management.md` — last updated 2026-11-07 at 99/105)*

New angle today: **job intelligence companion layer** — structured per-client flags (eco products vs. bleach, pet flags, door codes, special instructions), auto-surfaced to crew on day-of via mobile, bilingual (EN/ES), required photo checklists. Owner built their own workaround (validated). Different from existing payroll-bridge angle — but maps to same canonical file.

**Key sources today**:
- https://www.reddit.com/r/smallbusiness/comments/1p5f7d0/paying_120month_for_software_that_does_60_of_what/
- https://www.reddit.com/r/cleaningbusiness/comments/1wqwlww/cleaning_business_owners_with_a_team_how_do_you/

**Signal Frequency**: Very high — multiple threads per week

---

### 10. Dumpster/Roll-Off Rental Operations Platform — Score: 85/105
*(Existing: `ideas/shortlisted/dumpster-rolloff-rental.md` — last updated 2026-06-18 at 84/105)*

New signal today: 5+ Reddit thread sources from multiple subreddits (r/dumpsterrentalbiz, r/TruckDispatchers, r/wastemanagement) all confirming same Excel/WhatsApp pain. Key insight documented: "a dumpster rental is NOT a point-to-point delivery — it's a delivery window, a multi-day hold, a pickup window, a scale receipt, and an overage calculation all in one job." Online ordering specifically requested. CurbWaste confirmed as enterprise-only. Score bumped 84 → 85.

**Key sources today**:
- https://www.reddit.com/r/TruckDispatchers/comments/1r0wc5m/who_else_is_still_dispatching_roll_off_trucks_manually/
- https://www.reddit.com/r/dumpsterrentalbiz/comments/1uio3xl/hitting_a_wall_at_4_trucks_how_are_you_automating/
- https://www.reddit.com/r/wastemanagement/comments/1qk3aob/anyone_running_online_ordering_payments_for_roll_off/
- https://www.reddit.com/r/sweatystartup/comments/1nu4qw4/biggest_pain_points_of_running_a_dumpster_rental/

**Signal Frequency**: Increasing — dedicated subreddit r/dumpsterrentalbiz is active

---

### 11. Restaurant Supplier Invoice Automation + Food Cost Intelligence — Score: 94/105
*(Existing: `ideas/shortlisted/restaurant-operations.md` — last updated 2026-11-10 at 94/105)*

New angle today: **supplier invoice OCR + ingredient price tracking** — NibbleIQ and FacturaGourmet independently validating same niche simultaneously. Matches existing OCR differentiator in restaurant-operations.md. Score stable.

**Key sources today**:
- https://www.reddit.com/r/SaaS/comments/1p8k8k4/built_a_saas_for_restaurant_ops_after_10_years_in_the_trenches/
- https://www.reddit.com/r/SaaS/comments/1lv5z9p/saas_validation_microsaas_for_restaurant_invoice_automation/

**Signal Frequency**: Stable — multiple builders validating independently

---

### 12. Micro-Landlord OS for 1–10 Units — Score: 83/105 ★ NEW

| Criterion | Score | Weighted | Notes |
|-----------|-------|----------|-------|
| Market Validation | 4/5 | 12 | 10-15M US small landlords; $62-192/mo Buildium validates willingness to pay; $4,200/yr in missed tax deductions confirmed by LeaseBase Foundation study |
| Competitor Weakness | 5/5 | 10 | 6 Buildium price increases in 2.5 years; $80→$192 cliff at 41 units; support blackhole for non-premium tiers; free tools (Innago, TurboTenant) stay too thin |
| LTD Viability | 4/5 | 8 | $79 LTD (up to 5 units) explicitly noted in competitor analysis — Buildium alternative at one-time price |
| No Free Tier | 3/5 | 3 | Innago and TurboTenant have free tiers; risk of competition |
| Channel Access | 4/5 | 8 | r/realestateinvesting (1.9M), r/landlord (265K), BiggerPockets forums, FB "Small Landlords Network" |
| Content Potential | 4/5 | 4 | "landlord software", "Buildium alternative small landlord", "rental property management app" |
| AppSumo Fit | 4/5 | 8 | "Real estate/landlord tools are perennial AppSumo best-sellers" — explicitly noted in competitor analysis |
| Review Potential | 4/5 | 4 | Small landlords are vocal in communities; Schedule E tax help drives very specific reviews |
| MRR Path | 4/5 | 12 | $19/mo flat (no per-unit fees); 10-15M US micro-landlords = huge addressable market |
| Build Feasibility | 3/5 | 6 | Rent collection (ACH, 2-day settlement) + expense categorization + maintenance requests + Schedule E export = 5-6 weeks |
| Boring Business Bonus | 4/5 | 8 | Property management = unglamorous professional service |

**Total: 83/105**
**Verdict**: BUILD
**Decision Status**: NEW
**Next Steps**: Build rent collection (2-day ACH) + auto-categorized expense tracking + Schedule E tax export as MVP; target Buildium refugees (6 price increases = active churn window); $79 LTD AppSumo launch
**Risks**: Innago and TurboTenant have free tiers; rent collection = financial compliance (Plaid integration, banking partnerships needed); per-state compliance reminders require ongoing maintenance
**Key Source Links**:
- https://www.reallyo.com/blog/buildium-pricing-and-reviews
- https://www.baselane.com/resources/15-best-landlord-software-platforms
- https://leasebasefoundation.org/blog/2026-09-08-property-management-technology-gap-small-landlords/
- https://capterra.com/p/47428/Buildium-Property-Management-Software/reviews/

**Signal Frequency**: NEW — first from competitor analysis scan today; validate via r/landlord before building

---

### 13. Property Management Maintenance Vendor Coordination — Score: 79/105
*(Maps to `ideas/shortlisted/property-management.md` or similar — check for update)*

| Criterion | Score | Weighted | Notes |
|-----------|-------|----------|-------|
| Market Validation | 4/5 | 12 | AppFolio, Buildium, Wattle Agent, BetterBid, Venderoo all validate; 200K+ r/PropertyManagement |
| Competitor Weakness | 4/5 | 8 | AppFolio Assisted Maintenance "weak on vendor relationship management"; Property Meld exists but incomplete |
| LTD Viability | 2/5 | 4 | No — requires ongoing automations; MRR model at $49-149/mo |
| No Free Tier | 4/5 | 4 | PM companies pay for ops tools |
| Channel Access | 4/5 | 8 | r/PropertyManagement (200K+), PM associations, Buildium/AppFolio user groups |
| Content Potential | 4/5 | 4 | "property management maintenance software", "vendor coordination PM" |
| AppSumo Fit | 3/5 | 6 | Less AppSumo-centric category |
| Review Potential | 4/5 | 4 | Daily-use, generates reviews |
| MRR Path | 5/5 | 15 | Clear $49-149/mo per PM company; automations drive retention |
| Build Feasibility | 3/5 | 6 | Vendor outreach automation + photo proof + PM integration = moderate complexity |
| Boring Business Bonus | 4/5 | 8 | Property management = unglamorous |

**Total: 79/105**
**Verdict**: EXPLORE FURTHER
**Decision Status**: NEW (validate before building)
**Next Steps**: Check if existing property-management.md covers this; validate vendor coordination angle with PM community interviews
**Risks**: Multiple funded startups already in space (Wattle Agent, BetterBid, Venderoo); market is active
**Key Source Links**:
- https://www.reddit.com/r/PropertyManagement/comments/1rqnf89/maintenance_coordination/
- https://www.reddit.com/r/PptyMgmtSoftware/comments/1v8pru7/vendor_coordination_is_the_maintenance_step/

---

### 14. Trade Compliance & Regulation Tech (Multi-Trade) — Score: 85/105
*(Existing: `ideas/shortlisted/hvac-refrigerant-compliance.md` and `pest-control.md` cover sub-parts)*

Trend-spotter source today documents regulatory convergence: EPA R-410A refrigerant phasedown (mandatory Section 608 tracking), CA CSLB new 2026 workers comp for HVAC sole proprietors, Utah SB 26 pest control permitting, OSHA heat emphasis program for pest control/building services. Biz-Comply is early-stage player validating the wedge.

New specific opportunity: **standalone compliance log that plugs into Jobber/HCP via webhook** — no FSM switch required. Auto-generate EPA refrigerant logs and pesticide application records from job data.

**Key sources today**:
- https://biz-comply.com/
- https://www.fieldpromax.com/blog/why-documentation-matters-in-regulated-field-services
- https://www.gettradelicense.com/blog/contractor-licensing-changes-2026
- https://le.utah.gov/Session/2026/bills/enrolled/SB0026.pdf

**Signal Frequency**: Increasing — regulatory forcing functions in 2026 making compliance tools urgent

---

### 15. Simple Trade Contractor CRM (3 Concurrent Builders) — Score: 85/105
*(Existing: `ideas/shortlisted/field-service-management.md` — check for update)*

Today's HN IH data shows 3 independent founders launching competing simple trade CRM tools in the same 3-month window (JobNook, Artise, InstaBid) — the strongest convergence signal for underserved demand. All identifying same gap: solo/micro contractors ($69+/mo Jobber too expensive or complex). Today's additional signals: PLMBR ($73K contracted ARR), Crewbird (Google LSA integration angle), AI Office Manager concept at $200-500/mo.

**Key sources today**:
- https://www.indiehackers.com/post/jobnook-a-simple-business-tool-for-trade-contractors-looking-for-beta-feedback-hn5sxlXIzxNZwOoitJCs
- https://news.ycombinator.com/item?id=50418273 (Crewbird)
- https://www.lvlup.vc/post/why-we-backed-plmbr-ai-agents-and-the-contractor-back-office

---

## Tier 2: Worth Exploring (Score 55–74)

### UK Making Tax Digital (MTD) Compliance Tool — Score: 68/105
- **Source**: HN validation thread + HMRC mandate (500K+ affected from April 2026)
- **Gap**: Sole traders need simple quarterly digital submission; Xero/FreeAgent "too complicated"
- **LTD Potential**: 4 — £5-10/mo or one-time LTD; deadline urgency creates demand
- **Why Tier 2**: UK-specific, reduces AppSumo reach; market window may pass quickly
- **Key Source**: https://news.ycombinator.com/item?id=47171042

### SaaS Subscription Audit + Optimization for Small Businesses — Score: 73/105
- **Source**: Multiple viral Reddit posts (£847/mo for 2-person company; $4,100/mo for 12-person)
- **Gap**: No tool for 5-20 person businesses with mixed SaaS; Truebill consumer, Ramp enterprise
- **LTD Potential**: 4 — $49 LTD very viable; "saves money" tools are top AppSumo category
- **Why Tier 2**: Not industry-specific (Boring Business Bonus 2/5); competition from free tools; trend may peak
- **Key Source**: https://www.reddit.com/r/smallbusiness/comments/1rg6pym/added_up_my_saas_subscriptions_last_night_and_nearly_had_a_heart_attack/

### UK Tradesperson CRM (Mobile-First) — Score: 74/105
- **Source**: r/microsass — founder getting positive validation signals; 3M+ UK tradespeople
- **Gap**: Jobber US-focused; Tradify NZ/AU; no UK-native tool with Gas Safe/NICEIC tracking
- **LTD Potential**: 3 — UK buying patterns differ; better as MRR (£19-39/mo)
- **Why Tier 2**: UK-specific limits AppSumo reach; regulatory specifics add complexity
- **Key Source**: https://www.reddit.com/r/microsass/comments/1uhetl7/im_building_a_crm_specifically_for_uk_tradespeople/

### Auto Detailing Route-Aware Scheduling — Score: 75/105
- **Source**: r/AutoDetailing, r/Detailing — Urable expensive + bad calendar; OrbisX $1,500/yr
- **Gap**: No affordable mobile detailing tool with route-aware calendar + vehicle intake + tip tracking
- **LTD Potential**: 4 — $79 LTD feasible; daily-use tool
- **Why borderline Tier 1/2**: Market smaller than other categories; 500K member subreddits but mobile detailing is a lifestyle business segment
- **Key Source**: https://www.reddit.com/r/AutoDetailing/comments/1qv3rdt/what_software_do_you_use_to_manage_the_business/

### Voice-to-Quote for Field Workers — Score: 72/105
- **Source**: Trends — SMASH, Feldy (200+ customers), Handoff AI all validating pattern
- **Gap**: Speak job details on-site → AI generates quote with line items → customer approves digitally
- **LTD Potential**: 5 — $59-99 LTD; trades owners save hours on quoting
- **Why Tier 2**: Market filling fast; Feldy (YC), SMASH, Angebotsmeister all entering; differentiation is narrowing
- **Key Source**: https://www.ycombinator.com/launches/SiZ-feldy-field-first-ai-for-home-services-and-contractors/

### Field Intelligence Dashboards ("Nut Report" Category) — Score: 68/105
- **Source**: Trends — The Nut Report (pre-launch), Crewbird, Jon ONeill (plumbing owner automating KPIs)
- **Gap**: One dashboard pulling ServiceTitan + QB + Google LSA + marketing platform for 2-10 truck shops
- **LTD Potential**: 4 — $49-99 LTD; "set it and forget it" reporting
- **Why Tier 2**: Build depends on API access to multiple FSMs; market not proven at scale

### Bookkeeping for Solo Service Businesses — Score: 68/105
- **Source**: r/smallbusiness — extremely high frequency; "QB/Wave/Xero feel built for accountants"
- **Gap**: Ultra-simple P&L (bank feed → auto-categorize → quarterly tax bucket → one-screen P&L)
- **LTD Potential**: 4 — $49 LTD possible
- **Why Tier 2**: Market is extremely crowded (QB, Wave, FreshBooks, Xero, Bench); Wave is free; differentiation is hard without deep niche focus (cleaners, landscapers specifically)

### PM Maintenance Hours → Owner Expense Automation — Score: 74/105
- **Source**: r/PropertyManagement — paper → spreadsheet → PMS → owner report is 3-step manual process
- **Gap**: Maintenance crew clock-in/out per work order → auto-generates expense and pushes to Buildium/AppFolio
- **LTD Potential**: 3 — workflow tool, MRR better; $99 AppSumo LTD possible
- **Why Tier 2**: Similar to Tier 1 Vendor Coordination idea; validate which angle is higher pain first

---

## Tier 3: Weak / Pass (Score <55)

| Idea | Score | Reason to Pass |
|------|-------|----------------|
| AI OS for Trades (platform) | 48/105 | 6-12 month build; $200M+ VC competition (Probook, Sophiie, Dalton Mills); not LTD-viable; wrong scope for 4-person team |
| Trades Workforce Retention Tech | 52/105 | ShareWillow ($8.5M) + Quinn ($4M) already funded; payroll tool (not LTD-viable); integration complexity |
| AI Voice Agents for Home Services | 61/105 | Category filling fast; $979K TTM bootstrapped player (ServiceAgent) already established; moving to commodity |
| LTL Freight Dimension Fraud (Transload) | 42/105 | YC-backed competitor already funded + ahead; enterprise logistics long sales cycle |
| Pest Control AI Upsell Coach | 58/105 | Too narrow as standalone; works better as add-on to full pest control FSM |
| Weather-Based Dispatch Planning (Prelay) | 56/105 | Narrow use case; 2 points engagement; Prelay already built it; best as feature not product |
| Manufacturing Calibration Tracker | 62/105 | pmcal.net already exists; marketing channel (ISO auditors) is clever but hard to scale; small TAM |

---

## Top 3 Recommendations

1. **HVAC Small-Shop FSM (96/105)** — Massive market, confirmed pricing gap ($80-199 dead zone), FieldEdge UX is "2014-era" per competitor analysis, 530K r/HVAC members as distribution. MVP = dispatch + equipment history + mobile invoicing for 1-5 tech shops. AppSumo at $79 LTD. Source: https://www.capterra.com/compare/140363-150053/HouseCall-Pro-vs-ServiceTitan

2. **Dental Office Equipment Maintenance Tracker (86/105)** — NEW opportunity today. Zero competition in this exact niche; 35K+ dental offices each with $200K-$500K in equipment requiring compliance tracking. Simple MVP (registry + reminders + compliance report export). Perfect LTD product at $79-99 (compliance tools = set-it-and-forget-it). Source: https://www.reddit.com/r/NoCodeSaaS/comments/1t9v7w3/i_analyzed_26000_reddit_posts_to_find_niche/

3. **Micro-Landlord OS for 1–10 Units (83/105)** — NEW opportunity today. 10-15M US micro-landlords underserved; Buildium's 6 price hikes in 2.5 years = active churn window; Schedule E tax export is the killer feature nobody builds. $79 LTD (5 units). AppSumo-proven category. Source: https://leasebasefoundation.org/blog/2026-09-08-property-management-technology-gap-small-landlords/

---

## Signal Summary Table

| # | Idea | Score | Tier | LTD? | Existing File | Action |
|---|------|-------|------|------|---------------|--------|
| 1 | HVAC Small-Shop FSM | 96/105 | 1 | Yes ($79) | hvac-small-shop-dispatch.md | UPDATE |
| 2 | Pest Control Compliance + Route | 98/105 | 1 | Yes ($89) | pest-control.md | UPDATE |
| 3 | HVAC Maintenance Plan Manager | 92/105 | 1 | Yes ($99) | hvac-maintenance-agreements.md | UPDATE |
| 4 | Auto Repair DVI-First Software | 100/105 | 1 | Yes ($89) | auto-repair-shop-management.md | UPDATE |
| 5 | Landscaping Field App (Offline) | 99/105 | 1 | Yes ($79) | landscaping-lawn-care.md | UPDATE |
| 6 | Small-Fleet Trucking TMS | 98/105 | 1 | Borderline | small-fleet-trucking-tms.md | UPDATE |
| 7 | Post-Job Follow-Up Automation | 97/105 | 1 | Yes ($79) | post-job-follow-up-automation.md | UPDATE |
| 8 | Dental Equipment Maintenance | 86/105 | 1 | Yes ($79-99) | — NEW — | CREATE |
| 9 | Cleaning Business Intelligence | 99/105 | 1 | Yes ($79) | cleaning-service-management.md | UPDATE |
| 10 | Dumpster/Roll-Off Rental Ops | 85/105 | 1 | Borderline | dumpster-rolloff-rental.md | UPDATE |
| 11 | Restaurant Invoice + Food Cost | 94/105 | 1 | Yes ($69-89) | restaurant-operations.md | UPDATE |
| 12 | Micro-Landlord OS | 83/105 | 1 | Yes ($79) | — NEW — | CREATE |
| 13 | PM Maintenance Vendor Coordination | 79/105 | 1 | No (MRR) | check property-management.md | UPDATE |
| 14 | Trade Compliance (Multi-Trade) | 85/105 | 1 | Yes ($99-199) | hvac-refrigerant-compliance.md | UPDATE |
| 15 | Simple Trade Contractor CRM | 85/105 | 1 | Yes | field-service-management.md | UPDATE |
| 16 | UK MTD Compliance Tool | 68/105 | 2 | Yes | — | None |
| 17 | SaaS Subscription Audit | 73/105 | 2 | Yes | — | None |
| 18 | UK Tradesperson CRM | 74/105 | 2 | Borderline | — | None |
| 19 | Auto Detailing Scheduling | 75/105 | 2 | Yes | pressure-washing-detailing.md | None |
| 20 | Voice-to-Quote Field Workers | 72/105 | 2 | Yes | — | None |
| 21 | Field Intelligence Dashboards | 68/105 | 2 | Yes | — | None |
| 22 | Bookkeeping for Solo Service Biz | 68/105 | 2 | Yes | — | None (crowded) |
| 23 | PM Maintenance Hours Automation | 74/105 | 2 | Borderline | — | None |
| 24 | AI OS for Trades (platform) | 48/105 | 3 | No | — | PASS |
| 25 | Trades Workforce Retention | 52/105 | 3 | No | — | PASS |
| 26 | AI Voice Agents (home services) | 61/105 | 3 | Partial | ai-voice-receptionist-trades.md | PASS |
| 27 | Weather Dispatch Planning | 56/105 | 3 | No | — | PASS |
