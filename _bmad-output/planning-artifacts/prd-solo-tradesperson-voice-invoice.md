---
stepsCompleted: [step-01-init, step-02-discovery, step-02b-vision, step-02c-executive-summary, step-03-success, step-04-journeys, step-05-domain, step-06-innovation, step-07-project-type, step-08-scoping, step-09-functional, step-10-nonfunctional, step-11-polish, step-12-complete]
inputDocuments:
  - ideas/shortlisted/solo-tradesperson-voice-invoice.md
  - _bmad-output/planning-artifacts/market-research-solo-tradesperson-voice-invoice.md
workflowType: prd
lastStep: step-12-complete
date: '2026-11-18'
author: Root
idea: solo-tradesperson-voice-invoice
---

# Product Requirements Document — TradeVoice (Solo Tradesperson Voice-to-Invoice)

**Author:** Root
**Date:** 2026-11-18
**Status:** Complete

---

## Executive Summary

TradeVoice is a voice-first invoicing tool for solo tradespeople — electricians, plumbers, HVAC technicians, and handymen — who complete 1–10 jobs per day from a truck and need to invoice from a dirty phone after hours of physical labor. The product eliminates the keyboard from the invoicing workflow entirely.

The core insight driving TradeVoice is surgical: the bottleneck for solo tradespeople is not a missing feature — it is the act of typing on a touchscreen with calloused, tired hands at the end of a 10-hour day. Every existing invoicing tool (Jobber, ServiceM8, Invoice2go, Joist) is keyboard-first by design. Seven voice invoice apps now exist in the category (Billio, TradeInvoice, VoiceInvoice, and others launched 2024–2026), yet none solves the complete problem: none combines a persistent saved price book with AI-powered item matching plus SMS/WhatsApp payment link delivery. The result is that voice input dumps spoken text into a blank invoice and the user must still look up and type every price — the hardest part remains.

TradeVoice solves the complete workflow: **speak the job → AI matches spoken items against the saved price book → review in 10 seconds → one-tap SMS delivery of a Stripe payment link → customer pays from their phone → money arrives next day.** Total time: under 2 minutes per invoice. No typing required at any point in the primary flow.

The product ships as a Progressive Web App (PWA) deployable in 3 weeks using Whisper (speech-to-text), GPT-4o (price book matching), Twilio (SMS), and Stripe Connect (payments). The initial market is 2M+ US solo contractors. Pricing: $19/month or $39 Lifetime Deal via AppSumo — the first LTD product in the voice invoice category.

### What Makes This Special

**The Price Book is the moat.** No competing voice invoice app maintains a persistent, AI-matched price book. TradeVoice is the only tool where speaking "circuit breaker 15A" automatically populates the correct part price from the tradesperson's own saved rates — not a guess, not a text dump, but a matched entry with the right price. Without this, voice input is a convenience; with it, the product becomes a billing intelligence system.

**SMS/WhatsApp payment delivery over email PDF.** The invoicing industry defaults to emailing a PDF. SMS payment links have 98% open rates vs. ~20% for email. TradeVoice's customer payment flow — an SMS containing a Stripe Checkout link that requires no account — systematically reduces the gap between job completion and customer payment.

**Voice-first architecture, not voice-added.** Competing apps added voice as a secondary feature on a keyboard-first platform. TradeVoice is designed from the ground up around the assumption that the user will not type. The primary interaction surface is the microphone. The keyboard is the fallback.

**Trades-specific vocabulary.** The AI is primed for the lexicon of physical trades: "15-amp Siemens breaker," "90-minute HVAC diagnostic," "half-inch copper elbow." This is not generic freelancer invoicing software with voice added.

**First LTD in the category.** No voice invoice app offers a Lifetime Deal on AppSumo or comparable platforms. The $39 LTD is a unique position that drives initial acquisition and community credibility.

## Project Classification

- **Project Type:** Progressive Web App (PWA) with native iOS/Android apps in V1.1
- **Domain:** B2C SMB SaaS — field service / solo trades — low-medium domain complexity
- **Complexity:** Medium (Whisper API, GPT-4o integration, Stripe Connect, Twilio SMS, mobile PWA)
- **Project Context:** Greenfield — no existing codebase

---

## Success Criteria

### User Success

A user is successful when TradeVoice genuinely replaces their current invoicing workflow and they would not return to their prior method.

**Activation (first 24 hours):**
- 70%+ of new signups complete price book setup (minimum 3 items entered) during onboarding
- Time from signup to first invoice sent: under 10 minutes for 60%+ of new users
- First invoice sent within 24 hours of account creation: 50%+ of new signups

**Engagement (ongoing):**
- Day-7 retention: 60%+ of users who send at least 1 invoice in week 1 return in week 2
- Invoices sent per active user in first 7 days: 3+ (proxy for workflow adoption)
- Month-1 invoice volume per active user: 15+ (proxy for genuine business reliance)
- Customer payment rate from SMS link: 60%+ of sent invoices paid within 48 hours

**Value delivery:**
- Voice-to-invoice flow completion time: under 2 minutes (from tap record to SMS sent) for 80%+ of invoices
- NPS at Day 30: 50+ (tradespeople recommend tools peer-to-peer; NPS drives organic acquisition)
- User-reported admin time saved: 3+ hours/week at Day 30 (collected via in-app survey)

**The defining retention signal:** Users who complete price book setup AND send 3+ invoices in week 1 retain at 90%+ rates. Week 1 is the critical adoption window.

### Business Success

| Objective | 30-Day | 60-Day | 12-Month |
|-----------|--------|--------|----------|
| Paying users (subscriptions + LTD) | 150 | 300 | 2,000 |
| AppSumo LTD units sold | — | 500 | 1,500 |
| MRR (subscriptions only) | — | $3,800 | $25,000 |
| LTD revenue | — | $19,500 | $58,500 |
| Day-30 retention | — | 55%+ | 65%+ |
| App store / PWA rating | — | 4.3+ | 4.6+ |
| Organic community mentions | 20+ | 50+ | 200+/month |
| NPS at Day 30 | — | 45+ | 55+ |

**12-month revenue target:** $25,000 MRR ($300K ARR from subscriptions) + $58,500 LTD = ~$360K total year-1 revenue.

**Strategic KPIs:**
- Price book completion rate at onboarding: 70%+ (the moat requires setup)
- Customer SMS payment-to-paid conversion: 60%+ within 48 hours
- Churn rate: <8% monthly by month 6
- Organic referral signups (from Reddit community posts): 40%+ of month-1 signups

### Technical Success

- PWA fully functional on Android Chrome and iOS Safari (the two dominant mobile browsers in trades)
- Voice transcription turnaround: spoken audio processed and invoice preview displayed in under 5 seconds
- Price book AI matching accuracy: 85%+ of spoken line items matched to correct price book entry on first attempt
- Stripe Connect onboarding completed successfully within the PWA flow without leaving the app
- Zero invoice data loss: all sent invoices, payment records, and price book entries durable and recoverable
- SMS delivery confirmation: 95%+ of sent invoice SMS messages confirmed delivered by Twilio

### Measurable Outcomes

The MVP is validated and justifies V1.1 investment when ALL of the following are true at 60 days post-launch:
1. **Price book adoption > 70%**: More than 70% of signups complete price book setup. Below 50% requires onboarding redesign before scaling.
2. **Week-1 retention > 55%**: Users who send 1+ invoice in week 1 return in week 2. Below 40% signals a product problem.
3. **Customer SMS payment rate > 55%**: Of invoices sent via SMS, 55%+ are paid within 48 hours. Below 40% requires investigation.
4. **100 paying users in 60 days**: Validates the $19/mo price point and Reddit/AppSumo go-to-market.
5. **NPS > 40 at Day 30**: Validates organic word-of-mouth channel.

## Product Scope

### MVP — Minimum Viable Product

Five features that together deliver the complete value proposition. No feature is included unless removing it would cause the product to fail to solve the core problem.

**Feature 1: Price Book**
- Entry form: description, unit price, unit of measure (per hour / per unit)
- Pre-populated starter templates per trade type (electrician, plumber, HVAC, handyman) reduce setup friction
- 50 items maximum in MVP (unlimited in V1.1)
- Onboarding target: price book setup completable in under 10 minutes

**Feature 2: Voice Invoice Creation (Core UX)**
- Large tap-to-record button operable with a gloved thumb
- Whisper API transcription of spoken job description
- GPT-4o matching of transcribed items to price book with confidence scoring
- Invoice preview: auto-filled line items, quantities, prices
- Inline edit on preview (tap to modify any line item before sending)

**Feature 3: SMS Invoice Delivery + Stripe Payment**
- Twilio SMS delivery of a Stripe payment link to customer's phone
- Customer receives: "[Business name] — your invoice for $[amount] is ready. Pay here: [link]"
- Stripe Checkout hosted page — customer pays without creating an account
- Push notification to tradesperson on payment
- Stripe Connect for tradesperson's direct deposit

**Feature 4: Invoice Log**
- List view: customer name, amount, status (sent/paid/overdue), date
- Resend and manual-mark-paid actions
- Date range filter
- CSV export for accountant use

**Feature 5: Business Profile & Onboarding**
- Business name, logo (optional), address, payment terms
- Stripe Connect setup
- Twilio SMS number provisioning (one dedicated number per user)

**Explicit out-of-scope for MVP:**

| Feature | Reason Deferred |
|---------|----------------|
| WhatsApp delivery | Meta BSP approval takes 2–4 weeks; SMS achieves same outcome immediately |
| Native iOS app | App Store approval 2–7 days; PWA ships Day 1 |
| Native Android app | Same as iOS |
| Photo receipt → line items | Core voice flow must be validated first |
| Quote → invoice conversion | Different workflow; not the primary pain point |
| Scheduling / job management | Out of scope permanently for solo tier |
| CRM / customer management | Not building Jobber; customer is name + phone in MVP |
| Recurring invoices | Not relevant to per-job trades work |
| Multi-currency | US market only for MVP |
| QuickBooks / Xero integration | Phase 2; CSV export covers accountant use case |
| Team tier | V1.1; validate solo tier first |
| In-app analytics dashboard | V1.1; Stripe dashboard covers this for MVP users |
| Offline mode | Deferred; LTE coverage sufficient for primary use case |

### Growth Features (Post-MVP)

**V1.1 (Month 3–4):**
- WhatsApp delivery (post Meta BSP approval)
- Native iOS + Android apps (submitted during PWA launch, approved by now)
- Team tier — up to 3 users, shared price book, $29/month
- Unlimited price book items
- Photo receipt → AI adds materials to invoice
- Automated SMS follow-up for unpaid invoices (3-day, 7-day nudges)

**V2.0 (Month 6–9):**
- Quote → invoice conversion (speak a quote, convert after job completion)
- Deposit / partial payment requests on larger jobs
- Job notes (photos, voice memos) attached to invoice record
- Accountant-ready reports (P&L summary by month)
- In-app Stripe payment analytics

### Vision (Future)

**Year 2+:**
- Multi-trade expansion: pest control, landscaping, cleaning — same voice + price book model
- Franchise / franchisor tier: multi-location operators with centralized price book management
- Parts supplier integration: price book auto-updates when supplier prices change (Grainger, Ferguson)
- AI-suggested pricing: "You charged $45 for this breaker in January — market rate is now $52, want to update?"
- Platform play: TradeVoice as the billing intelligence layer for the independent service economy

---

## User Journeys

### Journey 1: Marcus — Solo Electrician, Core Adoption Path

Marcus is 42, runs a one-man electrical contracting business in suburban Ohio. He earns ~$95K/year on residential service calls, panel upgrades, and new construction rough-ins. He works 8–10 hour days from a 2019 F-150. He uses Invoice2go because his old app raised prices. It takes 15–20 minutes per invoice because he types every line item from memory on a Samsung Galaxy with a cracked corner. He has lost hundreds of dollars in unbilled parts over the years because he couldn't remember everything used on complex jobs by the time he sat down to invoice.

**Discovery:** Marcus sees a Reddit post in r/electricians: "Built a voice invoice app for solo trades — speak your job, it generates the invoice, customer pays from SMS link. Under 2 minutes per invoice." The specificity catches his eye. He clicks. Sees that the price book feature means prices don't need to be typed — he speaks "15-amp breaker" and the app already knows what he charges. He signs up.

**Onboarding:** Enters business name, connects Stripe. Sets up price book: $85/hour labor, $45 Siemens 15A breaker, $5 wire nut pack, $35 half-hour travel charge. Done in 8 minutes. The starter template for electricians pre-populated "circuit breaker replacement" with a prompt to add his price — this shaved 3 minutes off the setup.

**First real use (Day 1):** Finishes a circuit breaker replacement. Sits in the truck. Taps record. Says: "Two hours labor, replaced one 15-amp Siemens breaker, travel charge 30 minutes." The app shows the preview: Labor 2hrs × $85 = $170.00, Siemens 15A Breaker × 1 = $45.00, Travel 0.5hr × $35 = $17.50. Total: $232.50. The breaker matched automatically. He taps send. Types the customer's number. Done. While pulling out of the driveway, his phone buzzes: "Invoice paid — $232.50."

**Three minutes total. No typing.**

**Steady state (Month 2):** Marcus invoices directly from the job site on every call. He has recovered his former end-of-day hour of admin. He's capturing parts he used to forget. At the end of the month he exports the CSV for his accountant and notices his effective billing rate has increased because he's capturing more line items.

**Advocacy (Month 3):** Posts in r/electricians: "I was on Invoice2go for 3 years. Switched to TradeVoice. Voice invoice in 2 minutes, customer gets an SMS, they pay before I leave the driveway. Never going back." Gets 60+ upvotes, 15 DMs asking for the link.

*Capabilities revealed: price book setup, voice invoice creation, AI price matching, invoice preview with inline edit, SMS delivery, Stripe payment, push notification on payment, invoice log, CSV export*

---

### Journey 2: Rosa — Solo HVAC Tech, New Independent

Rosa is 34, took the leap to go independent 14 months ago after 8 years as a technician for a regional HVAC company. She services residential units — tune-ups, refrigerant recharges, emergency repairs. She earns ~$72K and is building her client base. She uses a free version of a generic invoice app — 2 free invoices per month, then she has to pay. She keeps notes in Apple Notes and invoices end-of-week. Cash flow is uneven. She often can't remember what parts she used on Tuesday.

Her clients are predominantly Spanish-speaking and use WhatsApp. SMS is acceptable as an interim — she understands that.

**Trigger:** She sends 4 invoices in one week and hits the paywall. She looks for an alternative. Finds TradeVoice on AppSumo — $39 for lifetime. The price book feature catches her attention because she's always had to look up refrigerant prices after the job.

**Onboarding:** Connects Stripe (she set up Stripe independently last month for Venmo alternatives). Sets up price book: $95/hour labor, R-410A refrigerant per pound, 1-pound refrigerant charge, emergency call fee, travel charge. 12 minutes total.

**Critical workflow test:** She's doing a refrigerant recharge on a split system. At the job site, she taps record: "One and a half hours labor, two pounds refrigerant, emergency call fee." Preview shows $142.50 labor + $60 refrigerant + $75 emergency = $277.50. She reviews, taps send, enters the customer's number. The customer pays via the SMS link before Rosa gets back to her truck. She calls her partner: "I got paid while I was still in their driveway."

**Adaptation (Month 2):** Rosa discovers she can re-invoice a customer who hadn't paid her from last week directly from the invoice log. She pulls it up, taps resend. The customer pays in 20 minutes. This becomes her standard follow-up move.

**Edge case — multi-part job:** On a complex job with 8 parts, Rosa speaks everything but one part doesn't match the price book (a less common valve). The low-confidence flag surfaces it. She sees the unmatched item highlighted on the preview and manually types the price. All other 7 items matched. She invoices in 4 minutes including the manual correction.

*Capabilities revealed: price book, voice invoice, confidence scoring for unmatched items, manual inline edit fallback, SMS delivery, Stripe payment, invoice resend, invoice log*

---

### Journey 3: Dave — Handyman, Paper-to-Digital Conversion

Dave is 55, does handyman work — odd jobs, drywall, fixture installation, minor plumbing. He charges $65–$80/hour plus parts. Not tech-forward. He currently writes invoices by hand and photographs them, or texts customers a number. He loses ~$300–500/month to unbilled or uncollected work. His daughter sets up apps for him occasionally; she's the one who finds TradeVoice.

**Trigger:** Dave's daughter sees a TikTok of TradeVoice — a plumber speaks a job into his phone, invoice preview appears with prices already filled, customer pays from a text. She shows Dave: "Dad, it's literally just talking."

**Onboarding:** Dave's daughter sets it up at the kitchen table on a Sunday. Business name, Stripe (Dave has a card reader from Square but no Stripe account — daughter sets it up), price book: $70/hour labor, $30 drywall patch, $25 caulk job, $20 minor fixture. Done in 15 minutes.

**First job (Day 2):** Dave does a drywall patch. At the job site — no daughter with him — he taps the big button, says "one hour labor, two drywall patches." Preview: $70 + $60 = $130. He taps send, types the customer's number from memory. The customer calls him 10 minutes later: "I got your text, that link didn't work on my phone." Dave calls his daughter. She looks at it: the customer is on a corporate device with link previews blocked. She asks the customer to copy-paste the URL into Safari. Customer pays. This is the first digital payment Dave has ever received.

**Month 2:** Dave invoices every job. He's recovering missed billing. At the end of the month he has $400 more revenue than the previous month — almost all from capturing parts he used to forget or was too tired to include on a handwritten invoice.

**Limitation discovered:** Dave sometimes speaks the wrong quantity — "two hours" when he worked 2.5. He's figured out he can tap the line item on the preview and change it. He now always reviews before sending.

*Capabilities revealed: simple onboarding, voice invoice creation, invoice preview with manual correction, SMS delivery, Stripe payment link, push notification, invoice log*

---

### Journey 4: Admin / Operator — Support and Account Edge Cases

This journey covers the app operator perspective (support staff or founder) handling operational edge cases.

**Stripe payment failure:** A customer's card is declined when they tap the payment link. The tradesperson's push notification says "Payment failed — John R., Invoice #47." The tradesperson calls the customer to collect alternate payment. The tradesperson manually marks the invoice as paid from the invoice log. The job is closed.

**Subscription management:** A tradesperson on the monthly $19/month plan wants to switch to AppSumo LTD after seeing the deal. They enter the LTD code in account settings. The system validates the code, upgrades their account to lifetime, and disables recurring billing. No support ticket needed.

**CSV export for taxes:** A tradesperson wants to give their accountant all invoices from the year. They navigate to the invoice log, set the date range to Jan 1–Dec 31, and tap Export CSV. The file downloads with: invoice number, customer name, date, line items, total, and payment status.

**Price book bulk update:** A tradesperson's supplier raises prices on a part. They navigate to the price book, find the part, edit the price. All future invoices use the new price. Historical invoices are not affected (they are immutable once sent).

*Capabilities revealed: manual invoice payment marking, AppSumo LTD license redemption, CSV export, subscription management in-app, price book editing, invoice immutability after send*

---

### Journey Requirements Summary

| Journey | Core Capabilities Required |
|---------|---------------------------|
| Marcus — core adoption | Price book setup, voice invoice, AI matching, preview edit, SMS delivery, payment notification, invoice log, CSV export |
| Rosa — new independent | Voice invoice with low-confidence fallback, manual inline edit, invoice resend, price book editing |
| Dave — paper → digital | Simple onboarding, voice invoice, preview review, SMS delivery, payment notification |
| Admin / ops | Manual payment marking, LTD license redemption, CSV export, subscription management, price book editing |

---

## Innovation & Novel Patterns

### Detected Innovation Areas

**AI price-book matching as billing intelligence (primary innovation):** The seven voice invoice apps that entered this category between 2024 and 2026 all use speech-to-text as a convenience layer on top of a keyboard-first invoice form. The user speaks, the app transcribes, and the user still looks up and types every price. TradeVoice's innovation is the persistent price book combined with AI matching: spoken items are semantically matched to saved entries, and the matching is done against the user's own pricing, not generic data. This transforms the product from a speech input method into a billing intelligence system. The moat compounds over time: as the price book grows, the matching improves and the product becomes harder to migrate away from.

**Voice-first architecture as a design constraint:** Building keyboard-free from the ground up — not voice-added — requires distinct architectural decisions: confidence scoring to surface ambiguous matches, an inline preview layer designed for touch review not typing, and an onboarding flow that makes the price book feel essential rather than optional. No competitor has approached the product this way.

**SMS/WhatsApp delivery as a category shift:** The invoicing category universally defaults to email PDF delivery. TradeVoice's hypothesis — that SMS payment links with Stripe Checkout will dramatically outperform email delivery in payment conversion rates — has not been tested in this specific context but is well-supported by SMS industry benchmarks (98% open rate vs. 20% for email). If the hypothesis is validated (SMS payment rate >55%), it becomes a defensible standard that incumbents cannot easily adopt without rebuilding their delivery infrastructure.

### Market Context

Three developments confirm the timing:
1. Seven voice invoice apps emerged 2024–2026, validating market demand but leaving the price book gap unaddressed.
2. The r/skilledtrades "keyboard not features" insight has been independently discovered by multiple builders — the problem is real and confirmed.
3. No voice invoice app has an AppSumo presence — the LTD distribution channel is entirely uncontested.

The timing risk is 6–12 months: a well-funded competitor could add price book functionality to an existing voice invoice app. Speed to AppSumo distribution and community presence is the primary mitigation.

### Validation Approach

**Validation signal 1 (pre-launch):** AppSumo application acceptance indicates the platform sees viable market demand.

**Validation signal 2 (week 1 post-launch):** AppSumo daily LTD sales velocity. 100+ sales on day 1 confirms the community values the price book + LTD combination.

**Validation signal 3 (month 1):** Price book setup completion rate. If <50% of users complete price book setup, the onboarding flow needs redesign before the product can deliver its core value.

**Validation signal 4 (month 1):** SMS payment conversion rate. If <40% of sent invoices are paid via the SMS link within 48 hours, the SMS delivery hypothesis needs investigation.

**Fallback:** If AppSumo distribution underperforms, the subscription product launches independently via Reddit communities. The LTD strategy accelerates growth but is not the only viable path.

---

## PWA and Mobile-Specific Requirements

### Platform Requirements

- **Primary platform:** Progressive Web App (PWA) for Day 1 launch
- **Target browsers:** Chrome Android (primary), iOS Safari 15.4+ (required), Samsung Internet, Chrome iOS
- **PWA install:** App must be installable to home screen on both Android and iOS with offline capability for static assets
- **Native apps (V1.1):** React Native or Flutter cross-platform, submitted to App Store and Google Play during PWA launch window
- **App size:** PWA first-load under 500KB initial bundle; installable version under 5MB

### Device Capabilities Required

- **Microphone:** Native browser microphone access (MediaRecorder API or equivalent) for voice recording; must prompt for permission clearly on first use
- **Push notifications:** Web Push (PWA) for payment confirmed and invoice overdue alerts; must work on Android Chrome; iOS limitations noted for V1.1 native app
- **SMS deep links:** Customer payment/invoice links must render correctly on any mobile browser — no app installation required on customer side
- **Camera (V1.1):** Photo capture for receipt → line item feature deferred to V1.1

### Customer-Facing Web Experience

The invoice payment page is a mobile-optimized web view — customers receive an SMS link and open it in their browser with no app required.

- **Payment page load:** Full render of payment amount, line items, and Stripe payment UI: under 3 seconds on a 4G mobile connection
- **Stripe integration:** Stripe Payment Element hosted page — no card data handled by TradeVoice servers; PCI scope remains with Stripe
- **Browser compatibility:** Must render correctly on iOS Safari, Chrome Android, and Samsung Internet (covers 98%+ of tradespeople's customer base)
- **No account required:** Customer pays as guest; no registration, no login, no app download

### Mobile UX Constraints

- **Record button:** Minimum 72px touch target; thumb-reachable from bottom of screen; operable with a gloved hand
- **Preview review:** All line items visible without horizontal scrolling; edit tap targets minimum 44×44pt
- **One-handed operation:** Primary flows (record → review → send) completable without grip-shifting
- **Response feedback:** Microphone recording indicator visible within 300ms of tap; upload spinner appears within 200ms of action
- **Outdoor legibility:** WCAG AA contrast minimum; designed for legibility in full sunlight

---

## Project Scoping & Phased Development

### MVP Strategy & Philosophy

**MVP approach: Problem-solving MVP.** The goal is to prove that solo tradespeople will adopt the voice + price book workflow and pay for it. The MVP succeeds if it demonstrates: (1) tradespeople complete price book setup and use it, and (2) the SMS payment link achieves a materially higher payment conversion rate than email PDF alternatives.

The MVP is not a voice feature added to an existing invoicing app. It is a minimum viable execution of the voice-first, keyboard-free invoicing hypothesis. Every feature decision starts with: "Without this, does the voice → price book → SMS payment flow fail?" If no, it is deferred.

**Resource requirements:** 1 frontend developer (React/PWA), 1 backend developer (Node/Python + Whisper + GPT-4o), 1 product lead. Target MVP build time: 3 weeks. The tech stack (Whisper, GPT-4o, Twilio, Stripe) is composed of mature APIs — no novel infrastructure required.

### MVP Feature Set (Phase 1)

**Core user journeys supported:**
- Solo tradesperson can go from job completion to invoice sent in under 2 minutes using only voice and one review tap
- Customer can pay the invoice from an SMS link on any phone without installing any app

**Must-have capabilities:**
- Price book setup with starter templates per trade type
- Voice recording with Whisper transcription and GPT-4o price book matching
- Invoice preview with confidence indicators and inline edit
- Twilio SMS delivery of Stripe payment link
- Push notification on payment confirmation
- Invoice log with filter, resend, manual-paid, and CSV export
- Business profile and Stripe Connect onboarding
- AppSumo LTD license redemption

### Post-MVP Features

**Phase 2 (Month 3–4):**
- WhatsApp delivery (post Meta BSP approval)
- Native iOS + Android apps
- Team tier (3 users, shared price book, $29/month)
- Unlimited price book items
- Photo receipt → AI line item extraction
- Automated SMS payment follow-up at 3-day and 7-day intervals
- Quote mode (pre-job estimate, convert to invoice on completion)

**Phase 3 (Month 6–12):**
- Job notes (photos, voice memos) attached to invoice records
- Accountant-ready P&L reports by month
- In-app Stripe payment analytics
- Multi-trade expansion: pest control, landscaping, cleaning verticals
- Parts supplier price book integration (Grainger, Ferguson API)

### Risk Mitigation Strategy

**Technical risks:**
- GPT-4o matching accuracy on trades vocabulary — mitigated by pre-launch testing with 50+ price book entries across 4 trade types; fallback is the low-confidence UI prompt that lets users manually select the right match
- Whisper transcription of trades-specific part numbers and model numbers — mitigated by testing with real tradesperson speech samples; known limitation is alphanumeric model numbers (e.g., "SJFS1515" circuit breaker codes) which will be surfaced as low-confidence
- Twilio SMS deliverability — mitigated by using a dedicated long code per user (not shared short code) for better deliverability; Twilio provides delivery webhooks for confirmation

**Market risks:**
- Billio or VoiceInvoice adds a price book feature before launch — primary mitigation is speed to AppSumo distribution; secondary mitigation is LTD positioning which Billio cannot match without changing its subscription-only business model
- Price book setup abandonment — mitigated by starter templates, guided onboarding, and in-app setup progress indicator; if >30% of users start but don't finish setup, trigger a 1-hour abandonment SMS

**Resource risks:**
- If build time exceeds 3 weeks — MVP can be scoped to voice invoice + SMS delivery only (defer price book AI matching to V1.1 and launch with manual price entry with voice transcript); this is a meaningful product even without AI matching and can be shipped faster
- AppSumo application rejection — pivot to direct subscription launch via Reddit community posts; LTD can be offered on Gumroad as an alternative

---

## Functional Requirements

### Price Book Management

- **FR1:** Tradesperson can add a line item to their price book with a text description, unit price, and unit of measure (per hour / per unit / flat fee)
- **FR2:** Tradesperson can categorize a price book entry as labor or parts/materials
- **FR3:** Tradesperson can select a trade type during onboarding (electrician, plumber, HVAC, handyman) and have starter line items pre-populated for review
- **FR4:** Tradesperson can edit any existing price book entry (description, price, or unit of measure) at any time
- **FR5:** Tradesperson can delete a price book entry
- **FR6:** Tradesperson can view all price book entries in a scrollable list sorted by category
- **FR7:** Tradesperson can search their price book by description to find a specific item quickly

### Voice Invoice Creation

- **FR8:** Tradesperson can initiate a voice recording from the invoice creation screen by tapping a large record button
- **FR9:** System records audio and transcribes the spoken job description using speech-to-text
- **FR10:** System matches each transcribed item against the tradesperson's price book using semantic AI matching
- **FR11:** System assigns a confidence score to each matched item and distinguishes high-confidence matches (auto-fill) from low-confidence matches (require user confirmation)
- **FR12:** Tradesperson can view an invoice preview screen showing all matched line items with quantities, unit prices, and line totals before sending
- **FR13:** Tradesperson can tap any line item on the preview to edit its quantity, description, or price
- **FR14:** Tradesperson can add a new line item manually from the invoice preview
- **FR15:** Tradesperson can delete any line item from the invoice preview
- **FR16:** Tradesperson can re-record if the first recording was unclear, replacing the previous transcription
- **FR17:** System displays a visual indicator (spinner or progress bar) during audio upload and AI processing so the tradesperson knows the system is working

### Invoice Delivery & Payment Collection

- **FR18:** Tradesperson can enter or select a customer name and phone number before sending an invoice
- **FR19:** Tradesperson can send the invoice to a customer via SMS containing a Stripe payment link
- **FR20:** System delivers an SMS to the customer's phone in the format: "[Business Name] — Invoice #{number} for $[total]. Pay here: [link]"
- **FR21:** Customer can open the payment link on any mobile browser and view the invoice line items and total
- **FR22:** Customer can pay the invoice using a credit or debit card through the Stripe-hosted checkout without creating an account or installing an app
- **FR23:** System receives a Stripe webhook confirming payment and updates the invoice status to Paid
- **FR24:** Tradesperson receives a push notification within 30 seconds of a customer payment being confirmed
- **FR25:** System shows the customer a payment confirmation screen after successful payment

### Invoice Log & History

- **FR26:** Tradesperson can view a chronological list of all invoices showing customer name, invoice number, total amount, status (draft/sent/paid/overdue), and date sent
- **FR27:** Tradesperson can filter the invoice log by status (all, sent, paid, overdue) and by custom date range
- **FR28:** Tradesperson can tap any invoice in the log to view its full detail: line items, customer, sent date, payment date, and Stripe transaction ID
- **FR29:** Tradesperson can resend an invoice SMS to the customer from the invoice detail view
- **FR30:** Tradesperson can manually mark any invoice as paid to record cash, check, or out-of-band payments
- **FR31:** Tradesperson can export all invoices within a selected date range as a CSV file containing invoice number, customer name, date, line items, total, and payment status
- **FR32:** System marks an invoice as overdue if payment has not been received within the tradesperson's configured payment terms

### Business Profile & Onboarding

- **FR33:** Tradesperson can configure their business name, phone number, and address during onboarding; these appear on all invoices
- **FR34:** Tradesperson can upload a business logo (JPEG or PNG) that appears on the invoice header
- **FR35:** Tradesperson can connect a Stripe account via Stripe Connect during onboarding for direct deposit of collected payments
- **FR36:** Tradesperson can configure a default payment terms label (e.g., "Due on receipt," "Net 7") that appears on all invoices
- **FR37:** Tradesperson can update any business profile setting after initial onboarding from the account settings screen
- **FR38:** System provisions a dedicated Twilio SMS number for the tradesperson's account; all outbound invoice SMS messages originate from this number
- **FR39:** System validates an AppSumo LTD license code entered in account settings and upgrades the account to lifetime access, disabling recurring billing
- **FR40:** Tradesperson can view their current subscription plan and cancel from within the app without contacting support

---

## Non-Functional Requirements

### Performance

- **Voice processing:** From end of recording to invoice preview displayed: under 5 seconds on a standard 4G mobile connection
- **AI matching accuracy:** 85%+ of spoken line items matched to the correct price book entry on first attempt (measured against a standard test set of 100 trades-specific voice inputs)
- **Invoice preview load:** Preview screen renders with all line items within 2 seconds of AI processing completing
- **SMS delivery:** Twilio SMS delivered to customer within 10 seconds of tradesperson tapping Send
- **Customer payment page:** Full render of payment amount, line items, and Stripe UI within 3 seconds on a 4G connection
- **PWA cold start:** App interactive (not just loaded) within 3 seconds on a mid-range Android device (2023-era Samsung Galaxy A series)
- **Invoice log load:** List of 500+ invoices renders within 2 seconds

### Security

- **Data encryption:** All tradesperson and customer PII (names, phone numbers, addresses) encrypted at rest (AES-256) and in transit (TLS 1.3)
- **Payment security:** No card data handled by TradeVoice servers; all payment processing via Stripe PCI DSS Level 1 compliant infrastructure
- **Authentication:** Account access protected by email + password; passwords hashed with bcrypt (minimum cost factor 12); brute-force protection via rate limiting on login endpoint
- **Session management:** JWT tokens with 30-day expiry; device-level session revocation available from account settings
- **Customer payment links:** Each payment link is a time-limited signed token (72-hour default expiry, configurable to match payment terms); expired links surface a clear error page, not an application error
- **Audio data:** Voice recordings transmitted directly to Whisper API over HTTPS; not stored on TradeVoice servers after transcription is complete
- **Stripe webhook validation:** All Stripe webhook events validated with the Stripe-provided signature before processing to prevent fraudulent payment confirmation

### Scalability

- **User capacity:** System handles 10,000 monthly active users without architectural changes to core invoice and price book services
- **Invoice volume:** System handles 500,000 invoice records per month across all users
- **AppSumo launch spike:** System supports 300+ new account registrations per hour during AppSumo launch without degraded response times
- **Twilio throughput:** Account provisioned for 100 concurrent SMS outbound messages per second (Twilio Messaging Service with multiple long codes)
- **Whisper / GPT-4o API rate limits:** Client-side queuing implemented so bursts of concurrent voice invoice requests do not exceed OpenAI rate limits; maximum 10-second user-facing wait at peak load

### Reliability

- **Uptime:** 99.5% monthly uptime for all tradesperson-facing app functions
- **Invoice durability:** Zero invoice data loss; all sent invoices, payment records, and price book entries backed up to redundant storage daily with point-in-time recovery
- **Stripe webhook reliability:** Idempotency keys on all webhook handlers; at-least-once processing with deduplication to prevent duplicate Paid status updates
- **SMS delivery confirmation:** Twilio delivery status webhooks tracked for every sent SMS; undelivered messages surfaced to the tradesperson in the invoice log within 5 minutes

### Integration

- **OpenAI Whisper API:** REST API integration for audio transcription; fall back to a "transcription failed, type manually" state if API is unavailable; no silent failures
- **OpenAI GPT-4o:** REST API integration for semantic price book matching; structured output format (JSON with matched items and confidence scores); graceful degradation to "no match" low-confidence state if API returns unexpected output
- **Stripe Connect:** Standard Connect integration for tradesperson payment collection; support OAuth onboarding flow within the PWA without redirect to external site on mobile
- **Twilio Messaging Service:** Outbound SMS delivery with dedicated long codes per user; delivery status webhooks required; fallback number provisioning if primary long code is flagged for spam
- **Web Push (PWA):** VAPID-based push notifications for Chrome Android; iOS Safari Web Push support (available from iOS 16.4+); graceful degradation for browsers without push support

---

*PRD created by automated BMAD workflow on 2026-11-18. Source: product-brief-solo-tradesperson-voice-invoice.md (2026-11-17) and shortlisted idea file (scored 91/105, Tier 1). Ready for architecture and epic breakdown phases.*
