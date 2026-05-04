---
stepsCompleted: [step-01-init, step-02-discovery, step-02b-vision, step-02c-executive-summary, step-03-success, step-04-journeys, step-05-domain, step-06-innovation, step-07-project-type, step-08-scoping, step-09-functional, step-10-nonfunctional, step-11-polish, step-12-complete]
inputDocuments:
  - ideas/shortlisted/multi-site-contractor-time-tracking.md
  - _bmad-output/planning-artifacts/market-research-multi-site-contractor-time-tracking.md
  - _bmad-output/planning-artifacts/product-brief-multi-site-contractor-time-tracking.md
workflowType: prd
classification:
  projectType: mobile_app
  domain: field_service_workforce_management
  complexity: medium
  projectContext: greenfield
product_name: multi-site-contractor-time-tracking
date: 2026-04-30
author: Root
---

# Product Requirements Document — Multi-Site Contractor Time Tracking

**Author:** Root
**Date:** 2026-04-30
**Status:** Complete

---

## Executive Summary

Small contractors with 5–50 field employees lose 2–3 hours every Friday reconciling timesheets across 3–10 active job sites. Every competitor in the category either ignores GPS job-site awareness entirely (Toggl, Clockify, Jibble) or gates it behind expensive base fees and complex platforms built for enterprise (ClockShark $40 base, Workyard $50 base, Hubstaff GPS add-on). The result is a persistent operational crisis: manual timesheet chaos, inaccurate job-cost data, payroll disputes, and escalating wage-theft liability as DOL enforcement intensifies.

This product is a mobile-first GPS time tracking app that solves the single most underserved feature in the category: **automatic job-site detection**. When an employee arrives at a geofenced job site, their phone prompts them to clock in to the correct job — one tap, no list to scroll, no job to select. Hours are tagged to the right job automatically. The owner approves the day's timesheets with one tap from their phone each evening. Payroll exports directly to QuickBooks format without accountant cleanup.

**Market opportunity:** 200,000–280,000 US businesses in the 5–50 field employee segment; 60–70% still on paper or spreadsheets. Zero competitors in the sub-$10/user/month tier offer GPS geofence-triggered automatic job-site clock-in. The pain is confirmed across six rounds of Reddit research as the #1 small business operational bottleneck with no adequate solution.

**Go-to-market:** Closed beta (20–50 contractors) → AppSumo LTD at $79–$149 targeting 500–1,000 units → Capterra/G2 review base → Reddit/YouTube organic → MRR conversion at $6/employee/month for teams scaling past 15 employees.

### What Makes This Special

**GPS geofence-triggered clock-in prompt** is the core differentiator and the only reason this product deserves to exist. Not one competitor in the sub-$10/user/month tier auto-prompts clock-in based on GPS arrival at a specific geofenced job site. This is not a marginal improvement — it eliminates the root causes of the entire "Friday chaos" problem: wrong job selected, forgot to clock in, and owner can't verify arrival times. The employee experience reduces to a single tap when prompted; the owner's experience reduces to approve/flag each row once per day.

The second differentiator is the **mobile-first owner approval flow**. Every competitor focuses on the employee clock-in UX and delivers the owner experience as a web dashboard afterthought. This product treats the owner's evening review — open the app, swipe approve on each row, tap export — as a first-class mobile workflow that must take under 5 minutes with no context switching to a laptop.

**No base fee, flat pricing** eliminates the single biggest objection to ClockShark, Workyard, and Connecteam. The LTD model converts price-sensitive contractors who run the math and say: "One month of ClockShark pays for three years of this."

## Project Classification

- **Project Type:** Mobile application (iOS + Android, cross-platform)
- **Domain:** Field service / field workforce management
- **Complexity:** Medium — GPS location services, offline data sync, payroll compliance considerations, low-end device support, ESL user populations
- **Project Context:** Greenfield — no existing codebase or incumbent system to integrate with

---

## Success Criteria

### User Success

**Primary metric — owner review time:** Average time for an owner to complete weekly payroll review (approve all timesheets + export CSV) drops to under 20 minutes, from a baseline of 2–3 hours. Measured via self-report at onboarding and 30-day check-in.

**GPS clock-in accuracy:** Over 95% of clock-in events correctly tagged to the intended job site, as validated by owner review. "Wrong job" corrections drop from an estimated 15–20% in manual systems to under 5% within 30 days of adoption.

**Field employee adoption:** Over 80% of added employees complete at least 3 clock-in/clock-out cycles in their first week without owner prompting. Less than 20% of employees require owner intervention (reminder, troubleshooting) in week 1.

**Payroll accuracy:** Zero payroll disputes attributable to time tracking system errors within 60 days of adoption. (Measured via in-app feedback and support ticket analysis.)

**Export success:** Over 90% of owners who attempt a weekly export complete it without contacting support, confirming QB-compatible CSV with no column remapping required.

**The owner "aha" moment:** Marcus opens the app at 6 PM on Friday. Twelve rows. All correctly tagged. All hours within expected range. Eighteen minutes to approve and export. He texts his wife: "Payroll is done." This moment — not feature completion — is the definition of user success.

### Business Success

**3 months (July 2026):**
- 50+ contractors actively tracking in closed beta production environments
- GPS accuracy validated at >95% across varied field conditions
- AppSumo pre-launch waitlist of 200+ verified contractors
- 25+ Capterra reviews at ≥4.5 stars

**6 months (October 2026):**
- 300+ active paying users (LTD + MRR combined)
- AppSumo LTD campaign complete: 500–800 units, $40,000–$120,000 gross revenue
- 60+ Capterra reviews; Capterra "Emerging Favorite" badge target
- Native QB-compatible CSV export confirmed error-free on ≥40% of Tier 2 active accounts

**12 months (April 2027):**
- 2,000+ employees actively tracked across all accounts
- $10,000+ MRR from growth-tier billing ($6/employee/month above 15)
- AppSumo badge and 150+ reviews; G2 category presence established

**18 months (October 2027):**
- $20,000+ MRR
- LTD base of 1,000+ accounts generating organic referrals
- Prevailing wage compliance module launched as premium tier ($19/month add-on)

### Technical Success

- GPS geofence trigger fires within 30 seconds of employee crossing geofence boundary in ≥95% of field test conditions
- Clock-in flow completes in ≤3 taps from push notification (no typing required for standard use)
- Offline clock-in syncs within 60 seconds of connectivity restoration
- App launches to ready state in under 2 seconds on a 3-year-old mid-range Android device (Motorola Moto G-series equivalent)
- Zero data loss for clock-in events during connectivity interruptions
- QuickBooks Online CSV import confirmed error-free with no column remapping required

### Measurable Outcomes (KPIs)

| KPI | Target | Method | Timeframe |
|-----|--------|--------|-----------|
| GPS geofence trigger accuracy | >95% | Owner review corrections | 30 days post-launch |
| Field employee adoption (week 1) | >80% clock in ≥3× in week 1 | In-app event tracking | Per onboarding cohort |
| Owner weekly export rate | >70% of active accounts export weekly | Export event tracking | 60 days post-onboarding |
| Time-to-first-geofence (onboarding) | <15 minutes from signup | Funnel analytics | Continuous |
| Net Promoter Score (owner) | >50 | In-app survey at 30d and 90d | Continuous |
| Monthly churn | <5% after first payroll cycle | Subscription analytics | Monthly |
| LTD refund rate (AppSumo) | <12% | AppSumo dashboard | Campaign |
| Support tickets per export event | <5% | Support ticket tagging | Monthly |
| MRR growth | $10K by month 12 | Revenue dashboard | Monthly |
| Capterra rating | ≥4.5 stars | Capterra monitoring | Continuous |

---

## Product Scope

### MVP — Minimum Viable Product (Phase 1)

The MVP delivers one complete workflow: **employee arrives → GPS auto-prompt → one-tap clock-in → works → leaves → GPS auto-prompt → one-tap clock-out → owner approves → exports to payroll**. Every feature either enables this workflow or protects its integrity.

**Core MVP capabilities:**
1. Job site creation (address → geofence, configurable 50–500m radius, unlimited sites)
2. GPS geofence-triggered push notification clock-in prompt (one tap to confirm)
3. Manual clock-in with job site list sorted by distance (offline fallback / poor signal)
4. GPS geofence-triggered push notification clock-out prompt (one tap to confirm)
5. Automatic provisional clock-out with owner flag (when geofence exit detected but no tap within 30 minutes)
6. Offline clock-in/out with local storage and automatic sync on connectivity restore
7. Mobile daily timesheet summary for owner (per-employee rows: name, job site, hours, status)
8. Owner one-tap daily approval (approve / flag) with lock on approved timesheets
9. Overtime threshold push alert (configurable daily/weekly thresholds, fires at 85% of threshold)
10. Weekly payroll export to CSV (QuickBooks Online column format, configurable date range)
11. Team management (invite employees via SMS/email, set pay rates, view live status)

**MVP gates (must satisfy before AppSumo launch):**
- GPS trigger accuracy >95% across: suburban residential, multi-unit commercial, rural, multi-story approaches
- 20+ contractors complete full week of active use in closed beta with >80% employee adoption in week 2
- Owner NPS ≥7 after first complete payroll cycle
- Zero critical GPS-triggered payroll errors in first 30 days of beta
- AppSumo pre-launch waitlist of 200+ verified contractor email opt-ins

### Growth Features (Phase 2 — Months 4–8 post-launch)

- Native QuickBooks Online API sync (OAuth-connected; pushes approved timesheets as QB time entries)
- Gusto direct payroll integration
- Job cost report (hours × rate per job site per period; exportable PDF)
- Web dashboard for owner review and export (same approval UX, larger screen)
- Foreman / crew lead approval tier (crew lead approves team, owner approves foreman summary)
- Sub-contractor / 1099 worker support (separate rate, separate export column)

### Vision (Phase 3 — Months 9–18)

- Prevailing wage / certified payroll (Form WH-347): auto-generated certified payroll reports for Davis-Bacon projects; $19/month add-on
- Multi-rate support (different pay rates per job site type: standard residential, prevailing wage commercial, union-rate)
- Scheduling integration (assign employees to job sites by day; geofence active only for assigned site)
- Equipment tracking (equipment hours attached to job sites alongside labor)
- State wage law alerts (California 8/80 rule, state-specific daily OT rules)
- Estimating integration: job cost actuals from completed jobs feed into bid templates

---

## User Journeys

### Journey 1: Marcus — The Landscaping Owner-Operator (Primary User, Success Path)

Marcus, 41, runs a 12-person landscaping crew across suburban Ohio. His crew leads text hours every Friday; half forget and he spends 2–3 hours chasing them down.

**Discovery:** Marcus posts in r/lawncare: "What do you use to track crew hours across different properties? Texts aren't working." A reply: "GPS auto-clock-in when they hit the property — game changer." He clicks the link.

**Onboarding (Day 1, 20 minutes):** Marcus downloads the app, creates his account, and adds his five most active job sites by entering the customer address. The app draws a 100m geofence on a map. He adjusts one to 150m (large commercial property). He invites three employees via SMS — they get a link, download the app, set up in 3 minutes.

**Employee experience (Day 2):** Marcus drives to the Riverside Corporate Park job. His phone vibrates: *"Tap to clock in: Riverside Corporate Park."* He taps once. GPS coordinates and timestamp recorded. He works. He leaves. *"Tap to clock out: Riverside Corporate Park."* One tap.

**Owner daily review (Day 2 evening, 5 minutes):** Marcus opens the app. Three rows: Rodriguez — Riverside Corporate — 6.5h — Pending. Chen — Oak Street Residence — 4.0h — Pending. Martinez — Oak Street Residence — 4.2h — Pending. He taps approve on each row.

**Friday payroll (Day 7, 18 minutes):** Marcus taps Export. Selects the week. CSV downloads. He emails it to his QuickBooks account. No calls to employees. No cross-referencing texts. His wife walks in; he's still at the kitchen table. "Payroll's done." She stares.

**Advocacy (Day 30):** He posts in r/lawncare: "For anyone who asked about time tracking last month — geofences auto-clock them in to the right job. No more Friday chaos."

**Requirements revealed:** GPS clock-in prompt, job site setup by address, SMS employee invite, mobile daily approval, weekly CSV export in QB format, quick onboarding.

---

### Journey 2: Marcus — Edge Case: Employee Forgets to Clock Out (Primary User, Error Recovery)

Rodriguez works at two sites in one day. He clocks in at Riverside Corporate (geofence trigger). He finishes and drives to the Oak Street job without tapping clock-out. Thirty minutes after his phone exits the Riverside geofence, the app auto-flags a provisional clock-out at Riverside and logs him entering Oak Street, prompting clock-in for Oak Street.

**Marcus's evening review:** Rodriguez row shows a yellow flag icon. Marcus taps it: "Auto-clock-out: Riverside Corporate, 12:47 PM (geofence exit — employee did not confirm)." Marcus compares against his own log: Rodriguez texted him "heading to Oak Street" at 12:45 PM. Marcus taps confirm on the provisional time. Row turns green.

**Requirements revealed:** Provisional auto-clock-out on geofence exit, flag queue for owner, owner ability to confirm or edit flagged entries, GPS timestamp and accuracy display on flagged rows.

---

### Journey 3: Sarah — The General Contractor (High-Value User, QB-Integration Path)

Sarah, 48, runs a 22-person GC business. Her office manager Maria spends 4–6 hours every other Friday transcribing paper timesheets into QuickBooks Online.

**First Friday export:** Sarah approves all 22 employees' timesheets on her iPhone during her commute (approvals were pending from the week). She taps Export → This Payroll Period → Send to Email. Maria receives the CSV. She opens QB Online → Import Time → drag and drop. Column headers match exactly. Zero cleanup. Maria finishes in 22 minutes.

**Ongoing impact:** Maria's 6-hour payroll reconciliation disappears. Sarah's prevailing wage jobs now have a GPS-verified audit trail for every employee-hour. A customer disputes a billing: Sarah pulls the GPS log for that day in 90 seconds, shows the foreman arrived at 7:02 AM and left at 3:18 PM.

**Requirements revealed:** 14-day payroll period export, email delivery of CSV, QuickBooks Online-compatible column format, GPS timestamp log accessible per employee per day, owner approval on mobile.

---

### Journey 4: David — The Cleaning Operator (High-Employee-Count User, Fraud Prevention Path)

David, 35, operates a 38-person cleaning company visiting 15–25 client locations daily. He suspects 10–15% of hours are fraudulent (buddy punching, ghost visits).

**Employee experience on cheap Android:** An employee finishes a medical office cleaning at 10:47 PM. As she exits the geofence, her Motorola Moto G receives: *"Tap to clock out: Parkway Medical Center."* One tap. The entry is GPS-stamped at 10:47 PM.

**Client dispute resolution:** A client calls: "Your crew didn't show up Thursday night." David opens the app, selects the client's site, selects Thursday. GPS log: employee arrived 9:03 PM, clocked out 10:47 PM. He screenshots it and emails the client. Dispute closed in 4 minutes.

**Buddy punching elimination:** GPS coordinates are recorded at every clock-in/out. The app flags any clock-in event where the employee's GPS position at confirmation time is more than 200m from the job site center. David reviews flagged events weekly.

**Requirements revealed:** GPS coordinate logging, distance-from-center flag on clock-in, site-specific history view, cheap Android device support, 24-hour operation (cleaning crews work nights), clock-in/out prompt works on locked-screen notifications.

---

### Journey 5: Field Employee — New Hire Onboarding (Secondary User, First Clock-In)

Miguel, 24, seasonal hire on Marcus's landscaping crew. His primary language is Spanish. Marcus sends him a SMS invite link on Monday morning. Miguel taps it, downloads the app (1.2 MB install), creates his account with phone number and sets his name. The app shows one screen: "Allow location — always." He taps Allow.

Tuesday morning: the truck arrives at the first job site. Miguel's phone buzzes. He reads "Tap to clock in: Cedar Ridge HOA" and taps the green button. Done. He has never opened the app before. He will never need to navigate a menu.

**Requirements revealed:** SMS invite link to onboarding, phone-number-based account creation, "Always on" location permission prompt with single explanation screen, locked-screen push notification with single-tap response, Spanish language support (Phase 2 consideration), minimal app UI for employees (clock status only).

---

### Journey Requirements Summary

| Journey | Capability Revealed |
|---------|---------------------|
| Marcus success path | GPS geofence prompt, job setup, SMS invite, mobile daily approval, QB CSV export, fast onboarding |
| Marcus error recovery | Provisional auto-clock-out, flag queue, owner edit/confirm on flags, GPS accuracy display |
| Sarah QB integration | 14-day export period, email delivery, exact QB column mapping, GPS log access, mobile approval |
| David fraud prevention | GPS coordinate logging, distance flag on clock-in, site history view, cheap Android support |
| Miguel first clock-in | SMS invite, phone-number signup, location permission prompt, locked-screen notification, minimal employee UI |

---

## Domain-Specific Requirements

### Regulatory & Compliance Context

**Wage and hour liability:** The core user segment (construction, landscaping, cleaning) faces DOL wage theft enforcement as a top compliance risk. A GPS-verified timestamp trail for every employee clock-in/out creates an audit-ready record that eliminates the owner's exposure when employees dispute hours or when regulators request payroll records. The system must retain all raw GPS events (not just approved summaries) for a minimum of 3 years.

**Overtime law compliance:** Federal law requires 1.5× pay for hours over 40 per week. The system must track regular and overtime hours separately and export them in distinct columns. California's 8/80 alternative workweek rule (and similar state-level variations) is a Phase 3 feature — MVP alerts at configurable daily and weekly thresholds and labels hours as Regular or Overtime in the export without applying state-specific calculation logic.

**Prevailing wage (Phase 3):** Davis-Bacon Act requires certified payroll on federally funded construction projects. The architecture should not preclude adding multiple pay rates per employee per job site and the Form WH-347 certified payroll report in Phase 3. No Phase 1 implementation required — just avoid architectural decisions that would block it.

**Privacy:** GPS tracking of employees raises privacy considerations. The system must:
- Disclose GPS tracking to employees during onboarding (consent prompt)
- Track GPS only during working hours (geofence events only; no continuous background tracking)
- Not expose individual employee GPS locations to other employees
- Allow owner to delete an employee's account and data on separation

### Technical Constraints from Field Conditions

**GPS signal variability:** Field conditions degrade GPS accuracy: multi-story buildings, downtown canyons, rural areas with sparse tower coverage, and roofed work areas. The system must:
- Record and display GPS accuracy radius (in meters) alongside each clock-in event
- Flag events where accuracy radius exceeds 100m (unreliable fix) for owner review
- Fall back to manual job-site selection when GPS accuracy is insufficient
- Never silently drop a clock-in event due to poor GPS — record it with accuracy metadata

**Connectivity variability:** Field crews routinely work in areas with poor or no cellular connectivity. All clock-in/out events must work fully offline with local-first storage and transparent sync on connectivity restore.

**Low-end device support:** The target employee device is a $100–$200 Android phone (Motorola Moto G-series, Samsung Galaxy A-series). App must perform on 3GB RAM, Android 9+, without requiring high-accuracy GPS hardware. Background location permission behavior varies significantly across Android OEM skins (Samsung One UI, Motorola My UX, Xiaomi MIUI) — the onboarding location permission flow must be tested on the top 5 OEM variants.

**Battery impact:** Background GPS polling is the #1 reason employees disable location permissions. The system must use geofencing APIs (Android Geofencing API, iOS Core Location region monitoring) rather than continuous GPS polling to minimize battery drain. Target: less than 3% battery drain per 8-hour shift from geofence monitoring alone.

### Integration Requirements

**QuickBooks Online CSV (MVP):** The payroll export CSV must match QuickBooks Online's manual time-entry import format exactly. Required columns (verified against QB Online import spec): Employee Name, Date, Start Time, End Time, Duration (decimal hours), Job/Customer, Regular Hours, Overtime Hours, Pay Rate, Pay Amount. No additional post-processing by the accountant should be required.

**QuickBooks Online API (Phase 2):** OAuth2-based integration using the QuickBooks Time (formerly TSheets) API. Approved timesheets push as time activities mapped by QB employee and QB customer/job.

---

## Innovation & Novel Patterns

### Detected Innovation: Geofence-as-Job-Site-Identity

The core innovation is treating a GPS geofence not as a passive location boundary (as competitors do) but as an active job identity trigger. When an employee's device enters a geofence, the system resolves which specific job is at that location and surfaces a pre-populated clock-in action. The employee's cognitive load drops to zero: no list to navigate, no job to select, no room for error.

This pattern inverts the prevailing assumption that GPS in time tracking is about verification after the fact. Here, GPS is the initiating event for the workflow itself.

**Why no competitor has done this in the sub-$10/user tier:**
- Competitors with large bases (ClockShark, Hubstaff) evolved from web-first products — their mobile apps are ports, not purpose-built
- Enterprise solutions (Workyard) have this partially but charge $50 base + $6–13/user to access it
- Free tools (Toggl, Clockify) have no concept of a job site as a GPS-bounded entity
- The technical complexity of reliable geofencing on cheap Android hardware (battery, OEM permission quirks, accuracy degradation) is a real barrier that has kept this feature expensive

### Innovation Validation Approach

**Technical validation:** Closed beta tests must include diverse device types (flagship iOS, mid-range Android, low-end Android), diverse environments (rural, suburban, downtown, multi-story), and diverse crew sizes (5, 15, 35 employees). Specific metric: geofence trigger fires within 30 seconds of true geofence crossing in ≥95% of test events across all device/environment combinations.

**Adoption validation:** The innovation fails if employees disable location permission within the first week. Track location permission status for all beta employees at 7-day, 14-day, and 30-day intervals. Target: ≥85% of employees still have "Always On" location permission at day 30.

**Risk mitigation:** If Android OEM geofencing reliability falls below the 95% threshold on specific device families, fall back to: (a) showing a nearby-job banner when the employee opens the app while near a geofence, and (b) distance-sorted manual job list. This fallback preserves the "right job, no searching" UX even without a true geofence trigger.

---

## Mobile App Specific Requirements

### Platform Requirements

- **iOS:** Minimum iOS 15 (covers 95%+ of active iOS devices as of 2026). Uses Core Location CLCircularRegion region monitoring for geofencing.
- **Android:** Minimum Android 9 (API level 28). Uses Android Geofencing API. Background location permission (ACCESS_BACKGROUND_LOCATION) required — onboarding must walk through Android's mandatory "Allow all the time" flow for each OEM variant tested.
- **Cross-platform framework:** React Native or Flutter preferred (single codebase, native performance for GPS and notifications). Decision deferred to architecture phase.
- **Tablet support:** Not required for MVP. Phones only.

### Device Permissions Required (Employee App)

- **Location — Always On** (required): Enables geofence monitoring when app is backgrounded or screen is locked. Without this, the core GPS clock-in prompt does not work.
- **Push notifications** (required): Clock-in/clock-out prompts are delivered as push notifications. Without this, employees cannot use the geofence-triggered workflow.
- **No other permissions required** for employee MVP. Camera, contacts, storage are not needed.

### Owner App Permissions

- **Location — While Using** (optional): Enables owner to see their own clock-in status if they work alongside crew.
- **Push notifications** (required): OT alerts and daily summary notifications.

### Offline Mode

- All employee clock-in/out events must function with zero connectivity. Local storage (SQLite or equivalent) buffers events with ISO 8601 timestamps.
- Sync queue processes in background when connectivity restores. If sync fails, retry with exponential backoff (max 4 retries over 24 hours).
- UI shows a persistent "Offline" indicator when device has no connectivity. Synced-offline clock-ins show a "Synced from offline" note in the owner's review view.

### Push Notification UX

- Clock-in/out prompts appear on the lock screen with a single-tap action button. Employee never needs to open the app.
- Notifications are delivered via APNs (iOS) and FCM (Android). Background delivery requires "high-priority" FCM messages to bypass Doze mode on Android.
- Notification body: *"Tap to clock in: [Job Site Name]"* / *"Tap to clock out: [Job Site Name]"*
- If employee dismisses without tapping: no action taken, no automatic clock-in. App shows manual clock-in prompt on next open.

### Employee App UX Constraints

- Maximum 3 taps from receiving a geofence notification to confirmed clock-in (including unlocking phone)
- Employee home screen shows one of three states only: Clocked Out, Clocked In (job name + elapsed time), Offline. No other information.
- Employee cannot view other employees' data
- Employee cannot edit past clock-in entries after owner approves them
- Localization: English only for MVP. Architecture must support i18n for Spanish (Phase 2)

---

## Project Scoping & Phased Development

### MVP Strategy & Philosophy

**MVP Approach:** Problem-solving MVP. The product is successful the moment an owner completes their first Friday payroll review in under 20 minutes. Every MVP decision optimizes for this single outcome. Features that do not directly enable or protect this workflow are deferred.

**Resource Requirements:** Two mobile developers (iOS or cross-platform), one backend developer, one designer. Four-week build to functional alpha; eight weeks to closed beta launch.

### MVP Feature Set (Phase 1)

**Core user journeys supported:**
- Marcus success path: full GPS clock-in → daily approval → weekly export workflow
- Marcus error recovery: flagged provisional clock-out, owner review and confirm
- David fraud prevention: GPS coordinate logging, distance flag, site history

**Must-have capabilities for MVP launch:**
- Job site management (address → geofence, configurable radius, unlimited sites)
- GPS geofence-triggered clock-in/out push notification prompt
- Manual clock-in with distance-sorted job site list (offline / poor signal fallback)
- Provisional auto-clock-out with owner flag queue
- Offline clock-in/out with local storage and transparent sync
- Mobile daily timesheet approval (approve / flag per-employee row)
- Owner edit/confirm on flagged entries
- OT threshold push alert (configurable daily + weekly, fires at 85%)
- Weekly CSV export in QuickBooks Online format
- SMS/email employee invite + phone-number account creation
- Team management (add/remove employees, set pay rate, view live status)
- GPS accuracy display on flagged events
- 3-year GPS event data retention

### Post-MVP Features (Phase 2)

- Native QuickBooks Online API sync (deferred: API maintenance cost too high for LTD accounts until MRR validates the investment)
- Gusto direct payroll integration
- Job cost report (hours × rate per job site, per period)
- Web dashboard for owner review and export
- Foreman / crew lead approval tier
- Sub-contractor / 1099 worker support

### Post-MVP Features (Phase 3 / Premium)

- Prevailing wage / certified payroll (Davis-Bacon, Form WH-347) — $19/month add-on
- Multi-rate support (different rates per site type)
- Scheduling (assign employees to specific job sites by day)
- State wage law alerts (CA 8/80 rule, etc.)
- Equipment / asset tracking
- API for third-party integrations (Jobber, ServiceTitan, Procore)

### Risk Mitigation Strategy

**Technical risks:**
- Android OEM geofencing reliability varies. Mitigation: Test on top 5 Android OEM families in closed beta; implement manual nearby-job banner as fallback. Define 90% threshold (not 95%) as "pass" for problematic OEM families while tracking for improvement.
- QuickBooks Online CSV format changes. Mitigation: Pin to verified column spec; build export tests against a live QB sandbox account; notify users if format changes.

**Market risks:**
- Employees resist "Always On" location permission. Mitigation: Employee onboarding explicitly states GPS is only used during work-hour geofence events (not continuous tracking); include privacy explanation screen. Track permission revocation rate as a beta health metric.

**Resource risks:**
- Geofencing complexity delays MVP. Mitigation: If GPS reliability cannot hit 95% threshold in time, launch with nearby-job banner as primary (not geofence push) and iterate geofence reliability post-launch. The CSV export and approval workflow can ship before GPS is perfected.

---

## Functional Requirements

### Job Site Management

- FR1: Owner can create a job site by entering a street address; system resolves the address to GPS coordinates and draws a default 100m geofence
- FR2: Owner can create a job site by dropping a pin on a map
- FR3: Owner can adjust a job site's geofence radius between 50m and 500m
- FR4: Owner can rename a job site and assign it an optional color tag
- FR5: Owner can pause a job site (suspends geofence monitoring and clock-in prompts without deleting the site)
- FR6: Owner can archive a job site (removes it from active list, preserves historical records)
- FR7: System supports unlimited job sites per account
- FR8: Owner can view all active job sites on a map with employee presence indicators

### GPS Geofence Clock-In

- FR9: System sends a push notification to an employee's device when they enter a job site geofence
- FR10: Push notification contains a single-tap clock-in action that works from the device lock screen
- FR11: System records GPS coordinates, timestamp, GPS accuracy radius (in meters), and job site ID for each GPS-triggered clock-in event
- FR12: System flags a clock-in event for owner review when the employee's GPS position at confirmation time is more than 200m from the job site center
- FR13: Employee can dismiss a geofence clock-in notification without clocking in (no action taken)

### Manual Clock-In Override

- FR14: Employee can manually initiate a clock-in at any time by opening the app
- FR15: Manual clock-in presents a list of active job sites sorted by distance from the employee's current GPS position
- FR16: Employee can clock in to any job site manually regardless of their GPS position (required for indoor work, poor signal areas)
- FR17: Manual clock-in events are labeled as "Manual" in the owner's review view

### Clock-Out

- FR18: System sends a push notification to an employee's device when they exit a job site geofence
- FR19: Push notification contains a single-tap clock-out action that works from the device lock screen
- FR20: System records GPS coordinates, timestamp, and GPS accuracy radius for each GPS-triggered clock-out event
- FR21: If an employee exits a geofence but does not confirm clock-out within 30 minutes, the system records a provisional clock-out with a flag for owner review
- FR22: Employee can manually clock out at any time from within the app

### Offline Support

- FR23: Employee can clock in and out with zero network connectivity; events are stored locally with the device-local timestamp
- FR24: Locally stored events sync automatically to the server when connectivity is restored
- FR25: App shows a persistent offline indicator when the device has no connectivity
- FR26: Owner's review view labels synced-offline clock-in events with an "Offline sync" note
- FR27: System retains local clock-in events for a minimum of 7 days on-device, or until sync succeeds

### Daily Timesheet Review & Approval

- FR28: Owner receives a push notification each evening summarizing the day's activity (employees clocked in, total hours, flagged items)
- FR29: Owner can view a daily timesheet list showing each active employee's name, job site, hours, and status (Approved / Flagged / Pending)
- FR30: Owner can approve an employee's daily timesheet with a single tap
- FR31: Owner can flag an employee's daily timesheet for review with a single tap
- FR32: Flagged timesheets show the raw clock-in/out times, GPS accuracy, and flag reason for investigation
- FR33: Owner can view and edit the underlying clock-in/out times on a flagged timesheet before approving
- FR34: Owner can confirm a provisional auto-clock-out time or replace it with a manually entered time
- FR35: Approved timesheets are locked against employee editing

### Overtime Monitoring

- FR36: Owner can configure daily OT threshold per employee (default 8 hours)
- FR37: Owner can configure weekly OT threshold per employee (default 40 hours)
- FR38: System sends a push notification to the owner when any employee's hours reach 85% of their daily or weekly OT threshold
- FR39: OT alert identifies the employee by name, shows current hours, and shows projected time to OT at current pace
- FR40: Payroll export separates regular hours and overtime hours in distinct columns per employee per day

### Payroll Export

- FR41: Owner can generate a CSV export for any date range (default: current week)
- FR42: Export includes per-day rows: Employee Name, Employee ID, Date, Clock-In Time, Clock-Out Time, Duration (decimal), Regular Hours, OT Hours, Job Site Name, Job Site ID, Pay Rate, Pay Amount
- FR43: Export column order and header names match QuickBooks Online manual time-entry import format
- FR44: Owner can email the export directly from the app or save it to device storage
- FR45: System retains all raw GPS clock-in events for a minimum of 3 years for audit purposes

### Team & Employee Management

- FR46: Owner can invite employees via SMS invite link or email invite link
- FR47: Employee account creation requires only a phone number (or email) and a display name
- FR48: Owner can set a per-employee hourly pay rate (used in payroll export calculations)
- FR49: Owner can view a live team status showing each employee's current clock-in state and active job site
- FR50: Owner can remove an employee from the account (all historical data retained for 3 years)
- FR51: Employee app is invitation-only; no public self-registration

### Privacy & Employee Consent

- FR52: Employee onboarding presents a disclosure screen explaining that GPS location is tracked during work-hour geofence events only
- FR53: Employee must acknowledge the GPS tracking disclosure before the first clock-in
- FR54: GPS data for individual employees is visible only to the account owner; employees cannot view other employees' data
- FR55: Owner can export and delete an individual employee's GPS data on request (employment separation)

---

## Non-Functional Requirements

### Performance

- **GPS geofence trigger latency:** Geofence entry/exit events must be detected and delivered to the employee's device within 30 seconds of the true boundary crossing in ≥95% of field conditions on supported devices
- **App launch time:** App reaches ready state (clock-in/out action available) within 2 seconds on a Motorola Moto G-series equivalent device (3GB RAM, Android 9, mid-range CPU)
- **Notification delivery:** Push notifications for clock-in/out prompts deliver within 15 seconds of geofence event in areas with cellular connectivity
- **Export generation:** Payroll CSV export for a full week with up to 50 employees generates in under 5 seconds
- **API response time:** All owner and employee app API calls respond in under 1 second under normal load (p95)

### Security

- **Data in transit:** All API communication encrypted via TLS 1.3. GPS coordinates and timesheet data never transmitted unencrypted.
- **Data at rest:** GPS event data and payroll records encrypted at rest using AES-256
- **Authentication:** Employee and owner accounts authenticated via phone number + SMS OTP or email + magic link. No passwords stored.
- **Access control:** Employees can access only their own clock-in/out history. Owners can access all data for their account. No cross-account data access.
- **GPS event audit trail:** Raw GPS events are immutable once synced to the server. Approved timesheets are locked. All edits (owner edit of a flagged entry) are logged with a timestamp and the owner's user ID.
- **Employee data privacy:** GPS tracking is event-driven (geofence crossing only) — not continuous location polling. Employees' real-time positions are not stored between geofence events.

### Reliability

- **Uptime:** 99.5% monthly uptime for the server-side API (4 hours downtime per month maximum). GPS clock-in continues offline during outages.
- **Offline resilience:** The employee clock-in/out workflow must be fully functional with zero connectivity. No data loss permitted during connectivity interruptions.
- **Data durability:** Once a clock-in event syncs to the server, it must be durably stored with zero loss probability (distributed storage with replication)
- **Push notification reliability:** ≥98% of geofence-triggered notifications reach the target device within 60 seconds in areas with cellular connectivity. Failures are logged for monitoring.

### Scalability

- **Per-account scale:** MVP must support accounts with up to 50 employees and 100 active job sites without performance degradation
- **Platform scale:** Infrastructure must support 500 active accounts (25,000 active employees) by 12 months post-launch with no architectural re-work
- **GPS event volume:** System must handle 200 GPS events per minute (aggregate across all accounts) at 12-month projected scale with p95 processing time under 2 seconds

### Accessibility

- **Device accessibility:** App must be fully usable on sub-$200 Android devices (Motorola Moto G-series, Samsung Galaxy A-series). No features may require hardware not present on these devices.
- **Low-literacy UX:** Employee clock-in flow must be completable by users with limited English literacy. Core action (clock in / clock out) must be conveyed visually (green/red indicator + job site name) in addition to English text.
- **Font size:** App must support Android and iOS system-level font size adjustments without breaking core layouts
- **Notification readability:** Lock-screen notification text must be legible at minimum 14pt equivalent; job site name must be clearly prominent

### Integration

- **QuickBooks Online CSV:** Export format must be validated against a live QuickBooks Online sandbox import before each release. Any QB format change that breaks the import must be treated as a P1 bug with same-day fix SLA.
- **Push notification infrastructure:** Use APNs (Apple) and FCM (Google) for push delivery. No proprietary push service that creates vendor lock-in on critical geofence notification path.
- **Future integrations (Phase 2+):** API design must use standard REST + JSON with OAuth2 authentication to enable future QuickBooks Online API, Gusto, and third-party integrations without core re-architecture.

---

*PRD completed: 2026-04-30*
*Based on: Product Brief (2026-04-30), Market Research (2026-04-30), Shortlisted Idea (85/105 score, 6 Reddit signal cycles)*
*Next steps: Architecture → Epics & Stories → Sprint Planning → Story Creation → Dev Implementation*
