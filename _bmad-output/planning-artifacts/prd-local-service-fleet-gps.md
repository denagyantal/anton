---
stepsCompleted: [step-01-init, step-02-discovery, step-02b-vision, step-02c-executive-summary, step-03-success, step-04-journeys, step-05-domain, step-06-innovation, step-07-project-type, step-08-scoping, step-09-functional, step-10-nonfunctional, step-11-polish]
inputDocuments:
  - ideas/shortlisted/local-service-fleet-gps.md
  - _bmad-output/planning-artifacts/market-research-local-service-fleet-gps.md
  - _bmad-output/planning-artifacts/product-brief-local-service-fleet-gps.md
workflowType: prd
project_name: local-service-fleet-gps
product_name: FleetLocal
user_name: Root
date: 2026-09-25
classification:
  projectType: saas_b2b
  domain: fleet_management
  complexity: medium
  projectContext: greenfield
---

# Product Requirements Document — FleetLocal

**Author:** Root (automated run)
**Date:** 2026-09-25
**Product:** FleetLocal — Local Service Fleet GPS
**Project:** local-service-fleet-gps

---

## Executive Summary

FleetLocal is a GPS fleet management SaaS platform built for HVAC, plumbing, landscaping, and cleaning businesses operating 3–25 vehicles. It targets the intersection of three documented market failures: enterprise fleet platforms (Samsara at $27–$33/vehicle/month, Motive at $25–$50/vehicle/month) that sell trucking compliance software to ELD-exempt local fleets under predatory multi-year contracts; basic GPS trackers (Spytec at $8.95–$14.95/vehicle/month) with no FSM integration or maintenance features; and an FSM-integration gap where no GPS product at or below $15/vehicle connects natively to Jobber or HousecallPro (HCP).

FleetLocal occupies this unoccupied quadrant: **$15/vehicle/month, month-to-month, native Jobber + HCP integration, maintenance scheduling, digital DVIR, and customer ETA SMS — no ELD compliance features, no minimum contract, no exit fees.**

Target addressable market: 50,000–100,000 US local service businesses. At 1% penetration (500 customers × 8 vehicles average), FleetLocal reaches $720K ARR — achievable within 12–18 months for a focused bootstrapped launch.

**Primary users:** HVAC, plumbing, landscaping, and cleaning business owners and operations managers managing 3–25 service vehicles on Jobber or HousecallPro. **Secondary users:** service technicians/drivers who interact via mobile app only.

### What Makes This Special

Four capabilities no single competitor combines at this price point:

1. **Price + contract combination:** $15/vehicle/month with month-to-month billing directly addresses the #1 complaint across Samsara/Motive reviews (Samsara BBB rating: 1.17/5) — predatory multi-year auto-renewing contracts. No competitor occupies both the $15 price point AND month-to-month terms.

2. **Dual FSM integration:** Native Jobber + HousecallPro OAuth integrations auto-log GPS arrival/departure timestamps into FSM job records, eliminating the primary operational friction — toggling between GPS and FSM apps during dispatch. Jobber and HCP together serve the majority of the 3–25 vehicle SMB service fleet market.

3. **ELD-exempt product design:** Local service fleets operating within 150 air miles of their home base are legally exempt from ELD requirements under 49 CFR 395.1(e)(1). FleetLocal contains zero ELD, Hours-of-Service, or DOT compliance features — the legally correct, purpose-built product for this segment, not a stripped-down trucking platform.

4. **Value-based stickiness without lock-in:** GPS arrival data embedded in Jobber/HCP job records creates switching costs through operational value (historical arrival data becomes a business asset), not contractual coercion. Customers stay because the product is embedded in their daily workflow.

## Project Classification

- **Project Type:** SaaS B2B with mobile app component
- **Domain:** Fleet management / Field service operations
- **Complexity:** Medium — third-party OAuth integrations (Jobber, HCP), mobile GPS, Stripe billing; Phase 2 adds cellular IoT (OBD-II hardware)
- **Project Context:** Greenfield

---

## Success Criteria

### User Success

- **Integration activation:** ≥80% of paying customers activate Jobber or HCP OAuth integration within 7 days of signup, as measured by OAuth completion events in product analytics
- **"Aha!" moment delivery:** 100% of integrated customers observe at least one auto-logged GPS arrival timestamp in their FSM job record within 48 hours of integration activation
- **Daily active tracking:** ≥90% of subscribed vehicles show GPS activity on workdays, as measured by daily ping rate per subscription
- **Auto-arrival accuracy:** ≥98% of job-site arrivals generate a correct arrival timestamp in the linked FSM job record without manual correction, as measured by geofence success rate and FSM event delivery logs
- **Maintenance alert action rate:** ≥60% of mileage threshold alerts result in a service-scheduled event logged within 14 days, as measured by alert-to-maintenance-log rate
- **NPS:** ≥50 at 90 days post-onboarding, measured by automated in-app survey

### Business Success

| Metric | 6-Month Target | 12-Month Target |
|--------|---------------|-----------------|
| Vehicles under management | 400+ | 2,000+ |
| MRR | $6,000+ | $30,000+ |
| ARR run-rate | $72,000+ | $360,000+ |
| Paying customers | 50+ | 250+ |
| Jobber App Marketplace listing | Live | Live |
| HCP integration live | — | Live (month 9) |
| Customer Acquisition Cost (CAC) | < $200 | < $150 |
| Average customer LTV | — | > $1,800 |
| LTV:CAC ratio | — | > 12:1 |
| % new customers from Samsara/Motive | — | > 40% |

### Technical Success

- **Integration uptime:** Jobber and HCP OAuth integrations maintain ≥99.5% event delivery uptime (integration downtime = unlogged arrival events = immediate churn risk)
- **GPS data reliability:** ≤0.5% of location events lost during normal cellular operation
- **Mobile app stability:** ≥99.5% crash-free sessions on iOS 15+ and Android 10+
- **OBD-II device failure rate (Phase 2):** ≤2% of shipped OBD-II devices fail within 90 days of activation

### Measurable Outcomes

**Beta success gate — Month 3 go/no-go for Phase 2 investment:**

| Criterion | Target |
|-----------|--------|
| 60-day beta customer retention | 15/20 (75%) |
| Jobber integration activation rate | ≥80% of beta customers |
| Auto-arrival logging accuracy | ≥95% |
| Trial-to-paid conversion rate | ≥80% |
| Unprompted G2/Capterra reviews | ≥3 |
| Beta NPS | ≥40 |

**Decision rule:** If <50% of beta customers retain at 60 days, identify churn root cause before Phase 2 hardware investment. Do not add OBD-II logistics without software validation.

---

## Product Scope

### MVP — Minimum Viable Product (Phase 1, Weeks 1–8)

Software-only launch using phone-based GPS. Zero hardware logistics. Validates the core thesis: Jobber integration + $15/vehicle/month + month-to-month converts and retains customers.

**Must-have capabilities:**
- Driver mobile app (iOS + Android): shift tracking, DVIR checklist with photos, push notifications
- Owner/manager web dashboard: live fleet map, vehicle/driver management, 30-day GPS history
- Jobber OAuth integration: active job import, auto-log arrival/departure timestamps to job records
- Maintenance scheduling: manual odometer entry, configurable mileage-based alerts (push + email)
- Stripe billing: $15/vehicle/month, monthly, no contracts, 14-day free trial (no card required), self-serve cancellation

**Explicitly out of scope for Phase 1:** OBD-II hardware, HousecallPro integration, customer ETA SMS, route optimization, fuel card integration, driver behavior scoring, ELD/HOS features, ServiceTitan integration, insurance telematics, geofence-based time clock/payroll

### Growth Features — Phase 2 (Months 4–6)

Contingent on beta success gate passage.

- **OBD-II hardware ($45 add-on):** plug-and-play device; vehicle-level tracking independent of driver phone; automatic odometer reading; basic engine diagnostics (battery voltage, check engine light)
- **HousecallPro OAuth integration:** arrival/departure auto-logging; vehicle location on HCP dispatch board
- **Customer ETA SMS:** automated text on tech departure with estimated arrival time; Twilio integration; TCPA-compliant opt-in flow

### Vision — Phase 3 (Year 2+)

- Fuel card integration (WEX, Comdata, EFS): idle time + fuel spend analysis per vehicle and driver
- Monthly driver performance summary (speed events, idle time) — no real-time alert noise
- Predictive maintenance ML from OBD-II data patterns across fleet
- ServiceTitan integration: expand to mid-market service businesses
- Insurance telematics: usage-based premium discount qualification via partner insurers
- White-label licensing to Jobber, HCP, or FSM platform acquirer

---

## User Journeys

### Journey 1: Marcus — HVAC Owner Switching from Samsara

**Persona:** Marcus, 42, 12-truck HVAC fleet in Dallas. Pays $385/month to Samsara on a 3-year contract (auto-renewed without notice). Two screens open during dispatch: Samsara and Jobber. Contract expires Q3 2026.

**Discovery:** Marcus searches "cancel Samsara contract HVAC fleet" and finds FleetLocal via SEO. He reads the pricing page in 3 seconds: $15/vehicle/month, no contract. He confirms Jobber integration. He signs up for the 14-day free trial — no credit card required.

**Onboarding:** Marcus sends driver app install instructions to 12 techs via text. Within 24 hours, 10 of 12 have installed. He opens the web dashboard and sees 10 trucks on the live map. His wife Sarah (Jobber admin) clicks "Connect Jobber," completes OAuth authorization in under 3 minutes, and confirms the integration is active. FleetLocal imports all active Jobber jobs.

**"Aha!" moment:** The next morning, technician Tony departs for a 9 AM HVAC call. At 9:04 AM, Tony's truck enters the 300-foot geofence at the customer address. FleetLocal auto-logs "Arrived: 9:04 AM" in the Jobber job record. Marcus opens the Jobber job and sees the timestamp without taking any action. He calls Sarah: "Did you see that? I didn't touch a thing."

**Resolution:** Three weeks in, FleetLocal sends maintenance alerts for 3 trucks approaching 5,000-mile oil change thresholds. Marcus schedules them proactively — before any tech mentions it. Month 1 bill: $180 for 12 vehicles vs. $385 on Samsara. He posts in r/HVAC: "Switched from Samsara. $180 vs $385/month and it connects to Jobber automatically."

**Journey requirements:** No-card free trial; driver app install flow; Jobber OAuth connection; geofence arrival auto-logging; odometer-based maintenance alerts; dashboard with live map.

---

### Journey 2: Janelle — Lawn Care Operator on HousecallPro (Phase 2)

**Persona:** Janelle, 35, 8 crew trucks in Phoenix on HousecallPro. Pays $160/month for HCP's built-in GPS (Force Fleet) with documented 2–3 minute refresh delay. A customer complaint about no ETA notification generated a 3-star Google review.

**Discovery:** Janelle posts in the HCP Facebook Group: "Anyone using GPS that works better with HCP?" A member recommends FleetLocal. She visits the site, confirms HCP integration, and adds her email to the Phase 2 HCP waitlist.

**Onboarding (Phase 2):** Janelle connects HCP via OAuth, adds 8 vehicles, installs the driver app on crew lead phones, and enables customer ETA SMS for all residential jobs.

**"Aha!" moment:** A crew departs for a Monday lawn job at 7:42 AM. The customer receives: "Hi Maria, Carlos is on the way and should arrive by 8:10 AM. — Janelle's Landscaping." Carlos arrives at 8:08 AM. The HCP job record shows "Arrived: 8:08 AM" automatically. Maria leaves a 5-star Google review.

**Resolution:** Janelle views all 8 trucks in real-time on the HCP dispatch board. Maintenance alerts catch 2 trucks needing oil changes before crew leads flag them. She cancels Force Fleet.

**Journey requirements:** HCP OAuth integration; real-time vehicle tracking (≤30 second refresh); customer ETA SMS on departure trigger; arrival/departure auto-logging to HCP job records; maintenance alerts.

---

### Journey 3: Dave — Plumbing Dispatcher, Daily Operations

**Persona:** Dave, 29, operations manager for a 15-van plumbing company on Jobber. Inherited Motive GPS from previous ops manager. Motive interface is built for trucking; Dave ignores the DOT compliance dashboards. Rick (owner) asks every morning: "Where are all the trucks?"

**Daily dispatch (happy path):** Dave opens the FleetLocal dashboard at 7:00 AM. The live map shows all 15 vans with driver names and current Jobber job status — no second app required. He dispatches Tech 7 to an emergency call; Tech 7's phone receives a push notification.

**Arrival confirmation:** At 10:30 AM, Rick asks if Truck 12 made it to the Westside job. Dave opens the Jobber job record — "Arrived: 10:24 AM" is already there. He confirms to Rick without calling the technician.

**Maintenance alert:** FleetLocal sends one push notification at 3 PM: "Van 9 — oil change threshold reached (5,120 miles)." Dave schedules the Saturday service and logs it in maintenance history. No other alerts that day.

**Resolution:** Single-screen dispatch. Accurate truck location on demand. One meaningful maintenance alert per vehicle — no alert fatigue (contrast: Motive generating "nonstop safety alerts that cry wolf").

**Journey requirements:** Live fleet map with Jobber job status overlay; arrival timestamps visible in Jobber job records; maintenance notifications routed to operations manager; single dashboard for all fleet visibility.

---

### Journey 4: Tony — Technician Driver, Mobile App

**Persona:** Tony, 26, HVAC tech, drives the same company truck daily. Marcus sends him: "Download FleetLocal app, instructions attached."

**First day:** Tony downloads the app, logs in with credentials Marcus created. He taps "Start Shift" at 6:45 AM. A DVIR checklist appears with 5 items. Tony taps through each in 45 seconds, photographing a scratch on the rear bumper. He taps "Complete" and starts his day.

**During the shift:** Tony receives a push notification: "Job dispatched: 412 Oak St, HVAC service." He navigates with his preferred maps app. When he enters the customer's driveway, FleetLocal detects the arrival silently. No app interaction required.

**End of day:** Tony taps "End Shift." Tracking stops. Tony has not interacted with the fleet dashboard, billing, or maintenance sections — the app is invisible to him outside of shift start/end and DVIR.

**Journey requirements:** Simple driver app install; single-tap shift start/end; DVIR checklist with photo capture in ≤2 minutes; silent background GPS tracking; job dispatch push notifications; no access to fleet owner data.

---

### Journey 5: Sarah — Jobber Admin, Integration Setup

**Persona:** Sarah handles billing and Jobber admin for Marcus's HVAC company. Marcus asks her to "connect the GPS to Jobber."

**Integration setup:** Sarah logs into FleetLocal with her admin account. She navigates to Settings → Integrations → Jobber → Connect. She is redirected to Jobber's OAuth authorization page displaying exactly what FleetLocal is requesting: read job addresses, write job notes. She clicks "Authorize" and is redirected to FleetLocal showing "Jobber Connected — 47 active jobs imported."

**Verification:** Sarah dispatches a test job to herself, drives to trigger the geofence, refreshes the Jobber job record, and sees the "Arrived: [timestamp]" note. She texts Marcus: "It's working."

**Ongoing use:** Sarah receives a monthly maintenance alert email digest (vehicle, alert type, date). She reviews it in 2 minutes. She has no other interaction with FleetLocal — the integration runs silently in the background.

**Journey requirements:** OAuth flow with explicit permission disclosure; admin integration settings; test verification capability; maintenance alert email digest for non-daily-active admin users.

---

### Journey Requirements Summary

| Journey | Core Capabilities Required |
|---------|---------------------------|
| Marcus (HVAC owner) | Free trial no-card; driver app; Jobber OAuth; geofence arrival/departure logging; maintenance alerts; live dashboard |
| Janelle (Lawn care) | HCP OAuth; ≤30s tracking refresh; ETA SMS; HCP arrival logging; maintenance scheduling |
| Dave (Dispatcher) | Live map + Jobber job overlay; single-screen dispatch; maintenance notifications |
| Tony (Technician) | Driver app; DVIR with photos; background GPS; push notifications; no dashboard access |
| Sarah (Jobber admin) | OAuth setup with permission transparency; integration verification; maintenance email digest |

---

## Domain-Specific Requirements

### Data Privacy (GDPR / CCPA)

- Driver GPS location data constitutes personal data under GDPR Article 4(1) (EU drivers) and CCPA (California drivers); fleet owners are data controllers for their drivers' location data
- FleetLocal provides fleet owners with a compliant Data Processing Agreement (DPA) template for driver consent documentation
- Driver location data retained for 30 days maximum; fleet owners can request vehicle data deletion via dashboard
- Privacy policy and driver-facing disclosure must clearly state that GPS location is tracked during work shifts

### SMS Compliance (TCPA)

- Customer ETA SMS requires prior express written consent from the end customer (Phase 2)
- FleetLocal provides fleet owners with compliant opt-in language and template for customer consent collection at job booking
- All outbound customer SMS must support STOP reply for opt-out; opt-outs recorded and honored within 24 hours
- Outbound SMS sent via TCPA-compliant CPaaS provider (Twilio or equivalent) with US 10DLC or toll-free number registration

### Payment Security (PCI-DSS)

- Payment card data handled exclusively by Stripe; FleetLocal stores zero cardholder data
- Stripe integration maintains PCI-DSS compliance via Stripe's Level 1 Service Provider certification
- No credit card data traverses FleetLocal application servers or is logged anywhere in the system

### OBD-II Hardware Compliance (Phase 2)

- OBD-II devices must comply with FCC Part 15 (unintentional radiator) for US market sale
- Cellular-connected OBD-II devices require active SIM management and carrier data agreements
- Hardware sold with 90-day replacement warranty; return/RMA process required before Phase 2 launch

---

## Innovation & Novel Patterns

### Detected Innovation Areas

**Unoccupied market quadrant:** FleetLocal's $15/vehicle/month + month-to-month + Jobber + HCP + no ELD position cannot be replicated by enterprise vendors without destroying their pricing model, and cannot be replicated by budget GPS vendors without building FSM integrations they have no incentive to build. This quadrant is structurally defensible.

**"Samsara Refugee" acquisition channel:** Samsara's documented legal exposure (BBB 1.17/5, auto-renewal lawsuits, FTC complaint pattern) creates an organic pre-qualified buyer segment — operators actively searching for Samsara/Motive exits. The "Contract End Date" calculator lead magnet (email capture + timed nurture sequence) is a channel no competitor has deployed at scale.

**Value stickiness without contractual lock-in:** GPS arrival data embedded in Jobber/HCP job records becomes a business asset (historical dispatch audit trail). Switching costs accumulate through value creation, not exit fees — the inverse of the enterprise model and a deliberate product positioning choice.

### Market Context

- Trackem GPS launched Jobber integration in August 2026 at $21.95/vehicle/month — confirms FSM-GPS integration demand and creates a price anchor that makes $15 compelling
- Force Fleet (Mojio, powering HCP's built-in GPS): documented HCP refresh delays; no dedicated "service fleet" brand positioning; limited maintenance features
- Samsara/Motive show no movement toward month-to-month pricing or price reduction; their revenue model depends on multi-year contracts

### Validation Approach

- 20-customer beta cohort (Jobber Facebook Group + Reddit recruitment): validates integration activation rate and 60-day retention before Phase 2 hardware investment
- "Contract End Date" email list: captures locked-in prospects now; validates forward pipeline size 6–24 months out

### Risk Mitigation

| Risk | Mitigation |
|------|-----------|
| Jobber builds native GPS (Jobber launched route optimization in 2025; GPS is adjacent) | Secure Marketplace listing + G2/Capterra review volume before Jobber acts; OBD-II hardware is outside Jobber's product scope |
| Force Fleet drops to $9.99 | Build feature moat: maintenance scheduling + DVIR + ETA SMS not in Force Fleet's current feature set |
| Trackem GPS matches $15 price | HCP integration + hardware option differentiates; brand positioning as "local service fleet" vs. generic GPS |

---

## SaaS B2B Specific Requirements

### Multi-Tenancy

- Each fleet owner account is a fully isolated tenant; no GPS, vehicle, driver, or maintenance data is accessible across tenant boundaries
- Tenant isolation enforced at database query level via tenant_id scoping on all tables containing vehicle, driver, GPS event, maintenance, and integration records
- Tenant ID injected at the application layer before all data queries; no raw SQL or query builder bypasses permitted

### Role-Based Access Control

| Role | Capabilities |
|------|-------------|
| Fleet Owner / Admin | Full access: vehicles, drivers, live map, GPS history, settings, billing, integrations, maintenance, DVIR records |
| Operations Manager | Live map, vehicle history, dispatch view, maintenance alerts; no billing, no account settings, no integration configuration |
| Driver | Mobile app only: shift start/end, DVIR submission, push notifications; no web dashboard access |

### Subscription & Billing Model

- Per-vehicle-per-month pricing via Stripe Subscriptions; subscription items updated dynamically on vehicle add/remove
- Vehicles added mid-cycle: billed pro-rata from addition date
- Vehicles removed mid-cycle: credited to next billing cycle
- No minimum vehicle count; no annual commitment; no early termination fees
- 14-day free trial: no credit card required; full feature access; limit 5 vehicles

### Integrations Architecture

- **Jobber:** OAuth 2.0 authorization code flow; pull active job addresses and IDs on schedule; push arrival/departure events as job timeline notes via Jobber API
- **HousecallPro (Phase 2):** OAuth 2.0; same arrival/departure push pattern as Jobber; vehicle location pull for dispatch board overlay
- **Stripe:** Subscription management, usage-based billing adjustments, webhook-based billing event processing
- **SMS provider — Twilio (Phase 2):** Outbound customer ETA notifications; 10DLC registered sender; STOP opt-out handling
- **OBD-II device fleet (Phase 2):** Cellular SIM management via device vendor API; OBD-II data ingestion via MQTT or vendor webhook

### Jobber App Marketplace Requirements

- FleetLocal must comply with Jobber Partner Program requirements for App Marketplace listing (target: live by Month 3)
- Integration must pass Jobber's technical review: OAuth security, data handling, API rate limit compliance
- Marketplace listing requires: app description, integration screenshots, privacy policy URL, support contact, and OAuth permission scope documentation

---

## Project Scoping & Phased Development

### MVP Strategy & Philosophy

**MVP Approach:** Problem-solving MVP — validate that Jobber integration + $15/vehicle/month + month-to-month converts and retains the target customer before investing in OBD-II hardware logistics

**Phase 1 resource requirements:** 1–2 full-stack engineers (web + React Native mobile); Stripe account; Jobber Partner API access; AWS/GCP/Supabase infrastructure; no hardware vendor relationships needed

### MVP Feature Set (Phase 1)

**Core user journeys supported:** Marcus (HVAC owner onboarding + Jobber integration), Dave (daily dispatch operations), Tony (driver mobile app), Sarah (Jobber admin integration setup)

**Must-have capabilities for Phase 1:**
1. Driver mobile app (iOS + Android): shift start/end, background GPS, DVIR with photos, job dispatch push notifications
2. Owner web dashboard: live fleet map (≤30-second refresh), fleet list view, 30-day GPS history, vehicle/driver management
3. Jobber OAuth integration: active job import, arrival/departure auto-logging to job records
4. Maintenance scheduling: manual odometer entry, configurable mileage reminders (push + email), maintenance history log
5. Stripe billing: $15/vehicle/month, monthly, add/remove vehicles, self-serve cancellation, 14-day free trial (no card)

### Post-MVP Roadmap

**Phase 2 — Hardware + HCP (Months 4–6, post-beta gate):**
- OBD-II hardware ($45 add-on): vehicle tracking independent of driver phone; auto odometer reading; engine diagnostics
- HousecallPro OAuth integration: same arrival/departure flow as Jobber; HCP dispatch board location overlay
- Customer ETA SMS: outbound text on tech departure; TCPA-compliant consent flow

**Phase 3 — Fleet Intelligence (Year 2+):**
- Fuel card integration; driver performance monthly summary; predictive maintenance ML; ServiceTitan integration; insurance telematics; white-label licensing

### Risk Mitigation Strategy

**Technical risks:**
- Jobber API rate limits (500 req/min): implement event queuing with exponential backoff; alert at 70% utilization
- Android background GPS battery drain: configurable tracking intervals; battery impact communicated in driver onboarding
- OBD-II compatibility in pre-2008 vehicles (Phase 2): compatibility test with 50+ vehicle types before Phase 2 launch; vehicle compatibility checker in dashboard

**Market risks:**
- Samsara/Motive contract lock-in limits immediate TAM: capture pipeline via "Contract End Date" calculator with email nurture timed to contract end
- Jobber builds native GPS: Marketplace listing + review volume are the moat; OBD-II hardware is outside Jobber's product scope

**Resource risks:**
- Single engineer Phase 1: use managed services (Supabase or Firebase for GPS event storage, Stripe for billing, Twilio for SMS) to minimize custom infrastructure build

---

## Functional Requirements

### Vehicle & Driver Tracking

- FR1: Fleet owners can view the real-time location of all fleet vehicles simultaneously on a live map, updated at ≤30-second intervals
- FR2: Fleet owners can view each vehicle's assigned driver name, active job name, and last-seen timestamp from the fleet list view
- FR3: Fleet owners can access a 30-day GPS location history for any vehicle, with the linked FSM job overlaid on the route timeline
- FR4: Drivers can start and end location-sharing shifts from the mobile app with a single tap
- FR5: The system detects vehicle arrival within a configurable geofence radius (default 300 feet) at a job site address pulled from the linked FSM system
- FR6: The system detects vehicle departure from a job site geofence and records the departure timestamp

### Jobber Integration

- FR7: Fleet owners can connect their Jobber account via OAuth 2.0 without manual API key entry
- FR8: The system imports all active Jobber job addresses and job IDs upon integration activation and refreshes on schedule
- FR9: The system automatically logs a GPS arrival timestamp as a note on the corresponding Jobber job record when a vehicle triggers the job site geofence
- FR10: The system automatically logs a departure timestamp on the Jobber job record when a vehicle exits the job site geofence
- FR11: Fleet owners can disconnect the Jobber integration from dashboard settings at any time

### HousecallPro Integration (Phase 2)

- FR12: Fleet owners can connect their HousecallPro account via OAuth 2.0 without manual API key entry
- FR13: The system automatically logs GPS arrival timestamps on the corresponding HCP job record when a vehicle triggers the job site geofence
- FR14: The system automatically logs departure timestamps on HCP job records when a vehicle exits the geofence
- FR15: Fleet owners can view vehicle locations overlaid on the HCP dispatch board

### Maintenance Management

- FR16: Fleet owners can manually enter and update current odometer readings for each vehicle
- FR17: Fleet owners can configure up to 5 mileage-based maintenance reminder types per vehicle (e.g., oil change at 5,000-mile intervals, tire rotation at 7,500-mile intervals)
- FR18: The system sends a push notification and email to the fleet owner when a vehicle's recorded mileage reaches a configured reminder threshold
- FR19: Fleet owners can log a completed maintenance event (type, date, odometer reading, notes) per vehicle
- FR20: Fleet owners can view a complete maintenance history log per vehicle sorted by date
- FR21: The system automatically reads vehicle odometer data from an OBD-II device and updates the vehicle mileage record without manual entry (Phase 2)

### Digital Vehicle Inspection (DVIR)

- FR22: Drivers can complete a pre-trip vehicle inspection checklist from the mobile app covering 5 standard items: exterior lights, tires, mirrors, visible fluid leaks, general body condition
- FR23: Drivers can attach a photo to any DVIR checklist item to document damage or defects
- FR24: Fleet owners can view all submitted DVIRs per vehicle with timestamps, item results, and attached photos
- FR25: DVIR submissions are stored per vehicle for a minimum of 30 days

### Customer ETA SMS (Phase 2)

- FR26: Fleet owners can enable automated outbound SMS notifications to job site customers when a driver departs for the job
- FR27: The system sends an SMS to the customer containing the technician name and estimated arrival time when the driver's vehicle departs the origin geofence
- FR28: Fleet owners can enable or disable customer ETA SMS on a per-job-type basis
- FR29: Customers can reply STOP to any ETA SMS to opt out; the system records the opt-out and suppresses future messages to that phone number

### Driver Mobile App

- FR30: Drivers can log in to the FleetLocal mobile app using credentials provisioned by the fleet owner
- FR31: Drivers can receive push notifications for new job dispatch assignments
- FR32: The mobile app transmits GPS location to the FleetLocal backend while a shift is active, operating in background mode
- FR33: The mobile app provides a DVIR checklist flow with integrated photo capture capability

### Fleet & Account Management

- FR34: Fleet owners can add vehicles to their account with a vehicle name, license plate, and driver assignment
- FR35: Fleet owners can remove vehicles from their account; removal is effective at the next billing cycle
- FR36: Fleet owners can create and deactivate driver accounts
- FR37: Fleet owners can assign an Operations Manager role to a team member, granting access to the live map, vehicle history, and maintenance alerts only
- FR38: Fleet owners can cancel their subscription from the dashboard at any time with no exit fees and no minimum cancellation notice period

### Subscription & Billing

- FR39: New users can start a 14-day free trial without entering credit card information, with access to all features for up to 5 vehicles
- FR40: At trial end, users subscribe via credit card; billing begins at $15/vehicle/month, monthly
- FR41: When vehicles are added or removed mid-cycle, billing adjusts automatically on the next monthly cycle
- FR42: Fleet owners can view the current billing period, vehicle count, monthly total, and full payment history from the billing dashboard
- FR43: Fleet owners can update their payment method from the billing dashboard without contacting support

### OBD-II Hardware (Phase 2)

- FR44: Fleet owners can order OBD-II tracking devices from the FleetLocal dashboard at $45 per device
- FR45: The system activates an OBD-II device and links it to a specified vehicle record when the device is plugged into the vehicle's OBD-II port
- FR46: The dashboard displays current battery voltage and check engine light status for all OBD-II-equipped vehicles

---

## Non-Functional Requirements

### Performance

- NFR1: The live fleet map shall refresh all vehicle positions within 30 seconds of a location event for the 99th percentile of events under normal operating load
- NFR2: The Jobber and HCP integrations shall deliver arrival and departure timestamps to the FSM system within 60 seconds of geofence trigger for the 99th percentile of events
- NFR3: The fleet owner web dashboard shall load the live map view within 3 seconds for fleets of up to 25 vehicles on a ≥25 Mbps connection, at the 95th percentile
- NFR4: The driver mobile app shall begin GPS location transmission within 10 seconds of shift start tap on iOS 15+ and Android 10+ devices

### Reliability

- NFR5: The platform shall achieve ≥99.5% uptime during business hours (6 AM–8 PM local time, Monday–Saturday) as measured by external uptime monitoring
- NFR6: Jobber and HCP integrations shall achieve ≥99% successful event delivery rate for arrival and departure timestamp pushes, as measured by integration event delivery logs
- NFR7: GPS location data shall be retained for a minimum of 30 days per vehicle
- NFR8: All FSM API calls shall implement retry logic with exponential backoff (minimum 3 retries); no arrival or departure event shall be permanently lost due to a transient FSM API error

### Security

- NFR9: All data in transit between clients (mobile app, web dashboard) and FleetLocal servers shall use TLS 1.2 or higher
- NFR10: All data at rest — GPS events, vehicle records, maintenance records, driver data — shall be encrypted using AES-256
- NFR11: OAuth access tokens and refresh tokens for Jobber and HCP integrations shall be stored encrypted and shall not appear in API responses, application logs, or error messages
- NFR12: Tenant isolation shall be enforced at the database query level; fleet owner accounts shall be unable to access data belonging to other tenant accounts under any circumstances
- NFR13: Fleet owner and Operations Manager accounts shall support multi-factor authentication (TOTP or SMS-based)
- NFR14: Driver location data shall be accessible only to the fleet owner and Operations Manager of the driver's assigned fleet account

### Scalability

- NFR15: The platform shall support up to 10,000 simultaneously tracked vehicles without degradation in map refresh rates below NFR1 targets
- NFR16: The GPS event ingestion pipeline shall support horizontal scale-out to handle 10x growth from launch baseline without architectural changes

### Integration

- NFR17: Jobber OAuth integration shall comply with Jobber's API rate limits (current: 500 requests/minute); the system shall alert when API utilization exceeds 70% of limit
- NFR18: HCP integration shall comply with HousecallPro's published API rate limits with equivalent monitoring to NFR17
- NFR19: OBD-II devices (Phase 2) shall be compatible with all vehicles equipped with a standard OBD-II port manufactured in 1996 or later
- NFR20: Outbound SMS (Phase 2) shall use a US-registered 10DLC or toll-free number complying with TCPA carrier registration requirements

### Mobile

- NFR21: The driver mobile app shall function on iOS 15.0+ and Android 10.0+
- NFR22: Background GPS tracking shall remain active on supported iOS and Android versions while the app is in background state, subject to OS power management policies
- NFR23: The driver mobile app installation package shall not exceed 150 MB on either iOS or Android

---

**PRD Completion Date:** 2026-09-25
**Author:** Root (automated run)
**Status:** Complete — ready for Architecture phase
**Next step:** `/bmad-bmm-create-architecture`
