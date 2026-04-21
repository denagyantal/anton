---
stepsCompleted: [1, 2, 3, 4, 5, 6]
inputDocuments:
  - ideas/shortlisted/allied-health-ai-scribe.md
  - _bmad-output/planning-artifacts/market-research-chiropractic-practice.md
workflowType: product-brief
lastStep: 6
user_name: Root
date: 2026-04-21
---

# Product Brief: Allied Health AI Scribe (ChiroScribe)

<!-- Generated via automated BMAD product brief workflow using shortlisted idea + market research context -->

---

## Executive Summary

Allied health practitioners — chiropractors, physiotherapists, massage therapists, and occupational therapists — lose 30–40% of their working day to clinical documentation. Generic AI scribes (Heidi Health, Freed, Nabla) were built for general practitioners and produce notes with wrong terminology, wrong structure, and zero compliance logic for allied health disciplines. The result: practitioners spend hours after clinic manually rewriting AI output or completing notes from scratch.

**ChiroScribe** is a compliance-first AI SOAP note scribe purpose-built for chiropractic practices, with Phase 2 expansion to physiotherapy and massage therapy. It solves the documentation problem at three levels: (1) discipline-specific terminology that matches real chiropractic workflow, (2) Medicare compliance intelligence built into every note — AT modifier language, subluxation ICD-10 mapping, CPT region suggestions — and (3) an affordable pricing model that solo practitioners can justify without a procurement cycle. The MVP is a 3–4 week build: voice recording → GPT-4o SOAP structuring → chiropractic compliance layer → PDF export.

**Primary opportunity:** No purpose-built chiropractic AI scribe with Medicare compliance depth exists. Twofold Health explicitly recommends their tool "as a starting point" for chiropractors. The market has validated the category (AllyScribe, OneChart, ScribePT prove demand), but the chiropractic compliance niche and AppSumo LTD channel remain completely unoccupied.

**Target 12-month outcome:** 200+ paying practitioners generating $10K+ MRR; AppSumo LTD launch in month 3–4 targeting $50K–$200K in launch revenue; <5% monthly churn from daily workflow integration.

---

## Core Vision

### Problem Statement

Chiropractors and allied health practitioners are drowning in clinical documentation. A solo chiropractor seeing 25 patients per day spends 11–15 hours per week — up to 37% of their working week — writing SOAP notes, constructing AT modifier compliance language, and manually entering data into their practice management system. This documentation burden is the #1 documented cause of burnout in the profession.

The market has responded with a wave of AI scribes — but every tool was built for general practitioners. Chiropractic SOAP documentation is categorically different: subluxation region listings tied to ICD-10 M99.x codes, AT modifier requirements for Medicare Part B reimbursement, CPT code region logic (98940/98941/98942 maps to 1, 2–3, and 4+ spinal regions), functional necessity statements, and outcome measures. When a chiropractor uses Heidi Health or Freed, the AI generates GP-style notes — clinically plausible, but professionally and legally wrong. The practitioner rewrites the entire output. The time savings disappear.

### Problem Impact

- **Time:** 11–15 hours/week on documentation = 572–780 hours/year per solo chiropractor
- **Financial:** At $150/hour opportunity cost, documentation costs $85,000–$117,000/year in lost billable time per practitioner
- **Compliance:** Medicare AT modifier errors trigger automated claim denials; 2026 has seen increased payer deployment of automated audit algorithms scanning for subluxation documentation specificity
- **Burnout:** 60%+ of allied health practitioners cite documentation as their top burnout driver; documentation is the primary reason experienced practitioners reduce patient volume or leave clinical practice
- **Current workaround failure:** Generic AI scribes create a false economy — practitioners pay $49–129/month for tools that produce unusable output, wasting more time than they save

### Why Existing Solutions Fall Short

The 2026 competitive landscape reveals a market that has been validated but not properly served for chiropractic:

| Tool | Price | Chiro Problem |
|------|-------|--------------|
| Twofold Health | $49/mo ann. | Explicitly "a starting point for chiropractors" — no AT modifier, no subluxation compliance |
| OneChart | $79/mo | PT-centric; no chiro compliance features confirmed |
| ScribePT | $99/mo | PT-only; no chiro coverage |
| DeepCura | $129/mo | Best PT depth; chiro compliance unconfirmed |
| Heidi Health | Free–$110/mo | Built for GPs; allied health is an afterthought |
| AllyScribe | Not listed | Physiotherapy/OT focus; Australian-market primary |
| ChiroTouch | $159–299/mo | Full PMS, not a scribe; expensive with 1+ hr support wait times |

**What's missing from every solution:**
1. AT modifier compliance language auto-generated per note
2. Subluxation region → ICD-10 M99.x code mapping
3. CPT region suggestions (98940/98941/98942) based on documented regions
4. Functional necessity statements for Medicare audit defense
5. Chiropractic-knowledgeable support staff
6. Lifetime Deal (LTD) pricing — no allied health AI scribe offers one
7. AppSumo channel — completely unoccupied in this category

### Proposed Solution

**ChiroScribe** — the AI SOAP scribe that actually understands chiropractic.

Core experience: A chiropractor finishes a session, opens ChiroScribe on their phone or browser, records a 60–90 second dictation of what happened in the session using their natural clinical language, and receives a complete, Medicare-compliant SOAP note in under 20 seconds. The note includes:
- Subjective section with chief complaint and symptom history
- Objective section with ROM findings, orthopedic test results, and postural/neurological findings in chiropractic-standard format
- A: Subluxation listing tied to appropriate M99.x ICD-10 codes with AT modifier compliance language
- P: Adjustment technique, patient education, and plan — with CPT code suggestion based on number of documented spinal regions

The practitioner reviews, makes minor edits if needed, signs off, and exports to PDF or pushes to Jane App. Total time: 90 seconds instead of 10 minutes.

**Phase 1 (MVP, weeks 1–4):** Whisper API transcription → GPT-4o structured SOAP generation with chiropractic compliance prompt engineering → PDF export + HIPAA BAA at signup
**Phase 2 (months 3–6):** Jane App integration, physiotherapy templates (ROM tables, MMT grades, outcome measures), AppSumo LTD launch
**Phase 3 (months 6–18):** Massage therapy templates, SimplePractice/WebPT integration, multi-discipline clinic support, scheduling add-on

### Key Differentiators

1. **Chiropractic Medicare compliance built-in** — AT modifier language, subluxation documentation specificity, ICD-10 M99.x mapping, and CPT region logic are embedded in the note generation layer. No other AI scribe does this. This is the core moat.

2. **Discipline-specific terminology, not GP repurposed** — ChiroScribe understands subluxation listings, segmental contact points, diversified adjusting techniques, toggle recoil, and SOT blocking. Notes read like a chiropractor wrote them, not like a GP template was force-fitted.

3. **First LTD/AppSumo offering in the category** — No allied health AI scribe has launched on AppSumo. The solo practitioner profile (self-employed, cost-conscious, AppSumo buyer) matches ChiroScribe's target exactly. A $99 LTD with a note cap represents a 7–10 week payback vs. the cheapest competitor's annual plan.

4. **Compliance as differentiated value, not a feature** — In 2026, payers are deploying automated audit algorithms. A note that is compliant by default is not a nice-to-have — it is audit defense. ChiroScribe's positioning as "the AI scribe that protects your Medicare claims" addresses a fear-based purchase driver with a concrete product benefit.

5. **Solo-clinic simplicity** — No IT department, no onboarding calls required. First note in under 5 minutes from signup. HIPAA BAA auto-signed at account creation.

---

## Target Users

### Primary Users

**Persona 1: Dr. Marcus Chen — The Burned-Out Solo Chiropractor**

Marcus is 41, owns a solo chiropractic practice in suburban Chicago. He sees 22–28 patients per day, six days per week. He has a front desk coordinator but no associate doctor. His practice generates $280K/year in revenue, with ~35% Medicare patients and the rest split between private insurance and cash-pay.

Marcus spends 2–3 hours every evening completing SOAP notes he didn't finish during the day. He's tried dictating into his phone, but the transcription is garbage and he still has to type everything into ChiroTouch manually. He looked at Heidi Health six months ago — the free trial produced notes that mentioned "HbA1c levels" and "lipid panels." Useless.

His primary fear: a Medicare audit. He knows two colleagues who received demand letters after audits found their AT modifier documentation was non-specific. He'd pay $100/month for something that wrote compliant notes correctly every time — but what he actually does is pay nothing and spend his evenings charting.

**His journey with ChiroScribe:**
- *Discovery:* Sees a peer post in a chiropractic Facebook group: "This thing actually knows what AT modifier documentation should look like — completely different from anything else I've tried"
- *Trial:* Signs up for "first 50 notes free, no credit card" — completes his first note in 4 minutes
- *Aha moment:* The note contains correctly formatted subluxation listing, ICD-10 M99.01 code, AT modifier language, and correctly maps 3 spinal regions to CPT 98941 — exactly what he would have written, in half the time
- *Conversion:* Buys the AppSumo LTD at $99 that same day
- *Advocacy:* Posts his own review in the Facebook group within 2 weeks

---

**Persona 2: Dr. Sarah Okonkwo — The Growth-Focused Multi-Provider Chiro Owner**

Sarah is 36 and owns a 3-provider chiropractic clinic in Atlanta. She employs two associate chiropractors who are new graduates. Her problem is not her own documentation — it's that her associates are slow, produce inconsistent notes, and she spends an hour each week reviewing and correcting their Medicare claims documentation before submission.

She needs a tool that makes her associates faster AND more compliant, reducing her review burden and claim denial rate. She's willing to pay $49/month per provider for something that works.

**Her journey with ChiroScribe:**
- *Discovery:* Finds ChiroScribe via Google search "AI SOAP notes chiropractor Medicare compliant"
- *Trial:* Signs up for a team trial — evaluates output quality against her compliance standards
- *Aha moment:* Realizes associate notes generated via ChiroScribe require 80% fewer corrections than manually written notes
- *Conversion:* Subscribes to team plan at $49/provider/month (3 seats = $147/month)

---

**Persona 3: Jake Rivera — The Independent Massage Therapist (Phase 2 Expansion Target)**

Jake is 28 and works as an independent massage therapist in Portland, seeing 15–20 clients per week. He's been referred by three different physical therapy clinics and is now billing insurance for some sessions, which requires SOAP notes he's never had to write before. He's spending 30–45 minutes per session on documentation he barely understands.

Jake represents the massage therapy sub-niche: 168,000–321,000 US practitioners, zero dedicated AI scribe tools. ChiroScribe's Phase 2 expansion includes massage therapy templates — this is an untapped wedge with minimal competitive risk.

### Secondary Users

**Practice managers and billing coordinators** in multi-provider chiropractic clinics are secondary users who benefit from ChiroScribe indirectly: fewer claim denials means less rework, and consistent note structure makes billing code suggestion and CMS-1500 preparation faster. They are not primary users but are vocal advocates when ChiroScribe reduces their workload.

**Chiropractic school faculty and new graduates** represent a high-value acquisition segment — practitioners forming documentation habits early. A "student plan" or onboarding program targeting new graduates creates long-term customers and shapes professional norms.

### User Journey

**Discovery Phase:**
- Burnout reaches tipping point: "I spent 3 hours charting again last night"
- Google search: "AI SOAP notes chiropractor" / "chiro documentation AI" / "chiropractor AI scribe Medicare compliant"
- Or: peer recommendation in chiropractic Facebook group (100K+ member communities — highest-trust channel)
- Arrives at ChiroScribe landing page with clear value proposition: "Complete, Medicare-compliant SOAP notes in 90 seconds. Built by chiropractors, for chiropractors."

**Onboarding Phase (0–15 minutes):**
- Signs up; HIPAA BAA auto-signed at account creation (no friction)
- Selects discipline (Chiropractic, Physio, Massage — Phase 2 options)
- Records a sample session dictation from today's notes
- Receives first complete SOAP note within 20 seconds
- Reviews output against their existing documentation standards

**Core Usage (Daily):**
- Post-session or post-clinic dictation (60–90 seconds per patient)
- AI generates SOAP note; practitioner reviews and approves in 30–60 seconds
- Export to PDF or push to Jane App (Phase 2: SimplePractice, ChiroTouch)
- Total documentation time: 2 minutes per patient vs. 10 minutes previously

**Success Moment:**
- First Medicare claim submitted using ChiroScribe output with zero rework — practitioner realizes they can trust the compliance language
- Or: First evening completed without charting — practitioner realizes they now have their evenings back

**Long-term (Sticky daily workflow):**
- ChiroScribe becomes the first thing opened after each session
- Monthly churn target: <5% (daily tool = highest possible retention category)
- Organic referral: practitioners actively recommend in peer communities

---

## Success Metrics

### User Success Metrics

**Primary user success indicator:** Time from session end to completed, signed SOAP note drops from 10 minutes to under 2 minutes per patient for active ChiroScribe users.

**Engagement signals:**
- Users who complete 10+ notes in first 14 days (strong indicator of workflow integration)
- Users who return daily for 30+ consecutive days (indicates full workflow replacement)
- Notes exported or pushed to EHR (indicates trust in output quality)
- User self-reported review completion time (target: <90 seconds average)

**Satisfaction indicators:**
- Net Promoter Score >50 at 60-day cohort mark (allied health practitioners are vocal reviewers)
- G2/Capterra reviews averaging 4.5+ stars within 3 months of launch
- Support tickets related to note quality <2% of note volume (lower = better compliance output)

**Retention signal:** Monthly active users who generate notes in 20+ days of a 30-day month = fully integrated into daily workflow.

### Business Objectives

**6-Month Objectives:**
1. Validate chiropractic compliance quality: 95% of beta users rate chiro-specific note quality as "good" or "excellent" vs. generic AI scribes
2. Establish distribution beachhead: First AppSumo launch generating 500+ LTD buyers (validates demand and funds early operations)
3. Build MRR foundation: 100+ active monthly subscribers at $49/month = ~$5K MRR from subscription alone
4. Establish channel: Measurable presence in r/Chiropractic, chiropractic Facebook groups, and ACA member communications

**12-Month Objectives:**
1. Revenue: $10K+ MRR from subscription model; $100K+ cumulative LTD revenue
2. Market presence: Top 3 results for "AI SOAP notes chiropractor" and "chiropractic AI scribe" search terms
3. Allied health expansion: Physiotherapy templates live, generating 20%+ of new signups from PT segment
4. Retention: Monthly churn <5% across entire subscriber base
5. Moat: AT modifier compliance reputation established — ChiroScribe cited as "the compliant one" in practitioner communities

**24-Month Objectives:**
1. 500+ active monthly subscribers across chiro + PT + massage segments
2. $25K+ MRR; cash-flow positive on operating costs
3. Integration partnerships: Jane App and SimplePractice official integrations live
4. Begin evaluating full practice management layer (scheduling + billing) as premium tier

### Key Performance Indicators

| KPI | 30-Day | 90-Day | 12-Month |
|-----|--------|--------|---------|
| Trial signups | 150 | 500 | 5,000 |
| Trial → paid conversion rate | 20% | 25% | 30% |
| Paying subscribers (MRR) | 30 | 125 | 200+ |
| MRR (subscription only) | $1,500 | $6,125 | $10,000+ |
| AppSumo LTD buyers | — | 500–2,000 | — |
| Monthly churn rate | <10% | <7% | <5% |
| Avg notes per user per month | 100+ | 150+ | 200+ |
| NPS | >30 | >45 | >55 |
| Claim denial rate attributable to note quality | Baseline | -40% | -70% |
| Support ticket rate | <5% | <3% | <2% |

**Leading indicators (predict 90-day success):**
- Day 1 → Day 7 note completion rate (users who generate notes in first week predict 30-day retention)
- Free trial notes that reach "review & approve" step (vs. abandoned mid-flow)
- Reddit/Facebook mentions per week (organic word-of-mouth velocity)

---

## MVP Scope

### Core Features

The MVP is a 3–4 week build targeting solo chiropractors. Every feature must directly address the core problem (compliant chiropractic SOAP notes, fast) with no additional complexity.

**Must-Have for MVP Launch:**

1. **Voice-to-SOAP transcription pipeline**
   - Browser-based audio recording (no app download required)
   - Whisper API integration for transcription
   - <30 second total processing time for average session dictation

2. **Chiropractic-specific SOAP generation**
   - GPT-4o with chiropractic-optimized prompt engineering
   - Discipline-specific prompt templates (chiropractic as primary; physio/massage in Phase 2)
   - Output sections: Subjective (CC, HPI, ROS), Objective (ROM, neuro findings, orthopedic tests, postural findings), Assessment (subluxation listing, ICD-10 M99.x mapping, AT modifier language, functional necessity statement), Plan (adjustment technique, CPT code suggestion based on documented regions, patient education, follow-up)

3. **Medicare compliance layer**
   - Automatic AT modifier language inclusion when Medicare is indicated
   - Subluxation region → M99.x ICD-10 code suggestion
   - CPT code recommendation: 98940 (1 region), 98941 (2–3 regions), 98942 (4+ regions)
   - Functional necessity and medical necessity statement generation

4. **Note review and editing interface**
   - Structured SOAP display with section-by-section review
   - Inline editing of any section before approval
   - One-click approve and finalize

5. **PDF export**
   - Clean, professional SOAP note PDF suitable for records and insurance submission
   - Practice name and practitioner name in header

6. **HIPAA compliance infrastructure**
   - Business Associate Agreement (BAA) auto-presented and signed at account creation
   - Audio file purged immediately after transcription (not stored)
   - Audit log of all note creation events
   - Data encrypted at rest and in transit

7. **Account and billing**
   - Email/password signup + optional Google SSO
   - Stripe billing: $49/month or $39/month annual
   - Free trial: first 50 notes, no credit card required
   - Note counter visible in dashboard

### Out of Scope for MVP

The following are explicitly excluded from MVP to maintain build velocity and launch within 4 weeks:

- **EHR/PMS integrations** (Jane App, SimplePractice, ChiroTouch, WebPT) — copy-paste from PDF covers 80% of workflow in Phase 1
- **Physiotherapy-specific templates** (ROM tables, MMT grades, outcome measures) — Phase 2 priority
- **Massage therapy templates** — Phase 2 priority
- **Mobile native app** (iOS/Android) — responsive web is sufficient for Phase 1; app adds 4–6 weeks to build
- **Team/multi-seat management** — solo practitioner focus for MVP; team features in Phase 2
- **Scheduling or billing modules** — documentation-only scope for MVP; full PMS is Phase 3
- **AppSumo LTD pricing** — launch on subscription first; AppSumo after 20–50 reviews collected
- **Real-time ambient capture** (passive in-session listening) — dictation post-session is sufficient for MVP
- **Outcome measure tracking** (Oswestry, DASH, NPRS, PSFS) — Phase 2 with PT expansion
- **Prior authorization documentation** — Phase 2 priority after core notes are validated

### MVP Success Criteria

The MVP is validated and ready for Phase 2 investment when:

1. **Note quality validation:** 80% of beta users (target: 20–30 chiropractors) rate ChiroScribe output as requiring less editing than their current documentation method
2. **Compliance validation:** 3 practicing chiropractors with Medicare billing experience confirm AT modifier output is audit-defensible
3. **Speed validation:** Average time from recording start to approved note is under 3 minutes for experienced users
4. **Retention signal:** 60%+ of trial users who complete 10 notes convert to paid within 30 days
5. **Growth signal:** AppSumo application accepted or 20+ G2/Capterra reviews collected organically from early subscribers
6. **Economics validation:** MRR covers infrastructure costs (API costs + hosting) within 60 days of launch

**Go/No-Go for AppSumo LTD launch:** 50+ paying subscribers with average NPS >40 and note quality rating >4/5 across cohort.

### Future Vision

**Phase 2 (months 3–6): Allied Health Expansion**

ChiroScribe expands to serve all allied health disciplines under a unified "Allied Health AI Scribe" platform with chiropractic as the compliance flagship:

- **Physiotherapy templates:** ROM tables with degree values, MMT grade scales, special test results (Slump, McMurray, Spurling, SLR), exercise prescription sections, outcome measure integration (Oswestry, DASH, LEFS, PSFS, NPRS)
- **Massage therapy templates:** Insurance-billing SOAP format, soft tissue findings, treatment modalities
- **EHR integrations:** Jane App (highest overlap with allied health), SimplePractice, WebPT
- **Team features:** Multi-seat management, admin dashboard, per-provider note review
- **AppSumo LTD launch:** Post-validation launch of $99 LTD with 1,000-note lifetime cap

**Phase 3 (months 6–18): Practice Intelligence Layer**

ChiroScribe evolves from a documentation tool to a practice intelligence platform:

- **Scheduling integration:** Appointment booking with pre-visit intake forms that pre-populate Subjective section
- **Insurance billing enhancement:** CMS-1500 auto-population from SOAP data; ERA/EOB auto-posting; claim denial tracking with note quality correlation
- **Compliance monitoring:** Practice-level audit risk dashboard showing documentation completeness scores across all providers
- **Outcome tracking:** Longitudinal patient outcome visualization using embedded outcome measures
- **Prior authorization AI:** Auto-generate prior auth requests from SOAP data using payer-specific templates

**5-Year Vision:**

The Allied Health AI Scribe becomes the documentation infrastructure layer for the 600,000+ allied health practitioners in the US who are systematically underserved by healthcare SaaS built for hospitals and large medical groups. ChiroScribe's compliance moat — built first for chiropractic Medicare billing, then expanded to PT insurance documentation requirements, then to the full complexity of multi-disciplinary allied health practices — creates a data advantage that general AI scribes cannot replicate quickly. The long-term competitive position is a network of practice benchmarking data (anonymized population health insights from millions of SOAP notes) and deep insurance payer integrations that make switching painful and lock in the daily workflow.

International expansion (Australia, UK, Canada — each $50M+ TAM in allied health software) is a natural Phase 4 as the product matures, building on AllyScribe's Australian proof point that the allied health AI scribe category has global demand.

---

## Appendix: Go-to-Market Summary

### Launch Sequence

| Phase | Timeline | Channel | Action |
|-------|---------|---------|--------|
| Soft launch | Weeks 1–2 | Direct outreach | 10 beta chiropractors from Facebook groups; "first 50 notes free" |
| Feedback iteration | Weeks 3–4 | Beta cohort | Collect quality feedback; refine compliance templates |
| Public launch | Month 2 | Reddit, Facebook groups | "First 50 notes free, no credit card" — r/Chiropractic, r/physicaltherapy |
| Content launch | Month 2–3 | SEO | Publish "AI SOAP notes for chiropractors," "chiro AT modifier compliance 2026" |
| AppSumo launch | Month 3–4 | AppSumo | LTD at $99 (1,000 note cap); requires 20+ reviews |
| PT expansion | Month 4–6 | Physio channels | Add PT templates; target r/physicaltherapy, APTA newsletter |

### Pricing Architecture

| Tier | Price | Model | Notes |
|------|-------|-------|-------|
| Free Trial | $0 | 50 notes, no CC | Removes all friction |
| Monthly | $49/mo | Subscription | 200 notes/month |
| Annual | $39/mo ($468/yr) | Subscription | Below every competitor |
| AppSumo LTD | $99 one-time | 1,000 lifetime notes | Customer acquisition; converts to subscription post-cap |
| Team | $39/seat/mo | Per-seat subscription | 3+ providers |

### Risk Mitigation

| Risk | Mitigation |
|------|-----------|
| Competitors add chiro compliance depth | Build moat fast; establish customer base before gap closes (3–6 month window) |
| LTD margin erosion | Note cap architecture from day one; $99 LTD = 1,000 notes max |
| Healthcare AI liability | "AI-drafted, clinician reviewed and signed" framing; no clinical judgment claims |
| HIPAA data breach | Audio purged post-transcription; no audio storage; BAA at signup |
| Category awareness too low | "First 50 notes free" eliminates trial friction; compliance-focused content marketing |

---

**Product Brief Completion Date:** 2026-04-21
**Workflow:** create-product-brief (automated)
**Next Recommended Step:** `/bmad-bmm-create-prd` — create detailed Product Requirements Document using this brief as foundation
