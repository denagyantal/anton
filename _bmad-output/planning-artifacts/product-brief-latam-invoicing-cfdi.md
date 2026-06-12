---
stepsCompleted: [1, 2, 3, 4, 5, 6]
inputDocuments: ['ideas/shortlisted/latam-invoicing-cfdi.md', '_bmad-output/planning-artifacts/market-research-latam-invoicing-cfdi.md']
workflowType: 'product-brief'
topic: 'latam-invoicing-cfdi'
date: '2026-06-12'
author: 'Root'
---

# Product Brief: LATAM CFDI Invoicing — FacturaMX

## Executive Summary

FacturaMX is a Spanish-first, mobile-native invoicing platform built natively for Mexico's CFDI 4.0 tax compliance mandate — the regulatory moat that no machine-translated US tool can cross. Every registered Mexican business is legally required to issue digitally certified electronic invoices through the SAT (tax authority) in real time; non-compliance carries sanctions, public blacklisting, and criminal liability under Mexico's 2026 Tax Reform.

The core opportunity is structural: QuickBooks exited the Mexican market in April 2023, leaving 500,000–1,000,000 displaced SMBs seeking alternatives. The surviving modern cloud option (Alegra) caps invoice volume per tier and charges separately for its accounting module — doubling the effective cost at the segment that needs it most. Legacy desktop incumbents (CONTPAQi, Aspel/Siigo) dominate by installed base but are desktop-only, expensive, and irrelevant to mobile-first micro-businesses.

The unoccupied gap: a single tool delivering CFDI 4.0 invoice stamping + payment tracking + RESICO-compatible accounting output + a contador partner portal, priced at $249–$999 MXN/month ($12–$49 USD), with a mobile-responsive interface designed for tradespeople and freelancers issuing invoices from a job site.

Mexico's e-invoicing market is $190.8M in 2024 growing at 15.1% CAGR; SaaS penetration in LATAM SMBs is under 10%, meaning the adoption wave is just beginning. Even 0.1% penetration of the 4.2M Mexican SMB market at $39 USD/month = $1.97M ARR. The regulatory mandate creates non-optional demand and near-zero churn once workflow is established. Revenue model: MRR-only (LTD not viable for compliance products in LATAM purchasing culture).

---

## Core Vision

### Problem Statement

Mexican SMBs — plumbers, electricians, freelancers, food vendors, cleaning services, and every other registered business — are legally required to issue CFDI 4.0 compliant electronic invoices. Every invoice must be digitally signed using the business owner's RFC (tax ID) and CSD (digital certificate), then stamped in real time through a government-authorized PAC (certified provider) API before the invoice is legally valid. This is not optional: the 2022 enforcement tightening and 2026 SAT Reform have made compliance existential.

The problem is that every available tool fails micro-businesses in one of three ways:

1. **US tools** (QuickBooks, FreshBooks, Wave, Xero) — don't generate CFDI-compliant XML at all; legally unusable in Mexico regardless of price.
2. **Legacy desktop incumbents** (CONTPAQi, Aspel/Siigo) — desktop-only software requiring on-premise installation; designed for mid-sized companies with IT staff; $4,000–$10,000+ MXN/year licensing; no mobile invoicing; accountant-managed workflow that leaves the business owner locked out.
3. **Modern cloud tools** (Alegra) — the closest to the right solution, but invoice volume caps (50/month on entry tier) break the workflow for any active business; accounting module adds $499+ MXN/month as a separate subscription; not optimized for the RESICO simplified tax regime serving 3M+ Mexican freelancers.

The result: Mexico's 3M+ RESICO freelancers and 2M+ micro-SMB service providers are stuck issuing invoices through SAT's unusable free portal, manually tracking payment status in WhatsApp conversations, and relying on an external contador (accountant) to manage a fragmented tooling stack that costs 3–8 hours/month in administrative overhead.

### Problem Impact

**Operational impact:** A mobile car detailer finishing a job site cannot issue a CFDI from their phone in 30 seconds using any current tool. They either drive to their desktop, ask their contador to issue the invoice later, or lose the client's business entirely when the client demands a factura for deductibility.

**Financial impact:** The average micro-SMB pays a contador $500–1,500 MXN/month primarily to manage invoicing and quarterly SAT declarations — tasks that a modern tool could automate. This fee is the highest recurring software cost the business owner pays, yet the actual tool cost (CONTPAQi or SAT free portal) is either too expensive or too painful to use directly.

**Compliance risk:** CFDI 4.0 (mandatory since July 2023) introduced new required fields — recipient postal code, tax regime, CURP for physical persons — that invalidate invoices issued with outdated data. The 2026 SAT Reform adds authenticity verification requirements and permanent SAT read-access to all transaction data for digital platforms. Businesses using the free SAT portal or desktop tools with no audit trail are increasingly exposed.

**Emotional impact:** SAT can blacklist businesses publicly for non-compliance. For a micro-entrepreneur, being listed on the SAT blacklist is catastrophic. Every invoice represents a compliance event with legal consequences, creating chronic anxiety for business owners who lack a trusted, reliable tool.

### Why Existing Solutions Fall Short

| Tool | Why It Fails Micro-SMBs |
|------|------------------------|
| SAT free portal | No UX, no payment tracking, no accounting output, no mobile app, sessions expire during invoice creation |
| CONTPAQi / Aspel | Desktop-only; expensive; requires accountant to manage; not designed for 1–5 person businesses; no mobile invoicing |
| Alegra | Volume caps (50 invoices/month on entry); accounting module costs extra $499+ MXN/month; not RESICO-optimized |
| Facturama | No accounting, no mobile app, annual pricing model confuses subscription buyers, no payment tracking |
| Facturapi | Developer API only — not an end-user product |
| Gigstack | Stripe-only integration at $1,650+ MXN/month — inaccessible for micro-SMBs |

**The structural gap confirmed by market research:** No current tool simultaneously provides (1) unlimited CFDI 4.0 stamping, (2) integrated payment tracking with OXXO/SPEI/Mercado Pago status, (3) RESICO-compatible accounting output, and (4) mobile-first UX designed for non-accountants — all in one monthly subscription under $500 MXN/month.

### Proposed Solution

FacturaMX is a mobile-responsive web app that lets any Mexican freelancer or micro-SMB owner issue a legally compliant CFDI 4.0 invoice, track payment, and export their RESICO tax summary — in under 5 minutes, from any device, without needing an accountant to do it for them.

**The core workflow:**
1. Add client (RFC, postal code, tax regime — validated against SAT public registry)
2. Create invoice (product/service description, amount, tax type)
3. Stamp CFDI 4.0 in real time via PAC partner API
4. Send PDF + XML to client via WhatsApp or email
5. Mark as paid when payment arrives (OXXO, SPEI, Mercado Pago, cash)
6. Auto-generate payment complement (complemento de pago) for installment payments
7. Export monthly income summary compatible with RESICO simplified declaration

**Contador partner portal:**
Accounting firms get a free multi-RFC management portal during beta, allowing them to manage their clients' invoicing workflows, review CFDI status, and export accounting summaries — with revenue share on referrals.

**Architecture:** FacturaMX does not build its own PAC (SAT certification infrastructure). It integrates with an established PAC partner (Edicom, Axcelsia, or Invoiceone) via their API. FacturaMX provides the UX, the accounting integration, and the distribution — the PAC provides the SAT API reliability and certification guarantees.

### Key Differentiators

1. **Unlimited invoices on every plan** — no volume caps that break workflows mid-month; position directly against Alegra's 50/100/250 tier structure.

2. **RESICO-native accounting** — the simplified trust regime (régimen de confianza simplificado) represents 3M+ Mexican freelancers; no current tool is built primarily for their flat-rate, no-deduction accounting needs.

3. **RFC validator at point of entry** — auto-validates receiver RFC + postal code against SAT's public registry before submission, preventing the most common CFDI rejection errors (RFC/postal code mismatch, wrong régimen fiscal).

4. **Contador partner channel built in from day one** — not a feature but a distribution strategy: multi-RFC portal, revenue share, professional association co-marketing; one contador brings 10–50 client subscriptions.

5. **WhatsApp-native workflow** — invoice delivery, payment follow-up reminders, support; matches LATAM SMB communication norms rather than imposing US SaaS email flows.

6. **MXN-denominated pricing** — eliminates USD conversion friction; $249/$499/$999 MXN/month (not $12/$24/$49 USD) reduces psychological price barrier and signals market-native positioning.

7. **2026 SAT compliance confidence** — built-in document storage linking CFDIs to contracts, delivery receipts, and payment records, preparing customers for SAT's new authenticity verification requirements where businesses have 5 days to prove invoiced transactions actually occurred.

---

## Target Users

### Primary Users

**Persona 1: Roberto, RESICO Freelancer (Diseñador Gráfico, Guadalajara)**

Roberto is a 29-year-old freelance graphic designer working under Mexico's RESICO simplified tax regime. He earns $45,000–$80,000 MXN/month from 8–12 active clients. His contador charges $800 MXN/month to manage his quarterly SAT declarations and issue his CFDIs. Roberto knows he should be able to issue invoices himself — each factura is 10 minutes with his contador's portal vs. 30 seconds in a good tool — but every time he's tried the SAT portal, something breaks.

- **Current tooling:** Contador manages CONTPAQi; Roberto uses WhatsApp to send payment details; manually tracks unpaid invoices in a Google Sheet
- **Core pain:** "I have to WhatsApp my contador and wait 2 days every time a client needs a factura urgently. I've lost clients because of this."
- **Success vision:** Issues CFDI himself from his phone in under 2 minutes; knows at a glance which invoices are paid vs. outstanding; RESICO declaration export takes 5 minutes at end of quarter
- **Price sensitivity:** High — currently paying $800 MXN/month to contador for this workflow; willing to pay $249/month to self-serve
- **Discovery channel:** WhatsApp freelancer grupos, YouTube tutorial search "cómo facturar sin contador RESICO"

**Persona 2: Carmen, Micro-SMB Owner (Limpieza de Casas, CDMX)**

Carmen is a 44-year-old owner of a 6-person residential cleaning business. Her company earns $120,000–$180,000 MXN/month. Half her clients are households that need a CFDI for their deductible home services; the other half pay cash. Her contador handles all invoicing using Aspel SAE, which costs $771 MXN/month and requires the contador's laptop to run.

- **Current tooling:** Contador-managed Aspel SAE on desktop; Carmen calls to request invoices; paper receipts for cash clients
- **Core pain:** "When my contador is on vacation, I can't issue invoices. Last December I couldn't invoice three Christmas clients because she was traveling."
- **Success vision:** Can issue her own CFDIs from her tablet while managing a cleaning job; automatic payment reminders via WhatsApp; year-end income summary ready for SAT declaration
- **Price sensitivity:** Medium — currently paying $771 MXN/month for Aspel + $1,200 MXN/month for contador; $499 MXN/month for self-service is a clear saving
- **Discovery channel:** Contador recommendation, Facebook grupos de emprendedores CDMX

**Persona 3: Miguel, Electricista Independiente (Monterrey)**

Miguel is a 38-year-old independent electrician working under traditional régimen general. He earns $35,000–$60,000 MXN/month from commercial and residential jobs. His contador charges $500 MXN/month. Most of his commercial clients require a CFDI before they'll process payment — no factura means no payment.

- **Current tooling:** SAT free portal (when his contador shows him), otherwise asks clients to wait
- **Core pain:** "My commercial clients won't pay without a factura. I've had to go home between jobs just to get to my computer to issue an invoice."
- **Success vision:** Issues CFDI from his phone at the job site immediately after finishing work; links the invoice to WhatsApp payment follow-up; one-tap confirmation when paid
- **Price sensitivity:** Very high — $249 MXN/month is under what he loses in delayed payments per month
- **Discovery channel:** WhatsApp grupos de contratistas, recommendation from other electricians

### Secondary Users

**Persona 4: Licenciada Esperanza, Contadora (Despacho de 30 clientes, Puebla)**

Esperanza runs an accounting firm with 30 micro-SMB clients. She currently uses CONTPAQi Despachos ($816 MXN/month) and manually logs into each client's SAT portal to download invoices and reconcile. She recommends invoicing software to clients — her recommendation is gospel; her clients do not evaluate tools independently.

- **Strategic role:** KEY distribution channel. One Esperanza recommendation = 10–30 client subscriptions. She is the acquisition multiplier.
- **Core need:** Multi-RFC management without separate logins; automated SAT CFDI download for reconciliation; client portal where business owners can see but not mess up their accounting
- **Decision driver:** "I can't recommend something that fails during month-end declaration. My reputation depends on it."
- **Success vision:** Single dashboard for all 30 clients; automated CFDI download from SAT; one-click accounting export per client
- **Pricing:** Free multi-RFC partner portal during beta; $999 MXN/month pro tier or 25% revenue share on referred clients
- **Discovery channel:** IMCP (Instituto Mexicano de Contadores Públicos) association network, contador WhatsApp grupos, peer referral

### User Journey

**Roberto (RESICO Freelancer) — Discovery to Value:**

1. **Discovery:** Searches YouTube for "cómo facturar con CFDI 4.0 sin contador" → finds FacturaMX tutorial; or gets referral from WhatsApp freelancer grupo
2. **Sign-up:** Creates account with RFC + CSD (digital certificate) upload; 15-minute onboarding with guided setup wizard
3. **First invoice:** System validates client RFC against SAT public registry in real time; auto-populates required CFDI 4.0 fields; invoice stamped via PAC in <10 seconds; PDF + XML sent via WhatsApp link
4. **Aha! moment:** First CFDI issued in under 3 minutes from phone, on a Sunday, without contacting the contador — "esto es exactamente lo que necesitaba"
5. **Core habit:** Issues 15–20 invoices/month; payment status tracked in dashboard; WhatsApp reminder auto-sent for invoices 30+ days unpaid
6. **Retention anchor:** RESICO quarterly export pre-fills income declaration; switching tools means losing this data and rebuilding the workflow
7. **Referral trigger:** Shares app in WhatsApp freelancer grupo when peer complains about SAT portal frustrations

**Esperanza (Contadora) — Partner Onboarding:**

1. **Discovery:** Peer recommendation at IMCP regional meeting or FacturaMX webinar "Automatiza la facturación de tus clientes RESICO"
2. **Partner onboarding:** Free multi-RFC partner portal; imports client RFC list; receives revenue share agreement
3. **Migration:** Exports 3 pilot clients from CONTPAQi; validates CFDI accuracy; confirms SAT reconciliation works
4. **Recommendation:** Proactively recommends FacturaMX to new RESICO clients joining her firm; existing clients switched over 2–3 months
5. **Full adoption:** 20 of 30 clients on FacturaMX; Esperanza manages all via partner portal; earns $1,498–$2,997 MXN/month in referral commissions

---

## Success Metrics

### Phase 1 — Beta Validation (Months 1–3)

**User Success Metrics:**
- <5% error rate on first-time CFDI submissions (industry average: 15–20%)
- 80%+ of beta users successfully stamp their first CFDI within 10 minutes of account setup
- Average time to issue first invoice: <5 minutes (vs. 30+ minutes via SAT free portal)
- NPS > 50 from beta users after 30 days of use

**Business Metrics:**
- 50 active beta users with at least 1 CFDI stamped
- 5+ contador partners actively recommending to clients
- <10% beta user dropout (define dropout: registered but never issued a CFDI)
- PAC partner API uptime: 99.5%+ during beta

**Validation Gates:**
- Can a non-technical user issue their first CFDI in <5 minutes without support?
- Do contadores recommend the tool after a single demo?
- What is the percentage of successful first-stamp attempts vs. errors?

### Phase 2 — Launch & Growth (Months 4–9)

**Revenue Metrics:**
- $20,000 MXN MRR ($1,000 USD) by end of month 6
- $80,000 MXN MRR ($4,000 USD) by end of month 9
- 50+ paying MRR customers by month 6
- Average revenue per user (ARPU): $400 MXN/month ($20 USD)

**Engagement Metrics:**
- Monthly churn < 5%
- Invoice volume per active user: 10+ CFDIs/month (indicates core habit formation)
- 30-day retention: >85%
- 90-day retention: >75%

**Distribution Metrics:**
- 20+ contador partners in the revenue share program
- 30% of new signups attributed to contador referrals by month 9
- Google Page 1 ranking for "facturación electrónica RESICO" within 6 months
- 3 high-intent Spanish-language blog posts driving organic traffic (>500 visits/month each)

### Phase 3 — Scale (Months 10–18)

**Revenue Targets:**
- $200,000 MXN MRR ($10,000 USD) — 0.5% toward 1% penetration of target segment
- Net Revenue Retention (NRR): >100% (expansion from tier upgrades)
- Payback period: <6 months

**Market Position Metrics:**
- Recognized as the leading tool for RESICO freelancers in Mexico (top 3 in Spanish search for core keywords)
- 100+ contador partners; 500+ SMB customers
- Referral rate: 30%+ of new signups from word-of-mouth

### Key Performance Indicators

| KPI | Phase 1 Target | Phase 2 Target | Phase 3 Target |
|-----|---------------|----------------|----------------|
| Active users | 50 beta | 100+ paying | 500+ paying |
| MRR (MXN) | n/a | $80,000 | $200,000 |
| Monthly churn | <10% | <5% | <3% |
| First-CFDI success rate | >80% | >90% | >95% |
| Contador partners | 5 | 20 | 100 |
| NPS | >50 | >60 | >65 |
| Organic search rank | — | Top 5 for 3 keywords | Top 3 for 10 keywords |

### Business Objectives

**6-month objective:** Validate that non-technical users can successfully self-issue CFDIs without an accountant, achieving <5% error rate and >50 NPS — proving product-market fit before scaling distribution.

**12-month objective:** Establish FacturaMX as the recognized tool for RESICO freelancers and micro-SMB owners in Mexico; $10,000 USD MRR; 100+ active customers; self-sustaining referral loop through contador channel.

**18-month objective:** $200,000 MXN MRR ($10,000 USD); begin Colombia DIAN compliance module scoping; expand to Stripe/Conekta integration to compete with Gigstack at accessible price point.

---

## MVP Scope

### Core Features (Must Ship for Beta)

**1. CFDI 4.0 Invoice Generation**
- Full CFDI 4.0 XML generation with all mandatory fields (RFC, postal code, tax regime for both issuer and receiver, CFDI use code, payment form/method codes)
- Real-time RFC validation against SAT public registry (verify receiver RFC + postal code match before stamping)
- PAC API integration for real-time digital stamping (Edicom or Axcelsia as partner)
- PDF + XML download; WhatsApp share link; email send
- Invoice cancellation with proper SAT reason codes (01–04)
- Complemento de pago (payment complement) generation for installment payments

**2. Client RFC Management**
- Client contact book with RFC, postal code, tax regime, CFDI use code fields
- SAT registry validation on client entry (prevents stamping errors at source)
- Bulk import from CSV (to accept migrations from Alegra, Facturama, SAT portal exports)
- Client-level CFDI history

**3. Payment Tracking**
- Invoice status: Draft, Stamped, Sent, Partial, Paid, Overdue, Cancelled
- Manual mark-as-paid with payment date and method (cash, OXXO, SPEI, Mercado Pago, card)
- Automatic payment complement generation when marking installment invoices as paid
- Overdue invoice dashboard with WhatsApp reminder template
- Basic income report: total invoiced vs. total collected per month

**4. RESICO Accounting Output**
- Monthly income register compatible with Mexico's simplified trust regime
- Quarterly RESICO pre-filled declaration summary (income by month, tax rate applied, tax due estimate)
- Simple expense register for RESICO deductibles (not full double-entry accounting)
- Annual income summary export (for RESICO annual declaration)

**5. Contador Partner Portal**
- Multi-RFC management: one login to manage multiple client accounts
- Client access control: business owner can view, not modify accounting data
- CFDI status dashboard per client
- Accounting export (CSV/XML) per client per period
- Referral tracking for revenue share commission

**6. Mobile-First UX**
- Progressive Web App (PWA) — no app store required; works on any smartphone browser
- Issue a CFDI in <5 taps on mobile
- Offline draft mode (save invoice, stamp when connected)
- WhatsApp share integration (share invoice PDF directly from within the app)

### Out of Scope for MVP

The following are explicitly deferred to avoid scope creep and maintain a focused 6–8 week build timeline:

- **Colombia DIAN compliance** — requires separate regulatory expertise and separate legal entity
- **Brazil NF-e compliance** — most complex e-invoicing regime globally; defer until Mexico + Colombia validated
- **Native iOS/Android app** — PWA covers mobile use case with lower build cost; evaluate after 6 months
- **Payroll CFDI (nómina)** — requires separate IMSS/INFONAVIT integration; defer to Phase 2
- **Inventory management** — not needed for service businesses (primary target segment)
- **Carta Porte complement** — transport/logistics mandate; niche within micro-SMB; defer to Phase 2
- **Full double-entry accounting** — RESICO simplified accounting output is sufficient for MVP; competing with CONTPAQi on accounting is not the strategy
- **Stripe/Conekta payment collection integration** — valuable but increases build complexity; address in Phase 3 to compete with Gigstack
- **Multi-currency invoicing** — LATAM SMBs invoice in MXN; USD invoicing is an edge case for Phase 2
- **Batch CFDI generation / API** — developer API is a Phase 2 feature; MVP is the end-user product

**What we say no to for now:** Any feature request that expands beyond the core workflow of "issue CFDI → track payment → know your RESICO taxes" will be deferred. The competitor weakness is fragmentation; our strength is doing the essential thing perfectly.

### MVP Success Criteria

The MVP is validated when all three gates are met:

**Gate 1 — Usability:** A non-technical RESICO freelancer can create an account, configure their RFC/CSD, and stamp their first CFDI in <5 minutes without contacting support.

**Gate 2 — Reliability:** <5% error rate on CFDI submissions after the first week (excluding RFC validation errors that are the user's own data issue, which the tool surfaces preventatively).

**Gate 3 — Distribution:** At least 3 contadores are actively recommending FacturaMX to new clients after their first demo — without financial incentive from the referral program.

When all three gates are met: proceed to paid pricing launch and scale distribution.

### Future Vision

**Phase 2 — Expanding the Core (Months 4–12 post-launch):**
- **Stripe + Conekta + Clip integration at $300–500 MXN/month** — compete with Gigstack's $1,650+ MXN/month offering; every e-commerce and point-of-sale merchant needs CFDI generation on payment
- **Automatic SAT CFDI download** — pull all issued CFDIs from SAT portal via Mass Download API; auto-classify income/expenses; eliminate manual reconciliation for contadores
- **Payroll CFDI (nómina)** — for businesses with 1–10 employees; IMSS/INFONAVIT contribution tracking
- **WhatsApp Business API integration** — automated invoice delivery and payment follow-up via official WhatsApp API (not just share link)
- **Alegra import tool** — one-click migration assistant targeting Alegra customers hitting volume cap frustration

**Phase 3 — LATAM Expansion (Year 2):**
- **Colombia DIAN compliance module** — Alegra's second market; significant codebase overlap with modular compliance architecture; target 6-month build
- **2026 SAT authenticity compliance features** — document storage linking CFDIs to contracts, delivery receipts, payment evidence; SAT evidence request workflow with 5-day response tracking
- **Contador platform play** — white-label portal for accounting firms to offer FacturaMX-powered invoicing to their client base under the contador's brand

**3–5 Year Vision — Pan-LATAM Compliance Platform:**
Alegra is the only current attempt at a pan-LATAM invoicing platform (10+ countries). Their Colombia-first expansion into Mexico proves the model. FacturaMX's architecture — modular country compliance adapters over a shared invoicing + accounting + payments core — enables the same expansion path:

1. Mexico (CFDI 4.0) → validated
2. Colombia (DIAN) → Year 2
3. Chile, Peru, Ecuador (each with e-invoicing mandates) → Year 3–4

Each country adds regulatory moat depth. The compounding effect: a multi-country compliance platform becomes more expensive to replicate than any single-country tool, and switching costs span the customer's entire invoicing history across all countries they operate in.

**The 10-year market position:** The LATAM equivalent of Sage or Xero — a trusted, boring, essential business tool that every registered LATAM SMB uses because the alternative is legal exposure. Not exciting. Extremely defensible.

---

## Open Questions and Risks

### Decision-Blocking Questions (Must Resolve Before Building)

1. **Team composition:** Is there a Mexican CPA or tax attorney available as co-founder or advisor? Budget $2,000–$5,000 USD/month or 5–15% equity. This is non-negotiable before writing a line of code.

2. **PAC partner selection:** Which PAC (Edicom, Axcelsia, Invoiceone) provides the best sandbox access for development, the most competitive per-stamp pricing, and the strongest SLA for month-end peak periods? Request API documentation from all three.

3. **CSD onboarding friction:** The e.Firma (electronic signature) required for CFDI issuance requires an in-person SAT appointment. How do we handle the universal onboarding barrier where users don't have their CSD yet? Requires a guided setup flow + PAC liaison for users who need help obtaining their digital certificate.

### Risk Register

| Risk | Severity | Mitigation |
|------|----------|-----------|
| SAT API changes break compliance (annual Miscellaneous Tax Resolution updates) | HIGH | PAC partner absorbs SAT API complexity; dedicated CFDI compliance engineer monitors changes |
| Team lacks Mexican tax domain expertise | HIGH | Non-negotiable: hire/partner a Mexican CPA before building |
| GTM defaults to US channels (Product Hunt, AppSumo) | MEDIUM | Explicit channel prohibition; budget for WhatsApp community engagement + contador outreach |
| Alegra bundles accounting module and removes invoice caps | MEDIUM | Monitor quarterly; accelerate contador channel before Alegra can close the gap |
| Colombia DIAN free portal limits paid market size | LOW | Mexico-only until $10,000 USD MRR validated; Colombia entry after Mexico proof |
| LTD buyers expect low-churn compliance product as one-time purchase | LOW | MRR-only from day one; founding member annual pricing ($2,988 MXN/year) as early-adopter offer |

### Recommended Pre-Build Actions

1. **Do first:** Identify Mexican CPA/tax attorney co-founder or advisor (2–4 weeks)
2. **Do first:** Contract PAC partner and validate sandbox API access (2–3 weeks)
3. **Do in month 1:** Join 10+ Mexican freelancer/entrepreneur Facebook groups and WhatsApp grupos — read 500+ posts before posting anything
4. **Do in month 1:** Survey 20 Mexican contadores on current tool stack and switching triggers via WhatsApp Typeform (Spanish)
5. **Do NOT do:** Launch on Product Hunt, AppSumo, or English-language channels as primary GTM

---

*Product Brief completed: 2026-06-12*
*Based on: market research (latam-invoicing-cfdi, 2026-06-12) and shortlisted idea (score 81/105)*
*Next step: create-prd — build full Product Requirements Document from this brief*
