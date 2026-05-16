---
stepsCompleted: [step-01-init, step-02-discovery, step-02b-vision, step-02c-executive-summary, step-03-success, step-04-journeys, step-05-domain, step-06-innovation, step-07-project-type, step-08-scoping, step-09-functional, step-10-nonfunctional, step-11-polish, step-12-complete]
inputDocuments:
  - ideas/shortlisted/customer-revenue-concentration-risk-monitor.md
  - _bmad-output/planning-artifacts/market-research-customer-revenue-concentration-monitor.md
  - _bmad-output/planning-artifacts/product-brief-customer-revenue-concentration-monitor.md
workflowType: prd
classification:
  projectType: saas_b2b
  domain: fintech_smb
  complexity: low-medium
  projectContext: greenfield
date: '2026-05-16'
author: Root
---

# Product Requirements Document — Customer Revenue Concentration Risk Monitor

**Author:** Root
**Date:** 2026-05-16

---

## Executive Summary

The Customer Revenue Concentration Risk Monitor is a focused micro-SaaS that connects to QuickBooks Online or Xero via OAuth, calculates each customer's share of the trailing 12-month revenue, and alerts business owners when any single customer exceeds a configurable threshold. It is the only tool purpose-built for this specific problem at an owner-accessible price ($49 LTD / $9–19/month) with setup under 10 minutes.

**Target users:** Small B2B service businesses — construction subcontractors, marketing agencies, staffing firms, commercial cleaning companies, logistics providers, and consultants — where a single client represents 20–50% of annual revenue without the owner realizing it. The primary persona is the non-financial business owner who uses QBO or Xero for invoicing but has no financial analytics tools and no accountant on retainer.

**The problem:** Customer revenue concentration is a "you don't know what you don't know" risk. A client representing 30–40% of annual revenue can churn with little warning, pushing a business below break-even overnight. The same concentration silently destroys business valuation: PE buyers flag any single customer above 15%, SBA lenders decline acquisitions above 20%. No simple, affordable tool monitors this. Full FP&A suites (Fathom at $50+/month, Spotlight Reporting at $295–995/month) are built for accountants managing multi-entity portfolios, not for the HVAC contractor with 15 clients who needs one number and one alert.

**Go-to-market:** AppSumo LTD launch at $49 (target: 300+ purchases, 4.0+ rating, <10% refund rate in 60 days) → QBO and Xero App Store listings (passive inbound from 5.3M QBO users) → $9–19/month subscription tier → $10K MRR by month 12.

### What Makes This Special

**Category creator in a gap no one has filled:** Zero direct competitors exist at this price point and scope. FP&A tools cost 5–50x more, require professional training, and don't focus on this specific problem. Generic dashboards (Databox, Plecto) require manual configuration a non-technical owner won't attempt. SaaS metrics tools (Baremetrics, ChartMogul) use a completely different data model. This product is the only purpose-built, owner-facing concentration monitor that sets up in 10 minutes.

**"Insurance policy" framing bypasses urgency barriers:** Unlike most B2B software that demands an ROI case, insurance purchases are justified by severity of what they prevent. A $49 one-time payment to protect against the risk of losing 20–40% of annual revenue needs no spreadsheet. This framing lets the product convert on first encounter — particularly effective in Reddit communities where people post about customer churn catastrophes.

**Passive value delivery without requiring logins:** The weekly "revenue health" email and threshold alert system deliver ongoing value whether or not the owner logs in. The product becomes a silent monitor — like a smoke detector — that owners would immediately notice if it stopped working. This is the retention mechanism that justifies recurring payment from an LTD-heavy early buyer base.

**Cross-platform moat:** Supporting both QBO (62% SMB market share) and Xero (8.9% with strong international presence) from day one means the product serves the broadest possible market and builds a competitive position even Intuit can't match with a native QBO-only feature.

## Project Classification

- **Project Type:** SaaS web application (B2B / SMB-focused)
- **Domain:** Fintech / SMB Financial Analytics
- **Complexity:** Low-Medium — handles OAuth connections to QBO and Xero, reads financial data (invoices/revenue), performs concentration calculations, delivers email alerts; no payments processing, no write operations to accounting systems, no regulated data beyond standard financial records
- **Project Context:** Greenfield — new product with no existing codebase

---

## Success Criteria

### User Success

- **Time to First Insight:** User connects QBO or Xero and sees their concentration dashboard within 10 minutes of landing on the product page. Target: <5 minutes median by month 6.
- **OAuth Completion Rate:** >80% of users who begin the OAuth flow complete it and see their dashboard. If below 80%, onboarding is broken — fix before scaling.
- **Aha Moment Delivery:** >85% of users who complete OAuth see at least one customer above 10% concentration in their first session (i.e., the product immediately surfaces useful data for the target audience).
- **Alert Threshold Adoption:** >70% of users configure a concentration threshold (rather than leaving the default). Indicates active rather than passive engagement.
- **Weekly Email Open Rate:** >40% open rate on the weekly revenue health email. This is the primary passive retention signal.
- **30-Day Retention:** >70% of users have at least one data refresh (automatic) and open at least one email in their first 30 days.
- **NPS:** >45 at 30 days post-purchase (AppSumo follow-up survey). Target: >55 by month 12.

### Business Success

- **AppSumo Launch (Months 1–3):** 300+ LTD purchases at $49; 4.0+ average rating; <10% refund rate within 60-day window; 50+ written reviews. A refund rate above 15% triggers a pause-and-interview protocol.
- **App Marketplace Listings (Month 3–4):** Accepted into QBO App Marketplace and Xero App Store within 60 days of submission.
- **Subscription Revenue (Month 6–12):** 200+ active monthly subscribers by month 9; $5,000 MRR by month 9; $10,000 MRR by month 12.
- **Connected Businesses:** 500 connected businesses by month 6; 1,000 by month 12.
- **Monthly Revenue Churn:** <3% monthly from subscription tier.

### Technical Success

- OAuth connection success rate ≥95% for QBO and ≥92% for Xero across all supported account types.
- Initial data pull (LTM invoice history) completes within 30 seconds for businesses with up to 500 invoices.
- Weekly scheduled data refresh completes within 60 seconds per business; 99%+ weekly refresh success rate.
- Weekly email delivery rate ≥98%; threshold alert email delivery rate ≥99%.
- Zero data loss events; 99.9% uptime during business hours (8am–8pm business owner timezone).
- API rate limit violations: zero (all QBO/Xero calls stay within documented limits with proper backoff).

### Measurable Outcomes

| Metric | Month 3 | Month 6 | Month 12 |
|---|---|---|---|
| AppSumo LTD purchases | 300+ | — | — |
| AppSumo avg rating | 4.0+ | — | — |
| Connected businesses | 300 | 500 | 1,000 |
| Monthly subscribers | — | 150 | 400 |
| MRR | $0 (LTD phase) | $2,500 | $10,000 |
| OAuth completion rate | 75%+ | 80%+ | 85%+ |
| Weekly email open rate | 35%+ | 40%+ | 40%+ |
| Monthly churn (subscription) | — | <5% | <3% |
| NPS | 40+ | 45+ | 55+ |

---

## Product Scope

### MVP — Minimum Viable Product

The MVP delivers the complete core value loop in under 10 minutes from first visit. Every feature below is load-bearing; removing any one breaks the core value proposition.

**1. QBO OAuth 2.0 Connection**
Authorization code flow via Intuit Developer Portal. One-click connect; read-only invoice and customer data permissions. Connection status indicator; reconnect and disconnect capability. Token refresh handled transparently.

**2. Xero OAuth 2.0 Connection**
Mirror implementation of QBO OAuth flow. Same dashboard rendering. Supports both AU/NZ/UK and US Xero accounts.

**3. Customer Revenue Concentration Dashboard**
Pulls all invoices for trailing 12 months (rolling LTM window updated weekly). Groups by customer; calculates each customer's percentage of total LTM revenue. Bar chart showing top 10 customers sorted by revenue share (%). Summary statistics: top-1 concentration %, top-3 combined %, total customer count. This is the "aha moment" — the core deliverable of the entire product.

**4. Configurable Threshold Alert System**
User-configurable threshold with options at 10%, 15%, 20%, 25%, 30% (default: 15%). Email alert fires when any single customer first crosses the threshold; re-alerts weekly if breach continues. Alert email shows: customer name, current %, threshold %, link to dashboard. Alert also fires if a previously-breaching customer falls back below threshold (positive signal).

**5. Weekly Revenue Health Email**
Automated weekly email: top 3 customers by concentration %, any active threshold breaches, simple trend vs. 4 weeks prior (up/down arrow + percentage point change). Plain-text format; mobile-readable. Unsubscribe link; unsubscribing auto-cancels subscription.

**6. Concentration Trend View**
12-month rolling chart showing concentration of the top customer over time. Secondary view: any user-selected customer's trend. Allows owners to see whether diversification efforts are working over time.

**7. Basic Account Management**
Email/password or Google OAuth login. Connect/disconnect QBO and Xero. Set and update threshold. Manage email preferences. View connection status and last-sync timestamp.

### Growth Features (Post-MVP)

- **Revenue-at-risk calculator:** "If Client X left tomorrow, here's your estimated 30/60/90-day operational cash impact." Requires P&L context beyond invoice data.
- **Client retention signals:** Declining invoice frequency as early warning of potential churn. Time-series analysis of billing gaps.
- **Multi-business connections:** $79 LTD or $29/month tier for agency owners, bookkeepers, and advisors tracking multiple entities.
- **Slack and SMS alerts:** Channel expansion beyond email based on user requests.
- **PDF concentration report:** Shareable one-page report for exit conversations with brokers or lenders.
- **Accountant/advisor dashboard:** Multi-client overview with portfolio-level concentration monitoring.

### Vision (Future)

- **Industry benchmarks:** "Your 38% concentration is in the 85th percentile for construction contractors" — requires aggregated dataset from user base.
- **Diversification goal tracking:** Set a target concentration and track progress with milestone alerts.
- **Exit readiness score:** Composite score combining concentration, trend, client count, and revenue growth — positioned for owners approaching M&A.
- **Advisor marketplace:** Connect high-risk-concentration owners with bookkeepers, advisors, or fractional CFO services.
- **Automatic new-customer detection:** Alert when invoice history shows a new customer representing >5% of revenue in first 60 days (early concentration pattern detection).

---

## User Journeys

### Journey 1: Marcus — The Construction Subcontractor (Primary — Discovery Path)

**Opening Scene:** Marcus runs a 12-person drywall subcontracting company ($1.8M annual revenue). One general contractor — a commercial developer — sends him most of the big commercial jobs. Marcus knows this relationship is important but has never calculated the number. He uses QBO for invoicing and has a part-time bookkeeper who does monthly reconciliation.

A Tuesday afternoon, Marcus is scrolling Reddit during his lunch break and sees a post in r/smallbusiness: "Lost a big GC this month — they went in-house. 30% of our work gone overnight. We're scrambling." The post has 847 upvotes and 200+ comments. Marcus reads it and thinks: "That could happen to me." He Googles "how to tell if I'm too dependent on one customer QuickBooks" and finds the product landing page.

**Rising Action:** Marcus reads the landing page headline: "Do you know what % of your revenue comes from your single biggest client?" He clicks "Connect QuickBooks." Standard QBO OAuth flow — he approves read access in 90 seconds. The dashboard renders.

**Climax:** Marcus sees a bar chart he's never seen before. Client A: 41%. Client B: 22%. Client C: 18%. He stares at the screen. He knew Client A was important. He did not know 41% important. He pulls up his phone and calls his wife: "We need to talk about getting more GCs."

**Resolution:** Marcus sets his alert threshold to 25%. He subscribes ($49 LTD, less than one hour of labor). Two weeks later he gets the weekly email. Client A is still at 41% — but Marcus is now actively pursuing two new GC relationships. Three months later, Client A is 34% and falling. Marcus refers the tool to two other contractors in his Facebook group.

**Journey requirements revealed:** OAuth connection, dashboard with top-customer bar chart, LTM calculation, threshold configuration, weekly email with trend, one-click sharing/referral capability.

---

### Journey 2: Priya — The Marketing Agency Owner (Primary — Exit Preparation Path)

**Opening Scene:** Priya runs a 6-person digital marketing agency ($720K revenue). Her largest client — a regional healthcare network — is 41% of annual billings. She knows she's "too dependent" in a vague way. She's been planning to sell the business in the next 3–4 years and recently had a conversation with a business broker who told her: "Any single customer above 20% makes buyers nervous and kills deal value."

**Rising Action:** Priya searches for "customer concentration tool for small business" and finds the product. She connects Xero (she switched from QBO two years ago for better multi-currency support). The dashboard confirms what she suspected: Healthcare Network is 41%. She also sees Client B at 19% — another yellow flag she hadn't quantified before.

**Climax:** Priya doesn't just want an alert — she wants documentation. She opens the trend view and sees that Healthcare Network was 38% 6 months ago. It's grown, not shrunk. She sets a threshold at 20% and starts a formal diversification initiative with her team.

**Resolution:** Over the next 18 months, Priya uses the trend chart as her monthly KPI. Healthcare Network drops from 41% to 26% as she wins 4 new mid-size clients. When she meets with her broker again, she shows him a screenshot of the trend chart. He says: "This is exactly the kind of documentation buyers want to see." The product has become part of her exit narrative.

**Journey requirements revealed:** Xero OAuth, trend chart (12-month rolling), comparison across time periods, shareable/exportable view, threshold persistence across sessions, historical data availability.

---

### Journey 3: Marcus (Edge Case) — False Alert and Recovery

**Opening Scene:** Three months after signup, Marcus receives a threshold alert email: "Client B has exceeded your 25% threshold — currently 27% of LTM revenue." Marcus is alarmed. Client B is a new residential developer he's been cultivating. Then he remembers: he just completed a large project for Client B last month that happened to fall entirely within the LTM window.

**Rising Action:** Marcus logs in to the dashboard for the first time since setup. He checks the trend view for Client B — 12 months of data. Client B was 8% six months ago, grew as the big project was invoiced, and is now at 27% because the LTM window is concentrated.

**Climax:** Marcus realizes: this is a temporary spike, not a structural dependency. He hasn't lost diversification — he's won a large project. The alert is technically correct but contextually a false alarm. He needs to understand this isn't the same risk as Client A.

**Resolution:** Marcus sets his threshold to 30% to accommodate project-based spikes, and mentally notes that the alert system needs context. He leaves a review on AppSumo: "Great concept, would benefit from project-level filtering — but still worth every penny for the awareness it created." 

**Journey requirements revealed:** Alert history/log, trend view per customer, ability to adjust threshold without losing history, clear LTM window explanation in UI, alert email includes trend context (not just current %).

---

### Journey 4: System Admin — Onboarding and Connection Management

**Opening Scene:** An admin (in larger solo businesses, the owner themselves; in agency scenarios, an office manager) needs to set up the account, manage the QBO/Xero connection when tokens expire, and ensure email delivery is working.

**Rising Action:** Admin creates account, connects QBO, sets threshold, and verifies the weekly email is going to the right address. Three months later, the QBO OAuth token expires (standard 180-day Intuit token lifetime) and the weekly email arrives with a notice: "Your QuickBooks connection needs to be refreshed." Admin clicks "Reconnect" from the email, re-authorizes in 60 seconds, and the connection is restored.

**Climax:** Admin attempts to change the alert email address mid-subscription (business email change). The settings panel allows this; a confirmation email goes to the new address. Admin confirms and the email destination is updated.

**Resolution:** Admin has full control of connection state, email preferences, and threshold from a clean settings panel. No support tickets required for any routine account management task.

**Journey requirements revealed:** Connection management UI, token expiration notification, reconnect flow, email preference management, threshold change without data loss, account settings dashboard.

---

### Journey Requirements Summary

| Capability Revealed | Journeys | Priority |
|---|---|---|
| QBO and Xero OAuth connection | 1, 2, 3, 4 | MVP |
| LTM concentration dashboard (bar chart, top 10) | 1, 2, 3 | MVP |
| Per-customer trend view (12-month) | 2, 3 | MVP |
| Configurable threshold alert | 1, 2, 3 | MVP |
| Weekly revenue health email | 1, 2, 3 | MVP |
| Alert email with trend context | 3 | MVP |
| Alert history/log | 3 | MVP |
| Connection management and token refresh | 4 | MVP |
| Email preference and address management | 4 | MVP |
| Shareable/exportable concentration view | 2 | Growth |
| Project-level filtering (invoice exclusion) | 3 | Growth |

---

## Domain-Specific Requirements

This product operates in the SMB financial analytics domain with low-medium complexity. It reads financial data via OAuth APIs but does not process payments, write to accounting systems, or handle regulated personal health or government data.

### Compliance & Regulatory

- **QBO App Marketplace requirements:** Must comply with Intuit Developer Program policies — read-only data access only, clear disclosure of data usage, user-initiated OAuth only, no storing of QBO credentials, app review and certification process (4–8 weeks).
- **Xero App Store requirements:** Must comply with Xero Developer Program and Partner Program policies — equivalent read-only access, user consent, data handling disclosure.
- **GDPR relevance:** EU/UK Xero users subject to GDPR data handling requirements — explicit consent for data processing, data deletion on account closure, privacy policy disclosing what financial data is stored and for how long.
- **Data retention policy:** Aggregated concentration metrics stored; raw invoice line items not persisted beyond initial calculation. Customer names stored as identifiers only; no personal data beyond business email.

### Technical Constraints

- **OAuth token security:** QBO tokens encrypted at rest; Xero tokens encrypted at rest; no tokens ever exposed in client-side JavaScript or logs.
- **Read-only API scope:** Only request minimum OAuth scopes required (QBO: `com.intuit.quickbooks.accounting`; Xero: `accounting.transactions.read`). No write permissions ever requested.
- **Rate limiting:** QBO API: 500 req/min (sandbox), well above needs for weekly batch. Xero API: 60 req/min per app; structure batch jobs to stay within limits with exponential backoff on 429 responses.
- **Data minimization:** Pull only invoice/payment data needed for LTM concentration calculation. Do not pull or store payroll, vendor bills, bank account details, or any data outside the concentration calculation scope.

### Integration Requirements

- QBO OAuth 2.0 (authorization code flow, Intuit Developer Portal)
- Xero OAuth 2.0 (authorization code flow, Xero Developer Portal)
- Transactional email service (SendGrid or Postmark) for alert and weekly digest emails
- Background job processor for weekly data refresh and alert evaluation (cron-based)

---

## SaaS B2B Specific Requirements

### Multi-Tenancy Model

Each connected business is a single tenant. Strict data isolation: no business can access another business's data. User account may eventually support multiple business connections (Growth tier), but MVP is one-business-per-account. All database queries scoped to authenticated user's business ID.

### Authentication Model

- Email/password with bcrypt hashing (minimum 12 rounds)
- Optional Google OAuth for social login
- Session tokens with 30-day expiration; remember-me optional
- Password reset via email link (60-minute expiration)
- No multi-user/team access in MVP — single owner per account

### Permission Model

MVP has a single permission level: account owner. All account actions (connect/disconnect integrations, set threshold, manage emails) are available to the authenticated account owner. No admin console required for MVP; ops tasks handled via direct database access or simple internal admin route.

### Integration Architecture

- **QBO:** REST API via Intuit's v3 accounting API. Authorization code flow. Token refresh before expiration (Intuit tokens valid 3600 seconds; refresh tokens valid 100 days). Webhook not needed — batch pull weekly.
- **Xero:** REST API via Xero's v2 accounting API. Authorization code flow. Token refresh (Xero access tokens valid 30 minutes; refresh tokens valid 60 days — requires more frequent refresh management).
- **Email delivery:** Transactional email API (SendGrid or Postmark) for both weekly digest and threshold alerts. Webhook tracking for bounces and unsubscribes.
- **Background jobs:** Weekly refresh cron (runs every Sunday night, staggered to avoid API rate limits). Alert evaluation runs after each refresh.

### Onboarding Flow

1. Landing page → CTA: "Connect QuickBooks" or "Connect Xero"
2. Account creation (email + password) before or as part of OAuth (streamlined: create account embedded in OAuth flow)
3. OAuth authorization (QBO or Xero)
4. Immediate dashboard render with LTM data (first pull may take 10–30 seconds; show progress indicator)
5. Default threshold shown (15%); prompt user to confirm or adjust
6. Email capture confirmed; optional weekly email preview shown
7. Done — user sees their concentration data

Target: zero friction between "landing on page" and "seeing my concentration chart."

---

## Project Scoping & Phased Development

### MVP Strategy & Philosophy

**MVP Approach:** Experience MVP — the minimum that delivers the complete "aha moment" loop. Not a problem-solving proof of concept (the problem is already validated), not a revenue MVP (the price is low enough to not require scale first). The experience itself must be complete: connect → see data → get alerts → feel monitored. Any MVP that doesn't complete this loop in under 10 minutes has failed.

**Resource Requirements:** Solo developer, 2–3 weeks. No designer required for MVP (clean utility design, functional over aesthetic). No dedicated infrastructure team — Heroku/Railway or similar PaaS for initial deployment.

### MVP Feature Set (Phase 1)

**Core User Journeys Supported:** Primary owner discovery path (Marcus), exit preparation path (Priya), basic account management (admin journey).

**Must-Have Capabilities:**
- QBO OAuth 2.0 connection (read-only)
- Xero OAuth 2.0 connection (read-only)
- LTM invoice data pull and customer concentration calculation
- Bar chart dashboard: top 10 customers by revenue share %
- Summary statistics: top-1 %, top-3 %, total customer count
- Configurable threshold (10%, 15%, 20%, 25%, 30%)
- Email alert when customer crosses threshold (with trend context)
- Re-alert weekly if breach continues
- Per-customer 12-month trend view
- Weekly revenue health email digest
- Connection status and last-sync timestamp
- Token refresh (QBO and Xero)
- Email preference management
- Account settings (threshold, email address)
- Unsubscribe/account deletion

### Post-MVP Features (Phase 2 — Growth)

- Revenue-at-risk calculator (if top customer leaves, what's the 30/60/90-day runway)
- Client retention signals (declining invoice frequency as early churn warning)
- Multi-business connections ($79 LTD / $29/month advisor tier)
- PDF report export (shareable concentration snapshot for broker/lender conversations)
- Slack and SMS alerts
- Invoice exclusion / project-based filtering for spike management

### Expansion Features (Phase 3 — Vision)

- Industry benchmarks and peer comparison
- Diversification goal setting and milestone tracking
- Exit readiness score (composite metric)
- Accountant/advisor portfolio dashboard (multi-client overview)
- New-customer early-warning alerts (large new client detected)
- Advisor marketplace integration

### Risk Mitigation Strategy

**Technical Risks:** QBO/Xero API changes or rate limit policy changes could break data pulls. Mitigation: build robust error handling, monitor Intuit/Xero developer changelogs, maintain API versioning. Xero's 30-minute access token is short — mitigation: proactive refresh before token expiry, clear user-facing messaging if refresh fails.

**Market Risks:** Low perceived urgency ("it won't happen to me") until a customer churns. Mitigation: insurance framing in all copy; weekly email keeps the product top-of-mind; target Reddit communities at the post-loss research moment when urgency is highest.

**Resource Risks:** Solo developer — single point of failure. Mitigation: keep infrastructure simple (PaaS, managed database); avoid custom infrastructure; document everything; use managed email delivery to eliminate ops burden.

---

## Functional Requirements

### Data Integration & Connectivity

- FR1: User can connect their QuickBooks Online account via OAuth 2.0 authorization code flow with read-only invoice and customer data access.
- FR2: User can connect their Xero account via OAuth 2.0 authorization code flow with read-only invoice and transaction data access.
- FR3: User can view the status of their connected accounting integration (connected / disconnected / token expired) and the timestamp of the last successful data sync.
- FR4: User can disconnect their accounting integration at any time, which removes stored tokens and halts data syncing.
- FR5: User can reconnect a disconnected or expired integration without losing their historical concentration data or alert configuration.
- FR6: System automatically refreshes expired OAuth tokens before they expire using stored refresh tokens, without requiring user action.
- FR7: System notifies the user by email when an OAuth token cannot be refreshed and manual reconnection is required.
- FR8: System pulls all invoice and payment records for the trailing 12 months from the connected accounting system during initial connection and during scheduled weekly refresh.

### Concentration Calculation & Dashboard

- FR9: System calculates each customer's total invoiced revenue over the trailing 12-month period (LTM, rolling window updated weekly).
- FR10: System calculates each customer's LTM revenue as a percentage of total LTM revenue across all customers.
- FR11: User can view a bar chart displaying the top 10 customers sorted by descending revenue concentration percentage.
- FR12: User can view summary statistics on the dashboard: top-1 customer concentration %, top-3 combined concentration %, total customer count in LTM period.
- FR13: System excludes customers with zero invoiced revenue in the LTM window from the concentration calculation and display.
- FR14: User can view the concentration dashboard immediately after OAuth connection completes (within 30 seconds of data pull completing).

### Alert Configuration & Notification

- FR15: User can set a concentration alert threshold by selecting from preset values: 10%, 15%, 20%, 25%, 30% (default: 15%).
- FR16: User can update their alert threshold at any time; the change takes effect at the next weekly evaluation.
- FR17: System evaluates concentration thresholds after each weekly data refresh and sends an email alert when any customer's concentration first exceeds the configured threshold.
- FR18: System re-sends a threshold breach alert weekly for each customer that remains above the configured threshold, including current concentration % and change from prior week.
- FR19: System sends a "threshold resolved" email when a previously-breaching customer falls back below the configured threshold.
- FR20: Alert emails include the customer name, current concentration %, the configured threshold %, the change from the prior week, and a direct link to the concentration dashboard.
- FR21: User can view a log of the last 30 days of sent alerts (threshold breaches and resolutions) within their account.

### Trend Analysis & Historical View

- FR22: User can view a 12-month rolling trend chart for the top customer's concentration percentage, showing weekly data points.
- FR23: User can view a 12-month rolling trend chart for any individual customer by selecting that customer from the dashboard.
- FR24: System displays a directional indicator (up/down arrow) and percentage point change for each customer's concentration compared to 4 weeks prior on the main dashboard.
- FR25: System retains weekly concentration snapshots for all customers for at least 18 months to support historical trend views.

### Weekly Email Digest

- FR26: System sends a weekly revenue health email to the account email address containing: top 3 customers by concentration %, any active threshold breaches, and a simple trend indicator vs. 4 weeks prior.
- FR27: User can configure the day and time of the weekly email delivery within a range of options (e.g., Monday morning, Friday afternoon).
- FR28: User can unsubscribe from the weekly email without deleting their account; unsubscribing suspends the weekly digest but not threshold alert emails.
- FR29: Weekly email is mobile-readable, plain-text compatible, and renders correctly across major email clients (Gmail, Outlook, Apple Mail).

### Account Management

- FR30: User can create an account using email and password.
- FR31: User can log in using email and password or Google OAuth.
- FR32: User can reset their password via a time-limited email link.
- FR33: User can update their account email address, subject to confirmation via the new email address.
- FR34: User can view their current subscription status (LTD or monthly), payment method, and next renewal date.
- FR35: User can cancel their subscription from within account settings; cancellation takes effect at the end of the current billing period.
- FR36: User can request account deletion, which removes all stored financial data, OAuth tokens, and personal information within 30 days.
- FR37: System presents a clear, scannable onboarding checklist after account creation: connect accounting system → view dashboard → set threshold → confirm email → done.

### Subscription & Access Control

- FR38: Users on a valid subscription (LTD or active monthly) have full access to all MVP features.
- FR39: Users whose subscription has lapsed receive a read-only view of their last known concentration snapshot with a subscription renewal prompt; data refreshes are paused.
- FR40: System enforces one accounting system connection per account in the MVP tier (QBO or Xero, not both simultaneously).

---

## Non-Functional Requirements

### Performance

- Dashboard renders within 3 seconds after the user logs in (data already pulled from accounting system).
- Initial OAuth data pull (LTM invoice history) completes within 30 seconds for businesses with up to 500 invoices; a progress indicator is shown for pulls that take >5 seconds.
- Weekly background refresh completes within 60 seconds per business.
- Trend chart renders within 2 seconds of customer selection.
- API endpoints respond within 500ms at p95 for authenticated user requests.

### Security

- All OAuth tokens (QBO and Xero) encrypted at rest using AES-256; never exposed in client-side code, logs, or API responses.
- All data in transit encrypted via TLS 1.2+.
- Passwords stored using bcrypt with a minimum cost factor of 12.
- Session tokens are HTTP-only, Secure cookies; not accessible via JavaScript.
- OAuth scopes are the minimum required: read-only invoice/transaction data only. No write permissions ever requested.
- Raw invoice data (individual line items, amounts) is not persisted after concentration calculation; only aggregated customer-level totals are stored.
- Account deletion permanently removes all financial data, tokens, and personal information within 30 days.
- All QBO and Xero API calls authenticated with per-user tokens; no shared API credentials for data access.

### Reliability

- System uptime: 99.9% during business hours (8am–8pm across US timezones).
- Weekly email delivery: 98%+ delivery rate; bounce and unsubscribe handling via transactional email service webhook.
- Threshold alert delivery: 99%+ delivery rate within 1 hour of the triggering data refresh completion.
- Background refresh failure rate: <1% of scheduled refreshes; failed refreshes retried up to 3 times with exponential backoff before notification sent to user.
- Zero data loss: concentration snapshots retained for 18 months with database backups.

### Scalability

- Architecture supports 5,000 connected businesses without infrastructure redesign (initial design decision: async job queue for weekly refreshes, not synchronous).
- Weekly refresh jobs scheduled with jitter to distribute QBO/Xero API load across Sunday night window; no thundering herd at midnight.
- Database queries use indexes on business ID and calculation date to support fast dashboard and trend retrieval at 5,000+ businesses.
- Email delivery scales via transactional email service (SendGrid/Postmark) with no infrastructure changes required.

### Integration

- QBO API: Uses Intuit QuickBooks Online Accounting API v3. Handles 429 rate limit responses with exponential backoff. Monitors for API deprecation notices via Intuit developer changelog.
- Xero API: Uses Xero Accounting API v2. Manages 30-minute access token expiry with proactive refresh. Handles Xero tenant ID for correct company data access.
- Email: Transactional email service integration must support delivery webhooks (bounce, unsubscribe, spam complaint) to maintain sender reputation.
- No other external integrations in MVP.
