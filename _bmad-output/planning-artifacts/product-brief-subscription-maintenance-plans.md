---
stepsCompleted: [1, 2, 3, 4, 5, 6]
inputDocuments:
  - ideas/shortlisted/subscription-maintenance-plans-trades.md
  - _bmad-output/planning-artifacts/research/market-subscription-maintenance-plans-research-2026-05-02.md
workflowType: product-brief
lastStep: 6
date: '2026-05-02'
author: Root
project_name: PlanStack
---

# Product Brief: PlanStack — Subscription Maintenance Plan Platform for Trades

<!-- Completed through automated BMAD product brief workflow -->

## Executive Summary

PlanStack is a purpose-built subscription maintenance plan management platform for trades businesses — HVAC contractors, plumbers, pest control operators, pool service companies, appliance repair businesses, and garage door companies — with 1–20 employees. It fills a genuine, unoccupied market position: no affordable standalone tool exists to help small trades businesses create, sell, and manage bronze/silver/gold tier maintenance subscription plans with automated scheduling, Stripe billing, customer portals, and plan profitability reporting.

The positioning is precise: "The Memberful for trades businesses." Memberful succeeded as a standalone subscription management tool inside a world where WordPress, Kajabi, and Squarespace all include "membership" features — because Memberful did it better and more simply than any bundled option. PlanStack applies the same thesis to a $118M+ SAM in a vertical where the dominant full-featured tool (ServiceTitan, $245–500/technician/month) is 5–10x out of reach for the businesses that need it most.

The core insight from market research: fewer than 35% of residential HVAC contractors have an active maintenance agreement program, even though companies with 40%+ recurring revenue from service agreements generate 40% higher revenue per technician and sell for 6–10x EBITDA vs. 2–4x for demand-only competitors. The gap is not motivation — it is operational friction. Spreadsheets, manual renewal reminders, and generic billing tools cannot support a scalable plan program. PlanStack removes that friction with a 30-minute onboarding wizard, auto-scheduling on enrollment, automated renewal management, and a customer-facing plan portal that no affordable competitor currently offers.

Launch strategy: $59–99 LTD on AppSumo (no maintenance-plan-focused competitor holds LTD marketplace territory) followed by $29–79/month subscription tiers. The "LTD to build recurring revenue" narrative — pay once to build predictable MRR — is the strongest possible AppSumo pitch for this audience.

---

## Core Vision

### Problem Statement

Small trades businesses — HVAC contractors, plumbers, pest control operators, pool service companies — are structurally motivated to build subscription maintenance plan programs. A customer on an annual HVAC maintenance plan pays a predictable monthly or annual fee, gets two tune-ups per year, and gives the HVAC company a reliable revenue stream that smooths seasonal volatility, books technicians in shoulder months (October and March, historically dead for HVAC), and creates high-conversion equipment-replacement upsell opportunities at every plan visit.

Yet fewer than 35% of residential HVAC contractors have an active maintenance agreement program, and the pattern holds across plumbing, pest control, and pool service. The reason is not lack of interest — it is that building and managing a subscription plan program requires software that does seven things simultaneously:

1. Define plan tiers (bronze/silver/gold) with different service inclusions, prices, and visit frequencies
2. Bill customers automatically on a recurring schedule via Stripe or equivalent
3. Auto-schedule the included visits without manual calendar work each time a customer enrolls
4. Track which plan each customer is on, when visits are due, and when plans expire
5. Send renewal reminders automatically when plans are 30 days from expiring
6. Give customers a portal to view their plan status, next visit, and service history
7. Report on plan profitability — is the $149/year bronze plan actually making money after labor, parts, and drive time?

No affordable FSM tool ($49–129/month) does all of this well. Housecall Pro and Jobber offer recurring jobs and billing but have no plan tier architecture, no renewal automation, no customer-facing plan portal, and no plan profitability reporting — maintenance is a feature layered onto scheduling software, not a first-class product concept. ServiceTitan has all seven capabilities in its membership module, but ServiceTitan costs $245–500/technician/month and is explicitly designed for businesses with $750K+ revenue and 3+ technicians. The 1–20 technician contractor earning $150K–$1.5M/year — the backbone of the trades industry — has no adequate tool.

The primary competition for this market is not ServiceTitan. It is the spreadsheet. Contractors managing 30–200 plan customers on Google Sheets with manual renewal invoices and zero visibility into plan profitability are the buyer. PlanStack's pitch is not "switch from ServiceTitan." It is "replace your spreadsheet and finally build the plan program you've been meaning to start."

### Problem Impact

**Revenue and Valuation Consequences of Not Building a Plan Program:**
- Companies with 40%+ recurring revenue from service agreements generate 40% higher revenue per technician (BDR HVAC benchmarks)
- HVAC businesses with strong service agreement programs sell for 6–10x EBITDA at exit; demand-only businesses sell for 2–4x — a difference of hundreds of thousands of dollars on a typical small business sale
- Shoulder-season revenue gaps (October–November, March–April for HVAC) cost contractors 20–40% of peak revenue; maintenance agreements scheduled in these windows are the canonical fix
- A contractor with 100 customers on $200/year plans = $20,000/year in predictable recurring revenue before a single emergency call comes in

**Operational Cost of Managing Plans Manually:**
- A contractor managing 50–100 plan customers on spreadsheets spends 3–5 hours/week on manual renewal reminders, billing reconciliation, and scheduling coordination — $150–250/week in owner-operator time at fully-loaded cost
- Plans lapse silently without automated renewal reminders: a customer whose $199/year plan expires in February gets no prompt; by April they've forgotten; the contractor lost the renewal revenue and the spring tune-up upsell opportunity
- Manual scheduling of included plan visits means a technician shortage in peak season and empty calendars in shoulder months — the exact inverse of good technician utilization

**Market Readiness Signal:**
- The subscription economy normalization has primed consumers: HVAC customers asking "do you have a maintenance plan?" are increasingly common; the sell is getting easier, but the back-office software to fulfill it hasn't caught up
- ServiceTitan's publicly documented maintenance plan module success (it is one of their highest-mentioned feature differentiators in sales conversations) validates that the software category has demand — the question is whether that demand can be served at an accessible price point

### Why Existing Solutions Fall Short

| Competitor | Price | Plan Tier Architecture | Auto-Scheduling on Enrollment | Renewal Automation | Customer Plan Portal | Plan P&L Reporting | LTD Available |
|-----------|-------|----------------------|------------------------------|-------------------|--------------------|-------------------|---------------|
| **ServiceTitan** | $245–500/tech/mo | ✅ Deep | ✅ Yes | ✅ Yes | ✅ Yes | ✅ Yes | ❌ No |
| **FieldEdge** | $100–125/user/mo | ✅ Solid | ✅ Yes | ✅ Renewal reminders | ❌ No | Basic | ❌ No |
| **Housecall Pro** | $49–750/mo | ❌ None | ❌ Recurring jobs only | ❌ None | ❌ None | ❌ None | ❌ No |
| **Jobber** | $65–209/user/mo | ❌ None | ❌ Recurring jobs only | ❌ None | ❌ None | ❌ None | ❌ No |
| **FieldPulse** | $49–249/mo | Partial | Basic | Partial | ❌ None | Basic | ❌ No |
| **GorillaDesk** | $49–299/mo | ❌ (pest/pool focus) | Basic recurring | ❌ None | ❌ None | ❌ None | ❌ No |
| **Stripe + Google Calendar** | $0 + fees | ❌ None | ❌ Manual | ❌ Manual | ❌ None | ❌ None | N/A |
| **Spreadsheets** | Free | ❌ None | ❌ Manual | ❌ Manual | ❌ None | ❌ None | N/A |
| **PlanStack (Target)** | $29–79/mo (LTD $59–99) | ✅ Yes | ✅ Yes | ✅ Yes | ✅ Yes | ✅ Yes | ✅ **First-mover** |

**The unoccupied position:** Purpose-built plan management at SMB-accessible price. This quadrant is empty.

**Why affordable tools fall short specifically:**
- **Housecall Pro** treats maintenance plans as a subset of recurring jobs — there is no concept of a "plan" as a distinct product with tiers, included visits, or renewal logic. Contractors use it for general scheduling and accept the gap.
- **Jobber** is not HVAC/mechanical-trades-focused; its recurring jobs feature has no plan-specific customer communication, no plan portal, and no renewal automation. Its brand equity is in landscaping and cleaning, not HVAC.
- **FieldPulse** is the closest existing competitor by price — it has a "Maintenance Agreements" feature, but user reviews consistently note it lacks the depth of ServiceTitan's membership module. No customer portal, no plan profitability reporting.
- **ServiceTitan** solves the problem completely but is priced for a business generating $750K+ revenue. A 2-technician HVAC company doing $400K/year cannot justify $490–1,000/month in software costs for a tool that also requires a 5-week implementation and annual contract.

### Proposed Solution

**PlanStack** is the purpose-built subscription maintenance plan management platform for trades businesses with 1–20 employees. The core design philosophy: a "plan" is a first-class product concept — not an afterthought on a scheduling calendar. Every screen in PlanStack is organized around the plan as the organizing unit.

**1. Plan Builder with Tier Management**
A guided 5-step wizard that takes a contractor from zero to a live, purchasable maintenance plan in under 30 minutes. Create bronze/silver/gold (or any named) tiers with custom pricing, included visit counts, visit frequency (annual, semi-annual, quarterly, monthly), service inclusions checklist (tune-up, filter change, refrigerant check, drain cleaning, etc.), and description. The wizard handles plan creation, pricing logic, and Stripe product setup simultaneously — no switching between tools.

**2. Stripe Billing Integration (First-Class)**
Customers enroll in plans via a public-facing plan enrollment page (a contractor-branded URL) and pay via Stripe. Monthly or annual billing supported. Stripe handles failed payment retry, card update notifications, and cancellation. The contractor never touches a billing spreadsheet — PlanStack shows active plans, billing status, and upcoming renewals in a single dashboard.

**3. Auto-Scheduling on Enrollment**
When a customer enrolls in a plan, PlanStack automatically creates the scheduled maintenance visits based on plan frequency — no manual calendar work required. A new silver plan customer gets two visits auto-scheduled (spring and fall), appearing on the contractor's calendar with the customer's address, plan tier, and included services pre-filled. This is the most operationally high-value feature and the most absent from affordable FSM tools.

**4. Automated Renewal Management**
30-day and 7-day renewal reminder emails go to plan customers automatically before their annual plan expires. Contractor sees a renewal dashboard showing which plans expire this month, this quarter, and which customers have not responded to reminders. One-click renewal with the same or updated pricing. Lapsed plans trigger an automated win-back sequence.

**5. Customer-Facing Plan Portal**
A branded URL where enrolled customers can log in and see their current plan tier, included services, next visit date, past service history, and renewal date. Customers can update their payment method directly (reducing failed payment churn). This feature is exclusive to ServiceTitan at affordable pricing — no Housecall Pro, Jobber, or FieldPulse customer has access to anything equivalent.

**6. Plan Profitability Dashboard**
Show the contractor the revenue and estimated cost per plan tier: plan fee revenue per customer × enrolled customers = tier gross revenue. Subtract estimated labor cost per visit (hourly rate × visit duration), parts, and drive time. A profitability heat map by tier tells the contractor immediately whether their $149/year bronze plan is profitable or a money-loser at current enrollment and technician costs. No affordable competitor shows this.

**7. Multi-Vertical Plan Templates**
Ship with pre-built plan templates for HVAC, pest control, plumbing, pool service, and appliance repair — each with vertical-specific default service inclusions, recommended pricing ranges (based on market research data), and seasonally appropriate scheduling patterns. A pest control contractor can launch a quarterly plan with correct visit frequency and service inclusions in 10 minutes without knowing what to include.

### Key Differentiators

| Differentiator | Why It Matters | Competitive Advantage |
|---------------|---------------|----------------------|
| **Plan as first-class product concept** | Competitors add plan features to scheduling tools; PlanStack builds scheduling on top of plan management | Every screen reinforces "you are selling a subscription product" — the mental model change that drives plan program growth |
| **Auto-scheduling on enrollment** | The #1 operational friction point: contractors manually schedule each plan visit after a customer signs up | No affordable competitor auto-creates visits on enrollment; this is 30+ minutes of manual work per new plan customer eliminated |
| **Customer-facing plan portal** | Homeowners expect self-service; "when is my next visit?" calls waste technician time | ServiceTitan-exclusive feature at SMB price; reduces inbound inquiry calls; increases plan renewal rates |
| **Plan profitability reporting** | Contractors who can't see plan P&L often unknowingly lose money on plans (too many visits, too much drive time) | No affordable competitor shows this; price itself as the tool that makes plan programs profitable, not just manageable |
| **30-minute plan creation wizard** | Trades businesses have not launched plans because setup friction is too high | "From zero to selling your first plan in 30 minutes" — removes the activation barrier that has kept 65% of HVAC contractors from starting |
| **LTD-first positioning on AppSumo** | No maintenance-plan-focused competitor is on AppSumo | First-mover advantage in LTD marketplace; "pay once to build recurring revenue forever" is uniquely compelling narrative |
| **Multi-vertical templates** | HVAC, plumbing, pest control, pool service each have different plan structures | Lowers the "I don't know what to include" barrier for each vertical; accelerates multi-vertical expansion without product changes |
| **Integration as strategy** | Contractors already use Jobber or HCP for general scheduling | Integrating plan-created jobs into existing FSM tools positions PlanStack as complementary, not competitive — easier adoption |

---

## Target Users

### Primary Users

#### Persona 1: Jake — The HVAC Owner Ready to Build Recurring Revenue

**Profile:**
- Age 44, owns "Summit Heating & Cooling" in Columbus, OH
- 4 full-time technicians; serves 280 residential accounts
- Revenue: ~$68K/month ($820K/year); gross margin ~38%
- Has been in HVAC for 16 years, took over his uncle's business 6 years ago
- Currently uses Housecall Pro for scheduling/invoicing; collects plans manually with paper agreements and spreadsheet tracking
- Has 47 active maintenance plan customers (signed paper agreements, billed annually via QuickBooks invoice)

**Current Pain:**
- Managing 47 plan customers on a spreadsheet is barely working. Two customers didn't renew last year because Jake forgot to send renewal invoices on time — that's $400 in lost revenue and two equipment-upgrade relationships gone.
- When a new customer calls asking about the maintenance plan, Jake has to explain it verbally and then email them a PDF agreement. Half of interested prospects never sign.
- April and October are supposed to be "maintenance months" but scheduling the tune-up visits for 47 customers while also handling emergency calls is chaotic. Technicians come in Monday morning not knowing which plan customers need visits that week.
- Jake knows he should have 150–200 plan customers by now (peer contractors with similar-sized businesses have that many) but growing past 50 feels operationally impossible with his current tools.

**Success Vision:**
- A new customer visits Jake's website, clicks "Maintenance Plans," and enrolls in the Gold plan ($279/year) with a credit card in 8 minutes — no Jake involvement.
- That enrollment automatically schedules two tune-up visits on the calendar (one in April, one in October), appearing as jobs assigned to whichever technician has capacity.
- Jake's plan dashboard shows 85 active plan customers, $16,830/year in plan revenue, and a 78% renewal rate. His October — historically his worst revenue month — now has 40 tune-up visits booked.
- He checks the profitability view: his Silver plan ($199/year, 2 visits) is generating $24/plan profit. His Bronze ($129/year, 1 visit) is $31/plan profit. He raises Silver to $219/year next renewal cycle.

**Decision Trigger:** A competitor HVAC company in his market posts to a local Facebook group that they grew to 200 maintenance agreement customers and "basically doubled our October revenue." Jake asks what software they use; they say they built a custom system and it was painful. He searches "HVAC maintenance plan software" and finds PlanStack via an AppSumo launch.

---

#### Persona 2: Maria — The Plumbing Business Owner Launching Her First Plan

**Profile:**
- Age 38, runs "ClearFlow Plumbing" with her husband in Denver, CO
- 2 plumbers (herself + 1 employee); serves 110 residential accounts
- Revenue: ~$28K/month; currently no recurring revenue stream
- Has heard from her HVAC contractor friends that maintenance plans changed their business but doesn't know where to start with plumbing
- Currently uses Jobber for scheduling; no billing automation

**Current Pain:**
- She wants to launch a drain cleaning subscription plan ($99/year — one annual drain inspection and cleaning) but doesn't know: what to charge, how to collect recurring payments, how to remind customers when their service is due, or how to track who has paid vs. not.
- She tried to set it up in Jobber but couldn't find a "plan" concept — just recurring jobs, which don't solve the billing and renewal tracking problem.
- She estimates she has 40–50 customers who would sign up immediately if she could present a clean, professional plan enrollment page. But building that from scratch on her website feels too technical.

**Success Vision:**
- PlanStack's plumbing plan templates give her a pre-built "Annual Drain Care Plan" with the right service inclusions and a suggested price range ($79–$129/year).
- She customizes it, generates an enrollment URL, and posts it on her Jobber invoice footer and Facebook business page.
- Week 1: 12 customers enroll. By Month 3: 48 plan customers. Annual recurring revenue: $4,750/year — nearly 2 additional months of a part-time technician's salary, just from plan fees.
- Plan visits auto-schedule in Jobber via the integration. She doesn't need to switch scheduling tools.

**Decision Trigger:** Sees a PlanStack AppSumo listing: "Launch your first maintenance plan in 30 minutes." The wizard demo video shows exactly the plumbing plan setup she couldn't figure out in Jobber. She buys the $59 LTD the same day.

---

#### Persona 3: Derek — The Pest Control Operator Expanding to HVAC-Style Plans

**Profile:**
- Age 51, owns "Fortress Pest Control" in Charlotte, NC
- 6 technicians; 320 residential recurring treatment accounts
- Revenue: ~$85K/month; already has strong recurring revenue from quarterly treatment subscriptions
- His quarterly treatment model works well in pest control; he's been told by a pool service neighbor that subscription plan software helped them "finally get organized"
- Currently uses GorillaDesk for route scheduling; manually manages plan customers via GorillaDesk recurring jobs

**Current Pain:**
- GorillaDesk handles his recurring job scheduling well but has no concept of a "plan" — he can't show customers a plan page, can't track renewal rates, can't see which plan customers are most profitable by service tier.
- He wants to create a "Pest Prevention Plus" plan (quarterly treatments + annual interior inspection + priority scheduling) that charges more than his standard quarterly service, but he has no tool to differentiate the billing and scheduling logic.
- His office manager spends 5 hours/week manually sending renewal reminders and following up on lapsed quarterly customers by phone.

**Success Vision:**
- PlanStack's pest control templates give him the exact tier structure: Bronze (quarterly exterior), Silver (quarterly all-access + annual interior inspection), Gold (monthly all-access + same-day priority scheduling).
- GorillaDesk handles route scheduling; PlanStack handles plan enrollment, billing, renewal, and customer portal. The two-tool setup costs him $59 LTD (PlanStack) + his existing GorillaDesk subscription — still cheaper than GorillaDesk's Pro tier alone.
- His office manager's renewal reminder work drops from 5 hours/week to 30 minutes/week of reviewing automated reminder outcomes.

**Decision Trigger:** Sees PlanStack mentioned in a "Pest Control Business Owners" Facebook group post comparing tools for plan management. The commenter says "GorillaDesk for routes, PlanStack for plan management — best of both." Derek buys.

---

### Secondary Users

#### The Homeowner / Plan Customer (End User of Customer Portal)
- Enrolled in an HVAC or plumbing maintenance plan through their contractor
- Interacts with PlanStack via the contractor-branded customer portal
- Needs: see current plan tier, next scheduled visit date, past service records, payment method management
- Does not purchase PlanStack; their contractor does
- Their experience of the portal influences plan renewal rate: a clear, professional portal increases renewal confidence

#### The Contractor's Office Manager / Bookkeeper
- Manages the administrative side of the plan business: renewal outreach, billing reconciliation, customer communication
- Interacts with PlanStack's renewal dashboard, payment status view, and customer communication tools
- Values: time savings on manual renewal tracking; one-click renewal billing; easy access to customer plan history when customers call
- Not the buyer, but a powerful advocate for or against adoption (if the tool saves her 5 hours/week, she champions it; if it creates new work, she's the internal objector)

#### The Field Technician (Execution User)
- Performs the maintenance plan visits created by PlanStack's auto-scheduling
- Interacts with the job details on the plan-created visit: what's included, plan tier, customer history
- Needs: clear service checklist per plan tier (so they know what a bronze vs. gold plan visit requires), customer contact info, and visit notes
- Not a purchaser; their efficiency at plan visits determines plan profitability and renewal rates

### User Journey

**Discovery (Week 0):**
Jake sees an AppSumo email with subject "Launch a maintenance plan program in 30 minutes — PlanStack LTD." He's been thinking about building out his plan program for two years. He clicks through, watches the 4-minute demo video, and sees his exact use case — HVAC bronze/silver/gold plans, auto-scheduling, customer portal. He reads 15 reviews from other HVAC and trades contractors. He buys the $79 LTD (500-customer tier) the same afternoon.

**Onboarding (Day 1–2):**
Jake opens PlanStack and the 5-step plan creation wizard begins. Step 1: business profile and Stripe Connect setup (8 minutes). Step 2: choose "HVAC" template — Bronze, Silver, Gold plans are pre-populated with service inclusions, visit counts, and suggested pricing. He adjusts prices to match his market ($149/$229/$299/year). Step 3: customize plan names and descriptions. Step 4: review the auto-generated enrollment page (contractor-branded, his logo, his colors). Step 5: publish. Elapsed time: 28 minutes. He copies the enrollment URL and adds it to his website's footer and Housecall Pro invoice template.

**First Enrollments (Week 1):**
Three customers enroll through the website link within the first week. Jake sees the plan dashboard: 3 active plan customers, $677 in annual plan revenue. More meaningfully, he sees the calendar: 6 new maintenance visits auto-scheduled across the next 12 months for these 3 customers — 3 spring tune-ups and 3 fall tune-ups. He didn't touch the calendar. He emails his existing 47 spreadsheet plan customers with a link to "upgrade to our new online plan management system" — 31 migrate within 10 days.

**Aha Moment (Month 1–2):**
Jake's renewal dashboard shows 8 plan customers expiring in the next 30 days. He clicks "Send renewal reminders to all" — 8 automated emails go out with renewal links. 6 renew within 48 hours without Jake being involved. He thinks: "I used to chase these manually for two weeks."

He checks the profitability view for the first time. His Gold plan ($299/year, 2 visits) shows $67 average profit per customer per year. His Bronze plan ($149/year, 1 visit) shows $38 profit. He decides to raise Gold to $319 at the next renewal cycle. This is a decision he had never had data to make before.

**Long-Term Value (Month 6+):**
Jake has 94 active plan customers — up from 47 when he started. Plan revenue: $19,200/year in predictable recurring income. October — historically his slowest month — has 42 maintenance visits on the calendar, keeping his 4 technicians consistently booked. His renewal rate is 74%. He refers PlanStack to three HVAC contractors in his regional ACCA chapter. He upgrades to the monthly subscription tier to get the Jobber integration and white-label portal branding.

---

## Success Metrics

### User Success Metrics

| Metric | Target | Measurement |
|--------|--------|-------------|
| Time to first live plan | <30 minutes from account creation | Time from signup to plan published with Stripe enrollment active |
| Plan enrollment rate (contractor's customers) | Contractor converts 10%+ of active customers to plans within 90 days | New plan enrollments / total active customer accounts |
| Auto-scheduling utilization | 85%+ of plan enrollments result in auto-created visits (no manual scheduling) | Auto-created jobs / total new plan enrollments |
| Renewal automation rate | 70%+ of expiring plans renewed without contractor manual intervention | Auto-renewed plans / total plan expirations |
| Customer portal login rate | 40%+ of plan customers log into portal within 30 days of enrollment | Portal logins / total plan customers |
| Plan profitability visibility | 75%+ of active contractors have checked profitability dashboard in past 30 days | Dashboard views per active account |
| Office admin time reduction | 3+ hours/week saved on renewal/billing manual work (self-reported) | Before/after survey at 60-day check-in |

### Business Objectives

**Phase 1 — LTD Validation (Months 1–3):**
- Validate that the plan creation wizard achieves <30-minute plan launch for real trades contractors
- Confirm that auto-scheduling on enrollment works reliably across HVAC, plumbing, pest control, and pool service scheduling patterns
- Seed G2/Capterra/AppSumo reviews focused on plan program growth, not just software features
- Revenue target: $17,700–49,500 from 300–500 LTD sales ($59–99/unit at average $79)
- Primary validation: contractors reporting that their plan customer count grew meaningfully (10%+ increase) within 90 days of launch

**Phase 2 — Subscription Growth (Months 4–12):**
- Transition from LTD to recurring subscription at $29/49/79 per month tiers
- Launch Jobber and Housecall Pro scheduling integrations (sync plan-created jobs into contractor's existing FSM tool)
- Build vertical-specific SEO content: "HVAC maintenance plan software," "service agreement software for HVAC," "ServiceTitan alternative maintenance plans"
- Target: $8,000 MRR by Month 12 (160+ subscribers at $49/month average)
- Achieve 4.5+/5 rating on G2/Capterra with reviews featuring plan program growth metrics (customer counts, renewal rates)

**Phase 3 — Platform Expansion (Year 2):**
- Launch HVAC-specific add-on: EPA 608 refrigerant tracking integrated with plan visit workflow
- Launch payment processing revenue layer: Stripe Connect platform rates on plan subscription volume flowing through PlanStack
- Target: $25,000 MRR by end of Year 2
- Expand to commercial maintenance plan management (commercial HVAC contracts, commercial pest control)

### Key Performance Indicators

| KPI | Month 3 Target | Month 12 Target | Year 2 Target | Measurement |
|-----|---------------|----------------|--------------|-------------|
| AppSumo LTD Sales | 300 units | 500 units (close LTD) | N/A | Sales tracking |
| Monthly Subscribers | 25 | 160 | 500 | Billing system |
| Monthly Recurring Revenue | $0 | $8,000 | $25,000 | Stripe dashboard |
| Active Plan Customers (managed across all contractors) | 1,500 | 25,000 | 100,000 | App analytics (**north star**) |
| Plans Auto-Renewed (monthly) | 50/month | 800/month | 5,000/month | Renewal events |
| Monthly Churn Rate (contractor accounts) | <6% | <3% | <2% | Cancelled / Total per month |
| G2/Capterra Reviews | 25+ | 100+ | 300+ | Review platforms |
| Average Review Rating | 4.2+ | 4.5+ | 4.6+ | Review averages |
| Trial-to-Paid Conversion | 15%+ | 22%+ | 28%+ | Funnel analytics |
| Customer Acquisition Cost | <$50 | <$35 | <$25 | Marketing spend / new accounts |
| Net Promoter Score | 35+ | 45+ | 55+ | In-app NPS at 30/90 days |

**North Star Metric: Active plan customers managed across all contractor accounts** — this is the irreplaceable core value of PlanStack. High managed-customer count means contractors are actively enrolling customers, plans are being billed, and auto-scheduling is running. It is also the stickiness driver: once a contractor has 75+ plan customers with billing history and scheduled visits in PlanStack, migrating the data is painful and risky. A contractor who has built their plan program inside PlanStack will not switch tools without a compelling reason.

---

## MVP Scope

### Core Features

**1. Plan Builder and Tier Manager (Must Have — Core Product)**
- 5-step plan creation wizard: business info + Stripe Connect → plan tier setup → service inclusions → pricing → publish
- Tier configuration: plan name (Bronze/Silver/Gold or custom), price (monthly or annual), visit count per period, visit frequency (weekly/monthly/quarterly/semi-annual/annual), service inclusions checklist (free text or vertical-specific defaults)
- Up to 5 plan tiers per contractor account
- Plans can be cloned and modified (e.g., duplicate Gold and modify for a "Commercial Silver" variant)
- Pre-built templates for HVAC, pest control, plumbing, pool service, appliance repair (each with vertical-appropriate defaults)

**2. Stripe Billing Integration — Recurring Plans (Must Have)**
- Stripe Connect setup during onboarding (contractor receives payments directly to their bank account)
- Monthly or annual billing supported per plan tier
- Automatic failed payment retry (Stripe's built-in dunning logic)
- Customer card update notification emails (Stripe Billing portal)
- Plan cancellation logic: cancel immediately or at period end
- Contractor revenue dashboard: total plan MRR, active plan customers, billing status per customer

**3. Public Plan Enrollment Page (Must Have)**
- Auto-generated public URL per contractor: `planstack.io/yourcompany`
- Shows all active plan tiers with pricing, service inclusions, and enrollment button
- Contractor branding: logo, primary color, business name, contact info
- Stripe Checkout integration: customer enters card, selects monthly/annual billing, enrolls in 3 clicks
- Post-enrollment: customer receives confirmation email with plan details and link to customer portal

**4. Auto-Scheduling on Enrollment (Must Have — Primary Differentiator)**
- When a customer enrolls in a plan, PlanStack auto-creates the scheduled service visits for the plan period based on visit count and frequency
- Visit scheduling logic: evenly distribute visits across the plan year based on frequency (semi-annual = spring + fall; quarterly = 4 visits distributed; monthly = 12 visits)
- Contractor reviews auto-created visits and can adjust dates with drag-and-drop
- Visits appear in PlanStack's internal calendar with: customer address, plan tier, service inclusions checklist, plan notes
- Optional: export visits to Google Calendar (iCal feed) or Jobber/Housecall Pro integration (Phase 2)
- Bulk reschedule tool: adjust all spring tune-ups for plan customers in one action

**5. Renewal Management Dashboard (Must Have)**
- Renewal calendar view: plans expiring this month, next month, and next quarter with customer names and plan tier
- Automated renewal reminders: 30-day and 7-day pre-expiration emails to plan customers (customizable template)
- One-click renewal confirmation for customers via email link (extends plan another year with same Stripe charge)
- Renewal analytics: renewal rate by tier, average days from reminder to renewal
- Win-back sequence for lapsed plans: 3-email series over 30 days after plan expiration

**6. Customer-Facing Plan Portal (Must Have — Exclusive to Affordable Tier)**
- Contractor-branded portal URL: `planstack.io/yourcompany/portal`
- Customer login via email magic link (no password required)
- Portal displays: current plan tier, service inclusions, next scheduled visit date and time, past service history (visit dates, services performed, technician notes), billing information (next charge date, payment method — with card update link), plan renewal date
- Mobile-responsive (homeowners access on phones)
- Read-only by default; customers can update payment method and contact info

**7. Plan Customer Management Dashboard (Must Have)**
- All active plan customers in a single view: name, address, plan tier, enrollment date, next visit, renewal date, billing status
- Filter/sort by: plan tier, renewal date, next visit date, billing status (active/past due/cancelled)
- Customer detail view: full plan history, service records, all visits, billing history, communication log
- Bulk actions: send renewal reminders to all customers expiring this month, export customer list to CSV
- Search by customer name, address, or plan tier

**8. Basic Plan Profitability Dashboard (Must Have)**
- Per-tier summary: enrolled customers, annual plan revenue per tier, total revenue per tier
- Estimated cost inputs (contractor sets): average labor cost per hour, average visit duration (minutes), average parts cost per visit, average drive time cost per visit
- Calculated output: gross profit per plan tier per customer per year, total tier P&L
- Visual indicator: profitable (green), marginal (yellow), loss (red) per tier
- Does not integrate with QuickBooks in MVP — manual cost inputs; integration is Phase 2

**9. Mobile-Responsive Web App (Must Have)**
- All contractor-facing screens are mobile-responsive (contractors often check status from phones)
- Customer enrollment page and customer portal are mobile-optimized
- No native iOS/Android app in MVP — responsive web first
- Progressive Web App (PWA) support: add to home screen, basic offline viewing of today's schedule

### Out of Scope for MVP

| Feature | Reason for Deferral | Target Phase |
|---------|---------------------|-------------|
| Jobber / Housecall Pro / GorillaDesk integration | API integration complexity; MVP validates core plan management first | Phase 2 (Month 4–6) |
| QuickBooks accounting sync | Nice-to-have; contractors can manually track plan revenue in QB | Phase 2 (Month 4–6) |
| White-label customer portal (contractor's own domain) | Domain setup complexity; `planstack.io/yourcompany` works for MVP | Phase 2 (Month 6–9) |
| Multi-location / franchise support | Enterprise play outside primary persona | Phase 3 (Year 2) |
| HVAC refrigerant tracking (EPA 608) | HVAC-specific add-on; adds significant compliance complexity | Phase 2 (Month 6–9) |
| Native iOS / Android apps | Responsive web handles MVP; native apps require separate development track | Phase 3 (Year 2) |
| AI plan pricing optimizer | Advanced feature; needs data from multiple accounts to be useful | Phase 3 (Year 2) |
| Equipment records / asset tracking | FSM feature creep; not core to plan management | Phase 3 (Year 2+) |
| Commercial maintenance plan tier | Different buyer segment, sales motion, and compliance needs | Phase 3 (Year 2) |
| Plan promotion / discount codes | Marketing feature; not core to plan management | Phase 2 (Month 9–12) |
| SMS renewal reminders | Email covers MVP; SMS requires Twilio integration and compliance | Phase 2 (Month 4–6) |
| Customer-facing plan comparison page (configurable) | Static plan page covers MVP; comparison widget is a nice polish | Phase 2 (Month 6–9) |
| Technician-facing mobile job completion flow | PlanStack focuses on plan management; job execution stays in contractor's FSM tool | Phase 3 (Year 2) |
| Zapier / Make.com integration | Automation layer; not needed for core plan management | Phase 2 (Month 9–12) |

### MVP Success Criteria

| Criteria | Target | Validation Method |
|---------|--------|-------------------|
| Plan creation speed | 80%+ of new contractors publish first plan within 30 minutes of signup | Time from account creation to first plan published |
| Auto-scheduling reliability | 90%+ of plan enrollments result in correctly auto-created visits | Auto-created visits / total enrollments |
| Renewal automation effectiveness | 60%+ of auto-renewal reminders convert (plan renewed without contractor action) | Auto-renewed plans / total auto-reminders sent |
| Plan customer count growth | 50%+ of contractors report plan customer count growth within 90 days | 30/60/90-day surveys and dashboard data |
| LTD Revenue Validation | 300+ LTD sales within 60 days of AppSumo launch | Sales tracking |
| Product-Market Fit | 40%+ of active contractors say they'd be "very disappointed" if PlanStack went away | In-app PMF survey at 30 days (Sean Ellis test) |
| Review Quality | 4.2+ average across first 50 reviews (AppSumo/G2/Capterra) | Review platforms |
| Trial Conversion | 18%+ of trial accounts convert to paid (LTD or subscription) | Funnel analytics |
| Retention | 70%+ of LTD cohort remains active (logged in, plan customers enrolled) at 90 days | App analytics |

**Go/No-Go Decision Point (Month 3):**
If MVP achieves 300+ LTD sales, 50%+ of contractors report plan customer count growth, and PMF score ≥40%, proceed to Phase 2 (FSM integrations, SMS reminders, subscription growth). If plan creation wizard takes average >45 minutes, iterate heavily on wizard UX and templates before marketing push.

### Future Vision

**Year 1 — Own the "Trades Maintenance Plans" Category:**
PlanStack becomes the first and dominant brand name when trades contractors ask peers "what do you use to manage your maintenance plans?" Community presence in r/HVAC, r/Plumbing, "HVAC Business Owners" Facebook group, and ACCA/PHCC trade organization events drives organic word-of-mouth. G2/Capterra reviews in the "Field Service Management" category cluster around plan-specific language that makes Housecall Pro's and Jobber's maintenance gaps visible by comparison. Jobber and HCP integrations (sync plan jobs into existing scheduling tools) complete the "complementary tool" positioning — PlanStack doesn't compete with their scheduling, it adds the plan management layer they're missing. Monthly recurring revenue reaches $8,000–10,000 from subscription tiers. AppSumo LTD campaign reaches 800–1,000 lifetime buyers.

**Year 2 — Vertical Depth and Payment Processing Revenue:**
The HVAC refrigerant tracking add-on (EPA 608 compliance) launches as a premium module: log refrigerant type, quantity added, recovery amounts, and technician certification numbers against each plan visit. This is required by federal law for any HVAC technician handling refrigerants — and no affordable tool tracks it inside a plan visit workflow. Stripe Connect platform revenue begins: PlanStack earns 0.5–1.0% on plan subscription volume processed through its Stripe Connect integration (contractors are processing $500–5,000/month each in plan fees). With 500+ active contractors each processing an average $2,000/month in plan fees, monthly processing revenue = $5,000–10,000/month on top of SaaS subscriptions. MRR target: $25,000.

**Year 3 — Recurring Revenue Platform for Trades:**
PlanStack expands beyond plan management into the full "recurring revenue stack" for trades businesses: extended warranty-style plans (appliance protection plans, system replacement coverage), priority membership clubs ("Platinum Member: same-day service, $499/year"), and embedded insurance partnerships (offer plan customers discounted home warranty products through a revenue-sharing partnership). The data layer becomes valuable: plan renewal benchmarks ("your 68% renewal rate is below the 79% median for HVAC contractors in the Midwest — here are 3 things top performers do differently"), market intelligence for trade associations, and automated plan optimization suggestions based on profitability data across the contractor base.

**Long-Term Defensibility:**
PlanStack's moat compounds from three sources: (1) **data stickiness** — once a contractor has 100+ plan customers with 2+ years of billing history, renewal records, and auto-scheduled visits in PlanStack, migrating is painful and risks losing plan continuity with customers; (2) **vertical template library** — building accurate, market-tested plan templates for 6+ trades verticals with correct pricing guidance and seasonal scheduling patterns takes 12+ months to replicate credibly; (3) **community trust** — word-of-mouth in tight-knit trades communities (the ACCA convention, local PHCC chapter meetings, HVAC Facebook groups) is the dominant discovery channel, and first-mover brand equity in this community compounds non-linearly.

---

## Risks and Mitigations

| Risk | Severity | Likelihood | Mitigation |
|------|----------|-----------|-----------|
| Housecall Pro builds purpose-built plan management module | High | Medium | HCP has 50K+ customers and engineering resources; a dedicated plan tier architecture could narrow PlanStack's differentiation gap within 12–18 months. Build FSM integrations quickly so HCP users adopt PlanStack before HCP ships. The customer portal and plan P&L features are the hardest for a bundled tool to prioritize — lead with those. |
| Jobber launches "Maintenance Plans" product tier | Medium | Medium | Jobber's brand is landscaping/cleaning, not HVAC/mechanical — its plan templates would be generic. PlanStack's vertical-specific templates and auto-scheduling logic are harder to replicate quickly. Establish community presence in HVAC/plumbing circles before Jobber markets there. |
| Standalone too narrow — contractors want full FSM | Medium | Medium | The Memberful analogy: standalone subscription management tools exist and thrive alongside bundled options. Mitigation is the integration strategy — sync plan jobs into Jobber/HCP so PlanStack is additive, not replacement. Frame explicitly: "Use your existing FSM for general jobs. Use PlanStack to manage your plan program." |
| Plan creation wizard proves too complex for non-tech-savvy contractors | High | Medium | Alpha-test with 10 real HVAC/plumbing owners before launch. Measure time-to-first-plan. Iterate wizard UX until 80%+ complete first plan in <30 minutes. Add video walkthrough overlay and in-app chat support (Crisp or Intercom) for onboarding questions. |
| Stripe Connect approval delays impact launch timeline | Low | Low | Apply for Stripe Connect 4 weeks before planned launch. Have standard Stripe billing (not Connect) as fallback where contractor shares a Stripe account — less elegant but functional for early beta customers. |
| AppSumo launch gets insufficient traffic | Medium | Low | Pre-warm community (Reddit, Facebook groups, ProductHunt teaser) in the 2 weeks before AppSumo launch. Target "coming soon" page signups from interested contractors. 300-unit target is conservative at AppSumo's SMB trades audience. |
| Plan renewal rates lower than expected (< 60%) | Medium | Medium | If contractors' plan customers renew at low rates, the tool's value proposition weakens. Iteration path: improve customer portal experience (clearer renewal value communication), add plan visit reminders before each scheduled visit (reinforces plan value), and add win-back sequences. Root cause diagnosis at Month 3. |
| Seasonal revenue spike at AppSumo launch timing | Low | Low | Launch timing matters for HVAC-heavy audience. Target February–March AppSumo launch (6–8 weeks before spring HVAC season, when contractors are thinking about maintenance programs). Alternatively, August–September (before fall season). Avoid December–January and May–June. |

---

## Go-to-Market Strategy Summary

| Phase | Timeline | Key Activities | Success Metric |
|-------|----------|---------------|---------------|
| **Build MVP** | Weeks 1–4 | Plan builder wizard, Stripe Connect, enrollment page, auto-scheduling, renewal management, customer portal, plan profitability dashboard | Feature-complete MVP |
| **Alpha Test** | Weeks 4–6 | Test with 5–10 real HVAC/plumbing contractors; measure plan creation time; iterate on wizard UX; confirm auto-scheduling accuracy | 80%+ complete first plan in <30 min; 90%+ auto-scheduling accuracy |
| **AppSumo Pre-Warm** | Weeks 6–8 | ProductHunt "coming soon" page; seed r/HVAC, r/Plumbing posts ("building this, want early access?"); email list of interested contractors | 200+ pre-launch email signups |
| **LTD Launch** | Weeks 8–12 | AppSumo listing ($59/$99/$149 tiers); "launch your maintenance plan program" positioning; demo video showing end-to-end in <5 minutes | 300–500 LTD sales |
| **Community Seeding** | Weeks 8–20 | Organic participation in HVAC/plumbing Facebook groups; r/HVAC, r/Plumbing, r/pestcontrol; AppSumo/G2/Capterra review seeding | 60+ reviews at 4.2+ |
| **FSM Integration** | Month 4–6 | Jobber integration (sync plan jobs); Housecall Pro integration; GorillaDesk integration for pest control | Integration adoption by 30%+ of active accounts |
| **Subscription Launch** | Month 4 | $29/$49/$79/month tier pricing; referral program ($25/referral credit or 1 month free); SEO content on HVAC/plumbing plan software | 50+ monthly subscribers |
| **HVAC Refrigerant Add-on** | Month 6–9 | EPA 608 refrigerant logging inside plan visit workflow; premium add-on at $15/month | 100+ add-on activations |
| **Payment Processing Revenue** | Year 2 Q1 | Stripe Connect platform rate negotiation; 0.5–1.0% on plan subscription volume | $3,000/month processing revenue |

**Primary Channels (Ranked by Priority):**

1. **AppSumo** — No competitor in the maintenance-plan-management category; first-mover LTD advantage. The "build recurring revenue without recurring software costs" narrative is uniquely optimized for this audience.
2. **r/HVAC (Reddit)** — 50K+ members; highly engaged with business software and HVAC industry practice discussions. Organic "I built this" posts perform well when the product is genuinely relevant.
3. **HVAC Business Owners Facebook Groups** — Peer recommendations in these groups carry high purchase weight; one positive recommendation in "HVAC Business Owners" or "HVAC Techs & Business Owners" reaches 10K–100K members.
4. **r/Plumbing, r/pestcontrol** — Secondary vertical communities; post vertical-specific messaging after HVAC initial traction.
5. **Google SEO** — Target: "HVAC maintenance plan software," "service agreement software for HVAC," "ServiceTitan too expensive maintenance plans," "how to manage maintenance agreements." High commercial intent, low current competition from purpose-built tools.
6. **ProductHunt** — Launch on ProductHunt simultaneously with AppSumo for cross-channel visibility; link AppSumo listing from ProductHunt page.
7. **Trade Publications (long-term)** — ACHR News, Plumbing & Mechanical, Pest Control Technology; for brand building after initial community traction.

**Core Messaging:**
- "The Memberful for trades businesses — build your maintenance plan program in 30 minutes."
- "ServiceTitan charges $300/month for plan management. PlanStack charges $59 once."
- "Auto-schedule every plan visit. Auto-renew every plan. Show customers their plan online. Done."
- "Stop managing maintenance plans on spreadsheets. Start building recurring revenue."
- "Every trade, every plan type — HVAC, plumbing, pest control, pool service, appliance repair."

---

*Product Brief completed: 2026-05-02*
*Source: Shortlisted idea (Score: 85/105, 2026-03-20 | 87/105, 2026-04-20) + Comprehensive market research (2026-05-02)*
*Next recommended step: Create PRD (Product Requirements Document)*
