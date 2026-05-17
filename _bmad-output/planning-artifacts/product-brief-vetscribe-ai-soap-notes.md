---
stepsCompleted: [1, 2, 3, 4, 5, 6]
inputDocuments:
  - ideas/shortlisted/vetscribe-ai-soap-notes.md
workflowType: product-brief
lastStep: 6
research_type: product-brief
research_topic: vetscribe-ai-soap-notes
user_name: Root
date: 2026-05-17
---

# Product Brief: VetScribe — AI Voice-to-SOAP Note Generator

---

## Executive Summary

VetScribe is a standalone, PIMS-agnostic AI voice recorder that transforms a veterinary exam into a structured SOAP note in under 30 seconds. It is purpose-built for the 34,000+ US veterinary practices that are trapped in one of two unsatisfactory positions: running legacy server-based software (Cornerstone, Avimark, ImproMed) with zero AI documentation capabilities, or paying $419–549/month for cloud PIMS platforms that bundle unreliable AI features with critical infrastructure that fails during business hours.

The product solves a daily, high-urgency problem: veterinarians spend 10–15 minutes per patient on manual SOAP documentation — consuming 3–5 hours of a busy practitioner's day, most of it after-hours. Veterinarian burnout has reached record highs in 2025, with administrative burden as a leading driver. The profession is actively seeking relief: 47% of vets want AI tools in their practice software (VetSoftwareHub 2026), and search interest in "veterinary AI" grew 1,680% year-over-year between 2024 and 2025.

The market has more than 10 competing AI scribe products, but every one of them uses monthly subscription pricing ($46–$250/vet/month). Not a single veterinary SOAP note AI tool is available as a lifetime deal on AppSumo or direct sale. VetScribe enters this market with a $79–99 LTD (Lifetime Deal) pricing model — the first of its kind in the category — making the ROI argument trivially obvious: the tool pays for itself in under two months versus any subscription alternative.

The core technical foundation is mature and inexpensive: OpenAI Whisper API ($0.006/minute) for transcription, a structured SOAP template engine, and a mobile-first recording interface. The MVP can realistically be built in 2–3 weeks. The go-to-market strategy is AppSumo-first with community seeding in veterinary professional networks (VIN, r/veterinary, AAHA).

VetScribe scored 85/105 on the 10-step playbook evaluation framework, ranking as a Tier 1 opportunity with a BUILD verdict. The 6–12 month window before market maturation is finite but clear.

---

## Core Vision

### Problem Statement

Veterinarians are drowning in documentation. Every patient visit requires a SOAP (Subjective, Objective, Assessment, Plan) note — a structured clinical record essential for patient care continuity, liability protection, and billing. The manual process takes 10–15 minutes per patient. A practitioner seeing 20 patients per day spends 3–5 hours writing notes, most of it after clinic hours.

The profession desperately wants AI to solve this. 47% of veterinarians explicitly want AI tools in their practice software (VetSoftwareHub 2026 survey). 39.2% are already using AI tools and 38.7% are planning to adopt (Digitail/AAHA 2024). Yet the existing solutions force an unacceptable trade-off:

- **Legacy PIMS users** (Cornerstone, Avimark, ImproMed — a combined 20,000+ US practices) have no AI at all. Their only path to AI documentation is either a $5,000–$20,000 full PIMS migration or adding a standalone subscription tool at $46–$250/vet/month ongoing cost.
- **Cloud PIMS users** (Shepherd, ezyVet) who have AI features are locked into the reliability failures of their PIMS infrastructure. Shepherd, which shipped AI SOAP notes in beta in 2026, suffered 6+ multi-hour outages in February 2026 alone — during business hours, leaving entire practices unable to access records or check out patients.
- **All practitioners** face subscription fatigue. The market has zero lifetime deal options. Solo practitioners running tight margins are paying $600–1,800/year per vet for documentation tools layered on top of existing PIMS costs.

The unmet need is specific: a standalone, reliable, PIMS-agnostic AI SOAP note generator that a solo vet can buy once, use forever with any practice management system, and trust not to go down when their cloud PIMS does.

### Problem Impact

**For individual veterinarians:**
- 3–5 hours/day consumed by documentation — time stolen from patient care, family, and work-life balance
- Burnout rates reached record highs in 2025 (25% above 2022, exceeding COVID peaks — SerenityVet 2025)
- Incomplete notes written under time pressure → liability exposure and continuity-of-care gaps
- After-hours documentation → mental health strain and professional sustainability crisis

**For small practices:**
- Legacy PIMS users are locked out of the AI era without a $5,000–$20,000 migration commitment
- Cloud PIMS outages don't just delay notes — they shut down the entire practice (scheduling, checkout, billing all fail simultaneously)
- Per-vet subscription costs at $50–$150/month create $600–$3,600/year ongoing obligations for time-saving tools, which feels disproportionate to the workflow problem being solved

**For the profession:**
- The veterinary profession is experiencing a staffing crisis — burnout is driving practitioners out of clinical work. Administrative burden reduction is one of the clearest, most immediate levers available.
- Practices that see 20+ patients/day waste 60–150 minutes of billable exam time on documentation that could be automated.

### Why Existing Solutions Fall Short

**Shepherd AI SOAP (bundled with PIMS, $419–549/mo):**
- Requires a full PIMS migration — impossible to adopt standalone
- 6+ multi-hour outages in February 2026 alone; AI feature described as "rather slow and still needing refinement"
- When Shepherd goes down, AI notes go down — and so does the entire practice

**ezyVet (bundled with PIMS, custom pricing):**
- Repeated Capterra reviews describe the core UX as "horrid, horrid, horrid" with "seven steps for a single thing"
- AI features buried in a complex, frustrating workflow that undermines any time savings
- Cloud reliability concerns and complex pricing

**HappyDoc ($149/clinic/mo flat):**
- Highest accuracy in class (99.8%), strong PIMS integration — but $149/month is prohibitive for solo practitioners
- Demo-required purchase process (no self-serve trial) creates friction for small practice adoption
- No LTD option

**VetGeni ($50/vet/mo), CoVet ($46–99/vet/mo), VetRec ($99–150/vet/mo):**
- Subscription-only pricing; no lifetime deal option
- None support the full range of PIMS systems (Cornerstone, Avimark, ImproMed, ezyVet, Shepherd simultaneously)
- Monthly commitment creates psychological barrier for budget-conscious solo practitioners

**Scribenote (free–$79/vet/mo), Otto ($49–169/mo):**
- Closest to the right model (standalone, paste-compatible) but subscription pricing
- No AppSumo presence; no LTD positioning to capitalize on one-time-purchase appeal

**The universal gap:** No veterinary SOAP note AI tool has ever been offered as a lifetime deal. The AppSumo veterinary documentation category is empty. The combination of standalone architecture + reliable offline-capable design + LTD pricing is a position no competitor occupies.

### Proposed Solution

VetScribe is a mobile-first AI SOAP note generator with three core components:

1. **Voice Recording:** The vet opens the app during or immediately after the exam and records a narration of the patient encounter. No special format required — just talk naturally about what they observed, assessed, and planned.

2. **AI Transcription + SOAP Structuring:** The audio is processed via OpenAI Whisper (veterinary vocabulary pre-trained), and the transcript is structured into a full SOAP note using species-specific templates (dog, cat, exotic animals).

3. **PIMS-Agnostic Output:** The completed SOAP note appears on screen, ready to copy-paste into any PIMS (Cornerstone, Avimark, ezyVet, ImproMed, Shepherd — anything). One-click clipboard copy. Optional PDF export for direct client records.

**The key architectural decision: standalone.** VetScribe has no PIMS dependency. It works regardless of whether the practice's cloud PIMS is up or down. It works for legacy PIMS users with no API. It works for relief vets visiting 5 different clinics with 5 different systems.

**The key commercial decision: lifetime deal.** One-time purchase at $79–99 vs. $46–$250/month ongoing. The ROI math is immediate: VetScribe pays for itself in under 2 months versus the cheapest subscription alternative. For a solo vet using it daily, the savings compound to $600–$3,600/year.

### Key Differentiators

1. **Standalone Reliability** — VetScribe operates independently of any PIMS. When Shepherd goes down, VetScribe keeps working. Vets with legacy Cornerstone or Avimark get AI documentation without migration. Relief vets get a tool that works at every clinic they visit.

2. **Lifetime Deal Pricing — First in Category** — $79–99 one-time vs. every competitor's $46–$250/month subscription. This is a unique market position. The payback calculation is trivially obvious: 2 months vs. perpetual cost.

3. **PIMS-Agnostic Architecture** — Copy-paste workflow works with 100% of existing PIMS systems. No integration setup. No API configuration. No migration required. Works with Cornerstone, Avimark, ImproMed, ezyVet, Shepherd, or any future system.

4. **Species-Specific SOAP Templates** — Pre-built templates for dogs, cats, and exotic species (birds, reptiles, small mammals). Most competitors offer generic medical templates; VetScribe's templates embed veterinary-specific terminology, differential diagnosis patterns, and treatment plan structures.

5. **30-Second to Structured Note** — The UX goal is: record during/after exam → complete SOAP note ready to paste within 30 seconds of stopping recording. No manual editing required for routine cases.

6. **Offline-Capable Design** — Audio captured locally; processing can be queued for connectivity. Vets in rural areas or practices with unreliable internet get reliable recording without connectivity dependency.

---

## Target Users

### Primary Users

**Persona 1: "The Burned-Out Solo Vet" — Dr. Sarah M.**

Sarah runs a solo companion animal practice in a mid-size suburb. She's 8 years post-graduation, owns her practice, and sees 18–22 patients per day with one technician. Her practice management software is Cornerstone — she's been on it since she bought the practice and has no plans to migrate ($15,000+ in training, data transfer, and downtime risk).

- **Daily documentation reality:** She spends 90–120 minutes per day on SOAP notes, most of it after her last patient leaves. Two nights per week she's writing notes until 8pm. She's considered hiring a part-time scribe but can't justify the cost.
- **Current workaround:** She dictates into her phone's voice memo app, then manually types the SOAP into Cornerstone. It saves maybe 20 minutes vs. typing from memory but still requires significant editing.
- **Pain:** "I went to vet school to treat animals, not to type. I'm burning out and I can't afford a $5,000 Cornerstone migration plus whatever the new AI scribe subscription costs on top."
- **Discovery path:** VIN forum post ("anyone using AI for SOAP notes that works with Cornerstone?") or r/veterinary thread. She searches for solutions after a particularly exhausting documentation night.
- **Decision driver:** LTD math is immediate. "$99 once vs. $600/year forever? I'll save that in two months. Done."
- **WTP:** $79–99 LTD strongly preferred; $19–29/month subscription acceptable if no LTD available.

**Persona 2: "The Pragmatic Small Clinic Owner" — Dr. James T.**

James owns a 3-vet companion + exotic animal clinic. He's the practice owner-operator, sees patients 4 days/week, and manages operations the fifth day. He's on ezyVet because it's cloud-native and cheaper than Cornerstone migration — but regrets the decision daily. He's heard about Shepherd AI but refuses to consider another PIMS migration after the ezyVet nightmare.

- **Daily documentation reality:** He has two associates who are frustrated by the 10–15 min/patient documentation burden. Staff retention is a growing concern — one associate recently left partly citing "admin overload."
- **Current workaround:** He subscribed to Scribenote at $79/vet/month ($237/month for 3 vets). He's not thrilled with the cost or the accuracy on exotic species cases.
- **Pain:** "I'm paying $2,844/year for something that still misses exotic species terminology. And if I had bought it as a lifetime deal for 3 vets, I'd have paid once."
- **Discovery path:** AAHA newsletter, or a colleague at a local vet association meeting.
- **Decision driver:** Team pricing (3 vets at $199 LTD beats $237/month ongoing). Exotic species templates are a genuine differentiator for his mixed practice.
- **WTP:** $149–199 LTD for team tier (3 vets); $59–79/month team subscription.

### Secondary Users

**Persona 3: "The Tech-Curious Relief Vet" — Dr. Priya K.**

Priya is a relief (locum) veterinarian who works at 4–6 different practices per month. Each has a different PIMS: two are on Cornerstone, one on Avimark, one on ezyVet, and one on a new cloud PIMS she's never seen before. PIMS-integrated AI scribes are useless to her — she can't install clinic-specific tools on her own device.

- **Daily documentation reality:** She adapts her note style for each practice's PIMS workflow. It's the most frustrating part of relief work. Some clinics still have her handwrite notes for staff to type.
- **Current workaround:** She doesn't have one. She tried VetRec for a month but couldn't justify $99/month on a variable relief income.
- **Pain:** "I need something that works everywhere, on my phone, with my login, that I own. Not a clinic-licensed tool. Mine."
- **Discovery path:** r/VetTech, Serenity Vet community (relief-specific resources), or word of mouth from a colleague at a relief vet Facebook group.
- **Decision driver:** Personal ownership (not clinic-licensed), PIMS-agnostic design, LTD pricing on variable income.
- **WTP:** $79 LTD is highly appealing given variable monthly income. Would not subscribe at >$49/month.

**Persona 4: "The VetTech Documentation Partner" — Jordan A.**

Jordan is a licensed veterinary technician at a 4-vet practice. Increasingly, vets at the clinic are asking techs to draft the subjective and objective sections of SOAP notes during the exam while the vet handles the physical assessment and diagnosis sections.

- **Role:** Uses VetScribe to capture the client-reported history (subjective) and tech-performed measurements (objective — TPR, weight, BCS) during the intake. Passes the draft to the vet for assessment and plan completion.
- **Value:** Reduces vet documentation load by 40–60% even before AI completes the structured note.
- **Discovery path:** Introduced to VetScribe by the practice owner.

### User Journey

**Discovery → First Use:**

1. **Pain trigger:** "Stayed until 8pm writing notes again" or a VIN thread surfaces the problem
2. **Search:** "veterinary AI SOAP notes" → lands on VetSoftwareHub comparison or VetGeni review listing VetScribe
3. **Trial:** Signs up for 14-day free trial (no credit card required)
4. **First note:** Records first exam narration → SOAP note generated within 30 seconds
5. **Habit formation:** Uses it for 3 consecutive days → notes faster than any previous method → habit locked in

**Trial → Purchase:**

6. **LTD discovery:** Sees $79 LTD option during trial → calculates payback vs. any subscription → purchases within trial period
7. **AppSumo path:** Finds VetScribe on AppSumo → social proof from reviews + "X sold" counter → FOMO-driven purchase during deal window

**Post-Purchase → Advocacy:**

8. **Template customization:** Adjusts SOAP templates for practice's specific documentation style
9. **Sharing:** Mentions VetScribe in VIN forum post or tells colleagues at next vet association meeting
10. **Upgrade trigger:** Wants to push notes directly into Cornerstone without copy-paste → considers Pro tier with browser extension integration

**Critical Success Moments:**

- **Day 1:** First SOAP note generated in under 30 seconds → immediate "wow" reaction
- **Day 7:** Leaves clinic 45 minutes earlier than usual → emotional shift from "tool" to "essential"
- **Month 1:** Calculates time saved (30+ minutes/day × 20 working days = 600+ minutes) → voluntarily posts positive review

---

## Success Metrics

### User Success Metrics

VetScribe succeeds for users when it demonstrably reduces daily documentation burden and integrates seamlessly into existing practice workflows.

**Core User Success Indicators:**

| Metric | Target | Measurement Method |
|--------|--------|--------------------|
| Time to first SOAP note | < 5 minutes from account creation | App event tracking (signup → first completed note) |
| Documentation time reduction | 60–70% reduction vs. manual (8–10 min/patient saved) | In-app time tracking + user-reported surveys |
| Daily active usage | > 5 notes/day for solo vet users | App event analytics |
| Note acceptance rate | > 85% of generated notes accepted with no or minor edits | Edit tracking in app |
| 30-day retention | > 70% of trial users still using at day 30 | Cohort retention analysis |
| NPS score | > 60 (world-class for a B2B SaaS tool) | Quarterly in-app survey |

**Leading Indicators of Value Creation:**

- Users who record on mobile then review on desktop (indicates workflow integration, not just novelty)
- Users who customize templates (indicates investment in the tool, not just passive use)
- Users who share the app link with a colleague (organic referral behavior)

### Business Objectives

**Short-Term (0–6 months): Validate and Monetize**

- **Objective 1:** Validate product-market fit via free trial → LTD conversion
  - Target: 20 beta users → 10–20 paying customers before AppSumo launch
  - Validation threshold: >50% trial-to-paid conversion rate

- **Objective 2:** Achieve AppSumo launch success
  - Target: 150–300 LTD sales in 30-day launch window
  - Revenue target: $11,850–$29,700 from AppSumo campaign

- **Objective 3:** Establish community presence and organic growth
  - Target: 2+ high-engagement VIN/Reddit threads driving inbound trial signups
  - Target: 50+ AppSumo reviews within 30 days of launch

**Medium-Term (6–12 months): Build Subscription Base**

- **Objective 4:** Launch and grow subscription tier
  - Target: 200 monthly subscribers by Month 12
  - Revenue target: $3,800–$5,000 MRR by Month 12 (subscription only)

- **Objective 5:** Establish brand authority in veterinary AI documentation space
  - Target: Top 3 organic ranking for "veterinary AI scribe" and "veterinary SOAP notes app"
  - Target: 4.5+ stars on AppSumo, Capterra, and GetApp

**Long-Term (12–24 months): Expand Revenue Per User**

- **Objective 6:** Launch PIMS integration tier (browser extension)
  - Cornerstone and Avimark browser extension → direct PIMS write-back
  - Revenue: Pro tier upgrade at $49/mo or $299 one-time from existing LTD users

- **Objective 7:** Reach $10K+ MRR
  - Combined subscription + Pro tier revenue
  - Path: 400–500 subscribers × $19/mo = $7,600–$9,500 MRR + Pro tier upgrades

### Key Performance Indicators

**Product KPIs:**

| KPI | Target (Month 3) | Target (Month 12) |
|-----|-----------------|------------------|
| Daily Active Users / Total Users (DAU/MAU) | > 40% | > 60% |
| Average notes per user per day | > 3 | > 5 |
| SOAP note accuracy rating (user-reported) | > 4.2/5 | > 4.5/5 |
| Trial → paid conversion rate | > 30% | > 40% |
| Monthly churn (subscription users) | < 10% | < 5% |

**Business KPIs:**

| KPI | Target (Month 3) | Target (Month 12) |
|-----|-----------------|------------------|
| Total paying users | 50–100 (LTD) | 500+ (LTD + subscription) |
| Monthly Recurring Revenue | — | $5,000–$10,000 |
| AppSumo review rating | 4.5+ | 4.7+ |
| AppSumo review count | 50+ | 200+ |
| CAC (Customer Acquisition Cost) | < $30 (community-driven) | < $50 (paid channels added) |
| LTV:CAC ratio | > 5:1 | > 8:1 |

**Marketing KPIs:**

| KPI | Target |
|-----|--------|
| VIN forum thread views | 2,000+ per seeded thread |
| r/veterinary organic post engagement | 100+ upvotes per genuine post |
| Organic search ranking for "veterinary AI scribe" | Top 10 within 6 months |
| Email list (trial + paying users) | 500+ by Month 6 |

---

## MVP Scope

### Core Features

The MVP is designed to deliver one complete, reliable workflow: **record exam → get structured SOAP note → paste into PIMS**. Every feature either enables this workflow or is deferred.

**Feature 1: Voice Recording (Mobile-First)**
- iOS and Android native app
- One-tap recording start/stop during or immediately after patient exam
- Local audio capture with queue-based upload (works in poor connectivity)
- Maximum recording length: 15 minutes (more than sufficient for any single exam narration)

**Feature 2: AI Transcription + SOAP Structuring**
- OpenAI Whisper API integration for veterinary-vocabulary-aware transcription
- Automatic classification of spoken content into SOAP sections:
  - **S (Subjective):** Owner-reported history, chief complaint, behavioral observations
  - **O (Objective):** Physical exam findings, vitals (TPR, weight), diagnostic results mentioned
  - **A (Assessment):** Differential diagnoses, primary diagnosis, clinical reasoning
  - **P (Plan):** Treatment, medications, follow-up, client education
- Processing time target: < 30 seconds for a typical 5-minute exam narration

**Feature 3: Species-Specific Templates**
- Pre-built SOAP templates for: dogs, cats, exotic small mammals (rabbits, guinea pigs, ferrets), birds (avian), reptiles
- Each template includes species-appropriate terminology hints, normal reference ranges, and common differential structures
- Template selection at recording start (species + basic signalment)
- User-editable template customization (modify defaults to match practice's documentation style)

**Feature 4: SOAP Note Review + Edit**
- Clean, readable SOAP note display post-generation
- Inline editing of any section before copying
- Section-by-section review navigation
- Note history: last 30 days of generated notes (searchable by patient species and date)

**Feature 5: PIMS-Agnostic Output**
- One-tap "Copy to Clipboard" for the full SOAP note
- Section-by-section copy (copy just the Plan section, for example)
- PDF export for direct client record filing or email attachment
- No PIMS integration required — universal clipboard compatibility

**Feature 6: User Account + Authentication**
- Email + password authentication
- Per-user subscription/LTD license management
- Team seat assignment (owner can invite additional vets to a team license)
- Basic usage dashboard (notes generated, time saved estimate)

**Feature 7: 14-Day Free Trial**
- Full feature access for 14 days, no credit card required
- Clear trial status indicator and conversion prompts on Day 7 and Day 14
- Frictionless trial-to-paid conversion (credit card entry only at conversion)

**Pricing Tiers at Launch:**
- $79 LTD — Solo vet (1 user, unlimited notes)
- $149 LTD — Small team (up to 3 users)
- $199 LTD — Clinic (up to 10 users)
- $19/month — Solo subscription (post-AppSumo)
- $49/month — Team subscription (up to 3 vets, post-AppSumo)

### Out of Scope for MVP

The following features are explicitly deferred to post-MVP development. They are documented here to prevent scope creep during the initial build.

**Deferred: Direct PIMS Integration / Write-Back**
- Browser extensions for Cornerstone, Avimark, ezyVet, Shepherd
- API-based direct note insertion into PIMS
- *Rationale:* Copy-paste works for 100% of PIMS with zero integration complexity. Native integration is the Year 1/2 premium upsell, not the MVP entry point.

**Deferred: Ambient Recording Mode**
- "Always listening" mode that captures the full exam without manual record activation
- *Rationale:* Privacy complexity, regulatory considerations, and UX design requirements make this a Year 2 feature. Manual activation is sufficient for MVP.

**Deferred: AI Discharge Instructions + Client Communications**
- Automated generation of discharge instruction letters, referral letters, consent forms
- *Rationale:* SOAP notes are the core, highest-value problem. Expanding to other document types dilutes focus. Natural expansion target post-product-market-fit.

**Deferred: Multi-Language Support**
- Spanish-language SOAP templates and UI
- *Rationale:* US English market is the primary TAM. Internationalization adds build complexity without proportionate MVP impact.

**Deferred: Advanced Analytics Dashboard**
- Practice-level documentation time analytics, productivity reports, SOAP note quality scoring
- *Rationale:* Individual user value (time saved) is demonstrated through core experience. Analytics layer is an upsell, not a Day 1 requirement.

**Deferred: Human Review / Hybrid AI+Human Mode**
- VetSkribe-style hybrid where human scribes review AI output before delivery
- *Rationale:* Whisper API accuracy is sufficient at MVP without human review layer; hybrid mode adds cost and latency. Revisit if accuracy issues emerge from beta feedback.

**Deferred: PIMS Data Prefill (Patient Record Import)**
- Pulling patient history, prior SOAP notes, and signalment from PIMS to pre-populate note context
- *Rationale:* Requires PIMS API integration (out of scope). MVP notes are generated from voice narration alone; vets verbally state relevant history during recording.

### MVP Success Criteria

The MVP is considered successful (ready to scale and invest in post-MVP features) when the following gates are met:

**Product-Market Fit Gate (Must pass before AppSumo submission):**
- 20 beta users have used VetScribe in real patient exams (not test recordings)
- 80%+ of beta users rate generated SOAP notes as "usable with no or minor edits" (4/5 or higher)
- At least 3 unsolicited positive comments in beta feedback ("I can't imagine going back to manual notes")
- 10+ paying customers converted from beta free trial

**AppSumo Launch Gate (Signals to scale marketing spend):**
- 100+ LTD sales in first 30 days of AppSumo listing
- 25+ AppSumo reviews with average rating ≥ 4.0
- Zero critical bugs (app crashes, data loss) reported in first 2 weeks post-launch

**Subscription Validation Gate (Signals to invest in post-MVP features):**
- 30-day retention rate > 60% for subscription users
- Monthly churn < 10%
- At least 5 subscription users upgrade from LTD to team plan (signals expansion revenue potential)

**Decision Rules:**
- If AppSumo gate is not met at 100 sales: analyze reviews, identify the top objection, address it before next campaign
- If 30-day retention < 40%: diagnose daily usage patterns; likely indicates template accuracy issue or workflow friction in the copy-paste step
- If churn > 15%: immediate qualitative user interviews before any further marketing spend

### Future Vision

**Year 1 — Expansion (Post-MVP):**

- **PIMS Browser Extension** — Cornerstone and Avimark extensions that allow direct note insertion without copy-paste. Premium tier: $49/mo or $299 one-time upgrade for existing LTD users. This is the primary revenue expansion lever for Year 1.
- **Discharge Instructions & Client Communications** — Auto-generate discharge instruction letters from the SOAP note's Plan section. Simple extension of the existing AI processing pipeline.
- **Advanced Template Editor** — Visual SOAP template builder letting practices create fully custom templates for their specific documentation style, specialty, or regulatory requirements.

**Year 2 — Platform Expansion:**

- **Ambient Mode** — "Always-on" exam room recording that captures the full interaction without manual activation. Requires privacy consent framework and regulatory review.
- **Multi-Vet Practice Dashboard** — Practice-level analytics: average documentation time per vet, note completeness scores, productivity trends. Targets practice managers and DSO buyers.
- **Enterprise / DSO Tier** — $199/month for unlimited-vet groups. Targets veterinary corporate consolidators (NVA, Vetcor, etc.) as the market matures.
- **International Expansion** — Canada and UK (similar PIMS landscape, similar burnout patterns, strong AppSumo audience).
- **Specialist Modules** — Dedicated SOAP templates and AI models for specialty practices: equine, oncology, ophthalmology, emergency/critical care. Each specialty represents a distinct market segment with unique documentation needs and higher WTP.

**3-Year Vision:**

VetScribe evolves from a standalone AI scribe tool into the documentation intelligence layer for independent veterinary practices — the tool that works with every PIMS, understands every specialty, and reduces administrative burden by 70% without forcing a migration. In a market where the large PIMS platforms (Cornerstone, Avimark) will eventually build native AI, VetScribe's moat is breadth (works everywhere), specialization depth (exotic/specialty templates), and the trust established through early-majority adoption. The long-term defensible position is a network of 5,000+ loyal independent practitioners who won't switch because VetScribe is already in their daily workflow — regardless of what their PIMS does.

The MRR ceiling for a standalone tool is real (~$15K–20K MRR) without the PIMS integration layer. The PIMS browser extension in Year 1 is the critical bridge between "useful add-on" and "essential infrastructure" — raising LTV from $99 LTD to $99 LTD + $299 upgrade or ongoing Pro subscription.

---

*Document created: 2026-05-17*
*Author: Root (automated BMAD pipeline)*
*Status: Complete — ready for PRD phase*
*Next step: create-prd*
