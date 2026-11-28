# Idea Evaluation — 2026-11-28

**Sources scanned**: reddit-2026-11-28, hn-indiehackers-2026-11-28, trends-2026-11-28, competitor-analysis-2026-11-28
**Total ideas evaluated**: 32 unique ideas across all sources
**New shortlisted files created**: 1 (grease-trap-service-software.md)
**Existing shortlisted files updated**: 19

---

## Tier 1: Strong Opportunities (Score 75+)

---

### 1. Invoice Auto-Follow-Up for Trades — Score: 99/105 ↔ Stable

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | Revenue-confirmed: $14K/mo SaaS built on this exact problem; 2,197 upvotes on the r/passive_income case study |
| Competitor Weakness | 5/5 | Jobber has basic follow-up reminders only inside a $100+/mo FSM platform; no standalone affordable tool |
| LTD Viability | 5/5 | Pure automation play; $59–$79 LTD viable, low ongoing costs |
| No Free Tier | 4/5 | Tradespeople understand ROI framing (recovering $47K = obvious yes) |
| Channel Access | 5/5 | r/HVAC, r/Plumbing, r/landscaping, Facebook groups for contractors, QBO communities |
| Content Potential | 4/5 | "invoice follow-up for contractors", "how to collect unpaid invoices" = clear content angle |
| AppSumo Fit | 5/5 | Narrow, single-purpose tool — AppSumo sweet spot |
| Review Potential | 4/5 | ROI is measurable; motivated users will leave reviews |
| MRR Path | 5/5 | Add Jobber/HCP/ServiceTitan API integrations → upsell to monthly; natural subscription |
| Build Feasibility | 5/5 | 3–4 week MVP: QBO API + Twilio SMS + email sequences |
| Boring Business Bonus | 5/5 | Deepest boring: plumbers, HVAC, roofing, general contracting |

**Verdict**: BUILD
**Decision Status**: NEW — see `../ideas/decisions.md`
**Next Steps**: Ship MVP: QBO OAuth + contact import + 5-step SMS/email sequence (sent → 3d → 7d → 14d → 30d) → AppSumo launch at $59 LTD
**Risks**: (1) Jobber/HCP may add better follow-up and kill the wedge; (2) SMS compliance (10DLC registration) adds friction; (3) collection laws vary by state
**Key Source Links**:
- https://www.reddit.com/r/passive_income/comments/1rkivif/a_guy_i_talked_to_makes_14kmonth_from_an_app_that/
- https://www.reddit.com/r/microsaas/comments/1oejc24/my_boring_saas_makes_8kmonth_and_i_work_3_hours_a/
- https://www.reddit.com/r/saasbuild/comments/1thc3hb/spent_a_year_working_on_exciting_saas_niches/
**Signal Frequency**: 12+ mentions across 60+ days — increasing
**Existing File**: `ideas/shortlisted/invoice-auto-followup-trades.md` — Signal History updated

---

### 2. Cleaning Service Management (Flat-Rate, Lead Capture) — Score: 100/105 ↔ Stable

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | ZenMaid $3M/yr (11 years) confirmed; BlastoClean launched Oct 2026 at $0 MRR — entry window open |
| Competitor Weakness | 5/5 | ZenMaid per-user pricing cliff + no lead capture; HCP billing "predatory" documented |
| LTD Viability | 5/5 | $79 LTD for 10 cleaners — ZenMaid's existing customers are perfect buyers |
| No Free Tier | 5/5 | Businesses pay; ZenMaid has 15,000+ paying customers at $49/mo + per-user |
| Channel Access | 5/5 | Cleaning Business Owners Network FB, r/CleaningTips, ZenMaid forums, YouTube influencers |
| Content Potential | 5/5 | "ZenMaid alternative", "cleaning business software flat rate", "unlimited cleaners scheduling" |
| AppSumo Fit | 5/5 | ZenMaid ran AppSumo years ago; no cleaning tool on AppSumo now — first mover |
| Review Potential | 4/5 | Active community, motivated by billing horror stories |
| MRR Path | 5/5 | From LTD → $59/mo subscription with premium features (lead capture, AI crew assignment) |
| Build Feasibility | 5/5 | ZenMaid-level feature set achievable in 6–8 weeks |
| Boring Business Bonus | 5/5 | Residential/commercial cleaning — deepest boring |

**Verdict**: BUILD
**Decision Status**: NEW — see `../ideas/decisions.md`
**Next Steps**: Build "CleanDesk" — flat $59/mo unlimited cleaners, recurring schedule management, automated booking SMS, lead capture form, two-way text with leads, review request automation, offline schedule access
**Risks**: (1) ZenMaid may cut per-user pricing in response; (2) AI scheduling is complex; (3) payment processing compliance required
**Key Source Links**:
- https://cleaningservicesghlsnapshot.com/blog/zenmaid-alternatives-cleaning-business/
- https://jjandrade.com/blog/2026-02-18-best-cleaning-business-software-2026/
- https://www.indiehackers.com/post/i-built-a-60k-mo-point-of-sale-business-starting-in-high-school-now-im-starting-over-at-0-with-cleaning-companies-06eeded96a
**Signal Frequency**: 20+ mentions across 60+ days — stable at max
**Existing File**: `ideas/shortlisted/cleaning-service-management.md` — Signal History updated

---

### 3. Property Management for Small Landlords (1–100 Units) — Score: 100/105 ↔ Stable

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | 18M US small landlords; multiple builders (PropertyLens, Landsio) + IH founder reached customers organically |
| Competitor Weakness | 5/5 | AppFolio 50-unit minimum; DoorLoop $199/mo minimum = $39.80/door at 5 units; TurboTenant free but incomplete |
| LTD Viability | 5/5 | $79 LTD (up to 5 units) / $149 (up to 15 units) — DoorLoop $199/mo makes this obvious |
| No Free Tier | 5/5 | Small landlords will pay when tool saves visible time (Schedule E, maintenance log) |
| Channel Access | 5/5 | r/Landlord, r/realestateinvesting, BiggerPockets, local landlord associations |
| Content Potential | 5/5 | "DoorLoop alternative", "best property management software small landlord 2026", "flat fee landlord software" |
| AppSumo Fit | 5/5 | No landlord tool has EVER appeared on AppSumo — massive first-mover opportunity |
| Review Potential | 5/5 | Very motivated community; DoorLoop horror stories drive search for alternatives |
| MRR Path | 5/5 | From LTD → $19/mo flat (up to 15 units), clear path |
| Build Feasibility | 5/5 | Core: timeline view + lease reminders + rent tracking; 4–6 weeks (Supabase + Next.js) |
| Boring Business Bonus | 4/5 | Property management — unglamorous but not deeply blue-collar |

**Verdict**: BUILD
**Decision Status**: NEW — see `../ideas/decisions.md`
**Next Steps**: Build "LandlordOS" — $19/mo flat for up to 15 units, timeline-first UX, mobile-first photo maintenance log, one-click Schedule E export, integrated e-sign
**Risks**: (1) Trust risk (landlords cautious about fintech holding rent money); (2) Free tools (Innago, TurboTenant) set low-price expectations; (3) Feature creep risk as scope expands
**Key Source Links**:
- https://beatable.co/analysis/97DCBFE798
- https://practicallandlord.co/best-property-management-software-small-landlords
- https://leasebase.ai/property-management-software/
- https://getrentlane.com/blog/property-management-software-small-landlords-2026
**Signal Frequency**: 20+ mentions across 60+ days — stable at max
**Existing File**: `ideas/shortlisted/property-management.md` — Signal History updated

---

### 4. Small Fleet Trucking TMS (1–15 Trucks) — Score: 100/105 ↔ Stable

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | 500K+ small motor carriers in US with <10 trucks; multiple builders validating; Datatruck $99/mo entering |
| Competitor Weakness | 5/5 | McLeod "insane per-user costs"; Dispatch Mate "1990s UI at $355 CAD/mo"; Samsara 3-year contracts |
| LTD Viability | 4/5 | Dispatch+invoicing focused tool at $99 LTD viable; full TMS needs MRR model |
| No Free Tier | 5/5 | Regulated compliance (ELD, IFTA, DOT) forces payment |
| Channel Access | 5/5 | r/OwnerOperators, r/FreightBrokers, r/Truckers — very active communities |
| Content Potential | 4/5 | "small fleet TMS", "owner operator dispatch software", "trucking software 1-10 trucks" |
| AppSumo Fit | 4/5 | Niche but passionate; $99 LTD for dispatch+invoicing layer is compelling |
| Review Potential | 4/5 | Truckers leave detailed reviews; frustration is high |
| MRR Path | 5/5 | IFTA quarterly reporting = recurring; compliance subscription natural fit |
| Build Feasibility | 4/5 | Load entry + dispatch + status + invoice + driver settlement = 6–8 weeks |
| Boring Business Bonus | 5/5 | Trucking — deeply boring and blue-collar |

**Verdict**: BUILD
**Decision Status**: NEW — see `../ideas/decisions.md`
**Next Steps**: Minimal TMS covering load entry, dispatch assignment, status tracking, invoice generation, driver settlement. Flat-rate pricing ($79–$99/mo), no hardware lock-in. Load board integrations (DAT, Truckstop) as Phase 2.
**Risks**: (1) ELD/hardware compliance is complex and regulated; (2) Competitive pressure from AI TMS entrants (DispatchPilot, SmartHop); (3) Churn risk if load board integrations break
**Key Source Links**:
- https://www.reddit.com/r/FreightBrokers/comments/1u53sl3/small_carrier_owner_asking_for_advice/
- https://www.reddit.com/r/OwnerOperators/comments/1kr7vrd/eld_issues/
- https://www.reddit.com/r/TruckDispatchers/comments/1wzb7rv/dispatch_mate_by_cargowise/
**Signal Frequency**: 20+ mentions across 60+ days — stable at max
**Existing File**: `ideas/shortlisted/small-fleet-trucking-tms.md` — Signal History updated

---

### 5. Pest Control Vertical SaaS — Score: 101/105 ↔ Stable

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | HN commenter confirmed $2M ARR; PestPro just launched (free — entry window open); 448-point HN thread |
| Competitor Weakness | 5/5 | PCT One/ServSuite expensive + legacy; GorillaDesk $79-150/mo ceiling confirmed; FieldRoutes "hostage situation" |
| LTD Viability | 4/5 | $299–499 LTD viable for 1-truck operators; compliance module = standalone LTD |
| No Free Tier | 5/5 | FIFRA chemical log = legally required documentation; they MUST pay for compliance |
| Channel Access | 5/5 | r/PestControlIndustry, NPMA forums, state PCO associations |
| Content Potential | 4/5 | "pest control software", "GorillaDesk alternative", "FIFRA compliance tracking app" |
| AppSumo Fit | 4/5 | Niche tool — 35K US pest control companies; $299–499 LTD for compliance module is obvious buy |
| Review Potential | 4/5 | PCOs leave detailed reviews; compliance frustration is high |
| MRR Path | 5/5 | Chemical log compliance + route optimization = recurring; natural subscription |
| Build Feasibility | 5/5 | FIFRA-compliant chemical log + route management + recurring billing = 4–6 week MVP |
| Boring Business Bonus | 5/5 | Pest control — deepest boring; VCs explicitly avoid this space |

**Verdict**: BUILD
**Decision Status**: NEW — see `../ideas/decisions.md`
**Next Steps**: Build focused pest control CRM with built-in FIFRA chemical log + AI receptionist for missed calls (missed call → auto-quote → schedule). Target 40% of operators NOT consolidated into Rentokil/Orkin. White-glove onboarding, $99–$199/mo.
**Risks**: (1) Compliance complexity varies by state; (2) PCOs slow to adopt new software; (3) FieldRoutes/GorillaDesk may respond with pricing cuts
**Key Source Links**:
- https://news.ycombinator.com/item?id=47509571 (448 points, 182 comments)
- https://pestpro.app/blog/
- https://capterra.com/p/146076/FieldRoutes/reviews/
- https://gorilladesk.com/pricing/
**Signal Frequency**: 15+ mentions across 30+ days — increasing
**Existing File**: `ideas/shortlisted/pest-control.md` — Signal History updated

---

### 6. Auto Repair Shop Management (Sub-$100, No-Contract) — Score: 100/105 ↔ Stable

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | Tekmetric Series A + AutoLeap $30M+ raise; CarSignal YC S26 at $200/mo (40+ shops 18 states) |
| Competitor Weakness | 5/5 | All major competitors demo-gated; AutoLeap auto-renews without approval; Shopmonkey $500 migration fee |
| LTD Viability | 3/5 | Labor guide API licensing (MOTOR/AllData) complicates LTD math — better as subscription |
| No Free Tier | 5/5 | Shop owners understand ROI; $99/mo vs $600+/mo (Tekmetric + Mitchell 1) = clear win |
| Channel Access | 5/5 | r/AutoMechanic, r/Justrolledintotheshop, NAPA AutoCare community, ASE chapters |
| Content Potential | 4/5 | "Tekmetric alternative", "auto repair software no contract", "best shop management software 2026" |
| AppSumo Fit | 4/5 | Auto repair software has NEVER appeared on AppSumo; $149 LTD is a compelling one-month-of-Tekmetric decision |
| Review Potential | 4/5 | Very vocal community; migration stories spread organically |
| MRR Path | 5/5 | Shop management = operational dependency; recurring revenue guaranteed once adopted |
| Build Feasibility | 4/5 | Digital ROs + VIN lookup + vehicle history + labor guide + SMS + payment = 6–8 weeks |
| Boring Business Bonus | 4/5 | Auto repair — unglamorous professional service |

**Verdict**: BUILD
**Decision Status**: NEW — see `../ideas/decisions.md`
**Next Steps**: Build "PitLane/BayDesk" — $99/mo flat, 5 users, self-serve trial, labor time estimates via MOTOR/AllData API, 2-way SMS, visual kanban (Estimate→Approved→In Progress→Ready→Invoiced), no annual contract, no migration fee.
**Risks**: (1) Labor guide API licensing (MOTOR/AllData) = $500–$1,500/yr or per-lookup cost; (2) Well-funded competitors (Tekmetric raised Series A, AutoLeap $30M); (3) Shop owners vary widely in tech adoption
**Key Source Links**:
- https://blog.torque360.co/tekmetric-alternatives/
- https://garageauto.app/auto-repair-software-for-small-shops/
- https://nextcarhub.com/auto-repair-shop-software-pricing.html
- https://www.usepitlane.com/blog/best-auto-repair-shop-software-2026
**Signal Frequency**: 10+ mentions across 30+ days — stable at max
**Existing File**: `ideas/shortlisted/auto-repair-shop-management.md` — Signal History updated

---

### 7. Field Service Management + Analytics (Small Trades) — Score: 98/105 ↔ Stable (QUAD-source today)

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | Avenue AU$85K MRR; Crewbird (father's carpet cleaning 3x ROAS); Operator $15K MRR in 1 year; 6 builders simultaneously |
| Competitor Weakness | 5/5 | ServiceTitan $63K+ Year 1 for 10-tech; Jobber zero AI scheduling; HCP gates every useful feature |
| LTD Viability | 5/5 | $149 (1-5 techs) / $249 (unlimited techs) — one-month-of-ServiceTitan decision |
| No Free Tier | 5/5 | Business operations tool; tradespeople pay when it replaces Sunday spreadsheet work |
| Channel Access | 5/5 | r/HVAC, r/landscaping, r/ContractorTalk, Facebook groups for each trade |
| Content Potential | 5/5 | "ServiceTitan alternative", "HVAC software small shop", "Jobber alternative flat rate" |
| AppSumo Fit | 5/5 | No HVAC-specific tool on AppSumo; $149 LTD is a one-month-of-ServiceTitan decision |
| Review Potential | 4/5 | Engaged community; will leave reviews if product delivers |
| MRR Path | 5/5 | From LTD → flat $79/mo unlimited techs; natural subscription progression |
| Build Feasibility | 4/5 | HVAC-first features (maintenance agreements, equipment history) require domain depth |
| Boring Business Bonus | 5/5 | HVAC, plumbing, electrical — deepest boring |

**Verdict**: BUILD
**Decision Status**: NEW — see `../ideas/decisions.md`
**Next Steps**: Build "HVAC Desk" — flat $79/mo unlimited techs, HVAC-specific maintenance agreement tracking, equipment serial/model history per customer address, dispatch board, invoicing, automated SMS follow-up for missed calls and after-hours. Target shops currently paying ServiceTitan $300–600/user/mo.
**Risks**: (1) HVAC-specific features require domain expertise; (2) Competitive market with 6+ concurrent builders; (3) Google LSA native integration adds complexity
**Key Source Links**:
- https://www.reddit.com/r/FieldService/comments/1tggzn6/anyone_actually_know_their_numbers_or_are_we_all/
- https://www.reddit.com/r/HowToEntrepreneur/comments/1u9gxe1/what_is_the_best_service_company_software_that_i/
- https://www.starterstory.com/stories/avenue-tom-holliday (AU$85K MRR)
- https://news.ycombinator.com/item?id=50418273 (Crewbird)
- https://fieldserviceguide.com/does-servicetitan-work-for-small-hvac-companies-2026/
**Signal Frequency**: 30+ mentions across 90+ days — stable at max (QUAD-source today: Reddit + HN/IH + Competitor + Trends)
**Existing File**: `ideas/shortlisted/field-service-management.md` — Signal History updated

---

### 8. HVAC/Plumbing/Trades Job Costing — Score: 97→98/105 ↑1

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | 80-comment landscaping thread; 35-contractor survey confirms no tool does true per-job P&L |
| Competitor Weakness | 5/5 | QBO "too complex, designed for accountants"; Wave "no job costing"; Jobber "service-focused, weak costing" |
| LTD Viability | 5/5 | $69–79 LTD — narrow scope, low ongoing costs |
| No Free Tier | 5/5 | Tradespeople understand ROI framing (which jobs are killing my margins) |
| Channel Access | 5/5 | r/landscaping, r/HVAC, r/smallbusiness, r/ContractorsUS |
| Content Potential | 4/5 | "job costing for contractors", "landscaping business profit tracking", "QuickBooks alternative trades" |
| AppSumo Fit | 4/5 | Narrow single-purpose tool; LTD-friendly |
| Review Potential | 4/5 | Tangible ROI → motivated reviews |
| MRR Path | 5/5 | From LTD → $29–49/mo for QBO sync + AI insights |
| Build Feasibility | 5/5 | Mobile job card: materials + hours + photo receipts → job margin; 3–4 weeks |
| Boring Business Bonus | 5/5 | Landscaping, HVAC, roofing, general contracting — deepest boring |

**Verdict**: BUILD
**Decision Status**: NEW — see `../ideas/decisions.md`
**Next Steps**: Mobile-first tool: log a job, add materials (photo receipt scan) + labor hours → instant margin. Syncs to QBO for accountants but designed for field workers. Cash flow projection as bonus.
**Risks**: (1) QBO API rate limits and sync complexity; (2) Jobber/HCP may add job costing and kill wedge; (3) SMB tax software is competitive
**Key Source Links**:
- https://www.reddit.com/r/landscaping/comments/1l5j753/how_are_you_tracking_job_costs_without_wasting/
- https://www.reddit.com/r/smallbusiness/comments/1tlk34s/anyone_else_feel_like_accounting_software_is_way/
- https://www.reddit.com/r/landscaping/comments/1riirwi/those_of_you_running_your_own_landscaping_crew/
**Signal Frequency**: 15+ mentions across 60+ days — increasing
**Existing File**: `ideas/shortlisted/hvac-plumbing-job-costing.md` — Signal History updated (97→98/105)

---

### 9. Insurance Agency Management (1–10 Producers) — Score: 98/105 ↔ Stable

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | ~38K independent P&C agencies under 10 employees in US; AMS360 & Applied Epic actively hated |
| Competitor Weakness | 5/5 | Applied Epic $50–150K implementation; AMS360 14% YoY price increases; EZLynx "early-2010s interface" |
| LTD Viability | 3/5 | Borderline — complex compliance/integrations; monthly SaaS better fit but AppSumo deal can drive early traction |
| No Free Tier | 5/5 | Business-critical tool; agencies will pay from day 1 for replacement of AMS360 |
| Channel Access | 5/5 | r/InsuranceAgent (very active, consistent AMS complaints), state insurance association forums |
| Content Potential | 4/5 | "AMS360 alternative", "modern insurance agency software 2026", "small agency CRM" |
| AppSumo Fit | 4/5 | No AMS category ever on AppSumo = first-mover; $149 LTD would pull AMS360 refugees |
| Review Potential | 4/5 | Regulated industry professionals leave detailed reviews |
| MRR Path | 5/5 | ACORD forms + IVANS download integration = operational dependency; recurring revenue guaranteed |
| Build Feasibility | 4/5 | IVANS download + ACORD forms + e-signature + pipeline view = 6–8 weeks; compliance nuance adds time |
| Boring Business Bonus | 4/5 | Insurance — unglamorous professional service |

**Verdict**: BUILD
**Decision Status**: NEW — see `../ideas/decisions.md`
**Next Steps**: Modern cloud AMS for 2–10 person P&C agencies: flat $99/mo (vs AMS360 $200+/mo + annual contracts), clean UX, transparent pricing, IVANS download, ACORD forms library, e-signatures, COI generation in <30 seconds. Differentiate on painless migration tooling.
**Risks**: (1) IVANS download integration is complex (carrier-specific API); (2) ACORD forms library licensing cost; (3) Insurance compliance varies by state
**Key Source Links**:
- https://www.reddit.com/r/InsuranceAgent/comments/1tbbsct/thinking_about_migrating_off_ams360_for_our/
- https://www.reddit.com/r/InsuranceAgent/comments/1ob4nms/hubspot_or_something_else_i_hate_all_amss/
- https://britecover.com/blog/best-insurance-agency-management-software-2026
**Signal Frequency**: 10+ mentions across 30+ days — stable
**Existing File**: `ideas/shortlisted/insurance-agency-management.md` — Signal History updated

---

### 10. Funeral Home Management Software — Score: 92→94/105 ↑2

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | THREE new entrants in 2026 (Afterword $79/mo, Harbor $300/mo, FuneralHQ 300 customers); $29K MRR case study; $1.5B market |
| Competitor Weakness | 5/5 | FDMS/Osiris/Passare Windows-only legacy; Tribute Technology $400–900/location/mo; FrontRunner 2005-era |
| LTD Viability | 4/5 | $299–499 LTD for specific tools (AI obituary, chain-of-custody) viable |
| No Free Tier | 5/5 | FTC Funeral Rule compliance is federally mandatory — they MUST have software |
| Channel Access | 4/5 | NFDA conference, funeral home association newsletters, Facebook groups (53K+ combined) |
| Content Potential | 4/5 | "FrontRunner alternative", "funeral home software 2026", "modern crematory case management" |
| AppSumo Fit | 3/5 | Niche tool — conservative buyers; LTD for specific AI tool (AI obituaries) works |
| Review Potential | 4/5 | Professional operators leave reviews; compliance frustration drives search |
| MRR Path | 5/5 | Case management + pre-need contracts + state filing integration = operational dependency |
| Build Feasibility | 4/5 | Basic case management + AI obituary + document gen = 4–6 weeks; full platform 3–4 months |
| Boring Business Bonus | 5/5 | Funeral homes — deepest boring; VCs explicitly avoid death industry |

**Verdict**: BUILD
**Decision Status**: NEW — see `../ideas/decisions.md`
**Next Steps**: "FinalCare" — $79/mo (up to 10 active cases) / $149/mo unlimited; AI obituary writer as wedge ($299 LTD entry); QR cremation chain-of-custody tracking; QB/Xero sync. Target: 17K+ independent family funeral homes priced out of Tribute Technology.
**Risks**: (1) Emotionally sensitive domain requires careful UX/copy; (2) FTC Funeral Rule compliance complexity; (3) State-by-state death certificate filing integration adds time
**Key Source Links**:
- https://afterword.com/ ($79/mo, case management + AI)
- https://www.harborfuneral.com/ ($300/month per location)
- https://www.funeralhq.com/about (300 customers, 6K+ cases)
- https://blanche.agency/en/blog/unsexy-vertical-saas-playbook-boring-industries-b2b
**Signal Frequency**: 8+ mentions across 60+ days — stable (bumped today by THREE concurrent 2026 entrants confirming market timing)
**Existing File**: `ideas/shortlisted/funeral-home-management.md` — Signal History updated (92→94/105)

---

### 11. Veterinary Practice Software (AI-Augmented) — Score: 95→96/105 ↑1

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | Vetspire (1,000 hospitals, Battery Ventures) + Provet (3,000+ clinics) = two scaled platforms validating; 60K+ US vet practices |
| Competitor Weakness | 5/5 | Avimark/Cornerstone/Impromed all 15–20 years old; IDEXX/Patterson ownership = entrenched conflict |
| LTD Viability | 4/5 | $299–499 LTD for specific tools (AI discharge summary, phone triage) viable |
| No Free Tier | 5/5 | VCPR compliance + practice management = business-critical; will pay |
| Channel Access | 4/5 | r/VetTech, r/Veterinary, r/AskVet — active communities; vet associations |
| Content Potential | 4/5 | "Covetrus Pulse alternative", "veterinary practice management software 2026", "Impromed replacement" |
| AppSumo Fit | 3/5 | Niche tool; compliance-critical tools = subscription model better |
| Review Potential | 4/5 | Vet professionals leave detailed reviews; Impromed refugees are motivated |
| MRR Path | 5/5 | Practice management = operational dependency; recurring revenue from day 1 |
| Build Feasibility | 3/5 | VCPR-compliant phone triage = 4–8 weeks; full PIMS = 6–12 months |
| Boring Business Bonus | 4/5 | Independent vet practice — unglamorous healthcare, non-tech buyers |

**Verdict**: EXPLORE FURTHER
**Decision Status**: NEW — see `../ideas/decisions.md`
**Next Steps**: Fastest wedge — standalone AI discharge summary + at-home care instructions via SMS ($299 LTD); 2-3 week build (Whisper + Claude + Twilio). Expand to full PIMS for Impromed refugees ($199–299/mo) in Phase 2.
**Risks**: (1) VCPR compliance and licensing are state-specific; (2) Vetspire + Provet are well-funded; (3) Full PIMS is a 6–12 month build
**Key Source Links**:
- https://www.vetspire.ai/ (1,000 hospitals, Battery Ventures)
- https://www.provet.com/ (3,000+ clinics, 55,000+ vet professionals)
- https://blanche.agency/en/blog/unsexy-vertical-saas-playbook-boring-industries-b2b
**Signal Frequency**: 10+ mentions across 60+ days — increasing
**Existing File**: `ideas/shortlisted/veterinary-practice.md` — Signal History updated (95→96/105)

---

### 12. Pressure Washing / Exterior Cleaning CRM — Score: 97/105 ↔ Stable

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | "CRM So Completely BROKEN in the Pressure Washing Industry" (31-comment, explicit "broken"); builder TradeCaddy emerged |
| Competitor Weakness | 5/5 | Jobber $99+/mo too generic; Markate universally panned; no before/after photo + surface-type quoting tool exists |
| LTD Viability | 5/5 | $59–79 LTD for solo operators (majority of market); straightforward |
| No Free Tier | 5/5 | Business operations — pressure washers understand need to manage jobs |
| Channel Access | 5/5 | r/pressurewashing (200K+ members), r/WindowCleaning, Facebook groups |
| Content Potential | 4/5 | "pressure washing CRM", "window cleaning scheduling app", "best app for pressure washing business" |
| AppSumo Fit | 4/5 | Niche tool; dual-market (pressure washing + window cleaning + auto detailing) expands TAM |
| Review Potential | 4/5 | Active communities; will share and review if product solves workflow |
| MRR Path | 5/5 | From LTD → $39–49/mo with seasonal follow-up automation and route optimization |
| Build Feasibility | 5/5 | CRM + before/after photos + sqft-based quoting + seasonal reminders = 4–6 weeks |
| Boring Business Bonus | 4/5 | Exterior cleaning/pressure washing — unglamorous local service |

**Verdict**: BUILD
**Decision Status**: NEW — see `../ideas/decisions.md`
**Next Steps**: CRM built around the pressure washing workflow: service-area map → auto-quote by surface type/sqft → before/after photo capture on mobile → invoice → automated seasonal reminder. LTD-friendly at $59–79.
**Risks**: (1) Small TAM for pure pressure washing focus; (2) TradeCaddy emerging as competitor; (3) Seasonal business = churn risk in winter
**Key Source Links**:
- https://www.reddit.com/r/pressurewashing/comments/1noq1bu/why_is_crm_so_completely_broken_in_the_pressure/
- https://www.reddit.com/r/WindowCleaning/comments/1rl60du/solo_window_cleaners_how_are_you_handling_quotes/
**Signal Frequency**: 10+ mentions across 30+ days — stable
**Existing File**: `ideas/shortlisted/pressure-washing-detailing.md` — Signal History updated

---

### 13. Septic Pumping / Sub-Trade Route Software — Score: 98/105 ↔ Stable

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | RouteHouse launching 17 trade editions = market confirmation; septic $40K MRR in 9 months case study |
| Competitor Weakness | 5/5 | Paper/basic tools dominate; RouteHouse is spread across 17 editions, not focused |
| LTD Viability | 5/5 | $299–499 LTD for solo operator doing 15 stops/day |
| No Free Tier | 5/5 | State regulatory compliance for septic pumping = mandatory documentation |
| Channel Access | 4/5 | Smaller communities than trades; NAWT (National Association of Wastewater Technicians) forums |
| Content Potential | 4/5 | "septic pumping software", "grease trap service management app" |
| AppSumo Fit | 4/5 | Niche but no competition; $299–499 LTD is obvious buy for paper-based operators |
| Review Potential | 3/5 | Smaller community but motivated |
| MRR Path | 5/5 | Compliance reporting = recurring; state-required documentation = operational lock-in |
| Build Feasibility | 5/5 | Route management + compliance log + report generation = 3–4 weeks |
| Boring Business Bonus | 5/5 | Septic pumping — most boring of boring; zero VC attention |

**Verdict**: BUILD
**Decision Status**: NEW — see `../ideas/decisions.md`
**Next Steps**: Focus on septic pumping first (10K+ US operators, $40K MRR proven); expand to grease trap, portable restroom, generator maintenance as adjacent editions. Build baffle condition + effluent filter + gallons pumped log + regulatory form generation.
**Risks**: (1) Small TAM for septic only; (2) RouteHouse expanding across 17 trades may become dominant; (3) Very niche distribution channels
**Key Source Links**:
- https://www.getroutehouse.com/news/17-trade-editions
- https://markets.financialcontent.com/stocks/article/abnewswire-2026-11-24-fieldcommandos-launches-all-in-one-field-service-software-for-small-businesses-starting-at-2999-per-month
**Signal Frequency**: 10+ mentions across 60+ days — stable
**Existing File**: `ideas/shortlisted/septic-route-optimizer.md` — Signal History updated

---

### 14. AI Phone Answering / Lead Capture for Trades — Score: 82→85/105 ↑3

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | Avenue AU$85K/mo ($55K USD) in 18 months; Ops Badger 11 customers $8K+ MRR; Cira first client $59/mo; $979K TTM bootstrapped |
| Competitor Weakness | 4/5 | Generic AI voice (Rosie, Allo) don't integrate with FSM; HighLevel resellers charge $300–800/mo |
| LTD Viability | 4/5 | $299–499 LTD for base tier (up to X calls/month); trades owners receptive to LTD |
| No Free Tier | 4/5 | ROI is quantifiable (missed calls = lost revenue); will pay from day 1 |
| Channel Access | 5/5 | r/HVAC, r/sweatystartup, Facebook groups for each trade; cold-calling works (door-to-door proven by Avenue) |
| Content Potential | 4/5 | "AI answering service plumber", "missed call solution HVAC", "AI receptionist trades" |
| AppSumo Fit | 3/5 | Subscription model works better; LTD for base tier viable |
| Review Potential | 4/5 | Tangible ROI → motivated reviews |
| MRR Path | 4/5 | From LTD → $59–99/mo for high-volume; natural subscription |
| Build Feasibility | 4/5 | Vapi/Retell + Twilio + FSM API integration = 3–4 weeks; FSM integrations add complexity |
| Boring Business Bonus | 5/5 | Trades — deepest boring |

**Verdict**: EXPLORE FURTHER
**Decision Status**: NEW — see `../ideas/decisions.md`
**Next Steps**: Build narrow version: missed call → instant SMS to caller asking what they need → AI qualifies lead and books callback or appointment → owner notification. Start with one trade (HVAC) and one geo. Door-to-door sales model (proven by Avenue).
**Risks**: (1) Commoditizing fast — Avoca $125M + Broccoli $52M entering; (2) Specific trade verticals (garage door, chimney) not yet served but main trades crowded; (3) HIPAA/BAA compliance for healthcare adjacencies
**Key Source Links**:
- https://www.starterstory.com/stories/avenue-tom-holliday (AU$85K MRR)
- https://www.reddit.com/r/EntrepreneurRideAlong/comments/1sncib7/spent_6_months_building_ai_solutions_nobody/
- https://www.indiehackers.com/post/have-you-ever-considered-the-cost-of-a-missed-call-Gz8o6TACneZSANbWf63A
**Signal Frequency**: 20+ mentions across 90+ days — increasing
**Existing File**: `ideas/shortlisted/ai-answering-dispatch-trades.md` — Signal History updated (82→85/105)

---

### 15. Field Manual Copilot (HVAC/Plumbing RAG Tool) — Score: 85→87/105 ↑2

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | ServiceTitan $961M revenue + XOi $230M acquisition confirms enterprise market; $79K MRR path analysis published |
| Competitor Weakness | 5/5 | ServiceTitan $245–398/tech/mo unaffordable for sub-5-tech shops; no affordable alternative builds field intelligence |
| LTD Viability | 4/5 | $299–499 LTD for solo tech — "set-and-forget" tools map well to LTD |
| No Free Tier | 4/5 | Saves measurable time per job (second van trips); ROI story is clear |
| Channel Access | 4/5 | Facebook groups for small HVAC owners; cold email to shops NOT on ServiceTitan |
| Content Potential | 4/5 | "HVAC manual lookup app", "equipment manual SaaS", "field tech tool for small shops" |
| AppSumo Fit | 4/5 | Mobile tool for solo techs — LTD is natural fit at $299–499 |
| Review Potential | 4/5 | HVAC tech community is active; will review if tool saves daily time |
| MRR Path | 4/5 | From LTD → $79/mo flat; natural subscription for ongoing manual updates |
| Build Feasibility | 5/5 | Mobile PWA: photo → model # OCR → RAG over equipment manuals → invoice language = 3–4 weeks |
| Boring Business Bonus | 5/5 | HVAC/plumbing repair — deepest boring |

**Verdict**: BUILD
**Decision Status**: NEW — see `../ideas/decisions.md`
**Next Steps**: Build MVP as simple mobile PWA: take a photo of equipment, get manual summary + invoice language. $79/mo flat, no per-user pricing. Target cold-weather states (boiler market) + Sunbelt (HVAC). Distribution: Facebook groups for small HVAC owners, cold email to shops not on ServiceTitan.
**Risks**: (1) Manual/parts data sourcing = licensing cost or scraping complexity; (2) Equipment database maintenance is ongoing; (3) AI accuracy for technical documentation must be high
**Key Source Links**:
- https://www.startupheist.com/the-field-manual-copilot-79k-mrr-underneath-servicetitan/
- https://news.ycombinator.com/item?id=47325824 (Conkoa — adjacent product)
- https://dev.to/przemek_heatalgo/i-dropped-out-of-college-burned-money-on-two-startups (HeatAlgo EU equivalent)
**Signal Frequency**: 8+ mentions across 30+ days — increasing
**Existing File**: `ideas/shortlisted/field-manual-copilot.md` — Signal History updated (85→87/105)

---

### 16. Dental Practice Management (AI-Augmented) — Score: 80→83/105 ↑3

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 4/5 | tab32 Alpine $95/mo with 17 AI agents launched Nov 2026; Juno/Periox racing to GA; 100K US dental practices |
| Competitor Weakness | 5/5 | Dentrix $5K transfer fee; Curve Dental 6+ hour outages; "feels like 2014" across all incumbents |
| LTD Viability | 2/5 | No — dental PMS requires ongoing support, insurance clearing house integrations, regulatory compliance |
| No Free Tier | 5/5 | Business-critical + compliance-driven; will pay $149–$299/mo for insurance verification alone |
| Channel Access | 4/5 | r/Dentistry, r/Dentists, r/CanadianDentists — very active; ADA forums |
| Content Potential | 4/5 | "Dentrix alternative 2026", "dental practice management AI", "insurance claims automation dental" |
| AppSumo Fit | 2/5 | Compliance-critical tool; practices prefer monthly subscriptions |
| Review Potential | 4/5 | Dental professionals leave reviews; active 2026 community on Reddit |
| MRR Path | 5/5 | Insurance verification alone = $299–$499/mo; full PMS = $149–$349/mo |
| Build Feasibility | 2/5 | HIPAA compliance + dental coding (CDT/ICD-10/X12 EDI) adds 3–4 month minimum |
| Boring Business Bonus | 4/5 | Dental practice — unglamorous healthcare, non-tech buyers |

**Verdict**: EXPLORE FURTHER
**Decision Status**: NEW — see `../ideas/decisions.md`
**Next Steps**: Build "dental insurance verification AI" as standalone wedge — plugs into Dentrix/Open Dental via Playwright + Availity, scrubs claims before submission, drafts appeal letters for denials. Charge $299–$499/mo. Race to GA before Zirco.ai/Juno.
**Risks**: (1) HIPAA compliance + BAA agreements = legal/compliance overhead; (2) Dental coding complexity (CDT/ICD-10/X12 EDI); (3) Market heating fast — tab32/Juno/Periox all racing; (4) Long sales cycles for dental practices
**Key Source Links**:
- https://tab32.com/tab32-launches-alpine-bringing-agentic-ai-to-independent-dental-practices/
- https://news.ycombinator.com/item?id=47385090 (Zirco.ai)
- https://www.reddit.com/r/Dentistry/comments/1qbxy2z/switching_from_curve_dental_to_opendental_tired/
- https://juno.dental/ (Dentrix alternative)
**Signal Frequency**: 10+ mentions across 60+ days — increasing rapidly (triple-source today)
**Existing File**: `ideas/shortlisted/dental-practice.md` — Signal History updated (80→83/105)

---

### 17. Voice-to-Invoice for Solo Tradespeople — Score: 91→93/105 ↑2

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | 8 independent geographic entrants in 2026; Fergus (26K tradies) adding AI voice layer = market maturity signal |
| Competitor Weakness | 5/5 | Bilingual EN/ES voice-to-invoice = unserved; photo-to-estimate = no one has nailed this flow |
| LTD Viability | 5/5 | $59–149 LTD maps well to "$20–49/month that feels expensive on slow weeks" |
| No Free Tier | 4/5 | Tradespeople understand ROI (invoice from job site vs driving back to office) |
| Channel Access | 5/5 | r/Plumbing, r/HVAC, r/landscaping, Hispanic contractor Facebook groups |
| Content Potential | 4/5 | "voice to invoice app contractor", "AI invoice generator trades", "electrician invoicing app iPhone" |
| AppSumo Fit | 5/5 | Solo tools — LTD is the natural pricing model |
| Review Potential | 4/5 | Daily-use tool → motivated reviews |
| MRR Path | 4/5 | From LTD → $29–49/mo with QBO sync, batch invoicing, payment links |
| Build Feasibility | 5/5 | Whisper + GPT-4o + Stripe = 2–4 weeks; WhatsApp delivery = 1 extra week |
| Boring Business Bonus | 5/5 | Tradespeople — deepest boring |

**Verdict**: BUILD
**Decision Status**: NEW — see `../ideas/decisions.md`
**Next Steps**: Build bilingual EN/ES voice-to-invoice for US Hispanic contractor market. InvoiceTicket is the only attempt and it's very early. Whisper + GPT-4o + Stripe. WhatsApp delivery. $79 LTD launch on AppSumo.
**Risks**: (1) Multiple concurrent global entrants; (2) Fergus/large FSMs may add voice layer and kill wedge; (3) Bilingual AI accuracy requires careful testing
**Key Source Links**:
- https://www.producthunt.com/products/angebotsmeister (Germany, PH #22)
- https://kordapro.com/ai/ (AU, WhatsApp delivery)
- https://www.xtriam.com/post/xtriam-launches-invoiceticket (EN/ES, US)
- https://ironkite.io/blog/labor-day-launch (voice-first trades job management)
**Signal Frequency**: 10+ mentions across 30+ days — increasing rapidly (global wave of builders)
**Existing File**: `ideas/shortlisted/solo-tradesperson-voice-invoice.md` — Signal History updated (91→93/105)

---

### 18. Technician Performance Pay Transparency — Score: 80→85/105 ↑5

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | ShareWillow $8.5M seed + 8x revenue + techs earned $2M in performance pay in Sept 2026 alone; Quinn $4M seed |
| Competitor Weakness | 4/5 | ShareWillow targets larger shops; 1-5 tech shops using Jobber completely unserved |
| LTD Viability | 3/5 | $199 LTD viable for small-shop version; retention tool appeal once pain is felt |
| No Free Tier | 4/5 | Businesses pay for retention tools when they feel the pain of losing techs |
| Channel Access | 4/5 | r/HVAC, r/ContractorTalk, Jobber user communities, service business Facebook groups |
| Content Potential | 3/5 | "technician pay transparency app", "how to calculate commission field service" |
| AppSumo Fit | 3/5 | Niche add-on; LTD viable at $199 |
| Review Potential | 3/5 | B2B2C (business owner + tech both benefit) = moderate review motivation |
| MRR Path | 4/5 | From LTD → $29–49/mo Jobber webhook integration |
| Build Feasibility | 5/5 | Jobber/HCP webhook-based, reads job data, shows tech real-time earnings per job = 3–4 weeks |
| Boring Business Bonus | 5/5 | HVAC, pest control, any trades shop — deepest boring |

**Verdict**: EXPLORE FURTHER
**Decision Status**: NEW — see `../ideas/decisions.md`
**Next Steps**: Build Jobber webhook-based tech earnings dashboard: reads job data, calculates per-job performance pay with full transparency to both owner and tech. 1–5 tech shops only. $29–49/mo or $199 LTD.
**Risks**: (1) ShareWillow may expand down-market once well-funded; (2) Jobber may add native performance pay; (3) Tech adoption: owners must opt-in to transparent pay
**Key Source Links**:
- https://www.alleywatch.com/2026/10/sharewillow-home-field-service-technicians-performance-pay-platform-ai-agents-skilled-trades-ryan-shank/
- https://www.kalosventures.com/blog/why-we-invested-in-quinn
**Signal Frequency**: 5+ mentions across 30+ days — increasing (institutional validation milestone today)
**Existing File**: `ideas/shortlisted/technician-performance-pay.md` — Signal History updated (80→85/105)

---

### 19. Restaurant Vendor Invoice Processing / Food Costing — Score: 83→85/105 ↑2

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 4/5 | MarginEdge $300+/mo has PMF; NibbleIQ building OCR + ingredient tracking = market confirmed |
| Competitor Weakness | 4/5 | MarginEdge priced for multi-unit ($300+/mo); XtraChef requires $500/mo human bridge; spreadsheets dominant |
| LTD Viability | 3/5 | Payment processing ongoing costs make LTD tricky; OCR/categorization piece only viable at $79 LTD |
| No Free Tier | 4/5 | Restaurant owners will pay for tools that save 3+ hours/week of invoice chaos |
| Channel Access | 4/5 | r/restaurantowners, r/restaurant, r/ToastPOS communities — active |
| Content Potential | 3/5 | "restaurant invoice processing software", "food cost tracking app small restaurant" |
| AppSumo Fit | 3/5 | Niche but complex; food costing alone is simpler than full invoice processing |
| Review Potential | 3/5 | Restaurant owners leave reviews but higher churn than trades |
| MRR Path | 4/5 | Recipes → ingredient costs → food cost % → supplier price change alerts = recurring value |
| Build Feasibility | 3/5 | OCR invoice processing + QBO sync = 4–6 weeks; supplier payment = more complex |
| Boring Business Bonus | 4/5 | Restaurant back-office — unglamorous operations |

**Verdict**: EXPLORE FURTHER
**Decision Status**: NEW — see `../ideas/decisions.md`
**Next Steps**: Narrow scope to food costing only (not full invoice processing): recipes → ingredient costs → food cost % → alert when supplier prices change. Target single-location independents at $29–49/mo (vs MarginEdge $300+/mo). Mobile-friendly for owner-operators.
**Risks**: (1) Restaurant churn is high; (2) OCR accuracy for messy invoices is hard; (3) MarginEdge may cut pricing; (4) Higher complexity than pure trades tools
**Key Source Links**:
- https://www.reddit.com/r/Restaurant_Managers/comments/1quzp35/whats_the_best_way_to_process_invoices_affordably/
- https://www.reddit.com/r/restaurantowners/comments/1fkufar/craftable_vs_marginedge_vs/
- https://www.reddit.com/r/ToastPOS/comments/1jz8yv0/xtrachef_vs_marginedge/
**Signal Frequency**: 8+ mentions across 30+ days — stable
**Existing File**: `ideas/shortlisted/restaurant-operations.md` — Signal History updated (83→85/105)

---

### 20. Grease Trap Service Compliance Software — Score: 83/105 ✨ NEW

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 4/5 | 27K+ US grease trap cleaning businesses; RouteHouse is building an edition for this; similar workflow to septic ($40K MRR proven) |
| Competitor Weakness | 4/5 | No modern mobile-first tool; RouteHouse is spread thin across 17 editions; paper + Excel dominant |
| LTD Viability | 4/5 | $299–499 LTD for solo operator doing 15 stops/day; FOG automation is a one-time-value proposition |
| No Free Tier | 5/5 | FOG (fats, oils, grease) compliance is regulatory-mandated — restaurant operators MUST document or lose permit |
| Channel Access | 3/5 | Grease trap community smaller than trades; reach via food service distributors, FOG/health dept forums |
| Content Potential | 3/5 | "grease trap service software", "FOG compliance tracking app", "grease trap route management" |
| AppSumo Fit | 3/5 | Niche product; $299–499 LTD is obvious buy for paper-based operators |
| Review Potential | 3/5 | Regulated industry, professionals leave reviews — smaller community |
| MRR Path | 4/5 | Automatic FOG percentage reports = compliance necessity = recurring revenue; $49–79/mo |
| Build Feasibility | 5/5 | Route management + FOG log (gallons pumped, FOG %, service date) + compliance PDF report = 3–4 weeks |
| Boring Business Bonus | 5/5 | Grease trap cleaning — most boring imaginable; zero VC attention; zero press coverage |

**Verdict**: BUILD
**Decision Status**: NEW — see `../ideas/decisions.md`
**Next Steps**: Build grease trap service compliance SaaS: route management + per-service FOG log (gallons pumped, FOG %, baffle condition, service technician cert number) + automatic compliance report generation + customer notification portal. Launch at $299 LTD for solo operators. Expand to septic, portable restrooms as adjacent editions.
**Risks**: (1) Small TAM without expansion to adjacent sub-trades; (2) RouteHouse may execute their grease trap edition well; (3) Health department FOG compliance requirements vary by municipality
**Key Source Links**:
- https://www.getroutehouse.com/news/17-trade-editions
- https://blanche.agency/en/blog/unsexy-vertical-saas-playbook-boring-industries-b2b
- https://markets.financialcontent.com/stocks/article/abnewswire-2026-11-24-fieldcommandos-launches-all-in-one-field-service-software-for-small-businesses-starting-at-2999-per-month
**Signal Frequency**: 2 mentions today (new idea) — NEW
**New Shortlisted File Created**: `ideas/shortlisted/grease-trap-service-software.md`

---

## Tier 2: Worth Exploring (Score 55–74)

### Trade Payroll Compliance (Certified Payroll / Davis-Bacon) — Score: 82/105

HN/IH: Trayd (YC-backed, $10M Series A, reduced weekly payroll from 14 hours to 27 minutes) confirms demand. Certified payroll SaaS for small GCs/specialty contractors doing public works projects = Davis-Bacon Act compliance (WH-347 form generation). Gap: sub-20-employee commercial contractor can't afford Trayd's enterprise target. $99–$199/mo focused on certified payroll reporting. Already tracked in `ideas/shortlisted/trade-payroll-compliance.md`. Signal History updated.

**Key Source**: https://news.ycombinator.com/item?id=47251873 (Trayd hiring post)

---

### Avenue Clone — Google LSA + Booking Widget for US Trades — Score: 72/105

HN/IH: Avenue AU$85K/mo ($55K USD MRR) in 18 months from standing start in Australia. The US market is 20x larger. No equivalent product dominates the "Google Business Profile booking button for trades" wedge in the US. Defensible pricing at $199–$395/mo. **Issue**: This is a subscription-only model (not LTD-viable at $199–$395/mo), requires heavy integrations (Google LSA API, Twilio, Vapi), and the door-to-door sales motion is hard to replicate without local market knowledge. Likely Tier 2 as a solo build but strongest "copy in a new market" play for a team with field sales experience. Mapping to `field-service-management.md` as a GTM angle for the FSM product.

**Key Source**: https://www.starterstory.com/stories/avenue-tom-holliday

---

### Dental Insurance Verification AI (Standalone) — Score: 71/105

Narrower than full dental PMS: plug into Dentrix/Open Dental, scrub claims before submission, draft appeal letters for denials. 2–3 hours/day per practice of pure manual work = $299–$499/mo ROI story. Issue: HIPAA compliance + X12 EDI complexity = 2–3 month minimum build, not 4–6 week MVP. Mapped to `ideas/shortlisted/dental-practice.md` as a phased approach. See Tier 1 dental entry above.

---

### Per-User Pricing Fatigue → Flat-Rate Small Business Bundle — Score: 60/105

Reddit: 12-person company paying 23 subscriptions totaling $4,100/month (481 upvotes). Strong signal of pain, but "build a bundle" is not a focused product. Vertical focus (e.g., service businesses only) would increase score. No standalone file — this is a go-to-market insight more than a distinct product idea. Recommend using this as pricing positioning for all current Tier 1 ideas (flat-rate pricing is the differentiator, not a product itself).

---

## Tier 3: Weak / Pass (Score <55)

| Idea | Score | Reason for Pass |
|------|-------|-----------------|
| Prelay (Weather-Based Work Planning) | 44/105 | No revenue validation; very narrow TAM; weather APIs already accessible free; Jobber/ServiceTitan could add this feature easily |
| Conkoa AI (Voice-First Construction Communication) | 48/105 | Early stage; very crowded space (Slack, Teams already trying); construction is a hard vertical with long sales cycles |
| HeatAlgo US Equivalent (Manual J Calculator) | 50/105 | ACCA licensing costs; niche within niche; existing tools (Wrightsoft, Elite) have loyal customer bases; build time underestimated |
| Conductor Clone (QB Desktop API for other verticals) | 52/105 | Developer-focused B2B; not a boring business SaaS play; niche audience; technical complexity high without domain expertise |

---

## Top 3 Recommendations

1. **Invoice Auto-Follow-Up for Trades** (`invoice-auto-followup-trades.md`) — Score: 99/105 — 3-week build, $14K/mo already proven, 2,197-upvote validation. The clearest "build it tomorrow" opportunity in the portfolio.
   - Key source: https://www.reddit.com/r/passive_income/comments/1rkivif/

2. **Cleaning Service Management — CleanDesk** (`cleaning-service-management.md`) — Score: 100/105 — ZenMaid $3M/yr proves the market, their per-user pricing is a documented cliff that's actively driving customers to look for alternatives, BlastoClean just launched at $0 MRR meaning the entry window is wide open.
   - Key source: https://jjandrade.com/blog/2026-02-18-best-cleaning-business-software-2026/

3. **Grease Trap Service Compliance Software** (NEW — `grease-trap-service-software.md`) — Score: 83/105 — The freshest white space: 27K+ US operators, all paper-based, FOG compliance is regulatory-required (can't skip), 3-4 week MVP build, zero competition at the affordable tier, zero VC attention. RouteHouse validates the market; their spread across 17 editions means they won't focus here.
   - Key source: https://www.getroutehouse.com/news/17-trade-editions

---

## Signal Summary Table

| Idea | Score | Change | Sources Today | Existing File |
|------|-------|--------|--------------|---------------|
| Pest Control Vertical SaaS | 101/105 | ↔ | hn-indiehackers | pest-control.md |
| Cleaning Service Management | 100/105 | ↔ | hn-indiehackers, competitor | cleaning-service-management.md |
| Property Management Small Landlords | 100/105 | ↔ | reddit, competitor | property-management.md |
| Small Carrier TMS | 100/105 | ↔ | reddit | small-fleet-trucking-tms.md |
| Auto Repair Shop | 100/105 | ↔ | competitor | auto-repair-shop-management.md |
| Field Service Mgmt + Analytics | 98/105 | ↔ | reddit, hn-indiehackers, competitor | field-service-management.md |
| Insurance Agency Mgmt | 98/105 | ↔ | reddit | insurance-agency-management.md |
| Septic / Sub-Trade Route | 98/105 | ↔ | trends | septic-route-optimizer.md |
| Invoice Auto-Follow-Up | 99/105 | ↔ | reddit | invoice-auto-followup-trades.md |
| Veterinary Practice | 95→96/105 | ↑1 | trends | veterinary-practice.md |
| Pressure Washing CRM | 97/105 | ↔ | reddit | pressure-washing-detailing.md |
| HVAC Job Costing | 97→98/105 | ↑1 | reddit | hvac-plumbing-job-costing.md |
| AI Phone Answering Trades | 82→85/105 | ↑3 | reddit, hn-indiehackers | ai-answering-dispatch-trades.md |
| Voice-to-Invoice Tradespeople | 91→93/105 | ↑2 | trends | solo-tradesperson-voice-invoice.md |
| Field Manual Copilot | 85→87/105 | ↑2 | hn-indiehackers | field-manual-copilot.md |
| Funeral Home Mgmt | 92→94/105 | ↑2 | trends | funeral-home-management.md |
| Dental Practice Mgmt | 80→83/105 | ↑3 | reddit, hn-indiehackers, trends | dental-practice.md |
| Technician Perf. Pay | 80→85/105 | ↑5 | trends | technician-performance-pay.md |
| Restaurant Food Costing | 83→85/105 | ↑2 | reddit | restaurant-operations.md |
| Grease Trap Service (NEW) | 83/105 | NEW | trends | grease-trap-service-software.md |
