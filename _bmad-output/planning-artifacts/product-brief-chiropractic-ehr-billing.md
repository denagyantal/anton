---
stepsCompleted: [1, 2, 3, 4, 5, 6]
inputDocuments: []
workflowType: 'product-brief'
lastStep: 6
date: '2026-06-10'
author: 'Root'
project: 'chiropractic-ehr-billing'
---

# Product Brief: Chiropractic EHR + Billing (Flat-Rate, All-Inclusive)

---

## Executive Summary

The US chiropractic software market is structurally broken for solo and small-group practitioners. Approximately 65,000 licensed chiropractors in the US — with 28,000–35,000 operating as solo practices — pay between $129 and $650+ per month for practice management software, yet every affordable option buries critical costs in add-ons, per-claim fees, and annual maintenance charges. The result: a typical solo DC pays $323/month in total software costs despite advertised prices of $119–$149/month.

This product — a flat-rate, all-inclusive chiropractic EHR — eliminates that deception entirely. One price ($79/month) covers everything: scheduling, chiropractic-specific SOAP notes, integrated clearinghouse, insurance billing, ERA auto-posting, Medicare AT modifier compliance automation, and hybrid cash + insurance workflow. No per-claim fees. No clearinghouse add-ons. No auto-logout mid-patient. No surprise invoices.

The market gap is unambiguous: the $39–$79/month tier is completely unoccupied for any product delivering full EHR + billing + clearinghouse. ClinicSense at $39/month is cash-only with no insurance billing. Every insurance-capable competitor starts at $119/month and obscures the true cost. A verified 33.6% Medicare claim error rate (CMS CERT 2024) creates a compliance urgency that no current sub-$150 platform adequately addresses.

The business case is simple: a chiropractor switching from ChiroFusion saves $50–$110/month. Switching from ChiroTouch saves $80–$220/month. At $79/month flat, the value proposition is mathematically unmissable. Even 1% penetration of the solo insurance DC market produces $142,000+ ARR. The MRR path to $130,000+ is achievable within 36 months through community-first distribution, review platform investment, and an AppSumo LTD launch to seed the initial customer base.

---

## Core Vision

### Problem Statement

Solo and small-group chiropractors in the United States are systematically overcharged for practice management software through a pervasive industry pattern of hidden fees, add-on costs, and opaque pricing. Advertised monthly prices routinely exclude clearinghouse fees ($60–$89/month), annual maintenance charges ($30/month), text reminder add-ons, and denial-handling fees — so DCs who sign up based on headline pricing discover the real cost only after they're already onboarded and their data is locked in.

Simultaneously, the software that exists at accessible price points fails clinically: platforms auto-logout mid-patient session, lack Medicare documentation automation, and force DCs to manage separate cash and insurance billing workflows. Medicare compliance failures are epidemic — the CMS CERT Program found 33.6% of chiropractic claims had documentation errors in 2024, with the AT modifier (required on every Medicare spinal manipulation claim) accounting for 31% of chiropractic claim denials.

The problem is not that affordable chiropractic EHR is technically impossible. The problem is that no existing vendor has chosen to build it honestly.

### Problem Impact

**Financial impact:** The average chiropractor pays $323/month in total software costs — 2–3x the advertised base price. For a solo DC earning $85,154/year median income, $2,400–$3,900/year in software overspend is a meaningful tax on revenue. Data migration lock-in ($500–$3,000 to switch platforms) compounds the problem: even when a DC discovers the true cost, they're trapped.

**Clinical impact:** Session auto-logout disrupts patient encounters. ChiroSpring — the highest-rated platform at 4.92/5 — is documented by users as "constantly" requiring re-login, wasting time between patients in busy (30–50 patient/day) practices. Software that breaks clinical workflow erodes the core value proposition of using it at all.

**Compliance impact:** A 33.6% Medicare claim error rate is not a fringe problem — it's the industry baseline. Each denied claim costs an estimated $25 to rework. For a solo DC submitting 150 Medicare claims/month, even a 10% denial rate creates $375/month in hidden labor costs. Software that builds AT modifier compliance and P.A.R.T. documentation prompts into the SOAP workflow eliminates a systemic revenue leak.

**Switching barrier impact:** $10,000–$50,000 in estimated productivity costs to switch EHR platforms creates powerful inertia. This inertia protects incumbents regardless of satisfaction — ChiroTouch holds 12,500+ practices at a 4.07/5 satisfaction rating, meaning thousands of practices are too locked in to leave even while dissatisfied.

### Why Existing Solutions Fall Short

| Vendor | Advertised Price | True Monthly Cost | Core Failure |
|--------|-----------------|------------------|--------------|
| ChiroTouch | $159–$299/mo | $300–$650+/mo | Add-on cost spiral; slow cloud; 4.07/5 satisfaction |
| ChiroFusion | $129/mo | $159–$189+/mo | Hidden clearinghouse and maintenance fees; clunky scheduling |
| ChiroSpring | $149/mo | $149+/mo (unpredictable denial fees) | Auto-logout mid-session; denial handling fees charged to practice |
| zHealth | $119/mo | $119–$349/mo | Limited depth in base tier; requires upsell for full features |
| Jane App | ~$55–73 USD/mo | ~$80–120 USD/mo | Not chiro-specific; clearinghouse is add-on; no Medicare compliance |
| ClinicSense | $39/mo | $39/mo | Cash-only; no insurance billing; not a true EHR |

The critical gap: **zero competitors deliver EHR + clearinghouse + insurance billing at or under $79/month.** The sub-$100 tier is unoccupied for any full-featured solution. ChiroFusion, the self-described affordable option, lands at $159–$189/month true cost once clearinghouse and maintenance are included.

Beyond price, no competitor has built Medicare AT modifier compliance into the core SOAP workflow as an automated prompt — treating compliance as a feature rather than an afterthought. And no competitor explicitly designs for session persistence during patient encounters, despite this being a documented clinical workflow requirement.

### Proposed Solution

A purpose-built, cloud-native chiropractic practice management platform that eliminates hidden fees by design. Every feature a solo DC needs to run an insurance-billing practice — scheduling, SOAP notes, clearinghouse, billing, ERA posting, Medicare compliance alerts — at one flat monthly price with no asterisks, no add-ons, and no surprises.

**Core design principles:**

1. **Radical pricing transparency** — one SKU, one price, everything included. The pricing page shows what competitors' true costs are; ours has no fine print.
2. **Compliance-first SOAP workflow** — Medicare AT modifier, P.A.R.T. findings, active treatment documentation, and 30-day re-evaluation alerts are built into every SOAP note, not bolted on as compliance modules.
3. **Session-persistent UX** — configurable session timeout (8+ hours by default) designed for clinical reality: a DC steps away between patients; the system stays logged in.
4. **Hybrid cash + insurance** — manage wellness memberships, prepaid care packages, copays, and full insurance billing from the same patient record without workflow switching.
5. **Integrated clearinghouse** — ANSI 837P claim submission, 270/271 eligibility verification, 835 ERA auto-posting — all included, no per-claim fees.

**Pricing:** $79/month for solo DC (up to 1 provider), all features included.
**LTD:** $399 AppSumo (1,200 claims/year cap; clear upgrade path for high-volume practices).

### Key Differentiators

1. **True flat-rate pricing** — the only chiro EHR where $79 means $79. Total monthly cost is identical to advertised price. No clearinghouse add-on. No annual maintenance. No denial-handling fees. The comparison math is the marketing.

2. **Medicare 2025 compliance built in** — AT modifier prompts, P.A.R.T. documentation fields, active treatment justification, and 30-day re-evaluation flags are native to the SOAP workflow. The 33.6% industry error rate becomes a selling point: "We build what others make you remember."

3. **Session-persistent clinical UX** — never auto-logs out mid-patient. Designed for the reality of a busy chiropractic practice: 30–50 patients/day, providers stepping in and out of rooms, care teams sharing workstations. This is a table-stakes clinical workflow requirement that ChiroSpring — the highest-rated competitor — demonstrably fails to deliver.

4. **Hybrid cash + insurance in one workflow** — wellness plan memberships, prepaid packages, and insurance claims handled from the same patient chart. Solo DCs increasingly operate hybrid models; most software forces them to choose.

5. **First-mover price transparency** — building a reputation as the honest vendor in a market known for deceptive pricing is a durable competitive position. Competitors cannot easily respond by bundling all fees into $79/month without dramatically cutting their own revenue.

---

## Target Users

### Primary Users

**Segment 1: Solo Insurance-Billing DC ("The Burdened Practitioner")**

*Persona: Marcus, 41, solo chiropractor, suburban practice, 10 years in*

Marcus has a busy practice — 30–40 patient visits/day, two-thirds of them insurance. He's been on ChiroFusion for 3 years and still hasn't figured out why his monthly invoice is consistently $40 more than what he expected when he signed up. He spends 45–60 minutes per day on administrative tasks he assumed the software would handle. Last quarter he got three Medicare AT modifier denials in a row. He spent an afternoon on hold with the clearinghouse to understand why claims were rejected.

Marcus is not looking for the perfect software — he's looking for software that doesn't surprise him. He evaluates new options every couple of years but always stops at the data migration question. He found a thread on r/Chiropractic six months ago where someone recommended a competitor, and he still has the tab open.

**What success looks like for Marcus:** Submit claims on Monday, get confirmations by Tuesday, get ERAs posted automatically, see his collections report Friday without having to reconcile anything. Software that doesn't interrupt a patient session. A monthly invoice that matches what he agreed to pay.

**Trigger for switching:** Another unexpected invoice item. A Medicare denial spike. A colleague saying "I switched to [X] and it's saving me $150/month."

**Acquisition channel:** r/Chiropractic, Facebook "Solo DC Network" group, SpryPT.com comparison article, Google search "ChiroFusion alternative."

---

**Segment 2: New Graduate DC ("The Clean Slate")**

*Persona: Priya, 28, opening her first practice, 6 months out of school*

Priya is choosing her EHR before she has any patients. She's going to accept insurance because her cohort sees it as necessary for building a patient base, but she's also heard about the documentation burden from her residency supervisors. She researched three platforms; two are more expensive than she expected. She has no legacy data to migrate and no established workflow to disrupt.

Priya is the best possible acquisition target: low migration friction, full lifetime value, early evangelist potential among her cohort, and shaped by no bad habits from incumbent software. She's sensitive to price because she's pre-revenue, but she's also willing to pay for something that feels modern and doesn't require hours of billing training.

**What success looks like for Priya:** Submit her first insurance claim without needing to call the clearinghouse. Get paid within 14 days. Not be afraid of her first Medicare patient.

**Acquisition channel:** Chiropractic school professional networks, Parker Seminars new-grad track, "starting a chiropractic practice" Google queries, state ACA new-member outreach.

---

**Segment 3: ChiroTouch Refugee ("The Frustrated Incumbent")**

*Persona: David, 52, 20-year practice, 3 associate DCs, currently on ChiroTouch*

David is paying $450+/month for a platform his team complains about constantly. The cloud version is slow. CT MaxClear is a separate subscription. His office manager threatens to quit when the billing module crashes on a Friday. He knows switching is painful — he did it 12 years ago and it took three months to stabilize — but the calculus is shifting. He saw ChiroTouch raise prices again this year.

David needs confidence more than he needs features. He's not going to try a $79/month product unless he knows it can handle the billing complexity of a 3-provider practice. He will read every review. He needs white-glove migration assistance or he won't move.

**What success looks like for David:** Same or better billing performance, materially lower monthly cost, and no three-month productivity crater during transition.

**Acquisition channel:** Capterra/G2 reviews (high-intent comparison searches), Chiropractic Economics advertising, CE conference presence (ChiroTouch users are vocal at CE events about frustration), DC peer networks.

### Secondary Users

**Front Desk / Billing Coordinator**

In solo and small-group practices, the front desk staff often operates the EHR for scheduling, patient check-in, and claim submission. Their experience with session stability (they're logged in all day, handling patient flow) and scheduling UX is directly relevant to their willingness to recommend the software to the DC owner. If the front desk loves it, the DC stays.

**Billing Services / Third-Party Billers**

Some solo DCs outsource billing to third-party billing services. These billers manage multiple practice accounts and have strong opinions about clearinghouse reliability and ERA auto-posting quality. A billing service that recommends a platform to five clients is a high-leverage distribution channel worth cultivating.

**Chiropractic Assistants (CAs)**

In some practices, CAs complete SOAP note templates or handle post-visit documentation. SOAP note speed, template quality, and interface simplicity affect CA adoption and error rates.

### User Journey

**Discovery Phase:**
Marcus types "ChiroFusion alternative" or "chiropractic EHR no hidden fees" into Google. He finds a SpryPT.com comparison article that shows actual total monthly costs — including clearinghouse — for all major platforms. Our product appears in the table at $79/month with no asterisks. He clicks through to our pricing page, which has a "True Cost Comparison" prominently above the fold showing ChiroFusion at $159–$189/month versus our $79.

He checks r/Chiropractic. He finds a recent thread where someone else asked the same question and three responders mentioned us alongside ChiroFusion and ChiroSpring.

**Onboarding Phase:**
Marcus signs up for the 60-day free trial. He imports his patient demographics via CSV. He runs through a sample SOAP note — the AT modifier prompt and P.A.R.T. field appear automatically when he selects a Medicare patient. He runs an eligibility verification on a test patient in under 90 seconds. He submits a test claim to the clearinghouse.

**Aha Moment:**
Day 12 of the trial: Marcus submits his first real Medicare claim and receives an ERA confirmation with no denials. He calls his office manager over. "Look at this — it already posted."

**Core Usage:**
Daily: SOAP notes, appointment check-in, claim submission at end of day. Weekly: ERA review, collections report. Monthly: comparing his invoice (exactly $79) to his old ChiroFusion invoice ($189 last month).

**Advocacy:**
At his local ACA chapter meeting three months in, someone asks if anyone's tried the platform. Marcus is the one who says yes. He describes the pricing transparency and the Medicare compliance workflow. Two people ask for the URL.

---

## Success Metrics

**User Success:** The primary user success signal is claim acceptance rate and billing predictability. A chiropractor using this platform should see:
- First-pass claim acceptance rate above 96% (vs. 94% industry average)
- Medicare claim error rate below 5% (vs. 33.6% industry baseline)
- Monthly software cost matching the advertised price (zero unexplained invoice variance)
- Zero mid-session auto-logouts

A user who achieves these outcomes is a retained customer and an active referral source.

### Business Objectives

**6-Month Target:** 100 paying customers generating $7,900 MRR
- Validates market demand and pricing model
- Generates enough review data (20+ verified Capterra/G2 reviews) to establish credibility
- Tests clearinghouse cost model at scale (estimated 10,000–15,000 claims/month at this customer count)

**12-Month Target:** 500 paying customers generating $39,500 MRR ($474,000 ARR)
- Achieves cash-flow positive operations
- Demonstrates 1%+ penetration of solo insurance DC market
- Validates referral flywheel (DC-to-DC recommendation as primary growth channel)

**36-Month Target:** 1,500+ customers, $130,000+ MRR ($1.56M ARR)
- Positions for next funding or acquisition decision
- 3–5% penetration of primary target segment
- Potential expansion into small-group pricing tier, PT/acupuncture modules

**AppSumo LTD Launch:** 300–500 LTD buyers at $399 = $119,700–$199,500 upfront
- Funds initial 12 months of clearinghouse API costs
- Seeds Capterra/G2 review base
- Creates vocal early-adopter community for referral generation

### Key Performance Indicators

| KPI | Target | Measurement Method | Timeframe |
|-----|--------|--------------------|-----------|
| Monthly Recurring Revenue | $7,900 → $39,500 → $130,000 | Stripe MRR dashboard | Month 6 → 12 → 36 |
| Monthly Churn Rate | <3% (M1-6), <1.5% (M12+) | Churned customers / active customers | Monthly |
| Customer Acquisition Cost | <$200 blended | Total marketing spend / new customers | Monthly |
| LTV:CAC Ratio | >10:1 | ($79 × avg retention months) / CAC | Quarterly |
| First-Pass Claim Acceptance Rate | >96% | Clearinghouse acceptance data | Monthly |
| Medicare Claim Error Rate | <5% | Medicare-specific denial reports | Monthly |
| Net Promoter Score | >50 (M6), >65 (M12) | In-app NPS survey | Quarterly |
| Capterra/G2 Rating | 4.7+ with 20+ reviews by M6 | Platform dashboards | Monthly |
| Session Timeout Incidents | 0 | Application error logs | Continuous |
| Invoice Variance Incidents | 0 | Stripe vs. plan price comparison | Monthly |
| Trial-to-Paid Conversion | >25% | Trial completions / paid conversions | Monthly |
| Monthly Claims per Customer | 100–150 (solo DC benchmark) | Clearinghouse transaction logs | Monthly |

**Leading indicators (predict future success):**
- Trial claim submission rate within first 7 days (predicts conversion)
- Second Medicare claim submission (predicts Medicare workflow adoption)
- Front desk login frequency (predicts team adoption vs. DC-only usage)
- r/Chiropractic unprompted mentions (predicts organic referral flywheel)

---

## MVP Scope

### Core Features

**Must-Have for Launch (Weeks 1–14):**

**1. Chiropractic-Specific SOAP Notes**
- Subluxation listing with standard notation
- AT modifier auto-prompt for Medicare patients on every spinal manipulation CPT (98940–98942)
- P.A.R.T. (Pain, Asymmetry, Range of motion, Tissue changes) documentation fields
- Active treatment justification field with functional improvement tracking
- 30-day re-evaluation flag when re-evaluation is overdue
- Adjustable templates (chiropractors customize based on technique)
- Autosave every 60 seconds (ChiroSpring does not autosave — this is a stated user complaint)

**2. Appointment Scheduling**
- Day/week/month calendar view
- Multiple patients per time slot (family scheduling)
- Shared family email support (ChiroFusion explicitly lacks this)
- Online patient booking (embeddable widget)
- Automated appointment reminders via SMS/email (included in base price)
- Color-coded appointment types (new patient, adjustment, re-exam, cash, insurance)

**3. Integrated Insurance Billing + Clearinghouse**
- Insurance profile management (payer list, patient coverage, authorization tracking)
- ANSI 837P claim generation with chiropractic-specific CPT and ICD-10 code library
- Electronic claim submission via clearinghouse (Availity or Office Ally — selected based on BAA timeline)
- 270/271 eligibility verification (real-time, pre-appointment)
- 835 ERA auto-posting to patient accounts
- Denial queue with reason code display (including AT modifier denials, timely filing, medical necessity)
- Medicare Secondary Payer (MSP) compliance flags

**4. Cash + Membership Billing**
- Cash payment collection (Stripe integration)
- Prepaid visit package management (buy 12 adjustments, use over time)
- Wellness membership plans (recurring monthly charges)
- Copay and deductible collection at check-in
- Unified AR view across cash and insurance patients

**5. Session Persistence**
- Default session timeout: 8 hours of inactivity
- Configurable per-user (front desk vs. DC)
- HIPAA-compliant auto-lock (screen lock, not full logout) after configurable idle period
- Re-authentication via PIN after lock (full re-login not required)

**6. HIPAA Compliance Infrastructure**
- BAA executed automatically at account creation
- AES-256 encryption at rest and in transit
- Audit logging for all PHI access
- Role-based access control (DC, CA, front desk, billing roles)
- HIPAA-compliant hosting (AWS with HIPAA eligible services)

**7. Patient Management**
- Patient demographics, intake forms
- Insurance card capture (photo upload)
- Patient portal (appointment booking, intake forms, billing statements)
- Family account linking

**8. Financial Reporting**
- Collections by date range, provider, and payer
- Accounts receivable aging (30/60/90/120+ day buckets)
- Claim status report
- Daily visit and payment summary

**9. Data Migration Tooling**
- CSV import for patient demographics
- White-glove migration assistance (offered as optional paid service)
- Historical billing data import specification (documented, not automated in MVP)

### Out of Scope for MVP

These features are intentionally deferred to Phase 2. They are real user needs but not required to solve the core problem at MVP:

- **AI-powered SOAP note dictation** — table stakes by 2027; defer until core billing workflow is proven. Manual templates are sufficient for MVP.
- **OA45 denial automation** — complex payer-specific logic; high value but Phase 2. Denial queue in MVP shows OA45 codes; automated response workflow deferred.
- **Multi-provider pricing tier** — solo DC focus for MVP; 2–5 provider practices are Phase 2 (requires additional per-provider pricing, shared schedule management).
- **Patient recall automation** — valuable for retention; deferred to Phase 2 to limit scope.
- **Outcomes tracking module** — functional improvement graphing, VAS scores, outcome questionnaires; deferred to Phase 2.
- **Telehealth integration** — video consults with chiropractic billing; Phase 2.
- **Mobile native app** — responsive web is sufficient for MVP; native iOS/Android is Phase 2.
- **Acupuncture / PT modules** — vertical expansion is Phase 3.
- **Direct payer API integration** — clearinghouse handles payer routing in MVP; direct APIs are long-term.
- **Advanced practice analytics / business intelligence** — basic financial reporting in MVP; dashboard analytics deferred.

### MVP Success Criteria

The MVP is validated and ready for Phase 2 investment when:

1. **Billing validation:** 50+ customers have submitted insurance claims with a first-pass acceptance rate of 96%+
2. **Medicare compliance validation:** Medicare-patient cohort shows <5% AT modifier denial rate
3. **Pricing validation:** Zero customers have received a monthly invoice that differs from $79
4. **UX validation:** Zero documented mid-session auto-logout incidents
5. **Retention signal:** Monthly churn below 3% for three consecutive months
6. **Referral signal:** At least 20% of new trial signups cite a DC peer recommendation as discovery source
7. **Review validation:** 4.7+ average rating on Capterra or G2 with 20+ verified reviews
8. **LTD validation:** 300+ AppSumo LTD customers onboarded without clearinghouse cost overrun

**Go/no-go decision point (Month 6):** If MRR is below $5,000 (60 customers) and churn exceeds 5%/month, reassess pricing model and acquisition channels before Phase 2 investment. If MRR is above $7,900 (100 customers) and churn is below 3%, accelerate Phase 2 development.

### Future Vision

**Phase 2 (Months 7–18): Feature Moat**
- AI SOAP note dictation (voice-to-text with chiropractic-specific vocabulary)
- OA45 denial automated response workflow
- Multi-provider pricing tier ($149/month for up to 3 providers)
- Patient recall automation triggered by appointment gaps vs. documented care plan
- Outcomes tracking module (VAS, functional improvement graphing, re-evaluation reports)
- Referral program (1 month free per referred customer who activates billing)
- Chiropractic Economics advertising and CE conference presence

**Phase 3 (Months 19–36): Vertical Expansion**
- Physical therapy module (PT-specific CPT codes, functional movement documentation, progress notes)
- Acupuncture module (similar billing complexity, natural adjacency)
- Naturopathic medicine billing support
- Multi-location practice management
- Billing service / biller portal (manage multiple client practices from one dashboard)
- Patient outcomes analytics exported to payer portals for value-based care programs

**5-Year Vision:**
The largest independent chiropractic EHR platform in the United States, serving 5,000+ practices across chiropractic, physical therapy, and acupuncture — built on the brand promise that a healthcare software company can be honest about what things cost. By 2031, the platform's predictive denial detection (scoring claim acceptance probability before submission) and payer-direct API integrations reduce the average DC's claim processing cost by 40% below the industry benchmark. Expansion into employer wellness programs and value-based care network participation creates a third revenue stream alongside subscription and LTD legacy.

The competitive moat is not features — it's the trust earned from five years of never surprising a customer with a bill.

---

## Go-to-Market Strategy

### Launch Sequence

**Pre-Launch (Months -2 to 0):**
- Capterra listing setup (takes 4–6 weeks for approval)
- G2 and Software Advice listings created
- Landing page built with "True Cost Comparison" table as hero content
- Availity BAA executed; clearinghouse API integration complete and tested
- HIPAA security assessment completed; cyber liability insurance active
- AppSumo deal negotiated and staged for launch-day activation
- 10 beta users recruited from r/Chiropractic and DC Facebook groups for pre-launch review seeding

**Launch (Month 1):**
- AppSumo LTD deal goes live (target: 300 buyers in first 30 days)
- Simultaneous Capterra/G2 listing activation
- r/Chiropractic and DC Facebook group posts from beta users
- SpryPT.com and myzhealth.io outreach for comparative editorial coverage
- "True Cost Comparison" landing page live with Google Ads targeting "ChiroFusion alternative", "ChiroTouch alternative", "chiropractic EHR hidden fees"

**Months 2–6:**
- Weekly community engagement in DC Facebook groups (billing compliance Q&A, not promotion)
- Monthly "Medicare Compliance Update" email newsletter to trial and paid users
- Referral program launch (1 month free per referred active customer)
- Chiropractic Economics sponsored content or advertising (aligned with state ACA chapter outreach)
- Parker Seminars CE conference sponsorship exploration

### Pricing Architecture

| Tier | Price | Users | Claims | Use Case |
|------|-------|-------|--------|----------|
| Solo DC | $79/mo | 1 provider | Unlimited* | Solo insurance + cash practice |
| Small Group | $149/mo | Up to 3 providers | Unlimited* | 2–3 DC practice (Phase 2) |
| AppSumo LTD | $399 one-time | 1 provider | 1,200/year | Early adopters, low-volume practices |

*Unlimited within clearinghouse cost model (internally, >300 claims/month prompts a conversation about high-volume plan)

### Key Marketing Messages

1. **Headline:** "Chiropractic EHR that means it when it says one price."
2. **Proof:** "The average chiropractor pays $323/month in actual software costs. We charge $79. That's it."
3. **Compliance hook:** "33% of chiropractic Medicare claims have documentation errors. Ours catches them before submission."
4. **UX hook:** "Never logs you out mid-patient. We designed for how chiropractic practices actually run."

---

## Risk Register

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| Clearinghouse API costs exceed model | Medium | High | Conservative claim-volume pricing model; claim-volume reporting dashboard; volume rate negotiation at 500+ customers |
| HIPAA breach in first year | Low | Catastrophic | AWS HIPAA-eligible infrastructure; HIPAA consultant pre-launch; cyber liability insurance; BAA automation |
| Competitor price response (ChiroFusion drops to $79) | Medium | Medium | First-mover in transparency brand; compliance automation is harder to copy than price; review moat takes 2+ years to match |
| Medicare compliance rules change annually | High | Medium | Subscribe to CMS MLN Matters; allocate 2 weeks/year for fee schedule updates; compliance-first architecture makes updates modular |
| AppSumo LTD over-subscription | Low | Medium | Hard claim-volume cap enforced at signup; clear upgrade path messaging; option to close deal after 500 buyers |
| Data migration failures | Medium | Medium | Scope migration to demographics only in MVP; white-glove service as paid add-on; under-promise, over-deliver |
| Availity API access delayed | Medium | High | Office Ally as backup clearinghouse; confirm BAA timeline 90 days before launch; staggered beta launch if needed |
| Solo DC segment smaller than modeled | Low | Medium | Multiple data sources confirm 28,000–35,000 solo practices; even 50% model error leaves viable TAM |

---

## Next Steps

1. **Validate with 5–10 DC interviews** — Confirm $79/month is compelling; quantify actual monthly clearinghouse fees DCs currently pay; test Medicare compliance workflow mockup with an insurance-heavy DC.
2. **Confirm Availity BAA and API timeline** — Get a developer account; confirm clearinghouse API access requirements; validate per-claim cost model at 100–300 claims/month.
3. **Engage HIPAA compliance consultant** — Security assessment and BAA template before first customer.
4. **Begin Capterra listing setup** — 4–6 week approval process; start immediately.
5. **Build "True Cost Comparison" landing page** — The single highest-leverage marketing asset. Build before any other marketing collateral.
6. **Draft AppSumo deal terms** — Negotiate claim-volume cap, support limitations, and upgrade path before outreach.
7. **Proceed to PRD creation** — This brief is the foundation. The PRD will translate vision into detailed feature specifications, acceptance criteria, and technical requirements.

---

*Product Brief completed: 2026-06-10*
*Based on: Chiropractic EHR + Billing shortlisted idea (Score: 83/105) + Comprehensive Market Research (2026-06-10)*
*Next workflow: `create-prd` → `create-architecture` → `create-epics-and-stories`*
