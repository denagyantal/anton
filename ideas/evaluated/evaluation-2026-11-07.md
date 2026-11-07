# Idea Evaluation — 2026-11-07

**Sources evaluated**: 4 raw files (hn-indiehackers, reddit, trends, competitor-analysis)
**Ideas reviewed**: 33 distinct concepts across all files
**Date**: 2026-11-07

---

## Tier 1: Strong Opportunities (Score 75+)

### 1. Dental/Veterinary Compliance Reminder Automation — Score: 94/105

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | Validated builder: 53 paying customers, $4,150 MRR at ~11 months; C&D from incumbent confirms real market |
| Competitor Weakness | 4/5 | No dominant affordable tool; C&D from one unnamed incumbent; general task tools don't handle compliance schedules |
| LTD Viability | 4/5 | $59–$79 LTD per practice viable; annual compliance cycle = very sticky even post-LTD |
| No Free Tier | 4/5 | No credible free dental/vet compliance automation exists |
| Channel Access | 4/5 | Dental office manager communities, r/Dentistry, dental association forums, r/VetTech |
| Content Potential | 4/5 | "dental OSHA compliance software", "dental compliance reminders", "vet DEA compliance" |
| AppSumo Fit | 4/5 | 40 min/week saved = clear ROI; compliance risk avoided = urgency to buy |
| Review Potential | 4/5 | Practice managers are vocal reviewers; dental G2/Capterra categories active |
| MRR Path | 5/5 | Compliance never goes away; natural recurring SaaS; vet market (~6,800 practices) completely untouched |
| Build Feasibility | 5/5 | Cron-based alerts = 2–3 week MVP; $8/mo infrastructure cost confirmed by builder |
| Boring Business Bonus | 5/5 | Dental office compliance tracking = deeply unglamorous |

**Total: 94/105**

**Verdict**: BUILD
**Decision Status**: NEW
**Next Steps**: Build cron-based compliance reminder MVP for dental (OSHA, DEA, infection control, equipment calibration logs); validate 20 practices before adding vet module; set pricing at $49–$79/mo
**Risks**: One well-funded incumbent defended with C&D (identity unknown); HIPAA-adjacent data handling; seasonal practice closures affect MRR
**Key Source Links**:
- https://www.reddit.com/r/SaaS/comments/1qzhy0n/53_paying_customers_4150_mrr_and_a_ceaseanddesist/
**Signal Frequency**: 1 source today (first appearance in research cycle) — VALIDATED builder signal

---

### 2. AI Voice Receptionist for Trades (Missed-Call Revenue Recovery) — Score: 95/105

*(Existing file: `ai-voice-receptionist-home-services.md` — UPDATE)*

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | Bootstrapped $979K TTM/$360K profit (on acquire.com); IH blueprint $300–800 MRR/client at 80% margin; Broccoli $52M + Avoca $1B confirmed |
| Competitor Weakness | 4/5 | Agency model validated; no branded self-serve SaaS at $99/mo exists for trades |
| LTD Viability | 4/5 | "Pay once, never miss a call" = strong pitch; call-credit LTD model viable |
| No Free Tier | 4/5 | No quality free AI answering service |
| Channel Access | 5/5 | All trade subreddits; "AI answering service" SEO = high volume |
| Content Potential | 5/5 | "AI answering service for HVAC," "never miss a plumbing call" |
| AppSumo Fit | 4/5 | Clear ROI: one job = $200–500; LTD at $497 = pays for itself in one call |
| Review Potential | 4/5 | High ROI = strong review motivation |
| MRR Path | 5/5 | $300–800/client proven; 50 clients = $10K–40K MRR |
| Build Feasibility | 4/5 | Bland/Vapi/Retell = commoditized infrastructure; moat is industry training data + FSM integrations |
| Boring Business Bonus | 5/5 | HVAC, plumbing, pest control = deeply boring |

**Total: 95/105**

**Verdict**: BUILD
**Decision Status**: NEW (existing file)
**Next Steps**: Build self-serve HVAC-specific AI receptionist; under-price agency model ($99/mo vs $300–800/mo); integrate with Jobber/HCP webhooks
**Risks**: Broccoli/Avoca moving down-market; ongoing AI inference costs; crowded at agency tier
**Key Source Links**:
- https://news.ycombinator.com/item?id=47138087
- https://www.indiehackers.com/post/building-a-profitable-ai-voice-saas-agency-300-800-mrr-per-client-frAbgO1yQMfHOFFtY3gE
- https://xitter.cf/agazdecki/status/2114778346089283919 ($979K TTM bootstrapped)
**Signal Frequency**: 2 raw files today (HN/IH + Trends) — increasing, 2 days running

---

### 3. Post-Job Follow-Up Automation for Service Businesses — Score: 97/105

*(Existing file: `post-job-follow-up-automation.md` — UPDATE)*

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | CraftBoop: paying users ($29/mo); OnToolsAI: 7 trades, free-to-try — both validating simultaneously |
| Competitor Weakness | 5/5 | Email-only by both competitors; SMS-first + FSM webhook integration = unbuilt |
| LTD Viability | 4/5 | $79–99 LTD for a "set it and forget it" sequence |
| No Free Tier | 4/5 | Generic Mailchimp sequences don't trigger from job completion events |
| Channel Access | 4/5 | r/sweatystartup, Jobber/HCP Facebook groups, trade subreddits |
| Content Potential | 4/5 | "automated review requests for plumbers", "post-job follow-up HVAC" |
| AppSumo Fit | 4/5 | "Get 5x more Google reviews automatically" = clear AppSumo hook |
| Review Potential | 4/5 | Sellers of automation tools get strong reviews when ROI is measurable |
| MRR Path | 5/5 | $29–$79/mo; white-label for trade associations |
| Build Feasibility | 4/5 | SMS + webhook + 5-step sequence = 2–3 weeks |
| Boring Business Bonus | 5/5 | Plumbers, HVAC, cleaners = deeply boring |

**Total: 97/105**

**Verdict**: BUILD
**Decision Status**: NEW (existing file)
**Next Steps**: Build SMS-first version; add Jobber/HCP webhook trigger on job-complete; focus on Google review link delivery as #1 value prop
**Risks**: Jobber/HCP might build this natively; email open rates are low for trades demographic (SMS is correct bet)
**Key Source Links**:
- https://www.indiehackers.com/post/craftboop-built-automated-follow-ups-for-service-businesses-just-launched-looking-for-feedback-5aa58e1c39
- https://www.indiehackers.com/post/3-days-live-built-for-the-tradespeople-nobody-builds-for-cvMhopGD1uRgpZ1AVTcD
**Signal Frequency**: 2 raw files today (HN/IH + Trends)

---

### 4. Auto Repair Shop Management (Solo/Mobile Mechanic Focus) — Score: 100/105

*(Existing file: `auto-repair-shop-management.md` — UPDATE)*

Today's competitor analysis adds the solo/mobile mechanic angle specifically:
- **WrenchOps concept**: mobile-first for solo mechanics + mobile mechanics; offline-first architecture; OBD2 scanner integration via Bluetooth; IRS mileage tracking built-in; $79 LTD (1 user, unlimited ROs)
- 60,000+ independent solo/mobile mechanics priced out of Tekmetric/Shopmonkey
- 4-app cobbling confirmed: ARI + Google Maps + Torque Pro + Square = current state
- IRS mileage tracking built-in = $18K+ annual deductions for mobile mechanics = ROI story beyond shop management

**Total: 100/105** (stable — adding distinct mobile mechanic angle)

**Key Source Links**:
- https://garageauto.app/how-much-auto-repair-shop-software-cost/
- https://pro.trackara.app/blog/solo-mechanic-software
- https://capterra.com/p/190952/Tekmetric/reviews/

---

### 5. Cleaning Service Management — Score: 99/105

*(Existing file: `cleaning-service-management.md` — UPDATE)*

Today's competitor analysis confirms:
- ZenMaid per-cleaner pricing confirmed: 10-cleaner Pro Max = $289/mo vs $19/mo headline
- No proof-of-service layer at all in ZenMaid (photo timestamps, QR check-ins = commercial contract gap)
- Spanish-language cleaner mobile app confirmed unoccupied
- Flat-rate for 1–8 cleaners confirmed as "CleanOps" concept
- Facebook Groups "Cleaning Business Owners" = active acquisition channel; AppSumo potential confirmed

**Total: 99/105** (stable)

**Key Source Links**:
- https://fieldtics.com/blog/zenmaid-review
- https://www.g2.com/products/zenmaid-software/reviews
- https://getsweepsuite.com/guides/zenmaid-pricing

---

### 6. Small Fleet Trucking TMS (Owner-Operators, 1–10 Trucks) — Score: 97/105

*(Existing file: `small-fleet-trucking-tms.md` — UPDATE)*

Today's data adds:
- Reddit: 22-year accounting veteran with sophisticated background calling her own fleet operation "very complicated" = validated spreadsheet-only reality
- Trends: Overroad answers broker calls *as the carrier*, negotiates rates → delivers load offer to driver; TruckFlow.ai reads forwarded rate con PDF → builds load in 1 minute; Hemut $99/mo unlimited dispatchers; Transofai free 10 loads/mo
- Competitor: TruckDesk concept fully documented (IFTA + maintenance + settlements, no hardware, no contracts, $89 one-time LTD for 5 trucks)

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | 350K+ owner-operators; multiple builders shipping (Haullytics, RovexOne); new wave of AI tools |
| Competitor Weakness | 4/5 | McLeod enterprise; AscendTMS free but insufficient; sweet spot at $49–79/mo unoccupied |
| LTD Viability | 4/5 | $89 LTD for 5 trucks; truckers hate subscriptions but understand ROI |
| No Free Tier | 3/5 | AscendTMS has free tier (limited) |
| Channel Access | 4/5 | r/Truckers, r/TruckDispatchers, TruckersReport 400K+ |
| Content Potential | 4/5 | "TMS for owner operators", "IFTA software", "trucking dispatch" |
| AppSumo Fit | 3/5 | Truckers less likely AppSumo users; direct channel better |
| Review Potential | 4/5 | High: DOT compliance + IFTA errors = real pain |
| MRR Path | 4/5 | $29–49/truck/mo; compliance = non-discretionary |
| Build Feasibility | 3/5 | IFTA + ELD compliance + dispatch + invoicing = 6–8 weeks |
| Boring Business Bonus | 5/5 | Small trucking = deeply boring |

**Total: 97/105** (↑1 from 96/105)

**Key Source Links**:
- https://www.reddit.com/r/TruckDispatchers/comments/1r0qmrb/dispatchers_ownerops_what_do_you_wish_your_tms/
- https://www.reddit.com/r/OwnerOperators/comments/1rq8sjh/small_fleet_owner_15_trucks_called_her_admin_work/
- https://gooverroad.com/

---

### 7. Dental Practice AI OS (Insurance Verification + Front Desk) — Score: 94/105

*(Existing file: `dental-practice.md` — UPDATE)*

Massive new signals today:
- Lassie $35M from a16z, 700+ practices, saves 30–100 hrs/month
- Patientdesk.ai (YC): $17K → $50K MRR in just 8 weeks across 60+ clinics
- Kairos Health (YC Oct 2026): inbound + outbound recall + insurance in one
- Isaac PracticeOS $6.5M raised
- 180,000 dental practices in US; most VC-backed solutions target DSO/enterprise; solo practice (1–3 dentist) = explicit blind spot

Score: 93/105 → **94/105** (↑1: Patientdesk $50K MRR in 8 weeks = fastest PMF signal in dental this year)

**Key Source Links**:
- https://www.ycombinator.com/launches/Pka-patientdesk-ai-ai-native-operating-system-for-dental-clinics
- https://www.upstartsmedia.com/p/toothy-ai-lassie-raises-35m
- https://news.ycombinator.com/item?id=47385090

---

### 8. Field Service Management — Jobber Alternative Under $50/mo — Score: 84/105

*(Existing file: `field-service-management.md` — UPDATE)*

Today's data confirms:
- Multiple concurrent builders (DispatchCore, ServNox, BluePro, TradeCaddy — all 2025–2026 launches) = market timing right
- 35-contractor survey: Jobber most used but no one loves it; $267/mo Grow plan with key features as add-ons
- Defunct DOS-based Wintac users seeking replacement (HVAC-specific signal)
- FieldLedgr: free-tier entry strategy for small shops; no mobile comments
- Jobber has ZERO built-in sales pipeline — biggest gap vs HubSpot/CRM style tools

Score: 83/105 → **84/105** (↑1)

**Key Source Links**:
- https://www.reddit.com/r/Plumbing/comments/1pc93vu/i_built_a_modern_jobberhousecallservicetitan/
- https://www.reddit.com/r/Contractor/comments/1qk5y04/im_really_disappointed_with_jobber/
- https://news.ycombinator.com/item?id=47668698

---

### 9. Pool Service Route Management — Score: 94/105

*(Existing file: `pool-service-management.md` — UPDATE)*

ZenMaid pattern explicitly called out today:
- IH article: "build 'ZenMaid for pool cleaning' — route optimization, chemical log per pool, customer portal"
- Pool cleaning $12B industry, mostly owner-operated, no dominant indie tool
- 20–50 stops/day = route optimization is table-stakes (not just scheduling)

Score: stable **94/105** — additional signal from HN/IH article directly endorsing this category

**Key Source Links**:
- https://www.indiehackers.com/post/tech/from-a-cleaning-side-hustle-to-a-3m-yr-saas-for-cleaning-services-suhsqkDZB1zIwRmXxrFm

---

### 10. Pressure Washing & Auto Detailing CRM — Score: 93/105

*(Existing file: `pressure-washing-detailing.md` — UPDATE)*

New signals confirm the core pain:
- Reddit: "I don't understand how someone hasn't created a decent integrated FSM/CRM for less than $250 a month"
- Map-based daily schedule view with drive time between jobs = confirmed unbuilt feature
- Mobile detailers: route context baked into scheduling (reschedule = domino effect)
- TradeCaddy got traction posting in r/pressurewashers = proven distribution channel

Score: 92/105 → **93/105** (↑1)

**Key Source Links**:
- https://www.reddit.com/r/pressurewashing/comments/1noq1bu/why_is_crm_so_completely_broken_in_the_pressure/
- https://www.reddit.com/r/pressurewashing/comments/1kpps2n/what_fsmcrm_do_you_use_markate_sucks/

---

### 11. Short-Term Rental Bookkeeping — Score: 84/105

*(NEW file: `str-bookkeeping.md`)*

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | Builder at $22K MRR, started from zero via host Facebook groups and Reddit — validated market |
| Competitor Weakness | 4/5 | QB/Xero don't understand STR workflow; no channel-native (Airbnb/VRBO) import or occupancy tax tracking |
| LTD Viability | 4/5 | $79 LTD per property; seasonal tax prep spike creates urgency |
| No Free Tier | 3/5 | Generic spreadsheets remain common fallback |
| Channel Access | 4/5 | Airbnb host Facebook groups (massive), BiggerPockets, r/airbnb |
| Content Potential | 4/5 | "Airbnb accounting software", "STR bookkeeping", "short term rental tax prep" |
| AppSumo Fit | 4/5 | Airbnb hosts are AppSumo-adjacent; "file taxes from Airbnb in 10 minutes" = clear LTD hook |
| Review Potential | 4/5 | Hosts vocal in Facebook groups; H&R Block comparison reviews likely |
| MRR Path | 4/5 | Annual seasonality (Schedule E tax season) = 1 LTD → recurring upgrade path |
| Build Feasibility | 4/5 | Airbnb/VRBO API import + categorization + multi-property P&L = 4–6 weeks |
| Boring Business Bonus | 3/5 | Short-term rental operators = tech-adjacent; the accounting itself is boring |

**Total: 84/105**

**Verdict**: BUILD
**Decision Status**: NEW
**Next Steps**: Build Airbnb CSV importer + auto-categorization (platform fee vs. cleaning fee vs. taxable income) + multi-property P&L; validate with 10 host beta users
**Risks**: Airbnb could add bookkeeping features natively; host communities can be fickle; $22K MRR builder already in market
**Key Source Links**:
- https://www.reddit.com/r/buildinpublic/comments/1oejjnd/i_niched_down_so_hard_people_said_id_never_scale/
**Signal Frequency**: 1 source today — but validated $22K MRR by existing builder

---

### 12. Small Fleet Vehicle Maintenance Scheduler — Score: 89/105

*(Existing file: `small-fleet-vehicle-maintenance.md` — UPDATE)*

LubeLogger HN post (112 upvotes, 45 comments) = strongest crowdsourced demand signal for this category:
- Demand for: multi-engine support, NFC tag scanning, SMS reminders, parts database
- B2B angle entirely unserved (5-truck landscaping company, 10-van plumbing fleet)
- Vehicle Maintenance Log app: $12/yr for 2 vehicles = very low existing price ceiling

Score: 88/105 → **89/105** (↑1)

**Key Source Links**:
- https://news.ycombinator.com/item?id=39323601
- https://news.ycombinator.com/item?id=43758766

---

### 13. Property Management Maintenance Coordination — Score: 79/105

*(Existing file: `property-maintenance-coordination.md` — UPDATE)*

Today's data significantly strengthens this:
- Reddit: PM managing 659 units on AppFolio says its maintenance module should be "blown up and started over"
- PM at 150 units recording maintenance on paper + manually re-entering into spreadsheets per property
- Venderoo (AI for work orders, early stage) confirms the market; Property Meld validates "maintenance add-on" SaaS model
- Multiple threads (Aug 2026, Mar 2026, Feb 2026) = consistent, durable pain

Score: 76/105 → **79/105** (↑3)

**Key Source Links**:
- https://www.reddit.com/r/PropertyManagement/comments/1rqnf89/maintenance_coordination/
- https://www.reddit.com/r/PptyMgmtSoftware/comments/1vyip52/whats_missing_from_your_software_that_you_wish/

---

### 14. Legal Practice Management for Solo Attorneys — Score: 93/105

*(Existing file: `legal-practice-management.md` — UPDATE)*

Today's competitor analysis delivers best-ever Clio breakdown:
- Real Clio cost: $150–200/user (vs $79 headline) once client portal + partial billing added
- 5-attorney firm: $13K–$15K/year Clio vs $5.5K–$7.5K/year MyCase
- AppSumo: solo attorneys are active software buyers with real purchasing authority; no legal tool active = category-first
- "SoloCase" concept: $49/month flat, includes client portal AND IOLTA trust accounting in base plan (vs Clio's upsell)

Score: stable **93/105** (best-ever competitor analysis confirms the gap)

**Key Source Links**:
- https://mylegalacademy.com/kb/case-management-software-comparison-2026
- https://intellibill.io/blog/clio-alternatives
- https://ustechautomations.com/resources/blog/clio-alternatives-for-solo-lawyers-2026

---

### 15. Moving Company CRM / Operations Platform — Score: 81/105

*(Existing file: `moving-company.md` — UPDATE)*

New signal: Reddit r/sweatystartup confirms moving company CRM gap — "tried 3 different apps", employee communication, clock-in/out per move, automated customer emails, DOT compliance logs — none of the standard FSM tools handle this correctly.

Score: 80/105 → **81/105** (↑1)

**Key Source Links**:
- https://www.reddit.com/r/sweatystartup/comments/10dq78u/do_sweaty_businesses_have_custom_software_needs/

---

### 16. Landscaping CRM with Lead Pipeline + Chemical Compliance — Score: (existing, see file)

*(Existing file: `landscaping-lawn-care.md` — UPDATE)*

Today confirms two critical gaps:
- **Lead pipeline missing from Jobber**: anyone who calls for a quote but hasn't signed = lost prospect
- **Chemical application log missing** from all tools — fert/spray operators face compliance liability with paper logs
- Jobber $80/mo tier jump to hire first employee = $960/year penalty for growth
- Bulk seasonal price updates across 150+ recurring clients = manual in Jobber
- LawnDesk concept confirmed: lead pipeline + chemical compliance log at $69 LTD

**Key Source Links**:
- https://lawncrewpro.com/software/jobber-review/
- https://skillmammoth.com/blog/best-crm-for-lawn-care

---

### 17. Construction Permit & Inspection Tracking — Score: (see existing file)

*(Existing file: `contractor-permit-inspection-tracker.md` — UPDATE)*

Today's trends data confirms the category is maturing:
- InspectPilot AI: AI captures correction notices after failed inspection, alerts responsible trade, tracks fix, auto-schedules re-inspection through city portals (LADBS)
- The Permit Pilot: $99/mo, all permits across all jobs with deadline alerts
- 7 tools in market now, still fragmented, most GCs on spreadsheets
- AI that monitors municipal portals for permit status changes = white space

---

### 18. Weather-Aware Scheduling for Outdoor Contractors — Score: 78/105

*(NEW file: `weather-scheduling-outdoor-contractors.md`)*

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 3/5 | Prelay just launched on HN, 2 upvotes, no MRR disclosed; real pain validated ("wakes up at 4am to check weather for dozens of job sites") |
| Competitor Weakness | 4/5 | No integration with Jobber/HCP/ServiceTitan; Prelay is standalone = major distribution gap |
| LTD Viability | 4/5 | "Save one day's crew wages = $500+" = strong LTD ROI story |
| No Free Tier | 3/5 | Phone weather apps = free workaround currently used |
| Channel Access | 4/5 | r/landscaping, r/roofing, landscaping FB groups, Jobber community |
| Content Potential | 3/5 | "weather scheduling for contractors", "outdoor job scheduling weather" |
| AppSumo Fit | 3/5 | Clear ROI but niche; landscaping + roofing communities are active buyers |
| Review Potential | 3/5 | Will review if one crew day saved = paid for tool |
| MRR Path | 4/5 | Recurring weather events = recurring value; white-label franchise angle |
| Build Feasibility | 4/5 | Weather API + SMS alerts + schedule scan = 3–4 weeks; soil moisture modeling is differentiator |
| Boring Business Bonus | 5/5 | Landscaping, roofing = deeply boring exterior trades |

**Total: 78/105**

**Verdict**: EXPLORE FURTHER
**Decision Status**: NEW
**Next Steps**: Build as integration/add-on for Jobber rather than standalone; focus on "which of your jobs today are weather-risky?" SMS alert at 6am
**Risks**: Very early stage product; weather APIs can be unreliable; market may not pay for this vs free phone weather
**Key Source Links**:
- https://news.ycombinator.com/item?id=50341158
**Signal Frequency**: 1 source today (first appearance)

---

## Tier 2: Worth Exploring (Score 55–74)

### Voice-First Field Communication for Construction Trades — 69/105
Small GC gap (5–50 employees) for bilingual voice → job log tool is real, but Conkoa has only "dozens of companies" with no MRR disclosed, and the enterprise (Procore integration) vs. small-GC (Google Sheets) wedge requires a clear product decision. Build risk is significant (voice AI + bilingual transcription + field documentation). **Next step**: Survey 20 GCs; validate willingness to pay before building.
- Source: https://news.ycombinator.com/item?id=47325824

### Technician Performance Pay for Trades — 64/105
ShareWillow validated ($8.5M seed, 8x revenue growth, $2M in payouts in Sep 2026 alone) but this is a well-funded opponent. The white space (apprenticeship tracking, skill assessment, coaching for under-performing techs) requires deep ServiceTitan/Jobber integration. No LTD fit. **Monitor**: wait for ShareWillow to show competitive weakness before building.
- Source: https://www.alleywatch.com/2026/10/sharewillow-home-field-service-technicians-performance-pay-platform-ai-agents-skilled-trades-ryan-shank/

### Subscription Cost Audit Tool for Small Business — 65/105
Multiple high-upvote complaint threads; "12-person company paying $4,100/month for 23 subscriptions." Pain is real but horizontal (not industry-specific), tech-adjacent buyers, and Truebill/Rocket Money consumer analogs already exist. Best angle: annual audit report sold once ($59–$79 LTD) rather than monthly SaaS. **Next step**: Build a one-page audit report generator as a ProductHunt side project to test demand.
- Source: https://www.reddit.com/r/Entrepreneur/comments/1s5i577/

### QuickBooks Replacement for Multi-Entity Small Business — 73/105
Massive weekly demand ("Alternative to QuickBooks" threads appear weekly), QBO price hikes documented, but accounting software is a 12+ week build with complex edge cases, Wave has a free tier, and Zoho Books exists. Highest risk / reward. **Next step**: Double-entry accounting is table-stakes; validate whether multi-entity (multiple business profiles under one login) is enough of a wedge vs. Zoho Books.
- Source: https://www.reddit.com/r/smallbusiness/comments/1wkn3xt/

### Instant-Quote / Lead Capture Wizard for Contractors — 76/105
InstaBid is well-built but seeking distribution. The concept (instant quote widget replacing generic contact forms) is validated by the builder. Building a standalone embeddable widget at $49/mo is a 3–4 week build. The risk is distribution — finding 50 contractors to embed a widget on their websites requires active outreach.
- Source: https://www.indiehackers.com/post/launched-instabid-solo-multi-tenant-saas-for-service-contractors-here-is-whats-in-it-DAo4lRgyKwrwVAOnqWHJ

### Field-First Estimation & Quoting Tools — 92/105 (see existing file)
Feldy (YC, 200+ paying customers), Scout Out (YC W26), SMASH Voice to Invoice = category already has 3 funded YC companies. Existing file `contractor-quoting-estimation.md` should be updated with these signals. White space: pest control-specific estimating, roofing storm damage AI assessment.
- Source: https://www.ycombinator.com/launches/SiZ-feldy-field-first-ai-for-home-services-and-contractors/

## Tier 3: Pass / Weak Signal

### Home Service Booking Platform Integration Layer ("Twilio for Home Services") — 54/105
Classic infrastructure play that rarely succeeds as a small team. Only 1 HN Ask with 2 comments. The developers building voice AI and automation tools are more likely to build the integrations themselves (they have the technical skill). No LTD fit; B2D model works but requires enterprise sales. **Pass for now**.
- Source: https://news.ycombinator.com/item?id=45754496

---

## Top 3 Recommendations

1. **Dental/Veterinary Compliance Reminder Automation** — Score: 94/105 — Validated builder at $4,150 MRR with $8/mo infrastructure cost; 2–3 week MVP using cron jobs + email/SMS; vet market (6,800 practices) completely unserved and confirmed by builder as the logical next market; C&D from incumbent = real market. No competing shortlisted idea gets close to this for speed-to-revenue. Source: https://www.reddit.com/r/SaaS/comments/1qzhy0n/53_paying_customers_4150_mrr_and_a_ceaseanddesist/

2. **Post-Job Follow-Up Automation for Service Businesses** — Score: 97/105 — CraftBoop AND OnToolsAI both validating simultaneously = market timing confirmed; neither has SMS-first or FSM webhook integration; "set it and forget it" = zero user behavior change required; Google review automation as #1 hook. Source: https://www.indiehackers.com/post/craftboop-built-automated-follow-ups-for-service-businesses-just-launched-looking-for-feedback-5aa58e1c39

3. **AI Voice Receptionist for Trades** — Score: 95/105 — Bootstrapped $979K TTM/$360K profit on acquire.com = most concrete revenue validation of any idea today; $300–800 MRR/client proven agency model; self-serve SaaS unbuilt at < $99/mo; HVAC-native AI with FSM integrations = moat others haven't built. Source: https://xitter.cf/agazdecki/status/2114778346089283919

---

## Signal Frequency Summary

| Idea | Mentions Today | Trend |
|------|---------------|-------|
| AI Voice Receptionist | 2 (HN/IH + Trends) | Increasing — 3rd+ week running |
| Post-Job Follow-Up | 2 (HN/IH + Trends) | Increasing |
| Trucking TMS | 2 (Reddit + Trends + Competitor) | Stable — persistent multi-week |
| Cleaning Service | 1 (Competitor) | Stable |
| Auto Repair | 1 (Competitor) | Stable — persistent multi-month |
| Dental Practice | 3 (HN/IH + Trends + Reddit) | Increasing — VC wave |
| Property Management | 2 (Reddit + Trends) | Stable |
| Field Service (Jobber alt) | 2 (Reddit + HN/IH) | Stable |
| Pool Cleaning | 1 (HN/IH) | New today |
| Dental/Vet Compliance | 1 (Reddit) | First appearance — validated MRR |
| STR Bookkeeping | 1 (Reddit) | First appearance — validated MRR |
| Small Fleet Maintenance | 1 (HN/IH) | Stable |
