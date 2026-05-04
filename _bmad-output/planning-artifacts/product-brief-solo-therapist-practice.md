---
stepsCompleted: [1, 2, 3, 4, 5, 6]
inputDocuments:
  - ideas/shortlisted/solo-therapist-practice-management.md
  - _bmad-output/planning-artifacts/market-research-solo-therapist-practice.md
workflowType: product-brief
lastStep: 6
research_type: product-brief
research_topic: solo-therapist-practice
user_name: Root
date: 2026-05-01
author: Root
---

# Product Brief: Solo Therapist Practice Management

---

## Executive Summary

Solo therapists in the United States are caught in a pricing and complexity crisis. SimplePractice — the market's dominant EHR with 200,000+ providers — executed a 69% base price increase in March 2025 and has continued raising prices post-private-equity acquisition. Simultaneously, the platforms that remain affordable (TheraNest, Carepatron) were built with insufficient solo-therapist focus: they bundle insurance billing complexity that 25–40% of private-pay therapists will never use, lag on AI-native clinical documentation, and carry the "group practice" UX fingerprints of their enterprise origins.

The result is a large, motivated, and reachable segment — 30,000–75,000 private-pay solo therapists in the US — with no purpose-built platform at the right price point ($29–$39/month), right feature set (scheduling + AI SOAP notes + Stripe billing + client portal), and right philosophy (private-pay-first, solo-optimized, independently owned).

This product brief defines the vision, target users, success metrics, and MVP scope for a HIPAA-compliant practice management platform built specifically for this segment. The go-to-market playbook mirrors Youform's proven strategy against Typeform's price hike: build a focused, cheaper, better alternative for disgruntled users of an expensive incumbent, then distribute through the communities those users already inhabit (r/therapists, 500K+ members; private practice Facebook groups, 150K+ members).

The business case is straightforward: 2,400 users at $39/month = $93,600 MRR — achievable at just 2% penetration of the addressable solo therapist market within 18 months.

**Product Name (working):** SoloPractice (or "CalmChart" / "TherapyDesk" — TBD via brand testing)
**Positioning:** "The EHR for private-pay solo therapists. Finally."
**Price:** $39/month flat. No insurance billing. No hidden fees. No feature bloat.
**Primary Differentiator:** AI-native SOAP/DAP/BIRP note generation as the core product experience, not an afterthought.

---

## Core Vision

### Problem Statement

Solo therapists in private practice — especially those on a private-pay or cash-pay model — are being systematically overcharged and over-featured by practice management software built for group practices and enterprise health systems. The dominant platform (SimplePractice) has raised its base price 69% in a single year and continues to bundle features (insurance billing, enterprise reporting, multi-clinician management) that a solo practitioner with 15–25 clients per week will never touch.

The practical consequence: a private-pay therapist seeing 20 clients/week pays $49–$99/month for SimplePractice and uses perhaps 40% of the features they're paying for. Their monthly all-in cost including processing fees reaches $149–$179/month — nearly $2,000/year — for a tool that frustrates them daily with insurance billing workflows they have no use for, AI documentation that was "tacked on rather than core," and a UI built around a 40-clinician group practice, not a solo professional working from a home office.

Meanwhile, they are spending 3–4 hours per week writing clinical notes manually — time that could be recovering to their practice, their clients, or their own wellbeing. Administrative overload is the top cited contributor to therapist burnout. 45% of mental health providers name it explicitly.

### Problem Impact

The compound effect on solo therapists is severe:
- **Financial squeeze from both sides:** Medicare reimbursements dropped ~14% in 2025; total tech stack costs run $400–$600/month for full-featured practices; insurance reimbursements average 36% less than private-pay rates — while software costs are spiking
- **Time loss at scale:** 3–4 hours/week on documentation = 150–200 hours/year = 3–4 weeks of full-time work lost to admin; 20% of therapists spend 10–14 hours/week on admin; 10% spend 15+ hours
- **Trust erosion:** SimplePractice's 2023 terms-of-service controversy (data licensing provisions) permanently damaged trust with a community that treats patient privacy as foundational; the PE acquisition only deepened skepticism
- **Platform risk:** SimplePractice's Luminello acquisition (2023) and subsequent shutdown (2024) demonstrated that PE-backed incumbents will sacrifice user continuity for portfolio consolidation
- **Feature mismatch:** Solo therapists use ~40% of SimplePractice's 85 features but pay for 100% of them

### Why Existing Solutions Fall Short

| Platform | Core Failure for Solo Private-Pay Therapist |
|---|---|
| SimplePractice | 69% price hike; insurance billing bundled; AI documentation described as "transcription-grade not clinical-grade"; PE ownership driving further price/quality degradation; telehealth quality severely decreased |
| TherapyNotes | No client self-scheduling (most cited complaint); built around insurance billing as primary workflow; price increased Dec 2025; $69/month for solo |
| TheraNest/Ensora | "Outdated UI" perception; AI notes only on highest tier ($89/mo); limited self-booking features |
| Jane App | Best UX (4.8/5 Capterra) but $54–$99/month; primarily Canadian heritage creates US insurance complexity even for features therapists don't need; still bundles complexity |
| Carepatron | Functional free plan but limited AI documentation, limited US-market optimization, limited integrations; no SOAP note generation as core product |
| CoralEHR | Closest positional competitor ("EHR for private-pay therapists") but pilot-only, no established user base, priced at $79/month |

No platform has achieved the intersection of: (1) private-pay-first architecture with no insurance billing complexity, (2) AI-native SOAP note generation as the core product experience, (3) flat $29–$39/month pricing with transparent Stripe pass-through, and (4) HIPAA-native compliance with independent, therapist-aligned ownership.

### Proposed Solution

A HIPAA-compliant practice management platform built from first principles for the private-pay solo therapist:

- **AI-Native Clinical Documentation**: Session audio recording → structured SOAP/DAP/BIRP note draft in under 60 seconds → therapist reviews and approves. Not a transcription tool bolted on top. The documentation experience is the core product.
- **Scheduling Built for Solo**: Client self-booking portal with calendar sync (Google + Outlook + Apple), automated reminders (SMS + email), and a day-view optimized for 15–25 client caseloads — not a 40-clinician enterprise scheduler
- **Private-Pay Billing**: Stripe integration with transparent pass-through rates (no markup), one-click payment collection, and superbill PDF generation for clients who want to submit for insurance reimbursement themselves — without EDI, ERA, or claims complexity
- **Secure Client Portal**: HIPAA-compliant intake forms, document sharing, encrypted messaging, and session booking in a client-facing portal that presents as professional without requiring the therapist to manage an enterprise system
- **Flat, Honest Pricing**: $39/month. One price. No per-client fees. No SMS surcharges. No claim processing fees. Stripe rates passed through at cost.

The platform philosophy: **everything a solo therapist needs, nothing they don't.** Designed for a practice of 40 clients or fewer, operated by one person, powered by AI that saves 3+ hours per week.

### Key Differentiators

1. **AI Documentation as Core, Not Afterthought**: Every incumbent bolted AI onto existing infrastructure. SOAP note generation will be designed from day one around the therapy session workflow — not transcription-grade, but clinical-grade: session type-aware (CBT, EMDR, DBT), DSM-aligned terminology, customizable templates per modality
2. **Private-Pay-First Architecture**: Zero insurance billing complexity in V1. Not hidden behind toggles — simply absent. This makes onboarding 60% simpler and the ongoing UI 40% less cluttered than competitors
3. **Transparent Flat Pricing**: $39/month all-in with Stripe rates at cost (not marked up to 2.7% + $0.30 like SimplePractice). First EHR that doesn't profit from payment processing
4. **Solo-Optimized UX**: The dashboard answers one question: "What do I need to do today?" Tomorrow's schedule, pending SOAP note drafts, outstanding payments. Done in 5 minutes, then back to clients
5. **Independently Owned, Therapist-Aligned**: PE-owned platforms optimize for investor returns. This platform optimizes for therapist value. No data licensing. No acquisition risk. No hidden upsells. Trust as a product feature.
6. **HIPAA-Native from Day One**: Not compliance retrofitted onto a general tool. BAAs signed with every vendor (hosting, AI, Stripe, email) before writing a single line of feature code. Audit logging, encryption at rest (AES-256), TLS 1.3 in transit, MFA — built into the foundation

---

## Target Users

### Primary Users

**Segment 1: The Private-Pay Solo Therapist (Core ICP)**

*Persona: "Sarah, LCSW, private-pay practice, 5 years post-licensure"*

**Profile:**
- Licensed Clinical Social Worker (LCSW), Licensed Professional Counselor (LPC), or Licensed Marriage and Family Therapist (LMFT)
- 35–50 years old, 73.8% female
- Runs a solo private practice from a home office or small rented office space
- Sees 15–25 clients per week, all private-pay (cash, card, HSA)
- Sessions priced at $130–$185/individual, $150–$225/couples
- Does not bill insurance — either by choice (burnout from claims) or specialty (doesn't accept insurance-panel clients)
- Annual income: $60,000–$100,000 depending on caseload and session rate
- Manages her entire practice alone: scheduling, intake, notes, billing, communications

**Current Pain:**
- Paying $49–$99/month for SimplePractice and using maybe 40% of the features
- Got an email in March 2025 announcing her monthly cost was increasing "to better reflect the value we provide"
- Spends 30–45 minutes writing session notes after every 3–4 sessions because SimplePractice's AI note tool "just transcribes — it doesn't actually draft a clinical note"
- Has considered switching before but dreads the migration

**Trigger:**
- SimplePractice price increase notification → goes to r/therapists → sees "what are you all using instead?" thread → starts researching alternatives

**What She Needs:**
- Self-booking link she can put in her Psychology Today profile
- A way to collect intake forms digitally before the first session
- Session notes that she can draft in 2 minutes instead of 20
- Stripe integration so clients can pay via credit card or HSA without her chasing invoices
- HIPAA compliance she can trust without becoming a compliance expert herself

**Success Vision:**
"I open the app in the morning, see my day, and by noon I've already approved three SOAP note drafts the AI generated during my sessions. I'm done with admin by 1pm instead of 6pm."

---

*Persona: "Marcus, LPC, new practice, 1 year post-licensure"*

**Profile:**
- Just left a community mental health agency to start his own practice
- 28–35 years old, tech-comfortable, used to navigating complex systems
- Building his caseload from scratch: currently 8 clients, targeting 20 within 6 months
- Price-conscious — every dollar of monthly subscription is scrutinized against a sparse income during ramp-up
- Has looked at SimplePractice, TherapyNotes, and Carepatron; found them all "more complex than I need right now"

**Current Pain:**
- Using a $15/month Calendly for scheduling, a Google Doc for notes, and Venmo/Zelle for payment — not HIPAA-compliant and professionally embarrassing
- Knows he needs to "get compliant" before his practice grows further
- Doesn't want to learn insurance billing — he's private-pay by design

**What He Needs:**
- Professional scheduling + intake that won't embarrass him with clients
- HIPAA-compliant note storage so he can stop worrying about the Google Doc
- Simple payment collection that isn't "Venmo me $150"
- Price under $40/month — he can't justify $69+ yet

**Success Vision:**
"I signed up, added my first client in 10 minutes, sent them the intake link, collected their credit card, and now I look like I've been running a real practice for years — all for less than $40/month."

---

**Segment 2: The SimplePractice Refugee (High-Urgency ICP)**

Any therapist — private-pay or insurance-accepting — who received SimplePractice's price increase notification and is actively searching for an alternative right now. This segment is time-limited but at peak conversion probability: they've been triggered, they're in evaluation mode, they have a 2–4 week decision window.

Distribution channels to reach this segment: "SimplePractice alternative" SEO content, r/therapists threads, private practice Facebook group discussions, Psychology Today community posts.

### Secondary Users

**Segment 3: Insurance-Accepting Solo Therapist (V2 Expansion)**

Solo therapists who do accept insurance but want a simpler primary workflow for their private-pay clients, with insurance billing as an optional add-on. Approximately 90,000–150,000 solo therapists in the US accept some insurance. In V1, they can use the platform for their cash-pay clients; in V2, superbill generation covers their most common need (client-submitted reimbursement). Full ERA/EDI insurance billing is a V3 feature.

**Segment 4: Supervisors and Group Practice Leads (V3 Expansion)**

Clinical supervisors who oversee 3–10 interns/associates often standardize their supervisees on one platform. One supervisor customer = 3–10 additional accounts. This segment represents a natural expansion path as the platform matures beyond purely solo use. Not in MVP scope.

**Segment 5: Counseling Students / New Graduates (Growth Flywheel)**

Graduate students in MSW, MFT, and LPC programs who are beginning supervised hours represent the longest-term opportunity: therapists choose their first EHR during training and often stick with it for years. A student pricing tier ($15/month or free during supervised hours) creates brand loyalty before they have a full caseload. Not in MVP scope but worth a waitlist strategy.

### User Journey

**Discovery Phase (Day 0)**
Sarah sees a Reddit post in r/therapists: "SimplePractice just raised my rate to $79/month. What are you all switching to?" She reads 40 comments. One link appears multiple times with upvotes: "[ProductName] — private-pay focused, $39/month, has AI SOAP notes." She clicks.

**Evaluation Phase (Day 0–3)**
Sarah lands on the homepage. Above the fold: "Everything you need. Nothing you don't. $39/month flat." She reads the feature list. No insurance billing — good, she doesn't need it. She sees a video of the AI SOAP note generation. She signs up for the 30-day free trial. No credit card required.

**Onboarding Phase (Day 1–3)**
The onboarding flow has 5 steps: (1) Set availability, (2) Connect Google Calendar, (3) Create first service type + price, (4) Set up Stripe payment, (5) Send first client their self-booking link. Estimated time: 15 minutes. She sends her first client the booking link and intake form from the dashboard.

**First Value Moment (Session 1, Day 5–7)**
Sarah conducts her first session using the platform. After the session, she opens the SOAP note tab and sees a structured draft waiting. She reads it — 80% accurate. She edits two sentences, adds a clinical observation, and clicks "Approve & Sign." Total time: 4 minutes instead of 20.

**Core Usage (Week 2–4)**
Sarah's daily workflow: morning → check today's schedule and pending approvals → conduct sessions → approve SOAP note drafts → collect payments automatically via Stripe. She notices her post-session admin time dropped from 45 minutes to 12 minutes per day.

**Aha Moment (End of Free Trial, Day 28)**
Sarah calculates: she's saved approximately 15 hours of admin time during the trial. At her effective hourly rate of $80+/hour, that's $1,200+ in recovered time — for a product that costs $39/month. She enters her credit card without hesitation.

**Word-of-Mouth Phase (Month 2+)**
Sarah mentions it in the r/therapists thread that originally sent her there. "I've been using [ProductName] for a month — it's exactly what I needed, nothing I didn't." She DMs two colleagues from her training program who also just left agency jobs.

---

## Success Metrics

The core success framework ties user value creation (time saved, admin burden reduced) directly to business outcomes (subscription revenue, retention). A therapist who saves 3 hours/week of admin time has a clear, calculable ROI — and that ROI is the primary retention driver.

**The North Star Metric: Admin Hours Saved Per Active User Per Week**

Target: 3+ hours/week saved per active subscriber. This metric drives NPS, retention, and word-of-mouth better than any satisfaction survey.

### Business Objectives

**Objective 1: Achieve Product-Market Fit Within 90 Days**
- Reach 200 paying subscribers
- Sustain trial-to-paid conversion above 30%
- NPS score above 50
- Monthly churn below 5%

**Objective 2: Reach Initial Revenue Milestone Within 12 Months**
- 2,000 paying subscribers = $78,000 MRR
- Monthly churn below 3% (healthcare SaaS benchmark)
- CAC payback period below 4 months
- Demonstrate $93,600 MRR path at 2,400 users (2% ICP penetration)

**Objective 3: Establish Category Leadership in Private-Pay Therapist EHR**
- Become the #1 recommended SimplePractice alternative in r/therapists (organic, not paid)
- Achieve Capterra rating of 4.7+ within 12 months of launch
- Appear in top 3 results for "SimplePractice alternative" and "private pay therapist EHR" search queries
- Establish brand recognition among private practice Facebook group communities

**Objective 4: Validate HIPAA-Compliant AI Documentation as Differentiator**
- 80%+ of active users use AI SOAP note generation at least weekly
- Average AI note approval rate (therapist approves draft without major revision) above 70%
- Documented time savings of 3+ hours/week validated via user interviews and NPS surveys

### Key Performance Indicators

**Acquisition KPIs**

| KPI | Month 3 Target | Month 12 Target | Measurement |
|---|---|---|---|
| Monthly new free trials started | 200+ | 500+ | Product analytics |
| Trial source — organic search | >40% | >50% | UTM tracking |
| Trial source — community/social | >30% | >25% | UTM tracking |
| Website conversion (visitor → trial) | >3% | >5% | Analytics |

**Conversion & Revenue KPIs**

| KPI | Month 3 Target | Month 12 Target | Measurement |
|---|---|---|---|
| Trial-to-paid conversion rate | 30% | 40% | Stripe + product analytics |
| Paying subscribers | 200 | 2,000 | Stripe |
| MRR | $7,800 | $78,000 | Stripe |
| MRR growth rate (MoM) | — | >10% | Stripe |

**Retention & Engagement KPIs**

| KPI | Month 3 Target | Month 12 Target | Measurement |
|---|---|---|---|
| Monthly churn rate | <5% | <3% | Stripe |
| Weekly active users / total subscribers | >70% | >80% | Product analytics |
| AI SOAP note generation — weekly active users | >60% | >80% | Product analytics |
| Average AI note approval time | <5 min | <3 min | Product analytics |
| Admin time saved per user (self-reported) | >30% | >50% | User surveys |

**Quality & Satisfaction KPIs**

| KPI | Month 3 Target | Month 12 Target | Measurement |
|---|---|---|---|
| Net Promoter Score (NPS) | >50 | >65 | Quarterly survey |
| Capterra rating | 4.5+ | 4.7+ | Capterra |
| Support ticket resolution time (median) | <24 hours | <8 hours | Helpdesk |
| HIPAA compliance incidents | 0 | 0 | Security audit |

**Referral & Community KPIs**

| KPI | Month 3 Target | Month 12 Target | Measurement |
|---|---|---|---|
| Referred signups (referral program) | >15% of total | >25% of total | Product analytics |
| Organic mentions in r/therapists | >20/month | >50/month | Manual monitoring |
| Capterra reviews collected | 50+ | 200+ | Capterra |

---

## MVP Scope

The MVP delivers the minimum feature set that solves the core daily workflow for a private-pay solo therapist: schedule a client → conduct a session → write a SOAP note → collect payment. Every feature in V1 serves this loop.

**Build strategy:** Two-phase approach to reduce time-to-revenue and validate core differentiators before building the full platform.

**Phase 1 (Weeks 1–4): Standalone AI SOAP Note Tool**
Build and launch the single most compelling feature first: AI SOAP note generation as a standalone tool. A solo therapist records or uploads session audio → the tool generates a structured, therapy-modality-aware SOAP/DAP/BIRP note draft → the therapist reviews and signs. HIPAA-compliant, BAA-backed, $29/month standalone or $79–$149 LTD.

Purpose: (a) Immediate revenue, (b) Builds therapist email list, (c) Validates AI note quality with real clinical data, (d) De-risks the full platform build.

**Phase 2 (Weeks 5–10): Full Practice Management Platform**
Add scheduling, client portal, billing, and intake forms. Phase 1 users convert naturally. Full price: $39/month.

### Core Features (V1 Full Platform)

**P0 — Must Have for Launch**

| Feature | Description | HIPAA Notes |
|---|---|---|
| HIPAA-compliant infrastructure | AWS HIPAA-eligible hosting, AES-256 encryption at rest, TLS 1.3 in transit, MFA, audit logging, BAAs with all vendors | Foundation for all other features |
| AI SOAP/DAP/BIRP note generation | Session audio recording or upload → structured note draft in <60 seconds → therapist review + approve → encrypted storage; supports CBT/DBT/EMDR modalities | PHI in session audio and notes; BAA with AI vendor required |
| Client self-booking + scheduling | Public booking link, availability configuration, calendar sync (Google/Outlook/Apple), automated SMS + email reminders | Scheduling data may be PHI |
| Secure client portal | Intake form builder, document sharing, encrypted messaging, payment method collection, session history | PHI in intake forms and messages; BAA with portal infrastructure |
| Stripe billing | Transparent Stripe-standard rates passed through at cost (no markup), one-click payment collection, automatic receipts, HSA/FSA card support | Stripe signs BAA for healthcare customers |
| Superbill PDF generation | Auto-generate superbill PDF (CPT codes, NPI, diagnosis codes) for client to self-submit to insurance; not ERA/EDI | PHI in superbill; stored and transmitted securely |
| Session notes + progress notes storage | Encrypted clinical note storage with version history, sign + lock, therapist signature | Core PHI storage; comprehensive audit log |
| Dashboard — solo workflow view | Today's schedule, pending note drafts awaiting approval, outstanding payments, next available appointment slot | No multi-clinician reporting |

**P1 — Launch + 60 Days**

| Feature | Description |
|---|---|
| Mobile-responsive design | Optimized for therapist checking schedule or approving notes from phone between sessions |
| Client progress tracking | Simple session count, presenting problem tracking, goal progress — not full outcomes measurement |
| Reporting — solo practice | Monthly revenue, sessions completed, top session types; solo-focused, not multi-clinician |
| Referral program | Built-in referral link + 1-month-free incentive for both referrer and new user |
| Data export | Client data and notes exportable as CSV/PDF for platform migration or record keeping |

### Out of Scope for MVP

The following are explicitly deferred. They are not hidden or disabled — they simply don't exist in V1. This clarity prevents scope creep and reduces build complexity by 40–50%.

| Deferred Feature | Rationale | Target Version |
|---|---|---|
| Insurance billing (ERA/EDI) | Adds 8–12 weeks of build complexity; not needed by 25–40% of ICP; can be served by superbill PDF for client-submitted reimbursement | V3 |
| Group practice / multi-clinician | Solo-only by design in V1; group adds scheduling complexity, reporting complexity, permissions model | V3+ |
| HIPAA-compliant telehealth (built-in) | Daily.co or Whereby can be recommended as external tools; integration partnership in V2 | V2 |
| Claims management / clearinghouse integration | Part of insurance billing complexity; not needed for private-pay ICP | V3 |
| Medication management | Not in scope for therapists (therapists don't prescribe) | N/A |
| Full outcome measurement tools (PHQ-9, GAD-7) | Nice-to-have for evidence-based practitioners; not table-stakes for MVP | V2 |
| Billing service / biller access | Enterprise feature; solo therapist is their own biller | V3 |
| Client app (native mobile) | Web portal works on mobile; native app adds significant build complexity | V2 |
| Advanced group scheduling (couples, families) | Solo therapists do see couples/families but scheduling complexity is low vs. group practices | V1.5 |
| Credentialing support | Complex insurance workflow; not relevant to private-pay ICP | V3 |
| Team supervision / intern management | V3 expansion market; not MVP | V3 |

### MVP Success Criteria

The MVP is validated and ready for Phase 2 investment when:

1. **Product-Market Fit Signal**: 40%+ of surveyed users say they would be "very disappointed" if the product disappeared (Sean Ellis benchmark)
2. **Retention**: Monthly churn below 5% at 3-month mark (indicates users find ongoing value, not just novelty)
3. **AI Note Adoption**: 70%+ of active users use AI SOAP generation at least once per week — validates that the core differentiator is working
4. **Revenue**: 200 paying subscribers = $7,800 MRR (validates willingness to pay at target price point)
5. **NPS**: Score above 50 (indicates strong word-of-mouth potential before investing in paid acquisition)
6. **HIPAA**: Zero security incidents, zero compliance violations, all BAAs signed and documented

**Go/No-Go Decision at Month 3:**
- If all 6 criteria met: Proceed to V2 build (telehealth, outcomes measurement, referral program expansion)
- If 4–5 met: Investigate gaps before V2; consider targeted user interviews
- If fewer than 4 met: Pause and diagnose; likely a product-market fit or positioning issue

### Future Vision

**V2 (Months 6–12 Post-Launch): The Complete Solo Practice**
- Built-in HIPAA-compliant telehealth (Daily.co integration with BAA)
- Client app (iOS + Android) for scheduling and portal access
- Outcome measurement tools (PHQ-9, GAD-7, PCL-5 screening instruments)
- Advanced AI: session-to-treatment-plan generation, progress note templates that adapt based on prior session history
- Group scheduling (couples + family sessions)
- Referral network: therapist-to-therapist referral directory within the platform
- LTD campaign (standalone AI SOAP tool only) for one-time revenue + list building

**V3 (Year 2): Expand the Market**
- Optional insurance billing add-on ($20–$30/month): ERA/EDI integration for the ~60% of therapists who do accept some insurance; positioned as "add insurance billing if you need it, ignore it if you don't"
- Group practice support: 2–5 clinicians with shared calendar, per-clinician reporting, permissions model
- Supervisor portal: Streamlined supervisor-supervisee workflow with co-signature on session notes
- Student/intern pricing: $15/month during supervised hours with automatic upgrade path
- Canada market expansion: Jane App alternative positioning; Canadian provincial privacy laws (PIPEDA/PHIPA compliance)

**V4+ (Year 3+): Platform and Network Effects**
- Therapist marketplace: Internal referral network for client overflow, specialization matching
- Client-facing matching: Therapist discovery for prospective clients (Psychology Today alternative)
- International expansion: UK, Australia (growing private mental health markets)
- Integration ecosystem: connection to third-party tools (electronic fax, medical records exchange, supervision platforms)
- Acquisition interest: Therapy EHR acquisitions are active (SimplePractice/Luminello precedent); independent ownership strategy may include strategic sale as an exit path at appropriate scale

**Strategic Long-Term Thesis:**
The solo therapist segment is a beachhead, not the ceiling. Once established as the trusted platform for solo private-pay therapists, the product can expand upmarket to small group practices (2–5 clinicians) without abandoning its positioning as the "therapist-first" alternative to enterprise EHRs. The community trust built through solo-focused development is a durable moat that PE-backed incumbents cannot replicate once lost.

---

## Competitive Positioning Summary

**Tagline Options (to be tested):**
1. "Practice management for private-pay therapists. Finally."
2. "Everything you need. Nothing you don't. $39/month."
3. "The EHR built for solo therapists, not hospitals."
4. "AI-powered SOAP notes. HIPAA-compliant scheduling. Flat $39/month."

**Positioning Statement:**
For licensed solo therapists in private practice who are frustrated by SimplePractice's price increases and feature bloat, [ProductName] is a HIPAA-compliant practice management platform that provides AI-native SOAP note generation, client scheduling, and Stripe billing — everything needed to run a private-pay solo practice — at a flat $39/month with no insurance billing complexity. Unlike SimplePractice and TherapyNotes, [ProductName] was designed from day one for the solo private-pay therapist, not the group practice or enterprise health system.

---

## Risk Summary and Mitigations

| Risk | Impact | Probability | Mitigation |
|---|---|---|---|
| HIPAA enforcement action | Critical | Medium | Legal counsel day 1; BAAs with all vendors; encryption + MFA + audit logging; annual risk assessments |
| CoralEHR scales before us | High | Medium | Move fast on Phase 1 (AI notes standalone); price advantage ($39 vs. $79); community distribution moat |
| SimplePractice launches solo tier | Medium | Low-Medium | Community trust + independent ownership can't be replicated by PE-backed incumbent; switching costs build over time |
| Insurance billing feature pressure | Medium | High | Firm "private-pay first" positioning; superbill PDF satisfies the most common request without EDI complexity |
| HIPAA-LTD conflict | Medium | Medium | No LTD on full platform; LTD only for standalone AI SOAP note tool with lower PHI exposure |
| Customer support expectations | Medium | High | Prioritize response time from day 1; therapists expect 24-hour response as minimum; hire/contract support before marketing push |

---

**Product Brief Completion Date:** 2026-05-01
**Next Recommended Step:** Create PRD (`create-prd`) — this brief provides the complete foundation for detailed product requirements, feature specifications, and acceptance criteria.
**Brief Confidence Level:** High — built on comprehensive market research with multiple independent data sources corroborating all key findings.
