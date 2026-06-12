---
stepsCompleted: ['step-01-init', 'step-02-discovery', 'step-02b-vision', 'step-02c-executive-summary', 'step-03-success', 'step-04-journeys', 'step-05-domain', 'step-06-innovation', 'step-07-project-type', 'step-08-scoping', 'step-09-functional', 'step-10-nonfunctional', 'step-11-polish', 'step-12-complete']
inputDocuments: ['ideas/shortlisted/latam-invoicing-cfdi.md', '_bmad-output/planning-artifacts/market-research-latam-invoicing-cfdi.md', '_bmad-output/planning-artifacts/brief-latam-invoicing-cfdi.md']
workflowType: 'prd'
topic: 'latam-invoicing-cfdi'
date: '2026-06-12'
author: 'Root'
classification:
  projectType: 'saas_b2b'
  domain: 'fintech_compliance'
  complexity: 'high'
  projectContext: 'greenfield'
documentCounts:
  briefCount: 1
  researchCount: 1
  brainstormingCount: 0
  projectDocsCount: 0
---

# Product Requirements Document — FacturaMX

**Author:** Root
**Date:** 2026-06-12
**Product:** FacturaMX — CFDI 4.0 Invoicing Platform for Mexican SMBs and Freelancers

---

## Executive Summary

FacturaMX is a mobile-first SaaS platform enabling Mexican freelancers and micro-SMBs to issue legally compliant CFDI 4.0 electronic invoices, track payments, and generate RESICO-compatible accounting summaries — without requiring an accountant. The product targets the 3M+ Mexican freelancers under the RESICO simplified tax regime and 2M+ micro-SMB service providers whose only current options are SAT's unusable free portal, desktop-only legacy software, or delegating the workflow to a contador at $500–$1,500 MXN/month.

Every registered Mexican business must issue CFDI 4.0 invoices stamped in real time through a government-authorized PAC API. This mandate is not optional: the 2026 SAT Reform tightens enforcement further. No current tool simultaneously delivers unlimited CFDI stamping, integrated payment tracking, RESICO-native accounting output, and a mobile-first UX priced under $500 MXN/month. FacturaMX fills this gap.

Revenue model is MRR-only. Pricing: $249/$499/$999 MXN/month across three tiers. Distribution is led by the contador partner channel — one accounting firm recommendation converts 10–50 client subscriptions. The regulatory moat is structural: once a Mexican business's RFC, CSD, and client registry are configured in a compliant tool, switching costs span every historical invoice and tax record.

### What Makes FacturaMX Special

The core insight is that CFDI compliance is not a feature — it is the entire product. US tools (QuickBooks, FreshBooks, Xero) are legally unusable in Mexico regardless of price. Legacy desktop incumbents (CONTPAQi, Aspel) are not designed for 1–5 person businesses. The one modern cloud alternative (Alegra) caps invoice volume per tier and charges separately for accounting. FacturaMX's differentiation is structural, not cosmetic:

1. **Unlimited invoices on every tier** — no volume caps that break mid-month workflow.
2. **RESICO-native accounting** — the only tool built primarily for Mexico's 3M+ freelancers under the simplified trust regime.
3. **RFC validation at point of entry** — auto-validates receiver RFC against SAT's public registry before stamping, eliminating the most common CFDI rejection errors.
4. **Contador partner channel as distribution** — a free multi-RFC management portal turns accounting firms into a scalable acquisition channel with revenue share.
5. **WhatsApp-native delivery** — invoice delivery, payment follow-up, and support through the communication channel LATAM SMBs already use.
6. **MXN-denominated pricing** — eliminates USD conversion friction; signals market-native positioning.
7. **2026 SAT Reform readiness** — built-in document storage linking CFDIs to contracts and payment evidence, preparing customers for SAT's new authenticity verification requirements.

## Project Classification

- **Project Type:** SaaS B2B / B2SMB (micro-business-focused)
- **Domain:** Fintech + Regulatory Compliance (Mexican tax authority — SAT)
- **Complexity:** High — real-time government API integration, cryptographic certificate management (CSD/e.Firma), annual regulatory changes (SAT Miscellaneous Tax Resolution), RESICO accounting rules
- **Project Context:** Greenfield — no existing codebase; building from scratch for a market with no adequate existing solution

---

## Success Criteria

### User Success

A RESICO freelancer or micro-SMB owner is successful when they can:

- Issue their first legally compliant CFDI 4.0 in under 5 minutes after account setup, from a mobile device, without contacting support.
- Know at a glance which invoices are paid, outstanding, and overdue — without maintaining a separate spreadsheet.
- Export their quarterly RESICO income summary in under 10 minutes, ready for their SAT declaration.
- Receive a stamped PDF + XML via WhatsApp share link within 10 seconds of hitting "stamp."

A contador partner is successful when they can:

- Manage all client RFC accounts from a single dashboard without switching logins.
- Export a clean accounting summary per client per period in under 2 minutes.
- Recommend FacturaMX to new clients with full confidence that it will not fail during month-end declaration periods.

**Aha! moment:** "I issued a legal factura from my phone at the job site in under 2 minutes, on a Sunday, without calling my contador." This is the specific experience that drives referrals and locks in retention.

### Business Success

| Milestone | Target | Timeline |
|-----------|--------|----------|
| Beta validation | 50 active beta users; ≥1 CFDI stamped each | Month 1–3 |
| First paid revenue | $20,000 MXN MRR | End of Month 6 |
| Growth inflection | $80,000 MXN MRR; 200+ paying users | End of Month 9 |
| Product-market fit | $200,000 MXN MRR; 500+ paying users | End of Month 18 |
| Contador channel active | 20+ partners actively referring | Month 9 |
| Organic authority | Google Page 1 for "facturación RESICO" | Month 6–9 |

Monthly churn target: <5% at launch, <3% at scale. Churn is structurally low once RFC/CSD and client registry are configured — switching requires migrating all historical CFDI records.

### Technical Success

- PAC partner API uptime: 99.5%+ during peak periods (end of month, end of quarter).
- CFDI stamping end-to-end time: <10 seconds from user confirmation to stamped XML returned.
- First-stamp success rate: >80% in beta; >90% at launch; >95% at scale (excluding user data errors caught pre-submission by RFC validator).
- RFC/postal code SAT validation response time: <2 seconds.
- Mobile PWA load time: <3 seconds on a 4G connection for the invoice creation screen.
- CSD private key encryption: stored encrypted at rest; never transmitted in plaintext.
- Zero CFDI data loss: every stamped CFDI stored permanently with its XML, PAC stamp seal (TIMBRE), and audit trail.

### Measurable Outcomes

| KPI | Phase 1 (Month 3) | Phase 2 (Month 9) | Phase 3 (Month 18) |
|-----|------------------|-------------------|-------------------|
| Active users | 50 beta | 200+ paying | 500+ paying |
| MRR (MXN) | n/a | $80,000 | $200,000 |
| Monthly churn | <10% | <5% | <3% |
| First-CFDI success rate | >80% | >90% | >95% |
| Contador partners | 5 | 20 | 100 |
| NPS | >50 | >60 | >65 |
| Invoices/user/month | ≥5 (habit signal) | ≥10 | ≥15 |
| Time to first CFDI | <5 min | <3 min | <2 min |

## Product Scope

### MVP — Minimum Viable Product

The MVP proves one thing: a non-technical Mexican freelancer or micro-SMB owner can self-issue a legally compliant CFDI 4.0 from any device, in under 5 minutes, without an accountant.

**MVP gates (all three must pass before paid launch):**

1. A non-technical RESICO freelancer creates an account, configures their RFC/CSD, and stamps their first CFDI in <5 minutes without contacting support.
2. <5% CFDI error rate after the first week of use (excluding RFC data errors surfaced preventatively by the RFC validator).
3. At least 3 contadores actively recommend FacturaMX to new clients after a single demo — without financial incentive.

**Core MVP features:**

- CFDI 4.0 invoice generation with PAC stamping
- Client RFC book with SAT registry validation
- Payment tracking (status, mark-as-paid, complemento de pago)
- RESICO accounting output (monthly income register + quarterly summary)
- Contador multi-RFC partner portal
- Mobile-first PWA (no app store required)

**Build timeline:** 6–8 weeks with a focused 2-person team (1 backend/PAC integration, 1 frontend/UX) plus a Mexican CPA/tax advisor.

### Growth Features (Post-MVP)

Post-MVP features unlock after all three MVP gates pass and $20K MXN MRR is reached:

- **Stripe + Conekta + Clip integration** — CFDI generation on payment; competes with Gigstack at accessible price point ($300–500 MXN/month vs. $1,650+).
- **Automatic SAT CFDI download** — pulls all issued CFDIs from SAT Mass Download API; auto-classifies income/expenses; eliminates manual reconciliation for contadores.
- **Payroll CFDI (nómina)** — for businesses with 1–10 employees; IMSS/INFONAVIT contribution tracking.
- **WhatsApp Business API integration** — automated invoice delivery and payment follow-up via official WhatsApp API (not just share link).
- **Alegra import tool** — one-click migration assistant targeting users hitting Alegra's volume cap.
- **Carta Porte complement** — transport/logistics mandate for courier businesses.

### Vision (Future)

- **Colombia DIAN compliance module** — Year 2; modular country adapter over the same invoicing + accounting core.
- **2026 SAT authenticity compliance** — document storage linking CFDIs to contracts, delivery receipts, payment evidence; SAT evidence request workflow with 5-day response tracking.
- **White-label contador platform** — accounting firms offer FacturaMX-powered invoicing under their own brand.
- **Pan-LATAM expansion** — Chile, Peru, Ecuador (each with e-invoicing mandates); Year 3–4.

---

## User Journeys

### Journey 1: Roberto — RESICO Freelancer Issues First Invoice

**Persona:** Roberto, 29, freelance graphic designer in Guadalajara. RESICO régimen. Earns $45,000–$80,000 MXN/month from 8–12 clients. Currently pays a contador $800 MXN/month primarily to issue CFDIs. Has tried the SAT portal twice; gave up both times. Loses clients who demand same-day facturas when he can't reach his contador.

**Opening scene:** Roberto finishes a logo project at 9 PM on a Thursday. His client WhatsApps him: "Roberto, ¿me puedes mandar la factura hoy? La necesito para mi declaración." His contador is offline. Roberto has heard about FacturaMX from his freelancer WhatsApp group.

**Rising action:** Roberto opens FacturaMX on his phone. He signs up with his RFC, uploads his CSD (.cer and .key files) via the guided onboarding wizard. The wizard validates his RFC against SAT's registry in real time — green checkmark. He adds his client: types the RFC, the system auto-fills the company name and validates the postal code. He creates an invoice: "Diseño de logotipo — $8,500 MXN + IVA." He selects CFDI use code "G03 — Gastos en general."

**Climax:** Roberto taps "Timbrar factura." Eight seconds later: the screen shows a stamped CFDI with the PAC's seal number. A share button appears: "Enviar por WhatsApp." He taps it. His client receives the PDF and XML in their WhatsApp chat 10 seconds after stamping.

**Resolution:** Roberto's client confirms receipt. Roberto marks the invoice as "enviada" and sets a 15-day payment reminder. He opens the dashboard: 3 invoices pending payment, 1 overdue. He pays $249 MXN for the Freelancer plan — less than 30% of what he'd pay his contador for the same function this month. "Esto es exactamente lo que necesitaba," he tells his WhatsApp grupo. Five members ask for the link.

**Journey requirements revealed:** RFC/CSD onboarding wizard, real-time SAT validation, PAC stamping, PDF+XML generation, WhatsApp share, invoice status dashboard, payment reminders, subscription payment.

---

### Journey 2: Carmen — Micro-SMB Owner Issues Invoice During Job

**Persona:** Carmen, 44, owner of a 6-person residential cleaning business in CDMX. Earns $120,000–$180,000 MXN/month. Half her clients demand CFDIs for deductibility. Uses Aspel managed by her contador ($771 MXN/month). When her contador is on vacation, she cannot invoice. Lost three December clients last year during the Christmas rush.

**Opening scene:** Carmen is supervising a deep cleaning job when a new client asks for a factura before paying. It's a Saturday. Her contador is at a wedding.

**Rising action:** Carmen opens FacturaMX on her tablet. The client's RFC is already in her contact book (she added it from the service agreement). She selects the client, fills in "Limpieza profunda de casa" — $3,200 MXN, pagado en efectivo, CFDI use "D10 — Gastos de dentistas y médicos" (the client corrects her: "D04 — Donativos"). Carmen changes the code, hits stamp.

**Climax:** Stamped CFDI appears in 9 seconds. She taps "Enviar por email." The client receives the PDF and XML immediately. Carmen taps "Marcar como pagado" — payment method: efectivo, amount $3,200 MXN.

**Resolution:** Carmen opens the income summary: $87,400 MXN collected this month, $12,800 MXN still outstanding on 4 invoices. She exports the month's income register for her contador's review. "Ya no necesito llamarle en fin de semana," she thinks.

**Journey requirements revealed:** Client contact book, offline-ready invoice draft, CFDI use code selection (with guidance), email delivery, mark-as-paid, payment method recording, income summary export.

---

### Journey 3: Miguel — Electricista Issues Invoice at Job Site, Recovers from RFC Error

**Persona:** Miguel, 38, independent electrician in Monterrey. Régimen general. Earns $35,000–$60,000 MXN/month. Commercial clients won't release payment without a factura. Has driven home between jobs just to issue an invoice from his desktop.

**Opening scene:** Miguel finishes an electrical installation at a commercial building. The facilities manager says: "Te pago cuando me mandes la factura." Miguel is 40 minutes from home.

**Rising action:** Miguel opens FacturaMX on his phone, starts creating the invoice. He types the client's RFC manually — but mistypes one character. The RFC validator flags it in red before he can submit: "RFC no encontrado en el SAT. Verifica el RFC con tu cliente." Miguel calls the manager, who corrects the RFC. The validator turns green.

**Climax:** Invoice stamped in 7 seconds. PDF sent via WhatsApp. The manager shows his phone to the building owner: "Ya llegó la factura." Miguel receives bank transfer notification 20 minutes later.

**Resolution:** Miguel marks the invoice as paid — SPEI, $12,800 MXN. He never drove home just to invoice again. $249 MXN/month vs. the $500 he paid his contador primarily for this task. Over 3 months, he refers 4 other electricians from his WhatsApp group.

**Journey requirements revealed:** Real-time RFC validation with clear error messaging, invoice creation from mobile, payment method SPEI, referral via word-of-mouth (trigger: solved problem at moment of need).

---

### Journey 4: Licenciada Esperanza — Contadora Onboards and Manages Client Portfolio

**Persona:** Esperanza, 52, CPA in Puebla with 30 micro-SMB clients. Currently uses CONTPAQi Despachos ($816 MXN/month). Logs into each client's SAT portal manually. Spends 3–4 hours/month per client on CFDI reconciliation. Her recommendation is the deciding factor for every tool her clients use.

**Opening scene:** Esperanza attends an IMCP regional event where a colleague mentions FacturaMX. She schedules a 20-minute demo with the FacturaMX team.

**Rising action:** In the demo, Esperanza's first question: "¿Se cae en fin de mes?" (Does it crash at month-end?) She sees the PAC partner SLA and the PAC uptime history. She imports 3 pilot clients from a CSV (RFC, razón social, régimen fiscal). For each client, she sets permissions: the business owner can view and create invoices; only she can access accounting exports.

**Climax:** Esperanza exports the accounting summary for all 3 pilot clients in one click — one CSV per client, per period. She opens the CFDI status dashboard: all 47 CFDIs issued this month, listed by client, with stamp status and payment status. She has not logged into the SAT portal once.

**Resolution:** Esperanza enrolls in the revenue share program. Over 4 months, she migrates 22 of her 30 clients to FacturaMX. She earns $4,378 MXN/month in referral commissions ($199 MXN × 22 clients). She presents FacturaMX at the next IMCP meeting. 6 other contadores request a demo.

**Journey requirements revealed:** Multi-RFC management dashboard, CSV client import, granular permission controls (view vs. edit vs. accounting access), accounting export per client per period, CFDI status dashboard, revenue share enrollment and tracking, PAC reliability visible to partners.

---

### Journey Requirements Summary

From the four journeys, the following capability areas are confirmed as essential for MVP:

| Capability Area | Revealed By |
|----------------|-------------|
| RFC/CSD onboarding wizard | Roberto, Carmen |
| Real-time SAT RFC/postal code validation | Roberto, Miguel |
| CFDI 4.0 generation and PAC stamping | All |
| PDF + XML generation and delivery | All |
| WhatsApp share + email delivery | Roberto, Miguel, Carmen |
| Client contact book | All |
| Payment status tracking + mark-as-paid | Roberto, Carmen, Miguel |
| Complemento de pago generation | Carmen (installments) |
| RESICO accounting output and export | Roberto |
| Contador multi-RFC management portal | Esperanza |
| Permission controls (client vs. contador) | Esperanza |
| Revenue share tracking | Esperanza |
| PAC uptime visibility (trust signal) | Esperanza |
| Invoice creation on mobile (PWA) | Miguel, Carmen |
| Offline draft mode | Carmen |

---

## Domain-Specific Requirements

### Compliance & Regulatory — Mexican SAT CFDI 4.0

**Mandatory CFDI 4.0 fields (must be correct or PAC rejects the invoice):**

- Issuer: RFC, nombre/razón social, régimen fiscal (tax regime code), postal code
- Receiver: RFC, nombre/razón social, régimen fiscal, código postal, uso CFDI (use code)
- Folio fiscal (UUID assigned by PAC after stamping)
- Fecha/hora de timbrado (timestamp of PAC stamping)
- Concepto: descripción, clave de producto/servicio (SAT catalog), clave de unidad, valor unitario, importe
- Impuestos: IVA rate/amount, ISR (if applicable), IEPS (if applicable for specific products)
- Forma de pago (payment form code: cash, card, SPEI, OXXO, etc.)
- Método de pago (PUE = single payment, PPD = deferred payments)
- Cadena original + Sello digital del emisor (issuer digital signature using CSD)
- Sello del SAT + Certificado del SAT (PAC-applied after stamping)

**Complemento de pago (payment complement):** Required by SAT when método de pago = PPD. Must be issued when each installment is received, referencing the original CFDI UUID. System must auto-generate when user marks a PPD invoice as partially/fully paid.

**CFDI cancellation:** Regulated process. SAT requires a cancellation reason code (01 = errors with replacement, 02 = errors without replacement, 03 = not performed, 04 = nominative operation). Receiver has 72 hours to accept or reject cancellation if amount > $1,000 MXN. System must handle cancellation workflow.

**SAT RFC/postal code validation:** SAT's public web service allows real-time validation of RFC + razón social + código postal combinations. This prevents the most common CFDI rejection: receiver's postal code doesn't match SAT registry. FacturaMX must call this API at the point of client entry, not at stamping.

**CSD (Certificado de Sello Digital) management:** Each RFC has a CSD consisting of a .cer file (certificate) and .key file (private key), protected by a password. The private key is used to sign the CFDI before sending to PAC. CSD has an expiration date (3 years from SAT issuance). System must: accept CSD upload, decrypt and sign CFDIs, alert users when CSD expires within 30 days.

**RESICO (Régimen Simplificado de Confianza):** Introduced in 2022. Covers physical persons (personas físicas) with annual income <$3.5M MXN. Flat tax rates from 1%–2.5% on gross income. No deductions except limited business expenses. Monthly provisional payments. Annual declaration. System must: (1) identify which users are RESICO, (2) generate a monthly income register showing gross income, applicable tax rate, and provisional tax due, (3) generate quarterly pre-filled declaration summary.

**Annual regulatory updates:** SAT issues a Miscelánea Fiscal (annual tax resolution) every December with CFDI schema updates effective January 1. Changes may affect catalogs (CFDI use codes, product/service codes, payment form codes), validation rules, or required fields. PAC partners absorb SAT API changes; FacturaMX must stay current with catalog updates.

**2026 SAT Reform — Authenticity Verification:** Digital platforms (those with >$6M MXN annual transactions) must provide SAT read access to transaction data. Businesses may receive SAT requests to prove invoiced transactions occurred — 5 business days to respond with supporting documents (contracts, delivery receipts, payment evidence). For Phase 2+, FacturaMX should build a document attachment system linking CFDIs to supporting evidence.

### Technical Constraints

**PAC integration (mandatory):** FacturaMX does not become its own PAC (requires SAT authorization, infrastructure investment of $500,000+ USD, 6+ months). Instead, it integrates with an existing authorized PAC via API. The PAC receives the pre-signed CFDI XML, validates it against SAT, applies the SAT stamp (timbre), and returns the stamped CFDI. PAC options: Edicom, Axcelsia, Invoiceone, SW SapienSoft. Selection criteria: sandbox access quality, per-stamp pricing ($0.10–$0.35 USD per stamp), SLA for peak periods, support responsiveness.

**CSD private key security:** The CSD private key (.key file) must never be stored in plaintext. Options: (a) encrypt at rest with user-controlled passphrase (simpler, user must re-enter for each session), or (b) derive an encryption key from the user's password (more seamless but requires careful key derivation). The private key is used only at signing time; after signing, it should not remain in memory longer than necessary.

**SAT catalog management:** SAT publishes catalogs of valid codes (regímenes fiscales, claves de producto/servicio, unidades de medida, usos CFDI, formas de pago). These catalogs must be embedded in the product and updated with each Miscelánea Fiscal. The product/service code catalog has 50,000+ entries — must be searchable by keyword.

### Integration Requirements

| System | Purpose | Required For |
|--------|---------|-------------|
| PAC API (Edicom or Axcelsia) | CFDI digital stamping | MVP |
| SAT public RFC registry | Receiver RFC + postal code validation | MVP |
| WhatsApp share (URL scheme) | Invoice delivery via WhatsApp | MVP |
| SMTP (Resend or similar) | Invoice delivery via email | MVP |
| MercadoPago / SPEI | Payment status tracking (manual entry; API later) | Phase 2 |
| SAT Mass Download API | Automatic CFDI reconciliation for contadores | Phase 2 |
| Stripe / Conekta | Payment collection + auto-CFDI generation | Phase 2 |
| WhatsApp Business API | Automated invoice delivery and reminders | Phase 2 |

### Risk Mitigations

| Risk | Mitigation |
|------|-----------|
| PAC API downtime at month-end | Multi-PAC fallback (primary + backup PAC); PAC SLA monitoring with user-visible status page |
| SAT catalog changes (annual Miscelánea) | Quarterly catalog sync process; PAC partner handles SAT schema changes; dedicated engineering task each December |
| CSD private key exposure | Encryption at rest; key used only in memory during signing; no plaintext storage or logging |
| Invalid CFDI rejections hurting trust | RFC validator + pre-submission validation catches 90%+ of rejection causes before PAC submission |
| CSD expiry causing service disruption | 30-day expiry warning; 7-day urgent warning; renewal guide in onboarding |

---

## Innovation & Novel Patterns

### Detected Innovation Areas

**Innovation 1: Regulatory Compliance as the Product (not a feature)**

Every US SaaS invoicing tool treats compliance as an add-on. FacturaMX inverts this: CFDI 4.0 compliance *is* the core product. The PAC integration, CSD management, RFC validation, and catalog management are not technical implementations of a feature — they are the entire value proposition. This means the product's moat deepens every year as SAT regulation tightens, while US tool moats erode.

**Innovation 2: RESICO-Native Accounting**

The RESICO simplified regime (3M+ users) has no dedicated tooling. CONTPAQi and Aspel were designed for régimen general with full double-entry accounting. Alegra does not surface RESICO-specific workflows. FacturaMX's accounting output is built specifically for RESICO's flat-rate, no-deduction structure — monthly income register, quarterly provisional payment calculator, annual declaration summary. This is not a subset of general accounting; it is a separate, simpler accounting model that no incumbent addresses natively.

**Innovation 3: Contador Channel as Primary Distribution**

Most SaaS tools treat accountants as integration partners. FacturaMX inverts this: the contador is the primary customer acquisition channel. One contador recommendation converts 10–50 client subscriptions instantly. The multi-RFC partner portal — with revenue share, client permissions, and accounting exports — is a product specifically built for the person who makes the buying decision for the actual end users. This distribution model is defensible: a competitor cannot simply copy the portal; they must build an entirely separate professional-grade interface.

### Market Context

The regulatory moat is validated by QuickBooks's Mexico exit in April 2023. QuickBooks — a global $18B company — could not make CFDI compliance work at their price point and withdrew from the market. This created 500,000–1,000,000 displaced SMBs in a single event. No US tool has re-entered the Mexican market since. The market self-selected against machine translation of compliance requirements.

### Validation Approach

- **PAC sandbox testing** before any user-facing development: validate that CFDI generation → signing → PAC submission → stamped XML roundtrip works correctly.
- **RFC validator testing** with 100+ real RFC/postal code combinations (valid and invalid) before beta launch.
- **Contador demo test** with 5 Puebla/CDMX contadores before launch: do they recommend it without financial incentive after one 20-minute demo?
- **Beta user first-stamp tracking**: measure time from account creation to first stamped CFDI; target <5 minutes.

---

## SaaS B2B — Specific Requirements

### Project-Type Overview

FacturaMX is a SaaS B2B product with a micro-business/prosumer end user and an accounting professional as the acquisition multiplier. The product combines B2C simplicity (a freelancer must be able to use it alone) with B2B depth (a contador must be able to manage 30 clients from a single interface). This dual-audience architecture is the core product design challenge.

### Technical Architecture Considerations

**Multi-tenancy model:** Each RFC (tax ID) is a tenant. A freelancer account has one RFC. A contador partner account has one login that manages multiple RFC tenants (their clients). Data isolation is strict: no CFDI data from RFC A is accessible from RFC B, even within the same contador portal.

**Authentication and access control:**
- End users: email + password, with 2FA for accounts managing CSD certificates.
- Contador portal: separate login with role-based access per client RFC (view-only vs. invoice-create vs. accounting-export vs. admin).
- CSD certificate: decrypted in memory only during CFDI signing; passphrase required at signing time.

**PAC integration architecture:**
- FacturaMX generates the CFDI XML, signs it with the user's CSD private key.
- Sends the signed XML to the PAC's stamping API.
- PAC validates against SAT, applies the timbre (SAT digital stamp), returns the stamped CFDI.
- FacturaMX stores the stamped XML + PDF permanently, associated with the invoice record.
- All PAC communication is over HTTPS; API keys stored as server-side environment variables, never client-side.

**Frontend architecture:** Progressive Web App (PWA) — single codebase for desktop and mobile; no native app store required for MVP. Installable on Android and iOS home screens. Offline draft capability: users can compose invoice details offline; stamping requires connectivity (PAC API call is inherently online).

**Subscription and billing:** MXN-denominated subscription managed via Stripe (accepts Mexican cards) or Conekta (OXXO + SPEI payments for subscribers). Invoice creation for subscription payments should also generate a CFDI for the customer (meta: FacturaMX must CFDI its own subscription revenue).

### Permission Matrix

| Role | Create Invoice | View Invoices | Mark Paid | Export Accounting | Manage Users | Access CSD |
|------|---------------|--------------|----------|------------------|--------------|-----------|
| Business Owner | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Contador (partner) | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ |
| View-only (client staff) | ❌ | ✅ | ❌ | ❌ | ❌ | ❌ |

### Implementation Considerations

- **CSD onboarding friction:** The CSD requires SAT appointment for new businesses. Onboarding wizard must detect if user doesn't have a CSD and provide a guided path (link to SAT appointment booking, explanation of what to bring, estimated wait time). For existing businesses with CSD, upload flow must be frictionless on mobile.
- **Catalog search performance:** The SAT product/service code catalog has 50,000+ entries. Search must return results within 500ms on mobile using a pre-loaded local index, not a server roundtrip.
- **CFDI XML generation:** Must be generated server-side (not client-side) to protect CSD private key. Client sends invoice details to server; server signs and submits to PAC; server stores stamped XML; client receives download URL.
- **Localization:** Spanish-only for MVP. All UI copy, error messages, and help text in Mexican Spanish. No English language option in MVP.

---

## Project Scoping & Phased Development

### MVP Strategy & Philosophy

**MVP Approach:** Problem-solving MVP — prove that the core compliance workflow (issue CFDI → track payment → export RESICO summary) works flawlessly for a non-technical user before adding any competitive features.

**MVP resource requirement:** 2 engineers (1 backend with Node.js/Python + PAC API experience; 1 frontend with React/PWA experience) + 1 Mexican CPA/tax advisor (part-time, $2,000–$5,000 USD/month or equity) + 1 product/growth lead. Total: 4 people, 6–8 weeks.

**Non-negotiable pre-build gates:**
1. Mexican CPA or tax attorney contracted as advisor before writing code.
2. PAC partner selected and sandbox API access confirmed before frontend work begins.
3. At least 10 Mexican freelancer/entrepreneur communities (WhatsApp, Facebook) joined and observed before any beta outreach.

### MVP Feature Set (Phase 1)

**Core User Journeys Supported:**
- Roberto's journey: RESICO freelancer self-issues CFDI from mobile.
- Carmen's journey: Micro-SMB owner issues invoices independently.
- Miguel's journey: Tradesperson issues invoice at job site, recovers from RFC error.
- Esperanza's journey (basic): Contador manages 3–5 pilot clients via partner portal.

**Must-Have Capabilities:**
- RFC/CSD account setup with guided onboarding wizard
- CFDI 4.0 invoice generation + PAC stamping (real-time, <10 seconds)
- Real-time RFC + postal code validation against SAT registry
- PDF + XML generation and storage
- WhatsApp share link + email delivery
- Client contact book (RFC, nombre, régimen fiscal, postal code, uso CFDI default)
- CSV client import (for migration from Alegra, SAT portal exports)
- Invoice status management (Draft, Stamped, Sent, Partial, Paid, Overdue, Cancelled)
- Mark-as-paid with payment method (cash, OXXO, SPEI, Mercado Pago, card)
- Complemento de pago generation for PPD invoices
- CFDI cancellation with SAT reason codes
- RESICO monthly income register
- RESICO quarterly tax summary (provisional payment estimate)
- Monthly income vs. collected report
- Overdue invoice dashboard with WhatsApp reminder template
- Contador multi-RFC partner portal (manage up to 30 client RFCs)
- Per-client CFDI status dashboard (for contador)
- Per-client accounting export CSV/XML (for contador)
- Revenue share referral tracking (for contador)
- MXN-denominated subscription (3 tiers: $249/$499/$999 MXN/month)
- CSD expiry alerts (30-day and 7-day warnings)

### Post-MVP Features (Phase 2)

Prioritized by revenue impact and competition:

1. **Stripe + Conekta + Clip payment collection** — CFDI auto-generation on payment received.
2. **Automatic SAT CFDI download** — SAT Mass Download API integration for contador reconciliation.
3. **Alegra one-click migration tool** — targets Alegra users hitting volume caps.
4. **Payroll CFDI (nómina)** — for businesses with 1–10 employees.
5. **WhatsApp Business API** — official automated invoice delivery and payment reminders.
6. **Carta Porte complement** — transport/logistics CFDI complement.

### Phase 3 — Expansion

1. Colombia DIAN compliance module (Year 2).
2. 2026 SAT authenticity compliance — document storage linked to CFDI records.
3. White-label contador platform play.

### Risk Mitigation Strategy

**Technical risks:**
- PAC API downtime: multi-PAC fallback; real-time PAC status monitoring; user-visible service status page.
- SAT catalog changes: automated catalog sync each January; PAC partner absorbs SAT schema changes.
- CSD expiry disruption: proactive 30-day/7-day alerts with renewal walkthrough.

**Market risks:**
- Alegra removes volume caps: accelerate contador channel before Alegra can close the gap; the multi-RFC partner portal is 6–12 months of development that Alegra would need to replicate.
- GTM defaults to US channels: explicit channel prohibition; all acquisition budget directed to WhatsApp communities and contador outreach only.

**Resource risks:**
- No Mexican tax expert on team: non-negotiable — do not write code until CPA advisor is contracted. Every CFDI catalog choice and RESICO accounting formula must be validated by a licensed Mexican CPA before release.
- If team shrinks: drop payroll CFDI and Carta Porte from Phase 2; focus on core CFDI + payment tracking + contador portal.

---

## Functional Requirements

### Invoice Creation & Management

- FR1: Users can create a CFDI 4.0 invoice draft specifying issuer details (pre-filled from account), receiver (from contact book or ad hoc), line items (description, SAT product/service code, unit, quantity, unit price), tax type (IVA/ISR/IEPS), payment form code, and payment method code (PUE/PPD).
- FR2: Users can search the SAT product/service code catalog (50,000+ entries) by keyword to find and assign the correct clave.
- FR3: Users can submit a draft invoice for PAC stamping and receive the stamped CFDI XML and PDF within 10 seconds.
- FR4: Users can cancel a stamped CFDI selecting a SAT-required cancellation reason code (01–04).
- FR5: Users can generate a complemento de pago (payment complement) when marking a PPD invoice as paid or partially paid.
- FR6: Users can view the complete history of all CFDIs issued under their RFC, with stamp status, UUID, and download links.
- FR7: Users can download the stamped XML and PDF for any issued CFDI at any time.
- FR8: Users can create an invoice draft offline and submit it for stamping when connectivity is restored.

### Client & RFC Management

- FR9: Users can add clients to a contact book with RFC, nombre/razón social, régimen fiscal, código postal, and default uso CFDI.
- FR10: The system validates a client's RFC + nombre + código postal against SAT's public registry in real time before saving, surfacing specific validation errors.
- FR11: Users can import clients from a CSV file (RFC, nombre, régimen fiscal, código postal, uso CFDI columns).
- FR12: Users can view the full CFDI issuance history per client.
- FR13: Users can edit client details; the system re-validates RFC data against SAT registry on save.

### Invoice Delivery & Communication

- FR14: Users can send an invoice PDF and XML to a client via email directly from the invoice screen.
- FR15: Users can share an invoice PDF via WhatsApp share link (opens WhatsApp with pre-filled message and PDF attachment URL).
- FR16: Users can send a manual payment reminder via a pre-formatted WhatsApp message template from within any overdue invoice.
- FR17: Users can configure automatic payment reminders to be sent at user-defined intervals after the invoice due date.

### Payment Tracking

- FR18: Users can view all invoices by status: Draft, Stamped, Sent, Partial, Paid, Overdue, Cancelled.
- FR19: Users can mark an invoice as paid, recording payment date, method (cash, OXXO, SPEI, Mercado Pago, card), and amount received.
- FR20: Users can view a monthly dashboard showing total invoiced vs. total collected vs. total outstanding.
- FR21: Users can view an overdue invoice list sorted by days past due, with outstanding amounts.
- FR22: The system flags invoices as Overdue automatically based on user-configured payment terms (default: 30 days from invoice date).

### RESICO Accounting

- FR23: Users registered under the RESICO régimen can view a monthly income register listing all stamped CFDIs for the period with gross income totals.
- FR24: The system calculates and displays the RESICO provisional tax estimate for the current month based on gross income and the applicable flat rate from SAT's RESICO table.
- FR25: Users can export the monthly income register as a formatted PDF or CSV compatible with RESICO provisional payment declarations.
- FR26: Users can export a quarterly RESICO income summary pre-formatted for the SAT quarterly declaration.
- FR27: Users can log business expenses against the limited set of RESICO-deductible categories (not full double-entry accounting).
- FR28: Users can export an annual RESICO income and expense summary for the annual SAT declaration.

### Account & Certificate Management

- FR29: Users can create an account with RFC and upload their CSD (.cer and .key files) via a guided onboarding wizard.
- FR30: The system validates CSD files on upload (checks certificate validity, RFC match, expiry date) and alerts if the CSD is expired or within 30 days of expiry.
- FR31: Users receive an in-app alert and email notification when their CSD expires within 30 days and again within 7 days, with a guided renewal path.
- FR32: Users can update their CSD files when renewing their certificate.
- FR33: Users can manage their subscription plan (upgrade, downgrade, view billing history) from account settings.
- FR34: Users can view and export a usage summary (invoices issued per month, current plan tier, PAC stamp balance if applicable).

### Contador Partner Portal

- FR35: Contador users can create a partner account and manage multiple client RFC accounts from a single dashboard.
- FR36: Contador users can add client RFC accounts via CSV import or manual entry, with configurable access permissions per client (view-only, invoice-create, accounting-export).
- FR37: Contador users can view the CFDI status dashboard for any client RFC (all invoices, stamp status, payment status) without switching accounts.
- FR38: Contador users can export the accounting summary (income register, income vs. collected report) for any client RFC for any period.
- FR39: Contador users can enroll in the revenue share program and view their referral count and commission balance.
- FR40: The system generates a unique referral link for each contador partner and tracks signups attributed to that link.
- FR41: Business owners can grant or revoke a contador's access to their RFC account from their own account settings.

### Reporting & Analytics

- FR42: Users can view a dashboard showing key metrics: total CFDIs this month, total income stamped, total collected, overdue balance, and invoices pending payment.
- FR43: Users can filter the invoice list by status, date range, client, and payment method.
- FR44: Users can export any filtered invoice list as CSV for external analysis.

---

## Non-Functional Requirements

### Performance

- CFDI stamping end-to-end (from user confirmation to stamped XML displayed): <10 seconds at p95 under normal PAC load.
- SAT RFC validation API call: <2 seconds at p95.
- Invoice creation screen load on mobile (4G connection): <3 seconds.
- SAT product/service catalog search: <500ms response (client-side index, no server roundtrip).
- Dashboard load (up to 500 invoices in history): <2 seconds.
- Peak capacity: system must handle 10× normal traffic without performance degradation during month-end declaration periods (last 3 business days of each month and quarter).

### Security

- CSD private key: encrypted at rest using AES-256; never stored in plaintext; never transmitted to client; decrypted in memory only during CFDI signing; cleared from memory after signing completes.
- All data in transit: HTTPS/TLS 1.3 minimum; HSTS enforced.
- All CFDI data and user financial data: encrypted at rest in database.
- Authentication: email + password with bcrypt hashing; TOTP 2FA required for accounts with CSD certificates stored.
- Session management: JWT tokens with 8-hour expiry; refresh tokens with 30-day expiry; invalidated on logout and password change.
- Audit log: every CFDI creation, stamping, cancellation, and payment marking is logged with timestamp, user ID, and IP address; logs retained for 5 years (SAT audit requirement).
- No CFDI data or RFC data shared with third parties except the contracted PAC for stamping purposes.
- PCI DSS: payment card data never stored; all card transactions processed via Stripe/Conekta as payment processor.

### Reliability

- PAC integration uptime: 99.5%+ measured monthly; SLA with PAC partner required.
- Backup PAC: secondary PAC configured for automatic failover if primary PAC returns errors for >60 seconds.
- CFDI storage: every stamped CFDI XML stored in cloud object storage with redundancy; zero tolerance for data loss of stamped CFDIs.
- Database backups: daily automated backups retained for 30 days; point-in-time recovery to within 1 hour.
- Offline draft capability: invoice drafts saved locally in browser PWA cache; automatically synced when connectivity restored.
- Scheduled maintenance windows: only during 2–5 AM Mexico City time (lowest usage); 48-hour advance notice to users.

### Scalability

- Initial capacity: 1,000 concurrent active users.
- Growth target: 10,000+ registered users within 18 months without architecture changes.
- Invoice volume: designed to handle 500,000+ CFDIs/year by end of Year 2.
- Multi-tenancy: RFC-level data isolation enforced at database query level (no shared tables without RFC-scoped queries).
- Stateless API design: horizontal scaling of application servers without session affinity.

### Integration Reliability

- PAC API: must handle and retry transient PAC errors (HTTP 5xx, timeout) automatically with exponential backoff; surface only persistent errors to users with actionable error messages in Spanish.
- SAT RFC validation: must gracefully degrade if SAT registry API is unavailable (allow user to proceed with a warning that validation is temporarily unavailable; flag invoice as unvalidated).
- Email delivery: transactional email via Resend or SendGrid; delivery rate >98%; bounce handling; unsubscribe management per CAN-SPAM/Mexico LFPDPPP.

### Accessibility

- Spanish-language UI only for MVP; all user-facing text in Mexican Spanish (not Castilian or generic Latin American Spanish).
- WCAG 2.1 AA compliance for core invoice creation and delivery flows (needed for gobierno/corporate clients who have accessibility mandates).
- Mobile-first responsive design: all core flows completable on a 375px-wide screen (iPhone SE baseline) without horizontal scrolling.
- Touch targets: minimum 44×44px for all interactive elements on mobile.
- Error messages: always in Spanish, specific, and actionable (never "something went wrong" — always "El RFC del receptor no fue encontrado en el SAT. Verifica el RFC con tu cliente.").
