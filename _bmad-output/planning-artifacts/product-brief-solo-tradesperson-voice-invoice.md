---
stepsCompleted: [1, 2, 3, 4, 5]
inputDocuments:
  - ideas/shortlisted/solo-tradesperson-voice-invoice.md
  - _bmad-output/planning-artifacts/market-research-solo-tradesperson-voice-invoice.md
date: 2026-11-17
author: Root
workflowType: product-brief
idea: solo-tradesperson-voice-invoice
---

# Product Brief: Solo Tradesperson Voice-to-Invoice (TradeVoice)

---

## Executive Summary

TradeVoice is a voice-first invoicing tool for solo tradespeople — electricians, plumbers, HVAC techs, and handymen — who dread the administrative act of typing invoices on a cracked phone after a 10-hour day on the tools.

The core insight is surgical: the bottleneck for solo tradespeople is not the lack of invoicing software (Jobber, ServiceM8, and Invoice2go all exist). The bottleneck is **the keyboard**. Typing "1× Circuit breaker replacement, labor 2hrs @$85/hr, parts $45" on a dirty touchscreen after physical work is exactly painful enough that tradespeople routinely delay invoices, lose revenue, and hate admin.

TradeVoice eliminates the keyboard from the invoicing flow entirely. A tradesperson speaks the job at the job site — "two hours labor, replaced one 15-amp circuit breaker, travel charge 30 minutes" — and the AI matches spoken items against their saved price book, generates a line-item invoice with correct prices, and delivers a Stripe payment link via SMS or WhatsApp. The customer pays from their phone without installing anything. Money arrives next day.

The product targets 2M+ solo contractors in the US, is priced at $19/month or $39 as a Lifetime Deal for AppSumo, and can be built as a PWA MVP in 3 weeks using Whisper (voice), GPT-4o (price book matching), Twilio (SMS), and Stripe (payments). No voice-first invoicing tool currently offers a persistent saved price book plus SMS/WhatsApp delivery plus a trades-specific vocabulary — that combination is the moat.

**Verdict: BUILD. Score 91/105. Tier 1.**

---

## Core Vision

### Problem Statement

Solo tradespeople — electricians, plumbers, HVAC techs, handymen — are running 1-person businesses from their truck. After 8-10 hours of physical labor, they face a final obstacle before they get paid: typing out a detailed invoice on a small, often cracked, often dirty smartphone screen.

The specific friction is not "invoicing is hard." The friction is the **keyboard**. Describing labor hours, parts used, model numbers, and prices by typing on a touchscreen — with calloused, tired hands — is physically unpleasant and mentally exhausting after a full day of skilled physical work. Many tradespeople delay invoicing until end-of-day or end-of-week, creating a cash flow gap. Some under-invoice because they can't remember all the parts used by the time they sit down to type.

The pain is confirmed directly by the community that knows this space best:

> "You nailed it, the bottleneck is the keyboard not the feature list." — r/skilledtrades

> "Most apps are designed for people with 'office hands' — clean, nimble fingers that spend all day on a keyboard. When you take those same apps and try to use them with hands that are calloused, dirty, or just tired from 8 hours of physical labor, the experience is a nightmare." — SmasInvoices

> "3 Million Solo Contractors Quote Jobs From Notepads. The Mid-Tier App That Doesn't Exist." — MicroGaps

### Problem Impact

The quantified cost of this friction is significant:

- Tradespeople spend an average of **5 hours 20 minutes per week** on invoicing, quoting, and payment collection admin
- 56% of small businesses have unpaid invoices; average outstanding balance is $17,500 per business
- At $60-$80/hr effective labor rate, 5 hours of weekly admin = **$300–$400/week in unbillable time**
- Delayed invoicing creates the single biggest cash flow problem for solo operators: the gap between job completion and customer payment

Beyond cash flow, the emotional toll is real. For tradespeople who love their craft and took the leap to go independent, admin is the part that makes them question whether it was worth it. The keyboard bottleneck turns a 10-minute job into a 20-minute ordeal at the worst possible time of day.

### Why Existing Solutions Fall Short

**Overkill FSM platforms (Jobber $49-$499/mo, HouseCallPro $79-$329/mo)**
Built for multi-technician operations with crew dispatch, scheduling, CRM, and job management. Solo operators pay $49-$499/month for features they will never use. The invoicing UX is still keyboard-first — the platform adds complexity, not simplicity.

**Mobile invoice apps (Joist $10-$32/mo, Invoice2go $5.99-$39.99/mo)**
Keyboard-first by design. Better than the FSM platforms for price and simplicity, but the core interaction is still: tap field → type text → tap next field → type price → repeat for every line item. No voice. No price book. Payment delivery is usually email PDF.

**Voice invoice apps (Billio $4.99-$6.99/mo, VoiceInvoice $15/mo, TradeInvoice)**
The category now has 7+ entrants (emerged 2024–2026). None of them solve the whole problem:
- **Billio**: Voice input exists but generic freelancer positioning; no saved price book; email-only delivery
- **TradeInvoice**: Trades-focused, iOS-only; basic voice ("say $350"); no price book
- **VoiceInvoice**: Web + mobile, $15/month; voice input; no price book; no SMS/WhatsApp delivery
- **Invoice AI**: Trades-focused; voice; details unclear

The critical missing piece across all voice apps is the **saved price book**. Without it, voice input just dumps spoken text into a blank invoice and the user must still look up and type every price. The AI can hear "circuit breaker 15-amp" but it doesn't know that in your price book that part costs $45. The user ends up doing the hard part anyway.

**ServiceM8**: Australian-centric, subscription, keyboard-first.

**The unoccupied position**: Voice-first invoicing for US solo tradespeople with (1) a persistent saved price book the AI matches against, (2) SMS/WhatsApp payment link delivery so customers pay from their phone, (3) trades-specific vocabulary, and (4) a one-time LTD option.

### Proposed Solution

**TradeVoice** — Voice-first invoice creation for solo tradespeople.

**The core flow:**

1. **One-time setup (< 10 minutes)**: Enter your price book — labor rate(s), common parts with prices. The AI learns your vocabulary and your rates.
2. **At the job site — tap record**: Speak the job naturally: "Two hours labor, replaced one 15-amp circuit breaker, travel charge half hour."
3. **AI parses and matches**: Whisper transcribes the speech. GPT-4o matches each item to the saved price book, pulls the correct prices, and generates a fully itemized invoice.
4. **Review in 10 seconds**: See the invoice preview on screen. Prices are pre-filled. Tap to adjust anything.
5. **One-tap send**: Customer receives an SMS or WhatsApp message with a Stripe payment link. No account needed. They pay from their phone in 60 seconds.
6. **Money lands next day**: Stripe direct deposit.

The entire process from "job done" to "invoice sent" takes under 2 minutes. No typing. No looking up prices. No emailing PDFs the customer might not open.

### Key Differentiators

**1. The Price Book is the Moat**
No competing voice invoice app has a persistent, AI-matched price book. TradeVoice is the only tool where speaking "circuit breaker 15A" automatically populates the correct part price from the tradesperson's own saved rates. This is the difference between a speech-to-text convenience and a billing intelligence system.

**2. SMS/WhatsApp > Email PDF**
SMS payment links have 98% open rates vs ~20% for email. Sending a payment link via SMS or WhatsApp (which the customer is already using) dramatically reduces the gap between "invoice sent" and "customer pays." Joist, Invoice2go, and all current voice apps default to email.

**3. Voice-First, Not Voice-Added**
Competing apps added voice as a feature on top of a keyboard-first UX. TradeVoice is designed keyboard-free from the ground up. The primary interaction is speaking. Typing is the fallback, not the default.

**4. Trades-Specific Vocabulary**
Built for how tradespeople actually talk on the job — "15-amp breaker," "90 minutes HVAC diagnostic," "half-inch copper elbow" — not how a freelance graphic designer invoices. The AI is trained on trades vocabulary.

**5. Priced for Solo Operators**
$19/month or $39 LTD. No feature-gating. Unlimited invoices. No percentage cut of invoice amounts (Joist charges 3.49% on payments). Payment processing via Stripe at standard rates (2.9% + 30¢) goes directly through the user's own account.

**6. No LTD Competition**
As of 2026-11-17, no voice invoice app offers a Lifetime Deal on AppSumo or comparable platforms. The $39 LTD is a unique position in the category that will drive initial acquisition and community buzz.

---

## Target Users

### Primary Users

**Persona 1: Marcus — Solo Electrician, 12 Years Experience**

*Background:* Marcus, 42, runs a one-man electrical contracting business in suburban Ohio. He went independent six years ago after working for a large contractor, and he earns ~$95K/year doing residential service calls, panel upgrades, and new construction rough-ins. He works 8-10 hour days, drives a 2019 F-150 loaded with parts.

*Current invoicing reality:* Marcus invoices from the truck before he leaves the job site. He uses Invoice2go because his old app raised prices. It takes him 15-20 minutes per invoice because he has to type every line item — description and price — from memory. He sometimes forgets parts he used, especially on complex jobs. He's lost hundreds of dollars in un-billed parts over the years.

*Phone situation:* Samsung Galaxy with a cracked corner. Protective case makes the touchscreen slightly laggy. He uses it one-handed while resting on the steering wheel. Typing accuracy is about 70% when his hands are cold.

*What success looks like:* Marcus finishes a circuit breaker job, sits in the truck, taps record, says "two hours labor, replaced one 15-amp Siemens breaker, two wire nuts," and watches the invoice fill itself with his correct prices. He taps send. The customer texts him back "paid!" while he's still pulling out of the driveway.

*Key motivation:* Getting paid the same day he does the work, not chasing invoices three days later.

---

**Persona 2: Rosa — Solo HVAC Tech, Just Went Independent**

*Background:* Rosa, 34, spent 8 years as a technician for a regional HVAC company. She took the leap to go independent 14 months ago. She services residential units — tune-ups, refrigerant recharges, emergency repairs — and is building a client base. She earns ~$72K and is growing.

*Current invoicing reality:* Rosa uses a free version of a generic invoicing app. She has two free invoices per month — anything above that requires a paid plan she hasn't committed to yet. She's been keeping notes in Apple Notes and invoicing at the end of the week, which means cash flow is uneven and she sometimes can't remember what parts she used on Tuesday.

*Phone situation:* iPhone 13, good condition. Comfortable with apps. Uses WhatsApp for most client communication because her clients are predominantly Spanish-speaking and that's how they prefer to communicate.

*What success looks like:* Rosa finishes a refrigerant recharge, records the job details with her voice, and sends the customer a WhatsApp payment link they can tap to pay while she's still at their house. She gets a push notification confirming payment before she starts her truck.

*Key motivation:* Getting paid before she leaves the job site. Cash flow predictability as a new independent.

---

**Persona 3: Dave — Handyman, 55, Not Tech-Forward**

*Background:* Dave, 55, does handyman work — odd jobs, drywall repair, fixture installation, minor plumbing. He charges $65-$80/hour plus parts. He's comfortable with his phone for calls and texts but doesn't use apps much. He currently writes invoices by hand and photographs them, or texts customers a number.

*Current invoicing reality:* Dave doesn't invoice systematically. He texts customers what they owe. Sometimes he forgets to follow up. He loses ~$300-500/month to unbilled or uncollected work.

*What success looks like:* Dave's son sets up TradeVoice for him in 20 minutes at Thanksgiving. Dave sees that he can speak a job and get a payment link in 90 seconds. He starts using it because the barrier is low enough — there's no learning curve, just talking.

*Key motivation:* Getting paid reliably without thinking about it. Simplicity over features.

---

### Secondary Users

**The Spouse / Partner Admin**
Many solo tradespeople have a spouse or partner who helps with admin — invoicing at end of week, chasing unpaid invoices, filing. This user will appreciate the price book being pre-configured and the invoice log being clean. They are not the primary user (they're not on the job site) but they influence renewal decisions. The team tier ($29/mo) with 3 users directly serves this scenario.

**The Transitioning Employee**
An employed tradesperson who is thinking about going independent and wants to know what admin looks like. They are pre-customers — they discover TradeVoice through Reddit communities and use it as validation that going solo is manageable.

---

### User Journey

**Discovery:**
- Reddit: Sees a post in r/electricians or r/skilledtrades — "Built a voice invoice app for solo trades — speak your job, it generates the invoice, customer pays from SMS link"
- Word of mouth from another tradesperson ("Marcus told me about this app — he sends invoices in 2 minutes now")
- AppSumo: Sees $39 LTD while browsing deals

**Onboarding (target: < 10 minutes to first invoice):**
1. Download PWA or install from app store
2. Enter business name, logo (optional), payment info (Stripe connect)
3. Set up price book: enter 5-10 common line items (labor rate, 3-5 most-used parts with prices)
4. Send a test invoice to themselves via SMS
5. "Aha!" moment: sees the invoice arrive on their phone, taps the payment link, sees how the customer experience works

**Core Usage (day-to-day):**
- Finish job → tap record → speak job description → review 10-second preview → tap send
- Invoice log shows all sent/paid/pending invoices with payment status
- Customer receives SMS with link → taps → pays via Stripe → user gets push notification

**Success Moment:**
The first time a customer pays before the user leaves the job site. For Marcus, this happens on day 2. For Rosa, this happens during onboarding when she re-invoices a client who hadn't paid her from last week.

**Long-term Routine:**
- Price book becomes a living document — tradesperson adds parts as they encounter them, prices update when supplier costs change
- Monthly invoice log becomes their business record (exportable for accountant)
- LTD users become advocates: post about it on Reddit, share with other tradespeople
- When first helper is hired, upgrade to team tier

---

## Success Metrics

### User Success Metrics

| Metric | Target | Why It Matters |
|--------|--------|---------------|
| Time from job completion to invoice sent | < 2 minutes | Core promise: eliminate keyboard bottleneck |
| Onboarding completion rate (price book set up) | > 70% | Price book is the moat — if users don't set it up, the product is just voice-to-text |
| Day-7 retention | > 60% | Solo tools live or die on habit formation in first week |
| Invoices sent in first 7 days per active user | > 3 | Usage frequency validates the tool is part of the workflow |
| Customer payment-from-SMS rate | > 60% within 48hrs | SMS/WhatsApp delivery is the second key differentiator — must outperform email |
| NPS at Day 30 | > 50 | Tradespeople recommend tools peer-to-peer; NPS drives organic growth |

**The defining user success signal:** A user who sets up their price book AND sends at least 3 invoices in week 1 will retain at 90%+ rates. The first week is the critical window.

### Business Objectives

**Month 3 (post-launch):**
- 300+ active paying users (subscription + LTD)
- AppSumo LTD campaign launched and generating community presence
- Reddit community presence established (r/skilledtrades, r/sweatystartup, r/electricians threads with organic engagement)
- Product/market fit signal: Day-30 retention > 55%

**Month 6:**
- 800+ paying users
- $10K+ MRR from subscription users (excludes LTD)
- 5+ customer testimonials/case studies for use in marketing
- WhatsApp Business API approved and deployed
- iOS + Android native apps submitted (PWA in parallel during approval)

**Month 12:**
- 2,000+ paying users
- $25K+ MRR
- Team tier contributing 15%+ of MRR
- AppSumo review count > 50 with 4.5+ stars
- Clear data on which trade verticals (electricians vs plumbers vs HVAC) have highest retention

### Key Performance Indicators

**Acquisition KPIs:**
- Monthly new signups from Reddit community posts (track UTM)
- AppSumo LTD units sold (target: 500 units in launch window)
- Cost per acquisition via Reddit vs paid vs organic
- App Store/Play Store ranking in "invoicing" category

**Activation KPIs:**
- Price book completion rate at onboarding (% of signups who add ≥3 items to price book)
- First invoice sent within 24 hours of signup (target: > 50%)
- Time-to-first-invoice (median target: < 8 minutes from signup)

**Retention KPIs:**
- Week-1, Week-4, Month-3 cohort retention
- Monthly invoice volume per active user (leading indicator of retention)
- Churn reason survey response (top 3 reasons for cancellation)

**Revenue KPIs:**
- MRR growth month-over-month
- LTD revenue total (one-time, feeds into working capital)
- Upgrade rate from solo ($19) to team ($29) tier
- Stripe payment processing volume per user (indicator of invoice value and frequency)

**Competitive KPIs:**
- Billio App Store rating vs TradeVoice (track monthly)
- Voice invoice app landscape changes (new entrants, price changes, feature launches)

---

## MVP Scope

### Core Features

The MVP is a Progressive Web App (PWA) deployable in 3 weeks. It delivers the complete core loop — voice → AI match → invoice → SMS payment link — with no features beyond what is needed to validate the price book + SMS delivery combination.

**Feature 1: Price Book (The Moat)**
- Simple form UI to add line items: description + unit price + unit of measure
- Supports labor (per hour) and parts/materials (per unit)
- Minimum viable: 50 items maximum for MVP, unlimited in v1.1
- Must complete in < 10 minutes during onboarding
- Pre-populated with 5 starter templates per trade type (electrician, plumber, HVAC, handyman) to reduce setup friction

**Feature 2: Voice Invoice Creation (The Core UX)**
- Tap-to-record button (large, can be operated with a gloved thumb)
- Whisper API transcription of spoken job description
- GPT-4o matching of transcribed items to price book entries
- Confidence scoring: high-confidence matches auto-fill; low-confidence matches prompt user to confirm or select alternative
- Invoice preview screen showing matched line items with prices
- Inline edit capability (tap any line item to modify before sending)

**Feature 3: Invoice Delivery via SMS (The Differentiator)**
- Twilio SMS delivery of a Stripe payment link
- Customer receives: "Marcus from M&M Electric — your invoice for $285 is ready. Pay here: [link]"
- Payment link opens Stripe Checkout (no account needed for customer)
- User receives push notification when customer pays
- Stripe Connect for user's direct deposit setup during onboarding

**Feature 4: Invoice Log**
- List view of all sent invoices: customer name, amount, status (sent/paid/overdue)
- Tap to resend or mark as paid manually
- Basic date range filter
- CSV export (for accountant use)

**Feature 5: Business Profile**
- Business name, logo, address (appears on invoice)
- Default payment terms (e.g., "Due on receipt")
- Stripe Connect setup
- Twilio SMS number provisioning (one dedicated number per user account)

### Out of Scope for MVP

The following features are explicitly deferred to v1.1 or later:

| Feature | Reason Deferred |
|---------|----------------|
| WhatsApp delivery | Requires Meta BSP approval (2-4 weeks); SMS achieves same outcome immediately |
| Native iOS app | App Store approval takes 2-7 days; PWA ships Day 1 |
| Native Android app | Same as iOS; PWA is the MVP |
| Photo receipt → line items | Adds complexity to MVP; core voice flow must be validated first |
| Quote → invoice conversion | Different workflow; not the primary pain point |
| Scheduling / job management | Out of scope permanently for solo tier; overkill |
| CRM / customer management | Explicitly NOT building Jobber; customer is just a name + phone number in MVP |
| Multi-currency | US market only for MVP |
| Recurring invoices / subscriptions | Not relevant to per-job trades work |
| Integrations (QuickBooks, Xero) | Phase 2; CSV export covers accountant use case for MVP |
| Team tier | v1.1; validates solo tier first |
| In-app payments reporting / analytics | v1.1; Stripe dashboard covers this for MVP users |
| Offline mode | Deferred; requires service worker complexity; tradespeople have LTE |

### MVP Success Criteria

The MVP is successful and justifies continued investment when:

1. **Price book adoption > 70%**: More than 70% of signups complete price book setup during onboarding. If this falls below 50%, the onboarding flow needs redesign before scaling.

2. **Week-1 retention > 55%**: Users who send at least 1 invoice in week 1 return in week 2. Below 40% signals a product problem, not a marketing problem.

3. **Customer payment-from-SMS > 55%**: Of invoices sent via SMS, more than 55% are paid within 48 hours. This validates the SMS delivery hypothesis over email PDF. Below 40% requires investigation (wrong customer demographic? SMS content? Stripe friction?).

4. **100 paying users in 60 days post-launch**: Validates that the $19/mo price point and the Reddit/AppSumo go-to-market channels work at minimum scale.

5. **NPS > 40 at Day 30**: Solo tradespeople recommend tools to each other in community forums. NPS > 40 means the product is generating organic word-of-mouth.

If all 5 criteria are met at 60 days, proceed to: WhatsApp delivery, native apps, and team tier.

### Future Vision

**v1.1 (Month 3-4):**
- WhatsApp delivery (post BSP approval)
- Native iOS + Android apps (submitted during PWA launch, approved by now)
- Team tier — up to 3 users, shared price book, $29/month
- Unlimited price book items
- Photo receipt → AI adds materials to invoice

**v2.0 (Month 6-9):**
- Quote → invoice conversion: speak a quote, convert to invoice after job completion
- Deposit/partial payment requests on larger jobs
- Job notes (photos, voice memos) attached to invoice record
- Accountant-ready reports (P&L summary by month)
- In-app Stripe payment analytics dashboard

**v3.0 / Long-term (Year 2+):**
- Multi-trade expansion: pest control, landscaping, cleaning — same voice + price book model for other "sweaty startups"
- Franchise / franchisor tier: multi-location operators with centralized price book management
- Parts supplier integration: price book auto-updates when supplier prices change (via Grainger, Ferguson, etc. API)
- AI-suggested pricing: "You charged $45 for this breaker in January — the market rate has moved to $52, want to update your price book?"
- Platform play: TradeVoice becomes the billing layer for solo service businesses across all verticals

The long-term vision is a billing intelligence platform for the independent service economy — the voice invoice app for solo tradespeople is the beachhead, proven and defensible, that expands into adjacent verticals once the core model is validated.

---

## Appendix: Competitive Positioning Map

| | Voice Input | Saved Price Book | SMS/WhatsApp Delivery | Trades-Specific | LTD Option | Price |
|---|---|---|---|---|---|---|
| **TradeVoice** | ✅ Core | ✅ Core | ✅ Core | ✅ | ✅ $39 | $19/mo |
| Billio | ✅ | ❌ | ❌ Email only | ❌ Generic | ❌ | $4.99-$6.99/mo |
| TradeInvoice | ✅ Basic | ❌ | ❌ | ✅ | ❌ | Unknown |
| VoiceInvoice | ✅ | ❌ | ❌ Email | ❌ | ❌ | $15/mo |
| Joist | ❌ | ❌ | ❌ Email | Partial | ❌ | $10-$32/mo |
| Invoice2go | ❌ | ❌ | ❌ Email | ❌ | ❌ | $5.99-$39.99/mo |
| Jobber | ❌ | ❌ | ❌ | ✅ | ❌ | $49-$499/mo |

**TradeVoice is the only tool that combines all five differentiators simultaneously.**

---

## Appendix: Go-to-Market Summary

**Channel 1 — Reddit Community Posts (Week 1)**
- r/skilledtrades: "Built a voice invoice app for solo trades — speak your job, it generates the invoice, customer pays from SMS link"
- r/sweatystartup: "The bottleneck is the keyboard, not the features — built to solve that specifically"
- r/electricians, r/Plumbing, r/hvacadvice: Subreddit-specific posts with trade-relevant copy
- Target: 200+ signups from initial launch posts; 50+ comments with community validation

**Channel 2 — AppSumo LTD (Week 2-4)**
- $39 LTD: solo, lifetime, unlimited invoices
- First mover in voice invoice LTD category
- Target: 500 LTD units in launch window
- AppSumo community overlap with r/sweatystartup and r/entrepreneur is high

**Channel 3 — TikTok/YouTube Shorts Demo (Ongoing)**
- 60-second video: voice → invoice → customer pays from SMS, all while standing next to the truck
- Target: 100K views on best-performing short within 60 days
- Distribution: TikTok trades community (#tradestok, #electrician, #plumber)

**Channel 4 — Paid (Month 2+)**
- Google Ads: "invoice app for electricians," "voice invoice app for plumbers," "invoicing app for solo contractors"
- Target: CAC < $40 (less than 3 months of subscription revenue)
- Scale only after organic channels validate messaging

**Pricing:**
- $19/month — solo, unlimited invoices, 1 user
- $29/month — team, up to 3 users, shared price book
- $39 LTD — solo, lifetime, up to 500 invoices/month

**Payment processing:** Standard Stripe rates (2.9% + 30¢) pass directly to user. TradeVoice takes no percentage of invoice amounts.
