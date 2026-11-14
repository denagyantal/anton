---
stepsCompleted: [1, 2, 3, 4, 5]
inputDocuments:
  - ideas/shortlisted/bilingual-sop-trade-crews.md
  - _bmad-output/planning-artifacts/market-research-bilingual-sop-trade-crews.md
workflowType: product-brief
lastStep: 5
project_name: bilingual-sop-trade-crews
user_name: Root
date: 2026-11-14
---

# Product Brief: Bilingual SOP System for Trade Crews

---

## Executive Summary

**CrewSOP** (working title) is a voice-first SOP builder purpose-built for 5–30-person English/Spanish trade crews in landscaping, roofing, construction, and HVAC. The owner speaks into their phone, AI generates a bilingual side-by-side English/Spanish numbered checklist, and a QR code is printed and taped to the equipment. When a Spanish-speaking crew member scans the sticker, they see the full procedure in both languages — no app install, no login, no training required.

The product fills an unoccupied gap between enterprise SOP tools (Trainual at $249/month, built for office teams) and the actual reality of small trade businesses: mixed-language crews, mobile-first workflows, and owners who don't have time to type documentation. The core differentiator is threefold: voice-first creation, bilingual-as-default output, and QR delivery that requires nothing from the crew.

**Target market:** 419,000+ US trade businesses with bilingual crews across landscaping, roofing, HVAC, and general construction.

**Revenue model:** $99/month SaaS (Pro, 25 SOPs) with AppSumo LTD at $299 as the primary launch vehicle.

**Build timeline:** 2-week MVP with the WhisperAI + Claude + QR code stack.

**Verdict: BUILD.** The niche is unoccupied. The buyer is accessible through Facebook groups and Reddit. The product is demonstrable in 60 seconds. The timing is right before FieldSub or SOPX pivots into this exact position.

---

## Core Vision

### Problem Statement

Trade business owners (landscaping, roofing, HVAC, construction) with 5–30-person crews routinely employ mixed English/Spanish-speaking workforces. When a new crew member needs to operate equipment or follow a safety procedure, the documentation either does not exist, exists only in English, or requires the owner — or the one bilingual employee on the crew — to explain verbally every time.

The dominant workaround today is a fragile, invisible system: one bilingual supervisor who becomes an informal interpreter in addition to doing their core job. When that person is absent, training degrades to hand signals and guesswork. This creates three compounding business problems:

1. **Safety risk and OSHA liability** — OSHA mandates training in workers' native language. Violations cost $16,550–$165,514 per incident. 408 Hispanic construction workers died in 2022 — a 107% increase since 2011. Spanish-speaking workers are disproportionately represented in construction fatalities.

2. **Operational bottleneck** — Owners repeat the same verbal training every time they hire. Training is inconsistent, unversioned, and undocumented. Supervisors waste 30–60 minutes per new hire on verbal walkthroughs that should take 5.

3. **No addressable solution at the right price** — Trainual ($249/month + $1,000 implementation) is built for office teams creating employee handbooks, not field crews documenting how to operate specific equipment. SOPX ($199/month) is manufacturing-focused and treats translation as an add-on. No product at any price offers voice-to-bilingual-SOP with QR delivery for small trade crews.

### Problem Impact

- **Operational:** Every verbal training repetition is 30–60 minutes of owner time. At 20 hires per year, that is 10–20 hours wasted on procedural repetition before the new hire is productive.
- **Safety/compliance:** One OSHA Willful violation for language-inadequate training wipes out 1–2 years of software spend at any price point. Insurance premiums rise with incident frequency.
- **Growth ceiling:** Scaling past 15 crew members becomes structurally dependent on having a bilingual supervisor present — a fragile dependency that caps the business.
- **Revenue model:**  Colorado data shows a 20% drop in Hispanic worker compensation claims after Spanish-language safety training implementation (378 fewer claims in 2 years). The ROI calculation is easy.

### Why Existing Solutions Fall Short

| Tool | Price | Core Failure for Trade Crews |
|------|-------|------------------------------|
| **Trainual** | $249/mo + $1K impl. | Office-team orientation; no bilingual; no QR delivery; wrong ICP |
| **SOPX** | $199/mo | Manufacturing/industrial; no voice input; translation is an add-on, not identity |
| **Mitti (SafetyCulture)** | $24/seat/mo | App install required; not bilingual-native; checklist-first, not SOP-first |
| **FieldSub** | $79.99–$299.99/mo | Business management platform; no SOP or QR delivery; just launched |
| **Connecteam** | $29–$99/mo | Training module exists but no bilingual-native SOP creation |
| **DIY ChatGPT** | Free | 15–30 minutes manual work per SOP; no QR, no versioning, no mobile delivery |

The gap is defined by three missing dimensions simultaneously: **voice-first creation + bilingual-as-default output + QR-on-equipment crew delivery**. No competitor addresses all three.

### Proposed Solution

CrewSOP enables the following 90-second workflow:

1. Owner opens the web app on their phone
2. Taps **"New SOP"** → names the equipment or procedure ("How to operate the riding mower")
3. Records a voice memo speaking the procedure steps naturally
4. AI (WhisperAI + Claude) transcribes and structures into a numbered checklist
5. AI automatically translates each step into Spanish — side-by-side bilingual output
6. Owner reviews, edits any steps, and approves
7. App generates a unique URL + printable QR code for that specific SOP
8. Owner prints the QR code and tapes it to the equipment
9. Spanish-speaking crew member scans the QR with any Android phone → sees the full bilingual checklist → no app install, no login, no training required

**Key product properties:**
- Voice-first input — owner speaks, AI does the rest; zero typing required
- Side-by-side English/Spanish as the default output format, not an add-on
- QR code per SOP, tied to specific equipment, not a general document folder
- Mobile-optimized web display — works on any Android/iPhone, no install
- SOP versioning — update voice memo → new version published to same QR
- Photo steps (optional) — add a photo at each step for visual reference

### Key Differentiators

1. **Voice-first creation** — No competitor allows a 50-year-old contractor to record a voice memo and receive a structured bilingual SOP. This removes the primary friction: owners don't type, they speak.

2. **Bilingual is the product identity, not a toggle** — The entire UX, marketing, and product promise is English + Spanish side-by-side. This is not Trainual's "add a Spanish version" — it is what the product does by default.

3. **Equipment-linked QR with zero crew friction** — The crew UX is "scan the sticker on the mower, read the checklist in Spanish." There is no app install, no company email, no onboarding. This is the proven pattern for field-worker adoption in blue-collar industries.

4. **OSHA compliance angle** — The product can be positioned as the cheapest possible way to comply with OSHA's native-language training requirement and avoid a five-figure fine. This creates urgency that bypasses the usual "maybe later" deferral.

5. **Trade-specific vertical identity** — Dedicated landing pages, case studies, and community presence for landscaping, roofing, and construction. This builds a defensible community moat in Facebook groups and Reddit before any VC-backed competitor can replicate it.

---

## Target Users

### Primary Users

**The Owner-Operator (Primary Buyer)**

The core buyer is the trade business owner — self-made, often hands-on, 5–30 employees. They built the business from physical labor and view themselves as craftspeople first. They are skeptical of software complexity ("I don't have time to learn a new system") but highly motivated by keeping their crew safe and stopping the repetitive verbal training cycle.

They are predominantly bilingual themselves or work closely with Spanish-speaking crew daily. They are active in Facebook trade groups and trust peer validation over marketing. They decide alone — the crew doesn't vote on tool adoption.

**Decision process:** Sees demo or peer testimonial in Facebook group → tests with first SOP in under 5 minutes → prints QR code and tapes to equipment → has Spanish-speaking crew member scan to confirm it works → converts within 24 hours.

---

**Persona 1 — Miguel, Landscaping Owner (Highest Value Segment)**

- **Profile:** 42, owns a 15-person landscaping company in Tampa FL. 11 crew members are Spanish-speaking, 4 of them Spanish-only. Has one bilingual supervisor who handles all translation.
- **Current pain:** When his bilingual supervisor takes vacation, new hires receive zero safety instruction on equipment. Last summer a new crew member damaged a $4,000 Ferris mower because he didn't know the blade height procedure.
- **Trigger:** Received an OSHA warning letter after a walkabout inspection; citation cited language-inadequate training.
- **Goal:** A system where any crew member can scan something on the equipment and understand how to operate it safely, without Miguel or his supervisor being present.
- **Budget:** $99/month is easy. Would buy $299 LTD without hesitation if the demo works in front of him.
- **Conversion:** Creates his first SOP (zero-turn mower operation) in 4 minutes. Prints QR. His Spanish-only crew member scans it, reads it, and says "sí, esto está bien" — Miguel converts on the spot.

---

**Persona 2 — Dale, Roofing Contractor (Compliance-First Segment)**

- **Profile:** 51, runs a 10-person roofing crew in Houston TX. 7 crew are Spanish-speaking. Had a worker's comp claim last year after a fall — premium jumped 30%.
- **Current pain:** Safety protocols exist verbally but not documented. Insurance broker told him documented safety training in workers' native language could lower his premium.
- **Trigger:** Broker mentioned "bilingual safety documentation" as a premium reduction factor.
- **Goal:** Documented, bilingual, versioned safety procedures he can show an auditor or insurance underwriter.
- **Budget:** Willing to pay $199/month if it demonstrably reduces insurance cost. Would prefer $99/month.
- **Conversion:** Discovers via Google search "Spanish safety training roofing documentation." Lands on OSHA-angle landing page. Books demo. Converts on the compliance value prop.

---

**Persona 3 — Sarah, Lawn Care Growth Operator (Scaling Segment)**

- **Profile:** 34, started lawn care solo 3 years ago, now has 7 employees (5 Spanish-speaking). Hiring 3 more this season.
- **Current pain:** Repeating verbal training for every new hire is consuming 2 hours per person. Training quality is inconsistent — some crew members know the right way, some don't.
- **Trigger:** Posted in "Lawn Care Business Owners" Facebook group asking "How do you train Spanish-speaking employees on equipment?" Saw a reply mentioning a tool with a QR sticker.
- **Goal:** A system she can set up once and have new hires self-onboard with, so she can scale without her time scaling linearly with headcount.
- **Budget:** $99/month is a stretch; $299 LTD is her ideal entry point.
- **Conversion:** AppSumo deal. Creates 5 SOPs in her first week. Writes a Facebook group review. Triggers organic referral loop.

---

### Secondary Users

**Spanish-Speaking Field Crew Workers (Users, Not Buyers)**

The crew does not select, pay for, or configure the product. They interact with it exclusively through QR code scans. The experience must be frictionless: any Android or iPhone, no install, loads in under 3 seconds, displays clearly in both English and Spanish. The crew interaction is read-only.

Their single interaction requirement: scan QR → read bilingual checklist → understand the procedure. If this fails for any reason (slow page load, broken QR, Spanish translation error), the product fails its core value proposition.

Secondary buyer/influencer consideration: Spanish-speaking supervisors who may advocate for the tool to the owner after experiencing it as crew members. Word-of-mouth from crew to owner ("jefe, there's this thing that shows procedures in Spanish") is a potential bottom-up discovery channel.

---

### User Journey

**Discovery:**

- Owner searches "Spanish safety training construction software" after OSHA notice
- Owner sees Facebook group post: "How do you train Spanish-speaking crew?" with a reply linking to the tool
- Owner sees AppSumo listing for "Bilingual SOP for Trade Crews — QR sticker on equipment"
- Owner watches YouTube video: "How to train bilingual construction crew" (content marketing)

**Onboarding:**

- Lands on landing page with 60-second demo video showing: voice memo → bilingual checklist → QR code → scan → mobile page
- Creates free account; first SOP in under 5 minutes (Whisper transcribes voice, Claude structures and translates, QR generated)
- Prints QR code as a standard 2"×2" sticker label
- Tapes sticker to equipment

**Core Usage:**

- Creates 5–10 SOPs in first 30 days covering highest-risk equipment (zero-turn mowers, trimmers, chainsaws, roofing equipment)
- Updates existing SOPs when procedures change — same QR, new version
- Shows Spanish-speaking crew members how to scan equipment stickers as part of onboarding walk

**Success Moment:**

- New Spanish-speaking hire self-onboards on equipment independently using QR sticker
- Owner no longer spends time repeating verbal training for routine equipment
- OSHA auditor or insurance broker accepts bilingual SOP documentation as compliant

**Long-Term:**

- Creates 20–50 SOPs covering full crew procedures
- Shares in Facebook group → 2–3 organic referrals per month
- Considers upgrade to Business tier ($199/month) for compliance export and analytics

---

## Success Metrics

**North Star Metric:** Number of active SOP QR codes scanned per month per customer. This measures whether the product is actually being used by field crews — not just created by owners.

---

### User Success Metrics

| Metric | Target | Measurement |
|--------|--------|-------------|
| Time to first SOP (voice → QR generated) | Under 7 minutes | App event tracking |
| Time to first QR scan by crew | Within 48h of SOP creation | QR scan analytics |
| SOPs created per customer in 30 days | 5+ | App event tracking |
| Owner training time reduction | 50%+ self-reported | Onboarding survey at 30 days |
| Spanish translation accuracy | 95%+ owner approval rate | Edit/approval event tracking |
| Crew QR scan success rate | 95%+ (page loads, not abandoned) | Server logs |

**Activation moment:** Customer creates their first SOP, generates QR code, and has a crew member scan it successfully. This is the "aha!" moment that drives retention.

**Retention signal:** Customer creates 5+ SOPs in first 30 days and has at least 1 QR scan per week in month 2. Customers who reach this threshold have zero observed churn in similar field-service SaaS products.

---

### Business Objectives

**Month 1–2 (Validation):**
- 20 beta customers (free) recruited from r/landscaping and Facebook groups
- 3 video testimonials documenting full workflow (voice → QR → crew scan)
- Validate Spanish translation quality with bilingual safety expert (reduce liability risk)
- Validate that the OSHA compliance angle is a primary buying trigger

**Month 2–4 (Early Revenue):**
- 100 paying subscribers at $99/month → $9,900 MRR
- AppSumo application submitted once 50+ reviews exist
- Google Ads on "Spanish safety training construction" and "bilingual SOP landscaping" break even at < $50 CAC

**Month 4–6 (AppSumo Launch):**
- AppSumo LTD launch at $299 (target: 300–700 units)
  - Conservative: 300 × $299 = $89,700
  - Moderate: 700 × $299 = $209,300
- LTD revenue funds one full-time dev + customer success for 12 months

**12-Month Goal:**
- 500 active MRR customers at $99/month = $49,500 MRR
- Net MRR churn < 2%/month (field service tools have low churn once embedded in crew workflows)
- CAC < $150 (community-led growth via Facebook groups is near-zero CAC)

---

### Key Performance Indicators

**Acquisition:**
- Monthly new signups from Facebook/Reddit community posts (target: 20–40/month by Month 3)
- Google Ads CPC on "bilingual SOP construction" keywords (benchmark: < $3/click)
- AppSumo LTD conversion rate on listing page (benchmark: 2–4% for field service tools)

**Activation:**
- % of signups who create at least 1 SOP within 48 hours (target: >60%)
- % of signups who reach activation moment (1 SOP created + 1 crew scan) within 7 days (target: >40%)
- Free-to-paid conversion rate (target: >25% within 14-day trial)

**Retention:**
- Month 2 retention (target: >85% — customers in crew workflows don't churn without reason)
- Month 6 retention (target: >70%)
- Net Revenue Retention including upgrades (target: >100% by Month 6 via tier upgrades)

**Revenue:**
- MRR growth (target: 20–30% month-over-month in first 6 months)
- Expansion revenue from Starter→Pro and Pro→Business upgrades (target: >15% of MRR by Month 6)
- LTD-to-MRR conversion rate for AppSumo buyers who eventually upgrade (track at 6 months)

**Product Health:**
- SOPs created per active customer per month (target: >3)
- QR scans per active customer per week (target: >5 — indicates active crew usage)
- Owner-initiated SOP updates per month (indicates product is embedded in operational workflow)

---

## MVP Scope

### Core Features

The 2-week MVP covers the minimum loop required to validate the core value proposition: voice memo → bilingual SOP → QR code → crew can read it.

**Feature 1: Voice-to-SOP Creation**
- Web app (mobile-first) with a large "Record Voice Memo" button
- OpenAI Whisper API transcribes the recording
- Claude claude-sonnet-4-6 structures the transcript into a numbered checklist
- Claude translates each step into Spanish
- Owner sees side-by-side English/Spanish draft for review
- Owner can edit any step in either language inline

**Feature 2: QR Code Generation and Public SOP Page**
- Each SOP gets a unique UUID-based URL (`app.crewsop.com/s/[uuid]`)
- QR code generated for that URL (Python `qrcode` library or `qrcode.js`)
- QR code is downloadable as PNG for printing
- Public SOP page: mobile-optimized, loads in < 2 seconds, zero authentication required
- Side-by-side bilingual display, numbered steps, responsive layout for Android/iPhone

**Feature 3: SOP Management (Owner Dashboard)**
- List of created SOPs with name, equipment/procedure label, creation date
- Edit SOP (re-transcribe or manual edit)
- SOP versioning: update SOP → same QR URL shows new version; old URL remains valid
- Delete SOP

**Feature 4: Account and Billing**
- Email/password authentication for owners (single-user MVP)
- Stripe integration for $99/month Pro plan
- 14-day free trial (3 SOPs max on trial, unlimited on paid)
- Usage-based guardrails: Starter = 10 SOPs, Pro = 25 SOPs, Business = 100 SOPs

**Tech Stack:**
- Voice transcription: OpenAI Whisper API ($0.006/minute)
- Checklist structuring + translation: Claude claude-sonnet-4-6
- QR generation: `qrcode.js` or server-side Python `qrcode` library
- Frontend: React (mobile-first) or Next.js for fast mobile rendering
- Backend: Node.js/Express or FastAPI (Python)
- Database: PostgreSQL (SOP records with UUID, owner_id, content_json, version)
- Hosting: Railway or Render (simple PaaS deployment)
- Payments: Stripe Checkout

---

### Out of Scope for MVP

The following are explicitly deferred to post-MVP to keep the initial build to 2 weeks:

- **Additional languages** (Portuguese, Haitian Creole) — Spanish only for MVP
- **Photo steps** — text-only checklist in MVP; photos are v2
- **SOP analytics** — scan counts, crew usage tracking, compliance reports deferred to v2
- **Multi-user / team accounts** — single owner per account in MVP; team roles deferred
- **SOP templates** — predefined library of common trade SOPs deferred to v2
- **Offline/PWA mode** — crew QR pages require internet; offline caching is v2
- **Custom branding** — white-label QR pages deferred to Business tier v2
- **Integrations** (Zapier, Slack, BambooHR) — no integrations in MVP
- **AI safety review** — manual owner review is the safety check; automated compliance flagging is v2
- **Mobile native app** — web app only for both owner and crew in MVP
- **Bulk SOP import** — from PDF/Word documents; v2 feature

---

### MVP Success Criteria

The MVP is validated and ready to scale when:

1. **20 beta customers create their first SOP** without guidance beyond the onboarding video
2. **At least 15 of those 20 have a crew member scan the QR** and confirm the Spanish translation is accurate and useful
3. **10+ beta customers convert to paid** within 30 days at $99/month
4. **Spanish translation accuracy** receives < 5% edit rate from bilingual owner review (indicates AI translation is field-ready)
5. **Page load time** for public QR scan page is < 2 seconds on a mid-range Android phone on 4G

If any of these criteria fail, iteration priorities are:
- Translation quality failure → switch from Claude to DeepL Pro for translation layer
- Activation failure → simplify voice recording UI; add example SOP walkthrough in app
- Conversion failure → reconsider pricing (try $49/month entry tier) or add more template SOPs

---

### Future Vision

**6–12 Months Post-MVP:**

- **Photo steps** — owner can optionally tap to add a photo at any checklist step (critical for equipment with specific hand positions or configuration steps)
- **SOP analytics dashboard** — scan counts per SOP, scan frequency, time since last scan; compliance reporting export (PDF) for OSHA/insurance auditor
- **SOP templates library** — pre-built bilingual SOPs for common landscaping, roofing, and HVAC procedures (zero-turn mower, chainsaw, nail gun, roof anchor setup)
- **Multi-user accounts** — multiple crew supervisors can create/edit SOPs; role-based access (admin/editor/viewer)
- **Additional languages** — Portuguese (significant landscaping workforce in Northeast US), Haitian Creole (Florida), Mandarin (commercial construction on West Coast)

**12–24 Months (Platform Expansion):**

- **Workers' comp / insurance integration** — partners with field-service insurance brokers to provide documentation that reduces premiums; CrewSOP becomes a compliance SaaS with direct insurance ROI
- **Franchise and multi-location support** — franchise operators (lawn care, pest control) need SOPs to propagate consistently across locations; CrewSOP becomes the operational knowledge backbone
- **Training completion tracking** — crew members can "sign off" on reading a SOP via QR scan (name + timestamp logged); creates compliance audit trail
- **Video SOPs** — owner records a short video procedure; AI generates bilingual transcript overlay; video + bilingual captions served from QR
- **National Associations partnership** — NALP (National Association of Landscape Professionals), NRCA (National Roofing Contractors Association) white-label or endorsed plans

**Long-Term Vision (3+ Years):**

CrewSOP becomes the operating system for bilingual trade crews — the tool that every landscaping, roofing, and construction company with a Spanish-speaking workforce uses to document, train, and comply. It is the first product that makes bilingual field documentation a default standard rather than an exception, reducing construction fatalities, insurance costs, and training overhead simultaneously.

The defensible moat is community: being the tool discussed in every trade Facebook group, every NALP conference, and every roofing contractor forum. The first product to earn that position in this niche will be very difficult to displace at any price.

---

*Product Brief completed: 2026-11-14*
*Input sources: Shortlisted idea analysis, market research (25+ verified web sources)*
*Next step: Run `create-prd` workflow to generate full Product Requirements Document*
