---
stepsCompleted: [1, 2, 3, 4, 5]
inputDocuments:
  - ideas/shortlisted/field-manual-copilot.md
  - _bmad-output/planning-artifacts/market-research-field-manual-copilot.md
workflowType: product-brief
lastStep: 5
project_name: field-manual-copilot
user_name: Root
date: 2026-11-15
---

# Product Brief: FieldCopilot

---

## Executive Summary

FieldCopilot is a mobile-first RAG (Retrieval-Augmented Generation) knowledge tool for HVAC, boiler/hydronics, and plumbing technicians. A tech photographs an equipment nameplate on a live service call, and within seconds gets the relevant manual section, error code explanation, parts list, and professional invoice language — without hunting through PDFs, calling suppliers, or guessing.

The market has a clear and uncontested gap: Bluon dominates mobile HVAC reference but explicitly doesn't cover boilers or hydronics (confirmed user complaints). XOi/Specifx is enterprise-only post-KKR investment ($230M). The 470,000 technicians in sub-20-tech shops — especially the mixed-trade shops doing boilers, radiant heat, and HVAC together — have no purpose-built tool.

FieldCopilot enters via the boiler/hydronics wedge ("the Bluon for boilers"), then expands to full HVAC/plumbing coverage. At $19/mo per solo tech or $49/mo for a 5-tech shop, one avoided callback pays for months of subscription. The $79K MRR target (1,000 customers at $79/mo blended) requires less than 1% penetration of the addressable technician pool.

**Core insight**: The enterprise tools validated this market at $230M exit value. Bluon validated mobile-first tool adoption at 500,000+ HVAC models. Neither serves the boiler tech in a basement with no cell signal and an error code they've never seen. FieldCopilot does.

---

## Core Vision

### Problem Statement

HVAC and plumbing technicians — especially those servicing boilers and hydronic heating systems — waste 45–90 minutes per job hunting down equipment manuals, cross-referencing part numbers, and writing up invoice descriptions. When a technician encounters an unfamiliar error code on a 20-year-old Weil-McLain boiler with a customer watching, they have no fast path to the answer. Manufacturer websites are slow. PDFs are buried. Calling suppliers wastes time. Guessing creates liability.

The specific underserved wedge is **boiler and hydronics service** in sub-20-tech mixed-trade shops (boiler + HVAC + plumbing). Bluon (refrigerant-focused HVAC) doesn't cover hydronic systems. XOi/Specifx (enterprise field intelligence, $230M KKR-backed) has moved fully upmarket and is inaccessible to small shops. No affordable, mobile-first, offline-capable tool exists for this segment.

### Problem Impact

The practical cost is significant and measurable:

- Technicians waste up to **40% of their workday** on non-value-adding activities, including manual lookup and documentation (McKinsey field-force study)
- Field technicians spend an average of **52% of their day on paperwork and data capture** (Service Council)
- **37% of technicians** say admin tasks keep them from their actual jobs (ServiceTrade 2026 Technician Insights Report, n=823)
- Manual lookup on a live service call can consume 20–45 minutes per job — time billed at $150+/hr

Beyond time: wrong parts identification creates callbacks, warranty claims, and reputational damage. Poorly written invoices make shops appear less professional and limit price increases. Junior techs encountering unfamiliar equipment have no self-serve safety net.

The emotional cost is real too: techs feel embarrassed when they can't answer a customer's question on-site. The best tools give them confidence; the absence of tools erodes it.

### Why Existing Solutions Fall Short

| Tool | Why It Falls Short |
|------|-------------------|
| **Bluon** | Free, 500K+ HVAC models, proven mobile adoption — but explicitly excludes boilers/hydronics. User reviews confirm this as a known limitation. Bluon was trained on HVAC/refrigerant service calls; hydronics is a different system class. |
| **XOi / Specifx** | Best-in-class field knowledge platform, but requires enterprise sales contracts ($99+/mo starting, significant onboarding). Post-$230M KKR investment, fully upmarket. Solo tech or 3-truck shop cannot access it. |
| **ServiceTitan** | $245–$500/tech/mo + $5K+ onboarding. Structurally unable to serve sub-20-tech shops. |
| **BoilerData.com** | Static manual index — web-only, no AI, no OCR, no RAG, no invoice generation. Useful but primitive. |
| **HyTools (IMI Hydronic)** | Hydronic calculations only. Doesn't retrieve manuals, answer error codes, suggest parts, or write invoices. Zero overlap with the core pain. |
| **Generic AI (ChatGPT/Claude)** | Techs already use these ad-hoc. But uploading a PDF manually, finding the right model number, and reformatting for invoice language = too many steps for a live job. FieldCopilot's value is the pre-indexed, model-number-driven, offline-capable workflow. |

The gap is specific: **boiler/hydronics RAG + affordable pricing + invoice language generation** — this exact combination is unoccupied.

### Proposed Solution

FieldCopilot is a mobile app (iOS/Android) with a simple three-step workflow:

1. **Photograph** — tech snaps the equipment nameplate; OCR extracts model/serial number automatically
2. **Ask** — "What does error code E5 mean?" / "What parts do I need for a zone valve replacement?" / "Write an invoice description for this repair"
3. **Get the answer** — RAG retrieves the relevant manual section, cites the page, generates the parts list or invoice paragraph

The technical stack is proven:
- **Mistral OCR** for nameplate text extraction (reliable document understanding from mobile photos)
- **RAG pipeline** over indexed manufacturer PDFs (Burnham, Weil-McLain, Peerless, Slant/Fin, Triangle Tube for the boiler wedge; expanded to full HVAC/plumbing catalog post-MVP)
- **LLM** (Claude Sonnet or equivalent) for Q&A, parts suggestion, and invoice language generation
- **Offline mode** — pre-cached embeddings for core boiler brands so the app works in basements with no cell signal

The entry wedge is intentional: pre-index the top 5 US boiler brands, launch to the boiler/hydronics service community (PHCC, r/HydronicsHeat, boiler-focused Facebook groups), and validate before expanding scope.

### Key Differentiators

1. **Boiler/hydronics-first** — the only mobile tool covering boiler, radiant, and hydronic heating service. Pre-indexed manufacturer manuals (Burnham, Weil-McLain, Peerless, Slant/Fin, Triangle Tube). "The Bluon for boilers" = instant positioning against a known reference point.

2. **Invoice language generation** — no competitor offers this. Tech describes the repair; app writes a professional service description. Directly reduces one of the top 5 technician frustrations (admin time). Demonstrable value on Day 1.

3. **Offline-capable** — pre-cached manual embeddings for core brands work without cell signal. HVAC and boiler service happens in basements, mechanical rooms, and rural areas. Offline is a hard requirement that no current mobile tool satisfies.

4. **Affordable solo-tech tier** — $19/mo for a focused knowledge tool. XOi cannot match this price. Bluon doesn't monetize it. The $19/mo price point sits well below any FSM tool and delivers a focused, differentiated benefit.

5. **Conservative RAG with citations** — always cites manual page; never guesses on parts; includes appropriate disclaimers. HVAC/boiler techs need to trust the source, not trust "AI says so." This posture differentiates from generic AI tools and reduces liability.

---

## Target Users

### Primary Users

**Persona 1: Marcus, the Solo Boiler/HVAC Tech (Owner-Operator)**

Marcus runs a one-person operation in the Northeast servicing older New England homes — gas boilers, radiant heating, oil-to-gas conversions, mixed with some HVAC work. He does 5–7 jobs per day and uses his phone for everything. He's been in the trades for 12 years and is comfortable with equipment, but regularly encounters models he hasn't seen before — especially older European-import boilers in historic homes.

His pain: When he hits an unfamiliar error code or needs a wiring diagram, he either calls the manufacturer tech line (20–30 min on hold), searches the web on a spotty basement connection, or wings it and hopes. He's paid for Bluon in the past but stopped because "it doesn't have anything for my boiler work."

His success: He pulls out his phone, photographs the nameplate, asks FieldCopilot what E5 means on this Peerless boiler, gets the answer in 15 seconds with the manual page cited. He finishes the job faster, looks knowledgeable in front of the customer, and invoices with a clear service description he can send via email.

**Willingness to pay**: $19/mo without hesitation — "one callback avoided pays for a year."

---

**Persona 2: Sofia, the Small Shop Tech at a 4-Truck Mixed-Trade Shop**

Sofia works at a family-owned plumbing and heating company that handles everything — drain service, boiler installs, HVAC tune-ups, radiant system troubleshooting. The shop owner pays for Jobber for dispatch and scheduling. Sofia is 3 years into the trade, capable but still building her knowledge base for equipment outside her training.

Her pain: When the shop owner sends her on a boiler job she hasn't handled before, she calls him from the job site. He's busy. She ends up spending 30 minutes looking up a manual she can't find, or guessing on the parts and coming back with the wrong one.

Her success: FieldCopilot is the knowledgeable senior tech in her pocket. She photographs the nameplate, asks her questions, gets the parts list with model numbers, and writes a service note she's proud to show the customer. She books the follow-up job with confidence.

**Willingness to pay**: Shop owner pays for a 5-tech seat at $49/mo. The ROI is one avoided callback + one faster job per week.

---

**Persona 3: Ben, the Trade School Student (Early Adopter)**

Ben is six months from completing his HVAC/R certificate at a community college in Pennsylvania. His instructor has mentioned Bluon several times. He's already downloaded every free reference app he can find and is building his personal tool kit before he hits the workforce.

His pain: He's studying for his certification but has limited exposure to boiler systems. The school's curriculum covers HVAC-R; hydronics and hydronic heating are covered briefly. He wants a resource that fills that gap.

His success: FieldCopilot offers a free first-10-lookups trial. Ben uses it for exam prep, then continues paying $19/mo when he starts his first job. He recommends it to his cohort.

**Channel value**: Trade school onboarding = zero CAC, high word-of-mouth multiplier.

### Secondary Users

**Shop Owners (Procurement Decision-Makers)**

For the $49/mo shop tier, the shop owner (not the tech) is the buyer. Their motivations differ: they care about callbacks reduction, invoice quality, and tech productivity — not the moment-of-use experience. The pitch to shop owners is ROI-first: "One avoided callback per month covers the annual cost." They're already paying $189/mo for Housecall Pro and $169/mo for Jobber; $49/mo for a knowledge tool is a low-friction add-on decision.

**PHCC Association Members**

Plumbing-Heating-Cooling Contractors Association (3,500–4,000 member businesses; ~65,000 represented technicians) is a trust-amplification channel. PHCC member shops that adopt FieldCopilot become peer references. PHCC newsletter sponsorship or member discount ($14/mo for verified members) converts the association into a distribution channel.

### User Journey

**Discovery → Onboarding → Value → Retention**

**Stage 1 — Problem Trigger**: Marcus is on a job, encounters an unfamiliar Weil-McLain boiler with an error code he hasn't seen. He Googles it. No good results. He posts in r/HydronicsHeat: "Anyone got the manual for this Weil-McLain GV90+ series?" Someone replies: "Have you tried FieldCopilot? It has boilers."

**Stage 2 — Awareness + Discovery**: Marcus sees a link in the reply. App Store download. Free trial: first 10 manual lookups at no cost, no credit card required.

**Stage 3 — First Use (Make-or-Break)**: Marcus photographs the nameplate. OCR pulls the model number. He types "what does E5 mean?" FieldCopilot returns: "Error code E5 on the GV90+ indicates ignition failure. See Installation and Service Manual page 34, Section 7.3: Troubleshooting. Common causes: dirty igniter, weak gas pressure. First step: check igniter ohms." He resolves the job on-site.

**Stage 4 — Habit Formation (Days 1–7)**: Marcus uses it on 3 more jobs that week. He uses the invoice generation feature to write a service description. He sends it to his customer. The customer compliments how professional his invoice looks.

**Stage 5 — Conversion**: Day 8, Marcus hits his free limit. The app offers to continue at $19/mo. He converts without hesitation — "this paid for itself on the first call."

**Stage 6 — Advocacy**: Marcus posts in r/HydronicsHeat: "Been using FieldCopilot for two weeks, it's the Bluon for boilers basically. Worth every dollar." Three more techs download it.

**Key Insight**: The app must work flawlessly on the first real-world use. OCR accuracy on nameplates and RAG coverage of the target boiler brands are the Day 1 success factors. Failure on first use = permanent churn.

---

## Success Metrics

**North Star Metric**: Weekly active techs (WAT) — techs who complete at least one manual lookup per week. This measures whether FieldCopilot is embedded in the daily service workflow, which is the leading indicator of retention and word-of-mouth growth.

### User Success Metrics

| Metric | Target | Measurement |
|--------|--------|-------------|
| **Time-to-first-answer** | < 30 seconds from photo to result | In-app session timing |
| **OCR accuracy rate** | > 90% correct model number extraction on first attempt | OCR pipeline logs |
| **Manual coverage hit rate** | > 85% of model lookups return a matching manual | Query-to-result logs |
| **Invoice feature adoption** | > 40% of paying users use invoice generation within first 30 days | Feature event tracking |
| **Offline mode usage** | > 20% of sessions occur with no active internet connection | Network state logging |
| **Day 7 retention** | > 60% of trial users who complete 3+ lookups convert to paid | Cohort analysis |
| **NPS / CSAT** | NPS > 50 within first 90 days | In-app survey (post-job prompt) |

The critical user validation moment: a tech in a basement, no cell signal, unfamiliar equipment, gets their answer from FieldCopilot in under 30 seconds. Every other metric flows from that moment.

### Business Objectives

**Month 1–2 (Validation)**
- 50+ paying users (beta community launch via PHCC + r/HydronicsHeat)
- Confirm: boiler manual coverage is sufficient to resolve 85%+ of real-world lookups
- Confirm: techs are using invoice generation, not just manual lookup (validates pricing power)

**Month 3–4 (Traction)**
- 200 paying users (100 solo techs + 20 shop accounts)
- $4,000–$5,000 MRR
- 3+ organic community posts or forum threads recommending the product
- First PHCC member shop conversion

**Month 5–6 (Product-Market Fit)**
- 500 paying users
- $10,000–$12,500 MRR
- Net dollar retention > 100% (expansion from solo → shop tier)
- Churn < 5%/month
- Identify top-5 feature gaps for Phase 2 roadmap

**Month 12–18 (Scale)**
- 1,000 paying users ($79K MRR at blended $79/mo)
- Full HVAC + plumbing manual catalog (not boiler-only)
- Jobber/Housecall Pro webhook integration live
- AppSumo launch as secondary channel

### Key Performance Indicators

**Acquisition KPIs**
- Monthly new trial signups (target: 50/mo by Month 3, 200/mo by Month 6)
- CAC by channel: community (target < $20), trade school (target < $5), paid ads (monitor)
- Conversion rate: trial → paid (target > 25% for users completing 3+ lookups)

**Engagement KPIs**
- Weekly Active Techs (WAT) as a % of paid base (target > 70%)
- Lookups per active user per week (target > 3)
- Invoice generation sessions per week per active user (target > 1)
- Offline sessions as % of total (target > 20% — validates offline value prop)

**Revenue KPIs**
- MRR growth (target > 15% month-over-month through Month 12)
- Average Revenue Per User (ARPU) — track solo vs. shop tier split
- Net Dollar Retention (target > 100% by Month 6)
- LTV:CAC ratio (target > 3:1 by Month 12)

**Product Quality KPIs**
- OCR success rate (target > 90%)
- Manual coverage rate (target > 85% hit rate on boiler brands, > 70% on HVAC expansion)
- Support ticket rate (target < 2% of weekly active users opening tickets)
- Error / incorrect part suggestion rate (reported by techs — target < 1% of queries)

---

## MVP Scope

### Core Features

The MVP must solve one workflow completely: **model number → manual → answer**. Everything else is Phase 2.

**Feature 1: Equipment Nameplate OCR**
- Tech photographs equipment nameplate with phone camera
- Mistral OCR extracts model number and manufacturer
- System confirms match against indexed database or prompts manual entry if unsure
- Must work in low-light basement conditions

**Feature 2: Manual Retrieval + RAG Q&A**
- Indexed manual database: Burnham, Weil-McLain, Peerless, Slant/Fin, Triangle Tube (top 5 US boiler brands = boiler wedge launch)
- Tech types natural language question: "What does error code E5 mean?" / "What's the pressure relief valve setting?"
- RAG pipeline returns answer with manual page citation and quote
- Conservative response: always shows source, adds "verify with manufacturer" caveat on parts recommendations
- Must handle at least 500 questions per boiler brand at launch

**Feature 3: Parts List Generator**
- Tech describes symptom: "zone valve not opening, zone 2 dead"
- System queries manual parts section + LLM reasoning
- Returns likely parts list with OEM part numbers from manual
- Includes caveat: "Confirm part numbers with your distributor before ordering"

**Feature 4: Invoice Language Generator**
- Tech describes the repair performed: "replaced expansion tank, recharged to 12 PSI, tested zone 2 operation"
- System generates professional service description paragraph suitable for invoice/work order
- Tone: factual, professional, appropriate for homeowner-facing documentation
- One-tap copy to clipboard; no account integration required in MVP

**Feature 5: Offline Mode (Core Boiler Brands)**
- Pre-cached embeddings for top 5 boiler brands downloaded at app install
- Q&A and parts lookup work without internet for cached content
- Shows "offline mode" indicator; notifies when manual not in offline cache
- Syncs usage logs when connection restored

**Feature 6: Free Trial + Paywall**
- First 10 lookups free, no credit card required
- After 10: prompt to subscribe ($19/mo solo or $49/mo 5-tech shop)
- LTD option: $79 solo / $149 shop at launch (community landing page)
- Stripe payment; no enterprise sales motion in MVP

**Platform**: iOS and Android (React Native or Flutter for single codebase). Web dashboard for shop owners (account management only; no field use on web).

### Out of Scope for MVP

The following are explicitly deferred to Phase 2 to keep the MVP focused and shippable in 4–6 weeks:

- **Full HVAC catalog** — Bluon covers 500K HVAC models; FieldCopilot starts with boiler/hydronics and adds HVAC post-launch
- **Plumbing manual coverage** — adds complexity without validating the core boiler wedge first
- **Photo-to-quote** — photograph job site and auto-generate estimate; requires more complex image analysis beyond nameplate OCR
- **Auto-invoice after job** — full job workflow integration; requires FSM API integration (Jobber, Housecall Pro)
- **ServiceTitan / Jobber / Housecall Pro integrations** — webhook integration is Phase 2; validates core tool first
- **Team management dashboard** — shop owner view of tech activity, usage analytics; deferred until 10+ shop accounts
- **Multi-language support** — Spanish-language interface for bilingual crews; Phase 2 (high value, non-trivial)
- **Manufacturer part ordering** — direct parts ordering from app; requires distributor relationships
- **Training / certification content** — supplementary learning modules; outside the core service-call workflow
- **Community / peer Q&A features** — Bluon has this; FieldCopilot doesn't need it in MVP

### MVP Success Criteria

The MVP is successful and Phase 2 investment is justified when:

1. **Coverage validation**: 85%+ of model lookups for the 5 boiler brands return a matching manual (database completeness confirmed)
2. **OCR validation**: 90%+ of nameplate photos yield correct model number extraction (accuracy confirmed in real basement conditions)
3. **User retention**: 60%+ of users who complete 3+ lookups in trial convert to paid (problem-solution fit confirmed)
4. **Engagement**: 70%+ of paying users are active weekly within 30 days of signup (workflow integration confirmed)
5. **Invoice adoption**: 40%+ of paying users use invoice generation at least once (secondary value proposition confirmed)
6. **Community signal**: Organic mentions in r/HVAC, r/HydronicsHeat, or PHCC forums without paid amplification (word-of-mouth channel confirmed)
7. **Financial**: $5,000 MRR within 60 days of public launch (revenue model confirmed)

If criteria 1–3 are not met, the issue is likely database coverage or OCR accuracy — fixable. If criterion 4 is not met, the core workflow hypothesis needs re-examination.

### Future Vision

**Phase 2 (Months 4–8): Full Trades Coverage**

Expand manual database beyond boilers:
- Full HVAC catalog (match Bluon's 500K+ model coverage as the boiler-aware alternative)
- Plumbing equipment manuals (water heaters, PRVs, tankless units)
- Refrigeration equipment for commercial kitchen service shops

Add Spanish-language interface (bilingual crew support — high value in the US trades market).

Launch Jobber and Housecall Pro webhook integration: when a job is completed in Jobber/Housecall Pro, FieldCopilot pushes the invoice description directly into the work order. This becomes the "Bluon for boilers" embedded in the FSM tool, mirroring Bluon's 2026 ServiceTitan/Housecall Pro integration strategy.

**Phase 3 (Months 8–18): Workflow Intelligence**

- **Photo-to-quote**: photograph job site → AI generates itemized estimate (materials + labor) based on equipment observed
- **Job history & asset tracking**: tech logs service history per equipment unit; builds per-asset knowledge base for the shop
- **Predictive maintenance recommendations**: based on equipment age, usage, and service history from the shop's job logs
- **Multi-tech team performance**: shop owner dashboard showing tech efficiency, invoice quality scores, parts accuracy over time

**Long-Term Platform Vision (Year 2+)**

FieldCopilot becomes the knowledge layer for the independent trades shop — not just manual lookup, but a living institutional memory:

- Every job generates structured data (equipment, symptoms, parts used, resolution)
- Shop builds an accumulated knowledge base from their own service history
- New techs onboard faster because the shop's experience is searchable
- Integration with distribution (Ferguson, Winsupply) for real-time parts pricing and availability
- Insurance and warranty documentation generation from job records

The exit thesis: at sufficient scale (~10,000 shops with structured job data), FieldCopilot becomes the data layer that makes trades shops programmable — a platform for distributors, manufacturers, and insurers to reach qualified small shops. This is the eventual acquirer story (similar to how XOi/Specifx became valuable to enterprise field service: the data, not just the tool).

---

## Risks and Mitigations

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| Bluon expands to boilers | Medium (12–18mo) | High | Move fast; build community moat in boiler forums before Bluon acts; invoice generation = differentiation Bluon can't match with its current free model |
| OCR fails on worn/low-light nameplates | Medium | High | Pre-launch: test 100+ real nameplate photos in basement/low-light conditions; build manual model number entry fallback; iterate on OCR prompt engineering |
| Manual copyright claims from manufacturers | Low | Medium | Link-not-redistribute model: index content for embeddings, always link back to official manufacturer PDF. Never serve full PDFs. Fair use for reference tools. |
| RAG inaccuracy on parts suggestions | Medium | High | Conservative prompt design: always cite page, always add verification caveat, never return confident parts recommendation without manual source. Build feedback loop for incorrect suggestions. |
| App adoption friction (free tool bar set by Bluon) | Medium | Medium | 10-lookup free trial (no credit card); demo video on boiler call in dark basement; "one callback avoided" ROI framing in onboarding |
| AppSumo LTD model weakness | High | Low | Use LTD as secondary acquisition channel only; primary revenue = monthly subscription direct from community launch |

---
