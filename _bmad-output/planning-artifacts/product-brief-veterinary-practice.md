---
stepsCompleted: [1, 2, 3, 4, 5]
inputDocuments:
  - ideas/shortlisted/veterinary-practice-communication.md
  - _bmad-output/planning-artifacts/market-research-veterinary-practice.md
workflowType: product-brief
lastStep: 5
project_name: veterinary-practice
user_name: Root
date: 2026-04-10
---

# Product Brief: Veterinary Practice Communication & Management

<!-- Generated autonomously from shortlisted idea (score 90/105) and completed market research -->

---

## Executive Summary

Independent veterinary clinics — 30,000+ in the US alone — are trapped between crumbling legacy software (Cornerstone, AVImark) and modern cloud tools priced out of reach or unreliable under load. The result: vets spending 45–90 extra minutes per day on charting, front desks fielding preventable calls, and practices hemorrhaging no-show revenue.

**VetSimple** (working title) is a flat-rate cloud practice platform built specifically for 1–3 doctor independent clinics. For $149–199/month — unlimited staff users, no per-text fees, no setup costs — it delivers cloud PIMS, AI SOAP note generation, two-way SMS, appointment reminders, and online booking in one interface. No fragmented billing across four apps. No surprise invoices. No server room.

The product is validated by analogy: Weave reached ~$245M ARR applying the "communication layer on top of legacy software" thesis to dental. No equivalent exists in veterinary at sub-$300/month. With 32,000+ eligible US clinics, even 1% penetration at $199/month represents $7.6M ARR — and a founding-member cohort of 200 clinics gets the business to near-ramen profitability before a dollar of external capital.

The fastest path to market is a standalone AI SOAP note tool ($149 LTD wedge) deployed in 4–6 weeks, with the full communication platform following at month 3–4. Migration support — the single biggest switching barrier — is handled white-glove and free.

---

## Core Vision

### Problem Statement

Independent veterinary practices are crushed by an impossible software landscape:

- **Legacy systems are failing**: IDEXX Cornerstone — the most-used PIMS globally — "constantly freezes," is "click-heavy," and requires an in-office server that becomes a liability for remote access and disaster recovery. AVImark costs "2x competitors" and requires a 1–3 month consultant-assisted migration to escape.
- **Modern alternatives are priced for corporate groups**: ezyVet starts at $245/month + $2,500 setup. Shepherd costs $299/month + $99/DVM add-ons and suffered 6+ multi-hour outages in February 2026 alone. NaVetor is cheap but slow and buggy.
- **The communication layer is broken or missing**: PetDesk (the closest thing to a vet communication platform) starts at $389/month — for communications alone, not PIMS. Weave has only 19 PIMS integrations and no vet-specific features.
- **Per-user and per-text pricing punishes growth**: ezyVet charges per-user + per-text + per-module. IDEXX Neo charges $19/user/month after the first 3. Growing practices face bill shock.
- **Fragmentation is rampant**: A typical practice juggling PIMS + communication platform + AI scribe + payments faces $700–$1,100+/month in software costs and 4+ apps for daily work.

Solo and 2-vet independent clinics — 60–70% of the independent market — are the most underserved. They can't afford $299–399/month enterprise tiers, but $119/month budget tools (Hippo Manager, NaVetor) lack the AI, communication, and reliability they need in 2026.

### Problem Impact

The quantified cost of this dysfunction:

- **Charting time**: Vets spend 45–90 minutes/day on SOAP notes when done manually or via click-heavy PIMS. At $100–200/hour clinical billing value, that's $24,000–$48,000/year in time cost per DVM.
- **No-shows**: A 40-appointment/day practice losing 15–20% to no-shows forgoes $30,000–$60,000/year in preventable missed revenue. IDEXX Vello reports a 19% average no-show reduction with automated reminders.
- **Booster recall gap**: Only 39% of independent vet practices offer online booking (AVMA 2025). SMS recall campaigns boost booster bookings 25–35%, representing $50,000–$150,000+ in additional preventive revenue per mid-size practice annually.
- **Staff burnout**: Veterinary burnout is reported at 84% prevalence. Software friction is a documented contributor — "the system is designed to frustrate you" is a common refrain in r/veterinary.
- **Switching paralysis**: $3,000–$10,000 in migration fees and 4–12 weeks of disruption keep practices locked on legacy systems long after they want to leave.

### Why Existing Solutions Fall Short

| Solution | Core Failure |
|----------|-------------|
| IDEXX Cornerstone | Server-based; crashes; click-heavy; no modern comms layer; IDEXX lab lock-in |
| AVImark (Covetrus) | Desktop-only; "2x cost" of alternatives; 1–3 month migration with consultant |
| Covetrus Pulse | Bad data migrations; price increases; usability complaints; poor leadership |
| ezyVet (IDEXX) | $2,500 setup + $245+/mo + per-text fees; slow; IDEXX lock-in resentment |
| Shepherd | Best UX in market BUT 6+ outages in Feb 2026 alone; per-DVM add-on pricing; per-text SMS |
| PetDesk | $389/mo for comms only — practices still need a separate PIMS |
| Weave | Not vet-specific; only 19 PIMS integrations; no pet parent app; no vet workflows |
| NaVetor | $140/mo is right price, but "very slow," buggy save function, poor UX |
| Hippo Manager | Best budget option ($119/DVM) but no AI, no integrated comms, older UX |

**The structural gap**: Nothing credible at $149–249/month flat covering PIMS + communication + AI SOAP notes + unlimited SMS for 1–3 vet clinics. This gap is confirmed from both ends: too expensive for the budget tools, too cheap/small for enterprise tools.

### Proposed Solution

**VetSimple** — a cloud-native practice platform designed from the ground up for independent 1–3 doctor veterinary clinics, priced at $149–199/month flat (unlimited staff, no per-text fees, free white-glove migration).

Core product pillars:

1. **Cloud PIMS** — appointment scheduling, medical records, invoicing, inventory — built for modern browsers without a server room
2. **AI SOAP Note Generator** — voice-to-structured-note via Whisper/Deepgram API; saves 45–60 minutes/day per DVM; no separate subscription
3. **Two-Way SMS + Automated Reminders** — appointment confirmations, vaccine recall campaigns, prescription reminders — unlimited messaging included in flat rate
4. **Online Booking** — embeddable widget; 24/7 appointment scheduling; reduces front desk call volume by 40–50%
5. **Free White-Glove Migration** — from Cornerstone, AVImark, ezyVet, NaVetor; full data import handled by the VetSimple team, typically 2–3 weeks

**Entry wedge**: A standalone AI SOAP note tool ("VetScribe") at $149 LTD, shippable in 4–6 weeks, is the fastest-to-market product. It integrates with any existing PIMS via copy-paste or API, generates immediate ROI (60 min/day savings), and creates a Trojan horse into full PIMS adoption.

**Shared platform thesis**: The core communication stack (two-way SMS, appointment reminders, recall campaigns, review requests, online booking) is identical between dental and veterinary practices — only templates, PIMS integrations, and terminology differ. Building VetSimple as a vertical skin on a multi-practice communication platform shared with a dental equivalent reduces development cost by 60–70% while addressing two validated markets.

### Key Differentiators

1. **Flat all-in pricing**: No per-user fees, no per-text fees, no setup fees, no module add-ons. One price covers everything. This is the anti-ezyVet, anti-Shepherd, anti-Covetrus promise.

2. **AI SOAP built-in (not a $99/DVM add-on)**: Every competitor prices AI scribing as a separate module ($49–297/DVM/month). VetSimple makes it a core feature of the base plan — a genuine differentiation that competitors can't quickly replicate without repricing.

3. **Free white-glove migration**: The #1 switching barrier in this market. "We handle your entire Cornerstone/AVImark migration in 3 weeks, guaranteed" is a category-defining offer. PetDesk doesn't do this. Shepherd offers self-serve data import. No competitor does true white-glove free migration at this price point.

4. **Reliability SLA with compensation**: Shepherd's 2026 outage crisis is an ongoing wound in the market. A 99.9% uptime SLA with actual downtime credits resonates immediately with practices burned by Shepherd or who've researched switching to it and hesitated.

5. **Built for the independent vet, not the corporate group**: Positioning, onboarding, support, pricing — all oriented toward the 1–3 DVM owner-operator, not the multi-site enterprise. This creates genuine brand affinity with the 51%+ of US clinics that are independently owned and increasingly frustrated with corporate-flavored software.

---

## Target Users

### Primary Users

**Persona 1: Dr. Sarah Chen — The Overwhelmed Solo Vet (Core ICP)**

- **Profile**: Solo DVM, 8 years post-graduation, owner-operator of a 2-exam-room small animal clinic. Revenue ~$750K/year. Currently on Cornerstone — inherited it when she bought the practice in 2022.
- **Context**: Sees 25–35 patients/day. Ends most evenings finishing SOAP notes at the clinic or at home. Front desk manages reminders manually by phone. No online booking — "patients just call."
- **Pain**: "Cornerstone hasn't been updated in years. It crashes twice a week. I'm paying $400/month for software that frustrates my whole team every single day."
- **Workarounds**: Uses a personal Google doc for quick clinical notes, transcribes to Cornerstone later. Uses a personal cell phone for the occasional patient follow-up SMS.
- **Decision trigger**: A second server crash in a month, or a peer at a state VMA meeting raving about a $199/month alternative that saved her 2 hours a day.
- **Success vision**: SOAP notes generated from her voice in 3 minutes. Vaccine reminders go out automatically. Clients book online. She leaves the clinic by 6 PM.
- **Channel**: r/veterinary, Facebook Veterinary Practice Owner groups, word-of-mouth from trusted colleagues.

**Persona 2: Maya Patel — The Efficiency-Minded Practice Manager (Key Influencer)**

- **Profile**: Non-clinical practice manager at a 2-DVM small animal clinic. Manages 6 staff. Was hired 18 months ago with a mandate to "modernize operations." Reports to the two DVM owners.
- **Context**: Currently managing PIMS (DaySmart Vet), a separate texting platform ($89/month), and a Google Calendar for overflow booking — three systems with zero integration. Her job would be half as hard with one platform.
- **Pain**: "I spend half my Monday reconciling what happened over the weekend across three systems. Every month there's a surprise SMS bill because we went over the limit. The DVMs don't care about this stuff — they just want it to work."
- **Decision role**: Primary evaluator; demos and shortlists options; DVMs approve final decision. She will be the one on G2, Capterra, and r/vet_practice_management doing research.
- **Success vision**: One dashboard. One bill. No surprises. Online booking that syncs with the schedule automatically. She wants to show the DVMs a 30-day report that says "we had zero no-shows because reminders worked."
- **Channel**: Software review sites (G2, Capterra), VHMA (Veterinary Hospital Managers Association), LinkedIn.

**Persona 3: Dr. Marcus Webb — The New Practice Founder (No Migration Needed)**

- **Profile**: DVM 5 years out of school, just signed a lease for his own clinic. Zero legacy data. Starting fresh.
- **Context**: Used ezyVet at his previous corporate clinic job. "It was fine for a corporate group but way too expensive and complicated for what I need."
- **Pain**: Facing $2,500 setup fees + $245/month minimum for the only modern tool he knows. Looking for something that scales with him from day one without punishing him for being a single-DVM shop.
- **Decision trigger**: ProductHunt launch, NAVC new practice track, a recommendation from a business-minded DVM in his peer group.
- **Success vision**: Operational on day one. Patient records from the start. Clients can book online before his sign even goes up.
- **Channel**: NAVC New Grad Programs, r/veterinary, Facebook Vet Entrepreneur groups.

### Secondary Users

**Veterinary Technicians / Front Desk Staff (End Users)**

- 3–6 staff per clinic are daily users of scheduling and communication features
- Not decision makers, but their adoption determines product success post-onboarding
- Key need: Simple, fast UI that doesn't require training before each shift
- Their informal feedback ("the old system was better") can kill an adoption within 60 days
- Product must be opinionated enough to minimize the learning curve

**Pet Parents (Indirect End Users)**

- Receive SMS reminders, confirmation messages, recall campaigns
- Experience the product through the online booking widget and the pet parent portal
- Their engagement rates (booking, confirming, responding) are the measurable output of the communication platform
- App experience (if any) can be a differentiating factor — PetDesk's 4.9 App Store rating from 7M+ users is evidence this matters

**Specialty/Exotic/Mobile Vets (Niche Expansion Segment)**

- Mobile vets and exotic/specialty practices are especially underserved (even Shepherd lacks mobile-first features)
- Mobile vets need scheduling, routing, and remote invoicing — a natural product extension
- Exotic/avian/reptile specialists need taxonomy and prescription support for non-standard species
- This is a Phase 2 / Year 2 market expansion opportunity with no well-funded competitor

### User Journey

**Dr. Sarah Chen — Discovery to Value**

1. **Trigger (Month -1)**: Cornerstone crashes during a busy Saturday morning. Posts on r/veterinary: "We're finally leaving Cornerstone — what did you switch to and how bad was the migration?" 15 responses in 2 hours.

2. **Research (Weeks -3 to -1)**: Reads every comment. Notes VetSimple mentioned by 3 people. Checks G2 (4.8 stars, 40 reviews). Watches a 6-minute YouTube walkthrough. Notes the price: "$179/month, unlimited users." Thinks: "That's what I pay just for PetDesk."

3. **Trial (Day 1)**: Signs up for 30-day free trial, no credit card. Gets a migration assessment call from a VetSimple migration specialist within 4 hours. Learns her Cornerstone data can be fully migrated in 2–3 weeks.

4. **Aha Moment (Day 3)**: Records her first SOAP note using voice dictation on her phone while washing hands after an exam. The note populates the record with structured clinical sections in 45 seconds. "I've been wanting this for 3 years."

5. **Conversion (Day 14)**: Practice manager reviews the reminder dashboard — sees 12 vaccine recalls sent automatically without manual intervention. Converts to paid plan. Submits migration request.

6. **Full Activation (Day 45)**: Migration complete. All patient history in the system. First full month on VetSimple. Front desk volume is down 30%. Dr. Chen left the clinic before 6 PM every day last week.

7. **Advocacy (Month 3)**: Leaves a 5-star G2 review. Mentions VetSimple in the same r/veterinary thread she posted to — now the top answer. Three referrals in the next 60 days.

**Maya Patel (Practice Manager) — Parallel Journey**

- Discovers during demo that there is one unified dashboard covering scheduling, communication, and reporting
- In week 1, configures all reminder templates in 45 minutes (vs. 3 hours for the old system)
- By month 2, shows DVMs a monthly ops report pulled directly from VetSimple — no spreadsheet required
- Becomes the product's biggest internal champion; proactively onboards new front desk hires herself

---

## Success Metrics

### User Success Metrics

These metrics indicate VetSimple is creating real, daily value for veterinary practices:

| Metric | Target | Measurement Method |
|--------|--------|--------------------|
| SOAP note time saved | ≥40 min/day per DVM | In-app session duration comparison (pre vs. post AI adoption) |
| Appointment reminder delivery rate | ≥97% | SMS delivery confirmations via Twilio/Bandwidth logs |
| No-show rate reduction | ≥15% improvement within 60 days of activation | Appointment completion rate tracked per clinic |
| Online booking adoption | ≥30% of new appointments booked online within 90 days | Booking channel attribution in scheduling module |
| User session frequency | ≥5 days/week active usage per practice | Login and activity tracking |
| Staff onboarding time | ≤2 hours to full daily usage competency | Support ticket volume and completion of onboarding checklist |
| Migration satisfaction | ≥90% "migration was easier than expected" | Post-migration NPS survey at day 30 |

**The core success signal**: A practice that has used VetSimple for 30 days and has their DVMs charting via voice, reminders running automatically, and clients booking online — that practice has a near-zero churn probability. First 30-day activation is the critical window.

### Business Objectives

**6-Month Objectives (Launch → Initial Traction)**
- 50 paying practices at $149–199/month = $89,000–$119,000 MRR
- Validate AI SOAP note wedge: 200+ LTD purchasers of standalone VetScribe tool
- Achieve 4.7+ star average across G2 and Capterra (minimum 20 reviews)
- Zero data migration failures (reputation-critical in this market)

**12-Month Objectives (Proving Product-Market Fit)**
- 250 paying practices = $450,000–$600,000 MRR (~$5.4–7.2M ARR)
- Net Revenue Retention ≥105% (expansions from Starter → Growth tier offset churn)
- Monthly churn ≤1.5% (implies median customer lifetime >66 months)
- ≥40% of new customers sourced from peer referrals (organic growth signal)
- Establish at NAVC VMX (January 2027) — booth presence or sponsorship

**24-Month Objectives (Path to Scale)**
- 1,000+ paying practices = $2.0–2.5M MRR (~$24–30M ARR)
- Launch dental vertical on shared platform: 500+ dental practices = additional $1M+ MRR
- Team of 15–20 (engineering, support, sales, migration specialists)
- Potential Series A raise or path to profitability on MRR alone

### Key Performance Indicators

**Acquisition KPIs**
- **New clinic signups**: 10/month in months 1–3 → 30/month by month 6 → 80/month by month 12
- **Trial-to-paid conversion rate**: Target ≥25% of 30-day free trials convert to paid
- **CAC (Customer Acquisition Cost)**: ≤$500 average (community-led, low-touch model)
- **Time-to-first-value**: ≤3 days from signup to first AI SOAP note generated

**Retention KPIs**
- **Monthly churn rate**: ≤1.5% (world-class SaaS; achievable given essential-tool nature)
- **NPS score**: ≥50 by month 6 (Shepherd scores ~62 before outage crisis)
- **Feature adoption breadth**: ≥70% of active practices using 3+ core modules within 60 days
- **Support ticket resolution**: ≤4 hours median first response; ≤24 hours median resolution

**Revenue KPIs**
- **ARPU (Average Revenue Per User)**: $179–199/month target (Growth tier adoption)
- **LTV:CAC ratio**: ≥5:1 by month 12
- **MRR growth rate**: ≥20% month-over-month in months 1–6; ≥15% in months 7–12
- **Expansion revenue**: ≥10% of MRR from tier upgrades by month 9

**Market Signal KPIs**
- **G2/Capterra review velocity**: ≥5 new verified reviews/month by month 3
- **Referral rate**: ≥25% of new signups attributable to referred-by-existing-customer by month 6
- **Organic search ranking**: Top 5 for "vet practice management software [city]" queries in 3 target metros by month 9
- **Community mentions**: Track unprompted r/veterinary and Facebook Group mentions monthly

---

## MVP Scope

### Core Features

The MVP is a focused, shippable product that solves the immediate pain for the primary persona (Dr. Sarah, solo/2-DVM independent clinic). It does not attempt to replace every feature of Cornerstone on day one — it solves the top 5 pain points that drive switching intent.

**MVP Core Feature Set (Target: 12–16 weeks to first paying customer)**

**1. AI SOAP Note Generator (VetScribe module)**
- Voice-to-text transcription of patient consultations via browser/mobile
- Structured SOAP output (Subjective, Objective, Assessment, Plan) with species-specific templates (dogs, cats, plus common exotic species)
- Integration: save to PIMS record (VetSimple native) or copy-to-clipboard for any external PIMS
- Powered by Whisper API (OpenAI) or Deepgram for transcription; structured note extraction via Claude API
- Mobile-first: works from vet's phone in exam room

**2. Cloud Appointment Scheduling**
- Calendar view with multi-column support (multiple DVMs/exam rooms)
- Client + patient database (name, species, breed, DOB, medical history summary)
- Appointment types, durations, and buffer time configuration
- Search and quick-add from front desk view
- No legacy data migration required for new clinics; migration support for existing clinics (Phase 1: Cornerstone and AVImark importers)

**3. Automated Reminders & Two-Way SMS**
- Appointment confirmation SMS (24h + 2h before) — automated, no manual trigger
- Vaccine/wellness recall campaigns via SMS/email (configurable intervals)
- Two-way SMS inbox: clients can reply, staff see threaded conversation
- Unlimited SMS within fair use (2,500 messages/month included; additional volume at $0.01/message)
- Powered by Twilio (variable cost ~$0.007/message = $17.50/month at 2,500 volume)

**4. Online Booking Widget**
- Embeddable on practice website (single script tag)
- Client-facing booking flow: species → reason → DVM preference → time slot
- Syncs in real-time with scheduling calendar
- Configurable: deposit requirement, appointment type restrictions, buffer slots

**5. Basic Invoicing & Payments**
- Line-item invoice creation (services + medications)
- Email invoice delivery with online payment link
- Stripe integration for credit card processing (2.9% + $0.30 per transaction)
- Payment status tracking (outstanding / paid / partial)
- Does NOT include: insurance claim submission, detailed inventory management, or full accounting (out of scope for MVP)

**6. Client & Patient Records**
- Client profile: contact info, communication preferences, pets
- Patient profile: name, species, breed, DOB, weight history, vaccination records, past appointments, SOAP notes
- Document upload: lab results, referral letters, medical history imports
- IDEXX lab result integration: read-only import of lab results (critical for practices using IDEXX diagnostics)

**7. White-Glove Migration Service**
- Cornerstone data importer (patient records, appointment history, vaccination records)
- AVImark data importer
- Manual migration path for all other PIMS (VetSimple migration team extracts and imports within 3 weeks)
- Free for all paid plans — core competitive differentiator

### Out of Scope for MVP

The following are explicitly deferred to avoid scope bloat and get to market in 12–16 weeks:

| Feature | Rationale for Deferral |
|---------|----------------------|
| Full inventory management | High complexity; most practices use separate Vetter/Henry Schein systems; adds 6–8 weeks |
| Insurance claim submission (VPI, Trupanion, etc.) | Requires individual carrier integrations; significant compliance complexity |
| Telemedicine / video consults | Important for 2027 but not a switching trigger for core ICP today |
| Multi-location / corporate group features | Target ICP is 1–3 DVM independent; multi-site adds complexity without serving core market |
| Native mobile app (iOS/Android) | PWA (Progressive Web App) covers mobile use cases for MVP; native app is Phase 2 |
| IDEXX lab equipment direct integration (write-back) | Read-only integration is MVP; bidirectional requires IDEXX API agreement negotiation |
| Pet parent portal / mobile app | PetDesk differentiator; important but not a primary switching trigger for practices leaving Cornerstone |
| Wellness plan / subscription billing | Phase 2 feature; requires significant payment infrastructure complexity |
| Reporting & Analytics dashboard | Basic appointment counts in MVP; full analytics suite deferred 3–4 months |
| API for third-party PIMS integration | Needed for communication-add-on play; Phase 2 after core platform validated |

### MVP Success Criteria

The MVP is considered validated and ready to scale when:

1. **10 paying practices** at ≥$149/month with zero manual intervention from founders (self-serve signup, trial, and conversion)
2. **Zero data migration failures** — every migrated practice successfully imported all patient records
3. **30-day retention ≥90%** — practices that complete migration and onboarding are not churning
4. **≥3 unprompted referrals** from the first 10 customers within 60 days
5. **AI SOAP note adoption**: ≥70% of active practices use VetScribe ≥3x/week within 30 days
6. **NPS ≥40** from post-month-1 survey
7. **No critical reliability incidents** in first 90 days (zero full-platform outages >15 minutes)

If all 7 criteria are met within 90 days of first paying customer, proceed to Phase 2 (communication-add-on for external PIMS, dental vertical, investor conversations).

### Future Vision

**Year 1 Extensions (3–9 months post-MVP)**
- Dental vertical: same platform, dental-specific templates, PMS integrations (Dentrix, Eaglesoft, Open Dental) → launch to dental practices at $179–229/month
- Native iOS + Android app for DVMs (offline SOAP note capture, syncs when connected)
- Advanced reporting: practice performance dashboard, revenue analysis, appointment trend analysis
- Pet parent portal: appointment history, vaccination records, invoice view, messaging
- Automated review generation: post-appointment review request to Google/Yelp (proven to 3–5x review volume)

**Year 2 Extensions (Full Platform)**
- Telemedicine: video consults with direct SOAP note generation from video audio
- Wellness plan billing: automated recurring charge, compliance tracking, renewal campaigns
- IDEXX / Zoetis lab bidirectional integration: order labs from within VetSimple, results auto-populate SOAP
- Multi-location support: shared client database, centralized billing, per-location reporting
- Mobile vet module: route optimization, mobile scheduling, remote invoicing + payment

**3-Year Vision: The Weave for Veterinary Medicine**
Weave reached ~$245M ARR by building the communication layer on top of dental practice management software. VetSimple's 3-year vision is to be the de facto communication and practice platform for independent veterinary clinics in the US — and subsequently, globally.

At scale, VetSimple becomes an operating system for independent veterinary practice:
- 5,000+ clinics on platform
- $30–50M ARR from vet vertical
- $10–20M ARR from dental vertical (shared platform)
- Marketplace of approved integrations (labs, imaging, insurance, pharmacy)
- Data network effects: benchmarking, clinical decision support, supply chain optimization

The endgame is not to be acquired by IDEXX (which would destroy the independent-vet brand) — but to be the independent alternative that makes IDEXX's bundling strategy less effective, positioning VetSimple for an IPO or strategic acquisition by a non-IDEXX player (Henry Schein, Covetrus, or a PE-backed veterinary services group that wants a software anchor).

---

## Risks & Mitigations

| Risk | Severity | Mitigation |
|------|---------|-----------|
| Data migration failure damages reputation | High | Start with new practices (no migration needed); perfect importer on 5 beta practices before public launch; hire a dedicated migration specialist as first non-engineering hire |
| Shepherd resolves reliability → recaptures mid-market | Medium | Flat pricing + free migration + AI built-in = differentiated even against a stable Shepherd; Shepherd's per-DVM and per-text pricing is structural, not a bug |
| IDEXX cuts ezyVet pricing to defend | Medium | Target practices with anti-IDEXX sentiment (30–40% of market); independent ownership angle creates brand moat IDEXX cannot replicate |
| SMS variable costs erode margins | Medium | 2,500 msgs/clinic/mo at $0.007 = $17.50 variable cost vs. $179 revenue; hard cap at 5,000 msgs/mo on Starter tier; Growth tier includes unlimited for $199 |
| Small vet market vs. dental (33K vs. 135K practices) | Low | 33K × $199/mo = $78.8M TAM — sufficient for $5–10M ARR outcome; shared platform with dental creates total addressable market of 168K+ practices on same code base |
| AppSumo / LTD churn after standalone VetScribe launch | Low | LTD is conversion funnel for MRR; price LTD at $149 (= <1 year MRR) with explicit sunset date; LTD customers not expected to generate long-term revenue, only social proof and reviews |

---

## Go-To-Market Summary

**Phase 1 — Community-Led Launch (Months 1–3)**
- VetScribe standalone AI SOAP note tool: $149 LTD on ProductHunt + r/veterinary + VetEntrepreneur Facebook group
- Goal: 200 LTD buyers, 50 authentic G2/Capterra reviews, 500 email list
- Full platform waitlist opens at same time

**Phase 2 — Founding Member Cohort (Months 3–6)**
- Full platform launches to waitlist: $99/month locked-for-life founding member pricing (cap 200 clinics)
- Target: startup practices first (no migration complexity), then legacy-escapees
- White-glove onboarding for all founding members

**Phase 3 — Organic + Conference Growth (Months 6–18)**
- NAVC VMX 2027 (January): booth presence or co-sponsorship
- AVImark/Cornerstone migration campaign: "Your server is your liability. We move you in 3 weeks, free."
- SEO: target "vet practice management software [state]" long-tail queries
- Referral program: $300 credit per referred paying practice

**Pricing at Launch**

| Tier | Price | Target | Included |
|------|-------|--------|---------|
| Starter | $149/mo | Solo DVM | Cloud PIMS + scheduling + reminders + 2-way SMS (2,500 msg/mo) + AI SOAP (unlimited) |
| Growth | $199/mo | 1–2 DVMs | All Starter + online booking + email campaigns + invoice + Stripe payments |
| Practice | $249/mo | 2–3 DVMs | All Growth + unlimited SMS + wellness plan module + priority support |

All tiers: unlimited staff users, no setup fee, free data migration, 99.9% uptime SLA.

---

*Product Brief generated 2026-04-10 | Based on shortlisted idea score 90/105 (Tier 1 BUILD) and completed market research | Next step: create-prd*
