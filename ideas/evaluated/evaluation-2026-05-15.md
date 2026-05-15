# Idea Evaluation — 2026-05-15

**Sources**: reddit-2026-05-15, hn-indiehackers-2026-05-15, competitor-analysis-2026-05-15, trends-2026-05-15  
**Evaluator**: Idea Evaluator Agent  
**Total ideas reviewed**: 30+ across 4 raw files  
**New Tier 1 ideas**: 4 (Insurance AMS, Construction WIP, Revenue Concentration Monitor, WordPress Multi-Site)  
**Updated existing Tier 1**: 10 ideas got strong new signals today

---

## Tier 1: Strong Opportunities (Score 75+)

### Insurance Agency Management System (1–5 Agent Indie Agencies) — Score: 94/105 ⭐ NEW

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | 40K+ independent agencies in US; applied Epic $500+/mo, AMS360 opaque pricing, HawkSoft $94/user — confirmed real paying market, explicit complaints |
| Competitor Weakness | 5/5 | AMS360: "too expensive" (multi-forum), opaque pricing, overkill for small agencies; HawkSoft: $94/user/mo makes 3-person shop $300+/mo; Applied Epic enterprise-only; no modern affordable option below $100/mo |
| LTD Viability | 4/5 | $89–119 LTD viable; strong AppSumo fit; category nearly absent from AppSumo = first-mover |
| No Free Tier | 5/5 | No free or freemium AMS options exist; all paid |
| Channel Access | 4/5 | r/Insurance, r/insuranceprofessional, Insurance Journal forums, Big I (IIABA) community, independent agent Facebook groups |
| Content Potential | 3/5 | "insurance agency software", "AMS360 alternative", "small insurance agency management" |
| AppSumo Fit | 4/5 | Category completely absent from AppSumo; insurance agents are spreadsheet-heavy and price-sensitive |
| Review Potential | 4/5 | Insurance professionals actively review software on G2/Capterra |
| MRR Path | 5/5 | Renewal reminders, compliance tracking, policy management = high recurring value; clear upgrade from LTD to MRR |
| Build Feasibility | 4/5 | MVP in 4–6 weeks: client/policy DB + renewal reminders + commission tracker + document vault; no deep domain expertise required |
| Boring Business Bonus | 5/5 | Insurance agency management = deeply unglamorous; VCs ignore it completely |

**Weighted Total**: 94/105

**Verdict**: BUILD  
**Decision Status**: NEW — add to `../ideas/decisions.md`  
**Next Steps**:
1. Build MVP: client + policy database, renewal reminders (email/SMS), commission split calculator, carrier document vault
2. Flat pricing: $89/mo (up to 5 users) — no per-user fees = immediate differentiator
3. LTD: $89 (up to 3 users) / $119 (up to 8 users) on AppSumo
4. Seed: r/Insurance, Insurance Journal forums, Big I community, independent agent Facebook groups

**Risks**:
1. Complex carrier integrations expected by agents (start without, add later)
2. E&O documentation compliance requirements vary by state
3. Switching cost from existing AMS is high for established agencies (target new agencies as ICP)

**Key Source Links**:
- https://www.insurance-forums.com/community/threads/what-agency-management-system-software-do-you-use.8760/
- https://www.g2.com/compare/ams360-vs-hawksoft
- https://glovebox.io/blog/best-insurance-agency-management-systems/
- https://www.capterra.com/p/79412/HawkSoft-CMS/
- https://www.jenesissoftware.com/2026/05/insurance-agency-management-systems-2026/

**Signal Frequency**: First dedicated evaluation. Signal present in reddit and competitor analysis today — two sources.

---

### Construction WIP Automation for QuickBooks Online — Score: 89/105 ⭐ NEW

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 5/5 | QBO Community forums confirm thousands of construction bookkeeping firms spending 8–12 hrs/client/month on manual WIP. RedHammer (Intuit partner) publicly calls WIP "the single most important missing report in QBO." |
| Competitor Weakness | 5/5 | No standalone, affordable WIP-only tool for QBO exists. All alternatives (Procore, Buildertrend, Knowify) are $200–500+/mo full construction suites — massive overkill for bookkeeping firms |
| LTD Viability | 2/5 | Accountants pay monthly for compliance tools; LTD not ideal. Strong MRR play at $49–99/firm/mo |
| No Free Tier | 5/5 | No free QBO WIP reports exist — Intuit itself hasn't shipped this |
| Channel Access | 4/5 | QBO Community forums, r/accounting, construction bookkeeping Facebook groups, ProAdvisor network |
| Content Potential | 4/5 | "WIP report QuickBooks Online", "construction accounting QBO", "work in progress schedule QBO" — all extremely low competition keywords |
| AppSumo Fit | 3/5 | Accounting firms less likely to shop AppSumo; better as direct B2B SaaS |
| Review Potential | 4/5 | Accounting software gets reviewed heavily; ProAdvisors share tools with each other |
| MRR Path | 5/5 | Recurring monthly pain (month-end close every month); tiered by client count = natural expansion revenue |
| Build Feasibility | 4/5 | QBO OAuth + job cost data pull + % complete calculation + PDF/Excel report generation; 4–6 weeks for MVP |
| Boring Business Bonus | 5/5 | Construction accounting — does not get more boring than this |

**Weighted Total**: 89/105

**Verdict**: BUILD  
**Decision Status**: NEW — add to `../ideas/decisions.md`  
**Next Steps**:
1. QBO OAuth integration → pull job cost data → auto-calculate % complete (cost-to-cost method) → generate GAAP-compliant WIP schedule
2. Price: $49–99/mo per firm, tiered by active client count
3. GTM: ProAdvisor network, QBO Community forums, construction accounting Facebook groups
4. Partner angle: position as the tool RedHammer recommends alongside its services

**Risks**:
1. QBO API limitations — some job cost data may not be cleanly accessible
2. GAAP compliance requirements differ slightly by method (cost-to-cost vs. units-of-delivery)
3. Intuit could ship native WIP in QBO Enterprise (unlikely for QBO standard tier based on history)

**Key Source Links**:
- https://quickbooks.intuit.com/learn-support/en-us/reports-and-accounting/wip-work-in-progress-reporting-solution-for-qbo/00/788638
- https://knowify.com/resources/quickbooks-work-in-progress-report/
- https://www.saasniche.com/blog/50-micro-saas-opportunities-from-reddit-in-2026

**Signal Frequency**: First dedicated evaluation. Single source (reddit) today — but QBO Community thread is authoritative with verified demand.

---

### Customer Revenue Concentration Risk Monitor — Score: 87/105 ⭐ NEW

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 4/5 | Pain score 90/100 (SaasNiche); documented panic posts on r/smallbusiness when large clients churn; "Lost a very important customer, 20% of our revenue!" — validated emotional pain |
| Competitor Weakness | 5/5 | Nothing simple exists; FP&A tools (Fathom, Spotlight Reporting) exist but cost $100+/mo and target accountants, not owners |
| LTD Viability | 5/5 | $49 LTD is extremely viable — simple tool, low ongoing cost, clear ROI story |
| No Free Tier | 4/5 | No free tools for this specific use case |
| Channel Access | 4/5 | r/smallbusiness, r/Entrepreneur, r/accounting; QBO/Xero community forums; B2B service business Facebook groups |
| Content Potential | 4/5 | "customer concentration risk", "revenue diversification tool", "QBO revenue dashboard" |
| AppSumo Fit | 4/5 | Small business owners shop AppSumo; simple tool with clear ROI narrative sells well |
| Review Potential | 3/5 | Simpler tool — fewer power users to write reviews |
| MRR Path | 4/5 | Requires ongoing QBO/Xero subscription; natural MRR product; alert system = clear subscription value |
| Build Feasibility | 5/5 | Simplest build on this list: QBO/Xero OAuth + invoice data pull + concentration dashboard + email alert when threshold crossed |
| Boring Business Bonus | 3/5 | Business analytics — less boring than trades, but serving non-technical small business owners |

**Weighted Total**: 87/105

**Verdict**: BUILD  
**Decision Status**: NEW — add to `../ideas/decisions.md`  
**Next Steps**:
1. QBO + Xero OAuth → pull invoice history → calculate customer concentration → alert at 15% threshold
2. Price: $9–19/mo or $49 LTD
3. MVP scope: concentration dashboard + email alert + weekly report = 2–3 week build
4. GTM: r/smallbusiness, QBO Community, B2B contractor forums

**Risks**:
1. Low perceived urgency until a customer churns (need to trigger FOMO about not knowing)
2. Small ticket size limits GTM spend
3. QBO/Xero free plan users may not convert to paid

**Key Source Links**:
- https://www.saasniche.com/blog/50-micro-saas-opportunities-from-reddit-in-2026
- https://www.reddit.com/r/smallbusiness/

**Signal Frequency**: First evaluation. Single source (reddit) today — but pain score 90/100 from SaasNiche (200+ subreddit analysis) is strong independent validation.

---

### WordPress Multi-Site Manager (5–25 Sites) — Score: 82/105 ⭐ NEW

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 4/5 | ManageWP's existence validates the market; pain score 85/100; hundreds of thousands of WP freelancers worldwide |
| Competitor Weakness | 3/5 | ManageWP (complex, $30–100+/mo), MainWP (free but self-hosted/technical), InfiniteWP — all either expensive or require DevOps |
| LTD Viability | 4/5 | $59–79 LTD strong for freelancers |
| No Free Tier | 4/5 | MainWP is free but self-hosted; hosted/simple option has no free tier |
| Channel Access | 4/5 | r/Wordpress, r/webdev, WP Tavern, WordPress forums, Freelance web dev Facebook groups |
| Content Potential | 4/5 | "ManageWP alternative", "WordPress multi-site management", "manage multiple WordPress sites" |
| AppSumo Fit | 5/5 | WordPress tools historically very strong on AppSumo (iThemes, WPForms, etc.) |
| Review Potential | 4/5 | WP developers actively review tools on G2/Capterra/AppSumo |
| MRR Path | 4/5 | Ongoing updates/backups/monitoring = clear recurring value; MRR after LTD period |
| Build Feasibility | 4/5 | WordPress plugin + hosted dashboard; 4–6 weeks for MVP with updates + backups + uptime |
| Boring Business Bonus | 3/5 | Web dev tools — not boring but not trendy; serves unglamorous freelancers |

**Weighted Total**: 82/105

**Verdict**: EXPLORE FURTHER  
**Decision Status**: NEW — add to `../ideas/decisions.md`  
**Next Steps**:
1. Build hosted SaaS with one-click plugin install; dashboard shows update status, backup recency, security scans, uptime
2. Differentiator: staging rollback on bulk updates (the feature freelancers lose sleep over)
3. Price: $19–39/mo for up to 25 sites; LTD at $59–79
4. GTM: r/Wordpress, WP freelancer Facebook groups, AppSumo launch

**Risks**:
1. ManageWP is established and improving; must differentiate on simplicity + price
2. Ongoing server infrastructure costs reduce LTD margins
3. Market is WordPress-specific — no expansion path to other CMS

**Key Source Links**:
- https://www.saasniche.com/blog/50-micro-saas-opportunities-from-reddit-in-2026
- https://reddit.com/r/Wordpress (multiple threads on multi-site management pain)

**Signal Frequency**: First evaluation. Single source (reddit) today.

---

### Field Service Management for 1–5 Person Trades (Recurring — Score: 101/105)

Strong signal from ALL FOUR sources today. Competitor analysis adds:
- QuickBooks sync breaks in Jobber (~2% line items lost per sync — hundreds of reviews confirm this)
- Dispatching is still fully manual across Jobber, Housecall Pro, and ServiceTitan at lower tiers
- Hidden add-on costs: HCP GPS $20/vehicle, pricebook $149/mo, proposals $40/mo
- New entrant JobForge (Q1 2026) validates the gap — yet another builder proving demand

HN adds: 89% of tradespeople lack adequate digital tools (SBA Q3 2025); plumbing service software market growing from $624.9M to $1.46B by 2034.

Trends add: Legacy FSM disruption actively underway (FieldPulse, Sera, WorkEver, Tofu, JobForge all entering); vertical specialization (trade-specific tools) commands premium pricing and better conversion.

*→ Updating signal history in existing shortlisted file.*

---

### Auto Repair Shop Management (Recurring — Score: 90–100/105)

Strong signal from competitor analysis today:
- Tekmetric $199–439/mo; Shopmonkey v2.0 forced update still causing switching
- Dead zone between ARI $20/mo (too basic) and $199+/mo confirmed
- DVI embedded in estimate = #1 missing feature; QBO native sync still absent at all major players
- 140K+ 1–2 bay shops in target ICP

*→ Updating signal history in existing shortlisted file.*

---

### Property Management for Small Landlords (Recurring — Score: 100/105)

Strong dual-source signal today:
- AppFolio 50-unit minimum reconfirmed via competitor analysis
- Buildium pricing gaps (per-unit fees, per-transaction fees) reconfirmed
- Reddit reddit confirms 5–30 unit landlord still squeezed between free tools and $280+/mo enterprise
- Competitor analysis: flat $79–99 LTD for 15–30 units confirmed as unoccupied

*→ Updating signal history in existing shortlisted file.*

---

### Cleaning Service Management (Recurring — Score: 88+/105)

Strong competitor analysis signal today:
- ZenMaid payment processing failures (working credit cards rejected, support refuses to investigate) = acute, recurring pain
- No payroll processing anywhere in cleaning-specific tools
- SMS costs per-message at ZenMaid (surprise bills)
- Jobber missing cleaning-specific essentials: room checklists, photo documentation, pay-per-clean calculation

*→ Updating signal history in existing shortlisted file.*

---

### Pest Control Solo Operator (Recurring — Score: 82+/105)

Competitor analysis confirms:
- FieldRoutes billing horror stories: charged $1,300 for unordered services, $500 for incomplete data export
- GorillaDesk $49/mo for solo operator; lacks smart sick-day rescheduling
- 100,000+ solo pest control operators underserved

*→ Updating signal history in existing shortlisted file.*

---

### Small Fleet Trucking TMS (Recurring — Score: 87+/105)

Reddit signal today: owner-operators juggling spreadsheets + WhatsApp + DAT load boards + ELD portals + QB = retyping same data in 4+ places. Enterprise TMS is $80+/mo and designed for 20+ trucks. "Dead simple" TMS for 1–3 trucks with IFTA automation.

*→ Updating signal history in existing shortlisted file.*

---

### Landscaping Job Costing (Recurring — Score: 88+/105)

Reddit signal: larger lawn care companies (5–20 crews) outgrowing Yardbook, needing job costing. RealGreen/Aspire too expensive ($300+/mo). Gap at $49–99/mo for 5-crew operations.

*→ Updating signal history in existing shortlisted file.*

---

### Prior Authorization Automation — Specialty Medical (Recurring — Score: 88+/105)

Trends signal: one founder already at $41K MRR automating prior auth for physical therapy. Orthopedics, cardiology, mental health, dermatology untouched. $740B/yr in healthcare admin vs. only $63B in IT.

*→ Updating signal history in existing shortlisted file.*

---

### Subcontractor Compliance Tracking (Recurring — Score: 87+/105)

Trends signal: myCOI and Compliance Depot only track insurance certificates. Full subcontractor compliance (permits + liens + lien waivers + certified payroll) remains spreadsheet-based. High-stakes: contractors lose surety bonds and get debarred from public projects.

*→ Updating signal history in existing shortlisted file.*

---

### Subscription Maintenance Plans for Trades (Recurring — Score: 85+/105)

Trends signal: home service businesses rapidly shifting to subscription/maintenance plan models. Software to manage recurring service agreements is absent at SMB level. ServiceTitan has it but costs $300–500+/mo. 2–3 week MVP for core feature.

*→ Updating signal history in existing shortlisted file.*

---

### Business Process Documentation / SOP Generator (Recurring — Score: 83+/105)

Reddit signal: "Tried going off grid for 5 days, didn't make it to day 3" — owner trapped because nothing documented. Pain score 90/100 (SaasNiche). AI record-screen-to-SOP is the differentiator vs. Trainual ($49–199/mo).

*→ Updating signal history in existing shortlisted file.*

---

### Agricultural Farm Management (Recurring — Score: 82+/105)

HN signal: USDA data — 89% of US farms are small (under $350K), all ag-tech targets the other 11%. FarmLogs acquired and pivoted to grain marketing for large farms. Compliance tracking for organic certification = high willingness to pay.

*→ Updating signal history in existing shortlisted file.*

---

### Pet Services Scheduling (Dog Walkers, Groomers, Pet Sitters) (Recurring — Score: 80+/105)

HN signal: Schedo at $5K MRR validates local service scheduling. Gingr/PetExec target larger operations at $100–300/mo. Solo pet sitters cobbling Calendly + Venmo + Google Sheets. GPS walk tracking + vaccination records = key differentiators.

*→ Updating signal history in existing shortlisted file.*

---

### Fishing Charter & Outdoor Guide Booking (Recurring — Score: 82+/105)

HN signal: 30,000+ charter/guide operators; FishingBooker/GetMyBoat take 10–20% marketplace commissions. "Own your bookings, ditch the marketplace fee" saves guides $3,000–10,000/yr in commissions.

*→ Updating signal history in existing shortlisted file.*

---

### Tattoo Studio Management (Recurring — Score: 80+/105)

HN signal: Superframeworks gap score 9/10; 21,000+ studios; no mainstream SaaS addresses tattoo-specific workflows (deposit workflows, health compliance, consent forms). Artists use 5 different apps currently.

*→ Updating signal history in existing shortlisted file.*

---

### Home Inspector Report Builder (Recurring — Score: 80+/105)

HN signal: HomeGauge/Spectora charge $80–200/mo with clunky interfaces. 35,000+ inspectors, most solo. State-specific report requirements = compliance moat. Real estate agent integration = network effect.

*→ Updating signal history in existing shortlisted file.*

---

### Small Batch Food Production Compliance (Recurring — Score: 80+/105)

HN signal: FDA compliance fear as sales hook; nutrition label generation = free-tier wedge; wholesale order management = retention hook. Cottage food Facebook groups and r/FoodBusiness as distribution.

*→ Updating signal history in existing shortlisted file.*

---

### Private Music Teacher Studio Management (Recurring — Score: 80+/105)

HN signal: 250,000+ private music teachers; My Music Staff and Fons have dated interfaces. Practice tracking + parent portal = wedge no generic scheduling tool can replicate.

*→ Updating signal history in existing shortlisted file.*

---

## Tier 2: Worth Exploring (Score 55–74)

### AI Brand Visibility Tracker for AI Search — Score: 67/105

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 3/5 | Pain score 85/100; emerging demand — no products yet = unvalidated at paying stage |
| Competitor Weakness | 4/5 | No competitors at all — but "no competitor" = early market risk |
| LTD Viability | 2/5 | Requires ongoing API queries to ChatGPT/Perplexity — high COGS |
| No Free Tier | 3/5 | No products = no freemium yet |
| Channel Access | 4/5 | r/seo, r/marketing, r/Entrepreneur |
| Content Potential | 4/5 | "AI search ranking", "ChatGPT brand visibility" |
| AppSumo Fit | 3/5 | Marketing tool — some AppSumo fit but not core audience |
| Review Potential | 3/5 | Early market; harder to get reviews before market matures |
| MRR Path | 4/5 | Clear recurring subscription product |
| Build Feasibility | 3/5 | API rate limits, model query costs, interpretation complexity |
| Boring Business Bonus | 2/5 | Tech/marketing — not boring |

**Score**: 67/105  
**Verdict**: PASS — too early, high infrastructure cost, not boring business  
**Why pass**: Low boring business score (2/5), LTD not viable, API query costs are ongoing COGS that erode margins. Market is emerging but unproven for willingness to pay. Not core to our boring business focus.

---

### Local Government Permit & Compliance Tracking — Score: 66/105

| Criterion | Score | Notes |
|-----------|-------|-------|
| Market Validation | 4/5 | Enterprise civic tech (Accela, Tyler Technologies) validates problem at $50K-$500K |
| Competitor Weakness | 4/5 | Enterprise tools completely out of reach for small towns |
| LTD Viability | 2/5 | Government procurement is subscription-oriented; LTD doesn't fit |
| No Free Tier | 3/5 | No free government software |
| Channel Access | 2/5 | Hard to reach municipalities efficiently; slow procurement cycles |
| Content Potential | 3/5 | Niche content opportunity |
| AppSumo Fit | 1/5 | Governments don't shop AppSumo |
| Review Potential | 2/5 | Government software rarely reviewed on B2B review sites |
| MRR Path | 4/5 | Once in, government is extremely sticky |
| Build Feasibility | 3/5 | Jurisdiction-specific requirements add significant complexity |
| Boring Business Bonus | 5/5 | Civic tech = maximally boring |

**Score**: 66/105  
**Verdict**: PASS — slow sales cycles, no AppSumo fit, complex compliance requirements  
**Why pass**: Despite high boring business score, government procurement cycles are 6–18 months, AppSumo doesn't work for government buyers, and jurisdiction-specific requirements make a generalized MVP very difficult.

---

## Tier 3: Weak / Pass (Score <55)

- **Franchise Compliance Operations (5–50 locations)** — Score: ~58/105. Moderate signal, complex GTM (reaching small franchisors is hard), FranConnect exists, limited AppSumo fit. Not enough differentiation at small-franchisor tier.
- **Freight Dispatcher AI (small brokerages)** — Score: ~52/105. Enterprise solutions emerging, telephony integration complex, LTD not viable, 6–10 week build with ongoing support requirements. Better left to better-funded teams.
- **Trades Skills Training & Certification** — Score: ~48/105. Content creation is the bottleneck (not software); requires trade-specific expertise; existing regulatory bodies may resist; moderate signal and slow market timing.
- **Niche Appointment Scheduling (Schedo-style)** — Score: ~55/105. Validated by Schedo's $5K MRR, but we have stronger, more specific opportunities. Better angle: go vertical (pet grooming, detailing, music teachers) — all already in shortlisted/.
- **AI Clinical Documentation (Specialty)** — Score: ~62/105. Freed.ai already gaining traction in mental health; Nuance DAX enterprise; HIPAA compliance overhead; better as feature addition to existing practice management tools we're building (solo-therapist, chiropractic).

---

## Top 3 Recommendations

1. **Insurance Agency Management System** — Modern AMS for 1–5 agent indie agencies at $89/mo flat. Score: 94/105. Category absent from AppSumo, 40K+ agencies stuck on Excel or overpriced enterprise tools. First-mover opportunity. Key source: https://www.insurance-forums.com/community/threads/what-agency-management-system-software-do-you-use.8760/

2. **Construction WIP Automation for QBO** — Standalone tool automating the GAAP-compliant WIP schedule that every construction bookkeeper manually rebuilds in Excel each month-end. Score: 89/105. No competitors; Intuit's own partner publicly called this "the single most important missing report in QBO." Key source: https://quickbooks.intuit.com/learn-support/en-us/reports-and-accounting/wip-work-in-progress-reporting-solution-for-qbo/00/788638

3. **Customer Revenue Concentration Risk Monitor** — QBO/Xero-connected dashboard that alerts B2B service businesses when any client exceeds 15% of LTM revenue. Score: 87/105. Simplest build on the list (2–3 weeks), $49 LTD, zero competitors. Key source: https://www.saasniche.com/blog/50-micro-saas-opportunities-from-reddit-in-2026

---

## Deduplication Notes

- **Field Service Management** → mapped to `field-service-management.md` (all FSM/trades signals)
- **Insurance AMS** → NEW file `insurance-agency-management.md` (distinct from `insurance-commission-reconciliation.md`)
- **Property Management** → existing `property-management.md` updated
- **Auto Repair** → existing `auto-repair-shop-management.md` updated
- **Cleaning Service** → existing `cleaning-service-management.md` updated
- **Sales Tax Automation** → existing `sales-tax-automation.md` updated
- **Solo Therapist Practice** → existing `solo-therapist-practice.md` updated
- **Landscaping Job Costing** → existing `landscaping-lawn-care.md` updated
- **Small Fleet TMS** → existing `small-fleet-trucking-tms.md` updated
- **Pet Services (dog walker/groomer/sitter)** → existing `pet-grooming.md` updated
- **Agricultural Farm Management** → existing `agricultural-farm-management.md` updated
- **Fishing Charter Booking** → existing `fishing-charter-booking.md` updated
- **Tattoo Studio Management** → existing `tattoo-studio-management.md` updated
- **Home Inspector Report Builder** → existing `home-inspection-software.md` updated
- **Small Batch Food Production** → existing `small-batch-food-production.md` updated
- **Music Teacher Studio** → existing `private-music-teacher-studio.md` updated
- **Prior Auth Automation** → existing `prior-authorization-automation.md` updated
- **Subcontractor Compliance** → existing `subcontractor-compliance-tracking.md` updated
- **Subscription Maintenance Plans** → existing `subscription-maintenance-plans.md` updated
- **Business Process Documentation** → existing `business-process-documentation.md` updated
