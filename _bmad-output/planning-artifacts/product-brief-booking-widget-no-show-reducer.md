---
stepsCompleted: [1, 2, 3, 4, 5, 6]
inputDocuments:
  - ideas/shortlisted/booking-widget-no-show-reducer.md
  - _bmad-output/planning-artifacts/market-research-booking-widget-no-show-reducer.md
workflowType: product-brief
lastStep: 6
research_type: product-brief
idea_name: booking-widget-no-show-reducer
user_name: Root
date: 2026-05-12
web_research_enabled: false
---

# Product Brief: Booking Widget + No-Show Reducer for Local Services

**Working Product Name:** ShowUp  
**Date:** 2026-05-12  
**Author:** Root  
**Status:** Complete

---

## Executive Summary

Local service businesses — barbers, auto detailers, plumbers, HVAC technicians, cleaning services, salons — collectively lose 10–30% of their weekly revenue to appointment no-shows. A solo detailer charging $150/session and running 25 bookings per week loses an estimated $375–$1,125 every week to no-shows. That is not a minor inconvenience; it is a structural revenue leak that erodes business viability.

**ShowUp** is a lightweight, embeddable booking widget designed specifically for local service businesses. It combines three capabilities no single sub-$50/month product currently offers together: automated SMS reminders at 24 hours and 2 hours before the appointment, Stripe deposit collection at booking time, and industry-specific booking flows tailored to each trade vertical (vehicle type for auto detailers, chair/stylist selection for barbers, service area for plumbers). The entire product embeds onto any existing website with a single line of JavaScript — no platform migration, no redirects to an external scheduling page.

The opportunity is validated and the timing is optimal. The appointment scheduling software market is growing at 14.7% CAGR toward $1.9B by 2034. The pricing gap between free generic tools (Calendly, TidyCal) and full field-service management platforms (Housecall Pro, ServiceTitan) is uncontested at the $15–$49/month tier. The most direct emergent competitor (Kentroi, March 2026) launched without SMS reminders or trade-specific flows, leaving a 12–18 month window to establish vertical authority before the gap closes.

Target launch channel is AppSumo at a $79 LTD, targeting 500 sales in the first 60 days, followed by a freemium MRR funnel at $19–$49/month.

---

## Core Vision

### Problem Statement

Local service business owners who rely on appointment-based revenue face a universal, expensive, and emotionally draining problem: customers book appointments and do not show up. No-show rates of 10–30% are documented across plumbing, HVAC, salons, auto detailing, cleaning, and pet grooming sectors. For a solo operator running a tight schedule, a single no-show is not just lost revenue — it is a blocked time slot that cannot be recovered, plus the time and emotional cost of the failure.

The tools available to these operators do not solve the problem:

- **Generic scheduling tools** (Calendly, TidyCal, SimplyBook.me) lack SMS reminders by default and have no deposit workflow. They were built for B2B meeting scheduling, not trade service bookings.
- **Niche salon platforms** (Vagaro, Fresha, GlossGenius) serve beauty verticals but are not built for plumbers, detailers, or HVAC teams.
- **Full FSM platforms** (Housecall Pro, ServiceTitan) include booking but bundle it into a full job-management suite at $49–$300+/month — overkill and overpriced for a solo operator who only needs to stop losing money to no-shows.

The result: the 36+ million small service businesses in the US are either undigitized (booking by phone, using Google Calendar), stuck on generic tools that don't address their core pain, or paying for FSM platforms they use at 20% capacity.

### Problem Impact

**Financial:** A business with 20 weekly appointments at $120 average value sees $240–$720 in weekly revenue loss at a 10–30% no-show rate. Monthly, that is $960–$2,880 — potentially enough to render the business unprofitable or prevent the owner from hiring a first employee.

**Operational:** Every no-show creates a "dead slot" — time held for a customer who won't appear. Unlike a cancelled appointment with advance notice, a no-show cannot be filled. The slot is simply lost.

**Emotional:** 80% of business owners report that no-shows take an emotional toll beyond the financial impact. The unpredictability of income creates chronic anxiety, affecting decision-making and long-term planning.

**Competitive disadvantage:** Businesses without a deposit-backed booking system train customers that appointments are low-commitment. Competitors who do use deposits see 14%+ additional no-show reduction on top of SMS reminders — creating a meaningful service quality gap over time.

### Why Existing Solutions Fall Short

| Gap | Root Cause |
|---|---|
| Calendly has no native SMS reminders | Built for meetings, not service appointments |
| Acuity SMS only at $61/month tier | Pricing designed for agencies, not solo operators |
| TidyCal has no deposit workflow | LTD product prioritized simplicity over outcome features |
| SimplyBook.me overwhelms with 60+ configuration options | Feature-maximalism rather than job-specific defaults |
| Vagaro/Fresha serve salons only | Vertical specialization stops at beauty/wellness |
| Housecall Pro starts at $49/month and includes full FSM | Built for 5–20 person trade teams, not solo operators |
| Kentroi (March 2026) has no SMS and no vertical flows | New entrant, undifferentiated |

The common thread: no existing product treats SMS reminders + deposits + trade-specific booking flows as the primary job to be done for a solo or 2–5 person service business. Every tool that has two of these three either locks the third behind a high-price tier or misses the vertical specificity that makes booking flows work for trades.

### Proposed Solution

ShowUp is an embeddable JavaScript booking widget that:

1. **Embeds on any website with one line of code** — no Squarespace, Wix, or WordPress plugin required. Works as a drop-in `<script>` tag on any HTML page, compatible with all major website builders via HTML embed blocks.

2. **Collects a configurable deposit at booking** — powered by Stripe. Business owners set the deposit amount (fixed $ or % of service price). The deposit holds the slot; the remainder is collected at time of service.

3. **Fires automated SMS reminders via Twilio** — 24 hours before the appointment and 2 hours before. Both are configurable. Two-way confirmation ("Reply Y to confirm, N to cancel") is supported. TCPA-compliant opt-in is captured at booking.

4. **Uses industry-specific booking flows** — The widget adapts to the vertical. An auto detailer's widget asks for vehicle year/make/model and service type. A barbershop widget shows stylist selection and chair preference. A cleaning service widget captures address, square footage, and frequency. Generic booking forms are eliminated.

5. **Syncs with Google Calendar** — the business owner's availability is always current. Double-bookings are prevented automatically.

6. **Shows the business owner a simple dashboard** — upcoming appointments, deposit collection status, SMS delivery confirmation, and a "no-shows prevented" counter that quantifies ROI.

### Key Differentiators

| Differentiator | Why It Matters |
|---|---|
| SMS + Deposits combined at sub-$50 | No other product does both at this price point |
| Trade-specific booking flows | Generic forms lose customers at the booking step; vertical-native forms convert better |
| One-line-of-code embed | Eliminates the setup friction that kills adoption of more complex tools |
| No-show ROI dashboard | Turns an abstract "this tool saves money" into a quantified, visible number |
| AppSumo-native LTD pricing | Directly targets the highest-intent, most price-resistant segment of the market |
| Vertical brand authority | "Best booking widget for auto detailers" is a winnable niche; generic scheduling is not |

---

## Target Users

### Primary Users

#### Persona 1: Marcus — The Solo Auto Detailer

**Background:** Marcus is 34, runs a mobile auto detailing business in the suburbs. He does 18–22 bookings per week, charges $120–$350 depending on service, and operates out of a cargo van. He has a Wix website built with a template three years ago, uses Google Calendar to track appointments, and texts customers manually the morning of their booking — when he remembers.

**Problem Experience:** Marcus loses 3–4 appointments a month to no-shows. At $180 average, that is $540–$720/month in revenue that simply vanishes. He has tried asking customers to "confirm" via Instagram DM the day before, but follow-through is inconsistent. He does not have a deposit system because setting one up seemed complicated, and he worries it would put customers off.

**Current Workaround:** Manual morning-of-text reminders, chasing customers on Instagram, occasionally holding a slot for an hour past the start time.

**Success Vision:** Marcus wants to wake up knowing his day is locked in. He wants a system that confirms appointments automatically, collects a small deposit so customers have skin in the game, and reduces the "will they show?" anxiety that starts the night before.

**Tool Readiness:** High — Marcus is tech-comfortable but not technical. He will set up a tool if setup takes under 30 minutes and includes a clear walkthrough video.

**Willingness to Pay:** $49–$79 LTD or $20–$30/month if the tool clearly pays for itself by preventing one no-show.

---

#### Persona 2: Daria — The 2-Chair Barber Shop Owner

**Background:** Daria is 41, owns a 2-chair barbershop with one part-time employee. She does walk-ins and appointments. Her current appointment system is a paper calendar at the front desk. She has a Facebook page, a basic Squarespace website, and takes appointment requests via Facebook Messenger. She has heard of Calendly but never set it up.

**Problem Experience:** Daria's no-show rate is ~15%. Each missed appointment is worth $45–$65 in lost revenue. More painfully, she occasionally turns away a walk-in client to hold a booked slot, then the booked client doesn't show — a double loss. She wants to start requiring a deposit but does not know how to collect it without making it awkward.

**Current Workaround:** Paper calendar, Messenger DMs, occasional reminder phone calls.

**Success Vision:** Daria wants clients to book online, pay a small deposit, get a text reminder, and show up. She wants the booking widget on her Squarespace site. She does not want to learn complicated software — she wants something that "just works."

**Tool Readiness:** Moderate — Daria is less tech-savvy than Marcus but motivated by the clear financial pain. A simple video walkthrough and a clean setup experience are critical. She needs a template for her vertical (barbershop).

**Willingness to Pay:** $15–$29/month or $49–$79 LTD.

---

#### Persona 3: Tony — The 3-Person Cleaning Service Owner

**Background:** Tony is 48, runs a residential cleaning company with 2 part-time cleaners. He handles scheduling, client communication, and invoicing himself. He books through a combination of phone calls and a basic Google Form. His no-show/last-minute-cancel rate is high — residential clients cancel same-day frequently, often because they forgot to tell him they'd be away.

**Problem Experience:** Tony's problem is slightly different — his no-shows are often "late cancellations" (same-day or day-before), not full ghosting. But the effect is the same: a crew shows up, nobody home, crew gets paid for a wasted trip. He needs reminders to trigger cancellation decisions early enough to reassign the crew.

**Current Workaround:** Phone confirmation calls the evening before. Time-consuming and not always successful.

**Success Vision:** Tony wants customers to confirm or cancel via text at least 24 hours out, with a deposit system that makes them think twice before cancelling at the last minute.

**Tool Readiness:** High — Tony is willing to invest in tooling. He's looked at Housecall Pro but found it expensive for what he actually needs.

**Willingness to Pay:** $30–$49/month. Receptive to LTD at $79–$99.

---

### Secondary Users

**Customers of the service businesses (booking UX):** The end customers who use the booking widget to schedule appointments. They are not buyers of ShowUp but are the ultimate UX test. Their experience must be smooth, mobile-first, and fast (under 60 seconds to complete a booking including deposit payment). A poor customer-facing booking UX means the business owner gets no benefit regardless of backend quality.

**Marketing agencies serving local service businesses:** Agencies that build and manage websites for plumbers, HVAC companies, landscapers, and salons represent a significant distribution channel. An agency tier (white-label or multi-site license) is not in MVP scope but is a high-value secondary buyer persona for post-launch expansion.

### User Journey

**Discovery**

Marcus sees a post in the "Auto Detailers Business Group" Facebook group. A fellow detailer posts: "Cut my no-shows in half with a booking widget that texts customers — $79 one-time on AppSumo." Marcus clicks the link.

**Consideration**

Marcus watches the 5-minute setup walkthrough video on the ShowUp landing page for auto detailers. He sees a demo of the vehicle-specific booking form, the deposit collection flow, and the SMS confirmation screen. He recognizes his exact use case in the demo.

**Purchase**

Marcus buys the $79 AppSumo LTD. He reads it as: "If this prevents two $150 no-shows this month, I've made back 4× the cost." Low-risk decision.

**Onboarding**

Marcus opens the admin dashboard. He selects "Auto Detailing" as his vertical. The system pre-configures a booking form with vehicle year/make/model and service type fields. He connects his Google Calendar. He connects his Stripe account. He sets a $30 deposit requirement. He copies the embed snippet and pastes it into his Wix website's HTML embed block. The widget appears live. Total time: 22 minutes.

**First Booking**

A customer books through the widget, pays the $30 deposit, and receives an SMS confirmation. Marcus receives an email notification and sees the booking in his dashboard.

**Value Realization ("Aha!" Moment)**

48 hours later, both booked customers for that day confirmed via the automated 24-hour SMS reminder. Neither no-showed. Marcus sees his "No-shows prevented: 1 this month ($150 saved)" counter. He posts about it in the Facebook group.

**Long-term Retention**

Marcus's dashboard shows a running no-show rate versus his self-reported baseline. Every month, the ROI is visible and quantified. He recommends it to another detailer. He expands to the $49/month plan for the rebooking SMS feature.

---

## Success Metrics

### User Success Metrics

| Metric | Target | Measurement Method |
|---|---|---|
| No-show rate reduction | ≥35% reduction vs. user's self-reported baseline | Post-onboarding survey at 30 and 60 days |
| Time to embed widget | <30 minutes from signup to live widget | Funnel analytics: signup → first booking received |
| Customer booking completion rate | ≥70% of started bookings completed with deposit | Widget event tracking |
| Deposit collection success rate | ≥90% of deposits processed without error | Stripe webhook data |
| SMS delivery rate | ≥98% delivery confirmation | Twilio delivery logs |
| Two-way confirmation rate | ≥60% of bookings confirmed via SMS reply | Twilio reply tracking |

**The North Star Metric:** "No-shows prevented per month per business" — this is the metric that, if trending up across the user base, proves the product is doing its job.

### Business Objectives

**3-Month Objectives (Launch Phase)**
- Complete AppSumo LTD launch: 500+ sales at $79 = $39,500 gross launch revenue
- Achieve 75% widget activation rate (users who complete setup and receive ≥1 booking within 7 days of signup)
- Collect 50+ verified case studies with quantified no-show reduction data
- Establish presence in top 3 trade Facebook communities (auto detailing, barbershop, cleaning service)

**6-Month Objectives (Growth Phase)**
- $5,000–$8,000 MRR from direct paid subscribers (non-AppSumo)
- 250–400 active paying accounts
- NPS ≥ 40 from active users
- 20+ G2/Capterra reviews with avg ≥ 4.3 stars

**12-Month Objectives (Scale Phase)**
- $15,000–$25,000 MRR
- 5+ supported verticals (auto detailing, barbershop/salon, cleaning, HVAC/plumbing, pet grooming)
- CAC from organic/content channels < $30
- Listed in Wix and/or Squarespace app marketplace

### Key Performance Indicators

**Acquisition KPIs**
- AppSumo launch: 500 LTD sales in 60 days
- Organic signups per month (post-AppSumo): target 100+/month by month 6
- Content traffic: 5,000 organic visitors/month by month 9 on vertical-specific landing pages
- Trade community posts/referrals: track weekly

**Activation KPIs**
- Day 1 activation: 70%+ of signups embed widget and connect Stripe on day of signup
- Day 7 activation: 60%+ of activated users have received ≥1 completed booking with deposit
- Onboarding completion: avg setup time ≤30 min (measured from account creation to first booking received)

**Retention KPIs**
- Month 1 retention: 80%+ of LTD users have the widget active and receiving bookings
- Month 3 MRR churn: <5% monthly for paid subscribers
- Feature usage: 85%+ of active users have SMS reminders enabled; 70%+ have deposit enabled

**Revenue KPIs**
- AppSumo gross revenue: $39,500 (500 × $79) within 60 days of launch
- MRR at 6 months: $5,000+
- MRR at 12 months: $15,000+
- Average Revenue Per User (ARPU) MRR tier: $28/month

**Impact KPIs (North Star)**
- Platform-wide no-shows prevented per month: reported and tracked
- Average no-show rate reduction for active users: ≥35%
- "ROI-positive" users (tool saves more per month than it costs): ≥90% of active accounts

---

## MVP Scope

### Core Features

The MVP must deliver all three of the key value drivers in a single, coherent product. Removing any one of the three — SMS, deposit, or vertical-specific flow — breaks the differentiation story.

**1. Embeddable Booking Widget (JavaScript)**
- Drop-in `<script>` tag, no iframe, no plugin required
- Works on Wix, Squarespace, WordPress, Webflow, Weebly, and raw HTML
- Mobile-responsive customer-facing UI
- Booking form with configurable fields (date/time picker, service selection, custom fields per vertical)
- Confirmation page + email confirmation to customer on successful booking + deposit

**2. Industry-Specific Booking Templates (2 Verticals at Launch)**
- **Auto Detailing:** Vehicle year, make, model; service type (exterior wash, full detail, ceramic coating, etc.); mobile vs. shop location
- **Barbershop/Salon:** Stylist/barber selection; service type (haircut, beard trim, color, etc.); chair preference (optional)
- Template selection during onboarding; business owner can customize field labels and options

**3. Stripe Deposit Collection**
- Configurable deposit: fixed amount ($10–$500) or percentage (10–50%) of service price
- Deposit collected via Stripe at booking time
- Secure card entry on booking form (Stripe Elements)
- Refund workflow in admin dashboard (full/partial refund to customer)
- Business owner sees deposit status per booking

**4. Automated SMS Reminders via Twilio**
- 24-hour reminder: "Hi [Name], this is a reminder about your [Service] appointment with [Business] tomorrow at [Time]. Reply Y to confirm or N to cancel."
- 2-hour reminder: "Reminder: your [Service] appointment with [Business] is in 2 hours at [Address/Location]. See you soon!"
- TCPA-compliant opt-in checkbox on booking form
- Two-way confirmation: Y → marks booking confirmed; N → marks cancelled, triggers deposit refund workflow, notifies business owner
- Configurable reminders: business owner can disable either reminder, edit message text

**5. Admin Dashboard**
- Upcoming bookings list (calendar and list view)
- Booking detail: customer name, contact, service, deposit status, SMS delivery status, confirmation status
- Basic business settings: name, address, working hours, buffer time between bookings, service list with pricing
- Google Calendar two-way sync (show ShowUp bookings on Google Calendar; block out Google Calendar events on ShowUp availability)
- "No-shows prevented" counter (based on confirmed bookings vs. unconfirmed baseline)

**6. Business Owner Onboarding Flow**
- Vertical selection → pre-configured booking form template
- Service list setup (name, duration, price, deposit %)
- Stripe connect (OAuth)
- Google Calendar connect (OAuth)
- Twilio phone number provisioning (automated, one-click)
- Widget embed code copy + paste instructions with screenshots for top 4 website builders
- 5-minute video walkthrough per vertical embedded in onboarding

### Out of Scope for MVP

The following are validated future opportunities but must not delay the MVP:

| Deferred Feature | Rationale |
|---|---|
| 3rd, 4th, 5th verticals (plumbing, HVAC, cleaning, pet grooming) | Launch with 2 verticals, validate conversion, then expand |
| Rebooking SMS nudges ("time for your next detail") | Revenue amplifier but not core to no-show prevention |
| Post-appointment review generation SMS | High value but a separate use case; adds scope without advancing the core job |
| White-label / agency tier | Distribution play for phase 2 |
| Waitlist management | Advanced feature; requires a sufficient installed base first |
| Predictive no-show scoring (AI) | Interesting but requires data volume that doesn't exist at MVP |
| Multi-staff scheduling (more than 2–3 staff members) | Solo and 2–5 person teams are the MVP target; larger teams can use Vagaro |
| Native iOS/Android app | Web-responsive dashboard is sufficient for MVP; native app is a V2 investment |
| WhatsApp / Apple Business Chat reminders | SMS is dominant in the US market; international channels are phase 2 |
| Accounting integrations (QuickBooks, Wave) | Post-MVP feature for MRR retention |
| Custom domain for booking page (non-embedded flow) | Embedded widget is the core use case; standalone page is a nice-to-have |

**Out of scope by design:** ShowUp is not a full FSM platform. It deliberately does not include job management, invoicing, technician dispatch, route optimization, or CRM. The moment it becomes "another Housecall Pro," it loses its simplicity advantage. The product must resist scope creep toward FSM territory.

### MVP Success Criteria

The MVP is considered validated and ready for AppSumo launch and MRR scale when:

1. **10 beta users per vertical** (20 total) have used the widget in live production for ≥2 weeks
2. **Average no-show rate reduction ≥35%** confirmed across beta cohort
3. **Widget activation time ≤30 minutes** for 80% of beta users (from signup to first live booking received)
4. **Zero critical payment failures** — all Stripe deposits processing without errors in beta
5. **SMS delivery rate ≥98%** across all reminders fired in beta
6. **NPS ≥35** from beta cohort
7. **At least 3 video testimonials** from beta users attributable to specific revenue saved

These criteria gate the AppSumo listing application. If NPS comes back below 35 or activation time exceeds 30 minutes, the onboarding UX must be iterated before launch.

### Future Vision

**6–12 Months Post-Launch: Vertical Expansion**

Expand to 3–5 additional verticals with native booking templates:
- Plumbing / HVAC (service area selection, job type, urgency level)
- Residential cleaning (address, square footage, frequency, add-ons)
- Pet grooming (animal type, breed, service type)
- Landscaping / lawn care (property size, service type, recurring schedule)

**12–24 Months: Revenue Amplification Features**

Once the core no-show reduction use case is proven across verticals, layer in features that amplify customer lifetime value for the businesses:
- **Rebooking nudges:** Automated SMS 4–8 weeks after an appointment: "Time for your next [Service]? Book now with one tap."
- **Review generation:** Post-appointment SMS: "How was your experience? Tap to leave a Google review."
- **Referral mechanics:** Customer-facing: "Refer a friend, your next booking is 20% off."

**24–36 Months: Platform and Ecosystem**

- **Wix / Squarespace / WordPress app marketplace listings** for organic distribution
- **Agency / white-label tier** for marketing agencies serving local service businesses
- **Google Business Profile native integration** (sync ShowUp as the booking button on GBP)
- **Multi-location accounts** for service businesses operating across 2–5 locations
- **International expansion** — UK, AU, CA markets have identical pain points with no strong local competitors in this tier
- **API + Zapier integration** for business owners with existing CRM or email marketing tools

The long-term vision is for ShowUp to become the de facto booking infrastructure for small local service businesses — the equivalent of what Square did for POS in retail, but specifically optimized for appointment-based service revenue protection.

---

## Competitive Positioning Summary

ShowUp occupies uncontested whitespace: **low price + trade-specific + SMS + deposits**.

```
                    HIGH PRICE ($50+/mo)
                           |
        ServiceTitan       |    Vagaro / Acuity
        Housecall Pro      |    GlossGenius
                           |
GENERIC ---|---------------|---------------|--- TRADE-SPECIFIC
           |               |               |
           |    Calendly   |               |
           |   TidyCal LTD |  ► ShowUp ◄   |
                           |  (uncontested)|
                    LOW PRICE ($0–$49/mo)
```

**The positioning statement:**

> ShowUp is the only embeddable booking widget designed for local service businesses that combines automated SMS reminders, deposit collection at booking, and industry-specific booking flows — all for under $50/month. It is what you get when you take TidyCal's simplicity and add the no-show prevention features that Housecall Pro charges $49/month for.

**Elevator pitch (for AppSumo listing):**

> Local service businesses lose 10–30% of their revenue to no-shows. ShowUp is a one-line-of-code booking widget that collects deposits, fires SMS reminders at 24 hours and 2 hours, and uses booking forms built for your specific trade. Stop losing $500 to $5,000 per month. Set it up in under 30 minutes.

---

## Technical Approach (High-Level)

| Component | Technology |
|---|---|
| Frontend widget | Vanilla JavaScript (no framework dependency), embedded via `<script>` |
| Admin dashboard | React + TypeScript |
| Backend API | Node.js (Express or Fastify) |
| Database | PostgreSQL (via Railway or Supabase) |
| SMS | Twilio Messaging API |
| Payments | Stripe Elements + Stripe Connect |
| Calendar sync | Google Calendar API (OAuth 2.0) |
| Hosting | Vercel (frontend) + Railway (API + DB) |
| Estimated infra cost at launch | $50–$150/month |
| Estimated SMS cost per user/month | $0.50–$1.00 (50 bookings × 2 reminders × $0.0075) |
| Build timeline estimate | 2–3 weeks for MVP |

---

## Risk Register

| Risk | Probability | Impact | Mitigation |
|---|---|---|---|
| Calendly / Acuity add SMS at current price tier | Medium | High | Establish vertical brand and reviews before this happens; switching costs via embedded widget + customer data |
| Kentroi adds SMS and trade-specific flows | Medium | High | Ship fast; launch within 6 weeks; claim vertical SEO before Kentroi iterates |
| AppSumo rejects listing | Low | Medium | Backup: direct LTD page + PitchGround / Dealify |
| Low beta NPS forces delay | Medium | Medium | Recruit 20 motivated beta users from Facebook trade groups; iterate rapidly on onboarding friction |
| Twilio SMS cost increases | Low | Low | Build pricing buffer into SMS tiers; pass through at $0.01/message above included volume |
| Generic tools copy deposit + SMS combo | Medium (18 months) | High | Win vertical authority and AppSumo reviews first; vertical templates are non-trivial to copy well |

---

## Next Steps

1. **Architecture design** — Define data model, API contracts, widget embed strategy, Stripe Connect flow
2. **Epics and stories** — Break MVP scope into implementable stories with acceptance criteria
3. **Beta recruitment** — Post in r/AutoDetailing, r/Barber, auto detailing Facebook groups; target 10 beta users per vertical
4. **AppSumo pre-launch preparation** — Prepare listing copy, vertical landing pages, walkthrough videos

**Recommended next BMAD workflow:** `create-prd` — This brief provides the foundation; the PRD will expand MVP scope into detailed requirements with acceptance criteria, data model sketch, and API contracts ready for architecture.

---

*Product Brief complete. All sections derived from shortlisted idea (2026-03-20) and comprehensive market research (2026-05-12). Ready to proceed to PRD creation.*
