---
stepsCompleted: [1, 2, 3, 4, 5, 6]
inputDocuments: ['ideas/shortlisted/eu-e-invoicing-compliance.md', '_bmad-output/planning-artifacts/market-research-eu-e-invoicing-compliance.md']
workflowType: 'product-brief'
lastStep: 6
date: '2026-05-26'
author: 'Root'
project: 'eu-e-invoicing-compliance'
---

# Product Brief: EU E-Invoicing Compliance for Micro-SMBs (PeppolPass)

---

## Executive Summary

**PeppolPass** is a one-click Peppol XML compliance tool for EU micro-SMBs — sole traders, freelancers, and small businesses with 1–5 employees — who invoice 5–20 customers per month and need to meet government e-invoicing mandates without understanding the underlying technical specification.

Belgium's B2B e-invoicing mandate went live January 1, 2026. Poland's went live April 2026. France's SME mandate arrives September 2027. Together, these affect 10M+ EU micro-businesses — most of whom used Word/PDF invoicing yesterday and have no practical path to compliance today that doesn't require reading a 200-page Peppol technical specification.

Existing solutions divide into two inadequate camps: free nonprofit tools with limited English support and no confidence signals, and enterprise-grade APIs targeting ISVs and large companies at enterprise pricing. The micro-SMB segment — especially the large English-speaking expat business community in Brussels and other EU capitals — has no purpose-built, English-first compliance tool at a price point they'll buy without hesitation.

PeppolPass fills this gap: enter invoice details in plain English, get a legally valid Peppol BIS Billing 3.0 XML delivered to your buyer's Peppol endpoint, with a compliance certificate you can show your accountant. Belgium-first at €99–149 LTD, expanding to Poland and France on a predictable country roadmap.

**Score at time of identification:** 83/105 — Verdict: EXPLORE FURTHER
**LTD Price target:** €99–149
**Time to MVP:** 6–8 weeks (Belgium-only)
**Primary market:** ~800,000 Belgian micro-businesses non-compliant as of October 2025; 1.2M total Belgian VAT-registered businesses; EU ViDA expands TAM to all EU B2B businesses by 2030

---

## Core Vision

### Problem Statement

EU micro-SMBs face a non-negotiable legal mandate to adopt Peppol-compatible e-invoicing — but every tool on the market either costs nothing and feels untrustworthy, or costs enterprise pricing and requires developer integration. The ~800,000 Belgian businesses still non-compliant as of October 2025 are not lazy; they are overwhelmed by technical jargon ("UBL 2.1," "BIS Billing 3.0," "Access Point"), uncertain which tool is actually certified, and unable to find an English-first product if they're part of Belgium's large international business community.

A sole trader in Brussels — consultant, architect, photographer, IT contractor — invoices 8–12 clients per month using a Word template, then manually emails PDFs. Starting January 2026, if their client is VAT-registered in Belgium, that PDF invoice cannot be used to recover VAT. The client will reject it. The sole trader must switch to Peppol XML, submitted through a certified Access Point, delivered to the buyer's Peppol endpoint. Most have never heard the words "Peppol endpoint."

### Problem Impact

- **Commercial:** Clients (especially larger B2B clients and government contractors) are already rejecting non-Peppol invoices. Non-compliance means inability to collect payment from compliant buyers.
- **Tax:** Buyers cannot recover VAT on non-Peppol invoices. This creates direct financial pressure on suppliers from their clients.
- **Regulatory:** Belgium's grace period (Q1 2026) has passed. Fines and VAT audit exposure are live risks.
- **Scale:** This isn't a Belgian problem for long. Poland (April 2026), France (September 2027), Germany (January 2028), and EU ViDA (July 2030 cross-border) create a multi-year, multi-country compliance wave affecting every micro-SMB in the EU.

The Italy benchmark is instructive: Italy's e-invoicing mandate (live since 2019) drove the EU's VAT gap down by €12.7B in a single year — proving mandates are enforced and businesses comply when they must.

### Why Existing Solutions Fall Short

| Solution Type | What Exists | Why It Fails Micro-SMBs |
|--------------|-------------|------------------------|
| Free nonprofit tools | Let's Peppol (BARGE vzw), Accountable free tier | Limited English support; nonprofit UX; no compliance certificate; no confidence signals for non-technical users |
| Pay-per-invoice | e-invoice.be (€0.18/invoice) | No interface polish; primarily developer/accountant-oriented |
| Paid monthly tools | Billit (€7.50/mo), Peppol Box (€5/mo) | Dutch/French-first; no English support for Brussels expat community; monthly commitment friction |
| Enterprise tools | Pagero (acquired for $800M), Basware, Fiskaly, Fonoa | API-first; enterprise pricing; not end-user tools; require IT staff |

**The genuine white space:** No current Peppol-certified tool offers all four of: (1) English-first UX designed for non-technical users, (2) AppSumo LTD pricing, (3) compliance certificate/audit trail export, and (4) a credible multi-country compliance roadmap. This combination is unoccupied.

### Proposed Solution

PeppolPass is a web-based Peppol compliance tool with a deliberately simple, English-first interface:

1. **Enter:** User inputs their VAT number, buyer VAT number, and invoice line items in a clean, plain-English form
2. **Lookup:** Tool automatically resolves buyer's Peppol ID from VAT number via the SML/SMP directory — no technical knowledge required
3. **Convert:** Generates valid Peppol BIS Billing 3.0 UBL 2.1 XML, validated against official schemas
4. **Deliver:** Submits to the Peppol network via a certified Access Point (own certification or via Storecove API partnership)
5. **Confirm:** Provides delivery confirmation + downloadable compliance certificate PDF

The product is positioned as "the compliance tool for international businesses in Belgium" — specifically targeting the English-speaking Brussels expat/freelancer segment that existing Dutch/French-first tools ignore, then expanding to serve all Belgian micro-SMBs, then Poland, France, and Germany.

### Key Differentiators

1. **English-first for the underserved segment:** Brussels has 37.2% non-Belgian residents. No existing Peppol tool is built English-first. This segment pays more (higher average invoice value), has low brand loyalty to Belgian accounting tools, and responds to direct AppSumo-style marketing.

2. **Compliance certificate feature:** A downloadable PDF certificate showing VAT number, Peppol ID, registration status, and last invoice delivery confirmation — something users can show their accountant or include in client onboarding packets. No current tool offers this.

3. **LTD first-mover:** No Peppol-certified e-invoicing tool has launched on AppSumo. "€99 once, be compliant forever" is a compelling one-time ROI pitch — especially with Belgium's 120% software cost tax deduction making the net cost ~€40.

4. **Country expansion moat:** Belgium → Poland → France → Germany is a credible roadmap that free nonprofit tools cannot follow (out of scope) and enterprise tools don't prioritize (too small per customer). Being first across all EU mandates creates compounding compliance expertise and a country-specific SEO moat.

5. **Mandate urgency as distribution:** The regulatory deadline is a built-in trigger event. Every Belgian accountant sending the annual compliance reminder email is a free PeppolPass marketing touchpoint.

---

## Target Users

### Primary Users

**Segment 1: The Brussels Expat Freelancer ("Sophie")**

Sophie is a 36-year-old Belgian-based communications consultant from the Netherlands, working with 3–4 EU institutional clients and 5–6 private companies per month. She invoices in English, uses FreshBooks (which has no Belgium Peppol support), and learned about the e-invoicing mandate from a client rejection email in February 2026. She Googled "Peppol Belgium English" and found either: the Belgian government's Dutch-language portal, Accountable (which looks Belgian-accountant-focused), or Let's Peppol (which looks technically intimidating). She would pay €99 immediately for something that "just handles it" in English and confirms compliance.

- **Invoicing volume:** 8–12 invoices/month
- **Current process:** FreshBooks / Harvest / manual PDF → email
- **Decision trigger:** Client rejection of PDF invoice; Google search
- **Key need:** English interface; confidence that it's legally valid; no re-learning accounting
- **Willingness to pay:** €79–149 LTD or €12–20/month

**Segment 2: The Belgian Micro-Entrepreneur ("Pieter")**

Pieter runs a 2-person landscaping company in Ghent. He uses Billit's free tier for invoicing because his accountant recommended it. His accountant mentioned the e-invoicing mandate at their last meeting but Pieter doesn't fully understand what needs to change, or whether Billit has already handled it. He would switch to PeppolPass if his accountant recommended it, or if a friend who runs a similar business mentioned it.

- **Invoicing volume:** 15–25 invoices/month
- **Current process:** Billit free tier or Excel; accountant manages VAT filing
- **Decision trigger:** Accountant recommendation; colleague referral; client rejection
- **Key need:** Seamless compliance without changing his workflow significantly
- **Willingness to pay:** €99–149 LTD ("once and done"); up to €10/month recurring

**Segment 3: The Polish Sole Trader ("Karolina")**

Karolina is a Warsaw-based graphic designer. Poland's KSeF mandate went live April 2026 for SMEs. Unlike Belgium's Peppol four-corner model, Poland uses a centralized government XML clearance system — but micro-businesses are required to comply just the same. Karolina needs a tool that handles Polish KSeF XML format, submits to the government's clearance portal, and doesn't require her to learn the technical spec. She represents PeppolPass's second-country expansion cohort (Month 7–12).

- **Invoicing volume:** 5–10 invoices/month
- **Current process:** InvoiceFast Poland, or manual PDF
- **Decision trigger:** April 2026 KSeF mandate enforcement
- **Key need:** KSeF XML generation + government clearance submission; Polish language UI preferred but English acceptable
- **Willingness to pay:** Similar LTD pricing (PLN 400–600 / €90–135)

### Secondary Users

**Segment 4: The Belgian SMB Accountant ("Dirk")**

Dirk manages 45 small business clients, 80% of whom are micro-businesses (< 5 employees). He is the #1 trust signal for all his clients' software decisions. He was personally overwhelmed in Q4 2025 helping clients rush to Peppol compliance. He would actively refer PeppolPass to clients if: (a) it has an accountant partner dashboard that lets him see all his clients' compliance status in one view, and (b) there's a referral program with meaningful commission. Dirk does not pay for PeppolPass himself — he is a distribution channel.

- **Role:** Influencer and recommender, not end buyer
- **Key need:** Accountant dashboard; bulk client management; referral commission
- **Acquisition channel:** Direct outreach + partner program

### User Journey

**Discovery:**
- English-first path: Google "Peppol Belgium English" or "e-invoicing Belgium expat" → PeppolPass appears in top results (SEO content investment) or AppSumo listing
- Belgian micro-entrepreneur path: Accountant recommendation or peer referral in professional community; client rejection email as trigger
- AppSumo path: International buyers searching for compliance/invoicing tools discover PeppolPass during a launch campaign

**Onboarding (< 10 minutes to first invoice):**
1. Enter VAT number → tool auto-populates business name and country
2. Enter buyer's VAT number → tool looks up Peppol ID and displays "Your client [Name] is registered on Peppol — invoice will be delivered electronically ✓"
3. Enter invoice line items (description, quantity, unit price, VAT rate)
4. Click "Send Compliant Invoice"
5. See delivery confirmation screen: "Invoice delivered to [Buyer Name] on Peppol network — [timestamp]"
6. Download compliance certificate

**Core Usage (recurring):**
- User saves frequently-used client VAT numbers for one-click selection
- Invoice history dashboard showing delivery confirmations and statuses
- Monthly email digest: "You sent X invoices this month; all compliant ✓"

**Success Moment (the "aha!"):**
The moment a user receives the delivery confirmation and can download their compliance certificate — especially if they have a prior experience of a client rejecting a PDF invoice. The anxiety of "am I compliant?" becomes a resolved, documented fact they can act on immediately.

**Long-term Retention:**
- Annual compliance update subscription at €49/year covers format updates, new country support, and Access Point renewal costs
- Country expansion (Poland, France, Germany) creates natural upgrade reasons
- Accountant integrations make PeppolPass embedded in the client's workflow rather than a standalone tool

---

## Success Metrics

### User Success Metrics

| Metric | Definition | Target (Month 6) | Target (Month 12) |
|--------|-----------|-----------------|-------------------|
| Time to first compliant invoice | Minutes from signup to confirmed delivery | < 10 minutes | < 8 minutes |
| Onboarding completion rate | % of signups who send at least 1 Peppol invoice | 65% | 75% |
| Invoice delivery success rate | % of sent invoices that reach buyer endpoint without error | 98%+ | 99%+ |
| Compliance certificate download rate | % of users who download certificate within 30 days | 50% | 60% |
| User NPS | Net Promoter Score | 45+ | 55+ |
| Support ticket rate | Tickets per 100 active users per month | < 5 | < 3 |

The primary user success signal is **sending a Peppol invoice and receiving delivery confirmation within 10 minutes of signing up** — this is the "aha!" moment that defines product-market fit for this compliance use case.

### Business Objectives

**Objective 1: Establish first-mover AppSumo presence (Month 1–3)**
- Launch on AppSumo as the first Peppol-certified e-invoicing LTD
- Achieve €40K–€80K in LTD revenue in the first 30-day launch window
- Build social proof (100+ AppSumo reviews) before competitor tools discover the LTD opportunity

**Objective 2: Build the accountant distribution channel (Month 2–6)**
- Onboard 25+ Belgian accountant partners with referral program
- Generate 30–40% of new signups via accountant referral by Month 6
- Accountant channel creates defensible moat: once an accountant recommends PeppolPass, switching friction is very high

**Objective 3: Prove multi-country scalability (Month 7–12)**
- Launch Poland KSeF support as second country
- Validate that the core product architecture extends to centralized clearance models (not just four-corner Peppol)
- Establish French Factur-X support roadmap ahead of September 2027 mandate

**Objective 4: Reach €100K ARR from subscription renewals (Month 18)**
- Convert LTD users to €49/year annual compliance update subscriptions
- Build predictable ARR before the France 2027 mandate creates the next major acquisition wave

### Key Performance Indicators

| KPI | Month 1 | Month 3 | Month 6 | Month 12 |
|-----|---------|---------|---------|---------|
| AppSumo LTD buyers | 200 | 400 | 700 | 1,200 |
| Monthly active senders | — | 150 | 400 | 900 |
| Invoices delivered via Peppol | — | 1,000/mo | 3,500/mo | 8,000/mo |
| Accountant partners | 3 | 15 | 30 | 75 |
| Countries supported | 1 (BE) | 1 (BE) | 2 (BE+PL) | 3 (BE+PL+FR prep) |
| ARR (subscriptions) | €0 | €0 | €15K | €60K |
| Revenue (LTD cumulative) | €20K | €55K | €90K | €130K |
| Compliance certificate downloads | — | 300 | 900 | 2,500 |
| Churn (subscription) | — | — | <5%/yr | <8%/yr |

**North Star Metric:** Monthly Peppol invoices successfully delivered — this is the clearest proxy for user value, product reliability, and market penetration simultaneously.

---

## MVP Scope

### Core Features

**MVP = Belgium-only Peppol send, English-first UX, AppSumo-ready (6–8 weeks)**

| Feature | Description | Priority |
|---------|-------------|----------|
| VAT-to-Peppol lookup | Automatic resolution of buyer's Peppol participant ID from Belgian VAT number via SML directory | P0 |
| Invoice entry form | Plain-English form: seller details, buyer VAT, invoice lines, amounts, dates, VAT rates | P0 |
| UBL 2.1 / BIS Billing 3.0 XML generation | Server-side generation and schema validation of Peppol-compliant XML | P0 |
| Peppol network delivery | Submission via certified Access Point (own certification or Storecove API partnership) | P0 |
| Delivery confirmation | Real-time confirmation screen showing invoice received by buyer's endpoint | P0 |
| Compliance certificate PDF | Downloadable certificate: VAT number, Peppol ID, invoice reference, delivery timestamp | P0 |
| Invoice history | List of sent invoices with delivery status and certificate download | P1 |
| User account + billing | Stripe-powered account creation; LTD code redemption; AppSumo code flow | P0 |
| English-only UI | Full English interface; no Dutch/French required for MVP | P0 |
| Basic email support | Crisp or Intercom chat; response within 24 hours | P1 |

**Total MVP scope:** One user flow — enter invoice, send to Peppol, confirm delivery, download certificate. Nothing else.

### Out of Scope for MVP

The following are explicitly deferred to V1 or later:

- **Receiving incoming Peppol invoices** — Compliance mandate is about sending; receiving can wait until V1
- **PDF/CSV import / OCR conversion** — Valuable but complex; manual entry is sufficient for MVP validation
- **QBO / Xero / FreshBooks integrations** — High-impact but requires API partnerships; defer to V1
- **Poland KSeF format** — Different technical model (centralized clearance vs. four-corner Peppol); defer to Month 7
- **French Factur-X format** — September 2027 mandate; defer to Month 12–18
- **Dutch and French language localization** — English-first launch; add languages based on demand signals
- **Multi-user / accountant dashboard** — Essential for accountant channel scaling, but not for initial AppSumo buyers
- **Mobile app** — Web-responsive is sufficient; native app is V2+
- **Webhook API / white-label** — B2B2B opportunity; defer until product-market fit is established
- **Advanced analytics / reporting** — Not needed for compliance; defer to V2+

### MVP Success Criteria

The MVP is considered successful and ready for full launch when:

1. **Technical:** 100 test invoices delivered successfully across 5+ distinct buyer Peppol endpoints with 0 schema validation failures
2. **UX:** 5 non-technical beta users (freelancers, not developers) complete their first invoice in < 12 minutes with no support intervention
3. **Commercial:** 50 paid LTD codes sold in pre-launch / soft launch phase, with > 40 users sending at least 1 invoice
4. **Compliance:** OpenPeppol Access Point certification confirmed, or Storecove API partnership agreement signed and tested
5. **Confidence:** At least 3 Belgian accountants have reviewed the compliance certificate output and confirmed it meets client documentation requirements

**Go/no-go decision point:** If beta users cannot complete first invoice in < 15 minutes, the onboarding flow requires redesign before AppSumo launch.

### Future Vision

**V1 (Months 3–6): Full Belgium compliance + incoming invoices**
- Peppol receive: incoming invoice inbox with PDF view
- PDF-to-Peppol conversion: OCR + XML mapping for users who receive paper/PDF invoices from suppliers
- CSV/Excel bulk import for invoicers with 50+ transactions/month
- QBO/Xero outgoing invoice auto-conversion
- Dutch and French language support (driven by user demand signals)

**V2 (Months 7–12): Poland + accountant channel**
- KSeF XML for Poland (government clearance model; different architecture from four-corner Peppol)
- Accountant partner dashboard: manage compliance status for up to 100 client businesses
- Referral program with 30% commission on first-year revenue
- Annual compliance update subscription (€49/year): covers Access Point renewal, format updates, new country support
- Multi-user access (accountant + business owner roles)

**V3 (Months 12–24): France + platform integrations**
- Factur-X support for France ahead of September 2027 SME mandate
- FreshBooks, Wave, and Bonsai integrations (English-language freelancer tools popular in EU expat communities)
- Germany XRechnung / ZUGFeRD support (January 2028 mandate; largest EU economy)
- Webhook API for embedding compliance in other SaaS platforms (white-label opportunity)

**Long-term vision (2–5 years): The EU compliance infrastructure layer**
- EU ViDA (July 2030) requires all EU businesses with cross-border B2B transactions to use Peppol-compatible e-invoicing — TAM expands from "Belgian micro-SMBs" to "every EU business"
- SEPA instant payment integration: Peppol structured invoice data triggers automatic payment initiation; PeppolPass becomes the bridge between invoice delivery and payment
- White-label module for international accounting SaaS platforms (FreshBooks, Harvest, Wave) that have EU customers but no native Peppol support
- Global Peppol expansion: Australia (government mandate), Singapore, New Zealand, Japan — the same Access Point infrastructure serves all Peppol-country markets

The long-term moat is accumulated compliance expertise across EU countries, a certified Access Point infrastructure that is expensive to replicate, and an accountant distribution channel with high switching costs. PeppolPass becomes the compliance layer that any tool building for EU businesses wants to embed rather than build themselves.

---

## Risks and Mitigations

| Risk | Probability | Impact | Mitigation |
|------|------------|--------|------------|
| Free tools (Let's Peppol, Accountable free tier) erode willingness to pay | High | Medium | Differentiate on English UX + compliance certificate + multi-country roadmap; Belgian 120% tax deduction makes €99 LTD ~€40 net — below the "just do it" threshold |
| OpenPeppol Access Point certification costs exceed LTD unit economics | Medium | High | Model LTD at €99+ with 200 invoices/year cap; explore Storecove API partnership as fallback; price annual subscription to cover ongoing per-transaction costs |
| France 2027 mandate slips again (already delayed once) | Low | High | Belgium is live; don't bank France in Year 1 revenue projections; Poland provides second urgency wave |
| Enterprise tools (Fiskaly, Fonoa) launch self-serve micro-SMB tier | Medium | Medium | Speed to market; build accountant channel (high switching cost once accountants recommending); AppSumo first-mover advantage |
| Language/localization complexity slows country expansion | High | Low-Medium | English-first launch; localization investment driven by demand signals per country; partner with bilingual accountants for Dutch/French support |
| Peppol buyer lookup fails for non-registered businesses | Medium | Medium | Show clear "buyer not on Peppol yet" message with guidance (send as PDF for now, check back); set expectation in onboarding |

---

## Go-to-Market Summary

**Channel priority (ranked by CAC efficiency):**

1. **AppSumo LTD launch** — First-mover in Peppol-certified e-invoicing; target 300–500 buyers in first 30 days at €99–129; use urgency pitch ("Belgium mandate live NOW")
2. **Accountant partner program** — 30% referral commission; accountant dashboard as unlock; target 50+ Belgian accountant firms in months 2–4
3. **SEO content** — "Peppol Belgium freelancer," "e-invoicing Belgium English," "e-invoicing Belgium expat"; low-competition keywords with high intent
4. **Community outreach** — Belgian/Dutch Facebook groups for entrepreneurs and accountants; r/Belgium, Brussels expat groups; Xolo/Deel freelancer communities

**Pricing:**
- LTD: €99 (AppSumo) / €129 (direct) — unlimited invoices for life of Belgium mandate
- Monthly: €12/month (for users who prefer subscription or post-LTD window)
- Annual compliance update: €49/year (mandatory after LTD period; covers format updates, Access Point renewal, country expansion)
- Accountant partner: €0 (referral commission model)

**Launch sequence:**
1. Weeks 1–6: Build MVP; obtain Access Point certification (or Storecove agreement)
2. Week 7: Beta with 20–30 users (target Brussels expat community + 5 accountant beta users)
3. Week 8–10: Soft launch — direct sales + accountant outreach
4. Month 3: AppSumo launch with accumulated reviews from soft launch cohort
5. Month 4–6: SEO content publishing; accountant partner program formal launch
6. Month 7: Poland KSeF support added; expand marketing to Polish SMB communities

---

*Product Brief generated: 2026-05-26*
*Based on: Shortlisted idea EU E-Invoicing Compliance (Score: 83/105) + Comprehensive Market Research*
*Status: Complete — ready for PRD creation*
