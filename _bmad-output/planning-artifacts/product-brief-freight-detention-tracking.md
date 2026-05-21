---
stepsCompleted: [1, 2, 3, 4, 5, 6]
inputDocuments:
  - ideas/shortlisted/freight-detention-tracking.md
  - _bmad-output/planning-artifacts/market-research-freight-detention-tracking.md
workflowType: 'product-brief'
lastStep: 6
date: '2026-05-21'
author: Root
---

# Product Brief: Freight Detention Tracking

<!-- Generated autonomously via automated BMAD pipeline — 2026-05-21 -->

---

## Executive Summary

The U.S. trucking industry loses **$15 billion annually** to driver detention, yet fewer than half of those fees are ever collected. The cause is entirely preventable: small carriers and owner-operators rely on paper logs, verbal agreements, and memory to document detention events — and without verifiable proof, brokers routinely dispute or ignore claims.

**FreightDetain** (working title) is a purpose-built iOS/Android + web application that gives small carriers (3–15 trucks) and the independent dispatchers who serve them a complete detention documentation and recovery system: GPS-geofenced automatic timestamps, photo evidence capture, one-tap invoice generation, and a shared dispatcher dashboard with fleet-wide visibility. For independent freight dispatchers — a 350,000-person segment running their entire operation on WhatsApp and Google Sheets — the product also provides a lightweight CRM with load tracking, commission calculation, carrier contact management, and rate confirmation storage.

No dedicated tool exists for this segment today. The competitive landscape is a dead zone between DockClaim ($49/month, solo drivers only) and full TMS platforms ($3,000–15,000+/year). FreightDetain fills that gap at $29/truck/month with a lifetime deal option at $149 (fleet of up to 10 trucks) — a price point where **a single recovered detention event pays for the product**.

This brief defines the product vision, target users, success metrics, and MVP scope to guide all subsequent PRD, architecture, and development work.

---

## Core Vision

### Problem Statement

Small trucking carriers (3–15 trucks) and owner-operators are owed billions of dollars in detention fees every year — and they never collect them. When a driver waits beyond the standard 2-hour free time at a shipper or receiver, they are contractually owed detention pay (typically $65–$200/hour). But collection requires documentation that these carriers cannot produce: GPS-verified arrival and departure timestamps, timestamped photo evidence, and a professional invoice that brokers cannot easily dispute.

Today's documentation process is: a driver calls their dispatcher when they arrive. The dispatcher writes it in a notebook, or texts themselves, or just trusts the driver's word. When a $150 detention event occurs, the carrier spends 20 minutes trying to recreate the timeline, generates a hand-written or basic spreadsheet invoice, and submits it to a broker who may ignore it entirely. The broker disputes the time. The carrier gives up.

The result: the FMCSA reports $1.3 billion in annual driver wage losses attributable to undocumented detention. DAT Freight & Analytics finds fewer than 50% of detention fees are collected. Carriers self-select out of claiming anything under $200 because the administrative effort costs more than the recovery.

### Problem Impact

- **$15 billion** in annual detention-related losses (DAT, 2023): $3.6B direct driver costs + $11.5B lost productivity
- **135 million hours** lost annually to detention across the industry
- **39.3%** of all truck stops involve detention exceeding 2 hours
- **<50%** collection rate — the shortfall is entirely a documentation and process failure, not a contractual one
- **$1.1–1.3 billion** in annual driver wage losses (FMCSA)
- Small carriers (3–15 trucks), the most vulnerable segment, have zero purpose-built software to address this
- Independent freight dispatchers managing these carriers — estimated 350,000+ in the US — operate entirely on informal tools (WhatsApp, Google Sheets, email) with no structured workflow

### Why Existing Solutions Fall Short

| Solution | Price | Gap |
|----------|-------|-----|
| DockClaim | $49/month | Solo-only; no fleet view; no dispatcher dashboard; no commission tracking |
| DMRG Detention Pay app | Free | Manual entry required; no auto-invoicing; no fleet view; no dispatcher support |
| Toro TMS (detention module) | $3,000–15,000/year | Full TMS overhead; excessive complexity and cost for pure detention use case |
| Detention Source | $5,000+/year | Enterprise-only; inaccessible to small carriers; data platform, not a workflow tool |
| Tailwind TMS / Truxel TMS | $30–99/truck/month | General-purpose TMS; detention is manual post-trip review, not automated |
| Samsara (ELD dwell time) | Hardware + SaaS | Identifies detention events but has no invoicing capability; requires separate billing workflow |
| McLeod Software | $50,000+/year | Enterprise TMS; irrelevant to small carrier segment |

The market has two bands: affordable tools for solo owner-operators with no fleet visibility, and expensive TMS platforms for mid-to-large carriers. The 3–15 truck band — which represents the **single largest underserved cohort** (97% of U.S. trucking companies operate 10 or fewer trucks) — is entirely uncovered.

For independent dispatchers, no purpose-built tool exists at all. Freight broker software (Aljex, AscendTMS, Rose Rocket) is designed for asset owners and freight brokers, not home-based dispatchers who charge commission per load and manage 3–15 owner-operator clients.

### Proposed Solution

FreightDetain is a **mobile-first detention documentation and dispatcher operations platform** built for the 3–15 truck carrier segment and the independent dispatchers who serve them.

**Core workflow for drivers:**
1. Driver arrives at a shipper/receiver — app auto-detects arrival via GPS geofencing and starts the free-time clock
2. After 2 hours (configurable), the app prompts the driver to start detention tracking
3. Driver takes a timestamp photo (optional but adds evidentiary weight) — app records GPS coordinates, timestamps, and driver ID
4. On departure, app records departure time and generates a GPS-verified PDF detention invoice in one tap
5. Invoice is emailed directly to the broker from within the app

**Core workflow for dispatchers:**
1. Dispatcher logs in to the web dashboard to see real-time driver status across their entire fleet
2. Active detentions are flagged with elapsed time and location
3. Dispatcher manages their carrier contact book, load assignments, and rate confirmations
4. Commission calculation auto-runs per load; dispatcher invoices are generated with one click
5. Facility detention history builds over time, showing which facilities are chronic offenders

**Dual-product, single platform:** The driver mobile app and the dispatcher web dashboard are two faces of the same platform. A dispatcher onboards their fleet of drivers; drivers install the app; all detention data flows to the dispatcher's dashboard automatically.

### Key Differentiators

1. **Only fleet-view detention tool under $50/truck/month** — DockClaim is solo-only. We are the first purpose-built tool for multi-truck carriers with dispatcher oversight.

2. **GPS + photo evidence in one tap** — Harder to dispute than GPS-only approaches. Courts and arbitrators recognize timestamped photo evidence as strong documentation.

3. **Dispatcher as distribution** — By targeting independent dispatchers (who each manage 5–15 carriers), a single dispatcher sale triggers adoption across an entire fleet portfolio. This is a viral B2B coefficient no competitor has exploited.

4. **Independent dispatcher CRM bolt-on** — Expands TAM from detention tracking to a broader dispatcher operations platform at minimal incremental development cost. No competitor addresses this 350,000-person segment at all.

5. **Regulatory tailwind moat** — DOT has proposed mandatory detention pay in its highway reauthorization proposal. When regulations require documentation, the market will come to us; we will already have the only affordable tool for small carriers.

6. **Crowdsourced facility database** — Every detention event logged builds an anonymized database of chronic facilities. This creates network effects and defensibility that competitors cannot replicate without the user base.

---

## Target Users

### Primary Users

#### Persona 1: Marcus — The Growth-Stage Small Fleet Owner

**Background:** Marcus, 44, owns and operates a 7-truck dry van fleet based in Columbus, Ohio. He started as an owner-operator ten years ago and has grown to where he now employs 5 drivers and uses 2 leased owner-operators. He runs regional freight for three steady brokers and handles spot loads through DAT. His wife helps with paperwork and billing on evenings and weekends.

**Current detention situation:** Marcus estimates he's losing $800–1,200/month in uncollected detention across his fleet, but he can't prove it. When a driver calls to report detention, Marcus tries to log it in a spreadsheet, but the data is inconsistent — different drivers format times differently, and some forget to call at all. He submits detention invoices for about 60% of events and gets paid on roughly half of those. He's learned to only fight for events over $200 because smaller claims aren't worth the administrative pain.

**What he needs:** A single dashboard showing all 7 trucks in real time, with automatic detention logging that doesn't require his drivers to do anything complicated. He wants a PDF invoice he can send to brokers that they can't dispute. He wants to know which facilities are chronic offenders so he can factor detention risk into load selection.

**Success moment:** The first week where FreightDetain recovers $400 in fees he never would have invoiced before. He shows the dashboard to his dispatcher (who works remotely) and realizes she can see everything without calling him.

**WTP:** $200–300/month for 7 trucks ($28–43/truck) — comfortably in our target range.

---

#### Persona 2: Diane — The Solo Owner-Operator

**Background:** Diane, 51, runs one truck — a 2021 Peterbilt she owns outright. She hauls frozen food in the Midwest, working with 4–5 freight brokers. Her daughter helps her submit invoices occasionally. She's been trucking for 20 years and is deeply skeptical of software — she tried one TMS app and abandoned it after the second week because it was too complicated.

**Current detention situation:** Diane routinely experiences 2–4 detention events per week at distribution centers she regularly visits. She calls in to her informal "dispatcher" (actually her husband, who keeps a whiteboard) with arrival and departure times. About 30% of her detention events get invoiced; she collects on maybe half of those. She estimates she's leaving $600–800/month on the table but considers it "the cost of doing business."

**What she needs:** Something she can tap once when she arrives and once when she leaves. It has to work from her phone without complicated setup. She doesn't want to learn new software — she wants the app to be as simple as setting a timer.

**Success moment:** She submits her first GPS-verified invoice via the app. A broker she's had payment disputes with before pays within 48 hours without pushback. She tells three other drivers at a truck stop.

**WTP:** $29/month or a one-time payment. LTD framing ("pay once, recover forever") is the right message for Diane.

---

#### Persona 3: Kevin — The Independent Freight Dispatcher

**Background:** Kevin, 36, runs a home-based dispatch business in Atlanta. He manages 11 owner-operator clients — mostly small flatbed operators — handling load booking, rate negotiation, paperwork organization, and billing. He charges 5% commission per load. He has no employees. His entire operation runs on: WhatsApp (for driver communication), Gmail (for rate confirmations and broker email), Google Sheets (for commission tracking), and his personal contacts list for brokers.

**Current situation:** Kevin spends 2–3 hours per week manually calculating commissions from driver pay emails and copying numbers into spreadsheets. He has no visibility into where his drivers are or whether they're stuck in detention — he only knows if a driver texts him. He has lost two clients in the past year over commission disputes where he couldn't produce documentation quickly enough. He's actively looking for software but finds freight broker platforms too expensive and overpowered.

**What he needs:** A dashboard where he can see all 11 drivers in real-time. Automatic commission calculation when a driver marks a load complete. A place to store rate confirmations that isn't his email inbox. A tool that looks professional enough to attract new owner-operator clients. And crucially — a way to flag detention events so he can invoice them before brokers dodge the charge.

**Success moment:** Kevin sends a prospective client a screenshot of his dispatcher dashboard showing real-time driver locations and detention status. The client says it looks more professional than any other dispatcher they've talked to and signs up.

**WTP:** $49/month flat fee for the dispatcher plan — well within his income from 11 clients.

### Secondary Users

**Drivers Employed by Small Carriers (not owner-operators)**

Employed drivers (W2 or 1099) within 3–15 truck fleets are app users but not purchase decision-makers. Their needs are simple: the app must work in one or two taps, must not drain battery, and must not require WiFi. Successful adoption at the driver level is a dependency for carrier value — if drivers won't use it, fleet owners won't pay for it.

**Brokers (Indirect Stakeholder)**

Brokers receive detention invoices generated by FreightDetain. They are not customers, but they are part of the value chain. The professional PDF format of FreightDetain invoices — with GPS coordinates, timestamped photos, and digital signatures — is designed to reduce dispute friction for brokers who want to pay legitimate claims quickly. A secondary product opportunity exists (broker-facing portal for detention claims management) but is out of scope for MVP.

### User Journey

#### Driver Journey (Carrier App)

**Discovery:** Diane hears about FreightDetain from another driver in a Facebook trucking group. Someone posts a screenshot of a $340 detention invoice paid within 24 hours. She clicks the link in the comments.

**Onboarding:** She downloads the iOS app, creates an account with her email, and enters her truck number and DOT number. The app asks her to set her standard free-time window (default: 2 hours). Setup takes under 5 minutes.

**First Core Use:** The next day, she arrives at a distribution center. The app detects her arrival via GPS geofencing and sends a notification: "Arrived at Kraft Distribution — Columbus OH. Start free-time clock?" She taps Yes. Two hours later: "Free time exceeded. Detention clock started." She taps the camera icon and takes a photo of the facility entrance with her truck visible. On departure, she taps "I'm leaving" — the app records departure, calculates detention (2h 45min), and shows her a draft invoice for $165. She taps "Send to broker" and it fires off immediately.

**Aha Moment:** The broker pays the invoice three days later without dispute. Diane screenshots the payment confirmation and posts it in the Facebook group. She tells her husband they're getting $150–200/month back that they used to lose.

**Long-term Retention:** Diane has the app open every time she's at a facility. She starts checking the facility reputation database to see which stops have detention history before accepting loads. Her monthly detention recovery averages $680.

---

#### Dispatcher Journey (Web Dashboard)

**Discovery:** Kevin sees a post in a Facebook group for independent freight dispatchers: "Tool that shows all your drivers in real time AND calculates commissions automatically." He joins the waitlist.

**Onboarding:** Kevin creates a dispatcher account, invites his 11 drivers to install the driver app via email/SMS links. 8 of 11 install within 48 hours. Kevin spends 30 minutes adding his standard broker contacts and rate structures.

**First Core Use:** Kevin opens the dispatcher dashboard and sees 8 driver location pins on a map. Two drivers are at facilities; one has a detention clock active (1h 15min elapsed). He sends that driver a message within the app: "Get photo evidence if it hits 2 hours." When the load completes, the system prompts commission calculation — Kevin reviews and approves the $155 commission for the load, which auto-populates his monthly invoice to that driver.

**Aha Moment:** A driver's detention event auto-generates a $240 invoice that the broker pays. Kevin's commission on that (5%) is $12. He didn't have to do anything.

**Long-term Retention:** Kevin uses FreightDetain as his primary operational hub. He cancels his Google Sheets commission tracker. He refers two dispatcher friends, earning referral credits. He now manages 15 drivers.

---

## Success Metrics

### User Success Metrics

The primary proxy for user success is **detention revenue recovered per truck per month** — a metric only FreightDetain can provide because no other tool tracks this end-to-end.

| User Success Metric | Definition | Target (Month 6) | Target (Month 12) |
|--------------------|------------|------------------|-------------------|
| Detention events logged per truck/month | Avg number of detention events captured via geofence | 4+ | 6+ |
| Detention invoices submitted per event logged | % of logged events that result in invoice submission | >80% | >90% |
| Detention collection rate (platform users) | % of submitted invoices paid | >65% | >75% |
| Avg monthly detention recovery per truck | Dollar value recovered per truck enrolled | >$200 | >$400 |
| Dispatcher dashboard DAU/MAU ratio | How often dispatchers return weekly | >40% | >55% |
| Time-to-first-invoice | Minutes from first app open to first invoice submitted | <10 min | <8 min |
| Driver app retention (30-day) | % of drivers still using app 30 days after install | >60% | >70% |

**The "First Win" Moment** is the single most important leading indicator: a user who has submitted their first GPS-verified invoice and received payment will churn at dramatically lower rates than one who has not. All onboarding must be optimized toward this moment.

### Business Objectives

**Year 1 Primary Objectives:**

1. **Validate willingness-to-pay at scale** — Launch LTD; target 1,000 LTD buyers at average $149 = $149K launch revenue. This validates that the segment will pay for documentation tooling before committing to full MRR ramp.

2. **Achieve product-market fit signal** — NPS ≥ 45 from LTD cohort within 90 days of onboarding. Identify 20+ customer testimonials with quantified retention recovery (e.g., "recovered $3,400 in 4 months").

3. **Build the facility database network effect** — Reach 10,000 facility detention records by Month 6. This makes the product sticky: users won't leave a platform that knows more about their regular stops than any alternative.

4. **Establish dispatcher as the distribution flywheel** — Acquire 50+ dispatcher accounts by Month 6. Each dispatcher account represents an average of 8 driver-app installs (fleet size range: 5–15 carriers).

**Year 2–3 Strategic Objective:**

- Expand TAM to full accessorial charge management (lumper fees, layover, TONU) — detention is the wedge into a broader freight billing problem worth $2B+ annually in uncollected charges.

### Key Performance Indicators

| KPI | Month 3 | Month 6 | Month 12 | Measurement Method |
|-----|---------|---------|----------|--------------------|
| LTD buyers | 200 | 700 | 1,000 | AppSumo + direct sales |
| Active MRR accounts | 0 | 80 | 300 | Stripe MRR dashboard |
| MRR | $0 | $13,920 | $52,200 | Stripe |
| ARR run rate | — | — | $626K | Stripe annualized |
| Trucks enrolled (all tiers) | 400 | 2,000 | 5,000 | App database |
| Dispatcher accounts | 10 | 50 | 200 | App database |
| Facility database records | 500 | 10,000 | 40,000 | App database |
| Net Promoter Score | — | 45+ | 55+ | In-app survey |
| Avg detention recovery/truck/month | — | $220 | $420 | In-app analytics |
| Churn rate (MRR accounts) | — | <8% | <5% | Stripe |
| CAC (blended) | — | <$120 | <$90 | Marketing attribution |
| LTV/CAC ratio | — | >3x | >5x | Stripe / attribution |

---

## MVP Scope

### Core Features

The MVP delivers two integrated products: a **driver mobile app** (iOS + Android) and a **dispatcher web dashboard**. Every feature in scope directly addresses a documented failure point in the detention collection workflow.

#### Driver App (iOS + Android)

**1. GPS Geofencing — Automatic Arrival/Departure Detection**
- App runs background geofencing for saved facility locations
- On entry to a facility geofence, starts a free-time clock automatically
- Notification at 2 hours (configurable to carrier-specific free-time window): "Free time expired — detention clock started"
- On departure, records departure timestamp
- Fallback: Manual check-in/check-out tap if geofence fails or facility isn't in the database

**2. Photo Evidence Capture**
- One-tap photo from the detention screen
- Metadata locked at capture: GPS coordinates, timestamp, driver ID, truck number
- Photo + metadata stored in S3; referenced in the invoice PDF
- Metadata cannot be altered after capture (tamper-evident log)

**3. Detention Invoice Generation**
- Auto-populated PDF invoice: carrier name, driver name, truck number, origin facility, arrival time, departure time, detention hours, rate, total
- GPS coordinates and timestamped photo embedded in PDF
- One-tap email to broker (email pre-populated from the load record)
- Invoice status tracking: Sent → Viewed → Paid → Disputed

**4. Load Record (Lightweight)**
- Driver logs load number, broker contact, and facility at start of shift
- This pre-populates the invoice; no re-entry required at detention time
- Load history stored for reference and dispute documentation

**5. Facility Database (Basic)**
- When a driver checks in, facility is logged with location
- Basic detention history per facility: average wait time, % of visits with detention
- Displayed to driver before accepting a load (facility reputation score)
- Crowdsourced: every app user contributes, every user benefits

#### Dispatcher Web Dashboard

**6. Fleet Real-Time View**
- Map showing all enrolled drivers with current status: En Route / At Facility / Detained / Off Duty
- Detention clock visible for any driver currently delayed beyond free time
- Clickable driver card showing current load, facility, elapsed detention time

**7. Detention Alert & Claim Management**
- Push notification to dispatcher when a driver's detention clock starts
- Dashboard table of open detention events: driver, facility, elapsed time, estimated recovery value
- One-click invoice generation and send from the dispatcher side for any open event
- Claims tracking: Sent / Paid / Disputed by load and by broker

**8. Carrier Contact Book**
- Structured contact records for each owner-operator under management
- Fields: name, truck number, DOT number, phone, email, preferred broker list, rate structure
- Load history per carrier with commission summary

**9. Commission Auto-Calculation**
- Dispatcher enters their commission rate per carrier (flat $/load or % of gross)
- When a driver marks a load complete, system calculates dispatcher commission
- Monthly dispatcher invoice auto-generated (dispatcher bills their carrier clients)
- Commission history exportable to CSV for accounting

**10. Rate Confirmation Storage**
- Dispatcher can email rate confirmations to a dedicated intake email address; they are auto-attached to the corresponding load record
- Or upload PDF directly to load record
- Searchable by load number, broker, carrier, or date

### Out of Scope for MVP

The following features are explicitly deferred to post-MVP releases. Scope creep into these areas would delay launch without meaningfully improving the core value proposition:

| Feature | Reason Deferred |
|---------|----------------|
| ELD / telematics API integration (Samsara, Motive, KeepTruckin) | High integration complexity; GPS geofencing covers the use case for MVP |
| Load board integration (DAT, Truckstop.com) | Requires partnerships and API access; adds months to dev timeline |
| Broker-facing dispute portal | Brokers are not customers in MVP; this is a V2 B2B expansion |
| Automated broker payment collection / factoring | Financial product; regulatory complexity; out of scope for V1 |
| Advanced analytics / BI dashboard | Valuable post-PMF; not needed for initial value delivery |
| Multi-language support (Spanish) | Mexico/cross-border market is Phase 2 |
| Accessorial charge tracking beyond detention (lumper, layover, TONU) | Adjacent opportunity; expand after detention PMF confirmed |
| White-label / reseller portal | Dispatcher resale channel is Phase 2 |
| Windows / desktop driver app | iOS + Android covers 98%+ of trucking workforce |

### MVP Success Criteria

The MVP is considered successful and ready for scaling investment when ALL of the following gates are met:

1. **LTD Validation Gate:** 500 LTD buyers within 60 days of AppSumo launch (indicating willingness-to-pay from the target segment)
2. **Retention Gate:** 60%+ of LTD buyers still actively logging detention events at 30 days post-onboarding
3. **Recovery Gate:** Platform median detention collection rate ≥ 60% (vs. industry baseline of <50%)
4. **NPS Gate:** NPS ≥ 40 from active users at 90 days
5. **Dispatcher Flywheel Gate:** At least 25 dispatcher accounts with ≥ 3 enrolled drivers each — confirming the dispatcher-as-distribution hypothesis

If all 5 gates are met, proceed to Series A fundraising conversation or aggressive content/paid marketing ramp. If 3 of 5 are met, investigate the failing dimensions and iterate. If fewer than 3 are met, conduct structured user interviews before further investment.

### Future Vision

FreightDetain's long-term opportunity extends well beyond detention pay into the broader problem of **freight billing accuracy** — a multi-billion-dollar space where carriers and dispatchers systematically under-collect across all accessorial charges.

**Phase 2 (Months 12–24): Accessorial Charge Expansion**
- Lumper fee tracking (loading/unloading labor charges, typically $50–300/event)
- Layover pay tracking (mandatory 24-hour+ detention scenarios)
- TONU (Truck Order Not Used) — auto-document and claim when a load is cancelled at origin
- This transforms FreightDetain from a detention tool into the **complete accessorial management platform** for small carriers

**Phase 3 (Months 18–36): Data and Intelligence Layer**
- Predictive facility scoring: before accepting a load, see the detention risk score for that facility based on aggregated user data
- Integration with DAT and Truckstop.com load boards — facility detention data displayed at point of load acceptance
- Broker reputation scores: which brokers pay detention claims vs. routinely dispute
- Sell anonymized, aggregated detention intelligence to insurance companies, factoring firms, and logistics analysts (data revenue stream)

**Phase 4 (Months 24–48): Platform Expansion**
- Freight factoring integration — FreightDetain invoices auto-submitted to factoring companies (OTR Capital, RTS Financial, Triumph) for same-day advance
- Cross-border/Mexico market: Spanish-language app + USMCA freight documentation module
- Broker-side detention management: shippers who want to reduce detention liability buy FreightDetain to track dwell times proactively
- Full dispatcher-to-carrier marketplace: dispatchers can recruit qualified owner-operator clients through the platform

**Long-Term (5+ Years): The Freight Documentation Layer**
FreightDetain becomes the standard documentation infrastructure for the small carrier segment — the place where every detention event, lumper receipt, rate confirmation, and accessorial charge is recorded, verified, and settled. This positions the company as an acquisition target for TMS platforms (McLeod, Trimble), load boards (DAT, Truckstop), or factoring companies who want to own the small carrier documentation layer.

---

## Competitive Positioning Summary

**Tagline:** "One tap to start. GPS proof that gets paid."

**Positioning Statement:** FreightDetain is the only detention tracking and dispatcher operations platform purpose-built for small carriers (3–15 trucks) and the independent dispatchers who serve them. Unlike owner-operator apps that lack fleet visibility, or enterprise TMS platforms that cost $15,000+/year, FreightDetain delivers GPS-verified detention invoices and a complete dispatcher dashboard at $29/truck/month — a price point where a single recovered detention event pays for itself.

**Go-to-Market Priority:**
1. Target independent freight dispatchers via Facebook dispatcher groups (10K–50K member communities) — each dispatcher conversion drives 5–15 driver installs
2. AppSumo LTD launch for owner-operator segment validation ($79/$149/$249 tiers)
3. Content engine: "How to recover detention pay" SEO + YouTube content targeting r/Truckers, r/TruckDrivers traffic
4. Community seeding in TruckersReport (800K+ members) and major Facebook trucking groups

---

**Product Brief Status:** Complete
**Date:** 2026-05-21
**Next Workflow:** `create-prd` — Product Requirements Document
