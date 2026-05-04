---
stepsCompleted: [1, 2, "2b", "2c", 3, 4, 5, 6, 7, 8, 9, 10, 11]
inputDocuments:
  - ideas/shortlisted/subscription-maintenance-plans-trades.md
  - _bmad-output/planning-artifacts/research/market-subscription-maintenance-plans-research-2026-05-02.md
  - _bmad-output/planning-artifacts/brief-subscription-maintenance-plans.md
workflowType: prd
classification:
  projectType: SaaS Web Application
  domain: Field Service Management / Vertical SaaS
  complexity: medium
  projectContext: greenfield
date: '2026-05-02'
author: Root
project_name: PlanStack
---

# Product Requirements Document — PlanStack

**Author:** Root
**Date:** 2026-05-02
**Project:** PlanStack — Subscription Maintenance Plan Platform for Trades

---

## Executive Summary

PlanStack is a purpose-built subscription maintenance plan management platform for small trades businesses (HVAC contractors, plumbers, pest control operators, pool service companies, appliance repair businesses) with 1–20 employees. It fills a clearly unoccupied market position: no affordable standalone tool exists that helps these businesses create, sell, and manage tiered maintenance subscription plans with automated scheduling, Stripe billing, customer portals, and plan profitability reporting.

**The problem it solves:** Fewer than 35% of residential HVAC contractors have an active maintenance agreement program, not because they lack motivation, but because the operational friction is too high. Spreadsheets and generic billing tools cannot support a scalable plan program. ServiceTitan solves the problem completely but costs $245–500/technician/month — 5–10x out of reach for the 1–20 technician contractor earning $150K–$1.5M/year.

**What makes it special:** PlanStack treats a "plan" as a first-class product concept, not an afterthought bolted onto scheduling software. A contractor goes from zero to a live, purchasable bronze/silver/gold plan program in under 30 minutes. When a customer enrolls, PlanStack auto-schedules every included visit, auto-renews the plan at year-end, and gives the customer a branded portal to track their service — all features exclusive to ServiceTitan at this price point.

**Positioning:** "The Memberful for trades businesses." Launch with a $59–99 AppSumo LTD (no competitor holds this territory in LTD marketplaces), transition to $29–79/month subscription tiers.

**Target users:** HVAC owner-operators and office managers at 1–20 technician shops in the United States currently managing maintenance agreements on spreadsheets or inside tools not designed for plan management (Housecall Pro, Jobber, GorillaDesk).

---

## Project Classification

- **Project Type:** SaaS Web Application (multi-tenant, contractor-facing + customer portal)
- **Domain:** Vertical SaaS — Field Service Management (Trades / Home Services)
- **Complexity:** Medium — Stripe Connect platform billing, automated scheduling logic, multi-tenant data isolation, customer-facing branded portal
- **Project Context:** Greenfield — no existing codebase
- **Deployment:** Cloud-hosted, responsive web app (no native mobile in MVP)
- **Primary Integration:** Stripe Connect (required for billing)

---

## Success Criteria

### User Success Metrics

| Metric | Target | How Measured |
|--------|--------|--------------|
| Time from signup to first live plan | < 30 minutes | Timestamp: account_created → plan_published |
| Auto-scheduling accuracy | ≥ 90% of enrollments produce correct auto-created visits | Auto-created visits / total enrollments |
| Renewal automation rate | ≥ 60% of expiring plans auto-renewed without contractor action | Auto-renewed / total expirations in period |
| Customer portal login rate | ≥ 40% of plan customers log in within 30 days of enrollment | Portal logins / enrolled customers |
| Plan profitability dashboard engagement | ≥ 75% of active contractor accounts view dashboard monthly | Dashboard views / active accounts |
| Admin time reduction (self-reported) | ≥ 3 hours/week saved on renewal and billing tasks | 60-day onboarding survey |

### Business Success Metrics

| Metric | Month 3 | Month 12 | Year 2 |
|--------|---------|----------|--------|
| AppSumo LTD sales | 300 units | 500 units (LTD closed) | — |
| Monthly recurring revenue | $0 | $8,000 | $25,000 |
| Monthly subscribers | 25 | 160 | 500 |
| Active plan customers (all contractors) | 1,500 | 25,000 | 100,000 |
| Monthly churn (contractor accounts) | < 6% | < 3% | < 2% |
| G2/Capterra avg. rating | 4.2+ | 4.5+ | 4.6+ |
| Trial-to-paid conversion | 15%+ | 22%+ | 28%+ |
| Net Promoter Score | 35+ | 45+ | 55+ |

**North Star Metric:** Active plan customers managed across all contractor accounts. This measures real product value and is the primary stickiness driver.

**PMF Gate (Month 3 Go/No-Go):** 300+ LTD sales AND ≥ 40% of active contractors report plan customer count growth AND PMF survey ≥ 40% "very disappointed" if PlanStack went away. If plan creation wizard averages > 45 minutes, iterate on UX before scaling marketing.

### Technical Success Metrics

- Plan enrollment → auto-scheduled visits latency: < 5 seconds
- Stripe webhook processing: < 2 seconds end-to-end
- Customer portal page load: < 2 seconds (mobile 4G)
- System uptime: ≥ 99.5% monthly (excluding planned maintenance)
- Renewal reminder delivery rate: ≥ 98% (email deliverability)

---

## Product Scope

### MVP Scope (Launch — Weeks 1–8)

Core capabilities required for AppSumo LTD launch:

1. **Plan Builder & Tier Manager** — 5-step wizard, up to 5 tiers, vertical templates (HVAC, plumbing, pest control, pool service, appliance repair)
2. **Stripe Connect Billing** — Monthly/annual billing, dunning, card update, cancellation
3. **Public Plan Enrollment Page** — Branded contractor URL, Stripe Checkout, confirmation email
4. **Auto-Scheduling on Enrollment** — Auto-creates all plan visits at enrollment with correct frequency distribution
5. **Renewal Management Dashboard** — Renewal calendar, automated 30-day/7-day reminder emails, one-click renewal, lapsed win-back sequence
6. **Customer-Facing Plan Portal** — Magic-link login, plan status, next visit, service history, payment method update
7. **Plan Customer Management Dashboard** — All customers in one view, filter/sort, bulk actions, CSV export
8. **Plan Profitability Dashboard** — Per-tier revenue, manual cost inputs, calculated P&L, traffic-light indicators
9. **Mobile-Responsive Web App** — All screens mobile-optimized, PWA support

### Growth Features (Months 4–9)

- Jobber integration (sync plan-created jobs into Jobber calendar)
- Housecall Pro integration (sync plan-created jobs)
- GorillaDesk integration (pest control / pool)
- SMS renewal reminders (Twilio)
- White-label customer portal on contractor's own domain
- QuickBooks accounting sync for plan revenue
- Discount codes for plan promotion
- Zapier / Make.com integration

### Vision Features (Year 2+)

- HVAC refrigerant tracking (EPA 608 compliance) as premium add-on
- Stripe Connect platform revenue (0.5–1.0% on plan subscription volume)
- Commercial maintenance plan tier (different buyer, compliance needs)
- Native iOS / Android apps
- AI plan pricing optimizer (uses cross-account benchmark data)
- Equipment records / asset tracking
- Extended warranty plans / protection plan products
- Multi-location / franchise support

---

## User Journeys

### Journey 1 — Jake (HVAC Owner, Converting from Spreadsheet)

**Background:** Jake owns a 4-technician HVAC company in Columbus, OH. He manages 47 plan customers on a Google Sheet with manual renewal invoices. He loses 2–3 renewals/year because he forgets to send invoices, and growing past 50 plan customers feels operationally impossible.

**Discovery:** Jake sees an AppSumo email — "Launch a maintenance plan program in 30 minutes." He recognizes his exact situation in the headline. Clicks through, watches the 4-minute demo video. Buys the $79 LTD (500-customer tier) the same afternoon.

**Onboarding (Day 1):**
Jake signs up. The plan creation wizard launches automatically. Step 1: business profile + Stripe Connect (8 minutes). Step 2: selects "HVAC" template — Bronze/Silver/Gold pre-populated with tune-up inclusions and suggested pricing ranges. He adjusts to his market rates ($149/$229/$299). Step 3: customizes names. Step 4: reviews auto-generated enrollment page (his logo, his colors). Step 5: publishes. Total: 26 minutes. He copies the enrollment URL into his Housecall Pro invoice footer.

**First Enrollments (Week 1):**
Three customers enroll through the invoice footer link. Jake opens the dashboard: 3 active plan customers, $677 in annual plan revenue. More importantly: 6 maintenance visits auto-scheduled across the next 12 months. He didn't touch the calendar. He emails his 47 existing spreadsheet customers a migration link — 31 migrate within 10 days.

**Aha Moment (Month 2):**
Renewal dashboard shows 8 plans expiring in the next 30 days. Jake clicks "Send renewal reminders to all." Eight automated emails go out with renewal links. Six customers renew within 48 hours. No manual follow-up. He thinks: "I used to chase these for two weeks."

He opens the profitability view for the first time. Gold plan ($299/year, 2 visits): $67 average profit per customer. Bronze ($149/year, 1 visit): $38 profit. He decides to raise Gold to $319 next renewal cycle. He had never had data to make this decision before.

**Month 6:**
94 active plan customers (up from 47). October — his historically worst month — has 42 maintenance visits booked. Plan revenue: $19,200/year. He refers PlanStack to three HVAC peers in his ACCA regional chapter.

**Requirements revealed:**
- Wizard must guide Stripe Connect setup without Jake leaving PlanStack
- HVAC template must include seasonally appropriate visit scheduling (spring + fall for semi-annual)
- Enrollment URL must work embedded in external platforms (invoice footers, email signatures, website)
- Profitability dashboard must work with contractor-entered cost estimates, no accounting integration required in MVP
- Renewal reminders must send automatically on schedule, not require manual trigger

---

### Journey 2 — Maria (Plumber, Launching First Plan)

**Background:** Maria runs a 2-person plumbing business in Denver. She has heard from HVAC peers that maintenance plans changed their businesses. She tried to set up a drain cleaning subscription in Jobber — couldn't find a "plan" concept, only recurring jobs with no billing/renewal logic.

**Discovery:** PlanStack AppSumo listing: "Launch your first maintenance plan in 30 minutes." The demo video shows plumbing plan setup step-by-step. She buys the $59 LTD the same day.

**Onboarding:** Selects "Plumbing" template. "Annual Drain Care Plan" is pre-built with drain inspection + cleaning service inclusions and a suggested price range ($79–$129/year). She sets her price at $99, generates an enrollment URL, posts it on her Jobber invoice footer and Facebook business page.

**Growth:** Week 1: 12 customers enroll. Month 3: 48 plan customers. Annual recurring revenue: $4,750/year — nearly 2 months of part-time technician salary from plan fees alone.

**Phase 2:** Maria upgrades to the monthly subscription tier when the Jobber integration launches. Plan-created visits now sync automatically into Jobber's scheduling calendar. She never needed to leave Jobber for general scheduling — PlanStack added the plan management layer Jobber was missing.

**Requirements revealed:**
- Plumbing template must have correct service inclusions and annual visit frequency defaults
- Enrollment URL must be shareable on social media (Open Graph preview)
- Plan visits must sync to external FSM tools (Phase 2) without replacing them
- Template pricing guidance must be market-accurate per vertical (not generic)

---

### Journey 3 — Derek (Pest Control, Tier Differentiation)

**Background:** Derek owns a 6-technician pest control company in Charlotte. He already has strong recurring revenue from quarterly treatments — GorillaDesk handles his route scheduling well, but he has no "plan" concept. He wants to create differentiated tiers (basic quarterly vs. premium all-access + priority scheduling) and stop his office manager from spending 5 hours/week on manual renewal follow-up.

**Discovery:** Sees PlanStack mentioned in a "Pest Control Business Owners" Facebook group: "GorillaDesk for routes, PlanStack for plan management — best of both." He buys.

**Use pattern:** Derek uses PlanStack's pest control templates to define 3 tiers: Bronze (quarterly exterior), Silver (quarterly all-access + annual interior), Gold (monthly all-access + same-day priority scheduling). GorillaDesk handles route execution; PlanStack handles enrollment, billing, renewal, and customer portal. His office manager's renewal workload drops from 5 hours/week to 30 minutes/week reviewing automated outcomes.

**Requirements revealed:**
- Pest control template must support quarterly and monthly visit frequencies
- Customer portal must surface "priority scheduling" status (plan tier visible to customer)
- Renewal automation must reduce manual follow-up, not create more admin work
- Platform must work alongside (not replace) existing route/job management tools

---

### Journey 4 — Homeowner / Plan Customer (End User of Portal)

**Background:** Jake's customer enrolls in the Gold HVAC maintenance plan for $299/year via the enrollment page embedded on Jake's website. She receives a confirmation email with a link to "view your plan online."

**Portal experience:** She clicks the magic link in the email, logs into the branded portal (Summit Heating & Cooling branding). She sees: Gold Plan, includes 2 annual tune-ups, next scheduled visit April 14, past service record from last spring, renewal date December 15, payment method (Visa ending in 4242 — expiring soon). She updates her card directly in the portal. Jake never gets an "update my card" call.

**Requirements revealed:**
- Magic-link login (no password creation friction)
- Portal must show concrete next visit date, not vague schedule language
- Card update must work self-service via Stripe's billing portal
- Portal must be mobile-first (homeowners access on phones)
- Contractor branding must be prominent (logo, name, colors) — customers should feel they're on the contractor's portal, not a third-party tool

---

### Journey 5 — Office Manager (Administrative User)

**Background:** Jake's office manager, Sandra, handles customer calls, renewal invoices, and billing reconciliation. Currently she spends 4–5 hours/week on plan-related admin work across 47 customers.

**With PlanStack:** Sandra sees all upcoming renewals in the renewal dashboard — filtered to "expiring this month." She clicks "Send reminders to expiring customers" once. She monitors who has renewed in the next 48 hours, follows up manually only with non-responders. Billing reconciliation is eliminated — Stripe handles it, and the dashboard shows payment status per customer. When a customer calls asking "when is my next visit?", Sandra pulls up the customer detail view in 10 seconds instead of searching a spreadsheet.

**Requirements revealed:**
- Renewal dashboard must support bulk actions (send reminders to all expiring, not one-by-one)
- Customer search must be fast (name, address, plan tier)
- Billing status must be clearly visible per customer (active, past due, cancelled)
- Customer detail view must show complete history without requiring navigation to multiple screens

---

## Domain-Specific Requirements

### Payments & Billing Compliance

- **Stripe Connect (required):** PlanStack uses Stripe Connect to route contractor payments. Contractors connect their own Stripe account (or create one during onboarding). PlanStack never holds contractor funds — Stripe routes payments directly from homeowners to contractor Stripe accounts.
- **PCI DSS:** Card data is never stored in PlanStack. All card collection and storage handled by Stripe Checkout and Stripe Elements. PlanStack stores only Stripe customer IDs and subscription IDs.
- **Failed payment handling:** Stripe's built-in Smart Retries handle failed payment retries. PlanStack surfaces failed payment status in contractor dashboard. Customers receive Stripe-generated card update emails automatically.
- **Cancellation logic:** Immediate or end-of-period cancellation options. On cancellation, auto-scheduled future visits are flagged (not deleted) for contractor review.

### Multi-Tenant Data Isolation

- Each contractor account is a strict tenant. Plan customers, visits, billing data, and portal configurations are isolated per contractor account.
- Customer email addresses are scoped to contractor — the same homeowner email can exist across multiple contractors without conflict.
- Customer portal URLs are namespaced per contractor (`planstack.io/<contractor-slug>/portal`) to prevent cross-tenant portal access.

### Email Deliverability

- Renewal reminder emails and enrollment confirmation emails are transactional, not marketing. Must use dedicated sending infrastructure (SendGrid or Postmark) with proper SPF/DKIM configuration.
- Contractor must be able to customize the "from name" displayed to plan customers (e.g., "Summit Heating & Cooling" not "PlanStack").
- Unsubscribe handling: renewal reminder emails must include unsubscribe link (CAN-SPAM compliance), but unsubscribe from reminders must not cancel the plan.

---

## Innovation & Novel Patterns

### Auto-Scheduling on Enrollment

**The innovation:** When a customer enrolls in a plan, PlanStack automatically computes and creates all scheduled service visits for the plan period — with no manual contractor input. No affordable FSM tool does this. The scheduling logic must handle:

- **Frequency mapping to dates:** Semi-annual → spring tune-up (April) + fall tune-up (October); Quarterly → 4 visits distributed across plan year; Monthly → 12 visits; Annual → 1 visit at roughly 6 months after enrollment.
- **Enrollment date awareness:** A customer enrolling in July should not get a spring tune-up scheduled for the past April. The system must compute the next valid visit window after enrollment date.
- **Visit distribution philosophy:** Evenly spaced across the year within each visit window. The system should prefer standard seasonal timing per vertical (HVAC: spring/fall; pest control: March/June/September/December for quarterly).
- **Contractor override:** Auto-created visits are shown in a review queue. Contractor can adjust individual visit dates (drag-and-drop or date picker) before confirming. Bulk adjust tool for seasonal reschedules.

**Validation approach:** Alpha test with 10 real HVAC/plumbing contractors before launch. Target: ≥ 90% of contractors find auto-created visit dates acceptable without modification. Iterate scheduling logic until this benchmark is reached.

### Customer-Facing Plan Portal at SMB Price Point

**The innovation:** No tool in the $0–$150/month price range gives plan customers a self-service portal to view their plan status, next visit, and service history. ServiceTitan offers this at $300+/month. PlanStack brings this capability to the contractor paying $29/month.

**Key UX constraint:** The portal must require zero friction to access. Magic-link authentication (email a login link — no password required) is the correct pattern for homeowners who may only log in once per year to update their card.

### Plan Profitability Reporting Without Accounting Integration

**The innovation:** Plan profitability is typically invisible to small contractors. PlanStack surfaces it with contractor-entered cost estimates (no QuickBooks integration required). The system calculates:

```
Plan Profit = (Plan Fee) - (Labor $/visit × visits/year) - (Avg parts $/visit × visits/year) - (Drive time cost $/visit × visits/year)
```

This is an estimate, not an accounting truth — but it gives contractors a directional signal they currently have zero visibility into. The UX must communicate this is estimated profitability, not certified P&L.

---

## SaaS Web Application — Specific Requirements

### Authentication & Access Control

- Email/password authentication for contractor accounts with email verification
- Magic-link authentication for customer portal (no password)
- Stripe Connect OAuth for contractor billing setup
- Role model: Owner (full access), Admin (full access minus billing settings), Technician (read-only visit view — future)
- Session management: 30-day persistent sessions for contractor accounts; single-use magic links for customer portal (expire after 24 hours or first use)

### Multi-Tenancy Architecture

- All data models include `contractor_id` foreign key for strict tenant isolation
- Row-level security enforced at database level (not only application layer)
- Contractor slug used for public URLs (`planstack.io/<slug>`) — must be globally unique, validated at account creation

### Subscription & Billing (PlanStack's Own Billing)

- PlanStack's own subscription tiers (separate from the Stripe Connect billing it manages for contractors):
  - Starter: $29/month — up to 50 plan customers
  - Growth: $49/month — up to 200 plan customers
  - Pro: $79/month — unlimited plan customers
  - LTD tiers: $59 (100 customers), $79 (500 customers), $99 (unlimited) — one-time
- Trial: 14-day free trial, no credit card required
- PlanStack billing via Stripe (standard, not Connect)

### Onboarding & Activation

- Post-signup: Forced onboarding wizard (plan creation wizard) — cannot be dismissed until first plan is published or user explicitly skips
- Activation checklist shown on dashboard until all items complete: Connect Stripe ✓, Create first plan ✓, Publish enrollment page ✓, Enroll first customer ✓
- In-app support chat (Crisp or Intercom) available during onboarding only (reduces support cost post-onboarding)
- Video walkthrough overlay available at each wizard step (embedded Loom/Wistia)

### Email Notifications

**Contractor-triggered:**
- New plan enrollment (contractor receives notification when customer enrolls)
- Plan cancellation notification
- Failed payment notification (when Stripe flags payment failure)
- Renewal completed notification (batch daily digest, not per-renewal)

**Automated (no contractor action required):**
- Customer enrollment confirmation (immediate, on enrollment)
- Renewal reminder — 30 days before expiration
- Renewal reminder — 7 days before expiration
- Win-back email #1 — 3 days after expiration (plan lapsed)
- Win-back email #2 — 14 days after expiration
- Win-back email #3 — 30 days after expiration

**Customer portal access:**
- Magic-link email sent when customer requests portal login

### Analytics & Tracking

- Basic in-app product analytics (PostHog or Mixpanel): track plan creation wizard completion rate per step, time-to-first-plan, enrollment events, portal login rate, renewal automation rate
- Contractor-facing analytics: plan customer count over time, monthly enrollment trend, renewal rate by tier, plan revenue (MRR from plan fees collected by contractor)
- Error tracking: Sentry for server-side errors; surface webhook failures clearly in contractor dashboard

---

## Project Scoping & Phased Development

### MVP Strategy

**Philosophy:** Build the core loop that proves the value proposition, nothing more. The core loop is: contractor creates plan → customer enrolls → visits auto-schedule → plan auto-renews → contractor sees it working. Every MVP feature serves this loop.

**Ruthless cuts:** No FSM integrations (Phase 2), no SMS (Phase 2), no white-label domain (Phase 2), no QuickBooks (Phase 2), no native app (Year 2), no AI pricing (Year 2). These are validated add-ons, not core proof-of-concept requirements.

**Build sequence (inside MVP):**
1. Auth + multi-tenant foundation
2. Plan builder wizard + Stripe Connect
3. Public enrollment page + Stripe Checkout
4. Auto-scheduling engine (most complex — build and alpha-test early)
5. Plan customer dashboard
6. Renewal management + automated emails
7. Customer portal (magic-link)
8. Profitability dashboard

### Phase 2: Growth (Months 4–9)

- FSM integrations: Jobber → Housecall Pro → GorillaDesk (in priority order by user base overlap)
- SMS reminders via Twilio
- White-label portal domain
- QuickBooks sync
- Referral program ($25 credit per referred account)
- SEO content flywheel targeting "HVAC maintenance plan software" et al.

### Phase 3: Platform (Year 2)

- Stripe Connect platform revenue layer
- HVAC refrigerant tracking add-on (EPA 608)
- Zapier / Make.com integration
- Commercial maintenance plan tier
- Native apps (iOS/Android)
- AI plan pricing optimizer

### Risk Mitigation

| Risk | Mitigation |
|------|-----------|
| Housecall Pro ships purpose-built plan module | Build FSM integrations early (Month 4–6) so HCP users adopt PlanStack before HCP ships. Lead with customer portal and plan P&L — hardest for bundled tools to prioritize. |
| Plan creation wizard proves too complex for non-tech users | Alpha-test with 10 real contractors before AppSumo launch. Instrument every wizard step. Iterate until 80%+ complete in < 30 minutes. |
| Stripe Connect approval delay | Apply 4 weeks before launch. Have fallback flow (standard Stripe account) for early beta. |
| Low plan renewal rates (< 60%) | If renewal rates disappoint at Month 3, improve customer portal experience and add pre-visit reminders that reinforce plan value before each scheduled service. |
| AppSumo launch gets insufficient traction | Pre-warm community via Reddit/Facebook groups 2 weeks before launch. Target February–March launch timing (before spring HVAC season). |
| Auto-scheduling logic produces incorrect dates | Alpha with 10 contractors across verticals (HVAC, plumbing, pest control) validates scheduling logic. Instrument auto-created visit acceptance rate. Iterate before scale. |

---

## Functional Requirements

### FR-1: Account & Contractor Management

**FR-1.1** The system shall support contractor account registration via email and password with email verification before account activation.

**FR-1.2** The system shall assign each contractor a globally unique URL slug at account creation (auto-derived from business name, editable, validated for uniqueness).

**FR-1.3** The system shall enforce strict data isolation between contractor accounts — no cross-tenant data access at any application layer.

**FR-1.4** The system shall support two contractor-account roles: Owner (full access) and Admin (full access excluding billing and account deletion).

**FR-1.5** The system shall provide a 14-day free trial with full feature access and no credit card requirement at signup.

**FR-1.6** The system shall enforce customer count limits based on contractor's PlanStack subscription tier (Starter: 50, Growth: 200, Pro: unlimited). Display clear upgrade prompt when limit is within 10% of ceiling.

---

### FR-2: Plan Builder & Tier Management

**FR-2.1** The system shall provide a 5-step guided plan creation wizard: (1) business profile + Stripe Connect, (2) tier configuration, (3) service inclusions, (4) pricing, (5) publish.

**FR-2.2** The system shall support up to 5 plan tiers per contractor account. Each tier shall have: name, description, price (monthly or annual billing cycle), visit count per plan period, visit frequency (weekly / monthly / quarterly / semi-annual / annual), service inclusions checklist.

**FR-2.3** The system shall provide pre-built vertical plan templates for: HVAC, Plumbing, Pest Control, Pool Service, Appliance Repair. Each template shall include vertical-appropriate default service inclusions, visit frequency, and suggested pricing range.

**FR-2.4** The system shall allow any plan tier to be cloned and modified to create variants (e.g., "Commercial Gold" from "Gold").

**FR-2.5** The system shall allow contractors to activate, deactivate, or archive plan tiers. Deactivated tiers are hidden from the enrollment page but remain accessible to existing enrolled customers.

**FR-2.6** The plan creation wizard shall guide Stripe Connect setup within the wizard flow, without requiring the contractor to navigate to Stripe's dashboard to complete setup.

---

### FR-3: Stripe Billing Integration

**FR-3.1** The system shall integrate with Stripe Connect to route plan subscription payments directly from enrolling customers to the contractor's connected Stripe account.

**FR-3.2** The system shall support monthly and annual billing cycles per plan tier.

**FR-3.3** The system shall handle Stripe billing events via webhooks: subscription created, subscription cancelled, subscription renewed, payment failed, payment succeeded, customer updated.

**FR-3.4** The system shall surface Stripe billing status per customer in the contractor dashboard: Active, Past Due, Cancelled, Trialing.

**FR-3.5** The system shall allow plan customers to update their payment method via a Stripe-hosted billing portal link, accessible from the customer portal and payment-related emails.

**FR-3.6** The system shall support Stripe's built-in Smart Retries for failed payments and communicate failed payment status to contractors within 1 hour of failure event.

**FR-3.7** The system shall support immediate-cancellation and end-of-period-cancellation options per plan.

---

### FR-4: Public Plan Enrollment Page

**FR-4.1** The system shall generate a public plan enrollment page at `planstack.io/<contractor-slug>` upon plan publication. No authentication is required for homeowners to view or enroll.

**FR-4.2** The enrollment page shall display all active plan tiers with: tier name, price (monthly and annual billing options), service inclusions list, and enrollment CTA button.

**FR-4.3** The enrollment page shall display the contractor's logo, business name, primary brand color, and contact information.

**FR-4.4** The enrollment flow shall use Stripe Checkout for payment collection. Customers shall complete enrollment in 3 or fewer clicks from tier selection to payment confirmation.

**FR-4.5** Upon successful enrollment, the system shall send the customer a confirmation email containing: plan name, included services, billing amount and frequency, next scheduled visit details (once auto-scheduling completes), and a link to the customer portal.

**FR-4.6** The enrollment page shall be mobile-optimized and load in under 2 seconds on a standard mobile connection.

**FR-4.7** The enrollment page URL shall be shareable (correct Open Graph metadata for social media previews) and embeddable via iframe in contractor websites.

---

### FR-5: Auto-Scheduling on Enrollment

**FR-5.1** Upon successful plan enrollment, the system shall automatically create all scheduled service visits for the plan period based on the enrolled plan tier's visit count and frequency — without requiring manual contractor input.

**FR-5.2** The scheduling algorithm shall distribute visits evenly across the plan year using vertical-appropriate seasonal timing:
- HVAC semi-annual: Spring window (April ± 2 weeks) + Fall window (October ± 2 weeks)
- Pest control quarterly: March / June / September / December
- Pool service: aligned with swim season for contractor's region
- All others: evenly distributed from enrollment date

**FR-5.3** The scheduling algorithm shall respect enrollment date — no visits shall be scheduled in the past. If the standard seasonal window for the first visit has already passed, schedule the next available window.

**FR-5.4** Auto-created visits shall appear in a contractor-facing review queue showing: customer name, plan tier, proposed visit date, and service inclusions checklist. The contractor shall be able to accept as-is, adjust individual dates, or bulk-reschedule a window.

**FR-5.5** Each auto-created visit record shall contain: customer name, address, plan tier, service inclusions checklist, plan notes, and customer contact information.

**FR-5.6** The system shall provide a bulk reschedule tool allowing the contractor to shift all visits within a date window (e.g., "move all April tune-ups 1 week later") in a single action.

**FR-5.7** Auto-scheduling shall complete within 5 seconds of enrollment confirmation.

---

### FR-6: Renewal Management

**FR-6.1** The system shall display a renewal dashboard showing all plans expiring within the next 30 days, 60 days, and 90 days, grouped by expiration window with customer name and plan tier visible.

**FR-6.2** The system shall automatically send renewal reminder emails to plan customers at 30 days and 7 days before plan expiration. Emails shall include: plan name, expiration date, renewal price, and a one-click renewal link.

**FR-6.3** The one-click renewal link shall extend the plan by one period (monthly or annual) using the customer's existing payment method on file. No re-entry of payment details required.

**FR-6.4** The contractor shall be able to customise the from-name in renewal reminder emails (e.g., "Summit Heating & Cooling" rather than "PlanStack").

**FR-6.5** The system shall support contractor-level customization of the renewal reminder email body text (within a defined template structure).

**FR-6.6** The system shall track renewal outcomes per customer: Renewed (automated), Renewed (manual), Lapsed, Not Yet Due. Display renewal rate by plan tier in the renewal analytics view.

**FR-6.7** The system shall trigger a 3-email win-back sequence for lapsed plans: Day 3 post-expiration, Day 14, Day 30. Each email shall include a re-enrollment link. Contractor can disable the win-back sequence per account.

**FR-6.8** The contractor shall be able to manually trigger a renewal reminder to any individual plan customer or to all customers expiring in the current month via a single bulk action.

---

### FR-7: Customer-Facing Plan Portal

**FR-7.1** The system shall provide a customer-facing plan portal at `planstack.io/<contractor-slug>/portal`. The portal shall be branded with the contractor's logo, name, and primary color.

**FR-7.2** Customer authentication shall use email magic links only (no password required). Magic links shall expire after 24 hours or first use.

**FR-7.3** The portal home screen shall display: current plan tier name, service inclusions, next scheduled visit date and time window, upcoming visits (all scheduled for the plan period), past service history (visit date, services performed, technician notes if entered), billing details (next charge date, payment method last 4 digits), and plan renewal date.

**FR-7.4** Customers shall be able to update their payment method directly from the portal via a Stripe Billing portal link.

**FR-7.5** Customers shall be able to update their contact information (email, phone, address) from the portal. Updates shall sync to the contractor's customer record.

**FR-7.6** The portal shall be fully mobile-responsive and optimized for smartphone viewing.

**FR-7.7** The portal shall be read-only for service history and visit scheduling — customers cannot cancel plans, reschedule visits, or modify plan tiers from the portal in MVP.

---

### FR-8: Plan Customer Management

**FR-8.1** The contractor dashboard shall provide a paginated list of all plan customers with: name, address, plan tier, enrollment date, next scheduled visit date, renewal date, and Stripe billing status.

**FR-8.2** The list shall support filtering by: plan tier, billing status (Active / Past Due / Cancelled), renewal window (expiring this month / this quarter), and next visit window.

**FR-8.3** The list shall support sorting by: renewal date (ascending), enrollment date, plan tier, billing status.

**FR-8.4** The contractor shall be able to search plan customers by name, address, email, or phone number with results returning in under 500ms.

**FR-8.5** The customer detail view shall display: full profile, all scheduled visits (past and future), complete billing history, all communications sent (emails, dates, outcomes), and a notes field for contractor-entered notes.

**FR-8.6** The contractor shall be able to manually enroll a customer in a plan from the dashboard (for phone/in-person signups) by entering customer details and generating a one-time payment link sent to the customer's email.

**FR-8.7** The system shall support bulk export of the full customer list to CSV with all plan and contact fields included.

**FR-8.8** The contractor shall be able to cancel, pause, or modify a customer's plan tier from the customer detail view. Plan modification (tier upgrade/downgrade) shall trigger a Stripe subscription update with proration.

---

### FR-9: Plan Profitability Dashboard

**FR-9.1** The profitability dashboard shall display a per-tier summary table: enrolled customers, annual plan revenue (total), average plan fee per customer.

**FR-9.2** The system shall allow contractors to enter estimated cost inputs per tier: average labor cost per hour ($/hr), average visit duration (minutes), average parts cost per visit ($), average drive time cost per visit ($).

**FR-9.3** The system shall calculate and display estimated gross profit per plan tier per customer per year using the formula:

`Profit = Annual Fee − [(Labor Rate × Visit Duration/60 + Parts Cost + Drive Cost) × Annual Visits]`

**FR-9.4** The profitability dashboard shall display a traffic-light indicator per tier: green (profitable: profit > 20% of fee), yellow (marginal: profit 0–20% of fee), red (loss: profit < 0).

**FR-9.5** The dashboard shall clearly label all profitability figures as "estimated" and provide a tooltip explaining the calculation methodology and its limitations.

**FR-9.6** The system shall allow contractors to compare profitability across tiers side-by-side and export the profitability summary to CSV.

---

### FR-10: Internal Scheduling Calendar

**FR-10.1** The system shall provide a contractor-facing calendar view of all plan-created service visits, viewable by month and week.

**FR-10.2** Each visit on the calendar shall display: customer name, plan tier, service inclusions, address, and visit status (Scheduled / Completed / Cancelled).

**FR-10.3** The contractor shall be able to mark a visit as Completed from the calendar or customer detail view. Completion shall trigger an optional service notes entry field.

**FR-10.4** The calendar shall support an iCal feed URL allowing contractors to subscribe their preferred external calendar (Google Calendar, Apple Calendar, Outlook) to receive plan visit events.

**FR-10.5** The system shall surface a "visits due this week" summary on the contractor dashboard home screen.

---

## Non-Functional Requirements

### Performance

- **NFR-P1:** Plan enrollment → auto-scheduling completion: < 5 seconds end-to-end (P95).
- **NFR-P2:** Customer portal page load (Time to Interactive): < 2 seconds on 4G mobile (P95).
- **NFR-P3:** Contractor dashboard list views: < 1 second response for up to 500 plan customers (P95).
- **NFR-P4:** Stripe webhook processing: < 2 seconds from receipt to database update (P95).
- **NFR-P5:** Customer search: < 500ms result return for name/email/address queries.

### Security

- **NFR-S1:** Card data is never stored in PlanStack. All payment data handled exclusively by Stripe. PlanStack stores only Stripe customer IDs, subscription IDs, and last-4 / card brand for display.
- **NFR-S2:** Row-level security enforced at the database layer (not only application layer) for all contractor-owned data.
- **NFR-S3:** All API endpoints require authentication. Public endpoints (enrollment page, customer portal) are rate-limited to prevent enumeration attacks.
- **NFR-S4:** Magic-link tokens are single-use and expire after 24 hours. Tokens are cryptographically random (≥ 128 bits entropy).
- **NFR-S5:** Contractor passwords are hashed using bcrypt (cost factor ≥ 12) or equivalent modern algorithm. No plaintext storage at any layer.
- **NFR-S6:** All data in transit encrypted via TLS 1.2+. At-rest encryption for database and file storage.
- **NFR-S7:** Contractor slug URLs for public pages must not expose internal IDs. Public pages return identical 404 responses for non-existent and unauthorized slugs (no enumeration signal).

### Scalability

- **NFR-SC1:** Architecture must support 500+ concurrent contractor accounts without degradation to performance NFRs.
- **NFR-SC2:** Scheduling algorithm must handle bulk enrollment events (e.g., 50 customers enrolled in a single day by one contractor) without queueing delays visible to user.
- **NFR-SC3:** Email sending must use an async job queue — no synchronous email sending in request handlers.

### Reliability

- **NFR-R1:** System uptime: ≥ 99.5% measured monthly (excluding planned maintenance windows communicated 48h in advance).
- **NFR-R2:** Stripe webhook processing must be idempotent — duplicate webhook delivery must not create duplicate records.
- **NFR-R3:** Renewal reminder emails must achieve ≥ 98% delivery rate (not spam-folder rate) as measured by the sending provider.
- **NFR-R4:** Failed background jobs (email sends, webhook processing) must retry with exponential backoff. After 3 failed retries, failures must be surfaced to contractor dashboard and captured in error monitoring.

### Accessibility

- **NFR-A1:** Contractor-facing web application: WCAG 2.1 Level AA compliance for all primary user flows (plan creation, customer management, renewal dashboard).
- **NFR-A2:** Customer portal: WCAG 2.1 Level AA compliance. Minimum 4.5:1 color contrast ratio for all text.
- **NFR-A3:** All enrollment and portal forms must be keyboard-navigable and screen-reader compatible.

### Integration Constraints

- **NFR-I1 (MVP):** Only Stripe Connect integration is required in MVP. All FSM tool integrations (Jobber, Housecall Pro, GorillaDesk) are Phase 2.
- **NFR-I2:** Stripe Connect must use Stripe's standard OAuth flow. Contractors must be able to complete Connect setup without leaving PlanStack (embedded OAuth redirect flow).
- **NFR-I3:** iCal feed (FR-10.4) must conform to RFC 5545 and be compatible with Google Calendar, Apple Calendar, and Outlook.
- **NFR-I4 (Phase 2):** FSM integrations must be designed as optional add-ons, not requirements. PlanStack's scheduling calendar (FR-10) must function fully as a standalone tool regardless of FSM integration status.

---

*PRD completed: 2026-05-02*
*Source inputs: Shortlisted idea (Score: 87/105, 2026-04-20) + Market research (2026-05-02) + Product Brief (2026-05-02)*
*Next recommended step: Architecture — create technical architecture decisions (tech stack, data model, API design)*
