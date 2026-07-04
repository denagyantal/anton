---
stepsCompleted: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
inputDocuments:
  - ideas/shortlisted/freelancer-payment-collection-late-invoice-chaser.md
  - _bmad-output/planning-artifacts/brief-freelancer-payment-collection.md
workflowType: prd
date: 2026-07-04
author: Root
classification:
  projectType: saas_b2b
  domain: fintech_smb
  complexity: medium
  projectContext: greenfield
---

# Product Requirements Document — Freelancer Payment Collection & Late Invoice Chaser

**Author:** Root
**Date:** 2026-07-04

---

## Executive Summary

Freelancers and small service businesses lose an estimated $15 billion annually to late and non-payment. Every invoicing tool on the market — QuickBooks, FreshBooks, Xero, Bonsai — treats invoice creation as the endpoint. They provide at most a single generic reminder, which clients routinely ignore. After that first reminder, users have three options: draft awkward manual follow-ups, write off the debt, or escalate to a collections agency at 25–40% commission and permanent relationship damage.

This product — a configurable invoice escalation engine — fills the gap between "invoice sent" and "sent to collections." It integrates with existing accounting software via OAuth, automatically monitors overdue invoices, and executes multi-step escalation sequences that progress from a warm human-feeling nudge to a firm formal notice, without the user lifting a finger after initial setup. The core ROI story is binary: one recovered invoice pays for the lifetime license. The target market is 73–76 million US freelancers plus millions of small service businesses — a segment already proven to buy invoice tooling and already experiencing the pain acutely.

The product launches on AppSumo as a Lifetime Deal ($59–79 solo, $149–199 agency) to establish initial revenue and social proof, then transitions to monthly subscriptions at $15–25/month with WhatsApp and AI tone features as the premium differentiator.

### What Makes This Special

Three characteristics separate this product from everything in the $0–$50/month range:

**Configurable multi-step escalation with automatic tone progression.** No product under $200/month offers a configurable sequence that moves from "friendly check-in" to "formal pre-collections notice" automatically. Chaser HQ does this at $200+/month. This product delivers the same capability at 1/10th the price.

**Invoice open/view tracking with engagement context.** The product distinguishes between "client hasn't seen the invoice" (delivery problem — resend) and "client has opened it 5 times but hasn't paid" (intentional delay — escalate). This intelligence eliminates the most common freelancer mistake: assuming a non-payment is an oversight when it is actually a decision.

**WhatsApp Business API as escalation channel (v1.1).** Documented freelancer behavior shows WhatsApp is the channel that actually gets responses in late-payment situations. Freelancers already do this manually — this product automates it. No competitor offers this integration. It becomes the defining differentiator post-MVP.

The positioning is precise: everything Chaser HQ does, at 1/10th the price, with WhatsApp.

## Project Classification

- **Project Type:** SaaS web application (B2SMB — business-to-small-and-medium-business)
- **Domain:** Fintech / SMB productivity tooling
- **Complexity:** Medium — OAuth integrations with major accounting platforms (QuickBooks, Xero), transactional email delivery with tracking, financial data handling, multi-tenant user isolation
- **Project Context:** Greenfield — no existing codebase

---

## Success Criteria

### User Success

The primary user success signal is a payment arriving on an overdue invoice without the user initiating any manual follow-up action. This event — "money arrived while I was doing something else" — is the "aha" moment that converts trial users to committed customers and drives word-of-mouth referral.

Secondary user success signals:
- User configures their escalation sequence once and never revisits it (passive operation achieved)
- User reports no longer experiencing the emotional discomfort of manual collection follow-up
- User can point to a specific dollar amount recovered that they believe they would have written off without the product
- Dashboard shows collection rate improvement visible within 30–60 days of activation

### Business Success

**6-month targets (AppSumo launch window):**
- 500–1,000 AppSumo LTD units sold in launch week
- $30,000–$79,000 gross LTD revenue
- 3+ verified OAuth integration partnerships (QuickBooks, Xero, FreshBooks minimum)
- 25+ user reviews citing specific dollar recovery amounts on G2/Capterra/AppSumo

**12-month targets (subscription transition):**
- $10,000 MRR from subscription base
- WhatsApp Business API integration live as premium differentiator
- Agency/team tier active at $75–150/month
- 500+ monthly active users with measurable AR recovery data

**24-month targets (scale):**
- $30,000–$80,000 MRR (subscriptions + WhatsApp usage credits + accountant channel referrals)
- Accountant/bookkeeper partner channel generating 20%+ of new user acquisition
- B2B service business segment (trades, professional services) with dedicated onboarding

### Technical Success

- Invoice sync reliability: 95%+ of QB/Xero syncs complete without error
- False positive rate: <1% — escalation emails must never be sent to already-paid invoices (zero tolerance)
- Payment halt latency: When payment recorded in source tool, escalation halts within 15 minutes
- Email delivery rate: >95% of escalation emails delivered successfully (not bounced or flagged spam)
- Time to first escalation: <30 minutes from user completing integration setup

### Measurable Outcomes

| Metric | Target | Measurement Method |
|--------|--------|--------------------|
| Average days-to-payment reduction | 8+ days faster vs. user baseline | Invoice timestamp delta |
| Collection rate improvement | 15%+ more invoices paid within 30 days | Before/after comparison |
| User "aha" timing | First recovered payment within 14 days | In-app event tracking |
| AppSumo LTD units (week 1) | 500–1,000 | AppSumo dashboard |
| Trial-to-paid conversion | >25% | Stripe data |
| Monthly active users | 60%+ of paid base | Product analytics |
| Net Promoter Score | >50 | Quarterly survey |
| Churn rate (monthly sub) | <5%/month | Subscription analytics |

---

## Product Scope

### MVP — Minimum Viable Product

The MVP does one thing extremely well: takes an overdue invoice and automatically chases it via email until it is paid or escalated to the user for a manual decision. WhatsApp, AI tone generation, and FreshBooks integration are launch differentiators deferred to v1.1 so the core value proposition can ship and be validated faster.

**MVP must-haves:**
- OAuth integration with QuickBooks Online and Xero
- Automatic overdue invoice detection and sync
- Configurable 5-step escalation sequence (email only)
- Email send via user's domain + open/click tracking
- Invoice view tracking (QB/Xero native + email pixel)
- Late fee auto-calculation and invoice notice generation
- Pre-collections warning template (user-approved before send)
- Dashboard: outstanding AR by stage, invoice timeline, collection rate
- Payment detection: halts escalation when payment recorded in source tool
- Basic onboarding wizard for integration setup

**MVP out of scope:**
- WhatsApp Business API integration (v1.1)
- FreshBooks, Stripe, Wave, Harvest integrations (v1.1+)
- SMS (v1.1, after WhatsApp decision validated)
- AI-generated message customization (v1.1)
- Team/multi-user accounts (v1.1)
- Payment plan offer generator (v1.1)
- Collections agency referral marketplace (v2.0)
- Mobile app (v2.0)
- Zapier/REST API (v2.0)
- Customer-facing payment portal (deferred — Stripe handles independently)

### Growth Features (Post-MVP, v1.1)

- WhatsApp Business API: automated WhatsApp template messages as escalation step when email passes 14 days with no response
- AI tone adjustment: Claude API calibrates message tone by days overdue, client payment history, invoice value, relationship type
- FreshBooks and Stripe integrations
- Team/agency plan: multiple users, shared dashboard, per-client escalation ownership
- SMS fallback channel
- Per-client escalation profiles (different default sequences for different client types)

### Vision (Future, v2.0+)

- Accountant/bookkeeper partner portal: manage AR escalation across multiple client accounts from single dashboard
- Collections agency referral marketplace with revenue sharing
- Payment plan offer generator with automated structured payment plan proposals
- Zapier integration and REST API for custom workflows
- B2B service business specialized onboarding (HVAC, trades, professional services) with industry-specific templates
- White-label offering for accounting software
- UK, Australia, Canada market expansion

---

## User Journeys

### Journey 1 — Alex the UX Designer: First Recovery Without Lifting a Finger

Alex has been freelancing for six years and bills $8,000–$15,000/month across five clients on FreshBooks. Three months ago a $4,200 invoice went to 45 days past due. Alex sent two awkward emails and one painfully uncomfortable phone call before the client finally paid — six weeks late. Alex vowed never to let that happen again, but has no system.

A Reddit r/freelance thread titled "How do you follow up on late invoices without feeling like a money-grubber?" surfaces during a slow afternoon. Several replies mention a tool that automates the whole sequence. Alex clicks the AppSumo link, reads the copy, and recognizes the exact pain described. The $59 price is less than Alex charges for two hours. Alex buys.

Onboarding takes 8 minutes: OAuth to QuickBooks (Alex actually uses FreshBooks, but QB is available so Alex connects their QB backup account), reviews three currently-overdue invoices synced automatically, and chooses the default escalation sequence. The tool explains exactly what will happen: "In 2 days, client Sarah Chen will receive a warm reminder for invoice #142 ($1,800, 3 days overdue)."

Alex doesn't think about it again. Four days later, a Slack notification: "Invoice #142 — Payment received: $1,800." Sarah Chen paid within 24 hours of the first automated email. Alex had zero involvement. The $4,200 write-off will never happen again.

*Capabilities revealed: OAuth integration, overdue invoice sync, default escalation sequence, email send, payment detection, in-app/push notification on payment.*

### Journey 2 — Maria the Studio Owner: WhatsApp Works While She's on a Shoot

Maria runs a three-person photography studio billing $12,000–$25,000/month. She uses QuickBooks and has a part-time bookkeeper. A $6,000 corporate client invoice has been sitting at 47 days past due — the client's AP department keeps saying "it's in the queue" but never pays. Maria has manually sent three emails and two WhatsApp messages. Every follow-up requires her to mentally prepare, draft carefully, and then wait anxiously.

Maria's bookkeeper discovers the tool and configures it for the studio: QuickBooks OAuth, a 5-step escalation sequence customized to include a firmer tone at day 14 ("Per our agreement, a late fee of $180 has been applied") and a pre-collections warning letter at day 30. For the existing $6,000 invoice (already at day 47), the bookkeeper manually triggers the pre-collections letter step.

The formal letter arrives in the client's inbox. Within 48 hours, the AP department processes the payment — the formal language changed the psychological frame from "vendor pestering" to "formal obligation." The $6,000 plus $270 in late fees lands in Maria's account.

Three months later, Maria is in the middle of a wedding shoot when she receives a notification: "Invoice #201 ($3,200) — Client viewed invoice 4 times. Day 8 follow-up sent automatically." She doesn't have to do anything. The client pays the next morning.

*Capabilities revealed: QuickBooks OAuth, configurable escalation sequences, late fee calculation, pre-collections warning template, manual escalation trigger override, invoice view tracking, bookkeeper multi-user operation (agency plan), notification while user is offline.*

### Journey 3 — Dave the HVAC Operator: The Pre-Collections Letter Did the Work

Dave runs a six-person HVAC service business in the Midwest, invoicing 80–120 jobs per month. His biggest collection problem is commercial clients — property managers who routinely pay 45–90 days late as policy. Dave uses Xero. His office manager Carrie manually calls clients every two weeks, which is uncomfortable and often ineffective.

After a $12,000 commercial job required four months and a lawyer letter to collect, Dave asks Carrie to find something better. Carrie discovers the tool through the Xero app marketplace. She configures Xero OAuth and sets up a commercial-client escalation profile: longer initial delay (net-30 terms before escalation starts), firmer language from step 1, and automatic late fees at 1.5%/month.

For recurring commercial clients, the tool automatically catches every invoice the moment it crosses their net-30 terms. Carrie's phone calls drop from 15/week to 2/week — only for cases where clients are actively disputing an invoice.

At day 30, a $7,500 HVAC maintenance invoice for a property management company triggers the pre-collections warning letter automatically. Dave reviews and approves it in 45 seconds via the dashboard. The property manager's accounts payable team processes the payment within 72 hours — the letter indicates "next step is formal collections proceedings," which no property manager wants on their record.

*Capabilities revealed: Xero OAuth, per-client escalation profile configuration, configurable net-terms thresholds, late fee percentage calculation, pre-collections letter review workflow, multi-invoice management, office manager as primary user (not the business owner).*

### Journey 4 — Bookkeeper Recommends to 12 Clients at Once

Sandra is a QuickBooks-certified bookkeeper managing AR for 14 SMB clients — a mix of consultants, tradespeople, and studio owners. Late payment management across all 14 is her single biggest time sink: manually tracking overdue status, drafting reminder emails, calling clients on behalf of her clients.

Sandra discovers the tool through a QuickBooks ProAdvisor forum. She signs up for the agency plan ($149 LTD), connects her own management credential, and evaluates on three client accounts. Within 30 days, she has data: overdue invoices are clearing 12 days faster on average. She recommends the tool to all 14 clients. Nine purchase within two weeks.

Sandra becomes an informal advocate in her ProAdvisor network. Her recommendation generates 23 additional sales over three months from bookkeeper word-of-mouth.

*Capabilities revealed: Agency/team plan, multi-account management, cross-client AR dashboard, collection rate reporting with before/after comparison, referral attribution.*

### Journey Requirements Summary

Journeys reveal the following capability areas:
- **Integration layer**: OAuth to QuickBooks and Xero, real-time payment sync, automatic overdue detection
- **Escalation engine**: Configurable multi-step sequences, per-client profiles, manual override, step timing control
- **Email delivery and tracking**: Branded send from user domain, open pixel, link tracking, bounce/spam handling
- **Invoice intelligence**: View tracking (accounting platform native + email), days overdue calculation, escalation stage assignment
- **Late fee management**: Flat and percentage configurations, auto-calculation, invoice amendment, notice generation
- **Pre-collections workflow**: Template generation, user review and approval, PDF output
- **Dashboard and reporting**: AR by stage, invoice-level timeline, collection rate metrics, payment feed
- **Notification system**: Payment received alerts, escalation milestone notifications, escalation approval prompts
- **Account management**: Solo and agency (multi-user/multi-client) tiers, integration setup wizard

---

## Domain-Specific Requirements

### Compliance & Regulatory

- **Financial data handling**: The product reads financial data (invoice amounts, client names, payment status) from OAuth-connected accounting platforms. No financial data is stored beyond what is needed for escalation tracking. Invoice amounts and client identifiers are stored; full accounting ledger data is not.
- **Email compliance**: All escalation emails must comply with CAN-SPAM (US) requirements: clear sender identification, opt-out mechanism, physical address in footer. Users who receive an opt-out request from a client must be notified immediately and that client's escalation must halt.
- **Late fee legality**: Late fee terms are configured by the user based on their own client agreements. The product auto-calculates but does not enforce or validate that specific late fee percentages are legal in the user's jurisdiction — this is the user's responsibility. A clear disclaimer must be displayed in the late fee configuration UI.
- **GDPR relevance**: If EU users are onboarded (not initial target but possible), client personal data (names, emails) falls under GDPR. Architecture should support data deletion requests per client record.

### Technical Constraints

- **OAuth token security**: OAuth tokens from QuickBooks and Xero must be encrypted at rest and never exposed in logs or API responses. Token refresh handled automatically; users notified if token expires and re-auth is needed.
- **Email reputation**: Sending escalation emails from users' own domains via SMTP relay or SendGrid domain authentication (SPF/DKIM) is required. Shared sending IP pools must be warm and managed to prevent deliverability degradation.
- **Webhook reliability**: Accounting platform webhooks (QB/Xero) for real-time payment events may fail or arrive out of order. System must implement polling as fallback to catch missed events. Max payment detection lag: 15 minutes.
- **Multi-tenant isolation**: Each user account's invoice data, escalation sequences, and client data must be strictly isolated. No cross-tenant data access is permissible.

### Integration Requirements

- **QuickBooks Online API**: OAuth 2.0, invoice list, invoice status, payment events, customer data. Webhooks for payment events.
- **Xero API**: OAuth 2.0, invoice list, invoice status, payment events, contact data. Webhooks for payment events.
- **SendGrid (or equivalent)**: Transactional email send, open/click tracking, bounce/spam notification webhooks.
- **WhatsApp Business API** (v1.1): Meta Cloud API, pre-approved payment collection templates, message status webhooks.
- **Stripe** (payments, v1.1): For users who invoice via Stripe rather than accounting platforms.

### Risk Mitigations

- **False positive risk (escalation email to paid client)**: This is the product's highest-severity failure mode. Mitigation: real-time sync before every scheduled email send, payment status double-check within 5 minutes of scheduled send time, hard block on send if payment detected. SLA: <1% false positive rate.
- **Email deliverability degradation**: Shared IP reputation risk. Mitigation: domain-authenticated sending (SPF/DKIM mandatory), volume throttling per domain, bounce monitoring with automatic pause above 5% bounce rate.
- **OAuth token expiration causing silent failure**: If escalation stops because OAuth token expired and user is unaware, invoices go uncollected. Mitigation: proactive notification 3 days before token expiry, dashboard warning banner, automatic email alert on sync failure.
- **Escalation email tone harm**: An escalation email sent with the wrong tone at the wrong time can damage a freelancer-client relationship. Mitigation: default sequences are conservative; each step is editable; users can pause escalation per client at any time with one click.

---

## Innovation & Novel Patterns

### Detected Innovation Areas

**WhatsApp as an AR collection channel** (v1.1): No product in the invoicing or AR automation space has built WhatsApp Business API into an escalation sequence for freelancers and SMBs. The innovation is the channel selection — WhatsApp is where clients already communicate personally, making payment messages feel like peer-to-peer requests rather than corporate dunning letters. The technical challenge is Meta's template approval process, which requires pre-approved message content for payment collection use cases.

**Engagement intelligence driving escalation decisions**: Tracking whether a client has opened an invoice (accounting platform native view event) and whether they have opened the reminder email (pixel tracking) creates a behavioral signal layer that no current product in this price range offers. The innovation is using engagement data — "viewed 4 times, not paid = intentional delay" vs. "never opened = delivery/attention failure" — to inform escalation strategy rather than relying on calendar-only rules.

**Accountant-as-distribution-channel**: The product's agency tier is not just a multi-user plan — it is a designed distribution wedge. Bookkeepers and accountants who manage QuickBooks/Xero for multiple SMB clients are an underexploited B2B2C channel. One accountant adoption converts 10–20 SMB accounts. This is novel for a product in this price range and category.

### Market Context

Direct AR automation competitors with multi-step email escalation exist only at enterprise pricing (Chaser HQ: $200+/month; Tesorio; Versapay). The AppSumo LTD market has not seen a focused invoice escalation product. InvoiceChaser and InvoicifyAI are early-stage validators but neither has done an AppSumo launch nor has WhatsApp integration. The window for first-mover positioning in the LTD/SMB segment is open.

### Validation Approach

- MVP validation: AppSumo launch target of 300+ units sold = market exists at this price point
- Email escalation validation: 60%+ of activated users receive at least one payment they attribute to the tool within 14 days
- WhatsApp validation (pre-v1.1): Survey activated MVP users — "Would you have sent a WhatsApp manually if this tool hadn't triggered?" Target: 40%+ say yes, validating the automation opportunity

### Risk Mitigation

- WhatsApp template approval risk: Meta's approval process is unpredictable. Mitigation: submit templates in parallel with MVP development; do not gate v1.1 launch on approval (SMS fallback if needed).
- Engagement tracking false signals: Email open tracking via pixel is imperfect (Apple Mail Privacy Protection inflates open rates). Mitigation: weight accounting platform view events more heavily than email pixel events; communicate limitations transparently in UI.

---

## SaaS B2B Specific Requirements

### Project-Type Overview

This is a B2SMB SaaS product with a multi-tenant web application architecture, OAuth integrations as the core onboarding mechanic, and transactional email as the primary output channel. The product category is AR automation — adjacent to invoicing software but distinctly focused on collection rather than creation. The buyer and the user are typically the same person (solo freelancer or small business owner), except in the agency tier where a bookkeeper is the buyer/user and their clients are the beneficiaries.

### Technical Architecture Considerations

- **Multi-tenant SaaS**: Each user account operates as an isolated tenant. Data model must enforce tenant isolation at the database query level, not just application layer.
- **Job queue for escalation**: Scheduled email sends, sync jobs, and webhook processing must be handled via a reliable job queue (e.g., Sidekiq, BullMQ, or equivalent). Failed jobs must retry with exponential backoff and alert on repeated failure.
- **OAuth token management**: Encrypted token storage, automatic refresh before expiry, per-tenant token isolation, re-auth flow on expiry.
- **Idempotent payment sync**: Payment events from webhooks must be idempotent — a payment event received twice must not halt escalation twice or create duplicate records.
- **Audit trail**: Every escalation action (email sent, step triggered, escalation paused, payment detected) must be logged with timestamp and actor. This is the invoice-level timeline in the dashboard.

### Tenant Model

- **Solo tier**: Single user, single QB or Xero connection, unlimited invoices under escalation
- **Agency tier (v1.1)**: Single account holder, multiple client connections (each with separate QB/Xero OAuth), shared dashboard across clients, per-client escalation sequence configuration

### Permission Matrix

| Role | View Dashboard | Configure Sequences | Approve Pre-Collections | Pause Escalation | Manage Integrations |
|------|---------------|--------------------|-----------------------|-----------------|---------------------|
| Solo Owner | ✓ | ✓ | ✓ | ✓ | ✓ |
| Agency Admin | ✓ (all clients) | ✓ (per client) | ✓ | ✓ | ✓ |
| Agency Staff (v1.1) | ✓ (assigned clients) | ✓ (assigned clients) | — | ✓ | — |

### Implementation Considerations

- **AppSumo LTD billing**: LTD purchasers must be flagged in the system with feature limits based on plan tier (Solo LTD vs. Agency LTD). Post-LTD subscription billing via Stripe.
- **Email sending architecture**: Each user's emails must appear to come from their own email address (via SMTP relay with user domain authentication). Fallback: send from a branded product domain if user has not configured custom domain.
- **WhatsApp message throttling (v1.1)**: WhatsApp Business API has per-number daily limits for template messages. System must queue and throttle WhatsApp sends per connected WhatsApp number.
- **Accounting platform rate limits**: QB API: 500 requests per minute. Xero API: 60 requests per minute per tenant. Sync jobs must respect these limits; bulk initial sync must be rate-limited and queued.

---

## Project Scoping & Phased Development

### MVP Strategy & Philosophy

**MVP Approach:** Problem-solving MVP — the product must demonstrably recover money that users would otherwise lose. The MVP is not a feature preview; it must produce the "aha" moment (a payment arriving without manual action) within 14 days of activation for at least 60% of users.

**Resource Requirements:** 1–2 full-stack engineers, 1 part-time designer, 1 founder/PM. Target build time: 8–12 weeks to AppSumo-ready product.

### MVP Feature Set (Phase 1)

**Core User Journeys Supported:**
- Solo freelancer connects QB/Xero → tool detects overdue invoices → configures escalation sequence → emails send automatically → payment detected → escalation halts
- User reviews invoice-level timeline showing all escalation actions taken
- User approves and sends pre-collections warning letter

**Must-Have Capabilities:**
1. QuickBooks Online OAuth integration with invoice sync
2. Xero OAuth integration with invoice sync
3. Configurable escalation sequences (5-step default, fully editable)
4. Scheduled email send from user's email domain
5. Email open and link-click tracking
6. Invoice view tracking (accounting platform events + email pixel)
7. Real-time payment detection with escalation halt (15-min max lag)
8. Late fee calculation (flat and percentage, user-configured)
9. Pre-collections warning letter template with user approval flow
10. AR dashboard: outstanding invoices by escalation stage, amounts, days overdue
11. Invoice-level timeline: complete action history per invoice
12. Collection rate metric: % of escalated invoices paid within period
13. One-click escalation pause per client or invoice
14. Onboarding wizard: integration setup, sequence configuration walkthrough

### Post-MVP Features (v1.1)

- WhatsApp Business API integration as escalation channel
- AI-generated message tone calibration (Claude API)
- FreshBooks and Stripe integrations
- Agency/team plan with multi-client dashboard
- SMS fallback channel
- Per-client escalation profiles
- Collections agency referral marketplace integration

### Post-MVP Features (v2.0)

- Accountant partner portal (multi-client management)
- Zapier and REST API
- Payment plan offer generator
- B2B service business specialized onboarding tracks
- White-label offering
- UK, Australia, Canada market expansion

### Risk Mitigation Strategy

**Technical Risks:** OAuth integration complexity with QB/Xero (different token lifetimes, webhook schemas, API rate limits). Mitigation: build integration adapters with a common internal interface so adding FreshBooks/Stripe in v1.1 does not require architectural changes.

**Market Risks:** AppSumo LTD buyers may use the tool for a burst period and then become inactive. Mitigation: design onboarding to create passive habit (tool runs without user attention) — low engagement is fine if invoices are getting paid. Success is measured by payment events, not user sessions.

**Resource Risks:** If launch team is 1 developer, reduce MVP to QB integration only (skip Xero at launch, add in week 2 post-launch). Sequence configuration can use a simplified template editor rather than a full builder. Pre-collections letter can be email-only in v1.0 (no PDF generation until v1.1).

---

## Functional Requirements

### Integration & Accounting Platform Sync

- FR1: User can connect a QuickBooks Online account via OAuth 2.0 from the onboarding wizard
- FR2: User can connect a Xero account via OAuth 2.0 from the onboarding wizard
- FR3: System automatically pulls all overdue invoices from the connected accounting platform upon connection
- FR4: System continuously syncs invoice payment status from the accounting platform and updates escalation state when payment is detected
- FR5: User can view the connection status and last sync timestamp for each connected accounting platform
- FR6: System notifies the user via email and dashboard alert when an OAuth token has expired or sync has failed
- FR7: User can disconnect and reconnect an accounting platform integration at any time
- FR8: User can configure the overdue threshold (1, 3, 7, or 14 days past due) that triggers escalation monitoring

### Escalation Sequence Configuration

- FR9: User can create, edit, and delete escalation sequences with up to 10 configurable steps
- FR10: User can configure each escalation step with: trigger delay (days from prior step), channel (email), subject line, and message body with template variables
- FR11: System provides template variables for message bodies: {client_name}, {invoice_number}, {amount_due}, {due_date}, {days_overdue}, {late_fee_amount}, {invoice_link}
- FR12: System provides a default 5-step escalation sequence that users can activate immediately without customization
- FR13: User can assign different escalation sequences to different clients or client groups
- FR14: User can pause escalation for a specific invoice or all invoices for a specific client with a single action
- FR15: User can manually advance an invoice to a specific escalation step, overriding the scheduled progression

### Email Communication & Tracking

- FR16: System sends escalation emails that appear to originate from the user's email address (not a generic product domain)
- FR17: System supports user domain authentication (SPF/DKIM) for email sending to protect deliverability
- FR18: System tracks whether each escalation email has been opened by the recipient and records the timestamp
- FR19: System tracks whether the invoice link in each escalation email has been clicked and records the timestamp
- FR20: System halts escalation email delivery and notifies the user when an email hard-bounces or is flagged as undeliverable
- FR21: System provides an opt-out mechanism in all escalation emails and halts escalation for any client who opts out, notifying the user

### Invoice Intelligence & Tracking

- FR22: System displays for each overdue invoice: client name, invoice number, amount due, original due date, days overdue, current escalation stage, and next scheduled action
- FR23: System displays an engagement timeline per invoice showing: invoice sent, invoice viewed by client (from accounting platform), email opened, email link clicked, payment detected
- FR24: System color-codes invoice engagement state: gray (invoice not viewed), yellow (viewed, no payment), red (viewed multiple times, no payment — likely intentional delay)
- FR25: System displays how many times the client has opened the invoice through the accounting platform's client portal (where supported by QB/Xero API)

### Late Fee Management

- FR26: User can configure late fee terms per client or globally: flat dollar amount or percentage per billing period after overdue threshold
- FR27: System calculates the applicable late fee amount for each overdue invoice based on configured terms and days overdue
- FR28: System generates a late fee notice as an escalation step that is sent to the client specifying the late fee amount and updated invoice total
- FR29: User can review and approve the late fee amount before the late fee notice is sent (default behavior) or configure auto-send without approval

### Pre-Collections Management

- FR30: System generates a pre-collections warning letter for invoices that reach the final escalation step, using a formal letter template
- FR31: User receives a notification and must explicitly approve the pre-collections letter before it is sent to the client
- FR32: User can customize the pre-collections letter content before approval
- FR33: System generates a PDF version of the pre-collections letter suitable for attachment or download

### Dashboard & Reporting

- FR34: User can view an AR overview dashboard showing: total outstanding amount, number of invoices by escalation stage, and total amount by escalation stage
- FR35: User can view a recent payments feed showing invoices that were paid after escalation was initiated
- FR36: User can view a collection rate metric showing the percentage of escalated invoices that resulted in payment within configurable time periods (30, 60, 90 days)
- FR37: User can view the complete action history for any individual invoice: every email sent, every event detected, with timestamps
- FR38: User can filter the invoice dashboard by: client, invoice age, escalation stage, amount range, and connection (QB vs. Xero)

### Notifications & Alerts

- FR39: User receives an in-app and email notification when a payment is detected on an escalated invoice
- FR40: User receives an in-app and email notification when a pre-collections letter is ready for their review and approval
- FR41: User receives an in-app and email notification when an accounting platform integration sync fails or OAuth token expires
- FR42: User receives a weekly summary email showing: invoices recovered that week, current outstanding AR, invoices that advanced escalation stages

### Account & Onboarding Management

- FR43: User can complete integration setup (OAuth connection + first escalation sequence configuration) in a guided step-by-step onboarding wizard
- FR44: User can view and edit their email sending configuration including the from-name and from-email used for escalation messages
- FR45: User can manage their subscription/LTD plan, billing information, and account settings
- FR46: User can export their invoice escalation history as a CSV for their records
- FR47: System prevents escalation email send if payment was detected within the prior 15 minutes (last-moment sync check before send)

---

## Non-Functional Requirements

### Performance

- Dashboard and invoice list views load in under 2 seconds for up to 500 active invoices
- Escalation email scheduling and dispatch: individual email send completes within 30 seconds of scheduled trigger time
- Payment detection lag: payment recorded in QB/Xero is reflected in the product and halts escalation within 15 minutes (webhook) or 30 minutes (polling fallback)
- Accounting platform sync (initial full sync for a new connection): completes within 5 minutes for up to 500 invoices

### Security

- OAuth tokens encrypted at rest using AES-256; never stored in plaintext or logged
- All inter-service communication over HTTPS with TLS 1.2+
- Multi-tenant isolation enforced at database query level: no user can access another user's invoice data or client data under any code path
- User passwords hashed using bcrypt with cost factor ≥12
- Email opt-out requests from clients processed within 60 minutes of receipt; no escalation emails sent to opted-out recipients

### Reliability

- Scheduled escalation sends must succeed or be retried with exponential backoff (max 3 retries, up to 4-hour retry window); persistent failure triggers user alert
- False positive rate (escalation email sent to already-paid invoice): <1% — enforced by mandatory payment-status recheck within 5 minutes of scheduled send
- Email bounce rate above 5% for any user's domain triggers automatic send pause and user alert
- System availability: 99.5% uptime target (excludes planned maintenance)
- Escalation job queue must recover from infrastructure failures without data loss; jobs must be persisted, not in-memory

### Scalability

- Architecture must support growth to 10,000 active users without redesign (horizontal scaling of application tier, scalable job queue)
- Per-user sync load must not impact other users' sync reliability (isolated job lanes or fair-queuing per tenant)
- WhatsApp send rate (v1.1) must respect Meta's per-number daily limits; queue and throttle automatically without user intervention

### Integration Reliability

- QB/Xero OAuth integration: automatic token refresh before expiry; user notification 3 days before expiry (if manual refresh required)
- Webhook processing: all webhook events must be idempotent — processing the same event twice produces the same result as processing it once
- SendGrid/email provider: automatic fallback to secondary provider if primary delivery fails (v1.1); alert user if email send fails permanently
- Accounting platform API rate limits respected: QB (500 req/min), Xero (60 req/min per tenant) — sync jobs throttled accordingly

---

*This PRD is the capability contract for all downstream architecture, UX, and development work. All epics, stories, and implementation decisions should trace back to the functional requirements listed here. Update this document as decisions evolve during implementation.*
