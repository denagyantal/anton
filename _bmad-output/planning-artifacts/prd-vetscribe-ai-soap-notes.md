---
stepsCompleted: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
inputDocuments:
  - ideas/shortlisted/vetscribe-ai-soap-notes.md
  - _bmad-output/planning-artifacts/product-brief-vetscribe-ai-soap-notes.md
  - _bmad-output/planning-artifacts/research/market-vetscribe-ai-soap-notes-research-2026-05-17.md
workflowType: prd
lastStep: 12
research_topic: vetscribe-ai-soap-notes
user_name: Root
date: 2026-05-17
---

# Product Requirements Document: VetScribe — AI Voice-to-SOAP Note Generator

**Author:** Root  
**Date:** 2026-05-17  
**Status:** Complete — Ready for Architecture Phase  
**Version:** 1.0

---

## Executive Summary

VetScribe is a standalone, PIMS-agnostic AI voice-to-SOAP note generator purpose-built for veterinary practitioners. It solves the single most urgent administrative problem in veterinary medicine: the 10–15 minutes of manual documentation per patient that consumes 3–5 hours of every practitioner's day — mostly after clinic hours — and is a primary driver of the record-high burnout rates the profession faces in 2025–2026.

The core user experience is frictionless: the veterinarian records a brief spoken narration of the patient encounter on their phone, and within 30 seconds receives a complete, structured SOAP note ready to paste into any practice management system (PIMS). No PIMS migration required. No integration setup. No monthly subscription. One purchase. One tool. Works everywhere.

**The first-mover opportunity:** Despite 10+ active competitors in veterinary AI documentation (VetGeni, CoVet, VetRec, HappyDoc, Scribenote, Otto, and others), not a single product has ever been offered as a lifetime deal (LTD). Every incumbent charges $46–$250/vet/month. VetScribe enters as the first and only veterinary SOAP AI tool with a $79–99 LTD pricing model — a category-defining move in a market where solo practitioners are acutely subscription-fatigued.

### What Makes This Special

VetScribe's differentiation is structural, not incremental:

1. **Standalone reliability** — VetScribe has no dependency on any PIMS. It works regardless of whether a practice's cloud PIMS (Shepherd, ezyVet) is up or down. It works for legacy PIMS users (Cornerstone, Avimark, ImproMed — 20,000+ combined US installations) who have no AI documentation options without a full system migration.

2. **Lifetime deal pricing — first in category** — The payback calculation for a solo vet is mathematically trivial: $99 once vs. $600–$3,000/year ongoing. No competitor has claimed this position.

3. **PIMS-agnostic architecture** — A copy-paste workflow that works with 100% of practice management systems, including legacy server-based software with no API.

4. **Veterinary-specific AI** — Species-specific SOAP templates for dogs, cats, and exotic animals with embedded veterinary terminology, normal reference ranges, and common differential structures. Not a generic medical scribe repurposed for vets.

### Project Classification

| Dimension | Classification |
|-----------|---------------|
| Project Type | SaaS / Mobile Application |
| Domain | Veterinary Healthcare / AI Documentation |
| Market Stage | Early Majority (fast-growing, no LTD option yet) |
| Build Complexity | Medium (2–3 weeks MVP) |
| Primary Distribution | AppSumo LTD launch → direct subscription |
| Revenue Model | Lifetime Deal + post-AppSumo subscription tier |
| Target Geography | United States (primary); Canada, UK (secondary) |
| Practice Size | Solo and 2–3 vet practices (primary); up to 10-vet clinics (secondary) |

---

## Success Criteria

### User Success

VetScribe succeeds for users when it demonstrably reclaims hours from their documentation burden and becomes a trusted, daily part of their clinical workflow.

**Core user success metrics:**

| Metric | Target | Measurement |
|--------|--------|-------------|
| Time to first SOAP note | < 5 minutes from account creation | App event tracking (signup → first completed note) |
| Documentation time reduction | ≥ 60% reduction vs. manual (8–10 min/patient saved) | In-app timer + user-reported surveys |
| Daily active usage (solo vet) | ≥ 5 notes per active day | App event analytics |
| Note acceptance rate | ≥ 85% used with no or minor edits | Edit-tracking in app |
| 30-day retention | ≥ 70% of trial users still active | Cohort retention analysis |
| Net Promoter Score | ≥ 60 | Quarterly in-app survey |

**Qualitative success signals:**
- Users who customize templates (indicating workflow investment, not passive novelty)
- Users who spontaneously share the app link (organic referral behavior)
- Users who record on mobile and review edits on desktop (indicating full workflow integration)
- Unprompted testimonials ("I left clinic 45 minutes earlier")

### Business Success

**Phase 1 — Validate (0–3 months):**
- 20 beta users who record real patient exams (not test recordings)
- ≥ 80% rate generated notes as "usable with no or minor edits" (4/5+)
- ≥ 10 paying customers from beta (validates willingness to pay)
- AppSumo launch: 150–300 LTD sales in 30-day window
- AppSumo revenue target: $11,850–$29,700

**Phase 2 — Scale (3–12 months):**
- 200 monthly subscribers by Month 12
- $5,000–$10,000 MRR by Month 12
- ≥ 200 AppSumo reviews at ≥ 4.5 star average
- Top 10 organic ranking for "veterinary AI scribe"

**Phase 3 — Expand (12–24 months):**
- PIMS browser extension launch (Cornerstone, Avimark)
- Pro tier upgrade revenue: $299 one-time or $49/mo from existing LTD users
- $10K+ MRR (subscription + Pro tier)
- 5,000+ total registered users

### Technical Success

| Metric | Target |
|--------|--------|
| SOAP note generation time | < 30 seconds for a 5-minute recording |
| API uptime (Whisper + backend) | ≥ 99.5% |
| Audio capture reliability | Zero lost recordings (local-first architecture) |
| Note generation accuracy | ≥ 85% of notes rated 4/5 or higher |
| Mobile app crash rate | < 0.5% of sessions |
| Data security | Zero user data breaches; HIPAA-aligned practices |

### Product Scope

**MVP (Phase 1 — Months 1–3):**
Voice recording → AI transcription → structured SOAP note → PIMS-agnostic output. Mobile app (iOS + Android), 14-day free trial, LTD and subscription purchasing, basic note history, species-specific templates (dog, cat, exotic, avian, reptile), one-tap clipboard copy, PDF export.

**Growth Features (Phase 2 — Months 4–12):**
Browser extension for Cornerstone/Avimark direct write-back, discharge instruction auto-generation, advanced template editor (visual SOAP builder), usage analytics dashboard, team management UI, referral program.

**Vision (Phase 3 — Year 2+):**
Ambient "always-on" exam room recording, multi-vet practice analytics dashboard, enterprise/DSO tier, international expansion (Canada, UK), specialist modules (equine, oncology, emergency/critical care), PIMS data prefill (patient history import).

---

## User Journeys

### Journey 1: The Burned-Out Solo Vet — Dr. Sarah M.

**Profile:** Solo companion animal practice owner, 8 years post-graduation, 18–22 patients/day, Cornerstone PIMS, no AI tools, 90–120 minutes/day of documentation.

**The Journey:**

*Wednesday, 7:43 PM.* Sarah finishes her last exam at 6:15 but it's nearly 8pm and she's still writing. Tonight it's a post-surgical follow-up, two vaccine appointments, a GI workup, and an euthanasia — fourteen total patients, and her notes are only half done. She mutters to herself about a VIN thread she saw last week about "AI SOAP notes that work with Cornerstone." She pulls out her phone and searches.

She lands on VetScribe's landing page. The headline reads: "Your SOAP notes. Done in 30 seconds. Works with Cornerstone." She reads through the comparison table — $99 once vs. $50/month forever. She signs up for the free trial in ninety seconds, no credit card required.

The next morning she records her first note during a dog's wellness exam. She holds her phone, talks naturally for three minutes: "Bella, four-year-old spayed female Golden, here for annual. Owner reports normal appetite, mild intermittent scratching left ear past two weeks. Physical exam: TPR within normal limits, BCS 5/9, mild erythema and ceruminous debris left ear canal, right ear clear. Assessment: Otitis externa left ear, likely allergic or yeast in origin. Plan: cytology, Otomax otic suspension BID for 10 days, recheck in two weeks, discuss allergy workup if recurrent."

Twenty-two seconds later, a complete four-section SOAP note appears on her screen. She reads it — accurate, clean, clinic-ready. She taps Copy, switches to Cornerstone, pastes. Done. She stares at the screen for a moment, blinks, and walks to the next room.

On Day 7 she runs the numbers: she's leaving clinic an average of 48 minutes earlier. On Day 12, a prompt appears: "Your trial ends in 2 days. Lock in VetScribe for $99 — the price of 2 months of any subscription alternative." She purchases immediately.

**Journey Requirements Revealed:**
- Frictionless trial signup (no credit card, < 2 minutes)
- Mobile recording that works during or immediately after the exam
- Accurate recognition of Cornerstone-compatible note format
- One-tap copy that pastes cleanly into any PIMS
- Compelling in-trial conversion messaging tied to clear ROI math

---

### Journey 2: The Small Clinic Owner — Dr. James T.

**Profile:** 3-vet companion + exotic animal clinic, ezyVet PIMS, currently paying $237/month for Scribenote (3 vets), frustrated with exotic species accuracy.

**The Journey:**

James is reviewing monthly expenses when he sees the $237 Scribenote line item. He's been paying that for eight months — $1,896 spent, and one of his associates keeps complaining that it mangles exotic species notes (a ferret adrenal disease workup came back classified as canine musculoskeletal). He pulls up AppSumo to look for alternatives and sees VetScribe listed with 87 reviews averaging 4.6 stars.

He clicks through. Team plan: $199 LTD for up to 3 vets. One payment. He does the math on a bar napkin: $199 vs. $237/month = pays for itself in 25 days. He reads the exotic species template section — dogs, cats, birds, reptiles, small mammals (ferrets, rabbits, guinea pigs). He sends the link to his two associates with a one-line Slack message: "We're switching. Pays for itself this month."

He creates the team workspace, invites both associates, and spends 15 minutes customizing the ferret SOAP template to match his preferred differential structure for endocrine cases. The next week, his exotic caseload is documented without a single classification error. His associate texts him: "This is better than Scribenote. Way better on exotic."

Two months later he upgrades two of the licenses to the Pro tier with the Cornerstone browser extension — ezyVet, ironically, is on the deferred list.

**Journey Requirements Revealed:**
- Team license management (owner-controlled seat assignment)
- In-app template customization (editable templates per species/case type)
- AppSumo social proof (review count, average rating, sold count visible)
- Subscription-to-LTD math clearly communicated in pricing UI
- Exotic species accuracy as a verifiable differentiator

---

### Journey 3: The Relief Vet — Dr. Priya K.

**Profile:** Locum/relief veterinarian, works at 4–6 different practices/month, each with a different PIMS, variable income, needs a personal (not clinic-licensed) tool.

**The Journey:**

Priya is on her way to her third clinic this week — a small practice running Avimark. Last week it was ezyVet. Next week it's a new cloud PIMS she's never seen. She keeps a mental note: every clinic she visits has a different system, and none of them will let her install anything on their workstation. She's been doing relief work for 14 months and documentation is still the hardest, most inconsistent part of the job.

She finds VetScribe in a r/veterinary thread titled "Any solo AI scribe tools that work EVERYWHERE?" The second reply: "VetScribe. Mobile-first, LTD, works with anything that has a text field. I use it at 5 different clinics." She reads all 23 replies. Seven people confirm it works for relief work.

She buys the $79 solo LTD that afternoon. At the Avimark clinic the next morning, she records a brief on her phone, gets the structured SOAP note, and pastes it into the Avimark visit record. No login to clinic systems, no installation, no permission needed from the clinic. Her phone, her account, her notes.

Three weeks later she posts her own review in the Reddit thread: "If you do relief work, this is non-negotiable. $79 vs. $99/month subscriptions that don't even work at multi-PIMS practices. Get it."

**Journey Requirements Revealed:**
- Personal user account that travels with the vet (not clinic-installed)
- Truly PIMS-agnostic: copy-paste output compatible with Avimark, Cornerstone, ezyVet, etc.
- Mobile-first design (phone as the primary device, not desktop)
- No per-clinic configuration or installation required
- Community-visible reviews that speak to relief vet use cases

---

### Journey 4: The VetTech Documentation Partner — Jordan A.

**Profile:** Licensed veterinary technician at a 4-vet practice, increasingly asked to draft subjective + objective sections during intake.

**The Journey:**

The practice owner introduced VetScribe three weeks ago. Jordan's job has changed: instead of the vet dictating notes after each appointment, Jordan captures the subjective during client intake (owner-reported history, chief complaint) and the objective during the physical (TPR, weight, BCS, visible findings) using VetScribe on the practice's shared tablet.

When the vet enters for the assessment, a draft S+O is already waiting. The vet adds A+P verbally — Jordan records that section too — and the complete note is ready to paste within sixty seconds of the vet leaving the room. The vet's post-clinic documentation time has dropped from 90 minutes to 20.

Jordan finds that the app is intuitive enough that training took fifteen minutes. The species selector is the only step before recording. The note comes out clean enough that the vet rarely edits more than one or two word choices.

**Journey Requirements Revealed:**
- Multi-device access per account (shared tablet + vet's phone)
- Role-aware recording (tech records S+O, vet records A+P separately or together)
- Note merging or sequential recording (combine two recording sessions into one note)
- Fast UX — minimal steps between "open app" and "recording"
- Clean, readable output with clear section delineation for quick vet review

---

### Journey Requirements Summary

Capabilities revealed across all journeys:

| Capability | Journeys | Priority |
|------------|---------|---------|
| Frictionless signup and trial (no CC, < 2 min) | 1, 3 | Must-Have |
| Mobile-first voice recording | 1, 2, 3, 4 | Must-Have |
| Sub-30-second SOAP note generation | 1, 2, 3, 4 | Must-Have |
| One-tap clipboard copy | 1, 3, 4 | Must-Have |
| PIMS-agnostic output | 1, 2, 3, 4 | Must-Have |
| Species-specific templates (dog, cat, exotic, avian, reptile) | 1, 2 | Must-Have |
| 14-day free trial with day-7/14 conversion prompts | 1 | Must-Have |
| LTD + subscription pricing with clear ROI framing | 1, 2, 3 | Must-Have |
| Team license management (seat assignment) | 2, 4 | Must-Have |
| Template customization (editable defaults) | 2, 4 | Must-Have |
| Personal account (not clinic-installed) | 3 | Must-Have |
| PDF export | 1, 2, 3 | Should-Have |
| Sequential/multi-session recording (combine S+O + A+P) | 4 | Should-Have |
| Multi-device access per account | 4 | Should-Have |
| Note history (30-day searchable) | 1, 2 | Should-Have |
| AppSumo-integrated social proof | 2, 3 | Nice-to-Have |
| Usage dashboard (time saved estimate) | 1, 2 | Nice-to-Have |

---

## Domain-Specific Requirements

### Healthcare Documentation Compliance

Veterinary SOAP notes are clinical records subject to practice liability and state veterinary board regulations. While the veterinary sector is less HIPAA-exposed than human medicine (veterinary records are not covered PHI under HIPAA), best practices apply:

**Clinical Record Integrity:**
- DR-1: Generated SOAP notes must not silently modify or omit clinical information from the veterinarian's dictation. Missing information due to audio quality must be surfaced as explicit gaps (`[unclear]` markers) rather than AI-generated substitutions.
- DR-2: Users must be able to edit any section of a generated note before it is finalized. No "locked" content.
- DR-3: Note history must be retained for a minimum of 30 days per user account, with no automated deletion within that window.
- DR-4: Audio recordings used for transcription must be deleted from servers after successful note generation (within 24 hours). Users must be informed of this policy on the privacy page.

**Data Storage and Security:**
- DR-5: All user data (notes, account information) must be stored on US-based cloud infrastructure.
- DR-6: Audio data in transit must be encrypted (TLS 1.2+). Stored notes must be encrypted at rest (AES-256).
- DR-7: User authentication must support secure password storage (bcrypt or Argon2). Passwords must never be stored in plaintext.
- DR-8: The service must implement rate limiting on recording uploads to prevent abuse.

### Veterinary Vocabulary and Accuracy

- DR-9: The transcription pipeline must be tuned for veterinary vocabulary: species names, drug names (Otomax, Convenia, Baytril, Apoquel, Cytopoint), diagnostic terms (BCS scoring, TPR, CBC, biochemistry panel), and SOAP section language.
- DR-10: Species-specific templates must include embedded normal reference ranges for each species (e.g., normal TPR for cats vs. dogs vs. rabbits differs materially).
- DR-11: The SOAP structuring engine must correctly classify spoken content into the appropriate section even when the vet does not explicitly label sections in their narration.

### Regulatory Context

- DR-12: VetScribe is a documentation tool, not a diagnostic tool. The UI must clearly communicate that AI-generated content is a transcription aid and that the veterinarian is responsible for clinical accuracy of the final note. A brief disclaimer must appear on the note review screen.
- DR-13: The product must not make clinical recommendations, suggest diagnoses not stated by the vet, or auto-complete assessment/plan content beyond what was narrated.

---

## Innovation and Novel Patterns

### Primary Innovation: LTD Pricing in a Subscription-Only Market

VetScribe's most significant innovation is commercial, not technical: applying a one-time lifetime deal pricing model to a product category where every incumbent uses recurring subscription pricing. The $79–99 LTD vs. $46–$250/month field has never been occupied by a veterinary AI scribe. This creates a category-defining positioning that requires specific product support:

- **In-app LTD calculator:** A visible ROI comparison ("You save $X vs. subscriptions in your first year") reinforces the value proposition at the point of purchase decision.
- **AppSumo launch sequencing:** The launch strategy depends on AppSumo's sold-count social proof mechanism creating FOMO. The product must be ready to handle a burst of 100–300 simultaneous trial activations without degradation.
- **Tier structure clarity:** LTD tiers (Solo $79, Small Team $149, Clinic $199) must be clearly communicated and enforced; the upgrade path from LTD to Pro (PIMS integration) must be visible but not intrusive during the MVP phase.

### Secondary Innovation: PIMS-Agnostic Architecture as a Feature

Most veterinary software frames PIMS integration as the product. VetScribe inverts this: the absence of PIMS dependency is the competitive advantage. This requires the product to:

- **Position standalone as reliability, not limitation.** When Shepherd goes down, VetScribe keeps working. Copy-paste is framed as "works with 100% of PIMS" not "lacks integration."
- **Offline-capable design:** Local audio capture with queued upload means recordings are never lost due to poor connectivity. This is especially relevant for rural practices and relief vets in low-signal environments.

### Competitive Landscape Summary

| Competitor | Pricing | PIMS Dependency | LTD Option | Exotic Templates |
|-----------|---------|----------------|-----------|-----------------|
| Shepherd AI SOAP | $419–549/mo (PIMS bundle) | Hard (Shepherd only) | No | No |
| HappyDoc | $149/clinic/mo | Soft (multi-PIMS) | No | No |
| VetGeni | $50/vet/mo | None (standalone) | No | No |
| CoVet | $46–99/vet/mo | None (standalone) | No | No |
| VetRec | $99–150/vet/mo | None (standalone) | No | No |
| Scribenote | Free–$79/vet/mo | None (standalone) | No | Limited |
| Otto | $49–169/mo | None (standalone) | No | No |
| **VetScribe** | **$79–99 LTD** | **None (standalone)** | **Yes — first in category** | **Yes (full)** |

### Validation Approach

- Beta with 20 real-clinic veterinarians before AppSumo launch
- Explicit measurement of "note accepted without edits" rate (target ≥ 85%)
- AppSumo launch as market validation: ≥ 100 sales in 30 days = strong PMF signal
- NPS ≥ 60 at 90 days post-launch = advocates, not just users

---

## SaaS-Specific Requirements

### Subscription and Licensing Architecture

- SAR-1: The system must support three distinct LTD tiers: Solo (1 seat), Small Team (3 seats), and Clinic (10 seats).
- SAR-2: The system must support two recurring subscription tiers post-AppSumo: Solo ($19/mo) and Team ($49/mo, up to 3 vets).
- SAR-3: LTD license seats must be managed by the account owner, who can invite or remove team members via email.
- SAR-4: The system must enforce seat limits — a Solo LTD cannot have more than 1 active user; team licenses enforce their seat cap.
- SAR-5: LTD purchasers must be upgradeable to a future Pro tier (PIMS integration) without losing their LTD entitlements.
- SAR-6: The 14-day free trial must provide full feature access. No credit card required at trial signup.
- SAR-7: Trial-to-paid conversion must be a single-step checkout (no multi-page funnel). Stripe integration for payment.

### Multi-Tenancy

- SAR-8: Each user's notes, templates, and account data must be strictly isolated. No cross-user data leakage is permissible under any failure mode.
- SAR-9: Team accounts must have an admin view for the account owner: seat usage, member list, note volume per member (no note content visible to admin).

### Onboarding and Activation

- SAR-10: First-run experience must guide the user to their first recorded note in under 5 minutes. Steps: account creation → species selection → record → view note → copy.
- SAR-11: In-app onboarding must include a guided first-note walkthrough (not a video — an interactive prompt-driven flow).
- SAR-12: Day 7 and Day 14 in-trial notifications (push + in-app) must surface the LTD pricing comparison with explicit ROI calculation.

### Retention and Engagement

- SAR-13: The app must surface a weekly summary to the user: notes generated this week, estimated time saved (based on average manual time of 12 minutes per note).
- SAR-14: The system must send a re-engagement notification if a user has not recorded a note in 5+ days during their trial period.

---

## Project Scoping and Phased Development

### MVP Strategy and Philosophy

The MVP solves one problem completely: record a veterinary exam narration → receive a structured, paste-ready SOAP note. Every feature decision is filtered through the question: "Does this enable or improve the core record → transcribe → output flow?" If not, it is deferred.

The MVP is designed to reach AppSumo launch readiness in 2–3 weeks of focused development. Scope is ruthlessly constrained: no PIMS integration, no ambient mode, no analytics, no multi-language support.

### MVP Feature Set — Phase 1 (Months 1–3)

**Voice Recording:**
- iOS and Android native app (React Native or Flutter)
- One-tap recording start/stop
- Local audio capture with queue-based upload (offline-capable)
- Maximum recording length: 15 minutes
- Species and basic signalment selection before recording (species, age class)
- Visual recording indicator (waveform or timer)

**AI Transcription and SOAP Structuring:**
- OpenAI Whisper API integration (veterinary vocabulary aware)
- Automatic SOAP section classification from unstructured narration
- Processing time target: < 30 seconds for a 5-minute narration
- `[unclear]` markers surfaced when audio is ambiguous (no silent hallucination)
- Confidence-level indicator on generated sections (low/medium/high)

**Species-Specific Templates:**
- Dogs (companion animal — complete template)
- Cats (companion animal — complete template)
- Exotic small mammals: rabbits, guinea pigs, ferrets (single combined template with species field)
- Avian (birds — single template with species field)
- Reptiles (single template with species field)
- Each template: normal reference ranges embedded, species-typical differential patterns, common drug names for that species pre-primed in vocabulary

**SOAP Note Review and Edit:**
- Clean 4-section display (S/O/A/P) with inline editing
- Section-by-section navigation
- Edit tracking (marks sections as "user-modified" vs. "AI-generated" for audit)
- Note history: last 30 days, searchable by species and date
- Note delete (manual)

**PIMS-Agnostic Output:**
- One-tap "Copy All" (full SOAP to clipboard)
- Section-by-section copy (copy just Plan, for example)
- PDF export (share to email, AirDrop, Files)
- No PIMS API integration (copy-paste only)

**User Account and Licensing:**
- Email + password authentication (Supabase Auth or Firebase Auth)
- Google OAuth option
- 14-day free trial (no credit card, full features)
- LTD purchase (Stripe): Solo $79, Small Team $149, Clinic $199
- Team seat invitation and management (owner-controlled)
- Basic usage dashboard: notes generated, estimated time saved

**Template Customization:**
- Users can edit default templates (rename sections, add/remove fields, change default text)
- Customized templates persist across sessions
- Reset to default option per template

### Post-MVP Features — Phase 2 (Months 4–12)

- Cornerstone browser extension (direct note write-back)
- Avimark browser extension
- Discharge instruction generation from Plan section
- Visual SOAP template builder (GUI editor)
- Practice-level analytics for team accounts
- Referral program (give $20 credit, get $20 credit)
- In-app upgrade prompt for Pro tier (PIMS integration)

### Vision Features — Phase 3 (Year 2+)

- Ambient recording mode (always-on exam room, with consent framework)
- ezyVet and Shepherd API integration
- Multi-vet practice dashboard and productivity reporting
- Enterprise/DSO tier ($199/month, unlimited seats)
- International expansion (Canada, UK)
- Specialist modules: equine, emergency/critical care, oncology, ophthalmology
- Patient history import (PIMS data prefill for context-aware notes)
- Spanish-language UI and templates

### Risk Mitigation

| Risk | Likelihood | Mitigation |
|------|-----------|-----------|
| Shepherd stabilizes AI SOAP and bundles it free | Medium | VetScribe's LTD pricing and standalone architecture are durable advantages even if Shepherd improves; position explicitly on reliability and cross-PIMS use |
| Whisper API accuracy insufficient for exotic species | Medium | Pre-test with 50+ exotic species recordings before beta; use species-specific system prompts; add veterinary glossary to Whisper fine-tuning if needed |
| AppSumo rejects or delays listing | Low | Build direct sales channel in parallel; VIN + Reddit community seeding can drive initial LTD sales without AppSumo |
| Subscription churn > 15% | Low-Medium | Churn driver is likely accuracy or friction; 14-day trial + beta gives advance signal; address before subscription launch |
| Niche community access (vet channels smaller than general SaaS) | Low | Start with 5 targeted VIN threads and r/veterinary; relief vet Facebook groups are highly active and less saturated |

---

## Functional Requirements

### FR-1: Voice Recording

- FR-1.1: The user can start a voice recording session with a single tap from the home screen.
- FR-1.2: The user can select the patient species before recording begins (dog, cat, exotic mammal, avian, reptile).
- FR-1.3: The user can optionally add a patient name or case identifier before recording.
- FR-1.4: The app captures audio locally to the device storage before uploading, ensuring recording is never lost due to connectivity loss.
- FR-1.5: The user can pause and resume a recording within the same session.
- FR-1.6: The user can stop recording and immediately trigger SOAP note generation.
- FR-1.7: The app displays a visual recording indicator (timer + waveform visualization) while recording is active.
- FR-1.8: The app enforces a maximum recording length of 15 minutes, with a warning at 12 minutes.
- FR-1.9: The app queues recordings for upload when offline and automatically processes them when connectivity is restored.

### FR-2: AI Transcription and SOAP Structuring

- FR-2.1: The system transcribes the audio recording using OpenAI Whisper API with veterinary vocabulary optimization.
- FR-2.2: The system automatically classifies transcribed content into the correct SOAP section (Subjective, Objective, Assessment, Plan) based on content semantics, not explicit section labels from the speaker.
- FR-2.3: The system applies the species-specific template to structure the output note, including species-appropriate field labels and normal reference ranges.
- FR-2.4: The system delivers the complete structured SOAP note within 30 seconds of recording completion for recordings up to 5 minutes.
- FR-2.5: The system marks any audio segments it could not transcribe with explicit `[unclear - please review]` markers rather than generating inferred content.
- FR-2.6: The system surfaces a confidence level (low/medium/high) for each generated SOAP section.
- FR-2.7: The system does not add clinical content (diagnoses, treatments, recommendations) not explicitly stated in the recording.

### FR-3: Species-Specific Templates

- FR-3.1: The system provides pre-built SOAP templates for: dogs, cats, exotic small mammals (ferret/rabbit/guinea pig), avian (birds), and reptiles.
- FR-3.2: Each template includes species-appropriate normal reference ranges for vitals (TPR, weight, BCS, respiratory rate).
- FR-3.3: Each template includes species-appropriate field labels (e.g., "Crop" appears in avian templates; "Cloaca" in reptile templates).
- FR-3.4: The user can edit any default template to match their practice's documentation style.
- FR-3.5: The user can save customized templates as their default for a given species.
- FR-3.6: The user can reset any template to the system default.
- FR-3.7: Customized templates persist across sessions and devices for the user's account.

### FR-4: SOAP Note Review and Output

- FR-4.1: The user can view the generated SOAP note in a clean, section-by-section display with S/O/A/P clearly delineated.
- FR-4.2: The user can edit any section of the generated note using inline text editing before copying or exporting.
- FR-4.3: The system marks user-modified sections visually (e.g., pencil icon) to distinguish AI-generated from user-edited content.
- FR-4.4: The user can copy the complete SOAP note to the device clipboard with a single tap.
- FR-4.5: The user can copy any individual SOAP section (S, O, A, or P separately) to the clipboard.
- FR-4.6: The user can export the SOAP note as a formatted PDF document.
- FR-4.7: The PDF export includes the patient species, optional patient identifier, date/time, and vet name.
- FR-4.8: The user can share the PDF via standard iOS/Android share sheet (email, AirDrop, Files, etc.).
- FR-4.9: A disclaimer appears on the note review screen: "VetScribe is a documentation aid. The veterinarian is responsible for the clinical accuracy of all records."

### FR-5: Note History

- FR-5.1: The system retains the last 30 days of generated notes per user account.
- FR-5.2: The user can browse their note history filtered by species and date.
- FR-5.3: The user can search note history by patient identifier (if entered).
- FR-5.4: The user can open any historical note, view it, copy it, or re-export it as PDF.
- FR-5.5: The user can delete individual notes from their history.
- FR-5.6: Notes older than 30 days are automatically deleted from the system.

### FR-6: User Account and Authentication

- FR-6.1: The user can create an account using email and password.
- FR-6.2: The user can create an account using Google OAuth.
- FR-6.3: The user can log in and maintain sessions across app restarts (persistent auth tokens).
- FR-6.4: The user can reset their password via email link.
- FR-6.5: The user can update their display name and email address in account settings.
- FR-6.6: The user can delete their account, which removes all associated notes, templates, and personal data within 30 days.

### FR-7: Trial and Licensing

- FR-7.1: New users receive automatic 14-day free trial access to all features upon account creation, without entering payment information.
- FR-7.2: The app displays trial days remaining in a persistent header indicator during the trial period.
- FR-7.3: The app delivers an in-app notification at Day 7 of the trial surfacing the LTD pricing comparison and ROI calculation.
- FR-7.4: The app delivers an in-app notification at Day 14 (trial end) with a time-limited conversion prompt.
- FR-7.5: The user can purchase a Solo LTD ($79), Small Team LTD ($149), or Clinic LTD ($199) through in-app Stripe checkout.
- FR-7.6: The user can subscribe to Solo Monthly ($19/month) or Team Monthly ($49/month) through in-app Stripe checkout.
- FR-7.7: Stripe webhooks update license status in real time; the user's access tier updates immediately upon successful payment.
- FR-7.8: After trial expiration, the user can view their note history but cannot generate new notes until they subscribe or purchase.

### FR-8: Team Management

- FR-8.1: A Small Team or Clinic LTD account owner can invite additional users by email.
- FR-8.2: Invited users receive an email invitation and join the team by creating or linking their existing account.
- FR-8.3: The account owner can view the team member list and each member's note count.
- FR-8.4: The account owner cannot view the content of team members' notes (privacy isolation).
- FR-8.5: The account owner can remove a team member, which revokes their team access.
- FR-8.6: The system enforces seat limits: Solo (1), Small Team (3), Clinic (10). Invitations beyond the seat cap are rejected with a clear error message.

### FR-9: Usage Dashboard

- FR-9.1: The user can view a personal dashboard showing total notes generated (lifetime and this week).
- FR-9.2: The dashboard displays an estimated time saved, calculated as (notes generated × 12 minutes average manual time) minus actual average recording time.
- FR-9.3: Team account owners can view aggregate note volume per team member (count only, no content).
- FR-9.4: The dashboard displays the user's current license tier and remaining trial days (if applicable).

### FR-10: Notifications and Retention

- FR-10.1: The app sends a push notification if the user has not recorded a note in 5 consecutive days during their trial.
- FR-10.2: The app sends a weekly summary push notification (notes generated, time saved estimate) for active users.
- FR-10.3: The user can disable any notification category in app settings.

---

## Non-Functional Requirements

### Performance

- NFR-P1: Voice recording start latency must be < 1 second from the user tapping "Record" to the microphone being active.
- NFR-P2: SOAP note generation must complete in < 30 seconds for recordings up to 5 minutes, and < 60 seconds for recordings up to 15 minutes, under normal network conditions (>10 Mbps).
- NFR-P3: The mobile app must load to the home screen in < 2 seconds on a 3-year-old mid-range device (iPhone 12 equivalent, Android Pixel 4 equivalent).
- NFR-P4: Audio upload must begin in the background immediately upon recording completion, not waiting for the user to tap "Generate."

### Reliability

- NFR-R1: The backend API (transcription pipeline, note storage) must maintain ≥ 99.5% uptime, measured monthly.
- NFR-R2: Audio recordings must never be lost due to app crash or connectivity loss. Local-first storage with crash-safe write is required.
- NFR-R3: If the Whisper API is unavailable, the system must queue the recording and notify the user, rather than discarding the audio.
- NFR-R4: The system must recover gracefully from Whisper API errors: retry up to 3 times with exponential backoff before surfacing an error to the user.

### Security

- NFR-S1: All data in transit must be encrypted with TLS 1.2 or higher.
- NFR-S2: Notes and user data must be encrypted at rest using AES-256.
- NFR-S3: Audio recordings must be deleted from backend storage within 24 hours of successful note generation.
- NFR-S4: User passwords must be hashed using bcrypt or Argon2. No plaintext passwords stored anywhere in the system.
- NFR-S5: Authentication tokens must expire after 30 days of inactivity. Refresh token rotation must be implemented.
- NFR-S6: The API must implement rate limiting: 100 note generation requests per user per day (reasonable ceiling for any solo vet).
- NFR-S7: Team member note content must be strictly isolated — no API endpoint may return another user's note content regardless of team membership.

### Scalability

- NFR-SC1: The system must handle 300 simultaneous trial activations (AppSumo launch burst) without degradation in note generation time.
- NFR-SC2: The architecture must support horizontal scaling of the transcription processing layer (worker queue + auto-scaling workers).
- NFR-SC3: The database must be designed to support 50,000 active users without schema changes (proper indexing on user_id, created_at, species).

### Accessibility

- NFR-A1: The mobile app must support iOS and Android system font size settings (Dynamic Type on iOS, text scaling on Android).
- NFR-A2: All interactive elements must have accessible labels for VoiceOver (iOS) and TalkBack (Android).
- NFR-A3: Color is never used as the sole means of conveying information (e.g., confidence levels use both color and text labels).

### Integration

- NFR-I1: The Stripe integration must support both one-time LTD payments and recurring subscription billing with webhook-driven license status updates.
- NFR-I2: The OpenAI Whisper API integration must be abstracted behind an internal transcription service interface to allow future swapping to an alternative provider (e.g., Deepgram, AssemblyAI) without changes to the recording or note generation layers.
- NFR-I3: The backend must expose a well-documented internal API (OpenAPI spec) to support future browser extension and PIMS integration work in Phase 2.
- NFR-I4: PDF generation must not depend on an external third-party service — it must be handled server-side using an open-source PDF library (e.g., WeasyPrint, Puppeteer) to avoid additional external dependencies and cost.

### Offline Support

- NFR-O1: The mobile app must function in recording-only mode when offline (capture audio to local storage).
- NFR-O2: The app must automatically upload and process queued recordings when connectivity is restored, with no manual user action required.
- NFR-O3: Previously generated notes must be accessible offline (cached on device) for the most recent 30 days.

---

## Appendix: Pricing and Go-To-Market Summary

### Pricing Tiers

| Tier | Price | Users | Notes |
|------|-------|-------|-------|
| Solo LTD | $79 one-time | 1 | AppSumo primary tier |
| Small Team LTD | $149 one-time | 3 | AppSumo tier 2 |
| Clinic LTD | $199 one-time | 10 | AppSumo tier 3 |
| Solo Monthly | $19/month | 1 | Post-AppSumo subscription |
| Team Monthly | $49/month | 3 | Post-AppSumo subscription |
| Pro Upgrade (future) | $49/mo or $299 one-time | — | PIMS browser extension add-on |

### Go-To-Market Sequence

1. **Beta (Weeks 1–4):** 20 beta users from VIN forums, r/veterinary, personal outreach. Free access in exchange for structured feedback. Goal: ≥ 10 paying conversions.
2. **AppSumo Launch (Month 2):** Submit to AppSumo. Target 150–300 LTD sales in 30-day window. Seed with 5 VIN threads, r/veterinary posts, vet Facebook groups.
3. **Community Seeding (Ongoing):** Maintain presence in VIN, r/veterinary, r/VetTech, AAHA newsletter. Encourage user-generated reviews and testimonials.
4. **Subscription Launch (Month 4):** Open direct subscription tier for users who missed AppSumo. Content SEO campaign targeting "veterinary AI scribe" and "veterinary SOAP notes app."
5. **Pro Tier (Month 8–12):** Browser extension for Cornerstone and Avimark. Offer LTD upgraders a discounted first year of Pro.

### Key Channels

- Veterinary Information Network (VIN) — primary vet community, high-trust forum
- r/veterinary, r/VetTech — Reddit communities
- AAHA newsletter and conference
- Serenity Vet community (relief vet focused)
- Relief vet Facebook groups
- AppSumo marketplace
- Direct organic SEO ("veterinary AI SOAP notes", "AI vet scribe Cornerstone")

---

*Document created: 2026-05-17*  
*Author: Root (automated BMAD pipeline)*  
*Status: Complete — ready for Architecture phase*  
*Next step: create-architecture*
