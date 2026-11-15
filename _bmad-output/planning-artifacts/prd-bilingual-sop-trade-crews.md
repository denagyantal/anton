---
stepsCompleted: [step-01-init, step-02-discovery, step-02b-vision, step-02c-executive-summary, step-03-success, step-04-journeys, step-05-domain, step-06-innovation, step-07-project-type, step-08-scoping, step-09-functional, step-10-nonfunctional, step-11-polish, step-12-complete]
inputDocuments:
  - ideas/shortlisted/bilingual-sop-trade-crews.md
  - _bmad-output/planning-artifacts/product-brief-bilingual-sop-trade-crews.md
workflowType: prd
project_name: bilingual-sop-trade-crews
user_name: Root
date: 2026-11-15
classification:
  projectType: saas_b2b
  domain: trade_compliance
  complexity: medium
  projectContext: greenfield
---

# Product Requirements Document — CrewSOP

**Author:** Root
**Date:** 2026-11-15
**Product:** CrewSOP — Bilingual SOP System for Trade Crews
**Status:** Complete

---

## Executive Summary

CrewSOP is a voice-first SOP builder for 5–30-person English/Spanish trade crews in landscaping, roofing, construction, and HVAC. The owner speaks into their phone, AI generates a bilingual side-by-side English/Spanish numbered checklist, and a QR code is published for equipment stickers. When a Spanish-speaking crew member scans the sticker, they see the full bilingual procedure — no app install, no login, no prior training required.

The product targets 419,000+ US trade businesses with bilingual crews. No existing tool addresses voice-first creation + bilingual-as-default output + QR delivery simultaneously. Trainual ($249/month) serves office teams. SOPX ($199/month) is manufacturing-focused with translation as an add-on. Neither supports voice input or QR-on-equipment crew delivery.

**North Star Metric:** Active SOP QR code scans per month per customer — the definitive signal that field crews are actually using the product.

**Revenue Model:** $99/month Pro SaaS with AppSumo LTD at $299 as the primary launch vehicle. Target: 100 paying subscribers within 4 months.

**Build Timeline:** 2-week MVP using OpenAI Whisper + Claude claude-sonnet-4-6 + QR code stack.

### What Makes This Special

Three missing dimensions define the gap — no competitor addresses all three simultaneously:

1. **Voice-first creation** — Owner records a voice memo explaining procedure steps; AI transcribes and structures into a numbered checklist. Zero typing required. Removes the primary friction: trade owners speak, they don't type.

2. **Bilingual as product identity** — Side-by-side English/Spanish is the default output, not a toggle or add-on. The entire UX and product promise is bilingual. The product exists to serve mixed-language crews.

3. **Equipment-linked QR delivery with zero crew friction** — Each SOP gets a unique QR code tied to specific equipment. Crew scans the sticker taped to the mower, reads the checklist in Spanish. No app install, no company email, no onboarding. Works on any Android or iPhone.

The OSHA compliance angle creates urgency: documented bilingual training is the cheapest path to avoiding $16,550–$165,514 Willful violation fines. Workers' comp premium reduction (Colorado data: 20% reduction in Hispanic claims after Spanish-language safety training) creates a quantifiable ROI that bypasses the typical SaaS "maybe later" deferral.

## Project Classification

- **Project Type:** SaaS B2B web application
- **Domain:** Trade operations and OSHA/workers' comp compliance
- **Complexity:** Medium — bilingual AI output quality is safety-critical; field-worker UX requires zero-friction mobile delivery; compliance angle demands accuracy
- **Project Context:** Greenfield — no existing product in this exact niche

---

## Success Criteria

### User Success

| Metric | Target | Measurement |
|--------|--------|-------------|
| Time from signup to first SOP (voice → QR generated) | Under 7 minutes | App event tracking |
| Time from SOP creation to first crew QR scan | Within 48 hours | QR scan analytics |
| SOPs created per customer in first 30 days | 5+ | App event tracking |
| Owner training time reduction (self-reported) | 50%+ reduction | Onboarding survey at day 30 |
| Spanish translation approval rate (steps accepted without edit) | 95%+ | Edit event tracking vs. total steps |
| Crew QR scan page load success rate | 95%+ (page loads, not abandoned) | Server logs |
| Activation moment | 1 SOP created + 1 crew scan within 7 days | Funnel event tracking |

**Activation Moment:** Customer creates their first SOP, generates QR code, and a crew member successfully scans it. Any customer who reaches this moment and creates 5+ SOPs in the first 30 days is considered retained.

### Business Success

| Milestone | Target | Timeline |
|-----------|--------|----------|
| Beta customers (free) with active crew scans | 20 | Month 1–2 |
| Free-to-paid conversion rate (14-day trial) | 25%+ | Month 2 |
| Paying subscribers at $99/month | 100 | Month 4 |
| MRR | $9,900 | Month 4 |
| AppSumo LTD units (conservative) | 300 × $299 = $89,700 | Month 4–6 |
| Net MRR churn | Below 2% per month | Month 3+ |
| Month 2 retention | 85%+ | Month 3 |
| Month 6 retention | 70%+ | Month 7 |

**Business Success Moment:** 100 paying subscribers with 85%+ month-2 retention, AppSumo application submitted with 50+ reviews.

### Technical Success

- Public QR scan page loads in under 2 seconds on a mid-range Android phone on 4G
- Voice transcription accuracy: 95%+ of spoken words correctly transcribed by Whisper API
- Spanish translation quality: less than 5% step edit rate by bilingual owner review
- API uptime for public SOP pages: 99.5%+ (a scan failure during crew use = product failure)
- Stripe payment flow: 0 failed subscription activations due to system errors

### Measurable Outcomes

The product is validated when:

1. 20 beta customers create their first SOP without guidance beyond the onboarding video
2. At least 15 of those 20 have a crew member scan and confirm Spanish accuracy
3. 10+ beta customers convert to paid within 30 days at $99/month
4. Spanish translation receives less than 5% edit rate from bilingual owner review
5. QR scan page loads in under 2 seconds on mid-range Android on 4G

---

## Product Scope

### MVP — Minimum Viable Product (Phase 1, 2-week build)

The MVP covers the minimum viable loop: voice memo → bilingual SOP → QR code → crew reads it.

**Core User Journeys Supported:**
- Owner creates first SOP via voice on mobile
- Owner reviews, edits, and approves bilingual output
- Owner generates and prints QR code
- Crew member scans QR, reads bilingual checklist on any smartphone (no install)
- Owner updates existing SOP; same QR reflects new version

**Must-Have Capabilities:**
- Voice recording → Whisper transcription → Claude structuring → bilingual English/Spanish checklist
- Inline step editing in both languages
- QR code generation (unique UUID per SOP), downloadable as PNG
- Public SOP mobile-optimized page (no auth, loads under 2 seconds)
- SOP versioning (same QR URL, new version published on update)
- SOP list dashboard with create, edit, delete
- Email/password auth for owners
- Stripe $99/month Pro plan with 14-day free trial (3 SOPs on trial, 25 on paid)
- Usage guardrails: Starter = 10 SOPs, Pro = 25 SOPs, Business = 100 SOPs

**Tech Stack:**
- Voice transcription: OpenAI Whisper API ($0.006/minute)
- Structuring + translation: Claude claude-sonnet-4-6
- QR generation: `qrcode.js` or server-side Python `qrcode` library
- Frontend: Next.js (mobile-first SSR for fast QR scan page loads)
- Backend: Node.js/Express or FastAPI
- Database: PostgreSQL (SOP records with UUID, owner_id, content_json, version)
- Hosting: Railway or Render
- Payments: Stripe Checkout

### Growth Features (Phase 2, Post-MVP)

- Photo steps — owner optionally adds a photo at any checklist step
- SOP analytics dashboard — scan counts per SOP, scan frequency, compliance reporting PDF export
- SOP templates library — pre-built bilingual SOPs for common trade procedures (zero-turn mower, chainsaw, roof anchor)
- Multi-user accounts — multiple crew supervisors can create/edit SOPs; role-based access
- Additional languages — Portuguese (Northeast US landscaping), Haitian Creole (Florida)

### Vision (Phase 3, 12–24 months)

- Workers' comp / insurance integration — documentation that demonstrably reduces premiums
- Franchise and multi-location support — SOPs propagate across locations
- Training completion tracking — crew signs off on reading via QR scan (name + timestamp logged)
- Video SOPs — owner records short video; AI generates bilingual transcript overlay
- National association partnerships — NALP, NRCA white-label or endorsed plans

---

## User Journeys

### Journey 1: Miguel Creates His First SOP (Primary Happy Path)

Miguel owns a 15-person landscaping company in Tampa, FL. Eleven crew members are Spanish-speaking; four are Spanish-only. His one bilingual supervisor handles all translation. Last summer a new hire damaged a $4,000 Ferris mower because he didn't understand the blade height procedure. Last month, Miguel received an OSHA warning letter citing language-inadequate training.

He finds CrewSOP via a Facebook group post: "Anyone using a tool for Spanish crew training? Found this." He watches the 60-second demo video — voice memo → bilingual checklist → QR code → crew scans. He signs up.

On his phone during his lunch break, he taps "New SOP" and types "Zero-turn mower operation." He presses Record and speaks: "Step one — check blade height lever is in the transport position before starting. Step two — start engine and let idle for 30 seconds…" He speaks for 90 seconds.

Whisper transcribes. Claude structures into 8 numbered steps, generates Spanish alongside each English step. Miguel reads through. Step 4 looks slightly awkward in Spanish — he taps it, edits one word. He approves.

He taps "Generate QR" — a downloadable PNG appears. He prints it on a 2"×2" label sheet and tapes it to the mower's dashboard.

The next morning, he walks the new Spanish-only crew member to the mower, points at the sticker, and says "escanea esto." The crew member scans, reads, and says "sí, está bien." Miguel hasn't done a verbal training for this machine. He converts to paid that afternoon.

**Journey reveals requirements for:** Voice recording UI, Whisper transcription, bilingual step display, inline editing, QR generation, mobile-optimized public page, conversion flow.

---

### Journey 2: Dale Builds a Compliance Documentation Set (Compliance Buyer Path)

Dale runs a 10-person roofing crew in Houston, TX. Seven are Spanish-speaking. He had a worker's comp claim last year after a fall — premium jumped 30%. His insurance broker told him that documented bilingual safety training is a premium reduction factor.

Dale searches "Spanish safety training roofing documentation software" and lands on CrewSOP's OSHA compliance landing page. He reads: "The cheapest way to avoid a $16,550 OSHA Willful violation." He books a demo.

After the demo, he starts his free trial. His goal isn't one SOP — it's a full safety documentation set for his insurance underwriter. He creates 8 SOPs in his first week: roof anchor setup, ladder positioning, harness inspection, power nail gun operation, roof edge safety, and three others.

After 10 days he exports a PDF compliance report (Phase 2 feature — for MVP, he screenshots the SOP pages). He shows his broker. The broker accepts it as documentation of native-language safety training.

Dale upgrades to Pro before his trial ends. He adds a note to his calendar to request the premium discount at renewal.

**Journey reveals requirements for:** Multiple SOP creation within trial limits, SOP library management, PDF export capability (Phase 2), owner dashboard with organized SOP list, compliance-angle landing page.

---

### Journey 3: Sarah Scales Her Crew Without Scaling Her Time (Growth Operator Path)

Sarah started her lawn care business solo three years ago. She now has 7 employees — 5 Spanish-speaking — and is hiring 3 more this season. Repeating verbal training for every new hire is consuming 2 hours per person.

She posts in "Lawn Care Business Owners" Facebook group: "How do you train Spanish-speaking employees on equipment?" A reply mentions CrewSOP: "We tape a QR sticker to the mower, new hires scan it, done."

She signs up for the AppSumo LTD deal at $299. In her first week she creates 5 SOPs covering her full equipment fleet. She adds the QR stickers to all equipment.

The next new hire arrives. Sarah hands him the equipment walk-around sheet — which now just says "scan the sticker before using each machine." The new hire self-onboards on three machines without Sarah present. Her morning is free.

She writes a Facebook group review: "New hires scan the sticker, read the Spanish checklist, done. No more 2-hour verbal training sessions." Two of her group members sign up from the referral.

**Journey reveals requirements for:** Bulk SOP creation flow, sticker-ready QR format, AppSumo LTD tier with generous SOP limit (50 SOPs), community-driven referral loop, mobile-first owner creation.

---

### Journey 4: Carlos Scans a QR Sticker on the Chainsaw (Crew Member Experience)

Carlos speaks Spanish as his primary language and minimal English. He joined Dale's roofing crew last week. His foreman points to a QR sticker on the chainsaw carrying case and says "escanéalo antes de usar."

Carlos takes out his Android phone, opens the camera, points it at the sticker. No app download prompt. His browser opens a page. It loads in under 2 seconds. He sees:

```
Operación de Sierra de Cadena / Chainsaw Operation
Paso 1: Verificar que el freno de cadena...
Step 1: Verify chain brake is engaged...
```

Each step is numbered, bilingual side-by-side. He reads through 10 steps in 90 seconds. He understands the safety procedure without asking anyone.

He uses the chainsaw. No incident.

**Journey reveals requirements for:** Zero-auth public page, bilingual side-by-side display, mobile-optimized responsive layout, page load under 2 seconds on 4G, no app install, works on any Android/iPhone, UUID-based URL structure.

---

### Journey 5: Miguel Updates a SOP After an Equipment Change (Version Update Path)

Three months after creating his zero-turn mower SOP, Miguel buys a new Exmark with a different deck height lever. The old procedure is now incorrect — the new mower requires a different sequence.

He opens CrewSOP on his phone, finds the "Zero-turn mower operation" SOP in his list. He taps Edit, then Re-record. He speaks the new steps. Claude generates updated bilingual content. He reviews, approves.

The same QR sticker taped to the mower now shows the updated version. He doesn't reprint the sticker. He doesn't notify crew — they'll see the new version automatically next time they scan.

**Journey reveals requirements for:** SOP versioning with same persistent URL, re-record voice for existing SOP, version history (Phase 2), no QR reprint required on update.

---

### Journey Requirements Summary

| Capability Area | Journeys Requiring It |
|----------------|----------------------|
| Voice recording + transcription | 1, 3, 5 |
| Bilingual AI structuring + translation | 1, 2, 3, 4, 5 |
| Inline step editing (both languages) | 1, 2 |
| QR code generation + download | 1, 2, 3 |
| Public mobile-optimized SOP page | 1, 2, 3, 4, 5 |
| SOP versioning (same URL, updated content) | 5 |
| SOP list dashboard + management | 2, 3, 5 |
| Account auth + subscription billing | 1, 2, 3 |
| Usage limits by plan tier | 2, 3 |
| PDF export / compliance report | 2 (Phase 2) |

---

## Domain-Specific Requirements

### Compliance and Regulatory Context

**OSHA Native-Language Training Mandate (29 CFR 1926.21):** OSHA requires safety training "in a language and vocabulary the worker can understand." This is not optional — it is an enforcement priority. Willful violation: $16,550–$165,514 per incident. The product's compliance positioning must be accurate and must not overstate OSHA safe harbor status. CrewSOP produces documentation evidence; it does not certify compliance. Marketing must distinguish between "supports compliance" and "guarantees compliance."

**Spanish Translation Accuracy — Safety-Critical Obligation:** SOPs documenting equipment operation and safety procedures must translate accurately. A mistranslated safety step (e.g., "engage brake before dismounting" rendered as "disengage brake") could cause injury. Requirements:
- Spanish output is reviewed by the owner before publishing — no auto-publish without review
- Inline editing is available for both English and Spanish steps
- MVP: Claude claude-sonnet-4-6 for translation; if edit rate exceeds 10%, evaluate DeepL Pro as translation layer fallback
- Future: Verified bilingual reviewer program for SOP templates library

**Workers' Comp Documentation:** Spanish-language safety documentation is an accepted risk factor for premium reduction in several states. CrewSOP does not provide insurance advice. The product helps owners generate documentation they can present to their broker.

### Technical Constraints

**Mobile-First Mandatory:** The public crew QR scan page must work on sub-$200 Android phones with 4G connectivity. No assumptions about device quality or WiFi. Page must load completely with bilingual content in under 2 seconds on 4G.

**No App Install Requirement for Crew:** Any friction in the crew scan experience (app download prompt, login, permissions) renders the product's core value proposition false. The public SOP page must be a standard mobile browser URL — no PWA install prompt, no service worker registration on first load.

**Voice Recording Browser Permissions:** Mobile Safari and Chrome require `getUserMedia` for audio capture. The owner creation flow must handle permission denials gracefully with a clear prompt explaining why microphone access is needed.

**Data Retention:** SOP content (English + Spanish text, voice memo audio) must be retained as long as the account is active. When an account is cancelled, SOP pages remain accessible for 30 days (grace period) to allow QR stickers to be removed from equipment.

---

## Innovation and Novel Patterns

### Detected Innovation Areas

**Voice-to-Bilingual-SOP Pipeline (Primary Innovation):** The combination of Whisper API transcription + Claude bilingual structuring applied to trade crew training is not a known product pattern. The closest analogs are general-purpose voice note apps and enterprise SOP tools — neither offers voice-in, bilingual-out, QR-on-equipment as a cohesive product.

**Equipment-Linked QR as SOP Delivery Primitive:** Taping a QR code to physical equipment as the access point for safety procedures is a novel application of a well-understood technology (QR codes) in a domain where it has not been applied (trade crew SOPs). The insight is: field workers don't need an account, a device, or a login — they need a sticker on the machine they're about to operate.

**OSHA Compliance as Urgency Trigger:** Positioning a simple SaaS as a compliance instrument in a domain where non-compliance has five-figure fine exposure is an innovation in go-to-market positioning, not product technology. This creates urgency that typical SaaS tools in the SMB trade market do not have.

### Validation Approach

**Translation Quality Validation (Pre-Launch):**
- Recruit 5 bilingual (English/Spanish) trade professionals as beta reviewers
- Each reviews 20 AI-generated SOPs covering landscaping, roofing, HVAC
- Target: less than 5% step edit rate before public launch
- Fallback: if Claude translation error rate exceeds 10%, integrate DeepL Pro API as a parallel translation layer and compare outputs

**Voice Transcription Validation:**
- Test Whisper API against accented English speech (Southern US, regional contractor accents)
- Test with trade-specific vocabulary: "zero-turn," "blade pitch," "PTO engagement," "flashing," "ridge cap"
- Validate that trade jargon is preserved correctly or replaced with standard equivalents

**Zero-Install QR Scan Validation:**
- Test QR scan flow on 5 Android devices ranging from $80 to $400 market value
- Test on iOS Safari, Android Chrome, Samsung Internet
- Target: 100% page loads within 2 seconds on 4G network
- Validate QR code readability at 2"×2" printed size from 12–18 inches distance

### Risk Mitigation

**Translation Quality Risk:** Safety-critical mistranslation. Mitigation: owner review is mandatory before publishing (no auto-publish). Edit UI clearly flags AI-generated content. Future: bilingual reviewer verification for template library.

**Voice Transcription Quality Risk:** Trade jargon misheard. Mitigation: owner sees full transcribed text before structuring into steps. Can re-record or manually correct.

**DIY Competition Risk:** Owner uses ChatGPT manually ($0 cost). Mitigation: CrewSOP delivers QR code, versioning, and crew-facing mobile page — none of which ChatGPT provides. The 90-second end-to-end demo is the counter-argument.

---

## SaaS B2B Specific Requirements

### Project-Type Overview

CrewSOP is a vertical SaaS product targeting small trade businesses (5–30 employees). It is not a horizontal platform. The vertical focus (landscaping, roofing, HVAC, construction) enables:
- Specific marketing language and channel presence (Facebook trade groups)
- Future SOP templates tailored to trade equipment
- Trust signals specific to the industry (OSHA references, insurance angles)

The product has two distinct user contexts:
1. **Owner context (authenticated):** Web app, mobile-first, voice capture, SOP management
2. **Crew context (unauthenticated):** Public QR page, read-only, zero friction, any device

### Technical Architecture Considerations

**Dual URL Architecture:**
- Authenticated owner dashboard: `app.crewsop.com/dashboard`
- Public SOP page: `app.crewsop.com/s/{uuid}` — no auth, cacheable, CDN-deliverable

**SOP Data Model (Core):**
```
sop {
  id: uuid (primary key, used in public URL)
  owner_id: foreign key → users
  name: string (equipment/procedure label)
  content: jsonb { steps: [{en: string, es: string}], version: int }
  version: int (incremented on update, same UUID)
  status: enum (draft | published | archived)
  created_at, updated_at: timestamp
}
```

**Voice Memo Storage:** Audio files are transient — used for Whisper transcription then discarded (not stored long-term). This reduces storage costs and eliminates voice data retention risk.

**Multi-Tenancy:** Single-tenant data model in MVP. Each owner's SOPs are isolated by `owner_id`. No cross-tenant visibility.

**Subscription Enforcement:** SOP creation is gated by plan tier (Starter: 10, Pro: 25, Business: 100). Counts are enforced at creation time. Published SOPs remain accessible regardless of tier downgrade until count exceeds new tier limit.

### Tenant Model

Single-owner per account in MVP. Each account = one trade business. Team/multi-user support (Phase 2) adds `team_id` and role-based access (admin/editor/viewer).

### RBAC (MVP)

| Role | Capabilities |
|------|-------------|
| Owner (single user) | Full CRUD on SOPs, billing management |
| Crew member (unauthenticated) | Read-only public SOP page via QR scan |

### Implementation Considerations

**Whisper API Latency:** Whisper API processes audio at approximately 10–15× real-time speed. A 90-second voice memo returns in 6–9 seconds. The UI must show processing state clearly and not timeout. Claude structuring + translation adds 3–5 seconds. Total end-to-end pipeline: 10–15 seconds from recording stop to bilingual draft display.

**QR Code Sizing:** The QR code must be scannable when printed at 2"×2" (standard equipment label size). The UUID URL must encode at error correction level M (15% damage tolerance — appropriate for equipment environments). Avoid high-density QR codes that break at small print sizes.

**Public SOP Page Caching:** The public SOP page should be cacheable via CDN (Cloudflare). Cache invalidation must trigger on SOP version update. TTL: 5 minutes (acceptable version propagation delay for field use).

---

## Project Scoping and Phased Development

### MVP Strategy and Philosophy

**MVP Approach:** Problem-solving MVP. The product must demonstrate the complete voice → bilingual SOP → QR → crew scan loop in a single session. If a customer can't complete this loop in under 7 minutes on their first use, the MVP fails.

**Resource Requirements:** 1 developer (full-stack), 1 designer (mobile-first UI), 2-week sprint. Optionally: 1 bilingual reviewer for translation quality validation.

### MVP Feature Set (Phase 1)

**Core User Journeys Supported:** Voice → bilingual SOP → QR → crew scan. SOP updates with same-URL versioning.

**Must-Have Capabilities:**
- Voice recording (browser-native) → Whisper transcription
- Claude structuring and bilingual translation (English/Spanish side-by-side)
- Inline step editing in both languages
- One-tap QR code generation and PNG download
- Public SOP mobile page (zero auth, UUID URL, bilingual display)
- SOP versioning (same UUID URL, new content version)
- Owner SOP list with create, edit, archive, delete
- Email/password auth
- Stripe $99/month subscription with 14-day trial
- Trial limits: 3 SOPs; Pro: 25 SOPs; plan upgrade flow

**Explicitly Out of Scope for MVP:**
- Photo steps
- SOP analytics / scan tracking
- Multi-user / team accounts
- SOP templates library
- Additional languages (Portuguese, Haitian Creole)
- PDF compliance export
- Offline / PWA mode
- Native mobile app
- Integrations (Zapier, Slack, BambooHR)
- Custom branding / white-label pages

### Post-MVP Features (Phase 2)

- Photo steps per checklist item
- QR scan analytics (count, recency, per-SOP)
- PDF compliance report export
- SOP templates library (10 pre-built trade SOPs)
- Multi-user accounts with RBAC
- Portuguese and Haitian Creole language support
- Training completion sign-off via QR scan

### Expansion Features (Phase 3)

- Franchise / multi-location SOP propagation
- Video SOP with bilingual transcript overlay
- Workers' comp / insurance broker integration
- National association white-label partnerships (NALP, NRCA)
- Advanced compliance reporting (OSHA audit trail)

### Risk Mitigation Strategy

**Technical Risks:** Whisper transcription quality for accented/regional speech. Mitigation: pre-launch validation with 5 bilingual trade professionals; owner always reviews transcription before structuring.

**Market Risks:** Owners don't complete the voice → scan loop in first session. Mitigation: onboarding flow forces the creation of one complete SOP before allowing dashboard access; "first SOP" guided wizard.

**Resource Risks:** 2-week MVP too aggressive with one developer. Mitigation: cut photo steps, analytics, and templates entirely; prioritize public scan page speed as #1 quality gate.

---

## Functional Requirements

### SOP Creation

- FR1: Owner can initiate a new SOP by providing a name (equipment or procedure label)
- FR2: Owner can record a voice memo via browser-native audio capture on mobile or desktop
- FR3: Owner can re-record the voice memo if the first recording is unsatisfactory before submitting
- FR4: Owner can view the full Whisper-transcribed text before it is structured into steps
- FR5: Owner can submit the transcribed text to generate a structured numbered bilingual checklist
- FR6: Owner can generate bilingual steps from manually typed text as an alternative to voice input
- FR7: Owner can view bilingual English/Spanish steps displayed side-by-side in the draft editor

### Bilingual Editing and Approval

- FR8: Owner can edit any individual step in English without affecting other steps
- FR9: Owner can edit any individual step in Spanish without affecting the English step
- FR10: Owner can add new steps to the checklist after AI generation
- FR11: Owner can delete individual steps from the checklist
- FR12: Owner can reorder steps by drag-and-drop or up/down controls
- FR13: Owner can approve the bilingual checklist to publish it to the QR URL

### QR Code Generation and Delivery

- FR14: Owner can generate a unique QR code for each published SOP
- FR15: Owner can download the QR code as a PNG file at a minimum resolution of 300 DPI
- FR16: Owner can view the QR code's direct URL for the public SOP page
- FR17: The QR code URL remains persistent across all version updates to the SOP

### SOP Management

- FR18: Owner can view a list of all their SOPs with name, creation date, version number, and status
- FR19: Owner can search/filter their SOP list by name or equipment label
- FR20: Owner can archive a SOP (removes from active list; QR page shows "SOP archived" message)
- FR21: Owner can delete a SOP (QR page shows 404; irreversible)
- FR22: Owner can update an existing SOP by re-recording voice or editing steps directly
- FR23: Owner can view version history showing when each version was published (Phase 2 — MVP records version number only)
- FR24: Owner can duplicate an existing SOP as a starting point for a new one

### Public Crew Access

- FR25: Any user can access a public SOP page via QR scan or direct URL with no authentication
- FR26: Crew member can view the full bilingual checklist with English and Spanish displayed side-by-side
- FR27: Crew member can read all steps on a mobile-optimized page that works on any smartphone browser without installation
- FR28: The public SOP page displays the most recent published version of the SOP automatically
- FR29: The public SOP page displays an archived or deleted SOP status appropriately ("No longer available")
- FR30: Crew member can toggle between language-only views (Spanish-only, English-only, or side-by-side) for readability preference

### Account and Authentication

- FR31: Owner can create an account with email and password
- FR32: Owner can log in with email and password
- FR33: Owner can reset their password via email link
- FR34: Owner can update their email address and password from account settings
- FR35: Owner can delete their account (triggers 30-day SOP grace period before QR pages go dark)

### Subscription and Billing

- FR36: Owner can start a 14-day free trial with up to 3 SOPs without a credit card
- FR37: Owner can subscribe to the Pro plan ($99/month) via Stripe Checkout
- FR38: Owner can subscribe to the Business plan ($199/month) via Stripe Checkout
- FR39: Owner can view their current plan, billing cycle, and next invoice date
- FR40: Owner can upgrade or downgrade their plan from account settings
- FR41: Owner can cancel their subscription from account settings (access continues through end of billing period)
- FR42: Owner is blocked from creating new SOPs when at or above their plan's SOP limit, with a clear upgrade prompt

### SOP Scan Analytics (Phase 2)

- FR43: Owner can view total scan count per SOP
- FR44: Owner can view scan count per SOP in the past 7 / 30 / 90 days
- FR45: Owner can export a compliance report PDF listing all SOPs with scan history

---

## Non-Functional Requirements

### Performance

- The public SOP page (crew QR scan) shall load completely with full bilingual content in under 2 seconds for 95th percentile users on a 4G mobile connection (10 Mbps throughput), as measured by Lighthouse mobile performance testing
- The voice-to-bilingual-draft pipeline shall complete within 20 seconds for a voice memo of up to 3 minutes in length, from recording stop to bilingual step display, as measured by application response time logging
- The owner dashboard SOP list shall render in under 1 second for accounts with up to 100 SOPs, as measured by browser performance profiling
- QR code PNG generation shall complete within 2 seconds of the owner tapping "Generate QR," as measured by API response time

### Security

- All data transmission between browser and server shall use TLS 1.2 or higher
- Owner passwords shall be stored using bcrypt with minimum cost factor of 12
- Payment card data shall never be stored in CrewSOP systems — all payment processing via Stripe Checkout (Stripe handles PCI-DSS compliance)
- SOP content (steps in both languages) shall be stored encrypted at rest in PostgreSQL
- Public SOP pages use UUID-based URLs with 128-bit entropy — functionally unguessable, providing access control through obscurity for crew use
- Voice memo audio files are deleted from server storage within 1 hour of Whisper transcription completion — audio data is not retained

### Reliability

- The public SOP page (crew QR scan endpoint) shall maintain 99.5% uptime, as measured by monthly uptime monitoring. Downtime during crew work hours (6 AM – 6 PM local time) is weighted 3× in SLA calculation
- The owner SOP creation and management dashboard shall maintain 99% uptime
- Database backups shall be performed daily with 7-day retention; recovery time objective is under 4 hours

### Scalability

- The system shall support up to 1,000 concurrent public SOP page requests without degradation in page load time, as measured by load testing prior to AppSumo launch
- The Whisper + Claude pipeline shall support up to 50 concurrent voice processing jobs without queue wait times exceeding 30 seconds, using async job queue architecture

### Accessibility

- The public SOP page (crew-facing) shall achieve WCAG 2.1 Level A compliance for screen reader compatibility and color contrast, as measured by axe-core automated testing
- Font size on the public SOP page shall be a minimum of 16px for body text to support readability on small mobile screens without zooming
- The public SOP page shall function correctly with JavaScript disabled (server-side rendered content)

---

*PRD created: 2026-11-15*
*Source documents: Shortlisted idea (84/105), Product Brief (2026-11-14), Market Research*
*Next step: Architecture design via run-automvp.sh --step architecture*
