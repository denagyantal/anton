---
stepsCompleted: [1, 2, 3, 4, 5]
inputDocuments:
  - ideas/shortlisted/f-gas-refrigeration-compliance.md
  - _bmad-output/planning-artifacts/market-research-f-gas-refrigeration-compliance.md
workflowType: product-brief
lastStep: 5
project_name: f-gas-refrigeration-compliance
date: 2026-11-11
author: Root
---

# Product Brief: F-Gas Refrigeration Compliance Tracker

---

## Executive Summary

UK refrigeration engineers are running a legally-mandated compliance function on paper job sheets and WhatsApp. F-Gas regulations require a 5-year audit trail of every refrigerant addition, removal, and leak check — but no affordable, purpose-built tool exists for the 10,695+ REFCOM-certified UK companies at the solo or micro end of the market.

**The F-Gas Refrigeration Compliance Tracker** is a mobile-first, UK-specific F-Gas log and audit trail generator priced at £6.99/month for solo operators — undercutting every current paid competitor. It is purpose-built for the compliance workflow, not a generic field service management tool with F-Gas bolted on. Engineers log jobs on-site (offline), and the app auto-generates the 5-year audit trail PDF that regulators require.

The market timing is acute: UK F-Gas regulation tightened in 2025–2026, Wintac (the legacy DOS-era tool thousands relied on) has had its activation servers shut down, and 60–70% of RACHP contractors are still paper-based. This is a non-discretionary regulatory purchase with no affordable native solution — a rare convergence of urgency, underservice, and a clear price gap.

**Target launch:** UK-direct, solo-first, at £6.99/month. REFCOM partnership is the primary distribution lever.

**12-month revenue target:** £10K MRR by month 6; £30K MRR by month 12.

---

## Core Vision

### Problem Statement

UK refrigeration and air conditioning engineers must maintain F-Gas compliance records under the Fluorinated Greenhouse Gas (FGas) Regulations — currently the UK F-Gas Regulation (SI 2015/310) as amended. Every job involving a refrigerant system requires a record of: gas type, quantity charged or recovered, date, leak check outcome, engineer certificate number, and company certification. These records must be retained for 5 years and produced on demand for Environment Agency (EA) inspections and REFCOM certification renewals.

Today, the dominant workflow is paper job sheets stored in van ring-binders, supplemented by WhatsApp photos sent to an office email. Field research (r/refrigeration, r/ProHVACR, October 2026) confirms this is the near-universal practice among solo and micro contractors. Spreadsheet hybrids exist, but creating accurate annual leak-rate calculations from disconnected spreadsheets still takes 3–7 days of manual work before an inspection.

The trigger events that force change are:
- REFCOM audit flags missing or inconsistent records during annual certification review
- EA enforcement visit (fines up to £20,000 for F-Gas breaches)
- A commercial customer (supermarket, hotel chain) demands digital compliance records as a contract requirement
- Legacy software death — Wintac's activation servers shut down in 2025–2026, stranding thousands of small operators with no accessible compliance history

### Problem Impact

For the solo contractor, a failed REFCOM audit means a suspended certification — effectively shutting down their business until records are reconstructed. For firms servicing supermarket chains or cold-store operators, the inability to produce digital records is a contract-termination risk.

Beyond the regulatory risk, the operational cost is real: assembling 5 years of paper records for a single complex site can consume 3–7 days of an engineer's time. At a day rate of £300–400, that is £900–2,800 of unbilled time per inspection — a cost that rarely appears in anyone's ROI calculation but is felt acutely when it happens.

The annual HFC quota reduction (stepping down ~22.6% from 2026 levels by 2027) is also driving refrigerant price increases, raising the financial stakes of accurate refrigerant quantity records. Engineers who can prove tight cylinder accountability will have a cost advantage over those who cannot.

### Why Existing Solutions Fall Short

| Solution | Why It Falls Short |
|----------|-------------------|
| **Paper / WhatsApp** | Fails audit scrutiny; records easily lost; impossible to auto-calculate CO2e leak rates; fabricatable |
| **Spreadsheets** | Manual, error-prone; no mobile entry; no PDF report generation; disconnected from job records |
| **Joblogic** (£45–49/user/month) | Prohibitively expensive for solo operators; free REFCOM tier (1 user) is too complex to navigate; enterprise UX for a trade workflow |
| **Field Ascend** (£10/user/month, 3-user minimum) | Excludes true solos; minimum £30/month commitment; limited brand recognition |
| **Checker** (£10.99/month flat) | Closest to the gap but not marketed aggressively to solos; no REFCOM endorsement; job-management-first, not F-Gas-first |
| **ClimaTrack** (£79–149/month flat) | Uneconomical for solo/2-engineer firms |
| **AirLogic** (free iOS app) | No monetisation for compliance logging; diagnostic-focused not compliance-focused |

The core gap: **no tool offers a solo F-Gas-first experience below £10/month.** Joblogic's free tier creates the illusion of coverage, but its complexity means most solo users abandon it and revert to paper within 90 days.

### Proposed Solution

A mobile-first, UK-specific F-Gas compliance tracking application priced at £6.99/month for solo operators (£8.99/user/month for teams), with the following core proposition:

**Log any F-Gas job in under 2 minutes on a mobile phone.** The app knows UK refrigerant types, UK leak-check frequencies, and what the EA and REFCOM require. Engineers don't configure anything — they just log jobs.

**Auto-generate the 5-year audit pack.** One tap produces a formatted PDF showing all F-Gas records for any registered system or site over 5 years, structured to match REFCOM and EA inspection expectations. This is the killer feature that justifies switching from paper.

**Works offline in signal-dead environments.** Plant rooms, cold stores, and underground plant areas have no mobile signal. The app captures job data offline and syncs when connectivity returns. This is a hard requirement that several competitors get wrong.

**UK-specific defaults.** Gas types, leak-check intervals, CO2e calculations, and reporting formats all default to UK F-Gas Regulation requirements. No configuration needed.

The product is **not** a generic field service management tool. It does not compete with Joblogic on scheduling, dispatching, CRM, or invoicing. It wins by doing one thing better than anyone else: making F-Gas compliance effortless and audit-proof for solo operators.

### Key Differentiators

1. **F-Gas-first interface** — Every screen, every workflow, every label is designed for the refrigeration compliance workflow. Not an FSM tool with F-Gas as a tab.

2. **True solo pricing** — £6.99/month total, no per-user minimum. The first paid tool that is genuinely accessible for a 1-engineer sole trader.

3. **5-year audit pack generator** — Auto-generate a PDF showing all records per system/site over 5 years, formatted for REFCOM and EA inspection. No other tool generates this automatically.

4. **Offline-first mobile** — Works in plant rooms, cold stores, and basements with zero connectivity. Syncs when signal returns.

5. **UK regulatory defaults** — Pre-configured for UK F-Gas Regulation requirements. Zero configuration for a UK engineer.

6. **Wintac migration path** — Import of legacy records from Wintac exports (CSV/Excel) for the active refugee segment seeking an immediate replacement.

7. **Data portability** — Export all records at any time. This builds trust with engineers conditioned to fear lock-in after the Wintac shutdown.

---

## Target Users

### Primary Users

**Persona 1: Steve — The Solo RACHP Contractor**

Steve is 44, runs a sole-trader refrigeration contracting business in the East Midlands. He holds an F-Gas Category 1 certification and his REFCOM membership. He services 60–80 commercial refrigeration systems per year — walk-in cold rooms for restaurants and butchers, display cases for convenience stores, small-scale industrial chillers.

Steve currently logs F-Gas work on a job sheet pad he buys from a trade supplier, photographs each sheet on his iPhone, and sends the photo to his wife who keeps them in a folder in Dropbox. He knows this is not ideal. He had a conversation with a REFCOM inspector two years ago who "had a word" about his record organisation. He intends to sort it out but hasn't found a tool simple enough to bother with.

His price ceiling is £10–12/month total. He evaluated Joblogic once and gave up after 20 minutes of setup. He has no interest in scheduling software, CRM, or invoicing — he invoices on paper.

**Steve's trigger:** REFCOM renewal flags a discrepancy in his leak-check records for a customer site. He is given 30 days to provide complete records or risk certification suspension.

**Steve's first use:** Signs up at 7pm on his phone. Logs the three jobs he did that day in 6 minutes. Runs the audit report for the flagged site — sees all records since he started using the app. Screenshots it for his REFCOM response. Subscribes.

**Steve's success state:** He logs every F-Gas job on-site, while still in the plant room, within 2 minutes. REFCOM renewal is a non-event. When an EA inspector visits an industrial customer he services, Steve produces a 5-year PDF in 30 seconds and the inspector has no further questions.

---

**Persona 2: Dave — The Small RACHP Firm Owner (3 Engineers)**

Dave is 51, runs a limited company with himself and two employed engineers. His firm services commercial refrigeration and light AC for a mix of food retail, hospitality, and facilities management clients. Annual revenue ~£400K.

Dave used Wintac for 12 years. When the activation servers shut down in 2025, he lost access to all historical records. He reconstructed 2 years of records from paper archives at a cost of 4 days of admin time. He is now on a temporary Excel system he built himself, which works but requires him to manually calculate leak rates and assemble records for each system before any inspection.

Dave's price ceiling is £10–15/user/month for a system that handles all three engineers' records centrally.

**Dave's trigger:** A major supermarket client introduces a requirement for digital F-Gas records with 48-hour access SLA. Dave's Excel system cannot meet this.

**Dave's success state:** All three engineers log on-site via mobile. Dave has a central dashboard showing compliance status across all client sites. When the supermarket client requests records, he generates and emails a PDF in 3 minutes.

---

**Persona 3: The Wintac Refugee (Active Searcher)**

An estimated 500–1,000 RACHP contractors used Wintac. With its activation servers down, they are actively searching Google for a replacement right now. They have motivation (immediate urgency), partial data (CSV/Excel exports from old Wintac data), and willingness to pay. This is a time-sensitive acquisition opportunity distinct from the general paper-to-digital journey.

Their distinguishing need: a Wintac data migration wizard that can import historical records so they don't start from zero.

### Secondary Users

**Facilities managers at commercial operators** — Supermarkets, hotel chains, and logistics companies that operate refrigeration equipment have an independent F-Gas record-keeping duty under UK regulations. They are not direct users of the product at MVP, but they are the **customers of Steve and Dave** who are increasingly demanding digital records. Their pressure is the trigger that motivates Steve and Dave to digitise.

**REFCOM inspectors** — REFCOM certification auditors review F-Gas records as part of annual member renewal. They are the external validators who determine whether Steve's records are acceptable. Designing the audit pack PDF to meet REFCOM's inspection standards (not just generic record-keeping) makes the product authoritative in this channel.

### User Journey

**Discovery:**
- Google: "F-Gas software UK", "F-Gas log app", "refrigerant compliance software UK"
- REFCOM member benefits page (requires a preferred partner listing)
- Reddit (r/refrigeration, r/ProHVACR) — word of mouth from peers is highest-trust channel
- Facebook Groups: UK Refrigeration Engineers (~15K members), HVAC/R UK
- Trade press: ACR Journal, Cooling Post

**Trigger:**
- REFCOM renewal flags incomplete records
- EA enforcement visit or customer audit demand
- Wintac shutdown (immediate, active search)
- Commercial client demands digital records

**Consideration:**
- 2–3 tool comparisons (likely Checker, Joblogic free tier, and this product)
- Free trial (critical — must offer no-credit-card trial for first 14 days)
- Peer recommendation in Reddit/Facebook group
- Price is the primary filter: "Is it under £10/month total?" eliminates most alternatives immediately

**Activation (the "aha!" moment):**
Steve logs his first F-Gas job on-site in a walk-in cold room (no signal) on his phone. When he gets back to his van, it syncs. He runs the audit report for one of his regular sites and sees all his logged jobs in a clean PDF. He sends it to himself. He realises this is exactly what REFCOM wants to see. He subscribes.

**Retention:**
Every job logged increases the value of the app (more historical data = better audit trail). The 5-year record retention requirement means the switching cost compounds every month. After 12 months of records, Dave would not change to a competitor without a compelling reason — his compliance history is in the system.

**Referral:**
"I use [app name] for my F-Gas records — cost me less than £7/month and saved me hours before my last REFCOM renewal." Engineers recommend via word-of-mouth in trades forums and pub/van conversations.

---

## Success Metrics

### User Success

**Activation:** Engineer logs first F-Gas job within 24 hours of account creation.

This is the single most predictive early indicator. An engineer who logs on Day 1 is validating that the mobile UI is simple enough to use without instructions.

**Retention:** 85%+ of paid users still active at 90 days.

Compliance tools are inherently sticky once records are accumulating. 85% at 90 days signals the product is retaining users through their first real-world regulatory event (not just the initial trigger). Users who churn before 90 days are likely those for whom the trigger event resolved without needing the full product.

**Audit pack usage:** 70%+ of monthly active users generate at least one audit report PDF within their first 90 days.

The audit pack is the killer feature. If users are not generating reports, they are not experiencing the core value. This metric drives product health — if it drops, audit pack UX needs investigation.

**Time-to-first-log:** Under 10 minutes from signup to first F-Gas entry logged.

Measures onboarding friction. The target demographic (trade engineers, 35–55, tech-cautious) will abandon an app that requires setup time. Under 10 minutes is the bar.

### Business Objectives

| Milestone | Target Date | Metric |
|-----------|-------------|--------|
| 100 paying users | Month 2 | Product-market fit signal in solo segment |
| £5K MRR | Month 4 | Revenue validates unit economics |
| £10K MRR | Month 6 | Proves scalability within UK solo/micro segment |
| £30K MRR | Month 12 | Establishes market position; triggers team/EU expansion |
| REFCOM preferred partner | Month 3 | Distribution channel activated |
| NPS > 50 | Month 6 | Net Promoter Score confirming strong word-of-mouth potential |

**12-month addressable revenue model:**
- Low scenario: 2,000 customers × £8/month average = £16K MRR (£192K ARR)
- Mid scenario: 3,000 customers × £10/month = £30K MRR (£360K ARR)
- High scenario: 5,000 customers × £10/month = £50K MRR (£600K ARR)

$10K+ MRR within 12 months is achievable with strong REFCOM distribution and aggressive solo pricing.

### Key Performance Indicators

**Acquisition KPIs:**

- Monthly new signups: 50 in month 1 → 200 in month 6 → 500 in month 12
- Signup-to-paid conversion: 25%+ (compliance tools with high-urgency triggers should convert well)
- CAC: Under £30 (community-led growth should keep this low)
- Primary acquisition channel: REFCOM listing + community (target 60% of signups from these two sources)

**Engagement KPIs:**

- Monthly jobs logged per active user: 20+ (average engineer: 1 job/day × 22 working days = 22 jobs/month)
- Audit reports generated per month per user: 1+ (minimum; inspections and renewals are periodic)
- Mobile vs. desktop ratio: 80%+ mobile (validates mobile-first assumption)
- Offline sync events per week: meaningful volume confirms engineers are logging in signal-dead environments

**Financial KPIs:**

- MRR growth: 20%+ month-over-month in months 2–6
- Churn rate: Under 3% monthly (compliance tool benchmark; below 5% is acceptable)
- LTV:CAC ratio: 10:1+ (compliance tools with high switching costs should achieve strong LTV)
- Average revenue per user (ARPU): £8–10/month blended (solo at £6.99, small teams at £8.99/user)

**Regulatory/Trust KPIs:**

- REFCOM renewal success rate for users: Track via user surveys — users who experienced a smooth REFCOM renewal become the strongest advocates
- EA inspection pass rate: Survey users post-inspection to validate audit pack quality

---

## MVP Scope

### Core Features

The MVP must solve the core compliance problem for a solo operator in its entirety. A solo engineer using the MVP should be able to: log every F-Gas job required by regulation, stay confident their records are REFCOM/EA compliant, and produce a 5-year audit trail PDF on demand. Everything else is v1.1 or v2.

**1. Equipment Registry**
Register refrigeration systems/assets with: location, equipment type, refrigerant type, system charge (kg), GWP, calculated CO2e. This is the master record that all F-Gas entries hang off.
*Why MVP:* Without an equipment registry, there is no coherent audit trail — just a list of jobs with no system context.

**2. F-Gas Job Log Entry**
Log a job against a registered system: date, engineer (from certified engineer registry), action (charge/recover/leak check/installation/decommission), refrigerant type, quantity in/out (kg), leak check outcome (pass/fail/N/A), notes.
*Why MVP:* This is the core compliance act. Every field is required by UK F-Gas Regulation record-keeping rules.

**3. Certified Engineer Registry**
Store engineer names and F-Gas certificate numbers. Auto-populate on job logs. REFCOM requires the certifying engineer's details on every F-Gas record.
*Why MVP:* Missing engineer cert data = invalid F-Gas record under regulation.

**4. Leak Check Scheduling**
Based on system CO2e (≥5 tonnes: 6-monthly checks; ≥50 tonnes: quarterly; ≥500 tonnes: more frequent), auto-calculate the next required leak check date and surface overdue systems as alerts.
*Why MVP:* Failure to perform and document leak checks at the required frequency is the most common EA enforcement finding. This is the proactive compliance safety net.

**5. 5-Year Audit Trail PDF Generator**
Generate a formatted PDF showing all F-Gas records for a selected system/site over 5 years (or since account creation). Formatted to match REFCOM and EA inspection expectations: sorted by date, includes all required fields, includes engineer cert numbers, includes CO2e calculations.
*Why MVP:* This is the killer feature. It is the product's reason for existing. Without it, the app is just a digital notepad.

**6. Mobile-First App with Offline Sync**
Full job log entry and equipment lookup available offline. Syncs to the cloud when connectivity returns. iOS and Android.
*Why MVP:* 70%+ of jobs are logged in environments with no signal (plant rooms, cold stores, basements). An online-only app fails at first use in this market.

**7. UK F-Gas Regulation Defaults**
Gas type database (all UK-approved refrigerants with GWP values), leak-check frequency logic per system CO2e, CO2e auto-calculation from refrigerant type + quantity. No configuration required for UK engineers.
*Why MVP:* The core UX promise. Engineers should log a job without knowing the regulation — the app should enforce it transparently.

### Out of Scope for MVP

The following features are explicitly deferred. This is not because they lack value — it is because including them would increase build time beyond the 4–6 week MVP target, increase UX complexity beyond the threshold for the target demographic, and dilute the product's core "F-Gas-first" positioning.

| Feature | Why Deferred | Target Version |
|---------|-------------|----------------|
| Invoicing / billing | Generic FSM territory; would pull product identity away from compliance specialisation | v2 |
| Job scheduling / dispatch | Full FSM territory; Joblogic already owns this for mid-market | v2 |
| Xero / QuickBooks integration | Valuable for small firms; not relevant for solo-first MVP | v1.1 |
| Cylinder / refrigerant stock tracking | Useful but adds significant data model complexity; not legally required for F-Gas records | v1.1 |
| Multi-engineer team management (permissions, dashboards) | Needed for 5+ engineer firms; not required for solo or 2-3 person teams using basic shared access | v1.1 |
| EU 2024/573 compliance mode | EU expansion is a growth path, not MVP | v2 |
| Wintac data migration wizard | Desirable but not blocking; Wintac refugees can start fresh on MVP | v1.1 |
| Multi-site enterprise reporting | Facilities management use case; too complex for MVP | v2 |
| Customer portal (share records with clients) | High value for commercial clients; meaningful build complexity | v1.1 |
| AI-assisted leak rate trend analysis | Premium feature; depends on accumulated data | v3 |

### MVP Success Criteria

The MVP is validated when:

1. **50 paying UK solo/micro contractors** signed up and actively logging jobs (not just trial accounts)
2. **At least 10 users have survived a REFCOM renewal** while using the app and confirmed their records were accepted without issue
3. **NPS ≥ 40** after first 90 days (indicates strong word-of-mouth potential in the trade community)
4. **Churn under 5% monthly** (validates regulatory stickiness thesis)
5. **REFCOM preferred partner listing** secured (or at minimum, a confirmed conversation underway)

If these five criteria are met within 90 days of launch, the product has validated its core thesis and investment in v1.1 (team features, Wintac migration, integrations) is justified.

Go/no-go for EU expansion: £15K+ MRR in UK with stable churn + confirmed interest from 20+ EU-based engineers.

### Future Vision

**v1.1 (Months 4–8) — Team & Migration**
- 2–10 engineer team accounts with centralised dashboard
- Wintac data migration wizard (CSV/Excel import of historical records)
- Customer portal: share F-Gas records directly with commercial clients
- Xero integration for joining compliance and billing workflows
- Cylinder stock tracking

**v2.0 (Months 9–18) — Full RACHP Platform**
- Full job management: scheduling, dispatching, work orders
- Invoicing with F-Gas compliance pre-populated on service reports
- Fleet and engineer management for 10–50 person firms
- Mobile and desktop apps (Windows desktop for office-based managers)
- Becomes the affordable mid-market alternative to Joblogic

**v3.0 (Months 18–36) — EU Expansion + Intelligence**
- EU 2024/573 compliance mode (Germany, France, Netherlands first)
- Northern Ireland: Windsor Framework EU-rules mode
- AI-assisted leak rate trend analysis and predictive maintenance alerts
- Regulatory update service: auto-adaptation to regulation changes

**Long-term vision:**
The de facto compliance platform for European refrigeration and HVAC engineers — the tool that REFCOM, BRA, and equivalent EU trade bodies recommend to their members. Not because it has the most features, but because it understands the work better than any tool built by people who have never serviced a refrigeration system.

The exit or scale thesis: at £30K+ MRR in the UK with demonstrated EU traction, this becomes an attractive acquisition target for a Joblogic, Commusoft, or international FSM consolidator — or a fundable Series A story for a European regulatory-tech expansion.

---

## Appendix: Competitive Pricing Reference (November 2026)

| Vendor | Solo price | Team price | F-Gas native? | Offline? |
|--------|-----------|------------|---------------|---------|
| **[This product]** | **£6.99/month** | **£8.99/user/month** | **Yes** | **Yes** |
| Checker LITE | £10.99/month | £18.99+/month | Yes | Partial |
| Field Ascend | N/A (min 3 users) | £10/user/month | Yes | Yes |
| Joblogic (free tier) | Free (1 user, complex) | £45–49/user/month | Yes | Partial |
| ClimaTrack | N/A | £79–149/month flat | Yes | Unknown |
| AirLogic | Free (no compliance tier) | N/A | Partial | Unknown |
| simPRO / BigChange | Quote only | Quote only | Add-on only | Partial |

---

*Product brief generated from: shortlisted idea (scored 83/105, evaluated 2026-10-28) and market research report (2026-11-11). Ready for PRD creation.*
