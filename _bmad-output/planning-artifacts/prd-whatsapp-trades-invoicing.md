---
stepsCompleted: [step-01-init, step-02-discovery, step-02b-vision, step-02c-executive-summary, step-03-success, step-04-journeys, step-05-domain, step-06-innovation, step-07-project-type, step-08-scoping, step-09-functional, step-10-nonfunctional, step-11-polish, step-12-complete]
inputDocuments:
  - ideas/shortlisted/whatsapp-trades-invoicing.md
  - _bmad-output/planning-artifacts/market-research-whatsapp-trades-invoicing.md
  - _bmad-output/planning-artifacts/brief-whatsapp-trades-invoicing.md
workflowType: 'prd'
lastStep: step-12-complete
date: '2026-05-19'
author: Root
classification:
  projectType: saas_b2c
  domain: fintech_payments
  complexity: medium
  projectContext: greenfield
---

# Product Requirements Document — WhatsApp-Based Invoicing for US Trades Workers

**Author:** Root
**Date:** 2026-05-19
**Status:** Complete

---

## Executive Summary

Self-employed US tradespeople (plumbers, electricians, carpenters, handymen, painters) manage their entire customer relationship inside WhatsApp but have no invoicing tool there. The result: skipped invoices, delayed payments, cash flow gaps, and zero paper trail. This product eliminates that friction by living entirely inside WhatsApp.

A contractor types `invoice $450 John Smith roof repair` into WhatsApp. Within 10 seconds, their client receives a branded PDF invoice with an embedded Stripe payment link — entirely within the existing conversation thread. No app to download, no login form, no browser to open.

The US WhatsApp-native invoicing market has no incumbent. With 100M+ US WhatsApp MAUs, 16.8M self-employed Americans, and a $7.84B global invoicing software market growing at ~15% annually, first-mover advantage is available now. The Spanish-speaking contractor segment — 41M+ US residents, near-universal WhatsApp adoption, zero Spanish-language invoicing product — is the highest-conviction beachhead.

Target: 530 paying subscribers at $19/month = $10,070 MRR by Month 12. MVP buildable in 6–8 weeks: WhatsApp Business API + Stripe Connect + PDF generation.

### What Makes This Special

**Zero context switching.** Every competitor requires leaving WhatsApp. This product never does. The core interaction lives in the thread where the job was quoted, the job was discussed, and the client already is.

**Natural language command parsing.** One sentence — "invoice $450 John roof repair" — creates a complete branded PDF. No fields, no forms, no navigation.

**Spanish-first for an underserved segment.** The bot auto-detects Spanish and responds in Spanish. No US invoicing product does this. The 41M+ Spanish-speaking US residents with dominant WhatsApp usage and tight community word-of-mouth represent a high-conversion beachhead.

**Viral distribution at the point of payment.** Every invoice carries "Powered by [ProductName]" attribution. Clients of existing users become unpaid discovery agents — contractors in the same trade networks discover the product the moment they receive an invoice.

**No app download, no login for trial.** First contact is sending a WhatsApp message. The "aha" moment (invoice created, sent to real client, paid) happens before any commitment is made.

## Project Classification

- **Project Type:** SaaS B2C / WhatsApp-native bot with minimal web dashboard
- **Domain:** Fintech (payments), Business Productivity
- **Complexity:** Medium — payment processing (Stripe Connect), third-party messaging API (WhatsApp Business API), multi-language NLP, PCI-DSS-adjacent data flows
- **Project Context:** Greenfield — no existing system, no brownfield constraints
- **Primary Platform:** WhatsApp Business API (Meta) + web dashboard (supplemental)

---

## Success Criteria

### User Success

- Contractor sends a real invoice to a real client via WhatsApp in under 5 minutes of completing onboarding (Month 3 target: <5 min; Month 12 target: <2 min)
- Contractor receives WhatsApp payment notification without opening any other app
- Contractor can review all invoices and payment status via a single web link without maintaining a separate login workflow
- Spanish-speaking contractor completes full onboarding and sends first invoice entirely in Spanish with zero English required
- Invoice-to-payment conversion rate exceeds 55% within Month 3 (65% Month 6, 75% Month 12), confirming clients pay from the Stripe link reliably

### Business Success

| Metric | Month 3 | Month 6 | Month 12 |
|--------|---------|---------|---------|
| Monthly Active Invoicing Users | 200 | 500 | 2,000 |
| Paying Subscribers | 50 | 200 | 800 |
| MRR | $950 | $3,800 | $15,200 |
| Monthly Churn Rate | <8% | <6% | <4% |
| Free-to-Paid Conversion | >15% | >20% | >25% |
| Gross Margin | >80% | >82% | >85% |
| Spanish-Language User Share | >40% | >35% | >30% |
| NPS | >35 | >45 | >55 |

**North Star Metric:** Monthly Active Invoicing Users (MAIU) — contractors who sent ≥1 invoice via WhatsApp in the last 30 calendar days.

**Leading Indicators:**
- Invoices sent per active user per month (target: ≥6)
- % new signups arriving via WhatsApp forward or Facebook Group share (referral rate)
- Free-tier invoice velocity: users who send 5 invoices within first 14 days (strong upgrade signal)

**Anti-Metrics (watch for problems):**
- Stripe Connect abandonment rate during onboarding (>30% = simplify payment setup)
- WhatsApp API invoice delivery failure rate (>5% = provider or policy issue)
- Churn spike after Meta API pricing changes (monitors platform risk)

### Technical Success

- Invoice PDF generated and delivered via WhatsApp within 10 seconds of command receipt for 95th percentile
- Zero invoice data loss — every command that parses successfully produces a stored invoice record
- WhatsApp message delivery success rate ≥99% for contractors in US phone numbers
- Stripe payment link functional within 30 seconds of invoice creation
- System handles 1,000 concurrent invoice commands without degradation (Month 12 scale requirement)

### Measurable Outcomes

**MVP Validation Gates (sequential decision points):**

**Gate 1 — Product Validation (Month 2):**
- 50+ contractors sent ≥1 real invoice via WhatsApp to a real client
- Invoice-to-payment conversion >50%
- Time-to-first-invoice averages <8 minutes
- Zero critical bugs in core loop (invoice generated → delivered → payable)

**Gate 2 — Business Model Validation (Month 3):**
- 30+ paying subscribers ($19/month or LTD)
- Monthly churn <10% among first paying cohort
- Free-to-paid conversion >12% among users who hit 5-invoice limit
- ≥5 organic referrals (new users with zero paid acquisition attribution)

**Gate 3 — Channel Validation (Month 4):**
- ≥2 Facebook Groups where product is discussed organically
- ≥1 Reddit thread with positive product reference
- ≥1 TikTok/Reels video with 5,000+ views demonstrating the product

**Decision Rule:** Gates 1+2 cleared → proceed to Scale. Gate 1 only → investigate pricing/upgrade flow. Gate 1 not cleared → reassess core UX loop before any other investment.

---

## Product Scope

### MVP — Minimum Viable Product (Phase 1)

**Scope Philosophy:** The MVP must deliver a single complete loop — WhatsApp message → professional PDF invoice → Stripe payment link → client pays → contractor notified. Every feature serves this loop or is deferred.

**Must-Have Capabilities:**

1. **Natural language invoice command parser** — parses `invoice $[amount] [client name] [job description]` in English and Spanish; handles common variations; returns corrective prompt on parse failure
2. **PDF invoice generation** — branded template with contractor name, logo (optional), job details, amount, auto-incremented invoice number, date; delivered as WhatsApp attachment
3. **Stripe Connect integration** — contractor onboards with Stripe Connect Express account; payment link auto-generated per invoice; standard Stripe fees (2.9%+$0.30) passed to contractor
4. **WhatsApp payment notification** — contractor receives "[Client Name] paid $[Amount] ✓" in WhatsApp when Stripe payment succeeds; declined payment notification on failure
5. **Free tier enforcement** — 5 invoices/month on free accounts; upgrade prompt at invoice #4 and #5; upgrade link to $19/month Stripe subscription page
6. **Minimal job log dashboard (web)** — invoice history (client, amount, date, status: paid/unpaid); accessible via WhatsApp-sent link on request; not required for core invoicing workflow
7. **Bilingual bot (English + Spanish)** — auto-detects contractor language at onboarding; all bot responses in contractor's language; PDF template in both languages; language change command: "language spanish" / "idioma ingles"
8. **Contractor onboarding flow** — triggered by first WhatsApp message; collects business name and language preference; guides Stripe Connect setup in ≤10 minutes; no prior account required for first contact

### Growth Features (Post-MVP, Phase 2)

**Target: Months 6–12 post-launch**

- Estimate generation — "estimate $450 John roof repair" → send estimate → convert to invoice on client approval
- Automated payment reminders — WhatsApp follow-up after invoice overdue by configurable interval
- Receipt generation — proof-of-payment receipt for completed jobs
- Client history — per-client job and invoice history accessible via WhatsApp command
- CSV/QuickBooks export — annual tax filing data export
- Payment reminder scheduling — contractor sets reminder cadence per invoice

### Vision (Phase 3 — Year 2+)

- Multi-user / team features — shared invoice access for small contractor teams; sub-contractor invoicing
- Latin American market expansion — Mexico, Colombia, Brazil; local payment processors (Mercado Pago, PIX)
- Voice-note invoice creation — audio transcription layer converts voice description to invoice
- Photo-to-invoice — multimodal AI converts handwritten job notes photo to invoice
- AI job cost estimating — historical invoice pattern analysis for proactive cost suggestions
- iMessage / SMS fallback — iOS-heavy market coverage where WhatsApp is less dominant

**Out of Scope for MVP (explicitly deferred):** lien waiver generation, HOA/insurance documentation, multi-user access, voice/photo input, Latin American localization, iMessage/SMS.

---

## User Journeys

### Journey 1: Carlos — Latino Solo Contractor (Primary Success Path)

Carlos is 34, from Mexico, working as a handyman and light carpenter in Dallas. He runs 4–6 jobs per week, billing $200–$1,200 per job. His phone is in Spanish. 90% of his business communication is WhatsApp. He currently doesn't formally invoice small jobs — cash, Venmo, or a screenshot of the agreed price in the WhatsApp thread.

**Opening Scene:** A trusted contact in the "Contratistas Hispanos USA" Facebook Group posts a 90-second video: "Miren, cómo mandar facturas desde WhatsApp en 10 segundos." Carlos watches during lunch on his phone.

**Discovery:** Carlos taps the link in the post description, which sends a pre-filled "Hola" message to the product's WhatsApp number. The bot greets him in Spanish and explains setup takes 5 minutes.

**Onboarding:** Bot collects his business name ("Reparaciones Carlos"). Bot sends a Stripe Connect link with step-by-step Spanish instructions. Carlos completes Stripe Connect Express in 8 minutes (has a debit card and SSN). Bot confirms: "¡Listo! Ya puedes mandar facturas."

**First Invoice:** Carlos just finished a bathroom tile job at a client's house. Still on site, he types: `factura $850 Maria Garcia reparación de azulejos baño`. Bot responds in 9 seconds with a PDF invoice attachment and a Stripe link message. Carlos copies the Stripe link and sends it in the existing conversation with Maria. Maria taps the link, enters her card details, pays in 2 minutes.

**Climax / Aha Moment:** Carlos's phone vibrates: "Maria Garcia pagó $850 ✓". He is still parked outside her house. He did not open a browser, did not log in anywhere, did not fill in a form. He types "gracias" to Maria and drives to his next job.

**New Reality:** Carlos now sends a formal invoice for every job over $200. His uncollected invoice rate drops. At tax time, his accountant pulls the job log from the web dashboard and has a complete record.

**Journey Requirements Revealed:** Spanish NLP parser, bilingual PDF template, Stripe Connect Express onboarding, WhatsApp payment notification, minimal web dashboard for tax records.

---

### Journey 2: Mike — English-Speaking Solo Handyman (Existing-Tool Switcher)

Mike is 42, suburban Ohio, 5–8 jobs/week at $300–$600 average. He uses Wave for jobs over $500 but skips invoicing for smaller jobs because "it takes too long."

**Opening Scene:** Mike sees a Reddit post on r/sweatystartup: "Anyone else hate opening Wave just to invoice a $200 job? Found this WhatsApp bot that does it in 10 seconds." Three comments agree. Mike clicks.

**Discovery:** The link goes to a landing page with a QR code linking to the WhatsApp bot. Mike scans it on his phone.

**Onboarding:** Bot greets him in English. Collects "Mike's Handyman Services." Guides Stripe Connect setup — Mike already has Stripe from a side project; Express connection takes 4 minutes.

**First Invoice:** At end of a fence repair job: `invoice $350 Bob Henderson fence repair backyard`. Invoice arrives in 8 seconds. Mike forwards the PDF and payment link to Bob in their existing WhatsApp thread.

**Edge Case — Parse Failure:** For a complex job, Mike types: `invoice $150 for the caulking and weatherstripping on the garage windows for Dave`. Bot replies: "I couldn't parse that clearly. Try: `invoice $150 Dave Williams garage weatherstripping` — is that right?" Mike confirms. Invoice sends correctly.

**Resolution:** Mike invoices every job regardless of size. His Week 1 invoice count: 7. He hits the free limit after 5 invoices. Bot sends upgrade prompt. He pays $19/month. "Honestly it's worth it — I was leaving $400/month on the table every month."

**Journey Requirements Revealed:** English NLP parser, parse error + correction flow, free tier hit + upgrade conversion, multi-invoice-per-day workflow for active contractors.

---

### Journey 3: Rosa — Small Cleaning Business Owner (Secondary User — Multi-Job Operator)

Rosa is 39, runs a residential cleaning business with 2 employees, 10–15 jobs/week at $150–$300 each. Clients want receipts. She's on Square Invoices Plus ($49/month) but hates that invoice delivery via email creates double-communication when clients respond in WhatsApp.

**Opening Scene:** A referral from another cleaning business owner in a Facebook Group for small cleaning businesses: "I switched from Square to this WhatsApp bot — saves me $30/month and clients pay faster."

**Discovery:** Rosa sends the first message to the bot number. Bot greets her, detects English.

**Onboarding:** Creates "Rosa's Clean Home." Connects Stripe. Her existing business bank is linked. Setup in 7 minutes.

**Core Usage:** After each cleaning appointment, Rosa types `invoice $175 Jennifer Wu weekly cleaning 2BR`. PDF goes to Jennifer in WhatsApp. Jennifer pays same afternoon (link is right there in the thread where they coordinate).

**Business Impact:** Rosa's average invoice-to-payment time drops from 3.2 days (email-based Square) to 4.1 hours (WhatsApp Stripe link, client sees it immediately). She replaces $49/month Square Plus with $19/month flat.

**Journey Requirements Revealed:** Repeat client invoicing (same client name reused across invoices), per-client invoice history, fast multi-invoice workflow, pricing advantage over transaction-fee tools.

---

### Journey 4: Client — Homeowner Paying an Invoice (Secondary Actor)

Jennifer receives a WhatsApp message from Rosa: a PDF attachment and a message "Hi Jennifer! Here's your invoice for today's cleaning. You can pay here: [Stripe link]."

Jennifer taps the link. A mobile-optimized Stripe checkout page opens in her browser. She enters her Visa card details. Payment processes. She returns to WhatsApp.

Rosa gets: "Jennifer Wu paid $175 ✓"

Jennifer receives a WhatsApp message: "Payment confirmed! Thank you, Jennifer. Receipt attached."

**Critical Success Factors for Client Journey:**
- Stripe link must open in mobile browser without requiring a Stripe account
- Checkout must be mobile-first (not desktop layout)
- "Powered by [ProductName]" attribution visible on checkout page (viral growth signal)
- Payment confirmation message returned to client in WhatsApp

**Journey Requirements Revealed:** Stripe Checkout (no-account payment flow), mobile-optimized payment page, post-payment confirmation to both contractor and client, branded attribution.

---

### Journey 5: Contractor — Dashboard & Bookkeeping (Operational Journey)

Carlos asks the bot: "muestra mis facturas". Bot replies: "Aquí está tu resumen: [link to web dashboard]." Dashboard shows 23 invoices from the last 30 days, 19 paid ($14,200), 4 unpaid ($2,100). Carlos screenshots it for his accountant.

**Journey Requirements Revealed:** Web dashboard with invoice list (client, amount, date, paid/unpaid), accessible via WhatsApp command, no separate login required (token-authenticated link), exportable data (CSV for bookkeeping — Phase 2).

---

### Journey Requirements Summary

| Capability Revealed | Journeys |
|---------------------|---------|
| Spanish NLP command parsing | Carlos (J1) |
| English NLP command parsing | Mike (J2), Rosa (J3) |
| Parse error + correction prompt | Mike (J2) |
| PDF invoice generation (branded, bilingual) | All contractor journeys |
| Stripe Connect Express onboarding | Carlos (J1), Mike (J2), Rosa (J3) |
| WhatsApp invoice attachment delivery | All journeys |
| Stripe payment link in WhatsApp message | All journeys |
| Mobile-optimized Stripe Checkout | Jennifer (J4) |
| Contractor WhatsApp payment notification | All contractor journeys |
| Client WhatsApp payment confirmation | Jennifer (J4) |
| Free tier enforcement + upgrade prompt | Mike (J2) |
| Web job log dashboard | Carlos (J1), Carlos (J5) |
| Dashboard accessible via WhatsApp command | Carlos (J5) |
| Repeat client name recognition | Rosa (J3) |
| Branded payment attribution | Jennifer (J4) |

---

## Domain-Specific Requirements

This product operates at the intersection of **payment processing (fintech)** and **messaging platform API** — both domains introduce specific compliance and operational constraints.

### Payment Processing (Stripe Connect — PCI-DSS Scope)

- All payment card data is handled exclusively by Stripe. The product never stores, transmits, or processes raw card numbers, CVV codes, or full PANs. This satisfies PCI-DSS SAQ-A scope (no card data touches product infrastructure).
- Stripe Connect Express is used for contractor accounts. Stripe handles KYC/AML verification for contractor payouts. Product is not responsible for contractor identity verification.
- Stripe payment links expire after 24 hours by default. Contractors must be notified when a link expires without payment (unpaid invoice follow-up flow).
- Payouts to contractors are handled by Stripe (standard 2-day payout cycle). Product does not hold funds in escrow.
- Transaction fee structure: 2.9%+$0.30 Stripe fee per transaction is disclosed to contractors during onboarding. Fee is deducted from contractor payout, not added to client invoice.

### WhatsApp Business API (Meta Platform Compliance)

- Product operates under WhatsApp Business API policy. WhatsApp utility messages (transactional, not promotional) are required for invoice delivery and payment notifications.
- Meta prohibits unsolicited marketing messages via WhatsApp Business API. All outbound messages must be in response to user-initiated conversations or pre-approved templates.
- WhatsApp message templates must be pre-approved by Meta before use in production. Invoice delivery, payment notification, and upgrade prompts require approved templates.
- Opt-in must be documented for each contractor and client. Contractors opt in at onboarding. Clients receive invoices in existing WhatsApp threads — no separate opt-in required for transactional messages.
- WhatsApp Business API has a 24-hour conversation window. Messages outside this window require template-based messaging with associated costs.

### Financial Data Handling

- Invoice data (client name, job description, amount, date, status) is stored in product database. This is PII under CCPA. Contractors own their invoice data and must be able to export it.
- No financial statements, tax calculations, or IRS reporting are generated. Product provides bookkeeping records, not tax advice.
- Contractor must connect a US bank account via Stripe to receive payments. International bank accounts not supported in MVP.

### Risk Mitigations

- **Platform concentration risk:** Build invoice PDF generation and job log as platform-agnostic. Future migration to iMessage/SMS API layer is possible if Meta policy becomes restrictive.
- **Stripe rate limits:** Stripe Connect has API rate limits. High-volume invoice creation (>100/minute per contractor) requires rate limiting at product layer.
- **WhatsApp API reliability:** WhatsApp API messages have delivery guarantees but can be delayed. System must handle async delivery confirmations and not assume synchronous delivery.
- **Chargeback fraud:** Contractors bear full risk of Stripe chargebacks under Connect Express model. Disclose chargeback policy clearly during onboarding.

---

## Innovation & Novel Patterns

### Detected Innovation Areas

**1. WhatsApp-Native Commerce Infrastructure for Blue-Collar US Market**
No US product currently occupies the WhatsApp-native invoicing position for tradespeople. India and Brazil have multiple WhatsApp invoicing tools (larger WhatsApp markets); the US is ~3–4 years behind. This product enters the US market before any competitor establishes a distribution moat.

**2. Natural Language Invoice Creation (Zero-Form Workflow)**
All existing invoicing tools require structured form input. This product accepts natural language in English and Spanish, extracts structured invoice fields, and generates a complete invoice document — eliminating the form entirely. The NLP parsing layer is the core product moat; improving accuracy and handling edge cases is the primary technical differentiator.

**3. Embedded Payment in Conversation Context**
Existing B2B invoicing tools deliver invoices via email to an inbox the client rarely checks. This product delivers to the WhatsApp thread where the job was discussed — the highest-attention inbox the client has. Payment conversion benefits from context: client sees the invoice immediately after a positive job experience.

### Market Context & Competitive Landscape

- Zero direct US competitors in WhatsApp-native invoicing for contractors (validated via market research)
- Closest adjacent: India (multiple WhatsApp invoicing tools); validates model works at scale in WhatsApp-dominant markets
- Incumbent tools (Wave, FreshBooks, Square) built for desk workers with browsers; architectural inertia prevents WhatsApp-native pivot
- Meta actively promoting WhatsApp Business API for commerce in the US ($[Meta's WhatsApp Business Platform] focus area 2024–2026)

### Validation Approach

- **MVP functional test:** Send invoice via WhatsApp, client pays via Stripe link, contractor receives notification — measured by first 50 real paying transactions
- **NLP accuracy test:** 95% successful parse rate on real contractor invoice commands (measured by parse failure events / total commands)
- **Spanish language test:** Spanish-language contractors complete onboarding and send first invoice without switching to English
- **Viral coefficient test:** Track what percentage of new signups arrive via "someone forwarded me an invoice with your bot"

### Risk Mitigation

- **Meta API policy change:** Build export/portability features early; maintain email/SMS fallback architecture design in Phase 2
- **NLP accuracy on edge cases:** Implement clear correction flow; log all parse failures to improve model; never silently fail
- **Stripe Connect onboarding abandonment:** A/B test simplified vs. standard Connect Express flow; monitor drop-off at each onboarding step

---

## SaaS B2C Specific Requirements

### Product Overview

WhatsApp-native SaaS with a WhatsApp bot as the primary interface and a minimal web dashboard as a supplemental read-only view. Subscription managed via Stripe Billing. No desktop app. No mobile app.

### Technical Architecture Considerations

- **Primary interface:** WhatsApp Business API webhook receiver → NLP parser → PDF generator → Stripe API → WhatsApp message sender
- **Secondary interface:** Web dashboard (read-only job log, token-authenticated, no separate login for MVP)
- **State storage:** Contractor account, invoice records, subscription status in relational database
- **PDF generation:** Server-side PDF rendering (Puppeteer or equivalent); branded template with contractor logo support in Phase 2
- **Language detection:** Per-contractor language preference stored at onboarding; auto-detection from first message language as fallback

### Multi-Tenancy Model

Each contractor is a separate tenant. Invoice data is tenant-isolated. Contractor A cannot access Contractor B's data. Tenant isolation enforced at database query layer (contractor_id scoping on all queries).

### Subscription & Billing

- Free tier: 5 invoices/calendar month; no credit card required for free tier
- Paid tier: $19/month; billed via Stripe Billing; contractor subscribes via Stripe Checkout link sent in WhatsApp
- LTD pricing: $49 one-time available during launch period via direct Facebook Group campaign; fulfillment via Stripe one-time payment + manual tier upgrade
- Stripe webhooks handle subscription state changes (activated, cancelled, past_due); bot enforces tier limits based on subscription status

### Onboarding Flow

1. Contractor sends first message → bot detects new user (no account found for phone number)
2. Bot greets in auto-detected language; asks for business name
3. Bot stores phone number + business name + language preference
4. Bot generates Stripe Connect Express onboarding link with pre-filled business details
5. Contractor completes Stripe Connect Express in external browser (3–10 minutes)
6. Stripe webhook notifies product that Connect account is active
7. Bot sends confirmation: "Setup complete. Try: `invoice $100 [Client Name] [Job]`"
8. Free tier active immediately; no email address required for MVP

### WhatsApp Integration Specifics

- Webhook receives inbound messages from WhatsApp Business API; processes synchronously
- Outbound messages use WhatsApp template messages (pre-approved) for invoice delivery and notifications
- PDF delivered as WhatsApp document attachment (not inline image)
- Stripe payment link delivered as plain-text URL in separate message after PDF (improves link tap rate on mobile)
- Bot phone number is a dedicated WhatsApp Business number (not shared with personal use)

### Implementation Considerations

- WhatsApp Business API provider: Twilio, 360dialog, or direct Meta API (evaluate rate limits and per-message pricing before vendor selection)
- Stripe Connect: Express accounts for MVP (fastest onboarding); Standard accounts for Phase 2 (if contractors need custom payout schedules)
- PDF template: Branded with contractor name; logo upload deferred to Phase 2 (adds S3/storage complexity)
- NLP parser: Rule-based regex for MVP (handle common patterns); upgrade to ML-based parser in Phase 2 as edge cases accumulate from logs

---

## Project Scoping & Phased Development

### MVP Strategy & Philosophy

**MVP Approach:** Experience MVP — deliver the single "aha" moment (invoice created and paid inside WhatsApp) with maximum polish on the core loop and minimum investment in adjacent features. Validate that contractors adopt it, clients pay through it, and contractors pay for it.

**Resource Requirements:** 1–2 engineers (Node.js or Python backend + minimal React web dashboard); 1 growth/marketing (Facebook Group outreach); 6–8 weeks to launch.

### MVP Feature Set (Phase 1)

**Core User Journeys Supported:**
- Carlos/Mike/Rosa happy path (invoice creation → PDF delivery → payment → notification)
- Client payment journey (Stripe link → mobile checkout → confirmation)
- Contractor dashboard access (WhatsApp command → web link)

**Must-Have Capabilities:**
- WhatsApp webhook integration + inbound message routing
- NLP invoice command parser (English + Spanish)
- PDF invoice generation + WhatsApp delivery
- Stripe Connect Express onboarding
- Stripe payment link generation per invoice
- WhatsApp payment notification to contractor
- WhatsApp payment confirmation to client
- Free tier (5 invoices/month) enforcement
- Upgrade flow via Stripe Billing
- Minimal web job log dashboard (invoice list, paid/unpaid status)
- Bilingual bot responses + bilingual PDF template

### Post-MVP Features (Phase 2 — Months 6–12)

- Estimate generation + estimate-to-invoice conversion
- Automated payment reminders (overdue invoice follow-up)
- Receipt generation for paid invoices
- Client history per contractor (repeat client auto-populate)
- CSV export for bookkeeping/tax
- Contractor logo upload for branded PDF
- Multi-language PDF templates (beyond English/Spanish)
- ML-based NLP parser upgrade (handle more edge cases)
- SMS/iMessage fallback for non-WhatsApp clients

### Phase 3 Expansion (Year 2)

- Multi-user team accounts (2–5 contractors per team)
- Sub-contractor invoicing workflow
- QuickBooks Online API integration
- Latin American market (Mexico, Colombia, Brazil)
- Voice-to-invoice and photo-to-invoice

### Risk Mitigation Strategy

**Technical Risks:**
- WhatsApp API rate limits on high-volume days → implement queue with retry for PDF generation + delivery
- PDF generation latency (>10s) → use pre-compiled PDF templates, async generation with WhatsApp "typing" indicator
- Stripe Connect onboarding abandonment → A/B test onboarding messaging; measure drop-off per step; provide recovery links

**Market Risks:**
- Acquisition cost exceeds $19/month LTV → rely on zero-CAC community channels (Facebook Groups, word-of-mouth) for first 500 users; no paid acquisition until unit economics validated
- Spanish-language market underperforms projection → English-first pivot possible; Spanish infrastructure remains as differentiator

**Resource Risks:**
- Single engineer builds MVP → architect for simplicity over scalability in Phase 1; use managed services (Heroku/Railway, Supabase) to minimize DevOps overhead
- Meta API access delayed → apply for WhatsApp Business API access before writing any code; use Twilio as backup provider

---

## Functional Requirements

### Contractor Account & Onboarding

- FR1: Contractor can register a new account by sending any message to the WhatsApp bot number without requiring prior account creation
- FR2: Contractor can set their business name during onboarding via WhatsApp conversation
- FR3: Contractor can set their preferred language (English or Spanish) during onboarding or at any time via command
- FR4: Contractor can connect a Stripe account to receive payments via a WhatsApp-delivered setup link
- FR5: Contractor can view their Stripe connection status by sending a status command to the bot
- FR6: Contractor can disconnect and reconnect their Stripe account via WhatsApp command

### Invoice Creation

- FR7: Contractor can create an invoice by sending a natural language command in the format `invoice $[amount] [client name] [job description]` in English
- FR8: Contractor can create an invoice using Spanish language commands (e.g., `factura $[cantidad] [nombre cliente] [descripción]`)
- FR9: Contractor receives a parse error with correction suggestion when an invoice command cannot be parsed into amount + client name + job description
- FR10: Contractor can confirm or edit a corrective invoice suggestion before it is finalized
- FR11: System auto-increments invoice numbers per contractor across all invoices
- FR12: System auto-assigns current date as invoice date on creation

### PDF Invoice Generation

- FR13: System generates a branded PDF invoice containing contractor business name, invoice number, invoice date, client name, job description, total amount, and a payment reference
- FR14: Contractor receives the PDF invoice as a WhatsApp document attachment within 10 seconds of a valid invoice command
- FR15: PDF invoice is generated in the contractor's preferred language (English or Spanish)
- FR16: Client name and job description are taken verbatim from the contractor's command (no truncation)

### Stripe Payment Integration

- FR17: System generates a unique Stripe payment link for each invoice immediately upon invoice creation
- FR18: Contractor receives the Stripe payment link as a WhatsApp message alongside the PDF invoice
- FR19: Client can pay the invoice via the Stripe link without creating a Stripe account
- FR20: Stripe payment link supports card payments (Visa, Mastercard, Amex); support for additional methods (Apple Pay, Google Pay) enabled if Stripe provides automatically
- FR21: System marks invoice as paid in the job log when Stripe webhook confirms payment completion
- FR22: System marks invoice as failed/declined in the job log when Stripe webhook confirms payment failure

### Notifications

- FR23: Contractor receives a WhatsApp notification within 60 seconds of client payment confirmation: "[Client Name] paid $[Amount] ✓"
- FR24: Contractor receives a WhatsApp notification when a payment attempt fails: "[Client Name]'s payment of $[Amount] failed"
- FR25: Client receives a WhatsApp confirmation in the invoice conversation thread when payment is completed

### Free Tier & Subscription Management

- FR26: New contractor accounts are limited to 5 invoices per calendar month on the free tier
- FR27: Contractor receives a WhatsApp warning when they send their 4th invoice in a month: "1 free invoice remaining this month"
- FR28: Contractor receives an upgrade prompt with subscription link when they attempt to send a 6th invoice on the free tier
- FR29: Contractor can subscribe to the paid tier ($19/month) via a Stripe Checkout link delivered in WhatsApp
- FR30: Paid tier contractors can send unlimited invoices per month
- FR31: Contractor receives WhatsApp notification when subscription payment fails (past_due status)
- FR32: Contractor loses paid tier benefits and reverts to free tier limits if subscription is cancelled or lapses

### Job Log Dashboard

- FR33: Contractor can request their invoice dashboard link by sending a command ("show my invoices" / "muestra mis facturas") to the bot
- FR34: Bot delivers a unique token-authenticated web URL to the contractor's WhatsApp
- FR35: Dashboard displays all contractor invoices with client name, job description, amount, date, and paid/unpaid status
- FR36: Dashboard is accessible without a separate login — authentication via URL token
- FR37: Dashboard invoice list is sortable by date (default: newest first) and filterable by paid/unpaid status

### Language & Localization

- FR38: Bot auto-detects contractor's language from first message and sets language preference accordingly
- FR39: All bot response messages are delivered in contractor's configured language
- FR40: Contractor can change language preference at any time via a language command
- FR41: Invoice PDF template text (labels, headers, footer) is rendered in contractor's configured language
- FR42: NLP parser handles both English and Spanish command syntax for invoice creation

### Admin & Operational

- FR43: System logs all inbound WhatsApp commands, parse outcomes, and invoice creation events for debugging
- FR44: System logs all Stripe payment events (created, paid, failed) with correlation to invoice records
- FR45: Operator can view aggregate metrics (total invoices sent, paid, failed; active users; subscription counts) via admin interface

---

## Non-Functional Requirements

### Performance

- NFR1: Invoice PDF generation and WhatsApp delivery completes within 10 seconds of valid command receipt for 95th percentile of requests
- NFR2: Stripe payment link generation completes within 5 seconds of invoice creation for 95th percentile
- NFR3: WhatsApp payment notification delivered to contractor within 60 seconds of Stripe payment confirmation webhook receipt
- NFR4: Web job log dashboard page loads within 3 seconds for contractors with up to 500 invoices, measured at 95th percentile

### Security

- NFR5: All data transmitted between product servers and WhatsApp API, Stripe API, and web dashboard clients uses TLS 1.2 or higher
- NFR6: Contractor invoice data is stored with tenant isolation — no query path allows cross-contractor data access
- NFR7: Dashboard token-authenticated URLs expire after 7 days; contractor must request a new link via WhatsApp after expiry
- NFR8: No payment card data (PAN, CVV, expiry) is stored or logged in product infrastructure — all card data handled exclusively by Stripe
- NFR9: WhatsApp webhook endpoint validates Meta webhook signature on every inbound request; unsigned requests return 401
- NFR10: Stripe webhook endpoint validates Stripe signature on every inbound event; unsigned events return 401

### Reliability

- NFR11: Core invoicing loop (command receipt → invoice creation → WhatsApp delivery) achieves 99.5% successful delivery rate measured monthly
- NFR12: System queues invoice generation requests and retries WhatsApp delivery up to 3 times on temporary API failure before marking as failed and notifying contractor
- NFR13: Stripe webhook processing achieves idempotent handling — duplicate webhook delivery does not create duplicate payment notifications or invoice state changes

### Scalability

- NFR14: System architecture supports horizontal scaling to handle 1,000 concurrent invoice commands without degradation, achieved through stateless backend workers
- NFR15: Database schema supports 10M+ invoice records without query performance degradation (indexed on contractor_id, created_at, status)
- NFR16: WhatsApp API message queue handles burst traffic of 500 messages/minute without exceeding provider rate limits

### Integration

- NFR17: WhatsApp Business API provider integration must support webhook delivery with <5 second latency for 95th percentile of messages
- NFR18: Stripe Connect Express account creation completes the OAuth flow within a single browser session (no multi-day verification requirement for standard US bank accounts)
- NFR19: System must handle WhatsApp Business API provider outages gracefully — inbound commands processed from retry queue when provider recovers; no commands silently dropped

---

*PRD generated: 2026-05-19*
*Based on: Shortlisted idea (score 83/105) + market research + product brief*
*Next step: Architecture → `bash run-automvp.sh --idea whatsapp-trades-invoicing --step architecture`*
